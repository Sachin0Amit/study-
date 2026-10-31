/**
 * Knowledge Universe — Construction, Geomatics & Underground Engineering — Chapter 03: How Buildings Work
 * 1 lesson · ~1,328 words
 * field: Construction & the Built Environment
 * legacy sources: technology-applied.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Construction & the Built Environment]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 build-house-anatomy — How a House Is Built: Foundations to Roof
 */
import type { KnowledgeTopic } from '../../types'

export const constructionGeomaticsCh03: KnowledgeTopic[] = [
  {
    id: 'build-house-anatomy',
    title: 'How a House Is Built: Foundations to Roof',
    domain: 'Technology & Applied Science',
    field: 'Construction & the Built Environment',
    branch: 'How Buildings Work',
    tier: 'core',
    concepts: [
      'The load path: gravity\'s route into the soil',
      'Foundations: slab, crawlspace, basement',
      'Platform framing: the standard skeleton',
      'Openings: headers carry what studs did',
      'The envelope: water, air and vapor in layers',
      'Roof structure and the order of operations',
    ],
    words: 1328,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'A house looks like walls and a roof, but it is really a machine of layered jobs: something to carry every load to the ground, something to shed every drop of water, something to hold heat in while letting vapor dry out. This core Construction & the Built Environment topic walks the assembly from the bottom up — soil and footings, foundation types, platform framing, headers over openings, the water-shedding envelope and the roof — and shows how the construction sequence follows the load path it all hangs on.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Nearly everyone will own, rent, insulate, renovate or repair a building. Knowing the load path tells you which wall you may remove; knowing the envelope tells you why the wall is wet. The vocabulary alone changes every conversation with a contractor.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every pound the house carries — snow on the roof, the piano upstairs, the structure itself — travels a continuous route called the load path: roof sheathing to rafters or trusses, to walls, to the sill plate, to the foundation, to the footings, to the soil. Structural design is mostly the refusal to interrupt that route. The classic renovation disaster is cutting a wall stud for a new doorway and leaving nothing to carry what it carried: loads detour through whatever is weakest, and sagging drywall is the receipt.',
      },
      {
        kind: 'para',
        text: 'The foundation\'s job is to spread load over soil that can bear it, and the choice is site economics. Slab-on-grade pours concrete on compacted gravel — cheap and fast, common in warm climates. A crawlspace lifts the floor on short stem walls, leaving access for pipes and wires. A full basement excavates deepest and costs most, trading dollars for square footage. All of them sit on footings — wider concrete strips sized to the soil, which might safely carry a ton and a half per square foot, and always placed below the local frost line so winter cannot heave them.',
      },
      {
        kind: 'para',
        text: 'The standard skeleton is platform framing, built one floor at a time. Crews bolt a pressure-treated sill plate to the foundation, assemble a floor of joists on 16-inch centers with plywood subfloor glued and screwed on top, then raise walls of 2×4 or 2×6 studs — again 16 inches on center, about 41 centimeters — between doubled top plates and a bottom plate, and set the next platform on those walls. It goes up fast, and every wall cavity is a ready-made duct for plumbing, wiring and insulation.',
      },
      {
        kind: 'para',
        text: 'Openings interrupt the load path, and the header — the lintel — restores it: a beam of doubled lumber or engineered stock carrying the wall load above a window or door, bearing on jack studs at each side. Sheathing the frame in plywood or OSB does a second, invisible job: braced panels nailed on in a specified pattern make shear walls that resist the racking of wind and earthquakes, which is why inspectors check that nailing so closely.',
      },
      {
        kind: 'para',
        text: 'The envelope is not a raincoat but a drainage system. Over the sheathing goes the water-resistive barrier — house wrap, lapped like shingles so water sheets down and out — with flashing at every window, door and roof penetration guiding water back outside. A ventilated rain-screen gap behind the siding lets the wall dry. On the warm side, a vapor retarder manages the water vapor that humid indoor air pushes outward, and insulation fills the cavities: roughly R-13 to R-21 in walls, R-49 and up in attics, where rising warm air makes the ceiling the biggest leak of all.',
      },
      {
        kind: 'para',
        text: 'Roofs are either prefabricated trusses — triangles of 2×4 spanning the whole house cheaply but leaving no attic room — or site-cut rafters. Above the framing the layering principle repeats: sheathing, then underlayment with ice-and-water shield sealed at the eaves, then shingles lapped to shed water downhill, with ridge vents over soffit vents so the attic breathes. The build order mirrors the load path: foundation, frame, envelope, roof dry-in — then mechanicals are roughed into the still-open walls before drywall ever closes them.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a wall carries a roof load of about 800 pounds per linear foot — how wide must the footing be on soil rated at 1,500 pounds per square foot?',
          'Recall the governing idea: bearing pressure equals load divided by area; the footing\'s job is to keep pressure below the soil\'s capacity.',
          'Apply: 800 pounds per foot ÷ 1,500 psf = 0.53 ft, about 6.5 inches of width per foot of wall — below any code minimum, so a standard 16-inch-wide, 8-inch-thick strip footing is used with margin to spare. On poor soil rated 750 psf, the arithmetic demands 800 ÷ 750 ≈ 1.07 ft, so the footing widens to at least 16 inches.',
          'State the result: a footing the soil can carry under the worst load — the same safety-factor logic as the bridge lesson, applied at garden scale.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Home inspectors trace load paths and follow water stains to failed flashing before writing reports.',
          'Remodelers verify which walls are load-bearing before a kitchen can be opened up.',
          'Foundation choice follows climate: frost depth, termites and drainage decide slab versus basement.',
          'Energy retrofits prioritize attic insulation and air sealing — the cheapest kilowatt-hours a house can buy back.',
          'Backyard offices and accessory dwellings use identical framing tables and envelope details at small scale.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The big three. Interrupting the load path — that casual stud removal — without a properly sized header or beam. Getting water management backwards: a vapor barrier on the wrong side traps moisture and rots the wall it was meant to protect, so walls must be able to dry in at least one direction. And burying work before inspection: plumbing, wiring and framing errors cost pennies to fix while open and thousands after the drywall goes up.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Load path', def: 'The continuous route by which every load reaches the soil: roof to walls to foundation to footings.' },
          { term: 'Footing', def: 'The widened concrete base spreading a wall\'s load over bearing soil, below the frost line.' },
          { term: 'Slab-on-grade', def: 'A concrete floor poured directly on prepared ground, common in warm climates.' },
          { term: 'Platform framing', def: 'Stud-wall construction built one floor platform at a time, joists and studs at 16-inch centers.' },
          { term: 'Header', def: 'The beam over a window or door that carries the load the removed studs used to carry.' },
          { term: 'Shear wall', def: 'A wall stiffened with sheet sheathing and specified nailing to resist wind and seismic racking.' },
          { term: 'Water-resistive barrier', def: 'House wrap lapped shingle-style to shed bulk water while the wall cavity dries.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The correct order of the load path is:',
            options: [
              'Roof → foundation → walls → soil',
              'Roof → walls → foundation → soil',
              'Walls → roof → soil → foundation',
              'Foundation → roof → walls → soil',
            ],
            answer: 1,
            explain: 'Gravity\'s route runs from the roof through the walls into the foundation, footings and finally the soil.',
          },
          {
            q: 'A header exists to:',
            options: ['Insulate above windows', 'Carry the wall load across a door or window opening', 'Hide wiring', 'Vent the attic'],
            answer: 1,
            explain: 'It is the beam that takes over when studs are removed for an opening, passing load to jack studs at each side.',
          },
          {
            q: 'Footings sit below the frost line mainly to:',
            options: [
              'Keep the basement cool',
              'Prevent freeze-thaw soil heave from moving the foundation',
              'Reach stronger rock',
              'Satisfy plumbing codes',
            ],
            answer: 1,
            explain: 'Water in soil expands when it freezes; footings below the frost line rest on ground that never heaves.',
          },
          {
            q: 'The water-resistive barrier (house wrap) is lapped shingle-style so that:',
            options: [
              'It looks neat from outside',
              'Water meeting an overlap sheets downward and outward',
              'Vapor can enter freely',
              'Siding adhesive sticks better',
            ],
            answer: 1,
            explain: 'Upper layers overlap lower ones, so gravity carries any water that gets behind the siding back out of the wall.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Stress and safety factors live in the bridge lesson of the Engineering Science section. Natural next steps: timber and steel framing, the building science of heat and moisture in depth, and reading construction drawings to tie it all together.',
        tone: 'path',
      },
    ],
  },
]
