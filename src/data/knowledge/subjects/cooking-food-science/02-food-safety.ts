/**
 * Knowledge Universe — Cooking & Food Science — Chapter 02: Food Safety
 * 1 lesson · ~1,119 words
 * field: Cooking & Food Science
 * legacy sources: everyday-practical.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Food Safety]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 every-kitchen-food-safety — Food Safety: The Danger Zone and Its Rules
 */
import type { KnowledgeTopic } from '../../types'

export const cookingFoodScienceCh02: KnowledgeTopic[] = [
  {
    id: 'every-kitchen-food-safety',
    title: 'Food Safety: The Danger Zone and Its Rules',
    domain: 'Everyday Knowledge',
    field: 'Cooking & Food Science',
    branch: 'Food Safety',
    tier: 'core',
    concepts: [
      'The danger zone: 4–60 °C',
      'Doubling times and the two-hour rule',
      'Cooking temperatures that kill',
      'Cross-contamination: the cutting-board shuffle',
      'Cooling is the hardest step',
      'Leftovers: cool fast, reheat once, four days',
      'Rice and the Bacillus cereus caution',
    ],
    words: 1119,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Food poisoning is not usually bad luck — it is arithmetic that went wrong between the stove and the fridge. Food Safety, the discipline behind this Everyday Knowledge topic, names the central hazard the danger zone: the temperature band between 4 and 60 °C where bacteria multiply at their fastest. From that single fact flow the rules every professional kitchen obeys — cook hot enough, cool fast enough, never let leftovers loiter. Learn the numbers and the rules stop feeling arbitrary.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Millions fall ill from foodborne disease each year, most of it from home kitchens and nearly all of it preventable. The danger-zone rules are cheap insurance: a probe thermometer costs less than one takeout meal and outperforms every visual shortcut for "is it done yet."',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Below 4 °C, bacteria barely crawl; above 60 °C, they begin to die. Between those lines — and room temperature sits almost exactly in the middle — pathogens such as Salmonella and Bacillus cereus double at their fastest. The zone is where food spends its riskiest hours, and every safety rule that follows is a strategy for sprinting through it rather than lingering.',
      },
      {
        kind: 'para',
        text: 'Under warm conditions, bacteria can double in as little as 20 minutes, and that exponential curve is why the rules are written in time. Perishable food may sit in the zone for up to two hours, or just one if the room is above 32 °C. Four hours is the professional discard line, because a hundred quiet cells can grow into millions across a long afternoon.',
      },
      {
        kind: 'para',
        text: 'Instant kill thresholds run hotter than most people guess: 74 °C for poultry and leftovers, 71 °C for ground meat, 63 °C for whole cuts held briefly at that temperature. Color is a liar — safely cooked chicken can stay pink while undercooked chicken looks done — which is why a probe thermometer at the thickest point is the only honest check in the kitchen.',
      },
      {
        kind: 'para',
        text: 'Raw meat drags its passengers onto everything it touches: boards, knives, hands, sponges, faucet handles. The defense is sequencing and separation — prep produce first, wash boards and hands between tasks, and store raw meat below ready-to-eat food so drips land on nothing. The sink sponge itself becomes a reservoir, so microwaving it damp or replacing it regularly closes that loop.',
      },
      {
        kind: 'para',
        text: 'Cooking kills; cooling is where kitchens fail. A stockpot of soup takes hours to fall through the zone, spending the whole descent doubling. The professional standard splits the trip: from 60 to 21 °C within two hours, then down to 4 °C within four more. The home equivalents are shallow containers, portions split small, an ice bath, and the fridge — not the counter — for the entire journey.',
      },
      {
        kind: 'para',
        text: 'Cooked food keeps about three to four days refrigerated before risk climbs. Reheat to 74 °C throughout — steam rising is a hint, the thermometer is proof — and reheat once, because every pass through the zone is another growth opportunity for survivors. Labeling containers with dates turns the fridge from a mystery box into an inventory.',
      },
      {
        kind: 'para',
        text: 'Bacillus cereus, the rice pathogen, survives cooking as spores and germinates in rice cooling slowly on the stove. Its toxins cause vomiting within hours, and some of those toxins survive reheating — so it is the cooling, not the reheating, that decides safety. The same logic governs soups, gravies, and starchy leftovers: get them chilled within the two-stage window.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Bacterial growth in the danger zone',
        latex: 'N(t) = N_0 \\cdot 2^{t/d}',
        meaning: 'Population N after time t grows from N0 by doubling every d minutes — as fast as every 20 minutes in warm conditions.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: rice left on the stove overnight started with 500 Bacillus cereus cells and doubled roughly every 30 minutes for 10 hours — how bad is it, and was reheating enough?',
          'Recall the governing idea: growth in the danger zone is exponential, and cereus toxins are heat-stable.',
          'Apply: 10 hours is 600 minutes, or 20 doublings, so N = 500 × 2^20 ≈ 500 million cells — plus the toxin accumulated along the way.',
          'State the result: reheating kills cells but not the toxin already formed; the safe move was refrigerating within two hours. Overnight rice is discarded no matter how thoroughly it boils.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Restaurant safety plans log cook, cool, and hold temperatures as a legal record of every dish.',
          'Schools and hospitals apply strict time-temperature control to protect vulnerable populations.',
          'Meal-prep routines batch-cook, then shallow-chill, keeping a week of food inside the rules.',
          'Picnic and barbecue planning — coolers, ice packs, and shade — is danger-zone management outdoors.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The dominant myth is the sniff test: pathogen levels that cause illness sit far below spoilage detection, so dangerous food smells perfectly fine. Trusting color or juices for doneness fails at exactly the moments that matter. And the "let it cool on the counter first" habit is precisely the growth window the two-stage cooling rule exists to close — modern refrigerators handle warm containers.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Danger zone', def: 'The 4–60 °C band where bacterial growth is fastest.' },
          { term: 'Doubling time', def: 'The interval a bacterial population takes to double under given conditions.' },
          { term: 'Two-hour rule', def: 'Discard perishables left in the zone beyond two hours — or one hour above 32 °C.' },
          { term: 'Cross-contamination', def: 'Pathogens moving from raw food to ready-to-eat surfaces and items.' },
          { term: 'Two-stage cooling', def: 'From 60 to 21 °C within two hours, then to 4 °C within four more.' },
          { term: 'Bacillus cereus', def: 'The spore-forming pathogen behind reheated-rice illness, with heat-stable toxins.' },
          { term: 'Probe thermometer', def: 'A thermometer read at the thickest point of food; the only reliable doneness test.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The danger zone for perishable food is:',
            options: ['−18 to 0 °C', '4 to 60 °C', '60 to 100 °C', 'Above 100 °C'],
            answer: 1,
            explain: 'Below 4 °C growth crawls; above 60 °C bacteria die; in between they multiply fastest.',
          },
          {
            q: 'Perishable food left out in a warm room (above 32 °C) should be discarded after:',
            options: ['One hour', 'Two hours', 'Four hours', 'Eight hours'],
            answer: 0,
            explain: 'Heat accelerates doubling, so the allowance halves from two hours to one.',
          },
          {
            q: 'Poultry is safely cooked at an internal temperature of:',
            options: ['50 °C', '60 °C', '74 °C', '90 °C'],
            answer: 2,
            explain: '74 °C at the thickest point, verified by probe — color is unreliable.',
          },
          {
            q: 'Why can fully reheated rice still cause illness?',
            options: ['The grains stay too firm', 'Cereus toxins are heat-stable and survive reheating', 'Rice cannot be reheated safely at all', 'Reheating doubles the bacteria'],
            answer: 1,
            explain: 'The cells die, but toxin formed during slow cooling persists — prevention happens before reheating.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Pairs with the Maillard-reaction topic for the cooking science. Natural next steps: pickling and fermentation, canning safety, and how professional kitchens formalize all of this into documented safety plans.',
        tone: 'path',
      },
    ],
  },
]
