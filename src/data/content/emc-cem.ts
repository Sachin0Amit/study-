import type { SectionContent } from '../library'

// ============================================================================
// EMC & Computational Electromagnetics — Chapters 4–5 of the electromagnetics
// master track (chapters 'ece-e-emc' and 'ece-e-cem', 4 sections each).
// Syllabus scope follows standard university EMC and CEM electives — coupling
// and suppression practice, the measurement framework, and the three pillar
// solvers (FDTD, MoM, FEM) with their stability and cost arithmetic.
// Technical spine follows the standard literature (Ott, "Electromagnetic
// Compatibility Engineering"; Paul, "Introduction to Electromagnetic
// Compatibility"; Taflove & Hagness, "Computational Electromagnetics: The
// Finite-Difference Time-Domain Method"; Harrington, "Field Computation by
// Moment Methods"; Jin, "The Finite Element Method in Electromagnetics";
// Balanis, "Advanced Engineering Electromagnetics"). All worked-example
// numbers were re-verified by hand. Math is LaTeX, rendered by KaTeX via the
// RichText $...$ / $$...$$ pipeline. Product rule: no exam names in UI copy.
// ============================================================================

export const emcCemContent: SectionContent[] = [
  // ------------------------------------------------------------- emc §1
  {
    sectionId: 'ece-e-emc-s1',
    readingTime: 9,
    prerequisites: [
      'Plane-wave propagation and near/far field behaviour (Field Theory chapter)',
      'Decibel arithmetic for voltage, current and power ratios',
      'Basic circuit theory: return paths, impedance, KVL/KCL',
    ],
    intro: 'A circuit that works on the bench and a circuit that works in the field are separated by one reality: every current and voltage change is also a source of electromagnetic energy, and every conductor is partly an antenna. Electromagnetic interference (EMI) is the unwanted transfer of that energy from a source to a victim; electromagnetic compatibility (EMC) is the design discipline that keeps the transfer harmless. Every EMC analysis starts from the same three-box picture — **source, coupling path, victim** — because a cure can only be engineered once the path has been named.',
    objectives: [
      'Classify natural and man-made EMI sources by spectrum, amplitude and repetition',
      'Model interference as a source–path–victim chain and name the coupling mode at work',
      'Distinguish conducted, radiated and common-impedance coupling, including near-field E/H coupling',
      'Estimate capacitive and inductive crosstalk between cables from dV/dt, dI/dt and geometry',
    ],
    concepts: [
      {
        term: 'Source–path–victim model',
        kind: 'definition',
        statement: 'Every interference event decomposes into a **source** that generates unwanted energy, a **coupling path** that delivers it (conducted or radiated) and a **victim** whose noise tolerance is exceeded — interference ends if any one of the three is removed: $$V_{\\text{noise}} \\sim \\underbrace{S(f)}_{\\text{source}} \\times \\underbrace{C(f)}_{\\text{coupling}} \\times \\underbrace{D(f)}_{\\text{victim sensitivity}}.$$',
        detail: 'The multiplicative structure dictates strategy: quiet the source (slow the edges, damp the switching), cut the coupling (separate, shield, filter) or harden the victim (immunity margin). Diagnose in that order — the source is cheapest to fix early in a project, and the victim is often a purchased module that cannot be changed at all. Assessment questions regularly give a symptom ("ADC readings jump when the motor starts") and ask which box each proposed fix attacks.',
      },
      {
        term: 'Natural and man-made sources',
        kind: 'insight',
        statement: 'Natural sources — **lightning** (tens of kA with microsecond-scale rise), **electrostatic discharge** (1–15 kV human-body events with ~1 ns edges) and atmospheric/cosmic noise — are broadband and impulsive; man-made sources — switching converters, motor drives, digital clocks and bus edges — are periodic line spectra whose usable bandwidth follows the rise time as $f \\approx 0.35/t_r$.',
        detail: 'The 0.35/tr rule prices the spectrum: a 2 ns edge keeps significant energy to about 175 MHz, a 5 ns edge to 70 MHz, a 1 ns ESD edge beyond 300 MHz. A 500 kHz switching converter produces narrowband lines spaced every 500 kHz across the band (jitter spreads them into noise-like skirts), while impulsive events smear broadband energy that jams entire receivers. The classic trap: the fastest edge in the system, not the highest clock frequency, sets the EMC problem band.',
      },
      {
        term: 'Conducted, radiated and common-impedance coupling',
        kind: 'method',
        statement: '**Conducted** coupling travels on shared conductors (power lines, signal cables, the ground structure); **radiated** coupling travels as fields, with the near field splitting into electric (capacitive) coupling driven by $C\\,dV/dt$ and magnetic (inductive) coupling driven by $M\\,dI/dt$; **common-impedance** coupling is the conducted special case where two circuits share return impedance: $$V_{\\text{noise}} = I_{\\text{culprit}} \\times Z_{\\text{shared}}.$$',
        detail: 'A practical band split: below roughly 50 MHz interference usually arrives conducted (interconnects are electrically short and poor antennas), above 200–300 MHz it usually arrives radiated, with an untidy transition band where both act. Common-impedance coupling is the sneaky one — tens of milliohms of shared return can inject millivolts of noise straight into a reference node, and it disappears when the return paths are separated, not when anything is shielded. Name the frequency band first, the mechanism second.',
      },
      {
        term: 'Crosstalk between cables',
        kind: 'insight',
        statement: 'Adjacent cables couple capacitively through mutual capacitance $C_c$ and inductively through mutual inductance $M$: the aggressor injects **capacitive crosstalk** $V = Z_v C_c\\, dV/dt$ into victim impedance $Z_v$, and induces **inductive crosstalk** $V = M\\, dI/dt$ around the victim loop, with near-end and far-end components that add or cancel depending on propagation direction.',
        detail: 'Capacitive crosstalk grows with victim impedance (high-Z analog nodes suffer); inductive crosstalk grows with loop area and dI/dt (motor and solenoid cables suffer); both grow with parallel-run length and shrink with separation and twisting. A twisted pair defeats inductive coupling by reversing the coupled polarity every twist; a grounded shield between cables intercepts the electric-field flux of capacitive coupling. The same physics appears on-chip as interconnect crosstalk — but cable-level EMC works in picofarads and metres, not femtofarads and micrometres.',
      },
    ],
    examples: [
      {
        title: 'Common-impedance coupling into an ADC',
        problem: 'A 12-bit ADC digitizes a 0–3.3 V sensor signal. A motor driver on the same board returns its 200 mA switching current through 25 mΩ of ground path shared with the sensor’s analog reference. Find the injected noise and its size in LSBs.',
        steps: [
          { label: 'Step 1', text: 'Common-impedance noise: $V_n = I \\times Z_{shared} = 0.2\\ \\text{A} \\times 25\\ \\text{m}\\Omega = 5\\ \\text{mV}$ appearing directly in series with the reference.' },
          { label: 'Step 2', text: 'Converter step: $\\text{LSB} = 3.3/2^{12} = 3.3/4096 = 0.806\\ \\text{mV}$.' },
          { label: 'Step 3', text: 'Error in codes: $5/0.806 \\approx 6.2$ LSB — the last ~2.5 bits of the converter are noise while the motor switches.' },
          { label: 'Step 4', text: 'Cure at the path: give the motor return its own dedicated trace back to the single-point power return so $Z_{shared} \\to 0$; the noise vanishes with no shielding and no filtering of the signal.' },
        ],
        result: '5 mV of common-impedance noise ≈ 6 LSB of error — eliminated by separating the return paths, not by shielding the signal.',
      },
      {
        title: 'Capacitive crosstalk onto a terminated line',
        problem: 'An aggressor cable carries 3.3 V logic with a 5 ns rise time beside a victim line terminated in 50 Ω; the mutual capacitance is 3 pF. Estimate the coupled spike and the effect of slowing the edge and halving the coupling.',
        steps: [
          { label: 'Step 1', text: 'Slew rate: $dV/dt = 3.3/(5\\ \\text{ns}) = 6.6\\times10^{8}\\ \\text{V/s}$.' },
          { label: 'Step 2', text: 'Injected current: $i_c = C_c\\, dV/dt = 3\\times10^{-12} \\times 6.6\\times10^{8} = 1.98\\ \\text{mA} \\approx 2\\ \\text{mA}$.' },
          { label: 'Step 3', text: 'Victim voltage: $V = i_c Z_v = 1.98\\ \\text{mA} \\times 50\\ \\Omega = 99\\ \\text{mV} \\approx 0.1\\ \\text{V}$ — large against any analog level and against a 0.8 mV ADC step.' },
          { label: 'Step 4', text: 'Levers: doubling the rise time to 10 ns halves the spike; halving $C_c$ by separating or shielding the pair (shield tied to the victim ground) halves it again — both together reach about 25 mV.' },
        ],
        result: '≈100 mV of crosstalk on the 50 Ω victim; edge-slowing plus separation brings it under 25 mV.',
      },
    ],
    keyTakeaways: [
      'Every interference event is source × path × victim — a fix aimed at any one box works, and naming the path is the entire diagnostic game.',
      'Rise time, not clock rate, sets the trouble band: spectral content extends to roughly $0.35/t_r$ (70 MHz for a 5 ns edge).',
      'Conducted coupling dominates below ~50 MHz, radiated above ~300 MHz; common-impedance coupling lives in shared returns and dies only when they are separated.',
      'Capacitive crosstalk $Z_v C_c\\, dV/dt$ punishes high-impedance victims; inductive $M\\, dI/dt$ punishes high-current loops — twisting, separation and shielding attack each in turn.',
    ],
    quiz: [
      {
        q: 'A digital signal with a 5 ns rise time has significant harmonic content up to approximately',
        options: ['140 MHz', '70 MHz', '35 MHz', '350 MHz'],
        answer: 1,
        explanation: 'Step 1: The bandwidth–rise-time rule is $f \\approx 0.35/t_r$. Step 2: With $t_r = 5$ ns, $f = 0.35/(5\\times10^{-9}) = 7\\times10^{7}$ Hz. Step 3: That is 70 MHz. Step 4: 140 MHz belongs to a 2.5 ns edge and 350 MHz to a 1 ns edge — the faster the edge, the wider the interference spectrum.',
      },
      {
        q: 'Two circuits share 40 mΩ of return impedance. One switches 150 mA. The other sees a noise of',
        options: ['6 mV', '600 µV', '60 mV', '0.6 mV'],
        answer: 0,
        explanation: 'Step 1: Common-impedance coupling is $V = I \\times Z_{shared}$. Step 2: $0.15\\ \\text{A} \\times 40\\ \\text{m}\\Omega = 6\\times10^{-3}$ V. Step 3: The noise is 6 mV. Step 4: 60 mV would need 1.5 A; 600 µV would need only 15 mA — both mismatch the given current.',
      },
      {
        q: 'Capacitive crosstalk onto a high-impedance victim node is most directly reduced by',
        options: ['increasing the victim impedance', 'twisting the aggressor conductors', 'shielding the victim line with the shield grounded at the victim end', 'adding series inductance in the aggressor return'],
        answer: 2,
        explanation: 'Step 1: Capacitive coupling is displacement current $C_c\\, dV/dt$ flowing into the victim impedance. Step 2: A grounded shield intercepts that current and diverts it to ground before it reaches the victim. Step 3: Raising the victim impedance would increase $V = i_c Z_v$, the opposite of the goal. Step 4: Twisting attacks inductive (magnetic) coupling by polarity reversal, not capacitive coupling.',
      },
      {
        q: 'Interference at 10 MHz between two boards joined by a 1 m cable most likely arrives by',
        options: ['radiated far-field coupling', 'conducted coupling on the shared cable', 'electrostatic discharge', 'ionospheric reflection'],
        answer: 1,
        explanation: 'Step 1: At 10 MHz the wavelength is 30 m, so a 1 m cable is electrically short — a poor radiating antenna. Step 2: Below roughly 50 MHz, cables carry interference as conducted current far more effectively than they radiate. Step 3: The coupling path is therefore the shared conductor. Step 4: ESD is an impulsive contact event and ionospheric modes are irrelevant at equipment scale.',
      },
    ],
  },

  // ------------------------------------------------------------- emc §2
  {
    sectionId: 'ece-e-emc-s2',
    readingTime: 10,
    prerequisites: [
      'Skin depth and reflection of plane waves at conductor surfaces (Field Theory chapter)',
      'Shielding-effectiveness decibel arithmetic from the EMC filtering lesson context',
      'Ground and return-path concepts from basic circuit theory',
    ],
    intro: 'A shield is not a force field — it is a surface that reflects, absorbs and re-reflects electromagnetic energy, and its performance in decibels is the sum of exactly those contributions. Grounding is not "connecting to dirt" but the deliberate architecture of references and returns; bonding is the low-impedance metal-to-metal joining that makes both actually work at high frequency. Together these practices decide whether an enclosure behaves as an attenuator or as an antenna.',
    objectives: [
      'Compute reflection, absorption and total shielding effectiveness in dB',
      'Predict aperture and seam leakage from the λ/2L slot rule',
      'Distinguish signal, chassis and earth grounds, and break ground loops',
      'Choose between single-point and multipoint grounding and select cable-shield termination',
    ],
    concepts: [
      {
        term: 'Shielding effectiveness',
        kind: 'definition',
        statement: 'Shielding effectiveness is the ratio of the field without and with the shield, expressed in dB as **SE = R + A + B**: **reflection loss** $R$ from the impedance mismatch at the two shield surfaces, **absorption loss** $A = 8.686\\,t/\\delta$ from attenuation inside the conductor (δ = skin depth), and a multiple-reflection correction $B$ that is negative and only matters for thin shields with $t < \\delta$.',
        detail: 'Absorption buys about 8.7 dB per skin depth: one δ of copper attenuates 8.7 dB, five δ about 43 dB. Reflection loss is huge for good conductors at low frequency in the far field — copper reflects roughly 108 dB at 1 MHz — because the shield impedance sits far below 377 Ω. Near-field sources change the split: close to a high-impedance (electric) source reflection still dominates, but close to a low-impedance (magnetic) source at low frequency reflection fails and absorption must do the work — hence thick, high-permeability materials for low-frequency magnetic shielding.',
      },
      {
        term: 'Apertures and seams',
        kind: 'insight',
        statement: 'Any slot, seam or hole acts as a slot antenna: a longest dimension $L$ caps the shield at approximately $$SE_{\\text{aperture}} \\approx 20\\log_{10}\\!\\left(\\frac{\\lambda}{2L}\\right) \\quad (L \\le \\lambda/2),$$ so $L = \\lambda/10$ caps SE at 14 dB and $L = \\lambda/100$ at 34 dB — many small holes always beat one long seam.',
        detail: 'The rule drives enclosure practice: keep every gap below λ/10 at the highest frequency of concern, close seams with conductive gaskets or tight screw pitch, and prefer arrays of small staggered holes over slots of the same total open area (a straight run of holes spaced closer than λ/2 leaks like a single hole of the run length). Displays and vent panels exploit the waveguide-beyond-cutoff bonus: a hole behaves as a below-cutoff waveguide and attenuates more when it is deep (thick material or honeycomb) than its width alone suggests.',
      },
      {
        term: 'Ground types and ground loops',
        kind: 'definition',
        statement: 'A **signal ground** is the reference node for circuit voltages, a **chassis ground** is the enclosure, and **earth** is the protective connection to the planet; a **ground loop** forms when a signal references ground at two points tied together through another conductor — ambient flux threading the loop induces $V = j\\omega B A$, or diverting currents drop noise across the shared segment, both appearing in series with the signal.',
        detail: 'Ground loops bite exactly when interconnects span distance: two instruments, each earthed and joined by a shielded cable, close a loop through the mains earth; 50/60 Hz transformer flux threads it and the circulating current’s IR drop appears as hum. Breakers: reference the signal at one end only (differential receiver or isolator), or shrink the loop area — never lift the safety earth in practice. Balanced differential signalling converts whatever circulates into common-mode that the receiver subtracts.',
      },
      {
        term: 'Grounding architecture and cable shields',
        kind: 'method',
        statement: 'Use **single-point (star) grounding** below roughly 100 kHz so return currents never share impedance, and **multipoint grounding** above roughly 10 MHz — where inductance, not resistance, rules — bonding every return to the nearest reference plane; terminate cable shields **single-ended** for low-frequency analog (avoiding shield-current loops) and **double-ended with 360° contact** for high-frequency digital, where the shield must carry the image current.',
        detail: 'The crossover is set by electrical length: once a cable approaches λ/10, a single-pointed shield becomes an antenna rather than a shield, and bonding at both ends wins despite small circulating currents. Pigtail terminations are the classic defect — 5 cm of pigtail adds tens of ohms of inductive impedance at 100 MHz, wrecking an otherwise good shield, which is why backshells and 360° clamps exist. Bonding closes the loop: every joint in a shield or ground system must be bare metal-to-metal, low impedance and corrosion-protected, or the architecture is fiction.',
      },
    ],
    examples: [
      {
        title: 'Shield effectiveness of a copper box at 1 MHz',
        problem: 'A 0.5 mm thick copper enclosure (µr = 1, σr = 1; skin depth 0.066 mm at 1 MHz) faces a 1 MHz far-field source. Compute absorption loss, reflection loss and total SE.',
        steps: [
          { label: 'Step 1', text: 'Thickness in skin depths: $t/\\delta = 0.5/0.066 = 7.6$ — the wall is 7.6 skin depths thick.' },
          { label: 'Step 2', text: 'Absorption loss: $A = 8.686 \\times 7.6 = 66\\ \\text{dB}$.' },
          { label: 'Step 3', text: 'Far-field reflection loss for copper: $R = 168 - 10\\log_{10}(f\\,\\mu_r/\\sigma_r) = 168 - 10\\log_{10}(10^{6}) = 168 - 60 = 108\\ \\text{dB}$.' },
          { label: 'Step 4', text: 'Total for the seamless metal: $SE = R + A = 108 + 66 = 174\\ \\text{dB}$ — unmeasurably good in principle; real enclosures deliver far less because of seams, as the next example shows.' },
        ],
        result: 'A = 66 dB, R = 108 dB, SE ≈ 174 dB in principle — apertures, not the metal, decide the real number.',
      },
      {
        title: 'The seam that ruins the box',
        problem: 'The same enclosure has an unsealed lid seam 5 cm long. At 600 MHz (λ = 0.5 m), what does the aperture let through, and what longest gap would restore 34 dB?',
        steps: [
          { label: 'Step 1', text: 'Aperture cap: $SE = 20\\log_{10}(\\lambda/2L) = 20\\log_{10}\\!\\left(0.5/(2\\times0.05)\\right) = 20\\log_{10}(5) = 14\\ \\text{dB}$.' },
          { label: 'Step 2', text: 'One 5 cm seam caps the 174 dB enclosure at 14 dB — the shield is the seam, not the metal.' },
          { label: 'Step 3', text: 'For 34 dB: require $\\lambda/2L = 50$, so $L = \\lambda/100 = 5\\ \\text{mm}$ — screw pitch or gasketing must close every gap longer than 5 mm.' },
          { label: 'Step 4', text: 'Verify: $20\\log_{10}(0.5/0.01) = 20\\log_{10}(50) = 34\\ \\text{dB}$, and a post-fix near-field probe scan along the seam should show the hot spot gone.' },
        ],
        result: 'A 5 cm seam leaks 14 dB-worth at 600 MHz; gaps ≤ 5 mm restore 34 dB of aperture attenuation.',
      },
    ],
    keyTakeaways: [
      'SE = R + A + B: reflection from impedance mismatch, absorption 8.686 t/δ, multiple-reflection correction only for shields thinner than a skin depth.',
      'Absorption buys ~8.7 dB per skin depth; low-frequency magnetic fields are the hard case — thickness and permeability, not conductivity, win it.',
      'Apertures rule high-frequency performance: SE ≈ 20log(λ/2L); a 5 cm seam caps any enclosure at 14 dB at 600 MHz.',
      'Star-ground below ~100 kHz, multipoint above ~10 MHz; shields single-ended for low-frequency analog, 360° double-ended for high-frequency digital — never a long pigtail.',
    ],
    quiz: [
      {
        q: 'A shield wall is 3 skin depths thick. Its absorption loss is nearest',
        options: ['26 dB', '8.7 dB', '17 dB', '3 dB'],
        answer: 0,
        explanation: 'Step 1: Absorption loss is $A = 8.686\\,t/\\delta$ dB. Step 2: With $t/\\delta = 3$, $A = 8.686 \\times 3 = 26$ dB. Step 3: 8.7 dB is one skin depth and 17 dB would be two. Step 4: Each additional skin depth adds another 8.7 dB.',
      },
      {
        q: 'A 10 cm seam at 150 MHz (λ = 2 m) limits the shielding effectiveness to about',
        options: ['14 dB', '6 dB', '20 dB', '34 dB'],
        answer: 2,
        explanation: 'Step 1: The slot rule is $SE \\approx 20\\log(\\lambda/2L)$. Step 2: $\\lambda/2L = 2/(2 \\times 0.1) = 10$. Step 3: $20\\log_{10}(10) = 20$ dB. Step 4: 14 dB belongs to L = λ/10 = 20 cm here; the shorter seam performs better.',
      },
      {
        q: 'Ground-loop hum in low-frequency analog instrumentation is best broken by',
        options: ['isolating one end of the interconnect or using a differential receiver', 'bonding the cable shield at both ends', 'using a thicker ground wire', 'raising the signal source impedance'],
        answer: 0,
        explanation: 'Step 1: A ground loop needs two ground references joined by a second conductor path. Step 2: Referencing the signal at one end (isolator, differential input) opens the loop while keeping the safety earths intact. Step 3: Bonding both shield ends would enlarge the loop. Step 4: A thicker wire reduces the series resistance but leaves the induced EMF and loop area untouched.',
      },
      {
        q: 'The cable shield of a 100 MHz digital bus should be terminated',
        options: ['single-ended at the source only', 'through a 5 cm pigtail at one end', 'with 360° contact at both connectors', 'left floating at the load end'],
        answer: 2,
        explanation: 'Step 1: At 100 MHz the wavelength is 3 m, so a typical cable is a significant fraction of λ and needs the return image current on the shield. Step 2: Only a shield bonded at both ends carries that image current and cancels radiation. Step 3: 360° backshell contact keeps the bond inductance low. Step 4: A 5 cm pigtail adds inductive impedance that defeats the shield precisely where it is needed.',
      },
    ],
  },

  // ------------------------------------------------------------- emc §3
  {
    sectionId: 'ece-e-emc-s3',
    readingTime: 9,
    prerequisites: [
      'LC network frequency response and reactance arithmetic',
      'Common-mode vs differential-mode currents (EMC coupling lesson)',
      'Decibel and impedance basics',
    ],
    intro: 'Filters are the EMC components of first and last resort at once: they stand at every boundary where a cable enters an enclosure, because a cable is simultaneously an antenna for what is inside and a delivery route for what is outside. The EMC filter designer thinks in two modes — differential and common — and in parasitics, because a filter is only as good as the high-frequency behaviour of its real, imperfect components.',
    objectives: [
      'Design L, π and T filter stages and compute corner frequency and rolloff in dB/decade',
      'Separate common-mode and differential-mode filter paths, including X and Y capacitors',
      'Select ferrites and chokes from impedance-versus-frequency behaviour and DC bias',
      'Apply transient suppressors and manage component self-resonance in a decoupling ladder',
    ],
    concepts: [
      {
        term: 'EMI filter topologies',
        kind: 'definition',
        statement: 'A low-pass EMI filter attenuates everything above its passband: the **L-section** (one series, one shunt element), the **π** (C–L–C) and the **T** (L–C–L) add about 20 dB/decade per reactive element beyond the corner $$f_c = \\frac{1}{2\\pi\\sqrt{LC}},$$ and maximum attenuation comes from deliberate mismatch — series elements facing low impedances, shunt elements facing high ones.',
        detail: 'Topology choice is impedance bookkeeping: a lone shunt C only helps across a high-impedance port, a lone series L only in a low-impedance path; T sections suit low source and load impedances, π sections suit high impedances at both ports, and the L-section points its series element at the low-Z end and its shunt element at the high-Z end. A line filter feeding a switching load also needs damping (lossy ferrite or parallel bleed) so the LC does not ring with the converter’s negative input resistance. Assessment numericals reduce almost entirely to corner-frequency arithmetic plus dB-per-decade bookkeeping.',
      },
      {
        term: 'Common-mode vs differential-mode filtering',
        kind: 'method',
        statement: '**Differential-mode** current flows out one conductor and returns on its pair (the intended signal); **common-mode** current flows the same direction on both and returns via stray capacitance and earth — the radiating villain. A **common-mode choke** winds both conducters on one core so differential flux cancels (the signal sees ~no inductance) while common-mode flux adds, presenting hundreds of ohms to the interference; X capacitors (line-to-line) fight differential mode, Y capacitors (line-to-earth) fight common mode.',
        detail: 'The asymmetry is the whole game: a few mA of common-mode current on a metre of cable can radiate more than amperes of differential current, because DM fields cancel between conductors while CM fields add — so a filter that leaves the signal untouched can still remove 30 dB of emission. Y-capacitor values are capped (typically ≤ 4.7 nF) by permitted mains leakage current, a safety limit that EMC designs must respect; exceeding it trips residual-current devices and shock limits, not emission limits.',
      },
      {
        term: 'Ferrites and chokes',
        kind: 'insight',
        statement: 'An **EMI ferrite bead** is a lossy inductor: near its material optimum the impedance is dominated by a frequency-peaked resistance of tens to hundreds of ohms, so the bead **converts interference to heat** rather than reflecting it; its impedance is specified at spot frequencies (e.g. 25 and 100 MHz) and falls under DC bias current.',
        detail: 'A pure inductor reflects noise back toward the source, where it may reradiate or upset the source circuit; a lossy ferrite absorbs — the reason beads are the first clamp on a problem cable. DC bias partly saturates the core and can halve the impedance, so the bead on a 2 A rail must be chosen from the derated curve, not the datasheet front page. Choosing between a bead (lossy, broadband, low-Q) and a choke (high inductance, resonant, selective) is a recurring design-judgement question.',
      },
      {
        term: 'Transient suppressors and parasitic self-resonance',
        kind: 'insight',
        statement: '**TVS avalanche diodes** clamp in sub-nanosecond-to-nanosecond times with sharp breakdown and modest energy ratings; **varistors** (MOVs) are slower and sloppier but absorb huge surge energy; and every real capacitor carries ESL, so it self-resonates at $$f_{SRF} = \\frac{1}{2\\pi\\sqrt{L_{ESL}C}}$$ and behaves as an inductor above that frequency.',
        detail: 'Placement obeys the same geometry rule as filters: put the clamp where the transient enters, ahead of series inductance — the let-through voltage is set by lead inductance via $V = L\\,di/dt$ (a 500 A/µs surge across 20 nH leaves 10 V). Self-resonance dictates decoupling strategy: a 0.1 µF MLCC with 2 nH ESL stops being a capacitor near 11 MHz, so decades-ladder paralleling (0.1 µF + 10 nF + 100 pF, smallest closest to the pin) keeps a low-impedance supply across four decades. MOVs age with each strike and are sacrificial by nature; TVS devices are rated in peak pulse power.',
      },
    ],
    examples: [
      {
        title: 'LC filter corner and attenuation',
        problem: 'A line filter stage uses L = 10 µH and C = 0.1 µF. Find the corner frequency, the attenuation one decade above it, and the reactances there.',
        steps: [
          { label: 'Step 1', text: 'Corner: $f_c = 1/(2\\pi\\sqrt{LC}) = 1/(2\\pi\\sqrt{10^{-5} \\times 10^{-7}}) = 1/(2\\pi \\times 10^{-6}) = 159\\ \\text{kHz}$.' },
          { label: 'Step 2', text: 'A second-order LC rolls off at 40 dB/decade, so at $10f_c = 1.59\\ \\text{MHz}$ the attenuation is about 40 dB — a factor of 100 in voltage.' },
          { label: 'Step 3', text: 'Reactance check at 1.59 MHz: $X_L = 2\\pi f L = 100\\ \\Omega$ while $X_C = 1/(2\\pi f C) = 1\\ \\Omega$ — the series L blocks and the shunt C shorts, exactly the low-pass action.' },
          { label: 'Step 4', text: 'Design note: the same components give $\\sqrt{L/C} = 10\\ \\Omega$ of filter characteristic impedance; source and load near that value avoid ringing between the LC and the line.' },
        ],
        result: 'fc = 159 kHz with ≈40 dB of attenuation one decade up; XL = 100 Ω against XC = 1 Ω confirms the mechanism.',
      },
      {
        title: 'Decoupling ladder by self-resonance',
        problem: 'Decoupling capacitors on a board all present about 2 nH of parasitic inductance. Where do 0.1 µF, 10 nF and 100 pF units stop being capacitors, and what does the ladder achieve?',
        steps: [
          { label: 'Step 1', text: '0.1 µF: $f_{SRF} = 1/(2\\pi\\sqrt{2\\times10^{-9} \\times 10^{-7}}) = 11.3\\ \\text{MHz}$.' },
          { label: 'Step 2', text: '10 nF: one-tenth the capacitance raises the resonance by $\\sqrt{10}$ → 35.6 MHz.' },
          { label: 'Step 3', text: '100 pF: $f_{SRF} = 1/(2\\pi\\sqrt{2\\times10^{-9} \\times 10^{-10}}) = 356\\ \\text{MHz}$.' },
          { label: 'Step 4', text: 'Above each SRF the part is inductive: the 0.1 µF covers the kHz-to-10 MHz region, the 10 nF bridges to ~35 MHz, and only the 100 pF — placed directly at the IC pin — still looks capacitive through the hundreds of MHz where clock-edge energy lives.' },
        ],
        result: 'SRFs ≈ 11 MHz, 36 MHz and 356 MHz: parallel decades keep the supply impedance low across four decades of frequency.',
      },
    ],
    keyTakeaways: [
      'Corner at $1/(2\\pi\\sqrt{LC})$; each reactive element buys ~20 dB/decade; orientation is chosen to mismatch — series L toward low impedance, shunt C toward high.',
      'Common-mode current is the radiator: CM chokes block it while ignoring the differential signal; X caps fight DM, Y caps fight CM and are leakage-current limited.',
      'Ferrites are lossy — they absorb rather than reflect — and lose impedance under DC bias; select from the derated curve at the trouble frequency.',
      'Every capacitor is an inductor above $f_{SRF} = 1/(2\\pi\\sqrt{L_{ESL}C})$: decoupling is a decades ladder with the smallest value nearest the pin; put TVS clamps ahead of series inductance.',
    ],
    quiz: [
      {
        q: 'An LC filter with L = 1 mH and C = 1 µF has a corner frequency nearest',
        options: ['5 kHz', '1.6 kHz', '16 kHz', '50 kHz'],
        answer: 0,
        explanation: 'Step 1: $f_c = 1/(2\\pi\\sqrt{LC})$. Step 2: $LC = 10^{-3} \\times 10^{-6} = 10^{-9}$, so $\\sqrt{LC} = 3.16\\times10^{-5}$. Step 3: $f_c = 1/(2\\pi \\times 3.16\\times10^{-5}) = 5.03$ kHz. Step 4: The other options come from misplacing the square root or the $2\\pi$.',
      },
      {
        q: 'In a common-mode choke, the differential-mode signal current',
        options: ['sees the full core inductance', 'sees essentially zero inductance because its flux cancels in the core', 'is blocked completely', 'is converted into common-mode current'],
        answer: 1,
        explanation: 'Step 1: The two conductors are wound so differential currents produce opposing flux. Step 2: Opposing flux cancels in the core, leaving no net inductance for the signal. Step 3: Common-mode currents produce aiding flux and see the full choke inductance. Step 4: The signal therefore passes essentially unattenuated while the interference is impeded.',
      },
      {
        q: 'A 0.1 µF decoupling capacitor with 5 nH of parasitic inductance self-resonates at about',
        options: ['700 kHz', '1.6 MHz', '7 MHz', '70 MHz'],
        answer: 2,
        explanation: 'Step 1: $f_{SRF} = 1/(2\\pi\\sqrt{L_{ESL}C})$. Step 2: $LC = 5\\times10^{-9} \\times 10^{-7} = 5\\times10^{-16}$, so $\\sqrt{LC} = 2.24\\times10^{-8}$. Step 3: $f_{SRF} = 1/(2\\pi \\times 2.24\\times10^{-8}) = 7.1$ MHz. Step 4: Above this frequency the capacitor behaves as an inductor and decouples nothing.',
      },
      {
        q: 'For clamping very fast ESD transients on an I/O line, the fastest-responding device is a',
        options: ['varistor (MOV)', 'gas discharge tube', 'bulk electrolytic capacitor', 'TVS avalanche diode'],
        answer: 3,
        explanation: 'Step 1: Response speed follows the physics of turn-on: avalanche conduction is nearly instantaneous. Step 2: TVS diodes clamp in well under a nanosecond to a few nanoseconds. Step 3: MOVs need tens of nanoseconds and gas tubes microseconds, both too slow for ESD edges. Step 4: A capacitor merely slows the edge; it does not clamp the peak.',
      },
    ],
  },

  // ------------------------------------------------------------- emc §4
  {
    sectionId: 'ece-e-emc-s4',
    readingTime: 9,
    prerequisites: [
      'EMI sources and coupling paths (this chapter, Section 1)',
      'Shielding and filtering practice (this chapter, Sections 2–3)',
      'Decibel conversions for voltages and field strengths',
    ],
    intro: 'Compatibility is not an adjective but a contract: a product is compatible when a measurement, performed exactly as a written standard prescribes, produces numbers below published limits. The measurement apparatus — impedance networks, calibrated sites, defined detectors — is as much a part of the standard as the limits themselves. And the cheapest EMC test is the one never run twice: pre-compliance discipline starts at the schematic, not at the chamber.',
    objectives: [
      'Distinguish emission and immunity requirements and read limit tables in dBµV and dBµV/m',
      'Explain the roles of the LISN, test sites, antennas and detectors',
      'Use near-field probing and margin arithmetic for pre-compliance diagnosis',
      'Apply a design-order checklist that prevents EMC failures instead of repairing them',
    ],
    concepts: [
      {
        term: 'Emission and immunity',
        kind: 'definition',
        statement: '**Emission** limits restrict the noise a product may release — **conducted** (typically 150 kHz–30 MHz, measured on mains ports in dBµV) and **radiated** (typically 30 MHz to several GHz, measured as field strength in dBµV/m at a standard distance); **immunity** requirements subject the product to defined disturbances (RF fields, fast transients, ESD, surges) and define the performance criteria allowed during exposure.',
        detail: 'The frequency split is physical: below 30 MHz cables are the efficient antennas, so conducted measurements capture what would otherwise radiate; above it, direct field measurement takes over. Detectors matter: the quasi-peak detector, weighted for the annoyance of impulsive noise to analog radio, reads higher than the average detector, and the quasi-peak limit is the binding one. Class A (industrial) limits run roughly 10 dB looser than Class B (residential) — a recurring one-mark discriminator.',
      },
      {
        term: 'The standards framework',
        kind: 'insight',
        statement: 'The regulatory structure is layered: international special-committee publications define **measurement methods and limits** (the CISPR family), national rules adopt and enforce them (FCC parts in the US, national adaptations elsewhere), IEC 61000 publications organize **immunity** testing, and product-family standards call out which tests apply to a device class.',
        detail: 'For design purposes the layering matters less than the two content types — methods (how to measure: source impedance, site validation, antenna height scan, detector) and limits (the line in dBµV or dBµV/m, banded by frequency and class). Because the framework is internationally harmonized, one well-engineered product usually clears several markings in a single test campaign — the economic reason compliance engineering is done once and early. Engineering documentation cites the method and limit; the committee arithmetic stays in the standards room.',
      },
      {
        term: 'LISN and test sites',
        kind: 'method',
        statement: 'A **line impedance stabilization network (LISN)** presents a defined 50 Ω / 50 µH impedance to the equipment under test across the conducted band while coupling its emissions to the receiver; radiated tests use an **open-area test site (OATS)** or semi-anechoic chamber with a turntable and a height-scanned antenna at 3 m or 10 m, the site itself validated against a normalized-site-attenuation tolerance.',
        detail: 'The LISN exists because real mains impedance varies from outlet to outlet — without a defined network, conducted readings would never repeat: its 50 µH inductor blocks outside noise at radio frequencies while the 50 Ω port samples what the equipment launches onto the line. Chambers line their walls with pyramid absorber so the site approximates free space; an OATS needs a clear horizon plus a ground plane and suffers ambient broadcast pollution. Full compliance needs calibrated antennas, validated procedures and accreditation — the expense that motivates pre-compliance on the bench.',
      },
      {
        term: 'Pre-compliance and design discipline',
        kind: 'method',
        statement: 'Pre-compliance finds EMC problems with bench equipment: **near-field probes** (H-field loops and E-field tips) localize sources, a spectrum analyser with a quasi-peak option approximates levels, and results are compared to limit lines **with margin** — because fixing a failure after formal testing costs orders of magnitude more than preventing it during design.',
        detail: 'Near-field probing does not measure the compliance quantity — the far field — but it finds hot spots: scan the board and enclosure, rank the top five radiators, fix, re-scan. The design-order checklist that prevents failures: slow every edge to what timing truly needs; keep loop areas small in power and signal returns; route signals over continuous reference planes in the stackup; filter or choke every connector as it crosses the enclosure boundary; and leave no seam longer than λ/10 at the worst clock harmonic. Twenty minutes of checklist at layout review replaces a week of chamber iteration later.',
      },
    ],
    examples: [
      {
        title: 'Reading a radiated-emission margin',
        problem: 'A pre-compliance scan at 3 m shows a 180 MHz harmonic at 48 dBµV/m against an applicable 40 dBµV/m limit. Quantify the violation and verify that 12 dB of port filtering plus closing the enclosure seams from 5 cm to 5 mm brings comfortable compliance.',
        steps: [
          { label: 'Step 1', text: 'Convert to field ratio: 48 dBµV/m is $10^{48/20} = 251\\ \\mu\\text{V/m}$; the limit is $10^{40/20} = 100\\ \\mu\\text{V/m}$.' },
          { label: 'Step 2', text: 'Violation: $48 - 40 = 8\\ \\text{dB}$ over — the harmonic radiates 2.5 times the permitted field.' },
          { label: 'Step 3', text: 'Filter the cable port for 12 dB at 180 MHz (corner a decade below the harmonic): the emission falls to $48 - 12 = 36\\ \\text{dBµV/m}$ — only 4 dB of margin, too tight for chamber uncertainty.' },
          { label: 'Step 4', text: 'Seam fix at 180 MHz (λ = 1.67 m): the aperture rule raises attenuation from $20\\log(1.67/0.1) = 24\\ \\text{dB}$ to $20\\log(1.67/0.01) = 44\\ \\text{dB}$ — a 20 dB improvement — landing the emission near 16 dBµV/m with about 24 dB of margin.' },
        ],
        result: '8 dB over the limit; filtering alone gives a risky 4 dB margin, and with the seam fix the emission sits near 16 dBµV/m — a comfortable 24 dB below the line.',
      },
      {
        title: 'Extrapolating a 1 m bench measurement to 3 m',
        problem: 'A bench scan measures 52 dBµV/m at 1 m from a cable harness. Using the far-field distance law E ∝ 1/r, estimate the level at the 3 m compliance distance against a 40 dBµV/m limit, and size the needed improvement.',
        steps: [
          { label: 'Step 1', text: 'Distance law: field falls as 1/r, so in dB, $E(3\\ \\text{m}) = E(1\\ \\text{m}) - 20\\log_{10}(3)$.' },
          { label: 'Step 2', text: 'Correction: $20\\log_{10}3 = 9.5\\ \\text{dB}$.' },
          { label: 'Step 3', text: 'Extrapolated compliance level: $52 - 9.5 = 42.5\\ \\text{dBµV/m}$ — 2.5 dB over the limit.' },
          { label: 'Step 4', text: 'Improvement: 6 dB of common-mode choking on the harness brings it to 36.5 dBµV/m; because 1 m extrapolation is approximate (the harness may still be near-field), the design keeps the full choke and re-verifies at the chamber.' },
        ],
        result: '≈42.5 dBµV/m at 3 m — 2.5 dB over; 6 dB of common-mode suppression brings it under with ~3.5 dB to spare.',
      },
    ],
    keyTakeaways: [
      'Emission (conducted 150 kHz–30 MHz in dBµV, radiated 30 MHz upward in dBµV/m) and immunity are the two halves of the compatibility contract; Class B runs ~10 dB tighter than Class A.',
      'The LISN defines the mains impedance so conducted readings repeat; quasi-peak is the binding detector and reads above average.',
      'Near-field probes find sources, not compliance levels — pre-compliance is localization plus margin arithmetic, verified later in the chamber.',
      'Design-order checklist: slow edges, small loops, continuous reference planes, filter every port boundary, no seam longer than λ/10 at the worst harmonic.',
    ],
    quiz: [
      {
        q: 'Conducted emissions on the mains port are typically measured over the range',
        options: ['30 MHz to 1 GHz', '150 kHz to 30 MHz', '9 kHz to 150 kHz', '1 GHz to 18 GHz'],
        answer: 1,
        explanation: 'Step 1: The conducted band is set by where cables act as the dominant antenna. Step 2: Below 30 MHz, interconnects are electrically long enough to conduct but too short to radiate well. Step 3: The standardized conducted sweep is therefore 150 kHz to 30 MHz. Step 4: The 30 MHz-to-GHz ranges belong to radiated measurements in dBµV/m.',
      },
      {
        q: 'A LISN in a conducted-emission test primarily provides',
        options: ['a defined standard impedance at the equipment port plus a measurement port', 'amplification of the measured signal', 'isolation of the receiver from the mains only', 'antenna factor calibration'],
        answer: 0,
        explanation: 'Step 1: Real mains impedance varies from outlet to outlet, ruining repeatability. Step 2: The LISN substitutes a defined 50 Ω / 50 µH network so every measurement sees the same source impedance. Step 3: Its 50 Ω measurement port couples the equipment noise to the receiver while the 50 µH path blocks outside interference. Step 4: Amplification and antenna factors belong to the receiver and the radiated setup, not the LISN.',
      },
      {
        q: 'A scan reads 45 dBµV/m at 3 m against a 40 dBµV/m limit. The product is',
        options: ['5 dB under the limit', '0.5 dB over the limit', '12.5 dB over the limit', '5 dB over the limit'],
        answer: 3,
        explanation: 'Step 1: Margin is measured level minus limit. Step 2: $45 - 40 = 5$ dB. Step 3: Positive margin means over — the emission is about 1.8 times the permitted field. Step 4: 5 dB under would require a reading of 35 dBµV/m.',
      },
      {
        q: 'The earliest and cheapest stage at which to apply EMC discipline is',
        options: ['the formal compliance chamber test', 'pre-production batch sampling', 'schematic and layout design with a review checklist', 'the retest after a failure report'],
        answer: 2,
        explanation: 'Step 1: The cost of an EMC fix rises steeply with project maturity. Step 2: Edge rates, loop areas, stackup and port filtering are all decided at schematic and layout time. Step 3: A checklist review there costs minutes; a chamber retest after failure costs weeks plus tooling changes. Step 4: Batch sampling cannot detect design-level faults before they are built in.',
      },
    ],
  },

  // ------------------------------------------------------------- cem §1
  {
    sectionId: 'ece-e-cem-s1',
    readingTime: 9,
    prerequisites: [
      'Maxwell equations and boundary conditions (Field Theory chapter)',
      'Wavelength and wave-propagation basics',
      'Elementary linear algebra: unknowns and equations',
    ],
    intro: 'Almost every closed-form result in electromagnetic theory — the infinite plane wave, the lossless transmission line, the rectangular cavity — describes a geometry simple enough to write down. Real antennas, connectors, enclosures and biological tissues are not separable coordinate systems. **Computational electromagnetics** replaces the search for a formula with the construction of a numerical experiment: chop the geometry into small pieces, enforce Maxwell’s laws on each piece, and solve the resulting — very large — system of algebraic equations.',
    objectives: [
      'Explain why analytic methods fail for practical geometries and materials',
      'Describe meshing and quantify the trade between element size, accuracy and cost',
      'Compute staircasing error on curved boundaries and choose remedies',
      'Perform a convergence study and validate a solver against a known benchmark',
    ],
    concepts: [
      {
        term: 'The limits of the analytic',
        kind: 'insight',
        statement: 'Closed-form solutions exist only where the geometry matches a **separable coordinate system** (Cartesian, cylindrical, spherical) with homogeneous or ideally layered materials; step outside — a curved patch, a bent connector pin, an inhomogeneous dielectric — and separation of variables collapses, leaving integral equations that cannot be inverted by hand.',
        detail: 'The classic workarounds each fail differently: perturbation methods need small deviations, cavity-mode expansions need closed conducting boxes, image theory needs infinite planes — and none of them can tell you its own error without a better answer to compare against. Numerical methods invert the bargain: they accept a discretization error that you both control and measure, in exchange for arbitrary geometry and arbitrary material. That trade — known, controllable error instead of unknown exactness — is the founding idea of the whole field.',
      },
      {
        term: 'The mesh',
        kind: 'definition',
        statement: 'A **mesh** partitions the solution domain into small elements — rectangular cells for finite differences, triangles and tetrahedra for finite elements, surface patches or wire segments for the method of moments — with field behaviour on each element carried by a finite number of **unknowns**, so a problem with infinitely many degrees of freedom becomes $N$ algebraic equations in $N$ unknowns.',
        detail: 'The working resolution rule for wave problems is 10–20 elements per wavelength **in the material**, refined further near sharp edges, slots and material interfaces where fields concentrate. Unknown counts then scale with dimension: at fixed cells-per-wavelength, doubling frequency multiplies a 3D cell count by 8 — the brute-force wall every CEM user meets. Curved boundaries force the choice between staircased grids (cheap, geometrically wrong) and conformal elements (accurate, more bookkeeping).',
      },
      {
        term: 'Staircasing error',
        kind: 'insight',
        statement: 'Approximating a curved boundary by axis-aligned cells misplaces the surface by up to $\\Delta x/2$, giving a geometry error $\\varepsilon_{geom} \\sim \\Delta x/(2a)$ for a feature of radius $a$ — independent of how well the wave physics is sampled; holding such errors to a few per cent typically demands $a/\\Delta x \\ge 10$.',
        detail: 'This is the trap of grid methods on smooth shapes: refining the wave sampling alone stalls, because the error lives in the geometry, not the physics — a computed resonance can sit still while the mesh doubles. Remedies: locally conformal cell deformation, subgridding near the boundary, or switching that region to finite elements, whose curved triangles can hug the true surface. A practical diagnostic: if the answer shifts when the mesh is rotated relative to the object, staircasing is still dominating.',
      },
      {
        term: 'Convergence and validation',
        kind: 'method',
        statement: 'A numerical result is trustworthy only after a **convergence study** — solve, refine (typically by halving $\\Delta x$), solve again, and continue until the quantity of interest moves less than the required tolerance — and after **validation** against a benchmark the method should reproduce: an analytic special case or a measurement.',
        detail: 'The discipline separates engineers from button-pushers: refine where the physics is stiff, not uniformly (adaptive refinement automates this); monitor more than one output, since a resonance frequency can hold still while the field map quietly degrades; and quote results with their sensitivity — "6.55 GHz, ±0.5% under mesh doubling" — because the error bar is part of the answer. A single unexamined number from a solver is not an engineering result; it is a rumour with decimals.',
      },
    ],
    examples: [
      {
        title: 'The cost of resolution in three dimensions',
        problem: 'An FDTD model of a 30 cm enclosure must run at 3 GHz (λ = 10 cm). Compute cell counts and memory for 10, 20 and 40 cells per wavelength, assuming six field components stored per cell at 8 bytes each.',
        steps: [
          { label: 'Step 1', text: 'At 10 cells/λ: cell size 10 mm, so the domain spans $0.3/0.01 = 30$ cells per side — $N = 30^3 = 27{,}000$ cells.' },
          { label: 'Step 2', text: 'Memory: $6 \\times 8\\ \\text{B} \\times 27{,}000 = 1.3\\ \\text{MB}$ — trivial.' },
          { label: 'Step 3', text: 'At 20 cells/λ: $60^3 = 216{,}000$ cells → 10.4 MB; at 40 cells/λ: $120^3 = 1.73\\times10^{6}$ cells → 82.9 MB.' },
          { label: 'Step 4', text: 'Each resolution doubling multiplies cells by $2^3 = 8$, and the CFL rule adds a factor of 2 more time steps (next lesson), so runtime grows about ×16 per refinement — accuracy is bought at near-quartic rates, which is why 10–20 cells/λ is the working range and adaptivity exists.' },
        ],
        result: '27,000 → 216,000 → 1.73 million cells (1.3 → 10.4 → 83 MB): ×8 memory and ~×16 runtime per refinement.',
      },
      {
        title: 'Staircasing a coaxial inner conductor',
        problem: 'A coaxial line has inner radius a = 1 mm. On a grid with Δx = 0.5 mm, what geometric error does the staircased boundary make, and what Δx holds it under 5%?',
        steps: [
          { label: 'Step 1', text: 'Geometry error: $\\varepsilon \\approx \\Delta x/2 = 0.25\\ \\text{mm}$ — against $a = 1$ mm that is 25% of the radius, and the characteristic impedance inherits the damage.' },
          { label: 'Step 2', text: 'Tolerance: require $\\Delta x/2 \\le 0.05a = 0.05\\ \\text{mm}$, i.e. $\\Delta x \\le 0.1\\ \\text{mm}$.' },
          { label: 'Step 3', text: 'Cost check: at 3 GHz (λ = 100 mm), $\\Delta x = 0.1$ mm means 1000 cells per wavelength — 50× finer than the wave physics needs. The geometry, not the wavelength, now dictates the grid.' },
          { label: 'Step 4', text: 'Escape: use a conformal or subgridded scheme near the conductor, or mesh this region with finite elements — resolving a 1 mm detail inside a 300 mm problem uniformly is the least efficient possible answer.' },
        ],
        result: 'Δx = 0.5 mm gives ~25% geometry error; holding 5% needs Δx ≤ 0.1 mm — geometry, not wavelength, then sets the grid.',
      },
    ],
    keyTakeaways: [
      'Analytic solutions require separable geometry and simple materials; everything else is a numerical experiment with controlled, measurable error.',
      'Unknowns scale with the domain: 10–20 elements per wavelength is the working rule, and each 3D refinement doubling costs ×8 memory and ~×16 runtime.',
      'Staircasing error ~Δx/2a is a geometry error — refining wave sampling alone cannot fix it; use conformal, subgridded or finite-element meshing.',
      'A result without a convergence study and a validation benchmark is a number, not an answer.',
    ],
    quiz: [
      {
        q: 'Doubling the mesh resolution in all three dimensions multiplies the number of 3D elements by',
        options: ['2', '4', '8', '16'],
        answer: 2,
        explanation: 'Step 1: Halving Δx doubles the element count along each axis. Step 2: Total elements scale as the product over axes: $2 \\times 2 \\times 2$. Step 3: The count therefore multiplies by 8. Step 4: The extra factor of 2 in runtime comes from the time step, not the element count.',
      },
      {
        q: 'The staircasing error of a curved boundary of radius 5 mm on a grid with Δx = 1 mm is about',
        options: ['5%', '10%', '50%', '1%'],
        answer: 1,
        explanation: 'Step 1: Staircasing misplaces the boundary by up to $\\Delta x/2$. Step 2: With $\\Delta x = 1$ mm, the placement error is 0.5 mm. Step 3: Against a 5 mm radius, $0.5/5 = 10$%. Step 4: Reaching 5% would need Δx = 0.5 mm, and 1% would need 50 cells per radius.',
      },
      {
        q: 'A convergence study establishes that',
        options: ['the code contains no bugs', 'the geometry is separable', 'further mesh refinement moves the answer by less than the tolerance', 'the time step satisfies the stability bound'],
        answer: 2,
        explanation: 'Step 1: Convergence concerns the sensitivity of the computed answer to discretization. Step 2: Refine, re-solve, and compare: if the change is below tolerance, the discretization error is controlled. Step 3: Bug-freedom needs validation against benchmarks — a converged wrong answer is still wrong. Step 4: Stability is a separate (CFL) condition checked at setup.',
      },
      {
        q: 'The working rule for wave-problem mesh density is',
        options: ['10–20 elements per wavelength', '3–5 elements per wavelength', '100–200 elements per wavelength', 'exactly one element per wavelength'],
        answer: 0,
        explanation: 'Step 1: Sampling a sinusoid needs several points per wavelength to bound phase error. Step 2: 10–20 per wavelength keeps numerical dispersion errors near a per cent or below. Step 3: 3–5 undersamples badly and 100–200 wastes memory ×1000 in 3D. Step 4: One per wavelength aliases the wave entirely.',
      },
    ],
  },

  // ------------------------------------------------------------- cem §2
  {
    sectionId: 'ece-e-cem-s2',
    readingTime: 10,
    prerequisites: [
      'Maxwell curl equations in differential form (Field Theory chapter)',
      'The mesh idea and resolution trade-offs (this chapter, Section 1)',
      'Finite-difference approximations of derivatives',
    ],
    intro: 'The finite-difference time-domain method is the most direct idea in computational electromagnetics: write Maxwell’s two curl equations as differences on a staggered grid and march the fields forward in time, one small step after another. Because it computes fields in the **time domain** over a broadband pulse, a single run returns the full frequency response of an antenna or scatterer — which is why FDTD is the workhorse of wideband problems from handset dosimetry to lightning and EMP studies.',
    objectives: [
      'Draw and explain the Yee cell and its field staggering',
      'Write the leapfrog update equations for E and H',
      'Derive the CFL stability bound and compute the maximum time step for a given grid',
      'Explain absorbing boundary conditions (Mur, PML) and the method’s strengths and limits',
    ],
    concepts: [
      {
        term: 'The Yee cell',
        kind: 'definition',
        statement: 'In the **Yee lattice** each electric-field component sits at the centre of the cell edge it points along, and each magnetic-field component at the centre of the face it pierces — every **E** component is ringed by four circulating **H** components and vice versa, so the curl geometry of Maxwell’s equations is built into the grid itself.',
        detail: 'The staggering is not decoration: centred differences between staggered neighbours are second-order accurate in space, the divergence conditions propagate cleanly, and material interfaces align naturally with cell faces. Each component also reads its own material property at its own location — ε at E sites, µ at H sites — so an inhomogeneous dielectric is entered cell by cell: a lens is simply a block of cells with different ε, a shield a block of lossy ones.',
      },
      {
        term: 'Leapfrog update equations',
        kind: 'method',
        statement: 'Time is staggered too: **H** is advanced at half-steps from the curl of **E**, then **E** at whole steps from the curl of **H** — one component shown, $$H_z\\big|^{n+\\tfrac{1}{2}} = H_z\\big|^{n-\\tfrac{1}{2}} + \\frac{\\Delta t}{\\mu}\\left(\\frac{E_x^{n}\\big|_{j+\\tfrac{1}{2}} - E_x^{n}\\big|_{j-\\tfrac{1}{2}}}{\\Delta y} - \\frac{E_y^{n}\\big|_{i+\\tfrac{1}{2}} - E_y^{n}\\big|_{i-\\tfrac{1}{2}}}{\\Delta x}\\right)$$ — explicit, local, and free of any matrix.',
        detail: 'Every update touches only immediately adjacent cells: no system is ever formed or solved, which is why FDTD parallelizes across cores and GPUs almost linearly. Excitation is a chosen time function — commonly a Gaussian pulse — injected at a point, edge or plane; the run continues until the transient has left the domain, and one Fourier transform of the recorded port signals then yields S-parameters across the entire pulse band simultaneously. That one-run, whole-band economy is FDTD’s signature advantage.',
      },
      {
        term: 'The CFL stability condition',
        kind: 'insight',
        statement: 'The leapfrog is stable only while every numerical frequency stays real. The worst case is the shortest resolvable mode — two cells per wavelength on every axis, $k_i\\Delta x_i = \\pi$, travelling along the cell diagonal — and demanding $|\\sin(\\omega\\Delta t/2)| \\le 1$ for it yields $$\\Delta t \\le \\frac{1}{c\\sqrt{\\frac{1}{\\Delta x^{2}}+\\frac{1}{\\Delta y^{2}}+\\frac{1}{\\Delta z^{2}}}} \\;\\;\\xrightarrow{\\;\\Delta x=\\Delta y=\\Delta z\\;}\\;\\Delta t \\le \\frac{\\Delta x}{c\\sqrt{3}}.$$',
        detail: 'The derivation logic: substitute a trial grid wave into the leapfrog scheme and the discrete dispersion relation appears; the largest wavevector (π per cell on each axis) maximizes the required frequency, and once $\\omega\\Delta t/2$ would exceed π/2 the sine cannot keep up — ω turns complex and the fields grow exponentially every step. Violation is at least loud: the solution reaches machine infinity within tens of steps. Practical detail: graded meshes set Δt by the **smallest** cell, so one tiny subgridded feature taxes every step of the whole run.',
      },
      {
        term: 'Absorbing boundaries: Mur and PML',
        kind: 'insight',
        statement: 'The grid must end, but reflections from the cut would corrupt the open-space solution: **Mur** boundaries apply a one-way wave equation at the outer face — simple, but reflecting 1–10% depending on incidence — while the **perfectly matched layer (PML)** wraps the domain in an artificial absorbing material whose impedance matches free space at all angles and frequencies, attenuating outgoing waves by 60–100+ dB within a handful of cells.',
        detail: 'PML is the standard because it is effectively reflectionless by construction: not a physical absorber but a coordinate-stretched, lossy medium engineered so the wave crosses the interface with zero reflection for any angle — at the cost of 5–10 padding cells per side and its own stability care. The remaining FDTD limits are equally concrete: staircasing on curved boundaries, long runtimes for high-Q resonators (the pulse must ring down), and grid dispersion — the numerical wave travels slightly slower than c, which 10–20 cells per wavelength holds to about a per cent or less.',
      },
    ],
    examples: [
      {
        title: 'Time step from the CFL bound',
        problem: 'A 3D FDTD grid uses Δx = Δy = Δz = 1 mm in free space. Compute the maximum stable time step, and the number of leapfrog steps needed to simulate 100 ns — about 100 cycles of a 1 GHz excitation.',
        steps: [
          { label: 'Step 1', text: 'CFL bound for a cubic grid: $\\Delta t_{max} = \\Delta x/(c\\sqrt{3})$.' },
          { label: 'Step 2', text: 'Numbers: $\\Delta t_{max} = 10^{-3}/(3\\times10^{8} \\times 1.732) = 1.92\\ \\text{ps}$.' },
          { label: 'Step 3', text: 'Steps for 100 ns: $N = 100\\times10^{-9}/1.92\\times10^{-12} \\approx 52{,}000$ time steps.' },
          { label: 'Step 4', text: 'Stability margin: running at 1.5 ps (78% of the bound) is comfortable; a run at 2.5 ps exceeds the bound and diverges within tens of steps.' },
        ],
        result: 'Δt_max ≈ 1.92 ps; about 52,000 leapfrog steps cover the 100 ns record.',
      },
      {
        title: 'Resolution, step size and run length at 2.4 GHz',
        problem: 'An antenna is simulated at 2.4 GHz with 10 cells per wavelength. Find the cell size, the CFL time step, and the total steps for a 30 ns record — and state the frequency resolution that record supports.',
        steps: [
          { label: 'Step 1', text: 'Wavelength: $\\lambda = c/f = 3\\times10^{8}/2.4\\times10^{9} = 125\\ \\text{mm}$, so $\\Delta x = 12.5\\ \\text{mm}$.' },
          { label: 'Step 2', text: 'CFL step: $\\Delta t = 12.5\\times10^{-3}/(c\\sqrt{3}) = 24.1\\ \\text{ps}$.' },
          { label: 'Step 3', text: 'Steps: $30\\times10^{-9}/24.1\\times10^{-12} \\approx 1{,}250$ time steps for 72 carrier cycles.' },
          { label: 'Step 4', text: 'Frequency resolution is set by the record length alone: $\\Delta f = 1/T = 1/(30\\ \\text{ns}) = 33\\ \\text{MHz}$ — one run delivers every frequency from near DC through the band at once, instead of one solve per frequency point.' },
        ],
        result: 'Δx = 12.5 mm, Δt ≈ 24.1 ps, ≈1,250 steps; the single run covers the whole band at 33 MHz resolution.',
      },
    ],
    keyTakeaways: [
      'The Yee lattice staggers E on cell edges and H on cell faces, building the curl structure and second-order accuracy into the grid itself.',
      'Leapfrog updates are explicit and local — no matrix is ever solved; materials enter per cell and one pulsed run returns the entire frequency band.',
      'CFL for a cubic 3D grid: Δt ≤ Δx/(c√3), from demanding the two-cell diagonal mode keep a real frequency — violation diverges explosively, not gracefully.',
      'Open boundaries need PML (near-perfect absorption, 5–10 cells) or Mur (simple, 1–10% reflective); staircasing and grid dispersion set the accuracy floor.',
    ],
    quiz: [
      {
        q: 'In the Yee cell, the magnetic-field components are located',
        options: ['at the cell corners', 'at the centres of the cell faces', 'at the cell centre', 'along the cell edges'],
        answer: 1,
        explanation: 'Step 1: The Yee scheme staggers the two field families. Step 2: E components sit at edge centres — the edge they point along. Step 3: H components sit at face centres, normal to the face they pierce. Step 4: This places each E component inside a ring of four H components, reproducing the curl geometry.',
      },
      {
        q: 'A cubic 3D FDTD grid with Δx = 2 mm has a maximum stable time step of about',
        options: ['3.8 ps', '6.7 ps', '1.9 ps', '11 ps'],
        answer: 0,
        explanation: 'Step 1: The 3D cubic CFL bound is $\\Delta t = \\Delta x/(c\\sqrt{3})$. Step 2: $c\\sqrt{3} = 5.2\\times10^{8}$ m/s. Step 3: $\\Delta t = 2\\times10^{-3}/5.2\\times10^{8} = 3.85$ ps. Step 4: 6.7 ps is the 1D bound $\\Delta x/c$; in 3D the diagonal mode tightens it by $\\sqrt{3}$.',
      },
      {
        q: 'If the FDTD time step exceeds the CFL limit, the solution',
        options: ['converges more slowly', 'becomes less accurate but stays stable', 'diverges exponentially within tens of steps', 'becomes exactly lossless'],
        answer: 2,
        explanation: 'Step 1: Above the bound, the worst-case mode requires $|\\sin(\\omega\\Delta t/2)| > 1$. Step 2: ω therefore turns complex with a positive growth rate. Step 3: Every leapfrog step multiplies that mode, so fields blow up to machine infinity within tens of steps. Step 4: The failure is loud — which at least makes the bug easy to spot.',
      },
      {
        q: 'A perfectly matched layer (PML) is best described as',
        options: ['a metal wall terminating the grid', 'an artificial absorbing layer with near-zero interface reflection at all angles and frequencies', 'a statistical absorbing boundary', 'a time-reversal mirror'],
        answer: 1,
        explanation: 'Step 1: The problem: cutting the grid reflects outgoing waves back into the solution. Step 2: PML surrounds the domain with a lossy, coordinate-stretched medium whose impedance is engineered to match free space. Step 3: The match holds for all incidence angles and frequencies, so reflection is negligible (60–100+ dB absorption). Step 4: A metal wall would reflect everything — the exact opposite of the goal.',
      },
    ],
  },

  // ------------------------------------------------------------- cem §3
  {
    sectionId: 'ece-e-cem-s3',
    readingTime: 10,
    prerequisites: [
      'Radiation mechanism and vector potential (Antenna Fundamentals section)',
      'Linear algebra: matrix systems and their solution cost',
      'Perfect-conductor boundary conditions (Field Theory chapter)',
    ],
    intro: 'Differential methods — FDTD and FEM — discretize all of space, including the empty air around an antenna. The method of moments instead discretizes only the currents flowing on conducting surfaces, letting the radiation find its own way to infinity through an analytic Green’s function. The price is a dense matrix; the reward is that open-region radiation problems — antennas, scatterers, radar cross-sections — are solved with unknowns counted in thousands, not millions.',
    objectives: [
      'Contrast integral (MoM) and differential (FDTD/FEM) formulations',
      'Explain Green’s functions and surface-current discretization with basis functions',
      'Assemble and interpret the moment-method system Z·I = V',
      'Select MoM for open-region problems and estimate its dense-matrix cost',
    ],
    concepts: [
      {
        term: 'Integral versus differential formulation',
        kind: 'insight',
        statement: 'Differential methods solve for fields throughout a volume; the **method of moments (MoM)** solves an **integral equation** — typically the electric field integral equation (EFIE) — whose only unknown is the surface current density $\\mathbf{J}$ on conductors: the scattered field is written as the field radiated by that current, and the equation enforces the perfect-conductor boundary condition $\\hat{n} \\times \\mathbf{E} = 0$ on the surface.',
        detail: 'The shift from fields-in-volume to currents-on-surface is enormous in 3D: a volume mesh discretizes air that carries no information, while the integral equation’s unknowns live only where the physics does. Better, the radiation condition — waves escaping to infinity — is already built into the Green’s function, so no absorbing boundary is ever needed. What is paid: every unknown now interacts with every other, so the matrix is dense, and that single fact shapes the entire method’s economics.',
      },
      {
        term: 'Green’s function',
        kind: 'definition',
        statement: 'A **Green’s function** is the field response to a point source: $G(\\mathbf{r}, \\mathbf{r}\')$ is the field at $\\mathbf{r}$ from a unit source at $\\mathbf{r}\'$, and by superposition the total field is the source distribution folded with $G$; in free space the scalar Green’s function is $G = e^{-jkR}/4\\pi R$ — the spherical wave of a point radiator.',
        detail: 'Everything difficult about a problem hides inside its Green’s function: free space is the friendly case, a ground plane is handled by mirror images, and layered media (microstrip) require spectral-domain Green’s functions whose evaluation dominates the cost of the whole analysis. Conceptually the Green’s function is "the field of one unit of unknown" — which is exactly what makes matrix assembly possible, since each matrix entry measures how the field of one basis function is tested against another.',
      },
      {
        term: 'Discretization and the Z·I = V system',
        kind: 'method',
        statement: 'Expand the surface current in basis functions, $\\mathbf{J}(\\mathbf{r}) \\approx \\sum_{n} I_n\\,\\mathbf{f}_n(\\mathbf{r})$ — pulses on wire segments, RWG triangles on surfaces — enforce the integral equation against testing functions, and the problem collapses to the dense linear system $$\\mathbf{Z}\\,\\mathbf{I} = \\mathbf{V},$$ where $Z_{mn}$ is the **mutual impedance** between basis functions $m$ and $n$ and $V_m$ is the tested excitation (e.g. a gap feed).',
        detail: 'Each entry is a double integral over two basis functions’ supports with the Green’s function in the middle — the "matrix fill" whose cost grows as $N^2$ integrals before any solve. The interpretation is physical: Z is literally a generalized mutual-impedance matrix of the kind circuit theory already uses, which is why antenna engineers read MoM output so naturally. Solution is by dense LU at $O(N^{3})$ or iterative Krylov methods; a frequency sweep cannot reuse a factorization, which is precisely what fast methods attack.',
      },
      {
        term: 'Where MoM wins and where it hurts',
        kind: 'insight',
        statement: 'MoM dominates **open-region radiation and scattering** — antennas over ground planes, wire structures, aircraft-scale radar cross-sections — because unknowns scale with surface area, $N \\sim (L/\\lambda)^{2}$, against the volume scaling $N \\sim (L/\\lambda)^{3}$ of differential methods; its weaknesses are inhomogeneous penetrable dielectrics (volume currents, many more unknowns), interior resonances of closed conductors corrupting the EFIE, and the dense $O(N^{2})$–$O(N^{3})$ cost.',
        detail: 'The fast multipole method (FMM) and its multilevel variants rescue the dense cost — computing matrix–vector products in roughly $O(N \\log N)$ and making million-unknown targets practical; this is the computational engine inside modern radar-signature codes. Between MoM and FEM sits standard hybrid practice: MoM for the radiating exterior, FEM for the inhomogeneous interior, stitched along a boundary surface — many commercial solvers are exactly this hybrid wearing one interface.',
      },
    ],
    examples: [
      {
        title: 'Dense-matrix cost accounting',
        problem: 'A wire-grid model of an aircraft uses N = 20,000 unknowns. Compute the storage of the dense impedance matrix and the LU factorization cost; compare with an FDTD volume mesh of the same 30 m object at 100 MHz (λ = 3 m) with 10 cells per wavelength.',
        steps: [
          { label: 'Step 1', text: 'Dense storage: $N^{2} = 4\\times10^{8}$ entries at 8 bytes each → 3.2 GB — the matrix alone strains a workstation.' },
          { label: 'Step 2', text: 'LU cost: $\\approx \\tfrac{2}{3}N^{3} = \\tfrac{2}{3}(8\\times10^{12}) \\approx 5.3\\times10^{12}$ flops — minutes on a good multicore box, but ×8 for every doubling of N.' },
          { label: 'Step 3', text: 'FDTD comparison: 30 m span at 10 cells per 3 m wavelength → 100 cells per side → $10^{6}$ cells plus PML padding ≈ 1.5–2 million, memory ~50–100 MB.' },
          { label: 'Step 4', text: 'Scaling check: doubling frequency multiplies MoM surface unknowns by ~4 (area) but FDTD cells by 8 (volume) — the aircraft is only 10λ across at 100 MHz, and MoM’s advantage grows with electrical size.' },
        ],
        result: 'MoM: 3.2 GB dense, ~5×10¹² flops; FDTD: ~2×10⁶ cells — MoM’s edge is unknown-count scaling, not small-problem cost.',
      },
      {
        title: 'Convergence on the half-wave dipole benchmark',
        problem: 'A centre-fed half-wave dipole at 300 MHz (length 0.5 m, radius ≪ λ) is solved by MoM with pulse basis functions and a delta-gap feed at N = 8, 16 and 32 segments. A representative convergence sequence for the input impedance is 82+j55, 76+j47 and 73.8+j43.5 Ω. Interpret the trend and estimate the converged value.',
        steps: [
          { label: 'Step 1', text: 'Resolution: with λ = 1 m, N = 8 gives segment length $\\lambda/16 = 6.25\\ \\text{cm}$ — coarse against the sinusoidal current shape, and the feed gap is barely resolved.' },
          { label: 'Step 2', text: 'Trend: the real part walks 82 → 76 → 73.8 Ω and the reactance 55 → 47 → 43.5 Ω — both monotone toward the analytic thin-dipole value $73.1 + j42.5\\ \\Omega$.' },
          { label: 'Step 3', text: 'Rate: the per-refinement change shrinks roughly ×2–3 (6 Ω then 2.2 Ω on the real part) — first-order convergence; extrapolating gives ≈73 + j42 Ω in the limit.' },
          { label: 'Step 4', text: 'Validation: the converged radiation resistance 73 Ω matches the analytic benchmark — this dipole check is the standard sanity test every MoM code must pass before being trusted on geometries that have no closed-form answer.' },
        ],
        result: 'Monotone convergence toward ≈73 + j42 Ω — the analytic half-wave value — validating the solver at about 2% by N = 32.',
      },
    ],
    keyTakeaways: [
      'MoM solves an integral equation for surface currents: unknowns live only on conductors and the radiation condition is built into the Green’s function.',
      'Z·I = V is a dense mutual-impedance matrix — O(N²) storage, O(N³) direct solve — rescued at scale by fast multipole methods.',
      'The Green’s function is the field of a point source: $e^{-jkR}/4\\pi R$ in free space, images over ground planes, expensive spectral forms in layered media.',
      'Choose MoM for open-region radiation and scattering (surface scaling ~ (L/λ)²); choose differential methods for inhomogeneous dielectric volumes.',
    ],
    quiz: [
      {
        q: 'In the EFIE solved by MoM for a perfectly conducting body, the enforced boundary condition is',
        options: ['tangential E = 0 on the conductor surface', 'normal D = 0 on the surface', 'tangential H = 0 on the surface', 'E = 0 everywhere inside the body'],
        answer: 0,
        explanation: 'Step 1: A perfect conductor cannot support a tangential electric field at its surface. Step 2: The EFIE writes the total field as incident plus that radiated by the unknown surface current. Step 3: Setting the tangential component of that total field to zero gives the equation for J. Step 4: Normal D jumps by surface charge — a different condition, used elsewhere in the formulation.',
      },
      {
        q: 'The free-space scalar Green’s function is proportional to',
        options: ['$1/R^{2}$', '$\\delta(R)$', '$e^{-jkR^{2}}$', '$e^{-jkR}/4\\pi R$'],
        answer: 3,
        explanation: 'Step 1: The Green’s function is the response to a point source. Step 2: A point radiator produces an outgoing spherical wave with $1/R$ amplitude spreading. Step 3: The phase advances as $e^{-jkR}$, giving $e^{-jkR}/4\\pi R$. Step 4: $1/R^{2}$ is the static field of a point charge — the $f \\to 0$ limit of the same expression.',
      },
      {
        q: 'A MoM problem with N = 4,000 unknowns requires dense-matrix storage of about',
        options: ['128 MB', '1.6 MB', '12.8 GB', '16 MB'],
        answer: 0,
        explanation: 'Step 1: The dense impedance matrix has $N^{2}$ entries. Step 2: $4000^{2} = 1.6\\times10^{7}$ entries. Step 3: At 8 bytes each, storage is $1.28\\times10^{8}$ B ≈ 128 MB. Step 4: The cost quadruples with every doubling of N — the defining economics of the method.',
      },
      {
        q: 'MoM is the preferred method for',
        options: ['inhomogeneous dielectric volumes', 'open-region antenna radiation and scattering from conductors', 'closed lossy-cavity problems', 'magnetostatic machine analysis'],
        answer: 1,
        explanation: 'Step 1: MoM’s unknowns are surface currents on conductors, scaling with area. Step 2: Its Green’s function handles radiation to infinity with no absorbing boundary. Step 3: Open-region radiation and scattering problems exploit both strengths. Step 4: Inhomogeneous volumes need volume unknowns — FEM territory.',
      },
    ],
  },

  // ------------------------------------------------------------- cem §4
  {
    sectionId: 'ece-e-cem-s4',
    readingTime: 10,
    prerequisites: [
      'Meshing and discretization trade-offs (this chapter, Section 1)',
      'The MoM dense-matrix economics (this chapter, Section 3)',
      'Vector calculus and boundary conditions (Field Theory chapter)',
    ],
    intro: 'The finite element method handles what the uniform grid cannot: arbitrary curved geometry, sharply varying materials, and local features a hundred times smaller than the overall problem. Its strategy is to stop sampling fields on a rigid lattice and instead build them piecewise from polynomial shape functions on triangles and tetrahedra that stretch, refine and grade wherever the physics demands. The payoff is geometric fidelity and sparse matrices; the machinery is a variational principle instead of a differencing stencil.',
    objectives: [
      'Explain the weak/variational formulation and why it tolerates rough geometry',
      'Describe nodal and vector (edge) elements with shape functions',
      'Reason about sparsity, eigenvalue bounds and adaptive meshing',
      'Select among FEM, FDTD and MoM for a given problem class',
    ],
    concepts: [
      {
        term: 'Weak form and variational principle',
        kind: 'definition',
        statement: 'Instead of enforcing Maxwell’s equations pointwise, FEM multiplies by a weighting function, integrates over each element and integrates by parts, demanding the result hold only **weakly** — equivalent, for self-adjoint problems, to stationarizing a functional: the true electrostatic potential minimizes $$F(\\phi) = \\tfrac{1}{2}\\int \\epsilon\\,|\\nabla\\phi|^{2}\\,dv - \\int \\rho\\,\\phi\\,dv$$ over all candidate potentials.',
        detail: 'The by-parts step moves one derivative onto the test function, lowering the smoothness demanded of the solution — the reason FEM survives sharp material corners and discontinuous permittivity that break finite-difference stencils. Natural (Neumann-type) boundary conditions fall out of the weak form automatically; essential (Dirichlet) conditions are imposed directly on nodal values. Element-by-element integration then scatters into the global stiffness matrix — machinery inherited directly from structural mechanics, the field where FEM was born.',
      },
      {
        term: 'Shape functions and edge elements',
        kind: 'method',
        statement: 'On each triangle or tetrahedron the unknown field is expanded in low-order polynomials: **nodal elements** interpolate a scalar (a potential) from vertex values, while **vector (edge) elements** assign degrees of freedom to edges, making the tangential field continuous across element boundaries while the normal component may jump — exactly the physical behaviour of **E** and **H** at material interfaces.',
        detail: 'Edge (Nédélec) elements cured FEM’s classic electromagnetic diseases: nodal elements admitted spurious gradient modes in vector wave problems and mishandled field discontinuities at dielectric steps. Polynomial order sets accuracy — h-refinement shrinks elements, p-refinement raises order — and curved high-order elements hug boundaries without staircasing. The price of unstructured geometry is bookkeeping: connectivity tables and irregular memory patterns that modern preprocessors hide but the solver pays for in cache behaviour.',
      },
      {
        term: 'Sparse systems and adaptive meshing',
        kind: 'insight',
        statement: 'Because a shape function vanishes outside its own and neighbouring elements, the FEM matrix is **sparse** — a few tens of nonzeros per row regardless of total size — so $10^{5}$–$10^{7}$ unknowns solve with iterative solvers and preconditioners; **adaptive meshing** then drives refinement automatically, an a-posteriori error estimator flagging the elements that carry the largest residual or field error, refine–solve–estimate–repeat.',
        detail: 'The economics against MoM are stark: at N = 100,000 a dense MoM matrix needs 80 GB where FEM’s sparse pattern needs tens of megabytes — surface unknowns interacting globally versus volume unknowns interacting locally. Eigenproblems (cavities, waveguide modes) come with a built-in sanity check: conforming elements bound eigenfrequencies from **above**, so the computed cutoff can only decrease toward truth under refinement. Most of the accuracy lands in the first two adaptive passes; the discipline is stopping when the quantity of interest moves less than tolerance.',
      },
      {
        term: 'Choosing among FEM, FDTD and MoM',
        kind: 'insight',
        statement: 'Selection follows geometry, materials and output: **FEM** for inhomogeneous, curved, multi-material volumes (cavities, connectors, on-chip structures, tissues) with per-frequency solves; **FDTD** for wideband transients in large open regions with simple materials (antenna siting, EMP, dosimetry); **MoM** for open-region radiation and scattering from conductors (antennas, radar cross-sections); hybrids stitch the best of each along a boundary surface.',
        detail: 'The practitioner’s question sequence: open or enclosed region? homogeneous or inhomogeneous materials? narrowband or wideband? smooth or finely detailed geometry? A single-frequency high-Q cavity is FEM territory, where FDTD would ring for hundreds of thousands of steps; a decade-wide antenna response is one FDTD pulse versus ten separate FEM factorizations; a wire antenna over ground is a few hundred MoM unknowns and no boundaries at all. Frequency-domain FEM pays one matrix per frequency point, FDTD pays one run for all frequencies but CFL-bound time steps, and MoM pays density in exchange for surfaces-only unknowns — cost structure is the selection criterion.',
      },
    ],
    examples: [
      {
        title: 'Sparse versus dense at N = 100,000',
        problem: 'Compare memory and solution strategy for a 100,000-unknown FEM model (about 30 nonzeros per row) against a dense 100,000-unknown MoM model, both in double precision.',
        steps: [
          { label: 'Step 1', text: 'FEM nonzeros: $10^{5} \\times 30 = 3\\times10^{6}$ entries → $3\\times10^{6} \\times 8\\ \\text{B} = 24\\ \\text{MB}$ of sparse storage.' },
          { label: 'Step 2', text: 'Dense MoM: $10^{5} \\times 10^{5} = 10^{10}$ entries → $8\\times10^{10}\\ \\text{B} = 80\\ \\text{GB}$ — beyond typical workstation RAM before the first solve.' },
          { label: 'Step 3', text: 'Strategy follows storage: FEM uses preconditioned iterative solvers (CG/GMRES) whose mat–vec cost scales with nonzeros; dense MoM either factors once at $\\tfrac{2}{3}N^{3} \\approx 6.7\\times10^{13}$ flops or switches to a fast-multipole iterative scheme.' },
          { label: 'Step 4', text: 'Design consequence: the same physical structure can be modelled in finer detail in FEM precisely because unknowns interact locally — sparsity is what buys resolution.' },
        ],
        result: '24 MB sparse against 80 GB dense at N = 10⁵ — locality of interaction is the whole cost story.',
      },
      {
        title: 'Waveguide cutoff by FEM',
        problem: 'A rectangular waveguide with a = 22.86 mm (the standard X-band guide) has its TE₁₀ cutoff computed by a 2D FEM eigenmode solve; the analytic value is c/2a = 6.56 GHz. A representative refinement sequence gives 7.10, 6.68 and 6.59 GHz. Interpret the direction and rate of convergence.',
        steps: [
          { label: 'Step 1', text: 'Analytic benchmark: $f_c = c/2a = 3\\times10^{8}/(2 \\times 0.02286) = 6.56\\ \\text{GHz}$.' },
          { label: 'Step 2', text: 'Coarse mesh gives 7.10 GHz — 8.2% high. Conforming elements stiffen the discrete problem, so eigenfrequencies bound from **above**: the sequence can only decrease toward truth.' },
          { label: 'Step 3', text: 'Refinements: 6.68 GHz (1.8% high), then 6.59 GHz (0.4% high) — monotone decrease with error shrinking ×3–4 per pass as the adaptive estimator refines the high-field regions near the guide walls.' },
          { label: 'Step 4', text: 'Validation: agreement to 0.4% with the closed-form cutoff (and the correct ordering of the higher modes) certifies the meshing strategy before it is applied to the iris-loaded variant that has no analytic answer.' },
        ],
        result: 'FEM converges from above: 7.10 → 6.68 → 6.59 GHz against the analytic 6.56 GHz — 0.4% at the final pass.',
      },
    ],
    keyTakeaways: [
      'The weak form trades pointwise enforcement for integrated enforcement — surviving corners, material jumps and curved geometry that break stencils.',
      'Edge (Nédélec) elements put unknowns on edges: tangential continuity is enforced, spurious modes are eliminated; nodal elements serve scalar potentials.',
      'FEM matrices are sparse — tens of nonzeros per row: 10⁵ unknowns cost megabytes where a dense MoM matrix costs tens of gigabytes.',
      'Selection: FEM for inhomogeneous curved volumes, FDTD for broadband transients, MoM for open-region conductors — hybrids when one region needs each.',
    ],
    quiz: [
      {
        q: 'The weak form of a field equation is obtained by',
        options: ['differentiating the equation twice', 'multiplying by a test function, integrating, and integrating by parts', 'discretizing time before space', 'averaging the equation over the boundary'],
        answer: 1,
        explanation: 'Step 1: Multiply the equation by a weighting (test) function. Step 2: Integrate the product over the domain. Step 3: Integrate the highest derivative by parts, moving one derivative onto the test function. Step 4: The result demands less smoothness — which is exactly why rough geometry and material jumps are tolerated.',
      },
      {
        q: 'Vector (edge) elements were introduced into FEM primarily to',
        options: ['reduce the matrix size', 'speed up mesh generation', 'enforce tangential field continuity and eliminate spurious modes', 'handle material nonlinearity'],
        answer: 2,
        explanation: 'Step 1: Nodal elements assign unknowns to vertices, forcing every component continuous. Step 2: Physical E and H are only tangentially continuous — normal components jump at material interfaces. Step 3: Edge elements place degrees of freedom on edges so only the tangential part is enforced. Step 4: This also removes the spurious gradient modes that polluted nodal vector solutions.',
      },
      {
        q: 'A conforming FEM eigenvalue solve for a cavity resonant frequency typically converges',
        options: ['from below the true value', 'from above the true value', 'oscillating around the true value', 'to the wrong mode ordering'],
        answer: 1,
        explanation: 'Step 1: Conforming elements restrict the solution space to a subset of admissible fields. Step 2: A restricted (stiffer) space raises the stationary values of the variational problem. Step 3: Eigenfrequencies therefore bound from above and decrease monotonically under refinement. Step 4: This gives a built-in direction check — an increase under refinement signals a bug.',
      },
      {
        q: 'For a wideband transient study of an antenna in open space with homogeneous materials, the most natural method is',
        options: ['an FEM frequency sweep, one solve per point', 'dense MoM at every frequency', 'analytic separation of variables', 'FDTD with PML boundaries'],
        answer: 3,
        explanation: 'Step 1: The problem is broadband, open-region and homogeneous — three FDTD strengths. Step 2: One pulsed FDTD run with a PML boundary returns the whole band in a single pass. Step 3: An FEM sweep or per-frequency MoM pays one solve per frequency point. Step 4: Separation of variables does not exist for a realistic antenna geometry.',
      },
    ],
  },
]
