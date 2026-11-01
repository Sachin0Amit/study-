/**
 * Knowledge Universe — Cell & Molecular Biology — Chapter 02: The Cell: Structure & Signaling
 * 5 lessons · ~11,189 words
 * field: Cell & Molecular Biology
 * legacy sources: life-sciences.ts, x14-molecular.ts, x55-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Cell Biology, Cell Signaling]
 *
 * Lesson order (MASTER-SYLLABUS §6.1 tree — chemistry first, then architecture,
 * movement, communication, division; numbering is derived by the bridge):
 *   02.1 bio-cell-biomolecules — The Cell and Its Biomolecules: From Membranes to Macromolecules
 *   02.2 bio-organelle-atlas — The Organelle Atlas: Nucleus to Peroxisome (NEW 2026-11-02)
 *   02.3 bio-cytoskeleton-cell-motility — The Cytoskeleton and Cell Motility
 *   02.4 bio-cell-signaling-transduction — Cell Signaling: Reception, Transduction, Response
 *   02.5 bio-cell-cycle-mitosis-checkpoints — The Cell Cycle: Phases, Checkpoints and How Cells Die
 */
import type { KnowledgeTopic } from '../../types'

export const cellMolecularBiologyCh02: KnowledgeTopic[] = [
  {
    id: 'bio-cell-biomolecules',
    title: 'The Cell and Its Biomolecules: From Membranes to Macromolecules',
    domain: 'Life Sciences',
    field: 'Cell & Molecular Biology',
    branch: 'Cell Biology',
    tier: 'core',
    concepts: [
      'Cell theory and its honest exceptions',
      'Prokaryote versus eukaryote',
      'The endomembrane system',
      'Mitochondria, plastids and ribosomes',
      'Fluid-mosaic membrane',
      'Passive and active transport',
      'Four classes of biomolecules',
      'Enzymes, active sites and saturation',
    ],
    words: 1859,
    readMins: 8,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Before genetics, before physiology, biology’s ground floor is the cell and its chemistry. One lesson cannot replace a textbook’s four chapters, but it can assemble the parts that exams actually probe: what the cell theory claims and where it bends, the organelle inventory, the membrane and its traffic rules, the four classes of biomolecules, and the enzymes that make the chemistry fast enough for life. NCERT compresses this into Class 11 chapters 8 through 11; OpenStax Biology 2e spreads it across its opening chapters; this lesson condenses both.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The cell is among the most reliably scoring areas in entrance biology — screening papers routinely draw five or more questions from cell structure, biomolecules and enzymes, and the college-entrance biology course opens its year with this material. It is also the conceptual base for everything later: genetics needs the nucleus, respiration needs the mitochondrion, pharmacology needs the membrane.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Cell Theory and Its Limits' },
      {
        kind: 'para',
        text: 'Matthias Schleiden (1838, plants) and Theodor Schwann (1839, animals) proposed that all organisms are made of cells and that the cell is the basic unit of life; Rudolf Virchow closed the loop in 1855 — omnis cellula e cellula, every cell from a cell. The theory has honest exceptions: viruses are acellular, skeletal muscle fibers run centimeters long with hundreds of nuclei, and mature red blood cells work without any nucleus at all. None of these embarrasses the theory, which describes organisms, not every tissue’s eccentricities. Microscopes set the ceiling of what could be known — light microscopes resolve about 200 nanometers, electron microscopes a thousandfold finer — which is why organelle knowledge tracks microscope history.',
      },
      { kind: 'heading', text: 'Two Architectures' },
      {
        kind: 'para',
        text: 'Prokaryotes pack life into a single compartment: no nuclear envelope (the nucleoid is a coiled-chromosome zone), no membrane-bound organelles, ribosomes of the smaller 70S class. Outside lies the cell envelope — glycocalyx (capsule or slime layer), the wall, and the plasma membrane — plus mesosome infoldings and inclusion bodies that stockpile glycogen or phosphate; plasmids carry accessory genes such as antibiotic resistance. The disease-facing story of these structures belongs to this library’s microbiology field guide; here they matter as the prokaryote’s defining architecture.',
      },
      {
        kind: 'para',
        text: 'Eukaryotes compartmentalize. The nucleus — double envelope perforated by pores, nucleolus assembling ribosomal RNA, chromatin of DNA plus protein — is the archive. The endomembrane system is the logistics wing: rough ER studded with ribosomes folds proteins; smooth ER makes lipids and detoxifies drugs in the liver; the Golgi apparatus, a stack of cisternae, receives vesicles at its cis face and ships glycoproteins and lysosomes from its trans face — the cell’s post office; lysosomes are sacs of acid hydrolases built for demolition and recycling, the “suicide bags” whose failure causes Tay–Sachs disease; and vacuoles are the tonoplast-bounded storehouses of plant cells, contractile in freshwater Amoeba for osmoregulation.',
      },
      {
        kind: 'para',
        text: 'Two organelles run their own show. Mitochondria: double-membraned, inner membrane folded into cristae studded with ATP-making particles, matrix holding its own circular DNA and 70S ribosomes — semiautonomous, multiplying by fission and maternally inherited, the core of the endosymbiosis argument. Plastids are the plant counterparts: chloroplasts with grana of thylakoids in a stroma, starch-storing amyloplasts and pigment-loaded chromoplasts. Ribosomes sit outside the membrane system entirely — 80S in the eukaryotic cytosol, 70S inside organelles — a fingerprint examiners love.',
      },
      { kind: 'heading', text: 'The Membrane and Its Traffic Rules' },
      {
        kind: 'para',
        text: 'The boundary is the fluid-mosaic membrane of Singer and Nicolson (1972): a phospholipid bilayer with hydrophobic tails inward, proteins embedded (integral) or perched (peripheral), cholesterol between the tails buffering fluidity, and carbohydrates tagging the outer face for recognition. “Fluid” is literal — proteins and lipids drift laterally, which is why membranes fuse, endocytose and divide.',
      },
      {
        kind: 'para',
        text: 'Traffic across the membrane runs by two rules. Passive transport moves things down gradients without ATP: simple diffusion for small nonpolar molecules and gases; facilitated diffusion through channel proteins (aquaporins for water) or carriers (the GLUT glucose transporters) — specific and saturable, but still free; and osmosis, water’s own diffusion toward the stronger solution, which swells cells hypotonically, holds them isotonic and shrinks them — or plasmolyses plant cells — hypertonically. Active transport pumps uphill using ATP: the sodium–potassium pump exports 3 Na+ for every 2 K+ per ATP spent, founding the ion gradients behind every nerve impulse (the action-potential lesson runs on this pump). Bulk transport rounds it out — endocytosis, phagocytosis (“cell eating”, how Amoeba feeds) and pinocytosis (“cell drinking”), plus exocytosis, the vesicle release behind secretion and neurotransmission.',
      },
      { kind: 'heading', text: 'The Biomolecules' },
      {
        kind: 'para',
        text: 'Carbohydrates are “hydrates of carbon” by formula and polymers of monosaccharides in practice. The monomers: the hexoses glucose and fructose, and the pentoses ribose and deoxyribose that later anchor nucleic acids. Disaccharides pair them — sucrose (glucose plus fructose, table sugar), maltose, lactose. Polysaccharides sort by bond geometry: starch stores energy in plants, glycogen is the more branched animal store of liver and muscle, and cellulose — beta-linked glucose, the most abundant organic polymer on Earth — cannot be digested by humans but builds every plant wall. Inulin is the fructose-storing oddity that examiners occasionally pull out.',
      },
      {
        kind: 'para',
        text: 'Lipids are defined by insolubility, not chemistry. Fats are glycerol esterified to three fatty acids — saturated chains straight and stackable (butter), unsaturated chains kinked at cis double bonds and fluid (olive oil). Phospholipids swap one fatty acid for a phosphate head: amphipathic, and therefore the membrane’s own building block. Steroids are four fused carbon rings — cholesterol, the membrane fluidity manager and parent of the sex hormones — a shape exam papers ask you to recognize on sight.',
      },
      {
        kind: 'para',
        text: 'Proteins are amino-acid polymers joined by peptide bonds, twenty monomers strong, and their function is folding: primary structure is the sequence; secondary is local hydrogen-bonded alpha helices and beta sheets; tertiary is the full 3D fold locked by hydrophobic packing, ionic bonds and disulfide bridges; quaternary assembles chains — hemoglobin’s four subunits the standard example. The cast covers every job in the body: enzymes, oxygen-carrying hemoglobin, antibodies, collagen, the actin and myosin of the musculoskeletal lesson. Nucleic acids store the instructions: DNA, a right-handed antiparallel double helix of deoxyribose-phosphate backbones and paired bases — adenine with thymine (two hydrogen bonds), guanine with cytosine (three) — and single-stranded RNA in its messenger, transfer and ribosomal casts. Proteins do the work; nucleic acids remember the recipe.',
      },
      {
        kind: 'formula',
        name: 'Chargaff’s rule',
        latex: '\\%A = \\%T, \\quad \\%G = \\%C \\quad \\Rightarrow \\quad \\%G + \\%C = 100\\% - 2(\\%A)',
        meaning: 'In double-stranded DNA the bases pair one-to-one, so adenine equals thymine and guanine equals cytosine — knowing any one percentage yields the rest.',
      },
      {
        kind: 'para',
        text: 'All organisms share the primary metabolites — amino acids, sugars, fats, nucleotides, the proteins of respiration and growth, present everywhere with identifiable jobs. Secondary metabolites are the optional chemistry of particular species: alkaloids such as morphine, quinine and caffeine, terpenoids, tannins, flavonoid pigments, rubber, and most drugs, dyes and spices. The exam line is clean: primary metabolites have roles in all cells; secondary ones are species-specific luxuries, mostly defense.',
      },
      { kind: 'heading', text: 'Enzymes: Catalysts of the Possible' },
      {
        kind: 'para',
        text: 'Nearly every enzyme is a catalytic protein (a few RNAs, ribozymes, catalyze too). The substrate binds the active site, the enzyme–substrate complex stabilizes the transition state, activation energy drops, and product leaves the enzyme unchanged to run again — millions of cycles per minute. Enzymes never decide whether a reaction is favorable; they decide only how fast. Rate responds to substrate concentration along the Michaelis–Menten curve: velocity climbs, then plateaus at Vmax when every active site is occupied; Km, the substrate level at half-maximal velocity, measures affinity — low Km means a tight grip. Temperature and pH tune the curve: human enzymes peak near body temperature and denature not far above it, pepsin works in stomach acid near pH 2, trypsin prefers about 8. Inhibitors finish the story — competitive molecules fight for the active site, non-competitive ones bend it — the mechanism behind statins and most drug design (the metabolism lesson carries that machinery further).',
      },
      {
        kind: 'example',
        title: 'Worked Example: Base Composition from One Number',
        steps: [
          'Identify what is asked: a double-stranded DNA sample is 15% adenine — what is its guanine percentage?',
          'Apply pairing: adenine pairs with thymine, so thymine is also 15%; together A + T account for 30%.',
          'Subtract from the whole: G + C = 100% − 30% = 70%.',
          'Pair again: G = C, so guanine = cytosine = 35%.',
          'Check: 15 + 15 + 35 + 35 = 100% — the symmetry of the double helix turns every such problem into two subtractions and a halving.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Cystic fibrosis is a faulty membrane chloride channel — a transport protein, not a metabolism flaw.',
          'Aquaporin mutations cause rare diabetes insipidus: the water channel fails and the kidneys cannot concentrate urine.',
          'Statins, antivirals and many psychiatric drugs target membrane receptors and enzymes — pharmacology is applied cell biology.',
          'Mitochondrial DNA analysis identifies disaster victims and maternal lineages, because the organelle passes down one parent only.',
          'Glycogen’s branching versus starch explains why athletes carb-load on starch while specific enzyme losses cause glycogen-storage diseases.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Four slips dominate mark schemes. 70S ribosomes occur in prokaryotes and in mitochondria and chloroplasts — that is evidence for endosymbiosis, not a printing error. Facilitated diffusion is passive: carriers make movement specific, not powered. Water crosses membranes fast because of aquaporins — osmosis without them would be slow. And enzymes lower activation energy; they never touch the equilibrium or make an unfavorable reaction run uphill.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Nucleoid', def: 'The nuclear region of a prokaryote — chromosome without a surrounding envelope.' },
          { term: 'Endomembrane system', def: 'ER, Golgi, lysosomes and vacuoles working as the cell’s manufacturing and shipping network.' },
          { term: 'Cristae', def: 'The inner mitochondrial folds carrying the electron-transport machinery.' },
          { term: 'Fluid-mosaic model', def: 'Singer and Nicolson’s membrane: a mobile phospholipid bilayer with drifting proteins.' },
          { term: 'Facilitated diffusion', def: 'Passage down a gradient through specific channels or carriers — no ATP spent.' },
          { term: 'Amphipathic', def: 'Having both hydrophobic and hydrophilic regions — the phospholipid’s defining trick.' },
          { term: 'Quaternary structure', def: 'The assembly of multiple folded protein chains, as in hemoglobin’s four subunits.' },
          { term: 'Secondary metabolite', def: 'A species-specific compound such as an alkaloid or tannin, absent from general metabolism.' },
          { term: 'Km', def: 'Substrate concentration at half-maximal enzyme velocity; inversely reflects substrate affinity.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The organelles nicknamed “suicide bags” are:',
            options: ['ribosomes', 'lysosomes', 'Golgi cisternae', 'peroxisomes'],
            answer: 1,
            explain: 'Lysosomes hold acid hydrolases that can digest the cell’s own contents — hence the name, and the tissue damage in Tay–Sachs disease.',
          },
          {
            q: 'Movement of glucose through a GLUT carrier is:',
            options: ['simple diffusion', 'facilitated diffusion — passive but specific', 'primary active transport', 'endocytosis'],
            answer: 1,
            explain: 'GLUT carriers move glucose down its concentration gradient; they make the passage selective and saturable, not powered.',
          },
          {
            q: 'Which structures contain 70S ribosomes?',
            options: ['the eukaryotic cytosol only', 'prokaryotes, mitochondria and chloroplasts', 'prokaryotes only', 'all ribosomes are 70S'],
            answer: 1,
            explain: 'Mitochondria and chloroplasts keep bacterial-sized ribosomes — a cornerstone of the endosymbiosis argument.',
          },
          {
            q: 'The alpha helices and beta sheets of protein secondary structure are held by:',
            options: ['hydrogen bonds within the backbone', 'disulfide bridges', 'peptide bonds', 'hydrophobic packing'],
            answer: 0,
            explain: 'Secondary structure is local hydrogen bonding; disulfide and hydrophobic interactions lock the tertiary fold instead.',
          },
        ],
      },
      {
        kind: 'para',
        text: 'The cell is a bag of controlled chemistry: a selective membrane, compartmental workshops, four classes of molecules and catalysts that set the speed limits. Everything else in biology — inheritance, respiration, physiology, medicine — is this lesson wearing different costumes. Move next to the genetics lessons for the nucleus in action, or to cellular respiration for what the cristae actually do.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-organelle-atlas',
    title: 'The Organelle Atlas: Nucleus to Peroxisome',
    domain: 'Life Sciences',
    field: 'Cell & Molecular Biology',
    branch: 'Cell Biology',
    tier: 'core',
    concepts: [
      'The nuclear envelope and its pores: selectivity, capacity and the Ran cycle',
      'The nucleolus and the nuclear lamina: the nucleus\'s two internal structures',
      'Rough endoplasmic reticulum: the signal hypothesis, folding and quality control',
      'Smooth ER: lipid synthesis, detoxification and the calcium warehouse',
      'The Golgi apparatus: polarity, processing and the mannose-6-phosphate tag',
      'Lysosomes: acidity, autophagy and the recycling loop',
      'Peroxisomes and vacuoles: oxidation chemistry and pressure storage',
    ],
    words: 2718,
    readMins: 14,
    addedOn: '2026-11-02',
    blocks: [
      {
        kind: 'para',
        text: 'The inventory lesson compressed the whole organelle roster into a few paragraphs; this lesson walks the rooms one by one, at the depth each deserves. The plan is the compartment logic itself: the archive and its reading room (nucleus, nucleolus, lamina), the factory wing that threads and folds new proteins (rough ER), the chemistry bay and warehouse (smooth ER), the finishing and shipping office (Golgi), the demolition-and-recycling yard (lysosome), the oxidation wing (peroxisome) and the pressure tank (the plant vacuole). One thread runs through most of the tour — the secretory pathway, the production line that Palade\'s pulse-chase experiments traced from ribosome to cell surface — and one habit: every room is introduced with the defect that reveals it, because damaged rooms are how medicine meets cell biology.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Room-by-room structure-function is the spine of entrance biology: pore selectivity, ER versus Golgi roles, the lysosome\'s acidity, the peroxisome\'s chemistry — each is a standard question, and the classic distractor is a room swapped for its neighbour. The defect map (which disease belongs to which room) turns memorized lists into reasoning that survives any phrasing.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The nucleus is bounded by two membranes that are one continuous sheet: the outer nuclear membrane is studded with ribosomes and merges into the endoplasmic reticulum, the inner face is lined by the nuclear lamina, and the two fuse at thousands of circular holes. Each hole is not a gap but a machine: the nuclear pore complex, an eight-spoked assembly of some thirty different nucleoporins, about a thousand times the mass of a typical protein, present in a few thousand copies per mammalian nucleus. The pore is a two-speed gate. Below roughly 40 kilodaltons, small proteins and ions wiggle through freely by diffusion; above it, cargo must carry a nuclear localization signal and be escorted by importin proteins, which dock, drag their cargo through the disordered tangle lining the channel, and are then recycled by Ran — a small GTP-binding switch whose GTP-loaded form inside the nucleus releases the cargo and sends the escort back empty. The RNA traffic is one-way: finished mRNA and ribosomal subunits leave; the archive\'s DNA never does.',
      },
      {
        kind: 'para',
        text: 'Inside the nucleus, two structures matter enough to have their own names. The nucleolus — the densest spot in the nucleus on any stained preparation — is not a membrane-bounded room but a workbench: the nucleolar organizer regions, where the chromosomes carry their ribosomal-RNA genes, transcribe rRNA around the clock and assemble it with imported proteins into the two ribosomal subunits that then exit through the pores. A cell\'s nucleolus is roughly proportional to its protein-building appetite — large in embryonic and cancer cells, the reason nucleolar enlargement is a diagnostic warning sign. The nuclear lamina is the opposite kind of structure: a chain-link fence of intermediate filaments (the lamins) just under the inner membrane, anchoring pores, organizing chromatin and giving the nucleus its mechanical shape. Mutations in the lamin gene produce Hutchinson–Gilford progeria — the premature-aging syndrome in which nuclei deform — the lamina\'s structural job made visible.',
      },
      {
        kind: 'figure',
        caption:
          'The secretory pathway — the endomembrane production line: proteins made on the rough ER travel in transport vesicles to the Golgi\'s cis face, are processed across the stack, and leave the trans face for the lysosome (tagged with mannose-6-phosphate), the plasma membrane, or secretion out of the cell.',
        afterConcept: 5,
        svg: `<svg viewBox="0 0 880 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Secretory pathway from nucleus through ER and Golgi to destinations">
  <style>.lbl{font-family:Georgia,serif;font-size:14.5px;fill:#3f3f46}.big{font-size:18px;font-weight:bold}.sm{font-size:12.5px;fill:#52525b}.ink{stroke:#8a8a93;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.route{stroke:#e11d48;fill:none;stroke-width:2.2;stroke-linecap:round}</style>
  <text class="lbl big" x="30" y="36" fill="#3f3f46">The secretory pathway — nucleus to export</text>
  <circle cx="130" cy="220" r="78" class="ink"/>
  <circle cx="130" cy="220" r="52" class="ink" stroke-dasharray="6 5"/>
  <circle cx="130" cy="220" r="22" class="ink" stroke="#d97706"/>
  <text class="lbl" x="86" y="216">nucleus</text>
  <text class="sm" x="78" y="236">(nucleolus inside)</text>
  <text class="sm" x="86" y="130">pores</text>
  <path class="ink" d="M206 190 C 238 186, 260 186, 292 190"/>
  <text class="sm" x="212" y="178">mRNA exits</text>
  <path class="ink" d="M300 150 C 312 146, 322 146, 334 150 M300 176 C 312 172, 322 172, 334 176 M300 202 C 312 198, 322 198, 334 202" stroke="#059669"/>
  <text class="sm" x="296" y="136" fill="#047857">ribosomes (80S)</text>
  <path class="ink" d="M330 150 C 380 150, 420 148, 470 150 L470 236 C 420 240, 380 240, 330 238 Z"/>
  <path class="ink" d="M330 176 C 380 176, 420 174, 470 176" stroke-dasharray="4 4"/>
  <path class="ink" d="M330 206 C 380 206, 420 204, 470 206" stroke-dasharray="4 4"/>
  <text class="lbl" x="352" y="262">rough ER — threads &amp; folds</text>
  <text class="sm" x="348" y="280">signal peptide opens the way (Blobel)</text>
  <path class="route" d="M472 186 C 500 186, 510 188, 534 190 M534 190 C 540 186, 548 186, 552 190 M552 190 C 546 194, 540 194, 534 190"/>
  <text class="sm" x="486" y="172">transport vesicle (COPII)</text>
  <path class="ink" d="M560 120 C 570 112, 590 110, 600 118 L600 270 C 590 278, 570 276, 560 268 Z"/>
  <path class="ink" d="M600 128 C 622 122, 636 124, 644 132 L644 258 C 636 264, 622 266, 600 262 Z"/>
  <path class="ink" d="M644 136 C 664 130, 678 132, 686 140 L686 250 C 678 258, 664 260, 644 254 Z"/>
  <text class="lbl" x="586" y="300">Golgi stack</text>
  <text class="sm" x="560" y="318">cis (arrival, left) → trans (shipping, right)</text>
  <path class="route" d="M688 170 C 716 168, 734 166, 760 164 M760 164 C 766 160, 774 160, 778 164 M778 164 C 772 168, 766 168, 760 164"/>
  <text class="sm" x="700" y="150">secretion route</text>
  <path class="ink" d="M782 140 L816 140 L816 176 L782 176 Z"/>
  <text class="sm" x="770" y="126">exocytosis →</text>
  <text class="sm" x="742" y="196">out of the cell</text>
  <path class="route" d="M672 260 C 700 292, 726 322, 748 350 M748 350 C 754 346, 762 346, 766 350 M766 350 C 760 354, 754 354, 748 350"/>
  <circle cx="790" cy="392" r="46" class="ink"/>
  <text class="sm" x="762" y="390">lysosome</text>
  <text class="sm" x="756" y="410">pH 4.5–5.0</text>
  <text class="sm" x="676" y="342" fill="#b91c1c">mannose-6-phosphate tag</text>
  <text class="sm" x="676" y="360">routes enzymes here (Golgi\'s address label)</text>
  <path class="route" d="M600 274 C 596 330, 594 372, 592 420 M592 420 C 588 426, 580 426, 576 422 M592 420 C 596 426, 604 426, 608 422" stroke="#059669"/>
  <path class="ink" d="M540 430 C 560 424, 620 424, 640 430 L640 462 C 620 468, 560 468, 540 462 Z"/>
  <text class="sm" x="544" y="452">plasma membrane route (membrane + surface proteins)</text>
  <text class="sm" x="30" y="330">two recycling notes:</text>
  <text class="sm" x="30" y="350">COPI vesicles run backward (Golgi → ER), keeping the rooms in balance</text>
  <text class="sm" x="30" y="370">eating a worn-out organelle = autophagy — the lysosome recycles the cell\'s own rooms</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'The rough endoplasmic reticulum is where the secretory line begins. Its sheets are studded with ribosomes on the cytosolic face, and the puzzle that made it famous is: how does a protein destined for export know to enter the ER\'s interior rather than stay in the cytosol? Günter Blobel\'s signal hypothesis (Nobel Prize, 1999) answered it: the first stretch of the growing protein — the signal peptide, about fifteen to thirty hydrophobic amino acids — is grabbed in the cytosol by a signal recognition particle, which parks the whole ribosome on an ER pore complex; synthesis then threads the chain into the ER\'s interior as it is made. Inside, the protein folds with chaperone help, gains its first sugars, and is inspected: misfolded chains are retained and degraded, which is why the most common single cystic-fibrosis mutation (a deleted phenylalanine, ΔF508) kills by quantity-control, not chemistry — the channel protein is built slightly wrong and the ER refuses to ship it. Scale is worth remembering: the ER holds more than half of all the membrane in a eukaryotic cell, a factory wing out-massing every other room.',
      },
      {
        kind: 'para',
        text: 'The smooth ER — same membranes, no ribosomes — is the wing\'s other half, three jobs deep. It makes lipids: phospholipids for all the cell\'s membranes, and steroid hormones in the gland cells that specialize in them. It detoxifies: liver hepatocytes pack their smooth ER with cytochrome P450 enzymes that chemically oxidize drugs and poisons into excretable forms — the reason chronic exposure (alcohol, sedatives) makes the liver\'s smooth ER visibly grow, tolerance with a physical address. And it stores calcium: the muscle version (the sarcoplasmic reticulum) banks the calcium that contraction releases — the signaling lesson\'s IP3 opens these same calcium warehouses, so every G-protein cascade touches this room. Neurons\' dendritic spines keep local smooth-ER calcium too, wiring local protein synthesis to local signals.',
      },
      {
        kind: 'para',
        text: 'The Golgi apparatus — seen by Camillo Golgi in 1898 with a stain so new he called it the internal reticular apparatus, and doubted for fifty years until the electron microscope settled it — is the finishing and shipping office. Its stack of flattened cisternae has a direction: the cis face receives vesicles from the ER, the trans face dispatches them onward, and cargo is processed as it moves or as the stack itself matures — the two competing models (cisternal maturation, in which each cisterna progresses from cis chemistry to trans chemistry while vesicles recycle enzymes backward via COPI; versus vesicular transport, in which cargo shuttles between fixed cisternae in COPII vesicles) — both agree on the chemistry, and the debate itself taught the field that the stack is dynamic, not furniture. The Golgi\'s jobs: finish the sugars started in the ER (O-linked glycosylation happens here), sort and tag — most famously adding mannose-6-phosphate onto lysosomal enzymes, the address label that routes them to the lysosome — and package the export traffic of the secretory pathway.',
      },
      {
        kind: 'formula',
        name: 'The lysosome\'s proton gradient',
        latex: '\\frac{[\\text{H}^{+}]_{\\text{lysosome}}}{[\\text{H}^{+}]_{\\text{cytosol}}} = 10^{7.2 - 4.5} \\approx 500',
        meaning: 'Cytosol sits near pH 7.2; the lysosome\'s interior is held at pH 4.5–5.0 by a V-type ATPase pump that spends ATP to push protons inward. A 2.7-unit pH gap is a ~500-fold excess of protons — the acid that activates the lysosome\'s ~60 acid hydrolases, all of which are built to work only at that acidity. The safeguard is elegant: if a lysosome leaks, its enzymes meet the neutral cytosol and go inactive — self-dissolution is engineered out.',
      },
      {
        kind: 'para',
        text: 'The lysosome — discovered and named by Christian de Duve in 1949 through centrifugation fractions, a piece of the 1974 Nobel — is the recycling yard: a sac of some sixty acid hydrolases (proteases, nucleases, lipases, polysaccharidases) working at the acid pH the formula above quantifies. Its diet has two menus. Heterophagy: material swallowed from outside by endocytosis or phagocytosis, delivered to the lysosome through endosome intermediates. Autophagy: the cell eating its own parts — a worn-out mitochondrion is wrapped in a double membrane and delivered whole; Yoshinori Ohsumi\'s yeast genetics (Nobel Prize, 2016) turned autophagy from an observation into a mapped pathway, and medicine now reads it everywhere from fasting metabolism to neurodegenerative disease, where failing autophagy lets protein garbage pile up. When the routing fails instead of the digestion, enzymes built without their mannose-6-phosphate tag are shipped to the surface and secreted — the cell\'s lysosomes run empty while the enzymes float uselessly in the medium: inclusion-cell (I-cell) disease, the Golgi\'s tagging failure.',
      },
      {
        kind: 'para',
        text: 'Two rooms remain. The peroxisome — also named by de Duve — is the oxidation wing: a single-membrane sac importing its enzymes (catalase among them, the most abundant protein in some peroxisomes) directly from the cytosol. Its chemistry is oxidative housekeeping: it breaks down very-long-chain fatty acids (twenty-two carbons and longer, which mitochondria cannot start on), synthesizes the ether lipids called plasmalogens that myelin needs, and disposes of hydrogen peroxide — the by-product of its oxidases — through catalase\'s two-step, which turns hydrogen peroxide into water and oxygen before the radical can spread. Import failure is again the revealing defect: peroxisome-biogenesis disorders such as Zellweger syndrome (mutations in the PEX import machinery) leave enzymes stranded in the cytosol, very-long-chain fatty acids accumulate in brain and liver, and development derails. In plants, specialized peroxisomes called glyoxysomes run the seed-oil-to-sugar conversion; photorespiration\'s peroxisome chemistry is the botany book\'s territory. The plant vacuole completes the atlas: a tonoplast-bounded tank that can occupy up to eighty percent of a cell\'s volume, holding water under turgor pressures of several atmospheres (the plant\'s skeleton is hydraulic), plus pigments, storage and defensive chemistry; its physiology belongs to the botany book — here it stands as the endomembrane system\'s largest single room.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Which Room Failed? Four Defects, Four Verdicts',
        steps: [
          'Identify what is asked: for each defect, name the organelle room and the mechanism, and say why the symptom follows.',
          'Case one — lysosomal enzymes are found at high level in the blood, and the patient\'s cells show swollen, undigested inclusions: the enzymes were built but never delivered. The address step is the Golgi\'s mannose-6-phosphate tag; its failure (N-acetylglucosamine phosphotransferase) is inclusion-cell disease. Room: Golgi.',
          'Case two — an infant presents with very-long-chain fatty acids (>C22) accumulated in brain and liver, and catalase found free in the cytosol instead of in an organelle: the peroxisome\'s enzymes were made but never imported. The PEX peroxisome-biogenesis machinery failed — Zellweger syndrome. Room: peroxisome.',
          'Case three — the most common cystic-fibrosis mutation deletes one phenylalanine from a chloride channel; the protein reaches the ER but is never seen at the cell surface: the ER\'s folding quality control retained and degraded a slightly misfolded (but functional if shipped) protein. Room: rough ER.',
          'Case four — a child shows accelerated aging, with nuclei visibly deformed in biopsied cells: the lamina scaffold is defective (LMNA mutation) — Hutchinson–Gilford progeria. Room: nuclear lamina.',
          'State the result: Golgi (tagging) → peroxisome (import) → rough ER (quality control) → lamina (scaffold). The reasoning chain is always the same: locate where the traffic broke, then name the room.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Five slips recur. "Lysosomes are suicide bags that rupture to kill the cell" — the acid hygiene means leaked enzymes are inactive at cytosolic pH; routine autophagy is housekeeping, not self-destruction. "Smooth ER exists only in the liver" — muscle\'s sarcoplasmic reticulum and steroid-making glands are the same room specialized. "Ribosomes are organelles" — they are not membrane-bounded and sit outside the endomembrane system, a distinction the inventory lesson flags and examiners test. "The Golgi only serves secretion" — lysosome tagging and membrane protein finishing are half its business. "Peroxisomes and mitochondria both burn fat, so they are interchangeable" — the peroxisome starts the very-long chains mitochondria cannot touch and captures no ATP from them (the energy leaves as heat); the two rooms divide the fat, they do not duplicate it.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Enzyme-replacement therapy for several lysosomal storage diseases works by exactly this lesson\'s routing: manufactured enzyme tagged with mannose-6-phosphate is infused, and cells drink it in by endocytosis — the address label does the targeting.',
        'Autophagy is the mechanistic bridge between fasting research, cancer metabolism and neurodegeneration — Ohsumi\'s pathway is now a drug-target class.',
        'The P450 smooth-ER system explains drug interactions: one drug inducing the ER\'s detox machinery speeds the clearance of another — dosing consequences visible in stained liver tissue.',
        'Vaccine and biologic manufacturing runs the secretory pathway in cultured cells — glycoprotein finishing happens in the ER–Golgi line, which is why production hosts are chosen for their Golgi chemistry.',
      ] },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Nuclear pore complex (NPC)', def: 'The eight-spoked protein machine at each envelope hole; free diffusion below ~40 kDa, escorted transport above it.' },
        { term: 'Ran-GTP', def: 'The small GTPase whose nuclear-GTP/cytosol-GDP gradient drives and recycles nuclear import escorts.' },
        { term: 'Nucleolus', def: 'The rRNA-gene workbench inside the nucleus where ribosomal subunits are assembled before export.' },
        { term: 'Nuclear lamina', def: 'The lamin-filament fence lining the inner nuclear membrane — shape, pore anchoring, chromatin organization; LMNA mutations cause progeria.' },
        { term: 'Signal peptide / signal hypothesis', def: 'The N-terminal address that routes a growing protein into the ER via the signal recognition particle (Blobel, 1999).' },
        { term: 'Cis and trans face', def: 'The Golgi\'s receiving side (toward the ER) and dispatching side; cargo is processed across the stack.' },
        { term: 'Mannose-6-phosphate (M6P) tag', def: 'The Golgi-added address that routes acid hydrolases to the lysosome; its failure is I-cell disease.' },
        { term: 'COPI / COPII vesicles', def: 'Retrograde (Golgi→ER recycling) and anterograde (ER→Golgi forward) transport vesicles respectively.' },
        { term: 'V-type ATPase', def: 'The lysosomal proton pump that spends ATP to hold pH 4.5–5.0 — the ~500-fold proton gradient of the acid interior.' },
        { term: 'Autophagy', def: 'Delivery and digestion of the cell\'s own worn components by the lysosome (Ohsumi\'s Nobel pathway, 2016).' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A 25-kilodalton protein with no localization signal, and a 90-kilodalton protein with a nuclear localization signal, are placed in the cytosol. Which enters the nucleus?',
          options: ['only the 25 kDa protein, by passive diffusion', 'only the 90 kDa protein, by importin escort', 'both, by different routes', 'neither'],
          answer: 2,
          explain: 'Below ~40 kDa the pore diffuses freely; above it, an escort (importin) with a nuclear localization signal drags cargo through. Each protein qualifies by one route — the pore is a two-speed gate.',
        },
        {
          q: 'The lysosome\'s interior at pH 4.7 versus cytosol at pH 7.2 holds protons at roughly what multiple?',
          options: ['about 2.5×', 'about 30×', 'about 300×', 'about 3,000×'],
          answer: 2,
          explain: '10^(7.2 − 4.7) = 10^2.5 ≈ 316 — the ~300-fold gradient (order 10²·⁵–10³) the V-type ATPase maintains; exam arithmetic uses the 10^(ΔpH) rule.',
        },
        {
          q: 'A patient\'s fibroblasts secrete lysosomal hydrolases into the medium instead of packaging them. The broken step is:',
          options: ['the ER signal peptide', 'Golgi mannose-6-phosphate tagging', 'the V-type ATPase', 'Ran-GTP recycling'],
          answer: 1,
          explain: 'Undelivered (untagged) enzymes default to the secretion route — inclusion-cell disease. The enzymes themselves work; the address label was never applied.',
        },
        {
          q: 'Very-long-chain fatty acids (≥22 carbons) accumulate in a child\'s brain; catalase is found free in the cytosol. The defective room and process are:',
          options: ['mitochondrion — beta-oxidation', 'peroxisome — enzyme import (PEX machinery)', 'lysosome — autophagy', 'smooth ER — lipid synthesis'],
          answer: 1,
          explain: 'Peroxisomes own the ≥C22 chains\' breakdown; Zellweger-spectrum disorders strand the enzymes in the cytosol — catalase outside its room is the giveaway.',
        },
        {
          q: 'COPII vesicles differ from COPI vesicles in that COPII:',
          options: ['run backward from Golgi to ER', 'carry cargo forward from ER to Golgi', 'serve the lysosome only', 'are powered by Ran'],
          answer: 1,
          explain: 'COPII = anterograde (ER→Golgi, the secretory line\'s outbound truck); COPI = retrograde recycling. Both are coat proteins, not motors of nuclear traffic (that is Ran/importin).',
        },
        {
          q: 'The rough ER earns "rough" from ribosomes, but its share of the cell\'s total membrane is roughly:',
          options: ['about 5%', 'about 25%', 'more than half', 'about 90%'],
          answer: 2,
          explain: 'The ER — rough plus smooth — comprises more than half of all membrane in a typical eukaryotic cell: the factory wing is also the building\'s biggest structure.',
        },
        {
          q: 'Which pairing of room → revealing defect is WRONG?',
          options: ['nuclear lamina → progeria', 'Golgi tagging → I-cell disease', 'rough ER quality control → the common cystic-fibrosis mutation', 'lysosome pH → Zellweger syndrome'],
          answer: 3,
          explain: 'Zellweger is the peroxisome\'s import failure, not a lysosomal pH defect; the lysosome\'s classic failures are storage diseases from missing hydrolases.',
        },
        {
          q: 'A beta-cell making insulin for secretion follows which route?',
          options: ['free ribosome → Golgi → surface', 'rough ER → vesicle → Golgi cis → Golgi trans → secretory granule → exocytosis', 'smooth ER → lysosome → surface', 'nucleus → pore → membrane directly'],
          answer: 1,
          explain: 'Secreted proteins are made on the rough ER (signal peptide), ride COPII vesicles to the cis face, cross the stack, and leave via secretory granules — Palade\'s pulse-chase traced exactly this line.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'path',
        text: 'Grounding: Alberts Molecular Biology of the Cell 6e Ch. 12 (Intracellular Membrane Traffic) and Ch. 9 (visual recap of the nucleus); OpenStax Biology 2e Ch. 4.3-4.4; Bergtrom CMB iText Ch. 3-5; NCERT Class 11 Biology Ch. 8. Original papers behind the story: Blobel\'s signal hypothesis (Nobel lecture 1999), de Duve\'s lysosome papers (Nobel lecture 1974), Ohsumi\'s autophagy (Nobel lecture 2016), Palade\'s pulse-chase secretion studies. The next lessons take the cytoskeleton that moves all these vesicles, then the signaling cascades that command the rooms.',
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
    id: 'bio-cell-signaling-transduction',
    title: 'Cell Signaling: Reception, Transduction, Response',
    domain: 'Life Sciences',
    field: 'Cell & Molecular Biology',
    branch: 'Cell Signaling',
    tier: 'advanced',
    concepts: [
      'Endocrine, paracrine, autocrine, and juxtacrine signaling',
      'Cell-surface receptors versus nuclear receptors',
      'The GPCR cascade: G protein, adenylyl cyclase, cAMP, protein kinase A',
      'The phosphoinositide branch: IP3, DAG, and calcium',
      'Signal amplification and cascade arithmetic',
      'Receptor tyrosine kinases and the MAP kinase cascade',
      'Termination: phosphatases, phosphodiesterase, internalization',
      'Cholera toxin as a switch locked on',
    ],
    words: 2405,
    readMins: 12,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'A sprinter hears the starting gun and her liver, within seconds, begins pouring glucose into her blood — triggered by a hormone present at a concentration of roughly one part in a billion. Cells do not have ears; they have receptors, and how a vanishingly small signal becomes a cell-wide response is signal transduction: reception at a receptor, transduction through enzyme cascades and second messengers, and response in metabolism, secretion, growth, or death. This lesson walks that path three times — through G proteins, calcium, and kinase cascades — then asks how signals are switched off.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'A large fraction of all medicines act on receptors and their cascades: asthma inhalers and beta-blockers at the same receptor from opposite sides, methylxanthines at second-messenger disposal, whole oncology drug classes aimed at kinase relays. Cholera kills by locking one G protein on; whooping cough locks another off. If pharmacology is applied anything, it is applied signaling.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Signals are classified by how far they travel. Endocrine signaling is long-distance: hormones travel the bloodstream to every cell, but only those bearing the right receptor listen — the endocrine-system and kidneys-and-hormones lessons own those whole-organism axes, and this lesson stays with the molecular circuitry the hormones switch on. Paracrine signaling is local: secreted factors acting on their neighbors, as growth factors and prostaglandins do. Autocrine signaling is self-addressed: a cell both secretes and bears receptors for the same signal, the way immune cells stimulate their own proliferation — the immune-system lesson owns that cast. Juxtacrine signaling requires contact — membrane-bound signals touching receptors on the neighboring cell, or small molecules passing through gap junctions.',
      },
      {
        kind: 'para',
        text: 'Receptors sort by signal chemistry. Water-soluble signals — peptides, most hormones of the moment like epinephrine — cannot cross the membrane, so they bind cell-surface receptors, of which three classes dominate. G-protein-coupled receptors wind seven helices through the membrane and are the largest receptor family in the human genome, with several hundred members, most devoted to smell. Receptor tyrosine kinases bind growth factors and carry their own enzymatic domain, which we will follow through the Ras pathway. Ligand-gated ion channels open pores directly and mediate the fastest signaling of all — the synapse lesson owns their neuroscience in full. Hydrophobic signals — steroids, thyroid hormone — diffuse straight through to intracellular receptors: nuclear receptors that, once bound, sit on DNA and regulate transcription. That is why steroid effects arrive in hours rather than seconds and why thyroid medication takes weeks to titrate.',
      },
      {
        kind: 'para',
        text: 'Follow one epinephrine molecule to its receptor on a liver cell, and the G-protein-coupled cascade unfolds in order. Binding changes the receptor\'s shape inside the cell, where a heterotrimeric G protein waits. The alpha subunit exchanges its GDP for GTP, comes loose from its beta-gamma partners, and switches on. The active alpha now stimulates adenylyl cyclase, the membrane enzyme that converts ATP into cyclic AMP, the second messenger — so named because the hormone itself never enters; cAMP carries its order inward. Cyclic AMP binds the regulatory subunits of protein kinase A, releasing the catalytic subunits to phosphorylate target proteins. In liver, the phosphorylation cascade ends at glycogen phosphorylase, which liberates glucose — and at glycogen synthase, which it switches off — one signal driving breakdown and storage in opposite directions. Protein kinase A also reaches the nucleus to phosphorylate transcription factors, so the seconds-scale metabolic response is followed by a slower change in gene reading.',
      },
      {
        kind: 'para',
        text: 'A parallel branch uses a different second messenger and a sharper one. Some G proteins (the Gq family) activate phospholipase C, a membrane enzyme that cleaves the phospholipid PIP2 into two products: IP3, a small water-soluble molecule that diffuses to the endoplasmic reticulum and throws open calcium channels there, and DAG, which stays in the membrane and helps activate protein kinase C. The calcium released is the most versatile second messenger of all: cytosolic concentration jumps from a resting hundred nanomolar to roughly a micromolar — a tenfold spike on a near-zero baseline — and calcium-sensing proteins translate the spike into action. The chief translator is calmodulin, a small protein that wraps four calcium ions and changes shape, then switches on calmodulin-dependent kinases and the muscle machinery. Muscle contraction, secretion, and many gene-expression programs sit downstream; the muscle lesson runs that machinery.',
      },
      {
        kind: 'formula',
        name: 'Signal amplification',
        latex: '1 \\; \\text{epinephrine} \\; \\rightarrow \\; \\sim 10^{8} \\; \\text{cAMP}',
        meaning: 'One hormone molecule, binding one receptor, can trigger on the order of a hundred million cyclic-AMP molecules. Each relay step is catalytic: one receptor activates many G proteins over its lifetime, each active G protein switches on an adenylyl cyclase that makes thousands of cAMP per second, and each protein kinase A molecule phosphorylates many targets. Multiplicative relays are why hormones work at nanomolar blood concentrations.',
      },
      {
        kind: 'para',
        text: 'The receptor tyrosine kinases run growth signals through a different arithmetic. A growth factor such as epidermal growth factor binds and dimerizes its receptor — two receptor molecules pairing up — which brings their intracellular kinase domains together; each phosphorylates the other\'s tyrosines, and those phosphotyrosines become docking sites for adaptor proteins. One adaptor relay hands the signal to Ras, a small monomeric G protein anchored at the membrane — the same GDP/GTP logic as the alpha subunit, but solo. Ras-GTP then ignites a kinase cascade in which each kinase phosphorylates the next: Raf activates MEK, MEK activates ERK, and ERK — the map kinase at the end of the relay — enters the nucleus and phosphorylates transcription factors that push the cell toward division. Mutations that disable Ras\'s GTPase leave the switch permanently on — among the most common single-driver events in human cancer. The insulin receptor is a tyrosine kinase too, branching into metabolic rather than mitotic paths; the endocrine lesson owns insulin\'s physiology.',
      },
      {
        kind: 'para',
        text: 'Every signal must end, or the cell stays stuck in its last mood. Termination is layered. The G-protein alpha subunit hydrolyzes its own GTP and re-pairs with beta-gamma — the same built-in off-switch Ras uses. Protein phosphatases strip the phosphates that kinases attached, undoing protein kinase A\'s work in seconds. Cyclic AMP is degraded by phosphodiesterases — the enzymes caffeine and theophylline slow, and the isoform sildenafil blocks in erectile tissue. Receptors themselves are tuned down: phosphorylation of the bound receptor recruits beta-arrestin, which blocks further G-protein coupling and hauls the receptor inside for recycling or destruction. Desensitization is why chronic stimulation yields diminishing returns and long treatments demand dose escalation.',
      },
      {
        kind: 'callout',
        title: 'When termination fails',
        text: 'Cholera toxin chemically modifies the Gs alpha subunit, disabling its GTPase so the switch can never turn off. Adenylyl cyclase runs unendingly, cyclic AMP floods the intestinal lining, and protein kinase A opens the chloride channels of the gut epithelium — water follows the salt into the lumen, producing the painless, voluminous, lethal diarrhea of cholera. Whooping-cough toxin does the mirror image to an inhibitory G protein, locking it off. Death comes from dehydration; the rescue is elegant in its simplicity — oral rehydration, water plus salt plus a little sugar to drive absorption through channels the toxin does not touch.',
        tone: 'warn',
      },
      {
        kind: 'para',
        text: 'With cascades this promiscuous, specificity cannot come from the parts alone — it comes from organization. Scaffold proteins bind consecutive members of a cascade into one complex, so signals pass quickly and locally rather than diffusing into the cell\'s kinase soup; the same kinase in a different scaffold yields a different outcome. Compartments add a second axis: cyclic AMP generated in one membrane microdomain activates only the protein kinase A anchored there — one messenger, several local meanings. Signaling, in other words, is not plumbing but wiring — the response depends on which components are co-anchored, co-expressed, and co-timed.',
      },
      {
        kind: 'para',
        text: 'Plants run a variant of the same architecture. Their dominant receptor class is the receptor-like kinase — a membrane-spanning protein with an extracellular leucine-rich repeat domain for recognizing patterns and invaders, and an intracellular kinase domain, a layout echoing the animal tyrosine kinases though built on serine-threonine chemistry. The gaseous hormone ethylene is perceived by receptors at the endoplasmic reticulum, of bacterial two-component ancestry, steering seedling crowding responses and fruit ripening. How auxin bends shoots toward light — the tropisms — is the plant-physiology lesson\'s territory; the point here is that receptor-kinase logic is not an animal invention but a eukaryote-wide solution.',
      },
      {
        kind: 'para',
        text: 'Finally, the response at the end of a cascade can be death — by design. Apoptosis, programmed cell death, is triggered through extrinsic death receptors on the surface or through intrinsic stress signals converging on mitochondria, and both routes funnel into the caspases: a family of proteases that dismantle the cell from within, quietly, without inflammation. Development sculpts fingers and prunes neurons by it; the immune system orders infected cells into it. The starkest demonstration that a transduction "response" can span everything from a metabolic twitch to the ordered demolition of the cell itself.',
      },
      {
        kind: 'example',
        title: 'Worked Example: One Epinephrine Molecule, Followed to Glucose',
        steps: [
          'Identify what is asked: how a hormone present at nanomolar concentration floods the blood with micromolar quantities of glucose within a minute.',
          'Reception: one epinephrine molecule binds one beta receptor on a liver cell and holds it in the active shape for a few seconds.',
          'Amplification: while it holds, the receptor activates on the order of a hundred G proteins in series; each active Gs alpha switches on an adenylyl cyclase, and each cyclase makes thousands of cyclic-AMP molecules per second — about a hundred million in all.',
          'Response: cAMP liberates protein kinase A, which activates phosphorylase kinase, then glycogen phosphorylase — two more catalytic amplifications — while switching glycogen synthase off; glucose pours from stored glycogen.',
          'Termination and check: phosphodiesterase erases the cAMP, phosphatases undo the phosphorylations, and beta-arrestin pulls the receptor inside. Response within seconds, shutdown within minutes — catalytic-relay arithmetic explains the timing.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three confusions recur. "The hormone enters the cell" — for water-soluble signals it never does; only the second messenger and the cascade carry the message inward. "Amplification means one step makes everything bigger" — it is the product of several modest catalytic multipliers, which is why blocking an intermediate enzyme, like a phosphodiesterase, collapses the whole response. And "calcium and cAMP have fixed meanings" — a second messenger means whatever its downstream effectors in that cell type make of it; context, not chemistry alone, writes the response.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Beta-blockers are adrenaline-receptor antagonists for the heart, and asthma inhalers are agonists of the same receptor family in the airway — one target, two directions, two diseases.',
          'Drugs that block phosphodiesterases raise second-messenger levels selectively: sildenafil in erectile tissue, theophylline in the airway.',
          'Cancer therapy aims at these relays — antibodies and small molecules blocking the epidermal-growth-factor receptor and its kinases; the cancer lesson owns the disease context.',
          'Oral rehydration therapy turns cholera\'s locked-switch pathology into outpatient arithmetic: glucose-coupled salt absorption continues through channels the toxin leaves intact.',
          'Ethylene control — from gas scrubbers in fruit warehouses to genetic ripening-delayed tomatoes — is applied plant signaling.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Second messenger', def: 'A small intracellular molecule, such as cyclic AMP or calcium, that relays a surface signal inward.' },
          { term: 'G protein', def: 'A GTP-switch protein; heterotrimeric ones relay GPCR signals, small ones like Ras relay growth signals.' },
          { term: 'G-protein-coupled receptor', def: 'A seven-helix membrane receptor that signals through G proteins; the largest receptor family.' },
          { term: 'Adenylyl cyclase', def: 'The membrane enzyme that converts ATP to cyclic AMP when activated by a G protein.' },
          { term: 'Protein kinase A', def: 'The cyclic-AMP-activated kinase that phosphorylates metabolic enzymes and transcription factors.' },
          { term: 'Phospholipase C', def: 'The enzyme that splits PIP2 into IP3 and DAG, launching the calcium branch.' },
          { term: 'Calmodulin', def: 'The calcium-binding protein that converts calcium spikes into kinase activation.' },
          { term: 'Receptor tyrosine kinase', def: 'A dimerizing growth-factor receptor that autophosphorylates to recruit signaling proteins.' },
          { term: 'MAP kinase cascade', def: 'The Raf-MEK-ERK relay that carries Ras signals into the nucleus.' },
          { term: 'Desensitization', def: 'Receptor phosphorylation plus beta-arrestin recruitment that dampens response to persistent signal.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Steroid hormones act slowly because they:',
            options: [
              'diffuse into cells and act through nuclear receptors that regulate transcription',
              'must be pumped across the membrane by ATP transporters',
              'bind receptors that open ion channels',
              'activate second messengers before entering',
            ],
            answer: 0,
            explain: 'Being lipid-soluble, they cross the membrane directly; their receptors are transcription regulators, so effects require new RNA and protein synthesis — hours, not seconds.',
          },
          {
            q: 'IP3 causes release of calcium from the endoplasmic reticulum by:',
            options: [
              'binding and opening IP3-gated calcium channels',
              'activating protein kinase C first',
              'converting into DAG',
              'phosphorylating calmodulin',
            ],
            answer: 0,
            explain: 'IP3 is the water-soluble half of the phospholipase C split; it diffuses to the ER and gates calcium release, while DAG stays in the membrane to activate protein kinase C.',
          },
          {
            q: 'Cholera toxin causes secretory diarrhea by:',
            options: [
              'locking the Gs alpha subunit in its active, GTP-bound state',
              'blocking beta-adrenergic receptors',
              'destroying cyclic GMP',
              'activating calcium pumps',
            ],
            answer: 0,
            explain: 'The toxin disables the alpha subunit\'s GTPase, so adenylyl cyclase runs forever, cAMP floods the epithelium, and chloride-driven water loss follows — the death of a single off-switch.',
          },
          {
            q: 'Signal amplification in the epinephrine pathway arises chiefly from:',
            options: [
              'each activated enzyme producing many product molecules per second',
              'one hormone molecule binding many receptors at once',
              'the hormone being copied into DNA',
              'receptors being permanently activated',
            ],
            answer: 0,
            explain: 'The relay is a chain of catalysts — one receptor turns on many G proteins, each cyclase makes thousands of cAMP — so the multipliers compound.',
          },
          {
            q: 'Desensitization of a G-protein-coupled receptor involves:',
            options: [
              'receptor phosphorylation followed by beta-arrestin binding and internalization',
              'permanent destruction of the G protein',
              'cleavage of the second messenger into DAG',
              'the hormone diffusing away with the receptor',
            ],
            answer: 0,
            explain: 'Persistent stimulation recruits a kinase and beta-arrestin, which uncouple the receptor and remove it from the surface — the cellular basis of tolerance to chronic stimulation.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the cell-and-biomolecules lesson for the membrane these receptors sit in, and this chapter\'s regulation lesson — signaling is how outside orders reach those gene switches. Follow-ons: the endocrine-system and kidneys-and-hormones lessons for whole-organism hormone axes, the synapse lesson for ligand-gated channels at their fastest, and the immune-system lesson for the cytokine signals between defense cells.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Signals classify by distance: endocrine, paracrine, autocrine, and contact-dependent juxtacrine.',
          'Water-soluble signals stay outside and use surface receptors; steroids and thyroid hormone diffuse in to nuclear receptors.',
          'The GPCR relay: receptor, G protein, adenylyl cyclase, cyclic AMP, protein kinase A — response in seconds.',
          'The phosphoinositide branch: phospholipase C splits PIP2 into IP3 (calcium release) and DAG (protein kinase C).',
          'Catalytic relays compound: one epinephrine molecule can yield about a hundred million cyclic-AMP molecules.',
          'Tyrosine-kinase receptors reach the nucleus through Ras and the MAP kinase cascade; termination and desensitization make every signal reversible.',
        ],
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
]
