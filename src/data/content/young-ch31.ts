import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 31: Alternating Current.

export const youngCh31Content: SectionContent[] = [
  {
    sectionId: "young-ch31-s1",
    readingTime: 6,
    intro: "Most wall power is sinusoidal alternating current, so voltages and currents change sign every half cycle. Young opens Chapter 31 with the phasor, a rotating vector that turns sinusoid time dependence into geometry. Once voltages add as vectors, the whole AC circuit theory follows.",
    objectives: [
      "Write a sinusoidal voltage and current with amplitude, angular frequency, and phase angle",
      "Add sinusoidal quantities of the same frequency by phasor vector addition",
      "Read phase lead versus lag from a phasor diagram and a graph of voltage versus time"
    ],
    concepts: [
      {
        term: "Sinusoidal source",
        kind: "definition",
        statement: "An AC source produces $v(t) = V \\cos(\\omega t + \\phi)$, where $V$ is the amplitude, $\\omega = 2\\pi f$ is the angular frequency, and $\\phi$ is the phase angle.",
        detail: "Household power in the US is $f = 60$ Hz so $\\omega = 377$ rad/s. Amplitude $V$ is the peak; meters normally report rms values described in Section 31.4."
      },
      {
        term: "Phasor",
        kind: "definition",
        statement: "A **phasor is a vector of length equal to the amplitude** that rotates counterclockwise with angular speed $\\omega$; its projection on the horizontal axis is the instantaneous value.",
        detail: "Because every element in a series circuit shares the same $\\omega$, relative angles stay fixed and the diagram is frozen at one instant, usually with the current phasor on the axis."
      },
      {
        term: "Phasor addition",
        kind: "method",
        statement: "To add two sinusoids of the same frequency, **add their phasors as vectors**; the magnitude of the sum is the amplitude of the total and its angle is the total phase.",
        detail: "This replaces pages of trig identities with one vector diagram. It works only when all terms share the same $\\omega$."
      },
      {
        term: "Phase lead and lag",
        kind: "notation",
        statement: "A quantity whose phasor lies counterclockwise from another **leads** it; one lying clockwise **lags** it, with phase difference $\\phi$ measured from current to voltage.",
        detail: "Young adopts $\\phi$ as the phase of voltage relative to current. Positive $\\phi$ means voltage leads current, an inductive circuit."
      },
      {
        term: "Why phasors beat algebra",
        kind: "insight",
        statement: "Resistors, inductors, and capacitors each rotate the voltage phasor by a fixed angle, so **an entire AC circuit reduces to vector addition** once the three rotations are memorized.",
        detail: "The next two sections supply those rotations: $0$ for a resistor, voltage leading by $\\pi/2$ for an inductor, voltage lagging by $\\pi/2$ for a capacitor."
      }
    ],
    figures: [
      {
        caption: "Phasor diagram: current phasor $I$ on the axis with voltage phasors combining by vector addition",
        svg: '<svg viewBox="0 0 400 220" style="width:100%;height:auto" role="img" aria-label="Phasor diagram: current phasor I on the axis with voltage phasors combining by vector addition"><rect x="0" y="0" width="400" height="220" fill="none"/><line x1="40" y1="110" x2="360" y2="110" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="200" y1="20" x2="200" y2="200" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="200" y1="110" x2="320" y2="110" stroke="currentColor" stroke-width="2.5"/><polygon points="320,110 310,105 310,115" fill="currentColor"/><text x="325" y="114" font-size="14" fill="currentColor">I</text><line x1="200" y1="110" x2="280" y2="45" stroke="currentColor" stroke-width="2.5"/><polygon points="280,45 270,50 274,57" fill="currentColor"/><text x="285" y="45" font-size="14" fill="currentColor">V</text><path d="M 250 110 A 50 50 0 0 0 245 82" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="252" y="88" font-size="13" fill="currentColor">phi</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Adding two source voltages",
        problem: "Two series sources of frequency $60$ Hz have $v_{1}(t) = (30.0 \\mathrm{V}) \\cos(\\omega t)$ and $v_{2}(t) = (40.0 \\mathrm{V}) \\cos(\\omega t + 90^{\\circ})$. Find the total amplitude and its phase relative to $v_{1}$.",
        steps: [
          { label: "Step 1: Draw the phasors", text: "Phasor 1 has length $30.0$ along the axis; phasor 2 has length $40.0$ straight up, $90^{\\circ}$ ahead." },
          { label: "Step 2: Add as vectors", text: "The sum is the hypotenuse: $V = \\sqrt{(30.0)^{2} + (40.0)^{2}} = 50.0$ V." },
          { label: "Step 3: Find the phase", text: "$\\tan\\phi = 40.0/30.0 = 1.333$, so $\\phi = 53.1^{\\circ}$ ahead of $v_{1}$." }
        ],
        result: "Total $v(t) = (50.0 \\mathrm{V}) \\cos(\\omega t + 53.1^{\\circ})$; amplitude $50.0$ V leading $v_{1}$ by $53.1^{\\circ}$."
      },
      {
        title: "From graph to phasor",
        problem: "A current $i(t) = (2.00 \\mathrm{A}) \\cos(\\omega t)$ and voltage $v(t) = (100 \\mathrm{V}) \\cos(\\omega t - 60^{\\circ})$ are observed. Which lags, and by how much?",
        steps: [
          { label: "Step 1: Compare arguments", text: "Voltage argument is $60^{\\circ}$ behind current at every instant $t$." },
          { label: "Step 2: State lead or lag", text: "Voltage lags current by $60^{\\circ}$, so $\\phi = -60^{\\circ}$; the circuit is capacitive." },
          { label: "Step 3: Sketch", text: "Current phasor on axis, voltage phasor of length $100$ rotated $60^{\\circ}$ clockwise." }
        ],
        result: "Voltage lags current by $60^{\\circ}$ ($\\phi = -60^{\\circ}$)."
      }
    ],
    keyTakeaways: [
      "Sinusoids of one frequency add as rotating phasor vectors, not by trig identities.",
      "Phase is relative: voltage leads or lags current by the fixed angle between phasors.",
      "The current phasor is the usual reference direction in series-circuit diagrams."
    ],
    quiz: [
      {
        q: "Two phasors of lengths 6 and 8 are perpendicular. What is the amplitude of their sum?",
        options: ["7", "10", "14", "48"],
        answer: 1,
        explanation: "Vector sum magnitude is $\\sqrt{6^{2}+8^{2}} = 10$."
      },
      {
        q: "Voltage $v(t) = V \\cos(\\omega t - 45^{\\circ})$ with current $i(t) = I \\cos(\\omega t)$. The voltage:",
        options: ["Leads current by 45 degrees", "Lags current by 45 degrees", "Is in phase with current", "Has a different frequency"],
        answer: 1,
        explanation: "Negative phase means the voltage peak comes later, so voltage lags current."
      },
      {
        q: "Phasor addition is valid only when:",
        options: ["Amplitudes are equal", "All sinusoids share the same frequency", "Phase angles are zero", "The circuit has no capacitor"],
        answer: 1,
        explanation: "Only equal-frequency phasors keep fixed relative angles and add as vectors."
      }
    ]
  },
  {
    sectionId: "young-ch31-s2",
    readingTime: 7,
    intro: "Each circuit element imprints its own phase signature on AC current. A resistor leaves voltage and current in step, an inductor makes voltage lead by a quarter cycle, and a capacitor makes it lag by a quarter cycle. Reactance quantifies how strongly inductors and capacitors oppose current at a given frequency.",
    objectives: [
      "State the phase relation and amplitude relation for R, L, and C elements",
      "Compute inductive reactance $X_{L}$ and capacitive reactance $X_{C}$ at a given frequency",
      "Explain why $X_{L}$ grows with frequency while $X_{C}$ falls"
    ],
    concepts: [
      {
        term: "Resistor in AC",
        kind: "law",
        statement: "For a resistor, **voltage and current are in phase** with amplitudes related by $V_{R} = I R$.",
        detail: "Phasors $V_{R}$ and $I$ are parallel. Resistance $R$ is frequency independent."
      },
      {
        term: "Inductor in AC",
        kind: "law",
        statement: "For an inductor, **voltage leads current by $\\pi/2$** ($90^{\\circ}$) with $V_{L} = I X_{L}$, where inductive reactance is $X_{L} = \\omega L$.",
        detail: "Self-induced emf opposes current change, so voltage must peak a quarter cycle early. Large $L$ or fast $\\omega$ means large opposition."
      },
      {
        term: "Capacitor in AC",
        kind: "law",
        statement: "For a capacitor, **voltage lags current by $\\pi/2$** with $V_{C} = I X_{C}$, where capacitive reactance is $X_{C} = 1/(\\omega C)$.",
        detail: "Current must flow first to build charge, so voltage peaks a quarter cycle late. At high frequency the capacitor barely charges, so $X_{C}$ is small."
      },
      {
        term: "Reactance versus resistance",
        kind: "definition",
        statement: "Reactance $X$ plays the role of resistance for inductors and capacitors, measured in ohms, but unlike $R$ it **stores rather than dissipates energy and depends on $\\omega$**.",
        detail: "Inductor and capacitor voltage phasors point in opposite directions, so their reactances will subtract in series circuits."
      },
      {
        term: "Frequency limits",
        kind: "insight",
        statement: "At $\\omega \\to 0$ an inductor is a short ($X_{L} \\to 0$) and a capacitor is an open ($X_{C} \\to \\infty$); **at $\\omega \\to \\infty$ the roles reverse**.",
        detail: "This opposite frequency dependence is what makes tuning and filtering possible, previewing resonance in Section 31.5."
      }
    ],
    figures: [
      {
        caption: "R, L, C voltage phasors: $V_{R}$ with $I$, $V_{L}$ ahead $90^{\circ}$, $V_{C}$ behind $90^{\circ}$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="R, L, C voltage phasors: V_R with I, V_L ahead 90^\circ, V_C behind 90^\circ"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="200" y1="100" x2="320" y2="100" stroke="currentColor" stroke-width="2.5"/><polygon points="320,100 310,95 310,105" fill="currentColor"/><text x="325" y="104" font-size="13" fill="currentColor">I, VR</text><line x1="200" y1="100" x2="200" y2="30" stroke="currentColor" stroke-width="2.5"/><polygon points="200,30 195,40 205,40" fill="currentColor"/><text x="208" y="40" font-size="13" fill="currentColor">VL</text><line x1="200" y1="100" x2="200" y2="170" stroke="currentColor" stroke-width="2.5"/><polygon points="200,170 195,160 205,160" fill="currentColor"/><text x="208" y="170" font-size="13" fill="currentColor">VC</text><text x="60" y="180" font-size="12" fill="currentColor">R in phase; L leads; C lags</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Inductive reactance at line frequency",
        problem: "A $0.250$ H inductor carries $60.0$ Hz current of amplitude $1.20$ A. Find $X_{L}$ and the voltage amplitude.",
        steps: [
          { label: "Step 1: Angular frequency", text: "$\\omega = 2\\pi(60.0) = 377$ rad/s." },
          { label: "Step 2: Reactance", text: "$X_{L} = \\omega L = (377)(0.250) = 94.2$ ohms." },
          { label: "Step 3: Voltage amplitude", text: "$V_{L} = I X_{L} = (1.20)(94.2) = 113$ V, leading the current by $90^{\\circ}$." }
        ],
        result: "$X_{L} = 94.2$ ohms and $V_{L} = 113$ V amplitude."
      },
      {
        title: "Capacitive reactance",
        problem: "A $20.0$ microF capacitor is connected to a $120$ V rms, $60.0$ Hz line. Find $X_{C}$ and the rms current.",
        steps: [
          { label: "Step 1: Reactance", text: "$X_{C} = 1/(\\omega C) = 1/[(377)(20.0 \\times 10^{-6})] = 133$ ohms." },
          { label: "Step 2: Current", text: "$I_{rms} = V_{rms}/X_{C} = 120/133 = 0.902$ A." },
          { label: "Step 3: Phase", text: "Current leads voltage by $90^{\\circ}$; the voltage lags." }
        ],
        result: "$X_{C} = 133$ ohms, $I_{rms} = 0.902$ A leading the voltage."
      }
    ],
    keyTakeaways: [
      "R: in phase with $V_{R} = IR$; L: voltage leads by 90 degrees with $X_{L} = \\omega L$.",
      "C: voltage lags by 90 degrees with $X_{C} = 1/(\\omega C)$.",
      "Reactance is in ohms but frequency dependent and nondissipative."
    ],
    quiz: [
      {
        q: "Frequency doubles in a circuit with only an inductor. The inductive reactance:",
        options: ["Halves", "Doubles", "Stays the same", "Goes to zero"],
        answer: 1,
        explanation: "$X_{L} = \\omega L$ is proportional to frequency."
      },
      {
        q: "For a capacitor, the voltage relative to the current:",
        options: ["Leads by 90 degrees", "Lags by 90 degrees", "Is in phase", "Leads by 45 degrees"],
        answer: 1,
        explanation: "Charge must accumulate before voltage appears, so voltage lags current by a quarter cycle."
      },
      {
        q: "A $10$ microF capacitor at $1000$ rad/s has reactance:",
        options: ["$100$ ohms", "$10$ ohms", "$1000$ ohms", "$0.01$ ohms"],
        answer: 0,
        explanation: "$X_{C} = 1/(\\omega C) = 1/[(1000)(10 \\times 10^{-6})] = 100$ ohms."
      },
      {
        q: "Which statement about reactance is true?",
        options: ["It dissipates average power like resistance", "It is independent of frequency", "It stores energy and averages zero power", "It applies only to resistors"],
        answer: 2,
        explanation: "Ideal reactances shuttle energy to fields and return it, with zero cycle average power."
      }
    ]
  },
  {
    sectionId: "young-ch31-s3",
    readingTime: 8,
    intro: "A series string of resistor, inductor, and capacitor driven sinusoidally is the prototype AC circuit. Its current amplitude and phase are governed by one number, the impedance, which fuses resistance and net reactance geometrically. This section derives the impedance triangle that engineers use daily.",
    objectives: [
      "Derive the series L-R-C current amplitude $I = V/\\sqrt{R^{2} + (X_{L}-X_{C})^{2}}$",
      "Compute the phase angle $\\phi = \\arctan[(X_{L}-X_{C})/R]$ and interpret its sign",
      "Draw voltage and impedance phasor triangles for a series circuit"
    ],
    concepts: [
      {
        term: "Series current is common",
        kind: "definition",
        statement: "In a series L-R-C circuit the same current $i(t) = I \\cos(\\omega t)$ flows everywhere, so **all element voltages are phasors measured from the single current phasor**.",
        detail: "$V_{R}$ lies along $I$, $V_{L}$ points $90^{\\circ}$ ahead, $V_{C}$ points $90^{\\circ}$ behind."
      },
      {
        term: "Impedance",
        kind: "theorem",
        statement: "The **impedance $Z = \\sqrt{R^{2} + (X_{L} - X_{C})^{2}}$** gives the current amplitude as $I = V/Z$, generalizing $V = IR$.",
        detail: "Because $V_{L}$ and $V_{C}$ oppose each other, only the net reactance $X = X_{L} - X_{C}$ survives vector addition."
      },
      {
        term: "Phase angle",
        kind: "theorem",
        statement: "The voltage leads the current by $\\tan\\phi = (X_{L} - X_{C})/R$, so the sign of $X_{L} - X_{C}$ **decides inductive versus capacitive character**.",
        detail: "Positive $\\phi$ is net inductive; negative $\\phi$ is net capacitive; zero is resistive."
      },
      {
        term: "Impedance triangle",
        kind: "method",
        statement: "Draw $R$ on the real axis and $X = X_{L} - X_{C}$ vertically; **the hypotenuse is $Z$ at angle $\\phi$**, a scaled copy of the voltage triangle.",
        detail: "Dividing the voltage triangle by $I$ yields the impedance triangle directly."
      },
      {
        term: "Inductor and capacitor cancellation",
        kind: "insight",
        statement: "Since $V_{L}$ and $V_{C}$ are antiparallel, a series inductor and capacitor **partially cancel**, and at $X_{L} = X_{C}$ they cancel exactly.",
        detail: "Exact cancellation is resonance: the source sees only $R$, treated fully in Section 31.5."
      }
    ],
    figures: [
      {
        caption: "Impedance triangle: $R$ horizontal, net reactance $X = X_{L} - X_{C}$ vertical, hypotenuse $Z$ at angle $\\phi$",
        svg: '<svg viewBox="0 0 400 230" style="width:100%;height:auto" role="img" aria-label="Impedance triangle: R horizontal, net reactance X = X_L - X_C vertical, hypotenuse Z at angle phi"><rect x="0" y="0" width="400" height="230" fill="none"/><line x1="60" y1="170" x2="240" y2="170" stroke="currentColor" stroke-width="2.5"/><text x="140" y="192" font-size="14" fill="currentColor">R</text><line x1="240" y1="170" x2="240" y2="70" stroke="currentColor" stroke-width="2.5"/><text x="248" y="125" font-size="14" fill="currentColor">X</text><line x1="60" y1="170" x2="240" y2="70" stroke="currentColor" stroke-width="2.5"/><text x="130" y="105" font-size="14" fill="currentColor">Z</text><path d="M 110 170 A 50 50 0 0 0 102 148" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="116" y="152" font-size="13" fill="currentColor">phi</text><line x1="280" y1="170" x2="280" y2="70" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4" opacity="0.6"/><text x="285" y="120" font-size="12" fill="currentColor">VL up, VC down</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Series L-R-C at 1000 rad/s",
        problem: "A series circuit has $R = 200$ ohms, $L = 0.500$ H, $C = 2.00$ microF, driven at $\\omega = 1000$ rad/s by a $50.0$ V amplitude source. Find $Z$, $I$, and $\\phi$.",
        steps: [
          { label: "Step 1: Reactances", text: "$X_{L} = \\omega L = 500$ ohms; $X_{C} = 1/(\\omega C) = 1/[(1000)(2.00 \\times 10^{-6})] = 500$ ohms." },
          { label: "Step 2: Impedance", text: "$X = X_{L} - X_{C} = 0$, so $Z = \\sqrt{R^{2}+0} = 200$ ohms." },
          { label: "Step 3: Current and phase", text: "$I = V/Z = 50.0/200 = 0.250$ A; $\\tan\\phi = 0/R = 0$ so $\\phi = 0$." }
        ],
        result: "$Z = 200$ ohms, $I = 0.250$ A amplitude, $\\phi = 0$; the circuit is accidentally at resonance."
      },
      {
        title: "Off-resonance phase",
        problem: "Same circuit at $\\omega = 2000$ rad/s with $V = 50.0$ V amplitude. Find the new impedance and phase.",
        steps: [
          { label: "Step 1: Reactances", text: "$X_{L} = 1000$ ohms; $X_{C} = 1/[(2000)(2.00 \\times 10^{-6})] = 250$ ohms." },
          { label: "Step 2: Net reactance and Z", text: "$X = 750$ ohms; $Z = \\sqrt{200^{2} + 750^{2}} = \\sqrt{40000+562500} = 777$ ohms." },
          { label: "Step 3: Current and phase", text: "$I = 50.0/777 = 0.0643$ A; $\\phi = \\arctan(750/200) = 75.1^{\\circ}$ inductive." }
        ],
        result: "$Z = 777$ ohms, $I = 0.0643$ A, voltage leads by $75.1^{\\circ}$."
      }
    ],
    keyTakeaways: [
      "Series L-R-C current obeys $I = V/Z$ with $Z = \\sqrt{R^{2}+(X_{L}-X_{C})^{2}}$.",
      "Phase $\\tan\\phi = (X_{L}-X_{C})/R$: positive is inductive, negative capacitive.",
      "Inductor and capacitor voltages oppose and can cancel, leaving only $R$."
    ],
    quiz: [
      {
        q: "R = 30 ohms, $X_{L}$ = 80 ohms, $X_{C}$ = 40 ohms. What is Z?",
        options: ["$50$ ohms", "$150$ ohms", "$70$ ohms", "$30$ ohms"],
        answer: 0,
        explanation: "$Z = \\sqrt{30^{2} + (80-40)^{2}} = \\sqrt{900+1600} = 50$ ohms."
      },
      {
        q: "If $X_{C}$ exceeds $X_{L}$, the phase angle is:",
        options: ["Positive, voltage leads", "Negative, voltage lags", "Zero", "Exactly 90 degrees"],
        answer: 1,
        explanation: "$\\tan\\phi = (X_{L}-X_{C})/R < 0$, so voltage lags current."
      },
      {
        q: "In the impedance triangle the hypotenuse represents:",
        options: ["Resistance", "Net reactance", "Impedance Z", "Admittance"],
        answer: 2,
        explanation: "Adjacent $R$, opposite $X$, hypotenuse $Z$ at angle $\\phi$."
      }
    ]
  },
  {
    sectionId: "young-ch31-s4",
    readingTime: 7,
    intro: "Averages matter more than instants for power: bulbs glow with mean power, bills charge mean energy. Because AC voltage and current swing symmetrically, only their in-phase product survives averaging. The power factor $\\cos\\phi$ measures what fraction of the apparent power actually does work.",
    objectives: [
      "Define rms values and relate them to amplitudes for sinusoids",
      "Compute average power $P_{av} = V_{rms} I_{rms} \\cos\\phi$",
      "Distinguish real, reactive, and apparent power and the role of $\\cos\\phi$"
    ],
    concepts: [
      {
        term: "Root-mean-square values",
        kind: "definition",
        statement: "For a sinusoid, **$V_{rms} = V/\\sqrt{2}$ and $I_{rms} = I/\\sqrt{2}$**, the DC equivalents that deliver the same average power to a resistor.",
        detail: "Household $120$ V is rms; the amplitude is $120\\sqrt{2} = 170$ V. All AC meter readings are rms unless stated otherwise."
      },
      {
        term: "Average power and power factor",
        kind: "law",
        statement: "Average power is **$P_{av} = V_{rms} I_{rms} \\cos\\phi = I_{rms}^{2} R$**, where $\\cos\\phi$ is the power factor.",
        detail: "Only the in-phase component $I\\cos\\phi$ contributes; quadrature current sloshes energy without net delivery."
      },
      {
        term: "Resistor versus pure reactance",
        kind: "theorem",
        statement: "A resistor has $\\phi = 0$ and $P_{av} = I_{rms}^{2}R$, while **a pure inductor or capacitor has $\\phi = \\pm 90^{\\circ}$ and zero average power**.",
        detail: "Energy flows into the field for a quarter cycle and flows back the next; the cycle average vanishes."
      },
      {
        term: "Real, reactive, apparent power",
        kind: "notation",
        statement: "Apparent power $V_{rms}I_{rms}$ (in VA), real power $P$ (in W), and reactive power $Q = V_{rms}I_{rms}\\sin\\phi$ (in VAR) **form a power triangle with $\\cos\\phi = P/S$**.",
        detail: "Utilities penalize low power factor because lines must carry large $S$ to deliver small $P$."
      },
      {
        term: "Power-factor correction",
        kind: "insight",
        statement: "Adding a parallel capacitor can **cancel an inductive lag and raise $\\cos\\phi$ toward unity**, cutting line current without changing delivered power.",
        detail: "Motor-heavy factories install capacitor banks for exactly this reason."
      }
    ],
    examples: [
      {
        title: "Heater power from rms",
        problem: "A $120$ V rms line drives a $15.0$ ohm heater resistor. Find rms current and average power.",
        steps: [
          { label: "Step 1: Current", text: "$I_{rms} = V_{rms}/R = 120/15.0 = 8.00$ A." },
          { label: "Step 2: Power", text: "$P_{av} = V_{rms}I_{rms} = (120)(8.00) = 960$ W, since $\\cos\\phi = 1$." },
          { label: "Step 3: Amplitude check", text: "Amplitudes are $\\sqrt{2}$ larger: $V = 170$ V, $I = 11.3$ A, same product halved gives $960$ W." }
        ],
        result: "$I_{rms} = 8.00$ A and $P_{av} = 960$ W."
      },
      {
        title: "Low power factor penalty",
        problem: "A motor draws $5.00$ A rms at $120$ V rms with $\\phi = 60^{\\circ}$. Find real power and the current a corrected unity-factor load would need for the same power.",
        steps: [
          { label: "Step 1: Real power", text: "$P = V I \\cos\\phi = (120)(5.00)(0.500) = 300$ W." },
          { label: "Step 2: Corrected current", text: "At $\\cos\\phi = 1$, $I = P/V = 300/120 = 2.50$ A." },
          { label: "Step 3: Interpretation", text: "Half the line current delivers the same work after correction; the extra $4.33$ A was reactive." }
        ],
        result: "Real power $300$ W; corrected current only $2.50$ A."
      }
    ],
    keyTakeaways: [
      "Rms values are amplitudes over $\\sqrt{2}$ and plug directly into $P_{av} = V_{rms}I_{rms}\\cos\\phi$.",
      "Pure reactances average zero power; only resistance consumes net energy.",
      "Low power factor wastes line capacity, corrected with compensating capacitors."
    ],
    quiz: [
      {
        q: "A sinusoidal amplitude of 170 V corresponds to rms:",
        options: ["$170$ V", "$120$ V", "$85$ V", "$240$ V"],
        answer: 1,
        explanation: "$V_{rms} = 170/\\sqrt{2} = 120$ V."
      },
      {
        q: "A pure capacitor in AC has average power:",
        options: ["$I_{rms}^{2} X_{C}$", "Zero", "$V_{rms} I_{rms}$", "$V_{rms}^{2}/X_{C}$"],
        answer: 1,
        explanation: "$\\phi = -90^{\\circ}$ so $\\cos\\phi = 0$; energy oscillates without net flow."
      },
      {
        q: "$V_{rms}$ = 120 V, $I_{rms}$ = 2 A, phi = 60 degrees. Average power is:",
        options: ["$240$ W", "$120$ W", "$208$ W", "$480$ W"],
        answer: 1,
        explanation: "$P = (120)(2)\\cos 60^{\\circ} = 240 \\times 0.5 = 120$ W."
      },
      {
        q: "Power-factor correction with a capacitor works because it:",
        options: ["Burns reactive power as heat", "Supplies leading current that cancels inductive lag", "Raises the source voltage", "Lowers the resistance"],
        answer: 1,
        explanation: "Capacitive leading current offsets inductive lagging current, shrinking total line current."
      }
    ]
  },
  {
    sectionId: "young-ch31-s5",
    readingTime: 7,
    intro: "When inductive and capacitive reactances match, the series circuit snaps into resonance: current peaks, impedance bottoms at $R$, and voltages across L and C can dwarf the source. Radio tuners exploit this sharp frequency selectivity every day. Young quantifies the peak with the resonant frequency and Q factor.",
    objectives: [
      "State the series resonance condition $X_{L} = X_{C}$ and derive $\\omega_{0} = 1/\\sqrt{LC}$",
      "Sketch current versus frequency and explain sharpness via $Q$",
      "Compute voltage magnification $V_{L} = V_{C} = QV$ at resonance"
    ],
    concepts: [
      {
        term: "Resonance condition",
        kind: "theorem",
        statement: "Series resonance occurs when **$X_{L} = X_{C}$**, i.e. at $\\omega_{0} = 1/\\sqrt{LC}$ or $f_{0} = 1/(2\\pi\\sqrt{LC})$.",
        detail: "At $\\omega_{0}$ the impedance is minimum, $Z = R$, current is maximum, $I_{0} = V/R$, and voltage and current are in phase."
      },
      {
        term: "Resonance curve",
        kind: "law",
        statement: "Current amplitude follows **$I(\\omega) = V/\\sqrt{R^{2} + (\\omega L - 1/\\omega C)^{2}}$**, a peak centered at $\\omega_{0}$ that narrows as $R$ shrinks.",
        detail: "Far below $\\omega_{0}$ the capacitor chokes current; far above, the inductor does."
      },
      {
        term: "Q factor",
        kind: "definition",
        statement: "The quality factor **$Q = \\omega_{0}L/R = 1/(\\omega_{0}CR)$** measures sharpness: fractional bandwidth $\\Delta\\omega/\\omega_{0} = 1/Q$.",
        detail: "High $Q$ means a tall narrow peak and strong selectivity; low $Q$ is broad and forgiving."
      },
      {
        term: "Voltage magnification",
        kind: "theorem",
        statement: "At resonance **$V_{L} = V_{C} = Q V$**, so element voltages can far exceed the source voltage when $Q \\gg 1$.",
        detail: "The two large voltages are antiparallel and cancel, leaving only $V_{R} = V$ across the resistor."
      },
      {
        term: "Tuning",
        kind: "insight",
        statement: "Varying $C$ (or $L$) slides $\\omega_{0}$ across the band, so **a fixed-frequency signal is selected by tuning the circuit into resonance with it**.",
        detail: "Old radios used a variable capacitor gang; modern receivers synthesize the same selectivity electronically."
      }
    ],
    figures: [
      {
        caption: "Resonance curve: current amplitude $I$ versus $\\omega$ peaking at $\\omega_{0}$ with width set by $R$",
        svg: '<svg viewBox="0 0 400 220" style="width:100%;height:auto" role="img" aria-label="Resonance curve: current amplitude I versus omega peaking at omega_0 with width set by R"><rect x="0" y="0" width="400" height="220" fill="none"/><line x1="40" y1="180" x2="380" y2="180" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="180" x2="40" y2="20" stroke="currentColor" stroke-width="1.5"/><path d="M 40 175 C 120 172, 160 170, 190 90 C 205 50, 225 50, 240 90 C 270 170, 310 172, 380 175" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="215" y1="180" x2="215" y2="55" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/><text x="208" y="198" font-size="13" fill="currentColor">w0</text><text x="12" y="100" font-size="13" fill="currentColor">I</text><text x="300" y="60" font-size="12" fill="currentColor">small R: tall narrow</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Tuning to 1 MHz",
        problem: "A tuner has $L = 200$ microH and $R = 10.0$ ohms. What $C$ resonates at $f_{0} = 1.00$ MHz, and what is $Q$?",
        steps: [
          { label: "Step 1: Resonance formula", text: "$\\omega_{0} = 2\\pi(10^{6}) = 6.283 \\times 10^{6}$ rad/s; $C = 1/(\\omega_{0}^{2}L)$." },
          { label: "Step 2: Capacitance", text: "$C = 1/[(6.283 \\times 10^{6})^{2}(200 \\times 10^{-6})] = 1/(7.895 \\times 10^{9}) = 127$ pF." },
          { label: "Step 3: Q factor", text: "$Q = \\omega_{0}L/R = (6.283 \\times 10^{6})(200 \\times 10^{-6})/10.0 = 126$." }
        ],
        result: "$C = 127$ pF and $Q = 126$, a sharp tuner with bandwidth about $7.9$ kHz."
      },
      {
        title: "Voltage magnification hazard",
        problem: "A series circuit at resonance has $V = 10.0$ V amplitude, $Q = 50.0$. Find the inductor voltage.",
        steps: [
          { label: "Step 1: Apply magnification", text: "$V_{L} = QV = (50.0)(10.0) = 500$ V amplitude." },
          { label: "Step 2: Capacitor voltage", text: "$V_{C} = 500$ V antiparallel, so $V_{L} + V_{C} = 0$ phasorially." },
          { label: "Step 3: Lesson", text: "Components must be rated far above the source voltage in high-Q circuits." }
        ],
        result: "$V_{L} = V_{C} = 500$ V amplitude, fifty times the source."
      }
    ],
    keyTakeaways: [
      "Resonance at $\\omega_{0} = 1/\\sqrt{LC}$ maximizes current and minimizes impedance to $R$.",
      "Sharpness is set by $Q = \\omega_{0}L/R$; bandwidth fraction is $1/Q$.",
      "Element voltages reach $QV$ and cancel, so high Q demands high voltage ratings."
    ],
    quiz: [
      {
        q: "L = 1 mH, C = 1 microF. The resonant frequency $f_{0}$ is about:",
        options: ["$5.03$ kHz", "$1.00$ kHz", "$15.9$ kHz", "$159$ Hz"],
        answer: 0,
        explanation: "$f_{0} = 1/(2\\pi\\sqrt{10^{-3}\\times 10^{-6}}) = 1/(2\\pi\\times 3.16\\times 10^{-5}) = 5.03$ kHz."
      },
      {
        q: "At series resonance the impedance equals:",
        options: ["Zero", "R", "$X_{L}$ + $X_{C}$", "Infinity"],
        answer: 1,
        explanation: "Reactances cancel so $Z = \\sqrt{R^{2}+0} = R$."
      },
      {
        q: "Higher Q means:",
        options: ["Broader, shorter peak", "Taller, narrower peak", "Lower resonant frequency", "More average power in L and C"],
        answer: 1,
        explanation: "Q is peak sharpness; bandwidth $\\Delta\\omega = \\omega_{0}/Q$ shrinks as Q grows."
      }
    ]
  },
  {
    sectionId: "young-ch31-s6",
    readingTime: 6,
    intro: "Transformers move AC power between voltages with almost no loss, which is why the grid transmits at hundreds of kilovolts and delivers at 120 volts. Two coils sharing an iron core link the same flux, so voltage scales with turns. Young closes the chapter with the ideal-transformer relations and their limits.",
    objectives: [
      "Derive the turns-ratio rules $V_{2}/V_{1} = N_{2}/N_{1}$ and $I_{2}/I_{1} = N_{1}/N_{2}$",
      "Explain why transformers work only for AC",
      "Compute step-up and step-down behavior with power conservation"
    ],
    concepts: [
      {
        term: "Ideal transformer",
        kind: "definition",
        statement: "Two coils on a common core share flux $\\Phi_{B}$ so **$V_{2}/V_{1} = N_{2}/N_{1}$** by Faraday's law applied to each coil.",
        detail: "Step-up means $N_{2} > N_{1}$; step-down means $N_{2} < N_{1}$. The core guides essentially all flux through both windings."
      },
      {
        term: "Current ratio",
        kind: "theorem",
        statement: "For an ideal transformer **$I_{2}/I_{1} = N_{1}/N_{2}$**, so power in equals power out: $V_{1}I_{1} = V_{2}I_{2}$.",
        detail: "Raising voltage by ten cuts current by ten; transmission heating $I^{2}R$ falls by one hundred."
      },
      {
        term: "AC only",
        kind: "law",
        statement: "Transformers require **changing flux**, so they work for AC and transients but not steady DC.",
        detail: "Constant DC current gives constant flux and zero induced emf in the secondary."
      },
      {
        term: "Real losses",
        kind: "insight",
        statement: "Real cores suffer **eddy currents, hysteresis, winding resistance, and leakage flux**, holding large transformers near but below 100 percent efficiency.",
        detail: "Laminated cores, soft iron, and tight winding suppress the first three; leakage is minimized by interleaving coils."
      },
      {
        term: "Why the grid is AC",
        kind: "insight",
        statement: "Because transformers make high-voltage transmission cheap, **AC won the war of the currents**: generate at kilovolts, transmit at hundreds of kilovolts, use at $120$ V.",
        detail: "Without the transformer there would be no economical long-distance grid."
      }
    ],
    examples: [
      {
        title: "Phone charger step-down",
        problem: "A charger primary has $N_{1} = 600$ turns at $120$ V rms; the secondary needs $6.00$ V rms. Find $N_{2}$ and the secondary current when the primary draws $0.100$ A rms ideally.",
        steps: [
          { label: "Step 1: Turns", text: "$N_{2} = N_{1}(V_{2}/V_{1}) = 600(6.00/120) = 30$ turns." },
          { label: "Step 2: Current", text: "$I_{2} = I_{1}(N_{1}/N_{2}) = 0.100(600/30) = 2.00$ A." },
          { label: "Step 3: Power check", text: "$V_{1}I_{1} = 12.0$ W and $V_{2}I_{2} = 12.0$ W, conserving power." }
        ],
        result: "$N_{2} = 30$ turns delivering $2.00$ A at $6.00$ V."
      },
      {
        title: "Transmission savings",
        problem: "A plant must deliver $1.00$ MW over a line of $10.0$ ohms at $10.0$ kV versus $200$ kV. Compare heating loss.",
        steps: [
          { label: "Step 1: Currents", text: "$I = P/V$: $100$ A at $10$ kV; $5.00$ A at $200$ kV." },
          { label: "Step 2: Losses", text: "$I^{2}R$: $10^{4} \\times 10.0 = 100$ kW versus $25.0 \\times 10.0 = 250$ W." },
          { label: "Step 3: Ratio", text: "Stepping up by $20$ cuts loss by $400$, from $10$ percent to $0.025$ percent." }
        ],
        result: "Loss falls from $100$ kW to $250$ W by transmitting at $200$ kV."
      }
    ],
    keyTakeaways: [
      "Voltage scales with turns $V_{2}/V_{1} = N_{2}/N_{1}$; current scales inversely.",
      "Ideal transformers conserve power; real ones lose a few percent to core and copper.",
      "Transformers need changing flux, so they are AC devices that enable the grid."
    ],
    quiz: [
      {
        q: "A transformer has N1 = 100, N2 = 1000, V1 = 12 V rms. V2 is:",
        options: ["$1.2$ V", "$12$ V", "$120$ V", "$1200$ V"],
        answer: 2,
        explanation: "$V_{2} = 12 \\times 1000/100 = 120$ V step-up."
      },
      {
        q: "Why do transformers not work on steady DC?",
        options: ["Resistance is infinite", "No changing flux means no induced emf", "Core saturates instantly to zero", "Frequency is too high"],
        answer: 1,
        explanation: "Faraday induction needs $d\\Phi_{B}/dt$; steady DC gives none in the secondary."
      },
      {
        q: "An ideal 10:1 step-down transformer feeds a load drawing 5 A. Primary current is:",
        options: ["$50$ A", "$5$ A", "$0.5$ A", "$0.05$ A"],
        answer: 2,
        explanation: "Current ratio inverts: $I_{1} = I_{2}/10 = 0.5$ A."
      }
    ]
  }
];
