/**
 * Knowledge Universe — Environmental Health & Food Systems — Chapter 01: Pollution & Environmental Health
 * 2 lessons · ~2,498 words
 * field: Pollution & Environmental Health
 * legacy sources: environment.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Pollution & Environmental Health]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 env-air-pollution-control — Air Pollution: Sources, Smog and Solutions
 *   01.2 env-water-pollution-nutrients — Water Pollution: Nutrients, Toxins and Dead Zones
 */
import type { KnowledgeTopic } from '../../types'

export const environmentalHealthFoodCh01: KnowledgeTopic[] = [
  {
    id: "env-air-pollution-control",
    title: "Air Pollution: Sources, Smog and Solutions",
    domain: "Environment & Sustainability",
    field: "Pollution & Environmental Health",
    branch: "The Air We Breathe",
    tier: "intermediate",
    concepts: [
      "criteria pollutants: PM2.5, NOx, SO2, O3, CO",
      "London coal smog versus photochemical smog",
      "temperature inversions as lids",
      "health evidence down to no safe threshold",
      "scrubbers, precipitators, catalytic converters",
      "Air Quality Index and indoor air",
    ],
    words: 1201,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Air pollution is the world's largest environmental health risk — linked by the World Health Organization to roughly seven million early deaths a year, more than traffic accidents and malaria combined. Yet unlike climate change, its damage is local, fast and reversible: shut the sources off and the air clears within days. This lesson is about health-relevant pollution, not carbon — the particles and gases that attack lungs and hearts, the weather that traps them, and the engineering that scrubs them out of exhausts and smokestacks.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Every major city's air today is the product of a century of pollution-control engineering. London's lethal fogs, Los Angeles's brown haze and the removal of lead from gasoline were all solved, or measurably improved, once the chemistry was understood. The history proves the tools work.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Regulators track a handful of criteria pollutants. Fine particles, PM2.5, are smaller than 2.5 micrometres — thirty side by side span a hair's width — and slip past the body's defenses into deep lungs and blood. Nitrogen oxides come from any high-temperature combustion; sulfur dioxide from burning sulfur-bearing coal and oil; carbon monoxide from incomplete burning. Ozone is different: a secondary pollutant emitted by no chimney at all, cooked in sunlight from NOx and volatile organic compounds — which is why it peaks on hot afternoons downwind of cities.",
      },
      {
        kind: "para",
        text: "The two great smog disasters teach two chemistries. London, December 1952: coal smoke plus fog plus a stagnant anticyclone, sulfur dioxide dissolving into droplets, a week of lethal air and on the order of 12,000 excess deaths — the disaster that produced clean-air legislation. Los Angeles from the 1940s: a different beast, photochemical smog with no smokestacks, traced by chemist Arie Haagen-Smit to sunlight reacting with car exhaust to make ozone and the brown haze of nitrogen dioxide. One chemistry needed cleaner fuel; the other needed catalytic converters.",
      },
      {
        kind: "para",
        text: "Geography and weather decide who suffers. Normally air cools with altitude; a temperature inversion puts warm air atop cold, sealing the cold layer like a lid. The Los Angeles basin traps marine air behind mountains; Delhi and Beijing suffer winter inversions that stack a city's emissions into a shallow layer; the 1952 London fog sat under one for days. The same emissions under a brisk wind are a non-event — which is why air quality is as much meteorology as chemistry.",
      },
      {
        kind: "para",
        text: "The evidence that particles kill is among the strongest in environmental epidemiology. The Harvard Six Cities study followed over 8,000 people for more than a decade and found death rates rising steadily with fine-particle exposure, with cardiovascular disease — heart attacks and strokes — dominating, not just lung trouble: PM2.5 inflames arteries and stresses the heart. Crucially, harm is found down to the lowest measurable levels. There is no established safe threshold, only steeper and flatter risks.",
      },
      {
        kind: "para",
        text: "The engineering toolbox is mature. Electrostatic precipitators charge particles and collect them on plates, removing over 99 percent of fly ash from power-station flue gas; fabric baghouses filter like giant vacuum bags. Flue-gas desulfurization — scrubbing — sprays limestone slurry to pull sulfur dioxide out as gypsum. The three-way catalytic converter, mandatory on gasoline cars since the 1980s, oxidizes carbon monoxide and hydrocarbons while reducing NOx, cutting each by more than 90 percent. And removing lead from gasoline — finished worldwide only in 2021 — stands as the all-time win: a neurotoxin simply eliminated.",
      },
      {
        kind: "para",
        text: "Public information runs on the Air Quality Index, which converts measured concentrations into a 0-500 scale with color categories, computed pollutant by pollutant and reported as the worst of them. Indoor air matters more than most people think: across much of the world the worst exposure is cooking smoke inside homes, while in wealthy countries the main indoor threats are radon seeping from soil, cooking particles and volatile organics from products. You spend most of your life indoors; outdoor monitoring networks see none of it.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "AQI piecewise interpolation",
        latex: "I = \\frac{I_{hi} - I_{lo}}{C_{hi} - C_{lo}}\\,(C - C_{lo}) + I_{lo}",
        meaning: "A pollutant concentration C is mapped linearly onto the index scale within its breakpoint band.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the AQI for a PM2.5 reading of 55 micrograms per cubic metre, using U.S. breakpoints in which the band 35.5-55.4 maps to index values 101-150, unhealthy for sensitive groups.",
          "Recall: interpolate linearly across the band — index rises from 101 to 150 as concentration rises from 35.5 to 55.4.",
          "Apply: I = (150 − 101)/(55.4 − 35.5) x (55 − 35.5) + 101 = (49/19.9) x 19.5 + 101 ≈ 48 + 101 = 149.",
          "State the result: AQI 149 — the very top of the unhealthy-for-sensitive-groups band, one unit below the level where everyone, not just sensitive groups, is advised to reduce outdoor exertion.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Three-way catalytic converters on every gasoline vehicle sold since the 1980s and 90s",
          "Scrubbers and precipitators fitted to coal-fired power stations",
          "Low-emission zones and London's Ultra Low Emission Zone charging",
          "Air-quality alerts modifying school sports and outdoor work on bad days",
          "HEPA filtration and public clean-air rooms during wildfire smoke episodes",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Ground-level ozone has nothing to do with the ozone layer — one is a harmful pollutant, the other a protective shield. Masks marketed for pollution vary wildly; only well-fitted respirators filter fine particles. A clean week proves nothing about a city's average. And indoor air, invisible to monitoring networks, is where much of the exposure actually happens.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "PM2.5", def: "Particles under 2.5 micrometres, penetrating deep into lungs and entering the bloodstream." },
          { term: "Secondary pollutant", def: "A pollutant formed in the air by reactions — like ozone — rather than emitted directly." },
          { term: "Temperature inversion", def: "Warm air atop cold, sealing a city's emissions under a lid." },
          { term: "Photochemical smog", def: "Sunlight-driven chemistry of NOx and volatile organics producing ozone and haze." },
          { term: "Electrostatic precipitator", def: "Device charging particles so they collect on oppositely charged plates." },
          { term: "Catalytic converter", def: "Exhaust device oxidizing CO and hydrocarbons while reducing NOx." },
          { term: "AQI", def: "Index mapping pollutant concentrations to a 0-500 health-advice scale." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "PM2.5 is especially dangerous because the particles:",
            options: [
              "smell unpleasant",
              "are small enough to reach deep lungs and the bloodstream",
              "block sunlight from reaching crops",
              "are radioactive",
            ],
            answer: 1,
            explain: "At 2.5 micrometres they bypass the airways' filters, inflaming lung tissue and entering blood — hence cardiovascular effects.",
          },
          {
            q: "Ground-level ozone is called a secondary pollutant because:",
            options: [
              "it comes only from power plants",
              "it forms in sunlight from NOx and volatile organics rather than being emitted directly",
              "it is less harmful than other pollutants",
              "it exists only indoors",
            ],
            answer: 1,
            explain: "No chimney emits ozone; sunshine cooks it from precursor gases, so it peaks on hot afternoons downwind of traffic.",
          },
          {
            q: "The 1952 London smog and Los Angeles photochemical smog differed mainly in that:",
            options: [
              "their chemistries were identical",
              "London was coal smoke and sulfur in fog; LA was sunlight chemistry acting on vehicle exhaust",
              "London was ozone while LA was smoke",
              "LA's haze came from sulfur dioxide industry",
            ],
            answer: 1,
            explain: "Two different chemistries, two different cures: cleaner fuel for one, catalytic converters and vapor controls for the other.",
          },
          {
            q: "A temperature inversion worsens pollution by:",
            options: [
              "creating more emissions",
              "placing warm air above cold and trapping pollutants in a shallow layer",
              "cooling the smokestacks",
              "increasing wind speeds",
            ],
            answer: 1,
            explain: "The warm lid stops the vertical mixing that would normally dilute emissions — geography and weather decide who suffers.",
          },
        ],
      },
    ],
  },
  {
    id: "env-water-pollution-nutrients",
    title: "Water Pollution: Nutrients, Toxins and Dead Zones",
    domain: "Environment & Sustainability",
    field: "Pollution & Environmental Health",
    branch: "Water Pollution",
    tier: "intermediate",
    concepts: [
      "eutrophication: blooms then oxygen collapse",
      "dead zones and seasonal stratification",
      "point versus nonpoint sources",
      "methylmercury and biomagnification",
      "PFAS and the parts-per-trillion era",
      "slow-motion groundwater plumes",
    ],
    words: 1297,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A river can swallow a certain load of waste and heal itself; push past that load and the very process of decay turns lethal. Water pollution is mostly an overdose problem: nutrients that overfeed, toxins that accumulate, and pathogens riding along. This lesson follows the chemistry and ecology of polluted natural waters — how nutrients strangle lakes and coastal seas into dead zones, where the toxins come from and why they climb food chains, and why groundwater contamination stays hidden for decades. The engineering fix — treatment plants — has its own lesson.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Nutrient pollution is among the most widespread water-quality failures on Earth, and dead zones now number in the hundreds. Understanding the mechanism explains why the cure is upstream agriculture and sewage management, not anything you can do in the ocean itself.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The choking sequence starts with fertilizer. Nitrogen and phosphorus are the limiting nutrients of aquatic life, so when runoff and sewage effluent rich in both reach a lake or bay, algae bloom in huge proportions. The bloom itself is not the kill: when it dies, bacteria decompose the mats and consume dissolved oxygen, dropping the water below the two milligrams per litre that fish require — hypoxia. Summer stratification seals the trap, because warm surface water floats on the cold depths until autumn mixing, so deep water stays suffocated for months. Lake Erie collapsed this way in the 1970s and recovered only after nutrient limits were imposed.",
      },
      {
        kind: "para",
        text: "Where a big river drains farm country, the damage reaches the sea. The Mississippi collects runoff from 41 percent of the continental United States and delivers it to the Gulf of Mexico, where each summer a hypoxic zone of 10,000 to 20,000 square kilometres forms. The Baltic suffers the largest human-caused zone, and more than 400 such sites have been reported worldwide, roughly doubling each decade since the 1960s. The remedy is unglamorous: load budgets that cut the nitrogen and phosphorus entering at the source.",
      },
      {
        kind: "para",
        text: "Regulation divides sources, and the division matters. Point sources — pipes, outfalls, factory discharges — are visible, permittable, and were largely tamed by the U.S. Clean Water Act after rivers famously caught fire. Nonpoint sources — fertilizer washing off fields, manure from feedlots, urban stormwater — have no pipe to permit. Only about half the nitrogen farmers apply is ever taken up by the crop; the rest runs off or leaches downward. That is why four decades of water law cleaned the pipes while the Gulf dead zone persisted, and why modern remedies target cover crops, buffer strips and precision application.",
      },
      {
        kind: "para",
        text: "Metals poison differently: in tiny doses, invisibly, by accumulating. Mercury from coal combustion settles into water, and bacteria in oxygen-poor sediment convert it to methylmercury, a form living tissue absorbs but cannot readily shed. Each step up the food chain concentrates it roughly tenfold, so long chains multiply water concentrations a hundred-thousand-fold — tuna and swordfish carry mercury advisories while the seawater around them meets standards. Minamata, Japan, proved the endpoint in the 1950s: industrial mercury in seafood poisoned thousands. Abandoned mines add an acidic legacy: pyrite exposed to air and water generates sulfuric acid and orange iron precipitate that sterilizes streams.",
      },
      {
        kind: "para",
        text: "The newest concern is a family of forever chemicals. PFAS build water- and grease-repellent products — firefighting foam, nonstick coatings, weatherproof fabric — and the carbon-fluorine bonds that make them useful make them nearly indestructible, so they now appear in the blood of people and wildlife worldwide, with drinking-water limits set in parts per trillion. Groundwater is pollution in slow motion: hidden, moving metres per year, contaminated for decades before anyone samples it. Fuel from leaking tanks, solvents and septic nitrate form plumes that cleanups chase for generations; Bangladesh's naturally arsenic-bearing tube wells remain the starkest case, exposing tens of millions.",
      },
      {
        kind: "para",
        text: "Lead pipes add a municipal chapter. When Flint, Michigan switched water sources in 2014 without corrosion control, river water stripped the protective scale inside old pipes and carried lead into taps — a treatment-chemistry failure, not a source failure. The broader arc is encouraging where enforced: rivers that once burned now hold fish, because point sources were forced to clean up. The stubborn remainder — nutrients, plastics, forever chemicals — is woven into agriculture and consumer products, which is why water pollution has migrated from a pipe problem to a land-use problem.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Biomagnification factor",
        latex: "\\text{BMF} = \\frac{C_{\\text{predator}}}{C_{\\text{prey}}}",
        meaning: "Concentration ratio across one trophic step; a chain of tenfold steps multiplies to enormous enrichment in top predators.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the methylmercury concentration in a top predator, given seawater at 1 part per trillion and a five-step food chain concentrating tenfold at each step.",
          "Recall: each trophic transfer multiplies concentration by the biomagnification factor, here ten.",
          "Apply: 1 ppt x 10 x 10 x 10 x 10 x 10 = 100,000 ppt = 100 parts per billion = 0.1 parts per million in predator tissue.",
          "State the result: 0.1 ppm is a third of the way to the 0.3 ppm fish advisory — the arithmetic behind tuna limits for pregnant women, from water that itself passes standards.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Total-maximum-daily-load budgets driving Chesapeake Bay and Gulf cleanup plans",
          "Tertiary sewage treatment stripping nitrogen and phosphorus before discharge",
          "Cover crops and riparian buffer strips cutting farm runoff at the source",
          "Fish-consumption advisories for mercury in long-lived predators",
          "Drinking-water limits for PFAS set in parts per trillion",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Dilution is not the solution for anything that bioaccumulates — the ocean dilutes mercury while food chains re-concentrate it. Clear water is not clean water: a dead zone's water can be glass-clear, because nothing lives to cloud it. Treated sewage is not nutrient-free sewage; conventional treatment handles organics, not the nitrogen and phosphorus that feed blooms. And groundwater contamination is invisible until wells reveal it, decades late.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Eutrophication", def: "Over-enrichment of water by nutrients, triggering blooms and oxygen depletion." },
          { term: "Hypoxia", def: "Dissolved oxygen below 2 milligrams per litre — too little for most aquatic life." },
          { term: "Limiting nutrient", def: "The scarcest essential nutrient, usually nitrogen or phosphorus, whose arrival triggers growth." },
          { term: "Nonpoint source", def: "Diffuse pollution from fields and streets, with no single pipe to permit." },
          { term: "Methylmercury", def: "Microbially converted mercury that bioaccumulates up food chains." },
          { term: "PFAS", def: "Persistent fluorinated chemicals repelling water and grease; regulated in parts per trillion." },
          { term: "Plume", def: "Contaminated groundwater body migrating slowly from its source." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "The order of events in eutrophication is:",
            options: [
              "nutrients arrive, algae bloom, blooms die, decomposition strips the oxygen",
              "oxygen falls first, then the algae bloom",
              "algae bloom, nutrients arrive, fish leave",
              "toxins kill the fish directly",
            ],
            answer: 0,
            explain: "The bloom is the symptom; the kill comes when bacteria decompose it and consume the dissolved oxygen.",
          },
          {
            q: "Dead zones are worst in summer because:",
            options: [
              "fish eat more in warm water",
              "warm surface water stratifies, sealing the depths from re-aeration",
              "storms are weaker in summer",
              "farmers fertilize in July",
            ],
            answer: 1,
            explain: "The warm lid blocks mixing with oxygen-rich surface water until autumn turnover — months of suffocation below.",
          },
          {
            q: "With water at 1 ppt and five tenfold trophic steps, top-predator tissue reaches about:",
            options: ["10 ppt", "1,000 ppt", "0.1 ppm", "10 ppm"],
            answer: 2,
            explain: "Ten to the fifth gives 100,000 ppt = 0.1 ppm — a third of the consumption advisory from water that passes standards.",
          },
          {
            q: "Groundwater contamination is hard to manage mainly because:",
            options: [
              "it flows rapidly to the sea",
              "plumes move metres per year and go undetected for decades",
              "it evaporates quickly",
              "it stays in the topsoil",
            ],
            answer: 1,
            explain: "Out of sight and slow, a plume is usually discovered long after the spill — and cleanup spans generations.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Two lessons bracket this one: air pollution for the atmospheric side of environmental health, and water treatment for the engineering that turns tainted sources into safe taps. The water cycle lesson covers the flows beneath it all.",
        tone: "path",
      },
    ],
  },
]
