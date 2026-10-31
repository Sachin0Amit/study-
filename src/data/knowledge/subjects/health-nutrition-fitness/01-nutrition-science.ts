/**
 * Knowledge Universe — Health, Nutrition & Fitness — Chapter 01: Nutrition Science
 * 2 lessons · ~2,784 words
 * field: Nutrition
 * legacy sources: health-wellness.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Nutrition]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 health-nutrition-macros — Nutrition Science: Protein, Carbs and Fat Actually Explained
 *   01.2 health-nutrition-micronutrients — Micronutrients: Vitamins, Minerals and Hidden Hunger
 */
import type { KnowledgeTopic } from '../../types'

export const healthNutritionFitnessCh01: KnowledgeTopic[] = [
  {
    id: 'health-nutrition-macros',
    title: 'Nutrition Science: Protein, Carbs and Fat Actually Explained',
    domain: 'Health & Wellness',
    field: 'Nutrition',
    branch: 'Dietary Science',
    tier: 'core',
    concepts: [
      'Macronutrients: the only sources of food energy',
      'Protein as building material with a fuel role',
      'Carbohydrates: fast fuel, stored as glycogen',
      'Fat: dense fuel, membranes, and essential fatty acids',
      'Fiber: the carbohydrate you do not digest',
      'Nutrient density versus energy density',
      'Energy balance: why calories still count',
    ],
    words: 1176,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Protein, carbohydrate, and fat are the three macronutrients — the only food components that supply energy, and each arrives with a second job beyond fuel. Dietary science, the branch of nutrition behind this Health & Wellness topic, assigns them clean numbers: protein and carbohydrate pack four calories per gram, fat nine. Yet labels, diets, and gym arguments constantly scramble what those numbers mean. This topic explains what each macro actually does in the body, why energy balance still governs weight, and how to read a food label without mythology.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Three-quarters of dietary guidance — from blood-sugar control to heart health — reduces to which macronutrients dominate the plate and how much energy they carry. Understanding the three macros turns diet noise into an engineering problem: measurable inputs, predictable outputs, and no mythology required.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Macronutrients are defined by one hard property: they supply energy the body can burn. Wilbur Atwater measured it in the 1890s, burning foods in a calorimeter and tracking what humans excrete, and his factors — four calories per gram of protein or carbohydrate, nine for fat — still populate every nutrition label. Water, vitamins, and minerals matter desperately but yield nothing, which is why a label\'s calorie count comes entirely from three lines.',
      },
      {
        kind: 'para',
        text: 'Protein is the only macro that arrives pre-shaped as machinery: enzymes, antibodies, muscle filaments, hormones. Digestion breaks it into about twenty amino acids that the body reassembles into whatever it is building, and nine of the twenty are essential — impossible to synthesize, mandatory to eat. Burned for fuel only in a pinch, protein also triggers the strongest satiety signals of the three, which is why higher-protein diets control hunger almost effortlessly.',
      },
      {
        kind: 'para',
        text: 'Carbohydrate is the preferred fuel for high-intensity work and the exclusive fuel of red blood cells. Starches are long glucose chains that digest steadily; sugars are short ones that arrive fast. Whatever is not burned is packed into glycogen — roughly 400 grams in muscle and 100 in the liver — a tank that carries about a day and a half of ordinary living, or ninety minutes of hard exercise.',
      },
      {
        kind: 'para',
        text: 'Dietary fat carries more than twice the energy per gram, and the body treats it as the long-range reserve: a lean adult stores tens of thousands of calories as adipose tissue. Fat is also structural — every cell membrane is built from lipids — and two fatty acids, linoleic and alpha-linolenic, are essential. It ferries the fat-soluble vitamins A, D, E, and K across the gut, which is why zero-fat meals shortchange them.',
      },
      {
        kind: 'para',
        text: 'Fiber is carbohydrate that human enzymes cannot break down — a genuine label technicality. Soluble fiber gels and slows glucose absorption; insoluble fiber adds bulk and speeds transit. The gut microbiome ferments part of it into short-chain fatty acids that feed the colon\'s lining, which is why fiber behaves like food even when it never enters the bloodstream. Most adults eat barely half the recommended amount.',
      },
      {
        kind: 'para',
        text: 'Energy density is calories per gram — oil near nine, lettuce near zero. Nutrient density flips the denominator: vitamins and minerals per calorie. Broccoli and soda are both mostly carbohydrate by calorie share, but one delivers folate, vitamin C, and fiber while the other delivers nothing but energy. Building meals with high nutrient density at moderate energy density is the quiet backbone of every evidence-based guideline.',
      },
      {
        kind: 'para',
        text: 'Body weight follows the ledger: energy in against energy out, with expenditure split among resting metabolism, digestion, and movement. Macro composition shifts what is lost first — cutting carbohydrate drains glycogen and its stored water fastest — but the ledger itself is inescapable. Roughly 7,700 surplus calories equate to a kilogram of body fat, the number behind every honest weight-change estimate.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Metabolizable energy (Atwater factors)',
        latex: 'E = 4C + 4P + 9F',
        meaning: 'Calories E from grams of carbohydrate C, protein P, and fat F — the arithmetic printed on every nutrition label.',
      },
      {
        kind: 'formula',
        name: 'Energy balance',
        latex: '\\Delta m = \\frac{E_{in} - E_{out}}{7700}',
        meaning: 'A sustained gap between intake and expenditure converts to kilograms of body mass at roughly 7,700 calories per kilogram of fat.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a meal label lists 22 g protein, 68 g carbohydrate, and 16 g fat — how many calories does it carry, and what share of a 2,400-calorie day is that?',
          'Recall the governing idea: metabolizable energy multiplies each macro by its Atwater factor and sums the results.',
          'Apply: 22 × 4 = 88 from protein, 68 × 4 = 272 from carbohydrate, and 16 × 9 = 144 from fat, totaling 504 calories; 504 ÷ 2,400 is about 21 percent of the day.',
          'State the result: the meal supplies roughly 500 calories, a fifth of a 2,400-calorie budget — with fat contributing 29 percent of the calories from only 16 of the 106 grams.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Sports dietitians periodize carbohydrate against training load and refill glycogen for competition.',
          'Clinical dietetics rebuilds malnourished patients with protein targets tied to body weight.',
          'Label and menu laws standardize Atwater arithmetic so products can be compared honestly.',
          'Weight-management programs translate the 7,700-calorie ledger into weekly targets.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The classic error is moralizing the macros — treating fat as sin and sugar as vice when dose and context decide outcomes. "Net carb" arithmetic quietly deducts fiber that still ferments, and "low fat" labels steer people away from nuts and olive oil toward refined starch. The label math is honest; the folklore surrounding it usually is not.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Macronutrient', def: 'A nutrient supplying energy: protein, carbohydrate, or fat (plus alcohol).' },
          { term: 'Atwater factors', def: 'Energy coefficients — 4, 4, and 9 calories per gram — used to compute label calories.' },
          { term: 'Essential amino acid', def: 'One of nine amino acids the body cannot synthesize and must obtain from food.' },
          { term: 'Glycogen', def: 'The body\'s branched glucose store in muscle and liver, roughly 500 grams in total.' },
          { term: 'Essential fatty acids', def: 'Linoleic and alpha-linolenic acid, required from the diet for membranes and signaling.' },
          { term: 'Fiber', def: 'Carbohydrate resistant to human digestion, partly fermented by the gut microbiome.' },
          { term: 'Energy balance', def: 'The gap between calories consumed and expended, which drives weight change.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'How many calories does one gram of fat supply?',
            options: ['About 4', 'About 7', 'About 9', 'It depends on the type of fat'],
            answer: 2,
            explain: 'Atwater assigned fat nine calories per gram — more than double protein or carbohydrate.',
          },
          {
            q: 'Which macronutrient is stored as glycogen?',
            options: ['Fat', 'Protein', 'Carbohydrate', 'Fiber'],
            answer: 2,
            explain: 'Surplus carbohydrate fills limited glycogen depots in muscle and liver before anything else.',
          },
          {
            q: 'A food lists 10 g protein, 20 g carbohydrate, and 10 g fat. Total calories:',
            options: ['160', '170', '200', '240'],
            answer: 1,
            explain: '40 from protein + 80 from carbohydrate + 90 from fat = 170 calories.',
          },
          {
            q: 'Why does fiber complicate calorie math?',
            options: ['It is fully absorbed like sugar', 'Human enzymes cannot digest it, though gut microbes ferment some', 'It converts directly to body fat', 'It contains alcohol'],
            answer: 1,
            explain: 'Fiber resists human digestion; fermentation recovers a few calories, never the full four per gram.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'No prerequisites — this is the front door to nutrition. Natural next steps: energy balance and weight change in depth, micronutrients and nutrient density, then sport-specific fueling and meal planning.',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  // Source-grounded 2026-10-20: "An Introduction to Nutrition"
  // (Zimmerman/Kelly, open textbook; TOC and micronutrient chapters read
  // via Open Textbook Library / 2012books.lardbucket.org) — Ch 7
  // "Nutrients Important to Fluid and Electrolyte Balance", Ch 8
  // "Nutrients Important As Antioxidants", Ch 9 "Nutrients Important for
  // Bone Health", Ch 10 "Nutrients Important for Metabolism and Blood
  // Function".
  {
    id: 'health-nutrition-micronutrients',
    title: 'Micronutrients: Vitamins, Minerals and Hidden Hunger',
    domain: 'Health & Wellness',
    field: 'Nutrition',
    branch: 'Micronutrition',
    tier: 'core',
    concepts: [
      'Tiny doses, absolute requirements',
      'Fat-soluble vitamins: A, D, E, K',
      'Water-soluble vitamins: the B family and C',
      'Electrolytes and the major minerals',
      'Trace minerals: iron, iodine, zinc, selenium',
      'Bioavailability: eaten is not absorbed',
      'Hidden hunger and fortification',
    ],
    words: 1608,
    readMins: 8,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'The macronutrient lesson ended with a sharp line: water, vitamins, and minerals supply zero calories and matter desperately anyway. This topic takes those zero-calorie essentials seriously. Micronutrients are needed in milligram and microgram amounts, the body cannot make most of them, and each one sits somewhere specific in the machinery — as coenzymes, structural minerals, electrolytes, or antioxidants. Deficiency does not produce vague tiredness first; it produces named diseases with signatures a physician can recognize: scurvy, rickets, goiter, anemia.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'A person can eat plenty and still be malnourished: hidden hunger — micronutrient deficiency with adequate calories — affects billions. Iodized salt, folic-acid-fortified flour, and vitamin A capsules are among the cheapest public-health interventions ever measured, precisely because these doses are tiny but the machinery they feed is everything.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The single most useful split is fat-soluble versus water-soluble. The fat-soluble vitamins — A, D, E, and K — dissolve in lipid, are absorbed with dietary fat, and can be stored in the liver and adipose tissue for months. Storage is insurance, but it is also the reason these four are the ones that can build up to toxic levels: polar explorers poisoned by eating polar-bear liver were victims of vitamin A storage biology, and chronic megadosing of vitamin A in pregnancy is a known teratogen. Vitamin D is the exception in one respect — the skin makes it from sunlight — but it behaves like the others once made: it regulates calcium absorption and bone mineralization, which is why deficiency bends growing bones into rickets.',
      },
      {
        kind: 'para',
        text: 'The water-soluble vitamins — vitamin C and the B-complex — dissolve in blood, are not stored to any degree, and exit in urine within days to weeks. The daily-need design means deficiency shows up in weeks, not months: sailors on months of salted meat and hardtack lost collagen strength and bled at the gums — scurvy — until the British navy adopted citrus. The B vitamins are coenzyme workhorses: thiamine, riboflavin, niacin, B6, folate, and B12 hand chemical groups to the enzymes of energy metabolism. Folate is the neural-tube vitamin — its deficiency in early pregnancy causes spina bifida, which is why flour is fortified and supplements must start before conception. B12\u2019s absorption requires intrinsic factor from the stomach, so deficiency shows up not just in strict vegans but in older adults with atrophic stomachs, producing the megaloblastic anemia and nerve damage of pernicious anemia.',
      },
      {
        kind: 'para',
        text: 'Minerals split by how much the body needs. The major minerals — sodium, potassium, chloride, calcium, phosphorus, magnesium, sulfur — are needed in gram amounts. Sodium, potassium, and chloride are the electrolytes of the fluid-balance chapter: they set where water goes, carry nerve impulses, and their balance is so tightly defended that the kidneys and hormones manage millimolar swings. Chronic high sodium intake raises blood pressure in salt-sensitive people; potassium-rich diets push the other way. Calcium, phosphorus, and magnesium are the bone bank — roughly ninety-nine percent of body calcium sits in the skeleton, with the remaining one percent running muscle contraction and clotting, drawn from bone when diet runs short.',
      },
      {
        kind: 'para',
        text: 'Trace minerals are needed in tiny amounts but anchor enormous machinery. Iron sits at the center of hemoglobin; its deficiency is the most common nutritional deficiency on earth, draining oxygen delivery as anemia. Iodine is a component of the thyroid hormones that set metabolic rate and fetal brain development — deficiency swells the thyroid into a goiter and, in pregnancy, causes the most preventable form of intellectual disability. Zinc supports immunity, wound healing, and growth; selenium is built into the antioxidant enzymes of the glutathione family. The trace-mineral lesson of toxicology is that the window between too little and too much is narrow — selenium\u2019s requirement and its toxic dose are surprisingly close.',
      },
      {
        kind: 'para',
        text: 'Bioavailability is where nutrition science embarrasses label arithmetic. Eaten is not absorbed: heme iron from meat is absorbed several times more efficiently than the nonheme iron of plants, and vitamin C taken with a plant meal converts ferric iron to its better-absorbed ferrous form — a squeeze of lemon on lentils is pharmacology. Conversely, phytates in whole grains and tannins in tea bind minerals and block absorption; calcium and iron compete for the same transport. Nutrient–nutrient teamwork is the rule, not the exception: vitamin D raises calcium absorption, vitamin C regenerates vitamin E, and the B vitamins work as a relay team on the same metabolic path.',
      },
      {
        kind: 'para',
        text: 'Zoom out and hidden hunger becomes a systems problem. Populations can be calorie-sufficient on polished rice, maize, or cassava and still be deficient in iron, iodine, vitamin A, and zinc. The interventions that work are industrial and boring: iodized salt (one of the great public-health wins of the twentieth century), fortified flour with folic acid and iron, sugar fortified with vitamin A, and periodic high-dose vitamin A capsules for children in deficiency regions. The modern twist is the double burden — obesity and micronutrient deficiency coexisting in the same household, cheap calories displacing nutrient-dense ones.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Percent Daily Value on a label',
        latex: '\\%DV = \\frac{\\text{amount per serving}}{\\text{Daily Value}} \\times 100',
        meaning: 'A cereal listing iron 4.5 mg against an 18 mg Daily Value is declaring 25% DV per serving — the label\u2019s one honest sentence about micronutrition.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Read the claim: one serving of breakfast cereal provides 4.5 mg of iron; the Daily Value for iron is 18 mg.',
          'Apply the arithmetic: 4.5 ÷ 18 × 100 = 25% DV per serving — the label\u2019s claim checks out.',
          'Add the absorption layer: the cereal\u2019s iron is nonheme; phytates will block a fraction, but a glass of orange juice alongside provides vitamin C that converts ferric to ferrous iron and meaningfully raises uptake.',
          'State the honest conclusion: label percentages measure what is in the bowl, not what reaches the blood — bioavailability, not the label, decides the deficiency question. Four servings of this cereal is not "100% of your iron" in any physiological sense.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Salt iodization programs, rolled out nationally from the 1920s onward, made goiter and cretinism rare in fortified countries at a cost of pennies per person per year.',
          'Periodic vitamin A supplementation in deficiency regions reduces child mortality — the WHO\u2019s dose-and-deliver program reaches hundreds of millions of children.',
          'Folic acid fortification of flour, adopted in the US in 1998, cut neural-tube-defect births measurably within a few years.',
          'Scurvy still appears — in elderly men living alone, psychiatric patients, and alcoholics — proving the sailor\u2019s disease is a dietary-access disease, not a historical curiosity.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Two myths do most of the damage. "More is better" is false for micronutrients: fat-soluble vitamins accumulate, vitamin A megadoses in pregnancy are teratogenic, and selenium\u2019s safe window is narrow. "Vitamin C cures colds" survives on a kernel of thin evidence for shortened duration in some populations, but regular megadoses neither prevent colds in ordinary people nor replace any other nutrient — and absorbed-beyond-need water-soluble vitamins are simply expensive urine. Finally, supplements do not reproduce the food matrix: fiber, phytochemicals, and nutrient teamwork do not come in a pill.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Micronutrient', def: 'A vitamin or mineral required in small amounts, supplying no energy but essential to metabolism and structure.' },
          { term: 'Fat-soluble vitamin', def: 'Vitamins A, D, E and K — absorbed with fat, stored in liver and adipose tissue, capable of accumulating to toxic levels.' },
          { term: 'Water-soluble vitamin', def: 'Vitamin C and the B-complex — not stored to a meaningful degree, so needed regularly and excreted in excess.' },
          { term: 'Electrolyte', def: 'The charged major minerals — sodium, potassium, chloride — that set fluid distribution and carry nerve signals.' },
          { term: 'Bioavailability', def: 'The fraction of an ingested nutrient actually absorbed and usable; shaped by food source, competitors, and enhancers.' },
          { term: 'Hidden hunger', def: 'Micronutrient deficiency despite adequate calories — iron, iodine, vitamin A and zinc are the classic four.' },
          { term: 'Pernicious anemia', def: 'B12 deficiency caused by lack of intrinsic factor, producing megaloblastic anemia and nerve damage.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which group of vitamins can accumulate to toxic levels because the body stores them?',
            options: ['The B-complex vitamins', 'Vitamins A, D, E and K', 'Vitamin C and folate', 'The electrolytes'],
            answer: 1,
            explain: 'Fat-soluble vitamins are stored in liver and adipose tissue, so doses build up — hypervitaminosis is essentially their exclusive risk.',
          },
          {
            q: 'Scurvy is the deficiency disease of which nutrient, and what tissue process fails?',
            options: ['Iron — hemoglobin synthesis', 'Vitamin D — bone mineralization', 'Vitamin C — collagen synthesis', 'Iodine — thyroid hormone'],
            answer: 2,
            explain: 'Without vitamin C the collagen triple helix cannot cross-link properly; gums bleed, wounds reopen, old scars dissolve.',
          },
          {
            q: 'A student eats a lentil dish (plant iron) with orange juice. The vitamin C is:',
            options: ['Blocking the iron', 'Irrelevant to iron', 'Enhancing nonheme iron absorption', 'Replacing the iron'],
            answer: 2,
            explain: 'Vitamin C reduces ferric to ferrous iron and chelates it — the classic enhancer of plant-iron absorption.',
          },
          {
            q: '"Hidden hunger" means:',
            options: ['Eating secretly', 'Adequate calories but micronutrient deficiency', 'Fasting between meals', 'Unknown food allergies'],
            answer: 1,
            explain: 'Calorie-sufficient populations on starchy staples can still be iron-, iodine-, vitamin A- or zinc-deficient — hunger invisible to the scale.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisite: the macronutrient lesson — energy first, then the machinery that spends it. Continue with bone physiology for the calcium–vitamin D axis, the anatomy lessons on blood for iron and anemia, the pregnancy and life-cycle content for folate and fetal development, and the food-politics angle for how fortification policy actually gets made.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Micronutrients: milligram doses, zero calories, absolute requirements with named deficiency diseases.',
          'Fat-soluble (A, D, E, K) store and can toxify; water-soluble (C, B-complex) need regular intake.',
          'Electrolytes run fluid balance and nerves; calcium–phosphorus–magnesium are the bone bank.',
          'Iron, iodine, zinc, selenium: trace amounts, enormous machinery — narrow safe windows.',
          'Eaten ≠ absorbed: bioavailability decides; hidden hunger is the global-scale failure mode, fortification the fix.',
        ],
      },
    ],
  },
]
