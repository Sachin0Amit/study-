import type { SectionContent } from "../library"

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 40: All About Atoms (HRW 1219–1251), 7 sections.
// Section ids match src/data/library-parts/halliday.ts exactly.
// ============================================================================

export const hallCh40Content: SectionContent[] = [
  // ------------------------------------------------------------------ 40.1
  {
    sectionId: "hall-ch40-s1",
    readingTime: 6,
    intro: "An atom is more than the Bohr hydrogen picture: every electron carries both orbital and spin angular momentum, and each of them drags around a magnetic dipole moment. Because these quantities are quantized, an atom placed in a magnetic field can assume only a discrete menu of orientations. This section assembles the quantum numbers and magnetic moments that the rest of the chapter — Stern–Gerlach, resonance, the periodic table — will use as its vocabulary.",
    objectives: [
      "Compute the magnitude and z component of an electron's orbital and spin angular momentum from the quantum numbers $\\ell$, $m_\\ell$, $s$ and $m_s$",
      "Relate orbital and spin angular momentum to the corresponding magnetic dipole moments and evaluate the Bohr magneton",
      "Combine orbital and spin contributions into the total angular momentum J of an atom",
    ],
    concepts: [
      {
        term: "Orbital angular momentum",
        kind: "law",
        statement: "A bound electron with orbital quantum number $\\ell = 0, 1, \\ldots, n-1$ has angular momentum of magnitude $$L = \\sqrt{\\ell(\\ell+1)}\\,\\hbar$$ whose projection on any chosen z axis is restricted to $L_z = m_\\ell\\hbar$ with $m_\\ell = -\\ell, \\ldots, 0, \\ldots, +\\ell$ — the vector has length $\\sqrt{\\ell(\\ell+1)}\\,\\hbar$ but can never point exactly along z, since $|m_\\ell| \\le \\ell < \\sqrt{\\ell(\\ell+1)}$.",
        detail: "With $\\hbar = 1.055\\times10^{-34}\\ \\mathrm{J\\cdot s}$, a 2p electron ($\\ell = 1$) has $L = \\sqrt{2}\\,\\hbar = 1.49\\times10^{-34}\\ \\mathrm{J\\cdot s}$ and allowed projections $L_z = +\\hbar, 0, -\\hbar$.",
      },
      {
        term: "Orbital magnetic dipole moment",
        kind: "definition",
        statement: "An orbiting electron is a current loop, and its magnetic dipole moment is **antiparallel** to its angular momentum: $$\\vec\\mu_\\mathrm{orb} = -\\frac{e}{2m_e}\\vec L,\\qquad \\mu_\\mathrm{orb} = \\sqrt{\\ell(\\ell+1)}\\,\\mu_B,$$ where the **Bohr magneton** $\\mu_B = eh/4\\pi m_e = 9.27\\times10^{-24}\\ \\mathrm{J/T}$ is the natural unit of atomic magnetism.",
        detail: "Because the electron is negative, the moment points opposite $\\vec L$; the ratio $\\mu/L$ is called the orbital gyromagnetic ratio and equals $e/2m_e$ to remarkable precision.",
      },
      {
        term: "Spin and spin magnetic moment",
        kind: "definition",
        statement: "Electrons carry an intrinsic angular momentum with $s = 1/2$: $$S = \\sqrt{s(s+1)}\\,\\hbar = \\tfrac{\\sqrt{3}}{2}\\hbar,\\qquad S_z = m_s\\hbar = \\pm\\tfrac{1}{2}\\hbar.$$ The spin magnetic moment is twice as effective per unit angular momentum as the orbital one: $\\vec\\mu_s = -(e/m_e)\\vec S$, so $\\mu_{s,z} = \\mp\\mu_B$.",
        detail: "This factor-of-2 surprise has no classical explanation; it emerges from the Dirac equation of relativistic quantum mechanics and is the reason spin effects dominate the Stern–Gerlach pattern of atoms whose orbital momentum is zero.",
      },
      {
        term: "Total angular momentum",
        kind: "insight",
        statement: "In a real atom the electron's $\\vec L$ and $\\vec S$ couple into a total $\\vec J = \\vec L + \\vec S$ with $J = \\sqrt{j(j+1)}\\,\\hbar$, where $j = |\\ell \\pm 1/2|$ for a single electron; only $J$ and one component (say $J_z$) can be sharp at the same time.",
        detail: "This spin–orbit coupling splits spectral lines into fine-structure doublets — the fingerprint, for example, of the sodium D lines at 589.0 and 589.6 nm.",
      },
      {
        term: "Properties of Atoms: solution protocol",
        kind: "method",
        statement: "**Solve Properties of Atoms problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is atomic angular momentum, X rays and lasers; the working equation is $L = \\sqrt{l(l+1)}\\hbar$, $L_z = m_l\\hbar$, $\\lambda_{\\min} = hc/eV$, $\\mu_B = 9.27\\times 10^{-24}\\ \\text{J/T}$; every substitution must carry its units so the final unit (tesla and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$; single-electron picture first; Pauli plus Coulomb for many electrons.",
      },
    ],
    examples: [
      {
        title: "Magnetic moment of a 2p electron",
        problem: "An electron in a hydrogen atom occupies the 2p state ($n = 2$, $\\ell = 1$). Find the magnitude of its orbital angular momentum, its magnetic dipole moment, and the possible values of $L_z$.",
        steps: [
          { label: "Setup", text: "With $\\ell = 1$ the angular momentum magnitude is $L = \\sqrt{\\ell(\\ell+1)}\\,\\hbar = \\sqrt{2}\\,\\hbar$." },
          { label: "Numbers", text: "$L = 1.414 \\times 1.055\\times10^{-34}\\ \\mathrm{J\\cdot s} = 1.49\\times10^{-34}\\ \\mathrm{J\\cdot s}$." },
          { label: "Moment", text: "The moment is $\\mu_\\mathrm{orb} = \\sqrt{2}\\,\\mu_B = 1.414 \\times 9.27\\times10^{-24}\\ \\mathrm{J/T}$." },
          { label: "Projections", text: "$m_\\ell = +1, 0, -1$ gives $L_z = +\\hbar, 0, -\\hbar$, i.e. $+1.055\\times10^{-34}$, $0$, or $-1.055\\times10^{-34}\\ \\mathrm{J\\cdot s}$." },
        ],
        result: "$L = 1.49\\times10^{-34}\\ \\mathrm{J\\cdot s}$, $\\mu_\\mathrm{orb} = 1.31\\times10^{-23}\\ \\mathrm{J/T}$, and $L_z \\in \\{+\\hbar, 0, -\\hbar\\}$.",
      },
      {
        title: "Properties of Atoms: $\\lambda_{\\min}$ check",
        problem: "An X-ray tube runs at $V = 70\\ \\text{kV}$. Find $\\lambda_{\\min} = hc/eV = 1240/(V\\text{ in volts})\\ \\text{nm}$.",
        steps: [
          { label: "Volts", text: "$eV = 70\\times 10^3\\ \\text{eV}$." },
          { label: "Divide", text: "$\\lambda_{\\min} = 1240/70000 = 1.77\\times 10^{-11}\\ \\text{m} = 17.7\\ \\text{pm}$." },
        ],
        result: "$\\lambda_{\\min} \\approx 17.7\\ \\text{pm}$.",
      },
    ],
    keyTakeaways: [
      "Orbital angular momentum is quantized in both magnitude ($\\sqrt{\\ell(\\ell+1)}\\hbar$) and projection ($m_\\ell\\hbar$), with $2\\ell+1$ allowed orientations.",
      "Each unit of angular momentum carries a magnetic moment, with the spin gyromagnetic ratio twice the orbital one; the Bohr magneton $\\mu_B = 9.27\\times10^{-24}\\ \\mathrm{J/T}$ sets the scale.",
      "Spin is intrinsic and universal: every electron has $s = 1/2$ with only two projections, $\\pm\\hbar/2$, whatever its orbital state.",
    ],
    quiz: [
      { q: "For an electron with principal quantum number n = 3, which set of orbital quantum numbers l is allowed?", options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "only 2"], answer: 0, explanation: "For a given n, l runs from 0 up to n − 1, so n = 3 gives l = 0, 1, 2 (the 3s, 3p, 3d subshells)." },
      { q: "How many orientations does the orbital angular momentum vector have for l = 2?", options: ["2", "3", "4", "5"], answer: 3, explanation: "$m_\\ell$ takes the $2\\ell+1 = 5$ values $-2, -1, 0, +1, +2$; the vector can be drawn on five distinct cones about the z axis." },
      { q: "An electron's spin magnetic moment component is related to $S_z$ by $\\mu_{s,z} = -(e/m_e)S_z$. Compared with the orbital relation $\\mu_\\mathrm{orb} = -(e/2m_e)L$, spin magnetism is", options: ["half as effective per unit angular momentum", "equally effective", "twice as effective", "four times as effective"], answer: 2, explanation: "The spin gyromagnetic ratio $e/m_e$ is exactly twice the orbital ratio $e/2m_e$ — a purely relativistic (Dirac) result with no classical analog." },
      { q: "The Bohr magneton has magnitude", options: ["$5.05\\times10^{-27}\\ \\mathrm{J/T}$", "$9.27\\times10^{-24}\\ \\mathrm{J/T}$", "$1.055\\times10^{-34}\\ \\mathrm{J/T}$", "$1.60\\times10^{-19}\\ \\mathrm{J/T}$"], answer: 1, explanation: "$\\mu_B = eh/4\\pi m_e = 9.27\\times10^{-24}\\ \\mathrm{J/T}$; the first option is the nuclear magneton, smaller by $m_e/m_p \\approx 1/1836$." },
    ],
  },

  // ------------------------------------------------------------------ 40.2
  {
    sectionId: "hall-ch40-s2",
    readingTime: 6,
    intro: "In 1922 Stern and Gerlach sent a narrow beam of silver atoms through a strongly nonuniform magnetic field and caught them on a glass plate. Classical physics predicts a continuous smear; quantum physics predicts a set of discrete spots. The experiment delivered space quantization to the laboratory — and, because silver atoms have zero orbital angular momentum, the two observed spots revealed the electron's spin.",
    objectives: [
      "Explain why a magnetic dipole feels a net force only in a nonuniform field and compute that force",
      "Trace how the silver-atom ground state reduces the beam to a two-way split governed by spin alone",
      "Interpret the two-spot pattern as direct evidence for space quantization and for $m_s = \\pm1/2$",
    ],
    concepts: [
      {
        term: "Force on a dipole in a nonuniform field",
        kind: "law",
        statement: "In a uniform field a magnetic dipole feels a torque $\\vec\\tau = \\vec\\mu \\times \\vec B$ but no net force. In a field varying along z, the force is $$F_z = -\\frac{\\partial U}{\\partial z} = \\mu_z\\,\\frac{\\partial B_z}{\\partial z},$$ so atoms with different $\\mu_z$ are pushed different amounts — the field acts as a spin sorter.",
        detail: "A gradient of $10^3\\ \\mathrm{T/m}$ (about 10 T per mm, achievable between shaped pole pieces) acting on one Bohr magneton gives a force of order $10^{-20}\\ \\mathrm{N}$ — tiny, but enough over a flight of centimeters to separate the spin populations by millimeters.",
      },
      {
        term: "The silver atom's lone 5s electron",
        kind: "insight",
        statement: "Silver (Z = 47) has the ground-state configuration $[\\mathrm{Kr}]\\,4d^{10}5s^1$: the 46 inner electrons pair off with zero net angular momentum, so the atom's entire magnetic character comes from the single 5s electron, which has $\\ell = 0$ and $s = 1/2$.",
        detail: "With $L = 0$ the orbital moment vanishes, and only the two spin projections $m_s = \\pm1/2$ remain — the beam must split into exactly two parts, not the $2\\ell+1 = 1$ of the orbital theory or the continuum of classical physics.",
      },
      {
        term: "Space quantization made visible",
        kind: "definition",
        statement: "The Stern–Gerlach result — **two** sharp spots, one deflected toward the strong-field region, one away — is direct experimental proof that the orientation of an atomic magnetic moment is quantized: the projection $\\mu_z$ takes only the discrete values $\\pm\\mu_B$ for silver.",
        detail: "The 1922 experiment (with the interpretation completed by Uhlenbeck, Goudsmit and others in 1925–26) was the first observation of spin quantization and remains the cleanest demonstration that quantum numbers label real, measurable orientations.",
      },
      {
        term: "The Stern–Gerlach Experiment: solution protocol",
        kind: "method",
        statement: "**Solve The Stern–Gerlach Experiment problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is atomic angular momentum, X rays and lasers; the working equation is $L = \\sqrt{l(l+1)}\\hbar$, $L_z = m_l\\hbar$, $\\lambda_{\\min} = hc/eV$, $\\mu_B = 9.27\\times 10^{-24}\\ \\text{J/T}$; every substitution must carry its units so the final unit (tesla and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$; single-electron picture first; Pauli plus Coulomb for many electrons.",
      },
      {
        term: "The Stern–Gerlach Experiment: scales and validity",
        kind: "insight",
        statement: "**The Stern–Gerlach Experiment lives at $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$ and the textbook model holds while single-electron picture first; Pauli plus Coulomb for many electrons.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a The Stern–Gerlach Experiment calculation gives seconds when tesla and $\\text{eV}$ demands meters, or a value orders of magnitude beyond $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: "The Stern–Gerlach experiment: silver atoms evaporate from an oven, are collimated into a beam, and pass between asymmetric pole pieces that produce a strong vertical field gradient. A uniform field would merely torque the atoms; the gradient exerts $F_z = \\mu_z\\,\\partial B_z/\\partial z$, splitting the beam into two spots on the collector plate — one for each spin projection of the lone 5s electron.",
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stern-Gerlach apparatus"><rect x="0" y="0" width="720" height="300" fill="currentColor" opacity="0.03"/><text x="360" y="22" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">Stern-Gerlach experiment: the silver beam splits in two</text><rect x="20" y="112" width="72" height="76" fill="none" stroke="currentColor" stroke-width="2"/><text x="56" y="104" text-anchor="middle" font-size="13" fill="currentColor">oven (Ag)</text><text x="56" y="156" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7">T = 1200 K</text><rect x="108" y="132" width="7" height="14" fill="currentColor"/><rect x="108" y="154" width="7" height="14" fill="currentColor"/><rect x="126" y="132" width="7" height="14" fill="currentColor"/><rect x="126" y="154" width="7" height="14" fill="currentColor"/><path d="M 96 150 L 200 150" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><polygon points="200,150 208,147 208,153" fill="currentColor"/><polygon points="200,55 420,55 420,95 312,118 200,95" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="2"/><text x="245" y="82" font-size="14" font-weight="700" fill="currentColor">N</text><rect x="200" y="215" width="220" height="34" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="2"/><text x="245" y="238" font-size="14" font-weight="700" fill="currentColor">S</text><line x1="235" y1="98" x2="235" y2="205" stroke="currentColor" stroke-width="1.4"/><polygon points="235,212 231,203 239,203" fill="currentColor"/><line x1="312" y1="124" x2="312" y2="205" stroke="currentColor" stroke-width="1.4"/><polygon points="312,212 308,203 316,203" fill="currentColor"/><line x1="385" y1="98" x2="385" y2="205" stroke="currentColor" stroke-width="1.4"/><polygon points="385,212 381,203 389,203" fill="currentColor"/><text x="418" y="180" font-size="12" fill="currentColor" opacity="0.75">B (nonuniform)</text><path d="M 208 150 Q 320 150 420 106" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M 208 150 Q 320 150 420 194" fill="none" stroke="currentColor" stroke-width="2.4"/><line x1="420" y1="106" x2="584" y2="74" stroke="currentColor" stroke-width="2.4"/><line x1="420" y1="194" x2="584" y2="226" stroke="currentColor" stroke-width="2.4"/><line x1="330" y1="146" x2="330" y2="122" stroke="currentColor" stroke-width="2.2"/><polygon points="330,114 325,126 335,126" fill="currentColor"/><line x1="352" y1="156" x2="352" y2="180" stroke="currentColor" stroke-width="2.2"/><polygon points="352,188 347,176 357,176" fill="currentColor"/><text x="365" y="127" font-size="12" fill="currentColor">F up</text><text x="386" y="190" font-size="12" fill="currentColor">F down</text><rect x="592" y="45" width="11" height="210" fill="currentColor" opacity="0.85"/><text x="597" y="38" text-anchor="middle" font-size="12" fill="currentColor">collector</text><circle cx="590" cy="74" r="4.5" fill="currentColor"/><circle cx="590" cy="226" r="4.5" fill="currentColor"/><text x="613" y="78" font-size="12.5" fill="currentColor">spin-up atoms</text><text x="613" y="230" font-size="12.5" fill="currentColor">spin-down atoms</text><text x="360" y="285" text-anchor="middle" font-size="12.5" fill="currentColor" opacity="0.8">F = μz (dB/dz): the gradient, not the field, does the sorting</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Deflection of a silver atom in the magnet",
        problem: "Silver-108 atoms (mass 108 u) travel at 500 m/s through a 3.5 cm magnet with field gradient $\\partial B_z/\\partial z = 1.0\\times10^{3}\\ \\mathrm{T/m}$, then fly 0.50 m to the collector. With $\\mu_z = \\pm\\mu_B$, estimate the deflection of one spot.",
        steps: [
          { label: "Force", text: "$F_z = \\mu_B\\,(\\partial B/\\partial z) = (9.27\\times10^{-24})(1.0\\times10^{3}) = 9.27\\times10^{-21}\\ \\mathrm{N}$." },
          { label: "Acceleration", text: "$m = 108 \\times 1.66\\times10^{-27} = 1.79\\times10^{-25}\\ \\mathrm{kg}$, so $a = F/m = 5.18\\times10^{4}\\ \\mathrm{m/s^2}$." },
          { label: "Inside the magnet", text: "Time in the field: $t_1 = 0.035/500 = 7.0\\times10^{-5}\\ \\mathrm{s}$; the atom leaves with $v_z = at_1 = 3.6\\ \\mathrm{m/s}$, displaced $\\tfrac{1}{2}at_1^2 = 0.13\\ \\mathrm{mm}$." },
          { label: "Free flight", text: "The remaining 0.50 m takes $t_2 = 1.0\\times10^{-3}\\ \\mathrm{s}$, adding $v_z t_2 = 3.6\\ \\mathrm{mm}$." },
        ],
        result: "Each spot sits about 3.7 mm from the axis, so the two spin populations land roughly 7 mm apart — a visible split, matching the millimeter-scale separations Stern and Gerlach photographed.",
      },
      {
        title: "The Stern–Gerlach Experiment: $\\lambda_{\\min}$ check",
        problem: "An X-ray tube runs at $V = 30\\ \\text{kV}$. Find $\\lambda_{\\min} = hc/eV = 1240/(V\\text{ in volts})\\ \\text{nm}$.",
        steps: [
          { label: "Volts", text: "$eV = 30\\times 10^3\\ \\text{eV}$." },
          { label: "Divide", text: "$\\lambda_{\\min} = 1240/30000 = 4.13\\times 10^{-11}\\ \\text{m} = 41.3\\ \\text{pm}$." },
        ],
        result: "$\\lambda_{\\min} \\approx 41.3\\ \\text{pm}$.",
      },
    ],
    keyTakeaways: [
      "Only the gradient of $\\vec B$ exerts a net force on a dipole: $F_z = \\mu_z\\,\\partial B_z/\\partial z$; a uniform field only torques it.",
      "Silver's 46 inner electrons cancel, leaving one 5s electron with $\\ell = 0$, $s = 1/2$ — so exactly two spots can appear, and do.",
      "The two-spot pattern is direct evidence for space quantization and for the two spin projections $m_s = \\pm1/2$.",
    ],
    quiz: [
      { q: "A magnetic dipole in a perfectly uniform magnetic field experiences", options: ["a net force but no torque", "a torque but no net force", "both a net force and a torque", "neither a force nor a torque"], answer: 1, explanation: "In a uniform field the two poles feel equal and opposite forces, so only the torque tau = mu × B survives; a net force requires a field gradient." },
      { q: "Silver atoms were chosen for Stern–Gerlach because the ground-state atom has", options: ["total orbital angular momentum L = 1", "46 electrons with unpaired spins", "zero orbital angular momentum, so the split comes from the lone 5s electron's spin", "a very large magnetic moment"], answer: 2, explanation: "Ag is [Kr]4d10 5s1: closed inner shells pair to zero, the 5s electron has l = 0, so the only magnetic projection is $\\mu_z = \\pm\\mu_B$ from spin." },
      { q: "If the atoms sent through the Stern–Gerlach magnet had orbital quantum number l = 1 and zero spin, the plate would show", options: ["one spot", "two spots", "three spots", "a continuous smear"], answer: 2, explanation: "The beam splits into $2\\ell+1 = 3$ components ($m_\\ell = +1, 0, -1$); the historical two-spot count is what betrayed spin 1/2." },
      { q: "In the magnet's field gradient the force on an atom is proportional to", options: ["the field magnitude B", "the field gradient times the atom's magnetic moment component $\\mu_z$", "the square of the field", "the atom's speed"], answer: 1, explanation: "$F_z = \\mu_z\\,\\partial B/\\partial z$: sorting by $\\mu_z$ is exactly why distinct spin projections land at distinct places." },
    ],
  },

  // ------------------------------------------------------------------ 40.3
  {
    sectionId: "hall-ch40-s3",
    readingTime: 5,
    intro: "A proton is a spin-1/2 particle with a magnetic moment 660 times smaller than the electron's, so its two orientations in a strong field differ in energy by only a millionth of an electron-volt. Yet radio-frequency photons can flip those spins on resonance, and that flip is the most sensitive signal in medical imaging. Magnetic resonance turns nuclear magnetism into the sharpest diagnostic tool in physics.",
    objectives: [
      "Compute the energy splitting and resonance frequency of proton spins in a magnetic field",
      "Explain the roles of the radio-frequency field, the coil, and spin relaxation in an NMR measurement",
      "Describe how field gradients let magnetic resonance produce spatial images (MRI)",
    ],
    concepts: [
      {
        term: "Spin-flip energy of the proton",
        kind: "law",
        statement: "The proton has spin 1/2 and magnetic moment $\\mu_p = 2.79\\,\\mu_N = 1.41\\times10^{-26}\\ \\mathrm{J/T}$, where the nuclear magneton $\\mu_N = 5.05\\times10^{-27}\\ \\mathrm{J/T}$. In a field $B$ the two orientations differ by $$\\Delta E = 2\\mu_p B,$$ with the aligned orientation lower in energy.",
        detail: "At $B = 1.5\\ \\mathrm{T}$ the splitting is $4.2\\times10^{-26}\\ \\mathrm{J}$ — about $2.6\\times10^{-7}\\ \\mathrm{eV}$, five orders of magnitude below $k_BT$ at room temperature, so the two populations are nearly equal and only a tiny excess sits aligned.",
      },
      {
        term: "Resonance condition",
        kind: "definition",
        statement: "Absorption occurs when an applied radio-frequency field supplies photons matched to the splitting: $$hf = \\Delta E = 2\\mu_p B,\\qquad \\nu = \\frac{2\\mu_p B}{h}.$$ Tuning either the frequency or the field and watching the absorption peak is nuclear magnetic resonance (NMR).",
        detail: "Numerically $\\nu = (4.26\\times10^{7}\\ \\mathrm{Hz/T})B$: 42.6 MHz at 1 T, 63.8 MHz at the 1.5 T of a standard MRI magnet.",
      },
      {
        term: "Resonance measurement and relaxation",
        kind: "method",
        statement: "A coil driven by an rf generator bathes the sample; when the resonance condition is met, protons absorb energy, flipping from the low orientation to the high one; the same coil (or a second one) then registers the signal as the spins relax back, releasing energy to their surroundings at a tissue-dependent rate.",
        detail: "The relaxation times — spin–lattice ($T_1$) and spin–spin ($T_2$) — differ between water-rich and fat-rich tissues, which is precisely what MRI images: not proton density alone, but how quickly each voxel forgets the flip.",
      },
      {
        term: "MRI: gradients make frequency mean position",
        kind: "insight",
        statement: "Superimposing a controlled linear gradient makes $B$ — and hence the resonance frequency $\\nu = 2\\mu_p B/h$ — a known function of position, so a Fourier analysis of the received signal assigns every frequency, and therefore every voxel of the patient, its own proton signal.",
        detail: "By sweeping gradients through all three directions, MRI reconstructs full cross-sectional images without ionizing radiation — one reason it has largely supplanted X-ray tomography for soft tissue.",
      },
      {
        term: "Magnetic Resonance: solution protocol",
        kind: "method",
        statement: "**Solve Magnetic Resonance problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is atomic angular momentum, X rays and lasers; the working equation is $L = \\sqrt{l(l+1)}\\hbar$, $L_z = m_l\\hbar$, $\\lambda_{\\min} = hc/eV$, $\\mu_B = 9.27\\times 10^{-24}\\ \\text{J/T}$; every substitution must carry its units so the final unit (tesla and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$; single-electron picture first; Pauli plus Coulomb for many electrons.",
      },
    ],
    examples: [
      {
        title: "Proton resonance in a 1.5 T MRI magnet",
        problem: "Find the photon frequency and energy that flip protons in a 1.5 T field, and compare the population imbalance with $k_BT$ at 300 K.",
        steps: [
          { label: "Splitting", text: "$\\Delta E = 2\\mu_p B = 2(1.41\\times10^{-26})(1.5) = 4.23\\times10^{-26}\\ \\mathrm{J}$." },
          { label: "Frequency", text: "$\\nu = \\Delta E/h = 4.23\\times10^{-26}/6.626\\times10^{-34} = 6.38\\times10^{7}\\ \\mathrm{Hz} = 63.8\\ \\mathrm{MHz}$ — shortwave radio, not light." },
          { label: "Photon energy", text: "In eV: $4.23\\times10^{-26}/1.602\\times10^{-19} = 2.6\\times10^{-7}\\ \\mathrm{eV}$." },
          { label: "Thermal ratio", text: "$\\Delta E/k_BT = 2.6\\times10^{-7}/0.0259 \\approx 1.0\\times10^{-5}$: out of every million protons only about ten extra are aligned — the tiny surplus MRI must exploit." },
        ],
        result: "$\\nu = 63.8\\ \\mathrm{MHz}$ with $2.6\\times10^{-7}\\ \\mathrm{eV}$ photons; the aligned excess is only about one part in $10^{5}$, which is why MRI needs strong magnets and clever signal averaging.",
      },
      {
        title: "Magnetic Resonance: $\\lambda_{\\min}$ check",
        problem: "An X-ray tube runs at $V = 50\\ \\text{kV}$. Find $\\lambda_{\\min} = hc/eV = 1240/(V\\text{ in volts})\\ \\text{nm}$.",
        steps: [
          { label: "Volts", text: "$eV = 50\\times 10^3\\ \\text{eV}$." },
          { label: "Divide", text: "$\\lambda_{\\min} = 1240/50000 = 2.48\\times 10^{-11}\\ \\text{m} = 24.8\\ \\text{pm}$." },
        ],
        result: "$\\lambda_{\\min} \\approx 24.8\\ \\text{pm}$.",
      },
    ],
    keyTakeaways: [
      "Proton spins in a field B split by $\\Delta E = 2\\mu_p B$ and resonate at $\\nu = 2\\mu_p B/h$ — 42.6 MHz per tesla.",
      "The rf photon energy is ~10⁻⁷ eV, far below kT, so the signal rides on a minuscule thermal population imbalance.",
      "Gradient fields turn resonance frequency into a position label, converting NMR into full three-dimensional imaging.",
    ],
    quiz: [
      { q: "Doubling the magnetic field in a proton NMR experiment does what to the resonance frequency?", options: ["halves it", "leaves it unchanged", "doubles it", "squares it"], answer: 2, explanation: "$\\nu = 2\\mu_p B/h$ is linear in B; 1.5 T gives 63.8 MHz, so 3.0 T would give 127.6 MHz." },
      { q: "The magnetic moment of the proton is", options: ["exactly one Bohr magneton", "about 660 times smaller than the electron's", "equal to the nuclear magneton exactly", "larger than the electron's because the proton is heavier"], answer: 1, explanation: "$\\mu_p = 2.79\\,\\mu_N$ and $\\mu_N/\\mu_B = m_e/m_p = 1/1836$, making the proton moment ~660 times weaker than the electron's." },
      { q: "MRI localizes signal in the body primarily by", options: ["moving the patient through the coil", "making the field B position-dependent with gradients, so frequency encodes place", "using shorter wavelength photons", "blocking protons outside the plane with lead collimators"], answer: 1, explanation: "A linear gradient makes $\\nu = 2\\mu_p B/h$ vary with position, so the Fourier spectrum of the received signal maps frequency to voxel." },
      { q: "Compared with visible-light photons (~2 eV), the photons that flip proton spins at 1.5 T carry about", options: ["a million times more energy", "roughly the same energy", "ten million times less energy", "a thousand times more energy"], answer: 2, explanation: "The flip energy is 2.6×10⁻⁷ eV, about $10^{7}$ times smaller than 2 eV — MRI works with radio waves, not ionizing radiation." },
    ],
  },

  // ------------------------------------------------------------------ 40.4
  {
    sectionId: "hall-ch40-s4",
    readingTime: 6,
    intro: "Drop one electron into a one-dimensional trap and it settles into the lowest level. Drop in a second, a third, a thousand, and something new happens: the Pauli exclusion principle forbids crowding, so the electrons stack upward like water filling a jar. The level of the topmost electron — the Fermi energy — will explain everything from the rigidity of metals to the structure of the periodic table.",
    objectives: [
      "State the Pauli exclusion principle and identify the quantum numbers it governs",
      "Fill the levels of an electron trap and locate the Fermi energy of the resulting stack",
      "Extend the one-dimensional filling argument to cubical traps and degenerate levels",
    ],
    concepts: [
      {
        term: "Pauli exclusion principle",
        kind: "law",
        statement: "**No two electrons in the same system can occupy the same quantum state.** In a trap each level $n$ (or triple $n_x, n_y, n_z$) already fixes the spatial quantum numbers, so each level holds at most two electrons — one with $m_s = +1/2$, one with $m_s = -1/2$.",
        detail: "The principle follows from the antisymmetry of the multi-electron wavefunction: swapping two electrons multiplies it by −1, which forces the shared-state amplitude to vanish. It applies to all spin-1/2 particles (fermions), never to photons or helium-4 atoms (bosons).",
      },
      {
        term: "Level filling in a trap",
        kind: "method",
        statement: "For a one-dimensional infinite trap, $E_n = n^2h^2/8mL^2$. With $N$ electrons, fill from the bottom, two per level; for a cubical trap $E = (h^2/8mL^2)(n_x^2+n_y^2+n_z^2)$ and levels with the same sum, such as $(1,1,2)$, $(1,2,1)$ and $(2,1,1)$, are **degenerate** — three distinct states sharing one energy.",
        detail: "Degeneracy multiplies capacity: the $(1,1,2)$ family holds six electrons, not two. Counting states, not levels, is the essential bookkeeping of many-electron quantum systems.",
      },
      {
        term: "Fermi energy of a filled trap",
        kind: "definition",
        statement: "At $T = 0$ the highest occupied level defines the **Fermi energy** $E_F$: the kinetic energy of the last electron added. For 7 electrons in a 1D trap the first three levels take six electrons and the seventh must sit at $n = 4$, so $E_F = 16E_1$.",
        detail: "Even at absolute zero the electrons are not at rest — exclusion forces them into a hive of fast motion, the origin of the quantum 'degeneracy pressure' that supports white dwarfs and neutron stars.",
      },
      {
        term: "Exclusion Principle and Multiple Electrons in a Trap: solution protocol",
        kind: "method",
        statement: "**Solve Exclusion Principle and Multiple Electrons in a Trap problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is atomic angular momentum, X rays and lasers; the working equation is $L = \\sqrt{l(l+1)}\\hbar$, $L_z = m_l\\hbar$, $\\lambda_{\\min} = hc/eV$, $\\mu_B = 9.27\\times 10^{-24}\\ \\text{J/T}$; every substitution must carry its units so the final unit (tesla and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$; single-electron picture first; Pauli plus Coulomb for many electrons.",
      },
      {
        term: "Exclusion Principle and Multiple Electrons in a Trap: scales and validity",
        kind: "insight",
        statement: "**Exclusion Principle and Multiple Electrons in a Trap lives at $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$ and the textbook model holds while single-electron picture first; Pauli plus Coulomb for many electrons.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Exclusion Principle and Multiple Electrons in a Trap calculation gives seconds when tesla and $\\text{eV}$ demands meters, or a value orders of magnitude beyond $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Seven electrons in a one-dimensional trap",
        problem: "An infinite trap has width L = 200 pm. Find $E_1$, then the ground-state configuration, total energy, and Fermi energy of 7 electrons.",
        steps: [
          { label: "Level spacing", text: "$E_1 = h^2/8mL^2 = (6.626\\times10^{-34})^2/[8(9.11\\times10^{-31})(2.00\\times10^{-10})^2] = 1.51\\times10^{-18}\\ \\mathrm{J} = 9.4\\ \\mathrm{eV}$." },
          { label: "Filling", text: "Two electrons each fill $n = 1, 2, 3$ (six in all); the seventh, excluded from all lower states, occupies $n = 4$." },
          { label: "Fermi energy", text: "$E_F = E_4 = 4^2 E_1 = 16 \\times 9.4 = 150\\ \\mathrm{eV}$." },
          { label: "Total energy", text: "$E = 2(E_1 + E_2 + E_3) + E_4 = 2(1+4+9)E_1 + 16E_1 = 44E_1 = 4.1\\times10^{2}\\ \\mathrm{eV}$." },
        ],
        result: "Configuration $(2,2,2,1)$ over levels $n = 1..4$, $E_F = 150\\ \\mathrm{eV}$, total $E \\approx 4.1\\times10^{2}\\ \\mathrm{eV}$ — the trap is a pressure vessel for quantum degeneracy.",
      },
      {
        title: "Exclusion Principle and Multiple Electrons in a Trap: $\\lambda_{\\min}$ check",
        problem: "An X-ray tube runs at $V = 70\\ \\text{kV}$. Find $\\lambda_{\\min} = hc/eV = 1240/(V\\text{ in volts})\\ \\text{nm}$.",
        steps: [
          { label: "Volts", text: "$eV = 70\\times 10^3\\ \\text{eV}$." },
          { label: "Divide", text: "$\\lambda_{\\min} = 1240/70000 = 1.77\\times 10^{-11}\\ \\text{m} = 17.7\\ \\text{pm}$." },
        ],
        result: "$\\lambda_{\\min} \\approx 17.7\\ \\text{pm}$.",
      },
    ],
    keyTakeaways: [
      "Exclusion allows two electrons per trap level (one per spin projection); counting states is the key skill.",
      "Degenerate levels in a cubical trap share energy but count separately, multiplying their electron capacity.",
      "The Fermi energy is the energy of the topmost filled level at T = 0 — the signature of a many-fermion system.",
    ],
    quiz: [
      { q: "The Pauli exclusion principle says that two electrons in the same system cannot share", options: ["the same speed", "the same set of quantum numbers", "the same energy under any circumstance", "the same spatial trap"], answer: 1, explanation: "Identical quantum numbers would mean identical quantum states; degenerate states with different quantum numbers may share one energy value." },
      { q: "How many electrons can occupy the n = 2 level of a one-dimensional trap?", options: ["1", "2", "4", "8"], answer: 1, explanation: "A 1D level fixes n; the only freedom left is spin, $m_s = \\pm1/2$, so two electrons fit." },
      { q: "For 7 electrons in a 1D trap with level energies n²E₁, the Fermi energy is", options: ["$9E_1$", "$16E_1$", "$25E_1$", "$36E_1$"], answer: 1, explanation: "Levels n = 1, 2, 3 hold six electrons; the seventh occupies n = 4, so $E_F = 16E_1$." },
      { q: "The triple (1,1,2) in a cubical trap is part of a set of degenerate states because", options: ["the trap is heated", "the sum nx² + ny² + nz² is the same for (1,1,2), (1,2,1) and (2,1,1)", "electrons repel each other", "the trap is two-dimensional"], answer: 1, explanation: "Energy depends only on the sum of squared quantum numbers, so any permutation of the same three numbers is degenerate." },
    ],
  },

  // ------------------------------------------------------------------ 40.5
  {
    sectionId: "hall-ch40-s5",
    readingTime: 6,
    intro: "A real atom is a three-dimensional trap with a nucleus at its center, and its electrons obey the same stacking rule: two per state, filling in order of energy. Run the stack upward and the architecture of the periodic table appears unbidden — closed shells make noble gases inert, a lone outer electron makes the alkalis reactive, and the transition metals fill an interior d shell while chemistry changes only slowly.",
    objectives: [
      "Write full electron configurations using shell and subshell notation and their capacities",
      "Explain why the 4s subshell fills before 3d and how that shapes the transition metals",
      "Connect the occupancy of the outermost shell to chemical behavior across the table",
    ],
    concepts: [
      {
        term: "Shells, subshells and capacities",
        kind: "notation",
        statement: "States with principal number $n$ form the $K, L, M, \\ldots$ shells; each holds subshells $\\ell = 0, 1, 2, 3$ ($s, p, d, f$) with capacity $$2(2\\ell+1) \\quad \\text{electrons per subshell,} \\qquad 2n^2 \\quad \\text{per shell.}$$ Thus $K$ holds 2, $L$ holds 8, $M$ holds 18.",
        detail: "Example — oxygen (Z = 8): $1s^2\\,2s^2\\,2p^4$; the two unpaired 2p electrons with parallel spins are why oxygen is paramagnetic and divalent.",
      },
      {
        term: "The filling order",
        kind: "method",
        statement: "Electrons fill subshells in order of increasing energy — roughly by increasing $n + \\ell$, with lower $n$ winning ties: $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, \\ldots$ The 4s subshell dips **below** 3d because its electrons penetrate the inner shells and feel more of the nuclear charge.",
        detail: "Consequently potassium (Z = 19) is $[\\mathrm{Ar}]\\,4s^1$, not $[\\mathrm{Ar}]\\,3d^1$, and the 3d transition series runs from scandium (21) to zinc (30) while the outer 4s electrons do the chemistry.",
      },
      {
        term: "Closed shells and chemical character",
        kind: "insight",
        statement: "A subshell is most stable when full (all states occupied) or half-full with parallel spins (exchange energy); the noble gases have only full subshells, alkalis carry one electron past a closed shell, and halogens lack one electron of closing it — hence their opposite reactivity.",
        detail: "Hund's rule fills a subshell with parallel spins first: chromium takes $3d^5 4s^1$ and copper $3d^{10}4s^1$ rather than the naive bookkeeping, trading one 4s electron for a half-full or full d subshell.",
      },
      {
        term: "Building the Periodic Table: solution protocol",
        kind: "method",
        statement: "**Solve Building the Periodic Table problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is atomic angular momentum, X rays and lasers; the working equation is $L = \\sqrt{l(l+1)}\\hbar$, $L_z = m_l\\hbar$, $\\lambda_{\\min} = hc/eV$, $\\mu_B = 9.27\\times 10^{-24}\\ \\text{J/T}$; every substitution must carry its units so the final unit (tesla and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$; single-electron picture first; Pauli plus Coulomb for many electrons.",
      },
      {
        term: "Building the Periodic Table: scales and validity",
        kind: "insight",
        statement: "**Building the Periodic Table lives at $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$ and the textbook model holds while single-electron picture first; Pauli plus Coulomb for many electrons.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Building the Periodic Table calculation gives seconds when tesla and $\\text{eV}$ demands meters, or a value orders of magnitude beyond $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "The ground-state configuration of iron",
        problem: "Iron has Z = 26. Write its ground-state electron configuration and identify its valence electrons.",
        steps: [
          { label: "Fill in order", text: "Order: $1s, 2s, 2p, 3s, 3p, 4s, 3d$. Fill 2 + 2 + 6 + 2 + 6 = 18 electrons through $3p$ (argon core)." },
          { label: "4s first", text: "The 19th and 20th electrons take $4s^2$; six remain." },
          { label: "3d subshell", text: "The last six enter $3d$, giving $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,3d^6\\,4s^2$." },
          { label: "Count", text: "$2+2+6+2+6+6+2 = 26$ ✓; the $3d^6 4s^2$ electrons are the ones that iron lends and shares — the source of its two common oxidation states." },
        ],
        result: "Fe: $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,3d^6\\,4s^2$ — eight electrons beyond the argon core, six of them in the partially filled 3d subshell.",
      },
      {
        title: "Building the Periodic Table: $\\lambda_{\\min}$ check",
        problem: "An X-ray tube runs at $V = 30\\ \\text{kV}$. Find $\\lambda_{\\min} = hc/eV = 1240/(V\\text{ in volts})\\ \\text{nm}$.",
        steps: [
          { label: "Volts", text: "$eV = 30\\times 10^3\\ \\text{eV}$." },
          { label: "Divide", text: "$\\lambda_{\\min} = 1240/30000 = 4.13\\times 10^{-11}\\ \\text{m} = 41.3\\ \\text{pm}$." },
        ],
        result: "$\\lambda_{\\min} \\approx 41.3\\ \\text{pm}$.",
      },
    ],
    keyTakeaways: [
      "Subshell capacities are $2(2\\ell+1)$ and shell capacities $2n^2$; configurations are built by filling in order of energy, essentially by increasing $n+\\ell$.",
      "4s fills before 3d, which is why period 4 begins with the alkali potassium and why the 3d transition metals have similar outer-shell chemistry.",
      "Chemistry is an outer-shell phenomenon: noble-gas closed shells, alkali singletons and halogen vacancies are direct read-outs of the filling order.",
    ],
    quiz: [
      { q: "The capacity of an n = 3 shell (M shell) is", options: ["8 electrons", "10 electrons", "18 electrons", "32 electrons"], answer: 2, explanation: "2n² = 18: 3s(2) + 3p(6) + 3d(10)." },
      { q: "Potassium (Z = 19) has its last electron in", options: ["3d", "4s", "3p", "4p"], answer: 1, explanation: "4s lies below 3d in energy due to penetration, so K is [Ar]4s1 — placing it under the alkalis in the table." },
      { q: "A nitrogen atom (Z = 7) in its ground state has how many unpaired electrons?", options: ["1", "2", "3", "5"], answer: 2, explanation: "N is 1s2 2s2 2p3; Hund's rule gives the three 2p electrons parallel spins, hence three unpaired — the source of its triplet chemistry." },
      { q: "Noble gases are chemically inert because", options: ["they are very heavy", "their outermost shells are completely filled", "they have no electrons in motion", "their nuclei absorb electrons"], answer: 1, explanation: "Full subshells leave no low-energy vacancies or loose electrons, so there is little energetic incentive to trade electrons." },
    ],
  },

  // ------------------------------------------------------------------ 40.6
  {
    sectionId: "hall-ch40-s6",
    readingTime: 6,
    intro: "Before X rays, the elements were ordered by atomic mass — an ordering with embarrassing exceptions. Moseley's X-ray spectra fixed the ordering for good by tying it to atomic number Z, the count of nuclear protons. The story combines the bremsstrahlung continuum, the sharp characteristic lines of inner-shell vacancies, and a law so clean it assigned Z to every element and predicted the ones still missing.",
    objectives: [
      "Explain the bremsstrahlung continuum and derive its short-wavelength cutoff",
      "Interpret characteristic K lines in terms of electron vacancies and apply Moseley's law",
      "Describe how Moseley re-ordered the periodic table and exposed missing elements",
    ],
    concepts: [
      {
        term: "Bremsstrahlung and the cutoff",
        kind: "law",
        statement: "Electrons accelerated through a potential difference V and slammed into a metal target radiate as they decelerate (braking radiation). The continuum of photon energies cannot exceed the electrons' kinetic energy $eV$, so the spectrum stops at $$\\lambda_{\\min} = \\frac{hc}{eV}.$$ The cutoff is a direct quantum statement: one photon takes all of one electron's energy.",
        detail: "For V = 35 kV, $\\lambda_{\\min} = 1240\\ \\mathrm{eV\\cdot nm}/35\\,000\\ \\mathrm{eV} = 0.0354\\ \\mathrm{nm} = 35.4\\ \\mathrm{pm}$; the cutoff measures the accelerating voltage from the radiation alone.",
      },
      {
        term: "Characteristic lines and Moseley's law",
        kind: "definition",
        statement: "If an incoming electron knocks a K-shell ($n = 1$) electron out of a target atom, an electron from the L shell falls into the vacancy, emitting a $K_\\alpha$ photon. Screening by the one remaining K electron makes the effective charge scale as $(Z-1)$, giving Moseley's law: $$\\nu_{K\\alpha} = (2.48\\times10^{15}\\ \\mathrm{Hz})(Z-1)^2.$$",
        detail: "The square-root plot of $\\nu$ against Z is a straight line to extraordinary accuracy — the first direct measurement of nuclear charge, taken in 1913–14 before the neutron was even suspected.",
      },
      {
        term: "Re-ordering the elements",
        kind: "insight",
        statement: "Because X-ray frequencies depend on nuclear charge and not on chemistry or mass, Moseley could assign each element an unambiguous integer Z, correct the mass-order anomalies (cobalt must precede nickel, Z = 27 before 28) and show that gaps in the integer sequence corresponded to **undiscovered elements**.",
        detail: "His table left holes at Z = 43 (technetium), 61 (promethium), 72 (hafnium) and 75 (rhenium); all were later found or purified exactly as predicted. Technetium has no stable isotope at all — the gap was real physics, not missing lab work.",
      },
      {
        term: "X Rays and the Ordering of the Elements: solution protocol",
        kind: "method",
        statement: "**Solve X Rays and the Ordering of the Elements problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is atomic angular momentum, X rays and lasers; the working equation is $L = \\sqrt{l(l+1)}\\hbar$, $L_z = m_l\\hbar$, $\\lambda_{\\min} = hc/eV$, $\\mu_B = 9.27\\times 10^{-24}\\ \\text{J/T}$; every substitution must carry its units so the final unit (tesla and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$; single-electron picture first; Pauli plus Coulomb for many electrons.",
      },
      {
        term: "X Rays and the Ordering of the Elements: scales and validity",
        kind: "insight",
        statement: "**X Rays and the Ordering of the Elements lives at $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$ and the textbook model holds while single-electron picture first; Pauli plus Coulomb for many electrons.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a X Rays and the Ordering of the Elements calculation gives seconds when tesla and $\\text{eV}$ demands meters, or a value orders of magnitude beyond $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Copper's K-alpha line and an X-ray tube's cutoff",
        problem: "In a 35 kV X-ray tube with a copper target, find the $K_\\alpha$ wavelength (Z = 29) and verify it lies beyond the bremsstrahlung cutoff.",
        steps: [
          { label: "Moseley frequency", text: "$\\nu = (2.48\\times10^{15})(29-1)^2 = (2.48\\times10^{15})(784) = 1.94\\times10^{18}\\ \\mathrm{Hz}$." },
          { label: "Wavelength", text: "$\\lambda = c/\\nu = (3.00\\times10^{8})/(1.94\\times10^{18}) = 1.54\\times10^{-10}\\ \\mathrm{m} = 154\\ \\mathrm{pm}$." },
          { label: "Cutoff", text: "$\\lambda_{\\min} = hc/eV = 1240/35\\,000\\ \\mathrm{eV} = 35.4\\ \\mathrm{pm}$." },
          { label: "Consistency", text: "The 154 pm line is well inside the continuum's long-wavelength side and requires the 35 keV electrons to have emptied the K shell (Cu K binding ≈ 9 keV) — both conditions hold." },
        ],
        result: "$\\lambda_{K\\alpha} = 154\\ \\mathrm{pm}$ — the famous copper line used in crystallography — comfortably beyond the 35.4 pm cutoff set by the tube voltage.",
      },
      {
        title: "X Rays and the Ordering of the Elements: $\\lambda_{\\min}$ check",
        problem: "An X-ray tube runs at $V = 50\\ \\text{kV}$. Find $\\lambda_{\\min} = hc/eV = 1240/(V\\text{ in volts})\\ \\text{nm}$.",
        steps: [
          { label: "Volts", text: "$eV = 50\\times 10^3\\ \\text{eV}$." },
          { label: "Divide", text: "$\\lambda_{\\min} = 1240/50000 = 2.48\\times 10^{-11}\\ \\text{m} = 24.8\\ \\text{pm}$." },
        ],
        result: "$\\lambda_{\\min} \\approx 24.8\\ \\text{pm}$.",
      },
    ],
    keyTakeaways: [
      "The bremsstrahlung continuum cuts off at $\\lambda_{\\min} = hc/eV$, a pure quantum effect with no classical counterpart.",
      "Characteristic lines come from inner-shell vacancies; Moseley's $\\nu = (2.48\\times10^{15}\\ \\mathrm{Hz})(Z-1)^2$ ties X-ray frequencies to nuclear charge.",
      "Ordering by Z — not by mass — corrected the periodic table's anomalies and predicted elements such as technetium before their discovery.",
    ],
    quiz: [
      { q: "The minimum wavelength in an X-ray tube's continuum is set by", options: ["the target material", "the temperature of the target", "the accelerating voltage, via λmin = hc/eV", "the size of the electron beam"], answer: 2, explanation: "No photon can carry more energy than eV, so the spectrum stops at $\\lambda_\\mathrm{min} = hc/eV$ regardless of target." },
      { q: "A K-alpha photon is emitted when", options: ["an outer electron falls into a K-shell vacancy", "a nucleus de-excites", "two electrons annihilate", "an electron escapes the anode"], answer: 0, explanation: "Removing a K (n = 1) electron leaves a vacancy; an L (n = 2) electron dropping in emits the K-alpha line." },
      { q: "Moseley's law states that the square root of the K-alpha frequency is proportional to", options: ["the atomic mass", "Z − 1", "Z²", "the neutron number"], answer: 1, explanation: "Screening by the surviving K electron reduces the effective charge to Z − 1, giving nu proportional to (Z − 1) squared." },
      { q: "Raising the tube voltage V while keeping the same target changes", options: ["the K-alpha wavelength only", "the cutoff wavelength only", "both the cutoff and the K-alpha line", "neither"], answer: 1, explanation: "The characteristic lines are fixed by the atom's levels; only the bremsstrahlung cutoff (and the intensity) moves with V." },
    ],
  },

  // ------------------------------------------------------------------ 40.7
  {
    sectionId: "hall-ch40-s7",
    readingTime: 6,
    intro: "Ordinary light sources emit by spontaneous decay: each atom flashes at random, in a random direction, with a random phase. A laser makes emission obedient — an incoming photon triggers identical photons, in phase, in the same direction — and the result is a beam whose light is as different from a bulb's as a march is from a mob. The trick is a population inversion parked on a metastable state.",
    objectives: [
      "Distinguish spontaneous emission, absorption and stimulated emission, and state the properties of the photons each produces",
      "Explain population inversion and why long-lived metastable states are essential to sustaining it",
      "Trace the pumping cycle of the helium-neon laser and the role of the resonant cavity",
    ],
    concepts: [
      {
        term: "Stimulated emission",
        kind: "definition",
        statement: "A photon of exactly the transition energy passing an excited atom can trigger the atom's drop to the lower state, emitting a second photon that is a **clone**: same frequency, same phase, same direction, same polarization. Einstein predicted the process in 1917 from thermodynamic bookkeeping — decades before it was observed.",
        detail: "Where spontaneous emission is isotropic and incoherent, stimulated emission is directional and coherent: each clone can clone again, giving exponential gain along the beam axis.",
      },
      {
        term: "Population inversion and metastable states",
        kind: "law",
        statement: "Stimulated emission outmuscles absorption only when more atoms populate the upper state than the lower one — a **population inversion**, impossible in thermal equilibrium, since $N_\\mathrm{upper}/N_\\mathrm{lower} = e^{-\\Delta E/k_BT} < 1$ always. Inversions are built on **metastable** states whose forbidden-like transitions make lifetimes long ($\\sim 10^{-3}\\ \\mathrm{s}$ instead of $10^{-8}\\ \\mathrm{s}$), letting atoms accumulate.",
        detail: "A pump (electric discharge, flashlamp, another laser, diode current) supplies the energy; the metastable shelf stores it; a three- or four-level ladder keeps the lower laser level nearly empty so the inversion survives.",
      },
      {
        term: "The helium-neon laser",
        kind: "method",
        statement: "In the He-Ne laser a discharge excites helium to a 20.61 eV metastable level; collisions transfer that energy (resonantly, within 0.05 eV) to neon's 20.66 eV metastable level, which sits above a 18.70 eV level. The 20.66 → 18.70 eV cascade radiates **632.8 nm** red light, and mirrors at the tube ends reflect it repeatedly through the gain medium to build the coherent beam.",
        detail: "One mirror is made ~1–2% transmitting to let the beam escape. The exact output wavelength is selected by the cavity's standing-wave condition and by neon's level structure; other lines (3.39 μm, 1.15 μm) are suppressed by coatings.",
      },
      {
        term: "Coherence",
        kind: "insight",
        statement: "Laser light is close to **monochromatic** (spread by less than one part in 10⁶ with stabilization), **directional** (divergence set by diffraction at the exit aperture) and **coherent** (phases locked across the wavefront and along the beam), which is why it can be focused to a wavelength-scale spot, travel to the Moon and back, and drive interference on human time scales.",
        detail: "A lightbulb emits photons into $4\\pi$ steradians with phase noise; a one-milliwatt laser outperforms it for any task that rewards phase — holography, fiber communication, interferometry, precision cutting.",
      },
      {
        term: "Lasers: solution protocol",
        kind: "method",
        statement: "**Solve Lasers problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is atomic angular momentum, X rays and lasers; the working equation is $L = \\sqrt{l(l+1)}\\hbar$, $L_z = m_l\\hbar$, $\\lambda_{\\min} = hc/eV$, $\\mu_B = 9.27\\times 10^{-24}\\ \\text{J/T}$; every substitution must carry its units so the final unit (tesla and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\lambda_{\\min}\\sim 0.01$--$0.1\\ \\text{nm}$ for $10$--$100\\ \\text{kV}$; single-electron picture first; Pauli plus Coulomb for many electrons.",
      },
    ],
    examples: [
      {
        title: "Photons per second from a 2.5 mW He-Ne beam",
        problem: "A helium-neon laser emits 632.8 nm light at 2.5 mW. Find the photon energy and the rate of photon production.",
        steps: [
          { label: "Photon energy", text: "$E = hc/\\lambda = 1240\\ \\mathrm{eV\\cdot nm}/632.8\\ \\mathrm{nm} = 1.96\\ \\mathrm{eV}$." },
          { label: "In joules", text: "$E = 1.96 \\times 1.602\\times10^{-19} = 3.14\\times10^{-19}\\ \\mathrm{J}$." },
          { label: "Rate", text: "$N/t = P/E = 2.5\\times10^{-3}/3.14\\times10^{-19} = 8.0\\times10^{15}\\ \\mathrm{photons/s}$." },
          { label: "Check the levels", text: "The neon cascade 20.66 → 18.70 eV spans 1.96 eV ✓, exactly the 632.8 nm photon." },
        ],
        result: "Each photon carries 1.96 eV; the 2.5 mW beam delivers $8.0\\times10^{15}$ coherent, in-phase photons every second.",
      },
      {
        title: "Lasers: $\\lambda_{\\min}$ check",
        problem: "An X-ray tube runs at $V = 70\\ \\text{kV}$. Find $\\lambda_{\\min} = hc/eV = 1240/(V\\text{ in volts})\\ \\text{nm}$.",
        steps: [
          { label: "Volts", text: "$eV = 70\\times 10^3\\ \\text{eV}$." },
          { label: "Divide", text: "$\\lambda_{\\min} = 1240/70000 = 1.77\\times 10^{-11}\\ \\text{m} = 17.7\\ \\text{pm}$." },
        ],
        result: "$\\lambda_{\\min} \\approx 17.7\\ \\text{pm}$.",
      },
    ],
    keyTakeaways: [
      "Stimulated emission produces photon clones — same phase, direction, frequency — the seed of all coherent light.",
      "Gain requires a population inversion, which demands pumping and metastable states; thermal equilibrium can never provide it.",
      "In He-Ne, resonant transfer from helium's 20.61 eV metastable to neon's 20.66 eV level drives the 632.8 nm cascade that the cavity amplifies.",
    ],
    quiz: [
      { q: "The photon emitted by stimulated emission is identical to the triggering photon in", options: ["energy only", "direction only", "phase only", "energy, phase, direction and polarization"], answer: 3, explanation: "The clone is a perfect copy in every wave property — that total identity is what makes laser light coherent." },
      { q: "A population inversion means", options: ["more atoms in the lower energy state", "equal populations in both states", "more atoms in the upper energy state", "the atoms are moving upward"], answer: 2, explanation: "With more atoms up than down, stimulated emission dominates absorption — impossible in thermal equilibrium, so it must be pumped." },
      { q: "Metastable states are crucial in lasers because they", options: ["absorb photons quickly", "have unusually long lifetimes, allowing atoms to accumulate and build an inversion", "emit at higher frequency", "are the ground state"], answer: 1, explanation: "Lifetimes of order 10⁻³ s (versus 10⁻⁸ s for normal states) let the pump stack up atoms and sustain the inversion." },
      { q: "In a He-Ne laser the energy that ultimately becomes 632.8 nm light is delivered to neon atoms by", options: ["absorbing the laser light itself", "collisions with metastable helium atoms excited by the discharge", "gamma decay of the nucleus", "friction with the tube walls"], answer: 1, explanation: "Helium's 20.61 eV metastable level matches neon's 20.66 eV level almost exactly, so collisional transfer populates the upper laser level." },
    ],
  },
]
