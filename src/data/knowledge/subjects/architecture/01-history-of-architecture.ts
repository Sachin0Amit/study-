/**
 * Knowledge Universe — Architecture — Chapter 01: History of Architecture
 * 4 lessons · ~5,645 words
 * field: Architecture
 * legacy sources: arts-culture.ts, x43-arts-architecture-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [History of Architecture, Built Form]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 arch-ancient-classical — Ancient and Classical Architecture: Order, Arch and Dome
 *   01.2 arch-gothic-industrial — Gothic to Industrial: Vaults, Iron and the City
 *   01.3 arch-modern-contemporary — Modern and Contemporary Architecture: The Open Plan and Beyond
 *   01.4 art-architecture-reading-buildings — How to Read a Building: Orders, Structure and Style as Language
 */
import type { KnowledgeTopic } from '../../types'

export const architectureCh01: KnowledgeTopic[] = [
  {
    id: 'arch-ancient-classical',
    title: 'Ancient and Classical Architecture: Order, Arch and Dome',
    domain: 'Arts & Culture',
    field: 'Architecture',
    branch: 'History of Architecture',
    tier: 'core',
    concepts: [
      'Post-and-lintel: the first structural system',
      'Egyptian mass: pyramids and columned halls',
      'The Greek orders: Doric, Ionic, Corinthian',
      'Optical refinements: entasis and curved platforms',
      'The Roman revolution: arch, vault, dome and concrete',
      'Proportion systems from canon to module',
    ],
    words: 1599,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Every building is a negotiation with gravity, and for most of human history that negotiation was carried out in stone. The earliest answer was also the simplest: stand two uprights and lay a horizontal member across them — the post-and-lintel system behind Stonehenge\'s great trilithons and every Greek temple ever raised. Stone is magnificent under compression and feeble under tension, so a stone lintel works only across short gaps; widen the spacing and the beam\'s own weight bends and breaks it. That single material fact capped interior space for thousands of years, and early architecture is best read as the long campaign to raise the cap.',
      },
      {
        kind: 'para',
        text: 'Three ancient cultures dominate that campaign, and each contributed one idea that never left the profession. Egypt committed to mass, piling stone for permanence and carving interiors out of columned halls. Greece committed to order, perfecting a grammar of columns and proportions so complete that architects have been reviving and arguing with it ever since. Rome committed to the arch, the vault and concrete, which turned building from stacking into engineering and made vast interior space routine. This core Architecture lesson follows that arc, together with the proportion systems that stitched it together.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The orders and the arch never became museum pieces. Every courthouse colonnade, domed capitol and arched viaduct in your city descends from these solutions, and the vocabulary — Doric, entasis, vault, oculus — still fills architects\' drawings. Learning to see them turns a walk downtown into a guided tour of four thousand years.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Post and Lintel, Mass and Order' },
      {
        kind: 'para',
        text: 'Post-and-lintel is architecture\'s first grammar, and its ceiling is material. Because the lintel must resist bending, its required depth grows quickly with the span, and stone simply gives out — which is why Egyptian and Greek interiors relied on forests of columns instead of wide open halls. Greek builders polished the system to its extreme; Roman builders, dissatisfied with its limits, changed the underlying question.',
      },
      {
        kind: 'para',
        text: 'Egyptian building thought in mass from the beginning. The Great Pyramid of Khufu at Giza, completed around 2560 BCE, stacked over two million blocks to a height of about 146 metres — the tallest structure humans would raise for nearly four thousand years. Temples worked the same instinct inward: the great hypostyle hall at Karnak packs 134 columns so densely that only filtered clerestory light moves between them. Walls taper as they rise, pylons gate the processional route, and everything is dimensioned for eternity rather than convenience. Egyptian space is carved out of solidity; Greek space would be composed by rules.',
      },
      {
        kind: 'para',
        text: 'Those rules are the orders — Doric, Ionic and Corinthian — standardised kits of column, base, capital and entablature. Doric is the eldest and stockiest: no base, a plain cushion capital, and shafts proportioned by a handful of diameters — the order of the Parthenon. Ionic runs slimmer, stands on a moulded base and curls its capital into volutes. Corinthian is the most ornate, its capital a basket of carved acanthus leaves, beloved above all by Rome. An order is more than decoration: it is a module system, every part dimensioned in fractions of the column\'s lower diameter — a whole temple can be set out from one number.',
      },
      {
        kind: 'para',
        text: 'The refinement that lifts Greek building from geometry to art is optical correction. The Parthenon (447-432 BCE) contains almost no perfectly straight lines: the platform swells a few centimetres toward the middle of each side so it will not appear to sag; the columns lean inward by a fraction and are spaced tighter and thickened at the corners so they will not read as spindly; and every shaft swells gently at mid-height — entasis — because a truly cylindrical column looks pinched to the eye. The Greeks designed for how buildings are seen, not only for how they stand.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: standing before a classical stone facade, place it — which structural system, which order, which century?',
          'Read the order: a plain cushion capital and no base mean Doric; volutes over a moulded base mean Ionic; a basket of acanthus leaves means Corinthian. Roman arenas often stack all three as facade ornament, storey over storey.',
          'Find the module: estimate one column\'s lower diameter, then check whether spacing and entablature height fall into simple fractions of it. If they do, you are inside the classical system.',
          'Hunt the corrections: look for entasis in the shafts, a platform rising toward its centre, columns leaning inward. Greek temples hide these on purpose; many Roman revivals forgot them — a quick clue to origin.',
          'State the result: the building reads as a legible sentence — a system, a dialect and an era — rather than a pile of carved stones.',
        ],
      },
      { kind: 'heading', text: 'Rome: The Arch, the Vault and the Dome' },
      {
        kind: 'para',
        text: 'Rome\'s revolution begins with a change of geometry. Cut a lintel into wedge-shaped voussoirs and curve them into a semicircle, and the stones stop trying to bend: each wedge squeezes its neighbours, channelling the load down the curve and outward into the supports. Masonry — weak in bending but peerless in compression — suddenly flows around openings. The barrel vault is an arch extruded along a room; the groin vault is two barrels crossing, which concentrates thrust at four corners and frees the walls between them for windows. The arch\'s shadow cost is that outward push, and managing it becomes the central problem of the next two thousand years of building.',
      },
      {
        kind: 'para',
        text: 'Concrete completed the revolution. Roman mixes of lime, volcanic pozzolana and aggregate could be poured into forms and set — even underwater — into a jointless monolithic mass. The dome is an arch rotated about its centre, and the Pantheon in Rome, completed around 126 CE, remains its supreme statement: a concrete sphere 43.3 metres in diameter, still the largest unreinforced concrete dome in the world. Its builders graded the aggregate from heavy basalt in the foundations to feather-light pumice near the crown, hollowed the underside into coffered panels, and opened the top with an oculus some eight metres across that is at once light source, calendar and compression ring.',
      },
      {
        kind: 'para',
        text: 'The Romans were also the first great recyclers of style. The Colosseum, dedicated in 80 CE, is a concrete and travertine arcaded bowl wearing the Greek orders as costume — engaged half-columns stacked storey over storey with no structural duty whatsoever. Aqueducts marched ranks of arches across valleys to bring cities water; the imperial baths vaulted grand halls. Structure and ornament had separated into two independent systems — the working method of most architecture ever since.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'post-and-lintel', def: 'Two uprights carrying a horizontal member — the earliest structural system, limited by the lintel\'s weakness in bending.' },
          { term: 'order', def: 'A standardised kit of column, base, capital and entablature — Doric, Ionic or Corinthian — proportioned from a single module.' },
          { term: 'entasis', def: 'The slight swelling of a column shaft, correcting the illusion that a straight taper looks hollow-waisted.' },
          { term: 'hypostyle hall', def: 'A roofed interior filled with many columns — the Egyptian answer to spanning big rooms with short stone beams.' },
          { term: 'voussoir', def: 'One wedge of an arch; each squeezes its neighbours so the load travels as compression along the curve.' },
          { term: 'oculus', def: 'The open eye at a dome\'s crown — light source and, in the Pantheon, a ring that keeps the shell in compression.' },
        ],
      },
      { kind: 'heading', text: 'One Thread: Proportion' },
      {
        kind: 'para',
        text: 'Across all three cultures runs a single conviction: a building should be governed by a shared measure. Egyptian sculptors set figures on fixed grids; Greek architects dimensioned whole temples from the column diameter; Vitruvius wrote the arithmetic down so it could travel the empire. The systems differ — sacred canon, optical module, pragmatic multiple — but the instinct is identical: choose one unit, make every part a simple ratio of it, and the parts will agree with one another. Ancient proportion is what a modern practice would call coordination, and every later revival of classicism has been, at heart, a decision to trust that arithmetic again.',
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A stone lintel cannot span as far as an arch because it…',
            options: ['is cut from weaker stone', 'must resist bending, where stone is weakest', 'weighs more than the arch it replaces', 'cannot be levelled across uprights'],
            answer: 1,
            explain: 'The arch converts bending into compression travelling along its voussoirs; the lintel sits in bending, stone\'s weakest mode.',
          },
          {
            q: 'The Parthenon\'s entasis and swelling platform exist mainly to…',
            options: ['strengthen the temple against earthquakes', 'correct optical illusions so the building reads true', 'drain rainwater off the platform', 'reduce the amount of marble needed'],
            answer: 1,
            explain: 'These are refinements of perception — invisible engineering aimed at the eye, not the load path.',
          },
          {
            q: 'The Pantheon\'s dome reaches 43 metres unreinforced largely because…',
            options: ['steel bars were embedded in the concrete', 'the aggregate grows lighter toward the crown and the underside is coffered', 'it is a thin metal shell on a concrete frame', 'the oculus is sealed with bronze'],
            answer: 1,
            explain: 'Mass falls as the shell rises and the coffers carve away more — a graded, hollowed compression dome.',
          },
          {
            q: 'On the Colosseum\'s facade, the stacked half-columns…',
            options: ['carry the seating bowls', 'are applied ornament with no structural role', 'mark the entrances reserved for officials', 'were added by later restorers'],
            answer: 1,
            explain: 'The concrete arches do the carrying; the orders dress the facade — structure and ornament working independently.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Continue with Gothic to Industrial, which sharpens the arch, hands its thrust to flying buttresses and then leaps to iron frames and the elevator. For the physics underneath everything here — loads, tension and compression — read Structures and Materials next; for these same buildings studied as art and belief, the Art History lesson From Caves to Cathedrals is the companion view.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'arch-gothic-industrial',
    title: 'Gothic to Industrial: Vaults, Iron and the City',
    domain: 'Arts & Culture',
    field: 'Architecture',
    branch: 'History of Architecture',
    tier: 'intermediate',
    concepts: [
      'The pointed arch and the direction of thrust',
      'Rib vaults and the masonry skeleton',
      'Flying buttresses: structure moves outdoors',
      'Renaissance symmetry and Brunelleschi\'s double shell',
      'Baroque movement: ovals, curves and light',
      'Iron frames, safety elevators and the skyscraper',
    ],
    words: 1511,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Sharpen the crown of a semicircular Roman arch and something unexpected happens: the direction in which it pushes its supports becomes a design choice. A pointed arch can be drawn steeper or flatter to aim its thrust more vertically, letting builders vault adjacent spaces of different widths without the walls being torn apart by mismatched pushes. That small geometric freedom, developed in twelfth-century France, detonated a structural revolution in church building. The Art History lesson From Caves to Cathedrals reads the Gothic cathedral as theology made visible; this lesson takes the same building apart as a structural machine, then follows the machine\'s logic as it leaps from stone to iron.',
      },
      {
        kind: 'para',
        text: 'The route runs from the church to the city. Gothic builders perfected a masonry skeleton; the Renaissance pulled architecture back toward symmetry, geometry and the classical grammar; the baroque bent that grammar into movement and theatre. Then the nineteenth century swapped compression-only thinking for iron and steel, and mass production — plus one humble invention, the safe elevator — raised the modern city. Understanding this span explains why downtown looks the way it does.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The Gothic skeleton, the Renaissance dome and the steel frame are the three ancestors of nearly every building you will ever enter. Read them once with a structural eye and train stations, domes and office towers stop being scenery: each becomes a visible argument about how loads travel.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Gothic Skeleton' },
      {
        kind: 'para',
        text: 'Three elements interlock. The pointed arch redirects thrust. The rib vault concentrates the roof\'s weight into a cage of stone ribs springing between piers, so the panels spanning the ribs can be thin shells instead of solid mass. The flying buttress then catches the remaining outward push high on the nave wall and carries it across an arched bridge to an outer pier, which is piled with a pinnacle whose added weight steers the line of push safely back inside the stone. The wall, relieved of duty, dissolves into glass. A Gothic cathedral is best understood as a skeleton wearing a glass skin — the exact logic of the modern frame, arrived at six centuries early.',
      },
      {
        kind: 'para',
        text: 'The consequences reshaped the interior. Height, light and verticality became structural facts rather than aspirations: Chartres\'s nave rises past thirty metres, and the choir at Beauvais, pushed toward forty-eight, collapsed in 1284 — a permanent lesson that masonry skeletons have limits. Building them was organised craft: a master mason directed the lodge, full-size templates were cut for repeatable parts, and standard bay designs let workshops rise faster than any enterprise since Rome. The daring and the logistics are inseparable — Gothic structure is also Gothic project management.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: a cathedral cross-section shows the nave wall, its arcade and clerestory, and the buttressing beyond — the task is to trace the roof\'s push to the ground.',
          'Follow the vault: its weight concentrates in the ribs, which deliver point loads onto piers at the corners of each bay rather than pressing along the walls.',
          'Follow the thrust: the pointed arch aims its push more steeply downward than a semicircle, but a horizontal component still acts at clerestory level.',
          'Watch the flying buttress intercept it: the outer arch bridges from the nave wall to a massive pier, and the pinnacle loaded above keeps the combined force nearly vertical.',
          'Observe the freed wall become glass, then state the result: a stone cage carries everything, and the enclosure transmits only weather and light — skeleton and skin, the grammar of every later frame building.',
        ],
      },
      { kind: 'heading', text: 'Renaissance and Baroque: The Grammar Returns' },
      {
        kind: 'para',
        text: 'Fifteenth-century Florence answered the Gothic with antiquity. Filippo Brunelleschi, having surveyed Roman ruins, crowned the city\'s cathedral between 1420 and 1436 with an octagonal masonry dome that is still the largest ever built: a double shell stiffened by ribs and herringbone brickwork, with chains of stone, iron and timber buried in its base as tension rings gripping the outward push. The dome proved that classical geometry could still govern the largest structures, and that a new professional — one mind responsible for design down to the last detail — could deliver it. Renaissance plans returned to symmetry, circle and square; Palladio\'s villas arranged rooms on proportional axes so rigorously that his published pattern book shaped houses for four centuries.',
      },
      {
        kind: 'para',
        text: 'The baroque kept the grammar and made it move. Francesco Borromini rippled facades into waves, set ovals where Renaissance plans set circles, and dissolved corners into curves; Gian Lorenzo Bernini\'s colonnade at Saint Peter\'s sweeps out in two embracing arms that gather the piazza\'s crowd toward the church. Light became a designed material, aimed through hidden windows and gilded rays. Structurally the rules had been fully absorbed and could now be bent to theatrical ends; professionally, architecture had learned to choreograph experience — a skill the department store and the cinema would inherit.',
      },
      { kind: 'heading', text: 'Iron, Steel and the Vertical City' },
      {
        kind: 'para',
        text: 'The nineteenth century industrialised the skeleton. Cast and then wrought iron, rolled into mass-produced sections, offered what masonry never could: strength in tension as well as compression, at weights and spans stone could not touch. Joseph Paxton\'s Crystal Palace of 1851 — a prefabricated lattice of standardised iron and glass erected in months for the Great Exhibition — demonstrated that a building could be manufactured rather than hand-built, and Gustave Eiffel\'s three-hundred-metre wrought-iron tower of 1889 showed how little such structure weighs when every member is sized for its load and the whole is braced as a lattice against wind.',
      },
      {
        kind: 'para',
        text: 'The decisive step came in Chicago, where the Home Insurance Building of 1885 is the usual landmark for the metal skeleton frame: columns and beams of iron, and soon steel, carry every floor, while the outer wall thins into a curtain hung on the frame, carrying nothing but weather and image. Height had one remaining enemy — stairs. Elisha Otis\'s safety elevator, demonstrated in 1854 when its inventor rode the platform while the hoisting rope was cut before a crowd, made the upper floors rentable, and the skyscraper followed within a generation. Cities transformed accordingly: Napoleon III and his prefect Haussmann drove straight boulevards, sewers and water mains through medieval Paris between 1853 and 1870, wrapping the new infrastructure in disciplined stone facades, while iron-and-glass station sheds — borrowing the vaulted grammar of cathedral naves — arrived with the railways at the centre of every city.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'pointed arch', def: 'An arch of adjustable profile, drawn steeper so its thrust runs closer to vertical.' },
          { term: 'rib vault', def: 'A ceiling of arched ribs carrying thin webbing, concentrating roof loads onto piers at bay corners.' },
          { term: 'flying buttress', def: 'An external arch bridging from a high wall to an outer pier, carrying lateral thrust out of the building.' },
          { term: 'pinnacle', def: 'Ornament piled on a buttress whose added weight tilts the thrust line back toward vertical.' },
          { term: 'tension ring', def: 'A chain of iron, timber or stone buried in a dome\'s base to grip its outward push — Brunelleschi\'s device.' },
          { term: 'curtain wall', def: 'Exterior cladding that carries no floor loads, hung from the structural frame — the skin of every skyscraper.' },
        ],
      },
      { kind: 'heading', text: 'From Cathedral to City Block' },
      {
        kind: 'para',
        text: 'Notice the through-line: every era in this lesson moves structure and enclosure further apart. Gothic masons freed the wall with buttresses; Renaissance domes chained their thrust with hidden rings; iron frames made the separation absolute. Once the skin stopped working for a living it could be made of anything — glass, terracotta, sheet metal — and the twentieth century\'s architectural battles would all be about what that liberated surface should say.',
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Compared with a semicircular arch, a pointed arch lets builders…',
            options: ['carry loads only in tension', 'steepen the profile so thrust travels more vertically', 'build without piers or foundations', 'avoid using mortar between the stones'],
            answer: 1,
            explain: 'The two-centred profile can be drawn steeper or flatter, aiming the push — a semicircle\'s direction is fixed.',
          },
          {
            q: 'In a rib vault, the thin panels between the ribs…',
            options: ['carry the piers', 'span as shells delivering load into the ribs', 'act as independent arches to the floor', 'are decorative infill carrying nothing'],
            answer: 1,
            explain: 'The ribs collect the webbing\'s load and deliver point loads to the piers — the skeleton principle.',
          },
          {
            q: 'Pinnacles on a buttress pier are structural because they…',
            options: ['brace the flying arch against wind', 'add weight that keeps the thrust line inside the pier', 'anchor the glass wall to the flyer', 'drain rainwater off the buttress'],
            answer: 1,
            explain: 'Mass above the pier tilts the resultant of vertical weight and horizontal thrust back toward vertical.',
          },
          {
            q: 'The two inventions that together made the skyscraper practical were…',
            options: ['the elevator and reinforced concrete', 'the metal frame and the safety elevator', 'the arch and the dome', 'plate glass and the escalator'],
            answer: 1,
            explain: 'The frame carries the loads at height; Otis\'s 1854 safety brake made those floors reachable and rentable.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Continue with Modern and Contemporary Architecture to watch the frame shed its historical costumes — and the postmodern quarrel that followed. Structures and Materials explains the physics of thrust and bending underneath every building in this lesson, and the construction-management lessons in the Library cover how such projects are run on the ground today.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'arch-modern-contemporary',
    title: 'Modern and Contemporary Architecture: The Open Plan and Beyond',
    domain: 'Arts & Culture',
    field: 'Architecture',
    branch: 'History of Architecture',
    tier: 'intermediate',
    concepts: [
      'Form follows function: the modern credo',
      'The Bauhaus and the design school tradition',
      'International style and the glass box',
      'Brutalism and the aesthetics of raw concrete',
      'The postmodern counter-revolution',
      'Parametric form, green towers and adaptive reuse',
    ],
    words: 1347,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'In 1896 the Chicago architect Louis Sullivan published the phrase that would run like a river through the next century: form ever follows function. A building\'s shape, he argued, should grow from the purposes and forces within it, and his office towers gave the argument flesh — repeating office floors rising from the metal frame, the whole crowned by an expressive cap. Over the following decades the maxim hardened into a movement: strip architecture of borrowed ornament, express its structure and plan, and let materials tell the truth. That programme produced the most influential buildings of the twentieth century — and, just as inevitably, its rebellion.',
      },
      {
        kind: 'para',
        text: 'This lesson follows the modern movement from its design-school origins through the glass box and raw concrete to the postmodern counter-revolution, ending in the computational and environmental present. The question underneath never changes: now that structure, skin and ornament have come apart, what should the surface and the plan actually be?',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Whatever your taste, the modern movement wrote the grammar of the contemporary world — open plans, curtain walls, expressed structure — and its critics wrote the grammar of the reaction. Reading both sides is basic literacy for understanding any building put up in the last hundred years.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The School, the Machine and the Open Plan' },
      {
        kind: 'para',
        text: 'The doctrine\'s cradle was the German Bauhaus, founded by Walter Gropius at Weimar in 1919 and housed from 1925 in his own Dessau building: an asymmetrical pinwheel of workshops whose glass curtain wall announced the interior\'s honest work. The school merged craft training with industrial production — furniture, typography, textiles, buildings — and though it closed under political pressure in 1933, its scattered teachers carried the doctrine to schools around the world. Le Corbusier gave it a manifesto of startling confidence: the house is a machine for living in. His Five Points replaced load-bearing walls with slim columns lifting the body on pilotis, freeing the plan, freeing the facade and running ribbon windows around the result — Villa Savoye outside Paris is the whole argument built in white render.',
      },
      {
        kind: 'para',
        text: 'The style went international — literally: a 1932 New York exhibition catalogued it under that name, defined by volume instead of mass, regular structure and the total rejection of applied ornament. Its purest voice was Ludwig Mies van der Rohe, whose less is more governed his Barcelona Pavilion and, decades later, the Seagram Building in New York: a bronze-and-glass tower set back behind its own plaza, its facade detailed with bronze I-beam profiles that express the structure the cladding does not actually carry. That last detail is the movement\'s paradox in miniature — honesty itself had become a style, applied where it was not literally true.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: standing across from a mid-twentieth-century office tower, sort its parts the modern way — structure, skin, services and plan.',
          'Check the skin: a curtain wall of glass and metal hung on the frame carries no loads; its grid of mullions is the facade\'s rhythm section.',
          'Find the core: elevators, stairs, toilets and ducts stack in one or two shafts — the fixed spine that lets everything around it run free.',
          'Read the plan: outside the core, columns on a regular grid and partitions that can move anywhere — the open plan the frame made possible.',
          'State the result: the tower is a serviced skeleton with a dress — the exact kit of parts the modern generation spent fifty years refining.',
        ],
      },
      { kind: 'heading', text: 'Concrete, Critique and the Present' },
      {
        kind: 'para',
        text: 'The movement\'s rawest branch took its name from béton brut — concrete cast raw against its wooden formwork, board marks and all. Le Corbusier\'s Unité d\'Habitation in Marseille (1952) set the tone, and postwar governments found the material ideal for housing, universities and civic centres from London to Boston. Brutalism\'s masses are sculptural and its surfaces shamelessly honest, but raw concrete weathers grey and streaked in city climates, and the style\'s fortress scale made it a lightning rod whenever public taste turned. Buildings voted ugly in one decade are now fiercely protected in the next — a reminder that style judgments have half-lives.',
      },
      {
        kind: 'para',
        text: 'The reaction was already in print by 1966, when Robert Venturi answered Mies with two words — less is a bore — and asked architecture to embrace complexity, contradiction and historical memory. Postmodern buildings quoted the past with a wink: Michael Graves\'s Portland Building wore classical swags in coloured tile, and Philip Johnson crowned the AT&T tower in New York with a broken pediment borrowed from an eighteenth-century cabinetmaker. Ornament returned, context mattered, and irony became an architectural material. Critics called it stage-set architecture; defenders answered that buildings had always spoken in quotation, and the moderns had merely pretended otherwise.',
      },
      {
        kind: 'para',
        text: 'Today\'s arguments are conducted with new instruments. Parametric design lets architects define buildings by rules and parameters in software, so every mullion on a facade can differ as a curve ripples — the computer-aided geometry behind Frank Gehry\'s titanium Guggenheim at Bilbao and Zaha Hadid\'s seamless concrete. Sustainability has moved from virtue to requirement: orienting for sun and wind, double-skin facades that breathe, towers like Milan\'s Bosco Verticale carrying hundreds of trees on its balconies, and energy-performance ratings that price a design\'s appetite before it is built. And the newest instinct is reuse: Tate Modern began life as a power station, New York\'s High Line as an abandoned rail viaduct, and a maxim in the field now holds that the greenest building is the one already standing.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'open plan', def: 'An interior freed from load-bearing walls, its partitions placed anywhere on a structural grid.' },
          { term: 'pilotis', def: 'Columns lifting a building clear of the ground — one of Le Corbusier\'s Five Points.' },
          { term: 'béton brut', def: 'Concrete cast raw against its formwork with the board marks showing — brutalism\'s namesake material.' },
          { term: 'International Style', def: 'The glass-and-steel modernism catalogued by a 1932 New York exhibition: volume, regularity, no ornament.' },
          { term: 'parametric design', def: 'Generating a building\'s geometry from rules and parameters, allowing controlled variation across a facade or shell.' },
          { term: 'adaptive reuse', def: 'Converting an existing structure to a new purpose — power station to gallery, viaduct to park.' },
        ],
      },
      { kind: 'heading', text: 'What the Century Proved' },
      {
        kind: 'para',
        text: 'The moderns demonstrated that once the frame carries everything, the plan can be free and the skin can be anything — and they showed how quickly that freedom hardens into a corporate default. The postmoderns proved that meaning cannot be engineered away: people read buildings as language, and a grammar of pure function reads as mute. The present inherits both proofs and adds a third constraint, carbon, that makes every decision a negotiation among performance, memory and delight. The glass box, the raw concrete and the broken pediment are now simply equal citizens in the toolbox.',
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Sullivan\'s form ever follows function argued that a building\'s shape should…',
            options: ['imitate classical temples', 'grow from its purposes and forces', 'change with every tenant', 'follow zoning setbacks exactly'],
            answer: 1,
            explain: 'The credo ties form to internal purpose and structure — the seed of the whole modern movement.',
          },
          {
            q: 'The open plan became possible because…',
            options: ['elevators removed the need for walls', 'columns and slabs carried the loads walls once carried', 'glass became cheap', 'clients preferred fewer doors'],
            answer: 1,
            explain: 'Once a frame carries gravity, partitions are free to drift — structure and enclosure separated.',
          },
          {
            q: 'The Seagram Building\'s bronze I-beam profiles on the facade illustrate that…',
            options: ['the frame is made of bronze', 'structural honesty itself became an applied style', 'the mullions carry the floor loads', 'the building predates the elevator'],
            answer: 1,
            explain: 'The profiles express structure the cladding does not carry — honesty as decoration, the movement\'s paradox.',
          },
          {
            q: 'Adaptive reuse projects like Tate Modern treat existing buildings as…',
            options: ['blight to be cleared', 'resources too valuable to demolish', 'historical reconstructions', 'temporary structures'],
            answer: 1,
            explain: 'A finished structure embodies materials and carbon already spent — reuse banks that investment for a new purpose.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'From here, read the Structures and Materials lesson for the physics the moderns were expressing, and The Architect\'s Work for how these ideas move through a real project from site study to drawing set. If the historical frame appeals, Gothic to Industrial is the direct prequel to this lesson.',
        tone: 'path',
      },
    ],
  },
  {
    id: "art-architecture-reading-buildings",
    title: "How to Read a Building: Orders, Structure and Style as Language",
    domain: "Arts & Culture",
    field: "Architecture",
    branch: "Built Form",
    tier: "core",
    concepts: [
      "Buildings as legible documents",
      "Massing and material before detail",
      "The five classical orders",
      "Load paths: post-and-lintel to steel skeleton",
      "Facade anatomy: base, shaft, crown",
      "Style as vocabulary — revivals as quotations",
    ],
    words: 1188,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Every street is an open book, and most people walk through it illiterate. A building announces its date, its budget, its purpose and its ambitions in plain sight — if you know the alphabet. The art-history lessons in this library cover the periods of building; this Architecture topic teaches the reading itself: how to start with massing, decode the classical orders, trace how a structure carries its loads, and hear styles as vocabulary that gets quoted for effect centuries after its first use.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Architectural literacy turns travel into time travel and your own neighborhood into a museum. It also arms house hunters, preservation advocates and anyone who has wondered why one facade feels trustworthy and another feels like a costume.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Read big to small. Massing — the building's fundamental shape and volume — tells you what it wants to be before any detail does: a temple form declares civic or sacred authority, a fortress declares defense and permanence, a long warehouse line declares industry, a tower declares land prices. Then material, which is local geology plus era technology: load-bearing stone speaks pre-industrial, brick speaks kilns and canals, steel and glass speak the twentieth century. A marble bank and a stucco strip mall make the same announcement in different currencies.",
      },
      {
        kind: "para",
        text: "The classical orders are a five-letter alphabet of column: Tuscan, Doric, Ionic, Corinthian and Composite. Each is a system — base, shaft, capital, entablature — with fixed proportions and personality: Tuscan plain and sturdy, Doric muscled (the Parthenon), Ionic voluted and scholarly, Corinthian leafy and sumptuous, Composite a Roman mash-up of the last two. The Greeks invented the letters, the Romans systematized them, Renaissance theorists published them, and they became Europe's default civic language — courthouses, capitols, banks and museums still speak it whenever a client wants inherited authority.",
      },
      {
        kind: "para",
        text: "Structure is the honesty under the costume. Post-and-lintel — two uprights and a span — is the oldest system and stone's weak point: stone pulls terribly, so spans stay short and lintels stay deep. The arch redirects load around an opening and always wants to become a vault, then a dome — Rome's gift. Gothic masons pointed the arch and caught the outward thrust with flying buttresses, so walls dissolved into glass and light. Steel changed the grammar entirely: a skeleton frame carries the loads, walls become curtains — the curtain wall — and floors stack like paper. Reinforced concrete, steel's plastic sibling, cantilevers boldly into space.",
      },
      {
        kind: "para",
        text: "Facades read like columns: base, shaft, crown. The ground floor is the entry and the social contract — doors, shopfronts, rough rusticated stone; the shaft is the repetitive middle floors with their window rhythm set by structural bays; the crown is the cornice, the roofline, the silhouette against the sky. Windows are the facade's punctuation: their size, spacing and trim tell you floor heights, wall thickness and era — bricked-up openings still mutter about the window tax. And the entrance hierarchy tells you which door mattered, and to whom.",
      },
      {
        kind: "para",
        text: "Styles are vocabularies, and buildings quote them freely: a Gothic revival church of the 1840s is no more medieval than a toga party is Rome. Modernism — Sullivan's form follows function, Loos declaring ornament a crime — stripped the language down to structure and plain surfaces; postmodernism put the quotations back with a wink, so a skyscraper wearing a classical column at street level is making an argument, not a mistake. Renovations read like palimpsests: a stone facade on a steel frame, a Georgian house with a glass rear extension, decades of doors where windows used to be.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Order height in modules",
        latex: "H \\approx n \\cdot d, \\quad n = 7, 8, 9, 10",
        meaning: "Column height in lower-shaft diameters d: Tuscan 7, Doric 8, Ionic 9, Corinthian 10 — the slimmer the ratio, the lighter and more refined the order reads.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a courthouse downtown — broad stairs, a colonnade, a low dome. When was it built, and what is it arguing?",
          "Recall the governing ideas: temple massing claims civic authority; order choice and ratio carry character; structure reveals era technology; renovations read as palimpsests.",
          "Apply: the massing is a Greek temple with a dome — pure civic authority. The columns are Corinthian at a glance (acanthus-leaf capitals, about ten modules tall — slim and refined). The masonry is load-bearing stone with deep lintels, but the dome's drum shows steel-era confidence, and the lobby's glass-and-steel doors are a later renovation.",
          "State the result: an early twentieth-century civic building quoting antiquity to lend the law inherited gravity — dated and interpreted from the sidewalk using the full read: massing, order, structure, renovation.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Travelers decode any old town's layers — medieval core, mercantile expansions, modern infill.",
          "House hunters identify Craftsman, colonial and mid-century stock and what maintenance each implies.",
          "Preservation advocates argue from evidence: original fabric versus quotation.",
          "Environment artists and game designers build believable cities from real grammar.",
          "Photographers choose angles that expose load paths and facade rhythm.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Dating by style alone is the classic error — every era revives something, so a Gothic arch can be 1240 or 1840; look at structure, materials and joinery. Context is everything: a marble facade in a mill town is an argument, not an anomaly. Buildings also lie on purpose — cast stone, veneers, applied ornament over steel — and reading the joints exposes the truth. And ornament is not a date code: postmodernism weaponized it deliberately.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Order", def: "A classical column system — Tuscan, Doric, Ionic, Corinthian, Composite — with fixed parts and proportions." },
          { term: "Capital", def: "The column's head, where it meets the load above; the order's signature." },
          { term: "Entablature", def: "The horizontal band of architrave, frieze and cornice carried across the columns." },
          { term: "Post-and-lintel", def: "The oldest structure: uprights carrying a horizontal span, weak in stone." },
          { term: "Flying buttress", def: "The Gothic external arch that catches a vault's outward thrust, freeing walls for glass." },
          { term: "Curtain wall", def: "The non-load-bearing outer skin hung on a structural frame — the steel-era facade." },
          { term: "Massing", def: "A building's fundamental shape and volume, read before any detail." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "The most ornate of the classical orders is:",
            options: ["Tuscan", "Doric", "Ionic", "Corinthian"],
            answer: 3,
            explain: "Corinthian wears carved acanthus leaves and stands about ten modules tall — the showpiece of the alphabet.",
          },
          {
            q: "A Corinthian column stands about how many lower-diameter modules tall?",
            options: ["5", "10", "16", "3"],
            answer: 1,
            explain: "Tuscan 7, Doric 8, Ionic 9, Corinthian 10 — taller and slimmer reads lighter and more refined.",
          },
          {
            q: "Curtain walls became possible because:",
            options: ["Stone became cheap", "The steel skeleton frame carried the loads", "Windows were taxed less", "Bricks grew stronger"],
            answer: 1,
            explain: "Once a frame of steel columns and beams carried the building, walls could hang as light skins.",
          },
          {
            q: "A Gothic revival church differs from a Gothic cathedral mainly in:",
            options: ["Number of naves", "Era, structure and technology — it quotes the style", "Height", "Religious function"],
            answer: 1,
            explain: "Revivals borrow the vocabulary while belonging to their own century's structure and construction.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "No tools needed — start on your own block. Natural next steps: the sculpture lesson for materials, the how-a-house-is-built lesson in Technology & Applied Science for the process behind the art, and the photography lesson for framing what you now read.",
        tone: "path",
      },
    ],
  },
]
