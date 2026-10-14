import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE ELECTRONICS MASTER LIBRARY — Chapter 2
// Hughes, "Electrical & Electronic Technology" 12e, chs 2–3 (print pp 41–79)
// merged with Nilsson & Riedel, "Electric Circuits" 12e, chs 2–3 (print pp 58–103)
//
// Five sections: Ohm’s law and resistors · series/parallel networks ·
// Kirchhoff’s laws · dividers, delta–wye and the Wheatstone bridge ·
// power, resistivity and temperature effects.
// All worked-example numbers are the books' own. Math is LaTeX rendered by
// KaTeX through the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh2Content: SectionContent[] = [
  // ------------------------------------------------------------------ 2.1
  {
    sectionId: 'elec-ch2-s1',
    readingTime: 9,
    intro: 'Georg Ohm found that the potential difference across the ends of many conductors is directly proportional to the current flowing between them — provided the temperature stays constant. From that single proportionality flows the entire vocabulary of resistance: the ohm, the resistor, conductance, the colour code stamped on every physical component, and the reason a cable can pass a large current or a small one. This section merges Hughes’s treatment of resistors and their coding with Nilsson’s sign-aware statement of Ohm’s law.',
    objectives: [
      'State Ohm’s law precisely, including the condition on which it rests',
      'Compute voltage, current, power and energy in a resistor from any two of $V$, $I$, $R$',
      'Convert between resistance and conductance',
      'Read a four-band resistor colour code including tolerance',
      'Distinguish conductors from insulators, and short circuits from open circuits',
    ],
    concepts: [
      {
        term: 'Ohm’s law and the ohm',
        kind: 'law',
        statement: 'The p.d. across the ends of many conductors is **directly proportional to the current flowing between them**, provided the temperature remains constant: $V \\propto I$. The constant ratio defines the **ohm** — the resistance between two points of a conductor when a p.d. of 1 V produces a current of 1 A, the conductor not being a source of any e.m.f.',
        detail: 'Hughes is careful: the relation $V = IR$ is **derived from** Ohm’s law rather than being the law itself — the law only notes the constancy of p.d. to current while other physical factors are unchanged; equivalently, the ohm is the resistance in which 1 A generates heat at 1 W. Few conduction processes are exactly proportional, but the relationship is almost constant for many circuits, and we assume it throughout. Nilsson adds the sign discipline: $v = iR$ when the current reference runs along the voltage drop, $v = -iR$ when it runs against it.',
      },
      {
        term: 'Conductance',
        kind: 'definition',
        statement: 'The reciprocal of resistance is the **conductance** $G$, measured in siemens (S): $$G = \\frac{1}{R}.$$ An 8 Ω resistor has a conductance of 0.125 S.',
        detail: 'Nilsson uses conductance where it simplifies the algebra — a resistor carrying current in the direction of the voltage drop has $i = vG$, and the power equations rewrite as $p = i^{2}/G = v^{2}G$. In Example 2.3 a 0.2 S conductance with 50 V across it passes $i = (50)(0.2) = 10$ A and dissipates $p = (50)^{2}(0.2) = 500$ W. Parallel networks (Section 2.2) also collapse to a simple conductance sum.',
      },
      {
        term: 'Power dissipation, ratings and the heating effect',
        kind: 'insight',
        statement: 'A resistor passing current $I$ receives energy at the rate $I^{2}R$ and must run warmer than its surroundings until it can release that heat as fast as it arrives. Every resistor therefore carries a **power rating** — the maximum it can dissipate without damage.',
        detail: 'A 1 W resistor of 100 Ω can pass $\\sqrt{1/100} = 100$ mA, whereas a ¼ W resistor of the same value stands only 50 mA. Common electronic ratings are ¼, ½, 1 and 2 W: a resistor that must dissipate 1.1 W is specified as a 2 W part, since the rating must exceed the operational value. Wires and cables are rated the same way — by the temperature their insulation can withstand. The working trio behind every such calculation is $$V = IR, \\qquad I = \\frac{V}{R}, \\qquad P = IV = I^{2}R = \\frac{V^{2}}{R},$$ with energy $W = Pt = I^{2}Rt = IVt$. Power engineers avoid resistors where possible, because every watt burned in one is energy thrown away.',
      },
      {
        term: 'Linear and non-linear resistors',
        kind: 'definition',
        statement: 'A resistor is **linear** if the current through it is proportional to the p.d. across its terminals; if the resistance varies with the magnitude of voltage or current, it is **non-linear**.',
        detail: 'Resistors made from semiconductor materials are the classic non-linear examples. Throughout this book resistors are assumed linear — constant resistance while the temperature is held constant — which is exactly the assumption hiding inside Ohm’s law.',
      },
      {
        term: 'Resistor construction: fixed and variable',
        kind: 'insight',
        statement: 'Small fixed resistors are carbon mouldings or metal-oxide film; above about 1 W the construction becomes a thin **nichrome wire wound on a ceramic former**, coated in cement or vitreous enamel (10–20 W); at the top end, resistors are lumps of cast iron or metal bars in ventilated cages.',
        detail: 'Variable resistors come in two flavours. A **potentiometer** uses all three connections — both ends of the coil plus a wiper arm — so the resistance between wiper and end varies with rotation. A **rheostat** makes fixed connections to intermediate points along the wire; such intermediate connections are called **tappings**. The thinner and the longer the wire, the greater its resistance — a fact Section 2.5 turns into the resistivity law.',
      },
      {
        term: 'The resistor colour code',
        kind: 'method',
        statement: 'Carbon resistors state their value in painted bands: the **first two bands are digits** (black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9), the **third band is the number of zeros**, and the **fourth is the tolerance** — gold ±5 per cent, silver ±10 per cent, no band ±20 per cent.',
        detail: 'A fifth band, where present, is a **reliability factor**: the percentage failure per 1000 h of use (brown 1, red 0.1, orange 0.01, yellow 0.001 per cent). Reading starts from the band placed nearest the end of the resistor. Example readings from Hughes: orange–blue–green gives 3, 6 and five zeros — 3 600 000 Ω; yellow–violet–red gives 4700 Ω; orange–black–gold gives 3.0 Ω (the gold band as multiplier shifts the decimal point).',
      },
      {
        term: 'Letter codes and preferred values',
        kind: 'notation',
        statement: 'Metal-oxide resistors too small for bands use a **letter code** in which the letter marks the decimal point: R47 = 0.47 Ω, 4R7 = 4.7 Ω, 47R = 47 Ω, 470R = 470 Ω, 4K7 = 4.7 kΩ, 47K = 47 kΩ, 4M7 = 4.7 MΩ.',
        detail: 'Readily available standard values run 1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1 and their decade multiples. All exist with 5 per cent tolerance, and the bold-face subset with 10 per cent. The wide tolerance bands exist because manufacturing resistors to an exact value is hard — fortunately, circuits tolerate the spread.',
      },
      {
        term: 'Conductors and insulators',
        kind: 'insight',
        statement: 'Connect identical rods of different materials to a constant-e.m.f. battery and measure the current: **metals permit reasonable currents; non-metals permit virtually none.** Conductors include copper, aluminium, silver, platinum, bronze and gold; insulators include glass, rubber, plastic, air, varnish, paper, wood, mica, ceramic and certain oils.',
        detail: 'The classification is a simplification — no material completely stops current, and none passes charge without opposition. The physics: materials with no energy gap readily supply free electrons and make up the circuit; materials with sizeable gaps between valence and conduction bands insulate it and contain the current within the conductors. That is why a cut-open wire shows copper strands in the middle surrounded by plastic, not the reverse.',
      },
      {
        term: 'The circuit in practice: cells, short and open circuits',
        kind: 'insight',
        statement: 'Two circuit conditions matter at the extremes: with $R = 0$ there is no limit to the current and the volt drop is zero — a **short circuit**; with $R = \\infty$ no current can flow — an **open circuit**.',
        detail: 'Electricity arrives from generating stations (steam- or water-turbine driven, the latter hydroelectric), transmitted by overhead power lines or buried cables — and possibly 20 per cent of UK generation comes from private sources. For portable devices, **primary cells** (torches, radios, watches) buy convenience at a high price per unit of energy and are discarded; **secondary cells** (cars) deliver and accept recharge of much larger energies at the cost of weight. A broken wire open-circuits a circuit; a 240 V supply shorted through 8.5 mΩ would drive 28 kA — which is why protection exists.',
      },
    ],
    figures: [
      {
        caption: "Single-loop DC circuit: an ideal source of EMF drives a current I through a linear resistor R. The potential difference across the resistor terminals equals V = IR, with electrical power converted into thermal dissipation at rate P = I²R.",
        svg: `<svg viewBox="0 0 720 250" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DC circuit schematic and Ohm’s law definition"><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor"/></marker></defs><circle cx="120" cy="125" r="30" fill="none" stroke="currentColor" stroke-width="2"/><text x="120" y="112" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">+</text><text x="120" y="146" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">−</text><text x="60" y="130" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">Vₛ (EMF)</text><line x1="120" y1="95" x2="120" y2="50" stroke="currentColor" stroke-width="2"/><line x1="120" y1="50" x2="360" y2="50" stroke="currentColor" stroke-width="2"/><line x1="120" y1="155" x2="120" y2="200" stroke="currentColor" stroke-width="2"/><line x1="120" y1="200" x2="520" y2="200" stroke="currentColor" stroke-width="2"/><line x1="520" y1="200" x2="520" y2="170" stroke="currentColor" stroke-width="2"/><line x1="220" y1="50" x2="270" y2="50" stroke="currentColor" stroke-width="2.5" marker-end="url(#arrow)"/><text x="245" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">I (Current)</text><line x1="360" y1="50" x2="520" y2="50" stroke="currentColor" stroke-width="2"/><line x1="520" y1="50" x2="520" y2="80" stroke="currentColor" stroke-width="2"/><polyline points="520,80 505,87 535,101 505,115 535,129 505,143 535,157 520,164 520,170" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="560" y="125" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="currentColor">R (Load)</text><text x="560" y="145" font-family="system-ui, sans-serif" font-size="11" fill="currentColor">V = I · R</text><text x="560" y="162" font-family="system-ui, sans-serif" font-size="11" fill="currentColor">P = I² · R = V² / R</text><rect x="230" y="90" width="180" height="70" rx="6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><text x="320" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">Ohm’s Law Relations</text><text x="320" y="135" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">V = I · R  (Volts)</text><text x="320" y="150" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle" fill="currentColor">I = V / R  (Amperes)</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Reading the colour code',
        problem: 'A resistor carries four bands: orange, blue, green, silver. What is its resistance and between what limits does it lie? Then read a resistor with bands brown, black, orange and no fourth band. (Hughes Section 2.10 and Example 2.6)',
        steps: [
          { label: 'Step 1: Decode the digits', text: 'Orange = 3 and blue = 6, so the numerical value starts 36.' },
          { label: 'Step 2: Apply the multiplier', text: 'The green third band calls for five zeros: $36$ followed by $00000$ = 3 600 000 Ω = 3.6 MΩ.' },
          { label: 'Step 3: Apply the tolerance', text: 'Silver is ±10 per cent, and 10 per cent of 3 600 000 is 360 000, so the resistance lies between 3 240 000 Ω and 3 960 000 Ω.' },
          { label: 'Step 4: Second resistor', text: 'Brown = 1, black = 0, orange = three zeros: $10\\,000\\ \\Omega = 10$ kΩ. With no tolerance band the spread is ±20 per cent, i.e. between 8 kΩ and 12 kΩ.' },
          { label: 'Step 5: Perspective', text: 'The apparently huge 8–12 kΩ spread reflects manufacturing reality; circuit designs are made tolerant enough that it rarely matters.' },
        ],
        result: '3.6 MΩ ± 10 per cent (3.24–3.96 MΩ); and 10 kΩ ± 20 per cent (8–12 kΩ).',
      },
      {
        title: 'Signs and conductance: four resistor snapshots',
        problem: 'In each circuit of Nilsson’s Fig. 2.8 either $v$ or $i$ is unknown: a 1 A current into an 8 Ω resistor; 50 V across a 0.2 S conductance; a 1 A current with the voltage a rise in the current direction across 20 Ω; and 50 V with the current directed against the drop through 25 Ω. Find the unknowns and the power dissipated. (Nilsson Example 2.3)',
        steps: [
          { label: 'Step 1: First resistor', text: 'Current along the voltage drop: $v_a = (1)(8) = 8$ V.' },
          { label: 'Step 2: Conductance branch', text: 'Current along the drop through $G = 0.2$ S: $i_b = (50)(0.2) = 10$ A.' },
          { label: 'Step 3: Rise in the current direction', text: 'With the voltage a rise along the current, $v_c = -(1)(20) = -20$ V.' },
          { label: 'Step 4: Current against the drop', text: '$i_d = -50/25 = -2$ A — the minus sign simply reports that the reference was drawn opposite to the actual flow.' },
          { label: 'Step 5: Powers', text: '$p_{8} = (1)^{2}(8) = 8$ W, $p_{0.2\\text{S}} = (50)^{2}(0.2) = 500$ W, $p_{20} = (-20)^{2}/20 = 20$ W, $p_{25} = (-2)^{2}(25) = 100$ W. Every resistor power is positive — resistors always absorb.' },
        ],
        result: '$v_a = 8$ V, $i_b = 10$ A, $v_c = -20$ V, $i_d = -2$ A; the four resistors dissipate 8 W, 500 W, 20 W and 100 W respectively — sign conventions affect the reported direction, never the absorbed power.',
      },
      {
        title: 'Heating effect of a current',
        problem: 'A current of 5 A flows in a resistor of resistance 8 Ω. Determine the rate of heat dissipation and the heat dissipated in 30 s. (Hughes Example 2.3)',
        steps: [
          { label: 'Step 1: Power from current and resistance', text: '$P = I^{2}R = 5^{2} \\times 8 = 200$ W.' },
          { label: 'Step 2: Energy over the interval', text: '$W = Pt = 200 \\times 30 = 6000$ J of heat leaves the resistor in 30 s.' },
          { label: 'Step 3: Choose a rating', text: 'A physical part here must be rated above 200 W — on Hughes’s standard scale that means a wire-wound or caged power resistor, not a 2 W electronic part.' },
        ],
        result: 'The resistor dissipates 200 W and releases 6000 J in 30 s; the rating of the physical part must exceed 200 W.',
      },
    ],
    keyTakeaways: [
      'Ohm’s law: $V \\propto I$ at constant temperature; the constant ratio $R = V/I$ is the resistance, and $V = IR$ is its working consequence.',
      'The ohm is 1 V per ampere, with no e.m.f. in the conductor; power in a resistor follows $P = IV = I^{2}R = V^{2}/R$ and energy $W = I^{2}Rt$.',
      'Conductance is $G = 1/R$ in siemens; an 8 Ω resistor conducts 0.125 S, and $p = i^{2}/G = v^{2}G$.',
      'Colour code: two digit bands, a zeros band, a tolerance band (gold 5, silver 10, none 20 per cent) and an optional reliability band.',
      'Ratings must exceed operating dissipation — a 1.1 W application takes a 2 W resistor; 100 mA is the limit for a 1 W 100 Ω part and 50 mA for a ¼ W one.',
      'Metals conduct (copper best of the common ones), non-metals insulate; the energy-gap picture explains why copper sits inside the plastic.',
      'A short circuit is $R = 0$ with unbounded current and zero volt drop; an open circuit is $R = \\infty$ with none — and portability is why primary cells exist despite their cost per unit of energy.',
    ],
    quiz: [
      {
        q: 'A resistor’s bands read yellow, violet, red, gold. Its nominal resistance and tolerance are:',
        options: ['470 Ω ± 5%', '4700 Ω ± 5%', '4.7 kΩ ± 10%', '47 kΩ ± 20%'],
        answer: 1,
        explanation: 'Yellow = 4, violet = 7, red = two zeros: 4700 Ω. Gold is the ±5 per cent tolerance band. Hughes gives exactly this example: yellow–violet–red means 4700 Ω (a gold band would only change the tolerance, not the digits).',
      },
      {
        q: 'Which statement about Ohm’s law is the careful one Hughes insists on?',
        options: ['$V = IR$ is Ohm’s law itself', 'Ohm’s law states the constancy of the ratio of p.d. to current while other physical factors remain unchanged', 'Ohm’s law holds for every conductor at every temperature', 'Ohm’s law defines the ampere'],
        answer: 1,
        explanation: 'The proportionality $V \\propto I$ at constant temperature is the law; $V = IR$ is derived from it. Few conduction processes are exactly proportional, but the assumption is nearly constant for many circuits and is adopted throughout.',
      },
      {
        q: 'A current of 3 A flows through a 10 Ω resistor. The power developed is:',
        options: ['30 W', '90 W', '300 W', '0.3 W'],
        answer: 1,
        explanation: '$P = I^{2}R = 3^{2} \\times 10 = 90$ W — Hughes’s Example 3.18, whose energy bookkeeping ($W = Pt$) follows directly.',
      },
      {
        q: 'The conductance of an 8 Ω resistor is:',
        options: ['8 S', '0.8 S', '0.125 S', '12.5 S'],
        answer: 2,
        explanation: '$G = 1/R = 1/8 = 0.125$ S. Conductance measured in siemens is Nilsson’s preferred currency whenever parallel connections dominate.',
      },
      {
        q: 'Two points are connected by a conductor of zero resistance. The circuit condition is called:',
        options: ['An open circuit — no current flows', 'A short circuit — the volt drop between the points is zero', 'A balanced bridge', 'A floating node'],
        answer: 1,
        explanation: 'With $R = 0$, $V = IR = 0$ regardless of current, so nothing limits the flow — a short circuit. The opposite extreme, $R = \\infty$, is the open circuit where $I = V/\\infty = 0$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.2
  {
    sectionId: 'elec-ch2-s2',
    readingTime: 9,
    intro: 'One lamp on a supply glows normally; wire a second lamp in series with it and both glow feebly, because the current must fight twice the resistance. Wire the second lamp in parallel instead and both shine at full brilliance, because each receives the full supply voltage. Series and parallel connection are the two ways circuits grow, and this section builds their algebra — equivalent resistance, voltage and current sharing — before Kirchhoff’s laws generalize it.',
    objectives: [
      'Derive the series and parallel equivalent-resistance laws from current and voltage behaviour',
      'Compute current and voltage in series ladders and parallel networks',
      'Apply the product-over-sum rule and the current-sharing formula for two resistors',
      'Reduce series–parallel networks step by step and back-substitute for branch currents',
      'Choose between series and parallel connection on practical grounds',
    ],
    concepts: [
      {
        term: 'Series connection',
        kind: 'definition',
        statement: 'Load units are **series-connected** when the same current passes through each of them — where else can the current go having passed the first but on to the second, there being no other conduction path? Nilsson’s formal version: two elements connected at a single node (and nowhere else) are in series.',
        detail: 'Ammeters placed in each part of a series circuit read identically, whatever the applied voltage. In Hughes’s Fig. 3.5, KVL around the loop gives $V = V_1 + V_2 + V_3 = IR_1 + IR_2 + IR_3$, and comparing with $V = IR$ yields the series law — the same conclusion Nilsson reaches for seven resistors via $-v_s + i_s R_1 + \\cdots + i_s R_7 = 0$.',
      },
      {
        term: 'Series equivalent resistance',
        kind: 'law',
        statement: 'The total resistance of resistors in series is the sum of the separate resistances: $$R = R_1 + R_2 + R_3.$$ The equivalent is always **greater than the greatest** resistance in the circuit — a ready-made check on the arithmetic.',
        detail: 'In Hughes’s Example 3.1, a 220 V supply drives 73 mA through one 3 kΩ resistor; adding a second 3 kΩ in series doubles the resistance to 6 kΩ and halves the current to 37 mA — exactly the dimming of the two series lamps. In Example 3.3, resistors of 40 Ω, 50 Ω and 70 Ω in series present 160 Ω to a 100 V supply, so $I = 100/160 = 0.625$ A.',
      },
      {
        term: 'Parallel networks',
        kind: 'definition',
        statement: 'Loads are **parallel-connected** when the same potential difference is applied to each — the current may pass by several side-by-side paths called branches. With more than one circuit present the arrangement is a **network**: two or more circuits.',
        detail: 'Ammeters show that the branch currents always sum to the supply current, $I = I_1 + I_2 + I_3$, and voltmeters show every branch voltage equals the supply voltage. Nilsson warns against geometry as a guide: two elements are parallel because they share terminal voltage, not because they look parallel — in his Fig. 3.6, $R_1$ and $R_3$ are **not** parallel because another resistor dissipates part of the voltage between their terminals.',
      },
      {
        term: 'Parallel equivalent resistance',
        kind: 'law',
        statement: 'The reciprocal of the equivalent resistance equals the sum of the branch reciprocals: $$\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3},$$ or in conductance form $G_{eq} = G_1 + G_2 + \\cdots + G_k$. The equivalent is always **less than the smallest** branch resistance.',
        detail: 'The “less than smallest” check catches the classic error of forgetting to invert the final $1/R$. Hughes’s Example 3.6 combines 6.8 Ω, 4.7 Ω and 2.2 Ω: $1/R = 0.147 + 0.213 + 0.455 = 0.815$, so $R = 1/0.815 = 1.23$ Ω — indeed below 2.2 Ω — and a 12 V supply then delivers $I = 12/1.23 = 9.76$ A.',
      },
      {
        term: 'Product over sum for two resistors',
        kind: 'law',
        statement: 'For exactly two resistors in parallel, $$R = \\frac{R_1 R_2}{R_1 + R_2}$$ — the product of the resistances divided by their sum. The shortcut applies **only** to the two-resistor case.',
        detail: 'It follows from $1/R = 1/R_1 + 1/R_2 = (R_1 + R_2)/(R_1 R_2)$. Nilsson uses it constantly in ladder reduction — in his Example 3.1, 20 kΩ in parallel with 5 kΩ gives $(20\\,000 \\times 5000)/25\\,000 = 4$ kΩ — and the same expression reappears as the input resistance of loaded dividers.',
      },
      {
        term: 'Voltage division in a series pair',
        kind: 'method',
        statement: 'Given two resistors in series across a supply $V$, the volt drop across $R_1$ is $$\\frac{V_1}{V} = \\frac{R_1}{R_1 + R_2},$$ so the ratio of voltages depends on the ratio of resistances — the **voltage divider**.',
        detail: 'Hughes’s Example 3.4 designs one: an output of 10 V from a 30 V input with $R_2 = 100$ Ω requires $10/30 = 100/(R_1 + 100)$, so $R_1 + 100 = 300$ and $R_1 = 200$ Ω. Nilsson generalizes the result to $n$ series resistors in Section 3.4 — the voltage-division equation developed in Section 2.4 of this library.',
      },
      {
        term: 'Current sharing in a parallel pair',
        kind: 'law',
        statement: 'Two parallel resistors share a supply current as $$I_1 = I \\cdot \\frac{R_2}{R_1 + R_2}$$ — the current in one resistor is the total multiplied by the **other** resistance over the sum.',
        detail: 'Equal resistances share equally; the lesser resistance takes the greater part. Hughes’s Example 3.7: an 8 A supply current divides between a 2 Ω resistor and a 2 Ω resistor as 4.0 A each; replace the first by 4 Ω and the 2 Ω branch takes $8 \\times 4/6 = 5.3$ A. The upside-down appearance of the resistances — the *other* resistor on top — is the detail to memorize.',
      },
      {
        term: 'Series versus parallel in practice',
        kind: 'insight',
        statement: 'The electron test: if an electron has **no choice** but to pass through every load unit, they are in series; if it has a **choice**, they are in parallel. Table 3.1 of Hughes gathers the dual relations — series shares current and adds voltages; parallel shares voltage and adds currents.',
        detail: 'Reliability drives the practical preference: with parallel lamps, one failed filament interrupts only its own branch; with series lamps, one failure extinguishes all (the Christmas-tree-light problem). Series connection’s one advantage — sharing the supply voltage so cheap low-voltage lamps can be used — is outweighed for most lighting, so the parallel arrangement is highly preferable.',
      },
      {
        term: 'Series–parallel networks and reduction strategy',
        kind: 'method',
        statement: 'Networks mixing both connections are reduced by **starting at the end farthest from the source and working towards it**: combine the innermost series or parallel pair, redraw, and repeat until one equivalent resistance remains; then expand backwards for branch currents.',
        detail: 'In Hughes’s Fig. 3.28, $R_4 \\parallel R_5$ and $R_6 \\parallel R_7$ are in series with each other, while $R_2$ is parallel with the *network* containing $R_4$–$R_7$ — but $R_2$ is not parallel with $R_6$, because $I_6$ is not derived immediately from $I_1$. Nilsson’s Example 3.2 works a full reduction: right of the terminals, 3 Ω + 6 Ω = 9 Ω; that in parallel with 18 Ω gives 6 Ω; the source sees $4 + 6 = 10$ Ω, so $i_s = 120/10 = 12$ A; then $v_1 = (12)(6) = 72$ V splits as $i_1 = 72/18 = 4$ A and $i_2 = 72/9 = 8$ A.',
      },
    ],
    examples: [
      {
        title: 'Voltage drops in a series ladder',
        problem: 'A current of 1.5 A flows through three series resistors of 2 Ω, 3 Ω and 8 Ω. Calculate the voltage across each and the supply voltage. (Hughes Example 3.2)',
        steps: [
          { label: 'Step 1: Same current everywhere', text: 'Series connection forces the full 1.5 A through each resistor.' },
          { label: 'Step 2: Individual drops', text: '$V_1 = IR_1 = 1.5 \\times 2 = 3.0$ V; $V_2 = 1.5 \\times 3 = 4.5$ V; $V_3 = 1.5 \\times 8 = 12.0$ V.' },
          { label: 'Step 3: Supply voltage', text: '$V = V_1 + V_2 + V_3 = 3.0 + 4.5 + 12.0 = 19.5$ V.' },
          { label: 'Step 4: Check the proportions', text: 'Each drop takes its share of the supply in the ratio $2{:}3{:}8$ — the voltage-division principle in action before we formalize it.' },
        ],
        result: 'Drops of 3.0 V, 4.5 V and 12.0 V add to a 19.5 V supply — series circuits divide voltage in the ratio of resistances.',
      },
      {
        title: 'Parallel reduction, current sharing and power',
        problem: 'First reduce a parallel network of 6.8 Ω, 4.7 Ω and 2.2 Ω across a 12 V supply and find the supply current. Then examine how 8 A divides between a 2 Ω resistor and (a) another 2 Ω, (b) a 4 Ω resistor, and the powers that result when 9 A divides between 8 Ω and 4 Ω branches. (Hughes Examples 3.6, 3.7, 3.20)',
        steps: [
          { label: 'Step 1: Combine the reciprocals', text: '$1/R = 1/6.8 + 1/4.7 + 1/2.2 = 0.147 + 0.213 + 0.455 = 0.815$, so $R = 1/0.815 = 1.23$ Ω — below the smallest branch, as it must be.' },
          { label: 'Step 2: Supply current', text: '$I = V/R = 12/1.23 = 9.76$ A.' },
          { label: 'Step 3: Equal sharing', text: 'With $R_1 = R_2 = 2$ Ω, the second branch takes $I_2 = 8 \\times 2/(2+2) = 4.0$ A — equal resistances share equally.' },
          { label: 'Step 4: Unequal sharing', text: 'With $R_1 = 4$ Ω and $R_2 = 2$ Ω, $I_2 = 8 \\times 4/(4+2) = 5.3$ A — the lesser resistance takes the greater current.' },
          { label: 'Step 5: Power split', text: 'When 9 A divides between 8 Ω and 4 Ω, $I_1 = 9 \\times 4/12 = 3$ A and $I_2 = 6$ A, so $P_1 = 3^{2} \\times 8 = 72$ W and $P_2 = 6^{2} \\times 4 = 144$ W — which Hughes rounds to 140 W, honouring the one-significant-figure inputs.' },
        ],
        result: 'Equivalent 1.23 Ω drawing 9.76 A; current shares 4.0/4.0 A or 5.3/2.7 A as the resistances dictate; power follows the current split, 72 W and about 140 W.',
      },
      {
        title: 'Network reduction with back-substitution',
        problem: 'Find $i_s$, $i_1$ and $i_2$ for a 120 V source feeding a 4 Ω resistor in series with a network whose remainder is an 18 Ω resistor in parallel with a (3 Ω + 6 Ω) branch. (Nilsson Example 3.2)',
        steps: [
          { label: 'Step 1: Innermost series', text: 'Right of the terminals, the 3 Ω and 6 Ω resistors are in series: $3 + 6 = 9$ Ω.' },
          { label: 'Step 2: Parallel pair', text: 'The 18 Ω resistor parallels the 9 Ω: $R_{eq} = (18 \\times 9)/(18 + 9) = 6$ Ω.' },
          { label: 'Step 3: Source current', text: 'The source now sees $4 + 6 = 10$ Ω, so $i_s = 120/10 = 12$ A.' },
          { label: 'Step 4: Voltage across the parallel section', text: '$v_1 = (12)(6) = 72$ V appears across both the 18 Ω and 9 Ω paths.' },
          { label: 'Step 5: Branch currents', text: '$i_1 = 72/18 = 4$ A and $i_2 = 72/9 = 8$ A — summing back to 12 A, and the solution satisfies KCL at every node and KVL around all three closed paths.' },
        ],
        result: '$i_s = 12$ A, splitting as $i_1 = 4$ A and $i_2 = 8$ A — reduce, then unfold: the whole method in two sentences.',
      },
    ],
    keyTakeaways: [
      'Series elements carry one current; their voltages and resistances add: $V = V_1 + V_2 + V_3$ and $R = R_1 + R_2 + R_3$.',
      'Parallel branches share one voltage; their currents add, and $1/R = 1/R_1 + 1/R_2 + 1/R_3$ (or $G_{eq} = \\sum G_i$).',
      'Series equivalents exceed the largest resistor; parallel equivalents undercut the smallest — use both as arithmetic checks.',
      'Two resistors in parallel: $R = R_1R_2/(R_1 + R_2)$, valid for exactly two.',
      'Voltage divides as $V_1/V = R_1/(R_1 + R_2)$; current divides “the other way”, $I_1 = I \\cdot R_2/(R_1 + R_2)$.',
      'Parallel connection wins on reliability — one failed branch leaves the rest alive; series connection saves voltage rating at the cost of total failure.',
      'Reduce from the far end toward the source, then back-substitute: 9 Ω → 6 Ω → 10 Ω → 12 A → 72 V → 4 A and 8 A.',
    ],
    quiz: [
      {
        q: 'A 100 V supply feeds three series resistors of 40 Ω, 50 Ω and 70 Ω. The circuit current is:',
        options: ['0.5 A', '0.625 A', '1.6 A', '2.5 A'],
        answer: 1,
        explanation: '$R = 40 + 50 + 70 = 160$ Ω and $I = 100/160 = 0.625$ A — Hughes’s Example 3.3.',
      },
      {
        q: 'Resistors of 6.8 Ω, 4.7 Ω and 2.2 Ω are connected in parallel. The equivalent resistance is approximately:',
        options: ['13.7 Ω', '4.6 Ω', '1.23 Ω', '0.815 Ω'],
        answer: 2,
        explanation: '$1/R = 0.147 + 0.213 + 0.455 = 0.815$, so $R = 1/0.815 = 1.23$ Ω. Choosing 0.815 Ω is the classic forgotten inversion; 13.7 Ω is the equally classic addition.',
      },
      {
        q: 'An 8 A supply current divides between a 4 Ω resistor and a 2 Ω resistor. The current in the 2 Ω resistor is:',
        options: ['2.7 A', '4.0 A', '5.3 A', '8.0 A'],
        answer: 2,
        explanation: 'The 2 Ω branch takes $I_2 = 8 \\times R_1/(R_1 + R_2) = 8 \\times 4/6 = 5.3$ A — the lesser resistance takes the greater share, and the multiplying fraction uses the *other* resistor.',
      },
      {
        q: 'You must deliver 10 V from a 30 V source with a divider whose lower resistor $R_2 = 100$ Ω. The upper resistor $R_1$ should be:',
        options: ['33 Ω', '100 Ω', '200 Ω', '300 Ω'],
        answer: 2,
        explanation: 'From $V_2/V = R_2/(R_1 + R_2)$: $10/30 = 100/(R_1 + 100)$, so $R_1 + 100 = 300$ and $R_1 = 200$ Ω — Hughes’s Example 3.4.',
      },
      {
        q: 'Why does Hughes prefer parallel connection for lamps in practice?',
        options: ['Parallel circuits use less copper', 'A failed filament interrupts only its own branch, leaving the others lit', 'Series circuits cannot share a supply voltage', 'Parallel connection raises the total resistance'],
        answer: 1,
        explanation: 'In a parallel network each branch is independent; a broken filament open-circuits one branch only. Series lamps share the supply voltage (their one advantage) but one failure blackens the whole string — the Christmas-tree problem.',
      },
      // PYQ-pattern: GATE 2016 — series-parallel reduction and current sharing (rephrased, values changed)
      {
        q: 'A 12 V supply feeds a 6 Ω resistor in series with the parallel combination of 3 Ω and 6 Ω. The current through the 3 Ω resistor is closest to:',
        options: ['0.5 A', '1.0 A', '1.5 A', '2.0 A'],
        answer: 1,
        explanation: 'Step 1 — Given: $V_{s} = 12$ V, series arm $6$ Ω, parallel pair $3$ Ω with $6$ Ω. Step 2 — Governing laws: parallel pair combines by $\\frac{1}{R_{p}} = \\frac{1}{R_{1}} + \\frac{1}{R_{2}}$, series arms add, and branch currents share inversely with resistance. Step 3 — Algebra: $R_{p} = \\frac{3 \\times 6}{3 + 6} = 2$ Ω, total $R = 6 + 2 = 8$ Ω, total current $I = \\frac{12}{8} = 1.5$ A, voltage on the pair $V_{p} = 1.5 \\times 2 = 3$ V, so $I_{3} = \\frac{3}{3} = 1.0$ A. Step 4 — Sanity check: the smaller branch takes the larger share ($1.0$ A versus $0.5$ A), the shares sum to $1.5$ A, and $R_{p} = 2$ Ω sits below the smallest branch as required. Step 5 — Distractor analysis: 0.5 A is the companion branch, 1.5 A is the total before sharing, and 2.0 A ignores the series drop. Step 6 — Conclude: the 3 Ω resistor carries about 1.0 A.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.3
  {
    sectionId: 'elec-ch2-s3',
    readingTime: 10,
    intro: 'The series and parallel rules are shadows of two deeper statements. Gustav Kirchhoff observed that the addition of currents at a junction and the addition of voltages round a loop are particular cases of two general conditions fundamental to every network. Nine times out of ten his laws handle just two currents or two voltages at a time — but applied jointly, with Ohm’s law, they solve networks of arbitrary complexity, including circuits powered by several sources and by sources whose value depends on another branch.',
    objectives: [
      'State Kirchhoff’s current and voltage laws in both Hughes’s and Nilsson’s formulations',
      'Apply KCL at junctions and to whole sections of a network, interpreting negative answers',
      'Apply KVL to any closed loop, including loops with no source and imaginary loops',
      'Solve a two-source network with simultaneous equations and verify it by power balance',
      'Analyse circuits containing dependent sources',
    ],
    concepts: [
      {
        term: 'Kirchhoff’s current law (KCL)',
        kind: 'law',
        statement: '**First (current) law:** at any instant the algebraic sum of the currents at a junction in a network is zero — currents held to flow towards the junction are given one sign, those away from it the other. Nilsson’s version: the algebraic sum of all the currents at any node equals zero.',
        detail: 'Choose a convention — Hughes marks currents flowing towards the junction positive (Fig. 3.23: $I_1 - I_2 + I_3 - I_4 + I_5 = 0$); Nilsson marks currents **leaving** a node positive. Either works; multiplying the equation by −1 converts one to the other. The law is simply conservation: where else can the branch currents come from but the source, there being no other conduction path?',
      },
      {
        term: 'KCL applies to whole sections',
        kind: 'insight',
        statement: 'Kirchhoff’s first law need not be applied only to a junction — it applies equally to a **section of a network** enclosed by any closed surface.',
        detail: 'In Hughes’s Example 3.9, applying KCL at junctions a and b of a two-loop network and eliminating $I_3$ produces $I_1 - I_2 + I_4 + I_5 = 0$ — the balance for the dotted box enclosing part of the network. The practical payoff: quite a complicated network’s internals can be ignored when only input and output quantities are wanted, as in Example 3.10 where $I_3 = -I_1 - I_2 = -1.0$ A for a box with $I_1 = 2.5$ A and $I_2 = -1.5$ A entering.',
      },
      {
        term: 'Kirchhoff’s voltage law (KVL)',
        kind: 'law',
        statement: '**Second (voltage) law:** at any instant in a closed loop, the algebraic sum of the e.m.f.s acting round the loop equals the algebraic sum of the p.d.s round the loop. Nilsson’s version: the algebraic sum of all the voltages around any closed path in a circuit equals zero.',
        detail: 'A loop (closed path) starts at an arbitrarily selected node, traces through selected basic circuit elements, and returns to the start without passing any intermediate node more than once. Tracing clockwise, take p.d.s acting clockwise as negative (Hughes) or, equivalently, assign voltage drops the positive sign (Nilsson) — the two are the same rule with opposite bookkeeping. Hughes’s simple series circuit of Fig. 3.30 says $E = V_1 + V_2 + V_3$; a three-branch parallel network already contains three loops.',
      },
      {
        term: 'Loops without sources and imaginary loops',
        kind: 'method',
        statement: 'A loop need not contain an e.m.f. — applying KVL to the source-free loop B of Hughes’s Fig. 3.31 gives $0 = -V_2 + V_3 + V_4$ — and KVL can even be applied to a **partly imaginary** loop to derive the p.d. across series elements: $0 = -V + V_1 + V_2 + V_3$ yields $V = V_1 + V_2 + V_3$.',
        detail: 'In Hughes’s Example 3.13, loop A gives $V_1 = E - V_2 = 12 - 8 = 4$ V and loop B gives $V_3 = V_2 - V_4 = 8 - 2 = 6$ V; loop C then confirms both, since $E = V_1 + V_3 + V_4 = 4 + 6 + 2 = 12$ V. In Example 3.15 the left loop gives $V_1 = 10 - 6 = 4$ V, the right loop gives $E_2 = 6 + 8 = 14$ V, and the outer loop checks it: $10 - 14 = 4 - 8$.',
      },
      {
        term: 'Nodes, terminal dots and independence',
        kind: 'notation',
        statement: 'A **node** is a point where two or more circuit elements meet (terminal dots are the start and end points of individual elements). In a circuit with $n$ nodes, Kirchhoff’s current law provides $n - 1$ independent equations.',
        detail: 'Nilsson’s flashlight model has four nodes a–d and four KCL equations, but any one follows from the other three, so only three count. Watch also for wires that cross **without** a connection dot — no node there. When only two elements connect at a node, the elements carry the same current and are in series; recognizing this collapses unknowns before any equation is written.',
      },
      {
        term: 'Series elements and unknown-count discipline',
        kind: 'method',
        statement: 'Two analysis details cut the algebra: (1) knowing a resistor’s current reveals its voltage through Ohm’s law, so associate **one** unknown with each resistor; (2) when only two elements meet at a node, KCL makes their currents equal, so define **one** unknown for both.',
        detail: 'In Nilsson’s flashlight, applying both disciplines reduces seven unknowns ($i_s, i_1, i_c, i_l, v_1, v_c, v_l$) to just one: KCL at nodes a, b, c gives $i_s = i_1 = -i_c = i_l$, and the single loop equation $v_l - v_c + v_1 - v_s = 0$ with Ohm’s law finishes the job. A circuit is solved when every element voltage and current is known.',
      },
      {
        term: 'Solving two-source networks',
        kind: 'method',
        statement: 'With two unknown currents, write **one KCL equation at a node and one KVL equation around a loop**, express the resistor voltages via Ohm’s law, and solve simultaneously; then verify that total power developed equals total power dissipated.',
        detail: 'Nilsson’s Example 2.8 does exactly this for a 120 V source feeding a 10 Ω resistor, a node pair, a 50 Ω resistor and a 6 A source: KCL at node b gives $i_1 - i_o - 6 = 0$; KVL clockwise gives $-120 + 10i_o + 50i_1 = 0$; solving yields $i_o = -3$ A and $i_1 = 3$ A. The power check: the 6 A source delivers 900 W, and the three absorbing elements take exactly 450 + 90 + 360 = 900 W.',
      },
      {
        term: 'Dependent sources',
        kind: 'definition',
        statement: 'A **dependent (controlled) source** has its value fixed by a voltage or current elsewhere in the circuit: $v_s = \\mu v_x$ (V/V), $v_s = \\rho i_x$ (V/A), $i_s = \\alpha v_x$ (A/V), $i_s = \\beta i_x$ (dimensionless). The constants carry the dimensions; the diamond symbol distinguishes them from the circle of independent sources.',
        detail: 'The permissible-interconnection rules extend to them: an independent and a dependent voltage source in parallel must still agree — 5 V versus $3v_x = 15$ V is not permitted. Dependent sources make electronics possible: transistor amplifiers are modelled with a current source $\\beta i_B$ (Nilsson’s Example 2.12 derives $i_B = [V_{CC}R_2/(R_1+R_2) - V_0] / [R_1R_2/(R_1+R_2) + (1+\\beta)R_E]$), and the node-voltage and mesh-current machinery of Chapter 3 leans on them heavily.',
      },
      {
        term: 'Choosing fruitful equations',
        kind: 'insight',
        statement: 'Not every closed path yields a useful KVL equation and not every node a useful KCL equation: a loop containing a dependent **current** source has an unknown voltage across it and should be avoided in KVL.',
        detail: 'Nilsson’s Example 2.10 (a 500 V source, 5 Ω, 20 Ω and a $5i_\\Delta$ source) picks the one loop avoiding the dependent source: $-500 + 5i_\\Delta + 20i_o = 0$, then KCL at node b: $-i_\\Delta + i_o - 5i_\\Delta = 0$, so $i_o = 6i_\\Delta$ and $500 = 125i_\\Delta$, giving $i_\\Delta = 4$ A, $i_o = 24$ A and $v_o = 480$ V. Think before writing — select the path and node that reduce the number and complexity of equations.',
      },
    ],
    examples: [
      {
        title: 'Junction currents — including a negative answer',
        problem: 'In Hughes’s Fig. 3.27, a current $I_1 = 3$ A enters junction a, $I_3 = 1$ A runs from a to c, and $I_6 = 1$ A leaves junction b. Write the current relationships for junctions a, b and c and determine $I_2$, $I_4$ and $I_5$. (Hughes Example 3.11)',
        steps: [
          { label: 'Step 1: Junction a', text: '$I_1 - I_2 - I_3 = 0$, so $I_2 = I_1 - I_3 = 3 - 1 = 2$ A.' },
          { label: 'Step 2: Junction b', text: '$I_2 + I_4 - I_6 = 0$, so $I_4 = I_6 - I_2 = 1 - 2 = -1$ A.' },
          { label: 'Step 3: Read the negative sign', text: 'A negative $I_4$ means the current actually flows from b towards c — the drawn reference arrow simply assumed the wrong direction, which is always permissible.' },
          { label: 'Step 4: Junction c', text: '$I_3 - I_4 - I_5 = 0$, so $I_5 = I_3 - I_4 = 1 - (-1) = 2$ A.' },
        ],
        result: '$I_2 = 2$ A, $I_4 = -1$ A (upwards, against its reference) and $I_5 = 2$ A — three junction equations, one direction reversal, zero drama.',
      },
      {
        title: 'A two-source network by simultaneous equations',
        problem: 'In Nilsson’s circuit a 120 V source drives current $i_o$ through a 10 Ω resistor into node b, from which a 6 A source pulls current while a 50 Ω resistor returns current $i_1$ to node c. Find $i_o$, then verify that total power generated equals total power dissipated. (Nilsson Example 2.8)',
        steps: [
          { label: 'Step 1: Count the unknowns', text: 'Two unknown currents, $i_o$ and $i_1$, so two independent equations are needed.' },
          { label: 'Step 2: KCL at node b', text: 'Summing currents leaving the node: $i_1 - i_o - 6 = 0$.' },
          { label: 'Step 3: KVL around the left loop', text: 'With Ohm’s law $v_o = 10i_o$ and $v_1 = 50i_1$, tracing clockwise: $-120 + 10i_o + 50i_1 = 0$.' },
          { label: 'Step 4: Solve simultaneously', text: 'Substituting $i_1 = i_o + 6$: $-120 + 10i_o + 50(i_o + 6) = 0$ gives $60i_o = -180$, so $i_o = -3$ A and $i_1 = 3$ A.' },
          { label: 'Step 5: Power in the resistors', text: '$p_{50} = (3)^{2}(50) = 450$ W and $p_{10} = (-3)^{2}(10) = 90$ W.' },
          { label: 'Step 6: Balance the sources', text: 'The 120 V source absorbs $p_{120} = -120 \\times (-3) = 360$ W; the 50 Ω drops $v_1 = 150$ V, so the 6 A source supplies $p_{6A} = -150 \\times 6 = -900$ W. Delivered 900 W = absorbed $450 + 90 + 360 = 900$ W.' },
        ],
        result: '$i_o = -3$ A, $i_1 = 3$ A, and the power check closes exactly: one 900 W supplier feeding three absorbers.',
      },
      {
        title: 'A dependent source: strategy before equations',
        problem: 'Find $v_o$ in a circuit where a 500 V source drives a 5 Ω resistor (current $i_\\Delta$) into node b of a 20 Ω resistor (current $i_o$), with a dependent current source $5i_\\Delta$ also entering node b. (Nilsson Example 2.10)',
        steps: [
          { label: 'Step 1: Survey before writing', text: 'Once $i_o$ is known, Ohm’s law gives $v_o = 20i_o$; once $i_\\Delta$ is known, the dependent source’s value $5i_\\Delta$ is known. Two unknowns, two equations.' },
          { label: 'Step 2: Pick the usable loop', text: 'KVL cannot use the loop through the dependent current source (its voltage is unknown), so take the loop through the 500 V source and both resistors: $-500 + 5i_\\Delta + 20i_o = 0$.' },
          { label: 'Step 3: KCL at node b', text: 'Summing currents leaving: $-i_\\Delta + i_o - 5i_\\Delta = 0$, hence $i_o = 6i_\\Delta$.' },
          { label: 'Step 4: Substitute and solve', text: '$500 = 5i_\\Delta + 20(6i_\\Delta) = 125i_\\Delta$, so $i_\\Delta = 4$ A and $i_o = 6 \\times 4 = 24$ A.' },
          { label: 'Step 5: Final voltage', text: '$v_o = 20i_o = 480$ V.' },
        ],
        result: 'The dependent source multiplies the outcome: a 500 V input produces 480 V across the 20 Ω resistor because $i_o = 6i_\\Delta$ — the seed of amplifier action.',
      },
    ],
    keyTakeaways: [
      'KCL: the algebraic sum of currents at any junction (or any closed section of a network) is zero.',
      'KVL: the algebraic sum of e.m.f.s round a loop equals the algebraic sum of p.d.s — equivalently, all voltages around any closed path sum to zero.',
      'Sign conventions are free choices fixed in advance: towards-junction positive or leaving-node positive; clockwise drops positive — any consistent set works.',
      'A circuit with $n$ nodes contributes only $n - 1$ independent KCL equations; two-element nodes identify series elements and collapse unknowns.',
      'Negative answers are informative: the assumed reference direction was simply reversed.',
      'Two-source networks fall to one KCL plus one KVL equation solved simultaneously, and the solution is verified by power balance.',
      'Dependent sources ($\\mu v_x$, $\\rho i_x$, $\\alpha v_x$, $\\beta i_x$) model amplifiers; avoid writing KVL through a dependent current source whose voltage is unknown.',
    ],
    quiz: [
      {
        q: 'At a junction, currents of 3 A and 4 A flow in while 2 A flows out. The remaining current $I_3$, drawn flowing out, is:',
        options: ['1 A in', '3 A out', '5 A out', '9 A out'],
        answer: 1,
        explanation: 'Hughes’s Example 3.8: $I_1 - I_2 + I_3 - I_4 = 0$ with $I_1 = 3$ A in, $I_2 = 4$ A out, $I_4 = 2$ A out gives $I_3 = -I_1 + I_2 + I_4 = -3 + 4 + 2 = 3$ A out. In-flow and out-flow must balance: $7$ A in versus $2 + 3$ A out.',
      },
      {
        q: 'A loop in a network contains no source at all. Applying KVL to it:',
        options: ['Is impossible — KVL requires an e.m.f.', 'Gives an equation in which the p.d.s alone sum to zero', 'Always yields the short-circuit current', 'Violates Kirchhoff’s first law'],
        answer: 1,
        explanation: 'Hughes’s loop B gives $0 = -V_2 + V_3 + V_4$. Loops without sources are often the most useful equations, and KVL even works on partly imaginary loops to obtain the p.d. across series-connected elements.',
      },
      {
        q: 'In a circuit with 5 nodes, how many independent KCL equations can be written?',
        options: ['5', '4', '3', 'As many as there are branches'],
        answer: 1,
        explanation: 'With $n$ nodes, only $n - 1$ independent current equations exist, because any one can be derived from the others. The fifth is redundant — as Nilsson shows by discarding one of the flashlight’s four node equations.',
      },
      {
        q: 'Nilsson’s two-source circuit yields $i_o = -3$ A and $i_1 = 3$ A. Which element delivers power?',
        options: ['The 120 V source', 'The 10 Ω resistor', 'The 6 A source, delivering 900 W', 'All three absorb power equally'],
        answer: 2,
        explanation: 'The 6 A source sees $v_1 = 50 \\times 3 = 150$ V and supplies $p = -150 \\times 6 = -900$ W. The 120 V source and both resistors absorb — 360 W, 90 W and 450 W — totalling exactly the 900 W delivered.',
      },
      {
        q: 'When analysing a circuit containing a dependent current source, one should:',
        options: ['Write KVL through the source first, since its current is known', 'Avoid loops through the source — its terminal voltage is unknown — and use KCL plus loops elsewhere', 'Treat it as an open circuit', 'Replace it by a resistor equal to its gain'],
        answer: 1,
        explanation: 'A current source fixes its current but not its voltage, so a loop through it introduces an extra unknown. Nilsson’s strategy: choose the closed path avoiding it, then use KCL at a node — exactly how the $5i_\\Delta$ circuit resolves to $v_o = 480$ V.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.4
  {
    sectionId: 'elec-ch2-s4',
    readingTime: 10,
    prerequisites: [
      'Ohm’s law: $V = IR$ across linear resistive branches',
      'Kirchhoff’s Current Law (KCL): algebraic sum of currents entering a node is zero',
      'Kirchhoff’s Voltage Law (KVL): algebraic sum of potential drops around any closed loop is zero',
      'Series resistance summation $R_{\\text{eq}} = R_1 + R_2$ and parallel conductance $G_{\\text{eq}} = G_1 + G_2$',
    ],
    intro: 'Circuit analysis rewards pattern recognition. Two patterns cover an astonishing fraction of practical circuits: the divider, which slices a voltage or a current between resistances, and the bridge, which compares them. This section formalizes voltage and current division, meets the instruments built from them (ammeter, voltmeter, touch screen), and adds the delta-to-wye transformation that tames the one network the series and parallel rules cannot touch.',
    objectives: [
      'Apply the voltage-division and current-division equations to arbitrary series and parallel sets',
      'Predict the effect of loading a voltage divider and of resistor tolerance',
      'Explain how d’Arsonval ammeters and voltmeters are built and why they disturb a circuit',
      'Derive and use the Wheatstone bridge balance condition $R_x = (R_2/R_1)R_3$',
      'Transform a delta (π) network to a wye (T) and use it to reduce bridge circuits',
    ],
    concepts: [
      {
        term: 'The voltage-divider circuit',
        kind: 'method',
        statement: 'Two series resistors across a supply $v_s$ split it as $$v_1 = v_s\\,\\frac{R_1}{R_1 + R_2}, \\qquad v_2 = v_s\\,\\frac{R_2}{R_1 + R_2}.$$ Each fraction is “the resistance across which the divided voltage is defined, divided by the sum of the two resistances”, so divided voltages are always less than the source voltage.',
        detail: 'Designing one for $v_1 = 15$ V and $v_2 = 5$ V from a 20 V supply (Nilsson’s Example 3.3) only fixes the **ratio** $R_1 = 3R_2$ — infinitely many pairs work ($R_2 = 10$ kΩ with $R_1 = 30$ kΩ, or $R_2 = 400$ Ω with $R_1 = 1200$ Ω). The absolute values are chosen for power dissipation and loading effects. A single circuit needing +15 V, −15 V and +5 V is the classic divider application.',
      },
      {
        term: 'The current-divider circuit',
        kind: 'method',
        statement: 'Two parallel resistors fed a total current $i_s$ share it as $$i_1 = i_s\\,\\frac{R_2}{R_1 + R_2}, \\qquad i_2 = i_s\\,\\frac{R_1}{R_1 + R_2}$$ — the current in one resistor equals the total times the **other** resistance over the sum.',
        detail: 'Nilsson’s Example 3.6 designs one under a power constraint: with a 100 mA source and 0.25 W resistors, producing $i_2 = 50$ mA forces equal sharing, so both resistors are equal and $R \\le 0.25/(0.05)^{2} = 100$ Ω — the largest usable value.',
      },
      {
        term: 'General voltage and current division',
        kind: 'law',
        statement: 'For $n$ series resistors with total drop $v$: $v_j = (R_j/R_{eq})\\,v$. For $n$ parallel resistors with total current $i$: $i_j = (R_{eq}/R_j)\\,i$. The proportionality constants are the **inverse** of each other.',
        detail: 'Nilsson’s Example 3.7 exercises both on one circuit: with $R_{eq} = (36+44)\\,\\parallel\\,10\\,\\parallel\\,(40+10+30)\\,\\parallel\\,24 = 6$ Ω, an 8 A source sends $i_o = (6/24) \\times 8 = 2$ A through the 24 Ω branch; the branch voltage $v = 48$ V then divides across the series chain as $v_o = (30/80) \\times 48 = 18$ V across the 30 Ω resistor.',
      },
      {
        term: 'Loading a voltage divider',
        kind: 'insight',
        statement: 'Connecting a load $R_L$ across $R_2$ replaces it by $R_{eq} = R_2R_L/(R_2 + R_L)$ in the divider formula: $$v_o = \\frac{R_2}{R_1[1 + (R_2/R_L)] + R_2}\\,v_s.$$ As long as $R_L \\gg R_2$, the output ratio is essentially undisturbed; the expression reduces to the unloaded divider as $R_L \\to \\infty$.',
        detail: 'Nilsson’s Example 3.4 loads the 20 V, 30 kΩ/10 kΩ divider with $R_L = 10$ kΩ: the parallel pair gives 5 kΩ and the output collapses to $v_o = (5000/35\\,000) \\times 20 = 2.86$ V instead of 5 V. Rebuilding the divider with $R_1 = 1200$ Ω and $R_2 = 400$ Ω (same ratio) yields $v_o = 4.85$ V — close, because $R_L \\gg R_2$. Divider design lesson: a **stiff** divider uses small resistances and burns current.',
      },
      {
        term: 'Resistor tolerance in dividers',
        kind: 'insight',
        statement: 'Commercial resistors vary within a percentage of their stated value, and the divider output inherits the worst case: with ±10 per cent parts, a 25 kΩ/100 kΩ divider on 100 V spans **76.60 V to 83.02 V**.',
        detail: 'Nilsson’s Example 3.5 computes the extremes by pushing the resistances in opposite directions: the maximum uses $R_2 = 110$ kΩ (high) and $R_1 = 22.5$ kΩ (low), the minimum $R_2 = 90$ kΩ and $R_1 = 27.5$ kΩ. This couples directly to the colour-code tolerances of Section 2.1 — silver-band parts move a divider by a fifth of its swing.',
      },
      {
        term: 'Measuring current and voltage',
        kind: 'method',
        statement: 'An **ammeter** is placed in series with the element whose current is measured — ideally a short circuit ($0$ Ω). A **voltmeter** is placed in parallel — ideally an open circuit ($\\infty$ Ω). Real meters extract energy, so their effective resistance should obey the rule of one-tenth against the circuit’s own resistances.',
        detail: 'Analog meters use the **d’Arsonval movement** — a movable coil in a permanent magnet’s field whose pointer deflection is proportional to coil current; a typical movement is rated 50 mV, 1 mA (full-scale coil drop and current). An analog ammeter puts a shunt $R_A$ in parallel with the movement; an analog voltmeter puts a multiplier $R_v$ in series with it. Digital meters sample the continuous signal at discrete times and insert less resistance while reading more precisely.',
      },
      {
        term: 'The Wheatstone bridge',
        kind: 'method',
        statement: 'Four resistors, a dc source and a galvanometer (a microamp d’Arsonval detector). Adjust $R_3$ until the galvanometer current is zero — the bridge is **balanced** — and then $$R_x = \\frac{R_2}{R_1}\\,R_3.$$ The derivation: with $i_g = 0$, KCL gives $i_1 = i_3$ and $i_2 = i_x$, and since the detector drops no voltage, KVL gives $i_3R_3 = i_xR_x$ and $i_1R_1 = i_2R_2$; dividing the pair eliminates the currents.',
        detail: 'Commercial bridges measure resistances of medium value — 1 Ω to 1 MΩ — with accuracies near ±0.1 per cent. Below 1 Ω, thermoelectric voltages at dissimilar-metal junctions and $i^{2}R$ heating interfere; above 1 MΩ, leakage currents through the insulation rival the branch currents. Ratio arms $R_1$ and $R_2$ switch through decimal values 1, 10, 100 and 1000 Ω so that $R_2/R_1$ varies from 0.001 to 1000, while $R_3$ adjusts from 1 to 11 000 Ω.',
      },
      {
        term: 'Delta and wye interconnections',
        kind: 'definition',
        statement: 'Three resistors meeting at one common node form a **wye (Y)**, reshaped as a **tee (T)**; three resistors connected in a triangle form a **delta (Δ)**, reshaped as a **pi (π)**. The bridge-with-meter network contains both simultaneously and has **no** series or parallel pairs, so it cannot be reduced by the simple rules.',
        detail: 'Equivalence means the resistance between every corresponding terminal pair matches: for the Δ, $R_{ab} = R_c(R_a + R_b)/(R_a + R_b + R_c) = R_1 + R_2$ and cyclically. The terminal behaviour — what any external circuit can measure from the black box — is identical before and after the swap.',
      },
      {
        term: 'Delta-to-wye transformation',
        kind: 'law',
        statement: 'Each Y resistor is the product of the two **adjacent** Δ resistors divided by the sum of all three: $$R_1 = \\frac{R_bR_c}{R_a + R_b + R_c}, \\quad R_2 = \\frac{R_cR_a}{R_a + R_b + R_c}, \\quad R_3 = \\frac{R_aR_b}{R_a + R_b + R_c}.$$ Reversing, $R_a = (R_1R_2 + R_2R_3 + R_3R_1)/R_1$ and cyclically.',
        detail: 'The reverse (wye-to-delta) formulas put the pairwise-products sum over the resistor **opposite** the desired Δ arm. Equal Δ resistors $R$ transform to equal Y resistors $R/3$ — the symmetry check worth remembering. Δ and Y structures appear throughout practical circuits, not only in resistive bridges, so the transformation is a permanent addition to the toolkit.',
      },
    ],
    derivations: [
      {
        title: 'Voltage Divider Rule and Load Impedance Attenuation',
        statement: 'For two series resistors $R_1$ and $R_2$ across supply $v_s$, the unloaded output across $R_2$ is $v_2 = v_s \\frac{R_2}{R_1 + R_2}$. Under a parallel load resistance $R_L$, the actual voltage is attenuated to $v_o = v_s \\frac{R_2 \\parallel R_L}{R_1 + (R_2 \\parallel R_L)}$.',
        prerequisites: [
          'Kirchhoff\\\'s Voltage Law (KVL): $\\sum v_{\\text{drops}} = 0$',
          'Ohm\\\'s Law: $v = iR$',
          'Equivalent parallel resistance: $R_2 \\parallel R_L = \\frac{R_2 R_L}{R_2 + R_L}$',
        ],
        steps: [
          {
            label: 'Step 1: Loop current under series KVL',
            formula: `$$ -v_s + v_1 + v_2 = 0 \\implies v_s = i R_1 + i R_2 = i (R_1 + R_2) \\implies i = \\frac{v_s}{R_1 + R_2} $$`,
            explanation: 'In a single closed loop containing an ideal voltage source $v_s$ and series resistors $R_1$ and $R_2$, charge conservation mandates that the exact same current $i$ traverses every component. Applying Kirchhoff\\\'s Voltage Law clockwise establishes that the source potential matches the sum of the resistive drops.',
          },
          {
            label: 'Step 2: Voltage drop across the output resistor',
            formula: `$$ v_2 = i R_2 = \\left(\\frac{v_s}{R_1 + R_2}\\right) R_2 = v_s \\left(\\frac{R_2}{R_1 + R_2}\\right) $$`,
            explanation: 'By Ohm\\\'s Law, the terminal voltage across $R_2$ is the product of loop current and resistance. The output voltage is strictly a dimensionless fraction $\\frac{R_2}{R_1 + R_2} < 1$ of the input source voltage, independent of current magnitude.',
          },
          {
            label: 'Step 3: Connecting a finite load resistance $R_L$',
            formula: `$$ R_{\\text{eq}} = R_2 \\parallel R_L = \\frac{R_2 R_L}{R_2 + R_L} $$`,
            explanation: 'When an external device with input resistance $R_L$ is attached across the output terminals, it sits in parallel with $R_2$. The parallel combination presents an equivalent resistance $R_{\\text{eq}}$ strictly smaller than both $R_2$ and $R_L$.',
          },
          {
            label: 'Step 4: Algebraic derivation of loaded output voltage',
            formula: `$$ v_o = v_s \\frac{\\frac{R_2 R_L}{R_2 + R_L}}{R_1 + \\frac{R_2 R_L}{R_2 + R_L}} = v_s \\frac{R_2 R_L}{R_1(R_2 + R_L) + R_2 R_L} = v_s \\frac{R_2}{R_1\\left(1 + \\frac{R_2}{R_L}\\right) + R_2} $$`,
            explanation: 'Multiplying the numerator and denominator by $(R_2 + R_L)$ and factoring out $R_L$ isolates the loading penalty term $\\frac{R_2}{R_L}$. As $R_L \\to \\infty$ (ideal open-circuit voltmeter), the term $\\frac{R_2}{R_L} \\to 0$, cleanly recovering the unloaded voltage divider formula.',
          },
        ],
        result: 'The loaded divider output is: $$ v_o = v_2 \\left[ \\frac{1}{1 + \\frac{R_1 R_2}{R_L(R_1 + R_2)}} \\right] $$ This proves the fundamental electrical engineering rule of thumb: to prevent more than 1\\% loading error, the load resistance must satisfy $R_L \\ge 100(R_1 \\parallel R_2)$. A "stiff" voltage divider requires small resistances $R_1, R_2$, trading higher quiescent power dissipation for output voltage stability.',
      },
      {
        title: 'Wheatstone Bridge Balance Condition',
        statement: 'In a four-resistor bridge network powered by source $v_s$, zero current flows through the central detector branch ($i_g = 0$) if and only if the bridge arms satisfy the exact ratio $R_x = \\frac{R_2}{R_1} R_3$.',
        prerequisites: [
          'Kirchhoff\\\'s Current Law (KCL) at circuit nodes',
          'Kirchhoff\\\'s Voltage Law (KVL) around detector loops',
          'Null-measurement principle of galvanometers',
        ],
        steps: [
          {
            label: 'Step 1: KCL at bridge detector nodes at null',
            formula: `$$ i_g = 0 \\implies i_1 = i_3 \\quad \\text{and} \\quad i_2 = i_x $$`,
            explanation: 'Let node $b$ connect $R_1$ and $R_3$, and node $d$ connect $R_2$ and $R_x$, with the galvanometer bridging nodes $b$ and $d$. At null balance, no current leaves or enters through the galvanometer branch ($i_g = 0$). By KCL at node $b$, all current through $R_1$ continues straight into $R_3$; likewise by KCL at node $d$, all current through $R_2$ continues into $R_x$.',
          },
          {
            label: 'Step 2: Potential equality across the galvanometer',
            formula: `$$ v_g = v_b - v_d = 0 \\implies v_b = v_d $$`,
            explanation: 'For zero current to flow through a galvanometer of non-zero internal resistance, the potential difference across its terminals must be identically zero. Nodes $b$ and $d$ are equipotential.',
          },
          {
            label: 'Step 3: Matching branch potential drops via KVL',
            formula: `$$ v_{ab} = v_{ad} \\implies i_1 R_1 = i_2 R_2 \\qquad \\text{and} \\qquad v_{bc} = v_{dc} \\implies i_3 R_3 = i_x R_x $$`,
            explanation: 'Because node $a$ is the common upper supply terminal and $v_b = v_d$, the potential drop from $a$ to $b$ must equal that from $a$ to $d$. Similarly, with $c$ being the common lower terminal, the drops from $b$ to $c$ and from $d$ to $c$ must be identical.',
          },
          {
            label: 'Step 4: Ratio division eliminating unknown branch currents',
            formula: `$$ \\frac{i_1 R_3}{i_1 R_1} = \\frac{i_2 R_x}{i_2 R_2} \\implies \\frac{R_3}{R_1} = \\frac{R_x}{R_2} $$`,
            explanation: 'Substituting $i_3 = i_1$ and $i_x = i_2$ into the second equation and dividing it member-by-member by the first equation cancels the unknown currents $i_1$ and $i_2$ completely.',
          },
        ],
        result: 'Solving for the unknown resistor yields: $$ R_x = \\frac{R_2}{R_1} R_3 $$ Crucially, the source voltage $v_s$ and galvanometer resistance $R_g$ do not appear anywhere in the result. The Wheatstone bridge measurement is completely independent of source voltage fluctuations, battery aging, and detector impedance, making it one of the most accurate precision measurement instruments in experimental physics and electrical engineering.',
      },
    ],
    examples: [
      {
        title: 'Locating a touch: the resistive touch screen',
        problem: 'A resistive touch screen applies 6 V across the x-grid and the y-grid alternately; the screen has 720 pixels in the x-direction and 1260 in the y-direction. A touch produces 4.5 V in the x-grid and 1.5 V in the y-grid. Find $\\alpha$, $\\beta$ and the pixel touched. (Nilsson Practical Perspective and Problem 3.73)',
        steps: [
          { label: 'Step 1: Model the grid', text: 'Touching divides the total grid resistance $R_x$ into $\\alpha R_x$ and $(1 - \\alpha)R_x$ — a voltage divider.' },
          { label: 'Step 2: Voltage division along the grid', text: '$V_x = \\frac{\\alpha R_x}{\\alpha R_x + (1-\\alpha)R_x}V_s = \\alpha V_s$, so the sensed voltage is directly the fractional position from the far right.' },
          { label: 'Step 3: Recover the fractions', text: '$\\alpha = V_x/V_s = 4.5/6 = 0.75$ and $\\beta = V_y/V_s = 1.5/6 = 0.25$.' },
          { label: 'Step 4: Convert to pixel coordinates', text: 'With the origin at the upper left, $x = (1-\\alpha)p_x = (1 - 0.75) \\times 720 = 180$ and $y = (1-\\beta)p_y = (1 - 0.25) \\times 1260 = 945$.' },
        ],
        result: 'The touch sits at pixel (180, 945) — a voltage divider, a current-switching circuit and two divisions doing the work of a pointing device.',
      },
      {
        title: 'Designing d’Arsonval meters',
        problem: 'A 50 mV, 1 mA d’Arsonval movement is to be used (a) in an ammeter with a 10 mA full-scale reading and (b) in a voltmeter with a 150 V full-scale reading. Determine the added resistances and the resistance each meter inserts into a circuit. (Nilsson Examples 3.8 and 3.9)',
        steps: [
          { label: 'Step 1: Ammeter shunt', text: 'At full scale 1 mA flows in the movement, so the shunt must carry the other 9 mA while dropping the same 50 mV: $R_A = 50 \\times 10^{-3}/9 \\times 10^{-3} = 5.555$ Ω.' },
          { label: 'Step 2: Ammeter’s inserted resistance', text: 'The meter presents $50\\ \\text{mV}/10\\ \\text{mA} = 5$ Ω — equivalently $50 \\parallel (50/9) = 5$ Ω.' },
          { label: 'Step 3: Voltmeter multiplier', text: 'At 150 V the movement still carries 1 mA and needs only 50 mV, so $R_v$ drops 149.95 V: $R_v = 149.95/0.001 = 149\\,950$ Ω.' },
          { label: 'Step 4: Voltmeter’s inserted resistance', text: 'The voltmeter presents $150\\ \\text{V}/1\\ \\text{mA} = 150\\,000$ Ω in parallel with the measured element.' },
          { label: 'Step 5: Scale the design', text: 'A 1 A ammeter needs $R_A = 50/999 \\approx 50.05$ mΩ and inserts 0.05 Ω; a 5 V voltmeter uses $R_v = 4.95/0.001 = 4950$ Ω and inserts 5000 Ω — higher ranges, gentler loading.' },
        ],
        result: '$R_A = 5.555$ Ω (5 Ω inserted) and $R_v = 149\\,950$ Ω (150 kΩ inserted) — the ammeter is a current divider, the voltmeter a voltage divider, both rated by how little they disturb.',
      },
      {
        title: 'Bridge range, then delta-to-wye reduction',
        problem: 'First: a Wheatstone bridge has $R_1 = 1$ kΩ, $R_2 = 4$ kΩ and $R_3$ variable from 10 Ω to 2 kΩ — what resistance range can it measure? Then: find the current and power supplied by a 40 V source that feeds a 5 Ω resistor in series with the network (100 Ω, 125 Ω, 25 Ω upper delta; 40 Ω, 37.5 Ω lower arms). (Nilsson Examples 3.10 and 3.11)',
        steps: [
          { label: 'Step 1: Bridge range at the low end', text: 'With $R_3 = 10$ Ω: $R_x = (R_2/R_1)R_3 = (4000/1000) \\times 10 = 40$ Ω.' },
          { label: 'Step 2: Bridge range at the high end', text: 'With $R_3 = 2$ kΩ: $R_x = 4 \\times 2000 = 8000$ Ω — the bridge measures 40 Ω to 8 kΩ.' },
          { label: 'Step 3: Transform the upper delta', text: 'For the Δ of 100 Ω, 125 Ω and 25 Ω (sum 250 Ω): $R_1 = 100 \\times 125/250 = 50$ Ω, $R_2 = 125 \\times 25/250 = 12.5$ Ω, $R_3 = 100 \\times 25/250 = 10$ Ω.' },
          { label: 'Step 4: Reduce the transformed circuit', text: 'The Y replaces the delta, leaving $R_{eq} = 5 + 50 + (10 + 40) \\parallel (12.5 + 37.5) = 55 + (50 \\times 50)/100 = 80$ Ω.' },
          { label: 'Step 5: Source current and power', text: 'The 40 V source delivers $i = 40/80 = 0.5$ A and $p = 40 \\times 0.5 = 20$ W.' },
        ],
        result: 'The bridge covers 40 Ω to 8 kΩ; the delta-laden network reduces to 80 Ω and draws 0.5 A, 20 W — a transformation no series–parallel rule could achieve.',
      },
    ],
    keyTakeaways: [
      'Voltage division: $v_j = (R_j/R_{eq})v$ over series sets; current division: $i_j = (R_{eq}/R_j)i$ over parallel sets — proportionality constants inverse to each other.',
      'Divided voltages are always less than the source voltage; the current in one of two parallel resistors uses the other resistance on top.',
      'Loading a divider lowers its output: $10$ kΩ across a 10 kΩ lower arm halves 5 V to 2.86 V; keep $R_L \\gg R_2$ for a stiff divider.',
      '±10 per cent resistors swing a 100 V, 25 kΩ/100 kΩ divider output between 76.60 V and 83.02 V.',
      'Ammeters insert series resistance (ideally 0 Ω); voltmeters insert parallel resistance (ideally ∞); d’Arsonval movements are rated like 50 mV, 1 mA elements.',
      'The Wheatstone bridge balances when $R_x = (R_2/R_1)R_3$, accurate to ±0.1 per cent over 1 Ω–1 MΩ.',
      'Delta-to-wye: $R_1 = R_bR_c/(R_a + R_b + R_c)$ and cyclically — the only tool that reduces bridge networks, and the reason a $40$ V, 80 Ω problem takes five short steps.',
    ],
    quiz: [
      {
        q: 'A 100 V supply feeds 25 kΩ in series with 100 kΩ, and the output is taken across the 100 kΩ resistor. If both resistors are ±10 per cent parts, the output lies between:',
        options: ['76.60 V and 83.02 V', '80.00 V and 80.00 V', '70.00 V and 90.00 V', '90.00 V and 110.00 V'],
        answer: 0,
        explanation: 'The maximum pairs $R_2$ high (110 kΩ) with $R_1$ low (22.5 kΩ): $110/132.5 \\times 100 = 83.02$ V; the minimum pairs $R_2$ low (90 kΩ) with $R_1$ high (27.5 kΩ): $90/117.5 \\times 100 = 76.60$ V — Nilsson’s Example 3.5.',
      },
      {
        q: 'A d’Arsonval movement rated 50 mV and 1 mA is made into a 10 mA ammeter. The shunt resistance is approximately:',
        options: ['5.55 Ω', '50 Ω', '5.55 mΩ', '4950 Ω'],
        answer: 0,
        explanation: 'The shunt carries 9 mA while the movement carries 1 mA, both dropping 50 mV: $R_A = 0.05/0.009 = 5.555$ Ω. The assembled meter inserts $0.05/0.01 = 5$ Ω into the circuit.',
      },
      {
        q: 'A Wheatstone bridge balances with $R_1 = 1$ kΩ, $R_2 = 500$ Ω and $R_3 = 2$ kΩ. The unknown resistance is:',
        options: ['500 Ω', '1 kΩ', '2 kΩ', '4 kΩ'],
        answer: 1,
        explanation: '$R_x = (R_2/R_1)R_3 = (500/1000) \\times 2000 = 1000$ Ω. Nilsson adds the follow-up: in the balanced state $R_x$ carries the same current as $R_3$ but a larger voltage, so it dissipates the most power.',
      },
      {
        q: 'Three equal resistors $R$ connected in delta transform to a wye of:',
        options: ['Three resistors of $R$', 'Three resistors of $R/3$', 'Three resistors of $3R$', 'One resistor of $R/3$'],
        answer: 1,
        explanation: 'With $R_a = R_b = R_c = R$: $R_1 = R \\cdot R/(3R) = R/3$ and cyclically — the symmetric special case that makes balanced three-phase networks tractable.',
      },
      {
        q: 'Why can a Wheatstone bridge with its galvanometer replaced by a resistance not be reduced by series–parallel rules alone?',
        options: ['The bridge is non-linear', 'Its five resistors form delta and wye interconnections with no series or parallel pairs', 'Kirchhoff’s laws do not apply to bridges', 'The source is dc rather than ac'],
        answer: 1,
        explanation: 'The meter resistance completes both a Δ (with $R_1$, $R_2$) and a Y (with $R_1$, $R_3$) among the five resistors; no pair shares both a node-exclusive series relation or a full parallel relation. The delta-to-wye transformation is the tool built for exactly this topology.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.5
  {
    sectionId: 'elec-ch2-s5',
    readingTime: 9,
    intro: 'Every practical question about electricity eventually asks how hot something gets. Resistors produce heat when passing current; that heat must escape; the resistance itself changes with temperature as it does. Hughes closes his chapter on simple DC circuits with the three laws that quantify this — power and energy, resistivity and conductor sizing, and the temperature coefficient of resistance — and the rating philosophy built on them.',
    objectives: [
      'Compute power and energy in resistors from $P = VI = I^{2}R = V^{2}/R$ and express energy in kilowatt hours',
      'Apply the resistivity law $R = \\rho l/A$ to conductor calculations',
      'Scale resistance with length and cross-sectional area',
      'Use the temperature coefficient of resistance to find hot resistance or operating temperature',
      'Explain temperature-rise ratings and how coil temperatures are measured',
    ],
    concepts: [
      {
        term: 'Power in a circuit: the lamp story',
        kind: 'law',
        statement: 'Since $P \\propto V$ and $P \\propto I$ separately, power is their product: $$P = VI.$$ Substituting $V = IR$ gives the heating forms $P = I^{2}R$ and $P = V^{2}/R$.',
        detail: 'A 230 V lamp rated at 0.26 A takes $P = 230 \\times 0.26 = 60$ W (Hughes’s Example 3.16); a second identical lamp in parallel doubles the demand to 120 W at $I = 0.52$ A. In series (Example 3.17), each lamp’s $R = 230/0.26 = 885$ Ω stacks to 1770 Ω, the current halves to 0.13 A, and each lamp produces only about 15 W — a quarter of expected, which is why the series connection glowed feebly in Section 2.2.',
      },
      {
        term: 'The heating effect and the I²R loss',
        kind: 'insight',
        statement: 'The expression $P = I^{2}R$ is the **heating effect of a current**, known as the conductor or $I^{2}R$ loss — energy transferred as heat and lost to the electrical system.',
        detail: 'In a radiator bar or cooker element the loss is beneficial; in a cable it is pure waste. Strictly, $I^{2}R$ is a power (a rate), though engineers speak of it as a “loss” — the loose language of “current” again. Hughes’s Example 3.18: 3 A through 10 Ω develops $P = 3^{2} \\times 10 = 90$ W, and 5 min of it releases $W = Pt = 90 \\times 300 = 27\\,000$ J. When 9 A divides between parallel 8 Ω and 4 Ω branches (Example 3.20), the 3 A branch dissipates $72$ W and the 6 A branch 144 W — rounded to 140 W, honouring the inputs’ one significant figure.',
      },
      {
        term: 'Energy and the kilowatt hour',
        kind: 'law',
        statement: 'Energy from power: $$W = Pt = VIt = I^{2}Rt$$ in joules. For electricity supply the joule is too small, so the commercial unit is the **kilowatt hour** — a kilowatt sustained for an hour, $3.6 \\times 10^{6}$ J.',
        detail: 'Hughes’s Example 3.19: a heater drawing 8 A from 230 V for 12 h consumes $P = 230 \\times 8 = 1840$ W $= 1.84$ kW, so $W = 1.84 \\times 12 = 22$ kW h. Consumers are charged per unit — the kilowatt hour — making this the number on every electricity bill.',
      },
      {
        term: 'Resistivity',
        kind: 'law',
        statement: 'Resistance is proportional to length ($R \\propto l$) and inversely proportional to cross-sectional area ($R \\propto 1/A$). Inserting the material constant gives $$R = \\rho\\frac{l}{A},$$ where the **resistivity** $\\rho$ is measured in ohm metres.',
        detail: 'The value of $\\rho$ is the resistance of a unit cube of the material measured between opposite faces. Typical values at 0 °C: copper $1.59 \\times 10^{-8}$ Ω m, aluminium $2.7 \\times 10^{-8}$, zinc $5.37 \\times 10^{-8}$, tungsten $5.35 \\times 10^{-8}$, brass $7.2 \\times 10^{-8}$ — and, three orders up, carbon at $6500 \\times 10^{-8}$ Ω m. Alloys made for resistance sit high deliberately: manganin $42 \\times 10^{-8}$, eureka $49 \\times 10^{-8}$ Ω m.',
      },
      {
        term: 'Scaling with length and area',
        kind: 'method',
        statement: 'Two consequences of $R = \\rho l/A$ used constantly in cable work: **same gauge, longer run** — resistance scales linearly with length; **same length, fatter wire** — resistance scales with $1/d^{2}$ for diameter $d$, so doubling the diameter quarters the resistance.',
        detail: 'Hughes’s Example 3.22 halves nothing but the number: a 0.5 mm diameter wire of 300 Ω, redrawn at 1.0 mm diameter, drops to $R_2 = 300 \\times (0.5/1.0)^{2} = 75$ Ω. Example 3.21 scales length: a cable whose 700 m loop measures 100 Ω presents $100 \\times 8000/700 = 1143$ Ω over 8 km — the argument runs straight through the series-resistance rule of Section 2.2.',
      },
      {
        term: 'Temperature coefficient of resistance',
        kind: 'law',
        statement: 'Over a moderate range (about 100 °C) the resistance of pure metals rises proportionally with temperature. With $\\alpha_0$ the fractional change per degree referred to 0 °C, $$\\frac{R_1}{R_2} = \\frac{1 + \\alpha_0\\theta_1}{1 + \\alpha_0\\theta_2}.$$ Referred to 20 °C instead: $R_t = R_{20}[1 + \\alpha_{20}(\\theta - 20)]$.',
        detail: 'For copper, the resistance–temperature graph extrapolates to zero at $-234.5$ °C, giving $\\alpha_0 = 1/234.5 = 0.004\\,264$ per °C — tabulated as 0.00428 per °C; referred to 20 °C the coefficient is 0.00392 per °C. Other 0 °C values: aluminium 0.00381, silver 0.00408, nickel 0.00618, zinc 0.00385, brass 0.001. The reference temperature is a convention — some countries standardize on 20 °C.',
      },
      {
        term: 'Materials: positive, negative and zero coefficients',
        kind: 'insight',
        statement: 'The resistance of all pure metals **increases** with temperature; that of carbon, electrolytes and insulating materials **decreases**; alloys like manganin ($\\alpha_0 = 0.00002$), constantan ($\\alpha_0 = 0$) and eureka ($0.00001$) are engineered to stay almost constant.',
        detail: 'A tungsten lamp filament runs near 2500 °C — its hot resistance is an order above the cold value, which is why the lamp current at switch-on is briefly enormous. Near absolute zero (0 K, $-273$ °C) resistance falls to zero with no $I^{2}R$ loss: **superconductors**. Carbon’s negative coefficient ($-0.00048$ per °C) explains **thermal runaway** in semiconductors: heat lowers resistance, raises current, raises heat further, until the structure is destroyed unless cooled.',
      },
      {
        term: 'Temperature rise and ratings',
        kind: 'definition',
        statement: 'The maximum power dissipable as heat in a device is limited by the **maximum permissible temperature**, set by the insulating material — paper and cotton become brittle beyond about 100 °C, while mica and glass withstand much more.',
        detail: 'Under load, temperature rise is largely due to the $I^{2}R$ loss in conductors; the **full-load (rated) output** is the maximum obtainable for a specified temperature rise after continuous operation. Coil temperature can be measured by thermometer, by the increase of resistance (the temperature-coefficient law in reverse), or by thermojunctions embedded when the coil is wound — the embedded method reveals the hot spots, since heat generated at the centre of a coil must flow outwards through cooler material. In semiconductor devices even a small rise above the maximum rapidly leads to catastrophic breakdown.',
      },
    ],
    examples: [
      {
        title: 'From lamp power to the kilowatt hour',
        problem: 'A 230 V lamp is rated to pass 0.26 A. Calculate its power; then the supply current when a second similar lamp joins it in parallel; then the power each lamp develops if the two are connected in series instead (assume constant resistance); finally, the energy an 8 A, 230 V heater consumes in 12 h. (Hughes Examples 3.16, 3.17, 3.19)',
        steps: [
          { label: 'Step 1: One lamp', text: '$P = VI = 230 \\times 0.26 = 60$ W (the book’s rounded 59.8 W), and its resistance is $R = 230/0.26 = 885$ Ω.' },
          { label: 'Step 2: Two lamps in parallel', text: 'Total power $= 60 + 60 = 120$ W, so $I = P/V = 120/230 = 0.52$ A — full brilliance, twice the current.' },
          { label: 'Step 3: Two lamps in series', text: 'Circuit resistance $= 885 + 885 = 1770$ Ω, so $I = 230/1770 = 0.13$ A and $P = 230 \\times 0.13 = 30$ W combined — 15 W per lamp, a quarter of expected.' },
          { label: 'Step 4: The estimate’s honesty', text: 'The quarter-power result is an estimate: no allowance is made for the change of resistance as the filaments run cooler — the temperature coefficient of Section 2.5’s closing concepts.' },
          { label: 'Step 5: The heater’s energy bill', text: '$P = 230 \\times 8 = 1840$ W $= 1.84$ kW, so $W = 1.84 \\times 12 = 22$ kW h — 22 “units” on the meter.' },
        ],
        result: '60 W per lamp; 0.52 A in parallel; about 15 W per lamp in series; and 22 kW h for the heater — the whole power-and-energy chain in one example.',
      },
      {
        title: 'Conductor resistance: resistivity, length and area',
        problem: 'A coil is wound from a 10 m length of copper wire of cross-sectional area $1.0\\ \\text{mm}^{2}$; find its resistance. Then find the resistance of the same length of 0.5 mm diameter wire if the diameter were doubled, and the loop resistance of 8 km of cable whose 700 m loop measures 100 Ω. (Hughes Examples 3.23, 3.22, 3.21)',
        steps: [
          { label: 'Step 1: Apply the resistivity law', text: 'With $\\rho = 1.59 \\times 10^{-8}$ Ω m for copper, $l = 10$ m and $A = 1 \\times 10^{-6}$ m²: $R = \\rho l/A = (1.59 \\times 10^{-8} \\times 10)/10^{-6} = 0.159$ Ω.' },
          { label: 'Step 2: Scale by area', text: 'Resistance varies inversely with area, and area with $d^{2}$: doubling the diameter of a 300 Ω, 0.5 mm wire gives $R_2 = 300 \\times (0.5/1.0)^{2} = 75$ Ω.' },
          { label: 'Step 3: Scale by length', text: 'Resistance varies directly with length: $R_2 = R_1 l_2/l_1 = 100 \\times 8000/700 = 1143$ Ω for the 8 km cable.' },
          { label: 'Step 4: Perspective', text: 'The three results — 0.159 Ω, 75 Ω, 1143 Ω — are one law evaluated at three scales: the unit cube’s $\\rho$, a redrawn wire, and a transmission run.' },
        ],
        result: '0.159 Ω for the coil; 75 Ω after doubling the diameter; 1143 Ω for 8 km — $R = \\rho l/A$ and its two scaling rules.',
      },
      {
        title: 'Hot resistance: the temperature coefficient at work',
        problem: 'A copper coil has a resistance of 200 Ω at 0 °C; find its resistance at 80 °C. Separately, a copper coil draws 1.0 A from a 10 V supply at 20 °C and later only 0.95 A at the same voltage; find its mean temperature. Take $\\alpha_0 = 0.00428$ per °C for copper. (Hughes Examples 3.24 and 3.25)',
        steps: [
          { label: 'Step 1: Direct heating', text: '$R_1 = R_0(1 + \\alpha_0\\theta_1) = 200(1 + 0.00428 \\times 80) = 200 \\times 1.3424 = 268.5$ Ω at 80 °C.' },
          { label: 'Step 2: Cold resistance of the second coil', text: 'At 20 °C: $R_1 = V/I = 10/1.0 = 10.0$ Ω.' },
          { label: 'Step 3: Hot resistance from the current fall', text: 'With the current fallen to 0.95 A: $R_2 = 10/0.95 = 10.53$ Ω — the coil got hotter, so its resistance rose.' },
          { label: 'Step 4: Invert the coefficient law', text: 'From $R_1/R_2 = (1 + \\alpha_0\\theta_1)/(1 + \\alpha_0\\theta_2)$: $1 + 0.00428\\theta_2 = (10.53/10.0)(1 + 0.00428 \\times 20)$, so $\\theta_2 \\approx 33.4$ °C.' },
          { label: 'Step 5: Read the method', text: 'Measuring the resistance before and after a test is precisely how the mean temperature rise of a machine winding is found in practice.' },
        ],
        result: '268.5 Ω at 80 °C; the working coil sits at about 33.4 °C — the temperature coefficient is both a nuisance and a thermometer.',
      },
    ],
    keyTakeaways: [
      'Power in a resistive circuit: $P = VI = I^{2}R = V^{2}/R$; energy $W = Pt = VIt = I^{2}Rt$ in joules, or kilowatt hours commercially ($1\\ \\text{kW h} = 3.6$ MJ).',
      'The $I^{2}R$ heating effect is the working principle of radiators and the loss mechanism of cables — the same law, valued differently.',
      'Two equal lamps in series each deliver a quarter of their rated power (15 W instead of 60 W); in parallel they both run at full rating.',
      'Resistance scales as $\\rho l/A$, linearly with length and inversely with area — doubling a wire’s diameter quarters its resistance; copper’s $\\rho$ is $1.59 \\times 10^{-8}$ Ω m, with resistance alloys tens of times higher by design.',
      'Temperature behaviour splits materials: pure metals rise with temperature ($\\alpha_0 > 0$), carbon and insulators fall, and constantan-type alloys stay flat.',
      'Hot resistance follows $R_1/R_2 = (1 + \\alpha_0\\theta_1)/(1 + \\alpha_0\\theta_2)$ — measuring a coil’s resistance is a practical thermometer.',
      'Ratings are temperature statements: the full-load output is what a device sustains for a specified temperature rise, bounded by its insulation class.',
    ],
    quiz: [
      {
        q: 'A heater takes 8 A from a 230 V source for 12 h. The energy consumed is:',
        options: ['1.84 kW h', '22 kW h', '184 kW h', '79.2 MJ × 12'],
        answer: 1,
        explanation: '$P = 230 \\times 8 = 1840$ W = 1.84 kW, and $W = 1.84 \\times 12 = 22$ kW h — Hughes’s Example 3.19. In SI units that is about 79 MJ, which is why the suppliers bill in kilowatt hours.',
      },
      {
        q: 'A 10 m length of copper wire with cross-sectional area $1.0\\ \\text{mm}^{2}$ has a resistance of about:',
        options: ['$0.0159$ Ω', '$0.159$ Ω', '$1.59$ Ω', '$159$ Ω'],
        answer: 1,
        explanation: '$R = \\rho l/A = (1.59 \\times 10^{-8} \\times 10)/(1 \\times 10^{-6}) = 0.159$ Ω — Hughes’s Example 3.23. Watch the mm²-to-m² conversion: a factor of $10^{6}$.',
      },
      {
        q: 'Doubling the diameter of a wire (material and length unchanged) changes its resistance by a factor of:',
        options: ['2', '½', '¼', 'No change'],
        answer: 2,
        explanation: 'Area grows with $d^{2}$, so doubling $d$ quadruples $A$ and quarters $R$: Hughes’s 300 Ω, 0.5 mm wire becomes 75 Ω at 1.0 mm diameter.',
      },
      {
        q: 'A copper coil measures 10.0 Ω at 20 °C. Using $\\alpha_0 = 0.00428$ per °C, its resistance at 80 °C is approximately:',
        options: ['10.2 Ω', '12.4 Ω', '13.4 Ω', '26.8 Ω'],
        answer: 1,
        explanation: 'Convert through the 0 °C reference: $R_{80} = R_{20}(1 + \\alpha_0 \\times 80)/(1 + \\alpha_0 \\times 20) = 10 \\times 1.3424/1.0856 \\approx 12.4$ Ω. The trap answer 26.8 Ω applies only when the 10 Ω is the 0 °C value — as in Hughes’s Example 3.24, where 200 Ω at 0 °C becomes 268.5 Ω at 80 °C.',
      },
      {
        q: 'Which material’s resistance falls as it heats, producing thermal runaway in semiconductor devices?',
        options: ['Copper', 'Manganin', 'Carbon', 'Constantan'],
        answer: 2,
        explanation: 'Carbon has a negative coefficient ($-0.00048$ per °C), as do electrolytes and insulators. In semiconductors the resulting feedback — heat, lower resistance, more current, more heat — destroys the device unless cooling intervenes; constantan is engineered for exactly zero.',
      },
      // PYQ-pattern: DRDO 2018 — copper resistance temperature correction (rephrased, values changed)
      {
        q: 'A copper field coil measures 50 Ω at 20 °C. Taking the temperature coefficient of copper as 0.00393 per °C near room temperature, the resistance at 75 °C is closest to:',
        options: ['55.4 Ω', '60.8 Ω', '66.2 Ω', '50.0 Ω'],
        answer: 1,
        explanation: 'Step 1 — Given: $R_{0} = 50$ Ω at $T_{0} = 20$ °C, $\\alpha = 0.00393$ per °C, target $T = 75$ °C. Step 2 — Governing relation: $R_{T} = R_{0}[1 + \\alpha(T - T_{0})]$, linear about room temperature. Step 3 — Algebra: $\\Delta T = 55$ °C, $\\alpha \\Delta T = 0.00393 \\times 55 = 0.21615$, factor $1.21615$, hence $R = 50 \\times 1.21615 \\approx 60.8$ Ω. Step 4 — Sanity check: a rise near 22 per cent over 55 K is the documented copper behaviour, units stay in ohms, and heating raises resistance. Step 5 — Distractor analysis: 55.4 Ω halves the interval, 66.2 Ω uses an inflated coefficient, and 50.0 Ω ignores temperature entirely. Step 6 — Conclude: the hot resistance is about 60.8 Ω.',
      },
    ],
  },
]

export const elecCh2Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch2',
    section: '2.1',
    name: 'Ohm’s law and conductance',
    formula: 'V = IR;  I = 1/R × V;  G = 1/R (S)',
    latex: 'V = IR, \\quad G = \\frac{1}{R}',
    note: 'v = iR along the drop, v = −iR against it; siemens = 1/ohm',
  },
  {
    chapterId: 'elec-ch2',
    section: '2.5',
    name: 'Resistor power and energy',
    formula: 'P = VI = I²R = V²/R;  W = I²Rt',
    latex: 'P = VI = I^{2}R = \\frac{V^{2}}{R}, \\quad W = I^{2}Rt',
    note: 'the heating effect of a current; 1 kW h = 3.6 MJ',
  },
  {
    chapterId: 'elec-ch2',
    section: '2.2',
    name: 'Series and parallel equivalents',
    formula: 'R = R₁ + R₂ + …;  1/R = 1/R₁ + 1/R₂ + …',
    latex: 'R = \\sum R_i; \\quad \\frac{1}{R} = \\sum \\frac{1}{R_i}; \\quad R = \\frac{R_1R_2}{R_1+R_2}',
    note: 'product-over-sum holds for exactly two resistors in parallel',
  },
  {
    chapterId: 'elec-ch2',
    section: '2.4',
    name: 'Voltage and current division',
    formula: 'V₁ = V·R₁/(R₁+R₂);  I₁ = I·R₂/(R₁+R₂)',
    latex: 'v_1 = \\frac{R_1}{R_1+R_2}v, \\quad i_1 = \\frac{R_2}{R_1+R_2}i',
    note: 'current division uses the other resistor on top',
  },
  {
    chapterId: 'elec-ch2',
    section: '2.3',
    name: 'Kirchhoff’s two laws',
    formula: 'ΣI = 0 at every node;  ΣV = 0 round every loop',
    latex: '\\sum_{\\text{node}} I_k = 0, \\qquad \\sum_{\\text{loop}} V_k = 0',
    note: 'n nodes give n − 1 independent current equations',
  },
  {
    chapterId: 'elec-ch2',
    section: '2.4',
    name: 'Wheatstone bridge balance',
    formula: 'Rx = (R₂/R₁)·R₃',
    latex: 'R_x = \\frac{R_2}{R_1}R_3',
    note: 'adjust R₃ until the galvanometer reads zero',
  },
  {
    chapterId: 'elec-ch2',
    section: '2.5',
    name: 'Resistivity',
    formula: 'R = ρl/A',
    latex: 'R = \\rho\\frac{l}{A}',
    note: 'ρ in Ω·m — copper 1.59 × 10⁻⁸ Ω·m at 0 °C',
  },
  {
    chapterId: 'elec-ch2',
    section: '2.5',
    name: 'Temperature coefficient of resistance',
    formula: 'R₂ = R₁(1 + α₀θ₂)/(1 + α₀θ₁)',
    latex: 'R_2 = R_1\\,\\frac{1 + \\alpha_0\\theta_2}{1 + \\alpha_0\\theta_1}',
    note: 'copper α₀ = 0.00428/°C referred to 0 °C',
  },
]
