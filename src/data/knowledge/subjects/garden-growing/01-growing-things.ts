/**
 * Knowledge Universe — Garden & Growing — Chapter 01: Growing Things
 * 2 lessons · ~3,195 words
 * field: Garden & Growing
 * legacy sources: everyday-practical.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Growing Things]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 every-growing-food-at-home — Growing Food at Home: From Balcony to Garden Bed
 *   01.2 every-composting — Composting: Turning Kitchen Scraps into Soil
 */
import type { KnowledgeTopic } from '../../types'

export const gardenGrowingCh01: KnowledgeTopic[] = [
  {
    id: "every-growing-food-at-home",
    title: "Growing Food at Home: From Balcony to Garden Bed",
    domain: "Everyday Knowledge",
    field: "Garden & Growing",
    branch: "Growing Things",
    tier: "core",
    concepts: [
      "Sun is the budget: six hours minimum",
      "Soil, drainage and the finger test",
      "Containers vs raised beds vs ground",
      "Easy wins first: salad, herbs, radishes",
      "Frost dates and succession planting",
      "Water deep and morning, not daily drizzles",
      "Harvest momentum: pick and it keeps producing",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A tomato from your own balcony tastes better for reasons that are partly chemistry and partly pride, but growing it is a learnable system rather than a green thumb. Home growing, the branch of Garden & Growing behind this Everyday Knowledge topic, comes down to four resources — light, soil, water and timing — and one honest ranking of crops by difficulty. The plant-science background (photosynthesis, soil biology at farm scale) lives in the Library's Botany and Agriculture subjects; this lesson is the practical craft of keeping six pots and one bed alive and productive.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "A salad garden the size of a doormat produces real food for months from a few dollars of seed. The deeper payoff is calibration: store produce is bred for shipping, picked early and eaten stale, and anyone who grows one basket of real strawberries recalibrates what those words mean. Few skills convert so little space into so much dinner.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Start with light, because it is the one input you cannot fix later. Vegetables want six to eight hours of direct sun; leafy greens and herbs tolerate four to five; fruiting crops (tomatoes, peppers, cucumbers) compromise badly below six. Track the sun across a candidate spot for one day before committing — a 'sunny balcony' can be a north-facing shade trap, and trees leaf out in late spring to steal the light that March promised. In the southern hemisphere reverse the compass logic; everywhere, the sunniest side is the equator-facing one.",
      },
      {
        kind: "para",
        text: "Soil is the medium and the pantry. Garden soil plus compost in roughly equal parts makes a raised-bed mix that drains yet holds moisture; straight garden soil in a container compacts into cement, so pots need a proper potting mix (light, with perlite or coco coir). The finger test beats every moisture meter: push a finger 3-4 cm in — if it comes out dry and dusty, water; if it shines wet, wait. Drainage is non-negotiable: every container needs holes, because roots drown in stagnant water faster than they die of thirst, and the classic houseplant funeral is kindness expressed as overwatering.",
      },
      {
        kind: "para",
        text: "Match the site to the format. Containers (20-30 cm deep for herbs and salad, 30-40 L for a tomato) suit renters and small spaces; raised beds warm earlier in spring, spare your back, and let you control the soil completely; in-ground beds are cheapest and hold water best once established. Start absurdly smaller than your ambition suggests — two beds or six pots well-kept teach more than a neglected quarter-acre, and the number one first-season failure is scale.",
      },
      {
        kind: "para",
        text: "Rank crops by forgiveness. Tier one: radishes (three weeks from seed), lettuce and salad greens (cut-and-come-again for months), herbs like basil, mint and chives, spring onions, bush beans. Tier two: zucchini (famously prolific), carrots, beets, kale, potatoes in a bucket. Tier three, the ambitious: tomatoes from seed (buy seedlings for year one), peppers, cucumbers, anything in the cabbage family that attracts caterpillars. Nothing in tier one can meaningfully fail, which is exactly what a first season should be made of.",
      },
      {
        kind: "para",
        text: "Timing is a local fact. Learn your area's average last spring frost and first autumn frost dates — sowing calendars are written between them. Warm-season crops (tomatoes, beans, zucchini, basil) go out after the last frost, when nights stay reliably above about 10 °C; cool-season crops (lettuce, peas, radishes, spinach) can go in weeks earlier and again in late summer for autumn. Harden off indoor-raised seedlings with a week of gradually longer outdoor visits — a seedling moved straight from windowsill to full sun sunburns like a beach tourist. Succession planting (a short row of lettuce every two weeks) converts one April harvest into a whole season of salads.",
      },
      {
        kind: "para",
        text: "Water like a professional: deeply and in the morning. A thorough soaking two to four times a week beats a daily sprinkle, because shallow watering grows shallow roots that then depend on you daily; a soak sends roots down after it. Morning watering lets leaves dry by afternoon, starving mildew and fungal spores, and water the soil, not the plant — wet leaves in evening sun-starved hours are how blight epidemics start. Vegetables want roughly 2.5 to 4 cm of water a week, more in pots, which can need daily watering by midsummer. Mulch (straw, shredded leaves, 5 cm deep) cuts evaporation dramatically and suppresses the weeds that would otherwise win July.",
      },
      {
        kind: "para",
        text: "Harvest with greed, because most crops read picking as a signal to produce more. Cut-and-come-again lettuce, beans, zucchini at 15-20 cm (baseball-bat zucchini are starchy testimony to a missed week), and herbs pinched above a leaf pair all respond to harvest by regrowing harder. Let plants bolt (flower and go to seed) and lettuce turns bitter, basil turns tough — frequent picking is literally the pruning strategy. The daily five-minute walk with coffee is where gardening actually happens: spotting the first aphid colony, the first hornworm, the cucumber that appeared overnight, is the entire pest-management program at home scale — pick, squish, and re-check tomorrow.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Plant count from spacing",
        latex: "N = \\frac{A}{s^2}",
        meaning: "Plants N equal bed area A divided by spacing s squared — a 1.2 × 2.4 m bed at 25 cm lettuce spacing holds about 45 heads.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: plan a first salad garden on a 1.2 × 2.4 m balcony bed with full sun — what to plant, how many, and on what schedule.",
          "Recall the governing idea: tier-one crops only for season one, spacing math for quantities, and succession sowing for a continuous harvest rather than one glut.",
          "Apply: the 2.88 m² bed at 20 cm spacing holds about 70 salad plants — too many at once. Split it: half in cut-and-come-again lettuce and arugula sown now, a quarter in radishes (ready in 25 days), a quarter in herbs and spring onions. Resow the salad third every two weeks; when radishes come out, beans go in after the last frost date.",
          "State the result: first radishes in under four weeks, first salad cut in five to six, and a rolling harvest that never leaves the bed empty — with every crop chosen so that failure anywhere still leaves a working garden.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Audit sun for one full day before choosing a spot; six hours is the working minimum for fruiting crops.",
          "Fill beds with a soil-compost blend and pots with real potting mix; check every container drains.",
          "Plan tier one for the first season: salad, radishes, herbs, beans — resist tomatoes-from-seed until year two.",
          "Sow by frost dates: cool crops early, warm crops after nights hold above 10 °C; harden off seedlings over a week.",
          "Water deeply two to four times a week in the morning, mulch 5 cm deep, and water soil rather than leaves.",
          "Walk the garden daily with coffee: harvest hard, squish aphids and caterpillars by hand, and pull weeds while they are thread-sized.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The rookie scale-up — planting the whole seed catalogue — produces a July of guilt and wasted crops; start small and expand what actually works. Overwatering kills more containers than drought (no drainage holes, saucers left full). Planting warm-season crops too early wastes weeks of stunted growth, because soil temperature, not the calendar, is what a tomato seedling feels. Planting the same crop family in the same spot year after year builds its pests — rotate families if you can. And buying seedlings that are already flowering or rootbound trades a head start for a stunted season.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Cut-and-come-again", def: "Harvesting outer leaves so the plant regrows for months of repeat cuts." },
          { term: "Last frost date", def: "The local average end of spring frost; the calendar line warm-season crops wait behind." },
          { term: "Hardening off", def: "Gradually exposing indoor seedlings to sun and wind over about a week before planting out." },
          { term: "Succession planting", def: "Sowing small batches every week or two for a continuous harvest instead of one glut." },
          { term: "Bolting", def: "A crop prematurely flowering and turning bitter, usually from heat or stress." },
          { term: "Mulch", def: "A 5 cm blanket of straw or leaves that holds moisture and suppresses weeds." },
          { term: "Finger test", def: "Checking moisture 3-4 cm under the surface with a finger — the honest moisture meter." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Fruiting vegetables like tomatoes and peppers need at least about:",
            options: ["Two hours of sun", "Four hours of sun", "Six hours of direct sun", "Constant shade with bright ambient light"],
            answer: 2,
            explain: "Six to eight hours of direct sun is the working requirement for fruiting crops; leafy greens can compromise at four to five.",
          },
          {
            q: "Why water deeply twice a week rather than a little every day?",
            options: ["It saves exactly the same water", "Deep soakings drive roots downward; daily sprinkles keep roots shallow and dependent", "Water meters require it", "Daily water washes out color"],
            answer: 1,
            explain: "Roots grow toward moisture; a deep soak builds a resilient, self-supporting root system instead of a shallow dependent one.",
          },
          {
            q: "A 1.2 × 2.4 m bed sown at 30 cm spacing holds about:",
            options: ["About 10 plants", "About 32 plants", "About 96 plants", "About 300 plants"],
            answer: 1,
            explain: "2.88 m² ÷ (0.3 m)² = 2.88 ÷ 0.09 ≈ 32 plants — the spacing-squared arithmetic that sizes every bed.",
          },
          {
            q: "Your lettuce has suddenly shot up a flower stalk and turned bitter. This is:",
            options: ["Nitrogen deficiency", "Bolting from heat or stress", "Overwatering", "Normal and desirable"],
            answer: 1,
            explain: "Bolting ends the harvest for that plant — sowing in succession and providing some afternoon heat shade delays it.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Pair with the composting lesson in this branch to close the loop from kitchen to soil. For the underlying science, the Botany subject covers photosynthesis and the Agriculture & Food Systems subject covers soil health and crop breeding at farm scale; the Environment domain explains why local food miles matter.",
        tone: "path",
      },
    ],
  },
  {
    id: "every-composting",
    title: "Composting: Turning Kitchen Scraps into Soil",
    domain: "Everyday Knowledge",
    field: "Garden & Growing",
    branch: "Growing Things",
    tier: "core",
    concepts: [
      "Compost is controlled rot",
      "Greens supply nitrogen, browns supply carbon",
      "The roughly 30:1 carbon-to-nitrogen target",
      "Air and moisture: turn it, wring-sponge damp",
      "Size: a bin at least one cubic metre cooks",
      "Troubleshooting by smell and temperature",
      "What never goes in the pile",
    ],
    words: 1100,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Every autumn, forests bury a season of leaves and every spring the soil is richer for it — composting is that process with a steering wheel. Composting, the branch of Garden & Growing behind this Everyday Knowledge topic, is controlled decomposition: feeding a population of microbes the right mix of materials, air and moisture so they convert a year's kitchen scraps and garden waste into dark, crumbly humus that gardeners call black gold. Done right it is odorless, fast and quietly addictive; done wrong it is a slimy smelling liability two habits away from working.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Food and garden waste can be a third of what households throw away — material that rots in landfill without oxygen, releasing methane, while the same material in a backyard bin becomes free fertilizer. A household of scraps plus autumn leaves becomes a wheelbarrow of soil life each year. It is the rare habit that cuts waste, saves money and improves a garden simultaneously.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Everything you add is either a green or a brown. Greens are moist, nitrogen-rich materials: fruit and vegetable scraps, coffee grounds, fresh grass clippings, tea leaves. Browns are dry, carbon-rich ones: autumn leaves, cardboard, shredded paper, straw, wood chips. Microbes building their bodies want roughly 25 to 30 parts carbon for every part nitrogen, and the practical rule of volume is about three parts browns to one part greens — because greens are denser in nitrogen than they look. A pile of pure greens goes anaerobic and sour; a pile of pure browns just sits there for a year, hungry.",
      },
      {
        kind: "para",
        text: "The workers are bacteria and fungi, and they have two non-negotiables: air and water, in balance. Oxygen enters by diffusion and turning; without it, the aerobic workforce suffocates and anaerobic bacteria take over, producing the sour, rotten smell that gives composting a bad name. Moisture should be like a wrung-out sponge: squeeze a handful and a few drops should come, not a stream. Too dry and nothing happens (the classic 'nothing is happening' pile is almost always thirsty); too wet and air pockets flood shut. Layer browns and greens as you add, and the balance mostly maintains itself.",
      },
      {
        kind: "para",
        text: "Size is temperature. A pile needs to be roughly one cubic metre (a meter each way) before its center holds the heat that bacteria generate — a small heap cannot insulate its own metabolism. Hot composting, 55 to 70 °C in the core, is fast (finished in two to three months with turning), kills most weed seeds and plant pathogens, and requires the volume, the balance and the turning. Cold composting — anything smaller, cooler and lazier — still works, in six to twelve months, quietly, with weed seeds surviving. Both end in the same place; one is a slow cooker and the other a pressure cooker.",
      },
      {
        kind: "para",
        text: "Chop everything small. Surface area is where microbes eat, and a whole cabbage core can outlast a season while cabbage-core confetti vanishes in weeks. The other accelerators are free: a shovelful of finished compost or garden soil inoculates a new pile with the workforce; urine is a legitimate nitrogen activator for a stalled heap; and turning with a pitchfork — lifting and dropping so the outside becomes the inside — resets both air and evenness. A compost thermometer is the gadget that turns composting from faith into feedback: hot core, sweet earthy smell, and visible shrinkage within weeks mean the machine is running.",
      },
      {
        kind: "para",
        text: "Troubleshooting is a two-question diagnostic, smell and activity. Sour or rotten smell means anaerobic: add browns, turn, and check drainage under the bin. Ammonia smell means too many greens: bury the next scraps under a thick brown layer. Nothing is happening means too dry, too cold, or too much carbon: water it, wait for a bigger mass, or mix in fresh greens. Attracting flies or rodents means exposed food: always bury greens under a brown blanket and never add the attractants below. A healthy pile smells like a forest floor after rain — that smell is the goal state.",
      },
      {
        kind: "para",
        text: "Keep the exclusion list firm. Never add meat, fish, dairy, oils or cooked food to a home bin — they rot slowly, smell, and recruit every rat in the district. Avoid pet waste (parasite risk), glossy card stock, treated wood ash in quantity, and diseased plants in a cold pile. Bindweed and other perennial weeds that resprout from fragments go in the municipal green waste (their hot industrial piles kill what yours cannot) or the general waste. Everything else vegetable — including eggshells (mineral, not protein), coffee filters, plain cardboard, hair, wool — is fair game.",
      },
      {
        kind: "para",
        text: "Harvest when the bottom of the pile is dark, crumbly, unrecognizable and earthy-smelling. The simplest method is to lift or open the bin, take finished material from the base, and return the still-woody top third to the new pile as an inoculant. Sift through a coarse screen if you want potting-grade fineness. Use it as a 5 cm mulch on beds, stirred into potting mix at roughly one part in four, or as a handful per planting hole — it is soil structure, microbes and slow-release nutrients in one material, and it is the single best thing you can do for a garden short of the sun.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Carbon-to-nitrogen mix",
        latex: "R_{mix} = \\frac{w_c C_c + w_b C_b}{w_c N_c + w_b N_b} \\approx 30",
        meaning: "The blended carbon-to-nitrogen ratio of greens and browns, weighted by mass, targets roughly 30 — in practice, three parts browns to one part greens by volume.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a three-week-old pile smells sour and is crawling with fungus gnats — what went wrong and what is the rescue?",
          "Recall the governing idea: a sour smell means the aerobic microbes have lost to anaerobic ones — usually too much green, too much moisture, too little air — and exposed greens recruit flies.",
          "Apply: turn the pile fully with a pitchfork, fluffing in shredded cardboard and dry leaves until the mix reads wrung-sponge damp and reads roughly three browns to one green by the eye. Bury any visible food under a 10 cm brown blanket. Check the bin base drains.",
          "State the result: within days the smell shifts to earthy, the pile begins shrinking, and a week later the core is warm to the hand — the same pile, converted from liability to composter by browns and air.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Site the bin on bare soil (drainage and worm access), in half-sun, one cubic metre or larger if you want it hot.",
          "Keep a browns stash — shredded cardboard and dry leaves — next to the bin all year; every bucket of scraps gets a brown blanket.",
          "Chop additions small, layer greens and browns, and moisten dry layers as you build.",
          "Turn every one to two weeks for hot composting, moving outside material into the center.",
          "Diagnose by nose: sour — turn and add browns; ammonia — more browns next time; nothing — water it and add greens.",
          "Harvest the dark, crumbly base; return coarse unfinished material to the next pile as starter culture.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The single most common failure is the all-greens bin — kitchen scraps added for months with nothing dry — which ends as smelly soup. The second is neglecting the exclusion list: one week of meat scraps can recruit a rat dynasty that no amount of turning evicts. Watering is forgotten in summer heat (a dry pile simply pauses) and drainage ignored in winter (a flooded one goes anaerobic). And expecting finished compost in weeks from a cold, small, unturned pile sets everyone up for disappointment: volume and turning are what make it fast.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Greens", def: "Nitrogen-rich moist materials: scraps, coffee grounds, fresh grass." },
          { term: "Browns", def: "Carbon-rich dry materials: leaves, cardboard, straw, shredded paper." },
          { term: "C:N ratio", def: "Carbon to nitrogen by mass; microbes want roughly 30:1, delivered as 3:1 browns-to-greens by volume." },
          { term: "Hot composting", def: "A large, balanced, turned pile reaching 55-70 °C, finishing in months and killing weed seeds." },
          { term: "Wring-sponge moisture", def: "The target dampness: a squeezed handful yields a few drops, not a stream." },
          { term: "Anaerobic", def: "Oxygen-starved decomposition that sours; the smell that means turn it and add browns." },
          { term: "Humus", def: "The stable, dark end-product of decomposition — finished compost itself." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Coffee grounds and fresh grass clippings are:",
            options: ["Browns", "Greens", "Neutral", "Excluded materials"],
            answer: 1,
            explain: "Both are moist and nitrogen-rich — greens — despite coffee grounds being brown in color; the category is chemistry, not color.",
          },
          {
            q: "A compost pile smells sour and rotten. The standard fix is:",
            options: ["Add water", "Add more greens", "Turn it and mix in browns", "Cover it and wait a month"],
            answer: 2,
            explain: "Sour means anaerobic: air from turning plus absorbent carbon from browns restores the aerobic workforce.",
          },
          {
            q: "Why does a compost pile need to be about one cubic metre to get hot?",
            options: ["To fit the thermometer", "Only that volume insulates the heat its own microbes generate", "Because worms need the space", "To discourage dogs"],
            answer: 1,
            explain: "Heat is a by-product of microbial metabolism; below roughly a cubic metre, too much surface area leaks it away and the core never warms.",
          },
          {
            q: "Which of these should never go in a home compost bin?",
            options: ["Eggshells", "Coffee filters", "Meat and fish scraps", "Autumn leaves"],
            answer: 2,
            explain: "Meat, fish, dairy and cooked food rot slowly, stink, and attract rodents — the exclusion list exists for them.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "This closes the loop with the growing-food lesson — kitchen to compost to bed. Next steps in Garden & Growing: worm composting (vermicomposting) for apartments, and soil testing. For the planetary version of the same chemistry, see the Environment domain's carbon-cycle and landfill-methane lessons.",
        tone: "path",
      },
    ],
  },
]
