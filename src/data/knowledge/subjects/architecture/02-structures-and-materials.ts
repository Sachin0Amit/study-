/**
 * Knowledge Universe — Architecture — Chapter 02: Structures & Materials
 * 1 lesson · ~1,430 words
 * field: Architecture
 * legacy sources: x43-arts-architecture-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Structures & Materials]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 arch-structures-materials — Structures and Materials: How Buildings Stand Up
 */
import type { KnowledgeTopic } from '../../types'

export const architectureCh02: KnowledgeTopic[] = [
  {
    id: 'arch-structures-materials',
    title: 'Structures and Materials: How Buildings Stand Up',
    domain: 'Arts & Culture',
    field: 'Architecture',
    branch: 'Structures & Materials',
    tier: 'core',
    concepts: [
      'Dead, live and lateral loads',
      'Compression and tension: the two stresses',
      'Beams bend: the top squeezes, the bottom pulls',
      'Trusses and cantilevers: geometry as strength',
      'Material personalities: wood, steel, concrete, masonry',
      'Ductile failure warns; brittle failure snaps',
    ],
    words: 1430,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Ask why a building stands up and the honest answer is that it never quite stops trying to fall down — structure is the craft of keeping it politely away from that outcome. Every load a building must resist sorts into three families. Dead load is permanent weight: the frame, floors, finishes and roofing. Live load is the movable cargo: people, furniture, books, snow on the roof. Lateral load is horizontal attack: wind pushing on the facade, an earthquake shaking the ground sideways, soil pressing on a basement wall. Structural design is arithmetic over these families, combined in the worst plausible way.',
      },
      {
        kind: 'para',
        text: 'Whatever the loads are, they reach the ground through only two stresses. Compression is squeezing — a column crushed between the floors above and below. Tension is pulling — a cable stretched by the chandelier it holds. This lesson assembles the working toolkit of architectural structures: how beams bend, how columns and slabs behave, how trusses and cantilevers use geometry, what each common material is good at, and why some failures announce themselves while others arrive in silence. A companion lesson in the Library\'s construction subject walks a wood-frame house\'s assembly piece by piece; the physics here governs every assembly.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Structural literacy is safety literacy. It tells you which wall in your apartment may not be removed, why that crack runs diagonally, and why a flat roof in a snowy climate is a bold act. The vocabulary alone changes every conversation with a builder.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Two Stresses, One Bent Beam' },
      {
        kind: 'para',
        text: 'Materials take the two stresses very differently. Stone, brick and unreinforced concrete are strong in compression and feeble in tension; steel is excellent in both; timber sits handsomely between. A beam makes the difference visible: laid across two supports and loaded, it sags, and sagging means its top half shortens while its bottom half stretches — compression above, tension below. The deeper the beam, the more leverage those halves exert on each other, which is why depth is the cheapest strength a section can buy. A slab is just a wide, shallow beam; a column is a member in almost pure compression whose characteristic failure is buckling, bending sideways under a load it could otherwise carry.',
      },
      {
        kind: 'para',
        text: 'The classic composite trick hides inside every modern concrete beam: the concrete takes the compression at the top, and steel bars cast into the tension zone at the bottom take the pull — reinforced concrete, the workhorse material of the last century. A cantilever — a member fixed at one end like a diving board — flips the picture, its tension arriving on the upper face. Frank Lloyd Wright\'s Fallingwater cantilevered its terraces over a waterfall in the 1930s on concrete strengthened with steel; decades later, post-tensioned cables were quietly added to hold the deflection that had always been part of its drama.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Start at the top: snow loads the roof, adding live load to the dead load of the structure itself.',
          'Slab to beams: the roof and floor slabs span between beams, delivering their load as line weights; each beam now bends — compression on top, tension below.',
          'Beams to columns: the beam ends deliver their reactions to columns, which descend floor to floor in nearly pure compression, gathering load like a river system.',
          'Columns to footing: at the ground the accumulated load meets a spread footing, a widened pad that distributes the column\'s point load over enough soil area to stay within the soil\'s bearing capacity.',
          'Footing to soil: the pressure dissipates into the earth — unless one corner of the building sits on softer ground, in which case that corner sinks while the rest holds, and the tearing difference is differential settlement (the leaning Tower of Pisa, begun in 1173 on soft layers, is the celebrity case).',
          'State the result: structure is a relay, every junction as strong as the load it collects — one dropped baton and the load finds its own route, through whatever is weakest.',
        ],
      },
      { kind: 'heading', text: 'Geometry and the Material Personalities' },
      {
        kind: 'para',
        text: 'Geometry can do work that material cannot. A truss is a frame of triangles, and because a triangle cannot change shape without changing the length of its sides, truss members carry their loads as pure tension or pure compression — no bending at all. That is why deep trusses span bridges and roofs with a fraction of the material a solid beam would need, and why the nineteenth century\'s iron lattices could reach three hundred metres. Cantilevers exploit geometry\'s other gift, reach: a balanced cantilever bridge throws arms out from its piers and meets in the middle, needing no support from below.',
      },
      {
        kind: 'para',
        text: 'Each structural material has a personality, and the personality shapes the building. Timber is strong along the grain and weak across it, renewable, fast to build with, and — counterintuitively — predictable in fire, charring at a steady rate that protects the core; engineered products like glulam and cross-laminated timber now lift wood into towers. Steel is the strongest per kilo and equally happy in tension or compression, but it softens in a blaze, so codes require it to be wrapped in fireproofing. Concrete is a shape-shifter, poured into any form, superb in compression but so weak in tension that it always travels reinforced; it is also heavy, and it creeps, deforming slowly under permanent load. Masonry is the compression aristocrat: magnificent in stacked walls, and true to itself only in arches, which turn every opening into a compression problem. Read a building\'s material and its permissible forms follow.',
      },
      {
        kind: 'para',
        text: 'Underneath it all sits the one material no one can choose: the soil. Geotechnical borings report what is actually there, and the foundation is the negotiated settlement between building and ground. Decent soil takes spread footings; weak strata call for piles driven down to something firmer. Every building settles a little under its own weight, and small uniform settlement is harmless — the trouble is differential settlement, one part sinking more than its neighbour, cracking walls and jamming doors along the line between them.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'dead load', def: 'The permanent weight a structure must carry — itself, its finishes and its fixed equipment.' },
          { term: 'live load', def: 'The movable load on a structure: occupants, furniture, and environmental weight such as snow.' },
          { term: 'lateral load', def: 'Horizontal load — wind, earthquake, soil pressure — that tries to topple or rack a building.' },
          { term: 'cantilever', def: 'A member fixed at one end only, carrying load beyond its support; tension acts on its upper face.' },
          { term: 'differential settlement', def: 'Unequal sinking of a building\'s parts — the cracking kind, as against harmless uniform settlement.' },
          { term: 'ductility', def: 'A material\'s capacity to stretch and deform before failing — the property that gives warning.' },
        ],
      },
      { kind: 'heading', text: 'Failing Gently, Failing Suddenly' },
      {
        kind: 'para',
        text: 'The last structural lesson is about manners of failure. Ductile materials — steel, timber — stretch, creak and visibly sag before they let go; brittle ones, like unreinforced masonry or badly detailed concrete, snap without notice. Codes therefore push buildings toward ductility and redundancy, meaning alternate load paths that survive the loss of a single member. The lesson was written in London in 1968, when a gas explosion in a tower block called Ronan Point took out one load-bearing wall panel and progressive collapse carried away an entire corner of the building. Since then, the quiet rule of structural design has been: fail gently, and never all at once.',
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The weight of the structure itself plus its finishes is…',
            options: ['live load', 'dead load', 'lateral load', 'wind load'],
            answer: 1,
            explain: 'Dead load is permanent; live load moves, and lateral load attacks horizontally.',
          },
          {
            q: 'The bottom face of a sagging beam simply supported at both ends is in…',
            options: ['compression', 'tension', 'torsion', 'buckling'],
            answer: 1,
            explain: 'Sagging lengthens the bottom fibres — pull, which is why reinforcement sits there.',
          },
          {
            q: 'Steel bars are cast into the bottom of concrete beams because…',
            options: ['concrete is the expensive part', 'concrete is weak in tension and steel is strong in it', 'steel prevents creep', 'the bars hold the formwork apart'],
            answer: 1,
            explain: 'The composite trick: concrete works the compression zone, steel the tension zone.',
          },
          {
            q: 'Ductile failure is preferred to brittle failure because it…',
            options: ['is cheaper to repair', 'gives visible warning before collapse', 'happens only in earthquakes', 'does not damage the finishes'],
            answer: 1,
            explain: 'Deflection and deformation buy time to evacuate and repair — the reason codes demand ductility and redundancy.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Next in this field, The Architect\'s Work shows where these loads enter the design process — and the two history lessons show the same physics solving the same problems in stone. For soil mechanics and construction sequencing in depth, the civil engineering books take over where this lesson stops.',
        tone: 'path',
      },
    ],
  },
]
