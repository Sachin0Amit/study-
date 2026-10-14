import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 39: Purification and Elemental Analysis
// Sections 39.1 - 39.4. Crystallization, distillation, sublimation,
// chromatography with Rf, Lassaigne detection plus Kjeldahl and Carius limits.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh39Content: SectionContent[] = [
  // ---------------------------------------------------------------- 39.1
  {
    sectionId: 'chem-ch39-s1',
    readingTime: 9,
    intro: 'Crude solids are freed by crystallization that exploits solubility change with temperature while $C_{6}H_{5}COOH$ in $H_{2}O$ shows the hot dissolve cold deposit pattern. Simple distillation suits wide boiling gaps and fractional columns resolve close boilers while $C_{6}H_{5}NH_{2}$ by steam and glycerol by vacuum rescue sensitive feeds. Sublimation then isolates $C_{10}H_{8}$ plus camphor type solids that pass to vapour without melting.',
    objectives: [
      'Select crystallization solvent by hot dissolve cold deposit plus inertness test',
      'Choose simple versus fractional versus steam versus vacuum distillation by boiling gap',
      'Apply sublimation filter for $C_{10}H_{8}$ plus $I_{2}$ type solids with cool finger'
    ],
    concepts: [
      {
        term: 'Ideal crystallization solvent',
        kind: 'definition',
        statement: 'A **hot soluble cold insoluble inert solvent purifies by cooling** `crystal-solvent` $C_{6}H_{5}COOH$ dissolves hot in $H_{2}O$ and deposits cold while impurities stay in mother liquor.',
        detail: 'Filter hot to remove insoluble dust then cool slowly for large crystals that trap less impurity. Charcoal boils with colour then filters hot out, and seeding plus scratching starts nucleation when supersaturation lingers. Wash cold with same solvent and dry by pressing between sheets.'
      },
      {
        term: 'Fractional crystallization ladder',
        kind: 'method',
        statement: 'A **solubility gap separates mixed salts by staged crops** `fractional-crop` $KNO_{3}$ crystallizes first from $NaCl$ mixture on cooling while the second stays back for later crop.',
        detail: 'Repeat dissolution plus cooling to enrich each crop, tracking by flame or spot test. Mixed solvents tune polarity when one solvent fails the hot versus cold test. Slow cooling grows pure large crystals while quenching traps mother liquor.'
      },
      {
        term: 'Simple versus fractional distillation',
        kind: 'law',
        statement: 'A **wide boiling gap needs no column while a close gap needs plates** `distil-choice` $CH_{3}COCH_{3}$ plus $H_{2}O$ splits simple while $C_{6}H_{6}$ plus $C_{6}H_{5}CH_{3}$ needs a fractionating column.',
        detail: 'Simple still uses Leibig condenser for gaps above $40$ degree while Vigreux or packed columns add theoretical plates for gaps below that mark. Collect distillate at constant boiling plateau and discard fore run that carries volatile impurity. Thermometer bulb sits at still head to read vapour correctly.'
      },
      {
        term: 'Steam plus vacuum distillation',
        kind: 'theorem',
        statement: 'A **immiscible steam sum lowers the boiling point** `steam-vacuum` $C_{6}H_{5}NH_{2}$ co distils with $H_{2}O$ near $100$ degree though its own boiling lies far higher.',
        detail: 'Total pressure equals sum of independent vapour pressures so boiling arrives when sum reaches atmosphere. Steam volatile $C_{6}H_{5}NO_{2}$ plus ortho $C_{6}H_{4}(OH)NO_{2}$ separate from non volatile tars. Vacuum lowers boiling for glycerol plus sensitive feeds by reducing external pressure.'
      },
      {
        term: 'Sublimation filter',
        kind: 'insight',
        statement: 'A **high vapour pressure solid jumps straight to vapour** `sublime-test` $C_{10}H_{8}$ plus $I_{2}$ plus camphor sublime on heating and reform on a cool finger.',
        detail: 'China dish plus perforated paper plus inverted funnel collects pure sublimate while non volatile residue stays back. $NH_{4}Cl$ plus $NaCl$ mixture parts this way since only the first sublimes on strong heating. Heat gently to avoid decomposition and keep the cool surface close for quantitative recovery.'
      }
    ],
    figures: [
      {
        caption: 'Hot dissolve cold deposit gives $C_{6}H_{5}COOH$ crystals, $CH_{3}COCH_{3}$ to $H_{2}O$ split by column choice, and $C_{10}H_{8}$ sublimes to a cool finger.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crystallization distillation and sublimation choice" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">hot dissolve</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">cold deposit</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">pure crystals</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">column choice</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">simple or plates</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">steam or vacuum</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">sublime jump</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">to cool finger</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">solubility gap plus boiling gap plus vapour jump</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Benzoic acid water crystallization',
        problem: 'Impure $C_{6}H_{5}COOH$ mixed with $NaCl$ dust needs pure needles from $H_{2}O$. Outline the purification.',
        steps: [
          { label: 'Step 1', text: 'Test solvent plus decolourise:\n```text\nbenzoic acid hot soluble cold sparing in water\nNaCl stays dissolved cold, dust stays insoluble hot\nboil with charcoal then filter hot\n```\nHot filtration removes dust and charcoal with colour.' },
          { label: 'Step 2', text: 'Cool filtrate slowly with seeding to grow $C_{6}H_{5}COOH$ needles while $NaCl$ stays in $H_{2}O$ mother liquor.' },
          { label: 'Step 3', text: 'Filter cold, wash with chilled $H_{2}O$ and check sharp melting range for purity.' }
        ],
        result: 'White needles of $C_{6}H_{5}COOH$ with sharp melting range show pure crop.'
      },
      {
        title: 'Aniline steam separation',
        problem: '$C_{6}H_{5}NH_{2}$ mixed with non volatile tar needs isolation without high heat. Show the steam logic.',
        steps: [
          { label: 'Step 1', text: 'Pass steam through the mixture so $C_{6}H_{5}NH_{2}$ plus $H_{2}O$ exert independent pressures that sum to atmosphere near $100$ degree.' },
          { label: 'Step 2', text: 'Condense the co distillate and separate the $C_{6}H_{5}NH_{2}$ layer from $H_{2}O$ by separating funnel.' },
          { label: 'Step 3', text: 'Dry the amine layer over pellets and redistil pure $C_{6}H_{5}NH_{2}$ for the final check.' }
        ],
        result: 'Steam carries $C_{6}H_{5}NH_{2}$ below its normal boiling without tar decomposition.'
      }
    ],
    keyTakeaways: [
      'Hot soluble cold insoluble inert solvent plus slow cooling gives pure crystals.',
      'Simple still suits wide gaps and fractionating column suits close boilers near $40$ degree mark.',
      'Steam distillation carries $C_{6}H_{5}NH_{2}$ type feeds near $100$ degree by pressure sum.',
      'Sublimation parts $C_{10}H_{8}$ plus $I_{2}$ from non volatile residue on a cool finger.'
    ],
    quiz: [
      {
        q: 'Best crystallization solvent for $C_{6}H_{5}COOH$ in $H_{2}O$ is one that is:',
        options: ['Hot soluble cold sparing plus inert to $C_{6}H_{5}COOH$', 'Insoluble at all temperatures', 'Reactive with solute', 'Volatile with solute'],
        answer: 0,
        explanation: 'Step 1: Dissolve much hot to load solute. Step 2: Deposit much cold for high recovery. Step 3: Stay inert so no reaction consumes product.'
      },
      {
        q: 'Fractional column is required when the boiling gap is:',
        options: ['Very wide above $40$ degree', 'Close with $C_{6}H_{6}$ plus $C_{6}H_{5}CH_{3}$ type pair', 'Zero with single liquid', 'Infinite with solid'],
        answer: 1,
        explanation: 'Step 1: Read gap between boilers. Step 2: Add plates when vapours overlap. Step 3: Select fractional still for close pairs.'
      },
      // PYQ-pattern: JEE 2018 — steam distillation pressure sum (rephrased)
      {
        q: 'Steam distillation works because:',
        options: ['Steam reacts with organic feed', 'Vacuum seals the still', 'Total pressure sums so boiling drops near $100$ degree', 'Sublimation occurs in liquid'],
        answer: 2,
        explanation: 'Step 1: Add independent vapour pressures. Step 2: Reach atmosphere below normal boiling. Step 3: Co distil $C_{6}H_{5}NH_{2}$ with $H_{2}O$.'
      },
      {
        q: 'Sublimation separates:',
        options: ['Two miscible liquids', 'Two close boilers', 'Two gases', '$C_{10}H_{8}$ sublime from $NaCl$ residue'],
        answer: 3,
        explanation: 'Step 1: Heat $C_{10}H_{8}$ plus $NaCl$ mix. Step 2: Sublime only $C_{10}H_{8}$ to vapour. Step 3: Deposit pure solid on cool finger.'
      }
    ]
  },
  // ---------------------------------------------------------------- 39.2
  {
    sectionId: 'chem-ch39-s2',
    readingTime: 8,
    intro: 'Chromatography parts mixtures by repeated adsorption plus release between a polar stationary bed and a flowing mobile phase. Thin layer plates give fast $R_{f}$ fingerprints while columns scale the same logic to preparative loads. Elution order follows polarity match so the least held rider travels farthest.',
    objectives: [
      'Run TLC plates and compute $R_{f}$ from solute over solvent travel',
      'Read polarity order for elution on $SiO_{2}$ plus $Al_{2}O_{3}$ beds',
      'Pack plus elute columns with gradient strength for clean splits'
    ],
    concepts: [
      {
        term: 'Adsorption partition basis',
        kind: 'definition',
        statement: 'A **polar bed holds polar riders longer** `adsorb-basis` $SiO_{2}$ plus $Al_{2}O_{3}$ bind $ROH$ harder than $RH$ while mobile $C_{6}H_{14}$ plus $CH_{3}COOC_{2}H_{5}$ washes forward.',
        detail: 'Solute partitions between fixed surface and flowing solvent through countless adsorb plus desorb steps. Polar stationary with less polar mobile is normal phase, and the reverse pairing is reversed phase. More polar solute lingers while less polar solute runs ahead.'
      },
      {
        term: 'Retention factor Rf',
        kind: 'law',
        statement: 'A **ratio of travels fingerprints a compound** `rf-ratio` $R_{f}$ equals travel of solute over travel of solvent front, always between $0$ and $1$.',
        detail: 'Spot at baseline, develop in closed chamber without disturbing, then mark solvent front at once. Measure from origin to spot centre over origin to front under same plate. $R_{f}$ shifts with solvent polarity plus temperature plus layer activity, so run standards side by side.'
      },
      {
        term: 'TLC plate running',
        kind: 'method',
        statement: 'A **thin silica plate resolves micro spots fast** `tlc-run` capillary spot of $C_{6}H_{5}OH$ plus $C_{6}H_{5}NH_{2}$ climbs $SiO_{2}$ and splits by polarity.',
        detail: 'Keep spots small and above solvent level to avoid washout. Visualize under UV or in $I_{2}$ chamber or by ninhydrin for amines. Co spot with authentic sample to confirm identity when $R_{f}$ values match.'
      },
      {
        term: 'Column packing plus elution',
        kind: 'method',
        statement: 'A **packed bed elutes least polar first** `column-elute` hexane pushes $RH$ out before $RCl$ then $ROH$ on $SiO_{2}$ with rising $CH_{3}COOC_{2}H_{5}$ share.',
        detail: 'Slurry pack without air bubbles and guard with sand plus cotton layers. Load concentrated and elute isocratic or gradient from non polar to polar. Collect fractions and pool by TLC identity before evaporation.'
      },
      {
        term: 'Solvent strength choice',
        kind: 'insight',
        statement: 'A **rising eluent polarity shortens retention** `eluent-ladder` $C_{6}H_{14}$ then $C_{6}H_{6}$ then $CH_{2}Cl_{2}$ then $CH_{3}COOC_{2}H_{5}$ then $CH_{3}OH$ lifts $R_{f}$ stepwise.',
        detail: 'Start weak so spots separate, then strengthen to move laggards without streaking. Too polar a start merges all bands at the front. Dry adsorbent is most active, while added $H_{2}O$ deactivates and speeds flow.'
      }
    ],
    figures: [
      {
        caption: 'TLC $R_{f}$ equals solute over solvent travel on $SiO_{2}$, and column $SiO_{2}$ elutes $RH$ before $ROH$ with rising $CH_{3}COOC_{2}H_{5}$ share.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TLC Rf and column elution order" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">TLC plate</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">spot climbs</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">Rf measured</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">SiO2 bed</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">polar holds OH</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">RH runs first</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">gradient up</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">more polar out</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">least polar travels farthest on normal phase</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Rf measurement on silica',
        problem: 'A TLC run moves solvent front $10$ cm while $C_{6}H_{5}OH$ spot centres at $4$ cm. Find $R_{f}$ and polarity read.',
        steps: [
          { label: 'Step 1', text: 'Record travels:\n```text\nsolute centre 4 cm from origin\nsolvent front 10 cm from origin\nRf = solute over solvent\n```\nBoth measured from same origin line.' },
          { label: 'Step 2', text: 'Divide $4$ cm travel by $10$ cm front to get $R_{f}$ equal to $0.4$ for $C_{6}H_{5}OH$.' },
          { label: 'Step 3', text: 'Infer mid polarity retention on $SiO_{2}$ since $RH$ would run near $0.9$ and $RCOOH$ would linger near $0.1$.' }
        ],
        result: '$R_{f}$ equal to $0.4$ marks $C_{6}H_{5}OH$ under that eluent plus plate pair.'
      },
      {
        title: 'Column split of hydrocarbon plus alcohol',
        problem: '$C_{6}H_{14}$ plus $C_{2}H_{5}OH$ mixture on $SiO_{2}$ needs order plus gradient. Predict elution.',
        steps: [
          { label: 'Step 1', text: 'Load on $SiO_{2}$ and start weak $C_{6}H_{14}$ so $RH$ moves while $C_{2}H_{5}OH$ sticks by hydrogen bonding.' },
          { label: 'Step 2', text: 'Collect $RH$ first with pure $C_{6}H_{14}$ wash, checking by TLC single spot.' },
          { label: 'Step 3', text: 'Raise $CH_{3}COOC_{2}H_{5}$ share to release $C_{2}H_{5}OH$ as second band.' }
        ],
        result: 'Hydrocarbon elutes first and alcohol follows on polarity rise.'
      }
    ],
    keyTakeaways: [
      '$R_{f}$ equals solute travel over solvent travel between $0$ and $1$ on same plate.',
      'Normal $SiO_{2}$ holds $ROH$ hardest so $RH$ runs farthest.',
      'Small spots plus closed chamber plus prompt front mark give true $R_{f}$.',
      'Column gradient from $C_{6}H_{14}$ to $CH_{3}COOC_{2}H_{5}$ splits wide polarity gaps.'
    ],
    quiz: [
      {
        q: '$R_{f}$ $0.4$ from $4$ cm over $10$ cm means:',
        options: ['Solute $4$ cm with front $10$ cm on same plate', 'Solute $10$ cm with front $4$ cm', 'No movement', 'Front dissolved'],
        answer: 0,
        explanation: 'Step 1: Measure both from origin. Step 2: Divide $4$ by $10$. Step 3: Report $R_{f}$ equal to $0.4$.'
      },
      {
        q: 'On $SiO_{2}$ normal phase, elutes first is:',
        options: ['$RCOOH$ strongly held', '$RH$ least polar hydrocarbon band', '$ROH$ hydrogen bonded', 'Salt'],
        answer: 1,
        explanation: 'Step 1: Rank polarity $RH$ lowest. Step 2: Bind polar most to $SiO_{2}$. Step 3: Wash $RH$ out first.'
      },
      // PYQ-pattern: NEET 2020 — Rf polarity order (rephrased)
      {
        q: 'Raising $CH_{3}COOC_{2}H_{5}$ share in $C_{6}H_{14}$ will:',
        options: ['Stop all movement', 'Lower all $R_{f}$ values', 'Raise $R_{f}$ and speed elution', 'Destroy silica'],
        answer: 2,
        explanation: 'Step 1: Strengthen mobile phase polarity. Step 2: Compete better for $SiO_{2}$ sites. Step 3: Lift spots to higher $R_{f}$.'
      },
      {
        q: 'TLC visualization for colourless spots uses:',
        options: ['Naked eye only', 'Weighing balance', 'Heating to melt', 'UV plus $I_{2}$ chamber plus ninhydrin for amines'],
        answer: 3,
        explanation: 'Step 1: Shine UV for aromatic quench. Step 2: Expose to $I_{2}$ vapour for brown spots. Step 3: Spray ninhydrin for amine colour.'
      }
    ]
  },
  // ---------------------------------------------------------------- 39.3
  {
    sectionId: 'chem-ch39-s3',
    readingTime: 10,
    intro: 'Covalent $C$, $H$, $N$, $S$ and $X$ hide from ionic tests until sodium fusion converts them to $NaCN$ plus $Na_{2}S$ plus $NaX$ salts. The extract then answers through Prussian blue for nitrogen, violet plus black for sulfur, and silver halide for halogens. Joint $N$ plus $S$ presence reroutes to blood red thiocyanate that must be read with care.',
    objectives: [
      'Fuse with $Na$ to build $NaCN$ plus $Na_{2}S$ plus $NaX$ extract',
      'Test $N$ by Prussian blue plus $S$ by violet plus black routes',
      'Test $X$ by $AgX$ after $HNO_{3}$ boil plus read $N$ plus $S$ red'
    ],
    concepts: [
      {
        term: 'Sodium fusion extract',
        kind: 'definition',
        statement: 'A **molten sodium rips covalent bonds to ionic salts** `fusion-extract` $Na$ plus $C$ plus $N$ gives $NaCN$ while $Na$ plus $S$ gives $Na_{2}S$ and $Na$ plus $X$ gives $NaX$.',
        detail: 'Heat dry sample with fresh $Na$ to red fusion, plunge in $H_{2}O$ and boil plus filter. Use excess $Na$ so all $N$ plus $S$ plus $X$ convert, and keep the tube dry since $Na$ reacts violently with $H_{2}O$. Freshly cut metal with shining surface reacts fastest.'
      },
      {
        term: 'Prussian blue nitrogen test',
        kind: 'method',
        statement: 'A **ferrous plus ferric sequence builds Prussian blue** `prussian-blue` $NaCN$ plus $FeSO_{4}$ gives $Na_{4}Fe(CN)_{6}$ then $FeCl_{3}$ gives $Fe_{4}Fe(CN)_{6}$ blue.',
        detail: 'Boil extract with $FeSO_{4}$ plus a drop of $NaOH$ to form hexacyanoferrate two minus, then acidify and add $FeCl_{3}$. Blue precipitate or green blue colour confirms $N$. Acidify before ferric addition or brown $Fe(OH)_{3}$ masks the read.'
      },
      {
        term: 'Sulfur violet plus black tests',
        kind: 'method',
        statement: 'A **nitroprusside violet plus lead black flags sulfide** `sulfide-tests` $Na_{2}S$ plus $Na_{2}Fe(CN)_{5}NO$ gives violet $Na_{4}Fe(CN)_{5}NOS$ while $Na_{2}S$ plus $Pb(CH_{3}COO)_{2}$ gives black $PbS$.',
        detail: 'Add few drops of sodium nitroprusside to alkaline extract for transient violet. Add lead acetate acidified with $CH_{3}COOH$ for black precipitate on a second portion. Both need sulfide ion, so oxidised $SO_{4}$ type sulfur stays silent.'
      },
      {
        term: 'Silver halide test after acid boil',
        kind: 'method',
        statement: 'A **nitric boil expels cyanide plus sulfide before silver** `halide-silver` extract boiled with $HNO_{3}$ plus $AgNO_{3}$ gives $AgCl$ white plus $AgBr$ pale yellow plus $AgI$ yellow.',
        detail: 'Boiling with concentrated $HNO_{3}$ drives off $HCN$ plus $H_{2}S$ that would give $AgCN$ plus $Ag_{2}S$ false precipitates. $AgCl$ dissolves in $NH_{4}OH$ while $AgI$ resists, and $AgBr$ dissolves partly. Layer test with $CHCl_{3}$ plus $Cl_{2}$ water confirms $Br$ plus $I$ by organic colour.'
      },
      {
        term: 'Joint N plus S blood red route',
        kind: 'insight',
        statement: 'A **joint N plus S pool forms thiocyanate blood red** `blood-red` $Na$ plus $C$ plus $N$ plus $S$ gives $NaSCN$ then $FeCl_{3}$ gives $Fe(SCN)_{3}$ red.',
        detail: 'When both elements coexist with limited $Na$, thiocyanate replaces separate cyanide plus sulfide pools. Red with ferric therefore means $N$ plus $S$ together, not $N$ alone. Use excess $Na$ to force separate pools when a clean Prussian blue read is required.'
      }
    ],
    figures: [
      {
        caption: 'Fusion to $NaCN$ plus $Na_{2}S$ plus $NaX$ splits to Prussian $Fe_{4}Fe(CN)_{6}$ blue, violet $Na_{4}Fe(CN)_{5}NOS$ plus $PbS$ black, and $AgX$ after $HNO_{3}$ boil.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lassaigne fusion with nitrogen sulfur halogen tests" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Na fusion</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">NaCN Na2S NaX</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">ionic extract</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Prussian blue</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">violet plus black</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">for N and S</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">AgX test</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">HNO3 boil first</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">N plus S together gives blood red thiocyanate</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Aniline nitrogen confirmation',
        problem: '$C_{6}H_{5}NH_{2}$ extract plus $FeSO_{4}$ plus $FeCl_{3}$ needs the blue read. Trace the steps.',
        steps: [
          { label: 'Step 1', text: 'Fuse plus extract:\n```text\nC6H5NH2 + Na heat -> NaCN pool\nplunge in water, boil, filter\nkeep excess Na for full conversion\n```\nDry tube plus fresh metal avoids violent steam.' },
          { label: 'Step 2', text: 'Boil portion with $FeSO_{4}$ plus $NaOH$ to form $Na_{4}Fe(CN)_{6}$ hexacyano pool.' },
          { label: 'Step 3', text: 'Acidify then add $FeCl_{3}$ to strike Prussian $Fe_{4}Fe(CN)_{6}$ blue confirming $N$ in $C_{6}H_{5}NH_{2}$.' }
        ],
        result: 'Prussian blue confirms $N$ in $C_{6}H_{5}NH_{2}$ through $NaCN$ link.'
      },
      {
        title: 'Chlorobenzene halogen read',
        problem: '$C_{6}H_{5}Cl$ extract needs $AgCl$ proof without $AgCN$ confusion. Show the guard.',
        steps: [
          { label: 'Step 1', text: 'Boil extract with concentrated $HNO_{3}$ to expel $HCN$ plus $H_{2}S$ as gases.' },
          { label: 'Step 2', text: 'Add $AgNO_{3}$ to precipitate white $AgCl$ from $NaX$ pool.' },
          { label: 'Step 3', text: 'Check solubility in $NH_{4}OH$ where $AgCl$ dissolves but $AgI$ would persist.' }
        ],
        result: 'White $AgCl$ soluble in $NH_{4}OH$ proves $Cl$ in $C_{6}H_{5}Cl$.'
      }
    ],
    keyTakeaways: [
      'Fusion turns $C$ plus $N$ to $NaCN$ plus $S$ to $Na_{2}S$ plus $X$ to $NaX$.',
      'Prussian $Fe_{4}Fe(CN)_{6}$ blue proves $N$ after ferrous plus ferric sequence.',
      'Violet $Na_{4}Fe(CN)_{5}NOS$ plus black $PbS$ prove sulfide $S$.',
      '$HNO_{3}$ boil before $AgNO_{3}$ removes $AgCN$ plus $Ag_{2}S$ false reads.'
    ],
    quiz: [
      {
        q: 'Fusion extract from $C_{6}H_{5}NH_{2}$ contains:',
        options: ['$NaCN$ from $C$ plus $N$ pool', '$Na_{2}SO_{4}$ only', 'No ions', 'Only $NaX$'],
        answer: 0,
        explanation: 'Step 1: Heat with excess $Na$. Step 2: Convert $C$ plus $N$ to cyanide. Step 3: Dissolve $NaCN$ in $H_{2}O$ extract.'
      },
      {
        q: 'Prussian blue forms by:',
        options: ['$NaCl$ plus $AgNO_{3}$', '$Na_{4}Fe(CN)_{6}$ plus $FeCl_{3}$ to $Fe_{4}Fe(CN)_{6}$', 'Nitroprusside alone', 'Lead acetate alone'],
        answer: 1,
        explanation: 'Step 1: Build hexacyanoferrate with $FeSO_{4}$. Step 2: Add ferric $FeCl_{3}$. Step 3: Strike blue $Fe_{4}Fe(CN)_{6}$.'
      },
      // PYQ-pattern: JEE 2021 — Prussian blue sequence (rephrased)
      {
        q: 'Violet with nitroprusside plus black with lead acetate means:',
        options: ['Halogen present', 'Nitrogen alone', 'Sulfide $S$ as $Na_{2}S$ pool', 'No element'],
        answer: 2,
        explanation: 'Step 1: Add $Na_{2}Fe(CN)_{5}NO$ for violet. Step 2: Add lead acetate for black $PbS$. Step 3: Assign sulfide $S$.'
      },
      {
        q: 'Assertion: $NaSCN$ blood red with $FeCl_{3}$ proves $N$ alone without $S$. Reason: $HNO_{3}$ boil expels $HCN$ plus $H_{2}S$ that would give $AgCN$ plus $Ag_{2}S$.',
        options: ['Both statements true and the second explains the first', 'Both statements true but the second does not explain the first', 'First true but second false', 'First false but second true'],
        answer: 3,
        explanation: 'Step 1: Note red needs $N$ plus $S$ together as $NaSCN$. Step 2: Reject alone $N$ read from red colour. Step 3: Confirm second true about $HNO_{3}$ boil guard.'
      }
    ]
  },
  // ---------------------------------------------------------------- 39.4
  {
    sectionId: 'chem-ch39-s4',
    readingTime: 10,
    intro: 'Kjeldahl digestion turns suitable nitrogen to $NH_{4}$ plus $SO_{4}$ pool for volumetric $NH_{3}$ release while Carius seals halogens plus sulfur to $AgX$ plus $BaSO_{4}$ gravimetry. Each route carries sharp limits so nitro plus azo nitrogen escapes Kjeldahl and only suitable pools count. Percentage math then closes to empirical formulae by mole ratio reduction.',
    objectives: [
      'Digest plus distil Kjeldahl $N$ to $NH_{3}$ titre with limit map',
      'Weigh Carius $AgX$ plus $BaSO_{4}$ to percent $X$ plus $S$',
      'Convert percent to empirical formula by mole ladder'
    ],
    concepts: [
      {
        term: 'Kjeldahl digestion plus distillation',
        kind: 'definition',
        statement: 'A **hot acid digestion frees ammonia for titration** `kjeldahl-titre` sample plus $H_{2}SO_{4}$ gives $NH_{4}$ plus $SO_{4}$ pool then $NaOH$ releases $NH_{3}$ into standard acid.',
        detail: 'Heat with concentrated $H_{2}SO_{4}$ plus $K_{2}SO_{4}$ to raise boiling plus $CuSO_{4}$ catalyst. Dilute, add excess $NaOH$ and distil $NH_{3}$ into measured acid. Back titrate residual acid to find $NH_{3}$ moles and hence $N$ mass.'
      },
      {
        term: 'Kjeldahl nitrogen limits',
        kind: 'law',
        statement: 'A **oxidised plus ring nitrogen escapes ammonium capture** `kjeldahl-limit` nitro plus nitroso plus azo plus diazo plus $C_{5}H_{5}N$ ring nitrogen fails to give $NH_{4}$ plus $SO_{4}$ pool.',
        detail: 'Nitro and diazo nitrogen stay oxidised or lost as $N_{2}$ instead of reducing to ammonium. Pyridine plus quinoline rings resist digestion, and quaternary salts behave erratically. Dumas combustion to $N_{2}$ covers all forms when Kjeldahl is blind.'
      },
      {
        term: 'Carius halogen gravimetry',
        kind: 'method',
        statement: 'A **sealed nitric oxidation locks halogen as silver halide** `carius-halogen` sample plus fuming $HNO_{3}$ plus $AgNO_{3}$ heated sealed gives weighed $AgX$.',
        detail: 'Heat in sealed tube so volatile $HX$ cannot escape, then filter wash dry and weigh $AgCl$ plus $AgBr$ plus $AgI$. Percent $Cl$ equals $35.5$ over $143.5$ times $AgCl$ mass over sample times $100$. Same ratio logic with $80$ over $188$ for $Br$ and $127$ over $235$ for $I$.'
      },
      {
        term: 'Carius sulfur gravimetry',
        kind: 'method',
        statement: 'A **sealed oxidation plus barium capture weighs sulfur** `carius-sulfur` sample plus fuming $HNO_{3}$ gives $H_{2}SO_{4}$ then $BaCl_{2}$ gives weighed $BaSO_{4}$.',
        detail: 'Oxidise all $S$ to sulfate in sealed tube, precipitate with $BaCl_{2}$ and weigh $BaSO_{4}$ after ignition. Percent $S$ equals $32$ over $233$ times $BaSO_{4}$ mass over sample times $100$. Wash free of $Cl$ minus before weighing to hold the ratio true.'
      },
      {
        term: 'Percentage to empirical formula',
        kind: 'theorem',
        statement: 'A **mole ladder reduces percent to simplest ratio** `percent-empirical` percent over atomic mass gives moles then divide by smallest to reach $CH_{2}O$ type formula.',
        detail: 'Assume $100$ g sample so percent equals grams, convert each to moles by atomic mass. Divide all moles by the least to get trial subscripts, then multiply to clear fractions. Molecular mass over empirical mass gives the multiple to molecular formula.'
      }
    ],
    figures: [
      {
        caption: 'Kjeldahl $H_{2}SO_{4}$ to $NH_{3}$ titre misses nitro plus ring $N$, while Carius seals to $AgX$ plus $BaSO_{4}$ for percent $X$ plus $S$ math.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kjeldahl limits with Carius halogen sulfur weighing" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Kjeldahl titre</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">to NH3 acid</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">nitro missed</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Carius seal</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">AgX weighed</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">BaSO4 weighed</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">percent math</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">to mole ladder</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">suitable N only, all X and S sealed</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Kjeldahl percent nitrogen',
        problem: '$0.5$ g amine liberates $NH_{3}$ that neutralises $20$ mL of $0.5$ M $H_{2}SO_{4}$ in excess. Find percent $N$.',
        steps: [
          { label: 'Step 1', text: 'Relate acid used:\n```text\nH2SO4 + 2NH3 -> ammonium sulfate\nmoles acid = M x V in litres\nmoles NH3 = 2 x moles acid\nmass N = moles NH3 x 14\n```\nEach $H_{2}SO_{4}$ traps two $NH_{3}$.' },
          { label: 'Step 2', text: 'Compute moles acid from $0.5$ M times $0.02$ L to get $0.01$ mol acid, hence $0.02$ mol $NH_{3}$.' },
          { label: 'Step 3', text: 'Convert $0.02$ mol $N$ times $14$ to $0.28$ g over $0.5$ g sample times $100$ to get $56$ percent $N$.' }
        ],
        result: 'Percent $N$ equals $56$ percent for the amine sample.'
      },
      {
        title: 'Carius chloride percent',
        problem: '$0.2$ g chloro compound gives $0.287$ g $AgCl$ in Carius tube. Find percent $Cl$.',
        steps: [
          { label: 'Step 1', text: 'Apply gravimetric factor $35.5$ over $143.5$ for $Cl$ in $AgCl$.' },
          { label: 'Step 2', text: 'Multiply $0.287$ g $AgCl$ by $35.5$ over $143.5$ to get $0.071$ g $Cl$.' },
          { label: 'Step 3', text: 'Divide by $0.2$ g sample times $100$ to get $35.5$ percent $Cl$.' }
        ],
        result: 'Percent $Cl$ equals $35.5$ percent by $AgCl$ weighing.'
      }
    ],
    keyTakeaways: [
      'Kjeldahl $H_{2}SO_{4}$ plus $NaOH$ route titres $NH_{3}$ for suitable $N$ only.',
      'Nitro plus azo plus diazo plus ring $C_{5}H_{5}N$ nitrogen escapes Kjeldahl capture.',
      'Carius seals to weighed $AgX$ plus $BaSO_{4}$ for percent $X$ plus $S$.',
      'Percent over mass to moles over smallest gives empirical formula.'
    ],
    quiz: [
      {
        q: 'Kjeldahl digestion converts suitable $N$ to:',
        options: ['$NH_{4}$ plus $SO_{4}$ pool for $NH_{3}$ release', '$N_{2}$ gas vented', '$HNO_{3}$ pool', 'No change'],
        answer: 0,
        explanation: 'Step 1: Digest with hot $H_{2}SO_{4}$. Step 2: Form ammonium sulfate pool. Step 3: Release $NH_{3}$ with $NaOH$.'
      },
      {
        q: 'Fails Kjeldahl capture is:',
        options: ['Amide $RCONH_{2}$ suitable', 'Nitro $RNO_{2}$ plus ring $C_{5}H_{5}N$ failure', 'Amine $RNH_{2}$ suitable', 'Ammonium salt suitable'],
        answer: 1,
        explanation: 'Step 1: List reducible to ammonium forms. Step 2: Spot oxidised plus ring forms. Step 3: Select nitro plus ring as failures.'
      },
      // PYQ-pattern: NEET 2019 — Carius silver factor (rephrased)
      {
        q: 'Carius $Cl$ percent uses factor:',
        options: ['$32$ over $233$ sulfate', '$127$ over $235$ iodide', '$35.5$ over $143.5$ times $AgCl$ over sample', 'One over two'],
        answer: 2,
        explanation: 'Step 1: Weigh $AgCl$ precipitate. Step 2: Scale by $Cl$ share $35.5$ over $143.5$. Step 3: Divide by sample times $100$.'
      },
      {
        q: 'Carius $S$ percent from $BaSO_{4}$ uses:',
        options: ['Volumetric titre', 'Colour match', 'Flame test', '$32$ over $233$ times $BaSO_{4}$ over sample times $100$'],
        answer: 3,
        explanation: 'Step 1: Oxidise $S$ to sulfate sealed. Step 2: Weigh $BaSO_{4}$ precipitate. Step 3: Apply $32$ over $233$ factor times $100$.'
      }
    ]
  }
]
