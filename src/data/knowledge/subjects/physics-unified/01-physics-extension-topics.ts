/**
 * Knowledge Universe — Physics — Chapter 01: Physics — Extension Topics
 * 4 lessons · ~4,857 words
 * field: Physics
 * legacy sources: physical-sciences.ts, x45-exam-gap-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Physics]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 phys-electronics-signals-amplifiers — Electronics: Signals, Amplifiers and Sensing Circuits
 *   01.2 phys-angular-momentum — Angular Momentum and Rotational Dynamics
 *   01.3 phys-entropy-second-law — Entropy and the Second Law
 *   01.4 phys-special-relativity — Special Relativity: Time, Length and the Speed Limit
 */
import type { KnowledgeTopic } from '../../types'

export const physicsUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'phys-electronics-signals-amplifiers',
    title: 'Electronics: Signals, Amplifiers and Sensing Circuits',
    domain: 'Physical Sciences',
    field: 'Physics',
    branch: 'Electronics',
    tier: 'core',
    concepts: [
      'Analogue versus digital signals',
      'Sampling rate and resolution',
      'The ideal operational amplifier\u2019s three rules',
      'Inverting, non-inverting, summing and comparator modes',
      'Thermistor and LDR sensing with potential dividers',
      'RC networks for timing and smoothing',
    ],
    words: 1798,
    readMins: 9,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'A physics course meets electronics twice: first as passive circuits, where resistors, capacitors and inductors obey Kirchhoff\u2019s laws and nothing controls anything; then as active circuits, where a device adjusts its own output using what it senses. The operational amplifier is the gateway to that second meeting. Feed it a signal from a sensor, let it compare, amplify or sum, and a physics problem — "the bridge is getting colder, sound the alarm" — becomes a circuit. This lesson builds that chain: signals first, then the amplifier\u2019s ideal rules and working modes, then the sensor networks that feed it, then the RC timing circuits that shape its world in time.',
      },
      {
        kind: 'para',
        text: 'One boundary needs stating at the start. This is the ideal-amplifier treatment: we assume the amplifier is perfect, derive its gains from that assumption, and design circuits on paper. The real device — what actually happens inside the black box, its offsets and limits, its transistor internals — is the territory of the electronics engineering volume in this library. The ideal treatment is not a toy: it is the design layer every engineer uses first, and its arithmetic is exact within the assumptions.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every measurement instrument you have used — thermometer, light meter, microphone input, the sensor in your phone — is a sensing circuit feeding an amplifier feeding a display or a digitizer. The potential divider plus comparator you will build in this lesson is, in miniature, the architecture of all of them; the same three op-amp rules govern audio gear and industrial controllers alike.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Analogue and Digital Signals' },
      {
        kind: 'para',
        text: 'An analogue signal is a voltage or current that varies continuously in step with the quantity it represents — a microphone\u2019s output glides through every intermediate value as the sound pressure changes. A digital signal takes only discrete levels, in the simplest case two: high and low, one and zero. The conversion from analogue to digital happens by sampling: the instantaneous value is measured at regular intervals, and each measurement is stored as a number. Two parameters decide the quality of that representation. The sampling rate — how many measurements per second — sets the fastest variation that can be captured; sample too slowly and the digital version misrepresents the signal, the problem the sampling theorem formalizes by requiring more than twice the highest frequency present. The resolution — how many distinct levels the measurement can distinguish, set by the number of bits — sets how fine the height differences are. A compact disc standard of 44,100 samples per second at 16 bits was chosen by exactly these two trade-offs.',
      },
      { kind: 'heading', text: 'The Ideal Operational Amplifier' },
      {
        kind: 'para',
        text: 'The operational amplifier is a five-terminal device: two inputs marked + (non-inverting) and − (inverting), an output, and two power-supply rails. Its behavior follows from three ideal properties. The open-loop gain is effectively infinite — the output swings to whatever value makes the two inputs equal, until it hits the supply rails and saturates. The input impedance is effectively infinite — the inputs draw no current. The output impedance is effectively zero — the output holds its voltage regardless of load. With no feedback path, the amplifier works as a comparator: whichever input is higher, the output saturates to the corresponding rail. With negative feedback — a connection from output back to the inverting input — the circuit settles where the two inputs sit at the same potential, and the gain arithmetic follows.',
      },
      {
        kind: 'para',
        text: 'The inverting amplifier feeds the input through resistor Rin to the − input, with feedback resistor Rf from output to −. The + input is earthed, so feedback forces the − input to earth potential too — the virtual earth. No current flows into the amplifier itself, so the current through Rin equals the current through Rf: Vin/Rin = −Vout/Rf, giving the gain Vout/Vin = −Rf/Rin. The minus sign is literal: the output is inverted. The non-inverting amplifier feeds the signal to the + input and taps the output back through a divider; the feedback forces the − input to equal Vin, and the divider arithmetic gives Vout/Vin = 1 + Rf/R1 — always at least unity, and never inverted. The summing amplifier extends the inverting design with several input resistors into the same virtual earth; the output is the weighted negative sum of the inputs, each weighted by Rf over its own resistor — an analogue adder.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Design brief: amplify a sensor output of 0.40 V by a factor of +11, without inversion.',
          'Pick the mode: non-inverting — the gain formula is 1 + Rf/R1 and always positive.',
          'Solve the resistors: 1 + Rf/R1 = 11 gives Rf = 10 R1; choose R1 = 1.0 kΩ and Rf = 10 kΩ (standard values, ratio exact).',
          'Compute the output: Vout = 11 × 0.40 V = 4.4 V — inside the supply rails, so no clipping.',
          'Check the input: the + input draws no current, so the sensor is not loaded — a weaker sensor that would sag into a resistive load works fine here.',
          'Flip to compare: the same op-amp with no feedback and the sensor on the + input against a 4.4 V reference on the − input becomes a comparator — output saturates high only when the sensor exceeds the threshold. Amplifier for measurement, comparator for decision: one device, two jobs.',
        ],
      },
      { kind: 'heading', text: 'Sensing Circuits: Thermistors and LDRs' },
      {
        kind: 'para',
        text: 'Sensors translate a physical quantity into resistance. The thermistor used in these circuits is NTC — negative temperature coefficient: its resistance falls as temperature rises, from megaohms in frost to a few hundred ohms warm. The light-dependent resistor does the same with illumination: bright light floods the semiconductor with charge carriers and the resistance collapses; darkness leaves it high. Neither sensor produces a voltage, so both go into a potential divider: sensor and fixed resistor across the supply, with the junction voltage — the divider output — the quantity that moves when the world does.',
      },
      {
        kind: 'para',
        text: 'Which resistor the output is taken across decides the sense of the response. Put the thermistor on top (to the supply) and take the output across the fixed resistor at the bottom: cold makes the thermistor\u2019s resistance rise, pulling more of the supply across it and leaving the output low — so output rises with temperature. Swap positions and the sense inverts. A frost warning is then two components past the divider: the divider output to the comparator\u2019s + input, a preset reference voltage to the − input, and a buzzer on the output. The comparator saturates high when the divider output falls below the reference (thermistor on top), sounding the alarm; the preset knob sets exactly what counts as frost. The LDR version, positioned to raise its output in darkness, is an automatic night light — identical mathematics.',
      },
      { kind: 'heading', text: 'RC Networks: Timing and Smoothing' },
      {
        kind: 'para',
        text: 'The resistor-capacitor pair is electronics\u2019 clock. Charge a capacitor C through a resistor R from a constant supply: the capacitor voltage rises along a curve that reaches 63 percent in one time constant, τ = R × C, and is effectively full after about five. Discharge through the same resistor falls along the mirror curve, losing 63 percent in one τ. The time constant is the design dial: R = 100 kΩ with C = 10 μF gives one second — a timer; R = 100 Ω with C = 100 μF gives ten milliseconds — a smoother.',
      },
      {
        kind: 'para',
        text: 'Smoothing is the classic application. Rectified mains is a train of humps at twice the frequency, falling to zero between peaks; a capacitor across the output charges to each peak and discharges through the load in the gaps. If RC is much longer than the gap between peaks, the discharge barely sags before the next peak refills it, and the load sees a steady voltage with a small ripple — the larger the time constant, the smaller the ripple. Timing is the other face: the same curve, read deliberately, produces a delay — the light that stays on for thirty seconds after the sensor stops seeing motion is an RC network counting in time constants.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'sampling rate', def: 'How many times per second an analogue quantity is measured for digital storage; it must exceed twice the highest frequency present to capture the signal faithfully.' },
          { term: 'virtual earth', def: 'The inverting input of a feedback op-amp, held at earth potential without being connected to earth — the key to the inverting gain formula.' },
          { term: 'saturation', def: 'The op-amp output pinned at or near a supply rail because the inputs are unbalanced beyond what the finite gain can correct.' },
          { term: 'thermistor', def: 'A temperature sensor whose resistance falls as temperature rises (NTC type); used in potential-divider sensing circuits.' },
          { term: 'LDR', def: 'Light-dependent resistor: resistance falls with illumination; pairs with a comparator to make light- and dark-triggered switches.' },
          { term: 'time constant', def: 'τ = RC, the number of seconds an RC circuit needs to complete 63 percent of any charge or discharge change — the unit of RC timing.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The inverting amplifier has Rf = 20 kΩ and Rin = 2 kΩ. A −0.10 V input produces what output?',
            options: ['+1.0 V', '−1.0 V', '+2.0 V', '−2.0 V'],
            answer: 0,
            explain: 'Gain = −Rf/Rin = −10; output = −10 × (−0.10 V) = +1.0 V. The double minus — inverted gain, negative input — lands positive.',
          },
          {
            q: 'Why is the − input of a working inverting amplifier called a virtual earth?',
            options: ['It is connected to earth through Rin', 'Feedback holds it at earth potential though no wire touches earth', 'It has infinite impedance to earth', 'It alternates polarity at the supply frequency'],
            answer: 1,
            explain: 'Negative feedback drives the output to whatever voltage equalizes the inputs; with + earthed, − sits at earth potential — virtual, not literal.',
          },
          {
            q: 'A thermistor sits between supply and the output node, a fixed resistor from the node to earth. As temperature rises, the node voltage…',
            options: ['rises, because the thermistor\u2019s resistance falls and takes less of the supply', 'falls, because the thermistor conducts better', 'stays constant — dividers are ratiometric', 'falls to zero at any warmth'],
            answer: 0,
            explain: 'Warmer thermistor = lower resistance = smaller share of the supply across it = more across the fixed resistor, where the output is taken. Swap the two and the sense inverts.',
          },
          {
            q: 'Rectified mains humps arrive every 10 ms. For effective smoothing, the RC time constant should be…',
            options: ['much shorter than 10 ms', 'about 5 ms', 'much longer than 10 ms', 'exactly equal to 10 ms'],
            answer: 2,
            explain: 'The capacitor must survive the gap between peaks; RC far larger than the peak spacing keeps the discharge shallow and the ripple small.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The Electronics & Communication volume continues this road into the real device: op-amp internals, active filters, oscillators and data converters. The electric-circuits chapters strengthen the divider and capacitor analysis used here, and the control-systems track shows the same comparator idea growing into feedback control.',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-angular-momentum',
    title: 'Angular Momentum and Rotational Dynamics',
    domain: 'Physical Sciences',
    field: 'Physics',
    branch: 'Classical Mechanics',
    tier: 'intermediate',
    concepts: [
      'Moment of inertia',
      'Torque as the rotational analogue of force',
      'Angular momentum L = Iω',
      'Conservation of angular momentum',
      'Rotational kinetic energy',
      'Precession and gyroscopes',
    ],
    words: 882,
    readMins: 4,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Rotating bodies obey a mechanics built from angular analogues of force, mass, and momentum. In Classical Mechanics, torque plays force, moment of inertia plays mass, and angular momentum plays linear momentum — conserved whenever no external torque acts, connecting skaters, gyroscopes, and planets.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every machine with a spinning part — turbines, hard drives, drone rotors — is engineered with these equations. The same conservation lets spacecraft turn by spinning internal wheels and explains why planets sweep their orbits at varying speeds.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Moment of inertia measures how mass is distributed about the rotation axis, not merely how much there is. A point mass m at radius r contributes mr², so moving mass outward raises the total quadratically — a rim-weighted wheel is far harder to spin up than an equal-mass disk.',
      },
      {
        kind: 'para',
        text: 'Torque is the turning effectiveness of a force: r times F times the sine of the angle between them. A long wrench frees a stubborn bolt with less force because its lever arm is larger.',
      },
      {
        kind: 'para',
        text: 'Angular momentum L = Iω couples rotational inertia with spin rate; for a point mass it can be written mvr. Rotational dynamics compresses into one sentence: net torque equals the rate of change of L — torques, not forces, change rotational motion.',
      },
      {
        kind: 'para',
        text: 'With zero net external torque, L stays constant, so a shrinking moment of inertia forces angular velocity to grow. A skater pulling her arms in roughly halves her moment of inertia and nearly doubles her spin rate — no push needed.',
      },
      {
        kind: 'para',
        text: 'A rotating body carries kinetic energy, half of I times ω squared, alongside any translational half-mv-squared. Flywheels store grid energy this way, and rolling objects split energy between the two forms — why a hoop and a disk race down a ramp differently.',
      },
      {
        kind: 'para',
        text: 'A spinning gyroscope pushed at one end does not fall but slowly circles: the torque changes the direction of the angular-momentum vector, not its magnitude. Earth\u2019s 26,000-year axial wobble follows the same logic.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Angular momentum',
        latex: 'L = I\\omega',
        meaning: 'Moment of inertia times angular velocity — the rotational counterpart of p = mv.',
      },
      {
        kind: 'formula',
        name: 'Rotational second law',
        latex: '\\tau = I\\alpha = \\frac{dL}{dt}',
        meaning: 'Net torque equals the rate of change of angular momentum.',
      },
      {
        kind: 'formula',
        name: 'Rotational kinetic energy',
        latex: 'K_{\\text{rot}} = \\tfrac{1}{2}I\\omega^2',
        meaning: 'Energy stored in rotation, additive with translational energy.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how a skater\u2019s spin rate changes when she pulls her mass in, given angular speed 2.0 rad/s and a moment of inertia falling from 4.6 to 1.8 kg·m².',
          'Recall the governing idea: with negligible external torque, angular momentum L = Iω is conserved.',
          'Apply: I₁ω₁ = I₂ω₂ gives ω₂ = (4.6 × 2.0) / 1.8 ≈ 5.1 rad/s; her rotational energy rises from 9.2 J to about 23.5 J.',
          'State the result: the spin rate grows roughly 2.6-fold, the extra kinetic energy paid for by muscular work.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Figure skaters and divers compact or extend their bodies to control spin rate mid-air.',
          'Spacecraft reorient using reaction wheels, expending no propellant.',
          'Kepler\u2019s equal-areas law is this conservation applied to orbits.',
          'Grid-scale flywheel plants bank energy as rotation for later discharge.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Students often treat moment of inertia like ordinary mass, forgetting it depends on the chosen axis and on how far mass sits from it. Another slip is invoking conservation while friction or other external torque is present — the law needs net external torque to vanish.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Moment of inertia', def: 'Resistance to angular acceleration, summing mass elements times distance-from-axis squared.' },
          { term: 'Torque', def: 'The turning effect of a force, rF sinθ about the chosen axis.' },
          { term: 'Angular momentum', def: 'Rotational momentum L = Iω, conserved when net external torque is zero.' },
          { term: 'Angular velocity', def: 'Rate of rotation in radians per second.' },
          { term: 'Precession', def: 'Slow rotation of a spinning body\u2019s axis under an applied torque.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A skater pulls her arms in, halving her moment of inertia. Her angular velocity:',
            options: ['Halves', 'Stays the same', 'Doubles', 'Drops to zero'],
            answer: 2,
            explain: 'With L = Iω conserved, halving I forces ω to double.',
          },
          {
            q: 'Two equal-mass wheels: one a solid disk, one a hoop with all mass at the rim. Which has the larger moment of inertia?',
            options: ['The disk', 'The hoop', 'They are equal', 'It depends only on the radius'],
            answer: 1,
            explain: 'Rim mass sits at the full radius, maximizing the sum of mr².',
          },
          {
            q: 'A gyroscope supported at one end drifts in a circle instead of falling because:',
            options: ['Gravity is balanced by air resistance', 'The torque changes the direction of L, producing precession', 'Angular momentum is not conserved', 'Its center of mass slowly rises'],
            answer: 1,
            explain: 'The torque rotates the angular-momentum vector sideways, so the axis traces a cone.',
          },
          {
            q: 'For a body with no net external torque:',
            options: ['Angular velocity is constant', 'Angular momentum is constant', 'Rotational kinetic energy is constant', 'Moment of inertia is constant'],
            answer: 1,
            explain: 'The conserved quantity is L = Iω; ω can still change if I does.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: Newton\u2019s laws, linear momentum, and circular motion. Next come rigid-body dynamics, orbital mechanics, and angular momentum in quantum mechanics; pair it with energy methods for a full toolkit.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Torque is the rotational analogue of force, with τ = dL/dt.',
          'Moment of inertia depends on mass distribution about the axis.',
          'L = Iω is conserved when torque vanishes; skaters spin faster when compact.',
          'Rotational kinetic energy ½Iω² rides alongside translational ½mv².',
          'Gyroscopic precession is a torque rotating the angular-momentum vector.',
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-entropy-second-law',
    title: 'Entropy and the Second Law',
    domain: 'Physical Sciences',
    field: 'Physics',
    branch: 'Thermodynamics',
    tier: 'intermediate',
    concepts: [
      'Clausius and Kelvin statements of the second law',
      'Entropy change and reversible heat flow',
      'Boltzmann\u2019s microstate picture',
      'Irreversibility and the arrow of time',
      'Heat engines and the Carnot limit',
      'Gibbs free energy and spontaneity',
    ],
    words: 894,
    readMins: 4,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'The second law singles out which processes happen on their own: those that increase the total entropy of the universe. In Thermodynamics, entropy wears two faces — a macroscopic bookkeeping of heat flow through ΔS = Q/T, and Boltzmann\u2019s microscopic count of arrangements — together explaining irreversibility, the engine-efficiency ceiling, and the arrow of time.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every engine, refrigerator, and power plant is bounded by second-law limits no engineering can beat. The same law explains why heat flows hot to cold, why perpetual motion fails, and why time has a direction.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Two classic statements anchor the law. Clausius: heat never flows spontaneously from cold to hot. Kelvin: no engine converts heat entirely into work with no other effect. Violate one and you can build a device that violates the other.',
      },
      {
        kind: 'para',
        text: 'For reversible heat Q at temperature T, entropy changes by Q divided by T. Dump 1000 J into a 100 K reservoir and you add 10 J/K; the same joules into a 1000 K reservoir add only 1 J/K — the arithmetic behind hot-to-cold flow.',
      },
      {
        kind: 'para',
        text: 'Boltzmann\u2019s S = k ln W counts microstates, the arrangements consistent with the macroscopic description. A gas spread evenly through a box has astronomically more arrangements than one crowded into a corner — why you never observe spontaneous crowding.',
      },
      {
        kind: 'para',
        text: 'Macroscopic irreversibility is statistics, not decree: nothing forbids every air molecule gathering in one corner — it is just so improbable the universe never waits to see it.',
      },
      {
        kind: 'para',
        text: 'An engine takes heat from a hot reservoir each cycle, converts part to work, and dumps the rest into a cold reservoir. The Carnot bound, one minus T_c over T_h, is the best any engine between those temperatures can do; real machines fall short.',
      },
      {
        kind: 'para',
        text: 'At constant temperature and pressure, ΔG = ΔH − TΔS bundles energy and entropy; spontaneity requires negative ΔG. An endothermic process can still proceed if it creates enough entropy to pay the bill.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Entropy change (reversible)',
        latex: '\\Delta S = \\frac{Q_{\\text{rev}}}{T}',
        meaning: 'Entropy transferred per unit of heat at temperature T.',
      },
      {
        kind: 'formula',
        name: 'Boltzmann entropy',
        latex: 'S = k\\ln W',
        meaning: 'Entropy counts microstates W; k is Boltzmann\u2019s constant.',
      },
      {
        kind: 'formula',
        name: 'Carnot efficiency',
        latex: '\\eta_{\\max} = 1 - \\frac{T_c}{T_h}',
        meaning: 'The maximum fraction of heat convertible to work between reservoirs at T_h and T_c.',
      },
      {
        kind: 'formula',
        name: 'Entropy of the universe',
        latex: '\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} \\ge 0',
        meaning: 'Total entropy never decreases — the compact statement of the second law.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the maximum efficiency and waste heat of a plant with a boiler at 800 K and condenser at 300 K, taking in 1000 J per cycle.',
          'Recall the governing idea: no engine beats the Carnot limit η = 1 − T_c/T_h.',
          'Apply: η_max = 1 − 300/800 = 0.625, so at most 625 J becomes work and at least 375 J is rejected.',
          'State the result: even a perfect engine discards 37.5 percent of the heat; a realistic 40-percent plant rejects 600 J per 1000 J — hence cooling towers.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Power-station design fights for every kelvin of cold-end temperature — the condenser sets the ceiling.',
          'Refrigerators run the engine backward, spending work to push entropy from cold interior to warm room.',
          'Metallurgy sets process temperatures where ΔG changes sign, flipping reactions on or off.',
          'Data centers budget for the thermodynamic cost of erasing information — Landauer\u2019s principle.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'A system\u2019s entropy can decrease — a freezer makes ice — as long as the surroundings gain more; only the total is forbidden to fall. The law forbids heat-to-work conversion in a cycle, not work into heat — friction does that happily.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Entropy', def: 'A state function measuring energy dispersal among microscopic arrangements.' },
          { term: 'Microstate', def: 'One microscopic configuration consistent with the macroscopic conditions.' },
          { term: 'Carnot efficiency', def: 'The maximum efficiency of any heat engine between two fixed temperatures.' },
          { term: 'Irreversibility', def: 'The one-way character of macroscopic processes, rooted in statistics.' },
          { term: 'Gibbs free energy', def: 'G = H − TS; its decrease marks spontaneity at constant T and P.' },
          { term: 'Reservoir', def: 'A body so large its temperature barely changes while exchanging heat.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A refrigerator freezes water, lowering the entropy of the water. Does this violate the second law?',
            options: ['Yes, because entropy decreased', 'No — the room gains more entropy than the water loses', 'Only if the door is open', 'Yes, unless the process is reversible'],
            answer: 1,
            explain: 'The law constrains the total: the room\u2019s entropy rises by more than the ice loses.',
          },
          {
            q: 'An engine takes heat from a 900 K source and rejects to a 300 K sink. Its maximum possible efficiency is:',
            options: ['33 percent', '50 percent', '67 percent', '100 percent'],
            answer: 2,
            explain: 'The Carnot limit is 1 − 300/900 = 2/3, about 67 percent.',
          },
          {
            q: 'Which of these is forbidden by the second law?',
            options: ['Converting work entirely into heat', 'Heat flowing from cold to hot when work is supplied', 'A cyclic engine converting heat entirely into work', 'Entropy of an expanding gas increasing'],
            answer: 2,
            explain: 'The Kelvin statement rules out the perfect heat engine; refrigerators are legal because they consume work.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: temperature, heat, and the first law. After this, study free energy in chemistry, statistical mechanics, and information theory, where entropy reappears in a surprising costume.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'The second law: total entropy never decreases.',
          'ΔS = Q_rev/T — the same heat adds more entropy to a colder body.',
          'S = k ln W grounds entropy in counting arrangements.',
          'No engine between T_h and T_c beats 1 − T_c/T_h.',
          'ΔG < 0 decides spontaneity; local order can be bought by exporting entropy.',
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-special-relativity',
    title: 'Special Relativity: Time, Length and the Speed Limit',
    domain: 'Physical Sciences',
    field: 'Physics',
    branch: 'Modern Physics',
    tier: 'intermediate',
    concepts: [
      'Two postulates and one stubborn constant',
      'Time dilation: moving clocks run slow',
      'Length contraction along the motion',
      'The relativity of simultaneity',
      'The Lorentz factor γ',
      'Mass–energy equivalence',
    ],
    words: 1283,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'In 1905 a twenty-six-year-old patent clerk asked a disarmingly simple question: what does a beam of light look like if you race alongside it? Albert Einstein\u2019s answer — the same speed for every observer, however they move — quietly retired two centuries of absolute space and time. Special Relativity rebuilds physics around that fixed cosmic speed limit: moving clocks tick slow, moving rulers shrink, and simultaneity itself becomes a matter of viewpoint, all the way down to the energy sleeping inside matter.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Satellite navigation would drift kilometers off course within a day without relativistic clock corrections, particle accelerators stretch unstable lifetimes a thousandfold as routine engineering, and the Sun shines by E = mc². Relativity is not exotic garnish on physics — it is load-bearing infrastructure of the modern world.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Special relativity stands on just two postulates. First, the laws of physics are identical in every inertial frame — no experiment inside a smoothly cruising laboratory can reveal its speed. Second, light in vacuum travels at the same speed c, about 300,000 kilometers per second, for every inertial observer, regardless of how its source moves. The second postulate is the rebel: it refuses common-sense velocity addition, and every strange consequence that follows flows from it.',
      },
      {
        kind: 'para',
        text: 'Picture a clock that ticks by bouncing light between two mirrors. On a spaceship sailing past Earth, that bounce traces a longer zigzag as seen from the ground — and a longer path at one fixed speed takes more time per tick. Earth therefore judges the ship\u2019s clock slow: one hour of ship time can measure ten on the ground. This is time dilation, and it is no illusion; reunited clocks genuinely show different elapsed times.',
      },
      {
        kind: 'para',
        text: 'Motion also compresses distance. A spaceship passing Earth is measured by Earth as shortened along its direction of travel — exactly a factor γ shorter — while its height and width are untouched. The crew sees the reverse: their ship feels normal, but the distance to their destination has shrunk. Length contraction and time dilation are one bookkeeping seen from two chairs, each frame measuring the other\u2019s rulers as short and clocks as slow.',
      },
      {
        kind: 'para',
        text: 'The subtlest consequence concerns the meaning of now. Two lightning strikes that a platform observer sees as simultaneous happen at different moments for an observer on a passing train, whose motion changes how the light from each strike meets them — and neither verdict is more correct. Simultaneity is not a property of distant events alone; it belongs to the frame that measures them. Most relativity paradoxes dissolve once this is respected.',
      },
      {
        kind: 'para',
        text: 'Everything is priced by a single dial, the Lorentz factor γ = 1/√(1 − v²/c²). At everyday speeds γ is indistinguishable from 1, which is why Newton never noticed any of this. At 87 percent of light speed γ reaches 2 — clocks halve their rate, lengths halve — it passes 5 by 98 percent, and it grows without bound as v approaches c: the mathematics that keeps massive matter below the speed limit.',
      },
      {
        kind: 'para',
        text: 'The capstone is E₀ = mc²: rest mass itself is energy, priced at the staggering exchange rate of the speed of light squared. A one-gram paperclip, fully converted, would release about 90 terajoules — a large power plant\u2019s daily output. Nuclear fission and fusion tap a fraction of a percent; matter–antimatter annihilation taps all of it. Mass is not conserved separately from energy — mass-energy is.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Lorentz factor',
        latex: '\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}',
        meaning: 'The single stretch factor of relativity: γ = 1 at rest, near 2 at 0.87c, and unbounded as v → c.',
      },
      {
        kind: 'formula',
        name: 'Time dilation',
        latex: '\\Delta t = \\gamma\\, \\Delta t_0',
        meaning: 'A moving clock\u2019s proper interval Δt₀ is measured from outside as longer by the factor γ.',
      },
      {
        kind: 'formula',
        name: 'Rest energy',
        latex: 'E_0 = mc^2',
        meaning: 'Energy locked in rest mass; the c² factor turns grams into city-scale energies.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how muons born 10 kilometers overhead manage to reach sea level when their own clocks allow only 2.2 microseconds of life.',
          'Recall the governing idea: time dilation — a clock moving at speed v runs slow, as seen from outside, by the factor γ = 1/√(1 − v²/c²).',
          'Apply: at v = 0.995c, γ ≈ 10, so the 2.2-microsecond lifetime dilates to about 22 microseconds; the muon can then cover roughly 0.995 × 3.0×10⁸ m/s × 22 microseconds ≈ 6.6 kilometers, versus only 0.66 kilometers without dilation.',
          'State the result: a substantial fraction of the muons survive the full descent — the same story told in their own frame as an atmosphere contracted to a tenth — so relativity is verified continuously by cosmic rays raining on every square meter.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Satellite navigation systems correct their onboard clocks by about 38 microseconds per day for relativistic effects, or positions would drift by kilometers.',
          'Particle accelerators treat γ factors in the thousands as routine input — at the Large Hadron Collider, protons journey as if the ring were far shorter.',
          'Relativistic inner electrons make gold golden and mercury liquid — chemistry visibly bent by electrons moving at appreciable fractions of c.',
          'Positron-emission tomography turns E = mc² directly into medical images, reading the annihilation photons of electron–positron meeting.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The deepest error is treating relativity as the doctrine that everything is relative — the speed of light, the spacetime interval, and rest mass are absolute, and invariant quantities are the theory\u2019s real anchors. Second, time dilation is not an optical trick or a measurement artifact: reunited clocks disagree permanently, and the twin paradox is resolved by noticing which twin changed frames to turn around.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Inertial frame', def: 'A reference frame in uniform, unaccelerated motion, where physics takes its simplest form.' },
          { term: 'Proper time', def: 'Time measured by a clock traveling with the object — the interval every observer agrees is shortest.' },
          { term: 'Time dilation', def: 'A moving clock observed from outside to run slow by the factor γ.' },
          { term: 'Length contraction', def: 'A moving object measured shorter along its motion by the factor 1/γ.' },
          { term: 'Lorentz factor', def: 'γ = 1/√(1 − v²/c²), the single dial setting all relativistic stretching.' },
          { term: 'Rest energy', def: 'The energy E₀ = mc² carried by mass at rest, released in nuclear and annihilation processes.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A spaceship flashes its headlight while passing you at half the speed of light. You measure the beam at:',
            options: ['Half of c', 'Exactly c', 'One and a half times c', 'Zero'],
            answer: 1,
            explain: 'The second postulate fixes light\u2019s vacuum speed at c for every inertial observer; the source\u2019s motion never adds or subtracts.',
          },
          {
            q: 'A clock crosses your laboratory at 0.87c, where γ ≈ 2. For each second it registers, your clocks record:',
            options: ['0.5 seconds', '1 second', '2 seconds', '4 seconds'],
            answer: 2,
            explain: 'Your frame sees the moving clock slow: Δt = γΔt₀ = 2 × 1 s.',
          },
          {
            q: 'Two supernovae flare simultaneously in Earth\u2019s reference frame. A spacecraft cruising past Earth at half light speed judges them:',
            options: ['Also simultaneous', 'To have occurred at different moments', 'Not to have occurred', 'To have occurred in the same place'],
            answer: 1,
            explain: 'Simultaneity is frame-dependent: the ship\u2019s tilted slice through spacetime cuts the two events at different times, and neither frame is privileged.',
          },
          {
            q: 'The equation E₀ = mc² expresses that:',
            options: ['Energy always moves at light speed', 'Rest mass is a form of energy, with c² as the exchange rate', 'Mass grows without bound as speed rises', 'Light carries the only energy'],
            answer: 1,
            explain: 'Mass and energy are one currency; the huge c² factor is why grams of matter correspond to astronomical energies.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: Newtonian mechanics and wave basics — the Doppler effect especially, which relativity reshapes. Continue with spacetime diagrams and the invariant interval, then general relativity, where gravity becomes geometry; particle physics uses γ as a household number, and the muon calculation above is worth re-deriving by hand.',
        tone: 'path',
      },
    ],
  },
]
