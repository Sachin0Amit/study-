import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse Chemistry — Chapter 10: Amines, Biomolecules, Polymers and Tests
// Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const chemCh10Content: SectionContent[] = [
  // ---------------------------------------------------------------- 10.1
  {
    sectionId: 'chem-ch10-s1',
    readingTime: 9,
    intro: 'Amines are the organic bases whose strength turns on alkyl donation, resonance withdrawal and solvation. Their chemistry spans salt formation, Hoffmann degradation and diazonium coupling. This section orders basicity and maps the named routes that build and transform nitrogen groups.',
    objectives: [
      'Order aliphatic and aromatic amine basicity from structure and medium',
      'Write Hoffmann bromamide and diazotization with correct reagents',
      'Predict azo coupling position and product colour logic'
    ],
    concepts: [
      {
        term: 'Amine basicity aliphatic',
        kind: 'law',
        statement: 'Aliphatic basicity balances **alkyl donation** against **solvation**, giving aqueous order `secondary over primary over tertiary` for methyl and ethyl series such as $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N$. In the **gas phase** donation alone rules as `tertiary over secondary over primary` because **solvation penalty** vanishes.',
        detail: 'Tertiary ammonium ions are poorly solvated and crowded, lowering aqueous strength. Ethyl donates harder than methyl, shifting $K_b$ values upward. Steric inhibition appears with branched chains.'
      },
      {
        term: 'Aromatic amine weakness',
        kind: 'insight',
        statement: 'Aromatic amines are **weaker bases** because the nitrogen lone pair **delocalises into the ring**, shown as `C6H5-NH2 resonance` with quinoid forms. Aniline with $pK_b$ near $9.4$ trails cyclohexylamine with $pK_b$ near $3.3$, and **electron withdrawing** para groups such as $NO_2$ weaken it further by **resonance pull**.',
        detail: 'Protonation destroys the delocalisation, costing energy. N alkylation restores some strength by donation. Diphenylamine and triphenylamine are weaker still from double and triple conjugation.'
      },
      {
        term: 'Hoffmann bromamide',
        kind: 'method',
        statement: 'The **Hoffmann bromamide degradation** shortens an amide by one carbon with `Br2 plus NaOH` via $RCONH_2 + Br_2 + 4NaOH \\to RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$. The path runs through **N bromamide** and **isocyanate** with **alkyl migration**, giving a **primary amine** with one fewer carbon.',
        detail: 'Only primary amides respond cleanly. No rearranged skeleton appears because migration is concerted. The method builds otherwise hard to reach amines such as $RNH_2$ from $RCOOH$ via the amide.'
      },
      {
        term: 'Diazotization',
        kind: 'method',
        statement: '**Diazotization** converts primary aromatic amines at `zero to five degrees` with `NaNO2 plus HCl` into **diazonium salts** as $C_6H_5NH_2 + NaNO_2 + 2HCl \\to C_6H_5N_2Cl + NaCl + 2H_2O$. The product `Ar-N2+` is **stable cold** but releases **nitrogen gas** on warming, enabling **replacement** by $Cl$, $Br$, $CN$, $I$, $OH$ and $H$.',
        detail: 'Aliphatic diazonium ions decompose instantly to carbocations and alkenes. Temperature control is critical because the salt hydrolyses above five degrees. Sandmeyer and Gattermann routes exploit the versatile $N_2^+$ leaving group.'
      },
      {
        term: 'Azo coupling',
        kind: 'method',
        statement: '**Azo coupling** joins `Ar-N2+` with **activated rings** such as phenol or aniline at **para position** to give bright **azo dyes** $Ar-N=N-Ar$ with extended **conjugation**. Phenol couples in **mild base** while aniline couples in **mild acid**, both avoiding **extreme pH** that destroys the electrophile or the substrate.',
        detail: 'Coupling fails with strongly deactivated rings. Para block diverts to ortho. The $N=N$ bridge plus two aryl systems creates the chromophore behind methyl orange and congo red.'
      }
    ],
    figures: [
      {
        caption: 'Aqueous basicity runs $2^\\circ > 1^\\circ > 3^\\circ$ for methylamines while aniline is weak by resonance; $ArNH_2$ diazotises at $0-5^\\circ C$ and couples to bright $Ar-N=N-Ar$ dyes.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Amine basicity order and diazotization to azo dye"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">aqueous basicity: 2 deg &gt; 1 deg &gt; 3 deg (solvation vs +I)</text><line x1="40" y1="80" x2="680" y2="80" stroke="currentColor" stroke-width="1.5"/><rect x="60" y="95" width="120" height="50" fill="none" stroke="currentColor" stroke-width="2"/><text x="75" y="125" font-size="12" fill="currentColor" font-family="sans-serif">(CH3)2NH top</text><rect x="220" y="95" width="120" height="38" fill="none" stroke="currentColor" stroke-width="2"/><text x="235" y="120" font-size="12" fill="currentColor" font-family="sans-serif">CH3NH2 mid</text><rect x="380" y="95" width="120" height="26" fill="none" stroke="currentColor" stroke-width="2"/><text x="395" y="113" font-size="12" fill="currentColor" font-family="sans-serif">(CH3)3N low</text><text x="520" y="120" font-size="12" fill="currentColor" font-family="sans-serif">aniline lowest</text><text x="40" y="180" font-size="13" fill="currentColor" font-family="sans-serif">Ar-NH2 + NaNO2/HCl (0-5 C) -&gt; Ar-N2+ + 2 H2O</text><line x1="40" y1="195" x2="680" y2="195" stroke="currentColor" stroke-width="2"/><polygon points="680,195 672,189 672,201" fill="currentColor" stroke="none"/><text x="40" y="225" font-size="13" fill="currentColor" font-family="sans-serif">Ar-N2+ + phenol (para) -&gt; Ar-N=N-Ar azo dye, conjugated colour</text><line x1="60" y1="250" x2="300" y2="250" stroke="currentColor" stroke-width="3"/><text x="310" y="255" font-size="13" fill="currentColor" font-family="sans-serif">N=N bright</text><line x1="380" y1="250" x2="620" y2="250" stroke="currentColor" stroke-width="3"/><text x="40" y="290" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">Hoffmann: RCONH2 + Br2/NaOH -&gt; RNH2, one carbon shorter</text><text x="40" y="315" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">lone pair into ring weakens aniline; gas phase follows +I only</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Basicity order puzzle',
        problem: 'Order aniline, cyclohexylamine, p-nitroaniline and dimethylamine by aqueous basicity.',
        steps: [
          { label: 'Step 1', text: 'Separate `aliphatic versus aromatic`: aliphatic pair outranks both aryl amines because no ring delocalisation drains the pair.' },
          { label: 'Step 2', text: 'Rank within groups:\n```text\ndimethylamine (2nd aliphatic) > cyclohexylamine (1st aliphatic)\n>> aniline > p-nitroaniline (extra -M withdrawal)\n```\nSo $(CH_3)_2NH > C_6H_{11}NH_2 > C_6H_5NH_2 > p$-$O_2NC_6H_4NH_2$.' },
          { label: 'Step 3', text: 'Nitro para to nitrogen pulls the pair harder through resonance, making p-nitroaniline the weakest of the four.' }
        ],
        result: 'Basicity $(CH_3)_2NH > C_6H_{11}NH_2 > C_6H_5NH_2 > p$-$O_2NC_6H_4NH_2$.'
      },
      {
        title: 'Hoffmann plus diazotization chain',
        problem: 'Convert benzamide into phenol via Hoffmann and diazonium steps.',
        steps: [
          { label: 'Step 1', text: 'Run `Hoffmann`: $C_6H_5CONH_2 + Br_2 + 4NaOH \\to C_6H_5NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$ giving aniline.' },
          { label: 'Step 2', text: 'Diazotize cold:\n```text\nC6H5NH2 + NaNO2 + 2HCl -> C6H5N2Cl + NaCl + 2H2O (0-5 C)\nC6H5N2Cl + H2O --warm--> C6H5OH + N2 + HCl\n```\nHydrolysis of the salt gives phenol with nitrogen evolution.' },
          { label: 'Step 3', text: 'Net effect replaces $CONH_2$ by $OH$ with one carbon lost, a standard descent plus functional swap.' }
        ],
        result: 'Benzamide becomes aniline by Hoffmann, then phenol by diazotization and warm hydrolysis.'
      }
    ],
    keyTakeaways: [
      'Aqueous aliphatic order is secondary over primary over tertiary.',
      'Aryl amines are weak from lone pair delocalisation.',
      'Hoffmann cuts one carbon from amide to primary amine.',
      'Diazonium forms cold and couples para to give azo dyes.'
    ],
    quiz: [
      {
        q: 'Strongest aqueous base among methylamine, dimethylamine and trimethylamine?',
        options: ['Dimethylamine', 'Methylamine', 'Trimethylamine', 'Ammonia'],
        answer: 0,
        explanation: 'Step 1: Alkyl donation favours more substitution. Step 2: Solvation penalises tertiary most. Step 3: Balance peaks at secondary dimethylamine.'
      },
      // PYQ-pattern: Hoffmann bromamide reagent and change (rephrased, values changed)
      {
        q: 'Hoffmann bromamide uses which reagents and change?',
        options: ['`$NaNO_2/HCl$ giving diazonium`', '`$Br_2/NaOH$ shortening amide by one carbon`', '`$LiAlH_4$ reducing nitro`', '`$Sn/HCl$ reducing cyanide`'],
        answer: 1,
        explanation: 'Step 1: Start from primary amide. Step 2: Bromine plus alkali form isocyanate via migration. Step 3: Hydrolysis gives amine with one carbon fewer.'
      },
      {
        q: 'Diazotization is carried out at what temperature?',
        options: ['$25$ to $30$ degrees', '$100$ degrees', '$0$ to $5$ degrees', '$-78$ degrees'],
        answer: 2,
        explanation: 'Step 1: Diazonium salts are thermally fragile. Step 2: Ice bath keeps them intact. Step 3: Hence zero to five degrees.'
      },
      {
        q: 'Benzenediazonium plus phenol in mild base couples where?',
        options: ['Meta to $OH$', 'At the oxygen atom', 'No coupling', 'Para to $OH$'],
        answer: 3,
        explanation: 'Step 1: Phenoxide activates ortho and para. Step 2: Para is less hindered. Step 3: Para azo dye dominates.'
      }
    ]
  },
  // ---------------------------------------------------------------- 10.2
  {
    sectionId: 'chem-ch10-s2',
    readingTime: 8,
    intro: 'Carbohydrates and proteins carry life chemistry into problem drills through structures, linkages and colour responses. Glucose and fructose differ in carbonyl position yet share fermentation behaviour. This section organises monosaccharides, disaccharides and protein levels with their tests.',
    objectives: [
      'Draw open and ring cues for glucose and fructose with anomer logic',
      'Describe glycosidic and peptide links with hydrolysis outcomes',
      'Interpret mutarotation, denaturation and standard protein tests'
    ],
    concepts: [
      {
        term: 'Glucose fructose structures',
        kind: 'definition',
        statement: 'Glucose is an **aldohexose** $C_6H_{12}O_6$ with **aldehyde at C1** while fructose is a **ketohexose** with **ketone at C2**, both forming **cyclic hemiacetal** rings in solution as `pyranose versus furanose` forms. The ring closure creates a new **anomeric carbon** that is alpha or beta by **OH orientation**.',
        detail: 'Fischer vertical lines encode stereochemistry with horizontal bonds forward. Haworth rings show up versus down positions. Free aldehyde share is tiny yet controls oxidation tests.'
      },
      {
        term: 'Mutarotation',
        kind: 'law',
        statement: '**Mutarotation** is the drift of **optical rotation** to a common value as **alpha and beta rings** open and reclose through the **open chain** in solution. Fresh alpha glucose near $+112$ degrees and beta near $+19$ degrees both settle near $+52.7$ degrees via `ring opening equilibrium`.',
        detail: 'Polarimetry tracks the change without reagents. All reducing sugars show the effect because cyclisation is reversible. Locking the anomeric carbon as glycoside stops it.'
      },
      {
        term: 'Disaccharides',
        kind: 'definition',
        statement: '**Disaccharides** join two units by a **glycosidic link**, such as `maltose alpha 1-4` between glucoses, `lactose beta 1-4` between galactose and glucose, and `sucrose alpha1-beta2` between glucose and fructose. Sucrose is **nonreducing** because both **anomeric carbons** are tied, while maltose and lactose stay **reducing**.',
        detail: 'Acid or enzyme hydrolysis restores monomers. Sucrose inverts rotation on hydrolysis, hence invert sugar. Starch and cellulose are polysaccharide extensions of the same links.'
      },
      {
        term: 'Proteins and peptide link',
        kind: 'definition',
        statement: 'Proteins chain amino acids by **peptide bonds** $-CO-NH-$ formed with **water loss**, read as `N to C direction` from free amino to free carboxyl end. Structure runs **primary sequence** to **secondary helix or sheet** to **tertiary fold** to **quaternary assembly** by **hydrogen and disulphide** contacts.',
        detail: 'Essential amino acids must come from diet. Zwitterion form $H_3N^+-CHR-COO^-$ dominates near neutral pH. Isoelectric point is the pH of zero net charge.'
      },
      {
        term: 'Denaturation and colour tests',
        kind: 'method',
        statement: '**Denaturation** unfolds higher structure by **heat, acid or heavy metals** without breaking **primary sequence**, so `boiled egg stays protein` but loses function. Detection uses **biuret violet** for peptide bonds and **ninhydrin blue** for free amino groups plus **xanthoproteic yellow** for aryl residues.',
        detail: 'Reversible salting out differs from irreversible coagulation. Milk curdling and enzyme deactivation are daily illustrations. Colour tests need alkaline copper for biuret and heat for ninhydrin.'
      }
    ],
    figures: [
      {
        caption: 'Glucose is an aldohexose and fructose a ketohexose, both closing to cyclic hemiacetals; amino acids join $N \\to C$ by $-CO-NH-$ peptide links.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Glucose fructose rings and peptide link"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">open chain &lt;-&gt; ring (hemiacetal); peptide: -CO-NH-</text><rect x="40" y="65" width="300" height="110" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="90" font-size="13" fill="currentColor" font-family="sans-serif">OHC-(CHOH)4-CH2OH</text><text x="55" y="112" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">glucose: aldehyde C1</text><text x="55" y="134" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">fructose: ketone C2</text><text x="55" y="156" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">alpha/beta close, mutarotate</text><polygon points="520,70 470,90 470,140 520,160 570,140 570,90" fill="none" stroke="currentColor" stroke-width="2"/><text x="475" y="185" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">pyranose ring</text><line x1="355" y1="120" x2="455" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="455,120 447,114 447,126" fill="currentColor" stroke="none"/><text x="40" y="210" font-size="13" fill="currentColor" font-family="sans-serif">maltose a1-4, lactose b1-4, sucrose a1-b2</text><line x1="40" y1="235" x2="680" y2="235" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="40" y="260" font-size="13" fill="currentColor" font-family="sans-serif">H2N-CH(R)-COOH + H2N-CH(R)-COOH -&gt; -CO-NH- + H2O</text><rect x="40" y="275" width="200" height="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="300" font-size="13" fill="currentColor" font-family="sans-serif">peptide bond, N to C</text><text x="280" y="300" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.8">biuret violet; denaturation keeps sequence</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Reducing versus nonreducing call',
        problem: 'Classify glucose, fructose, sucrose and maltose as reducing or not toward Tollens and Fehling reagents.',
        steps: [
          { label: 'Step 1', text: 'Check `free carbonyl or hemiacetal`: glucose and fructose open in solution, maltose keeps one free anomeric end, sucrose ties both ends.' },
          { label: 'Step 2', text: 'Assign:\n```text\nglucose: reducing (aldohexose)\nfructose: reducing (ketose via enediol)\nmaltose: reducing (one free end)\nsucrose: nonreducing (both ends locked)\n```\nFructose reduces via Lobry de Bruyn rearrangement under base.' },
          { label: 'Step 3', text: 'Mutarotation accompanies the reducing trio but is absent for sucrose glycoside.' }
        ],
        result: 'Glucose, fructose and maltose reduce; sucrose does not.'
      },
      {
        title: 'Peptide direction reading',
        problem: 'A tripeptide is written Ala-Gly-Ser. Identify N terminal, C terminal and bonds hydrolysed.',
        steps: [
          { label: 'Step 1', text: 'Read `N to C`: Ala carries free $NH_2$ at left, Ser carries free $COOH$ at right.' },
          { label: 'Step 2', text: 'Count links:\n```text\nAla-CO-NH-Gly-CO-NH-Ser\ntwo peptide bonds, hydrolysis gives 3 amino acids + 2 H2O back\n```\nFull hydrolysis consumes two $H_2O$ per chain.' },
          { label: 'Step 3', text: 'Biuret stays positive for the tripeptide but turns negative after complete hydrolysis to monomers.' }
        ],
        result: 'N end Ala, C end Ser, two peptide bonds giving three monomers on hydrolysis.'
      }
    ],
    keyTakeaways: [
      'Glucose is aldohexose; fructose is ketohexose with ring forms.',
      'Mutarotation signals reversible alpha beta interconversion.',
      'Sucrose locks both anomeric carbons and is nonreducing.',
      'Peptide links run N to C; denaturation spares primary sequence.'
    ],
    quiz: [
      {
        q: 'Which sugar is nonreducing?',
        options: ['Glucose', 'Fructose', 'Sucrose', 'Maltose'],
        answer: 2,
        explanation: 'Step 1: Reducing needs a free hemiacetal. Step 2: Sucrose ties both anomeric carbons. Step 3: Hence it cannot open and stays nonreducing.'
      },
      {
        q: 'Mutarotation is caused by what?',
        options: ['`Alpha beta interconversion via open chain`', '`Irreversible oxidation`', '`Glycoside hydrolysis only`', '`Peptide formation`'],
        answer: 0,
        explanation: 'Step 1: Rings open to the carbonyl form. Step 2: Reclosure gives either anomer. Step 3: Rotation drifts to the equilibrium mix.'
      },
      // PYQ-pattern: peptide versus glycosidic linkage (rephrased, values changed)
      {
        q: 'Proteins are linked by which group?',
        options: ['Glycosidic', 'Peptide $-CO-NH-$', 'Ester', 'Ether'],
        answer: 1,
        explanation: 'Step 1: Amino acids carry amine plus acid. Step 2: Condensation forms amide links. Step 3: The chain link is the peptide bond.'
      },
      {
        q: 'Biuret test detects what?',
        options: ['Free aldehyde', 'Ketone body', 'Starch helix', 'Peptide bonds giving violet colour'],
        answer: 3,
        explanation: 'Step 1: Alkaline copper complexes amides. Step 2: At least two peptide bonds chelate. Step 3: Violet colour confirms protein fragments.'
      }
    ]
  },
  // ---------------------------------------------------------------- 10.3
  {
    sectionId: 'chem-ch10-s3',
    readingTime: 7,
    intro: 'Polymers repeat small monomers into giant chains whoseCls link type decides recycling and degradability. Addition chains grow by double bond opening while condensation chains expel water or alcohol. This section sorts the major commercial polymers and rubbers by formation and use.',
    objectives: [
      'Separate addition from condensation polymers with monomer evidence',
      'Write nylon, terylene and Bakelite formation with byproducts',
      'Compare natural rubber, vulcanised rubber and biodegradable chains'
    ],
    concepts: [
      {
        term: 'Addition polymers',
        kind: 'definition',
        statement: 'Addition polymers grow by **chain opening** of alkenes with **no byproduct**, following `monomer = polymer repeat` mass as in $nCH_2=CH_2 \\to -(CH_2-CH_2)_n-$. Members include **polythene**, **PVC** from $CH_2=CHCl$, **Teflon** from $CF_2=CF_2$ and **polyacrylonitrile** as `Orlon`, all with **all carbon backbone**.',
        detail: 'Initiators are peroxides or Ziegler Natta catalysts. Tacticity controls crystallinity. Copolymers such as Buna S mix two monomers in one chain.'
      },
      {
        term: 'Condensation polymers',
        kind: 'definition',
        statement: 'Condensation polymers join **bifunctional monomers** with **small molecule loss** such as water, giving `repeat plus H2O` bookkeeping. Nylon 6,6 from **hexamethylenediamine plus adipic acid** and terylene from **ethylene glycol plus terephthalic acid** release $H_2O$ per link with **amide or ester** backbone.',
        detail: 'Step growth needs high conversion for long chains. Phenol formaldehyde and melamine resins crosslink into thermosets. End group analysis measures chain length.'
      },
      {
        term: 'Natural and vulcanised rubber',
        kind: 'insight',
        statement: '**Natural rubber** is cis **polyisoprene** from $CH_2=C(CH_3)-CH=CH_2$ that is **soft and tacky** from weak **van der Waals** contacts. **Vulcanisation** heats it with `sulphur bridges` near five percent to form **crosslinks**, raising **strength and elasticity** while cutting **plastic flow**.',
        detail: 'Trans isomer gutta percha is harder and less elastic. Neoprene from chloroprene resists oil and weather. Buna N adds nitrile groups for fuel resistance.'
      },
      {
        term: 'Thermoplastic versus thermosetting',
        kind: 'definition',
        statement: '**Thermoplastics** soften on heating because chains are **linear or branched** with only **weak contacts**, so `polythene and PVC remould` repeatedly. **Thermosets** cure into **3D networks** such as `Bakelite and melamine` that **char instead of melting** once crosslinked.',
        detail: 'Recycling suits thermoplastics, not thermosets. Elastomers are lightly crosslinked networks with high extensibility. Fibres need strong directional hydrogen bonding.'
      },
      {
        term: 'Biodegradable polymers',
        kind: 'insight',
        statement: '**Biodegradable chains** insert **hydrolysable ester or amide** links that enzymes or water can cut, such as `PHBV and polylactic acid` from **hydroxy acids**. They compost to **$CO_2$ plus water** under microbial action, unlike **persistent polythene** with pure carbon backbone.',
        detail: 'Medical sutures use glycolide lactide copolymers that dissolve in the body. Starch blends accelerate breakdown. True degradability needs certified compost conditions, not open littering.'
      }
    ],
    figures: [
      {
        caption: 'Addition chains open $C=C$ with no byproduct as $nCH_2=CH_2 \\to -(CH_2-CH_2)_n-$, while condensation chains expel water; sulphur crosslinks vulcanise rubber.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Addition versus condensation polymer growth"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">addition: double bond opens, mass conserved</text><line x1="60" y1="90" x2="160" y2="90" stroke="currentColor" stroke-width="3"/><line x1="60" y1="95" x2="160" y2="95" stroke="currentColor" stroke-width="1.5"/><text x="70" y="80" font-size="13" fill="currentColor" font-family="sans-serif">CH2=CH2</text><line x1="180" y1="92" x2="230" y2="92" stroke="currentColor" stroke-width="2"/><polygon points="230,92 222,86 222,98" fill="currentColor" stroke="none"/><text x="240" y="97" font-size="13" fill="currentColor" font-family="sans-serif">-(CH2-CH2)n- polythene, PVC, Teflon</text><text x="40" y="140" font-size="14" fill="currentColor" font-family="sans-serif">condensation: diacid + diamine -&gt; nylon-6,6 + H2O</text><rect x="40" y="155" width="640" height="60" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="55" y="180" font-size="13" fill="currentColor" font-family="sans-serif">hexamethylenediamine + adipic acid -&gt; amide repeat + H2O</text><text x="55" y="202" font-size="13" fill="currentColor" font-family="sans-serif">terylene: glycol + terephthalic acid -&gt; ester repeat + H2O</text><text x="40" y="245" font-size="13" fill="currentColor" font-family="sans-serif">rubber: cis-polyisoprene soft; +S heat -&gt; crosslinked, tough</text><path d="M40,270 L200,270 M40,290 L200,290" stroke="currentColor" stroke-width="2" fill="none"/><line x1="100" y1="270" x2="100" y2="290" stroke="currentColor" stroke-width="2"/><line x1="150" y1="270" x2="150" y2="290" stroke="currentColor" stroke-width="2"/><text x="220" y="288" font-size="13" fill="currentColor" font-family="sans-serif">S bridges = crosslinks</text><text x="40" y="325" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">thermoplastic remoulds; thermoset Bakelite cures to 3D net</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Classify commercial polymers',
        problem: 'Classify polythene, nylon 6,6, terylene and Bakelite as addition or condensation with byproduct.',
        steps: [
          { label: 'Step 1', text: 'Check `byproduct test`: alkene chain growth has none, diamine diacid or phenol aldehyde routes release water.' },
          { label: 'Step 2', text: 'Assign:\n```text\npolythene: addition, no byproduct\nnylon 6,6: condensation, H2O out\nterylene: condensation, H2O out\nBakelite: condensation, H2O out\n```\nBackbones are carbon only for the first, heteroatom linked for the rest.' },
          { label: 'Step 3', text: 'Recycling logic follows: polythene remelts while Bakelite cannot because of its network.' }
        ],
        result: 'Polythene addition; nylon, terylene and Bakelite condensation with water loss.'
      },
      {
        title: 'Rubber property change',
        problem: 'Explain why vulcanised rubber outperforms raw rubber for tyres.',
        steps: [
          { label: 'Step 1', text: 'Raw rubber has `free chains` sliding past each other, giving tack and permanent set.' },
          { label: 'Step 2', text: 'Sulphur bridging:\n```text\ncis-polyisoprene + S, heat -> -S- crosslinks-\nresult: elastic network, less flow, more strength\n```\nCrosslinks pull chains back after stretch.' },
          { label: 'Step 3', text: 'Over cure hardens into ebonite, so sulphur share tunes hardness from elastic to rigid.' }
        ],
        result: 'Vulcanisation crosslinks chains with sulphur, adding elastic recovery and strength.'
      }
    ],
    keyTakeaways: [
      'Addition keeps all monomer atoms; condensation expels small molecules.',
      'Nylon and terylene release water per link with hetero backbones.',
      'Vulcanisation sulphur crosslinks cis polyisoprene for elasticity.',
      'Thermoplastics remelt; thermosets and heavy networks do not.'
    ],
    quiz: [
      {
        q: 'Which polymer forms by addition?',
        options: ['Polythene', 'Terylene', 'Nylon 6,6', 'Bakelite'],
        answer: 0,
        explanation: 'Step 1: Addition opens double bonds without loss. Step 2: Only polythene grows this way here. Step 3: Others release water.'
      },
      // PYQ-pattern: monomer pair for nylon 6,6 (rephrased, values changed)
      {
        q: 'Nylon 6,6 monomers are which pair?',
        options: ['`Ethylene glycol + terephthalic acid`', '`Hexamethylenediamine + adipic acid`', '`Phenol + formaldehyde`', '`Styrene + butadiene`'],
        answer: 1,
        explanation: 'Step 1: Nylon needs diamine plus diacid. Step 2: Six plus six carbons give the name. Step 3: Hence hexamethylenediamine plus adipic acid.'
      },
      {
        q: 'Vulcanisation does what?',
        options: ['Dissolves rubber in acid', 'Depolymerises to monomers', 'Crosslinks with sulphur for elastic strength', 'Converts to thermoplastic melt'],
        answer: 2,
        explanation: 'Step 1: Sulphur bridges chains on heating. Step 2: Network resists flow. Step 3: Elasticity and strength rise.'
      },
      {
        q: 'Which is biodegradable?',
        options: ['Polythene', 'Teflon', 'PVC', 'Polylactic acid'],
        answer: 3,
        explanation: 'Step 1: Degradable links hydrolyse. Step 2: Ester links in polylactic acid cut readily. Step 3: Pure carbon chains resist.'
      }
    ]
  },
  // ---------------------------------------------------------------- 10.4
  {
    sectionId: 'chem-ch10-s4',
    readingTime: 8,
    intro: 'Classic test tube reactions separate lookalike groups in seconds without instruments. Silver mirror, brick precipitate and yellow iodoform each flag a specific structural feature. This section organises the must know distinctions and their balanced equations.',
    objectives: [
      'Choose Tollens, Fehling and Benedict outcomes for aldehydes versus ketones',
      'Apply iodoform, Baeyer and Lucas logic to methyl ketones and unsaturation',
      'Write carbylamine and azo dye distinctions for amine classes'
    ],
    concepts: [
      {
        term: 'Tollens Fehling Benedict',
        kind: 'method',
        statement: 'Aldehydes reduce **Tollens reagent** to a **silver mirror** as $RCHO + 2[Ag(NH_3)_2]^+ + 3OH^- \\to RCOO^- + 2Ag + 4NH_3 + 2H_2O$ and reduce **Fehling or Benedict** to **brick $Cu_2O$** with `Cu2+ to Cu+` change. **Ketones stay negative** except **alpha hydroxy ketones** that rearrange under base, so the pair separates `aldehyde versus ketone`.',
        detail: 'Formic acid gives both tests from its aldehyde like hydrogen. Aromatic aldehydes skip Fehling but answer Tollens. Clean glass is needed for a sharp mirror.'
      },
      {
        term: 'Iodoform test',
        kind: 'method',
        statement: 'The **iodoform test** flags `CH3CO- or CH3CH(OH)-` groups with `I2 plus NaOH` giving **yellow $CHI_3$** precipitate and **antiseptic odour** via $CH_3COCH_3 + 3I_2 + 4NaOH \\to CHI_3 + CH_3COONa + 3NaI + 3H_2O$. Ethanol and **2-propanol** answer through in situ oxidation to the same **methyl carbonyl** pattern.',
        detail: 'Acetophenone answers, benzophenone does not. The haloform logic extends to bromine and chlorine variants. Stoichiometry needs three halogens per methyl group.'
      },
      {
        term: 'Baeyer and bromine tests',
        kind: 'method',
        statement: 'Unsaturation answers **bromine water** by **orange to colourless** addition and **Baeyer reagent** by **purple to brown** glycol formation with `cold dilute KMnO4`. Alkanes keep both colours, so the pair separates `alkene or alkyne versus alkane` rapidly.',
        detail: 'Baeyer gives $MnO_2$ brown precipitate in base. Conjugated systems react fastest. Phenols also decolourise bromine but by substitution precipitate, a known interference.'
      },
      {
        term: 'Carbylamine and mustard distinctions',
        kind: 'method',
        statement: 'Primary amines give foul **carbylamine isocyanide** odour with `CHCl3 plus KOH` as $RNH_2 + CHCl_3 + 3KOH \\to RNC + 3KCl + 3H_2O$, while secondary amines stay silent. Nitrous acid then separates the trio: primary aliphatic **bubbles $N_2$**, primary aromatic **forms dye** after coupling, secondary gives **yellow oil**, tertiary gives **salts** as `HNO2 behaviour`.',
        detail: 'Carbylamine needs the $NH_2$ pair, so tertiary amines never answer. Azo dye formation from aniline confirms primary aromatic. Hinsberg reagent further tags all three classes by solubility.'
      },
      {
        term: 'Must know separations map',
        kind: 'insight',
        statement: 'A compact map runs **Lucas for alcohol class**, **Tollens for aldehyde**, **iodoform for methyl carbonyl**, **neutral $FeCl_3$ violet for phenol** and **2,4-DNP orange for carbonyl** as `five minute bench kit`. Phenol turns **litmus red** while alcohols do not, and acids effervesce with **carbonate** for the final `acid versus phenol` cut.',
        detail: '2,4-DNP catches all aldehydes and ketones before Tollens splits them. Silver nitrate in alcohol flags alkyl halide class by precipitate speed. Ceric ammonium nitrate turns red with alcohols.'
      }
    ],
    figures: [
      {
        caption: 'Aldehydes give a Tollens silver mirror and brick $Cu_2O$ with Fehling, while $CH_3CO-$ groups give yellow $CHI_3$; $Br_2$ water and Baeyer spot $C=C$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Test tube panel for Tollens Fehling and iodoform"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">bench kit: mirror, brick, yellow, decolourised</text><rect x="40" y="65" width="70" height="130" fill="none" stroke="currentColor" stroke-width="2"/><rect x="40" y="65" width="70" height="130" fill="currentColor" stroke="none" opacity="0.12"/><line x1="40" y1="110" x2="110" y2="110" stroke="currentColor" stroke-width="3"/><text x="30" y="215" font-size="12" fill="currentColor" font-family="sans-serif">Tollens mirror Ag</text><rect x="200" y="65" width="70" height="130" fill="none" stroke="currentColor" stroke-width="2"/><rect x="200" y="150" width="70" height="45" fill="currentColor" stroke="none" opacity="0.3"/><text x="190" y="215" font-size="12" fill="currentColor" font-family="sans-serif">Fehling brick Cu2O</text><rect x="360" y="65" width="70" height="130" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="395,150 375,175 415,175" fill="currentColor" stroke="none" opacity="0.5"/><rect x="375" y="175" width="40" height="20" fill="currentColor" stroke="none" opacity="0.5"/><text x="350" y="215" font-size="12" fill="currentColor" font-family="sans-serif">iodoform yellow CHI3</text><rect x="520" y="65" width="70" height="130" fill="none" stroke="currentColor" stroke-width="2"/><text x="530" y="130" font-size="12" fill="currentColor" font-family="sans-serif">Br2</text><text x="525" y="150" font-size="11" fill="currentColor" font-family="sans-serif">orange</text><text x="525" y="168" font-size="11" fill="currentColor" font-family="sans-serif">to clear</text><text x="510" y="215" font-size="12" fill="currentColor" font-family="sans-serif">alkene test</text><text x="40" y="250" font-size="13" fill="currentColor" font-family="sans-serif">carbylamine: 1 deg amine + CHCl3/KOH -&gt; foul RNC</text><text x="40" y="275" font-size="13" fill="currentColor" font-family="sans-serif">2,4-DNP orange = carbonyl; FeCl3 violet = phenol</text><text x="40" y="300" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">Lucas = alcohol class; neutral FeCl3 separates phenol</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Aldehyde versus ketone bench',
        problem: 'Distinguish propanal from propanone with Tollens and iodoform logic.',
        steps: [
          { label: 'Step 1', text: 'Run `Tollens first`: propanal gives silver mirror by $CH_3CH_2CHO \\to CH_3CH_2COO^-$, propanone stays clear.' },
          { label: 'Step 2', text: 'Cross check methyl carbonyl:\n```text\npropanone + I2/NaOH -> yellow CHI3 (positive)\npropanal + I2/NaOH -> negative (no CH3CO-)\n```\nSo $CH_3COCH_3$ answers iodoform while $CH_3CH_2CHO$ does not.' },
          { label: 'Step 3', text: 'Combined result identifies each: mirror only is propanal, yellow only is propanone.' }
        ],
        result: 'Tollens picks propanal; iodoform picks propanone; together they fix both.'
      },
      {
        title: 'Amine class bench',
        problem: 'Distinguish aniline, N-methylaniline and N,N-dimethylaniline.',
        steps: [
          { label: 'Step 1', text: 'Run `carbylamine`: only primary aniline gives foul isocyanide odour.' },
          { label: 'Step 2', text: 'Run nitrous acid cold:\n```text\naniline: diazonium -> red dye with phenol\nN-methylaniline: yellow oil N-nitroso\nN,N-dimethylaniline: p-nitroso green salt\n```\nEach class shows a distinct signal.' },
          { label: 'Step 3', text: 'Hinsberg backup: primary gives soluble sulphonamide salt, secondary gives insoluble, tertiary stays unreacted.' }
        ],
        result: 'Carbylamine plus nitrous acid plus Hinsberg fix primary, secondary and tertiary aryl amines.'
      }
    ],
    keyTakeaways: [
      'Tollens mirror and Fehling brick flag aldehydes over ketones.',
      'Iodoform flags methyl carbonyl or oxidisable methyl carbinol.',
      'Bromine and Baeyer flag pi bonds with colour loss.',
      'Carbylamine plus nitrous acid classify amine substitution grade.'
    ],
    quiz: [
      // PYQ-pattern: Tollens versus Fehling for aldehydes (rephrased, values changed)
      {
        q: 'Which compound gives a silver mirror with Tollens?',
        options: ['Propanone', 'Propanal', 'Benzophenone', 'Acetic acid'],
        answer: 1,
        explanation: 'Step 1: Tollens oxidises aldehydes. Step 2: Propanal has the $CHO$ group. Step 3: Ketones and acids stay negative.'
      },
      {
        q: 'Positive iodoform needs which group?',
        options: [`$CH_3CH_2CHO$`, `$C_6H_5COC_6H_5$`, `$CH_3COCH_3$`, `$HCHO$`],
        answer: 2,
        explanation: 'Step 1: Haloform needs methyl carbonyl. Step 2: Only acetophenone type $CH_3CO-$ qualifies here. Step 3: Hence $CH_3COCH_3$ answers.'
      },
      {
        q: 'Baeyer reagent colour change for alkenes is what?',
        options: ['Purple to brown with $MnO_2$', 'Orange to colourless', 'Yellow to red', 'No change'],
        answer: 0,
        explanation: 'Step 1: Cold dilute permanganate hydroxylates. Step 2: Manganese reduces to brown dioxide. Step 3: Purple fades to brown precipitate.'
      },
      {
        q: 'Carbylamine test is answered by which amine?',
        options: ['Secondary', 'Tertiary', 'Quaternary salt', 'Primary'],
        answer: 3,
        explanation: 'Step 1: Isocyanide needs $NH_2$. Step 2: Only primary amines supply it. Step 3: Others lack two hydrogens and stay silent.'
      }
    ]
  }
]
