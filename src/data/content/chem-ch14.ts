import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 14: s-Block, Hydrogen and Qualitative Salt Analysis
// Sections 14.1 - 14.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ and $$...$$ pipeline.
// ============================================================================

export const chemCh14Content: SectionContent[] = [
  // ---------------------------------------------------------------- 14.1
  {
    sectionId: 'chem-ch14-s1',
    readingTime: 7,
    intro: 'Hydrogen sits alone with one electron that can be lost, gained or shared, so it spans acid, hydride and covalent chemistry in one element. Its isotopes, spin isomers and three hydride families organize every later reaction of water and peroxides. This section locks those families plus hardness removal into quantitative form.',
    objectives: [
      'Classify ortho and para hydrogen plus protium, deuterium and tritium by property gaps',
      'Separate saline, covalent and polymeric hydrides by bonding and reactivity',
      'Write hardness, peroxide and water-chemistry equations for calcium and magnesium salts'
    ],
    concepts: [
      {
        term: 'Isotopes and spin isomers',
        kind: 'definition',
        statement: 'The **hydrogen isotopes** are `protium` $^{1}H$ near $99.98$ percent, deuterium $^{2}H$ with double mass used as $D_{2}O$ moderator, and tritium $^{3}H$ radioactive with half life near $12.3$ years. Ortho hydrogen with parallel nuclear spins dominates at room temperature near $75$ percent, while para hydrogen with antiparallel spins dominates near $20$ K from lower rotational energy.',
        detail: 'Heavy water $D_{2}O$ boils near $101.4^{\\circ}C$ and slows neutron flux without capture, while tritium traces mechanisms through labelling. Ortho to para conversion releases heat that must be managed in liquid hydrogen storage.'
      },
      {
        term: 'Saline hydrides',
        kind: 'definition',
        statement: 'The **saline hydrides** form with alkali and heavier alkaline-earth metals as `H-` lattices such as $NaH$ and $CaH_{2}$, releasing $H_{2}$ with water as $NaH + H_{2}O \\rightarrow NaOH + H_{2}$. They conduct when fused and act as strong bases plus reductants toward $CO_{2}$ and $SO_{2}$.',
        detail: 'Thermal stability rises with cation size as lattice match improves, so $CsH$ outlasts $LiH$ toward dissociation. Beryllium and magnesium hydrides already turn polymeric covalent rather than saline.'
      },
      {
        term: 'Covalent and polymeric hydrides',
        kind: 'law',
        statement: 'The **covalent hydrides** share pairs as `X-H` units such as $CH_{4}$, $NH_{3}$, $H_{2}O$ and $HF$, with volatility and acidity tracking electronegativity gaps. Electron-deficient boranes polymerize through three-centre $B-H-B$ bridges as in $B_{2}H_{6}$, while $(AlH_{3})_{n}$ and $(BeH_{2})_{n}$ extend the same bridge into chains.',
        detail: 'Diborane $B_{2}H_{6}$ cleaves with Lewis bases to borane adducts and hydroborates alkenes, the gateway to organoborane synthesis. Silane $SiH_{4}$ ignites spontaneously while methane needs a spark, marking weaker $Si-H$ overlap.'
      },
      {
        term: 'Water hardness chemistry',
        kind: 'method',
        statement: 'The **hardness balance** splits temporary hardness from `CaHCO3` as $Ca(HCO_{3})_{2}$ removed by boiling $Ca(HCO_{3})_{2} \\rightarrow CaCO_{3} + H_{2}O + CO_{2}$, against permanent hardness from $CaCl_{2}$ and $MgSO_{4}$ removed by washing soda $CaCl_{2} + Na_{2}CO_{3} \\rightarrow CaCO_{3} + 2NaCl$. Clark degree counts $CaCO_{3}$ equivalents, with $1$ Clark near $14.3$ ppm.',
        detail: 'Permutit $Na_{2}Al_{2}Si_{2}O_{8}$ exchanges $2Na^{+}$ for $Ca^{2+}$ and regenerates with brine, while Calgon hexametaphosphate sequesters $Ca^{2+}$ without precipitate. Boiling fails for permanent hardness because no volatile product forms.'
      },
      {
        term: 'Hydrogen peroxide behaviour',
        kind: 'insight',
        statement: 'The **peroxide redox duality** lets `H2O2` as $H_{2}O_{2}$ oxidize $PbS$ to $PbSO_{4}$ and $SO_{3}^{2-}$ to $SO_{4}^{2-}$, yet reduce $MnO_{4}^{-}$ to $Mn^{2+}$ with $O_{2}$ evolution. Structure is open-book with $O-O$ near $148$ pm, $O-H$ near $97$ pm and dihedral near $111^{\\circ}$ in gas, held by hydrogen bonding in concentrated solution.',
        detail: 'Acidified $H_{2}O_{2}$ with $KI$ liberates $I_{2}$ for iodometric strength assay, while $CrO_{5}$ blue peroxo formation confirms trace peroxide. Storage needs dark vented vessels because $2H_{2}O_{2} \\rightarrow 2H_{2}O + O_{2}$ is catalysed by light, metals and alkali.'
      }
    ],
    figures: [
      {
        caption: 'Protium near $99.98\\%$, deuterium as $D_2O$ moderator and tritium near 12.3 yr half-life span hydrides from saline $H^-$ to covalent $X-H$ to $H_2O_2$ open-book.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hydrogen isotopes hydrides and peroxide"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">isotopes + hydride families + peroxide</text><circle cx="100" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="110" r="5" fill="currentColor" stroke="none"/><text x="70" y="150" font-size="12" fill="currentColor" font-family="sans-serif">1H protium</text><circle cx="260" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="260" cy="110" r="5" fill="currentColor" stroke="none"/><circle cx="268" cy="110" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="230" y="150" font-size="12" fill="currentColor" font-family="sans-serif">2H deuterium</text><circle cx="420" cy="110" r="22" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="420" cy="110" r="5" fill="currentColor" stroke="none"/><circle cx="430" cy="110" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="412" cy="110" r="3" fill="none" stroke="currentColor" stroke-width="1"/><text x="390" y="150" font-size="12" fill="currentColor" font-family="sans-serif">3H tritium radio</text><line x1="40" y1="175" x2="680" y2="175" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="40" y="200" font-size="13" fill="currentColor" font-family="sans-serif">NaH + H2O -&gt; NaOH + H2 (saline); CH4/NH3/H2O covalent; B2H6 3-centre</text><text x="40" y="225" font-size="13" fill="currentColor" font-family="sans-serif">hardness: boil Ca(HCO3)2 -&gt; CaCO3; Clark with soap; calgon masks</text><line x1="120" y1="260" x2="220" y2="280" stroke="currentColor" stroke-width="2"/><line x1="220" y1="280" x2="320" y2="260" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="260" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="320" cy="260" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="200" y="310" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">H2O2 open-book O-O, dual oxidant/reductant</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Sorting hydrides by reaction',
        problem: 'Classify $NaH$, $CH_{4}$, $B_{2}H_{6}$ and $(BeH_{2})_{n}$ as saline, covalent or polymeric, and give one diagnostic reaction each.',
        steps: [
          { label: 'Step 1', text: '```text\nNaH: saline H- lattice, conducts when fused.\nCH4: discrete covalent, inert to water.\nB2H6: electron-deficient dimer with B-H-B bridges.\n(BeH2)n: polymeric chain through bridging H.\n```\nBonding runs ionic $H^{-}$ through shared $X-H$ to three-centre bridges across the list.' },
          { label: 'Step 2', text: 'Test with water: $NaH + H_{2}O \\rightarrow NaOH + H_{2}$ fizzes, $CH_{4} + H_{2}O$ shows no change, $B_{2}H_{6} + 6H_{2}O \\rightarrow 2H_{3}BO_{3} + 6H_{2}$ hydrolyses fully, and $(BeH_{2})_{n}$ hydrolyses slowly to $Be(OH)_{2}$ plus $H_{2}$.' },
          { label: 'Step 3', text: 'Confirm $B_{2}H_{6}$ with hydroboration of alkenes and $NaH$ with $CO_{2}$ reduction to formate, while $CH_{4}$ needs combustion $CH_{4} + 2O_{2} \\rightarrow CO_{2} + 2H_{2}O$ for any change.' }
        ],
        result: '$NaH$ is saline, $CH_{4}$ covalent, $B_{2}H_{6}$ dimeric deficient and $(BeH_{2})_{n}$ polymeric, separated by water response.'
      },
      {
        title: 'Removing mixed hardness',
        problem: 'A sample holds $Ca(HCO_{3})_{2}$ plus $MgSO_{4}$. Show the two removal steps and the precipitate in each.',
        steps: [
          { label: 'Step 1', text: 'Boil first for temporary hardness: $Ca(HCO_{3})_{2} \\rightarrow CaCO_{3} + H_{2}O + CO_{2}$ with white $CaCO_{3}$ settling. This step costs only heat and leaves $MgSO_{4}$ untouched because sulfate has no volatile path.' },
          { label: 'Step 2', text: 'Dose washing soda for permanent hardness: $MgSO_{4} + Na_{2}CO_{3} \\rightarrow MgCO_{3} + Na_{2}SO_{4}$ followed by $MgCO_{3}$ hydrolysis toward $Mg(OH)_{2}$ in hot solution. Filter the mixed $CaCO_{3}$ plus $Mg(OH)_{2}$ sludge.' },
          { label: 'Step 3', text: '```text\nBoil: Ca(HCO3)2 -> CaCO3 solid + CO2 gas.\nSoda: MgSO4 -> MgCO3 and Mg(OH)2 solids.\nPolish: permutit exchange for residual Ca2+ and Mg2+.\n```\nReport residual hardness as $CaCO_{3}$ equivalents after soap or $EDTA$ titration.' }
        ],
        result: 'Boiling clears bicarbonate hardness as $CaCO_{3}$, while soda ash clears sulfate hardness through carbonate and hydroxide precipitates.'
      }
    ],
    keyTakeaways: [
      'Protium, deuterium and tritium differ in mass and stability, with ortho-para split by nuclear spin.',
      '$NaH + H_{2}O \\rightarrow NaOH + H_{2}$ marks saline hydrides, unlike inert $CH_{4}$.',
      'Boiling removes $Ca(HCO_{3})_{2}$ while soda ash removes $CaCl_{2}$ and $MgSO_{4}$ hardness.',
      '$H_{2}O_{2}$ both oxidizes $PbS$ and reduces $MnO_{4}^{-}$, with $2H_{2}O_{2} \\rightarrow 2H_{2}O + O_{2}$ on standing.'
    ],
    quiz: [
      // PYQ-pattern: hydride classification drill
      {
        q: 'Which set correctly classifies hydrides?',
        options: ['$NaH$ covalent and $CH_{4}$ saline', '$NaH$ saline, $CH_{4}$ covalent, $B_{2}H_{6}$ electron-deficient dimer', '$B_{2}H_{6}$ ionic and $NaH$ polymeric', 'All hydrides are saline'],
        answer: 1,
        explanation: 'Step 1: Test charge separation: $NaH$ holds $H^{-}$. Step 2: Test sharing: $CH_{4}$ holds $C-H$ pairs. Step 3: Test deficiency: $B_{2}H_{6}$ bridges through three-centre bonds.'
      },
      {
        q: 'What removes permanent hardness from $MgSO_{4}$?',
        options: ['Boiling alone', 'Washing soda as $MgSO_{4} + Na_{2}CO_{3} \\rightarrow MgCO_{3} + Na_{2}SO_{4}$', 'Filtration alone', 'Standing in sunlight'],
        answer: 1,
        explanation: 'Step 1: Note sulfate has no volatile decomposition. Step 2: Carbonate precipitates $Mg^{2+}$ as solid. Step 3: Hence soda ash, not heat, clears the sulfate term.'
      },
      {
        q: 'Which statement about $H_{2}O_{2}$ is correct?',
        options: ['It acts only as oxidant', 'It acts only as reductant', 'It oxidizes $PbS$ to $PbSO_{4}$ and reduces $MnO_{4}^{-}$ to $Mn^{2+}$, showing both roles', 'It never evolves $O_{2}$'],
        answer: 2,
        explanation: 'Step 1: Write $PbS$ oxidation with oxygen gain. Step 2: Write $MnO_{4}^{-}$ reduction with $O_{2}$ release. Step 3: One reagent spans both directions, proving duality.'
      },
      // PYQ-pattern: isotope property check
      {
        q: 'Why is $D_{2}O$ used as moderator while $H_{2}O$ is less suited in natural-uranium stacks?',
        options: ['$D_{2}O$ is radioactive', 'Deuterium slows neutrons with far lower capture than protium, preserving the chain', '$D_{2}O$ boils at room temperature', 'Protium has double the mass of deuterium'],
        answer: 1,
        explanation: 'Step 1: Compare neutron capture cross sections of $^{1}H$ and $^{2}H$. Step 2: Lower capture in $D$ leaves more neutrons for fission. Step 3: Hence heavy water sustains natural fuel where light water absorbs too much.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.2
  {
    sectionId: 'chem-ch14-s2',
    readingTime: 8,
    intro: 'Alkali and alkaline-earth metals grow more electropositive and more basic downward, yet solubility and thermal stability zigzag from competing lattice and hydration terms. Flame colours, diagonal pairs and carbonate decomposition walks turn that zigzag into memory hooks. This section systematizes trends plus diagonal $Li$-$Mg$ and $Be$-$Al$ links.',
    objectives: [
      'Recall flame colours and hydration versus lattice control of solubility and melting',
      'Order carbonate, hydroxide and nitrate stability from $Li$ toward $Cs$ and $Be$ toward $Ba$',
      'Justify diagonal similarities $Li$ with $Mg$ and $Be$ with $Al$ from charge-density match'
    ],
    concepts: [
      {
        term: 'Flame and hydration signatures',
        kind: 'notation',
        statement: 'The **flame palette** reads `Li` crimson $670$ nm, $Na$ golden yellow $589$ nm, $K$ lilac, $Ca$ brick red, $Sr$ crimson and $Ba$ apple green through volatile chloride formation. Hydration enthalpy falls as $Li^{+} > Na^{+} > K^{+} > Rb^{+} > Cs^{+}$ and $Be^{2+} > Mg^{2+} > Ca^{2+} > Sr^{2+} > Ba^{2+}$, which is why $Li^{+}$ migrates slowest despite smallest crystal radius.',
        detail: 'Small ions pay large lattice terms but gain even larger hydration, so $LiF$ is least soluble while $LiClO_{4}$ dissolves freely. Conductivity order in water therefore inverts crystal-size order.'
      },
      {
        term: 'Solubility walks',
        kind: 'law',
        statement: 'The **solubility walk** balances `lattice` $U$ against hydration $H$, with fluorides and carbonates growing more soluble downward as $U$ falls faster, while hydroxides and sulfates show the reverse tilt in parts of the table. Thus $BeSO_{4}$ and $MgSO_{4}$ dissolve readily while $BaSO_{4}$ with $K_{sp}$ near $10^{-10}$ precipitates quantitatively, and $Li_{2}CO_{3}$ is sparingly soluble against soluble $Na_{2}CO_{3}$.',
        detail: 'Sulfate insolubility of $BaSO_{4}$ underpins gravimetry for sulfur, while $Mg(OH)_{2}$ milk of magnesia stays sparingly soluble against caustic $Ba(OH)_{2}$. Lattice-hydration crossover points differ per anion size.'
      },
      {
        term: 'Thermal stability ladder',
        kind: 'theorem',
        statement: 'The **carbonate stability ladder** rises downward as `MCO3` decomposition $MCO_{3} \\rightarrow MO + CO_{2}$ needs higher $T$ for larger cations, with $Li_{2}CO_{3}$ near $730^{\\circ}C$ and $K_{2}CO_{3}$ stable to fusion. Hydroxides follow $Be(OH)_{2}$ amphoteric and low, $Mg(OH)_{2}$ near $350^{\\circ}C$, $Ca(OH)_{2}$ near $580^{\\circ}C$ and $Ba(OH)_{2}$ robust, while nitrates release $NO_{2}$ plus $O_{2}$ in the same order.',
        detail: 'Small cations stabilize small $O^{2-}$ over large $CO_{3}^{2-}$, tilting equilibrium toward products. Lithium nitrate uniquely gives $Li_{2}O$ plus $NO_{2}$ plus $O_{2}$ while heavier nitrates give nitrites first.'
      },
      {
        term: 'Diagonal pairs',
        kind: 'insight',
        statement: 'The **diagonal match** pairs `Li-Mg` and `Be-Al` because $Z$ divided by $r$ nearly repeats along the diagonal, giving shared hardness, nitride formation $6Li + N_{2} \\rightarrow 2Li_{3}N$ paralleled only by $Mg$, and amphoteric $BeO$ with $Al_{2}O_{3}$. Organometallic solubility and chloride bridging repeat the same pairing.',
        detail: 'Lithium plus magnesium form nitrides directly while heavier congeners do not, and beryllium chloride plus aluminium chloride both hydrolyse and bridge. Charge density, not group number, is the controlling variable.'
      },
      {
        term: 'Oxide basicity and uses',
        kind: 'definition',
        statement: 'The **basicity walk** rises downward as `MO` shifts from amphoteric $BeO$ through weakly basic $MgO$ toward strongly basic $CaO$, $SrO$ and $BaO$ that slake as $CaO + H_{2}O \\rightarrow Ca(OH)_{2}$. Quicklime $CaO$, slaked lime $Ca(OH)_{2}$, soda ash $Na_{2}CO_{3}$ and plaster $CaSO_{4} \\cdot \\frac{1}{2}H_{2}O$ anchor cement, glass and wall-finishing chemistry.',
        detail: 'Superoxides $KO_{2}$ and $RbO_{2}$ absorb $CO_{2}$ in closed loops as $4KO_{2} + 2CO_{2} \\rightarrow 2K_{2}CO_{3} + 3O_{2}$, refreshing breathing apparatus. Peroxides $Na_{2}O_{2}$ and $BaO_{2}$ release $H_{2}O_{2}$ with cold acid.'
      }
    ],
    figures: [
      {
        caption: 'Flames read $Li$ crimson, $Na$ gold, $K$ lilac, $Ca$ brick, $Sr$ crimson and $Ba$ green; carbonates need higher $T$ downward as $MCO_3 \\to MO + CO_2$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="s-block flames and carbonate ladder"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">flame palette + carbonate stability ladder</text><rect x="40" y="65" width="80" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="110" font-size="11" fill="currentColor" font-family="sans-serif">Li crim</text><rect x="130" y="65" width="80" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="145" y="110" font-size="11" fill="currentColor" font-family="sans-serif">Na gold</text><rect x="220" y="65" width="80" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="238" y="110" font-size="11" fill="currentColor" font-family="sans-serif">K lilac</text><rect x="310" y="65" width="80" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="322" y="110" font-size="11" fill="currentColor" font-family="sans-serif">Ca brick</text><rect x="400" y="65" width="80" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="412" y="110" font-size="11" fill="currentColor" font-family="sans-serif">Sr crim</text><rect x="490" y="65" width="80" height="70" fill="none" stroke="currentColor" stroke-width="2"/><text x="502" y="110" font-size="11" fill="currentColor" font-family="sans-serif">Ba green</text><line x1="40" y1="160" x2="680" y2="160" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="40" y="190" font-size="13" fill="currentColor" font-family="sans-serif">Li2CO3 730 C decomposes; Na2CO3, K2CO3 stable to fusion</text><line x1="60" y1="210" x2="620" y2="210" stroke="currentColor" stroke-width="2"/><polygon points="620,210 612,204 612,216" fill="currentColor" stroke="none"/><text x="60" y="232" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">stability rises down: larger M+ polarises CO3 2- less</text><text x="40" y="260" font-size="12" fill="currentColor" font-family="sans-serif">Li-Mg diagonal: nitrides, hard; BeO amphoteric -&gt; BaO strongly basic CaO + H2O -&gt; Ca(OH)2</text><text x="40" y="285" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">hydration Li+ &gt; Na+ &gt; K+; solubility: lattice vs hydration tilt</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Carbonate stability ranking',
        problem: 'Order $Li_{2}CO_{3}$, $Na_{2}CO_{3}$, $MgCO_{3}$ and $BaCO_{3}$ by decomposition temperature and justify.',
        steps: [
          { label: 'Step 1', text: '```text\nCation polarizing power: Mg2+ > Li+ > Na+ and Mg2+ > Ba2+.\nSmall cations favour small O2- product over large CO3 2-.\nStability rises as polarization falls.\n```\nDecomposition $MCO_{3} \\rightarrow MO + CO_{2}$ is driven toward $MO$ by small highly charging cations.' },
          { label: 'Step 2', text: 'Within Group 1, $Li_{2}CO_{3}$ decomposes near $730^{\\circ}C$ while $Na_{2}CO_{3}$ survives to fusion above $850^{\\circ}C$. Within Group 2, $MgCO_{3}$ near $350^{\\circ}C$ yields far below $BaCO_{3}$ above $1000^{\\circ}C$.' },
          { label: 'Step 3', text: 'Combine walks as $MgCO_{3} < Li_{2}CO_{3} < Na_{2}CO_{3}$ and $MgCO_{3} < BaCO_{3}$, with $BaCO_{3}$ the most robust of the four from largest cation stabilizing large carbonate.' }
        ],
        result: 'Stability rises as $MgCO_{3} < Li_{2}CO_{3} < Na_{2}CO_{3} < BaCO_{3}$ in decomposition temperature.'
      },
      {
        title: 'Sulfate precipitation choice',
        problem: 'A solution may hold $Mg^{2+}$, $Ca^{2+}$, $Sr^{2+}$ and $Ba^{2+}$. Show how sulfate addition separates barium first.',
        steps: [
          { label: 'Step 1', text: 'Write precipitation as $Ba^{2+} + SO_{4}^{2-} \\rightarrow BaSO_{4}$ with $K_{sp}$ near $10^{-10}$, against $CaSO_{4}$ near $10^{-5}$ and $MgSO_{4}$ fully soluble. Small $K_{sp}$ means nanomolar residual $Ba^{2+}$ after equivalent sulfate dosing.' },
          { label: 'Step 2', text: 'Add dilute $H_{2}SO_{4}$ dropwise: white $BaSO_{4}$ appears first, then $SrSO_{4}$, while $Ca^{2+}$ needs concentrated reagent and $Mg^{2+}$ stays clear. Filter before each next addition to stage the separation.' },
          { label: 'Step 3', text: '```text\nBa2+: immediate white BaSO4, insoluble in acid.\nSr2+: delayed white SrSO4.\nCa2+/Mg2+: no precipitate with dilute dose.\n```\nConfirm $BaSO_{4}$ by insolubility in hot concentrated acid unlike carbonate precipitates.' }
        ],
        result: 'Sulfate stages precipitation as $Ba$ first, then $Sr$, leaving $Ca$ and $Mg$ for later carbonate and oxalate steps.'
      }
    ],
    keyTakeaways: [
      'Flames read $Li$ crimson, $Na$ yellow, $K$ lilac, $Ca$ brick red, $Sr$ crimson and $Ba$ green.',
      '$BaSO_{4}$ with $K_{sp}$ near $10^{-10}$ precipitates first among Group 2 sulfates.',
      'Carbonate stability rises downward as $Mg < Ca < Sr < Ba$ and $Li < Na < K$.',
      'Diagonal pairs $Li$-$Mg$ and $Be$-$Al$ share nitrides, bridging chlorides and amphoteric oxides.'
    ],
    quiz: [
      // PYQ-pattern: flame colour recall drill
      {
        q: 'Which flame pairing is correct?',
        options: ['$Na$ lilac and $K$ yellow', '$Na$ golden yellow $589$ nm and $Ba$ apple green', '$Ca$ green and $Ba$ brick red', '$Li$ green and $Sr$ yellow'],
        answer: 1,
        explanation: 'Step 1: Recall alkali emission lines: $Na$ yellow dominates. Step 2: Recall Group 2 palette: $Ca$ brick red, $Sr$ crimson, $Ba$ green. Step 3: Only the second option pairs both correctly.'
      },
      {
        q: 'Why is $BaSO_{4}$ used for gravimetric sulfate work?',
        options: ['It is highly soluble', 'Its $K_{sp}$ near $10^{-10}$ drives quantitative precipitation insoluble in acids', 'It is coloured', 'It evolves gas on heating'],
        answer: 1,
        explanation: 'Step 1: Compare $K_{sp}$ values across $Mg$ through $Ba$ sulfates. Step 2: Lowest $K_{sp}$ leaves least ion in solution. Step 3: Acid insolubility then lets washing proceed without loss.'
      },
      // PYQ-pattern: carbonate stability walk
      {
        q: 'Which carbonate decomposes at the lowest temperature?',
        options: [`$BaCO_{3}$`, `$Na_{2}CO_{3}$`, `$MgCO_{3}$`, `$K_{2}CO_{3}$`],
        answer: 2,
        explanation: 'Step 1: Rank polarizing power with $Mg^{2+}$ highest. Step 2: Small cations favour $MO + CO_{2}$ products. Step 3: Hence $MgCO_{3}$ splits first near $350^{\\circ}C$.'
      },
      {
        q: 'Which behaviour marks the $Li$-$Mg$ diagonal pair?',
        options: ['Both form stable superoxides readily', 'Both form nitrides directly as $6Li + N_{2} \\rightarrow 2Li_{3}N$ and $3Mg + N_{2} \\rightarrow Mg_{3}N_{2}$', 'Both are liquids at room temperature', 'Both give green flames'],
        answer: 1,
        explanation: 'Step 1: Test direct nitride formation across Groups 1 and 2. Step 2: Only $Li$ and $Mg$ combine with $N_{2}$ on heating. Step 3: Shared charge density explains the joint behaviour.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.3
  {
    sectionId: 'chem-ch14-s3',
    readingTime: 9,
    intro: 'Anion analysis moves from volatile-gas evolution with dilute and concentrated acid toward confirmatory precipitation in neutral medium. Each gas has a colour, odour and trap reaction that narrows the field before a single sharp equation confirms. This section orders carbonate, sulfite, sulfide, nitrite, nitrate, halides, sulfate and phosphate with full equations.',
    objectives: [
      'Separate $CO_{3}^{2-}$, $SO_{3}^{2-}$, $S^{2-}$ and $NO_{2}^{-}$ by dilute-acid gases and trap tests',
      'Apply brown-ring, chromyl chloride and silver nitrate routes for nitrate, chloride and bromide',
      'Write sulfate, phosphate and acetate confirmatory precipitates with balanced equations'
    ],
    concepts: [
      {
        term: 'Dilute-acid gas evolution',
        kind: 'method',
        statement: 'The **dilute-acid screen** treats the salt with `dil_H2SO4` as $CO_{3}^{2-} + 2H^{+} \\rightarrow CO_{2} + H_{2}O$ giving odourless limewater-milky gas, $SO_{3}^{2-} + 2H^{+} \\rightarrow SO_{2} + H_{2}O$ giving pungent dichromate-greening gas, and $S^{2-} + 2H^{+} \\rightarrow H_{2}S$ giving rotten-egg lead-acetate blackening. Nitrite gives brown $NO_{2}$ on air oxidation as $2NO_{2}^{-} + 2H^{+} \\rightarrow NO + NO_{2} + H_{2}O$.',
        detail: 'Limewater $Ca(OH)_{2}$ turns milky as $CaCO_{3}$ then clears with excess $CO_{2}$ as $Ca(HCO_{3})_{2}$. Acidified dichromate paper turns green for $SO_{2}$ while lead acetate paper blackens for $H_{2}S$ as $PbS$.'
      },
      {
        term: 'Nitrate brown-ring test',
        kind: 'theorem',
        statement: 'The **brown-ring complex** forms `FeSO_NO` as $[Fe(H_{2}O)_{5}(NO)]^{2+}$ at the junction of $FeSO_{4}$ and concentrated $H_{2}SO_{4}$ layers. Chemistry runs $NO_{3}^{-} + 3Fe^{2+} + 4H^{+} \\rightarrow NO + 3Fe^{3+} + 2H_{2}O$ followed by $Fe^{2+} + NO \\rightarrow [Fe(H_{2}O)_{5}(NO)]^{2+}$ brown, with nitrite first destroyed by sulfamic acid to avoid false rings.',
        detail: 'Fresh $FeSO_{4}$, cooling and slow layering keep the ring sharp; shaking disperses it. Oxidants such as $NO_{2}^{-}$, $Br^{-}$ and $I^{-}$ must be removed because they colour the interface.'
      },
      {
        term: 'Halide silver and chromyl routes',
        kind: 'method',
        statement: 'The **silver nitrate ladder** precipitates `AgX` as $Ag^{+} + Cl^{-} \\rightarrow AgCl$ white curdy soluble in $NH_{3}$, $AgBr$ pale yellow sparingly soluble, and $AgI$ yellow insoluble, with $Ag_{2}CO_{3}$ and $Ag_{2}SO_{3}$ interferences first removed by acid. Chromyl chloride confirms chloride alone as $4Cl^{-} + K_{2}Cr_{2}O_{7} + 6H_{2}SO_{4} \\rightarrow 2CrO_{2}Cl_{2} + 2KHSO_{4} + 3H_{2}O$ with red vapours turning $NaOH$ yellow as $CrO_{4}^{2-}$.',
        detail: 'Bromide and iodide liberate $Br_{2}$ and $I_{2}$ with concentrated acid plus $MnO_{2}$, turning starch blue for iodine and fluorescein pink for bromine. Layer tests with $Cl_{2}$ water plus $CS_{2}$ separate the pair by violet versus orange organic layers.'
      },
      {
        term: 'Sulfate and phosphate confirmation',
        kind: 'law',
        statement: 'The **barium chloride test** gives `BaSO4` as $Ba^{2+} + SO_{4}^{2-} \\rightarrow BaSO_{4}$ white insoluble in concentrated $HCl$, separating sulfate from sulfite and carbonate which dissolve with gas. Phosphate gives canary $Ag_{3}PO_{4}$ as $3Ag^{+} + PO_{4}^{3-} \\rightarrow Ag_{3}PO_{4}$ soluble in $HNO_{3}$, plus yellow ammonium phosphomolybdate $(NH_{4})_{3}PMo_{12}O_{40}$ with molybdate in nitric medium.',
        detail: 'Barium sulfite dissolves in $HCl$ as $SO_{2}$, so acid insolubility is the discriminator. Magnesia mixture $Mg^{2+}$ plus $NH_{4}^{+}$ plus $NH_{3}$ gives white $MgNH_{4}PO_{4}$ as a second phosphate lock.'
      },
      {
        term: 'Acetate and oxalate locks',
        kind: 'notation',
        statement: 'The **acetate ester test** warms the salt with `ethanol` plus concentrated $H_{2}SO_{4}$ as $CH_{3}COO^{-} + C_{2}H_{5}OH \\rightarrow CH_{3}COOC_{2}H_{5} + OH^{-}$ in net form, releasing fruity ethyl acetate vapour. Oxalate decolourises hot $MnO_{4}^{-}$ as $2MnO_{4}^{-} + 5C_{2}O_{4}^{2-} + 16H^{+} \\rightarrow 2Mn^{2+} + 10CO_{2} + 8H_{2}O$ with brisk effervescence.',
        detail: 'Neutral ferric chloride gives blood-red $(CH_{3}COO)_{3}Fe$ that confirms acetate in neutral medium. Calcium chloride gives white $CaC_{2}O_{4}$ insoluble in acetic acid but soluble in dilute $H_{2}SO_{4}$ for oxalate.'
      }
    ],
    figures: [
      {
        caption: 'Dilute acid frees $CO_2$ milky with limewater, $SO_2$ pungent and $H_2S$ blackening lead acetate; nitrate locks as a brown $[Fe(H_2O)_5(NO)]^{2+}$ ring.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anion gas evolution and brown ring test"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">dilute-acid gases + brown ring junction</text><rect x="40" y="65" width="150" height="110" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="90" font-size="12" fill="currentColor" font-family="sans-serif">CO3 2- + H+:</text><text x="55" y="112" font-size="12" fill="currentColor" font-family="sans-serif">odourless CO2</text><text x="55" y="134" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">limewater milky</text><rect x="210" y="65" width="150" height="110" fill="none" stroke="currentColor" stroke-width="2"/><text x="225" y="90" font-size="12" fill="currentColor" font-family="sans-serif">SO3 2- + H+:</text><text x="225" y="112" font-size="12" fill="currentColor" font-family="sans-serif">pungent SO2</text><text x="225" y="134" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">dichromate green</text><rect x="380" y="65" width="150" height="110" fill="none" stroke="currentColor" stroke-width="2"/><text x="395" y="90" font-size="12" fill="currentColor" font-family="sans-serif">S2- + H+:</text><text x="395" y="112" font-size="12" fill="currentColor" font-family="sans-serif">rotten H2S</text><text x="395" y="134" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">PbS black</text><rect x="40" y="195" width="640" height="80" fill="none" stroke="currentColor" stroke-width="2"/><line x1="40" y1="235" x2="680" y2="235" stroke="currentColor" stroke-width="2"/><text x="55" y="220" font-size="12" fill="currentColor" font-family="sans-serif">brown ring: FeSO4 layer + conc H2SO4; NO3- + Fe2+ + H+ -&gt; NO trapped as [Fe(H2O)5(NO)]2+</text><text x="55" y="258" font-size="12" fill="currentColor" font-family="sans-serif">AgCl white soluble NH3, AgBr pale, AgI yellow; BaSO4 white acid-insoluble</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Separating carbonate, sulfite and sulfide',
        problem: 'Three sodium salts each fizz with dilute $H_{2}SO_{4}$. Show how limewater, dichromate and lead acetate assign $CO_{3}^{2-}$, $SO_{3}^{2-}$ and $S^{2-}$.',
        steps: [
          { label: 'Step 1', text: '```text\nGas A: odourless, milky limewater -> CO2 -> carbonate.\nGas B: pungent, green dichromate -> SO2 -> sulfite.\nGas C: rotten egg, black lead acetate -> H2S -> sulfide.\n```\nEvolve each as $CO_{3}^{2-} + 2H^{+} \\rightarrow CO_{2} + H_{2}O$, $SO_{3}^{2-} + 2H^{+} \\rightarrow SO_{2} + H_{2}O$ and $S^{2-} + 2H^{+} \\rightarrow H_{2}S$.' },
          { label: 'Step 2', text: 'Trap selectively: $Ca(OH)_{2} + CO_{2} \\rightarrow CaCO_{3} + H_{2}O$ milky, $Cr_{2}O_{7}^{2-} + SO_{2}$ toward green $Cr^{3+}$, and $Pb(CH_{3}COO)_{2} + H_{2}S \\rightarrow PbS + 2CH_{3}COOH$ black. Run blanks because $SO_{2}$ also milks limewater.' },
          { label: 'Step 3', text: 'Confirm residues: $BaCl_{2}$ gives $BaSO_{3}$ soluble in $HCl$ versus $BaSO_{4}$ insoluble, while $AgNO_{3}$ gives $Ag_{2}S$ black for sulfide. Cross-traps remove overlap before final precipitation.' }
        ],
        result: 'Odour plus three trap papers separate $CO_{2}$, $SO_{2}$ and $H_{2}S$, hence carbonate, sulfite and sulfide.'
      },
      {
        title: 'Chloride confirmation without bromide confusion',
        problem: 'A salt gives white $AgNO_{3}$ precipitate soluble in $NH_{3}$. Prove chloride with chromyl chloride and rule out bromide.',
        steps: [
          { label: 'Step 1', text: 'Heat solid with $K_{2}Cr_{2}O_{7}$ plus concentrated $H_{2}SO_{4}$: $4Cl^{-} + K_{2}Cr_{2}O_{7} + 6H_{2}SO_{4} \\rightarrow 2CrO_{2}Cl_{2} + 2KHSO_{4} + 3H_{2}O$ evolves red $CrO_{2}Cl_{2}$ vapours only for chloride. Bromide instead liberates brown $Br_{2}$ without red vapours.' },
          { label: 'Step 2', text: 'Pass vapours into $NaOH$ to get yellow $Na_{2}CrO_{4}$ as $CrO_{2}Cl_{2} + 4NaOH \\rightarrow Na_{2}CrO_{4} + 2NaCl + 2H_{2}O$, then acidify with acetic acid plus lead acetate to yellow $PbCrO_{4}$. This double lock is chloride specific.' },
          { label: 'Step 3', text: '```text\nAgCl: white, soluble in NH3, red vapours with dichromate mix.\nAgBr: pale yellow, sparingly soluble, brown Br2 instead.\nPbCrO4: yellow confirmatory downstream of red vapours.\n```\nSilver plus chromyl steps together close the proof.' }
        ],
        result: 'Red $CrO_{2}Cl_{2}$ vapours turning $NaOH$ yellow and then $PbCrO_{4}$ yellow confirm chloride.'
      }
    ],
    keyTakeaways: [
      'Dilute acid gives $CO_{2}$ milky, $SO_{2}$ pungent green and $H_{2}S$ blackening for carbonate, sulfite and sulfide.',
      'Brown ring $[Fe(H_{2}O)_{5}(NO)]^{2+}$ confirms nitrate after nitrite removal.',
      '$AgCl$ white soluble, $AgBr$ pale yellow and $AgI$ yellow separate halides, with $CrO_{2}Cl_{2}$ locking chloride.',
      '$BaSO_{4}$ insoluble in acid confirms sulfate, while $Ag_{3}PO_{4}$ plus molybdate confirm phosphate.'
    ],
    quiz: [
      // PYQ-pattern: dilute-acid gas triage
      {
        q: 'A salt with dilute $H_{2}SO_{4}$ gives an odourless gas turning limewater milky. What is indicated?',
        options: [`$S^{2-}$`, `$SO_{3}^{2-}$`, '$CO_{3}^{2-}$ as $CO_{2}$ evolution', `$NO_{2}^{-}$`],
        answer: 2,
        explanation: 'Step 1: List gases: $CO_{2}$ odourless, $SO_{2}$ pungent, $H_{2}S$ rotten egg. Step 2: Only $CO_{2}$ milks limewater without odour. Step 3: Hence carbonate via $CO_{3}^{2-} + 2H^{+} \\rightarrow CO_{2} + H_{2}O$.'
      },
      {
        q: 'What species forms the brown ring in nitrate testing?',
        options: [`$[Fe(H_{2}O)_{6}]^{3+}$`, '$[Fe(H_{2}O)_{5}(NO)]^{2+}$ at the acid interface', '$FeSO_{4}$ solid', '$NO_{2}$ gas alone'],
        answer: 1,
        explanation: 'Step 1: Reduce $NO_{3}^{-}$ to $NO$ with $Fe^{2+}$ in acid. Step 2: Trap $NO$ on residual $Fe^{2+}$. Step 3: The nitrosyl adduct $[Fe(H_{2}O)_{5}(NO)]^{2+}$ paints the junction brown.'
      },
      // PYQ-pattern: halide precipitation ladder
      {
        q: 'How do $AgCl$, $AgBr$ and $AgI$ separate with $NH_{3}$?',
        options: ['All dissolve equally', '$AgCl$ dissolves, $AgBr$ dissolves sparingly and $AgI$ stays insoluble', '$AgI$ dissolves while $AgCl$ stays out', 'All stay insoluble'],
        answer: 1,
        explanation: 'Step 1: Order solubility products $AgCl > AgBr > AgI$. Step 2: Ammonia complexes $Ag^{+}$ enough to pull chloride but not iodide. Step 3: Hence the stated solubility ladder separates the trio.'
      },
      {
        q: 'Which observation confirms sulfate over sulfite with $BaCl_{2}$?',
        options: ['White precipitate soluble in $HCl$ with $SO_{2}$ smell', 'White $BaSO_{4}$ insoluble in concentrated $HCl$', 'Black precipitate', 'Yellow solution'],
        answer: 1,
        explanation: 'Step 1: Both anions give white barium salts. Step 2: Add concentrated $HCl$: sulfite dissolves with gas. Step 3: Persistent white $BaSO_{4}$ therefore locks sulfate.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.4
  {
    sectionId: 'chem-ch14-s4',
    readingTime: 9,
    intro: 'Cation analysis stages precipitation by solubility product, with each group reagent dropping a small set while the rest stay in solution. Flame, borax bead and confirmatory precipitates then name the ion inside the group. This section runs Groups I through V plus zero-group ammonium with balanced locks.',
    objectives: [
      'Order Group I through V reagents and explain each precipitation by $K_{sp}$ control',
      'Write confirmatory equations for $Pb^{2+}$, $Cu^{2+}$, $Al^{3+}$, $Fe^{3+}$, $Zn^{2+}$ and $Ca^{2+}$',
      'Use flame plus borax-bead colours to shortcut $Na$, $K$, $Ca$, $Cu$ and $Co$ identification'
    ],
    concepts: [
      {
        term: 'Group separation ladder',
        kind: 'method',
        statement: 'The **group ladder** precipitates `Group I` $Pb^{2+}$, $Ag^{+}$ and $Hg_{2}^{2+}$ with dilute $HCl$ as chlorides, Group II with $H_{2}S$ in acid as sulfides, Group III with $NH_{4}Cl$ plus $NH_{4}OH$ as hydroxides, Group IV with $H_{2}S$ in base as sulfides, and Group V with $(NH_{4})_{2}CO_{3}$ as carbonates. Each reagent holds ion product above $K_{sp}$ only for its group because $S^{2-}$ and $OH^{-}$ levels are pH gated.',
        detail: 'Acid suppresses $S^{2-}$ to catch only very insoluble $CuS$ and $PbS$, while ammoniacal buffer raises $S^{2-}$ for $ZnS$ and $MnS$. Ammonium chloride damps $OH^{-}$ so only $Fe(OH)_{3}$ and $Al(OH)_{3}$ fall in Group III.'
      },
      {
        term: 'Group I and II locks',
        kind: 'theorem',
        statement: 'The **Group I split** washes `PbCl2` with hot water as $PbCl_{2}$ dissolves while $AgCl$ and $Hg_{2}Cl_{2}$ stay, then $AgCl$ dissolves in $NH_{3}$ as $[Ag(NH_{3})_{2}]^{+}$ and reprecipitates with acid. Group II copper confirms as deep blue $[Cu(NH_{3})_{4}]^{2+}$ via $Cu^{2+} + 4NH_{3} \\rightarrow [Cu(NH_{3})_{4}]^{2+}$, plus black $CuS$ and yellow $PbI_{2}$ as $Pb^{2+} + 2I^{-} \\rightarrow PbI_{2}$.',
        detail: 'Mercury(I) blackens with $NH_{3}$ through disproportionation to $Hg$ plus $HgNH_{2}Cl$. Cadmium parallels copper but gives yellow $CdS$ soluble in acid unlike $CuS$ resistance patterns.'
      },
      {
        term: 'Group III and IV locks',
        kind: 'law',
        statement: 'The **hydroxide-sulfide locks** confirm `Al3+` as $Al(OH)_{3}$ soluble in excess $NaOH$ as $[Al(OH)_{4}]^{-}$ plus blue lake with litmus, $Fe^{3+}$ as blood-red $[Fe(SCN)]^{2+}$ via $Fe^{3+} + SCN^{-} \\rightarrow [Fe(SCN)]^{2+}$ and Prussian blue with ferrocyanide, and $Zn^{2+}$ as white $ZnS$ plus green Rinmann mass $CoZnO_{2}$ on charcoal. Nickel and cobalt add dimethylglyoxime scarlet and nitrito yellow respectively.',
        detail: 'Chromium parallels aluminium with green $Cr(OH)_{3}$ soluble in excess base as chromite, later oxidized to yellow chromate. Manganese gives flesh $MnS$ that dissolves in acid with $H_{2}S$ release.'
      },
      {
        term: 'Group V and zero-group locks',
        kind: 'definition',
        statement: 'The **carbonate group** precipitates `CaCO3` as $Ca^{2+} + CO_{3}^{2-} \\rightarrow CaCO_{3}$ white, $SrCO_{3}$ and $BaCO_{3}$ similarly, then flame sorts brick red $Ca$, crimson $Sr$ and green $Ba$. Oxalate $CaC_{2}O_{4}$ white insoluble in acetic acid confirms calcium, while zero-group $NH_{4}^{+}$ evolves $NH_{3}$ with $NaOH$ as $NH_{4}^{+} + OH^{-} \\rightarrow NH_{3} + H_{2}O$ turning Nessler reagent brown.',
        detail: 'Magnesium stays in solution with ammonium salts present and confirms later as $MgNH_{4}PO_{4}$ white with phosphate plus ammonia. Potassium confirms as $K_{2}Na[Co(NO_{2})_{6}]$ yellow and sodium as uranyl acetate crystals.'
      },
      {
        term: 'Bead and flame shortcuts',
        kind: 'notation',
        statement: 'The **borax-bead palette** fuses `Na2B4O7` to glassy $B_{2}O_{3}$ that colours hot and cold: $Cu$ green-hot blue-cold in oxidizing flame and red opaque in reducing flame, $Co$ deep blue in both, $Ni$ brown-hot yellow-cold, $Fe$ yellow-hot colourless-cold and $Mn$ violet in oxidizing flame. Flame plus bead together shortcut groups before wet locks.',
        detail: 'Oxidizing and reducing cones must both be tried because copper and iron flip dramatically. Microcosmic salt $NaNH_{4}HPO_{4}$ beads repeat the palette with phosphate glass.'
      }
    ],
    figures: [
      {
        caption: 'Groups fall by $K_{sp}$ with dilute $HCl$, $H_2S$ in acid, $NH_4Cl + NH_4OH$, $H_2S$ in base and $(NH_4)_2CO_3$; borax beads then paint $Co$ blue and $Cu$ green-blue.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cation group separation and bead colours"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">group ladder I -&gt; V by selective precipitation</text><rect x="40" y="65" width="110" height="55" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="88" font-size="11" fill="currentColor" font-family="sans-serif">I: dil HCl</text><text x="55" y="106" font-size="11" fill="currentColor" font-family="sans-serif">Pb Ag Hg2</text><rect x="160" y="65" width="110" height="55" fill="none" stroke="currentColor" stroke-width="2"/><text x="175" y="88" font-size="11" fill="currentColor" font-family="sans-serif">II: H2S/acid</text><text x="175" y="106" font-size="11" fill="currentColor" font-family="sans-serif">Cu Cd sulf</text><rect x="280" y="65" width="130" height="55" fill="none" stroke="currentColor" stroke-width="2"/><text x="295" y="88" font-size="11" fill="currentColor" font-family="sans-serif">III: NH4Cl/OH</text><text x="295" y="106" font-size="11" fill="currentColor" font-family="sans-serif">Fe Al hydrox</text><rect x="420" y="65" width="110" height="55" fill="none" stroke="currentColor" stroke-width="2"/><text x="435" y="88" font-size="11" fill="currentColor" font-family="sans-serif">IV: H2S/base</text><text x="435" y="106" font-size="11" fill="currentColor" font-family="sans-serif">Zn Mn sulf</text><rect x="540" y="65" width="110" height="55" fill="none" stroke="currentColor" stroke-width="2"/><text x="555" y="88" font-size="11" fill="currentColor" font-family="sans-serif">V: carbonate</text><text x="555" y="106" font-size="11" fill="currentColor" font-family="sans-serif">Ca Sr Ba</text><line x1="150" y1="92" x2="160" y2="92" stroke="currentColor" stroke-width="2"/><line x1="270" y1="92" x2="280" y2="92" stroke="currentColor" stroke-width="2"/><line x1="410" y1="92" x2="420" y2="92" stroke="currentColor" stroke-width="2"/><line x1="530" y1="92" x2="540" y2="92" stroke="currentColor" stroke-width="2"/><rect x="40" y="140" width="640" height="120" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="55" y="165" font-size="12" fill="currentColor" font-family="sans-serif">PbCl2 hot-water soluble; AgCl in NH3 -&gt; [Ag(NH3)2]+; Fe3+ + SCN- blood red</text><text x="55" y="190" font-size="12" fill="currentColor" font-family="sans-serif">Al(OH)3 in excess NaOH -&gt; [Al(OH)4]-; CaC2O4 white; flame: Ca brick Sr crimson Ba green</text><text x="55" y="215" font-size="12" fill="currentColor" font-family="sans-serif">bead: Co deep blue both, Cu green-hot blue-cold oxidising, red opaque reducing</text><text x="55" y="240" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">zero group: Nessler brown for NH4+; Nessler + NaOH test</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Staging Group II versus Group IV sulfides',
        problem: 'A filtrate after Group I may hold $Cu^{2+}$ and $Zn^{2+}$. Show how pH-gated $H_{2}S$ drops copper first and zinc later.',
        steps: [
          { label: 'Step 1', text: '```text\nAcidic H2S: [S2-] very low, only CuS and PbS exceed Ksp.\nAmmoniacal H2S: [S2-] high, ZnS, MnS and NiS exceed Ksp.\nReagent order: HCl -> H2S acid -> NH4Cl/NH4OH -> H2S base.\n```\nSulfide ion level follows $H_{2}S \\rightleftharpoons 2H^{+} + S^{2-}$, suppressed by acid and boosted by base.' },
          { label: 'Step 2', text: 'Pass $H_{2}S$ in dilute $HCl$: black $CuS$ falls as $Cu^{2+} + H_{2}S \\rightarrow CuS + 2H^{+}$ while $Zn^{2+}$ stays because its ion product trails $K_{sp}$. Filter copper before raising pH.' },
          { label: 'Step 3', text: 'Add $NH_{4}Cl$ plus $NH_{4}OH$ then $H_{2}S$: white to grey $ZnS$ falls as $Zn^{2+} + S^{2-} \\rightarrow ZnS$. Confirm copper as $[Cu(NH_{3})_{4}]^{2+}$ blue and zinc as Rinmann green after the split.' }
        ],
        result: 'Acidic sulfide isolates $CuS$ while ammoniacal sulfide later isolates $ZnS$, staged by $S^{2-}$ control.'
      },
      {
        title: 'Iron versus aluminium in Group III',
        problem: 'A Group III precipitate may hold $Fe(OH)_{3}$ brown and $Al(OH)_{3}$ white. Separate and confirm each with equations.',
        steps: [
          { label: 'Step 1', text: 'Treat with excess $NaOH$: $Al(OH)_{3} + OH^{-} \\rightarrow [Al(OH)_{4}]^{-}$ dissolves while $Fe(OH)_{3}$ stays solid. Filter to split aluminium filtrate from iron residue.' },
          { label: 'Step 2', text: 'Confirm iron in residue with thiocyanate as $Fe^{3+} + SCN^{-} \\rightarrow [Fe(SCN)]^{2+}$ blood red, plus Prussian blue $4Fe^{3+} + 3[Fe(CN)_{6}]^{4-} \\rightarrow Fe_{4}[Fe(CN)_{6}]_{3}$ as second lock. Confirm aluminium in filtrate by acidifying to $Al(OH)_{3}$ plus blue litmus lake.' },
          { label: 'Step 3', text: '```text\nFe residue: brown, insoluble in excess NaOH, red with SCN-.\nAl filtrate: clear aluminate, white return on NH4Cl boil.\n```\nExcess-base solubility is the divider because only aluminium is amphoteric.' }
        ],
        result: 'Excess $NaOH$ dissolves $Al(OH)_{3}$ to aluminate while $Fe(OH)_{3}$ stays for thiocyanate and Prussian-blue locks.'
      }
    ],
    keyTakeaways: [
      'Group reagents run $HCl$, acidic $H_{2}S$, $NH_{4}Cl$ with $NH_{4}OH$, basic $H_{2}S$ and $(NH_{4})_{2}CO_{3}$ in order.',
      '$PbI_{2}$ yellow, $[Cu(NH_{3})_{4}]^{2+}$ blue and $AgCl$ ammonia-soluble lock Groups I and II.',
      '$[Fe(SCN)]^{2+}$ red plus Prussian blue lock iron, while aluminate solubility locks aluminium.',
      'Flames sort $Ca$, $Sr$ and $Ba$, while borax beads sort $Cu$, $Co$, $Ni$, $Fe$ and $Mn$.'
    ],
    quiz: [
      // PYQ-pattern: group reagent ordering drill
      {
        q: 'Which reagent sequence follows the cation group order?',
        options: [`$(NH_{4})_{2}CO_{3}$ then $HCl$ then $H_{2}S$`, '$H_{2}S$ alone for all groups', '$NaOH$ alone for all groups', '$HCl$ for Group I, acidic $H_{2}S$ for Group II, $NH_{4}Cl$ with $NH_{4}OH$ for Group III, basic $H_{2}S$ for Group IV, $(NH_{4})_{2}CO_{3}$ for Group V'],
        answer: 3,
        explanation: 'Step 1: Recall chlorides fall first with dilute acid. Step 2: Stage sulfide by pH for Groups II then IV around hydroxide Group III. Step 3: Carbonates close Group V, matching the fourth sequence.'
      },
      {
        q: 'How is $AgCl$ separated from $PbCl_{2}$ in Group I?',
        options: ['Hot water dissolves $PbCl_{2}$ while $AgCl$ stays, then $NH_{3}$ dissolves $AgCl$ as $[Ag(NH_{3})_{2}]^{+}$', 'Both dissolve in cold water', 'Both dissolve in ammonia', 'Neither dissolves in anything'],
        answer: 0,
        explanation: 'Step 1: Test hot-water solubility of lead chloride. Step 2: Silver chloride resists hot water but complexes with ammonia. Step 3: The two-step solubility split separates the pair.'
      },
      {
        q: 'Which pair confirms $Fe^{3+}$?',
        options: ['White $AgCl$ and yellow $PbI_{2}$', 'Blue $[Cu(NH_{3})_{4}]^{2+}$', 'Blood-red $[Fe(SCN)]^{2+}$ with $SCN^{-}$ and Prussian blue with ferrocyanide', 'Yellow $PbCrO_{4}$'],
        answer: 2,
        explanation: 'Step 1: Add thiocyanate for the charge-transfer red complex. Step 2: Add ferrocyanide for $Fe_{4}[Fe(CN)_{6}]_{3}$. Step 3: Joint appearance locks iron(III) uniquely.'
      },
      // PYQ-pattern: bead colour shortcut check
      {
        q: 'Which borax-bead result is correct in oxidizing flame?',
        options: ['$Co$ red and $Cu$ yellow', '$Co$ deep blue in hot and cold with $Cu$ green-hot blue-cold', '$Fe$ blue and $Mn$ green', 'All beads stay colourless'],
        answer: 1,
        explanation: 'Step 1: Recall cobalt borate stays deep blue. Step 2: Recall copper shifts green-hot to blue-cold. Step 3: Only the second option states both correctly.'
      }
    ]
  }
]
