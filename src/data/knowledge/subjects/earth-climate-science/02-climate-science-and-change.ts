/**
 * Knowledge Universe — Earth & Climate Science — Chapter 02: Climate Science & Change
 * 3 lessons · ~3,510 words
 * field: Climate Science
 * legacy sources: environment.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Climate Science]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 env-carbon-sinks-global-carbon-budget — Carbon Sinks and the Global Carbon Budget
 *   02.2 env-extreme-weather-attribution — Extreme Weather in a Warming World: The Science of Attribution
 *   02.3 env-climate-feedbacks-sensitivity — Climate Feedbacks and Sensitivity: Why Warming Amplifies
 */
import type { KnowledgeTopic } from '../../types'

export const earthClimateScienceCh02: KnowledgeTopic[] = [
  {
    id: 'env-carbon-sinks-global-carbon-budget',
    title: 'Carbon Sinks and the Global Carbon Budget',
    domain: 'Environment & Sustainability',
    field: 'Climate Science',
    branch: 'Biogeochemical Cycles',
    tier: 'intermediate',
    concepts: [
      'Reservoirs and fluxes',
      'The airborne fraction',
      'Ocean solubility and biological pumps',
      'Terrestrial biosphere uptake',
      'Residence time of a CO2 pulse',
      'Budget imbalance',
    ],
    words: 899,
    readMins: 4,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: "The global carbon budget is the balance sheet of the carbon cycle: human emissions from fossil fuels and land-use change, minus what ocean and land sinks reabsorb, leaves the rest to pile up in the atmosphere. Carbon flows between reservoirs — air, ocean, soils, vegetation, rocks — through fluxes that dwarf human emissions yet stayed balanced for millennia. Today roughly 45 percent of each year's emissions stay airborne, and tracking the rest is a core task of climate science.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: "Every net-zero pledge and offset scheme is an attempt to balance this budget, which for a given warming limit shrinks each year emissions continue.",
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "A reservoir is a carbon store; a flux is the transfer rate between stores. The ocean holds about 38,000 gigatonnes of carbon, and soils plus vegetation over twice the atmosphere's 880 — but only fluxes crossing into and out of the air change the greenhouse effect.",
      },
      {
        kind: 'para',
        text: "The airborne fraction is the share of each year's human emissions that stays in the atmosphere after sinks take their cut. Averaged since 1959 it sits near 45 percent, wobbling upward in hot, dry El Nino years; a persistent rise would signal saturating sinks.",
      },
      {
        kind: 'para',
        text: "The ocean absorbs CO2 two ways. The solubility pump dissolves gas into cold water and overturning circulation carries it to the deep; the biological pump has plankton fix carbon into sinking organic matter.",
      },
      {
        kind: 'para',
        text: "Land ecosystems absorb another 30 percent, mostly where photosynthesis exceeds respiration in regrowing forests. Because the service depends on water, nutrients and biomass, droughts, fires and deforestation can flip regions from sink to source within a season.",
      },
      {
        kind: 'para',
        text: "An individual molecule spends only a few years airborne, but the excess from a pulse lingers far longer: re-equilibrating with the deep ocean takes centuries to millennia. That is why CO2 cuts pay off slowly while methane cuts act within decades.",
      },
      {
        kind: 'para',
        text: "Adding emissions and subtracting the best sink estimates should reproduce measured growth, and it never does exactly. The small leftover is the budget imbalance — a diagnosis of uncertainty that pushes better sensors, flux towers and carbon-observing satellites.",
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Global carbon budget equation',
        latex: '\\Delta C_{\\text{atm}} = E_{\\text{ff}} + E_{\\text{luc}} - S_{\\text{ocean}} - S_{\\text{land}}',
        meaning: 'Atmospheric growth equals fossil plus land-use emissions minus ocean and land uptake; the mismatch with measured growth is the imbalance.',
      },
      {
        kind: 'formula',
        name: 'Airborne fraction',
        latex: 'AF = \\frac{\\Delta C_{\\text{atm}}}{E_{\\text{ff}} + E_{\\text{luc}}}',
        meaning: "The share of each year's human emissions that remains airborne — near 45 percent since 1959.",
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: atmospheric growth for a year with fossil emissions 10.0 GtC, land-use 1.1, ocean sink 2.7 and land sink 3.3 GtC.',
          'Recall the governing idea: the budget equation, atmospheric growth = total emissions − total sink uptake.',
          'Apply it: emissions total 11.1 GtC, sinks remove 6.0 GtC, so predicted growth is 5.1 GtC; measurements show 5.0 GtC.',
          'State the result: the airborne fraction is 5.0/11.1 ≈ 45 percent, and the 0.1 GtC gap is the budget imbalance.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Remaining-budget estimates that anchor net-zero deadlines in climate policy',
          'Carbon markets, where verification of real sink uptake decides whether a credit is genuine',
          'Ocean acidification forecasts, since absorbed CO2 shifts seawater chemistry',
          "Peatland and coastal 'blue carbon' restoration strengthening the land sink",
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "Sinks delay warming rather than cancel it — much of the absorbed carbon re-equilibrates with the air over centuries. The airborne fraction is a diagnostic, not a constant, and it moves with climate variability. And confusing gigatonnes of carbon with CO2 rescales every figure by 3.67.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Carbon sink', def: 'A reservoir that absorbs more carbon than it releases over a stated period.' },
          { term: 'Airborne fraction', def: 'The percentage of annual human emissions remaining in the atmosphere.' },
          { term: 'Solubility pump', def: 'Dissolution of CO2 into cold seawater and its transport to depth.' },
          { term: 'Biological pump', def: 'Plankton fixing carbon that sinks to the deep ocean.' },
          { term: 'Residence time', def: 'How long a molecule, or a pulse’s excess, persists in a reservoir.' },
          { term: 'GtC', def: 'One billion tonnes of carbon; multiply by 3.67 to express it as CO2.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Emissions total 11 GtC and the sinks absorb 6 GtC. Atmospheric growth is closest to:',
            options: ['2.6 GtC', '5.0 GtC', '6.0 GtC', '17.0 GtC'],
            answer: 1,
            explain: 'Growth is emissions minus uptake: 11 − 6 = 5 GtC.',
          },
          {
            q: 'An emission pulse warms for centuries though each molecule leaves the air within years because:',
            options: [
              'molecules are constantly re-emitted to replace the ones removed',
              'removing molecules is fast, but rebalancing the excess with the deep ocean is slow',
              'CO2 is permanently trapped in the stratosphere',
              'sinks absorb only methane, never CO2',
            ],
            answer: 1,
            explain: 'The molecule exchanges quickly, but the added inventory re-equilibrates with the deep ocean over centuries.',
          },
          {
            q: 'The budget imbalance is best described as:',
            options: [
              'carbon physically escaping to space',
              'the mismatch between predicted and measured atmospheric growth after sink estimates',
              'emissions from unreported fossil-fuel use only',
              'the forest share of total uptake',
            ],
            answer: 1,
            explain: 'It is the residual when emissions minus estimated sinks fails to match the observed increase — a measure of uncertainty.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: "Tackle this once the greenhouse effect and basic chemistry feel solid. Natural follow-ons are ocean acidification, climate feedbacks and the mitigation pathways that spend the remaining budget.",
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Growth in the air = fossil + land-use emissions − ocean sink − land sink.',
          'About 45 percent stays airborne; the ocean takes a quarter, land roughly 30 percent.',
          'Cold waters and plankton exports make the ocean a vast but slow sink.',
          'Molecules cycle in years, but a pulse persists for centuries to millennia.',
          'The budget imbalance audits how well we know the sinks.',
        ],
      },
    ],
  },
  {
    id: "env-extreme-weather-attribution",
    title: "Extreme Weather in a Warming World: The Science of Attribution",
    domain: "Environment & Sustainability",
    field: "Climate Science",
    branch: "Attribution Science",
    tier: "advanced",
    concepts: [
      "probabilistic event attribution",
      "risk ratio and attributable fraction",
      "confidence by hazard class",
      "detection versus attribution",
      "Clausius-Clapeyron water-vapour scaling",
      "calibrated IPCC uncertainty language",
    ],
    words: 1257,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "After every flood, heatwave and wildfire comes the same question: was this climate change? For most of the twentieth century science could only shrug — no single event, the honest answer went, could be attributed. Since the early 2000s that has changed: a new discipline now answers with numbers, publishing peer-reviewed estimates of how much human influence altered the odds of a specific disaster, sometimes within weeks of it happening. This advanced lesson covers how probabilistic event attribution works, which hazards attribute confidently and which resist, the distinction between detection and attribution, and how the IPCC phrases what it knows.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Attribution numbers now shape lawsuits, insurance pricing and international loss-and-damage talks — money and justice turn on the answer. Reading a headline like 'made 150 times more likely' requires knowing where the number comes from and what it does and does not claim.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The core trick is comparing two worlds. Using large ensembles of climate-model simulations — many alternate histories of the same planet — researchers compute how often an event of at least the observed severity occurs in the world as it is, with human emissions, versus a counterfactual world without them. The comparison is anchored to observations, with models validated for the region and season in question. The result is a risk ratio: if a heatwave that was once a one-in-a-thousand-year event now comes every fifty years, human influence has made it twenty times more likely. The method was first applied to the 2003 European heatwave, found to have been at least doubled in likelihood by our emissions.",
      },
      {
        kind: "para",
        text: "The complementary statistic is the fraction of attributable risk. If the pre-industrial probability is P0 and today's is P1, the risk ratio is P1/P0, and FAR is one minus P0/P1 — the share of today's risk that traces to human influence. A 150-fold increase in likelihood yields a FAR of 99.3 percent. Everything depends on defining the event: duration, spatial footprint and the variable chosen all change the answer, which is why careful studies test several definitions and report the spread rather than one number chosen for drama.",
      },
      {
        kind: "para",
        text: "Confidence tracks the physics. Heatwaves attribute best: large, slow-moving, and thermodynamically pushed — the 2021 Pacific Northwest heat dome was found virtually impossible without human influence. Heavy rainfall follows close behind, because warmer air holds about seven percent more water vapour per degree of warming, so record downpours attribute robustly unless circulation shifts fight the signal. Droughts are mixed, depending on region and on whether rainfall or soil moisture is meant. Tropical cyclones are harder — rare, small next to a model grid, dominated by internal variability — so intensification and heavier rain attribute with confidence, but not every storm's existence. Tornadoes and severe convective storms remain beyond reliable attribution.",
      },
      {
        kind: "para",
        text: "The discipline rests on an older distinction. Detection is the observation that something has changed beyond the range of natural variability — a trend in the data. Attribution is the explanation, done by fingerprinting: simulations driven by natural factors alone cannot reproduce observed warming, while simulations that add human forcings can. Event attribution extends the logic from averages to extremes, asking the same question of one storm's odds rather than a century's trend. Weather forecasting predicts what happens next; attribution asks what we made more likely — and the machinery of both has its own lesson.",
      },
      {
        kind: "para",
        text: "Findings arrive calibrated. The IPCC's vocabulary maps fixed probability bands onto words — virtually certain, very likely, likely, medium confidence. Its sixth assessment found human influence has made heat extremes more frequent and intense virtually certainly, heavy precipitation more likely than not over most land, and intense tropical cyclones more likely, while severe-convective-storm trends earned only low confidence. The final discipline is separating hazard from harm: attribution quantifies the change in weather, not in damage. More people and property in floodplains inflate losses with no climate change at all, so honest studies attribute the hazard and leave exposure to the accountants.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Risk ratio",
        latex: "\\text{RR} = \\frac{P_1}{P_0}",
        meaning: "How many times more likely an event of given severity is in today's climate than in the counterfactual without human emissions.",
      },
      {
        kind: "formula",
        name: "Fraction of attributable risk",
        latex: "\\text{FAR} = 1 - \\frac{P_0}{P_1}",
        meaning: "The share of current event risk owed to human influence; 0.95 means nineteen twentieths of it.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the risk ratio and attributable fraction for a heatwave that model ensembles say occurs once per 20 years today but was once per 1,000 years in the pre-industrial climate.",
          "Recall: RR = P1/P0 and FAR = 1 - P0/P1, with probabilities the reciprocals of return periods.",
          "Apply: P1 = 1/20 = 0.05 and P0 = 1/1,000 = 0.001. RR = 0.05/0.001 = 50. FAR = 1 - 0.02 = 0.98.",
          "State the result: the event is 50 times more likely because of human influence, and 98 percent of its present-day risk is attributable — numbers a court or an adaptation planner could act on.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "World Weather Attribution rapid studies published within weeks of disasters",
          "Attribution evidence entering climate lawsuits against fossil-fuel producers",
          "Return-period recalibration of drainage and dam design standards",
          "Insurers repricing hazard distributions that no longer hold still",
          "Loss-and-damage finance debates grounded in quantified responsibility",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Attribution is probabilistic, never a simple 'caused by' — the honest phrasing is 'made X times more likely.' Do not attribute the damage bill: exposure and vulnerability move it as much as weather does. Beware single-model numbers and cherry-picked event definitions; robust studies use ensembles and test their definitions. And do not expect skill where physics offers little signal — a single tornado will never attribute the way a heatwave does.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Probabilistic event attribution", def: "Comparing model worlds with and without human emissions to quantify an event's changed odds." },
          { term: "Risk ratio", def: "Probability of the event today over its probability in the counterfactual climate." },
          { term: "FAR", def: "Fraction of attributable risk — the share of current probability owed to human influence." },
          { term: "Detection", def: "Observing a change beyond natural variability, before any cause is assigned." },
          { term: "Fingerprinting", def: "Matching observed change patterns to simulations with and without each forcing." },
          { term: "Ensemble", def: "Many simulations of the same climate, providing the statistics of rare events." },
          { term: "Clausius-Clapeyron scaling", def: "Air's water-holding capacity rising about 7 percent per degree of warming." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Event attribution quantifies human influence by comparing:",
            options: [
              "yesterday's weather with today's",
              "simulations of the world as it is with a counterfactual lacking human emissions",
              "weather stations with satellites",
              "this year with the year before",
            ],
            answer: 1,
            explain: "Two model worlds — fact and counterfactual — supply the two probabilities whose ratio measures our influence.",
          },
          {
            q: "An event once per 1,000 years now occurs once per 20. The fraction of attributable risk is:",
            options: ["0.02", "0.5", "0.98", "50"],
            answer: 2,
            explain: "RR = 50, so FAR = 1 - 1/50 = 0.98 — ninety-eight percent of the risk is human-made.",
          },
          {
            q: "Heatwaves attribute more confidently than tropical cyclones because they are:",
            options: [
              "smaller and faster",
              "large-scale and thermodynamically driven, so models resolve them well",
              "less interesting to lawyers",
              "unaffected by weather noise",
            ],
            answer: 1,
            explain: "A broad, slow shift in the temperature distribution is exactly what warming physics predicts and grids can capture.",
          },
          {
            q: "Record downpours intensify in a warming world mainly because warmer air:",
            options: [
              "rises faster at night",
              "holds about 7 percent more water vapour per degree",
              "is denser than cold air",
              "attracts more lightning",
            ],
            answer: 1,
            explain: "Clausius-Clapeyron scaling is thermodynamics, not modelling — the most trustworthy line in the field.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "This lesson sits between two others: the storm-and-forecast lessons for the meteorology of the events themselves, and the climate-models lesson for the simulation machinery. The carbon-budget lesson covers the emissions driving it all.",
        tone: "path",
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'env-climate-feedbacks-sensitivity',
    title: 'Climate Feedbacks and Sensitivity: Why Warming Amplifies',
    domain: 'Environment & Sustainability',
    field: 'Climate Science',
    branch: 'Climate Sensitivity',
    tier: 'intermediate',
    concepts: [
      'Radiative forcing defined at the top of the atmosphere',
      'CO2 forcing grows as the logarithm of concentration',
      'Positive and negative feedback processes',
      'Water vapor, ice–albedo and lapse-rate feedbacks',
      'Cloud feedback as the leading uncertainty',
      'Equilibrium climate sensitivity for doubled CO2',
      'Tipping points when feedbacks take over',
    ],
    words: 1354,
    readMins: 7,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'A bare-rock Earth reflecting 30 percent of sunlight would sit at about 255 kelvin, or minus 18 degrees Celsius — a frozen planet. The real Earth averages 15 degrees, and the difference between those two numbers is written by the atmosphere. But how much does the planet warm when we add carbon dioxide? Not by a fixed recipe: the initial nudge of extra greenhouse gas triggers feedback processes inside the climate system that amplify or dampen the response. This intermediate lesson defines radiative forcing, tours the major feedbacks, and explains where the famous sensitivity numbers come from.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every carbon budget, every projection and every policy target translates through climate sensitivity. If feedbacks sum near zero, doubled CO2 warms the planet modestly; because they sum strongly positive, the globe is heading for roughly three degrees of warming per doubling — the single most consequential number in climate policy.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Radiative forcing is the initial response of radiative fluxes at the top of the atmosphere: the change in the radiative balance for a specific process — greenhouse gases, aerosols, solar output — with everything else held constant. Positive forcing warms, negative cools. For carbon dioxide the forcing grows with the logarithm of concentration, ΔF = 5.35 × ln(C/C0) watts per square meter, where C0 is a reference level. The log arises because the strongest absorption bands saturate first: each extra part per million matters less than the last. Doubling from the pre-industrial 280 ppm to 560 ppm gives ΔF = 5.35 × ln(2) ≈ 3.7 W/m² — the benchmark forcing of climate science.',
      },
      {
        kind: 'para',
        text: 'A climate feedback is a process that amplifies (positive) or dampens (negative) the initial temperature response to a forcing. The strongest damper is built into physics itself: a warmer planet radiates as the fourth power of temperature (Stefan–Boltzmann), so it sheds heat faster the hotter it gets. Holding everything else fixed, the 3.7 W/m² of doubled CO2 would settle at about 1.2 degrees of warming — the no-feedback sensitivity. Everything interesting in climate prediction is the sum of what happens next.',
      },
      {
        kind: 'para',
        text: 'The biggest amplifier is water vapor. Warmer air evaporates more water from the oceans, and because water vapor is itself a powerful greenhouse gas — the atmosphere’s most important infrared absorber alongside CO2 — the extra vapor traps more heat and warms the surface further. Water vapor cannot act as a forcing on human timescales: its lifetime is days, and its concentration is set by temperature. It is the feedback that roughly doubles whatever the CO2 push started, which is why the EPA calls it the most important positive feedback.',
      },
      {
        kind: 'para',
        text: 'Ice and snow add a second amplifier, the ice–albedo feedback. Earth reflects about 30 percent of sunlight (albedo ≈ 0.3); melt bright surfaces and the planet darkens, absorbs more solar radiation, and melts more ice — a loop that runs in reverse to amplify cooling into ice ages. Partly offsetting it, the lapse-rate feedback is negative: as the surface warms, the vertical temperature profile adjusts so that more radiation escapes to space from the warm lower atmosphere, damping the response. Clouds remain the wild card — they both reflect sunlight (cooling) and trap infrared (warming), and their net feedback sign varies by type and altitude, which is why cloud feedback dominates the spread in model projections.',
      },
      { kind: 'heading', text: 'From Feedbacks to Sensitivity' },
      {
        kind: 'para',
        text: 'Climate sensitivity is the total warming or cooling from one forcing after all feedbacks act. The bookkeeping is compact: if f is the net feedback factor, the equilibrium warming is ΔT = ΔT0/(1 − f), where ΔT0 is the no-feedback response. With ΔT0 ≈ 1.2 °C for doubled CO2 and f near 0.6–0.7, the result lands near 3 °C — the equilibrium climate sensitivity that assessment reports place in a likely range of about 2.5 to 4 °C. Net feedbacks being significantly positive is what turns a 3.7 W/m² nudge into a three-degree world; and where feedbacks cross into self-drive — permafrost carbon, ice-sheet collapse, circulation changes — scientists speak of tipping points, thresholds beyond which change continues without further forcing.',
      },
      {
        kind: 'formula',
        name: 'CO2 radiative forcing',
        latex: '\\Delta F = 5.35\\,[\\mathrm{W\\,m^{-2}}]\\;\\ln(C/C_0)',
        meaning: 'Forcing from a CO2 concentration C relative to reference C0; doubling gives 3.7 W/m².',
      },
      {
        kind: 'formula',
        name: 'Sensitivity with feedbacks',
        latex: '\\Delta T_{eq} = \\frac{\\Delta T_0}{1 - f}',
        meaning: 'Equilibrium temperature response ΔT0 (≈1.2 °C for doubled CO2, no feedbacks) amplified by the net feedback factor f; f → 1 means runaway.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the forcing and equilibrium warming when CO2 rises from 280 to 420 ppm (today’s level).',
          'Compute the ratio: 420/280 = 1.5, so ln(1.5) ≈ 0.405.',
          'Apply the forcing formula: ΔF = 5.35 × 0.405 ≈ 2.2 W/m² — about 60 percent of the doubling benchmark, a direct consequence of the logarithm.',
          'Fold in feedbacks: with the no-feedback response of about 1.2 °C per 3.7 W/m², this forcing alone gives ≈ 0.7 °C; with the observed net feedback factor f ≈ 0.65, ΔT = 0.7/(1 − 0.65) ≈ 2 °C.',
          'State the result: today’s concentration already commits the system to roughly two degrees of eventual equilibrium warming — the gap between committed and realized warming is the ocean’s thermal inertia, not an absence of feedbacks.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Remaining carbon budgets are computed by dividing allowable warming by sensitivity — a better-constrained ECS means a sharper emissions deadline',
          'Ice-age paleoclimate serves as a natural experiment: glacial–interglacial cycles record the feedback sum (CO2, ice sheets, dust) at planetary scale',
          'Solar geoengineering proposals are judged against feedback logic — masking forcing while leaving feedbacks intact still leaves the system sensitive',
          'Weather-forecast ensembles and climate models perturb feedback parameters to span the plausible sensitivity range',
          'Arctic monitoring tracks the ice–albedo loop in real time as sea-ice minimum records fall decade after decade',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Forcing and feedback are roles, not substances: CO2 injected deep in geological time or by humans acts as forcing, while water vapor acts as feedback because temperature controls its amount. A positive feedback does not mean instant runaway — runaway requires the feedback factor to approach one, far from today’s 0.6–0.7. And equilibrium sensitivity is not the warming you see this decade: transient response lags because oceans absorb heat for centuries.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Radiative forcing', def: 'The change in top-of-the-atmosphere radiative balance caused by one driver, with the rest of the system held fixed.' },
          { term: 'Climate feedback', def: 'A process that amplifies (positive) or dampens (negative) the temperature response to a forcing.' },
          { term: 'Water vapor feedback', def: 'Warming → more evaporation → more atmospheric water vapor → more greenhouse trapping; the largest positive feedback.' },
          { term: 'Ice–albedo feedback', def: 'Melting ice lowers reflectivity, increasing absorbed sunlight and further melting; amplified in both warming and cooling directions.' },
          { term: 'Lapse-rate feedback', def: 'Negative feedback from changes in the atmospheric vertical temperature profile as the surface warms.' },
          { term: 'Equilibrium climate sensitivity', def: 'The global warming eventually reached per doubling of CO2, feedbacks included — likely near 3 °C.' },
          { term: 'Tipping point', def: 'A threshold beyond which a feedback-dominated part of the system keeps changing without further forcing.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Why does CO2 radiative forcing grow only logarithmically with concentration?',
            options: ['Because CO2 decays over time', 'Because the strongest absorption bands saturate first, so extra gas matters progressively less', 'Because the oceans absorb the difference', 'Because sunlight weakens as CO2 rises'],
            answer: 1,
            explain: 'Central absorption wavelengths fill in first; additional CO2 acts mostly on the band edges, giving the ln(C/C0) dependence.',
          },
          {
            q: 'Water vapor is classified as a feedback rather than a forcing because:',
            options: ['It is not a greenhouse gas', 'Its concentration is controlled by temperature, with a lifetime of days', 'It only exists in clouds', 'It reflects sunlight like aerosols'],
            answer: 1,
            explain: 'Humans do not directly load the atmosphere with water vapor on climate timescales; temperature sets its abundance, so it amplifies the initial push.',
          },
          {
            q: 'With no feedbacks at all, doubled CO2 would warm Earth by about:',
            options: ['0.1 °C', '1.2 °C', '3 °C', '10 °C'],
            answer: 1,
            explain: 'The bare Stefan–Boltzmann response to 3.7 W/m² is roughly 1.2 °C; feedbacks lift the equilibrium value to near 3 °C.',
          },
          {
            q: 'Which feedback is currently the largest source of uncertainty in climate sensitivity?',
            options: ['Ice–albedo feedback', 'Lapse-rate feedback', 'Cloud feedback', 'Water vapor feedback'],
            answer: 2,
            explain: 'Clouds both cool (reflect sunlight) and warm (trap infrared); their net response to warming varies by type and altitude and dominates the spread among models.',
          },
        ],
      },
    ],
  },
]
