/**
 * Knowledge Universe — Construction, Geomatics & Underground Engineering — Chapter 01: Geomatics & Surveying
 * 1 lesson · ~1,890 words
 * field: Civil Engineering
 * legacy sources: x19-civil-core.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Geomatics Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 civ-surveying-geomatics — Surveying and Geomatics: Traverses, Leveling, Curves, GIS and GNSS
 */
import type { KnowledgeTopic } from '../../types'

export const constructionGeomaticsCh01: KnowledgeTopic[] = [
  {
    id: 'civ-surveying-geomatics',
    title: 'Surveying and Geomatics: Traverses, Leveling, Curves, GIS and GNSS',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Geomatics Engineering',
    tier: 'intermediate',
    concepts: [
      'Survey principles: whole to part, control and detail',
      'Bearings, theodolites and total stations',
      'Leveling: reduced levels, HI and rise-fall methods',
      'Traverse computation: latitudes, departures, Bowditch rule',
      'Simple, transition and vertical curves',
      'Geographic Information Systems: raster and vector data',
      'Global Navigation Satellite Systems and DGPS',
    ],
    words: 1890,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Every structure begins as coordinates. Surveying is the discipline that produces them — measuring angles and distances on a curved earth, adjusting their small contradictions honestly, and fixing positions precise enough that a bridge\'s two halves meet mid-span. Geomatics is its modern extension: satellite positioning, digital mapping and geographic information systems that store not just points but the attributes and topologies a whole city\'s engineering runs on. This lesson covers the classical core — bearings and leveling, traverse computation, curve setting-out — and the modern layer, from raster-versus-vector data models to the satellite geometry behind GNSS accuracy. It is the most error-analysis-driven block of the civil syllabus: most exam questions ask not where a point is, but how much you should distrust where you think it is.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Surveying questions in GATE CE are short and mechanical — a Bowditch correction, a rise-fall table check, a tangent length — and the GIS/GNSS block is almost pure vocabulary. Together they are among the cheapest marks in the paper, and the concepts (error of closure, least squares intuition) reappear in every measurement discipline.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Whole to part', def: 'The governing principle of survey practice: establish a framework of high-precision control points first, then fill in detail within it — so errors stay local and detected, never accumulated across a project.' },
          { term: 'Reduced level (RL)', def: 'A point\'s height above datum (mean sea level). Leveling computes RLs either by the height-of-instrument method or the rise-and-fall method; the rise-fall table\'s two arithmetic checks (ΣBS − ΣFS = Σrise − Σfall = last RL − first RL) make it the exam\'s favourite.' },
          { term: 'Latitude and departure', def: 'The projection of a traverse line onto the north-south axis (L cos θ) and the east-west axis (L sin θ). In a closed traverse both must sum to zero; their residuals define the error of closure that adjustment distributes.' },
          { term: 'Bowditch rule', def: 'The compass-rule adjustment for a closed traverse: correct each latitude or departure in proportion to that line\'s share of the total perimeter — the standard correction when angles and distances are equally trusted.' },
          { term: 'Vector and raster', def: 'The two GIS data models: vector stores discrete geometry (points, lines, polygons) with attribute tables and topology; raster tiles space into grid cells — imagery and continuous surfaces. Overlays, buffers and network analyses combine them.' },
          { term: 'DGPS', def: 'Differential GNSS: a fixed base station at a known position broadcasts corrections for the satellite errors it observes, cutting metre-level positioning to centimetres — and real-time kinematic (RTK) does it instantly for stakeout and machine control.' },
        ],
      },
      {
        kind: 'para',
        text: 'Classical surveying rests on two ideas: control and redundancy. The framework is laid by triangulation or traverse — a chain of stations whose angles (by theodolite or total station) and distances (by EDM) fix relative position — and all detail survey hangs within it. Compass work introduces the bearing system: whole-circle bearings from north, reduced to quadrantal, corrected for magnetic declination and for local attraction (the magnetism of nearby iron that corrupts individual stations — detected when fore and back bearings disagree by more than the declination). Leveling then supplies the vertical dimension: the level\'s horizontal line of sight reads staffs on bench marks and new points, and reduced levels accumulate by height of instrument or rise and fall. Curvature and refraction bend the geometry slightly — a combined correction of 0.0673 d² metres for distance d in kilometres — negligible across a building site, decisive across a reservoir. Reciprocal leveling across a river cancels the collimation error by observing from both banks; tacheometry (the stadia hairs, d = ks + c) captures distances and elevations without taping, and the modern total station fuses theodolite, EDM and computer into an instrument that reports coordinates directly.',
      },
      {
        kind: 'para',
        text: 'The traverse is the exam\'s computational centrepiece. A closed traverse returns to its start, and its mathematics is a bookkeeping of contradiction: each line\'s length and bearing project into a latitude (L cos θ) and a departure (L sin θ), and since the figure closes, both must sum to zero. They never quite do — angular misclosure is first distributed among the measured angles, then the linear error of closure (√(ΣL² + ΣD²)) is spread over the lines by the Bowditch rule in proportion to length, or by the transit rule when angles are the trusted observations. Corrected coordinates follow, and area comes from the coordinate method — the cross-multiplication sum halved — or the DMD method. Every step is checkable, which is precisely why examiners love it: a rise-fall table that fails its two consistency checks or a traverse whose closure does not match the stated adjustments is a wrong answer you can detect before submitting.',
      },
      {
        kind: 'formula',
        name: 'Circular curve geometry',
        latex: 'T = R\\tan\\!\\left(\\tfrac{\\Delta}{2}\\right),\\quad L = R\\,\\Delta_{\\text{rad}}',
        meaning: 'Tangent length T and curve length L of a simple circular curve of radius R and deflection angle Δ — the numbers the setting-out process needs first, followed by Rankine\'s deflection angles pegged from the tangent point.',
      },
      {
        kind: 'para',
        text: 'Curves carry the alignment\'s geometry onto the ground. A simple circular curve joins two tangents at radius R: tangent length R tan(Δ/2) from the intersection point, curve length RΔ in radians, chainages of the tangent points from the through-chainage — and setting-out by Rankine\'s deflection-angle method swings the theodolite by cumulated deflections at chord intervals (the two-theodolite method as the obstruction fallback). The transition curve — a spiral whose radius falls from infinity to R — is inserted at each end so centripetal acceleration grows with the vehicle rather than jumping; its length follows from rate of change of centrifugal acceleration or superelevation rotation, and its shift s = L²/24R tells the circular arc how far to move inward. Vertical curves are parabolic, not circular: crest curves lengthened for sight distance, valley curves for headlight sight distance and passenger comfort, both from the same parabola-through-gradient-change algebra. Together with the highway lesson\'s superelevation design, this is the complete toolkit for turning a paper alignment into pegs in the ground.',
      },
      {
        kind: 'para',
        text: 'Geomatics re-imagines all of this digitally. A Geographic Information System stores the world in two complementary models — vector geometry (points, lines, polygons) carrying attribute tables and topology, and rasters gridding space into cells for imagery and continuous surfaces — and analyses them by overlay (combine land use with soil and slope), buffering (distances from a river, service areas of a hospital), network analysis, and digital elevation models whose contours, slopes and viewsheds automate what contour surveys did by hand. Projections matter because the earth is curved and screens are flat: UTM zones and datum choice are the coordinate-system plumbing beneath every map. GNSS then makes positions flow from space: a constellation (GPS\'s 24-plus, and India\'s regional NavIC of seven) broadcasts precisely timed signals; a receiver\'s pseudo-ranges to four or more satellites solve simultaneously for position and clock error. The error budget — ionosphere and troposphere delays, ephemeris and clock errors, multipath reflections, and the satellite-geometry dilution GDOP — limits single receivers to metres; differential corrections from a base station over known coordinates cut it to centimetres, and RTK delivers them in real time. Land surveying, machine-guided earthwork, cadastral mapping and disaster response now all run on this chain: satellites, corrections, GIS — the survey principles of 1800 executed by the technology of 2020.',
      },
      {
        kind: 'para',
        text: 'Error theory is what makes all measurement defensible, and it deserves its own statement. Gross errors are blunders — a staff read on the wrong mark — and are eliminated by checks, never adjusted; systematic errors follow a law (curvature and refraction, tape temperature, collimation) and are corrected by model; random errors are the irreducible residue, equally likely either side of truth, and they obey the normal distribution that least-squares adjustment exploits — weighting observations by the inverse of their variance and distributing residuals by the most-probable values. Precision is not accuracy: a survey can be consistently precise and still sit on a wrong datum, which is why independent checks (fore and back bearings, rise-fall sums, closure of figures) are the discipline\'s real method. Remote sensing completes the geomatics picture from above: satellites record reflected or emitted radiance in spectral bands, resolution arriving in four guises — spatial (pixel size), spectral (band width), radiometric (bit depth), temporal (revisit) — and the data feed land-use classification, crop and water assessment, and change detection, with indices like NDVI (near-infrared minus red, over their sum) turning raw radiance into vegetation vigour. Photogrammetry from aerial or drone imagery adds controllable scale and three-dimensional measurement through stereopairs. Between GNSS positioning, remote-sensing rasters and GIS vector analysis, the modern survey office assembles the map from three independent streams — and reconciles them with the same error-theory habits the theodolite demanded.',
      },
      {
        kind: 'example',
        title: 'Checking a three-line traverse before adjusting it',
        steps: [
          'Lines AB (200 m, 30°), BC (150 m, 110°), CA (250 m, 250°): latitudes 173.2 − 51.3 − 85.5 ≈ 36.4... compute carefully: cos 30° = 0.866 → 173.2; cos 110° = −0.342 → −51.3; cos 250° = −0.342 → −85.5; sum ≈ 36.4 — not zero.',
          'Departures: 100.0, 141.0 (sin 110°), −234.9 (sin 250° = −0.940) → sum ≈ 6.1. Both sums should be zero for a closed figure — the misclosure (e) = √(36.4² + 6.1²) ≈ 36.9 m on 600 m of traverse is huge — a signal that the data (not the adjustment) is at fault.',
          'Lesson: adjustment rules (Bowditch) distribute small residuals; a closure this large indicates an angular or blunder error — find it first. The habit of computing e before adjusting is the examinable one.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          { q: '"Work from whole to part" exists to…', options: ['finish faster', 'prevent accumulation of errors across the survey by fixing control first', 'reduce instrument cost', 'satisfy legal rules'], answer: 1, explain: 'High-precision control frameworks localise errors; working part-to-whole lets them accumulate unbounded.' },
          { q: 'In a closed traverse, latitudes and departures must sum to…', options: ['the perimeter', 'zero', 'the area', '360°'], answer: 1, explain: 'Closure means the figure returns to its start — the north-south and east-west projections must each cancel.' },
          { q: 'The Bowditch (compass) rule distributes linear misclosure in proportion to each line\'s…', options: ['bearing', 'length', 'latitude only', 'order of measurement'], answer: 1, explain: 'Corrections scale with length — the assumption that all measurements are comparably reliable.' },
          { q: 'A GIS overlay analysis typically combines…', options: ['two attribute tables only', 'spatial layers such as land use, soil and slope to find intersections', 'satellite orbits', 'contour intervals'], answer: 1, explain: 'Overlay is the core vector operation: intersect layers to answer multi-criteria questions.' },
          { q: 'DGPS improves on standalone GNSS by…', options: ['adding satellites', 'broadcasting corrections from a base station at a known position', 'using radar', 'shortening wavelengths'], answer: 1, explain: 'The base station observes the same satellite errors from a surveyed point and transmits corrections — metres become centimetres.' },
        ] },
      {
        kind: 'para',
        text: 'Position, height and the maps that hold them are the substrate every other civil lesson stands on: the highway lesson\'s curves are staked out by Rankine\'s method here; the concrete and water lessons\' structures are located by traverse and GNSS; and the GIS layer is where catchments, command areas and land parcels — the domains of the hydrology and water-supply lessons — live as analysable data. Error analysis, this block\'s deepest habit, is the same honesty the flood-frequency and limit-state lessons apply in their own currencies.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: trigonometry and the basic mechanics of angles from the mathematics lessons. Follow with the highway lesson for the curves these methods stake out, and the hydrology lesson for the catchments GIS now maps. Standard readings: B.C. Punmia\'s Surveying volumes, Kang-Tsung Chang\'s Introduction to Geographic Information Systems, and the GATE CE geomatics syllabus.',
      },
    ],
  },
]
