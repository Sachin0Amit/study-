import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse Chemistry — Chapter 9: Hydrocarbons and Oxygen Functional Groups
// Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const chemCh09Content: SectionContent[] = [
  // ---------------------------------------------------------------- 9.1
  {
    sectionId: 'chem-ch9-s1',
    readingTime: 8,
    intro: 'Alkanes, alkenes and alkynes form the reactive backbone of organic chemistry with predictable preparation and addition chemistry. Combustion, ozonolysis and acidity of terminal alkynes are recurring quantitative themes. This section maps routes and tests that convert between the three families.',
    objectives: [
      'Recall preparation routes for alkanes, alkenes and alkynes with reagents',
      'Predict ozonolysis fragments and addition products from alkene structure',
      'Use terminal alkyne acidity for salt formation and alkylation'
    ],
    concepts: [
      {
        term: 'Alkane preparations',
        kind: 'method',
        statement: 'Alkanes arise by **hydrogenation** of alkenes, **Wurtz coupling** of alkyl halides with `Na in dry ether`, and **decarboxylation** of sodium salts with `soda lime` as $CH_3COONa + NaOH \\to CH_4 + Na_2CO_3$. **Combustion** follows $C_xH_y + (x+y/4)O_2 \\to xCO_2 + (y/2)H_2O$ with large **exothermic heat**.',
        detail: 'Wurtz works best for symmetric even alkanes from primary halides. Kolbe electrolysis of carboxylates also extends chains at the anode. Cracking converts long chains into petrol range mixtures.'
      },
      {
        term: 'Alkene preparations and additions',
        kind: 'method',
        statement: 'Alkenes form by **dehydration** of alcohols with `conc H2SO4` and **dehydrohalogenation** with `alc KOH`, both favouring the **Zaitsev product**. They add $Br_2$, $HBr$ and water across the double bond, with **bromine decolourisation** of `orange Br2` serving as the **unsaturation test**.',
        detail: 'Dehydration order is tertiary over secondary over primary from cation stability. Oxymercuration gives Markovnikov alcohol cleanly. Cis hydroxylation with cold dilute $KMnO_4$ gives glycols.'
      },
      {
        term: 'Ozonolysis logic',
        kind: 'method',
        statement: '**Ozonolysis** cleaves each $C=C$ into two **carbonyl fragments**, so `each doubly bonded carbon becomes C=O` in the product set. Ethene gives two $HCHO$, while $CH_3CH=CHCH_3$ gives two $CH_3CHO$, making the method a **structure proof** read backwards from fragments.',
        detail: 'Reductive workup with $Zn$ and $H_2O$ stops at aldehydes and ketones. Oxidative workup pushes aldehydes to acids. Terminal alkenes release $HCHO$ as a telltale fragment.'
      },
      {
        term: 'Alkyne preparations',
        kind: 'method',
        statement: 'Alkynes form by **double dehydrohalogenation** of vicinal dihalides with `NaNH2 heat` and from **calcium carbide** by $CaC_2 + 2H_2O \\to C_2H_2 + Ca(OH)_2$ using `water on carbide`. Controlled **partial hydrogenation** with `Lindlar catalyst` stops at cis alkene while `Na in liquid NH3` gives trans alkene.',
        detail: 'Acetylene is the industrial starting point for vinyl chloride and chloroprene. Vicinal tetrahalides strip twice to the same alkyne. Pinacol type rearrangements are avoided by clean elimination conditions.'
      },
      {
        term: 'Terminal alkyne acidity',
        kind: 'law',
        statement: 'Terminal alkynes are **mild acids** with $pK_a$ near $25$, forming **acetylides** with `NaNH2 or ammoniacal Ag+` as $RC \\equiv CH + NaNH_2 \\to RC \\equiv CNa + NH_3$. The **silver acetylide test** gives a **white precipitate** with `Tollens type reagent`, distinguishing terminal from internal alkynes.',
        detail: 'Acidity order is $H_2O > ROH > RC \\equiv CH > NH_3 > RH$ from $s$ character. Acetylides alkylate with primary halides to extend chains. Internal alkynes lack the proton and stay silent in these tests.'
      }
    ],
    figures: [
      {
        caption: 'Ozonolysis cuts each $C=C$ into two $C=O$ fragments, so $CH_3CH=CHCH_3$ gives two $CH_3CHO$; terminal alkynes with $pK_a$ near 25 give white acetylides.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ozonolysis cleavage of an alkene into carbonyls"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">alkene + O3 then Zn/H2O: each C becomes C=O</text><line x1="80" y1="120" x2="280" y2="120" stroke="currentColor" stroke-width="4"/><text x="140" y="105" font-size="13" fill="currentColor" font-family="sans-serif">C = C</text><text x="60" y="150" font-size="13" fill="currentColor" font-family="sans-serif">CH3CH</text><text x="250" y="150" font-size="13" fill="currentColor" font-family="sans-serif">CHCH3</text><line x1="180" y1="120" x2="180" y2="180" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="185" y="175" font-size="13" fill="currentColor" font-family="sans-serif">cut</text><polygon points="180,185 174,197 186,197" fill="currentColor" stroke="none"/><text x="60" y="230" font-size="14" fill="currentColor" font-family="sans-serif">CH3CHO</text><text x="240" y="230" font-size="14" fill="currentColor" font-family="sans-serif">CH3CHO</text><line x1="80" y1="245" x2="160" y2="245" stroke="currentColor" stroke-width="3"/><line x1="80" y1="250" x2="160" y2="250" stroke="currentColor" stroke-width="1.5"/><line x1="260" y1="245" x2="340" y2="245" stroke="currentColor" stroke-width="3"/><line x1="260" y1="250" x2="340" y2="250" stroke="currentColor" stroke-width="1.5"/><text x="60" y="275" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">C=O</text><text x="400" y="110" font-size="14" fill="currentColor" font-family="sans-serif">terminal alkyne acidity</text><rect x="400" y="130" width="270" height="120" fill="none" stroke="currentColor" stroke-width="2"/><text x="415" y="160" font-size="13" fill="currentColor" font-family="sans-serif">RCCH + NaNH2 -&gt; RCCNa + NH3</text><text x="415" y="185" font-size="13" fill="currentColor" font-family="sans-serif">white Ag2C2 with ammoniacal Ag+</text><text x="415" y="210" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.8">triple bond stays intact</text><text x="40" y="320" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">ethene -&gt; 2 HCHO; use fragments to rebuild the alkene skeleton</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Ozonolysis structure puzzle',
        problem: 'An alkene $C_5H_{10}$ gives $HCHO$ plus $CH_3CH_2COCH_3$ on reductive ozonolysis. Deduce the alkene.',
        steps: [
          { label: 'Step 1', text: 'Read fragments with `C=O becomes C=C`: $HCHO$ came from $CH_2=$ end and $CH_3CH_2COCH_3$ from $(CH_3CH_2)(CH_3)C=$ end.' },
          { label: 'Step 2', text: 'Join the carbonyl carbons:\n```text\nCH2=  +  =C(CH3)(CH2CH3)\n=> CH2=C(CH3)CH2CH3\n```\nSo the alkene is $CH_2=C(CH_3)CH_2CH_3$ named 2-methylbut-1-ene.' },
          { label: 'Step 3', text: 'Check formula: $C_5H_{10}$ fits one double bond, and no other joining gives the same pair.' }
        ],
        result: 'Alkene is $CH_2=C(CH_3)CH_2CH_3$ (2-methylbut-1-ene).'
      },
      {
        title: 'Acetylide alkylation route',
        problem: 'Convert acetylene into but-2-yne using acetylide chemistry.',
        steps: [
          { label: 'Step 1', text: 'Deprotonate with `NaNH2`: $HC \\equiv CH + NaNH_2 \\to HC \\equiv CNa + NH_3$.' },
          { label: 'Step 2', text: 'Alkylate twice:\n```text\nHC#CNa + CH3Br -> HC#C-CH3 (propyne)\nHC#C-CH3 + NaNH2 -> -C#C-CH3, + CH3Br -> CH3C#CCH3\n```\nIn symbols $HC \\equiv CH \\to CH_3C \\equiv CH \\to CH_3C \\equiv CCH_3$.' },
          { label: 'Step 3', text: 'Use primary halides only, because secondary halides eliminate with the strongly basic acetylide.' }
        ],
        result: 'Double deprotonation and methylation converts acetylene into $CH_3C \\equiv CCH_3$.'
      }
    ],
    keyTakeaways: [
      'Wurtz, soda lime and carbide routes build the three families.',
      'Ozonolysis maps each C=C carbon to a C=O fragment.',
      'Lindlar gives cis and dissolving metal gives trans alkenes.',
      'Terminal alkynes form acetylides for tests and chain extension.'
    ],
    quiz: [
      {
        q: 'Reductive ozonolysis of $CH_3CH=CHCH_3$ gives what?',
        options: ['Two $HCHO$', 'Two $CH_3CHO$', `$HCHO + CH_3COCH_3$`, '$CH_3COOH$ only'],
        answer: 1,
        explanation: 'Step 1: Each alkene carbon becomes carbonyl. Step 2: Both ends are $CH_3CH=$ units. Step 3: Each gives $CH_3CHO$.'
      },
      // PYQ-pattern: ozonolysis fragment joining (rephrased, values changed)
      {
        q: 'An alkene gives $HCHO$ plus $CH_3CH_2COCH_3$. What was it?',
        options: [`$CH_2=C(CH_3)CH_2CH_3$`, `$CH_3CH=CHCH_2CH_3$`, `$CH_3CH_2CH=CHCH_3$`, `$Cyclopentane$`],
        answer: 0,
        explanation: 'Step 1: $HCHO$ signals a terminal $CH_2=$. Step 2: The ketone supplies $C(CH_3)(CH_2CH_3)$. Step 3: Join to $CH_2=C(CH_3)CH_2CH_3$.'
      },
      {
        q: 'Which reagent distinguishes terminal from internal alkynes?',
        options: ['`Bromine water`', '`Dilute NaOH`', '`Ammoniacal silver nitrate`', '`Lindlar catalyst`'],
        answer: 2,
        explanation: 'Step 1: Terminal alkynes have acidic protons. Step 2: Silver ion forms white acetylide. Step 3: Internal alkynes lack the proton and stay clear.'
      },
      {
        q: 'Lindlar hydrogenation of an alkyne gives what?',
        options: ['Alkane', 'Trans alkene', 'Dihalide', 'Cis alkene'],
        answer: 3,
        explanation: 'Step 1: Lindlar is poisoned palladium. Step 2: It stops after one addition. Step 3: Syn addition gives the cis alkene.'
      }
    ]
  },
  // ---------------------------------------------------------------- 9.2
  {
    sectionId: 'chem-ch9-s2',
    readingTime: 9,
    intro: 'Benzene resists addition but undergoes substitution that preserves its aromatic sextet. Stability comes from delocalisation that Huckel rule quantifies. This section organises aromaticity tests, the substitution mechanism and the directing logic that maps polysubstitution.',
    objectives: [
      'Apply Huckel counting to judge aromatic, antiaromatic and nonaromatic rings',
      'Draw the arenium ion mechanism for electrophilic substitution',
      'Predict orientation from activating versus deactivating directing groups'
    ],
    concepts: [
      {
        term: 'Huckel aromaticity',
        kind: 'law',
        statement: 'A planar conjugated ring is **aromatic** when it holds `4n + 2 pi electrons` delocalised over the loop, the **Huckel rule** with **planarity** and **conjugation** as companions. Benzene with $6$ pi electrons and cyclopentadienyl anion $C_5H_5^-$ with $6$ pi electrons pass, while planar cyclobutadiene with $4$ pi electrons is **antiaromatic**.',
        detail: 'Nonplanar or $sp^3$ interrupted rings are nonaromatic regardless of count. Tropylium $C_7H_7^+$ with six pi electrons is aromatic and stable. Frost circle mnemonics predict the orbital pattern quickly.'
      },
      {
        term: 'Electrophilic substitution mechanism',
        kind: 'method',
        statement: 'Substitution proceeds by **electrophile attack** forming a **sigma complex** arenium ion, then **proton loss** restoring aromaticity, written `Ar-H + E+ -> [Ar(H)E]+ -> Ar-E + H+`. The first step is **rate determining** because it breaks **aromatic delocalisation**, while the second step is fast.',
        detail: 'Nitronium $NO_2^+$, chloronium $Cl^+$ and sulphonium intermediates are typical electrophiles. Isotope studies show proton loss is not rate limiting. Addition products would destroy aromaticity permanently and are avoided.'
      },
      {
        term: 'Directing effects',
        kind: 'law',
        statement: '**Activators** donate electrons and direct **ortho and para**, such as `OH, NH2, alkyl` by resonance or hyperconjugation, while **deactivators** withdraw and direct **meta**, such as `NO2, CHO, COOH` by `-M or -I`. Halogens are the special case of **deactivating ortho para directors** by strong `-I` beating weak `+M`.',
        detail: 'Anilinium $NH_3^+$ turns meta directing on protonation. Phenoxide is powerfully activating. Multiple groups compete with the stronger activator controlling orientation.'
      },
      {
        term: 'Nitration sulfonation halogenation maps',
        kind: 'method',
        statement: 'Standard maps use `HNO3 plus H2SO4` for **nitration** via $NO_2^+$, `conc H2SO4` for **sulfonation** via $SO_3$, and `Cl2 with FeCl3` for **chlorination** via $Cl^+$. Toluene nitrates about $25$ times faster than benzene with **ortho para mix**, while nitrobenzene needs **vigorous heat** for meta entry.',
        detail: 'Sulfonation reverses on steaming, enabling blocking strategies. Alkylation needs dry $AlCl_3$ and acylation needs $RCOCl$ with $AlCl_3$. Side chain oxidation of alkyl benzenes gives benzoic acids.'
      },
      {
        term: 'Ring versus side chain choice',
        kind: 'insight',
        statement: 'Conditions select **ring substitution** versus **side chain attack**: `Lewis acid plus halogen` substitutes the ring, while `light or heat plus halogen` substitutes the side chain by **radical path**. Toluene with $Cl_2/FeCl_3$ gives **o and p chlorotoluene**, but with $Cl_2$ and light gives $C_6H_5CH_2Cl$ by **benzylic radical** route.',
        detail: 'Benzylic radicals and cations are resonance stabilised, favouring side routes. NBS brominates the benzylic position selectively. Vigorous oxidation levels any alkyl side chain to $COOH$.'
      }
    ],
    figures: [
      {
        caption: 'Electrophilic substitution keeps the $6\\pi$ sextet by passing through a $\\sigma$ complex, $Ar-H + E^+ \\to [Ar(H)E]^+ \\to Ar-E + H^+$; $OH$ directs ortho-para while $NO_2$ directs meta.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electrophilic aromatic substitution via sigma complex"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">benzene hexagon + E+: sigma complex then -H+</text><polygon points="120,120 90,170 110,220 150,220 170,170 140,120" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="130" cy="172" r="22" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="60" y="250" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">aromatic 6 pi</text><line x1="175" y1="172" x2="235" y2="172" stroke="currentColor" stroke-width="2"/><polygon points="235,172 227,166 227,178" fill="currentColor" stroke="none"/><text x="195" y="160" font-size="13" fill="currentColor" font-family="sans-serif">E+</text><polygon points="330,120 300,170 320,220 360,220 380,170 350,120" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="320" y="175" font-size="16" fill="currentColor" font-family="sans-serif">+</text><text x="300" y="250" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">arenium ion</text><line x1="385" y1="172" x2="445" y2="172" stroke="currentColor" stroke-width="2"/><polygon points="445,172 437,166 437,178" fill="currentColor" stroke="none"/><text x="395" y="160" font-size="13" fill="currentColor" font-family="sans-serif">-H+</text><polygon points="540,120 510,170 530,220 570,220 590,170 560,120" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="535" y="175" font-size="14" fill="currentColor" font-family="sans-serif">E</text><text x="510" y="250" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">Ar-E restored sextet</text><text x="40" y="290" font-size="13" fill="currentColor" font-family="sans-serif">activators OH, NH2 -&gt; o/p; deactivators NO2, CHO -&gt; meta</text><path d="M40,305 Q360,280 680,305" fill="none" stroke="currentColor" stroke-width="2"/><text x="280" y="330" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">first step is rate-determining</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Directing prediction',
        problem: 'Predict the major nitration product of phenol versus nitrobenzene.',
        steps: [
          { label: 'Step 1', text: 'Classify groups with `director test`: $OH$ is strong activator ortho para, $NO_2$ is strong deactivator meta.' },
          { label: 'Step 2', text: 'Map products:\n```text\nphenol + dilute HNO3 -> o + p nitrophenol, fast at low T\nnitrobenzene + HNO3/H2SO4 -> m-dinitrobenzene, needs heat\n```\nIn symbols $C_6H_5OH \\to o/p$-$O_2NC_6H_4OH$ and $C_6H_5NO_2 \\to m$-$C_6H_4(NO_2)_2$.' },
          { label: 'Step 3', text: 'Rate contrast is stark: phenol reacts without added sulphuric acid while nitrobenzene resists even mixed acid at room conditions.' }
        ],
        result: 'Phenol gives ortho para nitration readily; nitrobenzene gives meta dinitration only under vigorous conditions.'
      },
      {
        title: 'Aromaticity judgment',
        problem: 'Judge benzene, cyclobutadiene (planar) and cyclooctatetraene (tub shaped) by Huckel logic.',
        steps: [
          { label: 'Step 1', text: 'Count pi electrons with `4n+2 test`: benzene $6$, cyclobutadiene $4$, tub octatetraene $8$.' },
          { label: 'Step 2', text: 'Add geometry:\n```text\nbenzene: planar, 6 => aromatic\ncyclobutadiene planar 4 => antiaromatic\ntub COT: nonplanar 8 => nonaromatic\n```\nPlanarity failure saves octatetraene from antiaromaticity.' },
          { label: 'Step 3', text: 'Stability follows aromatic over nonaromatic over antiaromatic, matching heats of hydrogenation.' }
        ],
        result: 'Benzene aromatic, planar cyclobutadiene antiaromatic, tub octatetraene nonaromatic.'
      }
    ],
    keyTakeaways: [
      'Aromatic needs planar loop with 4n+2 pi electrons.',
      'Substitution goes via arenium ion then proton loss.',
      'Activators direct ortho para; deactivators direct meta.',
      'Ring versus side chain follows ionic versus radical conditions.'
    ],
    quiz: [
      {
        q: 'Which species is aromatic?',
        options: ['Benzene', 'Planar cyclobutadiene', 'Tub cyclooctatetraene', 'Cyclohexane'],
        answer: 0,
        explanation: 'Step 1: Check planar conjugated loop. Step 2: Count pi electrons against $4n+2$. Step 3: Only benzene with six satisfies both.'
      },
      {
        q: 'Phenol nitration mainly gives what?',
        options: ['Meta nitrophenol', 'Ortho and para nitrophenol', 'Trinitromethane', 'Benzoic acid'],
        answer: 1,
        explanation: 'Step 1: $OH$ is a strong activator. Step 2: Activators direct ortho and para. Step 3: Hence ortho plus para products dominate.'
      },
      // PYQ-pattern: directing order for electrophilic substitution (rephrased, values changed)
      {
        q: 'Which group is meta directing?',
        options: [`$OH$`, `$CH_3$`, `$NO_2$`, '$Cl$ for orientation class'],
        answer: 2,
        explanation: 'Step 1: Sort by electron donation versus withdrawal. Step 2: $NO_2$ withdraws strongly by $-M$. Step 3: Strong withdrawers direct meta.'
      },
      {
        q: 'Toluene with $Cl_2$ and light gives what?',
        options: ['o-chlorotoluene', 'Chlorobenzene', 'Benzoyl chloride', '$C_6H_5CH_2Cl$ by side chain radical path'],
        answer: 3,
        explanation: 'Step 1: Light favours radicals. Step 2: Benzylic radical is resonance stabilised. Step 3: Side chain chlorination gives $C_6H_5CH_2Cl$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 9.3
  {
    sectionId: 'chem-ch9-s3',
    readingTime: 9,
    intro: 'Haloalkanes turn a poor leaving group into versatile substitution and elimination chemistry. Alcohols and phenols differ sharply in acidity, while ethers are cleaved only by strong acids. This section links reactivity order, the Lucas distinction and Williamson ether construction.',
    objectives: [
      'Rank haloalkane reactivity and pick substitution versus elimination reagents',
      'Distinguish alcohol classes with Lucas timing and phenol acidity tests',
      'Plan ethers by Williamson route and predict acid cleavage fragments'
    ],
    concepts: [
      {
        term: 'Haloalkane reactivity',
        kind: 'law',
        statement: 'Reactivity follows **$R-I > R-Br > R-Cl > R-F$** from **bond strength**, and **tertiary over secondary over primary** from **cation stability** in ionising paths. Aqueous `KOH gives alcohols` by substitution while alcoholic `KOH gives alkenes` by elimination, the classic **medium switch**.',
        detail: 'Bond dissociation falls from fluoride to iodide. Polar protic media favour SN1 and E1 for tertiary halides, polar aprotic media favour SN2 for primary halides. Vicinal dihalides eliminate twice to alkynes.'
      },
      {
        term: 'Lucas test',
        kind: 'method',
        statement: 'The **Lucas reagent** of `conc HCl plus ZnCl2` converts alcohols via carbocations, so **tertiary alcohols cloud immediately**, **secondary cloud within minutes** and **primary stay clear** on warming. The turbidity is insoluble `R-Cl` separating, with rate tertiary over secondary over primary.',
        detail: 'The test fails for easily oxidised or polyfunctional substrates. Phenols do not respond because aryl cations are inaccessible. Anhydrous $ZnCl_2$ boosts ionisation dramatically.'
      },
      {
        term: 'Alcohol versus phenol acidity',
        kind: 'law',
        statement: '**Phenols** are about a million times more acidic than **alcohols** because **phenoxide delocalises** into the ring while `alkoxide stays localised`. Phenol turns **blue litmus red** and liberates $CO_2$ from **carbonate only when** electron withdrawing groups assist, whereas alcohols need **active metals** to release $H_2$ as $2ROH + 2Na \\to 2RONa + H_2$.',
        detail: 'Nitro phenols are strong enough for carbonate effervescence. Alcohol acidity rises with electron withdrawal and falls with branching. Williamson precursors exploit alkoxide nucleophilicity.'
      },
      {
        term: 'Williamson synthesis',
        kind: 'method',
        statement: 'The **Williamson route** couples an **alkoxide** with a **primary halide** as `R-ONa + R-X \\to R-O-R + NaX` by clean SN2. Pair the **less hindered halide** with the alkoxide, because tertiary halides **eliminate** instead of substituting under the basic conditions.',
        detail: 'Silver oxide variant suits sensitive substrates. Intramolecular version closes cyclic ethers. Phenoxide plus allyl halide sets up Claisen rearrangement precursors.'
      },
      {
        term: 'Ether cleavage',
        kind: 'method',
        statement: '**Ethers cleave** with excess `HI or HBr` by initial **protonation** then **nucleophilic attack**, giving `alkyl iodide plus alcohol` first and two iodides with excess. Unsymmetrical ethers split so the **smaller alkyl forms iodide** normally, but **tert butyl ethers** release `tert butyl iodide` via **cation path**.',
        detail: 'Cold concentrated acids react sluggishly except with benzylic ethers. Aryl alkyl ethers cut at the alkyl side preserving phenol. The Zeisel method quantifies alkoxy groups this way.'
      }
    ],
    figures: [
      {
        caption: 'Lucas reagent $HCl + ZnCl_2$ clouds at once for $3^\\circ$ alcohols, within minutes for $2^\\circ$, and stays clear for $1^\\circ$; phenol is far more acidic than alkanols.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lucas test tubes for tertiary secondary primary alcohols"><text x="60" y="40" font-size="14" fill="currentColor" font-family="sans-serif">Lucas test: turbidity = RCl formation</text><rect x="60" y="70" width="70" height="140" fill="none" stroke="currentColor" stroke-width="2"/><rect x="60" y="150" width="70" height="60" fill="currentColor" stroke="none" opacity="0.25"/><line x1="60" y1="150" x2="130" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><text x="55" y="235" font-size="12" fill="currentColor" font-family="sans-serif">3 deg: instant cloud</text><rect x="250" y="70" width="70" height="140" fill="none" stroke="currentColor" stroke-width="2"/><rect x="250" y="175" width="70" height="35" fill="currentColor" stroke="none" opacity="0.15"/><text x="245" y="235" font-size="12" fill="currentColor" font-family="sans-serif">2 deg: slow cloud</text><rect x="440" y="70" width="70" height="140" fill="none" stroke="currentColor" stroke-width="2"/><text x="435" y="235" font-size="12" fill="currentColor" font-family="sans-serif">1 deg: stays clear</text><text x="60" y="270" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">R3COH -&gt; R3C+ fast; RCH2OH needs heat</text><rect x="60" y="290" width="450" height="45" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="75" y="318" font-size="13" fill="currentColor" font-family="sans-serif">phenol + NaOH soluble, + FeCl3 violet; alcohol neutral</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Substitution versus elimination choice',
        problem: 'Choose products for $CH_3CH_2Br$ with aqueous $KOH$ versus alcoholic $KOH$, and for $(CH_3)_3CBr$ with aqueous medium.',
        steps: [
          { label: 'Step 1', text: 'Read reagent with `medium rule`: aqueous favours substitution, alcoholic favours elimination.' },
          { label: 'Step 2', text: 'Write outcomes:\n```text\nCH3CH2Br + aq KOH -> CH3CH2OH (SN2)\nCH3CH2Br + alc KOH -> CH2=CH2 (E2)\n(CH3)3CBr + aq -> (CH3)3COH (SN1)\n```\nIn symbols $CH_3CH_2Br + OH^- \\to CH_3CH_2OH$ versus $CH_2=CH_2$.' },
          { label: 'Step 3', text: 'Tertiary halide ionises readily, so even weak aqueous nucleophile captures the cation before elimination dominates without heat.' }
        ],
        result: 'Aqueous gives alcohols, alcoholic gives alkenes; tertiary favours SN1 alcohol in water.'
      },
      {
        title: 'Williamson planning',
        problem: 'Plan $CH_3OCH_2CH_3$ by Williamson and explain the wrong halide pairing.',
        steps: [
          { label: 'Step 1', text: 'Pick `alkoxide plus primary halide`: $CH_3ONa + CH_3CH_2Br \\to CH_3OCH_2CH_3 + NaBr$ works by SN2.' },
          { label: 'Step 2', text: 'Reject the hindered reverse:\n```text\nCH3CH2ONa + (CH3)3CBr -> elimination to isobutene, not ether\n```\nTertiary halides eliminate with basic alkoxides.' },
          { label: 'Step 3', text: 'General rule: halide must be methyl or primary; alkoxide can be any substitution grade.' }
        ],
        result: 'Use $CH_3ONa$ plus ethyl bromide; avoid tertiary halides as the electrophile.'
      }
    ],
    keyTakeaways: [
      'Halide order is iodide over bromide over chloride from bond energy.',
      'Aqueous KOH substitutes; alcoholic KOH eliminates.',
      'Lucas times tertiary instant, secondary slow and primary silent.',
      'Williamson needs primary halide; ethers cleave with HI.'
    ],
    quiz: [
      {
        q: 'Which halide reacts fastest by SN1?',
        options: [`$CH_3Br$`, `$CH_3CH_2Br$`, `$(CH_3)_2CHBr$`, `$(CH_3)_3CBr$`],
        answer: 3,
        explanation: 'Step 1: SN1 rate follows cation stability. Step 2: Tertiary cations are most stable. Step 3: Hence tertiary bromide leads.'
      },
      // PYQ-pattern: Lucas turbidity timing (rephrased, values changed)
      {
        q: 'Lucas reagent gives immediate turbidity with which alcohol?',
        options: ['Ethanol', '2-propanol', '2-methyl-2-propanol', 'Phenol'],
        answer: 2,
        explanation: 'Step 1: Turbidity rate follows cation stability. Step 2: Tertiary forms instantly. Step 3: 2-methyl-2-propanol is tertiary.'
      },
      {
        q: 'Best Williamson pair for ethyl methyl ether?',
        options: [`$CH_3ONa + CH_3CH_2Br$`, `$CH_3CH_2ONa + (CH_3)_3CBr$`, '$C_2H_5OH + CH_3OH$ alone', '$(CH_3)_3CONa + CH_3CH_2Br$ with bulky clash'],
        answer: 0,
        explanation: 'Step 1: Halide must be primary for SN2. Step 2: First pair meets this. Step 3: Tertiary halide in other pairs eliminates.'
      },
      {
        q: '$CH_3OCH_2CH_3$ with excess $HI$ gives what?',
        options: [`$CH_3OH + CH_3CH_2OH$`, `$CH_3I + CH_3CH_2I$`, `$CH_3CHO + CH_4$`, 'No reaction'],
        answer: 1,
        explanation: 'Step 1: Acid protonates oxygen. Step 2: Iodide attacks. Step 3: Excess converts both fragments to iodides.'
      }
    ]
  },
  // ---------------------------------------------------------------- 9.4
  {
    sectionId: 'chem-ch9-s4',
    readingTime: 10,
    intro: 'Carbonyl compounds add nucleophiles to the polar double bond and then dehydrate, oxidise or condense along textbook paths. Carboxylic acids are far more acidic than phenols and interconvert with their derivatives. This section unifies addition, aldol, Cannizzaro and acidity trends.',
    objectives: [
      'Draw nucleophilic addition with acid catalysis and dehydration branches',
      'Separate aldol versus Cannizzaro substrates by alpha hydrogen presence',
      'Rank acid strength and interconvert acids with esters, chlorides and amides'
    ],
    concepts: [
      {
        term: 'Nucleophilic addition',
        kind: 'law',
        statement: 'The **carbonyl carbon** is electrophilic from **polar $C=O$**, so `Nu- attacks C, H+ caps O` giving an **addition intermediate** that may **dehydrate** with nitrogen nucleophiles. Aldehydes react faster than ketones from **less crowding** plus **less donation**, and $HCHO$ leads the order as `HCHO > CH3CHO > (CH3)2CO`.',
        detail: 'HCN, $NaHSO_3$ and Grignard reagents add cleanly. Imine, oxime and hydrazone formation follows addition then water loss. Acid protonates oxygen to boost electrophilicity.'
      },
      {
        term: 'Aldol condensation',
        kind: 'method',
        statement: 'The **aldol reaction** joins two enolisable carbonyls with `dilute NaOH` via **enolate attack**, such as $2CH_3CHO \\to CH_3CH(OH)CH_2CHO$ then dehydration to **crotonaldehyde** $CH_3CH=CHCHO$. Only **alpha hydrogens** permit the path, using `enolisable aldehyde or ketone` as donor.',
        detail: 'Crossed aldol with $HCHO$ gives single products because formaldehyde lacks alpha hydrogens. Heating dehydrates to conjugated enals. Intramolecular aldol closes five and six membered rings rapidly.'
      },
      {
        term: 'Cannizzaro reaction',
        kind: 'method',
        statement: 'The **Cannizzaro reaction** disproportionates aldehydes **without alpha hydrogens** with `conc KOH` into **alcohol plus carboxylate**, as $2HCHO \\to CH_3OH + HCOO^-$ via **hydride transfer**. Benzaldehyde similarly gives $C_6H_5CH_2OH$ plus $C_6H_5COO^-$ with no **aldol competition**.',
        detail: 'One molecule oxidises while another reduces. Intramolecular version works for dialdehydes like glyoxal. Alpha hydrogen aldehydes prefer aldol under dilute base instead.'
      },
      {
        term: 'Acid strength trends',
        kind: 'law',
        statement: '**Carboxylic acids** beat phenols and alcohols because **carboxylate resonance** spreads charge over two oxygens as `O-C-O equivalent`. Electron withdrawing groups raise strength, so $Cl_3CCOOH > ClCH_2COOH > CH_3COOH$ by **inductive pull**, while **ortho substituted** benzoic acids jump by the **ortho effect**.',
        detail: 'Formic acid is strongest among simple alkyl acids from minimal donation. Aromatic acids follow substituent directing logic. Dicarboxylic first dissociation always exceeds mono analogues.'
      },
      {
        term: 'Derivatives interconversion',
        kind: 'method',
        statement: 'Acid derivatives follow **reactivity $RCOCl > (RCO)_2O > RCOOR > RCONH_2$** by **leaving group ability**, interconverted with `SOCl2 for chlorides`, `alcohol plus acid for esters` and `NH3 for amides`. Esters hydrolyse by **saponification** with $RCOOR + NaOH \\to RCOONa + ROH$ to make **soap**.',
        detail: 'Acid chlorides react violently with water and alcohols. Transesterification swaps alkoxy groups under acid or base. Reduction with $LiAlH_4$ reaches primary alcohols from every derivative.'
      }
    ],
    figures: [
      {
        caption: 'Nucleophiles attack the polar $C=O$ carbon to give a tetrahedral intermediate; enolisable aldehydes then do aldol addition while $HCHO$ without $\\alpha$-H does Cannizzaro.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carbonyl addition and aldol versus Cannizzaro choice"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">Nu- to C, H+ to O: tetrahedral intermediate</text><line x1="80" y1="110" x2="150" y2="110" stroke="currentColor" stroke-width="3"/><line x1="80" y1="115" x2="150" y2="115" stroke="currentColor" stroke-width="1.5"/><text x="60" y="100" font-size="13" fill="currentColor" font-family="sans-serif">C=O</text><text x="160" y="100" font-size="13" fill="currentColor" font-family="sans-serif">+ Nu-</text><line x1="220" y1="112" x2="260" y2="112" stroke="currentColor" stroke-width="2"/><polygon points="260,112 252,106 252,118" fill="currentColor" stroke="none"/><text x="280" y="118" font-size="13" fill="currentColor" font-family="sans-serif">C(-O-)(-Nu) tetrahedron</text><circle cx="310" cy="160" r="6" fill="none" stroke="currentColor" stroke-width="2"/><line x1="310" y1="166" x2="310" y2="190" stroke="currentColor" stroke-width="2"/><text x="40" y="220" font-size="13" fill="currentColor" font-family="sans-serif">aldol: 2 CH3CHO --dil NaOH--&gt; CH3CH(OH)CH2CHO</text><rect x="40" y="235" width="320" height="70" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="55" y="260" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">needs alpha-H; dehydrates to crotonaldehyde</text><text x="55" y="282" font-size="12" fill="currentColor" font-family="sans-serif">Cannizzaro: 2 HCHO --conc KOH--&gt; CH3OH + HCOO-</text><text x="400" y="220" font-size="13" fill="currentColor" font-family="sans-serif">acid strength:</text><text x="400" y="242" font-size="13" fill="currentColor" font-family="sans-serif">RCOOH &gt; phenol &gt; ROH</text><text x="400" y="264" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">Cl3CCOOH strongest</text><text x="400" y="290" font-size="12" fill="currentColor" font-family="sans-serif">RCOCl &gt; anhydride</text><text x="400" y="310" font-size="12" fill="currentColor" font-family="sans-serif">&gt; ester &gt; amide</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Aldol versus Cannizzaro call',
        problem: 'Decide aldol or Cannizzaro for $CH_3CHO$ with dilute $NaOH$ versus $HCHO$ with concentrated $KOH$ and $C_6H_5CHO$ similarly.',
        steps: [
          { label: 'Step 1', text: 'Check `alpha hydrogen`: $CH_3CHO$ has three, $HCHO$ and $C_6H_5CHO$ have none.' },
          { label: 'Step 2', text: 'Assign paths:\n```text\nCH3CHO + dil NaOH -> aldol, then crotonaldehyde\nHCHO + conc KOH -> CH3OH + HCOO- (Cannizzaro)\nC6H5CHO + conc KOH -> C6H5CH2OH + C6H5COO-\n```\nSo $2CH_3CHO \\to CH_3CH=CHCHO + H_2O$ after heating.' },
          { label: 'Step 3', text: 'Base strength matters too: dilute favours enolate, concentrated favours hydride transfer for the eligible substrates.' }
        ],
        result: 'Enolisable $CH_3CHO$ gives aldol; $HCHO$ and $C_6H_5CHO$ give Cannizzaro pairs.'
      },
      {
        title: 'Acid strength ranking',
        problem: 'Rank $CH_3COOH$, $ClCH_2COOH$, $Cl_3CCOOH$ and $C_6H_5COOH$ by acidity.',
        steps: [
          { label: 'Step 1', text: 'Apply `inductive count`: more chlorines mean stronger pull, so $Cl_3CCOOH$ tops the aliphatic trio.' },
          { label: 'Step 2', text: 'Order:\n```text\nCl3CCOOH > ClCH2COOH > C6H5COOH > CH3COOH (typical Ka trend)\n```\nBenzoic beats acetic from $sp^2$ withdrawal but loses to chloro acids.' },
          { label: 'Step 3', text: 'Conjugate stability mirrors the order: $Cl_3CCOO^-$ spreads best assisted by induction, $CH_3COO^-$ least.' }
        ],
        result: 'Acidity $Cl_3CCOOH > ClCH_2COOH > C_6H_5COOH > CH_3COOH$.'
      }
    ],
    keyTakeaways: [
      'Carbonyl order is HCHO over aldehyde over ketone for addition.',
      'Alpha H plus dilute base gives aldol; no alpha H plus conc base gives Cannizzaro.',
      'Acid strength tracks carboxylate stabilisation and inductive pull.',
      'Derivative reactivity falls from chloride to amide via leaving ability.'
    ],
    quiz: [
      // PYQ-pattern: aldol versus Cannizzaro substrate call (rephrased, values changed)
      {
        q: 'Which aldehyde undergoes Cannizzaro with concentrated $KOH$?',
        options: [`$CH_3CHO$`, `$CH_3CH_2CHO$`, `$C_6H_5CHO$`, `$CH_3COCH_3$`],
        answer: 2,
        explanation: 'Step 1: Cannizzaro needs no alpha hydrogen. Step 2: Benzaldehyde lacks alpha hydrogens. Step 3: Others enolise and prefer aldol.'
      },
      {
        q: 'Aldol product of two $CH_3CHO$ after heating is what?',
        options: [`$CH_3CH=CHCHO$`, `$CH_3COOH + CH_3CH_2OH$`, `$HCHO + HCOOH$`, `$(CH_3)_2CO$`],
        answer: 0,
        explanation: 'Step 1: Enolate attacks second aldehyde. Step 2: Aldol forms first. Step 3: Dehydration gives crotonaldehyde $CH_3CH=CHCHO$.'
      },
      {
        q: 'Strongest acid among $CH_3COOH$, $ClCH_2COOH$, $Cl_3CCOOH$?',
        options: [`$CH_3COOH$`, `$ClCH_2COOH$`, 'All equal', `$Cl_3CCOOH$`],
        answer: 3,
        explanation: 'Step 1: Chlorine withdraws by $-I$. Step 2: More chlorines pull harder. Step 3: Trichloro acid is strongest.'
      },
      {
        q: 'Saponification of $RCOOR$ with $NaOH$ gives what?',
        options: [`$RCOCl + ROH$`, `$RCOONa + ROH$`, `$RCONH_2 + ROH$`, `$RH + CO_2$`],
        answer: 1,
        explanation: 'Step 1: Hydroxide attacks the ester carbonyl. Step 2: Alkoxide leaves. Step 3: Carboxylate salt plus alcohol remain.'
      }
    ]
  }
]
