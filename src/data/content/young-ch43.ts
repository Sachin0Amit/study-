import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 43: Nuclear Physics.

export const youngCh43Content: SectionContent[] = [
  {
    sectionId: "young-ch43-s1",
    readingTime: 6,
    intro: "Nuclei pack $Z$ protons and $N$ neutrons into femtometers with density $10^{17}$ kg/m-cubed, like atoms shrunk $10^{5}$ times. Radii follow $R = R_{0}A^{1/3}$ with $R_{0} = 1.2$ fm. Isotopes, spins, and magnetic moments label $3000+$ known nuclides on the chart.",
    objectives: [
      "Write $(Z,N,A)$ notation with isotopes, isotones, isobars",
      "Apply $R = R_{0}A^{1/3}$ and nuclear density",
      "State nuclear spin and magnetic-moment systematics"
    ],
    concepts: [
      {
        term: "Nuclide notation",
        kind: "notation",
        statement: "**$^{A}_{Z}X_{N}$** with $A = Z+N$: isotopes share $Z$, isotones $N$, isobars $A$.",
        detail: "C-12, C-14 are isotopes; C-14 and N-14 are isobars."
      },
      {
        term: "Nuclear radius",
        kind: "law",
        statement: "**$R = (1.2 \\mathrm{fm})\\,A^{1/3}$** from electron and muon scattering: volumes scale with $A$.",
        detail: "U-238 spans $7.4$ fm; proton $0.84$ fm."
      },
      {
        term: "Saturation density",
        kind: "theorem",
        statement: "**$\\rho \\approx 2.3 \\times 10^{17}$ kg/m-cubed** for all nuclei: short-range force saturates like a liquid drop.",
        detail: "A teaspoon of nuclear matter weighs billions of tons."
      },
      {
        term: "Spin and moments",
        kind: "definition",
        statement: "**Even-even: $0^{+}$ ground; odd-$A$: half-integer**; moments in nuclear magnetons $\\mu_{N} = e\\hbar/2m_{p}$.",
        detail: "Proton $2.79\\mu_{N}$, neutron $-1.91\\mu_{N}$: structure beyond points."
      },
      {
        term: "Chart of nuclides",
        kind: "method",
        statement: "**$N$ versus $Z$ map** with stable valley, drip lines, and $288$ stable isotopes total.",
        detail: "Young's valley-of-stability logic (Section 43.3) reads off this chart."
      }
    ],
    examples: [
      {
        title: "Lead radius and density",
        problem: "Pb-208. Find $R$ and mean density.",
        steps: [
          { label: "Step 1: Radius", text: "$R = 1.2(208)^{1/3} = 1.2 \\times 5.925 = 7.11$ fm." },
          { label: "Step 2: Volume", text: "$4\\pi R^{3}/3 = 1.506 \\times 10^{-42}$ m-cubed." },
          { label: "Step 3: Density", text: "$208(1.661 \\times 10^{-27})/1.506 \\times 10^{-42} = 2.29 \\times 10^{17}$ kg/m-cubed." }
        ],
        result: "$R = 7.1$ fm, $\\rho = 2.3 \\times 10^{17}$ kg/m-cubed."
      },
      {
        title: "Isotope bookkeeping",
        problem: "U-235 versus U-238: give $Z$, $N$ each.",
        steps: [
          { label: "Step 1: Z", text: "Uranium $Z = 92$ both." },
          { label: "Step 2: N", text: "$143$ versus $146$ neutrons." },
          { label: "Step 3: Consequence", text: "Odd-$N$ 235 fissions thermal; even-even 238 does not." }
        ],
        result: "Same $Z$, three neutrons decide reactor physics."
      }
    ],
    keyTakeaways: [
      "$A = Z+N$ with $R = 1.2A^{1/3}$ fm and universal density.",
      "Isotopes share chemistry; neutrons decide stability.",
      "Spins and moments fingerprint shell structure."
    ],
    quiz: [
      {
        q: "Fe-56 has neutrons numbering:",
        options: ["$26$", "$30$", "$56$", "$82$"],
        answer: 1,
        explanation: "$56-26 = 30$."
      },
      {
        q: "Nuclear radius scales as:",
        options: ["$A$", "$A^{1/3}$", "$A^{2}$", "$Z$"],
        answer: 1,
        explanation: "Constant density means volume proportional to A."
      },
      {
        q: "Even-even ground-state spin-parity is:",
        options: ["$1/2+$", "$0+$", "$1-$", "$2-$"],
        answer: 1,
        explanation: "Paired nucleons cancel to zero plus parity."
      }
    ]
  },
  {
    sectionId: "young-ch43-s2",
    readingTime: 7,
    intro: "Masses fall short of their parts: $E_{b} = \\Delta m\\,c^{2}$ binds, peaking at $8.8$ MeV per nucleon near iron. The semi-empirical mass formula prices volume, surface, Coulomb, asymmetry, and pairing. Shell magic numbers $2,8,20,28,50,82,126$ add extra grip.",
    objectives: [
      "Compute $E_{b}$ and $E_{b}/A$ from mass tables with $931.5$ MeV/u",
      "Explain the binding curve peak at iron",
      "State SEMF terms and magic numbers"
    ],
    concepts: [
      {
        term: "Mass defect",
        kind: "law",
        statement: "**$E_{b} = [Zm_{H} + Nm_{n} - M_{atom}]c^{2}$** (atomic masses include electrons that cancel).",
        detail: "He-4: $28.3$ MeV; Fe-56: $492$ MeV; U-235: $1784$ MeV."
      },
      {
        term: "Binding curve",
        kind: "theorem",
        statement: "**$E_{b}/A$ peaks $8.8$ MeV at $A \\approx 56$**, falling both sides: fusion climbs left, fission drops right.",
        detail: "Energy flows toward iron from either direction."
      },
      {
        term: "SEMF",
        kind: "theorem",
        statement: "**$E_{b} = a_{V}A - a_{S}A^{2/3} - a_{C}Z^{2}/A^{1/3} - a_{A}(N-Z)^{2}/A + \\delta$** with $a_{V} \\approx 15.8$, $a_{S} \\approx 18.3$, $a_{C} \\approx 0.714$, $a_{A} \\approx 23.2$ MeV.",
        detail: "Volume binds, surface/Coulomb/asymmetry tax, pairing tips even-even."
      },
      {
        term: "Magic numbers",
        kind: "law",
        statement: "**$2,8,20,28,50,82,126$ fill shells** (spin-orbit split oscillator); doubly magic He-4, O-16, Ca-40, Pb-208 stand out.",
        detail: "Shell gaps add MeV beyond liquid-drop smooth trends."
      },
      {
        term: "Drip lines",
        kind: "insight",
        statement: "**Separation energy zero marks the drip**: extra nucleons fall off unbound past the edge.",
        detail: "r-process climbs to the neutron drip and waits."
      }
    ],
    figures: [
      {
        caption: "Binding energy per nucleon $E_{b}/A$ versus $A$: peak $8.8$ MeV near iron drives fusion and fission",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Binding energy per nucleon E_b/A versus A: peak 8.8 MeV near iron drives fusion and fission"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="40" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="170" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/><path d="M 45 120 C 90 70, 130 45, 180 40 C 230 36, 290 60, 360 90" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="180" cy="40" r="4" fill="currentColor"/><text x="185" y="35" font-size="12" fill="currentColor">Fe-56: 8.8 MeV</text><text x="60" y="140" font-size="12" fill="currentColor">fusion climbs</text><text x="270" y="120" font-size="12" fill="currentColor">fission drops</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "He-4 binding",
        problem: "He-4 atom $4.002603$ u; $m_{H} = 1.007825$, $m_{n} = 1.008665$ u. Find $E_{b}$.",
        steps: [
          { label: "Step 1: Parts", text: "$2(1.007825) + 2(1.008665) = 4.032980$ u." },
          { label: "Step 2: Defect", text: "$0.030377$ u $\\times 931.5 = 28.30$ MeV; per nucleon $7.07$ MeV." },
          { label: "Step 3: Note", text: "Tight for its size: doubly magic plus no Coulomb tax." }
        ],
        result: "$28.3$ MeV, $7.07$ MeV per nucleon."
      },
      {
        title: "Fe-56 peak check",
        problem: "Fe-56 atom $55.934937$ u. Find $E_{b}/A$.",
        steps: [
          { label: "Step 1: Parts", text: "$26(1.007825) + 30(1.008665) = 56.463400$ u." },
          { label: "Step 2: Defect", text: "$0.528463$ u $= 492.3$ MeV; per nucleon $8.79$ MeV." },
          { label: "Step 3: Crown", text: "Highest per-nucleon: fusion ash, fission target." }
        ],
        result: "$8.79$ MeV per nucleon maximum."
      }
    ],
    keyTakeaways: [
      "$E_{b} = \\Delta m\\,c^{2}$ with $931.5$ MeV/u prices every nucleus.",
      "Iron peaks; fusion and fission both fall toward it.",
      "Liquid drop plus shells explain masses to MeV."
    ],
    quiz: [
      {
        q: "1 u equals:",
        options: ["$1$ eV", "$931.5$ MeV", "$13.6$ eV", "$0.511$ MeV"],
        answer: 1,
        explanation: "Atomic mass unit energy equivalent."
      },
      {
        q: "$E_{b}/A$ peaks at:",
        options: ["$He-4$", "$Fe-56$", "$U-235$", "$H-1$"],
        answer: 1,
        explanation: "Coulomb versus surface balance maximizes near iron."
      },
      {
        q: "Magic numbers come from:",
        options: ["Liquid drop only", "Shell closures", "Coulomb only", "Pairing only"],
        answer: 1,
        explanation: "Spin-orbit split oscillator gaps."
      }
    ]
  },
  {
    sectionId: "young-ch43-s3",
    readingTime: 6,
    intro: "Proton-rich nuclei beta-plus or capture electrons; neutron-rich beta-minus; heavy nuclei alpha-decay; excited states gamma-ray. The valley of stability threads $N \\approx Z$ light, $N/Z \\approx 1.5$ heavy. Young maps each decay to its place on the chart.",
    objectives: [
      "Place alpha, beta-minus, beta-plus/EC, gamma on the nuclide chart",
      "Write decay equations with $Q$-values and selection logic",
      "Explain valley drift with $N/Z$"
    ],
    concepts: [
      {
        term: "Alpha decay",
        kind: "law",
        statement: "**$^{A}_{Z}X \\to ^{A-4}_{Z-2}Y + \\alpha$**, heavy $A > 150$, $Q$ shared as $E_{\\alpha} = Q(A-4)/A$.",
        detail: "U-238 to Th-234 plus $4.27$ MeV alpha."
      },
      {
        term: "Beta-minus",
        kind: "law",
        statement: "**$n \\to p + e^{-} + \\bar{\\nu}_{e}$** in neutron-rich nuclei; $A$ fixed, $Z$ rises one.",
        detail: "C-14 to N-14 ($156$ keV endpoint shared withantineutrino)."
      },
      {
        term: "Beta-plus and capture",
        kind: "law",
        statement: "**$p \\to n + e^{+} + \\nu_{e}$** needs $1.022$ MeV plus gap; **EC** competes by swallowing $K$ electrons with x-ray aftermath.",
        detail: "F-18 PET isotope beta-pluses to O-18."
      },
      {
        term: "Gamma decay",
        kind: "definition",
        statement: "**Excited states shed $10$ keV-$10$ MeV photons** ($\\Delta A = \\Delta Z = 0$) with multipole selection rules.",
        detail: "Co-60 $1.17$/$1.33$ MeV lines calibrate detectors."
      },
      {
        term: "Valley logic",
        kind: "insight",
        statement: "**Coulomb pushes stability neutron-rich** as $Z$ grows; odd-odd nuclei nearly all unstable (only $4$ survive).",
        detail: "Decays step toward the valley floor, one charge at a time."
      }
    ],
    examples: [
      {
        title: "Po-212 alpha energy split",
        problem: "Po-212 to Pb-208 $Q = 8.95$ MeV. Find alpha kinetic.",
        steps: [
          { label: "Step 1: Recoil share", text: "$E_{\\alpha} = Q(A-4)/A = 8.95(208/212) = 8.78$ MeV." },
          { label: "Step 2: Lead recoil", text: "$0.17$ MeV to Pb-208." },
          { label: "Step 3: Line", text: "Monoenergetic alphas fingerprint the isotope." }
        ],
        result: "$8.78$ MeV alpha, $0.17$ MeV recoil."
      },
      {
        title: "K-40 branches",
        problem: "K-40 beta-minuses ($89$ percent) or captures ($11$ percent). Explain.",
        steps: [
          { label: "Step 1: Odd-odd", text: "Unstable both ways toward Ca-40 and Ar-40 valleys." },
          { label: "Step 2: Q", text: "Beta $1.31$ MeV; EC $1.51$ MeV with $1.46$ MeV gamma signature." },
          { label: "Step 3: Dating", text: "Ar-40 accumulation dates rocks billions of years." }
        ],
        result: "Two valleys, two branches, one clock."
      }
    ],
    keyTakeaways: [
      "Alpha sheds $2p2n$ heavy; betas step $Z$ at fixed $A$; gammas cool levels.",
      "Neutrinos share beta energy: spectra are continuous.",
      "Decays walk the chart toward the valley floor."
    ],
    quiz: [
      {
        q: "Neutron-rich nuclei decay by:",
        options: ["Alpha", "Beta-minus", "Beta-plus", "Proton emission"],
        answer: 1,
        explanation: "Neutron converts to proton, raising Z toward stability."
      },
      {
        q: "Alpha decay changes:",
        options: ["A-4, Z-2", "A same, Z+1", "Nothing", "A-1 only"],
        answer: 0,
        explanation: "Helium nucleus carries 2p2n away."
      },
      {
        q: "Beta spectra are continuous because:",
        options: ["Detector noise", "Three-body sharing with neutrino", "Heat", "Background"],
        answer: 1,
        explanation: "Electron-neutrino split varies event to event."
      }
    ]
  },
  {
    sectionId: "young-ch43-s4",
    readingTime: 7,
    intro: "Unstable counts fall as $N = N_{0}e^{-\\lambda t}$ with half-life $t_{1/2} = \\ln 2/\\lambda$ and activity $A = \\lambda N$ in becquerels. Carbon-14 clocks millennia, uranium-lead clocks eons. Counting statistics plus chemistry blanks set every date's error bar.",
    objectives: [
      "Apply $N(t)$, $A(t)$ with $t_{1/2} = 0.693/\\lambda$",
      "Convert Bq, Ci with $1$ Ci $= 3.70 \\times 10^{10}$ Bq",
      "Date samples with C-14 and U-Pb ratios"
    ],
    concepts: [
      {
        term: "Decay law",
        kind: "law",
        statement: "**$N = N_{0}e^{-\\lambda t}$**, **$A = \\lambda N$**; each nucleus decays randomly with constant odds.",
        detail: "Memoryless Poisson process; sums stay exponential."
      },
      {
        term: "Half-life",
        kind: "definition",
        statement: "**$t_{1/2} = \\ln 2/\\lambda = 0.693\\tau$**; tenths remain after $\\sim 3.3$ half-lives.",
        detail: "C-14 $5730$ yr; U-238 $4.47$ Gyr; I-131 $8.02$ d."
      },
      {
        term: "Activity units",
        kind: "notation",
        statement: "**$1$ Bq $= 1$ decay/s; $1$ Ci $= 3.70 \\times 10^{10}$ Bq** (gram of Ra-226 legacy).",
        detail: "Specific activity $= \\lambda N_{A}/M$ prices mass per curie."
      },
      {
        term: "Carbon dating",
        kind: "method",
        statement: "**$^{14}$C/$^{12}$C $= 1.2 \\times 10^{-12}$ live**; dead samples decay from production ratio $R_{0}$.",
        detail: "Bomb carbon and Suess fossil dilution calibrate $R_{0}(t)$."
      },
      {
        term: "Geologic clocks",
        kind: "method",
        statement: "**U-Pb concordia, K-Ar, Rb-Sr** cross-check eons; closed-system chemistry is the assumption to test.",
        detail: "Meteorites date $4.55$ Gyr by Pb-Pb isochrons."
      }
    ],
    figures: [
      {
        caption: "Exponential decay $N = N_{0}e^{-\lambda t}$ with half-life $t_{1/2} = 0.693/\lambda$",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="Exponential decay N = N_0e^-\lambda t with half-life t_1/2 = 0.693/\lambda"><rect x="0" y="0" width="400" height="190" fill="none"/><line x1="50" y1="160" x2="370" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="160" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/><path d="M 50 40 C 120 45, 160 80, 200 105 C 250 135, 300 150, 370 155" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="125" y1="160" x2="125" y2="62" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/><line x1="200" y1="160" x2="200" y2="105" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/><text x="110" y="178" font-size="12" fill="currentColor">t1/2</text><text x="185" y="178" font-size="12" fill="currentColor">2 t1/2</text><text x="60" y="35" font-size="12" fill="currentColor">N0</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "I-131 hospital dose",
        problem: "$10.0$ mCi I-131 ($t_{1/2} = 8.02$ d). Activity after $24.0$ d?",
        steps: [
          { label: "Step 1: Halvings", text: "$24.0/8.02 = 2.993 \\approx 3$ half-lives." },
          { label: "Step 2: Remain", text: "$(1/2)^{2.993} = 0.1255$: $1.26$ mCi." },
          { label: "Step 3: Bq", text: "$= 4.64 \\times 10^{7}$ Bq." }
        ],
        result: "$1.26$ mCi remain after $24$ days."
      },
      {
        title: "Charcoal date",
        problem: "Sample $^{14}$C ratio $0.600$ of modern. Find age.",
        steps: [
          { label: "Step 1: Law", text: "$t = -(t_{1/2}/\\ln 2)\\ln R = -(5730/0.6931)\\ln 0.600$." },
          { label: "Step 2: Number", text: "$= 8267 \\times 0.5108 = 4223$ yr." },
          { label: "Step 3: Calibrate", text: "Tree rings adjust $\\pm 200$ yr in this range." }
        ],
        result: "$4.2$ kyr radiocarbon age."
      }
    ],
    keyTakeaways: [
      "Exponential $e^{-\\lambda t}$ with $t_{1/2} = 0.693/\\lambda$ rules counts and activity.",
      "Becquerels count decays; curies scale them historically.",
      "Ratios date; calibration and closure decide accuracy."
    ],
    quiz: [
      {
        q: "After 3 half-lives remain:",
        options: ["$1/3$", "$1/8$", "$1/4$", "$1/2$"],
        answer: 1,
        explanation: "$(1/2)^{3} = 1/8$."
      },
      {
        q: "1 Ci equals Bq:",
        options: ["$1$", "$3.7e10$", "$1e6$", "$3.7e4$"],
        answer: 1,
        explanation: "Historical radium-gram definition."
      },
      {
        q: "C-14 ratio half of modern means age about:",
        options: ["$5730$ yr", "$11460$ yr", "$2865$ yr", "$17190$ yr"],
        answer: 0,
        explanation: "One half-life elapsed."
      },
      {
        q: "Activity A equals:",
        options: ["$lambda / N$", "$lambda N$", "$N / lambda$", "$N^{2}$"],
        answer: 1,
        explanation: "Decay constant times present nuclei."
      }
    ]
  },
  {
    sectionId: "young-ch43-s5",
    readingTime: 5,
    intro: "Grays measure deposited joules, sieverts weight damage by radiation type: $E = QD$ with $Q$ up to $20$ for alphas. Natural background gives $3$ mSv yearly; limits cap workers at $50$ mSv. Time, distance, and shielding cut dose predictably.",
    objectives: [
      "Distinguish exposure, absorbed dose (Gy), equivalent dose (Sv)",
      "Apply $E = QD$ with quality factors",
      "Explain ALARA with time-distance-shielding"
    ],
    concepts: [
      {
        term: "Absorbed dose",
        kind: "definition",
        statement: "**$1$ Gy $= 1$ J/kg deposited** in tissue; indifferent to radiation kind.",
        detail: "$5$ Gy whole-body is typically lethal without care."
      },
      {
        term: "Equivalent dose",
        kind: "theorem",
        statement: "**$H = QD$ in sieverts**: $Q = 1$ (beta, gamma, x), $20$ (alpha), $2$-$10$ (neutrons by energy).",
        detail: "Alpha outside is stopped by skin; inside it dominates risk."
      },
      {
        term: "Background budget",
        kind: "law",
        statement: "**$\\sim 3$ mSv/yr natural** (radon half): cosmic, terrestrial, internal K-40.",
        detail: "CT scans add $7$ mSv each; smoking adds Po-210 alpha."
      },
      {
        term: "ALARA",
        kind: "method",
        statement: "**As Low As Reasonably Achievable**: minimize time, maximize distance ($1/r^{2}$), shield appropriately.",
        detail: "Paper stops alpha, plastic beta, lead/earth gamma-neutron mixes."
      },
      {
        term: "Acute versus chronic",
        kind: "insight",
        statement: "**Rate matters**: $1$ Sv acute sickens; $1$ Sv over decades shows subtler statistics (LNT debated).",
        detail: "Therapy fractionates $60$ Gy to tumors while sparing tissue."
      }
    ],
    examples: [
      {
        title: "Equivalent of an alpha dose",
        problem: "Lung deposit $2.0$ mGy alpha. Find equivalent dose.",
        steps: [
          { label: "Step 1: Q", text: "$Q = 20$ for alpha." },
          { label: "Step 2: H", text: "$H = 20 \\times 2.0 = 40$ mSv to lung tissue." },
          { label: "Step 3: Context", text: "Yearly limit $50$ mSv workers: one such intake nears the cap." }
        ],
        result: "$40$ mSv equivalent from $2$ mGy alpha."
      },
      {
        title: "Distance saves",
        problem: "Source reads $100$ microSv/hr at $1$ m. At $5$ m?",
        steps: [
          { label: "Step 1: Inverse square", text: "$100/25 = 4.0$ microSv/hr." },
          { label: "Step 2: Time", text: "Hour there equals $2.4$ min at $1$ m." },
          { label: "Step 3: Shield", text: "Lead halves-value layers cut further exponentially." }
        ],
        result: "$4.0$ microSv/hr at $5$ m."
      }
    ],
    keyTakeaways: [
      "Grays count energy; sieverts count harm via $Q$.",
      "Background is $3$ mSv/yr; worker cap $50$ mSv/yr.",
      "Time, distance, shielding implement ALARA."
    ],
    quiz: [
      {
        q: "1 Gy equals:",
        options: ["$1$ J/kg", "$1$ eV", "$1$ Ci", "$1$ Bq"],
        answer: 0,
        explanation: "Absorbed energy per mass definition."
      },
      {
        q: "Q for alpha is:",
        options: ["$1$", "$20$", "$0.1$", "$1000$"],
        answer: 1,
        explanation: "Dense ionization weights heavily."
      },
      {
        q: "Best gamma shield among choices:",
        options: ["Paper", "Lead/earth thickness", "Plastic glove", "Air gap cm"],
        answer: 1,
        explanation: "High-Z, dense mass attenuates photons exponentially."
      }
    ]
  },
  {
    sectionId: "young-ch43-s6",
    readingTime: 6,
    intro: "Reactions balance $Q = (M_{in} - M_{out})c^{2}$: positive $Q$ pays out, negative $Q$ charges threshold admission. Cross sections in barns price probability; Coulomb barriers gate stellar rates. Every transmutation is bookkeeping plus tunneling.",
    objectives: [
      "Compute $Q$-values from masses and interpret sign",
      "State threshold $E_{th} = -Q(1 + m/M)$ for fixed targets",
      "Define cross section $\\sigma$ in barns"
    ],
    concepts: [
      {
        term: "Q-value",
        kind: "law",
        statement: "**$Q = (M_{initial} - M_{final})c^{2}$**: $Q > 0$ exoergic releases; $Q < 0$ endoergic needs input.",
        detail: "d-t fusion $Q = 17.6$ MeV; C-12(p,d) needs threshold."
      },
      {
        term: "Threshold energy",
        kind: "theorem",
        statement: "Fixed target wastes momentum: **$E_{th} = -Q(1 + m_{proj}/M_{targ})$** for $Q < 0$.",
        detail: "Collider head-on collisions avoid most of this tax."
      },
      {
        term: "Cross section",
        kind: "definition",
        statement: "**$\\sigma$ in barns ($10^{-28}$ m-squared)** is effective area; rate $= \\phi\\sigma N$.",
        detail: "U-235 thermal fission $585$ b; fast $1$ b: moderation matters $500$-fold."
      },
      {
        term: "Coulomb barrier",
        kind: "insight",
        statement: "**Charged partners tunnel Gamow exponents**; neutrons stroll in barrier-free.",
        detail: "Stellar rates fold Maxwell tails against tunneling rise (Gamow peak)."
      },
      {
        term: "Compound versus direct",
        kind: "method",
        statement: "**Compound nuclei forget formation** (Bohr) and evaporate statistically; direct knocks out in one pass.",
        detail: "Resonances spike $\\sigma$ at compound levels."
      }
    ],
    examples: [
      {
        title: "d-t Q-value",
        problem: "d ($2.014102$ u) + t ($3.016049$ u) to alpha ($4.002603$ u) + n ($1.008665$ u). Find $Q$.",
        steps: [
          { label: "Step 1: Masses", text: "In $5.030151$; out $5.011268$; $\\Delta = 0.018883$ u." },
          { label: "Step 2: MeV", text: "$\\times 931.5 = 17.59$ MeV." },
          { label: "Step 3: Split", text: "Alpha $3.5$ MeV, neutron $14.1$ MeV by momentum ratio." }
        ],
        result: "$Q = 17.6$ MeV fusion payout."
      },
      {
        title: "Threshold estimate",
        problem: "Reaction $Q = -5.0$ MeV, protons on C-12. Find lab threshold.",
        steps: [
          { label: "Step 1: Factor", text: "$1 + 1/12 = 1.0833$." },
          { label: "Step 2: Energy", text: "$E_{th} = 5.0 \\times 1.0833 = 5.42$ MeV." },
          { label: "Step 3: Meaning", text: "$0.42$ MeV feeds recoil, not structure." }
        ],
        result: "$5.42$ MeV lab threshold."
      }
    ],
    keyTakeaways: [
      "$Q$ signs every reaction's energetics from masses.",
      "Thresholds tax fixed-target inputs by recoil.",
      "Barns times flux times targets give rates."
    ],
    quiz: [
      {
        q: "Q > 0 means reaction is:",
        options: ["Endoergic", "Exoergic, releases energy", "Forbidden", "Elastic only"],
        answer: 1,
        explanation: "Mass loss converts to kinetic plus gamma."
      },
      {
        q: "1 barn is:",
        options: ["$10^{-28}$ m-squared", "$10^{-10}$ m", "$1$ m-squared", "$10^{-15}$ m"],
        answer: 0,
        explanation: "Nuclear area unit from uranium size idiom."
      },
      {
        q: "Threshold exceeds -Q because:",
        options: ["Electrons absorb", "Momentum conservation diverts to recoil", "Photons escape", "Charge is lost"],
        answer: 1,
        explanation: "Center-of-mass motion cannot convert to internal energy."
      }
    ]
  },
  {
    sectionId: "young-ch43-s7",
    readingTime: 7,
    intro: "U-235 split by a thermal neutron pays $200$ MeV and frees $2$-$3$ neutrons: $k = 1$ sustains, $> 1$ diverges. Moderators slow neutrons to barns-scale cross sections; control rods and delayed neutrons make $k$ steerable. Enrichment, geometry, and poisons decide reactor versus bomb.",
    objectives: [
      "Write fission energetics $\\sim 200$ MeV per U-235",
      "Define $k$, criticality, and four-factor essentials",
      "Explain moderator, control, delayed-neutron roles"
    ],
    concepts: [
      {
        term: "Fission payout",
        kind: "theorem",
        statement: "**$\\sim 200$ MeV per U-235**: $170$ fragments, $5$ neutrons/gammas, $10$ neutrinos/betas, $10$ gammas promptly.",
        detail: "One gram daily powers a megawatt: $10^{6}$ times chemistry."
      },
      {
        term: "Multiplication k",
        kind: "definition",
        statement: "**$k = 1$ critical (steady), $< 1$ sub, $> 1$ super**; reactivity $\\rho = (k-1)/k$.",
        detail: "Four-factor $k = \\eta f p\\epsilon$ tracks fission, thermal-use, resonance-escape, fast-fission."
      },
      {
        term: "Moderation",
        kind: "method",
        statement: "**Light nuclei thermalize neutrons** (H, D, C) to $0.025$ eV where U-235 $\\sigma = 585$ b.",
        detail: "PWR water both moderates and cools; Chernobyl graphite tipped positive-void."
      },
      {
        term: "Control and poisons",
        kind: "method",
        statement: "**B/Cd rods plus Xe-135 poison absorb**; boron shim tunes burnup over months.",
        detail: "Worths measured in dollars relative to delayed fraction."
      },
      {
        term: "Delayed neutrons",
        kind: "insight",
        statement: "**$0.65$ percent late neutrons** ($\\beta = 0.0065$) stretch response to seconds, making humans fast enough.",
        detail: "Prompt-only reactors would diverge in milliseconds; delays save operation."
      }
    ],
    figures: [
      {
        caption: "Fission chain: one neutron splits U-235, releasing $\\sim 200$ MeV and $2$-$3$ neutrons; $k = 1$ sustains",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Fission chain: one neutron splits U-235, releasing sim 200 MeV and 2-3 neutrons; k = 1 sustains"><rect x="0" y="0" width="400" height="200" fill="none"/><circle cx="80" cy="100" r="14" fill="none" stroke="currentColor" stroke-width="2"/><text x="68" y="104" font-size="10" fill="currentColor">U235</text><circle cx="200" cy="100" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="280" cy="60" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="280" cy="140" r="10" fill="none" stroke="currentColor" stroke-width="2"/><line x1="94" y1="100" x2="190" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="190,100 180,95 180,105" fill="currentColor"/><line x1="210" y1="100" x2="270" y2="65" stroke="currentColor" stroke-width="1.5"/><line x1="210" y1="100" x2="270" y2="135" stroke="currentColor" stroke-width="1.5"/><text x="230" y="180" font-size="12" fill="currentColor">~200 MeV + 2-3 neutrons per split</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Grams per megawatt-day",
        problem: "How much U-235 burns per MW-day ($200$ MeV each)?",
        steps: [
          { label: "Step 1: Energy", text: "$10^{6} \\times 86400 = 8.64 \\times 10^{10}$ J." },
          { label: "Step 2: Fissions", text: "$200$ MeV $= 3.204 \\times 10^{-11}$ J; count $2.697 \\times 10^{21}$." },
          { label: "Step 3: Mass", text: "$\\times 235$ u $= 1.05$ g per MW-day thermal." }
        ],
        result: "$1.05$ g U-235 per MW-day."
      },
      {
        title: "Critical mass feel",
        problem: "Bare U-235 sphere critical $48$ kg ($17$ cm). Why do reactors use tons dilute?",
        steps: [
          { label: "Step 1: Leakage", text: "Small bare metal leaks neutrons; $k$ needs $48$ kg compact." },
          { label: "Step 2: Dilution", text: "Low-enriched, moderated lattices trade mass for $k$ via $585$-b cross sections." },
          { label: "Step 3: Bombs", text: "Weapons compress supercritical fast assemblies; reactors stay thermal and dilute." }
        ],
        result: "Geometry plus moderation decide bomb versus plant."
      }
    ],
    keyTakeaways: [
      "$200$ MeV per fission, a gram per MW-day.",
      "$k = 1$ with moderator, rods, poisons steering it.",
      "Delayed $0.65$ percent makes control humanly possible."
    ],
    quiz: [
      {
        q: "U-235 fission releases about:",
        options: ["$2$ eV", "$200$ MeV", "$200$ GeV", "$2$ keV"],
        answer: 1,
        explanation: "Coulomb repulsion of fragments dominates the payout."
      },
      {
        q: "Moderator role is to:",
        options: ["Absorb neutrons", "Slow neutrons to high-cross-section thermal", "Cool fuel only", "Enrich uranium"],
        answer: 1,
        explanation: "Thermal sigma exceeds fast by hundreds of barns."
      },
      {
        q: "Delayed neutrons matter because they:",
        options: ["Add power", "Slow response to controllable seconds", "Poison the core", "Start fires"],
        answer: 1,
        explanation: "Beta-decay precursors meter out late neutrons."
      }
    ]
  },
  {
    sectionId: "young-ch43-s8",
    readingTime: 7,
    intro: "Light nuclei pay mass toward iron: d-t yields $17.6$ MeV, the solar pp chain $26.7$ MeV per helium. Coulomb walls demand $10^{7}$ K plus tunneling; Lawson $n\\tau T$ gates reactors. Magnetic tokamaks and inertial pellets chase the triple product from complementary sides.",
    objectives: [
      "Write d-t, d-d, pp-chain energetics",
      "State Lawson $n\\tau_{E}T$ thresholds for d-t",
      "Compare tokamak versus inertial confinement"
    ],
    concepts: [
      {
        term: "Fusion payouts",
        kind: "theorem",
        statement: "**d-t $17.6$ MeV; d-d $3.27$/$4.03$ MeV branches; $4p \\to$ He $26.7$ MeV** (neutrinos take $0.52$).",
        detail: "Per mass fusion outpays fission $4$-fold."
      },
      {
        term: "Coulomb barrier",
        kind: "insight",
        statement: "**MeV walls versus keV plasmas**: only Gamow tails fuse; rate $\\propto e^{-\\sqrt{E_{G}/E}}$ times Maxwell.",
        detail: "Sun's core $1.5$ keV burns via $10^{-9}$-tail protons."
      },
      {
        term: "Lawson criterion",
        kind: "law",
        statement: "**$n\\tau_{E}T > 3 \\times 10^{21}$ keV-s/m-cubed** (d-t breakeven); ignition about triple that.",
        detail: "NIF 2022 passed scientific breakeven ($Q \\approx 1.5$) on $n\\tau$ via compression."
      },
      {
        term: "Magnetic confinement",
        kind: "method",
        statement: "**Tokamaks cage $10^{8}$ K plasma magnetically** ($q$, beta limits); ITER targets $Q = 10$.",
        detail: "Steady $n \\sim 10^{20}$, seconds $\\tau$: triple-product path."
      },
      {
        term: "Inertial confinement",
        kind: "method",
        statement: "**Lasers crush pellets to $10^{32}$ m$^{-3}$ for $10^{-10}$ s**: opposite corner, same product.",
        detail: "Alpha self-heating must outrun disassembly."
      }
    ],
    examples: [
      {
        title: "Sunshine rate",
        problem: "Sun outputs $3.85 \\times 10^{26}$ W via $26.7$ MeV per He. How many kg/s fuse?",
        steps: [
          { label: "Step 1: Per-He J", text: "$26.7$ MeV $= 4.28 \\times 10^{-12}$ J." },
          { label: "Step 2: Rate", text: "$3.85 \\times 10^{26}/4.28 \\times 10^{-12} = 9.0 \\times 10^{37}$ He/s." },
          { label: "Step 3: Mass", text: "Burn $600$ Mton H/s, net $4$ Mton/s lost to energy." }
        ],
        result: "$6 \\times 10^{11}$ kg/s hydrogen burned."
      },
      {
        title: "d-t neutron share",
        problem: "d-t $17.6$ MeV: split between alpha and neutron?",
        steps: [
          { label: "Step 1: Momentum", text: "$E \\propto 1/m$: neutron takes $4/5$, alpha $1/5$." },
          { label: "Step 2: Numbers", text: "$14.1$ MeV neutron, $3.5$ MeV alpha." },
          { label: "Step 3: Blanket", text: "Lithium blankets catch $14$ MeV neutrons to breed tritium plus heat." }
        ],
        result: "Neutron $14.1$ MeV, alpha $3.5$ MeV."
      }
    ],
    keyTakeaways: [
      "Fusion pays toward iron: $17.6$ d-t, $26.7$ solar MeV.",
      "Tunneling plus heat beat Coulomb; Lawson prices success.",
      "Tokamaks hold long, pellets squeeze dense."
    ],
    quiz: [
      {
        q: "d-t fusion Q is:",
        options: ["$17.6$ MeV", "$200$ MeV", "$2.2$ MeV", "$0.5$ MeV"],
        answer: 0,
        explanation: "Mass difference of d+t versus alpha+n."
      },
      {
        q: "Sun's net pp-chain payout per He is:",
        options: ["$17.6$ MeV", "$26.7$ MeV", "$200$ MeV", "$1.02$ MeV"],
        answer: 1,
        explanation: "Four protons to helium minus neutrino losses."
      },
      {
        q: "Lawson triple product multiplies:",
        options: ["$n tau T$", "$mass alone$", "$volume alone$", "$charge$"],
        answer: 0,
        explanation: "Density, confinement time, temperature jointly gate ignition."
      }
    ]
  }
];
