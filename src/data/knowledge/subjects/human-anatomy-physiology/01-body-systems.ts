/**
 * Knowledge Universe — Human Anatomy & Physiology — Chapter 01: Body Systems
 * 9 lessons · ~11,325 words
 * field: Anatomy & Physiology
 * legacy sources: life-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Human Body Systems]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bio-anatomy-heart-circulation — The Heart and Circulation: One Pump, Two Circuits
 *   01.2 bio-anatomy-respiration — Breathing and Gas Exchange: From Air to Cell
 *   01.3 bio-anatomy-digestion — The Digestive System: From Meal to Molecule
 *   01.4 bio-anatomy-kidneys-endocrine — Kidneys, Hormones and the Body's Balance
 *   01.5 bio-anatomy-musculoskeletal — Muscles, Bones and the Machinery of Movement
 *   01.6 anat-endocrine-system-hormones — The Endocrine System: Hormones as the Body's Slow Messengers
 *   01.7 bio-anatomy-nervous-system-command — The Nervous System: The Body's Command Network
 *   01.8 bio-anatomy-senses-perception — The Senses: How the Body Reads the World
 *   01.9 bio-anatomy-reproduction-development — Reproduction and the Making of a Human
 */
import type { KnowledgeTopic } from '../../types'

export const humanAnatomyPhysiologyCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-anatomy-heart-circulation',
    title: 'The Heart and Circulation: One Pump, Two Circuits',
    domain: 'Life Sciences',
    field: 'Anatomy & Physiology',
    branch: 'Human Body Systems',
    tier: 'core',
    concepts: [
      'Four chambers working as two pumps',
      'The cardiac cycle and its one-way valves',
      'Pulmonary and systemic circuits in series',
      'Arteries, capillaries, and veins',
      'Blood pressure and its regulation',
    ],
    words: 956,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Every minute, a fist-sized muscle drives roughly five liters of blood through a vessel network that, laid end to end, would circle the Earth two and a half times. The heart is two pumps in one chest: the right half pushes blood a short hop to the lungs to collect oxygen, while the thicker-walled left half fires it out to every other tissue in the body. This topic follows blood through both circuits, breaks the heartbeat into its working phases, and decodes the two numbers of a blood-pressure reading.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Heart and vessel disease remains the world\'s leading cause of death, and nearly every number taken at a check-up — pulse, blood pressure, cholesterol — measures this system. Understanding the pump and its plumbing is the first step toward reading those numbers, and the operations that fix them.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The heart\'s four chambers split the workload. Two atria on top receive blood returning from body and lungs; two ventricles below pump it back out. The right ventricle only has to push blood up to the lungs, so its wall is modest, while the left ventricle must drive blood to the fingertips and back against far higher resistance — its wall is about three times thicker.',
      },
      {
        kind: 'para',
        text: 'Each beat is one cardiac cycle. In systole the ventricles contract and pressure slams the mitral and tricuspid valves shut — the "lub" of a stethoscope — while blood is forced through the aortic and pulmonary valves. In the longer diastole the muscle relaxes and the chambers refill — the "dup". One-way valves are the entire design trick: blood can never reverse.',
      },
      {
        kind: 'para',
        text: 'The two circuits run in series. Oxygen-poor blood leaves the right ventricle on the short pulmonary circuit, swaps carbon dioxide for oxygen in the lungs, and returns to the left atrium. The left ventricle then sends the oxygen-rich blood into the aorta for the systemic circuit through every other tissue, finishing back at the right atrium — about one minute for the round trip.',
      },
      {
        kind: 'para',
        text: 'Arteries are thick-walled and muscular because they ride the pressure pulse, and their smooth muscle widens or narrows to steer flow. They branch into capillaries so narrow that red cells queue in single file across walls one cell thick — the only place exchange happens. Veins, thin-walled and low-pressure, hold most of the blood at rest; one-way valves plus the squeeze of walking muscles pump it back uphill to the heart.',
      },
      {
        kind: 'para',
        text: 'Blood pressure reads as two numbers, systolic over diastolic — the surge of ventricular contraction over the resting pressure between beats, classically near 120/80 millimeters of mercury. Baroreceptors in the neck sense beat-to-beat drift and retune heart rate and vessel width within seconds, while kidneys and hormones adjust the set point over days. Readings that stay above 130/80 quietly damage vessels, heart, brain, and kidneys.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how much blood the heart delivers per minute at rest.',
          'Recall the governing idea: cardiac output equals stroke volume times heart rate.',
          'Apply: each contraction ejects about 70 milliliters and a resting heart beats roughly 72 times per minute, so 70 × 72 ≈ 5,040 milliliters per minute.',
          'State the result: about five liters per minute — the whole blood volume — while hard exercise can push stroke volume and rate to deliver over 20 liters to working muscles.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'A stethoscope reading of valve sounds flags narrowing or leaks long before symptoms appear.',
          'Treating high blood pressure — lifestyle first, then drugs — sharply cuts stroke and heart-failure risk.',
          'Stents and bypass grafts reopen blocked coronary arteries during heart attacks.',
          'Endurance training lowers resting heart rate toward 40-50 beats per minute with a larger stroke volume.',
          'Pacemakers and replacement valves mechanically substitute for failing parts of the pump.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The textbook shortcut "arteries carry oxygen-rich blood" fails twice on the right side: the pulmonary artery carries oxygen-poor blood to the lungs, and the pulmonary vein returns oxygen-rich blood — circuit names describe direction from the heart, not oxygen content. A second mix-up is reading blood pressure backwards: the upper number is the systolic surge, the lower one the diastolic resting pressure.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Cardiac cycle', def: 'One full heartbeat — ventricular contraction (systole) followed by relaxation and refilling (diastole).' },
          { term: 'Atrium', def: 'An upper chamber that receives blood returning to the heart.' },
          { term: 'Ventricle', def: 'A lower pumping chamber; the left ventricle has the thickest wall.' },
          { term: 'Stroke volume', def: 'Blood ejected by one ventricular contraction, about 70 milliliters at rest.' },
          { term: 'Cardiac output', def: 'Stroke volume times heart rate — total blood flow delivered per minute.' },
          { term: 'Capillary', def: 'Microscopic vessel with one-cell-thick walls where gases and nutrients are exchanged.' },
          { term: 'Systolic pressure', def: 'Peak arterial pressure during ventricular contraction, the upper blood-pressure number.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which chamber pumps oxygen-rich blood to the entire body?',
            options: ['Right atrium', 'Left ventricle', 'Right ventricle', 'Left atrium'],
            answer: 1,
            explain: 'The left ventricle drives the systemic circuit; its extra-thick wall exists for exactly that job.',
          },
          {
            q: 'The heart\'s valves are essential because they:',
            options: ['generate the heart\'s electrical rhythm', 'secrete hormones that raise blood pressure', 'keep blood flowing one way so it cannot reverse', 'store extra blood between beats'],
            answer: 2,
            explain: 'One-way valves convert rhythmic squeezing into directed flow — without them the pump merely sloshes blood.',
          },
          {
            q: 'A stroke volume of 70 milliliters and a heart rate of 72 give a cardiac output of about:',
            options: ['0.7 liters per minute', '7.2 liters per minute', '720 liters per minute', '5 liters per minute'],
            answer: 3,
            explain: '70 × 72 ≈ 5,040 milliliters — roughly the entire blood volume moved each minute.',
          },
          {
            q: 'Capillary walls are one cell thick mainly to:',
            options: ['minimize the diffusion distance for gases and nutrients', 'withstand high pulsing pressure', 'let red blood cells divide', 'store oxygen for emergencies'],
            answer: 0,
            explain: 'Exchange happens fastest across the thinnest barrier — withstanding pressure is the arteries\' job.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-anatomy-respiration',
    title: 'Breathing and Gas Exchange: From Air to Cell',
    domain: 'Life Sciences',
    field: 'Anatomy & Physiology',
    branch: 'Human Body Systems',
    tier: 'core',
    concepts: [
      'Breathing driven by pressure differences',
      'Alveoli: where air meets blood',
      'Hemoglobin: the oxygen courier',
      'Carbon dioxide, bicarbonate, and pH',
      'Automatic control from the brainstem',
    ],
    words: 961,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'You can hold your breath for a minute, but the body will not allow two: every cell runs on oxygen delivered moment to moment. Breathing works by pressure differences, exchange happens across a barrier thinner than tissue paper, and delivery rides on a molecule built to grab oxygen in the lungs and release it in hungry tissue. This topic follows one oxygen molecule from open air to a mitochondrion — and the carbon dioxide making the return trip.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The gas-exchange surface folded into your chest totals about 70 square meters — a sheet that would floor a good-sized apartment — and the heart sends the entire blood volume past it every minute. Asthma, emphysema, pneumonia, and altitude sickness are each a failure at a different stage of the journey traced here.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Air moves because the chest makes room for it. When the diaphragm dome flattens and the ribs lift, chest volume grows, the pressure inside drops below atmospheric, and air flows in; when the muscles relax, the lungs\' own elastic recoil squeezes the air back out. Quiet exhalation is passive — recoil does the work — while deep breathing recruits rib muscles to drive air out as well as in.',
      },
      {
        kind: 'para',
        text: 'The airways branch some twenty-three generations before ending in about 480 million alveoli: thin-walled sacs wrapped so tightly in capillaries that blood practically touches air. The barrier between them is under a micrometer thick, so oxygen diffuses down its partial-pressure gradient into blood while carbon dioxide diffuses out — each exchange completed in a fraction of a second. A soapy coating called surfactant keeps the wet sacs from collapsing shut.',
      },
      {
        kind: 'para',
        text: 'Oxygen dissolves poorly in water, so plasma alone would carry almost nothing. Red cells are instead packed with hemoglobin, and each molecule carries four iron-bearing heme groups able to bind four oxygen molecules. Fully loaded blood holds about 200 milliliters of oxygen per liter — roughly fifty times what plasma dissolves — and unloads it fastest exactly where tissue is warm, acidic, and metabolically busy.',
      },
      {
        kind: 'para',
        text: 'Carbon dioxide rides home mostly as bicarbonate. An enzyme inside red cells, carbonic anhydrase, converts it to carbonic acid, which splits into bicarbonate and hydrogen ions that hemoglobin mops up. This chemistry ties breathing directly to blood pH: breathing faster blows the gas off and raises pH, breathing too slowly lets pH fall — the reason hyperventilation makes fingertips tingle.',
      },
      {
        kind: 'para',
        text: 'The system runs on autopilot from the brainstem. Rhythm generators in the medulla set the basic pace, while chemoreceptors — central ones bathing in brain fluid, others in the major arteries — monitor carbon dioxide, the true controlled variable, with oxygen as a backup alarm. That is why the agony of a held breath is driven by rising carbon dioxide long before oxygen actually runs low.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how much oxygen the bloodstream delivers each minute at rest.',
          'Recall the governing idea: arterial blood carries about 200 milliliters of oxygen per liter bound to hemoglobin, and the heart circulates about 5 liters per minute.',
          'Apply: 200 milliliters per liter times 5 liters per minute equals 1,000 milliliters of oxygen in transit, of which resting tissues consume roughly 250 milliliters.',
          'State the result: about one liter per minute delivered with a fourfold reserve — the margin hard exercise draws on when cardiac output and extraction must rise to meet a demand near 4 liters.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Ventilators take over the pressure cycle when the diaphragm or its brainstem control fails.',
          'Pulse oximeters estimate hemoglobin saturation through the skin in seconds.',
          'Asthma inhalers open constricted airways; emphysema destroys alveolar walls and shrinks the exchange surface.',
          'Carbon monoxide kills by occupying hemoglobin\'s oxygen seats — treated with pure oxygen.',
          'Weeks at altitude raise red-cell counts to compensate for thin air.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Two ideas mislead beginners. First, air is not sucked in by the lungs — the chest expands, pressure falls, and the atmosphere pushes air in; the lungs simply follow the chest wall. Second, the urge to breathe comes mainly from rising carbon dioxide, not falling oxygen — which is why hyperventilating before an underwater swim is dangerous: it delays the warning signal while oxygen stores keep falling.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Diaphragm', def: 'The dome of muscle whose flattening enlarges the chest and draws air in.' },
          { term: 'Alveolus', def: 'A thin-walled air sac, one of about 480 million, where gas exchange with capillaries occurs.' },
          { term: 'Surfactant', def: 'A phospholipid coating that lowers surface tension so alveoli do not collapse.' },
          { term: 'Hemoglobin', def: 'The four-part oxygen carrier that fills red blood cells.' },
          { term: 'Partial pressure', def: 'The share of total gas pressure contributed by one gas, which sets diffusion direction.' },
          { term: 'Bicarbonate', def: 'The dissolved form in which most carbon dioxide travels in plasma.' },
          { term: 'Chemoreceptor', def: 'A sensor of blood or brain-fluid chemistry that feeds back on breathing rate.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Inhalation happens because:',
            options: ['the lungs actively suck air inward', 'chest expansion drops internal pressure below atmospheric, pushing air in', 'oxygen diffuses into the chest cavity', 'the diaphragm squeezes air up from the stomach'],
            answer: 1,
            explain: 'Muscles enlarge the chest; the pressure drop lets the atmosphere push air in — the lungs ride along.',
          },
          {
            q: 'Most oxygen in blood travels:',
            options: ['dissolved directly in plasma', 'inside platelets', 'bound to hemoglobin inside red cells', 'as microscopic bubbles'],
            answer: 2,
            explain: 'Hemoglobin\'s four heme groups carry the load — about fifty times what plasma alone could dissolve.',
          },
          {
            q: 'The strongest everyday drive to breathe comes from:',
            options: ['rising carbon dioxide and falling pH', 'low oxygen in the blood', 'stretch receptors in the alveoli', 'the cerebral cortex'],
            answer: 0,
            explain: 'Carbon dioxide is the tightly controlled variable; oxygen only becomes a major drive when quite low.',
          },
          {
            q: 'Most carbon dioxide returns to the lungs as:',
            options: ['dissolved gas', 'bicarbonate ions', 'carbonic acid', 'cargo inside white cells'],
            answer: 1,
            explain: 'Roughly 70 percent rides as bicarbonate, formed by carbonic anhydrase inside red cells.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-anatomy-digestion',
    title: 'The Digestive System: From Meal to Molecule',
    domain: 'Life Sciences',
    field: 'Anatomy & Physiology',
    branch: 'Human Body Systems',
    tier: 'core',
    concepts: [
      'A nine-meter disassembly line',
      'Mechanical and chemical digestion',
      'Enzymes: each a specialist',
      'Absorption in the small intestine',
      'The liver as processing hub',
    ],
    words: 887,
    readMins: 4,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'A sandwich is worthless to your cells until it has been dismantled. The digestive system is a nine-meter disassembly line that grinds food, douses it in acid, and attacks it with a suite of specialist enzymes, until nothing remains but molecules small enough to cross the intestinal wall. This topic walks the tract from mouth to large intestine, names the enzymes and their targets, and shows why the liver gets first claim on every absorbed nutrient.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Coeliac disease, ulcers, lactose intolerance, and reflux are all failures at specific stations of the line — and each is managed by understanding which step misfires. Medicine\'s most common gut prescriptions, from antacids to enzyme replacements, are direct applications of this anatomy.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The tract runs from mouth through esophagus, stomach, small intestine, and large intestine — about nine meters coiled into the abdomen — with salivary glands, pancreas, and gallbladder emptying in through side ducts. Its wall carries the enteric nervous system, a local mesh of some 500 million neurons that coordinates the peristaltic waves and mixing contractions pushing contents along, largely without consulting the brain.',
      },
      {
        kind: 'para',
        text: 'Teeth shear and grind, the stomach churns, and segmentation contractions mix — but all of that is only preparation. Chemical digestion is hydrolysis: enzymes add water across bonds to split starches into sugars, proteins into amino acids, and fats into fatty acids. The tract\'s true product is not the mush passing through but the molecules small enough to be absorbed from it.',
      },
      {
        kind: 'para',
        text: 'Each enzyme has a target and a workplace. Salivary amylase starts on starch in the mouth; pepsin attacks proteins in stomach acid near pH 2, strong enough to kill most swallowed microbes; pancreatic amylase, proteases like trypsin, and lipase finish the job in the small intestine, arriving with sodium bicarbonate to neutralize the acid. Bile salts from the liver emulsify fat into droplets small enough for lipase to attack.',
      },
      {
        kind: 'para',
        text: 'Nearly all uptake happens in the small intestine, whose lining is pleated into villi and microvilli — the brush border — multiplying the absorptive surface many times over. Sugars and amino acids cross on specific transporters into capillaries; digested fats reassemble into droplets that enter lymph vessels. The large intestine then reclaims water and salts, and its bacterial flora ferments whatever remains.',
      },
      {
        kind: 'para',
        text: 'Absorbed nutrients travel the portal vein straight to the liver, which gets first claim: it stores glucose as glycogen, packages and ships fats, builds plasma proteins, and detoxifies alcohol, drugs, and ammonia. Between meals it drips glycogen back out as glucose, holding blood sugar steady — the body\'s metabolic customs house.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the fate of the starch in a slice of bread.',
          'Recall the governing idea: starch is a chain of glucose units, split by amylases and finished by brush-border enzymes.',
          'Apply: salivary amylase begins in the mouth; stomach acid pauses it; pancreatic amylase resumes in the duodenum, yielding the two-sugar maltose; brush-border maltase then releases free glucose, which transporters carry into villus cells and on into the portal vein.',
          'State the result: within about two hours a plant polymer has become glucose in the blood — stored as liver glycogen or shipped out as fuel.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Lactase enzyme tablets replace what lactose-intolerant guts no longer make.',
          'Ulcer therapy pairs acid-suppressing drugs with antibiotics against Helicobacter pylori.',
          'In coeliac disease, gluten flattens the villi and absorption collapses until gluten is removed.',
          'Bariatric surgery reshapes the tract to limit intake and absorption for severe obesity.',
          'Dietary fiber feeds the colonic bacteria that finish digestion in the large intestine.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Digestion and absorption are different jobs in different places: the stomach digests protein but absorbs almost nothing — alcohol being a notable exception — while nearly all uptake is small-intestine work. And the gallbladder only stores bile; the liver makes it. Removing a gallbladder rarely stops digestion, it just makes an especially fatty meal harder to process.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Peristalsis', def: 'Wave-like muscle contractions that propel contents along the tract.' },
          { term: 'Hydrolysis', def: 'Splitting a molecule by adding water across the bond — how food polymers are broken down.' },
          { term: 'Pepsin', def: 'The stomach\'s protein-digesting enzyme, active only in strong acid.' },
          { term: 'Bile', def: 'Liver-made salts that emulsify fat into droplets exposed to lipase.' },
          { term: 'Villus', def: 'A finger-like fold of the small-intestine lining, itself covered in microvilli.' },
          { term: 'Brush border', def: 'The microvilli layer carrying the final digestive enzymes and transporters.' },
          { term: 'Portal vein', def: 'The vessel carrying nutrient-rich blood from the intestine to the liver first.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Most nutrient absorption occurs in the:',
            options: ['stomach', 'small intestine', 'large intestine', 'esophagus'],
            answer: 1,
            explain: 'Villi and the brush border give the small intestine its enormous uptake surface.',
          },
          {
            q: 'Pepsin works best:',
            options: ['in the acidic stomach', 'in the alkaline small intestine', 'in saliva', 'inside the pancreas'],
            answer: 0,
            explain: 'Pepsin is adapted to stomach acid near pH 2; pancreatic enzymes instead need the alkaline duodenum.',
          },
          {
            q: 'Bile\'s role in fat digestion is to:',
            options: ['chemically split fats into fatty acids', 'neutralize stomach acid', 'digest proteins alongside pepsin', 'emulsify fat into droplets that lipase can attack'],
            answer: 3,
            explain: 'Bile salts break fat into tiny droplets — multiplying surface area — while lipase does the actual splitting.',
          },
          {
            q: 'Blood leaving the intestine travels first to the:',
            options: ['heart, for immediate distribution', 'kidneys, for filtering', 'liver, via the portal vein', 'lungs, for oxygen'],
            answer: 2,
            explain: 'The portal vein gives the liver first access to absorbed nutrients before anything reaches the general circulation.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-anatomy-kidneys-endocrine',
    title: 'Kidneys, Hormones and the Body\'s Balance',
    domain: 'Life Sciences',
    field: 'Anatomy & Physiology',
    branch: 'Human Body Systems',
    tier: 'intermediate',
    concepts: [
      'The nephron: filter and tubule',
      'Filtration, reabsorption, secretion',
      'Osmoregulation by ADH',
      'Hormones as chemical messengers',
      'Negative feedback: the master pattern',
      'The kidneys as endocrine organs',
    ],
    words: 1006,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Two fist-sized kidneys filter roughly 180 liters of fluid from your blood each day — the entire plasma volume dozens of times over — deciding ion by ion what to keep and what to discard. Around them, the endocrine system broadcasts slower chemical instructions through the bloodstream. Together they hold the body\'s internal sea of water, salts, sugar, and calcium within the narrow ranges chemistry demands. This topic covers the nephron\'s filter-and-reclaim engineering, water balance by hormone, and the feedback loops that run the show.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Chronic kidney disease and diabetes are among the world\'s fastest-growing chronic conditions, and both are failures of balance — one of filtration, one of hormonal feedback. Dialysis, sodium labels, thyroid tests, and glucose meters are all applications of the machinery described here.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Each kidney packs about a million nephrons, its functional units. Blood enters the glomerulus, a knot of capillaries under pressure, and fluid is forced across a filter into a capsule, then flows along a tubule whose successive sections decide — through transporters and channels — what returns to the blood and what drains on toward the bladder as urine.',
      },
      {
        kind: 'para',
        text: 'About 180 liters of fluid filter through each day, yet only a liter or two leaves as urine: more than 99 percent is reabsorbed. Glucose is normally recovered completely, salts are tuned to the body\'s needs, and wastes like urea are left behind or actively secreted into the tubule. Urine is the fine-tuned residue of the filtrate, not the filtrate itself.',
      },
      {
        kind: 'para',
        text: 'Sweat through an afternoon or skip water and the blood concentrates; osmoreceptors in the hypothalamus fire within minutes, triggering thirst and the release of antidiuretic hormone (ADH) from the posterior pituitary. ADH inserts water channels into the kidney\'s collecting ducts, letting water be retracted from the forming urine — which is why dehydration shrinks urine volume and darkens its color.',
      },
      {
        kind: 'para',
        text: 'Endocrine glands release hormones into the bloodstream, where they reach every cell but act only on cells carrying the matching receptor. Insulin commands glucose uptake in muscle and fat while the brain runs on other rules; adrenaline acts in seconds, thyroid hormone over days. Where nerves send addressed electrical signals, hormones are chemical broadcasts steering metabolism, growth, reproduction, and mood.',
      },
      {
        kind: 'para',
        text: 'The master pattern is negative feedback: a hormone\'s effects feed back to shut off its own release. The pancreas senses glucose, secretes insulin, glucose falls, and insulin secretion stops — a loop holding blood sugar near 5 millimoles per liter. The pituitary reads thyroid hormone levels and dials its own TSH up or down to hold metabolic rate on target. Positive feedback exists too, but mainly for events that must run to completion, like childbirth\'s oxytocin spiral.',
      },
      {
        kind: 'para',
        text: 'The kidneys are endocrine organs in their own right. Falling oxygen delivery prompts them to release erythropoietin, the hormone ordering the marrow to make more red blood cells; low blood flow prompts renin, launching a cascade that raises blood pressure and salt retention. And the adrenal glands sit perched on top of the kidneys, managing sodium via aldosterone — a constant conversation between filter and gland.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how the body defends its water balance through a hot afternoon with nothing to drink.',
          'Recall the governing idea: osmoreceptors plus ADH conserve water by concentrating urine.',
          'Apply: sweating raises the solute concentration of blood; hypothalamic osmoreceptors fire, ADH rises from the posterior pituitary, water channels open in the collecting ducts, and more water is reabsorbed before urine leaves — while the same signal drives you to find a drink.',
          'State the result: urine output falls toward half a liter a day and darkens, thirst sharpens, and plasma concentration stays near normal until water arrives.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Dialysis artificially filters wastes when nephrons fail, typically three sessions a week.',
          'Insulin pumps and continuous glucose monitors engineer the feedback loop that diabetes breaks.',
          'Thyroid check-ups start with TSH — reading the pituitary feedback loop to locate the fault.',
          'Erythropoietin treats the anemia of kidney failure — and is banned as a blood-doping drug.',
          'Dehydration darkens urine; ADH-suppressing alcohol explains the morning-after thirst.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The kidney filters, but the tubule decides: raw filtration alone would waste 180 liters a day and dump glucose, so the real work is selective reabsorption. A second misconception is that hormones act everywhere they reach — only cells with the right receptor respond, which is why one hormone can have opposite effects in different organs. And the pituitary is a manager, not a boss: it answers to the hypothalamus above it and to feedback from the glands below.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Nephron', def: 'The kidney\'s functional unit — a glomerulus filter plus a tubule that reclaims what the body keeps.' },
          { term: 'Glomerulus', def: 'The high-pressure capillary knot where filtration begins.' },
          { term: 'Reabsorption', def: 'Reclaiming filtered water and solutes from the tubule back into blood.' },
          { term: 'ADH', def: 'Antidiuretic hormone (vasopressin) — inserts water channels to concentrate urine.' },
          { term: 'Negative feedback', def: 'A loop in which a hormone\'s own effect turns its release back down.' },
          { term: 'Erythropoietin', def: 'The kidney hormone that orders marrow to build red blood cells.' },
          { term: 'Insulin', def: 'The pancreatic hormone driving glucose uptake, held steady by negative feedback.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Roughly how much fluid do the two kidneys filter per day?',
            options: ['1-2 liters', '5 liters', '800 milliliters', '180 liters'],
            answer: 3,
            explain: 'The full plasma volume filters dozens of times a day — 180 liters — of which over 99 percent is reabsorbed.',
          },
          {
            q: 'ADH conserves water mainly by:',
            options: ['reducing sweating', 'thickening the blood', 'inserting water channels in the kidney\'s collecting ducts', 'raising blood sugar'],
            answer: 2,
            explain: 'ADH opens water channels so the collecting duct reabsorbs more water, concentrating the urine.',
          },
          {
            q: 'Insulin secretion switches off when:',
            options: ['blood glucose falls back toward normal', 'the liver releases bile', 'aldosterone rises', 'the hypothalamus fires'],
            answer: 0,
            explain: 'Negative feedback: the hormone\'s own effect — falling glucose — is the off switch at the pancreas.',
          },
          {
            q: 'Which hormone do the kidneys release when oxygen delivery runs low?',
            options: ['Insulin', 'Renin only', 'Erythropoietin, ordering more red blood cells', 'ADH'],
            answer: 2,
            explain: 'Erythropoietin from the kidneys stimulates the marrow — the basis of both anemia therapy and blood doping.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-anatomy-musculoskeletal',
    title: 'Muscles, Bones and the Machinery of Movement',
    domain: 'Life Sciences',
    field: 'Anatomy & Physiology',
    branch: 'Human Body Systems',
    tier: 'core',
    concepts: [
      'The skeleton: 206 bones, two divisions',
      'Joints: the body\'s bearings',
      'Bones and muscles as levers',
      'Muscles pull; pairs oppose',
      'Motor units grade the force',
      'Living bone, constantly remodeled',
    ],
    words: 985,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Take one step and a committee of 206 bones, a hundred movable joints, and more than 600 skeletal muscles fires in sequence — a machine that also happens to be alive, self-repairing, and rebuilt while you sleep. This topic covers that machinery at organ scale: the skeleton as frame and mineral bank, joints as bearings, muscles as engines that can only pull, and the cellular crew that remodels the whole apparatus decade after decade.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Osteoporosis, back injury, arthritis, and most sports damage are failures of this machinery\'s design limits — levers loaded wrong, bearings worn out, remodeling tipped the wrong way. Physiotherapy, joint replacement, and safe-lifting rules are applied biomechanics.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The 206 bones divide into an axial skeleton — skull, spine, and rib cage shielding brain and organs — and an appendicular skeleton of limbs and their girdles. Bone is not inert framing: it stores about 99 percent of the body\'s calcium, and the marrow inside it manufactures every red blood cell and many immune cells you own.',
      },
      {
        kind: 'para',
        text: 'Bones meet at joints ranging from the fused, immovable sutures of the skull to the freely moving synovial joints of shoulder, hip, knee, and fingers. In a synovial joint, glass-smooth cartilage coats the mating surfaces, a capsule of slippery fluid keeps friction near zero, and ligaments — tough collagen straps — hold the bones aligned while allowing the joint\'s designed motion.',
      },
      {
        kind: 'para',
        text: 'Muscle-bone systems are levers: the bone is a rigid bar, the joint a fulcrum, the muscle\'s pull an effort, and the load a resistance. Most human joints, like the elbow, work as third-class levers — the biceps attaches only a few centimeters past the joint while the hand carries its load ten times farther out. The design trades raw force for speed and range of motion.',
      },
      {
        kind: 'para',
        text: 'A muscle can only shorten and pull, never push, so movement needs opposing teams: the biceps bends the elbow while the triceps straightens it, and balance between such pairs is what physiotherapy restores. Collagen cables called tendons clamp muscle to bone; the Achilles tendon stretches under load and snaps back, recycling energy with every running stride like a spring.',
      },
      {
        kind: 'para',
        text: 'A whole muscle is thousands of fibers, each wired to one motor neuron — together a motor unit. The nervous system grades force two ways: firing the units it has recruited more rapidly, and recruiting additional units, smallest first, as demand climbs. In a maximal lift every available unit is active; a faint tremor is recruitment flickering on and off at the edge of that command.',
      },
      {
        kind: 'para',
        text: 'Bone is constantly rebuilt: osteoblasts deposit new tissue where mechanical load is high, osteoclasts dissolve it where it is not, and the entire skeleton turns over roughly every ten years. Loading drives the building — which is why bone fades during bed rest. When resorption outruns deposition for years, as after menopause, the result is osteoporosis: bones with normal chemistry but thinning architecture.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how hard the biceps must pull to hold a 10-kilogram dumbbell in the hand.',
          'Recall the governing idea: in a third-class lever, effort close to the fulcrum is multiplied across the longer load distance.',
          'Apply: the biceps inserts about 5 centimeters from the elbow while the load sits about 35 centimeters out at the hand, so the muscle must supply 35/5 = 7 times the load\'s force — 10 kg × 9.8 N/kg × 7 ≈ 690 newtons.',
          'State the result: holding a modest weight costs the muscle roughly seventy kilograms-force — the price your arm pays for fast, far-reaching movement instead of brute strength.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'DXA scans measure bone density as the standard screen for osteoporosis.',
          'Joint replacement swaps worn cartilage surfaces for metal and plastic bearings.',
          'ACL reconstruction rebuilds the knee\'s stabilizing ligament from a tendon graft.',
          'Loading bones through resistance exercise keeps remodeling tilted toward deposition across life.',
          'Ergonomics redesigns tools and lifts so joints work mid-range, where levers are safest.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Muscles pull and never push — every "pushing" motion you make is another muscle pulling from the other side. Tendons and ligaments are not interchangeable: tendon joins muscle to bone, ligament joins bone to bone. And lifting a heavy box with a bent spine turns the back into the worst lever in the body, which is the entire logic of lifting with the knees and a straight back.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Axial skeleton', def: 'The skull, spine, and rib cage — the central protective frame.' },
          { term: 'Synovial joint', def: 'A freely movable joint with cartilage surfaces, a lubricating capsule, and ligaments.' },
          { term: 'Ligament', def: 'Tough collagen strap binding bone to bone across a joint.' },
          { term: 'Tendon', def: 'Collagen cable transmitting muscle pull to bone.' },
          { term: 'Motor unit', def: 'One motor neuron and the set of muscle fibers it commands.' },
          { term: 'Third-class lever', def: 'Effort between fulcrum and load — fast, wide movement at the cost of force.' },
          { term: 'Osteoporosis', def: 'Bone thinning from years of resorption outpacing deposition.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Bones are tied to other bones by:',
            options: ['tendons', 'ligaments', 'muscle fibers directly', 'cartilage only'],
            answer: 1,
            explain: 'Ligament is bone-to-bone; tendon is muscle-to-bone — a distinction with surgical consequences.',
          },
          {
            q: 'Holding a dumbbell, the biceps must pull with far more force than the load itself because:',
            options: ['muscles are inherently weak', 'the bone absorbs most of the force', 'it attaches close to the elbow fulcrum, a third-class lever', 'gravity is stronger at the hand'],
            answer: 2,
            explain: 'The short effort arm and long load arm multiply the required muscle force — the trade for speed and reach.',
          },
          {
            q: 'The nervous system raises whole-muscle force mainly by:',
            options: ['making each fiber contract beyond its maximum', 'recruiting more motor units and firing them faster', 'stretching the tendon', 'reversing the muscle pair'],
            answer: 1,
            explain: 'Force grading is recruitment and firing rate — individual fibers are all-or-none.',
          },
          {
            q: 'Osteoporosis develops when:',
            options: ['osteoblasts outpace osteoclasts', 'marrow stops producing blood cells', 'synovial fluid dries up', 'resorption by osteoclasts outruns deposition for years'],
            answer: 3,
            explain: 'The remodeling balance tips toward dissolution, leaving bones light and brittle though chemically normal.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: "anat-endocrine-system-hormones",
    title: "The Endocrine System: Hormones as the Body's Slow Messengers",
    domain: "Life Sciences",
    field: "Anatomy & Physiology",
    branch: "Human Body Systems",
    tier: "core",
    concepts: [
      "Hormone classes: peptide, steroid, amine",
      "Surface receptors versus gene-switching receptors",
      "The pituitary under hypothalamic command",
      "Thyroid, parathyroid, adrenal, pancreatic, gonadal tours",
      "Feedback axes: HPT, HPG, growth",
      "Pulsatility and the continuous-GnRH paradox",
      "Half-life and steady state",
    ],
    words: 1223,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Nerves shout; hormones whisper. A nerve impulse delivers its message in milliseconds to one address. A hormone travels in the bloodstream to every cell, takes minutes to hours to act, and lingers for hours to weeks. That slowness is the point: hormones run the body's slow variables — growth, metabolism, salt, sugar, reproduction, stress — and this lesson tours the glands that make them and the feedback logic that governs them.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Diabetes, thyroid disease, puberty, growth, stress, and fertility are all endocrine business — and everyday puzzles, like why thyroid medication takes weeks to work, are simply half-life arithmetic.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Hormones come in three chemical classes, and the class predicts the mechanism. Peptides and proteins — insulin, growth hormone — are water-soluble and cannot cross membranes, so they bind surface receptors and act through second messengers: fast on, fast off, minutes to hours. Steroids — cortisol, estrogen, testosterone — are folded from cholesterol, slip through membranes, and bind intracellular receptors that turn genes on and off: slow on, slow off, hours to days. Amines sit between; thyroid hormone, oddly, behaves like a steroid.",
      },
      {
        kind: "para",
        text: "The conductor is the pituitary, a pea-sized gland hanging from the hypothalamus. Its posterior lobe is really neural tissue: hypothalamic neurons run down into it and release their hormones directly — antidiuretic hormone, whose water-balance role belongs to the kidney lesson, and oxytocin. The anterior lobe is a true gland controlled by hypothalamic releasing hormones delivered through a private portal blood supply: it makes growth hormone, thyroid-stimulating hormone, ACTH, prolactin, and the gonadotropins FSH and LH. The master gland's master is plainly the hypothalamus.",
      },
      {
        kind: "para",
        text: "The thyroid sets metabolic rate with T3 and T4, iodine-carrying hormones that touch nearly every tissue — and brain development depends on them so tightly that newborn screening is universal. Too much hormone and the engine races; too little and everything, including thought, slows. Behind the thyroid sit four parathyroid glands whose PTH manages blood calcium through bone, kidney, and activated vitamin D — the tightest-regulated number in the body.",
      },
      {
        kind: "para",
        text: "The adrenal glands are two organs in one. The cortex, under ACTH, makes cortisol — the stress hormone whose daily rhythm and psychology the Health & Wellness stress lesson follows — and aldosterone, the salt-retainer the kidney lesson meets again. The medulla is a sympathetic ganglion in disguise, dumping adrenaline for seconds-scale fight or flight. The pancreas runs the fuel seesaw: insulin stores glucose after meals, glucagon releases it during fasting — a continuous negative-feedback pair whose failure is diabetes, diet and treatment of which the Health & Wellness diabetes lesson owns.",
      },
      {
        kind: "para",
        text: "The gonads run on the same architecture. The HPG axis — hypothalamic GnRH ordering the pituitary's FSH and LH, which order the gonads' estrogen and testosterone — drives puberty, sperm production, and the menstrual cycle whose monthly choreography the Health & Wellness reproductive lesson covers. Sex hormones also feed back on bone, muscle, and brain. The pattern repeats everywhere: a hormone made downstream feeds back on the glands above it, and the feedback, not the glands, holds the setpoint.",
      },
      {
        kind: "para",
        text: "That feedback logic is why endocrine tests read like detective work: in hypothyroidism the failing thyroid makes little T4, so pituitary TSH rises — a high TSH localizes the problem to the gland itself. Pulsatility matters too: GnRH delivered continuously suppresses the axis rather than stimulating it, a paradox exploited by contraceptive and prostate-cancer drugs. And the two messaging systems interpenetrate — nerves trigger hormone release, hormones tune neural circuits, and the hypothalamus is the junction box where they meet.",
      },
      {
        kind: "formula",
        name: "Elimination half-life",
        latex: "t_{1/2} = \\frac{\\ln 2}{k}",
        meaning: "Time for hormone concentration to halve at elimination rate k; after about five half-lives, repeated dosing reaches steady state, roughly 95 percent of the way.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: why levothyroxine dose changes are rechecked at six to eight weeks rather than after days.",
          "Recall the pharmacokinetics: thyroxine's half-life is about seven days, and steady state takes four to five half-lives.",
          "Apply: five half-lives is 35 days — nearly five weeks for the new dose's concentration to fully replace the old one's.",
          "State the result: testing earlier mostly measures the old dose, so clinicians recheck TSH at six to eight weeks and read the feedback loop, not the pill bottle.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "TSH is the front-line thyroid test precisely because feedback inverts it: gland failure raises TSH, pituitary failure lowers it.",
          "Oral contraceptives hold steady synthetic hormones, suppressing FSH and LH and hence ovulation — feedback, weaponized.",
          "Anabolic steroids suppress the HPG axis; testes shrink because LH stops arriving, and fertility can take months to return.",
          "Growth hormone therapy works in childhood windows before the growth plates fuse — the endocrine clock is not indefinite.",
          "Endocrine disruptors such as BPA are studied at parts-per-billion because the hormones they mimic act at exactly those concentrations.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "More hormone is not more effect: receptors downregulate and feedback loops correct — which is why steroid cycles backfire and why hormone-boosting supplements mostly boost urine. Glands fail in both directions, hyper and hypo, often with opposite symptoms from the same gland. 'Adrenal fatigue' is not a recognized diagnosis — the real adrenal failure, Addison's disease, is a medical emergency. And never stop thyroid or steroid medication because the numbers improved: they improved because of it.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Hormone", def: "A chemical messenger released into blood, acting on distant cells bearing its receptors." },
          { term: "Releasing hormone", def: "A hypothalamic signal ordering the anterior pituitary to secrete a specific hormone." },
          { term: "Pituitary gland", def: "The hypothalamus-dependent conductor gland: neural posterior lobe, hormonal anterior lobe." },
          { term: "Negative feedback", def: "Downstream hormone suppressing the axis above it, holding the setpoint." },
          { term: "Half-life", def: "Time for circulating hormone to fall by half; sets dosing and steady-state timing." },
          { term: "Axis", def: "A hormone chain such as hypothalamus-pituitary-thyroid, each level commanding and sensing the next." },
          { term: "Endocrine disruptor", def: "An environmental molecule mimicking or blocking hormone receptors at trace doses." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "A high TSH with a low T4 indicates the primary problem is in:",
            options: ["the pituitary itself", "the thyroid gland", "the hypothalamus", "the adrenal cortex"],
            answer: 1,
            explain: "A failing thyroid removes feedback, so the pituitary pours out TSH while T4 stays low — the pattern that names the gland.",
          },
          {
            q: "Steroid hormones act slowly because they:",
            options: ["must be pumped across membranes by transporters", "bind intracellular receptors that alter gene transcription", "are destroyed within seconds in blood", "cannot dissolve in plasma"],
            answer: 1,
            explain: "Crossing membranes freely, they act at the genome — hours to days, but long-lasting.",
          },
          {
            q: "Continuous GnRH administration suppresses rather than stimulates the HPG axis because:",
            options: ["the pituitary downregulates its GnRH receptors under a constant signal", "GnRH is instantly degraded", "the gonads hypertrophy and ignore it", "FSH converts into LH"],
            answer: 0,
            explain: "The system evolved for pulses; steady signal reads as saturation, so LH and FSH fall — the paradox behind several drugs.",
          },
          {
            q: "Levothyroxine dose changes are rechecked after roughly six weeks because:",
            options: ["the tablet takes that long to dissolve", "thyroxine's seven-day half-life means steady state needs about five half-lives", "TSH is only measurable monthly", "insurance requires it"],
            answer: 1,
            explain: "35 days is five half-lives — before that, the bloodstream still mostly reflects the old dose.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Pair this with the kidneys lesson for ADH and water balance, the Health & Wellness lessons on stress, diabetes, and the menstrual cycle for each axis in action, and the brain-map lesson for the hypothalamus that conducts the whole orchestra.",
        tone: "path",
      },
    ],
  },
  // ------------------------------------------------------------------
  // FMHY-1-c — topics grounded in OpenStax Anatomy & Physiology 2e
  // (openstax.org/books/anatomy-and-physiology, CC BY-NC-SA):
  // 12-1, 12-2, 13-2, 13-4, 15-1 (nervous system); 14-1, 14-2 (senses);
  // 27-1, 27-2, 28-1, 28-2, 28-3, 28-4 (reproduction and development).
  {
    id: 'bio-anatomy-nervous-system-command',
    title: 'The Nervous System: The Body\'s Command Network',
    domain: 'Life Sciences',
    field: 'Anatomy & Physiology',
    branch: 'Human Body Systems',
    tier: 'intermediate',
    concepts: [
      'Central versus peripheral nervous system',
      'Gray and white matter: nuclei, ganglia, tracts, nerves',
      'Neurons and the six glial cell types',
      'Brain regions and the spinal cord highway',
      'Twelve cranial nerves, thirty-one spinal nerves, four plexuses',
      'Sympathetic and parasympathetic divisions',
      'Two-neuron autonomic circuits and their transmitters',
    ],
    words: 1652,
    readMins: 8,
    addedOn: '2026-10-19',
    blocks: [
      {
        kind: 'para',
        text: 'Between reading this sentence and scratching an itch, one network sensed, planned, commanded, and corrected the motion. The nervous system is the body\'s wiring and its command structure at once: a central nervous system (CNS) of brain and spinal cord locked inside skull and vertebral column, and a peripheral nervous system (PNS) of nerves and ganglia reaching everything else. This topic maps that network — organs, wiring rules, and the autonomic dimmer switch that runs the organs without asking. The signal itself, the traveling ion wave of the action potential, belongs to the nerve-signaling lesson; here we follow where the wires go.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Neurology is applied wiring: a stroke in one cerebral hemisphere paralyzes the opposite side of the body because the tracts cross; diabetes numbs the feet first because the longest peripheral nerves fail first; multiple sclerosis and Guillain-Barré strip the same insulation in different compartments. Learn the layout, and symptoms become addresses.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Structurally the division is simple — CNS is brain plus spinal cord, PNS is everything else — but the naming runs deeper. Tissue dense in cell bodies looks gray; myelinated axon tracts look white. And the same thing gets a different name by address: a bundle of axons is a tract in the CNS but a nerve in the PNS, while a cluster of cell bodies is a nucleus centrally but a ganglion peripherally — the optic "nerve" becomes the optic tract the moment its axons cross into the skull. Functionally the system runs three jobs in sequence: sensation, integration, and response. Somatic wiring drives skeletal muscle, mostly voluntarily; autonomic wiring runs smooth muscle, cardiac muscle, and glands for homeostasis; the enteric nervous system runs the gut so independently it is nearly a division of its own.',
      },
      {
        kind: 'para',
        text: 'The tissue is built from two cell families. Neurons — soma, dendrites, one axon — carry the signals; the action-potential lesson covers how. Shape predicts job: most sensory neurons are pseudo-unipolar, the cell body parked in a dorsal root ganglion while a single axon runs from skin to spinal cord; bipolar neurons serve the retina and olfactory epithelium; nearly everything else is multipolar. The second family, glia, makes signaling possible: astrocytes buffer the brain\'s chemistry and build the blood-brain barrier; oligodendrocytes wrap CNS axons, one cell myelinating many segments; microglia are resident immune cells; ependymal cells filter cerebrospinal fluid in the ventricles. In the periphery, satellite cells cushion ganglion cell bodies, and Schwann cells myelinate one segment each — one reason a cut peripheral nerve can regrow along its Schwann tubes while CNS tracts cannot.',
      },
      {
        kind: 'para',
        text: 'The CNS is four brain regions plus a cord. The cerebrum — folded cortex in four lobes per hemisphere, the halves joined by the corpus callosum — carries memory, language, and conscious experience; the brain-map lesson tours that geography in detail. Beneath it, the diencephalon holds the thalamus, the relay nearly every sensory signal must pass through, and the hypothalamus, chief of the autonomic system and, through the pituitary, of the endocrine system (the hormones lesson takes that axis from here). The brainstem — midbrain, pons, medulla — runs breathing, cardiovascular control, and the cranial-nerve nuclei while funneling all ascending and descending traffic. Behind it, the cerebellum compares the movement the cerebrum ordered with the sensory feedback that returned, and issues the corrections that keep motion smooth.',
      },
      {
        kind: 'para',
        text: 'The spinal cord is the trunk cable. In cross-section the gray matter forms an H: posterior horns process arriving sensory signals, anterior horns hold the large motor neurons that command skeletal muscle, and lateral horns at thoracic and upper lumbar levels launch the sympathetic outflow. Around the gray matter, white columns carry ascending sensory tracts and descending motor tracts. Peripheral fibers arrive through dorsal roots and leave through ventral roots — sensory and motor, strictly segregated — with the sensory cell bodies sitting in each dorsal root ganglion. The cord stops growing in toddlerhood while the vertebral column keeps lengthening, so the lowest roots stream downward as a horse-tail bundle, the cauda equina.',
      },
      {
        kind: 'para',
        text: 'Peripherally, twelve cranial nerves serve the head and neck: purely sensory (olfactory, optic, vestibulocochlear), purely motor (the three eye-movement nerves, the spinal accessory, the hypoglossal), and mixed — trigeminal for face sensation and chewing, facial for expression and taste, glossopharyngeal for the throat, and the vagus, which wanders off to regulate heart and gut. Below the neck, thirty-one pairs of spinal nerves — eight cervical, twelve thoracic, five lumbar, five sacral, one coccygeal — re-sort into four plexuses: the cervical, whose phrenic nerve drives the diaphragm; the brachial, giving the radial, median, and ulnar nerves of the arm; the lumbar, source of the femoral nerve; and the sacral, root of the sciatic nerve, the body\'s largest. Nerves are organs, not bare wires: fascicles of axons wrapped in connective-tissue sheaths.',
      },
      {
        kind: 'para',
        text: 'The autonomic system always uses a two-neuron chain: a preganglionic neuron from the CNS synapses in a ganglion, and the postganglionic neuron drives the target. The sympathetic division leaves the thoracic and upper lumbar cord — thoracolumbar — into a chain of ganglia flanking the vertebral column; its preganglionic fibers are short, its postganglionic fibers long, and one preganglionic neuron may drive ten to twenty targets. That divergence makes fight-or-flight a whole-body event, and the adrenal medulla joins in as a modified ganglion whose chromaffin cells dump epinephrine into the bloodstream. The parasympathetic division is craniosacral: long preganglionic fibers travel in cranial nerves — mostly the vagus — and sacral nerves to terminal ganglia sitting on or inside the target organs. Most organs receive both; the heart\'s rate is a tug-of-war between them. The chemistry is tidy: all preganglionic fibers release acetylcholine onto nicotinic receptors; parasympathetic postganglionic fibers keep using acetylcholine, on muscarinic receptors; sympathetic postganglionic fibers usually release norepinephrine onto adrenergic receptors.',
      },
      {
        kind: 'example',
        title: 'Worked Example: The Fallen Wrist',
        steps: [
          'Identify what is asked: why a man who slept with his arm draped over a chair back wakes unable to extend his wrist, though he can grip once the hand is straightened for him.',
          'Recall the wiring: the radial nerve, off the brachial plexus, spirals around the humerus carrying motor fibers to the wrist and finger extensors and sensory fibers from the back of the hand.',
          'Apply: hours of compression shut down conduction — the mechanism the action-potential lesson describes — so the extensors get no command, while the flexors, served by the median and ulnar nerves, pull the hand into a flexed droop.',
          'State the result: "Saturday night palsy," a radial compression neuropathy. The Schwann tubes are intact, so conduction typically returns over days to weeks — unlike a transected cord.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Stroke triage runs on the crossing wiring: one hemisphere\'s stroke weakens the other side of the body, and the deficit pattern names the region before any scan.',
          'Multiple sclerosis demyelinates CNS tracts; Guillain-Barré demyelinates peripheral nerves — one insulation, two compartments, different symptoms and treatments.',
          'Neuropathies from diabetes or chemotherapy strike the longest nerves first, so numbness arrives in a stocking-and-glove pattern; conduction studies quantify the slowdown.',
          'Autonomic pharmacology is receptor bookkeeping: beta-blockers restrain sympathetic drive to the heart, atropine blocks muscarinic receptors, and epinephrine replays the adrenal medulla.',
          'Vagus-nerve stimulators, implanted for epilepsy and depression, ride the parasympathetic main cable linking brainstem, heart, and gut.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The ten-percent-of-the-brain myth is exactly that: imaging shows roughly eighty percent of the brain consuming energy even during simple tasks. Second, the optic "nerve" is brain tissue — a CNS tract — which is partly why it does not regenerate the way a peripheral nerve can. Third, sympathetic and parasympathetic are not an on/off pair: both run continuously, and each organ sits at a balance point that shifts with circumstance.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Central nervous system (CNS)', def: 'Brain plus spinal cord, encased in skull and vertebral column.' },
          { term: 'Peripheral nervous system (PNS)', def: 'All nervous tissue beyond brain and cord — the nerves and ganglia.' },
          { term: 'Ganglion', def: 'A cluster of neuron cell bodies in the periphery; its CNS counterpart is a nucleus.' },
          { term: 'Tract', def: 'A bundle of axons within the CNS; the same bundle in the periphery is a nerve.' },
          { term: 'Astrocyte', def: 'CNS glial cell that supports neurons and helps build the blood-brain barrier.' },
          { term: 'Oligodendrocyte', def: 'CNS glial cell that myelinates many axon segments; the target in multiple sclerosis.' },
          { term: 'Nerve plexus', def: 'An interchange where spinal-nerve fibers re-sort into the named nerves of the limbs.' },
          { term: 'Preganglionic fiber', def: 'The CNS neuron of an autonomic two-neuron chain; always cholinergic.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A bundle of axons running from the spinal cord to the muscles of the foot is called a:',
            options: ['tract', 'nerve', 'ganglion', 'nucleus'],
            answer: 1,
            explain: 'Outside the CNS the bundle is a nerve; inside brain or cord it would be a tract.',
          },
          {
            q: 'Myelin around axons in the brain and spinal cord is made by:',
            options: ['Schwann cells', 'oligodendrocytes', 'astrocytes', 'satellite cells'],
            answer: 1,
            explain: 'Oligodendrocytes myelinate CNS segments, one cell reaching several; Schwann cells do the periphery, one segment each.',
          },
          {
            q: 'The phrenic nerve, which commands the diaphragm, comes from the:',
            options: ['brachial plexus', 'cervical plexus', 'lumbar plexus', 'sacral plexus'],
            answer: 1,
            explain: 'The cervical plexus (C1–C5) sends the phrenic nerve to the diaphragm — why cord injuries above C3 stop breathing.',
          },
          {
            q: 'Sympathetic postganglionic neurons usually release:',
            options: ['acetylcholine onto nicotinic receptors', 'norepinephrine onto adrenergic receptors', 'dopamine onto D1 receptors', 'epinephrine onto muscarinic receptors'],
            answer: 1,
            explain: 'Norepinephrine onto adrenergic receptors is the sympathetic signature; all preganglionic fibers, in both divisions, use acetylcholine onto nicotinic receptors.',
          },
          {
            q: 'The spinal cord proper ends near the upper lumbar vertebrae; the continuing bundle of nerve roots below it is the:',
            options: ['cauda equina', 'conus medullaris', 'filum terminale', 'sympathetic chain'],
            answer: 0,
            explain: 'The cord stops growing in toddlerhood while the column lengthens, leaving the lower roots to stream down as the cauda equina.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: the action-potential lesson for the signal and the synapse lesson for the chemistry between neurons. Pair with the brain-map lesson for cortical geography and the plasticity lesson for how those maps redraw; the senses lesson takes the input half of this network from here.',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-anatomy-senses-perception',
    title: 'The Senses: How the Body Reads the World',
    domain: 'Life Sciences',
    field: 'Anatomy & Physiology',
    branch: 'Human Body Systems',
    tier: 'intermediate',
    concepts: [
      'Sensation versus perception',
      'Receptor classes: structure, location, modality',
      'Somatosensation: touch, proprioception, pain',
      'Taste and smell: the chemical senses',
      'Hearing and balance from one hair-cell mechanism',
      'Vision: rods, cones, and phototransduction',
      'Ascending pathways and the sensory homunculus',
      'Sensory adaptation',
    ],
    words: 1830,
    readMins: 9,
    addedOn: '2026-10-19',
    blocks: [
      {
        kind: 'para',
        text: 'You have never actually seen the world — only your brain\'s reconstruction of it. Sensation is the raw half: receptors converting photons, pressure waves, and dissolved molecules into the nervous system\'s single currency, the nerve impulse. Perception is the constructed half: those impulses woven into color, flavor, music, and ache. This topic walks the human sensorium — receptor families, body-wide somatic senses, the special senses with their dedicated organs, and the pathways that deliver them. The impulse mechanism belongs to the action-potential lesson; other species\' stranger sensory worlds, to the animal-senses tour.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Clinical neuroscience is largely sensory wiring: a cochlear implant works because the cochlea\'s frequency map survives the death of its hair cells; a map of missing visual fields can point to a tumor pressing on the optic chiasm; smell lost after head injury is olfactory axons sheared at the cribriform plate. Sensory health is also a public-health budget line — noise, uncorrected vision, newborn hearing screening.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Everything starts with transduction: a stimulus changes a receptor cell\'s membrane potential until a nerve impulse fires toward the CNS. Receptors sort three ways. By structure: bare free nerve endings (pain, temperature), connective-tissue-encapsulated endings (touch, pressure), and dedicated receptor cells (the retina\'s photoreceptors). By location: exteroceptors face the outside world, interoceptors report the viscera, and proprioceptors track muscles, tendons, and joints. By stimulus: chemoreceptors for taste and smell, mechanoreceptors for touch, sound, and balance, thermoreceptors, nociceptors for damaging stimuli, photoreceptors for light. Distributed senses like touch are general; the special senses — taste, smell, hearing, balance, vision — get whole organs of their own.',
      },
      {
        kind: 'para',
        text: 'The skin is wired with a cast of mechanoreceptors, each tuned to a job. Free nerve endings carry pain and temperature. Merkel cells at the epidermal–dermal junction read fine texture; tactile (Meissner) corpuscles — densest in fingertips and lips — catch light touch; deep lamellated (Pacinian) corpuscles register deep pressure and fast vibration; bulbous (Ruffini) corpuscles report stretch; a hair-follicle plexus fires when anything bends a hair. In muscle, spindles monitor stretch while Golgi tendon organs gauge tendon tension — together the proprioception that lets you touch your nose with eyes closed. Nociceptors have a famous quirk: capsaicin, the burn of chili, binds the same ion channel that opens above body temperature — which is why pepper feels hot, and why capsaicin creams, holding that channel open until it fatigues, end up quieting pain.',
      },
      {
        kind: 'para',
        text: 'Taste and smell both read chemistry. Taste buds nest in the tongue\'s papillae, each packed with gustatory cells: salty is sodium ions drifting in, sour is hydrogen ions from acids, while sweet, bitter, and savory (umami — the taste of glutamate) work through G-protein-coupled receptors. Bitter receptors crowd the back of the tongue, near the gag reflex they arm against plant toxins; the facial nerve serves the front, the glossopharyngeal the rear, the vagus the throat. Smell is vaster: olfactory neurons in a patch of upper nasal cavity, their axons threading through the cribriform plate to the olfactory bulb. Olfaction is the one sense that skips the thalamic relay, wiring almost directly into cortex and limbic system — the reason a smell can ambush a memory. Those neurons are replaced every month or two, a renewal that fades with age — one reason elderly people over-salt their food, a habit with cardiovascular consequences.',
      },
      {
        kind: 'para',
        text: 'Hearing is a chain of mechanical conversions. The auricle funnels sound onto the tympanic membrane, whose vibration rocks the three ossicles — malleus, incus, stapes, the body\'s smallest bones — against the oval window. Inside the cochlea, fluid waves travel the scala vestibuli and scala tympani on either side of the cochlear duct, flexing the basilar membrane; the organ of Corti rides it, its hair cells\' stereocilia shearing against the tectorial membrane — bending toward the tallest member opens ion channels and fires the fiber. The coil is tuned along its length: high frequencies flex the base, low the apex, spanning 20 to 20,000 hertz. The same hair cells run balance: the utricle and saccule weigh head position through otolith-studded membranes, the three semicircular canals detect rotation as their fluid lags and deflects each cupula, and vestibular connections drive the reflex that keeps gaze stable while the head moves. Hair cells never regenerate — the hearing lesson covers what medicine does about that.',
      },
      {
        kind: 'para',
        text: 'The eye is built in three coats: an outer fibrous tunic of tough sclera and clear, light-bending cornea; a middle vascular tunic of choroid, ciliary body, and iris; and the inner neural tunic — the retina, an outpost of brain tissue. The retina is a tiny circuit: photoreceptors drive bipolar cells, which drive retinal ganglion cells whose axons leave as the optic nerve. Rods carry rhodopsin, sensitive enough that a single photon can register, but they report only grayscale; cones carry three opsins peaking near 564, 534, and 420 nanometers, and color is the brain\'s comparison of their ratios. At the fovea the wiring is one cone to one ganglion cell — maximum sharpness; toward the periphery up to fifty photoreceptors converge on one ganglion cell, trading acuity for sensitivity. Where the optic nerve exits there are no photoreceptors: the blind spot. A photon flips the retinal cofactor from 11-cis to all-trans, and the bleached pigment must be reset — the physiology behind afterimages. Focusing and its failures are the eye-care lesson\'s territory.',
      },
      {
        kind: 'para',
        text: 'Once transduced, everything must be routed. Sensations below the neck climb two spinal systems: the dorsal column system, carrying fine touch and proprioception, crossing in the medulla; and the spinothalamic tract, carrying pain and temperature, crossing at its entry level in the cord. The face reports through the trigeminal pathway. Nearly all of it relays through the thalamus before landing in the primary somatosensory cortex behind the central sulcus, laid out as the homunculus — a body map with enormous lips and fingertips, scaled to receptor density. Vision takes the strangest route: fibers from the medial half of each retina cross at the optic chiasm, so each hemisphere sees the opposite visual field en route to the occipital cortex, while the brainstem compares the ears\' inputs by tiny timing and loudness differences to localize sound. And perception edits itself: constant stimuli fade as receptors adapt — you stop feeling your shirt within seconds — while proprioceptors and nociceptors, usefully, barely adapt at all. Prism-glasses experiments show the cortex re-mapping its inputs within days.',
      },
      {
        kind: 'formula',
        name: 'Interaural time difference',
        latex: '\\Delta t = \\frac{d\\,\\sin\\theta}{v}',
        meaning: 'A sound at angle θ from straight ahead reaches the two ears separated by Δt; d is the ear-to-ear distance, v the speed of sound (about 343 meters per second). Directly to one side, the delay is roughly half a millisecond — measured by the brainstem to localize the source.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Vanishing Side Vision',
        steps: [
          'Identify what is asked: why a patient with an enlarging pituitary gland loses only the outermost slivers of both visual fields while central vision stays sharp.',
          'Recall the wiring: fibers from the medial half of each retina cross at the optic chiasm, and those crossed fibers carry the lateral visual fields.',
          'Apply: the pituitary sits directly beneath the chiasm, so a growing tumor compresses exactly the crossing fibers — the peripheral-field traffic — while sparing the uncrossed ones.',
          'State the result: loss of lateral vision on both sides, the signature of chiasmal compression — an optometrist\'s field map is sometimes the first test to find a pituitary tumor.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Cochlear implants skip dead hair cells entirely, stimulating the spiral ganglion\'s frequency map with electrode arrays — pitch by position, the cochlea\'s own code.',
          'Visual-field testing (perimetry) localizes damage along the pathway — eye, chiasm, tract, or cortex — before any scanner is booked.',
          'Capsaicin patches outlast their burn: sustained channel binding desensitizes nociceptors, a topical option for nerve pain.',
          'Smell loss after head trauma is olfactory axons shearing at the cribriform plate; because flavor is mostly retronasal smell, anosmia strips the pleasure from food and pushes eaters toward excess salt.',
          'Braille readers\' fingertip maps expand in the somatosensory cortex — the plasticity lesson\'s evidence that the homunculus is a living document.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The tongue taste map is a myth: all five tastes are sensed across the whole tongue, with only subtle density differences by region. The "five senses" count is folklore too — balance, proprioception, temperature, and pain bring the real modality list past a dozen. And you cannot see colors in a dim room: low light is rod territory, grayscale by design — any color you think you see is memory filling in.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Transduction', def: 'Conversion of a stimulus into a change in a receptor\'s membrane potential.' },
          { term: 'Sensory modality', def: 'The type of stimulus a receptor encodes — the label on the sensory traffic.' },
          { term: 'Nociceptor', def: 'A free nerve ending that fires to stimuli that damage or threaten tissue.' },
          { term: 'Proprioception', def: 'The sense of body position, from muscle spindles, tendon organs, and joints.' },
          { term: 'Special senses', def: 'Taste, smell, hearing, balance, and vision — the senses with dedicated organs.' },
          { term: 'Tonotopy', def: 'The cochlea\'s frequency map: high pitches at the base, low at the apex.' },
          { term: 'Fovea', def: 'The all-cone retinal center with one-to-one wiring, where acuity peaks.' },
          { term: 'Sensory adaptation', def: 'The fading response of a receptor to an unchanging stimulus.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Pain and temperature from the skin are transduced by:',
            options: ['free nerve endings', 'Meissner corpuscles', 'muscle spindles', 'cone cells'],
            answer: 0,
            explain: 'Nociceptors and thermoreceptors are bare free nerve endings in the dermis — no capsule, no dedicated organ.',
          },
          {
            q: 'Which sense bypasses the thalamus on its way to the cerebral cortex?',
            options: ['Vision', 'Hearing', 'Smell', 'Taste'],
            answer: 2,
            explain: 'Olfactory axons run almost directly to cortex and limbic structures — why smells trigger memories so easily.',
          },
          {
            q: 'High-frequency sounds flex the basilar membrane nearest:',
            options: ['the apex of the cochlea', 'the base, near the oval window', 'the tectorial membrane', 'the middle ear'],
            answer: 1,
            explain: 'Tonotopy: stiff, narrow base for high frequencies; wide apex for low — the cochlea as a spread-out piano.',
          },
          {
            q: 'Visual acuity is sharpest at the fovea because:',
            options: ['it has the most rods', 'each cone drives a single ganglion cell, with no overlying blood vessels', 'it is closest to the lens', 'its photoreceptors regenerate daily'],
            answer: 1,
            explain: 'One-to-one wiring and a vessel-free zone give the fovea maximum resolution; the periphery converges up to fifty photoreceptors per ganglion cell.',
          },
          {
            q: 'Fine touch and proprioception from the legs reach the cortex via:',
            options: ['the spinothalamic tract', 'the dorsal column system, crossing in the medulla', 'the trigeminal pathway', 'the optic tract'],
            answer: 1,
            explain: 'The dorsal column system carries them upward and crosses in the medulla; the spinothalamic tract carries pain and temperature and crosses in the cord.',
          },
          {
            q: 'Umami is the taste of:',
            options: ['sodium ions', 'acids', 'glutamate', 'glucose'],
            answer: 2,
            explain: 'The savory taste tracks L-glutamate through a G-protein-coupled receptor — the signature of protein-rich food.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: the action-potential lesson for the nerve impulse and the nervous-system command lesson for the wiring these signals travel. The hearing and eye-care lessons take the clinical half of audition and vision; the pain lesson covers nociception gone chronic; the animal-senses tour shows what other species do with the same physics.',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-anatomy-reproduction-development',
    title: 'Reproduction and the Making of a Human',
    domain: 'Life Sciences',
    field: 'Anatomy & Physiology',
    branch: 'Human Body Systems',
    tier: 'intermediate',
    concepts: [
      'Testes, ducts, and accessory glands',
      'Spermatogenesis: a 64-day pipeline',
      'Ovaries, follicles, and the uterine cycle',
      'Oogenesis: meiosis on hold since before birth',
      'Fertilization and the blocks to polyspermy',
      'Cleavage, implantation, and gastrulation',
      'Fetal growth and the three circulatory shunts',
      'Labor as a positive-feedback cascade',
    ],
    words: 1829,
    readMins: 9,
    addedOn: '2026-10-19',
    blocks: [
      {
        kind: 'para',
        text: 'It is the one organ system you could lose and still live a full life — because it does not exist for you. Its product is the next human. The male system is a continuous factory: sperm made daily from puberty onward, matured, stored, delivered. The female system advances one oocyte at a time on a monthly rhythm — then does what no other system attempts: it houses, feeds, and delivers a whole new person. This topic covers both systems, the making and meeting of the gametes, and the thirty-eight-week construction project that follows.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'IVF has produced millions of births since 1978 by operating this anatomy from the outside — stimulating follicles, retrieving oocytes, injecting single sperm. The biggest public-health wins in pregnancy, from folic-acid fortification to alcohol warnings, are developmental-timing rules written into policy. The hormones\' wider story belongs to the endocrine lesson; cycles, contraception, and the maternal side to the sexual-health and pregnancy lessons.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The paired testes hang in the scrotum because sperm production runs best two to four degrees below core temperature; dartos and cremaster muscles shorten or lengthen the scrotum to hold that window. Inside, sperm develop in coiled seminiferous tubules where Sertoli cells nurse the germ cells behind the blood-testis barrier while Leydig cells make testosterone. Sperm then mature in the epididymis — six meters of coiled duct — gaining motility over about twelve days before storage. At ejaculation they race up the muscular ductus deferens (the vasectomy\'s target), gathering cargo: fructose-rich seminal-vesicle fluid, most of the volume and the sperm\'s fuel; an alkaline prostate secretion that lets semen coagulate and then liquefy; and lubricating bulbourethral pre-ejaculate, which can carry stray sperm. Erection is hydraulic — nitric oxide dilates the penile arteries, blood fills the corpora cavernosa, and venous drainage compresses shut — the pathway sildenafil (Viagra) keeps open.',
      },
      {
        kind: 'para',
        text: 'The production line runs continuously. Spermatogonia — stem cells at the tubule\'s edge — divide by mitosis; one daughter stays a stem cell, the other becomes a primary spermatocyte that enters meiosis: two divisions later, four haploid spermatids, which spermiogenesis reshapes into a head with a compact nucleus and enzyme-capped acrosome, a mitochondria-packed mid-piece, and a lashing flagellum. A full cycle takes about 64 days, with new cohorts every 16, yielding 100 to 300 million sperm daily. The throttle is hormonal: hypothalamic GnRH drives pituitary LH (commanding Leydig cells\' testosterone) and FSH (commanding Sertoli cells); testosterone and inhibin feed back to close the loop — an axis the endocrine lesson maps in full.',
      },
      {
        kind: 'para',
        text: 'Female anatomy is built around an itinerary. Each ovary stocks its follicles — an oocyte wrapped in granulosa cells — from before birth. At ovulation the oocyte bursts free near the fimbriated mouth of a uterine tube, where cilia sweep it toward the uterus; the usual rendezvous with sperm is the tube\'s ampulla. The uterus is mostly myometrium — smooth muscle built for labor — lined by the endometrium, whose stratum functionalis thickens each month and sheds if no embryo implants; the cervix guards the entrance, and the Lactobacillus-kept vagina is both entrance and birth canal. Oogenesis is strikingly asymmetric: a girl is born with one to two million primary oocytes already arrested in meiosis I; perhaps 400,000 remain at puberty, and only a few hundred ever ovulate. Each cycle an LH surge completes the first division — unequally, so nearly all the cytoplasm stays with the secondary oocyte — then meiosis pauses again until a sperm penetrates. The oocyte also supplies the embryo\'s every mitochondrion: mitochondrial DNA traces an unbroken maternal line.',
      },
      {
        kind: 'para',
        text: 'The cycle is that machinery on a clock. FSH recruits a cohort of follicles; the dominant one pours out estrogen until, past a threshold, negative feedback flips positive — the LH surge that triggers ovulation at about day 14. The spent follicle becomes the corpus luteum, whose progesterone readies the endometrium; if no embryo rescues it with hCG, the luteum degenerates, spiral arteries clamp shut, and the stratum functionalis sheds as menses. The full choreography — fertile windows and the contraception that exploits them — is the sexual-health lesson\'s subject.',
      },
      {
        kind: 'para',
        text: 'Fertilization is attrition followed by precision. Of the hundreds of millions of sperm ejaculated, vaginal acidity, cervical mucus, and phagocytes cut the field to a few thousand reaching the tube; sperm can wait there three to five days, but the oocyte survives only about a day after ovulation. En route the tract\'s fluids capacitate the sperm, priming the membrane over the head. The oocyte wears two barriers — the corona radiata and the glycoprotein zona pellucida — and hundreds of sperm spill acrosomal enzymes to carve the path wider: the first arrivals never fertilize; they fall so the winner can. When one fuses, the oocyte slams the doors: a fast block depolarizes the membrane, and the slow block — the cortical reaction — hardens the zona into a fertilization membrane, because a triploid embryo cannot live. The pronuclei merge, and the zygote begins to divide. Two eggs released and fertilized makes fraternal twins; one early embryo splitting makes identical ones.',
      },
      {
        kind: 'para',
        text: 'Week one is travel and division: cleavage packs the zygote into a morula, then a blastocyst — outer trophoblast (future placenta) around an inner cell mass (future embryo) — which hatches, implants, and announces itself with hCG, the hormone every pregnancy test reads. Weeks three to eight, the embryo assembles: gastrulation lays down ectoderm, mesoderm, and endoderm (the developmental-biology lesson traces the logic); the neural tube closes by about day 28 — before most tests turn positive, which is why folate must precede conception; the heart beats in week four; by week eight every organ system exists in outline, three centimeters long. The fetal period is growth and rehearsal: sexes differentiate from bipotential gonads in weeks nine to twelve (until then, embryos are morphologically identical); the mother feels movement by sixteen to twenty weeks; lungs make surfactant and myelination begins from weeks twenty-one to thirty; and blood detours around the fluid-filled lungs and half-built liver through three shunts — ductus venosus, foramen ovale, ductus arteriosus — that close with the first breath. Labor is a positive-feedback cascade: progesterone\'s brake fades, fetal cortisol and estrogen rise, and oxytocin with prostaglandins drive contractions that stretch the cervix, which calls for more oxytocin — through dilation to ten centimeters, delivery, and the afterbirth. The pregnancy lesson takes the maternal side from here.',
      },
      {
        kind: 'example',
        title: 'Worked Example: The Fertility Window',
        steps: [
          'Identify what is asked: why intercourse two days before ovulation can still conceive, while intercourse the day after ovulation generally cannot.',
          'Recall the cell biology: capacitated sperm survive in the uterine tubes for three to five days; the oocyte survives only about twenty-four hours.',
          'Apply: sperm deposited on day twelve of a typical cycle can still be waiting — alive and capacitated — when the oocyte arrives on day fourteen; an oocyte ovulated on day fourteen has no second chance on day fifteen.',
          'State the result: the fertile window opens days before ovulation and closes about a day after — the asymmetry behind fertility-awareness calendars and clinic scheduling alike.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'IVF: gonadotropins ripen 10 to 20 oocytes at once, needles retrieve them under ultrasound, and roughly 75,000 washed sperm meet each egg in the dish — or one sperm is injected when count or motility fails (ICSI). Success tops 40 percent under 35 and falls steeply past 40.',
          'Vasectomy interrupts the ductus deferens through the scrotum in minutes: sperm are still made but reabsorbed — anatomy\'s simplest sterilization, and considered permanent.',
          'Folic-acid fortification of grain cut neural-tube defects sharply: the tube closes by week four, usually before a test turns positive.',
          'Premature lungs are rescued with surfactant replacement and CPAP — medicine supplying what weeks twenty-one to thirty would have built.',
          'Mitochondrial DNA rides only in the oocyte\'s cytoplasm, tracing an unbroken maternal line — the basis of "mitochondrial Eve" ancestry mapping.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Fertilization does not happen in the uterus — it happens in the uterine tube, and the embryo spends about a week traveling before implanting. The first sperm to arrive never fertilizes the egg; hundreds must digest the path first, which is why sperm counts matter. Male and female embryos are not anatomically distinct from the start — they are morphologically identical until week nine. And the placenta is not a filter: alcohol, nicotine, and several pathogens cross it freely, which is the entire basis of fetal alcohol spectrum disorders.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Spermatogenesis', def: 'The roughly 64-day pipeline from stem cell to formed sperm, running from puberty onward.' },
          { term: 'Oogenesis', def: 'The female gamete program: begins before birth, arrests twice, completes at fertilization.' },
          { term: 'Follicle', def: 'An oocyte plus its granulosa cells — the ovary\'s functional unit.' },
          { term: 'Corpus luteum', def: 'The progesterone factory formed from the spent follicle; without hCG it degenerates.' },
          { term: 'Capacitation', def: 'The female tract\'s priming of sperm membranes, without which fertilization cannot occur.' },
          { term: 'Acrosomal reaction', def: 'Release of digestive enzymes from the sperm cap that carve a path through the oocyte\'s coverings.' },
          { term: 'Blastocyst', def: 'The hundred-cell stage: trophoblast outside, embryo-forming inner cell mass within.' },
          { term: 'Placenta', def: 'The fetal organ of nutrition, gas exchange, waste removal, and hormones, where maternal and fetal blood never mix.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Fertilization most often occurs in the:',
            options: ['uterus', 'ampulla of the uterine tube', 'ovary', 'cervix'],
            answer: 1,
            explain: 'Sperm meet the oocyte in the tube\'s widest portion; the embryo spends about a week traveling before implanting.',
          },
          {
            q: 'Meiosis II of the oocyte is completed:',
            options: ['at ovulation', 'only if a sperm penetrates the cell', 'before birth', 'at puberty'],
            answer: 1,
            explain: 'The secondary oocyte is arrested in meiosis II; sperm entry triggers the finishing division and the second polar body.',
          },
          {
            q: 'The fructose that fuels swimming sperm comes from the:',
            options: ['prostate gland', 'seminal vesicles', 'bulbourethral glands', 'epididymis'],
            answer: 1,
            explain: 'Seminal-vesicle fluid is most of the semen volume and carries the sugar sperm mitochondria burn.',
          },
          {
            q: 'The slow block to polyspermy is:',
            options: ['the cortical reaction hardening the zona pellucida into a fertilization membrane', 'membrane depolarization', 'thickening of cervical mucus', 'exhaustion of the sperm'],
            answer: 0,
            explain: 'Cortical granules release proteins that strip attached sperm and harden the zona; depolarization is the fast, transient first block.',
          },
          {
            q: 'Folate supplementation must begin before conception because:',
            options: ['the neural tube closes by about day 28, before most pregnancy tests turn positive', 'meiosis requires folate', 'the placenta blocks folate later in pregnancy', 'taste aversions begin in week two'],
            answer: 0,
            explain: 'The foundation of brain and spinal cord closes in week four — often before the pregnancy is known.',
          },
          {
            q: 'In the fetus, the foramen ovale:',
            options: ['shunts blood from the right atrium to the left, bypassing the lungs', 'oxygenates blood in the liver', 'seals shut at week eight', 'feeds the placenta directly'],
            answer: 0,
            explain: 'With fluid-filled, nonfunctional lungs, blood crosses the atrial wall directly; the first breath\'s pressure shift slams it shut.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The endocrine lesson covers the HPG axis behind gametogenesis; the genetics lessons pick up those genes at fertilization; the developmental-biology lesson explains how the embryo patterns itself; the sexual-health and pregnancy lessons cover the clinical and maternal sides. Continue with lactation and the newborn\'s first breath.',
        tone: 'path',
      },
    ],
  },
]
