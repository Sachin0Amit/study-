/**
 * Knowledge Universe — Medicines, First Aid & Reproductive Health — Chapter 02: First Aid & Resuscitation
 * 2 lessons · ~2,542 words
 * field: First Aid & Emergency Care
 * legacy sources: health-wellness.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [First Aid & Emergency Care]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 aid-first-aid-essentials — First Aid Essentials: Bleeding, Burns, Choking and the Recovery Position
 *   02.2 aid-cardiac-cpr-chain-of-survival — Cardiac Arrest: CPR, AED and the Chain of Survival
 */
import type { KnowledgeTopic } from '../../types'

export const medicinesEmergencyCareCh02: KnowledgeTopic[] = [
  {
    id: 'aid-first-aid-essentials',
    title: 'First Aid Essentials: Bleeding, Burns, Choking and the Recovery Position',
    domain: 'Health & Wellness',
    field: 'First Aid & Emergency Care',
    branch: 'Emergency Basics',
    tier: 'core',
    concepts: [
      'DR ABC: the universal opening move',
      'Severe bleeding: press hard, press early',
      'Burns: cool running water, twenty minutes',
      'Choking: five back blows, five abdominal thrusts',
      'The recovery position',
      'When to call — and what to say',
    ],
    words: 1291,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'An ambulance is minutes away; the first few minutes belong to whoever is standing there. First aid is ordered common sense — a short sequence of checks and actions that keep oxygen moving and blood inside until professionals arrive. The core skills fit in one lesson: open an airway, stop severe bleeding, cool a burn, clear a blocked airway, and protect an unconscious breather with the recovery position. None requires equipment or courage, and every one measurably improves survival. Call your local emergency number early — it is a free call from any phone.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Bystander CPR doubles or triples survival from cardiac arrest, and cooling a burn within minutes meaningfully reduces its depth. Emergency numbers differ by country — 911 in North America, 112 across Europe, 999 in the UK — so the first real first-aid skill is knowing yours before you need it.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every emergency opens with DR ABC. Danger: check the scene — traffic, live wires, fumes — because a second casualty doubles the problem; do not enter what you cannot leave. Response: shout and squeeze the shoulders; a person who answers is breathing. Airway: tilt the head back and lift the chin to let the tongue fall away. Breathing: look, listen and feel for no more than ten seconds. Circulation: if breathing is absent or abnormal, start chest compressions — centre of the chest, 5-6 centimetres deep, 100-120 per minute — and send someone for the defibrillator.',
      },
      {
        kind: 'para',
        text: 'Severe bleeding is treated with direct pressure, early and firm: press on the wound with a clean cloth or your gloved hand and do not lift to peek — every peek restarts clotting. Elevate the injured limb if it does not hurt more. If pressure alone cannot control a limb wound, a tourniquet high and tight is the last resort, and the time it went on gets written somewhere visible. Most bleeding, however dramatic, stops with pressure and patience.',
      },
      {
        kind: 'para',
        text: 'Burns want water, not ice: cool running water for twenty minutes over the burn, a treatment that reduces injury depth and pain and still helps up to three hours after the event. Ice and butter both deepen the damage. Remove rings and watches before swelling arrives, then cover loosely with sterile non-fluffy dressing or cling film laid along the limb. Get medical help for burns larger than the casualty\'s own hand, and for any burn of the face, hands, feet, airway, or from chemicals and electricity.',
      },
      {
        kind: 'para',
        text: 'For a choking adult, first ask: "Are you choking?" If they can cough or speak, the airway is partly open — encourage coughing and do not slap their back. If coughing is silent and ineffective: five sharp back blows between the shoulder blades with the heel of your hand, checking after each; then five abdominal thrusts — fist just above the navel, pulled sharply inward and upward; then alternate five and five. If they become unconscious, lower them to the floor and start CPR. Abdominal thrusts can injure internally, so the casualty sees a doctor afterward even when fine.',
      },
      {
        kind: 'para',
        text: 'The recovery position protects the unconscious person who is still breathing normally. Kneel beside them, place the near arm at right angles, bring the far hand to the near cheek, pull the far knee up and roll them toward you onto their side, then tilt the head back and down so the airway stays open and any vomit drains out. A stable side-lying body with a protected airway is what you maintain — checking breathing continuously — until help arrives.',
      },
      {
        kind: 'para',
        text: 'Calling well is a skill. Give the location first — address and a landmark — then what happened, how many casualties, and whether each is conscious and breathing. Answer the dispatcher\'s questions in order and stay on the line: modern dispatchers talk untrained callers through CPR and defibrillator use in real time. If in doubt about whether a situation is "worth" a call, call — the cost of an unnecessary ambulance is money, the cost of a necessary one that never came is a life.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: you find a colleague collapsed at the bottom of a stairwell, not obviously responding. Walk through the first sixty seconds.',
        'Recall: DR ABC orders every action — danger, response, airway, breathing, circulation — and an unconscious person who is breathing normally goes into the recovery position while help is summoned.',
        'Apply: check the stairs for hazards and spillage; squeeze the shoulders and shout — nothing; send a specific bystander to call the emergency services and fetch the first-aid kit; tilt the head, lift the chin; spend no more than ten seconds on look-listen-feel — breathing is normal, so roll into the recovery position and monitor.',
        'State the result: within a minute the scene is safe, professional help is on its way, and the airway is protected until it arrives — the three interventions that most change outcomes before professionals take over.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Workplace first-aid kits and trained first-aiders are a legal requirement in many countries.',
          'CPR courses drill compressions to tempo — any song near 110 beats per minute — until they are muscle memory.',
          'Public defibrillators (AEDs) are built for untrained users and talk the rescuer through every step.',
          'School programmes teaching the recovery position to teenagers measurably improve bystander response.',
          'Emergency dispatchers deliver real-time CPR coaching over the phone, so calling early doubles the help.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The classics: moving a casualty without a reason (spinal risk), ice or butter on burns (deeper injury), back-slapping someone who can still cough (can complete the blockage), and giving food or drink to a drowsy casualty. The deadliest modern pitfall is hesitation — recording, wondering, or driving yourself instead of calling. Dispatchers would rather send ten unnecessary ambulances than one late one.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'DR ABC', def: 'Danger, Response, Airway, Breathing, Circulation — the universal first-aid sequence.' },
          { term: 'recovery position', def: 'A stable side-lying posture keeping an unconscious breather\'s airway clear.' },
          { term: 'direct pressure', def: 'Firm pressure on a bleeding wound, applied without lifting to check.' },
          { term: 'back blows', def: 'Five sharp strikes between the shoulder blades for severe choking.' },
          { term: 'abdominal thrusts', def: 'Sharp inward-and-upward pulls above the navel to clear a blocked airway.' },
          { term: 'CPR', def: 'Chest compressions 100-120 per minute, 5-6 centimetres deep, for absent breathing.' },
          { term: 'AED', def: 'An automated external defibrillator that talks an untrained user through defibrillation.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'On reaching a collapsed person, your first action is to…',
            options: ['start compressions immediately', 'check for danger to yourself and others', 'give water', 'lift them onto a sofa'],
            answer: 1,
            explain: 'A second casualty doubles the emergency — DR ABC begins with danger before anything else.',
          },
          {
            q: 'The correct first aid for a fresh burn is…',
            options: ['ice for ten minutes', 'cool running water for about twenty minutes', 'butter or oil', 'a tight bandage'],
            answer: 1,
            explain: 'Twenty minutes of cool running water reduces burn depth and pain — and still helps hours later. Ice deepens injury.',
          },
          {
            q: 'An adult is choking but can still cough loudly. You should…',
            options: ['give five back blows at once', 'encourage coughing and monitor', 'perform abdominal thrusts', 'give sips of water'],
            answer: 1,
            explain: 'An effective cough means a partly open airway — interference can complete the blockage. Blows and thrusts are for the silent, ineffective cough.',
          },
          {
            q: 'The recovery position is used for someone who is…',
            options: ['not breathing at all', 'unconscious but breathing normally', 'bleeding heavily from a limb', 'fully awake and dizzy'],
            answer: 1,
            explain: 'Side-lying with a tilted head keeps the airway open and drains fluids; absent breathing means CPR instead.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'This lesson is education, not certification — take a hands-on course (Red Cross, St John Ambulance or your local equivalent) to practise compressions and the recovery position on a mannequin. Then: CPR in depth, poisoning and overdose response, and wilderness first aid for settings where the ambulance is hours away.',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'aid-cardiac-cpr-chain-of-survival',
    title: 'Cardiac Arrest: CPR, AED and the Chain of Survival',
    domain: 'Health & Wellness',
    field: 'First Aid & Emergency Care',
    branch: 'Resuscitation',
    tier: 'core',
    concepts: [
      'Cardiac arrest versus heart attack',
      'The six links of the Chain of Survival',
      'High-quality chest compressions: rate, depth, recoil',
      'Why compressions buy time for the brain',
      'AEDs and shockable rhythms',
      'Minimizing interruptions and avoiding hyperventilation',
      'Bystander action doubles or triples survival',
    ],
    words: 1251,
    readMins: 6,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'When the heart stops pumping effectively — cardiac arrest — the brain begins to deteriorate in about five minutes, and the person dies unless someone acts. Paramedics almost always arrive too late to be the first link: survival depends on a bystander who recognizes the arrest, calls for help, and starts compressions. Cardiopulmonary resuscitation is one of the few skills an ordinary person can learn in an afternoon that literally restarts a life. This core lesson explains what cardiac arrest is, how the Chain of Survival organizes the rescue, and what high-quality CPR actually requires.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Most out-of-hospital cardiac arrests happen at home, in front of the people who love the victim most. The American Heart Association reports that bystander CPR can double or triple a victim’s chance of survival — the difference between the life that was and the life that ends is usually the nearest pair of hands.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Cardiac arrest is not a heart attack. A heart attack is a plumbing problem — a blocked coronary artery starves part of the heart muscle, and the heart usually keeps beating. Cardiac arrest is an electrical and mechanical failure: the heart stops pumping effectively, consciousness is lost within seconds, and normal breathing stops or becomes gasping. Heart attacks can trigger arrests, but arrest can strike without any warning. The victim in arrest is unresponsive and not breathing normally — that pair of observations, checked in under ten seconds, is the recognition step that sets everything else in motion.',
      },
      {
        kind: 'para',
        text: 'The American Heart Association’s Chain of Survival names six links, each dependent on the one before: recognition of cardiac arrest and activation of the emergency response system; early CPR with an emphasis on chest compressions; rapid defibrillation; advanced resuscitation by EMS and healthcare providers; post-cardiac-arrest care in hospital; and recovery, including rehabilitation and psychological support. The metaphor is exact — a chain is only as strong as its weakest link. Perfect hospital care cannot rescue a brain that waited fifteen minutes for blood, and the first three links belong entirely to bystanders.',
      },
      {
        kind: 'para',
        text: 'High-quality compressions are the engine of CPR. Current guidelines compress the chest of an adult 100 to 120 times per minute, to a depth of 5 to 6 centimeters, allowing full recoil of the chest between compressions, minimizing interruptions, and avoiding excessive ventilation — 30 compressions to 2 breaths for trained rescuers, or compressions alone for untrained ones. The mechanics are simple: the heart sits between the sternum and the spine, so rhythmic pressure squeezes blood to the brain and coronaries. Compressions are exhausting — quality decays within a couple of minutes — so rescuers should swap every two minutes when help is available.',
      },
      {
        kind: 'para',
        text: 'The most common arrest rhythm in adults, ventricular fibrillation, is electrical chaos: the muscle quivers instead of pumping. No amount of compression converts it — but a shock can. The automated external defibrillator (AED) is built for exactly this: adhesive pads read the rhythm, a voice coach walks the rescuer through every step, and the device shocks only when a shockable rhythm is detected. Defibrillation succeeds best in the first minutes, which is why public-access AED programs in airports, casinos and gyms have produced some of the highest survival rates on record.',
      },
      {
        kind: 'para',
        text: 'The science has a history of hard lessons. Rescue societies date to 1767, when Amsterdam organized the first drowned-victim resuscitation society; the first formal CPR guidelines appeared in 1966; the International Liaison Committee on Resuscitation standardized methods from 2000 onward. Across revisions, one trend dominates: compressions matter more and more, everything else less. The latest guidelines distill it to five rules — push fast, push hard, let the chest recoil, minimize interruptions, and do not over-ventilate.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Recognize: an adult collapses; shouting gets no response and breathing is absent or gasping — treat as cardiac arrest.',
          'Activate: send a specific bystander to call emergency services and another to fetch the nearest AED; put the phone on speaker so the dispatcher can coach.',
          'Compress: kneel beside the chest, heel of one hand on the center of the chest (lower half of the sternum), interlock, arms straight, push 5–6 cm at the tempo of a fast song (100–120 per minute).',
          'Defibrillate: when the AED arrives, bare the chest, apply pads as the diagrams show, and let it analyze; if it advises a shock, ensure nobody touches the victim and press the button, then resume compressions immediately.',
          'Sustain: continue cycles with minimal pauses until the person breathes normally, professional crews take over, or you physically cannot continue — swapping rescuers every two minutes keeps compressions strong.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Schools and workplaces run compression-only training so laypersons act without fear of doing it wrong',
          'Public-access AED programs map devices, register them with dispatchers, and drill their retrieval alongside fire extinguishers',
          'Emergency dispatchers give telephone-CPR instructions, turning any caller into the first link of the chain',
          'Smartphone apps alert trained volunteers nearby to an arrest, compressing response times to minutes',
          'Post-arrest protocols — targeted temperature management, coronary angiography, rehabilitation — convert more resuscitations into survivors who walk out of hospital',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Fear of hurting the victim stops more rescuers than fainting does: ribs may crack during effective compressions, and a surviving victim forgives a fracture far sooner than a brain forgives five minutes without blood. Compressions alone are acceptable for untrained rescuers — hesitation to give mouth-to-mouth is not a reason to do nothing. Stop checking for a pulse after a few seconds; if in doubt, compress. And this lesson is orientation, not certification: take a hands-on course with an accredited trainer to be ready.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Cardiac arrest', def: 'Sudden loss of effective heart pumping; the person is unresponsive and not breathing normally.' },
          { term: 'Chain of Survival', def: 'The six-link framework linking bystander recognition, CPR, defibrillation, advanced care, post-arrest care and recovery.' },
          { term: 'High-quality CPR', def: 'Compressions at 100–120 per minute, 5–6 cm deep, with full recoil, minimal interruptions and no over-ventilation.' },
          { term: 'AED', def: 'Automated external defibrillator — a device that analyzes the heart rhythm and delivers a shock for ventricular fibrillation or pulseless ventricular tachycardia.' },
          { term: 'Ventricular fibrillation', def: 'Chaotic electrical activity of the heart muscle; the most common shockable arrest rhythm in adults.' },
          { term: 'Compression fraction', def: 'The share of resuscitation time spent actually compressing; higher is better, interruptions cost survival.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The correct adult compression rate and depth are:',
            options: ['60–80 per minute, 2–3 cm', '100–120 per minute, 5–6 cm', '140–160 per minute, 8–10 cm', 'Any rate, as long as breaths are frequent'],
            answer: 1,
            explain: 'Guidelines specify 100–120 compressions per minute at 5–6 cm depth with full recoil and minimal pauses.',
          },
          {
            q: 'The first two links of the Chain of Survival are:',
            options: ['Defibrillation and hospital care', 'Recognition/activation of emergency response and early CPR', 'Recovery and rehabilitation', 'Advanced airway placement and drugs'],
            answer: 1,
            explain: 'The chain opens with recognizing the arrest, calling for help, and starting compressions — links owned by bystanders.',
          },
          {
            q: 'An AED works by:',
            options: ['Restarting a stopped heart with electricity', 'Analyzing the rhythm and shocking ventricular fibrillation so organized rhythm can return', 'Massaging the chest externally', 'Delivering oxygen to the lungs'],
            answer: 1,
            explain: 'The heart in fibrillation has not stopped electrically — it is chaotic; the AED stuns it briefly so its natural pacemaker can resume organized rhythm.',
          },
          {
            q: 'The most common mistake bystanders make is:',
            options: ['Compressing too fast and too deep', 'Doing nothing — waiting for professionals out of fear or uncertainty', 'Calling the emergency services too early', 'Using an AED without permission'],
            answer: 1,
            explain: 'Bystander inaction is the weakest link; compressions-only CPR is acceptable and far better than waiting, and AEDs are designed for lay use.',
          },
        ],
      },
    ],
  },
]
