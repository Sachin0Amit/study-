import type { SectionContent } from "../library"

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 42: Nuclear Physics (HRW 1276–1308), 8 sections.
// ============================================================================

export const hallCh42Content: SectionContent[] = [
  // ------------------------------------------------------------------ 42.1
  {
    sectionId: "hall-ch42-s1",
    readingTime: 5,
    intro: "In 1911 Rutherford's team fired alpha particles at gold foil a few hundred atoms thick and found that about one in eight thousand came straight back. No pudding of positive charge, however dense, could do that. The rebound demanded that all the positive charge of an atom live in a minute, hard core — the nucleus — a hundred thousand times smaller than the atom itself.",
    objectives: [
      "Contrast Thomson's plum-pudding model with Rutherford\'s nuclear atom and explain what the backscattered alpha particles demanded",
      "Compute the distance of closest approach of an alpha particle to a nucleus and use it to bound the nuclear radius",
      "Summarize the scale hierarchy of nucleus versus atom and its consequences for density",
    ],
    concepts: [
      {
        term: "Rutherford scattering",
        kind: "method",
        statement: "Alpha particles (charge +2e) scatter off the gold nucleus (charge +79e) through pure Coulomb repulsion; for a head-on approach, conservation of energy converts all initial kinetic energy into electrostatic potential energy at the turning point: $$K = \\frac{k(2e)(Ze)}{r_\\mathrm{min}}.$$ The observed head-on rebounds — one in about 8000 — match the Coulomb prediction down to distances that set an upper limit on the nuclear radius.",
        detail: "Because the scattering is Coulombic all the way down to the turning point, deviations from Rutherford's formula at higher alpha energies mark the distance where the alpha actually touches nuclear matter.",
      },
      {
        term: "The nuclear atom",
        kind: "insight",
        statement: "All positive charge and more than 99.9% of the mass of an atom reside in a nucleus of radius about $10^{-14}\\ \\mathrm{m}$, ten thousand times smaller than the atomic radius $\\sim 10^{-10}\\ \\mathrm{m}$. An atom is mostly empty space: if the nucleus were a marble at midfield, the electrons would be a haze of spectators a kilometer away in every direction.",
        detail: "Geiger and Marsden counted the angular distribution; Rutherford's 1911 analysis inverted it into a central charge concentrated within a few times $10^{-14}$ m of gold — the birth of nuclear physics.",
      },
      {
        term: "Scale and density",
        kind: "insight",
        statement: "Compressing the atom's mass into $10^{-14}\\ \\mathrm{m}$ gives nuclear densities near $2\\times10^{17}\\ \\mathrm{kg/m^3}$ — a teaspoon would weigh a billion tonnes. Ordinary matter is empty; the mass we feel is a lattice of specks.",
        detail: "The nucleus achieves this density because the strong force overwhelms Coulomb repulsion at femtometer distances, binding protons and neutrons into a liquid-drop-like ball of essentially constant density (Section 42-8).",
      },
      {
        term: "Discovering the Nucleus: solution protocol",
        kind: "method",
        statement: "**Solve Discovering the Nucleus problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is nuclear size, binding and the exponential decay law; the working equation is $R = r_0A^{1/3}$, $r_0 = 1.2\\ \\text{fm}$, $N = N_0e^{-\\lambda t}$, $T_{1/2} = \\ln 2/\\lambda$; every substitution must carry its units so the final unit (femtometers, becquerels, gray/sieverts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr; $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.",
      },
      {
        term: "Discovering the Nucleus: scales and validity",
        kind: "insight",
        statement: "**Discovering the Nucleus lives at $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr and the textbook model holds while $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Discovering the Nucleus calculation gives seconds when femtometers, becquerels, gray/sieverts demands meters, or a value orders of magnitude beyond $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "How close does a 5.0 MeV alpha get to gold?",
        problem: "An alpha particle with kinetic energy 5.0 MeV approaches a gold nucleus (Z = 79) head-on. Find the distance of closest approach and compare it with the gold nuclear radius.",
        steps: [
          { label: "Set energies equal", text: "At the turning point $K = kq_1q_2/r$: $r_\\mathrm{min} = k(2e)(79e)/K$." },
          { label: "Handy constant", text: "$ke^2 = 1.44\\ \\mathrm{MeV\\cdot fm}$ (with 1 fm = 10⁻¹⁵ m)." },
          { label: "Compute", text: "$r_\\mathrm{min} = \\dfrac{(2)(79)(1.44\\ \\mathrm{MeV\\cdot fm})}{5.0\\ \\mathrm{MeV}} = 45.5\\ \\mathrm{fm} = 4.6\\times10^{-14}\\ \\mathrm{m}$." },
          { label: "Compare", text: "The gold radius is $R = 1.2\\,A^{1/3}\\ \\mathrm{fm} = 1.2(197)^{1/3} \\approx 7.0\\ \\mathrm{fm}$ — the alpha turns back six to seven nuclear radii out, so the Coulomb law holds throughout the encounter." },
        ],
        result: "$r_\\mathrm{min} = 45.5\\ \\mathrm{fm}$, an upper bound on the nuclear size far above the actual 7 fm radius — exactly the consistency Rutherford needed.",
      },
      {
        title: "Discovering the Nucleus: nuclear-size check",
        problem: "Estimate $R = r_0A^{1/3}$ with $r_0 = 1.2\\ \\text{fm}$ for $A = 106$.",
        steps: [
          { label: "Cube root", text: "$106^{1/3} \\approx 4.73$." },
          { label: "Radius", text: "$R \\approx 1.2\\times 4.73 = 5.68\\ \\text{fm}$." },
        ],
        result: "$R \\approx 5.68\\ \\text{fm}$.",
      },
    ],
    keyTakeaways: [
      "Backscattering of alpha particles requires a small, dense, positively charged core; the plum-pudding model cannot produce it.",
      "The closest approach $r_\\mathrm{min} = k(2e)(Ze)/K$ converts alpha energy into a ruler for nuclear size.",
      "The nucleus is ~10⁻¹⁴ m across, 10⁴ times smaller than the atom, with density near 2×10¹⁷ kg/m³.",
    ],
    quiz: [
      { q: "In Rutherford's experiment, the fraction of alpha particles deflected through large angles was about", options: ["1 in 10", "1 in 8000", "half", "essentially zero, none were deflected"], answer: 1, explanation: "Only about 1 in 8000 hit nearly head-on; those rebounds were the evidence for a compact nucleus." },
      { q: "The distance of closest approach calculation for an alpha particle and a nucleus assumes", options: ["the alpha penetrates the nucleus", "all kinetic energy becomes electrostatic potential energy at the turning point", "the electron cloud absorbs energy", "the gold nucleus recoils at light speed"], answer: 1, explanation: "At the turning point the radial speed is zero, so $K = k(2e)(Ze)/r_\\mathrm{min}$ bounds the interaction as purely Coulombic." },
      { q: "Compared with the atom, the nucleus is roughly", options: ["the same size", "one hundred times smaller", "ten thousand times smaller", "one million times larger"], answer: 2, explanation: "10⁻¹⁴ m versus 10⁻¹⁰ m is a factor of 10⁴ — matter is overwhelmingly empty space." },
      { q: "If the alpha-particle energy is doubled, the distance of closest approach", options: ["doubles", "halves", "quadruples", "stays the same"], answer: 1, explanation: "$r_\\mathrm{min}$ is inversely proportional to $K$: 10 MeV alphas get within 23 fm of gold." },
    ],
  },

  // ------------------------------------------------------------------ 42.2
  {
    sectionId: "hall-ch42-s2",
    readingTime: 6,
    intro: "A nucleus is a bound pack of protons and neutrons, and its single most revealing number is the binding energy per nucleon. The curve of that quantity against mass number — rising steeply, peaking at iron, then sagging slowly — is the energy landscape of all nuclear physics: read it left to right and you have fusion, right to left and you have fission.",
    objectives: [
      "Use the notation Z, N, A and the vocabulary of isotopes and nuclides",
      "Compute nuclear radii and mass densities from the $R = 1.2A^{1/3}\\ \\mathrm{fm}$ rule",
      "Calculate total and per-nucleon binding energies from atomic masses and read the binding-energy curve to locate where fission and fusion pay off",
    ],
    concepts: [
      {
        term: "Nuclide notation",
        kind: "notation",
        statement: "A nuclide $^{A}_{Z}X$ has $Z$ protons (defining the element), $N = A - Z$ neutrons, and mass number $A = Z + N$ nucleons. **Isotopes** share Z (¹H, ²H, ³H), **isotones** share N, **isobars** share A. Atomic masses in tables include the electrons, so electron books balance automatically when whole atoms are compared.",
        detail: "Hydrogen's isotopes earn names — protium, deuterium, tritium — and its two heavy isotopes drive fusion energy: deuterium is forever abundant in seawater, tritium must be bred.",
      },
      {
        term: "Nuclear radius and density",
        kind: "law",
        statement: "Charge scattering shows that nuclear volume grows in proportion to A: $$R = r_0 A^{1/3},\\qquad r_0 \\approx 1.2\\ \\mathrm{fm}.$$ Constant density follows immediately — nucleons are packed like an incompressible liquid at $\\rho \\approx 2.3\\times10^{17}\\ \\mathrm{kg/m^3}$, whatever the element.",
        detail: "From ⁴He to ²³⁸U the radius spans only 1.7 to 7.4 fm; the mass deficit that would otherwise weaken heavy nuclei instead gets packed tight.",
      },
      {
        term: "Binding energy",
        kind: "definition",
        statement: "The mass of a nucleus is less than the sum of its parts, and the shortfall is the binding energy: $$\\Delta E_b = (Z m_H + N m_n - M_X)c^2,$$ with $m_H = 1.007825\\ \\mathrm{u}$ the hydrogen atom's mass, $m_n = 1.008665\\ \\mathrm{u}$, and $1\\ \\mathrm{u}c^2 = 931.5\\ \\mathrm{MeV}$.",
        detail: "Using atomic (not bare-nuclear) masses is legitimate because the Z electrons of the neutral atom appear identically on both sides — a bookkeeping gift that removes the electron mass from every calculation.",
      },
      {
        term: "The binding energy per nucleon curve",
        kind: "insight",
        statement: "Dividing $\\Delta E_b$ by $A$ and plotting against A: a steep rise through the light nuclides, a broad maximum of **8.79 MeV/nucleon at ⁵⁶Fe**, a near plateau to the middle of the table, and a slow decline to about 7.6 MeV/nucleon at uranium. Energy is released whenever nucleons move **upward** on this curve — light nuclei fusing, heavy nuclei splitting.",
        detail: "The dip at ⁸Be (7.06 MeV/nucleon) and the double peak at ⁴He (7.07) explain why helium nuclei are the favored ash of both fusion and alpha decay, and the long slow slope beyond iron is why very heavy nuclei are radioactive.",
      },
      {
        term: "Some Nuclear Properties: solution protocol",
        kind: "method",
        statement: "**Solve Some Nuclear Properties problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is nuclear size, binding and the exponential decay law; the working equation is $R = r_0A^{1/3}$, $r_0 = 1.2\\ \\text{fm}$, $N = N_0e^{-\\lambda t}$, $T_{1/2} = \\ln 2/\\lambda$; every substitution must carry its units so the final unit (femtometers, becquerels, gray/sieverts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr; $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.",
      },
    ],
    figures: [
      {
        caption: "Binding energy per nucleon versus mass number A. The curve rises steeply to its maximum of 8.79 MeV/nucleon at ⁵⁶Fe, holds nearly flat across the middle of the table, and falls slowly to 7.57 MeV/nucleon at ²³⁸U. Fission gains energy by sliding leftward down the far slope (A ≈ 240 splitting into two fragments near A ≈ 118); fusion climbs the steep left slope by merging light nuclei.",
        svg: `<svg viewBox="0 0 720 380" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Binding energy per nucleon versus mass number"><rect x="0" y="0" width="720" height="380" fill="currentColor" opacity="0.03"/><line x1="60" y1="330" x2="690" y2="330" stroke="currentColor" stroke-width="2"/><polygon points="690,330 680,326 680,334" fill="currentColor"/><line x1="60" y1="330" x2="60" y2="20" stroke="currentColor" stroke-width="2"/><polygon points="60,20 56,30 64,30" fill="currentColor"/><text x="375" y="372" text-anchor="middle" font-size="14" fill="currentColor">mass number A</text><text x="30" y="175" font-size="14" fill="currentColor" transform="rotate(-90 30 175)">binding energy per nucleon (MeV)</text><line x1="180" y1="330" x2="180" y2="324" stroke="currentColor" stroke-width="1.4"/><text x="180" y="346" text-anchor="middle" font-size="12" fill="currentColor">50</text><line x1="300" y1="330" x2="300" y2="324" stroke="currentColor" stroke-width="1.4"/><text x="300" y="346" text-anchor="middle" font-size="12" fill="currentColor">100</text><line x1="420" y1="330" x2="420" y2="324" stroke="currentColor" stroke-width="1.4"/><text x="420" y="346" text-anchor="middle" font-size="12" fill="currentColor">150</text><line x1="540" y1="330" x2="540" y2="324" stroke="currentColor" stroke-width="1.4"/><text x="540" y="346" text-anchor="middle" font-size="12" fill="currentColor">200</text><line x1="660" y1="330" x2="660" y2="324" stroke="currentColor" stroke-width="1.4"/><text x="660" y="346" text-anchor="middle" font-size="12" fill="currentColor">250</text><line x1="56" y1="260" x2="690" y2="260" stroke="currentColor" stroke-width="0.8" opacity="0.35"/><text x="52" y="264" text-anchor="end" font-size="12" fill="currentColor">2</text><line x1="56" y1="190" x2="690" y2="190" stroke="currentColor" stroke-width="0.8" opacity="0.35"/><text x="52" y="194" text-anchor="end" font-size="12" fill="currentColor">4</text><line x1="56" y1="120" x2="690" y2="120" stroke="currentColor" stroke-width="0.8" opacity="0.35"/><text x="52" y="124" text-anchor="end" font-size="12" fill="currentColor">6</text><line x1="56" y1="50" x2="690" y2="50" stroke="currentColor" stroke-width="0.8" opacity="0.35"/><text x="52" y="54" text-anchor="end" font-size="12" fill="currentColor">8</text><polyline points="62,330 65,291 70,83 89,61 98,51 108,49 127,34 194,22 300,29 396,38 492,45 559,57 631,68" fill="none" stroke="currentColor" stroke-width="2.6"/><circle cx="70" cy="83" r="3.5" fill="currentColor"/><text x="80" y="97" font-size="12" fill="currentColor">4He: 7.07</text><circle cx="194" cy="22" r="4.5" fill="currentColor"/><line x1="194" y1="22" x2="194" y2="330" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/><line x1="60" y1="22" x2="194" y2="22" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/><text x="204" y="20" font-size="12.5" font-weight="600" fill="currentColor">56Fe: 8.79 MeV/nucleon</text><text x="205" y="36" font-size="11.5" fill="currentColor" opacity="0.8">most tightly bound nuclide</text><circle cx="631" cy="68" r="3.5" fill="currentColor"/><text x="612" y="92" text-anchor="middle" font-size="12" fill="currentColor">238U: 7.57</text><line x1="622" y1="78" x2="446" y2="42" stroke="currentColor" stroke-width="2"/><polygon points="438,40 451,37 448,48" fill="currentColor"/><text x="535" y="118" text-anchor="middle" font-size="12" fill="currentColor">fission: slide LEFT down the slope</text><line x1="68" y1="283" x2="86" y2="102" stroke="currentColor" stroke-width="2"/><polygon points="87,94 80,105 92,107" fill="currentColor"/><text x="126" y="255" font-size="12" fill="currentColor">fusion climbs the</text><text x="126" y="271" font-size="12" fill="currentColor">steep left slope</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Binding energy of the alpha particle",
        problem: "Compute the total binding energy and the binding energy per nucleon of ⁴He, using $m_H = 1.007825\\ \\mathrm{u}$, $m_n = 1.008665\\ \\mathrm{u}$, and $M(\\mathrm{He}) = 4.002603\\ \\mathrm{u}$.",
        steps: [
          { label: "Parts", text: "$Z = 2$, $N = 2$: sum of parts $= 2(1.007825) + 2(1.008665) = 2.015650 + 2.017330 = 4.032980\\ \\mathrm{u}$." },
          { label: "Mass defect", text: "$\\Delta m = 4.032980 - 4.002603 = 0.030377\\ \\mathrm{u}$ — the nucleus weighs less than its parts." },
          { label: "Energy", text: "$\\Delta E_b = (0.030377)(931.5\\ \\mathrm{MeV}) = 28.3\\ \\mathrm{MeV}$." },
          { label: "Per nucleon", text: "$28.3/4 = 7.07\\ \\mathrm{MeV/nucleon}$ — remarkably high for so light a nuclide, which is why helium is the standard nuclear ash." },
        ],
        result: "$\\Delta E_b = 28.3\\ \\mathrm{MeV}$, or 7.07 MeV per nucleon — a deep early spike on the binding energy curve.",
      },
      {
        title: "Some Nuclear Properties: nuclear-size check",
        problem: "Estimate $R = r_0A^{1/3}$ with $r_0 = 1.2\\ \\text{fm}$ for $A = 156$.",
        steps: [
          { label: "Cube root", text: "$156^{1/3} \\approx 5.38$." },
          { label: "Radius", text: "$R \\approx 1.2\\times 5.38 = 6.46\\ \\text{fm}$." },
        ],
        result: "$R \\approx 6.46\\ \\text{fm}$.",
      },
    ],
    keyTakeaways: [
      "Nuclides are labeled $^{A}ZX$; nuclear volume and mass number go hand in hand through $R = 1.2A^{1/3}$ fm, giving near-constant density.",
      "Binding energy is the mass defect: $\\Delta E_b = (Zm_H + Nm_n - M)c^2$ with atomic masses.",
      "The BE-per-nucleon curve peaks at 8.79 MeV at ⁵⁶Fe and falls to ~7.6 MeV at uranium — the two slopes of that peak are where fission and fusion draw their energy.",
    ],
    quiz: [
      { q: "In the nuclide ¹³¹I (iodine-131), the numbers of protons and neutrons are", options: ["53 protons, 78 neutrons", "78 protons, 53 neutrons", "131 protons, 53 neutrons", "53 protons, 131 neutrons"], answer: 0, explanation: "Iodine has Z = 53, so N = A − Z = 131 − 53 = 78." },
      { q: "The nuclear radius formula $R = 1.2A^{1/3}\\ \\mathrm{fm}$ implies that nuclear density", options: ["increases with A", "decreases with A", "is approximately the same for all nuclei", "is zero for magic nuclei"], answer: 2, explanation: "Volume proportional to A means fixed density, like an incompressible liquid drop of nucleons at ~2.3e17 kg/m³." },
      { q: "The mass of a ⁴He nucleus compared with two protons plus two neutrons is", options: ["larger by 0.030 u", "smaller by 0.030 u", "identical", "smaller by 4 u"], answer: 1, explanation: "The 0.030377 u defect times c² is the 28.3 MeV binding energy; bound systems always weigh less than their parts." },
      { q: "Why does fission of a uranium nucleus release energy?", options: ["Uranium nuclei are unstable to the strong force", "The fragments have higher binding energy per nucleon than uranium does", "The fragments have lower binding energy per nucleon", "Electrons drop to lower orbits"], answer: 1, explanation: "Moving up the BE/A curve (7.57 → about 8.4 MeV/nucleon for the fragments) releases roughly 200 MeV per fission." },
    ],
  },

  // ------------------------------------------------------------------ 42.3
  {
    sectionId: "hall-ch42-s3",
    readingTime: 6,
    intro: "Radioactivity was discovered by accident in 1896 and explained only by quantum mechanics: an unstable nucleus is a quantum system that decays at random, with a fixed probability per unit time. From that single assumption flows the exponential decay law, the concept of half-life, and the entire technology of dating, tracers and medical isotopes — the mathematics of this section runs through every one of them.",
    objectives: [
      "Apply the exponential decay law $N = N_0e^{-\\lambda t}$ and define the decay constant",
      "Relate half-life, mean life and decay constant, and convert fluently among them",
      "Compute activities in becquerels and curies for a given sample",
    ],
    concepts: [
      {
        term: "The decay law",
        kind: "law",
        statement: "If each nucleus of a nuclide has a fixed probability $\\lambda\\,dt$ of decaying in the next $dt$ — independent of its age, its neighbors and its history — then the number of undecayed nuclei falls exponentially: $$N(t) = N_0e^{-\\lambda t}.$$ $\\lambda$ (the decay constant, in s⁻¹) is the fingerprint of the nuclide.",
        detail: "Radioactive decay is the archetype of a memoryless process: no amount of waiting makes a remaining nucleus 'due' or 'tired' — every nucleus carries a fresh exponential clock (see the masters tier for the full derivation and its statistics).",
      },
      {
        term: "Half-life and mean life",
        kind: "definition",
        statement: "The **half-life** $T_{1/2}$ is the time for half a sample to decay: $$T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}.$$ The **mean life** $\\tau = 1/\\lambda$ is the average lifetime of a nucleus; the two differ by the factor ln 2: $T_{1/2} = \\tau\\ln 2$.",
        detail: "After $n$ half-lives the population is down by $2^{-n}$: 10% survives at 3.32$T_{1/2}$, 1% at 6.64$T_{1/2}$ — a sample never quite vanishes but effectively fades logarithmically.",
      },
      {
        term: "Activity",
        kind: "definition",
        statement: "The decay rate, or activity, is $$R = -\\frac{dN}{dt} = \\lambda N = R_0e^{-\\lambda t},\\qquad R_0 = \\lambda N_0,$$ measured in becquerels (1 Bq = 1 decay/s) or the older curie ($1\\ \\mathrm{Ci} = 3.7\\times10^{10}\\ \\mathrm{Bq}$, the activity of one gram of ²²⁶Ra).",
        detail: "Activity measures decays per second, not energy or danger — a ¹³¹I diagnostic dose and a ²³⁸U pellet can have equal activities and utterly different biological effects (Section 42-7).",
      },
      {
        term: "Radioactive Decay: solution protocol",
        kind: "method",
        statement: "**Solve Radioactive Decay problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is nuclear size, binding and the exponential decay law; the working equation is $R = r_0A^{1/3}$, $r_0 = 1.2\\ \\text{fm}$, $N = N_0e^{-\\lambda t}$, $T_{1/2} = \\ln 2/\\lambda$; every substitution must carry its units so the final unit (femtometers, becquerels, gray/sieverts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr; $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.",
      },
      {
        term: "Radioactive Decay: scales and validity",
        kind: "insight",
        statement: "**Radioactive Decay lives at $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr and the textbook model holds while $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Radioactive Decay calculation gives seconds when femtometers, becquerels, gray/sieverts demands meters, or a value orders of magnitude beyond $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Activity of a microgram of iodine-131",
        problem: "Iodine-131 ($T_{1/2} = 8.04$ days) is used in thyroid therapy. Find the decay constant and the initial activity of a 1.0 μg sample.",
        steps: [
          { label: "Decay constant", text: "$T_{1/2} = 8.04(86\\,400) = 6.95\\times10^{5}\\ \\mathrm{s}$, so $\\lambda = 0.693/6.95\\times10^{5} = 9.97\\times10^{-7}\\ \\mathrm{s^{-1}}$." },
          { label: "Number of nuclei", text: "$N = m/(Am_\\mathrm{u}) = 1.0\\times10^{-9}\\ \\mathrm{kg}/(131 \\times 1.66\\times10^{-27}\\ \\mathrm{kg}) = 4.6\\times10^{15}$." },
          { label: "Activity", text: "$R = \\lambda N = (9.97\\times10^{-7})(4.6\\times10^{15}) = 4.6\\times10^{9}\\ \\mathrm{Bq}$." },
          { label: "Perspective", text: "That is 4.6 GBq from one microgram — nuclear clocks are ferociously active per unit mass compared with chemical rates." },
        ],
        result: "$\\lambda = 1.0\\times10^{-6}\\ \\mathrm{s^{-1}}$ and $R = 4.6\\times10^{9}\\ \\mathrm{Bq}$ (about 0.12 Ci) for 1 μg — the hallmark of a short-lived nuclide.",
      },
      {
        title: "Radioactive Decay: decay-numbers check",
        problem: "Carbon-14 has $T_{1/2} = 5730\\ \\text{yr}$. Starting from $10^{12}$ nuclei, how many remain after $5730\\ \\text{yr}$?",
        steps: [
          { label: "Constant", text: "$\\lambda = \\ln 2/5730 = 1.21\\times 10^{-4}/\\text{yr}$." },
          { label: "Exponent", text: "$N = 10^{12}e^{-1.21\\times 10^{-4}\\times 5730} = 10^{12}\\times 0.5$." },
          { label: "Remain", text: "$N \\approx 5.00\\times 10^{+11}$ nuclei." },
        ],
        result: "$N \\approx 5.00\\times 10^{+11}$ ($50$\\%$).",
      },
    ],
    keyTakeaways: [
      "Constant decay probability per nucleus gives $N = N_0e^{-\\lambda t}$; the decay constant λ is intrinsic to the nuclide.",
      "$T_{1/2} = \\ln2/\\lambda$ and $\\tau = 1/\\lambda$ differ by the factor 0.693.",
      "Activity $R = \\lambda N$ follows the same exponential as the population itself and is measured in Bq (or Ci = 3.7×10¹⁰ Bq).",
    ],
    quiz: [
      { q: "A sample has activity 800 Bq and half-life 10 days. After 30 days its activity is", options: ["400 Bq", "200 Bq", "100 Bq", "50 Bq"], answer: 2, explanation: "30 days = 3 half-lives: 800 → 400 → 200 → 100 Bq." },
      { q: "The mean life τ of a radioactive nuclide, compared with its half-life, is", options: ["equal to it", "shorter by ln 2", "longer by the factor 1/ln 2 ≈ 1.44", "always exactly one year"], answer: 2, explanation: "$T_{1/2} = \\tau\\ln 2$, so $\\tau = T_{1/2}/0.693 \\approx 1.44\\,T_{1/2}$ — the exponential's long tail raises the average." },
      { q: "Two nuclides have equal numbers of atoms but different decay constants. The one with larger λ has", options: ["shorter half-life and larger activity", "longer half-life and smaller activity", "the same activity", "no exponential decay"], answer: 0, explanation: "Both $R = \\lambda N$ and $1/T_{1/2}$ scale with $\\lambda$: fast decayers are hot but brief." },
      { q: "The becquerel is defined as", options: ["one calorie of absorption per hour", "one nuclear decay per second", "3.7×10¹⁰ decays per second", "one joule per kilogram"], answer: 1, explanation: "1 Bq = 1 s⁻¹; the curie is 3.7e10 Bq, and the joule-per-kilogram unit is the gray, a dose unit." },
    ],
    depth: [
      {
        tier: "masters",
        title: "The decay law, derived and dissected",
        blocks: [
          {
            kind: "para",
            heading: "The one assumption",
            body: "Every result of this section flows from a single physical hypothesis: a nucleus of a given nuclide decays with probability $\\lambda\\,dt$ in the interval $dt$, the same for every nucleus, the same at every moment, unaffected by how long that nucleus has already existed. Quantum mechanically the nucleus sits in a quasi-stationary state whose small coupling to the continuum of final states gives, via Fermi's golden rule, a transition rate $\\lambda = \\tfrac{2\\pi}{\\hbar}|\\langle f|H'|i\\rangle|^2\\rho(E_f)$ that is constant because the state is stationary to excellent approximation. Decay has no memory, and no mechanism can 'tickle' a nucleus to make it decay sooner.",
          },
          {
            kind: "derivation",
            heading: "The exponential law",
            body: "Let $N(t)$ be the number of surviving nuclei. In $dt$ the expected number of decays is $dN = -\\lambda N\\,dt$ (negative because $N$ falls). Dividing by $N\\,dt$ and integrating, $$\\int_{N_0}^{N}\\frac{dN}{N} = -\\lambda\\int_0^t dt' \\;\\Longrightarrow\\; \\ln\\frac{N}{N_0} = -\\lambda t \\;\\Longrightarrow\\; N(t) = N_0e^{-\\lambda t}.$$ Equivalently the probability that one given nucleus survives to $t$ is $P(t) = e^{-\\lambda t}$, and the probability density that it decays at $t$ is the hazard times the survival: $f(t) = \\lambda e^{-\\lambda t}$.",
          },
          {
            kind: "derivation",
            heading: "Half-life and mean life",
            body: "Setting $N = N_0/2$ gives $e^{-\\lambda T_{1/2}} = 1/2$, so $T_{1/2} = \\ln2/\\lambda$. The mean life comes from averaging $t$ over the decay-time density: $$\\tau = \\int_0^\\infty t\\,\\lambda e^{-\\lambda t}\\,dt = \\frac{1}{\\lambda},$$ where the integral is one integration by parts ($\\int te^{-\\lambda t}dt = -(t/\\lambda + 1/\\lambda^2)e^{-\\lambda t}$, and both boundary terms vanish). Hence $T_{1/2} = \\tau\\ln 2$: a half-life is 69% of a mean life, the exponential tail being longer than the median. After one mean life the population is $N_0/e \\approx 0.368N_0$.",
          },
          {
            kind: "theorem",
            heading: "Specific activity of a pure nuclide",
            body: "A sample of pure nuclide $A$ (mass number $A$, atomic mass $\\approx A$ u) with mass $m$ carries $N = (m/A)N_A$ nuclei, so its activity is $$R = \\lambda N = \\frac{m N_A}{A}\\,\\lambda.$$ Invert it and any measured activity becomes a mass: for ¹³¹I, $\\lambda = 9.97\\times10^{-7}\\ \\mathrm{s^{-1}}$ gives $R/m = \\lambda N_A/A = (9.97\\times10^{-7})(6.02\\times10^{23})/131 = 4.6\\times10^{15}\\ \\mathrm{Bq/g}$ — one gram of pure iodine-131 is a 4.6-petabecquerel source, and the diagnostic microgram of the worked example is exactly this number scaled down by 10⁶.",
          },
          {
            kind: "derivation",
            heading: "Counting statistics",
            body: "Whether a given nucleus decays within a window $t$ is a Bernoulli trial with $p = 1 - e^{-\\lambda t}$, so $N$ independent nuclei give a binomial distribution with variance $N_0p(1-p)$. For small $p$ (short window or long half-life) the binomial collapses to the Poisson limit in which the number of counts $C$ in time $t$ fluctuates with $\\sigma_C = \\sqrt{\\bar C}$: counting 10,000 decays pins the rate to 1%, while 100 counts leave ±10%. This $1/\\sqrt{C}$ law is the price of all nuclear measurement — including the statistical noise visible in every medical scan.",
          },
          {
            kind: "remark",
            heading: "Why the exponential is unique",
            body: "The exponential is the only continuous memoryless distribution: if survival to $t_1 + t_2$ equals survival to $t_1$ times survival to $t_2$ from $t_1$ — that is, if age never matters — then $P(t+s) = P(t)P(s)$, whose only continuous solution is $P = e^{-\\lambda t}$. This is exactly why nuclei show no wear: the deep quantum state is identical at every instant, so 'aging' has no physical hook to grip. It is also why half-lives spanning 10²⁵ (tellurium-128 to polonium-214) can share one functional form.",
          },
          {
            kind: "application",
            heading: "Isotope logistics at the hospital",
            body: "Technetium-99m, the workhorse of nuclear imaging, has $T_{1/2} = 6.0\\ \\mathrm{h}$. A hospital that draws 4.0 GBq from its Monday-morning generator and uses nothing until Friday morning, 96 h later, has 16 half-lives of decay: the remaining activity is $4.0\\ \\mathrm{GBq}/2^{16} = 4.0\\ \\mathrm{GBq}/65\\,536 \\approx 61\\ \\mathrm{kBq}$ — essentially gone, which is why generators are delivered weekly and why short-lived isotopes must be made near where they are used. The same arithmetic, run on ¹⁴C after an organism dies, is the entire logic of Section 42-6.",
          },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ 42.4
  {
    sectionId: "hall-ch42-s4",
    readingTime: 5,
    intro: "Alpha decay looks impossible: an alpha particle sits inside the nucleus at an energy far below the Coulomb wall that surrounds it. Classically it can never escape; quantum mechanically it tunnels, and the observed fact that it does — at sharply defined energies and at wildly different rates — is one of the most direct confirmations of barrier penetration.",
    objectives: [
      "Compute the Q value of an alpha decay and explain why Q > 0 is required",
      "Distribute the decay energy between the alpha particle and the recoiling daughter",
      "Explain how tunneling through the Coulomb barrier sets the enormous range of alpha half-lives",
    ],
    concepts: [
      {
        term: "The Q value",
        kind: "definition",
        statement: "A decay is energetically allowed only if the products are lighter than the parent: $$Q = (M_X - M_Y - M_\\alpha)c^2 > 0,$$ computed with atomic masses (the electrons cancel: the parent's $Z$ electrons equal the daughter's $Z-2$ plus the alpha's 2). $Q$ is the total kinetic energy shared by the decay products.",
        detail: "For ²³⁸U → ²³⁴Th + α, $Q = [238.050788 - 234.043601 - 4.002603]\\,\\mathrm{u} \\times 931.5 = 4.27\\ \\mathrm{MeV}$ — released as the kinetic energy of the fragments plus a little gamma and internal excitation.",
      },
      {
        term: "Two-body energy split",
        kind: "law",
        statement: "Momentum conservation with an initially stationary parent fixes the split of kinetic energy: the light alpha takes nearly all of it, $$K_\\alpha = Q\\,\\frac{M_Y}{M_Y + M_\\alpha} = Q\\,\\frac{A-4}{A},$$ with the heavy daughter recoiling backward with $K_Y = Q - K_\\alpha$.",
        detail: "For ²³⁸U: $K_\\alpha = 4.27(234/238) = 4.20\\ \\mathrm{MeV}$, matching the measured alpha line; the thorium daughter carries only 0.07 MeV of recoil.",
      },
      {
        term: "Barrier tunneling and half-life",
        kind: "insight",
        statement: "The alpha inside the nucleus sits in a potential well whose wall is the Coulomb barrier $U(r) = k(Z_\\alpha Z_Y e^2)/r$ — several times taller than $Q$. It escapes only by tunneling, with probability $T \\approx e^{-2G}$ governed by the Gamow factor, an integral through the classically forbidden region. Because $T$ is exponentially sensitive to both $Q$ and $Z$, tiny changes in either swing the half-life over dozens of orders of magnitude (the Geiger–Nuttall relation).",
        detail: "Alpha energies span only 4–9 MeV while half-lives span microseconds to 10¹⁰ years — no classical mechanism can produce that; the exponential of a quantum tunneling probability can, and its observed regularities convinced physicists of barrier penetration by 1928 (Gamow, Gurney, Condon).",
      },
      {
        term: "Alpha Decay: solution protocol",
        kind: "method",
        statement: "**Solve Alpha Decay problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is nuclear size, binding and the exponential decay law; the working equation is $R = r_0A^{1/3}$, $r_0 = 1.2\\ \\text{fm}$, $N = N_0e^{-\\lambda t}$, $T_{1/2} = \\ln 2/\\lambda$; every substitution must carry its units so the final unit (femtometers, becquerels, gray/sieverts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr; $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.",
      },
      {
        term: "Alpha Decay: scales and validity",
        kind: "insight",
        statement: "**Alpha Decay lives at $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr and the textbook model holds while $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Alpha Decay calculation gives seconds when femtometers, becquerels, gray/sieverts demands meters, or a value orders of magnitude beyond $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Energy and speed of the ²³⁸U alpha",
        problem: "For ²³⁸U → ²³⁴Th + α with Q = 4.27 MeV, find the alpha's kinetic energy and its speed as it emerges.",
        steps: [
          { label: "Split", text: "$K_\\alpha = Q(A-4)/A = 4.27(234/238) = 4.20\\ \\mathrm{MeV}$; the daughter gets 0.07 MeV." },
          { label: "Speed", text: "$v = \\sqrt{2K_\\alpha/m_\\alpha} = \\sqrt{2(4.20)(1.602\\times10^{-13})/6.64\\times10^{-27}}$." },
          { label: "Numbers", text: "Numerator $= 1.35\\times10^{-12}$; $v = \\sqrt{2.03\\times10^{14}} = 1.42\\times10^{7}\\ \\mathrm{m/s}$ — about 5% of the speed of light." },
          { label: "Check", text: "Relativistic correction $(v/c)^2/2 \\approx 0.1\\%$: the nonrelativistic treatment is adequate." },
        ],
        result: "$K_\\alpha = 4.20\\ \\mathrm{MeV}$ and $v = 1.4\\times10^{7}\\ \\mathrm{m/s}$ — one alpha line per nuclide, the signature of a two-body split.",
      },
      {
        title: "Alpha Decay: nuclear-size check",
        problem: "Estimate $R = r_0A^{1/3}$ with $r_0 = 1.2\\ \\text{fm}$ for $A = 256$.",
        steps: [
          { label: "Cube root", text: "$256^{1/3} \\approx 6.35$." },
          { label: "Radius", text: "$R \\approx 1.2\\times 6.35 = 7.62\\ \\text{fm}$." },
        ],
        result: "$R \\approx 7.62\\ \\text{fm}$.",
      },
    ],
    keyTakeaways: [
      "Alpha decay requires $Q = (M_X - M_Y - M_\\alpha)c^2 > 0$, computable entirely from atomic masses.",
      "Momentum conservation hands the alpha nearly all the energy: $K_\\alpha = Q(A-4)/A$, giving sharp, discrete alpha lines.",
      "Escape occurs by tunneling through the Coulomb barrier; the exponential sensitivity of the tunneling probability explains the 10¹⁰-year spread of alpha half-lives.",
    ],
    quiz: [
      { q: "In alpha decay, why may atomic masses be used in computing Q?", options: ["electron masses are zero", "the electrons are shared equally and simply cancel between the two sides of the balanced equation", "the nucleus has no electrons, so none appear", "Q is defined chemically"], answer: 1, explanation: "The parent's Z electrons reappear as Z − 2 on the daughter plus 2 bound to the alpha: identical electron bookkeeping on both sides." },
      { q: "A heavy parent (A = 240) decays by alpha emission with Q = 6.0 MeV. The alpha's kinetic energy is about", options: ["6.0 MeV", "5.9 MeV", "3.0 MeV", "0.1 MeV"], answer: 1, explanation: "$K_\\alpha = Q(A-4)/A = 6.0(236/240) = 5.9\\ \\mathrm{MeV}$ — the light particle takes almost everything." },
      { q: "Alpha half-lives range over enormous values even though alpha energies span only 4–9 MeV because", options: ["the strong force varies that much", "the tunneling probability through the Coulomb barrier is exponential in the energy", "heavier nuclei have more electrons", "the alphas change into betas"], answer: 1, explanation: "The Gamow factor is exponentially sensitive to Q and to the daughter charge, magnifying small energy differences into huge lifetime differences." },
      { q: "The ²³⁴Th daughter nucleus recoils with kinetic energy", options: ["equal to the alpha's", "slightly less than the alpha's", "only about 1–2% of Q, by momentum conservation", "zero"], answer: 2, explanation: "Equal and opposite momenta mean K inversely proportional to mass: the heavy daughter carries only $K_\\alpha(m_\\alpha/M_\\mathrm{daughter}) \\approx 1.7\\%$ of $Q$." },
    ],
  },

  // ------------------------------------------------------------------ 42.5
  {
    sectionId: "hall-ch42-s5",
    readingTime: 5,
    intro: "Beta decay produces not a sharp line but a smear of electron energies — and in 1930 that smear appeared to violate conservation of energy, momentum and angular momentum at once. Pauli's audacious fix was an invisible particle; Fermi built it into a new interaction; the neutrino was caught in 1956 and the weak force became a pillar of the Standard Model.",
    objectives: [
      "Distinguish the three beta modes and write their nuclear equations",
      "Explain how the continuous beta spectrum demands the neutrino",
      "Identify beta decay as the signature of the weak interaction and estimate decay energies",
    ],
    concepts: [
      {
        term: "The three beta modes",
        kind: "definition",
        statement: "**Beta-minus:** a neutron converts to a proton, ejecting an electron and an electron antineutrino ($\\beta^-$): $n \\to p + e^- + \\bar\\nu_e$. **Beta-plus:** a proton converts to a neutron, ejecting a positron and a neutrino. **Electron capture:** the nucleus swallows an inner orbital electron, $p + e^- \\to n + \\nu_e$. In each case $A$ is unchanged and $Z$ shifts by one.",
        detail: "Free protons cannot beta-plus decay (the neutron is heavier); inside a nucleus the binding energies can tilt either way, which is why neutron-rich nuclides beta-minus and proton-rich ones beta-plus or capture.",
      },
      {
        term: "The continuous spectrum and the neutrino",
        kind: "insight",
        statement: "In a two-body decay the electron energy would be a single sharp value; instead beta electrons emerge with **all energies from zero up to the endpoint**. Pauli (1930) proposed that a third, undetected particle — the neutrino, neutral and nearly massless — shares the energy at random; Fermi's 1934 theory of the process became the prototype of the weak interaction. Reines and Cowan detected the neutrino directly in 1956.",
        detail: "Angular momentum also demands it: ¹⁴C → ¹⁴N + e⁻ would leave two fermions (integer total spin) violating angular momentum conservation without a third half-integer partner.",
      },
      {
        term: "Weak interaction at work",
        kind: "insight",
        statement: "Beta decay changes a quark's flavor (down ↔ up) — a process mediated by the massive $W^\\pm$ bosons, whose 80 GeV/c² mass makes the force short-ranged ($\\sim10^{-18}\\ \\mathrm{m}$) and the decays slow: typical beta lifetimes are milliseconds to years, against 10⁻²³ s for strong decays.",
        detail: "Neutrinos interact so feebly that a light-year of lead would stop only about half of them — which is exactly why the Sun's core is transparent to them and why neutrino astronomy can see the moment of a supernova's collapse.",
      },
      {
        term: "Beta Decay: solution protocol",
        kind: "method",
        statement: "**Solve Beta Decay problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is nuclear size, binding and the exponential decay law; the working equation is $R = r_0A^{1/3}$, $r_0 = 1.2\\ \\text{fm}$, $N = N_0e^{-\\lambda t}$, $T_{1/2} = \\ln 2/\\lambda$; every substitution must carry its units so the final unit (femtometers, becquerels, gray/sieverts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr; $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.",
      },
      {
        term: "Beta Decay: scales and validity",
        kind: "insight",
        statement: "**Beta Decay lives at $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr and the textbook model holds while $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Beta Decay calculation gives seconds when femtometers, becquerels, gray/sieverts demands meters, or a value orders of magnitude beyond $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "The tritium endpoint",
        problem: "Tritium beta-decays as ³H → ³He + e⁻ + ν̄ (atomic masses 3.016049 u and 3.016029 u). Find the energy released and the maximum electron energy.",
        steps: [
          { label: "Q value", text: "$Q = (3.016049 - 3.016029)\\,\\mathrm{u}\\,c^2 = 0.000020\\ \\mathrm{u}\\times931.5\\ \\mathrm{MeV/u}$." },
          { label: "Energy", text: "$Q = 0.0186\\ \\mathrm{MeV} = 18.6\\ \\mathrm{keV}$." },
          { label: "Endpoint", text: "When the antineutrino takes essentially nothing, the electron gets nearly all of it: $K_\\mathrm{max} \\approx 18.6\\ \\mathrm{keV}$ (the heavy ³He takes negligible recoil)." },
          { label: "Spectrum", text: "Most electrons emerge with 5–15 keV; the shape of the tail near 18.6 keV is so clean that the KATRIN experiment uses it to bound the neutrino mass (below ~0.8 eV)." },
        ],
        result: "$Q = 18.6\\ \\mathrm{keV}$ sets the tritium endpoint; the continuum of electron energies below it is the neutrino's calling card.",
      },
      {
        title: "Beta Decay: nuclear-size check",
        problem: "Estimate $R = r_0A^{1/3}$ with $r_0 = 1.2\\ \\text{fm}$ for $A = 56$.",
        steps: [
          { label: "Cube root", text: "$56^{1/3} \\approx 3.83$." },
          { label: "Radius", text: "$R \\approx 1.2\\times 3.83 = 4.59\\ \\text{fm}$." },
        ],
        result: "$R \\approx 4.59\\ \\text{fm}$.",
      },
    ],
    keyTakeaways: [
      "Three modes: β⁻ (n → p + e⁻ + ν̄), β⁺ (p → n + e⁺ + ν) and electron capture; A stays fixed while Z shifts by one.",
      "The continuous electron spectrum is explained by three-body kinematics with a third, nearly massless particle — the neutrino.",
      "Beta decay is a weak-interaction flavor change; the heavy W boson makes it slow and short-ranged.",
    ],
    quiz: [
      { q: "In beta-minus decay the parent nucleus's numbers change as", options: ["Z decreases by 1, N increases by 1", "Z increases by 1, N decreases by 1, A fixed", "A decreases by 4", "Z and N both stay the same"], answer: 1, explanation: "A neutron becomes a proton: Z up by one, N down by one, mass number unchanged." },
      { q: "The continuous energy spectrum of beta electrons was explained by", options: ["energy loss in the detector", "the neutrino sharing the decay energy as a third particle", "violation of energy conservation", "the electron's spin"], answer: 1, explanation: "Pauli\'s neutrino lets the two light particles split Q randomly, filling every electron energy from zero to the endpoint." },
      { q: "Which conservation law would fail in ¹⁴C → ¹⁴N + e⁻ without a neutrino?", options: ["charge", "baryon number", "angular momentum (and energy/momentum sharing)", "none, nothing is violated"], answer: 2, explanation: "Two spin-1/2 products cannot combine with the initial integer spin; also energy and momentum conservation appear broken by the missing third body." },
      { q: "Neutrinos interact so weakly with matter that", options: ["they are absorbed by paper", "roughly half would pass through a light-year of lead", "they cannot be produced in the Sun", "they always carry electric charge"], answer: 1, explanation: "Their weak-only coupling gives them enormous mean free paths; trillions from the Sun pass through you each second." },
    ],
  },

  // ------------------------------------------------------------------ 42.6
  {
    sectionId: "hall-ch42-s6",
    readingTime: 5,
    intro: "Cosmic rays keep the atmosphere stocked with a trace isotope, carbon-14, which living things absorb and maintain at equilibrium with their environment. At death the intake stops and the ¹⁴C clock starts running down at its 5730-year half-life. Measure what is left — by counting decays — and you have a date, one of archaeology's most transformative gifts from physics.",
    objectives: [
      "Explain how cosmic rays sustain atmospheric carbon-14 and how living tissue tracks it",
      "Date a sample from its measured ¹⁴C activity using the decay law",
      "Choose appropriate isotopic clocks for different time scales",
    ],
    concepts: [
      {
        term: "The carbon-14 clock",
        kind: "method",
        statement: "Cosmic-ray neutrons convert atmospheric nitrogen via $^{14}\\mathrm{N}(n,p)^{14}\\mathrm{C}$; the ¹⁴C oxidizes to CO₂, mixes through the biosphere, and living material holds a steady ratio $^{14}\\mathrm{C}/^{12}\\mathrm{C} \\approx 1.3\\times10^{-12}$, decaying and replenished in balance. Death closes the account: the ratio (and hence the activity) then decays with $T_{1/2} = 5730$ y.",
        detail: "In living carbon this corresponds to about 15 decays per minute per gram; a sample's activity directly measures the surviving fraction.",
      },
      {
        term: "The dating equation",
        kind: "law",
        statement: "With $R_0$ the equilibrium activity of living material and $R$ the measured activity now, $$t = \\frac{T_{1/2}}{\\ln 2}\\,\\ln\\frac{R_0}{R},$$ the logarithm of the activity ratio run backwards along the exponential.",
        detail: "The useful range is a few half-lives to about eight (up to ~50,000 years); beyond that the activity sinks below the background and other clocks are needed.",
      },
      {
        term: "Other clocks",
        kind: "insight",
        statement: "Longer scales use longer-lived nuclides: potassium–argon ($^{40}\\mathrm{K}$, $T_{1/2} = 1.25\\times10^{9}$ y) and uranium–lead ($^{238}\\mathrm{U}$, $4.47\\times10^{9}$ y) date rocks and the Earth itself; the parent-to-daughter **ratio** replaces activity when the daughter accumulates and stays trapped in the mineral.",
        detail: "Choice of clock is everything: ¹⁴C for a campfire, ²³⁰Th for coral, U–Pb for zircon crystals that closed their chemical systems billions of years ago — each isotope covers the time scale its half-life can resolve.",
      },
      {
        term: "Radioactive Dating: solution protocol",
        kind: "method",
        statement: "**Solve Radioactive Dating problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is nuclear size, binding and the exponential decay law; the working equation is $R = r_0A^{1/3}$, $r_0 = 1.2\\ \\text{fm}$, $N = N_0e^{-\\lambda t}$, $T_{1/2} = \\ln 2/\\lambda$; every substitution must carry its units so the final unit (femtometers, becquerels, gray/sieverts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr; $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.",
      },
      {
        term: "Radioactive Dating: scales and validity",
        kind: "insight",
        statement: "**Radioactive Dating lives at $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr and the textbook model holds while $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Radioactive Dating calculation gives seconds when femtometers, becquerels, gray/sieverts demands meters, or a value orders of magnitude beyond $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Dating a bone by carbon-14 activity",
        problem: "A charcoal sample from an archaeological site shows 3.5 ¹⁴C decays per minute per gram of carbon; living carbon gives 15.3. How old is the sample?",
        steps: [
          { label: "Ratio", text: "$R_0/R = 15.3/3.5 = 4.37$." },
          { label: "Logarithm", text: "$\\ln(4.37) = 1.475$." },
          { label: "Apply the law", text: "$t = (T_{1/2}/\\ln2)\\ln(R_0/R) = (5730/0.693)(1.475)$." },
          { label: "Numbers", text: "$5730/0.693 = 8267$ y per unit logarithm; $t = 8267 \\times 1.475 = 1.22\\times10^{4}\\ \\mathrm{y}$." },
        ],
        result: "About 12,000 years — the charcoal cooled at the end of the last ice age, deep in the range where ¹⁴C is reliable.",
      },
      {
        title: "Radioactive Dating: decay-numbers check",
        problem: "Carbon-14 has $T_{1/2} = 5730\\ \\text{yr}$. Starting from $10^{12}$ nuclei, how many remain after $5730\\ \\text{yr}$?",
        steps: [
          { label: "Constant", text: "$\\lambda = \\ln 2/5730 = 1.21\\times 10^{-4}/\\text{yr}$." },
          { label: "Exponent", text: "$N = 10^{12}e^{-1.21\\times 10^{-4}\\times 5730} = 10^{12}\\times 0.5$." },
          { label: "Remain", text: "$N \\approx 5.00\\times 10^{+11}$ nuclei." },
        ],
        result: "$N \\approx 5.00\\times 10^{+11}$ ($50$\\%$).",
      },
    ],
    keyTakeaways: [
      "Cosmic rays maintain atmospheric ¹⁴C; living tissue mirrors the atmospheric ratio, and death freezes the clock.",
      "Age follows from $t = (T_{1/2}/\\ln2)\\ln(R_0/R)$ — an activity ratio converted to time.",
      "Different isotopes cover different scales: ¹⁴C for millennia, ⁴⁰K and U–Pb for the age of rocks and the Earth.",
    ],
    quiz: [
      { q: "Carbon-14 is continually produced in the upper atmosphere by", options: ["photosynthesis in plants", "cosmic-ray neutrons converting nitrogen-14", "alpha decay of uranium", "fission in reactors"], answer: 1, explanation: "The reaction 14N(n,p)14C turns ordinary nitrogen into the clock isotope, which then circulates as CO2." },
      { q: "A sample's 14C activity is one-eighth of the living value. Its age is", options: ["5730 y", "11,460 y", "17,190 y", "22,920 y"], answer: 2, explanation: "One-eighth survival = 3 half-lives: t = 3 × 5730 = 17,190 y." },
      { q: "Dating with 14C becomes unreliable beyond roughly 50,000 years mainly because", options: ["the half-life changes", "so little 14C remains that its activity falls below background", "carbon stops decaying", "neutrons stop being produced"], answer: 1, explanation: "After ~9 half-lives the residual activity is a few decays per hour per gram, swamped by cosmic-ray background and contamination." },
      { q: "For dating a billion-year-old rock, the best choice is", options: ["carbon-14", "tritium", "uranium-lead or potassium-argon systems", "iodine-131"], answer: 2, explanation: "Long half-lives (4.5 and 1.25 billion years) match the scale; 14C would have faded to nothing many times over." },
    ],
  },

  // ------------------------------------------------------------------ 42.7
  {
    sectionId: "hall-ch42-s7",
    readingTime: 4,
    intro: "The same decays that power reactors and tracer studies also deposit energy in human tissue. Dosimetry measures that deposition — absorbed energy per kilogram — and then weights it by how biologically destructive each radiation type is. Two units, the gray and the sievert, and one table of quality factors, are all the bookkeeping needed to set safety standards.",
    objectives: [
      "Define absorbed dose in grays and rads and compute deposited energies",
      "Apply the RBE weighting to convert absorbed dose to equivalent dose in sieverts",
      "Place typical exposures — background, medical, lethal — on a common scale",
    ],
    concepts: [
      {
        term: "Absorbed dose",
        kind: "definition",
        statement: "The absorbed dose is energy deposited per unit mass of irradiated material: $$1\\ \\mathrm{gray\\ (Gy)} = 1\\ \\mathrm{J/kg},\\qquad 1\\ \\mathrm{rad} = 0.01\\ \\mathrm{Gy}.$$ Absorbed dose is purely physical — it knows nothing of radiation type or biology.",
        detail: "A whole-body 5.0 Gy of gamma rays deposits 350 J in a 70 kg adult: enough energy to boil a teaspoon of water, yet enough to destroy the bone marrow — dose, not energy, is what matters.",
      },
      {
        term: "RBE and equivalent dose",
        kind: "law",
        statement: "Radiations differ in biological punch per joule, so dose is weighted by the relative biological effectiveness (RBE, also quality factor): $$\\mathrm{equivalent\\ dose\\ (Sv)} = \\mathrm{RBE} \\times \\mathrm{absorbed\\ dose\\ (Gy)}.$$ Gamma rays and beta particles have RBE ≈ 1; protons ≈ 2–5; alpha particles internally ≈ 10–20, because their dense ionization trails wreck DNA locally.",
        detail: "The sievert (and the older rem = 0.01 Sv) is the unit of biological risk; it is the sievert figure, not the gray figure, that radiation-safety limits are written in.",
      },
      {
        term: "The exposure scale",
        kind: "insight",
        statement: "Natural background delivers about 2–3 mSv per year; a chest X-ray is ~0.1 mSv, a full-body CT scan of order 10 mSv; radiation workers are limited to 20–50 mSv/yr; whole-body equivalent doses of ~4–5 Sv kill about half of those exposed within weeks (the LD50), and brief doses of 10 Sv are invariably fatal.",
        detail: "Alpha emitters are nearly harmless outside the body (skin stops them) yet vicious when inhaled or ingested — radon gas in basements and plutonium dust in lungs are the classic internal-emitter hazards.",
      },
      {
        term: "Measuring Radiation Dosage: solution protocol",
        kind: "method",
        statement: "**Solve Measuring Radiation Dosage problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is nuclear size, binding and the exponential decay law; the working equation is $R = r_0A^{1/3}$, $r_0 = 1.2\\ \\text{fm}$, $N = N_0e^{-\\lambda t}$, $T_{1/2} = \\ln 2/\\lambda$; every substitution must carry its units so the final unit (femtometers, becquerels, gray/sieverts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr; $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.",
      },
      {
        term: "Measuring Radiation Dosage: scales and validity",
        kind: "insight",
        statement: "**Measuring Radiation Dosage lives at $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr and the textbook model holds while $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Measuring Radiation Dosage calculation gives seconds when femtometers, becquerels, gray/sieverts demands meters, or a value orders of magnitude beyond $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Gamma dose versus internal alpha dose",
        problem: "A 70 kg worker absorbs a uniform whole-body 5.0 Gy of gamma rays (RBE = 1). Separately, a lung tissue sample absorbs 0.10 Gy from inhaled alpha particles (RBE = 20). Compare deposited energies and equivalent doses.",
        steps: [
          { label: "Gamma energy", text: "$E = (5.0\\ \\mathrm{J/kg})(70\\ \\mathrm{kg}) = 350\\ \\mathrm{J}$ deposited throughout the body." },
          { label: "Gamma equivalent", text: "$5.0\\ \\mathrm{Gy} \\times 1 = 5.0\\ \\mathrm{Sv}$ — near the LD50 for whole-body exposure without treatment." },
          { label: "Alpha energy", text: "For a 0.020 kg lung region absorbing 0.10 Gy: $E = 0.10 \\times 0.020 = 2.0\\times10^{-3}\\ \\mathrm{J}$ — a whisper of energy." },
          { label: "Alpha equivalent", text: "$0.10\\ \\mathrm{Gy} \\times 20 = 2.0\\ \\mathrm{Sv}$ to that tissue — comparable damage from 10⁵ times less energy." },
        ],
        result: "350 J of gamma (5.0 Sv whole body) versus 2 mJ of alpha locally (2.0 Sv to the lung): the RBE weighting, not the raw energy, carries the biological story.",
      },
      {
        title: "Measuring Radiation Dosage: nuclear-size check",
        problem: "Estimate $R = r_0A^{1/3}$ with $r_0 = 1.2\\ \\text{fm}$ for $A = 156$.",
        steps: [
          { label: "Cube root", text: "$156^{1/3} \\approx 5.38$." },
          { label: "Radius", text: "$R \\approx 1.2\\times 5.38 = 6.46\\ \\text{fm}$." },
        ],
        result: "$R \\approx 6.46\\ \\text{fm}$.",
      },
    ],
    keyTakeaways: [
      "Absorbed dose: 1 Gy = 1 J/kg (the rad is 0.01 Gy) — a purely physical bookkeeping of deposited energy.",
      "Equivalent dose multiplies by RBE (1 for γ and β, 10–20 for internal alphas) to get sieverts — the unit of biological risk.",
      "Scale for context: ~2–3 mSv/yr background, ~0.1 mSv chest X-ray, ~4–5 Sv LD50 whole body.",
    ],
    quiz: [
      { q: "An absorbed dose of 2.0 Gy corresponds to deposited energy of", options: ["2.0 J per gram of tissue", "2.0 J per kilogram of tissue", "2.0 Sv", "2.0 cal per mole"], answer: 1, explanation: "The gray is one joule per kilogram of absorbing material; the Sv requires an RBE factor first." },
      { q: "Alpha particles receive a high RBE (10–20) because they", options: ["carry the most kinetic energy", "penetrate deepest into the body", "deposit dense ionization trails that concentrate damage in cells", "are electrically neutral"], answer: 2, explanation: "Short, heavily ionizing tracks mean concentrated, poorly repaired biological damage per joule — the opposite of penetrating gamma rays." },
      { q: "A absorbed dose of 0.05 Gy of beta radiation (RBE = 1) gives an equivalent dose of", options: ["0.05 mSv", "0.05 Sv", "5 Sv", "50 Sv"], answer: 1, explanation: "0.05 Gy × 1 = 0.05 Sv = 50 mSv — roughly a couple of CT scans' worth of whole-body dose." },
      { q: "Which exposure delivers the larger equivalent dose to tissue?", options: ["1 Gy of gamma rays (RBE 1)", "0.1 Gy of internal alpha particles (RBE 20)", "they are equal", "cannot be compared without knowing the half-life"], answer: 1, explanation: "0.1 Gy × 20 = 2.0 Sv beats 1 Gy × 1 = 1.0 Sv — quality factor can outweigh raw dose." },
    ],
  },

  // ------------------------------------------------------------------ 42.8
  {
    sectionId: "hall-ch42-s8",
    readingTime: 5,
    intro: "No computer can solve the quantum many-body problem of 238 interacting nucleons exactly, so nuclear physics proceeds by caricature: models that each capture one face of the data. The liquid-drop model treats the nucleus as charged rain and reproduces masses and fission; the shell model, in defiance of that picture, finds evidence for individual nucleons orbiting a central potential — the magic numbers prove both are right about different things.",
    objectives: [
      "State the evidence motivating the collective liquid-drop model and what it explains",
      "Present the magic numbers and the shell-model picture that accounts for them",
      "Explain spin pairing and its consequences for the stability of even-even nuclei",
    ],
    concepts: [
      {
        term: "The liquid-drop (collective) model",
        kind: "definition",
        statement: "Because nuclear density is nearly A-independent, Bohr and Wheeler modeled the nucleus as an incompressible, charged droplet: binding energy assembled from a volume term (binding proportional to A), a surface-tension term (underbound surface nucleons, $\\propto A^{2/3}$), a Coulomb term (proton repulsion, $\\propto Z^2/A^{1/3}$), and a pairing term (Section below). This semi-empirical mass formula predicts binding energies to ~1% and underlies the theory of fission.",
        detail: "The compound-nucleus picture of reactions — the incident particle is absorbed and its energy shared statistically before re-emission — is the dynamic face of the same collective idea.",
      },
      {
        term: "Magic numbers and the shell model",
        kind: "law",
        statement: "Nuclides with proton or neutron counts equal to **2, 8, 20, 28, 50, 82, or 126** are anomalously abundant, anomalously tightly bound, and anomalously long-lived; ⁴He (2, 2), ¹⁶O (8, 8), ⁴⁰Ca (20, 20) and ²⁰⁸Pb (82, 126) are 'doubly magic'. The shell model explains them as closed shells of individual nucleons moving in a common potential well with strong spin–orbit coupling — nuclear physics's analogue of noble-gas electron shells.",
        detail: "Magic-number nuclei also support the idea of an island of stability beyond the known superheavy elements, guiding searches around Z = 114–126, N = 184.",
      },
      {
        term: "Spin pairing",
        kind: "insight",
        statement: "Nucleons of like type pair their spins to zero, and paired nucleons are extra-bound: **even-even nuclei (even Z, even N) are the most stable and by far the most abundant** — about 160 stable ones. Odd-odd nuclei are so penalized that only four exist in nature in long-lived form (²H, ⁶Li, ¹⁰B, ¹⁴N).",
        detail: "Between the extremes, odd-A nuclei sit intermediate: one unpaired nucleon supplies the nuclear spin and magnetic moment, which is why only odd-A nuclei show up in NMR and Mössbauer work.",
      },
      {
        term: "Nuclear Models: solution protocol",
        kind: "method",
        statement: "**Solve Nuclear Models problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is nuclear size, binding and the exponential decay law; the working equation is $R = r_0A^{1/3}$, $r_0 = 1.2\\ \\text{fm}$, $N = N_0e^{-\\lambda t}$, $T_{1/2} = \\ln 2/\\lambda$; every substitution must carry its units so the final unit (femtometers, becquerels, gray/sieverts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr; $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.",
      },
      {
        term: "Nuclear Models: scales and validity",
        kind: "insight",
        statement: "**Nuclear Models lives at $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr and the textbook model holds while $N\\gg 1$ for $e^{-\\lambda t}$; $\\lambda$ constant in time.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Nuclear Models calculation gives seconds when femtometers, becquerels, gray/sieverts demands meters, or a value orders of magnitude beyond $R\\sim \\text{fm}$; $1\\ \\text{u} = 931.5\\ \\text{MeV}/c^2$; $T_{1/2}$ from s to Gyr, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Reading stability from the magic numbers",
        problem: "Using the magic-number lists (2, 8, 20, 28, 50, 82, 126), assess ²⁰⁸Pb (Z = 82, N = 126) and ¹³²Sn (Z = 50, N = 82).",
        steps: [
          { label: "Lead-208", text: "Z = 82 is magic and N = 126 is magic: **doubly magic**, the heaviest known doubly magic nuclide." },
          { label: "Evidence", text: "²⁰⁸Pb is stable (the end of the thorium decay chains), extra-tightly bound relative to its neighbors, and spherical with a very low neutron-capture cross section." },
          { label: "Tin-132", text: "Z = 50 and N = 82 are both magic: doubly magic, though neutron-rich and radioactive — shell closure does not guarantee stability, only extra binding at fixed A." },
          { label: "Contrast", text: "Its neighbor ¹³³Sn, with one neutron past closure, is markedly less bound per nucleon and decays within days." },
        ],
        result: "Both are doubly magic and therefore locally maximally bound; ²⁰⁸Pb is outright stable, ¹³²Sn shows shell closure while still decaying — the magic numbers measure binding structure, not immortality.",
      },
      {
        title: "Nuclear Models: nuclear-size check",
        problem: "Estimate $R = r_0A^{1/3}$ with $r_0 = 1.2\\ \\text{fm}$ for $A = 206$.",
        steps: [
          { label: "Cube root", text: "$206^{1/3} \\approx 5.91$." },
          { label: "Radius", text: "$R \\approx 1.2\\times 5.91 = 7.09\\ \\text{fm}$." },
        ],
        result: "$R \\approx 7.09\\ \\text{fm}$.",
      },
    ],
    keyTakeaways: [
      "The liquid-drop model (volume + surface + Coulomb + pairing terms) reproduces nuclear masses and the energetics of fission.",
      "Magic numbers 2, 8, 20, 28, 50, 82, 126 mark closed shells of an independent-particle shell model with strong spin–orbit coupling.",
      "Even-even nuclei dominate the stable list because paired like nucleons bind extra-tightly; odd-odd nuclei barely survive.",
    ],
    quiz: [
      { q: "The liquid-drop model works because", options: ["nuclei are literally liquid", "nuclear density is nearly independent of A, like an incompressible droplet", "electrons orbit like rain", "magic numbers force it"], answer: 1, explanation: "Volume proportional to A is droplet behavior; surface and Coulomb terms then capture the mass data well." },
      { q: "Which of the following is a magic neutron number?", options: ["40", "82", "100", "150"], answer: 1, explanation: "The magic numbers are 2, 8, 20, 28, 50, 82, 126 — 82 closes a neutron (and proton) shell." },
      { q: "A doubly magic nucleus is one in which", options: ["both Z and N are magic numbers", "A is twice a magic number", "it has twice the normal density", "it decays twice per second"], answer: 0, explanation: "Closed proton and closed neutron shells together — 4He, 16O, 40Ca, 48Ca, 208Pb — yield exceptional binding and stability." },
      { q: "Stable odd-odd nuclei (odd Z, odd N) are rare because", options: ["odd numbers attract", "the pairing term leaves two unpaired nucleons, a binding penalty", "they have no spin", "the shell model forbids them"], answer: 1, explanation: "Only 2H, 6Li, 10B and 14N survive the penalty; pairing to zero spin is worth roughly 1-2 MeV of extra binding." },
    ],
  },
]
