import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 34: Liquids and Intermolecular Forces
// Sections 34.1 - 34.4. Atkins Focus 14 Topics 14B-14C plus Mahan Chapter 4.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh34Content: SectionContent[] = [
  // ---------------------------------------------------------------- 34.1
  {
    sectionId: 'chem-ch34-s1',
    readingTime: 9,
    intro: 'Condensed phases exist because attractions outweigh thermal motion at short range. Dipole plus induced plus dispersion terms all fall as $1$ over $r^{6}$ in fluids while hydrogen bonds add directional strength. This section orders Keesom plus Debye plus London forces plus states hydrogen bond criteria with consequences.',
    objectives: [
      'Order Keesom dipole plus Debye induced plus London dispersion by $1$ over $r^{6}$ plus temperature dependence',
      'State hydrogen bond $A-H$ dots $B$ criteria with $N$ plus $O$ plus $F$ plus linear plus length evidence',
      'Rank strengths near $0.3$ plus $2$ plus $20$ $kJ$ over mol and link to boiling plus ice structure'
    ],
    concepts: [
      {
        term: 'Keesom rotating dipoles',
        kind: 'definition',
        statement: 'A **freely rotating dipoles attract weakly with temperature fall** `keesom` $V = C$ over $r^{6}$ with $C$ near $\\mu_{1}^{2}\\mu_{2}^{2}$ over $kT$ form and $0.3$ $kJ$ over mol scale.',
        detail: 'Atkins water $1.85$ D to amide $2.7$ D at $1.0$ nm gives minus $24$ J over mol at $298$ K. Fixed parallel dipoles fall as $1$ over $r^{3}$ near $2$ $kJ$ over mol while rotation averaging gives $1$ over $r^{6}$ with $1$ over $T$ factor.'
      },
      {
        term: 'Debye induction force',
        kind: 'theorem',
        statement: 'A **polar molecule induces neighbour dipole for steady attraction** `debye` $V$ with $\\mu^{2}\\alpha$ over $r^{6}$ independent of $T$ near $1$ $kJ$ over mol.',
        detail: '$HCl$ $1.0$ D at $0.30$ nm from benzene $\\alpha$ near $10$ times $10$ to $minus$ $30$ $m^{3}$ gives minus $0.83$ $kJ$ over mol. Induced dipole always follows permanent orientation so thermal averaging never cancels it unlike Keesom case.'
      },
      {
        term: 'London dispersion universality',
        kind: 'law',
        statement: 'A **instantaneous correlated dipoles attract all species** `london` $V$ with $I_{1}I_{2}$ over $I_{1} + I_{2}$ times $\\alpha_{1}\\alpha_{2}$ over $r^{6}$ near $2$ $kJ$ over mol.',
        detail: 'Two $CH_{4}$ at $0.30$ nm with $I$ near $700$ $kJ$ over mol give minus $4.9$ $kJ$ over mol dominating nonpolar cohesion. Polarizability grows with size plus small $HOMO$ to $LUMO$ gap as Atkins $R^{3}$ estimate shows.'
      },
      {
        term: 'Hydrogen bond criteria',
        kind: 'method',
        statement: 'A **donor to acceptor link needs electronegative pair plus lone pair** `hbond` $A-H$ dots $B$ with $A$ plus $B$ as $N$ plus $O$ plus $F$ and linear $A-H$ dots $B$.',
        detail: 'Strength near $20$ $kJ$ over mol with two per $H_{2}O$ matching $44$ $kJ$ over mol vaporisation. $O$ dots $O$ $270$ pm versus $280$ pm van der Waals plus $H$ dots $O$ $170$ pm versus $260$ pm proves contraction with near linear angle minimum.'
      },
      {
        term: 'Lennard Jones total curve',
        kind: 'insight',
        statement: 'A **repulsion plus $1$ over $r^{6}$ attraction gives well depth** `lennard-jones` $V = 4\\epsilon$ with $r_{0}$ over $r$ to $12$ minus $r_{0}$ over $r$ to $6$ form.',
        detail: '$N_{2}$ $\\epsilon$ over $k = 91.85$ K plus $r_{0} = 391.9$ pm gives minimum at $2$ to $1$ over $6$ $r_{0}$ near $439$ pm. Force $F = minus$ $dV$ over $dr$ peaks near $8$ pN guiding virial plus viscosity models.'
      }
    ],
    figures: [
      {
        caption: 'Keesom plus Debye plus London all $1$ over $r^{6}$ below hydrogen bond $20$ $kJ$ over mol with linear $A-H$ dots $B$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Van der Waals ladder and hydrogen bond criteria" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Keesom rotating</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">1 over r6, 1 over T</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Debye plus London</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">induced, dispersion</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">1 over r6, all species</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">H bond 20 kJ</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">N O F linear</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">LJ well balances repulsion plus attraction</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Dipole pair energy at one nanometre',
        problem: 'Water $\\mu = 1.85$ D near amide $\\mu = 2.7$ D at $r = 1.0$ nm plus $T = 298$ K. Estimate Keesom molar energy.',
        steps: [
          { label: 'Step 1', text: 'Convert:\n```text\n1 D = 3.336 over 10 to 30 C m\nmu1 = 6.17 over 10 to 30 C m\nmu2 = 9.01 over 10 to 30 C m\nr = 1.0 over 10 to 9 m\n```\nKeesom $V = C$ over $r^{6}$ with $C$ with $\\mu_{1}^{2}\\mu_{2}^{2}$ over $kT$ scaling.' },
          { label: 'Step 2', text: 'Insert Atkins worked value $V$ near minus $4.0$ times $10$ to $minus$ $23$ J per pair from $\\mu^{4}$ over $kT r^{6}$ form.' },
          { label: 'Step 3', text: 'Multiply by $6.022$ times $10$ to $23$ giving minus $24$ J over mol far below $20$ $kJ$ over mol hydrogen bond.' }
        ],
        result: 'Keesom near minus $24$ J over mol versus hydrogen bond $20$ $kJ$ over mol dominance.'
      },
      {
        title: 'Hydrogen bond count in water',
        problem: 'Water $\\Delta H_{vap} = 44$ $kJ$ over mol with about $20$ $kJ$ over mol per hydrogen bond. Estimate bonds broken per molecule on vaporisation.',
        steps: [
          { label: 'Step 1', text: 'Note liquid $H_{2}O$ makes about $2$ bonds per molecule on average from Raman plus infrared intact fractions.' },
          { label: 'Step 2', text: 'Divide $44$ by $20$ giving $2.2$ bonds worth of energy per molecule vaporised.' },
          { label: 'Step 3', text: 'Conclude vaporisation breaks roughly $2$ hydrogen bonds per $H_{2}O$ matching structural $90$ percent intact at melt to $20$ percent at boil.' }
        ],
        result: 'About $2$ bonds per $H_{2}O$ from $44$ $kJ$ over mol over $20$ $kJ$ over mol.'
      }
    ],
    keyTakeaways: [
      'Keesom $1$ over $r^{6}$ with $1$ over $T$ near $0.3$ $kJ$ over mol for rotating dipoles.',
      'Debye plus London $1$ over $r^{6}$ with London universal near $2$ $kJ$ over mol.',
      '$A-H$ dots $B$ with $N$ plus $O$ plus $F$ linear near $20$ $kJ$ over mol dominates.',
      'Lennard Jones $4\\epsilon$ well with $r_{0}$ over $r$ to $12$ minus $r_{0}$ over $r$ to $6$ sets repulsion plus attraction.'
    ],
    quiz: [
      {
        q: 'Rotating dipole energy scales as:',
        options: ['$1$ over $r^{6}$ with $1$ over $T$', '$1$ over $r$ only', 'Independent of $r$', '$r^{6}$ growth'],
        answer: 0,
        explanation: 'Step 1: Start $1$ over $r^{3}$ fixed energy. Step 2: Weight by Boltzmann $1$ over $kT$ orientation bias. Step 3: Get $1$ over $r^{6}$ with $1$ over $T$ near $24$ J over mol example.'
      },
      // PYQ-pattern: hydrogen bond criteria drill
      {
        q: 'Hydrogen bond needs:',
        options: ['Any $C-H$ plus $C$ pair', '$A-H$ dots $B$ with $N$ plus $O$ plus $F$ linear', 'No lone pair', 'Bent $90$ degrees always best'],
        answer: 1,
        explanation: 'Step 1: Require $A$ as $N$ plus $O$ plus $F$. Step 2: Require $B$ lone pair on $N$ plus $O$ plus $F$. Step 3: Keep $A-H$ dots $B$ linear with $170$ pm $H$ dots $O$ proof.'
      },
      {
        q: 'Strongest among $0.3$ plus $2$ plus $20$ $kJ$ over mol is:',
        options: ['Keesom $0.3$', 'Fixed dipole $2$', 'London $2$', 'Hydrogen bond $20$ $kJ$ over mol'],
        answer: 3,
        explanation: 'Step 1: List Keesom $0.3$ $kJ$ over mol. Step 2: List dipole plus London near $2$ $kJ$ over mol. Step 3: Select hydrogen bond $20$ $kJ$ over mol as tenfold larger.'
      },
      {
        q: 'Lennard Jones minimum lies at:',
        options: ['$r = 0$', '$r = r_{0}$ exactly', '$2$ to $1$ over $6$ $r_{0}$ with depth $\\epsilon$', 'Infinite $r$'],
        answer: 2,
        explanation: 'Step 1: Set $F = minus$ $dV$ over $dr = 0$. Step 2: Solve $r$ near $1.12$ $r_{0}$ as $2$ to $1$ over $6$ $r_{0}$. Step 3: Depth $\\epsilon$ with $N_{2}$ $91.85$ K example.'
      }
    ]
  },
  // ---------------------------------------------------------------- 34.2
  {
    sectionId: 'chem-ch34-s2',
    readingTime: 9,
    intro: 'Liquids flow plus form drops because molecules attract yet move past holes. Viscosity falls with heating while surface tension pulls area to minimum. This section links Poiseuille intuition plus Laplace pressure plus capillary rise $h = 2\\gamma$ over $\\rho g r$ with water $72.75$ data.',
    objectives: [
      'Contrast liquid viscosity fall on heating versus gas rise via hole jump picture',
      'Apply Laplace $\\Delta p = 2\\gamma$ over $r$ for drops plus $4\\gamma$ over $r$ for soap bubbles',
      'Compute capillary rise $h = 2\\gamma$ over $\\rho g r$ with $\\gamma = 72.75$ $mN$ over $m$ for water'
    ],
    concepts: [
      {
        term: 'Viscosity hole model',
        kind: 'definition',
        statement: 'A **holes let layers slip with thermal activation** `viscosity` $\\eta$ falls on heating for liquids while gases rise with $\\sqrt{T}$.',
        detail: 'Mahan holes appear plus move so few molecules shift at once unlike perfect crystal shear. Liquid $\\eta$ follows near exponential fall as jumps ease while gas $\\eta$ grows with mean speed plus mean free path.'
      },
      {
        term: 'Surface tension work',
        kind: 'law',
        statement: 'A **area work sets tension as energy over area** `surface-tension` $dw = \\gamma d\\sigma$ with $\\gamma = 72.75$ $mN$ over $m$ water plus $28.88$ benzene plus $472$ mercury.',
        detail: 'Atkins frame work $2\\gamma l h$ for two sides gives $0.15$ mJ for $5.0$ cm by $2.0$ cm water film. $dA = \\gamma d\\sigma$ drives contraction since $dA$ below $0$ spontaneous when $d\\sigma$ below $0$.'
      },
      {
        term: 'Laplace curved pressure',
        kind: 'theorem',
        statement: 'A **concave side pressure exceeds convex side** `laplace` $\\Delta p = 2\\gamma$ over $r$ cavity plus drop versus $4\\gamma$ over $r$ soap bubble two sides.',
        detail: 'Water drop $r = 200$ nm with $\\gamma = 72.75$ $mN$ over $m$ gives $\\Delta p$ near $728$ $kPa$ from $2\\gamma$ over $r$. Small cavity large curvature explains nucleation barrier plus $4\\pi r^{2}\\gamma$ cavity work with $0.091$ mJ for $1.0$ cm cavity.'
      },
      {
        term: 'Capillary rise balance',
        kind: 'method',
        statement: 'A **curvature suction balanced by hydrostatic column** `capillary` $h = 2\\gamma$ over $\\rho g r$ for zero contact angle hemispherical meniscus.',
        detail: 'Pressure below meniscus $p$ minus $2\\gamma$ over $r$ plus $\\rho g h$ equals $p$ outside giving rise formula. Narrow $r$ lifts higher with water glass adhesion spreading film up walls before curvature forms.'
      },
      {
        term: 'Temperature and surfactant fall',
        kind: 'insight',
        statement: 'A **heat plus surfactants lower tension and shape** `tension-fall` $\\gamma$ falls with $T$ as bulk exchange quickens plus drops flatten by gravity.',
        detail: 'Sphere minimises area to volume but gravity plus adhesion flatten large drops on surfaces. Surfactants crowd interface cutting $\\gamma$ enabling films plus emulsions with Marangoni healing of thin spots.'
      }
    ],
    figures: [
      {
        caption: 'Laplace $\\Delta p = 2\\gamma$ over $r$ to capillary $h = 2\\gamma$ over $\\rho g r$ with $\\gamma$ $72.75$ $mN$ over $m$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Laplace pressure and capillary rise" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">drop delta p</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">2 gamma over r</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">bubble 4 gamma</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">two sides double</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">cavity work 4 pi</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">capillary h rise</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">2 gamma over rho g r</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">water 72.75, narrow r lifts higher</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Laplace pressure in fine mist',
        problem: 'Water mist drop $r = 200$ nm has $\\gamma = 72.75$ $mN$ over $m$ at $20$ degrees C. Find $\\Delta p$ inside over outside.',
        steps: [
          { label: 'Step 1', text: 'Choose drop formula:\n```text\ndelta p = 2 gamma over r\ngamma = 72.75 mN over m = 72.75 over 10 to 3 N over m\nr = 200 nm = 200 over 10 to 9 m\n```\nOne surface drop uses $2\\gamma$ over $r$ not $4\\gamma$ over $r$.' },
          { label: 'Step 2', text: 'Numerator $2$ times $72.75$ times $10$ to $minus$ $3$ equals $145.5$ times $10$ to $minus$ $3$ $N$ over $m$.' },
          { label: 'Step 3', text: 'Divide by $200$ times $10$ to $minus$ $9$ giving $7.28$ times $10$ to $5$ Pa near $728$ $kPa$ excess.' }
        ],
        result: 'Excess near $728$ $kPa$ inside $200$ nm drop from $2\\gamma$ over $r$.'
      },
      {
        title: 'Capillary rise in glass tube',
        problem: 'Glass tube radius $r = 0.20$ mm dips in water $\\gamma = 72.75$ $mN$ over $m$ with $\\rho = 1000$ kg per $m^{3}$ plus $g = 9.81$ m per $s^{2}$. Find $h$.',
        steps: [
          { label: 'Step 1', text: 'Use $h = 2\\gamma$ over $\\rho g r$ for zero contact hemispherical meniscus.' },
          { label: 'Step 2', text: 'Numerator $145.5$ times $10$ to $minus$ $3$ over denominator $1000$ times $9.81$ times $0.20$ times $10$ to $minus$ $3$ equals $1.962$.' },
          { label: 'Step 3', text: 'Divide to $h$ near $0.074$ m near $7.4$ cm rise with narrower tube higher.' }
        ],
        result: 'Rise near $7.4$ cm for $0.20$ mm radius from $h = 2\\gamma$ over $\\rho g r$.'
      }
    ],
    keyTakeaways: [
      '$\\eta$ liquid falls on heating by hole jumps while gas $\\eta$ rises with $\\sqrt{T}$.',
      '$dw = \\gamma d\\sigma$ with $72.75$ water plus $28.88$ benzene plus $472$ mercury $mN$ over $m$.',
      '$\\Delta p = 2\\gamma$ over $r$ drop versus $4\\gamma$ over $r$ bubble with $728$ $kPa$ at $200$ nm.',
      '$h = 2\\gamma$ over $\\rho g r$ gives $7.4$ cm for $0.20$ mm water tube.'
    ],
    quiz: [
      {
        q: 'Soap bubble excess is:',
        options: ['$2\\gamma$ over $r$', '$4\\gamma$ over $r$ two sides', 'Zero', '$\\gamma r$'],
        answer: 1,
        explanation: 'Step 1: Count inner plus outer films as $2$ surfaces. Step 2: Double $2\\gamma$ over $r$ to $4\\gamma$ over $r$. Step 3: Use $145.5$ $mN$ over $m$ times $2$ over $r$ logic for $1.0$ cm work $0.091$ mJ scaled.'
      },
      // PYQ-pattern: capillary rise arithmetic drill
      {
        q: '$0.20$ mm water tube rise is near:',
        options: ['$7.4$ cm', '$0.74$ mm', '$74$ m', 'Zero'],
        answer: 0,
        explanation: 'Step 1: Numerator $145.5$ times $10$ to $minus$ $3$. Step 2: Denominator $1.962$. Step 3: Divide to $0.074$ m near $7.4$ cm.'
      },
      {
        q: 'Viscosity on heating liquid:',
        options: ['Rises always', 'Stays fixed', 'Falls by easier hole jumps', 'Becomes infinite'],
        answer: 2,
        explanation: 'Step 1: Picture holes plus neighbour cages. Step 2: Heat eases jumps over barriers. Step 3: Conclude $\\eta$ falls unlike gas $\\sqrt{T}$ rise.'
      },
      {
        q: '$200$ nm drop excess is near:',
        options: ['$7.28$ Pa', '$72.8$ Pa', '$728$ $kPa$', 'Zero'],
        answer: 3,
        explanation: 'Step 1: Write $2\\gamma$ over $r$ with $72.75$ $mN$ over $m$. Step 2: Numerator $145.5$ times $10$ to $minus$ $3$. Step 3: Divide by $200$ times $10$ to $minus$ $9$ giving $728$ $kPa$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 34.3
  {
    sectionId: 'chem-ch34-s3',
    readingTime: 10,
    intro: 'Vapour pressure measures escape tendency set by Boltzmann fraction above binding energy. Clausius Clapeyron $\\ln p$ slope gives $\\Delta H_{vap}$ while Trouton rule $\\Delta S_{vap}$ near $85$ J over mol K spots association. This section computes boiling shifts plus critical points with Mahan plus Atkins data.',
    objectives: [
      'Apply $\\ln p_{2}$ over $p_{1} = minus$ $\\Delta H_{vap}$ over $R$ times $1$ over $T_{2}$ minus $1$ over $T_{1}$',
      'Use Trouton $\\Delta S_{vap} = \\Delta H_{vap}$ over $T_{b}$ near $85$ J over mol K to flag $H$ bonding',
      'Locate triple plus critical points with $T_{c}$ plus $p_{c}$ plus supercritical meaning'
    ],
    concepts: [
      {
        term: 'Dynamic vapour equilibrium',
        kind: 'definition',
        statement: 'A **equal evaporation plus condensation rates fix vapour pressure** `vapour` $p_{vap}$ constant at fixed $T$ independent of volume plus amount.',
        detail: 'Mahan piston thought test shows expansion lowers condensation then evaporation restores same $p_{vap}$. Fraction above escape energy scales as $e$ to $minus$ $E$ over $kT$ so $p_{vap}$ rises steeply with $T$.'
      },
      {
        term: 'Clausius Clapeyron slope',
        kind: 'law',
        statement: 'A **log pressure slope gives enthalpy over gas constant** `clapeyron` $d\\ln p$ over $dT = \\Delta H_{vap}$ over $RT^{2}$ integrated to two point form.',
        detail: '$\\ln p_{2}$ over $p_{1} = minus$ $\\Delta H_{vap}$ over $R$ times $1$ over $T_{2}$ minus $1$ over $T_{1}$ yields $\\Delta H_{vap}$ from two $p$ plus $T$ pairs. Atkins $14C$ plus Mahan Fig $4.5$ curves cross when $\\Delta H_{vap}$ plus $T_{b}$ ordering differs.'
      },
      {
        term: 'Trouton entropy rule',
        kind: 'theorem',
        statement: 'A **vaporisation entropy clusters near ten point five $R$** `trouton` $\\Delta S_{vap} = \\Delta H_{vap}$ over $T_{b}$ near $85$ J over mol K for normal liquids.',
        detail: 'Water $109$ plus ethanol associated exceed $85$ by $H$ bond ordering while $Ar$ plus $CH_{4}$ sit near $85$. Mahan $e$ minimum versus $\\Delta H_{vap}$ Table $4.1$ parallelism supports $\\epsilon$ to boiling link with $O_{2}$ $90$ K plus $Xe$ $166$ K ladder.'
      },
      {
        term: 'Boiling versus evaporation',
        kind: 'method',
        statement: 'A **boiling when vapour pressure meets external pressure** `boiling` $T_{b}$ where $p_{vap} = p_{ext}$ with bubbles stable throughout bulk.',
        detail: 'Open vessel sweeps vapour so evaporation runs to dryness while closed vessel stops at $p_{vap}$. High $\\Delta H_{vap}$ liquids show low $p_{vap}$ at given $T$ plus high $T_{b}$ as $Xe$ $3.02$ versus $He$ $0.020$ $kcal$ over mol Table shows.'
      },
      {
        term: 'Triple and critical points',
        kind: 'insight',
        statement: 'A **triple meets three curves while critical ends liquid vapour line** `critical` water triple $0.0098$ degrees C plus $4.58$ mm versus $CO_{2}$ $5.1$ atm plus minus $56.6$ degrees C.',
        detail: 'Mahan water $OC$ ice water line slopes negative as pressure melts ice while $CO_{2}$ sublimes at $minus$ $78.1$ degrees C at $1$ atm needing $5.1$ atm to liquefy. Beyond $T_{c}$ plus $p_{c}$ meniscus vanishes to supercritical fluid with gas like diffusion plus liquid like density.'
      }
    ],
    figures: [
      {
        caption: 'Clausius Clapeyron $\\ln p$ slope plus Trouton $85$ J over mol K plus triple $0.0098$ degrees C and $CO_{2}$ $5.1$ atm.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vapour pressure boiling and critical points" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">ln p vs 1 over T</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">slope gives DHvap</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Trouton 85 check</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">DH over Tb flags H</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">water 109 high</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">triple vs critical</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">CO2 needs 5.1 atm</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">boil when p vap meets outside p</text></svg>`,
        afterConcept: 1
      }
    ],
    derivations: [
      {
        title: 'Clausius Clapeyron Equation for Vapour Pressure',
        statement: 'Derivation of $\\frac{d\\ln p}{dT} = \\frac{\\Delta H_{vap}}{RT^{2}}$ and $\\ln\\frac{p_{2}}{p_{1}} = -\\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_{2}} - \\frac{1}{T_{1}}\\right)$',
        prerequisites: [
          'Clapeyron slope $\\frac{dp}{dT} = \\frac{\\Delta S}{\\Delta V}$ for coexistence',
          'Entropy of vaporisation $\\Delta S = \\frac{\\Delta H_{vap}}{T}$',
          'Ideal gas volume $V = \\frac{RT}{p}$ for the vapour'
        ],
        steps: [
          {
            label: 'Step 1: Start from the Clapeyron coexistence slope',
            formula: '$$\\frac{dp}{dT} = \\frac{\\Delta S}{\\Delta V}$$',
            explanation: 'Two phases in equilibrium shift their coexistence pressure with temperature in proportion to entropy over volume change. This exact thermodynamic result follows from equality of chemical potentials along the boundary. It applies to melting and boiling alike before any approximation.'
          },
          {
            label: 'Step 2: Insert entropy and volume for vaporisation',
            formula: '$$\\Delta S = \\frac{\\Delta H_{vap}}{T} \\quad \\Delta V = \\frac{RT}{p}$$',
            explanation: 'Reversible heat over temperature gives $\\Delta H_{vap}$ over $T$ for the entropy jump at equilibrium. Liquid volume is neglected beside gas volume, and the vapour is treated as ideal with $V$ equal to $RT$ over $p$. These replacements specialize the exact slope to liquid vapour equilibrium.'
          },
          {
            label: 'Step 3: Simplify to the logarithmic derivative',
            formula: '$$\\frac{d\\ln p}{dT} = \\frac{\\Delta H_{vap}}{RT^{2}}$$',
            explanation: 'Substituting the two approximations cancels $T$ partly and leaves pressure only inside $d\\ln p$. The logarithmic form appears because $dp$ over $p$ equals $d\\ln p$ by calculus. Steep rise of vapour pressure with warming is now explicit through $\\Delta H_{vap}$ in the numerator.'
          },
          {
            label: 'Step 4: Integrate at constant enthalpy to two points',
            formula: '$$\\ln\\frac{p_{2}}{p_{1}} = -\\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_{2}} - \\frac{1}{T_{1}}\\right)$$',
            explanation: 'Treating $\\Delta H_{vap}$ as constant over a short range allows separation and definite integration from $T_{1}$ to $T_{2}$. The reciprocal temperature dependence emerges from integrating $T$ to the minus two power. Plotting $\\ln p$ against $1$ over $T$ then yields $\\Delta H_{vap}$ from the slope.'
          }
        ],
        result: 'Vapour $\\frac{d\\ln p}{dT} = \\frac{\\Delta H_{vap}}{RT^{2}}$ integrates to $\\ln\\frac{p_{2}}{p_{1}} = -\\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_{2}} - \\frac{1}{T_{1}}\\right)$ for enthalpy from two pressure points.'
      }
    ],
    examples: [
      {
        title: 'Enthalpy from two vapour points',
        problem: 'Water $p_{1} = 23.8$ mm at $T_{1} = 298$ K plus $p_{2} = 760$ mm at $T_{2} = 373$ K. Estimate $\\Delta H_{vap}$.',
        steps: [
          { label: 'Step 1', text: 'Write two point form:\n```text\nln(p2 over p1) = -DH over R x (1 over T2 - 1 over T1)\nln(760 over 23.8) = ln(31.9) = 3.46\n1 over T2 - 1 over T1 = -6.75 over 10 to 4 per K\n```\n$R = 8.314$ J over mol K with $T$ in kelvin.' },
          { label: 'Step 2', text: 'Solve $3.46 = minus$ $\\Delta H_{vap}$ over $8.314$ times minus $6.75$ times $10$ to $minus$ $4$.' },
          { label: 'Step 3', text: 'Get $\\Delta H_{vap}$ near $42600$ J over mol near $42.6$ $kJ$ over mol close to $44$ $kJ$ over mol accepted with $10.5$ $R$ Trouton check.' }
        ],
        result: 'Enthalpy near $43$ $kJ$ over mol from $3.46$ log ratio over $6.75$ times $10$ to $minus$ $4$.'
      },
      {
        title: 'Trouton flag for association',
        problem: 'Water $\\Delta H_{vap} = 40.7$ $kJ$ over mol at $T_{b} = 373$ K versus hexane $28.9$ $kJ$ over mol at $342$ K. Compute $\\Delta S_{vap}$ and flag.',
        steps: [
          { label: 'Step 1', text: 'Use $\\Delta S = \\Delta H$ over $T_{b}$ with $J$ over mol K units.' },
          { label: 'Step 2', text: 'Water $40700$ over $373$ near $109$ J over mol K well above $85$ signalling $H$ bond order.' },
          { label: 'Step 3', text: 'Hexane $28900$ over $342$ near $84.5$ J over mol K normal non associated matching $10.5$ $R$.' }
        ],
        result: 'Water $109$ J over mol K associated versus hexane $85$ J over mol K normal.'
      }
    ],
    keyTakeaways: [
      '$p_{vap}$ fixed at $T$ by equal rates with Boltzmann $e$ to $minus$ $E$ over $kT$ escape.',
      '$\\ln p_{2}$ over $p_{1}$ form gives $\\Delta H_{vap}$ near $43$ $kJ$ over mol for water points.',
      '$\\Delta S_{vap}$ near $85$ J over mol K normal versus $109$ water associated flag.',
      'Triple $0.0098$ degrees C $4.58$ mm versus $CO_{2}$ $5.1$ atm plus supercritical beyond $T_{c}$.'
    ],
    quiz: [
      {
        q: 'Clausius Clapeyron gives:',
        options: ['$\\Delta H_{vap}$ from $\\ln p$ versus $1$ over $T$ slope', 'No enthalpy info', '$T_{b} = 0$ always', '$p$ independent of $T$'],
        answer: 0,
        explanation: 'Step 1: Plot $\\ln p$ versus $1$ over $T$. Step 2: Slope equals minus $\\Delta H_{vap}$ over $R$. Step 3: Insert $3.46$ over $6.75$ times $10$ to $minus$ $4$ giving $42.6$ $kJ$ over mol.'
      },
      {
        q: 'Trouton normal value is near:',
        options: ['$8.5$ J over mol K', '$850$ J over mol K', '$85$ J over mol K', 'Zero'],
        answer: 2,
        explanation: 'Step 1: Divide $28900$ by $342$ giving $84.5$. Step 2: Compare to $10.5$ $R$ near $87$. Step 3: Assign $85$ J over mol K normal rule.'
      },
      // PYQ-pattern: Trouton association flag drill
      {
        q: 'Water $109$ J over mol K means:',
        options: ['Normal liquid', 'Associated $H$ bonded ordering', 'No bonds', 'Ideal gas'],
        answer: 1,
        explanation: 'Step 1: Compute $40700$ over $373$ near $109$. Step 2: Exceed $85$ by $24$ J over mol K. Step 3: Flag $H$ bond network ordering.'
      },
      {
        q: '$CO_{2}$ at $1$ atm:',
        options: ['Melts at $0$ degrees C', 'Boils at $100$ degrees C', 'Never vapours', 'Sublimes at minus $78.1$ degrees C needing $5.1$ atm to liquefy'],
        answer: 3,
        explanation: 'Step 1: Note triple $5.1$ atm minus $56.6$ degrees C. Step 2: Place $1$ atm below triple pressure. Step 3: Follow solid vapour line to minus $78.1$ degrees C sublimation.'
      }
    ]
  },
  // ---------------------------------------------------------------- 34.4
  {
    sectionId: 'chem-ch34-s4',
    readingTime: 7,
    intro: 'Some melts keep orientational order while flowing like liquids. Nematic plus smectic plus cholesteric mesophases sit between crystal and isotropic liquid. This preview links rod packing plus anisotropy to display switching with electric fields.',
    objectives: [
      'Order crystal plus smectic plus nematic plus isotropic by positional plus orientational order',
      'Relate rod plus disc shape plus dipole to mesophase stability and $T$ windows',
      'Explain twisted nematic display bright to dark switch by field plus polarisers'
    ],
    concepts: [
      {
        term: 'Order hierarchy ladder',
        kind: 'definition',
        statement: 'A **layers plus direction plus position fade stepwise** `order-ladder` crystal $3$D plus smectic $1$D layers plus nematic direction only plus isotropic none.',
        detail: 'Smectic keeps $1$D layer stacking with $2$D liquid layers while nematic keeps long axis alignment with centres random. Heating melts positions first then directions as diffuse $X$ ray plus sharp layer lines show.'
      },
      {
        term: 'Shape anisotropy driver',
        kind: 'theorem',
        statement: 'A **rods plus discs pack with orientational gain** `shape` long rods near $2$ nm by $0.5$ nm with polar $CN$ plus $OCH_{3}$ ends stabilise mesophases.',
        detail: 'Atkins macromolecule plus self assembly logic extends to small rods where excluded volume favours alignment. Dipole plus polarizability anisotropy $0.0067$ versus $0.0123$ $nm^{3}$ benzene style guides dielectric response.'
      },
      {
        term: 'Nematic director field',
        kind: 'law',
        statement: 'A **average axis called director maps distortions** `director` $n$ vector with splay plus twist plus bend elastic costs and defect lines.',
        detail: 'Surfaces anchor $n$ parallel or homeotropic while fields torque $\\Delta\\epsilon$ positive rods to field. Cholesteric adds helical twist with pitch selecting reflected colour by Bragg like $\\lambda = n p$ form.'
      },
      {
        term: 'Smectic layer types',
        kind: 'method',
        statement: 'A **layer tilt splits smectic $A$ versus $C$** `smectic` $SmA$ orthogonal layers versus $SmC$ tilted layers with ferroelectric chiral $SmC$ star.',
        detail: 'X ray layer spacing near molecular length $2$ nm proves monolayer versus bilayer packing. Viscosity jumps versus nematic as layers must slide with permeation for flow across planes.'
      },
      {
        term: 'Display switching idea',
        kind: 'insight',
        statement: 'A **twisted cell rotates polarisation until field unwinds** `display` $90$ degree twist bright between crossed polarisers versus field aligned dark.',
        detail: 'Off state helix guides light through second polariser while on state $5$ volt field aligns $n$ along field killing rotation. Millisecond response from rotational viscosity plus $10$ micron gap sets watch plus calculator use.'
      }
    ],
    figures: [
      {
        caption: 'Crystal to smectic to nematic to isotropic with $SmA$ versus $SmC$ and $90$ degree twisted display switch.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Liquid crystal order and display" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">crystal to smectic</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">layers remain</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">nematic director n</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">direction only</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">SmA vs SmC tilt</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">twist cell on off</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">90 deg bright dark</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">rods align, field unwinds helix</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Phase assignment from texture',
        problem: 'Melt shows threaded texture with $3$D fluidity plus no layer $X$ ray lines but strong orientational birefringence. Assign mesophase plus order left.',
        steps: [
          { label: 'Step 1', text: 'List ladder:\n```text\ncrystal 3D order\nsmectic 1D layers + direction\nnematic direction only\nisotropic none\n```\nLayer $X$ ray near $2$ nm present means smectic while absent means nematic.' },
          { label: 'Step 2', text: 'No layer lines plus fluid in all directions rules out smectic $SmA$ versus $SmC$.' },
          { label: 'Step 3', text: 'Birefringence proves director $n$ alignment so nematic with orientational order only.' }
        ],
        result: 'Nematic phase with direction order only and no layer position order.'
      },
      {
        title: 'Display voltage intuition',
        problem: 'Twisted cell gap $10$ micron with threshold near $1.0$ volt plus operating $5$ volt switches bright to dark. Explain field effect.',
        steps: [
          { label: 'Step 1', text: 'Off state $90$ degree helix rotates polarisation to pass crossed polarisers giving bright pixel.' },
          { label: 'Step 2', text: 'Above threshold dielectric torque overcomes elastic twist with $\\Delta\\epsilon$ positive rods aligning to field.' },
          { label: 'Step 3', text: 'At $5$ volt helix fully unwound so rotation lost and crossed polarisers block giving dark pixel.' }
        ],
        result: 'Field unwinds $90$ degree twist turning bright to dark near $5$ volt.'
      }
    ],
    keyTakeaways: [
      'Crystal $3$D plus smectic $1$D plus nematic direction only plus isotropic none.',
      'Rods near $2$ nm with polar ends plus anisotropy stabilise mesophases.',
      '$SmA$ orthogonal versus $SmC$ tilted with layer $X$ ray near $2$ nm.',
      '$90$ degree twist bright versus field aligned dark near $5$ volt switching.'
    ],
    quiz: [
      {
        q: 'Nematic keeps:',
        options: ['Full $3$D lattice', 'Direction only with random centres', 'No order at all', 'Only layers'],
        answer: 1,
        explanation: 'Step 1: Melt positions first on heating. Step 2: Keep long axis alignment $n$. Step 3: Lose layer $X$ ray near $2$ nm unlike smectic.'
      },
      // PYQ-pattern: smectic versus nematic texture drill
      {
        q: 'Smectic versus nematic $X$ ray is:',
        options: ['Both show no lines', 'Nematic shows layers only', 'Smectic shows layer lines near $2$ nm while nematic shows none', 'No difference'],
        answer: 2,
        explanation: 'Step 1: Probe $1$D layer period near $2$ nm. Step 2: Find sharp lines for smectic $SmA$ plus $SmC$. Step 3: Find diffuse only for nematic direction order.'
      },
      {
        q: 'Twisted cell off state is bright because:',
        options: ['Helix rotates polarisation through crossed polarisers', 'Field aligns all', 'No light enters', 'Polarisers parallel'],
        answer: 0,
        explanation: 'Step 1: Set $90$ degree surface anchoring. Step 2: Guide polarisation by helix. Step 3: Pass second crossed polariser giving bright.'
      },
      {
        q: 'On state dark at $5$ volt because:',
        options: ['Helix tightens only', 'Cell melts', 'Gap grows to $10$ cm', 'Field unwinds helix killing rotation so crossed block'],
        answer: 3,
        explanation: 'Step 1: Apply $5$ volt above $1.0$ volt threshold. Step 2: Align $\\Delta\\epsilon$ positive rods to field. Step 3: Lose $90$ degree rotation so crossed polarisers block.'
      }
    ]
  }
]
