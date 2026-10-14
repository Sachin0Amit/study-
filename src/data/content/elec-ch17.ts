import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Electronics Master Library — Chapter 17: Oscillators and Timers
// Sources: The Art of Electronics, 3rd Edition, ch. 7 (oscillators and timers)
//          + Hughes, Electrical & Electronic Technology, 12th Ed., ch. 14
//          (resonance, energy exchange, Q factor — Examples 14.1/14.2, p. 323–345).
// All worked-example numbers are the books' own; every figure recomputed.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh17Content: SectionContent[] = [
  // ------------------------------------------------------------------ 17.1
  {
    sectionId: 'elec-ch17-s1',
    readingTime: 9,
    intro: 'Chapter 15 showed feedback as a servant: negative feedback traded gain for linearity and bandwidth. Turn the sign around and feedback becomes a creator — an amplifier that feeds its own output back to its input, through a network that selects one frequency, will sing at that frequency forever. This section states the one criterion that governs every oscillator ever built, the Barkhausen criterion, and confronts the two problems it leaves open: how oscillation starts, and what stops it from growing without bound.',
    objectives: [
      'Explain how positive feedback converts an amplifier into an oscillator, in contrast with the negative feedback of Chapter 15',
      'State and apply the Barkhausen criterion for sustained sinusoidal oscillation',
      'Quantify the energy exchange in a resonant LC tank and interpret the Q factor as a loss budget (Hughes, Chapter 14)',
      'Describe the amplitude-stabilization problem and the practical mechanisms that solve it',
      'Connect the electrical resonant circuit to Hughes mechanical analogy of a mass on a spring',
    ],
    concepts: [
      {
        term: 'The positive-feedback loop',
        kind: 'definition',
        statement: 'An **oscillator** is an amplifier whose output is returned to its input through a **frequency-selective feedback network** so that the loop sustains an output with no input signal.',
        detail: 'Write the amplifier gain as $A$ and the feedback fraction as $\\beta$, so the signal returned to the input is $\\beta v_{out}$ and the loop gain is the product $A\\beta$. Chapter 15 kept this product small and negative (degenerative feedback, which stabilizes gain). Oscillators do the opposite: the network is chosen so that at one frequency the returned signal arrives in phase with the input and large enough to replace it, and the circuit supplies its own input.',
      },
      {
        term: 'Barkhausen criterion',
        kind: 'theorem',
        statement: 'Sustained oscillation at a single frequency requires a loop gain of exactly unity and a loop phase shift of exactly zero (an integer multiple of $360^\\circ$):',
        detail: 'The loop gain $A\\beta$ is a complex number, a function of frequency. It is only at the frequency where the phase of $A\\beta$ passes through $0^\\circ$ that regenerative feedback exists, and only there does the loop ring. The Art of Electronics states the design rule directly: to guarantee startup, the loop gain must exceed unity — say by a factor of two or more — at the desired frequency; the circuit then grows its own signal from noise. The frequency of oscillation is set by the phase crossing, and since the passive network is far more stable than the active device, the network — not the amplifier — sets the frequency.',
      },
      {
        term: 'Loop gain above unity: growth from noise',
        kind: 'insight',
        statement: 'With $|A\\beta| > 1$ at the phase-crossing frequency, any tiny disturbance is amplified around the loop and **grows exponentially** until something limits it; with $|A\\beta| < 1$ the oscillation decays.',
        detail: 'Thermal noise in resistors and the amplifier itself contains energy at every frequency, so an oscillator never needs an external seed. The component of noise at the selected frequency is amplified, fed back, re-amplified, and builds up within a few dozen cycles. This is why a working design deliberately over-provides loop gain: component tolerances, temperature and loading would otherwise drag $|A\\beta|$ below unity and the circuit would fall silent.',
      },
      {
        term: 'The amplitude-stabilization problem',
        kind: 'insight',
        statement: 'A loop gain of exactly unity cannot be designed in — it must be **reached dynamically**: start with $|A\\beta| > 1$, then let the growing amplitude reduce the effective gain until the loop settles where $|A\\beta| = 1$.',
        detail: 'Whatever mechanism performs this reduction also sets the output purity. A crude limiter — back-to-back diodes, or plain amplifier clipping — clamps the peaks and leaves several per cent distortion. An elegant mechanism reduces gain gradually with amplitude: a small lamp or thermistor whose resistance rises as it warms, or an AGC loop with a JFET as a voltage-controlled resistor. Art of Electronics calls this the central oscillator design problem — making the amplitude stable, not making it oscillate.',
      },
      {
        term: 'Resonant energy exchange in the LC tank',
        kind: 'law',
        statement: 'At the resonant frequency $f_r = 1/(2\\pi\\sqrt{LC})$ the inductive and capacitive reactances are equal, and energy **oscillates between electrostatic storage in the capacitor and magnetic storage in the inductor**, a quarter of a cycle apart.',
        detail: 'Hughes (section 14.7) describes the exchange precisely: at one instant the energy is $\\tfrac{1}{2}CV_m^2$ in the capacitor, a quarter of a cycle later it is $\\tfrac{1}{2}LI_m^2$ in the inductor. The sum would be constant if the series resistance did not dissipate $I^2R$ on every pass. An oscillator built around a tank is exactly a resonant circuit plus an amplifier that replenishes those losses in phase — the electronic twin of pushing a swing.',
      },
      {
        term: 'Q factor as the loss budget',
        kind: 'definition',
        statement: 'The **Q factor** is the ratio of reactive power to average power dissipated at resonance, equivalently $Q = 2\\pi$ times the energy stored divided by the energy lost per cycle.',
        detail: 'Hughes defines both forms (equations [14.7]–[14.9]): for a series circuit $Q = \\omega_r L/R = 1/(\\omega_r C R)$. The higher the Q, the less energy the amplifier must reinject per cycle and the sharper the resonance peak — section 14.10 derives the bandwidth as $\\mathrm{BW} = f_r/Q$. The practical coil of Hughes Example 14.2 ($r = 5.0\\,\\Omega$, $L = 1.0\\,\\text{mH}$) manages only $Q = 14.1$; a quartz crystal reaches $10^4$ to $10^6$, which is why section 17.3 exists.',
      },
      {
        term: 'Mechanical analogy of a resonant circuit',
        kind: 'insight',
        statement: 'A mass on a spring released from a displaced position **oscillates at its natural frequency with decaying amplitude**; if it is given a small tap each time it moves downward, the oscillation builds to a large steady amplitude.',
        detail: 'This is Hughes section 14.8, and it is the whole theory of oscillators in one picture: mass corresponds to inductance, spring elasticity to capacitance, friction to resistance. The taps are the feedback amplifier, timed to arrive in phase — at the natural frequency, a small repeated force sustains a large oscillation, and the work it does exactly replaces the frictional loss. Hughes points to the escapement of a clock and the balance wheel of a watch as everyday embodiments.',
      },
      {
        term: 'What sets frequency accuracy',
        kind: 'insight',
        statement: 'Oscillator stability is set almost entirely by the **passive frequency-selective network** — its temperature coefficient and its Q — not by the amplifier.',
        detail: 'A simple RC network drifts by fractions of a per cent per kelvin; an LC tank holds a few hundred ppm because copper and dielectrics expand; a crystal holds a few ppm. The amplifier only needs enough loop gain margin to stay running: because the loop locks at the phase crossing, gain variations move the amplitude, not the frequency, to first order. This hierarchy — RC, LC, crystal — organizes section 17.3.',
      },
    ],
    examples: [
      {
        title: 'A tank as the frequency-setting element (Hughes, Example 14.2)',
        problem: 'A coil of resistance $5.0\\,\\Omega$ and inductance $1.0\\,\\text{mH}$ is connected in series with a $0.20\\,\\mu\\text{F}$ capacitor across a 2.0 V variable-frequency supply. Find the resonant frequency, the current and reactances at resonance, and the Q factor — the numbers an oscillator designer would need before adding the amplifier.',
        steps: [
          { label: 'Step 1: Resonant frequency', text: 'At resonance $\\omega_r L = 1/(\\omega_r C)$, so $f_r = 1/(2\\pi\\sqrt{LC})$. With $L = 1.0 \\times 10^{-3}\\,\\text{H}$ and $C = 0.20 \\times 10^{-6}\\,\\text{F}$: $f_r = 1/(2\\pi\\sqrt{2.0 \\times 10^{-10}}) = 11.25\\,\\text{kHz}$, exactly as Hughes computes.' },
          { label: 'Step 2: Current at resonance', text: 'The reactances cancel and the circuit is purely resistive: $I_r = V/R = 2.0/5.0 = 0.4\\,\\text{A}$. This is the maximum the circuit can draw, and the current the losses $I^2R = 0.8\\,\\text{W}$ are built from.' },
          { label: 'Step 3: Reactances and magnification', text: 'Each reactance at resonance is $X_L = X_C = 2\\pi f_r L = 2\\pi \\times 11\\,250 \\times 10^{-3} = 70.7\\,\\Omega$. The capacitor voltage is $V_C = I_r X_C = 0.4 \\times 70.7 = 28.3\\,\\text{V}$ — fourteen times the 2.0 V supply. A resonant feedback network hands the amplifier this same magnification for free.' },
          { label: 'Step 4: Q factor', text: '$Q = \\omega_r L/r = 70.7/5.0 = 14.1$. In oscillator terms: each cycle, the tank loses a fraction $1/Q$ of its stored energy per radian, so the feedback loop must reinject about 7 per cent of the stored energy per cycle to keep it ringing.' },
        ],
        result: '$f_r = 11.25\\,\\text{kHz}$, $I_r = 0.4\\,\\text{A}$, $X_L = X_C = 70.7\\,\\Omega$, $V_C = 28.3\\,\\text{V}$, $Q = 14.1$ — the voltage magnification of about 14 that the book notes.',
      },
      {
        title: 'The energy the amplifier must replenish (Hughes, Example 14.1)',
        problem: 'A series circuit with $R = 4.0\\,\\Omega$ and $L = 0.50\\,\\text{H}$ takes 25 A from a 100 V, 50 Hz supply at resonance ($C = 20.3\\,\\mu\\text{F}$). How much energy circulates, how much is lost per cycle, and what loop of amplifier and tank would sustain it?',
        steps: [
          { label: 'Step 1: Stored energy at the peaks', text: 'The current is sinusoidal with rms value 25 A, so its peak is $I_m = 25\\sqrt{2} = 35.4\\,\\text{A}$. At the instant the inductor current peaks, the stored energy is $W = \\tfrac{1}{2}LI_m^2 = \\tfrac{1}{2} \\times 0.50 \\times 1250 = 312.5\\,\\text{J}$ — the same energy that appears across the capacitor a quarter of a cycle later.' },
          { label: 'Step 2: Energy lost per cycle', text: 'The resistance dissipates $P = I^2R = 25^2 \\times 4.0 = 2500\\,\\text{W}$. One cycle lasts $T = 1/50 = 20\\,\\text{ms}$, so the loss per cycle is $\\Delta W = 2500 \\times 0.020 = 50\\,\\text{J}$. This is the energy an oscillation-sustaining amplifier would have to reinject on every cycle.' },
          { label: 'Step 3: Check against the Q factor', text: 'The book computes $Q = 2\\pi f_r L/R = 2\\pi \\times 50 \\times 0.5/4.0 = 39.3$ (and indeed $V_L = V_C = QV = 3930\\,\\text{V}$ at 25 A). The definition $Q = 2\\pi W/\\Delta W$ gives $2\\pi \\times 312.5/50 = 39.3$ — the same number from a completely different direction.' },
          { label: 'Step 4: The oscillator view', text: 'A feedback amplifier that couples energy back into this tank in the right phase, delivering just $50\\,\\text{J}$ per cycle (2500 W average), keeps the 3930 V ringing across $L$ and $C$ forever. Deliver more and the amplitude grows; deliver less and it decays — the Barkhausen balance in energy terms.' },
        ],
        result: 'Stored energy 312.5 J sloshes between L and C; 50 J per cycle is dissipated; the ratio gives $Q = 39.3$, matching the book — and fixing the power the sustaining amplifier must supply.',
      },
    ],
    keyTakeaways: [
      'Oscillation is positive feedback: an amplifier plus a frequency-selective network that returns a phase-aligned fraction $\\beta$ of its own output.',
      'The Barkhausen criterion demands loop gain $|A\\beta| = 1$ at $0^\\circ$ loop phase; design with margin above unity so noise can start the oscillation.',
      'Amplitude stabilization is the real design problem: gain above unity grows the signal, and a nonlinear element — lamp, thermistor, AGC, or clipping — must settle it where the loop gain is exactly one.',
      'At $f_r = 1/(2\\pi\\sqrt{LC})$ a tank exchanges energy between $\\tfrac{1}{2}CV^2$ and $\\tfrac{1}{2}LI^2$ storage a quarter-cycle apart; losses are $I^2R$ per pass.',
      'The Q factor is the loss budget — energy stored over energy lost per radian — and fixes both how much the amplifier must reinject and how sharp the frequency selection is.',
      'Frequency stability belongs to the passive network: RC worst, LC better, crystal best; amplifier gain changes move amplitude, not frequency.',
    ],
    quiz: [
      {
        q: 'An amplifier has $A = 100$ and its feedback network returns $\\beta = 0.012$ in phase at 1 kHz. What happens at 1 kHz?',
        options: ['The loop gain is below unity, so any disturbance decays', 'The loop gain is exactly unity, so a sustained 1 kHz oscillation results', 'The loop gain is above unity, so an oscillation grows from noise until something limits it', 'Nothing — the loop gain is negative, as in Chapter 15'],
        answer: 2,
        explanation: 'The loop gain is $A\\beta = 100 \\times 0.012 = 1.2 > 1$ with zero loop phase, so the Barkhausen magnitude condition is exceeded: the 1 kHz component of noise circulates and grows until a gain-reducing mechanism — a lamp, an AGC loop or plain clipping — settles the loop gain at exactly one. Had the product been 0.8, the loop would be regenerative in phase but too weak, and the circuit would stay quiet.',
      },
      {
        q: 'Which condition is the Barkhausen criterion for sustained oscillation?',
        options: ['Loop gain equal to 1 and loop phase of 180 degrees', 'Loop gain greater than 1 and loop phase of 90 degrees', 'Loop gain equal to 1 and loop phase of zero degrees (a multiple of 360 degrees)', 'Open-loop gain equal to the feedback fraction, at any phase'],
        answer: 2,
        explanation: 'The returned signal must arrive in phase with the signal it replaces (a total loop phase of $0^\\circ$, that is $360^\\circ$) and with exactly the same amplitude. Loop gain above unity only guarantees startup; something must then reduce it to one to hold a stable amplitude.',
      },
      {
        q: 'In the series resonant circuit of Hughes Example 14.1, why is $V_C = 3930\\,\\text{V}$ when the supply is only 100 V?',
        options: ['The capacitor is charged through a step-up transformer action', 'At resonance the current (25 A) flows through $X_C = 157\\,\\Omega$, and the product is Q times the supply voltage', 'The resonance doubles the supply voltage across each element', 'The Q factor reduces the current until the voltage rises'],
        answer: 1,
        explanation: 'At resonance the impedance is just $R = 4\\,\\Omega$, so $I = 25\\,\\text{A}$, and that current develops $I X_C = 25 \\times 157 = 3930\\,\\text{V}$ across the capacitor. Since $X_C = Q R$, the voltage is magnified by $Q = 39.3$ — the same magnification an LC feedback network offers the oscillator loop.',
      },
      {
        q: 'Why do practical oscillator designs deliberately make the loop gain greater than unity at startup?',
        options: ['To make the frequency higher than the network alone provides', 'So that component tolerances and temperature cannot pull the loop gain below unity and silence the circuit', 'Because unity loop gain is unstable in principle', 'To keep the output amplitude exactly proportional to the supply'],
        answer: 1,
        explanation: 'Loop gain above unity guarantees growth from noise even after tolerances eat into the margin. The resulting amplitude then grows until a gain-reducing mechanism — a lamp, thermistor, AGC loop or clipping — settles the loop gain at exactly one. Designing for exactly one from the start would leave the circuit unable to start at all once anything drifts.',
      },
      {
        q: 'In the mass-on-spring analogy of a resonant circuit (Hughes section 14.8), what plays the role of the feedback amplifier?',
        options: ['The spring, because it returns the mass toward equilibrium', 'The mass, because it stores kinetic energy', 'The small taps timed to the natural frequency, which replace the frictional losses', 'The friction, because it limits the amplitude'],
        answer: 2,
        explanation: 'The escapement of a clock — the regularly timed small impulses from the mainspring — keeps the balance wheel swinging by replacing exactly the energy lost to friction. The feedback amplifier does the same for the LC tank: it injects in-phase energy equal to the $I^2R$ loss of each cycle.',
      },
    ],
  },

  // ------------------------------------------------------------------ 17.2
  {
    sectionId: 'elec-ch17-s2',
    readingTime: 12,
    intro: 'Not every oscillator needs a resonator. A capacitor, a resistor and anything that switches between two thresholds will oscillate — the capacitor charges until the switch flips, the threshold moves, and the cycle repeats. These relaxation oscillators make square waves instead of sine waves, and one integrated circuit, the 555 timer, packages the whole idea into an eight-pin device that has outsold almost every other chip in history.',
    objectives: [
      'Analyze the op-amp or comparator relaxation oscillator with hysteresis and derive its period from the exponential charging law',
      'Compute a relaxation oscillator frequency from component values, including the equal-resistor special case $T = 2RC\\ln 3$',
      'Describe the 555 timer internals: two comparators, the flip-flop and the discharge transistor',
      'Design 555 astable and monostable circuits from the formulas $f = 1.44/((R_A + 2R_B)C)$ and $T = 1.1RC$',
      'Explain why both circuits share the same $\\ln 3$ mathematics',
    ],
    concepts: [
      {
        term: 'Relaxation oscillator',
        kind: 'definition',
        statement: 'A **relaxation oscillator** generates a square or triangular wave by charging a capacitor toward one threshold, switching the state of a comparator or gate when the threshold is crossed, and letting the capacitor then charge toward the other threshold.',
        detail: 'The timing is exponential, set by an $RC$ product, and the output is rich in harmonics rather than sinusoidal — exactly what a clock, a flasher or a tone generator needs. Unlike the resonant oscillators of section 17.1, frequency accuracy depends on resistor, capacitor and threshold ratios, typically good to a few per cent.',
      },
      {
        term: 'Comparator with hysteresis (Schmitt trigger)',
        kind: 'definition',
        statement: 'A comparator with **positive feedback** through a divider $R_1$–$R_2$ switches at two thresholds, $+\\gamma V_{sat}$ and $-\\gamma V_{sat}$, where $\\gamma = R_2/(R_1 + R_2)$ and $\\pm V_{sat}$ are the saturated output levels.',
        detail: 'The separation between the thresholds — the hysteresis window $2\\gamma V_{sat}$ — is what makes the relaxation oscillator work: the capacitor must genuinely travel between them, and the exponential charging time between the two levels sets the period. Without hysteresis a plain comparator would chatter at the crossing instead of oscillating cleanly.',
      },
      {
        term: 'Relaxation oscillator period',
        kind: 'law',
        statement: 'With thresholds at fractions $\\pm\\gamma$ of the saturated output, the capacitor moves exponentially between them and the period is',
        detail: 'During each half-cycle the capacitor charges from $-\\gamma V_{sat}$ toward $+V_{sat}$, so $v_C(t) = V_{sat} - V_{sat}(1+\\gamma)e^{-t/RC}$; reaching $+\\gamma V_{sat}$ takes $t = RC\\ln\\big((1+\\gamma)/(1-\\gamma)\\big)$. Doubling for the two halves gives the boxed result. For the popular equal-resistor case $\\gamma = 1/2$ this collapses to $T = 2RC\\ln 3 = 2.197RC$, that is $f = 1/(2RC\\ln 3) \\approx 0.455/RC$. The Art of Electronics stresses the pleasant consequence: because the thresholds are fixed fractions of the output swing, the frequency is independent of the supply voltage — only the $RC$ product and the ratio $R_2/(R_1+R_2)$ matter.',
      },
      {
        term: 'Why the supply voltage cancels',
        kind: 'insight',
        statement: 'The frequency of a relaxation oscillator is set by **ratios of the output swing**, so a saturating op-amp or comparator driven from $\\pm 15\\,\\text{V}$, $\\pm 12\\,\\text{V}$ or a single supply gives essentially the same frequency.',
        detail: 'Both the destination ($\\pm V_{sat}$) and the thresholds ($\\pm\\gamma V_{sat}$) scale with the supply, and the logarithm in the period formula depends only on their ratio. What does shift the frequency is threshold asymmetry, comparator propagation delay (which matters above a few hundred kHz), and the capacitance the comparator itself adds.',
      },
      {
        term: 'The 555 timer internals',
        kind: 'definition',
        statement: 'The 555 contains **two comparators** — one tripped at $\\tfrac{2}{3}V_{CC}$ (the threshold comparator) and one at $\\tfrac{1}{3}V_{CC}$ (the trigger comparator) — an **SR flip-flop** driven by them, an open-collector **discharge transistor** on pin 7, and a buffered output stage on pin 3.',
        detail: 'The trip points come from three equal resistors in series across the supply, which is why every 555 timing result is a supply-independent ratio. Pin names: 1 ground, 2 trigger, 3 output, 4 reset, 5 control voltage (access to the $\\tfrac{2}{3}V_{CC}$ node for modulation), 6 threshold, 7 discharge, 8 $V_{CC}$. The bipolar 555 runs from 4.5 V to 16 V and its output can source or sink about 200 mA — enough for a small relay or loudspeaker; CMOS versions (7555 and friends) take microseconds of supply current and swing rail to rail.',
      },
      {
        term: '555 astable mode',
        kind: 'law',
        statement: 'With $R_A$ from $V_{CC}$ to pin 7, $R_B$ from pin 7 to the pin 6–2 junction and $C$ from that junction to ground, the 555 oscillates with',
        detail: 'The capacitor charges through $R_A + R_B$ toward $V_{CC}$ until the threshold comparator fires at $\\tfrac{2}{3}V_{CC}$; the flip-flop then turns on the discharge transistor and $C$ empties through $R_B$ alone until the trigger comparator fires at $\\tfrac{1}{3}V_{CC}$. Charging between exactly $\\tfrac{1}{3}$ and $\\tfrac{2}{3}$ of the supply takes $\\ln 2 = 0.693$ time constants, so $T_{high} = 0.693(R_A+R_B)C$ and $T_{low} = 0.693 R_B C$. The duty cycle $(R_A+R_B)/(R_A+2R_B)$ can never reach 50 per cent, since the charging path always includes $R_B$; $R_B \\gg R_A$ approaches it. This is the free-running clock configuration of the Art of Electronics chapter 7.',
      },
      {
        term: '555 monostable mode',
        kind: 'law',
        statement: 'With $R$ from $V_{CC}$ to pin 6–7 and $C$ from pin 6 to ground, a negative-going trigger pulse on pin 2 produces one output pulse of',
        detail: 'The trigger comparator sets the flip-flop, the output goes high and the discharge transistor releases the capacitor, which charges from 0 toward $V_{CC}$ until the threshold comparator resets the flip-flop at $\\tfrac{2}{3}V_{CC}$. The pulse width is the time to get from 0 to $\\tfrac{2}{3}$ of the way to $V_{CC}$: $T = RC\\ln 3 = 1.099RC \\approx 1.1RC$. Two operating cautions from practice: the trigger pulse must be shorter than the output pulse, and the circuit ignores further triggers until the pulse ends — a retriggerable one-shot needs extra logic.',
      },
      {
        term: 'Choosing between the approaches',
        kind: 'insight',
        statement: 'A bare comparator relaxation oscillator is the **fast and cheap** square-wave source; the 555 is the **robust, drive-capable timer**; and neither approaches the frequency precision of the resonant oscillators of section 17.3.',
        detail: 'Comparator-based oscillators run to tens of megahertz; the bipolar 555 tops out in the hundreds of kilohertz but shrugs off supply and load abuse, and its 200 mA output drives lamps, relays and speakers directly. For anything needing ppm-level stability, nothing in this section qualifies — that is the job of a quartz crystal.',
      },
    ],
    examples: [
      {
        title: 'A relaxation oscillator from scratch',
        problem: 'A comparator running on $\\pm 15\\,\\text{V}$ supplies (output saturating near $\\pm 13\\,\\text{V}$) has a feedback divider of two equal 10 kΩ resistors, and its inverting input sees a 0.1 μF capacitor charged through 10 kΩ. Derive and compute the frequency.',
        steps: [
          { label: 'Step 1: Thresholds', text: 'Equal resistors give $\\gamma = R_2/(R_1+R_2) = 1/2$, so the Schmitt thresholds sit at $\\pm\\gamma V_{sat} = \\pm 6.5\\,\\text{V}$, a hysteresis window of 13 V.' },
          { label: 'Step 2: One half-cycle', text: 'With the output at $+13\\,\\text{V}$ the capacitor rises from $-6.5\\,\\text{V}$ toward $+13\\,\\text{V}$ as $v_C(t) = 13 - 19.5\\,e^{-t/RC}$. Setting $v_C = +6.5$ gives $e^{-t/RC} = 6.5/19.5 = 1/3$, so $t = RC\\ln 3$.' },
          { label: 'Step 3: Period and frequency', text: 'The other half is symmetric, so $T = 2RC\\ln 3$. With $R = 10\\,\\text{k}\\Omega$ and $C = 0.1\\,\\mu\\text{F}$, $RC = 1.0\\,\\text{ms}$ and $T = 2 \\times 1.0 \\times 1.0986 = 2.20\\,\\text{ms}$, hence $f = 1/T = 455\\,\\text{Hz}$.' },
          { label: 'Step 4: Supply check', text: 'If the supplies sagged to $\\pm 12\\,\\text{V}$ (saturation near $\\pm 10\\,\\text{V}$, thresholds $\\pm 5\\,\\text{V}$), the exponential would still run between $-\\tfrac{1}{2}$ and $+\\tfrac{1}{2}$ of the destination: the same $\\ln 3$, the same 455 Hz. Only the output amplitude changes.' },
        ],
        result: '$T = 2RC\\ln 3 = 2.20\\,\\text{ms}$ and $f = 455\\,\\text{Hz}$, independent of supply because every voltage in the problem enters as a ratio.',
      },
      {
        title: 'Designing a 1 kHz 555 astable',
        problem: 'Choose component values for a 555 astable running at about 1 kHz with a duty cycle near 67 per cent, using $C = 0.01\\,\\mu\\text{F}$.',
        steps: [
          { label: 'Step 1: The design equation', text: 'From $T_{high} = 0.693(R_A+R_B)C$ and $T_{low} = 0.693R_B C$ the total is $T = 0.693(R_A+2R_B)C$, conventionally written $f = 1.44/((R_A+2R_B)C)$.' },
          { label: 'Step 2: Size the resistor sum', text: 'Setting $f = 1\\,\\text{kHz}$ and $C = 0.01\\,\\mu\\text{F}$: $R_A + 2R_B = 1.44/(fC) = 1.44/(1000 \\times 10^{-8}) = 144\\,\\text{k}\\Omega$.' },
          { label: 'Step 3: Split between charge and discharge paths', text: 'Choose $R_B = 47\\,\\text{k}\\Omega$; then $R_A = 144 - 94 = 50\\,\\text{k}\\Omega$ (a standard 51 kΩ part gives essentially the same result). Both values sit comfortably in the range where the bipolar 555 behaves well — above about 1 kΩ to survive pin-7 current, below about 3 MΩ where leakage starts to matter.' },
          { label: 'Step 4: Verify the pieces', text: '$T_{high} = 0.693 \\times (50+47)\\,\\text{k}\\Omega \\times 0.01\\,\\mu\\text{F} = 0.672\\,\\text{ms}$; $T_{low} = 0.693 \\times 47\\,\\text{k}\\Omega \\times 0.01\\,\\mu\\text{F} = 0.326\\,\\text{ms}$; $T = 0.998\\,\\text{ms}$, so $f = 1002\\,\\text{Hz}$ — within 0.2 per cent of the target before capacitor tolerance is even considered.' },
          { label: 'Step 5: Duty cycle', text: 'The output is high during the charge: duty $= (R_A+R_B)/(R_A+2R_B) = 97/144 = 67.4\\,\\text{per cent}$. Reducing $R_B$ moves toward 50 per cent but never reaches it, because the discharge path always includes $R_B$.' },
        ],
        result: '$R_A = 50\\,\\text{k}\\Omega$, $R_B = 47\\,\\text{k}\\Omega$, $C = 0.01\\,\\mu\\text{F}$ gives $f \\approx 1\\,\\text{kHz}$ at 67 per cent duty — $T = 0.998\\,\\text{ms}$ from the piecewise check.',
      },
      {
        title: 'A 1.1-second monostable pulse',
        problem: 'A 555 monostable must produce a 1.1 s pulse to keep a lamp on after a button press. Determine the timing pair and confirm the $\\ln 3$ arithmetic.',
        steps: [
          { label: 'Step 1: Timing equation', text: 'The capacitor charges from 0 toward $V_{CC}$ and the pulse ends at the $\\tfrac{2}{3}V_{CC}$ threshold: $T = RC\\ln\\big(1/(1-\\tfrac{2}{3})\\big) = RC\\ln 3 = 1.099RC$, the familiar $1.1RC$.' },
          { label: 'Step 2: Choose values', text: 'With $R = 100\\,\\text{k}\\Omega$ and $C = 10\\,\\mu\\text{F}$: $T = 1.099 \\times 10^5 \\times 10^{-5} = 1.10\\,\\text{s}$ — the standard textbook pair.' },
          { label: 'Step 3: Sanity limits', text: 'Keep the timing resistor between roughly 10 kΩ and 10 MΩ: too small and pin-7 discharge current suffers; too large and capacitor leakage and comparator bias currents corrupt the interval. Electrolytic capacitor tolerance ($-20$ to $+50$ per cent) dominates the error budget at this value.' },
          { label: 'Step 4: The shared mathematics', text: 'Note the coincidence worth remembering: the monostable covers the same 0-to-$\\tfrac{2}{3}$ exponential as one 555 astable half-cycle, and the equal-resistor relaxation oscillator runs threshold-to-threshold across the same $\\tfrac{1}{3}$-to-$\\tfrac{2}{3}$ window. One logarithm, $\\ln 3$, times an $RC$ product, prices three different circuits.' },
        ],
        result: '$R = 100\\,\\text{k}\\Omega$, $C = 10\\,\\mu\\text{F}$ gives $T = 1.1\\,\\text{s}$; the $\\ln 3$ factor is the same one hidden in the astable and relaxation-oscillator formulas.',
      },
    ],
    keyTakeaways: [
      'Relaxation oscillators need no resonator: a capacitor, a resistor and a threshold-crossing switch make square waves whose timing is set by an $RC$ product.',
      'For thresholds at $\\pm\\gamma$ of the output swing the period is $T = 2RC\\ln\\big((1+\\gamma)/(1-\\gamma)\\big)$; equal resistors give the memorable $T = 2RC\\ln 3$.',
      'Because thresholds are fixed fractions of the output swing, relaxation-oscillator frequency is nearly independent of supply voltage.',
      'The 555 is two comparators (at $\\tfrac{1}{3}$ and $\\tfrac{2}{3}V_{CC}$), an SR flip-flop and a discharge transistor — all timing results are supply-independent ratios.',
      'Astable: $T_{high} = 0.693(R_A+R_B)C$, $T_{low} = 0.693R_BC$, so $f = 1.44/((R_A+2R_B)C)$ with duty $(R_A+R_B)/(R_A+2R_B)$ — never quite 50 per cent.',
      'Monostable: $T = RC\\ln 3 \\approx 1.1RC$; the trigger must be shorter than the pulse, and the circuit ignores triggers during the pulse.',
      'The bipolar 555 runs from 4.5–16 V and drives 200 mA loads; CMOS variants trade that drive for microamp supply current.',
    ],
    quiz: [
      {
        q: 'A relaxation oscillator uses equal hysteresis resistors, $R = 10\\,\\text{k}\\Omega$ and $C = 0.1\\,\\mu\\text{F}$. Its frequency is closest to:',
        options: ['455 Hz', '1 kHz', '2.2 kHz', '100 Hz'],
        answer: 0,
        explanation: 'With $\\gamma = 1/2$ the period is $T = 2RC\\ln 3 = 2 \\times (10^4 \\times 10^{-7}) \\times 1.0986 = 2.20\\,\\text{ms}$, so $f = 1/T \\approx 455\\,\\text{Hz}$. The $\\ln 3$ comes from running the exponential across the half-and-half threshold window.',
      },
      {
        q: 'In the 555 astable connection, which resistor is NOT in the capacitor discharge path?',
        options: ['$R_B$, because it is below pin 7', '$R_A$, because the discharge transistor on pin 7 bypasses it', 'Both resistors carry the discharge current', 'Neither — the capacitor discharges through the output pin'],
        answer: 1,
        explanation: 'The discharge transistor saturates at pin 7, which is the junction of $R_A$ and $R_B$; the capacitor therefore empties through $R_B$ alone. That is why $T_{low} = 0.693R_BC$ while charging goes through $R_A + R_B$, and why the duty cycle can never fall to 50 per cent.',
      },
      {
        q: 'Where do the 555 comparator trip points of $\\tfrac{1}{3}V_{CC}$ and $\\tfrac{2}{3}V_{CC}$ come from?',
        options: ['A Zener diode reference between pins 5 and 1', 'Three equal resistors in series across the supply', 'The ratio of the external timing resistors $R_A$ and $R_B$', 'The beta of the discharge transistor'],
        answer: 1,
        explanation: 'An internal string of three equal resistors divides $V_{CC}$ into thirds; the threshold comparator looks at $\\tfrac{2}{3}V_{CC}$ and the trigger comparator at $\\tfrac{1}{3}V_{CC}$. Pin 5 exposes the upper node so the trip point — and hence the output frequency — can be modulated.',
      },
      {
        q: 'A 555 astable uses $R_A = 50\\,\\text{k}\\Omega$, $R_B = 47\\,\\text{k}\\Omega$, $C = 0.01\\,\\mu\\text{F}$. The frequency is approximately:',
        options: ['500 Hz', '1 kHz', '2 kHz', '10 kHz'],
        answer: 1,
        explanation: '$R_A + 2R_B = 50 + 94 = 144\\,\\text{k}\\Omega$, so $f = 1.44/((R_A+2R_B)C) = 1.44/(1.44 \\times 10^5 \\times 10^{-8}) = 1.44/(1.44 \\times 10^{-3}) = 1000\\,\\text{Hz}$. The choice of $R_A + 2R_B = 144\\,\\text{k}\\Omega$ is what makes the arithmetic tidy.',
      },
      {
        q: 'Why is the 555 monostable pulse width given by $T = 1.1RC$ rather than exactly $RC$?',
        options: ['Because the discharge transistor adds 10 per cent overhead', 'Because the capacitor charges from 0 to two-thirds of $V_{CC}$, which takes $\\ln 3 = 1.099$ time constants', 'Because the output stage delays the flip-flop reset', 'Because the trigger comparator fires at 1/3 of the supply'],
        answer: 1,
        explanation: 'The pulse ends when the threshold comparator trips at $\\tfrac{2}{3}V_{CC}$. Charging from 0 toward $V_{CC}$, the time to reach two-thirds is $t = RC\\ln(1/(1-\\tfrac{2}{3})) = RC\\ln 3 = 1.099RC$, rounded on datasheets to $1.1RC$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 17.3
  {
    sectionId: 'elec-ch17-s3',
    readingTime: 11,
    intro: 'A relaxation oscillator is happy with a few per cent of frequency error; a sine wave for measurement or radio is not. Sinusoidal oscillators put the Barkhausen criterion to work on a frequency-selective network — a humble RC bridge at audio, a resonant LC tank with a capacitive or inductive tap at radio, and, when ppm matter, a slab of vibrating quartz. Each step up the ladder buys frequency stability by making the frequency-setting element sharper and more indifferent to the amplifier around it.',
    objectives: [
      'Analyze the Wien bridge network and prove that the amplifier gain must be exactly 3',
      'Explain the lamp-stabilization story of the Wien bridge oscillator and its modern AGC replacements',
      'Analyze the Colpitts and Hartley LC oscillator connections and compute the oscillation frequency',
      'Model the quartz crystal with its motional equivalent circuit and distinguish series from parallel resonance',
      'Rank RC, LC and crystal oscillators by Q and frequency stability',
    ],
    concepts: [
      {
        term: 'Wien bridge oscillator',
        kind: 'definition',
        statement: 'The **Wien bridge oscillator** feeds an op-amp output through a series $RC$ and a parallel $RC$ (the lead–lag network) back to the non-inverting input, with a gain-setting pair from output to inverting input.',
        detail: 'The network transfer is $\\beta(j\\omega) = 1/(3 + j(\\omega RC - 1/(\\omega RC)))$. The imaginary part vanishes at exactly one frequency, $\\omega_0 = 1/(RC)$, where the network attenuates by a real factor of 3 and contributes no phase shift — the Barkhausen phase condition is satisfied there and only there. With a lamp or thermistor stabilizing the gain, this is the classic low-distortion audio oscillator; Bill Hewlett built the HP200A around it in 1939, and the company that became Hewlett-Packard began as its seller.',
      },
      {
        term: 'Why the gain must be exactly 3',
        kind: 'theorem',
        statement: 'At $f_0 = 1/(2\\pi RC)$ the Wien network returns exactly one-third of the output in phase, so the Barkhausen criterion demands an amplifier gain of exactly 3:',
        detail: 'Since $|A\\beta| = 1$ requires $A = 1/\\beta = 3$, the non-inverting amplifier is designed with $1 + R_f/R_i = 3$, that is $R_f = 2R_i$. Below 3 the loop dies; above 3 the amplitude grows until the network or amplifier distorts and the average gain falls to 3 the ugly way — clipping. The 3 is exact because at $\\omega_0$ the series arm and shunt arm impedances are related by a factor of two, making the divider a clean 1-to-2 split of the output.',
      },
      {
        term: 'The lamp and other amplitude stabilizers',
        kind: 'insight',
        statement: 'Hewlett put a **small incandescent lamp** in the gain leg: as the output amplitude grows, the lamp warms, its resistance rises, the gain falls toward 3 — a smooth AGC loop with a thermal time constant of many cycles.',
        detail: 'Because the lamp averages over hundreds of cycles, it corrects the amplitude without distorting any single waveform — sine purity of 0.1 per cent is routine. Modern replacements: a negative-temperature-coefficient thermistor in the other leg, a JFET operated as a voltage-controlled resistor in the feedback divider, or an LED-plus-photoconductor cell. The diode-clipper alternative is simple but trades away distortion performance; the Art of Electronics shows the same loop-gain analysis behind all of them.',
      },
      {
        term: 'LC oscillators and the dynamic resistance',
        kind: 'definition',
        statement: 'An **LC oscillator** connects an amplifier to a parallel resonant tank; at resonance the tank is purely resistive, presenting the **dynamic resistance** $Z_r = L/(C R_S)$ of Hughes equation [14.17], and the amplifier must only replenish the coil loss.',
        detail: 'Hughes shows that a high-Q parallel circuit behaves as a rejector — impedance maximal and current minimal at resonance — with the loss-dominated dynamic resistance replacing the ideal infinity. The Colpitts, Hartley and Pierce circuits differ only in how the tank voltage is tapped and fed back: the feedback fraction must satisfy the Barkhausen magnitude condition against the amplifier gain available.',
      },
      {
        term: 'Colpitts oscillator',
        kind: 'definition',
        statement: 'The **Colpitts oscillator** replaces the transformer with a **capacitive divider**: two capacitors $C_1$ and $C_2$ in series across the tank inductor, the tap between them returning the feedback signal.',
        detail: 'The divider feeds back the fraction $C_1/(C_1+C_2)$ of the tank voltage, and the resonant frequency is set by the inductor with the series combination of the two capacitors, $C_{eff} = C_1C_2/(C_1+C_2)$. Because the feedback network is all capacitors, the Colpitts is the natural vehicle for a varactor — a voltage-variable capacitor — when the oscillator must be electrically tuned.',
      },
      {
        term: 'Hartley oscillator',
        kind: 'definition',
        statement: 'The **Hartley oscillator** is the Colpitts with the roles exchanged: a **tapped inductor** divides the tank voltage, and a single capacitor sets the resonant frequency.',
        detail: 'The feedback fraction is the turns ratio of the tap (including any mutual coupling between the sections, which alters the effective inductance). Historically earlier than the Colpitts, the Hartley needs a coil with a tap and tends to pick up stray capacitances into its feedback ratio; the Colpitts divider of fixed capacitors is generally the more predictable design.',
      },
      {
        term: 'The quartz crystal',
        kind: 'definition',
        statement: 'A **quartz crystal** is a piezoelectric resonator whose electrical behaviour near resonance is captured by a **motional arm** — series $L_m$, $C_m$, $R_m$ — in parallel with the static capacitance $C_0$ of the electrodes and holder.',
        detail: 'The numbers are extraordinary: a few millihenries of motional inductance with femtofarads of motional capacitance and ohms of loss give Q factors of $10^4$ to $10^6$, versus the $Q = 14.1$ of the practical coil in Hughes Example 14.2. Mechanically, a vibrating quartz slab stores its energy in a lossless lattice and loses almost none per cycle; the Art of Electronics credits this as the cheapest way to buy six digits of frequency stability.',
      },
      {
        term: 'Series and parallel resonance',
        kind: 'law',
        statement: 'The crystal has two resonances: **series resonance** $f_s = 1/(2\\pi\\sqrt{L_mC_m})$ of the motional arm, and the slightly higher **parallel resonance** produced when the motional arm is inductive and resonates with $C_0$:',
        detail: 'Between $f_s$ and $f_p$ — typically a few hundredths of a per cent apart — the crystal looks inductive, and that is where most oscillator circuits operate it: the Pierce oscillator (a logic inverter, the crystal and two small capacitors) is the standard microcontroller clock. Outside the window the crystal is either capacitive or resistive and cannot sustain the Barkhausen phase condition. The extraordinary narrowness of the window, together with the high Q, is what makes a crystal oscillator hold its frequency: the phase-versus-frequency slope through resonance is so steep that amplifier phase shifts barely move the operating point. Temperature compensation (TCXO) and oven control (OCXO) push the stability into the sub-ppm range.',
      },
    ],
    examples: [
      {
        title: 'A 1 kHz Wien bridge oscillator',
        problem: 'Design the frequency-setting network and the gain leg of a Wien bridge oscillator for 1 kHz, then verify the Barkhausen numbers.',
        steps: [
          { label: 'Step 1: Choose the network', text: 'With $R = 15.9\\,\\text{k}\\Omega$ and $C = 0.01\\,\\mu\\text{F}$, the frequency is $f_0 = 1/(2\\pi RC) = 1/(2\\pi \\times 15.9 \\times 10^3 \\times 10^{-8}) = 1001\\,\\text{Hz}$ — the nearest standard values to the ideal $1/(2\\pi f) = 15.9\\,\\text{k}\\Omega$.' },
          { label: 'Step 2: Set the gain', text: 'At $f_0$ the network returns $\\beta = 1/3$, so the amplifier must run at $A = 1/\\beta = 3$: a non-inverting stage with $1 + R_f/R_i = 3$, that is $R_f = 2R_i$ — for instance $R_i = 10\\,\\text{k}\\Omega$, $R_f = 20\\,\\text{k}\\Omega$.' },
          { label: 'Step 3: Wire the stabilizer', text: 'Replace the fixed $R_f$ path with the lamp arrangement: the lamp in series with a resistor forms the gain leg, so growing output amplitude raises lamp resistance and drags the gain down to exactly 3. Slightly over-design the cold gain (say 3.3) so startup is guaranteed.' },
          { label: 'Step 4: Check the margins', text: 'Cold-lamp loop gain $A\\beta = 3.3/3 = 1.10 > 1$: the oscillation grows from noise within a few hundred cycles. As the lamp warms, the gain slides down to 3.00 and the loop gain to 1 — the Barkhausen criterion, maintained by thermal feedback rather than by clipping.' },
        ],
        result: '$R = 15.9\\,\\text{k}\\Omega$, $C = 0.01\\,\\mu\\text{F}$ gives $f_0 \\approx 1\\,\\text{kHz}$; the gain leg must deliver exactly 3, held there by the lamp: loop gain 1 with undistorted output.',
      },
      {
        title: 'A Colpitts oscillator at 7.12 MHz',
        problem: 'A Colpitts tank uses $L = 10\\,\\mu\\text{H}$ with $C_1 = C_2 = 100\\,\\text{pF}$. Find the oscillation frequency and the feedback fraction.',
        steps: [
          { label: 'Step 1: Effective tank capacitance', text: 'The two divider capacitors are in series around the tank loop: $C_{eff} = C_1C_2/(C_1+C_2) = (100 \\times 100)/(100+100) = 50\\,\\text{pF}$ — half of either capacitor, the series-combination rule of Chapter 4.' },
          { label: 'Step 2: Resonant frequency', text: '$f_0 = 1/(2\\pi\\sqrt{LC_{eff}}) = 1/(2\\pi\\sqrt{10 \\times 10^{-6} \\times 50 \\times 10^{-12}}) = 1/(2\\pi \\times 2.236 \\times 10^{-8}) = 7.12\\,\\text{MHz}$.' },
          { label: 'Step 3: Feedback fraction', text: 'The voltage at the tap between the series capacitors is the fraction $C_1/(C_1+C_2) = 100/200 = 0.5$ of the tank voltage — so the amplifier sees half of its own output returned, and needs a gain of at least 2 (plus loss margin) for Barkhausen.' },
          { label: 'Step 4: Design notes', text: 'A smaller $C_2$ relative to $C_1$ returns less signal (safer against overdrive but demanding more gain); increasing both capacitors pulls $f_0$ down as $1/\\sqrt{C}$. Stray capacitances of a few pF are already per-cent-level players at 100 pF, which is one reason the crystal of the next example exists.' },
        ],
        result: '$C_{eff} = 50\\,\\text{pF}$, $f_0 = 7.12\\,\\text{MHz}$, feedback fraction $C_1/(C_1+C_2) = 0.5$ — a gain of at least 2 plus loss margin closes the loop.',
      },
      {
        title: 'Series and parallel resonance of a 10 MHz crystal',
        problem: 'A 10 MHz quartz crystal has motional elements $L_m = 25.3\\,\\text{mH}$, $C_m = 0.01\\,\\text{pF}$ (10 fF), $R_m = 16\\,\\Omega$, with holder capacitance $C_0 = 4\\,\\text{pF}$. Compute both resonances and the Q factor.',
        steps: [
          { label: 'Step 1: Series resonance', text: 'The motional arm rings at $f_s = 1/(2\\pi\\sqrt{L_mC_m}) = 1/(2\\pi\\sqrt{25.3 \\times 10^{-3} \\times 10^{-14}}) = 10.000\\,\\text{MHz}$ — the number printed on the can.' },
          { label: 'Step 2: Parallel resonance', text: 'Above $f_s$ the motional arm is inductive; it resonates with $C_0$ at $f_p = f_s\\sqrt{1 + C_m/C_0} = 10\\,\\text{MHz} \\times \\sqrt{1 + 0.01/4} = 10\\,\\text{MHz} \\times 1.00125 = 10.0125\\,\\text{MHz}$.' },
          { label: 'Step 3: The inductive window', text: 'The crystal is inductive only between 10.0000 and 10.0125 MHz — a window 125 ppm wide. A Pierce oscillator parks itself inside it, and the enormous phase slope across the window is what pins the frequency against amplifier drift.' },
          { label: 'Step 4: Q factor', text: '$Q = \\omega_s L_m/R_m = (2\\pi \\times 10^7 \\times 25.3 \\times 10^{-3})/16 = 1.59 \\times 10^6/16 \\approx 10^5$. Compare the practical LC coil of Hughes Example 14.2 at $Q = 14.1$: four orders of magnitude better, and the reason crystal oscillators hold ppm while LC circuits hold per cent.' },
        ],
        result: '$f_s = 10.000\\,\\text{MHz}$, $f_p = 10.0125\\,\\text{MHz}$ (window 125 ppm), $Q \\approx 10^5$ — a few thousand times the Q of a good practical LC tank.',
      },
    ],
    keyTakeaways: [
      'The Wien bridge network has zero phase shift and attenuation 3 at $f_0 = 1/(2\\pi RC)$ — so the amplifier gain must be exactly 3, met dynamically by the lamp/AGC story.',
      'Amplitude control by a lamp, thermistor or JFET averages over many cycles, giving 0.1-per-cent-class sine purity that clipping cannot match.',
      'LC oscillators tap the tank with a capacitive divider (Colpitts, $C_{eff} = C_1C_2/(C_1+C_2)$) or a tapped inductor (Hartley); the parallel tank presents its dynamic resistance $L/(CR_S)$ to the amplifier.',
      'A quartz crystal is a motional $L_mC_mR_m$ arm shunted by $C_0$: series resonance $f_s = 1/(2\\pi\\sqrt{L_mC_m})$ with a parallel resonance $f_p = f_s\\sqrt{1 + C_m/C_0}$ just above it.',
      'Between $f_s$ and $f_p$ the crystal is inductive over a window tens to hundreds of ppm wide — the operating region of the Pierce oscillator and microcontroller clocks.',
      'Q is the stability currency: $Q \\approx 14$ for a practical LC coil, $Q \\approx 10^5$ for a crystal — and TCXO or OCXO techniques push crystal stability below 1 ppm.',
    ],
    quiz: [
      {
        q: 'In a Wien bridge oscillator, why must the amplifier gain be exactly 3?',
        options: ['Because the op-amp has two inputs and one output', 'Because the RC network attenuates by exactly 3 at the zero-phase frequency, so loop gain unity demands it', 'Because three time constants set the frequency', 'Because the lamp triples the output amplitude'],
        answer: 1,
        explanation: 'At $f_0 = 1/(2\\pi RC)$ the lead–lag network contributes no phase shift and passes exactly one-third of the output. The Barkhausen criterion $|A\\beta| = 1$ then fixes $A = 3$; any higher and the amplitude grows until distortion or the lamp brings the average gain back down.',
      },
      {
        q: 'A Colpitts oscillator uses $C_1 = C_2 = 100\\,\\text{pF}$ and $L = 10\\,\\mu\\text{H}$. What capacitance resonates with the inductor?',
        options: ['200 pF, the sum of the divider capacitors', '50 pF, the series combination of the divider capacitors', '100 pF, either capacitor alone', '25 pF, the parallel combination of the divider capacitors'],
        answer: 1,
        explanation: 'Around the loop the two divider capacitors are in series, so the tank sees $C_{eff} = C_1C_2/(C_1+C_2) = 50\\,\\text{pF}$, giving $f_0 = 1/(2\\pi\\sqrt{LC_{eff}}) = 7.12\\,\\text{MHz}$ with this inductor.',
      },
      {
        q: 'Between its series resonance $f_s$ and parallel resonance $f_p$, a quartz crystal behaves electrically as:',
        options: ['A pure resistance equal to $R_m$', 'A capacitance slightly larger than $C_0$', 'An inductance, which is why Pierce-style oscillators work there', 'An open circuit, blocking all current'],
        answer: 2,
        explanation: 'Above $f_s$ the motional arm is inductive, and it stays so until it parallel-resonates with the holder capacitance $C_0$ at $f_p$. In that narrow window the crystal replaces the inductor of an LC oscillator — with ten thousand times the Q.',
      },
      {
        q: 'What does the lamp in a Wien bridge oscillator actually do?',
        options: ['It clips the output peaks to hold amplitude constant', 'Its resistance rises with the output amplitude, smoothly reducing the gain to exactly 3', 'It filters the harmonics out of the output', 'It sets the oscillation frequency together with the timing capacitor'],
        answer: 1,
        explanation: 'The lamp is the AGC element: more output means more lamp current, a warmer filament, higher resistance, and therefore lower closed-loop gain. Because its thermal time constant spans many cycles, it regulates amplitude without distorting individual waveforms — Hewlett 1939, and the founding product of Hewlett-Packard.',
      },
      // PYQ-pattern: DRDO 2017 — Wien bridge oscillation frequency (rephrased, values changed)
      {
        q: 'A Wien bridge oscillator uses R = 16 kΩ and C = 10 nF in each arm of its frequency-selective network. Its oscillation frequency is closest to:',
        options: ['99 Hz', '320 Hz', '628 Hz', '995 Hz'],
        answer: 3,
        explanation: 'Step 1 — Given: $R = 16$ kΩ, $C = 10$ nF in the series and shunt arms. Step 2 — Governing condition: the bridge balances with zero phase at $f_{0} = \\frac{1}{2\\pi RC}$, and sustained oscillation needs a non-inverting gain of $3$ to meet the unity-loop criterion. Step 3 — Algebra: $RC = 16 \\times 10^{3} \\times 10 \\times 10^{-9} = 1.6 \\times 10^{-4}$ s; $f_{0} = \\frac{1}{2\\pi \\times 1.6 \\times 10^{-4}} \\approx 994.7$ Hz. Step 4 — Sanity check: kilohms with tens of nanofarads land near $1$ kHz, larger $R$ or $C$ would lower the tone, and the required gain of $3$ is independent of these values. Step 5 — Distractor analysis: 99 Hz slips a decade, 320 Hz drops $2\\pi$, and 628 Hz confuses angular with cyclic frequency. Step 6 — Conclude: oscillation sits near 995 Hz.',
      },
    ],
  },
]

// ============================================================================
// Formula sheet — Chapter 17
// ============================================================================

export const elecCh17Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch17',
    section: '17.1',
    name: 'Barkhausen criterion',
    formula: '|Aβ| = 1 at 0° loop phase (360°)',
    note: 'sustained oscillation; design above 1, stabilize down to it',
    latex: '|A\\beta| = 1, \\quad \\angle A\\beta = 0^{\\circ}',
  },
  {
    chapterId: 'elec-ch17',
    section: '17.1',
    name: 'Resonant frequency of an LC tank',
    formula: 'f_r = 1/(2π√(LC))',
    note: 'Hughes eq. [14.5]; sets the oscillation frequency',
    latex: 'f_r = \\frac{1}{2\\pi\\sqrt{LC}}',
  },
  {
    chapterId: 'elec-ch17',
    section: '17.1',
    name: 'Q factor (energy and loss forms)',
    formula: 'Q = ω_r L/R = 2π · (energy stored)/(energy lost per cycle)',
    note: 'Hughes [14.7]–[14.9]; the loss budget the amplifier must fund',
    latex: 'Q = \\frac{\\omega_r L}{R} = 2\\pi\\,\\frac{W_{\\text{stored}}}{\\Delta W_{\\text{cycle}}}',
  },
  {
    chapterId: 'elec-ch17',
    section: '17.2',
    name: 'Relaxation oscillator period',
    formula: 'T = 2RC·ln((1+γ)/(1−γ)); γ = ½ → T = 2RC·ln 3',
    note: 'γ = R₂/(R₁+R₂) is the hysteresis fraction',
    latex: 'T = 2RC\\ln\\!\\frac{1+\\gamma}{1-\\gamma}; \\quad \\gamma = \\tfrac{1}{2} \\Rightarrow T = 2RC\\ln 3',
  },
  {
    chapterId: 'elec-ch17',
    section: '17.2',
    name: '555 astable frequency',
    formula: 'f = 1.44/((R_A + 2R_B)·C)',
    note: 'T_high = 0.693(R_A+R_B)C, T_low = 0.693·R_B·C',
    latex: 'f = \\frac{1.44}{(R_A + 2R_B)\\,C}',
  },
  {
    chapterId: 'elec-ch17',
    section: '17.2',
    name: '555 monostable pulse width',
    formula: 'T = 1.1·R·C (= RC·ln 3)',
    note: 'charge from 0 to ⅔V_CC through R',
    latex: 'T = RC\\ln 3 \\approx 1.1RC',
  },
  {
    chapterId: 'elec-ch17',
    section: '17.3',
    name: 'Wien bridge frequency and gain',
    formula: 'f₀ = 1/(2πRC); network β = 1/3 → A = 3',
    note: 'zero phase shift only at f₀; lamp holds A at exactly 3',
    latex: 'f_0 = \\frac{1}{2\\pi RC}, \\quad \\beta = \\tfrac{1}{3} \\;\\Rightarrow\\; A = 3',
  },
  {
    chapterId: 'elec-ch17',
    section: '17.3',
    name: 'Colpitts tank and crystal resonances',
    formula: 'C_eff = C₁C₂/(C₁+C₂); f_p = f_s·√(1 + C_m/C₀)',
    note: 'series capacitors set the tank; crystal window is ppm-wide',
    latex: 'C_{\\text{eff}} = \\frac{C_1C_2}{C_1+C_2}; \\quad f_p = f_s\\sqrt{1+\\frac{C_m}{C_0}}',
  },
]
