import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse Physical Chemistry — Chemical and Ionic Equilibrium
// Chapter 5: sections 5.1 to 5.4. Master study content.
// Math is KaTeX via the RichText pipeline. Plain subscripts and arrows only.
// ============================================================================

export const chemCh05Content: SectionContent[] = [
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'chem-ch5-s1',
    readingTime: 9,
    intro: 'Reversible reactions settle where forward and reverse rates match, and the mass-action ratio at that point defines the equilibrium constant. This section builds Kc and Kp, converts between them and uses the reaction quotient to predict direction. Le Chatelier logic then forecasts how concentration, pressure and temperature shifts move the balance.',
    objectives: [
      'Write Kc and Kp expressions with correct exponent and state rules',
      'Convert between Kp and Kc with delta-ng RT power',
      'Predict shift direction from Q versus K and Le Chatelier factors'
    ],
    concepts: [
      {
        term: 'Mass-action constant Kc',
        kind: 'law',
        statement: 'At equilibrium the **mass-action ratio** `Kc expression` is constant at fixed $T$, for example $K_c = [NH_3]^2/[N_2][H_2]^3$ for $N_2 + 3H_2 \\to 2NH_3$. Pure solids and liquids are omitted with activity one.',
        detail: 'Coefficients become exponents; doubling an equation squares $K$. Units vary with $\\Delta n$ but direction logic never needs them.'
      },
      {
        term: 'Kp and Kc conversion',
        kind: 'theorem',
        statement: 'Gas partial pressures give **Kp** with `same exponents`, linked by $K_p = K_c (RT)^{\\Delta n}$ where $\\Delta n$ counts gas moles products minus reactants. For $N_2 + 3H_2 \\to 2NH_3$ we have $\\Delta n = -2$.',
        detail: 'When $\\Delta n = 0$ the two constants are numerically equal. $R$ must match pressure units: $0.0821$ for $atm$, $8.314$ for $kPa$ with matching $K_p$ units.'
      },
      {
        term: 'Reaction quotient Q',
        kind: 'method',
        statement: 'Away from equilibrium the same formula gives **reaction quotient** `Q`, and comparison decides motion: $Q < K$ moves forward, $Q > K$ moves backward and $Q = K$ rests. Catalysts never change $Q$, $K$ or the side.',
        detail: 'Example: $Q = 5$ against $K = 100$ means forward push until $Q$ climbs to $100$. Adding reactant lowers $Q$ and pulls forward; removing product does the same.'
      },
      {
        term: 'Le Chatelier shifts',
        kind: 'law',
        statement: 'A disturbed equilibrium **shifts to oppose** the `disturbance`: added reactant is consumed, raised pressure favours fewer gas moles and heating favours the endothermic side. Expression $K$ itself shifts only with $T$.',
        detail: 'For $N_2 + 3H_2 \\to 2NH_3$ high $P$ favours ammonia since $4$ gas moles become $2$. Exothermic forward means low $T$ raises $K$ but slows arrival; practice balances yield against rate.'
      },
      {
        term: 'Degree of dissociation',
        kind: 'insight',
        statement: 'Weak dissociation is tracked by **degree alpha** with `Ostwald form` $K = C\\alpha^2/(1-\\alpha)$ for $A \\to B + C$ type, simplifying to $K = C\\alpha^2$ when $\\alpha$ is small. Dimerization and $PCl_5$ splits follow the same template.',
        detail: 'For $PCl_5$ with $\\alpha = 0.20$ at $1$ mole in $V$ litres, $K_c = \\alpha^2/(1-\\alpha)V$ form applies. Trap: $\\alpha$ rises on dilution but $K$ stays fixed at fixed $T$.'
      }
    ],
    figures: [
      {
        caption: 'Mass action fixes $K_c = [NH_3]^2/[N_2][H_2]^3$ with $K_p = K_c(RT)^{\Delta n}$: $Q < K$ moves forward and pressure favours fewer gas moles.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concentration time curves flattening at equilibrium"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">approach to equilibrium: Q climbs to K</text><line x1="80" y1="280" x2="400" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="280" x2="80" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="50" y="70" font-size="13" fill="currentColor" font-family="sans-serif">c</text><text x="390" y="300" font-size="13" fill="currentColor" font-family="sans-serif">time</text><path d="M90,120 Q200,130 350,160" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="90" y="105" font-size="12" fill="currentColor" font-family="sans-serif">reactants fall</text><path d="M90,240 Q200,230 350,160" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/><text x="90" y="260" font-size="12" fill="currentColor" font-family="sans-serif">products rise</text><line x1="350" y1="160" x2="400" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><text x="300" y="145" font-size="12" fill="currentColor" font-family="sans-serif">plateau: Q = K</text><rect x="440" y="60" width="240" height="160" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="455" y="85" font-size="12" fill="currentColor" font-family="sans-serif">N2+3H2 to 2NH3</text><text x="455" y="110" font-size="12" fill="currentColor" font-family="sans-serif">Kp = Kc(RT)-2</text><text x="455" y="135" font-size="12" fill="currentColor" font-family="sans-serif">Q 25 below 50: go</text><text x="455" y="160" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">high P to 2 moles</text><text x="455" y="185" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">catalyst only faster</text><text x="40" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">solids omitted; doubling equation squares K; alpha rises on dilution</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Kp from Kc with gas moles',
        problem: 'For $N_2 + 3H_2 \\to 2NH_3$ with $K_c = 0.50$ at $500 K$, find $K_p$ using $R = 0.0821$.',
        steps: [
          { label: 'Step 1', text: 'Gas change $\\Delta n = 2 - 4 = -2$. Relation $K_p = K_c (RT)^{-2} = K_c/(RT)^2$. Compute $RT = 0.0821 \\times 500 = 41.05$.' },
          { label: 'Step 2', text: 'Insert the power:\n```txt\nRT = 0.0821 x 500 = 41.05\n(RT)^2 = 1685.1\nKp = 0.50/1685.1 = 2.97e-4\n```' },
          { label: 'Step 3', text: 'Thus $K_p = 0.50/1685.1 = 2.97 \\times 10^{-4}$. Fewer product gas moles make $K_p$ far smaller than $K_c$ at high $T$.' }
        ],
        result: 'Kp is about 2.97 × 10^-4 with matching pressure units.'
      },
      {
        title: 'Q versus K direction',
        problem: 'For $H_2 + I_2 \\to 2HI$ with $K_c = 50$, a vessel holds $[H_2] = 0.10$, $[I_2] = 0.10$ and $[HI] = 0.50$. Predict direction.',
        steps: [
          { label: 'Step 1', text: 'Compute $Q = [HI]^2/[H_2][I_2] = 0.25/0.010 = 25$. Compare $25 < 50$, so forward motion is needed.' },
          { label: 'Step 2', text: 'Record the comparison:\n```txt\nQ = 0.50^2/(0.10 x 0.10) = 0.25/0.010 = 25\nK = 50, Q < K -> net forward\nHI rises, H2 and I2 fall until Q = 50\n```' },
          { label: 'Step 3', text: 'Reaction moves right, raising $HI$ and lowering reactants until $Q$ reaches $50$. Removing $HI$ would repeat the same forward pull.' }
        ],
        result: 'Net forward reaction since Q = 25 lies below K = 50.'
      }
    ],
    keyTakeaways: [
      'Kc uses product over reactant powers with solids and liquids omitted.',
      'Kp = Kc(RT)Δn with Δn from gas moles only.',
      'Q < K moves forward and Q > K moves backward at fixed T.',
      'Pressure shifts gas-mole count while temperature alone resets K.'
    ],
    quiz: [
      // PYQ-pattern: Kp Kc conversion with negative gas-mole change
      {
        q: 'For $N_2+3H_2 \\to 2NH_3$ with $K_c = 0.50$ at $500 K$ ($RT = 41.05$), what is $K_p$?',
        options: [`$0.50$`, `$20.5$`, `$2.97 \\times 10^{-4}$`, `$845$`], answer: 2,
        explanation: 'Step 1: Gas change $2 - 4 = -2$. Step 2: Square $41.05^2 = 1685.1$. Step 3: Divide $0.50/1685.1 = 2.97 \\times 10^{-4}$. Step 4: Value $20.5$ multiplies by $RT$ instead of dividing twice.'
      },
      {
        q: 'For $H_2+I_2 \\to 2HI$ with $K = 50$ and $Q = 25$, what happens?',
        options: ['Net forward', 'Net backward', 'No change', 'K falls to 25'], answer: 0,
        explanation: 'Step 1: Compute $Q = 0.25/0.010 = 25$. Step 2: Compare $25 < 50$. Step 3: System raises numerator by making $HI$. Step 4: Backward motion would need $Q$ above $K$.'
      },
      {
        q: 'Raising pressure on $N_2+3H_2 \\to 2NH_3$ favours?',
        options: ['Reactants since 4 moles exceed 2', 'Both equally', 'Neither since Kc is fixed', 'Products since 2 moles are fewer than 4'], answer: 3,
        explanation: 'Step 1: Count $4$ gas moles left, $2$ right. Step 2: Pressure rise favours compact side. Step 3: Hence ammonia formation advances. Step 4: Fixed-$K$ claim confuses constant value with shifting position.'
      },
      {
        q: 'Catalyst added to an equilibrium mixture changes?',
        options: ['K value', 'Rate of arrival only', 'Q value instantly', 'Product yield at equilibrium'], answer: 1,
        explanation: 'Step 1: Catalyst lowers forward and reverse barriers equally. Step 2: Rates rise but ratio $K$ is unchanged. Step 3: Composition at rest is identical, reached sooner. Step 4: Yield-change options wrongly give kinetics thermodynamic power.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.2
  {
    sectionId: 'chem-ch5-s2',
    readingTime: 9,
    intro: 'Acids and bases can be viewed as proton donors, pair acceptors and solvent ions in one ladder. This section ranks the three definitions, computes pH for strong and weak systems and handles diprotic steps. Dilution and conjugate pairing explain why weak-acid pH climbs only half as fast as concentration falls.',
    objectives: [
      'Classify acid-base behaviour by Arrhenius, Bronsted and Lewis views',
      'Compute pH of strong, weak and polyprotic solutions',
      'Relate Ka, Kb and Kw through conjugate pairs'
    ],
    concepts: [
      {
        term: 'Three acid-base views',
        kind: 'definition',
        statement: 'Acids widen from **Arrhenius** `H+ in water` to Bronsted proton donors to `Lewis` pair acceptors as $H^+ + :NH_3 \\to NH_4^+$. Every Arrhenius acid is Bronsted, and every Bronsted acid is Lewis, but not conversely.',
        detail: 'Ammonia is Bronsted base and Lewis base but not Arrhenius base until it makes $OH^-$ in water. $BF_3$ is Lewis acid with no protons at all.'
      },
      {
        term: 'pH scale and water constant',
        kind: 'definition',
        statement: 'Acidity is logged as **pH** $pH = -\\log[H^+]$ with `pOH scale` $pOH = -\\log[OH^-]$ and $pH + pOH = 14$ at $25$ Celsius from $K_w = 1.0 \\times 10^{-14}$. Each unit is a tenfold ion change.',
        detail: 'Neutral is $7.00$ only at $25$ Celsius; hotter water has lower neutral pH since $K_w$ rises. Trap: negative pH is legal above $1 M$ strong acid.'
      },
      {
        term: 'Weak acid pH and Ostwald',
        kind: 'theorem',
        statement: 'Weak acids obey **Ostwald dilution** `alpha root` $\\alpha = \\sqrt{K_a/C}$ with $pH = 1/2(pK_a - \\log C)$. Halving concentration in $\\log$ units lifts pH by about $0.15$.',
        detail: 'For $K_a = 1.8 \\times 10^{-5}$ at $C = 0.10$: $pK_a = 4.74$, $pH = 1/2(4.74 + 1.00) = 2.87$. Formula needs $\\alpha$ below $0.10$; stronger dissociation needs the quadratic.'
      },
      {
        term: 'Conjugate pair relation',
        kind: 'theorem',
        statement: 'Conjugate pairs satisfy **Ka-Kb lock** $K_a \\times K_b = K_w$ with `pKa + pKb = 14`. Stronger acid means weaker conjugate base in exact proportion.',
        detail: 'Acetate from $K_a = 1.8 \\times 10^{-5}$ has $K_b = 5.6 \\times 10^{-10}$. Trap: comparing $K_a$ of one pair with $K_b$ of another without converting through $K_w$.'
      },
      {
        term: 'Polyprotic steps',
        kind: 'insight',
        statement: 'Diprotic acids lose protons **stepwise** with `Ka1 larger` $K_{a1} >> K_{a2}$, so first step sets pH and second sets anion ratios. Carbonic $K_{a1} = 4.3 \\times 10^{-7}$ dwarfs $K_{a2} = 5.6 \\times 10^{-11}$.',
        detail: 'For $0.10 M$ $H_2CO_3$, $[H^+] \\approx \\sqrt{K_{a1}C}$ while $[CO_3^{2-}] \\approx K_{a2}$ independent of $C$. Sulphuric first step is strong and second is moderate with $K_{a2} = 1.2 \\times 10^{-2}$.'
      }
    ],
    figures: [
      {
        caption: 'Acidity logs as $pH = -\log[H^+]$ with $pH + pOH = 14$: weak acids follow $pH = 1/2(pK_a - \log C)$ with $K_a K_b = K_w$ for conjugates.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="pH scale bar from acidic to basic"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">pH ladder 0 to 14 with conjugate lock</text><line x1="60" y1="150" x2="660" y2="150" stroke="currentColor" stroke-width="4"/><line x1="60" y1="135" x2="60" y2="165" stroke="currentColor" stroke-width="2.5"/><line x1="360" y1="135" x2="360" y2="165" stroke="currentColor" stroke-width="2.5"/><line x1="660" y1="135" x2="660" y2="165" stroke="currentColor" stroke-width="2.5"/><text x="50" y="190" font-size="12" fill="currentColor" font-family="sans-serif">0 acid</text><text x="345" y="190" font-size="12" fill="currentColor" font-family="sans-serif">7 neutral</text><text x="635" y="190" font-size="12" fill="currentColor" font-family="sans-serif">14 base</text><rect x="60" y="80" width="200" height="40" fill="currentColor" stroke="none" opacity="0.15"/><text x="70" y="105" font-size="12" fill="currentColor" font-family="sans-serif">strong: full split</text><rect x="400" y="80" width="200" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="410" y="105" font-size="12" fill="currentColor" font-family="sans-serif">weak: sqrt(Ka/C)</text><text x="60" y="230" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">acetic 0.10 M: pKa 4.74 gives pH 2.87, alpha 0.013</text><text x="60" y="255" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">Ka x Kb = Kw; pKa + pKb = 14; diprotic Ka1 &gt;&gt; Ka2</text><text x="60" y="280" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">H2SO4 first full, second Ka2 0.012 gives pH 1.84 at 0.010 M</text><text x="60" y="310" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">each unit is tenfold; negative pH legal above 1 M</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Weak-acid pH by half-log rule',
        problem: 'Find pH of $0.10 M$ acetic acid with $K_a = 1.8 \\times 10^{-5}$.',
        steps: [
          { label: 'Step 1', text: 'Compute $pK_a = -\\log(1.8 \\times 10^{-5}) = 4.74$. Then $pH = 1/2(pK_a - \\log C)$ with $-\\log(0.10) = 1.00$.' },
          { label: 'Step 2', text: 'Insert the logs:\n```txt\npKa = 4.74, -log C = 1.00\npH = 1/2 x (4.74 + 1.00) = 5.74/2 = 2.87\nalpha = sqrt(1.8e-5/0.10) = 0.0134\n```' },
          { label: 'Step 3', text: 'Thus $pH = 5.74/2 = 2.87$ with $\\alpha = \\sqrt{1.8 \\times 10^{-5}/0.10} = 0.0134$, validating the small-alpha shortcut.' }
        ],
        result: 'pH is 2.87 with about 1.34 percent dissociation.'
      },
      {
        title: 'Strong diprotic pH',
        problem: 'Find pH of $0.010 M$ $H_2SO_4$ treating first step full and second with $K_{a2} = 1.2 \\times 10^{-2}$.',
        steps: [
          { label: 'Step 1', text: 'First step gives $0.010 M$ $H^+$ and $0.010 M$ $HSO_4^-$. Second step dissociates $x$ with $K = x(0.010 + x)/(0.010 - x) = 0.012$.' },
          { label: 'Step 2', text: 'Solve the quadratic:\n```txt\nx(0.010+x)/(0.010-x) = 0.012\nx^2 + 0.022x - 0.00012 = 0\nx = 0.0045 M\n[H+] = 0.010 + 0.0045 = 0.0145, pH = 1.84\n```' },
          { label: 'Step 3', text: 'Total $[H^+] = 0.0145$, so $pH = -\\log(0.0145) = 1.84$. Ignoring the second step would give $2.00$, understating acidity.' }
        ],
        result: 'pH is 1.84 with second-step contribution included.'
      }
    ],
    keyTakeaways: [
      'Lewis contains Bronsted which contains Arrhenius in scope.',
      'pH + pOH = 14 at 25 Celsius with tenfold steps per unit.',
      'Weak-acid pH is half of pKa minus log C with small-alpha check.',
      'Diprotic first step sets pH while second sets anion levels.'
    ],
    quiz: [
      // PYQ-pattern: weak-acid pH from Ka and concentration
      {
        q: '$0.10 M$ acetic acid has $K_a = 1.8 \\times 10^{-5}$. What is its pH?',
        options: [`$1.00$`, `$2.87$`, `$4.74$`, `$5.74$`], answer: 1,
        explanation: 'Step 1: $pK_a = 4.74$. Step 2: $-\\log(0.10) = 1.00$. Step 3: Sum $4.74 + 1.00 = 5.74$, half $= 2.87$. Step 4: Value $4.74$ is $pK_a$ itself, the half-neutralized point, not this pH.'
      },
      {
        q: 'Conjugate base of acid with $K_a = 1.8 \\times 10^{-5}$ has Kb?',
        options: [`$1.8 \\times 10^{-5}$`, `$1.8 \\times 10^{9}$`, `$1.0 \\times 10^{-14}$`, `$5.6 \\times 10^{-10}$`], answer: 3,
        explanation: 'Step 1: Use $K_b = K_w/K_a$. Step 2: Insert $1.0 \\times 10^{-14}/1.8 \\times 10^{-5}$. Step 3: Ratio $= 5.56 \\times 10^{-10}$. Step 4: Copying $K_a$ ignores the inverse lock through $K_w$.'
      },
      {
        q: 'Diluting a weak acid $100$-fold changes pH by?',
        options: ['+$1.0$', '+$2.0$', '+$0.50$', '+$0.15$'], answer: 0,
        explanation: 'Step 1: Rule $pH = 1/2(pK_a - \\log C)$. Step 2: Shift $-\\log C$ rises by $2.00$ for $100$-fold. Step 3: Half gives $+1.00$ pH rise. Step 4: Rise $+2.0$ belongs to strong acids with full $\\log$ slope.'
      },
      {
        q: 'For carbonic acid $K_{a1} = 4.3 \\times 10^{-7}$, $K_{a2} = 5.6 \\times 10^{-11}$, what sets $[CO_3^{2-}]$?',
        options: ['Total concentration C', 'About $K_{a1}$ alone', 'About $K_{a2}$ alone', 'About $K_w$'], answer: 2,
        explanation: 'Step 1: First step gives $[H^+] \\approx [HCO_3^-]$. Step 2: Second expression $K_{a2} = [H^+][CO_3^{2-}]/[HCO_3^-]$. Step 3: Cancel equal terms leaving $[CO_3^{2-}] \\approx K_{a2} = 5.6 \\times 10^{-11}$. Step 4: Total-$C$ option belongs to strong diprotic first steps.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.3
  {
    sectionId: 'chem-ch5-s3',
    readingTime: 9,
    intro: 'Buffers hold pH against added acid or base and salts of weak partners pull water into hydrolysis. This section states Henderson-Hasselbalch with its validity window, quantifies capacity and dilution response, and derives hydrolysis constants and pH for four salt families. Choosing the right salt-acid pair is the practical payoff.',
    objectives: [
      'Compute buffer pH and ratio shifts with Henderson-Hasselbalch',
      'Evaluate buffer capacity and dilution behaviour',
      'Predict salt-hydrolysis pH by family with Kh relations'
    ],
    concepts: [
      {
        term: 'Henderson-Hasselbalch',
        kind: 'theorem',
        statement: 'Acidic buffers follow **Henderson-Hasselbalch** $pH = pK_a + \\log([salt]/[acid])$ with `base-to-acid` ratio inside the log. Basic form is $pOH = pK_b + \\log([salt]/[base])$.',
        detail: 'Works when both partners exceed $100 K_a$ levels and ratio sits within $1/10$ to $10/1$, keeping pH within one unit of $pK_a$. At ratio one, $pH = pK_a$ exactly.'
      },
      {
        term: 'Capacity and dilution',
        kind: 'insight',
        statement: 'Buffer **capacity** peaks at `ratio one` and grows with total concentration, breaking when strong load exceeds either reserve. Dilution leaves the `ratio` unchanged so $pH$ holds for concentrated buffers.',
        detail: 'Adding $0.01 mol$ base to $1 L$ of $1.0 M$ pair shifts ratio slightly; same load on $0.01 M$ pair exhausts acid. Trap: diluting tenfold keeps $pH$ but slashes capacity tenfold.'
      },
      {
        term: 'Hydrolysis families',
        kind: 'definition',
        statement: 'Salt fate splits four ways: **strong-strong** stays `neutral`, strong-acid weak-base turns acidic, weak-acid strong-base turns basic and `weak-weak` follows $pH = 1/2(pK_w + pK_a - pK_b)$.',
        detail: 'Examples: $NaCl$ neutral near $7.00$, $NH_4Cl$ acidic near $5.3$, $CH_3COONa$ basic near $8.9$. Weak-weak pH ignores concentration but nature follows the stronger partner.'
      },
      {
        term: 'Hydrolysis constants',
        kind: 'theorem',
        statement: 'Hydrolysis constants mirror conjugates: **acidic salts** use `K_h = K_w/K_b`, basic salts $K_h = K_w/K_a$ and weak-weak $K_h = K_w/K_aK_b$. Degree $h = \\sqrt{K_h/C}$ for single-weak families.',
        detail: 'For acetate $K_h = 1.0 \\times 10^{-14}/1.8 \\times 10^{-5} = 5.6 \\times 10^{-10}$. Smaller $C$ raises $h$ but $pH$ formulas absorb the shift exactly.'
      },
      {
        term: 'Salt pH formulae',
        kind: 'method',
        statement: 'Working pH rules are **weak-acid strong-base** $pH = 1/2(pK_w + pK_a + \\log C)$ with `plus log C`, weak-base strong-acid $pH = 1/2(pK_w - pK_b - \\log C)$ and weak-weak as above. Check $h$ below $0.10$ for validity.',
        detail: 'For $0.10 M$ acetate: $pH = 1/2(14 + 4.74 - 1.00) = 8.87$. Swapping plus and minus $\\log C$ terms is the routine sign slip.'
      }
    ],
    figures: [
      {
        caption: 'Buffers hold $pH = pK_a + \log([salt]/[acid])$ within one unit of $pK_a$: dilution keeps the ratio so $pH$ holds while capacity falls.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Titration curve with flat buffer region"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">buffer plateau resists pH change</text><line x1="80" y1="280" x2="640" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="280" x2="80" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="50" y="70" font-size="13" fill="currentColor" font-family="sans-serif">pH</text><text x="620" y="300" font-size="12" fill="currentColor" font-family="sans-serif">base added</text><path d="M90,120 Q200,125 300,140 Q400,155 450,230 Q480,280 600,270" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="200" y1="132" x2="400" y2="152" stroke="currentColor" stroke-width="3" opacity="0.3"/><text x="230" y="115" font-size="12" fill="currentColor" font-family="sans-serif">flat buffer zone</text><text x="300" y="170" font-size="12" fill="currentColor" font-family="sans-serif">pH = pKa + log ratio</text><circle cx="300" cy="140" r="5" fill="currentColor" stroke="none"/><text x="310" y="135" font-size="11" fill="currentColor" font-family="sans-serif">ratio 1: max hold</text><text x="450" y="250" font-size="11" fill="currentColor" font-family="sans-serif" opacity="0.8">jump at end</text><text x="40" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">acetate 0.10 M salt hydrolyses to pH 8.87; weak-weak pH ignores C</text></svg>`,
        afterConcept: 2,
      },
    ],
    derivations: [
      {
        title: 'Henderson-Hasselbalch Equation from Acid Dissociation',
        statement: 'Derivation of buffer $pH = pK_a + \\log\\frac{[A^-]}{[HA]}$ for a weak acid $HA$ with conjugate base $A^-$',
        prerequisites: [
          'Acid dissociation constant $K_a$ and $pK_a$ scale',
          'Logarithm rules for ratios and powers',
          'Conservation of conjugate pair $HA$ and $A^-$ in a buffer'
        ],
        steps: [
          {
            label: 'Step 1: Write the acid dissociation equilibrium',
            formula: '$$HA \\to H^+ + A^- \\quad K_a = \\frac{[H^+][A^-]}{[HA]}$$',
            explanation: 'A weak acid donates a proton to water while its conjugate base remains in solution, so both species appear together in the equilibrium law. Writing the mass action expression makes the link between proton concentration and the ratio of base to acid explicit. This starting point is chosen because all buffer behavior flows from this single equilibrium.'
          },
          {
            label: 'Step 2: Solve the equilibrium law for proton concentration',
            formula: '$$[H^+] = K_a \\frac{[HA]}{[A^-]}$$',
            explanation: 'Rearranging isolates the proton concentration on one side so that acidity is seen as the constant times the acid to base ratio. This form shows directly why adding conjugate base suppresses protons while adding acid raises them. The algebra is justified because $K_a$ is fixed at fixed temperature, leaving only the ratio as variable.'
          },
          {
            label: 'Step 3: Take the negative logarithm of both sides',
            formula: '$$-\\log[H^+] = -\\log K_a - \\log\\frac{[HA]}{[A^-]}$$',
            explanation: 'Logarithms convert the product and quotient into sums that match the definitions of $pH$ and $pK_a$. The negative sign is used because acidity scales are defined as negative logs to give positive working numbers. This step is the bridge from multiplicative mass action to additive pH language.'
          },
          {
            label: 'Step 4: Invert the ratio to base over acid form',
            formula: '$$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$$',
            explanation: 'Flipping the acid over base quotient changes the sign of its log and yields the familiar base over acid sum. This final arrangement is preferred because buffers are described by how much base reserve exists relative to acid. When the two concentrations match, the log vanishes and $pH$ equals $pK_a$, which explains maximum capacity at unit ratio.'
          }
        ],
        result: 'Buffer $pH = pK_a + \\log\\frac{[A^-]}{[HA]}$ with basic analogue $pOH = pK_b + \\log\\frac{[BH^+]}{[B]}$, valid when both partners are concentrated and the ratio lies between $0.1$ and $10$.'
      }
    ],
    examples: [
      {
        title: 'Buffer ratio for target pH',
        problem: 'Acetate buffer needs $pH = 5.04$ with $pK_a = 4.74$. Find $[salt]/[acid]$ and state capacity peak.',
        steps: [
          { label: 'Step 1', text: 'Use $5.04 = 4.74 + \\log r$, so $\\log r = 0.30$. Hence $r = 10^{0.30} = 2.0$.' },
          { label: 'Step 2', text: 'Convert the log:\n```txt\nlog r = 5.04 - 4.74 = 0.30\nr = 10^0.30 = 2.00\nat r = 1, pH = pKa = 4.74, capacity max\n```' },
          { label: 'Step 3', text: 'Ratio $2.0$ gives target; capacity is highest at $r = 1$ where $pH = 4.74$. Moving to $2.0$ trades some base reserve for higher pH.' }
        ],
        result: 'Salt-to-acid ratio is 2.0 for pH 5.04.'
      },
      {
        title: 'pH of sodium acetate solution',
        problem: 'Find pH of $0.10 M$ $CH_3COONa$ with $K_a = 1.8 \\times 10^{-5}$ ($pK_a = 4.74$).',
        steps: [
          { label: 'Step 1', text: 'Weak-acid strong-base rule: $pH = 1/2(pK_w + pK_a + \\log C)$. Here $\\log(0.10) = -1.00$.' },
          { label: 'Step 2', text: 'Insert the values:\n```txt\npH = 1/2 x (14 + 4.74 + log 0.10)\npH = 1/2 x (14 + 4.74 - 1.00) = 17.74/2 = 8.87\nKh = Kw/Ka = 5.6e-10, h = sqrt(Kh/C)\n```' },
          { label: 'Step 3', text: 'Thus $pH = 17.74/2 = 8.87$. Hydrolysis $K_h = 5.6 \\times 10^{-10}$ gives $h = \\sqrt{5.6 \\times 10^{-10}/0.10} = 7.5 \\times 10^{-5}$, confirming dilute hydrolysis.' }
        ],
        result: 'Solution pH is 8.87, basic as expected for acetate.'
      }
    ],
    keyTakeaways: [
      'Buffer pH is pKa plus log salt over acid within one unit window.',
      'Capacity peaks at ratio one and falls on dilution despite steady pH.',
      'Salt families split neutral, acidic, basic and weak-weak by parent strength.',
      'Hydrolysis Kh inverts the surviving conjugate constant through Kw.'
    ],
    quiz: [
      // PYQ-pattern: Henderson-Hasselbalch ratio from target pH
      {
        q: 'Acetate $pK_a = 4.74$ buffer targets $pH = 5.04$. What is $[salt]/[acid]$?',
        options: [`$2.0$`, `$1.0$`, `$0.50$`, `$10.0$`], answer: 0,
        explanation: 'Step 1: Gap $5.04 - 4.74 = 0.30$. Step 2: Ratio $= 10^{0.30}$. Step 3: Value $= 2.00$. Step 4: Ratio $0.50$ gives $pH = 4.44$ on the acid side.'
      },
      {
        q: 'Diluting an acetate buffer tenfold changes pH and capacity how?',
        options: ['pH rises one unit, capacity rises', 'pH falls one unit, capacity steady', 'pH unchanged, capacity falls tenfold', 'Both unchanged'], answer: 2,
        explanation: 'Step 1: Ratio $[salt]/[acid]$ is unchanged by equal dilution. Step 2: Hence $pH = pK_a + \\log r$ holds steady. Step 3: Reserves drop tenfold, so load tolerance drops. Step 4: Rise-one-unit logic belongs to weak-acid dilution, not buffers.'
      },
      {
        q: '$0.10 M$ $CH_3COONa$ ($pK_a = 4.74$) has pH?',
        options: [`$5.13$`, `$8.87$`, `$7.00$`, `$11.13$`], answer: 1,
        explanation: 'Step 1: Sum $14 + 4.74 + \\log(0.10) = 14 + 4.74 - 1.00 = 17.74$. Step 2: Half $17.74/2 = 8.87$. Step 3: Basic side confirms weak-acid strong-base family. Step 4: Value $5.13$ swaps the $\\log C$ sign.'
      },
      {
        q: '$NH_4Cl$ solution ($K_b$ of ammonia $1.8 \\times 10^{-5}$) at $0.10 M$ is?',
        options: ['Neutral $7.00$', 'Strongly acidic near $1.00$', 'Basic near $8.87$', 'Acidic near $5.13$'], answer: 3,
        explanation: 'Step 1: Family is strong-acid weak-base, so pH lies below $7$. Step 2: Conjugate $pK_a = 14 - 4.74 = 9.26$ from $K_a = K_w/K_b$. Step 3: Use $pH = 1/2(9.26 - \\log(0.10)) = 1/2(9.26 + 1.00) = 10.26/2 = 5.13$. Step 4: Basic value $8.87$ belongs to the acetate family, not ammonium.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.4
  {
    sectionId: 'chem-ch5-s4',
    readingTime: 9,
    intro: 'Sparingly soluble salts dissolve just enough to satisfy a solubility product that predicts precipitation. This section writes Ksp with correct powers, converts between solubility and Ksp, and applies the common-ion cut. Selective precipitation order and Qsp versus Ksp tests complete the separation toolkit.',
    objectives: [
      'Write Ksp expressions and convert between solubility and Ksp',
      'Apply common-ion suppression to solubility calculations',
      'Order selective precipitation and test Qsp against Ksp'
    ],
    concepts: [
      {
        term: 'Solubility product Ksp',
        kind: 'law',
        statement: 'For **M_mX_n** dissolving as `M_mX_n \\to mM + nX`, product is $K_{sp} = [M]^m[X]^n$ with powers from subscripts. For $AgCl$ it is $[Ag^+][Cl^-]$; for $PbI_2$ it is $[Pb^{2+}][I^-]^2$.',
        detail: 'Pure solid is omitted. $K_{sp}$ is thermodynamic at fixed $T$; grinding or stirring speeds arrival but never changes the value.'
      },
      {
        term: 's to Ksp conversion',
        kind: 'method',
        statement: 'Molar **solubility s** in `mol per L` feeds $K_{sp}$ directly: $AgCl$ gives $K_{sp} = s^2$, $PbI_2$ gives $K_{sp} = 4s^3$ and $M_mX_n$ gives $K_{sp} = m^m n^n s^{m+n}$. Reverse roots recover $s$.',
        detail: 'Example $PbI_2$ with $s = 1.3 \\times 10^{-3}$: $K_{sp} = 4(1.3 \\times 10^{-3})^3 = 8.8 \\times 10^{-9}$. Forgetting the $4$ is the standard power slip.'
      },
      {
        term: 'Common-ion suppression',
        kind: 'theorem',
        statement: 'A shared ion **cuts solubility** by mass action: in `C mol per L` of common ion, $s$ solves $K_{sp} = s(C+s)^n$ approximated as $K_{sp} = sC^n$ when $C$ dwarfs $s$. Solubility falls nearly inversely with $C^n$.',
        detail: '$AgCl$ in $0.10 M$ $NaCl$: $s = K_{sp}/0.10 = 1.8 \\times 10^{-9}$ versus $1.34 \\times 10^{-5}$ in water. Approximation needs $s$ below $5$ percent of $C$.'
      },
      {
        term: 'Qsp precipitation test',
        kind: 'method',
        statement: 'Ion product **Qsp** in the same `power form` decides fate: $Q_{sp} < K_{sp}$ stays clear, $Q_{sp} = K_{sp}$ just saturates and $Q_{sp} > K_{sp}$ precipitates until equality returns. Mixing dilutes each ion first.',
        detail: 'Mixing equal volumes halves each stated molarity before $Q_{sp}$. Trap: comparing $Q_{sp}$ built from initial bottles without halving overstates precipitation.'
      },
      {
        term: 'Selective order',
        kind: 'insight',
        statement: 'When one anion hits two cations, the salt needing **lower anion level** falls first: required $[anion] = (K_{sp}/[cation]^m)^{1/n}$ with `smaller threshold` precipitating earlier. Sulphides separate by staged $H_2S$ control for this reason.',
        detail: 'With $0.010 M$ each of $Cl^-$ and $I^-$ titrated by $Ag^+$: $AgI$ ($K_{sp} = 8.3 \\times 10^{-17}$) needs $8.3 \\times 10^{-15} M$ while $AgCl$ needs $1.8 \\times 10^{-8} M$, so iodide drops first.'
      }
    ],
    figures: [
      {
        caption: 'Solubility products raise ions to subscript powers as $K_{sp} = [M]^m[X]^n$: $PbI_2$ gives $4s^3$ near $8.8 \times 10^{-9}$ while common ions cut $s$ to $K_{sp}/C^n$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Beaker with precipitate and dissolved ions"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">saturated salt: solid balances dissolved ions</text><path d="M100,100 L100,280 L300,280 L300,100" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="100" y="200" width="200" height="80" fill="currentColor" stroke="none" opacity="0.1"/><line x1="100" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><text x="310" y="205" font-size="12" fill="currentColor" font-family="sans-serif">solution</text><polygon points="150,260 170,260 160,240" fill="currentColor" stroke="none" opacity="0.6"/><polygon points="220,265 240,265 230,245" fill="currentColor" stroke="none" opacity="0.6"/><text x="120" y="295" font-size="12" fill="currentColor" font-family="sans-serif">solid PbI2</text><circle cx="150" cy="150" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="220" cy="140" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="180" cy="175" r="4" fill="currentColor" stroke="none"/><text x="310" y="130" font-size="12" fill="currentColor" font-family="sans-serif">Pb2+ = s</text><text x="310" y="150" font-size="12" fill="currentColor" font-family="sans-serif">I- = 2s</text><text x="310" y="170" font-size="12" fill="currentColor" font-family="sans-serif">Ksp = 4s3</text><rect x="400" y="90" width="280" height="190" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="415" y="115" font-size="13" fill="currentColor" font-family="sans-serif">Qsp vs Ksp:</text><text x="415" y="140" font-size="12" fill="currentColor" font-family="sans-serif">below: clear</text><text x="415" y="162" font-size="12" fill="currentColor" font-family="sans-serif">equal: just full</text><text x="415" y="184" font-size="12" fill="currentColor" font-family="sans-serif">above: snows out</text><text x="415" y="210" font-size="12" fill="currentColor" font-family="sans-serif">AgCl in 0.10 M Cl-:</text><text x="415" y="232" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">s = 1.8e-9, tiny</text><text x="415" y="254" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">mix halves each ion</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Ksp from measured solubility',
        problem: 'Solubility of $PbI_2$ is $1.3 \\times 10^{-3} mol/L$. Find $K_{sp}$.',
        steps: [
          { label: 'Step 1', text: 'Dissolution $PbI_2 \\to Pb^{2+} + 2I^-$ gives $[Pb^{2+}] = s$ and $[I^-] = 2s$. So $K_{sp} = s(2s)^2 = 4s^3$.' },
          { label: 'Step 2', text: 'Insert s cubed:\n```txt\ns = 1.3e-3 mol/L\nKsp = 4 x (1.3e-3)^3\nKsp = 4 x 2.197e-9 = 8.79e-9\n```' },
          { label: 'Step 3', text: 'Thus $K_{sp} = 4 \\times 2.197 \\times 10^{-9} = 8.79 \\times 10^{-9}$. Units $M^3$ follow from three ions; value matches handbook $9.8 \\times 10^{-9}$ scale.' }
        ],
        result: 'Ksp is about 8.8 × 10^-9.'
      },
      {
        title: 'Common-ion solubility cut',
        problem: 'Find solubility of $AgCl$ ($K_{sp} = 1.8 \\times 10^{-10}$) in $0.10 M$ $NaCl$.',
        steps: [
          { label: 'Step 1', text: 'Let $s$ dissolve: $[Ag^+] = s$, $[Cl^-] = 0.10 + s$. Equation $s(0.10 + s) = 1.8 \\times 10^{-10}$. Since $s$ will be tiny, use $s \\times 0.10$.' },
          { label: 'Step 2', text: 'Solve the approximation:\n```txt\ns x 0.10 = 1.8e-10\ns = 1.8e-10/0.10 = 1.8e-9 mol/L\ncheck: 1.8e-9 << 0.10, approximation valid\npure water s = sqrt(1.8e-10) = 1.34e-5\n```' },
          { label: 'Step 3', text: 'So $s = 1.8 \\times 10^{-9}$, about $7400$ times below pure-water $1.34 \\times 10^{-5}$. Check $1.8 \\times 10^{-9}$ is far below $0.10$, so dropping $+s$ was valid.' }
        ],
        result: 'Solubility falls to 1.8 × 10^-9 mol/L in 0.10 M chloride.'
      }
    ],
    keyTakeaways: [
      'Ksp raises each ion to its subscript power with solids omitted.',
      'General link is Ksp = m^m n^n s^(m+n) for MmXn salts.',
      'Common ion cuts solubility to about Ksp/C^n.',
      'Qsp above Ksp precipitates while lower threshold drops first.'
    ],
    quiz: [
      // PYQ-pattern: s-cubed Ksp for 1-2 salt plus common ion
      {
        q: 'Solubility of $PbI_2$ is $1.3 \\times 10^{-3} M$. What is $K_{sp}$?',
        options: [`$1.3 \\times 10^{-3}$`, `$1.69 \\times 10^{-6}$`, `$2.2 \\times 10^{-9}$`, `$8.8 \\times 10^{-9}$`], answer: 3,
        explanation: 'Step 1: Form $K_{sp} = 4s^3$. Step 2: Cube $(1.3 \\times 10^{-3})^3 = 2.197 \\times 10^{-9}$. Step 3: Multiply $4 \\times 2.197 \\times 10^{-9} = 8.79 \\times 10^{-9}$. Step 4: Option $1.69 \\times 10^{-6}$ squares instead of cubing with factor $4$.'
      },
      {
        q: '$AgCl$ ($K_{sp} = 1.8 \\times 10^{-10}$) in $0.10 M$ $NaCl$ has solubility?',
        options: [`$1.34 \\times 10^{-5} M$`, `$1.8 \\times 10^{-9} M$`, `$1.8 \\times 10^{-10} M$`, `$1.0 \\times 10^{-1} M$`], answer: 1,
        explanation: 'Step 1: Set $s \\times 0.10 = 1.8 \\times 10^{-10}$. Step 2: Divide $1.8 \\times 10^{-10}/0.10 = 1.8 \\times 10^{-9}$. Step 3: Check $1.8 \\times 10^{-9}$ is far below $0.10$. Step 4: First option is pure-water $\\sqrt{K_{sp}}$ without common ion.'
      },
      {
        q: 'Mixing gives $Q_{sp} = 5.0 \\times 10^{-9}$ against $K_{sp} = 8.8 \\times 10^{-9}$. What happens?',
        options: ['Precipitate forms', 'Ksp rises to Qsp', 'No precipitate, unsaturated', 'Solubility doubles'], answer: 2,
        explanation: 'Step 1: Compare $5.0 \\times 10^{-9} < 8.8 \\times 10^{-9}$. Step 2: Rule: below $K_{sp}$ stays clear. Step 3: Solid appears only when $Q_{sp}$ exceeds $K_{sp}$. Step 4: $K_{sp}$ is fixed at fixed $T$ and never chases $Q_{sp}$.'
      },
      {
        q: '$0.010 M$ $Cl^-$ and $I^-$ titrated with $Ag^+$ ($K_{sp}$ $1.8 \\times 10^{-10}$ vs $8.3 \\times 10^{-17}$). Which drops first?',
        options: ['$AgI$ needing far lower silver level', '$AgCl$ since its Ksp is larger', 'Both together', 'Neither until 0.010 M silver'], answer: 0,
        explanation: 'Step 1: Need $[Ag^+] = K_{sp}/0.010$. Step 2: For chloride $1.8 \\times 10^{-8}$, for iodide $8.3 \\times 10^{-15}$. Step 3: Lower threshold $8.3 \\times 10^{-15}$ hits first. Step 4: Larger-$K_{sp}$-first reverses the threshold logic.'
      }
    ]
  }
]
