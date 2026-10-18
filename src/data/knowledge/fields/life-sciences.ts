/**
 * Knowledge Universe — domain file: Life Sciences
 *
 * Genetics, neuroscience, plant biochemistry, anatomy, microbiology, evolution, and
 * zoology — complete lessons. Future expansion passes append new topics below.
 */

import type { KnowledgeDomainFile } from '../types'

export const lifeSciences: KnowledgeDomainFile = {
  domain: 'Life Sciences',
  blurb:
    'From genes, neurons, and photosynthesis to anatomy, microbes, evolution, and the animal kingdom — how living systems are built, run, and related.',
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
      words: 0,
      readMins: 2,
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
      words: 0,
      readMins: 2,
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
      words: 0,
      readMins: 2,
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
      words: 0,
      readMins: 2,
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
      words: 0,
      readMins: 2,
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
      id: 'bio-microbe-bacteria-viruses-fungi',
      title: 'Bacteria, Viruses, Fungi: A Field Guide to the Microbial World',
      domain: 'Life Sciences',
      field: 'Microbiology & Disease',
      branch: 'Microbes and Infection',
      tier: 'core',
      concepts: [
        'Bacteria: independent single cells',
        'Viruses: hijackers in a coat',
        'Fungi: recyclers with chitin walls',
        'A size ladder for the invisible',
        'Three ways to cause disease',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Your body carries more microbial cells than it has human ones, and the world beyond carries more still. The three great kinds of microbe — bacteria, viruses, and fungi — differ from one another more deeply than you differ from a mushroom, and those differences decide everything about the diseases they cause and the drugs that fight them. This field guide covers what each is made of, how each multiplies, and how each makes you sick.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Which kind of microbe is causing an illness decides nearly everything about treatment: antibiotics touch only bacteria, antivirals only viruses, antifungals only fungi. Most "stomach flu" is viral — demanding antibiotics for it buys side effects and resistance while touching nothing responsible.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'A bacterium is a complete, self-sufficient cell a few micrometers long: DNA floating free in the cytoplasm, ribosomes building protein, and a tough wall of peptidoglycan holding shape. Most divide by binary fission — copy the DNA, split in two — and some manage a division every 20 minutes, letting a single cell found a colony of millions before nightfall. Thousands of species inhabit your body; only a handful are pathogens.',
        },
        {
          kind: 'para',
          text: 'A virus is not a cell at all: a stretch of DNA or RNA folded into a protein coat, sometimes wrapped in a stolen membrane, a few dozen nanometers across. It has no metabolism and cannot reproduce alone. Instead it injects its genome into a living cell and reprograms the host\'s ribosomes into building virus parts, which assemble and burst out — usually killing the cell. Influenza, measles, and SARS-CoV-2 all run this racket.',
        },
        {
          kind: 'para',
          text: 'Fungi are eukaryotes with chitin-reinforced walls — closer kin to you than to any bacterium. They grow as budding yeasts or as thread-like hyphae that push through soil or skin, digest food outside their bodies, and spread by hardy spores. Many are indispensable — bread, beer, and penicillin — while a few cause trouble: Candida yeasts flare when immunity dips, and dermatophytes cause the itchy ringworms of skin and nail.',
        },
        {
          kind: 'para',
          text: 'Scale keeps the field guide organized. Viruses are far smaller than bacteria — a tenth to a twentieth across, and thousands of times lighter — so a single bacterial cell can host an entire viral factory; bacteria are about a tenth the size of your cells; yeasts approach your own cells in size. That is why a surgical mask blocks virus-laden droplets, but only the immune system clears viruses already inside cells.',
        },
        {
          kind: 'para',
          text: 'Each kind sickens in its own way. Bacteria release toxins — cholera\'s flood of diarrhea, tetanus\'s rigid spasms — or inflame tissue directly; viruses kill cells and provoke immune responses whose side effects feel like the illness itself; fungi colonize surface tissue and provoke irritation. The mechanism predicts the cure: antibacterials sabotage bacterial-only machinery, antivirals block stages of the viral life cycle, and antifungals attack fungal targets like the chitin wall.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how fast a food-contaminating bacterium can multiply from a few cells.',
            'Recall the governing idea: binary fission doubles the population every generation time.',
            'Apply: Salmonella dividing every 30 minutes gains ten doublings in five hours — 10 cells become about 10,000 — and twenty doublings by ten hours carry the colony past ten million.',
            'State the result: exponential growth turns a contaminated crumb into an infectious dose overnight — the arithmetic behind every refrigeration rule ever written.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'The Gram stain, unchanged since 1884, still sorts bacteria into wall types that predict antibiotic response.',
            'Antivirals against HIV and influenza target viral enzymes that human cells lack.',
            'Yogurt, bread, beer, cheese, and penicillin are all microbial biotechnology.',
            'Culture plates and PCR assays name the microbe and reveal which drugs it fears.',
            'Hospital sterilization targets endospores that survive boiling and shrug off disinfectants.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Antibiotics do nothing to viruses and never have — a virus has no wall, no bacterial ribosome, nothing for the drug to grip. Nor are microbes villains by default: the overwhelming majority are harmless or essential, and most infections are decided as much by the host\'s immune response as by the microbe. Finally, viruses sit outside biology\'s formal definition of life — not quite object, not quite organism.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Binary fission', def: 'Bacterial reproduction — DNA copied, cell split in two.' },
            { term: 'Peptidoglycan', def: 'The cross-linked sugar-protein mesh of bacterial walls, penicillin\'s target.' },
            { term: 'Capsid', def: 'The protein coat enclosing a viral genome.' },
            { term: 'Obligate intracellular parasite', def: 'An agent that can reproduce only inside a host cell — every virus, by definition.' },
            { term: 'Hypha', def: 'A fungal filament; masses of them form a mycelium.' },
            { term: 'Endospore', def: 'A dormant, near-indestructible bacterial survival capsule.' },
            { term: 'Toxin', def: 'A bacterial poison that does damage apart from the organism itself.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Which microbe cannot reproduce outside a living host cell?',
              options: ['Bacterium', 'Yeast', 'Fungus', 'Virus'],
              answer: 3,
              explain: 'A virus is an obligate intracellular parasite — no metabolism, no reproduction without hijacking a cell.',
            },
            {
              q: 'Bacterial cell walls are built mainly of:',
              options: ['chitin', 'cellulose', 'peptidoglycan', 'keratin'],
              answer: 2,
              explain: 'Peptidoglycan is unique to bacteria — which is exactly what penicillin attacks.',
            },
            {
              q: 'A bacterium dividing every 20 minutes grows from one cell to over a thousand in about:',
              options: ['20 minutes', '1 hour', '3.5 hours', 'a full day'],
              answer: 2,
              explain: 'Ten doublings take 200 minutes — just over three hours — and two to the tenth is 1,024.',
            },
            {
              q: 'Ringworm, despite the name, is caused by:',
              options: ['a fungus', 'a roundworm', 'a bacterium', 'a virus'],
              answer: 0,
              explain: 'Dermatophyte fungi — the misnomer stuck centuries before anyone could see the cause.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'bio-microbe-antibiotic-resistance',
      title: 'Antibiotics and the Rise of Resistance',
      domain: 'Life Sciences',
      field: 'Microbiology & Disease',
      branch: 'Microbes and Infection',
      tier: 'intermediate',
      concepts: [
        'What antibiotics actually attack',
        'Selection in fast-forward',
        'The resistance toolbox',
        'Genes that travel: plasmids',
        'Stewardship: keeping the drugs working',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'In 1943 a rose thorn could kill; by 1960 penicillin had made such deaths a rarity. That shield is leaking. Bacteria resistant to our best drugs now collect in hospitals, farms, and waterways, and every careless prescription runs an evolutionary experiment with the stakes counted in lives. This topic covers how antibiotics work, how resistance evolves and spreads, and what stewardship — in clinics, on farms, and at the pharmacy counter — actually requires.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'The World Health Organization ranks antimicrobial resistance among the top ten threats to global health, with projections near ten million extra deaths a year by mid-century if trends hold. It is the clearest example of evolution happening on a human timescale — with human fingerprints all over the selection pressure.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Antibiotics work by attacking machinery that bacteria have and you do not. Penicillins and their relatives block the cross-linking of peptidoglycan, so walls burst as the cell grows; tetracyclines jam the bacterial ribosome; fluoroquinolones corrupt bacterial DNA enzymes. Human cells share none of these targets — which is why the drugs can cure without killing you, and why they have nothing at all to grip on a virus.',
        },
        {
          kind: 'para',
          text: 'Every large bacterial population already contains mutants — one in a million, one in a hundred million — that shrug off a given drug by sheer luck of mutation. The antibiotic kills their rivals, and the survivors inherit the infection: natural selection, the principle from the evolution lesson, compressed into days inside a single patient. An under-dosed or abandoned course gives the hardy minority extra rounds to multiply.',
        },
        {
          kind: 'para',
          text: 'Resistance has a toolbox. Enzymes like beta-lactamase chemically shred penicillin\'s ring; efflux pumps expel drugs before they act; target molecules mutate shape so the drug no longer fits; biofilms shelter whole communities behind slime. Some mechanisms cost the bacterium little to carry, so they persist even after the drug disappears — resistance, once selected, does not conveniently evaporate.',
        },
        {
          kind: 'para',
          text: 'The alarming part is horizontal gene transfer: bacteria pass DNA around, even across species. A resistance gene riding a plasmid — a small ring of DNA — can move from harmless gut flora into a pathogen in a single conjugation event. Genes travel, not just lineages: that is how resistance born in farm animals surfaces in hospital superbugs, and why one hospital\'s problem becomes every hospital\'s problem.',
        },
        {
          kind: 'para',
          text: 'Stewardship means keeping the drugs working: prescribe only for bacterial infections, narrow the drug once the laboratory names the culprit, complete the prescribed course, and never demand antibiotics for colds or flu. The One Health frame adds the farm — roughly two-thirds of the world\'s antibiotic tonnage feeds animals, a vast selection tank with pipes running straight into human medicine.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: why a standard amoxicillin course can end in a resistant rebound infection.',
            'Recall the governing idea: antibiotics impose selection — susceptible cells die, and pre-existing resistant variants inherit the field.',
            'Apply: in a bacterial population of a billion cells, resistance already present at one in a million means about a thousand resistant cells stand ready; the drug clears the rest, and doubling every half hour, the survivors rebuild a billion within roughly ten hours.',
            'State the result: the rebound infection is fully resistant — selected, not created, by the drug — and every cell inheriting the plasmid carries the same shield into the next patient.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'MRSA — methicillin-resistant Staph aureus — remains the classic hospital superbug, fought with hygiene plus last-line drugs.',
            'Rapid diagnostics name the pathogen in hours, letting doctors narrow broad-spectrum therapy early.',
            'New beta-lactamase inhibitors are paired with old penicillins to outflank the shredding enzymes.',
            'EU rules now ban routine antibiotic growth promotion in livestock to shrink the selection tank.',
            'Drug development incentives — push funding and pull prizes — aim to refill a thinning pipeline.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Resistance develops in bacteria, not in patients: "I\'ve become resistant to amoxicillin" confuses the target of selection. Stopping a course early usually selects the hardiest minority — the opposite of the folk advice that finishing breeds immunity in you. And resistance rarely reverses on its own: remove the drug and the genes often persist at low cost, waiting for the next round.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Antibiotic', def: 'A drug that kills or slows bacteria by targeting machinery human cells lack.' },
            { term: 'Beta-lactamase', def: 'A bacterial enzyme that destroys penicillin-family drugs.' },
            { term: 'Efflux pump', def: 'A molecular bouncer ejecting drugs from the bacterial cell.' },
            { term: 'Plasmid', def: 'A transferable DNA ring that can carry resistance between bacteria.' },
            { term: 'Horizontal gene transfer', def: 'Movement of genes between organisms, not just down lineages.' },
            { term: 'Stewardship', def: 'Coordinated practice — right drug, right dose, right duration — to preserve antibiotic effectiveness.' },
            { term: 'MRSA', def: 'Methicillin-resistant Staphylococcus aureus, the emblematic resistant pathogen.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Penicillin kills bacteria by:',
              options: ['blocking bacterial ribosomes', 'preventing peptidoglycan cell-wall cross-linking so cells burst', 'cutting DNA strands', 'puncturing human cell membranes'],
              answer: 1,
              explain: 'Weakened walls rupture as the bacterium grows — a target human cells simply do not have.',
            },
            {
              q: 'Resistance can leap between bacterial species mainly because:',
              options: ['bacteria inherit it only from parents', 'viruses deliver it by design', 'resistance genes on plasmids move horizontally between species', 'patients develop resistance themselves'],
              answer: 2,
              explain: 'Plasmid transfer moves genes across species boundaries — even between harmless and pathogenic bacteria.',
            },
            {
              q: 'Antibiotics fail against colds because:',
              options: ['cold viruses mutate too fast for any drug', 'colds are allergic reactions', 'pills cannot reach the nose', 'viruses have none of the bacterial machinery the drugs attack'],
              answer: 3,
              explain: 'No wall, no bacterial ribosome — nothing for the drug to grip. The mismatch is structural, not dose-related.',
            },
            {
              q: 'A course stopped too early tends to:',
              options: ['kill every last bacterium', 'select for the hardiest resistant minority', 'strengthen the patient\'s immunity', 'have no evolutionary consequence'],
              answer: 1,
              explain: 'The most susceptible cells die first; stopping then leaves the toughest ones alive to repopulate.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'bio-microbe-microbiome',
      title: 'The Microbiome: Your Trillion Tenants',
      domain: 'Life Sciences',
      field: 'Microbiology & Disease',
      branch: 'Microbes and Infection',
      tier: 'intermediate',
      concepts: [
        'Who lives where: the census',
        'Services rendered: fiber, vitamins, defense',
        'How the tenancy is set',
        'Dysbiosis: when balance breaks',
        'Fecal transplants and engineering the flora',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'You are outnumbered in your own body. Roughly 38 trillion bacterial cells ride along — about as many as your own cells — with the overwhelming majority packed into the colon. Far from passive passengers, they digest food you cannot, manufacture vitamins, train your immune system, and defend their territory against invaders. This topic tours the microbiome: who lives where, what they do for you, what reshuffles the community, and what medicine is learning to do about it.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'A disturbed community — dysbiosis — now links to conditions from recurrent C. difficile colitis to allergies, inflammatory bowel disease, and obesity. Fecal transplants cure repeat C. difficile at rates no single antibiotic matches, which is why clinicians have begun treating the microbiome as an organ in its own right.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The residents are mostly bacteria — dominated by the phyla Firmicutes and Bacteroidetes — plus archaea, fungi, and viruses. Each body site keeps its own climate: oily skin, an acidic stomach home to a mere handful of hardy species, and the oxygen-poor colon, the metropolis. Your genome is fixed; the microbiome shifts measurably with every change of diet — a garden replanted by each meal.',
        },
        {
          kind: 'para',
          text: 'The rent is paid in chemistry. Gut bacteria ferment fiber your enzymes cannot touch into short-chain fatty acids — especially butyrate, the preferred fuel of colon cells and a calming signal to the immune system. They synthesize vitamin K and several B vitamins, and by filling every niche they crowd out arriving pathogens. Breast milk even carries specialized sugars the baby cannot digest: food shipped for the tenants.',
        },
        {
          kind: 'para',
          text: 'The founding community arrives at birth — vaginal microbes for most babies, skin microbes by cesarean — and antibiotics, diet, and environment reshuffle it for life. High-fiber diets feed the fermenters; processed, low-fiber diets starve them. Each antibiotic course is clear-cut logging in a rainforest that may not fully regrow: repeated courses can thin the community\'s diversity, in some cases permanently.',
        },
        {
          kind: 'para',
          text: 'When diversity collapses, trouble follows. The clearest case: antibiotics wipe out the fiber-fermenters, and toxin-producing Clostridioides difficile explodes into life-threatening colitis. Weaker but replicated links extend to inflammatory bowel disease, allergies, obesity, and mood, where the gut-brain axis runs chemical traffic in both directions — serotonin\'s building blocks among the freight.',
        },
        {
          kind: 'para',
          text: 'The bluntest therapeutic tool is the fecal microbiota transplant: filtered stool from a screened donor, delivered by capsule or colonoscope, restoring an entire working ecosystem in a single dose. It cures roughly 85-90 percent of recurrent C. difficile — far beyond any single drug. Next in the pipeline: rationally defined microbe cocktails and engineered strains that dispense drugs or consume toxins.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: what actually happens to the fiber in a bowl of beans.',
            'Recall the governing idea: gut bacteria ferment fiber that human enzymes cannot break.',
            'Apply: species like Bifidobacterium split the complex carbohydrates into short-chain fatty acids; butyrate is burned on the spot by colon cells, while acetate and propionate enter the circulation and influence liver metabolism and appetite signaling.',
            'State the result: an "indigestible" carbohydrate becomes fuel, colon-cell nourishment, and metabolic signaling — fiber is nutrition for two organisms at once, you and your tenants.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Fecal microbiota transplantation is approved therapy for recurrent C. difficile infection.',
            'Probiotic yogurts deliver live cultures; prebiotic fibers feed the ones already there.',
            'Newborn vitamin K shots bridge the gap until the colon flora establishes itself.',
            'Germ-free mice and gut-on-chip models let researchers test microbes one species at a time.',
            'Personalized nutrition projects predict glucose responses from an individual\'s microbiome.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The word "probiotic" on a label promises little: most commercial strains are transient visitors that rarely colonize, and the right strain for one condition is wrong for another. Correlation is not causation — many microbiome-disease links remain associations still under investigation. And a healthy microbiome means diverse and stable, not merely numerous: quality of the community, not headcount, is what counts.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Microbiome', def: 'The full community of microbes inhabiting a body site, plus their genes.' },
            { term: 'Commensal', def: 'An organism living on or in a host without harming it.' },
            { term: 'Short-chain fatty acid', def: 'Fatty acids like butyrate made by bacterial fermentation of fiber.' },
            { term: 'Prebiotic', def: 'A fiber or compound that feeds existing beneficial microbes.' },
            { term: 'Probiotic', def: 'Live microorganisms consumed with intent to improve the community.' },
            { term: 'Dysbiosis', def: 'A harmful imbalance or diversity loss in the microbiome.' },
            { term: 'Fecal microbiota transplant', def: 'Transfer of a donor\'s stool community to restore a patient\'s flora.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Most of the body\'s microbial residents live in the:',
              options: ['stomach', 'bloodstream', 'colon', 'skin'],
              answer: 2,
              explain: 'The oxygen-poor colon is the metropolis — dark, fibrous, and densely populated.',
            },
            {
              q: 'Butyrate is produced when gut bacteria:',
              options: ['ferment fiber humans cannot digest', 'break down stomach acid', 'consume red blood cells', 'process vitamin D'],
              answer: 0,
              explain: 'Fermentation of dietary fiber yields short-chain fatty acids — the colon cells\' main fuel.',
            },
            {
              q: 'Fecal microbiota transplantation is most clearly curative for:',
              options: ['the common cold', 'type 1 diabetes', 'influenza', 'recurrent C. difficile infection'],
              answer: 3,
              explain: 'Restoring the whole ecosystem beats the pathogen in a way single drugs cannot — an approved therapy for repeat cases.',
            },
            {
              q: 'A prebiotic differs from a probiotic in that it is:',
              options: ['live bacteria', 'fiber that feeds the microbes already present', 'a killed virus', 'an antibiotic for the gut'],
              answer: 1,
              explain: 'Prebiotics are the food; probiotics are the organisms — the meal versus the guests.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'bio-genetics-mendel',
      title: 'Mendel\'s Laws: How Traits Travel Between Generations',
      domain: 'Life Sciences',
      field: 'Genetics & Heredity',
      branch: 'Classical Genetics',
      tier: 'core',
      concepts: [
        'Genes come in pairs, one per parent',
        'The law of segregation',
        'The law of independent assortment',
        'Punnett squares and probability',
        'Dominance and its variants',
        'Reading family pedigrees',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Gregor Mendel counted his way to the laws of inheritance: some 28,000 pea plants over eight years in a monastery garden, tracking seed shape, flower color, and stem length across generations. From the ratios alone he deduced that traits are carried by paired factors that separate cleanly into eggs and pollen and recombine at random. Published in 1866 and ignored for 34 years, Mendel\'s laws still anchor genetics — this topic covers the two laws, the square that applies them, and the family trees that extend them.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Genetic counseling for cystic fibrosis, sickle-cell trait, and Huntington\'s disease is applied Mendelism: the same ratios that fell out of monastery peas tell an expecting couple their odds. Punnett-square arithmetic is the working toolkit of clinics, breeding programs, and identity labs alike.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Every gene comes in two copies — alleles — one on each member of a chromosome pair, one inherited from each parent. Mendel saw the logic without ever seeing a chromosome: crossing pure tall with pure short peas gave all tall offspring, yet the short factor had not vanished, for it resurfaced in the grandchildren. The lesson: an organism\'s appearance (phenotype) and its genetic makeup (genotype) are different things.',
        },
        {
          kind: 'para',
          text: 'The law of segregation: during the formation of eggs and sperm, the two alleles of each gene separate, and each gamete receives exactly one. A plant carrying one tall and one short allele makes equal numbers of each type of gamete — the fairness of a coin flip — and at fertilization, chance reassembles the pair.',
        },
        {
          kind: 'para',
          text: 'The law of independent assortment: pairs of alleles for different genes are handed out independently, so the allele a seed gets for height says nothing about its allele for seed color. The independence holds only for genes on different chromosomes, or far apart on the same one — a boundary Mendel could not have known he was brushing against. Where it holds, trait ratios multiply like probabilities.',
        },
        {
          kind: 'para',
          text: 'The Punnett square turns the laws into arithmetic. Cross two heterozygotes (Tt × Tt): the grid yields one TT, two Tt, and one tt — a 3:1 ratio of phenotypes when one allele dominates, and a 1:2:1 ratio of genotypes. Stack two traits and the ratios multiply into the classic 9:3:3:1 dihybrid pattern Mendel tabulated. Probability, not blending, is the grammar of inheritance.',
        },
        {
          kind: 'para',
          text: 'Dominance is a biochemical outcome, not a tug of war. In incomplete dominance, one red and one white allele yield pink flowers; in codominance, both appear separately, as the A and B antigens on AB blood; and a recessive disease allele usually means one working copy is enough for health. Humans carry some 20,000 genes — a slot, in each of them, where alleles can differ.',
        },
        {
          kind: 'para',
          text: 'Pedigrees hang the laws on family trees. Autosomal recessive traits like cystic fibrosis skip generations and can strike two entirely healthy carriers; dominant traits like Huntington\'s disease appear in every generation, each child of an affected parent at 50 percent risk. Squares for males, circles for females, shading for the affected — and behind every pedigree, Mendel\'s ratios at work.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the risk that two unaffected carriers of cystic fibrosis have an affected child.',
            'Recall the governing idea: cystic fibrosis is autosomal recessive — only the double-recessive genotype is affected.',
            'Apply: both carrier parents are Cc. The Cc × Cc Punnett square gives CC, Cc, Cc, and cc — one cc combination in four.',
            'State the result: a 25 percent chance of an affected child per pregnancy, a 50 percent chance of a carrier like the parents, and 25 percent of a non-carrier — Mendel\'s 3:1 arithmetic running in a modern clinic.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Carrier screening for recessive diseases counsels couples with Mendelian odds before pregnancy.',
            'Plant and animal breeding still runs on segregation ratios and selection indices.',
            'DNA paternity and forensic tests track alleles as Mendelian markers across generations.',
            'Classroom corn ears showing 9:3:3:1 kernel ratios demonstrate assortment on a single cob.',
            'The royal hemophilia pedigree traced a recessive X-linked allele across Victorian Europe.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Dominant does not mean common — Huntington\'s is dominant and rare, while type O blood is recessive and everywhere. Recessive does not mean weak: it means the trait shows only in the absence of a working allele. And independent assortment fails for linked genes — neighbors on the same chromosome travel together, the very exception that first let geneticists map genes onto chromosomes.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Allele', def: 'One of the alternative forms a gene can take in a population.' },
            { term: 'Genotype', def: 'The actual pair of alleles an organism carries.' },
            { term: 'Phenotype', def: 'The observable trait, which may mask one of the alleles present.' },
            { term: 'Heterozygous', def: 'Carrying two different alleles of a gene.' },
            { term: 'Law of segregation', def: 'The two alleles of a gene separate into separate gametes, one each.' },
            { term: 'Law of independent assortment', def: 'Allele pairs for different genes are inherited independently — when not linked.' },
            { term: 'Punnett square', def: 'A grid computing the genotypes and ratios expected from a cross.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Two heterozygous parents (Tt × Tt) are crossed. What fraction of offspring shows the recessive phenotype?',
              options: ['none', 'one quarter', 'one half', 'three quarters'],
              answer: 1,
              explain: 'One tt combination in four — the signature 3:1 phenotypic ratio.',
            },
            {
              q: 'Independent assortment fails when two genes:',
              options: ['sit close together on the same chromosome', 'are both dominant', 'affect the same trait', 'are on separate chromosomes'],
              answer: 0,
              explain: 'Linked genes travel together through meiosis — recombination only occasionally breaks the pair.',
            },
            {
              q: 'In codominance, a heterozygote:',
              options: ['resembles one parent only', 'shows a blended intermediate', 'expresses both alleles distinctly, as in AB blood', 'is always infertile'],
              answer: 2,
              explain: 'Both products are made side by side — A and B antigens together, not a blend of them.',
            },
            {
              q: 'A pedigree showing healthy parents with affected siblings, skipping generations, suggests:',
              options: ['autosomal dominant inheritance', 'mitochondrial inheritance', 'autosomal recessive inheritance', 'random chance only'],
              answer: 2,
              explain: 'Unaffected carriers producing affected children is the classic recessive signature.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'bio-speciation-barriers',
      title: 'How New Species Are Born',
      domain: 'Life Sciences',
      field: 'Evolutionary Biology',
      branch: 'Speciation',
      tier: 'intermediate',
      concepts: [
        'What a species is — and when it blurs',
        'Prezygotic barriers: stopping the meeting',
        'Postzygotic barriers: stopping the heirs',
        'Allopatric: divided by geography',
        'Sympatric: divided without moving',
        'Phylogenetic trees: reading the branches',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Life on Earth is not a smear of intermediates but a world of discrete kinds — and the discreteness is the work of speciation, the process by which one lineage splits into two that can no longer exchange genes. It is evolution\'s grand product, the process that turned one ancestral population into an estimated eight million kinds. This topic covers how biologists delimit species, the barriers that keep lineages apart, the geographic and genetic routes by which splits happen, and the trees that display the results.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Speciation is where evolutionary theory meets the courtroom and the farm: species concepts decide which populations get endangered-species protection, and whether wolves and dogs are one species or two. Crop wild relatives are separated from crops by exactly the barriers described here — and sometimes not.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The biological species concept defines a species as a population whose members breed with each other but not — in nature — with outsiders, its boundary maintained by the absence of gene flow. It works cleanly for animals but blurs elsewhere: bacteria trade genes without mating, fossils cannot be test-bred, and ring species interbreed neighbor-to-neighbor while the two ends refuse each other. Biologists carry several concepts because nature refuses to carry only one.',
        },
        {
          kind: 'para',
          text: 'Barriers acting before fertilization are the cheapest. Populations may never meet — separate ponds, separate host plants — or may breed in different seasons or hours, court with songs or scents the other population does not recognize, or fail at mating mechanically. Each barrier is a lane closure; stacked together, they end traffic between two gene pools before any egg is wasted.',
        },
        {
          kind: 'para',
          text: 'When mating still happens, barriers act after it. Hybrid embryos may die early; hybrids may be viable but sterile, like the mule; or the second generation may collapse, failing to survive or reproduce. Each wasted mating is an evolutionary dead end, and selection then favors sharper prezygotic barriers — one reason sibling species often differ most in their mating signals.',
        },
        {
          kind: 'para',
          text: 'The classic route is geographic: a river changes course, an island breaks away, a glacier splits a grassland in two. The separated halves evolve independently — by drift and by selection on their own conditions — until reunion no longer produces working hybrids. The two squirrel species facing each other across the Grand Canyon split exactly this way, a textbook case of allopatry.',
        },
        {
          kind: 'para',
          text: 'Splitting without a map change is rarer but real. In plants, a chromosome-doubling error creates a polyploid that cannot mate successfully with its parent species — instantly, in one generation, a new species. In animals, sympatric splits usually ride on ecological specialization: hawthorn flies that colonized apple orchards now breed on a different fruit at a different time, drifting apart while living side by side.',
        },
        {
          kind: 'para',
          text: 'The result of all this splitting is a phylogeny — a tree whose branch points are speciation events and whose leaves are living species. Shared derived traits diagnose real branches, and branch lengths can measure time. Modern trees are computed from DNA sequences, and reading one is reading a family album: every fork in the canopy is a population that once split, most often never to rejoin.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how bread wheat became a species unable to breed with its own ancestors.',
            'Recall the governing idea: sympatric speciation by polyploidy — chromosome doubling breaks mating compatibility in a single step.',
            'Apply: about 10,000 years ago, hybridization between two wild grasses gave a sterile plant; chromosome doubling restored pairing at 28 chromosomes (emmer wheat); a later second hybridization and another doubling produced bread wheat at 42.',
            'State the result: bread wheat cannot exchange genes with any of its three parent species — a new species born of a counting error, now sown across more of the planet than any wild grass.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Polyploid crops — wheat, cotton, strawberry — are human-adopted species born from chromosome doubling.',
            'Lake Victoria cichlids diversified into hundreds of species within a single lake basin.',
            'Hawthorn flies colonizing apple orchards record a sympatric split now in progress.',
            'Endangered-species law turns on species delimitation — the red wolf\'s legal status is a species-concept case.',
            'DNA-based phylogenies settled that the hippopotamus is the whale\'s closest living relative.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Speciation is not an individual transforming — no animal hatches as a new species; it is a population-level change in who breeds with whom. The boundary is often a long gray zone of partial interbreeding, so "two species or one" can be genuinely unanswerable. And barriers evolve as by-products of divergence: evolution does not aim to make species — species fall out as consequences.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Biological species concept', def: 'A species defined by interbreeding within, and reproductive isolation from, other groups.' },
            { term: 'Gene flow', def: 'Movement of alleles between populations through interbreeding — the glue of a species.' },
            { term: 'Prezygotic barrier', def: 'A barrier acting before fertilization — timing, behavior, anatomy, or habitat.' },
            { term: 'Postzygotic barrier', def: 'A barrier acting after fertilization — hybrid inviability or sterility.' },
            { term: 'Allopatric speciation', def: 'Splitting promoted by geographic separation of populations.' },
            { term: 'Polyploidy', def: 'Extra chromosome sets, instantly creating reproductive barriers in plants.' },
            { term: 'Phylogenetic tree', def: 'A branching diagram of lineages whose forks are speciation events.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The biological species concept rests on:',
              options: ['identical appearance', 'potential to interbreed, with no gene flow outward', 'sharing the same habitat', 'matching chromosome counts'],
              answer: 1,
              explain: 'Who breeds with whom — not looks — draws the boundary, wherever the test can be applied at all.',
            },
            {
              q: 'A mule, healthy but sterile, exemplifies:',
              options: ['a prezygotic barrier', 'polyploidy', 'a postzygotic barrier', 'gene flow'],
              answer: 2,
              explain: 'The horse-donkey mating succeeds; the barrier strikes the hybrid itself — sterility after fertilization.',
            },
            {
              q: 'Allopatric speciation begins with:',
              options: ['a chromosome doubling event', 'a geographic separation between populations', 'a new mating song', 'extinction of the parent species'],
              answer: 1,
              explain: 'Physical separation halts gene flow; divergence then accumulates independently on each side.',
            },
            {
              q: 'Polyploid speciation is most frequent in:',
              options: ['mammals', 'birds', 'plants', 'sharks'],
              answer: 2,
              explain: 'Plants tolerate chromosome doubling — and can self-fertilize or double again to escape sterility.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'bio-human-evolution',
      title: 'From Lucy to Us: The Story of Human Evolution',
      domain: 'Life Sciences',
      field: 'Evolutionary Biology',
      branch: 'Human Evolution',
      tier: 'intermediate',
      concepts: [
        'Hominins: the walk comes first',
        'Lucy and the australopithecines',
        'The Homo lineage: brain meets tools',
        'Sapiens, Neanderthals, and interbreeding',
        'Out of Africa',
        'Reading the evidence: fossils, stone, DNA',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Somewhere between six and seven million years ago, an African ape population split in two: one branch leads to today\'s chimpanzees and bonobos, the other to every human being who has ever lived. The story of that second branch is written in fragmentary skeletons, chipped stones, and — only since 2010 — in DNA recovered from the bones themselves. This topic traces the main chapters, from Lucy\'s small-brained bipedality to the global species reading this sentence.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Human evolution was never a ladder. For most of the last three million years, several hominin species shared the planet at once; Homo sapiens is the last branch standing, not the summit of a staircase. Every new fossil nudges the details without shaking the outline — and ancient DNA now settles disputes fossils never could.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The first defining trait was underfoot. Bipedalism — habitual walking on two legs — predates big brains, tools, and language by millions of years, visible in four-million-year-old Ardipithecus bones and in the Laetoli footprints, an upright pair\'s trail preserved in volcanic ash some 3.6 million years ago. Freed hands, energy-cheap walking, and a view over the grass came before everything else.',
        },
        {
          kind: 'para',
          text: 'The most famous fossil, Lucy — an Australopithecus afarensis from Ethiopia, 3.2 million years old — stood barely a meter tall with a brain near 400 cubic centimeters: a chimpanzee-sized brain riding on a human-style pelvis, spine, and knees. Australopithecines kept long arms suited to climbing, ate everything from fruit to tubers, and their kind persisted across Africa for well over a million years.',
        },
        {
          kind: 'para',
          text: 'By 2.4 million years ago, larger brains and the first sharp stone tools mark Homo habilis. Homo erectus, appearing near 1.9 million years ago, had a tall striding body, a brain approaching 1,000 cubic centimeters, and the range to walk out of Africa into Asia — the first globetrotter. Through the ice ages, brain volume climbed toward the modern average of about 1,350 cubic centimeters as toolkits diversified, fire spread, and hunting grew serious.',
        },
        {
          kind: 'para',
          text: 'Homo sapiens enters the African fossil record near 300,000 years ago at Jebel Irhoud, Morocco. Meanwhile, Europe and Asia belonged to the Neanderthals — heavy-browed, cold-adapted hunters — and to the Denisovans, known almost entirely from DNA. The groups met: most people with non-African ancestry carry 1-4 percent Neanderthal DNA, and a Denisovan version of the altitude gene EPAS1 helps Tibetans live above 4,000 meters.',
        },
        {
          kind: 'para',
          text: 'Genetics, fossils, and archaeology agree on the outline: a main dispersal out of Africa around 60,000-70,000 years ago reached Australia by about 50,000 years ago and the Americas by around 15,000. Earlier excursions left fossils and stone tools but no descendants in today\'s gene pool. Every living population descends from African ancestors — legible in the diversity of African genomes, deeper than anywhere else on Earth.',
        },
        {
          kind: 'para',
          text: 'The evidence stacks in independent layers. Fossils give anatomy and radiometric dates; tools, hearths, and art give behavior; ancient DNA, first recovered from Neanderthal bones in 2010, gives migrations and interbreeding directly. When a discovery moves a date or adds a branch, the genetic clock and the stones move with it — the sign of a story that keeps checking out.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how DNA itself dates the split between the human and chimpanzee lineages.',
            'Recall the governing idea: the molecular clock — neutral mutations accumulate at a roughly steady rate per lineage.',
            'Apply: the two genomes differ at about 1.2 percent of DNA positions; at roughly 0.1 percent per million years per lineage, the two lines together close that gap in about six million years.',
            'State the result: a split near six million years ago, matching the oldest putative hominin fossils — independent clocks vouching for one another.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Ancient DNA extracted from bones now tests migration and interbreeding claims directly.',
            'Rift Valley fieldwork keeps adding branches — Homo naledi was announced only in 2015.',
            'EPAS1, an inherited Denisovan gene, helps Tibetans thrive at extreme altitude.',
            'Neanderthal-derived immune and skin genes still influence disease risk and drug response.',
            'Argon and uranium dating anchor each fossil\'s age within a few percent.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The march-of-progress cartoon is wrong twice over: evolution has no direction or goal, and humans did not descend from any living ape — chimpanzees are cousins, not ancestors, both lines having evolved since the split. "Missing link" is a relic phrase; the bush is richly populated. And human genetic variation does not sort into deep continental lineages: most of humanity\'s diversity lies within Africa, and the rest of the world carries only a subset of it.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Hominin', def: 'Any species on the human side of the split from the chimpanzee lineage.' },
            { term: 'Bipedalism', def: 'Habitual upright walking on two legs — the earliest hominin signature.' },
            { term: 'Australopithecus', def: 'The genus of Lucy: small-brained, upright-walking African hominins.' },
            { term: 'Homo erectus', def: 'The tall, wide-ranging hominin of the last two million years.' },
            { term: 'Neanderthal', def: 'The cold-adapted Eurasian hominin that interbred with sapiens.' },
            { term: 'Molecular clock', def: 'Dating divergence by counting neutral mutations that accumulate at steady rates.' },
            { term: 'Ancient DNA', def: 'Genetic material recovered from fossils, readable at scale since 2010.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The earliest defining trait of the hominin lineage was:',
              options: ['bipedal walking', 'a large brain', 'control of fire', 'spoken language'],
              answer: 0,
              explain: 'Upright walking shows up millions of years before brains expanded — the feet came first.',
            },
            {
              q: 'Lucy (Australopithecus afarensis) is famous for showing:',
              options: ['the first stone tools', 'cave paintings', 'a chimp-sized brain on a bipedal body', 'a modern-sized brain'],
              answer: 2,
              explain: 'About 400 cubic centimeters of brain on a human-style pelvis and knees — walking long before thinking much.',
            },
            {
              q: 'Most people with non-African ancestry carry:',
              options: ['no archaic human DNA', 'about 1-4 percent Neanderthal DNA', 'exclusively Denisovan DNA', 'Neanderthal mitochondria'],
              answer: 1,
              explain: 'Interbreeding with Neanderthals left a measurable signature in non-African genomes.',
            },
            {
              q: 'The main Homo sapiens dispersal from Africa occurred roughly:',
              options: ['2 million years ago', '300,000 years ago', '60,000-70,000 years ago', '8,000 years ago'],
              answer: 2,
              explain: 'Earlier humans left Africa too, but the dominant ancestry of living non-Africans traces to that late dispersal.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'bio-zoology-body-plans',
      title: 'The Animal Kingdom: A Tour of Body Plans and Phyla',
      domain: 'Life Sciences',
      field: 'Zoology',
      branch: 'Animal Diversity',
      tier: 'core',
      concepts: [
        'What makes an animal an animal',
        'Symmetry and the rise of a head end',
        'Germ layers and body cavities',
        'The phylum tour: sponges to chordates',
        'Protostomes, deuterostomes, and your kin',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Animals are multicellular consumers — they eat other organisms, lack the rigid walls and chloroplasts of plants, and bind their cells together with the protein collagen. From that single shared decision, evolution has assembled over thirty phyla: sponges that pump, jellyfish that sting, worms that burrow, squid that solve problems, and everything with a backbone. This tour walks the major body plans — symmetry, layers, cavities — and the phyla built from them.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Arthropods alone — insects, spiders, crustaceans — account for more than 80 percent of all described animal species. Chordates, the phylum containing every fish, bird, and mammal, are a rounding error by headcount. Familiarity is not importance, and reading the tree corrects the eye.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Animals are heterotrophs: they obtain energy and carbon by eating, not by photosynthesis. Their cells lack walls, letting them squeeze, change shape, and form muscles and nerves; collagen glues the tissues together. Almost all animals develop from a blastula embryo and move under their own power at some stage of life — the sponges, permanently anchored, mark the base of the tree.',
        },
        {
          kind: 'para',
          text: 'Sponges are asymmetrical. Cnidarians — jellyfish, anemones, corals — are radial, built like wheels with many identical spokes and no front or back. The decisive invention is bilateral symmetry: a head-to-tail axis with mirrored sides, which pairs muscles for directed crawling and concentrates sense organs at the front that travels first — cephalization. From flatworms to falcons, that is the layout.',
        },
        {
          kind: 'para',
          text: 'Embryos build from germ layers. Cnidarians are diploblastic — two tissue layers; all bilaterians are triploblastic, adding a middle mesoderm that becomes muscle, bone, heart, and kidney. Many also excavate a coelom, a fluid-filled cavity between gut and body wall that cushions organs and gives muscles a hydrostatic scaffold to push against — the trick behind an earthworm\'s crawl.',
        },
        {
          kind: 'para',
          text: 'The tour, briefly. Sponges (Porifera) filter-feed without nerves or muscles; cnidarians sting with explosive harpoon cells; flatworms (Platyhelminthes) are thin enough to need no cavity; roundworms (Nematoda) molt and occur in staggering numbers; mollusks (Mollusca) run from snails to octopuses, the most intelligent invertebrates; annelids (Annelida) add segmented bodies; arthropods dominate on jointed legs and chitin armor; echinoderms like starfish run on hydraulic water-vascular systems; and chordates get a notochord, a hollow dorsal nerve cord, and a post-anal tail at some stage.',
        },
        {
          kind: 'para',
          text: 'Bilaterians split deep by one embryological detail: which opening of the early gut becomes the mouth. In protostomes — arthropods, mollusks, annelids — the first opening becomes the mouth. In deuterostomes — echinoderms and chordates — it becomes the anus, and the mouth opens second. The startling consequence: by development, you are more closely related to a starfish than to a lobster, resemblance notwithstanding.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how animal species are distributed across phyla.',
            'Recall the governing idea: diversity is wildly uneven across body plans.',
            'Apply: of roughly 1.5 million described animal species, arthropods account for over a million; mollusks about 85,000; chordates about 70,000 — and mammals, for all their prominence, only some 6,500.',
            'State the result: a randomly chosen animal is almost certainly an arthropod, most likely an insect — the familiar vertebrate cast is a statistical fringe.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Coral reefs — cnidarian skeletons — shelter perhaps a quarter of marine species on under one percent of the ocean floor.',
            'Soil-transmitted worm infections affect well over a billion people, driving tropical-medicine programs.',
            'Octopus cognition research has rewritten ideas about invertebrate intelligence — and cephalopod welfare rules.',
            'Tunicate and lancelet genomes illuminate how the vertebrate body was assembled.',
            'Insect monitoring programs track ecosystem health, since arthropods respond fastest to change.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Evolution is not a ladder from sponge to human: phyla are separate, contemporaneous strategies, and the sponge lineage is as "evolved" as you are — just aimed elsewhere. "Worm" describes a shape, not a lineage: flatworms, roundworms, and annelids are about as distantly related as three animals can be while still being worms. And vertebrates are a subphylum of chordates — a branch of a branch, not a peer of the phyla.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Phylum', def: 'A major branch of the animal family tree, ranked below kingdom.' },
            { term: 'Radial symmetry', def: 'A body organized around an axis with many identical parts, as in jellyfish.' },
            { term: 'Bilateral symmetry', def: 'A head-to-tail axis with mirrored sides, enabling directed movement.' },
            { term: 'Cephalization', def: 'The concentration of sense organs and neurons at the leading end.' },
            { term: 'Coelom', def: 'A fluid-filled body cavity cushioning organs and enabling hydrostatic movement.' },
            { term: 'Protostome', def: 'A bilaterian whose embryonic first gut opening becomes the mouth.' },
            { term: 'Notochord', def: 'The stiffening rod along the back of chordates, ancestral to the spine.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Animals differ from plants and fungi fundamentally in that they:',
              options: ['are multicellular', 'eat other organisms and lack cell walls', 'have DNA', 'reproduce'],
              answer: 1,
              explain: 'Heterotrophy plus wall-less, collagen-bound cells — the traits behind muscles and nerves.',
            },
            {
              q: 'Cephalization is:',
              options: ['the concentration of sense organs at a head end', 'the formation of a body cavity', 'the stinging cells of cnidarians', 'molting in arthropods'],
              answer: 0,
              explain: 'Bilateral bodies travel head-first, so sensors and neurons gather at the front.',
            },
            {
              q: 'In deuterostomes, the embryo\'s first opening becomes:',
              options: ['the mouth', 'the coelom', 'the nerve cord', 'the anus, with the mouth forming second'],
              answer: 3,
              explain: 'Mouth-second development groups echinoderms with chordates — starfish are your kin, lobsters are not.',
            },
            {
              q: 'Insects, spiders, and crabs belong to the phylum:',
              options: ['Mollusca', 'Arthropoda', 'Annelida', 'Echinodermata'],
              answer: 1,
              explain: 'Jointed appendages plus a chitin exoskeleton define Arthropoda, the most speciose phylum.',
            },
          ],
        },
      ],
    },
  ],
}
