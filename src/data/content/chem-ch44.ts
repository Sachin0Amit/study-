import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 44: Everyday and Industrial Chemistry
// Sections 44.1 - 44.4. Soaps and detergents, drug classes, food additives,
// fertilizers, cement, fuels and landmark industrial processes.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh44Content: SectionContent[] = [
  // ---------------------------------------------------------------- 44.1
  {
    sectionId: 'chem-ch44-s1',
    readingTime: 8,
    intro: 'Soap is among the oldest deliberate chemistry, boiling oils with alkali into cleaning salts. A soap ion hides a water-loving head on a oil-loving tail, and above a threshold concentration the tails huddle into micelles. Detergents rebuild the same trick with sulfonate heads that keep working in hard water.',
    objectives: [
      'Write saponification of triglyceride to glycerol plus soap salts',
      'Explain micelle cleansing with critical concentration logic',
      'Contrast soap scum with detergent hard water tolerance'
    ],
    concepts: [
      {
        term: 'Saponification reaction',
        kind: 'definition',
        statement: 'A **hot alkali splits oils into soap plus glycerol** `saponify` $(RCOO)_{3}C_{3}H_{5}$ plus $3NaOH$ gives $3RCOONa$ plus $C_{3}H_{5}(OH)_{3}$.',
        detail: 'Sodium salts set as hard bars while potassium salts stay soft in pastes and shaving creams. Common salt grains the soap out of the lye mixture for finishing.'
      },
      {
        term: 'Soap ion anatomy',
        kind: 'theorem',
        statement: 'A **soap ion joins a charged head to a long tail** `amphiphile` $RCOO$ minus carries hydrophilic $COO$ minus plus hydrophobic $C_{15}$ to $C_{17}$ chain.',
        detail: 'Oils rich in double bonds give softer soaps while chain length tunes lather and solubility. Builders and fillers such as carbonate plus silicate adjust action and bar finish.'
      },
      {
        term: 'Micelle cleansing action',
        kind: 'method',
        statement: 'A **micelle traps grease inside a water-facing shell** `micelle` above critical micelle concentration tails point inward and heads face water.',
        detail: 'Tails dissolve the grease drop while charged heads keep the assembly dispersed for rinsing. Agitation plus warm water lowers the barrier to lifting oily films off fabric.'
      },
      {
        term: 'Hard water scum',
        kind: 'law',
        statement: 'A **calcium ion precipitates soap as curd** `scum` $2RCOONa$ plus $Ca$ two plus gives $(RCOO)_{2}Ca$ solid plus $2Na$ plus.',
        detail: 'Magnesium behaves the same way, so lather collapses and deposits cling to cloth in hard water zones. Boiling removes temporary hardness but permanent sulfate and chloride hardness stays.'
      },
      {
        term: 'Detergent families',
        kind: 'insight',
        statement: 'A **sulfonate head stays soluble with calcium** `detergent` $RSO_{3}Na$ linear alkylbenzene sulfonate keeps cleansing where soap curdles.',
        detail: 'Anionic sulfonates lead laundry powders, cationic quaternary ammonium salts condition fabric and disinfect, and non-ionic ethoxylates lift grease gently. Linear chains biodegrade readily while branched chains persist in rivers.'
      }
    ],
    figures: [
      {
        caption: 'Triglyceride plus $NaOH$ gives soap plus glycerol; soap ions gather into grease-trapping micelles while $Ca$ two plus curdles soap but spares sulfonate detergents.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Saponification with micelle and hard water contrast" font-family="sans-serif"><rect x="40" y="90" width="190" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="135" y="120" text-anchor="middle" font-size="13" fill="currentColor">saponify</text><text x="135" y="142" text-anchor="middle" font-size="12" fill="currentColor">oil plus alkali</text><text x="135" y="162" text-anchor="middle" font-size="12" fill="currentColor">soap plus glycerol</text><circle cx="350" cy="140" r="42" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="350" cy="140" r="16" fill="none" stroke="currentColor" stroke-width="2"/><text x="350" y="208" text-anchor="middle" font-size="12" fill="currentColor">micelle traps grease</text><rect x="470" y="90" width="210" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="575" y="120" text-anchor="middle" font-size="13" fill="currentColor">hard water test</text><text x="575" y="142" text-anchor="middle" font-size="12" fill="currentColor">soap curdles to scum</text><text x="575" y="162" text-anchor="middle" font-size="12" fill="currentColor">sulfonate stays clear</text><line x1="230" y1="150" x2="290" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="290,150 280,145 280,155" fill="currentColor"/><line x1="398" y1="150" x2="470" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="470,150 460,145 460,155" fill="currentColor"/><text x="360" y="265" text-anchor="middle" font-size="12" fill="currentColor">heads face water, tails hide grease inside</text><text x="360" y="287" text-anchor="middle" font-size="12" fill="currentColor">linear chains break down, branched chains persist</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Saponification mass balance',
        problem: 'Tristearin $(C_{17}H_{35}COO)_{3}C_{3}H_{5}$ is boiled with excess $NaOH$. Name the products and their states.',
        steps: [
          { label: 'Step 1', text: 'Split each ester link:\n```text\n(RCOO)3C3H5 + 3 NaOH -> 3 RCOONa + C3H5(OH)3\nR = C17H35 chain\n```\nThree soap ions form per oil molecule.' },
          { label: 'Step 2', text: 'Collect sodium stearate $C_{17}H_{35}COONa$ as the hard soap.' },
          { label: 'Step 3', text: 'Recover glycerol $C_{3}H_{5}(OH)_{3}$ from the lye for reuse.' }
        ],
        result: 'Products are sodium stearate soap plus glycerol side stream.'
      },
      {
        title: 'Scum prediction',
        problem: 'Soap solution is mixed with calcium chloride water. Predict observation and fix.',
        steps: [
          { label: 'Step 1', text: 'Pair $2RCOO$ minus with $Ca$ two plus to solid $(RCOO)_{2}Ca$ curd.' },
          { label: 'Step 2', text: 'Watch lather collapse as soap leaves solution.' },
          { label: 'Step 3', text: 'Switch to linear alkylbenzene sulfonate detergent whose calcium salt stays dissolved.' }
        ],
        result: 'Soap curdles to scum while sulfonate detergent keeps cleansing.'
      }
    ],
    keyTakeaways: [
      'Saponification gives $RCOONa$ soap plus glycerol from oils.',
      'Micelles above critical concentration trap grease tails-inward.',
      '$Ca$ two plus and $Mg$ two plus curdle soap to insoluble scum.',
      'Linear sulfonate detergents work in hard water and biodegrade.'
    ],
    quiz: [
      {
        q: 'Saponification reactants and products are:',
        options: ['Oil plus alkali giving soap plus glycerol', 'Acid plus alcohol giving ester only', 'Alkene plus oxygen giving peroxide', 'Salt plus water giving acid'],
        answer: 0,
        explanation: 'Step 1: Boil triglyceride with $NaOH$. Step 2: Split three ester links. Step 3: Collect $RCOONa$ plus glycerol.'
      },
      {
        q: 'Micelle orientation in water is:',
        options: ['Heads inward with tails outward', 'Tails inward with heads facing water', 'Random with no arrangement', 'Single layer with no core'],
        answer: 1,
        explanation: 'Step 1: Cross the critical micelle concentration. Step 2: Hide tails from water inside. Step 3: Face charged heads outward to rinse.'
      },
      // PYQ-pattern: JEE 2020 — soap scum with hard water chemistry (rephrased)
      {
        q: 'Soap fails in hard water because:',
        options: ['Calcium precipitates insoluble soap curd', 'Sodium evaporates from solution', 'Glycerol turns acidic', 'Micelles freeze solid'],
        answer: 0,
        explanation: 'Step 1: Add $Ca$ two plus to $RCOO$ minus. Step 2: Form solid $(RCOO)_{2}Ca$. Step 3: Lose dissolved soap and lather.'
      },
      {
        q: 'Biodegradable laundry choice is:',
        options: ['Branched alkylbenzene sulfonate', 'Linear alkylbenzene sulfonate', 'Insoluble calcium stearate', 'Plain kerosene oil'],
        answer: 1,
        explanation: 'Step 1: Compare linear against branched chains. Step 2: Microbes oxidise linear chains readily. Step 3: Select linear sulfonate for rivers.'
      }
    ]
  },
  // ---------------------------------------------------------------- 44.2
  {
    sectionId: 'chem-ch44-s2',
    readingTime: 10,
    intro: 'Medicines sort by the target they engage and the chemistry that engages it. Some neutralize acid, some block histamine or pain signals, and antibiotics break bacterial walls. Knowing one lead structure per class plus its action turns a memory list into a reasoning map.',
    objectives: [
      'Match antacid, antihistamine and analgesic classes to targets',
      'Explain penicillin beta lactam and sulfa drug antibacterial logic',
      'Separate antiseptic, disinfectant and tranquilizer use boundaries'
    ],
    concepts: [
      {
        term: 'Antacids and acid control',
        kind: 'definition',
        statement: 'A **mild base neutralises excess stomach acid** `antacid` $Al(OH)_{3}$ plus $Mg(OH)_{2}$ mixtures consume $HCl$ without rebound.',
        detail: 'Sodium bicarbonate acts fast but releases $CO_{2}$ and risks alkalosis, while proton pump blockers such as omeprazole stop acid at the enzyme. Histamine blockers such as cimetidine cut the signal that orders acid release.'
      },
      {
        term: 'Antihistamines and analgesics',
        kind: 'theorem',
        statement: 'A **blocker occupies the receptor without firing it** `blocker` cetirizine sits on histamine sites while aspirin acetylates cyclooxygenase enzymes.',
        detail: 'First generation antihistamines cross into the brain and cause drowsiness, while later ones stay peripheral. Paracetamol lowers fever and pain centrally without the gastric load of aspirin.'
      },
      {
        term: 'Penicillin wall attack',
        kind: 'method',
        statement: 'A **strained beta lactam acylates wall enzymes** `penicillin` $6$-aminopenicillanic acid core traps transpeptidase and halts crosslinking.',
        detail: 'Bacteria build walls from peptidoglycan mesh, and the broken crosslinks let water burst the cell. Beta lactamase enzymes in resistant strains open the lactam ring first, defeated by inhibitors such as clavulanic acid.'
      },
      {
        term: 'Sulfa antimetabolites',
        kind: 'law',
        statement: 'A **sulfa drug mimics para aminobenzoic acid** `sulfa` sulfanilamide competes into folate synthesis and starves bacteria of thymidine.',
        detail: 'Human cells import ready folate from diet while bacteria must synthesise it, which gives selective toxicity. Trimethoprim pairs downstream in the same path for combined blockade.'
      },
      {
        term: 'Antiseptic boundaries',
        kind: 'insight',
        statement: 'An **antiseptic suits living skin, disinfectant suits objects** `septic-line` chloroxylenol plus terpineol lotion treats skin while phenol at high strength sterilises floors.',
        detail: 'Iodine tincture, hydrogen peroxide and boric acid serve the skin side at dilute strength. Tranquilizers such as diazepam calm neural circuits instead and need prescription control.'
      }
    ],
    figures: [
      {
        caption: 'Antacids consume $HCl$, blockers occupy receptors, penicillin $\\beta$-lactam halts wall crosslinks, and sulfa drugs starve folate synthesis.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Drug classes with targets and actions" font-family="sans-serif"><rect x="30" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="105" y="120" text-anchor="middle" font-size="13" fill="currentColor">antacid</text><text x="105" y="142" text-anchor="middle" font-size="12" fill="currentColor">eats HCl</text><text x="105" y="162" text-anchor="middle" font-size="12" fill="currentColor">Al plus Mg mix</text><rect x="200" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="275" y="120" text-anchor="middle" font-size="13" fill="currentColor">blockers</text><text x="275" y="142" text-anchor="middle" font-size="12" fill="currentColor">histamine site</text><text x="275" y="162" text-anchor="middle" font-size="12" fill="currentColor">pain enzyme</text><rect x="370" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="445" y="120" text-anchor="middle" font-size="13" fill="currentColor">penicillin</text><text x="445" y="142" text-anchor="middle" font-size="12" fill="currentColor">lactam traps</text><text x="445" y="162" text-anchor="middle" font-size="12" fill="currentColor">wall breaks</text><rect x="540" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="615" y="120" text-anchor="middle" font-size="13" fill="currentColor">sulfa</text><text x="615" y="142" text-anchor="middle" font-size="12" fill="currentColor">folate mimic</text><text x="615" y="162" text-anchor="middle" font-size="12" fill="currentColor">growth halts</text><text x="360" y="265" text-anchor="middle" font-size="12" fill="currentColor">one target per class, one lead structure per target</text><text x="360" y="287" text-anchor="middle" font-size="12" fill="currentColor">skin line separates antiseptic from disinfectant</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Antacid dose choice',
        problem: 'Excess $HCl$ needs relief without $CO_{2}$ bloat. Choose between $NaHCO_{3}$ and $Al(OH)_{3}$ plus $Mg(OH)_{2}$ mix.',
        steps: [
          { label: 'Step 1', text: 'Compare reactions:\n```text\nNaHCO3 + HCl -> NaCl + H2O + CO2 (bloat)\nAl(OH)3 + 3 HCl -> AlCl3 + 3 H2O (no gas)\n```\nGas evolution decides comfort.' },
          { label: 'Step 2', text: 'Balance aluminium tightening with magnesium loosening in the mixed dose.' },
          { label: 'Step 3', text: 'Recommend the mixed hydroxide for gas-free relief.' }
        ],
        result: 'Mixed $Al$ plus $Mg$ hydroxides relieve acid without carbon dioxide load.'
      },
      {
        title: 'Antibiotic choice logic',
        problem: 'A patient allergic to penicillin needs folate-path blockade instead. Identify the class.',
        steps: [
          { label: 'Step 1', text: 'Avoid the beta lactam wall route entirely for safety.' },
          { label: 'Step 2', text: 'Target bacterial folate synthesis with sulfanilamide mimicry.' },
          { label: 'Step 3', text: 'Pair with trimethoprim downstream for dual blockade.' }
        ],
        result: 'Sulfa drugs with trimethoprim bypass the lactam allergy path.'
      }
    ],
    keyTakeaways: [
      'Antacids consume $HCl$; pump and histamine blockers stop its release.',
      'Cetirizine blocks histamine; aspirin plus paracetamol blunt pain signals.',
      'Penicillin lactam halts wall crosslinking; lactamase causes resistance.',
      'Sulfa drugs mimic nutrients to starve bacterial folate synthesis.'
    ],
    quiz: [
      {
        q: 'Gas-free sustained antacid choice is:',
        options: ['Sodium bicarbonate alone', 'Aluminium plus magnesium hydroxide mix', 'Concentrated sulfuric acid', 'Plain table sugar'],
        answer: 1,
        explanation: 'Step 1: Neutralise $HCl$ to water plus salts. Step 2: Avoid carbonate that releases $CO_{2}$ gas. Step 3: Balance bowel effects with the mix.'
      },
      // PYQ-pattern: JEE 2021 — penicillin beta lactam antibacterial action (rephrased)
      {
        q: 'Penicillin kills bacteria by:',
        options: ['Acylating wall crosslinking enzymes', 'Dissolving human cell membranes', 'Blocking oxygen transport in blood', 'Chelating dietary iron fully'],
        answer: 0,
        explanation: 'Step 1: Enter the wall-building site. Step 2: Trap transpeptidase with the lactam. Step 3: Burst the weakened wall by osmosis.'
      },
      {
        q: 'Sulfa selectivity rests on:',
        options: ['Humans importing folate while bacteria synthesise it', 'Bacteria lacking any cell wall', 'Sulfa acting as strong acid only', 'Human enzymes binding sulfa tighter'],
        answer: 0,
        explanation: 'Step 1: Mimic $PABA$ in the folate path. Step 2: Starve bacteria of thymidine. Step 3: Spare humans who import folate.'
      },
      {
        q: 'Correct use boundary is:',
        options: ['Phenol at full strength on skin wounds', 'Dilute chloroxylenol on skin, strong phenol on floors', 'Tranquilizer as surface cleaner', 'Disinfectant injected directly'],
        answer: 1,
        explanation: 'Step 1: Test toxicity to living tissue. Step 2: Keep antiseptics dilute for skin. Step 3: Reserve strong phenol for objects.'
      }
    ]
  },
  // ---------------------------------------------------------------- 44.3
  {
    sectionId: 'chem-ch44-s3',
    readingTime: 8,
    intro: 'Food chemistry preserves flavour, colour and safety long after harvest. Sweeteners, antioxidants, preservatives and colourants each solve one spoilage or taste problem. Dose discipline plus pH and packaging control decide whether an additive helps or harms.',
    objectives: [
      'Compare bulk versus high-intensity sweetener chemistry',
      'Explain antioxidant and preservative spoilage blocks',
      'Read colourant, emulsifier and raising-agent roles on labels'
    ],
    concepts: [
      {
        term: 'High-intensity sweeteners',
        kind: 'definition',
        statement: 'A **tiny dose tastes intensely sweet** `sweetener` aspartame methyl ester dipeptide and sucralose chlorinated sugar out-taste sucrose manifold.',
        detail: 'Saccharin and alitame serve low-calorie needs while excess aspartame breaks to phenylalanine, warning labels for phenylketonuria diets. Sucrose and fructose remain bulk sweeteners with full energy load.'
      },
      {
        term: 'Antioxidant guard',
        kind: 'method',
        statement: 'A **radical trap breaks rancidity chains** `antioxidant` $BHA$ plus $BHT$ donate hydrogen to lipid peroxyl radicals and stop propagation.',
        detail: 'Vitamin $C$ scavenges aqueous radicals while vitamin $E$ guards membranes, and citric acid chelates pro-oxidant metals. Nitrogen-flushed packs plus opaque films assist by cutting oxygen and light.'
      },
      {
        term: 'Preservative chemistry',
        kind: 'theorem',
        statement: 'A **weak acid preservative strikes microbes undissociated** `preserve` benzoic acid $C_{6}H_{5}COOH$ and sorbic acid cross membranes best at low $pH$.',
        detail: 'Sodium benzoate guards acidic juices while propionates protect bread mould and nitrites block botulinum in cured meats. Sulfites bleach and guard dried fruit but trigger sensitive individuals, so labels flag them.'
      },
      {
        term: 'Colourants and flavours',
        kind: 'insight',
        statement: 'A **colourant restores appetite appeal safely** `colour` beta carotene and curcumin give natural yellows while tartrazine is a synthetic azo yellow.',
        detail: 'Caramel, chlorophyll and beet red span the natural palette, and ester aldehydes rebuild fruit notes. Certification caps and purity tests hold synthetic dyes within safe daily intake.'
      },
      {
        term: 'Texture and rise aids',
        kind: 'law',
        statement: 'A **raising agent releases gas on schedule** `rise` $NaHCO_{3}$ plus acid gives $CO_{2}$ in batter while yeast ferments sugars to $CO_{2}$ plus ethanol.',
        detail: 'Emulsifiers such as lecithin bridge oil and water in dressings, and stabilisers such as pectin hold gels. Monoglycerides keep crumb soft while phosphates bind water in processed meats.'
      }
    ],
    figures: [
      {
        caption: 'Sweeteners cut calories, $BHA$ plus $BHT$ trap radicals, benzoate guards acidic packs, and $NaHCO_{3}$ plus yeast release $CO_{2}$ for rise.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Food additive roles from sweet to rise" font-family="sans-serif"><rect x="30" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="105" y="120" text-anchor="middle" font-size="13" fill="currentColor">sweeteners</text><text x="105" y="142" text-anchor="middle" font-size="12" fill="currentColor">aspartame</text><text x="105" y="162" text-anchor="middle" font-size="12" fill="currentColor">sucralose</text><rect x="200" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="275" y="120" text-anchor="middle" font-size="13" fill="currentColor">antioxidant</text><text x="275" y="142" text-anchor="middle" font-size="12" fill="currentColor">BHA BHT trap</text><text x="275" y="162" text-anchor="middle" font-size="12" fill="currentColor">vit C plus E</text><rect x="370" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="445" y="120" text-anchor="middle" font-size="13" fill="currentColor">preserve</text><text x="445" y="142" text-anchor="middle" font-size="12" fill="currentColor">benzoate low pH</text><text x="445" y="162" text-anchor="middle" font-size="12" fill="currentColor">nitrite guards meat</text><rect x="540" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="615" y="120" text-anchor="middle" font-size="13" fill="currentColor">rise plus mix</text><text x="615" y="142" text-anchor="middle" font-size="12" fill="currentColor">CO2 lifts batter</text><text x="615" y="162" text-anchor="middle" font-size="12" fill="currentColor">lecithin bridges</text><text x="360" y="265" text-anchor="middle" font-size="12" fill="currentColor">each additive answers one spoilage question</text><text x="360" y="287" text-anchor="middle" font-size="12" fill="currentColor">dose plus pH plus pack decide safety</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Juice preservative call',
        problem: 'An acidic mango drink at $pH$ near $3.5$ needs microbial guard. Choose benzoate or neutral salt.',
        steps: [
          { label: 'Step 1', text: 'Check the acid form:\n```text\nC6H5COONa + H+ -> C6H5COOH active form\nactive below pKa near 4.2, so pH 3.5 works\n```\nUndissociated acid crosses microbe membranes.' },
          { label: 'Step 2', text: 'Dose sodium benzoate within the permitted limit.' },
          { label: 'Step 3', text: 'Pair with heat treatment plus sealed pack for shelf life.' }
        ],
        result: 'Benzoate at acidic $pH$ guards the juice within safe limits.'
      },
      {
        title: 'Rancidity defence plan',
        problem: 'Fried snack packs turn stale by lipid oxidation. Design the defence.',
        steps: [
          { label: 'Step 1', text: 'Add $BHA$ plus $BHT$ to trap peroxyl radicals early.' },
          { label: 'Step 2', text: 'Flush packs with nitrogen and use opaque film against light.' },
          { label: 'Step 3', text: 'Add citric acid to chelate trace iron and copper catalysts.' }
        ],
        result: 'Traps plus barrier plus chelation extend crisp shelf life.'
      }
    ],
    keyTakeaways: [
      'Aspartame, sucralose and saccharin sweeten at tiny doses.',
      '$BHA$ plus $BHT$ with vitamins $C$ and $E$ block rancidity chains.',
      'Benzoate and sorbate act as acids at low $pH$; nitrites guard meats.',
      'Raising agents release $CO_{2}$ while emulsifiers bridge oil and water.'
    ],
    quiz: [
      {
        q: 'Aspartame caution for phenylketonuria diets exists because:',
        options: ['It releases phenylalanine on breakdown', 'It contains live microbes', 'It forms strong mineral acid', 'It never digests at all'],
        answer: 0,
        explanation: 'Step 1: Hydrolyse the methyl ester dipeptide. Step 2: Free phenylalanine plus aspartate. Step 3: Flag labels for restricted diets.'
      },
      {
        q: 'BHA and BHT stop rancidity by:',
        options: ['Donating hydrogen to peroxyl radicals', 'Adding water to oils', 'Raising pack temperature', 'Blocking all packaging light fully'],
        answer: 0,
        explanation: 'Step 1: Form lipid peroxyl radicals. Step 2: Donate $H$ from hindered phenol. Step 3: Break the chain with stable phenoxyl.'
      },
      {
        q: 'Sodium benzoate works best in:',
        options: ['Strongly alkaline soups', 'Acidic juices below its pKa', 'Dry salt with no water', 'Frozen metal cans only'],
        answer: 1,
        explanation: 'Step 1: Convert benzoate to benzoic acid. Step 2: Keep $pH$ below $4.2$ for undissociated form. Step 3: Cross microbe membranes to act.'
      },
      {
        q: 'Assertion: nitrites are kept in cured meats despite toxicity checks. Reason: nitrites block botulinum toxin formation at permitted doses.',
        options: ['Both the assertion and the reason are true, and the reason correctly explains the assertion', 'Both the assertion and the reason are true, but the reason does not explain the assertion', 'The assertion is true but the reason is false', 'The assertion is false but the reason is true'],
        answer: 0,
        explanation: 'Step 1: Confirm nitrite use in cured meats. Step 2: Link nitrite to botulinum control. Step 3: Note dose caps manage risk. Step 4: Conclude benefit explains controlled use.'
      }
    ]
  },
  // ---------------------------------------------------------------- 44.4
  {
    sectionId: 'chem-ch44-s4',
    readingTime: 11,
    intro: 'Fertilizers, cement, fuels and bulk chemicals share one theme of forcing matter at scale. Nutrient grades feed crops, kiln chemistry feeds cities, and octane plus cetane numbers grade engine fuels. Three landmark plants named Haber, Contact and Hall Heroult anchor the industrial map.',
    objectives: [
      'Read NPK grades with urea and phosphate fertilizer chemistry',
      'Trace cement setting from clinker phases to gel strength',
      'State Haber, Contact and Hall Heroult operating conditions'
    ],
    concepts: [
      {
        term: 'NPK fertilizer grades',
        kind: 'definition',
        statement: 'A **grade triplet reports nitrogen phosphate potash** `NPK` $15$-$15$-$15$ means equal $N$, $P_{2}O_{5}$ and $K_{2}O$ mass shares.',
        detail: 'Urea $NH_{2}CONH_{2}$ carries the richest nitrogen share near $46$ percent, while ammonium nitrate and diammonium phosphate pair nitrogen with phosphate. Muriate of potash $KCl$ supplies potassium, and superphosphate brings calcium phosphate plus sulfate.'
      },
      {
        term: 'Cement setting chemistry',
        kind: 'theorem',
        statement: 'A **clinker hydration builds binding gel** `cement-set` tricalcium silicate $C_{3}S$ plus water gives $C$-$S$-$H$ gel plus $Ca(OH)_{2}$.',
        detail: 'Dicalcium silicate $C_{2}S$ hardens slowly for late strength while tricalcium aluminate flash-sets unless gypsum $CaSO_{4}$ retards it. Curing keeps water present so hydration completes instead of drying out.'
      },
      {
        term: 'Fuel quality numbers',
        kind: 'law',
        statement: 'An **octane number grades knock resistance** `octane` iso-octane $100$ and n-heptane $0$ bracket petrol behaviour in the test engine.',
        detail: 'Branching, aromatics and oxygenates such as ethanol raise octane and resist early ignition. Cetane number mirrors the diesel need instead, rewarding quick self-ignition with straight hexadecane at $100$.'
      },
      {
        term: 'Haber and Contact pair',
        kind: 'method',
        statement: 'A **catalyst bed plus absorption tower define bulk acids** `haber-contact` Haber $Fe$ near $450$ degree under high pressure; Contact $V_{2}O_{5}$ near $450$ degree to oleum.',
        detail: 'Haber recycles unreacted $N_{2}$ plus $H_{2}$ per pass toward ammonia, feeding nitric acid and fertilizers. Contact absorbs $SO_{3}$ in concentrated acid to oleum $H_{2}S_{2}O_{7}$, then trims to $98$ percent sulfuric acid.'
      },
      {
        term: 'Hall Heroult aluminium',
        kind: 'insight',
        statement: 'A **cryolite bath dissolves alumina for electrolysis** `hall-heroult` $Al_{2}O_{3}$ in $Na_{3}AlF_{6}$ near $950$ degree gives $Al$ at the cathode.',
        detail: 'Carbon anodes burn to $CO_{2}$ and need steady replacement, which sets the energy and carbon cost of aluminium. Cryolite lowers the melt point far below pure alumina and conducts the bath.'
      }
    ],
    figures: [
      {
        caption: '$NPK$ grades feed crops, $C_{3}S$ hydration sets cement, octane and cetane grade fuels, and Haber plus Contact plus Hall Heroult plants deliver $NH_{3}$, acid and $Al$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fertilizer cement fuels and three industrial plants" font-family="sans-serif"><rect x="30" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="105" y="120" text-anchor="middle" font-size="13" fill="currentColor">NPK grade</text><text x="105" y="142" text-anchor="middle" font-size="12" fill="currentColor">urea rich N</text><text x="105" y="162" text-anchor="middle" font-size="12" fill="currentColor">phosphate, potash</text><rect x="200" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="275" y="120" text-anchor="middle" font-size="13" fill="currentColor">cement set</text><text x="275" y="142" text-anchor="middle" font-size="12" fill="currentColor">C3S to gel</text><text x="275" y="162" text-anchor="middle" font-size="12" fill="currentColor">gypsum retards</text><rect x="370" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="445" y="120" text-anchor="middle" font-size="13" fill="currentColor">fuels</text><text x="445" y="142" text-anchor="middle" font-size="12" fill="currentColor">octane knock bar</text><text x="445" y="162" text-anchor="middle" font-size="12" fill="currentColor">cetane ignite bar</text><rect x="540" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="615" y="120" text-anchor="middle" font-size="13" fill="currentColor">3 plants</text><text x="615" y="142" text-anchor="middle" font-size="12" fill="currentColor">Haber Contact</text><text x="615" y="162" text-anchor="middle" font-size="12" fill="currentColor">Hall Heroult</text><text x="360" y="265" text-anchor="middle" font-size="12" fill="currentColor">grades feed crops, gels hold cities, numbers grade fuels</text><text x="360" y="287" text-anchor="middle" font-size="12" fill="currentColor">catalyst, tower and bath deliver scale</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Reading a fertilizer bag',
        problem: 'A bag marked $10$-$26$-$26$ weighs $50$ kg. Find nutrient masses as oxides.',
        steps: [
          { label: 'Step 1', text: 'Decode the grade:\n```text\nN 10 percent -> 5.0 kg nitrogen\nP2O5 26 percent -> 13.0 kg phosphate\nK2O 26 percent -> 13.0 kg potash\n```\nGrades report oxide-basis shares.' },
          { label: 'Step 2', text: 'Match urea or ammonium salts to the nitrogen share.' },
          { label: 'Step 3', text: 'Match superphosphate and muriate of potash to the rest.' }
        ],
        result: 'The bag carries $5$ kg $N$, $13$ kg phosphate and $13$ kg potash shares.'
      },
      {
        title: 'Why gypsum joins clinker',
        problem: 'Clinker ground without gypsum sets in a flash and cracks. Explain the fix.',
        steps: [
          { label: 'Step 1', text: 'Spot tricalcium aluminate $C_{3}A$ hydrating almost instantly.' },
          { label: 'Step 2', text: 'Add gypsum $CaSO_{4}$ to form a protective sulfoaluminate coat.' },
          { label: 'Step 3', text: 'Let silicates $C_{3}S$ and $C_{2}S$ build $C$-$S$-$H$ gel strength on schedule with curing water.' }
        ],
        result: 'Gypsum retards flash set so silicate gel builds durable strength.'
      }
    ],
    keyTakeaways: [
      '$NPK$ grades report $N$, $P_{2}O_{5}$ and $K_{2}O$ shares; urea leads nitrogen.',
      'Cement $C_{3}S$ hydration builds $C$-$S$-$H$ gel; gypsum checks flash set.',
      'Octane rewards knock resistance; cetane rewards quick diesel ignition.',
      'Haber, Contact and Hall Heroult run on $Fe$, $V_{2}O_{5}$ and cryolite baths.'
    ],
    quiz: [
      {
        q: 'Urea nitrogen share is prized because it is near:',
        options: ['46 percent nitrogen', '5 percent nitrogen', 'Zero nitrogen', '100 percent water'],
        answer: 0,
        explanation: 'Step 1: Write urea $NH_{2}CONH_{2}$. Step 2: Count two nitrogens per $60$ mass. Step 3: Read near $46$ percent nitrogen.'
      },
      {
        q: 'Gypsum role in cement is to:',
        options: ['Speed all setting to seconds', 'Retard aluminate flash set for workable schedule', 'Replace all silicate phases', 'Remove water from the mix'],
        answer: 1,
        explanation: 'Step 1: Hydrate $C_{3}A$ too fast alone. Step 2: Coat it via sulfoaluminate with gypsum. Step 3: Let silicates build strength on time.'
      },
      // PYQ-pattern: JEE 2022 — octane versus cetane numbers and industrial conditions (rephrased)
      {
        q: 'Octane versus cetane numbers differ as:',
        options: ['Both reward knock in petrol', 'Octane resists early ignition, cetane rewards quick ignition', 'Both measure cement strength', 'Both count fertilizer grade'],
        answer: 1,
        explanation: 'Step 1: Bracket petrol between iso-octane and n-heptane. Step 2: Bracket diesel ignition by hexadecane. Step 3: Read opposite ignition demands.'
      },
      {
        q: 'Hall Heroult bath uses cryolite to:',
        options: ['Raise melt point above steel range', 'Dissolve alumina near 950 degree with conduction', 'Oxidise aluminium to waste', 'Freeze the cell solid'],
        answer: 1,
        explanation: 'Step 1: Note pure alumina melts far too hot. Step 2: Dissolve it in $Na_{3}AlF_{6}$. Step 3: Electrolyse near $950$ degree to liquid $Al$.'
      }
    ]
  }
]
