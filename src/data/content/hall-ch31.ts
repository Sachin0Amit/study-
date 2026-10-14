import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 31
// Electromagnetic Oscillations and Alternating Current — sections 31-1 … 31-6
// (ids hall-ch31-s1 … hall-ch31-s6, verbatim from library-parts/halliday.ts)
// Notation: ω is the natural angular frequency; ωd is the driving one (HRW).
// ============================================================================

export const hallCh31Content: SectionContent[] = [
  // ------------------------------------------------------------------ 31-1
  {
    sectionId: 'hall-ch31-s1',
    readingTime: 7,
    intro: "Charge a capacitor, connect it to an inductor, and let go: the charge sloshes back and forth at a rate fixed by nothing but $L$ and $C$. The circuit is the electrical twin of a mass on a spring — the same cosine, the same energy trade, and a frequency you dial with components.",
    objectives: [
      "Derive the LC oscillation equation from the loop rule and identify $\\omega = 1/\\sqrt{LC}$",
      "Write $q(t)$ and $i(t)$ for a charged-capacitor start and find the peak current",
      "Track the exchange between capacitor energy $q^2/2C$ and inductor energy $\\frac12 Li^2$",
    ],
    concepts: [
      {
        term: 'Loop rule to simple harmonic motion',
        kind: 'method',
        statement: "**Kirchhoff's loop rule around an ideal LC circuit reads** $$L\\frac{di}{dt} + \\frac{q}{C} = 0,\\qquad i = \\frac{dq}{dt} \\;\\Rightarrow\\; \\frac{d^2q}{dt^2} + \\frac{1}{LC}\\,q = 0.$$ **It is the simple-harmonic equation with $\\omega = 1/\\sqrt{LC}$.**",
        detail: "Signs: as the capacitor discharges, the charge $q$ on the plates decreases while the current grows — $i = dq/dt$ with the sign convention fixed by which plate you label positive. The oscillation frequency $f = \\omega/2\\pi$ depends on neither the charge nor the current: it is a property of the circuit, like a bell's pitch.",
      },
      {
        term: 'Charge and current solutions',
        kind: 'theorem',
        statement: "**With the capacitor fully charged at $t = 0$ (charge $Q$):** $$q = Q\\cos\\omega t, \\qquad i = -\\omega Q \\sin\\omega t.$$ **The current peaks a quarter cycle after the charge, with $I = \\omega Q$.**",
        detail: "The charge is zero exactly when the current is maximum, and vice versa — they trade extremes every quarter period $T/4 = \\pi\\sqrt{LC}/2$.",
      },
      {
        term: 'Energy sloshes',
        kind: 'insight',
        statement: "**Capacitor energy $U_E = q^2/2C$ and inductor energy $U_B = \\frac12 Li^2$ trade places every quarter cycle while their sum stays exactly** $$U = \\frac{Q^2}{2C} = \\frac12 LI^2.$$",
        detail: "Nothing is dissipated: ideal L and C only exchange energy, storing it first as electric field between the plates, then as magnetic field around the coil.",
      },
      {
        term: 'The mass–spring dictionary',
        kind: 'insight',
        statement: "**$q \\leftrightarrow x$, $i \\leftrightarrow v$, $1/C \\leftrightarrow k$, $L \\leftrightarrow m$**: every result of mechanical oscillations translates by direct substitution, including damping once a resistor joins (next section).**",
        detail: "The analogy explains why heavy coils (large $L$) oscillate slowly and stiff capacitors (small $C$, large $1/C$) oscillate fast — inertia against restoring force.",
      },
      {
        term: "LC Oscillations: solution protocol",
        kind: "method",
        statement: "**Solve LC Oscillations problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is $LC$/$RLC$ resonance and AC power; the working equation is $\\omega_0 = 1/\\sqrt{LC}$, $X_L = \\omega L$, $X_C = 1/\\omega C$, $Z = \\sqrt{R^2+(X_L-X_C)^2}$; every substitution must carry its units so the final unit (ohms, hertz, phase angle) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$; sinusoidal steady state for phasors; peak $I$ at $\\omega_d = \\omega_0$.",
      },
    ],
    figures: [
      {
        caption: "One full cycle of an ideal LC circuit. The capacitor starts fully charged (t = 0); a quarter cycle later the plates are neutral and the current through the inductor is maximum (t = T/4); at t = T/2 the capacitor is charged the opposite way. The bar pairs show the energy trading places between $U^2$-form storage while the total $Q^2/2C$ never changes.",
        svg: `<svg viewBox="0 0 720 350" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four snapshots of an LC circuit through one cycle with bar charts of capacitor and inductor energy"><defs><marker id="lcA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><text x="90" y="34" text-anchor="middle" font-size="16" fill="currentColor">t = 0</text><text x="270" y="34" text-anchor="middle" font-size="16" fill="currentColor">t = T/4</text><text x="450" y="34" text-anchor="middle" font-size="16" fill="currentColor">t = T/2</text><text x="630" y="34" text-anchor="middle" font-size="16" fill="currentColor">t = 3T/4</text><text x="180" y="34" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.7">→</text><text x="360" y="34" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.7">→</text><text x="540" y="34" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.7">→</text><line x1="35" y1="62" x2="35" y2="150" stroke="currentColor" stroke-width="2.5"/><line x1="145" y1="62" x2="145" y2="150" stroke="currentColor" stroke-width="2.5"/><line x1="35" y1="62" x2="82" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="98" y1="62" x2="145" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="82" y1="48" x2="82" y2="76" stroke="currentColor" stroke-width="3.5"/><line x1="98" y1="48" x2="98" y2="76" stroke="currentColor" stroke-width="3.5"/><line x1="35" y1="150" x2="68" y2="150" stroke="currentColor" stroke-width="2.5"/><path d="M 68 150 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="112" y1="150" x2="145" y2="150" stroke="currentColor" stroke-width="2.5"/><text x="82" y="40" text-anchor="middle" font-size="15" fill="currentColor">+</text><text x="98" y="40" text-anchor="middle" font-size="15" fill="currentColor">−</text><text x="90" y="105" text-anchor="middle" font-size="14" fill="currentColor">i = 0</text><line x1="215" y1="62" x2="325" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="215" y1="62" x2="262" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="278" y1="62" x2="325" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="262" y1="48" x2="262" y2="76" stroke="currentColor" stroke-width="3.5"/><line x1="278" y1="48" x2="278" y2="76" stroke="currentColor" stroke-width="3.5"/><line x1="215" y1="150" x2="248" y2="150" stroke="currentColor" stroke-width="2.5"/><path d="M 248 150 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="292" y1="150" x2="325" y2="150" stroke="currentColor" stroke-width="2.5"/><text x="270" y="40" text-anchor="middle" font-size="13" fill="currentColor">q = 0</text><text x="270" y="105" text-anchor="middle" font-size="14" fill="currentColor">i = Imax</text><line x1="325" y1="142" x2="325" y2="84" stroke="currentColor" stroke-width="2.5" marker-end="url(#lcA)"/><line x1="395" y1="62" x2="505" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="395" y1="62" x2="442" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="458" y1="62" x2="505" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="442" y1="48" x2="442" y2="76" stroke="currentColor" stroke-width="3.5"/><line x1="458" y1="48" x2="458" y2="76" stroke="currentColor" stroke-width="3.5"/><line x1="395" y1="150" x2="428" y2="150" stroke="currentColor" stroke-width="2.5"/><path d="M 428 150 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="472" y1="150" x2="505" y2="150" stroke="currentColor" stroke-width="2.5"/><text x="442" y="40" text-anchor="middle" font-size="15" fill="currentColor">−</text><text x="458" y="40" text-anchor="middle" font-size="15" fill="currentColor">+</text><text x="450" y="105" text-anchor="middle" font-size="14" fill="currentColor">i = 0</text><line x1="575" y1="62" x2="685" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="575" y1="62" x2="622" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="638" y1="62" x2="685" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="622" y1="48" x2="622" y2="76" stroke="currentColor" stroke-width="3.5"/><line x1="638" y1="48" x2="638" y2="76" stroke="currentColor" stroke-width="3.5"/><line x1="575" y1="150" x2="608" y2="150" stroke="currentColor" stroke-width="2.5"/><path d="M 608 150 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0 a 5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="652" y1="150" x2="685" y2="150" stroke="currentColor" stroke-width="2.5"/><text x="630" y="40" text-anchor="middle" font-size="13" fill="currentColor">q = 0</text><text x="630" y="105" text-anchor="middle" font-size="14" fill="currentColor">i = −Imax</text><line x1="685" y1="84" x2="685" y2="142" stroke="currentColor" stroke-width="2.5" marker-end="url(#lcA)"/><line x1="40" y1="262" x2="140" y2="262" stroke="currentColor" stroke-width="1.5"/><rect x="52" y="210" width="24" height="52" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><rect x="104" y="260" width="24" height="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="220" y1="262" x2="320" y2="262" stroke="currentColor" stroke-width="1.5"/><rect x="232" y="260" width="24" height="2" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><rect x="284" y="210" width="24" height="52" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="400" y1="262" x2="500" y2="262" stroke="currentColor" stroke-width="1.5"/><rect x="412" y="210" width="24" height="52" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><rect x="464" y="260" width="24" height="2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><line x1="580" y1="262" x2="680" y2="262" stroke="currentColor" stroke-width="1.5"/><rect x="592" y="260" width="24" height="2" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/><rect x="644" y="210" width="24" height="52" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="64" y="280" text-anchor="middle" font-size="12.5" fill="currentColor">Uᴱ</text><text x="116" y="280" text-anchor="middle" font-size="12.5" fill="currentColor">Uᴮ</text><text x="244" y="280" text-anchor="middle" font-size="12.5" fill="currentColor">Uᴱ</text><text x="296" y="280" text-anchor="middle" font-size="12.5" fill="currentColor">Uᴮ</text><text x="424" y="280" text-anchor="middle" font-size="12.5" fill="currentColor">Uᴱ</text><text x="476" y="280" text-anchor="middle" font-size="12.5" fill="currentColor">Uᴮ</text><text x="604" y="280" text-anchor="middle" font-size="12.5" fill="currentColor">Uᴱ</text><text x="656" y="280" text-anchor="middle" font-size="12.5" fill="currentColor">Uᴮ</text><text x="360" y="332" text-anchor="middle" font-size="14" fill="currentColor">dark bars: capacitor energy q²/2C · light bars: inductor energy ½Li² — their sum Q²/2C never changes (ideal LC)</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'A 1.6 kHz tank circuit',
        problem: "An LC circuit has $L = 5.0$ mH and $C = 2.0\\ \\mu$F, with the capacitor initially charged to $Q = 6.0\\ \\mu$C. Find the oscillation frequency, period, peak current, and total energy; verify the energy bookkeeping.",
        steps: [
          { label: 'Frequency', text: '$\\omega = 1/\\sqrt{LC} = 1/\\sqrt{10^{-8}} = 1.0\\times10^{4}$ rad/s, so $f = \\omega/2\\pi = 1592$ Hz ≈ 1.6 kHz and $T = 628\\ \\mu$s.' },
          { label: 'Peak current', text: '$I = \\omega Q = (10^4)(6.0\\times10^{-6}) = 6.0\\times10^{-2}$ A = 60 mA, occurring when $q = 0$.' },
          { label: 'Total energy', text: '$U = Q^2/2C = (6.0\\times10^{-6})^2/(2\\times 2.0\\times10^{-6}) = 9.0\\ \\mu$J.' },
          { label: 'Check', text: 'All-magnetic instant: $\\frac12 LI^2 = \\frac12(0.0050)(0.060)^2 = 9.0\\ \\mu$J — the same inventory, in the other form.' },
        ],
        result: 'The charge swings as $q = 6.0\\cos(10^4 t)\\ \\mu$C at 1.6 kHz, with current peaking at 60 mA and a constant 9.0 μJ total energy.',
      },
      {
        title: "LC Oscillations: resonance check",
        problem: "An $LC$ circuit has $L = 10\\ \\text{mH}$, $C = 3\\ \\mu\\text{F}$. Find $f_0 = 1/2\\pi\\sqrt{LC}$.",
        steps: [
          { label: "Product", text: "$LC = 10^{-2}\\times 3\\times 10^{-6} = 3.00\\times 10^{-8}$." },
          { label: "Root", text: "$\\sqrt{LC} = 1.73\\times 10^{-4}\\ \\text{s}$." },
          { label: "Frequency", text: "$f_0 \\approx 919\\ \\text{Hz}$." },
        ],
        result: "$f_0 \\approx 919\\ \\text{Hz}$.",
      },
    ],
    keyTakeaways: [
      'Loop rule gives $d^2q/dt^2 + q/LC = 0$: SHM with $\\omega = 1/\\sqrt{LC}$, independent of amplitude.',
      '$q = Q\\cos\\omega t$, $i = -\\omega Q\\sin\\omega t$: charge and current stay a quarter cycle apart.',
      'Energy sloshes between $q^2/2C$ and $\\frac12 Li^2$; the total $Q^2/2C$ is conserved.',
    ],
    quiz: [
      {
        q: 'Quadrupling the capacitance of an LC circuit changes the oscillation frequency to:',
        options: ['Half', 'Twice', 'One quarter', 'No change'],
        answer: 0,
        explanation: '$f = (1/2\\pi)\\sqrt{1/LC}$ falls as $1/\\sqrt{C}$.',
      },
      {
        q: 'The current in an ideal LC circuit is maximum when:',
        options: ['$q = Q$ (capacitor fully charged)', `$q = 0$`, 'The two stored energies are equal', 'Never — it is constant'],
        answer: 1,
        explanation: 'All the energy has moved into the inductor exactly as the charge passes through zero.',
      },
      {
        q: 'With $L = 2.0$ mH and $C = 8.0\\ \\mu$F, the angular frequency is about:',
        options: ['$2.5\\times10^{3}$ rad/s', '$7.9\\times10^{3}$ rad/s', '$1.6\\times10^{4}$ rad/s', '250 rad/s'],
        answer: 1,
        explanation: '$\\omega = 1/\\sqrt{(2.0\\times10^{-3})(8.0\\times10^{-6})} = 1/\\sqrt{1.6\\times10^{-8}} \\approx 7.9\\times10^3$ rad/s.',
      },
      {
        q: 'The total energy of an ideal LC circuit:',
        options: ['Is constant, equal to $Q^2/2C$', 'Oscillates in step with the charge', 'Is constant only at resonance', 'Decays exponentially'],
        answer: 0,
        explanation: 'Ideal elements only trade the energy back and forth; the sum $Q^2/2C = \\frac12 LI^2$ never changes.',
      },
    ],
  },
  // ------------------------------------------------------------------ 31-2
  {
    sectionId: 'hall-ch31-s2',
    readingTime: 5,
    intro: "Real coils have resistance, and resistance is friction for charge: the LC oscillation persists but its amplitude decays inside the envelope $e^{-Rt/2L}$. Make R large enough and the circuit never completes a single cycle — critical damping, the electrical equivalent of a door closer that never slams.",
    objectives: [
      "Write the damped RLC equation and its solution $q = Qe^{-Rt/2L}\\cos(\\omega_d t + \\phi)$",
      "Compute the damped frequency $\\omega_d$ and the envelope time constant $2L/R$",
      "Find the critical resistance $2\\sqrt{L/C}$ and interpret the three damping regimes",
    ],
    concepts: [
      {
        term: 'Damped RLC equation',
        kind: 'law',
        statement: "**The loop rule with all three elements in series reads** $$L\\frac{d^2q}{dt^2} + R\\frac{dq}{dt} + \\frac{q}{C} = 0,$$ **the damped-oscillator equation — resistance plays the role of the friction constant.**",
        detail: "Energy accounting: $d(q^2/2C)/dt = -i^2R + d(\\frac12 Li^2)/dt$ sign-flipped — each cycle, Joule heat skims off a slice of the field energy.",
      },
      {
        term: 'Underdamped solution',
        kind: 'theorem',
        statement: "**For $R < 2\\sqrt{L/C}$,** $$q = Q e^{-Rt/2L}\\cos(\\omega_d t + \\phi), \\qquad \\omega_d = \\sqrt{\\frac{1}{LC} - \\left(\\frac{R}{2L}\\right)^2}.$$ **The envelope decays with time constant $\\tau = 2L/R$.**",
        detail: "Light damping barely shifts the frequency ($\\omega_d \\approx \\omega$ when $R \\ll 2\\sqrt{L/C}$) but steadily drains the amplitude: after one envelope time constant, each swing is down to 37% of its start.",
      },
      {
        term: 'Critical damping',
        kind: 'insight',
        statement: "**At $R = 2\\sqrt{L/C}$ the oscillation dies out in the fastest non-oscillatory way; beyond that (overdamped) the charge merely creeps to zero.**",
        detail: "Designers of capacitor-discharge circuits and waveform shapers pick near-critical R on purpose: discharge quickly without ringing the voltage negative.",
      },
      {
        term: "Damped Oscillations in an RLC Circuit: solution protocol",
        kind: "method",
        statement: "**Solve Damped Oscillations in an RLC Circuit problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is $LC$/$RLC$ resonance and AC power; the working equation is $\\omega_0 = 1/\\sqrt{LC}$, $X_L = \\omega L$, $X_C = 1/\\omega C$, $Z = \\sqrt{R^2+(X_L-X_C)^2}$; every substitution must carry its units so the final unit (ohms, hertz, phase angle) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$; sinusoidal steady state for phasors; peak $I$ at $\\omega_d = \\omega_0$.",
      },
      {
        term: "Damped Oscillations in an RLC Circuit: scales and validity",
        kind: "insight",
        statement: "**Damped Oscillations in an RLC Circuit lives at $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$ and the textbook model holds while sinusoidal steady state for phasors; peak $I$ at $\\omega_d = \\omega_0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Damped Oscillations in an RLC Circuit calculation gives seconds when ohms, hertz, phase angle demands meters, or a value orders of magnitude beyond $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Adding friction to the tank circuit',
        problem: "The tank of section 31-1 ($L = 5.0$ mH, $C = 2.0\\ \\mu$F, so $1/LC = 10^{8}\\ \\mathrm{s^{-2}}$) is wired through $R = 2.0$ Ω. Find the envelope time constant, the damped frequency, and how many cycles fit in one time constant; compare R with the critical value.",
        steps: [
          { label: 'Envelope', text: '$R/2L = 2.0/0.010 = 200\\ \\mathrm{s^{-1}}$, so the envelope time constant is $\\tau = 2L/R = 5.0$ ms.' },
          { label: 'Damped frequency', text: '$\\omega_d = \\sqrt{10^8 - 4\\times10^4} = 9998$ rad/s versus the undamped $10^4$ — a 0.02% shift.' },
          { label: 'Cycles per τ', text: '$T_d = 2\\pi/9998 = 628.6\\ \\mu$s, so one envelope time constant spans $5000/628.6 \\approx 8$ periods.' },
          { label: 'Regime', text: 'Critical resistance is $2\\sqrt{L/C} = 2\\sqrt{2500} = 100$ Ω; at 2.0 Ω the circuit is lightly damped — it rings freely for dozens of cycles, each 37%... each envelope constant down to 37%.' },
        ],
        result: 'A 5.0 ms envelope around an almost unchanged 1.6 kHz oscillation; with $R_c = 100$ Ω, the 2.0 Ω coil is far in the underdamped regime.',
      },
      {
        title: "Damped Oscillations in an RLC Circuit: resonance check",
        problem: "An $LC$ circuit has $L = 10\\ \\text{mH}$, $C = 1\\ \\mu\\text{F}$. Find $f_0 = 1/2\\pi\\sqrt{LC}$.",
        steps: [
          { label: "Product", text: "$LC = 10^{-2}\\times 1\\times 10^{-6} = 1.00\\times 10^{-8}$." },
          { label: "Root", text: "$\\sqrt{LC} = 1.00\\times 10^{-4}\\ \\text{s}$." },
          { label: "Frequency", text: "$f_0 \\approx 1590\\ \\text{Hz}$." },
        ],
        result: "$f_0 \\approx 1590\\ \\text{Hz}$.",
      },
    ],
    keyTakeaways: [
      '$L\\,d^2q/dt^2 + R\\,dq/dt + q/C = 0$: resistance is the friction of the electrical oscillator.',
      'Underdamped: $q = Qe^{-Rt/2L}\\cos(\\omega_d t + \\phi)$ with $\\omega_d = \\sqrt{1/LC - (R/2L)^2}$.',
      'Critical damping at $R = 2\\sqrt{L/C}$ separates ringing from creeping; energy lost per cycle goes to Joule heat.',
    ],
    quiz: [
      {
        q: 'The envelope of the damped RLC charge decays as:',
        options: [`$e^{-Rt/L}$`, `$e^{-t/RC}$`, `$e^{-Rt/2L}$`, `$e^{-2Lt/R}$`],
        answer: 2,
        explanation: 'The amplitude factor is $Q e^{-Rt/2L}$, giving an envelope time constant of $2L/R$.',
      },
      {
        q: 'The critical resistance of an RLC circuit with $L = 5.0$ mH and $C = 2.0\\ \\mu$F is:',
        options: ['50 Ω', '100 Ω', '200 Ω', '10 Ω'],
        answer: 1,
        explanation: '$R_c = 2\\sqrt{L/C} = 2\\sqrt{2500} = 100$ Ω.',
      },
      {
        q: 'Increasing R while staying below critical makes the damped frequency:',
        options: ['Higher', 'Lower', 'Unchanged', 'Infinite'],
        answer: 1,
        explanation: '$\\omega_d = \\sqrt{1/LC - (R/2L)^2}$ shrinks as R grows.',
      },
      {
        q: 'In a damped RLC circuit, the energy lost each cycle goes to:',
        options: ['Joule heat in R', 'Re-radiation from the capacitor', 'Extra charge on the plates', 'Nothing — energy is conserved in the loop'],
        answer: 0,
        explanation: 'The resistor dissipates the field energy as heat, exactly as friction bleeds a mechanical oscillator.',
      },
    ],
  },
  // ------------------------------------------------------------------ 31-3
  {
    sectionId: 'hall-ch31-s3',
    readingTime: 6,
    intro: "Drive a circuit with a sinusoidal emf and, after the transients die away, every current and voltage oscillates at the driving frequency — but not in step with the drive. A resistor answers in phase, a capacitor answers early, an inductor answers late: quarter-cycle leads and lags that are the whole alphabet of AC analysis.",
    objectives: [
      "Write the steady-state response of purely resistive, capacitive, and inductive loads to $\\mathcal{E} = \\mathcal{E}_m\\sin\\omega t$",
      "Define and compute the reactances $X_C = 1/\\omega C$ and $X_L = \\omega L$",
      "State the quarter-cycle phase leads and lags and their directions",
    ],
    concepts: [
      {
        term: 'Driven steady state',
        kind: 'definition',
        statement: "**An alternating source $\\mathcal{E} = \\mathcal{E}_m\\sin\\omega t$ eventually establishes a steady state in which every current and voltage oscillates at the driving frequency alone.**",
        detail: "The circuit's natural ringing (sections 31-1 and 31-2) dies out at the damping rate; only the driven response survives. HRW writes the drive with the angular frequency $\\omega_d$ to distinguish it from the natural $\\omega$.",
      },
      {
        term: 'Resistive load',
        kind: 'theorem',
        statement: "**A pure resistance responds in phase:** $$i = \\frac{\\mathcal{E}_m}{R}\\sin\\omega t, \\qquad \\mathcal{E}_m = i_m R.$$**",
        detail: "Plain Ohm's law, instant by instant: current peaks when the emf peaks, crosses zero when it crosses zero.",
      },
      {
        term: 'Capacitive load',
        kind: 'theorem',
        statement: "**A pure capacitance draws current that leads the emf by a quarter cycle (90°):** $$X_C = \\frac{1}{\\omega C}, \\qquad i = \\omega C\\,\\mathcal{E}_m \\sin\\left(\\omega t + \\frac{\\pi}{2}\\right).$$ **$X_C$ is the capacitive reactance, in ohms.**",
        detail: "Derivation: the capacitor voltage $q/C$ must track the source, $(1/C)\\int i\\,dt = \\mathcal{E}_m\\sin\\omega t$; differentiating gives $i = \\omega C\\mathcal{E}_m\\cos\\omega t$. A capacitor passes fast wiggles ($X_C \\to 0$ as $\\omega \\to \\infty$) and blocks DC ($X_C \\to \\infty$).",
      },
      {
        term: 'Inductive load',
        kind: 'theorem',
        statement: "**A pure inductance draws current that lags the emf by a quarter cycle (90°):** $$X_L = \\omega L, \\qquad i = \\frac{\\mathcal{E}_m}{X_L}\\sin\\left(\\omega t - \\frac{\\pi}{2}\\right).$$ **$X_L$ is the inductive reactance, in ohms.**",
        detail: "Derivation: the loop rule gives $L\\,di/dt = \\mathcal{E}_m\\sin\\omega t$, so $i = -(\\mathcal{E}_m/\\omega L)\\cos\\omega t$. An inductor chokes fast wiggles ($X_L \\to \\infty$) and passes steady current freely.",
      },
      {
        term: "Forced Oscillations of Three Simple Circuits: solution protocol",
        kind: "method",
        statement: "**Solve Forced Oscillations of Three Simple Circuits problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is $LC$/$RLC$ resonance and AC power; the working equation is $\\omega_0 = 1/\\sqrt{LC}$, $X_L = \\omega L$, $X_C = 1/\\omega C$, $Z = \\sqrt{R^2+(X_L-X_C)^2}$; every substitution must carry its units so the final unit (ohms, hertz, phase angle) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$; sinusoidal steady state for phasors; peak $I$ at $\\omega_d = \\omega_0$.",
      },
    ],
    examples: [
      {
        title: 'One generator, three loads',
        problem: "An AC source with $\\mathcal{E}_m = 30$ V runs at $\\omega = 500$ rad/s. Find the peak current and phase relation when the load is (a) $R = 100$ Ω, (b) $C = 20\\ \\mu$F, (c) $L = 0.20$ H.",
        steps: [
          { label: 'Resistive', text: '$i_m = \\mathcal{E}_m/R = 30/100 = 0.30$ A, exactly in phase with the emf.' },
          { label: 'Capacitive', text: '$X_C = 1/\\omega C = 1/[(500)(20\\times10^{-6})] = 100$ Ω, so $i_m = 0.30$ A leading the emf by 90°.' },
          { label: 'Inductive', text: '$X_L = \\omega L = (500)(0.20) = 100$ Ω, so $i_m = 0.30$ A lagging the emf by 90°.' },
          { label: 'Foreshadow', text: 'The L and C chosen satisfy $\\omega = 1/\\sqrt{LC} = 500$ rad/s — resonant. When all three go in series at this frequency, their reactances cancel (next section).' },
        ],
        result: 'All three loads draw 0.30 A peak, but the resistor answers in step, the capacitor a quarter cycle early, and the inductor a quarter cycle late.',
      },
      {
        title: "Forced Oscillations of Three Simple Circuits: resonance check",
        problem: "An $LC$ circuit has $L = 10\\ \\text{mH}$, $C = 2\\ \\mu\\text{F}$. Find $f_0 = 1/2\\pi\\sqrt{LC}$.",
        steps: [
          { label: "Product", text: "$LC = 10^{-2}\\times 2\\times 10^{-6} = 2.00\\times 10^{-8}$." },
          { label: "Root", text: "$\\sqrt{LC} = 1.41\\times 10^{-4}\\ \\text{s}$." },
          { label: "Frequency", text: "$f_0 \\approx 1130\\ \\text{Hz}$." },
        ],
        result: "$f_0 \\approx 1130\\ \\text{Hz}$.",
      },
    ],
    keyTakeaways: [
      'Resistor: $i = (\\mathcal{E}_m/R)\\sin\\omega t$ — in phase; reactance is just $R$.',
      'Capacitor: $X_C = 1/\\omega C$, current leads by 90°; inductor: $X_L = \\omega L$, current lags by 90°.',
      'Reactances are frequency-sorting: capacitors pass highs, inductors pass lows, both measured in ohms.',
    ],
    quiz: [
      {
        q: 'Doubling the driving frequency halves:',
        options: [`$X_L$`, `$X_C$`, 'Both', 'Neither'],
        answer: 1,
        explanation: '$X_C = 1/\\omega C$ halves while $X_L = \\omega L$ doubles.',
      },
      {
        q: 'In a purely capacitive AC load, the current:',
        options: ['Leads the emf by 90°', 'Lags the emf by 90°', 'Is in phase with the emf', 'Is zero on average'],
        answer: 0,
        explanation: 'The current must charge the capacitor ahead of the voltage: $i$ peaks a quarter cycle before $\\mathcal{E}$.',
      },
      {
        q: 'For $L = 0.20$ H at $\\omega = 500$ rad/s, the inductive reactance is:',
        options: ['100 Ω', '2.5 Ω', '0.10 Ω', '1000 Ω'],
        answer: 0,
        explanation: '$X_L = \\omega L = (500)(0.20) = 100$ Ω.',
      },
      {
        q: 'As $\\omega \\to \\infty$, the reactance of a capacitor:',
        options: ['Grows without bound', 'Approaches $1/C$', 'Approaches zero', 'Stays constant'],
        answer: 2,
        explanation: '$X_C = 1/\\omega C$ vanishes at high frequency — capacitors pass fast wiggles.',
      },
    ],
  },
  // ------------------------------------------------------------------ 31-4
  {
    sectionId: 'hall-ch31-s4',
    readingTime: 8,
    intro: "Put all three elements in series with the alternating source and the pieces assemble: the current is common, the resistor voltage rides in phase, the inductor voltage leads, the capacitor voltage lags — and the source must supply only their vector sum. The geometry of that sum is a right triangle whose hypotenuse is impedance, and whose balance point is resonance.",
    objectives: [
      "Construct the phasor diagram for a series RLC circuit and read off the phase constant",
      "Compute $Z$, $I$, and $\\tan\\phi$ from $R$, $X_L$, and $X_C$",
      "Find the resonant frequency and describe the response above and below it",
    ],
    concepts: [
      {
        term: 'Phasors',
        kind: 'method',
        statement: "**Represent each sinusoid as a vector (phasor) rotating counterclockwise at the driving frequency; the projection onto the vertical axis is the instantaneous value. In a series circuit the current is common, so its phasor sets the reference direction.**",
        detail: "Because all phasors rotate together, relative angles are fixed — freeze the picture at any instant and add the voltages as vectors.",
      },
      {
        term: 'Impedance and phase',
        kind: 'theorem',
        statement: "**For a series RLC circuit driven at angular frequency $\\omega$:** $$I = \\frac{\\mathcal{E}_m}{Z}, \\qquad Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\qquad \\tan\\phi = \\frac{X_L - X_C}{R},$$ **with $i = I\\sin(\\omega t - \\phi)$ — the current lags the emf when $\\phi > 0$.**",
        detail: "Phasor bookkeeping: $V_R = IR$ lies along the current; $V_L = IX_L$ leads it by 90°; $V_C = IX_C$ lags by 90°. The source phasor is their vector sum, of length $\\mathcal{E}_m = IZ$ and angle $\\phi$ ahead of the current.",
      },
      {
        term: 'Resonance',
        kind: 'theorem',
        statement: "**At the resonant frequency** $$\\omega = \\frac{1}{\\sqrt{LC}}$$ **the reactances cancel: $Z = R$, $I = \\mathcal{E}_m/R$, and $\\phi = 0$ — maximum current, perfectly in step with the source.**",
        detail: "Below resonance $X_C > X_L$ and the circuit is capacitive (current leads); above it, inductive (current lags). Resonance is how a radio tuner plucks one station's frequency out of the antenna's noise.",
      },
      {
        term: 'Voltage magnification',
        kind: 'insight',
        statement: "**At resonance, $V_L$ and $V_C$ can each far exceed the source voltage — they simply cancel each other between the element pairs.**",
        detail: "With $Q_\\text{fac} = X_L/R$, the inductor voltage is $Q_\\text{fac}$ times the source emf. A tiny antenna signal at resonance can develop volts across the inductor — amplification without any transistor.",
      },
      {
        term: "The Series RLC Circuit: solution protocol",
        kind: "method",
        statement: "**Solve The Series RLC Circuit problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is $LC$/$RLC$ resonance and AC power; the working equation is $\\omega_0 = 1/\\sqrt{LC}$, $X_L = \\omega L$, $X_C = 1/\\omega C$, $Z = \\sqrt{R^2+(X_L-X_C)^2}$; every substitution must carry its units so the final unit (ohms, hertz, phase angle) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$; sinusoidal steady state for phasors; peak $I$ at $\\omega_d = \\omega_0$.",
      },
    ],
    figures: [
      {
        caption: "Phasor diagram for a series RLC circuit with $X_L > X_C$ ($V_C$ drawn slightly offset for clarity). $V_R = IR$ rides with the current phasor, $V_L = IX_L$ leads it by 90°, $V_C = IX_C$ lags by 90°, and the source phasor $\\mathcal{E}_m = IZ$ closes the triangle at angle $\\phi$ ahead of the current. The impedance triangle at right carries the same information.",
        svg: `<svg viewBox="0 0 720 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Phasor diagram for a series RLC circuit and the matching impedance triangle"><defs><marker id="phA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><text x="300" y="22" text-anchor="middle" font-size="15" fill="currentColor">series RLC phasors for XL &gt; XC : the source emf leads the current by φ</text><text x="300" y="44" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.8">all phasors rotate counterclockwise at the driving angular speed</text><line x1="95" y1="250" x2="545" y2="250" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.45"/><line x1="230" y1="330" x2="230" y2="85" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.45"/><line x1="230" y1="250" x2="510" y2="250" stroke="currentColor" stroke-width="4.5"/><text x="370" y="270" text-anchor="middle" font-size="15" fill="currentColor">VR = Im R</text><text x="540" y="268" text-anchor="end" font-size="12.5" fill="currentColor" opacity="0.8">current phasor direction →</text><line x1="510" y1="250" x2="510" y2="30" stroke="currentColor" stroke-width="3" marker-end="url(#phA)"/><text x="498" y="60" text-anchor="end" font-size="14" fill="currentColor">VL = Im XL (leads 90°)</text><line x1="548" y1="250" x2="548" y2="368" stroke="currentColor" stroke-width="3" marker-end="url(#phA)"/><text x="556" y="382" text-anchor="start" font-size="14" fill="currentColor">VC = Im XC (lags 90°)</text><line x1="510" y1="250" x2="510" y2="148" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.7"/><text x="516" y="200" text-anchor="start" font-size="12.5" fill="currentColor">VL − VC</text><line x1="230" y1="250" x2="510" y2="148" stroke="currentColor" stroke-width="3.5" marker-end="url(#phA)"/><text x="348" y="182" text-anchor="middle" font-size="16" fill="currentColor">εm = Im Z</text><path d="M 340 250 A 110 110 0 0 0 333.4 212.3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="352" y="238" font-size="15" fill="currentColor">φ</text><line x1="590" y1="310" x2="690" y2="310" stroke="currentColor" stroke-width="2.5"/><line x1="690" y1="310" x2="690" y2="245" stroke="currentColor" stroke-width="2.5"/><line x1="590" y1="310" x2="690" y2="245" stroke="currentColor" stroke-width="3"/><text x="640" y="306" text-anchor="middle" font-size="15" fill="currentColor">R</text><text x="682" y="280" text-anchor="end" font-size="13.5" fill="currentColor">XL − XC</text><text x="628" y="272" font-size="15" fill="currentColor">Z</text><path d="M 625 310 A 35 35 0 0 0 619.4 290.9" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="634" y="300" font-size="14" fill="currentColor">φ</text><text x="640" y="232" text-anchor="middle" font-size="13.5" fill="currentColor">Z = √(R² + (XL − XC)²)</text><text x="640" y="352" text-anchor="middle" font-size="13.5" fill="currentColor">tan φ = (XL − XC)/R</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Series RLC through resonance',
        problem: "A series circuit has $R = 100$ Ω, $L = 0.20$ H, $C = 20\\ \\mu$F, and a source with $\\mathcal{E}_m = 30$ V. Evaluate the current amplitude and phase at $\\omega = 500$ rad/s and at $\\omega = 1000$ rad/s; check the voltage bookkeeping at the higher frequency.",
        steps: [
          { label: 'At ω = 500', text: '$X_L = X_C = 100$ Ω — resonance: $Z = R = 100$ Ω, $I = 30/100 = 0.30$ A, $\\phi = 0$.' },
          { label: 'At ω = 1000', text: '$X_L = 200$ Ω, $X_C = 50$ Ω; $Z = \\sqrt{100^2 + 150^2} = 180$ Ω and $I = 30/180 = 0.17$ A.' },
          { label: 'Phase', text: '$\\tan\\phi = (200 - 50)/100 = 1.5$, so $\\phi = 56°$: the circuit is inductive and the current lags.' },
          { label: 'Voltage check', text: '$V_R = IR = 17$ V, $V_L = IX_L = 33$ V, $V_C = IX_C = 8.3$ V; phasor sum $\\sqrt{17^2 + (33-8.3)^2} = 29.8 \\approx 30$ V — and note $V_L$ alone exceeds the source emf.' },
        ],
        result: 'Resonance gives 0.30 A in phase; doubling the frequency cuts the current to 0.17 A and lags it by 56°, with the inductor voltage (33 V) larger than the 30 V source.',
      },
      {
        title: "The Series RLC Circuit: resonance check",
        problem: "An $LC$ circuit has $L = 10\\ \\text{mH}$, $C = 3\\ \\mu\\text{F}$. Find $f_0 = 1/2\\pi\\sqrt{LC}$.",
        steps: [
          { label: "Product", text: "$LC = 10^{-2}\\times 3\\times 10^{-6} = 3.00\\times 10^{-8}$." },
          { label: "Root", text: "$\\sqrt{LC} = 1.73\\times 10^{-4}\\ \\text{s}$." },
          { label: "Frequency", text: "$f_0 \\approx 919\\ \\text{Hz}$." },
        ],
        result: "$f_0 \\approx 919\\ \\text{Hz}$.",
      },
    ],
    keyTakeaways: [
      '$Z = \\sqrt{R^2 + (X_L - X_C)^2}$, $I = \\mathcal{E}_m/Z$, $\\tan\\phi = (X_L - X_C)/R$; $i$ lags for $\\phi > 0$.',
      'Resonance at $\\omega = 1/\\sqrt{LC}$: $Z = R$, maximum current, zero phase.',
      '$V_L$ and $V_C$ cancel each other at resonance and can each exceed the source voltage.',
    ],
    quiz: [
      {
        q: 'At resonance, the impedance of a series RLC circuit is:',
        options: [`$R$`, 'Zero', `$X_L$`, `$\\sqrt{R^2 + X_L^2}$`],
        answer: 0,
        explanation: 'The reactances cancel, leaving $Z = R$.',
      },
      {
        q: 'Driven below its resonant frequency, a series RLC circuit is:',
        options: ['Inductive — the current lags', 'Capacitive — the current leads', 'Purely resistive', 'An open circuit'],
        answer: 1,
        explanation: 'Below resonance $X_C > X_L$, so $\\phi < 0$ and the current leads the emf.',
      },
      {
        q: 'With $R = 50$ Ω, $X_L = 60$ Ω, and $X_C = 60$ Ω, the impedance is:',
        options: ['70.7 Ω', '120 Ω', '86.6 Ω', '50 Ω'],
        answer: 3,
        explanation: 'The reactances cancel exactly: $Z = \\sqrt{50^2 + 0} = 50$ Ω — resonance.',
      },
      {
        q: 'If $X_L - X_C = R$, the phase constant $\\phi$ is:',
        options: ['90°', '45°', '0°', '30°'],
        answer: 1,
        explanation: '$\\tan\\phi = 1$ gives $\\phi = 45°$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 31-5
  {
    sectionId: 'hall-ch31-s5',
    readingTime: 5,
    intro: "Only the in-phase part of the current delivers power on average; the reactive part shuttles energy back and forth to zero net. The rms convention and the power factor cos φ turn that single idea into the arithmetic of every appliance label and every industrial electric bill.",
    objectives: [
      "Convert between peak and rms values, $\\mathcal{E}_m = \\sqrt{2}\\,\\mathcal{E}_{rms}$",
      "Compute average power $P_{avg} = \\mathcal{E}_{rms}i_{rms}\\cos\\phi$ and verify it equals $i_{rms}^2R$",
      "Explain the power factor and how capacitor banks correct it",
    ],
    concepts: [
      {
        term: 'rms values',
        kind: 'definition',
        statement: "**The root-mean-square values of a sinusoid are its peak values over $\\sqrt{2}$:** $$\\mathcal{E}_{rms} = \\frac{\\mathcal{E}_m}{\\sqrt{2}}, \\qquad i_{rms} = \\frac{I}{\\sqrt{2}}.$$**",
        detail: "RMS values are the DC equivalents for heating: a resistor dissipates the same average power with 120 V DC as with a 170 V-peak AC sinusoid. A US wall outlet's 120 V is rms.",
      },
      {
        term: 'Average power',
        kind: 'theorem',
        statement: "**The average power delivered by a source to a load is** $$P_{avg} = \\mathcal{E}_{rms}\\, i_{rms}\\,\\cos\\phi,$$ **where $\\cos\\phi = R/Z$ is the power factor. Equivalently, $P_{avg} = i_{rms}^2R$ — reactance contributes nothing on average.**",
        detail: "Averaging the instantaneous product $\\mathcal{E}i$ over a cycle leaves only the in-phase component: $\\langle\\sin\\omega t \\cdot \\sin(\\omega t - \\phi)\\rangle = \\frac12\\cos\\phi$, and the factors of $\\frac12$ are absorbed by the two $1/\\sqrt{2}$ rms conversions.",
      },
      {
        term: 'Resonance maximizes power',
        kind: 'insight',
        statement: "**At resonance $\\cos\\phi = 1$ and $P_{avg} = \\mathcal{E}_{rms}^2/R$; off resonance, the phase lag throttles the transfer.**",
        detail: "Motors are inductive loads with poor power factors, so factories bolt capacitor banks alongside them — canceling the reactance raises $\\cos\\phi$ toward 1, and utilities bill for low power factor because it forces them to supply current that does no work.",
      },
      {
        term: "Power in Alternating-Current Circuits: solution protocol",
        kind: "method",
        statement: "**Solve Power in Alternating-Current Circuits problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is $LC$/$RLC$ resonance and AC power; the working equation is $\\omega_0 = 1/\\sqrt{LC}$, $X_L = \\omega L$, $X_C = 1/\\omega C$, $Z = \\sqrt{R^2+(X_L-X_C)^2}$; every substitution must carry its units so the final unit (ohms, hertz, phase angle) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$; sinusoidal steady state for phasors; peak $I$ at $\\omega_d = \\omega_0$.",
      },
      {
        term: "Power in Alternating-Current Circuits: scales and validity",
        kind: "insight",
        statement: "**Power in Alternating-Current Circuits lives at $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$ and the textbook model holds while sinusoidal steady state for phasors; peak $I$ at $\\omega_d = \\omega_0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Power in Alternating-Current Circuits calculation gives seconds when ohms, hertz, phase angle demands meters, or a value orders of magnitude beyond $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Power into the off-resonance circuit',
        problem: "For the series circuit of section 31-4 at $\\omega = 1000$ rad/s ($R = 100$ Ω, $Z = 180$ Ω, $\\mathcal{E}_m = 30$ V, $I = 0.17$ A, $\\phi = 56°$), find the average power two ways, and compare with the power at resonance.",
        steps: [
          { label: 'rms values', text: '$\\mathcal{E}_{rms} = 30/\\sqrt{2} = 21.2$ V and $i_{rms} = 0.17/\\sqrt{2} = 0.12$ A.' },
          { label: 'Power factor', text: '$\\cos\\phi = R/Z = 100/180 = 0.56$.' },
          { label: 'Average power', text: '$P = (21.2)(0.12)(0.56) \\approx 1.4$ W.' },
          { label: 'Cross-checks', text: '$i_{rms}^2R = (0.12)^2(100) = 1.4$ W ✓. At resonance: $P = \\mathcal{E}_{rms}^2/R = 450/100 = 4.5$ W — more than three times as much from the same source.' },
        ],
        result: 'About 1.4 W at the lagging phase, versus 4.5 W at resonance — the power factor throttles the off-resonance transfer.',
      },
      {
        title: "Power in Alternating-Current Circuits: resonance check",
        problem: "An $LC$ circuit has $L = 10\\ \\text{mH}$, $C = 1\\ \\mu\\text{F}$. Find $f_0 = 1/2\\pi\\sqrt{LC}$.",
        steps: [
          { label: "Product", text: "$LC = 10^{-2}\\times 1\\times 10^{-6} = 1.00\\times 10^{-8}$." },
          { label: "Root", text: "$\\sqrt{LC} = 1.00\\times 10^{-4}\\ \\text{s}$." },
          { label: "Frequency", text: "$f_0 \\approx 1590\\ \\text{Hz}$." },
        ],
        result: "$f_0 \\approx 1590\\ \\text{Hz}$.",
      },
    ],
    keyTakeaways: [
      'rms = peak/$\\sqrt{2}$; wall-voltage 120 V means a 170 V swing.',
      '$P_{avg} = \\mathcal{E}_{rms} i_{rms}\\cos\\phi = i_{rms}^2R$; the power factor is $\\cos\\phi = R/Z$.',
      'At resonance, $\\cos\\phi = 1$ and $P = \\mathcal{E}_{rms}^2/R$; capacitor banks correct poor power factors.',
    ],
    quiz: [
      {
        q: 'US household outlets are labeled 120 V. That number is:',
        options: ['An rms value — the peak is about 170 V', 'The peak value', 'The average of the absolute value', 'A dc value'],
        answer: 0,
        explanation: 'AC voltages are quoted as rms; the sinusoid swings $\\pm 170$ V.',
      },
      {
        q: 'The power factor of a purely resistive AC load is:',
        options: ['0', '0.707', '1', 'Equal to R'],
        answer: 2,
        explanation: 'Current and emf are in phase, so $\\cos\\phi = 1$.',
      },
      {
        q: 'A series RLC circuit at resonance dissipates:',
        options: ['Zero power', `$\\mathcal{E}_{rms}^2/R$`, '$\\mathcal{E}_{rms}^2/Z$ with Z largest', 'Nothing at all — energy only sloshes'],
        answer: 1,
        explanation: 'At resonance $\\cos\\phi = 1$ and $Z = R$, so $P = \\mathcal{E}_{rms}^2/R$ is the maximum possible.',
      },
      {
        q: 'A purely inductive load draws average power:',
        options: [`$\\mathcal{E}_{rms} i_{rms}$`, `$i_{rms}^2 X_L$`, 'Zero — it returns what it borrows', 'An amount depending on the frequency'],
        answer: 2,
        explanation: 'The 90° phase makes $\\cos\\phi = 0$; energy shuttles in and out with no net delivery.',
      },
    ],
  },
  // ------------------------------------------------------------------ 31-6
  {
    sectionId: 'hall-ch31-s6',
    readingTime: 5,
    intro: "Two coils sharing an iron core pass power at whatever voltage ratio their turns dictate. This is the transformer — the device that lets the grid move energy at hundreds of kilovolts and deliver it at 120 V, and the practical payoff of the mutual inductance of section 30-9. Its ideal algebra is three lines; its engineering reshaped the electrical age.",
    objectives: [
      "Apply the ideal-transformer relations $V_2/V_1 = N_2/N_1$ and $i_2/i_1 = N_1/N_2$",
      "Derive the equivalent impedance $R_{eq} = (N_1/N_2)^2 R$ seen at the primary",
      "Explain why long-distance transmission runs at high voltage and low current",
    ],
    concepts: [
      {
        term: 'Ideal transformer',
        kind: 'law',
        statement: "**Primary ($N_1$ turns) driven, secondary ($N_2$): rms voltages and currents obey** $$\\frac{V_2}{V_1} = \\frac{N_2}{N_1}, \\qquad \\frac{i_2}{i_1} = \\frac{N_1}{N_2}.$$ **Power in equals power out: $V_1 i_1 = V_2 i_2$ — a step-up in voltage is a step-down in current.**",
        detail: "How it works: the alternating primary current produces an alternating flux in the iron core; by Faraday's law that changing flux induces an emf in every turn of both windings, and identical flux per turn makes the voltage proportional to turns. Ideal means no leakage flux, no winding resistance, no core losses.",
      },
      {
        term: 'Impedance matching',
        kind: 'theorem',
        statement: "**A load $R$ on the secondary appears at the primary as** $$R_{eq} = \\left(\\frac{N_1}{N_2}\\right)^2 R.$$",
        detail: "Derivation: $R_{eq} = V_1/i_1 = (N_1/N_2)V_2 \\div (N_2/N_1)i_2 = (N_1/N_2)^2R$. Tube amplifiers match 8 Ω speakers this way, and the same trick matches a source to a line for maximum power transfer.",
      },
      {
        term: 'Why the grid runs hot on voltage',
        kind: 'insight',
        statement: "**Transmission loss $i^2R$ in the line falls as the square of the stepped-up voltage: doubling the transmission voltage quarters the loss.**",
        detail: "Send a megawatt at 10 kV and you carry 100 A; at 500 kV, only 2 A — and the same wire loses $(1/50)^2 = 1/2500$ as much power. Step-up transformers at the plant and step-down transformers at the substation are the reason long-distance electrification works.",
      },
      {
        term: "Transformers: solution protocol",
        kind: "method",
        statement: "**Solve Transformers problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is $LC$/$RLC$ resonance and AC power; the working equation is $\\omega_0 = 1/\\sqrt{LC}$, $X_L = \\omega L$, $X_C = 1/\\omega C$, $Z = \\sqrt{R^2+(X_L-X_C)^2}$; every substitution must carry its units so the final unit (ohms, hertz, phase angle) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$; sinusoidal steady state for phasors; peak $I$ at $\\omega_d = \\omega_0$.",
      },
      {
        term: "Transformers: scales and validity",
        kind: "insight",
        statement: "**Transformers lives at $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$ and the textbook model holds while sinusoidal steady state for phasors; peak $I$ at $\\omega_d = \\omega_0$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Transformers calculation gives seconds when ohms, hertz, phase angle demands meters, or a value orders of magnitude beyond $f_0\\sim \\text{kHz}$--$\\text{MHz}$ for $\\text{mH}$--$\\mu\\text{F}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Step-up on a distribution line',
        problem: "An ideal transformer has $N_1 = 240$ primary turns and $N_2 = 1200$ secondary turns. The primary runs at $V_1 = 120$ V rms, and the secondary drives a $250\\ \\Omega$ heater. Find the secondary voltage, both currents, the power, and the equivalent resistance seen at the primary.",
        steps: [
          { label: 'Voltages', text: '$V_2 = (N_2/N_1)V_1 = (1200/240)(120) = 600$ V — a 1:5 step-up.' },
          { label: 'Secondary current', text: '$i_2 = V_2/R = 600/250 = 2.4$ A.' },
          { label: 'Primary current', text: '$i_1 = (N_2/N_1)i_2 = 5\\times 2.4 = 12$ A.' },
          { label: 'Power and impedance', text: 'Both sides carry $V i = 1440$ W. The primary sees $R_{eq} = (N_1/N_2)^2R = (1/5)^2(250) = 10$ Ω — and indeed $120/10 = 12$ A ✓.' },
        ],
        result: '600 V and 2.4 A at the secondary, 12 A drawn at the primary, 1440 W through — the primary behaves like a 10 Ω load.',
      },
      {
        title: "Transformers: resonance check",
        problem: "An $LC$ circuit has $L = 10\\ \\text{mH}$, $C = 2\\ \\mu\\text{F}$. Find $f_0 = 1/2\\pi\\sqrt{LC}$.",
        steps: [
          { label: "Product", text: "$LC = 10^{-2}\\times 2\\times 10^{-6} = 2.00\\times 10^{-8}$." },
          { label: "Root", text: "$\\sqrt{LC} = 1.41\\times 10^{-4}\\ \\text{s}$." },
          { label: "Frequency", text: "$f_0 \\approx 1130\\ \\text{Hz}$." },
        ],
        result: "$f_0 \\approx 1130\\ \\text{Hz}$.",
      },
    ],
    keyTakeaways: [
      '$V_2/V_1 = N_2/N_1$ and $i_2/i_1 = N_1/N_2$; ideal power in equals power out.',
      'A load R reflects to the primary as $(N_1/N_2)^2R$ — impedance matching made mechanical.',
      'High transmission voltage means low current, and loss $i^2R$ falls as the square of the voltage gain.',
    ],
    quiz: [
      {
        q: 'A step-up transformer (with $N_2 > N_1$) converts:',
        options: ['Low voltage, high current into high voltage, low current', 'High voltage into even higher voltage', 'Low voltage into low voltage at higher current', 'DC into AC'],
        answer: 0,
        explanation: 'Voltage scales up with turns; current scales down so that the power stays constant.',
      },
      {
        q: 'A 100 Ω resistor sits on the secondary of a 1:3 step-up transformer ($N_2/N_1 = 3$). The primary sees an equivalent resistance of:',
        options: ['900 Ω', '300 Ω', '33 Ω', '11 Ω'],
        answer: 3,
        explanation: '$R_{eq} = (N_1/N_2)^2R = (1/9)(100) \\approx 11$ Ω.',
      },
      {
        q: 'An ideal transformer with 100 W entering the primary delivers at the secondary:',
        options: ['Less than 100 W — coils always dissipate', 'More than 100 W', '100 W', 'An amount depending on the turns ratio'],
        answer: 2,
        explanation: 'Ideal means lossless: $V_1 i_1 = V_2 i_2$, so power out equals power in.',
      },
      {
        q: 'Doubling the transmission voltage (same delivered power) changes the line loss to:',
        options: ['One half', 'One quarter', 'One eighth', 'No change'],
        answer: 1,
        explanation: 'Current halves, and loss $i^2R$ falls by a factor of four.',
      },
    ],
  },
]
