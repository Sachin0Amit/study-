/**
 * Knowledge Universe — Biochemistry — Chapter 03: Metabolic Pathways in Depth
 * 1 lesson · 3,500 words
 * field: Biochemistry · branch: Metabolism
 *
 * §6.2 slot 3.1 (2026-11-02, master loop job 492782): Glycolysis Step by Step.
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
 * This lesson OWNS the reaction-by-reaction mechanism, the standard
 * free-energy table and its derivation from hydrolysis energies, the three
 * poison patterns, the Rapoport–Luebering shunt and the discovery history.
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
]
