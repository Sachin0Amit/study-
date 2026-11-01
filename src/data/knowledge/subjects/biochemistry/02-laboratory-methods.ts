/**
 * Knowledge Universe — Biochemistry — Chapter 02: Laboratory Methods
 * 1 lesson · ~1,803 words
 * field: Biochemistry
 * legacy sources: x47-bio-split-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Laboratory Methods]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 bioc-biochem-toolbox — The Biochemist’s Toolbox: Chromatography, Electrophoresis and Spectrophotometry
 */
import type { KnowledgeTopic } from '../../types'

export const biochemistryCh02: KnowledgeTopic[] = [
  {
    id: 'bioc-biochem-toolbox',
    title: 'The Biochemist’s Toolbox: Chromatography, Electrophoresis and Spectrophotometry',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Laboratory Methods',
    tier: 'core',
    concepts: [
      'Separation as the central problem of biochemistry',
      'Chromatography families: paper, column, ion-exchange, gel filtration, affinity and HPLC',
      'Electrophoresis: agarose gels for nucleic acids, SDS-PAGE for proteins',
      'Isoelectric focusing and Western blotting',
      'Centrifugation: differential and density-gradient separation',
      'Spectrophotometry and the Beer–Lambert law',
      'Reading a purification table: yield versus fold-purification',
    ],
    words: 1803,
    readMins: 9,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'A living cell is a soup of thousands of different molecules dissolved together, and almost every question a biochemist asks — which enzyme is missing, how much protein is present, is this sample pure — reduces to the same physical problem: getting one kind of molecule away from all the others. The methods in this lesson are the field’s answer to that problem. None of them are new; electrophoresis and chromatography were mature before the genetic code was cracked, and every modern “-omics” pipeline still ends by leaning on them.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'These techniques are the practical heart of every biology laboratory course and a favorite of practical-skills questions: reading a gel, choosing a chromatography method, or computing a concentration from absorbance is exactly the kind of testable, hands-on knowledge that separates memorizing biochemistry from doing it.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Chromatography separates molecules by how they distribute between two phases: a stationary phase held in place and a mobile phase that moves through it. In paper chromatography — the version often met first — the stationary phase is water bound to paper and the mobile phase is a rising solvent; molecules split their time between the two, and the more time a molecule spends in the moving solvent, the further it climbs. Every fancier variant keeps this logic and changes the basis of the split. Column chromatography packs the stationary phase in a tube and lets gravity or a pump carry the sample through.',
      },
      {
        kind: 'para',
        text: "Before any of it can run, the cell must be opened. Small cells yield to osmotic shock or to enzymes — lysozyme chews bacterial walls, cellulase softens plant tissue — while tougher samples take mechanical beating with glass beads, sonication at 20-50 kilohertz (noisy and heating), pressure bombs that release up to 25,000 psi so dissolved gas bursts the cells from inside, or cryopulverization: freezing the tissue in liquid nitrogen and grinding the frozen powder, the standard route through cartilage, seeds and connective tissue. The lysate is then spun in stages — low speed drops the debris, higher speeds bring down nuclei, then mitochondria, leaving the soluble supernatant the columns will fractionate.",
      },
      {
        kind: 'para',
        text: 'Ion-exchange columns carry charged groups, so they hold onto molecules of opposite charge and release them when salt competes for the binding sites. Gel-filtration (size-exclusion) columns are beads riddled with tunnels: small molecules wander into the tunnels and take a longer path, so they come out last, while large molecules flow around the beads and come out first — the column sorts by size with the biggest first. Affinity chromatography is the most selective of all: the stationary phase carries a molecule that your target binds specifically — an antibody, a substrate analog, a metal chelate — so everything else washes straight through and the target is released afterwards by changing conditions. High-performance liquid chromatography (HPLC) miniaturizes and pressurizes the column so separations run in minutes with fine resolution; in practice “FPLC” and “HPLC” names a machine as much as a principle.',
      },
      {
        kind: 'para',
        text: "One affinity scheme dominates modern protein work: the histidine tag. Genetic engineering appends six or more histidines to a recombinant protein, and because those imidazole side chains bind nickel or cobalt ions, the tagged protein alone sticks to a nickel column; imidazole itself, mimicking the tag's chemistry, is then flooded in to displace it. HPLC columns come in two polarities worth naming — normal phase, with a polar support where non-polar molecules elute first, and reverse phase, the non-polar, more reproducible workhorse where polar compounds cling longest — and the apotheosis of the separation toolkit is 2D gel electrophoresis: first isoelectric focusing by pI along a strip, then that strip laid across an SDS-PAGE slab for size, so every protein appears as a spot at its unique (pI, mass) address, ready to be excised and identified by mass spectrometry.",
      },
      {
        kind: 'para',
        text: 'Electrophoresis separates molecules by charge and size through a gel matrix under an electric field. DNA fragments, which carry a uniform charge-per-base ratio, are sorted by size on agarose gels — small fragments thread through the mesh quickly, large ones lag — and the sizes are read against a ladder of known standards. Proteins are trickier because each has its own charge, so SDS-PAGE first coats every protein with the anionic detergent SDS, roughly equalizing charge-per-mass and leaving size as the dominant factor: proteins migrate toward the anode with the smallest travelling fastest. Isoelectric focusing goes the other way: proteins migrate along a pH gradient until they reach their isoelectric point, the pH at which their net charge is zero, and there they stop.',
      },
      {
        kind: 'para',
        text: "Real gels have two refinements the names hide. Samples are boiled with a reducing agent — mercaptoethanol or dithiothreitol — to break disulfide bonds so every protein runs as a fully unbraided rod (its absence leaves ghost dimers migrating oddly); and the polyacrylamide slab carries a compressible stacking gel above the fine resolving gel, squeezing the loaded sample into a razor-thin band before size separation begins. Resolution reaches absurd levels: isoelectric focusing can separate proteins whose pIs differ by as little as 0.01 pH unit. And the blots that identify a band carry their own naming joke — Southern blot for DNA (after Edwin Southern), northern blot for RNA, western blot for the antibody-probed protein test.",
      },
      {
        kind: 'para',
        text: 'A Western blot adds identification to separation. After SDS-PAGE, proteins are transferred out of the gel onto a membrane, which is then incubated with an antibody that recognizes one specific protein; a detection enzyme or fluorophore on the antibody lights up exactly the band containing that protein. This combination — separate, transfer, probe — is what makes a Western blot an identity test and not just a size measurement.',
      },
      {
        kind: 'para',
        text: 'Centrifugation separates by mass and density before any of the above. Spinning at tens of thousands of revolutions per minute multiplies effective gravity thousands-fold, pelleting nuclei and membranes first, then mitochondria, leaving soluble enzymes in the supernatant — the classic differential centrifugation of cell fractionation. Density-gradient centrifugation floats each component to the level where its own buoyant density matches the medium’s, which is how organelles and even labeled DNA molecules are resolved into clean bands.',
      },
      {
        kind: 'para',
        text: 'Finally, once you have something pure, you need to measure how much of it there is. Spectrophotometry passes light of a chosen wavelength through the sample and measures the fraction absorbed. Nucleic acids absorb strongly at 260 nanometres; aromatic amino acids put proteins near 280; many assays couple a reaction to a colored product so concentration becomes absorbance. The relation is the Beer–Lambert law.',
      },
      {
        kind: 'formula',
        name: 'Beer–Lambert law',
        latex: 'A = \\varepsilon \\, c \\, l',
        meaning:
          'Absorbance A equals the molar extinction coefficient ε (a property of the substance at that wavelength), times concentration c, times path length l — almost always 1 cm for a standard cuvette. Because the relation is linear, concentrations are read straight off a calibration curve.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Reading a Purification Table',
        steps: [
          'Set up: you have purified an enzyme through four steps and recorded total protein and total activity at each step.',
          'Compute specific activity at each step: activity divided by protein — step 1: 10,000 U in 1,000 mg = 10 U/mg; step 4: 4,000 U in 8 mg = 500 U/mg.',
          'Fold-purification = specific activity relative to the start: 500 ÷ 10 = 50-fold purified.',
          'Yield = activity relative to the start: 4,000 ÷ 10,000 = 40%.',
          'Interpret: the protein is 50× purer but 60% of it was lost along the way — every purification trades yield for purity, and the table is how biochemists argue about that trade explicitly.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Clinical diagnostics: serum protein electrophoresis separates albumin from the globulins and reveals the single towering “M spike” of a myeloma patient’s monoclonal antibody.',
          'Forensics and research: agarose electrophoresis is the readout of every PCR experiment — the molecular equivalent of developing a photograph.',
          'Biotechnology production: downstream processing after a fermentation run is essentially the purification table made industrial, with chromatography columns the size of flagpoles.',
          'Quality control: the A260/A280 ratio is the standard purity check for a DNA prep — protein contamination pushes the ratio down.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three slips recur. First, gel-filtration columns sort biggest-first while SDS-PAGE runs smallest-first — the two “size” methods disagree in direction, and mixing them up is a classic error. Second, absorbance is not concentration: without the extinction coefficient or a calibration curve, an absorbance reading is just a number. Third, SDS-PAGE separates by the size of the denatured chain, so a disulfide-linked dimer or a cleaved protein can surprise you.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'stationary and mobile phase', def: 'The fixed medium and the moving solvent whose interaction separates molecules in all chromatography.' },
          { term: 'gel filtration (size-exclusion)', def: 'Column of porous beads sorting molecules largest-first by how much of the bead interior they cannot enter.' },
          { term: 'SDS-PAGE', def: 'Electrophoresis of SDS-coated, denatured proteins through polyacrylamide, separating by molecular mass with the smallest fastest.' },
          { term: 'isoelectric point (pI)', def: 'The pH at which a protein’s net charge is zero; the stopping point in isoelectric focusing.' },
          { term: 'Western blot', def: 'Transfer of electrophoresed proteins to a membrane followed by antibody probing for specific identification.' },
          { term: 'specific activity', def: 'Enzyme activity per milligram of total protein — the number that rises as a purification proceeds.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A protein mixture is loaded on a gel-filtration column. Which molecule elutes first?',
            options: ['The smallest protein', 'The largest protein', 'The most negatively charged protein', 'The protein nearest its isoelectric point'],
            answer: 1,
            explain: 'Large molecules cannot enter the bead pores, take the shorter path around them, and leave the column first; small molecules explore the pores and elute later.',
          },
          {
            q: 'Why does SDS give proteins a uniform charge-to-mass ratio before PAGE?',
            options: [
              'It adds phosphate groups to every residue',
              'It is an anionic detergent that binds at a roughly constant mass per amino acid',
              'It neutralizes all charges so proteins stop moving',
              'It cross-links proteins into a single species',
            ],
            answer: 1,
            explain: 'SDS coats the denatured chain with negative charge proportional to length, so migration reflects size rather than the protein’s native charge.',
          },
          {
            q: 'An assay shows absorbance 0.40 for a standard of 2 µM and 0.80 for the unknown. Under Beer–Lambert linearity, the unknown is:',
            options: ['2 µM', '4 µM', '8 µM', '0.5 µM'],
            answer: 1,
            explain: 'Absorbance is linear in concentration: doubling absorbance from 0.40 to 0.80 doubles concentration from 2 µM to 4 µM.',
          },
          {
            q: 'In a purification table, specific activity rises from 10 to 500 U/mg while total activity falls from 10,000 to 4,000 U. What happened?',
            options: [
              'The enzyme became more active',
              'Contaminating proteins were removed while some enzyme was lost',
              'The assay lost sensitivity',
              'The enzyme aggregated',
            ],
            answer: 1,
            explain: 'Higher specific activity means purer enzyme (less contaminating protein per unit of activity); the lower total activity is the enzyme sacrificed to achieve that purity.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the molecules-of-life lessons for protein and nucleic-acid structure. Pair this lesson with the enzymes lesson when you reach kinetics — the two together are the standard “techniques + theory” core of any biochemistry course.',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  // 2.2 Isotopes, Fractionation & Centrifugation (2026-11-01, subject
  // run "Biochemistry to target", §6.2 slot 2.2). Carved against: the
  // molecular-biology book's replication lesson (owns the
  // Meselson-Stahl CONCLUSION about semi-conservative replication —
  // this lesson owns the ultracentrifuge machinery that made it
  // possible), the organelle-atlas lesson (mentions the pulse-chase
  // logic for trafficking — the full design is taught here), and the
  // toolbox lesson (owns chromatography/electrophoresis; this is its
  // separation-science sibling).
  {
    id: 'bioc-isotopes-centrifugation',
    title: 'Tracers and Spin: Isotopes, Fractionation and the Ultracentrifuge',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Laboratory Methods',
    tier: 'intermediate',
    concepts: [
      'The tracer principle: atoms that report their own position',
      'Choosing an isotope: half-life, emission, labeling chemistry',
      'Autoradiography and the pulse-chase design',
      'Sedimentation: g-force, sedimentation coefficient, Svedberg units',
      'Differential centrifugation: the subcellular fractionation ladder',
      'Rate-zonal versus isopycnic density gradients',
    ],
    words: 2334,
    readMins: 12,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'The biochemist\'s two hardest questions are "which molecule is this?" and "where did that atom go?" The toolbox lesson answered the first with chromatography, electrophoresis and spectrophotometry. This lesson answers the second with two instruments of genius: the radioactive isotope, an atom that reports its own position, and the ultracentrifuge, a machine that sorts matter by weight and density. Between them they built modern biochemistry — they traced carbon from CO2 into sugar, they separated the cell into its organelles, and they settled how DNA replicates. Every metabolic pathway map you have ever seen is isotope data drawn as arrows.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'These methods are still the daily bread of research and diagnostics: positron-emission tomography is the tracer principle with a positron emitter, urea breath tests use 13C to find stomach bacteria, newborn metabolic screens ride mass spectrometry of stable-isotope labels, and every fractionated cell extract in every lab descends from the differential-centrifugation ladder taught here.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'How this lesson is scoped',
        text: 'The replication lesson in the molecular-biology book owns the Meselson–Stahl experiment\'s CONCLUSION (DNA replicates semi-conservatively); this lesson owns the machine and the gradient physics that made that experiment fly. The organelle-atlas lesson names the organelles; here is how they are physically separated. The toolbox lesson owns column chromatography; this is its heavier sibling for whole organelles.',
        tone: 'path',
      },
      { kind: 'heading', text: 'The Tracer Principle: Atoms That Report Their Own Position' },
      {
        kind: 'para',
        text: 'In 1913 George de Hevesy watered a bean plant with water containing a trace of radioactive phosphorus-32, then used a simple detector to follow where the phosphorus went inside the plant. The insight is the tracer principle: an isotope behaves chemically identically to its stable sibling — same valence, same reactions, same enzymes fooled — but it announces its presence by its radiation, so it can be followed through reactions, across membranes, along pathways, without disturbing any of them. Hevesy spent the rest of a Nobel-winning career (1943) applying it: tracer studies of metabolism, the first radiotracer imaging of a tumor, even catching a landlady serving leftovers by planting a radioactive tracer in the meat. Chemically invisible, physically loud — that is the whole trick.',
      },
      {
        kind: 'para',
        text: 'Choosing an isotope is choosing between three properties. Half-life: how long until half of it decays — carbon-14 at 5,730 years suits long experiments and archaeology, phosphorus-32 at 14.3 days suits a two-week bacterial experiment, and a tracer for a living patient needs hours, which is why medical imaging uses fluorine-18 (110 minutes). Emission and energy: beta emitters like tritium (3H) are weak and need film or scintillation counting; phosphorus-32 betas are so energetic they are detected through the tube wall — and handled behind acrylic shields, since glass stops nothing. Labeling chemistry: biologically, 3H and 14C tag general carbon-hydrogen skeletons, 32P tags phosphates (so DNA, RNA and phosphoproteins light up automatically), 35S tags sulfur-bearing amino acids (methionine, cysteine) and 131I tags the thyroid, which concentrates iodine by design. Stable (non-radioactive) heavy isotopes — 15N, 13C, 18O — are detected by mass spectrometry instead, with no decay at all: 13C-labeled urea is swallowed for the breath test that reveals Helicobacter pylori, because the bacterium\'s urease releases labeled CO2 into the breath.',
      },
      { kind: 'heading', text: 'Autoradiography and the Pulse–Chase Design' },
      {
        kind: 'para',
        text: 'Radiation writes on film: press a radioactive sample against photographic emulsion and the decay events reduce silver grains exactly above their sources — autoradiography, a map of where the tracer sat. The classic design that turns this into a movie is the pulse–chase experiment. Give the cells the labeled precursor for a brief window — the pulse — so everything synthesized in that window is radioactive. Then flood the system with the unlabeled version of the same precursor — the chase — so anything made afterwards is invisible. Now the radioactive population is a cohort you can watch migrate over time: five minutes after the pulse the label sits on the rough endoplasmic reticulum; twenty minutes later it has moved to the Golgi stack; by ninety minutes it is in secretory vesicles and leaving the cell. That single experiment, run by George Palade\'s group with pancreatic acinar cells making digestive enzymes, mapped the secretory pathway — endoplasmic reticulum to Golgi to vesicle to secretion — and won Palade a share of the 1974 Nobel Prize. The design is so powerful because it requires no knowledge of the machinery in advance: the cell\'s own traffic paints its own route map.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Reading a Pulse–Chase Grain Count Table',
        steps: [
          'The setup: pancreatic slices pulsed with 3H-leucine for 4 minutes, then chased with unlabeled leucine. Silver grains over each compartment are counted at each time point.',
          'At 7 minutes: 85% of grains over the rough ER, 10% over the Golgi — protein synthesis happens on the rough ER, and the labeled cohort has not moved on yet.',
          'At 37 minutes: 7% rough ER, 62% Golgi, 28% secretory vesicles — the cohort has LEFT the ER (its grain count fell) and is passing through the Golgi.',
          'At 117 minutes: 62% of grains outside the cells, over the duct lumen — the cohort has been secreted.',
          'Conclusion drawn WITHOUT any antibody or microscope trick: the secretory route is rough ER → Golgi → vesicles → exocytosis, and the transit time is roughly the interval from the Golgi peak to the lumen peak — about an hour. The falling-then-rising pattern across compartments is the signature of directed transport, not random appearance.',
        ],
      },
      { kind: 'heading', text: 'Spin: G-Force, Sedimentation and the Svedberg' },
      {
        kind: 'para',
        text: 'A particle in a spinning rotor experiences an outward acceleration proportional to the radius and to the square of the angular velocity. Express the centrifuge\'s pull as relative centrifugal force — multiples of Earth gravity, the g-force — because two machines at the same rpm but different rotor radii deliver different forces. Modern ultracentrifuges reach 80,000 rpm and forces above 500,000 g; Svedberg, who invented the machine in the 1920s (Nobel 1926), could do what no microscope could: weigh and size protein molecules in solution. Whether a particle sediments — and how fast — is captured by its sedimentation coefficient s, its sedimentation velocity per unit centrifugal field: bigger and denser particles have larger s and pellet first. The unit is the Svedberg (S), nominally 10⁻¹³ seconds. Beware the classic trap: S values are NOT additive, because s depends on shape and frictional drag as well as mass — the bacterial ribosome is 70S although it splits into a 50S large subunit and a 30S small subunit, because the separated pieces are fatter relative to their friction than the assembled machine. Additivity fails exactly like adding the speeds of two cars to get the convoy speed.',
      },
      {
        kind: 'derivation',
        title: 'Where the g-force formula comes from',
        statement: 'Rotor manufacturers quote RCF = 1.118 × 10⁻⁵ × r × rpm². Deriving it from circular motion.',
        prerequisites: ['Uniform circular motion: inward acceleration a = ω²r', 'ω in radians per second; rpm must be converted'],
        steps: [
          { label: 'Angular velocity from rpm', formula: '\\omega = 2\\pi \\times \\frac{\\text{rpm}}{60} \\approx 0.1047\\,\\text{rpm}\\ \\text{rad/s}', explanation: 'One revolution is 2π radians; 60 seconds per minute converts the units.' },
          { label: 'Acceleration in multiples of g', formula: '\\text{RCF} = \\frac{\\omega^2 r}{g} = \\frac{(2\\pi \\cdot \\text{rpm}/60)^2 r}{9.807}', explanation: 'Relative centrifugal force is simply the centrifugal acceleration divided by standard gravity.' },
          { label: 'Collect the constants', formula: '\\frac{4\\pi^2}{60^2 \\times 9.807} = 1.118 \\times 10^{-5}', explanation: 'One multiplication by hand and the whole formula collapses to the constant printed on every rotor tube.' },
          { label: 'Resulting design rule', formula: '\\text{RCF} = 1.118 \\times 10^{-5}\\, r\\, (\\text{rpm})^2', explanation: 'r in centimeters. Doubling rpm QUADRUPLES the force — which is why ultracentrifuges creep up on speed instead of jumping, and why a tube rated to 20,000 g dies instantly at 40,000.' },
        ],
        result: 'RCF = 1.118 × 10⁻⁵ · r · rpm² — the single most-used formula in cell-fractionation protocols, and the reason protocols specify g, not rpm.',
      },
      { kind: 'heading', text: 'The Fractionation Ladder and the Two Gradient Strategies' },
      {
        kind: 'para',
        text: 'Break cells open gently — homogenize in cold isotonic sucrose so organelles stay intact — and you can sort the wreckage into pure working fractions by successive spins of increasing force: the differential-centrifugation ladder. A first spin at ~600 g for 10 minutes pellets nuclei (the biggest, heaviest particles). A second at ~10,000 g pellets the mitochondria, lysosomes and peroxisomes. A third at ~100,000 g for an hour — the ultracentrifuge\'s territory — pellets microsomes (ER fragments) and ribosomes, leaving the cytosol as the final supernatant. Each pellet can be washed, resuspended and assayed: this ladder is how the cell was first taken apart into its working parts, and every enzyme-location claim in the metabolic lessons (glycolysis cytosolic, Krebs cycle in the matrix) was originally established with it.',
      },
      {
        kind: 'para',
        text: 'When differential force alone is not clean enough, layer the sample on top of a pre-formed gradient of sucrose or cesium chloride and spin again — in one of two opposite philosophies. Rate-zonal separation spins long enough for particles to SORT by sedimentation coefficient (size and shape), stopping before any particle reaches the tube bottom; the particles band at positions set by s, and the fastest (biggest) travel deepest. Isopycnic separation spins until each particle floats to the gradient position where the medium\'s density equals the particle\'s OWN buoyant density, however long that takes; position reflects density, not size. The crown-jewel application: Meselson and Stahl spun DNA in cesium chloride to isopycnic equilibrium, where 15N-heavy and 14N-light DNA separate cleanly by density — the machine behind the replication lesson\'s famous experiment. Rate-zonal is the choice for ribosome subunits and viruses; isopycnic is the choice when density is the question. Between them, the ultracentrifuge turns a cell into a parts list.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'S values do not add — 70S = 50S + 30S is a real identity, and writing "80S" for the assembled bacterial ribosome is the classic error (the eukaryotic cytosolic ribosome is 80S: 60S + 40S). A protocol in "rpm" without the rotor radius is unusable — convert with the RCF formula or refuse the number. The pellet is not "the waste": in differential centrifugation the nucleus fraction IS the first pellet; always ask what was pelleted versus what stayed in the supernatant. And radioactivity is not visibility — a tracer must be chemically identical to the tracked molecule, or the whole tracer principle collapses; that is why 15N in Meselson–Stahl had to be actual nitrogen IN the DNA bases, not a tag glued on afterwards.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Tracer principle', def: 'A radioisotope or stable heavy isotope behaves chemically like its stable sibling but is detectable by radiation or mass, allowing it to be followed through metabolism without perturbing it (de Hevesy, 1913).' },
          { term: 'Pulse–chase', def: 'Brief labeling of a synthesized cohort (pulse) followed by excess unlabeled precursor (chase), so the cohort can be followed through time — the design that mapped the secretory pathway.' },
          { term: 'Sedimentation coefficient (s)', def: 'Velocity per unit centrifugal field, in Svedberg units (1 S = 10⁻¹³ s); rises with mass and density, falls with frictional drag — hence non-additive (70S = 50S + 30S).' },
          { term: 'Relative centrifugal force (RCF)', def: 'The rotor\'s acceleration in g-units: RCF = 1.118 × 10⁻⁵ · r · rpm². Protocols specify g because rpm alone means nothing without the rotor radius.' },
          { term: 'Differential centrifugation', def: 'Sequential spins at rising forces, pelleting particles in descending size order: nuclei (600 g) → mitochondria/lysosomes (10,000 g) → microsomes/ribosomes (100,000 g), cytosol remaining in the final supernatant.' },
          { term: 'Isopycnic gradient', def: 'A density gradient spun until each particle rests where medium density equals its own buoyant density — separation by density (CsCl and DNA), independent of size.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A rotor spins at 15,000 rpm with the tube center at r = 8 cm. The RCF is closest to:',
            options: ['1,000 g', '5,000 g', '20,000 g', '80,000 g'],
            answer: 2,
            explain: 'RCF = 1.118 × 10⁻⁵ × 8 × 15,000² = 1.118 × 10⁻⁵ × 8 × 2.25 × 10⁸ ≈ 20,100 g. Note the rpm-squared dependence: doubling rpm would quadruple it.',
          },
          {
            q: 'The bacterial ribosome sediments at 70S and its subunits at 50S and 30S. This non-additivity exists because s depends on:',
            options: ['radioactivity level', 'mass AND shape-dependent friction, which change on assembly', 'the rotor speed at measurement', 'the isotope used to label it'],
            answer: 1,
            explain: 'The sedimentation coefficient is velocity per unit field — it rises with mass and density but falls with frictional drag. The joined subunits have a different mass-to-friction ratio than their sum would predict, so S values do not add.',
          },
          {
            q: 'In a pulse–chase tracking a secreted enzyme, grains appear over the rough ER at 7 min, the Golgi at 37 min, and outside the cell at 117 min. The design that makes this readable is:',
            options: ['labeled precursor given continuously throughout', 'brief labeled pulse, then excess unlabeled precursor (chase)', 'grain counting in a no-label control only', 'increasing the isotope half-life'],
            answer: 1,
            explain: 'The pulse marks only the molecules synthesized in that window — a cohort — and the chase prevents new label, so later grains represent the SAME cohort that has moved on. Continuous labeling would blur every compartment together.',
          },
          {
            q: 'Meselson and Stahl separated 15N-heavy from 14N-light DNA after ultracentrifugation to equilibrium in CsCl. The strategy was:',
            options: ['rate-zonal separation by sedimentation coefficient', 'isopycnic separation by buoyant density', 'differential pelleting by g-force steps', 'electrophoresis in the rotor'],
            answer: 1,
            explain: 'At isopycnic equilibrium each DNA band sits where the CsCl density equals its own buoyant density — heavy DNA deeper, light DNA higher. Position reports density, not size.',
          },
          {
            q: 'In the standard fractionation ladder, the fraction pelleted at ~10,000 g after nuclei have been removed contains mainly:',
            options: ['ribosomes and microsomes', 'mitochondria, lysosomes and peroxisomes', 'soluble cytosolic enzymes', 'intact nuclei and cell debris'],
            answer: 1,
            explain: 'The ladder runs by size and density: nuclei first (~600 g), then the mid-sized membrane-bound organelles (mitochondria, lysosomes, peroxisomes) at ~10,000 g; ribosomes and ER fragments need ~100,000 g, and the cytosol never pellets.',
          },
          {
            q: 'A urea breath test detects Helicobacter pylori using swallowed 13C-urea because:',
            options: ['13C is radioactive and fogs film in the stomach', "the bacterium's urease splits the urea, releasing 13C-CO2 that appears in the breath", 'the stomach lining absorbs whole urea into the blood', 'urea binds specifically to gastric receptors'],
            answer: 1,
            explain: 'The tracer must be chemically ordinary so the bacterium\'s own enzyme processes it; the labeled carbon leaves as labeled carbon dioxide, measured by mass spectrometry. No radioactivity is involved — 13C is stable.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the toolbox lesson (this is its separation-science sibling) and basic solution chemistry from the water-and-buffers lesson. Follow with the replication lesson in the molecular-biology book to see the isopycnic machine settle one of biology\'s biggest questions, the organelle-atlas lesson for what the fractions contain, and the metabolism chapter for the pathway maps that tracer studies wrote. Standard reading: Lehninger, chapter on "Working with Proteins and Nucleic Acids"; Alberts, Molecular Biology of the Cell, "Analyzing Cells, Molecules, and Systems".',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  // 2.3 Structural Methods (2026-11-01, subject run, §6.2 slot 2.3).
  // Carved against: the molecular-biology book's DNA lesson (owns the
  // Franklin/Watson-Crick helix story — the term Photo 51 appears here
  // once as a pointer, the method behind it is taught here), the
  // foundations lesson of cell biology (mentions cryo-EM in the
  // microscopy-history survey — instrument genealogy stays there,
  // molecular-structure methodology stays here), and the protein-
  // structure lesson of this book (owns the Ramachandran plot as a
  // structure concept — referenced, not re-taught).
  {
    id: 'bioc-structural-methods',
    title: 'Seeing Molecules: X-Ray Crystallography, NMR and Cryo-EM',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Laboratory Methods',
    tier: 'advanced',
    concepts: [
      'Diffraction: how order turns X-rays into structure',
      "Bragg's law and the meaning of resolution in angstroms",
      'The phase problem and its workarounds',
      'NMR: chemical shifts and NOE distance constraints',
      'Cryo-EM: vitrification and single-particle reconstruction',
      'Choosing a method: size, state and environment',
    ],
    words: 2358,
    readMins: 12,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'A purification table tells you a protein exists; only a structure tells you HOW it works. Nearly every mechanistic claim in this book — why an enzyme\'s active site holds a substrate the way it does, how ATP synthase rotates, how a channel opens — rests on one of three structure-determination methods. X-ray crystallography reads the averaged structure of billions of ordered molecules; nuclear magnetic resonance reads distances inside tumbling molecules in solution; cryo-electron microscopy freezes single particles mid-action and reconstructs them by the thousand. Together they hold the Protein Data Bank\'s quarter-million entries — and together they have won enough Nobel Prizes (1962, 2002, 2003, 2009, 2012, 2017, 2024) that chemistry\'s examiners treat the methods themselves as examinable content.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Structure-based drug design is these methods\' industrial product: HIV protease inhibitors were designed into a crystal structure\'s active site, and the vaccine spikes of the last pandemic were stabilized and solved by cryo-EM within weeks of the genome\'s publication. Reading a PDB entry, knowing what "2.3 Å resolution" promises and what it does not, is now basic scientific literacy in any biomedical field.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'How this lesson is scoped',
        text: 'The DNA lesson in the molecular-biology book owns the discovery story around Rosalind Franklin\'s diffraction photograph (Photo 51) — here we teach the diffraction physics that photograph embodied. The cell-biology foundations lesson owns the light- and electron-microscopy genealogy; this lesson begins where light microscopy gives up, at the molecular scale. The protein-structure lesson owns the Ramachandran plot as a concept; here it reappears only as a validation tool.',
        tone: 'path',
      },
      { kind: 'heading', text: 'X-Ray Crystallography: Order Into Image' },
      {
        kind: 'para',
        text: 'X-rays have wavelengths near one angstrom — the size of atoms — but no lens can focus them. Crystallography\'s move is to let mathematics act as the lens: shine an X-ray beam through a CRYSTAL, an array where trillions of identical molecules sit at identical orientations, and every molecule scatters identically, so the scattered waves interfere into sharp diffraction spots. The geometry of the spots encodes the molecule\'s dimensions; the intensities encode where the electrons are. The governing condition is Bragg\'s law: waves scattered by successive atomic planes reinforce only when the extra path traveled by the deeper wave is a whole number of wavelengths — nλ = 2d·sinθ — which ties each spot\'s angle to the spacing d of the planes that produced it. A crystal image of spots, fed through Fourier mathematics, becomes an electron-density map: a 3D contour surface showing where electrons concentrate, into which the atomic model is built.',
      },
      {
        kind: 'derivation',
        title: "Bragg's law from the path difference",
        statement: 'Waves reflecting off two parallel planes of atoms spacing d apart reinforce only at special angles. Deriving nλ = 2d sinθ.',
        prerequisites: ['Reflection: angle in equals angle out', 'Constructive interference requires path difference = whole wavelength'],
        steps: [
          { label: 'Draw the two rays', formula: '\\text{ray B travels } 2d\\sin\\theta \\text{ farther than ray A}', explanation: 'The deeper ray penetrates one plane-spacing and exits one spacing later — the classic two-triangle geometry adds d·sinθ twice.' },
          { label: 'Impose the interference condition', formula: '2d\\sin\\theta = n\\lambda', explanation: 'Only when the extra path is a whole number of wavelengths do crests meet crests — all other angles average to darkness in the crystal\'s cancelation.' },
          { label: 'Solve for plane spacing', formula: 'd = \\frac{n\\lambda}{2\\sin\\theta}', explanation: 'Each diffraction spot\'s angle therefore reports a real-space distance. Large spots (high θ) carry the fine detail; small angles carry the coarse shape.' },
          { label: 'Resolution in practice', formula: 'd_{\\min} \\approx \\frac{\\lambda}{2\\sin\\theta_{\\max}}', explanation: 'The finest detail recoverable is set by the largest angle captured — which is why crystallographers chase wide-angle data, and why 2 Å maps show atomic positions while 4 Å maps show only tubes and helices.' },
        ],
        result: "Bragg's law nλ = 2d·sinθ — one equation connecting the diffraction pattern's geometry to the molecule's internal distances, and the definition of '2 Å resolution' in every structure paper.",
      },
      {
        kind: 'para',
        text: 'Two obstacles shape the whole field. First, the phase problem: diffraction records intensities but loses the phase information needed to reconstruct the image — the patterns of many famous molecules were solved only after workarounds that borrow phase from a heavy-atom derivative (isomorphous replacement), from anomalous scattering at chosen wavelengths (MAD), or today most often from a known homologous structure (molecular replacement). Second, the crystal itself: crystallization is empirical alchemy — thousands of conditions screened, months lost — and a protein that resists order (flexible regions, membrane spans, glycosylation) may never crystallize at all. John Kendrew\'s myoglobin in 1958 was the first protein solved; the price was years and a whole sperm-whale supply. Success is recorded as an R-factor (how well the model predicts observed intensities) plus R-free (the same on withheld data — to catch a model that merely memorized), and every published structure is deposited in the Protein Data Bank for anyone to interrogate.',
      },
      { kind: 'heading', text: 'NMR: Structure From the Inside, in Solution' },
      {
        kind: 'para',
        text: 'Nuclear magnetic resonance listens instead of looking. Atomic nuclei with spin (¹H, ¹³C, ¹⁵N) behave like tiny magnets; in a strong field they resonate at frequencies shifted slightly by their local electronic environment — the chemical shift, a fingerprint that identifies which atom sits in which chemical neighborhood. Two experiments turn fingerprints into structure. Scalar-coupled correlation maps which atoms are bonded neighbors; and the nuclear Overhauser effect (NOE) reports spatial proximity: two protons closer than roughly five angstroms perturb each other\'s signals even if far apart in sequence. Collect thousands of NOE constraints, feed them to a distance-geometry calculation, and the molecule folds on the computer the way it folds in the tube. The output is honest in a way crystallography\'s is not: an ENSEMBLE of 20 structures that all satisfy the data — the bundle\'s tightness is itself a map of which parts are rigid and which are floppy. The price is size: a molecule tumbling too slowly relaxes its signals away, so solution NMR historically topped out near 30–50 kilodaltons (TROSY tricks and isotope labeling push further); proteins must also be concentrated, soluble and isotope-labeled (¹³C, ¹⁵N) — grown on labeled media — for the spectra to be readable.',
      },
      { kind: 'heading', text: 'Cryo-EM: Freezing Biology Mid-Action' },
      {
        kind: 'para',
        text: 'The third method abolished crystallography\'s bottleneck. In cryo-electron microscopy, a thin film of protein solution is plunged into liquid ethane cooled by liquid nitrogen — cooling so fast (tens of thousands of degrees per second) that water vitrifies: it becomes glass, with NO ice crystals to crush the particles. Thousands of single particles lie in the film in random orientations; the electron microscope images them, and software (descended from Fred Sigworth\'s maximum-likelihood ideas and built by the field around Jacques Dubochet\'s vitrification, Richard Henderson\'s membrane-protein proof and Joachim Frank\'s classification algorithms — the 2017 Nobel) sorts the images into orientation classes and back-projects them into a single 3D density map. The "resolution revolution" (after 2012–2013 direct-electron detectors that count single electrons) lifted cryo-EM from blobby 10 Å maps to routine 2–3 Å structures of machines crystallization never touched: membrane receptors, the spliceosome, ribosomes with antibiotics bound, the coronavirus spike. Its unique dividend is heterogeneity: classification sorts particles into STATES, so one preparation yields the open and closed forms of a channel — dynamics, not just shape. Electron crystallography\'s microcrystal electron diffraction (MicroED) extends the family to sub-micron crystals, and the 2024 chemistry Nobel honored the protein-structure-prediction network that now supplies starting models for all three methods.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Choosing the Right Method for Four Projects',
        steps: [
          'Project 1 — a 45 kDa enzyme, crystallizes beautifully, mechanism wanted at atomic detail: X-ray crystallography. Well-ordered, small, stable → the highest-resolution static structure and the easiest phases (molecular replacement from a homolog).',
          'Project 2 — the same enzyme\'s flexible active-site loop, suspected to move during catalysis: solution NMR. The ensemble will show the loop as a spread of conformations; 45 kDa is within reach, and isotope labeling is straightforward for a protein this size.',
          'Project 3 — a 1.2 MDa membrane channel, crystallization failed for a decade, both open and closed states wanted: cryo-EM. Vitrified single particles need no crystal, classification separates the states, and detergents or nanodiscs keep the membrane context.',
          'Project 4 — a 12 kDa peptide whose binding site must be located in solution, no crystal and no isotope budget: NMR with natural-abundance ¹H only (chemical shift perturbation upon ligand addition) — the classic fast answer.',
          'The decision logic in one line: crystal if order is available and you need atomic detail; NMR if the molecule is small and dynamics matter; cryo-EM if it is big, fragile, membrane-bound or heterogeneous.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Resolution is not accuracy: a 2 Å map can still harbor a misbuilt loop — check R-free, Ramachandran outliers and clashscore before trusting a model (the protein-structure lesson\'s validation tools are exactly for this). A crystal structure is one conformation trapped by lattice forces; the crystal\'s contacts can jam a loop that breathes in solution — cross-check against NMR ensembles or cryo-EM states when dynamics matter. "Phase problem" does not mean the data is broken — phases are recoverable, and molecular replacement starts from a homolog, so a bad search model quietly poisons the map. And cryo-EM\'s classification is not proof of physiology: separating two particle states in vitro does not guarantee either is the state the molecule occupies in the cell.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: "Bragg's law", def: 'nλ = 2d·sinθ — the condition for constructive X-ray interference between atomic planes; ties each diffraction spot\'s angle to a real-space spacing and defines the resolution limit.' },
          { term: 'Phase problem', def: 'Diffraction records intensities but loses wave phase, which the reconstruction needs; solved by heavy-atom derivatives, anomalous scattering (MAD/SAD) or molecular replacement from a homolog.' },
          { term: 'Electron-density map', def: 'The 3D contour of electron concentration obtained by Fourier synthesis of amplitudes-and-phases, into which the atomic model is built and refined.' },
          { term: 'Chemical shift', def: 'The resonance-frequency offset of a nucleus set by its electronic environment — the fingerprint that identifies each atom\'s chemical neighborhood in NMR.' },
          { term: 'NOE (nuclear Overhauser effect)', def: 'Signal transfer between protons within ~5 Å; each NOE is a distance constraint, and a bundle of them folds the molecule computationally.' },
          { term: 'Vitrification', def: 'Cooling so fast that water solidifies as amorphous glass, never ice — the cryo-EM step (Dubochet) that preserves particles in near-native, hydrated condition.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'X-ray crystallography cannot use a lens to image molecules directly because:',
            options: ['X-rays are too weak to scatter from atoms', 'no material can focus X-rays the way glass focuses light, so diffraction patterns must be reconstructed mathematically', 'crystals absorb all the X-rays', 'the phase problem makes lenses illegal'],
            answer: 1,
            explain: 'The refractive index of all materials for X-rays is nearly 1 — no lens exists. The crystal\'s repeating order converts scattering into a readable interference pattern, and the Fourier transform acts as the lens.',
          },
          {
            q: 'A structure is reported at 2.0 Å resolution. What does that resolution number promise?',
            options: ['the model is 2% inaccurate', 'features about 2 Å apart are distinguishable — typically individual atoms', 'the crystal was 2 mm across', 'the R-factor is 0.2'],
            answer: 1,
            explain: 'Resolution is a real-space distance from Bragg\'s law — the finest detail the data can support. At 2 Å individual atoms resolve; at 4–5 Å only helices and tubes do. R-factors are the separate accuracy metric.',
          },
          {
            q: 'The phase problem exists because:',
            options: ['crystals vibrate during data collection', 'the detector records intensities (amplitudes²) but loses the phase information needed for reconstruction', 'X-rays have no wavelength', 'heavy atoms destroy phases'],
            answer: 1,
            explain: 'The measured spot strength is the square of the wave amplitude; the phase — which determines where electron density sits in the unit cell — is unrecoverable from the pattern alone. Hence heavy-atom, anomalous-scattering or molecular-replacement workarounds.',
          },
          {
            q: 'Which property makes the NOE the workhorse of solution NMR structure determination?',
            options: ['it measures bond angles directly', 'its intensity falls with the sixth power of distance, reporting which protons are within ~5 Å', 'it requires a crystal', 'it only works on nucleic acids'],
            answer: 1,
            explain: 'Cross-relaxation between nearby spins scales steeply with distance, so an NOE is essentially a binary "these two protons are close" constraint — and a bundle of such constraints folds the molecule.',
          },
          {
            q: 'Cryo-EM\'s vitrification step succeeds because plunge-freezing:',
            options: ['dries the sample so particles stand still', 'cools water faster than ice crystals can nucleate, turning it to amorphous glass', 'replaces water with liquid ethane permanently', 'fixes the protein chemically like formaldehyde'],
            answer: 1,
            explain: 'Ethane at liquid-nitrogen temperature extracts heat at tens of thousands of degrees per second — water molecules never find the time to order into ice, and particles stay hydrated and native in glass. No chemical fixative is involved.',
          },
          {
            q: 'A 1.5 MDa membrane receptor fails all crystallization attempts, and both open and closed conformations are wanted. The best-matched method is:',
            options: ['solution NMR', 'X-ray crystallography with stronger screens', 'single-particle cryo-EM with state classification', 'EDTA decalcification'],
            answer: 2,
            explain: 'Cryo-EM needs no crystal, handles megadalton complexes in detergent or nanodiscs, and its classification step sorts heterogeneous particles into separate states — exactly the two conformations wanted. NMR cannot reach this size; crystallography has already failed.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the protein-structure lesson (folding levels — the structures these methods return) and the toolbox lesson (purification — every method here consumes a pure sample). Follow with the DNA lesson in the molecular-biology book to see how Photo 51\'s diffraction became the double helix, and the bioenergetics chapter to watch ATP synthase\'s rotation, solved first by crystallography, confirmed in movie form by cryo-EM. Standard reading: Lehninger, "Protein Structure and Function" methods box; Brandén & Tooze, Introduction to Protein Structure, chapter 1.',
        tone: 'path',
      },
    ],
  },
]
