import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse Chemistry — Chapter 6: Electrochemistry (Sections 6.1 – 6.4)
// Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const chemCh06Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'chem-ch6-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Cell potentials as Gibbs energies: sign stacking and series',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Standard potential as free energy per unit charge',
            body: 'The **electromotive force** is not a force but a Gibbs energy per unit charge, which is why sign conventions decide spontaneity without extra rules. For a cell transferring substance amount scaled charge $nF$, the relation $\\Delta G^0 = -nFE^0$ converts a tabulated voltage into a free energy, so positive cell voltage means negative free energy and a spontaneous reaction. This single line explains why reversing a half reaction flips the sign of its contribution and why potentials add by free energy rather than by naive voltage addition when electron counts differ.'
          },
          {
            kind: 'derivation',
            heading: 'Combining half cells without sign errors',
            body: 'Write each reduction with its standard potential, identify cathode as the larger value, then subtract anode from cathode as $E^0_{cell} = E^0_{cathode} - E^0_{anode}$ to obtain the working voltage. The subtraction is shorthand for adding free energies: multiply each half reaction free energy by its electron count, cancel electrons, then divide by total charge to return to volts. A zinc copper cell with cathode $E^0 = 0.34$ volt units and anode $E^0 = -0.76$ volt units gives $E^0_{cell} = 1.10$ volt units, matching direct measurement and confirming that the activity series is a free energy ladder.'
          },
          {
            kind: 'application',
            heading: 'Batteries corrosion and the meaning of the series',
            body: 'The activity series ranks metals by standard reduction potential, which is a compact statement about the free energy of oxidation in aqueous surroundings. Lithium ion cells, lead acid accumulators and sacrificial zinc coatings all exploit large positive $E^0_{cell}$ values built from half reactions far apart on this ladder. Corrosion research inverts the same logic: a steel structure coupled to a more easily oxidized metal turns the structure into the cathode, so the sacrificial anode dissolves while the protected cathode survives, exactly as the sign of $E^0_{cell}$ predicts.'
          }
        ]
      }
    ],
    readingTime: 8,
    intro: 'A galvanic cell converts chemical energy into electrical work by splitting oxidation and reduction into two half cells joined by a wire and a salt bridge. The driving force appears as the cell potential measured between the electrodes under standard conditions. This section builds cell notation, standard potentials and the rule for combining half cells into a working cell.',
    objectives: [
      'Write correct cell notation with anode, cathode, phases and salt bridge order',
      'Compute $E^0_{cell}$ from a pair of standard reduction potentials',
      'Predict spontaneity and relative oxidising strength from the series order'
    ],
    concepts: [
      {
        term: 'Cell notation',
        kind: 'notation',
        statement: 'A **galvanic cell** is written anode on the left and cathode on the right as `anode | anode-ion || cathode-ion | cathode`, with single bars for **phase boundaries** and a double bar for the **salt bridge**. The code `Zn | Zn^{2+} || Cu^{2+} | Cu` therefore means $Zn \\to Zn^{2+} + 2e^{-}$ at the left electrode and $Cu^{2+} + 2e^{-} \\to Cu$ at the right electrode.',
        detail: 'Oxidation always occurs at the anode and reduction at the cathode. Inert electrodes such as `Pt` are added when no solid metal of the couple is present, for example `Pt | H_2 | H^+ || Cu^{2+} | Cu`. Gas pressures are shown in parentheses, such as $Pt | H_2 | H^+$ with $p_{H_2}$ stated separately.'
      },
      {
        term: 'Standard reduction potential',
        kind: 'definition',
        statement: 'The **standard reduction potential** $E^0$ of a couple is the voltage of its reduction half reaction versus the **standard hydrogen electrode** measured with `unit activities` and $E^0_{H^+/H_2} = 0$. A large positive `E^0` means the oxidised form is a **strong oxidiser**, while a large negative value means the reduced form is a strong reducer.',
        detail: 'All half reactions are tabulated as reductions, even the one that will run backwards as oxidation in the full cell. The hydrogen reference is $2H^+ + 2e^{-} \\to H_2$ with $E^0 = 0$ by definition at $298$ K. Fluorine at about $+2.87$ V and lithium at about $-3.05$ V sit at opposite ends of the table.'
      },
      {
        term: 'EMF from half cells',
        kind: 'method',
        statement: 'The **standard EMF** follows the subtraction rule `E^0_cell = E^0_cathode - E^0_anode`, where both potentials are taken as **reduction potentials** from the table. For $Zn | Zn^{2+} || Cu^{2+} | Cu$ with `E^0_Cu` about $+0.34$ V and `E^0_Zn` about $-0.76$ V, the result is $E^0_{cell} = 0.34 - (-0.76)$ which equals $1.10$ V.',
        detail: 'Never reverse the sign before subtracting, because the formula already accounts for the anode running as oxidation. A positive $E^0_{cell}$ means $\\Delta G^0$ is negative and the cell reaction is spontaneous. If the computed value is negative, swap the roles of the electrodes to obtain the spontaneous direction.'
      },
      {
        term: 'Electrochemical series',
        kind: 'insight',
        statement: 'The **electrochemical series** orders couples by `E^0` and predicts displacement, stability in water and the **stronger oxidiser** in any pair. The species higher in the table as oxidised forms oxidise anything below them whose `E^0` is smaller, so $F_2$ oxidises $Cl^-$ while $Cu^{2+}$ oxidises $Zn$ but not $Ag$.',
        detail: 'Metals with negative $E^0$ liberate $H_2$ from dilute acids, while metals with positive $E^0$ such as $Cu$, $Ag$ and $Au$ do not. The series also ranks oxidising agents such as $MnO_4^-$, $Cr_2O_7^{2-}$ and $Cl_2$ for redox titrations. Reducing strength runs opposite to oxidising strength along the same list.'
      },
      {
        term: 'Daniel cell working',
        kind: 'law',
        statement: 'The **Daniel cell** pairs a zinc anode dissolving as `Zn anode` with a copper cathode plating as `Cu cathode`, giving the net reaction $Zn + Cu^{2+} \\to Zn^{2+} + Cu$ with **electron flow** from zinc to copper through the wire. The `salt bridge` completes the circuit by **ion migration** that keeps each half cell electrically neutral.',
        detail: 'Zinc rod loses mass while copper rod gains mass, and the blue colour of $Cu^{2+}$ fades as $Zn^{2+}$ builds up. Cations migrate toward the cathode and anions toward the anode through the bridge. Removing the bridge stops the current because charge separation immediately opposes further electron flow.'
      }
    ],
    figures: [
      {
        caption: 'Daniel notation $Zn|Zn^{2+}||Cu^{2+}|Cu$ gives $E^0_{cell} = E^0_{cathode} - E^0_{anode}$: $0.34 - (-0.76) = 1.10 V$ with electrons zinc to copper.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Galvanic Daniel cell with two half cells"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">zinc-copper galvanic cell with salt bridge</text><rect x="60" y="90" width="180" height="150" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="130" y="90" width="20" height="100" fill="currentColor" stroke="none" opacity="0.3"/><rect x="130" y="90" width="20" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="100" y="260" font-size="12" fill="currentColor" font-family="sans-serif">Zn anode dissolves</text><text x="100" y="280" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">E0 -0.76 V</text><rect x="480" y="90" width="180" height="150" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="570" y="90" width="20" height="100" fill="currentColor" stroke="none" opacity="0.3"/><rect x="570" y="90" width="20" height="100" fill="none" stroke="currentColor" stroke-width="2"/><text x="490" y="260" font-size="12" fill="currentColor" font-family="sans-serif">Cu cathode plates</text><text x="490" y="280" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.8">E0 +0.34 V</text><line x1="140" y1="90" x2="140" y2="60" stroke="currentColor" stroke-width="2"/><line x1="140" y1="60" x2="580" y2="60" stroke="currentColor" stroke-width="2"/><line x1="580" y1="60" x2="580" y2="90" stroke="currentColor" stroke-width="2"/><polygon points="360,60 350,54 350,66" fill="currentColor" stroke="none"/><text x="330" y="45" font-size="12" fill="currentColor" font-family="sans-serif">e- zinc to copper</text><path d="M280,90 L280,60 L440,60 L440,90" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><text x="300" y="110" font-size="11" fill="currentColor" font-family="sans-serif" opacity="0.8">salt bridge ions</text><text x="250" y="310" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">net Zn + Cu2+ to Zn2+ + Cu; E 1.10 V; remove bridge stops flow</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Compute standard EMF of a zinc copper cell',
        problem: 'Given $E^0_{Cu^{2+}/Cu} = +0.34$ V and $E^0_{Zn^{2+}/Zn} = -0.76$ V, write the cell notation and compute $E^0_{cell}$ with the net reaction.',
        steps: [
          { label: 'Step 1', text: 'Identify cathode and anode from `E^0` values. The more positive couple $Cu^{2+}/Cu$ reduces, so copper is the cathode and zinc is the anode with notation `Zn | Zn^{2+} || Cu^{2+} | Cu`.' },
          { label: 'Step 2', text: 'Apply the subtraction rule inside math only:\n```text\nE0_cell = E0_cathode - E0_anode\nE0_cell = 0.34 - (-0.76) = 1.10 V\nNet: Zn + Cu2+ -> Cu + Zn2+ (arrow read as \\to in math)\n```\nIn proper symbols the net reaction is $Zn + Cu^{2+} \\to Zn^{2+} + Cu$ with $n = 2$ electrons exchanged.' },
          { label: 'Step 3', text: 'Check spontaneity with $\\Delta G^0 = -nFE^0_{cell}$. Since $E^0_{cell} = 1.10$ V is positive, $\\Delta G^0$ is negative and the reaction runs spontaneously from zinc to copper.' }
        ],
        result: 'Cell `Zn | Zn^{2+} || Cu^{2+} | Cu` has $E^0_{cell} = 1.10$ V and net reaction $Zn + Cu^{2+} \\to Zn^{2+} + Cu$.'
      },
      {
        title: 'Predict displacement from the series',
        problem: 'Use standard potentials $E^0_{Ag^+/Ag} = +0.80$ V and $E^0_{Cu^{2+}/Cu} = +0.34$ V to decide whether copper metal can displace silver ions from solution.',
        steps: [
          { label: 'Step 1', text: 'Assign the more positive couple as cathode: $Ag^+/Ag$ reduces, so `Ag cathode` and `Cu anode` with cell $Cu + 2Ag^+ \\to Cu^{2+} + 2Ag$.' },
          { label: 'Step 2', text: 'Compute $E^0_{cell} = 0.80 - 0.34$ which equals $0.46$ V. In symbols $E^0_{cell} = E^0_{Ag^+/Ag} - E^0_{Cu^{2+}/Cu}$ gives a positive value.' },
          { label: 'Step 3', text: 'Since $E^0_{cell}$ is positive, copper displaces silver spontaneously:\n```text\nCu(s) + 2Ag+(aq) -> Cu2+(aq) + 2Ag(s), E0 = +0.46 V\n```\nThe reverse reaction would have $E^0_{cell} = -0.46$ V and would not occur on its own.' }
        ],
        result: 'Copper displaces silver with $E^0_{cell} = 0.46$ V; silver cannot displace copper under standard conditions.'
      }
    ],
    keyTakeaways: [
      'Cell notation is anode || cathode with single bars for phases and double bar for the bridge.',
      'Standard EMF is E_cathode minus E_anode using tabulated reduction potentials.',
      'Positive E_cell means negative Delta-G and a spontaneous cell reaction.',
      'The series orders oxidising and reducing strength and predicts displacement.'
    ],
    quiz: [
      {
        q: 'Which notation correctly represents a Daniel cell with zinc anode and copper cathode?',
        options: ['`Cu | Cu^{2+} || Zn^{2+} | Zn`', '`Zn | Zn^{2+} || Cu^{2+} | Cu`', '`Zn | Cu^{2+} || Zn^{2+} | Cu`', '`Pt | Zn || Cu | Pt`'],
        answer: 1,
        explanation: 'Step 1: Anode is written on the left, so zinc comes first. Step 2: Each electrode is followed by its own ion. Step 3: The double bar separates the two half cells, giving `Zn | Zn^{2+} || Cu^{2+} | Cu`.'
      },
      // PYQ-pattern: standard EMF from two half cells (rephrased, values changed)
      {
        q: 'For $E^0_{Cu^{2+}/Cu} = +0.34$ V and $E^0_{Zn^{2+}/Zn} = -0.76$ V, what is $E^0_{cell}$ for the spontaneous pairing?',
        options: ['$-1.10$ V', '$+0.42$ V', '$+1.10$ V', '$-0.42$ V'],
        answer: 2,
        explanation: 'Step 1: Copper is the cathode because its potential is larger. Step 2: Apply $E^0_{cell} = E^0_{cathode} - E^0_{anode}$. Step 3: Substitute $0.34 - (-0.76)$ to obtain $1.10$ V.'
      },
      {
        q: 'A computed $E^0_{cell} = -0.46$ V for a written cell direction means what?',
        options: ['The reverse direction is spontaneous with $+0.46$ V', 'The written direction is spontaneous', 'The cell is at equilibrium', 'The salt bridge is unnecessary'],
        answer: 0,
        explanation: 'Step 1: Negative EMF means positive $\\Delta G^0$ for the written direction. Step 2: Reversing swaps anode and cathode and flips the sign. Step 3: The reverse direction has $+0.46$ V and runs spontaneously.'
      },
      {
        q: 'What is the function of the salt bridge?',
        options: ['To supply electrons to the cathode', 'To oxidise the anode metal directly', 'To fix the temperature at $298$ K', 'To maintain neutrality by ion migration between half cells'],
        answer: 3,
        explanation: 'Step 1: Electron flow would build up charge imbalance. Step 2: Cations move toward the cathode and anions toward the anode. Step 3: This migration preserves neutrality so current continues.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.2
  {
    sectionId: 'chem-ch6-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Nernst equation from chemical potentials to sensors',
        blocks: [
          {
            kind: 'derivation',
            heading: 'From free energy to voltage with the reaction quotient',
            body: 'Start from the free energy isotherm where nonstandard free energy equals standard free energy plus a logarithmic quotient term, then divide by charge to reach voltage. With $\\Delta G = \\Delta G^0 + RT \\ln Q$ for the cell reaction and $\\Delta G = -nFE$, substitution gives $E = E^0 - (RT/nF) \\ln Q$ in one step. At room temperature the prefactor converts to about $0.059$ volt units per decade for $n = 1$ when the natural logarithm is changed to base ten, which is the working form used for concentration cells and ion selective electrodes.'
          },
          {
            kind: 'theorem',
            heading: 'Zero voltage is equilibrium',
            body: 'The **equilibrium theorem** for cells states that measured voltage vanishes exactly when the reaction quotient equals the equilibrium constant, turning voltmeters into equilibrium probes. Setting $E = 0$ in the Nernst form gives $\\ln K = nFE^0/RT$, so a standard potential of a few tenths of a volt implies an equilibrium constant spanning many orders of magnitude. This exponential leverage is why small potential shifts signal large concentration changes, and why potentiometric titrations locate endpoints from voltage jumps rather than color change.'
          },
          {
            kind: 'application',
            heading: 'Concentration cells and glass electrodes that read acidity',
            body: 'A concentration cell with identical electrodes in different ion activities develops voltage purely from the entropy of mixing, with $E$ proportional to the logarithm of the activity ratio and no standard term. The glass pH electrode applies the same principle with a membrane selective to hydrogen ions, so the measured voltage tracks $pH$ linearly after calibration against buffers. Environmental monitoring and physiology both rely on this Nernstian response, and modern solid state sensors extend it to sodium potassium and chloride by changing only the selective membrane while keeping the logarithmic law.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Real cells rarely operate with unit concentrations, so the potential shifts with the reaction quotient as described by the Nernst equation. The same relation connects measured voltages to equilibrium constants, pH and ion concentrations. This section turns standard potentials into working tools for nonstandard cells and concentration cells.',
    objectives: [
      'Apply the Nernst equation to find cell potential at given concentrations',
      'Relate $E^0_{cell}$ to $K_c$ and $\\Delta G^0$ for the cell reaction',
      'Interpret concentration cells and pH sensing from potential shifts'
    ],
    concepts: [
      {
        term: 'Nernst equation',
        kind: 'law',
        statement: 'The **Nernst equation** gives the nonstandard potential as `E = E^0 - (RT/nF) ln Q`, which at $298$ K becomes $E_{cell} = E^0_{cell} - \\frac{0.0591}{n}\\log Q$ with **reaction quotient** $Q$ and **electron count** $n$. The code `Q` uses product activities over reactant activities, each raised to its stoichiometric power.',
        detail: 'For $Zn + Cu^{2+} \\to Zn^{2+} + Cu$ the quotient is $Q = \\frac{[Zn^{2+}]}{[Cu^{2+}]}$ because solids are omitted. Diluting the cathode ion raises $Q$ and lowers $E_{cell}$. At $298$ K the prefactor $\\frac{2.303RT}{F}$ equals $0.0591$ V.'
      },
      {
        term: 'Concentration cell',
        kind: 'definition',
        statement: 'A **concentration cell** uses the same electrodes with **different ion concentrations**, so `E^0_cell = 0` and the driving force is purely the **concentration difference**. The cell $Pt | H_2 | H^+_{dilute} || H^+_{concentrated} | H_2 | Pt$ develops $E_{cell} = \\frac{0.0591}{n}\\log\\frac{C_2}{C_1}$ with $C_2$ as the more concentrated side.',
        detail: 'Dilution drives the spontaneous direction: the concentrated compartment reduces while the dilute compartment oxidises until concentrations equalise. Amalgam and gas concentration cells follow the same form with activities or pressure ratios. No chemical change of electrode material occurs overall.'
      },
      {
        term: 'EMF equilibrium link',
        kind: 'theorem',
        statement: 'At equilibrium the cell potential vanishes, giving the **EMF equilibrium relation** `log K_c = n E^0_cell / 0.0591` at $298$ K with **equilibrium constant** $K_c$ and **standard EMF** $E^0_{cell}$. A cell with $E^0_{cell} = 1.10$ V and $n = 2$ therefore has $\\log K_c = \\frac{2 \\times 1.10}{0.0591}$, an enormous $K_c$ near $10^{37}$.',
        detail: 'The derivation sets $E_{cell} = 0$ so $E^0_{cell} = \\frac{0.0591}{n}\\log K_c$. Large positive $E^0_{cell}$ means $K_c$ is hugely greater than one. This is the fastest route to $K_c$ when potentials are known.'
      },
      {
        term: 'Gibbs energy link',
        kind: 'law',
        statement: 'Electrical work and free energy meet in **$\\Delta G = -nFE$** with `Faraday constant` $F = 96487$ C per mole of electrons and **cell potential** $E$. Under standard conditions $\\Delta G^0 = -nFE^0_{cell}$, and combining with $\\Delta G^0 = -RT\\ln K_c$ closes the triangle between **voltage**, **work** and **equilibrium**.',
        detail: 'Spontaneous cells have positive $E$ and negative $\\Delta G$. The magnitude $|\\Delta G|$ is the maximum non-expansion work available. Units check: $n$ in moles of electrons times $F$ in coulombs per mole times $E$ in volts gives joules.'
      },
      {
        term: 'pH from potential',
        kind: 'method',
        statement: 'Because $H^+$ appears in many half reactions, the measured potential encodes **pH** through the term `0.0591 pH` at $298$ K. For $2H^+ + 2e^{-} \\to H_2$ the Nernst form is $E = E^0 - \\frac{0.0591}{2}\\log\\frac{p_{H_2}}{[H^+]^{2}}$, which simplifies with **hydrogen pressure** fixed to $E = -0.0591 \\times pH$ versus the hydrogen scale.',
        detail: 'Glass electrodes and pH meters exploit this linear shift of about $59.1$ mV per pH unit. Quinhydrone and hydrogen electrodes are classical laboratory versions. The same idea measures any ion that controls $Q$ once the cell is calibrated.'
      }
    ],
    figures: [
      {
        caption: 'Nernst $E = E^0 - (0.0591/n)\log Q$ at $298 K$ falls as products build: $Q = 10$ with $n = 2$ drops $1.10 V$ to $1.07 V$ while $\log K_c = nE^0/0.0591$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cell potential declining line versus log reaction quotient"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">E falls with log Q to zero at K</text><line x1="100" y1="300" x2="620" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="300" x2="100" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="70" y="70" font-size="13" fill="currentColor" font-family="sans-serif">E</text><text x="610" y="320" font-size="13" fill="currentColor" font-family="sans-serif">log Q</text><line x1="120" y1="100" x2="560" y2="260" stroke="currentColor" stroke-width="2.5"/><circle cx="120" cy="100" r="5" fill="currentColor" stroke="none"/><text x="130" y="95" font-size="12" fill="currentColor" font-family="sans-serif">E0 1.10 V</text><circle cx="340" cy="180" r="5" fill="none" stroke="currentColor" stroke-width="2"/><text x="350" y="175" font-size="12" fill="currentColor" font-family="sans-serif">Q=10: 1.07 V</text><circle cx="520" cy="240" r="5" fill="currentColor" stroke="none"/><text x="460" y="265" font-size="12" fill="currentColor" font-family="sans-serif">E=0 at Q=K huge</text><line x1="100" y1="240" x2="620" y2="240" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><text x="40" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">concentration cell E0=0 runs on ratio; pH shifts 59 mV per unit</text></svg>`,
        afterConcept: 1,
      },
    ],
    derivations: [
      {
        title: 'Nernst Equation from Gibbs Energy',
        statement: 'Derivation of $E = E^{0} - \\frac{RT}{nF}\\ln Q$ from $\\Delta G = \\Delta G^{0} + RT\\ln Q$ and $\\Delta G = -nFE$',
        prerequisites: [
          'Gibbs energy isotherm $\\Delta G = \\Delta G^{0} + RT\\ln Q$',
          'Electrical work relation $\\Delta G = -nFE$ with electron count $n$',
          'Reaction quotient $Q$ from activities of cell reaction'
        ],
        steps: [
          {
            label: 'Step 1: Start from the free energy isotherm',
            formula: '$$\\Delta G = \\Delta G^{0} + RT\\ln Q$$',
            explanation: 'Nonstandard free energy equals the standard value plus a mixing term that vanishes when $Q$ equals one. The quotient $Q$ measures how far the cell mixture sits from the standard composition. The logarithm appears because chemical potentials depend on log activity, so free energy inherits that form.'
          },
          {
            label: 'Step 2: Replace free energies by cell potentials',
            formula: '$$-nFE = -nFE^{0} + RT\\ln Q$$',
            explanation: 'Electrical work available from the cell equals the drop in free energy, with $n$ moles of electrons times $F$ times $E$ giving joules. Substituting this link on both standard and nonstandard sides converts an energy statement into a voltage statement. This replacement is valid because the same reaction path is followed in both cases.'
          },
          {
            label: 'Step 3: Divide by the charge coefficient',
            formula: '$$E = E^{0} - \\frac{RT}{nF}\\ln Q$$',
            explanation: 'Dividing every term by $-nF$ isolates the measured potential $E$ on the left. The minus sign survives on the log term, so raising products lowers voltage while raising reactants raises it. This sign carries the Le Chatelier content that cells weaken as they approach equilibrium.'
          },
          {
            label: 'Step 4: Convert to base ten logarithm form',
            formula: '$$E = E^{0} - \\frac{0.0591}{n}\\log Q$$',
            explanation: 'Changing $\\ln Q$ to $2.303\\log Q$ and inserting $R$, $T$ at $298$ K and $F$ gives $0.0591$ volt units per decade for $n$ equal to one. The base ten version is preferred because concentration ratios are read as powers of ten. Setting $E$ to zero then yields $\\log K$ from $E^{0}$, which closes the voltage to equilibrium triangle.'
          }
        ],
        result: 'Cell $E = E^{0} - \\frac{RT}{nF}\\ln Q$, at $298$ K $E = E^{0} - \\frac{0.0591}{n}\\log Q$, so $E$ falls as products build and vanishes when $Q$ reaches $K$.'
      }
    ],
    examples: [
      {
        title: 'Nernst potential at nonstandard concentrations',
        problem: 'For $Zn + Cu^{2+} \\to Zn^{2+} + Cu$ with $E^0_{cell} = 1.10$ V, $n = 2$, $[Zn^{2+}] = 0.10$ M and $[Cu^{2+}] = 0.010$ M, find $E_{cell}$ at $298$ K.',
        steps: [
          { label: 'Step 1', text: 'Write the quotient with `solids omitted`: $Q = \\frac{[Zn^{2+}]}{[Cu^{2+}]}$ which equals $\\frac{0.10}{0.010} = 10$.' },
          { label: 'Step 2', text: 'Insert into the $298$ K form:\n```text\nE = E0 - (0.0591 over n) log Q\nE = 1.10 minus correction for Q = 10\nE = 1.10 - 0.0295 = 1.0705 V\n```\nHere $\\log Q = \\log 10 = 1$ so the correction is exactly $\\frac{0.0591}{2}$.' },
          { label: 'Step 3', text: 'Since $Q$ exceeds one, $E_{cell}$ falls below $E^0_{cell}$ to about $1.07$ V but remains spontaneous because $E_{cell}$ is still positive.' }
        ],
        result: '$E_{cell} \\approx 1.07$ V at the given concentrations and $298$ K.'
      },
      {
        title: 'Equilibrium constant from standard EMF',
        problem: 'A cell has $E^0_{cell} = 0.46$ V with $n = 2$. Estimate $\\log K_c$ and $K_c$ at $298$ K.',
        steps: [
          { label: 'Step 1', text: 'Use the equilibrium condition `E = 0` giving $\\log K_c = \\frac{nE^0_{cell}}{0.0591}$.' },
          { label: 'Step 2', text: 'Substitute values:\n```text\nlog Kc = 2 times 0.46 divided by 0.0591\nlog Kc = 15.57\nKc = 10^15.57 ~ 3.7 x 10^15\n```\nIn symbols $\\log K_c \\approx 15.6$ so $K_c \\approx 10^{15.6}$.' },
          { label: 'Step 3', text: 'The huge $K_c$ matches the positive $E^0_{cell}$: the reaction goes essentially to completion, consistent with $\\Delta G^0 = -nFE^0_{cell}$ being strongly negative.' }
        ],
        result: '$\\log K_c \\approx 15.6$ and $K_c \\approx 3.7 \\times 10^{15}$ at $298$ K.'
      }
    ],
    keyTakeaways: [
      'Nernst form at 298 K is E = E0 minus 0.0591 over n times log Q.',
      'Concentration cells run on activity difference with E0 equal to zero.',
      'Equilibrium link is log Kc = n E0 over 0.0591 at 298 K.',
      'Delta-G equals minus n F E and pH shifts potential by 59 mV per unit.'
    ],
    quiz: [
      {
        q: 'For $Zn + Cu^{2+} \\to Zn^{2+} + Cu$, what is $Q$?',
        options: ['`$Q = [Cu^{2+}]/[Zn^{2+}]$`', '`$Q = [Zn^{2+}]/[Cu^{2+}]$`', '`$Q = [Zn][Cu^{2+}]/[Zn^{2+}][Cu]$`', '`$Q = 1$ always`'],
        answer: 1,
        explanation: 'Step 1: Write products over reactants. Step 2: Omit pure solids $Zn$ and $Cu$. Step 3: Keep $Q = [Zn^{2+}]/[Cu^{2+}]$.'
      },
      {
        q: 'A concentration cell with identical electrodes has $E^0_{cell}$ equal to what?',
        options: ['`$E^0_{cell} = 0$`', '`$E^0_{cell} = 1.10$ V`', '`$E^0_{cell} = 0.0591$ V`', '`$E^0_{cell} = -RT \\ln Q$`'],
        answer: 0,
        explanation: 'Step 1: Both half reactions are chemically identical. Step 2: Their standard potentials cancel exactly. Step 3: Only the concentration term survives, so $E^0_{cell} = 0$.'
      },
      // PYQ-pattern: Nernst EMF with tenfold concentration ratio (rephrased, values changed)
      {
        q: 'A cell with $n = 2$ and $E^0_{cell} = 1.10$ V operates with $Q = 10$ at $298$ K. What is $E_{cell}$?',
        options: ['$1.13$ V', '$1.10$ V', '$0.98$ V', '$1.07$ V'],
        answer: 3,
        explanation: 'Step 1: Recall $E_{cell} = E^0_{cell} - (0.0591/n)\\log Q$. Step 2: Insert $n = 2$ and $\\log 10 = 1$ to get $1.10 - 0.0295$. Step 3: Evaluate to about $1.07$ V.'
      },
      {
        q: 'How does $E_{cell}$ change if the cathode ion concentration is halved while the anode ion stays fixed?',
        options: ['It rises because $Q$ falls', 'It stays fixed at $E^0_{cell}$', 'It falls because $Q$ rises', 'It becomes zero immediately'],
        answer: 2,
        explanation: 'Step 1: $Q$ has cathode concentration in the denominator. Step 2: Halving it doubles $Q$. Step 3: A larger $Q$ subtracts more, so $E_{cell}$ falls.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.3
  {
    sectionId: 'chem-ch6-s3',
    readingTime: 8,
    intro: 'Conductance studies how ions carry current through solution rather than how electrodes exchange electrons. Molar conductivity rises with dilution and follows distinct laws for strong and weak electrolytes. This section links measured conductivity to dissociation, ionic contributions and even solubility.',
    objectives: [
      'Distinguish conductance, conductivity and molar conductivity with units',
      'Use Kohlrausch plots to obtain $\\Lambda^0_m$ for strong and weak electrolytes',
      'Find degree of dissociation and solubility from conductivity data'
    ],
    concepts: [
      {
        term: 'Conductance terms',
        kind: 'definition',
        statement: 'The **conductance** `G` is the reciprocal of resistance with unit **siemens** $S$, while **conductivity** $\\kappa$ is the conductance of a one centimetre cube with unit $S cm^{-1}$. The **molar conductivity** $\\Lambda_m = \\frac{\\kappa \\times 1000}{M}$ with `molarity` $M$ carries units $S cm^{2} mol^{-1}$ and allows comparison across concentrations.',
        detail: 'Conductivity rises with ion count but molar conductivity rises with dilution because interionic drag falls. Cell constant $G^* = l/A$ converts measured $G$ into $\\kappa = G \\times G^*$. Temperature raises both by speeding ions.'
      },
      {
        term: 'Strong versus weak plots',
        kind: 'law',
        statement: 'For **strong electrolytes** the Kohlrausch plot of `Lambda_m versus sqrt(c)` is linear as $\\Lambda_m = \\Lambda^0_m - A\\sqrt{c}$, while **weak electrolytes** show a **steep rise** at high dilution because **dissociation** itself increases. The intercept `Lambda^0_m` is the **limiting molar conductivity** at infinite dilution.',
        detail: 'Strong electrolytes are fully dissociated, so only mobility changes with concentration. Weak electrolytes such as $CH_3COOH$ gain both mobility and ion count on dilution. Extrapolation works directly only for the linear strong case.'
      },
      {
        term: 'Kohlrausch law',
        kind: 'law',
        statement: 'The **Kohlrausch law of independent migration** states that `limiting conductivity is additive` as $\\Lambda^0_m = \\nu_+\\lambda^0_+ + \\nu_-\\lambda^0_-$ with **ionic contributions** $\\lambda^0_+$ and $\\lambda^0_-$. For acetic acid $\\Lambda^0_m(CH_3COOH) = \\Lambda^0_m(CH_3COONa) + \\Lambda^0_m(HCl) - \\Lambda^0_m(NaCl)$ using only **strong electrolyte** data.',
        detail: 'Each ion migrates independently at infinite dilution, so its contribution transfers across salts. The subtraction cancels $Na^+$ and $Cl^-$ to isolate the weak pair. Ionic values also give transport numbers $t_+ = \\lambda^0_+/(\\lambda^0_+ + \\lambda^0_-)$.'
      },
      {
        term: 'Degree of dissociation',
        kind: 'method',
        statement: 'The **degree of dissociation** follows from the ratio `alpha = Lambda_m / Lambda^0_m` using measured **molar conductivity** $\\Lambda_m$ and **limiting value** $\\Lambda^0_m$. For a weak acid the dissociation constant is then $K_a = \\frac{c\\alpha^{2}}{1-\\alpha}$ by the **Ostwald dilution law**.',
        detail: 'The ratio works because only the dissociated fraction conducts as free ions. At high dilution $\\alpha$ approaches one and $\\Lambda_m$ approaches $\\Lambda^0_m$. Conductivity thus measures equilibrium without titration.'
      },
      {
        term: 'Solubility from conductance',
        kind: 'method',
        statement: 'For a **sparingly soluble salt** the saturated concentration is tiny, so measured `kappa` gives solubility via $s = \\frac{\\kappa \\times 1000}{\\Lambda^0_m}$ with **solubility** $s$ in moles per litre. The product $K_{sp}$ follows from $s$, for $AgCl$ as $K_{sp} = s^{2}$ and for $PbI_2$ as $K_{sp} = 4s^{3}$ using **stoichiometry**.',
        detail: 'Subtract the conductivity of pure water first, because it contributes at these low levels. $\\Lambda^0_m$ of the insoluble salt comes from Kohlrausch addition of soluble salts. The route avoids weighing minute precipitates.'
      }
    ],
    figures: [
      {
        caption: 'Molar conductivity $\Lambda_m = \kappa \times 1000/M$ rises on dilution: strong plots linear in $\sqrt{c}$ while Kohlrausch $\Lambda^0_m = \nu_+\lambda^0_+ + \nu_-\lambda^0_-$ isolates weak pairs.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Molar conductivity versus root concentration plot"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">Kohlrausch lines: strong straight, weak curved</text><line x1="100" y1="280" x2="620" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="280" x2="100" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="60" y="70" font-size="13" fill="currentColor" font-family="sans-serif">Lm</text><text x="600" y="300" font-size="12" fill="currentColor" font-family="sans-serif">sqrt(c)</text><line x1="120" y1="120" x2="560" y2="220" stroke="currentColor" stroke-width="2.5"/><text x="380" y="165" font-size="12" fill="currentColor" font-family="sans-serif">strong: straight</text><path d="M120,140 Q300,150 400,180 Q500,210 580,260" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/><text x="380" y="230" font-size="12" fill="currentColor" font-family="sans-serif">weak: steep rise</text><line x1="120" y1="120" x2="120" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><text x="60" y="135" font-size="11" fill="currentColor" font-family="sans-serif">intercept L0</text><text x="100" y="310" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">acetic L0 = 91.0 + 426.2 - 126.5 = 390.7; alpha = L/L0</text><text x="100" y="330" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">tiny kappa gives s = kappa x 1000 / L0 for AgCl</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Limiting conductivity by Kohlrausch addition',
        problem: 'Given $\\Lambda^0_m$ values $91.0$, $426.2$ and $126.5$ in $S cm^{2} mol^{-1}$ for $CH_3COONa$, $HCl$ and $NaCl$, find $\\Lambda^0_m$ for $CH_3COOH$.',
        steps: [
          { label: 'Step 1', text: 'Recall the addition with `strong electrolytes only`: $\\Lambda^0_m(CH_3COOH) = \\Lambda^0_m(CH_3COONa) + \\Lambda^0_m(HCl) - \\Lambda^0_m(NaCl)$.' },
          { label: 'Step 2', text: 'Substitute:\n```text\nLambda0 = 91.0 + 426.2 - 126.5\nLambda0 = 390.7 S cm2 mol-1\n```\nIn symbols $\\Lambda^0_m(CH_3COOH) = 91.0 + 426.2 - 126.5$ which equals $390.7$ $S cm^{2} mol^{-1}$.' },
          { label: 'Step 3', text: 'Direct extrapolation of $CH_3COOH$ would fail because its plot curves, so this indirect route using `independent migration` is required.' }
        ],
        result: '$\\Lambda^0_m(CH_3COOH) = 390.7$ $S cm^{2} mol^{-1}$ by Kohlrausch addition.'
      },
      {
        title: 'Solubility product from conductivity',
        problem: 'Saturated $AgCl$ has $\\kappa = 1.90 \\times 10^{-6}$ $S cm^{-1}$ after water correction, with $\\Lambda^0_m(AgCl) = 138.3$ $S cm^{2} mol^{-1}$. Find solubility $s$ and $K_{sp}$.',
        steps: [
          { label: 'Step 1', text: 'Use $s = \\frac{\\kappa \\times 1000}{\\Lambda^0_m}$ with `kappa in S cm-1`. Insert $\\kappa = 1.90 \\times 10^{-6}$ and $\\Lambda^0_m = 138.3$.' },
          { label: 'Step 2', text: 'Compute:\n```text\ns = 1.90e-6 times 1000 divided by 138.3\ns = 1.37e-5 mol L-1\nKsp = s squared = 1.88e-10\n```\nSo $s \\approx 1.37 \\times 10^{-5}$ M and $K_{sp} = s^{2} \\approx 1.9 \\times 10^{-10}$.' },
          { label: 'Step 3', text: 'For $AgCl \\to Ag^+ + Cl^-$ the relation $K_{sp} = s^{2}$ applies because each formula unit gives one cation and one anion.' }
        ],
        result: '$s \\approx 1.37 \\times 10^{-5}$ M and $K_{sp} \\approx 1.9 \\times 10^{-10}$ for $AgCl$.'
      }
    ],
    keyTakeaways: [
      'Lambda-m equals kappa times 1000 over molarity with S cm2 per mol units.',
      'Strong plots are linear in sqrt-c; weak plots curve from changing dissociation.',
      'Kohlrausch addition gives weak Lambda-0 from strong electrolyte data.',
      'Alpha is Lambda over Lambda-0 and solubility is kappa based over Lambda-0.'
    ],
    quiz: [
      {
        q: 'What are the units of molar conductivity $\\Lambda_m$?',
        options: [`$S cm^{-1}$`, `$S cm^{2} mol^{-1}$`, `$ohm$ $cm$`, `$mol$ $L^{-1}$`],
        answer: 1,
        explanation: 'Step 1: $\\kappa$ has $S cm^{-1}$. Step 2: Dividing by concentration per volume leaves area per mole. Step 3: Hence $S cm^{2} mol^{-1}$.'
      },
      {
        q: 'Why can $\\Lambda^0_m$ be found by direct extrapolation for $NaCl$ but not for $CH_3COOH$?',
        options: ['`$NaCl$ plot is linear, $CH_3COOH$ plot curves from rising dissociation`', '`$CH_3COOH$ conducts more than $NaCl$`', '`$NaCl$ is a weak electrolyte`', '`Extrapolation needs temperature data`'],
        answer: 0,
        explanation: 'Step 1: Strong electrolytes stay fully dissociated. Step 2: Their $\\Lambda_m$ versus $\\sqrt{c}$ plot is linear. Step 3: Weak electrolytes curve steeply, so Kohlrausch addition is used instead.'
      },
      // PYQ-pattern: Kohlrausch addition for acetic acid (rephrased, values changed)
      {
        q: 'Given $\\Lambda^0_m$ of $CH_3COONa$, $HCl$ and $NaCl$, how is $\\Lambda^0_m(CH_3COOH)$ obtained?',
        options: ['By averaging the three values', 'By $CH_3COONa - HCl + NaCl$', 'By $CH_3COONa + HCl - NaCl$', 'By direct $\\sqrt{c}$ intercept of $CH_3COOH$'],
        answer: 2,
        explanation: 'Step 1: Write ionic sums for each salt. Step 2: Adding the first two and subtracting the third cancels $Na^+$ and $Cl^-$. Step 3: The remainder is exactly $CH_3COOH$.'
      },
      {
        q: 'Saturated $AgCl$ has solubility $s$. What is $K_{sp}$?',
        options: [`$K_{sp} = s$`, `$K_{sp} = 4s^{3}$`, `$K_{sp} = 2s$`, `$K_{sp} = s^{2}$`],
        answer: 3,
        explanation: 'Step 1: Dissociation is $AgCl \\to Ag^+ + Cl^-$. Step 2: Both ion concentrations equal $s$. Step 3: Multiply to get $K_{sp} = s \\times s = s^{2}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.4
  {
    sectionId: 'chem-ch6-s4',
    readingTime: 8,
    intro: 'Electrolysis drives nonspontaneous reactions with an external supply and obeys quantitative Faraday relations between charge and mass. Predicting which species discharges first is a matter of potentials and concentration. This section closes with the cells you meet daily, from dry cells to lead storage and fuel cells.',
    objectives: [
      'Predict cathode and anode products using potentials and concentration rules',
      'Convert between charge, moles of electrons and deposited mass via Faraday laws',
      'Describe dry, lead storage and fuel cells with reactions and recharging'
    ],
    concepts: [
      {
        term: 'Faraday laws',
        kind: 'law',
        statement: 'The **Faraday laws** state that deposited mass `w = Z Q` with **electrochemical equivalent** $Z = \\frac{M}{nF}$, or equivalently $w = \\frac{MIt}{nF}$ with **molar mass** $M$, **current** $I$ and **time** $t$. One `faraday` of $96487$ C deposits one mole of electrons, so $Q = It$ divided by $F$ gives **moles of electrons** directly.',
        detail: 'For $Cu^{2+} + 2e^{-} \\to Cu$ the equivalent weight is $M/2$, so one faraday plates half a mole of copper. The second law compares two cells in series: masses deposit in the ratio of equivalent weights. Current efficiency below unity reduces the actual yield.'
      },
      {
        term: 'Preferential discharge',
        kind: 'method',
        statement: 'When several species compete, the one with the **more favourable reduction potential** discharges at the `cathode`, while the more easily oxidised species discharges at the `anode`. Concentrated $Cl^-$ can still liberate $Cl_2$ over $O_2$ at the anode because of **overpotential** and **concentration effects** even though $O_2$ evolution has the smaller standard requirement.',
        detail: 'Cations of active metals such as $Na^+$ and $Mg^{2+}$ stay in solution while water reduces to $H_2$. Inert anodes evolve $O_2$ from dilute solutions but $Cl_2$ from concentrated brine. Electrode material matters: mercury cathodes favour sodium amalgam over hydrogen.'
      },
      {
        term: 'Electrolysis products',
        kind: 'definition',
        statement: 'Water electrolysis with inert electrodes gives **hydrogen at the cathode** by $2H_2O + 2e^{-} \\to H_2 + 2OH^-$ and **oxygen at the anode** by $2H_2O \\to O_2 + 4H^+ + 4e^{-}$ using `inert Pt electrodes`. Brine electrolysis gives $H_2$ plus $Cl_2$ with $NaOH$ left behind, the basis of the **chlor alkali** process.',
        detail: 'Active anodes dissolve instead of evolving gas: copper anodes in copper refining pass $Cu \\to Cu^{2+} + 2e^{-}$ while pure copper plates at the cathode. Molten salts give the bare metal, such as $Na^+ + e^{-} \\to Na$ from fused $NaCl$. Volume ratios $H_2$ to $O_2$ of two to one confirm the stoichiometry.'
      },
      {
        term: 'Dry and lead storage cells',
        kind: 'definition',
        statement: 'The **dry cell** pairs a zinc can anode with a carbon cathode in a **paste of $MnO_2$ and $NH_4Cl$**, delivering about $1.5$ V irreversibly, while the **lead storage cell** runs $Pb + PbO_2 + 2H_2SO_4 \\rightleftharpoons 2PbSO_4 + 2H_2O$ reversibly at about `2 V per cell` with **sulphuric acid** consumed on discharge. Charging reverses the lead reaction by **external current**.',
        detail: 'Dry cells fade as the paste dries and zinc corrodes, and they are not rechargeable. Lead batteries use six two volt units in series for twelve volts, with density of the acid tracking charge level. Discharge coats both plates with $PbSO_4$, which reconverts on charging.'
      },
      {
        term: 'Fuel cell',
        kind: 'insight',
        statement: 'A **fuel cell** feeds fuel and oxidiser continuously, such as `H_2-O_2 cell` with reactions $2H_2 + 4OH^- \\to 4H_2O + 4e^{-}$ at the anode and $O_2 + 2H_2O + 4e^{-} \\to 4OH^-$ at the cathode for net $2H_2 + O_2 \\to 2H_2O$. Unlike batteries it never runs down while **fuel supply** lasts and reaches high **conversion efficiency** because combustion heat is skipped.',
        detail: 'Alkaline hydrogen oxygen cells powered space missions with drinking water as byproduct. Catalysts such as finely divided platinum speed the electrode steps. Methanol and hydrocarbon variants trade power density for fuel convenience.'
      }
    ],
    figures: [
      {
        caption: 'Faraday $w = MIt/nF$ converts charge to mass: $3600 C$ plates $1.18 g$ copper while brine gives $H_2$ at cathode and $Cl_2$ at anode.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Electrolysis beaker with gas bubbles at electrodes"><rect x="0" y="0" width="720" height="360" fill="currentColor" opacity="0"/><text x="40" y="36" font-size="15" fill="currentColor" font-family="sans-serif">electrolysis: H2 double O2, mass by charge</text><rect x="220" y="100" width="280" height="160" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="260" y="70" width="20" height="120" fill="none" stroke="currentColor" stroke-width="2.5"/><rect x="460" y="70" width="20" height="120" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="230" y="90" font-size="12" fill="currentColor" font-family="sans-serif">cathode -</text><text x="450" y="90" font-size="12" fill="currentColor" font-family="sans-serif">anode +</text><circle cx="270" cy="210" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="290" cy="225" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="260" cy="230" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="470" cy="215" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="300" y="215" font-size="12" fill="currentColor" font-family="sans-serif">H2 x2 bubbles</text><text x="485" y="215" font-size="12" fill="currentColor" font-family="sans-serif">O2 x1</text><rect x="300" y="40" width="120" height="30" fill="none" stroke="currentColor" stroke-width="2"/><text x="320" y="60" font-size="12" fill="currentColor" font-family="sans-serif">battery I x t</text><line x1="270" y1="70" x2="270" y2="40" stroke="currentColor" stroke-width="2"/><line x1="470" y1="70" x2="470" y2="40" stroke="currentColor" stroke-width="2"/><line x1="360" y1="40" x2="270" y2="40" stroke="currentColor" stroke-width="1.5"/><line x1="420" y1="40" x2="470" y2="40" stroke="currentColor" stroke-width="1.5"/><text x="40" y="300" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">w = M Q / nF; brine: cathode H2, anode Cl2 by overpotential; Pb cell 2 V per unit</text><text x="40" y="325" font-size="12" fill="currentColor" font-family="sans-serif" opacity="0.85">dry 1.5 V paste once; fuel feeds H2 + O2 to water while supply lasts</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Mass plated by a known current',
        problem: 'A current of $2.0$ A flows for $30$ minutes through $CuSO_4$ solution with copper electrodes. Find the mass of copper deposited ($M_{Cu} = 63.5$, $n = 2$).',
        steps: [
          { label: 'Step 1', text: 'Convert time to charge with `Q = I t`: $Q = 2.0 \\times 30 \\times 60$ which equals $3600$ C.' },
          { label: 'Step 2', text: 'Apply Faraday form:\n```text\nw = M Q / (n F)\nw = 63.5 x 3600 / (2 x 96487)\nw = 1.18 g\n```\nIn symbols $w = \\frac{63.5 \\times 3600}{2 \\times 96487}$ giving about $1.18$ g.' },
          { label: 'Step 3', text: 'Moles of electrons are $Q/F \\approx 0.0373$, halved for $Cu^{2+}$ to $0.0187$ mol of copper, matching $0.0187 \\times 63.5 \\approx 1.18$ g.' }
        ],
        result: 'About $1.18$ g of copper plates in $30$ minutes at $2.0$ A.'
      },
      {
        title: 'Predict brine electrolysis products',
        problem: 'Predict the cathode and anode products for concentrated aqueous $NaCl$ with inert electrodes and write both half reactions.',
        steps: [
          { label: 'Step 1', text: 'At the `cathode` the choice is $Na^+ + e^{-} \\to Na$ versus $2H_2O + 2e^{-} \\to H_2 + 2OH^-$. Water wins because sodium has a strongly negative $E^0$, so **hydrogen evolves**.' },
          { label: 'Step 2', text: 'At the `anode` the choice is $Cl_2$ versus $O_2$:\n```text\nAnode: 2Cl- -> Cl2 + 2e-  (concentrated brine)\nCathode: 2H2O + 2e- -> H2 + 2OH-\n```\nConcentrated $Cl^-$ plus overpotential for $O_2$ makes **chlorine evolve**.' },
          { label: 'Step 3', text: 'Net result is $H_2$ at the cathode, $Cl_2$ at the anode and $NaOH$ accumulating, written $2NaCl + 2H_2O \\to H_2 + Cl_2 + 2NaOH$.' }
        ],
        result: 'Cathode gives $H_2$, anode gives $Cl_2$, solution turns alkaline with $NaOH$.'
      }
    ],
    keyTakeaways: [
      'Mass follows w = M I t over n F with Q = I t charge.',
      'Cathode picks easier reduction; anode picks easier oxidation with overpotential.',
      'Water gives H2 and O2; brine gives H2 and Cl2 with NaOH residue.',
      'Dry cell is primary 1.5 V; lead storage is rechargeable 2 V per unit.'
    ],
    quiz: [
      // PYQ-pattern: Faraday mass from current and time (rephrased, values changed)
      {
        q: 'How much copper ($M = 63.5$, $n = 2$) deposits with $Q = 3600$ C?',
        options: ['$0.59$ g', '$1.18$ g', '$2.37$ g', '$3.55$ g'],
        answer: 1,
        explanation: 'Step 1: Moles of electrons are $Q/F = 3600/96487$. Step 2: Divide by $n = 2$ for moles of copper. Step 3: Multiply by $63.5$ to get about $1.18$ g.'
      },
      {
        q: 'In electrolysis of concentrated brine with inert electrodes, what evolves at the anode?',
        options: ['`$Na$ metal`', '`$H_2$`', '`$Cl_2$`', '`$O_2$ only`'],
        answer: 2,
        explanation: 'Step 1: Anode candidates are $Cl_2$ and $O_2$. Step 2: High $Cl^-$ concentration plus oxygen overpotential favour chloride oxidation. Step 3: Hence $Cl_2$ evolves.'
      },
      {
        q: 'What happens on charging a lead storage cell?',
        options: ['`$PbSO_4$ reconverts to $Pb$ and $PbO_2$ with acid regenerated`', '`$PbSO_4$ dissolves without reaction`', '`Water splits into $H_2$ and $O_2$ only`', '`The acid concentration falls further`'],
        answer: 0,
        explanation: 'Step 1: Discharge forms $PbSO_4$ on both plates. Step 2: External current reverses the reaction. Step 3: $Pb$, $PbO_2$ and $H_2SO_4$ are restored.'
      },
      {
        q: 'Two cells in series plate silver ($n = 1$) and copper ($n = 2$). How do masses compare?',
        options: ['Equal masses', 'In the ratio of currents', 'In the ratio of times', 'In the ratio of equivalent weights $M_{Ag}/1 : M_{Cu}/2$'],
        answer: 3,
        explanation: 'Step 1: Series cells pass identical charge. Step 2: Mass is proportional to equivalent weight $M/n$. Step 3: Hence the ratio is $M_{Ag}/1$ to $M_{Cu}/2$.'
      }
    ]
  }
]
