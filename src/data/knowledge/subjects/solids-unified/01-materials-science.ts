/**
 * Knowledge Universe — Mechanics of Solids & Materials — Chapter 01: Materials Science
 * 1 lesson · ~1,050 words
 * field: Materials Science
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Materials Science]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 eng-why-materials-fail — Why Materials Fail: Stress, Fatigue and Fracture
 */
import type { KnowledgeTopic } from '../../types'

export const solidsUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'eng-why-materials-fail',
    title: 'Why Materials Fail: Stress, Fatigue and Fracture',
    domain: 'Engineering',
    field: 'Materials Science',
    branch: 'Mechanical Behavior',
    tier: 'core',
    concepts: [
      'stress versus strain',
      'elastic and plastic deformation',
      'yield strength and ultimate tensile strength',
      'ductile versus brittle fracture',
      'the S–N curve and fatigue life',
      'stress concentration at cracks and notches',
      'fracture toughness',
    ],
    words: 1050,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Materials fail in only a few fundamentally different ways, and engineers who can read those signatures prevent catastrophes. Stress and strain describe how a material carries load; yielding, necking and fracture describe how it stops carrying it. This topic connects the tensile test you can run in any lab to the failure modes — fatigue, brittle fracture, creep — that decide the service life of bridges, aircraft and pressure vessels.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Most structural failures happen far below the material\'s rated strength, under repeated loads or at pre-existing flaws. Understanding fatigue and fracture mechanics is the difference between designing for the first flight and designing for ten thousand of them.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Stress is force normalized by the area carrying it, measured in pascals; strain is dimensionless stretch, the change in length over original length. Normalizing this way lets you compare a wire and a bridge strut made of the same steel on equal footing.',
      },
      {
        kind: 'para',
        text: 'Below the yield strength, deformation is elastic: remove the load and the material springs back, obeying Hooke\'s law with a linear stress–strain slope called the Young\'s modulus. Above it, dislocations in the crystal lattice begin to move and multiply, and the deformation is plastic — permanent.',
      },
      {
        kind: 'para',
        text: 'Ductile materials like mild steel stretch visibly, neck down and tear with a cup-and-cone fracture, warning before they go. Brittle materials like glass or cast iron show almost no warning: a fast-running crack separates the part with little absorbed energy, often triggered at low temperature or high loading rate.',
      },
      {
        kind: 'para',
        text: 'Fatigue is failure by repeated loading at stresses well below ultimate strength. Microscopic cracks nucleate at surface imperfections, then grow a little on every cycle until the remaining cross-section cannot carry the load. The S–N curve plots cycles to failure against stress amplitude and reveals an endurance limit in steels — a stress below which life is effectively infinite.',
      },
      {
        kind: 'para',
        text: 'Stress concentration explains where cracks prefer to start: holes, notches, welds and sharp corners locally multiply the nominal stress, and the sharper the flaw, the higher the multiplier. This is why fatigue-critical parts have generous fillets, polished surfaces and deliberately rounded holes.',
      },
      {
        kind: 'para',
        text: 'Fracture toughness quantifies resistance to a crack of a given size: it sets the critical stress at which that crack will run catastrophically. Design shifts from "is the stress below yield?" to "is the largest crack we might have, at this stress, still stable?" — the core question of damage-tolerant design.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Engineering stress and strain',
        latex: '\\sigma = \\frac{F}{A_0}, \\qquad \\varepsilon = \\frac{\\Delta L}{L_0}',
        meaning: 'Force per original area and extension per original length — the normalized language of loading.',
      },
      {
        kind: 'formula',
        name: 'Hooke\'s law',
        latex: '\\sigma = E\\,\\varepsilon',
        meaning: 'In the elastic region, stress is proportional to strain; the constant is the Young\'s modulus.',
      },
      {
        kind: 'formula',
        name: 'Griffith–Irwin criterion',
        latex: '\\sigma_c = \\frac{K_{Ic}}{Y\\sqrt{\\pi a}}',
        meaning: 'Critical stress for a crack of size a to run; higher fracture toughness K(Ic) tolerates bigger flaws.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a steel bracket survives 200 MPa static load indefinitely but cracks after ~1 million cycles of the same load — why does cyclic loading matter here?',
          'Recall the governing idea: fatigue life follows the S–N curve, and surface flaws concentrate stress; 200 MPa may sit above the endurance limit, so each cycle grows a crack from some nucleation site.',
          'Apply it to the specifics: locate the crack origin — likely a sharp corner or weld toe; the local stress there exceeds 200 MPa by the concentration factor, accelerating nucleation and early growth until final fast fracture.',
          'State the result: the fix is geometric and procedural — radius the corner, polish or shot-peen the surface to add compressive residual stress, and verify against the S–N curve that the new local amplitude sits below the endurance limit.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Aircraft airframes certified by fatigue life and inspection intervals, not just static strength',
          'Bridges and railway axles designed against decades of load cycles',
          'Hip implants matched to the million-cycle walking loads of a patient\'s remaining decades',
          'Pressure vessels inspected by ultrasonic crack detection between services',
          'Springs and fasteners specified with surface treatments precisely to push fatigue life out',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not confuse ultimate tensile strength with a safe design stress — parts in service fail by fatigue and fracture, not by one giant pull. Do not assume a bigger, thicker part is always safer: thick sections can shift a steel to brittle behavior and add triaxial stresses at welds that help cracks start.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Yield strength', def: 'Stress at which plastic deformation begins.' },
          { term: 'Young\'s modulus', def: 'Slope of the elastic stress–strain line; stiffness of the material.' },
          { term: 'Necking', def: 'Local thinning that precedes ductile failure in tension.' },
          { term: 'Endurance limit', def: 'Stress amplitude below which (in steels) fatigue life is effectively infinite.' },
          { term: 'Stress concentration factor', def: 'Ratio of local peak stress to nominal stress at a geometric discontinuity.' },
          { term: 'Fracture toughness', def: 'Material resistance to crack propagation; sets critical crack-stress combinations.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A material deforms permanently. This means the applied stress exceeded its:',
            options: ['Young\'s modulus', 'Yield strength', 'Endurance limit', 'Fracture toughness'],
            answer: 1,
            explain: 'Plastic (permanent) deformation begins once stress passes the yield strength; below that, unloading returns the material to its original shape.',
          },
          {
            q: 'Fatigue failure occurs because:',
            options: [
              'The stress exceeded ultimate tensile strength',
              'Repeated cyclic loads grow cracks over many cycles',
              'The material melted under load',
              'Corrosion dissolved the cross-section',
            ],
            answer: 1,
            explain: 'Cyclic stress below static strength nucleates and grows cracks cycle by cycle until the remaining section fails suddenly.',
          },
          {
            q: 'Why are sharp corners rounded in fatigue-critical parts?',
            options: [
              'To reduce weight',
              'To lower the stress concentration factor',
              'To improve appearance',
              'To ease manufacturing',
            ],
            answer: 1,
            explain: 'A sharp notch multiplies local stress dramatically; a generous radius drops the concentration factor and with it the crack-driving force.',
          },
          {
            q: 'A brittle fracture surface typically shows:',
            options: [
              'Large ductile tearing and necking',
              'A cup-and-cone pattern',
              'Flat, granular appearance with little deformation',
              'Extensive plastic stretching',
            ],
            answer: 2,
            explain: 'Brittle cracks run fast with minimal plasticity, leaving a flat, often granular fracture face — the opposite of ductile tearing.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Comfort with force equilibrium and simple tension members is enough to start. Next: dislocation theory for why metals yield, then linear elastic fracture mechanics, and finally damage-tolerant design and inspection scheduling.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Stress is force over area; strain is stretch over length.',
          'Elastic means reversible; plastic means permanent; yield strength is the border.',
          'Ductile failure warns; brittle failure does not.',
          'Fatigue kills parts below rated strength, cycle by cycle, from surface flaws.',
          'Rounded geometry, treated surfaces and fracture mechanics keep cracks small and stable.',
        ],
      },
    ],
  },
]
