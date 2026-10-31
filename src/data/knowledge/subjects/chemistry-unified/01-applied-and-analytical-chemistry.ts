/**
 * Knowledge Universe — Chemistry — Chapter 01: Applied & Analytical Chemistry
 * 6 lessons · ~8,705 words
 * field: Chemistry
 * legacy sources: physical-sciences.ts, x23-japan-gap-pass.ts, x29-orphan-closure-pass.ts, x30-orphan-final-pass.ts, x45-exam-gap-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Chemistry]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 chem-bronsted-lowry-in-use — Using Brønsted–Lowry Theory: Strength, Concentration and Titration Curves
 *   01.2 chem-chemicals-medicine-food — Chemicals in Medicine and Food: Drugs and Additives by Class
 *   01.3 chem-isotopes-nuclear-notation — Isotopes and Nuclear Notation: Reading an Atom’s ID Card
 *   01.4 chem-ions-aqueous-solution — Reactions of Ions in Aqueous Solution: Qualitative Tests and Volumetric Analysis
 *   01.5 phys-chemical-equilibrium — Chemical Equilibrium and Le Chatelier’s Principle
 *   01.6 chem-periodic-trends — The Periodic Table’s Hidden Architecture
 */
import type { KnowledgeTopic } from '../../types'

export const chemistryUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'chem-bronsted-lowry-in-use',
    title: 'Using Brønsted–Lowry Theory: Strength, Concentration and Titration Curves',
    domain: 'Physical Sciences',
    field: 'Chemistry',
    branch: 'Applied & Analytical Chemistry',
    tier: 'core',
    concepts: [
      'Conjugate pairs and the strength ladder',
      'Kw ties every Ka to its partner Kb',
      'Strength is not concentration',
      'The three shapes of titration curves',
      'Half-equivalence: pH = pKa on the curve',
      'Choosing an indicator from the steep section',
    ],
    words: 1810,
    readMins: 9,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The Brønsted–Lowry model — an acid is a proton donor, a base is a proton acceptor — sounds like a definition to memorize, but its real value is as a working tool. Because every acid hands its proton to a partner, acids and bases come in conjugate pairs, and the model turns strength into arithmetic: each pair has its own equilibrium constant, the constants of a pair multiply to a fixed number, and the whole landscape of acid-base chemistry can be calculated from a handful of tabulated values. This lesson is about using the model that way — in calculations, in reading titration curves, and in the practical art of choosing an indicator.',
      },
      {
        kind: 'para',
        text: 'The theory chapter of this subject — the three definitions of acid and base, buffers, and the general equilibrium framework behind them — lives in the master chemistry volume\u2019s Chemical & Ionic Equilibrium chapter, and the raw titration arithmetic (moles and volumes at the equivalence point) lives with the mole concept. What this lesson adds is the layer between: how strength relates to the constants, why strength is not concentration, how the three families of titration curves get their shapes, and how the curve\u2019s steep section decides which indicator works. Those are the working skills the definitions alone do not teach.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every acid-base question beyond "name the acid" is an application of the conjugate-pair idea: predicting the pH of a salt, reading what a curve is telling you about an unknown, or understanding why an antacid works. The strength-versus-concentration distinction alone is among the most-tested misconceptions in chemistry — dilute sulfuric acid is strong, concentrated acetic acid is weak, and the words do not mean what daily life suggests.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Conjugate Pairs and the Strength Ladder' },
      {
        kind: 'para',
        text: 'When an acid HA donates its proton, what remains — A⁻ — is its conjugate base; when that base accepts the proton back, HA is re-formed. Each pair sits at equilibrium with water, and the acid\u2019s strength is the equilibrium constant for donation: Ka = [H₃O⁺][A⁻]/[HA]. A large Ka means the forward donation nearly completes — a strong acid; a small Ka means donation barely happens — a weak acid. The base side has Kb for the acceptance reaction A⁻ + H₂O ⇌ HA + OH⁻. For any conjugate pair in water at 25 °C the two constants multiply to the water autoionization constant: Ka × Kb = Kw = 1.0 × 10⁻¹⁴. That single equation is the strength ladder\u2019s rail: the stronger the acid, the weaker its conjugate base, quantitatively — hydrochloric acid\u2019s conjugate base Cl⁻ has a Kb of about 10⁻²¹, so negligible that chloride barely exists as a base in water, while acetic acid\u2019s Ka of 1.8 × 10⁻⁵ gives acetate a workable Kb of about 5.6 × 10⁻¹⁰.',
      },
      {
        kind: 'para',
        text: 'Chemists compress the numbers with logarithms: pKa = −log Ka. A strong acid has a negative pKa; acetic acid sits at 4.76; each unit down the pKa scale is a tenfold strength gain. The pKa scale doubles as a ranking tool for reactions: a stronger acid displaces a weaker one from its conjugate base, and a reaction goes from the stronger acid-base pair toward the weaker. That is the ladder — every proton-transfer reaction is a rung comparison.',
      },
      { kind: 'heading', text: 'Strength versus Concentration' },
      {
        kind: 'para',
        text: 'Strength describes how completely an acid ionizes; concentration describes how much of it is dissolved per liter. The two axes are independent, and mixing them produces the classic errors. A 0.001 M solution of hydrochloric acid — a strong acid — is dilute, and its pH is a mild 3.0. Glacial acetic acid — essentially pure, enormously concentrated — is a weak acid: only about one molecule in a hundred thousand has donated its proton at any moment, and the solution is a corrosive liquid with a pH still governed by its tiny Ka. Dilute strong and concentrated weak are different in both directions.',
      },
      {
        kind: 'para',
        text: 'The distinction has practical faces. Conductivity tracks the ion concentration, not the label: a dilute strong acid can conduct better than a more concentrated weak one, because the weak acid\u2019s ions are few even if its molecules are many. Reactivity tracks both — the hydrogen that evolves from a metal depends on how much acid is actually ionized in solution. And safety tracks concentration far more than strength: handling concentrated weak acids burns skin just as effectively as dilute strong ones. On paper, the exam error to avoid is computing a weak-acid pH with the strong-acid shortcut: a 0.10 M acetic acid solution does not have pH 1.0 — its Ka of 1.8 × 10⁻⁵ gives [H₃O⁺] = √(Ka × C) ≈ 1.3 × 10⁻³ M, a pH near 2.9. The strong-acid arithmetic would overstate the ion concentration by nearly a hundredfold.',
      },
      { kind: 'heading', text: 'The Three Shapes of Titration Curves' },
      {
        kind: 'para',
        text: 'Plot pH against the volume of base added during a titration and the curve\u2019s shape is diagnostic. Strong acid with strong base: the pH starts near 1, drifts upward gradually as the acid is consumed, then leaps through a huge, near-vertical jump around the equivalence point — centred at pH 7, because the resulting salt (say, sodium chloride) is neutral. Weak acid with strong base: the start is higher, the curve sags through a buffering region where the remaining acid and the forming conjugate base pair up, and the equivalence point sits above 7 — at that instant the flask contains only the conjugate base of a weak acid, which hydrolyzes water to make the solution basic. Weak base with strong acid mirrors the pattern with the equivalence point below 7. The jump shrinks as the acid weakens: the weaker the acid, the smaller the vertical section, until a very weak acid gives a jump too small for most indicators to see.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Scenario: a titration of ethanoic (acetic) acid with sodium hydroxide. Halfway to the equivalence point, the measured pH is 4.76. What is Ka of the acid?',
          'Read the chemistry: halfway to equivalence, the acid added has been half converted to acetate — so [HA] = [A⁻] in the flask.',
          'Apply the equilibrium expression: Ka = [H₃O⁺][A⁻]/[HA]; with [A⁻] = [HA] the ratio cancels and Ka = [H₃O⁺].',
          'Convert: Ka = 10^(−4.76) ≈ 1.7 × 10⁻⁵ — the half-equivalence reading is a Ka measurement, no burette arithmetic needed.',
          'Predict the equivalence pH: the flask at equivalence holds sodium acetate, a weak base with Kb = Kw/Ka ≈ 5.9 × 10⁻¹⁰ — so the equivalence pH must sit above 7, around 8.7–9.',
          'Choose the indicator: the steep section spans roughly pH 7.5 to 10.5. Phenolphthalein (range about 8.3–10.0) lies inside it; methyl orange (3.1–4.4) changes colour while the flask is still acidic — wrong by half the titration. Phenolphthalein wins.',
        ],
      },
      { kind: 'heading', text: 'Indicators: Weak Acids That Pick Their Moment' },
      {
        kind: 'para',
        text: 'An indicator is itself a Brønsted–Lowry weak acid whose conjugate pair has differently colored forms: HIn is one color, In⁻ another, and the equilibrium HIn ⇌ H⁺ + In⁻ shifts with the flask\u2019s pH. The color change spans about two pH units centred on the indicator\u2019s own pKa — the range where both forms are visibly present. Methyl orange (pKa near 3.7) flips from red through orange to yellow across pH 3.1–4.4; phenolphthalein (pKa near 9.3) runs colorless to pink across 8.3–10.0; bromothymol blue sits in between, 6.0–7.6.',
      },
      {
        kind: 'para',
        text: 'The selection rule follows directly: an indicator works when its entire color-change range falls inside the curve\u2019s steep section, because only there does a fraction of a drop move the pH across the whole range — making the endpoint sharp and coinciding with equivalence. For the strong acid–strong base jump, which spans roughly pH 3 to 11, all three classic indicators work. For the weak acid–strong base case, the jump lives in the basic region: phenolphthalein, methyl orange fails. For the weak base–strong acid case the jump is acidic: methyl orange, phenolphthalein fails. Choosing wrong does not ruin the chemistry — it shifts the visible endpoint off the true equivalence point and bakes a systematic error into every calculation that follows.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'conjugate pair', def: 'An acid and the base it becomes after donating one proton — HA and A⁻ — related by the transfer of a single H⁺.' },
          { term: 'Ka', def: 'The equilibrium constant for an acid donating its proton to water; large Ka means a strong acid, and pKa = −log Ka compresses the scale.' },
          { term: 'strength versus concentration', def: 'Strength is the extent of ionization (an equilibrium property); concentration is amount dissolved per liter (a preparation property). The two vary independently.' },
          { term: 'equivalence point', def: 'The stoichiometric instant when added base equals acid present; for a weak-acid titration it sits above pH 7 because the flask then holds a conjugate base.' },
          { term: 'half-equivalence point', def: 'The volume where half the acid has been converted, so [HA] = [A⁻] and pH = pKa — the cleanest way to read an unknown Ka off a curve.' },
          { term: 'indicator range', def: 'The roughly two-pH-unit span over which an indicator\u2019s color changes; it must fall within the titration curve\u2019s steep section for a sharp endpoint.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Ka of hydrofluoric acid is 6.8 × 10⁻⁴. What is Kb of its conjugate base F⁻ at 25 °C?',
            options: ['6.8 × 10⁻⁴', '1.5 × 10⁻¹¹', '1.0 × 10⁻⁷', '6.8 × 10⁻¹⁰'],
            answer: 1,
            explain: 'Ka × Kb = Kw = 1.0 × 10⁻¹⁴, so Kb = 1.0 × 10⁻¹⁴ / 6.8 × 10⁻⁴ ≈ 1.5 × 10⁻¹¹ — a very weak base, as the strong-ish acid\u2019s partner should be.',
          },
          {
            q: 'Which solution has the lower pH: 0.001 M HCl or 0.10 M ethanoic acid (Ka ≈ 1.8 × 10⁻⁵)?',
            options: ['The dilute strong acid — strength beats concentration', 'The concentrated weak acid — its pH is near 2.9 against the HCl\u2019s 3.0', 'Both are exactly pH 7', 'Cannot be told without conducting both'],
            answer: 1,
            explain: 'The strong acid gives [H⁺] = 10⁻³ (pH 3.0); the weak acid\u2019s √(Ka·C) ≈ 1.3 × 10⁻³ gives pH ≈ 2.9. Strength controls ionization, but concentration sets how much is there to ionize.',
          },
          {
            q: 'A weak-acid–strong-base titration reaches its equivalence point at pH 8.8. Which indicator is correct?',
            options: ['Methyl orange (3.1–4.4)', 'Bromothymol blue (6.0–7.6)', 'Phenolphthalein (8.3–10.0)', 'Any of them — the endpoint is the same'],
            answer: 2,
            explain: 'The steep section lies in the basic region; phenolphthalein\u2019s range sits inside it, while methyl orange would signal far before equivalence.',
          },
          {
            q: 'On a titration curve, the pH at half-equivalence equals…',
            options: ['7.0 always', 'the pKa of the acid being titrated', 'the pKw of water', 'the indicator\u2019s pKa'],
            answer: 1,
            explain: 'Half-conversion makes [HA] = [A⁻], the ratio in Ka cancels, and pH = pKa — which is exactly how unknown acids are identified from curves.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The master volume\u2019s Chemical & Ionic Equilibrium chapter continues into buffers, salt hydrolysis and Le Chatelier\u2019s principle — the theory frame this lesson\u2019s applications hang from. The Ions in Aqueous Solution lesson covers the solubility equilibria that govern what actually dissolves, and the stoichiometry chapters carry the burette arithmetic behind every curve.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'chem-chemicals-medicine-food',
    title: 'Chemicals in Medicine and Food: Drugs and Additives by Class',
    domain: 'Physical Sciences',
    field: 'Chemistry',
    branch: 'Chemistry in Everyday Life',
    tier: 'core',
    concepts: [
      'Drugs classified by effect, action, structure and target',
      'Enzymes and receptors as molecular drug targets',
      'Antacids and antihistamines',
      'Analgesics: aspirin and paracetamol',
      'Antibiotics and antimicrobial action',
      'Antiseptics versus disinfectants',
      'Preservatives and antioxidants (BHA, BHT)',
      'Artificial sweeteners: saccharin, aspartame, sucralose',
      'Color additives: certified dyes versus exempt natural colors',
      'Emulsifiers, stabilizers and texture',
    ],
    words: 1492,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Most chemistry examinations reserve a section for the subject\u2019s most personal applications: the molecules we swallow as medicine and eat as food. The material is classification-heavy — the examiner names a use and expects the class, or names a class and expects an example with its common chemical name. The payoff for learning the map is practical too: reading a medicine packet or an ingredient list becomes a live quiz, and the safety reasoning behind dosing, preservation and additive approval stops being abstract. This lesson walks the two halves — drug classes, then food additive classes — with the naming conventions each demands.',
      },
      {
        kind: 'para',
        text: 'Both halves share one organizing idea: classification axes. A single drug can be described by its pharmacological effect (what it treats), its action on the body (how it intervenes), its chemical structure (what family it belongs to) and its molecular target (what it binds). The same multi-axis habit organizes food additives by function: preservative, sweetener, color, emulsifier, nutrient. Two axes per molecule — memorize the pairings and the section answers itself.',
      },
      { kind: 'heading', text: 'How drugs are classified and how they act' },
      {
        kind: 'para',
        text: 'Therapeutic classification names drugs by what they are used for: antacids reduce stomach acid, antihypertensives lower blood pressure, analgesics relieve pain, antipyretics lower fever, antibiotics treat bacterial infection. Mechanistically, most drugs work at molecular targets: enzymes, whose active sites a drug can block competitively, and receptors, the protein switches that receive the body\u2019s chemical signals. A drug that binds a receptor and switches it on is an agonist; one that binds without activating — merely occupying the site so the genuine signal cannot — is an antagonist. This targeting is why drugs are selective: the fit between molecule and site, not the disease, decides the effect.',
      },
      {
        kind: 'para',
        text: 'The everyday classes follow directly. Antacids are mild bases — aluminium and magnesium hydroxides, sodium bicarbonate — that neutralize excess gastric acid where overproduction burns the stomach lining. Antihistamines such as cetirizine block the H1 receptor so histamine cannot trigger its allergy cascade; the drowsiness of older antihistamines showed what happens when the same blocker also reaches receptors in the brain. Analgesics kill pain: paracetamol (acetaminophen) acts centrally to dull pain and lower fever, while aspirin — acetylsalicylic acid — adds anti-inflammatory action by disabling the enzyme that makes prostaglandin inflammation messengers, which is also why it thins blood and irritates the stomach.',
      },
      {
        kind: 'para',
        text: 'Two safety-facing classes complete the drug map. Antibiotics — chloramphenicol, tetracycline, penicillin families — are selective poisons for bacteria: they attack bacterial ribosomes or cell-wall chemistry that human cells lack, which is exactly why completing the prescribed course matters; stopped early, the survivors are the resistant ones. Antiseptics and disinfectants share chemistry (boric acid, iodoform, phenol derivatives, chlorine compounds) but differ by target tissue: antiseptics are mild enough for living skin, disinfectants are harsher and confined to surfaces and instruments. The distinction is a standard one-mark question because it encodes the dose-toxicity principle — the same molecule is a healer or a hazard depending on concentration and contact.',
      },
      { kind: 'heading', text: 'Chemicals in food: the additive classes' },
      {
        kind: 'para',
        text: 'Additives exist because consumers expect food to survive storage, transport and time. Preservatives slow spoilage by microbes or chemistry: sodium benzoate and potassium sorbate check moulds and yeasts in acidic drinks and jellies; sodium nitrite keeps cured meats pink and blocks the bacterium that causes botulism; calcium propionate stops bread mould. A special sub-class guards against oxidation rather than microbes: antioxidants — ascorbic acid (vitamin C), the tocopherols (vitamin E) and the synthetic BHA, BHT and TBHQ — donate hydrogen to the free radicals that would otherwise turn fats and oils rancid, which is why they appear wherever oil meets a long shelf life.',
      },
      {
        kind: 'para',
        text: 'Sweeteners and colors carry the naming conventions examiners love. Artificial sweeteners deliver sweetness with little or no energy: saccharin (the oldest), aspartame (roughly as sweet as sugar by weight in the hundreds, and metabolized like a small protein — hence the phenylalanine warning), sucralose (chlorinated sucrose, stable to heat), acesulfame-K. Color additives split into certified synthetic dyes — the FD&C numbering in the United States, E numbers in Europe: tartrazine (Yellow 5), Allura Red (Red 40), Brilliant Blue — and colors exempt from certification because they come from natural sources: annatto, caramel, carmine from cochineal insects, beta-carotene, beet and turmeric extracts. Certified dyes win on intensity, uniformity and cost; natural dyes can carry flavors of their own and fade sooner.',
      },
      {
        kind: 'para',
        text: 'Texture and stability are chemical jobs too. Emulsifiers let oil and water coexist: lecithin (from soy or egg yolk), mono- and diglycerides and polysorbates sandwich the two phases so mayonnaise, chocolate and margarine stay smooth instead of separating. Stabilizers and thickeners — gelatin, pectin, guar and xanthan gums, carrageenan — set and hold texture; humectants such as glycerin keep soft candies soft; anti-caking agents like calcium silicate keep salt and powdered sugar flowing. Nutrition additives close the loop: iodized salt, fortified flour with thiamine, niacin and folic acid, vitamin-D milk — the enrichment programs that largely erased deficiency diseases wherever they were adopted. Every class answers the same three purposes the regulators list: maintain safety and freshness, improve or maintain nutritional value, improve taste, texture and appearance.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Name that molecule (class from clue)',
        steps: [
          'Clue: "a mild base taken when the stomach burns." Base = neutralizes acid; the antacid class — aluminium hydroxide, magnesium hydroxide, sodium bicarbonate.',
          'Clue: "blocks the H1 receptor; older members caused drowsiness." Receptor blockade = antagonist action; the antihistamine class (e.g. cetirizine).',
          'Clue: "acetylsalicylic acid; relieves pain, lowers fever, thins blood." The analgesic aspirin — its enzyme block also explains the stomach irritation.',
          'Clue: "donates hydrogen to free radicals, keeps oil from going rancid." Antioxidant preservative — ascorbic acid, tocopherols, BHA/BHT.',
          'Clue: "sweetness without calories; metabolized to phenylalanine." Aspartame — the artificial-sweetener class with the PKU warning.',
          'Recipe: extract the functional clue (base, blocker, radical-scavenger, non-caloric sweet), name the class, then attach one member with its common chemical name. Two facts per class — role and example — is the exam-ready core.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which pair correctly matches an antiseptic distinction?',
            options: [
              'antiseptics are used on living tissue; disinfectants on surfaces',
              'antiseptics kill bacteria only; disinfectants kill viruses only',
              'antiseptics are always synthetic; disinfectants are natural',
              'there is no difference — the words are interchangeable',
            ],
            answer: 0,
            explain: 'The classes share chemistry; the difference is target tissue and concentration — antiseptics are mild enough for skin, disinfectants too harsh.',
          },
          {
            q: 'Aspirin\u2019s stomach irritation follows directly from which mechanism?',
            options: [
              'it neutralizes stomach acid completely',
              'it blocks the enzyme that produces prostaglandins, which also protect the stomach lining',
              'it is a strong base attacking the mucosa',
              'it binds iron in the gut',
            ],
            answer: 1,
            explain: 'Acetylsalicylic acid disables prostaglandin synthesis everywhere; removing prostaglandins helps inflammation but withdraws the stomach\u2019s own protection — one target, two consequences.',
          },
          {
            q: 'Why does aspartame carry a phenylalanine warning on the label?',
            options: [
              'it is itself phenylalanine',
              'it is metabolized in part to phenylalanine, harmful to people with phenylketonuria',
              'it prevents absorption of other amino acids',
              'the warning is a leftover of an old ban',
            ],
            answer: 1,
            explain: 'Aspartame breaks down to phenylalanine, aspartate and methanol; the rare metabolic disorder PKU makes phenylalanine accumulation dangerous.',
          },
          {
            q: 'Carmine, annatto and beta-carotene belong to which group of color additives?',
            options: [
              'certified synthetic dyes (FD&C numbers)',
              'colors exempt from certification — natural sources',
              'flavor enhancers',
              'preservatives',
            ],
            answer: 1,
            explain: 'All three derive from natural sources (cochineal insects, achiote seeds, carrots), placing them in the exempt-from-certification category — unlike FD&C Red 40 or Yellow 5.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Swapping agonist and antagonist — the antagonist occupies the site without switching it on. Treating "antibiotic" as antiviral: antibiotics target bacteria, and using them against viruses breeds resistance. Confusing antiseptic with disinfectant — tissue versus surface. Saying "all additives are synthetic" — caramel, carmine and tocopherols are natural, and certification tracks origin, not safety. Matching aspartame\u2019s warning to sucralose, or saccharin\u2019s age to modern approval history. Assuming "preservative" means antimicrobial only — antioxidants preserve against oxidation, a chemical route to spoilage. And quoting brand names where chemical names are asked: paracetamol, not its packaging.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: acids and bases for the antacid chemistry; enzyme basics for target binding. Follow with the organic-chemistry volumes for structure families, and the food-science track for nutrition and spoilage in depth. Primary reading: LibreTexts, Science of Food (Russel) §10.4 "Other Food Additives — Beneficial or Dangerous" (chem.libretexts.org, CC BY-NC-SA) for the additive table and antioxidant chemistry; LibreTexts, Chemistry and Global Awareness (Shasta College) ch.10 "Pharmaceuticals" for the analgesics; LibreTexts, Pharmacology (Moraine Valley) §1.8 "Drug Classifications" for the therapeutic-classification axes used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Drugs classify four ways: effect, action, structure, molecular target; targets are enzymes and receptors.',
        'Agonist switches the receptor on; antagonist occupies it without activating.',
        'Antacids neutralize acid; antihistamines block H1; analgesics (aspirin, paracetamol) kill pain.',
        'Antibiotics poison bacteria selectively; antiseptics treat tissue, disinfectants treat surfaces.',
        'Preservatives: sodium benzoate, nitrite, sorbate; antioxidants BHA/BHT fight rancidity.',
        'Sweeteners: saccharin, aspartame (PKU warning), sucralose; colors: certified FD&C versus exempt natural.',
        'Emulsifiers (lecithin) and stabilizers (pectin, gums) hold texture; fortification restores nutrients.',
      ] },
    ],
  },
  {
    id: 'chem-isotopes-nuclear-notation',
    title: 'Isotopes and Nuclear Notation: Reading an Atom\u2019s ID Card',
    domain: 'Physical Sciences',
    field: 'Chemistry',
    branch: 'Atomic Structure',
    tier: 'core',
    concepts: [
      'Protons, neutrons, electrons: charge, mass, location',
      'Atomic number Z and mass number A',
      'The AZX nuclear symbol convention',
      'Atomic charge and ion notation',
      'Isotopes: same element, different neutron count',
      'Hydrogen and carbon isotope families',
      'Average atomic mass from abundances',
      'Element identity is proton count only',
    ],
    words: 1324,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Every atom carries an ID card, and nuclear notation is how chemistry writes it: the element, its proton count, its mass count and its charge, compressed into one symbol like \u00b2\u2074\u2081\u2082Mg\u00b2\u207a. Reading and writing this notation fluently is the entry ticket to nuclear chemistry, radioactivity and half-life questions, and to the periodic table\u2019s decimal masses — which are averages, and the averaging arithmetic is examinable in itself. This lesson builds the card from its three particles, then teaches the isotope logic that explains why one element can wear several mass numbers at once.',
      },
      { kind: 'heading', text: 'Three particles, two numbers' },
      {
        kind: 'para',
        text: 'The atom\u2019s inventory is three particles. Protons sit in the nucleus with charge 1+ and mass about 1 amu (1.00727). Neutrons also sit in the nucleus with no charge and essentially the same mass (1.00866). Electrons orbit far outside the nucleus with charge 1\u2212 and negligible mass (about 0.00055 amu — roughly 1/1836 of a proton). Two counts pin down an atom\u2019s identity and bulk: the atomic number Z — the proton count — which names the element (6 protons means carbon, always), and the mass number A — protons plus neutrons — which sets the isotope. Because electrons weigh almost nothing, the mass number measures the nucleus alone.',
      },
      {
        kind: 'para',
        text: 'Charge closes the accounting: atomic charge equals protons minus electrons. A neutral atom has equal counts; strip electrons and the atom becomes a positive ion (Mg losing two electrons: charge 2+); add them and it goes negative. So each of the three counts is derivable from the other two plus the charge — and conversion drills (\u201chow many neutrons in \u2074\u2070\u2081\u2089K?\u201d — A \u2212 Z = 40 \u2212 19 = 21) are pure notation fluency.',
      },
      { kind: 'heading', text: 'The AZX symbol and the isotope families' },
      {
        kind: 'para',
        text: 'The nuclear symbol stacks the two numbers on the element\u2019s letter: mass number A as a left superscript, atomic number Z as a left subscript, X the element symbol — \u00b2\u00b3\u2081\u2081Na. The charge, when present, rides as a right superscript: \u00b2\u2074\u2081\u2082Mg\u00b2\u207a is magnesium-24 that has lost two electrons (12 protons, 12 neutrons, 10 electrons). Z is technically redundant — the letter already fixes it — which is why chemists often write carbon-14 or C-14 and omit the subscript. Reading conventions is the exam skill: given any partial card, reconstruct the rest.',
      },
      {
        kind: 'para',
        text: 'Isotopes are atoms of the same element — same Z, same chemistry — wearing different neutron counts and hence different A. Hydrogen\u2019s three make the family vivid: protium (\u00b9H, one proton, no neutron — 99.989 per cent of natural hydrogen), deuterium (\u00b2H, one neutron — the heavy hydrogen of \u201cheavy water\u201d), tritium (\u00b3H, two neutrons — trace, radioactive). Carbon\u2019s family underpins dating and bookkeeping in biology: carbon-12 (six protons, six neutrons — 98.89 per cent), carbon-13 (seven neutrons — 1.11 per cent), carbon-14 (eight neutrons — trace, radioactive). Chemistry barely notices which isotope is present — same electrons, same reactions — which is exactly why isotope labels work as tracers.',
      },
      { kind: 'heading', text: 'Average atomic mass: the weighted average' },
      {
        kind: 'para',
        text: 'The periodic table\u2019s atomic masses are averages over nature\u2019s isotope mix, weighted by abundance: average mass = \u03a3(fractional abundance \u00d7 isotopic mass). OpenStax\u2019s worked example: boron is 19.9 per cent boron-10 (mass 10.0129 amu) and 80.1 per cent boron-11 (mass 11.0093 amu), so the average is (0.199 \u00d7 10.0129) + (0.801 \u00d7 11.0093) = 10.81 amu — which is the 10.81 printed on the table. The reverse direction is the exam favourite: given the average and both isotope masses, find the abundances — set x as the fraction of one isotope, write the weighted equation, solve; the abundances always sum to one.',
      },
      {
        kind: 'para',
        text: 'Three reading habits finish the topic. First, the average always sits closest to the more abundant isotope\u2019s mass — chlorine\u2019s 35.45 says chlorine-35 dominates over chlorine-37, no calculation needed. Second, mass numbers are always whole (they count particles); atomic masses on the table are not (they are weighted averages). Third, radioactivity questions ride on the neutron excess — carbon-14 decays, carbon-12 does not — which is the doorway the half-life lessons walk through. Identity, bulk, charge, abundance: four facts, one card.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One symbol, every question it answers',
        steps: [
          'Given \u00b2\u00b3Na (sodium-23): Z = 11 for sodium, so protons = 11, neutrons = 23 \u2212 11 = 12, and neutral atoms carry 11 electrons.',
          'Ionized form \u00b2\u00b3Na\u207a: same nucleus (11 p, 12 n), but charge 1+ means electrons = 10 — one lost. Identity never changed: proton count fixed it throughout.',
          'Average-mass drill: chlorine is 75.8 per cent chlorine-35 and 24.2 per cent chlorine-37 \u2014 average = (0.758 \u00d7 34.97) + (0.242 \u00d7 36.97) \u2248 35.45 amu, matching the table.',
          'Reverse drill: an element\u2019s two isotopes have masses 10 and 11 and the average is 10.8. Fractions: x(10) + (1 \u2212 x)(11) = 10.8, so x = 0.2 \u2014 twenty per cent of the lighter isotope.',
          'Family check: which particles differ among \u00b9H, \u00b2H, \u00b3H? Neutrons only — protons (1) and electrons (1, when neutral) are fixed by element identity. Same chemistry, different bulk.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'How many neutrons does \u2074\u2070\u2081\u2089K contain?',
            options: ['19', '21', '40', '59'],
            answer: 1,
            explain: 'Neutrons = A \u2212 Z = 40 \u2212 19 = 21. The mass number counts protons plus neutrons; the subscript counts protons alone.',
          },
          {
            q: 'An ion is written \u00b2\u2074\u2081\u2082Mg\u00b2\u207a. How many electrons does it carry?',
            options: ['12', '14', '10', '24'],
            answer: 2,
            explain: 'Neutral magnesium has 12 electrons; charge 2+ means two were removed, leaving 10. Protons (12) and neutrons (12) are unchanged.',
          },
          {
            q: 'Protium, deuterium and tritium are all hydrogen because they share',
            options: ['the same mass number', 'the same neutron count', 'the same proton count', 'the same charge'],
            answer: 2,
            explain: 'Element identity is proton count (Z = 1) — nothing else. The three isotopes differ only in neutrons (0, 1, 2).',
          },
          {
            q: 'Boron\u2019s average atomic mass is 10.81 amu, between the masses of boron-10 and boron-11. What does that imply?',
            options: [
              'boron-11 is more abundant',
              'boron-10 is more abundant',
              'the isotopes are equally abundant',
              'boron-12 must exist',
            ],
            answer: 0,
            explain: 'A weighted average sits closest to the dominant isotope: 10.81 is nearer 11 than 10, so boron-11 carries the larger fraction (about 80 per cent).',
          },
          {
            q: 'Why do chemists write carbon\u2019s mass on the periodic table as 12.011 rather than a whole number?',
            options: [
              'electrons add fractional mass',
              'it is the abundance-weighted average of carbon\u2019s isotopes',
              'carbon-13 is radioactive and unstable',
              'rounding errors in measurement',
            ],
            answer: 1,
            explain: 'The table averages the natural isotope mix — mostly carbon-12 with 1.11 per cent carbon-13 (and trace carbon-14) — producing a non-integer.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Swapping the two stacked numbers — mass number A is the left superscript, atomic number Z the left subscript; the bigger number rides on top. Computing neutrons as A minus electrons, or subtracting the wrong pair: neutrons = A \u2212 Z, always. Forgetting the charge when counting electrons: 2+ means two fewer than Z. Treating isotopes as different elements — identity is proton count; isotopes share chemistry and differ in bulk and (sometimes) stability. Ignoring abundances in average-mass problems — a plain mean of isotope masses is wrong unless the mix is fifty-fifty. And assuming a mass number appears on the periodic table: the table prints averages; only nuclear symbols carry mass numbers.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Follow with the periodic-trends lesson (Z drives every trend the table shows), the ions-and-aqueous-solutions lesson (charge notation in reactions), and the radioactive-decay topics, where unstable isotope ratios become clocks. Primary reading: OpenStax, Chemistry 2e \u00a72.3 \u201cAtomic Structure and Symbolism\u201d (openstax.org, CC BY-NC-SA) — the subatomic-particle table, the AZX convention and the boron average-mass example used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Three particles: protons (1+, nucleus), neutrons (neutral, nucleus), electrons (1\u2212, far out, nearly massless).',
        'Z = protons = element identity; A = protons + neutrons; charge = protons \u2212 electrons.',
        'Nuclear symbol: A top-left, Z bottom-left, charge top-right; neutrons = A \u2212 Z.',
        'Isotopes: same Z, different neutron counts — protium/deuterium/tritium; carbon-12/13/14.',
        'Average atomic mass = \u03a3(abundance \u00d7 mass); it hugs the dominant isotope.',
        'Mass numbers are whole; table masses are averages — never confuse the two.',
      ] },
    ],
  },
  {
    id: 'chem-ions-aqueous-solution',
    title: 'Reactions of Ions in Aqueous Solution: Qualitative Tests and Volumetric Analysis',
    domain: 'Physical Sciences',
    field: 'Chemistry',
    branch: 'Analytical Chemistry',
    tier: 'core',
    concepts: [
      'Solubility rules and net ionic equations',
      'Flame tests and cation hydroxide precipitates',
      'Amphoteric hydroxides and ammonia complexes',
      'Anion confirmatory tests: halide, sulfate, carbonate, nitrate',
      'Standard solutions and primary standards',
      'Acid-base titration calculations and indicators',
      'Redox titrations and self-indicating permanganate',
    ],
    words: 2006,
    readMins: 10,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'An aqueous solution hides its contents — unless you know how to make them show themselves. Qualitative analysis is the craft of triggering reactions whose visible results (a colour, a precipitate, a gas) identify which ions are present; volumetric analysis is the quantitative partner, measuring how much of an ion or acid is there by reaction with a solution of exactly known concentration. Both rest on one body of theory: the solubility rules decide which pairs of ions form precipitates, acid-base and complexation equilibria decide what dissolves what, and redox chemistry drives the titrations that end with a self-colouring endpoint. This lesson assembles the working scheme — solubility logic, the cation tests, the anion tests, and the titration bench — the way it is asked: as observations to predict and equations to write.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'This is chemistry at its most examinable: every question is a two-line observation and a one-line inference, and the marks live in writing the correct net ionic equation. The scheme is also real laboratory practice — the same group separations and confirmatory tests run in teaching labs worldwide, and the titration is still the standard method for standardising reagents. Master the logic here and the wet-bench questions become the fastest marks on the paper.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Precipitate', def: 'An insoluble solid formed when two solutions are mixed — the visible product of ions exceeding the solubility product (the equilibrium lesson owns the Ksp arithmetic; here the solubility rules do the qualitative work).' },
          { term: 'Net ionic equation', def: 'The equation showing only the species that actually react: for AgNO3 + NaCl the spectator ions (Na+, NO3−) are dropped to leave Ag+ + Cl− → AgCl (s). Writing it correctly is the standard one-mark skill in every ion question.' },
          { term: 'Confirmatory test', def: 'A specific test performed on an isolated ion or precipitate whose positive result alone identifies the ion — e.g. dissolving a white precipitate in ammonia to confirm chloride (as opposed to a screening test that only narrows the possibilities).' },
          { term: 'Amphoteric hydroxide', def: 'A hydroxide precipitate that dissolves in excess strong alkali because it reacts further to form a soluble hydroxo-complex — Al(OH)3, Zn(OH)2 and Pb(OH)2 do this; Cu(OH)2 and Fe(OH)3 do not, which is precisely how the distinction is tested.' },
          { term: 'Standard solution', def: 'A solution of accurately known concentration, made either from a primary standard (stable, pure, unhygroscopic, high molar mass — anhydrous sodium carbonate or potassium hydrogenphthalate) or by standardising against one.' },
          { term: 'Equivalence point and endpoint', def: 'The equivalence point is the stoichiometric completion of the titration reaction; the endpoint is the indicator’s colour change. A good titration chooses an indicator whose endpoint brackets the equivalence point — strong acid–strong base tolerates phenolphthalein or methyl orange; weak acid–strong base needs phenolphthalein.' },
        ],
      },
      {
        kind: 'para',
        text: 'Everything begins with the solubility rules, because they predict where a precipitate can appear at all. The reliable generalisations: all nitrates and all group-1 and ammonium salts are soluble; sulfates are soluble except barium, lead and (slightly) calcium and silver; halides are soluble except silver, lead(II) and mercury(I); carbonates, hydroxides and sulfides of everything except group 1 and ammonium are insoluble. From these, every test reaction is a net ionic equation. Mixing solutions of silver nitrate and sodium chloride gives Ag+(aq) + Cl−(aq) → AgCl(s), a white curdy precipitate that darkens in light; the sodium and nitrate ions are spectators. The rules also explain selective precipitation — the analytical engine of cation group separation: add a reagent whose anion precipitates only some cations, filter, then change conditions and precipitate the next set. Classic qualitative schemes divide cations into groups exactly this way (chlorides first, then acid-sulfides, then hydroxides, then carbonates, with the alkali and ammonium ions left to flame tests), and the underlying equilibrium logic — how Ksp, pH and complexation decide which ion drops out — is the solubility-and-complex-ion chapter’s territory (see the equilibrium lesson for the Le Chatelier machinery).',
      },
      {
        kind: 'para',
        text: 'Cation identification runs on two quick screens and one systematic core. The flame test exploits electron transitions: clean a platinum or nichrome wire in concentrated hydrochloric acid, dip it in the sample, and hold it in a non-luminous Bunsen flame — sodium gives an intense golden-yellow (masking everything, so it is tested last or through cobalt glass), potassium lilac (viewed through cobalt glass to filter the sodium), calcium brick-red, strontium crimson, barium apple-green, copper(II) blue-green. The wet screen uses sodium hydroxide solution dropwise, then in excess: Mg2+, Al3+, Zn2+, Pb2+ give white precipitates; Cu2+ pale blue; Fe2+ dirty green (browning on standing as it oxidises); Fe3+ rust-brown; Ca2+ a faint white that only appears at volume. The decisive second step is the excess: Al(OH)3, Zn(OH)2 and Pb(OH)2 are amphoteric and redissolve in excess NaOH to colourless solutions (aluminate, zincate, plumbate), while Mg(OH)2, Cu(OH)2 and Fe(OH)3 persist — so “white precipitate that redissolves in excess” is already a three-cation shortlist. Ammonia solution refines it: Cu(OH)2 dissolves in excess NH3 to the deep royal-blue tetraamminecopper(II) complex ([Cu(NH3)4]2+), zinc redissolves too but colourless, while aluminium’s hydroxide — without acidic character toward the weak base in water — stays put. That trio of reagents (flame, NaOH dropwise/excess, NH3 dropwise/excess) plus the solubility rules separates the common cations with almost no ambiguity.',
      },
      {
        kind: 'para',
        text: 'Anion tests are a set of five confirmatory reactions worth memorising as equations. Halides: acidify with dilute nitric acid (to remove carbonate and hydroxide interferents), then add silver nitrate — chloride gives a white precipitate soluble in dilute ammonia, bromide a cream precipitate soluble only in concentrated ammonia, iodide a yellow precipitate effectively insoluble in ammonia; the trend follows falling solubility down the AgX series. Sulfate: acidify, then add barium chloride or barium nitrate — a dense white precipitate of BaSO4, insoluble in acid, confirming sulfate. Carbonate or hydrogencarbonate: add dilute acid — effervescence of CO2, which turns limewater milky (Ca(OH)2 + CO2 → CaCO3 + H2O). Sulfite behaves similarly (SO2, which decolourises acidified dichromate), so the gas test distinguishes them. Nitrate: the brown-ring test — freshly prepared iron(II) sulfate solution added to the sample, then concentrated sulfuric acid poured down the side forms a brown ring at the junction (the nitrosyl complex [Fe(H2O)5NO]2+); modern schemes substitute devarda’s alloy or aluminium foil in alkali, releasing ammonia. Chloride (as distinct from halide-in-general) needs none of this if the flame and silver tests are already done. As ever, sequence matters: test carbonate before halide (acid first would destroy carbonate), and never test nitrate after adding nitric acid.',
      },
      {
        kind: 'para',
        text: 'Volumetric analysis makes the qualitative quantitative. The bench grammar: a standard solution (from a primary standard weighed on a balance — stable, unhygroscopic, high molar mass so the relative weighing error is small) fills the burette; a measured volume of the unknown (delivered by pipette, hence known to ±0.05 mL) sits in the flask with an indicator; titrate to the endpoint and read the burette to 0.05 mL. The calculation is the mole bridge: n = c × V for each reactant, then scale by the stoichiometric ratio. A worked frame: 25.0 mL of hydrochloric acid of unknown concentration is neutralised by 22.30 mL of 0.100 mol/L NaOH — moles NaOH = 0.100 × 0.02230 = 2.23 × 10−3; the ratio is 1:1, so the acid contains the same moles in 0.0250 L, giving 0.0892 mol/L. Indicators are chosen by titration curve: strong acid–strong base has a steep vertical region around pH 7 wide enough for phenolphthalein (colourless→pink) or methyl orange (red→yellow); weak acid–strong base (acetic acid/NaOH) has its equivalence point above pH 7, so phenolphthalein; strong acid–weak base needs methyl orange. Redox titrations run the same arithmetic on electron stoichiometry: acidified potassium manganate(VII) needs no indicator because the intense purple MnO4− decolourises as it oxidises and the first excess drop turns the flask permanent pale pink — a self-indicating titration (the master drill volume’s permanganate–oxalate problem is exactly this chemistry). Iodine titrations use starch as the indicator: blue-black with the first excess I2.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Identify Three Unknowns from Observations',
        steps: [
          'Unknown A: flame test gives golden-yellow. Sodium is present — but sodium’s flame is so intense it masks co-cations, so A is at least Na+, possibly mixed; report the sodium and note the limitation.',
          'Unknown B: NaOH dropwise gives a white precipitate that redissolves in excess NaOH; ammonia dropwise gives the same white precipitate that does NOT redissolve in excess ammonia. Amphoteric but ammonia-insoluble: Al3+ (zinc would have redissolved in both).',
          'Unknown C: NaOH dropwise gives a pale blue precipitate insoluble in excess NaOH; excess ammonia dissolves it to a deep royal-blue solution. Cu2+ confirmed by the tetraammine complex colour.',
          'Write the equations: Al3+ + 3OH− → Al(OH)3(s), then Al(OH)3 + OH− → [Al(OH)4]−(aq); Cu2+ + 2OH− → Cu(OH)2(s), then Cu(OH)2 + 4NH3 → [Cu(NH3)4(H2O)2]2+ + 2OH−.',
          'Cross-check with the solubility rules: none of the identified products violates them, and no other common cation matches the colour set — the identification is as complete as the scheme allows.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A solution gives a cream precipitate with silver nitrate that dissolves only in concentrated ammonia. The ion is…',
          options: ['chloride', 'bromide', 'iodide', 'sulfate'],
          answer: 1,
          explain: 'AgBr is cream and needs concentrated ammonia; AgCl is white (dilute ammonia), AgI is yellow (insoluble), sulfate does not respond to silver nitrate under these conditions.',
        },
        {
          q: 'A white hydroxide precipitate redissolves in excess NaOH but NOT in excess ammonia. The cation is…',
          options: ['Zn2+', 'Cu2+', 'Al3+', 'Fe2+'],
          answer: 2,
          explain: 'Aluminium hydroxide is amphoteric (redissolves in alkali) but does not form an ammine complex; zinc redissolves in both, copper gives a blue ammine complex, iron(II) hydroxide is green.',
        },
        {
          q: 'The nitrate brown-ring test works because…',
          options: ['nitrate is coloured', 'iron(II) is oxidised to brown iron(III) hydroxide', 'concentrated H2SO4 generates nitrosyl cation that forms a brown iron complex at the junction', 'the barium nitrate precipitates'],
          answer: 2,
          explain: 'In the acid layer, nitrate is reduced to NO, which binds Fe2+ as the brown nitrosyl complex [Fe(H2O)5NO]2+ — a ring at the acid–solution interface.',
        },
        {
          q: '25.0 mL of HCl is neutralised by 22.30 mL of 0.100 mol/L NaOH. The acid concentration is…',
          options: ['0.0892 mol/L', '0.112 mol/L', '0.0223 mol/L', '0.100 mol/L'],
          answer: 0,
          explain: 'n(NaOH) = 2.23 × 10−3 mol; 1:1 ratio; c = n/V = 2.23 × 10−3 / 0.0250 = 0.0892 mol/L.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Testing halides without first acidifying with dilute nitric acid: carbonates and hydroxides give silver precipitates that mimic halides. Using hydrochloric acid as the acidifier: it adds chloride and ruins the silver test. Calling the endpoint the equivalence point: they coincide only when the indicator is chosen for the curve. Writing full equations when the question asks for ionic ones (and vice versa) — read the instruction, because the mark scheme distinguishes them. Forgetting that sodium’s flame masks other metals: test sodium last, or screen through cobalt glass for potassium. And in titration arithmetic, confusing the 1:1 ratio with the 2:1 one — write the balanced equation before touching the numbers; the dilution and washing errors (reading the meniscus at eye level, rinsing the burette with water instead of the titrant) are the classic procedural deductions.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the equilibrium lesson for the Ksp and Le Chatelier logic under selective precipitation. Follow the master Chemistry drills for titration arithmetic under exam conditions (the permanganate–oxalate and saponification problems are the standard redox and back-titration cases). Primary readings: LibreTexts, General Chemistry (Petrucci et al.), section 18.9 “Qualitative Cation Analysis”, and the Analytical Chemistry supplemental module “Confirmatory Tests” (chem.libretexts.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Solubility rules predict precipitates; every test reduces to a net ionic equation with spectators dropped.',
        'Cation scheme: flame tests (Na yellow, K lilac, Ca brick-red, Cu blue-green), then NaOH dropwise/excess for hydroxide colours, then NH3 — amphoterism (Al, Zn, Pb redissolve in alkali) and ammine complexes (Cu deep blue) finish the job.',
        'Anion scheme: halides via AgNO3 (white/cream/yellow, ammonia solubility distinguishes), sulfate via Ba2+ white precipitate, carbonate via acid + limewater, nitrate via the brown ring.',
        'Volumetric analysis: primary-standard solutions, pipette and burette technique, n = cV with stoichiometric ratios, indicator matched to the titration curve.',
        'Redox titrations: MnO4− is self-indicating (purple → colourless → permanent pink at the endpoint); iodine uses starch.',
        'Sequence discipline: carbonate before halide, sodium flame last, endpoint read to 0.05 mL.',
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-chemical-equilibrium',
    title: 'Chemical Equilibrium and Le Chatelier\u2019s Principle',
    domain: 'Physical Sciences',
    field: 'Chemistry',
    branch: 'Physical Chemistry',
    tier: 'intermediate',
    concepts: [
      'Dynamic equilibrium',
      'The equilibrium constant K',
      'Reaction quotient Q',
      'Le Chatelier\u2019s principle',
      'Concentration and pressure shifts',
      'Temperature — the shift that changes K',
      'Catalysts and equilibrium position',
    ],
    words: 874,
    readMins: 4,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Most chemical reactions run both ways, and when forward and reverse rates equalize, concentrations settle into dynamic equilibrium. Physical Chemistry describes the balance with the equilibrium constant K and predicts its response to disturbance with Le Chatelier\u2019s principle: a system at equilibrium shifts to partially oppose any imposed change. Industrial yield, blood chemistry, and fizzy drinks run on these ideas.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The Haber process that feeds half the world\u2019s crops, the oxygen chemistry of blood, and the shelf life of soda are all equilibrium problems. Choosing the right temperature and pressure is choosing where an equilibrium sits.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'At equilibrium nothing appears to change, yet both reactions continue at matched rates. A sealed bottle of soda keeps a steady fizz because carbon dioxide dissolves and escapes equally fast.',
      },
      {
        kind: 'para',
        text: 'For aA + bB ⇌ cC + dD, the ratio of product to reactant concentrations, each raised to its stoichiometric power, equals a constant K_c at fixed temperature. Pure solids and liquids are omitted because their concentrations do not move.',
      },
      {
        kind: 'para',
        text: 'The same expression evaluated away from equilibrium is the reaction quotient Q. Q below K means net forward reaction until Q climbs to K; Q above K means the reverse.',
      },
      {
        kind: 'para',
        text: 'Disturb the system and it leans back: adding reactant shifts the mixture toward products, removing product drags the reaction forward, and compressing a gaseous equilibrium favors the side with fewer moles of gas. Le Chatelier\u2019s principle is the rule-of-thumb version of what Q-versus-K computes exactly.',
      },
      {
        kind: 'para',
        text: 'Heating an equilibrium shifts it in the endothermic direction — heat behaves like a reactant there — and cooling does the reverse. Temperature is the one disturbance that changes K itself.',
      },
      {
        kind: 'para',
        text: 'A catalyst accelerates forward and reverse rates by the same factor, so it changes how fast equilibrium is reached but never where it sits. Catalysts buy time and money, not yield.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Equilibrium constant',
        latex: 'K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}',
        meaning: 'Products of concentrations over reactants, each to its stoichiometric power; fixed at a given temperature.',
      },
      {
        kind: 'formula',
        name: 'Reaction quotient',
        latex: 'Q = \\frac{[C]^c[D]^d}{[A]^a[B]^b}\\ \\text{at any moment}',
        meaning: 'Q below K drives the forward reaction; Q above K drives the reverse toward K.',
      },
      {
        kind: 'formula',
        name: 'Temperature dependence of K',
        latex: '\\ln\\frac{K_2}{K_1} = -\\frac{\\Delta H^{\\circ}}{R}\\!\\left(\\frac{1}{T_2}-\\frac{1}{T_1}\\right)',
        meaning: 'How K moves with temperature: endothermic reactions gain K as temperature rises.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: for N₂(g) + 3H₂(g) ⇌ 2NH₃(g) with ΔH = −92 kJ per reaction, predict the effect of (a) higher pressure, (b) ammonia removal, and (c) higher temperature.',
          'Recall the governing idea: Le Chatelier\u2019s principle — the equilibrium shifts to oppose the disturbance.',
          'Apply: (a) compression favors fewer gas moles, four left versus two right, so ammonia yield rises; (b) removing NH₃ drops Q below K, so more forms; (c) heat is a product here, so heating pushes it backward.',
          'State the result: industry runs the Haber process at high pressure, continuous ammonia removal, and a moderate 400–500 °C that trades some equilibrium yield for acceptable rate.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Haber–Bosch synthesis supplies most of the nitrogen in the world\u2019s fertilizer.',
          'Hemoglobin loads oxygen in the lungs and releases it in tissues as pH and CO₂ shift.',
          'Carbonated drinks hold dissolved CO₂ under high pressure and go flat once the bottle is opened.',
          'Reactors for methanol and sulfuric acid tune temperature, pressure, and catalysts with the same playbook.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The commonest misconception is that a catalyst increases yield — it speeds arrival at the same equilibrium. Another is confusing rate with extent: a reaction can be complete yet slow, or fast yet product-poor; only K tells you which.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Dynamic equilibrium', def: 'Forward and reverse reactions at equal rates with constant concentrations.' },
          { term: 'Equilibrium constant', def: 'The fixed ratio of product to reactant concentration terms at a given temperature.' },
          { term: 'Reaction quotient', def: 'That ratio measured before equilibrium; comparing with K predicts direction.' },
          { term: 'Le Chatelier\u2019s principle', def: 'A disturbed equilibrium shifts to oppose the change.' },
          { term: 'Exothermic', def: 'Releasing heat; for such reactions, heating lowers K.' },
          { term: 'Catalyst', def: 'A substance that speeds both directions equally, altering kinetics but not K.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'For N₂ + 3H₂ ⇌ 2NH₃, increasing the total pressure shifts the equilibrium:',
            options: ['Toward the reactants', 'Toward ammonia', 'Not at all', 'It depends on the catalyst'],
            answer: 1,
            explain: 'Compression favors the side with fewer gas moles — two against four.',
          },
          {
            q: 'Adding a catalyst to a system already at equilibrium:',
            options: ['Shifts it toward products', 'Shifts it toward reactants', 'Leaves the position unchanged while speeding both directions', 'Increases the value of K'],
            answer: 2,
            explain: 'Catalysts multiply forward and reverse rates equally, so the composition does not move.',
          },
          {
            q: 'An exothermic reaction is heated. Its equilibrium constant K:',
            options: ['Increases', 'Decreases', 'Stays unchanged', 'Becomes equal to Q'],
            answer: 1,
            explain: 'Heat acts as a product, so raising temperature drives it backward, lowering K.',
          },
          {
            q: 'At equilibrium, the reaction quotient Q is:',
            options: ['Zero', 'Exactly equal to K', 'Greater than K', 'Less than K'],
            answer: 1,
            explain: 'Q is the same expression as K; at equilibrium the two coincide by definition.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: reaction rates, stoichiometry, and gas behavior. This sets up acid–base equilibria, solubility products, and electrochemistry, all reusing the Q-versus-K machinery.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Equilibrium is dynamic — both reactions continue at equal rates.',
          'K is fixed by temperature alone; Q compared with K predicts the direction of shift.',
          'Concentration and pressure changes move the position; temperature changes K itself.',
          'Catalysts change speed, never position.',
          'Le Chatelier in one line: the system leans against whatever you push.',
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'chem-periodic-trends',
    title: 'The Periodic Table\u2019s Hidden Architecture',
    domain: 'Physical Sciences',
    field: 'Chemistry',
    branch: 'Inorganic Chemistry',
    tier: 'core',
    concepts: [
      'Electron configuration draws the map',
      'Effective nuclear charge',
      'Atomic radius',
      'Ionization energy',
      'Electronegativity',
      'Metallic character and the staircase',
    ],
    words: 1199,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'The periodic table looks like wall decoration; it is closer to a map of the atom. When Dmitri Mendeleev arranged the elements by mass and behavior in 1869, he left deliberate gaps and predicted the properties of the missing ones — gallium and germanium arrived on schedule and vindicated the pattern. The deeper logic arrived with quantum mechanics: position encodes electron configuration, and configuration drives every trend that follows — size, the price of ionization, appetite for electrons, and the metal–nonmetal divide.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Most of chemistry is prediction from position: whether an element will donate, accept, or share its electrons. Doping a semiconductor, choosing a battery electrode, and explaining why fluoride hardens enamel are all periodic-trend calls. The table compresses tens of thousands of observations into a geometry anyone can read in an afternoon.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'An element\u2019s address is its electron arrangement. The row, or period, tells which shell is being filled; the column, or group, tells how many electrons occupy the outermost shell — one for the alkali metals, seven for the halogens, eight for the noble gases. Because valence electrons do nearly all the bonding, a column behaves like a family of chemical siblings: lithium, sodium, and potassium each carry one loosely held electron.',
      },
      {
        kind: 'para',
        text: 'A valence electron feels not the full pull of the nucleus but a discounted version — the effective nuclear charge, the proton count minus the shielding of inner electrons. Moving right along a period adds protons and valence electrons together, but the newcomers shield each other poorly, so the net pull climbs from about +1 at sodium to about +7 at chlorine. That strengthening grip, not memorized arrows, is the engine behind every trend in a row.',
      },
      {
        kind: 'para',
        text: 'Atoms shrink from left to right across a period — sodium\u2019s roughly 190-picometer girth contracts to chlorine\u2019s 100 — as stronger effective charge reels in a shell that adds no new distance. Down a group the opposite wins: each step adds a full shell whose outward sprawl beats the extra protons, so potassium dwarfs sodium. Radius is a permanent tug-of-war between shells pushing out and charge pulling in.',
      },
      {
        kind: 'para',
        text: 'Tearing away an electron costs energy, and the price tracks effective charge and radius together: first ionization energy climbs left to right — 496 kilojoules per mole for sodium, 1,251 for chlorine — and falls down a group as distance dilutes attraction. The jagged exceptions teach the most: oxygen costs less than nitrogen because its fourth 2p electron is the first forced to share an orbital, and the pairing repulsion eases removal.',
      },
      {
        kind: 'para',
        text: 'Electronegativity measures an atom\u2019s pull on shared bonding electrons, and it echoes ionization energy: highest at fluorine, 4.0 on the Pauling scale, lowest toward francium, rising across a period and up a group. The consequences are directional. Elements far apart in the table form ionic bonds — the hungrier side takes the electrons outright — while close neighbors share. A glance at position predicts whether a bond transfers, shares evenly, or splits the difference.',
      },
      {
        kind: 'para',
        text: 'Metallic character — the willingness to release electrons — grows down and to the left, tracing the familiar staircase across the table. Metals below and left hold their electrons loosely, pooling them into a delocalized sea: conductive, malleable, lustrous. Nonmetals above right grip tightly and either seize electrons or share them in discrete molecules. The metalloids straddling the border inherit switchable, semiconductor personalities — silicon\u2019s entire career is built on that ambiguity.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Effective nuclear charge',
        latex: 'Z_{\\text{eff}} = Z - S',
        meaning: 'Protons minus shielding: a sodium valence electron feels about +1, a chlorine\u2019s about +7 on the same shell.',
      },
      {
        kind: 'formula',
        name: 'Coulomb attraction',
        latex: 'F = \\frac{k\\, q_1 q_2}{r^2}',
        meaning: 'The attraction binding electrons scales with effective charge and weakens with distance squared — why grip and radius jointly set every trend.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: rank sodium, magnesium, and chlorine by atomic radius and first ionization energy, with reasons.',
          'Recall the governing idea: across a period, effective nuclear charge rises while the valence shell stays the same size, so atoms contract and their electrons cost more to remove.',
          'Apply: on the third period the effective charges run about +1 (Na), +2 (Mg), and +7 (Cl); radii fall from roughly 190 pm through 160 pm to about 100 pm, while first ionization energies climb 496, 738, then 1,251 kJ/mol.',
          'State the result: radius orders Na > Mg > Cl and ionization energy Na < Mg < Cl — one mechanism read twice, a tighter grip meaning both a smaller atom and a dearer electron.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Doping silicon with phosphorus donates a spare electron and with boron accepts one — the periodic staircase is the electronics industry.',
          'Battery electrodes lean on lithium\u2019s small radius and low ionization energy for light, energetic cells — and on sodium one row down for cheaper ones.',
          'Fluoride toothpaste hardens enamel because the smallest, greediest halogen swaps into hydroxyapatite, resisting acid attack.',
          'Bond-type prediction from position alone: sodium chloride transfers electrons outright, hydrogen chloride shares them unevenly — reactivity forecast from geometry.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The classic slip is memorizing trend arrows without the mechanism — every trend in this topic is one story, effective charge pulling on a shell. Others: forgetting that radius grows down a group despite added protons, because new shells win; treating trends as laws, when oxygen\u2019s dip below nitrogen breaks the smooth climb; and comparing noble gases as if they bonded like their neighbors.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Valence electrons', def: 'Outermost-shell electrons that do nearly all bonding; equal to the main-group number.' },
          { term: 'Effective nuclear charge', def: 'The net positive pull a valence electron feels after inner-electron shielding, Z − S.' },
          { term: 'Atomic radius', def: 'An atom\u2019s effective size — shrinking across a period, growing down a group.' },
          { term: 'Ionization energy', def: 'Energy needed to remove the outermost electron from a gaseous atom.' },
          { term: 'Electronegativity', def: 'An atom\u2019s pull on shared bonding electrons, peaking at fluorine.' },
          { term: 'Shielding', def: 'Reduction of nuclear attraction by electrons lying closer to the nucleus.' },
          { term: 'Metalloid', def: 'An element straddling the metal–nonmetal staircase with intermediate, switchable behavior.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which third-period atom is the largest?',
            options: ['Sodium', 'Magnesium', 'Sulfur', 'Chlorine'],
            answer: 0,
            explain: 'Same shell, smallest effective charge: sodium\u2019s weak +1 grip leaves it widest.',
          },
          {
            q: 'First ionization energy rises across a period mainly because:',
            options: ['Atoms gain neutrons', 'Effective nuclear charge grows while the valence shell stays put', 'The atoms become heavier', 'Electrons pair up evenly'],
            answer: 1,
            explain: 'More pull on a same-sized shell means a firmer grip and a higher price per electron.',
          },
          {
            q: 'Oxygen\u2019s first ionization energy is lower than nitrogen\u2019s because:',
            options: ['Oxygen is the larger atom', 'The fourth 2p electron is paired, and pairing repulsion loosens it', 'Oxygen is less electronegative', 'Nitrogen has a closed shell'],
            answer: 1,
            explain: 'The first shared orbital adds electron–electron repulsion, so oxygen\u2019s outermost electron departs more cheaply.',
          },
          {
            q: 'Down a group, atomic radius increases because:',
            options: ['Nuclear charge vanishes', 'Each step adds a new shell that outweighs the added protons', 'Ionization energy rises', 'Electronegativity climbs'],
            answer: 1,
            explain: 'Distance from the nucleus grows by a whole shell each row, beating the modestly stronger pull.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: atomic structure — shells, subshells, and electron configuration — which this topic repays by explaining the table\u2019s very shape. Continue to ionic and covalent bonding, then the transition metals, where the tidy patterns flex; quantum chemistry eventually derives the whole map from first principles.',
        tone: 'path',
      },
    ],
  },
]
