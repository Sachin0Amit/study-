/**
 * Knowledge Universe — Clinical Medicine — Chapter 04: Pain, Bones & Joints
 * 2 lessons · ~2,673 words
 * field: Disease & Treatment
 * legacy sources: health-wellness.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Pain, Bones & Joints]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 health-understanding-pain — Understanding Pain: Signals, Gates and Why Chronic Pain Differs
 *   04.2 ortho-bone-health-osteoporosis — Bone Health and Osteoporosis: Your Living Scaffolding
 */
import type { KnowledgeTopic } from '../../types'

export const clinicalMedicineCh04: KnowledgeTopic[] = [
  {
    id: 'health-understanding-pain',
    title: 'Understanding Pain: Signals, Gates and Why Chronic Pain Differs',
    domain: 'Health & Wellness',
    field: 'Disease & Treatment',
    branch: 'Pain',
    tier: 'intermediate',
    concepts: [
      'Nociception versus the experience of pain',
      'The four-stage pathway',
      'Fast and slow fibers: the two-phase ache',
      'Gate control: why rubbing helps',
      'Descending inhibition and endorphins',
      'Chronic pain: an alarm that outlives the fire',
      'The biopsychosocial treatment of pain',
    ],
    words: 1494,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Touch something hot and the sequence is strangely choreographed: a sharp sting in a fraction of a second, then a dull throb arriving nearly a second later. Pain, the subject of this Disease & Treatment topic, is not a wire from tissue to brain carrying damage reports — it is an alarm system that detects, transmits, edits and interprets, and the editing is where most of the story lives. Acute pain is biology working beautifully; chronic pain is the alarm itself malfunctioning into a disease. Telling those two apart changes everything about how pain is treated.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Chronic pain is the leading cause of disability worldwide, with low back pain alone at the top of the global list — yet scans and pain scores correlate poorly, and the strongest treatments are not the strongest drugs. Understanding the mechanism dissolves the harmful myths: that pain always equals damage, that scans should explain it, and that rest and opioids are the default response.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Nociception — the raw signaling — runs in four stages. Transduction: free nerve endings called nociceptors convert noxious heat, pressure and chemistry into impulses (the action-potential mechanics live in the neuroscience lessons); injured tissue also releases prostaglandins and bradykinin that sensitize them, which is why a sunburned back hurts under a shower — and why anti-inflammatory drugs work at the source, blocking prostaglandin production. Transmission: signals travel the spinal cord toward the brain. Perception: the thalamus distributes them to a network — the insula for the suffering, the anterior cingulate for the alarm, somatosensory areas for location. Modulation: the system itself turns the volume up or down on the way.',
      },
      {
        kind: 'para',
        text: 'The two-phase sting-and-throb is anatomy, not emotion. Sharp first pain rides A-delta fibers — myelinated, fast, about 20 meters per second — carrying precise, stabbing information. The later burn rides C fibers — unmyelinated, slow, about 1 meter per second — carrying the dull, aching, sickening quality. From hand to spinal cord the fast signal arrives in a twentieth of a second; the slow one takes a full second. Evolution built both because they do different jobs: one to react, one to remember to protect.',
      },
      {
        kind: 'para',
        text: 'In 1965, Ronald Melzack and Patrick Wall proposed the gate control theory and rewired the field. In the spinal cord\'s dorsal horn, a gate weighs inputs: non-painful touch — the large A-beta fibers — closes it, inhibiting the pain signal, which is why you rub a knocked elbow and why mothers stroke a bumped head; small-fiber pain opens it. Crucially, the brain also projects down and closes the gate itself: soldiers and athletes famously ignore injuries mid-battle and mid-match, not from toughness but chemistry — descending circuits releasing endorphins, serotonin and noradrenaline. The gate is also why attention, fear and stress hold it open, the stress lesson\'s chemistry amplifying the volume.',
      },
      {
        kind: 'para',
        text: 'Acute pain is the system doing its job: it protects the healing part, enforces rest, and fades on the schedule of repair. The modern treatment logic follows — brief rest, then graded movement, because tissues heal better moving than frozen, and because pain-free motion restores confidence as well as circulation. Anti-inflammatories and short courses of stronger analgesics cover the worst days. Acute pain is a symptom, and a useful one.',
      },
      {
        kind: 'para',
        text: 'Chronic pain — pain persisting beyond about three months, past healing — is different in kind, not just duration. The alarm itself is now the disease. Peripheral nerves can sensitize, firing at ever-lower thresholds; the spinal cord and brain amplify, devoting more circuitry to the signal in a way MRI studies can literally watch. Harmless inputs start hurting — a breeze on skin (allodynia); mild pressure becomes severe (hyperalgesia). The telling finding: degenerative changes on back scans are nearly as common in pain-free people, and pain intensity tracks fear, mood and beliefs about injury better than image severity. In chronic pain, pain and damage have filed for divorce.',
      },
      {
        kind: 'para',
        text: 'Phantom limb pain is the proof of concept: after an amputation, a missing limb can hurt, sometimes fiercely, because the pain is generated by a nervous system, not by the body part. The brain\'s body map remodels, and the representation itself signals. No tissue, real pain — which is why the definition of pain has always insisted it is a sensory and emotional experience, whatever the periphery is doing.',
      },
      {
        kind: 'para',
        text: 'Treatment follows the biopsychosocial model — not "it\'s in your head," but "it\'s in the system." The evidence-based stack: pain neuroscience education, simply understanding how sensitization works, measurably reduces pain by shrinking the threat value; exercise therapy is first-line for chronic back pain; graded exposure reverses the fear-avoidance spiral; cognitive behavioral therapy targets catastrophizing; sleep and mood treatment lower the amplifier. Opioids are the cautionary chapter — appropriate for acute and cancer-related pain, weak long-term evidence and serious risks (tolerance, dependence, the overdose epidemic) for chronic non-cancer pain, and now prescribed far more sparingly than the decades that created the crisis.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Nerve conduction time',
        latex: 't = \\frac{d}{v}, \\qquad t_{A\\delta} = \\frac{d}{20},\\quad t_C = \\frac{d}{1}',
        meaning: 'Conduction time equals distance over speed: A-delta fibers at about 20 m/s versus C fibers at about 1 m/s — the two-phase ache in one line.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a cook\'s fingertip touches a hot pan about one meter of nerve-path from spinal cord to brain. When does each pain arrive, and what does the half-second gap explain?',
          'Recall the governing idea: fast A-delta and slow C fibers share the pathway at different conduction velocities, so arrival times differ by fiber speed.',
          'Apply: t(A-delta) = 1/20 = 0.05 s; t(C) = 1/1 = 1.0 s. The sharp sting registers in a twentieth of a second — fast enough to trigger withdrawal — while the dull burn begins roughly 0.95 seconds behind it.',
          'State the result: the cook yelps at the sharp signal before the dull pain has even arrived — and rubbing the finger activates A-beta touch fibers that partially close the spinal gate, taking the edge off what follows.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Pain neuroscience education is now standard in multidisciplinary pain programs — understanding the mechanism is itself analgesic.',
          'Physiotherapy delivers graded exercise as first-line care for chronic back pain, ahead of imaging and injections.',
          'Burn units use gate-based comfort care — massage, vibration, cooling — alongside medication.',
          'Prescribing guidelines now cap acute opioid quantities and require review, a direct lesson from the overdose crisis.',
          'Military and sports medicine plan analgesia around descending inhibition, exploiting the window in which injured people feel least.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The cruellest error is reading "normal scan" as "not real" — in chronic pain, the scan is the wrong witness. Its twin is the opposite: assuming pain intensity maps to injury severity, which drives over-imaging, over-treatment and fear. Bed rest for back pain is outdated — it deconditions and sensitizes. "Push through everything" and "avoid everything" fail identically in opposite directions; pacing is the skill. And opioids for chronic pain are a decision with a body count behind it, not a default.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Nociceptor', def: 'A free nerve ending transducing noxious heat, pressure and chemistry into impulses.' },
          { term: 'Nociception', def: 'The neural signaling of tissue threat — distinct from the experienced pain it may or may not become.' },
          { term: 'Gate control theory', def: 'Melzack and Wall\'s model: spinal gating weighed by touch input and descending brain signals.' },
          { term: 'Descending inhibition', def: 'Brainstem circuits closing the spinal gate via endorphins, serotonin and noradrenaline.' },
          { term: 'Allodynia', def: 'Pain from stimuli that should be harmless — a hallmark of sensitization.' },
          { term: 'Chronic pain', def: 'Pain persisting past three months, functioning as a disease of the alarm system rather than a symptom.' },
          { term: 'Biopsychosocial model', def: 'Pain as the product of biological, psychological and social factors interacting — and treated together.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The sharp-first, dull-second pattern of a burn reflects:',
            options: ['two brain regions taking turns', 'fast myelinated A-delta fibers versus slow unmyelinated C fibers', 'inflammation arriving late', 'attention switching'],
            answer: 1,
            explain: '20 m/s versus 1 m/s over the same path — nearly a full second between the two arrivals.',
          },
          {
            q: 'Rubbing a knocked elbow helps because:',
            options: ['it warms the tissue', 'A-beta touch fibers partially close the spinal gate on pain transmission', 'it distracts the brain entirely', 'it accelerates healing'],
            answer: 1,
            explain: 'Gate control: non-painful touch input inhibits the pain signal in the dorsal horn — a spinal mechanism, not willpower.',
          },
          {
            q: 'Allodynia means:',
            options: ['reduced pain sensitivity', 'pain from normally harmless stimuli', 'pain in a missing limb', 'pain that responds to opioids only'],
            answer: 1,
            explain: 'A breeze on skin hurting is the signature of a sensitized nervous system, not of fragile tissue.',
          },
          {
            q: 'The best-supported first-line treatment for chronic low back pain is:',
            options: ['long-term opioids', 'prolonged bed rest', 'graded exercise with pain education', 'repeated MRI scans'],
            answer: 2,
            explain: 'Movement plus understanding outperforms rest, imaging-driven treatment and long-term opioids in trial after trial.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read after the action-potential lesson for the signaling, and pair with the stress lesson for the amplifiers and the pharmacology lesson for how painkillers fit the pathway. Next: migraine neuroscience, neuropathic pain after shingles and diabetes, and the history of the opioid crisis. Educational — persistent pain deserves professional assessment.',
        tone: 'path',
      },
    ],
  },
  {
    id: "ortho-bone-health-osteoporosis",
    title: "Bone Health and Osteoporosis: Your Living Scaffolding",
    domain: "Health & Wellness",
    field: "Disease & Treatment",
    branch: "Bones & Joints",
    tier: "core",
    concepts: [
      "Remodeling: demolition and construction crews",
      "Osteoclasts, osteoblasts and RANKL",
      "Peak bone mass as a young-adult bank account",
      "The calcium economy run by parathyroid hormone",
      "Estrogen as the brake on resorption",
      "T-scores and DEXA",
      "Fracture prevention beats fracture repair",
    ],
    words: 1179,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Bones feel like the most permanent things in the body, and they are anything but: your entire skeleton is demolished and rebuilt about every ten years, one small work site at a time. Bone is living tissue with a blood supply, a turnover schedule and hormone switches — which is why it can weaken silently for decades before a hip gives way. The biomechanics of how bones and joints move loads is the muscles-and-bones anatomy lesson's subject; this one is bone metabolism and the disease of losing it.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "A hip fracture in an older adult kills roughly a fifth of victims within a year and ends independent living for half — outcomes worse than many cancers. Osteoporosis produces no symptoms until that moment, which is why medicine tracks bone density and fall risk instead of waiting for pain.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Bone maintenance runs through coupled crews: osteoclasts, which dissolve old or microcracked bone with acid and enzymes, and osteoblasts, which lay down new matrix that mineralizes into hard bone. The orchestration is molecular — osteoblasts display RANKL, which activates osteoclast precursors, and estrogen restrains this signal, as do several drugs. Roughly a tenth of the skeleton is replaced each year, and after midlife the balance biases toward resorption: the slow arithmetic behind bone loss.",
      },
      {
        kind: "para",
        text: "Bone is a bank account with one saving season. Through childhood and adolescence, deposits outrun withdrawals, and peak bone mass — the lifetime maximum reached by the late twenties — is set perhaps 70 percent by genetics, the rest by loading, calcium, vitamin D and hormones. Whatever is banked then has to last; a 10 percent higher peak delays osteoporosis by years later in life.",
      },
      {
        kind: "para",
        text: "The skeleton doubles as the calcium warehouse, and blood calcium is defended without mercy. When intake runs short, parathyroid hormone rises and orders three fixes: release calcium from bone, reabsorb more in the kidney, and — through active vitamin D — absorb more from the gut. Chronic low intake means the raids come from bone; the recommended thousand-odd milligrams of calcium plus 600 to 800 IU of vitamin D is what keeps the warehouse door shut.",
      },
      {
        kind: "para",
        text: "Menopause is the switch. Estrogen restrains both the number and appetite of osteoclasts; when it falls, resorption accelerates to 2 or 3 percent of bone per year for several years — the fast phase of female bone loss — before easing to the slower age-related decline men also experience through falling sex hormones. This is why women fracture earlier and more often than men, and why bone loss tracks reproductive milestones.",
      },
      {
        kind: "para",
        text: "Diagnosis is imaging plus arithmetic. DEXA scans beam low-dose X-rays through hip and spine; the T-score compares your density with the young-adult average, in standard deviations: above −1 normal, −1 to −2.5 low bone mass, −2.5 or below osteoporosis. But treatment thresholds also weigh age, prior fragility fractures and risk calculators like FRAX — a 55-year-old and an 80-year-old with identical scores carry very different fracture odds.",
      },
      {
        kind: "para",
        text: "Prevention is load and supply. Weight-bearing and resistance exercise supply the mechanical signal bone answers — Wolff's law: swimming, for all its virtues, supplies almost none — with calcium and vitamin D as necessary but not sufficient. Drugs close the gap when loss outruns lifestyle: bisphosphonates bind bone mineral and shorten osteoclast lives, halving vertebral fracture risk; denosumab blocks RANKL; teriparatide, a parathyroid hormone analog given intermittently, is the rare drug that stimulates construction. And fall prevention — vision, balance, home hazards — prevents the fracture no density number can.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "T-score",
        latex: "T = \\frac{\\mathrm{BMD}_{patient} - \\mathrm{BMD}_{young\\ adult\\ mean}}{\\mathrm{SD}_{young\\ adult}}",
        meaning: "Bone density expressed in standard deviations from the young-adult mean — negative means below, and −2.5 is the osteoporosis line.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a 68-year-old's hip DEXA reads 0.68 g/cm² against a young-adult mean of 0.95 with a standard deviation of 0.10 — diagnosis and next step?",
          "Recall the governing idea: the T-score is the standardized distance below the young-adult mean, with −2.5 marking osteoporosis.",
          "Apply: T = (0.68 − 0.95)/0.10 = −2.7, below the threshold — osteoporosis by density alone. She also fractured a wrist in a trivial fall last year, which independently anchors her fracture risk in treatment territory.",
          "State the result: medication is indicated alongside calcium, vitamin D and loading exercise — and the throw rugs and dim stairwell in her home belong on the prescription too.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Screening guidelines offer DEXA to women at 65 and men at 70, earlier with risk factors or a prior fragility fracture.",
          "Glucocorticoids like prednisone are the classic secondary cause — bone protection is prescribed alongside long courses.",
          "Fracture-liaison programs treat a first fracture as the alarm: investigate, treat, and prevent the second.",
          "Dairy, fortified foods and moderate supplements close calcium gaps when diet cannot — food first.",
          "Falls-and-balance programs, from tai chi to home-hazard visits, cut fractures independently of bone density.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The classic mistakes: drinking milk as a talisman (calcium is one input, not a program); assuming swimming builds bone (it does not load it); treating supplements as more-is-better (mega-dose calcium buys kidney stones and constipation, not bone); believing bones stop mattering after 30 (remodeling never stops, and drugs cut fracture risk even in the eighties); forgetting men get osteoporosis too — a fifth of cases. And a heel scan is a screen, not a diagnosis; only hip-and-spine DEXA counts.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Remodeling", def: "The coupled resorption and formation that replaces about a tenth of the skeleton yearly." },
          { term: "Osteoclast", def: "The demolition cell, dissolving bone with acid and enzymes." },
          { term: "Osteoblast", def: "The construction cell, laying down matrix that mineralizes into bone." },
          { term: "Peak bone mass", def: "Maximum lifetime density banked by the late twenties, mostly genetic in origin." },
          { term: "RANKL", def: "The osteoblast signal that activates osteoclasts; the target of several osteoporosis drugs." },
          { term: "T-score", def: "Bone density in standard deviations from the young-adult mean." },
          { term: "Bisphosphonate", def: "Bone-bound drug class that shortens osteoclast lifespans; first-line for osteoporosis." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Bone remodeling couples:",
            options: ["osteoblasts with cartilage cells", "resorption by osteoclasts with formation by osteoblasts", "growth hormone with insulin", "calcium intake with vitamin excretion"],
            answer: 1,
            explain: "Two crews, one cycle: demolition clears the site, construction refills it — the balance shifts with age and hormones.",
          },
          {
            q: "Menopause accelerates bone loss because estrogen normally:",
            options: ["builds bone directly", "restrains osteoclast activation", "thickens joint cartilage", "raises gut calcium absorption"],
            answer: 1,
            explain: "Estrogen brakes resorption; its loss releases osteoclasts to dissolve bone at 2-3 percent per year for several years.",
          },
          {
            q: "A T-score of −2.7 means:",
            options: ["density 2.7 percent below average", "low bone mass", "2.7 standard deviations below the young-adult mean — osteoporosis", "annual fracture risk of 2.7 percent"],
            answer: 2,
            explain: "The threshold for osteoporosis is −2.5; she is 2.7 standard deviations under the young-adult mean.",
          },
          {
            q: "Which exercise prescription does the most for bone?",
            options: ["swimming laps", "cycling on flat roads", "resistance training and weight-bearing impact", "rest, to protect the skeleton"],
            answer: 2,
            explain: "Bone answers mechanical loading — Wolff's law. Water and wheels unload it almost completely.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Pairs with the muscles-and-bones anatomy lesson for structure and the nutrition lesson for dietary calcium; the reproductive-health lesson explains the menopausal hormone shift behind female bone loss. Next: fall-prevention science, the atypical-fracture debate, and joint replacement.",
        tone: "path",
      },
    ],
  },
]
