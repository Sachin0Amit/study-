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
]
