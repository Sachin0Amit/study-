/**
 * Knowledge Universe — Mathematics — Chapter 04: Geometry & Measurement
 * 3 lessons · ~5,397 words
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
      'Latitude and longitude as the Earth\u2019s coordinate grid',
      'One degree of arc \u2248 111 km; the nautical mile',
      'Great circles as shortest routes',
      'Distance shrinks with cos(latitude) along a parallel',
      'Time zones: 15\u00b0 per hour from UTC',
      'The International Date Line',
    ],
    words: 1338,
    readMins: 7,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The Earth is a ball of rock roughly 40,000 kilometres around, and every point on it has an address made of two angles. Latitude measures how far north or south of the equator a place sits, from 0\u00b0 at the equator to 90\u00b0 at each pole; longitude measures how far east or west it sits of the prime meridian through Greenwich, from 0\u00b0 to 180\u00b0 each way. Together the pair locates any spot on the planet — and, because angles on a known sphere convert directly into distances and times, this coordinate grid quietly runs aviation, shipping, GPS navigation and the world\u2019s clocks.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Airline routes, container shipping, satellite positioning and international flight scheduling are all applied spherical geometry. The same arithmetic answers exam staples: distances between cities, arrival times across time zones and the odd behaviour of routes that look bent on a flat map but are shortest on the globe.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The grid is drawn from two families of circles. Parallels of latitude run east-west and stay parallel to the equator; only the equator itself is a great circle — the others shrink toward the poles. Meridians of longitude run pole to pole, all of them great circles, and any meridian paired with its opposite meridian forms a full great circle through both poles. Because a full circle contains 360 degrees and the Earth turns once in 24 hours, the planet spins through 15 degrees of longitude every hour — which is exactly why the world\u2019s time zones are, on average, 15 degrees wide.',
      },
      {
        kind: 'para',
        text: 'Angles become distances through the sphere\u2019s size. The equatorial circumference is about 40,075 kilometres, so one degree of arc along any great circle is about 40,075 \u00f7 360 \u2248 111 kilometres (navigation rounds it: one minute of arc, a sixtieth of a degree, is defined as the nautical mile, 1.852 km). Along a meridian this is exact enough for everyday work: two places 10 degrees of latitude apart are about 1,110 kilometres apart. Along a parallel, however, the ground shrinks as you approach the poles, because the circle you are walking is smaller — distance per degree of longitude scales with the cosine of the latitude, reaching 111 cos(\u03c6) kilometres per degree. At Brisbane\u2019s latitude of about 27.5\u00b0S, one degree of longitude is only about 98 kilometres; at 60\u00b0N it is barely 55.',
      },
      {
        kind: 'para',
        text: 'The shortest route between two points on a sphere is the arc of the great circle through them — not the straight line a flat map suggests, and not the parallel that "looks level". This is why flights from, say, London to Singapore arc far toward the pole on a Mercator map: on the globe, that curve is the straightest path. Computing such a great-circle distance between two arbitrary points uses the spherical law of cosines or the equivalent haversine formula from the two cities\u2019 latitudes and longitudes; the spherical geometry chapter\u2019s trigonometry does the rest. The key qualitative rule survives every formula: any route that is not a great-circle arc is longer than it needs to be.',
      },
      {
        kind: 'para',
        text: 'Time zones convert longitude into hours. Local standard time equals UTC plus an offset of one hour for every 15 degrees east (ahead) or west (behind) of the Greenwich meridian — so Perth at 116\u00b0E keeps UTC+8, Brisbane at 153\u00b0E keeps UTC+10, and when it is noon UTC it is already 10 p.m. in Brisbane but only 8 p.m. in Perth. Political boundaries bend the zone lines for convenience — China keeps one zone for the whole country — and some jurisdictions shift for daylight saving in summer, so real offsets must be checked, not just derived. The International Date Line, drawn near 180\u00b0 through the empty Pacific, marks the calendar seam: crossing it westbound adds a day, eastbound subtracts one, which is why flying Sydney to Los Angeles lands "before" it left.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Distance along a meridian',
        latex: 'd \\approx 111\\,\\text{km} \\times \\Delta\\phi',
        meaning: 'Two points \u0394\u03c6 degrees of latitude apart on (roughly) the same meridian are 111 km per degree apart.',
      },
      {
        kind: 'formula',
        name: 'Distance per degree along a parallel',
        latex: 'd_{\\text{per deg}} \\approx 111 \\cos(\\varphi)\\,\\text{km}',
        meaning: 'At latitude \u03c6, one degree of longitude spans 111 cos \u03c6 kilometres — shrinking to zero at the poles.',
      },
      {
        kind: 'formula',
        name: 'Time-zone offset',
        latex: '\\Delta t = \\frac{\\Delta\\lambda}{15\\degree}\\ \\text{hours}',
        meaning: 'The time difference between two standard-zone locations equals their longitude difference divided by 15 degrees per hour.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Problem: Townsville sits at about 19.3\u00b0S, 146.8\u00b0E; Mount Isa at about 20.7\u00b0S, 139.5\u00b0E. Estimate the east-west separation along their shared latitude.',
          'Longitude gap: 146.8 \u2212 139.5 = 7.3 degrees. Average latitude \u2248 20\u00b0S.',
          'Kilometres per degree of longitude at 20\u00b0S: 111 \u00d7 cos 20\u00b0 \u2248 111 \u00d7 0.940 \u2248 104 km.',
          'Distance: 7.3 \u00d7 104 \u2248 760 kilometres — and the time difference with UTC stays fixed all along: both cities run UTC+10, so 12:00 UTC is 22:00 local in each.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Flight planning: airlines file great-circle routes that look bowed on flat maps but minimise fuel and time',
          'GPS receivers reporting position as decimal degrees to six places — about 0.1 metre of precision',
          'Broadcast and meeting scheduling across UTC offsets, with daylight-saving exceptions checked against tables',
          'Marine charts dividing the frame into degrees and minutes, with distances measured in nautical miles against the latitude scale',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Latitude comes first in most written coordinates (Brisbane 27.5\u00b0S, 153.0\u00b0E) — swapping the pair puts you in the ocean. The 111 km rule applies to degrees along a great circle, not along a parallel: forgetting the cosine factor overestimates east-west distances near the poles. Time offsets are zone-relative, not longitude-derived, where politics overrides geometry, and daylight saving silently shifts half a continent. Crossing the date line changes the date, not just the hour.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Latitude', def: 'Angular distance north or south of the equator, 0\u00b0 to 90\u00b0.' },
          { term: 'Longitude', def: 'Angular distance east or west of the Greenwich prime meridian, 0\u00b0 to 180\u00b0.' },
          { term: 'Great circle', def: 'Any circle on the sphere whose centre is the Earth\u2019s centre; its arcs are the shortest surface routes.' },
          { term: 'Nautical mile', def: 'One minute of arc along a great circle, 1.852 km by definition.' },
          { term: 'UTC', def: 'Coordinated Universal Time — the reference clock from which all time-zone offsets are counted.' },
          { term: 'International Date Line', def: 'The calendar boundary near 180\u00b0 longitude; crossing it changes the date by one day.' },
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
            explain: 'One degree along a great circle is about 111 km, so 5 degrees \u2248 555 km.',
          },
          {
            q: 'At 60\u00b0N latitude, one degree of longitude spans roughly:',
            options: ['19 km', '55 km', '96 km', '111 km'],
            answer: 1,
            explain: '111 cos 60\u00b0 = 111 \u00d7 0.5 = 55.5 km — parallels shrink toward the poles.',
          },
          {
            q: 'Perth runs UTC+8 and Brisbane UTC+10. When a Perth office opens at 9:00 a.m. local time, it is already:',
            options: ['7:00 a.m. in Brisbane', '11:00 a.m. in Brisbane', '9:00 a.m. in Brisbane', '1:00 p.m. in Brisbane'],
            answer: 1,
            explain: 'Brisbane is two hours ahead of Perth, so 9:00 + 2 = 11:00 a.m. local Brisbane time.',
          },
          {
            q: 'A plane crosses the International Date Line flying westbound from Honolulu to Auckland. The calendar:',
            options: ['jumps back one day', 'jumps forward one day', 'changes by one hour per 15 degrees only', 'does not change at all'],
            answer: 1,
            explain: 'Westward crossing of the date line adds a day — eastbound subtracts one.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: planar mensuration in the Geometry & Measurement chapter for arc-length logic, and trigonometry for the cosine that shrinks the parallels. Follow with the navigation lesson in Everyday Life Skills for compass-and-map fieldwork, and the vectors chapters for the full three-dimensional picture of the coordinate grid.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Coordinates: latitude first (0-90\u00b0 N/S from the equator), longitude second (0-180\u00b0 E/W from Greenwich).',
        'Scale: 1\u00b0 of great-circle arc \u2248 111 km; 1\u2032 = 1 nautical mile = 1.852 km.',
        'Parallels shrink: distance per degree of longitude = 111 cos(latitude) km.',
        'Shortest routes are great-circle arcs — the bent-looking lines on flat maps.',
        'Time: 15\u00b0 per hour around UTC; date line at \u2248180\u00b0 adds or drops a day; real zones bend for politics and daylight saving.',
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
