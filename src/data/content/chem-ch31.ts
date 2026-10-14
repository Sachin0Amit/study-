import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 31: Periodic Trend Workshops (Lee Guha foci 2, 10)
// Sections 31.1 - 31.4. Second-opinion problem workshops complementing theory.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh31Content: SectionContent[] = [
  // ---------------------------------------------------------------- 31.1
  {
    sectionId: 'chem-ch31-s1',
    readingTime: 9,
    intro: 'Lee Guha periodic drills separate covalent plus metallic plus van der Waals radii with effective nuclear charge $Z_{eff}$ as driver. Ionisation energy climbs with $Z_{eff}$ while electron affinity plus electronegativity track electron gain pull. This workshop orders isoelectronic series plus exception pairs with $Z_{eff}$ reasoning.',
    objectives: [
      'Order radii by $Z_{eff}$ with $r_{v}$ greater than $r_{m}$ greater than $r_{c}$ hierarchy',
      'Rank isoelectronic ions by proton count at fixed electron count',
      'Explain $Be$ over $B$ plus $N$ over $O$ ionisation exceptions by subshell stability'
    ],
    concepts: [
      {
        term: 'Radius type hierarchy',
        kind: 'definition',
        statement: 'A **radius label fixes the contact state** `radius-type` $r_{v}$ greater than $r_{m}$ greater than $r_{c}$ with van der Waals nonbonded longest and covalent shared shortest.',
        detail: 'Lee Guha defines covalent $r_{c}$ from shared bond halves, metallic $r_{m}$ from lattice neighbours, and van der Waals $r_{v}$ from closest nonbonded approach. Noble gases report $r_{v}$ only except $Xe$ plus $Kr$ compounds.'
      },
      {
        term: 'Period contraction by Zeff',
        kind: 'law',
        statement: 'A **rising effective charge shrinks atoms across a period** `Zeff` $Z_{eff} = Z - S$ growing left to right pulls $Li$ greater than $Be$ greater than $B$ greater than $C$ greater than $N$ greater than $O$ greater than $F$.',
        detail: 'Added protons outweigh added shielding in the same shell, so covalent radii fall across representative rows. Transition rows stall by $d$ shielding and lanthanoid contraction flattens later gaps.'
      },
      {
        term: 'Isoelectronic ordering rule',
        kind: 'theorem',
        statement: 'An **isoelectronic set orders by proton count** `isoelectronic` $N^{3-}$ greater than $O^{2-}$ greater than $F^{-}$ greater than $Ne$ greater than $Na^{+}$ greater than $Mg^{2+}$ for $10$ electron series.',
        detail: 'Fixed $10$ electrons with rising $Z$ means tighter pull per electron, so anions stay largest and highly charged cations stay smallest. The same logic orders $S^{2-}$ plus $Cl^{-}$ plus $K^{+}$ plus $Ca^{2+}$ sets.'
      },
      {
        term: 'Ionisation exception pair',
        kind: 'method',
        statement: 'A **filled plus half filled subshell resists removal** `IE-exception` $Be$ over $B$ by $2s$ full stability and $N$ over $O$ by $2p^{3}$ half stability with $IE_{1}$ dips at $B$ plus $O$.',
        detail: 'Boron $2p^{1}$ leaves readily after beryllium $2s^{2}$ full shell, while oxygen $2p^{4}$ pairing repulsion eases removal after nitrogen $2p^{3}$ half shell. Later periods repeat $Mg$ over $Al$ plus $P$ over $S$ dips.'
      },
      {
        term: 'Electron affinity pull map',
        kind: 'insight',
        statement: 'A **halogen gain releases most energy by near octet pull** `EA` $Cl$ over $F$ over $Br$ over $I$ with $F$ dented by compact repulsion and $O$ plus $S$ leading the second rank.',
        detail: 'Fluorine $2p$ crowding repels added electrons, so chlorine $3p$ wins despite lower $Z_{eff}$ per shell. Noble gases carry near zero or negative $EA$ by closed shell resistance.'
      }
    ],
    figures: [
      {
        caption: 'Radius $r_{v}$ greater than $r_{m}$ greater than $r_{c}$ with $Z_{eff}$ contraction and $10$ electron isoelectronic order.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Periodic radius IE and EA drills with isoelectronic order"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">rv over rm over rc</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">Zeff shrinks period</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">N3 minus to Mg2 plus</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">10 e order by Z</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">anions largest</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Be over B, N over O</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">Cl over F by size</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">more protons at fixed e means smaller</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Ten electron series ordering',
        problem: 'Order $N^{3-}$ plus $O^{2-}$ plus $F^{-}$ plus $Ne$ plus $Na^{+}$ plus $Mg^{2+}$ by radius with $Z$ from $7$ to $12$ at $10$ electrons.',
        steps: [
          { label: 'Step 1', text: 'Fix electron count:\n```text\nall have 10 electrons\nZ runs 7 N to 12 Mg\nmore protons = tighter pull\n```\nIsoelectronic logic uses $Z$ at fixed $e$ count with $Z_{eff}$ rising.' },
          { label: 'Step 2', text: 'Place anions largest with lowest $Z$: $N^{3-}$ greater than $O^{2-}$ greater than $F^{-}$ greater than $Ne$.' },
          { label: 'Step 3', text: 'Place cations smallest with highest $Z$: $Ne$ greater than $Na^{+}$ greater than $Mg^{2+}$.' }
        ],
        result: '$N^{3-}$ largest to $Mg^{2+}$ smallest in the $10$ electron order.'
      },
      {
        title: 'Beryllium boron exception call',
        problem: 'First ionisation $Be$ exceeds $B$ despite rising $Z$ from $4$ to $5$. Explain with orbital labels $2s^{2}$ versus $2s^{2}2p^{1}$.',
        steps: [
          { label: 'Step 1', text: 'Write configs: $Be$ $2s^{2}$ full shell versus $B$ $2s^{2}2p^{1}$ lone $p$ electron.' },
          { label: 'Step 2', text: 'Removing full $2s$ costs extra stability while lone $2p^{1}$ leaves readily with better shielding.' },
          { label: 'Step 3', text: 'Assign $IE_{1}$ dip at $B$ plus repeat at $Al$ after $Mg$ by same $s^{2}$ versus $p^{1}$ logic.' }
        ],
        result: '$Be$ over $B$ by full $2s$ stability with $N$ over $O$ by half $p^{3}$ analog.'
      }
    ],
    keyTakeaways: [
      '$r_{v}$ greater than $r_{m}$ greater than $r_{c}$ with $Z_{eff} = Z - S$ shrinking periods.',
      'Fixed $e$ sets order by $Z$ with anions largest and high $+$ cations smallest.',
      '$Be$ over $B$ plus $N$ over $O$ dips mark full plus half subshell stability.',
      '$Cl$ over $F$ in $EA$ by compact repulsion with halogens leading gain.'
    ],
    quiz: [
      {
        q: 'Largest in $10$ electron series is:',
        options: ['$Mg^{2+}$', '$Na^{+}$', '$Ne$', '$N^{3-}$'],
        answer: 3,
        explanation: 'Step 1: Fix $10$ electrons for all ions. Step 2: Find lowest $Z$ equal to $7$. Step 3: Select $N^{3-}$ as largest.'
      },
      // PYQ-pattern: ionisation exception explanation drill
      {
        q: '$Be$ over $B$ since:',
        options: ['$B$ smaller nucleus', 'Full $2s^{2}$ resists removal versus lone $2p^{1}$', 'No shielding difference', '$B$ noble gas'],
        answer: 1,
        explanation: 'Step 1: Write $2s^{2}$ versus $2s^{2}2p^{1}$. Step 2: Price full shell removal higher. Step 3: Dip $IE_{1}$ at $B$.'
      },
      {
        q: 'Highest $EA$ is typically:',
        options: ['$F$', '$Cl$', '$O$', '$Ne$'],
        answer: 1,
        explanation: 'Step 1: Rank halogen pull by near octet. Step 2: Dent $F$ by $2p$ crowding. Step 3: Select $Cl$ over $F$.'
      },
      {
        q: 'Across a period radii fall since:',
        options: ['$Z_{eff}$ rises with added protons', '$Z_{eff}$ falls', 'Shell number falls', 'No charge change'],
        answer: 0,
        explanation: 'Step 1: Add protons plus same shell electrons. Step 2: Raise $Z_{eff} = Z - S$. Step 3: Pull outer electrons tighter.'
      }
    ]
  },
  // ---------------------------------------------------------------- 31.2
  {
    sectionId: 'chem-ch31-s2',
    readingTime: 8,
    intro: 'Lee Guha diagonal pairs link second period heads with third period neighbours by similar charge density plus polarising power. Lithium mirrors magnesium while beryllium mirrors aluminium and boron mirrors silicon. This workshop drills diagonal property parallels with anomaly explanations.',
    objectives: [
      'Match $Li$ with $Mg$ plus $Be$ with $Al$ plus $B$ with $Si$ on solubility plus oxide plus chloride behaviour',
      'Explain anomalies by high charge density from small radius with high charge',
      'Separate true group trends from diagonal artefacts in timed items'
    ],
    concepts: [
      {
        term: 'Charge density bridge',
        kind: 'definition',
        statement: 'A **charge over size ratio links diagonal neighbours** `charge-density` $Z$ over $r$ similar for $Li$ plus $Mg$ and for $Be$ plus $Al$ despite different groups.',
        detail: 'Small $Li^{+}$ $76$ pm approaches $Mg^{2+}$ $72$ pm polarising power, so solubilities plus carbonate stabilities track together. Larger $Na^{+}$ $102$ pm breaks the match down the group.'
      },
      {
        term: 'Lithium magnesium parallel',
        kind: 'theorem',
        statement: 'A **lithium plus magnesium share hard polarising chemistry** `Li-Mg` both form nitrides $Li_{3}N$ plus $Mg_{3}N_{2}$ with $N_{2}$ and carbonates that release $CO_{2}$ on heating.',
        detail: 'Other alkali metals skip nitride formation and hold carbonates to higher $T$. Organolithium plus Grignard $RMgX$ parallel as polar carbon reagents.'
      },
      {
        term: 'Beryllium aluminium parallel',
        kind: 'law',
        statement: 'A **beryllium plus aluminium share amphoteric oxide films** `Be-Al` $BeO$ plus $Al_{2}O_{3}$ resist acids plus bases while chlorides $BeCl_{2}$ plus $AlCl_{3}$ hydrolyse readily.',
        detail: 'Both metals passivate with adherent oxide and form tetra complexes $BeF_{4}^{2-}$ plus $AlF_{6}^{3-}$ style anions. Other $s$ block oxides stay strongly basic without amphoteric turn.'
      },
      {
        term: 'Boron silicon parallel',
        kind: 'method',
        statement: 'A **boron plus silicon share network covalent oxides** `B-Si` $B_{2}O_{3}$ plus $SiO_{2}$ form acidic glasses while halides hydrolyse to $H_{3}BO_{3}$ plus $H_{4}SiO_{4}$.',
        detail: 'Both elements sit at the metal nonmetal border with high $IE$ plus intermediate electronegativity. Chlorides fume in moist air unlike $CCl_{4}$ inertness.'
      },
      {
        term: 'Anomaly versus trend split',
        kind: 'insight',
        statement: 'A **first element anomaly fades after diagonal check** `anomaly` small $2p$ heads show max covalence $4$ plus $p$-$p$ pi bonding unlike heavier congeners with $d$ access.',
        detail: 'Nitrogen forms $N_{2}$ triple pi while phosphorus prefers $P_{4}$ single bonds, and oxygen stays diatomic while sulfur catenates. Diagonal logic plus $d$ absence together explain the breaks.'
      }
    ],
    figures: [
      {
        caption: 'Diagonal $Li$-$Mg$ plus $Be$-$Al$ plus $B$-$Si$ bridges by $Z$ over $r$ with nitride plus amphoteric plus network oxide fingerprints.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagonal pairs with charge density and property parallels"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Li mirrors Mg</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">nitride plus carbonate</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Be mirrors Al</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">amphoteric film</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">hydrolysing chloride</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">B mirrors Si</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">acid network oxide</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">Z over r match plus d absence rule</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Carbonate stability diagonal call',
        problem: '$Li_{2}CO_{3}$ releases $CO_{2}$ on heating like $MgCO_{3}$ while $Na_{2}CO_{3}$ stays stable to high $T$. Explain with polarising power.',
        steps: [
          { label: 'Step 1', text: 'Compare cations:\n```text\nLi+ 76 pm high polarise\nMg2+ 72 pm high polarise\nNa+ 102 pm low polarise\n```\nSmall $Li^{+}$ matches $Mg^{2+}$ $Z$ over $r$ despite lower charge.' },
          { label: 'Step 2', text: 'Polarise carbonate $CO_{3}^{2-}$ toward $O^{2-}$ plus $CO_{2}$ with strong cation field.' },
          { label: 'Step 3', text: 'Assign low decomposition $T$ to $Li$ plus $Mg$ pair and high $T$ to $Na$ plus $K$ set.' }
        ],
        result: 'Diagonal $Li$-$Mg$ carbonates decompose readily while $Na$ carbonate resists.'
      },
      {
        title: 'Chloride hydrolysis parallel',
        problem: '$BeCl_{2}$ fumes plus hydrolyses like $AlCl_{3}$ while $MgCl_{2}$ dissolves cleanly. Assign the diagonal effect.',
        steps: [
          { label: 'Step 1', text: 'Note high $Z$ over $r$ for $Be^{2+}$ plus $Al^{3+}$ pulling $H_{2}O$ to $H^{+}$ release.' },
          { label: 'Step 2', text: 'Write $BeCl_{2}$ plus $H_{2}O$ to $BeO$ plus $HCl$ fumes and $AlCl_{3}$ plus $H_{2}O$ analog.' },
          { label: 'Step 3', text: 'Contrast $MgCl_{2}$ lower polarising field with simple hydration.' }
        ],
        result: '$Be$-$Al$ chlorides hydrolyse by strong polarisation while $Mg$ salt hydrates.'
      }
    ],
    keyTakeaways: [
      '$Li$-$Mg$ share nitrides plus decomposing carbonates by $Z$ over $r$ match.',
      '$Be$-$Al$ share amphoteric $BeO$ plus $Al_{2}O_{3}$ plus hydrolysing chlorides.',
      '$B$-$Si$ share acidic network $B_{2}O_{3}$ plus $SiO_{2}$ with fuming halides.',
      'Small $2p$ heads add covalence $4$ plus $p$-$p$ pi limits beyond diagonal logic.'
    ],
    quiz: [
      {
        q: 'Diagonal partner of $Li$ is:',
        options: ['$Na$', '$Mg$', '$Ca$', '$K$'],
        answer: 1,
        explanation: 'Step 1: Match $Li^{+}$ $76$ pm with $Mg^{2+}$ $72$ pm. Step 2: Check nitride plus carbonate parallels. Step 3: Select $Mg$.'
      },
      // PYQ-pattern: diagonal carbonate stability drill
      {
        q: 'Readily decomposing carbonate is:',
        options: ['$Na_{2}CO_{3}$', '$K_{2}CO_{3}$', '$Li_{2}CO_{3}$ like $MgCO_{3}$', 'No carbonate'],
        answer: 2,
        explanation: 'Step 1: Rank polarising $Z$ over $r$. Step 2: Destabilise $CO_{3}^{2-}$ with strong field. Step 3: Select $Li_{2}CO_{3}$ with $MgCO_{3}$.'
      },
      {
        q: 'Amphoteric oxide pair is:',
        options: ['$Na_{2}O$ plus $MgO$', '$BeO$ plus $Al_{2}O_{3}$', '$K_{2}O$ plus $CaO$', 'No oxide'],
        answer: 1,
        explanation: 'Step 1: Need intermediate acid base character. Step 2: Find $BeO$ plus $Al_{2}O_{3}$ films. Step 3: Exclude strongly basic $s$ oxides.'
      },
      {
        q: '$B$ mirrors $Si$ in:',
        options: ['Metallic conduction', 'Network acidic oxides plus hydrolysing halides', 'Strong basic oxides', 'Inert halides'],
        answer: 1,
        explanation: 'Step 1: Place both at nonmetal border. Step 2: Form $B_{2}O_{3}$ plus $SiO_{2}$ glasses. Step 3: Hydrolyse halides to oxoacids.'
      }
    ]
  },
  // ---------------------------------------------------------------- 31.3
  {
    sectionId: 'chem-ch31-s3',
    readingTime: 9,
    intro: 'Lee Guha oxoacid ladders order strength by central oxidation state plus electronegativity plus resonance delocalisation. Higher oxidation state pulls electrons from $O$-$H$ while more electronegative centre stabilises the anion. This workshop climbs $Cl$ plus $S$ plus $P$ ladders with Pauling rule arithmetic.',
    objectives: [
      'Order oxoacids by oxidation state with $HClO_{4}$ over $HClO_{3}$ over $HClO_{2}$ over $HClO$',
      'Compare same state across centres by electronegativity $Cl$ over $S$ over $P$',
      'Apply Pauling $p$ minus $n$ rule to predict $K_{a}$ jumps by $10^{5}$ per oxo unit'
    ],
    concepts: [
      {
        term: 'Oxidation state ladder',
        kind: 'law',
        statement: 'A **higher central oxidation state strengthens the acid** `oxidation-ladder` $HClO_{4}$ over $HClO_{3}$ over $HClO_{2}$ over $HClO$ with $+7$ to $+1$ $Cl$ states.',
        detail: 'More $=O$ units withdraw electrons from $O$-$H$, easing $H^{+}$ loss. Perchloric $HClO_{4}$ fully dissociates while hypochlorous $HClO$ stays weak.'
      },
      {
        term: 'Electronegativity cross ladder',
        kind: 'theorem',
        statement: 'A **more electronegative centre strengthens at fixed state** `centre-ladder` $HClO_{2}$ over $HBrO_{2}$ over $HIO_{2}$ and $H_{2}SO_{4}$ over $H_{2}SeO_{4}$ by pull comparison.',
        detail: 'Chlorine $3.16$ pulls harder than bromine $2.96$ plus iodine $2.66$, stabilising $ClO_{2}$ anion best. Sulfur $2.58$ beats selenium $2.55$ plus tellurium $2.10$ analogously.'
      },
      {
        term: 'Pauling p minus n rule',
        kind: 'method',
        statement: 'A **count of oxo minus hydroxy predicts strength** `Pauling` $X O_{p}(OH)_{n}$ with $p$ equal to $3$ very strong plus $p$ equal to $2$ strong plus $p$ equal to $1$ weak.',
        detail: '$HClO_{4}$ as $ClO_{3}(OH)$ has $p$ equal to $3$ and $K_{a}$ huge, while $HClO$ as $Cl(OH)$ has $p$ equal to $0$ and $K_{a}$ near $10^{-8}$. Each $p$ unit shifts $K_{a}$ near $10^{5}$ fold.'
      },
      {
        term: 'Resonance anion spread',
        kind: 'definition',
        statement: 'A **delocalised anion stabilises the conjugate base** `resonance` $ClO_{4}$ spreads charge over four $O$ while $ClO$ localises on one $O$.',
        detail: 'Equivalent $Cl$-$O$ resonance forms divide negative charge, lowering anion energy. Sulfuric second proton $HSO_{4}$ stays weaker since $SO_{4}^{2-}$ concentrates double charge.'
      },
      {
        term: 'Proticity versus strength split',
        kind: 'insight',
        statement: 'A **proton count sets equivalents not strength** `proticity` $H_{3}PO_{4}$ tribasic but weaker first $K_{a}$ than dibasic $H_{2}SO_{4}$ first $K_{a}$.',
        detail: 'Phosphoric $P$ $+5$ with one $=O$ trails sulfuric $S$ $+6$ with two $=O$ units despite extra $H$. Successive $K_{a}$ falls by $10^{4}$ to $10^{5}$ per proton by growing anion charge.'
      }
    ],
    figures: [
      {
        caption: 'Oxoacid ladders $+7$ to $+1$ $Cl$ plus $Cl$ over $Br$ over $I$ centres with Pauling $p$ equal to $3$ to $0$ rule.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Oxoacid strength ladders with Pauling rule"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">HClO4 over HClO</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">plus 7 to plus 1</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Cl over Br over I</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">same state pull</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">H2SO4 over H2SeO4</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">p 3 strong</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">p 0 weak</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">more oxo plus spread anion is stronger</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Chlorine oxo ladder ordering',
        problem: 'Order $HClO_{4}$ plus $HClO_{3}$ plus $HClO_{2}$ plus $HClO$ by $K_{a}$ with $Cl$ states $+7$ plus $+5$ plus $+3$ plus $+1$.',
        steps: [
          { label: 'Step 1', text: 'Count oxo units:\n```text\nHClO4 p=3 strongest\nHClO3 p=2 strong\nHClO2 p=1 weak\nHClO p=0 weakest\n```\nHigher $+7$ to $+1$ means more $=O$ pull on $O$-$H$.' },
          { label: 'Step 2', text: 'Spread anion charge over $4$ to $1$ $O$ atoms with $ClO_{4}$ most delocalised.' },
          { label: 'Step 3', text: 'Assign $HClO_{4}$ over $HClO_{3}$ over $HClO_{2}$ over $HClO$ by $10^{5}$ steps.' }
        ],
        result: 'Perchloric strongest to hypochlorous weakest in the $Cl$ ladder.'
      },
      {
        title: 'Sulfur versus selenium acid call',
        problem: '$H_{2}SO_{4}$ first $K_{a}$ exceeds $H_{2}SeO_{4}$ first $K_{a}$ at same $+6$ state. Explain with centre pull.',
        steps: [
          { label: 'Step 1', text: 'Fix $+6$ state with two $=O$ units for both acids, so oxidation ladder ties.' },
          { label: 'Step 2', text: 'Compare $S$ $2.58$ versus $Se$ $2.55$ electronegativity with smaller $S$ radius.' },
          { label: 'Step 3', text: 'Stabilise $HSO_{4}$ over $HSeO_{4}$ by stronger pull, so $H_{2}SO_{4}$ dissociates further.' }
        ],
        result: '$H_{2}SO_{4}$ stronger than $H_{2}SeO_{4}$ by centre electronegativity.'
      }
    ],
    keyTakeaways: [
      '$HClO_{4}$ over $HClO_{3}$ over $HClO_{2}$ over $HClO$ by $+7$ to $+1$ oxidation pull.',
      '$HClO_{2}$ over $HBrO_{2}$ over $HIO_{2}$ by centre electronegativity at fixed state.',
      'Pauling $p$ equal to $3$ very strong to $p$ equal to $0$ very weak near $10^{5}$ steps.',
      'Proticity counts $H$ while oxo count plus resonance set $K_{a}$ strength.'
    ],
    quiz: [
      {
        q: 'Strongest $Cl$ oxoacid is:',
        options: ['$HClO$', '$HClO_{2}$', '$HClO_{3}$', '$HClO_{4}$'],
        answer: 3,
        explanation: 'Step 1: Count $=O$ units $0$ to $3$. Step 2: Link more oxo to stronger pull. Step 3: Select $HClO_{4}$ with $p$ equal to $3$.'
      },
      // PYQ-pattern: Pauling p rule prediction drill
      {
        q: 'Pauling $p$ equal to $0$ predicts:',
        options: ['Very strong', 'Strong', 'Weak near $10^{-8}$', 'No acidity'],
        answer: 2,
        explanation: 'Step 1: Write $X(OH)$ with zero oxo. Step 2: Recall $10^{5}$ fall per $p$ unit. Step 3: Assign weak $K_{a}$ near $10^{-8}$.'
      },
      {
        q: 'At fixed state $H_{2}SO_{4}$ over $H_{2}SeO_{4}$ since:',
        options: ['$Se$ more electronegative', '$S$ more electronegative plus smaller', 'Equal centres', 'Proticity difference only'],
        answer: 1,
        explanation: 'Step 1: Fix $+6$ with two oxo units. Step 2: Compare $S$ versus $Se$ pull. Step 3: Favour $S$ stabilised anion.'
      },
      {
        q: 'Successive $K_{a}$ falls since:',
        options: ['Growing anion charge resists further $H^{+}$ loss', 'More oxo units appear', 'Temperature rises', 'No charge effect'],
        answer: 0,
        explanation: 'Step 1: Lose first $H^{+}$ to single anion. Step 2: Lose second against double negative. Step 3: Drop $K_{a}$ by $10^{4}$ to $10^{5}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 31.4
  {
    sectionId: 'chem-ch31-s4',
    readingTime: 8,
    intro: 'Lee Guha structure property maps run from position to oxide nature to aqueous behaviour without memorising isolated facts. Metallic left gives basic oxides while nonmetal right gives acidic oxides with amphoteric border between. This workshop maps thermal stability plus hydrolysis plus redox from the same position logic.',
    objectives: [
      'Classify oxides as basic plus amphoteric plus acidic from periodic position',
      'Predict chloride hydrolysis from charge density with $CCl_{4}$ inert versus $SiCl_{4}$ fuming',
      'Link oxidising power to high oxidation states with $PbO_{2}$ plus $Tl^{3+}$ style flags'
    ],
    concepts: [
      {
        term: 'Oxide nature walk',
        kind: 'definition',
        statement: 'An **oxide acid base character tracks position** `oxide-walk` $Na_{2}O$ basic over $Al_{2}O_{3}$ amphoteric over $SO_{3}$ acidic across period three.',
        detail: 'Left metals donate $O^{2-}$ to water giving $OH$, while right nonmetals accept $O^{2-}$ from water giving $H^{+}$. Border $BeO$ plus $Al_{2}O_{3}$ do both.'
      },
      {
        term: 'Thermal stability ladder',
        kind: 'theorem',
        statement: 'A **carbonate plus hydroxide stability rises down the group** `thermal` $Li_{2}CO_{3}$ decomposes readily while $K_{2}CO_{3}$ resists with larger cation stabilising large anion.',
        detail: 'Small polarising cations distort $CO_{3}^{2-}$ toward $O^{2-}$ plus $CO_{2}$. Fajan style size match makes large plus large pairs most stable to heat.'
      },
      {
        term: 'Chloride hydrolysis split',
        kind: 'law',
        statement: 'A **high charge density chloride fumes in moist air** `hydrolysis` $SiCl_{4}$ plus $PCl_{5}$ hydrolyse while $CCl_{4}$ stays inert by blocked attack plus no $d$ orbitals.',
        detail: '$SiCl_{4}$ plus $H_{2}O$ gives $SiO_{2}$ plus $HCl$ fumes through open coordination, while $CCl_{4}$ carbon stays shielded with full octet. $AlCl_{3}$ gives acidic solution by $Al(H_{2}O)_{6}^{3+}$ deprotonation.'
      },
      {
        term: 'Inert pair oxidiser flag',
        kind: 'method',
        statement: 'A **heavy p block high state oxidises by inert pair pull** `inert-pair` $PbO_{2}$ plus $Tl^{3+}$ oxidise $HCl$ to $Cl_{2}$ while light $SnCl_{2}$ reduces $Fe^{3+}$ to $Fe^{2+}$.',
        detail: '$6s^{2}$ stability favours $Pb^{2+}$ over $Pb^{4+}$ plus $Tl^{+}$ over $Tl^{3+}$, so high states grab electrons readily. Descent makes $+5$ $Bi$ strongly oxidising versus $+5$ $N$ ordinary.'
      },
      {
        term: 'Aqueous behaviour map',
        kind: 'insight',
        statement: 'A **position plus charge predicts solution acidity** `aqueous-map` small highly charged $Fe^{3+}$ acidifies $pH$ while large singly charged $Na^{+}$ stays neutral.',
        detail: '$Fe(H_{2}O)_{6}^{3+}$ releases $H^{+}$ readily by polarised $O$-$H$, while $Na(H_{2}O)_{n}^{+}$ keeps $pH$ near $7$. Oxoanions of high states acidify secondarily by $K_{a}$ ladders.'
      }
    ],
    figures: [
      {
        caption: 'Position to oxide $Na_{2}O$ basic to $SO_{3}$ acidic with $CCl_{4}$ inert versus $SiCl_{4}$ fuming and $PbO_{2}$ oxidiser flag.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structure property map from position to oxide to aqueous behaviour"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">left basic oxide</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">Na2O to OH</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">border amphoteric</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">Al2O3 both ways</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">right acidic SO3</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">CCl4 inert</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">SiCl4 fumes</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">PbO2 oxidises, Fe3 plus acidifies</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Oxide plus water prediction',
        problem: '$Na_{2}O$ plus $Al_{2}O_{3}$ plus $SO_{3}$ each meet water. Predict solution $pH$ class for each oxide.',
        steps: [
          { label: 'Step 1', text: 'Locate across period:\n```text\nleft Na2O -> basic\nborder Al2O3 -> amphoteric, insoluble neutral\nright SO3 -> acidic\n```\nPosition walk gives $Na_{2}O$ basic over $Al_{2}O_{3}$ border over $SO_{3}$ acidic.' },
          { label: 'Step 2', text: 'Write $Na_{2}O$ plus $H_{2}O$ to $NaOH$ strong base and $SO_{3}$ plus $H_{2}O$ to $H_{2}SO_{4}$ strong acid.' },
          { label: 'Step 3', text: 'Leave $Al_{2}O_{3}$ largely insoluble with neutral slurry but soluble in strong acid plus base.' }
        ],
        result: 'Basic $NaOH$ plus neutral $Al_{2}O_{3}$ slurry plus acidic $H_{2}SO_{4}$.'
      },
      {
        title: 'Tetrachloride hydrolysis call',
        problem: '$CCl_{4}$ stays inert in water while $SiCl_{4}$ fumes vigorously. Explain with size plus orbital access.',
        steps: [
          { label: 'Step 1', text: 'Compare central attack: $C$ small shielded with full octet versus $Si$ larger with open coordination.' },
          { label: 'Step 2', text: 'Allow $H_{2}O$ attack on $Si$ to $SiO_{2}$ plus $HCl$ fumes, blocked on $C$ by crowding.' },
          { label: 'Step 3', text: 'Generalise: $CCl_{4}$ inert while $SiCl_{4}$ plus $PCl_{5}$ hydrolyse by access logic.' }
        ],
        result: 'Access plus size explain $SiCl_{4}$ fuming versus $CCl_{4}$ inertness.'
      }
    ],
    keyTakeaways: [
      '$Na_{2}O$ basic plus $Al_{2}O_{3}$ amphoteric plus $SO_{3}$ acidic across the period.',
      'Large cation stabilises $CO_{3}^{2-}$ so stability rises down the group.',
      '$SiCl_{4}$ fumes while $CCl_{4}$ stays inert by attack access.',
      '$PbO_{2}$ plus $Tl^{3+}$ oxidise by inert pair pull while $Fe^{3+}$ acidifies water.'
    ],
    quiz: [
      {
        q: 'Most acidic oxide is:',
        options: ['$Na_{2}O$', '$MgO$', '$Al_{2}O_{3}$', '$SO_{3}$'],
        answer: 3,
        explanation: 'Step 1: Walk left basic to right acidic. Step 2: Place $SO_{3}$ at far right. Step 3: Select $SO_{3}$ as most acidic.'
      },
      // PYQ-pattern: tetrachloride hydrolysis contrast drill
      {
        q: 'Fuming tetrachloride is:',
        options: ['$CCl_{4}$ inert', '$SiCl_{4}$ hydrolysing', 'No chloride fumes', 'All inert'],
        answer: 1,
        explanation: 'Step 1: Compare $C$ shielded versus $Si$ open. Step 2: Allow $H_{2}O$ attack on $Si$. Step 3: Release $HCl$ fumes from $SiCl_{4}$.'
      },
      {
        q: 'Stable carbonate to heat is:',
        options: ['$Li_{2}CO_{3}$', '$MgCO_{3}$', '$K_{2}CO_{3}$', 'All equal'],
        answer: 2,
        explanation: 'Step 1: Match large cation with large anion. Step 2: Stabilise $CO_{3}^{2-}$ with $K^{+}$. Step 3: Select $K_{2}CO_{3}$ as most stable.'
      },
      {
        q: 'Strong oxidiser by inert pair is:',
        options: ['$SnCl_{2}$ reducer', '$PbO_{2}$ oxidiser', '$Tl^{+}$ reducer', '$Na^{+}$ oxidiser'],
        answer: 1,
        explanation: 'Step 1: Favour $6s^{2}$ low states. Step 2: Make high $Pb^{4+}$ grab electrons. Step 3: Assign $PbO_{2}$ as oxidiser.'
      }
    ]
  }
]
