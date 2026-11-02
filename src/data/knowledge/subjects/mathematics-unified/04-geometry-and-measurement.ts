/**
 * Knowledge Universe — Mathematics — Chapter 04: Geometry & Measurement
 * 3 lessons · ~9,345 words
 * field: Geometry & Measurement
 * legacy sources: x26-banking-management-pass.ts, x63-cengage-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Geometry & Measurement]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 math-measurement-areas-volumes — Mensuration and Calculation: Perimeter, Area, Surface Area and Volume
 *   04.2 math-earth-geometry — Earth Geometry: Latitude, Longitude, Great Circles and Time Zones
 *   04.3 math-sphere-three-dimensions — The Sphere in Three-Dimensional Coordinate Geometry
 */
import type { KnowledgeTopic } from '../../types'

export const mathematicsUnifiedCh04: KnowledgeTopic[] = [
  {
    id: 'math-measurement-areas-volumes',
    title: 'Mensuration and Calculation: Perimeter, Area, Surface Area and Volume',
    domain: 'Mathematics',
    field: 'Geometry & Measurement',
    branch: 'Mensuration',
    tier: 'core',
    concepts: [
      'Perimeter and area of rectilinear figures',
      'Circles: circumference, area, arcs and sectors',
      'Prisms, cylinders, pyramids, cones and spheres',
      'Surface area versus volume: units give the game away',
      'Compound shapes: the add-and-subtract strategy',
      'Unit conversion: one square metre is 10,000 square centimetres',
    ],
    words: 2012,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Mensuration is the arithmetic of measuring the world: how much fence a field needs (perimeter), how much seed (area), how much water a tank holds (volume), how much paint its walls take (surface area). Exam questions test three skills at once: choosing the right formula for the shape, combining formulas for compound figures, and keeping units honest through the calculation. This lesson builds all three on the same principle — every formula is a picture you can re-derive — and works through the shapes that dominate question banks: rectilinear figures, circles with their arcs and sectors, and the standard solids from prisms to spheres. The masters volumes own the axioms of geometry; here the subject is measurement arithmetic done fast and done right.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Mensuration marks are lost in three predictable ways, and each is fixable with a habit rather than more memory. First, wrong formula for the shape — usually cone versus pyramid, or slant height versus height. Second, compound-shape panic — cured by the add-and-subtract strategy, where every composite figure is simple shapes joined or with holes punched in. Third, unit slips — converting centimetres to metres by dividing by 100 even when the quantity is an area or a volume, where the conversion is 10,000 or 1,000,000. The unit of the answer (cm, cm², cm³) tells you which quantity you are computing; examiners deliberately plant the trap, and the habit of checking units against the question turns the trap into a free mark.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Rectilinear figures', def: 'Perimeter is the walk around the boundary; area is the coverage. Rectangle: P = 2(l + w), A = lw. Triangle: A = ½ × base × height (any side as base, height perpendicular to it); Heron\'s formula A = √(s(s−a)(s−b)(s−c)) with s the semi-perimeter, when only the three sides are known. Parallelogram A = bh; trapezium A = ½(a + b)h with a and b the parallel sides.' },
          { term: 'Circle quantities', def: 'Circumference C = 2πr, area A = πr². An arc is a fraction of the circumference and a sector a fraction of the area, both proportional to the central angle θ: arc = (θ/360) × 2πr, sector area = (θ/360) × πr². The chord\'s perpendicular bisector passes through the centre — the fact behind most "find the radius from a chord" questions.' },
          { term: 'Prisms and cylinders', def: 'A prism has the same cross-section all the way through: volume V = (area of cross-section) × length; surface area = 2 × (cross-section area) + (perimeter of cross-section) × length. A cylinder is the circular prism: V = πr²h, total surface area = 2πr² + 2πrh (two discs plus the rolled rectangle).' },
          { term: 'Pyramids, cones and spheres', def: 'Pyramid: V = ⅓ × (base area) × height. Cone: V = ⅓πr²h, curved surface = πrl where l is the slant height with l² = r² + h², total surface = πrl + πr². Sphere: V = (4/3)πr³, surface area = 4πr². Hemisphere: half of each, plus a disc πr² if closed.' },
          { term: 'Compound figures', def: 'Break composites into named shapes and add; for shapes with holes or cut-outs, subtract. For composite solids (a cylinder topped by a hemisphere), volume adds, but surface area needs care — the surfaces where solids join disappear from the outside.' },
          { term: 'Unit conversion', def: 'Lengths scale by 100 per metre-to-centimetre step, areas by 100² = 10,000, volumes by 100³ = 1,000,000. One cubic metre is 1,000 litres; one litre is 1,000 cm³. The final unit declared in the question — cm² versus cm³ — tells you whether you owe an area or a volume.' },
        ],
      },
      {
        kind: 'para',
        text: 'Rectilinear figures reward one idea above all: the perpendicular height. A triangle\'s area is half the base times the height — not "a side times a side" — and the height is the perpendicular drop onto that base, outside the triangle for obtuse shapes just as legally as inside. Heron\'s formula handles the case with three sides given: compute the semi-perimeter s = (a + b + c)/2 and take the square root of s(s−a)(s−b)(s−c) — clunky but bulletproof, and worth checking against the ½ × base × height answer when both are available. Parallelograms shear rectangles (base times perpendicular height), and trapezia average the parallel sides before multiplying by the height: ½(a + b)h. A useful sanity reflex on any area answer: rough the figure against a grid of its own side lengths, and reject answers that could not hold, say, four copies of an obvious inscribed rectangle.',
      },
      {
        kind: 'para',
        text: 'Circles introduce proportionality to the toolkit. Circumference and area both scale with the radius — linearly for circumference, quadratically for area, which is why doubling the radius quadruples the area (a favourite ratio question: two circles with radii in ratio 2:3 have areas in ratio 4:9). Arcs and sectors are proportional slices of the circle, cut by the central angle: a 60-degree arc is one-sixth of the circumference, and its sector is one-sixth of the area — the same fraction, because the fraction depends only on the angle. Reverse questions are equally common: given an arc length and radius, recover the angle by dividing; given a sector\'s area, walk back to the angle. Chord problems lean on one fact: the perpendicular from the centre to a chord bisects it, which converts "find the radius" into a right-triangle exercise — half the chord and the perpendicular distance are two legs, the radius the hypotenuse.',
      },
      {
        kind: 'para',
        text: 'Solids are the prism idea plus exceptions. The prism formula — volume is cross-section area times length — explains cylinders (circular cross-section: πr²h) and every extruded shape; its surface area is the two end faces plus the "label" around the middle (perimeter of the cross-section times the length: for the cylinder, the rolled rectangle 2πrh). Pyramids and cones carry the one-third: each is exactly a third of the prism or cylinder standing on the same base with the same height — a fact you can verify by pouring sand, and a formula you should never confuse with the prism\'s. The cone\'s curved surface unrolls into a sector of radius equal to the slant height l, giving πrl; keep l and h strictly separate (l² = r² + h²), because question banks bait the swap. The sphere closes the set with the only formulas worth a dedicated slot: V = (4/3)πr³ and S = 4πr² — surface area exactly four great circles, a fact that doubles as a check. For composites, add volumes freely, but subtract the hidden faces from surface area: a hemisphere sitting on a cylinder hides both the cylinder\'s top disc and the hemisphere\'s flat one.',
      },
      {
        kind: 'para',
        text: 'Units are the last mile, and they are where careful students still slip. Conversion factors chain by the power of the quantity: 1 metre = 100 centimetres, so 1 m² = 10⁴ cm² and 1 m³ = 10⁶ cm³ — a square metre is not a hundred square centimetres, and a tank "2 m by 1 m by 50 cm" must be converted to common units before multiplying. Capacity rides on volume: 1 m³ = 1,000 litres and 1 litre = 1,000 cm³, so a 20 cm cube holds 8,000 cm³ = 8 litres. Rates link the systems: mass = volume × density (a water tank\'s weight from its litre count), cost = area × rate per square metre (painting, tiling, turfing), and flow = volume ÷ time (filling a pool). The professional habit is dimensional bookkeeping — write the unit beside every factor as you substitute, cancel what cancels, and let the surviving unit tell you whether the question is answered or a conversion is still owed.',
      },
      {
        kind: 'example',
        title: 'Worked Example — A Composite Water Tank, From Volume to Paint',
        steps: [
          'Shape: a closed cylindrical tank of radius 1 m and height 2 m, topped by a hemispherical lid of the same radius. Question: capacity in litres, and metal area for a one-coat paint estimate.',
          'Volume: cylinder πr²h = π × 1² × 2 = 2π ≈ 6.283 m³; hemisphere (2/3)πr³ = (2/3)π ≈ 2.094 m³; total ≈ 8.377 m³.',
          'Convert to capacity: 8.377 m³ × 1,000 = 8,377 litres — the litres conversion is part of the answer, not decoration.',
          'Surface area (outside only): cylinder\'s curved wall 2πrh = 4π; hemisphere\'s curve 2πr² = 2π; the base disc πr² = π. The cylinder\'s top disc and the hemisphere\'s flat face are hidden — subtracted by construction.',
          'Total surface ≈ 4π + 2π + π = 7π ≈ 21.99 m²; paint for one coat at 10 m² per litre ≈ 2.2 litres.',
          'Unit audit: volume answer in m³ → litres (×1,000); area answer in m² (no conversion owed); both declared before boxing — the habit that survives examiner traps.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Two circles have radii in the ratio 2 : 3. The ratio of their areas is…',
          options: ['2 : 3', '4 : 9', '8 : 27', '3 : 2'],
          answer: 1,
          explain: 'Area scales with the square of the radius, so the ratio 2 : 3 squares to 4 : 9 — the classic proportional-slice question.',
        },
        {
          q: 'A sector of a circle of radius 6 cm has central angle 60°. Its area is…',
          options: ['π cm²', '2π cm²', '6π cm²', '12π cm²'],
          answer: 2,
          explain: 'The sector is 60/360 = one-sixth of the circle; full area is π × 6² = 36π, so the sector is 6π cm².',
        },
        {
          q: 'A cone has radius 3 cm and height 4 cm. Its slant height is…',
          options: ['5 cm', '7 cm', '4 cm', '√7 cm'],
          answer: 0,
          explain: 'l² = r² + h² = 9 + 16 = 25, so l = 5 cm — the 3-4-5 right triangle hiding inside every such cone question.',
        },
        {
          q: 'A 20 cm cube holds how much water?',
          options: ['8 litres', '80 litres', '800 litres', '8,000 litres'],
          answer: 0,
          explain: 'Volume 20³ = 8,000 cm³; one litre is 1,000 cm³, so the cube holds 8 litres — capacity conversion as a named step.',
        },
        {
          q: 'A hemisphere sits exactly on a cylinder\'s top. The composite\'s surface area excludes…',
          options: ['the cylinder\'s curved wall', 'the cylinder\'s base', 'the hemisphere\'s curved top', 'the cylinder\'s top disc and the hemisphere\'s flat face'],
          answer: 3,
          explain: 'Joined surfaces disappear from the outside: the two circular faces in contact are hidden, while the curved wall, base and dome all remain.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Using the vertical height where the slant height is owed — the cone\'s curved surface needs l with l² = r² + h², never h. Halving the wrong quantity in a trapezium — ½(a + b)h averages the parallel sides, it does not halve the height. Treating 1 m² as 100 cm² — the conversion squares: 10,000; and 1 m³ is 1,000,000 cm³. Doubling a radius and expecting the area to double — areas scale with r². Adding surface areas across a joint without subtracting the hidden faces. Dropping the one-third from pyramids and cones, the most mechanical formula loss in the topic. And answering in the unit the question never asked for — a capacity answer in cubic metres, a paint answer in square centimetres; declare the unit, convert deliberately, then box.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: confident arithmetic with squares and roots. Follow with the percentage-ratio mental-math lesson for the rate questions (cost per m², fill rates) and the data-chart reading lesson for measurement questions wearing table clothes. Primary reading: OpenStax, Contemporary Mathematics and Prealgebra 2e geometry and measurement chapters (openstax.org, CC BY — perimeter, area, surface area, volume and unit-conversion sections); the masters volume\'s combined "Algebra, Geometry, Mensuration & Trigonometry Basics" section for the underlying axioms this lesson applies.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Rectilinear: rectangle 2(l+w)/lw; triangle ½bh or Heron; trapezium ½(a+b)h — perpendicular height everywhere.',
        'Circle: C = 2πr, A = πr²; arc and sector are angle-fractions (θ/360) of each; the perpendicular from centre to chord bisects it.',
        'Prism/cylinder: V = cross-section × length; SA = 2 ends + perimeter × length (cylinder: 2πr² + 2πrh).',
        'Pyramid/cone: one-third of the matching prism/cylinder (cone V = ⅓πr²h, curved SA = πrl, l² = r² + h²). Sphere: (4/3)πr³ and 4πr².',
        'Composites: volumes add; surface areas add minus hidden faces.',
        'Units: ×100 per length step, ×10⁴ per area step, ×10⁶ per volume step; 1 m³ = 1,000 litres = 10⁶ cm³; declare the unit before boxing.',
      ] },
    ],
  },
  // --------------------------------------------------------------------
  // Exam-gap pass (2026-10-26): 'Earth geometry' (locations, distances on
  // the Earth, time zones) had zero live coverage — the Geometry &
  // Measurement chapter had planar mensuration (the lesson above) and the
  // Mathematics book's vector chapters have 3-D vectors, but neither
  // teaches latitude/longitude, great-circle distance or time-zone
  // arithmetic. Carved against math-measurement-areas-volumes (planar) and
  // ku vectors chapters (vector space, not navigation).
  {
    id: 'math-earth-geometry',
    title: 'Earth Geometry: Latitude, Longitude, Great Circles and Time Zones',
    domain: 'Mathematics',
    field: 'Geometry & Measurement',
    branch: 'Mensuration',
    tier: 'intermediate',
    concepts: [
      'The sphere and its grid: parallels, meridians, great and small circles',
      'One degree of arc is about 111 km along any great circle',
      'The nautical mile: one minute of arc, exactly 1.852 km',
      'Parallels shrink with the cosine of the latitude: 111 cos φ km per degree',
      'Great circles are the shortest routes — and flat maps hide it',
      'Time zones: 15° of longitude per hour, counted from UTC',
      'The International Date Line and calendar arithmetic',
      'Itineraries that combine distances with clock times',
    ],
    words: 5286,
    readMins: 26,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: "para",
        text: "Alexandria, a little after 200 BCE. Eratosthenes, the chief librarian, reads a curious field report: at noon on the summer solstice in Syene (modern Aswan), the Sun stands exactly overhead — a vertical well casts no wall-shadow at all. In Alexandria, 800-odd kilometres to the north on nearly the same meridian, that same noon Sun leans a measurable 7.2° off the vertical. One planet, two shadows, and the whole scale of the Earth falls out of two lines of geometry. The shadow angle says Alexandria and Syene subtend 7.2° of the Earth's circle, and 7.2° is exactly one fiftieth of a full turn:\n\n$$\\frac{360°}{7.2°} = 50$$\n\nSo the whole circumference is fifty times the Alexandria–Syene distance, which the caravan pace of the day put near 5,000 stadia:\n\n$$C = 50 \\times 5{,}000 = 250{,}000\\ \\text{stadia} \\approx 39{,}000\\text{–}40{,}000\\ \\text{km}$$\n\nDepending on which stadion length you credit him, Eratosthenes missed the modern equatorial circumference of 40,075 km by a few percent at most — with shadows, a well, and arithmetic. Two millennia later the same two ideas, **angles on a known sphere convert directly into distances and clock times**, steer every airliner and container ship on the planet: Qantas flight QF9 has covered the roughly 14,500 km from Perth to London non-stop since 2018 along a path that is pure Eratosthenes arithmetic — arcs of great circles plus fifteen degrees of longitude per hour. This lesson builds that machinery from scratch: the two-angle address system, the 111-kilometre rule and the cosine law of shrinking parallels, the shortest-route principle, and the conversion of longitude into hours — with the date-line twist at the end.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Aviation routes, marine charts, satellite positioning, container-ship scheduling and the world\u2019s clocks are all applied spherical geometry. The same small toolkit — 111 km per degree, 111 cos φ km east-west, 15° per hour — answers distance-between-cities problems, flight-time and jet-lag arithmetic, and the famous puzzle of routes that look bent on a flat map yet are the shortest paths on the globe.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'A Sphere, Two Families of Circles' },
      {
        kind: "para",
        text: "Model the Earth as a sphere of mean radius\n\n$$R \\approx 6{,}371\\ \\text{km}$$\n\nwith circumference\n\n$$C = 2\\pi R \\approx 2\\pi \\times 6{,}371 \\approx 40{,}030\\ \\text{km}$$\n\nThe planet is not a perfect sphere — it bulges at the equator (equatorial radius about 6,378 km against about 6,357 km at the poles) because its spin flings mass outward — but a sphere of radius 6,371 km is within half a percent of the truth everywhere, which is far better than the precision any hand calculation needs. Hold that one number: **40,000 kilometres around**. Every distance rule in this lesson is that circumference sliced into degrees.",
      },
      {
        kind: "para",
        text: "Every point on the sphere carries a two-angle address. **Latitude** measures how far north or south of the equator a point sits, as an angle at the Earth's centre: 0° on the equator, 90°N at the North Pole, 90°S at the South Pole, and for example 27.5°S for Brisbane. The angle is swept from the equatorial plane up the meridian through the point — which is why latitude is also called **geocentric latitude** when we want to stress that the angle lives at the centre. **Longitude** measures how far east or west a point sits of an agreed zero meridian: the **prime meridian** through Greenwich, London, fixed by international agreement (the 1884 International Meridian Conference in Washington) after national rivalries had every major port using its own zero. Longitude runs 0° to 180° east and 0° to 180° west, written for example 153.0°E for Brisbane. By the latitude-first convention the written pair is (latitude, longitude): Brisbane is 27.5°S, 153.0°E — and swapping the two numbers deposits you in the Indian Ocean instead of Queensland.",
      },
      {
        kind: "para",
        text: "The grid itself is two families of circles. A **parallel of latitude** is the circle swept by holding latitude fixed and varying longitude: the equator, 27.5°S, the Arctic Circle — every parallel is a genuine circle drawn on the sphere. A **meridian of longitude** is the circle swept by holding longitude fixed and varying latitude: a pole-to-pole hoop through Greenwich, through Tokyo, through any chosen zero. Now the single most important classification in the whole subject: a **great circle** is any circle on the sphere whose centre coincides with the Earth's centre — the biggest circles the sphere can hold — while any other circle on the surface is a **small circle**. Every meridian hoop passes through both poles and the centre, so every meridian is a great circle (strictly, a meridian and its opposite meridian together form one full great circle through both poles). Among the parallels, only the equator is a great circle; every other parallel is a small circle centred on the polar axis, not on the Earth. Two useful consequences follow. First, any two great circles intersect — in exactly two points, antipodal to each other — which is why great-circle routes always cross meridians at changing angles. Second, the arc of the great circle through two points is the **shortest path between them on the sphere**: a path that wanders onto any smaller circle, or zigzags, is longer. The clean proof belongs to the three-dimensional geometry of the sphere chapter (§73.3 owns the full argument); here we use the fact and its consequences.",
      },
      { kind: 'heading', text: 'From Degrees to Kilometres: The 111 Kilometre Rule' },
      {
        kind: "para",
        text: "Angles become distances through arc length. An arc subtending angle θ (radians) on a circle of radius R has length $s = R\\theta$, so a full circumference $2\\pi R$ sliced into 360 degrees gives the distance carried by one degree **along any great circle**:\n\n$$1°\\ \\text{of great-circle arc} = \\frac{2\\pi R}{360} \\approx \\frac{40{,}030}{360} \\approx 111\\ \\text{km} \\tag{1}$$\n\nRule (1) is the single most useful number in navigation arithmetic. Along a **meridian** — always a great circle — it says two places Δφ degrees of latitude apart are\n\n$$d_{\\text{meridian}} \\approx 111\\,\\Delta\\varphi\\ \\text{km} \\tag{2}$$\n\napart. Townsville (19.3°S) and Mount Isa (20.7°S) differ by only 1.4° of latitude yet lie about $111 \\times 1.4 \\approx 155$ km apart north-south; Sydney and Brisbane, 6.7° apart in latitude, are about 745 km apart on the map for the same north-south reason. The rule also runs backwards, which is how navigators use it: divide a measured distance by 111 to read it as an angle. Because one degree is 60 minutes of arc, slicing finer gives the **nautical mile** — one minute of great-circle arc, standardised internationally (by the hydrographic conference of 1929) as exactly 1.852 km:\n\n$$1\\ \\text{nautical mile} = \\frac{111\\ \\text{km}}{60} \\approx 1.852\\ \\text{km}$$\n\nMarine charts print their latitude scales in degrees and minutes for precisely this reason: with the latitude axis literally calibrated in arc, any distance measured against it comes out already in nautical miles, no arithmetic needed. Aviation kept the unit too — a Boeing 787 burns fuel and files flight plans in a world measured in NM — so both conversions are worth having cold: 1° ≈ 111 km, 1′ = 1 NM = 1.852 km.",
      },
      {
        kind: "para",
        text: "Equation (1) applies along a **great circle**. The catch — and the most examined trap of the whole topic — is that a parallel of latitude (equator excepted) is not a great circle. Jog once around the equator and you cover 40,030 km; jog once around a parallel through a frozen research station near the pole and your 'round-the-world' lap is a stroll around a car park. The parallels shrink as you leave the equator, so the distance carried by one degree of **longitude** shrinks with them. The shrinking law is one clean derivation, done properly in the block below: at latitude φ the parallel's radius is $R\\cos\\varphi$, hence\n\n$$d_{\\text{per degree of longitude}} \\approx 111\\cos\\varphi\\ \\text{km} \\tag{3}$$\n\nThe cosine factor does quiet, enormous work. At Brisbane's 27.5°S, $\\cos 27.5° \\approx 0.887$, so one degree of longitude is $111 \\times 0.887 \\approx 98.5$ km. At 60°N (Anchorage, Oslo, Saint Petersburg) it has halved to $111 \\times 0.5 = 55.5$ km. At 80°N only 19 km per degree remain, and at 89° — one degree of latitude from the pole — a full degree of longitude spans under 2 km: you could pace it out in an afternoon. Notice the built-in sanity checks: at φ = 0 the cosine is 1 and rule (3) honestly collapses back to rule (1); at the pole the cosine is 0 and the parallel degenerates to a point, exactly as the picture demands.",
      },
      {
        kind: 'derivation',
        title: 'Why the Parallel Shrinks — r = R cos φ, Derived',
        statement: 'Why does one degree of longitude cost $111\\cos\\varphi$ km at latitude φ? One cross-section picture does it: cut the sphere with a flat plane through both poles and the point P, and read the parallel\u2019s radius straight off the right triangle that appears.',
        prerequisites: ['circumference of a circle, C = 2πr', 'cosine as adjacent-over-hypotenuse in a right triangle', 'arc length proportional to radius for a fixed angle'],
        steps: [
          { label: 'Set the cross-section', formula: '\\text{plane through both poles and } P \\ \\Rightarrow\\ \\text{meridian circle of radius } R', explanation: 'This cut contains the polar axis and P, so it slices the sphere exactly along the meridian through P. The parallel through P appears edge-on in this view — as a horizontal line through P — which is what lets us measure its radius.' },
          { label: 'Mark the latitude angle at the centre', formula: '\\angle\\left(OP,\\ \\text{equatorial plane}\\right) = \\varphi', explanation: 'Latitude is defined as the angle at the Earth\u2019s centre C between OP and the equatorial plane. On the cross-section this is an ordinary plane angle at the centre of a circle of radius R.' },
          { label: 'Drop the perpendicular and read the parallel\u2019s radius', formula: 'r_\\varphi = R\\cos\\varphi, \\qquad \\text{height above equator} = R\\sin\\varphi', explanation: 'The parallel through P is a circle centred on the polar axis, so its radius is the horizontal distance from P to that axis. In the centre-triangle, that horizontal leg is adjacent to the angle φ over hypotenuse R — cosine. The vertical leg, R sin φ, is how far above the equatorial plane P rides.' },
          { label: 'Slice the shrunken circumference into degrees', formula: 'C_\\varphi = 2\\pi r_\\varphi = 2\\pi R\\cos\\varphi \\ \\Rightarrow\\ \\frac{C_\\varphi}{360} = \\frac{2\\pi R}{360}\\cos\\varphi \\approx 111\\cos\\varphi\\ \\text{km}', explanation: 'One degree of longitude is one three-hundred-and-sixtieth of this smaller circumference. The 111 of rule (1) simply gets multiplied by the shrink factor cos φ — recovering 111 at the equator (φ = 0) and 0 at the pole (φ = 90°), where the parallel closes to a point.' },
        ],
        result: 'One degree of longitude costs $111\\cos\\varphi$ km at latitude φ (rule (3)): the equator\u2019s 111 km multiplied by the parallel\u2019s radius fraction, R cos φ over R. It recovers 111 at the equator, halves at 60°, and closes to zero at the pole \u2014 the geometry of Figure 1 in one line.',
      },
      {
        kind: "para",
        text: "One honesty note before the picture. Because the real Earth is an oblate spheroid rather than a perfect sphere, a degree of latitude is not quite constant: it runs about 110.6 km near the equator, rising to about 111.7 km near the poles as the meridians flatten slightly. Navigation has known this since the geodetic surveys of the eighteenth century — it is why the nautical mile is now pinned at exactly 1,852 m by definition rather than left to vary with latitude. For every calculation in this lesson, the sphere with rule (1) is the working model; the sub-kilometre wobble is what the professional tables absorb.",
      },
      {
        kind: 'figure',
        caption: 'Figure 1 — Why one degree of longitude shrinks toward the poles. LEFT: a pole-to-pole cross-section. A point P at latitude φ sits on a parallel whose radius is the horizontal leg R cos φ of the centre-triangle (drawn for 60°N and 27.5°S to scale). RIGHT: the same sphere viewed from above the North Pole — each parallel is a smaller concentric circle (equator 40,030 km round, 60°N exactly half, 80°N under a fifth), so the same one-degree wedge of longitude cuts a shorter and shorter arc.',
        afterConcept: 3,
        svg: `<svg viewBox="0 0 880 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section and polar view showing parallels shrinking with the cosine of latitude">
  <rect x="0" y="0" width="880" height="470" fill="transparent"/>
  <!-- LEFT: cross-section through the poles -->
  <circle cx="220" cy="235" r="170" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <line x1="220" y1="235" x2="220" y2="65" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="228" y="72" font-size="14" fill="#64748b">N. Pole</text>
  <text x="228" y="410" font-size="14" fill="#64748b">S. Pole</text>
  <line x1="50" y1="235" x2="390" y2="235" stroke="#0ea5e9" stroke-width="2"/>
  <text x="52" y="228" font-size="14" fill="#0ea5e9">equator</text>
  <line x1="220" y1="235" x2="220" y2="420" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- 60N point: angle 60 above equator, x=220+170*cos60=305, y=235-170*sin60=87.8 -->
  <circle cx="305" cy="87.8" r="4.5" fill="#0ea5e9"/>
  <line x1="220" y1="235" x2="305" y2="87.8" stroke="#0ea5e9" stroke-width="1.5"/>
  <line x1="305" y1="87.8" x2="220" y2="87.8" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="312" y="84" font-size="14" fill="#0369a1">60°N</text>
  <text x="120" y="150" font-size="13" fill="#0369a1">r = R cos 60° = R/2</text>
  <!-- 27.5S point: x=220+170*cos27.5=370.9, y=235+170*sin27.5=313.5 -->
  <circle cx="370.9" cy="313.5" r="4.5" fill="#f59e0b"/>
  <line x1="220" y1="235" x2="370.9" y2="313.5" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="370.9" y1="313.5" x2="220" y2="313.5" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="330" y="334" font-size="14" fill="#b45309">27.5°S</text>
  <text x="130" y="345" font-size="13" fill="#b45309">r = R cos 27.5° ≈ 0.887 R</text>
  <!-- centre angle arc -->
  <path d="M 220 195 A 40 40 0 0 1 252 252" fill="none" stroke="#64748b" stroke-width="1.3"/>
  <text x="236" y="228" font-size="13" fill="#64748b">φ</text>
  <text x="205" y="245" font-size="13" fill="#64748b">R</text>
  <text x="28" y="452" font-size="15" font-weight="bold" fill="#334155">Cross-section: the parallel is the horizontal leg R cos φ</text>
  <!-- RIGHT: polar view -->
  <circle cx="660" cy="235" r="170" fill="none" stroke="#0ea5e9" stroke-width="2.5"/>
  <circle cx="660" cy="235" r="85" fill="none" stroke="#0ea5e9" stroke-width="1.8" stroke-dasharray="6 4"/>
  <circle cx="660" cy="235" r="29.5" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="660" y1="235" x2="660" y2="65" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="668" y="70" font-size="14" fill="#64748b">N. Pole</text>
  <line x1="660" y1="235" x2="660" y2="405" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="490" y1="235" x2="830" y2="235" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="660" y1="235" x2="775" y2="120" stroke="#94a3b8" stroke-width="1.2"/>
  <line x1="660" y1="235" x2="775" y2="350" stroke="#94a3b8" stroke-width="1.2"/>
  <line x1="660" y1="235" x2="545" y2="120" stroke="#94a3b8" stroke-width="1.2"/>
  <line x1="660" y1="235" x2="545" y2="350" stroke="#94a3b8" stroke-width="1.2"/>
  <text x="700" y="180" font-size="13" fill="#0369a1">meridians: great circles</text>
  <text x="560" y="440" font-size="14" fill="#0ea5e9">equator: 111 km per degree</text>
  <text x="748" y="240" font-size="13" fill="#0369a1">60°N: 55.5 km/°</text>
  <text x="693" y="205" font-size="12" fill="#0369a1">80°N: 19 km/°</text>
  <path d="M 660 195 A 40 40 0 0 1 700 235" fill="none" stroke="#b45309" stroke-width="1.5"/>
  <text x="668" y="222" font-size="13" fill="#b45309">1°</text>
  <text x="490" y="452" font-size="15" font-weight="bold" fill="#334155">Polar view: same wedge, shorter arc</text>
</svg>`,
      },
      { kind: 'heading', text: 'Great Circles: The Shortest Way Round a Sphere' },
      {
        kind: "para",
        text: "On a flat map the shortest path between two cities looks like the ruler-line between them. On the sphere the ruler-line is a lie of the projection: the true shortest path is the great-circle arc, and on the Mercator maps used for centuries at sea that arc bows visibly toward the nearer pole. Flights from Los Angeles to Tokyo track up near the Aleutian Islands — look at any flight-tracker map — not because airlines enjoy detours but because the arc through high latitudes is genuinely the shorter ride. The reason is Figure 1 read in reverse: near the poles, east-west steps are cheap (55 km per degree at 60°N instead of 111), so a route that swings poleward buys its longitude at a discount and pays for the extra north-south excursion out of the savings. For nearby points the effect is small; for long east-west hauls across continents it is worth thousands of kilometres — Example 4 below will put a number on it.",
      },
      {
        kind: "para",
        text: "To compute a great-circle distance you need only the two endpoints' coordinates and one formula — the **spherical law of cosines**. Call the latitudes φ₁ and φ₂, the longitudes λ₁ and λ₂, and let Δλ = λ₂ − λ₁; then the angular separation c between the points obeys",
      },
      {
        kind: 'formula',
        name: 'Great-circle distance (spherical law of cosines)',
        latex: '\\cos c = \\sin\\varphi_1\\,\\sin\\varphi_2 + \\cos\\varphi_1\\,\\cos\\varphi_2\\,\\cos\\left(\\Delta\\lambda\\right), \\qquad d \\approx 111\\,c^\\circ\\ \\text{km}',
        meaning: 'The angle c between the two radius vectors comes from the coordinates; multiplying it by 111 km per degree (rule (1)) converts it to ground distance. The derivation is an exercise in the dot product done in the sphere chapter (§73.3); navigators once tabulated it, and the haversine rewrite of the same law is the numerically safer form for close pairs.',
      },
      {
        kind: "para",
        text: "Three habits make the formula safe. Convert every latitude and longitude to signed decimals first (south and west negative), because the sine and cosine must see the true geometry, not the map notation. Keep c in degrees for the final 111 multiplication — or convert to radians and multiply by R ≈ 6,371 km, the same thing. And test the output against common sense: two points on the same meridian must come out at exactly 111 Δφ km by rule (2), and antipodal points (φ, λ) and (−φ, λ ± 180°) must come out at half the circumference, about 20,015 km. The formula passes both tests, which is the kind of self-check a working navigator trusts more than confidence.",
      },
      { kind: 'heading', text: 'Longitude into Hours: Time Zones and the Date Line' },
      {
        kind: "para",
        text: "The Earth turns once — 360° of longitude — in 24 hours, so every hour the ground under the Sun advances\n\n$$\\frac{360°}{24\\ \\text{h}} = 15°\\ \\text{per hour}$$\n\nTurn that around and longitude becomes clock time. Local solar noon drifts later as you travel west (the Sun crosses your meridian later), earlier as you travel east, at one hour per 15 degrees:\n\n$$\\Delta t\\ \\text{(hours)} = \\frac{\\Delta\\lambda}{15°} \\tag{4}$$\n\nwith the sign convention the whole planet runs on: **east is ahead, west is behind** — the east sees the Sun first. Perth at 115.9°E sits $115.9/15 \\approx 7.7$ solar hours ahead of Greenwich, and its standard zone snaps that to UTC+8; Brisbane at 153.0°E gives $153/15 \\approx 10.2$, standardised as UTC+10. Noon UTC is therefore 8 p.m. in Perth and 10 p.m. in Brisbane — and the arithmetic of equation (4) with a pinch of rounding is how every one of the world's 30-odd whole-hour offsets was first drawn.",
      },
      {
        kind: "para",
        text: "The word **standard** carries real weight, because politics edits geometry. India spans roughly 68°E to 97°E — nearly 29 degrees, two full hours of solar spread — yet the whole country keeps one clock, Indian Standard Time at UTC+5:30, referenced to the 82.5°E meridian that averages the spread; the half-hour offset is exactly that averaging made audible. China goes further: one zone, UTC+8, for a country nearly 60 degrees wide, so in western Xinjiang solar noon can fall after 3 p.m. on the clock. Nepal keeps UTC+5:45 — the only quarter-hour offset on a national scale — for reasons of history sitting between India's 5:30 and China's 8. Some jurisdictions also run **daylight saving**, shifting their clocks (usually by an hour) through summer months, so a real itinerary must check the date, not just the longitude. Equation (4) tells you what the geometry proposes; the almanac of zone rules tells you what humanity accepted. The **International Date Line** completes the system at the far side: near 180° longitude, through the emptiest stretch of the Pacific, runs the calendar seam. It is drawn with zig-zags so that Siberia, the Aleutians and island groups never split a country into two dates — and in one famous edit, Samoa and Tokelau jumped the line westward at the end of 2011, skipping 30 December entirely to trade a lost Friday for alignment with Australia and Asia. Cross the line westbound (Asia-ward) and you add a day; eastbound (Americas-ward) and you subtract one — which is why a flight leaving Sydney on Tuesday evening can land in Los Angeles on Tuesday afternoon of the same date, arriving, by the calendar, before it left.",
      },
      { kind: 'heading', text: 'Worked Examples' },
      {
        kind: 'example',
        title: 'Worked Example 1 — east-west separation along a shared parallel',
        steps: [
          'Identify what is asked: Townsville sits at about 19.3°S, 146.8°E and Mount Isa at about 20.7°S, 139.5°E — estimate their east-west separation along the shared latitude, and the UTC offset both towns keep.',
          'The longitude gap: Δλ = 146.8 − 139.5 = 7.3 degrees. The latitudes differ by only 1.4°, so a single working latitude φ ≈ 20°S serves for both.',
          'Kilometres per degree of longitude at 20°S, from rule (3): 111 cos 20° ≈ 111 × 0.9397 ≈ 104.3 km.',
          'Distance: d ≈ 7.3 × 104.3 ≈ 761 km — call it 760 km. (The cosine trap check: without rule (3), 7.3 × 111 = 810 km overstates the gap by 6.5%, the size of the cosine at this latitude.)',
          'Time check, from rule (4): both towns sit near 140-147°E, deep inside the UTC+10 zone, so 12:00 UTC is 22:00 local in both — the two-hour solar spread between them never shows on the clock.',
          'State the result: Mount Isa lies about 760 km west of Townsville at the same effective latitude, and both run UTC+10.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example 2 — minutes of arc, nautical miles and kilometres agreeing',
        steps: [
          'Identify what is asked: two ships report positions on the same meridian, 5°25′ of latitude apart. Express their separation in nautical miles and in kilometres — and confirm the two units agree.',
          'Convert the arc to minutes: 5°25′ = 5 × 60 + 25 = 325 minutes of arc.',
          'Nautical-mile route: by definition 1′ = 1 NM, so the separation is 325 NM.',
          'Kilometre route: 325 NM × 1.852 km/NM = 601.9 ≈ 602 km.',
          'Cross-check by rule (2): 5°25′ = 5.4167°, and 5.4167 × 111 ≈ 601 km — the kilometre answer from the 111 rule and from the nautical mile land within a kilometre of each other (the difference is just the rounding inside 111), which is the whole point of the NM definition.',
          'State the result: the ships are 325 NM ≈ 602 km apart, and minutes of arc are kilometres by another name.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example 3 — an itinerary through UTC: Singapore to Dubai',
        steps: [
          'Identify what is asked: a flight leaves Singapore (UTC+8) at 23:05 local on Tuesday and lands in Dubai (UTC+4) after 5 h 30 m of flying. Find the local arrival day and time.',
          'Convert departure to UTC, using rule (4) baked into the zone offsets: 23:05 − 8:00 = 15:05 UTC, Tuesday.',
          'Add the flight time in UTC, the universal clock: 15:05 + 5:30 = 20:35 UTC, still Tuesday.',
          'Convert to destination local time: Dubai keeps UTC+4, so 20:35 + 4:00 = 00:35, Wednesday.',
          'Watch the calendar: the departure was late Tuesday and the flight flew westward (from zone +8 to zone +4, four hours "slow"), so part of the flight time is handed back by the clock — the travellers experience about 6.5 hours door to door on the dial but only 5.5 hours of flying.',
          'State the result: wheels-down in Dubai at 00:35 Wednesday local (20:35 Tuesday UTC) — and the same three-step habit (local → UTC → local) solves every itinerary, east or west, date line or not.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example 4 — the great-circle discount: Mumbai to Tokyo',
        steps: [
          'Identify what is asked: Mumbai sits at about 19.1°N, 72.9°E and Tokyo at about 35.7°N, 139.7°E. Compare the true great-circle distance with a "follow the parallel, then turn north" route, and translate the difference into flight hours.',
          'Naive route, leg 1 — east along a constant parallel near Mumbai\u2019s latitude: Δλ = 139.7 − 72.9 = 66.8° at φ ≈ 19.1°N, costing 66.8 × 111 cos 19.1° ≈ 66.8 × 104.9 ≈ 7,010 km.',
          'Naive route, leg 2 — north up the meridian to Tokyo\u2019s latitude: Δφ = 35.7 − 19.1 = 16.6°, costing 16.6 × 111 ≈ 1,843 km by rule (2). The dog-leg total: 7,010 + 1,843 ≈ 8,850 km.',
          'Great-circle route, by the spherical-law formula above: cos c = sin 19.1° sin 35.7° + cos 19.1° cos 35.7° cos 66.8° = 0.327 × 0.584 + 0.945 × 0.822 × 0.394 ≈ 0.191 + 0.306 = 0.497, so c ≈ 60.2°.',
          'Convert to kilometres with rule (1): d ≈ 60.2 × 111 ≈ 6,680 km.',
          'The discount: 8,850 − 6,680 ≈ 2,170 km — about a quarter of the naive trip, roughly two and a half hours of cruising at 900 km/h. The great circle earns it by swinging north (the route climbs well past 30°N over China), buying its eastward longitude where degrees cost as little as 94 km instead of 105.',
          'State the result: the shortest Mumbai–Tokyo path is ≈ 6,680 km, about 2,200 km shorter than the flat-looking route — great-circle routing is not an aesthetic preference but the cheapest physics on offer.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Flight planning: airlines file great-circle routes that look bowed on flat maps but minimise fuel and time — the discount of Example 4, multiplied across a year of operations',
          'GPS receivers report position as decimal degrees to six places; the sixth decimal place is about 0.11 metres, which is why your phone can name the pavement you stand on',
          'Marine charts divide the frame into degrees and minutes with the latitude scale doing double duty as a distance ruler in nautical miles',
          'Broadcast scheduling and remote meetings run on UTC plus zone offsets, with daylight-saving tables checked because equation (4) proposes and parliaments dispose',
          'Solar design and satellite orbits: sun-synchronous satellites precess about 1° per day precisely because the equatorial bulge torques the orbit — earth geometry at engineering grade',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Latitude comes first in written coordinates (Brisbane 27.5°S, 153.0°E) — swapping the pair puts you in the ocean. The 111 km rule belongs to great circles: forgetting the cosine factor along a parallel overestimates east-west distances, the 810-vs-761 error of Example 1, and near the poles it overestimates catastrophically. East is ahead, west is behind — sign slips here turn a two-hour time difference into minus two. Offsets are zone-relative, not longitude-derived, wherever politics overrides geometry (one zone for all of China; India at UTC+5:30), and daylight saving silently shifts half a continent for half the year. The date line changes the DATE, not just the hour — westbound adds a day, eastbound subtracts one — and a nautical mile (1.852 km) is not a statute mile (1.609 km); confusing them misstates every charted distance by 15%.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Latitude (φ)', def: 'Angular distance north or south of the equator, measured at the Earth\u2019s centre: 0° to 90° N or S.' },
          { term: 'Longitude (λ)', def: 'Angular distance east or west of the Greenwich prime meridian: 0° to 180° E or W.' },
          { term: 'Parallel', def: 'The circle swept holding latitude fixed; every parallel except the equator is a small circle.' },
          { term: 'Meridian', def: 'A pole-to-pole circle of constant longitude; every meridian is half of a great circle through both poles.' },
          { term: 'Great circle', def: 'A circle on the sphere whose centre is the Earth\u2019s centre — the largest circles possible, and the shortest routes.' },
          { term: 'Small circle', def: 'Any circle on the sphere whose centre is not the Earth\u2019s centre; its arcs are never the shortest path.' },
          { term: 'Nautical mile', def: 'One minute of arc along a great circle, defined since 1929 as exactly 1.852 km.' },
          { term: 'UTC', def: 'Coordinated Universal Time — the reference clock, tied to the Greenwich meridian, from which all zone offsets are counted.' },
          { term: 'International Date Line', def: 'The calendar seam near 180° longitude: crossing westbound adds a day, eastbound subtracts one.' },
          { term: 'Standard time zone', def: 'A region keeping one official clock offset from UTC; the geometry proposes 15° per hour, politics redraws the boundaries.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Two islands lie on the same meridian, 5 degrees of latitude apart. Their separation is closest to:',
            options: ['5 km', '55 km', '111 km', '555 km'],
            answer: 3,
            explain: 'Along a meridian — a great circle — rule (2) gives d ≈ 111 × 5 = 555 km. 55 km is the per-degree figure at 60°N for LONGITUDE, not latitude; 111 km is one single degree, not five; 5 km is a scale error (that is roughly one degree of longitude near 89°).',
          },
          {
            q: 'At 60°N latitude, one degree of longitude spans roughly:',
            options: ['19 km', '55 km', '96 km', '111 km'],
            answer: 1,
            explain: 'Rule (3): 111 cos 60° = 111 × 0.5 = 55.5 km. 111 km forgets the parallel shrinks (it is the equator-only figure); 19 km belongs to 80°N; 96 km is near 30°. The parallels are small circles — only the equator runs the full 111.',
          },
          {
            q: 'Perth keeps UTC+8 and Brisbane UTC+10. When a Perth office opens at 9:00 a.m. local time, it is already:',
            options: ['7:00 a.m. in Brisbane', '9:00 a.m. in Brisbane', '11:00 a.m. in Brisbane', '1:00 p.m. in Brisbane'],
            answer: 2,
            explain: 'Brisbane is two zones EAST of Perth, and east is ahead: 9:00 + 2 = 11:00 a.m. 7:00 a.m. flips the sign (the classic west-is-ahead error); 9:00 assumes equal offsets; 1:00 p.m. adds four hours as if the gap were 60° of longitude.',
          },
          {
            q: 'A plane crosses the International Date Line flying westbound from Honolulu to Auckland. The calendar:',
            options: ['jumps back one day', 'jumps forward one day', 'changes by one hour per 15 degrees only', 'does not change at all'],
            answer: 1,
            explain: 'Westbound crossing ADDS a day — you hand your Tuesday over to the calendar and pick up Wednesday. Eastbound subtracts (the Sydney-to-Los Angeles "arrive before you left" trick). The per-15-degrees answer describes zone-hours, not the calendar seam.',
          },
          {
            q: 'Assertion (A): The shortest route from Mumbai to Tokyo passes north of the parallel that joins their latitudes.\nReason (R): Parallels other than the equator are small circles, and on a sphere the shortest path between two points is an arc of the great circle through them.',
            options: ['Both A and R are true, and R correctly explains A', 'Both A and R are true, but R does not explain A', 'A is true, R is false', 'A is false, R is true'],
            answer: 0,
            explain: 'A is Example 4\u2019s finding (≈ 6,680 km arcing north versus ≈ 8,850 km along-then-up), and R is exactly why: the parallel at 19°N has radius R cos 19.1° ≈ 0.945R — a small circle — so its arc cannot beat the great circle. R is the mechanism of A, so the pair explains.',
          },
          {
            q: 'Match the place to its standard UTC offset.\nList-I: (A) Greenwich (B) Sydney (C) New York (D) Kolkata\nList-II: (1) UTC+0 (2) UTC+10 (3) UTC−5 (4) UTC+5:30',
            options: ['A→1, B→2, C→3, D→4', 'A→2, B→1, C→3, D→4', 'A→1, B→2, C→4, D→3', 'A→4, B→2, C→3, D→1'],
            answer: 0,
            explain: 'Greenwich owns the zero (the prime meridian is its longitude); Sydney at 151°E sits 10 solar hours east; New York\u2019s standard zone is UTC−5 (west is behind); Kolkata keeps India\u2019s averaged UTC+5:30. The other mappings misplace the half-hour offset or flip east/west.',
          },
          {
            q: 'A container ship\u2019s log reads: crossing of the date line westbound at 23:30 ship\u2019s time on Thursday; ten minutes later the entry continues. The ship\u2019s clocks then show:',
            options: ['23:40 on Thursday', '23:40 on Friday', '00:40 on Saturday', '23:40 on Saturday'],
            answer: 1,
            explain: 'Westbound = add a day: the moment of crossing, 23:30 Thursday becomes 23:30 Friday, and ten minutes of sailing later the log reads 23:40 Friday. 23:40 Thursday ignores the seam; 00:40 Saturday adds the day AND treats the crossing as midnight; 23:40 Saturday adds two days.',
          },
          {
            q: 'Using rule (3) with the working latitude 20°S, the Townsville–Mount Isa east-west gap of 7.3° of longitude is about:',
            options: ['104 km', '490 km', '760 km', '810 km'],
            answer: 2,
            explain: '7.3 × 111 cos 20° ≈ 7.3 × 104.3 ≈ 761 km. 810 km = 7.3 × 111 — the cosine trap, overstating by 6.5%; 104 km is one degree, not 7.3; 490 km would need cos 20° applied twice.',
          },
          {
            q: 'Which of the following are great circles? (i) the equator (ii) the meridian at 90°E taken together with the meridian at 90°W (iii) the parallel at 45°N (iv) any circle drawn on the sphere whose radius equals the sphere\u2019s radius',
            options: ['(i) and (ii) only', '(i), (ii) and (iv)', '(i), (iii) and (iv)', 'all four of them'],
            answer: 1,
            explain: '(i) is the one great-circle parallel; (ii) two opposite meridians close into one full great circle through the poles; (iv) forces the centre to coincide with the Earth\u2019s centre, so it is a great circle by definition. (iii) fails: at 45°N the parallel\u2019s radius is R cos 45° ≈ 0.71R — a small circle centred on the polar axis, not on the Earth.',
          },
          {
            q: 'A pilot at 60°N flies due east through 2° of longitude. The distance flown is closest to:',
            options: ['27.75 km', '55.5 km', '111 km', '222 km'],
            answer: 2,
            explain: 'Two degrees at 55.5 km per degree (rule (3) at 60°N): 2 × 55.5 = 111 km — amusingly the same number as one equatorial degree. 222 km forgets the parallel shrinks (2 × 111); 55.5 km forgets the 2°; 27.75 km halves instead of doubling. Sign, scale, cosine — the three habits of this lesson in one question.',
          },
          {
            q: 'A navigator measures an arc of 30′ (30 minutes) on a chart and converts it to kilometres. The result is closest to:',
            options: ['1.9 km', '30 km', '56 km', '111 km'],
            answer: 2,
            explain: '30′ = 30 NM = 30 × 1.852 ≈ 55.6 km — the same figure as 0.5° × 111, since the nautical mile is defined as one minute of arc. 1.9 km is ONE minute; 30 km confuses minutes with kilometres; 111 km is a full degree.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: the mensuration lesson (§73.1) for arc length and circumference logic, and trigonometry for the cosine that shrinks the parallels. The three-dimensional sphere chapter (§73.3) owns the full spherical geometry — including the derivation of the great-circle formula used in Example 4. The navigation lesson in the outdoors course turns today\u2019s arithmetic into compass-and-map fieldwork, geography\u2019s physical survey places the grid in its descriptive home, and aviation applies the nautical mile at 900 km/h.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'The address system: latitude φ first (0-90° N/S from the equator), longitude λ second (0-180° E/W from Greenwich) — and latitude always written first.',
        'One degree along any great circle ≈ 111 km (rule (1)); one minute = one nautical mile = 1.852 km exactly.',
        'Parallels shrink: one degree of longitude costs 111 cos φ km (rule (3)) — 98.5 at Brisbane, 55.5 at 60°N, under 2 near the pole.',
        'Great circles (centre at the Earth\u2019s centre) carry the shortest routes; every meridian is one, only the equatorial parallel is; flat maps bend the truth.',
        'Time: 15° per hour, east ahead, west behind (rule (4)); real zones are politics\u2019 edit of that geometry — India at UTC+5:30, China in one zone, daylight saving by season.',
        'The date line near 180°: westbound adds a day, eastbound subtracts one.',
        'The working toolkit: 111 per degree, 111 cos φ east-west, Δλ/15 into hours — plus the spherical law of cosines when two coordinates must become one distance.',
      ] },
    ],
  },
  {
    id: 'math-sphere-three-dimensions',
    title: 'The Sphere in Three-Dimensional Coordinate Geometry',
    domain: 'Mathematics',
    field: 'Geometry & Measurement',
    branch: 'Solid Geometry',
    tier: 'advanced',
    concepts: [
      'The sphere as the simplest quadric surface',
      'Centre-radius equation and the general form',
      'Completing the square in three variables',
      'Plane sections: great circles and small circles',
      'The tangent plane formula xx₁ + yy₁ + zz₁ = a²',
      'Tangency condition: distance from centre equals radius',
      'Tangent length and the power of an external point',
      'Intersection of two spheres is a circle in a plane',
    ],
    words: 2047,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'A plane is ruled by first-degree equations; the moment geometry moves into space and allows a second degree, the first surface worth mastering is the sphere — the set of all points at a fixed distance r (the radius) from a fixed point C (the centre). Charles Smith\u2019s classic treatise on solid geometry classifies it as the simplest of the central conicoids, and everything about it follows from that symmetry: every direction through the centre behaves identically, every plane slice is a circle, and tangency reduces to one perpendicularity. This lesson builds the full coordinate toolkit for the sphere — its equations, its sections, its tangent planes and the way two spheres meet — at the depth the most demanding engineering-entrance syllabi demand.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Spheres model planets, tanks, bubbles, atomic shells and satellite orbits; the tangent-plane condition is the mathematics of contact angles and of line-of-sight horizons; and the two-sphere intersection is the geometry behind trilateration — the way GPS receivers and underground surveys locate a point from distances alone.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'With centre C = (u, v, w) and radius r, the distance formula turns the definition directly into the centre-radius equation: the point P = (x, y, z) lies on the sphere exactly when its distance from C equals r, that is when (x − u)² + (y − v)² + (z − w)² = r². Squaring out and collecting terms gives the general form x² + y² + z² + 2gx + 2fy + 2hz + c = 0, where the centre reads off as (−g, −f, −h) and the radius satisfies r² = g² + f² + h² − c. The surface is a real sphere only when that quantity is positive; if it is zero the equation is a single point, and if negative there is no real point at all — the algebra survives even when the geometry does not, a fact examiners exploit relentlessly.',
      },
      {
        kind: 'formula',
        name: 'General equation of a sphere',
        latex: 'x^2 + y^2 + z^2 + 2gx + 2fy + 2hz + c = 0',
        meaning: 'Centre (−g, −f, −h); radius r with r² = g² + f² + h² − c. Recover it by completing the square in all three variables.',
      },
      {
        kind: 'para',
        text: 'Because a sphere is a quadric — its equation is of the second degree — Smith\u2019s general theory of second-degree surfaces applies. His first structural result is that every plane section of a quadric is a conic; for the sphere, where all directions are equivalent, that conic is always a circle. Slice the sphere x² + y² + z² = a² with the plane z = k. Substituting gives x² + y² = a² − k², a circle of radius √(a² − k²) centred on the axis. Two regimes matter: when the plane passes through the centre (k = 0) the slice is a great circle of maximum radius a — the circle the Earth-geometry lesson uses for navigation — and any other plane cuts a small circle whose radius shrinks as the plane retreates, collapsing to a point when |k| = a: the tangent case.',
      },
      {
        kind: 'para',
        text: 'Tangency deserves the full treatment. For the sphere x² + y² + z² = a² centred at the origin and a point T = (x₁, y₁, z₁) on it, Smith\u2019s tangent-plane construction for a central conicoid specialises beautifully: the tangent plane is x x₁ + y y₁ + z z₁ = a². The geometry explains the algebra — the radius vector OT = (x₁, y₁, z₁) is normal to this plane, because the plane\u2019s coefficients are exactly the coordinates of T, and a sphere\u2019s radius always meets its tangent plane at right angles. Checking: T itself satisfies the plane equation since x₁² + y₁² + z₁² = a², and the perpendicular distance from the origin to the plane is a²/√(x₁² + y₁² + z₁²) = a²/a = a — exactly the radius, as tangency demands.',
      },
      {
        kind: 'formula',
        name: 'Tangent plane and tangent length',
        latex: 'xx_1 + yy_1 + zz_1 = a^2 \\qquad\\text{and}\\qquad L = \\sqrt{S_1}',
        meaning: 'Left: tangent plane at (x₁, y₁, z₁) on x² + y² + z² = a². Right: the length L of the tangent from an external point P, where S₁ is what the sphere\u2019s left-hand side takes at P (the power of the point).',
      },
      {
        kind: 'para',
        text: 'The tangency condition for an arbitrary plane lx + my + nz = p and a sphere of centre C and radius r is the single sentence: the perpendicular distance from C to the plane equals r. Conversely, a line is tangent to the sphere when the perpendicular distance from the centre to the line equals the radius. For an external point P at distance d from the centre, the two tangent segments from P to the sphere have equal length √(d² − r²) — the right triangle formed by the centre, P and any point of tangency is the whole proof, and the quantity d² − r² is the sphere\u2019s power of the point, the three-dimensional sibling of the circle\u2019s tangent-secant theorem.',
      },
      {
        kind: 'para',
        text: 'Finally, how do two spheres meet? Subtract their general equations: the quadratic terms x² + y² + z² cancel identically, leaving a first-degree equation — a plane. All points common to both spheres therefore lie in this plane, and since each sphere cuts the plane in a circle, the intersection of two spheres is a circle lying in the plane obtained by subtracting the equations (empty or a single point in the degenerate limiting cases). That plane is called the radical plane, and the same subtraction trick shows a family of spheres through a common circle — write S + λS\u2032 = 0 for the sphere through the intersection of spheres S = 0 and S\u2032 = 0, the exact analogue of the family of circles through two points.',
      },
      { kind: 'heading', text: 'Worked Examples' },
      {
        kind: 'example',
        title: 'Worked Example — reading a general equation and testing a tangent plane',
        steps: [
          'Given x² + y² + z² − 4x + 2y − 6z + 5 = 0, complete the square in each variable: (x − 2)² + (y + 1)² + (z − 3)² = −5 + 4 + 1 + 9 = 9.',
          'Read off the geometry: centre C = (2, −1, 3) and radius r = 3.',
          'Now test the plane 2x − 2y + z = 12 for tangency. The perpendicular distance from C to the plane is |2(2) − 2(−1) + 3 − 12| / √(4 + 4 + 1) = |4 + 2 + 3 − 12| / 3 = 3/3 = 1.',
          'Compare with the radius: 1 < 3, so the plane cuts the sphere in a small circle — it is NOT tangent. For tangency the distance would have to equal 3 exactly.',
          'For contrast take the plane x + 2y + 2z = 21: distance from C is |2 + (−2) + 6 − 21|/3 = 15/3 = 5 ≠ 3, also a cutting plane; while a plane like x − y + 3z = 11 gives distance |2 + 1 + 9 − 11|/√11 = 1/√11, again interior. The test is always one distance computation against r.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — tangent length and a two-sphere intersection',
        steps: [
          'Tangent length: from P = (6, 8, 0) to the sphere x² + y² + z² = 25 (centre O, radius 5). First confirm P is outside: OP² = 36 + 64 + 0 = 100 > 25.',
          'The power of P is S₁ = 100 − 25 = 75, so each tangent segment from P has length L = √75 = 5√3 — and both tangents from P share it, by the symmetry of the right triangle O–P–T.',
          'Intersection: take S = x² + y² + z² − 9 = 0 and S\u2032 = x² + y² + z² − 4x + 2y − 2z + 1 = 0. Subtracting, the quadratic terms cancel: −4x + 2y − 2z + 1 + 9 = 0, i.e. 2x − y + z = 5.',
          'Every common point lies in the plane 2x − y + z = 5, and each sphere cuts that plane in a circle — so the two spheres intersect in the circle lying in this plane.',
          'Every sphere through the same circle belongs to the family S + λS\u2032 = 0 — infinitely many spheres sharing one circle, the spatial twin of the coaxial circle family.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Trilateration and GPS: each satellite distance defines a sphere around the receiver; intersecting three spheres narrows position to two points, and a fourth resolves time — the two-sphere circle is the working geometry',
          'Horizon distance: for a viewer at height h above a sphere of radius R, the horizon sits at distance √((R+h)² − R²) ≈ √(2Rh) — the tangent-length formula in navigation disguise',
          'Computer graphics and CAD: spheres are the primitive of collision detection, and the plane-tangency distance test is the cheapest exact collision check in the toolbox',
          'Crystallography and chemistry: packing of equal spheres, the contact geometry of atoms in a lattice, and ionic radii are all tangent-sphere problems',
          'Geodesy: the great-circle/small-circle distinction is the rigorous core of longitude, flight paths and time zones — deferred to the Earth-geometry lesson for the navigational detail',
        ],
      },
      { kind: 'heading', text: 'Pitfalls and Exam Traps' },
      {
        kind: 'list',
        items: [
          'Forgetting that r² = g² + f² + h² − c can be negative: always state the reality condition before answering anything about the surface',
          'Using the tangent-plane formula xx₁ + yy₁ + zz₁ = a² when the sphere is NOT centred at the origin — shift the centre first, or the formula silently gives a wrong plane',
          'Confusing a small circle with a great circle: only centre-passing sections have the full radius a',
          'Testing a plane against the wrong centre — read the centre from the completed-square form, not from the raw coefficients, which carry the factor 2',
          'Assuming two spheres always intersect in a circle: they can also touch at one point or miss entirely; the radical plane still exists but is empty of real common points',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Great circle', def: 'A plane section through the sphere\u2019s centre; the largest circle on the surface, radius equal to the sphere\u2019s.' },
          { term: 'Small circle', def: 'Any other plane section; radius √(a² − k²) where k is the plane\u2019s distance from the centre.' },
          { term: 'Tangent plane', def: 'The unique plane meeting the sphere at exactly one point; its normal is the radius to that point.' },
          { term: 'Power of a point', def: 'S₁ = d² − r², the squared tangent length from an external point at distance d from the centre.' },
          { term: 'Radical plane', def: 'The plane containing the common circle of two spheres, obtained by subtracting their equations.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The equation x² + y² + z² − 6x + 8y + 2z − 10 = 0 represents a sphere with centre and radius:',
            options: [
              'centre (6, −8, −2), radius 10',
              'centre (−3, 4, 1), radius 6',
              'centre (3, −4, −1), radius 6',
              'centre (3, −4, −1), radius 36',
            ],
            answer: 2,
            explain: 'Completing squares: (x−3)² + (y+4)² + (z+1)² = 10 + 9 + 16 + 1 = 36 = 6². Centre (3, −4, −1), radius 6 — the centre coordinates flip the signs of the half-coefficients, and the radius is the square root.',
          },
          {
            q: 'The tangent plane to x² + y² + z² = 9 at the point (1, 2, 2) is:',
            options: [
              'x + 2y + 2z = 9',
              'x + 2y + 2z = 3',
              '2x + y + 2z = 9',
              'x + y + z = 9',
            ],
            answer: 0,
            explain: 'The formula xx₁ + yy₁ + zz₁ = a² gives x + 2y + 2z = 9. Sanity checks: (1,2,2) lies on the sphere (1+4+4=9) and satisfies the plane (1+4+4=9); the plane\u2019s normal (1,2,2) is exactly the radius vector.',
          },
          {
            q: 'The plane 2x − 2y + z = 9 is tangent to the sphere x² + y² + z² = r². Then r equals:',
            options: [
              '9',
              '3',
              '1',
              '4.5',
            ],
            answer: 1,
            explain: 'Tangency means the distance from the centre (origin) to the plane equals r: |−9|/√(4+4+1) = 9/3 = 3. Always compute the normalising square root — it is where wrong options come from.',
          },
          {
            q: 'Two spheres S = 0 and S\u2032 = 0 intersect. Subtracting their equations produces a plane because:',
            options: [
              'the spheres have equal radii',
              'the second-degree terms x² + y² + z² cancel identically',
              'every plane cuts a sphere in a circle',
              'the centres coincide',
            ],
            answer: 1,
            explain: 'Both equations carry the same leading terms x² + y² + z² with unit coefficients, so subtraction kills all quadratic terms and leaves a linear equation — the radical plane containing the common circle.',
          },
        ],
      },
    ],
  },
]
