import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 24: Structure Determination MS NMR IR Combined (Clayden 2e foci 3, 13, 18)
// Sections 24.1 - 24.4. Master study content in Clayden language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh24Content: SectionContent[] = [
  // ---------------------------------------------------------------- 24.1
  {
    sectionId: 'chem-ch24-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Mass spectrometry from exact mass to fragmentation logic',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Nitrogen rule and halogen isotope fingerprints',
            body: 'The **nitrogen rule** states that a neutral molecule with odd nominal mass carries an odd count of nitrogen atoms, instantly flagging formula candidates from the molecular ion $M$ value. Chlorine shows $M+2$ near one third of $M$ while bromine shows $M+2$ near equal height, so halogen counts read directly from peak ratios before any fragmentation. High resolution exact mass then pins elemental composition to millimass accuracy, collapsing dozens of nominal candidates to one formula.'
          },
          {
            kind: 'derivation',
            heading: 'Alpha cleavage and McLafferty rearrangement from radical cations',
            body: 'Ionization removes a nonbonding electron to give a radical cation whose bonds weaken adjacent to heteroatoms, so alpha cleavage expels the largest alkyl radical to leave a resonance stabilized oxonium or iminium ion. Carbonyl compounds with gamma hydrogen undergo McLafferty rearrangement through a six membered hydrogen transfer to split off an alkene and leave an enol radical cation. Benzylic cleavage completes the triad by forming tropylium type cations, and together the three paths assign substructures from peak gaps rather than peak positions alone.'
          },
          {
            kind: 'application',
            heading: 'Formula proof in forensics and metabolomics',
            body: 'Forensic laboratories confirm designer drugs by matching molecular ion exact mass plus isotope pattern plus two diagnostic fragments against libraries, a triple lock that survives matrix interference. Metabolomics extends the logic to thousands of features, using mass defect filtering to flag drug metabolites amid endogenous background. The research frontier pairs ion mobility with fragmentation so that shape as well as mass separates isomers that share every peak.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Clayden opens structure proof with mass spectrometry: the molecular ion gives mass, isotope patterns count halogens, and fragments reveal stable cations. High resolution turns mass into formula. This section reads $M$, $M+1$ and $M+2$ plus classic cleavages exactly as Chapter 3 teaches them.',
    objectives: [
      'Read molecular ion $M^{+}$ and rule out fragment impostors by nitrogen and mass checks',
      'Use $M+2$ size to count $Cl$ and $Br$ and $M+1$ to count carbons',
      'Assign alpha cleavage, McLafferty and benzylic fragments to substructures'
    ],
    concepts: [
      {
        term: 'Molecular ion and nitrogen rule',
        kind: 'definition',
        statement: 'The **molecular ion $M^{+}$** `molecular-ion` is the unfragmented radical cation; an odd mass implies an odd nitrogen count by the **nitrogen rule** `nitrogen-rule`.',
        detail: 'Propranolol $C_{16}H_{21}NO_{2}$ shows $M^{+}$ at $259$ with one nitrogen, odd mass matching odd nitrogen. Loss of $18$ or $28$ from a candidate $M^{+}$ flags it as a fragment instead.'
      },
      {
        term: 'Chlorine and bromine isotope fingerprints',
        kind: 'law',
        statement: '**$M$ to $M+2$ ratios** `isotope` diagnose halogens: $Cl$ gives about $3$ to $1$ and $Br$ about $1$ to $1$, with $CH_{2}Cl_{2}$ style combinations following binomial expansion.',
        detail: 'A $1$ to $1$ doublet two units apart marks one bromine; a $9$ to $6$ to $1$ trio marks two chlorines. Fluorine and iodine are monoisotopic and show no $M+2$ partner.'
      },
      {
        term: 'High resolution formula proof',
        kind: 'method',
        statement: '**High resolution mass** `HRMS` measures $m$ to $z$ to four decimals, separating $C_{3}H_{6}O$ from $C_{3}H_{8}N$ style isobars by millimass defect.',
        detail: '$^{12}C$ defines $12.0000$ while $^{1}H$ is $1.0078$ and $^{16}O$ is $15.9949$, so exact mass encodes composition. A $5$ ppm match confirms formula before $NMR$ begins.'
      },
      {
        term: 'Alpha cleavage next to heteroatoms',
        kind: 'theorem',
        statement: '**Alpha cleavage** `alpha-cleavage` breaks the bond beside $O$ and $N$ to give oxonium $R_{2}C=O^{+}R$ and iminium $R_{2}C=N^{+}R_{2}$ ions, often the base peak.',
        detail: 'Ethers cleave to $CH_{3}O^{+}=CH_{2}$ at $45$; amines cleave to $CH_{2}=N^{+}Me_{2}$ at $58$. The heteroatom lone pair stabilises the cation through resonance.'
      },
      {
        term: 'McLafferty and benzylic cleavage',
        kind: 'insight',
        statement: 'Carbonyls with gamma hydrogen undergo **McLafferty rearrangement** `McLafferty` through a six membered hydrogen transfer, while alkylbenzenes cleave to **tropylium $C_{7}H_{7}^{+}$** `tropylium` at $91$.',
        detail: 'Butanone McLafferty gives enol radical cation at $58$ plus ethene. Propylbenzene loses ethyl to benzyl then expands to aromatic tropylium, the dominant $91$ peak.'
      }
    ],
    figures: [
      {
        caption: 'Isotope fingerprints $M$ to $M+2$ for $Cl$ about $3$ to $1$ and $Br$ about $1$ to $1$; alpha cleavage to oxonium and McLafferty six membered $H$-transfer.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mass spectrometry isotope and fragmentation map"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">M and M+2</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">Cl 3:1, Br 1:1</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">alpha cleavage</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">to oxonium base peak</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">tropylium at 91</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">McLafferty</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">6-member H shift</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><line x1="80" y1="230" x2="640" y2="230" stroke="currentColor" stroke-width="1.6"/><text x="360" y="255" text-anchor="middle" font-size="12" fill="currentColor">HRMS exact mass confirms formula</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Halogen count from M and M+2',
        problem: 'A mass spectrum shows $M^{+}$ at $156$ and $M+2$ at $158$ with about equal heights plus $M+1$ small. Identify the halogen and estimate carbons.',
        steps: [
          { label: 'Step 1', text: 'Read $M$ to $M+2$ near $1$ to $1$ as one bromine; $3$ to $1$ would be chlorine:\n```text\nM:M+2 ~ 1:1 -> one Br\nM+1 ~ 1.1 percent per C -> count C\nodd or even mass -> nitrogen rule check\n```\nIsotope ratio is the fastest halogen test.' },
          { label: 'Step 2', text: 'Assign one $Br$ contributing about $79$ mass units, leaving $77$ for hydrocarbon plus heteroatoms.' },
          { label: 'Step 3', text: 'Use $M+1$ near $7$ percent to estimate about six carbons, then confirm by high resolution exact mass.' }
        ],
        result: 'One bromine present with about six carbons; $3$ to $1$ would instead mark chlorine.'
      },
      {
        title: 'Base peak by alpha cleavage',
        problem: 'Diethylamine $CH_{3}CH_{2}NHCH_{2}CH_{3}$ shows $M^{+}$ at $73$ and base peak at $58$. Explain the $15$ unit loss.',
        steps: [
          { label: 'Step 1', text: 'Draw alpha cleavage beside nitrogen: break $CH_{3}$ from the alpha carbon to give iminium $CH_{3}CH=N^{+}HCH_{2}CH_{3}$.' },
          { label: 'Step 2', text: 'Mass drops $73$ to $58$ by methyl radical loss, stabilised by $N$ lone pair resonance.' },
          { label: 'Step 3', text: 'Rule out McLafferty because no carbonyl gamma hydrogen frame exists here.' }
        ],
        result: 'Base peak at $58$ is the $N$-stabilised iminium ion from alpha methyl loss.'
      }
    ],
    keyTakeaways: [
      'Odd $M^{+}$ mass implies odd nitrogen count by the nitrogen rule.',
      '$M$ to $M+2$ about $3$ to $1$ marks $Cl$ and about $1$ to $1$ marks $Br$.',
      'High resolution exact mass converts $m$ to $z$ into molecular formula.',
      'Alpha cleavage and McLafferty plus $91$ tropylium assign substructures.'
    ],
    quiz: [
      {
        q: '$M^{+}$ $156$ and $M+2$ $158$ at equal height means:',
        options: ['One bromine', 'One fluorine', 'No halogen', 'Two nitrogens only'],
        answer: 0,
        explanation: 'Step 1: Measure $M$ to $M+2$ near $1$ to $1$. Step 2: Match bromine isotope abundance. Step 3: Exclude $3$ to $1$ chlorine pattern.'
      },
      // PYQ-pattern: nitrogen rule plus fragment check drill
      {
        q: 'Odd $M^{+}$ at $259$ suggests:',
        options: ['Zero nitrogen', 'Odd nitrogen count such as one', 'Only halogens', 'Fragment without molecule'],
        answer: 1,
        explanation: 'Step 1: Apply nitrogen rule to odd mass. Step 2: Require odd nitrogen total. Step 3: Match $C_{16}H_{21}NO_{2}$ with one nitrogen.'
      },
      {
        q: 'Base peak at $91$ from alkylbenzene is:',
        options: ['Phenyl cation $77$', 'McLafferty enol', 'Tropylium $C_{7}H_{7}^{+}$', 'Molecular ion'],
        answer: 2,
        explanation: 'Step 1: Cleave benzylic bond to benzyl cation. Step 2: Expand to aromatic tropylium ring. Step 3: Observe dominant $91$ peak.'
      },
      {
        q: 'McLafferty needs:',
        options: ['Alpha heteroatom only', 'Aromatic ring always', 'Halogen isotope', 'Carbonyl with gamma hydrogen and six membered transfer'],
        answer: 3,
        explanation: 'Step 1: Fold gamma $H$ to carbonyl oxygen. Step 2: Transfer through six atoms. Step 3: Split to enol ion plus alkene.'
      }
    ]
  },
  // ---------------------------------------------------------------- 24.2
  {
    sectionId: 'chem-ch24-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Chemical shift coupling and exchange in proton NMR',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Integration shift and splitting read in that order',
            body: 'The **reading theorem** for proton spectra states that chemical shift groups protons by environment, integration counts them, and $n+1$ splitting maps neighbors. Aldehyde protons appear far downfield near ten parts per million units from deshielding, aromatics cluster near seven, and alkyl signals march upfield with shielding. A $D_2O$ shake that erases a signal marks exchangeable $OH$ or $NH$ protons, removing the most common assignment trap in one drop.'
          },
          {
            kind: 'derivation',
            heading: 'Shielding anisotropy and Karplus coupling',
            body: 'Model chemical shift as local diamagnetic shielding plus neighbor anisotropy from pi circulation, which deshields protons in the plane of carbonyls and aromatics while shielding those above rings. Vicinal coupling follows the Karplus curve $J = A + B\\cos\\phi + C\\cos 2\\phi$ with dihedral angle $\\phi$, giving large trans couplings near ten hertz units and small gauche values near two. Together the two relations turn peak positions into geometry: shift reports electronic surroundings while $J$ reports dihedral angles that distinguish axial from equatorial and cis from trans.'
          },
          {
            kind: 'example',
            heading: 'Assembling fragments from shift integration and trees',
            body: 'A three proton triplet near one part per million units plus a two proton quartet near four marks an ethoxy group, with $n+1$ trees confirming mutual neighbors and integration fixing counts. A one proton singlet that vanishes on $D_2O$ shake is an $OH$ group rather than a methine, and a downfield one proton singlet near ten is an aldehyde whose carbon count must rise by one. Joining such fragments by coupling networks reconstructs the skeleton before carbon spectra confirm it.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'Proton $NMR$ counts hydrogens, reports their environment by chemical shift, and shows neighbours by splitting. Clayden reads shift first, integration second and coupling third, with $D_{2}O$ shakes marking exchangeable $OH$ and $NH$. This section turns $^{1}H$ spectra into fragments ready for assembly.',
    objectives: [
      'Assign $^{1}H$ shift regions from alkyl to aldehyde with deshielding logic',
      'Read $n+1$ splitting and coupling constants to build neighbour trees',
      'Use integration and $D_{2}O$ exchange to place $OH$, $NH$ and symmetric sets'
    ],
    concepts: [
      {
        term: 'Chemical shift scale',
        kind: 'definition',
        statement: 'Resonance frequency relative to **$TMS$ at $0$ ppm** `shift` reports shielding: alkyl near $1$ ppm, allylic near $2$ ppm, $O$-$CH$ near $3$ to $4$ ppm, alkene near $5$ to $6$ ppm, aromatic near $7$ to $8$ ppm, aldehyde near $9$ to $10$ ppm.',
        detail: 'Electronegative $O$ and anisotropic $C=O$ plus ring currents deshield neighbours downfield. $CDCl_{3}$ residual at $7.26$ ppm and $TMS$ at $0$ ppm anchor the scale.'
      },
      {
        term: 'Integration counts protons',
        kind: 'law',
        statement: '**Integration** `integration` area ratios equal proton count ratios, so $6H$ singlet plus $4H$ plus $1H$ builds $C_{11}$-style fragments before coupling is read.',
        detail: 'Exchangeable $OH$ integrates poorly when broad or hydrogen bonded. Symmetric methyls double the height for one shift, the first symmetry clue.'
      },
      {
        term: 'Spin-spin splitting rule',
        kind: 'theorem',
        statement: '**$n+1$ rule** `splitting` splits $H$ by $n$ equivalent neighbours into $n+1$ lines with binomial heights, sharing coupling constant $J$ in Hz on both partners.',
        detail: 'Ethyl $CH_{3}$ triplet plus $CH_{2}$ quartet share $J$ near $7$ Hz. Diastereotopic $CH_{2}$ beside a stereocentre splits further into doublets of quartets with distinct $J$ values.'
      },
      {
        term: 'Exchangeable protons vanish with D2O',
        kind: 'method',
        statement: '**$D_{2}O$ shake** `D2O` removes $OH$, $NH$ and $SH$ signals by $H$ to $D$ exchange while $C$-$H$ stays, simplifying coupling and confirming heteroatom protons.',
        detail: 'Phenol $OH$ near $5$ ppm disappears and ortho couplings sharpen. Enol $OH$ near $8$ ppm plus vinyl $H$ near $5.5$ ppm in dimedone marks the enol tautomer directly.'
      },
      {
        term: 'Coupling constants encode geometry',
        kind: 'insight',
        statement: '**$J$ values** `J` report relation: geminal about $12$ Hz, vicinal anti about $10$ Hz versus gauche about $3$ Hz, ortho aromatic about $8$ Hz, trans alkene about $15$ Hz versus cis about $10$ Hz.',
        detail: 'Karplus dependence on dihedral angle assigns axial-axial versus axial-equatorial in rings. Alkene $J$ distinguishes $E$ from $Z$ faster than $NOE$ in simple cases.'
      }
    ],
    figures: [
      {
        caption: 'Proton $NMR$ ladder $TMS$ $0$ ppm to aldehyde $10$ ppm; ethyl triplet-quartet with shared $J$; $D_{2}O$ loss marks $OH$ and $NH$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Proton NMR shift splitting and exchange scheme"><line x1="60" y1="200" x2="660" y2="200" stroke="currentColor" stroke-width="2"/><text x="60" y="230" font-size="12" fill="currentColor">0 TMS</text><text x="200" y="230" font-size="12" fill="currentColor">1 alkyl</text><text x="320" y="230" font-size="12" fill="currentColor">3-4 O-CH</text><text x="440" y="230" font-size="12" fill="currentColor">7 Ar</text><text x="580" y="230" font-size="12" fill="currentColor">10 CHO</text><rect x="80" y="80" width="220" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="190" y="108" text-anchor="middle" font-size="13" fill="currentColor">CH3 triplet + CH2 quartet</text><text x="190" y="128" text-anchor="middle" font-size="12" fill="currentColor">shared J about 7 Hz</text><rect x="400" y="80" width="220" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="510" y="108" text-anchor="middle" font-size="13" fill="currentColor">D2O shake</text><text x="510" y="128" text-anchor="middle" font-size="12" fill="currentColor">OH NH vanish</text><circle cx="120" cy="200" r="6" fill="currentColor"/><circle cx="600" cy="200" r="6" fill="currentColor"/><text x="360" y="290" text-anchor="middle" font-size="12" fill="currentColor">integration first, splitting second, J third</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Ethyl group triplet-quartet proof',
        problem: 'A spectrum shows $3H$ triplet at $1.2$ ppm and $2H$ quartet at $4.1$ ppm with common $J$ near $7$ Hz. Assign the fragment and explain the downfield quartet.',
        steps: [
          { label: 'Step 1', text: 'Match $n+1$: $3H$ sees $2$ neighbours as triplet and $2H$ sees $3$ as quartet:\n```text\nCH3-CH2-X, shared J ~ 7 Hz\nCH2 at 4.1 ppm -> O-CH2 deshielded\nfree: ethyl ester or ether fragment\n```\nShared $J$ proves mutual coupling.' },
          { label: 'Step 2', text: 'Place $O$ beside $CH_{2}$: $O$-$CH_{2}CH_{3}$ deshields to $4.1$ ppm, matching ethyl ester $COOCH_{2}CH_{3}$.' },
          { label: 'Step 3', text: 'Check integration $3$ to $2$ and absence of $D_{2}O$ loss, confirming $C$-$H$ only.' }
        ],
        result: 'Ethoxy fragment $O$-$CH_{2}CH_{3}$ with triplet methyl and deshielded quartet methylene.'
      },
      {
        title: 'Phenol plus enol exchange test',
        problem: 'Phenol shows aromatic multiplets plus broad $1H$ near $5$ ppm that vanishes on $D_{2}O$ shake; dimedone shows extra $OH$ near $8.15$ ppm plus vinyl $H$ near $5.5$ ppm. Interpret both.',
        steps: [
          { label: 'Step 1', text: 'Mark vanishing signals as exchangeable: phenol $OH$ and dimedone enol $OH$ exchange to $OD$.' },
          { label: 'Step 2', text: 'Note dimedone vinyl $H$ at $5.5$ ppm plus two $sp^{2}$ carbons as enol $C=C$-$OH$ proof beside keto signals.' },
          { label: 'Step 3', text: 'Simplify: phenol aromatic couplings sharpen after $OH$ loss, confirming $OH$ coupling partner.' }
        ],
        result: 'Phenol $OH$ confirmed by exchange; dimedone keto-enol mixture proved by enol $OH$ plus vinyl $H$.'
      }
    ],
    keyTakeaways: [
      'Shift ladder $TMS$ $0$ ppm to aldehyde $10$ ppm sorts $H$ by environment.',
      'Integration ratios count $H$ before splitting is read.',
      '$n+1$ with shared $J$ builds neighbour trees and ethyl fingerprints.',
      '$D_{2}O$ loss marks $OH$ and $NH$ while $J$ reports $E$ and $Z$ plus dihedral.'
    ],
    quiz: [
      {
        q: '$3H$ triplet plus $2H$ quartet with same $J$ is:',
        options: ['Isolated methyls', 'Ethyl $CH_{3}$-$CH_{2}$ group', 'Two unrelated singlets', 'Aromatic pair'],
        answer: 1,
        explanation: 'Step 1: Count neighbours by $n+1$. Step 2: Match shared $J$ near $7$ Hz. Step 3: Join as mutually coupled ethyl.'
      },
      // PYQ-pattern: D2O exchange assignment drill
      {
        q: 'Signal vanishing on $D_{2}O$ shake is:',
        options: ['Alkyl $CH_{3}$', 'Aromatic $CH$', 'Exchangeable $OH$ or $NH$', 'Aldehyde $CHO$ always'],
        answer: 2,
        explanation: 'Step 1: Exchange labile $H$ to $D$. Step 2: Silence its resonance. Step 3: Keep all $C$-$H$ signals intact.'
      },
      {
        q: 'Trans alkene $J$ versus cis is about:',
        options: ['$15$ Hz versus $10$ Hz', '$3$ Hz versus $12$ Hz', 'Equal always', '$0$ Hz for both'],
        answer: 0,
        explanation: 'Step 1: Measure doublet spacing in Hz. Step 2: Compare to $15$ trans benchmark. Step 3: Assign $E$ for large and $Z$ for smaller.'
      },
      {
        q: 'Quartet at $4.1$ ppm for $2H$ suggests:',
        options: ['Alkyl $CH_{2}$ far from heteroatoms', 'Aldehyde proton', 'Exchangeable $NH_{2}$', '$O$-$CH_{2}$ deshielded by oxygen'],
        answer: 3,
        explanation: 'Step 1: Read downfield shift to $4.1$ ppm. Step 2: Require electronegative neighbour. Step 3: Assign $O$-$CH_{2}CH_{3}$ fragment.'
      }
    ]
  },
  // ---------------------------------------------------------------- 24.3
  {
    sectionId: 'chem-ch24-s3',
    readingTime: 9,
    intro: 'Carbon $NMR$ sees the skeleton directly with one line per unique carbon, while infrared reports bonds by vibration. Clayden counts symmetry in $^{13}C$ and matches $C=O$, $OH$ and $C=C$ stretches in $IR$. Together they filter structures before proton $NMR$ finishes the job.',
    objectives: [
      'Count $^{13}C$ signals to read symmetry and carbonyl types',
      'Assign $IR$ $C=O$, $OH$, $NH$ and $C=C$ bands with hydrogen bonding shifts',
      'Combine $^{13}C$ plus $IR$ to reject wrong constitutions early'
    ],
    concepts: [
      {
        term: 'Carbon shift regions',
        kind: 'definition',
        statement: 'Carbon resonance spans **$0$ to $220$ ppm** `carbon-shift`: alkyl $10$ to $50$ ppm, $O$-$C$ $50$ to $90$ ppm, alkene and aromatic $100$ to $150$ ppm, carbonyl $160$ to $220$ ppm.',
        detail: 'Ketones near $200$ ppm, esters near $170$ ppm and amides near $165$ ppm separate by electron donation. Proton decoupling collapses each carbon to a singlet for counting.'
      },
      {
        term: 'Symmetry counting in carbon NMR',
        kind: 'method',
        statement: '**Equivalent carbons share one $^{13}C$ line** `symmetry`, so para-xylene shows four lines for eight carbons while ethylbenzene shows six.',
        detail: 'Dimedone keto form shows fewer $sp^{2}$ lines than its enol with two distinct $sp^{2}$ carbons. Missing lines diagnose planes and rotation axes without crystals.'
      },
      {
        term: 'DEPT sorts CH3 CH2 CH and C',
        kind: 'method',
        statement: '**$DEPT$ editing** `DEPT` phases $CH_{3}$ and $CH$ up, $CH_{2}$ down and quaternary absent, separating methyl, methylene, methine and $C$ types.',
        detail: 'A carbonyl $C$ vanishes in $DEPT$ $90$ and $135$ while $CH$ stays. Combined with proton $NMR$, $DEPT$ maps which protons sit on which carbons.'
      },
      {
        term: 'Infrared group frequencies',
        kind: 'law',
        statement: '**$IR$ stretches** `IR` mark $O$-$H$ broad $3200$ to $3600$, $N$-$H$ near $3400$, $C$-$H$ near $2900$, $C=O$ strong $1650$ to $1780$ and $C=C$ weak near $1650$ in wavenumbers $cm^{-1}$.',
        detail: 'Hydrogen bonding broadens and lowers $O$-$H$; conjugation lowers $C=O$ by about $20$ units. Anhydrides show two $C=O$ bands by symmetric and antisymmetric coupling.'
      },
      {
        term: 'Carbonyl fingerprint logic',
        kind: 'insight',
        statement: '**$C=O$ position plus $O$-$H$ shape** `fingerprint` separates acids with broad $2500$ to $3300$ $O$-$H$ plus $1710$ $C=O$ from ketones with sharp $1715$ and no broad $O$-$H$.',
        detail: 'Esters near $1735$ lack broad $O$-$H$; amides near $1650$ add $N$-$H$ pair. Nitro $1550$ and $1350$ duo plus $C=C$ absence further filters aromatics versus alkenes.'
      }
    ],
    figures: [
      {
        caption: '$^{13}C$ ladder $0$ to $220$ ppm with symmetry collapse; $IR$ $O$-$H$ broad versus $C=O$ sharp fingerprints for acid, ester and ketone.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carbon NMR and IR fingerprint scheme"><line x1="60" y1="180" x2="660" y2="180" stroke="currentColor" stroke-width="2"/><text x="80" y="210" font-size="12" fill="currentColor">0 alkyl</text><text x="220" y="210" font-size="12" fill="currentColor">70 O-C</text><text x="360" y="210" font-size="12" fill="currentColor">130 Ar</text><text x="500" y="210" font-size="12" fill="currentColor">200 C=O</text><rect x="80" y="80" width="220" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="190" y="105" text-anchor="middle" font-size="13" fill="currentColor">symmetry: fewer lines</text><text x="190" y="125" text-anchor="middle" font-size="12" fill="currentColor">DEPT sorts CHn</text><rect x="400" y="80" width="220" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="510" y="105" text-anchor="middle" font-size="13" fill="currentColor">IR: broad OH vs sharp C=O</text><text x="510" y="125" text-anchor="middle" font-size="12" fill="currentColor">acid vs ester vs ketone</text><circle cx="360" cy="180" r="6" fill="currentColor"/><text x="360" y="270" text-anchor="middle" font-size="12" fill="currentColor">count C lines first, then bond vibrations</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Acid versus ester by combined bands',
        problem: 'Two isomers $C_{4}H_{8}O_{2}$ show $^{13}C$ carbonyl at $173$ ppm versus $171$ ppm; $IR$ shows broad $3000$ plus $1710$ versus sharp $1735$ with no broad $O$-$H$. Assign acid and ester.',
        steps: [
          { label: 'Step 1', text: 'Read $IR$ first for $O$-$H$: broad $2500$ to $3300$ marks carboxylic $O$-$H$:\n```text\nbroad OH + 1710 C=O -> acid\nsharp 1735, no broad OH -> ester\n13C count confirms symmetry\n```\nVibration filters before skeleton.' },
          { label: 'Step 2', text: 'Match $^{13}C$: both near $170$ ppm confirm $C=O$ type, not ketone near $200$ ppm.' },
          { label: 'Step 3', text: 'Confirm by proton $NMR$: acid $OH$ near $11$ ppm vanishing with $D_{2}O$ versus ester $O$-$CH$ near $4$ ppm.' }
        ],
        result: 'Broad $O$-$H$ plus $1710$ is butanoic acid; sharp $1735$ without broad $O$-$H$ is ethyl acetate style ester.'
      },
      {
        title: 'Symmetry cut in xylene isomers',
        problem: 'Para-xylene and ethylbenzene both $C_{8}H_{10}$ show different $^{13}C$ counts. Predict lines and use $DEPT$ to separate.',
        steps: [
          { label: 'Step 1', text: 'Draw symmetry: para-xylene has centre and mirror giving four unique carbons; ethylbenzene has none giving six.' },
          { label: 'Step 2', text: '$DEPT$ shows two $CH_{3}$ versus one $CH_{3}$ plus one $CH_{2}$, separating the substitution pattern.' },
          { label: 'Step 3', text: 'Check proton $NMR$: para-xylene singlet aromatic $4H$ versus ethylbenzene multiplet $5H$.' }
        ],
        result: 'Four $^{13}C$ lines mark para-xylene; six lines mark ethylbenzene.'
      }
    ],
    keyTakeaways: [
      '$^{13}C$ $0$ to $220$ ppm sorts alkyl, $O$-$C$, aromatic and $C=O$ types.',
      'Equivalent carbons share lines, so count reports symmetry directly.',
      '$DEPT$ phases $CH_{3}$ and $CH$ up, $CH_{2}$ down and hides quaternary $C$.',
      '$IR$ broad $O$-$H$ plus $C=O$ place separates acids from esters and ketones.'
    ],
    quiz: [
      {
        q: 'Ketone $C=O$ in $^{13}C$ appears near:',
        options: ['$50$ ppm', '$200$ ppm', '$130$ ppm', '$10$ ppm'],
        answer: 1,
        explanation: 'Step 1: Recall deshielded carbonyl range. Step 2: Separate ketone near $200$ from ester near $170$. Step 3: Assign the downfield line to ketone.'
      },
      // PYQ-pattern: IR acid versus ester filter drill
      {
        q: 'Broad $2500$ to $3300$ plus $1710$ marks:',
        options: ['Ester', 'Ketone only', 'Carboxylic acid', 'Alkene'],
        answer: 2,
        explanation: 'Step 1: Read broad hydrogen bonded $O$-$H$. Step 2: Add $C=O$ near $1710$. Step 3: Combine to carboxylic acid fingerprint.'
      },
      {
        q: 'Para-xylene shows $^{13}C$ lines numbering:',
        options: ['Four', 'Eight', 'Six', 'Two'],
        answer: 0,
        explanation: 'Step 1: Find symmetry plane and centre. Step 2: Pair equivalent ring and methyl carbons. Step 3: Count four unique signals.'
      },
      {
        q: '$DEPT$ $135$ hides:',
        options: ['$CH_{3}$', '$CH_{2}$ shown down', '$CH$', 'Quaternary $C$'],
        answer: 3,
        explanation: 'Step 1: Attach protons test for $DEPT$. Step 2: Suppress carbons with no $H$. Step 3: Keep $CH_{n}$ phased while $C$ vanishes.'
      }
    ]
  },
  // ---------------------------------------------------------------- 24.4
  {
    sectionId: 'chem-ch24-s4',
    readingTime: 10,
    intro: 'Clayden closes spectroscopy by combining everything: formula from mass, unsaturation from double bond equivalents, skeleton from $^{13}C$ and proton $NMR$, bonds from $IR$. Double bond equivalents come first because they cap rings plus pi bonds. This section runs the full elucidation workflow to one structure.',
    objectives: [
      'Compute double bond equivalents from formula with halogen and nitrogen correction',
      'Assemble fragments from $MS$, $^{13}C$, $^{1}H$ and $IR$ into one constitution',
      'Propose chemical proof by synthesis or derivatisation for the assigned structure'
    ],
    concepts: [
      {
        term: 'Double bond equivalents formula',
        kind: 'definition',
        statement: '**Double bond equivalents** `DBE` $DBE = C - H$ to $2 - X$ to $2 + N$ to $2 + 1$ count rings plus pi bonds, so $C_{6}H_{6}$ gives $4$ for benzene.',
        detail: 'Halogen counts as hydrogen; oxygen is ignored. $DBE$ of $5$ with one $C=O$ plus phenyl leaves four for the ring, the classic combined filter.'
      },
      {
        term: 'Fragment assembly order',
        kind: 'method',
        statement: '**Assemble largest fragments first** `assembly` $Ph$ plus $C=O$ plus $O$-$CH_{2}CH_{3}$ from $NMR$ and $MS$, then join by valency and $DBE$ budget.',
        detail: 'Clayden joins red chain pieces knowing $OH$ and $NH_{2}$ cap ends because they bond once. Branched versus linear chains separate by fitting $11$ hydrogens without extra $DBE$.'
      },
      {
        term: 'Combined shift and IR cross-check',
        kind: 'theorem',
        statement: 'Every proposed group must satisfy **all spectra together** `cross-check`: $^{13}C$ $C=O$ needs $IR$ $C=O$, aromatic $H$ needs $DBE$ of $4$ and $MS$ $91$ needs benzyl frame.',
        detail: 'A $173$ ppm carbon without $IR$ carbonyl rejects the ester hypothesis. An $11$ ppm broad $H$ without broad $IR$ $O$-$H$ rejects the acid hypothesis.'
      },
      {
        term: 'Derivatisation as structure proof',
        kind: 'method',
        statement: '**Chemical derivatives** `derivative` such as $2,4$-dinitrophenylhydrazones for $C=O$ and acetates for $OH$ confirm groups by new melting points and shifted spectra.',
        detail: 'Iodoform $CHI_{3}$ precipitate proves $CH_{3}CO$; Tollens silver mirror proves aldehyde. Mixed melting point with authentic sample is the classical identity test.'
      },
      {
        term: 'Synthesis as final proof',
        kind: 'insight',
        statement: '**Independent synthesis** `synthesis` from known starting materials that matches all spectra is the ultimate proof, closing the Clayden loop from data to made molecule.',
        detail: 'Propranolol fragments $X$ and $Y$ plus formula $C_{16}H_{21}NO_{2}$ assemble to one ether amine; synthesis from naphthol plus epichlorohydrin plus isopropylamine reproduces it exactly.'
      }
    ],
    figures: [
      {
        caption: 'Elucidation funnel $MS$ formula to $DBE$ to $^{13}C$ symmetry to $^{1}H$ fragments to $IR$ bonds to synthesis proof.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Combined elucidation workflow funnel"><rect x="40" y="120" width="140" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="110" y="148" text-anchor="middle" font-size="13" fill="currentColor">MS formula</text><text x="110" y="168" text-anchor="middle" font-size="12" fill="currentColor">DBE first</text><rect x="230" y="110" width="160" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="310" y="138" text-anchor="middle" font-size="13" fill="currentColor">13C + 1H pieces</text><text x="310" y="158" text-anchor="middle" font-size="12" fill="currentColor">symmetry + splitting</text><text x="310" y="176" text-anchor="middle" font-size="12" fill="currentColor">IR bonds filter</text><rect x="440" y="120" width="220" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="550" y="148" text-anchor="middle" font-size="13" fill="currentColor">one constitution</text><text x="550" y="168" text-anchor="middle" font-size="12" fill="currentColor">derivative + synthesis</text><line x1="180" y1="155" x2="230" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="230,155 220,150 220,160" fill="currentColor"/><line x1="390" y1="155" x2="440" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="440,155 430,150 430,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">every group must pass every spectrum</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Full workup of C8H8O2 isomer',
        problem: 'Formula $C_{8}H_{8}O_{2}$ shows $M^{+}$ $136$, $IR$ $1685$ plus broad $3000$, $^{13}C$ seven lines with $C=O$ near $171$ ppm, $^{1}H$ $5H$ aromatic plus $3H$ singlet near $2.4$ ppm. Elucidate.',
        steps: [
          { label: 'Step 1', text: 'Compute $DBE = 8 - 8$ to $2 + 1 = 5$:\n```text\nDBE 5 = phenyl(4) + C=O(1)\nIR broad OH + C=O -> acid or enol acid\n7 lines for 8 C -> one pair equivalent\n```\nBudget rings plus pi bonds first.' },
          { label: 'Step 2', text: 'Assemble phenyl $C_{6}H_{5}$ plus $C=O$ plus $CH_{3}$ plus $O$: methylphenyl acid frame fits $C_{8}H_{8}O_{2}$ with $DBE$ $5$.' },
          { label: 'Step 3', text: 'Place methyl para by symmetry: four aromatic $^{13}C$ plus symmetric $^{1}H$ pair pattern; confirm by synthesis from para-xylene oxidation.' }
        ],
        result: 'Para-toluic acid $CH_{3}$-$C_{6}H_{4}$-$COOH$ matches $DBE$, $IR$, $^{13}C$ count and $^{1}H$ pattern.'
      },
      {
        title: 'Propranolol style fragment joining',
        problem: 'Formula $C_{16}H_{21}NO_{2}$ with naphthyl $^{1}H$, $O$-$CH_{2}$ at $4$ ppm, $CH$-$OH$ and isopropyl $6H$ doublet is assembled. State the joining logic and proof.',
        steps: [
          { label: 'Step 1', text: 'List fragments: naphthyloxy $C_{10}H_{7}O$, glycerol linker $OCH_{2}CH(OH)CH_{2}$, isopropylamine $NHCH(CH_{3})_{2}$.' },
          { label: 'Step 2', text: 'Join $O$ to $CH_{2}$ and $N$ to $CH_{2}$ because $O$ and $N$ cap valency; check $DBE$ naphthyl $7$ matches formula.' },
          { label: 'Step 3', text: 'Prove by synthesis from naphthol plus epichlorohydrin plus isopropylamine matching all spectra.' }
        ],
        result: 'Naphthyloxy propanolamine constitution proved by fragment fit plus independent synthesis.'
      }
    ],
    keyTakeaways: [
      '$DBE = C - H$ to $2 - X$ to $2 + N$ to $2 + 1$ caps rings plus pi bonds first.',
      'Largest $NMR$ and $MS$ fragments join first under valency and $DBE$ budget.',
      'Each group must pass $^{13}C$, $^{1}H$, $IR$ and $MS$ together.',
      'Derivatives plus independent synthesis close the proof.'
    ],
    quiz: [
      {
        q: '$C_{6}H_{6}$ $DBE$ equals:',
        options: ['Three', 'Five', 'Four', 'Six'],
        answer: 2,
        explanation: 'Step 1: Apply $6 - 6$ to $2 + 1$. Step 2: Compute $6-3+1=4$. Step 3: Match benzene ring plus three pi bonds.'
      },
      // PYQ-pattern: DBE plus spectrum cross-check drill
      {
        q: 'Halogen in $DBE$ counts as:',
        options: ['Nitrogen', 'Hydrogen', 'Oxygen ignored differently', 'Carbon'],
        answer: 1,
        explanation: 'Step 1: Treat $X$ as monovalent like $H$. Step 2: Subtract $X$ to $2$ with $H$ to $2$. Step 3: Ignore $O$ fully.'
      },
      {
        q: 'Best first step in elucidation is:',
        options: ['Formula then $DBE$ budget', 'Assign every $J$ first', 'Synthesis immediately', 'Guess without $IR$'],
        answer: 0,
        explanation: 'Step 1: Fix atoms from $MS$ exact mass. Step 2: Cap unsaturation with $DBE$. Step 3: Filter fragments against that budget.'
      },
      {
        q: 'Final proof of constitution is:',
        options: ['One $IR$ band', 'Single $^{1}H$ shift', 'Colour alone', 'Matching independent synthesis and derivatives'],
        answer: 3,
        explanation: 'Step 1: Make the proposed structure independently. Step 2: Match all spectra and derivatives. Step 3: Confirm mixed melting point identity.'
      }
    ]
  }
]
