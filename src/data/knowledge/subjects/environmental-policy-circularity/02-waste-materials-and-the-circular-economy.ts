/**
 * Knowledge Universe — Environmental Policy & Circularity — Chapter 02: Waste, Materials & the Circular Economy
 * 3 lessons · ~3,671 words
 * field: Waste & Circularity
 * legacy sources: environment.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Waste & Circularity]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 env-waste-management-recycling — Waste: Where It Goes After the Bin
 *   02.2 env-plastics-polymer-century — Plastics: The Polymer Century
 *   02.3 env-recycling-systems-materials — Recycling Systems: How Materials Actually Loop Back
 */
import type { KnowledgeTopic } from '../../types'

export const environmentalPolicyCircularityCh02: KnowledgeTopic[] = [
  {
    id: "env-waste-management-recycling",
    title: "Waste: Where It Goes After the Bin",
    domain: "Environment & Sustainability",
    field: "Waste & Circularity",
    branch: "Materials Through Society",
    tier: "core",
    concepts: [
      "collection economics dominate the system",
      "engineered landfills: liners, leachate, gas",
      "waste-to-energy trade-offs",
      "recycling as a commodity business",
      "contamination and National Sword",
      "organics diversion and composting",
      "circular economy and producer responsibility",
    ],
    words: 1186,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "You put the bin out at night and it vanishes by morning — and for most people the story of waste ends there. Behind that vanishing act sits one of civilization's largest logistics operations: collection trucks, transfer stations, sorting facilities, engineered landfills and incinerators, all sized to the flow of material a city discards every day. This core lesson follows your rubbish from kerb to final destination, and asks the question modern waste management obsesses over: how much of that material can be kept in use instead of buried?",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Waste is a design failure made visible. Every tonne of rubbish is raw material, energy and embodied labor discarded — and the systems that collect, sort and process it decide whether those values are recovered or lost for centuries.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The first and most expensive step is getting waste from millions of doors to anywhere at all. Collection — trucks, crews, routes — typically consumes half of a municipal waste budget, which is why cities obsess over route density and bin design. Once collected, waste is compacted and hauled to transfer stations, loaded onto larger vehicles, and moved in bulk to the distant facilities that handle it: landfill, incinerator or recycling plant. Geography matters; transport costs shape every design decision downstream.",
      },
      {
        kind: "para",
        text: "The modern sanitary landfill is nothing like the town dump of memory. Its base is sealed with compacted clay plus a plastic geomembrane, layered like a bathtub; a network of pipes collects leachate, the contaminated liquid percolating through the waste, and treats it as wastewater. Decomposing organic matter generates landfill gas — roughly half methane — which capture wells either flare or burn for energy. Monitoring wells surround the site for decades after closure, because a landfill is not finished when full: it is a slow bioreactor and a long-term liability.",
      },
      {
        kind: "para",
        text: "Burning waste shrinks it to about a tenth of its volume and can recover energy — waste-to-energy plants supply district heating in Copenhagen and electricity elsewhere. The controversies are real: combustion flue gases need scrubbers, fabric filters and activated carbon to control acid gases, particulates and dioxins, and the fly ash left over requires secure disposal. Whether incineration counts as recovery or disposal — and whether it quietly undermines recycling by demanding fuel — remains a live policy fight.",
      },
      {
        kind: "para",
        text: "Recycling is a commodity business wearing an environmental halo. In single-stream systems everything recyclable goes in one bin; at the materials recovery facility, conveyors, screens, magnets, optical sorters and people separate paper, card, plastics, glass and metals into bales sold to processors. Everything hinges on contamination: one greasy pizza box can downgrade a batch of cardboard, and wishcycling — tossing questionable items in hopefully — does real damage. In 2018 China's National Sword policy slashed the contamination it would accept in imported bales, crashing commodity prices and forcing Western nations to build domestic capacity and confront how little plastic marked recyclable actually is.",
      },
      {
        kind: "para",
        text: "Organics — food scraps and yard waste — form the largest single slice of municipal waste and the most damaging in landfill, where they decompose into methane. Composting returns them to soil as humus; anaerobic digestion captures the methane as biogas for energy first. Source-separated organics collections are the quiet workhorses of high-diversion cities like San Francisco and Milan, because no sorting technology can scrub mixed food waste out of plastic film.",
      },
      {
        kind: "para",
        text: "The endgame is upstream design. The waste hierarchy ranks options from best to worst — reduce, reuse, recycle, recover, dispose — and every step up the list beats the one below it. Circular-economy thinking pushes producers to take responsibility for products at end of life, a principle already law for packaging across much of Europe, and to design for disassembly and for materials that survive recycling loops rather than degrade through them.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Material recovery rate",
        latex: "\\text{MRR} = \\frac{m_{\\text{recovered}}}{m_{\\text{collected}}} \\times 100\\%",
        meaning: "The share of collected material actually processed back into products, rather than landfilled or burned.",
      },
      {
        kind: "formula",
        name: "Diversion rate",
        latex: "D = \\frac{m_{\\text{recycled}} + m_{\\text{composted}}}{m_{\\text{generated}}} \\times 100\\%",
        meaning: "Total diversion from disposal: recycling plus organics recovery, over everything generated.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: recycling and diversion rates for a city generating 100,000 tonnes of municipal waste a year — 30,000 t set out as recyclables, of which the sorting facility sells 24,000 t of clean material, plus 20,000 t of organics composted.",
          "Recall: recycling rate = material actually recycled over total generated; diversion adds composting on top.",
          "Apply: recycling = 24,000/100,000 = 24 percent. Diversion = (24,000 + 20,000)/100,000 = 44 percent. The facility's process yield is 24,000/30,000 = 80 percent — 6,000 t were too contaminated to sell.",
          "State the result: 44 percent diverted, 56 percent still needing landfill or incineration — and improving that means attacking both the 6,000 t of contamination and the 50,000 t never separated at all.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Landfill gas capture systems powering generators or feeding pipelines",
          "Waste-to-energy plants providing district heating for whole districts",
          "Deposit-return schemes achieving above 90 percent container return in Germany and Scandinavia",
          "Extended producer responsibility laws financing packaging recycling from producer fees",
          "City organics programs — San Francisco and Milan collect food waste separately from nearly every household",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The label recyclable describes a possibility, not a promise — whether something is actually recycled depends on your local facility and the market for the bale. Wishcycling contaminates loads and raises costs. Diversion statistics can be gamed by counting incineration as recovery. And exporting waste to poorer countries long propped up Western recycling rates — an exit the world is closing.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Leachate", def: "Liquid that has percolated through waste; collected by landfill pipes and treated." },
          { term: "Geomembrane", def: "The plastic liner sealing a modern landfill base above compacted clay." },
          { term: "MRF", def: "Materials recovery facility — the sorting plant turning mixed recyclables into saleable bales." },
          { term: "Contamination", def: "Wrong or dirty material in a recycling stream, degrading or destroying batch value." },
          { term: "National Sword", def: "China's 2018 import crackdown that collapsed markets for contaminated recyclables." },
          { term: "Anaerobic digestion", def: "Microbial breakdown of organics in sealed tanks, yielding biogas." },
          { term: "Extended producer responsibility", def: "Rules making producers fund or manage end-of-life handling of their products." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "Leachate is:",
            options: [
              "gas from decomposing waste",
              "contaminated liquid that has percolated through the landfill",
              "the ash left after incineration",
              "a type of compost",
            ],
            answer: 1,
            explain: "Rain and moisture moving through waste pick up pollutants; liners and collection pipes keep it out of groundwater.",
          },
          {
            q: "China's National Sword mattered because it:",
            options: [
              "banned single-use plastics worldwide",
              "sharply restricted contaminated recyclable imports, crashing Western recycling markets",
              "built waste-to-energy plants across Asia",
              "taxed landfill gas capture",
            ],
            answer: 1,
            explain: "For decades the West's recycling depended on Chinese buyers; the 2018 contamination limits ended that and forced domestic capacity.",
          },
          {
            q: "A city generates 100,000 t of waste; 24,000 t are sold as clean recyclables and 20,000 t composted. Its diversion rate is:",
            options: ["24 percent", "44 percent", "50 percent", "80 percent"],
            answer: 1,
            explain: "(24,000 + 20,000)/100,000 = 44 percent — the 80 percent figure is the sorting facility's process yield, not the city's rate.",
          },
          {
            q: "The waste hierarchy ranks options, from best to worst, as:",
            options: [
              "recycle, reduce, dispose",
              "reduce, reuse, recycle, recover, dispose",
              "incinerate, compost, landfill",
              "compost, dispose, reduce",
            ],
            answer: 1,
            explain: "Not producing waste beats reusing it, which beats recycling it — energy recovery and disposal are the last resorts.",
          },
        ],
      },
    ],
  },
  {
    id: "env-plastics-polymer-century",
    title: "Plastics: The Polymer Century",
    domain: "Environment & Sustainability",
    field: "Waste & Circularity",
    branch: "Materials Through Society",
    tier: "core",
    concepts: [
      "polymers: chains of monomers",
      "thermoplastics versus thermosets",
      "the resin-code families",
      "persistence as chemistry, not conspiracy",
      "microplastics and nurdles",
      "additive migration",
      "the recycling-reality problem",
    ],
    words: 1248,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Plastics are the defining material of the last century: light, durable, cheap, moldable into any shape — and stubbornly permanent in the wrong places. Humanity has produced over nine billion tonnes of the stuff since 1950, and nearly all of it still exists somewhere, because the same carbon chains that make plastics useful make them nearly immune to the microbes that recycle everything else. This lesson treats plastics as materials: what they are, the families behind the resin codes, why they persist, what microplastics and additives are doing, and why recycling them has proved so hard.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Almost every product you touched today contains plastic, and almost none of it was recycled. Understanding the material — not just the guilt — is the precondition for judging bans, bioplastics and circular-economy promises honestly.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "A plastic is a polymer: long molecules built by chaining thousands of small units, monomers, into strands that entangle like cooked spaghetti. Chemistry controls the chain: polyethylene is just ethylene gas linked into chains of different lengths — short and branched for flexible films, long and straight for stiff jugs. Thermoplastics can be melted and reshaped repeatedly; thermosets — Bakelite, epoxies, polyurethanes — are cross-linked into one giant molecule and never truly melt again; elastomers stretch and snap back. High strength-to-weight, chemical inertness and barrier properties all fall out of this architecture.",
      },
      {
        kind: "para",
        text: "The chasing-arrows numbers mark six workhorse families plus a catch-all. PET, code 1, is bottles and polyester fibre. HDPE, 2, is the stiff, forgiving stuff of milk jugs and pipes. PVC, 3, is window frames, cable insulation and flooring — cheap and tough, and the plastic environmental regulators like least, both for its chlorine chemistry and its reliance on additives. LDPE, 4, is films and bags. PP, 5, survives boiling water: food tubs, caps, syringes. PS, 6, is foam and cutlery. Code 7 means everything else — polycarbonate, nylon, ABS — and to a sorter, effectively nothing.",
      },
      {
        kind: "para",
        text: "Persistence is chemistry, not conspiracy. Synthetic polymers are new on evolutionary timescales, and no microbe has evolved the enzymes needed to chew carbon backbones it never met. Sunlight does attack the chains — ultraviolet photodegradation — but the result is not disappearance: plastic fragments into ever-smaller pieces. A bottle estimated to last centuries does not vanish; it shatters into sand-sized grains. Rivers then deliver the debris: an estimated eight to twelve million tonnes of plastic reach the ocean each year, most of it from land.",
      },
      {
        kind: "para",
        text: "Below five millimetres, debris counts as microplastic. Some starts small — nurdles, the pre-production pellets shipped around the world by the billion, and the synthetic fibres a single wash sheds from a fleece. The rest is weathered fragments. Microplastics have been found from the Mariana Trench to Arctic ice to human blood; lab animals exposed to them show inflammation, but the honest reading of human-health evidence is that it is still developing. The ecological record is starker, and in the North Pacific garbage patch nearly half the mass is discarded fishing gear, not consumer waste.",
      },
      {
        kind: "para",
        text: "Pure polymer rarely ships alone. Plasticizers make PVC flexible, flame retardants meet fire codes, stabilizers block sunlight, pigments colour everything — and because additives are blended in rather than chemically bonded, they migrate out. Phthalates and bisphenol A, common in vinyls and historic can linings, are endocrine disruptors at very low doses, which is why regulators have chased them for decades. Additives also poison recycling: a 'plastic' bottle may carry a dozen trace chemicals that survive every remelt, complicating any return to food contact.",
      },
      {
        kind: "para",
        text: "The material explains the recycling letdown. Of all plastic ever made, about nine percent has been recycled, twelve percent incinerated, and the rest landfilled or loose in the environment. Mechanical recycling remelts, but every heat cycle shortens the chains, so bottles become fibre, fibre becomes carpet, carpet becomes landfill — a cascade, not a circle. Multilayer films and mixed resins defeat sorting outright. Bio-based PLA composts only in industrial digesters; drop it in the sea and it lasts like any other plastic. The fix being pursued is design: mono-material packaging that can loop cleanly.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Plastic accumulation balance",
        latex: "\\Delta M = P - R - I",
        meaning: "Annual growth of the plastic stock equals production P minus genuine recycling R and incineration I; degradation is effectively zero on human timescales.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: how fast the world's plastic stock grows at today's rates — production 400 million tonnes a year, 9 percent recycled, 12 percent incinerated — and what share of all-time plastic still sits in landfills or nature.",
          "Recall: only recycled and burned material leaves the stock; everything else accumulates, because degradation is negligible.",
          "Apply: recycled = 0.09 x 400 = 36 Mt; incinerated = 0.12 x 400 = 48 Mt; accumulation = 400 - 36 - 48 = 316 Mt per year.",
          "State the result: the stock grows by 316 million tonnes annually — roughly a tonne for every 25 people on Earth, each year — and about 79 percent of all plastic ever made remains landfilled or loose in the environment.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Deposit-sourced PET bottles looping back into food-grade bottles in Norway and Germany",
          "Minimum-recycled-content laws creating demand for recovered material",
          "Single-use-plastic bans on bags, straws and cutlery across dozens of countries",
          "Fishing-gear recovery schemes targeting the largest ocean-plastic source",
          "Mono-material redesign of flexible packaging for recyclability",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "'Biodegradable' without a standard means little: PLA breaks down in an industrial composter, not in the ocean or a garden. Oxo-degradable bags just fragment faster into microplastic. Compostable and recyclable are different streams — a PLA cup contaminates a PET bale. And obsessing over straws while ignoring fishing gear and tyre wear misses where much of the mass actually comes from.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Monomer", def: "Small building-block molecule; polymers are chains of thousands of them." },
          { term: "Thermoset", def: "Cross-linked polymer — epoxy, Bakelite — that chars rather than remelts." },
          { term: "Resin identification code", def: "The number 1-7 stamped on plastic goods; names the family, never promises recyclability." },
          { term: "Photodegradation", def: "UV-driven chain breaking that embrittles and fragments plastic rather than dissolving it." },
          { term: "Microplastic", def: "Plastic pieces under five millimetres — weathered debris or intentionally shed material." },
          { term: "Nurdle", def: "Pre-production pellet shipped in bulk; a major spill category worldwide." },
          { term: "Additive", def: "Plasticizer, pigment or stabilizer blended into polymer — and free to migrate out." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Thermosets such as epoxy differ from thermoplastics because they:",
            options: [
              "melt at lower temperatures",
              "are cross-linked into one network and never truly remelt",
              "always contain recycled content",
              "dissolve in water",
            ],
            answer: 1,
            explain: "Cross-links weld the chains together; heat chars the network instead of letting it flow.",
          },
          {
            q: "Plastics persist in the environment mainly because:",
            options: [
              "they are slightly radioactive",
              "microbes never evolved enzymes to break down these synthetic carbon backbones",
              "they are heavier than water",
              "sunlight makes them stronger",
            ],
            answer: 1,
            explain: "These molecules are evolutionarily new; sunlight only fragments them into smaller pieces.",
          },
          {
            q: "With 400 Mt produced, 9 percent recycled and 12 percent incinerated, annual accumulation is about:",
            options: ["36 Mt", "48 Mt", "316 Mt", "400 Mt"],
            answer: 2,
            explain: "400 minus 36 recycled minus 48 burned leaves 316 Mt joining the standing stock every year.",
          },
          {
            q: "By mass, the North Pacific garbage patch is dominated by:",
            options: [
              "straws and cotton buds",
              "discarded fishing gear",
              "microbeads from cosmetics",
              "shopping bags",
            ],
            answer: 1,
            explain: "Nets, ropes and other gear are nearly half the patch's mass — consumer single-use items are the visible minority.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "The companion lessons finish the story: recycling systems covers the sorting machinery and the markets, and the waste lesson follows the streams themselves. Materials science in Engineering explains how chain structure governs strength.",
        tone: "path",
      },
    ],
  },
  {
    id: "env-recycling-systems-materials",
    title: "Recycling Systems: How Materials Actually Loop Back",
    domain: "Environment & Sustainability",
    field: "Waste & Circularity",
    branch: "Materials Through Society",
    tier: "intermediate",
    concepts: [
      "the MRF as an un-mixing factory",
      "eddy currents, magnets and trommels",
      "near-infrared optical sorting",
      "bale purity and contamination economics",
      "closed loops versus downcycling cascades",
      "deposit-return and eco-modulated fees",
    ],
    words: 1237,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A recycling symbol on a package is not a promise — it is a hypothesis. The claim becomes true only if a sorting facility can separate the material, a buyer will pay for the bale, and a processor can turn it into something someone wants. This lesson is about the machinery and the markets in that middle stretch: how materials-recovery facilities actually sort, why some streams loop while others stall, what contamination does to economics, the difference between closed loops and downcycling, and the deposit and producer-responsibility systems built to keep material clean.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "China's 2018 import crackdown forced wealthy countries to discover how fragile their recycling chains were. The difference between a recycling rate and a recycling reality is made — or lost — on the sorting floor and at the bale scale.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "A single-stream materials recovery facility is a factory for un-mixing. Mixed recyclables ride conveyors into rotating trommel drums, where small objects — shards, caps, food scraps — fall through the holes while cardboard rides over the top. Disc screens flick paper up and let containers drop through. Overhead magnets lift steel cans off the belt. Nonferrous metals then meet the eddy-current separator: a spinning magnet array induces electric currents in aluminium, and those currents generate an opposing magnetic field that physically flings cans off the belt into a chute — electromagnetism doing the sorting. Whatever survives meets the optical sorters.",
      },
      {
        kind: "para",
        text: "Near-infrared optical sorters are the modern heart of the line. A sensor sweeps the belt with infrared light, and each polymer family reflects a characteristic fingerprint back — PET reads differently from HDPE, which reads differently from polypropylene. The instant a target is identified, a bank of high-speed air jets blasts it off the belt mid-flight, hundreds of picks per minute. The blind spot is colour: carbon-black plastic absorbs the infrared and reads as nothing at all. Density finishes the job in float-sink tanks, where polyethylene and polypropylene float while PET, PVC and glass sink to their own streams.",
      },
      {
        kind: "para",
        text: "Material physics decides what can loop. Metals loop forever: remelting aluminium takes about 95 percent less energy than smelting ore, which makes the can the crown jewel — it can return to the shelf as a new can in about six weeks. Glass recycles endlessly but is heavy, so transport often eats the value, though cullet does lower melting temperatures in the furnace. Paper survives only four to six loops before its fibres shorten into sludge. PET and HDPE recycle well when clean; flexible film wraps the machinery into shutdown, and multilayer laminates — the chip packet, several plastics fused into one — are effectively beyond sorting.",
      },
      {
        kind: "para",
        text: "Everything trades on bale purity. Buyers pay by grade — the percentage of target material — and reject anything below specification, so one greasy or mixed load can downgrade a whole bay. The mixing arithmetic is brutal, and tanglers do the rest: hoses, cords and film wrap around screens and shafts, stopping the line for hours while workers cut them free. Wishcycling — the hopeful toss of unrecyclables into the bin — converts directly into that downtime. The lesson every facility learns is that quality is made at the source, not recovered at the end of the belt.",
      },
      {
        kind: "para",
        text: "Two fates await sorted material. Closed loops return like for like — bottle to bottle, can to can — but food-grade recycled PET demands super-clean processes or source material clean enough to start with. Downcycling cascades instead: bottle to fibre, fibre to carpet, carpet to landfill within two or three turns. Deposit-return schemes attack the problem at the source: a 10-to-25-cent refund pushes container return above 90 percent in Norway and Germany, and the reverse-vending stream is so clean it can feed food-grade loops directly. Extended producer responsibility goes further still, charging producers fees modulated by how recyclable their packaging is — money that finances the whole collection system.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Bale purity under mixing",
        latex: "p_{\\text{mix}} = \\frac{\\sum_i m_i\\,p_i}{\\sum_i m_i}",
        meaning: "The purity of a blended bale is the mass-weighted average of its streams — clean material diluted by dirty loses grade for everyone.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: whether a facility should blend 1,200 kilograms of PET baled at 97 percent purity with 800 kilograms from a contaminated route at 62 percent, against a buyer's 90-percent specification.",
          "Recall: blended purity is the mass-weighted average of the streams mixed.",
          "Apply: p = (1,200 x 0.97 + 800 x 0.62) / 2,000 = (1,164 + 496) / 2,000 = 1,660 / 2,000 = 83 percent.",
          "State the result: the blend misses the 90-percent spec. Kept separate, the 97-percent bale sells at grade while the dirty stream is downgraded alone; mixing would have destroyed fourteen points of the clean material's value.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Reverse vending machines at Norwegian and German supermarkets returning over 90 percent of containers",
          "Optical-sorter retrofits lifting facility purity after the 2018 import crackdown",
          "Eco-modulated producer fees rewarding mono-material packaging design",
          "Aluminium closed loops remelting cans back into cans within weeks",
          "Food-grade rPET plants supplying bottle-to-bottle brands",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Collected is not recycled: tonnages counted at the kerb overstate what actually sells. Single-stream convenience buys participation at the price of contamination. Chemical recycling — dissolving or pyrolyzing plastics back toward feedstock — may yet rescue mixed streams, but its energy bills and yields remain unproven at scale. And no sorting technology, however clever, can fix a package designed to be unsortable.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "MRF", def: "The plant where mixed recyclables are separated, graded and baled for sale." },
          { term: "Eddy-current separator", def: "Device inducing currents in nonferrous metals so their opposing fields fling them off the belt." },
          { term: "NIR optical sorter", def: "Sensor reading infrared fingerprints of polymers, with air jets ejecting the targets." },
          { term: "Float-sink tank", def: "Density separation in which plastics divide by whether they float." },
          { term: "Bale grade", def: "The purity percentage of a sorted bale — the number buyers pay on." },
          { term: "Tangler", def: "Film, cords or hoses that wrap sorting machinery into downtime." },
          { term: "Deposit-return", def: "Refund scheme keeping beverage containers separate and clean enough for food-grade loops." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "An eddy-current separator captures aluminium by:",
            options: [
              "heating it until it melts",
              "inducing currents whose opposing magnetic field flings it off the belt",
              "suction cups on a robotic arm",
              "dissolving everything around it",
            ],
            answer: 1,
            explain: "Spinning magnets induce eddy currents in the metal; the currents' own fields repel and eject the pieces — electromagnetism as a sorter.",
          },
          {
            q: "Carbon-black plastic defeats optical sorters because it:",
            options: [
              "is too heavy for the belt",
              "absorbs the near-infrared light the sensor reads",
              "is magnetic",
              "confuses the barcode scanner",
            ],
            answer: 1,
            explain: "No reflection, no fingerprint — the sorter sees nothing where the black tray passes, which is why designers are moving away from carbon black.",
          },
          {
            q: "Mixing 1,200 kg of 97-percent-pure PET with 800 kg at 62 percent produces a bale of about:",
            options: ["97 percent", "90 percent", "83 percent", "62 percent"],
            answer: 2,
            explain: "(1,164 + 496)/2,000 = 83 percent — below spec, which is exactly why streams are kept apart.",
          },
          {
            q: "Deposit-return schemes lift recycling quality mainly because:",
            options: [
              "they fine people for buying drinks",
              "returned containers arrive pre-sorted and clean, feeding closed loops",
              "they outlaw landfills outright",
              "they subsidize incineration plants",
            ],
            answer: 1,
            explain: "A small refund separates beverage containers from the general stream at the source — the cleanliness that food-grade reuse requires.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "This is the middle lesson of three: the plastics lesson explains the materials themselves and the waste lesson follows the streams. For the same sorting logic at industrial scale, see separation processes in Chemical Engineering.",
        tone: "path",
      },
    ],
  },
]
