import type { KnowledgeTopic } from '../types'

/** CROSS-VERIFY PASS X55 (2026-10-26): Cell & Molecular Biology (book 3,
 *  ku-cell-molecular-biology) cross-verified against Gerald Bergtrom,
 *  "Cell and Molecular Biology: What We Know & How We Found Out" (Basic
 *  iText, University of Wisconsin-Milwaukee, 2015, ISBN 978-0-9961502-5-5
 *  family; CC-BY open-education license) — the world's most-adopted OPEN
 *  cell & molecular biology textbook, ranked comprehensive 5/5 by the Open
 *  Textbook Library. Full text PDF (82,446 words) obtained from Saylor
 *  Academy's official open hosting of the author's UWM Digital Commons
 *  edition (resources.saylor.org, CellAndMolecularBiology-Bergtrom.pdf),
 *  extracted with pdftotext and read this pass: Table of Chapters COMPLETE;
 *  Chapter 1 (cell tour, three domains, archaea, endomembranes, MreB/FtsZ
 *  prokaryotic cytoskeleton homologs) COMPLETE; Chapter 8 (Griffith
 *  1928 with Neufeld's serotypes and the Spanish-flu context, Avery-
 *  MacLeod-McCarty, Hershey-Chase 1952, DNA structure, chromatin levels,
 *  nucleosomes 147bp + ~80bp linker, histone octamer, 30nm solenoid,
 *  replication, proofreading) COMPLETE; Chapter 9 (transcription overview,
 *  three RNA classes, primer-less error-prone polymerases) COMPLETE;
 *  Chapter 10 (genetic code deciphering, 61+3 codons, codon bias, >95%
 *  non-coding DNA in higher eukaryotes) COMPLETE; Chapter 11 (lac/trp
 *  operons, cAMP-CAP, induction by derepression, chromatin regulation)
 *  COMPLETE; Chapter 6 (glycolysis vs fermentation, ~687 kcal/mole glucose,
 *  7.3 kcal/mole ATP) and Chapter 7 COMPLETE; Chapter 15 (cytoskeleton:
 *  microtubules 25nm/13 protofilaments, GTP dynamics, kinetochore vs polar
 *  spindle fibers, laser-severing experiment, 9+2 axoneme, nexin/radial
 *  spokes, dynein sliding, kinesin/dynein cargo transport, G-actin/F-actin,
 *  sarcomere bands, contraction paradox, sliding filament) COMPLETE;
 *  Chapter 16 (3H-thymidine pulse-chase autoradiography, G1/S/G2/M, G0,
 *  MPF discovery by oocyte cytoplasm transfer, cyclin + cdk, S-phase
 *  factor, G1/G2/M checkpoints, separase, apoptosis via Bcl2-family Bak/
 *  Bax, cytochrome c, procaspase activation, necrosis contrast, cancer)
 *  COMPLETE; Chapters 2-5, 12-14 (chemistry, proteins, bioenergetics
 *  theory, enzymes, DNA technologies, membranes) SKIMMED and reconciled —
 *  membrane structure/function and protein chemistry belong to this
 *  library's Biochemistry book; DNA technologies to Genetics & Heredity.
 *
 *  CROSS-VERIFY RESULT — our eight existing lessons (bio-cell-biomolecules,
 *  bio-dna-structure-replication, bio-transcription-rna-processing,
 *  bio-translation-genetic-code, bio-mutations-dna-repair,
 *  bio-gene-regulation-epigenetics, bio-cell-signaling-transduction,
 *  bio-cellular-respiration-pathways) agree with the book on every shared
 *  claim: cell theory and its exceptions, the endomembrane system, Singer-
 *  Nicolson fluid mosaic, GLUT carriers and the Na+/K+ pump, Griffith/
 *  Avery/Hershey-Chase, Chargaff, semiconservative replication with
 *  pol alpha/delta/epsilon (~1000 nt/s bacterial vs ~50 nt/s eukaryotic
 *  forks), primer-less proofreading-free RNA polymerase, spliceosome and
 *  alternative splicing, 61+3 genetic code with AUG/Trp singleton codons,
 *  lac/trp wiring including cAMP-CAP, inducer exclusion and attenuation,
 *  miRNA/siRNA through RISC, ubiquitin-proteasome, genomic imprinting and
 *  the Dutch Hunger Winter, glucose oxidation at ~687 kcal/mole (our
 *  2,870 kJ) with ~7.3 kcal/mole per ATP. ZERO corrections were needed.
 *
 *  THREE SUBTOPICS the book teaches as full chapters that no live topic
 *  owned (grep-verified near-zero hits across src/data/knowledge/fields/
 *  beyond passing mentions: nucleosome only as a replication side-note and
 *  a chromatin-regulation aside; cytoskeleton only as a morphogenesis
 *  passing reference; no cell-cycle/cyclin/MPF/apoptosis lesson at all)
 *  are added here:
 *
 *  1. bio-chromatin-nucleosome-packaging — the book's Chapter 8 chromatin
 *     core as a structural story: why packaging is mandatory, the beads-on-
 *     a-string nucleosome (147 bp around a histone octamer, ~80 bp linker),
 *     histone chemistry (lysine/arginine basicity, ~1 g histone per g DNA),
 *     the 30 nm solenoid, heterochromatin vs euchromatin, and the
 *     extraction/DNase experiments that established all of it. Carved
 *     against bio-gene-regulation-epigenetics, which owns the chemical
 *     MODIFICATION of these structures (acetylation, methylation, CpG);
 *     this lesson owns the STRUCTURE and packaging arithmetic.
 *  2. bio-cytoskeleton-cell-motility — the book's Chapter 15: three
 *     filament systems with dimensions and dynamics, microtubule polarity
 *     and GTP, kinetochore vs polar spindle fibers and the laser-severing
 *     test, the 9+2 axoneme and the sliding-doublet experiments, kinesin
 *     and dynein cargo logistics, the sarcomere and sliding-filament model
 *     with the ATP-for-relaxation paradox, prokaryotic MreB/FtsZ homologs.
 *     Carved against bio-dev-morphogenesis (owns adhesion/development),
 *     bio-action-potentials (owns electrochemistry), and bio-cell-
 *     biomolecules (owns membrane and transport).
 *  3. bio-cell-cycle-mitosis-checkpoints — the book's Chapter 16: bacterial
 *     fission vs the phased eukaryotic cycle, the 3H-thymidine pulse-chase
 *     autoradiography that defined G1/S/G2, G0 and terminal differentiation,
 *     MPF discovered by oocyte cytoplasm transfer, cyclin-cdk chemistry,
 *     the G1/G2/M checkpoints and separase, apoptosis via Bak/Bax,
 *     cytochrome c and caspases, apoptosis-vs-necrosis, and how checkpoint
 *     failure becomes cancer. Carved against bio-mutations-dna-repair
 *     (owns repair mechanisms — referenced at the G2 gate),
 *     bio-dev-model-organisms (owns development), and bio-crispr-gene-
 *     editing (owns editing tools).
 *
 *  All three lessons carry quiz items with explanations and worked
 *  examples; word counts verified by scripts/count-topic-words-exact.ts.
 */
export const x55CrossverifyTopics: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-chromatin-nucleosome-packaging',
    title: 'Chromatin and the Nucleosome: How Two Metres of DNA Fit Into a Nucleus',
    domain: 'Life Sciences',
    field: 'Cell & Molecular Biology',
    branch: 'Molecular Genetics',
    tier: 'core',
    concepts: [
      'Packaging problem: 2 m of DNA, 6 micrometre nucleus',
      'Nucleosome: 147 bp of DNA on a histone octamer',
      'Histone chemistry: lysine, arginine and the 1:1 mass ratio',
      'Beads-on-a-string and the ~80 bp linker',
      '30 nm solenoid and higher-order folding',
      'Euchromatin vs heterochromatin',
      'DNase digestion and salt-extraction experiments',
    ],
    words: 1923,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "The DNA lesson ended with replication; this one begins with a storage crisis. The complete human genome, laid end to end across all 46 chromosomes, runs about two metres per cell — and it must fit, every time, inside a nucleus roughly six micrometres across, a compression factor of several hundred thousand. Bacteria get away with leaving their circular chromosome essentially naked, a loop of DNA with no protein wardrobe to speak of. Eukaryotes cannot: their DNA is thousands of times longer, and it must be stored, indexed, protected, read on demand, and copied perfectly — a warehouse, a library and an operating library system in one. Bergtrom's cell-biology text devotes the heart of its DNA chapter to the solution every eukaryotic cell converged on: chromatin, the DNA-protein complex whose repeating unit, the nucleosome, is one of the most conserved structures in biology.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Packaging is not passive storage — it is the first layer of gene control, and its failure is measurable disease. Whether a gene is wrapped in nucleosomes or exposed decides whether polymerase can even find it; the regulation lesson builds its entire epigenetics story on chemical marks painted onto this packaging. Cancer chemotherapy, aging research and even the naming of nuclear organisation all trace back to the structural facts here: if you do not know what a nucleosome is, epigenetics is vocabulary without meaning.",
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "Three levels of packing. The structural hierarchy of chromatin has three rungs. First rung: DNA wrapped around histone proteins forms nucleosomes — the 'beads on a string' fibre. Second: multiple nucleosomes coil and condense into a 30-nanometre fibre, historically called the solenoid — a helical stack of the beads. Third: higher-order folding of the 30 nm fibre, anchored at intervals to a protein scaffold, produces the looped, condensed architecture that finally appears as the fat metaphase chromosomes every microscopy student draws during mitosis and meiosis. The logic is exactly like coiling rope: a long thread becomes a coil, the coil becomes loops, the loops become a compact body — and every rung multiplies the compression while keeping the string retrievable.",
      },
      {
        kind: 'para',
        text: "The nucleosome, measured. The beads were pinned down by digestion. When chromatin was treated briefly with DNase — an enzyme that cuts exposed DNA — the enzyme chewed only the exposed stretches between beads, leaving each bead's DNA protected. Electrophoresis of the recovered DNA showed the beads are separated by a linker of about 80 base pairs, and each bead itself wraps about 147 base pairs of DNA. So the repeating unit of the eukaryotic genome is roughly 200 bp: 147 wrapped plus ~80 exposed — the arithmetic every worked problem about nucleosome numbers starts from. One wrap corresponds to about 1.7 turns of the double helix around each particle.",
      },
      {
        kind: 'para',
        text: "The histones and their chemistry. Protein extraction from purified beads resolved exactly five proteins, and they are the same five everywhere: histones H2A, H2B, H3 and H4 — two of each, forming the octamer core — plus H1, which sits outside the particle and grips the linker DNA, sealing the wrap and helping neighbouring nucleosomes stack. Histones are strikingly basic proteins, crowded with lysine and arginine, two amino acids whose side chains carry positive charge; that positive surface grips DNA's negative phosphodiester backbone the way static clings to a sweater. The affinity is mass-for-mass: about one gram of histone accompanies every gram of DNA in the cell. Evolution kept this chemistry essentially frozen — histone sequences are among the most conserved proteins known, and bacteria, which never evolved chromatin, have no histones at all, a fact the book flags as a genuine evolutionary puzzle.",
      },
      {
        kind: 'para',
        text: "How the experiments worked. Two classical preparations revealed the two lowest rungs. In low-salt extraction, most chromatin proteins shake loose; centrifuging the remainder and viewing it in the electron microscope shows the beads-on-a-string fibre directly. Raising the salt makes even the string of beads fold — nucleosome preparations simply condense into the 30 nm solenoid as ionic strength climbs, which is itself evidence that the higher-order fold is held largely by electrostatic attractions that salt screens. DNase digestion gave the base-pair numbers of the previous paragraph. The lesson is methodological as much as factual: careful, graded perturbation of one variable at a time is how a structure invisible to any single microscope was assembled from indirect evidence.",
      },
      {
        kind: 'para',
        text: "Euchromatin and heterochromatin. During interphase — when the cell is not dividing — chromatin is not uniform. Some regions stay densely packed, effectively inaccessible: heterochromatin. Others relax into the extended, gene-rich state: euchromatin. The book states the functional rule plainly — active genes tend to sit in dispersed euchromatin, where the enzymes of replication and transcription can reach the DNA, while genes that are inactive in transcription are heterochromatic, obscured by the chromatin proteins packed around them. Regions can switch between the two states as genes are activated or silenced, which is why packaging is the gate and modification — the regulation lesson's acetylation and methylation marks — is the gatekeeper's hand. The two lessons divide the territory on purpose: this one owns the structure and its arithmetic; that one owns the chemistry that opens and closes it.",
      },
      {
        kind: 'para',
        text: "Packaging meets replication and repair. Every rung of the hierarchy creates work for the other DNA lessons. A replication fork must thread through chromatin: as the fork passes, nucleosomes ahead of it are disassembled and behind it the new daughter duplexes are reloaded — one reason a eukaryotic fork moves at roughly fifty nucleotides per second while a naked bacterial fork manages a thousand. Repair crews must find damage through the same maze. And the sheer redundancy of packaging explains a number examiners love: because each nucleosome carries about 200 bp and the genome carries billions of base pairs, a single human cell must maintain tens of millions of nucleosomes, synthesised in bulk during S phase precisely when new DNA needs new spools. The DNA-structure lesson mentions the reload; this lesson gives the inventory being reloaded.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Problem: estimate the number of nucleosomes in a diploid human cell, taking the genome as 6.4 x 10^9 base pairs and the repeat unit as 147 bp wrapped plus 80 bp of linker.",
        "Compute the repeat: 147 + 80 = 227 bp per nucleosome; round to about 200 bp for the estimate.",
        "Divide: 6.4 x 10^9 bp / 2.0 x 10^2 bp per nucleosome = 3.2 x 10^7 nucleosomes — about 32 million per cell.",
        "Sanity-check the compression: without nucleosomes, 2 m of DNA; a 200-bp repeat folds each ~68 nm stretch of DNA into one ~10 nm bead, so the first rung alone gives roughly a 6-7-fold linear compaction, and successive coiling into the 30 nm fibre and metaphase loops multiplies this toward the ~10,000-fold needed.",
        "State the result: tens of millions of spools per cell, each costing 2 x 4 core histones plus one H1 — which is why histones are among the most abundant proteins a cell makes, and why their manufacture peaks in S phase.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Reading epigenetics headlines: "open chromatin" and "closed chromatin" in a paper mean euchromatin and heterochromatin — this lesson is the geometry behind the jargon.',
        'Understanding chemotherapy: drugs that damage or cross-link DNA are delivered against a genome wrapped 32-million-spool tight, which is why repair-deficient cancers respond differently.',
        'Interpreting chromosome paintings and karyotypes: the condensed metaphase chromosomes that geneticists photograph are the third rung of this hierarchy — packaging, not new DNA.',
        'Biotechnology: because nucleosomes block polymerases, chromatin must be stripped or bypassed in cell-free systems — a hidden reason eukaryotic in-vitro transcription is hard.',
        'Evolution: the near-freeze of histone sequences across eukaryotes is a textbook molecular clock — any mutation in the DNA-gripping surface is lethal, so selection holds the line.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Three slips recur. Believing the nucleosome is one histone molecule: it is an octamer — two each of H2A, H2B, H3 and H4 — with H1 as an external linker clamp, not part of the core. Confusing the wrap with the repeat: 147 bp are wrapped, but the repeating unit along the fibre is about 200 bp once the ~80 bp linker is counted; using 147 in nucleosome-number problems overestimates the count by a third. And assuming 'condensed' equals 'permanently silent': the heterochromatin-euchromatin boundary is dynamic and tissue-specific — the same stretch of DNA can be compacted in a neuron and open in a liver cell.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Chromatin', def: 'The DNA-protein complex of eukaryotic chromosomes — the packaged state of the genome, dynamic between relaxed and condensed forms.' },
        { term: 'Nucleosome', def: 'The repeating bead of chromatin: about 147 bp of DNA wrapped around a histone octamer (two each of H2A, H2B, H3, H4).' },
        { term: 'Linker DNA', def: 'The ~80 bp stretch of exposed DNA between neighbouring nucleosome beads, bound and protected by histone H1.' },
        { term: 'Histone octamer', def: 'The eight-protein core particle of the nucleosome; its lysine- and arginine-rich surface carries the positive charge that grips DNA.' },
        { term: '30 nm fibre (solenoid)', def: 'The second-level coil of nucleosomes, ~30 nm across, formed as salt concentration rises or cellular conditions favour compaction.' },
        { term: 'Euchromatin', def: 'The relaxed, gene-rich, transcription-accessible state of interphase chromatin.' },
        { term: 'Heterochromatin', def: 'The compacted, protein-obscured chromatin state in which genes are effectively silent.' },
        { term: 'Solenoid experiment', def: "The classical extraction-and-digestion logic — low-salt beads, high-salt fibre, DNase trim — that measured the nucleosome's 147 + 80 bp architecture." },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'How much DNA wraps around one nucleosome core, and how much DNA does one full repeat (bead plus linker) span?',
          options: ['147 bp wrapped; about 200 bp per repeat', '80 bp wrapped; 147 bp per repeat', '200 bp wrapped; 200 bp per repeat', '147 bp wrapped; exactly 147 bp per repeat'],
          answer: 0,
          explain: 'DNase-digestion experiments showed ~147 bp protected around the octamer and ~80 bp linkers between beads — a repeating unit of roughly 200 bp.',
        },
        {
          q: 'Histones bind DNA so tightly because:',
          options: ['they are hydrophobic and dissolve in the lipid bilayer', 'they are rich in positively charged lysine and arginine that attract the negative backbone', 'they are enzymes that polymerise onto DNA', 'they share sequence homology with DNA'],
          answer: 1,
          explain: 'Histones are basic proteins — their positively charged side chains grip the negatively charged phosphodiester backbone, at roughly one gram of histone per gram of DNA.',
        },
        {
          q: 'Raising the salt concentration of a nucleosome preparation makes the beads fold into the 30 nm solenoid. This demonstrates that the higher-order fold is held mainly by:',
          options: ['covalent bonds between nucleosomes', 'electrostatic attractions that salt can screen', 'the DNA sequence itself', 'the nuclear lamina'],
          answer: 1,
          explain: 'The book uses this experiment as evidence: if simply screening ionic interactions collapses the beads into the fibre, electrostatics — not covalent chemistry — hold that rung of packing.',
        },
        {
          q: 'A transcription factor cannot reach a promoter because its gene sits in compacted chromatin. Which pair of statements is correct?',
          options: ['The gene is heterochromatic and inactive; opening it is a chromatin-modification job', 'The gene is euchromatic and active; compaction is irrelevant', 'The gene has no nucleosomes; it is naked like bacterial DNA', 'The gene is heterochromatic and therefore permanently deleted'],
          answer: 0,
          explain: 'Inactive genes are heterochromatic, obscured by packing proteins; the regulation lesson\'s acetylation/methylation machinery is what reopens them — structure here, chemistry there.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'insight',
        text: 'Grounding: Gerald Bergtrom, Cell and Molecular Biology: What We Know & How We Found Out (Basic iText, UWM, CC-BY), Chapter 8 "DNA Structure, Chromosomes, Chromatin and Replication" — the chromatin, nucleosome and histone sections. The DNA-structure lesson owns the double helix and replication fork; the gene-regulation lesson owns the chemical marks that open and close this packaging; the genetics book extends the story to how packaged chromosomes behave in inheritance.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-cytoskeleton-cell-motility',
    title: 'The Cytoskeleton and Cell Motility: Tubes, Ropes and Molecular Walkers',
    domain: 'Life Sciences',
    field: 'Cell & Molecular Biology',
    branch: 'Cell Biology',
    tier: 'core',
    concepts: [
      'Three filament systems: microtubules, microfilaments, intermediate filaments',
      'Microtubule polarity: GTP, plus and minus ends, MTOC nucleation',
      'Kinetochore vs polar spindle fibers; laser-severing proof',
      'The 9+2 axoneme, nexin and dynein arms',
      'Kinesin and dynein: anterograde and retrograde cargo',
      'Sarcomere bands and the sliding-filament model',
      'Contraction paradox: ATP for contraction and relaxation',
    ],
    words: 1981,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Look at a eukaryotic cell in a light microscope and it looks like a bag of fluid — the book opens its chapter with exactly that underestimation. The electron microscope demolished it: the cytoplasm is permeated by rods, tubes and filaments, a cytoskeleton that fixes where organelles sit, gives the cell its shape and mechanical strength, and powers every movement the cell or its cargo makes. Nothing about cellular motion is random — not the crawl of an amoeba, not the tug of a dividing chromosome, not the ferrying of a neurotransmitter vesicle down an axon. Bergtrom organises the whole machinery around three filament systems and two questions: what is each fibre made of, and what walks along it?",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "The cytoskeleton is the skeleton AND the freight railway of the cell, and its failures are human disease: cilia built with defective dynein leave airways and fertility damaged; axonal transport breakdown precedes several neurodegenerations; muscle weakness runs on sarcomere proteins. It is also pharmacology's favourite target — spindle poisons work precisely on the microtubule dynamics described here, which is why this chapter is perennial exam material and clinical science at once.",
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "Three systems, three jobs. Microtubules are the stiffest: hollow tubes 25 nm across, each wall a ring of 13 protofilaments of tubulin subunits. Microfilaments are the thinnest, 7 nm solid twin helices of the protein actin — G-actin monomers polymerising into F-actin strands. Intermediate filaments sit in between at about 10 nm (keratin is the family's celebrity) and are the group's structural specialists: ropes that brace cell shape and anchor organelles, notably NOT built for movement. The division of labour the book draws: intermediate filaments mainly structure; microtubules and microfilaments do double duty, holding shape while also changing it, because both carry motor proteins and both self-assemble and disassemble. Even bacteria, the book adds from its first chapter, have primitive homologs — MreB echoes actin in the dividing ring, FtsZ echoes tubulin — so the cytoskeleton is ancient, not a eukaryotic invention.",
      },
      {
        kind: 'para',
        text: "Microtubule dynamics and polarity. Tubulin monomers pair into alpha-beta dimers, and the dimers add to one end — the plus end — with GTP hydrolysis fuelling assembly, while the minus end disassembles when the structure must remodel. That polarity was proven beautifully: isolated microtubules grow at one end while shrinking at the other. In animal cells, microtubules radiate from centrioles (a cross-section shows the classic nine-triplet arrangement); in plants, from a less defined microtubule-organising centre. Because the filaments are dynamic — disassembling here, reassembling there — the cell can rebuild its entire interior skeleton within minutes, which is exactly what mitosis demands.",
      },
      {
        kind: 'para',
        text: "The mitotic spindle, measured by laser. Dividing cells build two kinds of spindle microtubules. Kinetochore microtubules attach, via proteins assembled at each chromatid's centromere (the kinetochore), to the pulled chromosomes; polar microtubules run pole to pole and overlap at the cell's middle. The counterintuitive part the book stresses: the plus, assembling ends of the kinetochore fibers are AT the kinetochore, and the chromosome is reeled in when the fiber disassembles at its minus end back at the pole — shortening, not reeling-in like thread on a spool. Proof came from aiming a tiny laser at the spindle fiber attached to a pair of chromatids: cut it, and the severed fragment's behaviour revealed which end was doing what. Meanwhile dynein motors walk the overlapping polar fibers past each other, ATP in hand, pushing the poles apart even as the chromosomes are being pulled to them.",
      },
      {
        kind: 'para',
        text: "Cilia and flagella: the 9+2 engine. A cilium or flagellum grows from a basal body (itself nine triplets, centriole-like) into the axoneme, whose cross-section is the textbook's most recognisable diagram: nine outer microtubule doublets ringing a central pair — 9+2. Dynein arms on the A tubule of each doublet walk along the B tubule of the next doublet; when the walkers on one side fire, doublets slide, but flexible nexin links and radial spokes restrain the slide, converting it into a bend. One-sided, wave-like sliding gives the flagellum's propeller beat; choreographed, single-plane sliding gives the cilium's oar stroke. The clinching experiment: shear cilia or sperm tails off cells in a blender, strip their membranes with detergent, and the naked axonemes still beat — but only when ATP is added. Demolish the nexin and spokes with harsher treatment and ATP makes the doublets slide apart instead of beating: motility, restraint and ATP dependence all demonstrated in one preparation.",
      },
      {
        kind: 'para',
        text: "Cargo logistics. Dynein and kinesin are ATPase motor proteins that stride along microtubule tracks carrying organelles and vesicles — the book's examples run from secretory vesicles heading for the plasma membrane to the axon's freight system, where kinesin hauls neurotransmitter-filled vesicles outward from cell body to nerve ending (anterograde) and a dynein-dynactin complex hauls empties back (retrograde). Even a chameleon's colour change is freight: pigment vesicles disperse or aggregate along microtubule tracks in its skin cells. Microfilaments carry their own walker — myosin — and when one end of an actin filament is anchored to the membrane, myosin's ATP-powered stroke deforms the membrane itself: the mechanics behind pseudopods and shape change.",
      },
      {
        kind: 'para',
        text: "Muscle and the sliding filament. Skeletal muscle packs its contractile units into sarcomeres, repeating segments between dense Z-lines (Z for zwischen, 'between'). Reading the bands is a classic skill: thin actin filaments extend inward from each Z-line and constitute the light I bands; thick myosin filaments make up the dark A band with the M line at its centre; the H zone is the myosin-only stretch around the M line. Under the microscope, contraction is a slide, not a squeeze: the H zone nearly vanishes, the I bands narrow, the Z-lines draw closer — but the A band's width never changes. That asymmetry is the evidence for the sliding-filament model: thin filaments slide along thick ones, towing the Z-lines together; nothing contracts in length. The paradox that once confused physiologists resolves with the model: glycerinated muscle fibers, given ATP and calcium, contract and lift a weight — but when the ATP runs out they will not relax, and no amount of pulling fixes it until fresh ATP arrives. Contraction needs ATP to energise the stroke; relaxation needs ATP to let myosin release actin and reset. The book adds the calcium switch: regulatory proteins gate actin so that a nerve's calcium signal decides when the sliding runs.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Problem: a micrograph shows a sarcomere with its H zone nearly gone, I bands narrowed and Z-lines closer together. A classmate claims the myosin filaments have shortened. Decide.",
        "Recall the invariants: the A band (thick-filament region) has a fixed width equal to the myosin filament length; only the sliding positions of thin filaments change.",
        "Apply: if myosin filaments had shortened, the A band would narrow. The A band width is unchanged while the I bands narrow and the H zone disappears — thin filaments have been drawn deeper into the A band, overlapping more of the myosin.",
        "Cross-check with the paradox experiment: the fiber relaxes only when fresh ATP is added, consistent with cross-bridges releasing upon ATP binding, not with any shortening of the filaments.",
        "State the result: contraction is relative sliding of unchanging filaments — the sliding-filament model — evidenced by the fixed A band and the ATP-dependent relaxation.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Cancer chemotherapy: spindle poisons freeze microtubule assembly or disassembly, jamming the mitotic spindle this lesson describes — the biology behind taxane and vinca drugs.',
        'Respiratory and fertility medicine: defective dynein arms disable the 9+2 axonemes of airway cilia and sperm tails, producing chronic airway disease and infertility.',
        'Neurology: axonal transport runs on kinesin and dynein over microtubule tracks — the freight system whose long-range failure characterises several neurodegenerative diseases.',
        'Exercise science: the strength of weight training builds on sarcomere biology — repeated controlled contraction and the repair of the contractile apparatus.',
        'Cell biology technique: fluorescently tagged tubulin and actin light up live-cell dynamics precisely because these filaments are dynamic polymers, not static struts.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Four slips recur. Reversing the spindle logic: kinetochore fibers pull chromosomes in by DISassembling at their pole-facing minus ends — their growing plus ends sit at the kinetochore, so 'reeled in like thread' is backwards. Confusing the motor roster: kinesin generally walks cargo toward plus ends (outward, anterograde), dynein toward minus ends (inward, retrograde) — and in the axoneme it is dynein arms that slide the doublets. Reading the sarcomere backwards: the A band is the fixed-width thick-filament zone; if your contraction story shrinks it, the story is wrong. And forgetting that relaxation costs ATP: rigor — the locked state — is what happens when ATP is absent, which is why the glycerinated-fiber experiment confused physiologists for years.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Cytoskeleton', def: 'The cell-wide network of microtubules, microfilaments and intermediate filaments that shapes the cell and powers its internal movements.' },
        { term: 'Microtubule', def: 'A 25 nm hollow tube of 13 tubulin protofilaments; assembles at its plus end with GTP and disassembles at its minus end.' },
        { term: 'Microfilament', def: 'A 7 nm twin-helical polymer of actin (F-actin built from G-actin monomers); the track for myosin motors.' },
        { term: 'Intermediate filament', def: 'A ~10 nm structural rope (e.g. keratin) bracing cell shape; the one filament family not built for motility.' },
        { term: 'Kinetochore', def: 'The protein assembly built on each chromatid\'s centromere where spindle microtubules attach.' },
        { term: 'Axoneme', def: "The 9+2 microtubule core of a cilium or flagellum, with dynein arms, nexin links and radial spokes — the beating engine." },
        { term: 'Anterograde / retrograde', def: 'Outbound and return cargo traffic along a track; in axons, kinesin hauls vesicles out, dynein-dynactin hauls empties back.' },
        { term: 'Sarcomere', def: 'The repeating contractile unit between Z-lines; its fixed A band and sliding I bands carry the sliding-filament evidence.' },
        { term: 'Sliding-filament model', def: 'Contraction as thin filaments sliding along unchanging thick filaments, drawing Z-lines closer — no filament shortens.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'During anaphase, a chromosome moves poleward mainly because:',
          options: ['kinetochore microtubules shorten by disassembling at their pole-facing minus ends', 'kinetochore microtubules lengthen at the kinetochore', 'myosin motors walk the chromosome along actin', 'the chromosome is pushed by a growing polar microtubule'],
          answer: 0,
          explain: 'The book stresses the counterintuitive geometry: plus ends assemble at the kinetochore, and poleward movement comes from shortening at the minus ends — proven with the laser-severing experiment.',
        },
        {
          q: 'Stripped, membrane-free axonemes beat when ATP is added. If nexin links and radial spokes are then removed, adding ATP instead causes:',
          options: ['stronger beating', 'the doublets to slide apart without bending', 'the axoneme to disassemble into tubulin', 'nothing — dynein needs calcium'],
          answer: 1,
          explain: 'Restraint converts sliding into bending: remove nexin and spokes and the same dynein sliding simply separates the doublets — the preparation that proved the slide-under-restraint mechanism.',
        },
        {
          q: 'A glycerinated muscle fiber has lifted a weight until all added ATP is hydrolysed. What happens now?',
          options: ['it relaxes spontaneously', 'it can be stretched and then relaxes on its own', 'it neither contracts nor can be stretched until fresh ATP is supplied', 'it contracts further without ATP'],
          answer: 2,
          explain: 'The contraction paradox resolved: ATP is needed both to power the stroke and to release myosin from actin for relaxation — without ATP the system locks in rigor.',
        },
        {
          q: 'Which observation best supports the sliding-filament model over "filaments shorten"?',
          options: ['The A band width stays constant while I bands narrow and the H zone disappears', 'The Z-lines move apart during contraction', 'Sarcomeres disappear during contraction', 'Actin filaments shorten while myosin lengthens'],
          answer: 0,
          explain: 'If thick filaments shortened, the A band would narrow; its fixed width with vanishing H zone and narrowing I bands means thin filaments slide deeper into overlap.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'insight',
        text: 'Grounding: Gerald Bergtrom, Cell and Molecular Biology: What We Know & How We Found Out (Basic iText, UWM, CC-BY), Chapter 15 "The Cytoskeleton & Cell Motility" — microtubules, kinetochore and polar fibers, the laser-severing and axoneme experiments, motor proteins, and the sarcomere/sliding-filament sections; prokaryotic MreB/FtsZ homologs from Chapter 1. The cell-cycle lesson applies this machinery to mitosis; the development lessons build embryonic movement on the same actin; the anatomy book scales the sarcomere up to whole-muscle physiology.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-cell-cycle-mitosis-checkpoints',
    title: 'The Cell Cycle: Phases, Checkpoints and How Cells Die',
    domain: 'Life Sciences',
    field: 'Cell & Molecular Biology',
    branch: 'Cell Biology',
    tier: 'core',
    concepts: [
      'Binary fission vs the phased eukaryotic cycle',
      '3H-thymidine pulse-chase autoradiography',
      'G1, S and G2; G0 and terminal differentiation',
      'MPF from oocyte cytoplasm: cyclin plus Cdk',
      'The G1, G2 and M checkpoints; separase',
      'Apoptosis: Bak/Bax, cytochrome c, caspases',
      'Apoptosis vs necrosis; checkpoint failure and cancer',
    ],
    words: 2226,
    readMins: 11,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Nineteenth-century microscopists saw only two states of a cell's life: the brief drama of mitosis — chromosomes condense, the nucleus seems to dissolve, spindle fibers haul the copies apart — and a long featureless 'resting' stretch they called interphase. The book opens its chapter by dismantling that illusion: interphase turned out to be the busiest part of the cycle, divided into its own phases, each monitored by molecular gatekeeping. A dividing bacterium, by contrast, never phases its life at all — its single circular chromosome is already replicating before binary fission finishes, so each daughter inherits a partly duplicated genome inside a brisk 30-to-60-minute existence. Eukaryotes, with genomes thousands of times larger, had to separate DNA synthesis from division in time — and that separation created the cycle whose phases, gates and failure modes this lesson follows.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Cancer is this lesson's failure mode: a cell that escapes its checkpoints and divides when it should not. Wound healing, blood replacement and the biology of aging run on the same machinery, working correctly. Understanding the cycle is also the route into chemotherapy logic — drugs that stall replication or spindle assembly exploit the phase structure — and into developmental biology, where programmed cell death sculpts tissues. No other single topic in cell biology connects the microscope, the clinic and the molecule so directly.",
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "How the phases were found. The decisive technique was autoradiography with tritiated thymidine: feed cells a short 'pulse' of radioactive thymine — only cells synthesising DNA will build it into their DNA — then fix them on slides and overlay photographic film; developing the film reveals which cells were radioactive. The first result: none of the cells in mitosis were labelled. DNA synthesis therefore does not happen during mitosis; it must occupy some window of interphase. The second experiment was the pulse-chase: pulse briefly, then move cells into non-radioactive medium and fix them at increasing 'chase' times. Labelled cells that had not yet reached mitosis told researchers how long DNA synthesis precedes division; the fraction of cells in mitosis at any moment (about 7 percent, constant across slides) and the ~20-hour spacing between successive peaks of labelled mitotic cells gave the full generation time. Out of such curves came the modern vocabulary: G1 (gap 1) between division and DNA synthesis, S for synthesis itself, G2 (gap 2) between synthesis and mitosis, M for mitosis — the whole cycle roughly 16 to 24 hours for a typical human cell.",
      },
      {
        kind: 'para',
        text: "What each phase does. G1 is growth and preparation: the cell builds the enzymes and proteins that replication will need — DNA polymerases, helicases, primases. S phase replicates the DNA and, the book notes, manufactures the new histones to assemble fresh chromatin on the daughter duplexes — the nucleosome inventory of the chromatin lesson is restocked here. G2 is the shortest interphase segment, devoted to preparing for mitosis itself: the tubulins for spindle microtubules accumulate, along with proteins that will condense chromatin and the cohesin that holds each duplicated chromatid pair together at its centromere until separation time. Mitosis and cytokinesis take about an hour to ninety minutes; everything else is interphase. And some cells shorten the whole schedule ferociously — a newly fertilised egg can divide roughly hourly, compressing phases into a scramble.",
      },
      {
        kind: 'para',
        text: "G0: when cells stop. Terminally differentiated cells — the red blood cell with its roughly 60-day half-life and its reticulocyte replacements, the neuron, the muscle fiber — leave the cycle shortly after entering G1, entering a non-dividing state called G0. G0 is not a fifth phase of the cycle; it is an exit. Most G0 cells live out finite lives and are replaced from stem cells, though some (muscle, many neurons) are so long-lived they are effectively never replaced. The exit is reversible in special cases: a lymphocyte sitting in G0 can be re-summoned into the cycle by meeting a pathogen, then divides to mass-produce antibodies. The book flags the flip side immediately: cells that enter G0 when they should not, or are wrongly signalled out of it, have dodged the controls on division — and that dodge is where tumours begin.",
      },
      {
        kind: 'para',
        text: "MPF: the cycle's engine, found by injection. The first proof that the cycle is chemically driven came from frog oocytes, which are conveniently enormous. Cytoplasm drawn from an oocyte in the midst of meiosis, injected into a resting oocyte, sent the recipient into meiosis prematurely — something in the donor cytoplasm was the signal. Purified, the factor was named maturation promoting factor (MPF); when the same activity was found pushing somatic cells from G2 into mitosis, the M was allowed to stand for mitosis too. MPF is a protein kinase with two subunits: one carries the catalytic site, the other regulates it. Assaying both across the cycle gave the elegant punchline — the catalytic subunit's level is flat, but its partner rises gradually after cytokinesis, peaks at mitosis, then collapses. The cycling partner was named cyclin; the constant kinase subunit, cyclin-dependent kinase (Cdk). Cyclin binding is what activates the kinase: as cyclin accumulates toward a threshold, more and more active MPF exists, until entry into mitosis is triggered — and MPF's own phosphorylations then kick off cyclin's destruction, resetting the engine for the next lap. A second fusion experiment showed the principle generalises: fuse an S-phase cell with a G1 cell and the G1 nucleus is pushed into premature DNA synthesis — an S-phase factor, itself a two-subunit kinase, exists for S entry too.",
      },
      {
        kind: 'para',
        text: "The checkpoints. Progress through the cycle is gated at transitions — the checkpoints — where the cell verifies it may proceed. At the G1 checkpoint (the restriction point), the cell asks whether replication machinery has accumulated to adequate levels; it is here that fully differentiated cells are signalled to stop making the active G1 kinase and slip into G0 instead. At the G2 checkpoint, the question is whether the S-phase DNA is undamaged — or damaged and repaired, by the proofreading and repair crews the mutation lesson owns — and whether the tubulins and condensation proteins for mitosis have reached threshold. At the M checkpoint, operating at metaphase, MPF has already phosphorylated the proteins that condense chromatin, build the spindle and dissolve the nuclear envelope; the final trigger is mechanical. Spindle tension tugs at the kinetochores holding chromatid pairs together, and only when that tension reaches threshold does active separase appear to cut the cohesion — anaphase begins, the cell completes mitosis and cytokinesis, and each daughter enters a fresh G1. Yeast run with essentially these three checkpoints; complex eukaryotes deploy more cyclins, more Cdks and finer controls, but every kinase works the same way: a cyclin-bound Cdk phosphorylating the proteins of the next phase.",
      },
      {
        kind: 'para',
        text: "How cells die on purpose. Development needs demolition as much as construction — cells assembled for a transient purpose must be removed, and damaged cells must be culled before they harm the tissue. Programmed cell death, apoptosis, begins with a developmental signal (in tadpoles, the book's example, it is thyroid hormone) that switches on Bcl-2-family genes. The family's channels Bak and Bax open in the outer mitochondrial membrane, and cytochrome c — a peripheral membrane protein held only loosely on the cristal membrane — leaks from the intermembrane space into the cytosol. There it binds adaptor proteins, the aggregates recruit inactive procaspase, and the binding flips an allosteric switch that releases active caspase — proteolytic enzymes that digest the cell from within, the tadpole's tail to be reabsorbed as nutrients for the adult frog's construction. Apoptosis is tidy and self-programmed; its contrast, necrosis, is death by external injury — accidental, spilling contents, inflammatory. And the checkpoint-cancer link closes the loop: a cell whose G2 gate lets damaged DNA through, or that is wrongly recalled from G0, may divide into a clone that evades every later check — the book's word for the outcome is carcinogenesis. When checkpoints detect something irreparable mid-cycle, the cell's own response can be apoptosis: self-destruction as the alternative to cancer.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Problem: a pulse-chase autoradiograph shows labelled mitotic cells peaking every 20 hours, and about 7 percent of cells on any slide are in mitosis. Estimate the length of M phase.",
        "Recall the logic: the peak-to-peak spacing gives the whole cycle, and the fraction of cells in a phase equals that phase's share of the cycle, because the population is sampled randomly.",
        "Apply: T(M) = fraction in M x cycle length = 0.07 x 20 h = 1.4 hours.",
        "Cross-check: the book states mitosis plus cytokinesis takes about 1 to 1.5 hours — the estimate lands squarely in that range, confirming both the method and the arithmetic.",
        "State the result: roughly 1.4 hours for M phase, ~7 percent of a 20-hour cycle — the same sampling logic lets you read G1, S and G2 lengths from the chase-time curves.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Cancer medicine: most chemotherapy targets S phase (replication blockers) or M phase (spindle poisons) — the phase structure this lesson maps is the dosing logic.',
        'Wound healing and blood banking: tissue repair reactivates appropriate cells while red-cell replacement runs on reticulocytes — the G0-and-stem-cell economy in action.',
        'Immunisation: a vaccine works because lymphocytes in G0 re-enter the cycle and expand — the one routine, beneficial case of a differentiated cell resuming division.',
        'Developmental biology: hand-shaped paws and the tadpole\'s vanishing tail are apoptosis stories — sculpting by scheduled demolition.',
        'Cancer genetics: failing G2 checkpoints connect directly to the DNA-repair lesson — hereditary repair defects shift the odds of checkpoint escape at every division.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Four slips recur. Calling G0 a fifth phase of the cycle: it is an exit from the cycle, not a stage on its track — the cell that re-enters does so by passing G1's checkpoint again. Reversing the kinase partners: Cdk levels are constant and cyclin levels cycle — naming cyclin the constant one inverts the entire regulation scheme. Putting DNA synthesis in G2: the autoradiographs showed mitotic cells unlabelled and synthesis in interphase's S window; G2 is preparation and damage-checking, not copying. And treating apoptosis as injury: it is programmed, tidy and signal-driven — necrosis is the accidental, spilling kind; mixing them up loses the whole clinical distinction.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Interphase', def: 'The long stretch between divisions — G1, S and G2 — once mistaken for resting time.' },
        { term: 'S phase', def: 'The DNA-synthesis window of interphase, when the genome is copied and new histones are made.' },
        { term: 'Pulse-chase', def: 'The autoradiographic strategy: brief radioactive exposure, then unlabelled growth sampled over time — the method that defined G1/S/G2.' },
        { term: 'G0', def: 'The non-dividing state of terminally differentiated cells, exited from G1; reversible for lymphocytes, effectively permanent for neurons.' },
        { term: 'MPF', def: 'Maturation (or mitosis) promoting factor — the cyclin-Cdk kinase whose discovery by oocyte-cytoplasm injection launched cycle biochemistry.' },
        { term: 'Cyclin / Cdk', def: 'The engine pair: cyclin levels rise and fall through the cycle; Cdk is constant and active only when cyclin-bound.' },
        { term: 'Checkpoint', def: 'A phase transition where the cell verifies readiness or integrity before proceeding — G1 for replication readiness, G2 for DNA integrity, M for spindle tension.' },
        { term: 'Separase', def: 'The enzyme activated at the metaphase checkpoint that cuts cohesin and triggers anaphase chromatid separation.' },
        { term: 'Apoptosis', def: 'Programmed cell death: Bcl-2-family channels release cytochrome c, procaspase activates, and caspases digest the cell — development\'s demolition tool.' },
        { term: 'Necrosis', def: 'Death by external injury — accidental, untidy, contents spilled — contrasted with apoptosis\'s programmed order.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Pulse-chase autoradiography showed that cells in mitosis were never labelled right after a 3H-thymidine pulse. The conclusion was:',
          options: ['mitotic cells exclude thymidine', 'DNA synthesis occurs in interphase, not during mitosis', 'mitosis requires no energy', 'radioactivity kills dividing cells'],
          answer: 1,
          explain: 'Only cells making DNA incorporated the label; mitotic cells were unlabelled, so replication must occupy a separate interphase window — the observation that defined S phase.',
        },
        {
          q: 'In the MPF story, which subunit rises and falls through the cycle?',
          options: ['Cdk, the catalytic subunit', 'cyclin, the regulatory subunit', 'both rise and fall together', 'neither — MPF is constitutive'],
          answer: 1,
          explain: 'Assays showed Cdk levels constant while cyclin accumulates after cytokinesis, peaks at mitosis and collapses — cyclin binding is the on-switch, and MPF triggers cyclin\'s own destruction.',
        },
        {
          q: 'A cell cannot pass the G2 checkpoint until:',
          options: ['the nuclear envelope breaks down', 'S-phase DNA is undamaged or fully repaired and mitotic proteins reach threshold', 'cohesin is cut by separase', 'cyclin is destroyed'],
          answer: 1,
          explain: 'The G2 gate verifies DNA integrity (proofreading and repair from the mutation lesson) plus accumulation of tubulins and condensation proteins — separase waits for the M checkpoint.',
        },
        {
          q: 'Which sequence correctly traces apoptosis?',
          options: ['caspase activates, then cytochrome c leaves mitochondria, then Bax opens', 'Bcl-2-family channels open, cytochrome c escapes, adaptors recruit procaspase, caspases digest the cell', 'the cell swells and bursts, releasing cytokines', 'separase cuts cohesin and the cell divides'],
          answer: 1,
          explain: 'The book\'s cascade: Bak/Bax channels release cytochrome c, adaptor aggregation activates procaspase, caspases execute the self-digestion — ordered and programmed, unlike necrosis.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'insight',
        text: 'Grounding: Gerald Bergtrom, Cell and Molecular Biology: What We Know & How We Found Out (Basic iText, UWM, CC-BY), Chapter 16 "Cell Division and the Cell Cycle" — the pulse-chase autoradiography, G0, MPF, checkpoint and apoptosis sections, with the mitosis machinery from Chapter 15. The mutation-and-repair lesson owns the damage systems the G2 gate inspects; the cytoskeleton lesson owns the spindle this cycle divides with; the genetics book extends the chromosome story into inheritance, and the anatomy book scales cell turnover to tissue maintenance.',
      },
    ],
  },
  // ------------------------------------------------------------------
]
