/**
 * Knowledge Universe — Architecture — Chapter 03: Design & Practice
 * 1 lesson · ~1,384 words
 * field: Architecture
 * legacy sources: x43-arts-architecture-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Design & Practice]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 arch-design-practice — The Architect's Work: Site, Program and Drawing
 */
import type { KnowledgeTopic } from '../../types'

export const architectureCh03: KnowledgeTopic[] = [
  {
    id: 'arch-design-practice',
    title: 'The Architect\'s Work: Site, Program and Drawing',
    domain: 'Arts & Culture',
    field: 'Architecture',
    branch: 'Design & Practice',
    tier: 'core',
    concepts: [
      'Site analysis: sun, wind, access and context',
      'The program: a space list with intentions',
      'Design phases: schematic to construction documents',
      'The drawing set: plan, section, elevation, detail',
      'Codes, budgets and the permit gauntlet',
      'The architect as coordinator of specialists',
    ],
    words: 1384,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Architecture is decided twice — once as an idea and once as a building — and the profession that connects the two is a discipline of translation. An architect receives a client\'s hopes, a site\'s facts and a budget\'s limits, and must turn them into drawings so complete that strangers with machines can build exactly what was imagined. The instruments of that translation — site analysis, the program, the phased design process and the standard drawing set — are what this lesson assembles into the arc of a real project.',
      },
      {
        kind: 'para',
        text: 'The arc has a rhythm every practice recognises. Site and brief are studied first; the design then develops in widening circles of commitment — broad concepts, then coordinated systems, then buildable documents; then permits, contractors and construction, with the architect answering questions no drawing anticipated. Each phase has its own questions, and the craft is asking them while the answers are still cheap.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Almost everyone will commission, renovate or contribute to a building at some point. Knowing how the process actually runs — what a program is, why the drawings look the way they do, when a decision becomes expensive to change — turns clients from spectators into participants.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Reading the Site, Writing the Program' },
      {
        kind: 'para',
        text: 'Site analysis is disciplined eavesdropping on a place. The sun\'s path across the year decides where glass will gain winter warmth and suffer summer heat; prevailing winds suggest how the plan might breathe; access points, slopes and drainage set the routes that people and water will insist on taking. Boreholes and a geotechnical report reveal what the soil will charge for foundations; noise sources, views and the scale, materials and rhythm of the neighbours define the context any sensitive design must answer. Zoning completes the frame, carving the legal building envelope out of setbacks, height limits and permitted use. All of it lands on paper as diagrams — sun angles, wind arrows, circulation routes — before a single floor is drawn.',
      },
      {
        kind: 'para',
        text: 'The program — the brief — is the building\'s genome: a list of spaces with areas and intentions. It is quantitative (how many seats, how many shelves, what area of plant room) and qualitative (the lobby must feel generous; the counselling room must feel private). Adjacencies are the crucial layer — which rooms must neighbour, which must never — and bubble diagrams capture them before any geometry exists. Net areas are then grossed up, because corridors, walls and shafts add a substantial premium, and the gross figure sizes the whole. Every later dispute is settled by appeal to this document, so the program\'s quality quietly determines the building\'s.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Site: a corner lot with a bus stop on the west, noise from a main street to the north, generous southern exposure, zoning permitting three storeys.',
          'Program: a branch library — reading room, children\'s area, stacks, community room, staff workroom and toilets, about 1,000 square metres net, grossed up for circulation.',
          'Schematic design: three massing options are sketched — a courtyard block, a bar along the quiet southern edge, a corner pavilion. The bar wins: reading rooms face south, stacks sit deep and quiet, the community room fronts the bus stop with its own evening entrance.',
          'Design development: the structural grid is fixed, materials chosen, daylight modelled, mechanical rooms placed, and a cost check per square metre tests the scheme against the budget.',
          'Construction documents: the full drawing set — plans, sections, elevations, details — plus written specifications is completed, coordinated with the engineers\' drawings and submitted for permit.',
          'State the result: months of decisions compressed into a buildable, permitted set of instructions — the translation complete, construction ready to begin.',
        ],
      },
      { kind: 'heading', text: 'Drawings, Codes and the Cast' },
      {
        kind: 'para',
        text: 'The drawing set is a century-old language with strict grammar. A plan is a horizontal slice taken about a metre above the floor, looking down — walls, doors and fixtures in view. A section is a vertical slice, revealing heights, structure and the stair\'s rise; an elevation is the exterior face drawn flat, fixing materials and openings. Details zoom to large scale to settle the joints that make or break a building — where window meets wall, where roof meets sky. Today the set usually lives as a building information model, a coordinated three-dimensional database from which drawings are cut; because every duct and beam occupies real space in the model, clashes are caught on screen instead of on site.',
      },
      {
        kind: 'para',
        text: 'Two great constraints audit everything: the code and the budget. Building codes are compiled grief — life-safety rules written after fires and collapses — governing exit routes and travel distances, fire resistance, structural minimums, accessibility and, increasingly, energy performance; zoning regulates use and bulk separately. The permit submission is the authority\'s audit of the design against these rules. The budget disciplines from the other side: costs are estimated per square metre, quantities are taken from the model, and value engineering re-tests every specification — trading a finish for insulation, a system for a shape — to deliver the required performance at lower cost without gutting the design\'s point.',
      },
      {
        kind: 'para',
        text: 'No building of consequence is designed by one profession. The structural engineer sizes the skeleton; the mechanical, electrical and plumbing engineers thread air, power and water through it; landscape, lighting and acoustic specialists shape its edges. Contractors build — under a traditional competitive bid or a design-build arrangement — and during construction the architect reviews shop drawings, answers requests for information, visits the site, and defends the design\'s intent through change orders down to the punch list and the final certificate of occupancy. The architect\'s real product, it turns out, is not the drawing but the coordination — one mind holding the whole. The management of the site itself is a discipline of its own, covered in the Library\'s construction-management lessons.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'site analysis', def: 'The studied inventory of a site\'s sun, wind, access, soil, noise and context that precedes design.' },
          { term: 'program', def: 'The brief: a list of required spaces with areas, qualities and adjacencies — the building\'s genome.' },
          { term: 'schematic design', def: 'The first design phase, producing concept options and massing while change is still cheap.' },
          { term: 'construction documents', def: 'The final drawings and specifications, complete enough to obtain a permit and build from.' },
          { term: 'building section', def: 'A vertical slice through the building showing heights, structure and vertical circulation.' },
          { term: 'value engineering', def: 'The disciplined re-testing of specifications to deliver required performance at lower cost.' },
        ],
      },
      { kind: 'heading', text: 'The Discipline of Translation' },
      {
        kind: 'para',
        text: 'What the phases really teach is the timing of commitment. In schematic design a building can be turned inside out for the cost of a sketch; by construction documents, moving a wall means re-drawing a dozen sheets and re-pricing the job. Good practice therefore front-loads its questions — about site, program and structure — into the cheap zone, and grows steadily more stubborn as the drawings deepen. It is the same skill any complex project rewards, from software to city planning: discover the constraints early, decide as late as responsibly possible, and keep the reasons for every decision where the whole team can read them.',
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A plan drawing is…',
            options: ['an exterior view of a facade', 'a horizontal slice about a metre above the floor, seen from above', 'a vertical slice through the building', 'a three-dimensional model'],
            answer: 1,
            explain: 'The metre-high slice catches doors, windows and fixtures — the occupancy layer of the building.',
          },
          {
            q: 'The program is best described as…',
            options: ['the construction schedule', 'the zoning envelope', 'the space list with areas, qualities and adjacencies', 'the permit application'],
            answer: 2,
            explain: 'It is the brief — quantitative and qualitative — that every later design decision serves.',
          },
          {
            q: 'Decisions are cheapest to change during…',
            options: ['construction', 'schematic design', 'permit review', 'the punch list'],
            answer: 1,
            explain: 'Concepts are sketches; the same change later costs drawings, re-pricing and delay.',
          },
          {
            q: 'Value engineering, done properly, means…',
            options: ['reducing quality until the budget fits', 're-testing specifications for required performance at lower cost', 'postponing the permit application', 'hiring a cheaper contractor'],
            answer: 1,
            explain: 'It is disciplined trade-off analysis — keeping the building\'s point while trimming its cost.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'To complete the field, read Structures and Materials for the physics each of these phases manipulates, and the two history lessons to see the same process produce the landmarks. Then test the grammar on a real drawing set: many cities publish approved plans, and reading one end to end is the best practice this profession offers.',
        tone: 'path',
      },
    ],
  },
]
