import type { SectionContent } from "../library"

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 44: Quarks, Leptons, and the Big Bang (HRW 1334–1361), 4 sections.
// ============================================================================

export const hallCh44Content: SectionContent[] = [
  // ------------------------------------------------------------------ 44.1
  {
    sectionId: "hall-ch44-s1",
    readingTime: 5,
    intro: "Faced with hundreds of 'elementary' particles pouring out of accelerators in the 1950s, physicists learned to classify before they could explain. Particles sort by spin, by mass family, by the interactions they feel, and by the conserved charges they carry; antiparticles shadow every one of them. The taxonomy built here is the periodic table of the subnuclear world, and its rows and columns encode the fundamental forces.",
    objectives: [
      "Define antiparticles and describe annihilation and pair production with energy thresholds",
      "Compare the four basic interactions by strength, range and messenger particle",
      "Apply the conservation laws — energy, momentum, angular momentum, charge, baryon and lepton number — to test whether reactions can occur",
    ],
    concepts: [
      {
        term: "Antiparticles",
        kind: "definition",
        statement: "Every particle has an **antiparticle** with identical mass and spin but opposite charge (and opposite values of other additive quantum numbers): the positron $e^+$ for the electron, the antiproton for the proton. Particle and antiparticle can annihilate into photons, and a sufficiently energetic photon can create a pair — the threshold being twice the particle mass: $2m_ec^2 = 1.022\\ \\mathrm{MeV}$ for $e^-e^+$, $2 \\times 938.3\\ \\mathrm{MeV}$ for $p\\bar p$.",
        detail: "Pair production requires a nearby nucleus to absorb recoil momentum; a lone photon in vacuum cannot conserve both energy and momentum while materializing two particles. Anderson found the positron in cosmic rays in 1932, two years after Dirac's theory demanded it.",
      },
      {
        term: "The four interactions",
        kind: "insight",
        statement: "Particle physics recognizes four interactions, each characterized by a messenger: the **strong** (range ~10⁻¹⁵ m, the strongest, binds nuclei), the **electromagnetic** (infinite range, ~10⁻² of the strong, binds atoms), the **weak** (range ~10⁻¹⁸ m, ~10⁻⁵, beta decays and neutrinos) and **gravitation** (infinite range, ~10⁻³⁸ of the strong — irrelevant in particle physics but sovereign over the cosmos).",
        detail: "A particle participates only in the interactions that couple to its conserved charges: neutrinos feel only the weak force (and gravity), which is why a neutrino can cross light-years of lead; electrons feel electromagnetic and weak but not the strong.",
      },
      {
        term: "Conservation laws as filters",
        kind: "law",
        statement: "Any reaction must conserve **energy, momentum, angular momentum, net charge, baryon number and (family-by-family) lepton number**. Interactions differ in what else they conserve: the strong and electromagnetic also conserve strangeness, the weak does not — a hierarchy that predicts which decays are fast (allowed), slow (weak-suppressed) or forbidden outright.",
        detail: "The proton, being the lightest baryon, cannot decay without violating baryon number conservation — hence its observed lifetime beyond 10³⁴ years, the sharpest constraint on speculative theories.",
      },
      {
        term: "Fermions and bosons, leptons and hadrons",
        kind: "notation",
        statement: "Particles of half-integer spin are **fermions** (obeying the exclusion principle); integer-spin particles are **bosons**. By composition: **leptons** (electron, muon, tau and their neutrinos) feel no strong force; **hadrons** feel it and split into **mesons** (quark-antiquark pairs, bosons, e.g. pions) and **baryons** (three quarks, fermions, e.g. protons and neutrons).",
        detail: "Soaring above both classes sit the **messenger bosons** of Section 44-3 — the photon, the gluons and the W and Z. Very short-lived excited states called resonances live only ~10⁻²³ s, long enough to leave tracks in scattering data but not in detectors.",
      },
      {
        term: "General Properties of Elementary Particles: solution protocol",
        kind: "method",
        statement: "**Solve General Properties of Elementary Particles problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the Standard Model taxonomy and Hubble expansion; the working equation is $v = Hr$, $H_0 \\approx 70\\ \\text{km/s}\\cdot\\text{Mpc}$, $E = mc^2$; every substitution must carry its units so the final unit (megaparsecs and $\\text{GeV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $H_0^{-1}\\sim 14\\ \\text{Gyr}$; CMB $2.7\\ \\text{K}$; Standard Model tested to $10^{-12}\\ \\text{s}$; $v = Hr$ for $z\\ll 1$.",
      },
    ],
    examples: [
      {
        title: "Pair-production bookkeeping",
        problem: "A 2.00 MeV photon passes a nucleus and converts to an electron-positron pair. How much kinetic energy is shared, and could the same photon instead produce a proton-antiproton pair?",
        steps: [
          { label: "Threshold", text: "Rest energy needed: $2m_ec^2 = 2(0.511) = 1.022\\ \\mathrm{MeV}$ (the nucleus absorbs negligible recoil energy)." },
          { label: "Remainder", text: "Kinetic energy for the pair plus recoil: $2.00 - 1.022 = 0.978\\ \\mathrm{MeV}$, shared between the two particles and (slightly) the nucleus." },
          { label: "Proton threshold", text: "Producing $p\\bar p$ requires $2(938.3) = 1877\\ \\mathrm{MeV}$ — a gamma ray nearly a thousand times more energetic than this one." },
          { label: "Conservation check", text: "Charge: photon 0 → e⁻(−1) + e⁺(+1) = 0 ✓; lepton number: 0 → (+1) + (−1) = 0 ✓ — the process is allowed." },
        ],
        result: "0.978 MeV of kinetic energy is released to the pair; a 2 MeV photon is far too feeble to make a proton-antiproton pair.",
      },
      {
        title: "General Properties of Elementary Particles: Hubble check",
        problem: "A galaxy is $100\\ \\text{Mpc}$ away. With $H_0 \\approx 70\\ \\text{km/s}\\cdot\\text{Mpc}$, estimate $v = H_0d$.",
        steps: [
          { label: "Multiply", text: "$v = 70\\times 100 = 7000\\ \\text{km/s}$." },
          { label: "Fraction of $c$", text: "$7000/299792 \\approx 0.0233c$ — nonrelativistic, so $v = Hd$ holds." },
        ],
        result: "$v \\approx 7000\\ \\text{km/s}$.",
      },
    ],
    keyTakeaways: [
      "Every particle has an antiparticle; annihilation and pair production respect all conservation laws, with thresholds set by rest masses.",
      "The four interactions rank strong > electromagnetic > weak >> gravity, each with its own range and messenger boson.",
      "Conservation of charge, baryon number and family lepton numbers filters allowed from forbidden reactions — strangeness adds a further test.",
    ],
    quiz: [
      { q: "The minimum photon energy for electron-positron pair production is", options: ["0.511 MeV", "1.022 MeV", "938 MeV", "2.00 MeV"], answer: 1, explanation: "Twice the electron rest energy: 2 × 0.511 MeV = 1.022 MeV, supplied near a nucleus for momentum conservation." },
      { q: "Which particle feels ONLY the weak interaction (plus gravity)?", options: ["electron", "proton", "neutrino", "pion"], answer: 2, explanation: "Neutrinos carry no electric or color charge — their light-year mean free path in lead is the weakness of the weak interaction made vivid." },
      { q: "Hadrons are the particles that", options: ["feel the strong force and are made of quarks", "have no mass", "travel at light speed", "are their own antiparticles"], answer: 0, explanation: "Hadrons (mesons = quark-antiquark, baryons = three quarks) participate in the strong interaction; leptons do not." },
      { q: "The proton is stable (lifetime > 10³⁴ y) because", options: ["it is too heavy to decay", "it is the lightest baryon, and baryon number conservation forbids any decay channel", "charge conservation forbids all decays", "no interaction can act on it"], answer: 1, explanation: "Decays must go to lighter particles; every lighter final state carries baryon number 0, so a single proton (B = 1) has nowhere to go." },
    ],
  },

  // ------------------------------------------------------------------ 44.2
  {
    sectionId: "hall-ch44-s2",
    readingTime: 5,
    intro: "The leptons form a clean set of six, but the hadrons multiplied into a zoo — until strangeness gave the zoo a taxonomy. Assigning quantum numbers to production and decay patterns revealed that hadrons were not elementary at all: their properties pointed inside, to constituents with fractional charge waiting to be named quarks.",
    objectives: [
      "List the six leptons and their neutrinos and apply conservation of the three lepton-family numbers",
      "Distinguish mesons from baryons by quark content and baryon number",
      "Use strangeness conservation to predict which production and decay processes are fast or slow",
    ],
    concepts: [
      {
        term: "The six leptons",
        kind: "definition",
        statement: "The lepton family contains three charged particles — the electron (0.511 MeV/c²), the muon (105.7 MeV/c²) and the tau (1777 MeV/c²) — each paired with its own neutrino. Each family carries a conserved **lepton number** ($L_e$, $L_\\mu$, $L_\\tau$): particles and neutrinos carry +1, antiparticles and antineutrinos −1.",
        detail: "Neutrino oscillations (confirmed from atmospheric and solar data — the 2015 Nobel Prize) show neutrinos have tiny, nonzero masses, but below ~1 eV/c²; for all reaction bookkeeping they remain effectively massless.",
      },
      {
        term: "Lepton number as a bookkeeper",
        kind: "method",
        statement: "Every allowed reaction conserves each family's lepton number separately. Muon decay, $$\\mu^- \\to e^- + \\bar\\nu_e + \\nu_\\mu,$$ checks: $L_\\mu$: 1 → 0 + 0 + 1 ✓; $L_e$: 0 → 1 + (−1) + 0 ✓. The observed absence of $\\mu^- \\to e^- + \\gamma$ — the cleanest forbidden decay — is exactly this rule in action.",
        detail: "Neutrino oscillations do violate individual family numbers in flight (transforming $\\nu_e$ into $\\nu_\\mu$), but total lepton number appears to remain conserved — an open chapter of the field.",
      },
      {
        term: "Mesons and baryons",
        kind: "definition",
        statement: "Hadrons split by composition: **mesons** are quark-antiquark pairs ($\\pi$, K, ρ, φ…) with baryon number B = 0 and integer spin; **baryons** are three-quark states (p, n, Λ, Σ, Ξ, Ω …) with B = +1 and half-integer spin. Antibaryons ($\\bar p$, $\\bar \\Lambda$…) carry B = −1.",
        detail: "Baryon number conservation means hadrons can be created and destroyed only in baryon-antibaryon-balanced processes: a proton-proton collision can yield extra pions freely, but extra protons only alongside antiprotons.",
      },
      {
        term: "Strangeness",
        kind: "definition",
        statement: "Certain hadrons (the 'strange' ones) are produced copiously in pairs by the strong interaction yet decay only slowly — as if produced easily and destroyed reluctantly. The answer is a new quantum number S, carried by the strange quark ($s$: S = −1; strange antiquarks: S = +1): **strong and electromagnetic interactions conserve S; the weak interaction can change S by 0 or ±1** in a decay.",
        detail: "The Λ⁰ (uds, S = −1) is born alongside a K (which carries S = +1) in associated production, conserving strangeness; it then decays slowly (weakly) to $p\\pi^-$ with ΔS = +1, living 10⁻¹⁰ s instead of the 10⁻²³ s a strong decay would take.",
      },
      {
        term: "Leptons, Hadrons, and Strangeness: solution protocol",
        kind: "method",
        statement: "**Solve Leptons, Hadrons, and Strangeness problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the Standard Model taxonomy and Hubble expansion; the working equation is $v = Hr$, $H_0 \\approx 70\\ \\text{km/s}\\cdot\\text{Mpc}$, $E = mc^2$; every substitution must carry its units so the final unit (megaparsecs and $\\text{GeV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $H_0^{-1}\\sim 14\\ \\text{Gyr}$; CMB $2.7\\ \\text{K}$; Standard Model tested to $10^{-12}\\ \\text{s}$; $v = Hr$ for $z\\ll 1$.",
      },
    ],
    examples: [
      {
        title: "Strangeness bookkeeping",
        problem: "Test whether these processes are allowed, and if so, at which interaction's speed: (a) $\\Lambda^0 \\to p + \\pi^-$; (b) $\\pi^- + p \\to K^0 + \\Lambda^0$; (c) $\\Lambda^0 \\to p + \\pi^- + \\pi^0$ with strong (strangeness-conserving) dynamics.",
        steps: [
          { label: "Part (a)", text: "Λ⁰(uds) has S = −1; p and π each have S = 0: ΔS = +1. Strangeness is violated, so only the weak interaction can do it — a slow (10⁻¹⁰ s) decay." },
          { label: "Part (b)", text: "Initial S: π(0) + p(0) = 0. Final: K⁰(d s̄) carries S = +1, Λ⁰ carries S = −1: total 0. S is conserved, so the strong interaction produces this pair copiously — associated production." },
          { label: "Part (c)", text: "The same ΔS = +1 as (a): no added pion rescues strangeness. This is again a weak process; three-body weak decays are further suppressed by phase space." },
          { label: "Also check", text: "Charge and baryon number balance in all three (1 → 1 + 0; −1+1 → 0+0; 0 → 1−1+0) ✓ — the strangeness test is what decides the rate." },
        ],
        result: "(a) and (c) are allowed but weak-slow; (b) is strong-fast — the very pattern of copious pair production followed by reluctant decay that defined strangeness.",
      },
      {
        title: "Leptons, Hadrons, and Strangeness: Hubble check",
        problem: "A galaxy is $200\\ \\text{Mpc}$ away. With $H_0 \\approx 70\\ \\text{km/s}\\cdot\\text{Mpc}$, estimate $v = H_0d$.",
        steps: [
          { label: "Multiply", text: "$v = 70\\times 200 = 14000\\ \\text{km/s}$." },
          { label: "Fraction of $c$", text: "$14000/299792 \\approx 0.0467c$ — nonrelativistic, so $v = Hd$ holds." },
        ],
        result: "$v \\approx 14000\\ \\text{km/s}$.",
      },
    ],
    keyTakeaways: [
      "Six leptons in three families; each family's lepton number is separately conserved in all reactions.",
      "Mesons are quark-antiquark (B = 0); baryons are three-quark states (B = 1) — baryon number conservation forbids proton decay.",
      "Strangeness is conserved by the strong and electromagnetic interactions and changes by ±1 in weak decays, explaining pair production followed by slow individual decay.",
    ],
    quiz: [
      { q: "The decay μ⁻ → e⁻ + ν̄e + νμ is allowed, while μ⁻ → e⁻ + γ is never seen. The deciding rule is", options: ["energy conservation", "separate conservation of electron and muon lepton numbers", "strangeness conservation", "the exclusion principle"], answer: 1, explanation: "The first decay balances $L_e$ and $L_\\mu$; the second has $L_\\mu$ going from 1 to 0 with no muon-family partner, and $L_e$ from 0 to 1 — doubly forbidden." },
      { q: "A meson is a hadron made of", options: ["three quarks", "three antiquarks", "a quark and an antiquark", "leptons only"], answer: 2, explanation: "Mesons like the pion and kaon are quark-antiquark pairs with baryon number zero and integer spin." },
      { q: "Strangeness is conserved in", options: ["all interactions", "strong and electromagnetic interactions but not weak", "weak but not strong", "gravitational interactions only"], answer: 1, explanation: "Strange particles are produced in pairs by the strong force (S conserved) but decay individually through the weak force, which may change S by 0 or ±1." },
      { q: "The Λ⁰ (uds, S = −1) decays to p + π⁻ in about 10⁻¹⁰ s rather than 10⁻²³ s because", options: ["it is very light", "the decay changes strangeness, so it must proceed by the weak interaction", "the strong force repels pions", "protons cannot be produced"], answer: 1, explanation: "Delta S = +1 routes the decay through the weak interaction, slowing it by ~13 orders of magnitude relative to strong timescales." },
    ],
  },

  // ------------------------------------------------------------------ 44.3
  {
    sectionId: "hall-ch44-s3",
    readingTime: 6,
    intro: "Every hadron ever measured — hundreds of them — is accounted for by six quarks and their antiquarks, bound by gluons. Three generations, two quarks each, charges +2/3 and −1/3: that is the whole cast of matter, and with the leptons beside them and the four messengers carrying their forces, the Standard Model table is complete down to the last measured particle.",
    objectives: [
      "List the six quarks with their charges, and build hadron charges from quark content",
      "Explain color charge, gluons, confinement and asymptotic freedom",
      "Identify the messenger particles of the four interactions and the place of the Higgs boson in the Standard Model",
    ],
    concepts: [
      {
        term: "The six quarks",
        kind: "law",
        statement: "Quarks come in six **flavors** in three generations: up $u$ and down $d$ (ordinary matter), strange $s$ and charmed $c$, bottom $b$ and top $t$. Their charges are fractional — $u, c, t$ carry $+\\tfrac{2}{3}e$ and $d, s, b$ carry $-\\tfrac{1}{3}e$ — and every hadron's charge is just the sum of its constituents: the proton $uud$ has $+\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3} = +1$; the neutron $udd$ totals 0; $\\pi^+ = u\\bar d$ carries +1.",
        detail: "Current masses run from ~2.2 MeV/c² (up) to 173 GeV/c² (top, the heaviest known elementary particle, discovered 1995). Free quarks have never been isolated — quark charges have been confirmed by superconducting-magnetic levitation experiments on oil drops, of all things.",
      },
      {
        term: "Color and confinement",
        kind: "insight",
        statement: "Quarks carry a strong charge called **color** (three varieties, conventionally red, green, blue) that must combine to white in any observable hadron: three quarks of different colors (baryons) or quark-antiquark color pairs (mesons). The messenger gluons themselves carry color, so the force does not die with distance — pulling quarks apart creates new quark-antiquark pairs instead: **confinement**.",
        detail: "At short range the opposite happens — **asymptotic freedom**: the color force weakens at high momentum transfer, so deep-scattering experiments see nearly free quarks inside the proton (Gross, Politzer and Wilczek, Nobel 2004).",
      },
      {
        term: "Messenger particles",
        kind: "definition",
        statement: "Each interaction is carried by its own boson: the **photon** (massless, infinite range) for electromagnetism; **eight gluons** (massless but self-interacting, confined to ~10⁻¹⁵ m) for the strong force; the **W⁺, W⁻ and Z⁰** (massive, 80.4 and 91.2 GeV/c², range ~10⁻¹⁸ m) for the weak force — their mass is what makes the weak force weak. Gravity's hypothetical messenger is the spin-2 **graviton**, not yet observed.",
        detail: "Messenger particles can be virtual — energy borrowed within the Heisenberg allowance $\\Delta E\\,\\Delta t \\sim \\hbar$ — which is how forces reach beyond contact and how the weak force's massive messengers enforce its short range.",
      },
      {
        term: "The Standard Model",
        kind: "insight",
        statement: "Six quarks, six leptons and the messenger bosons (plus the 2012 Higgs boson, 125 GeV/c², whose field gives particles their masses) constitute the **Standard Model** — tested by collider data to extraordinary precision, and silent on gravity, dark matter and neutrino masses. Every prediction of the model that experiments have been able to check has held.",
        detail: "The Higgs discovery at CERN in 2012 (Nobel 2013) closed the model's open slot; what lies beyond — supersymmetry, string theory, or something unguessed — is the open frontier.",
      },
      {
        term: "Quarks and Messenger Particles: solution protocol",
        kind: "method",
        statement: "**Solve Quarks and Messenger Particles problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the Standard Model taxonomy and Hubble expansion; the working equation is $v = Hr$, $H_0 \\approx 70\\ \\text{km/s}\\cdot\\text{Mpc}$, $E = mc^2$; every substitution must carry its units so the final unit (megaparsecs and $\\text{GeV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $H_0^{-1}\\sim 14\\ \\text{Gyr}$; CMB $2.7\\ \\text{K}$; Standard Model tested to $10^{-12}\\ \\text{s}$; $v = Hr$ for $z\\ll 1$.",
      },
    ],
    figures: [
      {
        caption: "The Standard Model family table. Three generations of matter fermions (quarks in the first two columns, leptons in the last two) plus the messenger bosons on the right. Everything ever observed is built from generation I; generations II and III appear only in high-energy processes and decay back within fractions of a second. Every matter particle also has an antiparticle. Quark masses are 'current' values and are scheme-dependent; neutrino masses are known only to be tiny (below ~1 eV/c²).",
        svg: `<svg viewBox="0 0 720 440" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Standard Model family table"><rect x="0" y="0" width="720" height="440" fill="currentColor" opacity="0.03"/><text x="300" y="20" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">The Standard Model family table</text><rect x="30" y="30" width="514" height="40" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="138" y="47" text-anchor="middle" font-size="11.5" fill="currentColor">up-type quarks</text><text x="138" y="62" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">Q = +2/3</text><text x="254" y="47" text-anchor="middle" font-size="11.5" fill="currentColor">down-type quarks</text><text x="254" y="62" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">Q = −1/3</text><text x="370" y="47" text-anchor="middle" font-size="11.5" fill="currentColor">charged leptons</text><text x="370" y="62" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">Q = −1</text><text x="486" y="47" text-anchor="middle" font-size="11.5" fill="currentColor">neutrinos</text><text x="486" y="62" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">Q = 0</text><rect x="572" y="30" width="122" height="340" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="633" y="47" text-anchor="middle" font-size="11.5" fill="currentColor">messengers</text><text x="633" y="62" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">(bosons)</text><rect x="30" y="70" width="514" height="100" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="30" y="170" width="514" height="100" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="30" y="270" width="514" height="100" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="30" y="70" width="44" height="300" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="126" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">I</text><text x="52" y="226" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">II</text><text x="52" y="326" text-anchor="middle" font-size="15" font-weight="600" fill="currentColor">III</text><text x="52" y="382" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.7">gen.</text><line x1="74" y1="70" x2="74" y2="370" stroke="currentColor" stroke-width="1.2" opacity="0.5"/><line x1="196" y1="70" x2="196" y2="370" stroke="currentColor" stroke-width="1.2" opacity="0.5"/><line x1="312" y1="70" x2="312" y2="370" stroke="currentColor" stroke-width="1.2" opacity="0.5"/><line x1="428" y1="70" x2="428" y2="370" stroke="currentColor" stroke-width="1.2" opacity="0.5"/><text x="138" y="115" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">u</text><text x="138" y="136" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">2.2 MeV</text><text x="254" y="115" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">d</text><text x="254" y="136" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">4.7 MeV</text><text x="370" y="115" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">e</text><text x="370" y="136" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">0.511 MeV</text><text x="486" y="115" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">ν</text><text x="486" y="136" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">&lt; 1 eV</text><text x="138" y="215" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">c</text><text x="138" y="236" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">1.3 GeV</text><text x="254" y="215" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">s</text><text x="254" y="236" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">95 MeV</text><text x="370" y="215" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">μ</text><text x="370" y="236" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">106 MeV</text><text x="486" y="215" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">ν</text><text x="486" y="236" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">&lt; 1 eV</text><text x="138" y="315" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">t</text><text x="138" y="336" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">173 GeV</text><text x="254" y="315" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">b</text><text x="254" y="336" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">4.2 GeV</text><text x="370" y="315" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">τ</text><text x="370" y="336" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">1.78 GeV</text><text x="486" y="315" text-anchor="middle" font-size="22" font-weight="700" fill="currentColor">ν</text><text x="486" y="336" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">&lt; 1 eV</text><text x="633" y="112" text-anchor="middle" font-size="20" font-weight="700" fill="currentColor">γ</text><text x="633" y="132" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">photon</text><text x="633" y="196" text-anchor="middle" font-size="20" font-weight="700" fill="currentColor">g</text><text x="633" y="216" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">gluon (×8)</text><text x="633" y="280" text-anchor="middle" font-size="18" font-weight="700" fill="currentColor">W±</text><text x="633" y="300" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">80.4 GeV</text><text x="633" y="346" text-anchor="middle" font-size="18" font-weight="700" fill="currentColor">Z⁰</text><text x="633" y="366" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.75">91.2 GeV</text><text x="30" y="392" font-size="11.5" fill="currentColor">Higgs boson (125 GeV, found 2012) gives particles mass; the graviton (gravity) remains hypothetical.</text><text x="30" y="412" font-size="11.5" fill="currentColor">Every matter particle also has an antiparticle; generation I is the stuff of ordinary matter.</text><text x="30" y="432" font-size="10.5" fill="currentColor" opacity="0.7">Quark masses are current masses; neutrino masses are known only from oscillations to be tiny but nonzero.</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Charges from quark content",
        problem: "Predict the charges of (a) the proton, (b) the π⁺ meson, (c) the Ω⁻ baryon, and (d) a hypothetical p p̄ bound state.",
        steps: [
          { label: "Proton", text: "$p = uud$: $\\tfrac{2}{3}+\\tfrac{2}{3}-\\tfrac{1}{3} = +1$ ✓." },
          { label: "Pion plus", text: "$\\pi^+ = u\\bar d$: $\\tfrac{2}{3}+\\tfrac{1}{3} = +1$ ✓ (the anti-down quark, $\\bar d$, carries $+\\tfrac{1}{3}$)." },
          { label: "Omega minus", text: "$\\Omega^- = sss$: three strange quarks at $-\\tfrac{1}{3}$ each gives $-1$ — predicted in 1961 by the quark model and found in 1964 with exactly that charge." },
          { label: "Protonium", text: "$p\\bar p$ totals $+1 + (-1) = 0$: an electrically neutral meson-like exotic, which indeed decays promptly into pions." },
        ],
        result: "Quark bookkeeping reproduces every hadron charge ever measured — fractional constituents adding to integer (or zero) totals is the model's most austere triumph.",
      },
      {
        title: "Quarks and Messenger Particles: Hubble check",
        problem: "A galaxy is $300\\ \\text{Mpc}$ away. With $H_0 \\approx 70\\ \\text{km/s}\\cdot\\text{Mpc}$, estimate $v = H_0d$.",
        steps: [
          { label: "Multiply", text: "$v = 70\\times 300 = 21000\\ \\text{km/s}$." },
          { label: "Fraction of $c$", text: "$21000/299792 \\approx 0.07c$ — nonrelativistic, so $v = Hd$ holds." },
        ],
        result: "$v \\approx 21000\\ \\text{km/s}$.",
      },
    ],
    keyTakeaways: [
      "Six quarks in three generations with charges +2/3 and −1/3; hadron charges (p = uud, n = udd, π⁺ = ud̄) follow by simple addition.",
      "Color charge must combine to white; gluons carry color, giving confinement at long range and asymptotic freedom at short range.",
      "Messengers: photon (EM), eight gluons (strong), W± and Z⁰ (weak, hence its short range); the Higgs (2012) completes the Standard Model, gravity stays outside.",
    ],
    quiz: [
      { q: "The charge of the up quark is", options: ["+1/3", "−1/3", "+2/3", "+1"], answer: 2, explanation: "Up-type quarks (u, c, t) carry +2/3 e; down-type (d, s, b) carry −1/3 e — fractional charges never seen in isolation." },
      { q: "Free isolated quarks have never been observed because", options: ["they are too light", "the color force strengthens with separation, creating new quark-antiquark pairs instead of letting quarks escape", "they decay instantly into electrons", "they move too fast"], answer: 1, explanation: "Confinement: the gluon's self-interaction keeps the field string taut; pulling hard enough rips new pairs from the vacuum, yielding hadrons only." },
      { q: "The weak interaction is short-ranged (~10⁻¹⁸ m) because", options: ["neutrinos are light", "its messenger bosons W and Z are massive (~80–91 GeV/c²), so their virtual exchange is limited by the uncertainty principle", "quarks repel each other", "photons are neutral"], answer: 1, explanation: "Range ~ħ/(mc): heavy messengers can be borrowed only briefly, confining the weak force to subnuclear distances." },
      { q: "The Higgs boson, discovered in 2012, is responsible in the Standard Model for", options: ["binding quarks in protons", "giving fundamental particles their masses through coupling to the Higgs field", "carrying the weak force", "the expansion of the universe"], answer: 1, explanation: "Coupling to the everywhere-present Higgs field is what we call mass; the boson is that field's quantum, found at 125 GeV/c²." },
    ],
  },

  // ------------------------------------------------------------------ 44.4
  {
    sectionId: "hall-ch44-s4",
    readingTime: 6,
    intro: "Hubble's 1929 discovery that every galaxy recedes from us at a speed proportional to its distance abolished the static universe overnight. Run the expansion backward and you get a hot, dense beginning — a Big Bang — whose afterglow still fills the sky at 2.7 K, whose nuclear furnace set the cosmic hydrogen-helium ratio, and whose present composition is 95% stuff we cannot see: dark matter and dark energy.",
    objectives: [
      "State Hubble's law and use it to convert recession velocities into distances",
      "Summarize the evidence for the Big Bang: redshifts, the cosmic background radiation, and primordial abundances",
      "Describe the roles of dark matter and dark energy in the universe's composition and acceleration",
    ],
    concepts: [
      {
        term: "Hubble's law",
        kind: "law",
        statement: "Galaxies recede with speeds proportional to their distances: $$v = Hr,\\qquad H \\approx 71\\ \\mathrm{km/s/Mpc} = 2.3\\times10^{-18}\\ \\mathrm{s^{-1}}.$$ The redshift of spectral lines, $z = \\Delta\\lambda/\\lambda \\approx v/c$ for modest speeds, measures $v$; Hubble's law then yields the distance.",
        detail: "The inverse of H, about $1.4\\times10^{10}$ years, sets the age scale of the universe; more refined cosmology (accounting for the change of H with time) gives 13.8 billion years. Expansion has no center: every galaxy sees the same law, like dots on an inflating balloon.",
      },
      {
        term: "The cosmic microwave background",
        kind: "insight",
        statement: "The universe was once hot, opaque plasma; expansion cooled it until electrons and nuclei combined and light streamed free — and that first light still arrives from all directions, redshifted by a factor ~1100 to a **2.7 K blackbody spectrum** of microwaves. Predicted in 1948, stumbled upon in 1965 (Penzias and Wilson), and mapped to parts-per-million by satellites (COBE, WMAP, Planck), the CMB is the Big Bang's fossil radiation.",
        detail: "Its tiny temperature ripples are the density seeds of galaxies — the detailed statistics of those fluctuations, fit by cosmological models, is how the universe's inventory is measured.",
      },
      {
        term: "Primordial nucleosynthesis",
        kind: "insight",
        statement: "In the first few minutes, while the universe was hot and dense enough for nuclear reactions, about a quarter of all mass was fused from hydrogen into helium-4 — the observed ~3:1 hydrogen-to-helium ratio in stars and gas everywhere matches the calculation from first minutes' physics, an independent confirmation of the hot Big Bang.",
        detail: "The measured abundances of D, ³He and ⁷Li also date the baryon density: ordinary matter amounts to just under 5% of the universe's energy content.",
      },
      {
        term: "Dark matter and dark energy",
        kind: "insight",
        statement: "Galaxies rotate as if held by far more mass than their light shows (Rubin's rotation curves), and gravitational lensing agrees: about **27% of the universe is dark matter**, interacting only gravitationally. And since 1998, observations of distant Type Ia supernovae show the expansion is **accelerating**, driven by **dark energy** — about **68%** of the total budget, whose physical nature is unknown.",
        detail: "The full ledger: ~5% ordinary matter, ~27% dark matter, ~68% dark energy. The physics that this book has taught — quarks to galaxies — describes the smallest slice of the cosmic pie, and its boundaries are today's frontiers.",
      },
      {
        term: "Cosmology: solution protocol",
        kind: "method",
        statement: "**Solve Cosmology problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the Standard Model taxonomy and Hubble expansion; the working equation is $v = Hr$, $H_0 \\approx 70\\ \\text{km/s}\\cdot\\text{Mpc}$, $E = mc^2$; every substitution must carry its units so the final unit (megaparsecs and $\\text{GeV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $H_0^{-1}\\sim 14\\ \\text{Gyr}$; CMB $2.7\\ \\text{K}$; Standard Model tested to $10^{-12}\\ \\text{s}$; $v = Hr$ for $z\\ll 1$.",
      },
    ],
    examples: [
      {
        title: "Distance and lookback time from a redshift",
        problem: "A galaxy's hydrogen spectrum shows a redshift z = 0.15 (Δλ/λ = 0.15). Using H = 71 km/s/Mpc, find its recession speed and distance.",
        steps: [
          { label: "Speed", text: "$v \\approx zc = 0.15(3.00\\times10^{5}\\ \\mathrm{km/s}) = 4.5\\times10^{4}\\ \\mathrm{km/s}$ — 15% of light speed." },
          { label: "Distance", text: "$d = v/H = (4.5\\times10^{4}\\ \\mathrm{km/s})/(71\\ \\mathrm{km/s/Mpc}) = 6.3\\times10^{2}\\ \\mathrm{Mpc}$." },
          { label: "In light-years", text: "$1\\ \\mathrm{Mpc} = 3.26\\times10^{6}\\ \\mathrm{ly}$: $d = 630 \\times 3.26\\times10^{6} = 2.1\\times10^{9}\\ \\mathrm{ly}$." },
          { label: "Lookback", text: "Light left the galaxy ~2 billion years ago — well before complex life existed on Earth; telescopes are time machines by necessity." },
        ],
        result: "$v = 4.5\\times10^{4}\\ \\mathrm{km/s}$ and $d \\approx 630\\ \\mathrm{Mpc} = 2.1\\times10^{9}$ light-years, a two-billion-year lookback.",
      },
      {
        title: "Cosmology: Hubble check",
        problem: "A galaxy is $100\\ \\text{Mpc}$ away. With $H_0 \\approx 70\\ \\text{km/s}\\cdot\\text{Mpc}$, estimate $v = H_0d$.",
        steps: [
          { label: "Multiply", text: "$v = 70\\times 100 = 7000\\ \\text{km/s}$." },
          { label: "Fraction of $c$", text: "$7000/299792 \\approx 0.0233c$ — nonrelativistic, so $v = Hd$ holds." },
        ],
        result: "$v \\approx 7000\\ \\text{km/s}$.",
      },
    ],
    keyTakeaways: [
      "Hubble's law v = Hr with H ≈ 71 km/s/Mpc turns measured redshifts into cosmic distances; 1/H ≈ 1.4×10¹⁰ y sets the age scale.",
      "The 2.7 K cosmic microwave background and the universal 3:1 H:He ratio are the hot Big Bang's surviving fingerprints.",
      "The universe is ~5% ordinary matter, ~27% dark matter, ~68% dark energy — and dark energy is accelerating the expansion.",
    ],
    quiz: [
      { q: "The cosmic microwave background is", options: ["light from the first stars", "the redshifted glow of the hot early universe, released when atoms formed", "radiation from the Milky Way's center", "scattered sunlight from dust"], answer: 1, explanation: "Recombination at ~380,000 years freed the primordial light; cosmic expansion has since stretched it to a 2.7 K microwave blackbody." },
      { q: "The 3:1 hydrogen-to-helium ratio across the universe was produced", options: ["in stars over billions of years", "in the first minutes of the hot Big Bang", "inside neutron stars", "by cosmic-ray spallation"], answer: 1, explanation: "Primordial nucleosynthesis fused ~25% of the mass into helium-4 before expansion cooled and shut the reactor; stars process only a few percent more." },
      { q: "The main evidence that the universal expansion is accelerating is", options: ["the rotation curves of galaxies", "the dimness of distant Type Ia supernovae, which are farther away than a decelerating universe would place them", "the 2.7 K background temperature", "the abundance of lithium"], answer: 1, explanation: "1998's supernova surveys found standard candles too faint — too distant — unless the expansion has sped up; the driver is called dark energy." },
      { q: "Dark matter is inferred primarily from", options: ["its glow in the infrared", "gravitational effects such as galactic rotation curves and lensing exceeding what the visible mass allows", "laboratory samples", "its absorption lines"], answer: 1, explanation: "It neither emits nor absorbs light; its gravity betrays it — Vera Rubin's flat rotation curves are the classic datum." },
    ],
  },
]
