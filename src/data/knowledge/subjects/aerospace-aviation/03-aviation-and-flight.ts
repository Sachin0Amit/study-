/**
 * Knowledge Universe — Aerospace & Aviation — Chapter 03: Aviation & Flight
 * 2 lessons · ~2,379 words
 * field: Aviation & Flight
 * legacy sources: technology-applied.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Aviation & Flight]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 avi-flight-instruments — Flight Instruments and the Anatomy of a Cockpit
 *   03.2 avi-air-traffic-control — How Air Traffic Control Keeps the Skies Orderly
 */
import type { KnowledgeTopic } from '../../types'

export const aerospaceAviationCh03: KnowledgeTopic[] = [
  {
    id: 'avi-flight-instruments',
    title: 'Flight Instruments and the Anatomy of a Cockpit',
    domain: 'Technology & Applied Science',
    field: 'Aviation & Flight',
    branch: 'Flight Operations',
    tier: 'core',
    concepts: [
      'Why the senses cannot be trusted in cloud',
      'Pitot-static plumbing: airspeed and altitude',
      'The altimeter and its barometric setting',
      'Gyros: the artificial horizon and heading',
      'Turn rate, the ball and vertical speed',
      'Glass cockpits: the same six, one screen',
    ],
    words: 1197,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Take a competent pilot into cloud and the inner ear begins to lie: without a visible horizon, a slow coordinated turn feels like straight-and-level flight, and the graveyard spiral — descending in an ever-tightening bank the pilot believes is level — has killed aviators since the first biplanes. The cure is instrument flight, and the classic cockpit presents six round dials, three fed by air pressure and three by gyroscopes. This core Aviation & Flight topic covers what each instrument physically measures and why trust belongs to the gauges, not the gut.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'These six dials are why airliners land in fog and small aircraft survive dark nights. Every drone, airliner and flight simulator measures the same quantities — attitude, speed, altitude, climb rate, heading, turn — because a pilot in cloud needs exactly these and nothing else to stay alive.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The six-pack arranges two rows of three: airspeed, attitude and altitude on top; turn coordinator, heading and vertical speed below. The instrument scan — eyes stepping from gauge to gauge in a practiced pattern — is the instrument pilot\'s fundamental skill, and every reading is cross-checked against another before it is believed. The organizing fact is plumbing: three instruments drink from the pitot-static system, three from spinning gyroscopes or their solid-state equivalents.',
      },
      {
        kind: 'para',
        text: 'The pitot tube faces the oncoming air and catches total pressure; static ports on the fuselage side sample the still, ambient pressure. The airspeed indicator is simply the difference between the two — dynamic pressure — with a dial that translates pressure into knots. Because it measures pressure rather than speed, its markings are honest at only one air density, and the color arcs carry the operating rules: white for flap range, green for normal, yellow for caution, a red line for never-exceed speed.',
      },
      {
        kind: 'para',
        text: 'The altimeter is a barometer: a sealed aneroid capsule expands as static pressure falls with altitude, and gears move the hands. It reads correctly only if its Kollsman window is set to the current local barometric reference — pressure drops roughly one inch of mercury per thousand feet, so a wrong setting translates directly into a wrong altitude, hundreds of feet at a time. "High to low, look out below" is the mnemonic for flying into falling pressure with yesterday\'s setting. The vertical speed indicator differentiates the same static pressure into climb and descent in feet per minute, lagging reality by a few seconds.',
      },
      {
        kind: 'para',
        text: 'The gyro instruments hold a reference the eye has lost. The attitude indicator spins a gyro to keep an artificial horizon: the little airplane\'s wings tilt against it to show pitch and bank directly — the closest thing to a window on a dark night. The heading indicator is gyro-driven because the magnetic compass stumbles in turns and turbulence; but gyros precess, so the heading must be reset against the compass every fifteen minutes or so, or slaved to it automatically.',
      },
      {
        kind: 'para',
        text: 'The turn coordinator shows rate of turn — standard rate is three degrees per second, a full circle in two minutes, marked on the face for both directions — and its inclinometer ball reports coordination: a ball outside its center means a slip or skid, and the pilot steps on the ball with rudder. In cloud, the ball and the seat of the pants disagree loudly, which is precisely why the pilot flies the instruments instead.',
      },
      {
        kind: 'para',
        text: 'A modern glass cockpit collapses the six into a primary flight display: attitude in the center, airspeed tape on the left, altitude and vertical speed on the right, heading strip along the top, all driven by solid-state air-data computers and attitude sensors with redundancy. The pixels change; the quantities do not. A pilot who learned the round dials reads the glass at a glance, and vice versa.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a pilot levels at 3,000 ft indicated, altimeter set to 29.92, but the local altimeter setting broadcast on the weather channel is 30.12 — what is the true altitude?',
          'Recall the governing idea: one inch of mercury is roughly a thousand feet, and an altimeter set too low reads too high.',
          'Apply: the setting error is 30.12 - 29.92 = 0.20 inHg, or about 200 ft. The instrument assumes the pressure is lower than it really is, so it interprets the aircraft as higher: true altitude is about 2,800 ft.',
          'State the result: the aircraft is 200 ft lower than the pilot believes — over a 2,900 ft ridge, the margin is gone. Hence the ritual of resetting the Kollsman window to the local setting before every descent.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Student pilots drill the instrument scan before their first solo cross-country in haze.',
          'Airline crews fly entire sectors on instruments in the dark above the weather.',
          'Glass-cockpit trainers teach the same six quantities on one screen before any steam gauge.',
          'Drone flight controllers fuse barometer, gyroscope and satellite data to estimate the same attitude and altitude.',
          'Home flight simulators reproduce the six-pack so pilots can practice partial-panel failures safely.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The lethal one is trusting the body over the needles — every instrument instructor\'s warning, and the root of most weather accidents. A mis-set altimeter is quiet and deadly, which is why the setting is broadcast and read back. Ice in the pitot tube makes the airspeed unreliable with no warning flag, a lesson written in airline accidents. And gyro precession left unchecked turns the heading indicator into a slow liar.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Pitot tube', def: 'A forward-facing probe capturing total pressure for the airspeed system.' },
          { term: 'Static port', def: 'A flush hole sampling undisturbed ambient pressure for airspeed, altitude and climb rate.' },
          { term: 'Airspeed indicator', def: 'A differential-pressure gauge displaying dynamic pressure as knots, with color arcs for limits.' },
          { term: 'Kollsman window', def: 'The altimeter\'s setting window for the local barometric reference.' },
          { term: 'Attitude indicator', def: 'A gyro instrument displaying pitch and bank against an artificial horizon.' },
          { term: 'Standard-rate turn', def: 'Three degrees per second — a full 360 degrees in two minutes.' },
          { term: 'Inclinometer', def: 'The ball in the turn coordinator that reports slips and skids.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The airspeed indicator actually measures:',
            options: ['Speed through the air directly', 'Dynamic pressure: pitot total minus static', 'Static pressure only', 'Engine thrust'],
            answer: 1,
            explain: 'The dial converts the difference between ram and ambient pressure into knots at standard density.',
          },
          {
            q: 'A standard-rate turn completes a full 360 degrees in:',
            options: ['One minute', 'Two minutes', 'Four minutes', 'Thirty seconds'],
            answer: 1,
            explain: 'Standard rate is three degrees per second, which is why the turn coordinator is often called a two-minute instrument.',
          },
          {
            q: 'Flying from a high-pressure area into a low-pressure area without resetting the altimeter makes indicated altitude read:',
            options: ['Lower than true altitude', 'Higher than true altitude', 'Unchanged', 'Zero'],
            answer: 1,
            explain: 'Falling ambient pressure fools the instrument into reporting extra altitude — the aircraft is lower than it reads.',
          },
          {
            q: 'The instrument that shows pitch and bank relative to the horizon is the:',
            options: ['Turn coordinator', 'Heading indicator', 'Attitude indicator', 'Vertical speed indicator'],
            answer: 2,
            explain: 'The artificial horizon is the single most important gyro instrument in cloud.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read after the aerodynamics lesson for why speed and altitude matter at all. Natural next steps: radio navigation and satellite approaches, the V-speeds and stall margin of the flight envelope, and how crews manage instrument failures.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'avi-air-traffic-control',
    title: 'How Air Traffic Control Keeps the Skies Orderly',
    domain: 'Technology & Applied Science',
    field: 'Aviation & Flight',
    branch: 'Air Traffic',
    tier: 'core',
    concepts: [
      'IFR versus VFR: two rulebooks, one sky',
      'Airspace classes from A to G',
      'The clearance: permission with instructions',
      'Separation minima: the invisible buffers',
      'Radar, transponders and ADS-B',
      'One flight through the whole system',
    ],
    words: 1182,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'On any given day the world\'s controllers thread tens of thousands of flights through shared sky — airliners at 500 knots, trainers at 90, medevac helicopters descending urgently — without a single stop sign overhead. Air traffic control manages it with three tools: a map of airspace divided into classes, the clearance that admits each aircraft with instructions attached, and separation minima enforced by radar. This core Aviation & Flight topic covers the classes from A to G, the vocabulary of clearances, and one flight\'s journey through the system from clearance delivery to the tower.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The same architecture — zones, permissions, spacing buffers — runs harbor traffic, drone corridors and even version-control merges. Understanding it explains why your flight holds, why the captain says "we have a short delay for flow control," and why the deadliest aviation accidents historically happened on runways, not in cruise.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Two rulebooks share the sky. Visual flight rules (VFR) demand stated visibility and cloud-clearance distances and put the burden of seeing and avoiding on the pilot. Instrument flight rules (IFR) allow flight through weather with no view at all — and in exchange, the controller becomes responsible for separating the aircraft from everything else. Airliners fly IFR essentially always; a weekend Cessna may fly VFR in fair weather and file IFR when the clouds lower.',
      },
      {
        kind: 'para',
        text: 'Airspace is layered by busyness. Class A covers the high stratum from 18,000 to 60,000 feet: IFR only, every flight cleared and separated. Class B caps the busiest airports like an upside-down wedding cake, often 30 nautical miles wide and up to 10,000 feet, and no aircraft — VFR or IFR — enters without a specific clearance. Class C and D surround smaller towered airports and require two-way radio. Class E is controlled airspace for IFR elsewhere; Class G is the uncontrolled remainder close to the ground.',
      },
      {
        kind: 'para',
        text: 'A clearance is permission with instructions attached: route, altitude, sometimes a heading and a transponder code. "Cleared to the destination airport as filed, climb and maintain 6,000, squawk 4521" is a complete contract once the pilot reads it back — and the readback is the legal moment of agreement. VFR pilots can also request flight following: radar traffic advisories while they keep their own see-and-avoid duty.',
      },
      {
        kind: 'para',
        text: 'Separation minima are the buffers that keep metal apart. Under terminal radar the target is three nautical miles laterally or a thousand feet vertically; en route it is five miles; over oceans, beyond radar range, aircraft cross pre-booked tracks separated procedurally by altitude and timing. Wake turbulence adds buffers behind heavy jets. The minima shrink where surveillance is trusted — reduced vertical separation allows thousand-foot stacking in cruise bands where every aircraft carries certified altitude-reporting equipment.',
      },
      {
        kind: 'para',
        text: 'Radar comes in two species. Primary radar bounces off the aircraft skin and shows only a blip. Secondary surveillance radar interrogates each aircraft\'s transponder, which replies with its four-digit squawk code and — in Mode C — its pressure altitude, painting the data tag the controller actually works. ADS-B, now mandated across much of the world, goes further: aircraft broadcast satellite-derived position themselves, filling radar gaps over oceans and deserts and feeding the traffic displays in cockpits.',
      },
      {
        kind: 'para',
        text: 'Follow one flight. On the ramp the crew calls clearance delivery, then ground control for taxi, then the tower for takeoff. Departure control vectors it away from the airport and hands it to a center sector — one of dozens of shelves of sky — each controller passing the flight onward with a new frequency. On arrival the sequence reverses: center, approach (merging streams onto final), tower, ground. Handoffs, not heroics: every "contact departure, good day" is the system breathing.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a VFR pilot on a cross-country wants to cross the Class B shelf above a major airport at 4,500 ft.',
          'Recall the governing ideas: Class B admits no aircraft without a specific clearance; the pilot must hear the words before entering; the controller\'s willingness depends on the day\'s traffic.',
          'Apply: the pilot calls approach with callsign, position, altitude and request — over the reservoir at four thousand five, requesting a Bravo transition westbound. Approach may answer "cleared through the Bravo" with altitude restrictions, or vector the flight around; if the frequency is saturated with airliners, the practical choice is to descend and skirt the shelf.',
          'State the result: with the clearance heard and read back, the crossing is legal and controller-sequenced; without it, the same track is a violation — the difference a single sentence makes.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Airline dispatchers file flight plans hours ahead, and traffic-management systems meter departures when weather shrinks capacity.',
          'Controllers worldwide use ICAO-standardized phraseology so a sentence means the same in Osaka or Chicago.',
          'ADS-B surveillance now tracks aircraft across oceans and deserts where radar never reached.',
          'Weekend pilots request flight following for radar traffic advisories on busy sightseeing routes.',
          'Drone corridors and UTM prototypes extend the same classes-and-clearances thinking to low altitude.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The dangerous habits: paraphrasing a clearance instead of reading it back — and hearing what you expected rather than what was said; blundering into Class B while heads-down on a tablet; treating see-and-avoid as sufficient in haze, where a 500-knot closure gives seconds; and forgetting the emergency squawks 7500, 7600 and 7700, which summon help faster than any radio call.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'IFR', def: 'Instrument flight rules — flight by instrument reference, with controllers responsible for separation.' },
          { term: 'VFR', def: 'Visual flight rules — flight by outside reference with specified visibility and cloud clearance.' },
          { term: 'Class B airspace', def: 'The controlled airspace crowning the busiest airports; entry requires a specific clearance.' },
          { term: 'Clearance', def: 'ATC authorization to proceed under stated conditions — route, altitude, squawk.' },
          { term: 'Separation minima', def: 'The minimum lateral, longitudinal or vertical buffers controllers must keep between aircraft.' },
          { term: 'Transponder', def: 'The onboard set that replies to radar interrogations with a squawk code and altitude.' },
          { term: 'Flight following', def: 'Optional radar traffic advisories for VFR aircraft, who keep their own separation duty.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which class of airspace requires its own clearance for every aircraft, VFR included?',
            options: ['Class E', 'Class G', 'Class B', 'Class D'],
            answer: 2,
            explain: 'The busiest terminal airspace admits nobody — airline or Cessna — without hearing "cleared into Class B."',
          },
          {
            q: 'Standard terminal radar separation minima are about:',
            options: ['3 nautical miles laterally or 1,000 feet vertically', '10 nautical miles', '100 feet vertically', 'Half a mile'],
            answer: 0,
            explain: 'Three miles in the terminal environment, five en route, with a thousand feet as the standard vertical buffer.',
          },
          {
            q: 'A Mode C transponder adds what to the controller\'s radar picture?',
            options: ['The aircraft callsign', 'Pressure altitude', 'Fuel state', 'Passenger count'],
            answer: 1,
            explain: 'Mode C reports altitude, which is what makes thousand-foot vertical separation workable.',
          },
          {
            q: 'Under VFR flight following, responsibility for seeing and avoiding other traffic remains with:',
            options: ['The controller', 'The pilot', 'Approach control only', 'No one'],
            answer: 1,
            explain: 'Advisories are a courtesy layer; VFR separation duty stays with the pilot\'s eyes.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read alongside the flight-instruments lesson — IFR flight is exactly what the controllers are sequencing. Natural next steps: radio navigation and instrument approaches, the weather theory that routes flights around it, and human-factors research on controller workload.',
        tone: 'path',
      },
    ],
  },
]
