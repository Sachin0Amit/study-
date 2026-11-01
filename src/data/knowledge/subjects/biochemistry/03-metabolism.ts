/**
 * Knowledge Universe — Biochemistry — Chapter 03: Metabolic Pathways in Depth
 * 4 lessons · 14,000 words
 * field: Biochemistry · branch: Metabolism
 *
 * §6.2 slot 3.1 (2026-11-01, master loop job 492782): Glycolysis Step by Step.
 *
 * Carved against (dedup greps: enolase / arsenate / Harden–Young / Rapoport /
 * iodoacetate / thiohemiacetal — all unique to this file):
 *   • cell-molecular-biology/04-bioenergetics.ts › bio-cellular-respiration-
 *     pathways OWNS the ten-step SURVEY paragraph, the checkpoint names and
 *     the gas arithmetic (respiratory quotient) — cited, not re-taught here.
 *   • bio-fermentation-metabolic-integration OWNS pyruvate's fates, the NAD+
 *     recycling relay, the Cori-cycle arithmetic and the fructose-2,6-
 *     bisphosphate insulin/glucagon switch — pointed to, not repeated.
 *   • bioc-enzymes-kinetics-regulation (Ch1) OWNS allosteric theory in
 *     general (PFK as its exemplar) and Michaelis kinetics.
 *   • bioc-nucleotides-nucleic-acid-chemistry (Ch1) OWNS ATP's
 *     phosphoanhydride chemistry and the adenylate pool.
 * §3.1 OWNS the reaction-by-reaction mechanism, the standard
 * free-energy table and its derivation from hydrolysis energies, the three
 * poison patterns, the Rapoport–Luebering shunt and the discovery history.
 *
 * §6.2 slot 3.2 (2026-11-01, master loop job 492782): The Citric-Acid Cycle.
 *
 * Carved against for §3.2 (dedup greps: Ogston / malonate / citryl /
 * fluorocitrate / oxalosuccinate / cis-aconitate / 2-hydroxyglutarate /
 * lethal synthesis — all unique to this file):
 *   • bio-cellular-respiration-pathways OWNS the eight-step SURVEY
 *     paragraph, the link-reaction cofactor summary, the 30–32 ATP audit and
 *     the FADH2-discount chain logic — cited, not re-taught here.
 *   • bio-fermentation-metabolic-integration OWNS the acetyl-CoA hub,
 *     anaplerosis mechanics (pyruvate carboxylase), ketogenesis and the
 *     fat-to-glucose dead-end — pointed to, not repeated.
 *   • bioc-nucleotides-nucleic-acid-chemistry (Ch1) OWNS the vitamin-cofactor
 *     logic; bioc-glycolysis-step-by-step (§3.1) OWNS substrate-level
 *     phosphorylation, the phosphohistidine relay concept and the enzymes
 *     lesson's allostery; §3.3 will own the respiratory chain.
 * §3.2 OWNS the reaction-by-reaction mechanisms (citryl-CoA, [4Fe–4S]
 * aconitase, oxalosuccinate, covalent FAD, phosphohistidine relay applied),
 * the eight-step standard ledger and its grouping derivation, the carbon
 * audit and Ogston labeling arithmetic, the three-poison fingerprints
 * (malonate, fluoroacetate, arsenite), the PDH nanomachine and its PDK/PDP
 * covalent regulation, and the discovery history (Szent-Györgyi, Martius &
 * Knoop, Krebs & Johnson, Lipmann).
 *
 * §6.2 slot 3.3 (2026-11-01, master loop job 492782): Oxidative Phosphorylation
 * & Chemiosmosis.
 *
 * Carved against for §3.3 (dedup greps: Q cycle / oligomycin / rotenone /
 * antimycin / Jagendorf / Rieske / binuclear / c-ring / dinitrophenol —
 * all unique to this file; the hits for Mitchell / Boyer / uncoupl /
 * chemiosmotic / thermogenin / DNP / ubiquinone / cytochrome c oxidase /
 * malate-aspartate / glycerol-3-phosphate shuttle were inspected and are
 * different people, different senses, or one-clause survey mentions):
 *   • cell-molecular-biology/04-bioenergetics.ts › bio-cellular-respiration-
 *     pathways OWNS the one-paragraph chain survey, the 30–32 ATP audit and
 *     its shuttle-fare clause, the RQ arithmetic and the cyanide/DNP/
 *     thermogenin one-liners — cited, not re-taught here.
 *   • bio-biochemistry-metabolism (Ch1) OWNS the ATP currency chemistry and
 *     its one-line chemiosmosis name-drop (Mitchell's 1978 Nobel).
 *   • §3.1 OWNS glycolysis's arsenate "uncoupling" sense; §3.2 OWNS the
 *     succinate-dehydrogenase/complex-II hand-off and the FADH2-discount
 *     pointer that this lesson cashes ("a story the next lesson tells").
 *   • photosynthesis lessons (cell-bio 04.3, botany Ch2) OWN the chloroplast
 *     twin — light-driven proton gradients — pointed to, not repeated.
 * §3.3 OWNS the machine level: complexes I–IV cofactor-by-cofactor with
 * proton counts, the Q cycle, the proton-motive force and its derivation,
 * the P/O derivation, ATP synthase mechanics (c-ring, γ stalk, binding
 * change), shuttle mechanics, respiratory control, uncouplers (DNP, UCP1),
 * the reactive-oxygen leak, the inhibitor map and the history (Keilin,
 * Belitzer, Slater, Mitchell, Boyer, Walker).
 *
 * §6.2 slot 3.4 (2026-11-01, master loop job 492782): Carbohydrate & Lipid
 * Traffic.
 *
 * Carved against for §3.4 (dedup greps: glycogenin / UDP-glucose / von
 * Gierke / McArdle / transketolase / G6PD / PEPCK / acetyl-CoA carboxylase
 * / glucose-6-phosphatase / malic enzyme / citrate shuttle / acyl-CoA
 * synthetase / Heinz — all unique to this file; fructokinase hits were
 * phosphofructokinase substrings; the hits for carnitine / malonyl /
 * pentose / thiolase / palmitate / gluconeogenesis / β-oxidation /
 * ketogenesis / glycogen phosphorylase were inspected and are the
 * molecule-level survey in Ch1, the one-clause integration mentions in
 * cell-bio 04.2, the signaling-cascade example in cell-bio 02, or §3.1/§3.3
 * senses already carved):
 *   • bio-fermentation-metabolic-integration (cell-bio 04.2) OWNS the
 *     fed/fasted organ map, Cori-cycle arithmetic (its "six ATP" is DERIVED
 *     here), the F2,6BP insulin/glucagon switch, AMPK, the ketone bridge,
 *     anaplerosis and the odd-chain/propionate door — cited, not re-taught.
 *   • Ch1 molecules-of-life OWNS carnitine the molecule, the palmitate-106
 *     survey ledger, glycerol→DHAP and fat chemistry; nutrition-science OWNS
 *     essential-fatty-acid diet facts; the organelle atlas OWNS lysosomes
 *     (Pompe pointed to); immunology OWNS the phagocyte NADPH oxidase.
 *   • §3.1 OWNS glycolysis reactions incl. PFK-1; §3.2 owns the wheel
 *     (acetyl-CoA outflow cited); §3.3 owns the chain ledger that prices
 *     every FADH2/NADH named here, and the ROS/GSH context this lesson only
 *     cites for G6PD.
 * §3.4 OWNS the granule machine (phosphorolysis, PLP-as-wrench, debranching,
 * GSD fingerprints von Gierke/Cori/Hers/McArdle/Pompe), the gluconeogenesis
 * bypasses with the six-bond bill DERIVED, the pentose-phosphate lane with
 * its carbon-shuffle ledger, the β-oxidation spiral with the stearate-120
 * ledger, the synthesis workshop with the NADPH bill, the malonyl-CoA
 * traffic light, and the histories (Cori, Sutherland, Fischer & Krebs,
 * Utter & Keech, Warburg's Zwischenferment, Horecker, Knoop, Fritz,
 * Wakil, Vagelos, McGarry & Foster, Luzzatto).
 *
 * Lesson text contains no exam names (charter rule 5).
 *
 * After editing, run: bun run scripts/serialize-content.ts
 */
import type { KnowledgeTopic } from '../../types'

export const biochemistryCh03: KnowledgeTopic[] = [
  {
    id: 'bioc-glycolysis-step-by-step',
    title: 'Glycolysis Step by Step: Ten Reactions, One Ancient Machine',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Metabolism',
    tier: 'intermediate',
    concepts: [
      'Ten cytosolic reactions: one glucose to two pyruvates',
      'The investment phase: two ATP to trap, destabilise and split',
      'The payoff phase (×2): four ATP and two NADH from the triose pair',
      'Substrate-level phosphorylation: acyl phosphates as phosphate vaults',
      'Three irreversible stations: hexokinase, PFK-1, pyruvate kinase',
      'Poisons on the ladder: arsenate, fluoride, iodoacetate',
      'A century of discovery: Buchner, Harden, Meyerhof, Embden, Parnas',
    ],
    words: 3500,
    readMins: 18,
    addedOn: '2026-11-02',
    blocks: [
      {
        kind: 'para',
        text: 'Glycolysis is the oldest engine in biology: a ten-reaction assembly line in the cytosol that takes one glucose, spends two ATP priming it, splits it in half, and draws out four ATP and two NADH — a net two ATP and two NADH, with no oxygen asked for anywhere on the ladder. Its enzymes appear in every living thing examined, its reactions can run under the oxygen-free conditions of the Archean oceans with metal ions standing in for proteins, and every later pathway — the citric-acid cycle, the chain, the fermentation portfolio — is plumbing bolted onto this machine. This lesson walks the ten reactions one at a time, as three generations of biochemists assembled them from yeast juice and muscle extract.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'This pathway rises bread, brews beer, sprints muscles, keeps red cells alive and supplies a third of clinical biochemistry. The ATP ledger built here is the arithmetic every later pathway is audited against; the poison patterns — arsenate, fluoride, iodoacetate — are where toxicology meets the ladder; and the regulation story is the template for how pathways are throttled.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'How this lesson is scoped',
        text: 'The cell-biology book’s cellular-respiration lesson already gave the ten-step survey — its compressed walkthrough, the checkpoint names and the gas arithmetic; read it first if the pathway is new. This lesson owns the reaction-by-reaction enzymology: each step’s mechanism, the free-energy table and its derivation, the poisons, the red-cell shunt and the history. The fermentation-and-integration lesson owns the fate of the NADH and the pyruvate; this book’s enzymes lesson owns allosteric theory.',
        tone: 'path',
      },
      { kind: 'heading', text: 'A Century to Read a Ten-Line Recipe' },
      {
        kind: 'para',
        text: 'The reading took almost a hundred years. It opened in the 1850s with the French wine industry’s trouble: vats turned sour instead of fermenting, and Louis Pasteur’s investigation established that fermentation is the work of living yeasts — which slow their glucose intake when air is present, the Pasteur effect. Pasteur believed fermentation required life itself. Eduard Buchner broke that spell in 1897: pressed yeast juice, freed of every cell, still fermented sugar to alcohol — the active principle he named zymase. The demonstration that reactions of life proceed outside life earned him the 1907 Nobel Prize and founded biochemistry as an experimental science.',
      },
      {
        kind: 'para',
        text: 'Arthur Harden and William Young spent 1905–1911 pulling pieces apart. Their fermenting yeast juice stalled, and restarted the moment inorganic phosphate was added — proof the sugar was being built into phosphate esters, one of which, fructose 1,6-bisphosphate, they isolated as the “Harden–Young ester”, the first fermentation intermediate ever found. A second experiment separated the machinery: boiled (protein-dead) extract restored fermentation to dialysed juice — the catalysts are heat-sensitive proteins, their partners ADP, ATP, NAD+ are heat-stable cofactors. Harden took the 1929 chemistry Nobel for it, the year Karl Lohmann isolated ATP itself. Otto Meyerhof — honoured with the 1922 Prize alongside A.V. Hill for the lactic-acid/oxygen relation in muscle — extracted the enzymes from muscle and recombined them into an artificial run from glycogen to lactate, then showed yeast and muscle run the same machine. Gustav Embden set down the full step-by-step outline in 1933, just before his death; Jakub Parnas contributed the phosphorolysis logic, and by the 1940s the puzzle was complete — the pathway bears all three names: Embden–Meyerhof–Parnas.',
      },
      { kind: 'heading', text: 'The Design Logic: Why Ten Steps, Why Phosphate' },
      {
        kind: 'para',
        text: 'A cell cannot burn glucose the way a flame does — the full standard drop of about 2,840 kilojoules per mole would flash away as heat before any could be banked. Glycolysis is the alternative: take the molecule apart in ten small, controlled moves, each nudged by its own enzyme, catching energy at two moments as ATP and one as NADH. The organising trick is phosphorylation, which does three things at once: the charge makes the sugar a prisoner (no transporter carries it out), the tag marks it for the cell’s own enzymes, and the bulky groups destabilise the ring for the cleavage to come. The ATP spent up front is not a loss — it is a loan, recovered with interest in the second half.',
      },
      {
        kind: 'para',
        text: 'The ten reactions divide into two phases with opposite signs. The investment phase (steps 1–5) spends two ATP preparing and splitting the six-carbon sugar; the payoff phase (steps 6–10) harvests four ATP and two NADH. One accounting rule governs everything downstream: from step 6 onward every reaction runs TWICE per glucose, once on each triose — every per-triose number must be doubled in the ledger. And one structural fact shapes regulation: seven of the ten reactions sit near equilibrium, never throttleable — all control lives at the three strongly exergonic “stations”, steps 1, 3 and 10.',
      },
      { kind: 'heading', text: 'Investment Phase: Steps 1 to 5' },
      {
        kind: 'para',
        text: 'Step 1, hexokinase: an Mg2+-chelated ATP phosphorylates glucose at carbon 6, giving glucose 6-phosphate at a standard cost of −16.7 kJ/mol. The reaction is product-inhibited — glucose 6-phosphate is the enzyme’s own brake. Animals add a liver isozyme, glucokinase (hexokinase IV), with a deliberately poor appetite: half-saturation near 10 mM blood glucose instead of 0.1 mM, no product inhibition. The division of labour: ordinary hexokinase serves tissues that must grab glucose even when scarce, while the liver’s glucokinase opens its gate only when glucose floods in after a meal, making the liver a buffer of blood sugar rather than a hoarder of it.',
      },
      {
        kind: 'para',
        text: 'Step 2, phosphoglucose isomerase, shifts the carbonyl from carbon 1 to carbon 2, turning the aldose glucose 6-phosphate into the ketose fructose 6-phosphate (+1.7 kJ/mol, freely reversible). The point of the shuffle is chemical: a ketose cleaves symmetrically into two comparable three-carbon pieces, and the carbonyl at carbon 2 stabilises the carbanion chemistry aldolase will need. Step 3, phosphofructokinase-1, pays the second ATP at fructose 6-phosphate’s carbon 1 (−14.2 kJ/mol): fructose 1,6-bisphosphate, the Harden–Young ester. This is the committed step — the first reaction unique to glycolysis, irreversible, the pathway’s master valve; this book’s enzymes lesson used PFK-1 as its allosteric exemplar, and the fructose-2,6-bisphosphate hormone switch belongs to the integration lesson. Structurally, the second phosphate destabilises the ring so the next step can split it.',
      },
      {
        kind: 'para',
        text: 'Step 4, aldolase, cuts the six-carbon sugar between carbons 3 and 4 (+23.8 kJ/mol — the most uphill standard change of the pathway, yet in the cell it proceeds briskly because the products are drained downstream). Two classes do it: class I aldolases of animals and plants form a covalent Schiff base between an active-site lysine and the substrate, pulling the bond apart by electron delocalisation; class II enzymes of fungi and bacteria use a bound zinc ion instead. The products are dihydroxyacetone phosphate (DHAP) and glyceraldehyde 3-phosphate (G3P), and only G3P can continue. Step 5, triose phosphate isomerase, converts every DHAP into a second G3P (+7.5 kJ/mol) — with what mechanistic work by Jeremy Knowles’ group made the textbook example of catalytic perfection: kcat/Km near 2 × 10⁸ M⁻¹s⁻¹, the diffusion limit, where every substrate molecule that reaches the active site is converted before it can leave. The payoff phase is guaranteed exactly two G3P per glucose.',
      },
      { kind: 'heading', text: 'Payoff Phase: Steps 6 to 10, Run Twice' },
      {
        kind: 'para',
        text: 'Step 6, glyceraldehyde-3-phosphate dehydrogenase (GAPDH), is the pathway’s masterpiece: it oxidises an aldehyde and banks the released energy as an acyl phosphate, using INORGANIC PHOSPHATE — no ATP touched (+6.3 kJ/mol standard). The mechanism, a four-stroke engine on one active-site cysteine (Cys-149 in the classic rabbit-muscle enzyme): the cysteine adds to the aldehyde as a thiohemiacetal; a hydride leaves for NAD+; inorganic phosphate attacks the thioester; and 1,3-bisphosphoglycerate departs with its acyl-phosphate bond while NADH + H+ carry the electrons away. Iodoacetate alkylates that same cysteine and kills the pathway outright. And chemistry pulls the step along: the cytosolic NAD+/NADH ratio sits near 1,000, dragging the oxidation far past its modest standard value.',
      },
      {
        kind: 'para',
        text: 'Step 7, phosphoglycerate kinase, cracks the vault: the acyl phosphate of 1,3-bisphosphoglycerate (hydrolysis −49.4 kJ/mol) hands its phosphate to ADP, minting one ATP per triose (−18.5 to −19 kJ/mol for the coupled reaction). This is substrate-level phosphorylation — ATP made by direct phosphate transfer on an enzyme surface, no membrane, no oxygen — and the step is the break-even: two invested, two recovered. Note the built-in throttle: the step requires ADP, so an ATP-flooded cell brakes here automatically. Step 8, phosphoglycerate mutase, moves the phosphate from carbon 3 to carbon 2 (+4.4 kJ/mol) by relay — the enzyme carries its own phosphate on a histidine, hands it to the substrate to form a bound 2,3-bisphosphoglycerate, then withdraws the other phosphate. A mutase ferries a group within a molecule.',
      },
      {
        kind: 'para',
        text: 'Step 9, enolase, plucks water out of 2-phosphoglycerate to give phosphoenolpyruvate (PEP, +1.8 kJ/mol) by an E1cB elimination, with two Mg2+ ions at the active site — one holding the substrate, one running the chemistry. Fluoride sits in that magnesium site and freezes the enzyme: 2-phosphoglycerate piles up behind the dam and glycolysis stalls before its final payday. This is the fluoride block, worked out in Otto Warburg’s laboratory; clinically, blood tubes for glucose measurement carry fluoride so the sample’s own cells cannot consume the glucose en route to the lab. Step 10, pyruvate kinase, delivers the largest pull of the pathway (−31.4 kJ/mol): PEP holds pyruvate in its unstable enol form, and PEP’s phosphate is the highest-energy group in the cell (hydrolysis −61.9 kJ/mol) — the moment the phosphate leaves, the enol snaps into the resonance-stabilised keto form, the tautomerisation that makes the vault so deep. ADP leaves with ATP, pyruvate leaves for its three fates, and fructose 1,6-bisphosphate feeds forward to activate the enzyme that finishes the job.',
      },
      {
        kind: 'figure',
        caption: 'The glycolysis ladder — two phases, one ledger. LEFT: the ten reactions. Investment phase: hexokinase and PFK-1 each spend an ATP (stations 1 and 3), aldolase splits fructose 1,6-bisphosphate into DHAP and G3P, triose phosphate isomerase converts the DHAP — the payoff phase runs on two G3P, every reaction from step 6 TWICE. Payoff phase: GAPDH oxidises G3P with inorganic phosphate to 1,3-BPG (NADH out), phosphoglycerate kinase cashes the acyl phosphate (break-even), phosphoglycerate mutase and enolase set up PEP, pyruvate kinase (station 3) mints the last two ATP. RIGHT: the standard free-energy profile — near-equilibrium ripples broken by three big drops (−16.7, −14.2, −31.4 kJ/mol) and the aldolase bump (+23.8 standard, pulled flat in the cell); net standard −72.7 kJ/mol, cellular in the red cell about −96.',
        afterConcept: 4,
        svg: `<svg viewBox="0 0 880 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The ten glycolysis reactions as a two-phase ladder with ATP investments and returns, beside the standard free-energy profile with three big drops and the aldolase bump">
  <style>.lbl{font-family:Georgia,serif;font-size:14px;fill:#3f3f46}.big{font-size:18px;font-weight:bold}.sm{font-size:12px;fill:#52525b}.ink{stroke:#8a8a93;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.thin{stroke:#b8b8c0;fill:none;stroke-width:1.6}.rose{fill:#e11d48}.vio{fill:#7c3aed}.box{fill:none;stroke:#c8c8d0;stroke-width:1.6;stroke-dasharray:5 4}.midb{font-family:Georgia,serif;font-size:13.5px;font-weight:bold;fill:#3f3f46;text-anchor:middle}.node{fill:#fafafa;stroke:#8a8a93;stroke-width:2}</style>
  <text class="lbl big" x="28" y="34" fill="#3f3f46">The glycolysis ladder — two phases, one ledger</text>
  <rect x="24" y="52" width="404" height="216" rx="12" class="box"/>
  <text class="lbl" x="40" y="76" font-weight="bold">INVESTMENT PHASE · steps 1–5</text>
  <text class="sm" x="40" y="93">two ATP spent to trap, destabilise and split</text>
  <rect x="52" y="106" width="118" height="26" rx="6" class="node"/><text class="lbl" x="111" y="124" text-anchor="middle">glucose</text>
  <path class="ink" d="M170 119 L206 119"/><path d="M212 119 l-8 -4 v8 z" class="rose"/>
  <text class="sm" x="172" y="112" fill="#e11d48">ATP −1 · HK ⬤</text>
  <rect x="214" y="106" width="130" height="26" rx="6" class="node"/><text class="lbl" x="279" y="124" text-anchor="middle">glucose 6-P</text>
  <path class="ink" d="M279 132 L279 154"/><path d="M279 160 l-4 -8 h8 z" fill="#8a8a93"/>
  <text class="sm" x="286" y="150">isomerase: aldose → ketose</text>
  <rect x="214" y="162" width="130" height="26" rx="6" class="node"/><text class="lbl" x="279" y="180" text-anchor="middle">fructose 6-P</text>
  <path class="ink" d="M170 175 L206 175"/><path d="M212 175 l-8 -4 v8 z" class="rose"/>
  <text class="sm" x="160" y="168" fill="#e11d48">ATP −1 · PFK-1 ⬤</text>
  <rect x="52" y="162" width="118" height="26" rx="6" class="node"/><text class="lbl" x="111" y="180" text-anchor="middle">fructose 1,6-P₂</text>
  <path class="ink" d="M111 188 L111 212"/>
  <text class="sm" x="118" y="205">aldolase cleaves (+23.8 std)</text>
  <rect x="52" y="214" width="104" height="24" rx="6" class="node"/><text class="lbl" x="104" y="231" text-anchor="middle">DHAP</text>
  <path class="ink" d="M156 226 C 186 226 186 246 208 246"/>
  <text class="sm" x="162" y="220">isomerase → G3P</text>
  <rect x="210" y="234" width="104" height="24" rx="6" class="node"/><text class="lbl" x="262" y="251" text-anchor="middle">G3P ×2</text>
  <rect x="24" y="282" width="404" height="222" rx="12" class="box"/>
  <text class="lbl" x="40" y="306" font-weight="bold">PAYOFF PHASE · steps 6–10 · ×2</text>
  <text class="sm" x="40" y="323">four ATP, two NADH per glucose · break-even at PGK</text>
  <rect x="52" y="334" width="96" height="24" rx="6" class="node"/><text class="lbl" x="100" y="351" text-anchor="middle">G3P</text>
  <path class="ink" d="M148 346 L184 346"/><path d="M190 346 l-8 -4 v8 z" fill="#8a8a93"/>
  <text class="sm" x="126" y="332" fill="#7c3aed">NADH ↑ GAPDH (Pi, not ATP)</text>
  <rect x="192" y="334" width="118" height="24" rx="6" class="node"/><text class="lbl" x="251" y="351" text-anchor="middle">1,3-BPG</text>
  <path class="ink" d="M251 358 L251 380"/><path d="M251 386 l-4 -8 h8 z" fill="#8a8a93"/>
  <path class="ink" d="M312 346 L348 346" transform="translate(0,0)"/>
  <path d="M354 346 l-8 -4 v8 z" class="rose"/>
  <text class="sm" x="318" y="332" fill="#e11d48">ATP +1 · PGK</text>
  <rect x="356" y="334" width="62" height="24" rx="6" class="node"/><text class="lbl" x="387" y="351" text-anchor="middle">3-PG</text>
  <path class="ink" d="M387 358 L387 380"/><path d="M387 386 l-4 -8 h8 z" fill="#8a8a93"/>
  <text class="sm" x="394" y="374">mutase relay · enolase (−H₂O)</text>
  <rect x="356" y="388" width="62" height="24" rx="6" class="node"/><text class="lbl" x="387" y="405" text-anchor="middle">PEP</text>
  <path class="ink" d="M356 400 L320 400"/><path d="M314 400 l8 -4 v8 z" class="rose"/>
  <text class="sm" x="322" y="420" fill="#e11d48">ATP +1 · pyruvate kinase ⬤</text>
  <rect x="196" y="388" width="118" height="24" rx="6" class="node"/><text class="lbl" x="255" y="405" text-anchor="middle">pyruvate ×2</text>
  <path class="ink" d="M196 400 L160 400 L160 430"/><path d="M160 436 l-4 -8 h8 z" fill="#8a8a93"/>
  <text class="sm" x="60" y="452">⬤ = station: irreversible, throttled (HK, PFK-1, PK)</text>
  <text class="sm" x="60" y="470">feed-forward: fructose 1,6-P₂ activates pyruvate kinase</text>
  <text class="sm" x="60" y="488" font-weight="bold" fill="#3f3f46">net: 2 ATP + 2 NADH per glucose · no oxygen used</text>
  <rect x="452" y="52" width="404" height="452" rx="12" class="box"/>
  <text class="lbl" x="470" y="78" font-weight="bold">Standard free-energy profile</text>
  <text class="sm" x="470" y="96">near-equilibrium ripples · three big drops · one bump</text>
  <line x1="492" y1="440" x2="836" y2="440" class="ink"/>
  <line x1="492" y1="440" x2="492" y2="120" class="ink"/>
  <text class="sm" x="700" y="462">reaction progress →</text>
  <text class="sm" x="470" y="114">free energy</text>
  <path class="ink" d="M500 160 L520 160 L532 186 L544 186 L556 210 L588 210 L616 170 L628 170 L640 168 L660 168 L672 200 L700 200 L724 190 L748 190 L760 184 L772 184 L796 300 L820 300 L832 322"
        fill="none" stroke="#e11d48" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  <text class="sm" x="498" y="152">glucose</text>
  <text class="sm" x="522" y="204">HK −16.7</text>
  <text class="sm" x="588" y="202">PFK-1 −14.2</text>
  <text class="sm" x="612" y="162">aldolase +23.8 (std)</text>
  <text class="sm" x="668" y="218" transform="rotate(6 668 218)">pulled flat in the cell</text>
  <text class="sm" x="676" y="192">PGK −18.5</text>
  <text class="sm" x="736" y="182">enolase +1.8</text>
  <text class="sm" x="786" y="330">PK −31.4</text>
  <text class="sm" x="796" y="412">pyruvate ×2</text>
  <text class="lbl" x="470" y="492" font-weight="bold">net standard −72.7 kJ/mol · cellular ≈ −96</text>
</svg>`,
      },
      { kind: 'heading', text: 'The Energetics, Derived' },
      {
        kind: 'derivation',
        title: 'From two hydrolysis energies to the whole pathway ledger',
        statement:
          'Two canonical hydrolysis energies — phosphoenolpyruvate −61.9 kJ/mol and 1,3-bisphosphoglycerate −49.4 kJ/mol — predict the two substrate-level steps, and summing all ten standard changes gives the pathway’s overall pull.',
        prerequisites: [
          'ATP hydrolysis to ADP: ΔG°′ = −30.5 kJ/mol',
          'For coupled reactions, ΔG°′ values add',
        ],
        steps: [
          {
            label: 'Step 7 (PGK): acyl phosphate → ATP',
            formula: '\\Delta G^{\\circ\\prime} = -49.4 + 30.5 = -18.9\\ \\text{kJ/mol}',
            explanation:
              '1,3-BPG’s acyl phosphate hydrolyses to 3-phosphoglycerate, releasing 49.4 kJ/mol; synthesising ATP from ADP costs 30.5. The tables print −18.5 to −19 — this value is derived, not independently measured.',
          },
          {
            label: 'Step 10 (PK): PEP → ATP',
            formula: '\\Delta G^{\\circ\\prime} = -61.9 + 30.5 = -31.4\\ \\text{kJ/mol}',
            explanation:
              'The deepest vault on the ladder; the surplus over ATP is the enol-to-keto tautomerisation of pyruvate, which is why PEP outranks 1,3-BPG by 12.5 kJ/mol.',
          },
          {
            label: 'Preparatory sum (steps 1–5)',
            formula: '-16.7 + 1.7 - 14.2 + 23.8 + 7.5 = +2.1\\ \\text{kJ/mol}',
            explanation:
              'The investment phase buys chemistry, not energy: the two ATP hydrolyses pay for the aldolase cleavage and leave the ledger almost flat.',
          },
          {
            label: 'Payoff sum per triose (steps 6–10)',
            formula: '6.3 - 18.5 + 4.4 + 1.8 - 31.4 = -37.4\\ \\text{kJ/mol}',
            explanation:
              'Standard values, and each reaction runs twice per glucose — the doubling is where most bookkeeping errors are born.',
          },
          {
            label: 'Overall, per glucose',
            formula: '\\Delta G^{\\circ\\prime} = +2.1 + 2 \\times (-37.4) = -72.7\\ \\text{kJ/mol}',
            explanation:
              'Books print slightly different sums because the ionic standard states of the magnesium-bound, ionised phosphorylated intermediates differ — ΔG°′ is convention-laden.',
          },
        ],
        result:
          'Standard pull ≈ −72.7 kJ/mol per glucose; under real red-cell concentrations the actual pull is steeper, about −96 kJ/mol — and with the cytosolic NAD+/NADH ratio near 1,000, even the “uphill” standard steps sit at near-equilibrium in vivo.',
      },
      {
        kind: 'example',
        title: 'Worked Example — The Full ATP Ledger',
        steps: [
          'Investment: hexokinase spends 1 ATP, PFK-1 spends 1 ATP — total out: 2.',
          'First return: phosphoglycerate kinase runs twice — 2 ATP back. Two out, two in: the break-even point.',
          'Second return: pyruvate kinase runs twice — 2 more ATP. Gross 4, net 4 − 2 = 2 ATP per glucose.',
          'Electrons: 2 NADH, worth 2.5 ATP each through the chain — 5 more ATP-equivalents, so glycolysis banks 7 of the roughly 32 a glucose is worth: 7/32 ≈ 22%.',
          'Energy check: complete oxidation of glucose releases about 2,840 kJ/mol; glycolysis’s pull is −72.7 (cellular ≈ −96). The rest of the fire is still stored in the two pyruvates — which is why the citric-acid chapter has somewhere to go.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — Three Poisons, Three Patterns',
        steps: [
          'Setup: a red cell running glycolysis normally nets 2 ATP per glucose (4 gross − 2 invested).',
          'Arsenate (mimics phosphate at step 6): the product is 1-arseno-3-phosphoglycerate, which hydrolyses spontaneously to 3-phosphoglycerate — step 7 is bypassed, and PGK’s 2 ATP never form. Net: 2 (pyruvate kinase) − 2 (invested) = 0. Flux continues; the ATP leaks away — uncoupling without blocking.',
          'Fluoride (freezes enolase, step 9): no phosphoenolpyruvate, pyruvate kinase starves. Only PGK’s 2 ATP arrive: 2 − 2 = 0 — 2-phosphoglycerate accumulates behind the dam.',
          'Iodoacetate (alkylates GAPDH’s active-site cysteine, step 6): flux stops outright — no ATP at all, the ladder backs up behind G3P.',
          'The diagnostic pattern: arsenate and fluoride both land the cell at net zero but with different traffic jams — 3-phosphoglycerate versus 2-phosphoglycerate — while iodoacetate gives a hard stop. The buildup is the fingerprint of the block.',
        ],
      },
      { kind: 'heading', text: 'Three Stations and the Cell’s Throttle' },
      {
        kind: 'para',
        text: 'Only the three strongly exergonic steps can be regulated — a near-equilibrium reaction pushed backward simply reverses — so flux control sits at steps 1, 3 and 10. PFK-1 is the master valve: ATP and citrate inhibit it, AMP relieves it, and fructose 2,6-bisphosphate — the hormone-flipped signal the integration lesson details — powerfully activates it; the enzymes lesson showed the allosteric curve. Downstream, fructose 1,6-bisphosphate feeds forward to activate pyruvate kinase, an unusual upstream-activates-downstream arrangement that keeps the two payoff stations flowing together. Upstream, hexokinase is pinned by its own product while liver glucokinase is not — one grabs what it needs, the other buffers the bloodstream. And over everything hangs the Pasteur effect: supply oxygen and the yeast’s glucose consumption drops, because the respiratory chain — not the ladder — becomes the bottleneck; the NAD+ arithmetic is the fermentation lesson’s story.',
      },
      { kind: 'heading', text: 'The Red Cell’s Shortcut and Its Price' },
      {
        kind: 'para',
        text: 'The erythrocyte runs glycolysis as its only ATP source — no mitochondria, no chain — and it bends the ladder to a second purpose. A shunt enzyme, bisphosphoglycerate mutase, diverts some 1,3-BPG sideways to 2,3-bisphosphoglycerate (about 4 mM in the red cell — nearly as concentrated as ATP), and a phosphatase returns it to 3-phosphoglycerate; the detour skips phosphoglycerate kinase, each pass costing that step’s ATP. The prize: 2,3-BPG is the lever that unloads oxygen from haemoglobin, and the haemoglobin lesson owns that story. But a shortcut inside an essential machine has a price: pyruvate kinase deficiency, the commonest glycolytic enzyme defect, leaves red cells ATP-starved and rigid, and the spleen removes them — haemolytic anaemia. When a pathway is a tissue’s only fuel line, its enzymes sit one mutation from a tissue-specific disease.',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Clinical chemistry: glucose-measurement blood tubes carry fluoride to freeze enolase, stopping the sample’s cells from consuming the glucose before it is measured.',
          'Transfusion medicine: stored red cells survive on glycolysis alone; the rundown of their ATP is a blood bank’s shelf-life clock.',
          'Fermentation industries: bread, beer and wine are this pathway plus the NAD+-recycling relay the fermentation lesson details — Pasteur’s wine problem was glycolysis all along.',
          'Oncology and imaging: many tumours run glycolysis ferociously even with oxygen present (the Warburg effect), which is how fluorinated glucose analogues light up tumours on PET scans.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Five slips recur. First, the phosphate GAPDH attaches in step 6 comes from inorganic phosphate, not from ATP — the investment was steps 1 and 3 only. Second, net versus gross: four ATP are made, two were spent, and break-even arrives only at phosphoglycerate kinase. Third, payoff-phase standard values are per triose — double them for a per-glucose ledger. Fourth, aldolase’s +23.8 kJ/mol is a standard-state number: in the cell the products are drained instantly downstream and mass action pulls the cleavage along. Fifth, fermentation makes no ATP of its own — its job is to regenerate the NAD+ this pathway consumed.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'investment (preparatory) phase', def: 'Steps 1–5: two ATP spent to trap, destabilise and split glucose — an energy loan, not a loss.' },
          { term: 'payoff phase', def: 'Steps 6–10, run twice per glucose: four ATP and two NADH; the break-even sits at phosphoglycerate kinase.' },
          { term: 'substrate-level phosphorylation', def: 'ATP made by direct transfer of a phosphate from a high-energy substrate (1,3-BPG, PEP) to ADP — no membrane, no oxygen.' },
          { term: 'acyl phosphate', def: 'A carboxyl–phosphate anhydride bond (1,3-BPG’s kind), hydrolysis about −49 kJ/mol — the payoff phase’s currency.' },
          { term: 'committed step', def: 'PFK-1’s reaction — the first unique to glycolysis; once past it, the glucose is committed to the pathway.' },
          { term: 'mutase', def: 'An enzyme that ferries a group within a molecule — phosphoglycerate mutase relays a phosphate from C3 to C2 through a bound 2,3-BPG intermediate.' },
          { term: 'Rapoport–Luebering shunt', def: 'The red-cell detour diverting 1,3-BPG to 2,3-BPG (haemoglobin’s oxygen lever) at the price of phosphoglycerate kinase’s ATP.' },
          { term: 'Pasteur effect', def: 'Oxygen slows glucose consumption — the respiring cell burns sugar thriftily because the chain, not glycolysis, becomes the bottleneck.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Phosphoglycerate kinase has just processed both trioses. How many ATP has the pathway netted so far?',
            options: ['+2', '+1', '0', '−2'],
            answer: 2,
            explain: 'Two were invested (steps 1 and 3), two recovered at PGK (×2): net zero — the profit still comes at pyruvate kinase.',
          },
          {
            q: 'PEP hydrolysis releases −61.9 kJ/mol; ATP synthesis from ADP costs +30.5. The standard ΔG°′ of pyruvate kinase is therefore:',
            options: ['−92.4 kJ/mol', '−61.9 kJ/mol', '−31.4 kJ/mol', '−30.5 kJ/mol'],
            answer: 2,
            explain: 'Coupled reactions add: −61.9 + 30.5 = −31.4 kJ/mol — the largest pull of the pathway, derivable in one line rather than memorised.',
          },
          {
            q: 'Arsenate is substituted for phosphate in step 6. What happens?',
            options: [
              'Flux stops at step 6',
              'Flux continues, but step 7’s ATP is lost',
              'The ATP yield is unchanged',
              'NADH is no longer produced',
            ],
            answer: 1,
            explain: 'The arseno analogue hydrolyses spontaneously to 3-phosphoglycerate, bypassing PGK: flux continues, 2 ATP are lost, net = 2 (PK) − 2 (invested) = 0.',
          },
          {
            q: 'Aldolase’s standard ΔG°′ is +23.8 kJ/mol, yet cleavage proceeds briskly in the cell. Why?',
            options: [
              'The enzyme lowers ΔG°′',
              'The products are drained instantly downstream, so mass action pulls the reaction forward',
              'The cell heats the cytosol',
              'DHAP recombines faster than it forms',
            ],
            answer: 1,
            explain: 'ΔG = ΔG°′ + RT·ln Q: TPI and GAPDH keep the triose phosphates scarce, Q collapses, and the actual ΔG sits near equilibrium.',
          },
          {
            q: 'Where does the phosphate attached in step 6 come from?',
            options: ['ATP', 'Inorganic phosphate (Pi)', 'The enzyme’s own phosphohistidine', 'G3P’s own carbon-1 hydroxyl'],
            answer: 1,
            explain: 'GAPDH oxidises the aldehyde and captures the energy by phosphorolysis with Pi — oxidation energy becomes an acyl phosphate without spending ATP.',
          },
          {
            q: 'Why does the liver run glucokinase (half-saturation near 10 mM glucose) rather than ordinary hexokinase (near 0.1 mM)?',
            options: [
              'To grab glucose even at fasting levels',
              'To act as a blood-glucose buffer — taking up heavily only when glucose is plentiful',
              'It makes more ATP per glucose',
              'To avoid using magnesium',
            ],
            answer: 1,
            explain: 'High Km means low affinity: the liver leaves scarce glucose for the brain and processes it in bulk after a meal — buffering, not hoarding; it also lacks product inhibition.',
          },
          {
            q: 'A blood sample for glucose measurement is drawn into a fluoride tube. Which step is blocked, and what accumulates?',
            options: ['Hexokinase; glucose-6-phosphate', 'Enolase; 2-phosphoglycerate', 'Pyruvate kinase; PEP', 'GAPDH; 1,3-BPG'],
            answer: 1,
            explain: 'Fluoride locks the Mg2+ at enolase’s active site; 2-phosphoglycerate piles up and the sample’s cells stop consuming the glucose the lab is about to measure.',
          },
          {
            q: 'Triose phosphate isomerase is called “kinetically perfect”. That means:',
            options: [
              'Its active site is chemically perfect',
              'It converts every substrate molecule that reaches it — the rate is limited by diffusion, not chemistry',
              'It never makes mistakes',
              'It works at infinite speed',
            ],
            answer: 1,
            explain: 'kcat/Km ≈ 2 × 10⁸ M⁻¹s⁻¹ is the diffusion limit: every collision is productive — chemistry tuned to match supply.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Grounding: Nelson & Cox, Lehninger Principles of Biochemistry — the glycolysis chapter and its free-energy table, which this lesson derived from hydrolysis energies; Berg, Tymoczko & Stryer, Biochemistry — the glycolysis chapter; Chandel (2021), “Glycolysis,” Cold Spring Harbor Perspectives in Biology 13:a040535; Harden’s 1929 Nobel lecture on phosphate in alcoholic fermentation. Carve notes: the cell-biology respiration lesson owns the ten-step survey and the gas arithmetic; the fermentation-and-integration lesson owns pyruvate’s fates and the NAD+ relay; this book’s enzymes lesson owns allosteric theory; the haemoglobin lesson owns 2,3-BPG’s oxygen story. Next: §3.2 — pyruvate’s ride into the mitochondrion and the citric-acid cycle’s eight steps.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'bioc-citric-acid-cycle',
    title: 'The Citric-Acid Cycle: Eight Steps Around One Catalytic Wheel',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Metabolism',
    tier: 'intermediate',
    concepts: [
      'Pyruvate dehydrogenase: the one-way gateway with a swinging lipoyl arm',
      'Eight steps: condense, rearrange, decarboxylate twice, cash a GTP, rehydrate, regenerate',
      'Three control stations: citrate synthase, isocitrate dehydrogenase, α-ketoglutarate dehydrogenase',
      'Per turn: 3 NADH, 1 FADH2, 1 GTP, 2 CO2 — carriers are the product, not ATP',
      'Standard ledger −50.3 kJ/mol per turn, derived by grouping pulls, climbs and ripples',
      'Three poisons, three fingerprints: malonate, fluoroacetate, arsenite',
      'Found with pigeon muscle and malonate: Krebs, Johnson, Szent-Györgyi, Lipmann',
    ],
    words: 3500,
    readMins: 18,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'The glycolysis ladder closed its ledger at −72.7 kJ/mol standard — but the glucose that entered it was worth about 2,840. Almost all of that fire is still banked in the two pyruvates, and the wheel this lesson follows is where the burning is finished. Inside the mitochondrial matrix, pyruvate is first trimmed to a two-carbon acetyl unit riding coenzyme A by the pyruvate dehydrogenase complex — a one-way door — and that acetyl unit is then oxidised to two molecules of carbon dioxide by the eight-step citric-acid cycle, handing three NADH, one FADH2 and one GTP to the cell every turn. The cell-biology respiration lesson walked all eight steps as a survey paragraph; here we take them one enzyme at a time — mechanisms, standard energies, poisons and the discovery story included.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every fuel the body can burn — sugar, fat, amino-acid skeletons, lactate, ketones — converges on the two-carbon acetyl unit, and the citric-acid cycle is the only wheel that oxidises it completely. That makes its gateway the most strategic junction in metabolism: block the pyruvate dehydrogenase door and carbohydrate energy dies at pyruvate; jam aconitase with fluorocitrate and the whole wheel backs up; starve the wheel of oxaloacetate and acetyl units spill into ketones instead. The cycle is also where poisons, vitamins and cancer genetics meet: arsenic bites its lipoamide arms, four B vitamins feed its cofactor crews, and a mutated isocitrate dehydrogenase manufactures an oncometabolite.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Gateway: Pyruvate Dehydrogenase, a One-Way Door' },
      {
        kind: 'para',
        text: 'Pyruvate dehydrogenase is not one enzyme but a nanomachine. Lester Reed\u2019s laboratory purified the mammalian complex and found thirty E1 tetramers arranged around a sixty-subunit E2 core, with twelve E3 dimers docked on the outside. Three stations run an assembly line. E1 uses thiamine pyrophosphate to clip carbon dioxide off pyruvate, leaving a hydroxyethyl group it hands to E2. E2 owns the shuttle: a lipoamide arm — a lipoic-acid ring on a tether about 1.4 nm long — that swings between the stations, loading the acetyl group as a thioester and delivering it to coenzyme A. E3 re-oxidises the spent arm through FAD and finally NAD+, which leaves as NADH. Five cofactors crew the machine — TPP, lipoamide, coenzyme A, FAD, NAD+ — four of them vitamin-derived (B1, B5, B2, B3), so the molecules chapter\u2019s vitamin logic lands hardest here: no thiamine, no gateway.',
      },
      {
        kind: 'para',
        text: 'The door is one-way: oxidative decarboxylation will not run backwards, and the consequence — why fat cannot become glucose — belongs to the integration lesson. But the cell does throttle the door, by a mechanism glycolysis never used: covalent modification. A dedicated kinase, PDK, phosphorylates three serines on E1 and switches the complex off; a phosphatase, PDP, removes them and switches it on. PDK reads the fuel gauges — activated by NADH, acetyl-CoA and ATP, inhibited by pyruvate, ADP and NAD+ — so a fuel-flooded cell closes the door and a hungry one opens it. Calcium activates PDP in muscle, tying the gateway to contraction itself, and insulin drives dephosphorylation in the fed state. The glycolysis stations were allosteric; this is the second throttle class — slower, longer-lived, and perfect for hormones.',
      },
      {
        kind: 'para',
        text: 'One weapon aims straight at the arm: trivalent arsenic (arsenite) and mercury bind the arm\u2019s two free thiols once the ring is reduced, freezing the shuttle with cargo stuck aboard — the poison table below returns to this, and to its antidote.',
      },
      { kind: 'heading', text: 'A Wheel with a History: How the Cycle Was Found' },
      {
        kind: 'para',
        text: 'The wheel was assembled from three findings. Albert Szent-Györgyi showed in 1935 that four four-carbon dicarboxylic acids — succinate, fumarate, malate, oxaloacetate — each accelerate oxygen consumption in minced pigeon breast muscle at vanishing concentrations: they behave as catalysts, not fuel, and the fumaric-acid catalysis earned his 1937 Nobel Prize. In 1937 Carl Martius and Franz Knoop — the chemist who had mapped β-oxidation back in 1904 — showed animal tissue converts citrate through isocitrate to α-ketoglutarate. And in Sheffield that same year Hans Krebs and William Johnson published \u201cThe role of citric acid in intermediate metabolism in animal tissues\u201d: citrate is oxidised briskly by a few milligrams of minced pigeon breast muscle; the poison malonate stops succinate oxidation and succinate piles up; and trace citrate dramatically accelerates pyruvate oxidation. Only a cycle explains all three facts at once. Krebs shared the 1953 Nobel Prize with Fritz Lipmann, whose discovery of coenzyme A (1945) supplied the wheel\u2019s missing two-carbon ticket.',
      },
      {
        kind: 'para',
        text: 'The proposal was radical because of its catalytic logic: oxaloacetate, the wheel\u2019s four-carbon acceptor, is regenerated by the very turn it enables. A micromolar pool of oxaloacetate can therefore oxidise a millimolar stream of acetyl units — a machine that burns fuel without being consumed, which is precisely what a catalyst is. The tissue quantities were tiny, the reasoning was arithmetic, and the wheel has needed only mechanism-level repairs since 1937.',
      },
      { kind: 'heading', text: 'Eight Steps, Reaction by Reaction' },
      {
        kind: 'para',
        text: 'Step 1, citrate synthase, condenses acetyl-CoA with oxaloacetate (−32.2 kJ/mol, effectively irreversible — the wheel\u2019s first control station). The enzyme is an induced-fit showcase: oxaloacetate binds first, the protein clamps shut, and only then does the acetyl-CoA pocket exist; the Claisen condensation builds citryl-CoA, and hydrolysing that thioester — the bond class that stores the energy in acetyl-CoA itself — is where the −32.2 pull comes from. Because step 1 drains oxaloacetate, the matrix holds less than one micromole of it, the scarcest metabolite in the cell, and citrate synthase\u2019s grip (micromolar Km) matches. Step 2, aconitase, must fix an awkward fact: citrate\u2019s hydroxyl sits on a tertiary carbon no dehydrogenase can touch. Aconitase shuffles it — dehydration to cis-aconitate, re-hydration to isocitrate (+13.3 kJ/mol standard, near-equilibrium in the cell) — using a [4Fe–4S] iron–sulfur cluster whose labile fourth iron holds the substrate\u2019s hydroxyl during the swap.',
      },
      {
        kind: 'para',
        text: 'Step 3, isocitrate dehydrogenase, is the wheel\u2019s rate-limiting station (−20.9 kJ/mol, irreversible, control station two). It runs the first oxidative decarboxylation in two sub-steps: the secondary alcohol is oxidised to the β-ketoacid oxalosuccinate, whose carboxyl then falls off as carbon dioxide while NAD+ collects a hydride. ADP activates the enzyme by lowering its Km for substrates — scarcity opens the throttle — while ATP and NADH close it. Mitochondria also carry an NADP+-linked isoform that makes NADPH for biosynthesis; a mutation in the human NADP isoform is this lesson\u2019s applications story.',
      },
      {
        kind: 'para',
        text: 'Step 4, α-ketoglutarate dehydrogenase (−33.5 kJ/mol — the deepest pull, control station three), is pyruvate dehydrogenase\u2019s twin: the same three-enzyme architecture, the same swinging lipoyl arm, the same five-cofactor crew, with a five-carbon 2-oxo acid in place of pyruvate\u2019s three. Oxidative decarboxylation leaves succinyl-CoA, a four-carbon thioester — the wheel\u2019s second energy vault, banked for step 5. That the most complex machine in the matrix exists twice, guarding both of the wheel\u2019s decarboxylations, tells you how much chemistry a controlled decarboxylation needs.',
      },
      {
        kind: 'para',
        text: 'Step 5, succinyl-CoA synthetase, cashes the thioester (−2.9 kJ/mol, near-equilibrium) by a phosphohistidine relay — the same enzyme-phosphate ferry the phosphoglycerate mutase used in the glycolysis lesson — and lands the phosphate on GDP, minting one GTP (some tissues run an ADP-form; nucleoside-diphosphate kinase converts either to ATP). Mind the naming: a synthetase pays or earns a nucleoside-triphosphate currency, a synthase touches none. Step 6, succinate dehydrogenase (≈ 0 kJ/mol), is the wheel\u2019s oddest citizen — the only step embedded in the inner membrane, because it is also complex II of the respiratory chain. Its FAD is covalently welded to a histidine, a rarity, and its electrons step down three iron–sulfur clusters to ubiquinone. The chain consequences (why an FADH2 is worth 1.5, not 2.5) belong to the next lesson; here the chemistry matters: two hydrogens leave single bonds, a drop too mild for NAD+, hence FAD. Malonate — a three-carbon dicarboxylate, one CH2 short of succinate — sits in the active site and blocks it: the classic competitive inhibitor, shown by Quastel and Wooldridge in 1927 and wielded by Krebs himself in 1937.',
      },
      {
        kind: 'para',
        text: 'Step 7, fumarase, adds water across the trans double bond of fumarate (−3.8 kJ/mol) with strict stereospecificity — hydroxyl and hydrogen add anti, and only L-malate emerges; like the triose phosphate isomerase of the glycolysis lesson, it runs close to the diffusion limit. Step 8, malate dehydrogenase, regenerates oxaloacetate (+29.7 kJ/mol standard — the profile\u2019s second climb). Why does an uphill step close the wheel? Because step 1 is welded to it: citrate synthase drains oxaloacetate below a micromole, mass action drags the oxidation forward, and the matrix NAD+/NADH ratio — roughly a hundredfold more reduced than the cytosol\u2019s near-1,000 — leans on the reaction\u2019s side. The wheel\u2019s last step is uphill only on paper; in the matrix it is coupled to the most irreversible step of all.',
      },
      {
        kind: 'para',
        text: 'Count the profile and a rule appears: only three steps are strongly exergonic — steps 1, 3 and 4, exactly the three control stations. Reactants open the wheel (ADP, calcium, substrate supply), products close it (citrate, NADH, succinyl-CoA each inhibit their own station), and the scarcest substrate of all, oxaloacetate, gates the first step — which is why refilling the wheel, not feeding it acetyl, often limits flux.',
      },
      {
        kind: 'figure',
        caption: 'The wheel and its gateway. LEFT: one turn — acetyl-CoA (C2) condenses with oxaloacetate (C4) into citrate (C6); the two decarboxylations (steps 3–4) shrink C6→C5→C4; steps 5–8 recharge the C4 pool back to oxaloacetate. Outflows per turn: 3 NADH (gateway + steps 3, 4), 1 FADH2 (step 6), 1 GTP (step 5), 2 CO2. ⬤ marks the three control stations; ΔG°′ labels in kJ/mol; turn total −50.3. RIGHT: the pyruvate dehydrogenase nanomachine — thirty E1 tetramers (TPP) ring the sixty-subunit E2 core, twelve E3 dimers (FAD→NAD+) finish the relay, the 1.4-nm lipoyl arm swings among all three active sites, PDK/PDP phosphorylation throttles E1, and arsenite bites the reduced dithiol.',
        afterConcept: 4,
        svg: `<svg viewBox="0 0 880 540" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: the eight-step citric-acid-cycle wheel with carbon counts, energy outflows and per-step free energies. Right: the pyruvate dehydrogenase nanomachine with E1, E2 core, E3, the swinging lipoyl arm, PDK/PDP regulation and the arsenite bite point.">
  <style>.lbl{font-family:Georgia,serif;font-size:14px;fill:#3f3f46}.big{font-size:18px;font-weight:bold}.sm{font-size:12px;fill:#52525b}.ink{stroke:#8a8a93;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.thin{stroke:#b8b8c0;fill:none;stroke-width:1.6}.rose{fill:#e11d48}.vio{fill:#7c3aed}.box{fill:none;stroke:#c8c8d0;stroke-width:1.6;stroke-dasharray:5 4}.node{fill:#fafafa;stroke:#8a8a93;stroke-width:2}.mid{font-family:Georgia,serif;font-size:13.5px;font-weight:bold;fill:#3f3f46;text-anchor:middle}.ctr{font-family:Georgia,serif;font-size:12px;fill:#3f3f46;text-anchor:middle}.arm{stroke:#7c3aed;fill:none;stroke-width:2.2;stroke-dasharray:6 4}</style>
  <text class="lbl big" x="28" y="34" fill="#3f3f46">The wheel and its gateway</text>
  <rect x="24" y="52" width="420" height="470" rx="12" class="box"/>
  <text class="lbl" x="40" y="76" font-weight="bold">ONE TURN · eight steps · ΣΔG°′ = −50.3 kJ/mol</text>
  <rect x="195" y="96" width="110" height="28" rx="6" class="node"/><text class="mid" x="250" y="115">citrate C6</text>
  <path class="ink" d="M292 124 L372 176"/><path d="M378 180 l-9 -1 3 -8 z" fill="#8a8a93"/>
  <text class="sm" x="330" y="140">2 · aconitase +13.3</text>
  <rect x="378" y="180" width="112" height="28" rx="6" class="node"/><text class="mid" x="434" y="199">isocitrate C6</text>
  <path class="ink" d="M434 208 L434 252"/><path d="M434 258 l-4 -8 h8 z" fill="#8a8a93"/>
  <text class="sm" x="442" y="228">3 · IDH −20.9 ⬤</text>
  <text class="sm" x="442" y="244" fill="#7c3aed">NADH ↑ · CO2 ↑</text>
  <rect x="378" y="260" width="112" height="28" rx="6" class="node"/><text class="mid" x="434" y="279">α-KG C5</text>
  <path class="ink" d="M434 288 L434 332"/><path d="M434 338 l-4 -8 h8 z" fill="#8a8a93"/>
  <text class="sm" x="442" y="308">4 · α-KGDH −33.5 ⬤</text>
  <text class="sm" x="442" y="324" fill="#7c3aed">NADH ↑ · CO2 ↑</text>
  <rect x="378" y="340" width="112" height="28" rx="6" class="node"/><text class="mid" x="434" y="359">succinyl-CoA C4</text>
  <path class="ink" d="M378 362 L300 404"/><path d="M294 407 l9 1 -2 -9 z" fill="#8a8a93"/>
  <text class="sm" x="306" y="380">5 · SC synthetase −2.9</text>
  <text class="sm" x="306" y="396" fill="#e11d48">GTP ↑ (His-P relay)</text>
  <rect x="180" y="404" width="116" height="28" rx="6" class="node"/><text class="mid" x="238" y="423">succinate C4</text>
  <path class="ink" d="M180 424 L106 388"/><path d="M100 385 l9 1 -2 9 z" fill="#8a8a93"/>
  <text class="sm" x="76" y="428">6 · SDH ≈ 0</text>
  <text class="sm" x="76" y="444" fill="#7c3aed">FADH2 ↑ (covalent FAD)</text>
  <rect x="24" y="360" width="80" height="28" rx="6" class="node"/><text class="mid" x="64" y="379">fumarate C4</text>
  <path class="ink" d="M64 360 L64 322"/><path d="M64 316 l-4 8 h8 z" fill="#8a8a93"/>
  <text class="sm" x="24" y="344">7 · fumarase −3.8</text>
  <rect x="24" y="286" width="80" height="28" rx="6" class="node"/><text class="mid" x="64" y="305">L-malate C4</text>
  <path class="ink" d="M64 286 L64 248"/><path d="M64 242 l-4 8 h8 z" fill="#8a8a93"/>
  <text class="sm" x="24" y="270">8 · MDH +29.7</text>
  <rect x="24" y="212" width="80" height="28" rx="6" class="node"/><text class="mid" x="64" y="231">OAA C4</text>
  <path class="ink" d="M104 218 L188 152"/>
  <text class="sm" x="98" y="176">1 · citrate synthase −32.2 ⬤</text>
  <text class="sm" x="98" y="160">citryl-CoA thioester pays</text>
  <rect x="60" y="108" width="150" height="40" rx="6" class="node"/>
  <text class="ctr" x="135" y="124">PDH gateway ⬤</text>
  <text class="ctr" x="135" y="140">pyruvate → acetyl-CoA · NADH</text>
  <text class="sm" x="40" y="486">⬤ = control station (only the strongly exergonic steps)</text>
  <text class="sm" x="40" y="504" font-weight="bold" fill="#3f3f46">per turn: 3 NADH · 1 FADH2 · 1 GTP · 2 CO2 · OAA regenerated</text>
  <rect x="468" y="52" width="388" height="470" rx="12" class="box"/>
  <text class="lbl" x="484" y="76" font-weight="bold">The pyruvate dehydrogenase nanomachine</text>
  <text class="sm" x="484" y="94">30 E1 tetramers · 60-subunit E2 core · 12 E3 dimers</text>
  <circle cx="662" cy="270" r="92" class="node"/>
  <text class="ctr" x="662" y="264">E2 core · 60</text>
  <text class="ctr" x="662" y="282">transacylase</text>
  <rect x="560" y="150" width="66" height="40" rx="6" class="node"/>
  <text class="ctr" x="593" y="166">E1 ×30</text>
  <text class="ctr" x="593" y="182">TPP · CO2 out</text>
  <rect x="700" y="150" width="66" height="40" rx="6" class="node"/>
  <text class="ctr" x="733" y="166">E1 ×30</text>
  <text class="ctr" x="733" y="182">TPP · CO2 out</text>
  <rect x="560" y="360" width="66" height="40" rx="6" class="node"/>
  <text class="ctr" x="593" y="376">E1 ×30</text>
  <text class="ctr" x="593" y="392">TPP · CO2 out</text>
  <circle cx="662" cy="128" r="36" class="node"/>
  <text class="ctr" x="662" y="124">E3 ×12</text>
  <text class="ctr" x="662" y="140">FAD→NAD+</text>
  <path class="arm" d="M662 240 C 620 210 606 196 596 192"/>
  <path class="arm" d="M662 240 C 672 200 668 170 664 166"/>
  <text class="sm" x="700" y="236" fill="#7c3aed">lipoyl arm ≈ 1.4 nm</text>
  <text class="sm" x="700" y="252" fill="#7c3aed">swings cargo to all 3 sites</text>
  <path class="ink" d="M496 214 L552 186"/><path d="M558 183 l-9 -2 1 9 z" fill="#8a8a93"/>
  <text class="sm" x="478" y="204">pyruvate 3C</text>
  <path class="ink" d="M700 216 L788 236"/><path d="M794 238 l-8 -6 0 9 z" fill="#8a8a93"/>
  <text class="sm" x="742" y="228">acetyl-CoA out</text>
  <text class="sm" x="742" y="244">→ citrate synthase</text>
  <text class="sm" x="672" y="112" fill="#7c3aed">NAD+ → NADH</text>
  <text class="sm" x="484" y="330" fill="#e11d48">✕ arsenite bites the reduced –SH pair</text>
  <text class="sm" x="484" y="446">PDK ⊣ phosphorylates 3 Ser on E1 → OFF</text>
  <text class="sm" x="484" y="464">PDP (Ca2+, insulin) → ON · one-way door</text>
  <text class="sm" x="484" y="494" font-weight="bold" fill="#3f3f46">five cofactors: TPP · lipoamide · CoA · FAD · NAD+</text>
  <text class="sm" x="484" y="510">vitamins B1 · B5 · B2 · B3 (lipoamide is made, not eaten)</text>
</svg>`,
      },
      { kind: 'heading', text: 'The Energetics, Derived' },
      {
        kind: 'derivation',
        title: 'From eight standard changes to the cycle\u2019s ledger',
        statement:
          'Group the eight standard free-energy changes printed for the cycle — three big pulls, two stereochemical climbs, three near-equilibrium ripples — and the wheel\u2019s total pull falls out in three lines.',
        prerequisites: [
          'For sequential reactions, ΔG°′ values add',
          'Table values (Lehninger), steps 1–8: −32.2, +13.3, −20.9, −33.5, −2.9, 0.0, −3.8, +29.7 kJ/mol',
        ],
        steps: [
          {
            label: 'The three pulls (steps 1, 3, 4)',
            formula: '-32.2 - 20.9 - 33.5 = -86.6\\ \\text{kJ/mol}',
            explanation:
              'The three control stations do the driving — which is why regulation sits exactly there: only a strongly exergonic step can be throttled without stalling near-equilibrium traffic.',
          },
          {
            label: 'The two climbs (steps 2, 8)',
            formula: '+13.3 + 29.7 = +43.0\\ \\text{kJ/mol}',
            explanation:
              'Aconitase pays for citrate\u2019s stereochemistry and malate dehydrogenase pays for regenerating oxaloacetate — both near-equilibrium in the cell, pulled by their neighbours.',
          },
          {
            label: 'The three ripples (steps 5, 6, 7)',
            formula: '-2.9 + 0.0 - 3.8 = -6.7\\ \\text{kJ/mol}',
            explanation:
              'Cash-out, dehydrogenation, hydration — bookkeeping steps sitting at equilibrium in the matrix.',
          },
          {
            label: 'Total, one turn',
            formula: '-86.6 + 43.0 - 6.7 = -50.3\\ \\text{kJ/mol}',
            explanation:
              'Books round the table differently, but every honest sum lands near −50 kJ/mol per turn.',
          },
          {
            label: 'Per glucose (two turns)',
            formula: '2 \\times (-50.3) = -100.6\\ \\text{kJ/mol}',
            explanation:
              'Steeper than glycolysis\u2019s −72.7 — yet still a fraction of glucose\u2019s 2,840. The rest of the fire rides the eight reduced carriers, cashed by the chain in the next lesson.',
          },
        ],
        result:
          'The wheel\u2019s direct products per glucose are 6 NADH, 2 FADH2 and 2 GTP — roughly 20 ATP-equivalents of charge against 2 ATP of direct cash from glycolysis. The cycle\u2019s job is charging carriers, not minting ATP.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One Turn\u2019s Ledger, Two Turns\u2019 Harvest',
        steps: [
          'Per turn: 3 NADH × 2.5 = 7.5 ATP-equivalents; 1 FADH2 × 1.5 = 1.5; 1 GTP = 1. Total 10.0 per acetyl unit.',
          'Per glucose: two turns → 20.0. The gateway adds its own 2 NADH = 5.0 — pyruvate dehydrogenase is worth half a turn.',
          'Glycolysis contributed 2 ATP + 2 NADH = 2 + 5.0 = 7.0. Grand total: 7 + 5 + 20 = 32 ATP — the audit the respiration lesson owns, here rebuilt slice by slice.',
          'The wheel\u2019s share: 20/32 = 62.5% of a glucose\u2019s ATP-equivalents pass through citrate chemistry — but only 2/32 was ever cash on delivery, the two GTP.',
          'Why the FADH2 discount? Succinate dehydrogenase feeds the chain downstream of complex I — fewer protons pumped, a story the next lesson tells.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — The Carbon Audit and the Labeling Riddle',
        steps: [
          'Audit: glucose (6 C) → two pyruvates (3 C each). The gateway clips one carbon per pyruvate: 2 CO2. The two acetyl units (2 C each) enter the wheel: 4 CO2 over two turns. 2 + 4 = 6 — the audit closes, and six CO2 per glucose is exactly what a breath reports.',
          'The riddle: feed 14C-labelled acetyl-CoA and the label does not appear in the first turn\u2019s carbon dioxide. Those two CO2 are oxaloacetate\u2019s carbons, released at steps 3 and 4.',
          'The acetyl carbons survive into succinate — a symmetric molecule in which the two arms randomise — and leave as the second turn\u2019s CO2.',
          'Ogston\u2019s resolution (1948): citrate is prochiral. Its two CH2COO− arms are chemically identical, but the enzyme grips the molecule at three points, so aconitase can always tell which arm came from acetyl and which from oxaloacetate. Symmetric molecule, asymmetric handling.',
          'Consequence: tracer arithmetic through the wheel must be read over two turns, not one — a classic trap in isotope bookkeeping.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — Three Poisons, Three Fingerprints',
        steps: [
          'Setup: the healthy wheel runs all eight intermediates at steady micromolar pools and exports 3 NADH, 1 FADH2, 1 GTP and 2 CO2 per turn.',
          'Malonate (blocks step 6): a competitive inhibitor one CH2 short of succinate. Flux halts and succinate accumulates upstream — the fingerprint Krebs exploited in 1937 to prove the wheel\u2019s arc.',
          'Fluoroacetate (blocks step 2, indirectly): the victim\u2019s own citrate synthase converts fluoroacetyl-CoA to fluorocitrate, which jams aconitase — citrate accumulates. Peters named the trick \u201clethal synthesis\u201d (1952): the poison is manufactured by the poisoned. The source is the South African gifblaar shrub, and sodium fluoroacetate (\u201c1080\u201d) still serves as a pest-control poison.',
          'Arsenite (blocks the gateway and step 4): binds the reduced lipoamide dithiol, so pyruvate and α-ketoglutarate both pile up. Dimercaprol — \u201cBritish anti-Lewisite\u201d from chemical-weapons research — out-competes the arsenic for the thiols.',
          'The diagnostic pattern, as in glycolysis: the accumulated intermediate is the fingerprint of the block — succinate → succinate dehydrogenase; citrate → aconitase; pyruvate plus α-ketoglutarate together → the lipoyl arm.',
        ],
      },
      { kind: 'heading', text: 'Anaplerosis: One Paragraph, One Pointer' },
      {
        kind: 'para',
        text: 'One paragraph is all this lesson owes refill chemistry, because the integration lesson owns the full story — but the rule itself belongs on the wheel. Every turn sells intermediates (citrate to fat-building, α-ketoglutarate to amino acids, succinyl-CoA to haem, oxaloacetate to gluconeogenesis), and acetyl-CoA can never restock what it spends: two carbons in, two CO2 out, the pool unchanged. Hans Kornberg named the restocking anaplerosis in 1965, and pyruvate carboxylase — switched on by the very acetyl-CoA it serves — is the chief valve. A drained wheel starves no matter how much acetyl-CoA queues at the gateway; the surplus acetyl units spill into ketones instead.',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Sports science: citrate synthase activity in a muscle biopsy is the standard index of mitochondrial density — endurance training measurably raises it.',
          'Cancer metabolism: mutant isocitrate dehydrogenase (IDH1/2) gains a new reaction — reducing α-ketoglutarate to 2-hydroxyglutarate, which piles up at millimolar levels in gliomas and acute myeloid leukaemia (Dang et al., 2009) and remodels gene methylation. The first oncometabolite was found on this wheel.',
          'Toxicology and pest control: fluoroacetate\u2019s lethal synthesis explains both gifblaar\u2019s grazing danger and the deliberate use of \u201c1080\u201d; diagnosis reads citrate accumulation; the poison persists because its C–F bond resists the chemistry that should burn it.',
          'Iron sensing: cytosolic aconitase moonlights as an iron-responsive RNA-binding protein — the same [4Fe–4S] grip that runs the wheel\u2019s step 2 doubles, without iron, as the cell\u2019s iron meter.',
          'Clinical chemistry: arsenic and mercury map onto the lipoyl arm (dimercaprol is the rescue), and thiamine deficiency quietly closes the one-way door.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Six slips recur. First, the cycle mints almost no ATP directly — one GTP per turn; its real product is reduced carriers. Second, the first turn\u2019s two CO2 are oxaloacetate\u2019s carbons, not the acetyl carbons that just entered — the Ogston labelling subtlety. Third, oxaloacetate is catalytic and constantly drained: without anaplerotic restocking the wheel starves amid abundant acetyl-CoA. Fourth, FADH2 is worth 1.5, not 2.5, because succinate dehydrogenase enters the chain downstream of complex I. Fifth, synthetase versus synthase: succinyl-CoA synthetase pays or earns a nucleoside currency, citrate synthase touches none. Sixth, pyruvate dehydrogenase is not part of the wheel — it is the gateway; count its NADH separately from the turn\u2019s three.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'citric-acid cycle', def: 'The eight-step mitochondrial wheel oxidising one acetyl unit to two CO2 while charging 3 NADH, 1 FADH2 and 1 GTP per turn; found by Krebs and Johnson in 1937.' },
          { term: 'oxidative decarboxylation', def: 'One reaction class doing double work — oxidise an alcohol to a β-ketoacid, whose carboxyl then leaves as CO2 (isocitrate and α-ketoglutarate dehydrogenases, and pyruvate dehydrogenase at the gateway).' },
          { term: 'lipoyl arm', def: 'The lipoamide tether (about 1.4 nm) swinging substrate among the three active sites of the PDH and α-KGDH machines — and arsenite\u2019s bite point.' },
          { term: 'Ogston three-point attachment', def: 'Why a seemingly symmetric molecule like citrate is handled asymmetrically: an enzyme gripping at three points distinguishes identical arms (Ogston, 1948).' },
          { term: 'lethal synthesis', def: 'Peters\u2019s 1952 name for poisoning by self-assembly: fluoroacetate becomes the aconitase-blocking fluorocitrate only through the victim\u2019s own cycle.' },
          { term: 'anaplerosis', def: 'Refilling the cycle\u2019s intermediate pools (term coined by Kornberg, 1965) — chiefly pyruvate carboxylase; the integration lesson owns the arithmetic.' },
          { term: 'amphibolic', def: 'Both catabolic and anabolic at once — the wheel burns acetyl while selling intermediates to biosynthesis; the integration lesson maps the trade.' },
          { term: 'thioester', def: 'The acyl–sulfur bond of acetyl-CoA and succinyl-CoA — a −30 kJ/mol-class vault that the gateway banks, citrate synthase spends, and step 5 cashes.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Adding the eight standard ΔG°′ values for one turn gives:',
            options: ['−6.7 kJ/mol', '−50.3 kJ/mol', '−86.6 kJ/mol', '−100.6 kJ/mol'],
            answer: 1,
            explain: 'Pulls −86.6, climbs +43.0, ripples −6.7: total −50.3 per turn.',
          },
          {
            q: 'How many ATP-equivalents does the cycle itself bank per glucose (two turns)?',
            options: ['10', '20', '25', '32'],
            answer: 1,
            explain: 'Per turn: 3 × 2.5 + 1.5 + 1 = 10; two turns = 20. The gateway\u2019s 5 and glycolysis\u2019s 7 complete the 32.',
          },
          {
            q: 'A tracer feeds 14C-labelled acetyl-CoA into the wheel. Where is the label found first?',
            options: ['The first turn\u2019s CO2', 'Succinate, then the second turn\u2019s CO2', 'The GTP', 'Oxaloacetate, unlabelled forever'],
            answer: 1,
            explain: 'First-turn CO2 are oxaloacetate\u2019s carbons (Ogston); the acetyl carbons ride to succinate, randomise across its symmetry, and leave in turn two.',
          },
          {
            q: 'Malonate is added to respiring muscle. What accumulates?',
            options: ['Citrate', 'α-Ketoglutarate', 'Succinate', 'Oxaloacetate'],
            answer: 2,
            explain: 'Malonate competitively blocks succinate dehydrogenase; downstream traffic stalls and succinate piles up — the fingerprint Krebs used in 1937.',
          },
          {
            q: 'Fluoroacetate is called \u201clethal synthesis\u201d because:',
            options: ['It blocks the gateway directly', 'The victim\u2019s own citrate synthase builds the aconitase poison fluorocitrate', 'It destroys coenzyme A', 'It polymerises oxaloacetate'],
            answer: 1,
            explain: 'Fluoroacetyl-CoA condenses with oxaloacetate on the wheel\u2019s own step 1, and the product jams step 2 — Peters, 1952.',
          },
          {
            q: 'Malate dehydrogenase\u2019s standard change is +29.7 kJ/mol, yet the wheel completes its turn. Why?',
            options: ['The enzyme changes ΔG°′', 'Citrate synthase drains oxaloacetate below 1 μM, so mass action pulls the oxidation', 'The matrix heats up', 'FADH2 back-donates electrons'],
            answer: 1,
            explain: 'ΔG = ΔG°′ + RT·ln Q with Q crushed by the step-1 drain; the matrix\u2019s reduced NAD+/NADH ratio helps too.',
          },
          {
            q: 'Which step makes a nucleoside triphosphate, and by what device?',
            options: ['Citrate synthase — induced fit', 'Succinyl-CoA synthetase — a phosphohistidine relay', 'Fumarase — trans hydration', 'Isocitrate dehydrogenase — oxalosuccinate'],
            answer: 1,
            explain: 'The thioester\u2019s energy lands on an enzyme histidine, then on GDP (or ADP) — the same relay the mutase used in glycolysis.',
          },
          {
            q: 'A sprinting muscle floods with Ca2+, ADP and pyruvate. The pyruvate dehydrogenase complex will be:',
            options: ['Phosphorylated off by PDK', 'Dephosphorylated and active — PDK inhibited, PDP calcium-activated', 'Unchanged — it is not regulated', 'Shut by product inhibition of E3 only'],
            answer: 1,
            explain: 'Pyruvate and ADP inhibit PDK while Ca2+ activates PDP: demand opens the one-way door — covalent regulation, slower and longer-lived than glycolysis\u2019s allostery.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Grounding: Nelson & Cox, Lehninger Principles of Biochemistry — the citric-acid-cycle chapter and its standard free-energy table; Berg, Tymoczko & Stryer, Biochemistry — the TCA chapter; Krebs & Johnson (1937), Enzymologia 4:148; Ogston (1948), Nature 162:963; Peters (1952), Proceedings of the Royal Society B 139:143; Kornberg (1965), Angewandte Chemie 4:558; Quastel & Wooldridge (1927) on malonate; Reed & Hackert (1990), Journal of Biological Chemistry 265:8971, on the PDH machine; Dang et al. (2009), Nature 462:739, on mutant IDH1. Carve notes: the cell-biology respiration lesson owns the survey walk, the link-reaction summary, the 30–32 ATP audit and the FADH2-discount chain logic; the fermentation-and-integration lesson owns the acetyl-CoA hub, anaplerosis mechanics, ketogenesis and the fat-to-glucose dead-end; this book\u2019s molecules chapter owns the vitamin-cofactor logic, §3.1 owns substrate-level phosphorylation, the phosphohistidine relay concept and the enzymes lesson\u2019s allostery; §3.3 owns the respiratory chain. Next: §3.3 — Oxidative Phosphorylation & Chemiosmosis: cashing the eight carriers this wheel just charged.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'bioc-oxidative-phosphorylation-chemiosmosis',
    title: 'Oxidative Phosphorylation and Chemiosmosis: Cashing the Carriers',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Metabolism',
    tier: 'intermediate',
    concepts: [
      'The inner membrane as a dam: electrons flow down, protons are pushed up',
      'Complexes I–IV: cofactors, proton counts, and where each poison bites',
      'The Q cycle: one two-electron carrier split into two one-electron engines',
      'Proton-motive force: an electrical and a chemical term in one voltage',
      'ATP synthase: the c-ring rotor and Boyer’s binding-change mechanism',
      'P/O ratios of 2.5 and 1.5, derived from proton bookkeeping',
      'Respiratory control: ADP is the throttle, not oxygen',
      'Uncouplers and shuttles: the price of heat and the fare for cytosolic NADH',
    ],
    words: 3500,
    readMins: 18,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'The citric-acid wheel ended its turn owing a debt: three NADH, one FADH2 and one GTP per acetyl unit, with the GTP the only cash on delivery. This lesson collects the rest. In the inner mitochondrial membrane the reduced carriers hand their electrons down a four-station waterfall, and each fall pushes protons out of the matrix against charge and concentration. The protons then return through a molecular turbine that clamps ADP and phosphate into ATP. About nine tenths of the ATP your body mints passes through this machine; glycolysis and the wheel were the rehearsal.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Cyanide, carbon monoxide, rotenone and the banned diet pill dinitrophenol all act here, each leaving a distinct fingerprint; brown fat heats babies by deliberately breaching this dam; the 2.5-and-1.5 numbers behind every honest ATP audit come from this chapter’s proton bookkeeping; and ATP synthase is the smallest rotary engine known.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'How this lesson is scoped',
        text: 'The cell-biology respiration lesson already gave the one-paragraph chain survey, the 30–32 ATP audit and the gas arithmetic — read it first if the chain is new. This book’s energy-economy overview owns ATP’s currency chemistry and named chemiosmosis in passing; the citric-acid lesson handed off the FADH2 discount with the words “a story the next lesson tells”; the photosynthesis lessons own the chloroplast’s light-driven twin. Here we build the machine: each complex’s cofactors and proton count, the Q cycle, the proton-motive force and its derivation, the synthase’s rotor and binding change, shuttle mechanics, respiratory control, uncouplers, the ROS leak and the poison map.',
        tone: 'path',
      },
      { kind: 'heading', text: 'From Argument to Machine: A Forty-Year Fight' },
      {
        kind: 'para',
        text: 'The pieces were found decades before the design. David Keilin rediscovered the cytochromes in 1925 — MacMunn had seen their bands in 1884 but been argued off them — and named the pigments that shift oxidation state as a muscle works. Vladimir Belitzer and Elena Tsybakova showed in 1939 that minced muscle couples respiration to ATP synthesis; Herman Kalckar’s work tied phosphate esterification to breathing. In 1953 Bill Slater proposed a chemical-coupling hypothesis — the chain makes a high-energy intermediate, glycolysis-style, and spends it on ATP — and the hunt for it consumed a decade and found nothing, because it does not exist. Peter Mitchell proposed the answer in 1961, in a two-page Nature paper: the chain makes no intermediate; it separates charge and protons across a closed, ion-tight membrane, and ATP synthesis is powered by the protons’ return. Rivals mocked the odious hypothesis — broken mitochondrial preparations, open to the medium, could never show a gradient. The clinching evidence came from outside the animal line: Andre Jagendorf and Helen Uribe soaked chloroplasts in acid and watched them, in 1966, make ATP in the dark from the pH jump alone; in 1974 Efraim Racker and Walther Stoeckenius co-reconstituted the light-driven proton pump bacteriorhodopsin with the mitochondrial synthase, and light made ATP through nothing but a gradient. Mitchell took the 1978 chemistry Nobel.',
      },
      { kind: 'heading', text: 'The Waterfall: Four Stations and Two Ferries' },
      {
        kind: 'para',
        text: 'Fix the geography: the N side — the matrix, negative and alkaline — and the P side — the intermembrane space, positive and slightly acid. Electrons fall from the NADH pair at −0.32 volts to the oxygen pair at +0.82 volts; the 1.14-volt drop is worth about 220 kilojoules per mole of NADH, spent in four controlled bites. Two carriers ferry electrons: the Q pool — ubiquinone, a hydrophobic quinone drifting in the lipid interior, ten isoprene units long in humans — carries two electrons and two protons, while cytochrome c, a water-soluble protein on the P face, ferries one electron per trip.',
      },
      {
        kind: 'para',
        text: 'Complex I, NADH:ubiquinone oxidoreductase, is the giant — about forty-four subunits in mammals, only fourteen conserved back to bacteria. A flavin mononucleotide catches NADH’s hydride; the electrons step through eight iron–sulfur clusters to reduce Q in the membrane arm. The L-shaped machine converts redox energy into long-range conformational strokes that push four protons across — a piston-and-lever design the 2016 cryo-electron-microscopy structures made visible. Rotenone, a plant-derived insecticide, and piericidin A block the Q site.',
      },
      {
        kind: 'para',
        text: 'Complex III, cytochrome bc1, must solve a mismatch: Q carries electrons in pairs, but cytochrome c takes them one at a time. Mitchell’s Q cycle (1975) is the answer. Each monomer carries a Rieske iron–sulfur protein (named for John Rieske, 1964), cytochrome c1, and cytochrome b with two hemes, bL and bH, spanning the membrane. At the Qo site a QH2 is oxidized in a bifurcated step: one electron climbs the high-potential path through the Rieske cluster and c1 onto cytochrome c; the other drops through bL to bH and waits at the Qi site, where two such electrons reduce a fresh Q to QH2 with protons drawn from the matrix. Run twice, the cycle oxidizes two QH2, reduces two cytochromes c, releases four protons at the P side and takes up two from the N side — netting four deposited per two electrons reaching cytochrome c. Antimycin A jams the Qi site and stops the cycle dead.',
      },
      {
        kind: 'para',
        text: 'Complex IV, cytochrome c oxidase, ends the fall. Electrons arrive one at a time from cytochrome c, dock at a binuclear copper pair, CuA, and step through heme a to the binuclear center — heme a3 beside CuB — where oxygen takes four electrons and four protons in sequence, leaving two water molecules without leaking a half-reduced radical. Two of those four protons are pumped, two are spent chemically — two moved per electron pair. Cyanide, carbon monoxide and azide all bind this binuclear center — a3 is the poison’s seat.',
      },
      { kind: 'heading', text: 'The Dam: Proton-Motive Force' },
      {
        kind: 'para',
        text: 'What the protons have built is a dam with two walls. In a working liver mitochondrion the electrical term Δψ runs about 150–170 millivolts (matrix negative) and the chemical term ΔpH about half a unit (matrix alkaline) — a proton-motive force of roughly 180–220 millivolts, four fifths electrical. Each returning proton releases about 19–21 kilojoules per mole — the turbine’s currency.',
      },
      {
        kind: 'formula',
        name: 'Proton-motive force',
        latex: '\\Delta p = \\Delta\\psi - \\frac{2.303\\,RT}{F}\\,\\Delta\\mathrm{pH}',
        meaning: 'The gradient as one voltage: the electrical term Δψ (membrane potential, P minus N) minus the chemical term 2.303RT/F times ΔpH (pH difference, P minus N); 2.303RT/F ≈ 59.2 mV per pH unit at 25 °C; work per mole of protons = F·Δp.',
      },
      {
        kind: 'derivation',
        title: 'Deriving the proton-motive force from first principles',
        statement: 'Show that a proton gradient across the inner membrane equals one voltage — the proton-motive force — and evaluate it for a working liver mitochondrion.',
        prerequisites: ['Chemical potential μ = μ° + RT ln c', 'Electrical work: F per mole per volt', 'Difference notation across a membrane'],
        steps: [
          {
            label: 'Write the electrochemical potential of H+ on each face',
            formula: '\\bar{\\mu}_{H^+} = \\mu^{\\circ} + RT\\,\\ln[H^+] + F\\psi',
            explanation: 'A mole of protons carries one Faraday of charge, so a potential ψ does F·ψ of work on it; the chemical term is the usual RT ln concentration.',
          },
          {
            label: 'Take the P-side minus N-side difference',
            formula: '\\Delta\\bar{\\mu} = RT\\,\\ln\\frac{[H^+]_{P}}{[H^+]_{N}} + F(\\psi_{P}-\\psi_{N})',
            explanation: 'Constants cancel. The first term is chemical (protons prefer the alkaline matrix), the second electrical (protons prefer the negative matrix).',
          },
          {
            label: 'Convert to pH and divide by F to express in volts',
            formula: '\\Delta p = \\frac{\\Delta\\bar{\\mu}}{F} = \\Delta\\psi - \\frac{2.303\\,RT}{F}\\,\\Delta\\mathrm{pH}',
            explanation: 'ln[H+]P/[H+]N = 2.303·(pH_N − pH_P) = −2.303·ΔpH with ΔpH = pH_P − pH_N, hence the minus sign. At 25 °C, 2.303RT/F = 59.2 mV per pH unit.',
          },
          {
            label: 'Insert the measured numbers',
            formula: '\\Delta p = 170\\ \\text{mV} - 59.2\\ \\text{mV}\\times(-0.5) \\approx 200\\ \\text{mV}',
            explanation: 'Δψ ≈ +170 mV (P side positive) and ΔpH ≈ −0.5 (the P side is the more acidic) add, because both terms push protons back toward the matrix.',
          },
          {
            label: 'Price a proton',
            formula: '\\Delta G = F\\,\\Delta p = 96.5\\ \\text{kJ·V}^{-1}\\text{·mol}^{-1} \\times 0.20\\ \\text{V} \\approx 19\\ \\text{kJ/mol}',
            explanation: 'Each returning proton releases roughly 19–21 kilojoules per mole.',
          },
        ],
        result: 'Δp ≈ 200 mV, about four fifths electrical (Δψ) and one fifth chemical (ΔpH); each proton’s return is worth ≈ 19–21 kJ/mol.',
      },
      {
        kind: 'figure',
        caption: 'LEFT — the chain as a two-sided dam. Electrons fall NADH → Complex I → Q pool → Complex III → cytochrome c → Complex IV → O2 reduced to 2 H2O; cofactors are named inside the plates. Protons ride up: 4 H+ at I, 4 H+ out (Qo) with 2 H+ in (Qi) at III, 2 H+ at IV — ten per NADH; FADH2 enters at the Q pool through II and pumps nothing, six per FADH2. Poison dots: rotenone, antimycin A, CN− · CO, and the DNP leak. RIGHT — the turbine: H+ from the P side enters the a subunit, hops onto the c-ring (c8), rides one turn (8 H+) and exits to the matrix; the γ stalk turns 120° per ATP, cycling the β sites O · L · T; the stator b2 + δ holds the F1 head (α3β3) still; ADP + Pi in, ATP out.',
        afterConcept: 4,
        svg: `<svg viewBox="0 0 880 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: the electron-transport chain with complexes I to IV, the Q pool, cytochrome c, proton counts, poison dots and the DNP leak. Right: ATP synthase with the c-ring rotor, gamma stalk, F1 head and the three binding-change sites.">
  <defs>
    <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#8a8a93"/></marker>
  </defs>
  <style>.lbl{font-family:Georgia,serif;font-size:14px;fill:#3f3f46}.big{font-size:18px;font-weight:bold}.sm{font-size:12px;fill:#52525b}.ink{stroke:#8a8a93;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.thin{stroke:#b8b8c0;fill:none;stroke-width:1.6}.rose{fill:#e11d48}.vio{fill:#7c3aed}.box{fill:none;stroke:#c8c8d0;stroke-width:1.6;stroke-dasharray:5 4}.node{fill:#fafafa;stroke:#8a8a93;stroke-width:2}.mid{font-family:Georgia,serif;font-size:13.5px;font-weight:bold;fill:#3f3f46;text-anchor:middle}.ctr{font-family:Georgia,serif;font-size:12px;fill:#3f3f46;text-anchor:middle}.arm{stroke:#7c3aed;fill:none;stroke-width:2.2;stroke-dasharray:6 4}.leak{stroke:#e11d48;fill:none;stroke-width:2;stroke-dasharray:4 4}</style>
  <text x="225" y="40" class="mid big">THE CHAIN — electrons fall, protons rise</text>
  <text x="665" y="40" class="mid big">THE TURBINE — ATP synthase</text>
  <line x1="445" y1="30" x2="445" y2="548" class="thin"/>
  <line x1="30" y1="250" x2="430" y2="250" class="ink"/>
  <line x1="30" y1="440" x2="430" y2="440" class="ink"/>
  <text x="230" y="240" class="ctr">P SIDE · intermembrane space</text>
  <text x="230" y="462" class="ctr">N SIDE · matrix</text>
  <rect x="50" y="258" width="60" height="184" class="node"/>
  <text x="80" y="246" class="mid">Complex I</text>
  <text x="80" y="290" class="ctr">FMN</text>
  <text x="80" y="312" class="ctr">Fe–S ×8</text>
  <line x1="115" y1="436" x2="115" y2="264" class="ink" marker-end="url(#ar)"/>
  <text x="120" y="344" class="lbl">4 H+</text>
  <line x1="48" y1="478" x2="66" y2="448" class="ink" marker-end="url(#ar)"/>
  <text x="44" y="494" class="sm">NADH</text>
  <ellipse cx="163" cy="330" rx="34" ry="16" class="node"/>
  <text x="163" y="335" class="ctr">Q pool</text>
  <text x="163" y="358" class="sm" text-anchor="middle">2 e− · 2 H+</text>
  <line x1="110" y1="330" x2="127" y2="330" class="ink" marker-end="url(#ar)"/>
  <line x1="197" y1="330" x2="210" y2="330" class="ink" marker-end="url(#ar)"/>
  <rect x="122" y="402" width="84" height="34" class="box"/>
  <text x="164" y="417" class="ctr">Complex II · FADH2</text>
  <text x="164" y="431" class="ctr">0 H+</text>
  <line x1="164" y1="400" x2="164" y2="348" class="thin" marker-end="url(#ar)"/>
  <rect x="210" y="258" width="70" height="184" class="node"/>
  <text x="245" y="246" class="mid">Complex III</text>
  <text x="245" y="282" class="ctr">Rieske [2Fe–2S]</text>
  <text x="245" y="300" class="ctr">bL · bH</text>
  <text x="245" y="318" class="ctr">c1</text>
  <line x1="285" y1="436" x2="285" y2="264" class="ink" marker-end="url(#ar)"/>
  <text x="290" y="300" class="lbl">4 H+ out (Qo)</text>
  <line x1="206" y1="264" x2="206" y2="436" class="ink" marker-end="url(#ar)"/>
  <text x="200" y="392" class="lbl" text-anchor="end">2 H+ in (Qi)</text>
  <circle cx="312" cy="205" r="16" class="node"/>
  <text x="312" y="180" class="ctr">cytochrome c</text>
  <text x="312" y="236" class="sm" text-anchor="middle">1 e− per trip</text>
  <line x1="268" y1="256" x2="298" y2="218" class="ink" marker-end="url(#ar)"/>
  <line x1="326" y1="218" x2="356" y2="254" class="ink" marker-end="url(#ar)"/>
  <rect x="360" y="258" width="64" height="184" class="node"/>
  <text x="392" y="246" class="mid">Complex IV</text>
  <text x="392" y="284" class="ctr">CuA</text>
  <text x="392" y="302" class="ctr">a</text>
  <text x="392" y="320" class="ctr">a3–CuB</text>
  <line x1="430" y1="436" x2="430" y2="264" class="ink" marker-end="url(#ar)"/>
  <text x="436" y="246" class="lbl">2 H+</text>
  <line x1="392" y1="478" x2="392" y2="448" class="ink" marker-end="url(#ar)"/>
  <text x="392" y="494" class="sm" text-anchor="middle">O2 → 2 H2O</text>
  <circle cx="117" cy="392" r="4" class="rose"/>
  <circle cx="240" cy="412" r="4" class="rose"/>
  <circle cx="404" cy="316" r="4" class="rose"/>
  <line x1="322" y1="436" x2="322" y2="264" class="leak"/>
  <circle cx="322" cy="350" r="4" class="rose"/>
  <text x="230" y="516" class="sm" text-anchor="middle">● rotenone at I’s Q site · ● antimycin A at III’s Qi · ● CN− · CO at IV’s binuclear center</text>
  <text x="230" y="534" class="sm" text-anchor="middle">● DNP — a proton leak through the lipid · electrons: NADH → I → Q → III → cytochrome c → IV → O2</text>
  <line x1="470" y1="250" x2="860" y2="250" class="ink"/>
  <line x1="470" y1="440" x2="860" y2="440" class="ink"/>
  <text x="665" y="240" class="ctr">P SIDE · intermembrane space</text>
  <text x="665" y="462" class="ctr">N SIDE · matrix</text>
  <rect x="688" y="262" width="44" height="166" class="node"/>
  <text x="710" y="286" class="mid">a</text>
  <line x1="710" y1="210" x2="710" y2="258" class="ink" marker-end="url(#ar)"/>
  <text x="722" y="232" class="lbl">H+ in</text>
  <circle cx="662" cy="345" r="13" class="node"/><circle cx="650" cy="375" r="13" class="node"/><circle cx="620" cy="387" r="13" class="node"/><circle cx="590" cy="375" r="13" class="node"/><circle cx="578" cy="345" r="13" class="node"/><circle cx="590" cy="315" r="13" class="node"/><circle cx="620" cy="303" r="13" class="node"/><circle cx="650" cy="315" r="13" class="node"/>
  <text x="620" y="272" class="ctr">1 turn · 8 H+</text>
  <text x="560" y="352" class="lbl" text-anchor="end">c-ring (c8)</text>
  <path d="M 560 315 A 62 62 0 0 1 680 315" class="thin" marker-end="url(#ar)"/>
  <line x1="620" y1="358" x2="620" y2="492" class="arm"/>
  <text x="632" y="440" class="lbl">γ stalk</text>
  <line x1="620" y1="398" x2="620" y2="446" class="ink" marker-end="url(#ar)"/>
  <text x="632" y="428" class="lbl">H+</text>
  <circle cx="654" cy="500" r="13" class="node"/><circle cx="637" cy="529" r="13" class="node"/><circle cx="603" cy="529" r="13" class="node"/><circle cx="586" cy="500" r="13" class="node"/><circle cx="603" cy="471" r="13" class="node"/><circle cx="637" cy="471" r="13" class="node"/>
  <line x1="654" y1="500" x2="700" y2="500" class="thin"/>
  <line x1="700" y1="500" x2="700" y2="428" class="thin"/>
  <text x="706" y="452" class="lbl">stator b2 + δ</text>
  <text x="706" y="486" class="lbl">F1 head (α3β3)</text>
  <text x="706" y="508" class="lbl">O · L · T sites</text>
  <text x="706" y="530" class="lbl">1 ATP per 120°</text>
  <line x1="580" y1="486" x2="544" y2="486" class="ink" marker-end="url(#ar)"/>
  <text x="538" y="490" class="lbl" text-anchor="end">ATP out</text>
  <line x1="544" y1="516" x2="580" y2="516" class="ink" marker-end="url(#ar)"/>
  <text x="538" y="520" class="lbl" text-anchor="end">ADP + Pi</text>
  <text x="665" y="548" class="sm" text-anchor="middle">Boyer: energy pays for affinity changes and ATP release, not for bond-making</text>
</svg>`,
      },
      { kind: 'heading', text: 'The Turbine: ATP Synthase' },
      {
        kind: 'para',
        text: 'ATP synthase is two machines coupled by a shaft. The Fo part sits in the membrane: a ring of c subunits — eight in mammals (Watt and colleagues, 2010), ten in yeast, up to fifteen in bacteria — each carrying one acidic residue that picks up a proton. The a subunit beside the ring offers two staggered half-channels: a proton enters from the P side, hops onto a c subunit, rides one step, and leaves into the matrix — turning the ring like a waterwheel. Eight protons buy one full turn. The γ stalk is fixed to the ring and turns with it — deliberately lopsided, crowding each catalytic β subunit in turn.',
      },
      {
        kind: 'para',
        text: 'The F1 head is a hexamer of three α and three β subunits; the catalytic sites sit on the β subunits, and John Walker’s 1994 crystal at 2.8 Å caught the three β subunits in three different shapes. That picture explained Paul Boyer’s binding-change mechanism, forced on a skeptical field by his isotope-exchange experiments: squeezing ADP and phosphate into ATP is near-equilibrium chemistry that needs almost no push — what the protons buy is affinity. Each 120° turn cycles every β site from open (O, nothing bound) to loose (L, ADP and Pi enter) to tight (T, water squeezed out, ATP held until the site reopens). The gradient’s energy pays for the release, not the bond-making. Boyer and Walker shared the 1997 chemistry Nobel.',
      },
      { kind: 'heading', text: 'Two Doors for Cytosolic NADH' },
      {
        kind: 'para',
        text: 'One complication remains: glycolysis’s cytosolic NADH cannot cross the inner membrane — no transporter carries NAD(H). Two doors exist. The malate–aspartate shuttle (liver, heart): cytosolic malate dehydrogenase reduces oxaloacetate to malate on NADH’s account; malate crosses the malate/α-ketoglutarate antiporter; the matrix enzyme reoxidizes it, minting a full-value NADH; oxaloacetate returns as aspartate via the glutamate–aspartate carrier. The glycerol-3-phosphate shuttle (muscle, brain) is cheaper and irreversible: cytosolic NADH reduces dihydroxyacetone phosphate to glycerol-3-phosphate, and a mitochondrial FAD dehydrogenase hands the electrons to Q — banking 1.5, skipping complex I exactly as the citric-acid lesson promised.',
      },
      { kind: 'heading', text: 'Respiratory Control: ADP Is the Throttle' },
      {
        kind: 'para',
        text: 'ADP, not oxygen, is the throttle. Britton Chance and G.R. Williams drew the state map in 1955: with ADP exhausted (state 4) protons cannot return, the dam fills, and the chain stops pressing electrons — oxygen uptake falls to a trickle; feed ADP (state 3) and uptake leaps. The acceptor control ratio between the two states, typically 3–10, tests mitochondrial health. The loop closes at the turbine: block the c-ring with oligomycin and oxygen uptake collapses — the chain stalls behind a full dam; add an uncoupler and oxygen uptake races with no ATP — the classic proof of coupling. The ATP–ADP translocase exchanges ATP4− out for ADP3− in — an electrogenic swap driven by Δψ, worth about a quarter of the gradient — with poisons of its own: atractyloside, from a Mediterranean thistle, locks it from the cytosolic side; bongkrekic acid, the agent in tainted coconut tempeh, from the matrix side.',
      },
      { kind: 'heading', text: 'Uncouplers and the Price of Heat' },
      {
        kind: 'para',
        text: 'An uncoupler is a proton leak with no turbine. 2,4-Dinitrophenol is a weak acid that crosses the membrane in its neutral form and releases its proton on the far side — in either direction — erasing both walls. The chain, unthrottled, races; oxygen consumption soars; ATP stops; the energy leaves as heat. The history is cautionary: French munitions workers making DNP in the Great War lost weight dramatically; Cutting and Tainter’s 1933 trials made it a diet drug for roughly a hundred thousand people; hyperthermia and cataracts followed, and regulators banned it in 1938 — grey-market pills still kill. The body’s own uncoupler is better engineered: brown fat’s UCP1 — thermogenin — is a proton channel switched on by free fatty acids when noradrenaline hits β3 receptors. Infants carry brown fat for warmth; adults keep depots under the collarbone that light up on cold-exposure scans — the same leak, licensed.',
      },
      { kind: 'heading', text: 'The Leak: Reactive Oxygen' },
      {
        kind: 'para',
        text: 'The waterfall leaks. One electron in a few hundred escapes the pool chemistry — at complex I’s Q site and complex III’s Qo semiquinone — and reduces oxygen directly to superoxide. Superoxide dismutase makes hydrogen peroxide; catalase and glutathione peroxidase finish the job. In 1956 Denham Harman proposed that this leak drives aging; mitochondrial DNA — a bare 16.6-kilobase circle without histones, nanometers from the leak — accumulates mutations accordingly. The clinical face is Leber’s hereditary optic neuropathy: maternally inherited mutations in complex I’s mitochondrial genes that blind the optic nerve, the chain’s hungriest customer. A moderate leak also signals adaptation — the relationship is hormetic, not simply toxic.',
      },
      { kind: 'heading', text: 'Worked Examples' },
      {
        kind: 'example',
        title: 'Worked Example — The Proton Ledger, End to End',
        steps: [
          'Sum the pumps per NADH: I 4 + III 4 + IV 2 = 10 protons to the P side. Per FADH2 (entering at Q, skipping I): 0 + 4 + 2 = 6.',
          'Rotor arithmetic: the mammalian c-ring is c8, so one turn costs 8 protons and makes 3 ATP — 8 ÷ 3 = 2.67 protons per ATP at the synthase.',
          'Add the trade route: the ATP4−/ADP3− antiport spends Δψ worth about one proton; charging phosphate import rounds the bookkeeping to ≈ 4 protons per ATP. (Books apportion 3.7–4.7 by transport conventions; the operational figure is 4.)',
          'Divide: 10 ÷ 4 = 2.5 ATP per NADH; 6 ÷ 4 = 1.5 ATP per FADH2 — the measured P/O ratios.',
          'Per glucose: 10 NADH × 2.5 = 25; 2 FADH2 × 1.5 = 3; plus 2 + 2 substrate-level = 32. Via the cheap shuttle, the two cytosolic NADH drop from 5.0 to 3.0 — the audit’s 30.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — The Efficiency Audit',
        steps: [
          'Banked: 32 ATP × 30.5 kJ/mol = 976 kJ per mole.',
          'Fuel: glucose combustion’s standard drop is −2,840 kJ/mol.',
          'Efficiency: 976 ÷ 2,840 = 0.344 — about 34%.',
          'Via the cheap shuttle: 30 × 30.5 = 915; 915 ÷ 2,840 = 32.2%.',
          'The other two thirds leave as heat — the reason a resting body holds 37 °C without shivering, and why uncoupled mitochondria make superb heaters.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — Five Fingerprints at the Membrane',
        steps: [
          'Healthy state 3: oxygen uptake and ATP synthesis rise and fall together.',
          'Rotenone (I’s Q site): NADH-linked oxygen uptake stops, but succinate-fed uptake (FADH2, entering at Q) continues — the entry-point test.',
          'Antimycin A (Qi site): everything stops; no QH2 can empty, the pool jams in both directions.',
          'Cyanide or carbon monoxide (a3–CuB binuclear center): full stop regardless of entry point — the waterfall has no exit.',
          'Oligomycin (Fo rotor): oxygen uptake collapses and ATP synthesis falls with it — turbine blocked, coupling intact. DNP: oxygen uptake races while ATP stays at zero — a leak, not a block.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Cyanide medicine: nitrites induce methemoglobin to trap cyanide in the blood; sodium thiosulfate lets rhodanese convert it to thiocyanate; hydroxocobalamin mops up the rest.',
          'DNP’s afterlife: banned in 1938, the molecule resurfaces in grey-market slimming pills every few years — the leak is indiscriminate; watch body temperature.',
          'Brown fat as therapy: cold-activated supraclavicular depots show on scans; activating UCP1 deliberately is a standing target of obesity research — burning fuel as heat on purpose.',
          'Mitochondrial genetics: Leber’s optic neuropathy and the heteroplasmy threshold make complex I mutations a genetics case study; the machine explains the organ bias — optic-nerve cells run the chain hardest.',
          'Metformin, the world’s most-prescribed glucose-lowering drug, mildly inhibits complex I — rotenone’s target — at a dose the liver tolerates, lowering hepatic glucose output through the energy charge.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Six slips recur. First, oxygen does not make ATP — it only pulls electrons through the chain and clears them as water; uncoupled mitochondria breathe and make no ATP. Second, 2.5 and 1.5 are non-integers because ten and six protons meet about four per ATP — exact chemistry, fractional coupling. Third, complex II pumps nothing — it is an entry door, not a pump. Fourth, the synthase runs both ways: with the dam empty it hydrolyzes ATP, and the IF1 inhibitor protein clamps it during ischemia. Fifth, Δψ dominates ΔpH about four to one — a protonophore erases both walls, while a potassium ionophore such as valinomycin erases only the electrical one. Sixth, an uncoupler speeds the chain and an inhibitor stalls it — the oxygen-uptake fingerprint tells them apart in one experiment.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'chemiosmosis', def: 'Mitchell’s 1961 mechanism: the chain converts redox energy into a transmembrane proton gradient; its return through ATP synthase powers ATP synthesis.' },
          { term: 'proton-motive force (Δp)', def: 'The gradient as one voltage: Δp = Δψ − 59.2·ΔpH millivolts; about 200 mV in a working mitochondrion, worth ≈ 19–21 kJ per mole of protons.' },
          { term: 'Q cycle', def: 'Complex III’s answer to the two-electron Q / one-electron cytochrome c mismatch (Mitchell, 1975): a bifurcated Qo oxidation and a Qi reduction, netting four protons out per two electrons.' },
          { term: 'binding-change mechanism', def: 'Boyer’s account of the synthase: proton-driven γ rotation cycles each β site through open, loose and tight; the energy pays for affinity changes and ATP release.' },
          { term: 'P/O ratio', def: 'ATP made per oxygen atom reduced — 2.5 per NADH, 1.5 per FADH2; the arithmetic behind every honest 30–32 audit.' },
          { term: 'respiratory control', def: 'ADP availability throttles the chain: dam full, chain stalled (state 4); ADP lets protons return and oxygen uptake leaps (state 3); the acceptor control ratio tests health.' },
          { term: 'uncoupler', def: 'A proton leak without a turbine — dinitrophenol crossing the lipid, or brown fat’s licensed UCP1 channel — converting the gradient straight to heat.' },
          { term: 'electrogenic antiport', def: 'The ATP–ADP translocase’s ATP4−-out/ADP3−-in swap, driven by Δψ, worth about a quarter of the gradient; atractyloside and bongkrekic acid lock it.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'How many protons does one FADH2 move to the P side, entering at Q?',
            options: ['4', '6', '10', '12'],
            answer: 1,
            explain: 'FADH2 skips complex I: 0 + 4 (III) + 2 (IV) = 6 — why its P/O is 1.5, not 2.5.',
          },
          {
            q: 'At four protons per ATP, one NADH’s ten protons are worth:',
            options: ['2.0 ATP', '2.5 ATP', '3.0 ATP', '4.0 ATP'],
            answer: 1,
            explain: '10 ÷ 4 = 2.5 — the measured P/O ratio; 6 ÷ 4 = 1.5 for FADH2.',
          },
          {
            q: 'Cyanide halts the chain by binding:',
            options: ['complex I’s FMN', 'the Q pool', 'the a3–CuB binuclear center of complex IV', 'the ATP–ADP translocase'],
            answer: 2,
            explain: 'Cyanide, carbon monoxide and azide all bind the binuclear center — the waterfall loses its exit.',
          },
          {
            q: 'Oligomycin is added to coupled, ADP-driven mitochondria. What happens?',
            options: ['Oxygen uptake races while ATP stops', 'Oxygen uptake and ATP synthesis both collapse', 'Oxygen uptake is unchanged', 'ATP synthesis doubles'],
            answer: 1,
            explain: 'Blocking the Fo rotor fills the dam; backpressure stalls the chain — both fall together (an uncoupler would invert the pattern).',
          },
          {
            q: 'One full Q cycle: how many protons released and taken up?',
            options: ['2 released (P), 4 taken (N)', '4 released (P), 2 taken (N)', '4 released (P), 4 taken (N)', '6 released (P), none taken'],
            answer: 1,
            explain: 'Two QH2 oxidized at Qo release 4 H+ to the P side; one Q reduced at Qi takes 2 H+ from the N side.',
          },
          {
            q: 'Two cytosolic NADH enter via the glycerol-3-phosphate shuttle instead of malate–aspartate. The cost in ATP:',
            options: ['0', '1', '2', '5'],
            answer: 2,
            explain: 'Full value 2 × 2.5 = 5.0 drops to FADH2-class 2 × 1.5 = 3.0 — the audit’s 32 becomes 30.',
          },
          {
            q: 'In Boyer’s binding-change mechanism, proton flow directly powers:',
            options: ['the condensation of ADP and Pi at the catalytic site', 'γ-rotation that cycles the β sites through O, L and T', 'electron transfer through complex I', 'ADP import by the translocase'],
            answer: 1,
            explain: 'The rotation pays for affinity changes and ATP release; the condensation chemistry is near-equilibrium and needs almost no push.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Grounding: Nelson & Cox, Lehninger Principles of Biochemistry — the oxidative-phosphorylation chapters; Nicholls & Ferguson, Bioenergetics; Berg, Tymoczko & Stryer, Biochemistry — the ATP-synthase chapter. Primary sources: Mitchell (1961), Nature 191:144; Jagendorf & Uribe (1966), PNAS 55:170; Racker & Stoeckenius (1974), JBC 249:662; Chance & Williams (1955), JBC 217:383; Abrahams, Leslie, Lutter & Walker (1994), Nature 370:621; Boyer (1997), Annual Review of Biochemistry 66:717; Watt et al. (2010), PNAS 107:16823 on the c8 ring; Harman (1956). Carve notes: the cell-biology respiration lesson owns the chain survey, the 30–32 audit and the gas arithmetic; the energy-economy overview owns ATP’s currency chemistry; §3.2 owns the succinate-dehydrogenase hand-off and the FADH2-discount pointer cashed here; photosynthesis owns the chloroplast twin. Next: §3.4 — Carbohydrate & Lipid Traffic: the roads that feed glycolysis and the wheel.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'bioc-carbohydrate-lipid-traffic',
    title: 'Carbohydrate and Lipid Traffic: Storing, Building, Burning',
    domain: 'Life Sciences',
    field: 'Biochemistry',
    branch: 'Metabolism',
    tier: 'intermediate',
    concepts: [
      'The liver traffic map: the glycogen granule, the glucose-6-phosphate hub and the blood',
      'Phosphorolysis: why glycogen is broken with phosphate, not water',
      'Phosphorylase mechanics: PLP as proton wrench, debranching, the PKA cascade',
      'Gluconeogenesis: four bypass enzymes and the six-bond bill',
      'The pentose-phosphate lane: NADPH manufacture and reversible carbon shuffling',
      'β-oxidation: Knoop’s two-carbon clue, the carnitine tollgate, the four-station spiral',
      'Fatty-acid synthesis: the mirror workshop, ACP and the NADPH bill',
      'The malonyl-CoA traffic light: one molecule decides burn or store',
    ],
    words: 3500,
    readMins: 18,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Glycolysis, the wheel and the chain are combustion machinery — but a cell that only burns dies with its next meal. Life also runs warehouses and workshops: sugar packed into glycogen granules, fat condensed into triglyceride depots, glucose manufactured from scrap when supply stops. This lesson maps the traffic between those rooms. Everything pivots on one crossroads metabolite — glucose-6-phosphate, the hub where storage, export, burning and NADPH manufacture all meet — and, at the acetyl-CoA junction downstream, on a single small molecule, malonyl-CoA, the traffic light deciding whether fat is burned or built.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Von Gierke disease, McArdle disease, favism, sudden-infant-death-linked MCAD deficiency and AMPK-targeting diabetes drugs all live on this map. The six high-energy bonds gluconeogenesis charges per glucose set the metabolic price of fasting; the pentose-phosphate lane is why fava beans can be lethal to some people and harmless to others; and the fat ledger explains lipid’s twice-per-gram energy density.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'How this lesson is scoped',
        text: 'The cell-biology integration chapter owns the fed/fasted organ map, the Cori-cycle arithmetic, the fructose-2,6-bisphosphate switch, AMPK, the ketone bridge and the anaplerotic doors — read it for strategy. This lesson owns the machine room: glycogen chemistry, the gluconeogenesis bypasses and their six-bond bill, the pentose-phosphate shuffle, the β-oxidation spiral with its stearate ledger, and the synthesis workshop’s NADPH bill. Earlier lessons of this chapter own glycolysis (§3.1), the wheel (§3.2) and the chain (§3.3); this one feeds and drains them.',
        tone: 'path',
      },
      { kind: 'heading', text: 'The Granule: Sugar Warehousing with a Phosphate Trick' },
      {
        kind: 'para',
        text: 'Glycogen is one giant glucose polymer per granule — up to ~55,000 residues in liver — linked α-1,4 along strands, α-1,6 at a branch roughly every ten residues. Branching is not clutter: phosphorylase chews only at chain ends, so branches multiply the ends — and the rate the warehouse empties. Every molecule is covalently anchored to glycogenin, a self-glucosylating primer protein characterised by William Whelan’s group in the 1980s, which builds the first stub before synthase takes over.',
      },
      {
        kind: 'para',
        text: 'The breakdown breakthrough belongs to Carl and Gerty Cori, who showed in 1936–37 that phosphorylase cleaves the α-1,4 bond with inorganic phosphate rather than water — phosphorolysis. The product is glucose-1-phosphate, the “Cori ester”. The trick is bookkeeping: hydrolysis yields free glucose, which must spend one ATP to be phosphorylated; phosphorolysis banks the bond energy and hands the cell an already-activated sugar. Both muscle and liver phosphorylase carry a startling prosthetic group: pyridoxal-5′-phosphate, the vitamin-B6 derivative, first recognised as an enzyme cofactor here. Its aldehyde chemistry goes unused: the 5′-phosphate swings a proton while phosphate attacks through a half-chair, oxocarbenium-like transition state. A vitamin as a wrench, not a reagent.',
      },
      {
        kind: 'para',
        text: 'Synthesis runs the reverse road with a different currency: glycogen synthase extends α-1,4 strands only from UDP-glucose, and a branching enzyme cuts a ~7-residue terminal block and re-attaches it α-1,6. Control is a phosphorylation cascade: adrenaline or glucagon raises cyclic AMP — Earl Sutherland’s second messenger (Nobel 1971) — activating PKA; PKA activates phosphorylase kinase, Edmond Fischer and Edwin Krebs’s 1955 discovery (Nobel 1992), which converts phosphorylase from the b (off) to the a (on) form. The same volley switches glycogen synthase off — one signal, two opposite effects. Insulin pushes the reciprocal protein-phosphatase-1 arm; muscle adds an input no hormone provides — Ca²⁺ from contraction binds phosphorylase kinase’s calmodulin: exercise starts mobilisation before adrenaline arrives.',
      },
      {
        kind: 'para',
        text: 'One mechanical problem remains: phosphorylase stalls four residues short of every α-1,6 branch point. Two debranching enzymes finish: a transferase swings three remaining residues onto a neighbouring strand, and α-1,6-glucosidase frees the lone branch residue as glucose. One free glucose per branch — about one residue in ten — is the granule’s only unactivated leak; the rest arrives as glucose-1-phosphate. Liver then adds the export door that muscle lacks: glucose-6-phosphatase, in the endoplasmic-reticulum membrane, frees glucose for the blood. Muscle possesses no such enzyme — its granule is strictly private fuel.',
      },
      {
        kind: 'figure',
        caption: 'LEFT — the liver traffic map. The glucose-6-phosphate hub joins the glycogen granule (phosphorylase out through G1P, synthase in through UDP-glucose), the G6Pase export door, the pentose-phosphate lane (NADPH) and the gluconeogenesis inflow doors — six high-energy bonds per glucose. At the acetyl-CoA junction, malonyl-CoA blocks the carnitine tollgate (CPT-I). RIGHT — the β-oxidation spiral: four stations, the chain shrinking two carbons per turn, one FADH2, one NADH, one acetyl-CoA per cycle.',
        afterConcept: 5,
        svg: `<svg viewBox="0 0 880 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Liver traffic map and the beta-oxidation spiral">
  <rect x="0" y="0" width="880" height="520" fill="#faf7f2"/>
  <text x="220" y="28" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f2937">LEFT — liver traffic map</text>
  <text x="660" y="28" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f2937">RIGHT — the β-oxidation spiral</text>
  <line x1="440" y1="12" x2="440" y2="508" stroke="#d6cec2" stroke-width="2"/>
  <rect x="120" y="44" width="200" height="34" rx="17" fill="#dc2626"/>
  <text x="220" y="66" text-anchor="middle" font-size="14" fill="#fff">blood glucose</text>
  <rect x="132" y="106" width="176" height="34" rx="6" fill="#fbbf24"/>
  <text x="220" y="128" text-anchor="middle" font-size="14" fill="#1f2937">G6Pase door</text>
  <line x1="220" y1="106" x2="220" y2="82" stroke="#1f2937" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="140" y="168" width="160" height="40" rx="6" fill="#fde68a" stroke="#b45309"/>
  <text x="220" y="193" text-anchor="middle" font-size="13" fill="#1f2937">glucose-6-P hub</text>
  <line x1="220" y1="168" x2="220" y2="144" stroke="#1f2937" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="20" y="248" width="150" height="66" rx="8" fill="#a3a3a3"/>
  <text x="95" y="274" text-anchor="middle" font-size="13" fill="#fff">glycogen granule</text>
  <text x="95" y="292" text-anchor="middle" font-size="11" fill="#fff">(α-1,4 + α-1,6)</text>
  <line x1="95" y1="248" x2="150" y2="212" stroke="#1f2937" stroke-width="2" marker-end="url(#arr)"/>
  <text x="86" y="224" text-anchor="middle" font-size="11" fill="#1f2937">phosphorylase → G1P</text>
  <line x1="185" y1="248" x2="245" y2="212" stroke="#1f2937" stroke-width="2" marker-end="url(#arr)"/>
  <text x="292" y="232" text-anchor="middle" font-size="11" fill="#1f2937">synthase ← UDP-glucose</text>
  <rect x="270" y="168" width="150" height="40" rx="6" fill="#bbf7d0" stroke="#15803d"/>
  <text x="345" y="188" text-anchor="middle" font-size="12" fill="#1f2937">pentose-phosphate</text>
  <text x="345" y="203" text-anchor="middle" font-size="12" fill="#1f2937">lane → NADPH</text>
  <line x1="300" y1="168" x2="272" y2="148" stroke="#1f2937" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="20" y="352" width="200" height="44" rx="6" fill="#dbeafe" stroke="#1d4ed8"/>
  <text x="120" y="370" text-anchor="middle" font-size="12" fill="#1f2937">inflow doors: lactate · alanine</text>
  <text x="120" y="387" text-anchor="middle" font-size="12" fill="#1f2937">· glycerol (gluconeogenesis)</text>
  <line x1="140" y1="352" x2="185" y2="212" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr)"/>
  <text x="116" y="338" text-anchor="middle" font-size="11" fill="#1d4ed8">6 high-energy bonds / glucose</text>
  <rect x="150" y="446" width="150" height="36" rx="6" fill="#fca5a5" stroke="#b91c1c"/>
  <text x="225" y="469" text-anchor="middle" font-size="13" fill="#1f2937">acetyl-CoA junction</text>
  <line x1="225" y1="446" x2="235" y2="212" stroke="#b91c1c" stroke-width="2" stroke-dasharray="4 3"/>
  <rect x="330" y="446" width="96" height="36" rx="6" fill="#f59e0b"/>
  <text x="378" y="463" text-anchor="middle" font-size="11" fill="#1f2937">malonyl-CoA</text>
  <text x="378" y="477" text-anchor="middle" font-size="11" fill="#1f2937">traffic light</text>
  <line x1="300" y1="464" x2="330" y2="464" stroke="#b91c1c" stroke-width="2"/>
  <line x1="378" y1="446" x2="416" y2="330" stroke="#b91c1c" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="412" y="396" text-anchor="middle" font-size="10" fill="#b91c1c">blocks CPT-I</text>
  <text x="660" y="58" text-anchor="middle" font-size="13" fill="#1f2937">carnitine tollgate (CPT-I) — blocked by malonyl-CoA</text>
  <rect x="560" y="70" width="200" height="40" rx="6" fill="#fca5a5" stroke="#b91c1c"/>
  <text x="660" y="95" text-anchor="middle" font-size="13" fill="#1f2937">acyl-CoA · C16</text>
  <line x1="660" y1="110" x2="660" y2="150" stroke="#1f2937" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="580" y="150" width="160" height="34" rx="6" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="660" y="172" text-anchor="middle" font-size="12" fill="#1f2937">1 · FAD oxidation</text>
  <text x="746" y="172" font-size="11" fill="#6b7280">→ FADH2 (1.5)</text>
  <line x1="660" y1="184" x2="660" y2="206" stroke="#1f2937" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="580" y="206" width="160" height="34" rx="6" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="660" y="228" text-anchor="middle" font-size="12" fill="#1f2937">2 · hydration</text>
  <line x1="660" y1="240" x2="660" y2="262" stroke="#1f2937" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="580" y="262" width="160" height="34" rx="6" fill="#f3f4f6" stroke="#6b7280"/>
  <text x="660" y="284" text-anchor="middle" font-size="12" fill="#1f2937">3 · NAD+ oxidation</text>
  <text x="746" y="284" font-size="11" fill="#6b7280">→ NADH (2.5)</text>
  <line x1="660" y1="296" x2="660" y2="318" stroke="#1f2937" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="580" y="318" width="160" height="40" rx="6" fill="#fde68a" stroke="#b45309"/>
  <text x="660" y="336" text-anchor="middle" font-size="12" fill="#1f2937">4 · thiolysis</text>
  <text x="660" y="351" text-anchor="middle" font-size="11" fill="#1f2937">C2 leaves as acetyl-CoA</text>
  <text x="660" y="384" text-anchor="middle" font-size="13" fill="#1f2937">C16 → C14 → C12 → … → C4</text>
  <line x1="586" y1="374" x2="540" y2="374" stroke="#6b7280" stroke-width="2" stroke-dasharray="3 3" marker-end="url(#arr)"/>
  <text x="534" y="378" text-anchor="end" font-size="11" fill="#6b7280">back to station 1</text>
  <rect x="580" y="404" width="160" height="34" rx="6" fill="#fca5a5" stroke="#b91c1c"/>
  <text x="660" y="426" text-anchor="middle" font-size="12" fill="#1f2937">8 acetyl-CoA (C16 start)</text>
  <text x="660" y="462" text-anchor="middle" font-size="12" fill="#1f2937">→ the wheel (§3.2), one turn each</text>
  <text x="660" y="494" text-anchor="middle" font-size="11" fill="#374151">7 spirals: 7 FADH2 + 7 NADH + 8 acetyl-CoA − 2 bonds for activation</text>
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#1f2937"/>
    </marker>
  </defs>
</svg>`,
      },
      {
        kind: 'example',
        title: 'Worked Example — The Phosphorolysis Bonus and the Branch Tax',
        steps: [
          'Setup: a liver granule of 30,000 glucosyl residues, a branch roughly every ten → branch points = 30,000 ÷ 10 = 3,000.',
          'Branch tax: each branch residue leaves α-1,6-glucosidase as free glucose → 3,000 free glucose (10%); the other 27,000 residues (90%) arrive as glucose-1-phosphate.',
          'Liver export ledger: G1P → G6P via phosphoglucomutase, 0 ATP; G6P → blood via G6Pase, 0 ATP. Export bill for all 30,000 residues: 0.',
          'Counterfactual A — no granule: importing 30,000 glucose costs glucokinase 1 ATP each → 30,000 ATP saved by the granule.',
          'Counterfactual B — building from scratch: 6 bonds per glucose × 30,000 = 180,000 bonds. The liver empties its granule first (the first 12–24 h of fasting) and only then pays gluconeogenesis.',
          'Muscle variant: no G6Pase; its 27,000 G1P enter already phosphorylated — saving 27,000 ATP — but the 3,000 branch glucoses still pay hexokinase. The branch tax, paid every time.',
        ],
      },
      {
        kind: 'para',
        text: 'Break any enzyme on this map and the granule stops cooperating — the glycogen storage diseases are the map drawn in bold. Von Gierke disease (type I, Edgar von Gierke, 1929) knocks out glucose-6-phosphatase: the liver floods with unexportable glycogen, blood sugar sags, and the hub backs up into lactate and fat — hepatomegaly, hypoglycaemia, lactic acidosis. Cori disease (type III) removes the debrancher, leaving the granule full of stubs phosphorylase cannot pass. Hers disease (type VI, Hers, 1959) weakens liver phosphorylase; McArdle disease (type V, Brian McArdle, 1951) removes muscle phosphorylase — patients tire in seconds, exercised muscle releases no lactate (the diagnostic flat line), yet they enjoy a “second wind” once fatty-acid mobilisation and liver gluconeogenesis catch up. Pompe disease (type II, 1932) is the lysosomal exception — the organelle atlas owns that compartment.',
      },
      { kind: 'heading', text: 'Building Glucose from Scrap: Gluconeogenesis and Its Bill' },
      {
        kind: 'para',
        text: 'When the granule runs dry the brain still demands glucose, and red cells — mitochondria-free — still burn it anaerobically. The liver and kidney therefore build glucose from scrap — gluconeogenesis — mainly from lactate (muscle’s overflow), alanine (muscle’s nitrogen-wrapped carbon), glycerol (the fat depot’s backbone, as dihydroxyacetone phosphate) and propionate (the odd-chain door). The naïve plan — glycolysis run backwards — fails at the three irreversible steps; evolution’s answer is four bypass enzymes, not a reverse gear.',
      },
      {
        kind: 'para',
        text: 'The bypasses, in traffic order. (1) Pyruvate carboxylase — discovered by Merton Utter and Bruce Keech in 1960 while tracing gluconeogenesis — charges pyruvate + CO2 + ATP → oxaloacetate, with biotin swinging the carboxyl group and acetyl-CoA as its obligatory activator: fat burning arriving signals “build more sugar”. Oxaloacetate cannot cross the inner membrane — it trades to malate and back. (2) PEP carboxykinase pays a GTP to decarboxylate OAA → PEP — undoing what carboxylation just bought. (3) Fructose-1,6-bisphosphatase hydrolyses the glycolytic valve’s product — no ATP, pure pull — target of the F2,6BP switch the integration chapter owns. (4) Glucose-6-phosphatase finishes the job at the hub itself. Meanwhile the glyceraldehyde-3-phosphate dehydrogenase step runs backwards, consuming two cytosolic NADH per glucose — the lactate door supplies them in the same stroke.',
      },
      {
        kind: 'derivation',
        title: 'The six-bond bill, derived reaction by reaction',
        statement:
          'Two pyruvate → one glucose. Count every high-energy phosphate the bypasses and the reversed glycolytic steps actually spend; hydrolytic bypasses spend none.',
        prerequisites: [
          'Glycolysis’s net standard ledger is −72.7 kJ/mol; a naive reversal would cost +72.7 and stall at the three irreversible steps',
          'PC: pyruvate + CO2 + ATP → OAA; PEPCK: OAA + GTP → PEP; both run once per pyruvate, so twice per glucose',
        ],
        steps: [
          {
            label: 'Step 1 — the pyruvate kinase bypass (×2)',
            formula: 'PC: 2\\ ATP\\ +\\ PEPCK:\\ 2\\ GTP\\ =\\ 4\\ bonds',
            explanation:
              'Each pyruvate pays one ATP to load biotin’s CO2 and one GTP to cash out as PEP. Four bonds per glucose — the price of tunnelling under the +31.4 kJ/mol wall.',
          },
          {
            label: 'Step 2 — the reversed GAPDH step (×2)',
            formula: 'PGK\\ reversed:\\ 2\\ ATP\\ =\\ 2\\ bonds\\ +\\ 2\\ NADH\\ consumed',
            explanation:
              '3-PGA must be re-armed to 1,3-BPG before GAPDH runs backwards: 2 ATP and 2 NADH per glucose — the lactate door’s hidden balance.',
          },
          {
            label: 'Step 3 — the two hydrolytic bypasses',
            formula: 'FBPase-1:\\ 0\\ bonds\\ ·\\ G6Pase:\\ 0\\ bonds',
            explanation:
              'Both are hydrolases, not kinases: each bleeds off a phosphate, adding its own pull on top of the six-bond count.',
          },
        ],
        result: 'Total: 2 ATP (PC) + 2 GTP (PEPCK) + 2 ATP (PGK) = 6 high-energy bonds + 2 NADH per glucose — the bill the integration chapter’s Cori-cycle arithmetic quotes. The surcharge is what makes fasting expensive and granules precious.',
      },
      { kind: 'heading', text: 'The Pentose-Phosphate Lane: Paying in NADPH' },
      {
        kind: 'para',
        text: 'Not every glucose-6-phosphate should burn. Some must be skimmed for NADPH, the cell’s electron courier for biosynthesis and detoxification, and for ribose-5-phosphate, the backbone every nucleotide needs (the nucleotide-chemistry lesson owns that demand). The pentose-phosphate lane runs in two arms of opposite character. The oxidative arm is a dead-end cash register: glucose-6-phosphate dehydrogenase — Otto Warburg’s early-1930s “Zwischenferment” — pulls two electrons onto NADP+, 6-phosphogluconolactonase opens the lactone, and 6-phosphogluconate dehydrogenase oxidises and decarboxylates, leaving five-carbon ribulose-5-phosphate, one CO2 and two NADPH per visit.',
      },
      {
        kind: 'para',
        text: 'The non-oxidative arm, assembled by Bernard Horecker’s group in the 1950s, is reversible carbon plumbing: transketolase (thiamine pyrophosphate — the B1 motif met at PDH) swings two-carbon units; transaldolase swings three. Together they turn three pentoses into two hexoses and one triose — 3 × C5 = 2 × C6 + 1 × C3 — no ATP, no NADPH: pure reversible reshuffling that flexes toward whatever the cell lacks — more NADPH (another oxidative pass), more ribose, or more glycolytic fuel.',
      },
      {
        kind: 'example',
        title: 'Worked Example — The PPP Carbon Ledger',
        steps: [
          'One pass, oxidative arm: 3 glucose-6-P (18 C) → 3 ribulose-5-P (15 C) + 3 CO2 + 6 NADPH.',
          'Isomerise and epimerise: 1 ribulose-5-P → ribose-5-P; 2 ribulose-5-P → 2 xylulose-5-P.',
          'Transketolase: xylulose-5-P + ribose-5-P → glyceraldehyde-3-P (C3) + sedoheptulose-7-P (C7). Carbon check: 5 + 5 = 3 + 7.',
          'Transaldolase: sedoheptulose-7-P + glyceraldehyde-3-P → fructose-6-P (C6) + erythrose-4-P (C4). Check: 7 + 3 = 6 + 4.',
          'Transketolase again: xylulose-5-P + erythrose-4-P → fructose-6-P (C6) + glyceraldehyde-3-P (C3). Check: 5 + 4 = 6 + 3.',
          'Net of one pass: 2 fructose-6-P + 1 glyceraldehyde-3-P (15 C back to glycolysis) + 3 CO2 + 6 NADPH. Six rounds rebuild five hexose-phosphates from six pentoses — net 1 glucose fully oxidised per 12 NADPH: the standard G6P + 12 NADP+ + 7 H2O → 6 CO2 + 12 NADPH.',
        ],
      },
      {
        kind: 'para',
        text: 'The lane’s medical fame belongs to its cash register. Red cells carry no mitochondria and no other NADPH source, so glutathione reductase — keeper of haemoglobin’s sulphydryls — depends entirely on G6PD. G6PD deficiency is the commonest human enzymopathy (hundreds of millions, X-linked): oxidants such as primaquine or the fava bean’s aglycones overwhelm the recycling system, haemoglobin precipitates into Heinz bodies and the spleen nicks them out — “bite cells”. The deficiency persists because it balances malaria: Luzzatto’s group showed in 1969 that G6PD-deficient red cells resist Plasmodium infection.',
      },
      { kind: 'heading', text: 'Fat’s Arrival Hall: β-Oxidation, Two Carbons at a Time' },
      {
        kind: 'para',
        text: 'The β-oxidation spiral was guessed before it was measured: in 1904 Franz Knoop fed dogs fatty acids tagged with a phenyl ring — even-chained substrates came out as phenylacetic acid, odd-chained as benzoic acid, as if oxidation always chipped two carbons from the carboxyl end. Half a century of enzymology turned the guess into four stations. Activation first: acyl-CoA synthetase trades ATP → AMP + PPi — two high-energy bonds, the road’s toll — to build the thioester. Then the carnitine tollgate: CPT-I swaps the CoA for carnitine, the translocase ferries it across, CPT-II restores CoA inside. Irving Fritz showed in the mid-1950s that carnitine powerfully stimulates long-chain oxidation; in 1978 McGarry and Foster identified CPT-I as malonyl-CoA’s site of action.',
      },
      {
        kind: 'para',
        text: 'Inside the matrix the four-station spiral runs: (1) acyl-CoA dehydrogenase passes two electrons to FAD, leaving a trans-double bond; (2) enoyl-CoA hydratase adds water across it; (3) β-hydroxyacyl-CoA dehydrogenase passes two electrons to NAD+; (4) thiolase splits the β-keto bond with a second CoA, releasing one acetyl-CoA and a chain two carbons shorter, back to station 1. Per turn: one FADH2 (worth 1.5 on §3.3’s ledger), one NADH (2.5) and one acetyl-CoA (10 through wheel and chain). The FADH2 discount is §3.2’s setup cashed — acyl-CoA dehydrogenase hands directly to the Q pool, complex I never sees it. Very-long-chain fats start in peroxisomes, which shave them short; the matrix finishes the job.',
      },
      {
        kind: 'para',
        text: 'The spiral’s clinical face is MCAD deficiency, the commonest inborn error of fatty-acid oxidation. A dead medium-chain dehydrogenase leaves the fasting child unable to finish the spiral: hypoketotic hypoglycaemia — fat burns to glucose-paper money, but the ketone coins the integration chapter describes never print. Newborn screening reads the fingerprint: the aborted spiral accumulates medium-chain acyl-carnitines; tandem mass spectrometry of a blood spot catches them.',
      },
      {
        kind: 'example',
        title: 'Worked Example — The Stearate Ledger',
        steps: [
          'Stearate, C18:0. Activation: ATP → AMP + PPi = 2 high-energy bonds paid at the door.',
          'Spiral count: 18/2 − 1 = 8 turns; the last splits C4 into two acetyl-CoA — 9 total.',
          'Per-turn harvest: 8 FADH2 × 1.5 = 12; 8 NADH × 2.5 = 20 — both priced on §3.3’s ledger.',
          'Acetyl-CoA harvest: 9 × 10 = 90, each through §3.2’s wheel and §3.3’s chain.',
          'Total: 12 + 20 + 90 − 2 = 120 per stearate — the same arithmetic as the molecules-of-life book’s palmitate-106 survey, one carbon-pair longer.',
          'Density check: 120 ÷ 18 ≈ 6.7 ATP per carbon versus glucose’s ~5.0 (the respiration lesson’s 30–32 audit) — the dense-fuel dividend of a molecule already reduced.',
        ],
      },
      { kind: 'heading', text: 'The Mirror Workshop: Fatty-Acid Synthesis' },
      {
        kind: 'para',
        text: 'Synthesis is β-oxidation in a mirror — same four moves, reversed order, different room and carriers: cytosol and NADPH, not matrix and NAD+. Salih Wakil’s laboratory identified malonyl-CoA as the chain-extending donor in the late 1950s; the malonyl trick is the mirror’s engine: acetyl-CoA is first carboxylated by acetyl-CoA carboxylase (ACC) — biotin again, citrate as its allosteric switch, palmitoyl-CoA as its feedback brake, AMPK phosphorylation the integration chapter owns as its off-switch. Every two-carbon addition decarboxylates a malonyl: carboxylation is the puppet-string that makes condensation pull.',
      },
      {
        kind: 'para',
        text: 'The workshop is a dimer of one 2,500-residue protein carrying seven active sites, the growing chain tethered to acyl carrier protein (ACP) — named by P. Roy Vagelos’s group in 1964 — whose phosphopantetheine arm is the same pantetheine CoA wears; the molecules-of-life lesson owns that chemistry. Four stations per round — condensation, reduction, dehydration, reduction — extend the chain by C2, and after seven rounds (C16) a thioesterase releases palmitate. Cytosolic acetyl-CoA arrives via the citrate shuttle, whose malate exit leg runs malic enzyme — banking one NADPH per exported acetyl-CoA. Konrad Bloch’s laboratory mapped the Δ9 desaturase around 1960, the enzyme that inserts the double bonds membranes need; the two essential fatty acids stay a nutrition-science fact.',
      },
      {
        kind: 'example',
        title: 'Worked Example — The NADPH Bill for One Palmitate',
        steps: [
          'Palmitate, C16, from 8 acetyl-CoA + 7 ATP + 14 NADPH — 7 malonyl condensations, 1 ATP each.',
          'Citrate shuttle: 8 rounds export 8 acetyl-CoA; each round’s malic-enzyme rebate banks 1 NADPH → 8.',
          'Shortfall: 14 − 8 = 6 NADPH must come from the pentose-phosphate lane — one oxidative-arm pass (3 glucose-6-P → 6 NADPH) covers it exactly.',
          'Reading the bill: a fed cell making fat must run the PPP — the two pathways rise together under insulin. Traffic on both roads, one map.',
        ],
      },
      { kind: 'heading', text: 'The Traffic Light: One Molecule Decides Burn or Store' },
      {
        kind: 'para',
        text: 'The whole lipid map folds into one point. ACC on → malonyl-CoA rises → synthesis runs, and the same malonyl-CoA binds CPT-I: fresh fat is never burned mid-build. When AMPK phosphorylates ACC (fuel low) or glucagon’s cascade does (fasting), malonyl-CoA falls, the tollgate lifts, and the spiral takes over. The integration chapter’s F2,6BP switch is this light’s carbohydrate twin — one small molecule per junction, flipped by hormones and charge.',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Newborn screening: tandem mass spectrometry reads acyl-carnitine fingerprints on dried blood spots, catching MCAD deficiency before the first fasting crisis.',
          'McArdle management: the flat-lactate exercise test, then programmed low-intensity “second-wind” exercise.',
          'Von Gierke therapy: overnight raw cornstarch — a slow-release glucose drip eaten with a spoon.',
          'G6PD counselling: screen before prescribing primaquine or dapsone; the fava-bean list is regional and real.',
          'Diabetes pharmacology: metformin raises AMP charge, AMPK phosphorylates ACC, malonyl-CoA falls, the tollgate lifts.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Gluconeogenesis is not glycolysis reversed — three steps are bypassed by four enzymes, and two of the bypasses cost bonds while two are free hydrolyses. Phosphorylase does not hydrolyse; its product is glucose-1-phosphate. Muscle glycogen cannot feed the blood — no G6Pase. Activation of a fatty acid costs two bonds (ATP → AMP), not one. The PPP makes NADPH, never ATP. Malonyl-CoA is both building block and brake; and the FADH2 of each spiral turn is worth 1.5, not 2.5 — acyl-CoA dehydrogenase feeds the Q pool past complex I (§3.3’s discount).',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'glucose-6-phosphate hub', def: 'The crossroads where storage (to glycogen), export (G6Pase), burning (glycolysis) and NADPH manufacture (the lane) meet.' },
          { term: 'phosphorolysis', def: 'Cleavage by inorganic phosphate instead of water — the Coris’ 1936 trick yielding glucose-1-phosphate, one ATP saved per residue.' },
          { term: 'glycogenin', def: 'The self-glucosylating primer protein every glycogen molecule is anchored to; it builds the first stub before synthase takes over.' },
          { term: 'glucose-6-phosphatase', def: 'The ER export door of liver and kidney; absent from muscle — hence private muscle fuel.' },
          { term: 'pyruvate carboxylase', def: 'Utter and Keech’s 1960 biotin enzyme: pyruvate + CO2 + ATP → oxaloacetate, switched on by acetyl-CoA — the first bypass.' },
          { term: 'pentose-phosphate lane', def: 'The two-arm diversion from the hub: an oxidative NADPH register plus a reversible transketolase/transaldolase shuffle.' },
          { term: 'carnitine shuttle (CPT-I)', def: 'The tollgate carrying activated long chains into the matrix; malonyl-CoA blocks CPT-I — the traffic light’s hand.' },
          { term: 'malonyl-CoA traffic light', def: 'One molecule with two jobs: C2 donor for synthesis and inhibitor of CPT-I — the guarantee that fat is built or burned, not both.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Two lactate → one glucose. How many high-energy phosphate bonds does gluconeogenesis spend?',
            options: ['2', '4', '6', '8'],
            answer: 2,
            explain: '2 ATP (PC) + 2 GTP (PEPCK) + 2 ATP (reversed PGK) = 6; the hydrolytic bypasses cost nothing, and lactate’s LDH step covers the 2 NADH.',
          },
          {
            q: 'One full pass of the shuffle (3 G6P through both arms) returns which carbon cargo to glycolysis?',
            options: ['3 G6P unchanged', '2 F6P + 1 GAP', '1 F6P + 2 GAP', '3 GAP'],
            answer: 1,
            explain: '3 × C5 → 2 × C6 + 1 × C3, plus 3 CO2 and 6 NADPH — the transketolase/transaldolase plumbing.',
          },
          {
            q: 'Which finding most cleanly points to McArdle disease rather than von Gierke?',
            options: ['fasting hypoglycaemia', 'hepatomegaly', 'no lactate rise in exercised muscle', 'lactic acidosis'],
            answer: 2,
            explain: 'Muscle phosphorylase is gone (type V) — no G1P, no lactate. Hypoglycaemia, hepatomegaly and lactate belong to type I.',
          },
          {
            q: 'Stearate (C18:0) to CO2 and water at 10/2.5/1.5 ATP per acetyl-CoA/NADH/FADH2 yields:',
            options: ['106 ATP', '108 ATP', '120 ATP', '129 ATP'],
            answer: 2,
            explain: '8 × 1.5 + 8 × 2.5 + 9 × 10 − 2 activation = 12 + 20 + 90 − 2 = 120.',
          },
          {
            q: 'Malonyl-CoA shuts down fatty-acid oxidation by binding:',
            options: ['acyl-CoA synthetase', 'CPT-I on the outer membrane', 'acyl-CoA dehydrogenase', 'thiolase'],
            answer: 1,
            explain: 'McGarry and Foster’s 1978 assignment: CPT-I is the tollgate, malonyl-CoA its red light — never full-throttle both ways.',
          },
          {
            q: 'Why does phosphorolysis beat hydrolysis for glycogen mobilisation?',
            options: [
              'it yields free glucose directly',
              'it saves one ATP per residue by producing glucose-1-phosphate',
              'it works without an enzyme',
              'it avoids the debranching enzyme',
            ],
            answer: 1,
            explain: 'G1P enters phosphorylated — no hexokinase payment. Hydrolysis would give free glucose, costing 1 ATP on re-phosphorylation.',
          },
          {
            q: 'One palmitate needs 14 NADPH. How many arrive via the citrate shuttle’s malic-enzyme rebate?',
            options: ['6', '8', '12', '14'],
            answer: 1,
            explain: '8 exported acetyl-CoA → 8 NADPH from malic enzyme; the other 6 come from the pentose-phosphate lane.',
          },
          {
            q: 'A G6PD-deficient red cell dies under oxidant stress because it:',
            options: [
              'cannot make ATP',
              'has no other NADPH source for glutathione recycling',
              'cannot synthesise ribose-5-phosphate',
              'lacks catalase entirely',
            ],
            answer: 1,
            explain: 'No mitochondria, no other NADPH source: glutathione reductase stalls, haemoglobin oxidises into Heinz bodies, the spleen bites them out.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Grounding: Nelson & Cox, Lehninger Principles of Biochemistry — the glycogen, pentose-phosphate and fatty-acid chapters. Primary sources: Cori & Cori (1936–37) on phosphorolysis; Fischer & Krebs (1955); Sutherland’s 1971 Nobel lecture; Utter & Keech (1960); Knoop (1904); Fritz on carnitine (1955–63); Wakil on malonyl-CoA (late 1950s); Majerus, Alberts & Vagelos (1964) naming ACP; McGarry & Foster (1978); Luzzatto, Usanga & Reddy (1969). Carve notes: the integration chapter owns fed/fasted strategy, Cori arithmetic, the F2,6BP switch, AMPK and the ketone bridge; the molecules-of-life book owns fat chemistry and the palmitate-106 survey; §3.1–§3.3 own glycolysis, the wheel and the chain; the organelle atlas owns lysosomes; nutrition science owns essential fats. Next: §3.5 — Nitrogen Metabolism and the Urea Cycle: alanine’s nitrogen after the carbon is spent.',
        tone: 'path',
      },
    ],
  },
]
