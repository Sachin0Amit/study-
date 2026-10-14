import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 26: Rearrangements Radicals and Organometallics (Clayden 2e foci 36, 40)
// Sections 26.1 - 26.4. Master study content in Clayden language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh26Content: SectionContent[] = [
  // ---------------------------------------------------------------- 26.1
  {
    sectionId: 'chem-ch26-s1',
    readingTime: 10,
    intro: 'Clayden groups rearrangements by electron deficient carbon, nitrogen and oxygen: alkyl shifts to carbocations, aryl and hydride moves, plus Baeyer-Villiger and Beckmann migrations to electron poor heteroatoms. The migrating group moves with its bonding pair antiperiplanar to the leaving group. This section maps Wagner-Meerwein, pinacol, Baeyer-Villiger and Beckmann logic.',
    objectives: [
      'Draw Wagner-Meerwein hydride and alkyl shifts to the most stable carbocation',
      'Predict Baeyer-Villiger migratory order and Beckmann trans to leaving group outcome',
      'Use pinacol ring contraction and Favorskii maps for cyclic $1,2$ shifts'
    ],
    concepts: [
      {
        term: 'Wagner-Meerwein carbocation shift',
        kind: 'definition',
        statement: 'A neighbouring **alkyl or hydride migrates with its pair** `Wagner-Meerwein` $R_{3}C$-$C^{+}R_{2} \\to R_{2}C^{+}$-$CR_{3}$ to place positive charge on the more substituted carbon.',
        detail: 'Camphene hydrochloride rearranges by methyl shift to the isobornyl cation; ring expansion of cyclobutyl to cyclopentyl follows the same relief of strain plus substitution gain.'
      },
      {
        term: 'Pinacol diol to ketone',
        kind: 'method',
        statement: '**Acid pinacol rearrangement** `pinacol` $R_{2}C(OH)$-$C(OH)R_{2}$ loses $H_{2}O$ from the better cation site then shifts $R$ to the ketone $R_{3}C$-$COR$.',
        detail: 'Unsymmetrical pinacol loses $OH$ where the cation is most stable, then the trans group migrates preferentially. Cyclic diols contract or expand rings by one atom through the same $1,2$ shift.'
      },
      {
        term: 'Baeyer-Villiger oxidation order',
        kind: 'law',
        statement: '**Peracid Baeyer-Villiger** `Baeyer-Villiger` $RCOR + RCO_{3}H \\to RCOOR$ migrates tertiary alkyl over secondary over aryl over primary over methyl through the Criegee adduct.',
        detail: 'The migrating $C$-$C$ bond must align antiperiplanar to the weak $O$-$O$ bond in the tetrahedral Criegee intermediate. Strained cyclic ketones expand to lactones, the caprolactone route to nylon.'
      },
      {
        term: 'Beckmann oxime to amide',
        kind: 'theorem',
        statement: '**Oxime to amide Beckmann** `Beckmann` $R_{2}C=NOH \\to RCONHR$ migrates the group trans to $OH$ after activation to $H_{2}O^{+}$ or ester leaving group.',
        detail: 'Acetophenone oxime gives acetanilide $PhNHCOCH_{3}$ by phenyl migration; cyclohexanone oxime gives caprolactam for nylon. Syn and anti oximes give opposite amides, proving stereospecific migration.'
      },
      {
        term: 'Favorskii ring contraction',
        kind: 'insight',
        statement: '**Alpha-halo ketone with base** `Favorskii` contracts rings through cyclopropanone $C_{3}$ intermediate opened by $RO^{-}$ to ester with one fewer ring atom.',
        detail: '2-chlorocyclohexanone with $MeO^{-}$ gives cyclopentane carboxylate $C_{5}H_{9}COOMe$. Deuterium labelling proves the symmetric cyclopropanone path over direct shift.'
      }
    ],
    figures: [
      {
        caption: 'Wagner-Meerwein $H$ and $R$ shift to stable $C^{+}$; pinacol $H_{2}O$ loss then $R$ move; Baeyer-Villiger order and Beckmann trans migration to $N$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rearrangement map with Wagner-Meerwein pinacol Baeyer-Villiger and Beckmann"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">C+ shift</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">H or R to stable C+</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">pinacol: lose H2O</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">then R migrates</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">Favorskii contracts</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">BV order + Beckmann</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">trans to leaving group</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">migrate antiperiplanar with bonding pair</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Pinacol choice in unsymmetrical diol',
        problem: '2-methyl-$1,2$-diphenylethane diol $Ph_{2}C(OH)C(OH)HCH_{3}$ with acid gives one ketone. Decide which $OH$ leaves and which group migrates.',
        steps: [
          { label: 'Step 1', text: 'Compare cations: loss from $Ph_{2}C$ gives diphenyl cation stabilised twice:\n```text\nleave OH at Ph2C -> Ph2C+ stabilised\nmigrate trans H or Me from neighbour\nproduct: ketone Ph2CH-CO-CH3 style frame\n```\nStability picks the leaving site.' },
          { label: 'Step 2', text: 'Shift the trans methyl or hydride to the cationic centre, reforming $C=O$ at the old cation carbon.' },
          { label: 'Step 3', text: 'Confirm by phenyl versus methyl migration ratio matching cation stability plus antiperiplanar alignment.' }
        ],
        result: 'Ketone from diphenyl cation plus neighbouring group migration, not the methyl cation path.'
      },
      {
        title: 'Baeyer-Villiger of phenyl methyl ketone',
        problem: 'Acetophenone $PhCOCH_{3}$ with $mCPBA$ gives an ester. Predict phenyl versus methyl migration and the hydrolysis products.',
        steps: [
          { label: 'Step 1', text: 'Form Criegee adduct $PhC(OH)(OOAr)CH_{3}$ with weak $O$-$O$ bond anti to migrators.' },
          { label: 'Step 2', text: 'Migrate phenyl over methyl by order aryl over primary, giving phenyl acetate $PhOCOCH_{3}$.' },
          { label: 'Step 3', text: 'Hydrolyse to phenol $PhOH$ plus acetic acid $CH_{3}COOH$, proving phenyl moved to oxygen.' }
        ],
        result: 'Phenyl acetate then phenol plus acetate on workup; methyl ester is minor.'
      }
    ],
    keyTakeaways: [
      'Wagner-Meerwein $H$ and $R$ shift to the most substituted $C^{+}$ antiperiplanar.',
      'Pinacol loses $H_{2}O$ at the stable cation site then shifts trans $R$.',
      'Baeyer-Villiger migrates tertiary over aryl over primary over methyl to ester.',
      'Beckmann migrates trans to activated $N$-$O$ to amide; Favorskii contracts rings.'
    ],
    quiz: [
      {
        q: 'Wagner-Meerwein shift moves:',
        options: ['A proton without electrons', 'Neighbour $H$ or $R$ with its bonding pair to $C^{+}$', 'A free radical only', 'An anion away from $C^{+}$'],
        answer: 1,
        explanation: 'Step 1: Align $C$-$H$ or $C$-$R$ anti to empty $p$. Step 2: Slide the pair into the vacancy. Step 3: Place charge on the more stable carbon.'
      },
      // PYQ-pattern: Baeyer-Villiger order drill
      {
        q: 'Baeyer-Villiger fastest migrator is:',
        options: ['Methyl', 'Primary alkyl', 'Tertiary alkyl', 'No migration'],
        answer: 2,
        explanation: 'Step 1: Build Criegee $O$-$O$ weak bond. Step 2: Rank electron donation into the migration. Step 3: Select tertiary over secondary over aryl over methyl.'
      },
      {
        q: 'Beckmann migrates the group:',
        options: ['Trans to activated $N$-$O$ leaving group', 'Cis to $OH$', 'Randomly either side', 'Never from carbon'],
        answer: 0,
        explanation: 'Step 1: Activate $N$-$OH$ to $N$-$OH_{2}^{+}$. Step 2: Align trans $C$-$R$ antiperiplanar. Step 3: Move that group to nitrogen as amide.'
      },
      {
        q: 'Favorskii on $2$-chlorocyclohexanone gives:',
        options: ['Ring expanded lactone', 'Open chain diacid only', 'Aromatic phenol', 'Ring contracted cyclopentane ester'],
        answer: 3,
        explanation: 'Step 1: Form enolate and close to cyclopropanone. Step 2: Open with $RO^{-}$ at the strained ketone. Step 3: Isolate one carbon contracted ester.'
      }
    ]
  },
  // ---------------------------------------------------------------- 26.2
  {
    sectionId: 'chem-ch26-s2',
    readingTime: 9,
    intro: 'Radicals react by single electron steps: initiation makes them, propagation carries the chain, termination kills it. Clayden ranks $C$-$H$ abstraction tertiary over secondary over primary by bond strength and shows bromine as selective while chlorine is fast. This section runs NBS allylic bromination and HBr peroxide addition.',
    objectives: [
      'Write initiation, propagation and termination for $Cl_{2}$ and $Br_{2}$ alkane halogenation',
      'Rank $C$-$H$ abstraction by bond dissociation and predict $Br$ versus $Cl$ selectivity',
      'Plan NBS allylic bromination and peroxide $HBr$ anti-Markovnikov addition'
    ],
    concepts: [
      {
        term: 'Radical chain anatomy',
        kind: 'definition',
        statement: '**Initiation, propagation, termination** `chain` $In$-$In \\to 2In$, $X$ plus $R$-$H \\to HX$ plus $R$, $R$ plus $X$-$X \\to R$-$X$ plus $X$ describe every chain, with peroxides $ROOR$ as common initiators.',
        detail: 'AIBN heating gives cyanoisopropyl radicals plus nitrogen; peroxides cleave $O$-$O$ near $150$ kJ per mol. Two radicals combining ends the chain and wastes carriers.'
      },
      {
        term: 'Bond strength selectivity ladder',
        kind: 'law',
        statement: '**Tertiary $C$-$H$ abstracts fastest** `selectivity` because $BDE$ falls tertiary about $381$ to secondary about $398$ to primary about $410$ to methyl about $435$ kJ per mol.',
        detail: 'Bromine with a late transition state discriminates strongly at about $1600$ to $80$ to $1$ tertiary to secondary to primary. Chlorine with an early transition state is fast but blunt at about $5$ to $4$ to $1$.'
      },
      {
        term: 'NBS allylic bromination',
        kind: 'method',
        statement: '**$NBS$ with $CCl_{4}$ and light** `NBS` keeps $Br_{2}$ low and abstracts allylic $H$ to resonance radicals captured by $Br_{2}$ to allyl bromide.',
        detail: 'Succinimide $N$-$H$ scavenges $HBr$ so addition to the double bond stays suppressed. Cyclohexene gives $3$-bromocyclohexene cleanly through the delocalised allyl radical.'
      },
      {
        term: 'Peroxide HBr anti-Markovnikov',
        kind: 'theorem',
        statement: '**$HBr$ with peroxides** `peroxide` adds $Br$ to the less substituted alkene carbon through $Br$ radical addition to give the more stable carbon radical then $H$ capture.',
        detail: 'Propene gives $1$-bromopropane $CH_{3}CH_{2}CH_{2}Br$ under peroxides versus $2$-bromopropane ionically. $HCl$ and $HI$ lack the chain energetics and stay ionic.'
      },
      {
        term: 'Autoxidation and inhibition',
        kind: 'insight',
        statement: '**Oxygen traps carbon radicals** `autoxidation` $R$ plus $O_{2} \\to ROO$ to hydroperoxides $ROOH$, blocked by phenol inhibitors such as $BHT$ that donate $H$ to stable aryloxy radicals.',
        detail: 'Ether solvents form explosive peroxides on standing; ferrous ion tests detect them. Vitamin E works biologically by the same $H$-donation chain breaking.'
      }
    ],
    figures: [
      {
        caption: 'Chain $X$ abstracts $H$ then $R$ takes $X$ from $X_{2}$; tertiary $C$-$H$ wins; $NBS$ keeps $Br_{2}$ low for allylic path; peroxide $HBr$ adds $Br$ to the open end.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Radical chain selectivity and NBS peroxide schemes"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">X + R-H to HX + R</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">R + X2 to R-X + X</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">tert faster than prim</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">Br selective, Cl fast</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">BDE ladder decides</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">NBS allylic</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">peroxide HBr anti</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">initiation starts, termination ends</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Bromination choice in methylbutane',
        problem: '2-methylbutane $CH_{3}CH(CH_{3})CH_{2}CH_{3}$ is brominated versus chlorinated with light. Predict the major monohalide in each case.',
        steps: [
          { label: 'Step 1', text: 'Count $H$ types: one tertiary, two secondary sets, three primary sets with $BDE$ ladder:\n```text\nBr: 1600:80:1, picks tertiary\nCl: 5:4:1, mixture weighted by H count\nstatistical: multiply rate by H number\n```\nLate versus early transition states.' },
          { label: 'Step 2', text: 'Bromine gives $2$-bromo-$2$-methylbutane almost exclusively from the tertiary radical.' },
          { label: 'Step 3', text: 'Chlorine gives a mixture rich in secondary chlorides by hydrogen count despite slight tertiary preference.' }
        ],
        result: 'Bromination highly tertiary selective; chlorination gives a statistical mixture with modest bias.'
      },
      {
        title: 'NBS allylic product plus peroxide HBr',
        problem: 'Cyclohexene with $NBS$ and light gives allyl bromide; propene with $HBr$ and peroxides gives $1$-bromopropane. Explain both radical paths.',
        steps: [
          { label: 'Step 1', text: 'NBS holds $Br_{2}$ low: allylic abstraction gives resonance radical $C_{6}H_{9}$ then $Br$ capture to $3$-bromocyclohexene.' },
          { label: 'Step 2', text: 'Peroxide $HBr$: $Br$ adds to propene terminal carbon to give secondary radical $CH_{3}CHBrCH_{2}$ style intermediate.' },
          { label: 'Step 3', text: 'Hydrogen capture from $HBr$ gives $CH_{3}CH_{2}CH_{2}Br$, anti-Markovnikov by radical order.' }
        ],
        result: '$3$-bromocyclohexene by NBS allylic path; $1$-bromopropane by peroxide $HBr$ radical addition.'
      }
    ],
    keyTakeaways: [
      'Chains run initiation, two propagation steps and radical termination.',
      'Tertiary $C$-$H$ wins by low $BDE$; $Br$ selective while $Cl$ fast and blunt.',
      '$NBS$ low $Br_{2}$ gives allylic bromides through resonance radicals.',
      'Peroxide $HBr$ adds $Br$ to the open alkene end via the stable carbon radical.'
    ],
    quiz: [
      {
        q: 'Most abstractable $C$-$H$ toward $Br$ is:',
        options: ['Methyl $435$ kJ per mol', 'Primary $410$ kJ per mol', 'Tertiary $381$ kJ per mol', 'Vinylic very strong'],
        answer: 2,
        explanation: 'Step 1: List $BDE$ values low to high. Step 2: Favour weakest bond for late transition state. Step 3: Select tertiary $C$-$H$.'
      },
      // PYQ-pattern: bromine versus chlorine selectivity drill
      {
        q: 'Bromine is more selective than chlorine because:',
        options: ['It reacts faster always', 'Its abstraction is uphill with a late transition state', 'It forms no chain', 'It attacks alkenes only'],
        answer: 1,
        explanation: 'Step 1: Compare $H$-$Br$ versus $H$-$Cl$ strengths. Step 2: Place $Br$ transition state late with radical character. Step 3: Discriminate strongly by substitution.'
      },
      {
        q: '$NBS$ allylic bromination works since:',
        options: ['$Br_{2}$ stays low and $HBr$ is scavenged', '$Br_{2}$ is concentrated', 'Ionic addition dominates', 'No radicals form'],
        answer: 0,
        explanation: 'Step 1: Release $Br_{2}$ slowly from $NBS$. Step 2: Remove $HBr$ with succinimide. Step 3: Favour abstraction over alkene addition.'
      },
      {
        q: 'Peroxide $HBr$ on propene gives:',
        options: ['$2$-bromopropane', 'No reaction', 'Dibromide only', '$1$-bromopropane'],
        answer: 3,
        explanation: 'Step 1: Add $Br$ to terminal carbon. Step 2: Form secondary carbon radical. Step 3: Capture $H$ to terminal bromide.'
      }
    ]
  },
  // ---------------------------------------------------------------- 26.3
  {
    sectionId: 'chem-ch26-s3',
    readingTime: 9,
    intro: 'Carbenes carry a neutral divalent carbon with two nonbonding electrons: singlet pairs them in one orbital while triplet keeps them unpaired. Nitrenes repeat the pattern on nitrogen. Clayden generates them from diazo, haloform and azides, then uses cyclopropanation, insertion and Wolff rearrangement with distinct stereochemistry.',
    objectives: [
      'Draw singlet versus triplet carbene orbitals and predict concerted versus stepwise addition',
      'Generate $CH_{2}$ from $CH_{2}N_{2}$ and $CCl_{2}$ from $CHCl_{3}$ with base',
      'Plan Simmons-Smith cyclopropanation and $O$-$H$ insertion plus Wolff ring contraction'
    ],
    concepts: [
      {
        term: 'Singlet and triplet electronic states',
        kind: 'definition',
        statement: '**Singlet carbene** `singlet` pairs electrons in $sp^{2}$ leaving empty $p$, while **triplet carbene** `triplet` holds one electron in each orbital like a diradical.',
        detail: '$CH_{2}$ ground state is triplet bent at about $136$ degrees; $CCl_{2}$ ground state is singlet stabilised by halogen donation. Matrix isolation $IR$ plus $ESR$ proves the spin states.'
      },
      {
        term: 'Diazomethane and haloform sources',
        kind: 'method',
        statement: '**$CH_{2}N_{2}$ with light or $Cu$** `diazo` loses $N_{2}$ to $CH_{2}$, while **$CHCl_{3}$ with $tBuOK$** `haloform` loses $HCl$ to $CCl_{2}$ by alpha elimination.',
        detail: 'Tosylhydrazones with base give diazo alkanes for Bamford-Stevens vinyl carbenes. Diazo esters $N_{2}CHCOOEt$ with $Rh_{2}(OAc)_{4}$ give metallocarbenes for selective insertions.'
      },
      {
        term: 'Cyclopropanation stereochemistry',
        kind: 'theorem',
        statement: '**Singlet adds concertedly syn** `cyclopropanation` retaining alkene geometry, while **triplet adds stepwise** `stepwise` scrambling $E$ and $Z$ through a diradical.',
        detail: 'Simmons-Smith $CH_{2}I_{2}$ with $Zn$ and $Cu$ delivers $CH_{2}$ syn to allylic $OH$ by coordination. Dichlorocarbene plus cis-$2$-butene keeps cis methyls; triplet methylene scrambles them.'
      },
      {
        term: 'Insertion selectivity ladder',
        kind: 'law',
        statement: '**$O$-$H$ and $N$-$H$ insert fastest** `insertion`, then tertiary $C$-$H$ over primary by bond strength, with singlet concerted and triplet abstracting like radicals.',
        detail: 'Ethanol with $N_{2}CHCOOEt$ and $Rh$ gives $OCH_{2}COOEt$ ether cleanly. Intramolecular $1,5$-insertion closes five membered rings preferentially by geometry.'
      },
      {
        term: 'Nitrene and Wolff rearrangement',
        kind: 'insight',
        statement: '**Acyl nitrenes from azides** `nitrene` $RCON_{3} \\to RNCO$ undergo Curtius shift, while **alpha-diazo ketones lose $N_{2}$ to ketenes** `Wolff` $RCOCHN_{2} \\to RCH=C=O$ for Arndt-Eistert homologation.',
        detail: 'Alkyl azides heated give $C$-$H$ amination through triplet nitrenes. Photolysed diazo ketone plus $H_{2}O$ gives homologated acid $RCH_{2}COOH$ after ketene hydration.'
      }
    ],
    figures: [
      {
        caption: 'Singlet paired in $sp^{2}$ adding syn to alkenes versus triplet diradical scrambling; $O$-$H$ insertion ladder and Wolff ketene homologation.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carbene singlet triplet cyclopropanation and Wolff scheme"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">singlet: paired</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">syn concerted</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">triplet: diradical</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">stepwise scramble</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">ESR active</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">Wolff to ketene</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">plus H2O to homolog acid</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">Simmons-Smith directed by allylic OH</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Simmons-Smith directed cyclopropanation',
        problem: 'Geraniol allylic alcohol $HOCH_{2}$-$C$-$CH=C$ with $CH_{2}I_{2}$ and $Zn$ and $Cu$ gives one cyclopropane diastereomer. Predict face and geometry.',
        steps: [
          { label: 'Step 1', text: 'Coordinate $Zn$ carbenoid to allylic $OH$, delivering $CH_{2}$ syn to oxygen:\n```text\ncarbenoid = ICH2ZnI, singlet-like\nface = OH side by chelation\nretention = alkene E stays E in ring\n```\nConcerted singlet transfer.' },
          { label: 'Step 2', text: 'Close cyclopropane on the $OH$ face with retained $E$ substituents.' },
          { label: 'Step 3', text: 'Confirm by protection test: $O$-methyl ether loses direction and gives a mixture.' }
        ],
        result: 'Syn $OH$-directed cyclopropane with retained alkene geometry.'
      },
      {
        title: 'Wolff homologation of an acid',
        problem: 'Benzoic acid $PhCOOH$ is homologated to phenylacetic acid $PhCH_{2}COOH$ by Arndt-Eistert sequence. Write the carbene and ketene steps.',
        steps: [
          { label: 'Step 1', text: 'Convert to $PhCOCl$ then $PhCOCHN_{2}$ diazo ketone with $CH_{2}N_{2}$.' },
          { label: 'Step 2', text: 'Photolyse to ketene $PhCH=C=O$ with $N_{2}$ loss and $Ph$ migration, the Wolff shift.' },
          { label: 'Step 3', text: 'Hydrate ketene with $H_{2}O$ to $PhCH_{2}COOH$, one carbon homologated.' }
        ],
        result: 'Phenylacetic acid by diazo ketone Wolff ketene hydration.'
      }
    ],
    keyTakeaways: [
      'Singlet pairs in $sp^{2}$ and adds syn; triplet is diradical and scrambles.',
      '$CH_{2}N_{2}$ gives $CH_{2}$ while $CHCl_{3}$ with base gives $CCl_{2}$.',
      'Simmons-Smith $CH_{2}I_{2}$ with $Zn$ cyclopropanates syn and $OH$-directed.',
      'Wolff ketene plus Curtius isocyanate homologate and transpose carbonyls.'
    ],
    quiz: [
      {
        q: 'Singlet carbene cyclopropanation is:',
        options: ['Concerted syn with retained geometry', 'Stepwise with scramble', 'Ionic without orbitals', 'Impossible on alkenes'],
        answer: 0,
        explanation: 'Step 1: Fill empty $p$ while donating paired $sp^{2}$. Step 2: Bond both ends together. Step 3: Transfer $E$ and $Z$ intact to the ring.'
      },
      // PYQ-pattern: carbene source matching drill
      {
        q: 'Dichlorocarbene $CCl_{2}$ comes from:',
        options: ['$CH_{2}N_{2}$ plus light', '$CHCl_{3}$ plus $tBuOK$ alpha elimination', 'Alkene plus $Br_{2}$', 'Acid plus base only'],
        answer: 1,
        explanation: 'Step 1: Deprotonate $CHCl_{3}$ to $CCl_{3}^{-}$. Step 2: Eject $Cl^{-}$ from the same carbon. Step 3: Release singlet $CCl_{2}$.'
      },
      {
        q: 'Simmons-Smith direction by allylic $OH$ proves:',
        options: ['Radical abstraction', 'Acid catalysis only', 'Zinc coordination delivering $CH_{2}$ syn', 'Triplet scrambling'],
        answer: 2,
        explanation: 'Step 1: Bind $Zn$ carbenoid to oxygen. Step 2: Hold alkene on the same face. Step 3: Transfer $CH_{2}$ syn to $OH$.'
      },
      {
        q: 'Wolff product from $RCOCHN_{2}$ plus $H_{2}O$ is:',
        options: ['$RCOOH$ same length', 'Alkane only', 'Ester without shift', '$RCH_{2}COOH$ homologated'],
        answer: 3,
        explanation: 'Step 1: Lose $N_{2}$ to ketene $RCH=C=O$. Step 2: Migrate $R$ during $N_{2}$ loss. Step 3: Hydrate ketene to homologated acid.'
      }
    ]
  },
  // ---------------------------------------------------------------- 26.4
  {
    sectionId: 'chem-ch26-s4',
    readingTime: 10,
    intro: 'Clayden closes with carbon metal bonds that make $C$-$C$ coupling routine plus the physical tests that prove mechanisms: kinetics, isotopes and stereochemistry. Gilman cuprates add conjugately, palladium cycles cross couple, and kinetic isotope effects report bond breaking in the transition state. This section pairs making bonds with proving how they form.',
    objectives: [
      'Write Gilman $1,4$ addition and palladium oxidative addition, transmetallation and reductive elimination',
      'Choose Suzuki, Heck and Sonogashira partners by halide, boron, alkene and alkyne roles',
      'Read rate laws, $k_{H}$ to $k_{D}$ and stereospecificity as mechanism evidence'
    ],
    concepts: [
      {
        term: 'Gilman cuprate conjugate logic',
        kind: 'definition',
        statement: '**Lithium dialkylcuprates $R_{2}CuLi$** `Gilman` deliver soft $R^{-}$ to enone beta carbon and to $RCOCl$ once to ketone, where $RLi$ would add hard to $C=O$.',
        detail: 'Made from $2RLi$ plus $CuI$ at low temperature, they tolerate the conjugate path with $TMSCl$ acceleration. Epoxide opening with cuprates attacks the less hindered carbon.'
      },
      {
        term: 'Palladium cross coupling cycle',
        kind: 'theorem',
        statement: '**$Pd(0)$ to $Pd(II)$ cycle** `palladium` runs oxidative addition $R$-$X$ plus $Pd(0) \\to R$-$Pd(II)$-$X$, transmetallation with $R$-$M$, then reductive elimination $R$-$R$ plus $Pd(0)$.',
        detail: 'Aryl iodides add fastest $I$ over $Br$ over $Cl$; bulky phosphines $PPh_{3}$ stabilise $Pd(0)$ and speed elimination. Beta-hydride elimination is the Heck branch that releases alkene.'
      },
      {
        term: 'Suzuki Heck Sonogashira choice',
        kind: 'method',
        statement: '**Suzuki $R$-$B(OH)_{2}$ plus base** `Suzuki`, **Heck alkene plus base** `Heck` and **Sonogashira alkyne with $Cu$** `Sonogashira` share the $Pd$ cycle with different transmetallation partners.',
        detail: 'Suzuki needs $Na_{2}CO_{3}$ to activate boron; Heck needs $Et_{3}N$ to scavenge $HX$ after beta-elimination. Chlorides need rich ligands such as $SPhos$ to oxidatively add.'
      },
      {
        term: 'Kinetic isotope effect as bond probe',
        kind: 'law',
        statement: '**Primary $k_{H}$ to $k_{D}$ near $7$** `isotope-effect` marks $C$-$H$ cleavage in the rate step by zero point loss, while $k_{H}$ to $k_{D}$ near $1$ rules it out.',
        detail: 'E2 with $C$-$H$ breaking shows large $k_{H}$ to $k_{D}$; $S_{N}1$ ionisation without $C$-$H$ breaking shows near unity. Tunnelling inflates the ratio beyond $7$ for narrow barriers.'
      },
      {
        term: 'Rate law and stereochemical proof',
        kind: 'insight',
        statement: '**Order plus stereospecificity** `mechanism-proof` assigns mechanism: first order both partners points to bimolecular addition while retained $E$ and $Z$ proves concerted pericyclic over stepwise radical.',
        detail: 'Diels-Alder second order plus cis to cis transfer rules out diradicals. Racemisation at $C$-$X$ points to planar carbocations while inversion points to $S_{N}2$ backside attack.'
      }
    ],
    figures: [
      {
        caption: '$Pd(0)$ oxidative addition to transmetallation to reductive elimination; $k_{H}$ to $k_{D}$ near $7$ flagging $C$-$H$ cleavage in the rate step.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Palladium catalytic cycle and isotope effect proof scheme"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">Pd(0) + R-X</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">oxidative addition</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">R-Pd-X + R-M</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">transmetallation</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">Suzuki Heck Sonogashira</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">R-R + Pd(0)</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">reductive elimination</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">kH to kD near 7 marks C-H in rate step</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Suzuki biaryl coupling plan',
        problem: 'Couple bromobenzene $PhBr$ with phenylboronic acid $PhB(OH)_{2}$ to biphenyl $PhPh$. Give catalyst, base and cycle steps.',
        steps: [
          { label: 'Step 1', text: 'Oxidative addition $PhBr + Pd(0) \\to PhPd(II)Br$ with $Pd(PPh_{3})_{4}$:\n```text\nPd0 -> oxidative add PhBr\ntransmetallate Ph from B with Na2CO3\nreductively eliminate Ph-Ph + Pd0\n```\nBase activates boron to boronate.' },
          { label: 'Step 2', text: 'Transmetallation with $PhB(OH)_{3}^{-}$ gives $Ph_{2}Pd(II)$ intermediate.' },
          { label: 'Step 3', text: 'Reductive elimination releases biphenyl $PhPh$ and regenerates $Pd(0)$.' }
        ],
        result: 'Biphenyl by $Pd(PPh_{3})_{4}$ and $Na_{2}CO_{3}$ through addition, transmetallation and elimination.'
      },
      {
        title: 'Isotope test for E2 versus SN1',
        problem: 'An alkyl halide solvolyses with $k_{H}$ to $k_{D}$ near $1$ for beta deuteration but eliminates with base showing $k_{H}$ to $k_{D}$ near $7$. Assign mechanisms.',
        steps: [
          { label: 'Step 1', text: 'Near unity means $C$-$H$ stays intact in the rate step, matching $S_{N}1$ ionisation $R$-$X \\to R^{+}$.' },
          { label: 'Step 2', text: 'Near $7$ means $C$-$H$ breaks in the rate step, matching E2 $C$-$H$ plus $C$-$X$ cleavage together.' },
          { label: 'Step 3', text: 'Confirm by rate law: first order solvolysis versus second order base elimination.' }
        ],
        result: 'Solvolysis $S_{N}1$ without $C$-$H$ cleavage; base path E2 with $C$-$H$ cleavage.'
      }
    ],
    keyTakeaways: [
      '$R_{2}CuLi$ adds soft $1,4$ where $RLi$ adds hard $1,2$ to enones.',
      '$Pd$ cycles addition, transmetallation and elimination for Suzuki, Heck and Sonogashira.',
      'Primary $k_{H}$ to $k_{D}$ near $7$ proves $C$-$H$ breaking in the rate step.',
      'Order plus retained geometry separates concerted, ionic and radical paths.'
    ],
    quiz: [
      {
        q: 'Suzuki transmetallation partner is:',
        options: ['Alkene plus $Et_{3}N$', 'Terminal alkyne only', 'Arylboronic acid $RB(OH)_{2}$ plus base', 'Alkane'],
        answer: 2,
        explanation: 'Step 1: Oxidatively add $R$-$X$ to $Pd(0)$. Step 2: Transfer $R$ from activated boronate. Step 3: Eliminate $R$-$R$ and restore $Pd(0)$.'
      },
      // PYQ-pattern: isotope effect reading drill
      {
        q: '$k_{H}$ to $k_{D}$ near $1$ for beta $D$ means:',
        options: ['$C$-$H$ stays intact in the rate step', '$C$-$H$ breaks in the rate step', 'Tunnelling dominates', 'No reaction occurs'],
        answer: 0,
        explanation: 'Step 1: Recall zero point loss needs $C$-$H$ cleavage. Step 2: Note unity shows no such loss. Step 3: Assign ionisation without $C$-$H$ breaking.'
      },
      {
        q: 'Gilman on enone gives:',
        options: ['Direct $1,2$ alcohol', 'Conjugate $1,4$ ketone via enolate', 'No addition', 'Aromatic substitution'],
        answer: 1,
        explanation: 'Step 1: Match soft cuprate to soft $C_{\\beta}$. Step 2: Form enolate intermediate. Step 3: Protonate to saturated ketone.'
      },
      {
        q: 'Diels-Alder proof against diradical is:',
        options: ['First order kinetics', 'Racemisation always', 'Light requirement', 'Second order plus cis to cis retention'],
        answer: 3,
        explanation: 'Step 1: Measure first order in each partner. Step 2: Transfer alkene geometry intact. Step 3: Rule out rotating intermediates.'
      }
    ]
  }
]
