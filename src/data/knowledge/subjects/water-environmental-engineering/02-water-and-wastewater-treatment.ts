/**
 * Knowledge Universe — Water & Environmental Engineering — Chapter 02: Water & Wastewater Treatment
 * 2 lessons · ~2,884 words
 * field: Water Technology
 * legacy sources: technology-applied.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Water Technology]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 tech-water-treatment-desalination — Water Treatment: From River to Tap
 *   02.2 tech-wastewater-engineering — Wastewater Engineering: What Happens After the Drain
 */
import type { KnowledgeTopic } from '../../types'

export const waterEnvironmentalEngineeringCh02: KnowledgeTopic[] = [
  {
    id: "tech-water-treatment-desalination",
    title: "Water Treatment: From River to Tap",
    domain: "Technology & Applied Science",
    field: "Water Technology",
    branch: "Clean Water Engineering",
    tier: "intermediate",
    concepts: [
      "the treatment train: coagulation to disinfection",
      "chlorine residual versus UV and ozone",
      "reverse osmosis and the energy cost of desalination",
      "distribution networks and recontamination risk",
      "turbidity and residual chlorine as daily proxies",
      "CT: disinfectant concentration times contact time",
    ],
    words: 1241,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Turn on a tap in almost any city and safe water appears — the product of an invisible factory that takes in rivers and aquifers and strips out mud, microbes and bad taste before the water reaches a pipe. Water treatment is chemistry and biology at municipal scale: a chain of stages, each aimed at a different contaminant class, ending with a disinfectant that keeps protecting the water all the way to the glass. This lesson follows one drop of river water through the plant, out into the network, and finally to the desalination plants that turn seawater itself into drinking water.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Filtration and disinfection defeated the cholera and typhoid epidemics that once killed cities by the thousand; safe water remains the largest public-health intervention ever engineered. The same treatment chain explains desalination's energy bill — and why utilities issue boil-water advisories after a pipe break.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Treatment starts coarse and ends fine. Bar screens catch sticks, leaves and trash, and then coagulation attacks the chemistry that keeps mud suspended in the first place. Most natural particles carry a slight negative charge, so they repel one another and never settle; a coagulant such as alum neutralizes that charge, and gentle paddle stirring — flocculation — lets the sticky particles collide and grow into flocs: snowflakes of mud heavy enough to sink in minutes rather than weeks.",
      },
      {
        kind: "para",
        text: "Sedimentation hands the flocs still water and gravity: they settle to the basin floor as sludge while clarified water spills over the top. Filtration then polishes whatever escaped, percolating the water down through sand and anthracite beds, often with activated carbon to adsorb the organics behind off-tastes and odors. The step matters more than it looks, because pathogens hide inside suspended particles; every particle removed strips microbes of their shields, and downstream disinfection works far better on clear water.",
      },
      {
        kind: "para",
        text: "Disinfection is the kill stage, and its three main weapons trade permanence for power. Chlorine is cheap and stubborn: it leaves a residual that keeps working for days inside pipes, holding the line against recontamination — the reason a faint swimming-pool smell in tap water is tolerated on purpose. Ultraviolet light scrambles microbial DNA in seconds with no added chemical, but demands crystal-clear water and leaves no residual at all. Ozone is the strongest oxidant of the three and also breaks down taste and micropollutants, yet it must be generated on site and decays within minutes. Many plants therefore pair ozone or UV with a final chlorine dose for the journey.",
      },
      {
        kind: "para",
        text: "Reverse osmosis targets the one contaminant the standard train cannot touch: dissolved salt. Ordinary osmosis draws fresh water toward concentrated brine across a semipermeable membrane; reverse osmosis applies pressure greater than that osmotic pull to push water the other way, leaving salt behind in a reject stream. Seawater demands roughly 55 to 70 bar — more than fifty times a car tire's pressure — while brackish groundwater needs a fraction of that, which is why brackish desalination costs far less energy. Modern plants claw this back with energy-recovery devices that recapture the brine's leftover pressure, landing near a few kilowatt-hours per cubic meter.",
      },
      {
        kind: "para",
        text: "Finished water then enters the least glamorous and most important stage: the distribution network. Miles of pipe, tanks and joints are where residual chlorine gets consumed, where pressure transients can pull contaminated groundwater in through tiny leaks, and where dead-end mains let water stagnate. Recontamination after the plant is why utilities defend pressure around the clock — and why a main break triggers a boil-water advisory even though the plant itself never failed.",
      },
      {
        kind: "para",
        text: "Operators verify all of this with fast proxies rather than day-long microbial cultures. Turbidity — cloudiness measured in nephelometric turbidity units — reveals whether the filters are holding, and a spike reliably predicts pathogen breakthrough. Residual chlorine sampled out in the network confirms the disinfectant wall still stands. With pressure, pH and temperature, they form the daily dashboard of a plant that never sleeps.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Reverse-osmosis pump work",
        latex: "W = P \\times V",
        meaning: "Ideal hydraulic energy to push volume V through a membrane at applied pressure P; divide by 3.6 MJ to get kilowatt-hours.",
      },
      {
        kind: "formula",
        name: "Disinfectant exposure",
        latex: "CT = C \\times t",
        meaning: "Disinfectant concentration multiplied by contact time — the dose-duration product that predicts microbial kill.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: how much ideal pump energy does it take to reverse-osmosis-filter 1 cubic meter of seawater compared with brackish water?",
          "Recall the governing idea: pump work equals pressure times volume; typical seawater reverse osmosis runs near 55 bar and brackish water near 15 bar, and 1 bar is 100,000 pascals.",
          "Apply the numbers: seawater — 55 bar is 5.5 million pascals, so W = 5,500,000 Pa times 1 m³ gives 5.5 MJ, about 1.5 kWh. Brackish — 1,500,000 Pa times 1 m³ gives 1.5 MJ, about 0.42 kWh, roughly a quarter of the seawater figure.",
          "State the result: even in the frictionless ideal, seawater carries a fourfold energy penalty; after pump losses and brine rejection, real plants land near 3 to 4 kWh per cubic meter for seawater versus about 1 for brackish.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Municipal plants run the full coagulation-to-disinfection train for millions of city residents every day",
          "Coastal desalination plants from Carlsbad to Perth supply arid cities at a few kilowatt-hours per cubic meter",
          "Emergency relief kits combine flocculant sachets, cloth filters and chlorine tablets to treat water after disasters",
          "Under-sink reverse-osmosis units repeat the brackish-water economics at apartment scale",
          "Network crews track turbidity and residual chlorine across the grid as an early-warning system",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Clear is not safe: sparkling water can still carry viruses, which is why turbidity is a proxy, not a verdict. Home filters that strip the chlorine residual can leave the last stretch of household plumbing undefended. And desalination cost is dominated by energy, not membranes — cheaper water starts with cheaper electricity, plus honest accounting for the salty brine left behind.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Coagulation", def: "Dosing water with a chemical such as alum to neutralize particle charges so they can clump." },
          { term: "Floc", def: "A snowflake-like aggregate of coagulated particles, heavy enough to settle in minutes." },
          { term: "Turbidity", def: "Cloudiness of water measured in NTU; the fastest operational proxy for filter performance." },
          { term: "Residual chlorine", def: "Disinfectant deliberately left in finished water to guard the pipes against recontamination." },
          { term: "Reverse osmosis", def: "Pushing water through a semipermeable membrane above its osmotic pressure, rejecting dissolved salts." },
          { term: "CT value", def: "Disinfectant concentration times contact time — the standard measure of disinfection dose." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Why is a coagulant such as alum added before sedimentation?",
            options: [
              "To kill bacteria directly",
              "To neutralize the charges that keep fine particles suspended",
              "To raise the water's temperature",
              "To add fluoride",
            ],
            answer: 1,
            explain: "Natural particles repel each other; neutralizing that charge lets them collide into flocs heavy enough to settle.",
          },
          {
            q: "Which disinfectant leaves a lasting residual that keeps protecting water inside the distribution pipes?",
            options: ["Ultraviolet light", "Ozone", "Chlorine", "Sand filtration"],
            answer: 2,
            explain: "UV and ozone leave nothing behind; chlorine persists for days, which is why utilities rely on it for the network.",
          },
          {
            q: "Reverse osmosis becomes necessary when the dominant contaminant is:",
            options: ["Dissolved salt", "Sand and grit", "Bacteria", "Bad odor"],
            answer: 0,
            explain: "Conventional stages handle particles and microbes; only a membrane rejects dissolved ions at municipal scale.",
          },
          {
            q: "In the worked example, seawater desalination costs about four times brackish-water energy mainly because:",
            options: [
              "Seawater is colder",
              "Higher salinity demands higher applied pressure",
              "Seawater plants are older",
              "Ocean water contains more bacteria",
            ],
            answer: 1,
            explain: "Osmotic pressure scales with salt concentration — about 55 bar versus 15 — and work is pressure times volume.",
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  // Source-grounded 2026-10-20: standard environmental-engineering
  // treatment of wastewater (BOD5 as the master metric, preliminary/
  // primary/secondary/tertiary train, activated sludge biology, sludge
  // digestion and resource recovery), consistent with the open
  // environmental-engineering texts on the LibreTexts engineering shelf.
  // The return half of the water cycle, companion to
  // tech-water-treatment-desalination ("From River to Tap").
  {
    id: "tech-wastewater-engineering",
    title: "Wastewater Engineering: What Happens After the Drain",
    domain: "Technology & Applied Science",
    field: "Water Technology",
    branch: "Wastewater & Reuse",
    tier: "intermediate",
    concepts: [
      "What sewage actually is, and BOD as the master metric",
      "Preliminary and primary treatment: letting gravity work",
      "Secondary treatment: farming the right microbes",
      "Activated sludge versus biofilm systems",
      "Tertiary polish: nitrogen, phosphorus, disinfection",
      "The sludge train: digestion, biogas, biosolids",
      "Effluent standards and the reuse frontier",
    ],
    words: 1643,
    readMins: 8,
    addedOn: "2026-10-20",
    blocks: [
      {
        kind: "para",
        text: "The water-treatment lesson followed a river to the tap; this lesson follows what leaves the drain, because cities run a loop, not a line. Wastewater engineering is applied ecology with a legal deadline: take everything a city flushes — organic matter, nutrients, pathogens, the residue of industry — and return water to the river clean enough that the next town downstream, and the river\u2019s own life, can afford it. The discipline\u2019s central trick is elegant: instead of manufacturing purity chemically, engineers farm microbial ecosystems that eat the pollution, then polish what the biology cannot finish.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Sewage treatment is quietly among the greatest public-health technologies ever built — cities without it still lose children to diarrheal disease that a treatment plant would prevent. And the modern plant is becoming a resource factory: biogas from sludge digestion can power the plant, recovered nutrients become fertilizer, and reuse turns effluent into a drought-proof water supply.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Define the problem before solving it. Raw municipal sewage is roughly ninety-nine percent water; the trouble is the remaining one percent — suspended solids, dissolved organic matter, nitrogen and phosphorus, microbes, and whatever industry contributed. The master metric is BOD, biochemical oxygen demand: the milligrams of oxygen a liter of sample consumes as microbes decompose its organics over five days at twenty degrees (BOD5). A strong municipal influent runs a few hundred mg/L; a healthy river carries a few. Dump untreated sewage into a stream and the decomposer bloom strips the oxygen — fish suffocate not from poison but from want of dissolved O2. Every treatment stage is therefore measured by how much BOD and solids it removes; the permit arithmetic at the end of this lesson is exactly that accounting.",
      },
      {
        kind: "para",
        text: "The train begins mechanically. Preliminary treatment screens out rags and grit — the objects that would jam pumps — and lets sand settle. Primary treatment is pure physics: slow the water in clarifiers for an hour or two and gravity does the work, settling perhaps half the suspended solids and a third of the BOD into a sludge blanket that is scraped away for separate handling. Nothing biological has happened yet; primary effluent is still rich, gray, and oxygen-hungry.",
      },
      {
        kind: "para",
        text: "Secondary treatment is where the ecology begins, and its two dialects are the same idea in different geometry. Activated sludge — invented in Manchester in 1913–14 — aerates the effluent in basins while a mixed community of bacteria, protozoa and rotifers consumes the dissolved organics, forming flocs; the mixture then settles in a secondary clarifier, and crucially the settled microbes are returned to the aeration basin to keep the biomass young and hungry (excess is wasted to the sludge line). Trickling filters and other biofilm systems instead fix the microbes on media and drip wastewater over them. Both depend on the same bargain: keep oxygen plentiful, retention time tuned, and the microbial food web balanced so the carbon-eaters win before the sludge leaves.",
      },
      {
        kind: "para",
        text: "Conventional secondary treatment removes carbon but largely ignores nitrogen and phosphorus — the nutrients that over-fertilize receiving waters into algal blooms and dead zones. Advanced plants therefore add a tertiary act. Nitrogen leaves by nitrification followed by denitrification: first aerobic bacteria oxidize ammonia to nitrate (Nitrosomonas, Nitrobacter), then anaerobic zones let denitrifiers convert that nitrate to N2 gas — engineered so the same molecule is first given oxygen, then persuaded to exhale it. Phosphorus is scraped out either chemically (alum or iron salts precipitating it) or biologically, by cycling bacteria that hoard phosphate (enhanced biological phosphorus removal). A final disinfection — chlorine, UV, or ozone — knocks the pathogen count down before discharge.",
      },
      {
        kind: "para",
        text: "Every step concentrated something, and that something is sludge: the settled solids from primary and secondary. The sludge train thickens it, then anaerobic digesters let methanogens ferment it for weeks at mesophilic or thermophilic temperatures, stabilizing the organics and yielding biogas — roughly sixty percent methane — burned in combined heat and power units that can make a well-run plant energy-self-sufficient. The digested product, biosolids, is dewatered and land-applied as fertilizer where regulations allow. Sludge is not a byproduct anymore; it is the plant\u2019s second revenue stream and its hardest public-relations problem.",
      },
      {
        kind: "para",
        text: "The frontier is the loop closing. Effluent standards keep tightening (BOD, suspended solids, ammonia, nutrients, emerging contaminants), and water-scarce cities have discovered the obvious truth that effluent is a reservoir by another name: Singapore\u2019s NEWater reclaims treated effluent to drinking-grade with microfiltration, reverse osmosis and UV, supplying a large share of the island\u2019s demand; windward cities recharge aquifers with purified effluent; non-potable purple-pipe systems water parks and cool industry. The engineering is settled — the remaining obstacles are combined-sewer overflows during storms and the psychology of taste, which marketing calls the yuck factor and engineers call acceptance.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "BOD removal efficiency",
        latex: "\\eta = \\frac{\\text{BOD}_{\\text{in}} - \\text{BOD}_{\\text{out}}}{\\text{BOD}_{\\text{in}}} \\times 100\\%",
        meaning: "The plant\u2019s headline grade: a conventional secondary plant removes roughly 85–95% of incoming BOD; tertiary trains push higher.",
      },
      {
        kind: "formula",
        name: "Daily mass load",
        latex: "L = C \\cdot Q",
        meaning: "Concentration (mg/L) times flow (ML/d) gives kilograms per day — because one mg/L across one megaliter is one kilogram. All permit math starts here.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Set the plant: it treats Q = 40 ML/d (megaliters per day) with influent BOD5 of 250 mg/L and secondary-effluent BOD5 of 20 mg/L.",
          "Convert to loads: influent load = 250 mg/L × 40 ML/d = 10,000 kg/d; effluent load = 20 × 40 = 800 kg/d — using the 1 mg/L × 1 ML = 1 kg identity.",
          "Compute the grade: removal = (10,000 − 800) ÷ 10,000 = 92% — comfortably inside conventional secondary performance (85–95%).",
          "Add the permit check: the river authority caps the discharge at 15 mg/L BOD and the plant is running 20. Options in order of engineering preference: reduce peak wet-weather loadings (infiltration and combined-sewer overflows), tune return-sludge rate and aeration to push the biomass further, or add a polishing stage — because the deficit is 5 mg/L × 40 ML/d = 200 kg/d of BOD reaching the river.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Activated sludge, trialed at Manchester\u2019s Davyhulme works in 1913–14, remains the world\u2019s dominant secondary process a century on — a microbial consortium kept hungry by returning its own biomass.",
          "Singapore\u2019s NEWater blends reclaimed effluent purified by microfiltration, reverse osmosis and UV disinfection into the island\u2019s water supply — the reference design for potable reuse.",
          "Anaerobic sludge digestion with combined heat and power lets plants like Aarhus (Denmark) export more energy than they import — sewage works rebranded as water-resource recovery facilities.",
          "Struvite (magnesium ammonium phosphate) recovery reactors harvest phosphorus from sidestreams as slow-release fertilizer, closing the nutrient loop between sanitation and agriculture.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Four ideas need retiring. \u201cThe river cleans it anyway\u201d — dilution works only until the decomposer oxygen demand outstrips reaeration; every dead zone in a summer river is that sentence made visible. \u201cSecondary treatment removes nutrients\u201d — it removes carbon; nitrogen and phosphorus largely sail through without the tertiary act. \u201cStorm water is somebody else\u2019s problem\u201d — combined sewers overflow in rain, sending untreated sewage to the river; green infrastructure and storage tanks are part of the treatment system, not landscaping. \u201cReused water is dirtier than fresh\u201d — a modern potable-reuse train is audited more tightly than most surface supplies, which already carry upstream cities\u2019 effluent; the difference is whether the loop is admitted.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "BOD5", def: "Biochemical oxygen demand over five days at 20 °C — the standard proxy for biodegradable organic pollution." },
          { term: "Activated sludge", def: "Aerated suspended-growth process whose flocculated microbes consume dissolved organics; biomass is recycled to keep the culture dense." },
          { term: "Nitrification–denitrification", def: "Two-step nitrogen removal: aerobic oxidation of ammonia to nitrate, then anaerobic reduction of nitrate to atmospheric N2." },
          { term: "Clarifier", def: "A quiescent settling tank; gravity separates solids in both primary and secondary service." },
          { term: "Biosolids", def: "Digested, dewatered sludge stabilized enough for regulated land application or other beneficial use." },
          { term: "Combined sewer overflow", def: "Storm-driven discharge of diluted untreated sewage when combined pipes exceed capacity." },
          { term: "Potable reuse", def: "Purifying treated effluent to drinking standards — the closed-loop answer of water-scarce cities." },
        ],
      },
      { kind: "heading", text: "Check Your Understanding" },
      {
        kind: "quiz",
        items: [
          {
            q: "BOD5 measures:",
            options: ["The oxygen fish need", "The oxygen microbes consume decomposing a sample in five days", "The bacteria count per liter", "The biochemical phosphorus demand"],
            answer: 1,
            explain: "It is an oxygen-demand proxy for biodegradable organics — the quantity whose decomposition would starve a river of dissolved oxygen.",
          },
          {
            q: "What distinguishes activated sludge from a trickling filter?",
            options: ["One removes carbon, the other nutrients", "Suspended-growth biomass versus biofilm on media — the same ecology in different geometry", "One is chemical, one biological", "Only activated sludge needs aeration"],
            answer: 1,
            explain: "Both are aerobic biological oxidation; the microbes are either held in suspension (and recycled) or fixed on surfaces.",
          },
          {
            q: "Conventional secondary treatment is weakest at removing:",
            options: ["Suspended solids", "Oxygen-demanding organics", "Nitrogen and phosphorus", "Rags and grit"],
            answer: 2,
            explain: "Carbon removal is the design target; nutrients need the tertiary act — nitrification/denitrification and chemical or biological phosphorus removal.",
          },
          {
            q: "A 40 ML/d plant cuts influent BOD from 250 to 20 mg/L. The daily BOD load removed is:",
            options: ["230 kg/d", "920 kg/d", "9,200 kg/d", "10,000 kg/d"],
            answer: 2,
            explain: "230 mg/L × 40 ML/d = 9,200 kg/d removed (10,000 in, 800 out) — the 1 mg/L × 1 ML = 1 kg identity doing the work.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Prerequisite: the water-treatment lesson — the inbound half of the loop. Continue with the microbiology subject for the ecology inside the aeration basin, the environmental-pollution subject for receiving-water impacts, and the energy-systems lessons for biogas CHP economics; the reuse frontier connects directly to desalination\u2019s reverse-osmosis machinery.",
        tone: "path",
      },
      { kind: "heading", text: "Five-Minute Recap" },
      {
        kind: "list",
        ordered: true,
        items: [
          "BOD5 is the master metric: untreated sewage is an oxygen debt the river cannot pay.",
          "The train: screens and gravity first (primary), farmed microbes second (activated sludge or biofilm).",
          "Tertiary is nutrient season: nitrify then denitrify, precipitate phosphorus, disinfect last.",
          "Sludge is a stream, not a waste: digest it anaerobically for biogas and land the biosolids.",
          "The loop is closing — reuse, nutrient recovery and energy recovery are turning plants into resource factories.",
        ],
      },
    ],
  },
]
