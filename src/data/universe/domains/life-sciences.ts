/**
 * Knowledge Universe — domain file: Life Sciences
 *
 * Genetics, neuroscience, and plant biochemistry — complete lessons.
 * Future expansion passes append new topics below.
 */

import type { UniverseDomainFile } from '../types'

export const lifeSciences: UniverseDomainFile = {
  domain: 'Life Sciences',
  blurb:
    'Genetics, neuroscience, and plant biochemistry — how living systems store information, signal, and harvest energy.',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'bio-crispr-gene-editing',
      title: 'CRISPR and the Mechanics of Gene Editing',
      domain: 'Life Sciences',
      field: 'Genetics & Heredity',
      branch: 'Molecular Genetics',
      tier: 'advanced',
      concepts: [
        'Bacterial adaptive immunity, repurposed',
        'Guide RNA design and targeting',
        'The PAM requirement',
        'Double-strand breaks and repair: NHEJ versus HDR',
        'Base editing and prime editing',
        'Off-target effects',
        'Delivery and therapeutic applications',
      ],
      words: 880,
      readMins: 5,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'CRISPR-Cas9 turned genome editing from a specialist craft into a programmable routine. In Molecular Genetics the system is understood as a bacterial immune memory repurposed: a guide RNA matching twenty letters of target DNA directs the Cas9 nuclease to make a precise double-strand break, and the cell\u2019s own repair machinery finishes the edit. This topic walks the full mechanism — targeting, cutting, and repair — and follows it into the clinic.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Approved therapies now edit blood stem cells to treat sickle-cell disease, while agriculture, diagnostics, and thousands of research labs run on the same machinery. Understanding CRISPR is understanding the most consequential biotechnology of the decade.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Bacteria store fragments of invading phage DNA between clustered repeats in their genome; transcribed later, these fragments guide Cas nucleases to cut the same sequence should it return. It is acquired immunity in a single-celled organism — a memory written directly into heritable DNA.',
        },
        {
          kind: 'para',
          text: 'Engineers collapsed the natural two-RNA system into one synthetic guide: twenty targeting nucleotides fused to a scaffold that grips Cas9. Rewriting those twenty letters retargets the entire editing machine, which is why guide design is the everyday skill of CRISPR work.',
        },
        {
          kind: 'para',
          text: 'Cas9 only cuts beside a protospacer-adjacent motif — the short NGG sequence recognized by the common SpyCas9 — which the protein must bind before it unwinds and interrogates DNA. No PAM, no edit; where usable PAMs sit constrains every targeting plan.',
        },
        {
          kind: 'para',
          text: 'Making the break is the easy part; the edit depends on which repair pathway picks up the pieces. Non-homologous end joining glues ends back together, often adding or deleting letters — ideal for knocking a gene out. Homology-directed repair copies from a supplied template, enabling precise replacement but working efficiently mainly in dividing cells.',
        },
        {
          kind: 'para',
          text: 'Newer editors avoid the double-strand break entirely: base editors chemically convert C·G pairs to T·A (or A·T to G·C) within a small window, and prime editors write a search-and-replace sequence using a reverse transcriptase. They trade some flexibility for a dramatically cleaner safety profile.',
        },
        {
          kind: 'para',
          text: 'A guide with close matches elsewhere in the genome can cut those sites too, creating unintended mutations. Careful guide selection, high-fidelity Cas variants, and whole-genome checking are how that off-target risk is managed before any clinical use.',
        },
        {
          kind: 'para',
          text: 'Finally, the editor must physically reach its cells: lipid nanoparticles deliver to liver cells, engineered viruses such as AAV reach tissues like the eye and nervous system, and blood stem cells are often edited outside the body and returned. Delivery, not cutting, is the pacing problem for most therapies.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how a therapy edits blood stem cells to reactivate fetal hemoglobin in sickle-cell disease.',
            'Recall the governing idea: a guide RNA plus Cas9 creates a targeted break, and error-prone repair disrupts the chosen regulatory element.',
            'Apply: a guide is designed against an erythroid enhancer of the BCL11A gene, screened for sites with no near-perfect matches elsewhere; Cas9 cuts, and non-homologous end joining introduces small insertions or deletions that silence the enhancer in red-cell precursors.',
            'State the result: BCL11A repression lifts, fetal hemoglobin rises, and the resulting red cells resist sickling — the mechanism behind the first approved CRISPR therapy.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Sickle-cell disease and beta-thalassemia are treated by editing blood stem cells to raise fetal hemoglobin.',
            'Agriculture uses CRISPR for disease-resistant crops and improved livestock, regulated as conventional products in several countries.',
            'CRISPR-based diagnostics detect viral or genetic sequences with a simple visible readout.',
            'Research labs knock out genes in cell lines and organisms at scale to expose gene function.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The recurring error is imagining CRISPR pastes in a new gene at will — routine edits are far easier to break than to write, and template-guided precision still fails in most non-dividing cells. A second misconception is treating CRISPR as risk-free; off-target cuts are rare but real, which is why clinical candidates are screened so extensively.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Cas9', def: 'An RNA-guided nuclease that cuts both DNA strands at a sequence specified by its guide.' },
            { term: 'Guide RNA', def: 'A roughly 20-nucleotide targeting sequence fused to a Cas-binding scaffold.' },
            { term: 'PAM', def: 'The protospacer-adjacent motif (NGG for SpyCas9) required beside the target site.' },
            { term: 'NHEJ', def: 'Non-homologous end joining — fast, error-prone repair useful for gene knockout.' },
            { term: 'HDR', def: 'Homology-directed repair — template-guided repair enabling precise sequence replacement.' },
            { term: 'Off-target effect', def: 'An unintended edit at a genomic site similar to the intended target.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'What does the PAM sequence do in CRISPR-Cas9 editing?',
              options: ['It is the exact cut site itself', 'It is a motif Cas9 must recognize adjacent to the target before cutting', 'It signals the cell to start repairing', 'It forms the guide RNA scaffold'],
              answer: 1,
              explain: 'Cas9 binds the PAM first, then unwinds the adjacent DNA to check for guide complementarity; without a PAM there is no edit.',
            },
            {
              q: 'Which repair pathway would you rely on to knock out a gene?',
              options: ['Homology-directed repair with a perfect template', 'Non-homologous end joining, which introduces disruptive insertions and deletions', 'Base excision repair', 'Mismatch repair'],
              answer: 1,
              explain: 'NHEJ is error-prone by nature, and those small errors are exactly what scrambles a coding sequence into a nonfunctional one.',
            },
            {
              q: 'Prime editing differs from standard CRISPR-Cas9 mainly because it:',
              options: ['Uses a longer guide RNA only', 'Searches and replaces sequence without making a double-strand break', 'Cannot be targeted to chosen sites', 'Works only in bacteria'],
              answer: 1,
              explain: 'Prime editing nicks one strand and writes the edit with a reverse transcriptase, avoiding the double-strand break that risky repair pathways respond to.',
            },
            {
              q: 'A likely source of unintended mutations in CRISPR editing is:',
              options: ['The guide cutting similar off-target sites elsewhere in the genome', 'Using too many nucleotides in the cell', 'The PAM disappearing after the cut', 'RNA degradation inside the nucleus'],
              answer: 0,
              explain: 'Guides with close matches at other loci can direct Cas9 to cut there too; whole-genome screening checks for exactly this.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: DNA structure, transcription, and translation at core level. After this topic, move on to gene-therapy delivery platforms, epigenetic editing, and the ethics of germline versus somatic editing — the science is only half of the conversation.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'CRISPR-Cas9 is a bacterial immune system repurposed for programmable genome editing.',
            'A 20-letter guide RNA retargets the nuclease, and a PAM must sit beside the target.',
            'The break is easy; the edit depends on repair — NHEJ disrupts, HDR rewrites.',
            'Base and prime editors avoid double-strand breaks for safer small edits.',
            'Off-target effects and delivery remain the engineering frontier.',
          ],
        },
      ],
    },
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
      words: 850,
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
      id: 'bio-photosynthesis',
      title: 'Photosynthesis: Light and Dark Reactions',
      domain: 'Life Sciences',
      field: 'Botany',
      branch: 'Plant Biochemistry',
      tier: 'core',
      concepts: [
        'The overall equation',
        'Light reactions in the thylakoid',
        'Photosystems II and I',
        'Photophosphorylation by chemiosmosis',
        'The Calvin cycle',
        'RuBisCO and photorespiration',
        'C4 and CAM adaptations',
      ],
      words: 860,
      readMins: 5,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'Photosynthesis converts light energy into chemical energy and feeds nearly every food web on Earth. Plant Biochemistry splits the process into two stages: the light reactions in the thylakoid membranes, which make ATP and NADPH while splitting water to release oxygen, and the Calvin cycle in the stroma, which spends that energy fixing carbon dioxide into sugar. This topic follows electrons through both stages and meets the evolutionary patches plants use to handle a clumsy enzyme.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Every breath you take and nearly every calorie you eat traces back to this reaction, and land plants draw down well over one hundred gigatonnes of carbon each year. Agriculture, biofuels, and climate models all stand on its biochemistry.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The summary equation — six carbon dioxide plus six water, powered by light, yielding one glucose and six oxygen — hides a crucial detail: water is the electron donor, so the released oxygen comes from water, not from carbon dioxide. Isotope-labeling experiments settled this surprising fact.',
        },
        {
          kind: 'para',
          text: 'Chlorophyll embedded in the thylakoid membranes absorbs red and blue light and reflects green, which is why leaves look the color they do. Absorbed photons excite electrons that enter a transport chain threading two photosystems.',
        },
        {
          kind: 'para',
          text: 'Photosystem II first strips electrons from water — releasing oxygen and protons into the lumen — and boosts them partway; after the cytochrome complex, photosystem I re-energizes them and passes them to NADP⁺ to form NADPH. Two light hits per electron make the energetics work.',
        },
        {
          kind: 'para',
          text: 'As electrons flow, protons pile up inside the thylakoid lumen, and the gradient drives ATP synthase — chemiosmosis, the same coupling mitochondria use. Cyclic electron flow around photosystem I manufactures extra ATP whenever the Calvin cycle runs short.',
        },
        {
          kind: 'para',
          text: 'In the stroma, the enzyme RuBisCO attaches carbon dioxide to the five-carbon sugar RuBP; the six-carbon intermediate splits into two three-carbon molecules that ATP and NADPH reduce into G3P. One G3P exits per three turns of the cycle, while the rest regenerates RuBP to keep it running.',
        },
        {
          kind: 'para',
          text: 'RuBisCO sometimes grabs oxygen instead of carbon dioxide, and the salvage pathway that follows, photorespiration, burns energy and releases carbon dioxide. On hot, dry days stomata close, internal carbon dioxide falls, and this wasteful reaction intensifies.',
        },
        {
          kind: 'para',
          text: 'Two independent evolutionary fixes exist: C4 plants such as maize first fix carbon into four-carbon acids in mesophyll cells and ship them inward to concentrate carbon dioxide at RuBisCO, while CAM plants such as cacti open stomata at night and store acids until daylight returns.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Overall photosynthesis',
          latex: '6\\,CO_2 + 6\\,H_2O + \\text{light} \\rightarrow C_6H_{12}O_6 + 6\\,O_2',
          meaning: 'Six carbon dioxide and six water molecules become one glucose and six oxygen, powered by absorbed light.',
        },
        {
          kind: 'formula',
          name: 'Energy cost per glucose',
          latex: '\\text{Calvin cycle per glucose: } 18\\,ATP + 12\\,NADPH',
          meaning: 'Building one glucose costs the light reactions 18 ATP and 12 NADPH — the bill chemiosmosis must pay.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: follow one pair of electrons from its origin to NADPH, naming each stage it passes through.',
            'Recall the governing idea: the Z-scheme — water donates electrons, light re-energizes them twice, and NADP⁺ finally receives them.',
            'Apply: water is split at photosystem II with oxygen released; light absorbed at 680 nm boosts the pair through plastoquinone and the cytochrome complex, pumping protons; light absorbed at 700 nm in photosystem I re-energizes them for ferredoxin and NADP⁺ reductase.',
            'State the result: the pair ends in NADPH, having driven proton-gradient ATP synthesis along the way — light energy converted into the chemical currency the Calvin cycle spends.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Crop yields track photosynthetic efficiency, and transferring C4 machinery into rice is a long-running engineering goal.',
            'Satellite measurements of plant fluorescence feed global carbon-cycle and climate models.',
            'Algal biorefineries tune light spectra and carbon dioxide supply to raise fuel and feed output.',
            'Greenhouse growers enrich carbon dioxide and adjust lighting to push the Calvin cycle harder.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The most stubborn error is thinking plants photosynthesize instead of respiring — plants respire day and night; photosynthesis merely feeds it. Another is placing the Calvin cycle in darkness: the reactions are light-independent, not nocturnal, and they stop without the ATP and NADPH light provides.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Thylakoid', def: 'Membrane sac inside chloroplasts housing the light reactions.' },
            { term: 'Stroma', def: 'The fluid surrounding thylakoids where the Calvin cycle runs.' },
            { term: 'Photosystem', def: 'A light-harvesting complex whose reaction center ejects energized electrons.' },
            { term: 'Chemiosmosis', def: 'ATP synthesis driven by a proton gradient across a membrane.' },
            { term: 'RuBisCO', def: 'The carboxylase fixing CO₂ onto RuBP — the most abundant enzyme on Earth.' },
            { term: 'Photorespiration', def: 'The wasteful oxygen-fixing side reaction of RuBisCO that releases CO₂.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The oxygen released during photosynthesis comes from:',
              options: ['Carbon dioxide', 'Water', 'Glucose', 'ATP'],
              answer: 1,
              explain: 'Photosystem II splits water to obtain electrons, and the oxygen atoms of water are what leave as O₂.',
            },
            {
              q: 'The Calvin cycle takes place in the:',
              options: ['Thylakoid lumen', 'Stroma', 'Mitochondrial matrix', 'Nucleus'],
              answer: 1,
              explain: 'Carbon fixation happens in the fluid stroma surrounding the thylakoids, using ATP and NADPH from the light reactions.',
            },
            {
              q: 'ATP and NADPH produced in the light reactions are used to:',
              options: ['Split water', 'Reduce three-carbon intermediates to sugar in the Calvin cycle', 'Absorb photons', 'Open stomata'],
              answer: 1,
              explain: 'They supply the energy and reducing power that turn fixed carbon into G3P, the building block of glucose.',
            },
            {
              q: 'C4 and CAM plants evolved their special anatomy and timing mainly to reduce:',
              options: ['Water uptake', 'Photorespiration by raising CO₂ concentration at RuBisCO', 'Chlorophyll synthesis', 'NADPH export from the chloroplast'],
              answer: 1,
              explain: 'Both strategies concentrate carbon dioxide (in space for C4, in time for CAM) so RuBisCO grabs CO₂ rather than oxygen.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: basic cell structure and cellular respiration at core level. Next come plant anatomy and transport, ecosystem energy flow, and — for the chemistry-minded — the photophysics of light absorption. Pair with the respiration topic to see how the two pathways mirror each other.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Light reactions (thylakoids): split water, release O₂, produce ATP and NADPH.',
            'Calvin cycle (stroma): RuBisCO fixes CO₂, and ATP plus NADPH build sugar.',
            'The released oxygen comes from water — proven by isotope labeling.',
            'Proton gradients power ATP by chemiosmosis, exactly as in mitochondria.',
            'C4 and CAM are two independent fixes for the oxygen mistake of RuBisCO.',
          ],
        },
      ],
    },
  ],
}
