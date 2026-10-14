import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 36: Wittig & Main-Group Reagents (Clayden ch27 focus)
// Sections 36.1 - 36.4. Phosphorus ylides, phosphonates, silicon and sulfur
// reagents for connective alkene synthesis with geometry control.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh36Content: SectionContent[] = [
  // ---------------------------------------------------------------- 36.1
  {
    sectionId: 'chem-ch36-s1',
    readingTime: 10,
    intro: 'Phosphonium ylides convert aldehydes plus ketones into alkenes with the new double bond exactly where the carbonyl stood. Deprotonation of a phosphonium salt with $BuLi$ gives the ylide $Ph_{3}P$ plus $CHR$ minus adjacent, which adds to $RCHO$ through a four membered oxaphosphetane. Elimination is syn and driven by the very strong $P=O$ bond of triphenylphosphine oxide, while the ylide type fixes $E$ versus $Z$ geometry.',
    objectives: [
      'Build ylides from $Ph_{3}P$ plus alkyl halide plus $BuLi$ base sequence',
      'Draw oxaphosphetane formation plus syn elimination to alkene plus $Ph_{3}PO$',
      'Predict $E$ from stabilized ylides plus $Z$ from unstabilized ylides'
    ],
    concepts: [
      {
        term: 'Ylide preparation and resonance',
        kind: 'definition',
        statement: 'A **phosphonium ylide pairs a carbanion with a phosphonium centre** `ylide-prep` $Ph_{3}P$ plus $RBr$ gives $Ph_{3}P$ plus $R$ plus $Br$ minus, then $BuLi$ removes the alpha proton.',
        detail: 'The $P$ plus $C$ minus dipole is written as ylide $Ph_{3}P$ plus $CHR$ or ylene $Ph_{3}P$ double bond $CHR$ forms. Conjugating groups such as $CO_{2}Et$ delocalise the anion into an enolate form and make the ylide isolable.'
      },
      {
        term: 'Oxaphosphetane intermediate',
        kind: 'theorem',
        statement: 'A **four membered P-O-C-C ring precedes the alkene** `oxaphosphetane` ylide plus $RCHO$ closes to syn or anti oxaphosphetane before syn elimination of $Ph_{3}PO$.',
        detail: 'Addition can give two diastereomers of the ring, and because the breakdown is stereospecific the ring ratio sets the $E$ over $Z$ product ratio. Perpendicular approach of ylide and carbonyl keeps bulky groups apart in the accepted model.'
      },
      {
        term: 'Phosphorus oxygen driving force',
        kind: 'law',
        statement: 'A **very strong P=O bond pays for the whole reaction** `driving-force` the $P=O$ bond near $540$ kJ per mol makes oxaphosphetane collapse irreversible at low temperature.',
        detail: 'Silicon shows the parallel effect with the strong $Si-O$ bond driving the base promoted Peterson elimination. Sulfur lacks an equally strong $S=O$ style payoff, so sulfonium ylides give epoxides instead of alkenes.'
      },
      {
        term: 'Stabilized versus unstabilized rule',
        kind: 'law',
        statement: 'A **stabilized ylide gives E while an unstabilized ylide gives Z** `E-Z-rule` $CO_{2}R$ or $CN$ beside the anion selects $E$, while plain alkyl selects $Z$.',
        detail: 'Unstabilized ylides react irreversibly so the kinetic syn oxaphosphetane survives to $Z$ alkene. Stabilized ylides equilibrate toward the anti arrangement, which opens to the $E$ alkene.'
      },
      {
        term: 'Carbonyl scope and methylenation',
        kind: 'method',
        statement: 'A **simple methylide installs a terminal double bond** `methylenation` $Ph_{3}P$ plus $CH_{2}$ converts $R_{2}CO$ to $R_{2}C$ double bond $CH_{2}$ even beside esters and acetals.',
        detail: 'Aldehydes react faster than ketones, and stabilized ylides are sluggish enough that phosphonates are preferred for them. Hindered ketones may need forcing conditions or the Horner variant.'
      }
    ],
    figures: [
      {
        caption: 'Ylide $Ph_{3}P$ plus $CHR$ adds to $RCHO$ giving syn versus anti oxaphosphetane, then syn loss of $Ph_{3}PO$ delivers $Z$ versus $E$ alkene.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wittig ylide to oxaphosphetane to E or Z alkene"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">ylide plus RCHO</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">Ph3P plus CHR</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">BuLi made</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">oxaphosphetane</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">syn or anti ring</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">P O C C</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">syn loss Ph3PO</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">Z or E alkene</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">stabilized to E, unstabilized to Z</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'E cinnamate from stabilized ylide',
        problem: '$PhCHO$ plus the ester stabilized ylide $Ph_{3}P$ plus $CHCO_{2}Et$ gives ethyl cinnamate. Predict the geometry and byproduct.',
        steps: [
          { label: 'Step 1', text: 'Classify the ylide:\n```text\nanion beside CO2Et -> stabilized ylide\nstabilized -> reversible addition -> anti ring\nanti ring -> E alkene after syn loss\n```\nEster conjugation makes the ylide isolable and $E$ selective.' },
          { label: 'Step 2', text: 'Add to $PhCHO$ to give the anti oxaphosphetane with $Ph$ and $CO_{2}Et$ trans across the forming bond.' },
          { label: 'Step 3', text: 'Collapse by syn elimination of $Ph_{3}PO$ to the $E$ unsaturated ester $PhCH$ double bond $CHCO_{2}Et$.' }
        ],
        result: '$E$ ethyl cinnamate plus $Ph_{3}PO$, typically above $90$ percent $E$.'
      },
      {
        title: 'Z alkene from unstabilized ylide',
        problem: 'Hexanal plus $Ph_{3}P$ plus $CHC_{5}H_{11}$ unstabilized ylide needs the $Z$ undecene isomer. Show the outcome.',
        steps: [
          { label: 'Step 1', text: 'Classify the ylide as alkyl substituted with no anion stabilizer, hence unstabilized and $Z$ selective.' },
          { label: 'Step 2', text: 'Form the syn oxaphosphetane irreversibly under kinetic control at low temperature.' },
          { label: 'Step 3', text: 'Eliminate $Ph_{3}PO$ syn to deliver $Z$ $C_{5}H_{11}CH$ double bond $CHC_{5}H_{11}$ with minor $E$ leak.' }
        ],
        result: '$Z$ undecene as the major product with $E$ as the minor leak.'
      }
    ],
    keyTakeaways: [
      'Phosphonium salts plus $BuLi$ give ylides $Ph_{3}P$ plus $CHR$ for carbonyl methylenation.',
      'Oxaphosphetane forms then collapses syn, driven by the strong $P=O$ bond.',
      'Stabilized ylides select $E$ while unstabilized ylides select $Z$.',
      'Aldehydes react fastest and hindered ketones may need the phosphonate variant.'
    ],
    quiz: [
      {
        q: 'The ylide carbon in $Ph_{3}P$ plus $CHR$ is best described as:',
        options: ['Nucleophilic carbanion beside $P$ plus', 'Electrophilic carbocation', 'Free radical', 'Neutral alkene carbon'],
        answer: 0,
        explanation: 'Step 1: Write the $P$ plus $C$ minus dipole. Step 2: Note attack on carbonyl carbon. Step 3: Assign nucleophilic carbanion character.'
      },
      // PYQ-pattern: stabilized versus unstabilized ylide geometry call
      {
        q: 'Ester stabilized ylide plus $PhCHO$ gives mainly:',
        options: ['$Z$ alkene by kinetic ring', '$E$ unsaturated ester plus $Ph_{3}PO$', 'No reaction', 'Epoxide'],
        answer: 1,
        explanation: 'Step 1: Classify as stabilized ylide. Step 2: Equilibrate to anti oxaphosphetane. Step 3: Open syn to the $E$ alkene.'
      },
      {
        q: 'The intermediate before elimination is:',
        options: ['Betaine only with no ring', 'Free carbene', 'Oxaphosphetane four membered ring', 'Bromonium ion'],
        answer: 2,
        explanation: 'Step 1: Add ylide carbon to carbonyl carbon. Step 2: Close $P$ to $O$ into a four membered ring. Step 3: Name it oxaphosphetane.'
      },
      {
        q: 'Driving force of the Wittig collapse is:',
        options: ['Weak $P-C$ bond', 'Loss of $N_{2}$ gas', 'Aromaticity gain', 'Formation of strong $P=O$ in $Ph_{3}PO$'],
        answer: 3,
        explanation: 'Step 1: Identify $Ph_{3}PO$ byproduct. Step 2: Recall $P=O$ near $540$ kJ per mol. Step 3: Assign it as the thermodynamic payoff.'
      }
    ]
  },
  // ---------------------------------------------------------------- 36.2
  {
    sectionId: 'chem-ch36-s2',
    readingTime: 9,
    intro: 'Phosphonate esters upgrade the Wittig reaction for stabilized cases with brisk rates plus easy separation. Deprotonation with $NaH$ or alkoxide gives an enolate type anion that adds to aldehydes and collapses with phosphate expulsion. The standard Horner Wadsworth Emmons reaction is strongly $E$ selective, while the Still Gennari phosphonate inverts the outcome to $Z$.',
    objectives: [
      'Deprotonate $(EtO)_{2}P$ plus $O$ plus $CH_{2}CO_{2}Et$ with $NaH$ to the reactive anion',
      'Explain standard $E$ selectivity versus Still Gennari $Z$ selectivity',
      'Choose phosphonate over phosphonium for stabilized plus hindered cases'
    ],
    concepts: [
      {
        term: 'Phosphonate anion formation',
        kind: 'definition',
        statement: 'A **dialkyl phosphonate deprotonates to an enolate type anion** `phosphonate-anion` $(EtO)_{2}P$ plus $O$ plus $CH_{2}CO_{2}R$ plus $NaH$ gives the anion plus $H_{2}$ gas.',
        detail: 'The $P=O$ flanked methylene is far more acidic than a phosphonium alpha proton, so mild $NaH$ or $NaOEt$ suffices. Phosphonate esters are cheap and the phosphate byproduct washes out in water.'
      },
      {
        term: 'HWE E selectivity',
        kind: 'law',
        statement: 'A **standard HWE addition equilibrates to the E alkene** `HWE-E` anti oxy anion adduct collapses to $E$ unsaturated ester with $(EtO)_{2}PO$ minus leaving.',
        detail: 'Reversibility of the addition lets the bulkier groups settle trans before phosphate expulsion. $E$ ratios routinely exceed $95$ to $5$ for aldehydes.'
      },
      {
        term: 'Still Gennari Z variant',
        kind: 'theorem',
        statement: 'A **bis trifluoroethyl phosphonate with KHMDS inverts to Z** `Still-Gennari` electron poor phosphonate plus $KHMDS$ plus crown type cation control gives $Z$ unsaturated esters.',
        detail: 'Potassium chelation plus the electron withdrawing $CF_{3}CH_{2}O$ groups speed collapse before equilibration, trapping the kinetic syn adduct. Low temperature tightens the $Z$ ratio.'
      },
      {
        term: 'Phosphonate versus phosphonium choice',
        kind: 'method',
        statement: 'A **sluggish stabilized ylide is replaced by its phosphonate** `reagent-choice` stabilized phosphonium ylides react slowly while the matching phosphonate anion reacts briskly.',
        detail: 'Use phosphonium methylides for simple methylenation and HWE phosphonates for $E$ unsaturated esters, nitriles and ketones. Ketones need the more reactive dimethyl phosphonate or heating.'
      },
      {
        term: 'Horner Wittig phosphine oxide route',
        kind: 'insight',
        statement: 'A **phosphine oxide anion offers a separable alternative** `Horner-Wittig` $Ph_{2}P$ plus $O$ plus $CHR$ minus adds to carbonyls and eliminates $Ph_{2}PO$ minus on warming.',
        detail: 'The beta hydroxy phosphine oxide diastereomers can be separated, and each eliminates stereospecifically, so either $E$ or $Z$ alkene is available from the matching diastereomer.'
      }
    ],
    figures: [
      {
        caption: 'Phosphonate anion plus $RCHO$ equilibrates to anti adduct for $E$ HWE, while $KHMDS$ plus fluorinated phosphonate traps syn adduct for $Z$ Still Gennari.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HWE E pathway versus Still Gennari Z pathway"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">phosphonate anion</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">NaH made, adds</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">to RCHO</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">anti adduct slow</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">equilibrates, E</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">phosphate leaves</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">KHMDS fast trap</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">syn adduct, Z</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">fluorinated ester plus K chelation picks Z</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'HWE E unsaturated ester',
        problem: 'Triethyl phosphonoacetate plus $NaH$ plus $PhCHO$ should give ethyl cinnamate. Predict geometry and workup.',
        steps: [
          { label: 'Step 1', text: 'Make the anion:\n```text\n(EtO)2P(O)CH2CO2Et + NaH -> anion + H2\nadd PhCHO at low temperature\nanti adduct equilibrates\n```\nMild base suffices because the methylene is doubly activated.' },
          { label: 'Step 2', text: 'Equilibrate the oxy anion adduct to the anti arrangement with $Ph$ trans to $CO_{2}Et$.' },
          { label: 'Step 3', text: 'Expel water soluble diethyl phosphate to the $E$ cinnamate, washed free of phosphorus residues.' }
        ],
        result: '$E$ ethyl cinnamate in high yield with aqueous phosphate washout.'
      },
      {
        title: 'Still Gennari Z unsaturated ester',
        problem: 'The same aldehyde needs the $Z$ unsaturated ester for a downstream ring closure. Choose reagents and conditions.',
        steps: [
          { label: 'Step 1', text: 'Switch to bis trifluoroethyl phosphonoacetate with $KHMDS$ at low temperature.' },
          { label: 'Step 2', text: 'Add $PhCHO$ so potassium chelation holds the kinetic syn adduct.' },
          { label: 'Step 3', text: 'Collapse fast to the $Z$ unsaturated ester before anti equilibration.' }
        ],
        result: '$Z$ unsaturated ester as the major isomer under kinetic chelation control.'
      }
    ],
    keyTakeaways: [
      'Phosphonates deprotonate with $NaH$ and expel water soluble phosphate.',
      'Standard HWE equilibrates to anti adduct and delivers $E$ alkenes.',
      'Still Gennari phosphonate plus $KHMDS$ traps the syn adduct for $Z$.',
      'Phosphonates beat stabilized ylides on rate plus separation plus ketone scope.'
    ],
    quiz: [
      {
        q: 'Base commonly used to make the HWE anion is:',
        options: ['$NaH$ or alkoxide', 'Concentrated $H_{2}SO_{4}$', '$Br_{2}$ in $CCl_{4}$', 'Cold water'],
        answer: 0,
        explanation: 'Step 1: Note doubly activated methylene acidity. Step 2: Select mild hydride or alkoxide base. Step 3: Evolve $H_{2}$ and form the anion.'
      },
      {
        q: 'Standard HWE of aldehydes is:',
        options: ['Strongly $Z$ selective', 'Strongly $E$ selective by equilibration', 'Non selective always', 'Epoxide forming'],
        answer: 1,
        explanation: 'Step 1: Add anion to $RCHO$. Step 2: Equilibrate to anti adduct. Step 3: Expel phosphate to the $E$ alkene.'
      },
      // PYQ-pattern: Still Gennari reagent and condition identification
      {
        q: 'Still Gennari $Z$ selectivity needs:',
        options: ['Plain phosphonate plus heat', 'Phosphonium salt plus water', 'Fluorinated phosphonate plus $KHMDS$ at low temperature', 'No base at all'],
        answer: 2,
        explanation: 'Step 1: Pick electron poor phosphonate. Step 2: Add $KHMDS$ for potassium chelation. Step 3: Trap kinetic syn adduct to $Z$.'
      },
      {
        q: 'Advantage of HWE over stabilized Wittig is:',
        options: ['Slower rates', 'No geometry control', 'Needs strong $BuLi$ always', 'Water soluble phosphate plus faster stabilized cases'],
        answer: 3,
        explanation: 'Step 1: Compare stabilized ylide sluggishness. Step 2: Note brisk phosphonate anion reactivity. Step 3: Add aqueous phosphate washout benefit.'
      }
    ]
  },
  // ---------------------------------------------------------------- 36.3
  {
    sectionId: 'chem-ch36-s3',
    readingTime: 9,
    intro: 'Silicon behaves like a removable proton that steers elimination exactly where it stands. The beta silicon effect stabilises a neighbouring carbocation by $C-Si$ sigma donation, and fluoride or alkoxide then strips silicon to close the alkene. The Peterson elimination runs under acid by an anti path or under base by a syn path, while silyl ethers protect alcohols with clean fluoride release.',
    objectives: [
      'Explain beta silicon stabilisation by $C-Si$ sigma donation into $p$ vacancy',
      'Contrast acid anti versus base syn Peterson elimination stereochemistry',
      'Protect alcohols as $TMS$ or $TBS$ ethers and cleave with fluoride'
    ],
    concepts: [
      {
        term: 'Beta silicon effect',
        kind: 'theorem',
        statement: 'A **silyl group beta to a cation donates sigma density** `beta-silicon` $C-Si$ filled sigma overlaps the vacant $p$ orbital and flattens the $C-Si$ bond for cleavage.',
        detail: 'Electropositive $Si$ near $1.8$ electronegativity makes the $C-Si$ bond a superb donor, fixing regiochemistry of electrophilic attack alpha to silicon. The weakened bond is then cut by $F$ minus or $O$ nucleophiles.'
      },
      {
        term: 'Peterson elimination pair',
        kind: 'law',
        statement: 'A **beta hydroxy silane eliminates by two opposite paths** `Peterson` acid gives anti periplanar loss while base gives syn loss through $O-Si$ bonding.',
        detail: 'Under acid the $OH$ leaves as water anti to silicon like an $E2$ reaction. Under base with $KH$ the alkoxide grips silicon and the same diastereomer collapses syn to the opposite alkene geometry.'
      },
      {
        term: 'Silyl ether protection',
        kind: 'method',
        statement: 'A **silyl ether masks an alcohol through later steps** `silyl-protect` $ROH$ plus $TBSCl$ plus imidazole gives $ROTBS$, stable to base and $Grignard$ reagents.',
        detail: '$TMS$ is small and labile while $TBS$ plus $TBDPS$ survive chromatography and selective steps. Tetrabutylammonium fluoride $TBAF$ cleaves by strong $Si-F$ bond formation under neutral conditions.'
      },
      {
        term: 'Vinyl and aryl silane ipso chemistry',
        kind: 'insight',
        statement: 'A **vinyl silane substitutes with retention at the silyl carbon** `ipso-silicon` electrophile adds beta to silicon and the $C-Si$ bond leaves from the aligned conformer.',
        detail: 'Rotation locks the $C-Si$ bond parallel to the cation $p$ orbital, so desilylation beats bond rotation and geometry is retained. Aryl silanes similarly direct ipso substitution ortho logic aside.'
      },
      {
        term: 'Allyl silanes and Lewis acids',
        kind: 'definition',
        statement: 'An **allyl silane attacks electrophiles at the far alkene end** `allyl-silane` gamma attack through a beta silyl cation relocates the double bond with allylic shift.',
        detail: 'Activation by $TiCl_{4}$ or $TMSOTf$ lets aldehydes, acetals and acid chlorides couple with total regiocontrol. The same beta cation logic explains why five product mixtures collapse to one.'
      }
    ],
    figures: [
      {
        caption: 'Beta hydroxy silane under acid loses water anti to $SiMe_{3}$, while base grips $SiMe_{3}$ through $O-Si$ and leaves syn to the opposite alkene.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Peterson acid anti versus base syn elimination"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">beta hydroxy silane</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">C C SiMe3</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">one diastereomer</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">acid: anti loss</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">H2O leaves anti</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">E2 style</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">base: syn loss</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">O grips Si</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">same starter, opposite alkene by reagent</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Exocyclic methylenation by Peterson',
        problem: 'A cyclic ketone plus $Me_{3}SiCH_{2}MgBr$ adduct gives a beta hydroxy silane. Convert it to the exocyclic alkene cleanly.',
        steps: [
          { label: 'Step 1', text: 'Build the adduct:\n```text\nketone + Me3SiCH2MgBr -> beta hydroxy silane\nacid route: protonate OH, anti loss\nbase route: deprotonate OH, syn loss\n```\nOnly the silyl bearing carbon can eliminate, so no regioisomer forms.' },
          { label: 'Step 2', text: 'Treat with mild acid or fluoride to trigger anti elimination of water plus $Me_{3}Si$ group.' },
          { label: 'Step 3', text: 'Isolate the single exocyclic alkene where classical dehydration would give endocyclic mixtures.' }
        ],
        result: 'Single exocyclic alkene in high yield with full regiocontrol.'
      },
      {
        title: 'Selective TBS deprotection',
        problem: 'A diol protected as primary $TBS$ ether plus secondary acetate needs the primary alcohol freed without touching the acetate. Choose the reagent.',
        steps: [
          { label: 'Step 1', text: 'Recognise $TBS$ ethers cleave by fluoride affinity while acetates need base or acid hydrolysis.' },
          { label: 'Step 2', text: 'Add $TBAF$ at low temperature to form the strong $Si-F$ bond and release the alkoxide.' },
          { label: 'Step 3', text: 'Quench to the free primary alcohol with the acetate intact.' }
        ],
        result: 'Clean primary alcohol with acetate preserved by fluoride selectivity.'
      }
    ],
    keyTakeaways: [
      'Beta $C-Si$ donation stabilises cations and fixes attack alpha to silicon.',
      'Peterson acid path is anti while base path is syn to opposite geometries.',
      '$TBS$ ethers protect alcohols and $TBAF$ releases them by $Si-F$ drive.',
      'Allyl plus vinyl silanes substitute with rearrangement but full regiocontrol.'
    ],
    quiz: [
      {
        q: 'Beta silicon effect means:',
        options: ['$C-Si$ sigma donation stabilises a beta carbocation', 'Silicon withdraws by induction only', 'Silicon blocks all ionisation', 'Alpha protons become less acidic'],
        answer: 0,
        explanation: 'Step 1: Place $Si$ beta to the $p$ vacancy. Step 2: Overlap filled $C-Si$ sigma with empty $p$. Step 3: Assign rate and regiocontrol to this donation.'
      },
      {
        q: 'Base promoted Peterson elimination is:',
        options: ['Anti $E2$ always', 'Syn through $O-Si$ bonded cyclic array', 'Radical chain', 'Carbene insertion'],
        answer: 1,
        explanation: 'Step 1: Deprotonate $OH$ to alkoxide. Step 2: Bond alkoxide oxygen to silicon. Step 3: Collapse syn to the alkene.'
      },
      // PYQ-pattern: silyl protecting group and fluoride cleavage drill
      {
        q: 'Reagent that cleaves $TBS$ ethers selectively is:',
        options: ['Aqueous $Na_{2}CO_{3}$ only', '$Br_{2}$ in $CCl_{4}$', '$TBAF$ fluoride source', 'Cold dilute $H_{2}$'],
        answer: 2,
        explanation: 'Step 1: Target the $Si-O$ bond. Step 2: Exploit strong $Si-F$ bond formation. Step 3: Select $TBAF$ under neutral conditions.'
      },
      {
        q: 'Vinyl silane electrophilic substitution occurs:',
        options: ['Meta to silicon with inversion', 'At oxygen only', 'By free radical chain always', 'Ipso to silicon with retention'],
        answer: 3,
        explanation: 'Step 1: Add electrophile beta to silicon. Step 2: Align $C-Si$ with the cation $p$ orbital. Step 3: Lose silyl ipso with retention.'
      }
    ]
  },
  // ---------------------------------------------------------------- 36.4
  {
    sectionId: 'chem-ch36-s4',
    readingTime: 10,
    intro: 'Sulfur ylides and sulfones give the connective alkene chemistry that phosphorus cannot reach. Sulfonium ylides deliver epoxides from carbonyls while stabilized variants deliver cyclopropanes from enones. The Julia olefination joins a sulfone anion with an aldehyde and then reductively erases sulfur to a strongly $E$ alkene.',
    objectives: [
      'Contrast sulfonium ylide epoxidation with phosphonium ylide olefination',
      'Run Julia sequence: anion plus aldehyde plus acylation plus $Na$ amalgam reduction',
      'Use dithiane umpolung plus Pummerer idea for carbonyl homologation'
    ],
    concepts: [
      {
        term: 'Sulfonium ylide epoxidation',
        kind: 'definition',
        statement: 'A **sulfonium methylide transfers CH2 to carbonyl oxygen** `sulfonium-epoxide` $Me_{2}S$ plus $CH_{2}$ plus $R_{2}CO$ gives epoxide plus $Me_{2}S$ leaving group.',
        detail: 'Betaine alkoxide closes by displacing neutral sulfide, and no strong $S=O$ payoff exists to force alkene formation. The method converts aldehydes and ketones, including hindered ones, to terminal epoxides.'
      },
      {
        term: 'Stabilized ylide cyclopropanation',
        kind: 'theorem',
        statement: 'A **conjugated sulfonium ylide picks the enone double bond** `cyclopropane-switch` ester or cyano stabilized ylide adds $1$ comma $4$ to enones then closes to cyclopropane.',
        detail: 'Direct $1$ comma $2$ addition is faster but reversible, while conjugate addition is slower and irreversible, so the thermodynamic cyclopropane wins. Sulfoxonium ylides $Me_{2}S$ plus $O$ plus $CH_{2}$ behave the same way.'
      },
      {
        term: 'Julia olefination E machine',
        kind: 'law',
        statement: 'A **sulfone plus aldehyde adduct reduces to an E alkene** `Julia-E` $PhSO_{2}CH_{2}R$ anion plus $RCHO$, then acylation, then $Na$ amalgam gives $E$ alkene plus $PhSO_{2}$ minus.',
        detail: 'Elimination passes through a vinyl sulfone that reduces to a vinyl anion, which settles to the stable $E$ configuration before protonation. Either diastereomer of the adduct converges to the same $E$ product.'
      },
      {
        term: 'Dithiane umpolung',
        kind: 'method',
        statement: 'A **dithiane flips carbonyl polarity from electrophile to nucleophile** `umpolung` aldehyde plus $HSCH_{2}CH_{2}CH_{2}SH$ gives dithiane, then $BuLi$ gives an acyl anion equivalent.',
        detail: 'Alkylation followed by $Hg$ two plus or oxidative hydrolysis reveals the carbonyl homologated by one carbon. The trick joins two electrophiles that could never meet directly.'
      },
      {
        term: 'Pummerer activation idea',
        kind: 'insight',
        statement: 'A **sulfoxide activated by anhydride turns alpha carbon electrophilic** `Pummerer` $R_{2}S=O$ plus $(CH_{3}CO)_{2}O$ gives alpha acetoxy sulfide through sulfonium capture.',
        detail: 'Acylation of sulfoxide oxygen makes sulfur a superb leaving group scaffold, so acetate attacks the alpha carbon. The route installs alpha oxygen beside sulfur for later carbonyl unmasking.'
      }
    ],
    figures: [
      {
        caption: 'Sulfonium ylide plus $R_{2}CO$ closes to epoxide, stabilized ylide diverts enones to cyclopropane, and Julia sulfone plus $RCHO$ reduces to $E$ alkene.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sulfur ylide epoxide versus cyclopropane and Julia E alkene"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Me2S plus CH2</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">plus R2CO</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">epoxide out</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">stabilized ylide</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">enone to ring</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">cyclopropane</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Julia sulfone</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">Na amalgam E</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">one step tetrazole variant with KHMDS</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Epoxide from sulfonium methylide',
        problem: 'Benzophenone $Ph_{2}CO$ resists Wittig methylenation but needs the epoxide $Ph_{2}C$ minus $O$ minus $CH_{2}$. Run the sulfur ylide route.',
        steps: [
          { label: 'Step 1', text: 'Make the ylide:\n```text\nMe3S+I- + NaH -> Me2S+CH2- + H2 + NaI\nadd Ph2CO at low temperature\nbetaine alkoxide forms\n```\nSulfonium salts deprotonate cleanly with $NaH$.' },
          { label: 'Step 2', text: 'Let the alkoxide displace $Me_{2}S$ intramolecularly to close the three membered ring.' },
          { label: 'Step 3', text: 'Isolate the diaryl epoxide with dimethyl sulfide as the volatile byproduct.' }
        ],
        result: 'Terminal epoxide from a hindered ketone that Wittig chemistry misses.'
      },
      {
        title: 'Julia E stilbene assembly',
        problem: 'Benzyl phenyl sulfone anion plus $PhCHO$ should give stilbene $PhCH$ double bond $CHPh$. Give the sequence and geometry.',
        steps: [
          { label: 'Step 1', text: 'Deprotonate $PhSO_{2}CH_{2}Ph$ with $BuLi$ and add $PhCHO$ to the beta hydroxy sulfone.' },
          { label: 'Step 2', text: 'Acylate with benzoyl chloride or acetic anhydride to install the leaving ester.' },
          { label: 'Step 3', text: 'Reduce with $Na$ amalgam in methanol through the vinyl sulfone to the $E$ stilbene.' }
        ],
        result: '$E$ stilbene as the dominant isomer from either adduct diastereomer.'
      }
    ],
    keyTakeaways: [
      'Sulfonium ylides give epoxides since no strong $S=O$ alkene payoff exists.',
      'Stabilized sulfur ylides divert enones to cyclopropanes by reversible $1$ comma $2$ logic.',
      'Julia sequence converges any adduct mixture to the $E$ alkene by $Na$ amalgam.',
      'Dithianes invert carbonyl polarity while Pummerer activates sulfoxide alpha carbon.'
    ],
    quiz: [
      {
        q: 'Sulfonium ylide plus ketone gives:',
        options: ['Epoxide plus $Me_{2}S$', 'Alkene plus $Me_{2}S=O$', 'Cyclohexane', 'No reaction ever'],
        answer: 0,
        explanation: 'Step 1: Add ylide carbon to $C=O$. Step 2: Form betaine alkoxide. Step 3: Close epoxide by sulfide displacement.'
      },
      {
        q: 'Stabilized sulfonium ylide plus enone gives:',
        options: ['Epoxide only', 'Cyclopropane by conjugate addition', 'Diene by elimination', 'Polymer only'],
        answer: 1,
        explanation: 'Step 1: Compare fast reversible $1$ comma $2$ attack. Step 2: Follow slow irreversible $1$ comma $4$ attack. Step 3: Close to cyclopropane.'
      },
      // PYQ-pattern: Julia sequence and E outcome drill
      {
        q: 'Julia olefination reductant plus outcome is:',
        options: ['$Lindlar$ giving $Z$ only', 'Ozone giving cleavage', '$Na$ amalgam giving $E$ alkene', 'Cold water giving alcohol'],
        answer: 2,
        explanation: 'Step 1: Acylate the hydroxy sulfone adduct. Step 2: Reduce with $Na$ amalgam via vinyl sulfone. Step 3: Settle vinyl anion to $E$ alkene.'
      },
      {
        q: 'Dithiane plus $BuLi$ acts as:',
        options: ['Electrophilic acyl cation', 'Spectator solvent', 'Oxidizing agent', 'Acyl anion equivalent nucleophile'],
        answer: 3,
        explanation: 'Step 1: Form dithiane from aldehyde plus dithiol. Step 2: Deprotonate with $BuLi$. Step 3: Alkylate as umpolung nucleophile.'
      }
    ]
  }
]
