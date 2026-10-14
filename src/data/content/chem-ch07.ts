import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse Chemistry — Chapter 7: Chemical Kinetics and Surface Chemistry
// Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const chemCh07Content: SectionContent[] = [
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: 'chem-ch7-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Integrated rate laws as linearizations and half life clocks',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Three integrated forms and what linearizes each',
            body: 'The **integrated rate theorem** states that each simple order has a characteristic linear plot whose slope is the rate constant. For amount concentration $c$ the zero order form is $c = c_0 - kt$ linear in $c$, the first order form is $\\ln c = \\ln c_0 - kt$ linear in logarithm, and the second order form is $1/c = 1/c_0 + kt$ linear in reciprocal. Choosing axes by this table turns noisy concentration time data into straight line tests, and the order whose plot linearizes best is the chemically meaningful one.'
          },
          {
            kind: 'derivation',
            heading: 'Half lives from setting concentration to one half',
            body: 'Set the integrated law equal to one half of the initial concentration and solve for time to obtain the clock for each order. Zero order gives $t_{1/2} = c_0/2k$ proportional to initial concentration, first order gives $t_{1/2} = 0.693/k$ independent of initial concentration, and second order gives $t_{1/2} = 1/kc_0$ inversely proportional to it. The first order result is the famous constant half life used for dating and drug elimination, while the concentration dependence of the other two diagnoses order from a pair of runs at different starting concentrations.'
          },
          {
            kind: 'example',
            heading: 'Diagnosing order from two half life measurements',
            body: 'A decomposition shows half life $42$ minute units at one starting concentration and $21$ minute units after doubling the start, which halves the clock and matches the second order pattern $t_{1/2} = 1/kc_0$ rather than the constant first order clock. Plotting reciprocal concentration against time then gives a straight line whose slope reads the rate constant directly as $k = 0.012$ per concentration per time units. The same logic in reverse predicts shelf life: for first order decay the time to ten percent loss follows from $\\ln c = \\ln c_0 - kt$ without new experiments, a routine step in pharmaceutical kinetics.'
          }
        ]
      }
    ],
    readingTime: 8,
    intro: 'Rate laws describe how concentration changes with time, while order and molecularity explain what the exponents mean. Integrated forms turn raw data into straight lines that reveal the order and the rate constant. This section builds the zero, first and second order toolkit including half life relations.',
    objectives: [
      'Write differential and integrated rate laws for orders zero, one and two',
      'Distinguish order from molecularity with valid illustrations',
      'Compute half lives and rate constants from concentration time data'
    ],
    concepts: [
      {
        term: 'Rate law and order',
        kind: 'definition',
        statement: 'The **rate law** expresses rate as `rate = k [A]^m [B]^n` with **rate constant** $k$ and **orders** $m$ and $n$ found from measurement, not from the balanced equation. The **overall order** is `m + n`, so $rate = k[H_2][I_2]$ is second order overall and first order in each reactant.',
        detail: 'Order can be zero, fractional or negative, and it changes with conditions. Units of $k$ follow from the overall order: $mol$ $L^{-1}$ $s^{-1}$ for zero order, $s^{-1}$ for first order and $L$ $mol^{-1}$ $s^{-1}$ for second order. Catalysts and surfaces often produce non integer orders.'
      },
      {
        term: 'Molecularity',
        kind: 'definition',
        statement: 'The **molecularity** is the number of reacting particles in an **elementary step**, taking values `one`, `two` or rarely `three`, and it is always a **whole number**. The contrast `order versus molecularity` is sharp: order is measured for the overall reaction while molecularity is assigned to each step of the mechanism.',
        detail: 'A trimolecular step such as $2NO + O_2 \\to 2NO_2$ in one collision is allowed but uncommon because three body collisions are rare. Complex reactions have no single molecularity, only stepwise values. Zero and fractional orders therefore prove the reaction is not elementary.'
      },
      {
        term: 'Zero order integrated form',
        kind: 'law',
        statement: 'A **zero order** reaction obeys `rate = k` with integrated form $[A] = [A]_0 - kt$ and **half life** $t_{1/2} = \\frac{[A]_0}{2k}$. The plot of **concentration versus time** is linear with slope `-k`, typical of **surface saturated** decompositions where the surface is fully covered.',
        detail: 'Ammonia decomposition on hot platinum and photochemical reactions with constant light follow zero order. Half life shortens as initial concentration falls, opposite to first order. Units of $k$ match rate itself.'
      },
      {
        term: 'First order integrated form',
        kind: 'law',
        statement: 'A **first order** reaction obeys `ln [A] = ln [A]_0 - kt` with **half life** $t_{1/2} = \\frac{0.693}{k}$ independent of **initial concentration**. The code `log ([A]_0/[A])` gives $\\log\\frac{[A]_0}{[A]} = \\frac{kt}{2.303}$, so a plot of $\\ln[A]$ against $t$ is straight with slope `-k`.',
        detail: 'Hydrogen peroxide decomposition and $N_2O_5$ dissociation are textbook first order cases. After $n$ half lives the residue is $[A]_0$ divided by $2^{n}$. The same mathematics governs radioactive decay with $k$ as the decay constant.'
      },
      {
        term: 'Second order integrated form',
        kind: 'law',
        statement: 'For the common type $2A \\to products$ the **second order** form is `1/[A] = 1/[A]_0 + kt` with **half life** $t_{1/2} = \\frac{1}{k[A]_0}$. The plot of **reciprocal concentration** versus time is linear, and doubling $[A]_0$ **halves the half life** because $t_{1/2}$ carries $[A]_0$ in the denominator.',
        detail: 'Dimerisation of butadiene and $2HI \\to H_2 + I_2$ at high temperature follow this form. For $A + B \\to products$ with distinct starts the integrated form uses $\\ln\\frac{[B][A]_0}{[A][B]_0}$. Units of $k$ are $L$ $mol^{-1}$ $s^{-1}$.'
      }
    ],
    figures: [
      {
        caption: 'Zero linearises as $[A]$ versus $t$, first as $\ln[A]$ versus $t$ with $t_{1/2} = 0.693/k$ and second as $1/[A]$ versus $t$ with $t_{1/2} = 1/k[A]_0$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three integrated rate law straight line plots"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">three linear tests pick the order</text><line x1="40" y1="260" x2="240" y2="260" stroke="currentColor" stroke-width="1"/><line x1="40" y1="260" x2="40" y2="100" stroke="currentColor" stroke-width="1"/><line x1="50" y1="120" x2="230" y2="240" stroke="currentColor" stroke-width="2.5"/><text x="70" y="90" font-size="11" fill="currentColor" font-family="sans-serif">[A] vs t: zero</text><text x="90" y="280" font-size="11" fill="currentColor" font-family="sans-serif" opacity="0.8">slope -k</text><line x1="270" y1="260" x2="470" y2="260" stroke="currentColor" stroke-width="1"/><line x1="270" y1="260" x2="270" y2="100" stroke="currentColor" stroke-width="1"/><line x1="280" y1="120" x2="460" y2="240" stroke="currentColor" stroke-width="2.5"/><text x="290" y="90" font-size="11" fill="currentColor" font-family="sans-serif">ln[A] vs t: first</text><text x="320" y="280" font-size="11" fill="currentColor" font-family="sans-serif" opacity="0.8">slope -k</text><line x1="500" y1="260" x2="700" y2="260" stroke="currentColor" stroke-width="1"/><line x1="500" y1="260" x2="500" y2="100" stroke="currentColor" stroke-width="1"/><line x1="510" y1="240" x2="690" y2="120" stroke="currentColor" stroke-width="2.5"/><text x="520" y="90" font-size="11" fill="currentColor" font-family="sans-serif">1/[A] vs t: second</text><text x="560" y="280" font-size="11" fill="currentColor" font-family="sans-serif" opacity="0.8">slope +k</text><text x="40" y="310" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">first half fixed; zero to c0/2k; second to 1/kc0; k units encode order</text></svg>`,
        afterConcept: 2,
      },
    ],
    derivations: [
      {
        title: 'First Order Integrated Rate Law and Half Life',
        statement: 'Derivation of $\\ln\\frac{[A]_{0}}{[A]} = kt$ and $t_{1/2} = \\frac{0.693}{k}$ from $rate = k[A]$',
        prerequisites: [
          'Differential rate law $rate = k[A]$ for first order decay',
          'Separation of variables and definite integration',
          'Definition of half life with $[A] = \\frac{[A]_{0}}{2}$'
        ],
        steps: [
          {
            label: 'Step 1: Write the differential rate law',
            formula: '$$-\\frac{d[A]}{dt} = k[A]$$',
            explanation: 'Rate is defined as loss of reactant per time, hence the negative sign on the derivative of $A$. First order means the loss speed is proportional to the current concentration with constant $k$. This proportionality is the physical input that decay is driven by the amount still present.'
          },
          {
            label: 'Step 2: Separate concentration and time variables',
            formula: '$$\\frac{d[A]}{[A]} = -k dt$$',
            explanation: 'Dividing both sides by the concentration collects all $A$ dependence on the left and all time dependence on the right. Separation is allowed because $k$ does not depend on concentration at fixed temperature. This arrangement prepares both sides for direct integration.'
          },
          {
            label: 'Step 3: Integrate from start to elapsed time',
            formula: '$$\\ln[A] - \\ln[A]_{0} = -kt$$',
            explanation: 'Integrating the left side yields a natural logarithm because the integral of reciprocal concentration is logarithmic. The right side accumulates $-k$ over elapsed time $t$. Limits convert the indefinite integral into the observed concentration drop from the initial value.'
          },
          {
            label: 'Step 4: Rearrange and set half concentration',
            formula: '$$\\ln\\frac{[A]_{0}}{[A]} = kt \\quad t_{1/2} = \\frac{0.693}{k}$$',
            explanation: 'Moving terms gives the linear $\\ln[A]$ against $t$ form with slope $-k$, which is why first order data linearize on a log plot. Setting the remaining fraction to one half gives $\\ln 2$ over $k$, numerically $0.693$ over $k$. Independence from $[A]_{0}$ follows because the ratio cancels, the hallmark of first order clocks.'
          }
        ],
        result: 'First order $\\ln\\frac{[A]_{0}}{[A]} = kt$ with constant half life $t_{1/2} = \\frac{0.693}{k}$, so log concentration plots are straight and residues halve on a fixed period.'
      }
    ],
    examples: [
      {
        title: 'Order from initial rate data',
        problem: 'For $2NO + O_2 \\to 2NO_2$ the rate triples when $[NO]$ triples at fixed $[O_2]$ with a different power, and doubles when $[O_2]$ doubles at fixed $[NO]$. Deduce orders and write the rate law.',
        steps: [
          { label: 'Step 1', text: 'Use the `initial rate method`: rate ratios isolate one reactant. Tripling $[NO]$ multiplies rate by nine in the full data set used here, so order in $NO$ is two because $3^{2} = 9$.' },
          { label: 'Step 2', text: 'Doubling $[O_2]$ doubles the rate:\n```text\norder in O2 = 1  (2^1 = 2)\nrate = k [NO]^2 [O2], overall order 3\n```\nIn symbols $rate = k[NO]^{2}[O_2]$ with overall order three.' },
          { label: 'Step 3', text: 'Units of $k$ follow from $rate$ in $mol$ $L^{-1}$ $s^{-1}$ divided by concentration cubed, giving $L^{2}$ $mol^{-2}$ $s^{-1}$.' }
        ],
        result: 'Rate law $rate = k[NO]^{2}[O_2]$, second order in $NO$, first order in $O_2$, third order overall.'
      },
      {
        title: 'First order half life application',
        problem: 'A first order decomposition has $k = 0.0693$ per minute. Find the half life and the fraction left after $30$ minutes.',
        steps: [
          { label: 'Step 1', text: 'Recall `t half = 0.693/k`: $t_{1/2} = \\frac{0.693}{0.0693}$ which equals $10$ minutes.' },
          { label: 'Step 2', text: 'Count half lives:\n```text\ntime = 30 min = 3 half lives\nfraction left = one half cubed = one eighth\n```\nEquivalently $\\ln\\frac{[A]_0}{[A]} = kt$ gives $[A]/[A]_0 = e^{-kt} = e^{-2.079} \\approx 0.125$.' },
          { label: 'Step 3', text: 'About one eighth remains, so seven eighths have reacted. The result is independent of the starting amount, the signature of first order.' }
        ],
        result: '$t_{1/2} = 10$ minutes and fraction remaining after $30$ minutes is $\\frac{1}{8}$.'
      }
    ],
    keyTakeaways: [
      'Order is measured; molecularity belongs to an elementary step.',
      'Zero, first and second orders linearise as c, ln-c and reciprocal-c plots.',
      'First order half life is constant; others depend on initial concentration.',
      'Units of k encode the overall order directly.'
    ],
    quiz: [
      {
        q: 'The rate law $rate = k[H_2][I_2]$ has what overall order?',
        options: ['One', 'Two', 'Three', 'Zero'],
        answer: 1,
        explanation: 'Step 1: Add the exponents of the concentration terms. Step 2: One plus one equals two. Step 3: Hence second order overall.'
      },
      // PYQ-pattern: half life of first order from k (rephrased, values changed)
      {
        q: 'A first order reaction has $k = 0.0693$ per minute. What is $t_{1/2}$?',
        options: ['$1$ minute', '$5$ minutes', '$10$ minutes', '$20$ minutes'],
        answer: 2,
        explanation: 'Step 1: Use $t_{1/2} = 0.693/k$. Step 2: Divide $0.693$ by $0.0693$. Step 3: The quotient is $10$ minutes.'
      },
      {
        q: 'Which statement about molecularity is correct?',
        options: ['`It is a whole number per elementary step`', '`It can be zero or fractional`', '`It equals the overall order always`', '`It is measured from rate data`'],
        answer: 0,
        explanation: 'Step 1: Molecularity counts particles in one step. Step 2: Counts are whole numbers one, two or three. Step 3: Order is the measured quantity, not molecularity.'
      },
      {
        q: 'For $2A \\to products$ second order, doubling $[A]_0$ does what to $t_{1/2}$?',
        options: ['Doubles it', 'Leaves it unchanged', 'Quadruples it', 'Halves it'],
        answer: 3,
        explanation: 'Step 1: Recall $t_{1/2} = 1/(k[A]_0)$. Step 2: $[A]_0$ sits in the denominator. Step 3: Doubling it halves the half life.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.2
  {
    sectionId: 'chem-ch7-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Barrier crossing from Arrhenius to Eyring and tunneling',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Two temperature form that isolates activation energy',
            body: 'Take the logarithm of the Arrhenius form at two temperatures and subtract to cancel the pre exponential factor, leaving only the barrier. From $k = A\\exp(-E_a/RT)$ at $T_1$ and $T_2$, division gives $\\ln(k_2/k_1) = (E_a/R)(1/T_1 - 1/T_2)$ after rearrangement. A rate that doubles over ten kelvin near room temperature then implies $E_a$ near fifty kilojoule per mole units, the classic back of envelope check that separates physical diffusion control from chemical bond breaking.'
          },
          {
            kind: 'theorem',
            heading: 'Eyring refinement with entropy in the barrier',
            body: 'The **Eyring theorem** refines Arrhenius by splitting the barrier into enthalpy and entropy through transition state theory. The rate constant $k = (k_BT/h) \\exp(-\\Delta G/RT)$ carries temperature in the prefactor and places the entropy of the tight or loose transition state inside the exponential, so negative activation entropy signals an ordered associative saddle point. Added tunneling corrections then explain curved Arrhenius plots at low temperature where light atoms pass through rather than over the barrier, a frontier topic in enzyme hydrogen transfer research.'
          },
          {
            kind: 'application',
            heading: 'Catalysts that lower barriers without moving equilibrium',
            body: 'A catalyst provides an alternative path with smaller $E_a$ while the starting and ending free energies stay fixed, so the forward and reverse barriers fall by the same amount and the equilibrium constant is untouched. Industrial ammonia synthesis, catalytic converters and enzyme active sites all work this way, with rate gains of many orders from modest barrier drops because $E_a$ sits inside an exponential. Surface science extends the picture by counting active sites and turnover frequency, turning the molecular barrier into reactor throughput that chemical engineers optimize directly.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Most reactions speed up sharply with temperature because a larger fraction of molecules clears the energy barrier. The Arrhenius equation quantifies this rise with activation energy and the pre exponential factor. Catalysts provide an alternative path with a lower barrier and leave the equilibrium position untouched.',
    objectives: [
      'Use $k = Ae^{-E_a/RT}$ and the two temperature form to find $E_a$',
      'Explain barrier crossing with Maxwell energy fractions',
      'Compare catalysed and uncatalysed paths on energy diagrams'
    ],
    concepts: [
      {
        term: 'Arrhenius equation',
        kind: 'law',
        statement: 'The **Arrhenius equation** writes the rate constant as `k = A exp(-Ea/RT)` with **activation energy** $E_a$ and **pre exponential factor** $A$. Taking logs gives $\\ln k = \\ln A - \\frac{E_a}{RT}$, so a plot of **$\\ln k$ versus $1/T$** is straight with slope `-E_a/R`.',
        detail: 'The factor $e^{-E_a/RT}$ is the fraction of collisions with energy above the barrier. Larger $E_a$ means steeper temperature dependence. Units of $A$ match those of $k$.'
      },
      {
        term: 'Two temperature form',
        kind: 'method',
        statement: 'With rate constants `k1 at T1` and `k2 at T2` the activation energy follows $\\log\\frac{k_2}{k_1} = \\frac{E_a}{2.303R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$ using the **log ten form** and **absolute temperatures**. Doubling $k$ over a ten degree rise near room temperature corresponds to $E_a$ near $53$ $kJ$ $mol^{-1}$.',
        detail: 'Always convert Celsius to kelvin before inserting $T_1$ and $T_2$. The equation assumes $A$ and $E_a$ stay fixed over the interval. For large $E_a$ a small warming multiplies the rate dramatically.'
      },
      {
        term: 'Activation energy and threshold',
        kind: 'definition',
        statement: 'The **activation energy** is the minimum **excess energy** over the average that reactants must acquire to reach the **activated complex** at the top of the barrier. Only the fraction `exp(-Ea/RT)` of molecules has energy above $E_a$ at temperature $T$, which is why most collisions are fruitless.',
        detail: 'The activated complex is the highest energy arrangement along the reaction coordinate, neither reactant nor product. Endothermic steps have $E_a$ larger than the enthalpy change. Orientation and steric demands further cut the successful fraction through $A$.'
      },
      {
        term: 'Catalysis mechanism',
        kind: 'insight',
        statement: 'A **catalyst** opens an alternative path with **lower $E_a$** while being **regenerated**, written schematically as `reactants + catalyst \\to intermediate \\to products + catalyst`. It speeds forward and reverse equally, so **equilibrium constant** $K_c$ and $\\Delta G^0$ are unchanged while equilibrium is reached faster.',
        detail: 'Enzymes, zeolites and transition metals all work by stabilising the transition state or by changing the mechanism into low steps. Catalyst poisons block active sites, while promoters improve activity. Autocatalysis occurs when a product itself catalyses the reaction.'
      },
      {
        term: 'Energy diagrams',
        kind: 'notation',
        statement: 'A **reaction coordinate diagram** plots **potential energy** against progress, marking `reactants`, `activated complex`, `products` and the gap $E_a$. The catalysed curve shows a **lower peak** with the same endpoints, and multistep reactions show one **peak per step** with valleys for intermediates.',
        detail: 'Exothermic reactions end lower than they start by $|\\Delta H|$, endothermic end higher. The highest peak sets the rate determining step. Diagrams make clear why catalysts cannot shift yield, only speed.'
      }
    ],
    figures: [
      {
        caption: 'Arrhenius $k = A\exp(-E_a/RT)$ linearises to $\ln k = \ln A - E_a/RT$: a catalyst lowers the peak with same endpoints so $K_c$ stays fixed.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reaction coordinate with high and low barrier peaks"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">barrier with catalysed low road</text><line x1="80" y1="280" x2="640" y2="280" stroke="currentColor" stroke-width="1.5"/><text x="620" y="300" font-size="12" fill="currentColor" font-family="sans-serif">path</text><text x="50" y="100" font-size="12" fill="currentColor" font-family="sans-serif">energy</text><path d="M90,260 Q200,250 260,150 Q320,50 380,150 Q440,250 630,240" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="300" y="80" font-size="12" fill="currentColor" font-family="sans-serif">uncat high peak Ea</text><path d="M90,260 Q200,255 260,200 Q320,145 380,190 Q440,235 630,240" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/><text x="300" y="220" font-size="12" fill="currentColor" font-family="sans-serif">cat low peak, same ends</text><circle cx="90" cy="260" r="5" fill="currentColor" stroke="none"/><circle cx="630" cy="240" r="5" fill="currentColor" stroke="none"/><text x="90" y="285" font-size="11" fill="currentColor" font-family="sans-serif">reactants</text><text x="590" y="265" font-size="11" fill="currentColor" font-family="sans-serif">products</text><line x1="260" y1="150" x2="260" y2="255" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><text x="40" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">ln k vs 1/T slope -Ea/R; doubling per 10 K near room is near 53 kJ</text></svg>`,
        afterConcept: 1,
      },
    ],
    derivations: [
      {
        title: 'Arrhenius Linearization and Two Temperature Form',
        statement: 'Derivation of $\\ln k = \\ln A - \\frac{E_a}{RT}$ and $\\ln\\frac{k_{2}}{k_{1}} = \\frac{E_a}{R}\\left(\\frac{1}{T_{1}} - \\frac{1}{T_{2}}\\right)$ from $k = A\\exp\\left(-\\frac{E_a}{RT}\\right)$',
        prerequisites: [
          'Arrhenius model $k = A\\exp\\left(-\\frac{E_a}{RT}\\right)$ with barrier $E_a$',
          'Natural logarithm rules for products and exponentials',
          'Absolute temperature $T$ in kelvin units'
        ],
        steps: [
          {
            label: 'Step 1: Start from the exponential barrier model',
            formula: '$$k = A\\exp\\left(-\\frac{E_a}{RT}\\right)$$',
            explanation: 'The rate constant is modeled as collision frequency $A$ times the Boltzmann fraction that clears the barrier $E_a$. The exponential captures the steep temperature sensitivity of that fraction. This form is chosen because energy distributions in matter are exponential in the tail.'
          },
          {
            label: 'Step 2: Take the natural logarithm of both sides',
            formula: '$$\\ln k = \\ln A - \\frac{E_a}{RT}$$',
            explanation: 'Logarithms undo the exponential and expose a straight line in $\\ln k$ against reciprocal $T$. The intercept reports the frequency factor $A$ while the slope reports $-E_a$ over $R$. Linearization is powerful because slope reading is more robust than exponential fitting.'
          },
          {
            label: 'Step 3: Write the line at two temperatures',
            formula: '$$\\ln k_{1} = \\ln A - \\frac{E_a}{RT_{1}} \\quad \\ln k_{2} = \\ln A - \\frac{E_a}{RT_{2}}$$',
            explanation: 'Evaluating the same linear law at $T_{1}$ and $T_{2}$ gives two equations sharing the same $A$ and $E_a$. This pairing is justified when the mechanism and hence the barrier do not change over the interval. Two points then suffice to fix the line without knowing the intercept.'
          },
          {
            label: 'Step 4: Subtract to eliminate the frequency factor',
            formula: '$$\\ln\\frac{k_{2}}{k_{1}} = \\frac{E_a}{R}\\left(\\frac{1}{T_{1}} - \\frac{1}{T_{2}}\\right)$$',
            explanation: 'Subtracting cancels $\\ln A$ exactly and leaves only the rate ratio tied to the reciprocal temperature gap. This cancellation is why activation barriers can be found without measuring absolute collision rates. Larger $E_a$ then predicts a steeper rise of $k$ with warming, matching the observed doubling behavior.'
          }
        ],
        result: 'Linear $\\ln k = \\ln A - \\frac{E_a}{RT}$ with slope $-\\frac{E_a}{R}$, and two point $\\ln\\frac{k_{2}}{k_{1}} = \\frac{E_a}{R}\\left(\\frac{1}{T_{1}} - \\frac{1}{T_{2}}\\right)$ for barrier extraction.'
      }
    ],
    examples: [
      {
        title: 'Activation energy from two rate constants',
        problem: 'Rate constants are $k_1 = 1.0 \\times 10^{-3}$ $s^{-1}$ at $300$ K and $k_2 = 4.0 \\times 10^{-3}$ $s^{-1}$ at $320$ K. Estimate $E_a$ with $R = 8.314$ $J$ $mol^{-1}$ $K^{-1}$.',
        steps: [
          { label: 'Step 1', text: 'Write the two temperature form with `log10`: $\\log\\frac{k_2}{k_1} = \\frac{E_a}{2.303R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.' },
          { label: 'Step 2', text: 'Insert numbers:\n```text\nlog of 4.0e-3 divided by 1.0e-3 = log 4 = 0.6021\nreciprocal 300 minus reciprocal 320 = 2.083e-4 per K\nEa = 0.6021 times 2.303 times 8.314 divided by 2.083e-4\nEa ~ 55.4 kJ mol-1\n```\nSo $E_a \\approx 55$ $kJ$ $mol^{-1}$.' },
          { label: 'Step 3', text: 'Check sense: a fourfold rise over $20$ K implies a moderate barrier near fifty kilojoules per mole, consistent with many solution reactions.' }
        ],
        result: '$E_a \\approx 55$ $kJ$ $mol^{-1}$ from the two temperature data.'
      },
      {
        title: 'Catalyst effect on rate',
        problem: 'A catalyst lowers $E_a$ from $80$ to $60$ $kJ$ $mol^{-1}$ at $300$ K with the same $A$. By what factor does $k$ increase?',
        steps: [
          { label: 'Step 1', text: 'Ratio the Arrhenius forms with `same A`: $\\frac{k_{cat}}{k} = e^{(E_a - E_{a,cat})/RT}$.' },
          { label: 'Step 2', text: 'Compute exponent:\n```text\ndelta Ea = 20 kJ = 20000 J\nRT = 8.314 x 300 = 2494 J\nratio = exp of 20000 divided by 2494 = exp 8.02 ~ 3040\n```\nHence $k_{cat}/k \\approx 3.0 \\times 10^{3}$.' },
          { label: 'Step 3', text: 'A twenty kilojoule cut multiplies the rate by thousands, showing why small barrier changes dominate catalysis.' }
        ],
        result: 'The catalysed rate is about $3 \\times 10^{3}$ times larger at $300$ K.'
      }
    ],
    keyTakeaways: [
      'Log-k versus reciprocal-T slope gives minus Ea over R.',
      'Two temperature log form yields Ea from k1, k2, T1, T2.',
      'Catalysts lower Ea and keep Kc and Delta-G unchanged.',
      'Energy diagrams mark barrier, complex and intermediates clearly.'
    ],
    quiz: [
      {
        q: 'What does the slope of $\\ln k$ versus $1/T$ equal?',
        options: ['`$E_a/R$`', '`$-E_a/R$`', '`$-R/E_a$`', '`$\\ln A$`'],
        answer: 1,
        explanation: 'Step 1: Start from $\\ln k = \\ln A - E_a/RT$. Step 2: Match to $y = c + mx$ with $x = 1/T$. Step 3: Read slope $m = -E_a/R$.'
      },
      // PYQ-pattern: two temperature activation energy (rephrased, values changed)
      {
        q: 'If $k$ doubles from $300$ K to $310$ K, what best estimates $E_a$?',
        options: [`$12$ $kJ$ $mol^{-1}$`, `$25$ $kJ$ $mol^{-1}$`, `$53$ $kJ$ $mol^{-1}$`, `$120$ $kJ$ $mol^{-1}$`],
        answer: 2,
        explanation: 'Step 1: Insert $k_2/k_1 = 2$ into the two temperature form. Step 2: Evaluate $\\log 2$ and the reciprocal temperature difference. Step 3: Solve to obtain about $53$ $kJ$ $mol^{-1}$.'
      },
      {
        q: 'A catalyst changes which quantities?',
        options: ['`Lowers $E_a$ only, keeps $K_c$ fixed`', '`Lowers $\\Delta G^0$ and shifts yield`', '`Raises $E_a$ to slow reverse`', '`Changes stoichiometry of reaction`'],
        answer: 0,
        explanation: 'Step 1: Catalysts provide a lower barrier path. Step 2: Both directions speed equally. Step 3: Hence $K_c$ and $\\Delta G^0$ stay fixed.'
      },
      {
        q: 'Why do rates rise with temperature?',
        options: ['Collision frequency alone doubles each degree', 'Equilibrium constant always rises', 'Activation energy falls with warming', 'Fraction above $E_a$ grows exponentially with $T$'],
        answer: 3,
        explanation: 'Step 1: Maxwell distribution shifts to higher energies. Step 2: The tail above $E_a$ grows as $e^{-E_a/RT}$. Step 3: This exponential dominates the modest rise in collision count.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.3
  {
    sectionId: 'chem-ch7-s3',
    readingTime: 7,
    intro: 'Overall orders often hide a sequence of elementary steps with one slow bottleneck. The rate determining step controls the observed law while fast steps stay near equilibrium. This section shows how to test a proposed mechanism against measured orders without invoking advanced mathematics.',
    objectives: [
      'Identify the rate determining step from a stepwise mechanism',
      'Derive the predicted law using fast equilibrium plus slow step',
      'Accept or reject mechanisms by matching predicted and observed orders'
    ],
    concepts: [
      {
        term: 'Elementary step',
        kind: 'definition',
        statement: 'An **elementary step** is a single collision event whose **stoichiometry sets its own order**, so $A + B \\to products$ elementarily has `rate = k[A][B]`. Molecularity one gives **unimolecular** first order, molecularity two gives **bimolecular** second order, and termolecular steps are rare.',
        detail: 'No intermediates appear inside one elementary act. The overall reaction is the sum of its steps with intermediates cancelling. Any step with fractional or zero order cannot be elementary.'
      },
      {
        term: 'Rate determining step',
        kind: 'law',
        statement: 'The **rate determining step** is the **slowest step** in the sequence, and the overall rate equals the rate of this step expressed with observable concentrations. Fast steps before it act as **pre equilibria**, while fast steps after it merely consume its products quickly via `slow step control`.',
        detail: 'Analogy: the slowest counter sets the queue length regardless of faster counters nearby. Catalysts work by replacing this bottleneck with faster alternatives. Isotopic labelling often exposes which bond breaks in the slow step.'
      },
      {
        term: 'Steady state idea',
        kind: 'method',
        statement: 'The **steady state approximation** sets the net formation rate of a **reactive intermediate** to zero as `d[intermediate]/dt = 0`, because it stays tiny and nearly constant. Solving gives the intermediate in terms of **observable reactants**, which is then substituted into the slow step rate.',
        detail: 'The method avoids solving full differential systems. It applies when intermediates are highly reactive and never accumulate. Pre equilibrium is its simpler cousin when the fast step truly equilibrates.'
      },
      {
        term: 'Pre equilibrium derivation',
        kind: 'method',
        statement: 'When a fast equilibrium precedes the slow step, replace the intermediate using its **equilibrium constant**, as in `K = [intermediate]/([A][B])` giving $[intermediate] = K[A][B]$. The slow rate `k2[intermediate]` then becomes the observable law $rate = k_2K[A][B]$ with **effective constant** $k = k_2K$.',
        detail: 'Classic illustration: $2NO + O_2 \\to 2NO_2$ via fast $2NO \\rightleftharpoons N_2O_2$ then slow $N_2O_2 + O_2 \\to products$. The predicted third order law matches measurement. If the slow step involved only one reactant, the predicted order would drop accordingly.'
      },
      {
        term: 'Mechanism testing',
        kind: 'insight',
        statement: 'A mechanism is **acceptable only if** its predicted law matches the **observed orders** and its steps are **chemically reasonable** with feasible intermediates. Matching proves **consistency**, never uniqueness, because several mechanisms can yield the same `predicted law`.',
        detail: 'Reject any proposal whose slow step order differs from measurement. Prefer proposals without improbable termolecular slow steps or forbidden valencies. Further tests use isotope effects, stereochemistry and trapping of intermediates.'
      }
    ],
    figures: [
      {
        caption: 'The slow step sets rate with pre equilibria as $rate = k_2K[NO]^2[O_2]$: matching predicted and observed orders is necessary but never proves uniqueness.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy diagram with slow then fast step and intermediate"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">two steps: slow high hill decides</text><line x1="80" y1="280" x2="640" y2="280" stroke="currentColor" stroke-width="1.5"/><path d="M90,250 Q160,245 200,150 Q240,55 300,140 Q340,200 380,190 Q420,180 440,220 Q460,260 620,250" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="180" y="90" font-size="12" fill="currentColor" font-family="sans-serif">slow RDS high</text><text x="340" y="150" font-size="12" fill="currentColor" font-family="sans-serif">valley N2O2</text><text x="430" y="180" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">fast low</text><circle cx="90" cy="250" r="5" fill="currentColor" stroke="none"/><circle cx="380" cy="190" r="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="620" cy="250" r="5" fill="currentColor" stroke="none"/><text x="90" y="275" font-size="11" fill="currentColor" font-family="sans-serif">2NO+O2</text><text x="350" y="215" font-size="11" fill="currentColor" font-family="sans-serif" opacity="0.8">middle</text><text x="590" y="275" font-size="11" fill="currentColor" font-family="sans-serif">2NO2</text><text x="40" y="310" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">steady d[gap]/dt = 0 removes gaps; K = [gap]/[A][B] gives observable law</text><text x="40" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">elementary order equals its own stoichiometry; reject mismatched slows</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Derive law for a two step proposal',
        problem: 'Proposed: fast $2NO \\rightleftharpoons N_2O_2$ with constant $K$, slow $N_2O_2 + O_2 \\to 2NO_2$ with constant $k_2$. Derive the predicted rate law.',
        steps: [
          { label: 'Step 1', text: 'Write the slow rate with `intermediate explicit`: $rate = k_2[N_2O_2][O_2]$.' },
          { label: 'Step 2', text: 'Eliminate the intermediate:\n```text\nK = [N2O2]/[NO]^2\n[N2O2] = K [NO]^2\nrate = k2 K [NO]^2 [O2]\n```\nSo $rate = k_{obs}[NO]^{2}[O_2]$ with $k_{obs} = k_2K$.' },
          { label: 'Step 3', text: 'The predicted orders two in $NO$ and one in $O_2$ match the measured third order law, so the mechanism survives this test.' }
        ],
        result: 'Predicted law $rate = k_{obs}[NO]^{2}[O_2]$ agrees with observation; mechanism is acceptable.'
      },
      {
        title: 'Reject a wrong slow step',
        problem: 'Observed law is $rate = k[H_2][I_2]$. Test the proposal with slow step $2HI \\to H_2 + I_2$ preceded by fast $H_2 + I_2 \\rightleftharpoons 2HI$.',
        steps: [
          { label: 'Step 1', text: 'The proposal runs backwards: it starts from products. Write its slow rate as `k[HI]^2`, which predicts second order in $HI$, not in reactants.' },
          { label: 'Step 2', text: 'Express $HI$ via pre equilibrium:\n```text\nK = [HI]^2 / ([H2][I2])\nrate_slow = k_slow K [H2][I2]\n```\nFormally this gives the right concentrations but requires the slow step to be product decomposition, inconsistent with forward progress.' },
          { label: 'Step 3', text: 'The chemically sensible single bimolecular collision $H_2 + I_2 \\to 2HI$ as the slow step directly gives $rate = k[H_2][I_2]$ and is preferred.' }
        ],
        result: 'The reversed proposal is contrived; the direct bimolecular slow step correctly predicts $rate = k[H_2][I_2]$.'
      }
    ],
    keyTakeaways: [
      'Elementary order follows its own stoichiometry directly.',
      'Slow step sets the rate; fast prior steps give pre equilibria.',
      'Steady state removes intermediates in favour of observables.',
      'Matching law is necessary but not sufficient for a mechanism.'
    ],
    quiz: [
      {
        q: 'An elementary step $A + 2B \\to products$ has what rate law?',
        options: ['`$rate = k[A][B]^{2}$`', '`$rate = k[A][B]$`', '`$rate = k[A]^{2}[B]$`', 'Cannot be stated'],
        answer: 0,
        explanation: 'Step 1: Elementary orders equal stoichiometric coefficients. Step 2: $A$ contributes power one and $B$ power two. Step 3: Hence $rate = k[A][B]^{2}$.'
      },
      {
        q: 'What is the steady state approximation?',
        options: ['`Reactants stay constant`', '`Slow step is ignored`', '`Intermediate net rate is set to zero`', '`Equilibrium constant equals rate constant`'],
        answer: 2,
        explanation: 'Step 1: Intermediates stay tiny and reactive. Step 2: Formation balances consumption. Step 3: Setting $d[intermediate]/dt = 0$ solves for it.'
      },
      {
        q: 'A mechanism predicting second order is observed to be first order. What follows?',
        options: ['Mechanism is confirmed', 'Mechanism is rejected', 'Order measurement is irrelevant', 'Molecularity equals two'],
        answer: 1,
        explanation: 'Step 1: Predicted and observed laws must agree. Step 2: They differ here. Step 3: The mechanism is therefore rejected.'
      },
      // PYQ-pattern: pre-equilibrium derivation for nitrogen oxides (rephrased, values changed)
      {
        q: 'Fast $2NO \\rightleftharpoons N_2O_2$ ($K$) then slow $N_2O_2 + O_2 \\to products$ ($k_2$) predicts what?',
        options: ['`$rate = k_2[N_2O_2]$`', '`$rate = k_2[NO][O_2]$`', '`$rate = K[NO]/[O_2]$`', '`$rate = k_2K[NO]^{2}[O_2]$`'],
        answer: 3,
        explanation: 'Step 1: Slow rate is $k_2[N_2O_2][O_2]$. Step 2: Replace $[N_2O_2]$ by $K[NO]^{2}$. Step 3: Obtain $rate = k_2K[NO]^{2}[O_2]$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.4
  {
    sectionId: 'chem-ch7-s4',
    readingTime: 7,
    intro: 'Colloids live between true solutions and suspensions, with particle sizes that scatter light and resist settling. Adsorption on their vast surfaces follows Freundlich and Langmuir relations. This section organises colloid types, preparation, charge stabilisation and the rules for coagulation and emulsions.',
    objectives: [
      'Classify lyophilic, lyophobic and multimolecular colloids with illustrations',
      'Apply Freundlich and Langmuir isotherms to adsorption data',
      'Use Hardy Schulze ordering and gold number logic for stability and protection'
    ],
    concepts: [
      {
        term: 'Colloid types',
        kind: 'definition',
        statement: 'A **colloid** has dispersed particles of **$1$ to $1000$ nm**` diameter that show **Tyndall scattering** and **Brownian motion**. **Lyophilic** sols such as starch love the medium and self stabilise, while **lyophobic** sols such as gold need **charge stabilisation** and coagulate easily.',
        detail: 'Multimolecular colloids are aggregates like sulphur sol, macromolecular colloids are giant molecules like proteins, and associated colloids are micelles above the Kraft point. True solutions pass membranes that colloids cannot cross.'
      },
      {
        term: 'Preparation and purification',
        kind: 'method',
        statement: 'Lyophobic sols need **condensation or dispersion** routes such as `Bredig arc` for metals and **peptisation** of fresh precipitates, while purification uses **dialysis** and **ultrafiltration** to remove **excess electrolytes**. Electrodialysis speeds the removal with an **applied field**.',
        detail: 'Chemical routes include oxidation, reduction and hydrolysis, for example $2H_2S + SO_2 \\to 3S + 2H_2O$ for sulphur sol. Peptisation shakes a precipitate with a little electrolyte to repeptise it. Impure sols coagulate unpredictably.'
      },
      {
        term: 'Adsorption isotherms',
        kind: 'law',
        statement: 'The **Freundlich isotherm** writes mass adsorbed as `x/m = k p^{1/n}` or $\\log\\frac{x}{m} = \\log k + \\frac{1}{n}\\log p$ for gases, while the **Langmuir model** assumes **monolayer sites** giving $\\frac{x}{m} = \\frac{akp}{1+kp}$ with **site saturation** at high pressure. Plots of **$\\log(x/m)$ versus $\\log p$** test the Freundlich form directly.',
        detail: 'Freundlich exponent $1/n$ lies between zero and one for favourable adsorption. Langmuir linearises as $\\frac{p}{x/m}$ versus $p$. Chemisorption is specific and strong, physisorption is weak and multilayer.'
      },
      {
        term: 'Charge and coagulation',
        kind: 'law',
        statement: 'Colloids carry charge by **preferential adsorption**, shown in `AgI with excess Ag+ positive` versus excess $I^-$ negative, and migrate in an **electric field** by **electrophoresis**. The **Hardy Schulze rule** states that **coagulating power** rises with **counter ion charge**, so $Al^{3+} > Ba^{2+} > Na^+$ for negative sols with **flocculation values** in reverse order.',
        detail: 'Neutralisation at the isoelectric point or boiling off stabilisers causes precipitation. Oppositely charged sols mutually coagulate. Protective colloids such as gelatin coat lyophobic particles and raise stability.'
      },
      {
        term: 'Emulsions and micelles',
        kind: 'definition',
        statement: 'An **emulsion** disperses one liquid in another, with `oil in water` stabilised by soaps and `water in oil` stabilised by other agents, broken by **demulsifiers** or centrifuging. **Micelles** form above the **critical micelle concentration** with **hydrophobic tails inward** and clean by **solubilising grease** inside.',
        detail: 'Milk is oil in water, vanishing cream is water in oil. Surfactants lower interfacial tension and provide charge barriers. Detergency combines wetting, emulsification and suspension of dirt.'
      }
    ],
    figures: [
      {
        caption: 'Freundlich $x/m = kp^{1/n}$ logs to slope $1/n$ while Langmuir saturates a monolayer: $Al^{3+} > Ba^{2+} > Na^+$ coagulates negative sols by Hardy Schulze.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Adsorption isotherms Freundlich and Langmuir curves"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">isotherms: power climb vs monolayer cap</text><line x1="100" y1="280" x2="620" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="280" x2="100" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="60" y="70" font-size="12" fill="currentColor" font-family="sans-serif">x/m</text><text x="610" y="300" font-size="12" fill="currentColor" font-family="sans-serif">p</text><path d="M110,270 Q250,250 350,180 Q420,130 580,110" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="420" y="95" font-size="12" fill="currentColor" font-family="sans-serif">Freundlich power</text><path d="M110,270 Q250,200 350,160 Q450,130 600,135" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/><text x="420" y="160" font-size="12" fill="currentColor" font-family="sans-serif">Langmuir plateau</text><text x="100" y="310" font-size="11" fill="currentColor" font-family="sans-serif" opacity="0.85">log(x/m) vs log p straight for Freundlich; p/(x/m) vs p for Langmuir</text><text x="100" y="330" font-size="11" fill="currentColor" font-family="sans-serif" opacity="0.85">1 to 1000 nm Tyndall; micelles above CMC hide tails inward</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Freundlich constants from data',
        problem: 'Adsorption of a gas gives $x/m = 2.0$ at $p = 0.25$ atm and $x/m = 4.0$ at $p = 1.0$ atm. Find $1/n$ and $k$ in $x/m = kp^{1/n}$.',
        steps: [
          { label: 'Step 1', text: 'Take logs with `log(x/m) = log k + (1/n) log p`: $\\log 2.0 = \\log k + \\frac{1}{n}\\log 0.25$ and $\\log 4.0 = \\log k + \\frac{1}{n}\\log 1.0$.' },
          { label: 'Step 2', text: 'Solve:\n```text\nlog 4 = log k + 0  => log k = 0.6021, k = 4.0\nlog 2 = 0.6021 + (1/n)(-0.6021)\n0.3010 = 0.6021 - 0.6021/n => 1/n = 0.5\n```\nSo $\\frac{1}{n} = 0.5$ and $k = 4.0$ in consistent units.' },
          { label: 'Step 3', text: 'Exponent one half lies in the favourable range between zero and one, and doubling pressure multiplies adsorption by $\\sqrt{2}$.' }
        ],
        result: '$1/n = 0.5$ and $k = 4.0$ for the given data range.'
      },
      {
        title: 'Hardy Schulze ordering',
        problem: 'A negative $As_2S_3$ sol is tested with $NaCl$, $BaCl_2$ and $AlCl_3$. Rank coagulating power and flocculation values.',
        steps: [
          { label: 'Step 1', text: 'Identify counter ions with `opposite charge`: the sol is negative so cations $Na^+$, $Ba^{2+}$ and $Al^{3+}$ coagulate it.' },
          { label: 'Step 2', text: 'Apply Hardy Schulze:\n```text\npower: Al3+ > Ba2+ > Na+\nflocculation value: Na+ > Ba2+ > Al3+\n```\nHigher charge needs lower concentration to neutralise the sol.' },
          { label: 'Step 3', text: 'Thus $AlCl_3$ works at the smallest molar dose, while $NaCl$ needs the largest, matching measured flocculation values.' }
        ],
        result: 'Power $Al^{3+} > Ba^{2+} > Na^+$; flocculation values reverse.'
      }
    ],
    keyTakeaways: [
      'Colloids span 1 to 1000 nm with Tyndall and Brownian signatures.',
      'Freundlich is power law; Langmuir is monolayer saturation model.',
      'Hardy Schulze ranks by counter ion charge for coagulation.',
      'Soaps form micelles above CMC and stabilise oil in water emulsions.'
    ],
    quiz: [
      {
        q: 'Which pair correctly contrasts colloid love of medium?',
        options: ['`Lyophilic self stable versus lyophobic charge stabilised`', '`Lyophilic unstable versus lyophobic self stable`', '`Both need Bredig arc`', '`Both are true solutions`'],
        answer: 0,
        explanation: 'Step 1: Lyophilic means solvent loving. Step 2: Such sols form spontaneously and resist coagulation. Step 3: Lyophobic sols need charge and special preparation.'
      },
      {
        q: 'Freundlich plot of $\\log(x/m)$ versus $\\log p$ has slope and intercept what?',
        options: ['Slope $\\log k$, intercept $1/n$', 'Slope $k$, intercept $n$', 'Slope $1/n$, intercept $\\log k$', 'Slope $p$, intercept $x/m$'],
        answer: 2,
        explanation: 'Step 1: Log the power law. Step 2: Match to straight line form. Step 3: Read slope $1/n$ and intercept $\\log k$.'
      },
      // PYQ-pattern: Hardy Schulze ranking for negative sol (rephrased, values changed)
      {
        q: 'For a negative sol, rank $Na^+$, $Ba^{2+}$, $Al^{3+}$ by coagulating power.',
        options: [`$Na^+ > Ba^{2+} > Al^{3+}$`, `$Al^{3+} > Ba^{2+} > Na^+$`, `$Ba^{2+} > Al^{3+} > Na^+$`, 'All equal'],
        answer: 1,
        explanation: 'Step 1: Counter ions are cations. Step 2: Power rises with charge by Hardy Schulze. Step 3: Hence trivalent beats divalent beats monovalent.'
      },
      {
        q: 'What happens above the critical micelle concentration?',
        options: ['Micelles dissociate into monomers', 'Emulsions invert spontaneously', 'Adsorption stops completely', 'Surfactants aggregate with tails inward'],
        answer: 3,
        explanation: 'Step 1: Monomers saturate the surface first. Step 2: Extra surfactants hide tails from water. Step 3: Aggregates with inward tails solubilise grease.'
      }
    ]
  }
]
