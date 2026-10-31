/**
 * Knowledge Universe — Clinical Medicine — Chapter 01: Chronic & Metabolic Disease
 * 2 lessons · ~2,882 words
 * field: Disease & Treatment
 * legacy sources: health-wellness.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Chronic Disease]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 health-diabetes-metabolic-health — Diabetes and Metabolic Health: When Blood Sugar Runs Off the Rails
 *   01.2 health-heart-vascular-disease — Heart and Vascular Disease: Atherosclerosis, Risk and Prevention
 */
import type { KnowledgeTopic } from '../../types'

export const clinicalMedicineCh01: KnowledgeTopic[] = [
  {
    id: 'health-diabetes-metabolic-health',
    title: 'Diabetes and Metabolic Health: When Blood Sugar Runs Off the Rails',
    domain: 'Health & Wellness',
    field: 'Disease & Treatment',
    branch: 'Chronic Disease',
    tier: 'core',
    concepts: [
      'How the body normally holds blood glucose steady',
      'Type 1: an autoimmune strike on insulin factories',
      'Type 2: resistance first, exhaustion later',
      'Prediabetes: the reversible warning lane',
      'HbA1c: a three-month memory of blood sugar',
      'Small-vessel and large-vessel complications',
      'Management: lifestyle, tablets, hormones and technology',
    ],
    words: 1459,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Every cell in the body runs on glucose, and the blood carries it in a band so narrow that a teaspoon too much or too little counts as a medical event. The hormone insulin is the gatekeeper — the anatomy lessons covered how the pancreas senses sugar and releases it in a feedback loop. Diabetes is what happens when that loop breaks. This Disease & Treatment topic explains the two main types, why the damage accumulates silently for years, and how modern management — from a walk after dinner to continuous glucose sensors — keeps the rails back on.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Over half a billion adults live with diabetes, and nearly half of them do not yet know it: the disease can simmer for years without symptoms while quietly damaging eyes, kidneys, nerves and arteries. Type 2, which dominates, is largely preventable — and its warning stage, prediabetes, is genuinely reversible.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'In a healthy system, blood glucose sits near 5 millimoles per liter (about 90 milligrams per deciliter) between meals, rises modestly after eating, and is parked away within two hours. Insulin from the pancreas\'s beta cells commands muscle and fat tissue to absorb glucose and signals the liver to store it; between meals, glucagon releases it again. Diabetes is defined by numbers: a fasting glucose of 126 mg/dL or higher, a two-hour value over 200 after a standard sugar drink, or an HbA1c of 6.5 percent or more.',
      },
      {
        kind: 'para',
        text: 'Type 1 diabetes is friendly fire. The immune system — whose tolerance machinery was unpacked in the immunology lesson — mistakes the pancreatic beta cells for enemies and destroys them, leaving the body with little or no insulin. It can begin at any age but classically surges in childhood and young adulthood, often announcing itself over days to weeks with thirst, floods of urine, and weight loss as the body burns fat in sugar\'s absence. It is not caused by eating sugar, and it always requires insulin — by pen or pump — to survive.',
      },
      {
        kind: 'para',
        text: 'Type 2 is a slower, quieter story and accounts for about nine cases in ten. Cells respond sluggishly to insulin — resistance — and the beta cells compensate by pumping out more, often for years. Blood sugar stays normal while the system runs hot; by the time it climbs, the beta cells have been overworking for a decade or more, and their capacity slowly erodes. Family history, weight gain, inactivity, and age all raise the risk, and what was once called "adult-onset" now appears in teenagers. Because symptoms arrive late, the diagnosis often lands only through a routine blood test — or when a complication speaks first.',
      },
      {
        kind: 'para',
        text: 'Between normal and diabetes lies prediabetes: an HbA1c of 5.7 to 6.4 percent or fasting glucose of 100 to 125 mg/dL. It has no symptoms, which is the point of screening. The landmark Diabetes Prevention Program found that structured lifestyle change — about 150 minutes of weekly activity and a modest 7 percent weight loss — cut progression to diabetes by 58 percent over three years, outperforming metformin, the standard first-line tablet, at 31 percent. The warning lane is not a life sentence; it is a fork in the road.',
      },
      {
        kind: 'para',
        text: 'Doctors measure control with HbA1c: glucose permanently gummed onto hemoglobin inside red blood cells. Because those cells live about four months, the test reads like a three-month average of blood sugar — no fasting, no memory of yesterday\'s cake required. It is the number treatment targets: many adults aim for below 7 percent, with targets individualized upward for the frail and tighter in pregnancy. Daily finger-prick sensors and continuous glucose monitors add the minute-to-minute picture the average hides.',
      },
      {
        kind: 'para',
        text: 'Complications are the disease\'s long game, and they follow from sugar-coated proteins and damaged vessel walls. Small vessels go first and worst: retinopathy threatens vision (a leading cause of blindness in working-age adults), nephropathy can end in dialysis (diabetes is the top reason for kidney failure worldwide), and neuropathy numbs feet until a blister becomes an ulcer. Large vessels suffer too — heart attack and stroke risk runs two to four times higher — which is why diabetes care is quietly cardiovascular care. The landmark trials of the 1990s proved that tight control slashes these outcomes; the damage is cumulative, and so is the protection.',
      },
      {
        kind: 'para',
        text: 'Management now runs on three engines. Type 1 is an engineering problem: insulin dosed to match food and activity, increasingly guided by continuous sensors and hybrid closed-loop pumps that act almost like an artificial pancreas. Type 2 starts with the pyramid base everyone can act on — activity, weight, sleep, a Mediterranean-style pattern — then adds metformin, and newer drugs that carry independent benefits for heart and kidney disease or weight. Insulin arrives later when needed. Low blood sugar — shakiness, sweating, confusion — is the main hazard of treatment; the rule is fast carbohydrates, recheck in fifteen minutes, and the first-aid lesson\'s rule that unconscious means emergency, never a drink.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Estimated average glucose from HbA1c',
        latex: 'eAG \\,(\\text{mg/dL}) = 28.7 \\times \\text{A1c} - 46.7',
        meaning: 'Each percentage point of HbA1c translates to roughly 29 mg/dL of average blood glucose — the arithmetic linking the lab report to daily life.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a lab returns an HbA1c of 7.4 percent. What has the average blood sugar been, and what average corresponds to the common 7 percent target?',
          'Recall the governing idea: the ADAG study calibrated the formula eAG = 28.7 × A1c − 46.7, converting the three-month memory into daily units.',
          'Apply: at 7.4 percent, eAG = 28.7 × 7.4 − 46.7 ≈ 166 mg/dL. The 7 percent target corresponds to 28.7 × 7 − 46.7 ≈ 154 mg/dL — so roughly a 12 mg/dL average separates the two.',
          'State the result: the past three months have averaged about 166 mg/dL; reaching the standard target means trimming the average by about a dozen units — the scale of change that losing 5 kilograms or adding a daily walk often achieves in early type 2 diabetes.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Continuous glucose monitors and insulin pumps close the feedback loop diabetes breaks, in real time.',
          'Pharmacies and primary-care clinics screen with quick A1c tests, catching the silent years before complications.',
          'Structured lifestyle programs modeled on the Diabetes Prevention Program run at scale in health systems.',
          'Retinal photography in ordinary clinics screens for eye damage without an ophthalmology appointment.',
          'Newer drug classes now protect kidneys and hearts independently of their glucose-lowering effect.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: '"A touch of sugar" is the most dangerous phrase in the vocabulary — prediabetes ignored is diabetes scheduled. The second error is blaming people with type 1 for their disease: it is autoimmune, not a dessert problem. Third, stopping medication when the numbers improve reverses the causality — the numbers improved because of the medication. And beware cure claims: no supplement, berry, or fasting protocol regenerates destroyed beta cells.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Insulin', def: 'The pancreatic hormone that moves glucose out of blood into muscle, fat and liver storage.' },
          { term: 'Insulin resistance', def: 'Cells answering insulin weakly, forcing beta cells to overproduce to compensate.' },
          { term: 'Type 1 diabetes', def: 'Autoimmune destruction of insulin-producing beta cells; absolute insulin deficiency.' },
          { term: 'Type 2 diabetes', def: 'Insulin resistance combined with gradual beta-cell decline; about 90 percent of cases.' },
          { term: 'HbA1c', def: 'Glucose bound to hemoglobin, reporting the roughly three-month average blood sugar.' },
          { term: 'Prediabetes', def: 'The reversible warning zone of 5.7 to 6.4 percent HbA1c before diagnostic thresholds.' },
          { term: 'Hypoglycemia', def: 'Blood glucose low enough to cause shakiness, sweating and confusion; treated with fast carbohydrates.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Type 1 diabetes results from:',
            options: ['eating too much sugar in childhood', 'autoimmune destruction of the pancreatic beta cells', 'insulin resistance developed over decades', 'a viral throat infection alone'],
            answer: 1,
            explain: 'The immune system destroys the insulin-producing cells — an absolute deficiency treated with insulin, not lifestyle alone.',
          },
          {
            q: 'An HbA1c of 7 percent corresponds to an estimated average glucose of about:',
            options: ['100 mg/dL', '126 mg/dL', '154 mg/dL', '200 mg/dL'],
            answer: 2,
            explain: '28.7 × 7 − 46.7 ≈ 154 mg/dL, the arithmetic behind the standard adult target.',
          },
          {
            q: 'In the Diabetes Prevention Program, structured lifestyle change cut progression to diabetes by:',
            options: ['about 10 percent', 'about 25 percent', 'about 58 percent', 'nearly 100 percent'],
            answer: 2,
            explain: '150 minutes of weekly activity plus modest weight loss outperformed even metformin in the landmark trial.',
          },
          {
            q: 'Which trio is the classic small-vessel (microvascular) complication set of diabetes?',
            options: ['Eye, kidney and nerve damage', 'Stroke, fracture and asthma', 'Liver, gallbladder and stomach', 'Hair, skin and nail disease'],
            answer: 0,
            explain: 'Retinopathy, nephropathy and neuropathy — the small vessels that sugar-coated proteins damage first.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read after the Life Sciences lessons on hormones and the kidneys, which set up the feedback loop this topic breaks. Natural pairings: the heart-disease lesson (shared risk machinery), obesity and metabolism, and the technology of glucose sensing. Educational, not diagnostic — numbers belong to clinicians.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'health-heart-vascular-disease',
    title: 'Heart and Vascular Disease: Atherosclerosis, Risk and Prevention',
    domain: 'Health & Wellness',
    field: 'Disease & Treatment',
    branch: 'Chronic Disease',
    tier: 'intermediate',
    concepts: [
      'Atherosclerosis: plaque built over decades',
      'Plaque rupture, not gradual narrowing, causes most heart attacks',
      'Fixed versus modifiable risk factors',
      'Blood pressure and cholesterol numbers that matter',
      'Statins and the arithmetic of prevention',
      'Recognizing heart attack and stroke fast',
      'Cardiac rehabilitation and living with heart disease',
    ],
    words: 1423,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'The heart\'s plumbing — four chambers, two circuits, valves and all — was unpacked in the Life Sciences anatomy lesson. This Disease & Treatment topic is about what happens when the pipes fail. Cardiovascular disease kills more people than anything else on earth, about a third of all deaths, yet most of it is one process — atherosclerosis — that develops for decades before it speaks. That silence is the whole challenge: the disease is measurable and treatable long before it is feelable.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'A first heart attack is often the first symptom, because arteries widen outward to hide plaque until late in the process. Prevention therefore runs on numbers — blood pressure, cholesterol, glucose, smoking — rather than on how one feels, and the payoff is enormous: most early cardiovascular disease is avoidable.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Atherosclerosis begins when LDL cholesterol particles slip between the endothelial cells lining artery walls and become chemically damaged there. Immune cells called macrophages swallow the damaged cholesterol and turn into lipid-stuffed foam cells; layers of them under the vessel lining form a fatty streak — found in the arteries of most teenagers. Over years the streak becomes a plaque: a cholesterol core under a fibrous cap, wearing the artery wall from inside.',
      },
      {
        kind: 'para',
        text: 'The surprise for most people is that heart attacks are usually not the slow strangulation of an artery by a big plaque — they are ruptures. Inflammation thins the fibrous cap until it tears, and within minutes platelets swarm the wound and build a clot. If the clot seals a coronary artery, heart muscle downstream dies: a myocardial infarction. The same rupture in a brain artery causes the commonest kind of stroke. Stable, heavily narrowed arteries cause predictable effort-chest pain (angina); the modest, unstable plaques that rupture without warning are the killers.',
      },
      {
        kind: 'para',
        text: 'Risk splits cleanly into what cannot be changed and what can. Fixed: age, sex, and family history — including familial hypercholesterolemia, where LDL runs high from birth in about one person in 250 and untreated heart disease arrives early. Modifiable: smoking (the single largest controllable factor), high blood pressure, high LDL, diabetes, inactivity, excess weight, and heavy drinking. Chronic stress amplifies the others — the stress lesson covered its chemistry. Clinicians feed these variables into risk calculators that output a ten-year probability, because treating risk, not isolated numbers, is the modern rule.',
      },
      {
        kind: 'para',
        text: 'The numbers worth knowing: normal blood pressure sits below 120/80, with 120-139 systolic counted as elevated-to-stage-1 territory and 140/90 and above as stage 2 hypertension (the anatomy lesson covered how the body regulates the set point; here it is the disease threshold that matters, because sustained pressure above roughly 130/80 quietly scours vessel walls, thickens heart muscle, and strains kidneys). For cholesterol, LDL under 100 mg/dL is optimal for most, with targets set lower as overall risk climbs — the lower the LDL over a lifetime, the fewer the events.',
      },
      {
        kind: 'para',
        text: 'Statins are the workhorse of prevention. They block the liver\'s cholesterol-synthesis enzyme, the liver responds by harvesting LDL from the blood with more receptors, and LDL falls 30 to 50 percent. Across the giant trial record that translates to roughly a quarter fewer heart attacks and strokes per millimole of LDL lowered — benefit that compounds with baseline risk, which is why a 65-year-old with prior disease gains far more in absolute terms than a healthy 40-year-old. Blood-pressure medicines earn comparable numbers. Aspirin, famously, does not: its bleeding cost now outweighs routine use in healthy people, and it belongs only where a clinician prescribes it.',
      },
      {
        kind: 'para',
        text: 'When disease speaks, speed decides the outcome. A heart attack classically presses rather than stabs — heaviness in the center of the chest, spreading to arm, neck or jaw, with sweat, nausea, breathlessness; women, older adults and people with diabetes often get quieter versions. Stroke is flagged FAST: a drooping Face, weak Arm, slurred Speech — Time to call emergency services. In both cases the motto is the same: muscle and brain die by the minute, and the ambulance is the first ward of the hospital, not a taxi for the stubborn.',
      },
      {
        kind: 'para',
        text: 'Survivors enter a second act that medicine keeps improving. Cardiac rehabilitation — supervised exercise, medication tuning, and education — measurably cuts readmissions and death, yet stays under-attended. Stents prop open culprit arteries; bypass grafts rebuild the network; pacemakers and defibrillators manage rhythm; and when the pump itself weakens into heart failure, device therapy and drug sequences extend life for years. The condition becomes chronic, manageable, and very much worth managing.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Ejection fraction',
        latex: 'EF = \\frac{SV}{EDV} \\times 100\\%',
        meaning: 'The stroke volume pumped per beat (SV) divided by the filled ventricle (EDV); normal is 50 to 70 percent, and below 40 percent defines the commonest heart-failure category.',
      },
      {
        kind: 'formula',
        name: 'Absolute risk reduction',
        latex: 'ARR = C_{control} - C_{treated}',
        meaning: 'The event rate without treatment minus the rate with it — the honest way to size a benefit before dividing it by cost and side effects.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a 62-year-old smoker with blood pressure 150/90 and total cholesterol 240 mg/dL computes a ten-year cardiovascular risk near 25 percent. What does quitting, pressure control and a statin buy?',
          'Recall the governing idea: risk multiplies, so removing factors compounds; quitting smoking roughly halves excess risk within about a year, pressure control and statins each shave roughly a quarter of remaining risk.',
          'Apply: from 25 percent, quitting takes the profile toward about 15 percent; blood pressure to target and LDL halved take the estimate toward 8 to 10 percent. The absolute reduction is 25 − 9 ≈ 16 percentage points — 16 fewer events per 100 people over a decade.',
          'State the result: stacked, modest relative reductions become a four-in-five relative improvement, and the same logic run at a young, low baseline explains why doctors frame statins honestly: the same drug can be transformative for one patient and marginal for another.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Ten-year risk calculators turn scattered readings into one number that steers medication decisions.',
          'Stroke units and FAST public campaigns save brain by cutting the door-to-treatment clock.',
          'Cardiac rehabilitation programs cut readmissions, and remain chronically under-used.',
          'Smoking-cessation services roughly double quit rates over willpower alone.',
          'Familial-cholesterol screening finds whole families at inherited risk with one index case.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The deadliest habit is waiting for symptoms — outward-widening arteries hide plaque until rupture day. The second is treating "normal for my age" as safe: pressure that drifts up each decade is damage compounding, not a rite of passage. Third, stopping statins over muscle aches without consulting: switching type or dose usually resolves it, while stopping quietly raises risk. And self-prescribed aspirin is yesterday\'s advice — bleeding risk now outweighs routine prevention for most healthy people.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Atherosclerosis', def: 'Cholesterol-rich plaque accumulating inside artery walls over decades.' },
          { term: 'Plaque rupture', def: 'Tearing of a plaque\'s fibrous cap, triggering the clot that causes most heart attacks and strokes.' },
          { term: 'LDL cholesterol', def: 'The lipoprotein fraction that delivers cholesterol into artery walls; the treatment target.' },
          { term: 'Myocardial infarction', def: 'Death of heart muscle from a blocked coronary artery — the heart attack.' },
          { term: 'Statin', def: 'A drug blocking liver cholesterol synthesis, lowering LDL and cardiovascular events.' },
          { term: 'Ejection fraction', def: 'The share of filled ventricle blood pumped per beat; a key heart-failure measure.' },
          { term: 'Cardiac rehabilitation', def: 'Supervised exercise-plus-education program after a cardiac event.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Most heart attacks are triggered by:',
            options: ['slow, gradual narrowing until the artery closes', 'rupture of a plaque followed by rapid clot formation', 'spasm of a perfectly clean artery', 'blood pressure dropping too low'],
            answer: 1,
            explain: 'The unstable plaque tears, platelets seal the tear, and the clot — not the slow narrowing — blocks the artery.',
          },
          {
            q: 'A ventricle fills with 120 mL and ejects 66 mL per beat. The ejection fraction is:',
            options: ['36 percent', '45 percent', '55 percent', '66 percent'],
            answer: 2,
            explain: '66/120 = 0.55 — a normal 55 percent; below 40 percent marks reduced pump function.',
          },
          {
            q: 'Which single modifiable factor carries the largest controllable cardiovascular risk?',
            options: ['Occasional coffee', 'Smoking', 'Sleeping 8 hours', 'Eating eggs'],
            answer: 1,
            explain: 'Smoking dwarfs the other modifiable levers — and quitting buys back most of the excess risk within years.',
          },
          {
            q: 'A statin lowers a patient\'s event risk from 20 percent to 15 percent. The absolute risk reduction is:',
            options: ['5 percentage points', '25 percent', '15 percent', '35 percent'],
            answer: 0,
            explain: 'ARR = 20 − 15 = 5 percentage points; expressed relatively it is 25 percent — both numbers matter.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read after the heart-and-circulation anatomy lesson for the plumbing, and pairs with diabetes (shared machinery), the stress lesson (amplifier chemistry), and the first-aid lesson for emergency response. Next: heart rhythm and ECGs, stroke care, and how blood-pressure drugs work. Educational, not diagnostic.',
        tone: 'path',
      },
    ],
  },
]
