/**
 * Knowledge Universe — Communication Systems — Chapter 01: Satellite Positioning & Telecommunications
 * 1 lesson · ~901 words
 * field: Telecommunications
 * legacy sources: technology-applied.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Telecommunications]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 tech-gps-trilateration-time — How GPS Pinpoints You: Trilateration and Time
 */
import type { KnowledgeTopic } from '../../types'

export const communicationUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'tech-gps-trilateration-time',
    title: 'How GPS Pinpoints You: Trilateration and Time',
    domain: 'Technology & Applied Science',
    field: 'Telecommunications',
    branch: 'Satellite Positioning',
    tier: 'core',
    concepts: [
      'one-way ranging with synchronized clocks',
      'pseudorange and the receiver clock bias',
      'why four satellites, not three',
      'dilution of precision from sky geometry',
      'ephemeris and almanac data',
      'relativistic clock corrections',
      'augmentation and multi-constellation receivers',
    ],
    words: 901,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Your phone locates itself to within a few meters by listening to whispers from satellites 20,000 kilometers overhead. Each satellite broadcasts its identity, its position and its clock; your receiver times the signal\'s arrival, multiplies by the speed of light and draws a sphere around the satellite. Where the spheres intersect is where you are — plus one subtlety about clocks that changes everything.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Positioning underpins navigation, logistics, agriculture, timestamping of financial trades and emergency calls. Knowing the mechanism — and its error budget — explains when your blue dot is trustworthy and when it is guessing.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The system is one-way ranging: satellites transmit; receivers only listen. Because the signal carries a timestamp from an atomic clock, the receiver can compute time-of-flight without transmitting anything — which is why millions of receivers can share the same satellites silently.',
      },
      {
        kind: 'para',
        text: 'Multiplying flight time by light speed gives a range to each satellite. But the receiver\'s cheap quartz clock is off by microseconds, and every microsecond of error is 300 meters of range error. The measured ranges are therefore "pseudoranges" — true ranges plus an unknown receiver clock offset.',
      },
      {
        kind: 'para',
        text: 'The unknowns are your three position coordinates plus that clock offset: four unknowns, so four satellites is the minimum for a fix. This is the single most quotable fact of satellite navigation — the fourth satellite buys you time, literally.',
      },
      {
        kind: 'para',
        text: 'Geometry matters as much as measurement. Satellites clustered in one corner of the sky make sphere intersections shallow and errors inflate; satellites spread wide and high make intersections crisp. Dilution of precision quantifies the multiplier — the same receiver can be 3-meter accurate under open sky and 30-meter accurate in an urban canyon.',
      },
      {
        kind: 'para',
        text: 'Each satellite transmits its precise orbit (ephemeris) and a coarse map of the whole constellation (almanac). The receiver must also see the sky for long enough to decode this data — the real reason a cold-start fix takes a minute while a warm fix takes seconds.',
      },
      {
        kind: 'para',
        text: 'Relativity is not optional here: satellites move fast (special relativity slows their clocks) and sit higher in Earth\'s gravity well (general relativity speeds them up), netting about +38 microseconds per day. Without continuous correction, navigation errors would grow kilometers per day — the system works because engineers believed Einstein.',
      },
      {
        kind: 'para',
        text: 'Modern receivers track multiple constellations and frequencies, average away ionospheric delay, and blend inertial sensors, cell towers and Wi-Fi — your phone\'s blue dot is a committee decision, not a single satellite vote.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: why does a phone report ~5 m accuracy outdoors but ~50 m in a dense street canyon?',
          'Recall the governing idea: positioning error ≈ measurement error × dilution of precision; geometry and blockage inflate DOP.',
          'Apply it to the specifics: buildings mask low-elevation satellites, leaving only a narrow sky wedge; the sphere intersections become shallow, and reflected signals (multipath) further stretch the pseudoranges.',
          'State the result: the same receiver with the same clocks reports an order of magnitude worse accuracy — the fix is more visible sky, sensor fusion or waiting for better geometry.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Smartphone navigation fusing satellites with inertial and network positioning',
          'Precision agriculture steering tractors along centimeter-accurate repeatable paths',
          'Aviation approaches and drone geofencing with augmented integrity monitoring',
          'Financial timestamping of trades to resolve ordering disputes',
          'Fleet logistics and stolen-asset tracking at continental scale',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not credit your receiver alone with the accuracy — dilution of precision, sky view and multipath dominate the error budget. Do not assume the fix is instant after long shutdowns: the receiver must re-decode almanac and ephemeris before the spheres mean anything.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Pseudorange', def: 'Measured range contaminated by receiver clock offset.' },
          { term: 'Clock bias', def: 'The unknown receiver clock error solved as the fourth positioning unknown.' },
          { term: 'Dilution of precision', def: 'Geometric multiplier that scales ranging error into position error.' },
          { term: 'Ephemeris', def: 'Precise orbital parameters of an individual satellite.' },
          { term: 'Almanac', def: 'Coarse constellation-wide orbit data for satellite acquisition planning.' },
          { term: 'Multipath', def: 'Reflected signal paths that lengthen measured ranges.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'At least four satellites are needed for a 3D fix because:',
            options: [
              'One is always hidden',
              'The receiver clock bias is a fourth unknown',
              'Three spheres never intersect',
              'Relativity requires redundancy',
            ],
            answer: 1,
            explain: 'You solve for three coordinates plus clock offset; each satellite supplies one equation, so four are needed.',
          },
          {
            q: 'Pseudoranges differ from true ranges because of:',
            options: ['Atmospheric drag', 'Receiver clock offset', 'Satellite motion', 'Signal encryption'],
            answer: 1,
            explain: 'Receiver clock error injects the same bias into every measured range — solved rather than measured away.',
          },
          {
            q: 'Satellite clocks run net-fast relative to ground clocks mainly because:',
            options: [
              'They are newer',
              'They are atomic',
              'Weaker gravity outweighs their orbital speed',
              'They are frequently reset',
            ],
            answer: 2,
            explain: 'General relativity speeds clocks in weaker gravity by more than special relativity slows them by orbital motion — a net +38 μs per day.',
          },
          {
            q: 'Poor satellite geometry causes large:',
            options: ['Dilution of precision', 'Clock bias', 'Ephemeris errors', 'Almanac loss'],
            answer: 0,
            explain: 'Clustered satellites make shallow sphere intersections, multiplying ranging error into position error.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Comfort with speed-distance-time and 3D coordinates is enough to start. Next: least-squares estimation for the actual solver, then error sources in depth (ionosphere, multipath), then inertial navigation fusion.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Satellites broadcast time and orbit; receivers only listen.',
          'Flight time × light speed = range, contaminated by clock bias.',
          'Four unknowns — x, y, z and time — so four satellites minimum.',
          'Geometry (DOP) multiplies measurement error into position error.',
          'Relativity corrections are load-bearing, not decoration.',
        ],
      },
    ],
  },
]
