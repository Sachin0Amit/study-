import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 29: The Atom (Sections 29.1 – 29.3)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh29Content: SectionContent[] = [
  {
    sectionId: "coletta-ch29-s1",
    readingTime: 7,
    intro: "Hydrogen glows only in sharp lines, a barcode no classical orbit can print. Coletta presents the Rydberg formula and Bohr's quantized angular momentum $L = n\\hbar$, deriving radii $r_{n} = n^{2}a_{0}$ and energies $E_{n} = -13.6/n^{2}$ eV. Lines become electron jumps.",
    objectives: [
      "Use the Rydberg $1/\\lambda = R(1/n_{f}^{2} - 1/n_{i}^{2})$ for hydrogen series",
      "Derive Bohr radii and energies from $L = n\\hbar$ plus Coulomb attraction",
      "Explain emission versus absorption with level jumps"
    ],
    concepts: [
      {
        term: "Line spectra",
        kind: "definition",
        statement: "Excited gases emit **bright lines** and cool gases absorb **dark lines** at the same wavelengths, each element's unique fingerprint.",
        detail: "Neon signs glow red-orange because neon's allowed jumps cluster there."
      },
      {
        term: "Rydberg formula",
        kind: "theorem",
        statement: "Hydrogen lines obey $1/\\lambda = R_{H}(1/n_{f}^{2} - 1/n_{i}^{2})$ with $R_{H} = 1.097 \\times 10^{7}$ m$^{-1}$: Lyman ($n_{f} = 1$), Balmer ($2$), Paschen ($3$).",
        detail: "Balmer $3 \\to 2$ gives $656$ nm red, the $H$-alpha of solar flares."
      },
      {
        term: "Bohr quantization",
        kind: "law",
        statement: "Bohr restricts circular orbits to $L = mvr = n\\hbar$ ($n = 1, 2, \\dots$), admitting only standing-wave circles.",
        detail: "This single rule plus Newton and Coulomb generates the whole hydrogen spectrum."
      },
      {
        term: "Bohr radius and energy",
        kind: "theorem",
        statement: "Orbits sit at $r_{n} = n^{2}a_{0}$ with $a_{0} = 0.529 \\times 10^{-10}$ m and energies $E_{n} = -13.6/n^{2}$ eV, negative because bound.",
        detail: "The $n = 2$ level spans $2.12$ angstroms at $-3.40$ eV, needing $3.40$ eV to free."
      },
      {
        term: "Photon jumps",
        kind: "method",
        statement: "Transitions emit or absorb $hf = |E_{i} - E_{f}|$: downward jumps radiate, upward jumps drink light of exactly the gap energy.",
        detail: "The $656$ nm line is the $1.89$ eV drop from $-1.51$ to $-3.40$ eV." }
    ],
    figures: [
      {
        caption: "Bohr jumps: $hf = E_{i} - E_{f}$ with Balmer lines landing on $n = 2$",
        svg: '<svg role="img" aria-label="Bohr jumps: hf = E_i - E_f with Balmer lines landing on n = 2" viewBox="0 0 400 150" width="100%" height="150"><line x1="60" y1="120" x2="340" y2="120" stroke="currentColor" stroke-width="2"/><line x1="60" y1="85" x2="340" y2="85" stroke="currentColor" stroke-width="2"/><line x1="60" y1="55" x2="340" y2="55" stroke="currentColor" stroke-width="1.5" opacity="0.7"/><line x1="60" y1="30" x2="340" y2="30" stroke="currentColor" stroke-width="1.2" opacity="0.5"/><text x="350" y="123" font-size="11" fill="currentColor">n=2</text><text x="350" y="88" font-size="11" fill="currentColor">n=3</text><text x="350" y="58" font-size="11" fill="currentColor">n=4</text><line x1="150" y1="55" x2="150" y2="85" stroke="currentColor" stroke-width="2"/><polygon points="150,91 145,81 155,81" fill="currentColor"/><text x="150" y="108" text-anchor="middle" font-size="11" fill="currentColor">656 nm</text><line x1="250" y1="30" x2="250" y2="85" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/><polygon points="250,91 245,81 255,81" fill="currentColor"/></svg>',
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "H-alpha wavelength",
        problem: "Compute the $n = 3$ to $n = 2$ hydrogen wavelength.",
        steps: [
          { label: "Rydberg", text: "$1/\\lambda = 1.097 \\times 10^{7}(1/4 - 1/9) = 1.097 \\times 10^{7} \\times 0.13889 \\approx 1.5236 \\times 10^{6}$ m$^{-1}$." },
          { label: "Invert", text: "$\\lambda = 1/1.5236 \\times 10^{6} \\approx 6.563 \\times 10^{-7}$ m." },
          { label: "Color", text: "$656$ nm deep red Balmer line." }
        ],
        result: "About $656$ nm."
      },
      {
        title: "Ionizing hydrogen",
        problem: "How much energy frees the ground-state electron, and what photon does it?",
        steps: [
          { label: "Level", text: "$E_{1} = -13.6$ eV, so escape needs $13.6$ eV." },
          { label: "Photon", text: "$\\lambda = hc/E = 1240/13.6 \\approx 91.2$ nm, Lyman-limit ultraviolet." },
          { label: "Beyond", text: "More energetic photons split the surplus into electron kinetic energy." }
        ],
        result: "$13.6$ eV ($91.2$ nm cutoff)."
      }
    ],
    keyTakeaways: [
      "Rydberg organizes hydrogen lines by integer pairs.",
      "Bohr's $L = n\\hbar$ yields $r_{n} = n^{2}a_{0}$ and $E_{n} = -13.6/n^{2}$ eV.",
      "Spectral lines are photon-priced level jumps."
    ],
    quiz: [
      {
        q: "Balmer series lands on:",
        options: ["$n = 2$", "$n = 3$", "$n = 4$", "$n = 1$"],
        answer: 0,
        explanation: "Balmer transitions end at $n_{f} = 2$, spanning visible light."
      },
      {
        q: "Hydrogen ground energy $-13.6$ eV means ionization needs:",
        options: ["$13.6$ eV", "$27.2$ eV", "$3.4$ eV", "$10.2$ eV"],
        answer: 0,
        explanation: "Reaching zero from $-13.6$ eV costs $13.6$ eV."
      },
      {
        q: "Bohr radius $a_{0}$ is about:",
        options: ["$53$ pm exactly double", "$0.53$ nm", "$0.053$ nm", "$5.3$ nm"],
        answer: 2,
        explanation: "$a_{0} = 0.529 \\times 10^{-10}$ m $= 0.0529$ nm."
      }
    ]
  },
  {
    sectionId: "coletta-ch29-s2",
    readingTime: 7,
    intro: "Bohr's circles fail for helium and wobble on hydrogen's fine details, so matter waves take over. Coletta introduces Schrodinger's wavefunction $\\psi$ with $|\\psi|^{2}$ as probability and the four quantum numbers. Orbits dissolve into orbitals.",
    objectives: [
      "Interpret $|\\psi|^{2}$ as probability density for the electron",
      "List $n$, $\\ell$, $m_{\\ell}$, $m_{s}$ with their allowed ranges",
      "Explain why $s$ orbitals penetrate and $p$ orbitals node at the nucleus"
    ],
    concepts: [
      {
        term: "Wavefunction",
        kind: "definition",
        statement: "The **wavefunction** $\\psi(x,y,z)$ encodes the electron; $|\\psi|^{2}$ per volume is the probability density of finding it there.",
        detail: "Hydrogen's ground $|\\psi|^{2}$ peaks at $a_{0}$ radially but is nonzero from nucleus to infinity."
      },
      {
        term: "Schrodinger equation",
        kind: "law",
        statement: "Stationary states solve $-\\hbar^{2}\\nabla^{2}\\psi/2m + U\\psi = E\\psi$: kinetic plus Coulomb operators pick discrete $E_{n}$ by boundary conditions.",
        detail: "Confining waves to vanish at infinity quantizes energy with no extra postulate."
      },
      {
        term: "Principal number",
        kind: "notation",
        statement: "**$n = 1, 2, \\dots$** sets size and energy ($-13.6/n^{2}$ eV for hydrogen), the shell of chemistry.",
        detail: "$n = 3$ shells average nine times the ground radius."
      },
      {
        term: "Angular numbers",
        kind: "notation",
        statement: "**$\\ell = 0, \\dots, n - 1$** sets shape ($s, p, d, f$) and **$m_{\\ell} = -\\ell, \\dots, \\ell$** sets orientation, $2\\ell + 1$ orbitals each.",
        detail: "The $n = 2$ shell holds one $2s$ plus three $2p$ orbitals, eight electron slots with spin."
      },
      {
        term: "Spin",
        kind: "definition",
        statement: "Electrons carry intrinsic **spin** $m_{s} = \\pm 1/2$ with magnetic moment, splitting lines in fields (Zeeman) and doubling every orbital.",
        detail: "Silver atoms split in Stern-Gerlach magnets because spin is genuinely two-valued." }
    ],
    examples: [
      {
        title: "Counting states",
        problem: "How many electron states share $n = 3$?",
        steps: [
          { label: "Orbitals", text: "$\\ell = 0, 1, 2$ give $1 + 3 + 5 = 9$ orbitals ($n^{2}$)." },
          { label: "Spin", text: "Two spins each gives $18$ states." },
          { label: "Check", text: "$2n^{2} = 18$ confirms the shell-capacity rule." }
        ],
        result: "$18$ states."
      },
      {
        title: "Ground probability",
        problem: "Hydrogen ground radial probability peaks where? Estimate the most likely radius.",
        steps: [
          { label: "Density", text: "Radial $P(r) \\propto r^{2}e^{-2r/a_{0}}$ balances volume growth against decay." },
          { label: "Maximize", text: "$dP/dr = 0$ gives $r = a_{0}$." },
          { label: "Value", text: "$0.529$ angstroms, the Bohr radius reborn as most-likely rather than only orbit." }
        ],
        result: "Most likely at $a_{0}$."
      }
    ],
    keyTakeaways: [
      "Electrons are $|\\psi|^{2}$ clouds, not circular tracks.",
      "Four numbers $(n, \\ell, m_{\\ell}, m_{s})$ label every state.",
      "Shell $n$ holds $2n^{2}$ electrons."
    ],
    quiz: [
      {
        q: "$|\\psi|^{2}$ means:",
        options: ["Charge density fixed", "Probability density", "Energy value", "Orbit radius"],
        answer: 1,
        explanation: "Its volume integral is the probability of finding the electron there."
      },
      {
        q: "For $n = 2$, allowed $\\ell$ values are:",
        options: ["$0$ and $1$", "$0$, $1$, $2$", "$1$ only", "$0$ only"],
        answer: 0,
        explanation: "$\\ell$ runs $0$ to $n - 1$, giving $2s$ and $2p$."
      },
      {
        q: "Stern-Gerlach splitting proved:",
        options: ["Nuclear decay", "Photon mass", "Circular orbits", "Two-valued spin"],
        answer: 3,
        explanation: "Silver beams split in two by $m_{s} = \\pm 1/2$ magnetism."
      }
    ]
  },
  {
    sectionId: "coletta-ch29-s3",
    readingTime: 7,
    intro: "Filling orbitals by Pauli, lowest energy, and Hund's rules builds the periodic table and its X-ray fingerprints. Coletta explains exclusion, shell filling, characteristic $K_{\\alpha}$ lines by Moseley, and laser action as stimulated cascade. Structure becomes spectra and devices.",
    objectives: [
      "Apply Pauli exclusion with Aufbau and Hund ordering to configurations",
      "Use Moseley's $f \\propto (Z-1)^{2}$ for $K_{\\alpha}$ X-rays",
      "Explain population inversion and stimulated emission in lasers"
    ],
    concepts: [
      {
        term: "Pauli exclusion",
        kind: "law",
        statement: "No two electrons share all four quantum numbers: each orbital holds at most **two** opposite-spin electrons.",
        detail: "Chemistry's shell structure is exclusion made manifest."
      },
      {
        term: "Aufbau and Hund",
        kind: "method",
        statement: "Fill lowest $n + \\ell$ energies first with **parallel spins** in degenerate orbitals (Hund) before pairing.",
        detail: "Carbon is $1s^{2}2s^{2}2p^{2}$ with two unpaired $p$ electrons, hence its four-bond versatility."
      },
      {
        term: "Characteristic X-rays",
        kind: "theorem",
        statement: "Knocking out $n = 1$ ($K$ shell) invites $2 \\to 1$ ($K_{\\alpha}$) photons with $f \\approx (3/4)cR(Z - 1)^{2}$ (Moseley).",
        detail: "Copper $K_{\\alpha}$ at $8.0$ keV ($0.154$ nm) diffracts in every teaching lab."
      },
      {
        term: "Stimulated emission",
        kind: "definition",
        statement: "An incoming photon clones itself off an excited atom (**stimulated** emission), same direction, phase, and energy.",
        detail: "Spontaneous emission is random; stimulated is a photocopier for light."
      },
      {
        term: "Laser conditions",
        kind: "method",
        statement: "**Lasing** needs population **inversion** (more excited than ground) plus an optical cavity for round-trip gain exceeding loss.",
        detail: "Helium-neon $633$ nm red and Nd:YAG $1064$ nm infrared are textbook inversion systems." }
    ],
    figures: [
      {
        caption: "K-alpha: $2p \\to 1s$ drop emits the characteristic X-ray photon",
        svg: '<svg role="img" aria-label="K-alpha: 2p to 1s drop emits the characteristic X-ray photon" viewBox="0 0 400 140" width="100%" height="140"><circle cx="100" cy="70" r="10" fill="currentColor"/><circle cx="100" cy="70" r="30" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="100" cy="70" r="55" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="155" cy="70" r="5" fill="currentColor"/><line x1="155" y1="70" x2="115" y2="70" stroke="currentColor" stroke-width="2"/><polygon points="109,70 119,65 119,75" fill="currentColor"/><path d="M180,70 L260,70" stroke="currentColor" stroke-width="2"/><polygon points="260,70 250,65 250,75" fill="currentColor"/><text x="220" y="60" font-size="11" fill="currentColor">K-alpha</text><text x="100" y="125" text-anchor="middle" font-size="11" fill="currentColor">2p falls to K hole</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Copper K-alpha",
        problem: "Estimate copper ($Z = 29$) $K_{\\alpha}$ energy with shielded $Z - 1 = 28$.",
        steps: [
          { label: "Hydrogen-like gap", text: "$E \\approx 13.6(Z-1)^{2}(1 - 1/4) = 10.2 \\times 784$ eV." },
          { label: "Evaluate", text: "$10.2 \\times 784 = 7997$ eV $\\approx 8.0$ keV." },
          { label: "Wavelength", text: "$\\lambda = 1240/8000 \\approx 0.155$ nm." }
        ],
        result: "About $8.0$ keV ($0.155$ nm)."
      },
      {
        title: "Writing sodium",
        problem: "Give sodium's ($Z = 11$) ground configuration and valence.",
        steps: [
          { label: "Fill", text: "$1s^{2}2s^{2}2p^{6}3s^{1}$ uses $2 + 2 + 6 + 1 = 11$ electrons." },
          { label: "Valence", text: "One $3s$ electron outside neon core, hence alkali reactivity." },
          { label: "Hund check", text: "The filled $2p^{6}$ pairs all three $p$ orbitals doubly." }
        ],
        result: "$1s^{2}2s^{2}2p^{6}3s^{1}$."
      }
    ],
    keyTakeaways: [
      "Pauli plus Aufbau plus Hund writes every configuration.",
      "Inner-shell refills broadcast Moseley $K$ X-rays.",
      "Inversion plus cavity turns stimulated emission into lasers."
    ],
    quiz: [
      {
        q: "An orbital holds at most:",
        options: ["Unlimited", "$1$ electron", "$2$ opposite-spin electrons", "$8$ electrons"],
        answer: 2,
        explanation: "Pauli forbids sharing all four numbers, capping each spatial orbital at a spin pair."
      },
      {
        q: "$K_{\\alpha}$ emission is:",
        options: ["$1s \\to 2p$", "$2p \\to 1s$", "$3s \\to 2p$", "Nuclear decay"],
        answer: 1,
        explanation: "An $L$-shell electron refills the $K$ hole, radiating the difference."
      },
      {
        q: "Lasers require:",
        options: ["Population inversion plus cavity", "Radioactive fuel", "Single atoms only", "Total darkness"],
        answer: 0,
        explanation: "More excited than ground atoms plus feedback gives gain over loss."
      }
    ]
  }
]
