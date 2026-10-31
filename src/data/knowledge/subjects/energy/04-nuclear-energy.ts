/**
 * Knowledge Universe — Energy & Sustainability — Chapter 04: Nuclear Energy
 * 2 lessons · ~2,762 words
 * field: Nuclear Technology
 * legacy sources: technology-applied.ts, x69-library-org-convergence.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Nuclear Technology]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 env-nuclear-fission-fusion — Nuclear Energy: Fission Today, Fusion Tomorrow
 *   04.2 tech-nuclear-fission-reactors — Inside a Nuclear Reactor
 */
import type { KnowledgeTopic } from '../../types'

export const energyCh04: KnowledgeTopic[] = [
  {
    id: 'env-nuclear-fission-fusion',
    title: 'Nuclear Energy: Fission Today, Fusion Tomorrow',
    domain: 'Environment & Sustainability',
    field: 'Nuclear Technology',
    branch: 'Nuclear Energy',
    tier: 'intermediate',
    concepts: [
      'energy density: 24 GWh from a kilogram of U-235',
      'plant anatomy: fuel, pressure vessel, containment',
      'pressurized versus boiling light-water reactors',
      'defense in depth and the three accident histories',
      'the fuel cycle and deep geological repositories',
      'small modular reactors and Gen-IV designs',
      'fusion: D\u2013T reactions, ITER and NIF ignition',
    ],
    words: 1574,
    readMins: 8,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'The solar and wind chapters covered the technologies growing fastest; this chapter covers the one already carrying the largest firm low-carbon share. Nuclear power is the concentrated end of the energy spectrum: where coal burns chemical bonds for a few electron-volts per reaction, fission splits nuclei for about 200 million electron-volts per event. The physics lesson derived E = mc\u00b2 as the exchange rate; here it is engineering. The transition chapter named nuclear as the firm low-carbon source that covers windless, sunless lulls; this lesson opens the machine — how the chain reaction is held exactly at critical, what surrounds it, what happens when systems fail, where the waste goes, and how far fusion, the other nuclear technology, has actually gotten.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Nuclear plants supply roughly a tenth of the world\u2019s electricity — and about a quarter of its low-carbon electricity — from a footprint measured in hectares. Whether that fleet should grow, shrink or merely survive is one of the defining arguments of decarbonization, and the argument is unresolvable without the engineering facts: energy density, capacity factor, waste volumes, accident statistics and construction economics. This lesson supplies the facts; the values are yours.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The neutron physics inside the vessel — why slow neutrons split U-235 efficiently, how moderator, control rods and a stalk of delayed neutrons hold the multiplication factor k at exactly 1, and why decay heat demands cooling even after shutdown — is the reactor-physics lesson\'s territory. This lesson takes the machine as given and follows the energy system outward: the plants, the accidents, the waste, the economics and the fusion horizon. The one physics number worth carrying is energy density: one kilogram of U-235, completely fissioned, releases about 8 \u00d7 10\u00b9\u00b3 joules — roughly 24 gigawatt-hours thermal, the energy of well over three thousand tonnes of coal — the claim behind every economic and waste argument that follows.", \'Safety is engineered as defense in depth — independent layers so that no single failure releases radioactivity, and each accident taught its layer. At Three Mile Island (1979), stuck valves and misread instruments melted part of one core, but the containment held and public dose was trivial; the lesson was instrumentation, control-room design and human factors. Chernobyl (1986) is the counterexample that proves the rule: an unsafe graphite-moderated design with a positive void coefficient — steam buildup increased reactivity — run through a safety test by operators who violated procedures, with no robust containment; the power excursion and graphite fire blew the building open and contaminated a continent. Fukushima Daiichi (2011) was a natural disaster hitting an otherwise working plant: the earthquake scrammed the reactors correctly, but the tsunami flooded the generators, station blackout defeated cooling, three cores melted, and zirconium\u2013steam reactions built the hydrogen that exploded the reactor buildings. The accumulated lessons — passive cooling that needs no power or operator, hardened backup electricity, filtered vents, hydrogen recombines — are written into every post-2011 design.',
      },
      {
        kind: 'para',
        text: 'Waste is small in volume and long in consequence. Spent fuel — about 25 to 30 tonnes per gigawatt-year — is mostly fertile uranium-238 (the unused ~95 percent) plus fission products and transuranics like plutonium; the open fuel cycle treats it as waste, cooling it in pools then dry casks. The settled international answer is deep geological disposal: isolate the waste in stable rock hundreds of meters down, engineered to need no human care. Finland\u2019s Onkalo repository, tunneled into billion-year-old crystalline bedrock, is the world\u2019s first operating one; France\u2019s Cig\u00e9o and Sweden\u2019s repository follow the same logic. Closed-cycle proposals would reprocess spent fuel to recover uranium and plutonium — the reason reprocessing is entangled with proliferation politics — and Gen-IV fast-reactor concepts could in principle burn the long-lived transuranics, shrinking repository demands.',
      },
      {
        kind: 'para',
        text: 'The near-term industry bet is standardization at smaller scale: small modular reactors of roughly 50\u2013300 MWe, factory-built and trucked to site, aiming to fix nuclear\u2019s real weakness — construction cost overruns on first-of-a-kind gigawatt plants like Vogtle in the United States and Hinkley Point C in Britain. Meanwhile the fleet keeps quietly delivering: the newest units at Barakah in the UAE and Vogtle 3 and 4 in Georgia run at capacity factors above ninety percent, which is why a gigawatt of nuclear matches several gigawatts of solar in delivered energy while occupying a fraction of the land. And the long-term hope is fusion: fusing deuterium and tritium releases 17.6 MeV per reaction with no long-lived waste, but demands holding a plasma at around 100 million degrees. ITER, the 35-nation tokamak under construction in France, targets about 500 MW of fusion power from 50 MW of heating; the National Ignition Facility crossed the scientific threshold in December 2022 by getting 3.15 MJ of fusion energy out of a 2.05 MJ laser shot — a milestone, though the lasers drew about 300 MJ from the wall. Fusion works; the remaining question is whether it can be made economical, which is a question for the 2040s at the earliest.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Fission energy content of uranium',
        latex: 'E_{U} \\approx 8 \\times 10^{13}\\ \\mathrm{J/kg}\\ \\approx 24\\ \\mathrm{GWh/kg}',
        meaning: 'Complete fission of one kilogram of U-235. Compare coal at ~24 MJ/kg — nuclear is roughly a million times more energy-dense per kilogram of fuel.',
      },
      {
        kind: 'formula',
        name: 'Annual energy from a reactor',
        latex: 'E = P \\times CF \\times 8760\\ \\mathrm{h}',
        meaning: 'Nameplate power P times capacity factor CF. Nuclear fleets run CF \u2248 0.90, so a 1 GW plant delivers ~7.9 TWh a year — the number to compare against any renewable build.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the annual fuel and coal equivalents of a 1 GW electrical reactor at a 0.92 capacity factor.',
          'Delivered energy: 1,000 MW \u00d7 0.92 \u00d7 8,760 h ≈ 8.06 TWh electrical per year; at ~33 percent thermal-to-electric efficiency the reactor must produce ≈ 24.2 TWh ≈ 87 PJ of heat.',
          'Fuel: 87 PJ ÷ 8 \u00d7 10\u00b9\u00b3 J/kg ≈ 1.1 tonnes of U-235 actually fissioned — which, given enrichment losses, corresponds to roughly 200 tonnes of natural uranium mined per gigawatt-year.',
          'Interpret: the same 8 TWh from coal at ~24 GJ/tonne needs on the order of 1.2\u20131.5 million tonnes of coal and its ash, versus about 200 tonnes of uranium and a few tens of tonnes of spent fuel — the entire waste-volume argument in one line of arithmetic.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Grid baseload and load-following: high-capacity-factor nuclear anchors systems with large wind and solar shares',
          'Naval propulsion: aircraft carriers and submarines run on compact reactors, decades of refueling-free operation',
          'Medical and industrial isotopes: reactor-produced molybdenum-99 for diagnostics, cobalt-60 for sterilization',
          'District heating and desalination: low-grade reactor heat for cities and freshwater in cold or arid regions',
          'Space power: radioisotope generators for deep-space probes and, prospectively, fission surface power on the Moon',
          'Repository science: Onkalo\u2019s monitoring is itself a global experiment in multi-generational institutional design',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not compare nameplates: a gigawatt of nuclear at 0.92 capacity factor out-delivers three gigawatts of solar at 0.20 — always compare delivered energy. Do not lump all accidents together: Three Mile Island (contained), Chernobyl (design + no containment) and Fukushima (external flooding) failed at different layers, and each drove different design rules. Do not imagine fusion is around the corner: scientific ignition is not engineering breakeven, and net wall-plug power remains unproven. And do not treat waste volume and waste hazard as the same quantity — small volume, long lifetime, and the repository is designed for the second, not the first.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Criticality (k = 1)', def: 'The steady-state condition where each fission causes exactly one further fission; the controlled state of every power reactor.' },
          { term: 'Moderator', def: 'Material (light water, heavy water, graphite) that slows fission neutrons to energies uranium-235 captures efficiently.' },
          { term: 'Control rod', def: 'A neutron-absorbing rod (boron, cadmium) withdrawn or inserted to hold the chain reaction at k = 1.' },
          { term: 'Pressurized water reactor (PWR)', def: 'The dominant light-water design: primary water pressurized to stay liquid, exchanging heat to a separate steam loop.' },
          { term: 'Defense in depth', def: 'Stacked independent barriers — fuel ceramic, cladding, vessel, containment, siting — so no single failure releases radioactivity.' },
          { term: 'Deep geological repository', def: 'Permanent disposal hundreds of meters underground in stable host rock, as at Finland\u2019s Onkalo.' },
          { term: 'Ignition (NIF, 2022)', def: 'Fusion output (3.15 MJ) exceeding the laser energy delivered to the target (2.05 MJ) — scientific, not engineering, breakeven.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Control rods hold a reactor steady by:',
            options: [
              'speeding up the coolant',
              'absorbing neutrons so the multiplication factor stays at one',
              'cooling the fuel below critical temperature',
              'separating uranium from plutonium',
            ],
            answer: 1,
            explain: 'Boron or cadmium rods tune neutron absorption; k = 1 is a balance, and rods are the balance beam.',
          },
          {
            q: 'Chernobyl\u2019s disaster was possible primarily because:',
            options: [
              'all reactors lack containment',
              'its design had a positive void coefficient and no robust containment, run through an unsafe test',
              'uranium-235 is unstable in storage',
              'the moderator was heavy water',
            ],
            answer: 1,
            explain: 'Steam voids increased reactivity in an RBMK with no adequate containment — the negative example that shaped every subsequent safety layer.',
          },
          {
            q: 'One kilogram of fully fissioned U-235 releases roughly:',
            options: [
              '24 megawatt-hours',
              '24 gigawatt-hours — comparable to thousands of tonnes of coal',
              '24 kilowatt-hours',
              'the same energy as a tonne of coal',
            ],
            answer: 1,
            explain: 'E \u2248 8 \u00d7 10\u00b9\u00b3 J/kg ≈ 24 GWh — the million-fold energy-density advantage that defines nuclear power.',
          },
          {
            q: 'The 2022 NIF result counts as ignition because:',
            options: [
              'the facility produced net electricity',
              'fusion energy output exceeded the laser energy delivered to the target',
              'it ran longer than ITER',
              'it used no tritium',
            ],
            answer: 1,
            explain: '3.15 MJ out versus 2.05 MJ in — target gain above one; wall-plug efficiency (~300 MJ) is the engineering gap still to close.',
          },
        ],
      },
    ],
  },
  {
    id: 'tech-nuclear-fission-reactors',
    title: 'Inside a Nuclear Reactor',
    domain: 'Technology & Applied Science',
    field: 'Nuclear Technology',
    branch: 'Reactor Engineering',
    tier: 'intermediate',
    concepts: [
      'Fission and the chain reaction',
      'Moderation: slowing fast neutrons',
      'Criticality and the multiplication factor',
      'Control rods and delayed neutrons',
      'Cooling: moving the heat out',
      'Decay heat and defence in depth',
    ],
    words: 1188,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Split one uranium-235 nucleus and it releases two or three neutrons plus about 200 million electron volts — fifty million times the energy of burning a carbon atom. Left alone, the neutrons find more nuclei and the fire grows exponentially. A reactor is that fire held on a leash: a machine balanced at critical, where each generation of neutrons exactly replaces itself, nudged by control rods while coolant hauls the heat away to make steam. Everything else — pumps, containments, procedures — exists to keep that balance honest.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Roughly a tenth of the world\u2019s electricity comes from these balanced chain reactions, and naval reactors drive submarines for decades without refuelling. Reactor safety arguments are ultimately neutron arithmetic — and neutron arithmetic is something you can check yourself.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A neutron walks into a uranium-235 nucleus; the nucleus splits. Out come two radioactive fragments, gamma rays, energy, and two or three newborn neutrons racing off at several percent of light speed. If, on average, one of them triggers another fission, the reaction sustains itself; more than one and it grows, fewer and it dies. Reactor design is the art of tuning that average.',
      },
      {
        kind: 'para',
        text: "Fast neutrons glance off heavy uranium nuclei like pebbles off bowling balls, barely slowing — and fast neutrons mostly miss, since U-235's fission probability rises hundreds-fold once a neutron slows to thermal speeds, jostling at room-temperature pace. Light nuclei absorb speed best, so ordinary water — cheap, transparent, doubling as coolant — is the standard moderator: a few dozen collisions with hydrogen bring a neutron to a useful crawl.",
      },
      {
        kind: 'para',
        text: 'Define k_eff as the average number of neutrons from one fission that survive to cause another. At k = 1 the reactor is critical — steady power, each generation exactly replacing itself. Below 1 the chain dies out; above 1 power climbs. One percent above critical sounds gentle, but with neutrons multiplying every fraction of a second it is ferocious — which is why the control loop must be fast, and why delayed neutrons matter so much.',
      },
      {
        kind: 'para',
        text: 'Fission neutrons come in two flavours: prompt ones born at the instant of splitting, and a fraction under one percent — delayed — that leak out seconds later as fission fragments decay. A reactor held critical only with delayed neutrons included responds over seconds rather than microseconds, because power chases that slow supply. Cadmium or boron control rods slide between fuel assemblies to absorb neutrons on demand: in, and k falls; out, and it climbs. A knob engineers can actually turn.',
      },
      {
        kind: 'para',
        text: 'A gigawatt reactor is a water heater of heroic intensity: fuel rods sealed in zirconium, water pumped past by the tonne per second, carrying heat to steam and turbines. Lose that flow — pump failure, leak, boiling dry — and fuel temperatures climb toward meltdown within minutes. Cooling is not an accessory to the chain reaction; it is half the machine, and every famous accident is at heart a cooling failure.',
      },
      {
        kind: 'para',
        text: 'Shut the reactor down and it keeps cooking: fission fragments continue decaying, releasing about six percent of full power at first and declining slowly for years. That residue is why spent fuel spends years in water, and why the layers matter — fuel cladding, pressure vessel, containment — each a barrier assuming the one before it fails. Defence in depth is the engineering answer to the fact that nothing is perfect.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Effective multiplication factor',
        latex: 'k_{eff} = \\frac{\\text{neutrons in generation } n+1}{\\text{neutrons in generation } n}',
        meaning: 'The chain reaction\u2019s vital sign: k = 1 is steady, k < 1 dies out, k > 1 grows.',
      },
      {
        kind: 'formula',
        name: 'Reactivity',
        latex: '\\rho = \\frac{k_{eff} - 1}{k_{eff}}',
        meaning: 'The fractional distance from criticality — what control rods actually adjust, often quoted in units of 10⁻⁵ (pcm).',
      },
      {
        kind: 'formula',
        name: 'Decay heat',
        latex: 'P_{decay} \\approx 0.066\\,P_0\\,t^{-0.2}',
        meaning: 'A rough law for t seconds after shutdown: about 6% of full power at first, still near 1% a day later.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the power doubling time of a reactor at k_eff = 1.001, counting only prompt neutrons (generation time ≈ 0.0001 s) and then with delayed neutrons included (effective generation time ≈ 0.1 s).',
          'Recall the governing idea: power multiplies by k each generation, so doubling takes ln 2 / ln k ≈ 693 generations regardless of clock speed.',
          'Apply: prompt-only, 693 × 0.0001 s ≈ 0.07 s — power would double about fourteen times a second. With delayed neutrons the effective generation time rises to roughly 0.1 s, giving 693 × 0.1 s ≈ 70 s.',
          'State the result: without delayed neutrons no control system could keep up; with them, power doubles about every minute — fast enough to notice, slow enough to steer. Civilian reactor control lives entirely inside that gift.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Pressurised and boiling water reactors delivering steady, carbon-free baseload electricity',
          'Naval propulsion cores driving submarines and carriers for decades without refuelling',
          'Research reactors producing medical isotopes and neutron beams for materials science',
          'Small modular designs promising factory-built plants with passive safety',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "'Critical' does not mean dangerous — it means steady, and reactors operate critical all day. The moderator is not a shield and the coolant is not optional: severe accidents are cooling failures, not chain-reaction runaways. And 'the reactor is off' never means cold — decay heat demands cooling for years, which is why spent-fuel pools and their backup power deserve the same respect as the core.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Fission', def: 'Splitting a heavy nucleus, releasing energy and fresh neutrons.' },
          { term: 'Moderator', def: 'Light-nuclei material that slows fast neutrons to thermal speeds, where uranium fissions readily.' },
          { term: 'k_eff', def: 'Effective multiplication factor — neutrons in the next generation per neutron in this one.' },
          { term: 'Reactivity', def: 'Fractional departure from criticality, adjusted by control rods.' },
          { term: 'Delayed neutrons', def: 'The sub-percent of neutrons emitted seconds later by decaying fragments — the pace-maker of control.' },
          { term: 'Decay heat', def: 'Residual heat from fission-product decay that persists after shutdown.' },
          { term: 'Defence in depth', def: 'The layered barrier system — cladding, vessel, containment — between fuel and the world.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The job of a moderator is to:',
            options: [
              'absorb excess neutrons',
              'slow fast neutrons to thermal speeds',
              'shield the operators from radiation',
              'cool the control rods',
            ],
            answer: 1,
            explain: 'Thermal neutrons fission U-235 far more readily; water, graphite or heavy water provide the braking collisions.',
          },
          {
            q: 'A reactor operating at k_eff = 1.0 is:',
            options: ['shut down', 'exploding', 'steady at constant power', 'refuelling'],
            answer: 2,
            explain: 'Each generation of neutrons exactly replaces the last — the definition of steady critical operation.',
          },
          {
            q: 'Delayed neutrons matter because they:',
            options: [
              'carry most of the energy',
              "stretch the reactor's response time from microseconds to seconds",
              'escape through the containment',
              'are unaffected by control rods',
            ],
            answer: 1,
            explain: 'Power chases the slow delayed supply, giving control systems and humans time to respond.',
          },
          {
            q: 'Immediately after shutdown, a large reactor still produces:',
            options: [
              'essentially zero heat',
              'a few percent of full power as decay heat, requiring cooling',
              'more heat than at full power',
              'only gamma rays, which carry no heat',
            ],
            answer: 1,
            explain: 'Fission fragments keep decaying — around 6% of full power at first, near 1% after a day.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Neutron physics is self-contained here, but it pairs beautifully with heat transfer and thermodynamics. Follow with reactor generations and passive-safety designs, the fuel cycle from mine to repository, and fusion — the other way to bend nuclei into power.',
        tone: 'path',
      },
    ],
  },
]
