import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 38: Groups 16-18 and d f Block Depth (Lee focus)
// Sections 38.1 - 38.4. Sulfur acids, halogens, xenon compounds, transition
// trends, lanthanoid and actinoid systematics.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh38Content: SectionContent[] = [
  // ---------------------------------------------------------------- 38.1
  {
    sectionId: 'chem-ch38-s1',
    readingTime: 10,
    intro: 'Group $16$ peaks industrially in the Contact tower that turns $SO_{2}$ into oleum and sulfuric acid. The family shows why higher oxidation states acidify harder and oxidise stronger, from $SO_{2}$ versus $SO_{3}$ to the peroxo pair Caro plus Marshall acids. Thiosulfate then closes the analytical loop by titrating the iodine that sulfite chemistry frees.',
    objectives: [
      'Run Contact steps: $V_{2}O_{5}$ bed plus $SO_{3}$ absorption in $H_{2}SO_{4}$ to oleum',
      'Rank oxoacid strength by oxidation state with $H_{2}SO_{4}$ over $H_{2}SO_{3}$ logic',
      'Use $Na_{2}S_{2}O_{3}$ hypo for iodine titration plus $Cl_{2}$ removal'
    ],
    concepts: [
      {
        term: 'Contact process conditions',
        kind: 'definition',
        statement: 'A **vanadium bed oxidises SO2 under a pressure temperature compromise** `Contact` $2SO_{2}$ plus $O_{2}$ over $V_{2}O_{5}$ near $450$ degree gives $SO_{3}$ exothermically.',
        detail: 'Moles shrink so pressure helps, while low temperature favours yield but slows rate, fixing the $450$ degree two stage bed. $SO_{3}$ dissolves in concentrated $H_{2}SO_{4}$ to oleum $H_{2}S_{2}O_{7}$, then water trims it to $98$ percent acid.'
      },
      {
        term: 'Sulfuric acid triple role',
        kind: 'theorem',
        statement: 'A **concentrated acid dehydrates plus oxidises plus sulfonates** `H2SO4-roles` $H_{2}SO_{4}$ chars sugar by dehydration, dissolves $Cu$ to $SO_{2}$, and nitrates via $NO_{2}$ plus partner.',
        detail: 'Dilution order is always acid into water since hydration releases near $880$ kJ per mol. First proton dissociates fully while $HSO_{4}$ minus holds the second, so hydrogen sulfates stay acidic.'
      },
      {
        term: 'Oxoacid strength ladder',
        kind: 'law',
        statement: 'A **higher central oxidation state pulls O-H electrons harder** `oxoacid-ladder` $H_{2}SO_{4}$ plus $6$ beats $H_{2}SO_{3}$ plus $4$, and $HClO_{4}$ beats $HClO_{3}$ beats $HClO_{2}$ beats $HOCl$.',
        detail: 'More terminal oxygens withdraw density from $O-H$ and stabilise the conjugate anion by delocalisation. $HNO_{3}$ over $HNO_{2}$ repeats the same oxidation state rule.'
      },
      {
        term: 'Peroxo acids Caro and Marshall',
        kind: 'insight',
        statement: 'A **peroxo link O-O adds oxidising punch** `peroxo-acids` Caro $H_{2}SO_{5}$ carries one $O-O$ while Marshall $H_{2}S_{2}O_{8}$ carries one $O-O$ across two sulfurs.',
        detail: 'Electrolysis of sulfate at high current density builds $H_{2}S_{2}O_{8}$, whose hydrolysis trims to Caro acid. Both oxidise $Mn$ two plus to $MnO_{4}$ minus and $Cr$ three plus to chromate.'
      },
      {
        term: 'Thiosulfate hypo titrations',
        kind: 'method',
        statement: 'A **hypo ion reduces iodine to iodide quantitatively** `hypo-titration` $2S_{2}O_{3}$ two minus plus $I_{2}$ gives $S_{4}O_{6}$ two minus plus $2I$ minus with starch end point.',
        detail: 'The $S-S$ linked thiosulfate comes from boiling sulfite with sulfur, and photography fixing dissolves $AgBr$ as $Ag(S_{2}O_{3})_{2}$ three minus. Excess $Cl_{2}$ on fabric is likewise killed to sulfate by hypo.'
      }
    ],
    figures: [
      {
        caption: 'Contact $SO_{2}$ to $SO_{3}$ over $V_{2}O_{5}$ absorbs to oleum $H_{2}S_{2}O_{7}$, while the $H_{2}SO_{4}$ over $H_{2}SO_{3}$ ladder and $S_{2}O_{3}$ two minus titration close the chemistry.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Contact process with oxoacid ladder and hypo titration"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">V2O5 bed</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">SO2 to SO3</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">450 degree</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">oleum tower</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">H2S2O7 made</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">trim to acid</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">hypo fixes I2</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">to tetrathionate</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">higher state means stronger acid</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Oleum to acid trimming',
        problem: 'Oleum labelled $20$ percent free $SO_{3}$ needs conversion to $98$ percent $H_{2}SO_{4}$. Show the absorption logic.',
        steps: [
          { label: 'Step 1', text: 'Absorb the bed gas:\n```text\nSO3 + H2SO4 -> H2S2O7 oleum\nH2S2O7 + H2O -> 2H2SO4\nnever water direct, mist forms\n```\nDirect water capture makes unabsorbable mist.' },
          { label: 'Step 2', text: 'Meter water into oleum $H_{2}S_{2}O_{7}$ to open the $S-O-S$ bridge.' },
          { label: 'Step 3', text: 'Trim to $98$ percent $H_{2}SO_{4}$ for tower strength acid.' }
        ],
        result: 'Oleum plus metered water gives $98$ percent sulfuric acid without mist loss.'
      },
      {
        title: 'Hypo titration of liberated iodine',
        problem: '$Cu$ two plus plus excess $I$ minus liberates $I_{2}$, which hypo titrates. Relate titre to copper.',
        steps: [
          { label: 'Step 1', text: 'Liberate $I_{2}$ by $2Cu$ two plus plus $4I$ minus giving $2CuI$ plus $I_{2}$.' },
          { label: 'Step 2', text: 'Titrate $I_{2}$ with $S_{2}O_{3}$ two minus to $S_{4}O_{6}$ two minus with starch blue vanishing.' },
          { label: 'Step 3', text: 'Count one $I_{2}$ per two $Cu$ two plus, so moles copper equal hypo moles used.' }
        ],
        result: 'Each hypo mole maps to one copper centre through the iodine link.'
      }
    ],
    keyTakeaways: [
      'Contact $V_{2}O_{5}$ near $450$ degree plus oleum absorption makes $98$ percent acid.',
      'Concentrated $H_{2}SO_{4}$ dehydrates and oxidises while dilute acts as strong acid.',
      'Higher oxidation state means stronger oxoacid across $S$ and $Cl$ ladders.',
      'Hypo $S_{2}O_{3}$ two minus titrates $I_{2}$ to $S_{4}O_{6}$ two minus quantitatively.'
    ],
    quiz: [
      {
        q: 'Contact catalyst plus absorption medium is:',
        options: ['$V_{2}O_{5}$ bed with $H_{2}SO_{4}$ to oleum', '$Fe$ bed with water direct', '$Pt$ gauze with brine', 'No catalyst with oil'],
        answer: 0,
        explanation: 'Step 1: Oxidise $SO_{2}$ over $V_{2}O_{5}$ near $450$ degree. Step 2: Absorb $SO_{3}$ in $H_{2}SO_{4}$. Step 3: Trim oleum $H_{2}S_{2}O_{7}$ to acid.'
      },
      {
        q: 'Stronger acid by oxidation state rule is:',
        options: ['$H_{2}SO_{3}$ over $H_{2}SO_{4}$', '$H_{2}SO_{4}$ over $H_{2}SO_{3}$', 'Equal always', 'Neither acidic'],
        answer: 1,
        explanation: 'Step 1: Read states $+6$ versus $+4$. Step 2: Pull $O-H$ electrons harder at $+6$. Step 3: Rank $H_{2}SO_{4}$ stronger.'
      },
      // PYQ-pattern: hypo iodine titration stoichiometry drill
      {
        q: 'Hypo plus iodine end products are:',
        options: ['$SO_{2}$ plus $HI$ gas', '$S$ plus $O_{2}$ only', '$S_{4}O_{6}$ two minus plus $I$ minus', 'No reaction'],
        answer: 2,
        explanation: 'Step 1: Reduce $I_{2}$ to $2I$ minus. Step 2: Couple two $S_{2}O_{3}$ two minus. Step 3: Form tetrathionate $S_{4}O_{6}$ two minus.'
      },
      {
        q: 'Marshall acid $H_{2}S_{2}O_{8}$ is made by:',
        options: ['Boiling sulfur in water', 'Freezing oleum', 'Mixing $HCl$ plus $NaCl$', 'Electrolysis of sulfate at high current density'],
        answer: 3,
        explanation: 'Step 1: Oxidise sulfate at the anode. Step 2: Hold high current density. Step 3: Collect peroxodisulfate $H_{2}S_{2}O_{8}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 38.2
  {
    sectionId: 'chem-ch38-s2',
    readingTime: 11,
    intro: 'Halogens climb to $+7$ through interhalogens and oxoacids while fluorine stays locked at minus $1$. Oxidising power falls $F_{2}$ over $Cl_{2}$ over $Br_{2}$ over $I_{2}$ even though electron affinity peaks at chlorine. Xenon then breaks group $18$ silence with fluorides $XeF_{2}$, $XeF_{4}$ and $XeF_{6}$ plus oxide $XeO_{3}$ chemistry.',
    objectives: [
      'Draw interhalogen shapes $AX$ through $AX_{7}$ with VSEPR lone pairs',
      'Rank halogen oxoacids $HClO_{4}$ to $HOCl$ by oxygen count',
      'Write xenon fluoride structures plus hydrolysis to $XeO_{3}$'
    ],
    concepts: [
      {
        term: 'Interhalogen types and shapes',
        kind: 'definition',
        statement: 'A **heavier halogen centres lighter fluorines around it** `interhalogen` $ClF$ linear, $ClF_{3}$ T shaped, $BrF_{5}$ square pyramidal, $IF_{7}$ pentagonal bipyramidal.',
        detail: 'Lone pairs bend each skeleton by VSEPR, and reactivity runs $ClF_{3}$ over $BrF_{5}$ over $IF_{7}$ as fluorinators. $ICl$ dimerises to planar $I_{2}Cl_{6}$ with long bridge bonds.'
      },
      {
        term: 'Fluorine anomaly set',
        kind: 'theorem',
        statement: 'A **small fluorine atom breaks every group trend** `F-anomaly` $F_{2}$ bond near $126$ kJ per mol undercuts $Cl_{2}$, and $HF$ boils high by hydrogen bonding yet ionises weakest.',
        detail: 'Lone pair repulsion in the short $F-F$ link plus huge hydration of $F$ minus explain the weak bond with savage oxidising power. $HF$ strength also pays dissociation plus dehydration penalties in the acid cycle.'
      },
      {
        term: 'Chlorine oxoacid ladder',
        kind: 'law',
        statement: 'A **rising oxygen count raises acid plus oxidant trade** `Cl-ladder` $HClO_{4}$ strongest acid while $HOCl$ is the fiercest bleaching oxidant of the series.',
        detail: 'Order runs $HClO_{4}$ over $HClO_{3}$ over $HClO_{2}$ over $HOCl$ for dissociation, while thermal stability climbs the same way. Bleaching powder $CaOCl_{2}$ delivers $Cl_{2}$ plus $OCl$ minus on acid demand.'
      },
      {
        term: 'Xenon fluoride structures',
        kind: 'method',
        statement: 'A **fluorine ratio sets xenon geometry by lone pairs** `XeF-shapes` $XeF_{2}$ linear, $XeF_{4}$ square planar, $XeF_{6}$ distorted octahedral with a stereoactive pair.',
        detail: 'Direct $Xe$ plus $F_{2}$ with heat or discharge builds the series, and $XeF_{4}$ plus $H_{2}O$ disproportionates toward $XeO_{3}$ plus $Xe$ plus $HF$. $XeF_{2}$ fluorinates gently while $XeF_{6}$ hydrolyses fiercely.'
      },
      {
        term: 'Xenon oxides and oxofluorides',
        kind: 'insight',
        statement: 'A **xenon six plus centre holds pyramidal oxide power** `XeO3` $XeO_{3}$ pyramidal is an explosive oxidant, and $XeOF_{4}$ square pyramidal extends the family.',
        detail: 'Perxenates with $Xe$ plus $8$ cap the oxidation ladder, and $XeO_{3}$ detonates on shock or organics contact. Hydrolysis chains link every fluoride back to $XeO_{3}$ plus $HF$.'
      }
    ],
    figures: [
      {
        caption: 'Interhalogen climb $ClF$ to $IF_{7}$ with $Cl$ oxoacid ladder to $HClO_{4}$, beside $XeF_{2}$ linear, $XeF_{4}$ square planar and $XeO_{3}$ pyramidal.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Interhalogens oxoacid ladder and xenon shapes"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">ClF to IF7</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">T, pyramid, bipy</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">pairs bend all</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">HOCl to HClO4</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">acid strength up</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">with O count</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">XeF2 XeF4</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">XeO3 pyramid</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">F stays minus 1, rest climb to plus 7</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'ClF3 shape assignment',
        problem: '$ClF_{3}$ has three bonds on chlorine with two lone pairs. Assign its VSEPR shape.',
        steps: [
          { label: 'Step 1', text: 'Count domains:\n```text\n3 Cl-F bonds + 2 lone pairs = 5 domains\nbase trigonal bipyramid\npairs take equatorial slots\n```\nAxial fluorines bend from lone pair push.' },
          { label: 'Step 2', text: 'Place both lone pairs equatorial to minimise repulsion.' },
          { label: 'Step 3', text: 'Read the $F$ positions as T shaped with near $90$ degree arms.' }
        ],
        result: '$ClF_{3}$ is T shaped from a lone pair crowded bipyramid.'
      },
      {
        title: 'XeF4 hydrolysis products',
        problem: '$XeF_{4}$ meets water with partial hydrolysis to oxide plus xenon gas. Balance the outcome pattern.',
        steps: [
          { label: 'Step 1', text: 'Set square planar $XeF_{4}$ plus $H_{2}O$ giving $XeO_{3}$ plus $Xe$ plus $HF$ plus $O_{2}$ mix.' },
          { label: 'Step 2', text: 'Assign disproportionation with $Xe$ plus $4$ splitting to $Xe$ plus $6$ and $Xe$ zero.' },
          { label: 'Step 3', text: 'Warn $XeO_{3}$ product is shock sensitive and handled dilute.' }
        ],
        result: 'Hydrolysis disproportionates $XeF_{4}$ toward explosive $XeO_{3}$.'
      }
    ],
    keyTakeaways: [
      'Interhalogens run $AX$ to $AX_{7}$ with lone pair bent VSEPR shapes.',
      '$F_{2}$ is weakest bonded yet strongest oxidant by the fluorine anomaly.',
      'Chlorine oxoacids strengthen $HOCl$ to $HClO_{4}$ with oxygen count.',
      '$XeF_{2}$ linear, $XeF_{4}$ square planar and $XeO_{3}$ pyramidal rule xenon chemistry.'
    ],
    quiz: [
      {
        q: 'Shape of $ClF_{3}$ is:',
        options: ['T shaped by two equatorial lone pairs', 'Linear', 'Tetrahedral', 'Octahedral'],
        answer: 0,
        explanation: 'Step 1: Count five electron domains on $Cl$. Step 2: Park two lone pairs equatorial. Step 3: Read three $F$ atoms as a T.'
      },
      {
        q: 'Strongest chlorine oxoacid is:',
        options: ['$HOCl$', '$HClO_{4}$ with most oxygens', '$HClO_{3}$', '$HClO_{2}$'],
        answer: 1,
        explanation: 'Step 1: Count oxygens one to four. Step 2: Withdraw most $O-H$ density at four. Step 3: Select $HClO_{4}$ as strongest.'
      },
      // PYQ-pattern: xenon fluoride shape identification drill
      {
        q: '$XeF_{4}$ geometry is:',
        options: ['Tetrahedral', 'Linear', 'Square planar with two axial lone pairs', 'Pyramidal'],
        answer: 2,
        explanation: 'Step 1: Count four bonds plus two lone pairs. Step 2: Set octahedral domain base. Step 3: Place pairs trans giving square plane.'
      },
      {
        q: 'Fluorine shows only minus $1$ because it:',
        options: ['Is the largest halogen', 'Has low ionisation energy', 'Forms cations easily', 'Lacks $d$ orbitals and is most electronegative'],
        answer: 3,
        explanation: 'Step 1: Note second period octet cap. Step 2: Add highest electronegativity pull. Step 3: Lock oxidation state at minus $1$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 38.3
  {
    sectionId: 'chem-ch38-s3',
    readingTime: 11,
    intro: 'Transition metals earn their block by variable oxidation states in unit steps with coloured paramagnetic ions. The state pyramid peaks mid series where $Mn$ plus $7$ and $Cr$ plus $6$ oxidise hard while $Mn$ plus $2$ and $Zn$ plus $2$ rest stable. Spin only moments $\\mu = \\sqrt{n(n+2)}$ $BM$ fingerprint the $d$ count, and the same metals catalyse the Contact, Haber and polymer towers.',
    objectives: [
      'Read the oxidation state pyramid with $Mn$ plus $7$ versus $Mn$ plus $2$ logic',
      'Compute $\\mu = \\sqrt{n(n+2)}$ $BM$ for $d^{1}$ to $d^{5}$ ions',
      'Link chromate dichromate plus manganate permanganate equilibria to $pH$'
    ],
    concepts: [
      {
        term: 'Oxidation state pyramid',
        kind: 'definition',
        statement: 'A **mid series peak carries the highest states** `state-pyramid` $Sc$ plus $3$ rises to $Mn$ plus $7$ then falls to $Zn$ plus $2$, with $RuO_{4}$ and $OsO_{4}$ reaching $+8$.',
        detail: 'Unpaired $d$ plus $s$ electrons all bond early, but pairing past $d^{5}$ locks electrons out of bonding. $Fe$ plus $6$ ferrate fades while $Cr$ plus $6$ and $Mn$ plus $7$ dominate oxidant chemistry.'
      },
      {
        term: 'Stability by half and full shells',
        kind: 'theorem',
        statement: 'A **half filled d5 ion resists oxidation** `d5-stable` $Mn$ two plus and $Fe$ three plus hold $d^{5}$ with high third ionisation cost to leave it.',
        detail: '$Mn$ two plus needs a huge ionisation hit to reach $d^{4}$, while $Mn$ plus $7$ with $d^{0}$ drops back gladly. $Cu$ plus $2$ beats $Cu$ plus $1$ in water by hydration of the smaller ion.'
      },
      {
        term: 'Colour by d-d transitions',
        kind: 'law',
        statement: 'A **partially filled d shell absorbs visible light** `d-d-colour` $Cu$ two plus blue, $Co$ two plus pink, $MnO_{4}$ minus purple by charge transfer.',
        detail: '$d^{0}$ $Ti$ plus $4$ and $d^{10}$ $Zn$ plus $2$ stay colourless for lack of $d-d$ gaps, while intense $MnO_{4}$ minus colour is ligand to metal charge transfer. $Cr_{2}O_{7}$ two minus orange versus $CrO_{4}$ two minus yellow is $pH$ driven.'
      },
      {
        term: 'Spin only moment ladder',
        kind: 'method',
        statement: 'A **moment follows unpaired count by root rule** `spin-only` $\\mu = \\sqrt{n(n+2)}$ $BM$ gives $1.73$ plus $2.83$ plus $3.87$ plus $4.90$ plus $5.92$ for $n$ one to five.',
        detail: '$Fe$ three plus high spin reads near $5.92$ $BM$ for five unpaired while low spin $CN$ complex drops to one unpaired near $1.73$ $BM$. $T$ term $Co$ two plus overshoots by orbital share.'
      },
      {
        term: 'Chromate manganate equilibria',
        kind: 'insight',
        statement: 'A **pH lever flips the oxoanion pair** `oxo-pair` $2CrO_{4}$ two minus plus $2H$ plus gives $Cr_{2}O_{7}$ two minus plus $H_{2}O$, and green $MnO_{4}$ two minus disproportionates in acid.',
        detail: 'Alkaline fusion of chromite makes yellow chromate, acid builds orange dichromate, and acidified $MnO_{4}$ two minus splits to $MnO_{4}$ minus plus $MnO_{2}$. $K_{2}Cr_{2}O_{7}$ with $H_{2}SO_{4}$ plus $Cl$ minus releases chromyl chloride $CrO_{2}Cl_{2}$ red vapours.'
      }
    ],
    figures: [
      {
        caption: 'State pyramid peaks at $Mn$ plus $7$ with $d^{5}$ stability wells, $d$ minus $d$ colour ladder, and spin ladder $1.73$ to $5.92$ $BM$ from $\\mu = \\sqrt{n(n+2)}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Transition state pyramid colour and spin ladder"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Mn plus 7 peak</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">d5 wells stable</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">Zn plus 2 end</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">d-d colour</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">d0 d10 white</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">MnO4 charge hop</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">spin ladder</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">1.73 to 5.92</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">pH flips chromate orange and splits manganate</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Moment assignment for iron pair',
        problem: '$[FeF_{6}]$ three minus reads $5.9$ $BM$ while $[Fe(CN)_{6}]$ three minus reads $2.0$ $BM$ for $d^{5}$ $Fe$ three plus. Assign spins.',
        steps: [
          { label: 'Step 1', text: 'Recall the ladder:\n```text\nn=5 -> 5.92 BM high spin\nn=1 -> 1.73 BM low spin\nweak F spreads, strong CN pairs\n```\nSpectrochemical $F$ below $CN$ sets the gap.' },
          { label: 'Step 2', text: 'Match $5.9$ $BM$ to five unpaired $t_{2g}$ three $e_{g}$ two high spin fluoride.' },
          { label: 'Step 3', text: 'Match $2.0$ $BM$ to one unpaired $t_{2g}$ five low spin cyanide.' }
        ],
        result: 'Fluoride high spin five unpaired, cyanide low spin one unpaired.'
      },
      {
        title: 'Dichromate chloride test',
        problem: 'Solid $K_{2}Cr_{2}O_{7}$ plus $NaCl$ plus concentrated $H_{2}SO_{4}$ on warming gives red vapours turning $NaOH$ yellow. Identify the vapour.',
        steps: [
          { label: 'Step 1', text: 'Acidify dichromate with chloride present to form volatile $CrO_{2}Cl_{2}$ chromyl chloride.' },
          { label: 'Step 2', text: 'Observe deep red vapours leaving the hot mixture.' },
          { label: 'Step 3', text: 'Trap in $NaOH$ to yellow $CrO_{4}$ two minus, confirming chromium carried over.' }
        ],
        result: 'Red $CrO_{2}Cl_{2}$ vapours prove chloride beside dichromate.'
      }
    ],
    keyTakeaways: [
      'States peak at $Mn$ plus $7$ and $Cr$ plus $6$ with $d^{5}$ wells at $Mn$ plus $2$.',
      '$d^{0}$ and $d^{10}$ stay colourless while partial $d$ gives $d-d$ colour.',
      '$\\mu = \\sqrt{n(n+2)}$ $BM$ ladders $1.73$ to $5.92$ for one to five unpaired.',
      'Acid turns chromate to dichromate and splits green manganate to permanganate.'
    ],
    quiz: [
      {
        q: 'Maximum oxidation state belongs to:',
        options: ['$Mn$ plus $7$ as $MnO_{4}$ minus', '$Zn$ plus $2$', '$Sc$ plus $3$', '$Cu$ plus $1$'],
        answer: 0,
        explanation: 'Step 1: Climb the pyramid to mid series. Step 2: Count seven bonding electrons for $Mn$. Step 3: Select $Mn$ plus $7$ permanganate.'
      },
      {
        q: 'Colourless ion among the set is:',
        options: ['$Cu$ two plus blue', '$Zn$ two plus $d^{10}$ colourless', '$Co$ two plus pink', '$MnO_{4}$ minus purple'],
        answer: 1,
        explanation: 'Step 1: Check $d$ counts for gaps. Step 2: Find $d^{10}$ full shell for $Zn$. Step 3: Assign no $d-d$ transition, colourless.'
      },
      // PYQ-pattern: spin only moment to unpaired count drill
      {
        q: '$5.9$ $BM$ for $Fe$ three plus means:',
        options: ['$n$ one low spin', '$n$ three', '$n$ five high spin $d^{5}$', 'Diamagnetic zero'],
        answer: 2,
        explanation: 'Step 1: Recall $5.92$ rung for $n$ five. Step 2: Match $5.9$ reading. Step 3: Assign high spin five unpaired.'
      },
      {
        q: 'Acid added to yellow chromate gives:',
        options: ['Green precipitate only', 'Colourless solution', 'Metal chromium', 'Orange dichromate $Cr_{2}O_{7}$ two minus'],
        answer: 3,
        explanation: 'Step 1: Protonate $CrO_{4}$ two minus. Step 2: Condense two units minus water. Step 3: Observe orange $Cr_{2}O_{7}$ two minus.'
      }
    ]
  },
  // ---------------------------------------------------------------- 38.4
  {
    sectionId: 'chem-ch38-s4',
    readingTime: 10,
    intro: 'The $f$ block hides the lanthanoid contraction that quietly reorders the $d$ block below it. Fourteen $4f$ electrons shield poorly, so radii shrink across the series and zirconium mirrors hafnium. Lanthanoids rest at $+3$ with $Ce$ plus $4$ and $Eu$ plus $2$ exceptions, while actinoids spread $+3$ to $+7$ with full radioactivity.',
    objectives: [
      'Explain contraction by poor $f$ shielding with $Zr$ $Hf$ pair consequence',
      'List lanthanoid exceptions $Ce$ plus $4$ plus $Tb$ plus $4$ plus $Eu$ plus $2$',
      'Contrast actinoid wide states plus radioactivity with separation logic'
    ],
    concepts: [
      {
        term: 'Lanthanoid contraction cause',
        kind: 'definition',
        statement: 'A **poorly shielding 4f shell lets charge grip harder** `contraction` each added proton pulls the diffuse $4f$ cloud weakly, shrinking $M$ three plus steadily.',
        detail: 'Total fall is near $15$ percent across $La$ to $Lu$, so $3d$ to $4d$ jumps but $4d$ to $5d$ stalls. Missing $Eu$ and $Yb$ dips mark half and full shell $f^{7}$ plus $f^{14}$ preferences.'
      },
      {
        term: 'Contraction consequences',
        kind: 'theorem',
        statement: 'A **shrunk third row twins its second row partner** `twin-pairs` $Zr$ and $Hf$ share near equal radii and chemistry, as do $Nb$ $Ta$ and $Mo$ $W$.',
        detail: 'Basicity of hydroxides falls across the series with rising charge density, and separation needs tiny basicity gaps exploited by ion exchange. Density still climbs by mass packed in shrinking volume.'
      },
      {
        term: 'Lanthanoid states and colour',
        kind: 'law',
        statement: 'A **plus three core carries f-f colour and magnetism** `Ln-states` $Ce$ plus $4$ $f^{0}$ and $Tb$ plus $4$ $f^{7}$ oxidise while $Eu$ plus $2$ $f^{7}$ and $Yb$ plus $2$ $f^{14}$ reduce.',
        detail: '$La$ three plus $f^{0}$ and $Lu$ three plus $f^{14}$ stay colourless diamagnetic while the rest show sharp $f-f$ bands. Misch metal $Ce$ $La$ $Fe$ blend hardens steel and sparks lighters.'
      },
      {
        term: 'Actinoid spread and contraction',
        kind: 'insight',
        statement: 'A **5f series spans plus three to plus seven** `An-states` $U$ plus $6$ and $Np$ plus $7$ stand tall early, then $Am$ onward settles to $+3$ like lanthanoids.',
        detail: '$5f$ orbitals reach further out, so actinoid contraction runs deeper and complexing beats lanthanoids. Early actinoids hydrolyse hard and form oxocations $UO_{2}$ two plus plus $NpO_{2}$ plus.'
      },
      {
        term: 'Separation and fuel relevance',
        kind: 'method',
        statement: 'A **tiny radius gap is split by exchange and extraction** `separation` cation resin plus citrate elution orders lanthanoids by size, while $TBP$ solvent extraction parts $U$ and $Pu$ streams.',
        detail: '$U$ $235$ enrichment feeds reactors and $Pu$ $239$ breeds from $U$ $238$ capture, so reprocessing chemistry is actinoid separation at scale. Fission poisons and heat load ride the same partition logic.'
      }
    ],
    figures: [
      {
        caption: 'Poor $4f$ shielding shrinks $La$ to $Lu$ so $Zr$ twins $Hf$, with $Ln$ plus $3$ core plus $Ce$ $Eu$ exceptions and $An$ spread to plus $7$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lanthanoid contraction with twin pairs and actinoid spread"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">La to Lu shrink</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">4f shields poor</text><text x="130" y="178" text-anchor="middle" font-size="12" fill="currentColor">15 percent fall</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Zr twins Hf</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">same radius</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">same chemistry</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">An to plus 7</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">all radioactive</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">Ce plus 4 and Eu plus 2 break the plus 3 rule</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Zirconium hafnium twin call',
        problem: 'A mineral zircon carries hafnium that resists all precipitation splits. Explain with contraction data.',
        steps: [
          { label: 'Step 1', text: 'Compare radii:\n```text\nZr4+ near 72 pm, Hf4+ near 71 pm\n5d fall stalled by 4f contraction\nsame charge, same size\n```\nChemistry follows charge density, so the pair co precipitates.' },
          { label: 'Step 2', text: 'Show identical $+4$ hydrolysis and fluoride complexing for both.' },
          { label: 'Step 3', text: 'Split only by fractional crystallisation or ion exchange on tiny gaps.' }
        ],
        result: 'Contraction twins $Zr$ and $Hf$ so only fine methods part them.'
      },
      {
        title: 'Cerium four plus oxidant use',
        problem: 'Ceric ammonium nitrate titrates $Fe$ two plus to $Fe$ three plus cleanly. Justify with configuration.',
        steps: [
          { label: 'Step 1', text: 'Write $Ce$ plus $4$ as $f^{0}$ noble gas core dropping to $Ce$ plus $3$ $f^{1}$.' },
          { label: 'Step 2', text: 'Transfer one electron to $Fe$ two plus giving $Fe$ three plus plus $Ce$ plus $3$.' },
          { label: 'Step 3', text: 'Track the orange to colourless end point of the $Ce$ plus $4$ titre.' }
        ],
        result: '$Ce$ plus $4$ is a clean one electron oxidant by $f^{0}$ stability.'
      }
    ],
    keyTakeaways: [
      'Poor $4f$ shielding shrinks $La$ to $Lu$ by near $15$ percent overall.',
      '$Zr$ $Hf$ plus $Nb$ $Ta$ twin by stalled size growth down the group.',
      '$Ln$ rest at $+3$ with $Ce$ plus $4$, $Tb$ plus $4$, $Eu$ plus $2$ exceptions.',
      'Actinoids span $+3$ to $+7$ radioactive with exchange plus $TBP$ separation.'
    ],
    quiz: [
      {
        q: 'Lanthanoid contraction is caused by:',
        options: ['Poor $4f$ shielding letting charge grip', 'Strong $4f$ shielding pushing out', 'Loss of nuclear charge', 'Gain of extra shells'],
        answer: 0,
        explanation: 'Step 1: Add protons across $La$ to $Lu$. Step 2: Shield poorly with diffuse $4f$ electrons. Step 3: Contract $M$ three plus steadily.'
      },
      {
        q: '$Zr$ and $Hf$ share chemistry because:',
        options: ['Same mass number', 'Near equal radii by contraction', 'Same radioactivity', 'Same colour'],
        answer: 1,
        explanation: 'Step 1: Grow size $3d$ to $4d$ normally. Step 2: Stall $4d$ to $5d$ by $4f$ squeeze. Step 3: Match charge density and reactions.'
      },
      // PYQ-pattern: lanthanoid exception state drill
      {
        q: 'Strong oxidant among lanthanoids is:',
        options: ['$La$ plus $3$ inert', '$Gd$ plus $3$ resting', '$Ce$ plus $4$ $f^{0}$ dropping to $+3$', '$Lu$ plus $3$ resting'],
        answer: 2,
        explanation: 'Step 1: Write $Ce$ plus $4$ as $f^{0}$ core. Step 2: Drop to $f^{1}$ gaining an electron. Step 3: Oxidise $Fe$ two plus cleanly.'
      },
      {
        q: 'Actinoids differ from lanthanoids by:',
        options: ['Narrow $+3$ only states', 'No contraction', 'No complexing', 'Wide $+3$ to $+7$ states with full radioactivity'],
        answer: 3,
        explanation: 'Step 1: List $U$ plus $6$ and $Np$ plus $7$. Step 2: Note all isotopes radioactive. Step 3: Contrast with $Ln$ $+3$ calm core.'
      }
    ]
  }
]
