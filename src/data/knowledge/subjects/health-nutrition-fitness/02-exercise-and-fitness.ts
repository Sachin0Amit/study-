/**
 * Knowledge Universe — Health, Nutrition & Fitness — Chapter 02: Exercise & Fitness
 * 2 lessons · ~2,314 words
 * field: Exercise & Fitness
 * legacy sources: health-wellness.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Exercise & Fitness]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 health-hypertrophy-muscle-growth — Hypertrophy: How Muscle Actually Grows
 *   02.2 fit-aerobic-fitness-vo2max — Aerobic Fitness: VO₂ Max, Training Zones and Why Cardio Works
 */
import type { KnowledgeTopic } from '../../types'

export const healthNutritionFitnessCh02: KnowledgeTopic[] = [
  {
    id: 'health-hypertrophy-muscle-growth',
    title: 'Hypertrophy: How Muscle Actually Grows',
    domain: 'Health & Wellness',
    field: 'Exercise & Fitness',
    branch: 'Exercise Physiology',
    tier: 'intermediate',
    concepts: [
      'Mechanical tension as the growth signal',
      'Muscle protein synthesis versus breakdown',
      'Progressive overload',
      'Weekly volume as the training dose',
      'Satellite cells donating myonuclei',
      'Recovery completes the job — soreness is not the receipt',
    ],
    words: 1055,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Hypertrophy — the growth of existing muscle fibers — is not a payment for soreness; it is the outcome of a signaling and construction cycle that exercise physiology has mapped in surprising detail. This Health & Wellness topic covers the levers that actually matter: mechanical tension as the stimulus, protein synthesis racing breakdown, progressive overload, weekly training volume, and the recovery that finishes the job.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Muscle is metabolic machinery and long-term insurance — adults who maintain it preserve function and independence decades later. The same science runs rehabilitation after injury and healthy body-composition change at any age.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Tension is the signal: loading a fiber, especially in a stretched position, distorts mechanosensors and switches on the mTORC1 pathway that drives construction. Heavy weights get there efficiently, but effort near failure matters more than any specific number — light loads taken close to failure generate comparable growth.',
      },
      {
        kind: 'para',
        text: 'Muscle is constantly built and demolished, and growth requires the construction side to win across the day. A hard session elevates muscle protein synthesis for roughly 24–48 hours, but only if amino acids from dietary protein are available to pay for it — about 0.4 grams per kilogram of body weight per meal, several meals a day.',
      },
      {
        kind: 'para',
        text: 'Fibers adapt to the demand placed on them, so the identical workout stops being a stimulus within weeks. Overload means raising the ask over months — more weight, more reps, or more sets. A simple double progression, climbing from 8 to 12 reps, then adding 2.5 kg and resetting, delivers most of what elaborate programs promise.',
      },
      {
        kind: 'para',
        text: 'Count hard sets per muscle per week — sets stopped within a few reps of failure — and you hold the best single dose metric for growth. Most people grow well on 10 to 20 weekly sets, with returns flattening and joint stress climbing beyond. Spreading that volume over two or three sessions avoids wasted junk volume.',
      },
      {
        kind: 'para',
        text: 'A muscle fiber is a single cell with many nuclei, each managing its own slice of territory. When growth demands outstrip the workforce, satellite cells on the fiber\'s edge activate and donate their nuclei — an addition that appears to persist through detraining and explains the ease of regaining lost muscle, the so-called muscle memory.',
      },
      {
        kind: 'para',
        text: 'The gym issues the request; sleep, food, and time grant it. Growth stalls in a deep calorie deficit without extra protein, chronic short sleep lowers both training quality and synthesis, and most muscles want 48 to 72 hours before direct re-training. Soreness, for the record, tracks novelty more than growth.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Training volume load',
        latex: 'V = s \\times r \\times w',
        meaning: 'Sets × reps × load — a simple progression-tracking proxy, though weekly hard sets track growth better.',
      },
      {
        kind: 'formula',
        name: 'Net muscle balance',
        latex: '\\text{Net} = \\text{MPS} - \\text{MPB}',
        meaning: 'Growth happens only while synthesis exceeds breakdown; training raises MPS, protein feeds it, sleep protects it.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: a lifter bench-pressing 3 sets of 8 with 60 kg wants to know whether progress is on track and what to change next.',
          'Recall the governing ideas: track volume load as the progression signal, and drive it upward through double progression and enough weekly hard sets.',
          'Apply: current volume is 3 × 8 × 60 = 1,440 kg. Build from 3 × 8 to 3 × 12 (2,160 kg), then add 2.5 kg per side and drop back to sets of 8, repeating the climb.',
          'State the result: monthly workload trends upward, weekly chest volume sits near 9–12 hard sets including overhead pressing, and the next stall is fixed with an added set — not extra soreness.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Rehabilitation rebuilds muscle lost to casts, surgery, and bed rest using the same overload principles at reduced loads.',
          'Sarcopenia prevention: twice-weekly resistance training measurably preserves strength and independence in older adults.',
          'Athletes run hypertrophy blocks to expand capacity before sport-specific strength phases.',
          'During weight loss, lifting plus high protein shifts what is lost toward fat rather than muscle.',
          'Metabolic health: more muscle improves the body\'s glucose handling.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Chasing soreness as a progress meter is the classic mistake — novelty, not growth, is what deep soreness mostly measures. The idea that light weights tone while heavy weights bulk misreads the biology: muscle either grows or it does not, and visibility is a body-fat question. No program out-trains chronic short sleep or a protein intake that never reaches the day\'s requirement.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Hypertrophy', def: 'Enlargement of existing muscle fibers, distinct from adding new fibers (hyperplasia).' },
          { term: 'Mechanical tension', def: 'Force load on a fiber; the primary switch for growth signaling.' },
          { term: 'Muscle protein synthesis (MPS)', def: 'The building rate of muscle protein, elevated for a day or two after training.' },
          { term: 'Progressive overload', def: 'Planned increases in demand over time to keep the stimulus alive.' },
          { term: 'Training volume', def: 'Amount of work performed, best counted as hard sets per muscle per week.' },
          { term: 'Satellite cells', def: 'Stem cells on muscle fibers that donate nuclei to support growth.' },
          { term: 'Sarcopenia', def: 'Age-related loss of muscle and strength, blunted by resistance training.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The primary signal that tells a muscle fiber to grow is:',
            options: ['Metabolic stress alone', 'Mechanical tension on the fiber', 'Accumulated soreness', 'Lactic acid'],
            answer: 1,
            explain: 'Tension activates mechanosensors and the mTORC1 pathway; the burn and the damage are secondary at best.',
          },
          {
            q: 'After a hard session, muscle protein synthesis remains elevated for about:',
            options: ['4 hours', '12 hours', '24–48 hours', 'One week'],
            answer: 2,
            explain: 'The one-to-two-day window is why muscles are usually trained two or three times per week.',
          },
          {
            q: 'Progressive overload means:',
            options: ['Training to failure on every set', 'Systematically raising the demand placed on the muscle over time', 'Changing exercises constantly to confuse the muscle', 'Lifting only when sore'],
            answer: 1,
            explain: 'The ask must rise over months — weight, reps, or sets — or adaptation stalls.',
          },
          {
            q: 'Severe soreness after a session mainly indicates:',
            options: ['Maximum growth was achieved', 'You stressed tissue in a novel way', 'Protein needs were met', 'The workout was wasted'],
            answer: 1,
            explain: 'Delayed-onset soreness tracks novelty and stretch-under-load, not hypertrophy — steady growth can be nearly painless.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Comfortable with the idea that muscles move bones? Start here. Follow with periodization basics, nutrition for body recomposition, and the strength-versus-size training spectrum.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Mechanical tension, not soreness, is the growth signal.',
          'Growth means protein synthesis outrunning breakdown, day after day.',
          'Progressive overload keeps the stimulus alive as you adapt.',
          'Roughly 10–20 hard sets per muscle per week is the working band.',
          'Sleep, calories, and protein finish what the gym started.',
        ],
      },
    ],
  },
  {
    id: "fit-aerobic-fitness-vo2max",
    title: "Aerobic Fitness: VO₂ Max, Training Zones and Why Cardio Works",
    domain: "Health & Wellness",
    field: "Exercise & Fitness",
    branch: "Cardiovascular Fitness",
    tier: "intermediate",
    concepts: [
      "The oxygen chain from air to mitochondrion",
      "VO₂max: the ceiling of oxygen delivery",
      "The Fick equation behind the number",
      "Lactate threshold versus maximum capacity",
      "Zone 2 and the mitochondrial base",
      "Intervals: the fast lane up",
      "Detraining: fitness is a lease, not a deed",
    ],
    words: 1259,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A mile into an easy run, your breathing settles into a rhythm you could hold for an hour; thirty seconds up a steep hill at full effort and you are gasping. Both are aerobic training, and both work — through different doors. Cardiovascular fitness is the capacity of one connected chain — lungs, heart, blood and muscle mitochondria — to capture, deliver and burn oxygen, and it is trainable at any age. The resistance-training half of fitness, how fibers themselves grow, is the hypertrophy lesson's territory; this one is the oxygen story.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Cardiorespiratory fitness is among the strongest single predictors of all-cause mortality — in large cohorts, the gap between the least and most fit resembles the gap between smoking and not smoking. It is also one of the few risk factors you can move by 15 to 20 percent in a few months, with equipment as cheap as shoes.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Follow one oxygen molecule: inhaled into the lungs, it binds hemoglobin, rides the heart's output to working muscle, unloads across a capillary wall and finally burns inside a mitochondrion. Every link adapts to training. Plasma volume expands within days; the left ventricle pumps more blood per beat — a higher stroke volume; capillaries multiply around muscle fibers, shortening the diffusion distance; mitochondria proliferate with their oxidative enzymes. The pump's plumbing is the heart-and-circulation lesson's story; the point here is what training does to it.",
      },
      {
        kind: "para",
        text: "VO₂max is the maximum oxygen the body can use per minute, reported per kilogram of body mass. It is the ceiling of the delivery chain: above that intensity, work runs on anaerobic reserves and collapses within minutes. Sedentary adults typically measure 30 to 40 milliliters per kilogram per minute, recreational exercisers 40 to 50, competitive distance runners 65 to 75, and Tour de France champions above 80. Genetics sets much of the range — identical twins reared apart score strikingly alike — but almost everyone can raise their own ceiling by a fifth or more.",
      },
      {
        kind: "para",
        text: "The gold standard is a graded treadmill or cycle test with gas-exchange analysis: intensity climbs until oxygen uptake plateaus while work keeps rising. Submaximal estimates — timed runs, heart-rate extrapolation, the Cooper twelve-minute test — track personal progress well enough. What VO₂max is not: a measure of effort, technique, or of who wins between athletes with similar ceilings.",
      },
      {
        kind: "para",
        text: "That race is decided one level down, at the lactate threshold — the intensity where lactate accumulates faster than it clears. Lactate is not the poison of coaching folklore but a fuel shuttled between muscles and brain; the burn is largely the acid and fatigue signaling riding alongside it. Threshold sits at 60 to 80 percent of VO₂max in trained athletes, and raising it — or holding a higher fraction of maximum for longer — improves performance even when the ceiling never moves.",
      },
      {
        kind: "para",
        text: "Zone 2 is the conversational pace just below threshold: full sentences possible, nose-breathing plausible, effort almost insulting in its mildness — which is why it is skipped, and why it works. Easy volume builds the machinery: mitochondrial biogenesis, in which the energy-sensing enzyme AMPK switches on PGC-1α, the master regulator of mitochondrial construction, alongside capillary growth and fat oxidation. Elite endurance athletes spend roughly 80 percent of their training here and bank the rest for intervals.",
      },
      {
        kind: "para",
        text: "Intervals — repeated minutes near maximum effort — raise VO₂max fastest per minute invested, largely by stressing stroke volume at near-maximal heart rates. They are time-efficient, demanding and dose-limited: too much high-end work crowds out recovery and stalls the base. And fitness is a lease, not a deed. Stop training and plasma volume falls within days, measured VO₂max drops measurably within two to three weeks, and mitochondrial enzymes fade on a similar schedule — though maintenance is far cheaper than construction, and a couple of quality sessions a week preserve most of a hard-won ceiling.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "The Fick equation",
        latex: "\\dot{V}O_{2\\,max} = HR_{max} \\cdot SV_{max} \\cdot (a\\text{-}vO_2\\ \\mathrm{diff})_{max}",
        meaning: "Maximum oxygen uptake is maximal heart rate times stroke volume times the oxygen muscles extract — training moves every term except the first.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: why does a trained runner's oxygen ceiling tower over a sedentary peer's — which term of the Fick equation actually moved?",
          "Recall the governing idea: VO₂max factors into heart rate, stroke volume and extraction, and maximal heart rate is essentially fixed by age.",
          "Apply: at 75 kilograms with a peak heart rate of 195, a stroke volume of 100 milliliters and extraction of 15 milliliters of oxygen per 100 milliliters of blood, output is 19.5 liters per minute and oxygen uptake about 2.9 liters per minute — roughly 39 mL/kg/min. Training lifts stroke volume to 130 and extraction to 17: 25.4 L/min of output, 4.3 L/min of oxygen, about 57 mL/kg/min.",
          "State the result: a 46 percent higher ceiling, built almost entirely from a stronger pump per beat and greedier muscles — the heart rate never moved.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Cardiac rehabilitation prescribes supervised aerobic training after heart attack, cutting mortality alongside medication.",
          "Endurance labs sell VO₂max and lactate-threshold testing to athletes chasing precise training zones.",
          "Public-health guidelines distill the population dose to 150 minutes of moderate or 75 of vigorous activity weekly.",
          "Preoperative assessment increasingly includes measured fitness, because surgical outcomes track it.",
          "Metabolic clinics pair zone-2-style training with medication in type 2 diabetes — the diabetes lesson's companion lever.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The fat-burning-zone myth: low intensity burns a higher percentage of fat but fewer total calories and less total fat. The interference myth: cardio erasing muscle requires volumes almost nobody does. The no-pain-no-gain trap: most aerobic volume should feel easy, and chronic all-out training is how enthusiasm dies by February. And a wristwatch's VO₂max estimate is a well-informed guess that drifts with heat, hills and firmware.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "VO₂max", def: "Maximum oxygen uptake per minute per kilogram — the ceiling of the delivery chain." },
          { term: "Stroke volume", def: "Blood ejected per heartbeat; the training-responsive half of cardiac output." },
          { term: "Fick equation", def: "Oxygen uptake equals cardiac output times extraction — the anatomy of VO₂max." },
          { term: "Lactate threshold", def: "Intensity at which lactate accumulation outpaces clearance; the better race predictor." },
          { term: "Zone 2", def: "Conversational, just-subthreshold intensity that builds mitochondria and capillaries." },
          { term: "Mitochondrial biogenesis", def: "PGC-1α-driven construction of new mitochondria in response to aerobic work." },
          { term: "Detraining", def: "The rapid loss of plasma volume, stroke volume and oxidative enzymes when training stops." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "In the Fick equation, the term essentially fixed by age is:",
            options: ["maximal heart rate", "stroke volume", "oxygen extraction", "plasma volume"],
            answer: 0,
            explain: "Maximal heart rate barely responds to training; stroke volume and extraction are the trainable terms.",
          },
          {
            q: "Lactate threshold matters for performance because it:",
            options: ["measures the delivery ceiling", "sets the sustainable fraction of that ceiling", "is determined entirely by genetics", "applies only to sprint events"],
            answer: 1,
            explain: "Athletes with identical ceilings race differently because thresholds — the sustainable fraction — differ.",
          },
          {
            q: "Zone 2 training builds fitness mainly through:",
            options: ["maximal calorie burn per minute", "mitochondrial biogenesis and capillary growth", "raising maximal heart rate", "accumulating oxygen debt"],
            answer: 1,
            explain: "Easy volume constructs the machinery — the AMPK–PGC-1α pathway — that hard work then exploits.",
          },
          {
            q: "Two weeks of complete training stop hit measured VO₂max first through:",
            options: ["loss of muscle fibers", "plasma volume contraction", "a lower maximal heart rate", "reduced bone density"],
            answer: 1,
            explain: "Plasma volume falls within days, dragging stroke volume and the measured ceiling down with it.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Pairs with the hypertrophy lesson — the two halves of fitness — and the heart-and-circulation anatomy lesson for the pump itself. Follow with the diabetes lesson to see aerobic work as metabolic medicine, and the sleep lesson for the recovery half of adaptation.",
        tone: "path",
      },
    ],
  },
]
