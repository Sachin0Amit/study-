import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 43: Bioinorganic Chemistry and Nucleic Acids
// Sections 43.1 - 43.4. Ion transport, oxygen-binding proteins, metalloenzymes,
// electron transfer chains, nitrogen fixation and DNA/RNA structure.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh43Content: SectionContent[] = [
  // ---------------------------------------------------------------- 43.1
  {
    sectionId: 'chem-ch43-s1',
    readingTime: 9,
    intro: 'Cells move ions against gradients and carry oxygen without rusting the iron that binds it. Pumps spend energy currency while channels and carriers run downhill, and each path is selective for one ion. Hemoglobin and myoglobin then show how one heme unit scales from storage to cooperative delivery.',
    objectives: [
      'Contrast pumps, carriers and channels in ion transport energetics',
      'Run sodium potassium pump stoichiometry with ionophore selectivity',
      'Read hemoglobin cooperative loading against myoglobin hyperbolic loading'
    ],
    concepts: [
      {
        term: 'Active versus passive transport',
        kind: 'definition',
        statement: 'A **pump spends energy currency uphill** `transport-classes` primary active transport hydrolyses $ATP$ while channels let ions flow downhill.',
        detail: 'Carriers bind and flip conformation for selective downhill or coupled flow, while channels are water-filled pores with selectivity filters. Coupled symport and antiport harness one gradient to build another.'
      },
      {
        term: 'Sodium potassium pump cycle',
        kind: 'theorem',
        statement: 'A **pump ejects three sodium and imports two potassium** `NaK-pump` $3Na$ plus inside plus $2K$ plus outside plus $ATP$ gives $3Na$ plus outside plus $2K$ plus inside plus $ADP$.',
        detail: 'Phosphorylation flips the protein between inward and outward states, holding membrane voltage and cell volume. Ouabain locks the pump and collapses the gradient, proving the cycle is active.'
      },
      {
        term: 'Ionophore selectivity',
        kind: 'method',
        statement: 'A **carrier cage fits one ion radius best** `ionophore` valinomycin wraps $K$ plus selectively over $Na$ plus through cavity size match.',
        detail: 'Monensin ferries $Na$ plus across membranes as a mobile carrier, while gramicidin forms a pore instead. Selectivity comes from dehydration cost repaid by matched ligand dipoles inside the cavity.'
      },
      {
        term: 'Heme oxygen binding unit',
        kind: 'insight',
        statement: 'A **ferrous porphyrin binds oxygen reversibly** `heme-O2` $Fe(II)$ plus $O_{2}$ gives oxy form without oxidising to $Fe(III)$ met form.',
        detail: 'Proximal histidine anchors iron below the ring while distal histidine steadies bound $O_{2}$ by hydrogen bonding. Carbon monoxide binds the same site far tighter, which explains its toxicity at low pressure.'
      },
      {
        term: 'Hemoglobin cooperativity',
        kind: 'law',
        statement: 'A **tetramer loads oxygen sigmoidally** `cooperative` hemoglobin $Hb$ shifts from tense $T$ to relaxed $R$ state as $O_{2}$ binds successive subunits.',
        detail: 'Myoglobin as a monomer loads hyperbolically and stores oxygen, while hemoglobin unloads in tissues where acidity, $CO_{2}$ and $2,3$-$BPG$ lower affinity. Fetal hemoglobin binds $2,3$-$BPG$ weakly and pulls oxygen across the placenta.'
      }
    ],
    figures: [
      {
        caption: 'The $3Na$ plus out and $2K$ plus in pump builds gradients while $Fe(II)$ heme loads $O_{2}$ sigmoidally in $Hb$ and hyperbolically in myoglobin.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sodium potassium pump with hemoglobin loading curves" font-family="sans-serif"><rect x="40" y="90" width="200" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="140" y="120" text-anchor="middle" font-size="13" fill="currentColor">Na K pump</text><text x="140" y="142" text-anchor="middle" font-size="12" fill="currentColor">3 Na out, 2 K in</text><text x="140" y="162" text-anchor="middle" font-size="12" fill="currentColor">ATP to ADP</text><text x="140" y="182" text-anchor="middle" font-size="12" fill="currentColor">ouabain blocks</text><rect x="280" y="90" width="190" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="375" y="120" text-anchor="middle" font-size="13" fill="currentColor">heme Fe II</text><text x="375" y="142" text-anchor="middle" font-size="12" fill="currentColor">distal His steadies</text><text x="375" y="162" text-anchor="middle" font-size="12" fill="currentColor">CO binds tighter</text><rect x="510" y="90" width="170" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="595" y="120" text-anchor="middle" font-size="13" fill="currentColor">loading curves</text><text x="595" y="142" text-anchor="middle" font-size="12" fill="currentColor">Hb sigmoidal</text><text x="595" y="162" text-anchor="middle" font-size="12" fill="currentColor">Mb hyperbolic</text><line x1="240" y1="150" x2="280" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="280,150 270,145 270,155" fill="currentColor"/><line x1="470" y1="150" x2="510" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="510,150 500,145 500,155" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">pump builds the gradient, heme spends it on delivery</text><text x="360" y="282" text-anchor="middle" font-size="12" fill="currentColor">acidity and BPG tune unloading in tissues</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Pump counting drill',
        problem: 'A cell hydrolyses $6$ molecules of $ATP$ through sodium potassium pumps. Count ions moved.',
        steps: [
          { label: 'Step 1', text: 'Fix the ratio:\n```text\nper ATP: 3 Na+ out, 2 K+ in\nper 6 ATP: multiply by 6\n```\nEach cycle is strictly coupled.' },
          { label: 'Step 2', text: 'Move $18$ sodium ions outward across the membrane.' },
          { label: 'Step 3', text: 'Move $12$ potassium ions inward for a net outward positive charge.' }
        ],
        result: 'Six cycles move $18Na$ plus out and $12K$ plus in, polarising the membrane.'
      },
      {
        title: 'Reading loading curves',
        problem: 'At tissue partial pressure, hemoglobin unloads but myoglobin stays loaded. Explain.',
        steps: [
          { label: 'Step 1', text: 'Recall hemoglobin is sigmoidal with a steep middle, myoglobin hyperbolic with early rise.' },
          { label: 'Step 2', text: 'Lower tissue $O_{2}$ pressure plus acidity and $CO_{2}$ push hemoglobin toward the $T$ state.' },
          { label: 'Step 3', text: 'Myoglobin keeps high affinity and holds oxygen for muscle use.' }
        ],
        result: 'Cooperative hemoglobin delivers while high-affinity myoglobin stores.'
      }
    ],
    keyTakeaways: [
      'Pumps use $ATP$ uphill; channels and carriers run downhill selectively.',
      'Sodium potassium pump moves $3Na$ plus out with $2K$ plus in per $ATP$.',
      '$Fe(II)$ heme binds $O_{2}$ reversibly; $CO$ poisoning wins the same site.',
      'Hemoglobin is sigmoidal and cooperative; myoglobin is hyperbolic storage.'
    ],
    quiz: [
      {
        q: 'Primary active transport is identified by:',
        options: ['Direct ATP hydrolysis driving uphill flow', 'Free downhill diffusion only', 'No protein involvement', 'Equal ion flow both ways'],
        answer: 0,
        explanation: 'Step 1: Look for $ATP$ to $ADP$ coupling. Step 2: Check movement against the gradient. Step 3: Name the pump primary active.'
      },
      {
        q: 'Valinomycin selectivity for potassium rests on:',
        options: ['Cavity size matching dehydrated potassium', 'Covalent bonding to chloride', 'Light absorption by the ring', 'Magnetic attraction to iron'],
        answer: 0,
        explanation: 'Step 1: Strip water from the ion. Step 2: Fit the bare ion in the cage. Step 3: Repay dehydration only for $K$ plus size.'
      },
      // PYQ-pattern: JEE 2018 — hemoglobin versus myoglobin loading curves (rephrased)
      {
        q: 'Hemoglobin loading curve shape and cause are:',
        options: ['Hyperbolic from single site', 'Sigmoidal from cooperative subunits', 'Linear from passive leak', 'Flat from no binding'],
        answer: 1,
        explanation: 'Step 1: Count four interacting subunits. Step 2: Shift $T$ to $R$ with each $O_{2}$. Step 3: Read the S-shaped loading curve.'
      },
      {
        q: 'Assertion: hemoglobin unloads oxygen in acidic exercising muscle. Reason: protons and carbon dioxide stabilise the tense low-affinity state.',
        options: ['Both the assertion and the reason are true, and the reason correctly explains the assertion', 'Both the assertion and the reason are true, but the reason does not explain the assertion', 'The assertion is true but the reason is false', 'The assertion is false but the reason is true'],
        answer: 0,
        explanation: 'Step 1: Confirm unloading rises with acidity. Step 2: Link protons to salt bridges of $T$ state. Step 3: Add $CO_{2}$ carbamate effect. Step 4: Conclude the reason explains the Bohr shift.'
      }
    ]
  },
  // ---------------------------------------------------------------- 43.2
  {
    sectionId: 'chem-ch43-s2',
    readingTime: 10,
    intro: 'A handful of metals run the chemistry of breathing, photosynthesis and detoxification inside proteins. Zinc acts as a Lewis acid, iron cycles oxidation states, and copper shuttles single electrons at high speed. Electron transfer chains then wire these centres together from donors to oxygen.',
    objectives: [
      'Assign zinc, iron and copper roles in classic metalloenzymes',
      'Trace cytochrome electron flow with iron sulfur clusters',
      'Locate manganese calcium cluster action in water oxidation'
    ],
    concepts: [
      {
        term: 'Zinc Lewis acid enzymes',
        kind: 'definition',
        statement: 'A **zinc centre polarises substrates without redox** `zinc-enzyme` carbonic anhydrase $Zn$-$OH$ attacks $CO_{2}$ to $HCO_{3}$ minus.',
        detail: 'Carboxypeptidase and alcohol dehydrogenase use the same trick: zinc holds water or carbonyl oxygen and drops the barrier. Zinc stays $Zn(II)$ throughout, so no electron shuffling is involved.'
      },
      {
        term: 'Heme redox enzymes',
        kind: 'theorem',
        statement: 'A **heme iron cycles oxidation states to oxidise** `heme-redox` cytochrome $P_{450}$ inserts one oxygen atom into substrate $RH$ giving $ROH$.',
        detail: 'Catalase disproportionates $H_{2}O_{2}$ to water plus oxygen while peroxidase passes oxidation to organic donors. The porphyrin plus thiolate ligand tunes iron for oxygen activation.'
      },
      {
        term: 'Copper and SOD protection',
        kind: 'method',
        statement: 'A **copper zinc pair destroys superoxide** `SOD` $2O_{2}$ minus plus $2H$ plus gives $O_{2}$ plus $H_{2}O_{2}$ at the $Cu$ site.',
        detail: 'Copper cycles $Cu(II)$ to $Cu(I)$ while zinc holds the protein frame, and manganese SOD guards mitochondria the same way. Plastocyanin blue copper then ferries single electrons in photosynthesis.'
      },
      {
        term: 'Electron transfer chains',
        kind: 'law',
        statement: 'An **electron cascade falls down reduction potentials** `ET-chain` $NADH$ to flavin to $Fe$-$S$ to cytochromes to $O_{2}$ pumps protons along the way.',
        detail: 'Cytochromes $b$, $c_{1}$, $c$ and $a$ carry iron $Fe(II)$ to $Fe(III)$ steps, and mobile $Q$ plus cytochrome $c$ link the complexes. Oxygen waits at the end as the terminal acceptor forming water.'
      },
      {
        term: 'Photosynthetic water oxidation',
        kind: 'insight',
        statement: 'A **manganese calcium cluster splits water with light** `OEC` $2H_{2}O$ gives $O_{2}$ plus $4H$ plus plus $4e$ minus at the $Mn_{4}Ca$ centre.',
        detail: 'Chlorophyll $Mg$ reaction centres $P_{680}$ and $P_{700}$ feed electrons through quinones and plastocyanin. The cluster steps through five oxidation states before releasing one oxygen molecule.'
      }
    ],
    figures: [
      {
        caption: '$Zn$ polarises without redox, $Fe$ and $Cu$ cycle oxidation states, and electrons fall through cytochromes to $O_{2}$ while $Mn_{4}Ca$ oxidises water.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Metalloenzyme triad with electron chain to oxygen" font-family="sans-serif"><rect x="40" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="115" y="120" text-anchor="middle" font-size="13" fill="currentColor">Zn acid</text><text x="115" y="142" text-anchor="middle" font-size="12" fill="currentColor">CO2 to HCO3</text><text x="115" y="162" text-anchor="middle" font-size="12" fill="currentColor">no redox</text><rect x="220" y="90" width="150" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="295" y="120" text-anchor="middle" font-size="13" fill="currentColor">Fe plus Cu</text><text x="295" y="142" text-anchor="middle" font-size="12" fill="currentColor">P450, catalase</text><text x="295" y="162" text-anchor="middle" font-size="12" fill="currentColor">SOD guard</text><rect x="400" y="90" width="280" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="540" y="120" text-anchor="middle" font-size="13" fill="currentColor">chain to oxygen</text><text x="540" y="142" text-anchor="middle" font-size="12" fill="currentColor">NADH to Fe-S to cyt</text><text x="540" y="162" text-anchor="middle" font-size="12" fill="currentColor">Mn4Ca splits water</text><line x1="190" y1="150" x2="220" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="220,150 210,145 210,155" fill="currentColor"/><line x1="370" y1="150" x2="400" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="400,150 390,145 390,155" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">acids hold, redox metals cycle, chains wire them</text><text x="360" y="282" text-anchor="middle" font-size="12" fill="currentColor">oxygen waits at the downhill end</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Carbonic anhydrase turnover logic',
        problem: 'Explain how $Zn$-$OH$ hydrates $CO_{2}$ without changing metal oxidation state.',
        steps: [
          { label: 'Step 1', text: 'Hold hydroxide:\n```text\nZn2+ - OH- + CO2 -> Zn2+ - HCO3-\nZn2+ - HCO3- + H2O -> Zn2+ - OH- + HCO3- + H+\n```\nZinc only polarises, never reduces.' },
          { label: 'Step 2', text: 'Attack $CO_{2}$ carbon with bound hydroxide to form bicarbonate.' },
          { label: 'Step 3', text: 'Exchange bicarbonate for water and deprotonate back to $Zn$-$OH$.' }
        ],
        result: 'Zinc cycles ligands while $CO_{2}$ becomes bicarbonate at high speed.'
      },
      {
        title: 'Ordering an electron chain',
        problem: 'Order $NADH$, $Fe$-$S$ cluster, cytochrome $c$ and $O_{2}$ by electron flow.',
        steps: [
          { label: 'Step 1', text: 'Start at the strongest donor $NADH$ with the lowest reduction potential.' },
          { label: 'Step 2', text: 'Pass through flavin and $Fe$-$S$ clusters to cytochrome $c$ iron centres.' },
          { label: 'Step 3', text: 'Arrive at $O_{2}$ forming water with proton pumping at three complexes.' }
        ],
        result: 'Flow runs $NADH$ to $Fe$-$S$ to cytochrome $c$ to oxygen.'
      }
    ],
    keyTakeaways: [
      '$Zn$ enzymes use Lewis acidity with fixed $Zn(II)$ state.',
      'Heme $Fe$ enzymes activate oxygen for insertion and peroxide removal.',
      '$Cu$ plus $Zn$ SOD disproportionates superoxide to $O_{2}$ plus peroxide.',
      'Chains wire donors through cytochromes to $O_{2}$; $Mn_{4}Ca$ splits water.'
    ],
    quiz: [
      {
        q: 'Carbonic anhydrase zinc acts as:',
        options: ['Redox cycler between two states', 'Lewis acid polarising water and CO2', 'Electron donor to oxygen', 'Light absorber for ATP'],
        answer: 1,
        explanation: 'Step 1: Fix zinc as $Zn(II)$ always. Step 2: Bind hydroxide at the metal. Step 3: Attack $CO_{2}$ without electron transfer.'
      },
      {
        q: 'Cytochrome P450 reaction type is:',
        options: ['Monooxygenation inserting one oxygen atom', 'Nitrogen fixation to ammonia', 'Water splitting to oxygen', 'Fat hydrolysis to glycerol'],
        answer: 0,
        explanation: 'Step 1: Activate $O_{2}$ at heme iron. Step 2: Split oxygen, one atom to water. Step 3: Insert the other into $RH$ giving $ROH$.'
      },
      {
        q: 'Terminal electron acceptor of respiration is:',
        options: ['Carbon dioxide', 'Oxygen forming water', 'Sodium ion', 'Glucose itself'],
        answer: 1,
        explanation: 'Step 1: Follow falling potentials downhill. Step 2: Pass cytochrome oxidase. Step 3: Reduce $O_{2}$ to $2H_{2}O$.'
      },
      // PYQ-pattern: JEE 2022 — SOD disproportionation and water oxidizing complex (rephrased)
      {
        q: 'Water oxidation in photosynthesis occurs at:',
        options: ['The Mn4Ca cluster of photosystem II', 'Cytochrome c in mitochondria', 'Zinc of carbonic anhydrase', 'Sodium potassium pump'],
        answer: 0,
        explanation: 'Step 1: Absorb light at $P_{680}$. Step 2: Step the $Mn_{4}Ca$ cluster through oxidation states. Step 3: Release $O_{2}$ from two waters.'
      }
    ]
  },
  // ---------------------------------------------------------------- 43.3
  {
    sectionId: 'chem-ch43-s3',
    readingTime: 8,
    intro: 'Dinitrogen resists chemistry with a triple bond among the strongest known, yet life and industry both crack it. Nitrogenase works at ambient conditions with iron sulfur clusters and heavy energy currency spending. The Haber process answers with iron catalyst beds, heat and high pressure instead.',
    objectives: [
      'Write nitrogenase stoichiometry with FeMo cofactor and energy currency cost',
      'State Haber catalyst, temperature and pressure operating window',
      'Contrast biological ambient fixation with industrial forcing conditions'
    ],
    concepts: [
      {
        term: 'Dinitrogen inertness',
        kind: 'definition',
        statement: 'A **triple bond plus poor polarity blocks attack** `N2-inert` $N\\equiv N$ carries bond energy near $945$ kJ per mol with a large gap.',
        detail: 'No dipole and weak proton affinity keep $N_{2}$ untouched by most reagents at room conditions. Only strong reduction with protonation, or forcing catalytic surfaces, opens the bond.'
      },
      {
        term: 'Nitrogenase cofactors',
        kind: 'theorem',
        statement: 'A **molybdenum iron cluster binds and reduces dinitrogen** `nitrogenase` $FeMo$-co plus $Fe$ protein deliver electrons stepwise to $N_{2}$.',
        detail: 'Molybdenum type is most common, with vanadium and iron-only alternates in some microbes. The $P$-cluster ferries electrons while $FeMo$-co holds $N_{2}$ during hydrogenation.'
      },
      {
        term: 'Biological stoichiometry',
        kind: 'law',
        statement: 'A **fixed reaction spends sixteen energy currency units** `bio-fix` $N_{2}$ plus $8H$ plus plus $8e$ minus plus $16ATP$ gives $2NH_{3}$ plus $H_{2}$ plus $16ADP$.',
        detail: 'One hydrogen molecule always forms alongside ammonia, marking the mechanism. Legume root nodules house Rhizobium with leghemoglobin guarding oxygen supply to the enzyme.'
      },
      {
        term: 'Haber operating window',
        kind: 'method',
        statement: 'A **promoted iron bed balances rate against yield** `haber` $N_{2}$ plus $3H_{2}$ gives $2NH_{3}$ over $Fe$ near $450$ degree under high pressure.',
        detail: 'Oxides of potassium and aluminium promote the iron surface while sulfur and $CO$ poison it. High pressure pushes moles from four to two, but heat is kept moderate to hold usable conversion per pass with recycling.'
      },
      {
        term: 'Fixation downstream map',
        kind: 'insight',
        statement: 'An **ammonia hub feeds acids and fertilizers** `downstream` $NH_{3}$ oxidises to $HNO_{3}$ by the Ostwald route and builds urea plus ammonium salts.',
        detail: 'Nitric acid plus ammonia gives ammonium nitrate fertilizer, while $CO_{2}$ plus ammonia builds urea. Nitrifying soil microbes then walk ammonia toward nitrite and nitrate for plant uptake.'
      }
    ],
    figures: [
      {
        caption: '$N_{2}$ triple bond yields to $FeMo$-co at ambient cost of $16ATP$ or to promoted $Fe$ beds under heat and high pressure, both feeding $NH_{3}$ downstream.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Biological versus Haber nitrogen fixation" font-family="sans-serif"><rect x="40" y="90" width="200" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="140" y="120" text-anchor="middle" font-size="13" fill="currentColor">nitrogenase</text><text x="140" y="142" text-anchor="middle" font-size="12" fill="currentColor">FeMo-co centre</text><text x="140" y="162" text-anchor="middle" font-size="12" fill="currentColor">ambient, 16 ATP</text><text x="140" y="182" text-anchor="middle" font-size="12" fill="currentColor">plus H2 formed</text><rect x="280" y="90" width="160" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="120" text-anchor="middle" font-size="13" fill="currentColor">N2 hub</text><text x="360" y="142" text-anchor="middle" font-size="12" fill="currentColor">triple bond</text><text x="360" y="162" text-anchor="middle" font-size="12" fill="currentColor">945 kJ per mol</text><rect x="480" y="90" width="200" height="120" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="580" y="120" text-anchor="middle" font-size="13" fill="currentColor">Haber bed</text><text x="580" y="142" text-anchor="middle" font-size="12" fill="currentColor">Fe promoted</text><text x="580" y="162" text-anchor="middle" font-size="12" fill="currentColor">heat, high pressure</text><text x="580" y="182" text-anchor="middle" font-size="12" fill="currentColor">recycle unreacted</text><line x1="240" y1="150" x2="280" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="280,150 270,145 270,155" fill="currentColor"/><line x1="440" y1="150" x2="480" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="480,150 470,145 470,155" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">biology pays energy currency, industry pays pressure</text><text x="360" y="282" text-anchor="middle" font-size="12" fill="currentColor">ammonia feeds acid plus fertilizer plants</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Energy currency audit',
        problem: 'A nodule fixes $3$ molecules of $N_{2}$. Count energy currency units and ammonia formed.',
        steps: [
          { label: 'Step 1', text: 'Fix the unit reaction:\n```text\n1 N2 -> 2 NH3 + 1 H2 at 16 ATP\n3 N2 -> 6 NH3 + 3 H2 at 48 ATP\n```\nHydrogen co-formation is obligatory.' },
          { label: 'Step 2', text: 'Collect $6$ ammonia molecules for downstream use.' },
          { label: 'Step 3', text: 'Release $3$ hydrogen molecules as the mechanistic signature.' }
        ],
        result: 'Three turnovers spend $48ATP$ and give $6NH_{3}$ plus $3H_{2}$.'
      },
      {
        title: 'Haber lever prediction',
        problem: 'Predict the effect of raising pressure and lowering temperature on $N_{2}$ plus $3H_{2}$ equilibrium.',
        steps: [
          { label: 'Step 1', text: 'Count moles shrinking from four to two, so pressure pushes toward ammonia.' },
          { label: 'Step 2', text: 'Note the reaction is exothermic, so cooling favours yield but slows rate.' },
          { label: 'Step 3', text: 'Choose the compromise of moderate heat with high pressure plus recycling.' }
        ],
        result: 'High pressure plus moderate heat with recycle gives practical conversion.'
      }
    ],
    keyTakeaways: [
      '$N_{2}$ inertness comes from a $945$ kJ per mol triple bond.',
      'Nitrogenase $FeMo$-co spends $16ATP$ per $N_{2}$ with $H_{2}$ co-formed.',
      'Haber uses promoted $Fe$ with heat and high pressure plus recycle.',
      'Ammonia feeds Ostwald acid plus urea and ammonium fertilizers.'
    ],
    quiz: [
      {
        q: 'Nitrogenase FeMo-co reaction gives per N2:',
        options: ['2HNO3 with no energy cost', 'N2O plus water only', '2NH3 plus H2 with 16ATP spent', 'NO2 plus oxygen'],
        answer: 2,
        explanation: 'Step 1: Bind $N_{2}$ at $FeMo$-co. Step 2: Deliver electrons plus protons with $ATP$. Step 3: Release $2NH_{3}$ plus obligatory $H_{2}$.'
      },
      {
        q: 'Haber catalyst and compromise are:',
        options: ['Pt gauze at room pressure only', 'Promoted Fe with moderate heat and high pressure', 'Uncatalysed freezing mixture', 'Alumina with no recycle'],
        answer: 1,
        explanation: 'Step 1: Activate $N_{2}$ on promoted iron. Step 2: Pressurise to favour fewer moles. Step 3: Recycle unreacted gases per pass.'
      },
      {
        q: 'Leghemoglobin role in nodules is:',
        options: ['Fixing nitrogen directly to nitrate', 'Splitting water to oxygen', 'Pumping sodium out', 'Carrying oxygen at controlled low dose to nitrogenase'],
        answer: 3,
        explanation: 'Step 1: Note nitrogenase is oxygen sensitive. Step 2: Supply respiration with buffered oxygen. Step 3: Keep free oxygen low via leghemoglobin.'
      },
      // PYQ-pattern: JEE 2019 — Haber conditions versus nitrogenase contrast (rephrased)
      {
        q: 'Biological fixation differs from Haber mainly by:',
        options: ['Ambient enzyme route with ATP cost versus heat pressure bed', 'Identical iron bed in both', 'No hydrogen formed in biology', 'Haber working at room pressure'],
        answer: 0,
        explanation: 'Step 1: Run nitrogenase near ambient with $16ATP$. Step 2: Run Haber hot under pressure. Step 3: Contrast currency cost against forcing conditions.'
      }
    ]
  },
  // ---------------------------------------------------------------- 43.4
  {
    sectionId: 'chem-ch43-s4',
    readingTime: 10,
    intro: 'Genetic information is stored in a double helix whose pairing rules read like a code table. Two hydrogen bonds join one pair and three join the other, and the backbone runs antiparallel. From this architecture flow melting, copying and translation into proteins.',
    objectives: [
      'Pair bases by hydrogen bond count with Chargaff equality rules',
      'Read B helix parameters with antiparallel sugar phosphate backbone',
      'Outline replication, transcription and translation chemistry flow'
    ],
    concepts: [
      {
        term: 'Base pairing rules',
        kind: 'definition',
        statement: 'An **adenine thymine pair uses two bonds** `base-pair` $A=T$ double bond count while $G\\equiv C$ uses three hydrogen bonds.',
        detail: 'Chargaff equalities $A=T$ and $G=C$ follow directly in duplex DNA. RNA swaps uracil $U$ for thymine, pairing $A=U$ during transcription.'
      },
      {
        term: 'Backbone direction',
        kind: 'theorem',
        statement: 'A **sugar phosphate chain runs five prime to three prime** `backbone` $5^{\\prime}$ phosphate to $3^{\\prime}$ hydroxyl defines synthesis direction.',
        detail: 'Phosphodiester links join $3^{\\prime}$ of one deoxyribose to $5^{\\prime}$ of the next. The two strands wind antiparallel, so each $5^{\\prime}$ faces the partner $3^{\\prime}$ end.'
      },
      {
        term: 'B helix parameters',
        kind: 'law',
        statement: 'A **right-handed helix holds ten pairs per turn** `B-DNA` rise $3.4$ angstrom per pair with diameter near $20$ angstrom.',
        detail: 'Major and minor grooves expose base edges for protein readout without unwinding. A-form shortens and widens the helix while Z-form runs left-handed in alternating sequences.'
      },
      {
        term: 'Information flow',
        kind: 'method',
        statement: 'A **DNA template copies to RNA then protein** `central-flow` replication copies $DNA$ to $DNA$, transcription writes $mRNA$, translation builds peptide.',
        detail: 'Polymerases read $3^{\\prime}$ to $5^{\\prime}$ and build $5^{\\prime}$ to $3^{\\prime}$ with triphosphate hydrolysis driving each step. Ribosomes pair $mRNA$ codons with $tRNA$ anticodons for amino acid order.'
      },
      {
        term: 'Melting and Tm readout',
        kind: 'insight',
        statement: 'A **duplex melts cooperatively at Tm** `melting` heating breaks stacking plus hydrogen bonds and raises $260$ nm absorbance.',
        detail: 'GC-rich stretches melt hotter since three bonds plus stronger stacking resist opening. Salt shields phosphate repulsion and raises melting point while urea and formamide lower it.'
      }
    ],
    figures: [
      {
        caption: '$A=T$ double and $G\\equiv C$ triple bonds zip antiparallel $5^{\\prime}$ to $3^{\\prime}$ strands into a $B$ helix of ten pairs per turn.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DNA ladder with base pairs and helix parameters" font-family="sans-serif"><line x1="200" y1="70" x2="200" y2="270" stroke="currentColor" stroke-width="3"/><line x1="330" y1="70" x2="330" y2="270" stroke="currentColor" stroke-width="3"/><line x1="200" y1="110" x2="330" y2="110" stroke="currentColor" stroke-width="2"/><line x1="200" y1="160" x2="330" y2="160" stroke="currentColor" stroke-width="2"/><line x1="200" y1="210" x2="330" y2="210" stroke="currentColor" stroke-width="2"/><text x="265" y="102" text-anchor="middle" font-size="12" fill="currentColor">A double T</text><text x="265" y="152" text-anchor="middle" font-size="12" fill="currentColor">G triple C</text><text x="265" y="202" text-anchor="middle" font-size="12" fill="currentColor">C triple G</text><rect x="400" y="90" width="270" height="130" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="535" y="120" text-anchor="middle" font-size="13" fill="currentColor">B helix readout</text><text x="535" y="142" text-anchor="middle" font-size="12" fill="currentColor">10 pairs per turn</text><text x="535" y="162" text-anchor="middle" font-size="12" fill="currentColor">rise 3.4 A, wide 20 A</text><text x="535" y="182" text-anchor="middle" font-size="12" fill="currentColor">antiparallel strands</text><text x="265" y="300" text-anchor="middle" font-size="12" fill="currentColor">two bonds versus three set the melting order</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Chargaff arithmetic',
        problem: 'A duplex sample has $22$ percent guanine. Find the other base percentages.',
        steps: [
          { label: 'Step 1', text: 'Pair up:\n```text\nG = C = 22 percent -> GC total 44 percent\nAT total = 100 - 44 = 56 percent\nA = T = 28 percent each\n```\nEqualities split each pair evenly.' },
          { label: 'Step 2', text: 'Assign cytosine $22$ percent by $G=C$.' },
          { label: 'Step 3', text: 'Split the remainder into adenine $28$ percent and thymine $28$ percent.' }
        ],
        result: 'Composition is $A$ $28$, $T$ $28$, $G$ $22$ and $C$ $22$ percent.'
      },
      {
        title: 'Strand direction writing',
        problem: 'Write the complement of $5^{\\prime}$-$ATGCCG$-$3^{\\prime}$ with correct ends.',
        steps: [
          { label: 'Step 1', text: 'Match $A$ with $T$ and $G$ with $C$ position by position.' },
          { label: 'Step 2', text: 'Reverse direction so $5^{\\prime}$ faces partner $3^{\\prime}$.' },
          { label: 'Step 3', text: 'Deliver $3^{\\prime}$-$TACGGC$-$5^{\\prime}$, equivalently $5^{\\prime}$-$CGGCAT$-$3^{\\prime}$.' }
        ],
        result: 'Antiparallel complement is $3^{\\prime}$-$TACGGC$-$5^{\\prime}$.'
      }
    ],
    keyTakeaways: [
      '$A=T$ uses two bonds; $G\\equiv C$ uses three with $A=T$, $G=C$ equality.',
      'Backbone runs $5^{\\prime}$ to $3^{\\prime}$ with antiparallel strands.',
      'B helix holds ten pairs per turn with $3.4$ angstrom rise.',
      'Replication to transcription to translation copies the same pairing code.'
    ],
    quiz: [
      {
        q: 'Correct pairing bond counts are:',
        options: ['A triple C and G double T', 'A double T and G triple C', 'A single G and T single C', 'All pairs use four bonds'],
        answer: 1,
        explanation: 'Step 1: Join $A$ with $T$ by two bonds. Step 2: Join $G$ with $C$ by three bonds. Step 3: Derive $A=T$ and $G=C$ counts.'
      },
      {
        q: 'DNA strands are described as antiparallel because:',
        options: ['Both run 5 prime to 3 prime same way', 'One runs 5 prime to 3 prime against the other', 'Both are left-handed always', 'No backbone direction exists'],
        answer: 1,
        explanation: 'Step 1: Mark $5^{\\prime}$ phosphate and $3^{\\prime}$ hydroxyl ends. Step 2: Face $5^{\\prime}$ against partner $3^{\\prime}$. Step 3: Name the duplex antiparallel.'
      },
      {
        q: 'Higher GC content raises melting point since:',
        options: ['Three bonds plus stacking resist opening', 'GC pairs repel more strongly', 'Backbone shortens to zero', 'Sugar rings open on heating'],
        answer: 0,
        explanation: 'Step 1: Count three bonds in $G\\equiv C$. Step 2: Add stronger stacking of GC steps. Step 3: Demand more heat to reach $Tm$.'
      },
      {
        q: 'Transcription product and template direction are:',
        options: ['mRNA built 5 prime to 3 prime from DNA template', 'Protein built directly from DNA', 'DNA built from ribosome alone', 'tRNA copied from protein'],
        answer: 0,
        explanation: 'Step 1: Read template $3^{\\prime}$ to $5^{\\prime}$. Step 2: Polymerise $mRNA$ $5^{\\prime}$ to $3^{\\prime}$. Step 3: Pair $A=U$ in the transcript.'
      }
    ]
  }
]
