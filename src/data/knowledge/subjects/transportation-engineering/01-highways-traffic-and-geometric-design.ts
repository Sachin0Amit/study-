/**
 * Knowledge Universe — Transportation Engineering — Chapter 01: Highways, Traffic & Geometric Design
 * 2 lessons · ~3,144 words
 * field: Civil Engineering
 * legacy sources: x19-civil-core.ts, x48-all-subjects-split-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Transportation Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 eng-traffic-flow-theory — Traffic Flow Theory: The Fundamental Diagram, Shockwaves and Level of Service
 *   01.2 civ-highway-geometric-design — Highway Engineering: Alignment, Geometric Design and Pavements
 */
import type { KnowledgeTopic } from '../../types'

export const transportationEngineeringCh01: KnowledgeTopic[] = [
  {
    id: 'eng-traffic-flow-theory',
    title: 'Traffic Flow Theory: The Fundamental Diagram, Shockwaves and Level of Service',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Transportation Engineering',
    tier: 'intermediate',
    concepts: [
      'Traffic as a continuum: flow, density and speed',
      'The fundamental relation q = k · v',
      'Greenshields\' linear model and the parabolic flow-density curve',
      'Capacity and critical density',
      'Shockwaves: how queues form and dissolve (kinematic wave theory)',
      'Level of service A-F and the volume-capacity ratio',
      'Signal timing fundamentals: Webster\'s cycle',
    ],
    words: 1435,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'A road is a machine for converting space into movement, and traffic engineering is the discipline that keeps the machine from choking on itself. Its central insight is that a stream of vehicles can be treated like a fluid: not car by car, but as a continuum with measurable flow, density and speed. From that single abstraction — formalized in the 1950s by Lighthill and Whitham and, independently, Richards — comes everything in this lesson: why capacity exists, why jams appear from nowhere, and how engineers grade a road\'s performance with letter grades a motorist can feel.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Flow, capacity and level-of-service computations are the standard currency of every transport-planning report, highway appraisal and intersection redesign. The geometric side of road design — curves, sight distances, superelevation — is a separate craft covered in the highway engineering lesson; this lesson owns what happens once the geometry is built and the vehicles arrive.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Three Variables and the Fundamental Relation' },
      {
        kind: 'para',
        text: 'Traffic flow q is the number of vehicles passing a point per unit time, in vehicles per hour. Density k is the number of vehicles per unit length of road, in vehicles per kilometer. Space mean speed v is the average speed of those vehicles. The three are locked together by one identity:',
      },
      {
        kind: 'formula',
        name: 'Fundamental relation of traffic flow',
        latex: 'q = k \\, v',
        meaning:
          'Flow (veh/h) equals density (veh/km) times space mean speed (km/h). Two of the three variables determine the third; every traffic measurement is a way of fixing two and reading off the third.',
      },
      {
        kind: 'para',
        text: 'The identity is exact; the science lives in how v falls as k rises. Bruce Greenshields\' 1935 measurements suggested the simplest workable model: speed declines linearly with density, from free-flow speed v_f at zero density to zero at jam density k_j, where bumper sits against bumper. Substitute that line into the identity and flow becomes a downward-opening parabola in density: zero at both empty gridlock ends and maximal in between. The peak of the parabola is the road\'s capacity q_max, reached at the critical density k_c — roughly half the jam density in the linear model, with speed half the free-flow speed. Real measured curves are not perfectly symmetric — drivers leave longer gaps at high speed than the linear model predicts — but the parabola remains the mental model every traffic engineer carries.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Finding Capacity from Greenshields',
        steps: [
          'Set up: a freeway lane has free-flow speed 100 km/h and jam density 100 veh/km.',
          'Write the linear speed-density relation: v = 100 (1 - k/100).',
          'Substitute into q = k v: q = 100k - k² (veh/h, with k in veh/km).',
          'Maximize: dq/dk = 100 - 2k = 0, so critical density k_c = 50 veh/km.',
          'Compute capacity: q_max = 100(50) - 50² = 2,500 veh/h, at speed v = 50 km/h — the lane carries the most vehicles not when cars go fastest, but when they cruise at half speed halfway to gridlock.',
        ],
      },
      { kind: 'heading', text: 'Shockwaves: Where Jams Come From' },
      {
        kind: 'para',
        text: 'The parabola has two sides, and that is the root of all congestion. Below critical density, flow rises with density: more cars, more throughput. Above it, adding cars reduces flow — the road is congested, and each additional vehicle makes everyone slower. When demand pushes a segment past capacity, the excess must wait, and the boundary between flowing and queued traffic travels backward through the stream as a shockwave, visible as the brake-light wave that sweeps backward through a motorway queue. Kinematic wave theory computes the wave\'s speed from the slope of the line connecting the before and after states on the flow-density curve: states on the upper branch send waves forward, states past the peak send them backward, and a queue discharging at a green signal sends a recovery wave forward at its own characteristic speed.',
      },
      {
        kind: 'para',
        text: 'The everyday applications are direct. A red signal at an intersection creates a queue whose length grows at the difference between arrival and discharge flows; the green interval must discharge it plus serve new arrivals. A lane drop on a freeway acts as a bottleneck whose shockwave can propagate upstream for kilometers at around 15-20 km/h backward. An incident does the same, and removing it does not instantly heal the queue — the discharge wave must unwind through the stored vehicles, which is why jams persist after their cause is gone.',
      },
      {
        kind: 'formula',
        name: 'Shockwave speed (two states on the flow-density curve)',
        latex: 'w = \\frac{q_2 - q_1}{k_2 - k_1}',
        meaning:
          'The speed of the boundary between traffic states 1 and 2 is the slope of the chord joining them on the fundamental diagram. Negative w means the wave travels upstream against the traffic; positive w means downstream.',
      },
      { kind: 'heading', text: 'Capacity and Level of Service' },
      {
        kind: 'para',
        text: 'Capacity is a number; level of service translates it into experience. The Highway Capacity Manual grades a facility from LOS A — free flow, drivers unaffected by others — through the familiar stop-and-go of LOS E at capacity, to LOS F, forced breakdown with queues and unpredictable travel times. The grading differs by facility: on freeways it rides on density, at signalized intersections on average control delay per vehicle. The practical dial is the volume-capacity ratio v/c: at 0.5 the facility breathes; at 0.85 it is near saturation, with small incidents cascading; above 1.0 it is over capacity and breakdown is certain at peak. Planners therefore design not for the average day but for the design hour — typically the thirtieth-busiest hour of the year — accepting a few days of congestion rather than gold-plating the network.',
      },
      { kind: 'heading', text: 'Signals and the Cycle' },
      {
        kind: 'para',
        text: 'At intersections the capacity question becomes timing. A signal cycle splits time among conflicting movements, and each movement\'s capacity is its green share times the saturation flow — the rate at which queued vehicles discharge, roughly one car every two seconds per lane. F. V. Webster\'s classical analysis found the cycle length that minimizes total delay to be proportional to the square root of the lost time and flow terms, and — the counterintuitive result — quite short: long cycles make individual pedestrians and side-street users wait disproportionately, so the optimum balances main-street efficiency against everyone\'s worst wait. Pedestrian crossing time sets a hard minimum, and coordinated signal corridors let platoons ride a green wave at the design speed.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three traps. First, reading capacity off the wrong branch: maximum flow occurs at critical density, not at free-flow speed — a road "flowing freely" at 100 km/h may be carrying far less than its 2,500 veh/h best. Second, treating demand as a fixed number: induced demand means added capacity attracts new trips, which is why widening alone rarely cures congestion. Third, averaging the wrong speed: the fundamental relation needs space mean speed (harmonic-style average over distance), not the arithmetic time mean speed — the two differ exactly when speeds vary.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'fundamental diagram', def: 'The empirical relation between flow and density (and speed); the defining curve of traffic science.' },
          { term: 'Greenshields model', def: 'The linear speed-density assumption that makes the flow-density curve a parabola.' },
          { term: 'capacity (q_max)', def: 'The maximum flow a facility can sustain, at critical density and intermediate speed.' },
          { term: 'shockwave', def: 'The moving boundary between traffic states; its speed is the chord slope on the fundamental diagram.' },
          { term: 'level of service (LOS)', def: 'The A-F grading of operating quality — from free flow to forced breakdown.' },
          { term: 'saturation flow', def: 'The discharge rate of a queue through a green signal, about 1,800 veh/h per lane.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A lane carries its maximum flow when traffic moves at:',
            options: ['Free-flow speed', 'Half the free-flow speed', 'Walking pace', 'Speed is irrelevant to flow'],
            answer: 1,
            explain: 'In the Greenshields parabola the peak sits at critical density, where speed is half of free-flow — maximum throughput is a mid-speed phenomenon.',
          },
          {
            q: 'A queue\'s shockwave is observed moving upstream. Its states satisfy:',
            options: [
              'Both are on the free-flow branch',
              'The downstream state is past critical density',
              'Density decreased downstream',
              'Flow increased downstream',
            ],
            answer: 1,
            explain: 'Congested (over-critical) downstream states produce negative wave speeds — the boundary sweeps backward through oncoming traffic.',
          },
          {
            q: 'An intersection approach has v/c = 1.1 at peak. Its LOS is:',
            options: ['C or better', 'D', 'E', 'F'],
            answer: 3,
            explain: 'Demand exceeds capacity: breakdown with growing queues is LOS F, regardless of how well the signal is timed.',
          },
          {
            q: 'Doubling a signal\'s cycle length will:',
            options: [
              'always halve total delay',
              'increase the worst individual waits',
              'double saturation flow',
              'eliminate the queue',
            ],
            answer: 1,
            explain: 'Longer cycles make minor movements and pedestrians wait disproportionately; Webster\'s optimum balances total delay against the worst wait, and it is shorter than intuition suggests.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the highway engineering lesson for geometric design and the railway lesson for rail-side cant and capacity. Follow with the water resources lessons for the shared fluid-mechanics intuition, and operations management for queueing theory in business settings.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'civ-highway-geometric-design',
    title: 'Highway Engineering: Alignment, Geometric Design and Pavements',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Transportation Engineering',
    tier: 'intermediate',
    concepts: [
      'Highway planning, classification and alignment',
      'Cross-section elements and camber',
      'Sight distance: stopping, overtaking and PIEV',
      'Horizontal curves: superelevation, extra widening, transition curves',
      'Gradients and vertical curves',
      'Flexible and rigid pavement design',
    ],
    words: 1709,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'A road is a machine for converting terrain into travel, and its design is written in three currencies: safety (sight distances and friction), speed (curves, gradients and their compensation), and structure (the pavement that turns axle loads into stresses soil can bear). This lesson runs the full design sequence — how roads are classified and aligned, how camber and cross-section shed water, how stopping and overtaking sight distances are computed, how superelevation and transition curves let vehicles corner at design speed, and how flexible bituminous pavements differ structurally from rigid concrete slabs. It is the most formula-regular block of the transportation syllabus, and the formulas all trace back to one diagram: a vehicle negotiating a curve on a grade.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Highway geometric design is a guaranteed-marks region of the GATE CE paper: the SSD formula, the superelevation relation e + f = V²/127R, and grade compensation appear nearly every year. Each is short, each has a defined code context (IRC), and each is asked as a one-step or two-step numerical.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Design speed', def: 'The speed the geometry is built to accommodate safely — the parameter from which sight distances, curve radii and superelevation are computed. Classifications (national highway down to village road) differ chiefly in this number.' },
          { term: 'Stopping sight distance', def: 'The distance needed to see, react and brake to a stop: perception-reaction travel (0.278 V t, with t = 2.5 s on the PIEV model) plus braking distance V²/(254f). The non-negotiable minimum of geometric design.' },
          { term: 'Superelevation', def: 'The outward-to-inward cross-slope banked into a curve so centripetal resistance is shared between banking and tyre friction — e + f = V²/127R, with IRC capping e at 7% and using friction f = 0.15 for design.' },
          { term: 'Transition curve', def: 'The spiral (or cubic parabola) inserted between tangent and circular arc so centrifugal force grows gradually rather than jumping — steering, superelevation and extra widening all introduced along it.' },
          { term: 'Grade compensation', def: 'On sharp rising curves the grade is relaxed — by (30 + R)/R percent, capped at 75/R — because curve resistance already taxes the vehicle; the ruling grade is reserved for open country.' },
          { term: 'Modulus of subgrade reaction', def: 'k — the pressure per unit deflection of the soil subgrade under a plate load, the soil parameter of rigid-pavement design (Westergaard\'s slab analysis), just as CBR anchors flexible design.' },
        ],
      },
      {
        kind: 'para',
        text: 'Planning fixes what the design must achieve. Roads are classified by function and traffic — national and state highways as arteries, major district roads as collectors, village roads as distributaries — and historic plans (Nagpur\'s star-and-grid, the later twenty-year road plans) set density targets the modern Golden Quadrilateral and corridor programmes still echo. Alignment between terminals is chosen for shortness, ease, safety and economy, constrained by obligatory points (river crossings, towns, unstable ground), and refined into the horizontal and vertical geometry that follows. The cross-section then allocates the strip: carriageway width by lanes, shoulders for recovery and emergency stopping, right-of-way for future widening. Camber — the crown slope of 1.7 to 4% depending on surface — drains rainwater to the edges; steep enough to shed water, gentle enough not to tip slow vehicles, and always the first number checked in cross-section questions.',
      },
      {
        kind: 'para',
        text: 'Sight distance is the safety arithmetic. Stopping sight distance (SSD) sums reaction and braking: 0.278 V t with a 2.5-second perception-intellection-emotion-volition (PIEV) time, plus V² over 254f with the longitudinal friction coefficient f ≈ 0.35–0.40 — computed for the design speed, graded upward on upgrades (gravity helps; downgrades the opposite, and the formula splits by grade sign). Overtaking sight distance (OSD) is longer and more conditional: the distance to complete a passing manoeuvre with a gap — reaction time 2.5 seconds times the overtaking speed, then the passing distance during the manoeuvre with minimum spacing, then a safety margin — and where full OSD is impossible, intermediate sight distance (1.5 × SSD) or headlight sight distance on valley curves stands in. Every crest must be checked: the parabolic summit curve is set so the line of sight clears the brow at the required SSD or OSD, which is why crest curve length is a sight-distance problem, not a comfort one.',
      },
      {
        kind: 'formula',
        name: 'Superelevation design relation',
        latex: 'e + f = \\frac{V^{2}}{127 R}',
        meaning: 'Banking e plus side friction f balances the speed-squared over radius term (V in km/h, R in metres, the 127 hiding the gravity and unit conversions). IRC designs e for 75% of speed with f = 0.15 — e = V²/(225R) — capped at 7%, with friction absorbing the rest.',
      },
      {
        kind: 'para',
        text: 'Horizontal curves convert the superelevation relation into geometry. For design speed and terrain, the relation fixes the minimum radius — or, radius given, the required banking. Extra widening widens the carriageway on curves twice over: mechanically, because a vehicle\'s rear wheels track inside the fronts (nl²/2R for n lanes of wheelbase l), and psychologically, because drivers swing wide at speed (V/(9.5√R) per lane). Transition spirals of length L introduce superelevation and curvature at a rate comfortable to passengers, and shift the circular curve inward by s = L²/24R. On grades, the ruling grade (the design-enabling maximum) is compensated on sharp curves by (30 + R)/R percent — capped at 75/R — because curve resistance and grade resistance both draw on the same engine. Valley curves, unlike crests, are comfort and headlight problems: night driving must light the road ahead, and the parabolic valley curve is set for that headlight sight distance with a sag that does not bounce the suspension.',
      },
      {
        kind: 'para',
        text: 'Intersections are where the geometry meets conflict, and their vocabulary is examinable with the cross-section block. At-grade crossings are treated by channelisation — islands that separate conflicting streams and discipline turning movements — or, where volumes justify it, by rotary intersections: a circular carriageway around a central island on which weaving, not signal control, resolves conflicts, designed with weaving width and length proportional to the traffic that must weave across, and run at reduced speeds (the IRC design speed for rotaries being roughly 0.5 of the approach speed). Rotaries suit moderate, balanced volumes; they fail under heavy unbalanced flows and pedestrian pressure, which is where signalisation takes over. The traffic inputs behind all choices are measured, not assumed: volume studies counted in passenger car units (a heavy vehicle is several cars of capacity), spot-speed studies setting the 85th-percentile design speed, and origin-destination and parking surveys completing the picture. The capacity-versus-speed trade at the heart of every intersection question is the same engineering compromise the curves already taught — geometry buys safety and comfort out of a fixed budget of land and delay.',
      },
      {
        kind: 'para',
        text: 'Pavement design is the structural half. Flexible pavements — bituminous surfaces over granular bases and sub-bases — distribute wheel load through grain-to-grain contact in decreasing intensity with depth; they fail by rutting and fatigue cracking, are designed by layer thicknesses against the subgrade\'s California Bearing Ratio (IRC 37\'s mechanistic charts), and their traffic input is the cumulative standard axle load, where the fourth-power law makes one 8.2-tonne axle worth roughly ten 4-tonne axles. Rigid pavements — concrete slabs — behave as plates: the slab\'s flexural stiffness spans weak spots, stresses follow Westergaard\'s analysis on the modulus of subgrade reaction k, and the design problem becomes joints — expansion and contraction joints with load-transfer dowels, longitudinal warping joints with tie bars — because temperature curls the slab and corners are its weakest points. The choice between them is life-cycle economics over subgrade and traffic; the exam asks the structural contrasts and the occasional Westergaard corner-load calculation.',
      },
      {
        kind: 'example',
        title: 'Designing a curve for 80 km/h',
        steps: [
          'Design speed V = 80 km/h; assume fully-banked check first: R for e = 7% and f = 0 — R = V²/(127e) = 6400/8.89 ≈ 720 m. This is the no-friction safety floor.',
          'IRC design: e = V²/(225R). For R = 450 m: e = 6400/(225 × 450) ≈ 0.063 — within the 7% cap, so friction need not be invoked; if the cap were exceeded, reduce R or speed instead.',
          'Extra widening for 2 lanes (l = 6 m): We = 2 × 36/(2 × 450) + 80/(9.5√450) ≈ 0.08 + 0.37 ≈ 0.45 m — applied to the inside, with the transition length setting how it tapers in.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          { q: 'The two components of stopping sight distance are…', options: ['reaction distance and braking distance', 'camber and gradient', 'superelevation and friction', 'grade and curve resistance'], answer: 0, explain: '0.278Vt covers perception-reaction; V²/(254f) covers braking — both scale with design speed.' },
          { q: 'In IRC superelevation design, friction is taken as 0.15 because…', options: ['tyres are smooth', 'the fraction of centripetal force friction may be asked to carry is limited for comfort and wet-weather safety', '0.15 is the skid coefficient', 'IRC caps speed'], answer: 1, explain: 'Design friction is not the ultimate available grip but the comfortable, wet-safe share — hence banking carries most of the load.' },
          { q: 'Extra widening on a horizontal curve is needed because…', options: ['vehicles skid outward', 'rear wheels track inside front wheels and drivers swing wide at speed', 'superelevation reduces width', 'pavement thickens'], answer: 1, explain: 'Mechanical off-tracking (nl²/2R) plus psychological widening (V/9.5√R) both eat into the nominal lane width.' },
          { q: 'Grade compensation on a sharp rising curve exists because…', options: ['rain drains better', 'curve resistance already taxes the vehicle, so effective grade can be relaxed', 'braking needs it', 'IRC standardises gradients'], answer: 1, explain: 'Both resistances draw on tractive effort; compensating by (30+R)/R % keeps the total demand within design.' },
          { q: 'A rigid pavement differs from a flexible one chiefly in that it…', options: ['is thinner', 'distributes load by slab flexure with joints as the design focus', 'uses CBR directly', 'cannot carry heavy loads'], answer: 1, explain: 'The concrete slab bridges and spreads load; temperature curling and corner stresses make joints and dowels the design problem.' },
        ] },
      {
        kind: 'para',
        text: 'Transport engineering continues from here into traffic studies and intersections, but the geometric core is complete. The surveying lesson supplies the field methods that stake these curves out on the ground; the concrete lesson supplies the slab material that rigid pavements are cast from; and the water-management habit of the hydrology lesson is the same one that keeps camber, shoulders and side drains moving rainwater off the pavement.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: basic mechanics (friction, circular motion) from the physics lessons. Follow with the surveying-geomatics lesson for curve setting-out and the concrete-structures lesson for rigid pavement materials. Standard readings: Khanna & Justo\'s Highway Engineering, IRC codes (IRC 73, IRC 37, IRC 58), and the GATE CE transportation syllabus.',
      },
    ],
  },
]
