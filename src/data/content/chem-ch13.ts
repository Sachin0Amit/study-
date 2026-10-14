import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 13: p-Block, d and f Blocks with Metallurgy
// Sections 13.1 - 13.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ and $$...$$ pipeline.
// ============================================================================

export const chemCh13Content: SectionContent[] = [
  // ---------------------------------------------------------------- 13.1
  {
    sectionId: 'chem-ch13-s1',
    readingTime: 8,
    intro: 'Groups 13 and 14 open the $p$ block with a shift from nonmetal boron and carbon toward metals aluminium, tin and lead. Small size, high charge and empty orbitals make the lighter members acidic, covalent and often electron deficient. This section tracks oxides, chlorides and hydrides down both groups with structural reasons.',
    objectives: [
      'Explain boron anomaly, aluminium amphoterism and thallium plus lead inert-pair stability',
      'Compare oxide acidity and chloride hydrolysis from $BCl_{3}$ through $PbCl_{4}$',
      'Contrast carbon catenation and multiple bonding with silicon polymeric oxides'
    ],
    concepts: [
      {
        term: 'Boron anomaly and aluminium contrast',
        kind: 'definition',
        statement: 'The **boron anomaly** packs high charge into tiny radius, so `B2O3` as $B_{2}O_{3}$ is acidic, $BCl_{3}$ is a strong Lewis acid with vacant $2p$, and $[BH_{4}]^{-}$ bridges through three-centre bonds. Aluminium below is larger and amphoteric: $Al_{2}O_{3}$ reacts with both acid and base, and $AlCl_{3}$ dimerizes to $Al_{2}Cl_{6}$ to complete octets.',
        detail: 'Maximum covalence caps at four for boron from absent $d$ orbitals, while aluminium reaches six as $[AlF_{6}]^{3-}$. Boric acid $H_{3}BO_{3}$ acts by hydroxyl uptake rather than proton donation.'
      },
      {
        term: 'Inert-pair descent',
        kind: 'law',
        statement: 'The **inert-pair effect** stabilizes lower states downward as `ns2` resists promotion, so $Tl^{+}$ outweighs $Tl^{3+}$ and $Pb^{2+}$ outweighs $Pb^{4+}$ in stability. Thus $PbCl_{4}$ oxidizes readily toward $PbCl_{2}$ plus $Cl_{2}$, while $CCl_{4}$ and $SiCl_{4}$ hold the tetravalent state firmly.',
        detail: 'Poor $s$ participation follows from growing $s$-$p$ gap plus weak shielding by filled $d$ and $f$ shells. Oxidizing power of $M(IV)$ therefore peaks near lead, and $PbO_{2}$ serves as a strong oxidant.'
      },
      {
        term: 'Oxide acidity walk',
        kind: 'theorem',
        statement: 'The **oxide acidity ladder** runs acidic $B_{2}O_{3}$, $CO_{2}$ and $SiO_{2}$ through amphoteric $Al_{2}O_{3}$ toward basic $Tl_{2}O$ and $PbO$, tracked by `O2-` polarization as $O^{2-}$ distorts more with small highly charged cations. Giant $SiO_{2}$ stays acidic but infusible from its three-dimensional $Si-O$ network, while molecular $CO_{2}$ sublimes from discrete $O=C=O$ units.',
        detail: 'Aluminium oxide dissolves in $NaOH$ as $[Al(OH)_{4}]^{-}$ and in acid as $[Al(H_{2}O)_{6}]^{3+}$, the classic amphoteric test. Lead monoxide shows borderline behaviour with both lead(II) salts and plumbite formation.'
      },
      {
        term: 'Chloride structure and hydrolysis',
        kind: 'method',
        statement: 'The **chloride hydrolysis test** separates electron-deficient and coordinatively open halides, where `hydrolysis` of $SiCl_{4}$ runs as $SiCl_{4} + 4H_{2}O \\rightarrow Si(OH)_{4} + 4HCl$ through $d$-orbital expansion. Carbon tetrachloride $CCl_{4}$ resists because carbon lacks low vacant orbitals and crowds four chlorides tightly, while $PbCl_{4}$ hydrolyses plus oxidizes.',
        detail: '$BCl_{3}$ hydrolyses violently to $H_{3}BO_{3}$ plus $HCl$, and $AlCl_{3}$ fumes to polymeric hydroxides. Ionic $NaCl$-type lattices of heavier $TlCl$ simply dissolve without reaction.'
      },
      {
        term: 'Carbon versus silicon bonding',
        kind: 'insight',
        statement: 'The **catenation gap** favours `C-C` chains because $C-C$ at $348$ kJ per mol nearly matches $Si-O$ strength patterns while $Si-Si$ at $226$ kJ per mol loses to $Si-O$ at $464$ kJ per mol. Hence carbon builds alkanes, alkenes with $p$-$p$ pi bonds and graphite pi sheets, while silicon builds silicates, silicones and $SiO_{2}$ networks with $d$-$p$ or ionic reinforcement.',
        detail: 'Multiple $p$-$p$ bonding collapses downward as orbital size mismatch grows, so $C=O$ is monomeric gas while $Si=O$ polymerizes. Diamond hardness versus graphite conduction both trace to carbon network choices.'
      }
    ],
    figures: [
      {
        caption: '$B_2O_3$ is acidic and $BCl_3$ a vacant-$2p$ Lewis acid while $Al_2O_3$ is amphoteric; heavier $Tl^+$ and $Pb^{2+}$ win by the inert $ns^2$ pair and $C$ catenates best.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Group 13 14 oxide walk and inert pair"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">oxide acidity: acidic -&gt; amphoteric -&gt; basic down group</text><line x1="40" y1="90" x2="680" y2="90" stroke="currentColor" stroke-width="2"/><polygon points="680,90 672,84 672,96" fill="currentColor" stroke="none"/><text x="50" y="115" font-size="12" fill="currentColor" font-family="sans-serif">B2O3 CO2 SiO2 acidic | Al2O3 ampho | Tl2O PbO basic</text><rect x="40" y="140" width="320" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="165" font-size="13" fill="currentColor" font-family="sans-serif">BCl3 planar, vacant 2p:</text><text x="55" y="187" font-size="12" fill="currentColor" font-family="sans-serif">strong Lewis acid</text><text x="55" y="209" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">SiCl4 hydrolyses, CCl4 not</text><rect x="400" y="140" width="280" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="415" y="165" font-size="13" fill="currentColor" font-family="sans-serif">inert pair: Tl+ &gt; Tl3+</text><text x="415" y="187" font-size="13" fill="currentColor" font-family="sans-serif">Pb2+ &gt; Pb4+</text><text x="415" y="209" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">ns2 resists promotion</text><text x="40" y="260" font-size="13" fill="currentColor" font-family="sans-serif">C-C 348 holds chains; Si-Si 226 loses to Si-O 464, so silica nets win</text><text x="40" y="285" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">Al larger, ionic, forms [AlF6]3-; B max 4-coordinate</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Boron chloride versus aluminium chloride',
        problem: 'Both $BCl_{3}$ and $AlCl_{3}$ are Group 13 trihalides, yet one is monomeric gas and the other is a subliming dimer solid. Reconcile structure and acidity.',
        steps: [
          { label: 'Step 1', text: '```text\n$BCl_{3}$: $B$ with $6$ valence electrons, vacant $2p$, planar $AX_{3}$.\n$AlCl_{3}$: $Al$ larger, dimerizes to $Al_{2}Cl_{6}$ with two bridging $Cl$.\nBoth complete octets only after adduct or dimer step.\n```\nBoron stays monomeric because tiny $B$ crowds bridges poorly, while $Al$ bridges comfortably to reach $CN = 4$ per centre.' },
          { label: 'Step 2', text: 'Compare Lewis acidity as $BCl_{3} + NH_{3} \\rightarrow H_{3}N \\rightarrow BCl_{3}$ adduct formation with large negative enthalpy, versus $Al_{2}Cl_{6}$ first dissociating then binding. Boron acidity exceeds aluminium toward hard donors from higher charge density.' },
          { label: 'Step 3', text: 'Hydrolysis of each gives $H_{3}BO_{3} + 3HCl$ and $Al(OH)_{3} + 3HCl$ pathways, with $BCl_{3}$ fuming faster from direct vacant-orbital attack by $H_{2}O$.' }
        ],
        result: '$BCl_{3}$ is a monomeric planar acid while $AlCl_{3}$ is an $Al_{2}Cl_{6}$ dimer, both hydrolysing to boric and aluminium hydroxides.'
      },
      {
        title: 'Carbon tetrachloride versus silicon tetrachloride',
        problem: 'Predict hydrolysis behaviour for $CCl_{4}$ and $SiCl_{4}$ with water and justify from orbitals and size.',
        steps: [
          { label: 'Step 1', text: 'Write silicon hydrolysis as $SiCl_{4} + 4H_{2}O \\rightarrow Si(OH)_{4} + 4HCl$ followed by $Si(OH)_{4} \\rightarrow SiO_{2} + 2H_{2}O$. Water coordinates to open $Si$ through low vacant $3d$ participation, then displaces $Cl^{-}$.' },
          { label: 'Step 2', text: 'Carbon in $CCl_{4}$ blocks the same path: no low vacant orbitals, short $C-Cl$ bonds near $177$ pm crowd the centre, and the transition state would exceed octet capacity. Hence $CCl_{4}$ layers with water without reaction.' },
          { label: 'Step 3', text: '```text\n$CCl_{4} + H_{2}O$: no reaction, two layers, useful inert solvent.\n$SiCl_{4} + H_{2}O$: dense fumes of $HCl$, silica gel deposit.\n```\nThe test doubles as a qualitative distinction between the two liquids.' }
        ],
        result: '$SiCl_{4}$ hydrolyses vigorously while $CCl_{4}$ is inert, marking coordinative openness versus octet lock.'
      }
    ],
    keyTakeaways: [
      'Boron is a monomeric Lewis acid capped at four coordination, while $AlCl_{3}$ dimerizes to $Al_{2}Cl_{6}$.',
      'Inert-pair order makes $Tl^{+}$ and $Pb^{2+}$ dominate over $Tl^{3+}$ and $Pb^{4+}$.',
      'Oxides run acidic $B_{2}O_{3}$ and $CO_{2}$ through amphoteric $Al_{2}O_{3}$ toward basic $Tl_{2}O$.',
      '$SiCl_{4}$ hydrolyses as $SiCl_{4} + 4H_{2}O \\rightarrow Si(OH)_{4} + 4HCl$ while $CCl_{4}$ resists.'
    ],
    quiz: [
      // PYQ-pattern: chloride hydrolysis distinction
      {
        q: 'Which statement about $CCl_{4}$ and $SiCl_{4}$ is correct?',
        options: ['Both hydrolyse readily', '$SiCl_{4}$ hydrolyses to silica plus $HCl$ while $CCl_{4}$ is inert from octet lock and crowding', '$CCl_{4}$ hydrolyses while $SiCl_{4}$ is inert', 'Both are ionic solids'],
        answer: 1,
        explanation: 'Step 1: Test coordinative openness of $Si$ versus $C$. Step 2: $Si$ expands through vacant orbitals while $C$ cannot. Step 3: Hence only $SiCl_{4}$ follows $SiCl_{4} + 4H_{2}O \\rightarrow Si(OH)_{4} + 4HCl$.'
      },
      {
        q: 'Why does $PbCl_{4}$ act as a strong oxidant?',
        options: ['Lead has a small radius', 'Inert-pair stabilization of $Pb^{2+}$ drives $Pb(IV)$ toward $Pb(II)$ plus $Cl_{2}$', 'Chloride is a strong reductant toward all metals', '$PbCl_{4}$ is ionic'],
        answer: 1,
        explanation: 'Step 1: Compare $Pb(IV)$ against $Pb(II)$ stability down Group 14. Step 2: The $6s^{2}$ pair resists promotion. Step 3: Reduction to $PbCl_{2}$ therefore releases $Cl_{2}$ readily.'
      },
      {
        q: 'Which oxide pair is amphoteric?',
        options: [`$Al_{2}O_{3}$ and $BeO$-type borderline oxides such as $PbO$`, `$B_{2}O_{3}$ and $CO_{2}$`, `$Tl_{2}O$ and $Na_{2}O$`, `$SiO_{2}$ and $CO_{2}$`],
        answer: 0,
        explanation: 'Step 1: Track acidity falling down and to the left. Step 2: Mid-table $Al_{2}O_{3}$ reacts with both acid and base. Step 3: Strongly acidic and strongly basic ends do not, leaving the middle pair.'
      },
      // PYQ-pattern: dimer versus monomer logic
      {
        q: 'Why is $AlCl_{3}$ dimeric as $Al_{2}Cl_{6}$ while $BCl_{3}$ is monomeric?',
        options: ['Boron is larger than aluminium', 'Aluminium has no vacant orbitals', 'Boron forms ionic lattices', 'Aluminium bridges through chloride to reach tetracoordination comfortably, while small boron crowds bridges and stays trigonal planar'],
        answer: 3,
        explanation: 'Step 1: Count six valence electrons at each $MCl_{3}$ unit. Step 2: Bridging raises each $Al$ to octet without strain. Step 3: Small $B$ pays too much crowding for bridges, so it stays $AX_{3}$ monomer.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.2
  {
    sectionId: 'chem-ch13-s2',
    readingTime: 9,
    intro: 'Groups 15 through 18 run from reactive nitrogen and phosphorus through chalcogens and halogens to inert noble gases, with oxoacids and interhalogens marking the middle. Bond angles, hydride stability and acid strength all walk monotonically once $s$-$p$ mixing and size are tracked. This section maps hydrides, oxides, oxoacids and noble-gas fluorides for rapid recall.',
    objectives: [
      'Order hydride angle, basicity and stability from $NH_{3}$ toward $BiH_{3}$ and across $H_{2}O$ to $H_{2}Te$',
      'Rank oxoacid strength for phosphorus, sulfur and chlorine series from structure and oxidation state',
      'Write preparation and hydrolysis for $XeF_{2}$, $XeF_{4}$, $XeF_{6}$ and $XeO_{3}$'
    ],
    concepts: [
      {
        term: 'Group 15 hydrides',
        kind: 'definition',
        statement: 'The **pnictogen hydrides** show angle `H-M-H` falling as $NH_{3}$ near $107^{\\circ}$ contracts toward $PH_{3}$ near $93^{\\circ}$ and $AsH_{3}$ lower, because bonding uses purer $p$ orbitals as $s$-$p$ mixing fades. Basicity falls in the same walk as the lone pair gains $s$ character and donor power drops from $NH_{3}$ toward $BiH_{3}$, while thermal stability falls with weaker $M-H$ overlap.',
        detail: 'Ammonia liquefies through hydrogen bonding while phosphine does not, and $NH_{3}$ forms $[Cu(NH_{3})_{4}]^{2+}$ readily whereas $PH_{3}$ binds softly. Redox flips too: $NH_{3}$ is a base while $BiH_{3}$ is a strong reductant.'
      },
      {
        term: 'Nitrogen oxides and fixationTemper',
        kind: 'law',
        statement: 'The **nitrogen oxide ladder** runs `N2O` as $N_{2}O$ neutral through $NO$ neutral, $N_{2}O_{3}$ anhydride of $HNO_{2}$, $NO_{2}$ acidic brown gas and $N_{2}O_{5}$ anhydride of $HNO_{3}$ as $N_{2}O_{5} + H_{2}O \\rightarrow 2HNO_{3}$. Ostwald chemistry oxidizes $NH_{3}$ to $NO$ over platinum near $1200$ K, then to $NO_{2}$ and $HNO_{3}$ in water.',
        detail: 'Dinitrogen $N_{2}$ resists from its $945$ kJ per mol triple bond, so fixation needs lightning, Haber $N_{2} + 3H_{2} \\rightarrow 2NH_{3}$ or biological nitrogenase. Nitrous acid $HNO_{2}$ disproportionates while nitric acid $HNO_{3}$ stays strongly oxidizing.'
      },
      {
        term: 'Oxoacid strength rules',
        kind: 'theorem',
        statement: 'The **oxoacid rule** says strength rises with central oxidation state and falls with size, coded as `n_oxo` where $HClO_{4}$ with $Cl(VII)$ exceeds $HClO_{3}$ over $HClO_{2}$ over $HClO$, and $H_{2}SO_{4}$ exceeds $H_{2}SO_{3}$. For equal state, smaller central atoms such as $Cl$ beat larger ones in the same oxidation tier after resonance and charge-density corrections.',
        detail: 'Phosphorus series $H_{3}PO_{4}$, $H_{3}PO_{3}$ and $H_{3}PO_{2}$ show basicity two, two and one from $P-H$ versus $P-OH$ counts, since only $O-H$ protons ionize. Sulfuric acid $H_{2}SO_{4}$ dehydrates carbohydrates while sulfurous $H_{2}SO_{3}$ acts as reductant.'
      },
      {
        term: 'Halogens and interhalogens',
        kind: 'method',
        statement: 'The **interhalogen map** builds `XXn` types $ClF$, $ClF_{3}$, $IF_{5}$ and $IF_{7}$ as larger central halogens bind more small fluorines, with shapes linear, T-shaped, square pyramidal and pentagonal bipyramidal. Oxidizing power falls as $F_{2} > Cl_{2} > Br_{2} > I_{2}$, while $HI$ is the strongest hydrohalic acid from weakest $H-X$ bonding.',
        detail: 'Chlorine water disproportionates as $Cl_{2} + H_{2}O \\rightarrow HCl + HOCl$, and bleaching powder $CaOCl_{2}$ releases the same pair on acidification. Fluorine oxidizes water to $O_{2}$ plus $HF$ from sheer potential.'
      },
      {
        term: 'Noble-gas fluorides and oxides',
        kind: 'notation',
        statement: 'The **xenon fluoride set** forms `XeFn` as $Xe + F_{2} \\rightarrow XeF_{2}$ at two to one ratio, $XeF_{4}$ at five to one with heat, and $XeF_{6}$ at twenty to one with pressure, all hydrolysing toward $XeO_{3}$ through $6XeF_{4} + 12H_{2}O \\rightarrow 4Xe + 2XeO_{3} + 24HF + 3O_{2}$. Shapes are linear $XeF_{2}$, square planar $XeF_{4}$ and distorted octahedral $XeF_{6}$ with a stere active lone pair.',
        detail: '$XeO_{3}$ is an explosive pyramidal trioxide and perxenate $XeO_{6}^{4-}$ holds $Xe(VIII)$. Krypton difluoride $KrF_{2}$ exists but decomposes readily, marking xenon as the practical noble-gas reagent.'
      }
    ],
    figures: [
      {
        caption: '$H-M-H$ falls from $NH_3$ near $107^\\circ$ toward $PH_3$ near $93^\\circ$ as $s$-$p$ mixing fades; oxoacids strengthen with oxidation state and $Xe$ builds $XeF_2$, $XeF_4$ and $XeF_6$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hydride angles oxoacids and xenon fluorides"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">hydride angle contracts; oxoacid: more oxo = stronger</text><circle cx="120" cy="130" r="10" fill="currentColor" stroke="none"/><line x1="120" y1="130" x2="80" y2="170" stroke="currentColor" stroke-width="2"/><line x1="120" y1="130" x2="160" y2="170" stroke="currentColor" stroke-width="2"/><line x1="120" y1="130" x2="120" y2="90" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><text x="70" y="195" font-size="12" fill="currentColor" font-family="sans-serif">NH3 107 deg</text><circle cx="320" cy="140" r="10" fill="currentColor" stroke="none"/><line x1="320" y1="140" x2="290" y2="178" stroke="currentColor" stroke-width="2"/><line x1="320" y1="140" x2="350" y2="178" stroke="currentColor" stroke-width="2"/><text x="280" y="200" font-size="12" fill="currentColor" font-family="sans-serif">PH3 93 deg, purer p</text><rect x="440" y="80" width="240" height="120" fill="none" stroke="currentColor" stroke-width="2"/><text x="455" y="105" font-size="13" fill="currentColor" font-family="sans-serif">HClO4 &gt; HClO3 &gt;</text><text x="455" y="127" font-size="13" fill="currentColor" font-family="sans-serif">HClO2 &gt; HClO</text><text x="455" y="149" font-size="13" fill="currentColor" font-family="sans-serif">H2SO4 &gt; H2SO3</text><text x="455" y="171" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">N2O5 acid of HNO3</text><text x="40" y="230" font-size="12" fill="currentColor" font-family="sans-serif">interhalogens: ClF linear, ClF3 T, IF5 square-pyramid, IF7 pent-bipyramid</text><text x="40" y="255" font-size="12" fill="currentColor" font-family="sans-serif">Xe + F2 ratios: 2:1 XeF2, 5:1 XeF4, 20:1 XeF6 -&gt; XeO3 on hydrolysis</text><text x="40" y="285" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">NO brown gas, N2O neutral; fixation via Ostwald to HNO3</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Hydride angle and basicity walk',
        problem: 'Order $NH_{3}$, $PH_{3}$, $AsH_{3}$ by bond angle and base strength, and justify both walks.',
        steps: [
          { label: 'Step 1', text: '```text\nAngles: $NH_{3}$ ~$107$ deg > $PH_{3}$ ~$93$ deg > $AsH_{3}$ ~$91$ deg.\nBase strength: $NH_{3}$ >> $PH_{3}$ > $AsH_{3}$.\nStability: $NH_{3}$ >> $PH_{3}$ > $AsH_{3}$ > $SbH_{3}$ > $BiH_{3}$.\n```\nHeavier hydrides use nearly pure $p$ orbitals for $M-H$ links, parking the lone pair in low-energy $s$ character.' },
          { label: 'Step 2', text: 'Pure $p$ overlap points near ninety degrees, so $PH_{3}$ and $AsH_{3}$ close toward $90^{\\circ}$ while $NH_{3}$ with active $s$-$p$ mixing opens toward tetrahedral. The $s$-rich lone pair on heavier members donates poorly, dropping $K_{b}$ steeply.' },
          { label: 'Step 3', text: 'Stability tracks $M-H$ bond energy: $N-H$ near $389$ kJ per mol dwarfs $Bi-H$ near $280$ kJ per mol, so bismuthine decomposes near room temperature while ammonia is robust.' }
        ],
        result: 'Angles, basicity and stability all fall from $NH_{3}$ toward heavier hydrides as $s$-$p$ mixing fades.'
      },
      {
        title: 'Oxoacid strength ranking',
        problem: 'Rank $HClO$, $HClO_{2}$, $HClO_{3}$, $HClO_{4}$ by acid strength and state the structural reason.',
        steps: [
          { label: 'Step 1', text: 'Assign chlorine states as $+1$, $+3$, $+5$ and $+7$ across the series, each adding one terminal $Cl=O$ unit that withdraws density from $O-H$. More oxo groups stabilize the anion $ClO_{n}^{-}$ through resonance over more oxygens.' },
          { label: 'Step 2', text: 'Order strength as $HClO < HClO_{2} < HClO_{3} < HClO_{4}$, with $pK_{a}$ falling from near $7.5$ toward $minus 10$ in taught tables. The same ladder gives $H_{2}SO_{4} > H_{2}SO_{3}$ and $HNO_{3} > HNO_{2}$.' },
          { label: 'Step 3', text: '```text\n$HClO$: $Cl(+1)$, one $O$, weakest, disproportionates readily.\n$HClO_{4}$: $Cl(+7)$, four $O$, strongest, stable tetrahedral anion.\n```\nOnly $O-H$ protons count, so oxo count plus oxidation state together predict the walk.' }
        ],
        result: 'Strength rises as $HClO < HClO_{2} < HClO_{3} < HClO_{4}$ with oxidation state and resonance delocalization.'
      }
    ],
    keyTakeaways: [
      'Hydride angles and basicity fall from $NH_{3}$ toward $BiH_{3}$ as bonding turns pure $p$ in character.',
      'Nitrogen oxides run $N_{2}O$ and $NO$ neutral through $NO_{2}$ and $N_{2}O_{5}$ acidic anhydrides.',
      'Oxoacid strength climbs with oxidation state as $HClO < HClO_{2} < HClO_{3} < HClO_{4}$.',
      'Xenon gives $XeF_{2}$ linear, $XeF_{4}$ square planar and $XeF_{6}$ distorted octahedral, all hydrolysing toward $XeO_{3}$.'
    ],
    quiz: [
      // PYQ-pattern: hydride trend drill
      {
        q: 'Which hydride order is correct for bond angle and basicity?',
        options: ['$PH_{3} > NH_{3}$ in both angle and basicity', '$NH_{3} > PH_{3} > AsH_{3}$ in both angle and basicity', '$AsH_{3} > PH_{3} > NH_{3}$ in both', 'Angles equal while basicity rises downward'],
        answer: 1,
        explanation: 'Step 1: Track $s$-$p$ mixing fading downward. Step 2: $NH_{3}$ keeps hybrid angles near $107^{\\circ}$ while heavier members approach $90^{\\circ}$. Step 3: The $s$-rich lone pair below donates poorly, so basicity falls together.'
      },
      {
        q: 'Which oxoacid is strongest?',
        options: [`$HClO$`, `$HClO_{2}$`, `$HClO_{3}$`, `$HClO_{4}$`],
        answer: 3,
        explanation: 'Step 1: Read chlorine states $+1$ through $+7$. Step 2: Higher state plus more $Cl=O$ units stabilize $ClO_{n}^{-}$. Step 3: Hence $HClO_{4}$ with $Cl(VII)$ is strongest.'
      },
      {
        q: 'What are the shapes of $XeF_{2}$ and $XeF_{4}$?',
        options: ['Bent and tetrahedral', 'Linear and square planar', 'Trigonal planar and octahedral', 'Pyramidal and linear'],
        answer: 1,
        explanation: 'Step 1: Count three lone pairs on $Xe$ in $XeF_{2}$ for $SN = 5$ linear. Step 2: Count two lone pairs in $XeF_{4}$ for $SN = 6$ square planar. Step 3: Lone-pair placement trans in each case gives the stated pair.'
      },
      // PYQ-pattern: interhalogen shape check
      {
        q: 'What is the shape of $ClF_{3}$?',
        options: ['Trigonal planar', 'T-shaped $AX_{3}E_{2}$', 'Linear', 'Tetrahedral'],
        answer: 1,
        explanation: 'Step 1: Count three bonds plus two lone pairs for $SN = 5$. Step 2: Lone pairs take equatorial slots of the bipyramid. Step 3: The three fluorines then trace a T, giving $AX_{3}E_{2}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.3
  {
    sectionId: 'chem-ch13-s3',
    readingTime: 8,
    intro: 'The $d$ block introduces variable oxidation states, colour and catalysis, while the $f$ block adds nearly identical lanthanoids plus radioactive actinoids. Size, ionization and $d$ occupancy together decide which state dominates for each metal. This section condenses electronic patterns, redox giants and lanthanoid contraction into test-ready rules.',
    objectives: [
      'Write $d$-block configurations with chromium and copper exceptions and list stable states',
      'Account for colour, paramagnetism and oxidant power of permanganate and dichromate',
      'State lanthanoid contraction, its causes and its effects on $Zr$ with $Hf$ plus separations'
    ],
    concepts: [
      {
        term: 'Transition configurations',
        kind: 'definition',
        statement: 'The ** Aufbau exceptions** place `Cr` as $[Ar]3d^{5}4s^{1}$ and $Cu$ as $[Ar]3d^{10}4s^{1}$ for half and full $d$ stability, with $4s$ emptying first on ionization so $Fe^{2+}$ is $[Ar]3d^{6}$. Variable states then span $Sc(III)$ only through $Mn(VII)$ as $+2$ dominates early plus $+3$ mid-table and high states peak near manganese.',
        detail: 'Second and third rows favour higher states from larger size and stronger $M-O$ pi bonding, so $Ru(VIII)$ and $Os(VIII)$ exist while $Fe(VIII)$ does not. Zinc closes at $d^{10}$ and shows only $+2$.'
      },
      {
        term: 'Colour and magnetism',
        kind: 'law',
        statement: 'The **colour rule** links visible bands to incomplete `d` shells, so $Sc^{3+}$ with $d^{0}$ and $Zn^{2+}$ with $d^{10}$ are colourless while $Ti^{3+}$ violet, $V^{3+}$ green, $Mn^{2+}$ pale pink and $Cu^{2+}$ blue carry $d$-$d$ hues. Unpaired count sets $\\mu = \\sqrt{n(n+2)}$ BM, giving $Mn^{2+}$ $d^{5}$ near $5.92$ BM at the maximum.',
        detail: 'Charge-transfer maintains colour even without $d$-$d$ gaps, as in yellow $CrO_{4}^{2-}$ and purple $MnO_{4}^{-}$ where ligand-to-metal bands dominate. Hydration hue therefore reports $d$ count plus geometry.'
      },
      {
        term: 'Permanganate versus dichromate',
        kind: 'theorem',
        statement: 'The **oxoanion redox pair** contrasts `MnO4-` as $MnO_{4}^{-}$ with $Mn(VII)$ $d^{0}$ intensely purple and strongly oxidizing in acid through $MnO_{4}^{-} + 8H^{+} + 5e^{-} \\rightarrow Mn^{2+} + 4H_{2}O$, against $Cr_{2}O_{7}^{2-}$ with $Cr(VI)$ orange converting to yellow $CrO_{4}^{2-}$ in base as $Cr_{2}O_{7}^{2-} + 2OH^{-} \\rightarrow 2CrO_{4}^{2-} + H_{2}O$. Both titrate $Fe^{2+}$ and oxalate without external indicator for permanganate.',
        detail: 'Permanganate stains and oxidizes $C=C$, alcohols and $SO_{2}$, with brown $MnO_{2}$ in neutral medium and green $MnO_{4}^{2-}$ in strong base. Dichromate stays orange in acid and serves primary-standard duty from stable $K_{2}Cr_{2}O_{7}$ crystals.'
      },
      {
        term: 'Lanthanoid contraction',
        kind: 'law',
        statement: 'The **lanthanoid contraction** shrinks radius steadily from `La` $La$ toward $Lu$ as $4f$ electrons shield poorly and $Z$ rises by fourteen protons across the row. Total contraction near $15$ pm makes $Zr$ and $Hf$ nearly identical in size, so the pair co-occurs and separates only by ion-exchange or solvent routes.',
        detail: 'Consequences include rising density, falling basicity of $Ln(OH)_{3}$ from $La$ toward $Lu$, and close $Nb$ with $Ta$ pairing after the same mechanism repeats. Separation exploits tiny basicity gaps through fractional crystallization and extraction.'
      },
      {
        term: 'Actinoid contrast',
        kind: 'insight',
        statement: 'The **actinoid comparison** notes wider oxidation spread plus radioactivity, with `+3` common but $U$ reaching $+6$ as $UO_{2}^{2+}$ uranyl and $Np$ through $Am$ showing $+3$ through $+7$. Greater $5f$ radial extension versus $4f$ gives stronger complexation and hydrolysis, so actinoids separate by redox-tuned extraction rather than pure size steps.',
        detail: 'Thorium holds $+4$ and americium holds $+3$ as anchors, while californium onward returns to $+3$ dominance. Handling constraints plus redox flexibility separate actinoid chemistry from lanthanoid routine.'
      }
    ],
    figures: [
      {
        caption: '$Cr$ is $[Ar]3d^54s^1$ and $Cu$ is $[Ar]3d^{10}4s^1$; incomplete $d$ shells colour ions while $Sc^{3+}$ and $Zn^{2+}$ stay colourless and $MnO_4^-$ oxidises hard in acid.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Transition configurations colours and oxoanions"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">d exceptions + colour ladder + oxoanions</text><rect x="40" y="65" width="200" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="90" font-size="13" fill="currentColor" font-family="sans-serif">Cr 3d5 4s1</text><text x="55" y="112" font-size="13" fill="currentColor" font-family="sans-serif">Cu 3d10 4s1</text><text x="55" y="134" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">4s leaves first</text><rect x="260" y="65" width="200" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="275" y="90" font-size="12" fill="currentColor" font-family="sans-serif">Ti3+ violet V3+ green</text><text x="275" y="112" font-size="12" fill="currentColor" font-family="sans-serif">Mn2+ pale pink Cu2+ blue</text><text x="275" y="134" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">Sc3+ d0, Zn2+ d10 clear</text><rect x="480" y="65" width="200" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="495" y="90" font-size="13" fill="currentColor" font-family="sans-serif">MnO4- purple VII</text><text x="495" y="112" font-size="13" fill="currentColor" font-family="sans-serif">Cr2O7 2- orange VI</text><text x="495" y="134" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">acid Myhill test</text><text x="40" y="185" font-size="12" fill="currentColor" font-family="sans-serif">MnO4- + 8H+ + 5e- -&gt; Mn2+ + 4H2O; Cr2O7 2- + 14H+ + 6e- -&gt; 2Cr3+</text><text x="40" y="215" font-size="13" fill="currentColor" font-family="sans-serif">lanthanoid shrink ~15 pm La-&gt;Lu; Zr/Hf twins; actinoids +3 to +7, radioactive</text><text x="40" y="245" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">variable states from close 4s/3d; catalysis uses flip-flop oxidation</text><line x1="40" y1="270" x2="680" y2="270" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="40" y="295" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">magnetism tracks unpaired d count; colour tracks d-d gaps</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Manganese oxidation-state map',
        problem: 'List stable manganese states from $+2$ through $+7$ with one representative each and mark the strongest oxidant.',
        steps: [
          { label: 'Step 1', text: '```text\n$Mn(II)$: $Mn^{2+}$, $MnSO_{4}$, pale pink, $d^{5}$, most stable.\n$Mn(IV)$: $MnO_{2}$, brown solid, oxidant and catalyst.\n$Mn(VII)$: $MnO_{4}^{-}$, purple, strongest oxidant in acid.\n```\nIntermediate $Mn(III)$ disproportionates while $Mn(VI)$ as $MnO_{4}^{2-}$ exists only in strong base.' },
          { label: 'Step 2', text: 'Track $d$ counts as $d^{5}$ for $Mn^{2+}$ half-filled stability, $d^{3}$ for $Mn^{4+}$ and $d^{0}$ for $Mn^{7+}$ with charge-transfer colour. Oxidizing power peaks at $Mn(VII)$ because reduction to $Mn^{2+}$ gains five electrons across a large potential.' },
          { label: 'Step 3', text: 'Write the acid reduction as $MnO_{4}^{-} + 8H^{+} + 5e^{-} \\rightarrow Mn^{2+} + 4H_{2}O$, whose large positive potential drives $Fe^{2+}$, $C_{2}O_{4}^{2-}$ and $SO_{3}^{2-}$ titrations.' }
        ],
        result: 'Manganese spans $+2$ through $+7$, with $MnO_{4}^{-}$ the premier oxidant and $Mn^{2+}$ the stable sink.'
      },
      {
        title: 'Zirconium-hafnium size coincidence',
        problem: 'Atomic radius rises from $Ti$ to $Zr$ but then stalls at $Hf$. Explain with lanthanoid contraction and state one practical consequence.',
        steps: [
          { label: 'Step 1', text: 'Down Group 4, new shells expand $Ti$ at $147$ pm toward $Zr$ at $160$ pm, but fourteen $4f$ electrons intervene before $Hf$ with poor shielding. Rising $Z$ without matching screen pulls $Hf$ back toward $159$ pm, nearly matching $Zr$.' },
          { label: 'Step 2', text: 'Near-identical radius plus identical $+4$ state makes $Zr$ and $Hf$ chemically twins, so ores carry both and fractional separation needs ion exchange. Density still differs because $Hf$ packs far more mass into the same volume.' },
          { label: 'Step 3', text: '```text\n$Ti$ ~$147$ pm, $Zr$ ~$160$ pm, $Hf$ ~$159$ pm.\nSame group, same charge, same size for $Zr$ with $Hf$.\nResult: co-occurrence plus difficult separation.\n```\nThe same twinning repeats for $Nb$ with $Ta$ and $Mo$ with $W$.' }
        ],
        result: 'Lanthanoid contraction cancels the Group 4 expansion, leaving $Zr$ and $Hf$ chemically inseparable by simple precipitation.'
      }
    ],
    keyTakeaways: [
      '$Cr$ is $[Ar]3d^{5}4s^{1}$ and $Cu$ is $[Ar]3d^{10}4s^{1}$, with $4s$ lost first on ionization.',
      'Colour needs incomplete $d$ shells or charge transfer, with $Mn^{2+}$ at $5.92$ BM maximum moment.',
      '$MnO_{4}^{-}$ oxidizes in acid to $Mn^{2+}$ while $Cr_{2}O_{7}^{2-}$ interconverts with $CrO_{4}^{2-}$ by pH.',
      'Lanthanoid contraction equalizes $Zr$ with $Hf$, forcing ion-exchange separation.'
    ],
    quiz: [
      // PYQ-pattern: electronic exception drill
      {
        q: 'Which configurations are correct?',
        options: [`$Cr = [Ar]3d^{4}4s^{2}$ and $Cu = [Ar]3d^{9}4s^{2}$`, `$Cr = [Ar]3d^{5}4s^{1}$ and $Cu = [Ar]3d^{10}4s^{1}$`, `$Cr = [Ar]3d^{6}4s^{0}$ and $Cu = [Ar]3d^{8}4s^{2}$`, '$Cr = [Ar]4s^{2}3d^{4}$ with no exception'],
        answer: 1,
        explanation: 'Step 1: Test half-filled $d^{5}$ and full $d^{10}$ stability. Step 2: One $4s$ electron shifts to $3d$ in each case. Step 3: Hence the second pair states both exceptions correctly.'
      },
      {
        q: 'Why are $Sc^{3+}$ and $Zn^{2+}$ colourless in water?',
        options: ['They are gases', 'They hold $d^{0}$ and $d^{10}$ counts with no $d$-$d$ promotion available', 'They do not dissolve', 'They absorb only in the infrared'],
        answer: 1,
        explanation: 'Step 1: Count $d$ electrons for each aqua ion. Step 2: Empty and full shells lack a $d$-$d$ gap. Step 3: Without promotion or charge transfer, no visible band appears.'
      },
      // PYQ-pattern: oxoanion redox and pH check
      {
        q: 'What happens when $Cr_{2}O_{7}^{2-}$ is made alkaline?',
        options: ['It reduces to $Cr^{3+}$ spontaneously', 'It oxidizes water to oxygen', 'It precipitates as $Cr$ metal', 'It converts to yellow $CrO_{4}^{2-}$ as $Cr_{2}O_{7}^{2-} + 2OH^{-} \\rightarrow 2CrO_{4}^{2-} + H_{2}O$'],
        answer: 3,
        explanation: 'Step 1: Write the dichromate chromate equilibrium. Step 2: Hydroxide consumes the dimer toward monomer. Step 3: Orange therefore turns yellow without redox.'
      },
      {
        q: 'What is the central consequence of lanthanoid contraction for Group 4?',
        options: ['$Zr$ and $Hf$ share nearly equal radii and travel together chemically', `$Hf$ is far larger than $Zr$`, 'Lanthanoids are all radioactive', '$Ti$ and $Zr$ are identical'],
        answer: 0,
        explanation: 'Step 1: Sum fourteen poor-shielding $4f$ electrons across the row. Step 2: Rising $Z$ contracts the later members. Step 3: The contraction cancels the shell expansion, twinning $Zr$ with $Hf$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.4
  {
    sectionId: 'chem-ch13-s4',
    readingTime: 9,
    intro: 'Winning metal from ore is applied Gibbs energy: carbon, carbon monoxide and aluminium each reduce oxides only where their oxidation lines lie below the metal line. Roasting and calcination first convert sulfides and carbonates into oxides, then reduction, fluxing and refining isolate the metal. This section reads Ellingham lines and writes the furnace equations.',
    objectives: [
      'Read $\\Delta G$ versus $T$ lines to decide which reductant wins at a given temperature',
      'Write roasting, calcination, smelting and aluminothermic equations with slag logic',
      'Select electrolytic, zone and vapour refining routes for $Al$, $Cu$, $Si$ and $Ti$'
    ],
    concepts: [
      {
        term: 'Ellingham reading',
        kind: 'method',
        statement: 'The **Ellingham diagram** plots `DeltaG` as $\\Delta G^{\\circ}$ versus $T$ for $2M + O_{2} \\rightarrow 2MO$ type oxidations, with slope near $-\\Delta S^{\\circ}$ and lower lines marking more stable oxides. A reductant reduces any oxide lying above its line because the coupled $\\Delta G$ is negative, so $C$ to $CO$ crosses $ZnO$ near $1200$ K and $Mg$ lies below $Al_{2}O_{3}$ only at very high $T$.',
        detail: 'Lines for $2C + O_{2} \\rightarrow 2CO$ slope downward as gas moles rise, so carbon strengthens with heating, while $2CO + O_{2} \\rightarrow 2CO_{2}$ slopes upward and weakens. Crossovers therefore set smelting temperatures.'
      },
      {
        term: 'Roasting and calcination',
        kind: 'definition',
        statement: 'The **roasting step** heats sulfide in air, coded as `roast` with $2ZnS + 3O_{2} \\rightarrow 2ZnO + 2SO_{2}$, while calcination heats carbonate without air as $CaCO_{3} \\rightarrow CaO + CO_{2}$. Roasting removes sulfur as volatile $SO_{2}$ for acid manufacture, while calcination removes $CO_{2}$ and moisture to leave porous oxide.',
        detail: 'Copper pyrites $CuFeS_{2}$ roasts toward $Cu_{2}O$ plus $FeO$, with silica flux later slagging $FeO$ as $FeSiO_{3}$. Lead sulfide roasts toward $PbO$ with partial self reduction.'
      },
      {
        term: 'Reduction and flux logic',
        kind: 'theorem',
        statement: 'The **smelting balance** couples oxide reduction with `slag` formation, as $Fe_{2}O_{3} + 3CO \\rightarrow 2Fe + 3CO_{2}$ in the blast stack and $CaCO_{3} \\rightarrow CaO + CO_{2}$ followed by $CaO + SiO_{2} \\rightarrow CaSiO_{3}$ slag. Aluminothermy $Fe_{2}O_{3} + 2Al \\rightarrow 2Fe + Al_{2}O_{3}$ fires where carbon fails for $Cr$ and $Mn$ without carbide contamination.',
        detail: 'Flux choice follows gangue acidity: basic $CaO$ and $MgO$ remove acidic $SiO_{2}$, while acidic $SiO_{2}$ removes basic $FeO$. Matte $Cu_{2}S$ plus $FeS$ stages copper toward blister metal.'
      },
      {
        term: 'Hall-Heroult aluminium',
        kind: 'notation',
        statement: 'The **Hall-Heroult cell** dissolves `alumina` $Al_{2}O_{3}$ in cryolite $Na_{3}AlF_{6}$ near $950^{\\circ}C$ and electrolyses to $2Al_{2}O_{3} + 3C \\rightarrow 4Al + 3CO_{2}$ with carbon anodes consumed. Cryolite lowers melting from $2050^{\\circ}C$ toward $950^{\\circ}C$ and carries current, while $CaF_{2}$ trims density and $AlF_{3}$ trims temperature further.',
        detail: 'Bayer digestion first purifies bauxite as $Al_{2}O_{3} + 2NaOH \\rightarrow 2NaAlO_{2} + H_{2}O$ followed by seeding $NaAlO_{2} + 2H_{2}O \\rightarrow Al(OH)_{3} + NaOH$ and calcination. Anode effect and perfluorocarbon bursts mark control faults.'
      },
      {
        term: 'Refining ladder',
        kind: 'insight',
        statement: 'The **refining ladder** matches impurity chemistry to method: `electrolytic` refining for $Cu$ with $CuSO_{4}$ bath and $Ag$ plus $Au$ anode mud, `zone` refining for $Si$ and $Ge$ by segregation toward the molten end, and `vapour` routes such as $Zr + 2I_{2} \\rightarrow ZrI_{4} \\rightarrow Zr + 2I_{2}$ van Arkel and $Ni + 4CO \\rightarrow Ni(CO)_{4} \\rightarrow Ni + 4CO$ Mond. Poling, cupellation and chromatography cover the remaining niches.',
        detail: 'Blister copper near ninety-eight percent purity becomes cathode-grade after electrorefining, while titanium follows Kroll $TiCl_{4} + 2Mg \\rightarrow Ti + 2MgCl_{2}$ before van Arkel polishing. Purity need sets the rung, not tradition.'
      }
    ],
    figures: [
      {
        caption: 'On Ellingham $\\Delta G^\\circ$ versus $T$ plots the lower oxide line wins, so $C$ reduces $Fe_2O_3$ above the crossing and $Al$ smelts only by Hall-Heroult electrolysis.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ellingham lines for Al C and Fe oxides"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">Ellingham: lower line = more stable oxide</text><line x1="80" y1="80" x2="80" y2="260" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="260" x2="640" y2="260" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="120" x2="600" y2="180" stroke="currentColor" stroke-width="2.5"/><text x="605" y="185" font-size="12" fill="currentColor" font-family="sans-serif">Al</text><line x1="100" y1="160" x2="600" y2="140" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="605" y="145" font-size="12" fill="currentColor" font-family="sans-serif">C-CO</text><line x1="100" y1="200" x2="600" y2="230" stroke="currentColor" stroke-width="2"/><text x="605" y="235" font-size="12" fill="currentColor" font-family="sans-serif">Fe</text><text x="100" y="280" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">T -&gt; ; reductant below metal line reduces it</text><rect x="40" y="295" width="640" height="50" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="55" y="318" font-size="12" fill="currentColor" font-family="sans-serif">roast ZnS + O2 -&gt; ZnO; calcine CaCO3 -&gt; CaO + CO2; Hall-Heroult Al2O3 in cryolite 950 C</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Using a crossover to smelt zinc',
        problem: 'The $C$ to $CO$ line crosses the $ZnO$ line near $1200$ K. Explain why zinc smelting needs that temperature and write the net reaction.',
        steps: [
          { label: 'Step 1', text: '```text\nBelow crossover: DeltaG(ZnO) < DeltaG(CO), ZnO more stable.\nAbove crossover: DeltaG(CO) < DeltaG(ZnO), CO more stable.\nCoupled ZnO + C -> Zn + CO turns negative only above crossing.\n```\nReduction is allowed only where the reductant line for $2C + O_{2} \\rightarrow 2CO$ lies below the $2Zn + O_{2} \\rightarrow 2ZnO$ line.' },
          { label: 'Step 2', text: 'Roast $ZnS$ first as $2ZnS + 3O_{2} \\rightarrow 2ZnO + 2SO_{2}$, then smelt as $ZnO + C \\rightarrow Zn + CO$ above $1200$ K with retort condensation of zinc vapour. Below that mark carbon cannot pay the Gibbs cost.' },
          { label: 'Step 3', text: 'Contrast aluminium, whose $Al_{2}O_{3}$ line stays below carbon across furnace range, so $Al$ needs electrolysis rather than coke. The diagram thus sorts metals into carbon, $CO$ and electrolytic classes.' }
        ],
        result: 'Zinc reduction by carbon turns spontaneous only above the $C$ to $CO$ crossover near $1200$ K as $ZnO + C \\rightarrow Zn + CO$.'
      },
      {
        title: 'Iron blast-furnace balances',
        problem: 'Write the calcination, slag and reduction steps for haematite smelting and mark where each occurs.',
        steps: [
          { label: 'Step 1', text: 'Decompose limestone in the upper stack as $CaCO_{3} \\rightarrow CaO + CO_{2}$, supplying basic flux $CaO$ for silica gangue. Generate reductant lower down as $C + O_{2} \\rightarrow CO_{2}$ followed by $CO_{2} + C \\rightarrow 2CO$ near the tuyeres.' },
          { label: 'Step 2', text: 'Reduce stepwise as $Fe_{2}O_{3} + 3CO \\rightarrow 2Fe + 3CO_{2}$ through $Fe_{3}O_{4}$ and $FeO$ intermediates, with direct $FeO + C \\rightarrow Fe + CO$ near the hearth. Slag silica as $CaO + SiO_{2} \\rightarrow CaSiO_{3}$ floating above iron.' },
          { label: 'Step 3', text: '```text\nTop:    charge drying + CaCO3 split.\nMiddle: indirect reduction by CO.\nBottom: direct reduction + slag fusion + metal tapping.\n```\nTemperature rises downward, so each reaction sits where its $\\Delta G$ turns negative.' }
        ],
        result: 'Haematite smelting chains $CaCO_{3}$ fluxing, $CO$ generation, $Fe_{2}O_{3}$ reduction and $CaSiO_{3}$ slagging by temperature zone.'
      }
    ],
    keyTakeaways: [
      'Lower Ellingham lines mark stabler oxides, and $2C + O_{2} \\rightarrow 2CO$ strengthens with heating.',
      'Roasting oxidizes sulfides as $2ZnS + 3O_{2} \\rightarrow 2ZnO + 2SO_{2}$ while calcination splits carbonates.',
      'Blast chemistry pairs $Fe_{2}O_{3} + 3CO \\rightarrow 2Fe + 3CO_{2}$ with $CaO + SiO_{2} \\rightarrow CaSiO_{3}$ slag.',
      'Copper refines electrolytically, silicon by zone melting, and zirconium by van Arkel vapour transport.'
    ],
    quiz: [
      // PYQ-pattern: Ellingham crossover logic
      {
        q: 'A reductant line lies above an oxide line at temperature $T$. What follows?',
        options: ['Reduction is spontaneous at $T$', 'Reduction is nonspontaneous at $T$ because the oxide is more stable than the reductant oxide', 'Temperature has no role', 'Both oxides decompose spontaneously'],
        answer: 1,
        explanation: 'Step 1: Lower $\\Delta G$ means stabler oxide. Step 2: Upper reductant line means weaker oxygen affinity. Step 3: Coupled reduction then carries positive $\\Delta G$ and waits for crossover.'
      },
      {
        q: 'Which pair correctly matches process to equation?',
        options: ['$2ZnS + 3O_{2} \\rightarrow 2ZnO + 2SO_{2}$ as calcination', '$CaCO_{3} \\rightarrow CaO + CO_{2}$ as roasting', '$2ZnS + 3O_{2} \\rightarrow 2ZnO + 2SO_{2}$ as roasting and $CaCO_{3} \\rightarrow CaO + CO_{2}$ as calcination', 'Both are smelting'],
        answer: 2,
        explanation: 'Step 1: Roasting needs air and sulfide feed. Step 2: Calcination needs carbonate feed without air. Step 3: Only the third pairing assigns both correctly.'
      },
      {
        q: 'Why does aluminium need Hall-Heroult electrolysis rather than coke?',
        options: ['Aluminium is too volatile', 'The $Al_{2}O_{3}$ Ellingham line stays below carbon lines across furnace range, so carbon cannot reduce it', 'Cryolite blocks all reduction', 'Aluminium oxide is a gas'],
        answer: 1,
        explanation: 'Step 1: Locate $Al_{2}O_{3}$ low on the diagram. Step 2: Carbon and $CO$ lines stay above it. Step 3: Coupled carbon reduction keeps positive $\\Delta G$, forcing electrolysis.'
      },
      // PYQ-pattern: refining route selection
      {
        q: 'Which refining match is correct?',
        options: ['$Si$ by Mond carbonyl', '$Cu$ by electrorefining with anode mud recovery, $Si$ by zone melting, $Zr$ by van Arkel iodide', '$Zr$ by poling', '$Cu$ by zone melting only'],
        answer: 1,
        explanation: 'Step 1: Match impurity chemistry to segregation, electrolysis or reversible vapour. Step 2: Copper suits ion transfer, silicon suits segregation, zirconium suits iodide cycling. Step 3: Only the second list assigns all three correctly.'
      }
    ]
  }
]
