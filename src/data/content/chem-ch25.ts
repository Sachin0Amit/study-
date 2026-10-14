import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 25: Heterocycles and Retrosynthetic Analysis (Clayden 2e foci 28, 29, 30)
// Sections 25.1 - 25.4. Master study content in Clayden language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh25Content: SectionContent[] = [
  // ---------------------------------------------------------------- 25.1
  {
    sectionId: 'chem-ch25-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Heteroaromatic sextets and site selectivity rules',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Lone pair in versus out decides reactivity',
            body: 'The **heterocycle theorem** states that six membered pyridine keeps nitrogen lone pair out of the sextet and reacts as an electron poor ring, while five membered pyrrole furan and thiophene donate a pair into the sextet and react as electron rich rings. Electrophiles therefore attack pyrrole at $C_2$ with exceptional speed but attack pyridine only under forcing conditions at $C_3$. Nucleophiles invert the order, adding to pyridine readily while ignoring pyrrole, a split that plans every heterocycle synthesis.'
          },
          {
            kind: 'derivation',
            heading: 'Frontier coefficients that place the incoming group',
            body: 'Draw the highest occupied orbital of pyrrole to find large coefficients at $C_2$, so electrophilic sigma complexes stabilize best there, while pyridine lowest unoccupied orbital concentrates at $C_2$ and $C_4$ for nucleophilic capture. Protonation of pyrrole under strong acid destroys aromaticity and triggers polymerization, which is why acylation uses mild Lewis conditions with protecting strategies. The orbital picture thus converts memorized site tables into coefficient reading that transfers to new fused rings.'
          },
          {
            kind: 'application',
            heading: 'Drug scaffolds built on heterocycle logic',
            body: 'Kinase inhibitors, antihistamines and conductive polymers all carry pyridine pyrrole or thiophene cores chosen for the reactivity above. Medicinal chemists block sensitive pyrrole positions before electrophilic steps and exploit pyridine nitrogen for salt formation and metal coordination. Materials research tunes band gaps by fusing electron rich and poor rings alternately, a direct application of sextet electron counting to devices.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Clayden divides aromatic heterocycles by electron count: six membered pyridine is electron poor at carbon while five membered pyrrole, furan and thiophene are electron rich. The heteroatom lone pair decides: pyridine nitrogen keeps its pair out of the sextet while pyrrole donates it. This section maps where electrophiles and nucleophiles attack each ring.',
    objectives: [
      'Classify pyridine versus pyrrole, furan and thiophene by lone pair in or out of the sextet',
      'Predict electrophilic sites $C_{2}$ for pyrrole and $C_{3}$ for pyridine with sigma reasoning',
      'Plan pyridine nucleophilic substitution and pyrrole acid sensitivity guards'
    ],
    concepts: [
      {
        term: 'Pyridine electron poor ring',
        kind: 'definition',
        statement: 'Pyridine keeps nitrogen lone pair in **$sp^{2}$ out of the sextet** `pyridine`, so ring carbons are electron poor and attack by $Nu^{-}$ at $C_{2}$ and $C_{4}$ while $E^{+}$ needs harsh conditions at $C_{3}$.',
        detail: 'Protonation to pyridinium $C_{5}H_{5}NH^{+}$ deactivates further; $N$-oxide $C_{5}H_{5}NO$ redirects electrophiles to $C_{2}$ by resonance. Basicity $pK_{a}$ near $5$ reflects the available $sp^{2}$ pair.'
      },
      {
        term: 'Pyrrole electron rich ring',
        kind: 'law',
        statement: '**Pyrrole donates nitrogen pair into the sextet** `pyrrole` $C_{4}H_{4}NH$, so $E^{+}$ attacks $C_{2}$ rapidly and protonation at carbon destroys aromaticity toward polymerisation.',
        detail: 'Indole behaves as benzo-fused pyrrole with $C_{3}$ attack first. Strong acid must be avoided because $C$-protonated pyrrole cation polymerises; $N$-protection as carbamate tames the ring.'
      },
      {
        term: 'Furan and thiophene reactivity ladder',
        kind: 'law',
        statement: '**Furan exceeds pyrrole in $E^{+}$ rate yet opens with acid** `furan` while **thiophene is the stable aromatic** `thiophene` $C_{4}H_{4}S$ that sulfonates cleanly at $C_{2}$.',
        detail: 'Oxygen $2p$ overlaps carbon $2p$ well but furan diene character invites Diels-Alder and hydrolysis. Sulfur $3p$ overlaps less yet gives robust aromatic thiophene used in conducting polymers.'
      },
      {
        term: 'Quinoline and isoquinoline maps',
        kind: 'theorem',
        statement: '**Quinoline reacts as pyridine fused to benzene** `quinoline` with $E^{+}$ on the benzene ring and $Nu^{-}$ at $C_{2}$ of the nitrogen ring, mirroring naphthalene plus pyridine logic.',
        detail: 'Skraup quinoline synthesis from aniline plus glycerol sets this frame. Isoquinoline $C_{1}$ is the electrophilic hotspot for Reissert and Pomeranz-Fritsch chemistry.'
      },
      {
        term: 'N-oxide and salt activation tricks',
        kind: 'insight',
        statement: '**Pyridine $N$-oxide** `N-oxide` plus **$N$-alkylpyridinium** `pyridinium` activate $C_{2}$ to $Nu^{-}$ and redirect $E^{+}$, then deoxygenate with $PCl_{3}$ to restore pyridine.',
        detail: 'Chichibabin amination $NaNH_{2}$ on pyridine gives $2$-aminopyridine via $N$-coordination. Reissert $CN^{-}$ addition to $N$-acylquinolinium sets $C_{1}$ cyano for later elaboration.'
      }
    ],
    figures: [
      {
        caption: 'Pyridine $E^{+}$ at $C_{3}$ and $Nu^{-}$ at $C_{2}$ and $C_{4}$; pyrrole and furan $E^{+}$ at $C_{2}$; $N$-oxide redirecting $E^{+}$ to $C_{2}$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aromatic heterocycle reactivity map for pyridine pyrrole and furan"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">pyridine: poor</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">Nu at C2 C4</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">pyrrole furan: rich</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">E+ at C2 fast</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">acid opens furan</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">N-oxide trick</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">E+ to C2, then PCl3</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">lone pair in sextet means rich; out means poor</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Nitration site on pyridine versus pyrrole',
        problem: 'Pyridine with $KNO_{3}$ and $H_{2}SO_{4}$ at high heat versus pyrrole with mild $AcONO_{2}$ gives different ring positions. Predict each.',
        steps: [
          { label: 'Step 1', text: 'Draw sextets: pyridine pair out makes $C_{2}$ sigma complex penalised by adjacent $N^{+}$:\n```text\npyridine E+ -> C3, harsh, low yield\npyrrole E+ -> C2, mild, fast\nN-protect pyrrole if acid strong\n```\nCharge next to nitrogen decides.' },
          { label: 'Step 2', text: 'Pyridine gives $3$-nitropyridine under forcing conditions; pyrrole gives $2$-nitropyrrole before polymerisation.' },
          { label: 'Step 3', text: 'Guard pyrrole with $N$-$Boc$ and low temperature to isolate monomer product.' }
        ],
        result: '$3$-nitropyridine forcing and $2$-nitropyrrole mild, reflecting poor versus rich rings.'
      },
      {
        title: 'Chichibabin amination of pyridine',
        problem: 'Pyridine with $NaNH_{2}$ in hot xylene gives $2$-aminopyridine. Draw the addition-elimination path and explain $C_{2}$ choice.',
        steps: [
          { label: 'Step 1', text: 'Coordinate $Na^{+}$ to nitrogen, making $C_{2}$ and $C_{4}$ electrophilic dihydropyridine acceptors.' },
          { label: 'Step 2', text: 'Add $NH_{2}^{-}$ at $C_{2}$ to dihydro anion stabilised by nitrogen, then lose hydride $H^{-}$ to restore aromaticity.' },
          { label: 'Step 3', text: 'Prefer $C_{2}$ over $C_{4}$ by proximity to coordinated nitrogen and statistical two sites versus one.' }
        ],
        result: '$2$-aminopyridine by $Nu^{-}$ addition then hydride loss at the nitrogen-adjacent carbon.'
      }
    ],
    keyTakeaways: [
      'Pyridine pair out means poor ring: $Nu^{-}$ at $C_{2}$ and $C_{4}$, $E^{+}$ hard at $C_{3}$.',
      'Pyrrole pair in means rich ring: $E^{+}$ fast at $C_{2}$ with acid sensitivity.',
      'Thiophene $C_{2}$ sulfonates cleanly; furan opens with strong acid.',
      '$N$-oxide plus $N$-alkylation switch pyridine selectivity then revert.'
    ],
    quiz: [
      {
        q: 'Pyrrole nitrates at $C_{2}$ rapidly because:',
        options: ['Nitrogen withdraws strongly', 'Nitrogen pair enriches the ring and stabilises the $C_{2}$ sigma complex', 'Pyrrole lacks aromaticity', 'Nitration occurs on nitrogen only'],
        answer: 1,
        explanation: 'Step 1: Donate $N$ pair into the sextet. Step 2: Stabilise positive charge at $C_{2}$ attack. Step 3: Lose $H^{+}$ to restore aromatic pyrrole.'
      },
      // PYQ-pattern: pyridine versus pyrrole site drill
      {
        q: 'Pyridine electrophilic substitution goes to $C_{3}$ since:',
        options: ['$C_{2}$ attack places charge on nitrogen unfavourably', '$C_{3}$ is sterically open only', 'Pyridine has no sextet', 'Solvent blocks $C_{2}$'],
        answer: 0,
        explanation: 'Step 1: Draw sigma complexes at $C_{2}$ and $C_{3}$. Step 2: Place positive charge on $N$ for $C_{2}$ path. Step 3: Select $C_{3}$ as the least penalised route.'
      },
      {
        q: 'Furan handling needs care because strong acid:',
        options: ['Nitrates cleanly always', 'Makes furan basic only', 'Opens the ring by hydrolysis', 'Has no effect'],
        answer: 2,
        explanation: 'Step 1: Protonate $C_{2}$ to break aromaticity. Step 2: Trap with water as dicarbonyl. Step 3: Polymerise without mild buffered conditions.'
      },
      {
        q: 'Chichibabin product on pyridine is:',
        options: ['$3$-aminopyridine', 'Pyrrole', 'Ring opened diamine', '$2$-aminopyridine'],
        answer: 3,
        explanation: 'Step 1: Activate $C_{2}$ by $Na^{+}$ coordination. Step 2: Add $NH_{2}^{-}$ to $C_{2}$. Step 3: Eject hydride to rearomatise.'
      }
    ]
  },
  // ---------------------------------------------------------------- 25.2
  {
    sectionId: 'chem-ch25-s2',
    readingTime: 9,
    intro: 'Clayden builds heterocycles from dicarbonyls plus heteroatom sources: $1,4$-dicarbonyls give pyrroles, furans and thiophenes while $1,5$-dicarbonyl equivalents give pyridines. The Paal-Knorr, Hantzsch and Skraup reactions dominate. This section chooses the dicarbonyl cut for each target ring.',
    objectives: [
      'Retrospect pyrrole, furan and thiophene to $1,4$-dicarbonyl plus $N$, $O$ or $S$ source',
      'Write Hantzsch dihydropyridine and Paal-Knorr mechanisms with dehydration steps',
      'Select Skraup and Bischler-Napieralski routes to quinolines and isoquinolines'
    ],
    concepts: [
      {
        term: 'Paal-Knorr pyrrole synthesis',
        kind: 'method',
        statement: '**$1,4$-diketone plus amine** `Paal-Knorr` $RCOCH_{2}CH_{2}COR + RNH_{2} \\to$ pyrrole $C_{4}H_{2}R_{2}NR$ by double imine formation and dehydration.',
        detail: 'Hexane-$2,5$-dione plus aniline gives $1,2,5$-trimethylphenylpyrrole after two $H_{2}O$ losses. Acid catalyses both carbonyl additions and the final aromatisation.'
      },
      {
        term: 'Furan and thiophene from same backbone',
        kind: 'method',
        statement: '**$1,4$-diketone with acid gives furan** `furan-synthesis` and **with $P_{2}S_{5}$ gives thiophene** `thiophene-synthesis` $C_{4}H_{2}R_{2}S$ by $O$ to $S$ exchange then closure.',
        detail: 'Concentrated $H_{2}SO_{4}$ dehydrates the mono-enol to furan; Lawesson reagent thionates one carbonyl before Paal-Knorr style closure. $2,5$-dimethylfuran and thiophene are the textbook pair.'
      },
      {
        term: 'Hantzsch dihydropyridine synthesis',
        kind: 'theorem',
        statement: '**Two beta-keto esters plus aldehyde plus ammonia** `Hantzsch` $2RCOCH_{2}COOR + RCHO + NH_{3} \\to$ dihydropyridine, oxidised to pyridine $C_{5}H_{3}N$.',
        detail: 'One ester forms enamine $RCOCH=C(NH_{2})COOR$ while another forms Knoevenagel acceptor $RCOC(=CHR)COOR$; Michael plus closure builds the ring. $HNO_{3}$ or $DDQ$ aromatises to the pyridine diester.'
      },
      {
        term: 'Skraup quinoline synthesis',
        kind: 'method',
        statement: '**Aniline plus glycerol in hot acid** `Skraup` dehydrates to acrolein $CH_{2}=CHCHO$, adds conjugately, closes and oxidises to quinoline.',
        detail: 'Oxidant nitrobenzene or $Fe^{3+}$ aromatises the tetrahydroquinoline. Para-substituted anilines give single isomers; meta give $5$ and $7$ mixtures by two closure sites.'
      },
      {
        term: 'Indole Fischer synthesis',
        kind: 'insight',
        statement: '**Phenylhydrazone of a ketone with acid** `Fischer` undergoes $3,3$-shift and $NH_{3}$ loss to indole, the benzo-pyrrole frame.',
        detail: 'Acetophenone phenylhydrazone with $ZnCl_{2}$ gives $2$-phenylindole after enehydrazine tautomer and sigmatropic migration. The $C_{3}$ substituent comes from the ketone alpha carbon.'
      }
    ],
    figures: [
      {
        caption: '$1,4$-dicarbonyl to pyrrole with $RNH_{2}$, to furan with acid and to thiophene with $P_{2}S_{5}$; $1,5$-frame to pyridine by Hantzsch $2+2+1+1$ assembly.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heterocycle synthesis disconnections from dicarbonyl frames"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">1,4-diketone</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">common backbone</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="136" text-anchor="middle" font-size="13" fill="currentColor">+ amine: pyrrole</text><text x="355" y="156" text-anchor="middle" font-size="12" fill="currentColor">acid: furan</text><text x="355" y="174" text-anchor="middle" font-size="12" fill="currentColor">P2S5: thiophene</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">Hantzsch to pyridine</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">2 ketoester + aldehyde</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">pick hetero source to pick ring</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Paal-Knorr pyrrole from hexanedione',
        problem: 'Hexane-$2,5$-dione $CH_{3}COCH_{2}CH_{2}COCH_{3}$ plus aniline $PhNH_{2}$ with catalytic $AcOH$ gives a pyrrole. Draw the product and water count.',
        steps: [
          { label: 'Step 1', text: 'Double imine closure: each $C=O$ adds $PhNH_{2}$ then loses $H_{2}O$:\n```text\n2 C=O + 1 N -> pyrrole + 2 H2O\nproduct: 1-phenyl-2,5-dimethylpyrrole\nacid: catalyses both dehydrations\n```\nAromaticity drives the second loss.' },
          { label: 'Step 2', text: 'Close to dihydro frame then dehydrate to $1$-phenyl-$2,5$-dimethylpyrrole $C_{12}H_{13}N$.' },
          { label: 'Step 3', text: 'Trap $H_{2}O$ with sieves to push the reversible additions to aromatic product.' }
        ],
        result: '$1$-phenyl-$2,5$-dimethylpyrrole plus two $H_{2}O$, driven by pyrrole aromaticity.'
      },
      {
        title: 'Hantzsch pyridine diester',
        problem: 'Ethyl acetoacetate $CH_{3}COCH_{2}COOEt$ with benzaldehyde $PhCHO$ and ammonia gives a dihydropyridine. State the assembly and oxidation.',
        steps: [
          { label: 'Step 1', text: 'Form enamine from one ketoester plus $NH_{3}$ and Knoevenagel acceptor from the other plus $PhCHO$.' },
          { label: 'Step 2', text: 'Michael addition then ring closure to $4$-phenyl dihydropyridine diester.' },
          { label: 'Step 3', text: 'Oxidise with $HNO_{3}$ to $4$-phenyl pyridine-$3,5$-diester, the Hantzsch pyridine.' }
        ],
        result: 'Dihydropyridine then oxidised pyridine diester with phenyl at $C_{4}$.'
      }
    ],
    keyTakeaways: [
      '$1,4$-diketone plus $RNH_{2}$ gives pyrrole by Paal-Knorr double dehydration.',
      'Same $1,4$-frame gives furan with acid and thiophene with $P_{2}S_{5}$.',
      'Hantzsch $2$ ketoesters plus aldehyde plus $NH_{3}$ builds dihydropyridine then pyridine.',
      'Fischer hydrazone $3,3$-shift builds indoles from ketones.'
    ],
    quiz: [
      {
        q: 'Paal-Knorr pyrrole needs:',
        options: ['$1,4$-diketone plus amine with $2H_{2}O$ loss', 'Alkyne plus azide only', 'Benzene plus $HNO_{3}$', 'Ester plus $LDA$ only'],
        answer: 0,
        explanation: 'Step 1: Add amine to both carbonyls. Step 2: Lose two waters to close. Step 3: Aromatise to pyrrole.'
      },
      // PYQ-pattern: hetero source selection drill
      {
        q: 'Same $1,4$-diketone to thiophene uses:',
        options: ['Aqueous acid only', '$P_{2}S_{5}$ sulfur source', 'Ammonia only', 'Hydrogen gas'],
        answer: 1,
        explanation: 'Step 1: Thionate one carbonyl to $C=S$. Step 2: Close onto the second carbonyl. Step 3: Dehydrate to aromatic thiophene.'
      },
      {
        q: 'Hantzsch builds pyridine from:',
        options: ['One alkane plus $Cl_{2}$', 'Two benzenes fused', 'Two ketoesters plus aldehyde plus $NH_{3}$', 'Acetylene trimer only'],
        answer: 2,
        explanation: 'Step 1: Split partners into enamine and acceptor. Step 2: Join by Michael plus closure. Step 3: Oxidise dihydro to pyridine.'
      },
      {
        q: 'Fischer indole starts from:',
        options: ['Pyridine plus $NaNH_{2}$', 'Furan plus maleic anhydride', 'Ester plus $NaOEt$', 'Phenylhydrazone plus acid'],
        answer: 3,
        explanation: 'Step 1: Form ketone phenylhydrazone. Step 2: Shift by $3,3$ sigmatropic path. Step 3: Lose $NH_{3}$ to indole.'
      }
    ]
  },
  // ---------------------------------------------------------------- 25.3
  {
    sectionId: 'chem-ch25-s3',
    readingTime: 10,
    intro: 'Retrosynthesis works backwards: cut bonds to simpler precursors, name the synthons behind each cut, and replace them with real reagents. Clayden favours one-group disconnections of alcohols and carbonyls plus two-group $1,3$ and $1,5$ cuts. This section practises choosing cuts that correspond to reliable forward reactions.',
    objectives: [
      'Draw one-group disconnections of alcohols, alkenes and ketones to $C$-$X$ plus organometallics',
      'Assign donor and acceptor synthons and convert them to enolate plus halide equivalents',
      'Order functional group interconversion before disconnection for clean polarity match'
    ],
    concepts: [
      {
        term: 'Synthon and synthetic equivalent',
        kind: 'definition',
        statement: 'A **synthon** `synthon` is the idealised fragment behind a cut such as $R^{+}$ or $R^{-}$, realised by a **synthetic equivalent** `equivalent` like $RBr$ or $RMgBr$.',
        detail: 'Cutting $R$-$OH$ at $C$-$O$ gives $R^{+}$ plus $HO^{-}$; forward $R^{-}$ from $RMgBr$ plus $C=O$ is the real polar match. Umpolung with dithiane $R$-$S$-$C$-$S$-$R$ inverts the natural $C=O$ polarity.'
      },
      {
        term: 'One-group alcohol disconnection',
        kind: 'method',
        statement: '**Cut $C$-$C$ beside $OH$** `alcohol-cut` $R_{2}C(OH)$-$C$ to $C=O$ plus $R^{-}$, the Grignard and organolithium forward reaction.',
        detail: 'Triphenylmethanol cuts thrice to $Ph_{2}C=O$ plus $PhMgBr$. Secondary alcohols cut to aldehyde plus $RMgBr$; the most substituted side becomes the carbonyl for stable fragments.'
      },
      {
        term: 'Carbonyl alpha disconnection',
        kind: 'method',
        statement: '**Cut alpha to $C=O$** `carbonyl-cut` $RCO$-$CH_{2}R$ to enolate $RCOCH_{2}^{-}$ plus $R^{+}$, realised by $LDA$ enolate plus alkyl halide.',
        detail: '2-methylcyclohexanone cuts to cyclohexanone enolate plus $CH_{3}I$. Conjugate $1,4$ cuts instead give enone plus cuprate donor for Michael polarity.'
      },
      {
        term: 'Two-group 1,3-dicarbonyl cut',
        kind: 'theorem',
        statement: '**$1,3$-dicarbonyls cut between the carbonyls** `1,3-cut` $RCOCH_{2}COR$ to $RCOCH_{3}$ plus $RCOOEt$, the Claisen forward reaction.',
        detail: 'Acetoacetate $CH_{3}COCH_{2}COOEt$ cuts to two acetates; $1,5$-dicarbonyls cut to enone plus enolate for Robinson logic. Even atom spacings guide reliable cuts.'
      },
      {
        term: 'FGI before disconnection',
        kind: 'insight',
        statement: '**Functional group interconversion first** `FGI` turns amines to carbonyls and acids to esters so the cut matches a known transform, avoiding impossible synthons.',
        detail: 'Alkyl amine $RCH_{2}NH_{2}$ converts to $RCH_{2}Br$ before $C$-$C$ cut; acid $RCOOH$ esterifies to $RCOOEt$ before Claisen cut. The order $FGI$ then cut then $FGI$ is the Clayden mantra.'
      }
    ],
    figures: [
      {
        caption: 'One-group $C$-$C$ cut beside $OH$ to $C=O$ plus $RMgBr$; $\\alpha$ cut to enolate plus $R$-$X$; $1,3$-dicarbonyl cut to Claisen pair with $FGI$ ordering.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Retrosynthetic disconnection map with synthon polarity"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">alcohol cut</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">to C=O + RMgBr</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">alpha cut</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">to enolate + R-X</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">donor + acceptor</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">1,3-dicarbonyl</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">to Claisen pair</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">FGI first, then cut, then forward check</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Retrosynthesis of a tertiary alcohol',
        problem: 'Propose a retrosynthesis of $2$-phenylbutan-$2$-ol $CH_{3}CH_{2}C(OH)(CH_{3})Ph$ by one-group cuts and give forward reagents.',
        steps: [
          { label: 'Step 1', text: 'Cut $C$-$Ph$ beside $OH$ to acetophenone derivative plus phenyl synthon:\n```text\ncut A: Ph-C bond -> PhMgBr + butanone\ncut B: Et-C bond -> EtMgBr + acetophenone\npick stable ketone + reactive Grignard\n```\nMost substituted carbonyl side wins.' },
          { label: 'Step 2', text: 'Choose acetophenone $PhCOCH_{3}$ plus $EtMgBr$ because methyl ketone is clean and ethyl Grignard is reliable.' },
          { label: 'Step 3', text: 'Forward: $PhCOCH_{3} + CH_{3}CH_{2}MgBr$ then $H_{3}O^{+}$ workup to tertiary alcohol.' }
        ],
        result: 'Acetophenone plus ethylmagnesium bromide then acid workup gives $2$-phenylbutan-$2$-ol.'
      },
      {
        title: 'Dicarbonyl cut to Claisen pair',
        problem: 'Retrosynthesise ethyl acetoacetate $CH_{3}COCH_{2}COOEt$ and state the forward Claisen conditions.',
        steps: [
          { label: 'Step 1', text: 'Cut between carbonyls $CO$-$CH_{2}$ to $CH_{3}COOEt$ enolate plus $CH_{3}COOEt$ acceptor.' },
          { label: 'Step 2', text: 'Forward with $NaOEt$ in ethanol: ester enolate adds to ester, expelling $EtO^{-}$.' },
          { label: 'Step 3', text: 'Acid workup releases the beta-keto ester from its deprotonated $pK_{a}$ $11$ form.' }
        ],
        result: 'Two ethyl acetates with $NaOEt$ then acid workup give ethyl acetoacetate.'
      }
    ],
    keyTakeaways: [
      'Cut $C$-$C$ beside $OH$ to $C=O$ plus $RMgBr$ with donor and acceptor labels.',
      'Cut alpha to $C=O$ to enolate $C^{-}$ plus $R$-$X$ for alkylation polarity.',
      '$1,3$-dicarbonyls cut to Claisen ester pairs; $1,5$ to Robinson pairs.',
      '$FGI$ ordering before the cut keeps synthons realisable.'
    ],
    quiz: [
      {
        q: 'One-group cut of $R_{2}C(OH)$-$C$ gives forward:',
        options: ['$C=O$ plus $RMgBr$ then workup', 'Two radicals only', 'Alkene metathesis', 'Ozonolysis only'],
        answer: 0,
        explanation: 'Step 1: Break $C$-$C$ beside oxygen. Step 2: Assign $C=O$ acceptor and $R^{-}$ donor. Step 3: Use $RMgBr$ addition forward.'
      },
      // PYQ-pattern: synthon polarity matching drill
      {
        q: 'Alpha cut $RCO$-$CH_{2}R$ maps forward to:',
        options: ['Aldol dehydration only', 'Enolate plus alkyl halide alkylation', 'Diels-Alder only', 'Radical halogenation only'],
        answer: 1,
        explanation: 'Step 1: Split into $RCOCH_{2}^{-}$ and $R^{+}$. Step 2: Realise as $LDA$ enolate and $R$-$X$. Step 3: Join by $S_{N}2$ $C$-alkylation.'
      },
      {
        q: '$FGI$ before cutting means:',
        options: ['Cut first always', 'Avoid all reagents', 'Convert to a group with a known transform then cut', 'Oxidise everything'],
        answer: 2,
        explanation: 'Step 1: Spot mismatched polarity. Step 2: Interconvert amine to halide or acid to ester. Step 3: Cut along the reliable reaction.'
      },
      {
        q: '$1,3$-dicarbonyl retrosynthesis points to:',
        options: ['Grignard plus $CO_{2}$ only', 'Benzyne plus $Nu^{-}$', 'Ozonolysis fragments', 'Claisen ester plus ester'],
        answer: 3,
        explanation: 'Step 1: Cut between the two carbonyls. Step 2: Form ester enolate and ester acceptor. Step 3: Close by Claisen condensation forward.'
      }
    ]
  },
  // ---------------------------------------------------------------- 25.4
  {
    sectionId: 'chem-ch25-s4',
    readingTime: 9,
    intro: 'Complex molecules need selective reactions at one group while others wait masked: protecting groups provide the mask. Clayden protects aldehydes as acetals, alcohols as silyl ethers and amines as carbamates, then removes each orthogonally. This section plans chemoselectivity by reactivity order plus protection.',
    objectives: [
      'Protect aldehydes as acetals and alcohols as $TBS$ ethers with install and remove steps',
      'Choose $Boc$ versus $Cbz$ amine protection with acid versus hydrogenolysis removal',
      'Order steps so the most reactive group is masked first and freed last'
    ],
    concepts: [
      {
        term: 'Acetal carbonyl protection',
        kind: 'method',
        statement: 'Aldehydes mask as **acetals** `acetal-PG` $RCH(OR)_{2}$ with diol and $TsOH$, stable to base, $RMgX$ and hydride, removed by aqueous acid.',
        detail: 'Ethylene glycol gives cyclic acetals that survive $NaBH_{4}$ and $MeMgBr$. Dilute $HCl$ in $THF$ restores $RCHO$ without touching isolated alkenes.'
      },
      {
        term: 'Silyl ether alcohol protection',
        kind: 'method',
        statement: '**$TBS$ ethers** `TBS` $ROSiMe_{2}tBu$ from $TBSCl$ and imidazole shield alcohols from base and oxidation, removed by $F^{-}$ as $TBAF$.',
        detail: 'Bulky $TBS$ survives $LDA$ and Swern conditions while $TMS$ $ROSiMe_{3}$ is too labile for long sequences. Fluoride affinity for silicon drives clean deprotection.'
      },
      {
        term: 'Carbamate amine protection',
        kind: 'method',
        statement: '**$Boc$ and $Cbz$ carbamates** `carbamate` $RN(COOR)R$ lower nitrogen nucleophilicity, with $Boc$ removed by $CF_{3}COOH$ and $Cbz$ by $H_{2}$ and $Pd$.',
        detail: 'Di-tert-butyl dicarbonate $(Boc)_{2}O$ installs $Boc$ under mild base. $Boc$ survives hydrogenolysis while $Cbz$ survives acid, the orthogonal pair for peptides.'
      },
      {
        term: 'Orthogonal protection sets',
        kind: 'theorem',
        statement: '**Orthogonal groups** `orthogonal` remove independently: acetal by acid, $TBS$ by $F^{-}$, $Boc$ by acid at different strength, $Cbz$ by hydrogenolysis, benzyl ether by $H_{2}$ and $Pd$.',
        detail: 'A molecule with acetal plus $TBS$ plus $Cbz$ frees each site in turn without touching the others. Planning the removal order avoids cascade deprotection.'
      },
      {
        term: 'Chemoselectivity by inherent reactivity',
        kind: 'insight',
        statement: '**Inherent order** `chemoselectivity` $RCOCl$ over $RCHO$ over $RCOR$ over $RCOOR$ lets hydride or $RMgX$ pick the top electrophile without protection when gaps are large.',
        detail: '$NaBH_{4}$ reduces aldehyde over ester; $DIBAL$ at low temperature stops ester at aldehyde. Only close reactivity pairs need full masking.'
      }
    ],
    figures: [
      {
        caption: 'Masks $RCHO$ as acetal, $ROH$ as $TBS$ ether and $RNH_{2}$ as $Boc$ carbamate; orthogonal keys acid, $F^{-}$ and $H_{2}$ with $Pd$ free each site alone.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Protecting group orthogonal removal scheme"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="148" text-anchor="middle" font-size="13" fill="currentColor">RCHO to acetal</text><text x="125" y="168" text-anchor="middle" font-size="12" fill="currentColor">key: aqueous acid</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">ROH to TBS ether</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">key: F- as TBAF</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">survives LDA</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">RNH2 to Boc</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">key: CF3COOH</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">Cbz orthogonal by H2 Pd; mask reactive first</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Grignard in presence of aldehyde mask',
        problem: 'A keto-aldehyde $OHC(CH_{2})_{3}COCH_{3}$ must be methylated only at the ketone with $MeMgBr$. Plan protection, addition and release.',
        steps: [
          { label: 'Step 1', text: 'Mask aldehyde as ethylene acetal with $(CH_{2}OH)_{2}$ and $TsOH$ with water trapping:\n```text\nprotect CHO as cyclic acetal\nfree ketone stays electrophilic\nadd MeMgBr to ketone only\n```\nAcetal resists $Grignard$.' },
          { label: 'Step 2', text: 'Add $MeMgBr$ to ketone to tertiary alkoxide, then $NH_{4}Cl$ workup to tertiary alcohol.' },
          { label: 'Step 3', text: 'Restore aldehyde with aqueous $HCl$, leaving the new tertiary alcohol intact.' }
        ],
        result: 'Selective ketone methylation with aldehyde masked as acetal then freed by acid.'
      },
      {
        title: 'Orthogonal amino alcohol protection',
        problem: 'An amino alcohol $H_{2}NCH_{2}CH_{2}OH$ must be oxidised at carbon elsewhere while both groups wait. Choose masks with separate keys.',
        steps: [
          { label: 'Step 1', text: 'Protect amine as $Boc$ with $(Boc)_{2}O$ and alcohol as $TBS$ with $TBSCl$ and imidazole.' },
          { label: 'Step 2', text: 'Run the carbon oxidation; $Boc$ and $TBS$ survive the oxidant.' },
          { label: 'Step 3', text: 'Remove $TBS$ with $TBAF$ then $Boc$ with $CF_{3}COOH$, each key touching only its mask.' }
        ],
        result: 'Independent $F^{-}$ and acid removals free alcohol and amine in planned order.'
      }
    ],
    keyTakeaways: [
      'Acetals mask $RCHO$ against base, $RMgX$ and hydride, freed by aqueous acid.',
      '$TBS$ ethers mask $ROH$ against base, freed by $F^{-}$ as $TBAF$.',
      '$Boc$ by acid and $Cbz$ by $H_{2}$ with $Pd$ protect amines orthogonally.',
      'Large inherent gaps allow chemoselectivity without masks; close pairs need protection.'
    ],
    quiz: [
      {
        q: 'Aldehyde acetal survives:',
        options: ['Aqueous acid', 'Base, $RMgX$ and hydride', 'No reagents', 'Oxidation always'],
        answer: 1,
        explanation: 'Step 1: Block $C=O$ as $C(OR)_{2}$. Step 2: Resist nucleophilic addition. Step 3: Cleave only with aqueous acid.'
      },
      // PYQ-pattern: orthogonal key matching drill
      {
        q: '$TBS$ ether is removed by:',
        options: ['Aqueous base', '$H_{2}$ with $Pd$ always', '$F^{-}$ as $TBAF$', 'Heat alone'],
        answer: 2,
        explanation: 'Step 1: Target silicon with fluoride affinity. Step 2: Form strong $Si$-$F$ bond. Step 3: Release free $ROH$.'
      },
      {
        q: '$Boc$ versus $Cbz$ orthogonality is:',
        options: ['$Boc$ by acid and $Cbz$ by hydrogenolysis', 'Both by same acid', 'Both by same base', 'Neither removable'],
        answer: 0,
        explanation: 'Step 1: Cleave tert-butyl cation with acid for $Boc$. Step 2: Hydrogenolyse benzyl for $Cbz$. Step 3: Operate each key independently.'
      },
      {
        q: '$NaBH_{4}$ picks aldehyde over ester without mask because:',
        options: ['Ester is more electrophilic', 'Borohydride oxidises esters', 'Solvent blocks esters', 'Aldehyde $LUMO$ is lower with better leaving gap'],
        answer: 3,
        explanation: 'Step 1: Rank $RCHO$ above $RCOOR$ electrophilicity. Step 2: Attack the lower $\\pi^{*}$ first. Step 3: Stop before ester reacts.'
      }
    ]
  }
]
