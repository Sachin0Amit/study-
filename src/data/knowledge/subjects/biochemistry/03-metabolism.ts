/**
 * Knowledge Universe — Biochemistry — Chapter 03: Metabolic Pathways in Depth
 * 2 lessons · 7,000 words
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
]
