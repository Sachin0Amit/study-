import type { SectionContent } from "../library"

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 41: Conduction of Electricity in Solids (HRW 1252–1275), 3 sections.
// ============================================================================

export const hallCh41Content: SectionContent[] = [
  // ------------------------------------------------------------------ 41.1
  {
    sectionId: "hall-ch41-s1",
    readingTime: 6,
    intro: "A copper coin carries about $10^{23}$ mobile electrons per cubic centimeter, yet quantum mechanics — not classical statistics — governs how they move. Nearly all are locked below the Fermi level by the exclusion principle; only a razor-thin population near the top can respond to an electric field. The result is a picture of metallic conduction that is at once fully quantum and unexpectedly simple.",
    objectives: [
      "Compute the number of conduction electrons, Fermi energy and Fermi speed in a metal such as copper",
      "Apply the Fermi–Dirac occupancy probability, including its value of 1/2 at the Fermi energy",
      "Relate resistivity to the mean free time between collisions and estimate that time for copper",
    ],
    concepts: [
      {
        term: "Conduction electrons and the Fermi energy",
        kind: "definition",
        statement: "In a metal the valence electrons detach and roam the whole crystal; copper donates about one electron per atom, giving $n = 8.49\\times10^{28}\\ \\mathrm{electrons/m^3}$. Because of the Pauli principle they fill the available states up to the **Fermi energy** $E_F$ — for copper $7.0\\ \\mathrm{eV}$ — even at absolute zero.",
        detail: "The Fermi speed, $v_F = \\sqrt{2E_F/m_e} = 1.57\\times10^{6}\\ \\mathrm{m/s}$, is the speed of the topmost electrons; the entire metal is a packed arena of electrons flying at speeds up to one-hundredth of the speed of light, with zero net current until a field biases their directions.",
      },
      {
        term: "Occupancy probability (Fermi–Dirac)",
        kind: "law",
        statement: "The probability that a state of energy $E$ is occupied is $$P(E) = \\frac{1}{e^{(E-E_F)/k_BT}+1}.$$ At $T = 0$ it is a step function ($P = 1$ below $E_F$, $0$ above); at any temperature $P(E_F) = 1/2$ exactly, and only states within a few $k_BT$ (0.026 eV at room temperature) of $E_F$ have intermediate occupancy.",
        detail: "Raising copper to 1000 K rearranges the occupancy of only a $\\sim$0.1 eV sliver out of 7 eV — thermal arguments barely dent the Fermi sea, which is why the electron gas behaves nothing like a classical gas.",
      },
      {
        term: "Density of states",
        kind: "insight",
        statement: "The number of electron states available below energy $E$ grows as $E^{3/2}$, so the density of states per unit energy grows as $E^{1/2}$: the states thin out as you climb. The total number of conduction electrons is the integral $\\int_0^{E_F} n(E)P(E)\\,dE$ — the area under a curve that the exclusion principle forces the electrons to fill from the bottom.",
        detail: "This state counting, not any force, is why electrons at the top of the pile move fastest and carry the current: in an applied field the occupations near $E_F$ shift like cars in the top row of a crowded lot.",
      },
      {
        term: "Resistivity from collision time",
        kind: "method",
        statement: "Only the Fermi-level electrons can gain energy from the field, and they are continually scattered by lattice vibrations and imperfections. With mean free time $\\tau$ between collisions, the drift is $v_d = a\\tau = (eE/m_e)\\tau$, giving $$\\rho = \\frac{m_e}{ne^2\\tau}.$$ The mean free path is then $\\lambda = v_F\\tau$.",
        detail: "Because $v_F$ is enormous, $\\lambda$ is long: copper at room temperature gives $\\tau \\approx 2.5\\times10^{-14}\\ \\mathrm{s}$ and $\\lambda \\approx 39\\ \\mathrm{nm}$ — about 150 atomic spacings, far longer than any classical picture of electron 'billiards' would allow.",
      },
      {
        term: "The Electrical Properties of Metals: solution protocol",
        kind: "method",
        statement: "**Solve The Electrical Properties of Metals problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is bands, doping and the $p$-$n$ junction; the working equation is $\\sigma = ne\\mu$, $n$-type (donors) and $p$-type (acceptors), diode rectification; every substitution must carry its units so the final unit ($\\text{m}^{-3}$ and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $n\\sim 10^{28}\\ \\text{m}^{-3}$ (Cu); Si gap $\\sim 1.1\\ \\text{eV}$; band picture near $300\\ \\text{K}$; doping $10^{15}$--$10^{18}\\ \\text{cm}^{-3}$.",
      },
    ],
    examples: [
      {
        title: "Collision time and mean free path in copper",
        problem: "Copper has $n = 8.49\\times10^{28}\\ \\mathrm{m^{-3}}$ and resistivity $1.69\\times10^{-8}\\ \\Omega\\cdot\\mathrm{m}$ at room temperature. Using $E_F = 7.0\\ \\mathrm{eV}$, find $v_F$, the collision time $\\tau$, and the mean free path.",
        steps: [
          { label: "Fermi speed", text: "$v_F = \\sqrt{2E_F/m_e} = \\sqrt{2(7.0)(1.602\\times10^{-19})/9.11\\times10^{-31}} = 1.57\\times10^{6}\\ \\mathrm{m/s}$." },
          { label: "Solve for tau", text: "From $\\rho = m_e/(ne^2\\tau)$: $\\tau = m_e/(ne^2\\rho) = \\frac{9.11\\times10^{-31}}{(8.49\\times10^{28})(1.602\\times10^{-19})^2(1.69\\times10^{-8})}$." },
          { label: "Numbers", text: "Denominator: $(8.49\\times10^{28})(2.566\\times10^{-38})(1.69\\times10^{-8}) = 3.68\\times10^{-17}$; so $\\tau = 2.47\\times10^{-14}\\ \\mathrm{s}$." },
          { label: "Mean free path", text: "$\\lambda = v_F\\tau = (1.57\\times10^{6})(2.47\\times10^{-14}) = 3.9\\times10^{-8}\\ \\mathrm{m} \\approx 39\\ \\mathrm{nm}$." },
        ],
        result: "$\\tau = 2.5\\times10^{-14}\\ \\mathrm{s}$ and $\\lambda \\approx 39\\ \\mathrm{nm}$ — an electron at the Fermi surface crosses ~150 atoms between scatterings.",
      },
      {
        title: "The Electrical Properties of Metals: conductivity check",
        problem: "Copper has $n \\approx 10^{28}\\ \\text{m}^{-3}$ and mobility $\\mu \\approx 0.0043\\ \\text{m}^2/\\text{V}\\cdot\\text{s}$. Estimate $\\sigma = ne\\mu$.",
        steps: [
          { label: "Substitute", text: "$\\sigma = 10^{28}\\times 1.60\\times 10^{-19}\\times 0.0043 = 6.89\\times 10^{+6}\\ \\text{S/m}$." },
          { label: "Resistivity", text: "$\\rho = 1/\\sigma \\approx 1.45\\times 10^{-7}\\ \\Omega\\cdot\\text{m}$ (textbook $1.7\\times 10^{-8}$)." },
        ],
        result: "$\\sigma \\approx 6.89\\times 10^{+6}\\ \\text{S/m}$.",
      },
    ],
    keyTakeaways: [
      "Conduction electrons fill states up to the Fermi energy (7.0 eV in copper), moving at the Fermi speed ~10⁶ m/s even at T = 0.",
      "The Fermi–Dirac factor $P(E) = 1/(e^{(E-E_F)/k_BT}+1)$ equals 1/2 at $E_F$ and deviates from 0 or 1 only within a few $k_BT$.",
      "Resistivity is $\\rho = m_e/ne^2\\tau$ with the mean free path set by $v_F\\tau \\approx 39$ nm in room-temperature copper.",
    ],
    quiz: [
      { q: "The occupancy probability P(E) at $E = E_F$ equals", options: ["0", "1/4", "1/2", "1"], answer: 2, explanation: "At the Fermi energy the exponential is $e^0 = 1$, so P = 1/(1+1) = 1/2 at every temperature." },
      { q: "Raising a metal's temperature from 300 K to 1000 K changes the number of electrons affected by thermal rearrangement", options: ["all of them, drastically", "only a thin shell within a few $k_BT$ of $E_F$", "none, metals are unaffected by temperature", "exactly the electrons in the ground state"], answer: 1, explanation: "$k_BT$ is ~0.08 eV at 1000 K versus $E_F = 7$ eV; the deep Fermi sea is frozen out of thermal physics by the exclusion principle." },
      { q: "In the resistivity formula ρ = m/(ne²τ), the quantity τ is", options: ["the period of the lattice vibration", "the mean free time between collisions for an electron near $E_F$", "the time to cross the sample", "the Fermi energy divided by kT"], answer: 1, explanation: "Tau sets how long the field accelerates an electron before a scattering randomizes its drift; rho = m/(ne² tau) is Drude with quantum speeds." },
      { q: "The Fermi speed in copper is about 1.6×10⁶ m/s. The drift speed of electrons in a typical current-carrying wire is", options: ["about the same", "about 10³ m/s", "about 10⁻⁴ m/s", "zero because electrons cannot move"], answer: 2, explanation: "Drift speeds are millimeters per second or less: the field only slightly biases the enormous random Fermi motion." },
    ],
  },

  // ------------------------------------------------------------------ 41.2
  {
    sectionId: "hall-ch41-s2",
    readingTime: 6,
    intro: "Bring atoms together into a crystal and their discrete levels smear into bands separated by forbidden gaps. Whether the top band is partly full, completely full with a huge gap, or full with a tiny gap is the whole distinction between metal, insulator and semiconductor. Doping — swapping in a few foreign atoms per million — then lets us engineer a semiconductor's carriers like an ingredient list.",
    objectives: [
      "Explain how energy bands and gaps arise when isolated atoms condense into a solid",
      "Classify solids as metal, insulator or semiconductor from their band structures",
      "Predict the carrier type produced by donor and acceptor doping, and estimate carrier densities",
    ],
    concepts: [
      {
        term: "Energy bands and gaps",
        kind: "definition",
        statement: "When $N$ atoms are brought within a lattice spacing of one another, each atomic level splits into $N$ closely spaced levels — a **band** of effectively continuous allowed energies — separated from the neighboring band by a **gap** of forbidden energies. For copper-size $N \\sim 10^{29}$, the level spacing within a band is ~10⁻²³ eV: bands behave as continua.",
        detail: "The valence electrons of the original atoms fill a valence band; the next higher band is the conduction band; between them lies the gap $E_g$ that no electron state may occupy.",
      },
      {
        term: "Metal, insulator, semiconductor",
        kind: "insight",
        statement: "A **metal** has a partly filled band (or overlapping bands), so empty states sit directly above the Fermi level and electrons accelerate freely. An **insulator** has a filled valence band with a huge gap ($\\sim 6\\ \\mathrm{eV}$, as in diamond) to an empty conduction band. A **semiconductor** has the same layout but a small gap — silicon's $E_g = 1.1\\ \\mathrm{eV}$, germanium's $0.67\\ \\mathrm{eV}$ — so thermal agitation occasionally lifts an electron across.",
        detail: "That single number, the gap, spans the difference: in pure silicon at room temperature only about one atom in $10^{12}$ contributes a conduction electron, giving carrier densities near $10^{16}\\ \\mathrm{m^{-3}}$ versus copper's $10^{29}$.",
      },
      {
        term: "Intrinsic semiconductors and holes",
        kind: "definition",
        statement: "In a pure (intrinsic) semiconductor, every electron promoted to the conduction band leaves behind a vacant state in the valence band — a **hole**, which behaves as a mobile positive charge: as neighboring electrons shuffle into the vacancy, the hole drifts opposite to electron flow. Equal numbers, $n = p$, carry the current.",
        detail: "Holes dominate the conductivity of certain materials despite being absences: their effective mass and mobility differ from electrons', and in doped samples the sign of the Hall voltage reveals which carrier is in charge.",
      },
      {
        term: "Donor and acceptor doping",
        kind: "method",
        statement: "Replace about one silicon atom in a million with phosphorus (group V) and the fifth, loosely bound valence electron is easily ionized into the conduction band: a **donor** makes **n-type** material with electrons as majority carriers. Replace with boron (group III) and the missing bond sucks an electron out of the valence band, creating a mobile hole: an **acceptor** makes **p-type** material.",
        detail: "Donor and acceptor levels sit only ~0.01–0.05 eV from their respective bands, so at room temperature the dopant is essentially fully ionized — carrier density is set by the recipe, not by thermal chance, and it is independent of temperature over a wide range.",
      },
      {
        term: "Semiconductors and Doping: solution protocol",
        kind: "method",
        statement: "**Solve Semiconductors and Doping problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is bands, doping and the $p$-$n$ junction; the working equation is $\\sigma = ne\\mu$, $n$-type (donors) and $p$-type (acceptors), diode rectification; every substitution must carry its units so the final unit ($\\text{m}^{-3}$ and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $n\\sim 10^{28}\\ \\text{m}^{-3}$ (Cu); Si gap $\\sim 1.1\\ \\text{eV}$; band picture near $300\\ \\text{K}$; doping $10^{15}$--$10^{18}\\ \\text{cm}^{-3}$.",
      },
    ],
    figures: [
      {
        caption: "Band diagrams at T ≈ 0 for a metal, an insulator and a semiconductor. The metal's uppermost band is only partly filled: vacant states sit immediately above $E_F$ and the electrons respond to any field. The insulator's valence band is full and a gap of ~6 eV (diamond) blocks promotion. The semiconductor has the same structure with a ~1 eV gap, so thermal energy now and then promotes an electron (filled circle) into the conduction band, leaving a mobile hole (open circle) behind.",
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Band diagrams of metal, insulator and semiconductor"><rect x="0" y="0" width="720" height="300" fill="currentColor" opacity="0.03"/><circle cx="505" cy="14" r="4" fill="currentColor"/><text x="513" y="19" font-size="12" fill="currentColor">electron</text><circle cx="600" cy="14" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="609" y="19" font-size="12" fill="currentColor">hole</text><line x1="45" y1="260" x2="45" y2="50" stroke="currentColor" stroke-width="1.8"/><polygon points="45,42 41,54 49,54" fill="currentColor"/><text x="37" y="48" text-anchor="end" font-size="13" fill="currentColor">E</text><rect x="62" y="88" width="140" height="172" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-width="1.6"/><rect x="62" y="140" width="140" height="120" fill="currentColor" opacity="0.32"/><line x1="62" y1="140" x2="202" y2="140" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><circle cx="84" cy="153" r="4" fill="currentColor"/><circle cx="112" cy="151" r="4" fill="currentColor"/><circle cx="140" cy="154" r="4" fill="currentColor"/><circle cx="168" cy="152" r="4" fill="currentColor"/><circle cx="96" cy="128" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="130" cy="130" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="164" cy="127" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="206" y="145" font-size="12" fill="currentColor">EF</text><text x="132" y="76" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.8">partly filled band</text><rect x="282" y="200" width="140" height="60" fill="currentColor" opacity="0.32" stroke="currentColor" stroke-width="1.6"/><rect x="282" y="40" width="140" height="60" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-width="1.6"/><line x1="352" y1="100" x2="352" y2="200" stroke="currentColor" stroke-width="1.5"/><polygon points="352,100 348,110 356,110" fill="currentColor"/><polygon points="352,200 348,190 356,190" fill="currentColor"/><text x="352" y="155" text-anchor="middle" font-size="12.5" fill="currentColor">gap = 6 eV</text><text x="352" y="235" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.8">filled band</text><text x="352" y="76" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.8">empty band</text><rect x="502" y="175" width="140" height="85" fill="currentColor" opacity="0.28" stroke="currentColor" stroke-width="1.6"/><rect x="502" y="40" width="140" height="70" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-width="1.6"/><line x1="572" y1="110" x2="572" y2="175" stroke="currentColor" stroke-width="1.5"/><polygon points="572,110 568,120 576,120" fill="currentColor"/><polygon points="572,175 568,165 576,165" fill="currentColor"/><text x="572" y="148" text-anchor="middle" font-size="12.5" fill="currentColor">gap = 1 eV</text><path d="M 540 170 Q 555 130 580 122" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="584,121 572,126 578,132" fill="currentColor"/><circle cx="528" cy="181" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="552" cy="183" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="576" cy="182" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="524" cy="116" r="4" fill="currentColor"/><circle cx="548" cy="114" r="4" fill="currentColor"/><circle cx="572" cy="116" r="4" fill="currentColor"/><text x="132" y="288" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">metal</text><text x="352" y="288" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">insulator</text><text x="572" y="288" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">semiconductor</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Carrier boost from phosphorus doping",
        problem: "Pure silicon has about $5\\times10^{28}\\ \\mathrm{atoms/m^3}$ and roughly $5\\times10^{16}$ thermally generated conduction electrons per m³ at room temperature. If one Si atom in $10^{6}$ is replaced by phosphorus, find the new majority-carrier density and the factor by which it exceeds the intrinsic value.",
        steps: [
          { label: "Donor density", text: "$n_d = (5\\times10^{28})/10^{6} = 5\\times10^{22}\\ \\mathrm{m^{-3}}$." },
          { label: "Ionization", text: "Phosphorus's donor level lies only ~0.045 eV below the conduction band, so at room temperature ($k_BT = 0.026\\ \\mathrm{eV}$) virtually every donor is ionized: $n \\approx 5\\times10^{22}\\ \\mathrm{m^{-3}}$." },
          { label: "Comparison", text: "Enhancement $= 5\\times10^{22}/5\\times10^{16} = 10^{6}$ — a million-fold increase in carriers from a one-in-a-million substitution." },
          { label: "Conductivity", text: "Since $\\sigma \\propto n$, the resistivity falls by the same factor: from $\\sim 2\\times10^{3}\\ \\Omega\\cdot\\mathrm{m}$ (pure Si) to $\\sim 2\\times10^{-3}\\ \\Omega\\cdot\\mathrm{m}$ — still far above copper's $1.7\\times10^{-8}$." },
        ],
        result: "The doped crystal is strongly n-type with $n \\approx 5\\times10^{22}\\ \\mathrm{m^{-3}}$, a $10^{6}$-fold carrier enhancement — the lever that makes semiconductor devices possible.",
      },
      {
        title: "Semiconductors and Doping: conductivity check",
        problem: "Copper has $n \\approx 10^{28}\\ \\text{m}^{-3}$ and mobility $\\mu \\approx 0.0043\\ \\text{m}^2/\\text{V}\\cdot\\text{s}$. Estimate $\\sigma = ne\\mu$.",
        steps: [
          { label: "Substitute", text: "$\\sigma = 10^{28}\\times 1.60\\times 10^{-19}\\times 0.0043 = 6.89\\times 10^{+6}\\ \\text{S/m}$." },
          { label: "Resistivity", text: "$\\rho = 1/\\sigma \\approx 1.45\\times 10^{-7}\\ \\Omega\\cdot\\text{m}$ (textbook $1.7\\times 10^{-8}$)." },
        ],
        result: "$\\sigma \\approx 6.89\\times 10^{+6}\\ \\text{S/m}$.",
      },
    ],
    keyTakeaways: [
      "Atomic levels smear into bands with forbidden gaps; the filling pattern of the top band determines whether a solid is metal, insulator or semiconductor.",
      "The gap size separates the classes: ~0 gap (metal), ~6 eV (insulator), ~1 eV (semiconductor such as Si at 1.1 eV).",
      "Donors (P, As, Sb) donate electrons for n-type; acceptors (B, Al, Ga, In) create holes for p-type — carrier density becomes a design choice.",
    ],
    quiz: [
      { q: "A solid has a completely filled valence band separated by 5.5 eV from an empty conduction band. It is a", options: ["metal", "insulator", "semiconductor", "superconductor"], answer: 1, explanation: "A gap of several eV (diamond is 5.5 eV) is far beyond reach of thermal energy — that is the definition of an insulator." },
      { q: "In an intrinsic (pure) semiconductor, the number of conduction electrons equals the number of holes because", options: ["both are supplied equally by impurities", "each electron promoted to the conduction band leaves one hole in the valence band", "holes are real particles created with electrons in pairs by photons only", "the material is metallic"], answer: 1, explanation: "Thermal promotion creates electron-hole pairs together; thus n = p always in the intrinsic case." },
      { q: "Doping silicon with boron (three valence electrons) produces", options: ["n-type material with electrons as majority carriers", "p-type material with holes as majority carriers", "no change in conductivity", "a metal"], answer: 1, explanation: "Boron lacks one bond electron; it accepts one from the valence band, leaving a mobile hole: p-type." },
      { q: "Diamond (Eg = 5.5 eV) is an insulator while silicon (Eg = 1.1 eV) is a semiconductor at room temperature because", options: ["diamond is heavier", "silicon atoms are larger", "thermal energy of ~0.03 eV per particle can occasionally bridge 1.1 eV through the Maxwell tail, but never 5.5 eV in practice", "silicon contains free protons"], answer: 2, explanation: "Promotion relies on the rare energetic tail of the thermal distribution; the exponential $e^{-E_g/2k_BT}$ makes 1.1 eV marginally accessible and 5.5 eV hopeless." },
    ],
  },

  // ------------------------------------------------------------------ 41.3
  {
    sectionId: "hall-ch41-s3",
    readingTime: 7,
    intro: "Join a p-type and an n-type crystal and something remarkable happens at the seam: carriers diffuse across, leave behind a zone of stripped, immobile ions, and set up an internal field that stops further flow. That built-in barrier makes the junction a one-way valve for current — and stacked junctions make the transistor, the switch and amplifier on which all modern electronics is built.",
    objectives: [
      "Describe how the depletion region and its internal field form at a p-n junction",
      "Explain forward and reverse bias in terms of barrier height, and the rectifying current-voltage behavior",
      "Show how junctions emit light (LEDs), detect light (photodiodes) and switch current (MOSFETs)",
    ],
    concepts: [
      {
        term: "The depletion region",
        kind: "definition",
        statement: "At the p-n boundary, majority electrons diffuse from n to p and holes from p to n, where each annihilates. What remains on each side is a **depletion region** stripped of mobile carriers, exposing fixed ions — negative acceptors on the p side, positive donors on the n side — whose charge sets up a built-in field $\\vec E$ pointing from the n side to the p side and a contact potential difference across the junction.",
        detail: "The field exactly cancels further diffusion: the junction reaches equilibrium with a potential barrier of order the gap energy per electron (near 0.7 V worth of band bending for silicon).",
      },
      {
        term: "Forward and reverse bias",
        kind: "law",
        statement: "**Forward bias** (p side positive) lowers the barrier: vast majority-carrier populations flood across and the current grows steeply with voltage. **Reverse bias** (p side negative) raises the barrier: majority flow is suppressed and only the tiny thermally generated minority-carrier drift remains — a current nearly independent of voltage. The junction passes current essentially one way: it is a **rectifier**.",
        detail: "Plotting $I$ against $V$ gives a flat-on-one-side, steep-on-the-other curve; circuits exploit it to turn alternating current into pulsating direct current, and the steepness near threshold is what makes the diode a voltage reference (~0.7 V drop for Si).",
      },
      {
        term: "Light-emitting and light-sensing diodes",
        kind: "insight",
        statement: "In a forward-biased junction made from a direct-gap material, electrons dropping from the conduction band recombine with holes and emit photons of the gap energy: $$\\lambda = \\frac{hc}{E_g}.$$ Conversely, a reverse-biased junction illuminated with photons above $E_g$ generates electron-hole pairs swept apart by the barrier field, producing a photocurrent: a **photodiode** light detector.",
        detail: "Choosing the material chooses the color: GaAs ($E_g \\approx 1.4\\ \\mathrm{eV}$) radiates in the infrared, GaAsP mixtures span red to yellow, and InGaN alloys (2.3–2.8 eV) deliver green and blue — the 2014 Nobel trio's blue LED, which completed white-light sources.",
      },
      {
        term: "The MOSFET",
        kind: "method",
        statement: "The metal-oxide-semiconductor field-effect transistor is a sandwich in which a gate electrode, insulated from the silicon by a thin oxide layer, capacitively controls a channel between source and drain. Gate voltage above threshold attracts a conducting inversion layer (or repels it), switching the source-drain current on or off with **no gate current at all** — the transistor is an amplifier with enormous input impedance.",
        detail: "Because the gate draws essentially nothing, MOSFETs can be packed by the billions with picowatt switching energies; a modern processor is one monolithic MOSFET network, with logic performed by gate voltages steering channels.",
      },
      {
        term: "The p-n Junction and the Transistor: solution protocol",
        kind: "method",
        statement: "**Solve The p-n Junction and the Transistor problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is bands, doping and the $p$-$n$ junction; the working equation is $\\sigma = ne\\mu$, $n$-type (donors) and $p$-type (acceptors), diode rectification; every substitution must carry its units so the final unit ($\\text{m}^{-3}$ and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $n\\sim 10^{28}\\ \\text{m}^{-3}$ (Cu); Si gap $\\sim 1.1\\ \\text{eV}$; band picture near $300\\ \\text{K}$; doping $10^{15}$--$10^{18}\\ \\text{cm}^{-3}$.",
      },
    ],
    figures: [
      {
        caption: "A p-n junction at equilibrium. Holes (open circles) dominate the p side and electrons (filled circles) the n side; both have diffused away from the boundary, leaving a depletion region of immobile ionized dopants — negative acceptors on the p side, positive donors on the n side. The exposed charge creates the built-in field $\\vec E$ pointing from the positive donors to the negative acceptors (from n toward p), which opposes further diffusion and establishes the contact potential that a forward bias must overcome.",
        svg: `<svg viewBox="0 0 720 320" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="p-n junction with depletion region"><rect x="0" y="0" width="720" height="320" fill="currentColor" opacity="0.03"/><text x="360" y="24" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">A p-n junction and its depletion region</text><text x="160" y="66" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">p side (holes majority)</text><text x="360" y="66" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.75">depletion region</text><text x="560" y="66" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.85">n side (electrons majority)</text><rect x="40" y="80" width="640" height="160" fill="none" stroke="currentColor" stroke-width="2"/><line x1="280" y1="80" x2="280" y2="240" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 5"/><line x1="440" y1="80" x2="440" y2="240" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 5"/><circle cx="82" cy="112" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="132" cy="142" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="92" cy="182" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="172" cy="112" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="212" cy="152" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="152" cy="202" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="222" cy="202" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="112" cy="222" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="482" cy="112" r="5" fill="currentColor"/><circle cx="532" cy="142" r="5" fill="currentColor"/><circle cx="492" cy="182" r="5" fill="currentColor"/><circle cx="572" cy="112" r="5" fill="currentColor"/><circle cx="612" cy="152" r="5" fill="currentColor"/><circle cx="552" cy="202" r="5" fill="currentColor"/><circle cx="622" cy="202" r="5" fill="currentColor"/><circle cx="462" cy="222" r="5" fill="currentColor"/><circle cx="602" cy="222" r="5" fill="currentColor"/><circle cx="306" cy="112" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="306" y="117" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">−</text><circle cx="326" cy="162" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="326" y="167" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">−</text><circle cx="308" cy="212" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="308" y="217" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">−</text><circle cx="406" cy="112" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="406" y="117" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">+</text><circle cx="386" cy="162" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="386" y="167" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">+</text><circle cx="408" cy="212" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="408" y="217" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">+</text><text x="316" y="105" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.6">acceptor ions</text><text x="398" y="105" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.6">donor ions</text><line x1="420" y1="270" x2="300" y2="270" stroke="currentColor" stroke-width="2.6"/><polygon points="292,270 305,264 305,276" fill="currentColor"/><text x="360" y="292" text-anchor="middle" font-size="13" fill="currentColor">built-in field E points from n toward p</text><circle cx="70" cy="305" r="5" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="82" y="310" font-size="12" fill="currentColor">hole</text><circle cx="135" cy="305" r="4.5" fill="currentColor"/><text x="146" y="310" font-size="12" fill="currentColor">electron</text><text x="215" y="310" font-size="12" fill="currentColor">circled minus: fixed acceptor</text><text x="435" y="310" font-size="12" fill="currentColor">circled plus: fixed donor</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Color of a blue LED",
        problem: "An InGaN blue LED is built from material with gap $E_g = 2.75\\ \\mathrm{eV}$. Find the emitted wavelength and the approximate forward-bias voltage needed.",
        steps: [
          { label: "Photon energy", text: "Recombination across the gap emits $E = E_g = 2.75\\ \\mathrm{eV}$ (the photon may lose a little to thermal tailing, but the gap sets the scale)." },
          { label: "Wavelength", text: "$\\lambda = hc/E = 1240\\ \\mathrm{eV\\cdot nm}/2.75\\ \\mathrm{eV} = 451\\ \\mathrm{nm}$ — blue." },
          { label: "Forward voltage", text: "Each charge crossing the junction must climb the band bending, so the diode turns on near $V \\approx E_g/e = 2.75\\ \\mathrm{V}$ — blue LEDs need roughly double the forward voltage of red ($\\approx 1.8\\ \\mathrm{eV}$) ones." },
          { label: "Check with red", text: "A red GaAsP LED with $E_g = 1.9\\ \\mathrm{eV}$: $\\lambda = 1240/1.9 = 653\\ \\mathrm{nm}$ ✓." },
        ],
        result: "$\\lambda = 451\\ \\mathrm{nm}$ (blue) with a turn-on near 2.75 V — the wider the gap, the bluer the light and the higher the forward voltage.",
      },
      {
        title: "The p-n Junction and the Transistor: conductivity check",
        problem: "Copper has $n \\approx 10^{28}\\ \\text{m}^{-3}$ and mobility $\\mu \\approx 0.0043\\ \\text{m}^2/\\text{V}\\cdot\\text{s}$. Estimate $\\sigma = ne\\mu$.",
        steps: [
          { label: "Substitute", text: "$\\sigma = 10^{28}\\times 1.60\\times 10^{-19}\\times 0.0043 = 6.89\\times 10^{+6}\\ \\text{S/m}$." },
          { label: "Resistivity", text: "$\\rho = 1/\\sigma \\approx 1.45\\times 10^{-7}\\ \\Omega\\cdot\\text{m}$ (textbook $1.7\\times 10^{-8}$)." },
        ],
        result: "$\\sigma \\approx 6.89\\times 10^{+6}\\ \\text{S/m}$.",
      },
    ],
    keyTakeaways: [
      "Carrier diffusion across a p-n boundary leaves a depletion region of fixed ions whose field sets up the junction's built-in barrier.",
      "Forward bias lowers the barrier and passes large majority current; reverse bias raises it and passes only a tiny minority current — rectification.",
      "Junctions transduce directly: forward bias in a direct-gap crystal emits light with $\\lambda = hc/E_g$ (LEDs), illumination generates photocurrent, and the gated MOSFET channel switches currents with zero gate power.",
    ],
    quiz: [
      { q: "The depletion region of a p-n junction contains", options: ["a high density of free electrons", "a high density of free holes", "immobile ionized acceptors (p side) and donors (n side) but almost no mobile carriers", "a vacuum"], answer: 2, explanation: "Mobile carriers recombine and diffuse away at the boundary, exposing the fixed ionized dopants whose field forms the barrier." },
      { q: "The built-in electric field of an unbiased p-n junction points", options: ["from p to n", "from n to p", "along the junction plane", "it is zero at equilibrium"], answer: 1, explanation: "Positive donor ions sit on the n side, negative acceptors on the p side; the field runs from positive to negative charge, n toward p." },
      { q: "Forward-biasing a diode means", options: ["making the n side positive relative to the p side", "making the p side positive, lowering the barrier so majority carriers flood across", "heating it with light", "increasing the reverse saturation current"], answer: 1, explanation: "p-side-positive bias opposes the contact potential; the barrier thins and the current rises steeply with voltage." },
      { q: "In a MOSFET the gate controls the source-drain current while drawing essentially no current itself because", options: ["the gate is made of copper", "the gate is insulated from the channel by a thin oxide layer and acts only capacitively", "the gate is superconducting", "current flows only during lightning storms"], answer: 1, explanation: "The metal-oxide-semiconductor sandwich couples electrostatically: gate voltage shifts the channel with no dc gate current, giving huge input impedance." },
    ],
  },
]
