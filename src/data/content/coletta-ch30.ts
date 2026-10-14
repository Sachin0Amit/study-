import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 30: Nuclear Physics and Elementary Particles (Sections 30.1 – 30.5)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh30Content: SectionContent[] = [
  {
    sectionId: "coletta-ch30-s1",
    readingTime: 6,
    intro: "Nuclei pack $99.97$ percent of atomic mass into $10^{-14}$ m: protons and neutrons bound by the strong force against Coulomb repulsion. Coletta introduces $A$, $Z$, $N$, radii $r = r_{0}A^{1/3}$, and binding energy per nucleon. The curve of binding energy rules the chapter.",
    objectives: [
      "Label nuclides $^{A}_{Z}X$ with $A = Z + N$ and isotope meaning",
      "Estimate radii with $r = r_{0}A^{1/3}$ and densities",
      "Read binding energy per nucleon and locate the iron peak"
    ],
    concepts: [
      {
        term: "Nuclide notation",
        kind: "notation",
        statement: "Nuclei write $^{A}_{Z}X_{N}$: **$Z$** protons set the element, **$N$** neutrons the isotope, **$A = Z + N$** the nucleon count.",
        detail: "Carbon-14 ($^{14}_{6}$C) has $6$ protons and $8$ neutrons versus $6$ and $6$ in carbon-12."
      },
      {
        term: "Nuclear size",
        kind: "theorem",
        statement: "Radii follow $r = r_{0}A^{1/3}$ with $r_{0} = 1.2$ fm, so volume scales with $A$ and density is universal ($\\sim2.3 \\times 10^{17}$ kg/m$^{3}$).",
        detail: "Lead-208 spans about $7.1$ fm while helium-4 spans $1.9$ fm."
      },
      {
        term: "Strong force",
        kind: "definition",
        statement: "The short-range **strong** force ($\u007e1$ fm) binds nucleons, overpowering Coulomb repulsion inside but vanishing outside.",
        detail: "Its saturation (each nucleon touches few neighbors) makes binding scale with $A$, like liquid-drop cohesion."
      },
      {
        term: "Binding energy",
        kind: "definition",
        statement: "**Binding energy** $B = \\Delta m\\,c^{2}$ is the missing mass between parts and whole, averaging $\u007e8$ MeV per nucleon with an iron-56 peak.",
        detail: "Helium-4 binds $28.3$ MeV total ($7.07$ per nucleon); iron-56 binds $492$ MeV ($8.79$ each)."
      },
      {
        term: "Binding curve meaning",
        kind: "insight",
        statement: "Fusing light nuclei **up** toward iron and splitting heavy nuclei **down** toward iron both release energy, licensing fusion and fission.",
        detail: "The peak at $A \\approx 56$–$62$ is why stars stop at iron and reactors split uranium." }
    ],
    figures: [
      {
        caption: "Binding energy per nucleon peaks near iron $A \\approx 56$, licensing fusion below and fission above",
        svg: '<svg role="img" aria-label="Binding energy per nucleon peaks near iron A approx 56, licensing fusion below and fission above" viewBox="0 0 400 150" width="100%" height="150"><line x1="40" y1="15" x2="40" y2="130" stroke="currentColor" stroke-width="1"/><line x1="40" y1="130" x2="380" y2="130" stroke="currentColor" stroke-width="1"/><path d="M45,110 C90,60 130,45 190,42 C250,40 300,60 370,85" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="190" cy="42" r="4" fill="currentColor"/><text x="190" y="30" text-anchor="middle" font-size="11" fill="currentColor">Fe-56 peak</text><text x="90" y="143" font-size="11" fill="currentColor">fusion →</text><text x="300" y="143" font-size="11" fill="currentColor">← fission</text></svg>',
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "Lead radius",
        problem: "Estimate the radius of $^{208}$Pb with $r_{0} = 1.2$ fm.",
        steps: [
          { label: "Cube root", text: "$208^{1/3} \\approx 5.925$ (since $5.9^{3} \\approx 205$)." },
          { label: "Radius", text: "$r = 1.2 \\times 5.925 \\approx 7.11$ fm." },
          { label: "Scale", text: "Thousands of times smaller than the $10^{-10}$ m atom." }
        ],
        result: "About $7.1$ fm."
      },
      {
        title: "Helium binding",
        problem: "Two protons ($1.00728$ u each) plus two neutrons ($1.00867$ u each) make helium-4 ($4.00260$ u). Find $B$.",
        steps: [
          { label: "Parts", text: "$2 \\times 1.00728 + 2 \\times 1.00867 = 4.03190$ u." },
          { label: "Defect", text: "$\\Delta m = 4.03190 - 4.00260 = 0.02930$ u." },
          { label: "Energy", text: "$B = 0.02930 \\times 931.5 \\approx 27.3$ MeV (plus electron-mass bookkeeping to $28.3$)." }
        ],
        result: "About $28$ MeV total."
      }
    ],
    keyTakeaways: [
      "$A = Z + N$ with isotopes differing in $N$ only.",
      "Radii grow as $A^{1/3}$ at universal nuclear density.",
      "Binding per nucleon peaks at iron, driving fusion and fission."
    ],
    quiz: [
      {
        q: "$^{14}_{6}$C contains:",
        options: ["$8$ protons and $6$ neutrons", "$14$ electrons", "$14$ protons", "$6$ protons and $8$ neutrons"],
        answer: 3,
        explanation: "$Z = 6$ fixes protons; $N = A - Z = 8$ neutrons."
      },
      {
        q: "Nuclear density across the table is roughly:",
        options: ["Zero", "Proportional to $A$", "Constant", "Proportional to $Z$"],
        answer: 2,
        explanation: "Volume scales with $A$ since $r^{3} \\propto A$, canceling nucleon count."
      },
      {
        q: "Energy comes from fusion when fusing:",
        options: ["Iron into lead", "Hydrogen toward iron", "Anything to anything", "Electrons only"],
        answer: 1,
        explanation: "Climbing the binding curve toward the iron peak releases the difference."
      }
    ]
  },
  {
    sectionId: "coletta-ch30-s2",
    readingTime: 7,
    intro: "Unstable nuclei decay by alpha, beta, and gamma emission with clockwork half-lives. Coletta writes $N = N_{0}(1/2)^{t/T}$, explains each mode's bookkeeping, and dates artifacts with carbon-14. Random atoms, exact statistics.",
    objectives: [
      "Distinguish alpha, beta, and gamma decay by emitted particle and shifts",
      "Apply $N = N_{0}e^{-\\lambda t}$ with $\\lambda = \\ln 2/T$ to samples",
      "Explain radiometric dating with carbon-14 and uranium-lead"
    ],
    concepts: [
      {
        term: "Alpha decay",
        kind: "definition",
        statement: "**Alpha** decay ejects $^{4}_{2}$He: $A$ falls by $4$, $Z$ by $2$ (e.g. $^{238}$U $\\to$ $^{234}$Th $+$ $\\alpha$).",
        detail: "Heavy nuclei shed alphas by tunneling through the Coulomb barrier, dropping MeV per shot."
      },
      {
        term: "Beta decay",
        kind: "definition",
        statement: "**Beta-minus** converts $n \\to p + e^{-} + \\bar{\\nu}_{e}$ ($Z$ up by $1$, $A$ unchanged); beta-plus and capture mirror it.",
        detail: "Carbon-14 becomes nitrogen-14 by beta-minus with a $5730$-year half-life."
      },
      {
        term: "Gamma decay",
        kind: "definition",
        statement: "**Gamma** emission radiates excited-nucleus photons with no $A$ or $Z$ change, often following alpha or beta steps.",
        detail: "Cobalt-60's $1.17$/$1.33$ MeV gammas sterilize food and treat tumors."
      },
      {
        term: "Half-life law",
        kind: "law",
        statement: "Survivors follow $N = N_{0}(1/2)^{t/T} = N_{0}e^{-\\lambda t}$ with $\\lambda = \\ln 2/T$ and activity $A = \\lambda N$ in becquerels.",
        detail: "One gram of tritium ($T = 12.3$ yr) starts near $3.6 \\times 10^{14}$ Bq."
      },
      {
        term: "Radiometric dating",
        kind: "method",
        statement: "Comparing parent-to-daughter ratios against known $T$ dates the sample: $t = (T/\\ln 2)\\ln(1 + D/P)$ for one-to-one chains.",
        detail: "Carbon-14 ($5730$ yr) dates charcoal to $50{,}000$ years; U-Pb ($4.5$ Gyr) dates rocks to Earth's age." }
    ],
    figures: [
      {
        caption: "Decay curve $N = N_{0}(1/2)^{t/T}$: half remains per half-life $T$",
        svg: '<svg role="img" aria-label="Decay curve N = N_0(1/2)^t/T: half remains per half-life T" viewBox="0 0 400 150" width="100%" height="150"><line x1="40" y1="10" x2="40" y2="130" stroke="currentColor" stroke-width="1"/><line x1="40" y1="130" x2="380" y2="130" stroke="currentColor" stroke-width="1"/><path d="M40,30 C110,32 130,75 200,78 C270,81 290,108 360,110" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="200" y1="78" x2="200" y2="130" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.6"/><text x="200" y="143" text-anchor="middle" font-size="11" fill="currentColor">T</text><text x="120" y="60" font-size="11" fill="currentColor">N0/2 per T</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Iodine-131 remainder",
        problem: "A $12$ microgram $^{131}$I sample ($T = 8.02$ days) waits $24$ days. How much remains?",
        steps: [
          { label: "Half-lives", text: "$24/8.02 \\approx 2.993 \\approx 3$." },
          { label: "Remainder", text: "$12 \\times (1/2)^{2.993} = 12 \\times 0.1255 \\approx 1.506$ microgram." },
          { label: "Note", text: "Three half-lives leave one eighth, the clinical dosing rule." }
        ],
        result: "About $1.5$ microgram."
      },
      {
        title: "Charcoal dating",
        problem: "Charcoal holds $0.25$ of modern carbon-14 activity ($T = 5730$ yr). Find its age.",
        steps: [
          { label: "Half-lives", text: "$0.25 = (1/2)^{2}$, so $2$ half-lives elapsed." },
          { label: "Age", text: "$t = 2 \\times 5730 = 11{,}460$ yr." },
          { label: "Formula check", text: "$t = (5730/\\ln 2)\\ln 4 = 8267 \\times 1.386 \\approx 11{,}460$ yr." }
        ],
        result: "About $1.1 \\times 10^{4}$ years old."
      }
    ],
    keyTakeaways: [
      "Alpha shifts $(A,Z)$ by $(-4,-2)$; beta shifts $Z$ by $1$; gamma shifts neither.",
      "Half-life exponentials with $\\lambda = \\ln 2/T$ time every sample.",
      "Parent-daughter ratios are clocks for charcoal to continents."
    ],
    quiz: [
      {
        q: "$^{238}$U alpha-decays. The daughter is:",
        options: ["$^{234}$Th", "$^{238}$Np", "$^{242}$Pu", "$^{238}$U"],
        answer: 0,
        explanation: "Losing $^{4}_{2}$He leaves $A = 234$, $Z = 90$ (thorium)."
      },
      {
        q: "After $3$ half-lives the surviving fraction is:",
        options: ["$1/8$", "$3/4$", "$1/3$", "$1/6$"],
        answer: 0,
        explanation: "$(1/2)^{3} = 1/8$."
      },
      {
        q: "Carbon-14 dates best:",
        options: ["The Sun's age", "Billion-year rocks", "Once-living matter to 50 kyr", "Fresh steel"],
        answer: 2,
        explanation: "Its $5730$-yr clock with atmospheric production suits organic remains."
      }
    ]
  },
  {
    sectionId: "coletta-ch30-s3",
    readingTime: 7,
    intro: "Splitting heavy nuclei and fusing light ones both pay in binding energy. Coletta works fission $Q$-values with neutron multiplication, fusion cycles in Sun and reactors, and the chain-reaction conditions. Mass defect becomes megawatts.",
    objectives: [
      "Write fission and fusion reactions and compute $Q = \\Delta m\\,c^{2}$",
      "Explain chain reactions with multiplication $k$ and criticality",
      "Compare fission reactors with stellar fusion cycles"
    ],
    concepts: [
      {
        term: "Fission",
        kind: "definition",
        statement: "**Fission** splits heavy nuclei (e.g. $^{235}$U $+ n \\to$ fragments $+ 2$–$3n + \\sim200$ MeV), the fragments and neutrons sharing the $Q$-value.",
        detail: "One kilogram of $^{235}$U holds $\\sim8 \\times 10^{13}$ J, millions of times its weight in coal."
      },
      {
        term: "Chain reaction",
        kind: "theorem",
        statement: "With multiplication $k$ neutrons per generation, $k = 1$ is **critical** (steady), $k > 1$ supercritical (growing), $k < 1$ subcritical (dying).",
        detail: "Control rods absorb to hold $k = 1.000$ exactly; delayed neutrons make the hold possible."
      },
      {
        term: "Fusion",
        kind: "definition",
        statement: "**Fusion** joins light nuclei (Sun's $pp$ chain nets $4p \\to ^{4}$He $+ 2e^{+} + 26.7$ MeV) at keV temperatures against Coulomb repulsion.",
        detail: "Tokamaks chase $100$-million-degree D-T plasma ($17.6$ MeV per reaction) with magnetic bottles."
      },
      {
        term: "Coulomb barrier",
        kind: "insight",
        statement: "Positive nuclei repel as $kZe^{2}/r$ until femtometer contact, so fusion needs heat or tunneling to cross the barrier.",
        detail: "Quantum tunneling lets the Sun burn at $15$-million degrees instead of billions."
      },
      {
        term: "Q-value method",
        kind: "method",
        statement: "Reaction energy is $Q = (m_{in} - m_{out})c^{2}$ with $1$ u $= 931.5$ MeV; positive $Q$ releases, negative absorbs.",
        detail: "D-T ($2.014$ u $+ 3.016$ u $\\to 4.003$ u $+ 1.009$ u) nets $0.0188$ u $= 17.6$ MeV." }
    ],
    examples: [
      {
        title: "Uranium fission energy",
        problem: "A $^{235}$U fission releases $200$ MeV. How many fissions per second make $3000$ MW thermal?",
        steps: [
          { label: "Per fission", text: "$200 \\times 1.60 \\times 10^{-13} = 3.20 \\times 10^{-11}$ J." },
          { label: "Rate", text: "$3.0 \\times 10^{9}/3.20 \\times 10^{-11} \\approx 9.375 \\times 10^{19}$ per second." },
          { label: "Mass rate", text: "About $3.6 \\times 10^{-5}$ g/s of $^{235}$U, roughly $3$ kg per day." }
        ],
        result: "About $9.4 \\times 10^{19}$ fissions/s."
      },
      {
        title: "D-T fusion Q",
        problem: "D ($2.01410$ u) + T ($3.01605$ u) give He-4 ($4.00260$ u) + n ($1.00866$ u). Find $Q$.",
        steps: [
          { label: "Input", text: "$5.03015$ u." },
          { label: "Output", text: "$5.01126$ u." },
          { label: "Difference", text: "$0.01889 \\times 931.5 \\approx 17.6$ MeV." }
        ],
        result: "$17.6$ MeV per fusion."
      }
    ],
    keyTakeaways: [
      "Fission splits heavies near $200$ MeV each; fusion joins lights near $18$–$27$ MeV.",
      "$Q$-values come from mass tables times $931.5$ MeV/u.",
      "Criticality $k = 1$ with delayed neutrons makes reactors controllable."
    ],
    quiz: [
      {
        q: "A reactor with $k = 1.002$ is:",
        options: ["Subcritical", "Critical", "Supercritical", "Shutdown"],
        answer: 2,
        explanation: "Above one means growing generations; rods must insert to return to critical."
      },
      {
        q: "Sun's net $pp$ reaction releases about:",
        options: ["$17.6$ MeV", "$26.7$ MeV", "$200$ MeV", "$2.2$ MeV"],
        answer: 1,
        explanation: "Four protons to helium nets $26.7$ MeV including annihilation and neutrino losses."
      },
      {
        q: "Fusion needs extreme heat because nuclei:",
        options: ["Have no mass", "Decay fast", "Are neutral", "Repel electrically"],
        answer: 3,
        explanation: "The Coulomb barrier demands keV-scale thermal motion plus tunneling."
      }
    ]
  },
  {
    sectionId: "coletta-ch30-s4",
    readingTime: 5,
    intro: "Radiation dose is energy per kilogram weighted by damage: grays and sieverts replace raw counts. Coletta surveys alpha-beta-gamma penetration, dose units, and the risk scales from background to therapy. Penetration decides shielding.",
    objectives: [
      "Order alpha, beta, gamma penetration with correct shielding",
      "Convert exposure to absorbed (gray) and effective (sievert) dose",
      "Compare background, limits, and therapy dose scales"
    ],
    concepts: [
      {
        term: "Penetration order",
        kind: "definition",
        statement: "**Alpha** stops in paper or skin, **beta** in millimeters of aluminum, **gamma/X** needs centimeters of lead or meters of concrete (halving per half-value layer).",
        detail: "Internal alphas are the worst (dense ionization) while external alphas are harmless; gammas invert that ranking."
      },
      {
        term: "Absorbed dose",
        kind: "notation",
        statement: "The **gray** (Gy $=$ J/kg) measures deposited energy; the old rad is $0.01$ Gy.",
        detail: "A $2$ Gy whole-body acute dose marks radiation-sickness onset."
      },
      {
        term: "Effective dose",
        kind: "notation",
        statement: "The **sievert** (Sv) weights grays by radiation ($w_{R}$: $20$ for alpha, $1$ for beta/gamma) and tissue factors; the rem is $0.01$ Sv.",
        detail: "One gray of alpha to lung counts $20$ Sv-equivalent of damage potential."
      },
      {
        term: "Background and limits",
        kind: "theorem",
        statement: "Natural **background** averages $\\sim3$ mSv/yr (radon, cosmic, food); occupational limits sit near $50$ mSv/yr with public caps at $1$ mSv above background.",
        detail: "A chest CT ($\u007e7$ mSv) equals a few years of background in minutes."
      },
      {
        term: "ALARA protection",
        kind: "method",
        statement: "**ALARA** (as low as reasonably achievable) means minimize time, maximize distance ($1/r^{2}$), and interpose shielding.",
        detail: "Doubling distance quarters gamma dose before any lead is poured." }
    ],
    examples: [
      {
        title: "CT in background units",
        problem: "A $7.0$ mSv CT scan: how many years of $3.0$ mSv/yr background is that?",
        steps: [
          { label: "Divide", text: "$7.0/3.0 \\approx 2.33$ yr." },
          { label: "Context", text: "Large against background but small against $2000$ mSv therapy courses." },
          { label: "Risk note", text: "Linear no-threshold models price it near $1$ in $3000$ added lifetime risk." }
        ],
        result: "About $2.3$ background-years."
      },
      {
        title: "Distance protection",
        problem: "A source reads $80$ mSv/h at $1.0$ m. What at $4.0$ m unshielded?",
        steps: [
          { label: "Inverse square", text: "$D \\propto 1/r^{2}$." },
          { label: "Factor", text: "$(1/4)^{2} = 1/16$." },
          { label: "Dose", text: "$80/16 = 5.0$ mSv/h." }
        ],
        result: "$5.0$ mSv/h."
      }
    ],
    keyTakeaways: [
      "Shielding scales with penetration: paper, aluminum, lead.",
      "Grays count joules; sieverts count weighted harm.",
      "Time, distance, shielding (ALARA) minimize every dose."
    ],
    quiz: [
      {
        q: "Best shield for gamma rays is:",
        options: ["Cloth", "Paper", "Aluminum foil", "Centimeters of lead"],
        answer: 3,
        explanation: "Dense high-$Z$ material halves gammas per half-value layer; paper stops only alphas."
      },
      {
        q: "Sieverts differ from grays by:",
        options: ["Time units", "Biological weighting", "Temperature", "Charge"],
        answer: 1,
        explanation: "$w_{R}$ and tissue factors convert deposited energy into harm-equivalent dose."
      },
      {
        q: "Doubling distance from a point gamma source:",
        options: ["Quarters dose", "Doubles dose", "Leaves dose unchanged", "Halves dose"],
        answer: 0,
        explanation: "Flux spreads over $4\\pi r^{2}$, giving the inverse-square falloff."
      }
    ]
  },
  {
    sectionId: "coletta-ch30-s5",
    readingTime: 6,
    intro: "Below nuclei lies the particle zoo, sorted by the Standard Model into quarks, leptons, and force carriers. Coletta introduces the six-six-six census, hadron building rules, and conservation laws including antimatter. Colliders are microscopes for this realm.",
    objectives: [
      "Name the six quarks and six leptons with generations",
      "Build mesons ($q\\bar{q}$) and baryons ($qqq$) from quark content",
      "Apply charge, baryon, and lepton conservation with antimatter"
    ],
    concepts: [
      {
        term: "Standard Model census",
        kind: "definition",
        statement: "Matter is **six quarks** ($u, d, s, c, b, t$) plus **six leptons** ($e, \\mu, \\tau$ with $\\nu_{e}, \\nu_{\\mu}, \\nu_{\\tau}$), in three generations of increasing mass.",
        detail: "Ordinary matter uses only $u$, $d$, $e$, and $\\nu_{e}$; the rest appear in rays and colliders."
      },
      {
        term: "Quark charges",
        kind: "notation",
        statement: "Up-type quarks carry $+2/3e$ and down-type $-1/3e$, combining to integer hadron charge.",
        detail: "Proton $uud$ sums to $+1$ and neutron $udd$ to $0$."
      },
      {
        term: "Hadrons",
        kind: "definition",
        statement: "**Baryons** bind three quarks ($p, n, \\Lambda$) and **mesons** bind quark-antiquark ($\\pi, K$), all glued by massless **gluons**.",
        detail: "Pions ($u\\bar{d}$, $140$ MeV) mediate the nuclear force as gluon leftovers."
      },
      {
        term: "Leptons and carriers",
        kind: "definition",
        statement: "**Leptons** feel no strong force; forces ride **bosons**: photons (EM), $W/Z$ (weak), gluons (strong), with gravity outside the model.",
        detail: "Beta decay's $W$ boson explains the neutrino's escape with the electron."
      },
      {
        term: "Antimatter bookkeeping",
        kind: "law",
        statement: "Every particle has an **antiparticle** (opposite charge, baryon/lepton numbers); annihilation converts $m$ fully to photons via $E = mc^{2}$.",
        detail: "Positron-electron annihilation gives two $511$ keV gammas back to back (PET scans catch them)." }
    ],
    figures: [
      {
        caption: "Hadron building: baryons $qqq$ (e.g. $uud$ proton) and mesons $q\\bar{q}$ (e.g. $u\\bar{d}$ pion)",
        svg: '<svg role="img" aria-label="Hadron building: baryons qqq (e.g. uud proton) and mesons qbarq (e.g. ubard pion)" viewBox="0 0 400 130" width="100%" height="130"><circle cx="110" cy="55" r="14" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="85" cy="85" r="14" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="135" cy="85" r="14" fill="none" stroke="currentColor" stroke-width="2"/><text x="110" y="58" text-anchor="middle" font-size="11" fill="currentColor">u</text><text x="85" y="88" text-anchor="middle" font-size="11" fill="currentColor">u</text><text x="135" y="88" text-anchor="middle" font-size="11" fill="currentColor">d</text><text x="110" y="118" text-anchor="middle" font-size="11" fill="currentColor">proton uud</text><circle cx="280" cy="65" r="14" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="320" cy="65" r="14" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/><text x="280" y="68" text-anchor="middle" font-size="11" fill="currentColor">u</text><text x="320" y="68" text-anchor="middle" font-size="11" fill="currentColor">d-bar</text><text x="300" y="118" text-anchor="middle" font-size="11" fill="currentColor">pion u d-bar</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Testing a combination",
        problem: "Can $uus$ exist as a baryon, and what is its charge?",
        steps: [
          { label: "Count", text: "Three quarks qualifies as a baryon." },
          { label: "Charge", text: "$2/3 + 2/3 - 1/3 = +1$." },
          { label: "Identify", text: "This is the $\\Sigma^{+}$ hyperon, strangeness $-1$." }
        ],
        result: "Yes: charge $+1$ ($\\Sigma^{+}$)."
      },
      {
        title: "PET annihilation",
        problem: "Positron-electron annihilation at rest emits two photons. Find each energy.",
        steps: [
          { label: "Mass", text: "Two electron masses vanish: $2 \\times 511$ keV." },
          { label: "Split", text: "Momentum conservation demands two opposite photons sharing equally." },
          { label: "Each", text: "$511$ keV at $0.00243$ nm." }
        ],
        result: "Two $511$ keV gammas."
      }
    ],
    keyTakeaways: [
      "Three generations of quarks plus leptons make all matter.",
      "Quark trios are baryons and pairs are mesons.",
      "Antimatter mirrors quantum numbers and annihilates to photons."
    ],
    quiz: [
      {
        q: "Neutron quark content is:",
        options: ["$u\\bar{d}$", "$ddd$", "$uud$", "$udd$"],
        answer: 3,
        explanation: "One up ($+2/3$) plus two downs ($-1/3$ each) sums to zero charge."
      },
      {
        q: "A meson always contains:",
        options: ["One lepton", "Three quarks", "Quark plus antiquark", "Two baryons"],
        answer: 2,
        explanation: "$q\\bar{q}$ is the meson definition; $qqq$ makes baryons."
      },
      {
        q: "Positron-electron annihilation yields:",
        options: ["One proton", "Two $511$ keV photons", "A neutron", "Nothing"],
        answer: 1,
        explanation: "Mass converts to back-to-back gammas conserving energy and momentum."
      }
    ]
  }
]
