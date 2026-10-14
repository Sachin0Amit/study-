import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 38: Photons.

export const youngCh38Content: SectionContent[] = [
  {
    sectionId: "young-ch38-s1",
    readingTime: 7,
    intro: "Electrons escape metals the instant blue light strikes, yet red light of any brightness frees none. Einstein resolved the paradox with photons: each electron swallows one quantum $hf$, spending $\\phi$ to escape. Stopping-potential plots then measure $h$ and work functions directly.",
    objectives: [
      "State Einstein's $K_{max} = hf - \\phi$ and define work function",
      "Explain cutoff frequency, instant emission, and intensity independence",
      "Extract $h$ and $\\phi$ from stopping-potential data"
    ],
    concepts: [
      {
        term: "Photon energy",
        kind: "definition",
        statement: "Each light quantum carries **$E = hf = hc/\\lambda$**; $1240$ eV-nm converts wavelength to energy.",
        detail: "Green $550$ nm is $2.25$ eV; x-rays are keV; gamma rays MeV."
      },
      {
        term: "Photoelectric equation",
        kind: "law",
        statement: "**$K_{max} = hf - \\phi$**: kinetic maximum equals photon energy minus escape cost $\\phi$.",
        detail: "Millikan verified the linear $V_{0}$-versus-$f$ slope $h/e$ to $0.5$ percent."
      },
      {
        term: "Cutoff frequency",
        kind: "theorem",
        statement: "Emission needs **$f \\ge f_{0} = \\phi/h$**; below cutoff no intensity or duration helps.",
        detail: "Cesium $\\phi = 2.14$ eV cuts at $518$ nm; zinc $4.3$ eV needs ultraviolet."
      },
      {
        term: "Stopping potential",
        kind: "method",
        statement: "**$eV_{0} = K_{max}$** stops even the fastest electrons; $V_{0}$-versus-$f$ slope gives $h/e$.",
        detail: "Intercept $-\\phi/e$ reads the work function electrically."
      },
      {
        term: "Wave failure",
        kind: "insight",
        statement: "Waves predict **delayed, intensity-driven, color-blind** emission; experiment shows **instant, photon-driven, cutoff** behavior.",
        detail: "Dim blue works at once; bright red never works: particles, not soaking."
      }
    ],
    figures: [
      {
        caption: "Photoelectric effect: $K_{max} = hf - \\phi$ with cutoff $f_{0} = \\phi/h$ and slope $h/e$",
        svg: '<svg viewBox="0 0 400 210" style="width:100%;height:auto" role="img" aria-label="Photoelectric effect: K_max = hf - phi with cutoff f_0 = phi/h and slope h/e"><rect x="0" y="0" width="400" height="210" fill="none"/><line x1="60" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="170" x2="60" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="130" y1="170" x2="340" y2="40" stroke="currentColor" stroke-width="2.5"/><circle cx="130" cy="170" r="4" fill="currentColor"/><text x="120" y="190" font-size="12" fill="currentColor">f0</text><text x="20" y="100" font-size="12" fill="currentColor">V0</text><text x="230" y="180" font-size="12" fill="currentColor">f</text><text x="250" y="80" font-size="12" fill="currentColor">slope = h/e</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Potassium under violet light",
        problem: "Potassium $\\phi = 2.30$ eV illuminated at $\\lambda = 400$ nm. Find $K_{max}$ and $V_{0}$.",
        steps: [
          { label: "Step 1: Photon", text: "$E = 1240/400 = 3.10$ eV." },
          { label: "Step 2: Kinetic", text: "$K_{max} = 3.10 - 2.30 = 0.80$ eV." },
          { label: "Step 3: Stopping", text: "$V_{0} = 0.80$ V; red $700$ nm ($1.77$ eV) emits nothing." }
        ],
        result: "$K_{max} = 0.80$ eV, $V_{0} = 0.80$ V."
      },
      {
        title: "Measuring h",
        problem: "Stopping data: $V_{0} = 1.00$ V at $5.00 \\times 10^{14}$ Hz; $V_{0} = 2.65$ V at $9.00 \\times 10^{14}$ Hz. Find $h$.",
        steps: [
          { label: "Step 1: Slope", text: "$\\Delta V/\\Delta f = 1.65/(4.00 \\times 10^{14}) = 4.125 \\times 10^{-15}$ V-s." },
          { label: "Step 2: h", text: "$h = e \\times$ slope $= 4.125 \\times 10^{-15}$ eV-s $= 6.61 \\times 10^{-34}$ J-s." },
          { label: "Step 3: Work function", text: "$\\phi = hf - eV_{0} = 4.125(5.00 \\times 10^{14})$ eV $- 1.00 = 2.06 - 1.00 = 1.06$ eV." }
        ],
        result: "$h = 6.61 \\times 10^{-34}$ J-s; $\\phi = 1.06$ eV."
      }
    ],
    keyTakeaways: [
      "$K_{max} = hf - \\phi$ with hard cutoff $f_{0} = \\phi/h$.",
      "Brightness sets electron count, never electron energy.",
      "Stopping-potential slope measures $h/e$."
    ],
    quiz: [
      {
        q: "Doubling intensity of above-cutoff light:",
        options: ["Doubles $K_{max}$", "Doubles electron count, $K_{max}$ unchanged", "Halves cutoff", "Stops emission"],
        answer: 1,
        explanation: "More photons means more electrons, each still $hf - phi$."
      },
      {
        q: "phi = 2.0 eV. Cutoff wavelength is:",
        options: ["$620$ nm", "$1240$ nm", "$310$ nm", "$200$ nm"],
        answer: 0,
        explanation: "$1240/2.0 = 620$ nm."
      },
      {
        q: "$V_{0}$ versus f slope equals:",
        options: ["$e/h$", "$h/e$", "$phi$", "$c$"],
        answer: 1,
        explanation: "$eV_{0} = hf - phi$ gives slope $h/e$."
      }
    ]
  },
  {
    sectionId: "young-ch38-s2",
    readingTime: 6,
    intro: "Electrons slammed into metal radiate x-rays up to a sharp short-wavelength limit where one electron spends everything on one photon. The Duane-Hunt law $\\lambda_{min} = hc/eV$ turns accelerating voltage into a ruler for $h$. Characteristic lines then fingerprint the target element.",
    objectives: [
      "State the Duane-Hunt limit $\\lambda_{min} = hc/eV$",
      "Distinguish bremsstrahlung continuum from characteristic lines",
      "Explain K-alpha origin in inner-shell transitions"
    ],
    concepts: [
      {
        term: "Bremsstrahlung",
        kind: "definition",
        statement: "**Braking radiation**: decelerating electrons emit a continuum from zero up to $eV$.",
        detail: "Nuclei yank passing electrons; each photon takes a random fraction of the energy."
      },
      {
        term: "Duane-Hunt limit",
        kind: "law",
        statement: "**$\\lambda_{min} = hc/eV = 1240/V$ nm** (V in volts): one electron, one photon, everything converted.",
        detail: "$100$ kV tube cuts at $12.4$ pm; cutoff slope independently measures $h$."
      },
      {
        term: "Characteristic lines",
        kind: "definition",
        statement: "**K, L shells refill after knock-out**, emitting element-specific x-rays (K-alpha: L to K).",
        detail: "Copper K-alpha $0.154$ nm; spectra identify composition in XRF analyzers."
      },
      {
        term: "Moseley preview",
        kind: "insight",
        statement: "Line frequency scales as **$(Z-\\sigma)^{2}$**, ordering elements by atomic number (Chapter 41).",
        detail: "Moseley sorted the periodic table by physics, not chemistry."
      },
      {
        term: "Tube engineering",
        kind: "method",
        statement: "Hot cathode, kilovolt anode, **rotating tungsten target plus filtration** shape clinic-ready spectra.",
        detail: "Heat, not physics, limits brightness; spinning anodes spread the load."
      }
    ],
    figures: [
      {
        caption: "X-ray tube spectrum: bremsstrahlung continuum to $\lambda_{min} = hc/eV$ plus $K_{\alpha}$ lines",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="X-ray tube spectrum: bremsstrahlung continuum to \lambda_min = hc/eV plus K_\alpha lines"><rect x="0" y="0" width="400" height="190" fill="none"/><line x1="50" y1="150" x2="370" y2="150" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="150" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/><path d="M 90 150 C 140 150, 180 100, 260 90 C 300 86, 320 86, 330 86" fill="none" stroke="currentColor" stroke-width="2"/><line x1="200" y1="60" x2="200" y2="150" stroke="currentColor" stroke-width="2"/><line x1="250" y1="90" x2="250" y2="150" stroke="currentColor" stroke-width="2"/><text x="190" y="45" font-size="12" fill="currentColor">K lines</text><text x="300" y="70" font-size="12" fill="currentColor">cutoff</text><text x="180" y="170" font-size="12" fill="currentColor">lambda (short to long)</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Dental tube cutoff",
        problem: "$70.0$ kV dental tube. Find $\\lambda_{min}$ and max photon energy.",
        steps: [
          { label: "Step 1: Energy", text: "$E_{max} = 70.0$ keV directly." },
          { label: "Step 2: Wavelength", text: "$\\lambda_{min} = 1240/70000 = 0.0177$ nm $= 17.7$ pm." },
          { label: "Step 3: Lines", text: "Tungsten K lines near $59$ keV ride atop the continuum." }
        ],
        result: "$70$ keV max, $17.7$ pm cutoff."
      },
      {
        title: "h from cutoff",
        problem: "Cutoff $24.8$ pm at $50.0$ kV. Find $h$.",
        steps: [
          { label: "Step 1: Energy", text: "$E = eV = 50.0$ keV $= 8.011 \\times 10^{-15}$ J." },
          { label: "Step 2: Frequency", text: "$f = c/\\lambda = 3.00 \\times 10^{8}/(2.48 \\times 10^{-11}) = 1.210 \\times 10^{19}$ Hz." },
          { label: "Step 3: h", text: "$h = E/f = 6.62 \\times 10^{-34}$ J-s." }
        ],
        result: "$h = 6.62 \\times 10^{-34}$ J-s from the cutoff."
      }
    ],
    keyTakeaways: [
      "Continuum bremsstrahlung ends at $\\lambda_{min} = hc/eV$.",
      "Sharp lines are inner-shell refills fingerprinting $Z$.",
      "Cutoff slope is a second measurement of $h$."
    ],
    quiz: [
      {
        q: "100 kV tube $\\lambda_{min}$ is:",
        options: ["$12.4$ pm", "$124$ pm", "$1.24$ nm", "$0.124$ pm"],
        answer: 0,
        explanation: "$1240/10^{5} = 0.0124$ nm $= 12.4$ pm."
      },
      {
        q: "K-alpha x-rays come from:",
        options: ["Bremsstrahlung", "L-to-K electron refill", "Nuclear decay", "Pair production"],
        answer: 1,
        explanation: "Outer electron drops into a K vacancy, emitting Z-specific energy."
      },
      {
        q: "Raising tube voltage:",
        options: ["Only brightens lines", "Shortens $\\lambda_{min}$ and hardens spectrum", "Lowers photon energy", "Removes continuum"],
        answer: 1,
        explanation: "Higher eV extends and hardens the continuum; lines stay fixed."
      }
    ]
  },
  {
    sectionId: "young-ch38-s3",
    readingTime: 7,
    intro: "X-rays bounce off electrons lengthened by $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$: Compton proved photons carry momentum $p = h/\\lambda$. Above $1.022$ MeV a photon can even become matter-antimatter pairs. Scattering and creation complete the particle ledger of light.",
    objectives: [
      "Apply the Compton shift $\\Delta\\lambda = \\lambda_{C}(1-\\cos\\phi)$",
      "Compute photon momentum $p = E/c = h/\\lambda$",
      "State the pair-production threshold $2m_{e}c^{2} = 1.022$ MeV"
    ],
    concepts: [
      {
        term: "Photon momentum",
        kind: "law",
        statement: "**$p = h/\\lambda = E/c$**; collisions conserve $E$ and $p$ with this assignment.",
        detail: "$1$ eV photon: $5.34 \\times 10^{-28}$ kg-m/s; tiny per photon, macroscopic in beams."
      },
      {
        term: "Compton shift",
        kind: "theorem",
        statement: "**$\\Delta\\lambda = (h/m_{e}c)(1-\\cos\\phi)$** with $\\lambda_{C} = 2.426$ pm, independent of incident $\\lambda$.",
        detail: "$90^{\\circ}$ adds exactly one Compton wavelength; backscatter adds two."
      },
      {
        term: "Why bound electrons differ",
        kind: "insight",
        statement: "Tightly bound electrons recoil **with the whole atom** ($M \\gg m_{e}$), giving unshifted coherent lines beside Compton-shifted ones.",
        detail: "Graphite data show both peaks; shift grows with free-electron character."
      },
      {
        term: "Pair production",
        kind: "law",
        statement: "Near a nucleus, **$\\gamma \\to e^{+} + e^{-}$ needs $E \\ge 2m_{e}c^{2} = 1.022$ MeV**; excess becomes kinetic.",
        detail: "Nucleus absorbs momentum while taking negligible energy; annihilation reverses the process."
      },
      {
        term: "Compton versus photoelectric",
        kind: "method",
        statement: "**Low $E$: absorption dominates; mid $E$: Compton scatters; high $E$: pairs win**, the attenuation trilogy of shielding design.",
        detail: "Lead aprons, Compton cameras, and pair telescopes each exploit one regime."
      }
    ],
    examples: [
      {
        title: "Compton at 90 degrees",
        problem: "$71.1$ pm Mo K-alpha scatters at $90^{\\circ}$. Find shift and scattered energy.",
        steps: [
          { label: "Step 1: Shift", text: "$\\Delta\\lambda = 2.426$ pm; $\\lambda^{\\prime} = 73.5$ pm." },
          { label: "Step 2: Energies", text: "$E = 1240/0.0711$ nm $= 17.44$ keV; $E^{\\prime} = 1240/0.0735 = 16.87$ keV." },
          { label: "Step 3: Electron", text: "Recoil $0.57$ keV to the electron at the complementary angle." }
        ],
        result: "Shift $2.43$ pm; photon keeps $16.9$ keV."
      },
      {
        title: "Pair threshold",
        problem: "Can a $0.800$ MeV photon pair-produce? A $2.00$ MeV one?",
        steps: [
          { label: "Step 1: Rule", text: "Need $1.022$ MeV minimum near a nucleus." },
          { label: "Step 2: Verdicts", text: "$0.800$ MeV: no; $2.00$ MeV: yes with $0.978$ MeV shared kinetic." },
          { label: "Step 3: Reverse", text: "Positron annihilation at rest returns two $0.511$ MeV gammas." }
        ],
        result: "Only the $2.00$ MeV photon qualifies."
      }
    ],
    keyTakeaways: [
      "Compton shift $\\lambda_{C}(1-\\cos\\phi)$ proves $p = h/\\lambda$.",
      "Bound atoms add unshifted lines; free electrons shift fully.",
      "Pair production needs $1.022$ MeV plus a nucleus for momentum."
    ],
    quiz: [
      {
        q: "Compton shift at 180 degrees is:",
        options: ["Zero", "$2 lambda_C$", "$lambda_C/2$", "Incident lambda"],
        answer: 1,
        explanation: "$1-cos 180 = 2$, so $4.85$ pm."
      },
      {
        q: "Photon momentum for E = 6 keV is:",
        options: ["$6$ keV/c", "$6$ eV/c", "$36$ keV/c", "Zero"],
        answer: 0,
        explanation: "$p = E/c$ directly."
      },
      {
        q: "Pair production requires:",
        options: ["Any visible photon", "At least 1.022 MeV near a nucleus", "An electron target only", "Zero energy"],
        answer: 1,
        explanation: "Rest mass of two electrons plus momentum-conserving partner."
      }
    ]
  },
  {
    sectionId: "young-ch38-s4",
    readingTime: 7,
    intro: "Light is both wave and particle: propagation interferes, exchange quantizes. Born reads $|\\psi|^{2}$ as probability, and Heisenberg $\\Delta x\\,\\Delta p \\ge \\hbar/2$ prices which-path knowledge in fringe visibility. Young closes photons with the interpretation rules quantum mechanics will formalize.",
    objectives: [
      "State wave-particle duality operationally for propagation versus exchange",
      "Interpret $|\\psi|^{2}$ as probability density",
      "Apply $\\Delta x\\,\\Delta p \\ge \\hbar/2$ to photon localization"
    ],
    concepts: [
      {
        term: "Operational duality",
        kind: "insight",
        statement: "**Travel like waves, trade like particles**: interference en route, $hf$ packets at detectors.",
        detail: "Single photons self-interfere through both slits yet click at one grain."
      },
      {
        term: "Born probability",
        kind: "law",
        statement: "**Probability density $\\propto |E|^{2}$** (photons) generalizes to **$|\\psi|^{2}$** (matter); fringes are histograms of many clicks.",
        detail: "Dim double slit builds the cosine pattern one indivisible photon at a time."
      },
      {
        term: "Uncertainty principle",
        kind: "theorem",
        statement: "**$\\Delta x\\,\\Delta p \\ge \\hbar/2$** (also $\\Delta E\\,\\Delta t \\ge \\hbar/2$): sharp position costs momentum spread.",
        detail: "Narrowing a slit to pin $x$ fans $p$ into wider diffraction."
      },
      {
        term: "Which-path tradeoff",
        kind: "theorem",
        statement: "**Fringe visibility plus path knowledge obey $V^{2} + D^{2} \\le 1$**; perfect paths erase fringes.",
        detail: "Polarization-tagged photons demonstrate the continuous trade."
      },
      {
        term: "No hidden trajectory",
        kind: "insight",
        statement: "**No classical path reproduces quantum statistics** without nonlocality; Bell tests retire local hidden variables.",
        detail: "Chapter 41 meets entanglement; here the double slit already forbids naive trajectories."
      }
    ],
    figures: [
      {
        caption: "Buildup of fringes one photon at a time: clicks are particles, the histogram is a wave",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="Buildup of fringes one photon at a time: clicks are particles, the histogram is a wave"><rect x="0" y="0" width="400" height="190" fill="none"/><line x1="40" y1="150" x2="360" y2="150" stroke="currentColor" stroke-width="1.5"/><circle cx="90" cy="130" r="3" fill="currentColor"/><circle cx="140" cy="140" r="3" fill="currentColor"/><circle cx="180" cy="100" r="3" fill="currentColor"/><circle cx="200" cy="80" r="3" fill="currentColor"/><circle cx="220" cy="100" r="3" fill="currentColor"/><circle cx="260" cy="140" r="3" fill="currentColor"/><circle cx="310" cy="130" r="3" fill="currentColor"/><path d="M 60 150 C 120 150, 150 60, 200 60 C 250 60, 280 150, 340 150" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><text x="120" y="40" font-size="12" fill="currentColor">few clicks: random; many: cosine histogram</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Slit versus spread",
        problem: "Photons $\\lambda = 500$ nm cross a $10$ microM slit. Estimate transverse momentum spread.",
        steps: [
          { label: "Step 1: Uncertainty", text: "$\\Delta x = 10$ microM; $\\Delta p \\ge \\hbar/(2\\Delta x) = 1.055 \\times 10^{-34}/(2 \\times 10^{-5}) = 5.3 \\times 10^{-30}$ kg-m/s." },
          { label: "Step 2: Compare", text: "$p = h/\\lambda = 1.33 \\times 10^{-27}$ kg-m/s; ratio $0.0040$ rad." },
          { label: "Step 3: Diffraction", text: "Single-slit half width $\\lambda/a = 0.050$ rad envelopes the uncertainty bound; order agrees." }
        ],
        result: "$\\Delta p \\ge 5.3 \\times 10^{-30}$ kg-m/s, consistent with diffraction fan."
      },
      {
        title: "Energy-time for emission",
        problem: "Atomic level lifetime $10$ ns. Estimate photon linewidth.",
        steps: [
          { label: "Step 1: Bound", text: "$\\Delta E \\ge \\hbar/(2\\Delta t) = 1.055 \\times 10^{-34}/(2 \\times 10^{-8}) = 5.3 \\times 10^{-27}$ J." },
          { label: "Step 2: eV", text: "$3.3 \\times 10^{-8}$ eV natural width." },
          { label: "Step 3: Fractional", text: "At $2$ eV this is $10^{-8}$: lasers narrow toward this floor." }
        ],
        result: "$33$ neV natural linewidth."
      }
    ],
    keyTakeaways: [
      "Interference is wave travel; clicks are particle exchange.",
      "$|amplitude|^{2}$ is detection probability built click by click.",
      "Uncertainty and visibility-distinguishability price path knowledge."
    ],
    quiz: [
      {
        q: "Single photons through a double slit:",
        options: ["Split in half", "Click whole, accumulate fringes", "Avoid dark zones classically", "Need pairs"],
        answer: 1,
        explanation: "Indivisible clicks histogram into the wave pattern."
      },
      {
        q: "Narrowing a slit:",
        options: ["Sharpens both x and p", "Sharpens x, spreads p", "Spreads both", "No effect"],
        answer: 1,
        explanation: "Uncertainty trades position for momentum width."
      },
      {
        q: "V-squared plus D-squared is bounded by:",
        options: ["Zero", "One", "Two", "Infinity"],
        answer: 1,
        explanation: "Visibility-distinguishability duality caps their sum."
      },
      {
        q: "Born rule says intensity maps to:",
        options: ["Photon size", "Detection probability", "Photon speed", "Charge"],
        answer: 1,
        explanation: "Fringes are probability histograms."
      }
    ]
  }
];
