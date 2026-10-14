import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 21: Carbonyl Chemistry In Depth (Clayden 2e foci 6, 10, 11, 20, 25, 26)
// Sections 21.1 - 21.4. Master study content in Clayden language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh21Content: SectionContent[] = [
  // ---------------------------------------------------------------- 21.1
  {
    sectionId: 'chem-ch21-s1',
    readingTime: 9,
    intro: 'Clayden begins carbonyl chemistry with one orbital picture that explains everything that follows: nucleophiles donate into the low lying $\\pi^{*}$ of $C=O$ at carbon. Attack follows the Burgi-Dunitz trajectory at about $107$ degrees and builds a tetrahedral alkoxide that is then protonated. This section maps cyanohydrins, hydrates, hemiacetals, acetals and imines from that single addition step.',
    objectives: [
      'Draw nucleophilic addition to $RCHO$ and $RCOR$ with the Burgi-Dunitz angle and curved arrows',
      'Predict cyanohydrin, hydrate, hemiacetal and imine equilibria from carbonyl structure and conditions',
      'Choose acid or base catalysis and water removal to drive reversible additions'
    ],
    concepts: [
      {
        term: 'Carbonyl LUMO is carbon centred',
        kind: 'definition',
        statement: 'The **carbonyl $\\pi^{*}$ orbital** `LUMO` has its larger lobe on carbon, so the $HOMO$ of $Nu^{-}$ overlaps carbon best and addition gives $R_{2}C(O^{-})Nu$ before protonation.',
        detail: 'Clayden draws electron flow from nucleophile $HOMO$ into $\\pi^{*}$: the $\\pi$ bond breaks and both electrons land on oxygen. Aldehydes react faster than ketones because a hydrogen substituent keeps the approach open.'
      },
      {
        term: 'Burgi-Dunitz angle of attack',
        kind: 'law',
        statement: 'Nucleophiles approach at the **Burgi-Dunitz angle** `angle` of about $107$ degrees to the $C=O$ axis, avoiding the oxygen lone pairs while maximising $HOMO$ to $\\pi^{*}$ overlap.',
        detail: 'The angle is measured from the $C=O$ bond to the incoming $Nu$ to carbon vector. Steric crowding in ketones raises the addition transition state because substituents must fold together toward tetrahedral geometry.'
      },
      {
        term: 'Cyanohydrin formation',
        kind: 'method',
        statement: 'Cyanide adds to give **cyanohydrins** `cyanohydrin` $R_{2}C(OH)CN$ under $KCN$ with acid workup, a reversible $C$-$C$ bond forming addition favoured for aldehydes and unhindered ketones.',
        detail: 'Equilibrium lies further right for $RCHO$ than for bulky $RCOR$. The nitrile can later be hydrolysed or reduced, so cyanohydrins are masked carbonyl plus one carbon unit in Clayden logic.'
      },
      {
        term: 'Hydrates and hemiacetals',
        kind: 'theorem',
        statement: 'Water and alcohols add to give **hydrates and hemiacetals** `hemiacetal` $R_{2}C(OH)OR$ and $R_{2}C(OH)_{2}$, with electron withdrawing groups stabilising the tetrahedral adduct.',
        detail: 'Chloral hydrate and hexafluoroacetone hydrate are isolable because $Cl_{3}C$ and $CF_{3}$ groups pull electron density from the crowded oxygen pair. Simple acetone hydrate lies far to the left and is seen only spectroscopically.'
      },
      {
        term: 'Acetals and imines need acid and water control',
        kind: 'insight',
        statement: 'A second equivalent of $ROH$ or $RNH_{2}$ converts the hemiacetal to an **acetal** `acetal` $R_{2}C(OR)_{2}$ and the hemiaminal to an **imine** `imine` $R_{2}C=NR$ only with acid catalysis and removal of $H_{2}O$.',
        detail: 'Acid protonates $OH$ into a leaving group $H_{2}O$; base cannot do this step. Dean-Stark trapping or molecular sieves pull the equilibrium to acetal and imine, and aqueous acid reverses it for protection chemistry.'
      }
    ],
    figures: [
      {
        caption: 'Burgi-Dunitz addition to $C=O$: $Nu^{-}$ approaches carbon at about $107$ degrees, the $\\pi$ bond breaks to $O^{-}$, then protonation gives the tetrahedral adduct.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Burgi-Dunitz nucleophilic addition scheme to a carbonyl"><line x1="90" y1="300" x2="650" y2="300" stroke="currentColor" stroke-width="2"/><text x="360" y="330" text-anchor="middle" font-size="14" fill="currentColor">addition coordinate</text><rect x="120" y="120" width="120" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="180" y="145" text-anchor="middle" font-size="13" fill="currentColor">R2C=O</text><text x="180" y="163" text-anchor="middle" font-size="12" fill="currentColor">planar</text><rect x="300" y="110" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="375" y="135" text-anchor="middle" font-size="13" fill="currentColor">Nu to C at 107 deg</text><text x="375" y="155" text-anchor="middle" font-size="12" fill="currentColor">pi-star overlap</text><text x="375" y="173" text-anchor="middle" font-size="12" fill="currentColor">tetrahedral TS</text><rect x="510" y="120" width="120" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="570" y="145" text-anchor="middle" font-size="13" fill="currentColor">R2C(O-)Nu</text><text x="570" y="163" text-anchor="middle" font-size="12" fill="currentColor">then protonate</text><line x1="240" y1="150" x2="300" y2="150" stroke="currentColor" stroke-width="2.5"/><polygon points="300,150 290,145 290,155" fill="currentColor"/><line x1="450" y1="150" x2="510" y2="150" stroke="currentColor" stroke-width="2.5"/><polygon points="510,150 500,145 500,155" fill="currentColor"/><line x1="375" y1="110" x2="375" y2="70" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="385" y="85" font-size="12" fill="currentColor">Nu- HOMO</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Cyanohydrin equilibrium for aldehyde versus ketone',
        problem: 'Benzaldehyde $PhCHO$ and acetophenone $PhCOCH_{3}$ are each treated with $KCN$ followed by acid workup. Predict which gives the larger cyanohydrin constant and draw the product.',
        steps: [
          { label: 'Step 1', text: 'Write the addition $R_{2}C=O + HCN \\rightleftharpoons R_{2}C(OH)CN$ and list crowding:\n```text\nPhCHO: one H, open TS, product R2C(OH)(CN) uncrowded\nPhCOCH3: two carbon groups, crowded tetrahedral adduct\n```\nAldehyde addition pays a smaller steric price on rehybridisation.' },
          { label: 'Step 2', text: 'Place the equilibrium: $PhCHO$ lies further right to $PhCH(OH)CN$ while $PhCOCH_{3}$ lies further left, exactly the Clayden steric trend for $\\pi^{*}$ attack.' },
          { label: 'Step 3', text: 'Check reversibility: wash with base regenerates carbonyl, confirming a true addition equilibrium and not an irreversible substitution.' }
        ],
        result: '$PhCH(OH)CN$ dominates for the aldehyde; the hindered ketone cyanohydrin forms in much lower amount.'
      },
      {
        title: 'Acetal protection with water removal',
        problem: 'Cyclohexanone is refluxed with ethylene glycol $HOCH_{2}CH_{2}OH$ and catalytic $TsOH$ with Dean-Stark trapping. Give the product and explain why trapping matters.',
        steps: [
          { label: 'Step 1', text: 'Form hemiacetal first, then protonate $OH$ to leave as $H_{2}O$ and close the second $C$-$O$ bond to the cyclic acetal $C(OCH_{2})_{2}$.' },
          { label: 'Step 2', text: 'Write the two-water stoichiometry: ketone plus diol gives cyclic acetal plus $H_{2}O$, so removing $H_{2}O$ pulls the reversible pair to the right.' },
          { label: 'Step 3', text: 'Confirm by aqueous acid reversal: dilute $HCl$ regenerates cyclohexanone, the protection and deprotection logic of Clayden Chapter 11.' }
        ],
        result: 'Cyclic ethylene acetal of cyclohexanone in high yield only when $H_{2}O$ is trapped; without trapping the mixture stalls at hemiacetal.'
      }
    ],
    keyTakeaways: [
      'Nucleophiles attack carbon of $C=O$ through $HOMO$ to $\\pi^{*}$ overlap along the Burgi-Dunitz angle.',
      'Cyanohydrins $R_{2}C(OH)CN$ and hydrates are reversible additions favoured for open aldehydes.',
      'Hemiacetals stop at one $ROH$; acetals $R_{2}C(OR)_{2}$ need acid plus a second $ROH$.',
      'Imines $R_{2}C=NR$ need acid catalysis and $H_{2}O$ removal, reversed by aqueous acid.'
    ],
    quiz: [
      {
        q: 'Why does $Nu^{-}$ attack carbon rather than oxygen of $C=O$?',
        options: ['Carbon carries the larger $\\pi^{*}$ lobe for $HOMO$ overlap', 'Oxygen is positively charged', 'Carbon is more electronegative', 'Attack is random and then rearranges'],
        answer: 0,
        explanation: 'Step 1: Draw $\\pi^{*}$ with bigger coefficient on carbon. Step 2: Overlap nucleophile $HOMO$ there. Step 3: Break $\\pi$ to $O^{-}$ and protonate.'
      },
      // PYQ-pattern: Burgi-Dunitz angle and steric trend drill
      {
        q: 'Aldehydes add faster than hindered ketones mainly because:',
        options: ['Aldehydes lack a carbonyl dipole', 'Ketones cannot protonate', 'Rehybridisation crowds two alkyl groups in ketone adducts', 'Aldehydes use a different orbital'],
        answer: 2,
        explanation: 'Step 1: Compare planar $sp^{2}$ to tetrahedral $sp^{3}$ angles. Step 2: Fold substituents closer on addition. Step 3: Penalise ketones with two large groups more than aldehydes with one $H$.'
      },
      {
        q: 'Acetal formation from a ketone and two $ROH$ requires:',
        options: ['Strong base only', 'Acid catalysis plus $H_{2}O$ removal', 'Light with no catalyst', 'Oxidation first'],
        answer: 1,
        explanation: 'Step 1: Form hemiacetal reversibly. Step 2: Protonate $OH$ so $H_{2}O$ leaves. Step 3: Trap $H_{2}O$ to pull the second addition to $R_{2}C(OR)_{2}$.'
      },
      {
        q: 'Cyanohydrin of $PhCHO$ on treatment with aqueous base gives:',
        options: ['Irreversible nitrile polymer', 'Oxidation to benzoic acid directly', 'Acetal by dimerisation', 'Back reaction to $PhCHO$ plus $CN^{-}$'],
        answer: 3,
        explanation: 'Step 1: Recognise addition as an equilibrium. Step 2: Remove $HCN$ or add base to deprotonate. Step 3: Collapse the alkoxide back to $C=O$ plus $CN^{-}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 21.2
  {
    sectionId: 'chem-ch21-s2',
    readingTime: 10,
    intro: 'When the carbonyl carries a leaving group the addition adduct cannot survive: it collapses and expels $L^{-}$ to regenerate $C=O$. Clayden calls this addition and elimination, the mechanism behind every carboxylic acid derivative interconversion. This section ranks acid chlorides, anhydrides, esters and amides and shows how acids and bases catalyse the same tetrahedral intermediate.',
    objectives: [
      'Draw the addition-elimination path through the tetrahedral intermediate for acid derivatives',
      'Rank $RCOCl$, $(RCO)_{2}O$, $RCOOR$ and $RCONR_{2}$ by electrophilicity and leaving ability',
      'Select Weinreb amide and Gilman routes to stop at ketone without over-addition'
    ],
    concepts: [
      {
        term: 'Addition-elimination at acyl carbon',
        kind: 'definition',
        statement: 'Attack on **acyl carbon** `tetrahedral` gives $RC(OH)(Nu)L$ which collapses by pushing electrons back to $C=O$ while $L^{-}$ leaves, so substitution is addition then elimination.',
        detail: 'The intermediate is neutral when $NuH$ adds under acid and anionic $RC(O^{-})(Nu)L$ under base. Collapse is fast when $L^{-}$ is a weak base such as $Cl^{-}$ and slow when $L^{-}$ is $RO^{-}$ or $R_{2}N^{-}$.'
      },
      {
        term: 'Reactivity order of acid derivatives',
        kind: 'law',
        statement: 'Reactivity falls as **acid chloride** `reactivity` $RCOCl$ exceeds anhydride $(RCO)_{2}O$ exceeds ester $RCOOR$ exceeds amide $RCONR_{2}$, tracking donation into $C=O$ plus leaving group stability.',
        detail: 'Nitrogen lone pair donation in amides raises the $LUMO$ and $R_{2}N^{-}$ is a poor leaving group. Chloride withdraws inductively and departs as stable $Cl^{-}$, so $RCOCl$ acylates without heating.'
      },
      {
        term: 'Acid catalysis by protonated carbonyl',
        kind: 'method',
        statement: 'Protonation gives **$RC(OH^{+})L$** `acid-catalysis` with a lowered $\\pi^{*}$ that weak nucleophiles such as $ROH$ can attack, followed by deprotonation and $H_{2}O$ style leaving steps.',
        detail: 'Clayden protonates the carbonyl oxygen, not the leaving group, to activate carbon. $SOCl_{2}$ and $PCl_{5}$ convert $RCOOH$ to $RCOCl$ through this activated manifold with $SO_{2}$ and $HCl$ as drivers.'
      },
      {
        term: 'Base promoted acyl substitution',
        kind: 'method',
        statement: 'Hydroxide attack gives an **anionic tetrahedral intermediate** `base-path` $RC(O^{-})(OH)L$ whose collapse is driven by reforming strong $C=O$ and expelling $L^{-}$.',
        detail: 'Saponification of esters is irreversible because carboxylate $RCOO^{-}$ resists a second addition. Pyridine in acylations with $RCOCl$ scavenges $HCl$ and acts as a nucleophilic catalyst through an acylpyridinium ion.'
      },
      {
        term: 'Stopping at ketone with special reagents',
        kind: 'insight',
        statement: 'Normal $RMgX$ over-adds to esters, so the **Weinreb amide** `Weinreb` $RCON(OMe)Me$ chelates the tetrahedral intermediate and releases ketone only on workup, while $R_{2}CuLi$ adds once.',
        detail: 'The chelated $Mg$ complex cannot collapse until protonation, blocking the second addition that would give tertiary alcohol. Gilman reagents $R_{2}CuLi$ are softer and stop at ketone from $RCOCl$ in Clayden Chapter 9 logic.'
      }
    ],
    figures: [
      {
        caption: 'Substitution at $C=O$ via the tetrahedral intermediate: $Nu$ adds, then $C=O$ reforms as $L^{-}$ leaves; $RCOCl$ reacts fastest and $RCONR_{2}$ slowest.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Addition elimination scheme at acyl carbon with reactivity order"><rect x="60" y="130" width="130" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="158" text-anchor="middle" font-size="13" fill="currentColor">R-C(=O)-L</text><text x="125" y="178" text-anchor="middle" font-size="12" fill="currentColor">+ Nu-</text><rect x="260" y="120" width="160" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="340" y="148" text-anchor="middle" font-size="13" fill="currentColor">tetrahedral</text><text x="340" y="168" text-anchor="middle" font-size="12" fill="currentColor">RC(O-)(Nu)L</text><text x="340" y="186" text-anchor="middle" font-size="12" fill="currentColor">unstable</text><rect x="490" y="130" width="150" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="565" y="158" text-anchor="middle" font-size="13" fill="currentColor">R-C(=O)-Nu</text><text x="565" y="178" text-anchor="middle" font-size="12" fill="currentColor">+ L-</text><line x1="190" y1="165" x2="260" y2="165" stroke="currentColor" stroke-width="2.5"/><polygon points="260,165 250,160 250,170" fill="currentColor"/><line x1="420" y1="165" x2="490" y2="165" stroke="currentColor" stroke-width="2.5"/><polygon points="490,165 480,160 480,170" fill="currentColor"/><text x="360" y="250" text-anchor="middle" font-size="13" fill="currentColor">RCOCl greater than anhydride greater than ester greater than amide</text><line x1="140" y1="230" x2="580" y2="230" stroke="currentColor" stroke-width="1.6"/><polygon points="580,230 570,225 570,235" fill="currentColor"/></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Ester hydrolysis under base versus acid',
        problem: 'Ethyl acetate $CH_{3}COOCH_{2}CH_{3}$ is hydrolysed with aqueous $NaOH$ and separately with aqueous $HCl$ and heat. Write both tetrahedral routes and the isolated organic product.',
        steps: [
          { label: 'Step 1', text: 'Draw base route $CH_{3}COOR + OH^{-} \\to CH_{3}C(O^{-})(OH)OR \\to CH_{3}COO^{-} + ROH$:\n```text\nbase: anionic intermediate, collapse expels RO-\nacid: protonated carbonyl, ROH attacks, then H2O leaves\nisolate: carboxylate vs carboxylic acid\n```\nLeaving ability plus deprotonation decides the end point.' },
          { label: 'Step 2', text: 'Isolate $CH_{3}COO^{-}Na^{+}$ from base because carboxylate resists further attack; isolate $CH_{3}COOH$ from acid after equilibrium.' },
          { label: 'Step 3', text: 'Verify by acidifying the base product to $CH_{3}COOH$, proving the same acyl core with different protonation states.' }
        ],
        result: 'Base gives acetate salt plus ethanol irreversibly; acid gives acetic acid plus ethanol reversibly.'
      },
      {
        title: 'Ketone from ester without tertiary alcohol',
        problem: 'Convert methyl benzoate $PhCOOCH_{3}$ to acetophenone $PhCOCH_{3}$ with $CH_{3}MgBr$. Explain the over-addition trap and the Weinreb fix.',
        steps: [
          { label: 'Step 1', text: 'Normal path adds twice: ester to ketone $PhCOCH_{3}$ then to tertiary alcohol $PhC(OH)(CH_{3})_{2}$ because ketone is more electrophilic than ester.' },
          { label: 'Step 2', text: 'Convert to Weinreb amide $PhCON(OMe)Me$ first; $CH_{3}MgBr$ addition chelates $Mg$ and cannot collapse until workup.' },
          { label: 'Step 3', text: 'Quench releases exactly one $CH_{3}$ as $PhCOCH_{3}$, verified by absence of the tertiary alcohol $C$-$OH$ signal.' }
        ],
        result: '$PhCOCH_{3}$ cleanly via the Weinreb amide; direct $Grignard$ on the ester gives mainly $PhC(OH)(CH_{3})_{2}$.'
      }
    ],
    keyTakeaways: [
      'Acyl substitution is addition to $RCOL$ then collapse of $RC(O^{-})(Nu)L$ back to $C=O$.',
      'Rate falls $RCOCl$ to anhydride to ester to amide with donation and leaving trends.',
      'Acid protonates $C=O$ to lower $\\pi^{*}$; base forms an anionic intermediate ending in carboxylate.',
      'Weinreb amides and $R_{2}CuLi$ deliver ketones once where $RMgX$ would add twice.'
    ],
    quiz: [
      {
        q: 'The intermediate in acyl substitution is best described as:',
        options: ['A tetrahedral adduct that collapses to $C=O$', 'A free carbocation always', 'A radical pair', 'An aromatic sigma complex'],
        answer: 0,
        explanation: 'Step 1: Add $Nu$ to $C=O$ carbon. Step 2: Hold four single bonds at carbon. Step 3: Reform $\\pi$ while $L^{-}$ departs.'
      },
      // PYQ-pattern: acid derivative reactivity order drill
      {
        q: 'Correct reactivity order toward $Nu^{-}$ is:',
        options: ['Amide greater than ester greater than $RCOCl$', 'Ester greater than amide greater than anhydride', '$RCOCl$ greater than anhydride greater than ester greater than amide', 'All four equal'],
        answer: 2,
        explanation: 'Step 1: Rank donation $N$ greater than $O$ greater than $Cl$. Step 2: Rank leaving $Cl^{-}$ greater than $RCOO^{-}$ greater than $RO^{-}$ greater than $R_{2}N^{-}$. Step 3: Combine to $RCOCl$ fastest and amide slowest.'
      },
      {
        q: 'Acid catalysis speeds $ROH$ attack on esters because:',
        options: ['It removes the carbonyl dipole', 'It protonates $C=O$ and lowers $\\pi^{*}$', 'It oxidises the alcohol', 'It makes $RO^{-}$ leave before attack'],
        answer: 1,
        explanation: 'Step 1: Form $RC(OH^{+})OR$. Step 2: Drop the $LUMO$ for weak nucleophiles. Step 3: Deprotonate after addition and eliminate $ROH$.'
      },
      {
        q: 'Weinreb amides stop $Grignard$ addition at ketone since:',
        options: ['They are unreactive to $RMgX$', 'They oxidise $RMgX$', 'They form acetals instead', 'They chelate and block collapse until workup'],
        answer: 3,
        explanation: 'Step 1: Add $R$ to chelated amide. Step 2: Hold the $Mg$ chelate stable. Step 3: Release ketone only on protonation, preventing a second addition.'
      }
    ]
  },
  // ---------------------------------------------------------------- 21.3
  {
    sectionId: 'chem-ch21-s3',
    readingTime: 10,
    intro: 'Carbonyl compounds are also acids at the alpha carbon: deprotonation gives resonance stabilised enolates that are carbon nucleophiles. Clayden separates kinetic enolates made with $LDA$ at low temperature from thermodynamic enolates made with equilibrating base. This section controls which side alkylates and whether $C$ or $O$ attacks.',
    objectives: [
      'Write enol and enolate structures with $pK_{a}$ reasoning for alpha protons',
      'Choose $LDA$ at low temperature versus equilibrating base for kinetic and thermodynamic control',
      'Direct alkylation to carbon with halides while suppressing polyalkylation and $O$-attack'
    ],
    concepts: [
      {
        term: 'Enol and enolate pair',
        kind: 'definition',
        statement: 'An **enol** `enol` $C=C$-$OH$ tautomerises with $C=O$ $CH$, and its conjugate base is the resonance pair **enolate** `enolate` $C^{-}$-$C=O$ to $C=C$-$O^{-}$.',
        detail: 'Alpha $pK_{a}$ near $20$ in ketones and near $25$ in esters means $LDA$ with conjugate acid $pK_{a}$ near $36$ deprotonates fully. Enols dominate only with conjugation or hydrogen bonding as in dimedone.'
      },
      {
        term: 'Kinetic versus thermodynamic enolate',
        kind: 'law',
        statement: 'Bulky **$LDA$ at low temperature** `kinetic` removes the less hindered alpha proton fastest to give the kinetic enolate, while reversible base gives the more substituted **thermodynamic enolate** `thermodynamic`.',
        detail: 'At about $195$ K in $THF$ proton transfer is irreversible and steric approach controls. At higher temperature with $NaOEt$ equilibration favours the more substituted $C=C$ bond of the enolate, the Zaitsev style product.'
      },
      {
        term: 'Silyl enol ethers as masked enolates',
        kind: 'method',
        statement: 'Trapping with **$Me_{3}SiCl$** `silyl` gives silyl enol ethers $C=C$-$OSiMe_{3}$ that isolate the chosen geometry and regenerate enolate with $MeLi$ or $F^{-}$.',
        detail: 'Kinetic silyl ether forms with $LDA$ then $Me_{3}SiCl$ at low temperature; thermodynamic ether forms with $Et_{3}N$ and equilibrating conditions. Mukaiyama aldol chemistry later uses these ethers with Lewis acids.'
      },
      {
        term: 'Carbon versus oxygen alkylation',
        kind: 'theorem',
        statement: '**Carbon alkylation** `C-alkylation` with $R$-$X$ dominates for ketone enolates in $THF$, while hard electrophiles and silver salts can divert to **$O$-alkylation** `O-alkylation` $C=C$-$OR$.',
        detail: 'The enolate carbon is softer and bonds best to $S_{N}2$ halides such as $CH_{3}I$ and $BnBr$. Protic solvent, $HMPA$ additives and highly ionic enolates raise the $O$-attack share, a classic hard and soft mismatch.'
      },
      {
        term: 'Monoalkylation control',
        kind: 'insight',
        statement: 'Direct ketone alkylation risks **polyalkylation** `polyalkylation` because product is still acidic, so malonate, acetoacetate and enamine routes alkylate once then release the ketone.',
        detail: 'Malonate $CH_{2}(COOR)_{2}$ with $pK_{a}$ near $13$ alkylates cleanly and decarboxylates on heating. Enamines $R_{2}C=CR$-$NR_{2}$ mask the carbonyl as a neutral nucleophile and hydrolyse back after one $C$-$C$ bond.'
      }
    ],
    figures: [
      {
        caption: 'Kinetic $LDA$ enolate at low temperature versus thermodynamic enolate on equilibration; $C$-alkylation with $R$-$X$ versus $O$-attack with hard electrophiles.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kinetic versus thermodynamic enolate scheme with alkylation branches"><rect x="40" y="130" width="150" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="115" y="158" text-anchor="middle" font-size="13" fill="currentColor">unsym ketone</text><text x="115" y="178" text-anchor="middle" font-size="12" fill="currentColor">two alpha sides</text><rect x="250" y="80" width="170" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="335" y="105" text-anchor="middle" font-size="13" fill="currentColor">kinetic enolate</text><text x="335" y="125" text-anchor="middle" font-size="12" fill="currentColor">LDA, 195 K</text><rect x="250" y="210" width="170" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="335" y="235" text-anchor="middle" font-size="13" fill="currentColor">thermodynamic</text><text x="335" y="255" text-anchor="middle" font-size="12" fill="currentColor">NaOEt, equilibrate</text><rect x="480" y="130" width="180" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="570" y="155" text-anchor="middle" font-size="13" fill="currentColor">R-X gives C-alkyl</text><text x="570" y="175" text-anchor="middle" font-size="12" fill="currentColor">hard E+ gives O-alkyl</text><line x1="190" y1="150" x2="250" y2="110" stroke="currentColor" stroke-width="2.5"/><polygon points="250,110 240,108 242,118" fill="currentColor"/><line x1="190" y1="175" x2="250" y2="245" stroke="currentColor" stroke-width="2.5"/><polygon points="250,245 240,243 242,253" fill="currentColor"/><line x1="420" y1="115" x2="480" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="480,150 470,148 472,158" fill="currentColor"/><line x1="420" y1="245" x2="480" y2="175" stroke="currentColor" stroke-width="2"/><polygon points="480,175 470,173 472,183" fill="currentColor"/></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Kinetic enolate of an unsymmetrical ketone',
        problem: '2-methylcyclohexanone is treated with $LDA$ in $THF$ at $195$ K then $CH_{3}I$. Predict the alkylation site and contrast with $NaOEt$ and $CH_{3}I$ at room temperature.',
        steps: [
          { label: 'Step 1', text: 'Draw both alpha sets: $C_{6}$ methylene is less hindered than $C_{2}$ methine next to $CH_{3}$:\n```text\nkinetic: LDA removes open C6-H at 195 K\nthermodynamic: equilibration favours substituted enolate at C2\ntrap: Me3SiCl confirms ratio before alkylation\n```\nBulk and temperature pick the deprotonation path.' },
          { label: 'Step 2', text: 'Alkylate carbon: kinetic route gives $6$-methyl product while equilibrating $NaOEt$ gives mainly $2,2$-dimethyl product through the substituted enolate.' },
          { label: 'Step 3', text: 'Check $C$ versus $O$: $CH_{3}I$ in $THF$ gives $C$-methylation; $O$-methyl enol ether is minor without silver or hard conditions.' }
        ],
        result: '$LDA$ at $195$ K methylates the less hindered side; $NaOEt$ equilibrates to the more substituted enolate and methylates the crowded side.'
      },
      {
        title: 'Malonate route to a monoalkylated acid',
        problem: 'Prepare butanoic acid $CH_{3}CH_{2}CH_{2}COOH$ by malonate alkylation from diethyl malonate $CH_{2}(COOEt)_{2}$ and ethyl bromide, avoiding polyalkylation.',
        steps: [
          { label: 'Step 1', text: 'Deprotonate with $NaOEt$: malonate $pK_{a}$ near $13$ gives full enolate with one equivalent of base.' },
          { label: 'Step 2', text: 'Single $S_{N}2$ with $CH_{3}CH_{2}Br$ gives $CH_{3}CH_{2}CH(COOEt)_{2}$; the remaining alpha proton is less acidic after one alkyl group.' },
          { label: 'Step 3', text: 'Hydrolyse and heat to decarboxylate: diacid loses $CO_{2}$ to give $CH_{3}CH_{2}CH_{2}COOH$ cleanly.' }
        ],
        result: 'Monoethyl malonate then hydrolysis and decarboxylation gives butanoic acid without dialkylation mixtures.'
      }
    ],
    keyTakeaways: [
      'Alpha protons with $pK_{a}$ near $20$ give resonance enolates that are carbon nucleophiles.',
      '$LDA$ at $195$ K gives kinetic enolates; equilibrating base gives substituted thermodynamic enolates.',
      'Silyl enol ethers $C=C$-$OSiMe_{3}$ freeze the chosen enolate geometry for later use.',
      'Malonate and enamine masks enforce mono $C$-alkylation where direct ketones polyalkylate.'
    ],
    quiz: [
      {
        q: 'Kinetic enolate formation needs:',
        options: ['Equilibrating $NaOEt$ at reflux', 'Bulky $LDA$ in $THF$ at $195$ K', 'Concentrated $HCl$ only', 'No base at all'],
        answer: 1,
        explanation: 'Step 1: Demand irreversible deprotonation. Step 2: Block the hindered approach with bulky base. Step 3: Freeze equilibration at low temperature.'
      },
      // PYQ-pattern: kinetic versus thermodynamic enolate choice drill
      {
        q: 'Thermodynamic enolate of 2-methylcyclohexanone is:',
        options: ['The more substituted $C_{2}$ enolate', 'The less substituted $C_{6}$ enolate', 'The $O$-protonated ketone', 'An uncharged enol only'],
        answer: 0,
        explanation: 'Step 1: Allow proton transfers to equilibrate. Step 2: Favour the more substituted $C=C$ bond. Step 3: Assign the crowded $C_{2}$ enolate as major.'
      },
      {
        q: '$CH_{3}I$ alkylation of a ketone enolate in $THF$ gives mainly:',
        options: ['$O$-alkyl enol ether', 'Aldol dimer', '$C$-alkyl ketone', 'No reaction'],
        answer: 2,
        explanation: 'Step 1: Treat enolate carbon as the soft site. Step 2: Match $S_{N}2$ halide as soft electrophile. Step 3: Form the $C$-$C$ bond to the alpha carbon.'
      },
      {
        q: 'Malonate synthesis avoids polyalkylation because:',
        options: ['It uses radical steps', 'It alkylates oxygen only', 'It needs no base', 'Acidity drops after one alkyl and decarboxylation removes the extra $COOH$'],
        answer: 3,
        explanation: 'Step 1: Start from highly acidic $CH_{2}(COOEt)_{2}$. Step 2: Slow the second deprotonation after one $R$ adds. Step 3: Hydrolyse and lose $CO_{2}$ to the monoacid.'
      }
    ]
  },
  // ---------------------------------------------------------------- 21.4
  {
    sectionId: 'chem-ch21-s4',
    readingTime: 10,
    intro: 'Enolates attacking carbonyls build $C$-$C$ bonds with simultaneous $C$-$O$ function: the aldol adds aldehyde to enolate and the Claisen acylates ester enolate with ester. Clayden stresses directed conditions with preformed enolates to beat crossed mixtures, then dehydration to enones. This section also closes rings by Dieckmann condensation.',
    objectives: [
      'Draw directed aldol addition with $LDA$ enolates versus equilibrating $NaOH$ conditions',
      'Separate crossed aldol from self condensation using one enolisable partner or slow addition',
      'Write Claisen and Dieckmann $C$-acylation with alkoxide expulsion and the final decarboxylation option'
    ],
    concepts: [
      {
        term: 'Aldol addition step',
        kind: 'definition',
        statement: 'Aldol addition joins an **enolate to an aldehyde** `aldol` $enolate + RCHO \\to RCH(OH)CH_{2}C=O$, a beta-hydroxy carbonyl that can dehydrate to $C=C$-$C=O$.',
        detail: 'Base catalysed acetone dimerisation to diacetone alcohol is the prototype reversible addition. Acid catalysed aldol passes through the enol $C=C$-$OH$ attacking protonated aldehyde instead.'
      },
      {
        term: 'Directed crossed aldol',
        kind: 'method',
        statement: 'Preformed **$LDA$ enolate plus slow aldehyde addition** `directed` suppresses self condensation because only one partner can enolise or only one enolate exists at a time.',
        detail: 'Clayden adds the aldehyde lacking alpha protons such as $PhCHO$ to a ketone $LDA$ enolate at low temperature. Reverse addition or equilibrating $NaOH$ with two enolisable aldehydes gives four products and is avoided.'
      },
      {
        term: 'Dehydration to enone',
        kind: 'theorem',
        statement: 'Heating the aldol with acid or base removes $H_{2}O$ to the conjugated **enone** `enone` $C=C$-$C=O$, driven by conjugation of $C=C$ with $C=O$.',
        detail: 'E1cB loss under base abstracts the acidic alpha proton and ejects $OH^{-}$; acid protonates $OH$ to $H_{2}O^{+}$ and loses the alpha proton. The $E$ enone dominates for steric reasons.'
      },
      {
        term: 'Claisen ester condensation',
        kind: 'law',
        statement: 'Ester enolate attacks ester to give a **beta-keto ester** `Claisen` $RCOCH_{2}COOR$ plus $RO^{-}$, an addition-elimination where alkoxide is the leaving group.',
        detail: 'Ethyl acetate with $NaOEt$ gives acetoacetate $CH_{3}COCH_{2}COOEt$ after workup. The product $pK_{a}$ near $11$ is deprotonated under the reaction, so a full equivalent of base is consumed and acid workup releases the keto ester.'
      },
      {
        term: 'Dieckmann ring closure',
        kind: 'insight',
        statement: 'Diesters with four or five atoms between carbonyls undergo intramolecular **Dieckmann cyclisation** `Dieckmann` to five or six membered beta-keto esters, hydrolysed and decarboxylated to cyclic ketones.',
        detail: 'Adipate $EtOOC(CH_{2})_{4}COOEt$ closes to a six membered ring; shorter and longer tethers fail by strain or entropy. Hydrolysis plus heat loses $CO_{2}$ through a cyclic six electron transition state.'
      }
    ],
    figures: [
      {
        caption: 'Directed aldol $enolate + RCHO$ to $\\beta$-hydroxy carbonyl then $H_{2}O$ loss to enone; Claisen $ester + ester$ to $\\beta$-keto ester with $RO^{-}$ leaving.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aldol and Claisen reaction schemes with dehydration and alkoxide loss"><rect x="40" y="120" width="150" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="115" y="148" text-anchor="middle" font-size="13" fill="currentColor">enolate + RCHO</text><text x="115" y="168" text-anchor="middle" font-size="12" fill="currentColor">LDA, low T</text><rect x="250" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="335" y="138" text-anchor="middle" font-size="13" fill="currentColor">beta-hydroxy C=O</text><text x="335" y="158" text-anchor="middle" font-size="12" fill="currentColor">aldol adduct</text><text x="335" y="176" text-anchor="middle" font-size="12" fill="currentColor">minus H2O: enone</text><rect x="480" y="120" width="180" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="570" y="148" text-anchor="middle" font-size="13" fill="currentColor">ester + ester</text><text x="570" y="168" text-anchor="middle" font-size="12" fill="currentColor">beta-keto ester + RO-</text><line x1="190" y1="155" x2="250" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="250,155 240,150 240,160" fill="currentColor"/><line x1="420" y1="155" x2="480" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="480,155 470,150 470,160" fill="currentColor"/><line x1="335" y1="200" x2="335" y2="260" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="345" y="240" font-size="12" fill="currentColor">heat, acid or base</text><text x="345" y="258" font-size="12" fill="currentColor">Dieckmann closes rings</text></svg>`,
        afterConcept: 3
      }
    ],
    derivations: [
      {
        title: 'Aldol Dehydration Drive to Conjugated Enone',
        statement: 'Derivation of dehydration $RCH(OH)CH_{2}CHO \\to RCH=CHCHO + H_{2}O$ driven by conjugation of $C=C$ with $C=O$',
        prerequisites: [
          'Reversible aldol addition to beta hydroxy carbonyl',
          'Acidic alpha proton adjacent to carbonyl $C=O$',
          'Conjugation stabilization by overlapping pi systems'
        ],
        steps: [
          {
            label: 'Step 1: Form the aldol addition product reversibly',
            formula: '$$enolate + RCHO \\to RCH(OH)CH_{2}C=O$$',
            explanation: 'Enolate carbon attacks aldehyde carbon to build a new carbon carbon bond with a beta hydroxy group. This addition is reversible because the alkoxide can collapse back to starting carbonyls. Reversibility matters since dehydration later pulls the equilibrium forward to product.'
          },
          {
            label: 'Step 2: Eliminate water by base promoted path',
            formula: '$$RCH(OH)CH_{2}C=O + OH^- \\to RCH=CHC=O + H_{2}O$$',
            explanation: 'Base abstracts the acidic alpha proton to give an enolate that ejects hydroxide in an E1cB sequence. The alpha proton is unusually acidic because its conjugate base is resonance stabilized by $C=O$. Loss of hydroxide is otherwise poor, so prior deprotonation is what makes it feasible.'
          },
          {
            label: 'Step 3: Eliminate water by acid promoted path',
            formula: '$$RCH(OH)CH_{2}C=O + H^+ \\to RCH=CHC=O + H_{2}O + H^+$$',
            explanation: 'Acid protonates the hydroxy group to $H_{2}O^+$ which departs as neutral water $H_{2}O$ after alpha deprotonation. Converting hydroxide into water transforms a poor leaving group into an excellent one. Both acid and base routes converge on the same enone because conjugation rewards either path.'
          },
          {
            label: 'Step 4: Recognize conjugation and geometry selection',
            formula: '$$RCH(OH)CH_{2}C=O \\to E\\text{-}RCH=CHC=O + H_{2}O$$',
            explanation: 'The new double bond conjugates with carbonyl pi density, delocalizing electrons over four atoms and lowering energy substantially. This extra stabilization supplies the driving force that addition alone lacks. The $E$ isomer dominates because bulky $R$ groups avoid each other across the double bond.'
          }
        ],
        result: 'Aldol $RCH(OH)CH_{2}CHO \\to RCH=CHCHO + H_{2}O$ dehydrates on heating because conjugated enone $C=C$ with $C=O$ lies well below the hydroxy adduct.'
      }
    ],
    examples: [
      {
        title: 'Directed aldol of cyclohexanone with benzaldehyde',
        problem: 'Cyclohexanone $LDA$ enolate at $195$ K is treated with benzaldehyde $PhCHO$ then warmed. Give the aldol adduct and the dehydration product.',
        steps: [
          { label: 'Step 1', text: 'Form kinetic enolate with $LDA$ in $THF$ at $195$ K; $PhCHO$ has no alpha protons so it cannot self condense:\n```text\nenolate = cyclohexanone minus C2-H\nacceptor = PhCHO, electrophile only\naddition = C-C bond to benzylic carbon\n```\nOne nucleophile plus one pure electrophile.' },
          { label: 'Step 2', text: 'Add $C$-$C$ bond to give $2$-(hydroxy(phenyl)methyl)cyclohexanone $PhCH(OH)CH(C_{5}H_{9}O)$ as the beta-hydroxy ketone.' },
          { label: 'Step 3', text: 'Dehydrate with $NaOH$ and heat to benzylidene cyclohexanone $PhCH=C(C_{5}H_{8}O)$, mainly the $E$ isomer by conjugation.' }
        ],
        result: 'Crossed aldol adduct then $E$-benzylidene product; no cyclohexanone self dimer because the enolate was preformed.'
      },
      {
        title: 'Dieckmann closure to a six membered keto ester',
        problem: 'Diethyl adipate $EtOOC(CH_{2})_{4}COOEt$ with $NaOEt$ in ethanol gives a cyclic beta-keto ester. Draw the ring and show conversion to cyclohexanone.',
        steps: [
          { label: 'Step 1', text: 'Deprotonate one ester alpha position to $EtOOC(CH_{2})_{3}CH^{-}COOEt$ with $NaOEt$.' },
          { label: 'Step 2', text: 'Close intramolecularly onto the far ester, expelling $EtO^{-}$ to ethyl $2$-oxocyclohexane carboxylate.' },
          { label: 'Step 3', text: 'Hydrolyse and heat: beta-keto acid loses $CO_{2}$ to cyclohexanone, the classic ring synthesis.' }
        ],
        result: 'Six membered beta-keto ester, then hydrolysis and decarboxylation to cyclohexanone.'
      }
    ],
    keyTakeaways: [
      'Aldol addition $enolate + RCHO$ gives $\\beta$-hydroxy carbonyls that dehydrate to enones.',
      'Preformed $LDA$ enolates plus non-enolisable aldehydes enforce crossed aldol control.',
      'Claisen $ester + ester$ gives $\\beta$-keto esters $RCOCH_{2}COOR$ with $RO^{-}$ loss.',
      'Dieckmann closes five and six membered rings, decarboxylated to cyclic ketones.'
    ],
    quiz: [
      {
        q: 'Directed crossed aldol succeeds when:',
        options: ['One partner is preformed as $LDA$ enolate and the other lacks alpha protons', 'Both aldehydes enolise equally under $NaOH$', 'No base is used', 'Both partners are ketones with no electrophile'],
        answer: 0,
        explanation: 'Step 1: Allow only one enolate in solution. Step 2: Offer one pure carbonyl acceptor. Step 3: Add slowly at low temperature to block self paths.'
      },
      // PYQ-pattern: Claisen versus aldol leaving group drill
      {
        q: 'Claisen differs from aldol because Claisen:',
        options: ['Forms no $C$-$C$ bond', 'Cannot use ester enolates', 'Expels $RO^{-}$ from a tetrahedral intermediate to give a $1,3$-dicarbonyl', 'Needs only acid with no base'],
        answer: 2,
        explanation: 'Step 1: Add ester enolate to ester $C=O$. Step 2: Reform $C=O$ by ejecting alkoxide. Step 3: Isolate $\\beta$-keto ester after acidic workup.'
      },
      {
        q: 'Aldol dehydration to enone is driven by:',
        options: ['Loss of conjugation', 'Formation of conjugated $C=C$-$C=O$', 'Oxidation of the alcohol', 'Ring strain increase'],
        answer: 1,
        explanation: 'Step 1: Align $C$-$H$ and $C$-$OH$ for elimination. Step 2: Lose $H_{2}O$ by E1cB or acid path. Step 3: Gain $C=C$ conjugation with $C=O$.'
      },
      {
        q: 'Dieckmann works best for:',
        options: ['Three membered rings from malonate dimers', 'Ten membered rings always', 'Acyclic products only', 'Five and six membered beta-keto esters from $1,6$ and $1,7$ diesters'],
        answer: 3,
        explanation: 'Step 1: Count atoms between ester carbonyls. Step 2: Close strain-free five and six rings. Step 3: Reject strained small and entropy-poor large closures.'
      }
    ]
  }
]
