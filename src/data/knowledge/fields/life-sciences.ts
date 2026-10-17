/**
 * Knowledge Universe — domain file: Life Sciences
 *
 * Genetics, neuroscience, and plant biochemistry — complete lessons.
 * Future expansion passes append new topics below.
 */

import type { KnowledgeDomainFile } from '../types'

export const lifeSciences: KnowledgeDomainFile = {
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
    // ------------------------------------------------------------------
    {
      id: 'bio-evolution-natural-selection',
      title: 'Evolution by Natural Selection',
      domain: 'Life Sciences',
      field: 'Evolutionary Biology',
      branch: 'Evolution',
      tier: 'core',
      concepts: [
        'Variation, inheritance, and differential success',
        'Artificial selection as proof of principle',
        'Fitness means reproductive success',
        'Directional, stabilizing, and disruptive selection',
        'Genetic drift and the founder effect',
        'Evidence: fossils, homology, molecules',
        'Speciation and reproductive isolation',
      ],
      words: 940,
      readMins: 5,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'In 1858 Charles Darwin and Alfred Russel Wallace proposed a mechanism so compact it fits in one sentence: if individuals vary, if the variation is inherited, and if some variants leave more descendants, populations change. Evolution by natural selection follows from those three premises as inexorably as falling follows gravity. This topic assembles the logic and the algebra, surveys the evidence from fossils to genomes, and catches selection in the act — from finch beaks to antibiotic resistance.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Evolution is not a chapter of history; it is running now, with consequences you can vaccinate against. Antibiotic resistance, pesticide rebound, and the annual reshuffling of flu strains are selection in real time, while crop breeding, conservation, and vaccine design apply the same logic on purpose.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Selection needs exactly three ingredients. Individuals in a population differ — in beak depth, enzyme efficiency, coat color. Some of that difference is heritable, written in genes and passed downward. And the variants differ in their odds of surviving and reproducing. Given all three, heritable trait frequencies shift across generations mechanically, with no foresight or intent required. Remove any one ingredient and the engine stalls: no variation to select, no inheritance to retain it, or no differential success to sort it.',
        },
        {
          kind: 'para',
          text: 'Darwin\u2019s opening argument was not drawn from nature but from the farm. Pigeons, cattle, and cabbages had been transformed within a few human generations simply by choosing who breeds: selection so weak it merely pleases fanciers turned a wolf\u2019s descendant into a chihuahua. Selection imposed by starvation, predators, parasites, and mates — operating over millions of generations — has had incomparably longer to sculpt. Artificial selection remains evolution\u2019s most visible demonstration.',
        },
        {
          kind: 'para',
          text: 'In evolutionary biology, fitness is not strength, health, or longevity; it is expected reproductive contribution to future generations. A sluggish bacterium that tolerates an antibiotic out-breeds its faster, susceptible rivals the moment the drug is present — in that environment, it is the fittest organism alive. Fitness is also situational: the trait that wins a drought loses a flood, which is why natural populations keep a stock of variation rather than converging on one perfect design.',
        },
        {
          kind: 'para',
          text: 'Selection paints with three strokes. Directional selection shifts a trait\u2019s average, as when a drought on the Galápagos deepened finch beaks for hard seeds. Stabilizing selection prunes both extremes, holding human birth weight near its safest middle. Disruptive selection favors both ends against the middle — big and small seeds rewarding different beak sizes — and can split a population toward separate species. Every case reduces to which variants leave the most descendants.',
        },
        {
          kind: 'para',
          text: 'Selection is not the only cause of evolutionary change. In small populations, sampling luck alone jiggles allele frequencies from generation to generation — genetic drift — and a few colonists founding an island population carry a biased sample of the source\u2019s variation, the founder effect. Drift explains island oddities, the genetic poverty of endangered species, and why some traits spread with no adaptive story whatsoever. The smaller the population, the louder the noise.',
        },
        {
          kind: 'para',
          text: 'The evidence triangulates from independent directions. The fossil record shows ordered sequences — feathered dinosaurs, whale hind limbs becoming flippers — with genuine transitional forms at predicted depths. Comparative anatomy exposes homology: one forelimb skeleton serving a bat\u2019s wing, a whale\u2019s flipper, and a human arm. Molecular biology seals the case with a shared genetic code, matching mutation clocks, and human chromosome 2 visibly formed by the fusion of two ape chromosomes. Independent witnesses, one verdict.',
        },
        {
          kind: 'para',
          text: 'Evolution is easiest to watch when lineages split. Divided populations — by geography, ecology, or timing — accumulate differences until interbreeding fails, and there are separate species. The Galápagos finches, the cichlid flocks of Africa\u2019s rift lakes, and the apple- and hawthorn-timing races of one fly show speciation caught mid-act at every stage of completion. Diversity, on this view, is just divergence, repeated.',
        },
        { kind: 'heading', text: 'The Mathematics' },
        {
          kind: 'formula',
          name: 'Hardy–Weinberg equilibrium',
          latex: 'p^2 + 2pq + q^2 = 1',
          meaning: 'With allele frequencies p and q, genotype frequencies stay constant generation after generation absent selection, drift, mutation, and migration — the null model that evolution departs from.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: in a population where a recessive trait shows in 16 percent of individuals, estimate the share who silently carry one copy of the allele.',
            'Recall the governing idea: under Hardy–Weinberg equilibrium, recessive homozygotes occur at frequency q² and heterozygous carriers at 2pq.',
            'Apply: q² = 0.16 gives q = 0.4, so p = 0.6; carriers number 2pq = 2 × 0.6 × 0.4 = 0.48, and homozygous dominants p² = 0.36.',
            'State the result: about 48 percent of the population carries the allele — three times the number who express it — which is why rare recessive conditions persist unseen and why carrier screening is informative.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Antibiotic and pesticide resistance evolve by selection on standing variation, witnessed within years — evolution with a body count.',
            'Crop and livestock improvement is directed evolution, now accelerated by genomic selection models.',
            'Conservation genetics manages allele frequencies to pull small, inbred populations back from the edge.',
            'Annual influenza vaccines are forecasts of which evolving strains selection will amplify next season.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The recurring errors are structural: individuals do not evolve — populations do; selection acts on phenotypes, but only heritable differences evolve. Fitness means reproductive success, not gym performance. And evolution is no ladder toward perfection — it is tracking of local conditions that keep changing, and much of it proceeds by drift with no adaptive story at all.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Natural selection', def: 'Differential survival and reproduction of heritable variants, shifting trait frequencies in populations.' },
            { term: 'Fitness', def: 'An organism\u2019s expected genetic contribution to coming generations in its environment.' },
            { term: 'Allele frequency', def: 'The share of a gene\u2019s copies in a population represented by one variant.' },
            { term: 'Genetic drift', def: 'Chance change in allele frequencies, strongest in small populations.' },
            { term: 'Founder effect', def: 'Reduced, biased variation in a population begun by a few colonizers.' },
            { term: 'Homology', def: 'Similarity inherited from a common ancestor, like the shared forelimb skeleton.' },
            { term: 'Speciation', def: 'The origin of species by reproductive isolation between diverging lineages.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Natural selection directly acts upon:',
              options: ['An individual\u2019s genotype', 'An individual\u2019s phenotype, while populations evolve', 'The mutation rate itself', 'Future generations in advance'],
              answer: 1,
              explain: 'Selection screens expressed traits; only when differences are heritable does the population\u2019s allele mix shift.',
            },
            {
              q: 'Under antibiotic treatment, the fittest bacterium is the one that:',
              options: ['Grows fastest without the drug', 'Reproduces most in that environment, resistance included', 'Is physically largest', 'Mutates most often'],
              answer: 1,
              explain: 'Fitness is context-dependent reproductive success — in a drug-soaked environment, tolerance wins by definition.',
            },
            {
              q: 'Human birth weight, with both extremes selected against, illustrates:',
              options: ['Directional selection', 'Stabilizing selection', 'Disruptive selection', 'Genetic drift'],
              answer: 1,
              explain: 'The middle of the distribution is favored, holding the trait steady around its safest value.',
            },
            {
              q: 'A recessive phenotype appears in 9 percent of a population. The carrier frequency is closest to:',
              options: ['9 percent', '42 percent', '18 percent', '81 percent'],
              answer: 1,
              explain: 'q = √0.09 = 0.3 and p = 0.7, so carriers 2pq = 0.42 — nearly five times the affected fraction.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Prerequisites: Mendelian inheritance and basic cell biology. Continue with population genetics — selection coefficients and coalescence — molecular evolution and phylogenetics, then the evolution of development and behavior. Hardy–Weinberg algebra is the tool you will reuse most; the CRISPR lesson pairs naturally for how modern biology reads the genetic record.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'bio-immune-system',
      title: 'The Immune System: Innate to Adaptive Defense',
      domain: 'Life Sciences',
      field: 'Immunology',
      branch: 'Biomedical Science',
      tier: 'intermediate',
      concepts: [
        'Barrier defenses: skin, acid, and mucus',
        'Innate immunity: fast, generic, memoryless',
        'Inflammation and phagocytes',
        'B cells, antibodies, and clonal selection',
        'T cells and cell-mediated defense',
        'Immunological memory and vaccination',
        'Tolerance and its failures',
      ],
      words: 950,
      readMins: 5,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Your body runs an open-border policy — food, air, cuts, kisses — and still keeps some thirty trillion of its own cells under protection. The immune system manages this with a two-tier defense: an innate rapid-response force that fires on anything generic and dangerous, and an adaptive arm that learns specific enemies and remembers them for decades. This topic walks that defense from skin to antibody, and ends with the engineering built on it — vaccines, monoclonal drugs, and transplants.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Vaccination has saved more lives than any other medical technology, and the immune system is its engine. Allergies, autoimmunity, transplant rejection, cancer immunotherapy, and a fast-growing slice of the pharmacology cabinet all become legible once you can tell innate from adaptive, and recognition from memory.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Defense begins with architecture. Skin — a dead, keratinized layer hostile to microbes — plus mucous linings, stomach acid, lysozyme in tears, and the mucus escalator that sweeps airways clean stop most invaders before any cell responds. These barriers explain why burns and catheters, both breaches of the wall, carry such infection risk. The unglamorous first line quietly does most of the work.',
        },
        {
          kind: 'para',
          text: 'Past the barriers waits the innate system: minutes to hours, no specific target, no memory, identical on first and hundredth encounter. Its cells recognize conserved danger motifs — bacterial cell-wall sugars, viral nucleic acids, the stress flags of damaged cells — with hardwired receptors. Neutrophils and macrophages devour; natural killer cells execute infected cells; complement punctures membranes. Speed and breadth are its strengths; refinement is not its job.',
        },
        {
          kind: 'para',
          text: 'Injured cells broadcast alarms — histamine, cytokines — that dilate vessels and make them leaky: redness, warmth, swelling. Neutrophils arrive within minutes, monocytes follow and become macrophages, and both engulf debris and pathogens, then display fragments of the enemy on their surfaces like trophies for the next tier. Inflammation is not a malfunction but triage: recruit, contain, and report, at the cost we experience as symptoms.',
        },
        {
          kind: 'para',
          text: 'The adaptive arm is slow on first meeting, taking days, but surgical and permanent. B cells carry receptors assembled by randomly shuffling gene segments; when one matches an antigen and receives helper approval, it explodes into a clone of plasma cells that pour out millions of soluble copies of that receptor — antibodies — which neutralize, coat, and tag pathogens for destruction. Diversity is designed-in randomness, a lottery with millions of tickets drawn per infection.',
        },
        {
          kind: 'para',
          text: 'Not every enemy floats free: viruses hide inside cells, and tumors are self gone wrong. Cytotoxic T cells patrol what cells display on their MHC molecules — fragments of the proteins being made inside — and kill any cell flashing foreign or abnormal content. Helper T cells are the system\u2019s sergeants, licensing B cells and activating macrophages; HIV\u2019s devastation traces precisely to this lynchpin. Cell-mediated immunity is defense against the enemy within.',
        },
        {
          kind: 'para',
          text: 'After an infection clears, most effector cells die, but memory B and T cells persist — sometimes for a lifetime. Reinfection now meets a force pre-primed to respond within hours at high potency, which is why chickenpox strikes once. Vaccination is the deliberate rehearsal: present a safe mimic — attenuated virus, protein subunit, or messenger-RNA instructions — and let the system build the memory without paying the disease\u2019s price.',
        },
        {
          kind: 'para',
          text: 'The most dangerous targets of all are the body\u2019s own tissues, so the system is educated against friendly fire: self-reactive cells are deleted in the bone marrow and thymus, and regulatory cells police the rest. Failure of tolerance produces autoimmunity — type 1 diabetes, rheumatoid arthritis, multiple sclerosis. Misaimed responses to harmless outsiders produce allergy; absent responses produce immunodeficiency. Immunity is a tuned instrument, not a volume knob.',
        },
        { kind: 'heading', text: 'The Mathematics' },
        {
          kind: 'formula',
          name: 'Combinatorial receptor diversity',
          latex: 'N \\approx N_V \\times N_D \\times N_J',
          meaning: 'Independently chosen V, D, and J gene segments multiply — then heavy chains pair with light chains — to build millions of distinct receptors before junctional variation even counts.',
        },
        {
          kind: 'formula',
          name: 'Clonal expansion',
          latex: 'N(t) = N_0 \\times 2^{t/d}',
          meaning: 'A stimulated B cell doubling with period d yields tens of thousands of descendants in a week, and a primary response recruits many founders at once.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how many distinct antibodies the immune repertoire can assemble from about 45 V, 23 D, and 6 J heavy-chain segments and 40 V and 5 J light-chain segments.',
            'Recall the governing idea: combinatorial diversity — independently chosen segments multiply, and every heavy chain can pair with any light chain.',
            'Apply: heavy chains offer 45 × 23 × 6 ≈ 6,200 combinations and light chains 40 × 5 = 200; pairing them yields 6,200 × 200 ≈ 1.24 million receptors, before junctional splicing variability multiplies the count further.',
            'State the result: over a million distinct antibodies from segment shuffling alone, and well over a hundred million once joining variation is counted — a pre-built library vaster than the antigens the world can present.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Vaccines from smallpox to messenger-RNA platforms generate memory without disease; smallpox was eradicated by exactly this trick.',
            'Monoclonal antibodies — single-clone proteins manufactured as drugs — treat cancers, autoimmune disease, and migraine.',
            'Transplant medicine walks the self/nonself line, calming rejection with immunosuppressants balanced against infection risk.',
            'CAR-T therapy reprograms a patient\u2019s own T cells to recognize their leukemia — the adaptive arm, edited.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Antibiotics do nothing against viruses — they cannot touch what antiviral immunity fights. The phrase boosted immunity is folk-model language: the goal is regulation, not maximum force, and allergy and autoimmunity are immunity with the gain turned up. Fever, finally, is a defense and a signal, not the enemy itself — it aids adaptive responses even as it warns.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Antigen', def: 'A molecular fragment the immune system can specifically recognize.' },
            { term: 'Antibody', def: 'A soluble B-cell receptor that binds one antigen, tagging it for neutralization or destruction.' },
            { term: 'Phagocyte', def: 'A cell — neutrophil or macrophage — that engulfs debris and pathogens.' },
            { term: 'MHC molecule', def: 'The surface display case cells use to show internal protein fragments to T cells.' },
            { term: 'Memory cell', def: 'A long-lived B or T clone enabling rapid, potent secondary responses.' },
            { term: 'Tolerance', def: 'Active non-reactivity to self; its failure causes autoimmunity.' },
            { term: 'Herd immunity', def: 'Population protection that emerges when enough immune individuals break transmission chains.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Which arm responds within minutes to a fresh wound, with no memory of any past encounter?',
              options: ['Adaptive immunity', 'Innate immunity', 'The thymus', 'Antibody-secreting plasma cells'],
              answer: 1,
              explain: 'Innate cells fire on generic danger motifs immediately; the adaptive response needs days to ramp up on first meeting.',
            },
            {
              q: 'Antibodies are secreted by:',
              options: ['Cytotoxic T cells', 'Plasma cells, the effector descendants of activated B cells', 'Macrophages', 'Red blood cells'],
              answer: 1,
              explain: 'Activated B cells clone into plasma cells, each pouring out soluble versions of its receptor.',
            },
            {
              q: 'Vaccination works because it:',
              options: ['Kills pathogens directly', 'Builds memory B and T cells through a safe antigen rehearsal', 'Permanently raises inflammation', 'Replaces the innate system'],
              answer: 1,
              explain: 'A harmless mimic primes the same clonal expansion and memory a real infection would, minus the disease.',
            },
            {
              q: 'Autoimmune disease is best described as:',
              options: ['An infection by bacteria that mimic the body', 'A failure of tolerance — the immune system attacking the body\u2019s own tissues', 'An allergic response to pollen', 'An immunodeficiency'],
              answer: 1,
              explain: 'The mechanisms that normally delete or police self-reactive cells have failed in a specific tissue.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Prerequisites: cell structure, proteins, and basic genetics — the receptor-shuffling story rewards it. Continue with the hypersensitivity classes, tumor immunology and checkpoint inhibitors, and vaccinology. The action-potential and CRISPR lessons pair naturally for seeing biology\u2019s information systems at work.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'bio-ecosystems-energy-flow',
      title: 'Ecosystems and the Flow of Energy',
      domain: 'Life Sciences',
      field: 'Ecology',
      branch: 'Ecosystem Science',
      tier: 'core',
      concepts: [
        'Producers, consumers, and trophic levels',
        'The ten-percent rule',
        'Food chains are really food webs',
        'Decomposers and the cycling of matter',
        'Primary productivity as the energy budget',
        'Why big, fierce animals are rare',
      ],
      words: 890,
      readMins: 4,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'A hectare of grassland intercepts a flood of sunlight, yet only a sliver ever becomes rabbit. Ecosystems run a strict energy economy: producers capture sunlight, consumers spend it, and at every handoff most of it leaks away as heat. This topic follows that currency up the trophic ladder, meets the ten-percent rule that makes pyramids narrow, and explains why energy flows through ecosystems in one direction while matter cycles forever — and why the top of every food web is magnificent and few.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Feeding eight billion people is an energy-flow problem: eating lower on the pyramid buys roughly ten times more food per hectare. Fisheries quotas, the conservation of apex species, and the carbon budget of the whole biosphere are applications of the same trophic arithmetic.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Every ecosystem\u2019s cast sorts by position in the energy pipeline. Producers — plants, algae, and some bacteria — fix inorganic carbon into living tissue using sunlight or chemical energy. Primary consumers eat producers, secondary consumers eat them, and so on up the trophic levels, while decomposers process whatever dies at any level. Each feeding step is a transaction, and every transaction leaks.',
        },
        {
          kind: 'para',
          text: 'Only about a tenth of the energy at one trophic level becomes the next level\u2019s tissue; the rest pays for respiration, movement, and repair, or goes uneaten. Real efficiencies range from five to twenty percent, but the consequence is invariant: numbers, biomass, and energy thin dramatically with each step. The energy pyramid — broad at the grass, needle-thin at the hawk — is an ecosystem\u2019s most honest portrait.',
        },
        {
          kind: 'para',
          text: 'Linear chains — grass, antelope, lion — are teaching cartoons. Real ecosystems are webs: most consumers feed across levels, most species have several predators, and decomposers connect everything to everything. The web structure buffers the system: remove one link and flows reroute; remove many and the web simplifies toward collapse. Complexity is the ecosystem\u2019s shock absorber, which is why simplified farm ecosystems need so much external propping up.',
        },
        {
          kind: 'para',
          text: 'Fungi, bacteria, and detritus-feeders dismantle the dead, returning carbon, nitrogen, and phosphorus to pools producers can use again. Energy departs as heat at every step, but matter cannot leave a closed biosphere — it must cycle. This asymmetry is the deep grammar of the planet: energy flows through, one-way and unrecoverable, while atoms loop within, essentially forever.',
        },
        {
          kind: 'para',
          text: 'Gross primary productivity is the total energy producers capture; net primary productivity is what remains after their own respiration — the budget actually on offer to consumers. It varies a thousandfold across ecosystems: tropical forest and coral reef are rich, open ocean a per-hectare trickle that still matters globally through sheer area. The height of every food web is capped by this income.',
        },
        {
          kind: 'para',
          text: 'Stack the levels — energy, biomass, numbers — and pyramids appear; energy pyramids are always upright, because each level is built from a tenth of the one below. That is why a mountain must carry many deer to support one wolf pack, why predators patrol enormous ranges, and why habitat loss hits them first: the pyramid\u2019s tip is the thinnest, most fragile place to make a living.',
        },
        { kind: 'heading', text: 'The Mathematics' },
        {
          kind: 'formula',
          name: 'Trophic transfer efficiency',
          latex: 'E_{n+1} \\approx 0.10 \\times E_n',
          meaning: 'Roughly a tenth of one level\u2019s energy is built into the next; the rest is respired away as heat.',
        },
        {
          kind: 'formula',
          name: 'Energy at the nth level',
          latex: 'E_n = E_1 \\times (0.10)^{\\,n-1}',
          meaning: 'Each transfer multiplies by one-tenth — three links up, top consumers inherit one-thousandth of the producer base.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how much of the 10,000 kilojoules of energy fixed by producers in a field reaches third-level consumers — hawks eating snakes that eat herbivores.',
            'Recall the governing idea: trophic transfer efficiency — each level incorporates roughly ten percent of the level below it.',
            'Apply: 10,000 kJ at producers becomes about 1,000 kJ of herbivore, 100 kJ of snake, and 10 kJ of hawk: 10,000 × (0.1)³.',
            'State the result: about 10 kJ — one-thousandth of the base — feeds the hawk, which is why top predators are few, wide-ranging, and the first to vanish when habitat shrinks.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Feeding people at lower trophic levels — grain eaten directly rather than through livestock — multiplies food energy per hectare.',
            'Fisheries land more food by targeting forage fish and lower rungs than by chasing apex species.',
            'Conservation sizes reserves to the habitat area apex predators require, since pyramid tips demand enormous bases.',
            'Carbon and bioenergy budget models for the planet are built from measured productivity and transfer efficiencies.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The core misconception is that energy cycles like water — it does not; it flows one way and leaves as heat, which is why ecosystems need perpetual sunlight and why no food web is self-contained. The ten-percent figure is a range, not a law. And decomposers are not a footnote: most of the energy in leaves and plankton passes through them before any predator ever feeds.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Trophic level', def: 'A feeding position in the energy pipeline — producer, primary consumer, and upward.' },
            { term: 'Primary productivity', def: 'The rate at which producers capture energy and build biomass.' },
            { term: 'Consumer', def: 'An organism that gets its energy by eating other organisms.' },
            { term: 'Decomposer', def: 'An organism that breaks dead matter into nutrients producers can reuse.' },
            { term: 'Biomass', def: 'The total mass of living material at a level or in an area.' },
            { term: 'Food web', def: 'The full network of who-eats-whom links in an ecosystem.' },
            { term: 'Ecological efficiency', def: 'The fraction of energy transferred between trophic levels, typically near ten percent.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Energy enters most ecosystems as:',
              options: ['Heat from Earth\u2019s interior', 'Sunlight captured by producers', 'Molecules made by consumers', 'Rainfall'],
              answer: 1,
              explain: 'Photosynthesis — or rarer chemosynthesis — is the entry gate; everything above it is spending.',
            },
            {
              q: 'Roughly what fraction of energy passes from one trophic level to the next?',
              options: ['1 percent', '10 percent', '50 percent', '100 percent'],
              answer: 1,
              explain: 'About a tenth is incorporated into the next level\u2019s biomass; the rest is respired away as heat.',
            },
            {
              q: 'Top predators are naturally rare because:',
              options: ['They reproduce too slowly to matter', 'Energy dwindles at each transfer, leaving little to support them', 'Humans have removed them everywhere', 'They avoid one another socially'],
              answer: 1,
              explain: 'After several tenfold losses, the pyramid tip carries a tiny fraction of the base energy.',
            },
            {
              q: 'The slogan matter cycles, energy flows means:',
              options: ['Both cycle endlessly', 'Nutrients are reused while energy dissipates as heat and must be continuously resupplied', 'Energy is recycled by decomposers', 'Matter leaves the biosphere as heat'],
              answer: 1,
              explain: 'Atoms loop through biogeochemical cycles; energy degrades to heat at each step and exits the system.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Prerequisites: photosynthesis and cellular respiration at core level — this topic spends their currency. Continue with biogeochemical cycles, population dynamics, and community ecology, and pair with the carbon-budget lesson to see the same flow logic applied to climate.',
          tone: 'path',
        },
      ],
    },
  ],
}
