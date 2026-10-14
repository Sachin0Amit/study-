import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 39: Particles Behaving as Waves.

export const youngCh39Content: SectionContent[] = [
  {
    sectionId: "young-ch39-s1",
    readingTime: 6,
    intro: "De Broglie inverted Einstein: if waves act like particles, particles should diffract like waves with $\\lambda = h/p$. Davisson and Germer proved it when electrons bounced off nickel in Bragg peaks. Electron microscopes cash the picometer wavelengths daily.",
    objectives: [
      "State de Broglie $\\lambda = h/p$ for massive particles",
      "Compute electron wavelengths from energy ($\\lambda \\approx 1.23/\\sqrt{V}$ nm)",
      "Explain Davisson-Germer as electron Bragg diffraction"
    ],
    concepts: [
      {
        term: "de Broglie wavelength",
        kind: "law",
        statement: "**$\\lambda = h/p = h/\\sqrt{2mK}$** (nonrelativistic); every moving particle carries a wavelength.",
        detail: "Baseball at $40$ m/s: $10^{-34}$ m, unobservable; electrons at volts: nanometers."
      },
      {
        term: "Electron-volt shortcut",
        kind: "method",
        statement: "Electrons through $V$ volts have **$\\lambda = 1.227/\\sqrt{V}$ nm** (nonrelativistic).",
        detail: "$100$ V gives $0.123$ nm; $10$ kV gives $12.3$ pm before relativistic correction."
      },
      {
        term: "Davisson-Germer",
        kind: "law",
        statement: "**$54$ eV electrons scattered $50^{\\circ}$ from Ni peaked** exactly at the nickel Bragg condition for $\\lambda = 0.165$ nm.",
        detail: "Accidental discovery (1927) confirmed matter waves; shared the 1937 Nobel with Thomson."
      },
      {
        term: "Microscope payoff",
        kind: "insight",
        statement: "**Picometer $\\lambda$ resolves atoms** where $500$ nm light stalls at $200$ nm.",
        detail: "$200$ keV TEM reaches $2.5$ pm waves; lenses, not wavelength, limit practice to $\\sim 0.05$ nm."
      },
      {
        term: "Macroscopic invisibility",
        kind: "insight",
        statement: "Large $m$ makes $\\lambda$ absurdly small, so **classical trajectories are the $h \\to 0$ limit**, not a contradiction.",
        detail: "Correspondence again: quantum phases oscillate too fast to matter for baseballs."
      }
    ],
    examples: [
      {
        title: "TEM wavelength",
        problem: "Find $\\lambda$ for $200$ keV electrons (relativistic: $mc^{2} = 511$ keV).",
        steps: [
          { label: "Step 1: Nonrelativistic guess", text: "$1.227/\\sqrt{200000} = 0.00274$ nm $= 2.74$ pm." },
          { label: "Step 2: Relativistic fix", text: "$\\lambda = h/\\sqrt{2mK(1+K/2mc^{2})}$: factor $\\sqrt{1+200/1022} = 1.093$." },
          { label: "Step 3: True", text: "$\\lambda = 2.74/1.093 = 2.51$ pm, the standard TEM value." }
        ],
        result: "$2.51$ pm imaging wavelength."
      },
      {
        title: "Baseball absurdity",
        problem: "$0.145$ kg baseball at $40.0$ m/s. Find $\\lambda$.",
        steps: [
          { label: "Step 1: Momentum", text: "$p = 5.80$ kg-m/s." },
          { label: "Step 2: Wavelength", text: "$\\lambda = 6.626 \\times 10^{-34}/5.80 = 1.14 \\times 10^{-34}$ m." },
          { label: "Step 3: Meaning", text: "$10^{-24}$ atomic diameters: no slit can diffract it." }
        ],
        result: "$1.1 \\times 10^{-34}$ m, utterly classical."
      }
    ],
    keyTakeaways: [
      "$\\lambda = h/p$ assigns every particle a wavelength.",
      "Volt-scale electrons diffract on crystals; microscopes image with pm waves.",
      "Heavy slow objects have undetectable wavelengths."
    ],
    quiz: [
      {
        q: "Electron accelerated by 100 V has lambda about:",
        options: ["$0.123$ nm", "$1.23$ nm", "$12$ nm", "$0.012$ nm"],
        answer: 0,
        explanation: "$1.227/\\sqrt{100} = 0.123$ nm."
      },
      {
        q: "Davisson-Germer proved:",
        options: ["Photons have momentum", "Electrons diffract like waves", "Neutrons decay", "X-rays are particles"],
        answer: 1,
        explanation: "Bragg peaks at de Broglie wavelength confirmed matter waves."
      },
      {
        q: "Doubling electron kinetic energy changes lambda by:",
        options: ["Factor 2", "Factor 1/sqrt(2)", "No change", "Factor 4"],
        answer: 1,
        explanation: "$\\lambda \\propto 1/\\sqrt{K}$ nonrelativistically."
      }
    ]
  },
  {
    sectionId: "young-ch39-s2",
    readingTime: 6,
    intro: "Rutherford's alpha scattering bounced positive charge off a tiny nucleus, while spectrometers showed atoms emit only sharp lines. Classical orbiting electrons should spiral in radiating continua. The twin facts, compact nucleus plus discrete spectra, demanded a quantum atom.",
    objectives: [
      "Describe Rutherford scattering and the nuclear scale $\\sim 10^{-14}$ m",
      "Define emission and absorption line spectra with the Rydberg formula",
      "State why classical atoms collapse"
    ],
    concepts: [
      {
        term: "Rutherford scattering",
        kind: "law",
        statement: "**Large-angle alpha backscatter implies a $10^{-14}$ m nucleus** holding the positive charge.",
        detail: "Foil is mostly empty: $1$ in $8000$ alphas bounces back, the rest pass."
      },
      {
        term: "Line spectra",
        kind: "law",
        statement: "Each element emits/absorbs **sharp $\\lambda$ given by $1/\\lambda = R(1/n_{l}^{2}-1/n_{u}^{2})$** (hydrogen).",
        detail: "Balmer $n_{l} = 2$ spans visible; Lyman $n_{l} = 1$ is ultraviolet."
      },
      {
        term: "Rydberg constant",
        kind: "definition",
        statement: "**$R_{\\infty} = 1.097 \\times 10^{7}$ per m** from $m_{e}$, $e$, $h$, $c$; finite mass corrects slightly per isotope.",
        detail: "Spectroscopy measured $R$ to $10^{-12}$ before theory explained it."
      },
      {
        term: "Classical collapse",
        kind: "insight",
        statement: "Orbiting charges radiate at orbital frequency, so **classical atoms die in $10^{-11}$ s** with chirped continua.",
        detail: "Neither the stability nor the sharp lines survive Maxwell plus Newton."
      },
      {
        term: "Absorption versus emission",
        kind: "method",
        statement: "Hot gas emits its lines bright; cool gas before a continuum **absorbs the same lines dark** (Fraunhofer).",
        detail: "Solar dark lines fingerprint the photosphere's atoms."
      }
    ],
    figures: [
      {
        caption: "Rutherford scattering: rare large-angle backscatter reveals a $10^{-14}$ m nucleus in mostly empty atoms",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="Rutherford scattering: rare large-angle backscatter reveals a 10^-14 m nucleus in mostly empty atoms"><rect x="0" y="0" width="400" height="190" fill="none"/><circle cx="230" cy="95" r="8" fill="currentColor"/><circle cx="230" cy="95" r="30" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/><line x1="20" y1="95" x2="180" y2="95" stroke="currentColor" stroke-width="2"/><polygon points="180,95 170,90 170,100" fill="currentColor"/><line x1="20" y1="60" x2="180" y2="55" stroke="currentColor" stroke-width="1.5"/><line x1="180" y1="55" x2="120" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="130" x2="170" y2="140" stroke="currentColor" stroke-width="1.5"/><line x1="170" y1="140" x2="60" y2="160" stroke="currentColor" stroke-width="1.5"/><text x="225" y="140" font-size="12" fill="currentColor">nucleus</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "H-alpha wavelength",
        problem: "Balmer $n = 3$ to $2$. Find $\\lambda$.",
        steps: [
          { label: "Step 1: Rydberg", text: "$1/\\lambda = 1.097 \\times 10^{7}(1/4 - 1/9) = 1.097 \\times 10^{7}(0.1389)$." },
          { label: "Step 2: Number", text: "$= 1.523 \\times 10^{6}$ per m; $\\lambda = 656.5$ nm." },
          { label: "Step 3: Color", text: "Red pillar of hydrogen nebulae and stellar classification." }
        ],
        result: "$656.5$ nm H-alpha."
      },
      {
        title: "Lyman limit",
        problem: "Find the series limit $n \\to \\infty$ to $n = 1$.",
        steps: [
          { label: "Step 1: Formula", text: "$1/\\lambda = R(1 - 0) = 1.097 \\times 10^{7}$ per m." },
          { label: "Step 2: Wavelength", text: "$\\lambda = 91.2$ nm, extreme ultraviolet." },
          { label: "Step 3: Energy", text: "$1240/91.2 = 13.6$ eV: hydrogen ionization energy." }
        ],
        result: "$91.2$ nm, $13.6$ eV ionization."
      }
    ],
    keyTakeaways: [
      "Backscatter proves a femtometer nucleus in an angstrom atom.",
      "Sharp Rydberg lines defy classical radiation theory.",
      "Emission and absorption lines are the same transitions reversed."
    ],
    quiz: [
      {
        q: "Rutherford backscattering implies:",
        options: ["Plum pudding atom", "Tiny massive nucleus", "No charge", "Electron nucleus"],
        answer: 1,
        explanation: "Only concentrated charge turns alphas around."
      },
      {
        q: "Balmer series ends on n = 2 from above; H-alpha is:",
        options: ["$3$ to $2$", "$2$ to $1$", "$4$ to $1$", "$1$ to $2$"],
        answer: 0,
        explanation: "First Balmer line drops from 3 to 2 at 656 nm."
      },
      {
        q: "Classical atoms fail because orbiting electrons would:",
        options: ["Radiate and spiral in", "Freeze", "Split", "Become neutral"],
        answer: 0,
        explanation: "Accelerated charge radiates, losing energy continuously."
      }
    ]
  },
  {
    sectionId: "young-ch39-s3",
    readingTime: 8,
    intro: "Bohr froze the collapse by quantizing angular momentum to $L = n\\hbar$, freezing orbits into $r_{n} = n^{2}a_{0}$ and energies $E_{n} = -13.6/n^{2}$ eV. The Rydberg constant drops out of $m_{e}$, $e$, $h$. Spectra become electron jumps; the model then breaks on helium, fine structure, and intensities.",
    objectives: [
      "Derive $r_{n} = n^{2}a_{0}$ and $E_{n} = -13.6/n^{2}$ eV from $L = n\\hbar$",
      "Compute photon wavelengths from $\\Delta E = E_{u} - E_{l}$",
      "List Bohr's successes and failures honestly"
    ],
    concepts: [
      {
        term: "Bohr quantization",
        kind: "law",
        statement: "**$mvr = n\\hbar$** selects stable circular orbits; Coulomb attraction supplies centripetal force.",
        detail: "Equivalently $2\\pi r = n\\lambda_{de Broglie}$: standing electron waves close on themselves."
      },
      {
        term: "Bohr radius",
        kind: "theorem",
        statement: "**$a_{0} = 4\\pi\\epsilon_{0}\\hbar^{2}/m_{e}e^{2} = 0.529$ angstrom**; $r_{n} = n^{2}a_{0}$.",
        detail: "Atomic size from constants alone; $n = 2$ is four times wider."
      },
      {
        term: "Energy levels",
        kind: "theorem",
        statement: "**$E_{n} = -m_{e}e^{4}/[2(4\\pi\\epsilon_{0})^{2}\\hbar^{2}n^{2}] = -13.6/n^{2}$ eV**.",
        detail: "Negative means bound; zero is ionization, positive is free."
      },
      {
        term: "Spectral prediction",
        kind: "theorem",
        statement: "**$1/\\lambda = R(1/n_{l}^{2}-1/n_{u}^{2})$** falls out with $R$ computed, not fitted.",
        detail: "Agreement to $10^{-4}$ for hydrogen crowned the model in 1913."
      },
      {
        term: "Limits",
        kind: "insight",
        statement: "Bohr **fails on helium, intensities, fine structure, and molecules**: quantization was right, orbits were wrong.",
        detail: "Schrodinger keeps $E_{n}$ but replaces tracks with orbitals (Chapters 40-41)."
      }
    ],
    examples: [
      {
        title: "Bohr n = 2 orbit",
        problem: "Find $r_{2}$, $v_{2}$, $E_{2}$ for hydrogen.",
        steps: [
          { label: "Step 1: Radius", text: "$r = 4a_{0} = 2.12$ angstrom." },
          { label: "Step 2: Energy", text: "$E = -13.6/4 = -3.40$ eV." },
          { label: "Step 3: Speed", text: "$v = e^{2}/(4\\pi\\epsilon_{0}\\hbar n) \\times (1/n)$: $v = c/137/2 = 1.09 \\times 10^{6}$ m/s." }
        ],
        result: "$2.12$ angstrom, $-3.40$ eV, $1.09 \\times 10^{6}$ m/s."
      },
      {
        title: "Lyman-alpha from levels",
        problem: "$n = 2$ to $1$ energy and wavelength.",
        steps: [
          { label: "Step 1: Gap", text: "$\\Delta E = -3.40 - (-13.6) = 10.2$ eV." },
          { label: "Step 2: Wavelength", text: "$\\lambda = 1240/10.2 = 121.6$ nm." },
          { label: "Step 3: Check", text: "Matches Rydberg $1/\\lambda = R(1-1/4)$ exactly." }
        ],
        result: "$10.2$ eV, $121.6$ nm ultraviolet."
      }
    ],
    keyTakeaways: [
      "$L = n\\hbar$ gives $r_{n} = n^{2}a_{0}$ and $E_{n} = -13.6/n^{2}$ eV.",
      "Spectra are level jumps with computed $R$.",
      "Standing-wave reading $2\\pi r = n\\lambda$ foreshadows Schrodinger."
    ],
    quiz: [
      {
        q: "Bohr radius $a_{0}$ is about:",
        options: ["$0.529$ nm", "$0.0529$ nm", "$5.29$ nm", "$529$ nm"],
        answer: 1,
        explanation: "$0.529$ angstrom $= 0.0529$ nm."
      },
      {
        q: "$E_{3}$ for hydrogen is:",
        options: ["$-13.6$ eV", "$-3.4$ eV", "$-1.51$ eV", "$-6.8$ eV"],
        answer: 2,
        explanation: "$-13.6/9 = -1.51$ eV."
      },
      {
        q: "Bohr fails on:",
        options: ["Hydrogen lines", "Helium spectra and intensities", "Rydberg value", "Ionization energy"],
        answer: 1,
        explanation: "Multi-electron and fine details need full quantum mechanics."
      },
      {
        q: "Standing-wave form of Bohr's rule is:",
        options: ["$2 pi r = n lambda$", "$r = lambda$", "$v = c$", "$E = mc^{2}$"],
        answer: 0,
        explanation: "De Broglie waves closing in phase select the orbits."
      }
    ]
  },
  {
    sectionId: "young-ch39-s4",
    readingTime: 6,
    intro: "Population inversion plus stimulated emission turns a glowing gas into a coherent avalanche: photons clone themselves into identical twins. An optical cavity recirculates the clones until a beam escapes. Coherence, not raw power, is the laser's revolution.",
    objectives: [
      "Distinguish spontaneous, absorption, and stimulated emission",
      "Define population inversion and why equilibrium forbids it",
      "Explain cavity modes, threshold, and coherence output"
    ],
    concepts: [
      {
        term: "Three processes",
        kind: "definition",
        statement: "**Absorption ($u \\to l$ up), spontaneous ($u \\to l$ random photon), stimulated ($u \\to l$ clone photon)** with Einstein A and B rates.",
        detail: "Stimulated photons match direction, phase, polarization, and energy exactly."
      },
      {
        term: "Population inversion",
        kind: "theorem",
        statement: "**$N_{u} > N_{l}$ needed for net gain**; Boltzmann equilibrium always has $N_{u} < N_{l}$.",
        detail: "Pumping (flash, discharge, diode current) plus metastable upper states sustain the unnatural ratio."
      },
      {
        term: "Three- versus four-level",
        kind: "method",
        statement: "**Four-level lasers empty the lower state fast**, easing inversion; three-level (ruby) must half-drain the ground state.",
        detail: "He-Ne and Nd:YAG are four-level; ruby pulses with difficulty."
      },
      {
        term: "Cavity and threshold",
        kind: "law",
        statement: "**Mirrors recirculate photons; gain must beat loss** (threshold) for oscillation in modes $L = m\\lambda/2$.",
        detail: "Output coupler leaks the useful beam; Q-switching stockpiles then dumps giant pulses."
      },
      {
        term: "Coherence payoff",
        kind: "insight",
        statement: "Lasers deliver **directional, monochromatic, coherent** light: interference, focusing, and surgery follow.",
        detail: "A milliwatt pointer outshines the sun per steradian per hertz."
      }
    ],
    figures: [
      {
        caption: "Laser cavity: inverted medium amplifies between mirrors; output coupler leaks the beam",
        svg: '<svg viewBox="0 0 400 170" style="width:100%;height:auto" role="img" aria-label="Laser cavity: inverted medium amplifies between mirrors; output coupler leaks the beam"><rect x="0" y="0" width="400" height="170" fill="none"/><line x1="60" y1="40" x2="60" y2="130" stroke="currentColor" stroke-width="4"/><line x1="280" y1="40" x2="280" y2="130" stroke="currentColor" stroke-width="4"/><rect x="100" y="60" width="140" height="50" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="1.5"/><text x="130" y="90" font-size="12" fill="currentColor">inverted medium</text><line x1="280" y1="85" x2="370" y2="85" stroke="currentColor" stroke-width="2.5"/><polygon points="370,85 360,80 360,90" fill="currentColor"/><text x="300" y="110" font-size="12" fill="currentColor">output beam</text><line x1="100" y1="85" x2="240" y2="85" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "He-Ne photon rate",
        problem: "$5.00$ mW He-Ne at $633$ nm. How many photons per second?",
        steps: [
          { label: "Step 1: Photon", text: "$E = 1240/633 = 1.959$ eV $= 3.138 \\times 10^{-19}$ J." },
          { label: "Step 2: Rate", text: "$N = 5.00 \\times 10^{-3}/3.138 \\times 10^{-19} = 1.59 \\times 10^{16}$ per s." },
          { label: "Step 3: Clones", text: "Each started spontaneous, the rest are stimulated copies in one mode." }
        ],
        result: "$1.6 \\times 10^{16}$ coherent photons per second."
      },
      {
        title: "Why two levels cannot lase",
        problem: "Show pure two-level pumping stalls at transparency.",
        steps: [
          { label: "Step 1: Rates", text: "Pump drives up; stimulated drives down proportional to photon count." },
          { label: "Step 2: Balance", text: "Best case equalizes $N_{u} = N_{l}$: gain zero, medium transparent." },
          { label: "Step 3: Fix", text: "Third level drains $l$ or shelves $u$ to break symmetry." }
        ],
        result: "Two levels max out at zero gain; three or four lase."
      }
    ],
    keyTakeaways: [
      "Stimulated emission clones photons; inversion makes clones win.",
      "Pumping plus metastables plus cavity reach threshold oscillation.",
      "Output is coherent, directional, narrow-band light."
    ],
    quiz: [
      {
        q: "Stimulated photon versus incident is:",
        options: ["Random direction", "Identical in all properties", "Half energy", "Opposite polarization"],
        answer: 1,
        explanation: "Cloning is the gain mechanism."
      },
      {
        q: "Population inversion means:",
        options: ["More atoms below than above", "More above than below", "Equal populations", "No atoms"],
        answer: 1,
        explanation: "Upper excess gives net stimulated gain over absorption."
      },
      {
        q: "Laser threshold is when:",
        options: ["Gain equals loss", "Pump turns on", "Mirrors are removed", "Gas freezes"],
        answer: 0,
        explanation: "Oscillation starts once round-trip gain beats losses."
      }
    ]
  },
  {
    sectionId: "young-ch39-s5",
    readingTime: 5,
    intro: "Hot matter glows continuously: bremsstrahlung from braking charges and blackbody spectra from thermal equilibrium. Planck's quanta $hf$ tamed the ultraviolet catastrophe that killed classical cavity theory. The bridge from continuous to line spectra is temperature plus density.",
    objectives: [
      "Distinguish line, bremsstrahlung, and blackbody continua",
      "State Wien $\\lambda_{m}T$ and Stefan-Boltzmann $I = \\sigma T^{4}$ laws",
      "Explain why Planck needed $E = nhf$"
    ],
    concepts: [
      {
        term: "Bremsstrahlung continuum",
        kind: "definition",
        statement: "**Free-free braking emission** spans all $\\lambda$ up to $hc/K_{max}$ (Section 38.2 in reverse).",
        detail: "Solar corona and fusion plasmas shine this way in x-rays."
      },
      {
        term: "Blackbody spectrum",
        kind: "law",
        statement: "**Planck $u(\\lambda,T)$** peaks at **$\\lambda_{m}T = 2.90 \\times 10^{-3}$ m-K** (Wien) with total **$\\sigma T^{4}$**.",
        detail: "Sun $5800$ K peaks $500$ nm; humans $310$ K peak $9.4$ microM infrared."
      },
      {
        term: "Ultraviolet catastrophe",
        kind: "insight",
        statement: "Classical equipartition gives **energy $\\propto 1/\\lambda^{4}$ diverging**; quantization cuts high-$f$ modes by $e^{-hf/kT}$.",
        detail: "Planck 1900: oscillators take only $nhf$ steps."
      },
      {
        term: "Line-to-continuum bridge",
        kind: "method",
        statement: "**Dense hot gas broadens lines into bands then continuum** as neighbors perturb levels; thin gas stays sharp.",
        detail: "Stellar interiors glow Planckian; atmospheres etch Fraunhofer lines."
      },
      {
        term: "Color temperature",
        kind: "notation",
        statement: "**Fitting $\\lambda_{m}$ reads $T$** of stars, filaments, and furnaces without contact.",
        detail: "Blue stars exceed $10000$ K; red dwarfs sit near $3000$ K."
      }
    ],
    examples: [
      {
        title: "Sun peak and power",
        problem: "$T = 5800$ K. Find $\\lambda_{m}$ and surface flux.",
        steps: [
          { label: "Step 1: Wien", text: "$\\lambda_{m} = 2.90 \\times 10^{-3}/5800 = 5.00 \\times 10^{-7}$ m $= 500$ nm." },
          { label: "Step 2: Flux", text: "$\\sigma T^{4} = 5.67 \\times 10^{-8}(5800)^{4} = 6.42 \\times 10^{7}$ W/m-squared." },
          { label: "Step 3: Total", text: "Times $4\\pi R^{2}$ gives $3.9 \\times 10^{26}$ W solar luminosity." }
        ],
        result: "$500$ nm peak, $64$ MW/m-squared surface flux."
      },
      {
        title: "Human glow",
        problem: "Skin $T = 310$ K. Where do we peak?",
        steps: [
          { label: "Step 1: Peak", text: "$\\lambda_{m} = 2.90 \\times 10^{-3}/310 = 9.35$ microM." },
          { label: "Step 2: Flux", text: "$\\sigma T^{4} = 524$ W/m-squared, all infrared." },
          { label: "Step 3: Cameras", text: "Night vision reads this $10$-microM band." }
        ],
        result: "$9.4$ microM infrared peak."
      }
    ],
    keyTakeaways: [
      "Hot matter radiates continua: braking plus thermal Planck spectra.",
      "Wien peaks and $\\sigma T^{4}$ totals quantify blackbodies.",
      "Quantized oscillators cure the classical divergence."
    ],
    quiz: [
      {
        q: "Wien peak for T = 3000 K is at:",
        options: ["$966$ nm", "$500$ nm", "$10$ microns", "$300$ nm"],
        answer: 0,
        explanation: "$2.9\\times 10^{-3}/3000 = 9.66\\times 10^{-7}$ m."
      },
      {
        q: "Doubling blackbody T multiplies radiated power by:",
        options: ["$2$", "$4$", "$8$", "$16$"],
        answer: 3,
        explanation: "$T^{4}$ law: $2^{4} = 16$."
      },
      {
        q: "Classical cavity theory failed by predicting:",
        options: ["Zero radiation", "Infinite short-wave energy", "Only lines", "No temperature dependence"],
        answer: 1,
        explanation: "Equipartition diverges as $1/lambda^{4}$ without quanta."
      }
    ]
  },
  {
    sectionId: "young-ch39-s6",
    readingTime: 6,
    intro: "Matter waves obey the same uncertainty that photons met: confining position fans momentum, and short-lived states blur energy. Ground-state atoms carry zero-point motion no cooling can remove. Young revisits $\\Delta x\\,\\Delta p$ and $\\Delta E\\,\\Delta t$ with electrons and nuclei as the actors.",
    objectives: [
      "Apply $\\Delta x\\,\\Delta p \\ge \\hbar/2$ to confined particles",
      "Apply $\\Delta E\\,\\Delta t \\ge \\hbar/2$ to lifetimes and linewidths",
      "Explain zero-point energy as confinement cost"
    ],
    concepts: [
      {
        term: "Position-momentum again",
        kind: "theorem",
        statement: "**$\\Delta x\\,\\Delta p \\ge \\hbar/2$** for every particle; squeezing $\\Delta x$ raises kinetic spread.",
        detail: "Nucleus-confined protons ($10^{-14}$ m) carry MeV-scale zero-point motion."
      },
      {
        term: "Energy-time",
        kind: "theorem",
        statement: "**$\\Delta E\\,\\Delta t \\ge \\hbar/2$**: lifetime $\\tau$ broadens levels by $\\sim \\hbar/\\tau$.",
        detail: "$10^{-8}$ s states span neV; $10^{-22}$ s resonances span MeV."
      },
      {
        term: "Zero-point energy",
        kind: "law",
        statement: "**Confinement forbids rest**: minimum $K \\sim \\hbar^{2}/(8m\\Delta x^{2})$ for width $\\Delta x$.",
        detail: "Hydrogen's $15$ eV scale and helium's refusal to freeze both follow."
      },
      {
        term: "Single-slit electrons",
        kind: "method",
        statement: "Electrons through width $a$ diffract to **$\\lambda/a$**, the uncertainty fan made visible.",
        detail: "Same envelope as photons with $\\lambda = h/p$ inserted."
      },
      {
        term: "Stability from uncertainty",
        kind: "insight",
        statement: "**Atoms hold their size** because squeezing raises $p^{2}/2m$ faster than Coulomb deepens: minimum near $a_{0}$.",
        detail: "Chapter 40 makes this variational; here orders suffice."
      }
    ],
    figures: [
      {
        caption: "Confinement costs momentum: squeezing $\\Delta x$ fans $\\Delta p$ with $\\Delta x\\,\\Delta p \\ge \\hbar/2$",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="Confinement costs momentum: squeezing Delta x fans Delta p with Delta x,Delta p ge hbar/2"><rect x="0" y="0" width="400" height="190" fill="none"/><rect x="150" y="40" width="40" height="110" fill="none" stroke="currentColor" stroke-width="2"/><text x="140" y="170" font-size="12" fill="currentColor">narrow Dx</text><path d="M 190 95 C 240 95, 260 40, 320 40 M 190 95 C 240 95, 260 150, 320 150" fill="none" stroke="currentColor" stroke-width="2"/><text x="300" y="40" font-size="12" fill="currentColor">wide Dp fan</text><text x="300" y="160" font-size="12" fill="currentColor">wide Dp fan</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Proton in a nucleus",
        problem: "Proton confined to $\\Delta x = 10$ fm. Estimate minimum kinetic.",
        steps: [
          { label: "Step 1: Momentum", text: "$\\Delta p \\approx \\hbar/(2\\Delta x) = 1.055 \\times 10^{-34}/(2 \\times 10^{-14}) = 5.3 \\times 10^{-21}$ kg-m/s." },
          { label: "Step 2: Energy", text: "$K \\approx (\\Delta p)^{2}/2m = (2.8 \\times 10^{-41})/(3.34 \\times 10^{-27}) = 8.3 \\times 10^{-15}$ J." },
          { label: "Step 3: MeV", text: "$= 52$ keV order; tighter $1$ fm gives MeV scale." }
        ],
        result: "Tens of keV at $10$ fm, MeV at femtometers."
      },
      {
        title: "Short-lived resonance",
        problem: "Delta baryon lifetime $6 \\times 10^{-24}$ s. Estimate width.",
        steps: [
          { label: "Step 1: Bound", text: "$\\Delta E \\approx \\hbar/(2\\tau) = 1.055 \\times 10^{-34}/(1.2 \\times 10^{-23}) = 8.8 \\times 10^{-12}$ J." },
          { label: "Step 2: MeV", text: "$= 55$ MeV (full width $\\sim 110$ MeV by conventions)." },
          { label: "Step 3: Data", text: "Measured $117$ MeV: lifetime-width duality confirmed." }
        ],
        result: "$\\sim 10^{2}$ MeV broad resonance."
      }
    ],
    keyTakeaways: [
      "Confinement levies momentum spread; brevity levies energy width.",
      "Zero-point motion is mandatory, never removable.",
      "Uncertainty sets atomic size and nuclear energy scales."
    ],
    quiz: [
      {
        q: "Halving Delta x:",
        options: ["Halves Delta p minimum", "Doubles Delta p minimum", "No change", "Zeros energy"],
        answer: 1,
        explanation: "Product bounded below forces inverse scaling."
      },
      {
        q: "Shorter lifetime means linewidth:",
        options: ["Narrower", "Broader", "Unchanged", "Zero"],
        answer: 1,
        explanation: "$\\Delta E \\ge hbar/2\\tau$ grows as tau shrinks."
      },
      {
        q: "Zero-point energy exists because:",
        options: ["Heat remains", "Confinement plus uncertainty forbid zero momentum", "Electrons spin", "Nuclei vibrate thermally"],
        answer: 1,
        explanation: "Delta-x bound forces Delta-p spread even at 0 K."
      }
    ]
  }
];
