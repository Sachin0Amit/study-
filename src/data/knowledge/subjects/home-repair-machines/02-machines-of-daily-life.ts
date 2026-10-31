/**
 * Knowledge Universe — Home Repair & Everyday Machines — Chapter 02: Machines of Daily Life
 * 2 lessons · ~2,419 words
 * field: Everyday Machines
 * legacy sources: technology-applied.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Everyday Machines]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 tech-elevators-escalators — Elevators and Escalators: The Vertical City
 *   02.2 tech-clocks-timekeeping — Timekeeping: How Humans Measure Time
 */
import type { KnowledgeTopic } from '../../types'

export const homeRepairMachinesCh02: KnowledgeTopic[] = [
  {
    id: "tech-elevators-escalators",
    title: "Elevators and Escalators: The Vertical City",
    domain: "Technology & Applied Science",
    field: "Everyday Machines",
    branch: "Machines of Daily Life",
    tier: "core",
    concepts: [
      "counterweights make motors small",
      "traction versus hydraulic machines",
      "the governor and Otis's safety brake",
      "destination dispatching algorithms",
      "sky lobbies and the economics of shafts",
      "escalator handrail sync",
      "maintenance culture and safety statistics",
    ],
    words: 1223,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "In 1854 Elisha Otis stood on a platform above a New York crowd and ordered the rope cut; the platform dropped an inch and stopped, held by his spring-loaded safety brake. The elevator that followed made the vertical city possible — nobody rents the 40th floor of a building they must climb. This lesson explains the machinery, the mathematics of counterweights, and the quiet discipline that makes elevators the safest ride per trip in the world.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Buildings grew upward the day vertical transport became trustworthy. Every skyscraper is also a machine for moving people: its core is packed with shafts, and how efficiently those shafts work decides how much of the building is rentable. The physics is one clever idea — balancing — plus a century of safety engineering.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The heart of a traction elevator is balance. The car hangs on ropes over a grooved wheel — the sheave — with a counterweight on the other side sized to the car plus about half its rated load. The motor never lifts the full weight of car and passengers; it drives only the imbalance between the two sides. An empty car going up is mostly the counterweight going down, the two trading energy across the sheave like children on a see-saw.",
      },
      {
        kind: "para",
        text: "Two drive families split the market. Traction machines — ropes over a sheave, counterweighted, historically in a machine room above the shaft — serve buildings of any height, and their motors can even regenerate electricity while braking a heavy car. Hydraulic elevators push the car from below with a piston through a cylinder of oil: simpler, cheaper, compact enough for low buildings, but limited to roughly five or six stories because a very long piston becomes slow and unwieldy.",
      },
      {
        kind: "para",
        text: "Safety is layered. An overspeed governor — a centrifugal flywheel spun by the car's own motion — trips at about 25 percent above rated speed and yanks the safety gears, driving wedge jaws onto the guide rails; the car stops whether or not the ropes hold. In the pit below, oil or spring buffers catch what the brakes miss. Modern additions include door light curtains that reopen on a beam break, redundant brakes, and leveling systems that park the car within millimeters of the floor.",
      },
      {
        kind: "para",
        text: "Moving crowds is a software problem. A classic elevator answers hall calls — up and down buttons — with a simple rule: finish the current direction's calls before reversing. Destination control turns passengers into data: riders key their floor at a kiosk before boarding and are assigned to a specific car, letting the system group everyone with the same destination into the same trip. Buildings report 20 to 30 percent shorter trips — same hardware, smarter grouping.",
      },
      {
        kind: "para",
        text: "Very tall buildings run out of room for shafts: enough single-ride elevators to serve the 90th floor would eat the whole core. The fix is the sky lobby — express shuttles rise nonstop to a transfer floor mid-tower, where local elevators serve the neighborhood above. Escalators carry the short vertical hops: a chain of linked steps driven by a motor, with a handrail driven to match step speed, because a handrail even slightly out of sync makes riders stagger. In deep metro stations, escalator banks often move more people than the trains.",
      },
      {
        kind: "para",
        text: "The safety record is not luck; it is maintenance. Elevators run on standing service contracts — monthly checks, periodic load tests, a log for every fault — and an entrapment procedure that begins with stay in the car. Per passenger trip, elevators kill far less often than cars, trains or even stairs; the escalator injuries that do occur trace mostly to luggage, strollers and loose laces meeting the comb plates at the ends.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Counterweight sizing",
        latex: "W_{\\mathrm{cw}} = W_{\\mathrm{car}} + k \\, W_{\\mathrm{rated}}",
        meaning: "The counterweight matches the car plus a fraction k — typically 0.4 to 0.5 — of the rated passenger load.",
      },
      {
        kind: "formula",
        name: "Motor imbalance force",
        latex: "F = (W_{\\mathrm{car}} + W_{\\mathrm{load}}) - W_{\\mathrm{cw}}",
        meaning: "What the machine actually drives: the net difference between the loaded car side and the counterweight side.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: an elevator has a 1,000-kilogram car, a rated load of 1,000 kilograms and a counterweight set to 1,500 kilograms — what force must the motor drive when empty and when full?",
          "Recall the governing idea: the counterweight equals the car plus half the rated load, so the motor sees only the imbalance; force is the mass difference times gravity.",
          "Apply: empty car — 1,000 − 1,500 = −500 kg, so 500 × 9.8 ≈ 4,900 newtons. Fully loaded — 2,000 − 1,500 = +500 kg, again about 4,900 newtons. Without a counterweight, lifting a full car would demand 2,000 × 9.8 ≈ 19,600 newtons.",
          "State the result: balance equalizes the worst case in both extremes and quarters the peak force compared with a dead lift — a smaller motor, lighter ropes, less heat, and braking energy that regeneration can sell back.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Skyscraper cores stack express shuttles and local banks around sky lobbies",
          "Office towers retrofit destination dispatch to cut lobby waits",
          "Metro mega-stations run escalator banks sized above train capacity",
          "Airports thread moving walkways through quarter-mile concourses",
          "Service contracts keep millions of cars on monthly inspection cycles",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "A counterweight does not make lifting free; it makes it balanced — the motor still pays for friction, acceleration and any load that is not exactly half. If a car stalls between floors, stay inside and call for help: the shaft is the dangerous place. On escalators, the injuries that fill statistics are laces, long skirts and strollers at the comb plates, not mechanical collapse. And the machine room is not a storage closet.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Counterweight", def: "The weighted block opposing the car, sized to the car plus a fraction of rated load." },
          { term: "Sheave", def: "The grooved traction wheel whose friction on the ropes moves the car." },
          { term: "Governor", def: "A centrifugal overspeed sensor that triggers the mechanical safety brakes." },
          { term: "Safety gear", def: "Wedge jaws that bite the guide rails and stop the car even if the ropes fail." },
          { term: "Buffer", def: "The energy-absorbing stop in the pit beneath the lowest landing." },
          { term: "Destination control", def: "Dispatching that assigns passengers to cars by keyed destination before boarding." },
          { term: "Sky lobby", def: "A transfer floor where express shuttles hand riders to local elevators." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "An elevator counterweight is typically sized to equal:",
            options: [
              "The car plus about half the rated load",
              "Exactly the empty car's weight",
              "Twice the rated load",
              "The building's floor count",
            ],
            answer: 0,
            explain: "Car plus roughly 40 to 50 percent of capacity equalizes the empty and full extremes of imbalance.",
          },
          {
            q: "The overspeed governor stops a runaway car by:",
            options: [
              "Reading sensors along the rail",
              "Weighing the car continuously",
              "Centrifugal force triggering the safety gears at excessive speed",
              "Timing door closures",
            ],
            answer: 2,
            explain: "Spun by the car's motion, flyweights fly outward past a set speed and release the rail-gripping brakes.",
          },
          {
            q: "Hydraulic elevators are generally limited to low buildings because:",
            options: [
              "They are too fast",
              "Ropes cannot be attached",
              "Pushing oil through a very long piston becomes slow and unwieldy",
              "They require counterweights",
            ],
            answer: 2,
            explain: "A piston ram of great length needs a deep cylinder and loses speed; traction ropes have no such limit.",
          },
          {
            q: "Destination control systems cut travel times mainly by:",
            options: [
              "Increasing car speed",
              "Grouping passengers with the same floor into the same car",
              "Removing the counterweight",
              "Skipping safety checks",
            ],
            answer: 1,
            explain: "Keying your floor before boarding lets the algorithm batch same-destination trips, cutting stops per ride.",
          },
        ],
      },
    ],
  },
  {
    id: "tech-clocks-timekeeping",
    title: "Timekeeping: How Humans Measure Time",
    domain: "Technology & Applied Science",
    field: "Everyday Machines",
    branch: "Machines of Daily Life",
    tier: "core",
    concepts: [
      "sundials and the variable hour",
      "escapements: counting beats mechanically",
      "Huygens and the pendulum's isochronism",
      "quartz: 32,768 beats per second",
      "the cesium definition of the second",
      "GPS and network time discipline",
      "leap seconds and why clocks drift",
    ],
    words: 1196,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Time is the most-measured quantity on Earth: every phone, computer, power grid and stock exchange leans on clocks, and most of them agree to within a whisper. That agreement is a short story of engineering — a shadow on bronze, a swinging pendulum, a vibrating sliver of quartz and, finally, the quantum beat of cesium atoms. This lesson follows the whole ladder, showing what each technology fixed and what it could not.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Modern timekeeping is invisible infrastructure. Phone networks hand off calls between towers, financial markets order trades and GPS receivers locate you only because millions of clocks agree. When clocks disagree, the failures are strange: dropped calls, mispriced trades, databases that tear.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The sundial is astronomy turned into a dial: a shadow's position encodes the sun's angle, which is Earth's rotation made visible. It was accurate, eternal and badly limited — useless at night, useless under clouds, and its hours were uneven, because ancient hours divided daylight into twelve slices that stretched in summer and shrank in winter. Water clocks and burning candles kept time through the dark, but nothing before the Middle Ages could count time on its own.",
      },
      {
        kind: "para",
        text: "The mechanical breakthrough was the escapement: a mechanism that lets a falling weight or a wound spring advance only in counted ticks, gear by gear. A verge escapement ticking against a foliot bar gave medieval church towers the first mechanical hours; in 1656 Christiaan Huygens hung a pendulum on the clock. Galileo had noticed that a pendulum's swing takes the same time whether wide or narrow — isochronism — so the period depends almost entirely on length. Error collapsed from minutes per day to seconds per day, and the minute hand became worth printing.",
      },
      {
        kind: "para",
        text: "Quartz replaced the pendulum with a vibrating crystal. Squeeze certain crystals and they generate a voltage; apply a voltage and they flex — piezoelectricity — so a sliver of quartz cut to the right shape rings like a tuning fork at a fixed frequency. Nearly every watch uses 32,768 beats per second, a power of two that simple digital counters halve fifteen times to reach one tick per second. Quartz took accuracy from seconds per day to seconds per month, at a price that fell to pennies.",
      },
      {
        kind: "para",
        text: "The atomic clock ended drift as a fact of nature rather than a nuisance. Cesium atoms tick between two inner energy states at an utterly fixed frequency, and in 1967 the second was redefined as exactly 9,192,631,770 of those oscillations. A cesium clock does not care about temperature or age the way quartz does; the best laboratory fountains hold time to within a second over roughly 100 million years. Everything from the length of the second to leap-second decisions flows from these instruments.",
      },
      {
        kind: "para",
        text: "Accurate time is useless unless it can be shared. GPS satellites each carry atomic clocks, and their broadcasts double as the world's time-transfer service — a phone quietly disciplines its clock to satellite time, which is why it is never wrong (the positioning use of those signals is a lesson of its own). On the internet, the Network Time Protocol funnels time downward from stratum to stratum, holding ordinary computers within milliseconds of each other.",
      },
      {
        kind: "para",
        text: "Why do clocks drift at all? Because nothing physical holds a perfectly constant rate: quartz changes stiffness with temperature, mechanical parts wear, and every resonator carries a manufacturing tolerance measured in parts per million. That is also the story of leap seconds — Earth's rotation wanders relative to atomic time, so a second is occasionally stitched into civil time to keep noon at noon. The drift on a microwave-oven clock is simply a quartz crystal left undisciplined.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Fractional frequency error",
        latex: "\\frac{\\Delta f}{f}",
        meaning: "A clock's quality in one number: frequency error divided by frequency, usually quoted in parts per million.",
      },
      {
        kind: "formula",
        name: "Accumulated time drift",
        latex: "\\Delta t = \\frac{\\Delta f}{f} \\times t",
        meaning: "Time error grows in a straight line: fractional frequency error multiplied by elapsed time.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a watch crystal runs 20 parts per million fast — how much time does the watch gain per day and per month, and how does a cesium clock compare?",
          "Recall the governing idea: accumulated drift equals fractional frequency error times elapsed time, and one day is 86,400 seconds.",
          "Apply: 20 ppm is 20 × 10⁻⁶. Per day, the watch gains 20 × 10⁻⁶ × 86,400 s ≈ 1.7 seconds; across a 30-day month, about 52 seconds. A cesium standard holding 1 part in 10¹⁵ accumulates only 10⁻¹⁵ × 86,400 ≈ 10⁻¹⁰ seconds per day — one second in roughly 30 million years.",
          "State the result: the quartz watch is superb by historical standards and still hopeless next to the atom — which is why networks discipline themselves to atomic time instead of trusting their own crystals.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Smartphones sync silently to GPS and NTP, so the lock-screen clock is effectively never wrong",
          "Cellular networks schedule transmissions to microsecond precision or calls drop at tower boundaries",
          "Exchanges timestamp orders to the microsecond to settle who traded first",
          "Power grids phase-match distant generators using shared reference time",
          "Deep-space networks time radio signals over hours to navigate probes by their delay",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Accurate is relative: a 20 ppm crystal is excellent for a watch and hopeless for a network, and the same crystal drifts with temperature — which is why serious gear uses temperature-compensated or oven-warmed oscillators. The microwave clock is not broken; it is undisciplined. Leap seconds are genuine engineering hazards, as systems that mishandle them can fail at the stitch. And no two clocks, left alone, stay agreed.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Escapement", def: "The mechanism that releases a clock's stored energy in counted ticks." },
          { term: "Isochronism", def: "A pendulum's period depending on length rather than swing width." },
          { term: "Piezoelectricity", def: "Crystals that generate voltage when squeezed and flex when driven." },
          { term: "Quartz oscillator", def: "A vibrating crystal cut to a fixed frequency — the heart of watches and electronics." },
          { term: "Cesium second", def: "Exactly 9,192,631,770 oscillations of the cesium-133 hyperfine transition." },
          { term: "NTP", def: "Network Time Protocol — the internet's hierarchy for sharing clock time." },
          { term: "Leap second", def: "An occasionally added second keeping UTC aligned with Earth's rotation." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Huygens's pendulum clock beat earlier clocks because the pendulum's period:",
            options: [
              "Is nearly independent of swing width",
              "Depends on swing width",
              "Changes with temperature",
              "Is faster at sea level",
            ],
            answer: 0,
            explain: "Isochronism: the period depends on length, so the escapement receives steady, countable beats.",
          },
          {
            q: "A quartz watch crystal vibrates at 32,768 Hz mainly because:",
            options: [
              "It is a prime number",
              "It is 2 to the 15th power, so binary counters halve it 15 times to one tick per second",
              "It matches broadcast frequencies",
              "It is audible to humans",
            ],
            answer: 1,
            explain: "Fifteen divisions by two turn 32,768 into exactly 1 Hz with trivial digital logic.",
          },
          {
            q: "Since 1967, one second is defined as:",
            options: [
              "1/86,400 of a day",
              "The swing of a one-meter pendulum",
              "9,192,631,770 oscillations of the cesium-133 atom",
              "One billion quartz cycles",
            ],
            answer: 2,
            explain: "The atomic definition ties the second to a quantum frequency rather than Earth's unsteady spin.",
          },
          {
            q: "A 20 ppm crystal accumulates about how much time error per day?",
            options: ["0.002 seconds", "1.7 seconds", "17 seconds", "One minute"],
            answer: 1,
            explain: "20 × 10⁻⁶ × 86,400 s ≈ 1.7 seconds — fine for a wristwatch, fatal for a network.",
          },
        ],
      },
    ],
  },
]
