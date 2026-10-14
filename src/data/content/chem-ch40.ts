import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 40: Redox Balancing and Descriptive Compounds
// Sections 40.1 - 40.4. Oxidation numbers, half reaction balancing,
// landmark s plus p block compounds, polyhalogen uses plus effects.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh40Content: SectionContent[] = [
  // ---------------------------------------------------------------- 40.1
  {
    sectionId: 'chem-ch40-s1',
    readingTime: 10,
    intro: 'Oxidation numbers track electron control by fixed rules while Stock notation names the state in Roman numerals. Half reactions split oxidation from reduction so atoms plus charge balance in acid plus base media. Equivalent weight then links titre volume to redox moles without full equations.',
    objectives: [
      'Assign oxidation numbers by $F$ minus $1$ plus $O$ minus $2$ plus $H$ plus $1$ ladder',
      'Balance by ion electron half reactions in acid plus base finish',
      'Compute equivalent weight as molar mass over electron change'
    ],
    concepts: [
      {
        term: 'Oxidation number rules',
        kind: 'law',
        statement: 'A **fixed hierarchy assigns electron control** `ox-rules` free $Na$ is $0$ while $NaCl$ gives $Na$ plus $1$ and $F$ always minus $1$ with $O$ minus $2$.',
        detail: 'Alkali stays plus $1$ and alkaline stays plus $2$ in all compounds. $H$ is plus $1$ with nonmetals but minus $1$ in $NaH$ hydride. Peroxide $H_{2}O_{2}$ gives $O$ minus $1$ and $OF_{2}$ gives $O$ plus $2$. Sum equals charge of ion.'
      },
      {
        term: 'Stock notation plus unusual states',
        kind: 'definition',
        statement: 'A **Roman numeral names the metal state** `stock-name` $FeCl_{3}$ is iron three chloride while $K_{2}Cr_{2}O_{7}$ carries $Cr$ plus $6$ and $MnO_{4}$ minus carries $Mn$ plus $7$.',
        detail: 'Fractional average states appear in $Fe_{3}O_{4}$ and $Na_{2}S_{2}O_{3}$ where two centres differ. $H_{2}SO_{5}$ Caro acid hides a peroxo link so $S$ stays plus $6$. Always solve by sum rule rather than memorizing each case.'
      },
      {
        term: 'Half reaction acid balancing',
        kind: 'method',
        statement: 'A **split oxidation plus reduction balances atoms then charge** `half-acid` $MnO_{4}$ minus to $Mn^{2+}$ balances $O$ by $H_{2}O$ then $H$ by $H^{+}$ then charge by electrons.',
        detail: 'Write separate oxidation and reduction skeletons. Balance all atoms except $O$ plus $H$, then add $H_{2}O$ for $O$ and $H^{+}$ for $H$. Add electrons to the more positive side, scale to equal electrons, then add halves and cancel spectators.'
      },
      {
        term: 'Base medium finish',
        kind: 'method',
        statement: 'A **hydroxyl neutralizes the acid balanced skeleton** `half-base` acid balanced $MnO_{4}$ minus plus $H^{+}$ plus $OH^{-}$ gives $H_{2}O$ on both sides for basic form.',
        detail: 'Balance first as if acidic, then add $OH^{-}$ equal to $H^{+}$ on both sides. Combine $H^{+}$ plus $OH^{-}$ to $H_{2}O$ and cancel excess water. Check atoms plus charge again since basic form hides protons as water.'
      },
      {
        term: 'Disproportionation insight',
        kind: 'insight',
        statement: 'A **single state splits both up and down** `disprop-read` $Cl_{2}$ to $Cl^{-}$ plus $OCl^{-}$ in cold $NaOH$ shows same $Cl$ zero rising plus falling.',
        detail: '$P_{4}$ to $PH_{3}$ plus $H_{2}PO_{2}$ minus and $Cu^{+}$ to $Cu$ plus $Cu^{2+}$ repeat the pattern. Reverse comproportionation merges high plus low to middle, as $Ag$ plus $Ag^{2+}$ to $2Ag^{+}$. Oxidation number ladder spots both at once.'
      }
    ],
    figures: [
      {
        caption: 'Rules fix $F$ minus $1$ plus $O$ minus $2$ while $MnO_{4}$ minus to $Mn^{2+}$ balances by $H_{2}O$ plus $H^{+}$ plus electrons, finished by $OH^{-}$ in base.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Oxidation rules with half reaction acid base finish" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">rules ladder</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">F minus 1 O minus 2</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">sum is charge</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">half split</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">H2O for O</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">H plus e for rest</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">base finish</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">OH makes water</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">equal electrons then add halves and cancel</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Permanganate oxalate acidic balance',
        problem: '$MnO_{4}$ minus plus $C_{2}O_{4}$ two minus in acid gives $Mn^{2+}$ plus $CO_{2}$. Balance the net ionic form.',
        steps: [
          { label: 'Step 1', text: 'Split plus balance atoms:\n```text\nMnO4- -> Mn2+ : add 4 H2O right O, 8 H+ left H\nC2O4 2- -> 2CO2 : C already balanced\nadd electrons to fix charge each side\n```\nAcid supplies $H^{+}$ for $O$ removal as water.' },
          { label: 'Step 2', text: 'Write $MnO_{4}$ minus plus $8H^{+}$ plus $5$ electrons gives $Mn^{2+}$ plus $4H_{2}O$ for reduction.' },
          { label: 'Step 3', text: 'Write $C_{2}O_{4}$ two minus gives $2CO_{2}$ plus $2$ electrons, scale to $10$ electrons and add to get $2MnO_{4}$ minus plus $5C_{2}O_{4}$ two minus plus $16H^{+}$ gives $2Mn^{2+}$ plus $10CO_{2}$ plus $8H_{2}O$.' }
        ],
        result: 'Balanced net $2MnO_{4}$ minus plus $5C_{2}O_{4}$ two minus plus $16H^{+}$ gives $2Mn^{2+}$ plus $10CO_{2}$ plus $8H_{2}O$.'
      },
      {
        title: 'Chlorine disproportionation in base',
        problem: '$Cl_{2}$ in cold $NaOH$ gives $Cl^{-}$ plus $OCl^{-}$. Assign states and confirm disproportionation.',
        steps: [
          { label: 'Step 1', text: 'Assign $Cl_{2}$ zero going to $Cl^{-}$ minus $1$ plus $OCl^{-}$ plus $1$ for $Cl$ centre.' },
          { label: 'Step 2', text: 'Note same $Cl_{2}$ both reduces to minus $1$ and oxidises to plus $1$.' },
          { label: 'Step 3', text: 'Balance as $Cl_{2}$ plus $2OH^{-}$ gives $Cl^{-}$ plus $OCl^{-}$ plus $H_{2}O$.' }
        ],
        result: '$Cl$ zero splits to minus $1$ plus plus $1$ so disproportionation holds.'
      }
    ],
    keyTakeaways: [
      '$F$ minus $1$ plus $O$ minus $2$ plus $H$ plus $1$ with sum equals ion charge.',
      'Acid balance uses $H_{2}O$ for $O$ then $H^{+}$ for $H$ then electrons for charge.',
      'Base finish adds $OH^{-}$ to both sides and condenses to $H_{2}O$.',
      '$Cl_{2}$ to $Cl^{-}$ plus $OCl^{-}$ flags single state splitting both ways.'
    ],
    quiz: [
      {
        q: 'Oxidation number of $Mn$ in $MnO_{4}$ minus is:',
        options: ['$Mn$ plus $7$ by sum rule', '$Mn$ plus $2$', '$Mn$ zero', '$Mn$ minus $1$'],
        answer: 0,
        explanation: 'Step 1: Set $4O$ at minus $8$. Step 2: Solve $Mn$ minus $8$ equals minus $1$. Step 3: Get $Mn$ plus $7$.'
      },
      {
        q: 'Equivalent weight of $K_{2}Cr_{2}O_{7}$ with $Cr$ plus $6$ to plus $3$ is:',
        options: ['Molar mass over one', 'Molar mass over six electrons total', 'Molar mass times six', 'Zero'],
        answer: 1,
        explanation: 'Step 1: Count two $Cr$ each gaining three electrons. Step 2: Total six electrons per formula. Step 3: Divide molar mass by six.'
      },
      // PYQ-pattern: JEE 2020 — permanganate half reaction electrons (rephrased)
      {
        q: '$MnO_{4}$ minus to $Mn^{2+}$ in acid needs:',
        options: ['No electrons', 'No water', '$8H^{+}$ plus $5$ electrons giving $4H_{2}O$', 'Only $OH^{-}$'],
        answer: 2,
        explanation: 'Step 1: Balance $O$ with $4H_{2}O$. Step 2: Balance $H$ with $8H^{+}$. Step 3: Add $5$ electrons for charge.'
      },
      {
        q: 'Assertion: $Cl_{2}$ with cold $NaOH$ disproportionates to $Cl^{-}$ plus $OCl^{-}$. Reason: Same $Cl$ zero both reduces to minus $1$ and oxidises to plus $1$.',
        options: ['Unrelated pair', 'Only second true', 'Only first true', 'Both statements true and the second explains the first'],
        answer: 3,
        explanation: 'Step 1: Confirm products $Cl^{-}$ plus $OCl^{-}$. Step 2: Assign $0$ to minus $1$ plus plus $1$. Step 3: Link split to disproportionation tag.'
      }
    ]
  },
  // ---------------------------------------------------------------- 40.2
  {
    sectionId: 'chem-ch40-s2',
    readingTime: 9,
    intro: 'Solvay towers turn brine into washing $Na_{2}CO_{3}$ while chlor alkali cells split the same brine to caustic $NaOH$ plus $Cl_{2}$. Gypsum firing near $393$ K trims water to plaster $CaSO_{4}$ half hydrate that resets with water. Lime milk plus chlorine then builds bleaching $CaOCl_{2}$ with available chlorine power.',
    objectives: [
      'Write Solvay $NaCl$ plus $NH_{3}$ plus $CO_{2}$ route to $Na_{2}CO_{3}$',
      'Convert gypsum $CaSO_{4}$ dihydrate to plaster plus setting cycle',
      'Prepare $CaOCl_{2}$ from $Ca(OH)_{2}$ plus $Cl_{2}$ with chlorine release'
    ],
    concepts: [
      {
        term: 'Solvay washing soda route',
        kind: 'definition',
        statement: 'A **ammonia mediated carbonation drops baking soda** `solvay-soda` $NaCl$ plus $NH_{3}$ plus $CO_{2}$ plus $H_{2}O$ gives $NaHCO_{3}$ then heat gives $Na_{2}CO_{3}$.',
        detail: 'Saturate brine with $NH_{3}$ then carbonate to precipitate less soluble $NaHCO_{3}$. Filter and calcine $2NaHCO_{3}$ to $Na_{2}CO_{3}$ plus $CO_{2}$ plus $H_{2}O$. Recover $NH_{3}$ from $NH_{4}Cl$ plus $CaO$ so the loop consumes only $NaCl$ plus $CaCO_{3}$.'
      },
      {
        term: 'Baking to caustic interchange',
        kind: 'theorem',
        statement: 'A **mild base sharpens to strong base by lime** `baking-caustic` $NaHCO_{3}$ heating gives $Na_{2}CO_{3}$ while $Na_{2}CO_{3}$ plus $Ca(OH)_{2}$ gives $NaOH$ plus $CaCO_{3}$.',
        detail: '$NaHCO_{3}$ is the antacid plus baking powder $CO_{2}$ source that decomposes near $373$ K. Causticization with slaked lime precipitates $CaCO_{3}$ and leaves $NaOH$ lye. Modern chlor alkali electrolysis now dominates $NaOH$ plus $Cl_{2}$ supply with $H_{2}$ byproduct.'
      },
      {
        term: 'Plaster of Paris cycle',
        kind: 'law',
        statement: 'A **controlled gypsum firing trims three halves of water** `pop-cycle` $CaSO_{4}$ dihydrate near $393$ K gives $CaSO_{4}$ half hydrate plus $1.5H_{2}O$.',
        detail: 'Heat $CaSO_{4}$ dihydrate gently so only part of lattice water leaves. Wetting reverses to dihydrate interlocked needles that set hard. Overfiring to anhydrite kills setting while underfiring leaves unreactive dihydrate. Setting expands slightly so casts copy moulds sharply.'
      },
      {
        term: 'Bleaching powder preparation',
        kind: 'method',
        statement: 'A **dry lime milk chlorination builds mixed oxychloride** `bleach-prep` $Ca(OH)_{2}$ plus $Cl_{2}$ gives $CaOCl_{2}$ plus $H_{2}O$.',
        detail: 'Pass $Cl_{2}$ over dry slaked lime with cooling to avoid chlorate side product. Product carries available $Cl_{2}$ released by dilute acid for bleaching plus disinfection. Moisture plus $CO_{2}$ in air slowly spoil stored powder by the same release.'
      },
      {
        term: 'Available chlorine plus uses',
        kind: 'insight',
        statement: 'A **acid demand frees the stored oxidant** `available-Cl` $CaOCl_{2}$ plus $2HCl$ gives $CaCl_{2}$ plus $H_{2}O$ plus $Cl_{2}$ for bleaching cotton plus paper.',
        detail: '$Na_{2}CO_{3}$ serves glass plus soap plus paper loops while $NaHCO_{3}$ serves fire plus food plus mild scouring. Plaster serves casts plus statues plus surgical bandages by clean setting. Bleaching powder serves water disinfection plus textile oxidation where nascent $Cl$ plus $O$ attack colour.'
      }
    ],
    figures: [
      {
        caption: 'Solvay $NaCl$ to $NaHCO_{3}$ to $Na_{2}CO_{3}$ loops $NH_{3}$, gypsum to $CaSO_{4}$ half hydrate sets back, and $Ca(OH)_{2}$ plus $Cl_{2}$ builds $CaOCl_{2}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solvay plaster and bleaching powder routes" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Solvay soda</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">NaCl to NaHCO3</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">heat to soda</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">gypsum trim</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">half hydrate</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">water sets back</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">lime plus Cl2</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">CaOCl2 made</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">soda for glass, plaster for casts, bleach for Cl</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Solvay baking soda filter',
        problem: 'Brine plus $NH_{3}$ plus $CO_{2}$ drops $NaHCO_{3}$ while $NH_{4}Cl$ stays dissolved. Explain the split.',
        steps: [
          { label: 'Step 1', text: 'Carbonate the ammoniated brine:\n```text\nNaCl + NH3 + CO2 + H2O -> NaHCO3 down + NH4Cl in solution\nfilter the less soluble bicarbonate\ncalcine 2NaHCO3 to soda + CO2 + water\n```\nSolubility gap drives the first cut.' },
          { label: 'Step 2', text: 'Wash $NaHCO_{3}$ cake free of $NH_{4}Cl$ mother liquor with cold $H_{2}O$.' },
          { label: 'Step 3', text: 'Calcine near $513$ K to $Na_{2}CO_{3}$ and recycle $CO_{2}$ plus $NH_{3}$ from $CaO$ treatment.' }
        ],
        result: '$NaHCO_{3}$ filtered then calcined gives $Na_{2}CO_{3}$ with $NH_{3}$ loop closed.'
      },
      {
        title: 'Plaster setting test',
        problem: 'Gypsum heated near $393$ K sets with water while anhydrite fired high stays dead. Show the water count.',
        steps: [
          { label: 'Step 1', text: 'Fire $CaSO_{4}$ dihydrate gently to $CaSO_{4}$ half hydrate plus $1.5H_{2}O$ vapour.' },
          { label: 'Step 2', text: 'Mix half hydrate with $H_{2}O$ to regrow dihydrate needles that interlock.' },
          { label: 'Step 3', text: 'Contrast dead burnt $CaSO_{4}$ anhydrite that hydrates too slowly to set.' }
        ],
        result: 'Half hydrate sets fast while anhydrite stays inert by full water loss.'
      }
    ],
    keyTakeaways: [
      'Solvay $NaCl$ plus $NH_{3}$ plus $CO_{2}$ drops $NaHCO_{3}$ then $Na_{2}CO_{3}$.',
      '$NaHCO_{3}$ bakes to $Na_{2}CO_{3}$ and lime swaps to $NaOH$ lye.',
      'Gypsum near $393$ K gives $CaSO_{4}$ half hydrate that water resets.',
      '$Ca(OH)_{2}$ plus $Cl_{2}$ gives $CaOCl_{2}$ releasing $Cl_{2}$ on acid demand.'
    ],
    quiz: [
      {
        q: 'Solvay precipitate filtered first is:',
        options: ['$NaHCO_{3}$ less soluble bicarbonate', '$NH_{4}Cl$ soluble stays back', '$CaCO_{3}$', '$NaCl$'],
        answer: 0,
        explanation: 'Step 1: Carbonate ammoniated brine. Step 2: Drop $NaHCO_{3}$ by low solubility. Step 3: Keep $NH_{4}Cl$ dissolved.'
      },
      {
        q: 'Plaster $CaSO_{4}$ half hydrate forms at:',
        options: ['Room drying', 'Near $393$ K gentle firing', 'White heat', 'Freezing'],
        answer: 1,
        explanation: 'Step 1: Heat dihydrate gently. Step 2: Lose $1.5H_{2}O$ near $393$ K. Step 3: Stop before anhydrite dead burn.'
      },
      // PYQ-pattern: NEET 2021 — bleaching powder preparation (rephrased)
      {
        q: 'Bleaching $CaOCl_{2}$ is made by:',
        options: ['Heating gypsum', 'Boiling brine', '$Ca(OH)_{2}$ plus $Cl_{2}$ with cooling', 'Mixing sand plus soda'],
        answer: 2,
        explanation: 'Step 1: Spread dry slaked $Ca(OH)_{2}$. Step 2: Pass $Cl_{2}$ with cooling. Step 3: Collect $CaOCl_{2}$ powder.'
      },
      {
        q: 'Available $Cl_{2}$ from $CaOCl_{2}$ frees with:',
        options: ['Dry heating only', 'Strong base', 'Sunlight alone', 'Dilute acid giving $CaCl_{2}$ plus $H_{2}O$ plus $Cl_{2}$'],
        answer: 3,
        explanation: 'Step 1: Add dilute $HCl$ to powder. Step 2: Release $Cl_{2}$ gas. Step 3: Use nascent oxidant for bleaching.'
      }
    ]
  },
  // ---------------------------------------------------------------- 40.3
  {
    sectionId: 'chem-ch40-s3',
    readingTime: 9,
    intro: 'Borax $Na_{2}B_{4}O_{7}$ buffers plus fluxes while boric $H_{3}BO_{3}$ acts as a weak Lewis acid for antiseptic washes. Silica $SiO_{2}$ builds glass plus silicones that seal with heat proof flexibility. Haber $NH_{3}$ plus Ostwald $HNO_{3}$ then scale nitrogen from air to fertilizer plus explosives.',
    objectives: [
      'Write borax $Na_{2}B_{4}O_{7}$ plus $H_{3}BO_{3}$ interchange with titration note',
      'Link $SiO_{2}$ glass to silicone $R_{2}SiO$ polymer water repellence',
      'Run Haber $N_{2}$ plus $H_{2}$ plus Ostwald $NH_{3}$ to $HNO_{3}$ steps'
    ],
    concepts: [
      {
        term: 'Borax plus boric acid pair',
        kind: 'definition',
        statement: 'A **tetraborate plus weak acid share a proton ladder** `borax-boric` $Na_{2}B_{4}O_{7}$ plus $HCl$ gives $H_{3}BO_{3}$ while $H_{3}BO_{3}$ plus $H_{2}O$ gives $B(OH)_{4}$ minus plus $H^{+}$.',
        detail: 'Mine tincal or colemanite feeds $Na_{2}B_{4}O_{7}$ decahydrate for flux plus buffer plus cleaning. Acidify to $H_{3}BO_{3}$ flakes for mild antiseptic plus eye wash. Titrate borax with $HCl$ to methyl orange since $H_{3}BO_{3}$ is too weak to shift the dye.'
      },
      {
        term: 'Borax bead plus flux use',
        kind: 'method',
        statement: 'A **molten bead dissolves oxides to coloured glasses** `bead-flux` $Na_{2}B_{4}O_{7}$ heating gives $NaBO_{2}$ plus $B_{2}O_{3}$ glass that tints $Co$ blue plus $Cr$ green.',
        detail: 'Fuse a loop of borax, touch oxide and refuse to read hot versus cold bead colours. $B_{2}O_{3}$ flux also lowers silica melting for borosilicate lab glass. Same melt cleans metal surfaces before soldering by dissolving scale.'
      },
      {
        term: 'Silica plus silicones',
        kind: 'insight',
        statement: 'A **tetrahedral oxide network turns to flexible chains** `silica-silicone` $SiO_{2}$ quartz gives glass while $R_{2}SiCl_{2}$ hydrolysis plus bake gives $R_{2}SiO$ chains.',
        detail: 'Fuse $SiO_{2}$ plus $Na_{2}CO_{3}$ plus $CaCO_{3}$ for soda glass and add $B_{2}O_{3}$ for heat proof borosilicate. Hydrolyse dialkyl dichlorosilane then condense to silicone oil plus rubber that repels $H_{2}O$ and resists heat. Cross link density sets oil versus grease versus resin.'
      },
      {
        term: 'Haber ammonia synthesis',
        kind: 'theorem',
        statement: 'A **pressure plus iron compromise fixes air nitrogen** `haber-fix` $N_{2}$ plus $3H_{2}$ over $Fe$ near $723$ K plus $200$ atm gives $2NH_{3}$ exothermically.',
        detail: 'Moles shrink so pressure pushes right while low temperature favours yield but slows rate, fixed near $723$ K with promoted $Fe$ plus $K_{2}O$ plus $Al_{2}O_{3}$. Cool to liquefy $NH_{3}$ and recycle unreacted $N_{2}$ plus $H_{2}$. Product feeds urea plus $HNO_{3}$ plus explosives chains.'
      },
      {
        term: 'Ostwald nitric acid route',
        kind: 'method',
        statement: 'A **platinum gauze burns ammonia to nitric oxide** `ostwald-acid` $NH_{3}$ plus $O_{2}$ over $Pt$ plus $Rh$ near $1173$ K gives $NO$ then $NO_{2}$ then $HNO_{3}$.',
        detail: 'Oxidise $4NH_{3}$ plus $5O_{2}$ to $4NO$ plus $6H_{2}O$, cool to $2NO$ plus $O_{2}$ to $2NO_{2}$, then absorb $3NO_{2}$ plus $H_{2}O$ to $2HNO_{3}$ plus $NO$ for recycle. Concentrated $HNO_{3}$ with $H_{2}SO_{4}$ nitrates organics to explosives plus dyes. $HNO_{3}$ also passivates $Fe$ plus $Al$ by oxide film.'
      }
    ],
    figures: [
      {
        caption: 'Borax $Na_{2}B_{4}O_{7}$ swaps to $H_{3}BO_{3}$, $SiO_{2}$ builds glass plus $R_{2}SiO$ chains, and $N_{2}$ to $NH_{3}$ to $HNO_{3}$ scales nitrogen use.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Borax silica Haber Ostwald landmark routes" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">borax swap</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">to H3BO3 acid</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">bead flux</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">silica net</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">glass plus chain</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">R2SiO repels</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">N2 to NH3</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">to HNO3 acid</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">flux plus glass plus fertilizer chain</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Borax to boric acid',
        problem: '$Na_{2}B_{4}O_{7}$ solution plus $HCl$ needs $H_{3}BO_{3}$ flakes. Show the acid cut.',
        steps: [
          { label: 'Step 1', text: 'Acidify measured borax:\n```text\nNa2B4O7 + 2HCl + 5H2O -> 2NaCl + 4H3BO3\ncool to crystallize flakes\nfilter plus wash cold\n```\nStrong acid displaces weak $H_{3}BO_{3}$.' },
          { label: 'Step 2', text: 'Cool to crystallize $H_{3}BO_{3}$ flakes from $NaCl$ mother liquor.' },
          { label: 'Step 3', text: 'Test $H_{3}BO_{3}$ as weak Lewis acid accepting $OH^{-}$ to $B(OH)_{4}$ minus.' }
        ],
        result: 'Acid cut gives $H_{3}BO_{3}$ flakes for antiseptic plus flux use.'
      },
      {
        title: 'Ammonia to nitric acid chain',
        problem: '$N_{2}$ plus $H_{2}$ feed must reach $HNO_{3}$ through $NH_{3}$. Link Haber to Ostwald.',
        steps: [
          { label: 'Step 1', text: 'Fix $N_{2}$ plus $3H_{2}$ over $Fe$ near $723$ K plus $200$ atm to $2NH_{3}$.' },
          { label: 'Step 2', text: 'Burn $NH_{3}$ over $Pt$ plus $Rh$ near $1173$ K to $NO$ then $NO_{2}$.' },
          { label: 'Step 3', text: 'Absorb $NO_{2}$ in $H_{2}O$ to $HNO_{3}$ with $NO$ recycle.' }
        ],
        result: 'Haber $NH_{3}$ feeds Ostwald $HNO_{3}$ for fertilizer plus nitration.'
      }
    ],
    keyTakeaways: [
      '$Na_{2}B_{4}O_{7}$ plus acid gives $H_{3}BO_{3}$ Lewis acid flakes.',
      'Borax glass $B_{2}O_{3}$ fluxes plus bead tests $Co$ blue $Cr$ green.',
      '$SiO_{2}$ gives glass while $R_{2}SiO$ chains give repellent silicones.',
      'Haber $N_{2}$ plus $3H_{2}$ to $NH_{3}$ feeds Ostwald to $HNO_{3}$.'
    ],
    quiz: [
      {
        q: 'Borax titrated with $HCl$ uses methyl orange because:',
        options: ['$H_{3}BO_{3}$ too weak to shift the dye', '$HCl$ is weak', 'Borax is neutral', 'No reaction'],
        answer: 0,
        explanation: 'Step 1: Form weak $H_{3}BO_{3}$ product. Step 2: Note it cannot hold indicator. Step 3: End at methyl orange $NaCl$ point.'
      },
      {
        q: 'Silicone $R_{2}SiO$ chain comes from:',
        options: ['$SiO_{2}$ sand alone', '$R_{2}SiCl_{2}$ hydrolysis plus condensation', '$Na_{2}CO_{3}$ melt', '$HNO_{3}$ nitration'],
        answer: 1,
        explanation: 'Step 1: Hydrolyse $R_{2}SiCl_{2}$ to silanol. Step 2: Condense with water loss. Step 3: Build $R_{2}SiO$ chains.'
      },
      // PYQ-pattern: JEE 2019 — Haber pressure temperature compromise (rephrased)
      {
        q: 'Haber $NH_{3}$ high yield plus rate uses:',
        options: ['Low pressure high temperature', 'No catalyst', '$Fe$ near $723$ K plus $200$ atm with recycle', 'Once through cold'],
        answer: 2,
        explanation: 'Step 1: Push moles shrink with pressure. Step 2: Compromise $723$ K for rate plus yield. Step 3: Liquefy $NH_{3}$ and recycle feed.'
      },
      {
        q: 'Ostwald first gauze step gives:',
        options: ['$N_{2}$ from air', '$H_{2}$ from water', 'Urea crystals', '$NO$ from $NH_{3}$ plus $O_{2}$ over $Pt$ plus $Rh$'],
        answer: 3,
        explanation: 'Step 1: Burn $NH_{3}$ with $O_{2}$. Step 2: Use $Pt$ plus $Rh$ near $1173$ K. Step 3: Collect $NO$ for $NO_{2}$ plus acid.'
      }
    ]
  },
  // ---------------------------------------------------------------- 40.4
  {
    sectionId: 'chem-ch40-s4',
    readingTime: 8,
    intro: 'Polyhalogen solvents plus refrigerants plus insecticides grew on $C-Cl$ stability that later turned into persistence. Chloroform $CHCl_{3}$ releases phosgene $COCl_{2}$ on air plus light while carbon $CCl_{4}$ harms liver plus ozone. Freon $CF_{2}Cl_{2}$ lifts chlorine to the stratosphere and $DDT$ magnifies through food webs.',
    objectives: [
      'Write $CHCl_{3}$ plus $CCl_{4}$ prep with phosgene plus liver guards',
      'Trace $CF_{2}Cl_{2}$ ozone loss by $Cl$ radical chain',
      'Explain $DDT$ persistence plus magnification with replacement logic'
    ],
    concepts: [
      {
        term: 'Chloroform preparation plus risk',
        kind: 'definition',
        statement: 'A **haloform plus methane route builds chloroform** `chloroform-make` $C_{2}H_{5}OH$ plus $CaOCl_{2}$ gives $CHCl_{3}$ while $CH_{4}$ plus $Cl_{2}$ also routes there.',
        detail: 'Store dark in brown bottles with $1$ percent $C_{2}H_{5}OH$ that converts phosgene $COCl_{2}$ to harmless carbonate. Air plus light oxidise $CHCl_{3}$ to $COCl_{2}$ plus $HCl$. Test for phosgene with $AgNO_{3}$ white $AgCl$ or aniline isocyanide foul smell guard.'
      },
      {
        term: 'Carbon tetrachloride duality',
        kind: 'theorem',
        statement: 'A **non flammable solvent doubles as toxic ozone agent** `ccl4-dual` $CS_{2}$ plus $Cl_{2}$ gives $CCl_{4}$ for grease plus fire use with liver plus ozone cost.',
        detail: 'Use as dry cleaning plus degreasing plus $Cl_{2}$ source in haloform tests, now curtailed by toxicity. Vapour harms liver plus kidneys and depletes ozone by $Cl$ release aloft. Montreal style phaseout replaced it with safer $CH_{2}Cl_{2}$ where possible.'
      },
      {
        term: 'Freon refrigeration plus ozone loss',
        kind: 'law',
        statement: 'A **stable CFC ferries chlorine to the ozone layer** `freon-ozone` $CCl_{4}$ plus $HF$ gives $CF_{2}Cl_{2}$ that splits $Cl$ under UV to kill $O_{3}$.',
        detail: 'Swarts fluorination with $SbF_{3}$ catalyst swaps $Cl$ for $F$ to make $CFCl_{3}$ plus $CF_{2}Cl_{2}$ for fridges plus sprays. Stratospheric UV frees $Cl$ that cycles $Cl$ plus $O_{3}$ to $ClO$ plus $O_{2}$ then $ClO$ plus $O$ to $Cl$ plus $O_{2}$. One $Cl$ destroys thousands of $O_{3}$ before reservoir $HCl$ plus $ClONO_{2}$ parks it.'
      },
      {
        term: 'DDT persistence plus magnification',
        kind: 'insight',
        statement: 'A **fat soluble shield resists decay and climbs food webs** `ddt-magnify` chloral plus $C_{6}H_{5}Cl$ gives $DDT$ that stores in fat and magnifies to top predators.',
        detail: 'Contact insecticide blocks $Na$ channels in nerves with long residual action that once curbed vector disease. Lipid solubility plus $C-Cl$ strength block metabolism so levels rise from plankton to fish to birds. Thin eggshells plus broad kill plus resistance forced bans with narrow disease exemptions.'
      },
      {
        term: 'Safe handling plus replacements',
        kind: 'method',
        statement: 'A **dark storage plus phaseout ladder cuts harm** `halo-safe` brown bottles plus $C_{2}H_{5}OH$ guard $CHCl_{3}$ while $HFC$ plus $HFO$ replace $CFC$ freons.',
        detail: 'Check $CHCl_{3}$ before anaesthetic style use and discard phosgene positive stock. Vent $CCl_{4}$ zones and monitor liver markers for workers. Choose $HFC$ $134a$ plus hydrocarbon plus ammonia cycles that lack $Cl$ ozone attack.'
      }
    ],
    figures: [
      {
        caption: '$CHCl_{3}$ to $COCl_{2}$ guard, $CCl_{4}$ liver plus ozone cost, $CF_{2}Cl_{2}$ $Cl$ cycle on $O_{3}$, and $DDT$ fat climb through food webs.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Polyhalogen uses with phosgene ozone DDT effects" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">CHCl3 guard</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">dark plus EtOH</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">phosgene check</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">CFC to Cl</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">UV frees Cl</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">O3 loss loop</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">DDT climb</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">fat stores up</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">stability gives use then persistence cost</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Chloroform phosgene check',
        problem: 'Stored $CHCl_{3}$ must be cleared for use without $COCl_{2}$ poisoning. Show the guard test.',
        steps: [
          { label: 'Step 1', text: 'Inspect storage:\n```text\nbrown bottle dark plus 1 percent ethanol guard\nethanol converts COCl2 to carbonate ester\nreject clear bottles in light\n```\nLight plus air make $COCl_{2}$ from $CHCl_{3}$.' },
          { label: 'Step 2', text: 'Shake sample with $H_{2}O$ and add $AgNO_{3}$ to spot $HCl$ from $COCl_{2}$ as white $AgCl$.' },
          { label: 'Step 3', text: 'Discard positive stock and retain only $COCl_{2}$ negative $CHCl_{3}$.' }
        ],
        result: 'Negative $AgCl$ test clears $CHCl_{3}$ while positive stock is destroyed.'
      },
      {
        title: 'Ozone loss per chlorine',
        problem: '$CF_{2}Cl_{2}$ releases $Cl$ aloft that cycles on $O_{3}$. Trace one loop turn.',
        steps: [
          { label: 'Step 1', text: 'Photolyse $CF_{2}Cl_{2}$ by UV to $Cl$ plus fragments above the ozone layer.' },
          { label: 'Step 2', text: 'Run $Cl$ plus $O_{3}$ to $ClO$ plus $O_{2}$ then $ClO$ plus $O$ to $Cl$ plus $O_{2}$.' },
          { label: 'Step 3', text: 'Count net $O_{3}$ plus $O$ to $2O_{2}$ with $Cl$ reborn for thousands of turns.' }
        ],
        result: 'Each $Cl$ cycles to destroy thousands of $O_{3}$ before parking as $HCl$.'
      }
    ],
    keyTakeaways: [
      '$CHCl_{3}$ needs dark plus $C_{2}H_{5}OH$ guard against $COCl_{2}$ build.',
      '$CCl_{4}$ non flammable use pays liver plus ozone cost.',
      '$CF_{2}Cl_{2}$ UV $Cl$ cycles $O_{3}$ plus $O$ to $2O_{2}$ repeatedly.',
      '$DDT$ fat storage magnifies up food webs with thin shell plus resistance cost.'
    ],
    quiz: [
      {
        q: '$CHCl_{3}$ stored safe needs:',
        options: ['Dark brown plus $C_{2}H_{5}OH$ guard', 'Clear bottle in light', 'Open air vent', 'Heating'],
        answer: 0,
        explanation: 'Step 1: Block light with brown glass. Step 2: Add $C_{2}H_{5}OH$ to trap $COCl_{2}$. Step 3: Reject phosgene positive stock.'
      },
      {
        q: '$CCl_{4}$ major harms are:',
        options: ['Sweet taste only', 'Liver plus kidney harm plus ozone loss', 'No effect', 'Fertilizer gain'],
        answer: 1,
        explanation: 'Step 1: Note lipid solvent uptake. Step 2: Injure liver plus kidneys. Step 3: Release $Cl$ aloft for $O_{3}$ loss.'
      },
      // PYQ-pattern: NEET 2022 — freon ozone chain (rephrased)
      {
        q: 'Freon $CF_{2}Cl_{2}$ destroys $O_{3}$ by:',
        options: ['Blocking sunlight', 'Cooling the air', '$Cl$ radical chain $Cl$ plus $O_{3}$ to $ClO$ plus $O_{2}$', 'Adding oxygen'],
        answer: 2,
        explanation: 'Step 1: Free $Cl$ by UV aloft. Step 2: Run $Cl$ plus $O_{3}$ to $ClO$. Step 3: Regenerate $Cl$ for repeat kill.'
      },
      {
        q: '$DDT$ concern versus benefit is:',
        options: ['No persistence', 'Volatile gas', 'Water soluble', 'Fat storage plus magnification with vector control gain'],
        answer: 3,
        explanation: 'Step 1: Store in fat by lipid solubility. Step 2: Magnify to top predators. Step 3: Weigh against disease vector control.'
      }
    ]
  }
]
