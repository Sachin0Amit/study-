/**
 * Knowledge Universe — Biochemistry — Chapter 01: Molecules of Life
 * 7 lessons · ~12,205 words
 * field: Biochemistry
 * legacy sources: life-sciences.ts, x57-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Molecules of Life]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bio-biochemistry-metabolism — Biochemistry: The Cell's Energy Economy
 *   01.2 bioc-water-ph-buffers — Water, pH and Buffers: The Chemistry Every Reaction Lives In
 *   01.3 bioc-amino-acids-r-groups — Amino Acids: The Twenty Letters and Their Chemistry
 *   01.4 bioc-protein-structure-folding — Protein Structure and Folding: Shape Is Function
 *   01.5 bioc-enzymes-kinetics-regulation — Enzymes: Catalysis, Kinetics and Regulation
 *   01.6 bioc-lipid-amino-acid-metabolism — Beyond Glucose: Fat and Amino-Acid Metabolism
 *   01.7 bioc-carbohydrates-lipids — Carbohydrates and Lipids: Fuel, Structure and Signalling
 */
import type { KnowledgeTopic } from '../../types'

export const biochemistryCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: "bio-biochemistry-metabolism",
    title: "Biochemistry: The Cell's Energy Economy",
    domain: "Life Sciences",
    field: "Biochemistry",
    branch: "Molecules of Life",
    tier: "advanced",
    concepts: [
      "ATP: the spent-and-recycled currency",
      "Glycolysis, Krebs cycle, electron transport",
      "Chemiosmosis: gradients before ATP",
      "Real accounting: 30-32 ATP per glucose",
      "Enzymes and activation energy",
      "Michaelis-Menten kinetics",
      "Catabolism and anabolism integrated",
    ],
    words: 1244,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Every living cell runs on one accounting trick: capture energy from food, bank it briefly as ATP, spend it instantly on work. Biochemistry, the branch that studies the molecules running inside organisms, traces that currency through its whole economy — how glucose is dismantled step by step, where the electron transport chain fits, why the true yield is about 30-32 ATP per glucose rather than the 36 older textbooks quote, and how enzymes make all of it fast enough to matter. This is the respiration half of the energy story; photosynthesis, the other half, lives in Botany.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Metabolic logic explains why you cannot sprint for a mile, why cyanide kills in minutes, and why statins lower cholesterol: nearly every drug target in the body is an enzyme sitting on one of these pathways.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "ATP is a nucleotide carrying two extra phosphates, and snapping off the last one releases about 30.5 kilojoules per mole. Cells couple that hydrolysis to reactions that would otherwise not run — contracting a muscle, pumping calcium. The pool holds seconds of supply, so a resting adult recycles roughly her own body weight of ATP daily.",
      },
      {
        kind: "para",
        text: "Glycolysis is the oldest and most conservative module: ten enzyme steps in the cytosol split one six-carbon glucose into two three-carbon pyruvates, yielding a net 2 ATP and 2 NADH. It needs no oxygen, which is why it predates the atmosphere's oxygen and why your muscles can still work in short anaerobic bursts — with pyruvate diverted to lactate to regenerate NAD+.",
      },
      {
        kind: "para",
        text: "Aerobic cells hand pyruvate to the Krebs cycle in the mitochondrial matrix. After pyruvate dehydrogenase trims pyruvate to an acetyl group, each two-carbon acetyl joins oxaloacetate and the cycle turns twice per glucose, producing per turn 3 NADH, 1 FADH2, and 1 ATP-equivalent, with carbon leaving as CO2. The cycle doubles as a parts depot, its intermediates siphoned off to build amino acids and heme.",
      },
      {
        kind: "para",
        text: "The payoff comes at the inner membrane. NADH and FADH2 donate electrons to the transport chain's complexes, which pump protons outward and leave oxygen as the final electron acceptor, producing water. The stored gradient then drives protons back through ATP synthase — chemiosmosis, Peter Mitchell's radical idea before it won the 1978 Nobel Prize. Measured ratios give about 2.5 ATP per NADH and 1.5 per FADH2, which enters later in the chain and pumps less.",
      },
      {
        kind: "para",
        text: "None of it runs at useful speed without enzymes. An enzyme lowers the activation energy of a reaction by stabilizing its transition state; it never changes the reaction's equilibrium or makes an unfavorable one spontaneous. Because each enzyme molecule works on one substrate at a time, reaction rate climbs with substrate concentration and then saturates — the shape Michaelis and Menten captured in 1913, where Km is the substrate concentration at half-maximal velocity.",
      },
      {
        kind: "para",
        text: "Finally, the modules are wired together. Catabolism — breaking molecules down — feeds anabolism, building them up, through shared intermediates: citrate from the Krebs cycle becomes the carbon source for fatty-acid synthesis, and glycolysis runs backward as gluconeogenesis when blood sugar dips. Insulin and glucagon flip the switches, and the AMP-activated kinase acts as the low-fuel alarm that idles expensive synthesis when ATP runs short.",
      },
      {
        kind: "formula",
        name: "Cellular respiration",
        latex: "C_6H_{12}O_6 + 6\\,O_2 \\rightarrow 6\\,CO_2 + 6\\,H_2O \\quad (\\Delta G \\approx -2870\\ \\text{kJ/mol})",
        meaning: "Complete oxidation of one glucose releases about 2,870 kilojoules; the cell banks roughly a third of it as ATP and lets the rest go as heat.",
      },
      {
        kind: "formula",
        name: "ATP yield per glucose",
        latex: "4\\,\\text{ATP}_{\\text{direct}} + 10\\,\\text{NADH}\\times 2.5 + 2\\,\\text{FADH}_2\\times 1.5 = 30{-}32\\,\\text{ATP}",
        meaning: "Four substrate-level ATP plus oxidative phosphorylation at the measured ratios — 32 with the efficient malate-aspartate shuttle, 30 with the cheaper glycerol-3-phosphate one.",
      },
      {
        kind: "formula",
        name: "Michaelis-Menten equation",
        latex: "v = \\frac{V_{max}\\,[S]}{K_m + [S]}",
        meaning: "Reaction velocity rises with substrate concentration and saturates at Vmax; Km is the substrate level that gives half of Vmax, a proxy for binding tightness.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the total ATP a cell extracts from one glucose molecule, using the efficient shuttle.",
          "Recall the tallies: glycolysis nets 2 ATP and 2 NADH; pyruvate dehydrogenase makes 2 NADH; two turns of the Krebs cycle make 2 ATP, 6 NADH, and 2 FADH2 — 10 NADH and 2 FADH2 in all reach the chain.",
          "Apply: direct ATP is 2 + 2 = 4; oxidation gives 10 NADH at 2.5 each = 25, and 2 FADH2 at 1.5 each = 3.",
          "State the result: 4 + 25 + 3 = 32 ATP per glucose — or 30 if the cytosolic NADH enter via the glycerol-3-phosphate shuttle, which is why the honest figure is a range of 30-32.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Cyanide and carbon monoxide poison the chain's oxygen-facing complex, halting ATP production within minutes; antidotes out-compete the poison.",
          "Brown fat uncouples the gradient on purpose, leaking protons to make heat instead of ATP; it keeps infants and hibernating mammals warm.",
          "Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme of cholesterol synthesis, lowering blood cholesterol for millions of patients.",
          "Tumors absorb glucose and ferment it even with oxygen present — the Warburg effect — which is exactly what a PET scan visualizes.",
          "Brewing and bioethanol depend on yeast running glycolysis to ethanol when oxygen is withheld.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The classic error is quoting 36-38 ATP: modern measurements of the ATP synthase and proton-pumping stoichiometry give about 30-32. ATP is also not stored fuel like fat — it is a recycled middleman holding seconds of supply. Enzymes are catalysts, not magicians: they change speeds, never whether a reaction is favorable. And oxygen does not get glued onto carbon to make ATP — it only accepts spent electrons at the end of the chain.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "ATP", def: "Adenosine triphosphate — the phosphorylated nucleotide whose hydrolysis powers cellular work." },
          { term: "Glycolysis", def: "The ten-step cytosolic split of glucose to two pyruvates; net 2 ATP and 2 NADH, no oxygen required." },
          { term: "Krebs cycle", def: "The mitochondrial cycle oxidizing acetyl groups to CO2 while loading electrons onto NADH and FADH2." },
          { term: "Chemiosmosis", def: "Using a proton gradient across a membrane to drive ATP synthase." },
          { term: "Electron transport chain", def: "The inner-membrane complexes that pass electrons to oxygen and pump protons." },
          { term: "Km", def: "In Michaelis-Menten kinetics, the substrate concentration at half-maximal velocity." },
          { term: "Activation energy", def: "The energy hill between reactants and transition state, lowered by enzymes." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "Glycolysis of one glucose molecule directly nets:",
            options: ["2 ATP and 2 NADH", "4 ATP and 4 NADH", "32 ATP", "6 CO2 and 2 FADH2"],
            answer: 0,
            explain: "It costs 2 ATP to prime the sugar and earns 4 back, for a net of 2 ATP plus 2 NADH.",
          },
          {
            q: "What does oxygen actually do in aerobic respiration?",
            options: ["It binds glucose to start glycolysis", "It accepts electrons at the end of the transport chain, forming water", "It directly phosphorylates ADP", "It carries protons across the inner membrane"],
            answer: 1,
            explain: "Oxygen is the terminal electron acceptor; without it the chain backs up and ATP synthesis stops.",
          },
          {
            q: "In the Michaelis-Menten equation, Km equals:",
            options: ["the maximum reaction velocity", "the substrate concentration giving half of Vmax", "the activation energy of the reaction", "the enzyme's concentration"],
            answer: 1,
            explain: "Km is read off the curve as the substrate level at which velocity reaches half its saturating value.",
          },
          {
            q: "Why do current textbooks quote 30-32 ATP per glucose rather than 36-38?",
            options: ["because glycolysis makes less ATP than believed", "because P/O ratios are about 2.5 per NADH and 1.5 per FADH2, with shuttle costs subtracted", "because oxygen is scarce in cells", "because the Krebs cycle skips two turns"],
            answer: 1,
            explain: "Measured stoichiometries and the cost of importing cytosolic NADH lower the older, rounder numbers.",
          },
        ],
      },
    ],
  },
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
  {
    id: 'bioc-protein-structure-folding',
    title: 'Protein Structure and Folding: Shape Is Function',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Molecules of Life',
    tier: 'core',
    concepts: [
      'Four levels of protein structure',
      'Alpha-helices and beta-sheets: the hydrogen-bonded repeats',
      'The hydrophobic effect drives folding',
      'Anfinsen: sequence contains the folding information',
      'Molecular chaperones prevent aggregation',
      'Amyloid and misfolding disease',
      'Denaturation and renaturation',
    ],
    words: 1898,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'A protein is a linear chain of amino acids that becomes a working machine only when it folds into a precise three-dimensional shape; the same chain, unfolded, is sticky spaghetti with no function. This lesson covers the structural hierarchy — primary, secondary, tertiary and quaternary — the physical forces that select one fold out of an astronomical number of possibilities, how cells help proteins fold correctly, and what happens when folding goes wrong, from a boiled egg to Alzheimer’s disease. It is the structural foundation the energy-economy overview assumes: enzymes work only as folded shapes.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Structure explains function at every scale of medicine and biotechnology: why a drug fits one receptor and not its cousin, why insulin must be kept cold, why a single amino-acid change stiffens haemoglobin into sickle fibres, and why misfolded proteins propagate as prion and amyloid diseases. Predicting structure from sequence — solved at scale by AlphaFold, recognised with the 2024 chemistry Nobel — reset modern biology.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Primary structure is the amino-acid sequence, written N-terminal to C-terminal, held together by rigid, planar peptide bonds. The order is everything: change one residue out of 146 in beta-haemoglobin from glutamate to valine — a single hydrophobic patch on the surface — and red cells collapse into sickles. Secondary structure is the first level of regular local folding, generated by hydrogen bonds between backbone groups four residues apart: the alpha-helix, a right-handed coil with 3.6 residues per turn, and the beta-sheet, extended strands hydrogen-bonded side-by-side in parallel or antiparallel register. Fibrous proteins push one pattern to the extreme — alpha-keratin is helical rope, silk fibroin is stacked sheets.',
      },
      {
        kind: 'para',
        text: 'Tertiary structure is the complete three-dimensional packing of one chain: helices and sheets assembled into domains with a hydrophobic core and a polar surface. Quaternary structure joins separate chains into one machine — haemoglobin is a tetramer of two alpha and two beta subunits whose oxygen binding is coupled by the interface between them. Side-chain chemistry writes the whole hierarchy: nonpolar valine, leucine and phenylalanine bury; charged aspartate and lysine form salt bridges; cysteine pairs into covalent disulfide bonds; histidine switches between states at neutral pH, which is why it sits in enzyme active sites.',
      },
      {
        kind: 'para',
        text: "Geometry refines the picture. A helix rises 0.15 nanometres per residue and completes one turn every 0.54 — parameters Pauling, Corey and Branson predicted correctly from models in 1951, before any crystallographer saw one. Two rarer cousins share the architecture: the 3-10 helix (ten residues in three turns, hydrogen bonds three apart, usually capping an alpha-helix) and the pi-helix (22 residues in five turns, present somewhere in as many as 15 percent of proteins, almost always inserted mid-alpha-helix). The backbone's rotatable phi and psi angles are themselves constrained — G.N. Ramachandran's 1963 analysis plotted the sterically allowed combinations and found just three favoured regions (beta-strands, right-handed helices, left-handed helices), and real proteins land on that map with remarkable fidelity. The same logic runs in reverse: tally which residues favour which structure across thousands of known folds and you can predict secondary structure from sequence alone with up to 80 percent accuracy.",
      },
      {
        kind: 'para',
        text: 'Why does the chain fold at all? The dominant driver is the hydrophobic effect. Water around a nonpolar side chain is forced into ordered, cage-like arrangements; burying nonpolar groups in the core releases that water into disorder. The system gains entropy even though the protein itself becomes more ordered — folding is a thermodynamic balance, conventionally written as free energy change equals enthalpy change minus temperature times entropy change, and native proteins sit only 20–60 kilojoules per mole below the unfolded ensemble, a margin thin enough that heating, extremes of pH, or detergents can erase it: denaturation. Boiled egg white is denatured ovalbumin — new bonds forged between exposed hydrophobic patches make the change practically irreversible there, though not in general.',
      },
      {
        kind: 'para',
        text: 'Christian Anfinsen proved in the 1950s that sequence alone specifies the fold: the enzyme ribonuclease, fully unfolded with its disulfides shattered by urea and a reducing agent, refolded into a fully active enzyme once the chemicals were removed. A randomly sampling chain would need longer than the age of the universe to try every conformation — Levinthal’s paradox — so folding must follow an energy funnel: rapid collapse, then guided descent through molten-globule intermediates to the native state in milliseconds. Folding is cooperative and fast, but it is not always left to chance.',
      },
      {
        kind: 'para',
        text: 'Cells add molecular chaperones — many of them heat-shock proteins, first noticed as products switched on by a sudden temperature rise. They add no information; they add time and shielding. Hsp70-style chaperones clamp onto exposed hydrophobic patches of a nascent chain and keep neighbours from sticking together prematurely. Chaperonins such as the bacterial GroEL–GroES pair seal a single chain inside an ATP-fuelled barrel, a private room where folding proceeds without an audience of other hydrophobic surfaces. In the crowded cell — protein concentrations of hundreds of grams per litre — aggregation, not misfolding, is the everyday danger.',
      },
      {
        kind: 'para',
        text: "The system has more moving parts than the barrel metaphor suggests. Hsp70 works with an ATP-hydrolysis co-chaperone, Hsp40, that drives the clamp cycle; and when a client is damaged beyond rescue, Hsp70 recruits the ubiquitination enzymes that tag it with a polyubiquitin chain — linked at specific lysines of ubiquitin, K48 for the proteasome's attention — dooming the protein to the barrel-shaped proteasome, which clips its client into seven-to-eight-residue peptides for recycling. Even environments tune stability: thermophiles thriving above 50 degrees stabilise their proteins with extra hydrogen bonds, extra salt bridges and tighter packing — the same forces ordinary proteins use, simply more of them.",
      },
      {
        kind: 'para',
        text: 'When folding fails in a specific way, chains can stack into amyloid: highly ordered, insoluble fibrils sharing a cross-beta architecture in which beta-strands run perpendicular to the fibril axis and hydrogen-bond along it. Neurodegenerative disease carries the clearest signatures — amyloid-beta plaques in Alzheimer’s, alpha-synuclein aggregates in Parkinson’s — while the prion protein shows the extreme case: a misfolded conformer that templates its shape onto normal copies, making the disease infectious and resistant to normal sterilisation, the agent of scrapie, mad-cow disease and variant Creutzfeldt–Jakob disease. Misfolding also reaches beyond the brain: light-chain amyloid can clog kidneys and heart, and gene mutations that swap a single residue can destabilise a whole fold, as in some inherited forms of cystic-fibrosis-adjacent protein-trafficking failure.',
      },
      {
        kind: 'para',
        text: 'Two refinements complete the picture. Domains — compact, semi-independent structural units of roughly 100–250 residues — recombine across evolution like building blocks, so a kinase domain appears in hundreds of unrelated proteins. And a large fraction of functional proteins are intrinsically disordered: they stay floppy until a partner induces a shape, a strategy common in signalling and regulation. On top of the finished fold, cells bolt on post-translational modifications — phosphate groups that act as switches, sugars that steer trafficking and shield surfaces, lipid anchors that moor a protein to a membrane — so the finished molecule is the sequence plus everything the cell later adds to it.',
      },
      {
        kind: 'formula',
        name: 'Folding free energy',
        latex: '\\Delta G = \\Delta H - T\\,\\Delta S, \\quad K_{\\text{fold}} = e^{-\\Delta G / RT}',
        meaning: 'Folding is stable only when the free-energy change is negative. Burying hydrophobic surface releases ordered water (entropy gain), while the chain itself loses conformational entropy — a cost that grows with temperature, which is why heat denatures proteins.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a protein folds with a free-energy change of minus 5.7 kilojoules per mole at body temperature, 310 kelvin — what fraction of molecules are folded at equilibrium?',
          'Recall the governing relation: the equilibrium constant follows K = e raised to minus delta-G over R-T, with R = 8.314 joules per mole per kelvin.',
          'Apply: exponent = 5700 ÷ (8.314 × 310) ≈ 2.21, so K ≈ 9.1; the folded fraction is K ÷ (1 + K) = 9.1 ÷ 10.1 ≈ 0.90.',
          'State the result: about 90 percent folded — a “stable” protein is only an order-of-magnitude bet, which is why modest perturbations (heat, pH, a point mutation) tip chains toward unfolding and aggregation.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Structure-based drug design: fit a small molecule into a pocket you can see, rather than screening blindly.',
        'Biologics and the cold chain: insulin, antibodies and vaccines are formulated and refrigerated specifically to protect fragile folds.',
        'AlphaFold-class structure prediction, which turned years of crystallography per protein into minutes of computation.',
        'Prion and amyloid diagnostics, and the sterilisation protocols built around prion resistance.',
        'Industrial enzymes engineered for thermostability so detergents and biofuel processes survive near-boiling conditions.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Hydrogen bonds stabilise helices and sheets, but the hydrophobic effect — not hydrogen bonding — is the main thermodynamic driver of the fold. Denaturation destroys higher-order structure, not the primary sequence; a denatured chain is not a broken chain. Chaperones do not “know” the right fold or add information — they prevent aggregation and give the chain room to find the fold its sequence already encodes. And quaternary structure means multiple chains in one complex, not multiple domains in one chain.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'primary structure', def: 'The linear amino-acid sequence of a polypeptide chain.' },
        { term: 'alpha-helix', def: 'Right-handed backbone coil stabilised by hydrogen bonds between residues four apart; 3.6 residues per turn.' },
        { term: 'beta-sheet', def: 'Extended strands hydrogen-bonded side-by-side, in parallel or antiparallel register.' },
        { term: 'hydrophobic effect', def: 'The entropy gain from releasing ordered water when nonpolar groups bury in a protein core — the main driver of folding.' },
        { term: 'molecular chaperone', def: 'A protein that assists folding by shielding hydrophobic patches and preventing aggregation; information-neutral, ATP-powered.' },
        { term: 'amyloid', def: 'Ordered, insoluble fibrils with cross-beta architecture formed by misfolded proteins.' },
        { term: 'prion', def: 'A misfolded, self-templating conformer of a cellular protein that propagates infectious structure.' },
        { term: 'denaturation', def: 'Loss of higher-order structure from heat, pH or chemicals, with the primary sequence intact.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The chief thermodynamic driver of the folded state is…',
          options: ['hydrogen bonds inside the core', 'the entropy gain from releasing ordered water around buried nonpolar groups', 'covalent disulfide bonds', 'electrostatic attraction to the membrane'],
          answer: 1,
          explain: 'Hydrogen bonds and salt bridges fine-tune, but burying nonpolar surface releases caged water — the dominant favourable term.',
        },
        {
          q: 'Anfinsen’s ribonuclease experiment showed that…',
          options: ['folding requires chaperones in every case', 'the amino-acid sequence alone contains the information for the native fold', 'proteins cannot refold once denatured', 'secondary structure forms only inside the ribosome'],
          answer: 1,
          explain: 'Fully denatured, disulfide-shattered ribonuclease regained full activity on its own once urea and reductant were removed.',
        },
        {
          q: 'Prion disease is infectious because the misfolded prion protein…',
          options: ['is a virus with a protein coat', 'mutates the genes of neighbouring cells', 'templates its abnormal conformer onto normal PrP molecules', 'secretes a potent neurotoxin'],
          answer: 2,
          explain: 'Prions propagate by conformational templating — no nucleic acid involved — which also explains their resistance to standard sterilisation.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: none — this is the structural opening of the biochemistry block. Follow with the enzyme lesson for how folded shapes catalyse, and the metabolism lessons for what those enzymes do. Grounding texts: the protein-structure and folding chapters of the open LibreTexts biochemistry shelves, following the classic Berg/Stryer and Lehninger sequences, plus OpenStax Biology’s proteins pages.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Sequence → local helices and sheets → full three-dimensional fold → multi-chain complexes: four levels, one hierarchy.',
        'The hydrophobic effect buries nonpolar side chains and releases ordered water; hydrogen bonds pattern the backbone.',
        'Anfinsen: the fold is encoded in the sequence; chaperones prevent aggregation rather than add information.',
        'Misfolding into cross-beta amyloid underlies prion disease, Alzheimer’s plaques and Parkinson’s aggregates.',
        'Denaturation (heat, pH, detergent) destroys shape, not sequence — and marginal stability is what makes that easy.',
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bioc-enzymes-kinetics-regulation',
    title: 'Enzymes: Catalysis, Kinetics and Regulation',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Molecules of Life',
    tier: 'core',
    concepts: [
      'Active sites and transition-state stabilisation',
      'Michaelis–Menten kinetics: Km and Vmax',
      'Competitive versus noncompetitive inhibition',
      'Allosteric regulation and feedback control',
      'Zymogens, phosphorylation and isozymes',
      'Vitamins as coenzyme precursors',
      'Enzymes as drug targets',
    ],
    words: 1689,
    readMins: 8,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Left alone, the chemistry of life would take centuries: uncatalysed reactions in cells run millions to trillions of times slower than physiology needs. Enzymes close that gap — protein catalysts that can accelerate reactions by factors from a million to a quadrillion while picking one substrate out of a soup of look-alikes. The energy-economy overview met enzymes in passing as the gears of metabolism; this lesson takes the machine apart — how the catalysis works, how the numbers of kinetics are read, how inhibitors shut enzymes down, and how the cell itself regulates them. Nearly every drug you have ever taken works on this machinery.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Statins, protease inhibitors, penicillin, aspirin, chemotherapy agents — all are enzyme inhibitors. Clinical diagnostics read enzymes: a heart attack and a liver injury are each signalled by characteristic enzymes leaking into blood. And vitamin deficiency diseases — pellagra, beriberi — are enzyme-cofactor shortages wearing different names.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Catalysis happens at the active site: a small pocket formed by residues far apart in the sequence but juxtaposed by the fold. The universal trick is transition-state stabilisation. Every reaction passes through a strained, high-energy arrangement of bonds, and the height of that barrier — the activation energy — sets the rate. An enzyme binds the transition state tighter than it binds the substrate, lowering the barrier; it never changes the reaction’s equilibrium, only how fast equilibrium is reached. Specificity comes from geometry and chemistry working together: Emil Fischer’s “lock and key” picture explains rigid selectivity, but Daniel Koshland’s induced fit is closer to the truth — the active site moulds itself around the substrate, excluding water and aligning bonds precisely for attack.',
      },
      {
        kind: 'para',
        text: 'Catalytic strategies recur across enzyme families. Covalent catalysis: the enzyme forms a transient bond with the substrate, as chymotrypsin’s serine does in cleaving peptide bonds through an acyl-enzyme intermediate. General acid–base catalysis: side chains donate and accept protons in step, keeping the reaction moving without waiting for water. Metal-ion catalysis: zinc in carbonic anhydrase polarises a bound water molecule into a potent nucleophile. Most real enzymes orchestrate several strategies at once, which is why a well-built active site beats any laboratory catalyst for its own reaction.',
      },
      {
        kind: 'para',
        text: "The kinetics rest on three experimental assumptions worth stating explicitly: velocity is measured as the INITIAL rate, before the reverse reaction or product buildup contaminates the reading; substrate is in great excess over enzyme, so the enzyme is never idle waiting for substrate; and the reaction is sampled under steady state, where the enzyme–substrate complex's concentration is not appreciably changing. Most enzymes, moreover, juggle two substrates, and the binding choreography sorts them into families: sequential reactions bind both substrates before any product leaves — in ordered fashion, as lactate dehydrogenase demands NADH before pyruvate, or in random fashion, as creatine kinase accepts creatine and ATP in either order — while ping-pong (double-displacement) enzymes never hold both at once: a transaminase takes the amino group from one substrate onto its own cofactor, then hands it to the second, physically shuttling between two modified states.",
      },
      {
        kind: 'para',
        text: 'Kinetics turns this into numbers. At low substrate concentration, reaction velocity rises almost linearly with substrate; at high concentration, every enzyme molecule is saturated and velocity plateaus at Vmax. Michaelis and Menten captured the curve a century ago: v equals Vmax times S over Km plus S, where Km — the substrate concentration giving half-maximal velocity — reflects how tightly the enzyme holds its substrate (smaller Km, tighter grip). The turnover number kcat counts molecules converted per enzyme per second (carbonic anhydrase: about a million), and the ratio kcat/Km measures catalytic efficiency, approaching the theoretical diffusion limit for the best enzymes.',
      },
      {
        kind: 'para',
        text: 'Inhibitors are the pharmacologist’s toolkit. Competitive inhibitors resemble the substrate and queue for the active site; they raise the apparent Km but leave Vmax untouched — flood the system with enough substrate and the inhibitor is outcompeted. Statins on HMG-CoA reductase and methotrexate on dihydrofolate reductase work this way. Noncompetitive inhibitors bind elsewhere and poison catalysis itself, lowering Vmax at any substrate level. Uncompetitive inhibitors bind only the enzyme–substrate complex, lowering both constants. Irreversible inhibitors form covalent bonds and permanently disable the enzyme: aspirin acetylates a prostaglandin-synthase serine for the lifetime of the platelet, penicillin locks bacterial cell-wall transpeptidases shut, and organophosphate nerve agents age on acetylcholinesterase.',
      },
      {
        kind: 'para',
        text: 'Cells regulate enzymes at four levels. Allosteric regulation: a signal molecule binds a site distant from the active site and shifts the enzyme between tense and relaxed conformations — phosphofructokinase, the valve of glycolysis, is inhibited by ATP and unleashed by AMP, the cell’s fuel gauge. Covalent modification: kinases bolt phosphates onto target enzymes and phosphatases remove them, building the switching cascades of hormone signalling. Proteolytic activation: dangerous hydrolases are synthesised as inert zymogens — trypsinogen, the clotting cascade — and armed only where and when needed. And enzyme amount: gene expression and degradation set how many copies exist, the slowest but largest lever. Clinical labs exploit isozymes — tissue-specific versions of the same enzyme: creatine kinase tagged MB points to heart muscle, ALP isoenzymes distinguish bone from liver. Allosteric effectors get their own vocabulary: homotropic effectors are the enzyme’s own substrate, whose binding converts the hyperbolic velocity curve into a sigmoid as T-state enzymes flip to R — the cooperative shape haemoglobin’s oxygen curve shares — while heterotropic effectors are other molecules entirely, like ATP and AMP on phosphofructokinase.',
      },
      {
        kind: 'para',
        text: 'Many enzymes need helpers. Cofactors are inorganic ions — zinc, magnesium, iron — while coenzymes are organic shuttle molecules, most derived from vitamins the body cannot synthesise: niacin becomes NAD, riboflavin becomes FAD, thiamine the decarboxylation cofactor TPP, pantothenate the acyl-carrier arm of CoA. This is why vitamin deficiency is a metabolic story: beriberi is thiamine-starved pyruvate dehydrogenase, and the B12 cofactor sits at the centre of methylmalonyl-CoA mutase and methionine synthesis. Water-soluble vitamins must be supplied continuously because the shuttles are spent and excreted; fat-soluble ones are stored, which makes their excess toxic rather than merely wasteful.',
      },
      {
        kind: 'formula',
        name: 'Michaelis–Menten equation',
        latex: 'v = \\frac{V_{\\max}[S]}{K_m + [S]}',
        meaning: 'Reaction velocity v against substrate concentration S rises hyperbolically to saturation Vmax. Km is the substrate level giving half-maximal velocity — a practical inverse read-out of substrate affinity.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: an enzyme has Vmax = 100 micromoles per minute and Km = 2 millimolar. A competitive inhibitor is present at a concentration equal to its Ki (α = 2). What is the velocity at substrate concentration 2 millimolar, compared with the uninhibited case?',
          'Recall the rule: a competitive inhibitor scales Km by the factor α, leaving Vmax unchanged — apparent Km becomes α × Km.',
          'Apply: uninhibited, v = 100 × 2 ÷ (2 + 2) = 50. With inhibitor, apparent Km = 4, so v = 100 × 2 ÷ (4 + 2) ≈ 33.',
          'State the result: velocity falls by a third — and raising the substrate tenfold would claw most of it back, the clinical signature of competitive inhibition that underlies dose-finding for statin-class drugs.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Rational drug design: statins (HMG-CoA reductase), ACE inhibitors, HIV protease inhibitors, and suicide inhibitors like penicillin.',
        'Clinical enzymology: AST/ALT for liver injury, CK-MB and troponins for cardiac injury, amylase/lipase for pancreatitis.',
        'Vitamin pharmacology: thiamine before glucose in alcohol-related emergencies — refilling the cofactor before loading the pathway.',
        'Industry: high-fructose corn syrup via immobilised glucose isomerase, biological washing powders, PCR’s heat-proof polymerase.',
        'Feedback-limited biosensors and urinalysis dipsticks, which pair an enzyme with a colour change to quantify glucose.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'An enzyme changes rate, never equilibrium — it cannot make an unfavourable reaction favourable, only fast. Km is not simply binding affinity except under restrictive conditions; it is a kinetic composite. Competitive inhibitors raise apparent Km but never touch Vmax; noncompetitive do the reverse. “Allosteric” means binding outside the active site, not merely “inhibitory”. And a zymogen is inactive by design — activating it early (as pancreatitis does) digests the organ that made it.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'active site', def: 'The pocket where substrate binds and catalysis happens, formed by distant residues brought together by the fold.' },
        { term: 'induced fit', def: 'Active-site remodelling around the substrate that improves catalytic alignment and specificity.' },
        { term: 'Michaelis constant (Km)', def: 'Substrate concentration giving half-maximal velocity; a kinetic proxy for substrate affinity.' },
        { term: 'turnover number (kcat)', def: 'Substrate molecules converted per enzyme molecule per second at saturation.' },
        { term: 'competitive inhibition', def: 'Active-site competition raising apparent Km; relieved by excess substrate.' },
        { term: 'allosteric regulation', def: 'Effector binding at a second site shifting the enzyme between conformational states.' },
        { term: 'zymogen', def: 'An inactive enzyme precursor armed by selective proteolytic cleavage.' },
        { term: 'coenzyme', def: 'An organic cofactor, often vitamin-derived, that carries chemical groups or electrons between reactions.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'An enzyme’s fundamental catalytic trick is…',
          options: ['supplying energy to the reaction', 'stabilising the transition state, lowering the activation barrier', 'shifting the equilibrium toward products', 'raising the temperature locally'],
          answer: 1,
          explain: 'Catalysts lower the activation barrier by binding the transition state; equilibrium positions never move.',
        },
        {
          q: 'A competitive inhibitor changes the kinetics how?',
          options: ['Vmax falls, Km unchanged', 'Vmax unchanged, apparent Km rises', 'both Vmax and Km fall', 'neither constant changes'],
          answer: 1,
          explain: 'The inhibitor queues at the active site — saturating substrate restores full Vmax, but more substrate is needed to reach half of it.',
        },
        {
          q: 'Beriberi from thiamine deficiency is best understood as…',
          options: ['a missing structural protein', 'an enzyme lacking its vitamin-derived coenzyme', 'an overactive zymogen', 'a competitive inhibitor overdose'],
          answer: 1,
          explain: 'Thiamine is the precursor of TPP, the cofactor of pyruvate dehydrogenase and related decarboxylases; without it, carbohydrate metabolism stalls.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: the protein-structure lesson — active sites are folds. Follow with the glucose energy-economy lesson for the pathways these kinetics describe, and the fat-and-amino-acid lesson for the rest of metabolism. Grounding texts: the enzyme chapters of the open LibreTexts biochemistry shelves (following Lehninger and Stryer) and the pre-clinical enzyme-kinetics chapter on Medicine LibreTexts.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Active sites stabilise the transition state: rate up by orders of magnitude, equilibrium untouched.',
        'Michaelis–Menten: v = Vmax·[S] / (Km + [S]); Km is the half-saturation substrate level, kcat/Km the efficiency.',
        'Competitive inhibitors raise Km; noncompetitive lower Vmax; irreversible ones kill the enzyme covalently.',
        'Regulation runs through allostery, phosphorylation switches, zymogen arming and enzyme quantity.',
        'Vitamins are coenzyme precursors — deficiency is enzyme starvation, and inhibitors are medicine’s sharpest tools.',
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bioc-lipid-amino-acid-metabolism',
    title: 'Beyond Glucose: Fat and Amino-Acid Metabolism',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Molecules of Life',
    tier: 'intermediate',
    concepts: [
      'Triglycerides as the body’s fuel reserve',
      'Beta-oxidation: cutting chains two carbons at a time',
      'Ketone bodies: the brain’s famine fuel',
      'Transamination and the urea cycle',
      'Glucogenic versus ketogenic skeletons',
      'Fed and fasted metabolic states',
      'Why fat cannot become glucose',
    ],
    words: 1811,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'The glucose economy is one aisle of the metabolic warehouse. A 70-kilogram adult stores perhaps 500 grams of glycogen — roughly a day of fuel — but 10 to 15 kilograms of fat, enough for one to two months. Protein adds a third ledger: no dedicated store, but muscles as a spendable reserve. This lesson follows the other two aisles — how fatty acids are oxidised, why the body makes ketone bodies, how amino acids shed their nitrogen, and how all three fuel streams are merged under hormonal control. It builds directly on the energy-economy lesson: everything here converges on the same junction, acetyl-CoA.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Fasting physiology, marathon nutrition, ketogenic-diet therapy for drug-resistant epilepsy, newborn screening for fat-metabolism defects, ammonia toxicity in liver failure — all are this lesson’s machinery in motion. Knowing why “fat burns in a carbohydrate flame” explains why crash diets scramble energy metabolism.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Fat mobilisation begins with lipolysis: hormone-sensitive lipase and adipose triglyceride lipase cleave stored triglycerides into glycerol and three fatty acids, released into blood bound to albumin. The glycerol backbone is a small bonus — the liver converts it to the gluconeogenesis intermediate dihydroxyacetone phosphate. The fatty acids are the prize, but they must be activated (joined to CoA at the cost of the equivalent of two ATP) and escorted across the mitochondrial membranes: the carnitine shuttle tags each acyl chain onto carnitine for the crossing and re-attaches CoA inside. Inherited defects of this shuttle, such as medium-chain acyl-CoA dehydrogenase deficiency, hide until the first long overnight fast — which is why newborns are screened and why fasting tolerance becomes the clinical tell.',
      },
      {
        kind: 'para',
        text: 'Beta-oxidation is a four-step spiral repeated along the chain: oxidation produces FADH2, hydration, oxidation produces NADH, and thiolase cleavage releases one acetyl-CoA while shortening the chain by two carbons. A C16 acid like palmitate runs the spiral seven times, yielding 8 acetyl-CoA, 7 NADH and 7 FADH2; feeding those into the Krebs cycle and transport chain gives roughly 106 ATP in total — versus about 30 for one glucose. Gram for gram, fat is the densest fuel precisely because its carbons are already reduced. Odd-numbered chains end at propionyl-CoA, which the B12-dependent mutase converts to a Krebs intermediate — the only fat fragment that can become glucose.',
      },
      {
        kind: 'para',
        text: "Two wrinkles complete the spiral. Very long chains — twenty-two carbons and up — begin oxidation in peroxisomes, where the same chemistry runs but the FADH2 electrons reduce oxygen to hydrogen peroxide instead of feeding a proton pump, so peroxisomal fat burning yields no ATP from that step and must shuttle its NADH equivalents onward; the peroxisome also handles branched-chain fatty acids and eicosanoids. And the double bonds of unsaturated fats need extra enzymes: a cis-delta-3-enoyl-CoA isomerase repositions misplaced double bonds into the trans configuration the spiral expects, and a 2,4-dienoyl-CoA reductase (spending NADPH) handles the second bond of polyunsaturated chains — which is why dietary linoleic and linolenic acids burn a little less efficiently but still burn. The medium-chain acyl-CoA dehydrogenase deficiency flagged above is among the most common inherited metabolic errors and has been linked to sudden infant death syndrome — the first long overnight fast is where an undiagnosed child meets it.",
      },
      {
        kind: 'para',
        text: 'That asymmetry is a biochemistry classic: animals cannot turn even-numbered fatty acids into glucose. The reason is bookkeeping — the pyruvate dehydrogenase step from pyruvate to acetyl-CoA is a one-way door, and the two carbons entering the Krebs cycle as acetyl-CoA leave as two CO2 before anything net can be harvested. Carbon skeletons for gluconeogenesis come from glycerol, lactate, most amino acids, and odd-chain fats — never from acetyl-CoA itself. Plants and microbes run the glyoxylate shunt that skips the two decarboxylations; animals lost it, which is why dieting biology separates “burning fat” from “building blood sugar”.',
      },
      {
        kind: 'para',
        text: 'During a fast, the liver repackages fat for the brain. Accumulating acetyl-CoA exceeds what the Krebs cycle can accept (oxaloacetate has been diverted to gluconeogenesis), and the ketogenesis pathway condenses it into acetoacetate and beta-hydroxybutyrate — water-soluble, blood-borne fuel the brain learns to burn within days of fasting, replacing most of its glucose demand. Muscles and heart adopt ketones even sooner, sparing glucose for red cells. Physiological ketosis is a controlled adaptation with pH held near normal; diabetic ketoacidosis is the emergency when insulin is absent altogether and the same chemistry runs unchecked — the distinction the metabolic-health lesson treats clinically.',
      },
      {
        kind: 'para',
        text: 'Amino acids arrive with a waste problem: nitrogen. The first move is transamination — aminotransferases hand the amino group to alpha-ketoglutarate, making glutamate, the collection hub. In the mitochondria of liver hepatocytes, glutamate dehydrogenase releases it as ammonia, and the urea cycle locks the ammonia into urea at the cost of three ATP — four high-energy phosphate bonds in total, because the argininosuccinate-synthetase step spends ATP to make AMP — across five reactions spanning the mitochondrial matrix and the cytosol, launched by carbamoyl-phosphate synthetase I, the most abundant liver enzyme. The cycle was the first metabolic cycle ever discovered — Hans Krebs worked it out in 1932, five years before his citric acid cycle — and it is regulated at that first step by N-acetylglutamate, an allosteric activator whose own synthetase is switched on by arginine and glutamate, so a nitrogen-rich cell arms its disposal valve. Urea rides to the kidneys for excretion (humans are ureotelic; birds excrete uric acid, fish simply ammonia); liver failure lets ammonia reach the brain (hepatic encephalopathy), while inherited urea-cycle defects make protein a poison from infancy. What remains after deamination are carbon skeletons, sorted by their destination: glucogenic ones funnel into pyruvate or Krebs intermediates and can raise glucose; ketogenic ones (leucine, lysine alone) become acetyl-CoA or acetoacetate; several — isoleucine, phenylalanine, tyrosine, tryptophan, threonine — do both.',
      },
      {
        kind: 'para',
        text: 'Integration is hormonal. In the fed state, insulin drives storage: glycogenesis, fat synthesis from acetyl-CoA via malonyl-CoA, and protein building — and malonyl-CoA simultaneously blocks carnitine, keeping freshly made fat from being immediately burned. In the fasted state, glucagon and adrenaline reverse everything: glycogenolysis first, then gluconeogenesis, lipolysis and ketogenesis as the fast deepens. The Randle cycle runs the traffic at the muscle: fatty-acid oxidation suppresses glucose uptake, so the body preferentially burns fat when it is plentiful. The brain is the exception that shapes the whole design — it neither burns fat nor stores it, so prolonged fasting exists only because the liver manufactures ketones for it.',
      },
      {
        kind: 'formula',
        name: 'ATP yield from a fatty acid',
        latex: '\\text{ATP} \\approx 7n - 6 \\quad (\\text{C}_{n}\\ \\text{saturated fatty acid})',
        meaning: 'Each two-carbon unit nets about 14 ATP (an acetyl-CoA worth 10 plus 1.5 + 2.5 from the spiral), minus 2 for activation. Palmitate (n = 16 carbons): 7 × 16 − 6 ≈ 106 — the arithmetic behind fat’s energy density.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: account for the ATP from complete oxidation of one palmitate (C16:0).',
          'Recall the ledger: seven beta-oxidation spirals give 7 FADH2 + 7 NADH + 8 acetyl-CoA; entry ATPs: 2.5 per NADH, 1.5 per FADH2, 10 per acetyl-CoA through the Krebs cycle and transport chain.',
          'Apply: spiral coenzymes: 7 × 2.5 + 7 × 1.5 = 17.5 + 10.5 = 28; acetyl-CoA: 8 × 10 = 80; activation cost: −2. Total = 28 + 80 − 2 = 106.',
          'State the result: about 106 ATP per palmitate, versus roughly 30–32 per glucose — with the honest caveat that measured P/O ratios vary, so textbooks quote a range, and the accounting, not the exact number, is the point.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Fasting and dieting physiology: glycogen lasts about a day; fat and ketones carry you the rest of the way — “hitting the wall” is glycogen depletion in real time.',
        'Ketogenic-diet therapy for drug-resistant epilepsy, and medium-chain triglyceride oils that bypass the carnitine shuttle.',
        'Newborn screening for fatty-acid-oxidation and urea-cycle defects before the first dangerous fast.',
        'Liver-failure care: ammonia control, since the urea cycle lives only in hepatocytes.',
        'Sports physiology: endurance training shifts muscle toward fat oxidation, sparing glycogen — the trainable edge of the Randle cycle.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Fat is not a glucose source: even-chain fatty acids yield only acetyl-CoA, and animals have no net route from acetyl-CoA to glucose — glycerol and odd-chain fats are the exceptions. Ketosis is a controlled fast-state adaptation, not the same thing as diabetic ketoacidosis. The urea cycle is liver-specific and spans two compartments. And beta-oxidation is an aerobic service: it makes NADH and FADH2, so it stalls when the transport chain stalls — fat cannot be burned without oxygen either.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'lipolysis', def: 'Enzymatic cleavage of stored triglyceride into glycerol and free fatty acids.' },
        { term: 'carnitine shuttle', def: 'The transport system that carries activated fatty acids across the inner mitochondrial membrane.' },
        { term: 'beta-oxidation', def: 'The four-step mitochondrial spiral releasing acetyl-CoA two carbons at a time from a fatty acid.' },
        { term: 'ketone bodies', def: 'Acetoacetate and beta-hydroxybutyrate, liver-made, blood-borne alternative fuel for brain and muscle.' },
        { term: 'transamination', def: 'Transfer of an amino group to alpha-ketoglutarate, collecting nitrogen as glutamate.' },
        { term: 'urea cycle', def: 'The five-reaction liver pathway converting ammonia to excretable urea — three ATP and four high-energy phosphate bonds spent per turn, N-acetylglutamate-activated at CPS I.' },
        { term: 'glucogenic / ketogenic', def: 'Classification of amino-acid carbon skeletons by whether they can net-yield glucose, ketones, or both.' },
        { term: 'Randle cycle', def: 'The substrate competition by which fatty-acid oxidation suppresses glucose use in muscle.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'Why can animals not convert even-chain fatty acids into glucose?',
          options: ['fatty acids never enter mitochondria', 'the pyruvate-dehydrogenase step is irreversible and acetyl-CoA carbons leave the Krebs cycle as CO2', 'glucose cannot be made in the liver', 'insulin blocks all gluconeogenesis'],
          answer: 1,
          explain: 'The two-carbon door is one-way; only glycerol, odd-chain fragments and amino-acid skeletons feed net gluconeogenesis.',
        },
        {
          q: 'During a multi-day fast, the brain largely switches to burning…',
          options: ['free fatty acids', 'ketone bodies made by the liver', 'stored brain glycogen', 'amino acids directly'],
          answer: 1,
          explain: 'Fatty acids do not cross the blood–brain barrier usefully; the liver exports ketones, which cover most — not all — of cerebral demand.',
        },
        {
          q: 'The first step of amino-acid nitrogen disposal is…',
          options: ['oxidative decarboxylation', 'transamination to alpha-ketoglutarate forming glutamate', 'direct excretion of ammonia by the kidney', 'condensation into creatinine'],
          answer: 1,
          explain: 'Aminotransferases pool nitrogen into glutamate, which glutamate dehydrogenase or the urea cycle then disposes of.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: the glucose energy-economy lesson — this one reuses its Krebs-cycle and transport-chain vocabulary. Follow with the metabolic-health lesson for the clinical face of insulin failure, and the nutrition lesson for how these pathways meet the plate. Grounding texts: the fatty-acid, ketone-body and urea-cycle chapters of the open LibreTexts biochemistry shelves (Lehninger and Stryer sequences).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Fat is the long-term store: lipolysis, activation, carnitine escort, then the beta-oxidation spiral into acetyl-CoA.',
        'Palmitate nets about 106 ATP — reduced carbon is dense fuel.',
        'Even-chain fat cannot become glucose; ketones are the liver’s work-around for feeding the fasting brain.',
        'Amino acids shed nitrogen via transamination and the liver’s urea cycle; their skeletons refuel gluconeogenesis.',
        'Insulin and glucagon run the fed–fasted switch; the Randle cycle arbitrates fat versus glucose at the muscle.',
      ] },
    ],
  },
  {
    id: 'bioc-carbohydrates-lipids',
    title: 'Carbohydrates and Lipids: Fuel, Structure and Signalling',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Molecules of Life',
    tier: 'core',
    concepts: [
      'The (CH2O)n formula and the carbohydrate family',
      'Monosaccharides: glucose, galactose and fructose',
      'Disaccharides and the glycosidic bond',
      'Storage and structural polysaccharides: starch, glycogen, cellulose',
      'Fatty acids: saturated versus unsaturated',
      'Triglycerides, phospholipids and the bilayer',
      'Steroids and cholesterol',
    ],
    words: 1396,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Ask a cell for its staffing plan and it answers with two molecule families: carbohydrates for fast, soluble energy and lipids for dense storage, barriers and signals. This lesson follows both families from structure to consequence — why the same six-carbon sugar can be fuel in one linkage and timber in another, and why the shape of a fatty acid decides whether it solidifies, flows or seals a membrane. Structure decides function is the whole lesson; the chemistry of breaking these molecules down for ATP belongs to the metabolism lesson, and the survey of the cell they live in to the cell-biology lesson.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Carbs and lipids are the molecules people argue about at dinner tables — sugar, starch, saturated fat, cholesterol — and the molecules exams probe hardest because every question hides a structure-function step. Learn to move from linkage to property to role, and both the dinner argument and the answer key take care of themselves.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Carbohydrates are sugars and their polymers with the stoichiometric formula (CH2O)n — carbon plus water, one carbon for every two hydrogens and one oxygen. The simplest are monosaccharides (single sugars), usually three to seven carbons and named with the -ose suffix. The hexose glucose, C6H12O6, is the central fuel: plants make it from carbon dioxide and water, animals free it from starch, and cells oxidise it for ATP. Its two common isomers matter too — galactose, the milk-sugar partner, and fructose, the fruit sugar: same formula, different arrangement around the asymmetric carbons, different chemistry. Classify further by the carbonyl position (aldose at the chain\'s end, ketose in the middle) and chain length (triose, pentose, hexose).',
      },
      {
        kind: 'para',
        text: 'Two monosaccharides join by a dehydration reaction — one water out — to form a disaccharide held by a covalent glycosidic bond. Maltose is glucose plus glucose; lactose, the milk sugar, is galactose plus glucose; sucrose, table sugar, is glucose plus fructose. The bond\'s geometry is not cosmetic: it fixes which enzymes can cut the bond, which is why lactose needs lactase and why one sugar is digestible where a near-identical isomer is not.',
      },
      {
        kind: 'para',
        text: 'String many sugars together and you get polysaccharides, three of which run the living world. Starch is the plant\'s storage polymer, an unbranched or lightly branched chain of alpha-glucose units — digestible, harvestable, the calories of rice and wheat. Glycogen is the animal version: heavily branched for fast release from liver and muscle. Cellulose is the plant\'s structural polymer: the same glucose units but joined by beta linkages flipped relative to starch, giving straight, hydrogen-bonded fibrils that carry the wall\'s load. Humans lack cellulase, so the strongest timber in biology passes through us as fibre — identical monomer, opposite bond, opposite fate.',
      },
      {
        kind: 'para',
        text: 'Lipids are defined by behaviour, not monomers: hydrophobic molecules that will not dissolve in water. The workhorses are fatty acids — long hydrocarbon chains ending in a carboxyl group. Saturated chains carry the maximum hydrogen, run straight, and pack tight into solids (butter, lard). Unsaturated chains carry one or more double bonds whose cis kinks bend the tail, prevent packing, and make oils that stay liquid. Industry hydrogenates oils to saturate them — and accidentally builds trans fats, whose straight-yet-abnormal geometry earns their cardiovascular reputation.',
      },
      {
        kind: 'para',
        text: "Melting behaviour follows the same geometry and matters everywhere from membranes to kitchen shelves: each cis double bond lowers the melting temperature, and shorter chains do too — which is why fish living in cold water bank polyunsaturated fats that stay fluid. Two unsaturated fatty acids are essential nutrients — linoleic acid (omega-6) and linolenic acid (omega-3), both eighteen carbons — because human desaturase enzymes cannot build double bonds beyond the ninth carbon from the carboxyl end; the body manufactures the rest of the omega family from these two dietary starters. Sugars add a slower mischief of their own: free sugars — fructose most readily, then galactose and glucose — glycate proteins without any enzyme, and the accumulating advanced glycation end-products stiffen collagen, damage vessels and are tracked clinically by glycated haemoglobin, the HbA1c reading that reports a diabetic patient's average blood sugar over the preceding months.",
      },
      {
        kind: 'para',
        text: 'A triglyceride (triacylglycerol) is storage built from three fatty acids ester-linked to one glycerol, each bond formed by dehydration. Its energy density beats carbohydrate roughly sixfold — no water of hydration, a fully reduced carbon load — which is why seeds, whales and couch-bound humans all bank calories as fat. The phospholipid is the same molecule with one tail swapped for a phosphate head: hydrophobic tails plus a hydrophilic head make it amphipathic, and amphipathy spontaneously assembles every cell membrane into a bilayer — tails in, heads out — the subject of the membrane-transport lesson.',
      },
      {
        kind: 'para',
        text: 'The fourth family is the steroids: four fused rings, no fatty-acid tail. Cholesterol anchors the class — a membrane fluidity buffer that stiffens warm membranes and keeps cold ones from gelling — and is the biosynthetic trunk of the steroid hormones (testosterone, oestrogen, cortisol), small hydrophobic signals that cross membranes and switch gene expression. Waxes round out the set: long-chain esters that waterproof leaves, feathers and ears. Fuel, barrier, signal — the lipid families cover the jobs water cannot be trusted with.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Monosaccharide', def: 'A single sugar, three to seven carbons, (CH2O)n formula — glucose, galactose, fructose are the hexose trio.' },
          { term: 'Glycosidic bond', def: 'The covalent linkage between sugars, formed by dehydration; its alpha or beta geometry decides digestibility.' },
          { term: 'Polysaccharide', def: 'Long sugar polymer — starch (plant storage), glycogen (animal storage), cellulose (plant structure).' },
          { term: 'Fatty acid', def: 'Long hydrocarbon chain with a carboxyl end; saturated (straight, solid) or unsaturated (cis-kinked, liquid).' },
          { term: 'Triglyceride', def: 'Glycerol ester-linked to three fatty acids — the dense, dry energy store of seeds and animals.' },
          { term: 'Phospholipid', def: 'Diacylglycerol with a hydrophilic phosphate head; amphipathic, and therefore self-assembling into bilayers.' },
          { term: 'Steroid', def: 'Four-fused-ring lipid; cholesterol buffers membrane fluidity and templates the steroid hormones.' },
        ],
      },
      {
        kind: 'example',
        title: 'From linkage to lunch: why cellulose is fibre but starch is food',
        steps: [
          'Compare monomers: both starch and cellulose are long glucose polymers — no difference there.',
          'Compare bonds: starch links alpha-glucose (bonds on one orientation); cellulose links beta-glucose (alternate units flipped).',
          'Compare enzymes: our amylases fit the alpha geometry; cellulase, which fits beta, is absent from the human gut.',
          'Follow the consequence: starch hydrolyses to absorbable glucose — calories; cellulose passes intact as dietary fibre, though gut microbes partly digest it.',
          'Generalise: bond geometry decides enzyme fit, enzyme fit decides function — the one-step logic most carbohydrate questions want.',
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Glucose, galactose and fructose all have formula C6H12O6 but different properties. They are…',
            options: ['polymers of one another', 'structural isomers differing in arrangement', 'enantiomers', 'disaccharides'],
            answer: 1,
            explain: 'Same formula, different arrangement of atoms around the carbons — structural isomers, which is why taste, bond partners and enzyme fit all differ.',
          },
          {
            q: 'A fatty acid tail bends because it contains a cis double bond. Compared with a straight saturated tail, it will…',
            options: ['pack tighter and melt higher', 'pack loosely and stay liquid', 'cross the membrane freely', 'store more energy per gram'],
            answer: 1,
            explain: 'The cis kink disrupts packing, so unsaturated fats are oils; saturated straight chains pack tight and solidify. Per-gram energy is unchanged by the kink.',
          },
          {
            q: 'A molecule has two hydrophobic fatty-acid tails and one hydrophilic phosphate head. In water it will…',
            options: ['dissolve completely', 'form a bilayer with tails inward', 'hydrolyse into glycerol', 'crystallise like a triglyceride'],
            answer: 1,
            explain: 'Amphipathic phospholipids self-assemble into bilayers — tails hidden from water, heads facing it — the spontaneous architecture of every cell membrane.',
          },
          {
            q: 'Glycogen differs from starch mainly by being…',
            options: ['built of beta-glucose', 'more heavily branched for fast release', 'indigestible to humans', 'a phospholipid'],
            answer: 1,
            explain: 'Both are alpha-glucose storage polymers; glycogen\'s dense branching gives many free ends, so liver and muscle can mobilise glucose quickly — a sprint-fuel design.',
          },
        ],
      },
      {
        kind: 'para',
        text: 'Read every carbohydrate and lipid question through one motion: structure, then property, then role. Alpha or beta decides food or fibre; saturated or unsaturated decides solid or oil; three tails or two-plus-head decides fat store or membrane; rings decide cholesterol and hormones. Four toggles generate the whole topic — and almost every answer.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: the cell-biology lesson surveys all four macromolecule classes inside the cell; this lesson deepens two of them. Follow with the metabolism lesson for how triglycerides and amino acids are actually burned, and the organic-chemistry chapters for the reaction chemistry and identification tests of these same molecules. Standard reading: OpenStax Biology 2e, chapter 3 "Biological Macromolecules", sections 3.2 "Carbohydrates" and 3.3 "Lipids".',
        tone: 'path',
      },
    ],
  },
]
