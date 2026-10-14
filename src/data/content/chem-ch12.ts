import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 12: Coordination Compounds
// Sections 12.1 - 12.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ and $$...$$ pipeline.
// ============================================================================

export const chemCh12Content: SectionContent[] = [
  // ---------------------------------------------------------------- 12.1
  {
    sectionId: 'chem-ch12-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Coordination nomenclature and isomer counting with symmetry',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Octahedral and square planar isomer selection rules',
            body: 'The **isomer theorem** states that square planar $MA_2B_2$ shows cis trans pairs while octahedral $MA_4B_2$ shows cis trans plus $MA_3B_3$ shows facial meridional pairs, with optical activity when chelate arrangements lack improper symmetry. Tetrahedral complexes with four different donors are chiral in principle but racemize readily, so optical resolution concentrates on octahedral chelates. Counting before drawing prevents missing the meridional form that novices routinely overlook.'
          },
          {
            kind: 'derivation',
            heading: 'Systematic naming as an algorithm',
            body: 'Name ligands alphabetically with multiplicative prefixes ignored for ordering, append metal with oxidation state in roman numerals, and close with anion suffixes for anionic spheres. Bridging ligands carry a `mu` prefix and count once per bridge, while aqua ammine carbonyl and nitrosyl replace water ammonia carbon monoxide and nitric oxide. Running this algorithm turns any line formula into one unambiguous name that crystallographic databases accept without revision.'
          },
          {
            kind: 'example',
            heading: 'Sorting ionization linkage and geometric isomers',
            body: 'A pair differing only in outside versus inside anions is ionization isomerism, while nitro versus nitrito bonding is linkage isomerism diagnosed by infrared shifts. For $MA_2B_2$ square planar geometry draw cis adjacent and trans opposite forms, and for $MA_3B_3$ octahedral geometry separate facial clusters from meridional arcs. Chelate optical pairs then complete the set, with ethylenediamine complexes providing the classic resolvable example.'
          }
        ]
      }
    ],
    readingTime: 7,
    intro: 'A coordination entity bundles a central metal with a defined set of donors, and its name encodes metal, ligands, charge and geometry without ambiguity. Isomerism then multiplies possibilities because the same formula can differ in connectivity, spatial arrangement or mirror image. This section makes naming automatic and isomer sorting reliable.',
    objectives: [
      'Write systematic IUPAC names for cationic, anionic and neutral complexes with bridging ligands',
      'Classify ionization, linkage, coordination and solvate isomerism from formula pairs',
      'Decide when square planar and octahedral geometries allow cis-trans, fac-mer and optical forms'
    ],
    concepts: [
      {
        term: 'IUPAC naming order',
        kind: 'notation',
        statement: 'The **IUPAC name** lists ligands alphabetically with `prefix` counts di and tri plus bridging marker $\\mu$, then the metal with oxidation state in Roman numerals as $Co(III)$. Cationic and neutral entities keep the metal name as $cobalt$, while anionic entities add suffix $ate$ as in $ferrate$ and $platinate$.',
        detail: 'Ligand names use aqua for $H_{2}O$, ammine for $NH_{3}$, chloro for $Cl^{-}$ and nitro versus nitrito for $NO_{2}^{-}$ linkage modes. Thus $[Co(NH_{3})_{5}Cl]Cl_{2}$ becomes pentaamminechloridocobalt(III) chloride.'
      },
      {
        term: 'Coordination number and geometry',
        kind: 'definition',
        statement: 'The **coordination number** counts sigma donor atoms bound directly, stored as `CN` with common values $CN = 2$, $CN = 4$ and $CN = 6$ mapping to linear, tetrahedral or square planar, and octahedral shapes. Chelating donors such as $en$ contribute two to `CN` per ligand, so $[Ni(en)_{3}]^{2+}$ reaches $CN = 6$ from three ligands.',
        detail: 'Geometry follows steric and electronic preference: bulky $Cl^{-}$ favours tetrahedral $[NiCl_{4}]^{2-}$, while strong-field $CN^{-}$ with $d^{8}$ favours square planar $[Ni(CN)_{4}]^{2-}$. Oxidation state plus `CN` together fix the $d$ count for later magnetic work.'
      },
      {
        term: 'Structural isomer families',
        kind: 'definition',
        statement: 'The **structural isomers** share composition but differ in connectivity, with `ionization` swapping counter and bound ions as in $[Co(NH_{3})_{5}SO_{4}]Br$ versus $[Co(NH_{3})_{5}Br]SO_{4}$. Linkage forms swap donor atoms as $M-NO_{2}$ versus $M-ONO$, while coordination forms swap ligands between cation and anion spheres.',
        detail: 'Hydrate variants trap $H_{2}O$ inside or outside, giving $CrCl_{3} \\cdot 6H_{2}O$ in violet, pale green and dark green forms with zero, one and two bound chlorides. Conductivity plus silver nitrate precipitation counts free ions and separates the set.'
      },
      {
        term: 'Geometrical isomerism',
        kind: 'theorem',
        statement: 'The **cis-trans rule** says square planar `MA2B2` such as $[Pt(NH_{3})_{2}Cl_{2}]$ exists as adjacent cis and opposite trans forms, with $cis$ showing a net dipole. Octahedral $MA_{4}B_{2}$ repeats the pair, while $MA_{3}B_{3}$ splits into facial $fac$ with three identical donors on one face and meridional $mer$ wrapping a meridian.',
        detail: 'Chelate rings lock geometry: $[Co(en)_{2}Cl_{2}]^{+}$ shows cis and trans, but cis alone can twist into non-superposable mirrors. Trans forms often melt higher from better packing and show fewer infrared bands from higher symmetry.'
      },
      {
        term: 'Optical isomerism',
        kind: 'law',
        statement: 'The **chirality test** declares a complex optically active when its mirror image cannot be superposed, coded as `Delta` for right-handed propeller $\\Delta$ and $\\Lambda$ for left-handed $\\Lambda$. Cis $[M(AA)_{2}B_{2}]$ and $[M(AA)_{3}]$ such as $[Co(en)_{3}]^{3+}$ are chiral, while trans $[M(AA)_{2}B_{2}]$ holds a mirror plane and is achiral.',
        detail: 'Enantiomers rotate plane-polarized light equally in opposite senses and react identically with achiral reagents, separating only with chiral resolvers such as tartrate. Octahedral cis-dinitro and cis-dichloro bis chelates are standard chiral illustrations.'
      }
    ],
    figures: [
      {
        caption: 'Square-planar $MA_2B_2$ splits into cis with a dipole versus trans without, while octahedral $MA_4B_2$ repeats the pair and $M(AA)_2B_2$ cis is chiral as $\\Delta/\\Lambda$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="cis trans square planar and octahedral isomer pairs"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">Pt(NH3)2Cl2: cis adjacent vs trans opposite</text><rect x="60" y="70" width="110" height="110" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="115" cy="125" r="10" fill="currentColor" stroke="none"/><circle cx="70" cy="80" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="160" cy="80" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="170" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="160" cy="170" r="9" fill="none" stroke="currentColor" stroke-width="2"/><text x="60" y="205" font-size="12" fill="currentColor" font-family="sans-serif">cis: A pair adjacent</text><rect x="280" y="70" width="110" height="110" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="335" cy="125" r="10" fill="currentColor" stroke="none"/><circle cx="290" cy="80" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="380" cy="80" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="290" cy="170" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="380" cy="170" r="9" fill="none" stroke="currentColor" stroke-width="2"/><text x="275" y="205" font-size="12" fill="currentColor" font-family="sans-serif">trans: A opposite, mu 0</text><text x="450" y="90" font-size="13" fill="currentColor" font-family="sans-serif">octahedral MA4B2:</text><text x="450" y="112" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">cis / trans pair</text><text x="450" y="134" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">MA3B3: fac vs mer</text><text x="450" y="156" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">bidentate cis chiral</text><line x1="40" y1="230" x2="680" y2="230" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="40" y="260" font-size="13" fill="currentColor" font-family="sans-serif">name: ligands alphabetical + metal + (oxidation); linkage swaps donor atom</text><text x="40" y="285" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">ionization swaps inside vs outside: [Co(NH3)5SO4]Br vs [Co(NH3)5Br]SO4</text><text x="40" y="310" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">CN 2 linear, CN 4 tetra/square, CN 6 octahedral</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Naming a cobalt ammine chloride',
        problem: 'Give the systematic name of $[Co(NH_{3})_{5}Cl]Cl_{2}$ and state the oxidation state plus coordination number.',
        steps: [
          { label: 'Step 1', text: '```text\nInside sphere: 5 x NH3 (ammine) + 1 x Cl (chlorido).\nOutside sphere: 2 x Cl counter ions, each -1.\nCharge balance: x + 0 - 1 = +2  ->  x = +3.\n```\nMetal charge is $+3$, so the suffix reads cobalt(III), while donor count $5 + 1$ gives $CN = 6$.' },
          { label: 'Step 2', text: 'Order ligands alphabetically with prefixes: ammine before chlorido, giving pentaamminechlorido as the ligand string. Cationic sphere keeps cobalt rather than cobaltate, followed by chloride for the two counter ions.' },
          { label: 'Step 3', text: 'Assemble pentaamminechloridocobalt(III) chloride, with $Co$ in oxidation state $+3$ and octahedral $CN = 6$ geometry implied by six donors.' }
        ],
        result: 'Name is pentaamminechloridocobalt(III) chloride with $Co(III)$ and $CN = 6$.'
      },
      {
        title: 'Sorting cis-trans and optical forms',
        problem: 'For square planar $[Pt(NH_{3})_{2}Cl_{2}]$ and octahedral $[Co(en)_{2}Cl_{2}]^{+}$, list the stereoisomers and their polarity or chirality.',
        steps: [
          { label: 'Step 1', text: 'Draw $[Pt(NH_{3})_{2}Cl_{2}]$ as `MA2B2` square planar: adjacent placement gives cis with $\\mu \\neq 0$, opposite placement gives trans with $\\mu = 0$. No optical pair exists because the plane itself is a mirror.' },
          { label: 'Step 2', text: 'Draw $[Co(en)_{2}Cl_{2}]^{+}$ as octahedral with two chelate rings: trans places chlorides opposite with a mirror plane, while cis places them adjacent without such a plane. Cis therefore twists into $\\Delta$ and $\\Lambda$ mirrors.' },
          { label: 'Step 3', text: '```text\n[Pt(NH3)2Cl2]: cis (polar) + trans (nonpolar), zero chiral pairs.\n[Co(en)2Cl2]+: trans (achiral) + cis-Delta + cis-Lambda (chiral pair).\n```\nDipole plus conglomerate behaviour separates cis from trans, while polarimetry separates $\\Delta$ from $\\Lambda$.' }
        ],
        result: 'Platinum pair gives cis and trans only, while cobalt chelate gives trans plus a cis enantiomeric pair.'
      }
    ],
    keyTakeaways: [
      'Names run ligands alphabetically plus $M$ with Roman numerals, with $ate$ only for anionic spheres.',
      'Ionization, linkage, coordination and hydrate forms differ in connectivity and free-ion count.',
      'Square planar $MA_{2}B_{2}$ and octahedral $MA_{4}B_{2}$ give cis and trans, while $MA_{3}B_{3}$ gives $fac$ and $mer$.',
      'Cis bis chelates and tris chelates such as $[Co(en)_{3}]^{3+}$ form $\\Delta$ and $\\Lambda$ optical pairs.'
    ],
    quiz: [
      // PYQ-pattern: systematic naming drill
      {
        q: 'What is the systematic name of $[Co(NH_{3})_{5}Cl]Cl_{2}$?',
        options: ['pentaamminechloridocobalt(III) chloride', 'chloridopentaamminecobaltate(III) chloride', 'pentachloridoamminecobalt(II) chloride', 'pentaamminecobalt(III) chloride monochloride'],
        answer: 0,
        explanation: 'Step 1: Balance charge to $Co(III)$ from one bound plus two free chlorides. Step 2: Order ammine before chlorido alphabetically. Step 3: Keep cobalt for a cationic sphere, giving the first option.'
      },
      {
        q: 'Which pair illustrates linkage isomerism?',
        options: [`$[Co(NH_{3})_{5}SO_{4}]Br$ and $[Co(NH_{3})_{5}Br]SO_{4}$`, '$[Co(NH_{3})_{5}NO_{2}]Cl_{2}$ with $N$-bound nitro and $[Co(NH_{3})_{5}ONO]Cl_{2}$ with $O$-bound nitrito', `$cis$ and $trans$ $[Pt(NH_{3})_{2}Cl_{2}]$`, `$\\Delta$ and $\\Lambda$ $[Co(en)_{3}]^{3+}$`],
        answer: 1,
        explanation: 'Step 1: Recall linkage swaps donor atoms of an ambidentate ligand. Step 2: Only the nitro versus nitrito pair swaps $N$ for $O$ binding. Step 3: The other pairs swap spheres, positions or mirrors instead.'
      },
      // PYQ-pattern: fac-mer identification check
      {
        q: 'How many geometrical forms does octahedral $[M(AA)_{2}B_{2}]$ display, counting optical pairs?',
        options: ['One only', 'Two: cis and trans with no optical pair', 'Three: trans plus a cis enantiomeric pair', 'Four geometrical forms'],
        answer: 2,
        explanation: 'Step 1: Place two monodentate donors cis or trans on the bis-chelate frame. Step 2: Trans holds a mirror plane and is achiral. Step 3: Cis lacks that plane and splits into $\\Delta$ and $\\Lambda$.'
      },
      {
        q: 'Which complex is chiral?',
        options: ['trans $[Co(en)_{2}Cl_{2}]^{+}$', '$[Pt(NH_{3})_{2}Cl_{2}]$ trans form', `$[Co(en)_{3}]^{3+}$`, '$[NiCl_{4}]^{2-}$ tetrahedral'],
        answer: 2,
        explanation: 'Step 1: Apply the superposition test to each mirror pair. Step 2: Trans and planar forms retain mirrors. Step 3: Only the tris chelate propeller lacks improper symmetry and is chiral.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.2
  {
    sectionId: 'chem-ch12-s2',
    readingTime: 7,
    intro: 'Werner separated the charge that balances ions from the bonds that hold a complex together, a distinction that organizes every later test. Primary valency is the oxidation state satisfied by counter ions, while secondary valency is the coordination number satisfied by donors. This section pairs that picture with electron counting through the effective atomic number rule.',
    objectives: [
      'Separate primary and secondary valency and use conductivity plus precipitation to count ions',
      'Compute effective atomic number and link $36$-electron counts to extra stability',
      'Justify classic Werner cobalt ammine formulas from mole-level precipitation data'
    ],
    concepts: [
      {
        term: 'Primary versus secondary valency',
        kind: 'definition',
        statement: 'The **primary valency** equals oxidation state and is satisfied by `counter` ions outside the brackets, while secondary valency equals coordination number and is satisfied by donors inside as $CoCl_{3} \\cdot 6NH_{3}$ versus $[Co(NH_{3})_{6}]Cl_{3}$. Ionizable chlorides precipitate with $Ag^{+}$ as $AgCl$, while bound chlorides do not respond.',
        detail: 'Molar conductivity scales with ion count: $[Co(NH_{3})_{6}]Cl_{3}$ gives four ions, $[Co(NH_{3})_{5}Cl]Cl_{2}$ gives three, and $[Co(NH_{3})_{4}Cl_{2}]Cl$ gives two. Colour and current together therefore map the sphere.'
      },
      {
        term: 'Werner cobalt ammine series',
        kind: 'theorem',
        statement: 'The **Werner series** for `Co(III)` with $CN = 6$ runs $[Co(NH_{3})_{6}]Cl_{3}$ giving three $AgCl$, $[Co(NH_{3})_{5}Cl]Cl_{2}$ giving two, $[Co(NH_{3})_{4}Cl_{2}]Cl$ giving one, and $[Co(NH_{3})_{3}Cl_{3}]$ giving none. Each step moves one chloride from counter position into secondary valency without changing primary valency $+3$.',
        detail: 'Octahedral geometry follows because only two forms appear for $[M(AA)B_{4}]$ type, matching cis-trans counts and ruling out planar or prismatic models. The precipitation ladder remains a standard sphere probe.'
      },
      {
        term: 'Effective atomic number rule',
        kind: 'law',
        statement: 'The **EAN rule** counts `EAN` as $EAN = Z - x + 2n$, where $Z$ is atomic number, $x$ is oxidation state and $n$ is coordination number for monodentate donors. Reaching a noble-gas count such as $EAN = 36$ near krypton signals added stability, as in $[Fe(CN)_{6}]^{4-}$ with $26 - 2 + 12 = 36$.',
        detail: 'Chelate donors contribute two electrons per donor atom, so $en$ adds four per ligand and $C_{2}O_{4}^{2-}$ adds four as well. Bridging $CO$ counts once per metal in the standard taught bookkeeping.'
      },
      {
        term: 'EAN worked counts',
        kind: 'method',
        statement: 'The **counting routine** assigns oxidation state first, then adds `2n` electrons, with $Ni$ in $[Ni(CO)_{4}]$ at $28 - 0 + 8 = 36$ and $Cr$ in $[Cr(CO)_{6}]$ at $24 - 0 + 12 = 36$. Charged carbonylmetalates adjust for $x$: $[Fe(CO)_{4}]^{2-}$ gives $26 + 2 + 8 = 36$ because $x = -2$.',
        detail: 'Many stable organometallics obey the rule while higher-coordinate aqua ions deviate, so the rule is treated as a stability pointer rather than a law. Deviations cluster with large $CN$ and strongly pi-donor halides.'
      },
      {
        term: 'Limits and modern reading',
        kind: 'insight',
        statement: 'The **eighteen-electron reading** restates `EAN` as valence count $VE = G - x + 2n$ reaching $18$ for transition blocks, where $G$ is group number. Thus $Fe(0)$ with five $CO$ ligands gives $8 + 10 = 18$ in $[Fe(CO)_{5}]$, matching $EAN = 36$ from the atomic-number side.',
        detail: 'Steric crowding, pi back donation and high-spin halide fields all shift counts away from eighteen, which is why $[CoF_{6}]^{3-}$ and $[Fe(H_{2}O)_{6}]^{3+}$ ignore the rule while carbonyls obey it. Werner geometry plus electron count together frame later field splitting.'
      }
    ],
    figures: [
      {
        caption: 'Werner split primary valency $x$ outside the brackets from secondary valency $n$ inside; $CoCl_3 \\cdot 6NH_3$ gives three $AgCl$ while $CoCl_3 \\cdot 3NH_3$ gives none.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Werner cobalt ammine series and EAN counts"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">Co(III) CN6: ionisable Cl- falls as NH3 enters</text><rect x="40" y="65" width="140" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="90" font-size="13" fill="currentColor" font-family="sans-serif">[Co(NH3)6]Cl3</text><text x="55" y="110" font-size="12" fill="currentColor" font-family="sans-serif">3 AgCl</text><rect x="200" y="65" width="140" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="215" y="90" font-size="13" fill="currentColor" font-family="sans-serif">[Co(NH3)5Cl]Cl2</text><text x="215" y="110" font-size="12" fill="currentColor" font-family="sans-serif">2 AgCl</text><rect x="360" y="65" width="140" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="375" y="90" font-size="13" fill="currentColor" font-family="sans-serif">[Co(NH3)4Cl2]Cl</text><text x="375" y="110" font-size="12" fill="currentColor" font-family="sans-serif">1 AgCl</text><rect x="520" y="65" width="140" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="535" y="90" font-size="13" fill="currentColor" font-family="sans-serif">[Co(NH3)3Cl3]</text><text x="535" y="110" font-size="12" fill="currentColor" font-family="sans-serif">0 AgCl</text><line x1="180" y1="95" x2="200" y2="95" stroke="currentColor" stroke-width="2"/><line x1="340" y1="95" x2="360" y2="95" stroke="currentColor" stroke-width="2"/><line x1="500" y1="95" x2="520" y2="95" stroke="currentColor" stroke-width="2"/><polygon points="200,95 194,89 194,101" fill="currentColor" stroke="none"/><rect x="40" y="150" width="620" height="90" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="55" y="175" font-size="13" fill="currentColor" font-family="sans-serif">EAN = Z - x + 2n; Ni(CO)4: 28-0+8 = 36 Kr</text><text x="55" y="198" font-size="13" fill="currentColor" font-family="sans-serif">Cr(CO)6: 24-0+12 = 36; VE = G - x + 2n = 18</text><text x="55" y="220" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.8">primary = counter ions; secondary = donors inside</text><text x="40" y="270" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">conductivity and AgNO3 count free ions, not bound ligands</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Counting ions by precipitation',
        problem: 'One mole of a $CoCl_{3} \\cdot 4NH_{3}$ complex gives one mole of $AgCl$ with excess $AgNO_{3}$. Deduce the sphere and ion count.',
        steps: [
          { label: 'Step 1', text: '```text\nTotal Cl per formula: 3.\nPrecipitated as AgCl: 1  ->  free counter ions = 1.\nBound inside sphere: 3 - 1 = 2.\n```\nOnly counter chlorides precipitate, so one free plus two bound chlorides partition the three.' },
          { label: 'Step 2', text: 'Fill $CN = 6$ with four $NH_{3}$ plus two bound $Cl^{-}$ to get $[Co(NH_{3})_{4}Cl_{2}]^{+}$, leaving one $Cl^{-}$ outside as $[Co(NH_{3})_{4}Cl_{2}]Cl$. Primary valency stays $+3$ while secondary valency $6$ is met.' },
          { label: 'Step 3', text: 'Count ions as two per formula, so molar conductivity matches a binary electrolyte and the colour signals a dichloro tetraammine violet-green pair.' }
        ],
        result: 'Formulation is $[Co(NH_{3})_{4}Cl_{2}]Cl$ with two ions and one precipitable chloride.'
      },
      {
        title: 'EAN stability check',
        problem: 'Compute $EAN$ for $[Fe(CN)_{6}]^{4-}$, $[Fe(CN)_{6}]^{3-}$ and $[Ni(CO)_{4}]$, and comment on stability.',
        steps: [
          { label: 'Step 1', text: 'Assign oxidation states as $Fe = +2$ in the first, $Fe = +3$ in the second and $Ni = 0$ in the carbonyl from ligand charges $CN^{-}$ and neutral $CO$. Coordination numbers are $n = 6$, $n = 6$ and $n = 4$ respectively.' },
          { label: 'Step 2', text: 'Apply $EAN = Z - x + 2n$ to get $26 - 2 + 12 = 36$ for $[Fe(CN)_{6}]^{4-}$, $26 - 3 + 12 = 35$ for $[Fe(CN)_{6}]^{3-}$, and $28 - 0 + 8 = 36$ for $[Ni(CO)_{4}]$.' },
          { label: 'Step 3', text: '```text\n[Fe(CN)6]4-: EAN 36, krypton count, extra stable.\n[Fe(CN)6]3-: EAN 35, one short, strong oxidant.\n[Ni(CO)4]:  EAN 36, krypton count, stable volatile liquid.\n```\nThe one-electron gap explains why ferricyanide oxidizes while ferrocyanide resists.' }
        ],
        result: '$EAN$ values $36$, $35$ and $36$ place ferrocyanide and nickel carbonyl at noble-gas counts.'
      }
    ],
    keyTakeaways: [
      'Primary valency is oxidation state outside brackets, while secondary valency is $CN$ inside brackets.',
      '$AgNO_{3}$ precipitation plus conductivity counts free ions and fixes the sphere.',
      '$EAN = Z - x + 2n$ reaching $36$ marks added stability such as $[Ni(CO)_{4}]$.',
      'The eighteen-electron form $VE = G - x + 2n = 18$ carries the same message for $d$ blocks.'
    ],
    quiz: [
      // PYQ-pattern: Werner precipitation logic
      {
        q: 'A $CoCl_{3} \\cdot 5NH_{3}$ complex gives two moles of $AgCl$ per mole. What is its formulation?',
        options: [`$[Co(NH_{3})_{6}]Cl_{3}$`, `$[Co(NH_{3})_{5}Cl]Cl_{2}$`, `$[Co(NH_{3})_{4}Cl_{2}]Cl$`, `$[Co(NH_{3})_{3}Cl_{3}]$`],
        answer: 1,
        explanation: 'Step 1: Two precipitable chlorides mean two counter ions. Step 2: Remaining one chloride plus five ammines fill $CN = 6$. Step 3: Hence the sphere is $[Co(NH_{3})_{5}Cl]Cl_{2}$ with three ions.'
      },
      {
        q: 'What are the $EAN$ values for $[Fe(CN)_{6}]^{4-}$ and $[Ni(CO)_{4}]$?',
        options: [`$36$ and $36$`, `$35$ and $35$`, `$35$ and $36$`, `$36$ and $35$`],
        answer: 0,
        explanation: 'Step 1: Read $Fe(II)$ with $Z = 26$, $x = 2$, $n = 6$. Step 2: Compute $26 - 2 + 12 = 36$. Step 3: For $Ni(0)$ compute $28 - 0 + 8 = 36$.'
      },
      {
        q: 'Molar conductivity rises in the order $A < B < C$ for three cobalt ammines. What does the order imply?',
        options: ['Decreasing ion count from $A$ to $C$', 'Decreasing coordination number', 'Increasing free-ion count from $A$ to $C$, as from $[Co(NH_{3})_{3}Cl_{3}]$ toward $[Co(NH_{3})_{6}]Cl_{3}$', 'Identical spheres with different colours'],
        answer: 2,
        explanation: 'Step 1: Conductivity tracks mobile ion count. Step 2: Neutral trichloro gives fewest ions while hexammine gives four. Step 3: Rising conductivity therefore means rising free-ion count.'
      },
      // PYQ-pattern: EAN gap and redox pointer
      {
        q: 'Why is $[Fe(CN)_{6}]^{3-}$ a stronger oxidant than $[Fe(CN)_{6}]^{4-}$ on $EAN$ grounds?',
        options: ['It has a larger coordination number', 'It contains no cyanide', 'Its iron has a lower atomic number', 'Its $EAN = 35$ lies one short of krypton, so gain of one electron reaches $36$'],
        answer: 3,
        explanation: 'Step 1: Compute $35$ for ferricyanide against $36$ for ferrocyanide. Step 2: Reduction adds one electron to the count. Step 3: The $35$ to $36$ closure drives oxidant strength.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.3
  {
    sectionId: 'chem-ch12-s3',
    readingTime: 9,
    intro: 'Colour and magnetism in complexes spring from the same splitting of $d$ orbitals by the ligand cage. Octahedral donors push $e_{g}$ up and leave $t_{2g}$ down, while tetrahedral donors invert that order with a smaller gap. This section turns those gaps into high-spin and low-spin counts plus spin-only moments.',
    objectives: [
      'Draw octahedral and tetrahedral splitting and order $t_{2g}$ with $e_{g}$ correctly',
      'Decide high-spin versus low-spin from $\\Delta_{o}$ against pairing energy $P$',
      'Compute spin-only moments $\\mu = \\sqrt{n(n+2)}$ and map $d^{4}$ through $d^{7}$ cases'
    ],
    concepts: [
      {
        term: 'Octahedral splitting',
        kind: 'definition',
        statement: 'The **octahedral gap** splits five $d$ orbitals into lower `t2g` set $t_{2g}$ with three orbitals and upper $e_{g}$ with two, separated by $\\Delta_{o}$ as $t_{2g}$ below $e_{g}$. Axial $e_{g}$ orbitals point at ligands and rise, while $t_{2g}$ point between and sink relative to the spherical barycentre.',
        detail: 'Stabilization is counted as $-0.4\\Delta_{o}$ per $t_{2g}$ electron plus $+0.6\\Delta_{o}$ per $e_{g}$ electron before pairing corrections. Strong pi acceptors such as $CO$ widen $\\Delta_{o}$ while pi donors such as $F^{-}$ narrow it.'
      },
      {
        term: 'Tetrahedral and square planar gaps',
        kind: 'definition',
        statement: 'The **tetrahedral gap** inverts the order to lower `e` set $e$ below upper $t_{2}$ with $\\Delta_{t} = \\frac{4}{9}\\Delta_{o}$, so tetrahedral fields are almost always high spin. Square planar $d^{8}$ splits $d_{x^{2}-y^{2}}$ sharply upward, which is why $[Ni(CN)_{4}]^{2-}$ pairs to diamagnetic while tetrahedral $[NiCl_{4}]^{2-}$ keeps two unpaired electrons.',
        detail: 'No ligands lie on $t_{2g}$ lobes in octahedral geometry, which is the visual key to the ordering. Tetrahedral geometry has no centre of symmetry, so $d$-$d$ bands gain intensity relative to octahedral bands.'
      },
      {
        term: 'High-spin versus low-spin choice',
        kind: 'law',
        statement: 'The **spin choice** compares gap `Delta_o` against pairing energy $P$: $\\Delta_{o} > P$ forces pairing into $t_{2g}$ for low spin, while $\\Delta_{o} < P$ spreads electrons upward for high spin. Thus $[FeF_{6}]^{3-}$ with weak $F^{-}$ is high spin $t_{2g}^{3}e_{g}^{2}$, while $[Fe(CN)_{6}]^{3-}$ with strong $CN^{-}$ is low spin $t_{2g}^{5}$.',
        detail: 'Only $d^{4}$ through $d^{7}$ show both branches in octahedral fields; $d^{1}$ through $d^{3}$ and $d^{8}$ through $d^{10}$ have unique fillings. Temperature and pressure can flip borderline $Fe(II)$ systems between branches.'
      },
      {
        term: 'Spin-only magnetic moment',
        kind: 'theorem',
        statement: 'The **spin-only moment** reads `mu` as $\\mu = \\sqrt{n(n+2)}$ BM, where $n$ counts unpaired electrons and $BM$ is the Bohr magneton. Values run $1.73$ for $n = 1$, $2.83$ for $n = 2$, $3.87$ for $n = 3$, $4.90$ for $n = 4$ and $5.92$ for $n = 5$ in $BM$ units.',
        detail: 'Orbital sharing quenches most orbital momentum for first-row ions, so measured moments land near spin-only values. Heavier $4d$ and $5d$ rows deviate more because spin-orbit coupling grows with $Z$.'
      },
      {
        term: 'CFSE and stability pointer',
        kind: 'method',
        statement: 'The **crystal-field stabilization energy** sums `CFSE` as $CFSE = (-0.4n_{t2g} + 0.6n_{eg})\\Delta_{o} + mP$, where $m$ counts extra pairs beyond the high-spin reference. Low-spin $d^{6}$ as $t_{2g}^{6}$ gains $-2.4\\Delta_{o} + 2P$, which explains the inertness of $[Co(NH_{3})_{6}]^{3+}$ relative to labile high-spin $[CoF_{6}]^{3-}$.',
        detail: 'Tetrahedral $CFSE$ uses the inverted weights $-0.6$ for $e$ and $+0.4$ for $t_{2}$ with $\\Delta_{t}$ in place of $\\Delta_{o}$. Large $CFSE$ correlates with short bonds, slow substitution and deep colour.'
      }
    ],
    derivations: [
      {
        title: 'Spin Only Magnetic Moment from Unpaired Electrons',
        statement: 'Derivation of $\\mu = \\sqrt{n(n+2)}$ BM for $n$ unpaired electrons with quenched orbital momentum',
        prerequisites: [
          'Electron spin $S$ and spin quantum number $s = \\frac{1}{2}$',
          'Gyromagnetic factor $g$ near $2$ for free electron',
          'Quenching of orbital momentum in first row complexes'
        ],
        steps: [
          {
            label: 'Step 1: Start from the spin magnetic moment',
            formula: '$$\\mu_{s} = g\\sqrt{S(S+1)} \\quad g = 2$$',
            explanation: 'A spinning charge generates a moment proportional to total spin $S$ with factor $g$ near two. This quantum result replaces the classical spinning sphere picture. It is the correct start because orbital motion is largely frozen by low symmetry ligand fields.'
          },
          {
            label: 'Step 2: Express total spin by unpaired count',
            formula: '$$S = \\frac{n}{2}$$',
            explanation: 'Each unpaired electron contributes one half unit of spin and paired electrons cancel. Summing aligned halves gives $n$ halves in the high spin counting used for moments. This relation holds because Hund alignment maximizes $S$ for the ground term.'
          },
          {
            label: 'Step 3: Substitute the count into the moment',
            formula: '$$\\mu = 2\\sqrt{\\frac{n}{2}\\left(\\frac{n}{2}+1\\right)}$$',
            explanation: 'Inserting $S$ equal to $n$ over two converts the abstract spin formula into an electron counting tool. No new physics enters here, only algebra that preserves the square root structure. The substitution is what makes the law usable from a configuration diagram alone.'
          },
          {
            label: 'Step 4: Simplify to the working square root law',
            formula: '$$\\mu = \\sqrt{n(n+2)}$$',
            explanation: 'Multiplying inside the root gives $n$ times $n$ plus two, with units of Bohr magneton $BM$ understood. Values $1.73$, $2.83$, $3.87$, $4.90$ and $5.92$ for $n$ one through five follow directly. Deviations flag unquenched orbital momentum, especially for heavier rows with strong spin orbit coupling.'
          }
        ],
        result: 'Moment $\\mu = \\sqrt{n(n+2)}$ BM maps $n$ onto $1.73$ through $5.92$ BM, so measured $\\mu$ reports unpaired count when orbital effects are quenched.'
      }
    ],
    figures: [
      {
        caption: 'Octahedral donors push $e_g$ up by $\\Delta_o$ above $t_{2g}$; $\\Delta_o > P$ pairs to low spin while $\\Delta_o < P$ stays high spin with $\\mu = \\sqrt{n(n+2)}$ BM.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Octahedral crystal field splitting and spin choice"><text x="60" y="40" font-size="14" fill="currentColor" font-family="sans-serif">octahedral: t2g down, eg up</text><line x1="80" y1="90" x2="280" y2="90" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="80" y1="200" x2="280" y2="200" stroke="currentColor" stroke-width="1" opacity="0.5"/><line x1="80" y1="90" x2="200" y2="90" stroke="currentColor" stroke-width="4"/><text x="205" y="95" font-size="13" fill="currentColor" font-family="sans-serif">eg (2)</text><line x1="80" y1="200" x2="200" y2="200" stroke="currentColor" stroke-width="4"/><text x="205" y="205" font-size="13" fill="currentColor" font-family="sans-serif">t2g (3)</text><line x1="300" y1="90" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/><polygon points="300,90 296,100 304,100" fill="currentColor" stroke="none"/><polygon points="300,200 296,190 304,190" fill="currentColor" stroke="none"/><text x="308" y="150" font-size="13" fill="currentColor" font-family="sans-serif">Delta-o</text><text x="380" y="90" font-size="13" fill="currentColor" font-family="sans-serif">d6 high-spin:</text><text x="380" y="112" font-size="12" fill="currentColor" font-family="sans-serif">t2g4 eg2, n=4</text><text x="380" y="134" font-size="12" fill="currentColor" font-family="sans-serif">mu 4.90 BM</text><text x="380" y="170" font-size="13" fill="currentColor" font-family="sans-serif">d6 low-spin:</text><text x="380" y="192" font-size="12" fill="currentColor" font-family="sans-serif">t2g6 eg0, n=0</text><text x="380" y="214" font-size="12" fill="currentColor" font-family="sans-serif">mu 0, diamagnetic</text><line x1="40" y1="250" x2="680" y2="250" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="40" y="280" font-size="13" fill="currentColor" font-family="sans-serif">tetrahedral inverts to e below t2 with Delta-t = 4/9 Delta-o, almost always high spin</text><text x="40" y="305" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">CFSE = (-0.4 nt2g + 0.6 neg)Delta-o + mP; square planar d8 splits dx2-y2 highest</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Moment and configuration for iron cyanides',
        problem: 'Predict unpaired count, $\\mu$ and spin state for $[Fe(CN)_{6}]^{4-}$ and $[Fe(CN)_{6}]^{3-}$ with $Fe$ as $d^{6}$ and $d^{5}$.',
        steps: [
          { label: 'Step 1', text: '```text\n[Fe(CN)6]4-: Fe(II), d6, strong CN- field.\nFill low spin: (t2g)6 (eg)0, n = 0.\n[Fe(CN)6]3-: Fe(III), d5, strong CN- field.\nFill low spin: (t2g)5 (eg)0, n = 1.\n```\nStrong-field $CN^{-}$ makes $\\Delta_{o} > P$, so pairing in $t_{2g}$ wins in both ions.' },
          { label: 'Step 2', text: 'Apply $\\mu = \\sqrt{n(n+2)}$ to get $\\mu = 0$ BM for $n = 0$ and $\\mu = \\sqrt{3} = 1.73$ BM for $n = 1$. Thus ferrocyanide is diamagnetic while ferricyanide shows one unpaired spin.' },
          { label: 'Step 3', text: 'Contrast with fluoride analogues $[FeF_{6}]^{4-}$ and $[FeF_{6}]^{3-}$, which stay high spin with $n = 4$ and $n = 5$ because $\\Delta_{o} < P$ for weak $F^{-}$.' }
        ],
        result: '$[Fe(CN)_{6}]^{4-}$ is low-spin $d^{6}$ with $\\mu = 0$, while $[Fe(CN)_{6}]^{3-}$ is low-spin $d^{5}$ with $\\mu = 1.73$ BM.'
      },
      {
        title: 'Tetrahedral nickel versus square planar nickel',
        problem: 'Explain why $[NiCl_{4}]^{2-}$ is paramagnetic with $\\mu$ near $2.83$ BM while $[Ni(CN)_{4}]^{2-}$ is diamagnetic, although both hold $Ni(II)$ $d^{8}$.',
        steps: [
          { label: 'Step 1', text: 'Count $Ni(II)$ as $d^{8}$ in both geometries from $Ni$ group $10$ minus oxidation state $+2$. Tetrahedral splitting $\\Delta_{t}$ is small at $\\frac{4}{9}\\Delta_{o}$, so high-spin filling $e^{4}t_{2}^{4}$ leaves $n = 2$.' },
          { label: 'Step 2', text: 'Square planar field from strong $CN^{-}$ lifts $d_{x^{2}-y^{2}}$ far above the other four orbitals, so all eight electrons pair in the lower four levels and $n = 0$. Geometry plus ligand strength together flip the count.' },
          { label: 'Step 3', text: '```text\n[NiCl4]2-: tetrahedral, e4 t2-4, n=2, mu = sqrt(8) = 2.83 BM.\n[Ni(CN)4]2-: square planar, paired 4-level fill, n=0, mu = 0.\n```\nMagnetism therefore reports geometry when $d$ count alone cannot.' }
        ],
        result: 'Tetrahedral $d^{8}$ keeps two unpaired spins while square planar $d^{8}$ pairs fully, giving $2.83$ BM versus zero.'
      }
    ],
    keyTakeaways: [
      'Octahedral order is $t_{2g}$ below $e_{g}$ by $\\Delta_{o}$, while tetrahedral order is $e$ below $t_{2}$ by $\\Delta_{t} = \\frac{4}{9}\\Delta_{o}$.',
      '$\\Delta_{o} > P$ gives low spin and $\\Delta_{o} < P$ gives high spin for $d^{4}$ through $d^{7}$ octahedral ions.',
      '$\\mu = \\sqrt{n(n+2)}$ BM maps $n$ onto $1.73$, $2.83$, $3.87$, $4.90$ and $5.92$ BM.',
      'Square planar $d^{8}$ with strong donors such as $CN^{-}$ is diamagnetic, unlike tetrahedral $d^{8}$.'
    ],
    quiz: [
      // PYQ-pattern: spin-only moment drill
      {
        q: 'How many unpaired electrons suit a measured $\\mu = 4.90$ BM for a first-row complex?',
        options: [`$n = 2$`, `$n = 3$`, `$n = 4$`, `$n = 5$`],
        answer: 2,
        explanation: 'Step 1: Square the ladder values: $\\sqrt{8}$, $\\sqrt{15}$, $\\sqrt{24}$, $\\sqrt{35}$. Step 2: Only $\\sqrt{24} = 4.90$ matches the reading. Step 3: That value belongs to $n = 4$.'
      },
      {
        q: 'Why is $[Fe(CN)_{6}]^{3-}$ low spin while $[FeF_{6}]^{3-}$ is high spin?',
        options: ['Cyanide is larger than fluoride', '$CN^{-}$ gives $\\Delta_{o} > P$ so pairing wins, while $F^{-}$ gives $\\Delta_{o} < P$ so spreading wins', 'Iron changes oxidation state between the two', 'Fluoride is a pi acceptor and cyanide is a pi donor'],
        answer: 1,
        explanation: 'Step 1: Both ions hold $d^{5}$ iron(III). Step 2: Compare gap against pairing energy in each field. Step 3: Strong $CN^{-}$ pairs to $t_{2g}^{5}$ while weak $F^{-}$ spreads to $t_{2g}^{3}e_{g}^{2}$.'
      },
      // PYQ-pattern: tetrahedral versus square planar check
      {
        q: 'Which statement about $Ni(II)$ $d^{8}$ is correct?',
        options: ['Both $[NiCl_{4}]^{2-}$ and $[Ni(CN)_{4}]^{2-}$ are diamagnetic', 'Tetrahedral $[NiCl_{4}]^{2-}$ has $n = 2$ while square planar $[Ni(CN)_{4}]^{2-}$ has $n = 0$', 'Square planar nickel holds five unpaired electrons', 'Tetrahedral splitting exceeds octahedral splitting'],
        answer: 1,
        explanation: 'Step 1: Count $d^{8}$ for $Ni(II)$ in both. Step 2: Small $\\Delta_{t}$ keeps tetrahedral high spin with two unpaired. Step 3: Large square planar separation pairs all eight, giving zero.'
      },
      {
        q: 'Low-spin octahedral $Co(III)$ $d^{6}$ has which filling and moment?',
        options: ['$t_{2g}^{4}e_{g}^{2}$ with $\\mu = 4.90$ BM', `$t_{2g}^{6}e_{g}^{0}$ with $\\mu = 0$`, '$e^{4}t_{2}^{2}$ with $\\mu = 2.83$ BM', '$t_{2g}^{3}e_{g}^{3}$ with $\\mu = 5.92$ BM'],
        answer: 1,
        explanation: 'Step 1: Strong-field donors make $\\Delta_{o} > P$. Step 2: All six electrons pair in $t_{2g}$, leaving $e_{g}$ empty. Step 3: Zero unpaired gives $\\mu = 0$, as in $[Co(NH_{3})_{6}]^{3+}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.4
  {
    sectionId: 'chem-ch12-s4',
    readingTime: 8,
    intro: 'The same $d$ electrons that set magnetism also set colour, and the same chelate rings that shape geometry also lock stability. Light promotes a $t_{2g}$ electron into $e_{g}$, and the absorbed wavelength paints the complementary colour. This section links spectra, the spectrochemical series and formation constants into one working picture.',
    objectives: [
      'Order ligands by the spectrochemical series and predict $\\Delta_{o}$ and colour shifts',
      'Separate $d$-$d$, charge-transfer and selection-rule effects in intensity and hue',
      'Rank complex stability with chelate effect, formation constants and analytical uses'
    ],
    concepts: [
      {
        term: 'Spectrochemical series',
        kind: 'law',
        statement: 'The **spectrochemical series** orders `field` strength as $I^{-} < Br^{-} < S^{2-} < Cl^{-} < NO_{3}^{-} < F^{-} < OH^{-} < C_{2}O_{4}^{2-} < H_{2}O < NCS^{-} < NH_{3} < en < NO_{2}^{-} < CN^{-} < CO$. Moving right widens $\\Delta_{o}$, shifts absorption toward blue and favours low spin for $d^{4}$ through $d^{7}$ ions.',
        detail: 'Pi donors such as $F^{-}$ narrow the gap while pi acceptors such as $CO$ widen it through back donation from $t_{2g}$ into ligand pi orbitals. The series is largely metal independent for first-row $M(II)$ and $M(III)$ centres.'
      },
      {
        term: 'Colour from d-d absorption',
        kind: 'definition',
        statement: 'The **complementary colour rule** says observed hue is the complement of absorbed light, so `violet` $[Ti(H_{2}O)_{6}]^{3+}$ with $d^{1}$ absorbs yellow-green near $500$ nm for $t_{2g} \\rightarrow e_{g}$. Larger $\\Delta_{o}$ moves absorption to shorter wavelength, turning a green absorber red and a yellow absorber violet.',
        detail: 'Zinc(II) $d^{10}$ and scandium(III) $d^{0}$ show no $d$-$d$ bands and appear white, while $Cu(II)$ $d^{9}$ blues and $Co(II)$ pinks follow the same promotion logic. Charge-transfer bands in $MnO_{4}^{-}$ are far stronger and mask weak $d$-$d$ features.'
      },
      {
        term: 'Selection rules and intensity',
        kind: 'theorem',
        statement: 'The **Laporte rule** forbids `g-to-g` transitions in centrosymmetric octahedra, so octahedral $d$-$d$ bands are weak with molar absorptivity $\\epsilon$ below $50$, while tetrahedral bands without a centre reach hundreds. Spin selection further weakens spin-forbidden lines such as high-spin $d^{5}$ $Mn(II)$ pastel shades versus spin-allowed $Cu(II)$ deep blue.',
        detail: 'Vibronic coupling relaxes the Laporte ban slightly by mixing $p$ character during vibration, which is why weak bands still appear. Charge-transfer excitations are fully allowed and paint intense purple $MnO_{4}^{-}$ and orange $Cr_{2}O_{7}^{2-}$.'
      },
      {
        term: 'Stability and chelate effect',
        kind: 'law',
        statement: 'The **chelate effect** says multidentate binding beats equivalent monodentate binding, with `log_beta` for $[Ni(en)_{3}]^{2+}$ far above $[Ni(NH_{3})_{6}]^{2+}$ because $\\log\\beta_{3}$ sums near $18$ versus $8$. Entropy drives the gain: one $en$ frees two $H_{2}O$ molecules, raising disorder while enthalpy stays comparable.',
        detail: 'Five-membered rings with $en$ and $C_{2}O_{4}^{2-}$ are most stable, and macrocycles such as porphyrin add a further macrocyclic lock. Irving-Williams order $Mn < Fe < Co < Ni < Cu > Zn$ overlays size plus $CFSE$ on the same stability ladder.'
      },
      {
        term: 'Analytical and applied uses',
        kind: 'insight',
        statement: 'The **EDTA titration** uses `Y4-` hexadentate $EDTA^{4-}$ to bind $Ca^{2+}$ and $Mg^{2+}$ in one-to-one $MY^{2-}$ complexes for hardness measurement with Eriochrome Black T indicator. Photography, electroplating and medicine reuse the same logic: $[Ag(S_{2}O_{3})_{2}]^{3-}$ fixes images, $[Au(CN)_{2}]^{-}$ plates gold, and cisplatin $cis-[Pt(NH_{3})_{2}Cl_{2}]$ binds DNA.',
        detail: 'Prussian blue $Fe_{4}[Fe(CN)_{6}]_{3}$ and Turnbull chemistry mark iron, while $Ni(dmg)_{2}$ scarlet precipitate confirms nickel gravimetrically. Stability gaps make these separations sharp.'
      }
    ],
    figures: [
      {
        caption: 'Field grows $I^- < Br^- < Cl^- < F^- < H_2O < NH_3 < en < CN^- < CO$; absorbed light promotes $t_{2g} \\to e_g$ and the eye sees the complement.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spectrochemical series and complementary colour"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">spectrochemical series: weak to strong field</text><line x1="40" y1="90" x2="680" y2="90" stroke="currentColor" stroke-width="2"/><polygon points="680,90 672,84 672,96" fill="currentColor" stroke="none"/><text x="50" y="115" font-size="13" fill="currentColor" font-family="sans-serif">I- Br- Cl- F- OH- H2O NH3 en CN- CO</text><text x="50" y="135" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">pi-donor weak --- strong pi-acceptor</text><rect x="40" y="160" width="300" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="185" font-size="13" fill="currentColor" font-family="sans-serif">[Ti(H2O)6]3+ d1 violet:</text><text x="55" y="207" font-size="12" fill="currentColor" font-family="sans-serif">absorbs yellow-green 500 nm</text><text x="55" y="229" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">sees complement</text><rect x="380" y="160" width="300" height="90" fill="none" stroke="currentColor" stroke-width="2"/><text x="395" y="185" font-size="13" fill="currentColor" font-family="sans-serif">octahedral g-g weak e&lt;50;</text><text x="395" y="207" font-size="12" fill="currentColor" font-family="sans-serif">tetrahedral no centre brighter</text><text x="395" y="229" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">charge transfer intense</text><text x="40" y="280" font-size="13" fill="currentColor" font-family="sans-serif">chelate: [Ni(en)3]2+ log-beta 18 beats [Ni(NH3)6]2+ near 8 by entropy</text><text x="40" y="305" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">EDTA Y4- grabs Ca2+/Mg2+ 1:1 for hardness titration</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Reading colour from the series',
        problem: 'A $Ti(III)$ $d^{1}$ aqua complex absorbs near $500$ nm. Predict the colour shift when $H_{2}O$ is replaced by $F^{-}$ and by $CN^{-}$.',
        steps: [
          { label: 'Step 1', text: '```text\nSeries order: F- < H2O < CN- in field strength.\nGap order: Delta(F-) < Delta(H2O) < Delta(CN-).\nAbsorption wavelength: longest for F-, shortest for CN-.\n```\nPlace the three ligands on $I^{-} < \\cdots < F^{-} < H_{2}O < \\cdots < CN^{-}$ to order $\\Delta_{o}$.' },
          { label: 'Step 2', text: 'Weaker $F^{-}$ narrows the $t_{2g}$ to $e_{g}$ gap, so absorption moves toward red and the observed complement shifts toward blue-green. Stronger $CN^{-}$ widens the gap, so absorption moves toward blue and the complement shifts toward yellow-red.' },
          { label: 'Step 3', text: 'Link spin and intensity: $d^{1}$ has no spin choice, so only wavelength moves, with $\\epsilon$ staying in the weak Laporte-forbidden range for octahedral geometry.' }
        ],
        result: '$F^{-}$ shifts absorption redward and $CN^{-}$ blueward relative to $H_{2}O$, with complementary colours moving oppositely.'
      },
      {
        title: 'Chelate versus monodentate stability',
        problem: 'Compare $[Ni(NH_{3})_{6}]^{2+}$ with $[Ni(en)_{3}]^{2+}$ for overall formation constant and practical consequence.',
        steps: [
          { label: 'Step 1', text: 'Write overall constants as $\\beta_{6}$ for six ammonia steps and $\\beta_{3}$ for three diamine steps, with $\\log\\beta$ near $8$ for ammonia and near $18$ for $en$ in taught tables. The ten-order gap means $10^{10}$ times larger assembly constant for the chelate.' },
          { label: 'Step 2', text: 'Count released waters: each $en$ displaces two $H_{2}O$, so three $en$ free six waters while six $NH_{3}$ also free six, but the chelate assembles from four particles instead of seven. Fewer reactants toward one product raises $\\Delta S$ and lowers $\\Delta G$.' },
          { label: 'Step 3', text: '```text\n[Ni(NH3)6]2+: log beta ~ 8, labile, readily substituted.\n[Ni(en)3]2+:  log beta ~ 18, inert to dilution, violet and robust.\n```\nPractical result: $en$ masks nickel against ammonia loss and sharpens gravimetric and titrimetric endpoints.' }
        ],
        result: 'Chelate $[Ni(en)_{3}]^{2+}$ outweighs $[Ni(NH_{3})_{6}]^{2+}$ by roughly ten log units from entropy-driven ring closure.'
      }
    ],
    keyTakeaways: [
      'Field strength rises along $I^{-}$ through $H_{2}O$ and $NH_{3}$ toward $CN^{-}$ and $CO$, widening $\\Delta_{o}$.',
      'Observed colour complements absorbed $t_{2g} \\rightarrow e_{g}$ light, with $d^{0}$ and $d^{10}$ colourless.',
      'Octahedral $d$-$d$ bands are Laporte-weak while tetrahedral and charge-transfer bands run strong.',
      'Chelate rings raise $\\log\\beta$ through entropy, with $EDTA^{4-}$ enabling hardness titration.'
    ],
    quiz: [
      // PYQ-pattern: spectrochemical ordering drill
      {
        q: 'Which ligand order follows increasing field strength?',
        options: [`$CN^{-} < NH_{3} < H_{2}O < F^{-}$`, `$H_{2}O < F^{-} < CN^{-} < NH_{3}$`, `$NH_{3} < CN^{-} < F^{-} < H_{2}O$`, `$F^{-} < H_{2}O < NH_{3} < CN^{-}$`],
        answer: 3,
        explanation: 'Step 1: Recall pi donors sit left and pi acceptors sit right. Step 2: Place $F^{-}$ left of $H_{2}O$, $H_{2}O$ left of $NH_{3}$, and $CN^{-}$ near the right end. Step 3: Only the fourth walk rises monotonically.'
      },
      {
        q: 'Why does $[Ti(H_{2}O)_{6}]^{3+}$ appear violet?',
        options: ['Its $d^{1}$ $t_{2g} \\rightarrow e_{g}$ transition absorbs yellow-green, leaving violet as the complement', 'It emits violet light spontaneously', 'Titanium metal is violet', 'Water ligands are violet'],
        answer: 0,
        explanation: 'Step 1: Identify the single $d$ electron promotion across $\\Delta_{o}$. Step 2: Absorbed wavelength falls near $500$ nm in the yellow-green. Step 3: The transmitted complement is violet.'
      },
      {
        q: 'Why are octahedral $d$-$d$ bands weak?',
        options: ['They involve $s$ orbitals only', 'They are spin-allowed and therefore weak', 'Laporte selection forbids $g$ to $g$ transitions in centrosymmetric fields, leaving only vibronically borrowed intensity', 'Water blocks all absorption'],
        answer: 2,
        explanation: 'Step 1: Note octahedral $d$ orbitals all carry $g$ parity. Step 2: Electric-dipole transitions require parity change. Step 3: Hence $d$-$d$ lines borrow weak intensity through vibration, unlike allowed charge transfer.'
      },
      // PYQ-pattern: chelate stability comparison
      {
        q: 'Why is $[Ni(en)_{3}]^{2+}$ far more stable than $[Ni(NH_{3})_{6}]^{2+}$?',
        options: ['Ethylenediamine is a stronger base by ten pH units', 'Chelate closure releases the same waters from fewer reactant particles, giving a large positive $\\Delta S$', 'Nickel changes oxidation state with $en$', 'Ammonia cannot bind nickel'],
        answer: 1,
        explanation: 'Step 1: Compare particle counts: four versus seven reactants toward one product. Step 2: Larger disorder gain raises $\\Delta S$ for the chelate. Step 3: Lower $\\Delta G$ then raises $\\log\\beta$ by about ten units.'
      }
    ]
  }
]
