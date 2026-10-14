import type { SectionContent } from "../library"

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 43: Energy from the Nucleus (HRW 1309–1333), 6 sections.
// ============================================================================

export const hallCh43Content: SectionContent[] = [
  // ------------------------------------------------------------------ 43.1
  {
    sectionId: "hall-ch43-s1",
    readingTime: 5,
    intro: "Nudge a uranium-235 nucleus with a slow neutron and it does not merely absorb it — it splits into two medium-mass fragments, a spray of neutrons, and about 200 MeV of energy, three million times the yield per atom of coal burning. Each fission releases the neutrons needed to trigger the next, which is why a lump of fissile material can, if you get the geometry right, power a city.",
    objectives: [
      "Describe the sequence of events in neutron-induced fission of uranium-235",
      "Account for the ~200 MeV energy release from the binding-energy curve and itemize where it goes",
      "Define the multiplication factor and the conditions for subcritical, critical and supercritical chains",
    ],
    concepts: [
      {
        term: "Induced fission",
        kind: "definition",
        statement: "A thermal (slow) neutron absorbed by ²³⁵U forms an excited compound nucleus ²³⁶U* that deforms like a charged liquid drop and splits: $$^{235}\\mathrm{U} + n \\to {}^{236}\\mathrm{U}^* \\to X + Y + \\bar\\nu\\,n + \\gamma,$$ where $X$ and $Y$ are asymmetric fragments (masses near $A \\approx 95$ and $A \\approx 140$) and $\\bar\\nu \\approx 2.4$ neutrons are released on average.",
        detail: "Why slow neutrons? Their de Broglie wavelengths are large, their wavefunctions overlap the nucleus generously, and the fission probability rises steeply as neutron energy falls — which is why reactors go to the trouble of moderating their neutrons.",
      },
      {
        term: "The energy release",
        kind: "insight",
        statement: "Reading the binding energy curve leftward: fragments near $A = 118$ are bound by ~8.4 MeV/nucleon against 7.57 for uranium, so each of the ~235 nucleons gains ~0.85 MeV — about **200 MeV per fission**. Most of it emerges promptly as fragment kinetic energy (~165 MeV); the rest arrives later through beta decays and gamma rays, with ~12 MeV carried off by neutrinos.",
        detail: "Chemical burning releases a few eV per atom; fission releases ~10⁸ eV per atom. One gram of ²³⁵U (about a paperclip's worth of uranium) delivers $8.2\\times10^{10}\\ \\mathrm{J}$ — several tonnes of TNT.",
      },
      {
        term: "Chain reaction and criticality",
        kind: "law",
        statement: "Fission neutrons can trigger further fissions; the ratio of new fissions to old ones is the **multiplication factor k**. $k < 1$: subcritical, the chain dies out; $k = 1$: critical, self-sustaining steady power (a reactor's operating point); $k > 1$: supercritical, exponential runaway (a bomb's fuel assembly).",
        detail: "Control is everything: the fraction of neutrons that leak out, get captured without fission, or are absorbed by poisons determines k, and a reactor is engineered to hover at k = 1 through feedback rather than luck.",
      },
      {
        term: "Fissile versus fertile",
        kind: "insight",
        statement: "²³⁵U (0.72% of natural uranium) fissions readily with thermal neutrons; ²³⁸U (99.3%) mostly absorbs fast neutrons without fissioning. But that absorption breeds ²³⁹Pu, which is fissile — the reactor can manufacture its own fuel (Section 43-2).",
        detail: "The asymmetry of the fragment split is itself physics: symmetric splits would have to pass through more deformed, lower-binding configurations, and the asymmetric channel wins the race to scission.",
      },
      {
        term: "Nuclear Fission: solution protocol",
        kind: "method",
        statement: "**Solve Nuclear Fission problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fission $Q \\approx 200\\ \\text{MeV}$ and the $p$-$p$ chain $26.7\\ \\text{MeV}$ per He; the working equation is $Q_{\\text{fission}} \\approx 200\\ \\text{MeV}$, $4p\\to {}^{4}\\!He+2e^++2\\nu_e+26.7\\ \\text{MeV}$; every substitution must carry its units so the final unit ($\\text{MeV}$ and $\\text{MW}\\cdot\\text{day}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission; $k = 1$ critical; Coulomb barrier needs $10^7\\ \\text{K}$.",
      },
    ],
    examples: [
      {
        title: "One gram of uranium-235 versus coal",
        problem: "Estimate the energy released by complete fission of 1.0 g of ²³⁵U and the mass of coal (30 MJ/kg) delivering the same energy.",
        steps: [
          { label: "Count nuclei", text: "$N = m/(Am_\\mathrm{u}) = 1.0\\times10^{-3}\\ \\mathrm{kg}/(235 \\times 1.66\\times10^{-27}\\ \\mathrm{kg}) = 2.56\\times10^{21}$." },
          { label: "Energy", text: "$E = N(200\\ \\mathrm{MeV}) = (2.56\\times10^{21})(200)(1.602\\times10^{-13}\\ \\mathrm{J}) = 8.2\\times10^{10}\\ \\mathrm{J}$." },
          { label: "Coal mass", text: "$m_\\mathrm{coal} = 8.2\\times10^{10}/(3.0\\times10^{7}\\ \\mathrm{J/kg}) = 2.7\\times10^{3}\\ \\mathrm{kg}$ — about three tonnes." },
          { label: "Scale check", text: "A 1 GW power plant running a day needs $8.64\\times10^{13}\\ \\mathrm{J}/8.2\\times10^{10} \\approx 1.05\\ \\mathrm{kg}$ of ²³⁵U fissioned per day." },
        ],
        result: "1 g of ²³⁵U releases $8.2\\times10^{10}$ J, matching ~2.7 tonnes of coal: the factor $3\\times10^{6}$ in energy density that defines nuclear fuel.",
      },
      {
        title: "Nuclear Fission: fission-energy check",
        problem: "One mole-equivalent ($10^{24}$ fissions) each releases $200\\ \\text{MeV}$. How much energy is that?",
        steps: [
          { label: "Per fission", text: "$200\\ \\text{MeV} = 200\\times 10^6\\times 1.60\\times 10^{-19} = 3.20\\times 10^{-11}\\ \\text{J}$." },
          { label: "Total", text: "$10^{24}\\times 3.20\\times 10^{-11} = 3.20\\times 10^{+13}\\ \\text{J}$ ($\\approx 8.9\\ \\text{MW}\\cdot\\text{h}$)." },
        ],
        result: "$E \\approx 3.20\\times 10^{+13}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      "Thermal neutrons on ²³⁵U produce asymmetric fragments plus ~2.4 neutrons and ~200 MeV per fission.",
      "The energy gain is the climb up the binding-energy curve from 7.57 to ~8.4 MeV/nucleon, mostly appearing as fragment kinetic energy.",
      "Criticality is the balance of neutron production and loss (k = 1 steady, k > 1 runaway); slow neutrons are the efficient triggers.",
    ],
    quiz: [
      { q: "The energy released in a single ²³⁵U fission is about", options: ["2 eV", "200 keV", "200 MeV", "200 GeV"], answer: 2, explanation: "About 200 MeV, mostly as kinetic energy of the two fragments, with betas, gammas and neutrinos carrying the remainder." },
      { q: "Thermal (slow) neutrons are preferred for inducing fission in ²³⁵U because", options: ["they carry more kinetic energy", "their larger de Broglie wavelength gives a much larger fission cross section", "they cannot be captured", "they avoid producing fragments"], answer: 1, explanation: "Slow neutrons overlap the nucleus more effectively; fission probability rises steeply as neutron energy drops, which is why reactors moderate." },
      { q: "A chain reaction with multiplication factor k = 0.9 is", options: ["critical", "supercritical", "subcritical — the chain dies away geometrically", "impossible"], answer: 2, explanation: "Each generation is 90% of the last; the process winds down like compound interest in reverse." },
      { q: "Compared with burning carbon (~5 eV per atom), fission releases roughly", options: ["a hundred times more energy per atom", "ten thousand times more", "a few million times more", "the same energy"], answer: 2, explanation: "200 MeV versus a few eV is a factor of ~4e7 per reaction; per unit fuel mass the ratio is about 3 million." },
    ],
  },

  // ------------------------------------------------------------------ 43.2
  {
    sectionId: "hall-ch43-s2",
    readingTime: 5,
    intro: "A nuclear reactor is a kettle with extraordinary bookkeeping: fuel rods supply the fissions, a moderator slows the neutrons so they can find more uranium, control rods swallow whatever excess the reaction offers, and coolant carries away the heat. Around that core lives everything from electricity grids to isotope factories — and the same machine can quietly convert useless uranium-238 into plutonium fuel.",
    objectives: [
      "Identify the essential components of a fission reactor and the function of each",
      "Explain how moderation and delayed neutrons make reactor control possible",
      "Describe breeding: how ²³⁸U captures neutrons to become fissile ²³⁹Pu",
    ],
    concepts: [
      {
        term: "Anatomy of a reactor",
        kind: "method",
        statement: "The core contains (1) **fuel** — enriched ²³⁵U (typically 3–4%) in oxide pellets and zirconium-clad rods; (2) a **moderator** — light water, heavy water or graphite — to slow fission neutrons to thermal energies; (3) **control rods** — cadmium or boron, strong neutron absorbers, inserted or withdrawn to trim k; (4) **coolant** carrying the thermal power to turbines; (5) **shielding** against radiation; and (6) emergency systems that flood the core with absorber.",
        detail: "Heavy water deuterium moderates while absorbing almost nothing, letting natural (unenriched) uranium fuel the CANDU design; light water is cheaper but requires enrichment.",
      },
      {
        term: "Moderation and control physics",
        kind: "insight",
        statement: "Neutrons lose energy most efficiently in elastic collisions with nuclei of similar mass, so hydrogen-rich water (or carbon in graphite) tumbles them down to thermal energies in a few dozen collisions. Crucially, about 1% of fission neutrons are **delayed** — emitted by neutron-rich fission fragments seconds after the event — and this small delayed fraction stretches the reactor's time response from milliseconds to seconds, making smooth control physically possible.",
        detail: "A reactor is engineered so that k exceeds 1 only with the delayed neutrons included; then the power level follows the slow decay of the precursors, and a mechanical control system (and the negative temperature feedback of a well-designed core) can track it.",
      },
      {
        term: "Breeding",
        kind: "insight",
        statement: "Neutrons absorbed in ²³⁸U (rather than in ²³⁵U or the moderator) transmute it: $$^{238}\\mathrm{U} \\xrightarrow{(n,\\gamma)} {}^{239}\\mathrm{U} \\xrightarrow{\\beta^-} {}^{239}\\mathrm{Np} \\xrightarrow{\\beta^-} {}^{239}\\mathrm{Pu},$$ and ²³⁹Pu fissions with thermal neutrons just as handily as ²³⁵U. A **breeder reactor** surrounds its core with ²³⁸U (or ²³²Th → ²³³U) and produces more fissile atoms than it burns.",
        detail: "Since natural uranium is 99.3% ²³⁸U, breeding in principle multiplies the fuel supply by more than a hundred — the resource argument behind fast breeder programs.",
      },
      {
        term: "The Nuclear Reactor: solution protocol",
        kind: "method",
        statement: "**Solve The Nuclear Reactor problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fission $Q \\approx 200\\ \\text{MeV}$ and the $p$-$p$ chain $26.7\\ \\text{MeV}$ per He; the working equation is $Q_{\\text{fission}} \\approx 200\\ \\text{MeV}$, $4p\\to {}^{4}\\!He+2e^++2\\nu_e+26.7\\ \\text{MeV}$; every substitution must carry its units so the final unit ($\\text{MeV}$ and $\\text{MW}\\cdot\\text{day}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission; $k = 1$ critical; Coulomb barrier needs $10^7\\ \\text{K}$.",
      },
      {
        term: "The Nuclear Reactor: scales and validity",
        kind: "insight",
        statement: "**The Nuclear Reactor lives at $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission and the textbook model holds while $k = 1$ critical; Coulomb barrier needs $10^7\\ \\text{K}$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a The Nuclear Reactor calculation gives seconds when $\\text{MeV}$ and $\\text{MW}\\cdot\\text{day}$ demands meters, or a value orders of magnitude beyond $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Annual fuel budget of a 1 GW thermal reactor",
        problem: "A reactor delivers 1.0 GW of thermal power continuously for a year. How much ²³⁵U must fission, at 200 MeV per fission?",
        steps: [
          { label: "Energy per year", text: "$E = Pt = (1.0\\times10^{9}\\ \\mathrm{W})(3.15\\times10^{7}\\ \\mathrm{s}) = 3.15\\times10^{16}\\ \\mathrm{J}$." },
          { label: "Fissions", text: "Each fission yields $200\\ \\mathrm{MeV} = 3.2\\times10^{-11}\\ \\mathrm{J}$: $N_f = 3.15\\times10^{16}/3.2\\times10^{-11} = 9.8\\times10^{26}$." },
          { label: "Mass", text: "$m = N_f(235)(1.66\\times10^{-27}\\ \\mathrm{kg}) = 3.8\\times10^{2}\\ \\mathrm{kg}$ of ²³⁵U fissioned per year." },
          { label: "Reality check", text: "Real cores load several tonnes, since fuel must be replaced before it fully burns (fission products absorb neutrons) — but the physics bookkeeping stands at about 400 kg per gigawatt-year." },
        ],
        result: "About $4\\times10^{2}\\ \\mathrm{kg}$ of ²³⁵U fissioned per GW-year — a few hundred kilograms per year, against millions of tonnes of coal for the same energy.",
      },
      {
        title: "The Nuclear Reactor: fission-energy check",
        problem: "One mole-equivalent ($10^{24}$ fissions) each releases $200\\ \\text{MeV}$. How much energy is that?",
        steps: [
          { label: "Per fission", text: "$200\\ \\text{MeV} = 200\\times 10^6\\times 1.60\\times 10^{-19} = 3.20\\times 10^{-11}\\ \\text{J}$." },
          { label: "Total", text: "$10^{24}\\times 3.20\\times 10^{-11} = 3.20\\times 10^{+13}\\ \\text{J}$ ($\\approx 8.9\\ \\text{MW}\\cdot\\text{h}$)." },
        ],
        result: "$E \\approx 3.20\\times 10^{+13}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      "Core components: enriched fuel, moderator (water/graphite/D₂O), cadmium or boron control rods, coolant, shielding.",
      "Delayed neutrons stretch the reactor's response time from milliseconds to seconds — the margin that makes control feasible.",
      "Neutron capture on ²³⁸U breeds ²³⁹Pu through two beta decays; breeder reactors can create more fuel than they consume.",
    ],
    quiz: [
      { q: "The moderator's job is to", options: ["absorb excess neutrons", "slow fast fission neutrons to thermal energies so they fission ²³⁵U efficiently", "cool the fuel rods directly", "breed plutonium"], answer: 1, explanation: "Elastic scattering on light nuclei (H, D, C) tumbles the neutrons down in energy; absorption is the control rods' job." },
      { q: "Delayed neutrons are essential to reactor control because they", options: ["carry most of the energy", "allow the chain reaction to respond on a seconds timescale rather than milliseconds", "prevent fission entirely", "are emitted by the moderator"], answer: 1, explanation: "Emission from beta-decaying fragments seconds later stretches the prompt neutron lifetime into a range mechanical systems can follow." },
      { q: "Control rods are made of cadmium or boron because these", options: ["are very dense metals", "have enormous neutron-capture cross sections", "moderate neutrons quickly", "melt at low temperature"], answer: 1, explanation: "Strong absorbers trim the neutron population — pushing k down — and can be inserted to whatever depth the power demands." },
      { q: "In the breeding sequence, ²³⁹U becomes ²³⁹Pu through", options: ["two beta-minus decays", "alpha decay", "electron capture twice", "gamma emission only"], answer: 0, explanation: "238U(n,gamma)239U, then beta-minus to neptunium-239 and beta-minus again to plutonium-239, which is fissile." },
    ],
  },

  // ------------------------------------------------------------------ 43.3
  {
    sectionId: "hall-ch43-s3",
    readingTime: 4,
    intro: "In 1972 a French fuel-processing lab noticed that uranium from a mine in Oklo, Gabon, was short of ²³⁵U — as though some of it had already been burned. The only explanation, now universally accepted, is that two billion years ago the ore at Oklo went critical on its own: a natural, water-moderated fission reactor that ran for millennia before anyone existed to observe it.",
    objectives: [
      "Describe the isotopic anomaly that revealed the Oklo natural reactor",
      "Compute the ²³⁵U fraction two billion years ago from the decay law",
      "Explain the groundwater moderation and self-regulation that sustained the reaction",
    ],
    concepts: [
      {
        term: "The Oklo anomaly",
        kind: "insight",
        statement: "Uranium from Oklo contained as little as 0.44% ²³⁵U (natural today: 0.72%), and neighboring elements carried the isotopic fingerprints of fission products — for example, neodymium whose isotope ratios match fission yields rather than natural abundances. The inescapable reading: the deposit had hosted sustained fission chains.",
        detail: "Over a dozen reactor zones have since been mapped at the site; the fission-product isotopes stayed put for two billion years, a natural experiment in radioactive-waste containment that geologists still mine for data.",
      },
      {
        term: "Why then and not now",
        kind: "law",
        statement: "²³⁵U ($T_{1/2} = 7.04\\times10^{8}$ y) decays faster than ²³⁸U ($4.47\\times10^{9}$ y). Running the exponential decay backward, the ²³⁵U fraction at time $t$ ago is $$f(t) = \\frac{f_0e^{+\\lambda_{235}t}}{f_0e^{\\lambda_{235}t} + (1-f_0)e^{\\lambda_{238}t}}$$ — two billion years ago it was about **3.7%**, right in the range of modern enriched reactor fuel.",
        detail: "At 3.7% enrichment, ordinary water is a sufficient moderator for a critical assembly; at today's 0.72% it is not, which is why the trick cannot repeat in the present epoch.",
      },
      {
        term: "Self-regulation by groundwater",
        kind: "insight",
        statement: "Rainwater percolating through the porous ore served as moderator and reflector: more water, better thermalization, more fissions — and the fission heat boiled the water away, throttling the reaction back. This negative feedback cycled the zones between power and shutdown for perhaps 10⁵ years at power levels of order 100 kW thermal.",
        detail: "The same physics protects modern light-water reactors: a core that heats up loses moderation and shuts itself down — a passive safety feature operating for geological time at Oklo.",
      },
      {
        term: "A Natural Nuclear Reactor: solution protocol",
        kind: "method",
        statement: "**Solve A Natural Nuclear Reactor problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fission $Q \\approx 200\\ \\text{MeV}$ and the $p$-$p$ chain $26.7\\ \\text{MeV}$ per He; the working equation is $Q_{\\text{fission}} \\approx 200\\ \\text{MeV}$, $4p\\to {}^{4}\\!He+2e^++2\\nu_e+26.7\\ \\text{MeV}$; every substitution must carry its units so the final unit ($\\text{MeV}$ and $\\text{MW}\\cdot\\text{day}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission; $k = 1$ critical; Coulomb barrier needs $10^7\\ \\text{K}$.",
      },
      {
        term: "A Natural Nuclear Reactor: scales and validity",
        kind: "insight",
        statement: "**A Natural Nuclear Reactor lives at $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission and the textbook model holds while $k = 1$ critical; Coulomb barrier needs $10^7\\ \\text{K}$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a A Natural Nuclear Reactor calculation gives seconds when $\\text{MeV}$ and $\\text{MW}\\cdot\\text{day}$ demands meters, or a value orders of magnitude beyond $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Uranium-235 abundance two billion years ago",
        problem: "Today ²³⁵U is 0.720% of natural uranium. Using $T_{1/2}(235) = 7.04\\times10^{8}$ y and $T_{1/2}(238) = 4.47\\times10^{9}$ y, find the ²³⁵U fraction $2.0\\times10^{9}$ years ago.",
        steps: [
          { label: "Decay constants", text: "$\\lambda_{235} = 0.693/7.04\\times10^{8} = 9.85\\times10^{-10}\\ \\mathrm{y^{-1}}$; $\\lambda_{238} = 0.693/4.47\\times10^{9} = 1.55\\times10^{-10}\\ \\mathrm{y^{-1}}$." },
          { label: "Growth factors", text: "Backwards: $e^{\\lambda_{235}t} = e^{(9.85\\times10^{-10})(2.0\\times10^{9})} = e^{1.97} = 7.2$; $e^{\\lambda_{238}t} = e^{0.310} = 1.36$." },
          { label: "Abundance", text: "$f = \\frac{(0.00720)(7.2)}{(0.00720)(7.2) + (0.99280)(1.36)} = \\frac{0.0518}{0.0518 + 1.354} = 0.037$." },
          { label: "Interpretation", text: "3.7% ²³⁵U — enrichment typical of today's commercial reactor fuel, making the ore at Oklo a naturally critical candidate." },
        ],
        result: "The ²³⁵U fraction was about **3.7%**, so a water-moderated critical assembly was possible then and is impossible in ore formed today.",
      },
      {
        title: "A Natural Nuclear Reactor: fission-energy check",
        problem: "One mole-equivalent ($10^{24}$ fissions) each releases $200\\ \\text{MeV}$. How much energy is that?",
        steps: [
          { label: "Per fission", text: "$200\\ \\text{MeV} = 200\\times 10^6\\times 1.60\\times 10^{-19} = 3.20\\times 10^{-11}\\ \\text{J}$." },
          { label: "Total", text: "$10^{24}\\times 3.20\\times 10^{-11} = 3.20\\times 10^{+13}\\ \\text{J}$ ($\\approx 8.9\\ \\text{MW}\\cdot\\text{h}$)." },
        ],
        result: "$E \\approx 3.20\\times 10^{+13}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      "Oklo's deficit of ²³⁵U plus fission-product isotope ratios reveal natural reactors that ran ~2×10⁹ years ago.",
      "Differential decay (7.04×10⁸ y versus 4.47×10⁹ y half-lives) put natural uranium at ~3.7% ²³⁵U back then.",
      "Groundwater moderation with boiling feedback self-regulated the zones — the same negative feedback engineered into modern cores.",
    ],
    quiz: [
      { q: "The first clue pointing to the Oklo natural reactor was", options: ["a crater in Gabon", "uranium ore deficient in ²³⁵U relative to normal natural uranium", "unusual radiation sickness among miners", "an excess of gold"], answer: 1, explanation: "Some samples held as little as 0.44% 235U versus 0.72% normal — as if part of the fissile inventory had been consumed by fission." },
      { q: "Two billion years ago natural uranium could sustain a chain reaction because", options: ["the strong force was stronger then", "the ²³⁵U fraction (~3.7%) was high enough for water-moderated criticality", "there was no water on Earth", "²³⁸U had not been invented"], answer: 1, explanation: "The shorter half-life of 235U means its relative abundance was far higher in the past, reaching modern-enrichment levels." },
      { q: "At Oklo the reaction was regulated mainly by", options: ["engineers with control rods", "groundwater boiling away, which removed the moderator", "the Earth's magnetic field", "alpha decay of lead"], answer: 1, explanation: "Water provided moderation; power output boiled it off; loss of moderation throttled the chain — a natural negative-feedback loop." },
      { q: "The half-lives of ²³⁵U and ²³⁸U are respectively about", options: ["704 My and 4.47 Gy", "4.47 Gy and 704 My", "both 1.6 Gy", "5730 y and 704 My"], answer: 0, explanation: "235U decays about six times faster; that differential is what enriched ancient ore." },
    ],
  },

  // ------------------------------------------------------------------ 43.4
  {
    sectionId: "hall-ch43-s4",
    readingTime: 5,
    intro: "Fusion is the opposite strategy from fission: instead of splitting heavy nuclei down the energy hill, you push light nuclei up the steep left slope of the binding-energy curve. The obstacle is electric — every nucleus repels every other — and the rewards are a hundred times the energy per kilogram of fission, with fuel from seawater and no long-lived ashes. The barrier is beaten by heat and by quantum tunneling: thermonuclear fusion.",
    objectives: [
      "Estimate the Coulomb barrier between light nuclei and compare it with thermal energies",
      "Explain how tunneling and the Maxwell tail make fusion possible at achievable temperatures",
      "Compute the Q value of the deuterium-tritium reaction and compare yields per unit mass with fission",
    ],
    concepts: [
      {
        term: "The Coulomb barrier",
        kind: "law",
        statement: "Two nuclei of charges $Z_1e$ and $Z_2e$, treated as spheres of radius $1.2A^{1/3}$ fm touching, confront a potential hill $$U = \\frac{kZ_1Z_2e^2}{r_1 + r_2}.$$ For deuterium on tritium ($R_D + R_T \\approx 3.3$ fm) this is about $0.44\\ \\mathrm{MeV}$; for proton on proton, $0.6\\ \\mathrm{MeV}$ — yet the gas must be hot enough only that a small fraction of collisions tunnel through.",
        detail: "At $T = 10^{8}\\ \\mathrm{K}$, $k_BT$ is only 8.6 keV — fifty times below the D-T barrier. Classically no fusion could occur; the whole subject rests on the Gamow tail of the Maxwell distribution and on barrier penetration.",
      },
      {
        term: "Thermonuclear conditions",
        kind: "insight",
        statement: "A plasma hot and dense enough to fuse must be ionized (no electron shells to cheat the barrier), confined against its own pressure, and kept from its container. The temperature must supply a Maxwell tail of sufficiently energetic ions, and the tunneling probability through the barrier converts the rare fastest collisions into fusion events.",
        detail: "The reaction rate is the product of two exponentials — a falling Maxwell factor and a rising tunneling factor — whose competition defines the optimal operating temperature for any fuel pair; for D-T that optimum is near $10^{8}\\ \\mathrm{K}$.",
      },
      {
        term: "Why D-T is the fuel of first choice",
        kind: "insight",
        statement: "The reaction $$^{2}\\mathrm{H} + {}^{3}\\mathrm{H} \\to {}^{4}\\mathrm{He} + n + 17.6\\ \\mathrm{MeV}$$ has the largest reactivity at the lowest temperature of any fusion pair: it releases $3.5\\ \\mathrm{MeV/nucleon}$ — four times fission's yield per nucleon — with deuterium free in the oceans and tritium bred from lithium blankets.",
        detail: "Deuterium-deuterium fusion (Q ≈ 3–4 MeV per branch) is cleaner and its fuel is inexhaustible, but its cross section peaks at impractibly high temperature — the engineering decision that shaped every controlled-fusion program.",
      },
      {
        term: "Thermonuclear Fusion: The Basic Process: solution protocol",
        kind: "method",
        statement: "**Solve Thermonuclear Fusion: The Basic Process problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fission $Q \\approx 200\\ \\text{MeV}$ and the $p$-$p$ chain $26.7\\ \\text{MeV}$ per He; the working equation is $Q_{\\text{fission}} \\approx 200\\ \\text{MeV}$, $4p\\to {}^{4}\\!He+2e^++2\\nu_e+26.7\\ \\text{MeV}$; every substitution must carry its units so the final unit ($\\text{MeV}$ and $\\text{MW}\\cdot\\text{day}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission; $k = 1$ critical; Coulomb barrier needs $10^7\\ \\text{K}$.",
      },
      {
        term: "Thermonuclear Fusion: The Basic Process: scales and validity",
        kind: "insight",
        statement: "**Thermonuclear Fusion: The Basic Process lives at $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission and the textbook model holds while $k = 1$ critical; Coulomb barrier needs $10^7\\ \\text{K}$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Thermonuclear Fusion: The Basic Process calculation gives seconds when $\\text{MeV}$ and $\\text{MW}\\cdot\\text{day}$ demands meters, or a value orders of magnitude beyond $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Barrier and payoff for D-T fusion",
        problem: "Estimate the Coulomb barrier for deuterium-tritium contact, the thermal energy at $10^{8}\\ \\mathrm{K}$, and the Q value from the masses ($m_D = 2.014102$ u, $m_T = 3.016049$ u, $m_\\alpha = 4.002603$ u, $m_n = 1.008665$ u).",
        steps: [
          { label: "Barrier", text: "$R_D = 1.2(2)^{1/3} = 1.51$ fm, $R_T = 1.2(3)^{1/3} = 1.73$ fm; contact separation 3.24 fm." },
          { label: "Height", text: "$U = ke^2/r = 1.44\\ \\mathrm{MeV\\cdot fm}/3.24\\ \\mathrm{fm} = 0.44\\ \\mathrm{MeV}$." },
          { label: "Thermal scale", text: "$k_BT = (8.617\\times10^{-5}\\ \\mathrm{eV/K})(10^{8}\\ \\mathrm{K}) = 8.6\\ \\mathrm{keV}$ — 50 times too small classically; tunneling bridges the gap." },
          { label: "Q value", text: "$\\Delta m = (2.014102 + 3.016049) - (4.002603 + 1.008665) = 0.018883\\ \\mathrm{u}$, so $Q = (0.018883)(931.5) = 17.6\\ \\mathrm{MeV}$." },
        ],
        result: "A 0.44 MeV barrier, 8.6 keV thermal ions, and 17.6 MeV released per reaction — 3.5 MeV per nucleon, four times fission's yield per nucleon.",
      },
      {
        title: "Thermonuclear Fusion: The Basic Process: fission-energy check",
        problem: "One mole-equivalent ($10^{24}$ fissions) each releases $200\\ \\text{MeV}$. How much energy is that?",
        steps: [
          { label: "Per fission", text: "$200\\ \\text{MeV} = 200\\times 10^6\\times 1.60\\times 10^{-19} = 3.20\\times 10^{-11}\\ \\text{J}$." },
          { label: "Total", text: "$10^{24}\\times 3.20\\times 10^{-11} = 3.20\\times 10^{+13}\\ \\text{J}$ ($\\approx 8.9\\ \\text{MW}\\cdot\\text{h}$)." },
        ],
        result: "$E \\approx 3.20\\times 10^{+13}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      "Fusion energy comes from climbing the steep left side of the binding-energy curve, where light nuclei bind progressively tighter.",
      "The Coulomb barrier (~0.4–0.7 MeV at contact) dwarfs thermal energies at 10⁸ K; fusion proceeds through quantum tunneling of the Maxwell-tail ions.",
      "D-T is the easiest pair: Q = 17.6 MeV, 3.5 MeV per nucleon, with deuterium from water and tritium bred from lithium.",
    ],
    quiz: [
      { q: "The Coulomb barrier between two fusing nuclei is due to", options: ["gravity between the nuclei", "electrostatic repulsion of the positive charges", "the Pauli exclusion principle", "friction in the plasma"], answer: 1, explanation: "Both nuclei are positively charged; only their mutual e²/r repulsion stands between them and the strong force's binding range." },
      { q: "At T = 10⁸ K, $k_BT$ is about 8.6 keV while the D-T Coulomb barrier is ~0.44 MeV. Fusion still occurs because", options: ["the barrier shrinks with temperature", "quantum tunneling lets the rare fast Maxwell-tail ions penetrate", "electrons shield the entire barrier", "the nuclei accelerate in the container"], answer: 1, explanation: "Thermonuclear fusion lives on the Gamow tail — the convolution of the Maxwell distribution with the tunneling probability." },
      { q: "The D-T reaction releases 17.6 MeV. Per nucleon involved (5 nucleons), that is", options: ["0.85 MeV, like fission", "1.8 MeV", "3.5 MeV — about four times fission's yield per nucleon", "17.6 MeV"], answer: 2, explanation: "17.6/5 = 3.5 MeV per nucleon versus ~0.85 MeV/nucleon for fission — the light end of the binding curve is steeper." },
      { q: "A plasma temperature of order 10⁸ K is needed mainly to", options: ["melt the container", "ionize the fuel and give the Maxwell tail enough fast nuclei", "make the nuclei radioactive", "slow the nuclei down"], answer: 1, explanation: "Fully ionized fuel with a hot enough energy tail makes the tunneling rate appreciable; nothing material survives contact with the plasma, hence the confinement problem." },
    ],
  },

  // ------------------------------------------------------------------ 43.5
  {
    sectionId: "hall-ch43-s5",
    readingTime: 5,
    intro: "The Sun pays for its light the hard way: four protons fuse into one helium nucleus through a chain of reactions so reluctant at its slowest step that each proton waits, on average, billions of years. That bottleneck is why the Sun has burned steadily for 4.6 billion years and will burn for five more — and why the photon warming your face began as gamma rays random-walking out of a 15-million-kelvin core.",
    objectives: [
      "Write the three steps of the proton-proton cycle and its net reaction",
      "Explain why the weak-interaction first step throttles the Sun's burn rate",
      "Compute the Sun's luminosity, mass-conversion rate and hydrogen consumption from the solar constant",
    ],
    concepts: [
      {
        term: "The proton-proton cycle",
        kind: "law",
        statement: "In the Sun's core (T ≈ 1.5×10⁷ K) the dominant chain is $$p + p \\to {}^{2}\\mathrm{H} + e^+ + \\nu,\\qquad {}^{2}\\mathrm{H} + p \\to {}^{3}\\mathrm{He} + \\gamma,\\qquad {}^{3}\\mathrm{He} + {}^{3}\\mathrm{He} \\to {}^{4}\\mathrm{He} + 2p.$$ Net: four protons become one ⁴He, two positrons and two neutrinos, releasing **26.7 MeV** (after the positrons annihilate).",
        detail: "Three of the four protons-to-helium conversions require no weak interaction; it is the first step — turning a proton into a neutron via the weak force — that gates the whole chain.",
      },
      {
        term: "The bottleneck that stabilizes the Sun",
        kind: "insight",
        statement: "The first step converts a proton into a neutron and must go through the weak interaction, whose W-boson physics makes it staggeringly rare: a given proton in the solar core waits **of order billions of years** for its fusion. Remove that bottleneck and the Sun would flash like a bomb; with it, the Sun burns at 4×10²⁶ W for ten billion years.",
        detail: "The cycle also explains the solar neutrino flux: every helium nucleus manufactured deep inside releases exactly two electron neutrinos, giving Earth a continuous 6×10¹⁰ neutrinos per cm² per second beam — the Sun's only unfiltered report from its core.",
      },
      {
        term: "Energy budget and the CNO alternative",
        kind: "insight",
        statement: "The Sun's 26.7 MeV per helium nucleus comes out mostly as gamma radiation that scatters (random-walks) outward for ~10⁵ years before reaching the photosphere; about 2% escapes promptly as neutrinos. In stars a few times heavier than the Sun, the carbon-nitrogen-oxygen cycle catalyzes the same net conversion and dominates the luminosity.",
        detail: "Every step of both cycles climbs the binding-energy curve: ⁴He is bound at 7.07 MeV/nucleon against zero for free protons, and 0.7% of the fused mass converts to energy.",
      },
      {
        term: "Thermonuclear Fusion in the Sun and Other Stars: solution protocol",
        kind: "method",
        statement: "**Solve Thermonuclear Fusion in the Sun and Other Stars problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fission $Q \\approx 200\\ \\text{MeV}$ and the $p$-$p$ chain $26.7\\ \\text{MeV}$ per He; the working equation is $Q_{\\text{fission}} \\approx 200\\ \\text{MeV}$, $4p\\to {}^{4}\\!He+2e^++2\\nu_e+26.7\\ \\text{MeV}$; every substitution must carry its units so the final unit ($\\text{MeV}$ and $\\text{MW}\\cdot\\text{day}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission; $k = 1$ critical; Coulomb barrier needs $10^7\\ \\text{K}$.",
      },
      {
        term: "Thermonuclear Fusion in the Sun and Other Stars: scales and validity",
        kind: "insight",
        statement: "**Thermonuclear Fusion in the Sun and Other Stars lives at $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission and the textbook model holds while $k = 1$ critical; Coulomb barrier needs $10^7\\ \\text{K}$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Thermonuclear Fusion in the Sun and Other Stars calculation gives seconds when $\\text{MeV}$ and $\\text{MW}\\cdot\\text{day}$ demands meters, or a value orders of magnitude beyond $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "The Sun's fuel bill",
        problem: "The solar constant at Earth is 1.36 kW/m² at a distance of 1.496×10¹¹ m. Find the Sun's luminosity, its rate of mass loss, and its rate of hydrogen consumption.",
        steps: [
          { label: "Luminosity", text: "$L = 4\\pi r^2 S = 4\\pi(1.496\\times10^{11})^2(1360) = 3.8\\times10^{26}\\ \\mathrm{W}$." },
          { label: "Mass loss", text: "$\\dot m = L/c^2 = 3.8\\times10^{26}/(9.0\\times10^{16}) = 4.3\\times10^{9}\\ \\mathrm{kg/s}$ — four million tonnes of pure energy per second." },
          { label: "Protons fused", text: "Each helium requires 4 protons and releases 26.7 MeV: $\\dot N_{He} = L/(26.7 \\times 1.602\\times10^{-13}) = 8.9\\times10^{37}\\ \\mathrm{/s}$, so protons fuse at $3.6\\times10^{38}\\ \\mathrm{/s}$." },
          { label: "Hydrogen consumed", text: "$\\dot m_H = (3.6\\times10^{38})(1.67\\times10^{-27}\\ \\mathrm{kg}) = 6.0\\times10^{11}\\ \\mathrm{kg/s}$ — with 0.7% of it converting to energy, consistent with $\\dot m$ above." },
        ],
        result: "L = 3.8×10²⁶ W, mass vanishing at 4.3×10⁹ kg/s, hydrogen consumed at 6×10¹¹ kg/s — about 600 million tonnes per second, for billions of years.",
      },
      {
        title: "Thermonuclear Fusion in the Sun and Other Stars: fission-energy check",
        problem: "One mole-equivalent ($10^{24}$ fissions) each releases $200\\ \\text{MeV}$. How much energy is that?",
        steps: [
          { label: "Per fission", text: "$200\\ \\text{MeV} = 200\\times 10^6\\times 1.60\\times 10^{-19} = 3.20\\times 10^{-11}\\ \\text{J}$." },
          { label: "Total", text: "$10^{24}\\times 3.20\\times 10^{-11} = 3.20\\times 10^{+13}\\ \\text{J}$ ($\\approx 8.9\\ \\text{MW}\\cdot\\text{h}$)." },
        ],
        result: "$E \\approx 3.20\\times 10^{+13}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      "The p-p chain nets 4p → ⁴He + 2e⁺ + 2ν + 26.7 MeV; the deuterium-forming first step is weak and is the bottleneck.",
      "That billion-year bottleneck is the Sun's stability: weak physics, not fuel supply, sets its lifetime.",
      "L = 3.8×10²⁶ W means 4.3×10⁹ kg/s of mass converted and 6×10¹¹ kg/s of hydrogen fused.",
    ],
    quiz: [
      { q: "The net result of the proton-proton cycle is", options: ["4 protons → 1 alpha particle + 2 positrons + 2 neutrinos + 26.7 MeV", "4 protons → 4 deuterons", "1 proton → 4 alphas", "carbon → nitrogen → oxygen"], answer: 0, explanation: "Six starting protons appear in the three steps but two come back out: the ledger closes at four in, one helium out, plus positrons and neutrinos." },
      { q: "The slowest step of the p-p cycle is slow because it", options: ["involves the strong force", "requires converting a proton into a neutron through the weak interaction", "happens only at night", "needs photons to escape first"], answer: 1, explanation: "p + p → deuterium + positron + neutrino is a weak flavor change; the billions-of-years wait per proton is the Sun's throttle." },
      { q: "In each helium nucleus produced, the fraction of fused mass converted to energy is about", options: ["0.0007%", "0.7%", "7%", "100%"], answer: 1, explanation: "26.7 MeV versus the ~3750 MeV mass of four protons is 0.71% — E = mc² with m a small sliver." },
      { q: "In stars heavier than the Sun, the dominant hydrogen-burning mechanism is", options: ["the carbon-nitrogen-oxygen catalytic cycle", "uranium fission", "triple-alpha helium burning", "gravitational collapse"], answer: 0, explanation: "The CNO cycle uses carbon as a catalyst for the same net 4p → He conversion and overtakes the p-p chain in hotter cores." },
    ],
  },

  // ------------------------------------------------------------------ 43.6
  {
    sectionId: "hall-ch43-s6",
    readingTime: 5,
    intro: "A fusion plasma at 10⁸ K touches nothing and holds nothing: any wall quenches it instantly. Humanity's answer is to fight geometry with physics — magnetic fields weave the charged plasma into doughnut-shaped cages, while laser beams squeeze peppercorn-sized fuel pellets with the intensity of a stellar interior. Both roads must clear the same hurdle: the Lawson criterion, the triple product of density, temperature and confinement time.",
    objectives: [
      "State the Lawson criterion and the parameter regime required for D-T ignition",
      "Explain magnetic confinement in a tokamak, including the roles of toroidal and poloidal fields",
      "Describe inertial confinement and the status of major experiments toward net energy gain",
    ],
    concepts: [
      {
        term: "The Lawson criterion",
        kind: "law",
        statement: "A burning plasma must confine hot, dense fuel long enough that fusion energy outpaces the energy spent heating it: for D-T at about $2\\times10^{8}$ K the requirement is roughly $$n\\tau \\gtrsim 10^{20}\\ \\mathrm{s/m^3}$$ — particle density times energy confinement time — with the fuel temperature simultaneously maintained.",
        detail: "For example, a tokamak plasma at $n = 1\\times10^{20}\\ \\mathrm{m^{-3}}$ (a hundred-thousandth of air density) must hold its heat for about one second; laser fusion instead trades enormous density ($\\sim10^{31}\\ \\mathrm{m^{-3}}$) for nanosecond confinement.",
      },
      {
        term: "Magnetic confinement: the tokamak",
        kind: "method",
        statement: "Charged particles spiral about magnetic field lines, so a toroidal (doughnut) field can bottle a plasma. Pure toroidal fields drift the particles apart, so a transformer-driven plasma current adds a **poloidal** component — the field lines wind helically around the torus and the plasma stirs itself into stability. Coils, cryogenics and radio-frequency heating complete the machine.",
        detail: "JET (1997) reached 16 MW of fusion power for 24 MW of heating (gain 0.67) with D-T; ITER, under construction, is designed for Q = 10 — 500 MW out from 50 MW in — the first physics demonstration that a burning plasma can power itself.",
      },
      {
        term: "Inertial confinement",
        kind: "method",
        statement: "Fire a synchronized fleet of the world's most energetic lasers at a millimeter-scale D-T pellet from all directions: the outer layer ablates, and by rocket-reaction the fuel implodes to stellar densities, fusing before it can fly apart (confinement by inertia alone, ~10⁻¹¹ s). The National Ignition Facility in 2022 achieved the first target gain exceeding unity: 2.05 MJ of laser light in, 3.15 MJ of fusion energy out.",
        detail: "The NIF result — net gain relative to the laser energy delivered to the target — postdates this textbook's printing and updates it: ignition physics is proven; the wall-plug efficiency of the drivers remains the engineering frontier.",
      },
      {
        term: "The road to a reactor",
        kind: "insight",
        statement: "A power plant needs more than a burning plasma: it must breed its tritium from lithium blankets, extract heat at reactor-grade fluxes, survive neutron bombardment for years, and do it cheaply. These engineering walls, rather than the Lawson criterion, now pace the field — materials that can take the neutron load are the unsolved item on the critical path.",
        detail: "A 1 GW fusion plant would burn roughly 100 kg of deuterium and a few hundred kilograms of tritium (bred on site) per year — against the 4 million tonnes of coal a coal plant of that size moves annually.",
      },
      {
        term: "Controlled Thermonuclear Fusion: solution protocol",
        kind: "method",
        statement: "**Solve Controlled Thermonuclear Fusion problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fission $Q \\approx 200\\ \\text{MeV}$ and the $p$-$p$ chain $26.7\\ \\text{MeV}$ per He; the working equation is $Q_{\\text{fission}} \\approx 200\\ \\text{MeV}$, $4p\\to {}^{4}\\!He+2e^++2\\nu_e+26.7\\ \\text{MeV}$; every substitution must carry its units so the final unit ($\\text{MeV}$ and $\\text{MW}\\cdot\\text{day}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $200\\ \\text{MeV} \\approx 3.2\\times 10^{-11}\\ \\text{J}$ per fission; $k = 1$ critical; Coulomb barrier needs $10^7\\ \\text{K}$.",
      },
    ],
    examples: [
      {
        title: "Energy in one inertial-fusion pellet",
        problem: "A laser-fusion target contains 1.0 mg of D-T fuel (equal numbers of deuterium and tritium atoms). If 30% of it burns, how much energy is released?",
        steps: [
          { label: "Reaction pairs", text: "Each pair (one D + one T) has mass $5(1.66\\times10^{-27}) = 8.3\\times10^{-27}\\ \\mathrm{kg}$: $N = 1.0\\times10^{-6}/8.3\\times10^{-27} = 1.2\\times10^{20}$ pairs." },
          { label: "Energy per pair", text: "$17.6\\ \\mathrm{MeV} = 2.82\\times10^{-12}\\ \\mathrm{J}$." },
          { label: "Total if fully burned", text: "$E = (1.2\\times10^{20})(2.82\\times10^{-12}) = 3.4\\times10^{8}\\ \\mathrm{J}$." },
          { label: "At 30% burn", text: "$E \\approx 1.0\\times10^{8}\\ \\mathrm{J}$ per shot — the energy of about 24 kg of TNT, from a speck of fuel." },
        ],
        result: "About $10^{8}$ J per pellet at 30% burn: a power plant would need ~10 shots per second to reach gigawatt scale.",
      },
      {
        title: "Controlled Thermonuclear Fusion: fission-energy check",
        problem: "One mole-equivalent ($10^{24}$ fissions) each releases $200\\ \\text{MeV}$. How much energy is that?",
        steps: [
          { label: "Per fission", text: "$200\\ \\text{MeV} = 200\\times 10^6\\times 1.60\\times 10^{-19} = 3.20\\times 10^{-11}\\ \\text{J}$." },
          { label: "Total", text: "$10^{24}\\times 3.20\\times 10^{-11} = 3.20\\times 10^{+13}\\ \\text{J}$ ($\\approx 8.9\\ \\text{MW}\\cdot\\text{h}$)." },
        ],
        result: "$E \\approx 3.20\\times 10^{+13}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      "Ignition demands the Lawson triple product: $n\\tau \\gtrsim 10^{20}\\ \\mathrm{s/m^3}$ at ~2×10⁸ K for D-T.",
      "Tokamaks confine the plasma with helical (toroidal + poloidal) magnetic fields; ITER targets Q = 10.",
      "Inertial confinement compresses pellets to stellar densities for nanoseconds; NIF achieved target gain > 1 in 2022 (2.05 MJ in, 3.15 MJ out).",
    ],
    quiz: [
      { q: "The Lawson criterion governs which combination of quantities for a fusion plasma?", options: ["pressure times volume", "density times confinement time (at adequate temperature)", "magnetic field times current", "fuel mass times half-life"], answer: 1, explanation: "n τ ≥ ~10²⁰ s/m³ for D-T: enough particles, held long enough, hot enough — the triple barrier to ignition." },
      { q: "In a tokamak the poloidal field component exists to", options: ["cool the plasma", "cancel the toroidal field", "counter particle drift so field lines wind helically and confine stably", "breed tritium"], answer: 2, explanation: "A purely toroidal field lets charges drift to the walls; the induced plasma current's poloidal field twists the lines into stable helices." },
      { q: "Inertial confinement works by", options: ["holding the plasma in a magnetic bottle for seconds", "imploding the fuel so fast it fuses before it can fly apart", "freezing the fuel solid", "using heavy nuclei instead of hydrogen"], answer: 1, explanation: "Ablation-driven implosion reaches enormous density; confinement time is the pellet's own disassembly time, ~10⁻¹¹ s." },
      { q: "The 2022 NIF ignition result was significant because", options: ["it demonstrated cold fusion", "fusion energy out (3.15 MJ) exceeded the laser energy delivered to the target (2.05 MJ)", "it sustained a plasma for a full day", "it required no tritium"], answer: 1, explanation: "First target gain above unity in the laboratory — proof of ignition physics, though the lasers' wall-plug energy remains far larger." },
    ],
  },
]
