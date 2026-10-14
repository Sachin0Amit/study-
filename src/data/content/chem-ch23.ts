import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 23: Stereochemistry In Depth (Clayden 2e foci 14, 16, 32, 33, 41)
// Sections 23.1 - 23.4. Master study content in Clayden language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh23Content: SectionContent[] = [
  // ---------------------------------------------------------------- 23.1
  {
    sectionId: 'chem-ch23-s1',
    readingTime: 9,
    intro: 'Clayden treats conformation as the shape that decides reactivity: staggered alkanes, gauche penalties and cyclohexane chairs with axial and equatorial sites. Ring flips exchange every axial and equatorial pair without breaking bonds. This section quantifies A-values and uses them to place substituents equatorially.',
    objectives: [
      'Draw Newman projections with anti and gauche penalties and barrier heights',
      'Chair-flip cyclohexane and assign axial versus equatorial for each carbon',
      'Use A-values to predict the favoured conformer and equilibrium ratio'
    ],
    concepts: [
      {
        term: 'Staggered ethane and butane',
        kind: 'definition',
        statement: 'Staggered conformers minimise torsion by holding bonds **anti $180$ degrees** `Newman` apart, while eclipsed forms pay about $12$ kJ per mol in ethane and gauche butane pays about $3.8$ kJ per mol.',
        detail: 'Newman projection looks down the $C$-$C$ bond: three front plus three back bonds. Anti butane separates methyl groups; gauche brings them to $60$ degrees with steric compression.'
      },
      {
        term: 'Chair cyclohexane geometry',
        kind: 'definition',
        statement: 'The **chair** `chair` holds all $C$-$C$-$C$ angles near tetrahedral with alternating **axial** `axial` vertical and **equatorial** `equatorial` splayed bonds, avoiding angle and torsional strain together.',
        detail: 'Each carbon carries one axial and one equatorial bond; up and down alternate around the ring. Boat and twist-boat lie higher because eclipsing and flagpole contacts return.'
      },
      {
        term: 'Ring flip exchanges sites',
        kind: 'theorem',
        statement: '**Ring flip** `flip` converts every axial bond to equatorial and back through a half-chair barrier of about $45$ kJ per mol, fast at room temperature on the $NMR$ timescale.',
        detail: 'Cyclohexane itself flips a million times per second, so $NMR$ sees one averaged $CH_{2}$ signal. Substituted rings bias the equilibrium but still exchange rapidly unless frozen near $165$ K.'
      },
      {
        term: 'A-values measure axial cost',
        kind: 'law',
        statement: 'The **A-value** `A-value` $-\\Delta G$ for axial to equatorial transfer grows $CH_{3}$ about $7.6$ to $CH(CH_{3})_{2}$ about $9$ to $C(CH_{3})_{3}$ about $23$ kJ per mol with size.',
        detail: 'Axial methyl suffers two $1,3$-diaxial contacts with ring $CH_{2}$ groups. Tert-butyl locks the ring with the bulky group equatorial because the axial form is essentially absent.'
      },
      {
        term: 'Disubstituted ring equilibria',
        kind: 'insight',
        statement: '**Cis and trans disubstitution** `disubstituted` decides whether diequatorial is reachable: trans $1,2$ can be diequatorial while cis $1,2$ must be axial-equatorial in any chair.',
        detail: 'Trans $1,4$-dimethylcyclohexane sits diequatorial and dominates; cis $1,4$ pays one A-value either way. Menthone stereochemistry and sugar chairs follow the same diequatorial drive.'
      }
    ],
    figures: [
      {
        caption: 'Chair cyclohexane with axial vertical and equatorial splayed bonds; ring flip swaps every $ax$ to $eq$ and $1,3$-diaxial contacts penalise axial $CH_{3}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chair cyclohexane axial equatorial and ring flip scheme"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="150" text-anchor="middle" font-size="13" fill="currentColor">chair: ax vertical</text><text x="125" y="170" text-anchor="middle" font-size="12" fill="currentColor">eq splayed out</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">1,3-diaxial clash</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">ax-Me vs ring CH2</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">A-value cost</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">ring flip</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">ax becomes eq</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><line x1="125" y1="220" x2="125" y2="260" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="135" y="245" font-size="12" fill="currentColor">flip barrier about 45 kJ/mol</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Methylcyclohexane conformer ratio',
        problem: 'Methylcyclohexane has A-value about $7.6$ kJ per mol. Calculate the equatorial to axial ratio at $298$ K and state the $NMR$ appearance.',
        steps: [
          { label: 'Step 1', text: 'Write $K = e^{A \\to RT}$ with $A = 7600$ J per mol and $RT \\approx 2478$ J per mol:\n```text\nK = exp(7600 / RT) ~ exp(3.07) ~ 21.5\neq fraction = K/(1+K) ~ 95.6 percent\n```\nAxial pays two diaxial contacts.' },
          { label: 'Step 2', text: 'Ratio equatorial to axial is about $21$ to $1$, so the ring spends most time with $CH_{3}$ equatorial.' },
          { label: 'Step 3', text: 'Room temperature $NMR$ shows one averaged methyl signal because flip is fast; cooling near $165$ K splits axial and equatorial peaks.' }
        ],
        result: 'About $96$ percent equatorial at $298$ K with fast averaged $NMR$; frozen $NMR$ resolves both chairs.'
      },
      {
        title: 'Trans versus cis dimethylcyclohexane',
        problem: 'Compare trans-$1,4$-dimethylcyclohexane with cis-$1,4$-dimethylcyclohexane. Which has a diequatorial chair and which is forced axial-equatorial?',
        steps: [
          { label: 'Step 1', text: 'Draw both chairs: trans $1,4$ places one up and one down, matching diequatorial in one flip form.' },
          { label: 'Step 2', text: 'Cis $1,4$ places both up together, so one chair has upper axial and lower equatorial and the flip reverses them.' },
          { label: 'Step 3', text: 'Assign stability: trans isomer sits diequatorial and dominates; cis pays one methyl A-value in either chair.' }
        ],
        result: 'Trans $1,4$ is diequatorial and more stable; cis $1,4$ is axial-equatorial either way and higher in energy.'
      }
    ],
    keyTakeaways: [
      'Staggered anti beats eclipsed by about $12$ kJ per mol; gauche costs about $3.8$ kJ per mol.',
      'Chair holds axial vertical and equatorial splayed bonds with fast ring flip.',
      'A-values $CH_{3}$ to $C(CH_{3})_{3}$ quantify axial penalty and lock bulky groups equatorial.',
      'Trans $1,4$ can be diequatorial while cis $1,4$ must carry one axial group.'
    ],
    quiz: [
      {
        q: 'Cyclohexane ring flip interconverts:',
        options: ['Bonds by breaking $C$-$C$', 'Every axial to equatorial without breaking bonds', 'Chair to planar hexagon', 'Enantiomers only'],
        answer: 1,
        explanation: 'Step 1: Pass through half-chair without cleavage. Step 2: Swap each vertical bond to splayed. Step 3: Keep up and down labels while swapping $ax$ and $eq$.'
      },
      // PYQ-pattern: A-value equilibrium ratio drill
      {
        q: 'Tert-butylcyclohexane exists almost entirely as:',
        options: ['Equatorial tert-butyl chair', 'Axial tert-butyl chair', 'Boat with axial group', 'Twist-boat mixture equally'],
        answer: 0,
        explanation: 'Step 1: Read A-value near $23$ kJ per mol. Step 2: Compute $K$ far above one hundred. Step 3: Lock the bulky group equatorial.'
      },
      {
        q: 'Gauche butane lies above anti because of:',
        options: ['Angle strain only', 'Hydrogen bonding', 'Aromatic loss', 'Steric compression at $60$ degrees'],
        answer: 3,
        explanation: 'Step 1: Draw Newman down $C_{2}$ to $C_{3}$. Step 2: Bring methyls to $60$ degrees. Step 3: Penalise filled orbital repulsion by about $3.8$ kJ per mol.'
      },
      {
        q: 'Cis-$1,2$-dimethylcyclohexane in any chair is:',
        options: ['Diequatorial', 'Diaxial only', 'Axial-equatorial', 'Planar'],
        answer: 2,
        explanation: 'Step 1: Place both methyls on the same face. Step 2: Flip and track $ax$ to $eq$ swap. Step 3: Find one axial plus one equatorial in both chairs.'
      }
    ]
  },
  // ---------------------------------------------------------------- 23.2
  {
    sectionId: 'chem-ch23-s2',
    readingTime: 10,
    intro: 'Adding to a carbonyl next to a stereocentre creates a new stereocentre with a bias: the existing centre steers attack to one face. Clayden builds the Felkin-Anh model with the large group perpendicular to $C=O$ and the Bürgi-Dunitz approach from the open side. Chelation reverses the bias when a metal grips two oxygens.',
    objectives: [
      'Draw Felkin-Anh transition states with large, medium and small groups placed correctly',
      'Predict chelation controlled addition with $Zn^{2+}$ or $Ti$ gripping alkoxy aldehydes',
      'Read Zimmerman-Traxler chairs for aldol diastereoselectivity from enolate geometry'
    ],
    concepts: [
      {
        term: 'Felkin-Anh open chain model',
        kind: 'definition',
        statement: 'The **Felkin-Anh model** `Felkin-Anh` holds the largest alpha group perpendicular to $C=O$, with $Nu^{-}$ approaching at $107$ degrees past the small group to the carbonyl carbon.',
        detail: 'Bonds to the stereocentre align so the $\\sigma^{*}$ of the $C$-$L$ bond accepts electron density from the forming bond. The path past the small substituent minimises steric contact in the Bürgi-Dunitz trajectory.'
      },
      {
        term: 'Cram and chelation reversal',
        kind: 'law',
        statement: '**Chelation control** `chelation` with $ZnBr_{2}$ or $TiCl_{4}$ locks alkoxy aldehydes as five membered chelates, and $Nu^{-}$ attacks the exposed face opposite to the Felkin-Anh face.',
        detail: 'Alpha-benzyloxy aldehyde with non-chelating $BF_{3}$ follows Felkin-Anh; with $Zn^{2+}$ the metal bridges carbonyl and ether oxygens and delivers the reversed diastereomer.'
      },
      {
        term: 'Zimmerman-Traxler aldol chair',
        kind: 'theorem',
        statement: 'Boron enolates add through a **six membered Zimmerman-Traxler chair** `Zimmerman-Traxler` where $Z$-enolate gives syn aldol and $E$-enolate gives anti aldol.',
        detail: 'The aldehyde substituent sits pseudo-equatorial in the chair; enolate geometry transfers directly to syn and anti $C$-$OH$ to $C$-$R$ relationships. Dibutylboron triflate with $Et_{3}N$ is the classic $Z$-selective recipe.'
      },
      {
        term: 'Diastereomer versus enantiomer control',
        kind: 'notation',
        statement: '**Diastereoselectivity** `dr` reports the ratio of diastereomers from a racemic or achiral start, measured as $dr$ or $de$, separate from enantioselectivity $er$ and $ee$.',
        detail: 'A $95$ to $5$ $dr$ means the favoured chair or Felkin path beats the minor path by about $7$ kJ per mol at room temperature. $NMR$ coupling and $NOE$ assign syn and anti without separation.'
      },
      {
        term: 'Polar Felkin-Anh for electronegative groups',
        kind: 'insight',
        statement: 'Electronegative alpha atoms prefer the perpendicular slot for **$\\sigma^{*}$ acceptance** `polar`, so alpha-chloro aldehydes show stronger Felkin bias than simple alkyl cases.',
        detail: 'Cornforth style dipoles place $C$-$Cl$ anti to $C=O$ to minimise dipole clash, reinforcing the same face choice. The effect grows with $Cl$ and $OR$ electronegativity.'
      }
    ],
    figures: [
      {
        caption: 'Felkin-Anh attack past the small group with $L$ perpendicular to $C=O$; chelate locked aldehyde attacked from the opposite face; $Z$-enolate chair to syn aldol.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Felkin-Anh chelation and Zimmerman-Traxler selectivity schemes"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">Felkin-Anh</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">L perp, Nu past S</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">chelate locked</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">M grips O and OR</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">opposite face</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">Z-enolate chair</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">to syn aldol</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">large to small: L perp, M medium, S small</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Grignard addition to a chiral aldehyde',
        problem: '2-phenylpropanal $PhCH(CH_{3})CHO$ reacts with $MeMgBr$ under $BF_{3}$ conditions. Predict the major diastereomer by Felkin-Anh.',
        steps: [
          { label: 'Step 1', text: 'Rank alpha groups: $Ph$ large, $CH_{3}$ medium, $H$ small; place $Ph$ perpendicular to $C=O$:\n```text\nL = Ph perp to C=O\nM = Me gauche, S = H open\nNu past H at 107 deg\n```\nBürgi-Dunitz approach avoids $Ph$.' },
          { label: 'Step 2', text: 'Attack past $H$ gives the Felkin alcohol with new $OH$ anti to $Ph$ in the extended chain.' },
          { label: 'Step 3', text: 'Verify by switching to $ZnBr_{2}$ chelation if an alkoxy analogue were used: the opposite diastereomer would dominate.' }
        ],
        result: 'Felkin-Anh alcohol with $Me$ addition past hydrogen as the major diastereomer.'
      },
      {
        title: 'Boron aldol syn control',
        problem: 'Propiophenone dibutylboron $Z$-enolate adds to benzaldehyde. Predict syn versus anti and draw the chair.',
        steps: [
          { label: 'Step 1', text: 'Form $Z$-enolate with $Bu_{2}BOTf$ and $Et_{3}N$: methyl and phenyl cis across the enolate double bond.' },
          { label: 'Step 2', text: 'Chair $PhCHO$ phenyl pseudo-equatorial; $Z$-geometry places methyl and new $OH$ syn.' },
          { label: 'Step 3', text: 'Isolate syn aldol $PhCH(OH)CH(CH_{3})COPh$ with high $dr$ by $NMR$ coupling.' }
        ],
        result: 'Syn aldol from the $Z$-boron enolate through the Zimmerman-Traxler chair.'
      }
    ],
    keyTakeaways: [
      'Felkin-Anh places large $L$ perpendicular to $C=O$ and attacks past small $S$.',
      'Chelation with $Zn^{2+}$ locks $O$ to $OR$ and reverses facial choice.',
      '$Z$-enolates give syn aldols and $E$-enolates give anti aldols via chairs.',
      'Polar $C$-$Cl$ and $C$-$OR$ strengthen Felkin bias by $\\sigma^{*}$ acceptance.'
    ],
    quiz: [
      {
        q: 'Felkin-Anh major path attacks:',
        options: ['Past the small group with $L$ perpendicular to $C=O$', 'Past the large group directly', 'Through the carbonyl oxygen', 'Without any angle preference'],
        answer: 0,
        explanation: 'Step 1: Set $L$ perpendicular to the carbonyl plane. Step 2: Open the $S$ corridor for $107$ degree entry. Step 3: Form the bond with minimal steric clash.'
      },
      // PYQ-pattern: chelation reversal recognition drill
      {
        q: 'Adding $ZnBr_{2}$ to an alkoxy aldehyde addition usually:',
        options: ['Has no effect', 'Reverses diastereoselectivity by chelation', 'Stops reaction fully', 'Racemises the aldehyde'],
        answer: 1,
        explanation: 'Step 1: Bridge carbonyl $O$ and ether $O$ with $Zn^{2+}$. Step 2: Lock rotation into a rigid chelate. Step 3: Expose the opposite face to $Nu^{-}$.'
      },
      {
        q: '$Z$-boron enolate plus $PhCHO$ gives mainly:',
        options: ['Anti aldol', 'Enone directly', 'Syn aldol', 'No addition'],
        answer: 2,
        explanation: 'Step 1: Chair the enolate with $B$ bridging oxygens. Step 2: Transfer $Z$-geometry to the new $C$-$C$ bond. Step 3: Read syn $OH$ to $CH_{3}$ relationship.'
      },
      {
        q: 'Alpha-chloro aldehydes show strong Felkin bias because:',
        options: ['$Cl$ is small and ignored', '$Cl$ leaves before attack', '$Cl$ hydrogen bonds', '$C$-$Cl$ $\\sigma^{*}$ accepts electrons best perpendicular'],
        answer: 3,
        explanation: 'Step 1: Place $C$-$Cl$ perpendicular for overlap. Step 2: Donate forming bond density into $\\sigma^{*}$. Step 3: Stabilise the Felkin transition state electronically.'
      }
    ]
  },
  // ---------------------------------------------------------------- 23.3
  {
    sectionId: 'chem-ch23-s3',
    readingTime: 9,
    intro: 'Rings freeze rotation so faces are starkly different: one face is blocked by axial hydrogens while the other lies open. Clayden shows axial attack on cyclohexanones, stereoelectronic control in acetals and epoxide openings that must be trans diaxial. This section reads cyclic transition states directly from chair drawings.',
    objectives: [
      'Predict axial versus equatorial attack on substituted cyclohexanones',
      'Apply trans diaxial opening to epoxides and bromonium ions in rings',
      'Use anomeric and stereoelectronic effects to place heteroatoms axially'
    ],
    concepts: [
      {
        term: 'Axial attack on cyclohexanone',
        kind: 'law',
        statement: 'Small nucleophiles attack cyclohexanone **axially** `axial-attack` through a chair-like transition state that keeps the new bond staggered, while hindered attack goes equatorial.',
        detail: 'Hydride $NaBH_{4}$ on $4$-tert-butylcyclohexanone gives mainly the equatorial alcohol via axial approach. Bulky $L$-Selectride reverses to equatorial attack for steric reasons.'
      },
      {
        term: 'Trans diaxial opening rule',
        kind: 'theorem',
        statement: 'Epoxides and bromonium ions in six rings open **trans diaxially** `diaxial` because the $S_{N}2$ backside path demands axial $C$-$Nu$ and axial $C$-$X$ alignment.',
        detail: 'Cyclohexene oxide with $HBr$ gives trans diaxial bromohydrin first, which flips to diequatorial after. Diequatorial opening would twist the chair into a high energy boat transition state.'
      },
      {
        term: 'Anomeric effect in acetals',
        kind: 'law',
        statement: 'Electronegative groups alpha to oxygen prefer **axial** `anomeric` placement so an oxygen lone pair donates into $\\sigma^{*}$ of $C$-$X$, the anomeric effect.',
        detail: 'Glucose pentaacetate places $C_{1}$ acetate axial in the alpha anomer despite steric cost. The $n$ to $\\sigma^{*}$ overlap of about $8$ kJ per mol outweighs one diaxial penalty.'
      },
      {
        term: 'Stereoelectronic elimination needs antiperiplanar',
        kind: 'method',
        statement: '**E2 elimination** `antiperiplanar` in rings needs diaxial $H$ and leaving group antiperiplanar at $180$ degrees for $\\sigma$ to $\\sigma^{*}$ overlap.',
        detail: 'Menthyl chloride with $H$ diaxial to $Cl$ eliminates fast; neomenthyl chloride without that alignment reacts slowly. The chair drawing directly reports which proton can leave.'
      },
      {
        term: 'Iodonium and selenide face blocking',
        kind: 'insight',
        statement: 'Electrophiles add to the **open equatorial face** `face` of alkenes in rings, then nucleophiles open trans diaxially, setting two centres in one sequence.',
        detail: 'Bromine approaches methylcyclohexene from the less hindered face to give the bromonium bridge; bromide then opens axially. Selenoxide elimination later removes syn hydrogen from the same face.'
      }
    ],
    figures: [
      {
        caption: 'Axial $H^{-}$ attack on locked cyclohexanone to equatorial alcohol; epoxide $trans$ diaxial opening; axial anomeric acetate stabilised by $n$ to $\\sigma^{*}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cyclic stereocontrol with axial attack diaxial opening and anomeric effect"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">cyclohexanone</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">ax H- attack</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">epoxide opening</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">trans diaxial</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">then flip to dieq</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">anomeric OR ax</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">n to sigma-star</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><line x1="125" y1="200" x2="125" y2="260" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="135" y="240" font-size="12" fill="currentColor">staggered TS wins</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Hydride reduction of locked cyclohexanone',
        problem: '4-tert-butylcyclohexanone with $NaBH_{4}$ gives mainly one alcohol diastereomer. Predict axial versus equatorial $OH$ and explain.',
        steps: [
          { label: 'Step 1', text: 'Lock tert-butyl equatorial; draw chair ketone with two distinct faces:\n```text\naxial approach: staggered chair-like TS\n equatorial approach: twisted higher TS\nsmall H- prefers axial entry\n```\nTorsional staggering decides for small nucleophiles.' },
          { label: 'Step 2', text: 'Axial hydride delivery puts new $C$-$H$ axial and $C$-$OH$ equatorial in the product chair.' },
          { label: 'Step 3', text: 'Confirm by bulky hydride reversal: $L$-Selectride attacks equatorially to give axial alcohol by steric override.' }
        ],
        result: '$NaBH_{4}$ axial attack gives the equatorial alcohol as major; bulky hydride gives the axial alcohol.'
      },
      {
        title: 'Acid opening of cyclohexene oxide',
        problem: 'Cyclohexene oxide with aqueous $HClO_{4}$ gives trans diol. Draw the diaxial path and the final chair.',
        steps: [
          { label: 'Step 1', text: 'Protonate epoxide oxygen to $OH^{+}$ leaving group with $H_{2}O$ attacking antiperiplanar.' },
          { label: 'Step 2', text: 'Open trans diaxially to diaxial hydroxy product, the only backside geometry.' },
          { label: 'Step 3', text: 'Flip to diequatorial trans diol, the observed stable chair with both $OH$ equatorial.' }
        ],
        result: 'Trans diaxial opening then ring flip to diequatorial trans-$1,2$-diol.'
      }
    ],
    keyTakeaways: [
      'Small $Nu^{-}$ attacks cyclohexanone axially to equatorial alcohol via staggered chairs.',
      'Epoxide and bromonium openings in rings must be trans diaxial.',
      'Anomeric $n$ to $\\sigma^{*}$ donation places alpha $OR$ axial despite sterics.',
      'E2 in rings needs diaxial $H$ and $X$ antiperiplanar at $180$ degrees.'
    ],
    quiz: [
      {
        q: '$NaBH_{4}$ on locked cyclohexanone gives mainly:',
        options: ['Axial alcohol by equatorial attack', 'Equatorial alcohol by axial attack', 'Ring opened diol', 'No reduction'],
        answer: 1,
        explanation: 'Step 1: Compare chair-like versus twisted transition states. Step 2: Favour staggered axial entry for small $H^{-}$. Step 3: Place new $OH$ equatorial.'
      },
      // PYQ-pattern: diaxial opening prediction drill
      {
        q: 'Epoxide opening in cyclohexane must be:',
        options: ['Diequatorial directly', 'Syn to oxygen', 'Trans diaxial then flip', 'Radical only'],
        answer: 2,
        explanation: 'Step 1: Demand $S_{N}2$ backside at $180$ degrees. Step 2: Align $C$-$O$ bonds axially for overlap. Step 3: Flip the diaxial product to diequatorial.'
      },
      {
        q: 'Anomeric acetate prefers axial because:',
        options: ['Axial avoids all sterics', 'Axial is always stable', 'Hydrogen bonding only', 'Oxygen lone pair donates into $C$-$O$ $\\sigma^{*}$'],
        answer: 3,
        explanation: 'Step 1: Align $n$ antiperiplanar to $C$-$X$. Step 2: Donate into low $\\sigma^{*}$. Step 3: Gain about $8$ kJ per mol over steric cost.'
      },
      {
        q: 'Fast E2 in menthyl chloride needs:',
        options: ['$H$ and $Cl$ diaxial antiperiplanar', '$H$ and $Cl$ diequatorial syn', 'No alignment', 'Boat product always'],
        answer: 0,
        explanation: 'Step 1: Align $C$-$H$ $\\sigma$ with $C$-$Cl$ $\\sigma^{*}$. Step 2: Hold $180$ degree dihedral in the chair. Step 3: Expel $Cl^{-}$ with $\\pi$ formation.'
      }
    ]
  },
  // ---------------------------------------------------------------- 23.4
  {
    sectionId: 'chem-ch23-s4',
    readingTime: 9,
    intro: 'Making one mirror image selectively needs a chiral influence: a removable auxiliary, a chiral reagent or a chiral catalyst. Clayden previews Evans oxazolidinones that block one enolate face and proline plus metal catalysts that organise transition states. This section measures success with enantiomeric ratios and shows auxiliary removal without erosion.',
    objectives: [
      'Draw Evans imide enolate with blocked face and predict the alkylation stereochemistry',
      'Distinguish chiral auxiliary, stoichiometric reagent and catalytic asymmetric routes',
      'Calculate $er$ and $ee$ from ratios and plan auxiliary cleavage to acid or alcohol'
    ],
    concepts: [
      {
        term: 'Chiral auxiliary strategy',
        kind: 'definition',
        statement: 'A **chiral auxiliary** `auxiliary` attaches temporarily, directs face-selective reaction, then cleaves to release enantioenriched product and recovered helper.',
        detail: 'Evans oxazolidinone $N$-acyloxazolidinone forms a $Z$-boron enolate with one face shielded by benzyl or isopropyl. Alkylation then hydrolysis returns the auxiliary intact.'
      },
      {
        term: 'Evans alkylation face block',
        kind: 'method',
        statement: '**Evans $N$-acyl oxazolidinone** `Evans` with $Bu_{2}BOTf$ and $iPr_{2}NEt$ gives a chelated $Z$-enolate whose benzyl group blocks one face so $R$-$X$ enters the open face.',
        detail: 'Benzyl auxiliary delivers one absolute configuration; switching to the mirror auxiliary delivers the mirror product. Diastereomeric imides separate by chromatography before cleavage.'
      },
      {
        term: 'Enantiomeric ratio and excess',
        kind: 'notation',
        statement: '**Enantiomeric ratio $er$** `er` $major$ to $minor$ converts to **excess $ee$** `ee` $(major-minor)$ to $(major+minor)$ times $100$, read by chiral $HPLC$ or $NMR$ with shift reagents.',
        detail: 'An $er$ of $95$ to $5$ equals $90$ percent $ee$. Optical rotation alone cannot prove purity without a calibrated standard.'
      },
      {
        term: 'Catalytic asymmetric preview',
        kind: 'theorem',
        statement: '**Chiral catalysts** `catalyst` such as proline enamines and $BINAP$ metal complexes turn over many product molecules per chiral source through organised hydrogen bonded or chelated transition states.',
        detail: 'Proline catalysed intramolecular aldol via enamine sets the Wieland-Miescher ketone stereocentre. $Ru$-$BINAP$ hydrogenation reduces beta-keto esters with near complete $ee$ by face-selective hydride delivery.'
      },
      {
        term: 'Auxiliary removal without racemisation',
        kind: 'insight',
        statement: '**Mild cleavage** `cleavage` with $LiOH$ and $H_{2}O_{2}$ to acid or $LiBH_{4}$ to alcohol preserves the new stereocentre because no enolisable proton is removed harshly.',
        detail: 'Peroxide intercepts the exocyclic carbonyl without attacking the stereocentre. Strong hot base would equilibrate the alpha centre and erode $ee$, the classic auxiliary pitfall.'
      }
    ],
    figures: [
      {
        caption: 'Evans $Z$-enolate with benzyl shielding one face; $R$-$X$ enters open face; mild $LiOH$ and $H_{2}O_{2}$ cleavage to acid with recovered auxiliary.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Evans auxiliary face blocking and cleavage scheme"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">N-acyl oxazolidinone</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">Z-boron enolate</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">Bn blocks top face</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">R-X enters bottom</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">high dr imide</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">LiOH H2O2</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">acid + recovered aux</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">mirror auxiliary gives mirror product</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Evans methylation with face prediction',
        problem: 'Evans $N$-propionyl oxazolidinone with benzyl substituent forms the $Z$-boron enolate then $BnBr$. Predict the absolute sense and the cleavage product.',
        steps: [
          { label: 'Step 1', text: 'Chelate $B$ between imide carbonyls to lock $Z$-enolate; benzyl shields the top face:\n```text\nblocked = top by Bn\nopen = bottom face\nE+ = BnBr from bottom\n```\nOne diastereomeric chair dominates.' },
          { label: 'Step 2', text: 'Benzylation from below gives the diastereomeric imide with new methyl stereocentre set.' },
          { label: 'Step 3', text: 'Cleave with $LiOH$ and $H_{2}O_{2}$ to $2$-methyl-$3$-phenylpropanoic acid plus recovered auxiliary.' }
        ],
        result: 'Single imide diastereomer then enantioenriched acid; mirror auxiliary gives the mirror acid.'
      },
      {
        title: 'Proline catalysed intramolecular aldol preview',
        problem: 'Triketone with methyl at the ring junction undergoes proline catalysed Robinson style closure. State the catalyst role and the stereochemical outcome.',
        steps: [
          { label: 'Step 1', text: 'Proline forms an enamine with the side chain ketone, raising $HOMO$ and organising a hydrogen bonded chair.' },
          { label: 'Step 2', text: 'Intramolecular aldol closes to the Wieland-Miescher ketone precursor with the angular methyl directing face choice.' },
          { label: 'Step 3', text: 'Hydrolysis turns over proline and dehydration gives enone with high $ee$, the Hajos-Parrish preview.' }
        ],
        result: 'Catalytic enamine aldol sets the angular stereocentre with high $ee$ without stoichiometric auxiliary.'
      }
    ],
    keyTakeaways: [
      'Evans $N$-acyloxazolidinone $Z$-enolates alkylate from the unblocked face.',
      'Auxiliaries are stoichiometric and recovered; catalysts turn over many cycles.',
      '$er$ $major$ to $minor$ converts to $ee$ for chiral $HPLC$ and $NMR$ assay.',
      '$LiOH$ and $H_{2}O_{2}$ cleavage preserves $ee$ where harsh base would erode it.'
    ],
    quiz: [
      {
        q: 'Evans benzyl auxiliary directs $R$-$X$ to:',
        options: ['The blocked benzyl face', 'Carbonyl oxygen', 'The open face opposite benzyl', 'The auxiliary backbone randomly'],
        answer: 2,
        explanation: 'Step 1: Lock chelated $Z$-enolate geometry. Step 2: Shield one pi face with benzyl. Step 3: Bond $R$-$X$ from the exposed face.'
      },
      // PYQ-pattern: er to ee conversion drill
      {
        q: 'An $er$ of $95$ to $5$ equals $ee$ of:',
        options: ['$95$ percent', '$90$ percent', '$80$ percent', '$50$ percent'],
        answer: 1,
        explanation: 'Step 1: Subtract $95-5=90$. Step 2: Divide by $95+5=100$. Step 3: Multiply by $100$ to $90$ percent $ee$.'
      },
      {
        q: 'Mild Evans cleavage uses:',
        options: ['$LiOH$ with $H_{2}O_{2}$ to acid', 'Hot concentrated $NaOH$ only', 'Strong acid reflux always', 'Pyrolysis'],
        answer: 0,
        explanation: 'Step 1: Attack exocyclic carbonyl with peroxide. Step 2: Release acid without enolising the centre. Step 3: Recover auxiliary intact.'
      },
      {
        q: 'Proline catalysed aldol acts through:',
        options: ['Free radical chain', 'Benzyne intermediate', 'Carbocation rearrangement', 'Chiral enamine with hydrogen bonded chair'],
        answer: 3,
        explanation: 'Step 1: Condense proline to enamine. Step 2: Organise aldehyde by carboxylic hydrogen bond. Step 3: Close face-selectively and hydrolyse catalyst.'
      }
    ]
  }
]
