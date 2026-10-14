import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 11: Periodic Properties and Chemical Bonding
// Sections 11.1 - 11.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ and $$...$$ pipeline.
// ============================================================================

export const chemCh11Content: SectionContent[] = [
  // ---------------------------------------------------------------- 11.1
  {
    sectionId: 'chem-ch11-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Effective charge and shielding behind periodic reversals',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Slater effective charge organizes every trend',
            body: 'The **screening theorem** approximates $Z_{eff} = Z - S$ with shielding constant $S$ from inner shells, so valence electrons feel a charge that rises toward the upper right and falls down groups. Atomic radius shrinks across periods as $Z_{eff}$ tightens the cloud and grows down groups as new shells outweigh charge gains. Ionization enthalpy and electron appetite follow the same ladder, with documented reversals where subshell structure beats the smooth trend.'
          },
          {
            kind: 'derivation',
            heading: 'Beryllium boron and nitrogen oxygen reversals',
            body: 'Compare $s$ versus $p$ penetration: beryllium holds a full $2s$ pair that resists removal while boron offers a higher but less penetrating $2p$ electron, so the first ionization dips despite rising charge. Nitrogen keeps a half filled $2p$ set with exchange stabilization while oxygen pairs one electron and pays repulsion, producing the second famous dip. The derivation shows trends are rules with orbital excuses, and graduate problems test the excuses rather than the arrows.'
          },
          {
            kind: 'application',
            heading: 'Electronegativity scales that predict bond polarity',
            body: 'Pauling and Mulliken scales convert ionization plus electron gain data into a single number that forecasts bond dipole direction and oxide acid base character. Upper right elements pull shared pairs hardest, so hydrogen fluoride polarizes strongly while cesium fluoride transfers nearly fully. Materials chemists use the gap between pair values to screen ionic versus covalent character before any lattice calculation, a fast filter for synthesis planning.'
          }
        ]
      }
    ],
    readingTime: 8,
    intro: 'Periodic properties repeat because valence configuration repeats after each noble gas core, so position in the table predicts size, energy cost and electron appetite with only a few documented reversals. Effective nuclear charge rises toward the upper right while shielding and shell number grow downward, and the contest between those two controls every trend line. This section builds dependable walks for radius, ionization enthalpy, electron gain and electronegativity that remain stable under timed pressure.',
    objectives: [
      'Order atomic and ionic radii across periods and groups using shielding and charge-density logic',
      'Rank first and successive ionization enthalpies and justify the beryllium-boron and nitrogen-oxygen reversals',
      'Link electron gain and electronegativity scales to bond polarity and oxide behaviour'
    ],
    concepts: [
      {
        term: 'Atomic and ionic radius',
        kind: 'definition',
        statement: 'The **covalent and metallic radius** contracts across a period as `Zeff` climbs, with $Z_{eff} = Z - S$ where $S$ is the shielding constant, while $r$ grows down a group as a new shell dominates. Cations are much smaller than parent atoms as $Na$ collapses to $Na^{+}$, while anions expand as $Cl$ expands to $Cl^{-}$ because electron repulsion outweighs nuclear pull.',
        detail: 'Isoelectronic series are ordered by nuclear charge alone: for $O^{2-}$, $F^{-}$, $Na^{+}$, $Mg^{2+}$ and $Al^{3+}$ the size falls as $Z$ rises because all hold ten electrons. Transition contraction and lanthanoid contraction flatten the expected group growth for heavier rows.'
      },
      {
        term: 'Ionization enthalpy',
        kind: 'law',
        statement: 'The **first ionization enthalpy** is the enthalpy for $X(g) \\rightarrow X^{+}(g) + e^{-}$ and `IE1` generally rises across a period and falls down a group as $IE_{1}$ tracks $Z_{eff}$ divided by distance. Successive values satisfy $IE_{3} > IE_{2} > IE_{1}$, with a sharp jump when a noble-gas core is broken, as in $Na$ where $IE_{2}$ is far above $IE_{1}$.',
        detail: 'Half filled and fully filled subshells resist removal, so $Be$ exceeds $B$ and $N$ exceeds $O$ despite the left-to-right rise. The $N$ to $O$ reversal comes from paired repulsion in $O$ with configuration $2p^{4}$ versus stable half filling $2p^{3}$ in $N$.'
      },
      {
        term: 'Electron gain enthalpy',
        kind: 'definition',
        statement: 'The **electron gain enthalpy** for $X(g) + e^{-} \\rightarrow X^{-}(g)$ is most negative for compact acceptors, and `EA` peaks near $F$ and $Cl$ with $Cl$ more negative than $F$ in measured $\\Delta_{eg}H$ values. Small $F$ with $2p$ orbitals suffers interelectronic repulsion, while $O^{-}$ formation is negative but $O^{2-}$ formation is strongly positive because $O^{-} + e^{-} \\rightarrow O^{2-}$ must overcome repulsion.',
        detail: 'Noble gases carry positive values since no stable anion exists, and $N$ is nearly zero because the incoming electron must enter a higher energy arrangement against half-shell stability. Second gains are always positive for isolated gaseous ions.'
      },
      {
        term: 'Electronegativity scales',
        kind: 'notation',
        statement: 'The **Pauling electronegativity** assigns `chi_F` equal to $\\chi_{F} = 4.0$ for $F$ and ranks $O$ near $3.5$, $Cl$ near $3.2$ and $Na$ near $0.9$ on a dimensionless ladder. Differences $\\Delta\\chi$ predict polarity, with $\\Delta\\chi > 1.7$ leaning ionic and smaller gaps leaning polar covalent for $H-Cl$ and $C-O$ bonds.',
        detail: 'Mulliken form averages $IE$ and $EA$ as $\\chi_{M} = \\frac{IE + EA}{2}$, which ties the ladder directly to measurable atomic energies. Allred-Rochow form tracks $Z_{eff}$ divided by $r^{2}$, which explains why electronegativity climbs toward fluorine.'
      },
      {
        term: 'Shielding and effective charge',
        kind: 'insight',
        statement: 'The **Slater shielding picture** says inner shells screen almost fully while same-shell electrons screen weakly, so `S` grows slowly across a period and $Z_{eff}$ climbs steadily from $Li$ toward $Ne$. Penetration order $ns > np > nd > nf$ means an $s$ electron feels more of $Z$ than a $p$ electron in the same shell, which orders subshell energies and sizes.',
        detail: 'Poor shielding by $d$ and $f$ electrons explains gallium and post-lanthanoid anomalies, where $Ga$ is smaller than $Al$ would suggest and $Hf$ nearly matches $Zr$ in radius. Diagonal pairs such as $Li$ with $Mg$ and $Be$ with $Al$ converge because charge growth and size growth nearly cancel.'
      }
    ],
    figures: [
      {
        caption: 'Covalent radius falls across a period as $Z_{eff} = Z - S$ climbs and grows down a group; $IE_1$ and electronegativity climb toward $F$ with $N > O$ reversals.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Periodic arrows for radius ionization and electronegativity"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">across: r falls, IE and EN rise; down: r rises, IE falls</text><line x1="60" y1="100" x2="330" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="330,100 322,94 322,106" fill="currentColor" stroke="none"/><text x="70" y="90" font-size="12" fill="currentColor" font-family="sans-serif">Li -&gt; Ne: Zeff up, size down</text><line x1="60" y1="130" x2="330" y2="130" stroke="currentColor" stroke-width="2"/><polygon points="330,130 322,124 322,136" fill="currentColor" stroke="none"/><text x="70" y="155" font-size="12" fill="currentColor" font-family="sans-serif">Na electron appetite: Cl &gt; F measured lag</text><line x1="400" y1="80" x2="400" y2="200" stroke="currentColor" stroke-width="2"/><polygon points="400,200 394,192 406,192" fill="currentColor" stroke="none"/><text x="415" y="140" font-size="12" fill="currentColor" font-family="sans-serif">down group:</text><text x="415" y="160" font-size="12" fill="currentColor" font-family="sans-serif">new shell wins</text><rect x="40" y="190" width="640" height="90" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="55" y="215" font-size="13" fill="currentColor" font-family="sans-serif">isoelectronic: Al3+ &lt; Mg2+ &lt; Na+ &lt; F- &lt; O2- (Z at fixed e- count)</text><text x="55" y="240" font-size="13" fill="currentColor" font-family="sans-serif">IE: Be &gt; B and N &gt; O (s2 and half-shell stability)</text><text x="55" y="262" font-size="13" fill="currentColor" font-family="sans-serif">chiF = 4.0; delta-chi &gt; 1.7 leans ionic</text><text x="40" y="310" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">penetration ns &gt; np &gt; nd &gt; nf sets shielding S</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Ordering an isoelectronic set by radius',
        problem: 'Arrange $O^{2-}$, $F^{-}$, $Na^{+}$, $Mg^{2+}$ and $Al^{3+}$ in order of increasing radius and justify the order from nuclear charge.',
        steps: [
          { label: 'Step 1', text: '```text\nAll five ions hold $10$ electrons: $[Ne]$ configuration.\nNuclear charge $Z$: $O=8$, $F=9$, $Na=11$, $Mg=12$, $Al=13$.\nSize falls as $Z$ rises at fixed electron count.\n```\nAll species share the $1s^{2} 2s^{2} 2p^{6}$ count, so only $Z$ distinguishes them and larger $Z$ pulls the same cloud inward.' },
          { label: 'Step 2', text: 'Count protons against a fixed ten-electron repulsion field, where $Al^{3+}$ with $Z = 13$ exerts the strongest pull and $O^{2-}$ with $Z = 8$ the weakest. Hence the radius sequence runs from the most proton-rich to the least proton-rich member.' },
          { label: 'Step 3', text: 'Write the increasing-radius order as $Al^{3+} < Mg^{2+} < Na^{+} < F^{-} < O^{2-}$, which matches measured crystal radii near $53$ pm for $Al^{3+}$ rising toward $140$ pm for $O^{2-}$ in six coordination.' }
        ],
        result: 'Increasing radius: $Al^{3+} < Mg^{2+} < Na^{+} < F^{-} < O^{2-}$, controlled purely by $Z$ at constant electron count.'
      },
      {
        title: 'Resolving the nitrogen-oxygen ionization reversal',
        problem: 'First ionization enthalpy rises from $Li$ toward $Ne$, yet measured $IE_{1}$ of $N$ exceeds that of $O$. Account for the reversal with configurations and repulsion.',
        steps: [
          { label: 'Step 1', text: 'Write valence strings as $N = 2s^{2} 2p^{3}$ with three unpaired $p$ electrons and $O = 2s^{2} 2p^{4}$ with one paired $p$ orbital. Half filling $p^{3}$ carries added exchange stability while $p^{4}$ carries paired repulsion in one orbital.' },
          { label: 'Step 2', text: 'Removal from $N$ destroys the half-filled arrangement $2p^{3} \\rightarrow 2p^{2}$, which costs added energy, while removal from $O$ relieves pairing $2p^{4} \\rightarrow 2p^{3}$ and yields a half-filled product. Thus $IE_{1}(N) > IE_{1}(O)$ despite larger $Z_{eff}$ at oxygen.' },
          { label: 'Step 3', text: '```text\n$N$: $[He] 2s^{2} 2p^{3} \\rightarrow [He] 2s^{2} 2p^{2}$ (loss of half-shell stability)\n$O$: $[He] 2s^{2} 2p^{4} \\rightarrow [He] 2s^{2} 2p^{3}$ (gain of half-shell stability)\n```\nThe same logic gives $Be > B$ and $Mg > Al$, where an $s^{2}$ core resists removal more than a lone $p^{1}$ electron.' }
        ],
        result: 'The $N$ versus $O$ reversal follows from half-shell stability and pairing repulsion, not from the general $Z_{eff}$ rise.'
      }
    ],
    keyTakeaways: [
      'Radius falls across a period with rising $Z_{eff}$ and grows down a group with new shells, with cations smaller and anions larger than parent atoms.',
      'Ionization enthalpy climbs across and falls down, with $Be$ over $B$ and $N$ over $O$ reversals from subshell stability.',
      'Electron gain is most negative near $Cl$ and $F$, with $F$ below $Cl$ from compact repulsion and second gains always positive.',
      'Electronegativity differences $\\Delta\\chi$ map directly onto bond polarity and diagonal similarities such as $Li$ with $Mg$.'
    ],
    quiz: [
      // PYQ-pattern: isoelectronic radius ordering drill
      {
        q: 'Which order correctly lists increasing ionic radius for an isoelectronic ten-electron set?',
        options: [`$Al^{3+} < Mg^{2+} < Na^{+} < F^{-} < O^{2-}$`, `$O^{2-} < F^{-} < Na^{+} < Mg^{2+} < Al^{3+}$`, `$Na^{+} < O^{2-} < F^{-} < Al^{3+} < Mg^{2+}$`, `$F^{-} < O^{2-} < Al^{3+} < Mg^{2+} < Na^{+}$`],
        answer: 0,
        explanation: 'Step 1: Confirm all five ions carry ten electrons with configuration $1s^{2} 2s^{2} 2p^{6}$. Step 2: At fixed electron count, radius is set by proton number $Z$. Step 3: Largest $Z$ pulls hardest, so $Al^{3+}$ is smallest and $O^{2-}$ is largest.'
      },
      // PYQ-pattern: ionization reversal logic
      {
        q: 'Why does nitrogen have a higher first ionization enthalpy than oxygen?',
        options: ['Nitrogen has a larger atomic mass than oxygen', 'Oxygen has one paired $2p$ electron whose repulsion lowers removal cost, while nitrogen loses half-shell stability', 'Oxygen has fewer protons than nitrogen', 'Nitrogen forms a doubly charged ion more readily'],
        answer: 1,
        explanation: 'Step 1: Write $N = 2s^{2} 2p^{3}$ and $O = 2s^{2} 2p^{4}$. Step 2: Removing from $N$ destroys half filling, while removing from $O$ creates half filling. Step 3: Pairing repulsion in $O$ therefore lowers its $IE_{1}$ below that of $N$.'
      },
      {
        q: 'Why is the electron gain enthalpy of chlorine more negative than that of fluorine?',
        options: ['Chlorine has a larger nucleus with more shells', 'Fluorine has no $p$ orbitals', 'Compact $2p$ orbitals in fluorine create strong interelectronic repulsion for the incoming electron, while $3p$ in chlorine accepts it more comfortably', 'Chlorine has a lower nuclear charge than fluorine'],
        answer: 2,
        explanation: 'Step 1: Both atoms accept into $np$ orbitals, $2p$ for $F$ and $3p$ for $Cl$. Step 2: The $2p$ shell is very compact, so added electron density raises repulsion. Step 3: The larger $3p$ shell of $Cl$ spreads the charge, giving a more negative $\\Delta_{eg}H$.'
      },
      {
        q: 'A bond $A-B$ has $\\Delta\\chi = 2.1$ while $C-D$ has $\\Delta\\chi = 0.4$. What follows from the electronegativity ladder?',
        options: ['Both bonds are equally covalent', `$C-D$ is more ionic than $A-B$`, '$A-B$ leans strongly ionic while $C-D$ is nearly nonpolar covalent', 'Electronegativity cannot comment on polarity'],
        answer: 3,
        explanation: 'Step 1: Recall the $\\Delta\\chi > 1.7$ rule of thumb for ionic leaning. Step 2: $2.1$ exceeds the mark while $0.4$ lies far below it. Step 3: Hence $A-B$ is strongly polar toward ionic and $C-D$ is nearly nonpolar.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.2
  {
    sectionId: 'chem-ch11-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Polarization Fajan rules and the Born Haber cycle',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Fajan rules place every bond on the ionic covalent spectrum',
            body: 'The **Fajan theorem** states that covalent character grows with cation charge, shrinking cation size, and large polarizable anions, with pseudo noble gas configurations adding extra bite. Small highly charged cations distort anion clouds toward sharing, raising melting point anomalies lowering solubility and promoting hydrolysis. Aluminum chloride dimerizes and hydrolyzes while sodium chloride stays ionic and high melting, the textbook pair that the rules predict without calculation.'
          },
          {
            kind: 'derivation',
            heading: 'Born Haber closure and lattice scaling',
            body: 'Sum atomization ionization electron gain and lattice steps around the formation cycle to solve for the unknown lattice enthalpy, using Hess path independence as the closure guarantee. Lattice energy scales as $U \\propto Z_{plus}Z_{minus}/r_0$ in the Kapustinskii form, so doubling charges quadruples cohesion while larger ions soften it. The derivation turns qualitative Fajan rankings into numbers that order melting points and thermal stabilities of carbonates and hydroxides.'
          },
          {
            kind: 'application',
            heading: 'Solubility and stability calls from polarization',
            body: 'Small cations polarize carbonate ions so strongly that thermal decomposition temperatures fall down the surprise order, and silver halide insolubility tracks growing covalent character rather than size alone. Geochemistry applies the same logic to mineral hardness and hydrolysis in weathering, while battery research screens solid electrolytes by balancing lattice cohesion against ion mobility. The graduate move is to pair Fajan intuition with one lattice estimate before trusting either alone.'
          }
        ]
      }
    ],
    readingTime: 8,
    intro: 'No bond is purely ionic or purely covalent, and the position of a compound on that spectrum controls melting point, solubility, conductivity and hydrolysis. Polarization of the anion by the cation distorts electron clouds toward sharing, and small highly charged cations distort the most. This section turns that picture into quantitative Fajan rules plus lattice-energy intuition.',
    objectives: [
      'Apply Fajan rules using charge, size and pseudo noble-gas configuration to rank covalent character',
      'Use Born-Haber cycles and lattice trends to link size and charge to melting and stability',
      'Predict solubility, thermal stability and hydrolysis trends from polarization logic'
    ],
    concepts: [
      {
        term: 'Fajan polarization rules',
        kind: 'law',
        statement: 'The **Fajan rules** state that covalent character grows with cation charge and falls with cation size, grows with anion size and polarizability, and is largest for `ns2np6nd10` cations such as $Ag^{+}$ and $Pb^{2+}$ that polarize strongly. Thus $AlCl_{3}$ is far more covalent than $NaCl$, and $NaI$ is more covalent than $NaF$ because $I^{-}$ deforms readily.',
        detail: 'Charge density $Z$ divided by $r$ is the working index: $Mg^{2+}$ polarizes more than $Na^{+}$, and $Al^{3+}$ more than $Mg^{2+}$ at comparable radius. Anion deformability rises down a group as $F^{-} < Cl^{-} < Br^{-} < I^{-}$.'
      },
      {
        term: 'Polarizing power and deformability',
        kind: 'definition',
        statement: 'The **polarizing power** of a cation is indexed by `Z_by_r` as $\\frac{Z}{r}$ or $\\frac{Z^{2}}{r}$, while anion softness is indexed by large radius and low charge density. A small $Be^{2+}$ ion with $r$ near $31$ pm hydrolyses and polymerizes readily, whereas large $Ba^{2+}$ near $135$ pm remains ionic and gives basic oxides.',
        detail: 'Pseudo noble-gas cations with eighteen-electron shells add extra polarization beyond size alone, which is why $AgCl$ is far less soluble than $NaCl$ and $PbCl_{2}$ is sparingly soluble. This added term explains many group anomalies.'
      },
      {
        term: 'Lattice enthalpy trends',
        kind: 'theorem',
        statement: 'The **Born-Lande lattice enthalpy** scales as `U` proportional to $U \\propto \\frac{Z_{+} Z_{-}}{r_{+} + r_{-}}$, so $MgO$ with doubly charged ions melts far above $NaCl$ with singly charged ions. Smaller interionic distance $r_{+} + r_{-}$ raises $U$, which is why $LiF$ exceeds $KBr$ in lattice energy among alkali halides.',
        detail: 'Lattice growth competes with hydration in solubility, and hydration wins for small highly hydrated ions such as $Li^{+}$ and $Mg^{2+}$. Hence many lithium and magnesium salts dissolve well despite large lattice terms.'
      },
      {
        term: 'Born-Haber cycle',
        kind: 'method',
        statement: 'The **Born-Haber cycle** closes $\\Delta_{f}H$ through `sublimation` plus $\\Delta_{sub}H + IE + \\frac{1}{2}D + EA + U$ steps, letting one unknown such as $U$ or $EA$ be extracted from the rest. For $NaCl$ the cycle reads $Na(s) \\rightarrow Na(g) \\rightarrow Na^{+}(g)$ plus $\\frac{1}{2}Cl_{2} \\rightarrow Cl(g) \\rightarrow Cl^{-}(g)$ followed by lattice assembly.',
        detail: 'Large positive $IE_{2}$ plus $IE_{3}$ terms explain why $NaCl_{2}$ and $AlCl_{4}$ stoichiometries do not form under ambient steps: the ionization cost overwhelms any lattice gain. The cycle thus justifies normal valences from energy data.'
      },
      {
        term: 'Diagonal and property consequences',
        kind: 'insight',
        statement: 'The **diagonal relationship** pairs `Li-Mg` and `Be-Al` because charge growth and size growth nearly cancel along the diagonal, giving similar $Z$ divided by $r$ values. Consequences include amphoteric $BeO$ and $Al_{2}O_{3}$, polymeric $BeCl_{2}$ and $AlCl_{3}$, and limited thermal stability of $Li_{2}CO_{3}$ relative to heavier carbonates.',
        detail: 'Covalent character also lowers melting points and raises hydrolysis: $AlCl_{3}$ fumes in moist air as $AlCl_{3} + 3H_{2}O \\rightarrow Al(OH)_{3} + 3HCl$, while $NaCl$ dissolves cleanly. Carbonate stability rises down Group 2 as larger cations stabilize large $CO_{3}^{2-}$ ions.'
      }
    ],
    derivations: [
      {
        title: 'Born Haber Cycle for Lattice Enthalpy',
        statement: 'Derivation of $\\Delta_{f}H = \\Delta_{sub}H + IE + \\frac{1}{2}D + EA + U$ for $Na(s) + \\frac{1}{2}Cl_{2} \\to NaCl(s)$',
        prerequisites: [
          'Hess law path independence of enthalpy $H$',
          'Ionization energy $IE$ and electron affinity $EA$ steps',
          'Lattice assembly energy $U$ for gaseous ions'
        ],
        steps: [
          {
            label: 'Step 1: Atomize the metal to gaseous atoms',
            formula: '$$Na(s) \\to Na(g) \\quad \\Delta_{sub}H$$',
            explanation: 'Solids must first be separated into isolated atoms before electron transfer can be counted. Sublimation enthalpy measures this cost of breaking metallic bonding. This step is needed because ionization energies refer to free atoms, not extended lattices.'
          },
          {
            label: 'Step 2: Ionize the metal and prepare the nonmetal anion',
            formula: '$$Na(g) \\to Na^+(g) + e^- \\quad \\frac{1}{2}Cl_{2} \\to Cl(g) \\to Cl^-(g)$$',
            explanation: 'Removing an electron costs ionization energy while adding one releases electron affinity energy. Halogen dissociation to atoms precedes anion formation because $Cl_{2}$ bonds must break first. Separating these terms exposes why high second ionization energies forbid unusual stoichiometries.'
          },
          {
            label: 'Step 3: Assemble gaseous ions into the crystal',
            formula: '$$Na^+(g) + Cl^-(g) \\to NaCl(s) \\quad U$$',
            explanation: 'Bringing oppositely charged ions together releases lattice energy from electrostatic cohesion. This large negative term drives salt formation despite the costly ionization step. Its magnitude scales with charge product over interionic distance, which links size and charge to stability.'
          },
          {
            label: 'Step 4: Close the Hess cycle to formation enthalpy',
            formula: '$$\\Delta_{f}H = \\Delta_{sub}H + IE + \\frac{1}{2}D + EA + U$$',
            explanation: 'Because enthalpy is a state function, the direct formation path equals the sum around the indirect loop. Equating the two routes lets one unknown such as $U$ or $EA$ be solved from measured companions. Missing high chlorides are then explained because extra ionization cost overwhelms any lattice gain.'
          }
        ],
        result: 'Cycle $\\Delta_{f}H = \\Delta_{sub}H + IE + \\frac{1}{2}D + EA + U$ extracts lattice $U$ or affinity $EA$ and justifies normal valences from energy closure.'
      }
    ],
    figures: [
      {
        caption: 'Fajan rules put covalent character on small highly charged cations polarising large anions; the Born-Haber cycle closes $\\Delta_fH$ through sublimation, $IE$, dissociation, $EA$ and $U$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fajan polarisation and Born Haber cycle"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">polarisation: small cation distorts large anion cloud</text><circle cx="150" cy="130" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="135" y="135" font-size="12" fill="currentColor" font-family="sans-serif">Be2+</text><circle cx="300" cy="130" r="40" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="285" cy="130" rx="40" ry="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><text x="280" y="135" font-size="12" fill="currentColor" font-family="sans-serif">I-</text><text x="360" y="135" font-size="12" fill="currentColor" font-family="sans-serif">covalent</text><circle cx="150" cy="210" r="28" fill="none" stroke="currentColor" stroke-width="2"/><text x="140" y="215" font-size="12" fill="currentColor" font-family="sans-serif">Na+</text><circle cx="300" cy="210" r="22" fill="none" stroke="currentColor" stroke-width="2"/><text x="290" y="215" font-size="12" fill="currentColor" font-family="sans-serif">F-</text><text x="360" y="215" font-size="12" fill="currentColor" font-family="sans-serif">ionic</text><rect x="450" y="70" width="230" height="170" fill="none" stroke="currentColor" stroke-width="2"/><text x="465" y="95" font-size="13" fill="currentColor" font-family="sans-serif">Born-Haber box:</text><text x="465" y="118" font-size="12" fill="currentColor" font-family="sans-serif">M(s) -&gt; M(g) sub</text><text x="465" y="140" font-size="12" fill="currentColor" font-family="sans-serif">M(g) -&gt; M+ IE</text><text x="465" y="162" font-size="12" fill="currentColor" font-family="sans-serif">X2 -&gt; 2X, X+e EA</text><text x="465" y="184" font-size="12" fill="currentColor" font-family="sans-serif">M+ + X- -&gt; MX U</text><text x="465" y="208" font-size="12" fill="currentColor" font-family="sans-serif">sum = formation</text><text x="40" y="280" font-size="13" fill="currentColor" font-family="sans-serif">U propto Z+Z-/r; MgO melts far above NaCl</text><text x="40" y="305" font-size="13" fill="currentColor" font-family="sans-serif" opacity="0.85">Li-Mg and Be-Al diagonals share Z/r</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Ranking covalent character in chlorides',
        problem: 'Rank $NaCl$, $MgCl_{2}$, $AlCl_{3}$ and $SiCl_{4}$ in order of increasing covalent character and melting behaviour.',
        steps: [
          { label: 'Step 1', text: '```text\nCation charge $Z$: $Na$ +1, $Mg$ +2, $Al$ +3, $Si$ +4.\nCation radius falls in the same order.\nPolarizing index $Z$ divided by $r$ rises steeply: $Na < Mg < Al < Si$.\n```\nLarger $Z$ divided by $r$ distorts $Cl^{-}$ more, so sharing grows from left to right in the list.' },
          { label: 'Step 2', text: 'Translate the index into properties: $NaCl$ is a high-melting ionic solid, $MgCl_{2}$ is ionic with some bridging, $AlCl_{3}$ forms $Al_{2}Cl_{6}$ dimers and sublimes, and $SiCl_{4}$ is a volatile liquid that hydrolyses. Melting point therefore does not rise monotonically because structure changes.' },
          { label: 'Step 3', text: 'Give the covalent order as $NaCl < MgCl_{2} < AlCl_{3} < SiCl_{4}$, with conductivity in the melt falling along the same walk as mobile ions give way to neutral units.' }
        ],
        result: 'Covalent character rises as $NaCl < MgCl_{2} < AlCl_{3} < SiCl_{4}$, with structure shifting from ionic lattice to dimer to molecular liquid.'
      },
      {
        title: 'Carbonate stability down Group 2',
        problem: 'Explain why $BeCO_{3}$ is unstable at room temperature while $BaCO_{3}$ needs strong heating to release $CO_{2}$, using polarization.',
        steps: [
          { label: 'Step 1', text: 'Write decomposition as $MCO_{3} \\rightarrow MO + CO_{2}$, driven by the oxide ion $O^{2-}$ pulling away from $C$ in $CO_{3}^{2-}$. A small polarizing cation stabilizes the small $O^{2-}$ product more than the large $CO_{3}^{2-}$ reactant.' },
          { label: 'Step 2', text: 'Order polarizing power as $Be^{2+} > Mg^{2+} > Ca^{2+} > Sr^{2+} > Ba^{2+}$ from falling $Z$ divided by $r$. Thus $BeCO_{3}$ is destabilized toward products while $BaCO_{3}$ keeps the large anion intact.' },
          { label: 'Step 3', text: '```text\n$BeCO_{3}$: unstable, stored as ammonium complex only.\n$MgCO_{3}$: decomposes near $350$ C.\n$CaCO_{3}$: decomposes near $900$ C.\n$BaCO_{3}$: decomposes well above $1000$ C.\n```\nThe same walk governs hydroxide and peroxide stability across the group.' }
        ],
        result: 'Decomposition temperature rises down the group as $Be < Mg < Ca < Sr < Ba$ because larger cations stabilize large anions.'
      }
    ],
    keyTakeaways: [
      'Fajan ranking follows cation charge, small cation size, large anion size and eighteen-electron shells such as $Ag^{+}$.',
      'Lattice enthalpy scales with $Z_{+} Z_{-}$ divided by $r_{+} + r_{-}$, so $MgO$ far exceeds $NaCl$.',
      'Born-Haber cycles lock $\\Delta_{f}H$, $IE$, $EA$ and $U$ together and rule out abnormal stoichiometries.',
      'Carbonate, hydroxide and solubility trends follow the same polarization walk from $Be$ toward $Ba$.'
    ],
    quiz: [
      // PYQ-pattern: Fajan ranking drill
      {
        q: 'Which order shows increasing covalent character correctly?',
        options: [`$SiCl_{4} < AlCl_{3} < MgCl_{2} < NaCl$`, `$NaCl < MgCl_{2} < AlCl_{3} < SiCl_{4}$`, `$MgCl_{2} < NaCl < SiCl_{4} < AlCl_{3}$`, `$AlCl_{3} < SiCl_{4} < NaCl < MgCl_{2}$`],
        answer: 1,
        explanation: 'Step 1: Rank polarizing index $Z$ divided by $r$ for $Na^{+}$, $Mg^{2+}$, $Al^{3+}$ and $Si^{4+}$. Step 2: Larger charge with smaller radius distorts $Cl^{-}$ more. Step 3: Hence sharing grows from $NaCl$ toward $SiCl_{4}$.'
      },
      {
        q: 'Why is $AgCl$ far less soluble than $NaCl$ despite similar ionic sizes?',
        options: ['Silver has a lower nuclear charge than sodium', '$Ag^{+}$ carries an eighteen-electron $d^{10}$ shell that polarizes $Cl^{-}$ strongly, adding covalent character', 'Chloride is smaller in silver chloride', 'Silver chloride forms a gaseous lattice'],
        answer: 1,
        explanation: 'Step 1: Compare $Na^{+}$ with noble-gas core against $Ag^{+}$ with $4d^{10}$ core. Step 2: The $d^{10}$ shell shields poorly and polarizes strongly. Step 3: Added covalency lowers solubility relative to $NaCl$.'
      },
      // PYQ-pattern: carbonate stability walk
      {
        q: 'Which carbonate decomposes at the lowest temperature?',
        options: [`$BaCO_{3}$`, `$SrCO_{3}$`, `$CaCO_{3}$`, `$BeCO_{3}$`],
        answer: 3,
        explanation: 'Step 1: List polarizing power from $Be^{2+}$ down to $Ba^{2+}$. Step 2: Small $Be^{2+}$ stabilizes small $O^{2-}$ over large $CO_{3}^{2-}$. Step 3: Hence $BeCO_{3}$ is least stable toward $MO + CO_{2}$.'
      },
      {
        q: 'Which observation signals covalent character in $AlCl_{3}$?',
        options: ['High melting ionic lattice with melt conductivity', 'Sublimation near $180$ C, $Al_{2}Cl_{6}$ dimers in vapour and vigorous hydrolysis with $H_{2}O$', 'Complete dissociation into free ions in vapour', 'Basic oxide formation with water'],
        answer: 1,
        explanation: 'Step 1: Recall ionic lattices melt high and conduct when molten. Step 2: $AlCl_{3}$ sublimes, dimerizes and fumes with moisture. Step 3: Those three behaviours mark molecular covalent character, dissected in Step 2.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.3
  {
    sectionId: 'chem-ch11-s3',
    readingTime: 9,
    intro: 'Shape controls polarity, reactivity and spectra, and shape follows a small set of electron-domain rules plus orbital mixing. Lone pairs repel more than bond pairs and compress adjacent angles, while steric number maps directly onto hybridization. This section converts VSEPR counting into dependable geometries from linear through octahedral.',
    objectives: [
      'Assign AXE notation and steric number to predict geometry and bond-angle compression',
      'Map steric numbers two through six onto $sp$ through $sp^{3}d^{2}$ hybridization and orbital sketches',
      'Distinguish geometry from shape when lone pairs are present, as in water and ammonia'
    ],
    concepts: [
      {
        term: 'Steric number and AXE notation',
        kind: 'method',
        statement: 'The **steric number** equals `SN` computed as $SN = \\sigma + LP$, where $\\sigma$ counts sigma bonds and $LP$ counts lone pairs on the central atom. Notation $AX_{m}E_{n}$ records $m$ bonded atoms and $n$ lone pairs, so $CH_{4}$ is $AX_{4}$, $NH_{3}$ is $AX_{3}E$ and $H_{2}O$ is $AX_{2}E_{2}$.',
        detail: 'Steric numbers two through six give linear, trigonal planar, tetrahedral, trigonal bipyramidal and octahedral electron geometries in order. Shape names drop lone pairs, so $AX_{3}E$ is pyramidal and $AX_{2}E_{2}$ is bent.'
      },
      {
        term: 'Lone-pair repulsion hierarchy',
        kind: 'law',
        statement: 'The **repulsion ladder** runs `LP-LP` above $LP-BP > BP-BP$, so each lone pair compresses neighbouring angles by roughly two to five degrees. Thus $CH_{4}$ near $109.5^{\\circ}$ opens wider than $NH_{3}$ near $107^{\\circ}$, which opens wider than $H_{2}O$ near $104.5^{\\circ}$ as lone count rises from zero to two.',
        detail: 'Multiple bonds act as enlarged single domains and compress adjacent singles, which is why $O=C=O$ stays linear while $H_{2}C=O$ distorts. Bent rule refinements place more $p$ character toward lone pairs and more $s$ toward electropositive links.'
      },
      {
        term: 'Hybridization mapping',
        kind: 'notation',
        statement: 'The **hybrid ladder** reads `sp` for $SN = 2$, $sp^{2}$ for $SN = 3$, $sp^{3}$ for $SN = 4$, $sp^{3}d$ for $SN = 5$ and $sp^{3}d^{2}$ for $SN = 6$, with $d$ labels standing for the fifth and sixth directional functions. Linear $BeCl_{2}$ is $sp$, trigonal $BF_{3}$ is $sp^{2}$, tetrahedral $CH_{4}$ is $sp^{3}$, and octahedral $SF_{6}$ is $sp^{3}d^{2}$.',
        detail: 'Hybridization is a model assigned after counting domains, not a cause of shape: count first, then label. Equivalent hybrids explain equal bonds, while non-equivalent hybrids carry Bent-rule $s$ and $p$ imbalance.'
      },
      {
        term: 'Five and six domain shapes',
        kind: 'definition',
        statement: 'The **trigonal bipyramid** from `SN5` splits into axial and equatorial sites, so lone pairs enter equatorial slots to minimize contact, giving seesaw $SF_{4}$ as $AX_{4}E$ and T-shape $ClF_{3}$ as $AX_{3}E_{2}$. The octahedral family from `SN6` gives square pyramidal $BrF_{5}$ as $AX_{5}E$ and square planar $XeF_{4}$ as $AX_{4}E_{2}$ with trans lone pairs.',
        detail: 'Axial bonds in $PCl_{5}$ run longer than equatorial bonds because three-center repulsion concentrates along the axis. Fluxional exchange such as Berry pseudorotation averages those positions on the NMR timescale.'
      },
      {
        term: 'Polarity from shape',
        kind: 'insight',
        statement: 'The **vector sum rule** says molecular dipole `mu` vanishes when bond dipoles cancel by symmetry, with $\\mu = 0$ for linear $CO_{2}$ and planar $BF_{3}$ despite polar bonds. Bent $H_{2}O$ with $\\mu$ near $1.85$ D and pyramidal $NH_{3}$ near $1.47$ D stay polar because cancellation is incomplete.',
        detail: 'Shape therefore predicts solubility and boiling trends: polar $H_{2}O$ networks through hydrogen bonding while symmetric $CCl_{4}$ with $\\mu = 0$ cannot. Lone-pair direction counts as a dipole contributor in the sum.'
      }
    ],
    figures: [
      {
        caption: 'Steric number $SN = \\sigma + LP$ sets $AX_mE_n$ shape and $sp$ to $sp^3d^2$ hybrid; lone pairs compress angles as $LP-LP > LP-BP > BP-BP$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="VSEPR shapes from linear to bent"><text x="30" y="35" font-size="13" fill="currentColor" font-family="sans-serif">SN2 linear 180 | SN3 trigonal 120 | SN4 tetra 109.5</text><line x1="50" y1="90" x2="150" y2="90" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="90" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="150" cy="90" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="90" r="8" fill="currentColor" stroke="none"/><text x="60" y="120" font-size="12" fill="currentColor" font-family="sans-serif">BeCl2</text><circle cx="280" cy="90" r="8" fill="currentColor" stroke="none"/><circle cx="240" cy="120" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="320" cy="120" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="280" cy="60" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="250" y="150" font-size="12" fill="currentColor" font-family="sans-serif">BF3</text><circle cx="470" cy="90" r="8" fill="currentColor" stroke="none"/><circle cx="430" cy="60" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="510" cy="60" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="430" cy="120" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="510" cy="120" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="450" y="150" font-size="12" fill="currentColor" font-family="sans-serif">CH4</text><line x1="30" y1="170" x2="690" y2="170" stroke="currentColor" stroke-width="1" opacity="0.4"/><text x="30" y="200" font-size="13" fill="currentColor" font-family="sans-serif">NH3 pyramidal 107, H2O bent 104.5: lone pairs squeeze</text><circle cx="150" cy="250" r="8" fill="currentColor" stroke="none"/><circle cx="110" cy="280" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="190" cy="280" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="150" cy="220" r="10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><text x="110" y="315" font-size="12" fill="currentColor" font-family="sans-serif">pyramidal</text><circle cx="400" cy="250" r="8" fill="currentColor" stroke="none"/><circle cx="360" cy="280" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="440" cy="280" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="370" y="315" font-size="12" fill="currentColor" font-family="sans-serif">bent, mu nonzero</text><text x="500" y="260" font-size="12" fill="currentColor" font-family="sans-serif">SF4 seesaw AX4E</text><text x="500" y="282" font-size="12" fill="currentColor" font-family="sans-serif">ClF3 T-shape AX3E2</text><text x="500" y="304" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">symmetry kills dipole</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Assigning shape and hybridization for sulfur tetrafluoride',
        problem: 'Predict the shape, hybridization and approximate geometry of $SF_{4}$ from steric counting.',
        steps: [
          { label: 'Step 1', text: '```text\n$S$ valence electrons: $6$.\nFour $S-F$ sigma bonds: $4$ domains.\nOne lone pair left on $S$: $1$ domain.\n$SN = 4 + 1 = 5$ towards trigonal bipyramid family.\n```\nLabel the count as $AX_{4}E$ with `SN5`, so the hybrid tag is $sp^{3}d$ in the taught ladder.' },
          { label: 'Step 2', text: 'Place the lone pair equatorially, where it touches two neighbours at roughly ninety degrees rather than three, which minimizes $LP-BP$ cost. The resulting shape is seesaw with axial $F-S-F$ bent away from the lone pair.' },
          { label: 'Step 3', text: 'Read polarity as nonzero because the seesaw lacks an inversion centre, so $SF_{4}$ carries a net $\\mu$ and acts as a fluorinating agent toward $C=O$ groups.' }
        ],
        result: '$SF_{4}$ is seesaw $AX_{4}E$ with $sp^{3}d$ labelling and a nonzero dipole from equatorial lone-pair placement.'
      },
      {
        title: 'Why water is bent while carbon dioxide is linear',
        problem: 'Both $H_{2}O$ and $CO_{2}$ are triatomic, yet $H_{2}O$ is bent near $104.5^{\\circ}$ while $CO_{2}$ is linear at $180^{\\circ}$. Reconcile the pair.',
        steps: [
          { label: 'Step 1', text: 'Count $H_{2}O$ as two sigma bonds plus two lone pairs, giving $SN = 4$ and $AX_{2}E_{2}$ with tetrahedral electron geometry. Count $CO_{2}$ as two double-bond domains with no central lone pair, giving $SN = 2$ and $AX_{2}$.' },
          { label: 'Step 2', text: 'Apply the repulsion ladder $LP-LP > LP-BP > BP-BP$ to $H_{2}O$: two lone pairs squeeze the $H-O-H$ angle from $109.5^{\\circ}$ toward $104.5^{\\circ}$. No such compression acts in $CO_{2}$, where two equal double domains oppose at $180^{\\circ}$.' },
          { label: 'Step 3', text: '```text\n$H_{2}O$: $SN=4$, $AX_{2}E_{2}$, $sp^{3}$, bent, $\\mu \\neq 0$.\n$CO_{2}$: $SN=2$, $AX_{2}$, $sp$, linear, $\\mu = 0$.\n```\nHybrid tags follow the count: $sp^{3}$ for water and $sp$ for carbon dioxide.' }
        ],
        result: 'Lone-pair count separates the two: $H_{2}O$ is $AX_{2}E_{2}$ bent while $CO_{2}$ is $AX_{2}$ linear.'
      }
    ],
    keyTakeaways: [
      'Steric number $SN = \\sigma + LP$ fixes electron geometry, while $AX_{m}E_{n}$ naming gives the observed shape.',
      'Repulsion runs $LP-LP > LP-BP > BP-BP$, compressing $CH_{4}$ toward $NH_{3}$ toward $H_{2}O$.',
      'Hybrid tags run $sp$, $sp^{2}$, $sp^{3}$, $sp^{3}d$ and $sp^{3}d^{2}$ for $SN$ two through six.',
      'Symmetric shapes cancel bond dipoles to $\\mu = 0$, while bent and pyramidal shapes stay polar.'
    ],
    quiz: [
      // PYQ-pattern: VSEPR shape assignment drill
      {
        q: 'What are the shape and hybridization of $XeF_{4}$?',
        options: ['Tetrahedral and $sp^{3}$', 'Square planar and $sp^{3}d^{2}$ with two trans lone pairs', 'Seesaw and $sp^{3}d$', 'Linear and $sp$'],
        answer: 1,
        explanation: 'Step 1: Count four $Xe-F$ bonds plus two lone pairs for $SN = 6$ and $AX_{4}E_{2}$. Step 2: Trans lone pairs minimize contact in the octahedral family. Step 3: The observed shape is square planar with $sp^{3}d^{2}$ labelling.'
      },
      {
        q: 'Order the bond angles from largest to smallest: $CH_{4}$, $NH_{3}$, $H_{2}O$.',
        options: [`$H_{2}O > NH_{3} > CH_{4}$`, `$NH_{3} > H_{2}O > CH_{4}$`, `$CH_{4} > NH_{3} > H_{2}O$`, 'All three are equal at $109.5^{\\circ}$'],
        answer: 2,
        explanation: 'Step 1: Count lone pairs zero, one and two across the trio. Step 2: Apply $LP-BP$ compression growing with lone count. Step 3: Hence $109.5^{\\circ} > 107^{\\circ} > 104.5^{\\circ}$ in the stated order.'
      },
      {
        q: 'Where does the lone pair sit in $SF_{4}$ and what shape results?',
        options: ['Axial, giving tetrahedral shape', 'Equatorial, giving seesaw $AX_{4}E$ shape', 'Axial, giving square planar shape', 'It is delocalized, giving linear shape'],
        answer: 1,
        explanation: 'Step 1: Identify the $SN = 5$ trigonal bipyramid with distinct axial and equatorial sites. Step 2: Equatorial placement touches fewer neighbours at ninety degrees. Step 3: The result is the seesaw $AX_{4}E$ geometry.'
      },
      // PYQ-pattern: polarity from symmetry check
      {
        q: 'Which pair is correctly matched for molecular dipole?',
        options: ['$CO_{2}$ polar and $H_{2}O$ nonpolar', '$BF_{3}$ polar and $NH_{3}$ nonpolar', `$CO_{2}$ with $\\mu = 0$ and $H_{2}O$ with nonzero $\\mu$`, '$CCl_{4}$ polar and $CHCl_{3}$ nonpolar'],
        answer: 2,
        explanation: 'Step 1: Test each shape for inversion or high symmetry. Step 2: Linear $CO_{2}$ cancels while bent $H_{2}O$ cannot. Step 3: Therefore only the third pairing states both dipoles correctly.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.4
  {
    sectionId: 'chem-ch11-s4',
    readingTime: 9,
    intro: 'Lewis structures assign integer bonds, yet oxygen, boron and nitric oxide refuse to obey those integers in magnetism and bond length. Molecular orbital theory builds delocalized orbitals from atomic overlap and fills them by energy, spin pairing and degeneracy. This section uses that ladder to read bond order, magnetism and stability for diatomics through heteronuclear pairs.',
    objectives: [
      'Construct $N_{2}$-type and $O_{2}$-type orbital ladders and fill them to obtain bond order',
      'Predict paramagnetism and spin count from HOMO occupancy, including the $B_{2}$ and $O_{2}$ puzzles',
      'Compare bond length, dissociation energy and vibrational trends with computed bond order'
    ],
    concepts: [
      {
        term: 'LCAO and orbital ladder',
        kind: 'definition',
        statement: 'The **LCAO ladder** forms `sigma2s` and $\\sigma_{2s}$, $\\sigma_{2s}^{*}$, $\\pi_{2p}$ and $\\sigma_{2p}$ levels from $2s$ and $2p$ overlap, with ordering swapped for light versus heavy diatomics. Early members $Li_{2}$ through $N_{2}$ place $\\pi_{2p}$ below $\\sigma_{2p}$ from $s-p$ mixing, while $O_{2}$ and $F_{2}$ place $\\sigma_{2p}$ below $\\pi_{2p}^{*}$ in the normal order.',
        detail: 'Bonding levels concentrate density between nuclei while starred antibonding levels place a node there, so filling bonding strengthens and filling antibonding weakens the link. Core $1s$ levels cancel and are omitted from the valence count.'
      },
      {
        term: 'Bond order rule',
        kind: 'theorem',
        statement: 'The **bond-order rule** defines `BO` as $BO = \\frac{1}{2}(N_{b} - N_{a})$, where $N_{b}$ counts bonding and $N_{a}$ counts antibonding electrons. Thus $H_{2}$ with $(2,0)$ gives $BO = 1$, $He_{2}$ with $(2,2)$ gives $BO = 0$ and does not exist, and $N_{2}$ with $(10,4)$ gives $BO = 3$.',
        detail: 'Higher $BO$ shortens the bond and raises dissociation energy and stretch frequency together, so $N_{2}$ near $110$ pm and $945$ kJ per mol outranks $F_{2}$ near $142$ pm and $159$ kJ per mol. Fractional orders such as $0.5$ mark one-electron or three-electron bonds.'
      },
      {
        term: 'Magnetism from HOMO occupancy',
        kind: 'law',
        statement: 'The **spin-only moment** for atoms and the **molecular spin test** share the rule that unpaired count sets magnetism, with `n_unpaired` giving paramagnetism when nonzero and diamagnetism when zero. Thus $O_{2}$ with two unpaired $\\pi^{*}$ electrons is paramagnetic with triplet ground state, while $N_{2}$ with all levels filled is diamagnetic.',
        detail: 'The classic puzzle is $B_{2}$: a Lewis double bond would predict pairing, yet the $\\pi_{2p}$ HOMO holds two parallel electrons and $B_{2}$ is paramagnetic. Only the orbital ladder with degenerate $\\pi$ levels predicts that outcome.'
      },
      {
        term: 'Key diatomic configurations',
        kind: 'notation',
        statement: 'The **valence strings** for reference are `B2` as $(\\sigma_{2s})^{2}(\\sigma_{2s}^{*})^{2}(\\pi_{2p})^{2}$ with $BO = 1$, $C_{2}$ with $(\\pi_{2p})^{4}$ and $BO = 2$, $N_{2}$ with $(\\pi_{2p})^{4}(\\sigma_{2p})^{2}$ and $BO = 3$, and $O_{2}$ with $(\\sigma_{2p})^{2}(\\pi_{2p})^{4}(\\pi_{2p}^{*})^{2}$ and $BO = 2$. Fluorine $F_{2}$ extends to $(\\pi^{*})^{4}$ with $BO = 1$.',
        detail: 'Ionization can raise order: $O_{2}^{+}$ loses one $\\pi^{*}$ electron to reach $BO = 2.5$ with a shorter stronger bond, while $O_{2}^{-}$ gains one to fall to $BO = 1.5$. The same arithmetic gives $NO$ with $BO = 2.5$ and $CO$ with $BO = 3$.'
      },
      {
        term: 'Heteronuclear shift and polarity',
        kind: 'insight',
        statement: 'The **heteronuclear shift** skews orbitals toward the more electronegative atom, so `CO` keeps $BO = 3$ but concentrates the HOMO on carbon, which explains carbon-end donation to metals. Polarity grows with orbital energy mismatch, so $HF$ is far more ionic in character than $H_{2}$ while $NO$ stays nearly covalent.',
        detail: 'Photoelectron spectra confirm the ladder: $N_{2}$ ejects a $\\sigma_{2p}$ electron first and the ion shortens, while $O_{2}$ ejects a $\\pi^{*}$ electron first and the ion also shortens. Ionization potentials therefore zigzag rather than rising smoothly.'
      }
    ],
    figures: [
      {
        caption: 'LCAO builds $\\sigma_{2s}$, $\\sigma_{2s}^*$, $\\pi_{2p}$ and $\\sigma_{2p}$ levels with $BO = (N_b-N_a)/2$; $O_2$ with two unpaired $\\pi^*$ electrons is paramagnetic.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MO ladders for N2 diamagnetic and O2 paramagnetic"><text x="40" y="40" font-size="14" fill="currentColor" font-family="sans-serif">left N2 (dia, BO 3) | right O2 (para, BO 2)</text><line x1="120" y1="80" x2="120" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="80" x2="200" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="250" x2="200" y2="250" stroke="currentColor" stroke-width="3"/><text x="60" y="255" font-size="11" fill="currentColor" font-family="sans-serif">s2s</text><line x1="120" y1="220" x2="200" y2="220" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><text x="60" y="225" font-size="11" fill="currentColor" font-family="sans-serif">s2s*</text><line x1="120" y1="150" x2="200" y2="150" stroke="currentColor" stroke-width="3"/><line x1="120" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="3"/><text x="60" y="145" font-size="11" fill="currentColor" font-family="sans-serif">pi2p4 s2p2</text><text x="90" y="300" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">all paired</text><line x1="400" y1="80" x2="400" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="480" y1="80" x2="480" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="400" y1="250" x2="480" y2="250" stroke="currentColor" stroke-width="3"/><line x1="400" y1="220" x2="480" y2="220" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><line x1="400" y1="150" x2="480" y2="150" stroke="currentColor" stroke-width="3"/><line x1="400" y1="120" x2="480" y2="120" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><circle cx="425" cy="112" r="5" fill="currentColor" stroke="none"/><circle cx="455" cy="112" r="5" fill="currentColor" stroke="none"/><text x="370" y="300" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">two half pi*: para</text><text x="520" y="150" font-size="12" fill="currentColor" font-family="sans-serif">CO keeps BO 3</text><text x="520" y="172" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">but polar to C</text><text x="520" y="200" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">B2 BO1 para</text><text x="40" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">early p ordering swaps pi above sigma; heteronuclear skews to more EN atom</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Bond order and magnetism for oxygen ions',
        problem: 'Compute $BO$ and magnetism for $O_{2}$, $O_{2}^{+}$ and $O_{2}^{-}$, and order their bond lengths.',
        steps: [
          { label: 'Step 1', text: '```text\n$O_{2}$ valence count: $12$ electrons.\nFill: $(\\sigma_{2s})^{2}(\\sigma_{2s}^{*})^{2}(\\sigma_{2p})^{2}(\\pi_{2p})^{4}(\\pi_{2p}^{*})^{2}$.\n$N_{b} = 8$, $N_{a} = 4$ towards $BO = \\frac{1}{2}(8-4) = 2$, two unpaired.\n```\nUse $BO = \\frac{1}{2}(N_{b} - N_{a})$ with $N_{b} = 8$ and $N_{a} = 4$ for neutral $O_{2}$, giving $BO = 2$ and two parallel $\\pi^{*}$ electrons.' },
          { label: 'Step 2', text: 'Remove one $\\pi^{*}$ electron for $O_{2}^{+}$ to get $N_{a} = 3$ and $BO = 2.5$ with one unpaired electron, and add one for $O_{2}^{-}$ to get $N_{a} = 5$ and $BO = 1.5$ with one unpaired electron. All three stay paramagnetic but with two, one and one unpaired spins respectively.' },
          { label: 'Step 3', text: 'Order length inversely with $BO$ as $O_{2}^{+} < O_{2} < O_{2}^{-}$, with measured values near $112$ pm, $121$ pm and $128$ pm, and dissociation energy in the reverse walk.' }
        ],
        result: '$BO$ values $2.5$, $2$ and $1.5$ for $O_{2}^{+}$, $O_{2}$ and $O_{2}^{-}$ give length order $O_{2}^{+} < O_{2} < O_{2}^{-}$.'
      },
      {
        title: 'Why diboron is paramagnetic',
        problem: 'Lewis theory writes $B_{2}$ with all electrons paired, yet deflection in a magnetic field shows paramagnetism. Resolve the clash with the orbital ladder.',
        steps: [
          { label: 'Step 1', text: 'Count six valence electrons for $B_{2}$ and fill the light-molecule ladder where $\\pi_{2p}$ lies below $\\sigma_{2p}$: $(\\sigma_{2s})^{2}(\\sigma_{2s}^{*})^{2}(\\pi_{2p})^{2}$. The two $\\pi$ electrons occupy degenerate $\\pi_{x}$ and $\\pi_{y}$ singly with parallel spins by Hund rule.' },
          { label: 'Step 2', text: 'Compute $BO = \\frac{1}{2}(4 - 2) = 1$ with $N_{b} = 4$ and $N_{a} = 2$, so the bond is single but the molecule carries two unpaired spins. A Lewis double bond with pairing would wrongly predict diamagnetism.' },
          { label: 'Step 3', text: '```text\nLewis view: $B=B$ with $4$ paired bonding electrons towards diamagnetic (wrong).\nMO view: $(\\pi_{x})^{1}(\\pi_{y})^{1}$ parallel towards paramagnetic (correct).\n```\nThe same degenerate filling explains paramagnetic $O_{2}$ and diamagnetic $C_{2}$ versus $N_{2}$ patterns.' }
        ],
        result: '$B_{2}$ has $BO = 1$ with two parallel $\\pi$ electrons, hence paramagnetic, a result only the orbital ladder captures.'
      }
    ],
    keyTakeaways: [
      'Fill the $N_{2}$-type ladder for $Li_{2}$ through $N_{2}$ and the $O_{2}$-type ladder from $O_{2}$ onward to get $BO$.',
      'Bond order $BO = \\frac{1}{2}(N_{b} - N_{a})$ tracks length, energy and stretch frequency together.',
      '$B_{2}$ and $O_{2}$ are paramagnetic from degenerate half-filled $\\pi$ and $\\pi^{*}$ sets.',
      '$O_{2}^{+}$ at $BO = 2.5$ is shorter and stronger than $O_{2}$, while $O_{2}^{-}$ at $BO = 1.5$ is longer and weaker.'
    ],
    quiz: [
      // PYQ-pattern: bond-order arithmetic drill
      {
        q: 'Valence occupancy is $(\\sigma_{2s})^{2}(\\sigma_{2s}^{*})^{2}(\\pi_{2p})^{4}(\\sigma_{2p})^{2}$ with $(\\pi^{*})^{2}$. What are $BO$ and magnetism?',
        options: ['$BO = 1$, diamagnetic', '$BO = 2$, paramagnetic with two unpaired electrons', '$BO = 3$, diamagnetic', '$BO = 2.5$, paramagnetic with one unpaired electron'],
        answer: 1,
        explanation: 'Step 1: Sum bonding $N_{b} = 2 + 4 + 2 = 8$ and antibonding $N_{a} = 2 + 2 = 4$. Step 2: Apply $BO = \\frac{1}{2}(8 - 4) = 2$. Step 3: Two $\\pi^{*}$ electrons stay unpaired, so the species is paramagnetic like $O_{2}$.'
      },
      {
        q: 'Which length order is correct for oxygen species?',
        options: [`$O_{2}^{-} < O_{2} < O_{2}^{+}$`, `$O_{2} < O_{2}^{-} < O_{2}^{+}$`, `$O_{2}^{+} < O_{2} < O_{2}^{-}$`, 'All three are equal'],
        answer: 2,
        explanation: 'Step 1: Compute $BO$ values $2.5$, $2$ and $1.5$ for $O_{2}^{+}$, $O_{2}$ and $O_{2}^{-}$. Step 2: Length falls as $BO$ rises. Step 3: Hence the cation is shortest and the anion longest.'
      },
      {
        q: 'Why is $B_{2}$ paramagnetic?',
        options: ['It has an odd electron count', 'Its two highest electrons occupy degenerate $\\pi_{2p}$ orbitals singly with parallel spins', 'Boron is a metal and all metals are magnetic', 'It contains $d$ electrons'],
        answer: 1,
        explanation: 'Step 1: Fill the light ladder to $(\\pi_{2p})^{2}$ for six valence electrons. Step 2: Degenerate $\\pi_{x}$ and $\\pi_{y}$ take one electron each by Hund rule. Step 3: Two parallel spins give paramagnetism despite $BO = 1$.'
      },
      // PYQ-pattern: heteronuclear bond-order check
      {
        q: 'Carbon monoxide $CO$ has ten valence electrons like $N_{2}$. What are its $BO$ and donor behaviour?',
        options: ['$BO = 2$, donation through oxygen', '$BO = 3$, donation through carbon from a carbon-weighted HOMO', '$BO = 1$, no donation', '$BO = 0$, unstable'],
        answer: 1,
        explanation: 'Step 1: Fill ten electrons to $(\\pi)^{4}(\\sigma)^{2}$ for $BO = 3$. Step 2: Orbital skew concentrates the HOMO on carbon. Step 3: Hence $CO$ binds metals through carbon despite oxygen being more electronegative.'
      }
    ]
  }
]
