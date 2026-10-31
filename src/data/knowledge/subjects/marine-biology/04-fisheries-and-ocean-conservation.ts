/**
 * Knowledge Universe — Marine Biology — Chapter 04: Fisheries & Ocean Conservation
 * 1 lesson · ~1,852 words
 * field: Marine Biology
 * legacy sources: life-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Fisheries & Conservation]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 bio-fisheries-aquaculture — Fisheries, Aquaculture and the Future of Ocean Food
 */
import type { KnowledgeTopic } from '../../types'

export const marineBiologyCh04: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  // Source-grounded 2026-10-20: FAO The State of World Fisheries and
  // Aquaculture (SOFIA) 2024 headline statistics (2022 data year:
  // aquaculture surpassing capture for aquatic animals, sustainable-stock
  // share, per-capita supply) + the open-textbook ecology treatment of
  // logistic growth and maximum sustainable yield. Deepens the Marine
  // Biology subject alongside "Marine Biology: Life in the Ocean" (which
  // covers reefs, vents and adaptation — not fisheries).
  {
    id: "bio-fisheries-aquaculture",
    title: "Fisheries, Aquaculture and the Future of Ocean Food",
    domain: "Life Sciences",
    field: "Marine Biology",
    branch: "Fisheries & Conservation",
    tier: "core",
    concepts: [
      "Wild capture versus farming: the two seafood economies",
      "Maximum sustainable yield and the logistic logic",
      "Open access and the tragedy of the commons",
      "Stock assessment and the sustainable-share statistic",
      "Bycatch and ecosystem side-effects",
      "Collapse anatomy: the northern cod",
      "Aquaculture's boom and its own footprint",
      "Management that works: quotas, rights, reserves",
    ],
    words: 1852,
    readMins: 9,
    addedOn: "2026-10-20",
    blocks: [
      {
        kind: "para",
        text: "The ocean-supper lesson painted the marine food web from plankton to apex predators; this topic follows humanity\u2019s place in it. Seafood now comes from two economies moving in opposite directions: wild capture, flat for decades and ecologically capped, and aquaculture, compounding for a lifetime. In 2022 the crossing became official — farmed aquatic animals outnumbered wild-caught ones for the first time, according to the FAO\u2019s State of World Fisheries and Aquaculture report. Understanding why capture has hit its ceiling, why some stocks thrive under management while others collapsed, and what fish farming does well and badly is the business of this lesson.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Aquatic foods supply roughly twenty kilograms per person per year and a sixth of the animal protein humanity eats, with hundreds of millions of livelihoods attached. Whether the ocean keeps paying depends on a handful of concepts — sustainable yield, open-access dynamics, and farming\u2019s feed budget — that also govern every other renewable resource humans harvest.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Start with the biological ceiling. A fish stock is a renewable resource because fish reproduce: a population grows fastest not when it is huge but when it is at moderate size, with plenty of partners yet unused food and space. The logistic model puts peak growth at half the carrying capacity, and that peak growth rate is the maximum sustainable yield — the largest annual harvest the population can replace forever. Fish harder than that and the stock shrinks; the catch may stay high for a while, but it is being paid out of capital. The FAO\u2019s monitoring — stock assessments assembled from catch records, survey trawls and population models — is essentially the global attempt to locate each stock on that curve. Its headline number, that roughly sixty percent of assessed stocks sit at biologically sustainable levels with the remainder fished too hard, is a summary of positions on the curve, not a verdict on the ocean\u2019s health.",
      },
      {
        kind: "para",
        text: "If sustainable yield is knowable, why do collapses happen? Because of who owns what. On the open sea, nobody owns the fish until they are caught, so every fisher races the others: what each boat saves for next year, another boat takes. This is the tragedy of the commons wearing oilskins. The economics is vicious — new entrants keep arriving while profits exist, then the fleet is too big for the stock, and everyone must fish harder to cover fixed costs just as the stock declines. Coastal states answered by extending Exclusive Economic Zones to two hundred nautical miles, converting most fisheries from open commons into national property; the high seas remain the hard case, governed by patchy regional agreements.",
      },
      {
        kind: "para",
        text: "The northern cod is the cautionary tale that keeps managers humble. For centuries the Grand Banks off Newfoundland seemed inexhaustible; then, with improving sonar, groundfish trawlers and open-access racing, catch rates climbed through the 1980s even as the spawning biomass quietly fell — the fishing power hid the decline. In 1992 Canada imposed a moratorium, the single largest layoff in the country\u2019s history, ending a fishery that had anchored hundreds of communities for five hundred years. Three decades on, the stock has only partially recovered — a reminder that a collapsed stock is not a reset button: ecosystems reorganize, and the cod\u2019s niche moved on without it.",
      },
      {
        kind: "para",
        text: "Even a well-managed trawl harvest has a wake. Bycatch — everything hauled up that was not the target — includes juveniles, protected turtles and albatrosses; shrimp trawls historically discarded several kilograms of non-target life per kilogram of shrimp, though turtle-excluder devices and sector rules have cut that sharply. Bottom trawling flattens structure-forming habitat like cold-water corals that grow in centuries, and fishing biased toward large, old fish exerts selection pressure and removes the most fecund spawners. A fishery is never a scalpel; management is the attempt to make it a careful one.",
      },
      {
        kind: "para",
        text: "Aquaculture answered the ceiling — but it is not a free lunch. Farmed carp, tilapia and bivalves are genuinely efficient: filter-feeding mussels and oysters actually clean the water they farm in, and herbivorous fish convert feed at ratios land animals cannot match. The strain shows at the carnivore end: farmed salmon and shrimp eat feed made from small wild fish (anchoveta, sardines), so parts of the industry still farm the ocean with the ocean, and fishmeal fisheries press the same logistic logic as any wild stock. Shrimp ponds carved from mangrove forests destroyed nurseries and storm buffers; escapes and disease leak into wild populations; nutrient loading dirties the bays beneath cages. The FAO\u2019s framing of aquaculture as the growth engine of aquatic food therefore comes with a management corollary: farming is only as sustainable as its feed, its siting and its biosecurity.",
      },
      {
        kind: "para",
        text: "What actually works? The success stories share a design. Individual transferable quotas — catch shares that give each vessel a guaranteed slice of a scientifically set total — end the race and let fishers plan; Iceland and New Zealand rebuilt several stocks on them. Marine reserves close chunks of habitat entirely, exporting larvae and spillover catch to neighboring grounds. Gear rules, seasonal closures and real-time bycatch avoidance shave the wake. Certification schemes and consumer labeling put market pressure behind the science. None of it is exotic: it is property rights, honest accounting and habitat protection applied to a commons — the same triad that keeps forests and aquifers alive.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Logistic growth",
        latex: "g(N) = rN\\left(1 - \\frac{N}{K}\\right)",
        meaning: "Population growth as a function of stock size N: zero at carrying capacity K, maximal in between — the shape that makes moderate stocks the productive ones.",
      },
      {
        kind: "formula",
        name: "Maximum sustainable yield",
        latex: "MSY = \\frac{rK}{4} \\quad \\text{at } N = \\frac{K}{2}",
        meaning: "Peak of the logistic curve: the harvest rate a stock can replace indefinitely — exceeded only by spending down the capital.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Set a stock: intrinsic growth r = 0.4 per year, carrying capacity K = 1,000,000 tonnes of spawning biomass.",
          "Compute the ceiling: MSY = rK/4 = 0.4 × 1,000,000 / 4 = 100,000 tonnes per year, taken at N = 500,000 tonnes.",
          "Test a below-ceiling quota: a fleet harvesting 80,000 t/yr — a fifth below MSY. Solve 0.4N(1 − N/1,000,000) = 80,000: two roots, N ≈ 276,000 t and N ≈ 724,000 t. The larger root is the stable equilibrium — the fishery settles there, holding the stock 45% above the MSY size while yielding 80,000 t forever.",
          "Read the fine print and the danger: the 276,000 t root is unstable — a bad recruitment year nudging the stock below it flips growth below harvest, and decline accelerates toward collapse (hysteresis: the same 80,000 t quota that was sustainable becomes a death sentence). A quota above MSY — say 120,000 t — has no equilibrium at all: the discriminant of the quadratic goes negative, and the stock shrinks every year without stopping. This is why honest quotas sit below MSY with buffers.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "The 1992 northern-cod moratorium ended a five-century fishery overnight — tens of thousands of livelihoods — and stands as the reference collapse in every fisheries-management course.",
          "Iceland\u2019s and New Zealand\u2019s individual transferable quota systems turned several collapsing stocks into stable, profitable fisheries by ending the race to fish.",
          "The Peruvian anchoveta fishery — the world\u2019s largest by volume and the backbone of fishmeal — shows the ENSO coupling: catches swing by millions of tonnes with El Niño\u2019s warm water, a live lesson in climate-linked quotas.",
          "Singapore\u2019s and Norway\u2019s coastal farms, and the global spread of recirculating aquaculture systems, show the industry\u2019s sustainable frontier: land-based, feed-controlled, effluent-treated protein.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Three simplifications mislead. \u201cMSY is a fixed safe number\u201d — the logistic model assumes perfect knowledge and a single species; real stocks fluctuate with recruitment and climate, so honest quotas sit below MSY with buffers. \u201cFarmed fish is automatically greener\u201d — carnivore aquaculture leans on wild forage fish, coastal ponds trade mangroves for shrimp, and disease escapes both ways; sustainability depends on feed, siting and containment. \u201cThe sustainable-share statistic means sixty percent of seafood is sustainable\u201d — it is the share of assessed stocks (by tonnage of monitored landings) at biologically sustainable levels; it says nothing about unassessed stocks, and \u201csustainable\u201d is a population statement, not a fishery-practice one.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Stock assessment", def: "The modeling of a fish population\u2019s size and productivity from catch records, surveys and biology — the basis of quotas." },
          { term: "Maximum sustainable yield", def: "The largest harvest a stock can replace indefinitely; the peak of the logistic growth curve, at half the carrying capacity." },
          { term: "Bycatch", def: "Non-target species caught and often discarded — juveniles, turtles, seabirds — the trawl fishery\u2019s collateral damage." },
          { term: "EEZ", def: "Exclusive economic zone: coastal states\u2019 200-nautical-mile resource jurisdiction, which privatized most fisheries into national stewardship." },
          { term: "Aquaculture", def: "Farming of aquatic organisms; now the larger half of the world\u2019s aquatic-animal food supply." },
          { term: "Individual transferable quota", def: "A catch share assigning each holder a fixed slice of a scientifically set total, tradeable and race-ending." },
          { term: "Moratorium", def: "A complete closure of a fishery — the admission that the stock must rebuild before any harvest resumes." },
        ],
      },
      { kind: "heading", text: "Check Your Understanding" },
      {
        kind: "quiz",
        items: [
          {
            q: "Under the logistic model, maximum sustainable yield is taken when the stock is:",
            options: ["At carrying capacity", "At half the carrying capacity", "Nearly extinct", "Doubling every year"],
            answer: 1,
            explain: "Growth g = rN(1 − N/K) peaks at N = K/2 — moderate stocks replace the most, which is why empty oceans are also unproductive ones.",
          },
          {
            q: "The FAO\u2019s \u201csustainable stocks\u201d statistic describes:",
            options: ["The share of seafood labels that are honest", "The share of assessed stocks fished at or below replacement", "The share of fish that are farmed", "The share of the ocean protected"],
            answer: 1,
            explain: "It is a stock-assessment summary for monitored fisheries — not a certification of individual products or of unassessed stocks.",
          },
          {
            q: "The tragedy of the commons strikes fisheries because:",
            options: ["Fish are too small to count", "No one owns the stock until caught, so restraint by one is harvest by another", "Fisheries are always unprofitable", "Governments set quotas too high on purpose"],
            answer: 1,
            explain: "Open access converts shared restraint into someone else\u2019s catch — the race logic that catch shares and EEZs were invented to end.",
          },
          {
            q: "Farmed carnivorous fish like salmon can still pressure wild stocks because:",
            options: ["They escape too fast to farm", "Their feed is made from small wild forage fish", "Farms release their predators", "They require no management"],
            answer: 1,
            explain: "Fishmeal and fish-oil diets chain salmon farms to anchoveta-style forage fisheries — the feed budget is the industry\u2019s ecological tether.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Prerequisites: the marine-biology lesson for the food web and habitats, and the energy-flow lesson for why big fish are rare. Continue with the environmental-policy subject for governance of commons, the microeconomics of externalities behind catch shares, and the trade-policy lesson for how seafood markets connect Norwegian farms to global plates.",
        tone: "path",
      },
      { kind: "heading", text: "Five-Minute Recap" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Two seafood economies: wild capture flat at its ecological ceiling; aquaculture compounding past it (the 2022 crossing).",
          "MSY sits at half the carrying capacity — moderate stocks, not full ones, are the productive ones.",
          "Open access turns shared restraint into a race; EEZs and catch shares are the property-rights fixes.",
          "Collapses (northern cod) come from racing fleets masking decline — and recovery is measured in decades.",
          "Aquaculture\u2019s footprint lives in its feed, siting and biosecurity: farmed is only greener by design.",
        ],
      },
    ],
  },
]
