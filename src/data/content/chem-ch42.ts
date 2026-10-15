import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 42: Photochemistry and Advanced Mechanisms
// Sections 42.1 - 42.4. Norrish cleavages, Barton remote functionalization,
// di-pi-methane rearrangement, photooxidation, atropisomerism, neighbouring
// group participation, Hammett relations, umpolung and green chemistry.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh42Content: SectionContent[] = [
  // ---------------------------------------------------------------- 42.1
  {
    sectionId: 'chem-ch42-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Carbonyl photochemistry and remote functionalization logic',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Norrish Type one versus Type two selection rules',
            body: 'The **Norrish theorem** states that alpha cleavage to acyl plus alkyl radicals dominates without gamma hydrogen, while gamma abstraction through a six membered transition state dominates when such hydrogen is available. Triplet sensitization favors cleavage by populating reactive excited states, while singlet paths and constrained rings tilt toward abstraction. Reading the carbon skeleton for gamma hydrogens therefore predicts the photoproduct class before any arrow is drawn.'
          },
          {
            kind: 'derivation',
            heading: 'Six membered abstraction and Barton radical relay',
            body: 'Align carbonyl oxygen with gamma $C-H$ through a chair like six membered array to transfer hydrogen and split the resulting diradical into alkene plus enol that tautomerizes to carbonyl. The Barton sequence extends the relay: nitrite photolysis gives an alkoxy radical plus nitric oxide, delta hydrogen capture moves the radical, and recombination plus tautomerization installs a delta oxime far from the original alcohol. Both derivations show geometry controlling reactivity, with the six membered ring as the recurring graduate motif.'
          },
          {
            kind: 'application',
            heading: 'Synthesis and atmospheric fates of carbonyls',
            body: 'Total synthesis uses Norrish cleavage to open rings and Barton functionalization to oxidize unactivated delta positions that ionic chemistry cannot reach. Atmospheric acetone photolysis follows the same cleavage with quantum yields that set ozone budgets, so laboratory cross sections feed climate models directly. Photoredox catalysis now generalizes the lesson by generating related radicals under visible light, turning classical photochemistry into room temperature methods.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Carbonyl photochemistry splits into two named Norrish paths that every prediction drill tests together. Type I breaks the alpha bond to radicals while Type II steals a gamma hydrogen through a six-membered transition state. The Barton reaction then shows remote functionalization, turning an alcohol-derived nitrite into a delta oxime by light.',
    objectives: [
      'Separate Norrish Type I alpha cleavage from Type II gamma abstraction products',
      'Trace Barton nitrite photolysis to alkoxy radical plus delta oxime',
      'Predict six-membered transition state geometry for gamma hydrogen capture'
    ],
    concepts: [
      {
        term: 'Norrish Type I alpha cleavage',
        kind: 'definition',
        statement: 'An **excited carbonyl breaks its alpha carbon bond** `norrish-I` $RCOCH_{2}R$ under $h\\nu$ gives $RCO$ radical plus carbon radical fragments.',
        detail: 'Cyclic ketones open to biradicals that lose $CO$ or recombine to smaller rings, while acyclic ketones split into two radical pairs. Tertiary alpha centres cleave fastest since the carbon radical formed is most stable.'
      },
      {
        term: 'Norrish Type II gamma abstraction',
        kind: 'theorem',
        statement: 'A **carbonyl oxygen captures gamma hydrogen through six atoms** `norrish-II` $CH_{3}COCH_{2}CH_{2}CHR_{2}$ gives a $1,4$-biradical that splits to enol plus alkene.',
        detail: 'The $O$ to $H$ contact closes a six-membered ring in the excited state, so only ketones with gamma hydrogen atoms qualify. The $1,4$-biradical either cleaves to $CH_{2}=C(OH)CH_{3}$ plus alkene or closes to a cyclobutanol.'
      },
      {
        term: 'Barton reaction sequence',
        kind: 'method',
        statement: 'A **nitrite ester photolyses to an alkoxy radical relay** `barton` $RONO$ under $h\\nu$ gives $RO$ radical plus $NO$ for remote attack.',
        detail: 'The $RO$ radical pulls a delta hydrogen through a six-membered transition state, and the new carbon radical couples with $NO$ to a nitroso compound. Tautomerism converts the nitroso product into the observed delta oxime $C=NOH$.'
      },
      {
        term: 'Six-membered transition state rule',
        kind: 'law',
        statement: 'A **1,5 hydrogen shift wins over 1,4 and 1,6 shifts** `six-rule` Barton abstraction targets the delta carbon reached through six atoms.',
        detail: 'Chair-like geometry lines the radical, hydrogen and carbon up with least strain, which is why corticosterone-derived nitrite functionalizes the angular methyl group. Norrish Type II obeys the same geometric demand on the carbonyl side.'
      },
      {
        term: 'Spin and quenching control',
        kind: 'insight',
        statement: 'A **triplet excited state lives long enough to react** `triplet-life` singlet $S_{1}$ crosses to triplet $T_{1}$ before abstraction or cleavage.',
        detail: 'Quenchers such as $O_{2}$ or 1,3-dienes shorten triplet life and suppress both Norrish paths. Solvent H-donors divert Type I radicals toward photoreduction instead of cleavage.'
      }
    ],
    figures: [
      {
        caption: 'Norrish Type $I$ alpha cleavage competes with Type $II$ gamma abstraction through a six-membered ring, while Barton $RONO$ photolysis relays to a delta $C=NOH$ oxime.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Norrish type one versus type two with Barton relay" font-family="sans-serif"><rect x="40" y="90" width="190" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="135" y="120" text-anchor="middle" font-size="13" fill="currentColor">Type I</text><text x="135" y="142" text-anchor="middle" font-size="12" fill="currentColor">alpha cleavage</text><text x="135" y="162" text-anchor="middle" font-size="12" fill="currentColor">radical pair</text><rect x="265" y="90" width="190" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="120" text-anchor="middle" font-size="13" fill="currentColor">Type II</text><text x="360" y="142" text-anchor="middle" font-size="12" fill="currentColor">gamma H via 6 ring</text><text x="360" y="162" text-anchor="middle" font-size="12" fill="currentColor">enol plus alkene</text><rect x="490" y="90" width="190" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="120" text-anchor="middle" font-size="13" fill="currentColor">Barton</text><text x="585" y="142" text-anchor="middle" font-size="12" fill="currentColor">RONO to RO radical</text><text x="585" y="162" text-anchor="middle" font-size="12" fill="currentColor">delta oxime</text><line x1="230" y1="140" x2="265" y2="140" stroke="currentColor" stroke-width="2"/><polygon points="265,140 255,135 255,145" fill="currentColor"/><line x1="455" y1="140" x2="490" y2="140" stroke="currentColor" stroke-width="2"/><polygon points="490,140 480,135 480,145" fill="currentColor"/><text x="360" y="250" text-anchor="middle" font-size="12" fill="currentColor">light in, six-membered geometry decides</text><text x="360" y="272" text-anchor="middle" font-size="12" fill="currentColor">cleavage versus abstraction versus relay</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Sorting Type I against Type II',
        problem: 'Ketone $CH_{3}COCH_{2}CH_{2}CH_{3}$ is irradiated. List the Type I and Type II product sets.',
        steps: [
          { label: 'Step 1', text: 'Mark the bonds:\n```text\nType I: break CO-CH2 alpha bond -> CH3CO. + .CH2CH2CH3\nType II: O...H-gamma six-ring -> 1,4-biradical\n```\nAlpha cleavage and gamma capture start from the same excited carbonyl.' },
          { label: 'Step 2', text: 'Split the $1,4$-biradical to enol $CH_{2}=C(OH)CH_{3}$ plus propene $CH_{2}=CHCH_{3}$.' },
          { label: 'Step 3', text: 'Note the minor cyclobutanol closure from the same biradical.' }
        ],
        result: 'Type I gives acetyl plus propyl radicals; Type II gives enol plus propene with some cyclobutanol.'
      },
      {
        title: 'Barton oxime position',
        problem: 'A steroidal nitrite $RONO$ with a delta methyl group is photolysed. Locate the oxime.',
        steps: [
          { label: 'Step 1', text: 'Photolyse $RONO$ to alkoxy radical $RO$ plus $NO$ under light.' },
          { label: 'Step 2', text: 'Shift the delta hydrogen to oxygen through the six-membered transition state.' },
          { label: 'Step 3', text: 'Trap the carbon radical with $NO$ and tautomerise nitroso to oxime $C=NOH$ at the delta carbon.' }
        ],
        result: 'The oxime forms exactly at the delta carbon reached by the six-atom relay.'
      }
    ],
    keyTakeaways: [
      'Type I cleaves alpha bonds to radicals; Type II needs gamma hydrogen atoms.',
      'Type II passes through a $1,4$-biradical giving enol plus alkene or cyclobutanol.',
      'Barton $RONO$ photolysis relays an alkoxy radical to a delta oxime.',
      'Six-membered geometry and triplet lifetime control all three paths.'
    ],
    quiz: [
      {
        q: 'Norrish Type I is best described as:',
        options: ['Alpha bond cleavage of excited carbonyl to radicals', 'Gamma hydrogen capture giving enol plus alkene', 'Nitrite photolysis to delta oxime', 'Oxygen sensitization to peroxide'],
        answer: 0,
        explanation: 'Step 1: Excite the carbonyl with light. Step 2: Break the bond alpha to $C=O$. Step 3: Collect the two radical fragments.'
      },
      // PYQ-pattern — Norrish Type II gamma hydrogen requirement (rephrased)
      {
        q: 'A ketone lacking gamma hydrogen atoms on irradiation gives:',
        options: ['Only Type II enol plus alkene', 'Only Type I cleavage or photoreduction, no Type II', 'Always a delta oxime', 'Always a cyclopropane'],
        answer: 1,
        explanation: 'Step 1: Check for gamma hydrogen atoms. Step 2: Rule out the six-membered abstraction. Step 3: Leave Type I or reduction as the open paths.'
      },
      {
        q: 'In the Barton reaction the hydrogen abstracted sits:',
        options: ['Alpha to the nitrite oxygen', 'Beta to the nitrite oxygen', 'Delta via a six-membered transition state', 'Only on aromatic rings'],
        answer: 2,
        explanation: 'Step 1: Form the alkoxy radical $RO$. Step 2: Reach the delta carbon through six atoms. Step 3: Trap with $NO$ and tautomerise to oxime.'
      },
      {
        q: 'Triplet quenchers added to a Norrish mixture will:',
        options: ['Speed up both Norrish paths', 'Suppress cleavage by shortening triplet life', 'Move the oxime to the alpha carbon', 'Convert ketones to acids directly'],
        answer: 1,
        explanation: 'Step 1: Recall reaction happens from triplet $T_{1}$. Step 2: Quenchers drain $T_{1}$ fast. Step 3: Observe suppressed Type I and Type II yields.'
      }
    ]
  },
  // ---------------------------------------------------------------- 42.2
  {
    sectionId: 'chem-ch42-s2',
    readingTime: 9,
    intro: 'Excited alkenes rearrange in ways ground states never allow, and the di-pi-methane pattern is the flagship case. Molecular oxygen joins the story once a sensitizer converts it to singlet oxygen, an aggressive electrophile. Photoreduction of ketones by hydrogen donors completes the trio with ketyl radical coupling.',
    objectives: [
      'Map di-pi-methane 1,4-diene to vinylcyclopropane rearrangement',
      'Sort singlet oxygen ene, endoperoxide and dioxetane paths',
      'Write benzophenone photoreduction to benzopinacol by ketyl coupling'
    ],
    concepts: [
      {
        term: 'Di-pi-methane rearrangement',
        kind: 'definition',
        statement: 'A **1,4-diene photorearranges to vinylcyclopropane** `dpm` $C=C-C-C=C$ under $h\\nu$ bridges through carbon $2$ and carbon $4$.',
        detail: 'Bonding develops between the two pi units while one pi bond migrates, leaving a three-membered ring with a pendant vinyl group. Aryl substitution at the methane carbon stabilises the bridging and speeds the reaction.'
      },
      {
        term: 'Oxa-di-pi-methane variant',
        kind: 'theorem',
        statement: 'A **beta gamma olefinic ketone gives cyclopropyl ketone** `oxa-dpm` $C=C-C-C=O$ photolysis mirrors the all-carbon pattern with oxygen carried along.',
        detail: 'The carbonyl pi unit plays one ene role, so the product is a cyclopropane fused to the carbonyl carbon. Triplet sensitization with acetophenone-type donors promotes this variant efficiently.'
      },
      {
        term: 'Singlet oxygen generation',
        kind: 'law',
        statement: 'A **sensitizer transfers light energy to oxygen** `singlet-O2` dye plus $h\\nu$ plus $^{3}O_{2}$ gives dye back plus $^{1}O_{2}$ excited oxygen.',
        detail: 'Rose bengal and methylene blue absorb visible light, cross to triplets, and hand energy to ground-state triplet oxygen. The resulting singlet oxygen reacts as an electrophile even at low temperature.'
      },
      {
        term: 'Three photooxidation modes',
        kind: 'method',
        statement: 'An **alkene meets singlet oxygen three ways** `O2-modes` ene hydroperoxide, diene endoperoxide, and electron-rich $2$ plus $2$ dioxetane.',
        detail: 'Alkenes with allylic hydrogen give allyl hydroperoxides $ROOH$ with moved double bonds. Linked 1,3-dienes undergo $4$ plus $2$ cycloaddition to endoperoxides, while enamines and enol ethers give cleavable dioxetanes.'
      },
      {
        term: 'Photoreduction by H donors',
        kind: 'insight',
        statement: 'A **ketone triplet steals hydrogen then dimerises** `ketyl` $Ph_{2}C=O$ plus $(CH_{3})_{2}CHOH$ gives ketyl radical $Ph_{2}C(OH)$ that couples to benzopinacol.',
        detail: 'Isopropanol and ethers donate hydrogen atoms readily, and the ketyl radicals combine to the $1,2$-diol pinacol product. Good H-donors therefore compete with Norrish cleavage whenever Type I radicals form.'
      }
    ],
    figures: [
      {
        caption: 'A $1,4$-diene closes to vinylcyclopropane while sensitized $^{1}O_{2}$ branches to hydroperoxide, endoperoxide and dioxetane; ketyl radicals couple to pinacol.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Di-pi-methane with singlet oxygen modes and photoreduction" font-family="sans-serif"><rect x="40" y="90" width="190" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="135" y="120" text-anchor="middle" font-size="13" fill="currentColor">di-pi-methane</text><text x="135" y="142" text-anchor="middle" font-size="12" fill="currentColor">1,4-diene in</text><text x="135" y="162" text-anchor="middle" font-size="12" fill="currentColor">vinylcyclopropane out</text><rect x="265" y="90" width="190" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="120" text-anchor="middle" font-size="13" fill="currentColor">singlet O2</text><text x="360" y="142" text-anchor="middle" font-size="12" fill="currentColor">ene ROOH</text><text x="360" y="162" text-anchor="middle" font-size="12" fill="currentColor">4+2 endoperoxide</text><text x="360" y="182" text-anchor="middle" font-size="12" fill="currentColor">2+2 dioxetane</text><rect x="490" y="90" width="190" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="120" text-anchor="middle" font-size="13" fill="currentColor">photoreduction</text><text x="585" y="142" text-anchor="middle" font-size="12" fill="currentColor">ketyl radical</text><text x="585" y="162" text-anchor="middle" font-size="12" fill="currentColor">benzopinacol</text><line x1="230" y1="145" x2="265" y2="145" stroke="currentColor" stroke-width="2"/><polygon points="265,145 255,140 255,150" fill="currentColor"/><line x1="455" y1="145" x2="490" y2="145" stroke="currentColor" stroke-width="2"/><polygon points="490,145 480,140 480,150" fill="currentColor"/><text x="360" y="255" text-anchor="middle" font-size="12" fill="currentColor">light reshapes pi bonds, oxygen traps them</text><text x="360" y="277" text-anchor="middle" font-size="12" fill="currentColor">donors divert radicals to diols</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Predicting a di-pi-methane product',
        problem: 'The 1,4-diene $Ph_{2}C=CH-CH_{2}-CH=CH_{2}$ is irradiated. Draw the rearranged skeleton.',
        steps: [
          { label: 'Step 1', text: 'Number the frame:\n```text\nC1=C2 - C3 - C4=C5, methane carbon is C3\nbridge C2...C4, migrate C1=C2 pi bond\n```\nBridging links the two pi units across the methane carbon.' },
          { label: 'Step 2', text: 'Close the triangle $C_{2}-C_{3}-C_{4}$ as the cyclopropane ring.' },
          { label: 'Step 3', text: 'Hang the vinyl group from the ring to finish vinylcyclopropane $Ph_{2}$-substituted product.' }
        ],
        result: 'The product is a phenyl-stabilised vinylcyclopropane built on carbons $2$, $3$ and $4$.'
      },
      {
        title: 'Choosing a singlet oxygen mode',
        problem: 'Predict the product type for 2-butene, cyclohexadiene and an enamine with sensitized $^{1}O_{2}$.',
        steps: [
          { label: 'Step 1', text: 'Give 2-butene the ene path since allylic hydrogen atoms are present, forming allyl hydroperoxide.' },
          { label: 'Step 2', text: 'Give cyclohexadiene the $4$ plus $2$ path to a bridged endoperoxide.' },
          { label: 'Step 3', text: 'Give the enamine the $2$ plus $2$ path to a dioxetane that cleaves to carbonyls.' }
        ],
        result: 'Alkene gives hydroperoxide, diene gives endoperoxide, enamine gives cleaved carbonyls.'
      }
    ],
    keyTakeaways: [
      'Di-pi-methane turns $1,4$-dienes into vinylcyclopropanes by bridging.',
      'Oxa variant converts beta gamma olefinic ketones to cyclopropyl ketones.',
      'Sensitized $^{1}O_{2}$ reacts by ene, $4$ plus $2$ and $2$ plus $2$ modes.',
      'Ketyl radicals from H donors couple to pinacol diols.'
    ],
    quiz: [
      {
        q: 'Di-pi-methane substrate and product are:',
        options: ['1,4-diene to vinylcyclopropane', '1,3-diene to cyclobutene', 'Alkyne to allene only', 'Ketone to acid directly'],
        answer: 0,
        explanation: 'Step 1: Locate two pi units separated by one carbon. Step 2: Bridge across the methane carbon. Step 3: Read the vinylcyclopropane skeleton.'
      },
      {
        q: 'Singlet oxygen is produced by:',
        options: ['Direct heating of triplet oxygen', 'Mixing acid with base', 'Freezing hydrogen peroxide', 'Energy transfer from an excited sensitizer dye'],
        answer: 3,
        explanation: 'Step 1: Excite rose bengal with visible light. Step 2: Cross the dye to its triplet. Step 3: Transfer energy to $^{3}O_{2}$ giving $^{1}O_{2}$.'
      },
      {
        q: 'Linked 1,3-diene plus singlet oxygen gives:',
        options: ['Allyl hydroperoxide only', 'Benzopinacol diol', 'Bridged endoperoxide by 4 plus 2 addition', 'Delta oxime'],
        answer: 2,
        explanation: 'Step 1: Match diene four atoms with $O_{2}$. Step 2: Close the six-membered peroxide bridge. Step 3: Name it an endoperoxide.'
      },
      // PYQ-pattern — benzophenone photoreduction to pinacol (rephrased)
      {
        q: 'Benzophenone in isopropanol under light mainly gives:',
        options: ['Benzoic acid', 'Benzopinacol by ketyl coupling', 'Vinylcyclopropane', 'Endoperoxide'],
        answer: 1,
        explanation: 'Step 1: Excite benzophenone to triplet. Step 2: Abstract hydrogen to ketyl radical. Step 3: Couple two ketyls to the diol.'
      }
    ]
  },
  // ---------------------------------------------------------------- 42.3
  {
    sectionId: 'chem-ch42-s3',
    readingTime: 10,
    intro: 'Chirality without a stereocentre and rate jumps without stronger reagents look mysterious until the hidden helper is named. Atropisomerism freezes rotation about single bonds into stable mirror images. Neighbouring group participation lets a nearby lone pair do the first substitution internally and return the product with retention.',
    objectives: [
      'Recognise atropisomerism from hindered rotation and axial chirality',
      'Explain anchimeric rate boost with retention by double inversion',
      'Identify nonclassical ions such as phenonium and norbornyl cations'
    ],
    concepts: [
      {
        term: 'Atropisomerism condition',
        kind: 'definition',
        statement: 'A **hindered single bond freezes into mirror images** `atropisomer` ortho-substituted biphenyls with bulky $X$ groups cannot rotate freely at room conditions.',
        detail: 'The rotation barrier must exceed roughly $100$ kJ per mol for isolation, as in $BINAP$ ligands and hindered amides. Below that barrier the forms interconvert and only averaged signals appear.'
      },
      {
        term: 'Axial chirality assignment',
        kind: 'method',
        statement: 'A **chiral axis replaces the stereocentre** `chiral-axis` view down the biaryl bond and rank front versus back pairs for $R_{a}$ or $S_{a}$ labels.',
        detail: 'Allenes with even cumulated double bonds and alkylidene cyclohexanes show the same axis logic. Racemization half-life grows steeply with substituent size and ring locking.'
      },
      {
        term: 'Anchimeric assistance mechanism',
        kind: 'theorem',
        statement: 'A **neighbour lone pair performs internal substitution first** `NGP` $ClCH_{2}CH_{2}OCOCH_{3}$ ionises with acetate oxygen closing to a cyclic acetoxonium ion.',
        detail: 'External nucleophile then opens the ring from the back, so two inversions return net retention of configuration. Sulfur, halogen, hydroxyl and carboxylate neighbours all assist, with rate jumps of several orders of magnitude.'
      },
      {
        term: 'Nonclassical carbocations',
        kind: 'insight',
        statement: 'A **bridged cation spreads charge over two carbons** `nonclassical` phenonium ion delocalises into the ring while norbornyl cation spans $C_{1}$ and $C_{2}$ symmetrically.',
        detail: 'Acetolysis of exo norbornyl derivatives runs far faster than the endo form and keeps configuration, evidence for the bridged ion. Phenonium bridges explain retained products from beta aryl alkyl systems.'
      },
      {
        term: 'NGP evidence checklist',
        kind: 'law',
        statement: 'A **rate jump plus retention proves participation** `NGP-proof` compare with a homologue lacking the neighbour and test stereochemistry.',
        detail: 'Anchimeric systems solvolyse hundreds to millions of times faster than unassisted analogues. Rearranged versus retained product ratios then confirm whether a bridged ion or open cation carried the reaction.'
      }
    ],
    figures: [
      {
        caption: 'Locked biaryl rotation gives $R_{a}$ and $S_{a}$ atropisomers, while a neighbour $Z$ closes a bridged ion that opens with net retention.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Atropisomer pair with neighbouring group bridge" font-family="sans-serif"><rect x="40" y="90" width="190" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="135" y="120" text-anchor="middle" font-size="13" fill="currentColor">atropisomers</text><text x="135" y="142" text-anchor="middle" font-size="12" fill="currentColor">Ra mirror Sa</text><text x="135" y="162" text-anchor="middle" font-size="12" fill="currentColor">locked biaryl</text><circle cx="135" cy="182" r="6" fill="none" stroke="currentColor" stroke-width="2"/><rect x="265" y="90" width="190" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="120" text-anchor="middle" font-size="13" fill="currentColor">NGP bridge</text><text x="360" y="142" text-anchor="middle" font-size="12" fill="currentColor">Z closes ring</text><text x="360" y="162" text-anchor="middle" font-size="12" fill="currentColor">back opening</text><rect x="490" y="90" width="190" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="120" text-anchor="middle" font-size="13" fill="currentColor">net result</text><text x="585" y="142" text-anchor="middle" font-size="12" fill="currentColor">fast rate</text><text x="585" y="162" text-anchor="middle" font-size="12" fill="currentColor">retention</text><line x1="230" y1="145" x2="265" y2="145" stroke="currentColor" stroke-width="2"/><polygon points="265,145 255,140 255,150" fill="currentColor"/><line x1="455" y1="145" x2="490" y2="145" stroke="currentColor" stroke-width="2"/><polygon points="490,145 480,140 480,150" fill="currentColor"/><text x="360" y="255" text-anchor="middle" font-size="12" fill="currentColor">bulk freezes rotation, neighbours lend a bond</text><text x="360" y="277" text-anchor="middle" font-size="12" fill="currentColor">double inversion reads as retention</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Retention by acetate neighbour',
        problem: 'Optically active $CH_{3}CH(OCOCH_{3})CH_{2}Cl$ solvolyses with retention. Explain with NGP.',
        steps: [
          { label: 'Step 1', text: 'Close the ring:\n```text\nC-O-C=O attacks C-Cl from behind -> cyclic acetoxonium\nfirst inversion at C-Cl carbon\n```\nThe neighbour ejects chloride internally.' },
          { label: 'Step 2', text: 'Attack the ring with solvent from the back at the same carbon.' },
          { label: 'Step 3', text: 'Count two inversions, giving net retention with a large rate jump.' }
        ],
        result: 'Acetate participation explains both the speed and the retained configuration.'
      },
      {
        title: 'Atropisomer stability call',
        problem: 'Decide whether tetrasubstituted biphenyl $A$ with four bulky ortho groups shows isolable enantiomers at room conditions.',
        steps: [
          { label: 'Step 1', text: 'Check ortho crowding on both rings around the biaryl bond.' },
          { label: 'Step 2', text: 'Estimate the rotation barrier well above the isolation threshold from steric clash.' },
          { label: 'Step 3', text: 'Assign $R_{a}$ and $S_{a}$ by the axial ranking viewed down the axis.' }
        ],
        result: 'Bulky ortho groups freeze rotation, so stable $R_{a}$ and $S_{a}$ forms separate.'
      }
    ],
    keyTakeaways: [
      'Atropisomers arise from frozen rotation, labelled $R_{a}$ and $S_{a}$.',
      'NGP accelerates solvolysis through cyclic bridged ions.',
      'Double inversion gives net retention of configuration.',
      'Phenonium and norbornyl ions are classic nonclassical proofs.'
    ],
    quiz: [
      {
        q: 'Atropisomerism requires:',
        options: ['A stereocentre with four different groups', 'Hindered rotation about a single bond with high barrier', 'A double bond that cannot rotate at all', 'A plane of symmetry in the molecule'],
        answer: 1,
        explanation: 'Step 1: Find the crowded biaryl or amide bond. Step 2: Compare the rotation barrier with the isolation limit. Step 3: Label the frozen $R_{a}$ or $S_{a}$ axis.'
      },
      {
        q: 'NGP by acetate on solvolysis gives:',
        options: ['Slower rate with inversion', 'Faster rate with net retention', 'No reaction at all', 'Elimination only'],
        answer: 1,
        explanation: 'Step 1: Close the acetoxonium ring with first inversion. Step 2: Open it from the back with second inversion. Step 3: Read faster rate plus retention.'
      },
      {
        q: 'Exo norbornyl solvolysis is fast with retention because of:',
        options: ['A free methyl radical', 'A bridged nonclassical cation', 'Aromatic ring current', 'Hydrogen bonding to solvent'],
        answer: 1,
        explanation: 'Step 1: Compare exo against endo rates. Step 2: Note retention rules out an open ion. Step 3: Assign the symmetric bridged cation.'
      },
      {
        q: 'Assertion: acetoxonium participation causes retention of configuration. Reason: backside opening of the cyclic ion inverts the centre a second time.',
        options: ['Both the assertion and the reason are true, and the reason correctly explains the assertion', 'Both the assertion and the reason are true, but the reason does not explain the assertion', 'The assertion is true but the reason is false', 'The assertion is false but the reason is true'],
        answer: 0,
        explanation: 'Step 1: Verify retention is observed. Step 2: Confirm ring closure inverts once. Step 3: Confirm backside opening inverts again. Step 4: Link double inversion to retention.'
      }
    ]
  },
  // ---------------------------------------------------------------- 42.4
  {
    sectionId: 'chem-ch42-s4',
    readingTime: 10,
    intro: 'Physical organic chemistry turns substituent effects into numbers, and synthesis turns polarity on its head when the target demands it. The Hammett equation links rates to substituent constants with a single slope. Umpolung reagents and green metrics then decide whether a route is clever on paper and clean in practice.',
    objectives: [
      'Apply Hammett sigma rho analysis to read charge buildup',
      'Design dithiane and cyanide umpolung routes to acyl products',
      'Score routes with atom economy and E factor green metrics'
    ],
    concepts: [
      {
        term: 'Hammett equation',
        kind: 'law',
        statement: 'A **log rate ratio equals rho times sigma** `hammett` $\\log(k/k_{0}) = \\rho\\sigma$ for meta and para substituted benzenes.',
        detail: 'Sigma measures what the substituent donates or withdraws relative to hydrogen, fixed from benzoic acid ionization. Rho measures how much the reaction wants electrons, read from the slope of the plot.'
      },
      {
        term: 'Reading rho sign',
        kind: 'method',
        statement: 'A **positive rho means negative charge builds up** `rho-read` $\\rho$ above $1$ speeds with $NO_{2}$ and $CN$ withdrawers in the transition state.',
        detail: 'Ester hydrolysis with $\\rho$ near $2$ plus responds strongly to withdrawers, while phenol ionization defines the scale. Negative rho flags positive charge buildup aided by donors such as $OCH_{3}$.'
      },
      {
        term: 'Dithiane umpolung',
        kind: 'method',
        statement: 'A **dithiane anion acts as reversed carbonyl carbon** `dithiane` $RCH(SR)_{2}$ with $BuLi$ gives $RC(SR)_{2}$ minus for alkylation.',
        detail: 'Normal carbonyl carbon is electrophilic, but sulfur stabilises the adjacent anion so it attacks electrophiles instead. Mercury or iodine workup unmasks the ketone $RCOR$ after the new bond is built.'
      },
      {
        term: 'Cyanide benzoin umpolung',
        kind: 'theorem',
        statement: 'A **cyanide catalyst flips aldehyde polarity** `benzoin` $2PhCHO$ with $CN$ minus gives benzoin $PhCOCH(OH)Ph$ through a cyanohydrin anion.',
        detail: 'Cyanide adds to one aldehyde, the proton shift creates a nucleophilic carbon, and attack on the second aldehyde follows. Catalyst expulsion closes the cycle, mirrored today by N-heterocyclic carbene catalysts in the Stetter reaction.'
      },
      {
        term: 'Green metrics pair',
        kind: 'definition',
        statement: 'An **atom economy plus E factor scorecard judges waste** `green-metrics` $AE$ equals product mass over reactant mass times $100$, $E$ equals waste mass over product mass.',
        detail: 'Additions score near $100$ percent atom economy while protections and leaving groups drag scores down. Catalysis, safer solvents, renewable feedstocks and energy-efficient activation lift the remaining green principles.'
      }
    ],
    figures: [
      {
        caption: 'Hammett $\\log(k/k_{0})$ against $\\sigma$ gives slope $\\rho$, while dithiane and cyanide routes invert carbonyl polarity and $AE$ with $E$ score waste.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hammett plot with umpolung and green metrics" font-family="sans-serif"><line x1="80" y1="260" x2="300" y2="260" stroke="currentColor" stroke-width="2"/><line x1="80" y1="260" x2="80" y2="110" stroke="currentColor" stroke-width="2"/><line x1="90" y1="240" x2="290" y2="130" stroke="currentColor" stroke-width="2.5"/><circle cx="150" cy="210" r="6" fill="currentColor"/><circle cx="200" cy="185" r="6" fill="currentColor"/><circle cx="250" cy="158" r="6" fill="currentColor"/><text x="190" y="290" text-anchor="middle" font-size="12" fill="currentColor">sigma (substituent)</text><text x="45" y="185" text-anchor="middle" font-size="12" fill="currentColor">log rate</text><rect x="340" y="110" width="150" height="150" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="415" y="140" text-anchor="middle" font-size="13" fill="currentColor">umpolung</text><text x="415" y="162" text-anchor="middle" font-size="12" fill="currentColor">dithiane anion</text><text x="415" y="182" text-anchor="middle" font-size="12" fill="currentColor">cyanide benzoin</text><rect x="520" y="110" width="150" height="150" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="595" y="140" text-anchor="middle" font-size="13" fill="currentColor">green score</text><text x="595" y="162" text-anchor="middle" font-size="12" fill="currentColor">AE high good</text><text x="595" y="182" text-anchor="middle" font-size="12" fill="currentColor">E low good</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Hammett rate prediction',
        problem: 'A reaction has $\\rho = +2.1$. Rank $para$-$NO_{2}$, $para$-$H$ and $para$-$OCH_{3}$ substrates by rate.',
        steps: [
          { label: 'Step 1', text: 'Recall the signs:\n```text\nsigma: NO2 +0.78, H 0.00, OCH3 -0.27\nlog(k/k0) = rho * sigma with rho = +2.1\n```\nWithdrawers help when rho is positive.' },
          { label: 'Step 2', text: 'Compute $\\log(k/k_{0})$ as $+1.64$, $0$ and $-0.57$ respectively.' },
          { label: 'Step 3', text: 'Order rates $NO_{2}$ fastest, then $H$, then $OCH_{3}$ slowest.' }
        ],
        result: 'Positive rho ranks the nitro compound fastest by over an order of magnitude.'
      },
      {
        title: 'Dithiane acyl alkylation',
        problem: 'Prepare ketone $CH_{3}CH_{2}COCH_{3}$ from a dithiane plus alkyl halide.',
        steps: [
          { label: 'Step 1', text: 'Deprotonate 2-methyl dithiane with $BuLi$ to the stabilised anion.' },
          { label: 'Step 2', text: 'Alkylate with ethyl halide $CH_{3}CH_{2}X$ to extend the carbon chain.' },
          { label: 'Step 3', text: 'Hydrolyse the dithiane with mercury or iodine reagents to free the ketone.' }
        ],
        result: 'Umpolung builds the ketone skeleton by nucleophilic acyl chemistry.'
      }
    ],
    keyTakeaways: [
      'Hammett $\\log(k/k_{0}) = \\rho\\sigma$ separates substituent from reaction demand.',
      'Positive $\\rho$ signals negative charge buildup in the transition state.',
      'Dithiane and cyanide routes reverse normal carbonyl polarity.',
      'Atom economy near $100$ percent and low $E$ factor mark green routes.'
    ],
    quiz: [
      {
        q: 'Hammett sigma is defined from:',
        options: ['Benzoic acid ionization as reference', 'Alkane combustion heats', 'Atomic radii tables', 'Melting point trends'],
        answer: 0,
        explanation: 'Step 1: Take substituted benzoic acids. Step 2: Measure ionization shifts against hydrogen. Step 3: Freeze those shifts as sigma values.'
      },
      {
        q: 'A reaction with rho near +2 is helped by:',
        options: ['Strong donors like para methoxy', 'Strong withdrawers like para nitro', 'Bulky but neutral groups only', 'No substituent at all'],
        answer: 1,
        explanation: 'Step 1: Read positive rho as negative charge buildup. Step 2: Match withdrawers to that demand. Step 3: Rank nitro fastest.'
      },
      // PYQ-pattern — dithiane umpolung alkylation concept (rephrased)
      {
        q: 'Dithiane umpolung works because:',
        options: ['Sulfur stabilises the adjacent carbanion for alkylation', 'Oxygen blocks all reaction', 'The carbonyl becomes more electrophilic', 'Light is absorbed by sulfur'],
        answer: 0,
        explanation: 'Step 1: Deprotonate with $BuLi$. Step 2: Hold the anion next to two sulfurs. Step 3: Alkylate then unmask the carbonyl.'
      },
      {
        q: 'Which route pair is greenest by metrics?',
        options: ['Protection-heavy route with stoichiometric metals', 'Catalytic addition with full atom incorporation', 'Route venting large solvent waste', 'Route with throwaway leaving groups'],
        answer: 1,
        explanation: 'Step 1: Compute atom economy near full incorporation. Step 2: Check E factor stays low. Step 3: Prefer catalysis over stoichiometric waste.'
      }
    ]
  }
]
