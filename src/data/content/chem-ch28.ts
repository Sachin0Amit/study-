import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 28: Substitution and Elimination Masterclass (Solomons foci 6, 7)
// Sections 28.1 - 28.4. Second-opinion problem workshops complementing theory.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh28Content: SectionContent[] = [
  // ---------------------------------------------------------------- 28.1
  {
    sectionId: 'chem-ch28-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Substitution coordinates from ion pairs to solvent shells',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Rate laws that fingerprint concerted versus stepwise paths',
            body: 'The **mechanism theorem** states that bimolecular substitution follows second order kinetics with inversion while unimolecular substitution follows first order kinetics with racemization plus rearrangement risk. Tertiary substrates ionize readily because the cation stabilizes, while primary substrates need strong backside attack because ionization is too costly. Leaving group order iodide over bromide over chloride over fluoride tracks conjugate acid strength, and the solvent choice amplifies the split rather than creating it.'
          },
          {
            kind: 'derivation',
            heading: 'Winstein ion pairs and the More O Ferrall surface',
            body: 'Refine the cartoon cation into contact and solvent separated ion pairs whose return versus capture decides racemization extent and special salt effects. The More O Ferrall Jencks surface places transition states along bond making and breaking axes, predicting how stronger nucleophiles or better leaving groups slide the saddle toward earlier or later character. Hammond reasoning then links exothermic capture to reactant like states, explaining why stable cations react indiscriminately while high energy primary cations select sharply.'
          },
          {
            kind: 'application',
            heading: 'Solvent matching that wins timed problems',
            body: 'Choose polar protic media to shelter ions and assist unimolecular ionization, and polar aprotic media to free nucleophiles for bimolecular attack by leaving cations poorly solvated. Substrate ladders confirm the call: tertiary halides accelerate in protic mixtures while primary halides surge in aprotic dipolar solvents. Process chemists exploit the same map at scale, switching solvents to suppress elimination without redesigning the substrate.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Solomons ranks substitution by substrate structure plus nucleophile strength plus leaving group stability plus solvent choice in one decision map. Tertiary halides ionise readily while primary halides need strong backside attack, and polar protic media shelter ions while polar aprotic media free nucleophiles. This workshop drills solvent plus substrate matching with carbocation ladders and rate ordering.',
    objectives: [
      'Rank $3$ degree over $2$ degree over $1$ degree for ionisation and reverse the order for backside attack',
      'Choose polar protic for $S_{N}1$ ionisation and polar aprotic for $S_{N}2$ acceleration',
      'Order leaving groups by conjugate acid strength with $I$ over $Br$ over $Cl$ over $F$'
    ],
    concepts: [
      {
        term: 'Substrate ionisation ladder',
        kind: 'law',
        statement: 'A **tertiary carbocation forms fastest by hyperconjugation plus induction** `substrate` $3$ degree faster than $2$ degree faster than $1$ degree for $S_{N}1$ with $rate = k[RX]$.',
        detail: 'Solomons places allyl plus benzyl near tertiary by resonance, so $PhCH_{2}Cl$ solvolyses fast despite primary carbon. Methyl plus primary halides lack cation stability and wait for $S_{N}2$ collision instead.'
      },
      {
        term: 'Backside attack ordering',
        kind: 'theorem',
        statement: 'A **primary carbon suffers backside attack fastest by low crowding** `steric` $1$ degree faster than $2$ degree faster than $3$ degree for $S_{N}2$ with $rate = k[RX][Nu]$.',
        detail: 'Neopentyl $CH_{3}$ triple blocked carbon reacts near zero by $S_{N}2$ despite primary label, proving steric bulk overrules degree counting. Methyl $CH_{3}X$ stays fastest with open approachGeometry.'
      },
      {
        term: 'Solvent polarity map',
        kind: 'definition',
        statement: 'A **polar protic solvent shelters ions while polar aprotic frees nucleophiles** `solvent` $H_{2}O$ plus $ROH$ favour $S_{N}1$ while $DMSO$ plus $DMF$ plus $acetone$ favour $S_{N}2$.',
        detail: 'Protic $O$-$H$ donates hydrogen bonds to leaving $X$ and to carbocation, lowering ionisation barrier. Aprotic dipoles solvate cations only, leaving anions bare and strongly nucleophilic for $S_{N}2$.'
      },
      {
        term: 'Leaving group stability rule',
        kind: 'method',
        statement: 'A **weak base leaves fastest as stable anion** `leaving-group` $I$ over $Br$ over $Cl$ over $F$ tracking $HI$ over $HBr$ over $HCl$ over $HF$ acid strength with $tosylate$ near $I$.',
        detail: 'Solomons converts poor $OH$ into $H_{2}O^{+}$ by protonation or into $OTs$ by tosylation before substitution. Carbonate $CO_{3}$ style poor leavers stay bound unless activated.'
      },
      {
        term: 'Nucleophilicity versus basicity split',
        kind: 'insight',
        statement: 'A **large polarisable donor wins in protic media despite lower basicity** `nucleophile` $I$ over $Br$ over $Cl$ over $F$ in $H_{2}O$ reversing to $F$ over $Cl$ over $Br$ over $I$ in $DMSO$.',
        detail: 'Small $F$ stays caged by hydrogen bonds in water while large $I$ sheds solvent readily. In aprotic $DMSO$ bare charge density rules, so compact $F$ attacks fastest.'
      }
    ],
    figures: [
      {
        caption: 'Substrate $3$ degree to $1$ degree ionisation ladder reversed for $S_{N}2$ attack, with protic favouring $S_{N}1$ and aprotic freeing $Nu$ for $S_{N}2$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solvent and substrate map for SN1 versus SN2 choice"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">tert ionises fast</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">prim attacks fast</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">protic shelters ions</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">SN1 in water ROH</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">carbocation lives</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">aprotic frees Nu</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">SN2 in DMSO DMF</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">I over Br over Cl over F leaves best</text></svg>`,
        afterConcept: 2
      }
    ],
    derivations: [
      {
        title: 'SN1 First Order Rate Law from Slow Ionisation',
        statement: 'Derivation of $rate = k[RX]$ for $RX \\to R^+ + X^-$ followed by $R^+ + Nu^- \\to RNu$ with slow ionisation',
        prerequisites: [
          'Two step mechanism with slow ionisation and fast capture',
          'Rate determining step controls the observed law',
          'Steady state for reactive carbocation $R^+$'
        ],
        steps: [
          {
            label: 'Step 1: Write the stepwise mechanism',
            formula: '$$RX \\to R^+ + X^- \\quad R^+ + Nu^- \\to RNu$$',
            explanation: 'Tertiary halides first heterolyze to a planar cation and halide, then the nucleophile bonds rapidly to the cation. Splitting the change into ionisation plus capture reflects the observed intermediate behavior. This division is needed because a single collision cannot explain first order kinetics.'
          },
          {
            label: 'Step 2: Identify ionisation as the slow bottleneck',
            formula: '$$rate = k_{1}[RX]$$',
            explanation: 'Breaking the carbon halogen bond without assistance costs the most energy, so it gates the overall flux. The rate of this elementary heterolysis is proportional to the halide concentration alone with constant $k_{1}$. Later fast events cannot speed a flow already limited upstream.'
          },
          {
            label: 'Step 3: Show the nucleophile drops out of the law',
            formula: '$$rate \\neq k[RX][Nu^-] \\quad rate = k_{1}[RX]$$',
            explanation: 'Because capture follows the bottleneck, changing nucleophile concentration alters product identity but not the number of cations born per time. The steady concentration of $R^+$ adjusts to consume whatever nucleophile is present. Absence of $Nu^-$ from the law is therefore the fingerprint of stepwise ionisation.'
          },
          {
            label: 'Step 4: Link structure and medium to the barrier',
            formula: '$$R_{3}CBr > R_{2}CHBr > RCH_{2}Br \\quad k_{polar} > k_{nonpolar}$$',
            explanation: 'More substituted cations stabilize the heterolysis transition state through hyperconjugation and induction, so tertiary substrates ionize fastest. Polar protic solvation shelters both $R^+$ and $X^-$ and lowers the same barrier. Planar $R^+$ also explains racemisation and rearrangement, which confirm the mechanism beyond kinetics.'
          }
        ],
        result: 'Unimolecular $rate = k_{1}[RX]$ independent of $Nu^-$, accelerated by tertiary substitution, good leaving $X^-$ and polar protic medium.'
      }
    ],
    examples: [
      {
        title: 'Solvent choice for tertiary versus primary bromide',
        problem: 'Tertiary $C_{4}H_{9}Br$ solvolyses in $H_{2}O$ while primary $C_{2}H_{5}Br$ needs $I$ in $DMSO$ for fast exchange. Justify each solvent plus substrate pair.',
        steps: [
          { label: 'Step 1', text: 'Map substrate to mechanism:\n```text\ntert RBr -> ionise -> SN1 -> protic water\nprim RBr -> collide -> SN2 -> aprotic DMSO\nleaving I over Br over Cl guides rate\n```\nSolomons ladder pairs $3$ degree with ionisation and $1$ degree with collision.' },
          { label: 'Step 2', text: 'Place tertiary $C_{4}H_{9}Br$ in $H_{2}O$ where hydrogen bonds stabilise $Br$ departure and $C^{+}$ intermediate.' },
          { label: 'Step 3', text: 'Place primary $C_{2}H_{5}Br$ with $I$ in $DMSO$ where bare nucleophile attacks open carbon without protic cage.' }
        ],
        result: 'Tertiary bromide by $S_{N}1$ in protic water and primary bromide by $S_{N}2$ in aprotic DMSO.'
      },
      {
        title: 'Leaving group upgrade for alcohol substrate',
        problem: 'Ethanol $CH_{3}CH_{2}OH$ resists $Br$ displacement while ethyl tosylate $CH_{3}CH_{2}OTs$ reacts fast with $Br$. Explain the leaving group gap.',
        steps: [
          { label: 'Step 1', text: 'Rank conjugate acids: $HOTs$ strong acid gives stable $OTs$ leaver while $H_{2}O$ weaker acid gives poorer $OH$ leaver.' },
          { label: 'Step 2', text: 'Convert $OH$ to $OTs$ with $TsCl$ plus base, or to $H_{2}O^{+}$ with strong acid, before $Br$ attack.' },
          { label: 'Step 3', text: 'Run $S_{N}2$ on $CH_{3}CH_{2}OTs$ with $Br$ in $acetone$ for clean inversion to $CH_{3}CH_{2}Br$.' }
        ],
        result: 'Tosylate leaves near $I$ while $OH$ stays bound, so activation precedes substitution.'
      }
    ],
    keyTakeaways: [
      '$3$ degree ionises fastest for $S_{N}1$ while $1$ degree attacks fastest for $S_{N}2$.',
      'Polar protic $H_{2}O$ plus $ROH$ favour $S_{N}1$ and polar aprotic $DMSO$ plus $DMF$ favour $S_{N}2$.',
      'Leaving power runs $I$ over $Br$ over $Cl$ over $F$ with $OTs$ near $I$.',
      '$I$ wins in water by polarisability while $F$ wins in $DMSO$ by bare charge density.'
    ],
    quiz: [
      {
        q: 'Fastest $S_{N}1$ substrate is:',
        options: ['Methyl $CH_{3}X$', 'Primary $1$ degree $RX$', 'Tertiary $3$ degree $RX$', 'Neopentyl blocked $RX$'],
        answer: 2,
        explanation: 'Step 1: Rank cation stability by substitution plus resonance. Step 2: Place $3$ degree above $2$ degree above $1$ degree. Step 3: Select tertiary halide for ionisation.'
      },
      // PYQ-pattern: solvent choice for SN1 versus SN2 drill
      {
        q: 'Best solvent for $S_{N}2$ with $I$ is:',
        options: ['$H_{2}O$ protic cage', '$CH_{3}OH$ protic cage', '$DMSO$ aprotic free anion', 'No solvent at all'],
        answer: 2,
        explanation: 'Step 1: Need bare nucleophile for collision. Step 2: Avoid protic hydrogen bonding to $I$. Step 3: Choose $DMSO$ aprotic medium.'
      },
      {
        q: 'Best leaving group among halides is:',
        options: ['$F$ from weak acid $HF$', '$Cl$ mid rank', '$Br$ second best', '$I$ from strong acid $HI$'],
        answer: 3,
        explanation: 'Step 1: Link leaving power to conjugate acid strength. Step 2: Order $HI$ over $HBr$ over $HCl$ over $HF$. Step 3: Select $I$ as fastest leaver.'
      },
      {
        q: 'Neopentyl halide resists $S_{N}2$ since:',
        options: ['Tertiary cation too stable', 'Beta methyls block backside path', 'Leaving group too good', 'Solvent too aprotic'],
        answer: 1,
        explanation: 'Step 1: Draw $C(CH_{3})_{3}CH_{2}X$ beta crowding. Step 2: Block $180$ degree backside approach. Step 3: Assign steric shutdown despite primary label.'
      }
    ]
  },
  // ---------------------------------------------------------------- 28.2
  {
    sectionId: 'chem-ch28-s2',
    readingTime: 10,
    intro: 'Solomons elimination turns on C minus H plus C minus X geometry with base strength plus crowding plus temperature as control knobs. Anti periplanar $H$ plus $X$ at $180$ degree dihedral gives the $E2$ transition state while staggered conformers decide Saytzeff versus Hofmann outcome. This section drills Newman projections plus bulky base maps plus deuterium stereospecificity.',
    objectives: [
      'Draw anti periplanar $H$ plus $X$ at $180$ degree for $E2$ with Newman bone logic',
      'Choose Saytzeff with small base versus Hofmann with bulky $tBuOK$ by beta $H$ access',
      'Read $E2$ stereospecificity from labelled $H$ versus $D$ alkene geometry'
    ],
    concepts: [
      {
        term: 'Anti periplanar E2 geometry',
        kind: 'definition',
        statement: 'An **E2 transition state needs H plus X anti at 180 degree** `anti-periplanar` with $C$-$H$ plus $C$-$X$ aligned anti so $sigma$ donates into $sigma^{\\ast}$ during $C=C$ formation.',
        detail: 'Solomons Newman views show only staggered anti conformers eliminate fast, while gauche $H$ plus $X$ wait for bond rotation. Cyclohexane needs trans diaxial $H$ plus $X$ for the same orbital overlap reason.'
      },
      {
        term: 'Saytzeff versus Hofmann control',
        kind: 'theorem',
        statement: 'A **small base removes hindered H to the stable alkene** `Saytzeff` $EtO$ gives more substituted $C=C$ while **bulky base removes open H** `Hofmann` $tBuOK$ gives less substituted $C=C$.',
        detail: '2-bromobutane $CH_{3}CHBrCH_{2}CH_{3}$ gives $2$-butene major with $EtO$ but $1$-butene major with $tBuOK$. Crowded beta $H$ stays hidden from bulky $O$-$tBu$ base.'
      },
      {
        term: 'E1 versus E2 decision',
        kind: 'law',
        statement: 'A **strong base plus poor ioniser drives concerted E2** `E2` $rate = k[RX][B]$ while **weak base plus stable cation drives stepwise E1** `E1` $rate = k[RX]$ with $C^{+}$ intermediate.',
        detail: 'Tertiary $R_{3}CX$ with $H_{2}O$ alone loses $X$ first to $C^{+}$ then $H^{+}$, giving Saytzeff mixture without stereospecificity. Primary $RCH_{2}X$ with $OH$ needs simultaneous $H$ plus $X$ removal.'
      },
      {
        term: 'Dehydration regiochemistry',
        kind: 'method',
        statement: 'An **acid catalysed dehydration follows cation stability** `dehydration` $ROH$ plus $H^{+}$ to $H_{2}O^{+}$ loss giving $C^{+}$ then $H^{+}$ loss to the more substituted $C=C$.',
        detail: 'Solomons 2-butanol $CH_{3}CH(OH)CH_{2}CH_{3}$ with acid gives $2$-butene major by Saytzeff logic. Hydride or methyl shifts intervene when a more stable $C^{+}$ sits nearby.'
      },
      {
        term: 'Stereospecific deuterium proof',
        kind: 'insight',
        statement: 'A **labelled anti H reacts while gauche D waits** `stereospecific` $k_{H}$ over $k_{D}$ near $7$ with anti $H$ giving one alkene geometry and anti $D$ giving the opposite.',
        detail: 'Erythro plus threo $CHD$-$CHDX$ diastereomers give opposite $E$ plus $Z$ ratios under $E2$ conditions, proving concerted anti removal. $E1$ loses memory and gives the same mixture from both labels.'
      }
    ],
    figures: [
      {
        caption: 'Anti $H$ plus $X$ at $180$ degree drives $E2$; small $EtO$ gives Saytzeff $C=C$ while bulky $tBuOK$ gives Hofmann $C=C$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="E2 anti periplanar geometry with Saytzeff versus Hofmann control"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">H anti X at 180 deg</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">Newman staggered only</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">EtO to Saytzeff</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">stable tri substituted</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">hindered H removed</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">tBuOK to Hofmann</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">open H removed</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">diaxial in rings, D labels prove anti</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Saytzeff versus Hofmann on bromobutane',
        problem: '2-bromobutane $CH_{3}CHBrCH_{2}CH_{3}$ with $EtO$ gives $2$-butene major while with $tBuOK$ gives $1$-butene major. Draw the beta $H$ choice.',
        steps: [
          { label: 'Step 1', text: 'Count beta H sets:\n```text\nC1 methyl = 3 open H -> 1-butene\nC3 methylene = 2 hidden H -> 2-butene\nsmall base reaches hidden, bulky only open\n```\nAnti $H$ plus $Br$ at $180$ degree required for each path.' },
          { label: 'Step 2', text: 'Small $EtO$ removes hindered $C_{3}$ $H$ to the more substituted $2$-butene $CH_{3}CH=CHCH_{3}$ by Saytzeff stability.' },
          { label: 'Step 3', text: 'Bulky $tBuOK$ removes open $C_{1}$ $H$ to terminal $1$-butene $CH_{2}=CHCH_{2}CH_{3}$ by Hofmann access.' }
        ],
        result: '$EtO$ Saytzeff $2$-butene major and $tBuOK$ Hofmann $1$-butene major.'
      },
      {
        title: 'Menthyl chloride diaxial requirement',
        problem: 'Neomenthyl chloride with $H$ plus $Cl$ trans diaxial eliminates fast while menthyl epimer with diequatorial $H$ plus $Cl$ reacts slowly. Explain with chair logic.',
        steps: [
          { label: 'Step 1', text: 'Flip chairs to place $C$-$H$ plus $C$-$Cl$ anti diaxial at $180$ degree dihedral for overlap.' },
          { label: 'Step 2', text: 'Neomenthyl isomer reaches diaxial readily and gives the Saytzeff alkene fast by $E2$.' },
          { label: 'Step 3', text: 'Menthyl isomer needs high energy flip to diaxial, so $E2$ stalls and $E1$ mixture competes.' }
        ],
        result: 'Diaxial anti geometry controls ring $E2$ rate and alkene choice.'
      }
    ],
    keyTakeaways: [
      '$E2$ needs $H$ plus $X$ anti at $180$ degree with staggered Newman alignment.',
      'Small $EtO$ gives Saytzeff stable $C=C$ while bulky $tBuOK$ gives Hofmann open $C=C$.',
      '$E2$ rate equals $k[RX][B]$ concerted while $E1$ rate equals $k[RX]$ stepwise.',
      'Anti $H$ versus $D$ labels give opposite $E$ plus $Z$ under $E2$ but same mix under $E1$.'
    ],
    quiz: [
      {
        q: 'Fast $E2$ geometry needs:',
        options: ['Gauche $H$ plus $X$ at $60$ degree', 'Anti $H$ plus $X$ at $180$ degree', 'Syn $H$ plus $X$ at $0$ degree always', 'No alignment rule'],
        answer: 1,
        explanation: 'Step 1: Align $C$-$H$ $sigma$ with $C$-$X$ $sigma^{\\ast}$. Step 2: Require $180$ degree dihedral for overlap. Step 3: Select anti periplanar conformer.'
      },
      // PYQ-pattern: Hofmann versus Saytzeff base choice drill
      {
        q: 'Bulky $tBuOK$ on 2-bromobutane gives:',
        options: ['No elimination', 'More substituted $2$-butene major', 'Less substituted $1$-butene major', 'Alkyne only'],
        answer: 2,
        explanation: 'Step 1: Block hindered beta $H$ from bulky base. Step 2: Remove open $C_{1}$ $H$ instead. Step 3: Form Hofmann $1$-butene major.'
      },
      {
        q: '$E1$ rate law is:',
        options: ['$rate = k[RX]$ via $C^{+}$', '$rate = k[RX][B]$ concerted', '$rate = k[B]$ only', 'Zero order in $RX$ always'],
        answer: 0,
        explanation: 'Step 1: Ionise $RX$ to $C^{+}$ slowly. Step 2: Lose $H^{+}$ fast after. Step 3: Assign first order $k[RX]$ stepwise.'
      },
      {
        q: 'Deuterium stereospecificity proves $E2$ when:',
        options: ['Both diastereomers give same mix', 'Label has no effect', 'Erythro plus threo give opposite $E$ plus $Z$', 'Only $E1$ occurs'],
        answer: 2,
        explanation: 'Step 1: Label anti $H$ versus anti $D$. Step 2: Observe opposite alkene geometry ratios. Step 3: Assign concerted anti removal.'
      }
    ]
  },
  // ---------------------------------------------------------------- 28.3
  {
    sectionId: 'chem-ch28-s3',
    readingTime: 8,
    intro: 'Solomons section on substitution versus elimination choice turns four levers into predictions: substrate branching plus base strength plus temperature plus solvent polarity. Strong bulky bases at high $T$ push alkenes while weak nucleophiles at low $T$ keep substitution. This workshop runs competition experiments with product ratio reading.',
    objectives: [
      'Predict substitution versus elimination from branching plus base plus $T$ plus solvent',
      'Use temperature rise to favour elimination by entropy of two products',
      'Read product ratios to assign $S_{N}1$ plus $E1$ versus $S_{N}2$ plus $E2$ regimes'
    ],
    concepts: [
      {
        term: 'Branching lever',
        kind: 'definition',
        statement: 'A **branched halide favours elimination by stable alkene plus cation** `branching` $3$ degree gives $E2$ plus $E1$ readily while $1$ degree stays $S_{N}2$ unless bulky base forces $E2$.',
        detail: 'Tertiary $C_{4}H_{9}Br$ with $EtO$ gives mainly $C_{4}H_{8}$ alkene, while ethyl $C_{2}H_{5}Br$ with $I$ gives mainly $C_{2}H_{5}I$ substitution. Secondary $RX$ sits at the crossover and responds to other levers.'
      },
      {
        term: 'Base strength and bulk lever',
        kind: 'theorem',
        statement: 'A **strong bulky base pulls H while weak nucleophile attacks C** `base-lever` $tBuOK$ drives $E2$ and $I$ plus $Br$ drive $S_{N}2$ with $OH$ plus $EtO$ in between.',
        detail: 'Hindered $O$-$tBu$ cannot reach crowded carbon but reaches open beta $H$ readily. Small strong $EtO$ does both, so branching plus temperature tip the balance.'
      },
      {
        term: 'Temperature entropy lever',
        kind: 'law',
        statement: 'A **higher temperature favours elimination by product count** `temperature` $1$ $RX$ to $2$ products gains $\\Delta S$ positive so $\\Delta G = \\Delta H - T\\Delta S$ turns more negative at high $T$.',
        detail: 'Solomons heating of alkyl halides with base shifts $S_{N}$ plus $E$ mixtures toward $E$ as $T$ rises. Cold $H_{2}O$ solvolysis keeps substitution while hot $EtOH$ with base pushes alkenes.'
      },
      {
        term: 'Solvent polarity lever',
        kind: 'method',
        statement: 'A **polar protic medium stabilises ions for S plus E1 mix** `solvent-lever` $H_{2}O$ plus $EtOH$ support $C^{+}$ routes while **aprotic acetone supports S plus E2 choice** `aprotic` by bare anion reactivity.',
        detail: 'Aqueous $EtOH$ without strong base gives $S_{N}1$ ether plus alcohol plus $E1$ alkene together. Acetone with $I$ gives clean $S_{N}2$ while acetone with $tBuOK$ gives clean $E2$.'
      },
      {
        term: 'Product ratio fingerprint',
        kind: 'insight',
        statement: 'A **product ratio reports the operating regime** `ratio` alkene heavy means $E$ dominance and substitution heavy means $S_{N}$ dominance with $E$ plus $Z$ plus Saytzeff detail refining $E2$ versus $E1$.',
        detail: 'Single stereospecific alkene points to $E2$ while scrambled Saytzeff mix points to $E1$. Inversion only substitution points to $S_{N}2$ while racemic mixture points to $S_{N}1$.'
      }
    ],
    figures: [
      {
        caption: 'Four levers $branching$ plus $base$ plus $T$ plus $solvent$ steer $S_{N}$ versus $E$ with ratio fingerprints for $E2$ versus $E1$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Substitution versus elimination competition levers and fingerprints"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">branch plus base</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">tert plus bulky to E</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">hot favours E</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">entropy of 2 products</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">cold keeps SN</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">ratio reports path</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">stereo proves E2</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">protic to ion mix, aprotic to choice</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Tertiary bromide product split',
        problem: 'Tertiary $C_{4}H_{9}Br$ with $EtO$ at low $T$ gives substitution plus elimination mix, but at high $T$ gives alkene heavy mix. Explain the shift.',
        steps: [
          { label: 'Step 1', text: 'List paths:\n```text\nSN1: RBr -> C+ -> R-OEt ether\nE1+E2: RBr -> alkene C4H8 + HBr\nheat favours 2-product E by entropy\n```\nBranching plus $EtO$ sits near the crossover at low $T$.' },
          { label: 'Step 2', text: 'Raise $T$ so $T\\Delta S$ term for $1$ to $2$ products lowers $\\Delta G$ of elimination more than substitution.' },
          { label: 'Step 3', text: 'Read alkene heavy ratio as $E$ dominance with Saytzeff $C_{4}H_{8}$ isomer detail.' }
        ],
        result: 'Heat shifts tertiary $RX$ from mixed $S_{N}$ plus $E$ to alkene heavy $E$.'
      },
      {
        title: 'Primary iodide clean substitution',
        problem: 'Ethyl bromide $C_{2}H_{5}Br$ with $I$ in $acetone$ at low $T$ gives $C_{2}H_{5}I$ with no alkene. Show why elimination stays off.',
        steps: [
          { label: 'Step 1', text: 'Primary carbon favours $S_{N}2$ collision while weak base $I$ poorly removes $H$.' },
          { label: 'Step 2', text: 'Low $T$ suppresses entropy driven $E$ path, and aprotic $acetone$ keeps $I$ nucleophilic.' },
          { label: 'Step 3', text: 'Confirm by inversion only product with no $C_{2}H_{4}$ alkene, the $S_{N}2$ fingerprint.' }
        ],
        result: 'Primary $RX$ plus weak nucleophile plus cold aprotic gives clean $S_{N}2$.'
      }
    ],
    keyTakeaways: [
      'Branching to $3$ degree plus bulky base plus heat plus protic ion support push $E$.',
      'Primary $RX$ plus weak $Nu$ plus cold aprotic keep clean $S_{N}2$.',
      'High $T$ favours $E$ by $\\Delta S$ positive for $1$ to $2$ products.',
      'Stereospecific alkene means $E2$ while scrambled mix means $E1$ plus racemic $S_{N}1$.'
    ],
    quiz: [
      {
        q: 'Heating $S_{N}$ plus $E$ mix shifts toward:',
        options: ['More substitution always', 'More elimination by $T\\Delta S$', 'No change with $T$', 'Only rearrangement'],
        answer: 1,
        explanation: 'Step 1: Count $1$ reactant to $2$ elimination products. Step 2: Assign $\\Delta S$ positive for $E$. Step 3: Lower $\\Delta G$ of $E$ at high $T$.'
      },
      // PYQ-pattern: substitution versus elimination lever drill
      {
        q: 'Tertiary $RX$ with $tBuOK$ hot gives mainly:',
        options: ['$S_{N}2$ inversion product', '$S_{N}1$ racemic ether', 'No reaction', 'Alkene by $E2$ plus $E1$'],
        answer: 3,
        explanation: 'Step 1: Combine branched substrate with bulky base. Step 2: Add heat favouring $E$. Step 3: Assign alkene heavy $E$ outcome.'
      },
      {
        q: 'Clean $S_{N}2$ fingerprint is:',
        options: ['Inversion only with no alkene', 'Scrambled alkenes', 'Racemic substitution plus alkenes', 'Rearranged $C^{+}$ mix'],
        answer: 0,
        explanation: 'Step 1: Attack carbon from backside only. Step 2: Invert stereocentre without cation. Step 3: Exclude alkene to confirm no $E$.'
      },
      {
        q: 'Protic $H_{2}O$ without strong base gives:',
        options: ['Only $E2$', 'Only $S_{N}2$', '$S_{N}1$ plus $E1$ mix via $C^{+}$', 'No ionisation'],
        answer: 2,
        explanation: 'Step 1: Solvate ions with protic medium. Step 2: Ionise to $C^{+}$ without strong base. Step 3: Split to substitution plus elimination mix.'
      }
    ]
  },
  // ---------------------------------------------------------------- 28.4
  {
    sectionId: 'chem-ch28-s4',
    readingTime: 9,
    intro: 'Solomons kinetics plus energy diagrams turn rate ratios into mechanism proof with Hammond postulate plus isotope effects as readers. Relative $S_{N}1$ rates span orders of magnitude with branching while $S_{N}2$ rates collapse with crowding. This section drills table reading plus transition state placement plus $k_{H}$ over $k_{D}$ evidence.',
    objectives: [
      'Rank relative $S_{N}1$ versus $S_{N}2$ rates from branching and crowding tables',
      'Place transition states with Hammond postulate for exothermic versus endothermic steps',
      'Use $k_{H}$ over $k_{D}$ near $7$ to flag $C$-$H$ breaking in the rate step'
    ],
    concepts: [
      {
        term: 'Relative rate table logic',
        kind: 'definition',
        statement: 'A **rate ratio table separates ionisation from collision** `rate-ratio` $S_{N}1$ spans $10^{8}$ from $1$ degree to $3$ degree while $S_{N}2$ drops $10^{3}$ with beta branching.',
        detail: 'Solomons $RBr$ solvolysis accelerates hugely with methyl substitution, proving cation character. $S_{N}2$ exchange with $I$ slows hugely with neopentyl crowding, proving backside sensitivity.'
      },
      {
        term: 'Free energy diagram reading',
        kind: 'method',
        statement: 'A ** reaction coordinate shows barriers plus intermediates** `energy-diagram` $S_{N}1$ has two humps with $C^{+}$ valley while $S_{N}2$ has one hump with pentacoordinate peak.',
        detail: 'Higher first hump means ionisation rate limiting for $S_{N}1$. Higher single hump means collision rate limiting for $S_{N}2$, with $\\Delta G^{\\ddagger}$ setting $k$ by exponential link.'
      },
      {
        term: 'Hammond postulate placement',
        kind: 'theorem',
        statement: 'A **transition state resembles the nearer stable side** `Hammond` exothermic step gives early reactant like barrier while endothermic step gives late product like barrier with $\\Delta G$ marking the peak.',
        detail: 'Exothermic $C^{+}$ capture has early transition state with little cation character, so substituents matter less. Endothermic ionisation has late transition state with full cation character, so branching matters hugely.'
      },
      {
        term: 'Kinetic isotope effect probe',
        kind: 'law',
        statement: 'A **primary isotope ratio near seven marks H breaking** `isotope-effect` $k_{H}$ over $k_{D}$ near $7$ when $C$-$H$ breaks in the rate step and near $1$ when it stays intact.',
        detail: '$E2$ with $C$-$H$ cleavage shows large $k_{H}$ over $k_{D}$ while $S_{N}1$ ionisation without $C$-$H$ cleavage shows near unity. Tunnelling lifts the ratio above $7$ for narrow barriers.'
      },
      {
        term: 'Stereochemical rate proof',
        kind: 'insight',
        statement: 'A **stereochemical outcome plus rate law assigns mechanism** `stereo-proof` $S_{N}2$ gives inversion with second order kinetics while $S_{N}1$ gives racemisation with first order kinetics.',
        detail: 'Complete inversion at carbon with $rate = k[RX][Nu]$ proves backside collision. Partial racemisation with $rate = k[RX]$ proves planar $C^{+}$ capture from both faces.'
      }
    ],
    figures: [
      {
        caption: 'One hump $S_{N}2$ versus two hump $S_{N}1$ diagrams with Hammond early versus late barriers and $k_{H}$ over $k_{D}$ near $7$ flagging $C$-$H$ cleavage.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rate ratio and energy diagram with Hammond and isotope proof"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">SN2 one hump</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">k times RX times Nu</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">SN1 two humps</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">C plus valley</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">k times RX only</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Hammond plus KIE</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">kH over kD near 7</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">inversion proves SN2, racemic proves SN1</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Rate table assignment for bromide pair',
        problem: 'Bromide $A$ solvolyses $10^{5}$ faster than bromide $B$ but exchanges with $I$ $10^{2}$ slower. Assign branching order and mechanisms.',
        steps: [
          { label: 'Step 1', text: 'Read ratios:\n```text\nsolvolysis A over B = 1e5 -> cation path\nI exchange A over B = 1 over 100 -> crowded path\nA = branched tert, B = open prim\n```\nLarge solvolysis gap marks $S_{N}1$ cation character with $rate = k[RX]$.' },
          { label: 'Step 2', text: 'Slow $I$ exchange marks crowded backside, so $A$ resists $S_{N}2$ while $B$ welcomes it.' },
          { label: 'Step 3', text: 'Assign $A$ to $S_{N}1$ plus $E1$ manifold and $B$ to $S_{N}2$ manifold.' }
        ],
        result: 'Branched $A$ ionises fast but collides slowly, open $B$ does the reverse.'
      },
      {
        title: 'Isotope test for elimination path',
        problem: 'Beta deuterated $RX$ eliminates with $k_{H}$ over $k_{D}$ near $6.8$ under strong base but solvolyses with ratio near $1.0$ without base. Assign rate steps.',
        steps: [
          { label: 'Step 1', text: 'Near $7$ means $C$-$H$ breaks in the slow step, matching $E2$ $C$-$H$ plus $C$-$X$ cleavage.' },
          { label: 'Step 2', text: 'Near $1$ means $C$-$H$ stays intact in the slow step, matching $S_{N}1$ $C$-$X$ ionisation.' },
          { label: 'Step 3', text: 'Confirm by rate laws: second order base path versus first order solvolysis.' }
        ],
        result: 'Base path $E2$ with $C$-$H$ cleavage and solvolysis $S_{N}1$ without it.'
      }
    ],
    keyTakeaways: [
      '$S_{N}1$ spans $10^{8}$ with branching while $S_{N}2$ collapses with crowding.',
      '$S_{N}1$ shows two humps with $C^{+}$ valley and $S_{N}2$ shows one hump.',
      'Hammond places late transition states for endothermic ionisation steps.',
      '$k_{H}$ over $k_{D}$ near $7$ proves $C$-$H$ breaking in the rate step.'
    ],
    quiz: [
      {
        q: 'Huge solvolysis acceleration with branching proves:',
        options: ['$S_{N}1$ cation character', '$S_{N}2$ collision', 'No mechanism', 'Radical chain'],
        answer: 0,
        explanation: 'Step 1: Compare $1$ degree versus $3$ degree solvolysis rates. Step 2: Note $10^{5}$ to $10^{8}$ gaps. Step 3: Assign $C^{+}$ ionisation character.'
      },
      // PYQ-pattern: Hammond postulate placement drill
      {
        q: 'Endothermic ionisation transition state is:',
        options: ['Early reactant like', 'Late product like with cation character', 'Identical to intermediate', 'Barrier free'],
        answer: 1,
        explanation: 'Step 1: Recall Hammond nearer stable side rule. Step 2: Place endothermic barrier near products. Step 3: Give it full $C^{+}$ character.'
      },
      {
        q: '$k_{H}$ over $k_{D}$ near $1$ means:',
        options: ['$C$-$H$ breaks in rate step', 'Tunnelling dominates', '$C$-$H$ stays intact in rate step', 'No reaction'],
        answer: 2,
        explanation: 'Step 1: Recall zero point loss needs $C$-$H$ cleavage. Step 2: Note unity shows no such loss. Step 3: Rule out $C$-$H$ breaking in slow step.'
      },
      {
        q: '$S_{N}2$ proof combines:',
        options: ['Racemisation plus first order', 'Rearrangement plus $C^{+}$', 'No stereochemistry', 'Inversion plus second order $k[RX][Nu]$'],
        answer: 3,
        explanation: 'Step 1: Measure second order kinetics. Step 2: Observe complete inversion at carbon. Step 3: Assign backside collision mechanism.'
      }
    ]
  }
]
