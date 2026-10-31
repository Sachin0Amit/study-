/**
 * Knowledge Universe — Energy & Sustainability — Chapter 02: Solar Power
 * 1 lesson · ~1,288 words
 * field: Energy & Sustainability
 * legacy sources: environment.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Solar Power]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 env-solar-energy-photovoltaics — Solar Energy: How Photovoltaics and Solar Thermal Actually Work
 */
import type { KnowledgeTopic } from '../../types'

export const energyCh02: KnowledgeTopic[] = [
  {
    id: "env-solar-energy-photovoltaics",
    title: "Solar Energy: How Photovoltaics and Solar Thermal Actually Work",
    domain: "Environment & Sustainability",
    field: "Energy & Sustainability",
    branch: "Solar Power",
    tier: "intermediate",
    concepts: [
      "the photovoltaic effect at a p-n junction",
      "band gap losses and the Shockley-Queisser ceiling",
      "crystalline silicon, thin film and perovskite tandems",
      "inverters, tracking and temperature derating",
      "concentrated solar-thermal with molten-salt storage",
      "capacity factor and intermittency realities",
    ],
    words: 1288,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Every hour, more energy from sunlight reaches Earth than humanity uses in a year. Photovoltaics harvest that bounty: slabs of purified silicon that turn photons directly into electricity with no moving parts, no combustion and no fuel. A solar farm is silent, modular and nearly free to run; the engineering lives in converting sunlight efficiently and handling the fact that the sun sets. This lesson covers the silicon cell's physics, the efficiency ceiling no single-junction panel escapes, competing panel technologies, solar-thermal plants, and the capacity-factor realities of where solar fits.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Photovoltaic modules are now the cheapest electricity in most of the world. Understanding why they work — and what physics limits them — separates genuine constraints from solvable ones, and explains why a laboratory curiosity of 1954 now dominates new power-plant construction.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The photovoltaic effect is a junction phenomenon. Silicon is doped with two impurities: phosphorus atoms donate spare electrons to one layer, making it n-type, while boron atoms leave electron vacancies — holes — in the other, making it p-type. At the junction, electrons diffuse across until an internal field builds up. A photon with enough energy knocks an electron loose, and that field sweeps the electron one way and the hole the other before they recombine. Collect the separated charges and you have current — a battery driven by light.",
      },
      {
        kind: "para",
        text: "Not every photon is that useful. Silicon's band gap — the minimum energy to free an electron — is about 1.1 electron-volts. Infrared photons carry less and pass straight through; ultraviolet photons carry far more, but the excess is shed as heat within picoseconds, a loss called thermalization. The Shockley-Queisser analysis of 1961 tallied these losses and found a hard ceiling near 32 percent at silicon's band gap. Lab cells nudge 27 percent and commercial modules run 20 to 23 — close to a limit set by quantum mechanics.",
      },
      {
        kind: "para",
        text: "Panel technology has consolidated around crystalline silicon. Monocrystalline modules are sliced from single-crystal ingots drawn from molten silicon — the efficiency leaders at 21 to 23 percent; polycrystalline modules, cast from cheaper blocks, trail slightly. The alternative is thin film: micrometre layers of cadmium telluride or CIGS chemicals on glass, using a hundredth of the semiconductor. The frontier is the tandem: a perovskite layer stacked on silicon, each harvesting a different slice of the spectrum, already past 33 percent in the lab.",
      },
      {
        kind: "para",
        text: "A module is only the start of a system. Cells are wired into strings feeding inverters that convert direct current to grid-ready alternating current at the maximum-power point. Single-axis trackers that follow the sun east to west lift yield 15 to 25 percent on utility farms. Heat is the quiet enemy: crystalline output falls about 0.35 percent per degree of cell temperature, so panels on a hot roof underperform the nameplate rating, stamped at a cool 25 degrees under a standard 1,000 watts per square metre.",
      },
      {
        kind: "para",
        text: "Photovoltaics is not the only way to harvest the sun. Concentrated solar-thermal plants aim thousands of mirrors at a receiver, heating a fluid to hundreds of degrees and driving a steam turbine — curved troughs or heliostat fields. The trump card is cheap heat storage: Spain's Gemasolar tower kept generating after dark by banking energy in molten salt at 565 degrees, and modern plants ship six to fifteen hours of storage — dispatchable solar, something a bare panel cannot do. The catch is cost: photovoltaics plus batteries usually undercuts it.",
      },
      {
        kind: "para",
        text: "One number captures solar's system reality: the capacity factor, actual annual output over round-the-clock output at full rating — 15 to 25 percent for utility farms. The fuel is free but arrives on nature's schedule: nothing at night, less each winter at high latitudes, and midday surges that bend California's demand curve into the shape of a duck. Modules, meanwhile, ride a learning curve — each doubling of cumulative production has cut cost roughly 20 percent, a story the renewable-transition lesson follows; it is enough that modules fell from over one hundred dollars per watt in the 1970s to under thirty cents.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Module efficiency",
        latex: "\\eta = \\frac{P_{\\text{mp}}}{G \\times A}",
        meaning: "Maximum-power output divided by the irradiance G falling on the module's area A — the fraction of sunlight converted to electricity.",
      },
      {
        kind: "formula",
        name: "Temperature derating",
        latex: "P = P_{\\text{STC}}\\left[1 + \\gamma\\,(T_{\\text{cell}} - 25)\\right]",
        meaning: "Real output at cell temperature, with the silicon temperature coefficient gamma near minus 0.35 percent per degree.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a 400-watt module's efficiency (area 1.9 square metres), its output with cells at 60 degrees, and its annual yield at five peak-sun-hours per day.",
          "Recall: efficiency is rating over irradiance times area; hot output applies the derating with gamma = -0.0035; yield = rating x peak-sun-hours x 365 x 0.85 for system losses.",
          "Apply: efficiency = 400/(1,000 x 1.9) = 21 percent. At 60 degrees: 400 x (1 - 0.0035 x 35) = 351 watts. Yield = 400 x 5 x 365 x 0.85 = 620 kWh per year.",
          "State the result: the panel loses 12 percent of its rating to heat at peak summer sun and delivers about 620 kilowatt-hours a year — a capacity factor near 18 percent.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Rooftop arrays offsetting household consumption under net metering",
          "Utility-scale farms of hundreds of megawatts",
          "Floating solar on reservoirs — cooler panels, less evaporation",
          "Solar water heaters on tens of millions of roofs",
          "Molten-salt tower plants delivering solar electricity after sunset",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Higher efficiency does not mean better economics: a cheap 21-percent module beats an exotic 30-percent one on cost per kilowatt-hour. Nameplate ratings assume cool test conditions a rooftop rarely provides. A solar farm delivers energy, not availability — divide claims of capacity by roughly five. And dirty panels bleed money: desert dust can shave output by double digits.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "p-n junction", def: "Boundary between differently doped layers whose built-in field separates photo-generated charges." },
          { term: "Band gap", def: "Minimum photon energy that frees an electron; silicon's is about 1.1 electron-volts." },
          { term: "Shockley-Queisser limit", def: "The roughly one-third efficiency ceiling on any ideal single-junction cell." },
          { term: "Thermalization", def: "Loss, as heat, of photon energy beyond the band gap." },
          { term: "Inverter", def: "Device converting module DC to grid AC at the maximum-power point." },
          { term: "Bifacial module", def: "Panel harvesting light on both faces." },
          { term: "Molten-salt storage", def: "Tanks of hot nitrate salt banking solar heat for after sunset." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "In a photovoltaic cell, the p-n junction's job is to:",
            options: [
              "heat the silicon so electrons flow faster",
              "separate light-generated electrons and holes before they recombine",
              "reflect unused photons back into the cell",
              "convert direct current into alternating current",
            ],
            answer: 1,
            explain: "Photon absorption frees electron-hole pairs; the junction's field sweeps them apart before they recombine.",
          },
          {
            q: "The Shockley-Queisser limit caps single-junction silicon cells near one-third efficiency mainly because:",
            options: [
              "silicon is too rare to purify further",
              "sub-bandgap photons pass through and above-bandgap energy is lost as heat",
              "wires and contacts consume the remainder",
              "sunlight is too weak at Earth's surface",
            ],
            answer: 1,
            explain: "A fifth of sunlight arrives below silicon's band gap and much of the rest arrives with excess energy that thermalizes — only the matched slice converts well.",
          },
          {
            q: "A 400 W module with a -0.35 percent per degree coefficient runs at a cell temperature of 45 degrees. Its output is about:",
            options: ["428 W", "400 W", "372 W", "260 W"],
            answer: 2,
            explain: "P = 400 x (1 - 0.0035 x 20) = 372 W — heat subtracts from the nameplate.",
          },
          {
            q: "Concentrated solar-thermal plants compete with photovoltaics mainly by offering:",
            options: [
              "higher cell efficiency",
              "cheap heat storage that generates after sunset",
              "full output on cloudy days",
              "freedom from steam turbines",
            ],
            answer: 1,
            explain: "Molten-salt storage makes their electricity dispatchable — though photovoltaics plus batteries usually wins on cost.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Pair with the wind-energy lesson — the other pillar of variable renewables — and the renewable-transition lesson for how grids absorb them. The dams lesson in Engineering covers hydropower, the dispatchable renewable.",
        tone: "path",
      },
    ],
  },
]
