/**
 * Knowledge Universe — Cars, Navigation & the Outdoors — Chapter 02: Navigation & the Outdoors
 * 1 lesson · ~1,189 words
 * field: Navigation & Outdoors
 * legacy sources: everyday-practical.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Navigation & Outdoors]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 every-navigation-maps — How to Actually Read a Map and Find North
 */
import type { KnowledgeTopic } from '../../types'

export const carsNavigationOutdoorsCh02: KnowledgeTopic[] = [
  {
    id: 'every-navigation-maps',
    title: 'How to Actually Read a Map and Find North',
    domain: 'Everyday Knowledge',
    field: 'Navigation & Outdoors',
    branch: 'Everyday Skills',
    tier: 'core',
    concepts: [
      'Scale: what one centimeter really means',
      'Contour lines: the shape of the land',
      'North three ways: true, grid, and magnetic',
      'Orienting the map to the terrain',
      'Taking and following a bearing',
      'Handrails, catching features, and attack points',
      'When the phone dies: pace counting and dead reckoning',
    ],
    words: 1189,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'A map is a scale model of the world with an instruction manual hiding in its margins — and the phone that usually reads it for you has a battery. Navigation, the Everyday Skills discipline behind this topic, covers what the blue dot keeps quiet: how scale converts paper distance into real distance, how contour lines draw hills you can see in your head, and how a compass makes sky, map, and terrain finally agree. This is the craft of never being lost.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Navigation is a perishable skill: GPS atrophies it one commute at a time. A paper map, a compass, and an hour of practice restore the fallback that works in fog, dead batteries, and canyons — and they sharpen your sense of direction even when the phone is on.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every map declares its compression ratio. A scale of 1:25,000 means one unit on paper equals 25,000 on the ground, so a centimeter is 250 meters. The ratio is the map\'s DNA: bigger numbers mean smaller scale — 1:100,000 covers more country in less detail — and the printed scale bar lets you measure curvy distances with the edge of a scrap of paper or a length of string.',
      },
      {
        kind: 'para',
        text: 'Contour lines join points of equal height, spaced at a fixed interval — often 10 meters on hiking maps. Read the spacing as slope: tight lines are steep walls, wide lines are gentle ground, and a nest of closed rings with no outlet is a summit or a depression. Where a contour crosses a valley it forms a V, and the V points uphill — the fastest way to find water or avoid a bog.',
      },
      {
        kind: 'para',
        text: 'There are three norths. True north is the geographic pole where meridians converge; grid north is the direction of the map\'s vertical grid lines; magnetic north is where the needle actually points, and it drifts. The angular gap between true and magnetic, called declination, is printed in the map\'s margin and changes with place and date — the difference between a two-minute detour and a two-hour one.',
      },
      {
        kind: 'para',
        text: 'An unoriented map is a puzzle; an oriented one is a window. Set the compass for local declination, lay it on the map, and rotate both together until the needle settles in its box — now map-north points north and every feature sits where you would have to look to find it. Lining up two visible landmarks along the folded map does the same job with no instruments at all.',
      },
      {
        kind: 'para',
        text: 'A bearing is a direction stated in compass degrees — 045 for northeast, 305 for northwest. Point the compass at a target, turn the dial until the needle boxes, and the index line reads the bearing; walk while keeping the needle boxed and you travel a straight line through fog or forest. The same skill in reverse — drawing a line at a known bearing from a known feature — locates you on the map.',
      },
      {
        kind: 'para',
        text: 'Experts navigate by features, not faith. A handrail is a linear feature kept alongside — a ridge, a creek, a power line — that walks you toward the goal. A catching feature is an unmistakable signal beyond the target that shouts you went past: a river, a road, a trail junction. An attack point is a large, findable landmark near a small target, shrinking the precision leg to minutes.',
      },
      {
        kind: 'para',
        text: 'Dead reckoning is keeping position by direction, distance, and time: bearings taken, paces counted — about 62 double-steps per 100 meters for many adults — and the running plot marked on the map. It is how sailors crossed oceans, and it is how you cross a featureless plateau. Marking your position at each known point is what turns a long walk into navigation.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Ground distance from map distance',
        latex: 'D = d \\times M',
        meaning: 'Distance on the ground D equals map distance d times the scale denominator M, with unit conversion — at 1:25,000, one centimeter is 250 meters.',
      },
      {
        kind: 'formula',
        name: 'Correcting magnetic bearings with declination',
        latex: 'B_{true} = B_{mag} + \\delta',
        meaning: 'True bearing equals magnetic bearing plus local declination δ, positive to the east — the margin value, checked for its year.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: on a 1:25,000 map, the trailhead-to-lake line measures 7.2 cm; local declination is 12° E and the map bearing to the lake reads 305° true — how far is it, and what compass bearing do you walk?',
          'Recall the governing idea: scale converts measured paper distance, and declination converts between true and magnetic bearings.',
          'Apply: distance = 7.2 cm × 25,000 = 180,000 cm = 1.8 km; the magnetic bearing is 305 − 12 = 293°, since east declination subtracts when converting true to magnetic.',
          'State the result: walk 293° on the compass for about 1.8 km — roughly 25–30 minutes at hiking pace — using the creek as a handrail and the road beyond the lake as the catching feature.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Hikers plan routes by contour spacing, grading climbs before setting out.',
          'Search-and-rescue teams use attack points and handrails to comb terrain systematically.',
          'Orienteering races turn bearings, pace counting, and catching features into a timed sport.',
          'Pilots and sailors still drill chart, compass, and dead-reckoning skills as the backup layer.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The classic error is ignoring declination — a 12° oversight drifts you more than 200 meters off course per kilometer walked, enough to miss a summit in fog. Reading contours upside down sends camps to the wrong side of ridgelines: the V points uphill, not down. And trusting a single GPS dot without a map to catch its errors leaves you navigating a battery percentage.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Scale', def: 'The map\'s compression ratio, e.g. 1:25,000 — one paper unit per 25,000 ground units.' },
          { term: 'Contour interval', def: 'The fixed height difference between adjacent contour lines.' },
          { term: 'Declination', def: 'The angle between true north and magnetic north at a place and time.' },
          { term: 'Bearing', def: 'A travel direction in compass degrees, 000 through 360.' },
          { term: 'Handrail', def: 'A linear feature followed alongside as a guide to a destination.' },
          { term: 'Catching feature', def: 'An obvious landmark beyond a target that reveals an overshoot.' },
          { term: 'Dead reckoning', def: 'Tracking position from a known start using bearing, speed, and time.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'On a 1:50,000 map, 4 cm on paper represents:',
            options: ['50 m', '2 km', '200 m', '20 km'],
            answer: 1,
            explain: '4 × 50,000 cm = 200,000 cm = 2 km on the ground.',
          },
          {
            q: 'Widely spaced contour lines indicate:',
            options: ['A cliff', 'Gentle terrain', 'A summit', 'A depression'],
            answer: 1,
            explain: 'Height changes slowly across horizontal distance — gentle ground. Tight lines mean steep.',
          },
          {
            q: 'With 10° E declination, a true bearing of 090 corresponds to a magnetic bearing of:',
            options: ['100°', '090°', '080°', '070°'],
            answer: 2,
            explain: 'Magnetic = true − east declination: 090 − 10 = 080° on the compass dial.',
          },
          {
            q: 'A "catching feature" is:',
            options: ['A feature you aim at directly', 'An unmistakable landmark beyond your target that reveals an overshoot', 'A rest point on a ridge', 'The contour interval of a map'],
            answer: 1,
            explain: 'It catches the mistake — a road or river you cannot miss if you walk too far.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'From here: night navigation by stars, weather reading for the outdoors, and the geography of coordinates — latitude, longitude, and how GPS actually triangulates your position.',
        tone: 'path',
      },
    ],
  },
]
