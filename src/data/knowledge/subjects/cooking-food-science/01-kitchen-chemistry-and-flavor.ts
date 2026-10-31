/**
 * Knowledge Universe — Cooking & Food Science — Chapter 01: Kitchen Chemistry & Flavor
 * 3 lessons · ~3,804 words
 * field: Cooking & Food Science
 * legacy sources: everyday-practical.ts, x58-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Kitchen Chemistry, Flavor]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 cook-heat-transfer-methods — Heat at the Stove: Transfer, Doneness and the Craft of Control
 *   01.2 every-maillard-reaction-browning — The Maillard Reaction: Why Browned Food Tastes Better
 *   01.3 cook-flavor-science — The Science of Flavor: Salt, Fat, Acid and Heat
 */
import type { KnowledgeTopic } from '../../types'

export const cookingFoodScienceCh01: KnowledgeTopic[] = [
  {
    id: 'cook-heat-transfer-methods',
    title: 'Heat at the Stove: Transfer, Doneness and the Craft of Control',
    domain: 'Everyday Knowledge',
    field: 'Cooking & Food Science',
    branch: 'Kitchen Chemistry',
    tier: 'core' as const,
    concepts: [
      'Three transfer modes at the stove: conduction, convection, radiation',
      'Dry versus moist heat: what each does to food',
      'Boiling water is the ceiling: the 100°C wet limit',
      'The protein denaturation ladder: myosin, actin, collagen',
      'The searing myth: brown food, but it does not seal',
      'Carryover cooking and resting',
      'Doneness and safety: the USDA temperatures and the thermometer habit',
    ],
    words: 1534,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The flavor lesson of this book treated heat as one of four balancing levers; this lesson opens the lever up. Cooking is applied thermodynamics on a scale of minutes and millimetres, and every method — sear, steam, braise, roast — is a choice about how fast energy moves from source to interior. Control that flow and technique stops being superstition: you will know why a steak pulled early keeps rising, why a braise wants a barely-bubbling oven, and why the busiest kitchens trust a ten-dollar probe more than any chef’s intuition.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Almost every kitchen failure is a heat-transfer failure wearing a costume: dry chicken is actin squeezing moisture out at too high a temperature for too long; tough stew is collagen never given the hours it needs to become gelatin; burnt-outside, cold-inside rice is conduction outrunning convection. The USDA’s safe-temperature chart is the legal floor of the same physics, and the difference between a 63°C and a 74°C piece of meat is the difference between a tender chop and shoe leather — one degree of control at a time.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The three ways heat moves. Conduction is molecule-to-molecule contact: the pan’s flat face searing a fillet, which is why pan material and thickness matter (cast iron stores and evens heat; thin pans scorch where the flame licks). Convection moves heat by moving fluid — the rolling boil tumbling pasta, the oven fan pushing air, deep-fry oil circulating around a fry — and it is the fastest of the three at food surfaces, which is why oil at 180°C crisps in minutes. Radiation arrives as infrared without any medium: the broiler element above, the grill coals below. Most real cooking combines them — a roast in an oven is radiation from the walls plus convection in the air, finished in the pan by conduction, and the cook’s first skill is knowing which mode is doing the work at each stage.',
      },
      {
        kind: 'para',
        text: 'The wet ceiling and the oil window. Water boils at 100°C at sea level, and nothing wet can exceed that while liquid remains — which makes every moist method (poaching at roughly 71–82°C, simmering at 85–95°C, boiling at 100°C, steaming at 100°C) a low-temperature, gentle method no matter how violent the pot looks. A pressure cooker raises the ceiling to about 120°C and cuts braising times accordingly; at altitude the ceiling falls (Denver boils near 95°C) and pasta simply takes longer. Fats open the high window: cooking oils stay liquid to 160–270°C depending on refinement (butter’s milk solids burn near 150°C; refined neutral oils run past 200°C), which is why frying and searing can reach browning temperatures water never touches. Dry heat at oven temperatures (roughly 160–230°C) dries surfaces and drives the browning reactions; moist heat never dries and never browns.',
      },
      {
        kind: 'para',
        text: 'The denaturation ladder inside meat. Muscle proteins unfold on a schedule. Myosin begins denaturing around 50–60°C — the flesh turns opaque and releases its first juices. Actin follows near 66–73°C: fibers stiffen and squeeze, and above this range a fast-cooked muscle loses moisture rapidly. Collagen — the connective tissue that makes chuck, shank and brisket chewy — shrinks around 55–65°C, then over hours in the 70–90°C band hydrolyzes into gelatin, the silky substance that makes a braise unctuous. Hence the two great rules: tender cuts (loin, tenderloin) have little collagen, so cook them fast to just above doneness; tough cuts have plenty, so cook them low and slow until time converts the collagen — heat that is too high simply squeezes the muscle dry before the collagen finishes its work.',
      },
      {
        kind: 'para',
        text: 'The searing myth, retired. The old doctrine — "sear to seal in the juices" — fails on contact with a scale: seared roasts lose more weight than unseared ones in controlled tests, and the crust is porous, not waterproof. Searing earns its place by flavor: the Maillard reactions (this book’s browning lesson owns the chemistry) build hundreds of aroma compounds at surface temperatures water never reaches. So sear for taste, on a dry, preheated, hot surface, and manage moisture with temperature and time — a low oven roast resting at 60–65°C core loses far less juice than a blast-roasted one, crust or no crust.',
      },
      {
        kind: 'para',
        text: 'Carryover, resting and the thermometer habit. Food is a thermal gradient, not a block: pull a roast from the oven and the hotter exterior keeps conducting inward, lifting the core several degrees — carryover cooking, roughly 1–2°C on small cuts and 3–8°C on large roasts. Resting lets that finish and lets the squeezed muscle fibers relax and reabsorb juices, which is why the carving board weeps less after ten minutes. The USDA’s safe minimum internal temperatures set the floor: 63°C (145°F) for whole cuts of beef, pork, lamb and fish with a three-minute rest; 71°C (160°F) for ground meats; 74°C (165°F) for all poultry — and the instant-read probe, not the clock, is the instrument that knows. Sous-vide closes the loop: a precision bath holds the food exactly at, say, 56°C edge to edge, then a brief sear adds the crust — the same physics, with the gradient removed.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Task: braise a chuck roast so it shreds — without drying it.',
          'Diagnose the cut: chuck is loaded with collagen and moderate fat; the goal is time in the collagen-conversion band, not high heat.',
          'Set the physics: brown the surface for Maillard flavor (dry pan, 200°C+ contact), then hold the pot at a bare simmer — a 90–95°C oven — where liquid never boils hard and the meat’s core sits in the 70–90°C conversion band for 3–4 hours.',
          'Read the finish: collagen → gelatin lubricates the fibers as actin’s squeeze is offset by the gelatin’s moisture; probe-tender means the skewer slides with no resistance. Rest, skim the fat, reduce the liquid — the same ladder, finished on the plate.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Home line-cooking: preheat pans five minutes, dry proteins before they meet the pan, and pull at temperature — the three habits that separate consistent from lucky.',
        'Food service: HACCP and health-code temperature logs are this lesson’s chart on a clipboard — holding, reheating and cooking floors all run on the same USDA numbers.',
        'Product development: sous-vide and cook-chill manufacturing are industrial carryover management — pasteurization by time-at-temperature rather than blast heat.',
        'Recipe repair: when a recipe fails, ask which transfer mode dominated and which rung of the ladder was missed — the diagnosis usually names the fix.',
        'Altitude and equipment: pressure cookers, convection modes and induction all shift the transfer constants; the physics predicts how to re-time, not guess.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, the sealing myth: searing builds flavor, not waterproofing — moistness is temperature control, not crust. Second, boiling everything: a hard boil is 100°C with agitation; a braise wants 90°C and stillness, and the difference is tenderness. Third, trusting time over temperature: ovens lie, thickness varies, and only the probe reads the food you actually have. Fourth, skipping the rest: carving straight off the heat wastes the carryover equilibrium the juices need. Fifth, crowding the pan: cold, wet masses drop the surface temperature below browning range and the "sear" steams instead — physics, not luck.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'conduction / convection / radiation', def: 'Contact, moving-fluid and infrared heat transfer — the three modes every method combines.' },
        { term: 'wet ceiling', def: 'Water boils at 100°C (less at altitude, more under pressure) — the temperature cap of all moist cooking.' },
        { term: 'denaturation ladder', def: 'Myosin ~50–60°C, actin ~66–73°C, collagen → gelatin over hours at 70–90°C: the schedule inside meat.' },
        { term: 'carryover cooking', def: 'The post-heat rise as surface heat equalizes inward — 1–8°C depending on mass.' },
        { term: 'USDA safe minimums', def: '63°C whole cuts (with 3-min rest), 71°C ground, 74°C poultry — the legal doneness floor.' },
        { term: 'sous-vide', def: 'Precision-bath cooking at the exact target temperature, finished with a sear — the gradient, removed.' },
        { term: 'reverse sear', def: 'Low oven to temperature, then a hot pan crust — carryover and browning, sequenced deliberately.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A stew simmering furiously at 100°C versus a braise held at 90°C — the braise is more tender mainly because…',
          options: ['lower heat sterilizes better', 'collagen-to-gelatin conversion needs hours in the 70–90°C band, which a hard boil’s muscle-squeezing ruins', '90°C kills enzymes', 'the braise uses more liquid'],
          answer: 1,
          explain: 'Tenderness is time at collagen-conversion temperature; a rolling boil squeezes muscle dry before conversion finishes.',
        },
        {
          q: 'Searing a steak "seals in the juices" is…',
          options: ['true — the crust is waterproof', 'a myth: seared roasts lose comparable or more moisture; searing is for browning flavor', 'true only for pork', 'true below 200°C'],
          answer: 1,
          explain: 'Controlled tests show no moisture seal — the crust’s value is Maillard flavor, which is reason enough.',
        },
        {
          q: 'Pull a large roast at 55°C core and rest it; the core keeps rising because…',
          options: ['the oven stays warm', 'carryover: the hotter exterior conducts heat inward until the gradient equalizes', 'proteins generate heat as they denature', 'salt continues to penetrate'],
          answer: 1,
          explain: 'The roast is a thermal gradient; equalization lifts the core several degrees — plan the pull temperature around it.',
        },
        {
          q: 'The USDA safe minimum for whole cuts of beef, pork, lamb and fish is…',
          options: ['71°C with no rest', '63°C with a three-minute rest', '74°C for all meats', 'whatever the cook prefers'],
          answer: 1,
          explain: '63°C (145°F) plus a three-minute rest is the whole-cut floor; ground meats run 71°C and poultry 74°C.',
        },
      ] },
    ],
  },
  {
    id: 'every-maillard-reaction-browning',
    title: 'The Maillard Reaction: Why Browned Food Tastes Better',
    domain: 'Everyday Knowledge',
    field: 'Cooking & Food Science',
    branch: 'Kitchen Chemistry',
    tier: 'core',
    concepts: [
      'Amino acids meet reducing sugars',
      'The 140–165 °C browning window',
      'Maillard is not caramelization',
      'Wet surfaces stall at 100 °C',
      'Steering with time, temperature, and pH',
      'Color as the flavor readout — and the acrylamide caution',
    ],
    words: 1001,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'The difference between a pale boiled piece of meat and a crusted seared one is a single reaction: amino acids and sugars fusing under dry heat into hundreds of flavor compounds. Kitchen chemistry, the branch of Cooking & Food Science behind this Everyday Knowledge topic, names it the Maillard reaction, described by chemist Louis-Camille Maillard in 1912 — and it is why bread crusts, roasted coffee, seared steaks, and toasted nuts all smell irresistible. Master its two levers, temperature and surface moisture, and your cooking improves immediately.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Browning is applied organic chemistry you control with a pan and a paper towel: the same reaction builds bread crust, coffee roasts, beer malt, and steak crust. Knowing its levers — heat and dryness — solves most mystery-of-the-bland-dish cases.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The reaction pairs the amino groups of proteins with reducing sugars and then cascades through hundreds of intermediate and final molecules — pyrazines that smell roasted and nutty, furans, and Strecker aldehydes. Different foods carry different amino-acid profiles, which is why seared beef, baked bread, and roasted coffee are all Maillard yet smell nothing alike.',
      },
      {
        kind: 'para',
        text: 'Noticeable browning begins around 140 °C and accelerates through the 150s; push past roughly 180 °C and flavor gives way to smoke — pyrolysis, better known as burning. Below the window the reaction still creeps along: soy sauce and dried fruits darken over months at room temperature.',
      },
      {
        kind: 'para',
        text: 'Caramelization is sugar decomposing alone — no protein required — and it typically starts nearer 160 °C. The two often run together in a hot pan but are distinct chemistries: amino-acid-rich garlic powder scorches long before plain sugar even browns.',
      },
      {
        kind: 'para',
        text: 'Water cannot exceed its boiling point, so a damp surface parks at 100 °C — forty degrees short of browning — and steams grayly while you wait. This is why cooks pat food dry, why roasts brown only after the surface dehydrates, and why crowding a pan floods it into a braise.',
      },
      {
        kind: 'para',
        text: 'You can steer the reaction with time, temperature, and pH. Low, slow cooking develops deep browning over hours — braises and reduced stocks — while a screaming-hot pan delivers crust in minutes; alkaline dips are why pretzels and ramen noodles wear their signature brown skins.',
      },
      {
        kind: 'para',
        text: 'Color is the readout: pale means underdeveloped flavor, deep golden-brown means peak, black means burned. One caution lives here too — high-heat browning of starch-rich foods creates acrylamide, so toast and fries are best kept golden rather than dark.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: sear a steak to a deep brown crust while the interior stays medium-rare — what must be true at the surface?',
          'Recall the governing ideas: browning needs a dry surface and roughly 140 °C or more; water clamps the surface at 100 °C until it evaporates.',
          'Apply: pat the steak dry and salt it uncovered in the refrigerator for an hour (a dry brine), fully preheat a heavy pan, and sear about two minutes per side in a thin film of high-smoke-point oil.',
          'State the result: the dry, hot surface browns before heat over-penetrates; a grey band under the crust means the pan was too cool or the meat too wet — not that you seared too long.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Bakers read crust color as a doneness and flavor gauge.',
          'Coffee roasting is staged Maillard — roast level is literally how far you push it.',
          'Brewing owes its malt palette to kilned barley, from pale pilsner to black stout.',
          'Weeknight cooking: patting food dry and preheating the pan fixes most bland-sear complaints.',
          'Barbecue and braises build slow Maillard layers through hours of low heat.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Believing searing seals in juices is the granddaddy of kitchen myths — crust is flavor, not a container, and seared meat still loses moisture. Crowding the pan drops the temperature and floods the surface with steam, undoing everything. And color is not safety: a browned exterior can still be undercooked inside, which is why thermometers, not eyes, judge doneness in poultry and pork.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Maillard reaction', def: 'Browning between amino acids and reducing sugars at high heat, producing flavor compounds.' },
          { term: 'Reducing sugar', def: 'A sugar chemically able to react with amino groups — glucose, fructose, lactose.' },
          { term: 'Caramelization', def: 'Thermal decomposition of sugar alone, without protein, at somewhat higher temperatures.' },
          { term: 'Pyrolysis', def: 'Burning — thermal breakdown past browning, producing char and bitterness.' },
          { term: 'Fond', def: 'The browned pan deposits of Maillard products, dissolved into sauces.' },
          { term: 'Dry brine', def: 'Salting food uncovered, often in the fridge, to season and dehydrate the surface.' },
          { term: 'Acrylamide', def: 'A compound formed in high-heat browning of starches; keep toast and fries golden, not dark.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The two chemical ingredients of the Maillard reaction are:',
            options: ['Fat and water', 'Reducing sugar and amino acids', 'Starch and acid', 'Sugar and salt'],
            answer: 1,
            explain: 'Amino groups from proteins react with reducing sugars; everything else is heat management.',
          },
          {
            q: 'A wet steak surface steams instead of browning because:',
            options: ['Water raises the ignition point of sugar', 'Water clamps the surface at 100 °C, below the browning window', 'Moisture destroys amino acids', 'Wet surfaces reflect heat'],
            answer: 1,
            explain: 'Until surface water evaporates, the surface cannot exceed water\'s boiling point — about 40 °C short of browning.',
          },
          {
            q: 'Caramelization differs from Maillard because it:',
            options: ['Requires protein', 'Is sugar decomposing alone at somewhat higher temperatures', 'Happens only in meats', 'Occurs below 100 °C'],
            answer: 1,
            explain: 'Caramelization involves sugars only — no amino chemistry — and typically starts nearer 160 °C.',
          },
          {
            q: 'Pretzels get their brown skin from:',
            options: ['A sugar glaze', 'An alkaline dip that accelerates Maillard browning', 'Extra yeast', 'Longer boiling in plain water'],
            answer: 1,
            explain: 'Lye or baked-soda dips raise the surface pH, dramatically speeding the amino-sugar reaction.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'No prerequisites — kitchen access recommended. Next: heat transfer basics (how pans actually heat food), emulsions and sauces, then fermentation.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Maillard = amino acids + reducing sugars + heat.',
          'The browning window starts near 140 °C; burning is pyrolysis.',
          'Water stalls browning at 100 °C — dry the surface first.',
          'Caramelization is sugar alone, at higher temperatures.',
          'Color reads the reaction: golden to brown is good, black is burned.',
        ],
      },
    ],
  },
  {
    id: 'cook-flavor-science',
    title: 'The Science of Flavor: Salt, Fat, Acid and Heat',
    domain: 'Everyday Knowledge',
    field: 'Cooking & Food Science',
    branch: 'Flavor',
    tier: 'core',
    concepts: [
      'Taste versus flavor: tongue versus brain',
      'The five tastes and their jobs',
      'Aroma: flavor is mostly smell',
      'Salt: the volume knob',
      'Fat and acid: the balancers',
      'Balancing a dish at the stove',
    ],
    words: 1269,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Taste happens on the tongue; flavor happens in the brain. The tongue contributes five or six basic sensations, while aroma, texture, temperature and expectation build the rest of the experience on top — which is why a head cold flattens food into cardboard. Cooks who internalize the difference stop following recipes and start correcting them, using four levers — salt, fat, acid and heat — plus the aroma compounds that browning creates. This is the diagnostic layer that sits above the kitchen chemistry of the Maillard lesson.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The usual story about a failed dish — "it needed something" — has exactly four endings: salt, fat, acid or time. Knowing the diagnostic order turns cooking from recipe-recitation into a repeatable skill, and it explains why restaurant food tastes brighter than the same dish at home.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Taste is the tongue\'s job: sweet, salty, sour, bitter and umami, with fat proposed as a sixth. Each is an ancient detector — sweet for energy, salty for electrolytes, sour for ripeness and spoilage, bitter for toxins, umami for amino acids, the signature of protein. Flavor is the brain\'s synthesis: taste plus aroma plus texture plus temperature plus everything expectation adds. Pinch your nose while eating and coffee collapses into bitter water — the demo that separates the two layers.',
      },
      {
        kind: 'para',
        text: 'The five tastes do specific jobs in a dish, not just their own. Sweet rounds aggression; bitter adds interest and depth; sour brightens; umami gives savory body — tomatoes, parmesan, mushrooms, soy sauce and seaweed are all glutamate delivery systems, identified by Kikunae Ikeda in 1908. Genetic variation is real: roughly a quarter of people are supertasters, intensely sensitive to bitterness, which is why Brussels sprouts read differently around one table. Cooking for others means calibrating to their tongues, not yours.',
      },
      {
        kind: 'para',
        text: 'Aroma is the largest share of flavor, and most of it arrives retronasally — drifting from the back of the mouth up into the nose while you chew, the reverse of sniffing. Humans distinguish enormous numbers of odors, and it is aroma, not taste, that makes cinnamon cinnamon. Two practical consequences: temperature is a flavor dial, because heat volatilizes aromas (cold soup and warm beer taste dull for the same reason), and timing matters, because delicate herb aromas cook off in minutes while woody ones need time.',
      },
      {
        kind: 'para',
        text: 'Salt is the volume knob, and its magic happens below saltiness. At sub-threshold doses salt suppresses bitterness — the reason a pinch rescues grapefruit, coffee and Brussels sprouts — and suppression releases the flavors bitterness was masking. Salt also makes aroma molecules more available to the nose. Numbers worth knowing: soup and broth taste seasoned near 1 per cent salt by weight (about 9-10 grams per litre), and bread bakers run near 2 per cent of flour weight. Season in layers while cooking, not once at the end.',
      },
      {
        kind: 'para',
        text: 'Fat and acid are the balancers. Fat carries the fat-soluble aromas that water cannot — the curry spices that bloom in oil, the reason vinaigrette smells of anything — and it coats the tongue, softening harsh notes and delivering richness. Acid is the corrective: a squeeze of lemon, a spoon of vinegar or yogurt lifts heavy, flat or overly rich dishes and makes them read brighter. Richness wants acid; acidity wants a little sweetness to round its edge. When a dish tastes heavy, do not reach for more salt first — reach for acid.',
      },
      {
        kind: 'para',
        text: 'Balancing is a loop run at the stove: taste, then ask in order — flat? add salt. Lifeless after salt? add acid. Rich but heavy or harsh? acid, then fat. Thin? time, or browning for depth — the chemistry of which lives in the Maillard lesson. Heat, the fourth lever, is both temperature (serving warmth is flavor) and transformation: slow heat deepens, high heat toasts. Professionals taste a dozen times per dish; the home habit of tasting only at the end is why "the same recipe" tastes different in a restaurant.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a pot of tomato soup tastes flat and somehow "red" — nothing wrong, just dull. Fix it with the diagnostic order, in layers.',
        'Recall: flatness usually means missing salt; lifelessness that survives salt means missing acid; harsh raw tomato edge wants sweetness and fat; depth wants browning.',
        'Apply: estimate 1.5 litres of soup and add salt toward 1 per cent — a teaspoon at a time, about 9-10 grams total, tasting between additions. Still flat: add a teaspoon of vinegar or lemon. Harsh: a pinch of sugar and a knob of butter. Serve with a final drop of acid and torn soft herbs for aroma.',
        'State the result: salt, then acid, then fat, tasted in that order, turns flat to balanced without changing the recipe — the same sequence a professional cook runs by reflex.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Restaurant kitchens season in layers and finish with acid and fresh herbs — why the same dish beats the home version.',
          'Low-sodium cooking for hypertension leans on acid and umami (mushrooms, tomato, parmesan) to compensate for salt.',
          'Wine pairing is largely aroma pairing: fat against tannin, acid against acid, sweet against sweet.',
          'The flavor industry engineers retronasal aroma profiles — "natural flavor" on a label is chemistry either way.',
          'Coffee cupping and beer tasting train the retronasal sense that everyday eating dulls.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Blaming the recipe when the seasoning trajectory is at fault — one big salting at the end cannot do what layered seasoning did all along. Tasting while scalding hot numbs the tongue; cool the spoon first. Adding delicate herbs at the start of a long simmer boils their aroma off — hard herbs early, soft herbs late. And do not mistake chili burn (pain receptors, TRPV1) for taste: it is a different sense, with different rules and different remedies.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'taste', def: 'The tongue\'s sensations: sweet, salty, sour, bitter, umami — and possibly fat.' },
          { term: 'flavor', def: 'The brain\'s synthesis of taste, aroma, texture, temperature and expectation.' },
          { term: 'retronasal olfaction', def: 'Smelling aroma compounds from the back of the mouth while eating.' },
          { term: 'umami', def: 'The savory taste of glutamates, the amino-acid signature of protein foods.' },
          { term: 'bitterness suppression', def: 'Salt at sub-threshold levels dampening bitterness and unmasking other flavors.' },
          { term: 'seasoning in layers', def: 'Adding salt at each stage of cooking rather than once at the end.' },
          { term: 'balancing', def: 'The taste-loop of adjusting salt, fat, acid and heat until a dish reads complete.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Pinching your nose while eating mostly kills the…',
            options: ['taste layer', 'aroma layer, which is the largest share of flavor', 'texture', 'temperature'],
            answer: 1,
            explain: 'Taste survives; retronasal aroma is cut off — which is why food goes flat during a head cold.',
          },
          {
            q: 'Umami is the taste of…',
            options: ['capsaicin burn', 'glutamates — the amino-acid signature of protein', 'pure salt', 'citric acid'],
            answer: 1,
            explain: 'Tomatoes, parmesan, mushrooms and soy sauce all deliver glutamate, identified by Ikeda in 1908.',
          },
          {
            q: 'A pinch of salt in grapefruit or coffee works by…',
            options: ['covering the flavor with saltiness', 'suppressing bitterness, which unmaskes other flavors', 'chemical neutralization of acids', 'adding umami'],
            answer: 1,
            explain: 'Below the saltiness threshold, salt damps bitter receptors — the flavors bitterness was hiding come forward.',
          },
          {
            q: 'A soup tastes seasoned after salt but still lifeless. The next lever is…',
            options: ['more salt', 'acid — lemon juice or vinegar', 'sugar only', 'longer boiling'],
            answer: 1,
            explain: 'The diagnostic order runs salt, then acid: brightness is usually the missing second half.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Pairs with the Maillard lesson for browning chemistry and the food-safety lesson for the temperature rules. Then: emulsions and sauces, fermentation (soy sauce, miso, wine as engineered umami and aroma), and tasting practice — buy two brands of the same food and describe the difference out loud.',
        tone: 'path',
      },
    ],
  },
]
