/**
 * Knowledge Universe — Marine Biology — Chapter 01: The Blue Realm
 * 1 lesson · ~1,191 words
 * field: Marine Biology
 * legacy sources: life-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [The Blue Realm]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bio-marine-biology-oceans — Marine Biology: Life in the Ocean
 */
import type { KnowledgeTopic } from '../../types'

export const marineBiologyCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: "bio-marine-biology-oceans",
    title: "Marine Biology: Life in the Ocean",
    domain: "Life Sciences",
    field: "Marine Biology",
    branch: "The Blue Realm",
    tier: "core",
    concepts: [
      "Ocean zones by light and depth",
      "Coral reefs: oases in blue deserts",
      "Kelp forests and trophic cascades",
      "Deep sea, vents, and chemosynthesis",
      "Pressure, buoyancy, and salt",
      "Tides, upwelling, and productivity",
    ],
    words: 1194,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "The ocean covers 71 percent of the planet, holds 97 percent of its water, and quietly runs the climate, the carbon cycle, and about half the oxygen you breathe — yet only a fraction of its seafloor has been mapped in fine detail. Marine biology is the study of life in that water: sunlit coral cities, kelp forests swaying in cold current, midnight trenches where whole ecosystems run on chemicals instead of sunlight. The organizing rules are few — light, depth, food, and salt — and they explain almost everything down there.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Over three billion people rely on seafood as a significant protein source, and drifting plankton produce roughly half the oxygen in every breath. Knowing how ocean life is arranged tells you where the planet's biggest engine rooms are — and which ones are in trouble.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The ocean sorts life by light. In the photic zone, the top couple of hundred meters, enough sunlight survives for photosynthesis — blue light travels deepest, red is absorbed within the first meters. Below it, the twilight realm hosts lanternfish and jellies that flash with bioluminescence, and every night trillions of animals swim up hundreds of meters to feed near the surface and sink again by dawn: the largest animal migration on Earth, repeated daily. Beneath about 1,000 meters lies the midnight zone, permanently black, cold, and vast.",
      },
      {
        kind: "para",
        text: "Coral reefs are oases in nutrient deserts. The reef-building coral is an animal hosting algae called zooxanthellae inside its tissues; the tenants photosynthesize and trade sugars for shelter and recycled nutrients, an internal economy that lets reefs thrive in water too barren for most life. That trick makes them absurdly productive — roughly a quarter of all marine species crowd onto less than one percent of the ocean floor. When water stays too warm, corals expel their tenants and turn white: bleaching, a starvation alarm.",
      },
      {
        kind: "para",
        text: "Kelp forests are the cold-water counterpart, growing where nutrients run rich along temperate coasts. Giant kelp anchored by holdfasts can grow half a meter a day and tower 30 meters, building submerged forests for fish, seals, and abalone. Their famous management story is the sea otter: otters eat urchins, urchins eat kelp, so when otters were hunted near to extinction, urchins mowed the forests into barren rock. The recovery of otters brought the kelp back — a textbook trophic cascade.",
      },
      {
        kind: "para",
        text: "Below the reach of light, life waits on what sinks — a slow drizzle of detritus called marine snow. Then in 1977, submersibles over the Galapagos rift found dense communities around hydrothermal vents, no sunlight involved at all. Bacteria there oxidize hydrogen sulfide billowing from the vents — chemosynthesis — and everything else feeds on them, including two-meter tube worms that have no mouth or gut. Even a dead whale sinking to the floor becomes a temporary oasis hosting specialist scavengers for decades.",
      },
      {
        kind: "para",
        text: "Living in water asks strange engineering. Pressure climbs by one atmosphere every ten meters, so deep-sea fish carry no air spaces — many lack swim bladders entirely and keep their tissues water-filled; a protein called TMAO counters pressure's distortion of biomolecules in the deepest grenadiers. Sharks manage buoyancy with oil-rich livers instead of gas bladders. As for salt: marine bony fish lose water to the sea and replace it by drinking constantly, pumping excess salt out at the gills, while sharks retain urea to keep their blood nearly as salty as seawater.",
      },
      {
        kind: "para",
        text: "Where the food is depends on physics. Tides raised by the Moon and Sun expose and flood the intertidal zone twice daily in most places, compressing life into visible bands of barnacles, mussels, and kelp. More important for the open ocean, upwelling: wind pushes surface water away from a coast, and cold, nutrient-loaded deep water rises to replace it. Peru, California, and Namibia owe their great fisheries to upwelling — the reason coasts and upwellings are green and busy while the tropical open ocean is a clear blue desert.",
      },
      {
        kind: "formula",
        name: "Light attenuation in seawater",
        latex: "I(z) = I_0\\,e^{-kz}",
        meaning: "Sunlight dims exponentially with depth z at attenuation coefficient k; the photic zone is conventionally the layer down to about one percent of surface light.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: how deep the sunlit photic zone reaches in clear open-ocean water versus murky coastal water.",
          "Recall the rule: the photic floor sits where light falls to one percent, so z = ln(100) divided by k, and ln(100) is about 4.6.",
          "Apply: clear ocean water has k near 0.04 per meter, giving 4.6 / 0.04 = 115 meters; coastal water near 0.15 per meter gives 4.6 / 0.15, about 31 meters.",
          "State the result: in the open tropical ocean photosynthesis can run past 100 meters down, while in murky coastal water it stops around 30 meters — kelp must anchor shallow, and plankton blooms stay near the surface.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Marine protected areas, from kelp reserves to no-take coral sanctuaries, let stocks rebuild and spill over into surrounding fisheries.",
          "Coral nurseries grow heat-tolerant fragments for outplanting onto damaged reefs.",
          "Aquaculture now supplies over half of all seafood eaten, shifting pressure off wild stocks when sited and fed well.",
          "Green fluorescent protein, first pulled from a jellyfish, lit up modern cell biology and earned a Nobel Prize.",
          "Rules for deep-sea mining are being written now, weighing metal demand against vent communities found nowhere else.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Three common slips. The clear tropical ocean is not fertile — it is a blue desert, and the busy green water hugs coasts and upwellings. The deep sea is not lifeless — vents, whale falls, and oxygen-minimum zones host dense, strange communities. And the ocean is not a limitless larder: most assessed fish stocks are fished at or beyond their limits, which is why quotas and protected areas exist.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Photic zone", def: "The sunlit upper layer, roughly 0-200 meters, where photosynthesis is possible." },
          { term: "Zooxanthellae", def: "Algae living inside coral tissues, trading sugars for shelter." },
          { term: "Bioluminescence", def: "Light produced chemically by living organisms, common below the twilight line." },
          { term: "Chemosynthesis", def: "Building food from chemical energy such as vent hydrogen sulfide instead of light." },
          { term: "Upwelling", def: "Wind-driven rise of cold nutrient-rich water that fuels productive fisheries." },
          { term: "Trophic cascade", def: "Predator changes rippling down through prey and plants, as with otters, urchins, and kelp." },
          { term: "Marine snow", def: "The slow fall of organic detritus that feeds the deep sea." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "The photic zone ends roughly where sunlight falls to:",
            options: ["50 percent of the surface value", "10 percent", "1 percent", "one-tenth of a percent"],
            answer: 2,
            explain: "One percent of surface light marks the conventional floor of the sunlit zone.",
          },
          {
            q: "Most of a reef coral's food energy comes from:",
            options: ["hunting fish", "photosynthesis by algae in its tissues", "filtering plankton only", "chemosynthesis"],
            answer: 1,
            explain: "Zooxanthellae tenants supply sugars via photosynthesis; corals also catch plankton but mainly live on the algae.",
          },
          {
            q: "Hydrothermal-vent communities get their energy from:",
            options: ["moonlight", "sunlight reflected off particles", "oxidation of hydrogen sulfide by bacteria", "dead whales"],
            answer: 2,
            explain: "Bacteria run chemosynthesis on vent chemicals, and the whole community feeds on them.",
          },
          {
            q: "Upwelling makes coastal waters productive because it:",
            options: ["warms the surface", "brings nutrient-rich deep water into the sunlit zone", "raises the salinity", "increases tides"],
            answer: 1,
            explain: "Nutrients + sunlight = plankton blooms, which feed everything up the chain.",
          },
        ],
      },
    ],
  },
]
