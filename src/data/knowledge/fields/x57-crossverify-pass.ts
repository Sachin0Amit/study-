import type { KnowledgeTopic } from '../types'

/** CROSS-VERIFY PASS X57 (2026-10-26): Biochemistry (book 4, ku-biochemistry)
 *  cross-verified against Kevin Ahern, Indira Rajagopal & Taralyn Tan,
 *  "Biochemistry Free For All" 1.3 (Oregon State University, 2018, CC
 *  BY-NC-SA 4.0) — the world's most-adopted OPEN biochemistry textbook
 *  (Open Textbook Library, adopted across US university syllabi; official
 *  free hosting at biochem.oregonstate.edu, kevingahern.com and
 *  LibreTexts). The authors' own PDF host was Cloudflare-blocked and the
 *  LibreTexts full-book PDF export rendered only its 4-page table of
 *  contents, so the book was read IN FULL from LibreTexts' official
 *  chapter pages (59 pages, ~210,000 words walked via next-page footers):
 *  Ch1 (basic biology, basic chemistry, water & buffers) COMPLETE; Ch2
 *  (amino acids, proteins I & II, protein function, nucleic acids,
 *  carbohydrates, lipids & membranes) COMPLETE; Ch3 Membranes COMPLETE;
 *  Ch4 Catalysis (basic principles, control of enzymatic activity,
 *  mechanisms — chymotrypsin catalytic triad, protease families, blood
 *  clotting) COMPLETE; Ch5 Energy (basics of energy, electron transport
 *  & oxidative phosphorylation) COMPLETE; Ch6 Metabolism (glycolysis,
 *  citric acid cycle, fats & fatty acids, other lipids, amino acids &
 *  the urea cycle, nucleotides) COMPLETE; Ch8 Basic Techniques (cell
 *  lysis, fractionation & chromatography, electrophoresis, blotting &
 *  microarrays, PCR, CRISPR, protein cleavage) COMPLETE; Ch7
 *  (information processing) and Ch9-11 (references, point-by-point
 *  summaries) SKIMMED — information processing belongs to this library's
 *  Genetics & Heredity and Cell & Molecular Biology books.
 *
 *  CROSS-VERIFY RESULT — our five existing lessons (bioc-protein-
 *  structure-folding, bioc-enzymes-kinetics-regulation,
 *  bioc-lipid-amino-acid-metabolism, bioc-carbohydrates-lipids,
 *  bioc-biochem-toolbox) agree with the book on every shared claim:
 *  four-level protein hierarchy, 3.6-residues-per-turn alpha helices,
 *  hydrophobic-effect driving with hydrogen-bond patterning, Levinthal's
 *  paradox and the folding funnel, Anfinsen's ribonuclease renaturation,
 *  Hsp70/GroEL-GroES chaperones, cross-beta amyloid and prion templating,
 *  transition-state stabilisation with equilibrium untouched, Km/Vmax and
 *  competitive/noncompetitive/uncompetitive inhibitor effects (statins,
 *  methotrexate, aspirin, penicillin on DD-transpeptidase), zymogens and
 *  allosteric T/R switching, the beta-oxidation spiral with palmitate
 *  yields, the carnitine shuttle (CPT I / translocase / CPT II), odd-chain
 *  propionyl-CoA through the B12 methylmalonyl-CoA mutase to succinyl-CoA,
 *  ketogenesis for the fasting brain, transamination to glutamate with
 *  ping-pong mechanics, glucogenic/ketogenic skeletons, saturated-vs-cis-
 *  kinked fatty acids and trans fats from partial hydrogenation, starch/
 *  glycogen/cellulose linkage logic, and the gel-filtration-vs-SDS-PAGE
 *  size-sorting directions. TWO fixes were made to
 *  bioc-lipid-amino-acid-metabolism: (1) the urea cycle was said to cost
 *  "about two ATP" — the book states the cycle takes in 3 ATPs (two ADPs
 *  and one AMP, the AMP equivalent to 2 ATP, i.e. four high-energy
 *  phosphate bonds), roughly breaking even or netting up to +2 ATP once
 *  the two NADH produced are credited; (2) the displayed fatty-acid ATP
 *  formula was labelled "(C2n saturated fatty acid)" while its own worked
 *  example treats n as the CARBON COUNT (7x16-6 = 106 for palmitate) —
 *  relabelled (Cn saturated fatty acid).
 *
 *  TWO CHAPTER-OPENING TOPICS the book teaches as full sections that no
 *  live topic owned (grep-verified: "Henderson" and the pI-average rule
 *  appear nowhere across src/data/knowledge/fields/; amino-acid side-
 *  chain chemistry with pKa values appears only as passing asides inside
 *  the protein-structure lesson) are added here:
 *
 *  1. bioc-water-ph-buffers — the book's Section 1.3 as the structural
 *     opening of the whole subject: water's 104-degree polar geometry,
 *     the entropy arithmetic of the hydrophobic effect (ordered water
 *     shells, micelles, protein cores), hydrogen-bond strengths and
 *     distances, water ionisation, pH and pOH, weak acids as
 *     "Uninterruptible Proton Supplies", the Henderson-Hasselbalch
 *     equation, pKa values (carbonic 6.37, formic 3.75), buffer regions
 *     of pKa +/- 1, capacity limits with the book's own 0.01-mole HCl
 *     comparison, polyprotic titration (aspartic acid's three flattened
 *     regions and four charge states), and pI as the average of the two
 *     flanking pKas. Carved against the protein-structure lesson (which
 *     re-uses the hydrophobic effect for folding but owns no acid-base
 *     chemistry) and the biochemist's-toolbox lesson (which USES pI in
 *     isoelectric focusing but owns no pI definition).
 *  2. bioc-amino-acids-r-groups — the book's Section 2.2 as the monomer
 *     chemistry the protein-structure lesson assumes: alpha-carbon
 *     architecture and L-configuration, the 20 coded plus selenocysteine
 *     (UGA + SECIS, 25 human selenoproteins) and pyrrolysine (UAG,
 *     methanogens), R-group families with their pKa values (aspartate
 *     3.9, glutamate 4.1, histidine 6.0, arginine above 12), proline's
 *     rigidity and collagen hydroxylation with vitamin C, essential vs
 *     non-essential and the conditional cases, non-protein amino acids
 *     (ornithine, citrulline, liver-made carnitine from lysine and
 *     methionine), amino acids as hormone and neurotransmitter
 *     precursors, peptide-bond formation and the post-translational
 *     modification targets. Carved against bioc-protein-structure-folding
 *     (owns the FOLDED hierarchy), bioc-lipid-amino-acid-metabolism (owns
 *     catabolism of the carbon skeletons), and the toolbox (owns the
 *     separations that exploit this chemistry).
 *
 *  Both lessons carry quiz items with explanations and worked examples;
 *  word counts verified by scripts/count-topic-words-exact.ts. Enrichment
 *  paragraphs sourced from the book were added to all five existing
 *  lessons (Hsp40/K48-ubiquitin/Ramachandran/helix geometry to the
 *  protein lesson; the three Michaelis-Menten assumptions, bisubstrate
 *  classification and homotropic/heterotropic effectors to the enzymes
 *  lesson; urea-cycle regulation and peroxisomal oxidation to the
 *  metabolism lesson; essential fatty acids and glycation to the
 *  carbs-and-lipids lesson; lysis methods, His-tags, stacking gels,
 *  2D-PAGE and blot naming to the toolbox lesson).
 */
export const x57CrossverifyTopics: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bioc-water-ph-buffers',
    title: 'Water, pH and Buffers: The Chemistry Every Reaction Lives In',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Molecules of Life',
    tier: 'core',
    concepts: [
      'Water geometry: the 104-degree V and partial charges',
      'The hydrophobic effect is entropy arithmetic',
      'Hydrogen bonds: weak individually, decisive collectively',
      'Water ionises at 10 to the minus 7 molar',
      'pH is the negative log of proton concentration',
      'Henderson-Hasselbalch: pH = pKa + log ratio',
      'Buffer regions and buffer capacity limits',
      'Polyprotic molecules and the pI average rule',
    ],
    words: 2169,
    readMins: 11,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Every biochemistry course and every major text — Lehninger, Stryer, Voet, and the open Biochemistry Free For All this lesson follows — opens with water, and the reason is blunt: water is by far the most abundant component of every cell, and everything that happens in cells, even reactions buried deep inside enzyme active sites away from bulk solvent, is influenced by water's chemistry. A single water molecule is a wide V bent at about 104 degrees, with oxygen holding the shared electrons closer than the two hydrogens. The result is a dipole: the oxygen carries a partial negative charge, each hydrogen a partial positive charge, and no other small molecule exploits that asymmetry so thoroughly. Understand water and you have the physical vocabulary — polarity, hydrogen bonding, hydrophobia, ionisation — that every later lesson in this book assumes.",
      },
      {
        kind: 'para',
        text: "Polarity explains what dissolves. Ionic compounds and polar molecules (table salt, ethanol, sugars) interact well with water and are called hydrophilic; non-polar substances (oils, waxes) do not dissolve and are hydrophobic; molecules carrying both characters, like soaps with their ionising head and long non-polar tail, are amphiphilic. The deep reason is thermodynamic bookkeeping, not any repulsive force. Around a non-polar molecule water cannot hydrogen-bond normally, so it arranges itself into an ordered cage, and ordering means an entropy loss; since mixing non-polar material with water releases essentially no heat, the free-energy change is positive and dissolving simply does not happen. When non-polar molecules instead associate with each other, the caged waters are released to jostle freely — entropy rises — so oil phase-separates from water, soap self-assembles into micelles with tails hidden inside, phospholipids close into bilayers, and nascent proteins bury their non-polar side chains in a hydrophobic core. One entropy argument powers all four structures.",
      },
      {
        kind: 'callout',
        title: 'The hydrogen bond, by Pauling and by IUPAC',
        tone: 'insight',
        text: "Linus Pauling judged the hydrogen bond of greater physiological significance than any other single structural feature. The 2011 IUPAC evidence-based definition formalises it: an attractive interaction between an X-H fragment (X more electronegative than hydrogen) and an acceptor atom, with evidence of bond formation. Individual hydrogen bonds are weak — roughly 1-2 to 29 kilojoules per mole, acting only over 2.2 to 4.0 angstroms — but collectives of them hold water liquid at room temperature (methane, of similar mass but no hydrogen bonding, is a gas), pair DNA strands, and stabilise alpha-helices and beta-sheets. Heat breaks them: it is why boiling denatures proteins and melts DNA apart.",
      },
      {
        kind: 'para',
        text: "Water also ionises — slightly. At any instant about one in ten million water molecules has donated a proton to a neighbour, giving a proton concentration of 10 to the minus 7 molar in pure water. Chemists compress such ranges with logarithms: pH is the negative logarithm of the proton concentration, so pure water sits at pH 7, and pOH tracks the hydroxide concentration in parallel (pH plus pOH equals 14). An acid is a substance that can release protons in water, a base one that can absorb them, and both come in strong and weak grades. Strong acids like hydrochloric acid dissociate completely — 0.1 moles in a litre yields 0.1 molar protons, no molecules of intact acid left. Weak acids like acetic acid dissociate only slightly: drop one mole into pure water and a tiny fraction ionises. That reluctance is not a defect; it is the property life exploits.",
      },
      {
        kind: 'para',
        text: "Weak acids are buffers, and the book offers the best one-line picture of what that means: a weak acid behaves as an Uninterruptible Proton Supply. Within a range around its pKa, it releases protons when the solution runs short (as when hydroxide consumes them) and absorbs protons when the solution has a surplus (as after adding hydrochloric acid), holding pH nearly constant the way a battery backup holds power through an outage. The arithmetic is the Henderson-Hasselbalch equation: pH equals pKa plus the logarithm of the ratio of deprotonated to protonated forms. The pKa — the negative log of the acid dissociation constant — is a fixed property of each acid: carbonic acid's is 6.37, formic acid's 3.75, and the lower the pKa the stronger the weak acid. When the protonated and deprotonated forms are present in equal amounts the logarithm term vanishes and pH equals pKa exactly — the centre of a buffer's strength.",
      },
      { kind: 'formula', name: 'Henderson–Hasselbalch equation', latex: 'pH = pK_a + \\log_{10}\\!\\left([A^-]/[HA]\\right)', meaning: 'Relates solution pH to the pKa of a weak acid and the ratio of its deprotonated (A-) to protonated (HA) forms; when the two forms are equal, pH = pKa.' },
      {
        kind: 'para',
        text: "Titration makes the buffer visible. Plot pH against added strong base and the curve falls steeply at the extremes but flattens in a plateau centred on the pKa: there the weak acid mops up (or releases) protons to resist change. The plateau spans roughly one pH unit either side of the pKa — carbonic acid's buffering region runs from about 5.37 to 7.37, strongest at 6.37 — and a molecule with several ionizable groups simply shows one flattened region per pKa. Capacity, though, is finite and set by concentration. Add 0.01 moles of hydrochloric acid to a litre of pure water and the pH plunges from 7 to 2. The same dose into a litre of 1 molar acetate buffer at pH 4.76 moves it only to 4.74 — a shift of two hundredths. But into a 0.01 molar acetate buffer the same dose overwhelms the reserve: only 0.005 molar of acetate is available to absorb 0.01 molar of protons, and pH falls dramatically. A buffer protects only as long as its reservoir lasts.",
      },
      {
        kind: 'para',
        text: "Amino acids are polyprotic — they carry at least two ionizable groups (the alpha-carboxyl and the alpha-amine) plus, for several, an ionizable side chain — so their titration curves show multiple plateaus and their charge state depends on pH. Aspartic acid, with two carboxyls and one amine, displays four possible net charges (+1, 0, −1, −2) across its three pKa regions. Two practical rules cover the common cases: if pH sits more than one unit below a group's pKa the proton is on; more than one unit above, it is off. And the isoelectric point pI — the pH at which the molecule's net charge is exactly zero, the pH at which it stops moving in an electric field — is calculated as the average of the two pKa values flanking the neutral form. For aspartic acid that is the average of the two carboxyl pKas. The toolbox lesson's isoelectric focusing separates proteins by exactly this number, and enzyme assays work only because buffers pin the pH that side-chain charges (and therefore shape and function) depend on.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Problem: add 0.01 moles of hydrochloric acid to 1.0 litre of pure water at pH 7, and the same to 1.0 litre of 1 M acetate buffer at pH 4.76. What happens to each pH, and where is the isoelectric point of aspartic acid (pKas 2.1, 3.9 and 9.8)?',
        'Pure water: strong acid dissociates fully, so proton concentration becomes 0.01 M = 10 to the minus 2; pH = minus log of that = 2.0. A five-unit crash with no resistance.',
        'Buffer: Henderson-Hasselbalch with equal initial acetate/acid amounts at pH 4.76; the added 0.01 moles of protons convert 0.01 M of acetate to acid, shifting the ratio from 1.0 to (1.00 - 0.01)/(1.00 + 0.01) = 0.98; pH = 4.76 + log(0.98) = 4.76 - 0.01 = 4.75. Two hundredths of a unit — the UPS did its job.',
        'pI of aspartic acid: the neutral form (one proton off the alpha-carboxyl, both other protons on) sits between pKa1 = 2.1 and pKa2 = 3.9, the two carboxyl dissociations.',
        'State the results: water pH 2.0 versus buffer pH 4.75; pI = (2.1 + 3.9)/2 = 3.0 — aspartate is neutral (net charge zero) only near pH 3, and carries roughly minus one charge at physiological pH 7.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Five slips recur. Reading pH as a concentration: it is a negative logarithm, so pH 6 is ten times more acidic than pH 7, not one unit more. Believing protons and hydroxides are equal only at neutrality in any solution: the equality [H+] = [A-] from a dissociation equation holds only when the acid dissociates in pure water — real solutions carry other proton sources and sinks. Expecting a buffer to freeze pH: buffers resist change, they do not stop it, and they fail entirely outside their pKa ± 1 region or once added acid exceeds capacity. Confusing pKa with pI: pKa belongs to one ionizable group, pI to the whole molecule at zero net charge, computed as the average of the two pKas flanking the neutral species. And assuming the hydrophobic effect is an attractive force between oils: it is an entropy gain of released water, which is why the same logic drives micelles, bilayers and protein cores at once.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Polarity', def: 'Uneven charge distribution across a bond or molecule — water\'s bent 104-degree geometry makes oxygen partially negative and hydrogens partially positive.' },
        { term: 'Hydrophobic effect', def: 'The entropy-driven separation of non-polar substances from water: caged water around non-polar surfaces is released to freedom when they cluster.' },
        { term: 'Amphiphilic', def: 'Carrying both water-loving and water-fearing parts — soaps, phospholipids — the basis of micelles and bilayers.' },
        { term: 'pH', def: 'The negative logarithm of proton concentration; each unit is a tenfold change.' },
        { term: 'Weak acid', def: 'An acid that only partially dissociates in water; its proton-on-proton-off equilibrium is the mechanism of buffering.' },
        { term: 'pKa', def: 'The negative log of an acid\'s dissociation constant — lower means stronger; the pH at which an ionizable group is half dissociated.' },
        { term: 'Henderson–Hasselbalch equation', def: 'pH = pKa + log([A-]/[HA]); converts buffer composition into pH and back.' },
        { term: 'Buffer', def: 'A weak acid and its conjugate base acting as an Uninterruptible Proton Supply, strongest when the two forms are equal (pH = pKa).' },
        { term: 'Buffering region', def: 'The stretch of roughly pKa ± 1 where the titration curve flattens and pH changes least per added acid or base.' },
        { term: 'pI', def: 'The isoelectric point — the pH of zero net charge, the average of the two pKas flanking the neutral form; the resting place in isoelectric focusing.' },
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Blood chemistry: the carbonic acid / bicarbonate pair (pKa 6.37) buffers human blood near pH 7.4, and breathing rate — by venting carbon dioxide — is the fast lever on that ratio.',
        'Laboratory practice: every enzyme assay, electrophoresis run and cell-culture medium is built on a named buffer chosen so its pKa sits near the working pH.',
        'Medicine: acid-base disturbance (acidosis, alkalosis) is diagnosed by reading pH, bicarbonate and carbon dioxide against the Henderson-Hasselbalch equation.',
        'Food and everyday life: cheese, yoghurt and sourdough are controlled fermentations in which buffers hold pH while acids accumulate; aquarium keepers test hardness because dissolved bicarbonates buffer fish tanks against sudden pH swings.',
        'Ocean science: dissolved carbonate buffers seawater, and rising carbon dioxide shifts the equilibrium toward lower pH — the same equation at planetary scale.',
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Oil will not dissolve in water primarily because:',
          options: ['water cannot hydrogen-bond to itself around oil', 'dissolving would force water into ordered cages around each droplet, costing entropy', 'oil molecules are larger than water molecules', 'oil carries a permanent negative charge'],
          answer: 1,
          explain: 'Water around a non-polar surface must order itself into cages — an entropy loss with no heat payback, so the free-energy change is positive. Clustering the oil releases those waters; the entropy gain drives the separation.',
        },
        {
          q: 'A buffer resists pH change most strongly when:',
          options: ['the weak acid is completely undissociated', 'the pH equals the pKa and the two forms are present in equal amounts', 'the solution is near pH 7 by definition', 'the buffer is at its highest possible concentration of protons'],
          answer: 1,
          explain: 'At [A-] = [HA] the logarithm term is zero, pH = pKa, and the system holds maximal proton-absorbing and proton-releasing reserve — the flattest part of the titration curve.',
        },
        {
          q: 'Adding 0.01 moles of hydrochloric acid to 1 litre of pure water (from pH 7) versus to 1 litre of 1 M acetate buffer (from pH 4.76) gives:',
          options: ['pH 2 versus pH 4.75', 'pH 5 versus pH 4.76', 'pH 7 versus pH 2', 'pH 2 versus pH 2'],
          answer: 0,
          explain: 'Water has no proton reserve: 0.01 M protons means pH 2.0. The buffer\'s acetate absorbs the dose, moving pH only two hundredths of a unit — the book\'s standard demonstration of capacity.',
        },
        {
          q: 'Aspartic acid has pKas of 2.1, 3.9 and 9.8. Its isoelectric point is:',
          options: ['about 3.0', 'about 6.0', 'about 5.95', 'about 7.8'],
          answer: 0,
          explain: 'The neutral form lies between the two carboxyl dissociations, so pI = (2.1 + 3.9)/2 = 3.0 — not the average of all three pKas, and not the amine pKa at all.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'path',
        text: 'Grounding: Kevin Ahern, Indira Rajagopal & Taralyn Tan, Biochemistry Free For All 1.3 (OSU, CC BY-NC-SA 4.0), Section 1.3 "Introduction — Water and Buffers". The amino-acids lesson next in this chapter applies the pKa/pI arithmetic to real side chains; the protein-structure lesson re-uses the hydrophobic effect for folding; the toolbox lesson puts pI to work in isoelectric focusing; and the anatomy book shows the bicarbonate buffer running in living blood.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bioc-amino-acids-r-groups',
    title: 'Amino Acids: The Twenty Letters and Their Chemistry',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Molecules of Life',
    tier: 'core',
    concepts: [
      'Alpha-carbon architecture and L-configuration',
      'Twenty coded amino acids plus two recoded ones',
      'R-group families and their pKa values',
      'Proline and glycine: the shape exceptions',
      'Essential versus non-essential',
      'Non-protein amino acids: ornithine, citrulline, carnitine',
      'Amino acids as precursors of hormones and transmitters',
      'Peptide bonds and post-translational targets',
    ],
    words: 2025,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Francis Crick called it one of the striking generalizations of biochemistry: the twenty amino acids and the four bases are, with minor reservations, the same throughout nature. Every protein on Earth is written in that one alphabet, so the alphabet itself deserves a lesson before the protein-structure lesson can make sense of the words. All amino acids share one architecture: a central alpha-carbon carrying four attachments — a hydrogen, an alpha-carboxyl group, an alpha-amine, and the one variable part, the R-group or side chain. Because three of the four positions are common, everything an amino acid IS lives in its R-group; and because four different groups surround the alpha-carbon, all of them except glycine (whose R-group is just that hydrogen) are chiral, existing as L- and D-mirror forms. With tiny exceptions, every amino acid found in proteins is the L-form — one of biology's deepest frozen accidents.",
      },
      {
        kind: 'para',
        text: "The genetic code specifies twenty of them, but two more sneak into proteins by recoding stop signals. Selenocysteine, the twenty-first, carries selenium in place of sulfur's oxygen neighbour and is inserted when a selenocysteine insertion sequence (SECIS) in the messenger RNA instructs the machinery to read a UGA stop codon as this amino acid instead — twenty-five human proteins contain it, including the antioxidant enzymes glutathione peroxidase and thioredoxin reductase. Pyrrolysine, the twenty-second, is rarer still: inserted at UAG codons in methane-producing archaea and at least one bacterium, built biologically from two lysines. Both prove the code is a convention that evolution can renegotiate, not a law.",
      },
      {
        kind: 'para',
        text: "The non-polar family — alanine, valine, leucine, isoleucine, methionine, proline, phenylalanine and glycine — supplies the hydrophobic cores that drive folding. Alanine, made straight from pyruvate, is among the most abundant amino acids in proteins, second only to leucine. Methionine is the initiator: every new polypeptide starts with it (formylated in prokaryotes), and it is encoded solely by AUG. Proline is the structural rebel — its side chain loops back to bond its own alpha-amine, making a rigid ring and a secondary amine. That rigidity disrupts alpha-helices and beta-strands, which is why proline marks turns and hinges, and why its post-translational hydroxylation in collagen (a reaction requiring vitamin C) matters so much: without it, triple helices destabilise at body temperature and the connective-tissue weakness of scurvy follows. The same proline hydroxylation powers a sensing trick — hypoxia-inducible factor is hydroxylated and destroyed when oxygen is plentiful, so proline chemistry literally measures oxygen levels.",
      },
      {
        kind: 'para',
        text: "The ionizable side chains carry fixed pKa values and therefore fixed behaviour near physiological pH. The carboxyl family — aspartic acid (pKa 3.9) and glutamic acid (pKa 4.1) — is negatively charged at cellular pH, ready-made for salt bridges and metal coordination. The amine family is positively charged: lysine (+1 at physiological pH, the tagging site for ubiquitin, acetyl and methyl marks), and arginine, whose guanidinium group (pKa above 12) never lets go of its proton at cellular pH. Between them sits histidine, the only side chain with a pKa near neutrality (about 6.0): a fraction of a pH unit flips its imidazole ring between charged and neutral, which is exactly why histidine staffs enzyme active sites — it can donate and accept protons in the same catalytic cycle, and it coordinates metals like the zinc of the toolbox's His-tag purifications. The polar uncharged set — serine, threonine, tyrosine (the three hydroxyls), cysteine, asparagine, glutamine — supplies the working surfaces: hydroxyls that kinases phosphorylate, the serine of the serine-protease catalytic triad, cysteine's sulfhydryl oxidising into the disulfide bridges that lock folds together (free cysteine also builds the antioxidant tripeptide glutathione), and glutamine, the most abundant amino acid in blood and one of the few that crosses the blood-brain barrier.",
      },
      {
        kind: 'para',
        text: "The aromatic trio does double duty as structure and signalling. Phenylalanine is essential and metabolic destiny for tyrosine; its accumulation in the genetic disease phenylketonuria damages the developing brain, which is why newborns are screened and diet-controlled, and it sweetens diet drinks as part of aspartame. Tyrosine is phosphorylated by signalling kinases, and enzymatically converted through L-dopa into dopamine — the deficit behind Parkinson's disease — then onward to norepinephrine and epinephrine; it also seeds melanin and the thyroid hormones. Tryptophan carries the bulky indole ring and is the precursor of serotonin and of niacin (the vitamin whose deficiency is pellagra); its folk reputation as a sleep aid survived without clear research support, the book notes dryly. Nutritionists sort the twenty into essential (must be eaten; humans cannot synthesise nine of the twenty, and the exact list shifts between adults and children) and non-essential; several are conditionally essential — arginine for premature infants, cysteine for some infants and the elderly, glutamine for athletes and gastrointestinal patients — a reminder that the label describes the organism's state, not the molecule.",
      },
      {
        kind: 'para',
        text: "Not every amino acid in a cell is destined for proteins. Ornithine and citrulline are free intermediates of the urea cycle — ornithine is the metabolic precursor of arginine, citrulline a by-product of the arginine breakdown that also generates the signalling gas nitric oxide. Carnitine, made in the liver from lysine and methionine, is the ferry that carries activated fatty acids across the inner mitochondrial membrane for beta-oxidation — the same shuttle the fat-metabolism lesson traces — and only its L-form is active. These non-protein amino acids are biochemistry's spare parts: same chemistry, different jobs.",
      },
      {
        kind: 'para',
        text: "Building polypeptides stitches the alphabet into text: the carboxyl group of one amino acid joins the amine of the next with water expelled, forming the planar peptide bond; chains grow from the free-amino N-terminus toward the free-carboxyl C-terminus, and synthesis follows that same direction. Once bonded, the alpha-carboxyl and alpha-amine no longer ionize, so a protein's charge comes only from its two termini, its ionizable R-groups, and anything added afterwards. That afterwards is big: post-translational modifications bolt phosphates onto the hydroxyls of serine, threonine and tyrosine, attach sugars N-linked to asparagine or O-linked to serine and threonine, add fatty-acid and isoprenoid anchors, and decorate lysines with acetyl, methyl or ubiquitin marks — chemistry the signalling and gene-regulation lessons treat as their control surfaces. The side-chain pKas can shift inside a folded protein (aspartate's carboxyl, 3.9 free in solution, can be pushed as high as 14 in extreme microenvironments), so the finished protein is the sequence plus everything the cell later does to it.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Problem: predict the net charge of free aspartic acid at physiological pH 7, given pKas of 2.1 (alpha-carboxyl), 3.9 (side-chain carboxyl) and 9.8 (alpha-amine), and locate its isoelectric point.',
        'Apply the one-unit rule: each group is fully protonated when pH is more than one unit below its pKa, fully deprotonated when more than one unit above.',
        'Alpha-carboxyl (pKa 2.1): pH 7 is far above — proton off, charge minus 1. Side-chain carboxyl (pKa 3.9): far above — proton off, charge minus 1. Alpha-amine (pKa 9.8): far below — proton on, charge plus 1.',
        'Sum: minus 1 minus 1 plus 1 = net charge minus 1 — aspartate is an anion at physiological pH, which is why it migrates to the anode in free-solution electrophoresis.',
        'Isoelectric point: the neutral species (alpha-carboxyl off, everything else on) exists between the two carboxyl pKas, so pI = (2.1 + 3.9)/2 = 3.0 — matching the water-and-buffers lesson\'s titration of the same molecule.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Six slips recur. Calling glycine chiral: with a bare hydrogen as its R-group it has two identical attachments and is the one achiral amino acid. Treating proline as an imino-acid oddity outside the family: it is a full amino acid — just the only one whose side chain rebonds its own amine, and that ring is precisely why it breaks helices. Assuming free-in-solution pKas apply unchanged inside proteins: microenvironments shift them (the book's aspartate example moves 3.9 toward 14 in extreme cases). Listing histidine as non-essential: it is essential in human adults. Confusing the code's twenty with nature's proteinogenic twenty-two: selenocysteine and pyrrolysine are real protein constituents imported by recoded stop codons. And forgetting leucine's toxicity: the branched-chain workhorse still poisons at overdose with the four D's — diarrhoea, dermatitis, dementia and death.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Alpha-carbon', def: 'The central carbon of an amino acid, carrying hydrogen, carboxyl, amine and the variable R-group.' },
        { term: 'R-group (side chain)', def: 'The variable attachment that defines each amino acid\'s chemistry — non-polar, charged, aromatic, hydroxyl or sulfur-bearing.' },
        { term: 'L-configuration', def: 'The mirror-form of amino acids found in proteins; D-forms exist in bacterial walls and a few peptides.' },
        { term: 'Selenocysteine', def: 'The twenty-first proteinogenic amino acid, inserted at UGA stop codons directed by a SECIS element; found in 25 human selenoproteins.' },
        { term: 'Essential amino acid', def: 'One an organism cannot synthesise and must obtain in the diet — nine for adult humans; the list shifts with age and state.' },
        { term: 'Catalytic triad', def: 'The aspartate-histidine-serine triple that powers serine proteases — histidine\'s near-neutral pKa makes the proton shuttle possible.' },
        { term: 'Non-protein amino acid', def: 'An amino acid never incorporated into proteins but central to metabolism — ornithine and citrulline in the urea cycle, carnitine in fat transport.' },
        { term: 'Peptide bond', def: 'The planar amide linkage joining one amino acid\'s carboxyl to the next\'s amine with loss of water; chains read N-terminus to C-terminus.' },
        { term: 'Post-translational modification', def: 'Chemistry added after synthesis — phosphates on serine/threonine/tyrosine, sugars on asparagine or serine/threonine, acetyl-methyl-ubiquitin marks on lysine.' },
        { term: 'pI of an amino acid', def: 'The pH of zero net charge — the average of the two pKas flanking the neutral species; the value isoelectric focusing uses to separate proteins.' },
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Newborn screening: every baby in most countries is tested for phenylketonuria, the phenylalanine-handling defect, because a controlled low-phenylalanine diet from infancy prevents irreversible brain damage.',
        'Nutrition formulation: lysine is the limiting amino acid of cereal grains, so animal feeds and human diets leaning on rice or wheat are supplemented with it; leucine is dosed cautiously because overdose brings the four D\'s.',
        'Medicine: L-dopa remains the front-line therapy for Parkinson\'s disease — the direct product of the tyrosine-to-dopamine pathway this lesson maps.',
        'Biotechnology: the histidine tag plus nickel-column purification of the toolbox lesson is the workhorse of recombinant protein production, and selenoprotein research ties dietary selenium to antioxidant enzyme function.',
        'Research medicine: D-serine, the second D-amino acid known to function in humans, modulates NMDA receptors and is studied as a schizophrenia biomarker and drug target.',
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which amino acid is achiral?',
          options: ['proline', 'glycine', 'alanine', 'isoleucine'],
          answer: 1,
          explain: 'Glycine\'s R-group is a bare hydrogen, so two of its four alpha-carbon attachments are identical — no mirror-image pair exists. Isoleucine is even chiral twice over, once at each of two carbons.',
        },
        {
          q: 'Selenocysteine enters proteins by:',
          options: ['a normal sense codon like the other twenty', 'recoding UGA stop codons when a SECIS element is present', 'post-translational conversion of serine', 'attachment of selenium to every cysteine'],
          answer: 1,
          explain: 'A selenocysteine insertion sequence in the mRNA lets the translation machinery read UGA as selenocysteine — the code renegotiated, one transcript at a time. Pyrrolysine does the same trick at UAG in methanogens.',
        },
        {
          q: 'Histidine\'s side-chain pKa of about 6.0 makes it uniquely suited to enzyme active sites because:',
          options: ['it is always fully positively charged at physiological pH', 'a small pH shift flips its imidazole between charged and neutral states within catalysis', 'it cannot donate protons at all', 'it forms the strongest disulfide bonds'],
          answer: 1,
          explain: 'Only histidine has a pKa near neutrality, so it can both accept and donate protons in one catalytic cycle — the shuttle role of the serine-protease triad and the zinc-coordination site of His-tag columns.',
        },
        {
          q: 'At physiological pH 7, free aspartic acid (pKas 2.1, 3.9, 9.8) carries a net charge of:',
          options: ['+1', '0', '-1', '-2'],
          answer: 2,
          explain: 'Both carboxyls are deprotonated (minus 1 each) and the amine protonated (plus 1): net minus 1. Its pI of 3.0 shows how far from neutrality this residue sits at pH 7.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'path',
        text: 'Grounding: Kevin Ahern, Indira Rajagopal & Taralyn Tan, Biochemistry Free For All 1.3 (OSU, CC BY-NC-SA 4.0), Section 2.2 "Structure & Function — Amino Acids". The protein-structure lesson folds this alphabet into four-level architecture; the fat-and-amino-acid-metabolism lesson burns the carbon skeletons and runs the urea cycle whose ornithine and citrulline appeared here; the water-and-buffers lesson owns the pH arithmetic behind every pKa quoted; and the genetics book shows how codons specify these twenty letters.',
      },
    ],
  },
  // ------------------------------------------------------------------
]
