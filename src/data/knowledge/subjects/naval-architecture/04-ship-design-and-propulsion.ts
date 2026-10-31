/**
 * Knowledge Universe — Naval Architecture & Marine Engineering — Chapter 04: Ship Design & Propulsion
 * 1 lesson · ~1,213 words
 * field: Naval Architecture
 * legacy sources: x51-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Ship Design & Propulsion]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 eng-naval-design-propulsion — Ship Design and Propulsion: The Spiral from Deadweight to Propeller
 */
import type { KnowledgeTopic } from '../../types'

export const navalArchitectureCh04: KnowledgeTopic[] = [
  {
    id: 'eng-naval-design-propulsion',
    title: 'Ship Design and Propulsion: The Spiral from Deadweight to Propeller',
    domain: 'Engineering',
    field: 'Naval Architecture',
    branch: 'Ship Design & Propulsion',
    tier: 'core' as const,
    concepts: [
      'Displacement, deadweight and tonnage are three different numbers',
      'Froude number: the speed-length scaling law',
      'Block coefficient: the hull-form fingerprint',
      'The design spiral: no ship is designed in one pass',
      'Propeller theory: J, KT, KQ and open-water efficiency',
      'Wake fraction and thrust deduction',
      'Sea trials and the statutory frame (SOLAS, MARPOL)',
    ],
    words: 1213,
    readMins: 6,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'A ship is a system that fights itself: more cargo wants a fuller hull, a fuller hull wants more power, more power wants more machinery space, and every addition sinks the ship deeper and costs speed. Ship design is the art of closing that loop — and because changing anything changes everything, the work is not a line but a spiral: estimate dimensions, check stability, size the structure, pick the propeller, re-estimate, and go around again until the numbers converge.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The words people use for "how big is a ship" hide three different quantities, and confusing them has real consequences — port dues on one, cargo capacity on another, and the draft limits of every channel on the third. Propulsion is the same trap: most of a ship\u2019s fuel bill is decided by two dimensionless numbers chosen in the design spiral\u2019s first turns.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The size measures first. Displacement is the actual mass of water the hull pushes aside — the ship\u2019s total weight, hull, fuel and all. Deadweight (DWT) is what the ship can CARRY: cargo, fuel, fresh water, stores and crew — the charter-market number. Gross tonnage (GT) is neither: it is a dimensionless measure of enclosed VOLUME set by the international tonnage convention, and it drives crewing rules and port dues. A 300,000 DWT VLCC displaces about 360,000 tonnes, but its GT is roughly 300,000 too while a passenger ship of similar GT carries a fraction of the mass. Three numbers, three audiences.',
      },
      {
        kind: 'para',
        text: 'Speed scales with length. The Froude number V/√(gL) — speed over the square root of gravity times waterline length — is the scaling law of ship resistance: geometrically similar hulls at the same Froude number make the same wave pattern. This is why a 15-knot 150-metre ship and a 7-knot model behave alike, why fast ships must be long (wave-making resistance climbs steeply above Froude numbers of about 0.3), and why model basins test at matched Froude number and correct the frictional part separately.',
      },
      {
        kind: 'para',
        text: 'Hull fullness is captured by the block coefficient Cb — displacement divided by length × beam × draft × water density. A tanker Cb of 0.82 is a floating brick: maximum cargo for minimum steel, efficient at its slow Froude number. A container ship\u2019s 0.65 and a fast ferry\u2019s 0.45 buy fineness for speed. The bulbous bow is the classic trick: its own wave system interferes destructively with the hull\u2019s bow wave, cutting wave resistance a few percent — significant over a year of fuel.',
      },
      {
        kind: 'para',
        text: 'The propeller is where power becomes thrust. Its performance lives in three dimensionless groups: the advance coefficient J = Va/(nD) — advance speed over revs times diameter — and the thrust and torque coefficients KT and KQ measured on models in open water. Open-water efficiency is η = J·KT / (2π·KQ), and it peaks at one J for a given propeller — which is why diameter, pitch and revs are chosen together for the ship\u2019s design speed. Behind the hull the propeller works in the ship\u2019s wake: the wake fraction raises the local advance speed ratio while the thrust deduction taxes the propeller for the suction it creates on the stern — the hull-propeller interaction that turns open-water efficiency into the propulsive efficiency actually achieved.',
      },
      {
        kind: 'para',
        text: 'The spiral closes with verification. Model tests in a towing tank measure resistance and self-propulsion; CFD refines the wake field; then the real ship goes on sea trials — a speed trial over measured distances, a bollard test with the ship tied to a load cell, maneuvering and crash-stop runs. On top of the engineering sits the statutory frame: SOLAS (born as the 1914 response to Titanic — subdivision, life-saving appliances, and later the GMDSS radio regime) governs safety, MARPOL governs pollution, and classification (the structures lesson\u2019s subject) verifies compliance in the yard.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Task: pick a propeller for a 12,000 DWT cargo ship needing 12 knots from 5 MW delivered power.',
          'Start from diameter: propeller clearance under the hull and draft cap the diameter, say 5.5 m; slow ships favor large diameter at low revs.',
          'Choose the operating point: a four-blade propeller near its J of best efficiency — set revs so J = Va/(nD) lands near the peak, then read KT and KQ from the open-water series.',
          'Check the spiral: thrust at that point must balance hull resistance at 12 knots; if the margin fails, the diameter, pitch or revs change and the loop runs again — the spiral in miniature.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Chartering and ports: deadweight prices the cargo, GT prices the dues, draft rules the channel — three numbers for three negotiations.',
        'Fuel economics: hull roughness, wake-aligned propellers and speed optimization are worth percentages of the world\u2019s largest fuel bill.',
        'Model basins and CFD: every new hull is Froude-scaled in a tank and wake-mapped in a computer before steel is cut.',
        'Sea trials: the speed trial\u2019s measured-mile runs and the bollard pull are the design spiral\u2019s final examination.',
        'Survey and refit: propeller polishing and bulb retrofits are the operator\u2019s cheap version of the designer\u2019s wave-interference trick.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, deadweight equals displacement — no: deadweight is carrying capacity, displacement is total weight. Second, tonnage as weight — GT measures volume by convention, which is why a cruise ship can "out-tonne" a tanker of triple the mass. Third, "a bigger propeller is always better" — clearance, tip-speed cavitation and port draft all bound diameter; the optimum is a spiral answer. Fourth, reading open-water efficiency as the ship\u2019s efficiency — wake and thrust deduction stand between the two. Fifth, treating SOLAS as paperwork: every chapter traces to a named casualty, Titanic first among them.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'deadweight (DWT)', def: 'The mass a ship can carry — cargo, fuel, stores, crew. The charter number.' },
        { term: 'gross tonnage (GT)', def: 'A dimensionless measure of enclosed volume — the regulatory and dues number, not a weight.' },
        { term: 'Froude number', def: 'V/√(gL): the speed-length law that makes model tests predictive.' },
        { term: 'block coefficient', def: 'Cb — displacement over the length-beam-draft box: the hull\u2019s fullness fingerprint.' },
        { term: 'advance coefficient (J)', def: 'Va/nD — the propeller\u2019s dimensionless operating point.' },
        { term: 'wake fraction / thrust deduction', def: 'The hull\u2019s slowing of flow into the propeller and the suction tax on its thrust.' },
        { term: 'design spiral', def: 'The iterative loop — dimensions, stability, structure, propulsion — by which ships converge.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Port dues are most likely charged on which measure?',
          options: ['Deadweight', 'Gross tonnage', 'Displacement', 'Draft'],
          answer: 1,
          explain: 'GT measures enclosed volume by convention and drives dues, manning and regulation.',
        },
        {
          q: 'Why must a fast ship be long?',
          options: ['Long ships carry more', 'Wave-making resistance climbs steeply with Froude number, and length lowers it', 'Engines only fit in long hulls', 'Short hulls cannot be welded'],
          answer: 1,
          explain: 'V/√(gL) falls as length rises — the same speed costs far less wave resistance from a longer hull.',
        },
        {
          q: 'A tanker\u2019s block coefficient of 0.82 means…',
          options: ['82% of the hull is steel', 'the hull fills 82% of its length-beam-draft box', 'the propeller is 82% efficient', 'the ship is 82 years old'],
          answer: 1,
          explain: 'Cb is the fullness ratio — tankers are bricks on purpose: cargo per unit steel.',
        },
        {
          q: 'The wake fraction and thrust deduction together explain why…',
          options: ['open-water efficiency overstates the ship\u2019s propulsive efficiency', 'propellers need polishing', 'bulbous bows exist', 'trials measure bollard pull'],
          answer: 0,
          explain: 'Hull-propeller interaction stands between the open-water model and the achieved propulsive efficiency.',
        },
      ] },
    ],
  },
]
