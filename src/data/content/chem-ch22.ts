import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 22: Conjugation, Aromaticity and Pericyclic Reactions (Clayden 2e foci 21, 22, 34, 35)
// Sections 22.1 - 22.4. Master study content in Clayden language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh22Content: SectionContent[] = [
  // ---------------------------------------------------------------- 22.1
  {
    sectionId: 'chem-ch22-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Wheland intermediates and directing effects in substitution',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Activators direct ortho para and deactivators direct meta',
            body: 'The **directing theorem** states that electron donating groups stabilize the sigma complex at ortho and para attack through extra resonance contributors, while electron withdrawing groups leave meta attack least destabilized. Halogens deactivate by induction yet direct ortho para by lone pair donation, the classic exception that proves resonance controls position while induction controls rate. Friedel Crafts planning obeys the same map, with rearrangement guards for primary carbocations that would otherwise scramble the skeleton.'
          },
          {
            kind: 'derivation',
            heading: 'Sigma complex resonance decides rate and position',
            body: 'Draw attack at each ring carbon and count resonance forms that place positive charge adjacent to the substituent versus away from it. Donors contribute a form with octet complete stabilization only for ortho and para paths, lowering the transition state by delocalization that meta attack cannot access. The energy gap appears in the rate ratio through $\\log(k/k_0) = \\rho\\sigma$ style reasoning adapted to electrophilic substitution, connecting Clayden arrow pushing to measurable partial rate factors.'
          },
          {
            kind: 'application',
            heading: 'Nitration sulfonation and acylation in manufacture',
            body: 'Dye and pharmaceutical routes nitrate then reduce to anilines, sulfonate for water solubility, and acylate under Friedel Crafts control with Lewis acid catalysis. Each step orders itself by the directing map so that the second substituent lands where the first commands, and blocking groups temporarily occupy favored sites when the desired isomer is minor. Modern zeolite catalysis sharpens para selectivity in commodity alkylation by letting pore size veto bulky ortho transition states.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Clayden treats benzene as a stable enol-like nucleophile that attacks electrophiles and then loses a proton to restore aromaticity. The high energy sigma complex, also called the Wheland intermediate, decides rate and position. This section builds the full electrophilic aromatic substitution map with activators, deactivators and directing rules.',
    objectives: [
      'Draw the sigma complex for attack at each ring position with resonance and charge delocalisation',
      'Rank activators and deactivators and predict ortho, para versus meta direction',
      'Plan nitration, sulfonation, halogenation and Friedel-Crafts steps with rearrangement guards'
    ],
    concepts: [
      {
        term: 'Sigma complex intermediate',
        kind: 'definition',
        statement: 'Electrophilic attack gives a **sigma complex** `sigma` $C_{6}H_{6}E^{+}$ where one carbon is $sp^{3}$ and positive charge delocalises over the remaining five atoms before $H^{+}$ loss restores $C_{6}H_{5}E$.',
        detail: 'Loss of aromaticity makes this step uphill and rate determining. Deprotonation at the $sp^{3}$ carbon is fast and downhill because the $36$ kcal per mol aromatic stabilisation returns.'
      },
      {
        term: 'Activators donate into the ring',
        kind: 'law',
        statement: '**Activators** `activator` such as $OH$, $OR$, $NH_{2}$ and alkyl push electrons by resonance or hyperconjugation, lowering the sigma complex energy for ortho and para attack.',
        detail: 'Phenol brominates without Lewis acid while benzene needs $FeBr_{3}$. The lone pair on $OH$ stabilises positive charge placed ortho and para to itself, never meta.'
      },
      {
        term: 'Deactivators withdraw and direct meta',
        kind: 'law',
        statement: '**Deactivators** `deactivator` such as $NO_{2}$, $CN$, $CHO$ and $NR_{3}^{+}$ pull electrons away, raising ortho and para sigma complexes more than meta, so meta substitution wins.',
        detail: 'Nitrobenzene nitrates a hundred thousand times slower than benzene and gives meta dinitrobenzene. Carbonyl deactivators place positive charge adjacent to electron poor carbon in ortho and para paths, which is penalised.'
      },
      {
        term: 'Halogen substituent paradox',
        kind: 'theorem',
        statement: '**Halogens deactivate yet direct ortho and para** `halogen` because inductive withdrawal slows attack while lone pair donation still stabilises ortho and para sigma complexes.',
        detail: 'Chlorobenzene nitrates slower than benzene but gives ortho and para nitrochlorobenzene. Resonance donation matters in the charged intermediate even though induction dominates the neutral ground state.'
      },
      {
        term: 'Friedel-Crafts limits',
        kind: 'insight',
        statement: '**Friedel-Crafts alkylation** `Friedel-Crafts` with $RCl$ and $AlCl_{3}$ fails on deactivated rings and rearranges carbocations, while acylation with $RCOCl$ gives clean ketones for later reduction.',
        detail: 'Primary $R^{+}$ rearranges by hydride shift before ring capture, and product alkylbenzene is more active than benzene so polyalkylation follows. Acylium $RCO^{+}$ does not rearrange and deactivates the product against a second acylation.'
      }
    ],
    figures: [
      {
        caption: 'Sigma complexes for attack ortho, meta and para to donor $OH$: ortho and para place charge on the donor-bearing carbon and are stabilised.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sigma complex resonance scheme for ortho meta and para attack"><rect x="40" y="120" width="180" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="150" text-anchor="middle" font-size="13" fill="currentColor">benzene + E+</text><text x="130" y="170" text-anchor="middle" font-size="12" fill="currentColor">to sigma complex</text><rect x="270" y="80" width="170" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="105" text-anchor="middle" font-size="13" fill="currentColor">ortho: stabilised</text><text x="355" y="125" text-anchor="middle" font-size="12" fill="currentColor">charge on C-OH</text><rect x="270" y="170" width="170" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="355" y="195" text-anchor="middle" font-size="13" fill="currentColor">meta: not stabilised</text><text x="355" y="215" text-anchor="middle" font-size="12" fill="currentColor">charge avoids C-OH</text><rect x="490" y="120" width="180" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="580" y="150" text-anchor="middle" font-size="13" fill="currentColor">para: stabilised</text><text x="580" y="170" text-anchor="middle" font-size="12" fill="currentColor">lose H+ to product</text><line x1="220" y1="150" x2="270" y2="115" stroke="currentColor" stroke-width="2.5"/><polygon points="270,115 260,113 262,123" fill="currentColor"/><line x1="220" y1="165" x2="270" y2="205" stroke="currentColor" stroke-width="2"/><polygon points="270,205 260,203 262,213" fill="currentColor"/><line x1="440" y1="115" x2="490" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="490,150 480,148 482,158" fill="currentColor"/><line x1="440" y1="205" x2="490" y2="170" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="360" y="290" text-anchor="middle" font-size="13" fill="currentColor">donor stabilises ortho and para paths only</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Nitration regiochemistry of anisole and nitrobenzene',
        problem: 'Predict the major nitration products of methoxybenzene $PhOCH_{3}$ and nitrobenzene $PhNO_{2}$ with $HNO_{3}$ and $H_{2}SO_{4}$, with sigma complex reasoning.',
        steps: [
          { label: 'Step 1', text: 'Generate $NO_{2}^{+}$ from $HNO_{3} + 2H_{2}SO_{4}$ and draw three sigma complexes for each substrate:\n```text\nPhOMe: ortho and para place + on C-OMe, O lone pair stabilises\nPhNO2: ortho and para place + next to C-NO2, strongly destabilised\n```\nCharge placement relative to the substituent decides.' },
          { label: 'Step 2', text: 'Assign $PhOCH_{3}$ to ortho and para nitroanisole, fast even at low temperature; assign $PhNO_{2}$ to meta dinitrobenzene, slow and needing heat.' },
          { label: 'Step 3', text: 'Confirm by rate: anisole reacts far faster than benzene while nitrobenzene reacts far slower, matching activator and deactivator labels.' }
        ],
        result: 'Anisole gives ortho and para nitro products rapidly; nitrobenzene gives meta dinitrobenzene slowly.'
      },
      {
        title: 'Friedel-Crafts acylation without rearrangement',
        problem: 'Prepare propylbenzene $PhCH_{2}CH_{2}CH_{3}$ from benzene. Explain why direct propylation with $CH_{3}CH_{2}CH_{2}Cl$ and $AlCl_{3}$ fails and give the acylation route.',
        steps: [
          { label: 'Step 1', text: 'Direct path makes $CH_{3}CH_{2}CH_{2}^{+}$ which shifts by hydride to $CH_{3}CH^{+}CH_{3}$, giving isopropylbenzene plus polyalkylation.' },
          { label: 'Step 2', text: 'Acylate with $CH_{3}CH_{2}COCl$ and $AlCl_{3}$ through stable $CH_{3}CH_{2}CO^{+}$ to propiophenone $PhCOCH_{2}CH_{3}$ with no shift.' },
          { label: 'Step 3', text: 'Reduce $C=O$ by Clemmensen $Zn$ and $HCl$ or Wolff-Kishner to $PhCH_{2}CH_{2}CH_{3}$ cleanly.' }
        ],
        result: 'Acylation then carbonyl reduction gives straight chain propylbenzene; direct alkylation gives branched and multiple products.'
      }
    ],
    keyTakeaways: [
      'Substitution passes through a sigma complex $C_{6}H_{6}E^{+}$ that loses $H^{+}$ to restore aromaticity.',
      'Donors $OH$ and $NH_{2}$ activate ortho and para; withdrawers $NO_{2}$ and $CN$ deactivate to meta.',
      'Halogens deactivate by induction yet direct ortho and para by resonance.',
      'Acylation with $RCOCl$ avoids the rearrangement and polyalkylation of alkylation.'
    ],
    quiz: [
      {
        q: 'Rate determining step in nitration is:',
        options: ['Loss of $H^{+}$ from the sigma complex', 'Formation of the sigma complex $C_{6}H_{6}NO_{2}^{+}$', 'Generation of $H_{2}O$', 'Crystallisation of product'],
        answer: 1,
        explanation: 'Step 1: Break aromaticity to reach the charged intermediate. Step 2: Climb the highest barrier there. Step 3: Lose $H^{+}$ downhill afterwards.'
      },
      // PYQ-pattern: directing effect prediction drill
      {
        q: '$PhNMe_{3}^{+}$ nitrates mainly:',
        options: ['Ortho and para', 'Equally at all positions', 'At the substituent itself', 'Meta'],
        answer: 3,
        explanation: 'Step 1: Mark $NMe_{3}^{+}$ as a strong withdrawer. Step 2: Penalise ortho and para sigma complexes. Step 3: Select meta as the least destabilised path.'
      },
      {
        q: 'Phenol brominates rapidly without $FeBr_{3}$ because:',
        options: ['$OH$ activates the sigma complex by resonance', '$OH$ oxidises bromine', '$OH$ blocks meta sterically', 'Phenol lacks aromaticity'],
        answer: 0,
        explanation: 'Step 1: Place positive charge ortho and para to $OH$. Step 2: Donate the oxygen lone pair into that charge. Step 3: Drop the barrier below the catalysed benzene path.'
      },
      {
        q: 'Best route to $PhCH_{2}CH_{2}CH_{3}$ from benzene is:',
        options: ['Direct $n$-propyl chloride and $AlCl_{3}$', 'Sulfonation then propylation', 'Acylation with $CH_{3}CH_{2}COCl$ then $C=O$ reduction', 'Nitration then propylation'],
        answer: 2,
        explanation: 'Step 1: Reject primary carbocation routes by hydride shift. Step 2: Use shift-free $RCO^{+}$ acylation. Step 3: Reduce the ketone to the straight alkyl chain.'
      }
    ]
  },
  // ---------------------------------------------------------------- 22.2
  {
    sectionId: 'chem-ch22-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Conjugate addition and aryne logic from orbital coefficients',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Hard soft choice between direct and conjugate attack',
            body: 'Compare frontier coefficients at carbonyl carbon versus beta carbon: hard nucleophiles attack the carbonyl carbon with large charge control giving $1,2$ addition, while soft nucleophiles attack the beta carbon with large orbital control giving $1,4$ addition. Copper reagents deliver conjugate methyl transfer to enones while hydride reagents favor direct reduction, and the same orbital map explains why Lewis acid coordination hardens the carbonyl and flips marginal cases. Solvent and counterion tune hardness in situ, so the textbook table becomes a continuum in the laboratory.'
          },
          {
            kind: 'theorem',
            heading: 'Meisenheimer stabilization needs ortho para nitro groups',
            body: 'The **Meisenheimer theorem** states that nucleophilic aromatic substitution proceeds through a stabilized anionic complex only when strong withdrawing groups sit ortho or para to the leaving group. The negative charge delocalizes into nitro oxygens in those positions but not from meta attack, so rate gaps of many orders separate activated from unactivated aryl halides. Unactivated substrates instead eliminate to benzyne, whose triple bond accepts nucleophiles at either end with regiochemistry set by distortion and substituent induction.'
          },
          {
            kind: 'example',
            heading: 'Choosing Michael versus direct addition for an enone',
            body: 'Treat cyclohexenone with a copper reagent to obtain the $1,4$ methyl adduct after workup, with the new stereocenter set by axial protonation of the enolate. Switch to hydride to obtain the allylic alcohol from $1,2$ attack, then use the divergent products for different retrosynthetic branches. The graduate decision is orbital based rather than memorized: match softness to the beta coefficient for conjugate paths and hardness to carbonyl charge for direct paths.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Conjugation makes alkenes electrophilic at the far end: nucleophiles add to the beta carbon of enones in conjugate addition. The same electron poor rings that resist electrophiles welcome nucleophiles through Meisenheimer complexes. This section unites Michael addition, nucleophilic aromatic substitution and the benzyne path.',
    objectives: [
      'Choose direct $1,2$ addition versus conjugate $1,4$ addition to enones by reagent hardness',
      'Draw Meisenheimer complexes for activated $S_{N}Ar$ with ortho and para nitro groups',
      'Map benzyne formation and nucleophilic capture for unactivated aryl halides'
    ],
    concepts: [
      {
        term: 'Conjugate addition to enones',
        kind: 'definition',
        statement: 'Soft nucleophiles attack the **beta carbon** `conjugate` of $C=C$-$C=O$ to give an enolate that protonates to the saturated carbonyl, the $1,4$ or Michael addition.',
        detail: 'Cuprates $R_{2}CuLi$ and malonate anions add $1,4$ while hard $RMgX$ and $RLi$ add $1,2$ to $C=O$. Protonation of the intermediate enolate at carbon completes the Clayden Chapter 22 pattern.'
      },
      {
        term: 'Michael acceptors and donors',
        kind: 'method',
        statement: 'Enones, enoates and nitroalkenes act as **Michael acceptors** `Michael` $CH_{2}=CH$-$EWG$ toward stabilised **donors** `donor` such as malonate $CH(COOR)_{2}^{-}$ under weak base.',
        detail: 'Diethyl malonate plus methyl vinyl ketone with $NaOEt$ gives the $1,5$-dicarbonyl cleanly. The donor $pK_{a}$ near $13$ allows full formation with alkoxide without touching the acceptor alpha protons.'
      },
      {
        term: 'Nucleophilic aromatic substitution',
        kind: 'theorem',
        statement: '**$S_{N}Ar$** `SNAr` displaces halide ortho or para to $NO_{2}$ through a delocalised **Meisenheimer complex** `Meisenheimer` $C_{6}H_{5}(Nu)(X)(NO_{2})^{-}$ stabilised by nitro resonance.',
        detail: '2,4-dinitrofluorobenzene reacts with $MeO^{-}$ at room temperature while chlorobenzene is inert. Fluoride leaves fastest in $S_{N}Ar$ because $C$-$F$ polarisation stabilises the addition step, reversing the $S_{N}1$ order.'
      },
      {
        term: 'Leaving group and activation needs',
        kind: 'law',
        statement: '**Ortho and para nitro groups** `activation` are required to host Meisenheimer negative charge; meta nitro cannot conjugate and gives no $S_{N}Ar$ rate gain.',
        detail: 'One nitro group allows substitution with heating; two allow room temperature Sanger chemistry. Picryl chloride $2,4,6$-trinitrochlorobenzene hydrolyses in water alone.'
      },
      {
        term: 'Benzyne for unactivated halides',
        kind: 'insight',
        statement: 'Strong base $NaNH_{2}$ removes ortho $H$ to give **benzyne** `benzyne` $C_{6}H_{4}$ triple bond, which $Nu^{-}$ attacks at either end to give cine and normal anilines.',
        detail: 'Chlorobenzene with $NaNH_{2}$ in liquid ammonia gives aniline through the symmetric triple bond. Labelled $^{14}C$ studies and mixed ortho and meta products prove the symmetrical intermediate.'
      }
    ],
    figures: [
      {
        caption: 'Direct $1,2$ attack at $C=O$ versus conjugate $1,4$ attack at $C_{\\beta}$ of an enone; $S_{N}Ar$ via the Meisenheimer complex versus benzyne from unactivated $PhX$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conjugate addition and nucleophilic aromatic substitution map"><rect x="40" y="120" width="160" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="120" y="150" text-anchor="middle" font-size="13" fill="currentColor">C=C-C=O enone</text><text x="120" y="170" text-anchor="middle" font-size="12" fill="currentColor">1,2 vs 1,4 choice</text><rect x="250" y="80" width="170" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="335" y="105" text-anchor="middle" font-size="13" fill="currentColor">1,2: RMgX to C=O</text><text x="335" y="125" text-anchor="middle" font-size="12" fill="currentColor">hard nucleophile</text><rect x="250" y="210" width="170" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="335" y="235" text-anchor="middle" font-size="13" fill="currentColor">1,4: R2CuLi to C-beta</text><text x="335" y="255" text-anchor="middle" font-size="12" fill="currentColor">Michael donor</text><rect x="480" y="120" width="180" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="570" y="148" text-anchor="middle" font-size="13" fill="currentColor">SNAr Meisenheimer</text><text x="570" y="168" text-anchor="middle" font-size="12" fill="currentColor">or benzyne path</text><line x1="200" y1="145" x2="250" y2="110" stroke="currentColor" stroke-width="2.5"/><polygon points="250,110 240,108 242,118" fill="currentColor"/><line x1="200" y1="165" x2="250" y2="245" stroke="currentColor" stroke-width="2.5"/><polygon points="250,245 240,243 242,253" fill="currentColor"/><line x1="420" y1="115" x2="480" y2="150" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><line x1="420" y1="245" x2="480" y2="170" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Cuprate versus Grignard on an enone',
        problem: 'Methyl vinyl ketone $CH_{2}=CHCOCH_{3}$ is treated with $Me_{2}CuLi$ and separately with $MeMgBr$. Give the $1,2$ versus $1,4$ products after workup.',
        steps: [
          { label: 'Step 1', text: 'Label sites: carbonyl carbon is hard and $C_{\\beta}$ is soft by conjugation:\n```text\n1,2: MeMgBr to C=O -> allylic alcohol\n1,4: Me2CuLi to C-beta -> enolate -> ketone\nworkup: protonate O- or enolate C\n```\nHard and soft matching predicts the branch.' },
          { label: 'Step 2', text: '$MeMgBr$ gives $CH_{2}=CHC(OH)(CH_{3})_{2}$ direct adduct; $Me_{2}CuLi$ gives enolate $CH_{3}CH^{-}C(O^{-})CH_{3}$ style intermediate.' },
          { label: 'Step 3', text: 'Protonate the cuprate enolate at carbon to $CH_{3}CH_{2}COCH_{3}$ extended by one methyl at beta carbon.' }
        ],
        result: 'Hard $MeMgBr$ gives the $1,2$ allylic alcohol; soft $Me_{2}CuLi$ gives the $1,4$ saturated methyl ketone.'
      },
      {
        title: 'Sanger substitution versus benzyne amination',
        problem: '2,4-dinitrofluorobenzene reacts with methoxide at room temperature while chlorobenzene needs $NaNH_{2}$ and heat to give aniline. Draw both mechanisms.',
        steps: [
          { label: 'Step 1', text: 'Activated case adds $MeO^{-}$ to $C$-$F$ forming Meisenheimer anion delocalised into two ortho and para $NO_{2}$ groups, then $F^{-}$ leaves.' },
          { label: 'Step 2', text: 'Unactivated $PhCl$ has no nitro stabilisation, so $NH_{2}^{-}$ removes ortho $H$ to benzyne $C_{6}H_{4}$.' },
          { label: 'Step 3', text: 'Amide attacks benzyne triple bond and protonation gives aniline $PhNH_{2}$, with cine isomer when the halide is substituted.' }
        ],
        result: 'Sanger $S_{N}Ar$ via Meisenheimer complex for dinitro fluoride; benzyne elimination-addition for plain chlorobenzene.'
      }
    ],
    keyTakeaways: [
      'Hard $RMgX$ adds $1,2$ to $C=O$; soft $R_{2}CuLi$ and enolates add $1,4$ to $C_{\\beta}$.',
      'Michael donors $CH(COOR)_{2}^{-}$ add to $CH_{2}=CH$-$EWG$ under weak base.',
      '$S_{N}Ar$ needs ortho or para $NO_{2}$ to stabilise the Meisenheimer anion.',
      'Unactivated $PhX$ aminates through benzyne $C_{6}H_{4}$ with $NaNH_{2}$.'
    ],
    quiz: [
      {
        q: 'Malonate plus methyl vinyl ketone with $NaOEt$ gives:',
        options: ['Direct $1,2$ alcohol', 'Michael $1,4$ adduct $1,5$-dicarbonyl', 'Aldol enone', 'No reaction'],
        answer: 1,
        explanation: 'Step 1: Form stabilised $CH(COOEt)_{2}^{-}$. Step 2: Attack soft $C_{\\beta}$ of the enone. Step 3: Protonate the enolate to the saturated $1,5$-dicarbonyl.'
      },
      // PYQ-pattern: SNAr activation and fluoride order drill
      {
        q: 'Fastest $S_{N}Ar$ substrate with $MeO^{-}$ is:',
        options: ['Chlorobenzene', 'Meta-nitrochlorobenzene', 'Para-nitrofluorobenzene', 'Methoxybenzene'],
        answer: 2,
        explanation: 'Step 1: Demand nitro conjugation with the anionic complex. Step 2: Allow para placement for delocalisation. Step 3: Pick fluoride as the best $S_{N}Ar$ leaving group.'
      },
      {
        q: 'Benzyne evidence includes:',
        options: ['Cine substitution and symmetric trapping products', 'Retention of all substituent positions', 'No isotope scrambling', 'Only para products'],
        answer: 0,
        explanation: 'Step 1: Form symmetric $C_{6}H_{4}$ triple bond. Step 2: Attack either end with $Nu^{-}$. Step 3: Isolate both normal and cine anilines.'
      },
      {
        q: 'Cuprates favour $1,4$ addition because they are:',
        options: ['Hard oxygen seekers', 'Strong bases only', 'Radical initiators', 'Soft carbon seekers matching $C_{\\beta}$'],
        answer: 3,
        explanation: 'Step 1: Treat $C_{\\beta}$ as the soft end of the conjugated $LUMO$. Step 2: Match soft $R_{2}CuLi$ carbon to that lobe. Step 3: Form the enolate rather than the alkoxide.'
      }
    ]
  },
  // ---------------------------------------------------------------- 22.3
  {
    sectionId: 'chem-ch22-s3',
    readingTime: 10,
    intro: 'Pericyclic reactions move electrons in a ring with no ionic intermediate, so stereochemistry is set by orbital overlap. The Diels-Alder cycloaddition between diene and dienophile is the centrepiece: four plus two atoms, one step, up to four stereocentres. This section applies HOMO-LUMO matching, the endo rule and regioselectivity exactly as Clayden Chapter 34 teaches them.',
    objectives: [
      'Draw Diels-Alder transition states with suprafacial overlap and retained alkene geometry',
      'Apply the endo rule with secondary orbital overlap to predict substituent placement',
      'Match electron rich dienes with electron poor dienophiles for rate and regiochemistry'
    ],
    concepts: [
      {
        term: 'Suprafacial concerted cycloaddition',
        kind: 'definition',
        statement: 'The **Diels-Alder reaction** `Diels-Alder` $diene + C=C$-$EWG \\to cyclohexene$ forms two $C$-$C$ bonds together on the same face of each partner, retaining all alkene geometry.',
        detail: 'Cis dienophile stays cis in the adduct; trans stays trans. No intermediate can rotate, so the reaction is stereospecific and not merely stereoselective.'
      },
      {
        term: 'Normal electron demand HOMO-LUMO gap',
        kind: 'law',
        statement: 'Rate is fastest for a small **$HOMO_{diene}$ to $LUMO_{dienophile}$ gap** `HOMO-LUMO`, so electron donating groups on diene plus withdrawing $CHO$ or $COOR$ on dienophile accelerate.',
        detail: 'Lewis acids such as $AlCl_{3}$ lower the dienophile $LUMO$ further and speed the reaction dramatically. Inverse demand swaps the roles with electron poor dienes and rich dienophiles.'
      },
      {
        term: 'Endo rule by secondary overlap',
        kind: 'theorem',
        statement: 'Substituents on the dienophile point **endo under the diene** `endo` in the transition state through secondary overlap of $EWG$ $\\pi^{*}$ with the diene $HOMO$ back lobes.',
        detail: 'Maleic anhydride plus cyclopentadiene gives the endo anhydride bridge tucked under the new six ring. Exo product forms on heating by equilibration when the adduct can reverse.'
      },
      {
        term: 'Regioselectivity by coefficient matching',
        kind: 'method',
        statement: '**Ortho and para relationships** `regioselectivity` dominate: the diene terminus with the largest $HOMO$ lobe bonds to the dienophile end with the largest $LUMO$ lobe.',
        detail: '1-methoxybutadiene plus acrolein $CH_{2}=CHCHO$ puts $OMe$ ortho to $CHO$ in the cyclohexene. The rule reads like polar matching of partial charges in Clayden arrow schemes.'
      },
      {
        term: 'Diene conformation requirement',
        kind: 'insight',
        statement: 'Only the **s-cis diene conformer** `s-cis` can cycloadd; locked transoid dienes are inert and bulky termini slow the required rotation into planarity.',
        detail: 'Cyclopentadiene is permanently s-cis and reacts explosively; open butadiene reacts through its minor s-cis population. Furan and cyclopentadiene also bridge to oxa and norbornene adducts.'
      }
    ],
    figures: [
      {
        caption: 'Diels-Alder $4+2$ overlap: diene $HOMO$ to dienophile $LUMO$, endo $EWG$ tucked under the diene, and ortho regiochemistry from large to large lobes.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diels-Alder endo transition state with orbital matching"><line x1="60" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="2"/><text x="360" y="330" text-anchor="middle" font-size="14" fill="currentColor">diene plus dienophile to cyclohexene</text><rect x="80" y="120" width="150" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="155" y="148" text-anchor="middle" font-size="13" fill="currentColor">s-cis diene</text><text x="155" y="168" text-anchor="middle" font-size="12" fill="currentColor">HOMO lobes up</text><rect x="280" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="365" y="138" text-anchor="middle" font-size="13" fill="currentColor">endo TS: EWG under</text><text x="365" y="158" text-anchor="middle" font-size="12" fill="currentColor">secondary overlap</text><text x="365" y="176" text-anchor="middle" font-size="12" fill="currentColor">two bonds together</text><rect x="500" y="120" width="150" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="575" y="148" text-anchor="middle" font-size="13" fill="currentColor">cyclohexene</text><text x="575" y="168" text-anchor="middle" font-size="12" fill="currentColor">cis retained</text><line x1="230" y1="155" x2="280" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="280,155 270,150 270,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><circle cx="365" cy="70" r="6" fill="currentColor"/><text x="380" y="74" font-size="12" fill="currentColor">EWG endo</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Endo adduct of cyclopentadiene and maleic anhydride',
        problem: 'Cyclopentadiene plus maleic anhydride $cis$-$(CO)_{2}O$ gives a norbornene adduct. Draw the endo product and state the stereochemical proof.',
        steps: [
          { label: 'Step 1', text: 'Lock diene s-cis in the five ring and align anhydride $C=C$ under it:\n```text\nsuprafacial + suprafacial: two bonds together\nendo: anhydride bridge under diene pi system\ncis dienophile -> cis bridge fusion\n```\nSecondary overlap picks the folded path.' },
          { label: 'Step 2', text: 'Form endo anhydride where the $O(CO)_{2}$ bridge sits syn to the new double bond, the kinetic product.' },
          { label: 'Step 3', text: 'Confirm cis fusion is retained and $NOE$ shows bridge protons near the alkene, the classic endo assignment.' }
        ],
        result: 'Kinetic endo norbornene anhydride with cis bridge fusion; exo isomer grows only on reversible heating.'
      },
      {
        title: 'Regiochemistry of methoxybutadiene and acrolein',
        problem: '1-methoxybutadiene $MeO$-$CH=CH$-$CH=CH_{2}$ plus acrolein $CH_{2}=CHCHO$ under $AlCl_{3}$ gives mainly one substituted cyclohexene. Predict it.',
        steps: [
          { label: 'Step 1', text: 'Mark largest $HOMO$ at diene $C_{4}$ bearing $OMe$ influence and largest $LUMO$ at acrolein $C_{\\beta}$ far from $CHO$.' },
          { label: 'Step 2', text: 'Bond large to large: $OMe$ end ortho to $CHO$ in the cyclohexene, the ortho rule.' },
          { label: 'Step 3', text: 'Add $AlCl_{3}$ lowering of $LUMO$ to explain the fast low temperature rate and endo $CHO$ placement.' }
        ],
        result: 'Ortho $MeO$ to $CHO$ cyclohexene carboxaldehyde as the major regioisomer with endo $CHO$.'
      }
    ],
    keyTakeaways: [
      'Diels-Alder $diene + C=C$-$EWG$ is concerted suprafacial and retains alkene geometry.',
      'Small $HOMO_{diene}$ to $LUMO_{dienophile}$ gap with Lewis acids gives fast normal demand.',
      'Endo $EWG$ under diene wins by secondary overlap; exo grows on equilibration.',
      'Large to large lobe matching gives ortho and para regiochemistry.'
    ],
    quiz: [
      {
        q: 'Diels-Alder with cis dienophile gives:',
        options: ['Trans fused adduct', 'Ring opened diene', 'Cis fused adduct with retained geometry', 'Aromatic product directly'],
        answer: 2,
        explanation: 'Step 1: Demand suprafacial bonds on both partners. Step 2: Forbid rotation in a concerted step. Step 3: Transfer cis to cis in the cyclohexene.'
      },
      // PYQ-pattern: endo versus exo assignment drill
      {
        q: 'Endo preference arises from:',
        options: ['Steric blocking of exo', 'Secondary overlap of $EWG$ $\\pi^{*}$ with diene $HOMO$', 'Solvent polarity only', 'Radical initiation'],
        answer: 1,
        explanation: 'Step 1: Stack $EWG$ under the diene back lobes. Step 2: Gain extra $HOMO$ to $LUMO$ contact. Step 3: Lower the endo transition state below exo.'
      },
      {
        q: 'Fastest normal demand pair is:',
        options: ['Rich diene plus poor dienophile with Lewis acid', 'Electron poor diene plus rich dienophile', 'Two unsubstituted alkenes', 'Two electron poor partners'],
        answer: 0,
        explanation: 'Step 1: Raise diene $HOMO$ with donors. Step 2: Lower dienophile $LUMO$ with $EWG$ and acid. Step 3: Shrink the gap for maximum stabilisation.'
      },
      {
        q: 'Open butadiene must react through:',
        options: ['s-trans conformer', 'Twisted orthogonal form', 'Dimer first', 's-cis conformer'],
        answer: 3,
        explanation: 'Step 1: Bring both termini to the same face of the dienophile. Step 2: Rotate into planar s-cis geometry. Step 3: Close two bonds together to the six ring.'
      }
    ]
  },
  // ---------------------------------------------------------------- 22.4
  {
    sectionId: 'chem-ch22-s4',
    readingTime: 10,
    intro: 'The remaining pericyclic families move sigma bonds around pi systems without reagents: sigmatropic shifts migrate atoms along pi frames and electrocyclisations close and open rings. Clayden reduces both to orbital symmetry: suprafacial shifts and conrotatory versus disrotatory closures. This section maps Cope, Claisen and hexatriene chemistry.',
    objectives: [
      'Classify Cope and Claisen as $3,3$ shifts with chair transition states',
      'Predict conrotatory versus disrotatory closure from electron count and heat versus light',
      'Use oxy-Cope and Johnson-Claisen variants to build $1,5$-dicarbonyls and esters'
    ],
    concepts: [
      {
        term: 'Cope rearrangement frame',
        kind: 'definition',
        statement: 'A **$3,3$-sigmatropic Cope shift** `Cope` $C$-$C$-$C=C$-$C=C$ to $C=C$-$C$-$C$-$C=C$ migrates the sigma bond through a chair six electron transition state.',
        detail: '1,5-hexadiene equilibrates degenerately; substituted cases favour the more substituted alkene side. The chair preference transfers stereochemistry predictably from starting geometry.'
      },
      {
        term: 'Claisen allyl vinyl ether shift',
        kind: 'method',
        statement: 'Allyl vinyl ethers undergo **Claisen rearrangement** `Claisen` $C=C$-$C$-$O$-$C=C$ to $C$-$C(=O)$-$C=C$ gamma,delta-unsaturated carbonyls on heating, the oxygen analogue of Cope.',
        detail: 'Aromatic Claisen of allyl phenyl ether gives ortho allyl phenol after rearomatisation. Johnson and Ireland variants use orthoesters and silyl ketenes to deliver esters with $E$ control.'
      },
      {
        term: 'Oxy-Cope acceleration',
        kind: 'theorem',
        statement: 'A hydroxyl on the central carbon gives **oxy-Cope** `oxy-Cope` whose alkoxide **anionic oxy-Cope** `anionic` with $KH$ drops the barrier by orders of magnitude to low temperature.',
        detail: 'Deprotonation turns the product into a stabilised enolate $C=C$-$O^{-}$, making the shift downhill. Quench then gives delta,epsilon-unsaturated carbonyls used in ring expansions.'
      },
      {
        term: 'Electrocyclisation selection rules',
        kind: 'law',
        statement: '**Thermal $4n$ closes conrotatory and $4n+2$ disrotatory** `electrocyclisation`, reversed photochemically, with substituents rotating in the sense that preserves $HOMO$ overlap.',
        detail: 'Butadiene to cyclobutene is conrotatory on heating; hexatriene to cyclohexadiene is disrotatory on heating. Trans, cis, trans-octatetraene closures prove the predicted stereochemistry.'
      },
      {
        term: 'Suprafacial hydrogen shifts',
        kind: 'insight',
        statement: '**$1,5$-hydrogen shifts** `sigmatropic` are thermally allowed suprafacially while $1,3$-shifts are forbidden and need radical or acid paths, explaining diene isomerisation patterns.',
        detail: 'Cyclopentadiene scrambles label by $1,5$-shifts at room temperature. The $HOMO$ phase at both migration termini must match for bonding in the transition state.'
      }
    ],
    figures: [
      {
        caption: 'Chair $3,3$ transition state for Cope and Claisen $C$-$C$-$C$ to $C=C$ migration; $4n$ conrotatory versus $4n+2$ disrotatory electrocyclisation arrows.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sigmatropic chair and electrocyclisation rotation scheme"><rect x="40" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="150" text-anchor="middle" font-size="13" fill="currentColor">1,5-diene</text><text x="125" y="170" text-anchor="middle" font-size="12" fill="currentColor">chair 3,3 TS</text><rect x="270" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="355" y="138" text-anchor="middle" font-size="13" fill="currentColor">Claisen: O-allyl</text><text x="355" y="158" text-anchor="middle" font-size="12" fill="currentColor">to gamma-delta C=O</text><text x="355" y="176" text-anchor="middle" font-size="12" fill="currentColor">oxy anion faster</text><rect x="500" y="120" width="170" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="148" text-anchor="middle" font-size="13" fill="currentColor">4n con, 4n+2 dis</text><text x="585" y="168" text-anchor="middle" font-size="12" fill="currentColor">heat; flipped by light</text><line x1="210" y1="160" x2="270" y2="155" stroke="currentColor" stroke-width="2.5"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="440" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><path d="M300,250 C340,230 380,230 420,250" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="420,250 410,245 410,255" fill="currentColor"/><text x="360" y="275" text-anchor="middle" font-size="12" fill="currentColor">rotation sense sets stereochemistry</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Aromatic Claisen to ortho allyl phenol',
        problem: 'Allyl phenyl ether $PhOCH_{2}CH=CH_{2}$ is heated to about $473$ K. Give the product and explain why para product needs a blocked ortho position.',
        steps: [
          { label: 'Step 1', text: 'Draw the $3,3$ chair $O$-$C$-$C=C$ to $C$-$C$-$C=O$ shift:\n```text\nallyl vinyl frame hidden in Ar-O-allyl\nshift -> ortho dienone, then rearomatise\nblocked ortho -> second Cope to para\n```\nAromaticity is lost then regained.' },
          { label: 'Step 2', text: 'First shift places allyl ortho as a cyclohexadienone which enolises to ortho allyl phenol $HO$-$C_{6}H_{4}$-$CH_{2}CH=CH_{2}$.' },
          { label: 'Step 3', text: 'Blocked ortho forces a second Cope of the ortho dienone to para, so para allyl phenol appears only after two shifts.' }
        ],
        result: 'Ortho allyl phenol by single Claisen and rearomatisation; para isomer only when ortho sites are blocked.'
      },
      {
        title: 'Hexatriene photoclosure stereochemistry',
        problem: 'Trans, cis, trans-$2,4,6$-octatriene closes thermally and photochemically to dimethyl cyclohexadiene. Predict the relative stereochemistry in each mode.',
        steps: [
          { label: 'Step 1', text: 'Count $6$ pi electrons: $4n+2$ with $n = 1$, so thermal is disrotatory and photo is conrotatory.' },
          { label: 'Step 2', text: 'Disrotatory thermal closure rotates termini oppositely, placing the two terminal methyl groups trans in the cyclohexadiene.' },
          { label: 'Step 3', text: 'Conrotatory photo closure rotates the same way, placing the methyl groups cis, the textbook orbital symmetry flip.' }
        ],
        result: 'Thermal disrotatory gives trans dimethyl ring; photochemical conrotatory gives cis dimethyl ring.'
      }
    ],
    keyTakeaways: [
      'Cope $C$-$C$-$C=C$-$C=C$ and Claisen $C=C$-$C$-$O$-$C=C$ are $3,3$ chair shifts.',
      'Anionic oxy-Cope with $KH$ runs at low temperature to enolate products.',
      'Thermal $4n$ is conrotatory and $4n+2$ disrotatory, reversed by light.',
      'Allowed $1,5$-$H$ shifts scramble dienes; $1,3$-$H$ shifts are thermally forbidden.'
    ],
    quiz: [
      {
        q: 'Cope transition state geometry is:',
        options: ['Boat only always', 'Chair six electron array', 'Linear four centre', 'Ionic pair'],
        answer: 1,
        explanation: 'Step 1: Arrange six atoms in a ring. Step 2: Adopt chair overlap like cyclohexane. Step 3: Migrate the sigma bond suprafacially.'
      },
      // PYQ-pattern: electrocyclisation mode selection drill
      {
        q: 'Thermal closure of $1,3$-butadiene to cyclobutene is:',
        options: ['Disrotatory', 'Nonrotatory', 'Conrotatory', 'Radical only'],
        answer: 2,
        explanation: 'Step 1: Count $4$ pi electrons as $4n$. Step 2: Apply thermal $4n$ conrotatory rule. Step 3: Rotate both termini the same way.'
      },
      {
        q: 'Aromatic Claisen of $PhOCH_{2}CH=CH_{2}$ gives first:',
        options: ['Para allyl phenol directly', 'Phenyl propanoate', 'Cleavage to phenol plus propene', 'Ortho dienone then ortho allyl phenol'],
        answer: 3,
        explanation: 'Step 1: Shift allyl to ortho by $3,3$ path. Step 2: Form the ortho cyclohexadienone. Step 3: Enolise back to aromatic ortho allyl phenol.'
      },
      {
        q: 'Anionic oxy-Cope is fast because:',
        options: ['It forms a stabilised enolate product', 'It breaks aromaticity', 'It uses radical chains', 'It removes the pi system'],
        answer: 0,
        explanation: 'Step 1: Deprotonate the central $OH$ to $O^{-}$. Step 2: Shift to $C=C$-$O^{-}$ enolate directly. Step 3: Harvest the downhill alkoxide to enolate drive.'
      }
    ]
  }
]
