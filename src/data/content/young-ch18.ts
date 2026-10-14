import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 18
// Thermal Properties of Matter (Sections 18.1 – 18.6)
// ============================================================================

export const youngCh18Content: SectionContent[] = [
  {
    sectionId: "young-ch18-s1",
    readingTime: 5,
    intro: "Pressure, volume, and temperature are not independent — matter constrains them. Young introduces equations of state, the $p$-$V$ diagram language, and the ideal gas law that anchors the whole chapter.",
    objectives: [
      "Write the ideal-gas equation of state $pV = nRT$ and convert moles to molecules",
      "Read isotherms and state changes on $p$-$V$ diagrams",
      "State the van der Waals correction and when it matters",
    ],
    concepts: [
      {
        term: "Equation of state",
        kind: "definition",
        statement: "An **equation of state** is a relation $f(p, V, T) = 0$ among equilibrium variables; knowing any two determines the third for a given amount of substance.",
        detail: "Solids and liquids need empirical multi-parameter forms, but dilute gases share one universal relation — the ideal-gas law.",
      },
      {
        term: "Ideal-gas law",
        kind: "law",
        statement: "For $n$ moles at absolute temperature $T$, $pV = nRT$ with $R = 8.314\\ \\mathrm{J/(mol \\cdot K)}$; microscopically $pV = NkT$ with $k = R/N_{A} = 1.381 \\times 10^{-23}\\ \\mathrm{J/K}$.",
        detail: "Standard conditions ($0^{\\circ}\\mathrm{C}$, $1\\ \\mathrm{atm}$) give $V_{m} = 22.4\\ \\mathrm{L/mol}$; always use kelvins and consistent SI units.",
      },
      {
        term: "Moles and Avogadro's number",
        kind: "notation",
        statement: "One **mole** contains $N_{A} = 6.022 \\times 10^{23}$ entities; $n = m/M$ converts mass to moles via molar mass $M$ ($M = 0.0280\\ \\mathrm{kg/mol}$ for $\\mathrm{N_{2}}$).",
        detail: "$N = nN_{A}$ counts molecules; $k = R/N_{A}$ rescales the gas constant per molecule.",
      },
      {
        term: "p-V diagrams and isotherms",
        kind: "method",
        statement: "Plotting states as points on a **$p$-$V$ diagram** turns processes into curves; **isotherms** ($T$ constant) are hyperbolas $p = nRT/V$, steeper for hotter gas.",
        detail: "Work will be the area under these curves in Chapter 19 — the diagram is the accounting ledger of thermodynamics.",
      },
      {
        term: "van der Waals correction",
        kind: "insight",
        statement: "Real gases obey $(p + an^{2}/V^{2})(V - nb) = nRT$: $b$ excludes molecular volume and $a$ adds pairwise attraction, both negligible at low density and high $T$.",
        detail: "Near condensation the corrections explode — the ideal law is a dilute-gas limit, accurate within percent for air at STP.",
      },
    ],
    examples: [
      {
        title: "Moles in a scuba tank",
        problem: "A $12.0\\ \\mathrm{L}$ tank holds air at $p = 2.00 \\times 10^{7}\\ \\mathrm{Pa}$ ($200\\ \\mathrm{bar}$) and $T = 300\\ \\mathrm{K}$. Find $n$ and the mass ($M \\approx 0.0290\\ \\mathrm{kg/mol}$).",
        steps: [
          { label: "Volume in SI", text: "$V = 12.0\\ \\mathrm{L} = 1.20 \\times 10^{-2}\\ \\mathrm{m^{3}}$." },
          { label: "Moles", text: "$n = pV/(RT) = (2.00 \\times 10^{7})(1.20 \\times 10^{-2})/(8.314 \\times 300) = 2.40 \\times 10^{5}/2494 = 96.2\\ \\mathrm{mol}$." },
          { label: "Mass", text: "$m = nM = (96.2)(0.0290) = 2.79\\ \\mathrm{kg}$ of air." },
        ],
        result: "$96\\ \\mathrm{mol}$, about $2.8\\ \\mathrm{kg}$ of air.",
      },
      {
        title: "Density of air at STP",
        problem: "Find the density of dry air ($M = 0.0290\\ \\mathrm{kg/mol}$) at $0^{\\circ}\\mathrm{C}$ and $1.013 \\times 10^{5}\\ \\mathrm{Pa}$.",
        steps: [
          { label: "Molar volume", text: "$V_{m} = RT/p = (8.314)(273.15)/1.013 \\times 10^{5} = 2.241 \\times 10^{-2}\\ \\mathrm{m^{3}/mol} = 22.4\\ \\mathrm{L/mol}$." },
          { label: "Density", text: "$\\rho = M/V_{m} = 0.0290/0.02241 = 1.294\\ \\mathrm{kg/m^{3}}$." },
          { label: "Check", text: "Matches the tabulated $1.29\\ \\mathrm{kg/m^{3}}$ used throughout Chapters 16–17." },
        ],
        result: "$\\rho = 1.29\\ \\mathrm{kg/m^{3}}$ at STP.",
      },
    ],
    keyTakeaways: [
      "$pV = nRT = NkT$ links the three state variables for dilute gases.",
      "$p$-$V$ diagrams plot states as points and processes as curves; isotherms are hyperbolas.",
      "van der Waals $(p + an^{2}/V^{2})(V-nb) = nRT$ corrects for size and attraction.",
    ],
    quiz: [
      {
        q: "One mole of ideal gas at STP occupies:",
        options: ["$1.00\\ \\mathrm{L}$", "$22.4\\ \\mathrm{L}$", "$8.314\\ \\mathrm{L}$", "$100\\ \\mathrm{L}$"],
        answer: 1,
        explanation: "$V_{m} = RT/p = (8.314)(273.15)/1.013 \\times 10^{5} = 2.24 \\times 10^{-2}\\ \\mathrm{m^{3}} = 22.4\\ \\mathrm{L}$.",
      },
      {
        q: "On a $p$-$V$ diagram, hotter isotherms lie:",
        options: ["Farther from the origin (higher $p$ at given $V$)", "Closer to the origin", "Exactly on top of colder ones", "Vertically only"],
        answer: 0,
        explanation: "$p = nRT/V$: at fixed $V$, $p \\propto T$, so hotter hyperbolas sit higher and farther out.",
      },
      {
        q: "The van der Waals $b$ parameter accounts for:",
        options: ["Intermolecular attraction", "Excluded volume of the molecules themselves", "Temperature dependence of $R$", "Ionization"],
        answer: 1,
        explanation: "$V - nb$ is the free volume; $a$ handles attraction, $b$ handles finite molecular size.",
      },
    ],
  },
  {
    sectionId: "young-ch18-s2",
    readingTime: 4,
    intro: "How many molecules are in a breath, and how big is one? Young connects molar mass, Avogadro's number, and molecular sizes to bulk densities, giving kinetic theory concrete numbers to work with.",
    objectives: [
      "Convert between mass, moles, and molecule counts",
      "Estimate molecular sizes and spacings from bulk data",
      "Compare densities across gases, liquids, and solids",
    ],
    concepts: [
      {
        term: "Molar mass",
        kind: "definition",
        statement: "The **molar mass** $M$ is the mass of one mole: $M(\\mathrm{H_{2}O}) = 0.0180\\ \\mathrm{kg/mol}$, $M(\\mathrm{N_{2}}) = 0.0280\\ \\mathrm{kg/mol}$, read from the periodic table in grams per mole.",
        detail: "$n = m/M$ and $m_{\\mathrm{molecule}} = M/N_{A}$ bridge laboratory grams to single molecules.",
      },
      {
        term: "Avogadro's number in action",
        kind: "notation",
        statement: "$N_{A} = 6.022 \\times 10^{23}\\ \\mathrm{mol^{-1}}$: a $250\\ \\mathrm{mL}$ glass of water ($13.9\\ \\mathrm{mol}$) holds $8.4 \\times 10^{24}$ molecules.",
        detail: "A mole of sand grains would cover California meters deep — chemistry counts in bulk because atoms are tiny.",
      },
      {
        term: "Molecular size estimate",
        kind: "method",
        statement: "Dividing molar volume by $N_{A}$ gives per-molecule volume; liquid water's $18\\ \\mathrm{cm^{3}/mol}$ yields cubes $3.1 \\times 10^{-10}\\ \\mathrm{m}$ on a side — the angstrom scale of molecules.",
        detail: "Gases at STP space molecules $\\sim 3\\ \\mathrm{nm}$ apart, ten diameters away — mostly empty space, justifying point-particle kinetics.",
      },
      {
        term: "Density systematics",
        kind: "insight",
        statement: "Gases sit near $1\\ \\mathrm{kg/m^{3}}$, liquids and solids near $10^{3}$–$10^{4}\\ \\mathrm{kg/m^{3}}$: a thousand-fold jump marking close packing versus free flight.",
        detail: "Gold $19{,}300\\ \\mathrm{kg/m^{3}}$ versus styrofoam $100$ shows chemistry, not just packing — heavy nuclei in similar lattices.",
      },
      {
        term: "Atomic mass unit",
        kind: "notation",
        statement: "One **atomic mass unit** $1\\ \\mathrm{u} = 1.661 \\times 10^{-27}\\ \\mathrm{kg} = m(^{12}\\mathrm{C})/12$; a particle of mass $m$ has molar mass $M = mN_{A}$ in matching units.",
        detail: "A proton ($1.007\\ \\mathrm{u}$) is $1.673 \\times 10^{-27}\\ \\mathrm{kg}$; chemistry's grams-per-mole numerically equal physics' atomic mass units.",
      },
    ],
    examples: [
      {
        title: "Molecules in one breath",
        problem: "A breath is $0.500\\ \\mathrm{L}$ of air at body conditions ($310\\ \\mathrm{K}$, $1.013 \\times 10^{5}\\ \\mathrm{Pa}$). How many molecules are inhaled?",
        steps: [
          { label: "Moles", text: "$n = pV/(RT) = (1.013 \\times 10^{5})(5.00 \\times 10^{-4})/(8.314 \\times 310) = 50.65/2577 = 1.965 \\times 10^{-2}\\ \\mathrm{mol}$." },
          { label: "Molecules", text: "$N = nN_{A} = (1.965 \\times 10^{-2})(6.022 \\times 10^{23}) = 1.18 \\times 10^{22}$." },
          { label: "Scale", text: "Ten thousand billion billion molecules per breath — exhaled Caesarian air is literally everywhere." },
        ],
        result: "$1.2 \\times 10^{22}$ molecules per breath.",
      },
      {
        title: "Spacing of air molecules",
        problem: "Estimate the mean spacing of $\\mathrm{N_{2}}$ molecules in air at STP ($V_{m} = 22.4\\ \\mathrm{L/mol}$, diameter $d \\approx 3.0 \\times 10^{-10}\\ \\mathrm{m}$).",
        steps: [
          { label: "Per-molecule volume", text: "$V_{1} = 0.0224/6.022 \\times 10^{23} = 3.72 \\times 10^{-26}\\ \\mathrm{m^{3}}$." },
          { label: "Spacing", text: "$l = V_{1}^{1/3} = (3.72 \\times 10^{-26})^{1/3} = 3.34 \\times 10^{-9}\\ \\mathrm{m} = 3.3\\ \\mathrm{nm}$." },
          { label: "Ratio", text: "$l/d \\approx 11$: molecules are pointlike pinballs occupying $0.1$ percent of the volume." },
        ],
        result: "Mean spacing $3.3\\ \\mathrm{nm}$, about $11$ diameters.",
      },
    ],
    keyTakeaways: [
      "$n = m/M$ and $N = nN_{A}$ convert grams to molecules.",
      "Molecules are angstrom-sized; gases space them $\sim 10$ diameters apart.",
      "Condensed matter is $\sim 1000$ times denser than gases.",
    ],
    quiz: [
      {
        q: "The mass of one water molecule is:",
        options: ["$18.0\\ \\mathrm{kg}$", "$0.0180/N_{A} = 3.0 \\times 10^{-26}\\ \\mathrm{kg}$", "$6.022 \\times 10^{23}\\ \\mathrm{kg}$", "$1.00\\ \\mathrm{g}$"],
        answer: 1,
        explanation: "$m = M/N_{A} = 0.0180/6.022 \\times 10^{23} = 2.99 \\times 10^{-26}\\ \\mathrm{kg}$.",
      },
      {
        q: "Mean molecular spacing in a gas versus a liquid is larger by roughly:",
        options: ["$10$ percent", "A factor of $10$", "A factor of $1000$", "No difference"],
        answer: 1,
        explanation: "Volume per molecule differs $\sim 1000$-fold, so linear spacing differs $1000^{1/3} = 10$-fold.",
      },
      {
        q: "One atomic mass unit equals:",
        options: ["$1\\ \\mathrm{g}$", "$1.661 \\times 10^{-27}\\ \\mathrm{kg}$", "$9.11 \\times 10^{-31}\\ \\mathrm{kg}$", "$1.013 \\times 10^{5}\\ \\mathrm{kg}$"],
        answer: 1,
        explanation: "$1\\ \\mathrm{u} = 10^{-3}\\ \\mathrm{kg/mol}/N_{A} = 1.661 \\times 10^{-27}\\ \\mathrm{kg}$.",
      },
    ],
  },
  {
    sectionId: "young-ch18-s3",
    readingTime: 7,
    intro: "Pressure is molecular bombardment and temperature is molecular motion — Young proves both. This kinetic derivation of $pV = NkT$ from elastic collisions is the chapter's centerpiece, ending in the equipartition of translational energy.",
    objectives: [
      "Derive $p = (2/3)(N/V)\\bar{K}_{\\mathrm{tr}}$ from wall collisions",
      "Show $\\bar{K}_{\\mathrm{tr}} = (3/2)kT$ and interpret temperature kinetically",
      "State the assumptions of the kinetic-molecular model",
    ],
    concepts: [
      {
        term: "Kinetic-model assumptions",
        kind: "definition",
        statement: "The model assumes many identical point molecules in random motion, obeying Newton's laws with elastic wall collisions, negligible volume, negligible intermolecular forces except during collisions, and separations far exceeding diameters.",
        detail: "Each assumption fails gracefully: dense gases need van der Waals terms, but air at STP satisfies all five within percent.",
      },
      {
        term: "Pressure from collisions",
        kind: "theorem",
        statement: "One molecule bouncing elastically between walls distance $l$ apart hits with frequency $v_{x}/(2l)$ and delivers $2mv_{x}$ per hit, so $N$ molecules give $pV = Nm\\overline{v_{x}^{2}} = (2/3)N\\bar{K}_{\\mathrm{tr}}$.",
        detail: "Isotropy ($\\overline{v_{x}^{2}} = \\overline{v^{2}}/3$) supplies the $1/3$; only the normal velocity component transfers wall momentum.",
      },
      {
        term: "Kinetic temperature",
        kind: "law",
        statement: "Matching $pV = (2/3)N\\bar{K}_{\\mathrm{tr}}$ to $pV = NkT$ gives $\\bar{K}_{\\mathrm{tr}} = \\tfrac{3}{2}kT$: absolute temperature is mean translational kinetic energy per molecule, $kT/2$ per quadratic degree of freedom.",
        detail: "At $300\\ \\mathrm{K}$, $\\bar{K}_{\\mathrm{tr}} = 6.21 \\times 10^{-21}\\ \\mathrm{J} = 0.0388\\ \\mathrm{eV}$ — the thermal energy scale of chemistry.",
      },
      {
        term: "rms speed",
        kind: "method",
        statement: "Since $\\tfrac{1}{2}m\\overline{v^{2}} = \\tfrac{3}{2}kT$, the root-mean-square speed is $v_{\\mathrm{rms}} = \\sqrt{3kT/m} = \\sqrt{3RT/M}$: $511\\ \\mathrm{m/s}$ for $\\mathrm{N_{2}}$ at $300\\ \\mathrm{K}$ versus $1930\\ \\mathrm{m/s}$ for $\\mathrm{H_{2}}$.",
        detail: "Light molecules fly faster at the same $T$; Graham's effusion law ($\\mathrm{rate} \\propto 1/\\sqrt{M}$) is this speed ratio in action.",
      },
      {
        term: "What temperature does not measure",
        kind: "insight",
        statement: "$T$ measures only the random translational energy — not bulk flow, rotation, vibration, or binding energy — which is why a supersonic jet's cold static $T$ coexists with huge directed kinetic energy.",
        detail: "Thermometers read random motion; pitot tubes read directed motion. Confusing them wrecks wind-tunnel analysis.",
      },
    ],
    figures: [
      {
        caption: "One molecule shuttling between walls: each elastic hit delivers $2mv_{x}$ at rate $v_{x}/(2l)$; summing over $N$ molecules gives $pV = Nm\\overline{v_{x}^{2}}$.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Molecule colliding elastically between container walls"><rect x="60" y="25" width="280" height="120" fill="none" stroke="currentColor" stroke-width="2"/><line x1="100" y1="85" x2="300" y2="85" stroke="currentColor" stroke-width="2"/><polygon points="300,78 314,85 300,92" fill="currentColor"/><line x1="300" y1="105" x2="110" y2="105" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><polygon points="110,98 96,105 110,112" fill="currentColor"/><circle cx="100" cy="85" r="7" fill="currentColor"/><text x="150" y="75" font-size="12" fill="currentColor">mvx → 2mvx kick</text><text x="62" y="160" font-size="12" fill="currentColor">wall</text><text x="320" y="160" font-size="12" fill="currentColor">wall  l</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "rms speed of nitrogen",
        problem: "Compute $v_{\\mathrm{rms}}$ for $\\mathrm{N_{2}}$ ($M = 0.0280\\ \\mathrm{kg/mol}$) at $T = 300\\ \\mathrm{K}$.",
        steps: [
          { label: "Formula", text: "$v_{\\mathrm{rms}} = \\sqrt{3RT/M} = \\sqrt{3(8.314)(300)/0.0280}$." },
          { label: "Numerator", text: "$3(8.314)(300) = 7482.6$; divide by $0.0280$ gives $267236$." },
          { label: "Root", text: "$\\sqrt{267236} = 517\\ \\mathrm{m/s}$ (textbooks quote $511\\ \\mathrm{m/s}$ with $293\\ \\mathrm{K}$; consistent)." },
        ],
        result: "$v_{\\mathrm{rms}} \\approx 517\\ \\mathrm{m/s}$ — supersonic, yet the gas sits still.",
      },
      {
        title: "Pressure check from kinetics",
        problem: "One mole of gas occupies $22.4\\ \\mathrm{L}$ at $273\\ \\mathrm{K}$. Verify $p = (2/3)(N/V)\\bar{K}$ reproduces $1.01 \\times 10^{5}\\ \\mathrm{Pa}$.",
        steps: [
          { label: "Mean energy", text: "$\\bar{K} = (3/2)kT = 1.5(1.381 \\times 10^{-23})(273) = 5.655 \\times 10^{-21}\\ \\mathrm{J}$." },
          { label: "Number density", text: "$N/V = 6.022 \\times 10^{23}/0.0224 = 2.688 \\times 10^{25}\\ \\mathrm{m^{-3}}$." },
          { label: "Pressure", text: "$p = (2/3)(2.688 \\times 10^{25})(5.655 \\times 10^{-21}) = (2/3)(1.520 \\times 10^{5}) = 1.013 \\times 10^{5}\\ \\mathrm{Pa}$." },
        ],
        result: "$1.01 \\times 10^{5}\\ \\mathrm{Pa}$ — kinetics reproduces the atmosphere.",
      },
    ],
    keyTakeaways: [
      "Wall collisions give $pV = Nm\\overline{v_{x}^{2}} = (2/3)N\\bar{K}_{\\mathrm{tr}}$.",
      "Matching to $pV = NkT$ yields $\\bar{K}_{\\mathrm{tr}} = (3/2)kT$.",
      "$v_{\\mathrm{rms}} = \\sqrt{3RT/M}$: light fast, heavy slow at fixed $T$.",
    ],
    quiz: [
      {
        q: "In the kinetic derivation, the factor $1/3$ comes from:",
        options: ["Three walls of the box", "Isotropy: $\\overline{v_{x}^{2}} = \\overline{v^{2}}/3$", "Three dimensions of volume", "Averaging over three gases"],
        answer: 1,
        explanation: "Only the $x$-component hits the $x$-walls, and isotropy gives each component one third of $\\overline{v^{2}}$.",
      },
      {
        q: "At fixed $T$, oxygen ($M = 32$) versus hydrogen ($M = 2$) rms speeds compare as:",
        options: ["Equal", "$v_{\\mathrm{H_{2}}}/v_{\\mathrm{O_{2}}} = \\sqrt{32/2} = 4$", "$v_{\\mathrm{O_{2}}}$ is $16$ times larger", "$v_{\\mathrm{H_{2}}}$ is $16$ times larger"],
        answer: 1,
        explanation: "$v_{\\mathrm{rms}} \\propto 1/\\sqrt{M}$: $\\sqrt{32/2} = 4$ times faster for hydrogen.",
      },
      {
        q: "Absolute temperature measures:",
        options: ["Total energy including bulk flow", "Mean random translational kinetic energy $(3/2)kT$", "Only rotational energy", "Binding energy"],
        answer: 1,
        explanation: "The kinetic match $pV = (2/3)N\\bar{K} = NkT$ identifies $T$ with random translation only.",
      },
      {
        q: "Each wall collision of one molecule transfers momentum:",
        options: ["$mv_{x}$", "$2mv_{x}$", "$mv_{x}^{2}$", "Zero for elastic hits"],
        answer: 1,
        explanation: "Reversal $+mv_{x} \\to -mv_{x}$ changes molecular momentum by $2mv_{x}$, delivered to the wall.",
      },
    ],
  },
  {
    sectionId: "young-ch18-s4",
    readingTime: 5,
    intro: "Why do heat capacities come in whole multiples of $R$? Young explains degrees of freedom and equipartition — each quadratic energy term holds $kT/2$ — and shows where quantum freezing breaks the classical pattern.",
    objectives: [
      "State equipartition and count degrees of freedom for gas models",
      "Predict $C_{V} = (f/2)R$ for monatomic, diatomic, and solid cases",
      "Explain failures from frozen vibrations and quantum effects",
    ],
    concepts: [
      {
        term: "Degrees of freedom",
        kind: "definition",
        statement: "Each independent quadratic energy term ($\\tfrac{1}{2}mv_{x}^{2}$, $\\tfrac{1}{2}I\\omega^{2}$, $\\tfrac{1}{2}kx^{2}$) is a **degree of freedom**; a monatomic gas has $f = 3$, diatomic $f = 5$ (3 translation + 2 rotation) at room $T$.",
        detail: "Linear molecules rotate about two axes (the spindle axis carries negligible $I$); nonlinear molecules get three rotations.",
      },
      {
        term: "Equipartition theorem",
        kind: "theorem",
        statement: "In classical equilibrium each quadratic degree of freedom holds mean energy $kT/2$ per molecule, so $U = (f/2)nRT$ and $C_{V} = (f/2)R$.",
        detail: "Monatomic $C_{V} = (3/2)R = 12.5\\ \\mathrm{J/(mol \\cdot K)}$; diatomic $C_{V} = (5/2)R = 20.8$; both confirmed at room temperature.",
      },
      {
        term: "Dulong-Petit law",
        kind: "law",
        statement: "Solids give each atom $3$ kinetic plus $3$ potential terms ($f = 6$), so $C_{V} = 3R = 24.9\\ \\mathrm{J/(mol \\cdot K)}$ per mole of atoms — Dulong and Petit's 1819 rule.",
        detail: "Lead, copper, and aluminum all land near $25\\ \\mathrm{J/(mol \\cdot K)}$ at room $T$; diamond's $6.1$ exposes quantum freezing.",
      },
      {
        term: "Frozen vibrations",
        kind: "insight",
        statement: "Vibrational modes need $kT \\gtrsim h\\nu$ to excite; diatomic vibration ($h\\nu \\sim 0.3\\ \\mathrm{eV}$) is frozen at $300\\ \\mathrm{K}$ ($kT = 0.026\\ \\mathrm{eV}$) and thaws above $\\sim 1000\\ \\mathrm{K}$, raising $C_{V}$ toward $(7/2)R$.",
        detail: "Hydrogen's $C_{V}$ climbs from $(3/2)R$ near $50\\ \\mathrm{K}$ (rotations frozen too) through $(5/2)R$ to $(7/2)R$ — a staircase of thawing modes.",
      },
      {
        term: "Gamma from $f$",
        kind: "method",
        statement: "With $C_{p} = C_{V} + R$, the adiabatic ratio is $\\gamma = C_{p}/C_{V} = (f+2)/f$: $1.67$ monatomic, $1.40$ diatomic, $1.33$ polyatomic.",
        detail: "Measuring sound speed gives $\\gamma$ (Section 16.2), and $\\gamma$ counts degrees of freedom — acoustics as molecular census.",
      },
    ],
    examples: [
      {
        title: "Heating helium versus nitrogen",
        problem: "How much heat raises $2.00\\ \\mathrm{mol}$ of He (monatomic) and of $\\mathrm{N_{2}}$ (diatomic) by $50.0\\ \\mathrm{K}$ at constant volume?",
        steps: [
          { label: "Helium", text: "$Q = nC_{V}\\Delta T = (2.00)(1.5 \\times 8.314)(50.0) = (2.00)(12.47)(50.0) = 1247\\ \\mathrm{J}$." },
          { label: "Nitrogen", text: "$Q = (2.00)(2.5 \\times 8.314)(50.0) = (2.00)(20.785)(50.0) = 2078.5\\ \\mathrm{J}$." },
          { label: "Ratio", text: "$2078.5/1247 = 1.667 = 5/3$: two extra rotational modes drink $67$ percent more heat." },
        ],
        result: "He: $1.25\\ \\mathrm{kJ}$; $\\mathrm{N_{2}}$: $2.08\\ \\mathrm{kJ}$.",
      },
      {
        title: "Dulong-Petit check for copper",
        problem: "Predict the specific heat of copper ($M = 0.0635\\ \\mathrm{kg/mol}$) from $C_{V} = 3R$ and compare with $385\\ \\mathrm{J/(kg \\cdot K)}$.",
        steps: [
          { label: "Molar", text: "$C_{V} = 3(8.314) = 24.94\\ \\mathrm{J/(mol \\cdot K)}$." },
          { label: "Per kilogram", text: "$c = C_{V}/M = 24.94/0.0635 = 392.8\\ \\mathrm{J/(kg \\cdot K)}$." },
          { label: "Compare", text: "Within $2$ percent of $385$ — Dulong-Petit works for heavy room-temperature solids." },
        ],
        result: "Predicted $393\\ \\mathrm{J/(kg \\cdot K)}$ versus $385$ measured.",
      },
    ],
    keyTakeaways: [
      "Each quadratic mode holds $kT/2$: $C_{V} = (f/2)R$.",
      "Room-$T$ values: monatomic $(3/2)R$, diatomic $(5/2)R$, solids $3R$.",
      "Quantum freezing ($kT \\ll h\\nu$) removes modes; heating thaws them.",
    ],
    quiz: [
      {
        q: "A classical diatomic gas at room temperature has $C_{V}$:",
        options: ["$(3/2)R$", "$(5/2)R$", "$3R$", "$(7/2)R$"],
        answer: 1,
        explanation: "Three translations plus two rotations are active; vibration is frozen: $f = 5$.",
      },
      {
        q: "Diamond's room-temperature $C_{V}$ is far below $3R$ because:",
        options: ["It has fewer atoms", "Its stiff lattice makes $h\\nu \\gg kT$, freezing most modes", "Equipartition never applies to solids", "It is not in equilibrium"],
        answer: 1,
        explanation: "High phonon frequencies stay quantum-frozen until very high $T$; Dulong-Petit is the $kT \\gg h\\nu$ limit.",
      },
      {
        q: "For a monatomic ideal gas, $\\gamma = C_{p}/C_{V}$ equals:",
        options: ["$1.33$", "$1.40$", "$1.67$", "$2.00$"],
        answer: 2,
        explanation: "$\\gamma = (f+2)/f = 5/3 = 1.667$ for $f = 3$.",
      },
    ],
  },
  {
    sectionId: "young-ch18-s5",
    readingTime: 5,
    intro: "Not all molecules share the average speed — speeds spread around it in a precise asymmetric curve. Young presents the Maxwell-Boltzmann distribution and extracts the most-probable, mean, and rms speeds that experiments confirm.",
    objectives: [
      "Sketch the Maxwell-Boltzmann distribution and its temperature dependence",
      "Compute $v_{\\mathrm{mp}}$, $v_{\\mathrm{av}}$, $v_{\\mathrm{rms}}$ and their ratios",
      "Explain evaporation, effusion, and atmospheric escape from the high-speed tail",
    ],
    concepts: [
      {
        term: "Maxwell-Boltzmann distribution",
        kind: "definition",
        statement: "The fraction of molecules with speeds in $[v, v+dv]$ is $f(v)\\,dv = 4\\pi(m/2\\pi kT)^{3/2} v^{2} e^{-mv^{2}/2kT}\\,dv$: a $v^{2}$ phase-space rise cut by a Boltzmann exponential fall.",
        detail: "Hotter $T$ flattens and right-shifts the curve; the area under every curve is $1$ — heating redistributes, never creates, molecules.",
      },
      {
        term: "Three characteristic speeds",
        kind: "theorem",
        statement: "Most probable $v_{\\mathrm{mp}} = \\sqrt{2kT/m}$, mean $v_{\\mathrm{av}} = \\sqrt{8kT/\\pi m}$, rms $v_{\\mathrm{rms}} = \\sqrt{3kT/m}$, in fixed ratio $1 : 1.128 : 1.225$.",
        detail: "For $\\mathrm{N_{2}}$ at $300\\ \\mathrm{K}$: $422$, $476$, $517\\ \\mathrm{m/s}$ — the peak sits left of the mean because the tail stretches right.",
      },
      {
        term: "Experimental confirmation",
        kind: "method",
        statement: "Stern's rotating-disk and modern time-of-flight velocity selectors pass only speed $v = \\omega R/\\phi$ molecules, mapping $f(v)$ point by point in agreement with Maxwell-Boltzmann.",
        detail: "Zartman and Ko's 1930 bismuth-beam chopper traces remain textbook proof that the distribution is real, not bookkeeping.",
      },
      {
        term: "Evaporation from the tail",
        kind: "insight",
        statement: "Only the exponential tail exceeds escape or binding energies, so evaporation, chemical rates (Arrhenius $e^{-E_{a}/RT}$), and thermionic emission all sample $f(v)$ far right of the peak.",
        detail: "Sweating works because the hottest molecules leave, lowering the mean of those left — evaporative cooling as tail-clipping.",
      },
      {
        term: "Atmospheric escape",
        kind: "law",
        statement: "Bodies keep gases only if typical escape needs $v_{\\mathrm{esc}} \\gtrsim 6\\,v_{\\mathrm{rms}}$; Earth holds $\\mathrm{N_{2}}$/ $\\mathrm{O_{2}}$ but lost $\\mathrm{H_{2}}$ and He to space.",
        detail: "The Moon ($v_{\\mathrm{esc}} = 2.38\\ \\mathrm{km/s}$) holds nothing; Titan's cold traps methane despite low gravity — temperature matters as much as mass.",
      },
    ],
    figures: [
      {
        caption: "Maxwell-Boltzmann $f(v)$ at $300\\ \\mathrm{K}$ and $900\\ \\mathrm{K}$: hotter curves peak lower, shift right, and fatten the tail.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maxwell Boltzmann distributions at two temperatures"><line x1="30" y1="155" x2="380" y2="155" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="155" x2="30" y2="15" stroke="currentColor" stroke-width="1.5"/><path d="M30,155 Q90,150 110,60 Q125,30 150,80 Q175,135 220,150" fill="none" stroke="currentColor" stroke-width="2"/><path d="M30,155 Q120,152 170,110 Q210,70 260,95 Q310,120 360,145" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 4"/><text x="100" y="175" font-size="12" fill="currentColor">v →</text><text x="120" y="25" font-size="12" fill="currentColor">300 K</text><text x="265" y="60" font-size="12" fill="currentColor">900 K</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Three speeds for oxygen",
        problem: "Compute $v_{\\mathrm{mp}}$, $v_{\\mathrm{av}}$, $v_{\\mathrm{rms}}$ for $\\mathrm{O_{2}}$ ($M = 0.0320\\ \\mathrm{kg/mol}$) at $T = 300\\ \\mathrm{K}$.",
        steps: [
          { label: "rms first", text: "$v_{\\mathrm{rms}} = \\sqrt{3RT/M} = \\sqrt{3(8.314)(300)/0.0320} = \\sqrt{233831} = 483.6\\ \\mathrm{m/s}$." },
          { label: "Scale others", text: "$v_{\\mathrm{mp}} = \\sqrt{2/3}\\,v_{\\mathrm{rms}} = 0.8165(483.6) = 394.9\\ \\mathrm{m/s}$; $v_{\\mathrm{av}} = \\sqrt{8/(3\\pi)}\\,v_{\\mathrm{rms}} = 0.9213(483.6) = 445.5\\ \\mathrm{m/s}$." },
          { label: "Ratios", text: "$394.9 : 445.5 : 483.6 = 1 : 1.128 : 1.225$. Confirmed." },
        ],
        result: "$395$, $446$, $484\\ \\mathrm{m/s}$ for mp, mean, rms.",
      },
      {
        title: "Why Earth lost its hydrogen",
        problem: "Earth's escape speed is $11.2\\ \\mathrm{km/s}$. Compare with $v_{\\mathrm{rms}}$ of H ($M = 0.002\\ \\mathrm{kg/mol}$) at exospheric $T = 1000\\ \\mathrm{K}$.",
        steps: [
          { label: "Hydrogen rms", text: "$v_{\\mathrm{rms}} = \\sqrt{3(8.314)(1000)/0.002} = \\sqrt{1.247 \\times 10^{7}} = 3531\\ \\mathrm{m/s}$." },
          { label: "Ratio", text: "$v_{\\mathrm{esc}}/v_{\\mathrm{rms}} = 11.2/3.53 = 3.2 \\ll 6$ — deep in the escape regime." },
          { label: "Nitrogen check", text: "For $\\mathrm{N_{2}}$ ($14\\times$ heavier), $v_{\\mathrm{rms}} = 3531/\\sqrt{14} = 944\\ \\mathrm{m/s}$, ratio $11.9 > 6$ — retained." },
        ],
        result: "H escapes ($3.2 < 6$); $\\mathrm{N_{2}}$ stays ($11.9 > 6$).",
      },
    ],
    keyTakeaways: [
      "$f(v) \\propto v^{2}e^{-mv^{2}/2kT}$: phase-space rise times Boltzmann fall.",
      "$v_{\\mathrm{mp}} : v_{\\mathrm{av}} : v_{\\mathrm{rms}} = 1 : 1.128 : 1.225$.",
      "Tails drive evaporation, reaction rates, and atmospheric escape.",
    ],
    quiz: [
      {
        q: "Heating a gas from $T$ to $4T$, the most probable speed:",
        options: ["Is unchanged", "Doubles", "Quadruples", "Halves"],
        answer: 1,
        explanation: "$v_{\\mathrm{mp}} = \\sqrt{2kT/m} \\propto \\sqrt{T}$: $\\sqrt{4} = 2$.",
      },
      {
        q: "The Maxwell-Boltzmann peak lies left of the mean because:",
        options: ["The $v^{2}$ factor dominates everywhere", "The exponential tail stretches right, pulling the mean above the peak", "Speeds are bounded above", "The distribution is symmetric"],
        answer: 1,
        explanation: "Rise as $v^{2}$ then slow exponential decay gives right skew: mean $>$ peak.",
      },
      {
        q: "Evaporative cooling works because escaping molecules are:",
        options: ["The slowest", "Drawn from the hot tail, lowering the remaining mean", "At exactly $v_{\\mathrm{mp}}$", "Outside the distribution"],
        answer: 1,
        explanation: "Only fast tail molecules overcome binding; their departure clips the distribution's hot end.",
      },
    ],
  },
  {
    sectionId: "young-ch18-s6",
    readingTime: 4,
    intro: "Gases, liquids, solids, plasmas — Young closes by organizing matter into phases, reading phase diagrams, and naming the intermolecular forces that decide which phase wins at each $(p, T)$.",
    objectives: [
      "Distinguish the four phases by molecular order and mobility",
      "Read triple points and critical points on $p$-$T$ diagrams",
      "Name the intermolecular bonds behind condensation and freezing",
    ],
    concepts: [
      {
        term: "Phases by molecular behavior",
        kind: "definition",
        statement: "Gases fill containers with free flight; liquids hold volume but flow; solids hold shape with lattice order; **plasmas** are ionized gases with collective charge dynamics.",
        detail: "Same $\\mathrm{H_{2}O}$ molecules make steam, water, ice, and (in stars) plasma — phase is organization, not composition.",
      },
      {
        term: "p-T phase diagram",
        kind: "method",
        statement: "Coexistence curves partition the $p$-$T$ plane into solid, liquid, and vapor regions, meeting at the **triple point**; the liquid-vapor curve ends at the **critical point** ($374^{\\circ}\\mathrm{C}$, $22.1\\ \\mathrm{MPa}$ for water).",
        detail: "Crossing a curve at fixed $p$ by raising $T$ melts then boils; beyond the critical point liquid and vapor merge into a supercritical fluid.",
      },
      {
        term: "Critical point",
        kind: "definition",
        statement: "Above $T_{c}$ no pressure liquefies the gas: meniscus vanishes, latent heat goes to zero, and density fluctuations scatter light (critical opalescence).",
        detail: "Supercritical $\\mathrm{CO_{2}}$ ($31^{\\circ}\\mathrm{C}$, $7.4\\ \\mathrm{MPa}$) decaffeinates coffee and dry-cleans — liquid-like density with gas-like flow.",
      },
      {
        term: "Intermolecular forces",
        kind: "insight",
        statement: "Van der Waals dipoles condense most gases; hydrogen bonds structure water and biomolecules; metallic, ionic, and covalent bonds build solids with $\\mathrm{eV}$-scale cohesion versus $meV$ thermal energies.",
        detail: "Phase at room $T$ reflects bond strength: helium's meV attractions leave it gaseous while silica's eV network stays rock.",
      },
      {
        term: "Plasma as fourth phase",
        kind: "notation",
        statement: "Above $\\sim 10^{4}\\ \\mathrm{K}$ collisions ionize atoms into a **plasma** of electrons and ions — $99$ percent of visible matter (stars, lightning, auroras) — governed by electromagnetism plus kinetics.",
        detail: "Fluorescent tubes and fusion tokamaks are laboratory plasmas; the ionosphere's plasma reflects shortwave radio.",
      },
    ],
    figures: [
      {
        caption: "Schematic $p$-$T$ diagram for water: fusion, vaporization, and sublimation curves meet at the triple point; vaporization ends at the critical point.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Phase diagram with triple and critical points"><line x1="40" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="110" r="5" fill="currentColor"/><text x="120" y="130" font-size="11" fill="currentColor">triple</text><circle cx="300" cy="55" r="5" fill="currentColor"/><text x="285" y="45" font-size="11" fill="currentColor">critical</text><path d="M150,110 Q220,85 300,55" fill="none" stroke="currentColor" stroke-width="2"/><path d="M150,110 Q110,70 90,25" fill="none" stroke="currentColor" stroke-width="2"/><path d="M150,110 Q200,130 260,160" fill="none" stroke="currentColor" stroke-width="2"/><text x="230" y="100" font-size="11" fill="currentColor">vapor</text><text x="90" y="150" font-size="11" fill="currentColor">solid</text><text x="190" y="150" font-size="11" fill="currentColor">liquid</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Boiling on Mount Everest",
        problem: "Summit pressure is $0.33\\ \\mathrm{atm}$. Estimate the boiling point using the Clausius-Clapeyron rule that vapor pressure roughly doubles per $20^{\\circ}\\mathrm{C}$ near $100^{\\circ}\\mathrm{C}$.",
        steps: [
          { label: "Ratio needed", text: "Need vapor pressure $= 0.33\\ \\mathrm{atm}$, a factor $1/0.33 = 3.03$ below $1\\ \\mathrm{atm}$." },
          { label: "Halvings", text: "$3.03 \\approx 2^{1.6}$, so drop $1.6 \\times 20 = 32^{\\circ}\\mathrm{C}$." },
          { label: "Estimate", text: "$T_{\\mathrm{boil}} \\approx 100 - 32 = 68^{\\circ}\\mathrm{C}$ (measured $71^{\\circ}\\mathrm{C}$ — close for a rule of thumb)." },
        ],
        result: "Water boils near $70^{\\circ}\\mathrm{C}$ on Everest — tea never quite brews.",
      },
      {
        title: "Supercritical vent water",
        problem: "Deep-sea vents eject water at $400^{\\circ}\\mathrm{C}$ under $25\\ \\mathrm{MPa}$. What phase is it, given water's critical point ($374^{\\circ}\\mathrm{C}$, $22.1\\ \\mathrm{MPa}$)?",
        steps: [
          { label: "Compare", text: "Both $T > T_{c}$ and $p > p_{c}}$ — beyond the end of the vaporization curve." },
          { label: "Classify", text: "Supercritical fluid: no boiling meniscus, liquid-like density dissolving minerals." },
          { label: "Consequence", text: "It carries dissolved metals that precipitate as black-smoker chimneys on cooling." },
        ],
        result: "Supercritical water — neither liquid nor vapor.",
      },
    ],
    keyTakeaways: [
      "Phase is molecular organization: gases fly, liquids flow, solids order, plasmas ionize.",
      "$p$-$T$ diagrams organize coexistence; triple points anchor scales, critical points end boiling.",
      "Bond energies versus $kT$ decide the room-temperature phase.",
    ],
    quiz: [
      {
        q: "Beyond the critical point:",
        options: ["Liquid and vapor become indistinguishable supercritical fluid", "Only solid exists", "Boiling requires more heat", "The triple point repeats"],
        answer: 0,
        explanation: "The vaporization curve terminates at $(T_{c}, p_{c})$; past it no meniscus or latent heat remains.",
      },
      {
        q: "At the triple point:",
        options: ["Only liquid and vapor coexist", "Solid, liquid, and vapor coexist in equilibrium", "No phase is stable", "Pressure is $1\\ \\mathrm{atm}$ necessarily"],
        answer: 1,
        explanation: "Three coexistence curves meet at one unique $(p, T)$ — e.g. $273.16\\ \\mathrm{K}$, $611.7\\ \\mathrm{Pa}$ for water.",
      },
      {
        q: "Most visible matter in the universe is:",
        options: ["Liquid", "Solid rock", "Plasma", "Bose condensate"],
        answer: 2,
        explanation: "Stars and interstellar gas are ionized — plasma is the dominant visible phase.",
      },
    ],
  },
]
