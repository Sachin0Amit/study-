/**
 * Knowledge Universe — Neuroscience — Chapter 01: Cellular Neurophysiology
 * 2 lessons · ~2,180 words
 * field: Neuroscience
 * legacy sources: life-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Cellular Neurophysiology]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bio-action-potentials — Action Potentials and Nerve Signaling
 *   01.2 neuro-synapse-neurotransmitters — The Synapse: How Neurons Talk in Chemistry
 */
import type { KnowledgeTopic } from '../../types'

export const neuroscienceCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-action-potentials',
    title: 'Action Potentials and Nerve Signaling',
    domain: 'Life Sciences',
    field: 'Neuroscience',
    branch: 'Cellular Neurophysiology',
    tier: 'intermediate',
    concepts: [
      'Resting membrane potential',
      'Threshold and voltage-gated sodium channels',
      'Depolarization and the all-or-none law',
      'Repolarization by potassium efflux',
      'Refractory periods',
      'Saltatory conduction in myelinated axons',
    ],
    words: 937,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Nerve impulses are electrical events built from moving ions. In Cellular Neurophysiology the action potential is a stereotyped, all-or-none spike: voltage-gated sodium channels open at threshold, sodium floods in and drives the interior briefly positive, then potassium efflux restores the negative resting potential. This topic traces that voltage journey and shows how myelin lets spikes race along axons at over one hundred meters per second.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every thought, sensation, and movement rides on these spikes, and local anesthetics, many toxins, and several diseases act directly on the channels involved. Reading an electrocardiogram or understanding anesthesia both start here.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The resting membrane sits near −70 millivolts because the sodium–potassium pump exports three sodium ions for every two potassium ions it imports, while leak channels let potassium diffuse back out. The result is an inside-negative voltage that stores potential energy for signaling.',
      },
      {
        kind: 'para',
        text: 'A depolarizing input opens some voltage-gated sodium channels, and the inward sodium current depolarizes the membrane further, opening more channels — positive feedback. At roughly −55 millivolts the feedback becomes self-sustaining: threshold is the point of no return.',
      },
      {
        kind: 'para',
        text: 'Each open sodium channel passes thousands of ions per millisecond, driving the interior briefly toward +30 millivolts. Because a stimulus either triggers the full spike or nothing at all, intensity is coded by firing rate rather than spike height.',
      },
      {
        kind: 'para',
        text: 'Within about a millisecond, sodium channels inactivate and slower potassium channels open, letting potassium leave and pull the voltage back down. The trace typically overshoots into a brief afterhyperpolarization before settling at rest again.',
      },
      {
        kind: 'para',
        text: 'While sodium channels are inactivated the membrane absolutely cannot fire again; while potassium channels remain open, firing requires extra stimulus. These absolute and relative refractory periods enforce one-way propagation and cap the maximum firing frequency.',
      },
      {
        kind: 'para',
        text: 'Myelin insulates the axon except at the nodes of Ranvier, so the spike regenerates only at the nodes, leaping node to node in saltatory conduction. This raises conduction velocity up to a hundredfold while shrinking the metabolic cost of signaling.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Nernst equation',
        latex: 'E_{\\text{ion}} = \\frac{RT}{zF}\\ln\\frac{[\\text{ion}]_{\\text{out}}}{[\\text{ion}]_{\\text{in}}}',
        meaning: 'The voltage at which an ion is in equilibrium; about 61.5 mV per decade of concentration ratio for a singly charged ion at body temperature.',
      },
      {
        kind: 'formula',
        name: 'Conductance-weighted membrane voltage',
        latex: 'V_m \\approx \\frac{g_K E_K + g_{Na} E_{Na}}{g_K + g_{Na}}',
        meaning: 'The membrane voltage is a permeability-weighted average of the Nernst potentials of the ions involved.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the potassium equilibrium potential for a neuron with 5 mM potassium outside and 140 mM inside, at body temperature.',
          'Recall the governing idea: the Nernst equation gives the voltage at which potassium influx and efflux balance.',
          'Apply: E_K = 61.5 × log(5/140) millivolts for a singly charged ion; log(5/140) ≈ −1.45, so E_K ≈ 61.5 × (−1.45) ≈ −89 mV.',
          'State the result: E_K ≈ −89 mV, close to the resting potential — which is why even a small rise in external potassium, as in hyperkalemia, depolarizes neurons and muscle enough to trigger arrhythmias and cramps.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Local anesthetics such as lidocaine block voltage-gated sodium channels, halting propagation in pain fibers.',
          'Tetrodotoxin in pufferfish and saxitoxin in harmful algal blooms paralyze by blocking the same channels.',
          'Multiple sclerosis strips myelin in the central nervous system, slowing or blocking saltatory conduction.',
          'Antiarrhythmic drugs target related channel families to steady the heart\u2019s electrical rhythm.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'A persistent misconception is that a nerve impulse is electrons flowing like current in a wire — in fact charge is carried by ions crossing the membrane, and the signal is a traveling wave of channel opening. Also, stronger stimuli do not produce taller spikes; they raise firing frequency, because of the all-or-none law.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Resting potential', def: 'The steady inside-negative voltage, near −70 mV, of an unexcited neuron.' },
          { term: 'Threshold', def: 'The depolarization, near −55 mV, at which sodium-channel positive feedback becomes self-sustaining.' },
          { term: 'Refractory period', def: 'The interval after a spike during which a new one cannot (absolute) or can barely (relative) be triggered.' },
          { term: 'Saltatory conduction', def: 'Node-to-node jumping of the spike along a myelinated axon.' },
          { term: 'Depolarization', def: 'A shift of membrane voltage toward zero or positive values.' },
          { term: 'Myelin', def: 'Insulating glial wrapping that speeds conduction and lowers metabolic cost.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'At the peak of the action potential, the membrane is most permeable to:',
            options: ['Potassium', 'Sodium', 'Chloride', 'Calcium'],
            answer: 1,
            explain: 'Open voltage-gated sodium channels dominate briefly, dragging the voltage toward the sodium equilibrium potential near +30 mV.',
          },
          {
            q: 'A stronger stimulus on a neuron causes:',
            options: ['Taller spikes', 'A higher frequency of identical spikes', 'Wider spikes', 'An immediate jump to +30 mV at rest'],
            answer: 1,
            explain: 'The all-or-none law fixes spike size; intensity is encoded by how often the neuron fires.',
          },
          {
            q: 'Saltatory conduction happens because:',
            options: ['Myelin makes ions travel faster inside the axon', 'The spike regenerates only at the nodes of Ranvier', 'Sodium channels are absent from the nodes', 'The axon is wider'],
            answer: 1,
            explain: 'Myelin insulates the internodes, so the signal jumps between nodes where dense channels regenerate it.',
          },
          {
            q: 'During the absolute refractory period:',
            options: ['Potassium channels are permanently closed', 'Sodium channels are inactivated, so no new spike can begin', 'The neuron is hyperpolarized beyond recovery', 'The axon has lost its myelin'],
            answer: 1,
            explain: 'Inactivated sodium channels cannot reopen until the membrane repolarizes, making a second spike impossible in that window.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: cell membrane structure and ion gradients from introductory biology. Continue to synaptic transmission and neurotransmitters, then to neural circuits; the Nernst-equation background pays off again in cardiac and renal physiology.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Resting potential near −70 mV, set by the sodium–potassium pump and potassium leak.',
          'Threshold near −55 mV: sodium-channel positive feedback locks in.',
          'Depolarization to about +30 mV, then potassium efflux repolarizes — all or none.',
          'Refractory periods enforce one-way travel and frequency coding.',
          'Myelin plus nodes equals saltatory conduction: fast and metabolically cheap.',
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: "neuro-synapse-neurotransmitters",
    title: "The Synapse: How Neurons Talk in Chemistry",
    domain: "Life Sciences",
    field: "Neuroscience",
    branch: "Cellular Neurophysiology",
    tier: "intermediate",
    concepts: [
      "From electrical pulse to chemical signal",
      "Vesicles, calcium, and SNARE-driven fusion",
      "Ionotropic versus metabotropic receptors",
      "Transmitter classes: glutamate, GABA, acetylcholine, monoamines, peptides",
      "Termination by reuptake and enzymatic breakdown",
      "Drugs and poisons as synaptic interventions",
      "The synapse as a computational unit",
    ],
    words: 1248,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "The action potential, covered in the nerve-signaling lesson, is a shout that stays inside one cell — an electrical pulse racing to the axon terminal and stopping there. Crossing to the next neuron is chemistry's job. At the synapse, electricity becomes vesicles of transmitter released into a gap billionths of a meter wide, and becomes electricity again on the far side. This whisper, not the shout, is where most drugs and poisons act.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Virtually every drug that changes mood, sleep, pain, anesthesia, or attention works at synapses — as do nerve agents and many pesticides. Synaptic failure is also the machinery of Alzheimer's and Parkinson's disease, which makes the synapse the most targeted structure in medicine.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "A chemical synapse has three parts. The presynaptic terminal is a bag of small vesicles, each holding thousands of transmitter molecules, docked at the active zone ready to fuse. The synaptic cleft is the gap — roughly 20 to 40 nanometers — that the message must cross. The postsynaptic membrane carries receptors packed into a dense mat. When an action potential arrives, voltage-gated calcium channels open, calcium pours in, and calcium sensors on the vesicles pull the two membranes together: fusion, release, and diffusion across the cleft within microseconds.",
      },
      {
        kind: "para",
        text: "On the far side, which receptor the transmitter finds decides the effect — the transmitter is only a key, and the receptor is the lock. Ionotropic receptors are ligand-gated channels: transmitter binds, a pore opens, ions flow, and the postsynaptic voltage shifts within a millisecond. Metabotropic receptors are G-protein couplings that start cascades — opening channels indirectly, altering gene expression, tuning excitability for seconds to minutes. Fast computation rides the first kind; mood, arousal, and modulation ride the second.",
      },
      {
        kind: "para",
        text: "The cast of transmitters is small and heavily reused. Glutamate is the brain's default excitatory signal; GABA is its mirror, the main inhibitory brake. Acetylcholine runs the neuromuscular junction, commanding contraction, and carries parasympathetic messages. The monoamines — dopamine, serotonin, noradrenaline — are modulators: small clusters of brainstem neurons projecting to millions of targets, adjusting gain rather than carrying content, like volume and tone controls rather than the melody. Neuropeptides such as endorphins and oxytocin are larger, slower, and co-released with the classics to shift whole behavioral states.",
      },
      {
        kind: "para",
        text: "A message that never ends is a malfunction, so every synapse has a broom. Reuptake transporters pump transmitter back into the terminal or surrounding glia — serotonin's transporter and dopamine's are the targets of antidepressants and cocaine respectively. Enzymes destroy some transmitters in the cleft: acetylcholinesterase splits acetylcholine within about a millisecond of its release, among the fastest enzymes in biology. Diffusion carries the rest away. Termination is what makes the signal a signal rather than a state.",
      },
      {
        kind: "para",
        text: "This is where pharmacology lives. Nicotine mimics acetylcholine at one receptor type; curare blocks that same receptor at the neuromuscular junction, paralyzing breathing while the patient stays fully awake. Botulinum toxin cleaves the vesicle-docking proteins so nothing is released — lethal in nanograms, smoothed into foreheads at vast dilution. Sarin and organophosphate pesticides inhibit acetylcholinesterase, so acetylcholine accumulates and the system seizes; antidotes reactivate the enzyme. SSRIs block the serotonin transporter, caffeine blocks adenosine receptors, propofol strengthens GABA receptors. Every step of transmission — transmitter, receptor, transporter, enzyme — is a drug target.",
      },
      {
        kind: "para",
        text: "Finally, the synapse is a computational unit, not a wire. One vesicle produces a tiny quantal blip; a firing terminal releases several, and the postsynaptic cell sums thousands of blips from hundreds of inputs, firing only when threshold is crossed — the decision logic the nerve-signaling lesson introduced. Electrical synapses, direct gap-junction tunnels, skip the chemistry for speed where synchrony matters; and volume transmission lets transmitters spill beyond the cleft to modulate whole neighborhoods.",
      },
      {
        kind: "formula",
        name: "Receptor occupancy",
        latex: "f = \\frac{[L]}{[L] + K_d}",
        meaning: "Fraction of receptors bound at ligand concentration [L]; Kd, the dissociation constant, is the concentration that half-occupies receptors — lower Kd means tighter binding.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: whether a drug with Kd of 2 nanomolar for its receptor meaningfully occupies receptors at a plasma concentration of 6 nanomolar.",
          "Recall the relation: occupancy equals concentration divided by concentration plus Kd.",
          "Apply: f = 6/(6 + 2) = 0.75, so three quarters of receptors are bound; at 2 nM exactly half would be, by definition of Kd.",
          "State the result: 6 nM is three times Kd, giving 75 percent occupancy. Doubling the dose to 16 nM would only reach 89 percent — diminishing returns that explain therapeutic windows and why a competing drug with lower Kd wins the same receptors.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "SSRIs and most psychiatric medications are reuptake blockers or receptor modulators designed at the synapse.",
          "Anesthesia and sedation run on GABA enhancement; opioid drugs on receptor mimicry, with respiratory depression as the lethal cost.",
          "Myasthenia gravis, in which antibodies destroy acetylcholine receptors, is treated with acetylcholinesterase inhibitors to strengthen the transmission that remains.",
          "Nerve-agent antidote kits — atropine plus an enzyme reactivator — are pure synaptic pharmacology.",
          "Neonicotinoid pesticides act on insect nicotinic receptors; their selectivity, and its limits for pollinators, is receptor pharmacology.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The classic error is one transmitter, one function: glutamate excites and GABA inhibits only in the default context, and the sign can flip with the receptor. Dopamine is not the pleasure molecule — it is a learning signal about prediction. The chemical-imbalance story is shorthand at best: drugs act within hours, moods change over weeks, so downstream adaptation is doing much of the work. And not all synapses are chemical — gap junctions pass signals electrically.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Synaptic cleft", def: "The 20-40 nanometer gap between presynaptic terminal and postsynaptic membrane." },
          { term: "Synaptic vesicle", def: "A membrane sac holding thousands of transmitter molecules, docked and calcium-triggered for release." },
          { term: "Ionotropic receptor", def: "A ligand-gated ion channel that opens within milliseconds of transmitter binding." },
          { term: "Metabotropic receptor", def: "A G-protein-coupled receptor acting through cascades over seconds to minutes." },
          { term: "Reuptake transporter", def: "A pump reclaiming transmitter from the cleft — the target of SSRIs and cocaine." },
          { term: "Acetylcholinesterase", def: "The enzyme that destroys acetylcholine within about a millisecond; poisoned by sarin." },
          { term: "Neuromodulator", def: "A transmitter such as serotonin that adjusts the gain of circuits rather than carrying fast messages." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Transmitter release from vesicles is triggered directly by:",
            options: ["sodium influx at the terminal", "calcium influx through voltage-gated channels", "potassium efflux", "the transmitter binding its own receptor"],
            answer: 1,
            explain: "The arriving spike opens calcium channels; calcium sensors on vesicles then drive membrane fusion.",
          },
          {
            q: "Curare kills by:",
            options: ["blocking acetylcholine receptors at the neuromuscular junction, paralyzing muscles including the diaphragm", "destroying synaptic vesicles everywhere", "inhibiting acetylcholinesterase so muscles seize", "blocking GABA receptors in the brain"],
            answer: 0,
            explain: "It competes at the receptor, so muscle fibers never hear the command to breathe.",
          },
          {
            q: "Reuptake blockers such as SSRIs work by:",
            options: ["adding more transmitter synthesis instantly", "keeping released transmitter active in the cleft longer", "increasing vesicle numbers", "blocking the postsynaptic receptors"],
            answer: 1,
            explain: "Blocking the transporter slows clearance, so each released quantum lingers and binds more receptors.",
          },
          {
            q: "The defining difference between ionotropic and metabotropic receptors is:",
            options: ["the transmitter each can bind", "speed: channels act in milliseconds, G-protein cascades over seconds to minutes", "their location in the brain", "whether the synapse is chemical or electrical"],
            answer: 1,
            explain: "Direct pore-opening is fast; indirect cascade signaling is slow but longer-lasting.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Prerequisite: the action-potential lesson for the electrical half of signaling. Continue with the neuroplasticity lesson, where NMDA-type glutamate receptors turn synaptic coincidence into memory, and the brain-map lesson for where these circuits live — after which pharmacology reads like applied synapse biology.",
        tone: "path",
      },
    ],
  },
]
