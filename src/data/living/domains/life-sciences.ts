/**
 * Living Library — domain file: Life Sciences
 *
 * Genetics, neuroscience, and plant biochemistry — complete lessons.
 * Future expansion passes append new topics below.
 */

import type { LivingDomainFile } from '../types'

export const lifeSciences: LivingDomainFile = {
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
      id: 'bio-mendelian-genetics',
      title: 'Mendelian Genetics and the Laws of Inheritance',
      domain: 'Life Sciences',
      field: 'Genetics & Heredity',
      branch: 'Classical Genetics',
      tier: 'core',
      concepts: [
        'Alleles, genotype, and phenotype',
        'Law of segregation',
        'Law of independent assortment',
        'Monohybrid and dihybrid ratios',
        'Test crosses and pedigrees',
        'Incomplete dominance and epistasis',
        'Linked genes and recombination',
      ],
      words: 1210,
      readMins: 6,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Before anyone knew what genes were, Gregor Mendel counted peas and found the rules they obey. Between 1856 and 1863 he tracked seven traits through true-breeding lines, and the ratios that emerged — three to one, nine to three to three to one — told him inheritance is particulate: parents pass discrete factors that persist unblended through the generations. Classical Genetics still runs on those laws; this topic rebuilds them, extends them to linked genes, and equips you with the chi-square test that asks whether data truly fit.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Breeding disease-resistant crops, counselling families about inherited conditions, and interpreting a direct-to-consumer genotype report all stand on Mendelian logic. The 3:1 and 9:3:3:1 ratios are not trivia — they are the visible fingerprints of chromosomes segregating in meiosis.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Mendel\u2019s crosses of true-breeding parents gave uniformly round-seeded offspring in the first generation — the dominant trait — but self-pollinating those hybrids resurrected the vanished wrinkled form in one quarter of the next. His explanation: each plant carries two factors per trait, one from each parent, and the pair separates (segregates) when gametes form, so each gamete carries one. The wrinkled factor was hidden in the hybrid, not destroyed. Genotype (AA, Aa, aa) thus differs from phenotype, and a 1:2:1 genotype ratio wears a 3:1 phenotypic mask whenever one allele is dominant.',
        },
        {
          kind: 'para',
          text: 'Crossing plants that differ in two traits, Mendel found 9:3:3:1 in the second generation — the signature of factor pairs segregating independently. A Punnett square of a double heterozygote cross makes the arithmetic mechanical: each parent produces four gamete types in equal numbers, and the sixteen combinations pile into nine double-dominant, three of each single recessive, and one double recessive. Independent assortment reflects genes riding different chromosomes, which orient randomly when the pairs separate in meiosis.',
        },
        {
          kind: 'para',
          text: 'Need to know whether a round-seeded plant is homozygous or heterozygous? Cross it to the wrinkled recessive: any wrinkled offspring convict it of carrying the recessive allele, while a large batch of only round seeds is strong evidence of purity — the test cross. Human geneticists use pedigrees instead of controlled crosses, tracing dominant, recessive, and sex-linked patterns through family trees; carriers, skipped generations, and the elevated risk from shared ancestry all read off the same Mendelian grammar.',
        },
        {
          kind: 'para',
          text: 'Real inheritance complicates the picture without breaking it. Snapdragons blend red and white into pink — incomplete dominance, because one functional allele makes half the pigment. Blood type AB expresses both alleles equally — codominance. One gene can mask another (epistasis, bending the 9:3:3:1 into 9:3:4), and most visible human traits, from height to skin color, are polygenic, many small effects summed into a bell curve. Each case bends the ratios; the segregation beneath them never wavers.',
        },
        {
          kind: 'para',
          text: 'Genes on the same chromosome violate independent assortment — they travel together unless crossing over swaps segments between homologues. The recombination frequency, recombinant offspring over total, grows with the distance between genes, so Alfred Sturtevant used it as a ruler to draw the first genetic maps: one percent recombination equals one map unit (centimorgan). Frequencies approach but never exceed 50 percent, the value for genes on different chromosomes or very far apart on the same one.',
        },
        {
          kind: 'para',
          text: 'Mendel\u2019s laws scale up to populations through the Hardy\u2013Weinberg rule: in a large, randomly mating population free from evolutionary forces, allele frequencies p and q fix the genotype frequencies at p\u00b2, 2pq, and q\u00b2. Roughly one in 25 people carries a cystic fibrosis allele, so about one in 2,500 newborns is affected — the recessive allele hiding in carriers at exactly the rate the algebra predicts, generation after generation.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Monohybrid segregation',
          latex: 'P(\\text{Aa} \\times \\text{Aa}) \\Rightarrow 1\\,AA : 2\\,Aa : 1\\,aa',
          meaning: 'Selfing heterozygotes gives equal A and a gametes, hence the 1:2:1 genotype ratio that a dominant allele masks as 3:1.',
        },
        {
          kind: 'formula',
          name: 'Chi-square goodness of fit',
          latex: '\\chi^2 = \\sum \\frac{(O - E)^2}{E}',
          meaning: 'Compare observed counts with expected under a hypothesis; with one degree of freedom, values above 3.84 reject at the 5 percent level.',
        },
        {
          kind: 'formula',
          name: 'Recombination frequency',
          latex: '\\text{RF} = \\frac{\\text{recombinant offspring}}{\\text{total offspring}} \\times 100\\%',
          meaning: 'The share of progeny inheriting swapped combinations; numerically equal to map distance in centimorgans for nearby genes.',
        },
        {
          kind: 'formula',
          name: 'Hardy\u2013Weinberg equilibrium',
          latex: 'p^2 + 2pq + q^2 = 1',
          meaning: 'Genotype frequencies fixed by allele frequencies p and q under random mating in a large population.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: whether Mendel\u2019s seed-shape counts — 5,474 round and 1,850 wrinkled — are consistent with a 3:1 ratio.',
            'Recall the governing idea: expected counts come from the hypothesis, and chi-square measures the mismatch.',
            'Compute expectations: 7,324 total seeds give 5,493 expected round (three quarters) and 1,831 expected wrinkled.',
            'Compute chi-square: (5,474 \u2212 5,493)\u00b2/5,493 + (1,850 \u2212 1,831)\u00b2/1,831 = 361/5,493 + 361/1,831 \u2248 0.066 + 0.197 \u2248 0.26.',
            'State the result: with one degree of freedom the critical value is 3.84, and 0.26 falls far below — deviations this small arise by chance alone about 60 percent of the time, so the data fit 3:1 comfortably.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'A 3:1 phenotypic ratio hides a 1:2:1 genotype ratio — two of every three round plants are carriers. Small samples wobble: a family of four children can easily show 3:1-shaped luck with no genetics at all. Chi-square needs raw counts, never percentages, and each expected count should be five or more. And probabilities have no memory — each conception rolls the dice afresh.',
          tone: 'warn',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Allele', def: 'One of the alternative versions of a gene, distinguished by its DNA sequence.' },
            { term: 'Genotype', def: 'The pair of alleles an individual carries at a locus.' },
            { term: 'Phenotype', def: 'The observable trait, produced by genotype together with environment.' },
            { term: 'Segregation', def: 'The separation of the two alleles of a pair into different gametes during meiosis.' },
            { term: 'Test cross', def: 'A mating to a homozygous recessive individual that reveals an unknown genotype through the offspring.' },
            { term: 'Linkage', def: 'The tendency of genes on the same chromosome to be inherited together.' },
            { term: 'Recombination frequency', def: 'The fraction of recombinant offspring, equal to map distance in centimorgans for nearby genes.' },
            { term: 'Punnett square', def: 'A grid that enumerates gamete combinations and their probabilities.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Two heterozygotes (Aa \u00d7 Aa) produce 400 offspring. The expected number showing the recessive phenotype is:',
              options: ['400', '300', '100', '50'],
              answer: 2,
              explain: 'The recessive phenotype aa appears with probability one quarter, so about 100 of 400.',
            },
            {
              q: 'A round-seeded plant crossed with a wrinkled (rr) plant gives half wrinkled offspring. The round parent\u2019s genotype is:',
              options: ['RR', 'Rr', 'rr', 'Cannot be determined'],
              answer: 1,
              explain: 'Only a heterozygote paired with the recessive yields the 1:1 test-cross ratio.',
            },
            {
              q: 'A 9:3:3:1 ratio in the second generation indicates:',
              options: ['Incomplete dominance', 'Two independently assorting genes with dominance', 'Epistasis', 'Tight linkage'],
              answer: 1,
              explain: 'Two heterozygous loci on different chromosomes produce the classic dihybrid ratio.',
            },
            {
              q: 'Two genes show 20 percent recombination. They are:',
              options: ['On different chromosomes', 'About 20 centimorgans apart on the same chromosome', '20 base pairs apart', 'Always assorting independently'],
              answer: 1,
              explain: 'Recombination frequency below 50 percent means the genes are linked, at a map distance equal to the frequency.',
            },
            {
              q: 'In Hardy\u2013Weinberg equilibrium, the frequency of heterozygotes is:',
              options: ['p\u00b2', '2pq', 'q\u00b2', 'p + q'],
              answer: 1,
              explain: 'The three genotype classes are p\u00b2, 2pq, and q\u00b2 — heterozygotes are the middle term.',
            },
          ],
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Alleles segregate into gametes: heterozygote self-crosses give 1:2:1 genotypes, 3:1 phenotypes.',
            'Independent assortment of genes on different chromosomes gives 9:3:3:1.',
            'Test crosses expose hidden genotypes; pedigrees apply the logic to families.',
            'Linked genes recombine in proportion to distance — recombination frequency is a genetic ruler.',
            'Chi-square asks whether counts fit a ratio; Hardy\u2013Weinberg scales Mendel to populations.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'bio-ecosystem-energy-flow',
      title: 'Ecosystem Energy Flow and Trophic Structure',
      domain: 'Life Sciences',
      field: 'Ecology',
      branch: 'Ecosystem Ecology',
      tier: 'intermediate',
      concepts: [
        'Trophic levels and food webs',
        'Gross and net primary productivity',
        'The ten-percent rule',
        'Energy pyramids versus biomass pyramids',
        'Secondary production and assimilation',
        'Why ecosystems need continuous energy input',
      ],
      words: 1190,
      readMins: 6,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Energy moves through ecosystems the way money moves through an economy: income arrives, taxes are paid at every transaction, and nothing circulates forever. Sunlight enters, plants convert a slice into new biomass, herbivores consume a fraction of that, carnivores a fraction of them, and at each step most of the payment leaves as heat. Ecosystem Ecology quantifies that ledger — productivity, trophic efficiency, pyramids — and in doing so explains why big fierce animals are always rare and why food chains stop short.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Fisheries quotas, reserve sizing, and debates about eating lower on the food chain are energy-flow arithmetic. So is one of sustainability\u2019s sharpest facts: feeding grain to livestock and livestock to people spends most of the grain\u2019s energy before it ever reaches a plate.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'An ecosystem is open to energy and nearly closed to materials. Sunlight supplies well over 99 percent of the energy life uses; the exceptions — chemosynthetic bacteria at hydrothermal vents and in deep rock — prove the rule by their rarity. Unlike carbon or nitrogen, energy is never recycled: every joule that enters is exported sooner or later as heat, because no organism converts food into work with perfect efficiency. Life needs continuous input the way a furnace needs fuel.',
        },
        {
          kind: 'para',
          text: 'Primary production is the rate at which plants build organic matter. Gross primary production is total photosynthesis; plants immediately spend roughly half of it on their own respiration, and the remainder — net primary production, NPP = GPP \u2212 R_A — is what is actually on the table for everything else. Global NPP is on the order of 100 petagrams of carbon per year, split roughly between land plants, led by tropical forests, and marine plankton, whose fast turnover hides enormous annual throughput beneath a thin standing crop.',
        },
        {
          kind: 'para',
          text: 'Herbivores are inefficient accountants. They consume only part of what is produced, assimilate only part of what they consume, and spend much of the assimilate on respiration, leaving secondary production — new consumer biomass — as the residue. Summed across the transfers, each trophic level passes along only about 10 percent of what it receives: the ten-percent rule, with measured values running from 5 to 20 percent. A field producing 1,000 units of plant energy supports roughly 100 units of herbivore and 10 of first-level carnivore.',
        },
        {
          kind: 'para',
          text: 'Plot the energy per level and you get a pyramid that must taper — each level is capped at a small fraction of the one below, which is why top predators such as eagles, tigers, and tuna are naturally scarce and command vast territories or hunting ranges. Biomass pyramids can invert, though: in the open ocean, the plankton standing crop at any instant can be outweighed by the consumers grazing it, because tiny algae with days-long turnover replace themselves far faster than fish burn through them. Energy pyramids, unlike biomass ones, can never invert.',
        },
        {
          kind: 'para',
          text: 'The detrital web — bacteria, fungi, earthworms, insect larvae — processes the often larger share of production that is never eaten alive: fallen leaves, carcasses, feces. Decomposers return nutrients to plants, closing the material circle that energy never follows. In forests, more energy may route through detritus than through living prey; in planktonic seas, grazing dominates. Either way, the decomposers are the sanitation department and the recycling plant in one.',
        },
        {
          kind: 'para',
          text: 'Humanity\u2019s mean trophic level is about 2.2 — somewhere between an anchovy and a pig — despite our appetites for tuna. Because transfer losses compound, a hectare feeds far more people as grain than as grain-fed beef, a lever that matters globally as diets shift. Fisheries managers exploit the same arithmetic: harvesting sardines supports many more mouths, ton for ton, than harvesting the cod that eat them.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Net primary production',
          latex: 'NPP = GPP - R_A',
          meaning: 'Plant production after subtracting autotrophic respiration — the energy budget available to every consumer.',
        },
        {
          kind: 'formula',
          name: 'Trophic transfer efficiency',
          latex: '\\varepsilon = \\frac{P_n}{P_{n-1}} \\times 100\\%',
          meaning: 'Production of one level divided by production of the level below; typically near 10 percent, ranging from 5 to 20.',
        },
        {
          kind: 'formula',
          name: 'Secondary production budget',
          latex: 'P = C - F - R',
          meaning: 'Consumer production equals consumption minus feces and egestion minus respiration; each subtraction is a tax on the passing energy.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how much energy reaches a third-level consumer such as a falcon in a grassland whose gross primary production is 40,000 kJ per square metre per year and whose plants respire 24,000.',
            'Recall the governing ideas: NPP = GPP \u2212 R_A first, then successive 10 percent transfers between levels.',
            'Compute NPP: 40,000 \u2212 24,000 = 16,000 kJ m\u207b\u00b2 yr\u207b\u00b9 of plant production.',
            'Transfer: herbivores retain about 1,600, first-level carnivores about 160, and third-level consumers about 16 kJ m\u207b\u00b2 yr\u207b\u00b9.',
            'State the result: roughly 0.04 percent of the original GPP — one part in 2,500 — which is why a pair of nesting falcons needs hundreds of hectares of hunting ground, and why nothing eats falcons for a living.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Never say energy cycles — it flows once and leaves as heat. Do not confuse standing crop (a snapshot) with production (a rate): plankton overturn so fast that small biomass supports big consumption. The ten-percent figure is a rule of thumb, not a constant of nature, and pyramids of numbers can be inverted (one tree, ten thousand insects) even though energy pyramids cannot.',
          tone: 'warn',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Trophic level', def: 'A feeding position in an ecosystem: producer, herbivore, carnivore, or decomposer pathway.' },
            { term: 'Gross primary production', def: 'Total energy fixed by photosynthesis per area per time.' },
            { term: 'Net primary production', def: 'GPP minus plant respiration — the energy actually available to consumers.' },
            { term: 'Secondary production', def: 'Consumer biomass generation: assimilated energy minus respiration.' },
            { term: 'Standing crop', def: 'The biomass present at one moment, distinct from the rate it is produced.' },
            { term: 'Detrital food web', def: 'The network feeding on dead organic matter; often the majority of energy flow.' },
            { term: 'Trophic transfer efficiency', def: 'Fraction of production passed to the next level; about 10 percent on average.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Energy pyramids can never be inverted because:',
              options: ['Biomass always decreases with height', 'Each level loses most of its energy as heat, leaving less available above', 'Producers are always the most numerous', 'Decomposers return energy to plants'],
              answer: 1,
              explain: 'The second law taxes every transfer, so each level must run on a smaller energy income than the one below.',
            },
            {
              q: 'Net primary production equals:',
              options: ['GPP plus respiration', 'GPP minus autotrophic respiration', 'Total consumer intake', 'The standing crop'],
              answer: 1,
              explain: 'NPP = GPP \u2212 R_A: what photosynthesis fixes minus what the plants themselves burn.',
            },
            {
              q: 'In the open ocean, consumer biomass can exceed producer biomass because:',
              options: ['Energy pyramids invert there too', 'Fast-turnover phytoplankton replace themselves quicker than consumers deplete them', 'Fish photosynthesize', 'Producers are metabolically inefficient'],
              answer: 1,
              explain: 'It is a turnover-rate effect; the energy pyramid still tapers normally.',
            },
            {
              q: 'Top predators are naturally rare because:',
              options: ['They reproduce too fast', 'Each transfer keeps only about 10 percent, capping the apex energy budget', 'Humans remove them everywhere', 'They cannot find mates'],
              answer: 1,
              explain: 'Compounded transfer losses leave the apex with a tiny fraction of the base — rarity by arithmetic.',
            },
            {
              q: 'Eating grain directly rather than as grain-fed beef feeds more people because:',
              options: ['Beef has no calories', 'Livestock respire away most of the grain energy before slaughter', 'Grain is indigestible to humans', 'Cooking destroys grain energy'],
              answer: 1,
              explain: 'Passing through an extra trophic level taxes the energy at roughly 10 percent per step.',
            },
          ],
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Energy enters as light and leaves as heat; only matter cycles.',
            'NPP = GPP \u2212 R_A: the budget consumers actually get.',
            'Each transfer keeps roughly 10 percent — a tapering pyramid.',
            'Fast turnover lets ocean biomass pyramids invert; energy pyramids never do.',
            'Feeding at lower trophic levels multiplies the mouths a landscape can support.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'bio-adaptive-immunity',
      title: 'Adaptive Immunity: Antibodies, T Cells, and Memory',
      domain: 'Life Sciences',
      field: 'Immunology',
      branch: 'Molecular Immunology',
      tier: 'advanced',
      concepts: [
        'Innate versus adaptive immunity',
        'Clonal selection',
        'B cells and antibody structure',
        'Helper and cytotoxic T cells',
        'MHC antigen presentation',
        'Affinity maturation and class switching',
        'Immunological memory and vaccination',
      ],
      words: 1240,
      readMins: 6,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'The innate immune system responds in minutes with generic weapons, but the adaptive immune system takes days and does something far stranger: it learns. Facing a virus it has never met, it selects cells that happen to bind that virus, multiplies them ferociously, refines their grip over the following weeks, and stations memory cells on patrol for decades. Molecular Immunology follows that machinery — its receptors, its selection logic, and its memory — from clonal selection to the design of vaccines.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Vaccination, allergy shots, monoclonal-antibody drugs, transplant matching, and much of oncology\u2019s recent progress run on the machinery described here. It is also the system that misfires in autoimmune disease — powerful learning cuts both ways.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The adaptive response belongs to lymphocytes: B cells, matured in the bone marrow, and T cells, schooled in the thymus. Each naive lymphocyte carries a receptor of one — and only one — specificity, assembled at random during development, before any encounter with antigen. Burnet\u2019s clonal selection theory says the antigen merely selects whichever pre-made receptor fits: cells whose receptor binds the invader proliferate into a clone of effectors and memory cells while the rest stand down. The system does not design antibodies on demand; it screens a vast random library.',
        },
        {
          kind: 'para',
          text: 'B-cell receptors are antibodies anchored in the membrane — Y-shaped proteins of two heavy and two light chains. Each arm carries a variable region folded into a unique shape, the paratope, that grips a complementary epitope on the antigen; the stem, the constant region, determines class and function. Activated B cells mature into plasma cells that secrete antibody at thousands of molecules per second each. Antibodies do not kill directly: they neutralize, tag invaders for phagocytes (opsonization), and trigger complement — flagging rather than firing.',
        },
        {
          kind: 'para',
          text: 'T cells see the world differently: never whole pathogens, only peptide fragments displayed on major histocompatibility complex (MHC) proteins. MHC class I molecules occur on nearly every nucleated cell and show peptides from proteins synthesized inside it — evidence of virus or tumor — to CD8 cytotoxic T cells, which kill the exhibiting cell by inducing apoptosis. MHC class II molecules are carried by professional antigen-presenting cells — dendritic cells, macrophages, B cells — and show ingested material to CD4 helper T cells, which command the response through cytokines: licensing B cells, activating macrophages, dispatching killers.',
        },
        {
          kind: 'para',
          text: 'The receptor repertoire is built by deliberately rearranging gene segments. Each developing B cell assembles a heavy chain from one of about 45 variable (V), 23 diversity (D), and 6 joining (J) segments, and a light chain from its own V and J pools — over a million heavy-light combinations before counting the imprecise splicing itself, which adds and deletes bases at random (junctional diversity). Multiplied out, the potential repertoire exceeds 10\u00b9\u00b9 specificities — vastly more than there are pathogens to fight.',
        },
        {
          kind: 'para',
          text: 'About a week into the response, B cells gather in germinal centers where an enzyme mutates their variable regions roughly a million times faster than the genomic norm. Cells whose mutated receptors bind antigen tighter win the competition for T-cell help and divide; the rest die. Iterated, this affinity maturation yields antibodies tens to hundreds of times better than the originals. Meanwhile class switching re-welds the same variable region onto different constant regions — IgM early, then IgG for blood and tissues, IgA for mucosa, IgE against parasites — changing the antibody\u2019s job without changing its target.',
        },
        {
          kind: 'para',
          text: 'The first encounter is slow — days of clonal expansion while the pathogen gains ground — and IgM-dominant. Memory B and T cells then persist for decades, so a second encounter is met within hours by IgG at far higher titers and better affinity, usually stamping the invader out before symptoms begin. Vaccination is exactly this memory installed without the disease: a harmless preview of the antigen, from attenuated virus to messenger RNA instructing cells to make its protein. Fading memory is why some vaccines need boosters, and slower T-cell renewal is part of why the elderly respond more weakly to novel antigens.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Clonal expansion',
          latex: 'N = N_0\\,2^{n}',
          meaning: 'After n rounds of division, one selected lymphocyte yields 2\u207f descendants — a dozen divisions gives 4,096 cells from one founder.',
        },
        {
          kind: 'formula',
          name: 'Antibody\u2013antigen binding',
          latex: 'K_a = \\frac{k_{\\text{on}}}{k_{\\text{off}}}',
          meaning: 'Binding strength as the ratio of association to dissociation rates; affinity maturation raises it mainly by slowing the fall-apart.',
        },
        {
          kind: 'formula',
          name: 'Combinatorial diversity',
          latex: 'N_{\\text{comb}} \\approx (45 \\times 23 \\times 6) \\times (40 \\times 5) \\approx 1.2 \\times 10^{6}',
          meaning: 'Heavy-chain V\u00d7D\u00d7J times \u03ba light-chain V\u00d7J choices, before junctional diversity lifts the potential repertoire past 10\u00b9\u00b9.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the size of the effector pool when a single naive B cell undergoes 12 divisions, and the antibody output its plasma-cell descendants can sustain at peak.',
            'Recall the governing ideas: clonal expansion is exponential, N = N\u20802\u207f, and each plasma cell secretes on the order of 2,000 antibody molecules per second.',
            'Compute expansion: 2\u00b9\u00b2 = 4,096 plasma cells from the one founder (real responses seed many founders in parallel).',
            'Compute output: 4,096 \u00d7 2,000 \u2248 8 \u00d7 10\u2076 antibody molecules per second at peak — a molecular factory built in days.',
            'Interpret: the same arithmetic explains the primary response\u2019s several-day lag (few founders, many divisions) and the secondary response\u2019s speed (memory cells start numerous and need fewer rounds).',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Do not say antibodies kill — they mark; the killing is done by complement, phagocytes, and cytotoxic cells. T cells never recognize free antigen, only peptide-on-MHC, which is why tissue matching decides transplant fate. And the random-generation point matters: the repertoire exists before infection, so tolerance must be learned against self, and its failure is autoimmunity. Memory also fades at different speeds for different pathogens — a vaccinated childhood does not run on one timer.',
          tone: 'warn',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Antigen', def: 'Any molecule recognized by an adaptive receptor; the trigger of a specific response.' },
            { term: 'Epitope', def: 'The small surface patch of an antigen that a receptor or antibody actually contacts.' },
            { term: 'Clonal selection', def: 'Antigen-driven proliferation of lymphocytes whose pre-existing receptor happens to fit.' },
            { term: 'MHC', def: 'Cell-surface proteins displaying peptides: class I on all nucleated cells, class II on antigen-presenting cells.' },
            { term: 'Plasma cell', def: 'An antibody-secreting effector descendant of an activated B cell.' },
            { term: 'Memory cell', def: 'The long-lived clone left after a response, enabling faster, stronger immunity on re-challenge.' },
            { term: 'Affinity maturation', def: 'The germinal-center mutation-and-selection cycle that progressively tightens antibody binding.' },
            { term: 'Class switching', def: 'Recombining a fixed variable region onto different constant regions to change function, not target.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Clonal selection predicts that antigen-specific receptors are:',
              options: ['Designed after encountering the antigen', 'Generated randomly before antigen arrives, then selected', 'Inherited only from the mother', 'Identical on every B cell'],
              answer: 1,
              explain: 'The library is built blindly during development; antigen only chooses which shelf multiplies.',
            },
            {
              q: 'Cytotoxic T cells kill infected cells by recognizing:',
              options: ['Free virus particles', 'Peptides displayed on MHC class I', 'Antibodies stuck to the surface', 'MHC class II only'],
              answer: 1,
              explain: 'CD8 cells read the peptide-on-class-I display that nearly every nucleated cell is obliged to maintain.',
            },
            {
              q: 'Class switching changes:',
              options: ['The antigen targeted', 'The antibody\u2019s constant region and thus its function', 'The T-cell receptor', 'The MHC type of the B cell'],
              answer: 1,
              explain: 'The variable, antigen-binding region is preserved; only the tail — and with it the job — changes.',
            },
            {
              q: 'Affinity maturation occurs in germinal centers by:',
              options: ['Random mutation followed by selection for tighter binding', 'Deleting every B cell in the organ', 'Class switching alone', 'T cells editing their receptors'],
              answer: 0,
              explain: 'Somatic hypermutation diversifies receptors; competition for antigen and T-cell help selects the best binders.',
            },
            {
              q: 'Compared with the primary response, the secondary immune response is:',
              options: ['Slower and weaker', 'Faster, stronger, IgG-dominated, and higher-affinity', 'Identical in every respect', 'IgM-dominated'],
              answer: 1,
              explain: 'Memory cells start numerous and pre-refined, so the second encounter is overwhelmed quickly.',
            },
          ],
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Receptors are random; antigen selects — clonal selection in one line.',
            'B cells secrete antibodies that flag; T cells read peptide-on-MHC and kill or command.',
            'V(D)J joining plus junctional randomness builds a potential repertoire beyond 10\u00b9\u00b9.',
            'Germinal centers mutate and select — affinity maturation; class switching changes the tail.',
            'Memory cells make the second response faster and stronger — the whole logic of vaccination.',
          ],
        },
      ],
    },
  ],
}
