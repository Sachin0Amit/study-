/**
 * Knowledge Universe — Medical Technology — Chapter 01: Biomedical Imaging
 * 2 lessons · ~2,343 words
 * field: Medical Technology
 * legacy sources: technology-applied.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Biomedical Imaging, Machines That See Within]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 tech-mri-machines — How MRI Machines See Inside You
 *   01.2 tech-medical-imaging-ultrasound-ct — Seeing Inside: Ultrasound, X-Ray and CT
 */
import type { KnowledgeTopic } from '../../types'

export const medicalTechnologyCh01: KnowledgeTopic[] = [
  {
    id: 'tech-mri-machines',
    title: 'How MRI Machines See Inside You',
    domain: 'Technology & Applied Science',
    field: 'Medical Technology',
    branch: 'Biomedical Imaging',
    tier: 'advanced',
    concepts: [
      'Protons as tiny spinning magnets',
      'Alignment and net magnetisation',
      'Resonance: tipping with radio waves',
      'Relaxation: T1 and T2 contrast',
      'Gradients: encoding position as frequency',
      'K-space and image reconstruction',
    ],
    words: 1145,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Your body is more than half water, and every water molecule carries hydrogen nuclei — protons that behave like microscopic compass needles. An MRI machine surrounds you with a magnetic field tens of thousands of times stronger than Earth\u2019s, persuades a tiny surplus of those needles to line up, tips them over with a pulse of radio waves, and listens as they relax. The echo that returns carries positions in its frequencies and tissue identity in its decay times — anatomy reconstructed without a single particle of ionising radiation.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'MRI sees the soft tissue that X-rays blur into shadow — brains, ligaments, tumours — with no radiation dose, making it safe to repeat and to use across a lifetime. It is nuclear physics, electromagnetism and Fourier analysis shaking hands inside a hospital.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A proton carries charge and spin, and spinning charge is a magnet: every hydrogen nucleus is a compass needle of unthinkable smallness. Placed in a strong field, each needle precesses around the field direction — wobbling like a spinning top — at a rate proportional to the field strength. That rate is the Larmor frequency, and it is the machine\u2019s tuning note.',
      },
      {
        kind: 'para',
        text: 'The needles do not all point the same way at body temperature: thermal jostling fights alignment, and the surplus is minute — a few extra aligned protons per million at clinical field strengths. But a millilitre of water holds some 10²² protons, so the tiny surplus sums into a measurable magnetisation pointing along the field. That net vector is what the machine manipulates and reads.',
      },
      {
        kind: 'para',
        text: 'A radio pulse tuned exactly to the Larmor frequency pushes the aligned magnetisation sideways — resonance, the same physics as pushing a swing at its own rhythm. Tip it ninety degrees and it lies in the plane perpendicular to the field, spinning as it precesses; that rotating magnetisation is a radio transmitter, and the coil around you is its antenna. When the pulse ends, the signal begins.',
      },
      {
        kind: 'para',
        text: 'The tipped magnetisation relaxes back toward alignment, and tissues relax differently — this is the entire basis of contrast. T1 tracks how quickly spins hand their energy to their surroundings and realign along the field; T2 tracks how quickly neighbouring spins fall out of step with each other. Watery fluid is slow at both, fat is quick. Choosing when to pulse (TR) and when to listen (TE) decides whether the image weights T1 or T2 — the radiologist\u2019s contrast knobs.',
      },
      {
        kind: 'para',
        text: 'A perfectly uniform field would tell you nothing about position. So MRI adds gradient coils that tilt the field slightly along each axis: protons near the head precess a shade faster than protons near the toes, and position is encoded as frequency. A second gradient phase-encodes across the other axis, and the received signal becomes a superposition of tones — a chord whose score is the slice of you.',
      },
      {
        kind: 'para',
        text: 'Decoding that chord is Fourier analysis: the raw signal fills a data grid called k-space, one line per repetition, and an inverse transform turns frequency-and-phase data into a spatial image. Scan time is largely k-space-filling time, which is why scanners are loud — gradient coils switching thousands of times a minute — and why acceleration tricks, from echo-planar readouts to arrays of receiver coils, are so prized.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Larmor frequency',
        latex: 'f = \\frac{\\gamma}{2\\pi}\\,B_0',
        meaning: 'Precession frequency grows linearly with field strength: about 42.58 MHz per tesla for hydrogen protons.',
      },
      {
        kind: 'formula',
        name: 'Signal and contrast',
        latex: 'S \\propto \\rho\\left(1 - e^{-TR/T_1}\\right)e^{-TE/T_2}',
        meaning: 'Signal from proton density ρ, shaped by repetition time TR and echo time TE — the knobs of image weighting.',
      },
      {
        kind: 'formula',
        name: 'Spatial encoding',
        latex: '\\omega(x) = \\gamma\\left(B_0 + G_x\\,x\\right)',
        meaning: 'A gradient G_x makes precession frequency a map of position — the key that turns tones into places.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the operating frequency of a 1.5 T scanner (and a 3 T one), and the T1 contrast between two tissues with T1 = 400 ms and T1 = 800 ms imaged at TR = 500 ms.',
          'Recall the governing idea: the Larmor frequency scales linearly with field, and T1 signal grows as 1 − e^(−TR/T1).',
          'Apply: f = 42.58 × 1.5 ≈ 63.9 MHz (about 128 MHz at 3 T). Signal factors: 1 − e^(−500/400) = 1 − e^(−1.25) ≈ 0.71 for the first tissue; 1 − e^(−500/800) = 1 − e^(−0.625) ≈ 0.46 for the second.',
          'State the result: the short-T1 tissue returns about 71% of its equilibrium signal against 46% — bright versus dark — while the machine\u2019s radio system tunes to roughly 64 MHz at 1.5 T.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Brain and spinal cord imaging, where soft-tissue contrast outruns X-rays and CT',
          'Musculoskeletal scans of ligaments, cartilage and intervertebral discs',
          'Cancer imaging, with contrast agents that shorten T1 where they pool',
          'Functional MRI, tracking blood oxygenation to watch the working brain',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'MRI has no ionising radiation, but the field is ferociously strong: a forgotten wrench or oxygen cylinder becomes a projectile. Implants with ferromagnetic parts and some older pacemakers are hard exclusions. And the machine\u2019s sensitivity is its price — minutes-long acquisitions mean motion blurs images that faster methods would freeze, and the bore tests the claustrophobic.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Precession', def: 'The wobble of a spinning nucleus around the direction of the main field.' },
          { term: 'Larmor frequency', def: 'Precession rate γB₀/2π — the radio channel each proton broadcasts on.' },
          { term: 'RF pulse', def: 'A burst of radio waves at the Larmor frequency that tips the net magnetisation.' },
          { term: 'T1 relaxation', def: 'Spin-lattice recovery — the time constant for realignment with the main field.' },
          { term: 'T2 relaxation', def: 'Spin-spin dephasing — the time constant for losing synchrony among neighbours.' },
          { term: 'Gradient coil', def: 'An electromagnet that tilts the field linearly to encode position as frequency.' },
          { term: 'K-space', def: 'The raw frequency-and-phase data grid that Fourier transforms into the image.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Larmor frequency of protons at 3 tesla is about:',
            options: ['21 MHz', '64 MHz', '128 MHz', '256 MHz'],
            answer: 2,
            explain: '42.58 MHz per tesla times three: roughly 128 MHz.',
          },
          {
            q: 'T1 weighting is achieved by choosing:',
            options: [
              'long TR and long TE',
              'short TR and short TE',
              'no RF pulse at all',
              'a very strong gradient',
            ],
            answer: 1,
            explain: 'A short repetition time leaves long-T1 tissues signal-starved, and a short echo time keeps T2 out of the picture.',
          },
          {
            q: 'Gradient coils encode position by:',
            options: [
              'moving the patient through the bore',
              'making precession frequency vary linearly across the body',
              'heating selected tissues',
              'blocking unwanted radio waves',
            ],
            answer: 1,
            explain: 'Frequency becomes a map of location along each gradient axis — the trick that makes imaging possible.',
          },
          {
            q: 'Unlike CT, MRI obtains its images without:',
            options: ['magnetic fields', 'ionising radiation', 'computers', 'contrast between tissues'],
            answer: 1,
            explain: 'MRI uses static fields, gradients and radio waves — no X-ray photons, hence no ionising dose.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Electromagnetism and the Fourier transform are the foundations — the latter you may know from signal processing. Follow with contrast agents and how they alter relaxation, diffusion imaging that maps water motion in the brain, and functional MRI, which reads blood oxygenation as a proxy for thought.',
        tone: 'path',
      },
    ],
  },
  {
    id: "tech-medical-imaging-ultrasound-ct",
    title: "Seeing Inside: Ultrasound, X-Ray and CT",
    domain: "Technology & Applied Science",
    field: "Medical Technology",
    branch: "Machines That See Within",
    tier: "intermediate",
    concepts: [
      "pulse-echo ranging with sound at 1,540 m/s",
      "acoustic impedance and why gel is mandatory",
      "Doppler shift measures blood flow",
      "X-ray attenuation makes the shadow image",
      "CT reconstructs slices from hundreds of projections",
      "dose and contrast trade-offs across modalities",
    ],
    words: 1198,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Medicine's oldest problem is that the interesting parts are hidden: for most of history, seeing inside meant cutting open. Today a hospital can image a beating heart, a broken wrist or a bleeding vessel in minutes, scalpel-free. This lesson covers the two workhorse families — ultrasound, which times its own echoes, and X-rays, which photograph shadows — and shows how CT spins hundreds of those shadows into a three-dimensional map. MRI, the third great modality, has its own lesson and appears here only on the map.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "No single scanner wins: each modality trades detail, speed, safety and cost differently. Ultrasound first for a pregnancy, CT first for a trauma — that triage is applied physics, and the dose a patient accumulates across a lifetime of scans is a budget worth managing.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Ultrasound is sonar aimed at people. The probe fires a short pulse of megahertz sound — far above hearing — and times the echo: at roughly 1,540 meters per second through tissue, a reflection arriving after 65 microseconds came from about 5 centimeters deep, because the pulse travels out and back. Thousands of pulses per second, swept across a fan, build the familiar gray image — refreshed live, which is why the screen shows a beating heart in motion.",
      },
      {
        kind: "para",
        text: "What echoes at all is governed by acoustic impedance — density times sound speed. Only at boundaries between different impedances does sound reflect; the bigger the mismatch, the stronger the echo. That physics dictates the gel: air's impedance is effectively zero next to tissue, so a tissue-air gap reflects over 99.9 percent of the pulse and blinds the probe — and the same mismatch makes lung and skull ultrasound's blind spots. Moving reflectors add Doppler: blood streaming toward the probe raises the echo's pitch, and the shift measures flow speed.",
      },
      {
        kind: "para",
        text: "An X-ray machine is a light bulb with a shadow problem. Photons stream through the body, and each tissue attenuates by its density and atomic number: calcium-rich bone absorbs strongly, soft tissue weakly, air barely at all. The detector behind the patient records what survived — a radiograph, literally a shadow picture where bone glows white against dark lungs. Hollow organs that all look alike can be separated by contrast agents: barium swallowed for the gut, iodine injected into vessels — substances deliberately denser than their surroundings.",
      },
      {
        kind: "para",
        text: "A single shadow flattens the whole body into one plane, and that is where computed tomography takes over. A CT scanner spins an X-ray tube around the patient, firing through from hundreds of angles; each projection is one shadow of the slice. Reconstruction — the Radon idea — inverts the problem: knowing how much was absorbed along every line through the slice, the machine solves for the density of every point within it. The output is a stack of cross-sectional maps with brightness calibrated in Hounsfield units, water at zero.",
      },
      {
        kind: "para",
        text: "The price of X-rays is ionization: a photon energetic enough to image bone can also break a chemical bond, and damaged DNA carries a small, real, decades-later cancer risk. Dose is budgeted accordingly — a chest X-ray costs about 0.1 millisievert, a head CT about 2 — and children, with the most cell division ahead of them, spend most carefully. Ultrasound and MRI spend no radiation at all (MRI trades photons for magnetism and has its own lesson). The modality map follows the physics: ultrasound for soft, moving structures; plain X-ray for bone and chest; CT when trauma or stroke demands speed and detail despite the dose.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Acoustic impedance",
        latex: "Z = \\rho c",
        meaning: "Density times sound speed — the property whose mismatch at an interface decides how much of a pulse echoes back.",
      },
      {
        kind: "formula",
        name: "Interface reflection coefficient",
        latex: "R = \\left( \\frac{Z_2 - Z_1}{Z_2 + Z_1} \\right)^2",
        meaning: "Fraction of incident sound intensity reflected at a boundary between impedances Z1 and Z2.",
      },
      {
        kind: "formula",
        name: "Echo depth",
        latex: "d = \\frac{c\\, t}{2}",
        meaning: "Reflector depth from echo time t: sound speed times time, halved because the pulse travels out and back.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: how much of an ultrasound pulse reflects at a soft-tissue-to-air gap versus a soft-tissue-to-bone boundary — and why is gel non-negotiable?",
          "Recall the governing idea: the reflection coefficient depends on the impedance mismatch; typical values are soft tissue 1.6 million, bone 7.8 million and air about 413 rayls.",
          "Apply: tissue to air — (1,600,000 − 413) ÷ (1,600,000 + 413) ≈ 0.9995, squared ≈ 0.999, so 99.9 percent reflects and almost nothing enters. Tissue to bone — (7,800,000 − 1,600,000) ÷ (7,800,000 + 1,600,000) ≈ 0.66, squared ≈ 0.43, so 43 percent reflects: bone lights up brightly but blocks the view behind it.",
          "State the result: gel wipes out the tissue-air gap by matching impedances so the pulse can leave the probe at all — and the same mismatch makes ribs and skull both landmark and blind spot.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Obstetric scans watch fetal anatomy grow, radiation-free",
          "Doppler exams grade carotid narrowing and leaking heart valves",
          "Emergency radiographs triage fractures and pneumonias in minutes",
          "Whole-body CT is the standard first look in major trauma and stroke",
          "Pocket-sized ultrasounds now ride in ambulances and rural clinics",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Ultrasound is not automatically harmless: no ionizing radiation, but high-output modes still heat tissue, which is why fetal scans keep power low. Do not read a normal radiograph as a clean bill of health — a shadowgram hides everything it overlaps. And never treat CT detail as free: every scan spends millisieverts from a lifetime budget, so the right scan beats the biggest scan.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Acoustic impedance", def: "Density times sound speed; the mismatch between two tissues sets echo strength." },
          { term: "Doppler shift", def: "Pitch change of echoes from moving blood, revealing flow speed and direction." },
          { term: "Attenuation", def: "Progressive absorption and scattering of a beam as it crosses tissue." },
          { term: "Radiograph", def: "The plain X-ray image — a shadow picture of what survived the beam." },
          { term: "Computed tomography", def: "Reconstructing a body slice's densities from hundreds of angular projections." },
          { term: "Contrast agent", def: "Dense substance such as barium or iodine that makes hollow structures visible." },
          { term: "ALARA", def: "As low as reasonably achievable — the guiding rule of radiation dose." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Why must gel be applied between an ultrasound probe and the skin?",
            options: [
              "To cool the transducer",
              "To lubricate the scanning motion",
              "To replace the tissue-air interface that reflects 99.9 percent of the pulse",
              "To sterilize the skin",
            ],
            answer: 2,
            explain: "Air next to tissue reflects nearly everything; gel bridges the impedance gap so sound can enter the body.",
          },
          {
            q: "In pulse-echo imaging, reflector depth is computed as:",
            options: ["d = c × t", "d = c × t / 2", "d = t / c", "d = 2c × t"],
            answer: 1,
            explain: "The pulse travels out and back, so distance is halved: 65 microseconds means about 5 centimeters.",
          },
          {
            q: "Computed tomography differs from a plain radiograph because it:",
            options: [
              "Uses sound instead of X-rays",
              "Reconstructs slice densities from many projections taken around the body",
              "Requires no radiation",
              "Images only bone",
            ],
            answer: 1,
            explain: "Hundreds of angular shadows are mathematically inverted into a cross-sectional density map.",
          },
          {
            q: "Which modality is the usual first choice in pregnancy, and why?",
            options: [
              "CT, for its detail",
              "MRI, for its speed",
              "Ultrasound, because it uses no ionizing radiation and shows live motion",
              "Fluoroscopy, for its contrast",
            ],
            answer: 2,
            explain: "No ionizing radiation, real-time viewing and low cost make ultrasound first-line for the fetus.",
          },
        ],
      },
    ],
  },
]
