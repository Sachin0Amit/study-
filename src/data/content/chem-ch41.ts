import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 41: Organometallics and Catalysis
// Sections 41.1 - 41.4. Eighteen electron rule, metal carbonyls,
// cross couplings, metathesis plus McMurry, Ziegler Natta catalysis.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh41Content: SectionContent[] = [
  // ---------------------------------------------------------------- 41.1
  {
    sectionId: 'chem-ch41-s1',
    readingTime: 10,
    intro: 'Organometallics count electrons to the noble gas shell while $CO$ both donates sigma and accepts pi back donation. Mononuclear $Ni(CO)_{4}$ plus $Fe(CO)_{5}$ plus $Cr(CO)_{6}$ show the $18$ electron rule in clean form. Stretching frequency plus bond lengths then report the back donation strength.',
    objectives: [
      'Count to $18$ by neutral ligand $2$ per $CO$ plus metal valence sum',
      'Draw $Ni(CO)_{4}$ plus $Fe(CO)_{5}$ plus $Cr(CO)_{6}$ geometries',
      'Read back donation by $CO$ stretch fall plus $M-C$ short $C-O$ long'
    ],
    concepts: [
      {
        term: 'Eighteen electron counting',
        kind: 'law',
        statement: 'A **metal valence plus ligand gifts target noble closure** `eighteen-count` $Cr$ group $6$ plus $6CO$ times $2$ gives $18$ while $Fe$ group $8$ plus $5CO$ times $2$ gives $18$.',
        detail: 'Count neutral ligands as $2$ per $CO$ plus phosphine plus alkene, $1$ per $H$ plus alkyl plus halogen, and $5$ per $C_{5}H_{5}$ cyclopentadienyl. Add metal group number for zero oxidation state, or d count plus gifts for ionic method. $18$ means $Kr$ plus $Xe$ shell closure for stable carbonyls.'
      },
      {
        term: 'Landmark carbonyl shapes',
        kind: 'definition',
        statement: 'A **coordination number sets carbonyl geometry** `carbonyl-shapes` $Ni(CO)_{4}$ tetrahedral plus $Fe(CO)_{5}$ trigonal bipyramidal plus $Cr(CO)_{6}$ octahedral all hit $18$.',
        detail: '$Ni$ group $10$ plus $8$ gifts gives $18$, $Fe$ group $8$ plus $10$ gifts gives $18$, $Cr$ group $6$ plus $12$ gifts gives $18$. $Mn_{2}(CO)_{10}$ adds a metal metal bond so each $Mn$ reaches $18$. $Co_{2}(CO)_{8}$ balances terminal plus bridging $CO$ to the same total.'
      },
      {
        term: 'Bridging versus terminal CO',
        kind: 'method',
        statement: 'A **bridging carbonyl stretches lower than terminal** `bridge-terminal` terminal near $2000$ per cm while mu $CO$ near $1850$ per cm in $Fe_{2}(CO)_{9}$ plus $Co_{2}(CO)_{8}$.',
        detail: 'Bridge donates to two metals so $C-O$ weakens further and $M-C$ gains double character. Infrared counts bands to infer structure without crystals. $Ni(CO)_{4}$ shows one terminal band by tetra symmetry while $Fe(CO)_{5}$ shows two by bipyramid symmetry.'
      },
      {
        term: 'Back donation evidence',
        kind: 'theorem',
        statement: 'A **metal to pi star gift weakens C-O and firms M-C** `back-donate` free $CO$ near $2143$ per cm falls on binding while $C-O$ length grows and $M-C$ shrinks.',
        detail: 'Sigma donation from $C$ lone pair to metal plus pi back gift from metal d to $CO$ pi star work in synergy. More electron rich metal pushes more back gift, so anionic $V(CO)_{6}$ minus stretches lower than neutral $Cr(CO)_{6}$. Acceptor phosphites compete and tune the frequency ladder.'
      },
      {
        term: 'Sixteen electron plus violation flags',
        kind: 'insight',
        statement: 'A **sixteen count signals unsaturation for attack** `sixteen-flag` $Vaska$ $IrCl(CO)(PPh_{3})_{2}$ at $16$ adds $H_{2}$ plus $O_{2}$ to reach $18$.',
        detail: 'Bulky ligands or early metals stall at $16$ or below, as $TiCl_{4}$ plus $W(CH_{3})_{6}$ show. $19$ plus $20$ counts mark radicals that dimerize or lose $CO$. Count first, then predict substitution versus addition versus redox path.'
      }
    ],
    figures: [
      {
        caption: '$Ni(CO)_{4}$ plus $Fe(CO)_{5}$ plus $Cr(CO)_{6}$ hit $18$ while back gift drops $CO$ stretch from $2143$ per cm and $16$ flags attack.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Eighteen count carbonyl shapes with back donation" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">18 count</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">metal plus 2 per CO</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">noble close</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Ni Fe Cr</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">tetra bipy octa</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">all hit 18</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">back gift</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">CO stretch falls</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">16 means open site, 19 means lose CO</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Iron pentacarbonyl count',
        problem: '$Fe(CO)_{5}$ needs electron total plus geometry plus substitution hint. Work the count.',
        steps: [
          { label: 'Step 1', text: 'Count neutral:\n```text\nFe group 8 -> 8 valence\n5 CO x 2 = 10 gifts\ntotal 18, trigonal bipyramid\n```\nEach $CO$ gifts two as neutral ligand.' },
          { label: 'Step 2', text: 'Assign $Fe(CO)_{5}$ trigonal bipyramidal with two infrared bands matching that symmetry.' },
          { label: 'Step 3', text: 'Predict $CO$ loss to $16$ $Fe(CO)_{4}$ that binds alkene to regain $18$.' }
        ],
        result: '$Fe(CO)_{5}$ is $18$ trigonal bipyramidal that substitutes via $16$ intermediate.'
      },
      {
        title: 'Back donation ranking',
        problem: 'Free $CO$ near $2143$ per cm drops to $2000$ per cm in $Cr(CO)_{6}$ and lower in $V(CO)_{6}$ minus. Rank back gift.',
        steps: [
          { label: 'Step 1', text: 'Read stretch fall as $C-O$ weakening by pi star filling from metal.' },
          { label: 'Step 2', text: 'Order free $CO$ highest then $Cr(CO)_{6}$ then anionic $V(CO)_{6}$ minus lowest.' },
          { label: 'Step 3', text: 'Link lowest stretch to most electron rich metal with strongest $M-C$ plus weakest $C-O$.' }
        ],
        result: 'Back gift rises free $CO$ below $Cr(CO)_{6}$ below $V(CO)_{6}$ minus.'
      }
    ],
    keyTakeaways: [
      '$18$ equals metal group plus $2$ per $CO$ plus standard gifts.',
      '$Ni(CO)_{4}$ tetra plus $Fe(CO)_{5}$ bipyramid plus $Cr(CO)_{6}$ octa all hit $18$.',
      'Bridge $CO$ near $1850$ per cm stretches lower than terminal near $2000$ per cm.',
      'Back gift drops $CO$ stretch from $2143$ per cm with $M-C$ short $C-O$ long.'
    ],
    quiz: [
      {
        q: '$Cr(CO)_{6}$ count is:',
        options: ['$Cr$ $6$ plus $12$ gifts equals $18$', '$Cr$ $6$ alone', '$12$ alone', 'No rule'],
        answer: 0,
        explanation: 'Step 1: Take $Cr$ group $6$. Step 2: Add $6CO$ times $2$ equals $12$. Step 3: Sum to $18$ octahedral.'
      },
      {
        q: '$Fe(CO)_{5}$ geometry is:',
        options: ['Square planar', 'Trigonal bipyramidal $18$ with two bands', 'Linear', 'Tetrahedral'],
        answer: 1,
        explanation: 'Step 1: Count $8$ plus $10$ equals $18$. Step 2: Set five coordinate shape. Step 3: Select trigonal bipyramid.'
      },
      // PYQ-pattern — carbonyl stretch back donation (rephrased)
      {
        q: 'Lower $CO$ stretch on binding means:',
        options: ['No bonding', 'Stronger $C-O$ only', 'Back gift to pi star weakening $C-O$', 'Loss of metal'],
        answer: 2,
        explanation: 'Step 1: Compare $2143$ free to bound lower. Step 2: Fill $CO$ pi star from metal d. Step 3: Weaken $C-O$ while firming $M-C$.'
      },
      {
        q: '$16$ $IrCl(CO)(PPh_{3})_{2}$ reacts by:',
        options: ['Inert rest', 'Decompose only', 'Lose metal', 'Addition of $H_{2}$ plus $O_{2}$ to $18$'],
        answer: 3,
        explanation: 'Step 1: Count $16$ unsaturated. Step 2: Seek two electron add. Step 3: Add $H_{2}$ or $O_{2}$ to $18$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 41.2
  {
    sectionId: 'chem-ch41-s2',
    readingTime: 11,
    intro: 'Palladium cross couplings join aryl plus vinyl halides to carbon partners through a shared oxidative addition plus transmetalation plus reductive elimination loop. Heck builds substituted alkenes while Suzuki builds biaryls with boronic acids. Stille plus Negishi plus Sonogashira swap the nucleophile to tin plus zinc plus alkyne with copper help.',
    objectives: [
      'Draw shared $Pd$ zero plus $Pd$ two loop with three core steps',
      'Map Heck alkene plus Suzuki $B(OH)_{2}$ plus base roles',
      'Contrast Stille $Sn$ plus Negishi $Zn$ plus Sonogashira alkyne copper'
    ],
    concepts: [
      {
        term: 'Shared catalytic loop',
        kind: 'definition',
        statement: 'A **zero to two to zero palladium loop couples halves** `pd-loop` $Pd^{0}$ oxidative adds $ArX$ to $Pd^{2+}$ then transfers $R$ then reductively frees $ArR$.',
        detail: 'Start from $Pd^{0}$ phosphine complex, add $ArX$ to give $ArPd^{2+}X$. Move $R$ from partner metal or alkene to palladium, then couple $Ar$ plus $R$ out and reborn $Pd^{0}$. Base scavenges $HX$ and ligands tune each barrier.'
      },
      {
        term: 'Heck alkene arylation',
        kind: 'method',
        statement: 'A **aryl halide plus alkene gives substituted alkene** `heck-join` $ArX$ plus $CH_{2}$ double bond $CHR$ with $Pd$ plus base gives $ArCH$ double bond $CHR$ plus $HX$.',
        detail: 'After oxidative addition, alkene inserts migratory into $ArPd$ bond then beta hydride frees product. Base captures $HX$ to close the loop. Terminal alkenes give linear $E$ products while internal substitution follows steric plus electronic bias.'
      },
      {
        term: 'Suzuki boronic coupling',
        kind: 'method',
        statement: 'A **boronic acid plus base transfers aryl cleanly** `suzuki-join` $ArX$ plus $ArB(OH)_{2}$ with $Pd$ plus base gives $ArAr$ plus $B(OH)_{3}$ plus $X$ salt.',
        detail: 'Base activates boron to boronate that transmetalates faster to $Pd^{2+}$. Air stable $B(OH)_{2}$ plus low toxicity plus easy removal favour pharma scale biaryls. $Br$ plus $I$ react fastest while $Cl$ needs bulky phosphine ligands.'
      },
      {
        term: 'Stille plus Negishi partners',
        kind: 'theorem',
        statement: 'A **tin plus zinc partner swaps scope versus care** `stille-negishi` $ArX$ plus $RSnBu_{3}$ couples broad but toxic while $ArX$ plus $RZnX$ couples fast but water sensitive.',
        detail: 'Stille tolerates many groups yet leaves $Sn$ waste that purifies hard. Negishi $Zn$ is more nucleophilic so alkyl plus aryl move at low temperature but quench with $H_{2}O$. Both share the same $Pd$ loop with transmetalation as the partner specific step.'
      },
      {
        term: 'Sonogashira alkyne copper help',
        kind: 'insight',
        statement: 'A **copper acetylide shuttles alkyne to palladium** `sonogashira-shuttle` $ArX$ plus $HCC R$ with $Pd$ plus $CuI$ plus amine gives $ArCC R$ plus salt.',
        detail: 'Amine deprotonates terminal alkyne to $CuCC R$ that transmetalates to $ArPd^{2+}X$. Amine solvent scavenges $HX$ so no extra base load is needed. Copper free variants use bulky ligands plus stronger base for sensitive substrates.'
      }
    ],
    figures: [
      {
        caption: '$Pd^{0}$ adds $ArX$ then Heck inserts alkene, Suzuki moves $ArB(OH)_{2}$, Stille moves $Sn$, Negishi moves $Zn$, Sonogashira shuttles $HCC R$ via $Cu$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross coupling shared loop with five named partners" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Pd zero loop</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">add ArX</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">free ArR</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Heck Suzuki</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">alkene B acid</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">base helps</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Sn Zn alkyne</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">Cu shuttles</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">oxidative add, transfer, reductive free</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Suzuki biphenyl build',
        problem: '$C_{6}H_{5}Br$ plus $C_{6}H_{5}B(OH)_{2}$ with $Pd$ plus base needs biphenyl. Trace the transfer.',
        steps: [
          { label: 'Step 1', text: 'Start the loop:\n```text\nPd0 + PhBr -> PhPd2+Br oxidative add\nbase activates B acid to boronate\nboronate transfers Ph to Pd\n```\nPhosphine $Pd^{0}$ opens the cycle.' },
          { label: 'Step 2', text: 'Transmetalate $C_{6}H_{5}$ from $B$ to $PhPd^{2+}Br$ giving $Ph_{2}Pd^{2+}$.' },
          { label: 'Step 3', text: 'Reductively free $C_{6}H_{5}C_{6}H_{5}$ plus $Pd^{0}$ while base traps $HBr$ plus $B(OH)_{3}$.' }
        ],
        result: 'Biphenyl $C_{6}H_{5}C_{6}H_{5}$ forms with boron waste washed out.'
      },
      {
        title: 'Heck styrene arylation',
        problem: '$C_{6}H_{5}Br$ plus $CH_{2}$ double bond $CHPh$ needs trans stilbene logic. Show the insertion.',
        steps: [
          { label: 'Step 1', text: 'Oxidatively add $C_{6}H_{5}Br$ to $Pd^{0}$ giving $PhPd^{2+}Br$.' },
          { label: 'Step 2', text: 'Insert alkene migratory into $PhPd$ bond then beta hydride free $PhCH$ double bond $CHPh$ $E$ isomer.' },
          { label: 'Step 3', text: 'Trap $HBr$ with base to reborn $Pd^{0}$ for next turn.' }
        ],
        result: 'Trans stilbene type $E$ alkene builds by Heck insertion plus elimination.'
      }
    ],
    keyTakeaways: [
      '$Pd^{0}$ to $Pd^{2+}$ to $Pd^{0}$ loop joins $ArX$ to carbon partner.',
      'Heck inserts alkene then beta hydride frees $E$ alkene.',
      'Suzuki $ArB(OH)_{2}$ plus base gives clean biaryl $ArAr$.',
      'Stille $Sn$ broad plus Negishi $Zn$ fast plus Sonogashira $Cu$ alkyne shuttle.'
    ],
    quiz: [
      {
        q: 'First loop step with $ArX$ is:',
        options: ['Oxidative addition $Pd^{0}$ to $ArPd^{2+}X$', 'Reductive elimination', 'Beta hydride', 'Protonation'],
        answer: 0,
        explanation: 'Step 1: Start $Pd^{0}$ complex. Step 2: Add $ArX$ bond. Step 3: Get $ArPd^{2+}X$.'
      },
      {
        q: 'Suzuki boron partner needs:',
        options: ['No base', 'Base to boronate for transfer to $Pd^{2+}$', 'Strong acid', 'Light only'],
        answer: 1,
        explanation: 'Step 1: Form $ArB(OH)_{2}$ boronate with base. Step 2: Move $Ar$ to palladium. Step 3: Free $ArAr$ by elimination.'
      },
      {
        q: 'Assertion: Sonogashira needs $CuI$ plus amine to shuttle alkyne. Reason: $CuCC R$ formed in situ transmetalates $R$ to $ArPd^{2+}X$.',
        options: ['First true but second false', 'First false but second true', 'Both statements true and the second explains the first', 'Both false'],
        answer: 2,
        explanation: 'Step 1: Deprotonate $HCC R$ with amine plus $Cu$. Step 2: Form $CuCC R$ shuttle. Step 3: Transfer to palladium for $ArCC R$.'
      },
      {
        q: 'Stille versus Negishi trade is:',
        options: ['Same partner', 'No difference', 'No metals', 'Stille broad but $Sn$ toxic versus Negishi fast but water sensitive $Zn$'],
        answer: 3,
        explanation: 'Step 1: Note $Sn$ group tolerance. Step 2: Note $Sn$ waste burden. Step 3: Contrast $Zn$ speed with moisture care.'
      }
    ]
  },
  // ---------------------------------------------------------------- 41.3
  {
    sectionId: 'chem-ch41-s3',
    readingTime: 9,
    intro: 'Olefin metathesis shuffles alkylidenes through a metal carbene plus metallacyclobutane loop while McMurry pins two carbonyls with low valent titanium. Grubbs plus Schrock carbenes drive ring closing plus polymerization. McMurry then forges hindered $C$ double bond $C$ links that Wittig style routes miss.',
    objectives: [
      'Draw Chauvin carbene plus metallacyclobutane $2$ plus $2$ loop',
      'Use Grubbs $Ru$ plus Schrock $Mo$ for $RCM$ plus $ROMP$',
      'Couple $R_{2}CO$ to $R_{2}C$ double bond $CR_{2}$ by $Ti$ low valent'
    ],
    concepts: [
      {
        term: 'Chauvin metathesis loop',
        kind: 'definition',
        statement: 'A **metal carbene plus alkene form a four ring** `chauvin-loop` $M$ double bond $CHR$ plus $CH_{2}$ double bond $CHR$ gives metallacyclobutane then new $M$ double bond $CHR$ plus new alkene.',
        detail: 'Formal $2$ plus $2$ via metal breaks the Woodward Hoffmann ban by d orbitals. Each turn swaps alkylidenes so $2$ propene gives ethene plus butene. Ethylene loss drives ring closing shut while strain release drives ring opening polymerization.'
      },
      {
        term: 'Grubbs versus Schrock carbenes',
        kind: 'method',
        statement: 'A **ruthenium tolerant plus molybdenum fierce pair cover scope** `grubbs-schrock` Grubbs $Ru$ bears air plus $OH$ tolerance while Schrock $Mo$ hits hindered plus electron poor alkenes.',
        detail: 'First Grubbs $Ru$ phosphine plus second generation $NHC$ ligand raise turnovers. Hoveyda chelate aids recycle. Schrock $Mo$ plus $W$ imido alkylidenes run fastest but demand dry inert handling. Choose $Ru$ for function, $Mo$ for challenge.'
      },
      {
        term: 'Ring closing plus polymerization uses',
        kind: 'theorem',
        statement: 'A **diene ring shuts while strained ring opens to chain** `rcm-romp` alpha omega diene gives cycloalkene plus $C_{2}H_{4}$ by $RCM$ while norbornene gives polymer by $ROMP$.',
        detail: 'Dilute favours intramolecular $RCM$ to $5$ to $7$ membered rings for natural product cores. Concentrated plus strain favours $ROMP$ to unsaturated polymers. Cross metathesis stats mix two alkenes with excess of one partner to push selectivity.'
      },
      {
        term: 'McMurry titanium coupling',
        kind: 'method',
        statement: 'A **low valent titanium pins two carbonyls to alkene** `mcmurry-pin` $2R_{2}CO$ with $TiCl_{3}$ plus $LiAlH_{4}$ gives $R_{2}C$ double bond $CR_{2}$ plus $TiO_{2}$ type waste.',
        detail: 'Reduce $TiCl_{4}$ or $TiCl_{3}$ with $Zn$ plus $Cu$ or $LiAlH_{4}$ to active $Ti$ zero surface. Ketyl radicals couple to pinacolate then deoxygenate to alkene. Intramolecular dicarbonyl shuts strained rings that resist other olefination.'
      },
      {
        term: 'Carbonyl versus alkene scope',
        kind: 'insight',
        statement: 'A **McMurry tolerates hindered ketones that resist ylides** `scope-contrast` $Ph_{2}CO$ dimerizes to $Ph_{2}C$ double bond $CPh_{2}$ while metathesis reshuffles $C$ double bond $C$ without touching $C$ double bond $O$.',
        detail: 'Wittig fails on crowded diaryl ketones where $Ti$ succeeds by surface radicals. Metathesis ignores carbonyls so the two methods complement. Protect alcohols plus acids that kill low valent $Ti$ before coupling.'
      }
    ],
    figures: [
      {
        caption: 'Carbene plus alkene via metallacyclobutane shuffles to $RCM$ plus $ROMP$, while $Ti$ low valent pins $R_{2}CO$ to $R_{2}C$ double bond $CR_{2}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Metathesis loop with RCM ROMP and McMurry" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">M carbene</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">plus alkene</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">4 ring swap</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">RCM ROMP</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">Ru or Mo</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">rings or chains</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Ti pins CO</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">to C=C link</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">shuffle alkenes, pin carbonyls</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Ring closing diene shut',
        problem: 'Hepta diene $CH_{2}$ double bond $CH(CH_{2})_{3}CH$ double bond $CH_{2}$ with Grubbs $Ru$ needs cyclohexene. Show the drive.',
        steps: [
          { label: 'Step 1', text: 'Load carbene plus diene:\n```text\nRu carbene + terminal alkene -> metallacycle\nopen to new carbene + ethylene\nsecond arm closes the ring\n```\nEach $2$ plus $2$ swaps one alkylidene.' },
          { label: 'Step 2', text: 'Close to cyclohexene plus $C_{2}H_{4}$ with dilute load favouring intra over chain.' },
          { label: 'Step 3', text: 'Vent $C_{2}H_{4}$ to pull the equilibrium to ring shut.' }
        ],
        result: 'Dilute $RCM$ gives cyclohexene plus $C_{2}H_{4}$ vented.'
      },
      {
        title: 'McMurry benzophenone dimer',
        problem: '$Ph_{2}CO$ needs $Ph_{2}C$ double bond $CPh_{2}$ crowded alkene. Show the $Ti$ path.',
        steps: [
          { label: 'Step 1', text: 'Make low valent $Ti$ from $TiCl_{3}$ plus $LiAlH_{4}$ as black slurry.' },
          { label: 'Step 2', text: 'Pin two $Ph_{2}CO$ to pinacolate on $Ti$ surface by ketyl coupling.' },
          { label: 'Step 3', text: 'Deoxygenate to $Ph_{2}C$ double bond $CPh_{2}$ plus $Ti$ oxide waste.' }
        ],
        result: 'McMurry forges hindered $Ph_{2}C$ double bond $CPh_{2}$ that ylides miss.'
      }
    ],
    keyTakeaways: [
      'Carbene plus alkene via metallacyclobutane swaps alkylidenes.',
      'Grubbs $Ru$ tolerant versus Schrock $Mo$ fierce sets catalyst pick.',
      'Dilute $RCM$ shuts rings while strain drives $ROMP$ chains.',
      'Low $Ti$ pins $R_{2}CO$ to $R_{2}C$ double bond $CR_{2}$ hindered alkenes.'
    ],
    quiz: [
      {
        q: 'Metathesis key intermediate is:',
        options: ['Metallacyclobutane four ring', 'Oxaphosphetane', 'Bromonium ion', 'Carbocation'],
        answer: 0,
        explanation: 'Step 1: Add carbene to alkene. Step 2: Form four membered metal ring. Step 3: Split to swapped partners.'
      },
      {
        q: 'Grubbs $Ru$ picked over Schrock $Mo$ when feed has:',
        options: ['Dry inert only', 'Air plus $OH$ groups needing tolerance', 'No alkenes', 'Only carbonyls'],
        answer: 1,
        explanation: 'Step 1: Note $Ru$ function tolerance. Step 2: Note $Mo$ moisture kill. Step 3: Select $Ru$ for $OH$ feeds.'
      },
      // PYQ-pattern: NEET 2020 — RCM ethylene drive (rephrased)
      {
        q: '$RCM$ driven shut by:',
        options: ['Adding water', 'Cooling only', 'Venting $C_{2}H_{4}$ from diene shut', 'Adding acid'],
        answer: 2,
        explanation: 'Step 1: Form ring plus $C_{2}H_{4}$. Step 2: Remove $C_{2}H_{4}$ gas. Step 3: Pull equilibrium to cycloalkene.'
      },
      {
        q: 'McMurry reagent plus outcome is:',
        options: ['$Pd$ plus base to biaryl', '$H_{2}$ plus $Pt$ to alkane', 'Ozone to cleavage', 'Low $Ti$ from $TiCl_{3}$ plus reductant giving $R_{2}C$ double bond $CR_{2}$'],
        answer: 3,
        explanation: 'Step 1: Reduce $TiCl_{3}$ to $Ti$ zero. Step 2: Couple two $R_{2}CO$ on surface. Step 3: Deoxygenate to hindered alkene.'
      }
    ]
  },
  // ---------------------------------------------------------------- 41.4
  {
    sectionId: 'chem-ch41-s4',
    readingTime: 8,
    intro: 'Homogeneous catalysts share the phase with reactants for single site control while heterogeneous beds work by surface adsorption plus reaction plus desorption. Wilkinson $RhCl(PPh_{3})_{3}$ hydrogenates in solution and Ziegler $Ti$ plus $Al$ polymerizes on solid. Poisoning plus leaching then decide lifetime and purity.',
    objectives: [
      'Contrast homogeneous single site with heterogeneous surface steps',
      'Run Wilkinson $RhCl(PPh_{3})_{3}$ $H_{2}$ addition cycle in outline',
      'Polymerize ethene plus propene by Ziegler $TiCl_{4}$ plus $AlEt_{3}$ insertion'
    ],
    concepts: [
      {
        term: 'Homogeneous single site control',
        kind: 'definition',
        statement: 'A **same phase complex gives uniform steric plus electronic tune** `homo-tune` $RhCl(PPh_{3})_{3}$ in $C_{6}H_{6}$ hydrogenates alkenes with ligand set selectivity.',
        detail: 'All metal centres see same ligands so rate plus branch plus face select with phosphine bite. Read kinetics directly by spectroscopy in solution. Separate by distillation or extraction since catalyst rides with product stream.'
      },
      {
        term: 'Heterogeneous surface ladder',
        kind: 'law',
        statement: 'A **adsorb plus react plus desorb ladder rules solid catalysis** `surface-ladder` $N_{2}$ plus $H_{2}$ on $Fe$ dissociate then hydrogenate then free $NH_{3}$ from the bed.',
        detail: 'Rate grows with clean area and correct crystal face, then falls when $CO$ plus $S$ block sites as poisons. Porous pellets balance area against diffusion drag. Filter or fix the bed to keep product metal free.'
      },
      {
        term: 'Wilkinson hydrogenation outline',
        kind: 'method',
        statement: 'A **rhodium hydride adds across the double bond** `wilkinson-H` $RhCl(PPh_{3})_{3}$ loses $PPh_{3}$ then adds $H_{2}$ then binds alkene then inserts plus frees alkane.',
        detail: 'Dissociate one $PPh_{3}$ to open a site, oxidatively add $H_{2}$ to dihydride, coordinate alkene and insert to alkyl, then reductively free alkane. Less hindered alkenes bind faster so terminal reduces before tri substituted. $Pd$ on carbon heterogeneous analogue needs no phosphine tune.'
      },
      {
        term: 'Ziegler Natta insertion polymerization',
        kind: 'theorem',
        statement: 'A **titanium alkyl inserts ethene repeatedly** `ZN-insert` $TiCl_{4}$ plus $AlEt_{3}$ gives $Ti$ $Et$ that binds $C_{2}H_{4}$ then inserts to propyl and repeats.',
        detail: 'Cossee Arlman loop of coordination plus migratory insertion grows the chain one $C_{2}H_{4}$ at a time. $AlEt_{3}$ alkylates $Ti$ and scavenges water plus oxygen killers. Each insertion keeps the alkyl on $Ti$ so the end stays live for thousands of turns.'
      },
      {
        term: 'Stereoregulation plus poisoning',
        kind: 'insight',
        statement: 'A **chiral solid pocket picks propene faces** `tactic-poison` heterogeneous $TiCl_{3}$ plus $AlEt_{2}Cl$ gives isotactic $PP$ while $CO$ plus $H_{2}O$ kill sites.',
        detail: 'Isotactic all methyl same side crystallizes hard while atactic random stays soft. $H_{2}$ meters mass by chain transfer to $TiH$. $S$ plus $CO$ plus $O_{2}$ chemisorb hard and demand pure feeds plus guard beds.'
      }
    ],
    figures: [
      {
        caption: 'Single site $RhCl(PPh_{3})_{3}$ in solution versus $Fe$ surface ladder, with $Ti$ plus $Al$ insertion growing $C_{2}H_{4}$ to $PP$ tactic chains.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Homogeneous versus heterogeneous with Ziegler insertion" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">homo single</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">Rh in solution</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">ligand tune</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">hetero bed</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">adsorb react</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">desorb free</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Ti plus Al</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">insert ethene</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">poison blocks, H2 meters mass</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Terminal alkene selection',
        problem: 'Hexene $CH_{2}$ double bond $CHC_{4}H_{9}$ plus trisubstituted $C_{6}H_{12}$ isomer with Wilkinson $Rh$ plus $H_{2}$ needs selective reduction. Predict order.',
        steps: [
          { label: 'Step 1', text: 'Open the cycle:\n```text\nRhCl(PPh3)3 - PPh3 -> open site\nopen site + H2 -> dihydride\nalkene binds then inserts\n```\nBinding favours less hindered face.' },
          { label: 'Step 2', text: 'Bind terminal $CH_{2}$ double bond $CHC_{4}H_{9}$ faster than crowded tri substituted $C_{6}H_{12}$ on $Rh$.' },
          { label: 'Step 3', text: 'Release hexane first while tri substituted waits for second $H_{2}$ charge.' }
        ],
        result: 'Terminal alkene hydrogenates first by easier $Rh$ binding.'
      },
      {
        title: 'Propene tactic control',
        problem: 'Propene with $TiCl_{3}$ plus $AlEt_{2}Cl$ needs isotactic $PP$ versus atactic mix. Show the pocket logic.',
        steps: [
          { label: 'Step 1', text: 'Generate $Ti$ $Et$ active site on $TiCl_{3}$ crystal face with $Al$ alkylation.' },
          { label: 'Step 2', text: 'Bind propene same enantioface each turn in chiral pocket to place all $CH_{3}$ same side.' },
          { label: 'Step 3', text: 'Insert to grow isotactic chain that crystallizes, versus random pocket giving atactic soft mix.' }
        ],
        result: 'Chiral $Ti$ pocket gives isotactic $PP$ while open site gives atactic.'
      }
    ],
    keyTakeaways: [
      'Homogeneous $RhCl(PPh_{3})_{3}$ tunes in phase while beds work by surface ladder.',
      'Adsorb plus react plus desorb with $CO$ plus $S$ poison control sets bed rate.',
      '$TiCl_{4}$ plus $AlEt_{3}$ inserts $C_{2}H_{4}$ live for thousands of turns.',
      'Chiral $Ti$ pocket gives isotactic $PP$ and $H_{2}$ meters chain mass.'
    ],
    quiz: [
      {
        q: 'Homogeneous advantage is:',
        options: ['Uniform single site tune in same phase', 'No ligands', 'Always easy separation', 'No kinetics'],
        answer: 0,
        explanation: 'Step 1: Share phase with feed. Step 2: Tune all centres alike. Step 3: Read selectivity by ligand bite.'
      },
      {
        q: 'Heterogeneous rate falls when:',
        options: ['Area rises', '$CO$ plus $S$ block sites as poisons', 'Temperature tunes', 'Pressure rises'],
        answer: 1,
        explanation: 'Step 1: Need free metal sites. Step 2: Block with $CO$ plus $S$. Step 3: Lose adsorb plus react turns.'
      },
      // PYQ-pattern — Ziegler insertion step (rephrased)
      {
        q: 'Ziegler chain grows by:',
        options: ['Radical coupling', 'Carbocation shift', 'Coordination plus migratory insertion of $C_{2}H_{4}$ on $Ti$ alkyl', 'Acid cracking'],
        answer: 2,
        explanation: 'Step 1: Bind $C_{2}H_{4}$ on $Ti$ alkyl. Step 2: Insert to extend propyl. Step 3: Repeat live for long chain.'
      },
      {
        q: 'Isotactic $PP$ means:',
        options: ['Random $CH_{3}$ sides', 'Branched chains', 'Crosslinked net', 'All $CH_{3}$ same side by face selective insertion'],
        answer: 3,
        explanation: 'Step 1: Bind propene same face. Step 2: Insert with $CH_{3}$ same side. Step 3: Crystallize hard tactic chain.'
      }
    ]
  }
]
