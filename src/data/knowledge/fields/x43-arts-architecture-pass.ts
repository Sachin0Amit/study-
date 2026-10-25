import type { KnowledgeTopic } from '../types'

/** Expansion pass X43 (2026-10-25): the Architecture content pass (agent F).
 *  Domain audit: the Architecture field owned ZERO topics — every pass so far
 *  had left the field empty. This pass seeds the new Architecture book with 5
 *  lessons across its 3 branches (History of Architecture, Structures &
 *  Materials, Design & Practice).
 *
 *  Dedup carve-outs honoured while writing:
 *  - arth-caves-to-cathedrals (Art History book) reads the Gothic cathedral
 *    as THEOLOGY and art; arch-gothic-industrial takes the STRUCTURE /
 *    building-machine lens (thrust, skeleton, then iron and steel).
 *  - build-house-anatomy (Construction & the Built Environment subject) walks
 *    a wood-frame house's assembly in detail; arch-structures-materials owns
 *    the generic physics (loads, stresses, materials, failure manners) and
 *    cross-references that lesson instead of repeating it.
 *  - Construction-management / site-run content belongs to the civil
 *    engineering book; arch-design-practice covers the architect's DESIGN
 *    process only and points there for the site side.
 *
 *  Topics (all addedOn 2026-10-25):
 *   1. arch-ancient-classical   — History of Architecture, core
 *   2. arch-gothic-industrial   — History of Architecture, intermediate
 *   3. arch-modern-contemporary — History of Architecture, intermediate
 *   4. arch-structures-materials — Structures & Materials, core
 *   5. arch-design-practice     — Design & Practice, core
 */
export const x43ArtsArchitecturePassTopics: KnowledgeTopic[] = [
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
