/**
 * Knowledge Universe — Chemical Engineering — Chapter 01: Process Engineering
 * 2 lessons · ~2,515 words
 * field: Chemical Engineering
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Process Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 eng-chemical-reactors — Chemical Reactors: Where Reactions Meet Engineering
 *   01.2 eng-separation-processes-chemical — Separation Processes: Distillation, Filtration and the Art of Purification
 */
import type { KnowledgeTopic } from '../../types'

export const chemicalEngineeringCh01: KnowledgeTopic[] = [
  {
    id: "eng-chemical-reactors",
    title: "Chemical Reactors: Where Reactions Meet Engineering",
    domain: "Engineering",
    field: "Chemical Engineering",
    branch: "Process Engineering",
    tier: "advanced",
    concepts: [
      "batch versus continuous operation",
      "CSTR: perfect mixing, instant dilution",
      "PFR: unmixed slices riding a tube",
      "rate laws turned into vessel volumes",
      "exothermic runaway and relief sizing",
      "catalysts, packed beds and scale-up",
    ],
    words: 1234,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Gasoline, aspirin, the polyester in your shirt, the fertilizer that grew your food — each spent part of its life inside a chemical reactor: a vessel whose job is to make a desired reaction happen quickly, selectively and safely. Chemistry tells you whether a reaction can happen; reactor engineering decides where, how big and at what temperature it happens economically. This advanced lesson covers the two ideal reactors every chemical engineer learns first, how rate laws become vessel sizes, and why forgetting that reactions release heat can level a factory.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Reactor design is chemistry meeting arithmetic with consequences. An oversized reactor wastes capital every day of its life; an under-cooled one becomes a bomb. Runaway reactions remain the process industries' deadliest failure mode, and every investigation returns to the same handful of design lessons.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "A batch reactor is a giant kitchen pot: charge the ingredients, heat, stir, wait, discharge, clean, repeat. Its flexibility suits small-volume, high-value products — most pharmaceuticals are still made this way. A continuous reactor instead flows reactants steadily through while product flows out, running at a steady state for months; ammonia, refining and bulk chemicals go continuous because steady operation at enormous scale is where the economics live. Semi-batch operation sits between — one reactant charged, the other metered in slowly — a favorite way to tame heat release.",
      },
      {
        kind: "para",
        text: "The textbook workhorse is the continuous stirred-tank reactor, or CSTR: a well-mixed vessel fed continuously. Perfect mixing is a fiction, but a productive one — the contents are uniform, so the outlet stream is exactly what sits in the tank. Fresh concentrated feed is instantly diluted to the low exit concentration, so the whole inventory reacts at that weak concentration, all the time.",
      },
      {
        kind: "para",
        text: "The plug-flow reactor, or PFR, is the other ideal: a long tube — packed with catalyst pellets or simply empty — through which fluid moves as an orderly, unmixed column. Each slice of fluid is a tiny batch reactor riding through the tube, entering at full concentration and reacting as it travels. Nothing is diluted early, so whenever rate rises with concentration the tube exploits fast early chemistry a stirred tank throws away.",
      },
      {
        kind: "para",
        text: "Rate laws are the bridge from chemistry to hardware. For a reactant consumed at a rate proportional to concentration to the power n, speed depends on how much is present and — through the Arrhenius factor k — on temperature, often doubling every 10 degrees. Sizing then becomes bookkeeping: integrating the feed's demand for reaction time up to the target conversion gives the vessel volume — and the design equation differs by reactor type.",
      },
      {
        kind: "para",
        text: "Heat is the subplot that becomes the plot. Most desired reactions are exothermic: generation grows exponentially with temperature, while jacket cooling removes heat only in proportion to the temperature difference. Past a critical point generation outruns removal, temperature and rate chase each other upward — thermal runaway. In 2007 the T2 Laboratories plant in Jacksonville, Florida, lost cooling on a batch step; pressure surged beyond anything the vessel could hold, four people died and the blast levelled the site. The defenses are mundane: measure real heat release by calorimetry, keep inventories small, meter reactants, and size relief for runaway, not normal duty.",
      },
      {
        kind: "para",
        text: "Catalysts make modern industry possible — lowering activation energy and steering selectivity — and most industrial catalysis is heterogeneous: fluid flowing over solid pellets in packed beds that behave like plug-flow reactors. The last skill is scale-up, and geometry is against you: heat-transfer area grows with length squared while volume grows cubed, so a bigger vessel has less cooling surface per litre than the lab flask it was modeled on. Hot spots and mixing times shift with scale — which is why pilot plants exist.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "PFR design equation",
        latex: "V = F_{A0} \\int_0^X \\frac{dX}{-r_A}",
        meaning: "Reactor volume equals the molar feed rate of A times the integral of the inverse reaction rate, evaluated up to the target conversion.",
      },
      {
        kind: "formula",
        name: "First-order volumes at constant density",
        latex: "V_{\\mathrm{PFR}} = \\frac{v_0}{k}\\,\\ln\\frac{1}{1-X}, \\qquad V_{\\mathrm{CSTR}} = \\frac{v_0}{k}\\cdot\\frac{X}{1-X}",
        meaning: "At 90 percent conversion the stirred tank needs nine residence units against the tube's natural log of ten — roughly four times the volume.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: compare vessel volumes for a liquid-phase first-order reaction with k = 0.2 per minute, feed rate 0.1 cubic metres per minute, target conversion 90 percent.",
          "Recall the closed forms: PFR volume = (v0/k) ln(1/(1-X)); CSTR volume = (v0/k) X/(1-X).",
          "Apply: v0/k = 0.1/0.2 = 0.5 m³. PFR: 0.5 x ln(10) ≈ 1.15 m³. CSTR: 0.5 x (0.90/0.10) = 4.5 m³.",
          "State the result: the stirred tank needs about four times the volume of the tube for the same duty — the price of diluting feed to exit concentration from the start. Real designs split the difference with tanks in series, or a tank followed by a tubular finisher.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Ammonia synthesis — high-pressure catalytic packed beds feeding most fertilizer nitrogen",
          "Oil refineries — fluid catalytic cracking turning crude fractions into gasoline",
          "Pharmaceutical plants — recipe-driven stirred batch reactors with validated cleaning and containment",
          "Polymerization — stirred reactor trains making polyethylene and PET pellets by the kilotonne",
          "Wastewater treatment — biological reactors in which microbes are the catalyst",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Three errors recur. Treating a pilot success as a scale-up guarantee: mixing, hot spots and area-to-volume all change with size. Sizing relief valves for normal operation instead of runaway — the T2 failure. And confusing thermodynamics with kinetics: equilibrium says how far, the rate law says how fast, and only the second sizes a vessel.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Conversion", def: "The fraction of a key reactant that has reacted — what design equations integrate over." },
          { term: "CSTR", def: "Continuous stirred-tank reactor; perfectly mixed, so the outlet stream mirrors the contents." },
          { term: "PFR", def: "Plug-flow reactor; fluid moves as unmixed slices, each behaving as a traveling batch." },
          { term: "Space time", def: "Vessel volume divided by feed rate — mean time fluid spends inside." },
          { term: "Runaway", def: "Self-accelerating failure in which exothermic heat generation outruns cooling capacity." },
          { term: "Catalyst", def: "A substance that speeds a reaction and steers selectivity without being consumed." },
          { term: "Scale-up", def: "Moving a process from lab to plant, where geometry changes heat transfer and mixing." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "For a first-order reaction at fixed feed and conversion, the CSTR needs more volume than the PFR because:",
            options: [
              "it loses catalyst over time",
              "perfect mixing dilutes fresh feed to the low exit concentration",
              "tubes are always narrower than tanks",
              "stirring consumes part of the reactant",
            ],
            answer: 1,
            explain: "The tank reacts everywhere at the weak exit concentration; the tube keeps it high near the entrance — fast early chemistry a tank throws away.",
          },
          {
            q: "Thermal runaway happens because:",
            options: [
              "heat removal grows exponentially with temperature",
              "heat generation grows exponentially while removal grows only linearly",
              "stirrer motors overheat",
              "cooling water is always too cold",
            ],
            answer: 1,
            explain: "Arrhenius rates are exponential in temperature, jacket cooling only linear — past a critical point the loop closes.",
          },
          {
            q: "A first-order liquid reaction has k = 0.2 per minute, v0 = 0.1 cubic metres per minute. For 90 percent conversion the PFR volume is about:",
            options: ["0.50 m³", "1.15 m³", "4.5 m³", "9.0 m³"],
            answer: 1,
            explain: "V = (0.1/0.2) ln(10) = 0.5 x 2.30 ≈ 1.15 m³ — against 4.5 m³ for a single CSTR.",
          },
          {
            q: "Semi-batch operation — charging one reactant and metering the other in slowly — is chiefly used to:",
            options: [
              "save raw materials",
              "limit the instantaneous heat release of exothermic reactions",
              "increase batch size",
              "shorten cleaning between runs",
            ],
            answer: 1,
            explain: "Metering keeps reacting inventory small at any instant, so worst-case heat release stays within cooling reach.",
          },
        ],
      },
    ],
  },
  {
    id: "eng-separation-processes-chemical",
    title: "Separation Processes: Distillation, Filtration and the Art of Purification",
    domain: "Engineering",
    field: "Chemical Engineering",
    branch: "Process Engineering",
    tier: "intermediate",
    concepts: [
      "separations dominate plant economics",
      "relative volatility and the ease of the split",
      "reflux, trays and column staging",
      "azeotropes",
      "absorption and stripping with solvents",
      "membrane flux versus selectivity",
      "choosing by property difference",
    ],
    words: 1281,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A reactor makes molecules; a separator makes products. Almost nothing leaves a chemical plant as pure as it sells: reaction outputs arrive as brews of product, unconverted feed, solvent and byproducts, and the trains of columns, filters, dryers and crystallizers that clean them up typically account for half or more of a plant's capital and the lion's share of its energy bill. This lesson covers why separations dominate process economics, how distillation exploits boiling-point differences, and how absorption, membranes and crystallization take over when boiling is the wrong tool.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Separations are where chemistry becomes economics: the question is never whether a split is possible, but what it costs in energy and hardware. That question decides the shape — and the fate — of entire plants.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Three facts stack up. Reactions rarely run to completion: equilibrium, or a competing side reaction, calls a halt well short of clean conversion. Feedstocks are mixtures: crude oil is thousands of compounds before refining begins. And specifications are written in purity: polymer-grade propylene must clear 99.5 percent, pharmaceuticals nearer 99.9. Between those facts sits the separator train — recycle the unconverted feed, reject the byproducts, recover the solvent, polish the product. Walk any refinery plot plan and count the towers; the process is mostly separation wearing a reaction's name badge.",
      },
      {
        kind: "para",
        text: "Distillation is the workhorse because volatility is everywhere. A liquid mixture in equilibrium with its vapor is richer in the more volatile component, and the quality of the split is summarized by relative volatility — the ratio of the two components' vapor-to-liquid distributions. When that number meaningfully exceeds one, repeated boiling and condensing walks the composition toward purity, and a distillation column industrializes the repetition: vapor rises through trays while liquid descends, and every tray is one equilibration. Reflux — condensed overhead product returned to cascade back down — is the throttle, buying purity at the price of reboiler energy, which is why estimates credit distillation with roughly a tenth of industrial energy use in the United States.",
      },
      {
        kind: "para",
        text: "Volatility has limits. Some pairs form azeotropes — constant-boiling mixtures whose vapor and liquid share a composition, so no amount of tray-stacking moves past them. Ethanol and water stall near 95.6 percent alcohol, and every drop of absolute ethanol beyond that owes its existence to a trick: pressure-swing distillation, entrainers, molecular sieves or membranes. And when relative volatility drifts toward one, stage counts and reflux explode — the split stays possible on paper and becomes ruinous in steel.",
      },
      {
        kind: "para",
        text: "When the mixture is dilute, absorption and stripping take over. Gas absorption dissolves a selected component out of a gas stream into a liquid solvent — the amine units that pull carbon dioxide out of natural gas and flue gas are the canonical case, with the dirty solvent regenerated by stripping in a second column that boils or steams the pollutant back out. The economics live in the solvent: its capacity, its selectivity and the energy bill for its round trip.",
      },
      {
        kind: "para",
        text: "Membranes skip the phase change. A thin polymer or ceramic film passes one species faster than another — reverse-osmosis desalination pushing water past salt, gas-separation membranes splitting carbon dioxide from methane, dialysis in the artificial kidney. The standing tradeoff is flux against selectivity: dense membranes choose well but pass little, open ones pass plenty and choose badly, and everything fouls. Their prize is energy — no reboiler, no latent heat — which is why membrane capacity keeps growing wherever power is dear.",
      },
      {
        kind: "para",
        text: "Crystallization purifies from the other direction: cool or concentrate a solution until the desired compound drops out as ordered crystals, leaving impurities behind in the mother liquor — the route to sugar, salt, urea and most pharmaceutical actives, where the crystal's own lattice is the purity mechanism. Beneath all of it runs one rule: every separation exploits a property difference — volatility, solubility, size, charge, affinity — and process design begins by finding the property whose difference is biggest for the pair that must be split.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Relative volatility",
        latex: "\\alpha = \\frac{y_A/x_A}{y_B/x_B}",
        meaning: "Ratio of the components' distributions between vapor and liquid; alpha near one means distillation cannot economically split them.",
      },
      {
        kind: "formula",
        name: "Fenske minimum stages",
        latex: "N_{min} = \\frac{\\ln\\left[\\frac{x_D/(1-x_D)}{x_B/(1-x_B)}\\right]}{\\ln\\alpha}",
        meaning: "Ideal stages for a binary split at total reflux — the floor every real column adds margin to.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the minimum number of ideal stages to split a binary from 1 mole percent light component in the feed to 99 mole percent overhead and 1 mole percent in the bottoms, at relative volatility 2.5.",
          "Recall: Fenske's equation at total reflux, with the reboiler counted as a stage.",
          "Apply: the separation factor is (0.99/0.01) ÷ (0.01/0.99) = 9,801, so N = ln(9,801)/ln(2.5) = 9.19/0.916 ≈ 10 stages.",
          "State the result: about ten ideal stages — a real column adds margin for tray inefficiency and finite reflux, landing nearer fifteen. Drop the relative volatility toward 1.2 and the same duty needs dozens: volatility, not wishful thinking, sets the steel.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Crude distillation — the atmospheric and vacuum towers that slice oil into fractions, the largest columns ever built",
          "Cryogenic air separation — distilling air into nitrogen, oxygen and argon near -190 °C",
          "Amine scrubbing — carbon-dioxide removal from natural gas and, increasingly, from flue gas",
          "Reverse-osmosis desalination — seawater to tap water at municipal scale across Israel and the Gulf",
          "Pharmaceutical crystallization — the step that fixes a drug's purity, particle size and polymorph",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The recurring errors: designing for the feed assay and never re-checking as it drifts; forgetting azeotropes until the column cannot make specification; treating membrane fouling and crystallization nucleation as nuisances rather than design variables; and defaulting to distillation out of familiarity when a solubility gap or size difference offered a cheaper split.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Relative volatility", def: "Volatility ratio that sets how easily distillation separates two components." },
          { term: "Reflux", def: "Condensed overhead returned to the column — purity's throttle." },
          { term: "Azeotrope", def: "Constant-boiling mixture whose vapor has the same composition as its liquid." },
          { term: "Absorption", def: "Dissolving a component out of a gas stream into a liquid solvent." },
          { term: "Stripping", def: "Driving an absorbed component back out of a liquid, regenerating the solvent." },
          { term: "Flux", def: "Throughput per unit membrane area, traded away against selectivity." },
          { term: "Mother liquor", def: "The solution left behind when crystals form, holding the impurities." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Separations dominate chemical-plant cost because:",
            options: [
              "reactors are cheap to build",
              "reactions stop short of completion and specs demand purity, so cleanup is most of the plant",
              "pipes and valves are expensive",
              "regulations require duplicate columns",
            ],
            answer: 1,
            explain: "Mixed feedstocks, incomplete reactions and tight specifications together make the separation train the bulk of capital and energy.",
          },
          {
            q: "An azeotrope is a mixture that:",
            options: [
              "boils at exactly 100 °C",
              "has vapor of the same composition as its liquid, stalling simple distillation",
              "is always the desired product",
              "forms only in metals",
            ],
            answer: 1,
            explain: "At the azeotropic composition the vapor is no richer than the liquid, so tray-stacking stops working and a trick — pressure swing, sieves, entrainers — is needed to go beyond.",
          },
          {
            q: "With alpha = 2.5, x_D = 0.99 and x_B = 0.01, the Fenske minimum is about:",
            options: ["4 stages", "10 stages", "40 stages", "100 stages"],
            answer: 1,
            explain: "ln(9,801)/ln(2.5) ≈ 10 — and as alpha slides toward one, the count runs away.",
          },
          {
            q: "Reverse osmosis won municipal desalination because membranes:",
            options: [
              "reject everything but water",
              "separate without a phase change, avoiding the latent-heat bill a reboiler would pay",
              "never foul",
              "work only with organic solvents",
            ],
            answer: 1,
            explain: "No boiling means no latent heat — the same logic that puts membranes anywhere electricity is cheap relative to heat.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Chemical reactors is the other half of process engineering — this lesson's columns stand downstream of that one's vessels. The chemistry subject's practical chapters cover bench-scale purification; this is the plant-scale view.",
        tone: "path",
      },
    ],
  },
]
