import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse Chemistry — Chapter 8: GOC, Isomerism and Reaction Mechanisms
// Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const chemCh08Content: SectionContent[] = [
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: 'chem-ch8-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Charge delocalization and linear free energy relationships',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Hammett equation as a charge probe',
            body: 'The **Hammett theorem** states that substituent effects on rate or equilibrium follow $\\log(k/k_0) = \\rho\\sigma$ with substituent constant $\\sigma$ and reaction constant $\\rho$ reporting charge buildup. Positive $\\rho$ signals negative charge growth at the transition state stabilized by electron withdrawing groups, while negative $\\rho$ signals positive charge. Plotting measured rates against tabulated $\\sigma$ values thus reads the hidden charge map of a mechanism without observing the intermediate directly.'
          },
          {
            kind: 'derivation',
            heading: 'Resonance inductive and hyperconjugation ranking',
            body: 'Order electron displacement by range and demand: resonance delocalizes through pi overlap over several atoms, hyperconjugation donates from neighboring $C-H$ bonds into empty p orbitals, and induction fades with distance through sigma bonds. Carbocation stability $3$ degree over $2$ degree over $1$ degree follows from more $C-H$ donors plus stronger delocalization, while acidity trends track anion stabilization by the same ladder in reverse. Solvent and atom size modulate the order, which is why gas phase and solution rankings can invert for small hard anions.'
          },
          {
            kind: 'application',
            heading: 'Acid base predictions that survive the laboratory',
            body: 'Phenol acidity jumps with para nitro substitution because the anion charge delocalizes into the nitro group, while para methoxy donation destabilizes the same anion and weakens the acid. Amine basicity inverts with solvation since crowded conjugate acids hide from solvent, showing delocalization is necessary but not sufficient. Drug design exploits these shifts daily, tuning $pK_a$ by remote substitution to control solubility and membrane crossing without touching the pharmacophore.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'General organic chemistry explains reactivity from electron displacement rather than memorised facts. Inductive, resonance and hyperconjugation effects decide where charge lives and which intermediate survives. This section turns those effects into rankings for acids, bases and carbocations.',
    objectives: [
      'Rank inductive, resonance and hyperconjugation influence on charge stability',
      'Order carbocations, carbanions and radicals from structure alone',
      'Compare acid and base strength using delocalisation and atom effects'
    ],
    concepts: [
      {
        term: 'Inductive effect',
        kind: 'definition',
        statement: 'The **inductive effect** is electron pull through **sigma bonds** by **electronegativity difference**, written `+I for donors` such as $CH_3$ and `-I for acceptors` such as $NO_2$. Its strength falls sharply with **distance**, so $ClCH_2COOH$ is stronger than $ClCH_2CH_2COOH$ because `Cl is closer` to the acidic proton in the former.',
        detail: 'Alkyl groups donate by $+I$ in the order tertiary over secondary over primary. Halogens, nitro and cyano withdraw by $-I$. The effect operates in saturated chains where resonance cannot reach.'
      },
      {
        term: 'Resonance and mesomeric effect',
        kind: 'definition',
        statement: 'The **resonance effect** delocalises pi or lone pair electrons across **conjugated systems**, shown with `curved arrows` moving pairs into `+M donors` such as $OH$ and $NH_2$ or out toward `-M acceptors` such as $CHO$ and $NO_2$. Phenol is more acidic than cyclohexanol because **phenoxide charge** spreads into the ring as $C_6H_5O^-$ with several **resonance forms**.',
        detail: 'Resonance outweighs induction whenever conjugation exists. Aniline is a weaker base than ammonia because its nitrogen lone pair delocalises into the ring. Nitrobenzene deactivates strongly by $-M$ withdrawal.'
      },
      {
        term: 'Hyperconjugation',
        kind: 'insight',
        statement: 'The **hyperconjugation** effect donates sigma $C-H$ electrons into an adjacent **empty p orbital** or pi system, counted by the number of `alpha hydrogens`. More alpha hydrogens mean greater **alkene and carbocation stability**, so $(CH_3)_2C=CH_2$ beats $CH_3CH=CH_2$ which beats $CH_2=CH_2$ in the **substitution order**.',
        detail: 'Toluene shows shorter $C-C$ bond character and ortho para directing partly from hyperconjugation. Isotope substitution of $D$ for $H$ slightly reduces the effect. No alpha hydrogen means no hyperconjugation, as in $CT_3$ analogues and tert butyl cations without qualification.'
      },
      {
        term: 'Carbocation stability order',
        kind: 'law',
        statement: 'Carbocation stability follows **tertiary over secondary over primary over methyl** because of `+I plus hyperconjugation` from attached alkyls, written $(CH_3)_3C^+ > (CH_3)_2CH^+ > CH_3CH_2^+ > CH_3^+$. **Resonance stabilised** ions such as $C_6H_5CH_2^+$ and $CH_2=CH-CH_2^+$ jump ahead of simple alkyl ions owing to **charge delocalisation**.',
        detail: 'Electron withdrawing neighbours destabilise cations sharply. Cyclopropylmethyl and triphenylmethyl ions gain extra stabilisation. Rearrangements occur whenever a hydride or methyl shift reaches a more stable cation.'
      },
      {
        term: 'Acid base ranking logic',
        kind: 'method',
        statement: 'Acid strength is judged by **conjugate base stability**: the more delocalised or less charged the anion, the stronger the acid, using `compare A- forms` as the routine. Thus $CH_3COOH$ beats phenol which beats ethanol because **carboxylate resonance** with two equivalent $C-O$ bonds exceeds **phenoxide resonance** which exceeds **localised alkoxide** $RO^-$.',
        detail: 'Ortho effects, solvation and atom size modify the baseline: $HI > HBr > HCl > HF$ from bond strength and size despite electronegativity reversal. Base strength runs opposite to conjugate acid strength. Aromatic amines are weaker bases than aliphatic amines from lone pair delocalisation.'
      }
    ],
    derivations: [
      {
        title: 'Markovnikov Rule from Carbocation Stability',
        statement: 'Derivation of Markovnikov addition of $HBr$ to $RCH=CH_{2}$ giving $RCHBrCH_{3}$ through the more stable $RCH^+CH_{3}$ intermediate',
        prerequisites: [
          'Electrophilic addition with proton first and halide second',
          'Carbocation stability order $3$ degree over $2$ degree over $1$ degree',
          'Hyperconjugation and inductive donation by alkyl groups $R$'
        ],
        steps: [
          {
            label: 'Step 1: Protonate the double bond in two possible ways',
            formula: '$$RCH=CH_{2} + H^+ \\to RCH^+CH_{3} \\quad RCH=CH_{2} + H^+ \\to RCH_{2}CH_{2}^+$$',
            explanation: 'Proton addition to one end leaves the positive charge on the other carbon, so two regioisomeric cations are conceivable. The proton seeks electron density while the developing cation seeks stabilization. Comparing these two paths is necessary because product choice is decided at this branching.'
          },
          {
            label: 'Step 2: Compare secondary against primary cation stability',
            formula: '$$RCH^+CH_{3} > RCH_{2}CH_{2}^+ \\quad \\text{by hyperconjugation}$$',
            explanation: 'The more substituted cation enjoys donation from neighboring $C-H$ bonds and alkyl inductive release, spreading the deficit. More alpha hydrogens mean stronger hyperconjugation and lower energy. This gap is why the secondary ion forms faster and dominates under kinetic control.'
          },
          {
            label: 'Step 3: Capture the winning cation by bromide',
            formula: '$$RCH^+CH_{3} + Br^- \\to RCHBrCH_{3}$$',
            explanation: 'Halide attack on the cation is fast and downhill, so it preserves the selectivity established in the slow protonation. Bromide bonds to the positively charged carbon because opposite charges attract and orbital overlap is direct. The observed product therefore records which cation formed, not which capture is faster.'
          },
          {
            label: 'Step 4: Read the regioselectivity rule and rearrangement risk',
            formula: '$$RCH=CH_{2} + HBr \\to RCHBrCH_{3}$$',
            explanation: 'Proton adds to the less substituted carbon so that the more stable cation carries the charge, which places $Br$ on the more substituted carbon. This pattern is the Markovnikov rule restated as cation stability selection. Whenever a hydride shift can reach an even more stable cation, rearranged products appear for the same reason.'
          }
        ],
        result: 'Addition $RCH=CH_{2} + HBr \\to RCHBrCH_{3}$ follows because the path through $RCH^+CH_{3}$ is lower in energy than the path through $RCH_{2}CH_{2}^+$.'
      }
    ],
    figures: [
      {
        caption: 'Carbocation stability rises with alkyl donation as $3^\circ > 2^\circ > 1^\circ > CH_3^+$: more $\alpha$-H means stronger hyperconjugation into the empty $p$ orbital.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carbocation stability ladder from methyl to tert-butyl"><line x1="90" y1="40" x2="90" y2="310" stroke="currentColor" stroke-width="2"/><polygon points="90,28 84,42 96,42" fill="currentColor" stroke="none"/><text x="28" y="60" font-size="14" fill="currentColor" font-family="sans-serif">energy</text><line x1="150" y1="90" x2="310" y2="90" stroke="currentColor" stroke-width="3"/><text x="320" y="95" font-size="14" fill="currentColor" font-family="sans-serif">CH3+ methyl, 0 alpha-H</text><line x1="150" y1="150" x2="310" y2="150" stroke="currentColor" stroke-width="3"/><text x="320" y="155" font-size="14" fill="currentColor" font-family="sans-serif">CH3CH2+ primary, 3 alpha-H</text><line x1="150" y1="210" x2="310" y2="210" stroke="currentColor" stroke-width="3"/><text x="320" y="215" font-size="14" fill="currentColor" font-family="sans-serif">(CH3)2CH+ secondary, 6 alpha-H</text><line x1="150" y1="270" x2="310" y2="270" stroke="currentColor" stroke-width="3"/><text x="320" y="275" font-size="14" fill="currentColor" font-family="sans-serif">(CH3)3C+ tertiary, 9 alpha-H</text><circle cx="200" cy="318" r="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="222" y="323" font-size="13" fill="currentColor" font-family="sans-serif">empty p accepts C-H sigma donation</text><path d="M120,296 Q200,272 280,296" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="120" y="345" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">+I + hyperconjugation lower the cation energy</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Rank acids from effects',
        problem: 'Rank ethanol, phenol and acetic acid by acidity and justify with conjugate base structures.',
        steps: [
          { label: 'Step 1', text: 'Draw conjugates with `charge location`: $CH_3CH_2O^-$ localised, $C_6H_5O^-$ ring delocalised, $CH_3COO^-$ delocalised over two oxygens.' },
          { label: 'Step 2', text: 'Compare delocalisation:\n```text\nCH3COO- : two equivalent O, best spread\nC6H5O-  : ring spread, less effective\nCH3CH2O-: no spread, least stable\norder: CH3COOH > phenol > ethanol\n```\nIn symbols $CH_3COOH > C_6H_5OH > C_2H_5OH$.' },
          { label: 'Step 3', text: 'Stronger acid means weaker conjugate base, so basicity reverses: $CH_3CH_2O^- > C_6H_5O^- > CH_3COO^-$.' }
        ],
        result: 'Acidity $CH_3COOH > C_6H_5OH > C_2H_5OH$ from carboxylate over phenoxide over alkoxide stabilisation.'
      },
      {
        title: 'Rank carbocations',
        problem: 'Order $CH_3^+$, $CH_3CH_2^+$, $(CH_3)_2CH^+$, $(CH_3)_3C^+$ and $C_6H_5CH_2^+$ by stability.',
        steps: [
          { label: 'Step 1', text: 'Count `alpha hydrogens` plus resonance: benzyl has ring delocalisation, tert butyl has nine alpha hydrogens, isopropyl six, ethyl three, methyl zero.' },
          { label: 'Step 2', text: 'Apply the alkyl ladder:\n```text\nC6H5CH2+ (resonance) > (CH3)3C+ > (CH3)2CH+ > CH3CH2+ > CH3+\n```\nSo $C_6H_5CH_2^+ > (CH_3)_3C^+ > (CH_3)_2CH^+ > CH_3CH_2^+ > CH_3^+$. ' },
          { label: 'Step 3', text: 'Resonance beats hyperconjugation here, which is why benzyl leads despite fewer alkyls. Any rearrangement toward this order is favoured.' }
        ],
        result: 'Stability $C_6H_5CH_2^+ > (CH_3)_3C^+ > (CH_3)_2CH^+ > CH_3CH_2^+ > CH_3^+$.'
      }
    ],
    keyTakeaways: [
      'Induction acts through sigma bonds and fades with distance.',
      'Resonance dominates when conjugation allows charge spreading.',
      'Hyperconjugation counts alpha hydrogens for alkenes and cations.',
      'Judge acids by conjugate base stability and bases by lone pair availability.'
    ],
    quiz: [
      {
        q: 'Which acid is strongest among $ClCH_2COOH$, $ClCH_2CH_2COOH$ and $CH_3COOH$?',
        options: [`$CH_3COOH$`, `$ClCH_2CH_2COOH$`, `$ClCH_2COOH$`, 'All equal'],
        answer: 2,
        explanation: 'Step 1: Chlorine withdraws by $-I$. Step 2: The effect weakens with distance. Step 3: Closest chlorine gives strongest acid, so $ClCH_2COOH$ leads.'
      },
      // PYQ-pattern: carbocation stability ranking (rephrased, values changed)
      {
        q: 'Which carbocation is most stable?',
        options: ['`$(CH_3)_3C^+$`', '`$CH_3CH_2^+$`', '`$CH_3^+$`', '`$(CH_3)_2CH^+$`'],
        answer: 0,
        explanation: 'Step 1: Alkyls donate by $+I$ and hyperconjugation. Step 2: More alkyls mean more alpha hydrogens. Step 3: Tertiary has nine and is most stable.'
      },
      {
        q: 'Why is aniline a weaker base than cyclohexylamine?',
        options: ['`Aniline has more hydrogens`', '`Nitrogen lone pair delocalises into the ring`', '`Ring increases basicity always`', '`Aniline is aliphatic`'],
        answer: 1,
        explanation: 'Step 1: Aniline nitrogen conjugates with benzene. Step 2: The lone pair spreads into the ring. Step 3: Less pair availability means weaker base.'
      },
      {
        q: 'Which alkene is most stable among ethene, propene and 2-methylpropene?',
        options: ['Ethene', 'Propene', 'All equal', '2-methylpropene'],
        answer: 3,
        explanation: 'Step 1: Stability rises with alkyl substitution. Step 2: Count hyperconjugating structures. Step 3: Most substituted 2-methylpropene wins.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.2
  {
    sectionId: 'chem-ch8-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Unsaturation index and tautomeric equilibria beyond counting',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Degree of unsaturation counts rings plus pi bonds',
            body: 'The **unsaturation theorem** gives $DBE = C - H/2 + N/2 + 1$ for formulas containing carbon hydrogen nitrogen and halogen treated as hydrogen, counting each ring or pi bond as one unit. A formula with $DBE = 4$ therefore signals benzene like content or equivalent combinations of rings and multiple bonds before any spectrum is read. Heteroatoms with fixed valence adjust the count, and the theorem fails only when elements with variable valence enter without correction.'
          },
          {
            kind: 'derivation',
            heading: 'Keto enol position from bond strengths and solvation',
            body: 'Compare $C=O$ plus $C-H$ against $C=C$ plus $O-H$ to place the keto enol equilibrium, with conjugation and hydrogen bonding tilting the balance toward the enol in beta dicarbonyls. Polar protic media stabilize the more polar keto form while nonpolar surroundings and intramolecular hydrogen bonds favor the enol, so the same compound switches dominant tautomer with solvent. Nuclear magnetic resonance integration of the enol vinyl signal against the keto methylene signal then measures the equilibrium constant directly in each medium.'
          },
          {
            kind: 'example',
            heading: 'Assigning isomers from formula plus tautomer clues',
            body: 'A formula with $DBE = 2$ and a positive enol test narrows candidates to keto enol pairs with one ring or two pi equivalents rather than open chain saturated alcohols. Chain versus position versus functional isomerism is then decided by fragmentation and shift patterns, with metamerism distinguished by different carbonyl surroundings. The graduate habit is to let the index prune the forest before spectra choose the tree, cutting hours of trial structures to a short list.'
          }
        ]
      }
    ],
    readingTime: 7,
    intro: 'Compounds with the same molecular formula can differ in connectivity, and naming those differences is the job of structural isomerism. Degree of unsaturation tells how many rings or pi bonds any formula must contain. This section systematises chain, position, functional and metamerism puzzles.',
    objectives: [
      'Compute degree of unsaturation and list implied rings or pi bonds',
      'Distinguish chain, position, functional and metamerism cases',
      'Assign tautomer favouring from structure and medium cues'
    ],
    concepts: [
      {
        term: 'Degree of unsaturation',
        kind: 'method',
        statement: 'The **degree of unsaturation** counts rings plus pi bonds as `DU = C - H/2 + N/2 + 1` with halogens counted as **hydrogen equivalents** in $C_cH_hN_nX_x$. For $C_4H_8O$ the value is $DU = 4 - \\frac{8}{2} + 1$ which equals $1$, meaning one **ring or double bond** must appear.',
        detail: 'Oxygen and sulphur do not change the count. Benzene has $DU = 4$ from one ring plus three pi bonds. Use the result to reject impossible structures before drawing.'
      },
      {
        term: 'Chain isomerism',
        kind: 'definition',
        statement: 'Chain isomers share the formula but differ in the **carbon skeleton**, such as `n-butane versus isobutane` for $C_4H_{10}$. Branching lowers **boiling point** and raises **octane character**, so $CH_3CH_2CH_2CH_3$ boils higher than $(CH_3)_3CH$ analogues of the same mass.',
        detail: 'Pentane has three chain forms, hexane five. Skeleton differences change surface area and packing. No functional group moves in this class.'
      },
      {
        term: 'Position isomerism',
        kind: 'definition',
        statement: 'Position isomers keep the skeleton and functional group but move its **location or orientation**, such as `1-propanol versus 2-propanol` or `ortho versus para` disubstituted benzenes. The formula $C_3H_8O$ already splits into two alcohols plus an ether by **position plus function** interplay.',
        detail: 'Double bond shift in butene and substituent walk on rings are classic cases. Physical constants differ modestly while reactions differ sharply. Numbering follows lowest locants.'
      },
      {
        term: 'Functional isomerism',
        kind: 'definition',
        statement: '**Functional isomers** carry different functional groups, such as `alcohol versus ether` for $C_2H_6O$ as $CH_3CH_2OH$ versus $CH_3OCH_3$, or `aldehyde versus ketone` and `acid versus ester` pairs. They belong to different **homologous series** and give different **classification tests**.',
        detail: 'Glucose and fructose are functional isomers despite both being sugars. Infrared carbonyl position and solubility behaviour separate the classes quickly. Molecular formula alone never fixes the group.'
      },
      {
        term: 'Metamerism and tautomerism',
        kind: 'insight',
        statement: '**Metamers** differ in alkyl groups around a **bridging functional group**, such as `diethyl ether versus methyl propyl ether` with the same $C_4H_{10}O$ ether core. **Tautomers** interconvert by **proton shift**, classically `keto enol` pairs such as $CH_3COCH_3 \\rightleftharpoons CH_2=C(OH)CH_3$ favoured toward keto except in **beta dicarbonyls**.',
        detail: 'Ethers, ketones, esters and secondary amines show metamerism. Enol content rises with conjugation, hydrogen bonding and polar media. Tautomers sit in mobile equilibrium, unlike fixed structural isomers.'
      }
    ],
    figures: [
      {
        caption: 'Degree of unsaturation $DU = C - H/2 + N/2 + 1$ counts rings plus pi bonds, so $C_4H_{10}$ with $DU = 0$ splits into chain isomers n-butane and isobutane.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Degree of unsaturation and chain isomers of butane"><text x="40" y="40" font-size="15" fill="currentColor" font-family="sans-serif">DU = C - H/2 + N/2 + 1  (X counts as H)</text><line x1="40" y1="55" x2="680" y2="55" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="40" y="90" font-size="14" fill="currentColor" font-family="sans-serif">n-butane (straight chain)</text><circle cx="70" cy="130" r="16" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="130" r="16" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="190" cy="130" r="16" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="250" cy="130" r="16" fill="none" stroke="currentColor" stroke-width="2"/><line x1="86" y1="130" x2="114" y2="130" stroke="currentColor" stroke-width="2"/><line x1="146" y1="130" x2="174" y2="130" stroke="currentColor" stroke-width="2"/><line x1="206" y1="130" x2="234" y2="130" stroke="currentColor" stroke-width="2"/><text x="60" y="170" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.8">C - C - C - C</text><text x="40" y="210" font-size="14" fill="currentColor" font-family="sans-serif">isobutane (branched chain)</text><circle cx="130" cy="250" r="16" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="290" r="16" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="190" cy="290" r="16" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="130" cy="310" r="0" fill="none" stroke="currentColor" stroke-width="1"/><line x1="118" y1="262" x2="84" y2="280" stroke="currentColor" stroke-width="2"/><line x1="142" y1="262" x2="176" y2="280" stroke="currentColor" stroke-width="2"/><text x="260" y="260" font-size="13" fill="currentColor" font-family="sans-serif">same formula C4H10,</text><text x="260" y="280" font-size="13" fill="currentColor" font-family="sans-serif">branching lowers</text><text x="260" y="300" font-size="13" fill="currentColor" font-family="sans-serif">boiling point</text><rect x="420" y="110" width="260" height="180" fill="none" stroke="currentColor" stroke-width="2"/><text x="440" y="140" font-size="14" fill="currentColor" font-family="sans-serif">C4H8O: DU = 4 - 8/2 + 1 = 1</text><text x="440" y="165" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.8">one ring or one pi bond</text><text x="440" y="195" font-size="13" fill="currentColor" font-family="sans-serif">alcohol vs ether:</text><text x="440" y="215" font-size="13" fill="currentColor" font-family="sans-serif">CH3CH2OH vs CH3OCH3</text><text x="440" y="245" font-size="13" fill="currentColor" font-family="sans-serif">same atoms, different</text><text x="440" y="265" font-size="13" fill="currentColor" font-family="sans-serif">functional group</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'DU and structural possibilities',
        problem: 'Formula $C_4H_8O$ is given. Compute DU and list which functional classes remain possible.',
        steps: [
          { label: 'Step 1', text: 'Apply `DU formula`: $DU = 4 - \\frac{8}{2} + 1$ which equals $1$.' },
          { label: 'Step 2', text: 'Interpret one unsaturation:\n```text\nDU = 1 => one C=C, one C=O, or one ring\nclasses: alkene alcohol, cyclic alcohol, aldehyde, ketone\nacids and esters excluded (need DU >= 1 plus O2)\n```\nSo $C_4H_8O$ fits butanal, butanone, crotyl alcohol and cyclic isomers.' },
          { label: 'Step 3', text: 'Further split needs tests: carbonyl reagents catch aldehydes and ketones while bromine water catches alkenes.' }
        ],
        result: '$DU = 1$; aldehyde, ketone, unsaturated alcohol and cyclic alcohol classes are possible.'
      },
      {
        title: 'Classify an isomer pair',
        problem: 'Classify the pair $CH_3CH_2OCH_2CH_3$ and $CH_3OCH_2CH_2CH_3$ and the pair $CH_3COCH_3$ and $CH_3CH_2CHO$.',
        steps: [
          { label: 'Step 1', text: 'Check skeletons with `same group test`: both ethers keep $C-O-C$ but alkyl sides differ as ethyl ethyl versus methyl propyl.' },
          { label: 'Step 2', text: 'Assign:\n```text\nether pair: metamers (alkyls around O differ)\nC3H6O pair: functional isomers (ketone vs aldehyde)\n```\nSo first pair shows metamerism, second shows functional isomerism.' },
          { label: 'Step 3', text: 'Confirm by reactions: metamers behave similarly while acetone versus propanal differ in Tollens and iodoform response.' }
        ],
        result: 'Ether pair are metamers; acetone and propanal are functional isomers.'
      }
    ],
    keyTakeaways: [
      'DU counts rings plus pi bonds with halogens as hydrogens.',
      'Chain changes skeleton; position moves the same group.',
      'Functional changes the group and the test response.',
      'Metamers flank a bridge differently; tautomers interconvert by H shift.'
    ],
    quiz: [
      {
        q: 'What is DU for $C_4H_8O$?',
        options: ['Zero', 'One', 'Two', 'Four'],
        answer: 1,
        explanation: 'Step 1: Use $DU = C - H/2 + 1$. Step 2: Insert $4 - 4 + 1$. Step 3: Obtain one ring or pi bond.'
      },
      {
        q: '$CH_3CH_2OH$ and $CH_3OCH_3$ are what kind of isomers?',
        options: ['Chain', 'Position', 'Functional', 'Identical'],
        answer: 2,
        explanation: 'Step 1: One is an alcohol and one an ether. Step 2: Functional group differs. Step 3: Hence functional isomers.'
      },
      // PYQ-pattern: metamer versus position classification (rephrased, values changed)
      {
        q: '$CH_3CH_2OCH_2CH_3$ and $CH_3OCH_2CH_2CH_3$ are what?',
        options: ['Position isomers', 'Tautomers', 'Enantiomers', 'Metamers'],
        answer: 3,
        explanation: 'Step 1: Both are ethers with the same core. Step 2: Alkyl groups around oxygen differ. Step 3: This is metamerism.'
      },
      {
        q: 'Which factor most raises enol content?',
        options: ['Beta dicarbonyl conjugation and H bonding', 'Saturated alkyl chain alone', 'Dilute nonpolar medium always', 'Removing alpha hydrogens'],
        answer: 0,
        explanation: 'Step 1: Enols gain from conjugation. Step 2: Intramolecular hydrogen bonding stabilises the enol. Step 3: Beta dicarbonyls show high enol share.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.3
  {
    sectionId: 'chem-ch8-s3',
    readingTime: 9,
    intro: 'Stereo isomers share connectivity but differ in spatial arrangement and cannot interconvert without breaking bonds. Geometrical isomerism needs restricted rotation plus two different groups at each end. Optical isomerism needs chirality, best tested with mirror images and R S assignment.',
    objectives: [
      'Test alkenes and rings for E Z and cis trans possibility',
      'Assign R S from priority order with correctly placed lowest group',
      'Distinguish enantiomers, diastereomers, meso and racemic samples'
    ],
    concepts: [
      {
        term: 'Cis trans conditions',
        kind: 'definition',
        statement: 'Geometrical isomerism needs **restricted rotation** plus **two different groups** at each end, classically `C=C or ring` frameworks. In $CH_3CH=CHCH_3$ the **cis form** holds both $CH_3$ on one side while the **trans form** opposes them, giving different **dipole and stability**.',
        detail: 'Molecules such as $CH_2=CHCH_3$ fail because one carbon carries two hydrogens. Rings show cis trans by up versus down positions. Trans alkenes are usually more stable from reduced crowding.'
      },
      {
        term: 'E Z notation',
        kind: 'notation',
        statement: 'The **E Z system** ranks the two groups at each alkene carbon by **Cahn Prelog priority** and labels `Z for same side` high groups versus `E for opposite` high groups. For $CH_3CH=C(Cl)CH_3$ priorities decide the tag where **cis trans words** become ambiguous.',
        detail: 'Priority follows atomic number, then substituent lists, then duplicate atom expansion. Isotopes rank heavier first. E Z works for tri and tetra substituted alkenes where cis trans labels fail.'
      },
      {
        term: 'Chirality test',
        kind: 'law',
        statement: 'A molecule is **chiral** when its mirror image is **nonsuperimposable**, most simply from a carbon with **four different groups** called a `stereocentre`. The test `mirror versus overlap` decides: $CH_3CH(Cl)Br$ is chiral while $CH_2(Cl)Br$ analogues with two identical groups are **achiral**.',
        detail: 'Absence of improper symmetry (mirror plane or inversion centre) is the general criterion. Allenes and biphenyls can be chiral without a stereocentre from restricted rotation. Chirality enables optical activity.'
      },
      {
        term: 'R S assignment',
        kind: 'method',
        statement: 'Assign **R S** by ranking four groups `1 to 4`, placing `4 to the back`, then tracing `1 to 2 to 3`: clockwise is **R** and anticlockwise is **S**. For lactic acid $CH_3CH(OH)COOH$ the order $OH > COOH > CH_3 > H$ with $H$ behind sets the observed **configuration tag**.',
        detail: 'If the lowest group points forward, reverse the reading. Multiple centres get one tag each, such as $2R,3R$. Wedge dash drawings must be read with solid forward and dashed back.'
      },
      {
        term: 'Meso racemic and diastereomers',
        kind: 'insight',
        statement: '**Enantiomers** are mirror pairs with identical properties except **sign of rotation** and chiral interactions, while **diastereomers** differ elsewhere and have different **physical constants**. A **meso form** has stereocentres but a **plane of symmetry** making it achiral, and a **racemic mixture** holds equal enantiomers with **zero net rotation** as `R plus S equal`.',
        detail: 'Tartaric acid shows meso versus optically active pair behaviour. Resolution separates racemates with chiral agents. Diastereomers separate by ordinary distillation or crystallisation, enantiomers do not.'
      }
    ],
    figures: [
      {
        caption: 'Cis 2-butene holds both $CH_3$ on one side while trans holds them opposite; a carbon with four different groups is chiral and reads $R$ clockwise versus $S$ anticlockwise.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="cis trans alkenes and chiral mirror pair"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">cis-2-butene (same side)</text><line x1="60" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="4"/><line x1="60" y1="100" x2="40" y2="70" stroke="currentColor" stroke-width="2"/><line x1="60" y1="100" x2="40" y2="130" stroke="currentColor" stroke-width="2"/><line x1="180" y1="100" x2="200" y2="70" stroke="currentColor" stroke-width="2"/><line x1="180" y1="100" x2="200" y2="130" stroke="currentColor" stroke-width="2"/><text x="28" y="160" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.8">CH3 both up: cis</text><text x="250" y="40" font-size="14" fill="currentColor" font-family="sans-serif">trans-2-butene (opposite)</text><line x1="270" y1="100" x2="390" y2="100" stroke="currentColor" stroke-width="4"/><line x1="270" y1="100" x2="250" y2="70" stroke="currentColor" stroke-width="2"/><line x1="270" y1="100" x2="250" y2="130" stroke="currentColor" stroke-width="2"/><line x1="390" y1="100" x2="410" y2="70" stroke="currentColor" stroke-width="2"/><line x1="390" y1="100" x2="410" y2="130" stroke="currentColor" stroke-width="2"/><text x="258" y="160" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.8">CH3 opposite: trans</text><line x1="40" y1="190" x2="680" y2="190" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="40" y="220" font-size="14" fill="currentColor" font-family="sans-serif">chiral centre: four different groups</text><circle cx="140" cy="280" r="8" fill="currentColor" stroke="none"/><line x1="140" y1="280" x2="140" y2="235" stroke="currentColor" stroke-width="2"/><line x1="140" y1="280" x2="100" y2="305" stroke="currentColor" stroke-width="2"/><line x1="140" y1="280" x2="180" y2="305" stroke="currentColor" stroke-width="2"/><line x1="140" y1="280" x2="140" y2="325" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><text x="90" y="345" font-size="13" fill="currentColor" font-family="sans-serif">1-2-3 clockwise = R</text><circle cx="400" cy="280" r="8" fill="currentColor" stroke="none"/><line x1="400" y1="280" x2="400" y2="235" stroke="currentColor" stroke-width="2"/><line x1="400" y1="280" x2="360" y2="305" stroke="currentColor" stroke-width="2"/><line x1="400" y1="280" x2="440" y2="305" stroke="currentColor" stroke-width="2"/><line x1="400" y1="280" x2="400" y2="325" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><text x="350" y="345" font-size="13" fill="currentColor" font-family="sans-serif">mirror image: S, non-superposable</text><path d="M250,280 Q270,280 270,260 Q270,240 290,240" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="460" y="285" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.8">meso has plane</text><text x="460" y="305" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.8">racemic is 1:1 R+S</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'E Z versus cis trans decision',
        problem: 'Decide geometrical isomerism for $CH_3CH=CHCH_3$ and $CH_3C(Cl)=C(Cl)CH_3$, then label the latter isomer with high groups opposed.',
        steps: [
          { label: 'Step 1', text: 'Apply `two different groups per carbon`: both alkenes pass, so both show stereoisomers. $CH_3CH=CHCH_3$ suits cis trans language.' },
          { label: 'Step 2', text: 'Rank the dichloro case:\n```text\nleft C: Cl > CH3, right C: Cl > CH3\nhigh groups opposed => E tag\n```\nSo the opposed form is $E$-$CH_3C(Cl)=C(Cl)CH_3$.' },
          { label: 'Step 3', text: 'Stability and polarity differ: the $E$ trans-like form is less polar and usually more stable than the $Z$ form.' }
        ],
        result: 'Both alkenes show geometrical isomers; opposed high groups give the E tag.'
      },
      {
        title: 'R S assignment walkthrough',
        problem: 'Assign R S to $CH_3CH(OH)COOH$ drawn with $OH$ left, $COOH$ top, $CH_3$ right and $H$ on dash behind.',
        steps: [
          { label: 'Step 1', text: 'Rank with `priority order`: $OH$ as one, $COOH$ as two, $CH_3$ as three, $H$ as four by atomic number logic.' },
          { label: 'Step 2', text: 'Trace one to three:\n```text\n1(OH) -> 2(COOH) -> 3(CH3)\nobserved turn: clockwise\nH behind => as read\n```\nClockwise reads R.' },
          { label: 'Step 3', text: 'If $H$ had been on wedge forward, the reading would reverse to S. Mirror image of this centre would be S.' }
        ],
        result: 'The drawn centre is R; its mirror image is S.'
      }
    ],
    keyTakeaways: [
      'Restricted rotation plus two different groups enables geometrical pairs.',
      'E Z uses priorities; cis trans is only for simple disubstituted cases.',
      'R S needs lowest group behind, then clockwise R or anticlockwise S.',
      'Meso is achiral despite centres; racemic is equal R plus S mixture.'
    ],
    quiz: [
      {
        q: 'Which alkene shows geometrical isomerism?',
        options: ['`$CH_2=CHCH_3$`', '`$CH_2=C(CH_3)_2$`', '`$CH_3CH=CHCH_3$`', '`$CH_2=CH_2$`'],
        answer: 2,
        explanation: 'Step 1: Each alkene carbon needs two different groups. Step 2: Only $CH_3CH=CHCH_3$ satisfies both ends. Step 3: Hence only it shows the pair.'
      },
      {
        q: 'High priority groups on the same side give which tag?',
        options: ['Z', 'E', 'R', 'Meso'],
        answer: 0,
        explanation: 'Step 1: Rank groups at each carbon. Step 2: Same side high groups mean Zusammen. Step 3: The tag is Z.'
      },
      // PYQ-pattern: meso versus racemic identification (rephrased, values changed)
      {
        q: 'A compound has two stereocentres but a plane of symmetry. What is it?',
        options: ['Chiral enantiomer', 'Meso achiral form', 'Racemic mixture', 'Geometrical isomer'],
        answer: 1,
        explanation: 'Step 1: Stereocentres suggest possible chirality. Step 2: A symmetry plane cancels rotation internally. Step 3: The form is meso and achiral.'
      },
      {
        q: 'Tracing 1 to 2 to 3 is clockwise with group 4 behind. What is the tag?',
        options: ['S', 'E', 'Cis', 'R'],
        answer: 3,
        explanation: 'Step 1: Confirm lowest group is behind. Step 2: Read the turn direction. Step 3: Clockwise means R.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.4
  {
    sectionId: 'chem-ch8-s4',
    readingTime: 10,
    intro: 'Curved arrows turn memorised conversions into stepwise bond making and breaking. Substitution and elimination compete through shared intermediates, and addition to alkenes follows carbocation stability. This section builds the decision tree that picks SN1, SN2, E1 or E2 and the addition rules.',
    objectives: [
      'Choose SN1, SN2, E1 or E2 from substrate, nucleophile, base and medium',
      'Draw arrow flow for carbocation, backside and elimination steps',
      'Apply Markovnikov and peroxide rules to addition products'
    ],
    concepts: [
      {
        term: 'SN1 profile',
        kind: 'law',
        statement: 'The **SN1 reaction** runs by **two steps** through a **carbocation**: slow ionisation `R-X \\to R+ + X-` then fast capture, with rate `rate = k[RX]` and **racemisation** at a planar centre. Tertiary halides in **polar protic media** with **weak nucleophiles** favour this path, such as $(CH_3)_3CBr \\to (CH_3)_3C^+$ then product.',
        detail: 'Rearrangements occur when a shift gives a stabler cation. Polar protic solvents stabilise ions. Rate depends only on substrate concentration.'
      },
      {
        term: 'SN2 profile',
        kind: 'law',
        statement: 'The **SN2 reaction** is a single **backside attack** with **inversion** as `Nu- + R-X \\to [Nu--R--X] \\to Nu-R + X-`, obeying `rate = k[RX][Nu-]` and favouring **primary halides** with **strong nucleophiles** in **polar aprotic media**. The transition state shows **pentacoordinate carbon** with partial bonds to both entrant and leaver.',
        detail: 'Steric crowding kills SN2, so tertiary halides rarely react this way. Aprotic media such as acetone free the nucleophile. Chiral centres invert cleanly.'
      },
      {
        term: 'E1 E2 decision',
        kind: 'method',
        statement: 'Elimination removes **H and X** to form a double bond, with **E1 via carbocation** in `weak base plus heat` versus **E2 concerted** in `strong bulky base` such as $C_2H_5O^-$ or $(CH_3)_3CO^-$. The **Zaitsev rule** picks the more substituted alkene, while bulky bases give the **Hofmann least substituted** product by attacking the **accessible hydrogen**.',
        detail: 'E1 competes directly with SN1 from the same cation. E2 needs anti periplanar geometry. Tertiary halides eliminate readily; primary halides need strong base.'
      },
      {
        term: 'Decision tree',
        kind: 'insight',
        statement: 'The **substitution elimination tree** asks substrate first, then strength, then medium: `tertiary plus weak nucleophile` goes SN1 or E1 with heat favouring elimination, `primary plus strong nucleophile` goes SN2, and `strong base` diverts to E2. **Protic media** favour ions while **aprotic media** favour concerted attack.',
        detail: 'Secondary halides are the borderline case decided by nucleophile versus base character and temperature. Small strong bases can substitute, bulky strong bases eliminate. Memorise the tree, not isolated cases.'
      },
      {
        term: 'Electrophilic addition rules',
        kind: 'law',
        statement: '**Markovnikov addition** places the proton on the **less substituted carbon** so the more stable **carbocation** forms, giving `Br to more substituted` in $CH_3CH=CH_2 + HBr \\to CH_3CHBrCH_3$. **Peroxide effect** reverses only $HBr$ addition by a **radical chain** to give `Br to less substituted` as $CH_3CH_2CH_2Br$.',
        detail: 'Oxymercuration gives Markovnikov alcohol without rearrangement, hydroboration gives anti Markovnikov alcohol. Ozonolysis cleaves the double bond for structure proof. Carbocation shifts can relocate the product.'
      }
    ],
    figures: [
      {
        caption: '$SN1$ passes through a carbocation with two barriers and $rate = k[RX]$, while $SN2$ crosses one backside-attack barrier with $rate = k[RX][Nu]$ and inversion.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SN1 double barrier versus SN2 single barrier energy profiles"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">SN1: two humps via R+</text><line x1="40" y1="270" x2="320" y2="270" stroke="currentColor" stroke-width="1.5"/><path d="M50,260 Q110,260 130,180 Q150,100 190,160 Q230,220 250,170 Q270,120 310,200 L310,270" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="120" y="130" font-size="12" fill="currentColor" font-family="sans-serif">TS1 slow</text><text x="230" y="140" font-size="12" fill="currentColor" font-family="sans-serif">R+ valley</text><text x="40" y="300" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">R-X -&gt; R+ -&gt; product</text><text x="400" y="40" font-size="14" fill="currentColor" font-family="sans-serif">SN2: one hump, inversion</text><line x1="390" y1="270" x2="680" y2="270" stroke="currentColor" stroke-width="1.5"/><path d="M400,260 Q480,260 510,140 Q540,60 570,140 Q600,220 660,250 L660,270" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="495" y="100" font-size="12" fill="currentColor" font-family="sans-serif">[Nu--R--X] single TS</text><text x="390" y="300" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">Nu + R-X -&gt; product</text><line x1="360" y1="40" x2="360" y2="310" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="80" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">tertiary + polar protic favours SN1; primary + strong Nu favours SN2</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Choose substitution path',
        problem: 'Predict SN1 versus SN2 for $(CH_3)_3CBr$ with weak aqueous nucleophile versus $CH_3CH_2Br$ with strong $OH^-$ in acetone.',
        steps: [
          { label: 'Step 1', text: 'Read substrate with `crowding test`: tertiary ionises well but blocks backside, primary invites backside but ionises poorly.' },
          { label: 'Step 2', text: 'Match conditions:\n```text\n(CH3)3CBr + weak Nu, protic => SN1 via (CH3)3C+\nCH3CH2Br + strong Nu, aprotic => SN2 with inversion\n```\nSo $rate = k[RX]$ for the first and $rate = k[RX][Nu^-]$ for the second.' },
          { label: 'Step 3', text: 'Stereochemistry differs: tertiary path racemises partially while primary path inverts fully at carbon.' }
        ],
        result: 'Tertiary with weak nucleophile gives SN1; primary with strong nucleophile gives SN2.'
      },
      {
        title: 'Addition product prediction',
        problem: 'Predict products for $CH_3CH=CH_2$ with $HBr$ alone versus $HBr$ with peroxides.',
        steps: [
          { label: 'Step 1', text: 'Form the more stable cation without peroxide: proton adds to terminal carbon giving `secondary cation` $CH_3CH^+CH_3$.' },
          { label: 'Step 2', text: 'Capture versus radical:\n```text\nHBr alone: Br- captures cation => CH3CHBrCH3\nHBr + ROOR: Br. adds first => CH3CH2CH2Br\n```\nIn symbols $CH_3CH=CH_2 + HBr \\to CH_3CHBrCH_3$ normally.' },
          { label: 'Step 3', text: 'Peroxide path is radical and applies only to $HBr$, not to $HCl$ or $HI$, which stay Markovnikov.' }
        ],
        result: 'Normal $CH_3CHBrCH_3$; peroxide $CH_3CH_2CH_2Br$ for $HBr$ only.'
      }
    ],
    keyTakeaways: [
      'SN1 is two step via cation; SN2 is one step with inversion.',
      'E1 shares the cation; E2 is concerted with anti geometry.',
      'Tree uses substrate, nucleophile strength, base bulk and medium.',
      'Markovnikov follows cation stability; peroxide flips HBr only.'
    ],
    quiz: [
      // PYQ-pattern: SN1 versus SN2 choice by substrate and medium (rephrased, values changed)
      {
        q: 'Which set favours SN1?',
        options: ['Tertiary halide with weak nucleophile in aqueous medium', 'Primary halide with strong nucleophile in acetone', 'Methyl halide with bulky base', 'Primary halide on heating with weak base'],
        answer: 0,
        explanation: 'Step 1: SN1 needs stable cations. Step 2: Tertiary plus ionising medium supplies them. Step 3: Weak nucleophiles let ionisation lead.'
      },
      {
        q: 'SN2 at a chiral centre gives what stereochemistry?',
        options: ['Retention', 'Inversion', 'Racemisation fully', 'No reaction'],
        answer: 1,
        explanation: 'Step 1: Attack occurs from the backside. Step 2: The configuration flips. Step 3: Product shows inversion.'
      },
      {
        q: 'Bulky $(CH_3)_3CO^-$ on a halide mainly gives what?',
        options: ['SN2 substitution', 'E1 to most substituted alkene always', 'E2 Hofmann elimination to least substituted alkene', 'No reaction'],
        answer: 2,
        explanation: 'Step 1: Bulk hinders substitution attack. Step 2: Accessible hydrogens are removed instead. Step 3: Least substituted Hofmann alkene dominates.'
      },
      {
        q: '$CH_3CH=CH_2 + HBr$ with peroxides gives what?',
        options: [`$CH_3CHBrCH_3$`, `$CH_3CH_2CH_2OH$`, `$CH_2BrCH_2CH_2Br$`, `$CH_3CH_2CH_2Br$`],
        answer: 3,
        explanation: 'Step 1: Peroxide starts a bromine radical chain. Step 2: Bromine adds first to give the stabler carbon radical. Step 3: Product is anti Markovnikov $CH_3CH_2CH_2Br$.'
      }
    ]
  }
]
