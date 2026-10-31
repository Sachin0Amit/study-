/**
 * Knowledge Universe — Cell & Molecular Biology — Chapter 03: Bioenergetics
 * 1 lesson · ~1,968 words
 * field: Cell & Molecular Biology
 * legacy sources: life-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Bioenergetics]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 bio-cellular-respiration-pathways — Cellular Respiration: Glycolysis to the Electron Transport Chain
 */
import type { KnowledgeTopic } from '../../types'

export const cellMolecularBiologyCh03: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-cellular-respiration-pathways',
    title: 'Cellular Respiration: Glycolysis to the Electron Transport Chain',
    domain: 'Life Sciences',
    field: 'Cell & Molecular Biology',
    branch: 'Bioenergetics',
    tier: 'intermediate',
    concepts: [
      'Why cells dismantle glucose slowly',
      'Glycolysis: ten steps, three checkpoints',
      'The pyruvate dehydrogenase link',
      'The Krebs cycle turn by turn',
      'Complexes I–IV and chemiosmosis',
      'ATP accounting: why 30–32, not 36–38',
      'Fermentation: regenerating NAD+',
      'Respiratory quotient',
    ],
    words: 1968,
    readMins: 9,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Ask a cell for its bank statement and it reports in ATP. Respiration keeps the statement positive: glucose is taken apart in controlled, recoverable steps so its energy lands in ATP rather than flashing away as heat. The library’s metabolism lesson maps this economy at survey level; this lesson walks every pathway — the ten glycolysis steps and their checkpoints, the link reaction, the eight-step Krebs cycle, the electron transport chain, the honest ATP audit, fermentation, and the respiratory quotient.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'This is the machinery behind cyanide poisoning, the sprinter’s burn, brewery economics, brown fat and PET scans — and the ATP arithmetic is a fixed question type on NEET, CUET and A-Level papers alike.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'How this lesson is scoped',
        text: 'The Biochemistry “Cell’s Energy Economy” lesson covers the ATP currency, enzyme kinetics and catabolism–anabolism integration at survey level — this is its pathway-deep sequel. Breathing mechanics, lungs and oxygen transport belong to the respiration-anatomy lesson. Read the survey first if the ideas are new.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Why Cells Dismantle Glucose Slowly' },
      {
        kind: 'para',
        text: 'Burning one mole of glucose in air releases about 2,870 kilojoules, nearly all as heat — and a cell cannot bank heat. Oxidation therefore proceeds as a staircase instead of a fire: every step is an enzyme-catalyzed, small-energy transaction, and only a handful capture ATP. The staircase is universal — glycolysis runs in the cytosol of every cell on Earth, and aerobic organisms then ship the product into mitochondria for the oxygen-dependent stages. ATP itself is a recycled currency, about 30.5 kilojoules per mole per phosphate, with a resting human turning over on the order of body weight daily.',
      },
      { kind: 'heading', text: 'Glycolysis: Ten Steps, Three Checkpoints' },
      {
        kind: 'para',
        text: 'The Embden–Meyerhof–Parnas pathway splits glucose into two pyruvates in the cytosol, in three phases. Investment (steps 1–3): hexokinase traps glucose as glucose-6-phosphate — a one-way trap inhibited by its own product; isomerization yields fructose-6-phosphate; then phosphofructokinase (PFK-1) pays the second ATP to make fructose-1,6-bisphosphate. PFK catalyzes the committed step, the first reaction unique to glycolysis, and is the pathway’s master switch: inhibited by ATP and citrate, activated by AMP and fructose-2,6-bisphosphate. Cleavage (steps 4–5): aldolase cuts the six-carbon sugar into two three-carbon halves, and triose phosphate isomerase converts both to glyceraldehyde-3-phosphate. Payoff (steps 6–10): each G3P is oxidized while capturing inorganic phosphate; phosphoglycerate kinase and pyruvate kinase each make an ATP per three-carbon chain — pyruvate kinase the third checkpoint, activated by fructose-1,6-bisphosphate feeding forward, inhibited by ATP and alanine. Per glucose: two pyruvates, net two ATP (four made, two spent) and two NADH — no oxygen used anywhere in the ten steps.',
      },
      { kind: 'heading', text: 'The Link Reaction: Pyruvate Meets Coenzyme A' },
      {
        kind: 'para',
        text: 'Pyruvate enters the mitochondrial matrix and meets the pyruvate dehydrogenase complex — three cooperating enzymes requiring five cofactors: thiamine pyrophosphate, lipoic acid, FAD, NAD+ and coenzyme A. The chemistry is oxidative decarboxylation: one carbon leaves as carbon dioxide, electrons reduce NAD+ to NADH, and the remaining two-carbon acetyl group is loaded onto coenzyme A as acetyl-CoA — twice per glucose, for two NADH. The step is irreversible — which is why animals cannot convert fat into glucose: fatty acids break down to acetyl-CoA, and acetyl-CoA cannot walk back to pyruvate.',
      },
      { kind: 'heading', text: 'The Krebs Cycle, Turn by Turn' },
      {
        kind: 'para',
        text: 'Step 1: citrate synthase condenses acetyl-CoA with oxaloacetate into citrate — the entry reaction, inhibited by ATP and NADH. Step 2, aconitase rearranges citrate to isocitrate. Step 3, isocitrate dehydrogenase performs the first oxidative decarboxylation: carbon dioxide out, NADH made — the cycle’s rate-limiting step and major control point. Step 4, alpha-ketoglutarate dehydrogenase repeats it with pyruvate dehydrogenase’s cofactor crew, releasing the second carbon dioxide and NADH. Step 5, succinyl-CoA synthetase harvests a GTP by substrate-level phosphorylation. Step 6, succinate dehydrogenase oxidizes succinate to fumarate, reducing FAD to FADH2 — it sits in the inner membrane because it is also complex II. Step 7, fumarase adds water. Step 8, malate dehydrogenase regenerates oxaloacetate with the third NADH, closing the loop. Per turn: three NADH, one FADH2, one GTP, two carbon dioxide; per glucose, two turns. The cycle is amphibolic — intermediates are siphoned to build amino acids, heme and fats, and must be refilled (anaplerosis), chiefly by pyruvate carboxylase recharging oxaloacetate.',
      },
      { kind: 'heading', text: 'The Electron Transport Chain and Chemiosmosis' },
      {
        kind: 'para',
        text: 'The reduced carriers now walk to the inner membrane. Complex I (NADH dehydrogenase) oxidizes NADH and pumps four protons out; electrons ride the lipid-soluble ubiquinone to complex III (cytochrome bc1, four more), then cytochrome c to complex IV (cytochrome c oxidase, two more), which passes them to molecular oxygen, reducing it to water — the reason every exhaled breath carries metabolic water. Complex II is Krebs step six’s succinate dehydrogenase: it feeds FADH2’s electrons straight into ubiquinone, bypassing complex I and pumping nothing — why an FADH2 is worth less than an NADH. Totals: about ten protons per NADH, six per FADH2.',
      },
      {
        kind: 'para',
        text: 'Peter Mitchell’s chemiosmosis (Nobel 1978) is the punchline: pumped protons pile up in the intermembrane space, storing the proton-motive force, and their only way back is through ATP synthase — a turbine whose F0 rotor, turned by protons, drives conformational changes in the F1 head that clamp ADP and phosphate together. Measured stoichiometries run about four protons per ATP plus one for substrate import: one NADH (about ten protons) buys about 2.5 ATP, one FADH2 (six) about 1.5. Brown fat short-circuits the design on purpose — its thermogenin channel lets protons back without ATP, pure heat for infants and hibernators.',
      },
      { kind: 'heading', text: 'The ATP Audit: Why Textbooks Disagree' },
      {
        kind: 'para',
        text: 'Older books multiplied three ATP per NADH and two per FADH2 and got 38 ATP per glucose (prokaryote arithmetic) or 36 for eukaryotes after charging the cytosolic NADH a “shuttle fare” into mitochondria. Measured stoichiometries say otherwise: 2.5 and 1.5. The modern tally per glucose: substrate-level phosphorylation 2 (glycolysis) plus 2 (Krebs GTP); NADH 10 × 2.5 = 25; FADH2 2 × 1.5 = 3 — total 32 ATP, or 30 when the glycolytic NADH enter via the cheaper glycerol-3-phosphate shuttle instead of the malate–aspartate one. That is the whole quarrel: not new chemistry, better meters. For exams, quote 30–32 for eukaryotes and know why the legacy 36–38 still circulates.',
      },
      {
        kind: 'formula',
        name: 'ATP accounting (per glucose, aerobic)',
        latex: '2\\,\\text{ATP}_{\\text{glycolysis}} + 2\\,\\text{GTP}_{\\text{Krebs}} + 10\\,\\text{NADH}\\times 2.5 + 2\\,\\text{FADH}_2\\times 1.5 = 32\\,\\text{ATP}',
        meaning: 'The modern audit: four substrate-level phosphorylations plus oxidative phosphorylation at measured coupling ratios — 32 with the efficient shuttle, 30 with the cheap one; legacy ratios of 3 and 2 give the textbook fossils 36–38.',
      },
      {
        kind: 'formula',
        name: 'Respiratory quotient',
        latex: 'RQ = \\frac{\\text{CO}_2\\ \\text{evolved}}{\\text{O}_2\\ \\text{consumed}}',
        meaning: 'The gas-exchange ratio names the fuel: carbohydrates give 1.0, lipids about 0.7, proteins about 0.8, organic acids above 1 — and anaerobic respiration consumes no oxygen at all, an undefined (infinite) quotient.',
      },
      { kind: 'heading', text: 'Fermentation: Regenerating NAD+ at Any Cost' },
      {
        kind: 'para',
        text: 'Without oxygen the chain stalls, NADH piles up, and glycolysis — still able to make its two ATP — starves for oxidized NAD+. Fermentation is the rescue. Lactic-acid fermentation runs lactate dehydrogenase, reducing pyruvate to lactate with no carbon dioxide: oxygen-starved muscle, and Lactobacillus souring milk into curd and yogurt. Alcoholic fermentation runs pyruvate decarboxylase, releasing the carbon dioxide that lifts bread and carbonates beer, then alcohol dehydrogenase reducing acetaldehyde to ethanol. The energetics are brutal: two ATP per glucose, roughly two percent of the energy the aerobic route extracts. Fermentation buys speed and oxygen-independence, not efficiency — Louis Pasteur’s “life without air” is the phrase, and yeasts still switch to it when sugar runs high.',
      },
      { kind: 'heading', text: 'Reading the Respiratory Quotient' },
      {
        kind: 'para',
        text: 'Burn a carbohydrate such as glucose and the gas ledger balances: six oxygen in, six carbon dioxide out, RQ = 1. Fats arrive more reduced, so extra oxygen must be imported to oxidize each carbon, and tripalmitin’s quotient falls to about 0.7. Proteins, excreting nitrogen at a cost, land near 0.8. Organic acids start oxygen-rich — oxalic acid’s quotient reaches 4. Anaerobic respiration evolves carbon dioxide while consuming no oxygen, an infinite quotient. Clinicians and exercise physiologists read the RQ through indirect calorimetry to see which fuel a patient or athlete is burning.',
      },
      {
        kind: 'example',
        title: 'Worked Example: The RQ of a Fat',
        steps: [
          'Identify what is asked: compute the respiratory quotient of tripalmitin, the classic fat.',
          'Write the combustion of one molecule: C51H98O6 + 72.5 O2 → 51 CO2 + 49 H2O — the fractional oxygen is the cue to double.',
          'Clear the fraction: 2 C51H98O6 + 145 O2 → 102 CO2 + 98 H2O.',
          'Divide: RQ = 102 ÷ 145 ≈ 0.70.',
          'Interpret: well below 1 because the fat arrives reduced — its low oxygen content forces extra imports from the air, inflating the denominator. A measured RQ near 0.7 flags fat as the dominant fuel.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Cyanide binds complex IV and halts the chain within minutes; carbon monoxide does the same job more quietly — both kill by ATP famine, not oxygen shortage.',
          'Uncouplers like DNP were once sold as slimming pills — they dissolved the gradient, burned fat as heat and killed users; brown fat runs the same chemistry safely.',
          'Athletes train at the lactate threshold, the pace where fermentation starts to outpace clearance.',
          'PET scans exploit the Warburg shift, tumors running glycolysis furiously even in oxygen, to light up on fluorodeoxyglucose.',
          'ICU feeding and sports nutrition steer fuel choice, monitored by indirect calorimetry’s RQ readout.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Five recurring errors: oxygen does not make ATP — it only pulls electrons through the chain and mops them up as water. Glycolysis needs no oxygen, but its ATP is a rounding error beside the mitochondrion’s. Acetyl-CoA cannot walk back to pyruvate, which is why fats cannot resupply blood glucose in animals. Fermentation is not a separate pathway — it is glycolysis plus an NAD+ patch kit. And the 36–38 answers in old question banks are legacy arithmetic, not modern measurement.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Glycolysis', def: 'The ten cytosolic steps splitting glucose to two pyruvates; net 2 ATP and 2 NADH, oxygen not required.' },
          { term: 'Phosphofructokinase', def: 'Glycolysis’s rate-limiting enzyme, catalyzing the committed step to fructose-1,6-bisphosphate.' },
          { term: 'Acetyl-CoA', def: 'The two-carbon carrier delivering fuel into the Krebs cycle; irreversibly downstream of pyruvate.' },
          { term: 'Chemiosmosis', def: 'ATP synthesis driven by a proton gradient across a membrane — Mitchell’s mechanism.' },
          { term: 'ATP synthase', def: 'The F0–F1 turbine coupling proton flow to ADP phosphorylation.' },
          { term: 'Substrate-level phosphorylation', def: 'ATP made by handing a phosphate directly from a substrate — the four direct ATP of respiration.' },
          { term: 'Fermentation', def: 'Anaerobic regeneration of NAD+ by reducing pyruvate to lactate or ethanol, keeping glycolysis alive.' },
          { term: 'Respiratory quotient', def: 'Carbon dioxide evolved divided by oxygen consumed — the fuel fingerprint of respiration.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The rate-limiting, committed-step enzyme of glycolysis is:',
            options: ['hexokinase', 'phosphofructokinase', 'pyruvate kinase', 'aldolase'],
            answer: 1,
            explain: 'PFK-1 catalyzes the first reaction unique to glycolysis and is allosterically inhibited by ATP and citrate, activated by AMP and fructose-2,6-bisphosphate.',
          },
          {
            q: 'Succinate dehydrogenase is unusual because it:',
            options: ['works in the cytosol', 'is simultaneously electron-transport complex II', 'makes three NADH per turn', 'is activated by alanine'],
            answer: 1,
            explain: 'It is the only Krebs enzyme embedded in the inner membrane — it feeds FADH2 electrons straight into ubiquinone.',
          },
          {
            q: 'Modern measurements give 30–32 rather than 36–38 ATP per glucose because:',
            options: ['glycolysis makes fewer ATP than once believed', 'coupling ratios are about 2.5 per NADH and 1.5 per FADH2', 'the Krebs cycle stops early in humans', 'breathing itself costs ATP'],
            answer: 1,
            explain: 'The legacy figures assumed 3 and 2; measured proton stoichiometries and the ATP-synthase cost shrink the yield — 32 with the efficient shuttle, 30 with the cheap one.',
          },
          {
            q: 'The respiratory quotient of a substrate under anaerobic respiration is:',
            options: ['zero', 'exactly 1', 'about 0.7', 'infinite — no oxygen is consumed'],
            answer: 3,
            explain: 'Carbon dioxide still evolves while the denominator, oxygen consumed, is zero — an undefined, effectively infinite quotient.',
          },
        ],
      },
      {
        kind: 'para',
        text: 'Cellular respiration is one long negotiation with a glucose molecule: trap it, split it, strip its electrons and spend them through a membrane turbine, with fermentation as the survival clause when oxygen fails. Master the three checkpoints, the two decarboxylating complexes, the four membrane complexes and the honest arithmetic, and the chapter turns from the most-dreaded in bioenergetics to the most deterministic: every question has a number attached.',
      },
    ],
  },
]
