/**
 * Knowledge Universe — Naval Architecture & Marine Engineering — Chapter 05: Seakeeping & Manoeuvring
 * 2 lessons · ~3,300 words
 * field: Naval Architecture
 * legacy sources: x59-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Seakeeping & Manoeuvring]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 eng-naval-seakeeping-motions — Seakeeping: How Ships Move in Waves
 *   05.2 eng-naval-manoeuvring-rudders — Manoeuvring: How Ships Turn, Stop and Stay on Course
 */
import type { KnowledgeTopic } from '../../types'

export const navalArchitectureCh05: KnowledgeTopic[] = [
  {
    id: 'eng-naval-seakeeping-motions',
    title: 'Seakeeping: How Ships Move in Waves',
    domain: 'Engineering',
    field: 'Naval Architecture',
    branch: 'Seakeeping & Manoeuvring',
    tier: 'intermediate',
    concepts: [
      'six degrees of freedom: surge, sway, heave, roll, pitch, yaw',
      'regular waves, encounter frequency and the wave spectrum',
      'natural roll period T = 2πk/√(g·GM) and resonance',
      'added mass and wave-radiation damping',
      'response amplitude operators and irregular seas',
      'slamming, green water and parametric rolling',
      'stabilizers: bilge keels, tanks, fins and gyros',
    ],
    words: 1686,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The first chapter of this book treated a ship at rest: buoyancy balancing weight, metacentric height GM deciding whether she rights herself. But the sea never lets a ship rest, and the moment she moves among waves, every one of those quiet quantities starts to oscillate. Seakeeping is the discipline of how a hull responds to that excitation — and it is a dynamics problem, not a statics one. Six independent motions describe everything a ship can do: three translations along the hull axes (surge fore-and-aft, sway sideways, heave up-and-down) and three rotations about them (roll about the long axis, pitch about the transverse axis, yaw about the vertical). Designers treat them differently because their stiffnesses are wildly unequal: heave and pitch are stiff, roll is soft, and that asymmetry is why rolling dominates the comfort and safety agenda.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Seakeeping decides whether a warship can land a helicopter at sea state 4, whether a container lashing holds, whether passengers book a second cruise. Resonant rolling has rolled over ships that passed every static stability check — including large ro-ro and container vessels that lost hundreds of containers overboard in a single storm.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The idealized input is the regular wave: a sinusoid with height H, length λ and period T. In deep water these are locked together by gravity: a 100-metre wavelength wave has a period of about 8 seconds and travels near 12.5 metres per second. Real seas are not regular — they are a superposition of many components, described statistically by a spectrum (the Pierson–Moskowitz family is the classic fully-developed-sea model). One more subtlety matters for crews: what matters on board is the ENCOUNTER frequency — how fast waves pass the ship — and that depends on heading. Steaming into the waves shortens the encounter period; running before them stretches it. That one fact is the master\'s main resonance-avoidance lever, as we will see.',
      },
      {
        kind: 'para',
        text: 'Every mode of motion has a natural period — the frequency at which the ship wants to oscillate like any spring-mass system. For heave and pitch the "spring" is the hull\'s waterplane area, stiff and generous, so their periods are short, typically 3 to 6 seconds for a merchantman. Roll is different: its restoring stiffness is exactly the GM the first chapter defined, which designers deliberately keep modest for comfort, so roll periods run long — commonly 8 to 15 seconds. The classic estimate is T = 2πk/√(g·GM), where k is the radius of gyration of the ship\'s mass about the longitudinal axis, conveniently taken as 0.35 to 0.4 of the beam. When the encounter period of the waves matches this natural period, resonance takes over and each successive wave pumps the oscillation larger — the synchronous rolling that seafarers fear. The remedy is arithmetic, not heroics: change speed or heading, shift the encounter frequency off the peak, and the violent amplification subsides.',
      },
      {
        kind: 'para',
        text: 'Two hydrodynamic effects distinguish a ship from a mechanical oscillator in air. First, added mass: to move, the hull must accelerate a volume of surrounding water too, so the ship behaves as if heavier than her displacement — MIT\'s marine hydrodynamics course derives this from potential flow, and it matters most for heave and pitch. Second, damping: an oscillating hull generates outgoing waves that carry energy away, so the roll dies without intervention. The same wave-making mechanism is what the first chapter\'s resistance discussion called wave-making drag; here it appears as the thing that mercifully limits resonance. Potential flow\'s elegant paradox — a steadily translating body should feel no drag at all — dissolves exactly where viscosity and radiated waves enter, which is why model basins and CFD still earn their keep.',
      },
      {
        kind: 'para',
        text: 'The engineering bridge between wave climate and ship response is the response amplitude operator (RAO): motion amplitude per unit wave amplitude, plotted against encounter frequency for each mode. Irregular-sea response is then statistics: multiply the wave spectrum by the RAO squared, integrate, and you have the variance of motion from which significant amplitudes follow. This machinery — standard since the 1950s and now embedded in every seakeeping code — lets designers compare hull forms, predict the worst headings and speeds, and specify operational limits before the ship is built. It is also how classification societies write the weather criterion in the IMO intact stability code: a ship must survive a prescribed wind plus the roll amplitude a standard wave trains up.',
      },
      {
        kind: 'para',
        text: 'The extremes deserve their own paragraph. Slamming is the impulsive impact of flare or flat bottom on a wave face — a short, violent pressure pulse that can crack plating and shake radars loose, worst in head seas at moderate speed. Green water is the sea shipping directly over the bow or bulwark, loading hatches and deck gear with tonnes of moving water. And parametric rolling is the subtlest killer: on waves comparable in length to the hull, the waterplane and hence GM swing through large values as each crest passes, and at the right tuning (roughly twice per roll cycle) the heave-roll system becomes parametrically unstable — roll grows even in following and quartering seas where crews feel safest. Modern container ships with fine bows and wide sterns are notoriously susceptible; the lashing calculations that protect deck stacks are built from seakeeping statistics.',
      },
      {
        kind: 'para',
        text: 'When the seas will not be avoided, designers and masters fight roll directly. Bilge keels — long fins along the turn of the bilge — are passive, cheap and nearly universal, shedding eddies to add damping at the cost of a fraction of a per cent in resistance. Anti-roll tanks slosh water deliberately out of phase with the roll: recall the first chapter\'s warning that free surface destabilizes, and note the inversion — here the virtual rise of G is scheduled to push against the motion. Active fin stabilizers are rotating hydrofoils, kin to the rudder of the next lesson, that generate lift on command; they are superb but need speed to work, which is why a stopped fishing boat gets nothing from them. Gyroscopics and rudder-roll control round out the family. Comfort, cargo safety and the ability to keep working in a seaway are the dividends.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Natural roll period',
        latex: 'T_{roll} = \\frac{2\\pi k}{\\sqrt{g\\,GM}}',
        meaning: 'k is the roll radius of gyration (≈0.35–0.4 × beam). Larger GM shortens the period and stiffens the spring — the comfort-safety trade from the first chapter, now in dynamics.',
      },
      {
        kind: 'formula',
        name: 'Deep-water wave relations',
        latex: 'c = 1.25\\sqrt{\\lambda},\\qquad T = \\sqrt{2\\pi\\lambda/g}',
        meaning: 'Wavelength fixes celerity and period in deep water: a 100 m wave runs near 12.5 m/s with an 8 s period.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the natural roll period of a cargo ship with beam B = 18 m and GM = 1.0 m, and the risk if she meets 13-second swells beam-on.',
          'Take k ≈ 0.37 B = 6.7 m (mid-range of the 0.35–0.4 rule).',
          'Apply: T = 2πk/√(g·GM) = 2π × 6.7 / √(9.81 × 1.0) ≈ 42.1 / 3.13 ≈ 13.5 s.',
          'Interpret: 13-second storm swells arrive almost exactly at her natural roll period — textbook synchronous rolling. The bridge should alter course or speed to shift the encounter period (for example, putting the swells two points off the bow changes the encounter frequency enough to drop off the resonance peak), and the bilge keels will help by adding damping.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Weather routing services that keep ships off resonant headings and out of worst spectra',
          'IMO intact stability weather criterion: wind heeling plus a standard seaway, for every new ship',
          'Container lashing calculations built from long-term roll statistics of the route',
          'Helicopter launch envelopes for frigates and carriers, set by heave, pitch and roll limits',
          'Passenger-comfort indices (motion sickness incidence) shaping cruise itineraries and fin-stabilizer fits',
          'Heavy-lift and offshore operations planned around predicted motion windows',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not treat stability and seakeeping as separate silos: the GM that satisfies static criteria sets the roll period, and a "stiff" ship rolls fast and hard — high accelerations, cargo strain. Do not feel safe running before the storm: parametric rolling lives exactly there. And do not expect fin stabilizers at towing speeds — active systems need flow.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Six degrees of freedom', def: 'The three translations (surge, sway, heave) and three rotations (roll, pitch, yaw) that fully describe ship motion.' },
          { term: 'Encounter frequency', def: 'The frequency at which waves pass a moving ship; changed by speed and heading to avoid resonance.' },
          { term: 'Added mass', def: 'The inertial effect of water that must accelerate with the hull, making the ship behave heavier in oscillation.' },
          { term: 'Response amplitude operator (RAO)', def: 'Motion amplitude per unit wave amplitude as a function of frequency — the ship\'s transfer function.' },
          { term: 'Synchronous rolling', def: 'Resonant roll amplification when the encounter period matches the natural roll period.' },
          { term: 'Parametric rolling', def: 'Instability driven by the periodic variation of GM as waves run along the hull, typically in following seas.' },
          { term: 'Bilge keel', def: 'A passive damping fin fitted along the bilge strake of most ships.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Roll periods are typically much longer than heave periods because:',
            options: [
              'roll involves more water',
              'the roll restoring stiffness (set by GM) is deliberately modest compared with the waterplane stiffness in heave',
              'waves only excite roll',
              'rudders damp heave',
            ],
            answer: 1,
            explain: 'Designers keep GM small for comfort, so roll is the soft, slow, resonant-prone mode; heave and pitch are stiff and quick.',
          },
          {
            q: 'A ship rolling heavily beam-on to the storm swell should first:',
            options: [
              'ballast the forepeak',
              'alter course or speed to shift the encounter period off the natural roll period',
              'raise more sail',
              'stop engines immediately',
            ],
            answer: 1,
            explain: 'Resonance is a tuning problem; changing the encounter frequency is the fastest, safest detune.',
          },
          {
            q: 'Added mass means that in oscillation a hull:',
            options: [
              'gains real displacement permanently',
              'must accelerate nearby water too, so it behaves as if heavier than it weighs',
              'sits deeper by the stern',
              'loses stability',
            ],
            answer: 1,
            explain: 'Potential-flow analysis shows the entrained water raises the effective inertia, chiefly in heave and pitch.',
          },
          {
            q: 'Parametric rolling is dangerous mainly in:',
            options: [
              'head seas at full speed',
              'following and quartering seas, where GM varies as crests run along the hull',
              'still water',
              'ice',
            ],
            answer: 1,
            explain: 'The waterplane changes as each crest passes; tuned roughly twice per roll cycle, the roll grows without the crew feeling an obvious direct hit.',
          },
        ],
      },
    ],
  },
  {
    id: 'eng-naval-manoeuvring-rudders',
    title: 'Manoeuvring: How Ships Turn, Stop and Stay on Course',
    domain: 'Engineering',
    field: 'Naval Architecture',
    branch: 'Seakeeping & Manoeuvring',
    tier: 'intermediate',
    concepts: [
      'the rudder as a rotating hydrofoil',
      'the pivot point a third of the length from the bow',
      'turning circle: advance, transfer and tactical diameter',
      'course stability versus manoeuvrability',
      'shallow water: squat, bank effects and interaction',
      'stopping: inertia, crash stops and rudder cycling',
      'azimuth thrusters, pods and bow thrusters',
    ],
    words: 1614,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The design-and-propulsion chapter of this book followed the design spiral to the propeller; this lesson asks what the ship does with that thrust once she is moving — how she changes her mind. At the heart of it is a device of beautiful simplicity: the rudder, a rotatable hydrofoil hung in the propeller\'s slipstream. Put over at an angle to the flow, it develops lift perpendicular to its plane — a side force far aft, which turns the ship\'s momentum vector and starts the hull drifting so the whole body then works like a lifting surface. Because that lift grows with the square of flow speed, rudder authority collapses at low revolutions: half the speed buys a quarter of the force. This is why "she has no steerage way" is a warning every mariner learns before anything else, and why harbour manoeuvres lean on thrusters and tugs instead of the rudder.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Manoeuvring performance is regulated internationally: IMO standards require a ship, in deep water at test speed, to turn within defined bounds and to stop within calculable distances. Every collision report written in a crowded strait reduces, sooner or later, to someone misjudging exactly the quantities this lesson defines — pivot point, tactical diameter, stopping distance.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Think of the ship pivoting about a point, not her centre. With headway on, the pivot point sits roughly one third of the length from the bow: put the rudder over to starboard and the bow swings in smartly about that point while the stern sweeps out in a wide arc — the detail that turns berthing plans from guesswork into geometry. Go astern and the pivot migrates aft, to about a quarter of the length from the stern, and the ship becomes markedly harder to hold: transverse flow at the rudder is unstable, which is why a vessel backing out of a berth walks her stern toward the berth she just left unless thrusters intervene. Ship-handlers use the pivot constantly: kick ahead with the rudder hard over to swing the bow while barely gaining way.',
      },
      {
        kind: 'para',
        text: 'A turning circle is described with three numbers. Advance is how far the centre of gravity travels along the ORIGINAL course before the heading has changed 90 degrees. Transfer is the sideways offset at that moment. The tactical diameter is the transfer measured at 180 degrees — the practical width of water a ship needs to reverse her mind. IMO\'s deep-water standards demand advance below 4.5 ship lengths and tactical diameter below 5 lengths at test speed with 35 degrees of rudder. The turn is lossy: the hull meets the flow at a drift angle, and speed falls about a quarter through the first 90 degrees, roughly a third by the end — which is why a turn into shallow or crowded water should be planned as a slow-motion event, entered with sea room and a stable engine setting.',
      },
      {
        kind: 'para',
        text: 'Sizing the rudder is a trade. As a rule of thumb the rudder area is roughly 1.5 to 2.5 per cent of the product of length and draft — enough to turn a loaded ship inside the IMO numbers while adding negligible drag when amidships. The deeper property at stake is course stability. A directionally STABLE ship, disturbed, settles back on her heading with small corrections: comfortable to steer, economical on an ocean passage, but wide in turns. An UNSTABLE hull needs opposite-rudder attention to hold course, yet whips around in harbour — twin-screw tugs and ferries court this deliberately. Design geometry decides: full sterns and slow speeds push toward instability; fine lines and skegs toward stability. The designer chooses where on that spectrum the ship should live, and the crew learns her habits.',
      },
      {
        kind: 'para',
        text: 'Confined water rewrites the rules. In shallow water the flow around the hull accelerates and the pressure under the keel drops, so the ship sinks deeper and trims by the stern — squat — and with under-keel clearance of a metre the squat can reach half a metre at speed: the classic cause of groundings on channels dredged for a deeper ship. Close to a bank, the pressure asymmetry pulls the stern toward the bank (bank suction) and pushes the bow away; ships passing one another in a narrow channel interact the same way, their pressure fields coupling until bows swing together or sterns clash. Pilots manage all of this with speed — the single most effective control — plus rudder, engines and tugs. The lesson for the naval architect is that manoeuvring standards are set in deep, open water precisely because shallow water makes everything worse.',
      },
      {
        kind: 'para',
        text: 'Stopping is the slowest emergency there is. Cut the engines and a ship coasts for miles — the largest tanker ever built needed roughly five and a half nautical miles of inertia stopping. A crash stop (full astern) shortens this dramatically but still runs to several lengths for a loaded bulk carrier, with the stern walking out as astern thrust destabilizes the run. Between the two sit the seamanship techniques: a hard-over turn bleeds speed fastest while buying sideways room, and rudder cycling — swinging the rudder rhythmically — uses the hull and rudder as brakes while keeping steerage. Every ship\'s pilot card, and every berth plan, begins from these measured distances.',
      },
      {
        kind: 'para',
        text: 'Modern hardware sidesteps some of the physics. Azimuth thrusters and podded drives swivel the propeller itself: thrust points any direction, and the rudder becomes optional — the freedom that lets cruise ships pivot in place and tugs push in any direction. Bow (and stern) thrusters provide transverse force at zero speed, tunnel propellers for ferries, retractable units for offshore tonnage. Dynamic positioning closes the loop with GPS and wind feed-forward, holding drilling ships on station without anchors. Each trades capital cost and draught for control authority; each is, at root, an admission that the fixed rudder — brilliant at sea — was never a harbour instrument.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Rudder force scaling',
        latex: 'F_{rudder} \\propto A_{rudder}\\, v^{2}\\, \\sin\\delta',
        meaning: 'Lift on the rudder grows with area, the square of flow speed and the sine of the rudder angle — the origin of steerage-way, and of half-speed-quarter-force arithmetic.',
      },
      {
        kind: 'formula',
        name: 'IMO deep-water turning bounds',
        latex: 'Advance < 4.5\\,L,\\qquad Tactical\\ diameter < 5\\,L',
        meaning: 'The international floor on turning performance, measured at test speed with 35° rudder; L is ship length.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the space and time a 340 m loaded tanker needs to reverse course in open water at 14 knots.',
          'Take the tactical diameter at the IMO ceiling: 5L = 1,700 m, so the steady-turn radius is R ≈ 850 m.',
          'Path length for a 180° turn is πR ≈ 2,670 m. At 14 knots (7.2 m/s) that would be 370 s — but speed falls about a third in the turn, so plan on roughly 8 to 10 minutes and well over two kilometres of sea room.',
          'Interpret: a supertanker cannot "dodge". Traffic schemes, radar plotting and early helm action exist because the numbers leave no room for indecision.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'IMO manoeuvring standards (MSC.137(76)): zig-zag, turning-circle and stopping trials for every new ship',
          'Pilot cards and passage plans quoting advance, transfer and stopping distances by loading condition',
          'Dredged-channel design balancing squat allowances against draft limits',
          'Tug and pod allocations in port, sized from turning and stopping simulations',
          'Dynamic-positioning systems holding drillships and cable-layers on station',
          'Autopilot and weather-routing algorithms tuned to each hull\'s course-stability character',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Rudder force is nothing without flow — a stopped ship obeys thrusters and tugs, not the wheel. Turning circles grow in shallow water and when loaded; the trial numbers are best-case. Astern, the pivot moves aft and the ship becomes unstable: plan backing manoeuvres before starting them. And remember the drift angle: the swept path is always wider than the turning circle itself.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Pivot point', def: 'The point about which the ship swings when turning — about one third of the length from the bow with headway.' },
          { term: 'Advance', def: 'Distance travelled along the original course until the heading has changed 90°.' },
          { term: 'Tactical diameter', def: 'Sideways offset from the original track after a 180° heading change — the practical width of a turn.' },
          { term: 'Course stability', def: 'A ship\'s tendency to return to her heading after a disturbance; traded against turning agility.' },
          { term: 'Squat', def: 'Sinkage and stern trim in shallow water caused by accelerated flow under the hull.' },
          { term: 'Bank effect', def: 'Suction toward a nearby bank on the stern with repulsion at the bow, from asymmetric pressure fields.' },
          { term: 'Azimuth thruster', def: 'A propeller that rotates to point thrust in any direction, replacing or supplementing the rudder.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Rudder authority collapses at low speed because rudder force scales with:',
            options: [
              'displacement',
              'the square of the flow speed over the rudder',
              'ship length',
              'propeller diameter only',
            ],
            answer: 1,
            explain: 'Lift on the rudder grows with dynamic pressure, hence v²; at half speed only a quarter of the turning force remains.',
          },
          {
            q: 'With headway on, the pivot point sits about:',
            options: [
              'amidships',
              'one third of the length from the bow',
              'at the rudder',
              'one length aft of the bow',
            ],
            answer: 1,
            explain: 'The bow pivots inside that point while the stern sweeps wide — the geometric fact all berthing plans use.',
          },
          {
            q: 'The tactical diameter is:',
            options: [
              'the advance at 90° of heading change',
              'the sideways transfer after a 180° turn — and must stay under 5 ship lengths by IMO standards',
              'the ship\'s beam squared',
              'the stopping distance',
            ],
            answer: 1,
            explain: 'It is the practical width of the turn; advance (under 4.5 L) measures the along-course component to 90°.',
          },
          {
            q: 'Squat in shallow water means a ship:',
            options: [
              'rises and dries out',
              'sinks deeper and trims by the stern as flow accelerates under the hull',
              'turns faster',
              'loses rudder effectiveness only',
            ],
            answer: 1,
            explain: 'The pressure drop under the keel increases draught — half a metre of squat is possible at speed with a metre of clearance.',
          },
        ],
      },
    ],
  },
]
