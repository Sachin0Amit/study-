import type { SectionContent } from "../library";

export const metrologyTopupContent: SectionContent[] = [
  {
    sectionId: "me-e-metrology-s3",
    readingTime: 9,
    intro: "Interchangeable manufacture relies on holding every mating feature inside a stated tolerance zone and verifying that zone economically on the shop floor. This section connects the limit-and-fit system to the gauges that police it, the surface-texture parameters that describe finish, and the way tolerances stack through an assembly.",
    objectives: [
      "Explain hole-basis and shaft-basis fit systems and select a fit for a given function",
      "Compute extreme clearances and worst-case tolerance stacks for multi-part assemblies",
      "Apply Taylor's principle when specifying GO and NO-GO gauge forms",
      "Compute Ra and Rz from measured profile data and choose the parameter that matches the surface function",
    ],
    concepts: [
      {
        term: "Hole-basis system",
        kind: "definition",
        statement: "**Hole-basis**: the hole tolerance zone sits at basic size with fundamental deviation H (lower limit on basic size), and the shaft zone is varied to obtain the fit.",
        detail: "It is the default because holes are produced with fixed-size tooling - drills, reamers and punches - while shafts can be turned or ground to any zone. One H7 hole can be paired with shaft deviations a, g, k, n or p to give clearance, transition or interference fits from the same tooling.",
      },
      {
        term: "Shaft-basis system",
        kind: "definition",
        statement: "**Shaft-basis**: the shaft zone stays at basic size (fundamental deviation h, upper limit on basic size) and the hole zone is varied to select the fit.",
        detail: "Choose it when one finished shaft - ground bar stock or a spindle - carries several components needing different fits, since re-machining the common shaft for each fit is impractical while boring each hole to its own zone is routine.",
      },
      {
        term: "Standard tolerance grades",
        kind: "law",
        statement: "For nominal sizes up to 500 mm the tolerance unit is $i = 0.45·D^(1/3) + 0.001·D$ µm (D in mm), and each IT grade is a fixed multiple of i: IT5 = 7i, IT6 = 10i, IT7 = 16i, IT8 = 25i.",
        detail: "Each step up the IT scale widens the zone by about 60%, so IT7 is roughly 1.6 times IT6. Mating features are usually toleranced in the IT5 to IT11 band; IT12 and coarser are left to non-critical features and raw material.",
      },
      {
        term: "Taylor's principle of gauging",
        kind: "theorem",
        statement: "A **GO** gauge must check every dimension and feature of the workpiece simultaneously and in full form, while a **NO-GO** gauge must check only one dimension or feature at a time.",
        detail: "The GO gauge is a replica of the mating part: a full-length plug detects taper and ovality that point contacts would miss. A full-form NO-GO plug could be blocked by the small axis of an oval hole and never reveal that its other axis is beyond the minimum-metal limit, so NO-GO elements are shortened or segmented to touch one surface at a time.",
      },
      {
        term: "Ra and Rz parameters",
        kind: "notation",
        statement: "$R_a$ is the arithmetic mean of the absolute profile deviations from the mean line over a sampling length; $R_z$ is the largest peak-to-valley height within the evaluation length.",
        detail: "Ra averages and is therefore stable between instruments, which is why it dominates drawings; Rz responds to deep scratches and isolated peaks that govern fatigue and sealing. Typical bands: turning 0.8-6.3 µm Ra, grinding 0.1-0.8 µm Ra, lapping and polishing below 0.1 µm Ra.",
      },
      {
        term: "Gauge wear allowance",
        kind: "insight",
        statement: "A new GO gauge is made slightly beyond the maximum-material limit with a wear allowance of about 5-10% of the work tolerance, and it is retired once wear carries it back past that limit.",
        detail: "A GO plug for a hole is made marginally larger than the hole minimum; rubbing wear steadily reduces its size toward and then past the limit, at which point it would begin to accept undersized holes and must be withdrawn.",
      },
    ],
    examples: [
      {
        title: "Fit analysis - 25 mm H7/g6 running fit",
        problem: "A 25 mm journal runs in a bushed housing bored to 25H7 (+0.021/0 mm) with the journal ground to 25g6 (-0.007/-0.020 mm). Determine the minimum and maximum clearance and classify the fit.",
        steps: [
          { label: "Hole limits", text: "25.000 to 25.021 mm - the H deviation pins the lower limit to basic size, the signature of the hole-basis system." },
          { label: "Shaft limits", text: "24.980 to 24.993 mm, from the -0.020 lower and -0.007 upper deviations." },
          { label: "Maximum clearance", text: "Largest hole minus smallest shaft: 25.021 - 24.980 = 0.041 mm." },
          { label: "Minimum clearance", text: "Smallest hole minus largest shaft: 25.000 - 24.993 = 0.007 mm." },
        ],
        result: "Clearance always lies between 0.007 mm and 0.041 mm - a close-running clearance fit on the hole basis.",
      },
      {
        title: "Worst-case and statistical tolerance stack",
        problem: "A housing recess is 60.20 ±0.05 mm deep and receives three blocks of 20.00 ±0.02, 15.00 ±0.03 and 25.00 ±0.04 mm. Find the guaranteed gap by worst-case stacking and the statistical estimate if the four tolerances are independent.",
        steps: [
          { label: "Nominal gap", text: "60.20 - (20.00 + 15.00 + 25.00) = 0.20 mm." },
          { label: "Worst-case spread", text: "±(0.05 + 0.02 + 0.03 + 0.04) = ±0.14 mm if every part sits at a limit simultaneously." },
          { label: "Worst-case gap", text: "0.20 ± 0.14 mm, so the gap lies between 0.06 mm and 0.34 mm and never closes." },
          { label: "Statistical spread", text: "Root-sum-square of independent tolerances: √(0.05² + 0.02² + 0.03² + 0.04²) = √0.0054 ≈ ±0.073 mm, giving 0.13 to 0.27 mm at high confidence." },
        ],
        result: "Guaranteed gap 0.06 to 0.34 mm by worst case; statistical estimate 0.13 to 0.27 mm.",
      },
    ],
    keyTakeaways: [
      "Use the hole-basis system unless one shaft must carry parts with different fits - then hold the shaft at h and vary the holes.",
      "Taylor's principle: GO gauges are full-form and simultaneous; NO-GO gauges touch one feature at a time.",
      "Worst-case stacking guarantees assembly but tightens every part; RSS stacking relaxes tolerances at the cost of a small statistical risk.",
      "Ra averages the profile and is the default drawing parameter; Rz exposes the peaks and valleys that govern fatigue and sealing.",
    ],
    quiz: [
      {
        q: "A 40H7 hole (+0.025/0 mm) is mated with a 40g6 shaft (-0.009/-0.025 mm). What is the maximum clearance?",
        options: [
          "0.050 mm",
          "0.025 mm",
          "0.034 mm",
          "0.009 mm",
        ],
        answer: 0,
        explanation: "Maximum clearance = upper hole limit - lower shaft limit = 0.025 - (-0.025) = 0.050 mm; the minimum clearance is 0 - (-0.009) = 0.009 mm.",
      },
      {
        q: "According to Taylor's principle, how must a NO-GO gauge be designed?",
        options: [
          "As a full-form replica of the mating part, like the GO gauge",
          "So that it contacts only one dimension or feature of the work at a time",
          "Longer than the GO gauge so it can detect taper",
          "With looser tolerances than the GO gauge since it rejects fewer parts",
        ],
        answer: 1,
        explanation: "A full-form NO-GO plug could be blocked by the small axis of an oval hole and never reveal that the other axis exceeds the limit; contacting one surface at a time prevents such missed rejections.",
      },
      {
        q: "Profile deviations from the mean line at five sampled points are +1.4, -1.6, +2.4, -2.6 and +0.4 µm. What are Ra and Rz for this sampling length?",
        options: [
          "Ra = 0 µm because the deviations average out, and Rz = 2.4 µm",
          "Ra = 8.4 µm and Rz = 5.0 µm",
          "Ra = 1.68 µm and Rz = 5.0 µm",
          "Ra = 1.68 µm and Rz = 2.4 µm",
        ],
        answer: 2,
        explanation: "Ra uses absolute values: (1.4 + 1.6 + 2.4 + 2.6 + 0.4)/5 = 1.68 µm. Rz is the peak-to-valley height: 2.4 - (-2.6) = 5.0 µm.",
      },
      {
        q: "Blocks of 30 ±0.03, 20 ±0.02 and 10 ±0.05 mm stack in a recess 60.20 ±0.06 mm deep. What is the minimum gap by worst-case analysis?",
        options: [
          "0.20 mm",
          "0.00 mm",
          "0.36 mm",
          "0.04 mm",
        ],
        answer: 3,
        explanation: "Nominal gap = 60.20 - 60.00 = 0.20 mm; worst-case deviation = ±(0.06 + 0.03 + 0.02 + 0.05) = ±0.16 mm, so the minimum gap = 0.20 - 0.16 = 0.04 mm.",
      },
      {
        q: "One ground shaft made from drawn bar stock carries two bushes requiring different fit classes. Which fit system applies, and why?",
        options: [
          "Hole-basis, since drills and reamers come in fixed sizes",
          "Shaft-basis, since the common shaft is kept at basic size and each hole takes its own zone",
          "Either system, because the fit class does not depend on the system",
          "Neither, since bushings are always selectively assembled",
        ],
        answer: 1,
        explanation: "With several fits on one shaft it is cheaper to hold the shaft at basic size (deviation h) and bore each bushing to its own fundamental deviation - the shaft-basis system.",
      },
    ],
  },
  {
    sectionId: "me-e-metrology-s4",
    readingTime: 10,
    intro: "Threads, gears and machine tools carry functional surfaces that no plain micrometer can read directly. This section works the wire methods that convert a thread's effective diameter into a single over-wires reading, the gear measurements that isolate tooth thickness and runout, and the laser interferometer that maps machine tool geometry to sub-micrometre accuracy.",
    objectives: [
      "Determine thread effective diameter from best-wire measurements and judge the result against nominal",
      "Select between chordal-thickness, span and composite checks for gear teeth",
      "Explain laser interferometric calibration of linear, angular and straightness errors of machine tools",
    ],
    concepts: [
      {
        term: "Best-wire size",
        kind: "method",
        statement: "For a symmetric thread of pitch P and half-flank angle α, the best wire touches both flanks exactly on the pitch line when $w = P/(2·cos α)$ - 0.5774P for a 60° metric thread.",
        detail: "At best-wire contact the over-wires reading is insensitive to small flank-angle errors, because the shift of the contact points compensates geometrically. Oversize or undersize wires sit off the pitch line and require correction terms in the evaluation.",
      },
      {
        term: "Over-wires measurement",
        kind: "method",
        statement: "For a 60° thread the micrometer reading over three wires is $M = E + 3w - 0.866P$, so the effective diameter is $E = M - 3w + 0.866P$.",
        detail: "Two wires rest in the lower grooves and one in the upper groove, held by a wire holder; the constant 0.866 arises from (P/2)·cot 30°. The two-wire variant places wires in opposed grooves on a floating-carriage machine, which cancels measurement-pressure effects and reaches the highest accuracy for master gauges.",
      },
      {
        term: "Chordal tooth thickness",
        kind: "method",
        statement: "The gear tooth vernier measures tooth thickness along the pitch-circle chord; for a standard gear the nominal thickness is $t = π·m/2$.",
        detail: "The vertical slide is set to the chordal addendum so the jaws straddle one tooth exactly at the pitch circle. Because the setting references the tooth tip, tip wear or profile error corrupts the reading, which limits the accuracy of the method.",
      },
      {
        term: "Base tangent (span) measurement",
        kind: "method",
        statement: "A span micrometer (flange micrometer) across k teeth reads $W_k = m·cos α·[(k - 0.5)·π + z·inv α]$, a length fixed by the base circle.",
        detail: "For z = 20, m = 2 and α = 20° with k = 3: W = 1.8794 × (2.5π + 20 × 0.0149) ≈ 15.321 mm. A deviation ΔW corresponds to a tooth-thickness change ΔW/cos α, and since the anvils bear on the involute flanks the tooth tip never enters the datum.",
      },
      {
        term: "Runout and composite checks",
        kind: "insight",
        statement: "A ball seated in successive tooth spaces against a fixed stop measures radial runout, while rolling the gear against a master gear records the total composite error in one trace.",
        detail: "The double-flank rolling test sums eccentricity, pitch and profile errors into a single radial-displacement record - ideal for production screening. Span or individual-pitch measurements are then applied to diagnose which element actually failed.",
      },
      {
        term: "Laser interferometry for machine tools",
        kind: "method",
        statement: "A frequency-stabilised He-Ne laser (λ ≈ 632.8 nm) counts interference fringes - one per λ/2 of travel - to measure axis displacement with uncertainty near 0.1 ppm.",
        detail: "Linear optics calibrate positioning accuracy and repeatability; angular optics read pitch and yaw; straightness optics map guideway deviation; squareness follows from two straightness runs at right angles. Air temperature, pressure and humidity enter through the refractive-index correction, and all results are referred to 20 °C.",
      },
      {
        term: "Ballbar circularity test",
        kind: "method",
        statement: "Running circular interpolation with a telescoping ballbar between spindle and table records radial deviation, exposing backlash, squareness and servo mismatch in one polar plot.",
        detail: "Steps at the quadrant reversals indicate lost motion; an egg-shaped plot elongated along a diagonal indicates squareness error; ellipticity along the machine axes points at scale mismatch; lobing near 45° points at servo gain mismatch between axes.",
      },
    ],
    examples: [
      {
        title: "Effective diameter of an M10 × 1.5 thread by best wires",
        problem: "An external M10 × 1.5 thread is measured over three best-size wires with a thread micrometer reading M = 10.290 mm. Find the best wire size and the effective diameter, and compare it with the nominal d2 = 9.026 mm.",
        steps: [
          { label: "Best wire", text: "w = 0.5774 × 1.5 = 0.866 mm." },
          { label: "Corrections", text: "3w = 2.598 mm and 0.866P = 0.866 × 1.5 = 1.299 mm." },
          { label: "Effective diameter", text: "E = M - 3w + 0.866P = 10.290 - 2.598 + 1.299 = 8.991 mm." },
          { label: "Comparison", text: "The thread is 9.026 - 8.991 = 0.035 mm, or 35 µm, below nominal pitch diameter." },
        ],
        result: "E ≈ 8.991 mm - about 35 µm under nominal.",
      },
      {
        title: "Fringe counting on a 300 mm axis",
        problem: "A laser interferometer with λ = 632.8 nm checks a 300 mm traverse. How many fringes pass the detector, and what length does one fringe represent?",
        steps: [
          { label: "Fringe value", text: "The optical path changes by twice the table motion, so one fringe = λ/2 = 316.4 nm = 0.3164 µm." },
          { label: "Count", text: "N = 2L/λ = 600 000 000/632.8 ≈ 948 167 fringes." },
          { label: "Scale context", text: "If the wavelength compensation holds to 1 ppm, the accumulated scale uncertainty over 300 mm is only 0.3 µm." },
        ],
        result: "About 948 167 fringes, each worth 0.3164 µm of travel.",
      },
    ],
    keyTakeaways: [
      "Best-size wires (0.5774P on 60° threads) seat on the pitch line, making the over-wires result immune to small flank-angle errors.",
      "E = M - 3w + 0.866P converts any three-wire reading of a metric thread into effective diameter.",
      "Span measurement beats the tooth vernier whenever the tooth tip cannot be trusted, because its datum is the base circle.",
      "Laser interferometry delivers sub-micrometre machine-tool calibration only when air-index and thermal corrections are applied.",
    ],
    quiz: [
      {
        q: "An M8 × 1.25 thread is checked with best-size wires (w = 0.7217 mm) and the micrometer reads M = 8.271 mm. What is the effective diameter?",
        options: [
          "8.000 mm",
          "7.188 mm",
          "7.377 mm",
          "7.024 mm",
        ],
        answer: 1,
        explanation: "E = M - 3w + 0.866P = 8.271 - 2.165 + 1.083 = 7.188 mm, which equals the nominal pitch diameter d2 = 8 - 0.6495 × 1.25 ≈ 7.188 mm, so the thread is on nominal size.",
      },
      {
        q: "Why are best-size wires specified for thread measurement?",
        options: [
          "They maximise the micrometer reading for sensitivity",
          "They contact the flanks exactly on the pitch line so flank angle errors do not affect the result",
          "They are the largest wires that fit inside the thread groove",
          "They cancel out pitch errors of the thread",
        ],
        answer: 1,
        explanation: "At w = P/(2·cos α) each wire touches both flanks at the pitch-line crossing, so small deviations of flank angle shift the contact points in a way that cancels out of the effective-diameter evaluation.",
      },
      {
        q: "Which gear measurement is referenced to the base circle and therefore insensitive to errors of the tooth tip?",
        options: [
          "Chordal thickness with a gear tooth vernier",
          "Diameter over pins",
          "Base tangent (span) measurement across k teeth",
          "Optical projection of the whole tooth profile",
        ],
        answer: 2,
        explanation: "The span micrometer contacts the involute flanks, and Wk is measured between parallel tangent planes related to the base circle, so the tooth tip never serves as a datum.",
      },
      {
        q: "A laser interferometer (λ = 632.8 nm) counts 3161 fringes during an axis move. Approximately how far did the table travel?",
        options: [
          "0.500 mm",
          "2.000 mm",
          "3.161 mm",
          "1.000 mm",
        ],
        answer: 3,
        explanation: "L = N·λ/2 = 3161 × 0.3164 µm ≈ 1000 µm = 1.000 mm, since each fringe corresponds to half a wavelength of travel.",
      },
      {
        q: "A ballbar test shows sharp steps in the polar plot exactly at the axis reversal points. What does this indicate?",
        options: [
          "Backlash in the axis drive",
          "Servo gain mismatch between axes",
          "Machine squareness error",
          "Spindle thermal growth",
        ],
        answer: 0,
        explanation: "Offsets where motion reverses direction are the signature of lost motion (backlash); squareness shows as an egg-shaped plot and servo mismatch as lobing near 45°.",
      },
    ],
  },
  {
    sectionId: "me-e-metrology-s5",
    readingTime: 9,
    intro: "Statistical quality control replaces exhaustive checking with decision rules built on data: control charts separate common-cause noise from assignable causes, acceptance sampling quantifies the risk attached to every lot decision, and capability indices say whether the process can hold the tolerance at all. This section computes each of these from realistic numbers.",
    objectives: [
      "Construct and interpret p-chart control limits from pooled inspection data",
      "Read an OC curve and quantify producer's and consumer's risks for a sampling plan",
      "Compute Cp and Cpk from process data and choose between re-centring and variation reduction",
    ],
    concepts: [
      {
        term: "Shewhart control limits",
        kind: "law",
        statement: "Control charts place 3-sigma limits about a centre line computed from the process itself; a stable process plots inside them 99.73% of the time, so a point outside flags an assignable cause.",
        detail: "For variables, the X-bar and R chart pair tracks mean and spread together. Supplementary run rules - nine points on one side of the centre line, or two of three beyond 2 sigma - catch sustained shifts that single-point limits miss.",
      },
      {
        term: "p-chart construction",
        kind: "method",
        statement: "For subgroup size n and pooled fraction defective p, $UCL = p + 3√(p(1-p)/n)$ and $LCL = p - 3√(p(1-p)/n)$; a negative LCL is set to zero.",
        detail: "The fraction p must be the long-run pooled estimate over all subgroups, never a single day's value. When subgroup sizes differ, limits are computed per subgroup and the chart takes a stair-stepped form; when n is constant and defectives are counted directly, the np chart is simpler.",
      },
      {
        term: "OC curve",
        kind: "definition",
        statement: "The operating characteristic curve of a sampling plan (n, c) plots the acceptance probability $P_a$ against the incoming fraction defective p.",
        detail: "The producer's risk α is the chance of rejecting a lot at the AQL; the consumer's risk β is the chance of accepting a lot at the LTPD. Increasing n at fixed c steepens the curve between those points, while increasing c shifts the whole curve toward more acceptance.",
      },
      {
        term: "Cp and Cpk",
        kind: "method",
        statement: "$C_p = (USL - LSL)/(6σ)$ measures spread alone, while $C_{pk} = min(USL - μ, μ - LSL)/(3σ)$ penalises an off-centre mean.",
        detail: "A Cp of 1.33 is the usual minimum for a capable process. A wide gap between the two indices is a centring problem, so re-target the mean before attacking variation. Estimate σ from within-subgroup statistics such as R-bar/d2 so that between-subgroup drift is not folded into capability.",
      },
      {
        term: "Six Sigma quality",
        kind: "insight",
        statement: "Six-sigma performance allows a 1.5σ long-term mean shift, which caps the defect rate near 3.4 per million opportunities.",
        detail: "With no shift at all, a 6σ spread against the tolerance corresponds to about two defects per billion; the 1.5σ allowance is an empirical provision for drift that accumulates between control actions.",
      },
      {
        term: "Double sampling",
        kind: "insight",
        statement: "A double sampling plan decides on a smaller first sample and draws a second sample only when the first falls in an indecisive band, cutting average sample size for the same OC protection.",
        detail: "Good lots usually clear on the first sample, so inspection effort concentrates on lots of doubtful quality. The price is administrative complexity and a plan that is harder to explain and administer on the floor.",
      },
    ],
    examples: [
      {
        title: "p-chart limits from 25 days of data",
        problem: "Twenty-five daily samples of n = 200 switches yield 500 defectives in total. Build the fraction-defective chart and judge a day that reports 38 defectives.",
        steps: [
          { label: "Centre line", text: "p = 500/(25 × 200) = 0.10." },
          { label: "Standard error", text: "√(p(1-p)/n) = √(0.10 × 0.90/200) = √0.00045 = 0.0212." },
          { label: "Limits", text: "UCL = 0.10 + 3(0.0212) = 0.164; LCL = 0.10 - 0.064 = 0.036." },
          { label: "The suspect day", text: "38/200 = 0.19 exceeds UCL = 0.164, so that day is out of control and needs an assignable-cause investigation." },
        ],
        result: "Centre line p = 0.10, UCL = 0.164, LCL = 0.036; a day at 19% defective is out of control.",
      },
      {
        title: "Capability of a grinding operation",
        problem: "Ground pins average μ = 10.020 mm with within-subgroup σ = 0.010 mm against a specification of 10.000 ± 0.050 mm. Compute Cp and Cpk and prescribe the fix.",
        steps: [
          { label: "Spread capability", text: "Cp = (10.050 - 9.950)/(6 × 0.010) = 0.100/0.060 = 1.67." },
          { label: "Centring check", text: "USL - μ = 0.030 mm while μ - LSL = 0.070 mm, so the mean leans toward the upper limit." },
          { label: "Cpk", text: "Cpk = min(0.030, 0.070)/(3 × 0.010) = 0.030/0.030 = 1.00." },
          { label: "Action", text: "Re-centre to 10.000 mm; with the same spread both indices become 1.67 and no reduction of σ is required." },
        ],
        result: "Cp = 1.67, Cpk = 1.00 - the process is off-centre, not too variable.",
      },
    ],
    keyTakeaways: [
      "Chart limits come from pooled process data, never from the specification; only capability uses the tolerance.",
      "Set a negative p-chart LCL to zero, and recompute limits for each subgroup when n varies.",
      "The OC curve is the complete signature of a sampling plan; larger n at the same c lowers the consumer's risk.",
      "Cp versus Cpk separates the two remedies of quality work: reduce variation versus re-centre the mean.",
    ],
    quiz: [
      {
        q: "Forty samples of n = 100 parts contain 160 defectives in total. What are the 3-sigma p-chart limits?",
        options: [
          "UCL = 0.099 and LCL = 0, since the computed LCL is negative",
          "UCL = 0.099 and LCL = -0.019, plotted directly on the chart",
          "UCL = 0.058 and LCL = 0.021",
          "UCL = 0.040 and LCL = 0.040",
        ],
        answer: 0,
        explanation: "p = 160/4000 = 0.04; the 3-sigma term is 3√(0.04 × 0.96/100) = 0.0588, so UCL = 0.0988 ≈ 0.099 and LCL = 0.04 - 0.0588 < 0, which is plotted as zero.",
      },
      {
        q: "A process reports Cp = 1.8 and Cpk = 0.9. What is the correct diagnosis and remedy?",
        options: [
          "Variation is excessive; invest in variation reduction",
          "Spread is adequate but the mean is off-centre; re-centre the process",
          "Both spread and centring are unacceptable",
          "Impossible, since Cpk cannot be smaller than Cp",
        ],
        answer: 1,
        explanation: "Cp proves the 6σ spread fits the tolerance with room to spare; the gap to Cpk is pure displacement of the mean, so re-centring is the cheap and correct fix.",
      },
      {
        q: "For the single sampling plan n = 50, c = 1, the probability of zero defectives at p = 0.05 is 0.077 and of exactly one defective is 0.202. What is the lot acceptance probability?",
        options: [
          "0.279",
          "0.077",
          "0.500",
          "0.721",
        ],
        answer: 0,
        explanation: "Pa = P(0) + P(1) = 0.077 + 0.202 = 0.279; the plan accepts only about 28% of lots that run 5% defective.",
      },
      {
        q: "Holding the acceptance number c fixed while increasing the sample size n does what to the OC curve?",
        options: [
          "Flattens it and raises the consumer's risk",
          "Steepens it near the indifference point and lowers β at the LTPD",
          "Shifts the whole curve to the right toward more acceptance",
          "Nothing, because only c matters",
        ],
        answer: 1,
        explanation: "More samples at the same c make acceptance fall off faster as quality worsens: the curve steepens, the consumer's risk at the LTPD drops, and inspection cost rises.",
      },
      {
        q: "Which σ should be used when computing capability indices for a process run with X-bar and R charts?",
        options: [
          "The overall standard deviation of all parts ever measured",
          "The within-subgroup estimate, such as R-bar divided by d2",
          "The tolerance divided by 6",
          "The standard deviation of the subgroup means",
        ],
        answer: 1,
        explanation: "Capability is a potential measure: σ from within-subgroup variation (R-bar/d2 or s-bar/c4) excludes assignable between-subgroup drift, which belongs to control rather than inherent capability.",
      },
    ],
  },
  {
    sectionId: "me-e-metrology-s6",
    readingTime: 8,
    intro: "A measurement is a decision, and every decision carries uncertainty. This section matches instruments to tolerance grades, assembles an error budget from its components, and follows the calibration chain that connects a shop-floor micrometer to the definition of the metre.",
    objectives: [
      "Select measuring instruments for a tolerance grade using the rule of ten and the Abbe principle",
      "Combine uncertainty components into a budget and evaluate a test uncertainty ratio",
      "Describe the traceability chain from working gauges to national standards",
    ],
    concepts: [
      {
        term: "Rule of ten",
        kind: "law",
        statement: "The measuring process should be at least ten times - and never less than four times - more precise than the tolerance it is asked to verify.",
        detail: "A ±0.05 mm free tolerance suits a caliper (±0.02 mm); a ±0.02 mm fit tolerance calls for a micrometer (±0.004 mm); ±0.005 mm demands a bench comparator with gauge blocks; below that, interferometry or a length measuring machine takes over. The 4:1 floor is usually written as a minimum test uncertainty ratio.",
      },
      {
        term: "Abbe principle",
        kind: "law",
        statement: "Maximum length-measuring accuracy requires the scale axis to be collinear with the measured dimension; an offset l and a tilt θ create a first-order sine error $l·sin θ$.",
        detail: "The micrometer satisfies Abbe because spindle, anvil and work share one line; the vernier caliper violates it because its slide sits offset from the jaw faces, so guidance errors amplify with beam length. Comparators restore Abbe by nulling the part against a collinear gauge-block stack.",
      },
      {
        term: "Error budget",
        kind: "method",
        statement: "Independent uncertainty components combine by root-sum-square, $u_c = √(u_1² + u_2² + ...)$, and the expanded uncertainty reported at roughly 95% confidence is $U = 2·u_c$.",
        detail: "Typical entries: the calibration certificate of the instrument (Type B), repeatability from repeated readings (Type A), resolution or quantisation half-width, thermal effects, and probing-force variation. Improving the largest term moves the whole budget; improving a small one changes nothing.",
      },
      {
        term: "Thermal error",
        kind: "insight",
        statement: "A length responds to temperature as $ΔL = L·α·ΔT$; with steel at α ≈ 11.5 ppm/K, a 100 mm gauge warmed by 6 K grows 6.9 µm.",
        detail: "Dimensional results are referred to 20 °C, so either measure at that temperature or correct both part and gauge. Differential expansion - part, gauge and scale at different temperatures or with different α - is what actually corrupts a comparison; hand heat, lamps and warm spindles are the usual culprits.",
      },
      {
        term: "Traceability chain",
        kind: "definition",
        statement: "Traceability is an unbroken, documented chain of calibrations, each with stated uncertainty, linking a workshop measurement to the SI unit through national metrology institutes.",
        detail: "A micrometer is calibrated against working gauge blocks; those are calibrated against reference blocks by an accredited laboratory; the reference blocks are interferometrically compared at the national institute; and the metre itself is realised from an iodine-stabilised laser. Uncertainty accumulates at every transfer, which is why reference-grade blocks carry smaller uncertainties than shop blocks.",
      },
      {
        term: "Working and reference standards",
        kind: "definition",
        statement: "Reference standards are reserved for calibrating other standards, while working standards are used day-to-day on the shop floor and are checked against the references at fixed intervals.",
        detail: "The interval is chosen so that expected wear or drift between calibrations stays comfortably inside the stated uncertainty of the working standard. Gauge blocks embody the split: grades K and 0 serve as references, while grades 1 and 2 serve as working standards.",
      },
    ],
    examples: [
      {
        title: "Error budget and TUR for a ±6 µm tolerance",
        problem: "A 25-50 mm micrometer checks a feature toleranced ±6 µm (span 12 µm). The budget lists calibration 1.0 µm, thermal 0.8 µm, repeatability 0.6 µm and resolution 0.5 µm. Compute the combined and expanded uncertainties and the test uncertainty ratio.",
        steps: [
          { label: "Combine", text: "u_c = √(1.0² + 0.8² + 0.6² + 0.5²) = √2.25 = 1.5 µm." },
          { label: "Expand", text: "U = 2 × 1.5 = 3.0 µm at approximately 95% confidence." },
          { label: "TUR", text: "TUR = tolerance span/U = 12/3.0 = 4:1 - the customary minimum." },
          { label: "Verdict", text: "The 4:1 ratio passes minimum practice but misses the rule of ten; a bench comparator with grade 0 blocks would shrink the dominant calibration term." },
        ],
        result: "u_c = 1.5 µm, U = 3.0 µm (k = 2), TUR = 4:1 - acceptable at the floor.",
      },
      {
        title: "Thermal correction to 20 °C",
        problem: "A 100 mm steel gauge block is compared on a bench at 26 °C, with gauge and part both at α = 11.5 ppm/K. What correction refers the result to 20 °C?",
        steps: [
          { label: "Expansion", text: "ΔL = L·α·ΔT = 100 mm × 11.5 ppm/K × 6 K = 6.9 µm (1.15 µm per kelvin)." },
          { label: "Sign", text: "The block is longer than its 20 °C length, so subtract 6.9 µm from the comparison result." },
          { label: "Differential note", text: "Had gauge and part shared the same α and the same temperature, the growth would cancel in the comparison; the residual error is the differential expansion, zero only when both match." },
        ],
        result: "Subtract 6.9 µm: a 100.0069 mm reading at 26 °C is 100.0000 mm at 20 °C.",
      },
    ],
    keyTakeaways: [
      "Pick the instrument by tolerance: the rule of ten is the target and a 4:1 test uncertainty ratio is the floor.",
      "Abbe alignment separates instruments that can verify tight tolerances from those that only indicate size.",
      "Error budgets combine by root-sum-square and are quoted expanded with k = 2; attack the largest component first.",
      "A result is traceable only through an unbroken, documented calibration chain to the SI, with uncertainty growing at each transfer.",
    ],
    quiz: [
      {
        q: "A feature is toleranced ±0.02 mm. Under the rule of ten, what instrument precision is the target and what is the practical choice?",
        options: [
          "±0.002 mm - a 0-25 mm micrometer",
          "±0.02 mm - a vernier caliper",
          "±0.0002 mm - a laser interferometer",
          "±0.010 mm - a steel rule",
        ],
        answer: 0,
        explanation: "One tenth of the tolerance is ±0.002 mm; a micrometer with 0.001 mm resolution and a few µm of uncertainty meets it, while a caliper with ±0.02 mm of uncertainty barely matches the tolerance itself.",
      },
      {
        q: "An error budget lists independent components of 1.0, 0.8 and 0.6 µm. What is the combined standard uncertainty?",
        options: [
          "2.4 µm",
          "1.4 µm",
          "0.8 µm",
          "2.0 µm",
        ],
        answer: 1,
        explanation: "u_c = √(1.0² + 0.8² + 0.6²) = √2.00 = 1.41 µm; budgets add in quadrature, so the result is smaller than the arithmetic sum of 2.4 µm.",
      },
      {
        q: "A 100 mm steel part with α = 11.5 ppm/K is measured at 25 °C. What is its thermal error relative to the 20 °C reference?",
        options: [
          "11.5 µm",
          "1.15 µm",
          "5.75 µm",
          "0.58 µm",
        ],
        answer: 2,
        explanation: "ΔL = L·α·ΔT = 100 mm × 11.5 ppm/K × 5 K = 5.75 µm - larger than many of the tolerances it might be checked against.",
      },
      {
        q: "Which statement defines a traceable measurement?",
        options: [
          "It was checked against any gauge available in the shop",
          "It is linked to the SI unit by an unbroken chain of calibrations, each with stated uncertainty",
          "It was taken by a qualified inspector using a labelled instrument",
          "It matches the nominal dimension on the drawing",
        ],
        answer: 1,
        explanation: "Traceability demands documented comparisons through working and reference standards up to the national institute, with each transfer carrying its own uncertainty.",
      },
      {
        q: "Why does a vernier caliper violate the Abbe principle while an outside micrometer does not?",
        options: [
          "Its scale is shorter than the jaw span",
          "Its measuring jaws are offset from the scale axis, so jaw tilt produces a sine error",
          "It reads with a vernier rather than a digital scale",
          "Its jaws are hardened less than micrometer anvils",
        ],
        answer: 1,
        explanation: "The micrometer measures along the spindle axis, collinear with the work; the caliper jaw faces sit at an offset l from the beam, so a tilt θ adds l·sinθ to every reading.",
      },
    ],
  },
];
