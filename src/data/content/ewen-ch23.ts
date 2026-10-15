import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 23
// Survey of Modern Physics (Sections 23.1 – 23.10)
// ============================================================================

export const ewenCh23Content: SectionContent[] = [
  {
    sectionId: "ewen-ch23-s1",
    readingTime: 6,
    intro: "Hot objects glow with spectra classical physics could not explain — until Planck quantized energy in chunks $E = hf$. This section introduces quanta, photons, and blackbody trends that launch all of modern physics.",
    objectives: [
      "State Planck's quantum hypothesis $E = hf$",
      "Describe blackbody spectra and Wien's displacement trend",
      "Compute photon energies across the spectrum",
    ],
    concepts: [
      {
        term: "Planck's quantum hypothesis",
        kind: "law",
        statement: "Oscillators exchange energy in quanta $E = hf$ with $h = 6.63 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$.",
        detail: "Quantization tamed the ultraviolet catastrophe: high-$f$ modes cost too much to excite thermally.",
      },
      {
        term: "Photon picture",
        kind: "definition",
        statement: "Light itself travels as photons $E = hc/\\lambda$; $1240/\\lambda(\\text{nm})$ gives eV.",
        detail: "X-ray photons carry keV; radio photons carry neV — one law, twenty decades.",
      },
      {
        term: "Blackbody spectrum",
        kind: "law",
        statement: "Ideal radiators emit the Planck spectrum peaking at $\\lambda_{max}T = 2.90 \\times 10^{-3} \\text{ m}\\cdot\\text{K}$ (Wien).",
        detail: "Sun ($5800 \\text{ K}$) peaks green; furnaces redden as they heat.",
      },
      {
        term: "Stefan–Boltzmann total",
        kind: "law",
        statement: "Total radiated power is $P = \\sigma A T^{4}$ with $\\sigma = 5.67 \\times 10^{-8} \\text{ W}/\\text{m}^{2}\\text{K}^{4}$.",
        detail: "Doubling kelvins multiplies glow sixteen-fold.",
      },
      {
        term: "Quanta everywhere",
        kind: "insight",
        statement: "Quantization spreads beyond light: charges, spins, and nuclear levels all come in steps.",
        detail: "This section's photon is the first of many discrete quantities.",
      },
    ],
    examples: [
      {
        title: "X-ray photon energy",
        problem: "Find the energy of a $0.100 \\text{ nm}$ X-ray photon in eV.",
        steps: [
          { label: "Step 1: Shortcut", text: "$E = 1240/0.100 = 12{,}400 \\text{ eV}$." },
        ],
        result: "$12.4 \\text{ keV}$ — ionizing and penetrating.",
      },
      {
        title: "Wien peak of a kiln",
        problem: "A kiln interior glows at $1500 \\text{ K}$. Find $\\lambda_{max}$.",
        steps: [
          { label: "Step 1: Wien", text: "$\\lambda_{max} = 2.90 \\times 10^{-3}/1500 = 1.93 \\times 10^{-6} \\text{ m}$." },
        ],
        result: "$1930 \\text{ nm}$ infrared — the visible red is the spectrum's short tail.",
      },
    ],
    keyTakeaways: [
      "Energy comes in quanta $E = hf$.",
      "Hotter bodies peak bluer (Wien) and radiate as $T^{4}$.",
      "Photon eV follow $1240/\\lambda(\\text{nm})$.",
    ],
    quiz: [
      {
        q: "Planck introduced quanta to explain:",
        options: ["The photoelectric effect", "Blackbody spectra", "Electron orbits", "Nuclear decay"],
        answer: 1,
        explanation: "Discrete $hf$ steps cut off the high-frequency divergence of classical radiation laws.",
      },
      {
        q: "A $620 \\text{ nm}$ photon carries about:",
        options: ["$2.00 \\text{ eV}$", "$620 \\text{ eV}$", "$0.50 \\text{ eV}$", "$1240 \\text{ eV}$"],
        answer: 0,
        explanation: "$1240/620 = 2.00 \\text{ eV}$ orange-red.",
      },
      {
        q: "Doubling a blackbody's kelvins multiplies total radiation by:",
        options: ["$2$", "$4$", "$8$", "$16$"],
        answer: 3,
        explanation: "$P \\propto T^{4}$; $2^{4} = 16$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch23-s2",
    readingTime: 5,
    intro: "Atoms are mostly empty space with a tiny massive nucleus — Rutherford's scattering verdict. This section sizes atoms ($10^{-10} \\text{ m}$) against nuclei ($10^{-14} \\text{ m}$), counts protons, neutrons, and electrons, and reads the periodic table.",
    objectives: [
      "Describe Rutherford scattering and the nuclear atom",
      "Use $Z$, $A$, and $X^{A}_{Z}$ notation for nuclides",
      "Quote atomic versus nuclear sizes and masses",
    ],
    concepts: [
      {
        term: "Nuclear atom",
        kind: "insight",
        statement: "Positive charge and nearly all mass sit in a $10^{-14} \\text{ m}$ nucleus; electrons occupy the $10^{-10} \\text{ m}$ cloud.",
        detail: "Alpha backscattering proved it: mostly empty space with a hard charged core.",
      },
      {
        term: "Nuclide notation",
        kind: "notation",
        statement: "$^{A}_{Z}X$: $Z$ protons fix the element, $A = Z + N$ counts nucleons, $N$ neutrons vary by isotope.",
        detail: "$^{12}_{6}\\text{C}$ and $^{14}_{6}\\text{C}$ are both carbon with $6$ protons.",
      },
      {
        term: "Atomic mass unit",
        kind: "notation",
        statement: "$1 \\text{ u} = 1.66 \\times 10^{-27} \\text{ kg} = 931.5 \\text{ MeV}/c^{2}$; electron $0.000549 \\text{ u}$, proton $1.0073 \\text{ u}$, neutron $1.0087 \\text{ u}$.",
        detail: "Chemistry's grams-per-mole are these numbers scaled by Avogadro's count.",
      },
      {
        term: "Isotopes",
        kind: "definition",
        statement: "Isotopes share $Z$ but differ in $N$: same chemistry, different mass and nuclear behavior.",
        detail: "$^{235}\\text{U}$ fissions; $^{238}\\text{U}$ mostly does not — isotope separation matters.",
      },
      {
        term: "Scale analogy",
        kind: "insight",
        statement: "Blow the nucleus to a marble and the atom spans a stadium — emptiness dominates matter.",
        detail: "Touch stiffness is electric repulsion of clouds, not solid contact.",
      },
    ],
    examples: [
      {
        title: "Reading a nuclide",
        problem: "Identify $Z$, $N$, $A$ for $^{235}_{92}\\text{U}$.",
        steps: [
          { label: "Step 1: Read", text: "$Z = 92$ protons (uranium), $A = 235$ nucleons, $N = 235 - 92 = 143$ neutrons." },
        ],
        result: "$92$ p, $143$ n, $235$ nucleons.",
      },
      {
        title: "Nuclear density feel",
        problem: "Estimate nuclear density with $m \\approx 1.67 \\times 10^{-27} \\text{ kg}$ in $r = 1.0 \\times 10^{-14} \\text{ m}$.",
        steps: [
          { label: "Step 1: Volume", text: "$V = 4\\pi r^{3}/3 = 4.19 \\times 10^{-42} \\text{ m}^{3}$." },
          { label: "Step 2: Density", text: "$\\rho = 1.67 \\times 10^{-27}/4.19 \\times 10^{-42} \\approx 4.0 \\times 10^{14} \\text{ kg}/\\text{m}^{3}$." },
        ],
        result: "$\\sim 10^{14} \\text{ kg}/\\text{m}^{3}$ — a teaspoonful weighs billions of tons.",
      },
    ],
    keyTakeaways: [
      "Rutherford: tiny massive nucleus in a vast electron cloud.",
      "$^{A}_{Z}X$ fixes protons ($Z$), nucleons ($A$), neutrons ($A-Z$).",
      "$1 \\text{ u} = 931.5 \\text{ MeV}/c^{2}$ bridges mass and energy.",
    ],
    quiz: [
      {
        q: "$^{14}_{6}\\text{C}$ contains:",
        options: ["$14$ protons", "$6$ protons and $8$ neutrons", "$6$ neutrons only", "$20$ nucleons"],
        answer: 1,
        explanation: "$Z = 6$ protons; $N = 14 - 6 = 8$.",
      },
      {
        q: "Alpha backscattering proved:",
        options: ["Electrons orbit", "A small massive nucleus", "Plum-pudding uniformity", "Neutrons exist"],
        answer: 1,
        explanation: "Rare hard rebounds need a concentrated charge — the nucleus.",
      },
      {
        q: "Isotopes of one element differ in:",
        options: ["Proton count", "Neutron count", "Electron charge", "Chemical group"],
        answer: 1,
        explanation: "Same $Z$ (chemistry), different $N$ (mass, stability).",
      },
    ],
  },
  {
    sectionId: "ewen-ch23-s3",
    readingTime: 6,
    intro: "Hydrogen glows only in sharp lines — fingerprints of quantized orbits. This section reads emission and absorption spectra, applies the Rydberg/Balmer formula, and presents the Bohr model with $E_{n} = -13.6/n^{2} \\text{ eV}$.",
    objectives: [
      "Distinguish emission, absorption, and continuous spectra",
      "Compute hydrogen lines from $1/\\lambda = R(1/n_{f}^{2}-1/n_{i}^{2})$",
      "State Bohr's postulates and energy levels",
    ],
    concepts: [
      {
        term: "Line spectra",
        kind: "definition",
        statement: "Hot gases emit bright lines; cool gases absorb dark lines at the same wavelengths against a continuum.",
        detail: "Each element owns a barcode — spectroscopes identify stars and lamps alike.",
      },
      {
        term: "Rydberg formula",
        kind: "theorem",
        statement: "Hydrogen lines obey $1/\\lambda = R_{H}(1/n_{f}^{2} - 1/n_{i}^{2})$ with $R_{H} = 1.097 \\times 10^{7} \\text{ m}^{-1}$.",
        detail: "Balmer ($n_{f} = 2$) falls visible; Lyman ($n_{f} = 1$) is ultraviolet.",
      },
      {
        term: "Bohr energy levels",
        kind: "theorem",
        statement: "$E_{n} = -13.6/n^{2} \\text{ eV}$; photons carry level differences $hf = E_{i} - E_{f}$.",
        detail: "Ground state $-13.6 \\text{ eV}$; ionization costs $13.6 \\text{ eV}$.",
      },
      {
        term: "Bohr postulates",
        kind: "insight",
        statement: "Quantized angular momentum $mvr = n\\hbar$ picks stable orbits; jumps radiate the difference.",
        detail: "De Broglie later grounded the rule: orbits fit integer electron wavelengths.",
      },
      {
        term: "Fluorescence and lasers preview",
        kind: "insight",
        statement: "Excited atoms re-emit (fluorescence) or avalanche by stimulated emission (lasers) — population inversion required.",
        detail: "Neon signs fluoresce; HeNe tubes lase on the same transitions.",
      },
    ],
    figures: [
      {
        caption: "Hydrogen transitions: Balmer drops to $n = 2$ radiate visible photons $hf = E_{i} - E_{f}$.",
        svg: "<svg role='img' aria-label='Hydrogen transitions: Balmer drops to n = 2 radiate visible photons hf = E_i - E_f.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"60\" y1=\"150\" x2=\"340\" y2=\"150\"/><line x1=\"60\" y1=\"110\" x2=\"340\" y2=\"110\"/><line x1=\"60\" y1=\"70\" x2=\"340\" y2=\"70\"/><line x1=\"60\" y1=\"40\" x2=\"340\" y2=\"40\"/><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"110\"/><line x1=\"200\" y1=\"70\" x2=\"200\" y2=\"110\"/><text x=\"345\" y=\"153\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">n=1</text><text x=\"345\" y=\"113\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">n=2</text><text x=\"345\" y=\"73\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">n=3</text><text x=\"345\" y=\"43\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">n=4</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "H-alpha red line",
        problem: "Find the $n = 3 \\to 2$ Balmer wavelength.",
        steps: [
          { label: "Step 1: Rydberg", text: "$1/\\lambda = 1.097 \\times 10^{7}(1/4 - 1/9) = 1.097 \\times 10^{7}(0.1389) = 1.524 \\times 10^{6} \\text{ m}^{-1}$." },
          { label: "Step 2: Invert", text: "$\\lambda = 6.56 \\times 10^{-7} \\text{ m} = 656 \\text{ nm}$." },
        ],
        result: "$656 \\text{ nm}$ H-alpha red.",
      },
      {
        title: "Ionizing hydrogen",
        problem: "What photon frees the ground-state electron?",
        steps: [
          { label: "Step 1: Level gap", text: "$0 - (-13.6) = 13.6 \\text{ eV}$ ($91.2 \\text{ nm}$ Lyman edge)." },
        ],
        result: "$13.6 \\text{ eV}$ or more (ultraviolet).",
      },
    ],
    keyTakeaways: [
      "Gases barcode in lines; $1/\\lambda = R(1/n_{f}^{2}-1/n_{i}^{2})$.",
      "Bohr levels $E_{n} = -13.6/n^{2} \\text{ eV}$ radiate differences.",
      "Balmer is visible; Lyman is UV; absorption mirrors emission.",
    ],
    quiz: [
      {
        q: "Dark Fraunhofer lines in sunlight are:",
        options: ["Emission lines of the sun", "Absorption by cooler gases", "Telescope defects", "Interference fringes"],
        answer: 1,
        explanation: "Cooler atoms absorb their characteristic wavelengths from the continuum behind.",
      },
      {
        q: "Balmer-alpha ($3 \\to 2$) is red at $656 \\text{ nm}$. The $4 \\to 2$ line is:",
        options: ["Also $656 \\text{ nm}$", "Shorter ($486 \\text{ nm}$ blue-green)", "Infrared", "Absent"],
        answer: 1,
        explanation: "Bigger drop means bigger $hf$ and shorter $\\lambda$: $486 \\text{ nm}$.",
      },
      {
        q: "Bohr's stable orbits satisfy:",
        options: ["Any radius", "$mvr = n\\hbar$", "$v = c$", "$E = 0$"],
        answer: 1,
        explanation: "Quantized angular momentum selects the radiating-free radii.",
      },
    ],
  },
  {
    sectionId: "ewen-ch23-s4",
    readingTime: 6,
    intro: "Electrons diffract like waves yet click like particles — quantum mechanics resolves the paradox with wavefunctions and uncertainty. This section states de Broglie $\\lambda = h/p$, Heisenberg limits, and the orbital (not orbit) picture with quantum numbers.",
    objectives: [
      "Compute de Broglie wavelengths for particles",
      "State Heisenberg's $\\Delta x\\Delta p \\geq h/4\\pi$ and energy–time form",
      "Assign $n$, $l$, $m$, $s$ and the Pauli/exclusion structure",
    ],
    concepts: [
      {
        term: "de Broglie wavelength",
        kind: "law",
        statement: "Matter waves obey $\\lambda = h/p = h/mv$ (nonrelativistic).",
        detail: "A $100 \\text{ eV}$ electron has $\\lambda \\approx 0.123 \\text{ nm}$ — atomic-scale, hence electron microscopes.",
      },
      {
        term: "Heisenberg uncertainty",
        kind: "law",
        statement: "$\\Delta x\\,\\Delta p \\geq h/4\\pi$ and $\\Delta E\\,\\Delta t \\geq h/4\\pi$: pinning one observable spreads its conjugate.",
        detail: "Confinement costs kinetic energy — atoms cannot collapse, nuclei hold MeV widths.",
      },
      {
        term: "Orbitals and quantum numbers",
        kind: "definition",
        statement: "Electrons occupy probability orbitals labeled $n$ (size/energy), $l$ (shape), $m$ (orientation), $s$ (spin $\\pm 1/2$).",
        detail: "s, p, d, f subshells hold $2, 6, 10, 14$ electrons via Pauli pairing.",
      },
      {
        term: "Pauli exclusion",
        kind: "law",
        statement: "No two electrons share all four quantum numbers — the periodic table's architecture.",
        detail: "Shell filling order (Aufbau) plus Hund's rule builds every element's chemistry.",
      },
      {
        term: "Tunneling",
        kind: "insight",
        statement: "Wavefunctions leak through classically forbidden barriers — tunnel diodes, STM, and fusion rates depend on it.",
        detail: "The Sun shines because protons tunnel into fusion range.",
      },
    ],
    examples: [
      {
        title: "Electron-microscope wavelength",
        problem: "Electrons accelerate through $10.0 \\text{ kV}$. Estimate $\\lambda$ (nonrelativistic).",
        steps: [
          { label: "Step 1: Momentum", text: "$p = \\sqrt{2meV} = \\sqrt{2(9.11 \\times 10^{-31})(1.60 \\times 10^{-19})(10^{4})} = 5.40 \\times 10^{-23} \\text{ kg}\\cdot\\text{m}/\\text{s}$." },
          { label: "Step 2: Divide", text: "$\\lambda = 6.63 \\times 10^{-34}/5.40 \\times 10^{-23} = 1.23 \\times 10^{-11} \\text{ m}$." },
        ],
        result: "$12.3 \\text{ pm}$ — thousands of times finer than visible light.",
      },
      {
        title: "Confined-proton energy scale",
        problem: "A proton is localized to $\\Delta x = 1.0 \\times 10^{-14} \\text{ m}$ (nucleus). Estimate minimum $\\Delta p$ spread.",
        steps: [
          { label: "Step 1: Uncertainty", text: "$\\Delta p \\geq h/(4\\pi\\Delta x) = 6.63 \\times 10^{-34}/(4\\pi \\times 10^{-14}) = 5.28 \\times 10^{-21} \\text{ kg}\\cdot\\text{m}/\\text{s}$." },
        ],
        result: "$\\sim 5 \\times 10^{-21} \\text{ kg}\\cdot\\text{m}/\\text{s}$ — MeV-scale kinetic confinement.",
      },
    ],
    keyTakeaways: [
      "$\\lambda = h/p$ gives every particle a wavelength; fast electrons resolve atoms.",
      "Uncertainty prices confinement in momentum and energy spread.",
      "Four quantum numbers plus Pauli build the periodic table.",
    ],
    quiz: [
      {
        q: "Doubling electron momentum:",
        options: ["Doubles $\\lambda$", "Halves $\\lambda$", "Leaves $\\lambda$ unchanged", "Destroys the wave"],
        answer: 1,
        explanation: "$\\lambda = h/p$ is inverse in momentum.",
      },
      {
        q: "Heisenberg's position–momentum rule says:",
        options: ["Both can be exact together", "Sharper $x$ forces spread in $p$", "Momentum is quantized", "Electrons stop moving"],
        answer: 1,
        explanation: "$\\Delta x\\Delta p \\geq h/4\\pi$ forbids joint exactness.",
      },
      {
        q: "A p subshell holds at most:",
        options: ["$2$ electrons", "$6$ electrons", "$10$ electrons", "$14$ electrons"],
        answer: 1,
        explanation: "Three $m$ orbitals $\\times$ two spins $= 6$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch23-s5",
    readingTime: 5,
    intro: "Protons should blow the nucleus apart — the strong force holds it together, trading range for might. This section surveys nuclear size, the strong/weak forces, and the stability valley that sorts isotopes.",
    objectives: [
      "Name the four forces with nuclear roles for strong and weak",
      "Explain binding versus Coulomb repulsion and the neutron-rich trend",
      "Read the stability valley and magic-number hints",
    ],
    concepts: [
      {
        term: "Strong nuclear force",
        kind: "definition",
        statement: "The short-range ($\u223c 10^{-15} \\text{ m}$) strong force binds nucleons, overpowering Coulomb repulsion inside the nucleus.",
        detail: "Saturation (each nucleon touches few neighbors) caps binding near $8 \\text{ MeV}$/nucleon.",
      },
      {
        term: "Weak force role",
        kind: "definition",
        statement: "The weak force transmutes quarks (beta decay), letting nuclei adjust $N/Z$ toward stability.",
        detail: "It is slow — hence long half-lives beside violent strong-force energies.",
      },
      {
        term: "Nuclear radius trend",
        kind: "theorem",
        statement: "$R \\approx (1.2 \\times 10^{-15} \\text{ m})A^{1/3}$: volume grows with nucleon count at fixed density.",
        detail: "Uranium ($A = 238$) spans ~$7.4 \\text{ fm}$ across.",
      },
      {
        term: "Stability valley",
        kind: "insight",
        statement: "Light nuclei favor $N \\approx Z$; heavy nuclei need $N > Z$ (up to $1.5\\times$) to dilute Coulomb repulsion.",
        detail: "Off-valley isotopes decay back toward the floor — the next sections' mechanisms.",
      },
      {
        term: "Magic numbers",
        kind: "insight",
        statement: "Filled nuclear shells at $2, 8, 20, 28, 50, 82, 126$ grant extra stability (helium, oxygen, lead stand out).",
        detail: "Doubly magic $^{208}\\text{Pb}$ caps the stable chart.",
      },
    ],
    examples: [
      {
        title: "Uranium radius",
        problem: "Estimate the radius of $^{238}\\text{U}$.",
        steps: [
          { label: "Step 1: Cube root", text: "$A^{1/3} = 238^{1/3} = 6.20$." },
          { label: "Step 2: Scale", text: "$R = 1.20 \\times 6.20 = 7.44 \\text{ fm}$." },
        ],
        result: "$7.44 \\times 10^{-15} \\text{ m}$ radius.",
      },
      {
        title: "Why heavies need neutrons",
        problem: "Compare Coulomb load: estimate proton-pair repulsion energy scale at $2 \\text{ fm}$ separation.",
        steps: [
          { label: "Step 1: Coulomb", text: "$U = k e^{2}/r = (9.00 \\times 10^{9})(1.60 \\times 10^{-19})^{2}/2.0 \\times 10^{-15} = 1.15 \\times 10^{-13} \\text{ J}$." },
          { label: "Step 2: eV", text: "$/1.60 \\times 10^{-19} = 0.720 \\text{ MeV}$ per pair — times many pairs, demanding neutron dilution." },
        ],
        result: "$0.72 \\text{ MeV}$ per close pair; heavy nuclei starve without extra neutrons.",
      },
    ],
    keyTakeaways: [
      "Strong force binds at femtometer range; weak force transmutes for stability.",
      "$R \\propto A^{1/3}$ at nuclear density.",
      "Heavy stability needs neutron excess; magic shells add bonus binding.",
    ],
    quiz: [
      {
        q: "Nuclei stay together despite proton repulsion because:",
        options: ["Gravity wins", "Short-range strong attraction exceeds Coulomb inside", "Electrons glue them", "Charge cancels"],
        answer: 1,
        explanation: "The strong force dominates below ~$1 \\text{ fm}$ but fades beyond, while Coulomb reaches everywhere.",
      },
      {
        q: "Heavy stable nuclei have $N/Z$ about:",
        options: ["$0.5$", "$1.0$", "$1.5$", "$3.0$"],
        answer: 2,
        explanation: "Extra neutrons space protons apart without adding repulsion.",
      },
      {
        q: "$^{208}\\text{Pb}$ is exceptionally stable because it is:",
        options: ["Doubly magic ($Z = 82$, $N = 126$)", "The heaviest nuclide", "Pure neutrons", "Man-made"],
        answer: 0,
        explanation: "Both proton and neutron shells close — maximum shell bonus.",
      },
    ],
  },
  {
    sectionId: "ewen-ch23-s6",
    readingTime: 6,
    intro: "Weigh a nucleus and it is lighter than its parts — the missing mass is binding energy by $E = mc^{2}$. This section computes mass defect, converts $1 \\text{ u} = 931.5 \\text{ MeV}$, and reads the binding-per-nucleon curve peaking at iron.",
    objectives: [
      "Compute mass defect $\\Delta m$ from component versus nuclear masses",
      "Convert $\\Delta m$ to binding energy in MeV",
      "Explain fusion (light) and fission (heavy) as moves toward iron",
    ],
    concepts: [
      {
        term: "Mass defect",
        kind: "definition",
        statement: "$\\Delta m = Zm_{p} + Nm_{n} + Zm_{e} - M_{atom}$: the assembled atom weighs less than its separated parts.",
        detail: "Electron masses included must match atomic (not bare nuclear) tables.",
      },
      {
        term: "Binding energy",
        kind: "theorem",
        statement: "$E_{B} = \\Delta m c^{2}$; with $1 \\text{ u} = 931.5 \\text{ MeV}$, $E_{B}(\\text{MeV}) = 931.5\\Delta m(\\text{u})$.",
        detail: "Helium's $0.0304 \\text{ u}$ defect binds $28.3 \\text{ MeV}$.",
      },
      {
        term: "Binding-per-nucleon curve",
        kind: "law",
        statement: "$E_{B}/A$ rises to ~$8.8 \\text{ MeV}$ at iron ($A \\approx 56$) then falls toward $7.6 \\text{ MeV}$ at uranium.",
        detail: "Iron is the ash of energy release: fuse up to it, fission down to it.",
      },
      {
        term: "Fusion versus fission",
        kind: "insight",
        statement: "Light nuclei fuse upward in $A$ (Sun, bombs, reactors-to-be); heavy nuclei split downward — both climb $E_{B}/A$ toward iron.",
        detail: "The curve's slope prices every nuclear energy scheme.",
      },
      {
        term: "Mass–energy interchange",
        kind: "law",
        statement: "$E = mc^{2}$: $1 \\text{ kg}$ equates to $9.00 \\times 10^{16} \\text{ J}$ ($25$ billion kWh).",
        detail: "Chemical burns trade eV per atom; nuclear trades MeV — a million-fold gap.",
      },
    ],
    figures: [
      {
        caption: "Binding per nucleon peaks at iron: fuse light nuclei up, fission heavy ones down, to release energy.",
        svg: "<svg role='img' aria-label='Binding per nucleon peaks at iron: fuse light nuclei up, fission heavy ones down, to release energy.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"40\" y1=\"160\" x2=\"370\" y2=\"160\"/><line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"20\"/><path d=\"M45 120 Q100 60 190 45 Q280 55 360 80\"/><circle cx=\"190\" cy=\"45\" r=\"5\" fill=\"currentColor\"/><text x=\"180\" y=\"30\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">Fe-56 peak</text><text x=\"60\" y=\"140\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">fusion -&gt;</text><text x=\"270\" y=\"110\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">&lt;- fission</text><text x=\"330\" y=\"180\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">A</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Helium binding energy",
        problem: "$^{4}\\text{He}$ atomic mass is $4.0026 \\text{ u}$; $m_{p} = 1.0073$, $m_{n} = 1.0087$, $m_{e} = 0.000549 \\text{ u}$. Find $E_{B}$.",
        steps: [
          { label: "Step 1: Parts", text: "$2(1.0073) + 2(1.0087) + 2(0.000549) = 4.0331 \\text{ u}$." },
          { label: "Step 2: Defect", text: "$\\Delta m = 4.0331 - 4.0026 = 0.0305 \\text{ u}$." },
          { label: "Step 3: Energy", text: "$E_{B} = 931.5 \\times 0.0305 = 28.4 \\text{ MeV}$ ($7.10 \\text{ MeV}$/nucleon)." },
        ],
        result: "$28.4 \\text{ MeV}$ bound.",
      },
      {
        title: "1-gram mass energy",
        problem: "Find the energy equivalent of $1.00 \\text{ g}$ of mass.",
        steps: [
          { label: "Step 1: $E = mc^{2}$", text: "$E = (0.00100)(3.00 \\times 10^{8})^{2} = 9.00 \\times 10^{13} \\text{ J}$." },
        ],
        result: "$9.00 \\times 10^{13} \\text{ J}$ ($25.0$ million kWh).",
      },
    ],
    keyTakeaways: [
      "$E_{B} = \\Delta m c^{2}$ with $931.5 \\text{ MeV}$ per u.",
      "$E_{B}/A$ peaks at iron — fusion climbs from below, fission descends from above.",
      "Nuclear MeV dwarf chemical eV by a million times.",
    ],
    quiz: [
      {
        q: "A nucleus's mass compared with its separated nucleons is:",
        options: ["Greater", "Less (by $E_{B}/c^{2}$)", "Equal", "Unrelated"],
        answer: 1,
        explanation: "Binding energy leaves as radiation/gamma on formation; the bound system weighs less.",
      },
      {
        q: "$\\Delta m = 0.0100 \\text{ u}$ binds:",
        options: ["$9.32 \\text{ MeV}$", "$9315 \\text{ MeV}$", "$0.0100 \\text{ eV}$", "$3.00 \\times 10^{8} \\text{ J}$"],
        answer: 0,
        explanation: "$931.5 \\times 0.0100 = 9.32 \\text{ MeV}$.",
      },
      {
        q: "Fusing hydrogen toward helium releases energy because:",
        options: ["Protons vanish", "Helium's $E_{B}/A$ exceeds hydrogen's", "Electrons add mass", "Iron catalyzes"],
        answer: 1,
        explanation: "Climbing the curve toward iron liberates the binding difference.",
      },
    ],
  },
  {
    sectionId: "ewen-ch23-s7",
    readingTime: 6,
    intro: "Unstable nuclei decay by alpha, beta, or gamma emission following exponential law $N = N_{0}e^{-\\lambda t}$ with clockwork half-lives. This section writes the three decay modes, computes remaining fractions, and dates artifacts with carbon-14.",
    objectives: [
      "Write alpha, beta-minus, and gamma decay equations",
      "Apply $N = N_{0}(1/2)^{t/T}$ and $A = \\lambda N$",
      "Explain carbon dating and Q-value energy release",
    ],
    concepts: [
      {
        term: "Alpha decay",
        kind: "definition",
        statement: "$^{A}_{Z}X \\to ^{A-4}_{Z-2}Y + ^{4}_{2}\\text{He}$: heavy nuclei shed $Z = 2$, $A = 4$ chunks (e.g., $^{238}\\text{U} \\to ^{234}\\text{Th} + \\alpha$).",
        detail: "Alphas stop in paper/skin but ionize densely — smoke detectors use $^{241}\\text{Am}$ safely sealed.",
      },
      {
        term: "Beta-minus decay",
        kind: "definition",
        statement: "$n \\to p + e^{-} + \\bar{\\nu}_{e}$: $^{A}_{Z}X \\to ^{A}_{Z+1}Y$ (e.g., $^{14}\\text{C} \\to ^{14}\\text{N} + \\beta^{-}$).",
        detail: "The weak force transmutes a neutron; electrons (and antineutrinos) carry the energy out.",
      },
      {
        term: "Gamma emission",
        kind: "definition",
        statement: "Excited nuclei shed $\\gamma$ photons ($^{A}_{Z}X^{*} \\to ^{A}_{Z}X + \\gamma$) with no $Z$/$A$ change.",
        detail: "Gammas penetrate deepest — lead and distance shield them.",
      },
      {
        term: "Half-life law",
        kind: "law",
        statement: "$N = N_{0}(1/2)^{t/T}$ with half-life $T = \\ln 2/\\lambda$; activity $A = \\lambda N$ in becquerels.",
        detail: "After $n$ half-lives, $(1/2)^{n}$ remains: $10$ halves leave ~$1/1000$.",
      },
      {
        term: "Carbon-14 dating",
        kind: "method",
        statement: "$^{14}\\text{C}$ ($T = 5730 \\text{ yr}$) fixes artifact age from remaining fraction: $t = T\\ln(N_{0}/N)/\\ln 2$.",
        detail: "Works to ~$50{,}000$ yr; longer clocks use $^{40}\\text{K}$ and $^{238}\\text{U}$ chains.",
      },
    ],
    figures: [
      {
        caption: "Half-life decay: $N = N_{0}(1/2)^{t/T}$ — one half remains per $T$, one-eighth after $3T$.",
        svg: "<svg role='img' aria-label='Half-life decay: N = N_0(1/2)^t/T — one half remains per T, one-eighth after 3T.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"50\" y1=\"160\" x2=\"370\" y2=\"160\"/><line x1=\"50\" y1=\"160\" x2=\"50\" y2=\"20\"/><path d=\"M50 30 Q110 35 150 95 Q190 155 230 158 Q290 160 350 160\"/><line x1=\"150\" y1=\"95\" x2=\"150\" y2=\"160\" stroke-dasharray=\"4 4\"/><line x1=\"230\" y1=\"140\" x2=\"230\" y2=\"160\" stroke-dasharray=\"4 4\"/><text x=\"150\" y=\"180\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">T: 1/2</text><text x=\"230\" y=\"180\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">2T: 1/4</text><text x=\"300\" y=\"180\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">3T: 1/8</text></svg>",
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Iodine-131 remainder",
        problem: "$^{131}\\text{I}$ ($T = 8.02 \\text{ d}$) starts at $120 \\text{ MBq}$. Find activity after $24.1 \\text{ d}$.",
        steps: [
          { label: "Step 1: Halves elapsed", text: "$24.1/8.02 = 3.00$ half-lives." },
          { label: "Step 2: Decay", text: "$A = 120(1/2)^{3} = 15.0 \\text{ MBq}$." },
        ],
        result: "$15.0 \\text{ MBq}$ — three halvings to one-eighth.",
      },
      {
        title: "Carbon-dating a beam",
        problem: "A timber holds $0.250$ of its fresh $^{14}\\text{C}$ ratio. Estimate its age ($T = 5730 \\text{ yr}$).",
        steps: [
          { label: "Step 1: Halves", text: "$0.250 = (1/2)^{2}$: two half-lives." },
          { label: "Step 2: Age", text: "$t = 2 \\times 5730 = 11{,}460 \\text{ yr}$." },
        ],
        result: "About $11{,}500$ years old.",
      },
    ],
    keyTakeaways: [
      "Alpha sheds $^{4}$He; beta transmutes $n \\to p$; gamma sheds energy only.",
      "Half-lives clock decay: $N = N_{0}(1/2)^{t/T}$, $A = \\lambda N$.",
      "$^{14}$C ratios date organic remains to ~$50$ kyr.",
    ],
    quiz: [
      {
        q: "$^{238}_{92}\\text{U}$ alpha-decays to:",
        options: ["$^{238}_{93}\\text{Np}$", "$^{234}_{90}\\text{Th}$", "$^{238}_{92}\\text{U}$ (unchanged)", "$^{236}_{92}\\text{U}$"],
        answer: 1,
        explanation: "Minus $4$ in $A$, minus $2$ in $Z$: $^{234}_{90}\\text{Th}$ plus $\\alpha$.",
      },
      {
        q: "After $4$ half-lives the remaining fraction is:",
        options: ["$1/4$", "$1/8$", "$1/16$", "$0$"],
        answer: 2,
        explanation: "$(1/2)^{4} = 1/16$.",
      },
      {
        q: "Beta-minus decay changes a nucleus by:",
        options: ["$A-4$, $Z-2$", "$A$ same, $Z+1$", "No change at all", "$Z-1$ with $\\alpha$"],
        answer: 1,
        explanation: "A neutron becomes a proton; nucleon count is conserved.",
      },
    ],
  },
  {
    sectionId: "ewen-ch23-s8",
    readingTime: 6,
    intro: "Split uranium or fuse hydrogen and MeV per reaction pour out — fission and fusion. This section balances the flagship reactions, explains chain reactions and criticality, and tours reactors, weapons-safety, and stellar burning.",
    objectives: [
      "Balance $^{235}$U fission and D–T fusion equations",
      "Explain $k$, criticality, moderation, and control",
      "Compare fission reactors with stellar and magnetic fusion",
    ],
    concepts: [
      {
        term: "U-235 fission",
        kind: "theorem",
        statement: "$^{235}\\text{U} + n \\to$ fragments $+ 2$–$3n + \\sim 200 \\text{ MeV}$ (e.g., $^{141}\\text{Ba} + ^{92}\\text{Kr} + 3n$).",
        detail: "Heavy fragments plus gamma/neutrino energy sum the $200 \\text{ MeV}$ — a million times chemistry.",
      },
      {
        term: "Chain reaction and $k$",
        kind: "definition",
        statement: "Multiplication $k$ = neutrons per neutron per generation: $k = 1$ critical (steady), $> 1$ supercritical, $< 1$ subcritical.",
        detail: "Moderators slow neutrons to thermal (fissionable); control rods absorb the excess.",
      },
      {
        term: "D–T fusion",
        kind: "theorem",
        statement: "$\\text{D} + \\text{T} \\to ^{4}\\text{He} + n + 17.6 \\text{ MeV}$: the easiest terrestrial fusion, needing $10^{8} \\text{ K}$ confinement.",
        detail: "Tokamaks and lasers chase Lawson breakeven; the Sun burns p–p chains instead.",
      },
      {
        term: "Reactor anatomy",
        kind: "insight",
        statement: "Fuel, moderator, coolant, control rods, containment: fission heat makes steam that spins turbines — a nuclear kettle.",
        detail: "PWRs pressurize water; BWRs boil it; CANDUs burn natural uranium with heavy water.",
      },
      {
        term: "Stellar burning stages",
        kind: "insight",
        statement: "Stars fuse H→He→C→…→Fe, then die: supernovae forge heavier elements and scatter them.",
        detail: "Your gold and iodine are stardust from explosive nucleosynthesis.",
      },
    ],
    figures: [
      {
        caption: "Fission chain: each split releases neutrons that split further; control rods absorb the excess to hold $k = 1$.",
        svg: "<svg role='img' aria-label='Fission chain: each split releases neutrons that split further; control rods absorb the excess to hold k = 1.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"80\" cy=\"100\" r=\"16\"/><circle cx=\"200\" cy=\"60\" r=\"16\"/><circle cx=\"200\" cy=\"140\" r=\"16\"/><circle cx=\"320\" cy=\"40\" r=\"12\"/><circle cx=\"320\" cy=\"100\" r=\"12\"/><circle cx=\"320\" cy=\"160\" r=\"12\"/><line x1=\"96\" y1=\"100\" x2=\"184\" y2=\"60\"/><line x1=\"96\" y1=\"100\" x2=\"184\" y2=\"140\"/><line x1=\"216\" y1=\"60\" x2=\"308\" y2=\"40\"/><line x1=\"216\" y1=\"60\" x2=\"308\" y2=\"100\"/><line x1=\"216\" y1=\"140\" x2=\"308\" y2=\"160\"/><text x=\"60\" y=\"140\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">U-235 + n</text><text x=\"250\" y=\"185\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">neutrons branch further</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Fission energy per kilogram",
        problem: "Each $^{235}$U fission releases $200 \\text{ MeV}$. Find energy per $1.00 \\text{ kg}$ fully fissioned.",
        steps: [
          { label: "Step 1: Nuclei count", text: "$N = (1000/235)(6.02 \\times 10^{23}) = 2.56 \\times 10^{24}$." },
          { label: "Step 2: Total MeV", text: "$2.56 \\times 10^{24} \\times 200 = 5.12 \\times 10^{26} \\text{ MeV}$." },
          { label: "Step 3: Joules", text: "$\\times 1.60 \\times 10^{-13} = 8.19 \\times 10^{13} \\text{ J}$." },
        ],
        result: "$8.2 \\times 10^{13} \\text{ J}$ ($22.8$ million kWh) per kg.",
      },
      {
        title: "D–T energy split",
        problem: "D–T fusion releases $17.6 \\text{ MeV}$. What fraction rides the neutron versus the alpha?",
        steps: [
          { label: "Step 1: Momentum share", text: "Inverse-mass split: neutron takes $4/5$, alpha $1/5$." },
          { label: "Step 2: Values", text: "$14.1 \\text{ MeV}$ neutron, $3.50 \\text{ MeV}$ alpha." },
        ],
        result: "Neutron $14.1 \\text{ MeV}$ (escapes to blanket); alpha $3.5 \\text{ MeV}$ (heats plasma).",
      },
    ],
    keyTakeaways: [
      "Fission: $\\sim 200 \\text{ MeV}$ per $^{235}$U split; $k = 1$ holds reactors steady.",
      "Fusion D–T: $17.6 \\text{ MeV}$ shared $14.1/3.5$ neutron/alpha.",
      "Reactors are controlled kettles; stars are gravitational fusion furnaces.",
    ],
    quiz: [
      {
        q: "Control rods regulate reactors by:",
        options: ["Cooling water", "Absorbing excess neutrons", "Adding fuel", "Spinning turbines"],
        answer: 1,
        explanation: "Boron/cadmium capture trims $k$ to exactly $1$.",
      },
      {
        q: "In D–T fusion most energy leaves with the:",
        options: ["Alpha particle", "Neutron", "Gamma only", "Electron"],
        answer: 1,
        explanation: "Momentum conservation gives the light neutron $4/5$ of $17.6 \\text{ MeV}$.",
      },
      {
        q: "A reactor with $k = 0.98$ is:",
        options: ["Supercritical", "Critical", "Subcritical (dying out)", "Fusing"],
        answer: 2,
        explanation: "Each generation shrinks $2\\%$ — power falls without rod withdrawal.",
      },
    ],
  },
  {
    sectionId: "ewen-ch23-s9",
    readingTime: 5,
    intro: "You cannot see radiation, but Geiger counters, scintillators, and dosimeters can. This section detects each radiation type, defines exposure, absorbed dose, and dose equivalent (roentgen, rad/gray, rem/sievert), and sets safety practice.",
    objectives: [
      "Match detectors (GM, scintillator, film/TLD, cloud chamber) to tasks",
      "Distinguish exposure, absorbed dose, and dose equivalent with units",
      "Apply time–distance–shielding rules and quote background levels",
    ],
    concepts: [
      {
        term: "Geiger–Müller counter",
        kind: "method",
        statement: "GM tubes avalanche-ionize per entering particle: clicks count events, not energy.",
        detail: "Survey workhorse for contamination; saturates in high fields.",
      },
      {
        term: "Scintillation and semiconductor detectors",
        kind: "method",
        statement: "Scintillators flash per gamma (photomultiplier reads energy); Si/Ge diodes resolve keV spectra directly.",
        detail: "Identification needs energy resolution — GM clicks cannot fingerprint isotopes.",
      },
      {
        term: "Exposure versus dose",
        kind: "notation",
        statement: "Exposure (roentgen, air ionization) → absorbed dose ($1 \\text{ Gy} = 100 \\text{ rad} = 1 \\text{ J}/\\text{kg}$) → dose equivalent ($\\text{Sv} = Q \\times \\text{Gy}$; $1 \\text{ Sv} = 100 \\text{ rem}$).",
        detail: "Quality factor $Q$: $1$ for beta/gamma, $20$ for alpha internally.",
      },
      {
        term: "Time–distance–shielding",
        kind: "method",
        statement: "Minimize time, maximize distance ($1/d^{2}$), interpose shielding (paper/plastic/lead per type).",
        detail: "Doubling distance quarters gamma dose — the cheapest shield is air.",
      },
      {
        term: "Background and limits",
        kind: "notation",
        statement: "Background ~$3 \\text{ mSv}/\\text{yr}$ (radon dominates); occupational limit $50 \\text{ mSv}/\\text{yr}$ (U.S.).",
        detail: "ALARA keeps exposures beneath limits by design, not luck.",
      },
    ],
    examples: [
      {
        title: "Distance rule for a source",
        problem: "A gamma source reads $80.0 \\text{ mrem}/\\text{h}$ at $0.500 \\text{ m}$. Estimate the rate at $2.00 \\text{ m}$.",
        steps: [
          { label: "Step 1: Inverse square", text: "Factor $(0.500/2.00)^{2} = 1/16$." },
          { label: "Step 2: Scale", text: "$80.0/16 = 5.00 \\text{ mrem}/\\text{h}$." },
        ],
        result: "$5.00 \\text{ mrem}/\\text{h}$ — step back instead of adding lead.",
      },
      {
        title: "Dose-equivalent comparison",
        problem: "Tissue absorbs $0.0200 \\text{ Gy}$ of alpha ($Q = 20$) versus gamma ($Q = 1$). Compare sieverts.",
        steps: [
          { label: "Step 1: Alpha", text: "$0.0200 \\times 20 = 0.400 \\text{ Sv}$ ($40 \\text{ rem}$)." },
          { label: "Step 2: Gamma", text: "$0.0200 \\times 1 = 0.0200 \\text{ Sv}$ ($2 \\text{ rem}$)." },
        ],
        result: "Alpha does $20\\times$ the biological damage per gray inside the body.",
      },
    ],
    keyTakeaways: [
      "GM counts events; scintillators and diodes resolve energies.",
      "Roentgen → gray/rad → sievert/rem tracks air → tissue → biology.",
      "Time, distance ($1/d^{2}$), shielding — in that order of cheapness.",
    ],
    quiz: [
      {
        q: "To identify which isotope contaminates a bench you need:",
        options: ["A GM counter", "An energy-resolving detector", "Film badge only", "A cloud chamber photo"],
        answer: 1,
        explanation: "Gamma-line energies fingerprint nuclides; GM clicks carry no energy info.",
      },
      {
        q: "$1 \\text{ Gy}$ of absorbed dose equals:",
        options: ["$1 \\text{ J}/\\text{kg}$", "$1 \\text{ W}$", "$1 \\text{ C}/\\text{kg}$", "$1 \\text{ Sv}$ always"],
        answer: 0,
        explanation: "Gray is joules per kilogram; sieverts multiply by $Q$.",
      },
      {
        q: "Tripling distance from a point gamma source changes dose rate by:",
        options: ["$1/3$", "$1/9$", "$3\\times$", "Unchanged"],
        answer: 1,
        explanation: "Inverse-square: $(1/3)^{2} = 1/9$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch23-s10",
    readingTime: 5,
    intro: "Alpha stops in paper, beta in aluminum, gamma needs lead — penetrating power decides shielding. This section orders the radiations, sizes half-value layers, and matches shielding to source type.",
    objectives: [
      "Order alpha < beta < gamma/neutron penetration with examples",
      "Use half-value layers $I = I_{0}(1/2)^{x/HVL}$",
      "Specify shielding per radiation (paper, Al/Pb, water/concrete, lead)",
    ],
    concepts: [
      {
        term: "Penetration order",
        kind: "law",
        statement: "Alpha: cm of air/paper; beta: meters of air/mm of Al; gamma/X-ray: exponential in lead; neutrons: hydrogen-rich water/concrete.",
        detail: "Charge and mass set ionization density — heavy chargers dump fast and stop fast.",
      },
      {
        term: "Half-value layer",
        kind: "method",
        statement: "One HVL halves gamma intensity: $I = I_{0}(1/2)^{x/HVL}$; tenth-value $\\approx 3.32$ HVLs.",
        detail: "Co-60 gammas: HVL ~$1.2 \\text{ cm}$ Pb; $4 \\text{ cm}$ cuts to one-tenth.",
      },
      {
        term: "Range-energy trend",
        kind: "insight",
        statement: "Higher energy reaches farther per type, but type dominates: MeV alphas still lose to keV gammas in penetration.",
        detail: "Shield by worst penetrating type present, not by average energy.",
      },
      {
        term: "Neutron special case",
        kind: "insight",
        statement: "Neutral neutrons skip electrons and smash nuclei — slow in hydrogen, capture in boron/cadmium.",
        detail: "Reactor shields layer water (slow) plus lead (gammas) plus boron (capture).",
      },
      {
        term: "Internal versus external hazard",
        kind: "insight",
        statement: "Alpha is harmless outside skin but devastating inhaled; gamma threatens at distance.",
        detail: "Contamination control (masks, gloves) targets alpha/beta; shielding walls target gamma.",
      },
    ],
    figures: [
      {
        caption: "Penetration ladder: paper stops $\\alpha$, aluminum stops $\\beta$, lead attenuates $\\gamma$ by half-value layers.",
        svg: "<svg role='img' aria-label='Penetration ladder: paper stops alpha, aluminum stops beta, lead attenuates gamma by half-value layers.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"30\" y1=\"60\" x2=\"370\" y2=\"60\"/><line x1=\"30\" y1=\"100\" x2=\"370\" y2=\"100\"/><line x1=\"30\" y1=\"140\" x2=\"370\" y2=\"140\"/><rect x=\"150\" y=\"45\" width=\"15\" height=\"30\"/><rect x=\"220\" y=\"85\" width=\"15\" height=\"30\"/><rect x=\"150\" y=\"125\" width=\"60\" height=\"30\"/><line x1=\"30\" y1=\"60\" x2=\"150\" y2=\"60\"/><line x1=\"30\" y1=\"100\" x2=\"220\" y2=\"100\"/><text x=\"35\" y=\"50\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">alpha | paper</text><text x=\"35\" y=\"90\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">beta | aluminum</text><text x=\"35\" y=\"130\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">gamma | lead HVLs</text></svg>",
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Lead for Co-60",
        problem: "Co-60 gamma HVL in lead is $1.20 \\text{ cm}$. What thickness cuts intensity to $1/8$?",
        steps: [
          { label: "Step 1: Halvings", text: "$1/8 = (1/2)^{3}$: three HVLs." },
          { label: "Step 2: Thickness", text: "$3 \\times 1.20 = 3.60 \\text{ cm}$ Pb." },
        ],
        result: "$3.60 \\text{ cm}$ of lead (plus buildup margin in practice).",
      },
      {
        title: "Beta shield choice",
        problem: "A $2.00 \\text{ MeV}$ beta source needs bench shielding. Specify it and explain why not lead-first.",
        steps: [
          { label: "Step 1: Stop betas in low-$Z$", text: "~$1 \\text{ cm}$ acrylic/aluminum stops $2 \\text{ MeV}$ betas." },
          { label: "Step 2: Reason", text: "Lead-first would convert betas to bremsstrahlung X-rays; low-$Z$ first, lead (if any) outside." },
        ],
        result: "Centimeter acrylic; lead only as outer backup.",
      },
    ],
    keyTakeaways: [
      "Paper/Al/lead-water sorts alpha/beta/gamma-neutron shielding.",
      "Gammas attenuate by HVLs: $I = I_{0}(1/2)^{x/HVL}$.",
      "Internal alpha versus external gamma flips the hazard logic.",
    ],
    quiz: [
      {
        q: "Which ordering of penetration is correct?",
        options: ["$\\alpha > \\beta > \\gamma$", "$\\gamma > \\beta > \\alpha$", "$\\beta > \\gamma > \\alpha$", "All equal"],
        answer: 1,
        explanation: "Neutral penetrating gammas outrange betas, which outrange heavy alphas.",
      },
      {
        q: "Two HVLs of shielding transmit:",
        options: ["$1/2$", "$1/4$", "$0$", "$2\\times$"],
        answer: 1,
        explanation: "$(1/2)^{2} = 1/4$.",
      },
      {
        q: "Beta shields use plastic/aluminum before lead to:",
        options: ["Save money only", "Avoid bremsstrahlung X-ray production in high-$Z$ material", "Look transparent", "Increase weight"],
        answer: 1,
        explanation: "Low-$Z$ stopping minimizes radiative conversion; lead follows for any residual photons.",
      },
      // PYQ-pattern — photon energy (rephrased, values changed)
      {
        q: "Green light of wavelength $\\lambda = 500 \\text{ nm}$ carries photon energy closest to:",
        options: ["$2.48 \\text{ eV}$", "$1.24 \\text{ eV}$", "$4.96 \\text{ eV}$", "$12.4 \\text{ eV}$"],
        answer: 0,
        explanation: "Step 1: Given $\\lambda = 500 \\text{ nm} = 5.00 \\times 10^{-7} \\text{ m}$. Step 2: Governing law is $E = hc/\\lambda$ with $hc = 1240 \\text{ eV}\\cdot\\text{nm}$. Step 3: Key equation: $$E = \\frac{1240}{500}.$$ Step 4: Numerics give $E = 2.48 \\text{ eV}$; units $\\text{eV}\\cdot\\text{nm}/\\text{nm}$ are energy. Step 5: Distractors fail because $1.24$ doubles the wavelength, $4.96$ halves it, and $12.4$ slips a decimal. Step 6: Conclude each green photon carries **$2.48 \\text{ eV}$**."
      },
      // PYQ-pattern — photoelectric stopping potential (rephrased, values changed)
      {
        q: "Light of frequency $f = 1.00 \\times 10^{15} \\text{ Hz}$ strikes a surface of work function $\\phi = 2.00 \\text{ eV}$. The stopping potential is closest to:",
        options: ["$4.14 \\text{ V}$", "$1.07 \\text{ V}$", "$2.14 \\text{ V}$", "$0$"],
        answer: 2,
        explanation: "Step 1: Given $f = 1.00 \\times 10^{15} \\text{ Hz}$ and $\\phi = 2.00 \\text{ eV}$. Step 2: Governing law is Einstein $K_{max} = hf - \\phi$ with $h = 4.14 \\times 10^{-15} \\text{ eV}\\cdot\\text{s}$, and $eV_{0} = K_{max}$. Step 3: Key equation: $$hf = (4.14 \\times 10^{-15})(1.00 \\times 10^{15}) = 4.14 \\text{ eV}, \\qquad V_{0} = 4.14-2.00.$$ Step 4: Numerics give $K_{max} = 2.14 \\text{ eV}$ so $V_{0} = 2.14 \\text{ V}$; volts match electron-volts per charge. Step 5: Distractors fail because $4.14$ forgets the work function, $1.07$ halves the remainder, and $0$ claims no emission although $hf > \\phi$. Step 6: Conclude the stopping potential is **$2.14 \\text{ V}$**."
      },
      // PYQ-pattern — de Broglie wavelength (rephrased, values changed)
      {
        q: "An electron moves at $v = 1.00 \\times 10^{6} \\text{ m/s}$. Its de Broglie wavelength is closest to:",
        options: ["$7.3 \\text{ nm}$", "$0.73 \\text{ nm}$", "$0.073 \\text{ nm}$", "$1.46 \\text{ nm}$"],
        answer: 1,
        explanation: "Step 1: Given $v = 1.00 \\times 10^{6} \\text{ m/s}$ and $m = 9.11 \\times 10^{-31} \\text{ kg}$. Step 2: Governing law is $\\lambda = h/p = h/mv$ with $h = 6.626 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$. Step 3: Key equation: $$\\lambda = \\frac{6.626 \\times 10^{-34}}{(9.11 \\times 10^{-31})(1.00 \\times 10^{6})}.$$ Step 4: Numerics give $\\lambda = 7.27 \\times 10^{-10} \\text{ m} = 0.73 \\text{ nm}$; units $\\text{J}\\cdot\\text{s}/(\\text{kg}\\cdot\\text{m/s})$ are meters. Step 5: Distractors fail by factors of ten or by doubling the momentum. Step 6: Conclude the matter wavelength is about **$0.73 \\text{ nm}$**."
      },
      // PYQ-pattern — Bohr level energy (rephrased, values changed)
      {
        q: "Hydrogen levels obey $E_{n} = -13.6/n^{2} \\text{ eV}$. The energy needed to ionize the atom from $n = 2$ is:",
        options: ["$13.6 \\text{ eV}$", "$10.2 \\text{ eV}$", "$1.89 \\text{ eV}$", "$3.40 \\text{ eV}$"],
        answer: 3,
        explanation: "Step 1: Given $E_{2} = -13.6/4 = -3.40 \\text{ eV}$ and free electron at $0$. Step 2: Governing law is the Bohr level formula $E_{n} = -13.6/n^{2} \\text{ eV}$. Step 3: Key equation: $$E_{ion} = 0-E_{2} = 0-(-3.40) = 3.40 \\text{ eV}.$$ Step 4: Units are $\\text{eV}$ and the cost must be smaller than from the ground state. Step 5: Distractors fail because $13.6$ ionizes from $n = 1$, $10.2$ is the $2 \\to 1$ photon, and $1.89$ is the $3 \\to 2$ line. Step 6: Conclude ionization from $n = 2$ costs **$3.40 \\text{ eV}$**."
      },
      // PYQ-pattern — half-life decay (rephrased, values changed)
      {
        q: "A sample has half-life $8.0 \\text{ days}$. The surviving fraction after $24 \\text{ days}$ is:",
        options: ["$\\frac{1}{8}$", "$\\frac{1}{3}$", "$\\frac{1}{16}$", "$\\frac{1}{2}$"],
        answer: 0,
        explanation: "Step 1: Given half-life $T_{1/2} = 8.0 \\text{ days}$ and wait $t = 24 \\text{ days}$. Step 2: Governing law is $N = N_{0}(1/2)^{t/T_{1/2}}$. Step 3: Key equation: $$\\frac{N}{N_{0}} = \\left(\\frac{1}{2}\\right)^{24/8} = \\left(\\frac{1}{2}\\right)^{3}.$$ Step 4: Numerics give $1/8 = 0.125$; the fraction is dimensionless and must fall below one half. Step 5: Distractors fail because $1/3$ divides linearly, $1/16$ counts four half-lives, and $1/2$ stops after one. Step 6: Conclude about **$\\frac{1}{8}$ of the sample remains**."
      },
      // PYQ-pattern — hydrogen spectral line (rephrased, values changed)
      {
        q: "The red hydrogen line at $656 \\text{ nm}$ corresponds to photon energy closest to:",
        options: ["$10.2 \\text{ eV}$", "$1.89 \\text{ eV}$", "$3.78 \\text{ eV}$", "$13.6 \\text{ eV}$"],
        answer: 1,
        explanation: "Step 1: Given $\\lambda = 656 \\text{ nm}$ for the $3 \\to 2$ transition. Step 2: Governing law is $E = hc/\\lambda$ with $hc = 1240 \\text{ eV}\\cdot\\text{nm}$, matching $E_{3}-E_{2}$. Step 3: Key equation: $$E = \\frac{1240}{656}.$$ Step 4: Numerics give $E \\approx 1.89 \\text{ eV}$, and indeed $-1.51-(-3.40) = 1.89 \\text{ eV}$; units are energy. Step 5: Distractors fail because $10.2$ is the Lyman $2 \\to 1$ line, $3.78$ doubles the Balmer photon, and $13.6$ is full ionization. Step 6: Conclude the red line carries **$1.89 \\text{ eV}$**."
      },
    ],
  },
]
