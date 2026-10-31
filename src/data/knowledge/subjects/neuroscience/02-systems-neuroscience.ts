/**
 * Knowledge Universe — Neuroscience — Chapter 02: Systems Neuroscience
 * 1 lesson · ~1,578 words
 * field: Neuroscience
 * legacy sources: x29-orphan-closure-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Systems Neuroscience]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 neuro-biological-bases-behavior — From Neurons to Brain Areas: The Nervous System at Work
 */
import type { KnowledgeTopic } from '../../types'

export const neuroscienceCh02: KnowledgeTopic[] = [
  {
    id: 'neuro-biological-bases-behavior',
    title: 'From Neurons to Brain Areas: The Nervous System at Work',
    domain: 'Life Sciences',
    field: 'Neuroscience',
    branch: 'Systems Neuroscience',
    tier: 'core',
    concepts: [
      'Neuron anatomy: dendrites, soma, axon, myelin',
      'Glia: astrocytes, oligodendrocytes, Schwann cells',
      'Central versus peripheral nervous system',
      'Somatic and autonomic divisions',
      'Sympathetic versus parasympathetic action',
      'Hindbrain, midbrain, forebrain',
      'Cortical lobes and their functions',
      'Language areas: Broca and Wernicke',
      'The endocrine system as a second messenger service',
      'Lesion and imaging evidence',
    ],
    words: 1578,
    readMins: 8,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Every thought, mood and movement is a biological event: behavior is what nervous tissue does. The survey question of this topic is architectural — what are the parts, how are they connected, and how does damage to each part predictably change what a person can do? Its twin exam skill is localization: given a symptom (loss of speech production, tremor, racing heart in fright), name the structure; given a structure (amygdala, Broca\u2019s area, sympathetic chain), name the behavior it biases. Structure and behavior are two readings of the same map, and this lesson draws the whole map.',
      },
      {
        kind: 'para',
        text: 'One boundary first. The electrical impulse inside a neuron and the chemical crossing between neurons are deep topics with lessons of their own — the nerve-signaling lesson owns the action potential, and the synapse lesson owns transmitter chemistry. This lesson takes the wider view those lessons presuppose: the anatomy of the cells, the divisions of the system, the geography of the brain, and the evidence that ties places to behaviors. Learn the map here; the other lessons run the electricity along it.',
      },
      { kind: 'heading', text: 'The cells: neurons and their assistants' },
      {
        kind: 'para',
        text: 'A neuron is built for one job — carrying information — and its anatomy shows it. Dendrites branch like a root system to receive signals from other cells; the soma (cell body) houses the nucleus and integrates what arrives; the axon carries the integrated message away, sometimes for a meter or more without interruption. Many axons wear insulation: myelin sheaths laid down by glial cells, which speed conduction dramatically and give white matter its color (gray matter, by contrast, is rich in cell bodies). The functional logic is reception, integration, transmission — in that order, along the cell.',
      },
      {
        kind: 'para',
        text: 'Glia outnumber neurons and do far more than glue. Astrocytes regulate the chemical environment around neurons, mopping and buffering so signaling stays reliable. Oligodendrocytes (in the central nervous system) and Schwann cells (in the periphery) lay down the insulating myelin — and the difference matters clinically: oligodendrocyte sheathing fails in multiple sclerosis, a central disease. Microglia act as the resident immune cleanup. Exam questions test exactly these pairings — which cell insulates where, which cell maintains the milieu — so learn them as bonded pairs, not a list.',
      },
      { kind: 'heading', text: 'The divisions: central and peripheral' },
      {
        kind: 'para',
        text: 'The nervous system splits first by geography. The central nervous system (CNS) is the brain and spinal cord — the processing core and the trunk line. The peripheral nervous system (PNS) is everything outside: nerves carrying messages to and from the body. The PNS then splits by function. The somatic division handles voluntary movement and external sensation — reaching for a cup, feeling its coolness. The autonomic division runs the internal organs without instruction, and it splits again into two opponents working as a team: the sympathetic division mobilizes for action (accelerates heart, dilates pupils, redirects blood to muscle — the fight-or-flight ensemble) and the parasympathetic division conserves and restores (slows heart, promotes digestion — rest-and-digest).',
      },
      {
        kind: 'para',
        text: 'The autonomic pair is the exam\u2019s favorite contrast because it is a clean either/or in any scenario. A near-miss on the highway: pupils wide, pulse pounding, mouth dry — sympathetic. The after-dinner lull: digestion humming, heart rate settled — parasympathetic. Most organs receive both inputs, and the organ\u2019s state is the balance — a push-pull design that lets the body sprint or settle within seconds. When a question names an organ response, trace it to its division first and the rest of the answer follows.',
      },
      { kind: 'heading', text: 'The brain: geography of behavior' },
      {
        kind: 'para',
        text: 'Working from bottom to top: the hindbrain manages the non-negotiables — the medulla runs breathing and heart rate, the pons relays and helps regulate sleep, the cerebellum coordinates movement and balance. The midbrain relays sensory and motor traffic and drives basic orienting. The forebrain carries the crown: the thalamus acts as a sensory relay, the hypothalamus (a pea-sized structure) regulates hunger, thirst, temperature and hormones, the hippocampus consolidates new memories, the amygdala tags emotional salience — fear especially — and the cerebral cortex, the wrinkled sheet on top, performs the highest functions.',
      },
      {
        kind: 'para',
        text: 'The cortex divides into four lobes with one-line functions: frontal — planning, decision, movement initiation and inhibition; parietal — body sensation and spatial sense; temporal — hearing and language comprehension; occipital — vision. Two language areas anchor the localization story: Broca\u2019s area (frontal lobe) produces speech, and damage there yields halting, effortful speech with comprehension largely intact; Wernicke\u2019s area (temporal lobe) comprehends language, and damage there yields fluent but empty speech with poor comprehension. The contrast — production versus comprehension, frontal versus temporal — is among the most-tested pairs in all of biopsychology.',
      },
      { kind: 'heading', text: 'Chemicals, methods and the behavior link' },
      {
        kind: 'para',
        text: 'The endocrine system is the body\u2019s second messaging service: glands release hormones into the blood for slow, widespread, long-lasting effects, while neurons deliver fast, targeted ones. The hypothalamus runs the bridge, directing the pituitary — the master gland — which in turn steers the others: adrenal glands release adrenaline for the sympathetic surge and cortisol for sustained stress (the stress lesson picks this story up). Behavior thus has two chemical channels, neural and hormonal, and exam questions often ask which channel explains a timescale: instant startle is neural; days-long mood shift is endocrine.',
      },
      {
        kind: 'para',
        text: 'How do we know any of this? Two evidence families. Lesion studies read nature\u2019s accidents: damage to Broca\u2019s area breaks speech production while comprehension survives — a double dissociation that localizes function. Imaging reads living brains: CT and MRI show structure; fMRI tracks blood flow as a proxy for activity; PET shows metabolic activity with radioactive tracers. Each method has a signature strength — lesions give causation, imaging gives location-with-correlation — and strong answers name the method that fits the claim. The habit that earns marks: structure, function, evidence — three columns, one line per brain region.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Symptom to structure, structure to symptom',
        steps: [
          'Symptom: \u201ca patient speaks in strained two-word bursts, understands questions fully, knows exactly what she wants to say.\u201d Fluent comprehension + broken production = Broca\u2019s area (frontal lobe), the classic expressive aphasia.',
          'Reverse: \u201ca patient speaks fluently and endlessly, but the words carry little meaning and he fails to follow commands.\u201d Production intact + comprehension broken = Wernicke\u2019s area (temporal lobe), receptive aphasia.',
          'Autonomic read: \u201cbefore a stage entrance — pounding heart, cold sweat, dry mouth.\u201d Mobilization ensemble = sympathetic division; the parasympathetic brake comes on as the speech ends.',
          'Structure call: \u201ca patient cannot consolidate new autobiographical memories after an infection.\u201d Memory consolidation = hippocampus (the famous surgical case behind this localization).',
          'The recipe is the same in both directions: name the behavior, find its column, read across to the structure — or name the structure and read across to the behavior. Three-column fluency is the whole skill.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'You sprint for a departing train. Heart racing, pupils dilated, digestion paused. Which division dominates?',
            options: ['parasympathetic', 'sympathetic', 'somatic', 'central'],
            answer: 1,
            explain: 'Mobilization for action — accelerated heart, dilated pupils, redirected blood flow — is the sympathetic division\u2019s fight-or-flight ensemble.',
          },
          {
            q: 'Which glial cells myelinate axons in the central nervous system?',
            options: ['Schwann cells', 'astrocytes', 'oligodendrocytes', 'microglia'],
            answer: 2,
            explain: 'Oligodendrocytes sheath CNS axons; Schwann cells do the equivalent job in the periphery. The pair is a standard exam contrast.',
          },
          {
            q: 'Damage leaves a patient with fluent but meaningless speech and poor comprehension. Which area and lobe?',
            options: [
              'Broca\u2019s area, frontal lobe',
              'Wernicke\u2019s area, temporal lobe',
              'cerebellum, hindbrain',
              'occipital cortex',
            ],
            answer: 1,
            explain: 'Fluent-but-empty output with broken comprehension is receptive aphasia — Wernicke\u2019s area in the temporal lobe. Broca\u2019s damage gives the opposite profile.',
          },
          {
            q: 'The hypothalamus influences behavior largely through which partner structure?',
            options: [
              'the cerebellum',
              'the pituitary gland',
              'the hippocampus',
              'the spinal cord',
            ],
            answer: 1,
            explain: 'The hypothalamus directs the pituitary — the master gland — whose hormones steer the other endocrine glands; it is the neural-to-hormonal bridge.',
          },
          {
            q: 'A researcher wants to SEE which brain regions become more active during a memory task, in a living volunteer. Best tool?',
            options: ['lesion analysis', 'fMRI', 'microglial staining', 'reflex hammer'],
            answer: 1,
            explain: 'fMRI tracks blood-oxygen changes as a proxy for neural activity — activity location in a living brain. Lesions give causation but only post-damage.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Swapping the two aphasias: Broca breaks production with comprehension spared, Wernicke the reverse — the pair falls apart if memorized as one blob. Confusing oligodendrocytes with Schwann cells; the CNS/PNS split decides which. Reading \u201cnesia\u201d clues as hippocampal when they are cortical sensory losses — the hippocampus consolidates NEW memories. Calling the parasympathetic division \u201cinactive\u201d — it is always working; it dominates during rest and digestion. Treating hormones and neurotransmitters as interchangeable — glands broadcast slowly through blood, neurons fire fast across synapses. And claiming imaging shows causation — only lesions and experiments approach it; fMRI shows correlated activity.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none, though this map makes the deeper lessons land better. Follow with the action-potentials lesson (how the signal runs), the synapse lesson (how it crosses), and the stress lesson (the endocrine channel in action). Primary reading: OpenStax, Psychology 2e, ch.3 \u201cBiopsychology\u201d — \u00a73.2 Cells of the Nervous System, \u00a73.3 Parts of the Nervous System, \u00a73.4 The Brain and Spinal Cord, \u00a73.5 The Endocrine System (openstax.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Neuron anatomy: dendrites receive, soma integrates, axon transmits; myelin insulates.',
        'Astrocytes keep the milieu; oligodendrocytes (CNS) and Schwann cells (PNS) myelinate.',
        'CNS = brain + spinal cord; PNS splits somatic (voluntary) and autonomic (organs).',
        'Sympathetic mobilizes, parasympathetic restores — organs ride the push-pull.',
        'Hindbrain keeps you alive, forebrain makes you you; four lobes, one line each.',
        'Broca produces (frontal), Wernicke comprehends (temporal); lesions localize, imaging locates.',
      ] },
    ],
  },
]
