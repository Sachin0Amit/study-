import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 27
// Circuits — sections 27-1 … 27-4 (ids hall-ch27-s1 … hall-ch27-s4)
// Includes ONE masters depth tier on 27-4: the RC differential equation,
// solved completely (separation of variables, integrating factor, and the
// half-energy dissipation theorem).
// ============================================================================

export const hallCh27Content: SectionContent[] = [
  // ------------------------------------------------------------------ 27-1
  {
    sectionId: 'hall-ch27-s1',
    readingTime: 7,
    intro: "A battery is a chemical factory that lifts charges uphill, and a resistor is a slope down which they tumble while dumping energy as heat. Wiring them into a single closed loop produces the simplest complete circuit, and analyzing it teaches the vocabulary for everything else: emf, internal resistance, terminal voltage, and the energy audit that says where every joule goes.",
    objectives: [
      'Define emf ($\\varepsilon = W/q$, work per unit charge) and describe what a real battery does',
      'Use terminal voltage $V = \\varepsilon - ir$ and the loop rule to solve single-loop circuits',
      'Audit power: $P = iV = i^2R = V^2/R$, including internal loss and the maximum-transfer condition $R = r$',
    ],
    concepts: [
      {
        term: 'Electromotive force (emf)',
        kind: 'definition',
        statement: "**The emf of an emf device is the work per unit charge it performs in moving charge from its negative to its positive terminal:** $$\\varepsilon = \\frac{W}{q} \\quad (\\text{volts}).$$ A battery with $\\varepsilon = 12$ V gives each coulomb 12 J of potential energy.",
        detail: 'The name is a historical accident: emf is work per charge (energy), not force. Real batteries, generators, solar cells and thermocouples are all emf devices, each converting some other form of energy into electric potential energy.',
      },
      {
        term: 'Internal resistance',
        kind: 'insight',
        statement: "**A real battery is an ideal emf in series with a small internal resistance $r$.** While discharging, its terminal voltage is $$V = \\varepsilon - ir,$$ less than the emf by the drop on $r$; while being charged by another source, $V = \\varepsilon + ir$.",
        detail: 'A car battery has $r$ of milliohms (hundreds of amps on demand), a dry cell tens of ohms when old — the voltage “sags” under load in exact proportion to the current drawn.',
      },
      {
        term: 'The loop rule',
        kind: 'law',
        statement: "**The sum of the potential differences around any closed conducting loop is zero: $\\sum \\Delta V = 0$.** For the single loop of an ideal battery and resistors, $\\varepsilon - iR - ir = 0$, giving** $$i = \\frac{\\varepsilon}{R + r}.$$",
        detail: 'The rule is energy conservation per coulomb: a charge returning to where it started must have gained as much potential energy as it lost. It becomes Kirchhoff\u2019s loop rule in the next section.',
      },
      {
        term: 'Power in the loop',
        kind: 'theorem',
        statement: "**A resistor dissipates** $$P = iV = i^2R = \\frac{V^2}{R},$$ **the battery delivers $P = \\varepsilon i$, and internal resistance wastes $i^2r$.** Power is transferred to the load most efficiently at large $R$, but maximally at $R = r$, where $P_{\\max} = \\varepsilon^2/4r$.",
        detail: 'At $R = r$ the efficiency is only 50% — half the energy cooks the battery. Power-plant design ($R \\gg r$) chooses efficiency; car-starter design accepts the losses for maximum punch.',
      },
      {
        term: "Single-Loop Circuits: solution protocol",
        kind: "method",
        statement: "**Solve Single-Loop Circuits problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is DC circuits with Kirchhoff's rules and $RC$ transients; the working equation is $\\sum I = 0$, $\\sum V = 0$, $q(t) = q_0(1-e^{-t/RC})$, $\\tau = RC$; every substitution must carry its units so the final unit (volts, amperes, seconds) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\tau = RC\\sim 10^{-3}$--$10^1\\ \\text{s}$ in labs; ideal wires and battery unless $r$ given; $R_A\\to 0$, $R_V\\to\\infty$.",
      },
    ],
    figures: [
      {
        caption: 'A single-loop circuit. The real battery (dashed box) is an ideal emf $\\varepsilon$ in series with internal resistance $r$; the current $i = \\varepsilon/(R + r)$ runs counterclockwise here, and the terminal voltage is $V = \\varepsilon - ir$. Every watt delivered by the emf leaves as heat: $i^2R$ in the load, $i^2r$ inside the battery.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Single-loop circuit with a real battery of emf and internal resistance"><defs><marker id="cirA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><path d="M150,80 L330,80" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M450,80 L620,80 L620,280 L415,280" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M150,80 L150,280 L295,280" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M325,280 L340,280" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M390,280 L415,280" fill="none" stroke="currentColor" stroke-width="2.5"/><polyline points="330,80 342,68 354,92 366,68 378,92 390,68 402,92 414,68 426,92 438,68 450,80" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="390" y="50" font-size="18" fill="currentColor" text-anchor="middle" font-style="italic">R</text><line x1="300" y1="262" x2="300" y2="298" stroke="currentColor" stroke-width="4"/><line x1="320" y1="252" x2="320" y2="308" stroke="currentColor" stroke-width="4"/><text x="292" y="250" font-size="16" fill="currentColor" text-anchor="middle">−</text><text x="330" y="246" font-size="16" fill="currentColor" text-anchor="middle">+</text><rect x="340" y="266" width="50" height="28" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="365" y="286" font-size="16" fill="currentColor" text-anchor="middle" font-style="italic">r</text><rect x="270" y="232" width="145" height="92" rx="8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 5"/><text x="342" y="345" font-size="14" fill="currentColor" text-anchor="middle">real battery (ε, r)</text><line x1="480" y1="280" x2="520" y2="280" stroke="currentColor" stroke-width="3" marker-end="url(#cirA)"/><text x="500" y="268" font-size="16" fill="currentColor" text-anchor="middle" font-style="italic">i</text><line x1="540" y1="80" x2="500" y2="80" stroke="currentColor" stroke-width="3" marker-end="url(#cirA)"/><text x="522" y="64" font-size="16" fill="currentColor" text-anchor="middle" font-style="italic">i</text><line x1="620" y1="200" x2="620" y2="160" stroke="currentColor" stroke-width="3" marker-end="url(#cirA)"/><text x="641" y="184" font-size="16" fill="currentColor" font-style="italic">i</text><line x1="150" y1="150" x2="150" y2="195" stroke="currentColor" stroke-width="3" marker-end="url(#cirA)"/><text x="130" y="177" font-size="16" fill="currentColor" text-anchor="end" font-style="italic">i</text><text x="385" y="160" font-size="17" fill="currentColor" text-anchor="middle">i = ε/(R + r)</text><text x="385" y="188" font-size="17" fill="currentColor" text-anchor="middle">V = ε − ir</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'A 12 V battery under load',
        problem: 'A battery has $\\varepsilon = 12$ V and internal resistance $r = 0.50\\ \\Omega$. It drives a load $R = 5.5\\ \\Omega$. (a) Find the current and terminal voltage. (b) Account for all the power. (c) What load extracts maximum power, and how much?',
        steps: [
          { label: 'Current', text: '$i = \\varepsilon/(R + r) = 12/(5.5 + 0.50) = 12/6.0 = 2.0$ A.' },
          { label: 'Terminal voltage', text: '$V = \\varepsilon - ir = 12 - (2.0)(0.50) = 11.0$ V — the meter reading on the battery while it works.' },
          { label: 'Power audit', text: 'Load: $i^2R = (2.0)^2(5.5) = 22$ W. Internal: $i^2r = (2.0)^2(0.50) = 2.0$ W. Delivered by emf: $\\varepsilon i = 24$ W $= 22 + 2.0$. Efficiency $= 22/24 = 92\\%$.' },
          { label: 'Maximum transfer', text: 'Set $R = r = 0.50\\ \\Omega$: $i = 12/1.0 = 12$ A, and $P_{\\max} = i^2R = \\varepsilon^2/4r = 144/2.0 = 72$ W — but now half of the 144 W delivered cooks the battery itself.' },
        ],
        result: '2.0 A at 11.0 V; 22 W to the load and 2.0 W inside the battery; a matched 0.50 Ω load would draw 72 W at 50% efficiency.',
      },
      {
        title: "Single-Loop Circuits: $RC$ time check",
        problem: "An $RC$ circuit has $R = 2\\ \\text{k}\\Omega$, $C = 2\\ \\mu\\text{F}$. Find $\\tau = RC$ and the charge fraction at $t = \\tau$.",
        steps: [
          { label: "Time constant", text: "$\\tau = 2000\\times 2\\times 10^{-6} = 0.004\\ \\text{s}$." },
          { label: "Charging", text: "$q/q_0 = 1-e^{-1} \\approx 0.632$ at one $\\tau$; $0.950$ at $3\\tau$." },
        ],
        result: "$\\tau \\approx 0.004\\ \\text{s}$; $63\\%$ charged.",
      },
    ],
    keyTakeaways: [
      'Emf is work per unit charge ($\\varepsilon = W/q$); a real battery is $\\varepsilon$ in series with $r$, giving $V = \\varepsilon - ir$ under load.',
      'The loop rule ($\\sum\\Delta V = 0$) fixes the single-loop current: $i = \\varepsilon/(R + r)$.',
      'Resistors dissipate $P = i^2R = V^2/R$; power transfer peaks at $R = r$, efficiency peaks at $R \\gg r$.',
    ],
    quiz: [
      {
        q: 'A battery with $\\varepsilon = 9.0$ V and $r = 1.0\\ \\Omega$ drives $R = 8.0\\ \\Omega$. The current is:',
        options: ['1.0 A', '1.1 A', '9.0 A', '0.89 A'],
        answer: 0,
        explanation: '$i = \\varepsilon/(R+r) = 9.0/9.0 = 1.0$ A.',
      },
      {
        q: 'While a battery discharges through a load, its terminal voltage is:',
        options: ['exactly $\\varepsilon$', 'greater than $\\varepsilon$', `$\\varepsilon - ir$`, `$\\varepsilon + ir$`],
        answer: 2,
        explanation: 'Internal resistance drops the terminal voltage below the emf by $ir$; the $+$ sign belongs to a battery being charged.',
      },
      {
        q: 'A resistor carries current $i$. Doubling $i$ while keeping $R$ fixed multiplies its dissipated power by:',
        options: ['2', '4', '1/2', '8'],
        answer: 1,
        explanation: '$P = i^2R$ grows as the square of the current.',
      },
      {
        q: 'Maximum power is delivered to a load when:',
        options: [`$R \\gg r$`, `$R = r$`, `$R \\ll r$`, 'the load is open-circuited'],
        answer: 1,
        explanation: 'The matched condition $R = r$ gives $P_{\\max} = \\varepsilon^2/4r$, though at only 50% efficiency.',
      },
    ],
  },

  // ------------------------------------------------------------------ 27-2
  {
    sectionId: 'hall-ch27-s2',
    readingTime: 7,
    intro: "The moment a circuit sprouts a second loop, the single-loop trick of one unknown current is dead. What survives is better: two conservation laws — charge at junctions, energy around loops — that together generate exactly as many equations as the circuit has unknown currents. Kirchhoff's rules are bookkeeping made rigorous, and they solve every circuit ever built.",
    objectives: [
      'State and apply the junction rule ($\\sum i_{\\mathrm{in}} = \\sum i_{\\mathrm{out}}$) and the loop rule ($\\sum \\Delta V = 0$)',
      'Use consistent sign conventions for batteries and resistors while traversing a loop',
      'Solve a multiloop circuit and verify the answer with a power balance',
    ],
    concepts: [
      {
        term: 'Junction rule',
        kind: 'law',
        statement: "**At any junction, the total current flowing in equals the total current flowing out:** $\\sum i_{\\mathrm{in}} = \\sum i_{\\mathrm{out}}$. Charge cannot pile up, so the algebraic sum of currents at a junction is zero.",
        detail: 'A network with $n$ junctions provides only $n - 1$ independent junction equations — write them, then turn to loops.',
      },
      {
        term: 'Loop rule',
        kind: 'law',
        statement: "**The algebraic sum of potential differences around any closed loop is zero:** $\\sum \\Delta V = 0$.** It is energy conservation per coulomb: charge returning to its starting point must have zero net change in potential energy.",
        detail: 'The number of independent loop equations must be enough that, together with the junction equations, every branch current is determined: $n - 1$ junction equations plus enough loops to cover every branch.',
      },
      {
        term: 'Sign conventions',
        kind: 'method',
        statement: "**While walking a loop: crossing an emf from − to + terminals gives $+\\varepsilon$; crossing + to − gives $-\\varepsilon$. Crossing a resistor with the current arrow gives $-iR$; against the arrow, $+iR$.** Junctions: currents with arrows into the node get one sign, out the other.",
        detail: 'Assign every branch current a direction before writing anything. If an unknown comes out negative, the current simply flows opposite to your guess — the magnitude is still correct.',
      },
      {
        term: 'The power balance check',
        kind: 'method',
        statement: "**A solved circuit must balance energy: $\\sum_{\\text{emf}} \\varepsilon_j i_j = \\sum_{\\text{R}} i_k^2 R_k$**, where a battery being charged contributes negatively on the left.",
        detail: 'This global check catches most algebra slips in one line, and mirrors the physical statement that circuits merely route energy from sources to sinks.',
      },
      {
        term: "Multiloop Circuits: solution protocol",
        kind: "method",
        statement: "**Solve Multiloop Circuits problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is DC circuits with Kirchhoff's rules and $RC$ transients; the working equation is $\\sum I = 0$, $\\sum V = 0$, $q(t) = q_0(1-e^{-t/RC})$, $\\tau = RC$; every substitution must carry its units so the final unit (volts, amperes, seconds) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\tau = RC\\sim 10^{-3}$--$10^1\\ \\text{s}$ in labs; ideal wires and battery unless $r$ given; $R_A\\to 0$, $R_V\\to\\infty$.",
      },
    ],
    examples: [
      {
        title: 'Two batteries and three branches',
        problem: 'The left branch of a two-loop circuit contains $\\varepsilon_1 = 10$ V in series with $R_1 = 2.0\\ \\Omega$; the right branch contains $\\varepsilon_2 = 6.0$ V in series with $R_2 = 4.0\\ \\Omega$; the middle branch is $R_3 = 2.0\\ \\Omega$. Both batteries push current upward through their branches. Find the three branch currents.',
        steps: [
          { label: 'Set up', text: 'Let $i_1$ flow up the left branch, $i_2$ up the right branch, and $i_3$ down the middle. Junction (top): $i_3 = i_1 + i_2$.' },
          { label: 'Left loop', text: 'From the bottom, up through $\\varepsilon_1$ ($+10$ V), through $R_1$ ($-2.0 i_1$), down through $R_3$ ($-2.0 i_3$): $10 - 2.0 i_1 - 2.0 i_3 = 0$.' },
          { label: 'Right loop', text: 'Up through $\\varepsilon_2$ ($+6.0$ V), through $R_2$ ($-4.0 i_2$), down through $R_3$ ($-2.0 i_3$): $6.0 - 4.0 i_2 - 2.0 i_3 = 0$.' },
          { label: 'Solve', text: 'Substituting $i_3 = i_1 + i_2$: from the first loop $i_1 = (10 - 2i_3)/2$ and from the second $i_2 = (6 - 2i_3)/4$. Then $i_3 = (10-2i_3)/2 + (6-2i_3)/4 = 6.5 - 1.5 i_3$, so $2.5 i_3 = 6.5$, $i_3 = 2.6$ A, $i_1 = 2.4$ A, $i_2 = 0.20$ A.' },
          { label: 'Verify', text: 'Left loop: $10 - 2(2.4) - 2(2.6) = 10 - 4.8 - 5.2 = 0$ ✓. Power: sources deliver $10(2.4) + 6(0.20) = 25.2$ W; resistors dissipate $(2.4)^2(2) + (0.20)^2(4) + (2.6)^2(2) = 11.5 + 0.16 + 13.5 = 25.2$ W ✓.' },
        ],
        result: '$i_1 = 2.4$ A up, $i_2 = 0.20$ A up, $i_3 = 2.6$ A down the middle branch — with energy balanced to the watt.',
      },
      {
        title: "Multiloop Circuits: $RC$ time check",
        problem: "An $RC$ circuit has $R = 3\\ \\text{k}\\Omega$, $C = 3\\ \\mu\\text{F}$. Find $\\tau = RC$ and the charge fraction at $t = \\tau$.",
        steps: [
          { label: "Time constant", text: "$\\tau = 3000\\times 3\\times 10^{-6} = 0.009\\ \\text{s}$." },
          { label: "Charging", text: "$q/q_0 = 1-e^{-1} \\approx 0.632$ at one $\\tau$; $0.950$ at $3\\tau$." },
        ],
        result: "$\\tau \\approx 0.009\\ \\text{s}$; $63\\%$ charged.",
      },
    ],
    keyTakeaways: [
      'Junction rule: charge conservation, $\\sum i_{\\mathrm{in}} = \\sum i_{\\mathrm{out}}$; loop rule: energy conservation, $\\sum\\Delta V = 0$.',
      'Choose current directions freely — a negative answer just means the flow is opposite to your arrow.',
      'Write $n-1$ junction equations plus enough loop equations to touch every branch, then check with $\\sum \\varepsilon i = \\sum i^2R$.',
    ],
    quiz: [
      {
        q: 'The junction rule is a direct statement of:',
        options: ['energy conservation', 'charge conservation', 'Ohm\u2019s law', 'Newton\u2019s third law'],
        answer: 1,
        explanation: 'Current in must equal current out because otherwise charge would accumulate at the junction without limit.',
      },
      {
        q: 'Walking a loop, you cross a resistor in the same direction as the assigned current arrow, then a battery from its − to its + terminal. The contributions are:',
        options: [`$+iR$, then $+\\varepsilon$`, `$-iR$, then $+\\varepsilon$`, `$-iR$, then $-\\varepsilon$`, `$+iR$, then $-\\varepsilon$`],
        answer: 1,
        explanation: 'Moving with the current, potential drops by $iR$; moving through the emf from − to +, it rises by $\\varepsilon$.',
      },
      {
        q: 'After solving, a branch current comes out negative. This means:',
        options: ['you made an algebra error, certainly', 'the current flows opposite to the assigned arrow, with the stated magnitude', 'that branch carries no current', 'charge conservation failed'],
        answer: 1,
        explanation: 'Arrow directions are guesses; a negative value simply flips the direction while keeping the magnitude.',
      },
      {
        q: 'A circuit has 3 junctions and 5 branches. How many independent equations are needed to find all branch currents?',
        options: ['2', '3', '5', '8'],
        answer: 2,
        explanation: 'Five unknowns need five equations: $n - 1 = 2$ junction equations plus 3 independent loop equations.',
      },
    ],
  },

  // ------------------------------------------------------------------ 27-3
  {
    sectionId: 'hall-ch27-s3',
    readingTime: 6,
    intro: "A meter is a circuit component that happens to read out. It is an ammeter that must break into the line, or a voltmeter that must bridge two points — and each, being real, perturbs what it measures. Understanding the idealizations (zero and infinite resistance) and their failure modes is a lesson in instrument honesty that every experimental scientist eventually learns the hard way.",
    objectives: [
      'Explain how ammeters and voltmeters are connected and what their ideal resistances are',
      'Quantify measurement loading: compute the error a real voltmeter introduces',
      'Use an ohmmeter correctly (only on de-energized components)',
    ],
    concepts: [
      {
        term: 'Ammeter',
        kind: 'definition',
        statement: "**An ammeter measures the current through itself and must be wired in series with the element it monitors.** An ideal ammeter has zero resistance so it neither drops voltage nor alters the current; real ammeters have small resistance (milliohms to an ohm).",
        detail: 'To use one, you must break the circuit and let the full current pass through the meter — its reading is then the branch current, but the meter\u2019s own resistance adds to the loop.',
      },
      {
        term: 'Voltmeter',
        kind: 'definition',
        statement: "**A voltmeter measures the potential difference between its two probes and must be wired in parallel across the element.** An ideal voltmeter has infinite resistance so it draws no current; real ones (a DMM typically $10\\ \\mathrm{M\\Omega}$) draw a little — and that current changes the circuit.",
        detail: 'Since it is in parallel, the meter resistance combines with the element: the measured voltage is across the combination, not the element alone.',
      },
      {
        term: 'Meter loading',
        kind: 'insight',
        statement: "**A voltmeter reads low by the amount of current it steals: across resistance $R$ with meter resistance $R_V$, it reads $V\\cdot R_V/(R + R_V)$-weighted values.** The rule of thumb: use meters with $R_V \\gg R$ being measured — at least 100× for 1% accuracy.",
        detail: 'Similarly an ammeter reads high-side effects when its resistance is a noticeable fraction of the loop total. Every honest measurement states the meter\u2019s impedance.',
      },
      {
        term: 'Ohmmeter',
        kind: 'definition',
        statement: "**An ohmmeter passes its own known current through a component and reports $R = V/i$ — so the component must be disconnected from any live circuit**, otherwise the meter\u2019s reading (and possibly the meter) is destroyed by stray currents.",
        detail: 'Modern digital multimeters bundle all three instruments, auto-ranging, with the same connection rules: series for current, parallel for voltage, isolated for resistance.',
      },
      {
        term: "The Ammeter and the Voltmeter: solution protocol",
        kind: "method",
        statement: "**Solve The Ammeter and the Voltmeter problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is DC circuits with Kirchhoff's rules and $RC$ transients; the working equation is $\\sum I = 0$, $\\sum V = 0$, $q(t) = q_0(1-e^{-t/RC})$, $\\tau = RC$; every substitution must carry its units so the final unit (volts, amperes, seconds) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\tau = RC\\sim 10^{-3}$--$10^1\\ \\text{s}$ in labs; ideal wires and battery unless $r$ given; $R_A\\to 0$, $R_V\\to\\infty$.",
      },
    ],
    examples: [
      {
        title: 'A voltmeter that lies by 14%',
        problem: 'A 12 V ideal battery feeds two $10\\ \\mathrm{k\\Omega}$ resistors in series. (a) What is the true voltage across one resistor? (b) A voltmeter with internal resistance $30\\ \\mathrm{k\\Omega}$ is connected across one of them — what does it read? (c) What would a $10\\ \\mathrm{M\\Omega}$ DMM read?',
        steps: [
          { label: 'True value', text: 'By symmetry, each resistor drops half: $V = 6.00$ V.' },
          { label: 'Loading', text: 'The meter in parallel gives $R_{\\parallel} = (10)(30)/(10+30) = 7.5\\ \\mathrm{k\\Omega}$. Total loop: $17.5\\ \\mathrm{k\\Omega}$, so $i = 12/17500 = 0.686$ mA.' },
          { label: 'Meter reading', text: '$V_{\\mathrm{read}} = iR_{\\parallel} = (0.686\\ \\mathrm{mA})(7.5\\ \\mathrm{k\\Omega}) = 5.14$ V — 14% low, badly misleading.' },
          { label: 'Proper meter', text: 'With $R_V = 10\\ \\mathrm{M\\Omega}$: $R_{\\parallel} = 9.99\\ \\mathrm{k\\Omega}$, $i = 0.6003$ mA, $V_{\\mathrm{read}} = 5.997$ V — a 0.05% error.' },
        ],
        result: 'True 6.00 V; the 30 kΩ meter reads 5.14 V; a modern 10 MΩ DMM reads 5.997 V.',
      },
      {
        title: "The Ammeter and the Voltmeter: $RC$ time check",
        problem: "An $RC$ circuit has $R = 4\\ \\text{k}\\Omega$, $C = 1\\ \\mu\\text{F}$. Find $\\tau = RC$ and the charge fraction at $t = \\tau$.",
        steps: [
          { label: "Time constant", text: "$\\tau = 4000\\times 1\\times 10^{-6} = 0.004\\ \\text{s}$." },
          { label: "Charging", text: "$q/q_0 = 1-e^{-1} \\approx 0.632$ at one $\\tau$; $0.950$ at $3\\tau$." },
        ],
        result: "$\\tau \\approx 0.004\\ \\text{s}$; $63\\%$ charged.",
      },
    ],
    keyTakeaways: [
      'Ammeters go in series (ideally $R = 0$); voltmeters go in parallel (ideally $R = \\infty$).',
      'A real voltmeter loads the circuit it touches and reads low — keep $R_V \\gg R$ being measured.',
      'An ohmmeter drives the component itself: use it only on isolated, unpowered components.',
    ],
    quiz: [
      {
        q: 'To measure the current through a resistor, an ammeter is connected:',
        options: ['in parallel with the resistor', 'in series with the resistor', 'across the battery', 'anywhere — position does not matter'],
        answer: 1,
        explanation: 'Current through itself is what it reads, so it must carry the same current: series connection.',
      },
      {
        q: 'The ideal internal resistance of a voltmeter is:',
        options: ['zero', 'equal to the circuit resistance', 'infinite', 'exactly 1 MΩ'],
        answer: 2,
        explanation: 'Infinite resistance means the meter draws no current and leaves the circuit untouched.',
      },
      {
        q: 'A real voltmeter connected across a high-value resistor tends to read:',
        options: ['slightly high', 'slightly low', 'exactly the true value', 'zero'],
        answer: 1,
        explanation: 'The meter\u2019s finite resistance parallels the element, lowering the effective resistance and stealing current, so the measured voltage is below the unloaded value.',
      },
      {
        q: 'An ohmmeter must never be used on a component that:',
        options: ['is in a live, powered circuit', 'is larger than the meter', 'is made of carbon', 'has color bands'],
        answer: 0,
        explanation: 'The ohmmeter supplies its own known current; any external source corrupts the reading and can damage the meter.',
      },
    ],
  },

  // ------------------------------------------------------------------ 27-4
  {
    sectionId: 'hall-ch27-s4',
    readingTime: 8,
    intro: "Add a capacitor to a resistive loop and the circuit acquires memory: its current depends on how much charge it already holds. The loop rule becomes a differential equation, and its solution — the exponential — is the most famous curve in applied science, governing flash tubes, timing chips, nerve membranes and every blink of an LED. One constant, τ = RC, sets the timescale of everything that follows.",
    objectives: [
      'Derive the loop-rule equation $R\\,dq/dt + q/C = \\varepsilon$ for a charging RC circuit',
      'Use the solutions $q = C\\varepsilon(1 - e^{-t/\\tau})$ and $q = q_0e^{-t/\\tau}$ with $\\tau = RC$',
      'Read the time constant off a curve: 63% at $\\tau$, 86% at $2\\tau$, 95% at $3\\tau$, half-life $\\tau\\ln 2$',
    ],
    concepts: [
      {
        term: 'The RC loop equation',
        kind: 'law',
        statement: "**Kirchhoff\u2019s loop rule around a charging circuit (battery $\\varepsilon$, resistor $R$, capacitor $C$) gives a differential equation, because the capacitor voltage depends on its charge:** $$R\\frac{dq}{dt} + \\frac{q}{C} = \\varepsilon, \\qquad q(0) = 0.$$",
        detail: 'Here $dq/dt$ is the current. Note the loop rule itself is untouched — only the element law $V_C = q/C$ makes the mathematics new.',
      },
      {
        term: 'Charging solution',
        kind: 'theorem',
        statement: "**With the battery connected at $t = 0$:** $$q(t) = C\\varepsilon\\left(1 - e^{-t/RC}\\right), \\qquad i(t) = \\frac{\\varepsilon}{R}\\,e^{-t/RC}.$$ The charge climbs to $q_\\infty = C\\varepsilon$ while the current decays from $\\varepsilon/R$ toward zero; at every instant $V_R + V_C = \\varepsilon$.",
        detail: 'The two curves are complementary: $q/(C\\varepsilon) + iR/\\varepsilon = 1$ at all times — the fraction not yet stored is exactly the fraction of current still flowing.',
      },
      {
        term: 'Discharging',
        kind: 'theorem',
        statement: "**With the battery removed and a charged capacitor ($q_0 = C V_0$) discharging through $R$:** $$q(t) = q_0 e^{-t/RC}, \\qquad V_C(t) = V_0 e^{-t/RC}, \\qquad i(t) = -\\frac{V_0}{R}e^{-t/RC}.$$",
        detail: 'The minus sign on the current records that it now flows opposite to the charging direction. Multiply exponentials by time and you get the same $\\tau = RC$ every way you ask.',
      },
      {
        term: 'The time constant',
        kind: 'insight',
        statement: "**$\\tau = RC$ is the circuit\u2019s memory: at $t = \\tau$ the charge has reached $1 - 1/e = 63.2\\%$ of its final value (leaving 36.8%), at $2\\tau$ it is 86.5%, at $3\\tau$ 95.0%.** During discharge, the half-life is $t_{1/2} = \\tau\\ln 2 = 0.693\\tau$.",
        detail: 'Engineers call 5τ “done” (99.3%). Want a one-second timer? Use $R = 1\\ \\mathrm{M\\Omega}$ and $C = 1\\ \\mu\\mathrm{F}$; want a nanosecond one? Shrink both by $10^{9}$.',
      },
      {
        term: "RC Circuits: solution protocol",
        kind: "method",
        statement: "**Solve RC Circuits problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is DC circuits with Kirchhoff's rules and $RC$ transients; the working equation is $\\sum I = 0$, $\\sum V = 0$, $q(t) = q_0(1-e^{-t/RC})$, $\\tau = RC$; every substitution must carry its units so the final unit (volts, amperes, seconds) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\tau = RC\\sim 10^{-3}$--$10^1\\ \\text{s}$ in labs; ideal wires and battery unless $r$ given; $R_A\\to 0$, $R_V\\to\\infty$.",
      },
    ],
    figures: [
      {
        caption: 'Charging an RC circuit (normalized plot). The solid curve is the charge $q(t)/C\\varepsilon = 1 - e^{-t/\\tau}$; the dashed curve is the current $i(t)R/\\varepsilon = e^{-t/\\tau}$, drawn on the same scale. At $t = \\tau = RC$ the capacitor holds 63.2% of its final charge and the current has fallen to 36.8%; by $3\\tau$ the charge is within 5% of complete. The two curves sum to 1 at every instant.',
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RC charging curves for charge and current"><defs><marker id="rcA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="70" y1="290" x2="668" y2="290" stroke="currentColor" stroke-width="2" marker-end="url(#rcA)"/><line x1="70" y1="290" x2="70" y2="34" stroke="currentColor" stroke-width="2" marker-end="url(#rcA)"/><text x="369" y="26" font-size="14" fill="currentColor" text-anchor="middle">q/Cε and iR/ε (normalized)</text><text x="676" y="294" font-size="16" fill="currentColor" font-style="italic">t</text><text x="58" y="306" font-size="14" fill="currentColor" text-anchor="end">0</text><line x1="188" y1="290" x2="188" y2="296" stroke="currentColor" stroke-width="1.5"/><line x1="306" y1="290" x2="306" y2="296" stroke="currentColor" stroke-width="1.5"/><line x1="424" y1="290" x2="424" y2="296" stroke="currentColor" stroke-width="1.5"/><line x1="542" y1="290" x2="542" y2="296" stroke="currentColor" stroke-width="1.5"/><line x1="660" y1="290" x2="660" y2="296" stroke="currentColor" stroke-width="1.5"/><text x="188" y="312" font-size="14" fill="currentColor" text-anchor="middle">τ</text><text x="306" y="312" font-size="14" fill="currentColor" text-anchor="middle">2τ</text><text x="424" y="312" font-size="14" fill="currentColor" text-anchor="middle">3τ</text><text x="542" y="312" font-size="14" fill="currentColor" text-anchor="middle">4τ</text><text x="660" y="312" font-size="14" fill="currentColor" text-anchor="middle">5τ</text><line x1="70" y1="132" x2="188" y2="132" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.6"/><line x1="70" y1="73.8" x2="306" y2="73.8" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.6"/><line x1="70" y1="52.4" x2="424" y2="52.4" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.6"/><line x1="188" y1="132" x2="188" y2="290" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.6"/><line x1="306" y1="73.8" x2="306" y2="290" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.6"/><line x1="424" y1="52.4" x2="424" y2="290" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.6"/><text x="76" y="126" font-size="13" fill="currentColor">0.632</text><text x="76" y="68" font-size="13" fill="currentColor">0.865</text><text x="76" y="47" font-size="13" fill="currentColor">0.950</text><polyline points="70.0,290.0 75.9,277.8 81.8,266.2 87.7,255.2 93.6,244.7 99.5,234.7 105.4,225.2 111.3,216.2 117.2,207.6 123.1,199.4 129.0,191.6 134.9,184.2 140.8,177.2 146.7,170.5 152.6,164.1 158.5,158.1 164.4,152.3 170.3,146.9 176.2,141.6 182.1,136.7 188.0,132.0 193.9,127.5 199.8,123.2 205.7,119.2 211.6,115.3 217.5,111.6 223.4,108.1 229.3,104.8 235.2,101.6 241.1,98.6 247.0,95.8 252.9,93.1 258.8,90.5 264.7,88.0 270.6,85.7 276.5,83.4 282.4,81.3 288.3,79.3 294.2,77.4 300.1,75.6 306.0,73.8 311.9,72.2 317.8,70.6 323.7,69.1 329.6,67.7 335.5,66.3 341.4,65.1 347.3,63.8 353.2,62.7 359.1,61.6 365.0,60.5 370.9,59.5 376.8,58.6 382.7,57.7 388.6,56.8 394.5,56.0 400.4,55.2 406.3,54.5 412.2,53.8 418.1,53.1 424.0,52.4 429.9,51.8 435.8,51.3 441.7,50.7 447.6,50.2 453.5,49.7 459.4,49.2 465.3,48.8 471.2,48.3 477.1,47.9 483.0,47.5 488.9,47.2 494.8,46.8 500.7,46.5 506.6,46.2 512.5,45.9 518.4,45.6 524.3,45.3 530.2,45.1 536.1,44.8 542.0,44.6 547.9,44.4 553.8,44.1 559.7,43.9 565.6,43.7 571.5,43.6 577.4,43.4 583.3,43.2 589.2,43.1 595.1,42.9 601.0,42.8 606.9,42.6 612.8,42.5 618.7,42.4 624.6,42.3 630.5,42.2 636.4,42.1 642.3,42.0 648.2,41.9 654.1,41.8 660.0,41.7" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="188" cy="132" r="4.5" fill="currentColor"/><circle cx="306" cy="73.8" r="4.5" fill="currentColor"/><circle cx="424" cy="52.4" r="4.5" fill="currentColor"/><polyline points="70.0,40.0 75.9,52.2 81.8,63.8 87.7,74.8 93.6,85.3 99.5,95.3 105.4,104.8 111.3,113.8 117.2,122.4 123.1,130.6 129.0,138.4 134.9,145.8 140.8,152.8 146.7,159.5 152.6,165.9 158.5,171.9 164.4,177.7 170.3,183.1 176.2,188.4 182.1,193.3 188.0,198.0 193.9,202.5 199.8,206.8 205.7,210.8 211.6,214.7 217.5,218.4 223.4,221.9 229.3,225.2 235.2,228.4 241.1,231.4 247.0,234.2 252.9,236.9 258.8,239.5 264.7,242.0 270.6,244.3 276.5,246.6 282.4,248.7 288.3,250.7 294.2,252.6 300.1,254.4 306.0,256.2 311.9,257.8 317.8,259.4 323.7,260.9 329.6,262.3 335.5,263.7 341.4,264.9 347.3,266.2 353.2,267.3 359.1,268.4 365.0,269.5 370.9,270.5 376.8,271.4 382.7,272.3 388.6,273.2 394.5,274.0 400.4,274.8 406.3,275.5 412.2,276.2 418.1,276.9 424.0,277.6 429.9,278.2 435.8,278.7 441.7,279.3 447.6,279.8 453.5,280.3 459.4,280.8 465.3,281.2 471.2,281.7 477.1,282.1 483.0,282.5 488.9,282.8 494.8,283.2 500.7,283.5 506.6,283.8 512.5,284.1 518.4,284.4 524.3,284.7 530.2,284.9 536.1,285.2 542.0,285.4 547.9,285.6 553.8,285.9 559.7,286.1 565.6,286.3 571.5,286.4 577.4,286.6 583.3,286.8 589.2,286.9 595.1,287.1 601.0,287.2 606.9,287.4 612.8,287.5 618.7,287.6 624.6,287.7 630.5,287.8 636.4,287.9 642.3,288.0 648.2,288.1 654.1,288.2 660.0,288.3" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6" opacity="0.75"/><text x="520" y="75" font-size="15" fill="currentColor">q(t)/Cε (charge)</text><text x="150" y="126" font-size="15" fill="currentColor">i(t)R/ε (current)</text><text x="369" y="330" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.85">time constant τ = RC: at t = τ the current is down to 1/e ≈ 37% and the charge is 63% complete</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'A two-second memory',
        problem: 'A $12\\ \\mathrm{V}$ battery charges a $1.0\\ \\mu\\mathrm{F}$ capacitor through a $2.0\\ \\mathrm{M\\Omega}$ resistor. Find (a) the time constant and the initial current; (b) the charge, capacitor voltage and current at $t = 4.0$ s; (c) the half-life after the battery is replaced by a wire (discharge).',
        steps: [
          { label: 'Time constant', text: '$\\tau = RC = (2.0\\times 10^{6})(1.0\\times 10^{-6}) = 2.0$ s; $i_0 = \\varepsilon/R = 12/(2.0\\times 10^{6}) = 6.0\\ \\mu\\mathrm{A}$.' },
          { label: 'At t = 4.0 s = 2τ', text: '$1 - e^{-2} = 0.865$, so $q = C\\varepsilon(0.865) = (1.0\\times 10^{-6})(12)(0.865) = 10.4\\ \\mu\\mathrm{C}$, giving $V_C = q/C = 10.4$ V.' },
          { label: 'Current then', text: '$i = i_0 e^{-2} = (6.0\\ \\mu\\mathrm{A})(0.135) = 0.81\\ \\mu\\mathrm{A}$ — still 13.5% of the initial current.' },
          { label: 'Half-life', text: 'On discharge, $q = q_0e^{-t/\\tau}$ halves when $t_{1/2} = \\tau\\ln 2 = (2.0)(0.693) = 1.39$ s.' },
        ],
        result: '$\\tau = 2.0$ s; at 4.0 s the capacitor holds 10.4 μC at 10.4 V with 0.81 μA still flowing; discharge half-life 1.39 s.',
      },
      {
        title: "RC Circuits: $RC$ time check",
        problem: "An $RC$ circuit has $R = 1\\ \\text{k}\\Omega$, $C = 2\\ \\mu\\text{F}$. Find $\\tau = RC$ and the charge fraction at $t = \\tau$.",
        steps: [
          { label: "Time constant", text: "$\\tau = 1000\\times 2\\times 10^{-6} = 0.002\\ \\text{s}$." },
          { label: "Charging", text: "$q/q_0 = 1-e^{-1} \\approx 0.632$ at one $\\tau$; $0.950$ at $3\\tau$." },
        ],
        result: "$\\tau \\approx 0.002\\ \\text{s}$; $63\\%$ charged.",
      },
    ],
    keyTakeaways: [
      'The RC loop equation $R\\,dq/dt + q/C = \\varepsilon$ is the loop rule plus the capacitor law; everything else is calculus.',
      'Charging: $q = C\\varepsilon(1-e^{-t/\\tau})$. Discharging: $q = q_0e^{-t/\\tau}$. In both cases $\\tau = RC$.',
      'At $t = \\tau$: 63.2% charged (36.8% of current left); at $3\\tau$: 95%; half-life $0.693\\tau$.',
    ],
    quiz: [
      {
        q: 'A $10\\ \\mathrm{k\\Omega}$ resistor charges a $100\\ \\mu\\mathrm{F}$ capacitor. The time constant is:',
        options: ['1.0 s', '0.10 s', '10 s', '0.01 s'],
        answer: 0,
        explanation: '$\\tau = RC = (1.0\\times 10^{4})(1.0\\times 10^{-4}) = 1.0$ s.',
      },
      {
        q: 'In a charging RC circuit, at the instant $t = \\tau$ the capacitor holds what fraction of its final charge?',
        options: ['50%', '63%', '37%', '86%'],
        answer: 1,
        explanation: '$1 - e^{-1} = 0.632$: the famous 63% of the time constant.',
      },
      {
        q: 'A capacitor discharges through a resistor. After two time constants, the charge remaining is about:',
        options: ['13.5%', '36.8%', '50%', '26.8%'],
        answer: 0,
        explanation: '$e^{-2} = 0.135$: about 13.5% remains after $2\\tau$.',
      },
      {
        q: 'To make an RC circuit charge more slowly, one could:',
        options: ['increase R', 'decrease R', 'increase the emf', 'use a larger capacitor alone, keeping RC fixed'],
        answer: 0,
        explanation: 'The timescale is $\\tau = RC$; raising $R$ (or $C$) stretches every step in time. (The emf sets the size of $q_\\infty$, not the speed.)',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'The RC equation, solved completely',
        blocks: [
          {
            kind: 'theorem',
            heading: 'A first-order linear equation with a unique memory',
            body: 'The charging problem is the prototype of every first-order linear system in physics: find $q(t)$ with $$\\frac{dq}{dt} + \\frac{1}{RC}q = \\frac{\\varepsilon}{R}, \\qquad q(0) = q_i.$$ For a unique solution to exist, the right-hand side may be any integrable function of time — a step (battery), a pulse, a sine — and the same machinery applies. The theory of such equations guarantees that through any initial charge $q_i$ there passes exactly one solution: the circuit\u2019s state is fully specified by its present charge, with no hidden variables. That single fact is what makes $\\tau = RC$ an honest “memory time”: nothing else about the history can matter.',
          },
          {
            kind: 'derivation',
            heading: 'Separation of variables',
            body: 'For the battery step, subtract the steady-state charge $q_\\infty = C\\varepsilon$ by writing the equation as $$\\frac{dq}{dt} = \\frac{q_\\infty - q}{RC}.$$ Separate and integrate from $0$ to $t$: $$\\int_0^q \\frac{dq\'}{q_\\infty - q\'} = \\int_0^t \\frac{dt\'}{RC} \\;\\;\\Longrightarrow\\;\\; -\\ln\\!\\left(\\frac{q_\\infty - q}{q_\\infty - q_i}\\right) = \\frac{t}{RC}.$$ Exponentiate: $$q(t) = q_\\infty + (q_i - q_\\infty)e^{-t/RC}.$$ The step response is the initial defect from equilibrium, decaying exponentially: with $q_i = 0$ this is $q = C\\varepsilon(1-e^{-t/RC})$; discharging is the same formula with $\\varepsilon = 0$, so $q = q_i e^{-t/RC}$. Charging and discharging are not two phenomena but one solution with two boundary conditions.',
          },
          {
            kind: 'derivation',
            heading: 'The integrating-factor route (and why it matters)',
            body: 'The same equation in standard form $dq/dt + Pq = Q$ with $P = 1/RC$ constant invites the integrating factor $\\mu(t) = e^{\\int P\\,dt} = e^{t/RC}$: $$\\frac{d}{dt}\\left(qe^{t/RC}\\right) = \\frac{\\varepsilon}{R}e^{t/RC}.$$ Integrate from $0$ to $t$ and divide by $e^{t/RC}$: $$q(t) = C\\varepsilon + (q_i - C\\varepsilon)e^{-t/RC},$$ identical to before. The method pays off when the drive is not a step: for a sinusoidal emf $\\varepsilon_0\\cos\\omega t$ the same factor integrates the forcing directly and yields, after transients die, a steady oscillation of the capacitor charge lagging the drive — the seed of AC impedance analysis (Chapter 31), where the complex combination $R + 1/(i\\omega C)$ replaces Ohm\u2019s law. Every linear circuit, however elaborate, is this calculation wearing more letters.',
          },
          {
            kind: 'remark',
            heading: 'Why the time constant is RC, and only RC',
            body: 'Dimensional bookkeeping: $[R] = \\mathrm{V/A}$ and $[C] = \\mathrm{C/V}$, so $[RC] = \\mathrm{C/A} = \\mathrm{s}$ — the only combination of the two element values with the dimension of time, and the analysis confirms it is the right one. Physically, $RC$ is the time for the capacitor to discharge through its own leakage-equivalent: at any instant the rate of change of charge is $-q/RC$, so a charge $q$ would vanish in time $q/|dq/dt| = RC$ if the current did not itself fall as $q$ does. The exponential is precisely the curve whose “remaining time” stays constant — the self-similar decay that appears in radioactivity, RC cooling, and every relaxation process with a fixed ratio of reservoir to drain.',
          },
          {
            kind: 'derivation',
            heading: 'The half-energy theorem',
            body: 'During a full charge from a battery of emf $\\varepsilon$, the battery transports total charge $q_\\infty = C\\varepsilon$ through its own potential difference, delivering $$W_{\\mathrm{bat}} = \\varepsilon \\cdot C\\varepsilon = C\\varepsilon^2.$$ The field finally stores only $$U_\\infty = \\tfrac{1}{2}C\\varepsilon^2.$$ The deficit is dissipated in the series resistance: $$E_R = \\int_0^\\infty i^2R\\,dt = \\frac{\\varepsilon^2}{R}\\int_0^\\infty e^{-2t/RC}\\,dt = \\frac{\\varepsilon^2}{R}\\cdot\\frac{RC}{2} = \\tfrac{1}{2}C\\varepsilon^2,$$ exactly the other half. The result is independent of $R$: a smaller resistor merely burns the same energy faster. Only the initially stored energy of an isolated capacitor can be delivered losslessly; charging from a voltage source always costs half — the classical limit of the same physics that later reappears in switched-capacitor circuits and quantum measurement back-action.',
          },
          {
            kind: 'application',
            heading: 'Measuring τ on a log plot',
            body: 'Rewrite the step response as $\\ln\\!\\left(1 - q/q_\\infty\\right) = -t/RC$: plot the log of the remaining fraction against time and the data fall on a straight line of slope $-1/RC$. This is the standard laboratory test of whether a system is “truly exponential” — a mix of two time constants kinks the line, and curve-fitting software exploits exactly this linearity. The same trick times nerve membranes (the membrane is an RC circuit with $\\tau$ of milliseconds), camera flashes, and the sampling gates of every analog-to-digital converter. When an engineer says “wait five time constants,” the mathematics behind the phrase is the solution derived here, evaluated at $e^{-5} \\approx 0.7\\%$.',
          },
          {
            kind: 'open',
            heading: 'The R → 0 paradox',
            body: 'If half the energy is always burned in $R$, what happens as $R \\to 0$ with the capacitor uncharged — a perfect battery joined to a perfect capacitor by perfect wires? The formula says the missing half, $\\tfrac{1}{2}C\\varepsilon^2$, is dissipated in zero time, which is nonsense unless something else absorbs it. In reality the loop always has residual inductance: the circuit rings as an LC oscillator, current sloshing back and forth until radiation and skin-effect losses carry off exactly the half-energy. The “paradox” is a warning: RC behavior is a singular limit of RLC physics, and dropping a dynamical element (the inductance) can change the answer qualitatively, not merely by a small correction.',
          },
        ],
      },
    ],
  },
]
