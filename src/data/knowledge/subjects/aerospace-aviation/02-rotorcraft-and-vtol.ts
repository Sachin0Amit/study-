/**
 * Knowledge Universe — Aerospace & Aviation — Chapter 02: Rotorcraft & VTOL
 * 1 lesson · ~1,335 words
 * field: Aerospace Engineering
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Rotorcraft and VTOL]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 aero-helicopters-drones — Helicopters, Drones and Flying Without a Runway
 */
import type { KnowledgeTopic } from '../../types'

export const aerospaceAviationCh02: KnowledgeTopic[] = [
  {
    id: 'aero-helicopters-drones',
    title: 'Helicopters, Drones and Flying Without a Runway',
    domain: 'Engineering',
    field: 'Aerospace Engineering',
    branch: 'Rotorcraft and VTOL',
    tier: 'intermediate',
    concepts: [
      'A rotor is a rotating wing',
      'Torque reaction and the tail rotor',
      'Collective, cyclic and pedals',
      'The swashplate: tilting a spinning wing',
      'Quadcopters: control by differential thrust',
      'Autorotation and the power-off landing',
    ],
    words: 1335,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'An airplane\'s wing must be moving through the air to work, which is why runways exist — miles of concrete spent buying the airflow a wing needs. A helicopter refuses the bargain: its wings are blades bolted to a spinning shaft, making their own airspeed on the spot. Hover, however, is bought with torque reactions, elaborate controls and mechanical cleverness — and the quadcopter throws most of that away for a different trick entirely. This intermediate Aerospace Engineering topic covers rotorcraft and how drones fly without runways.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Runway independence is why helicopters land on hospital roofs and drones inspect bridges. The rotor teaches the deepest lesson in flight control — trading mechanical complexity for agility — and the quadcopter its inversion: trading mechanical simplicity for computational necessity. Every eVTOL air taxi now in certification sits between these poles.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'As the aerodynamics lesson established, a wing makes lift by turning airflow downward — and the rotor simply performs that trick while spinning. Each blade is a long, slender airfoil whose rotation supplies airspeed even when the aircraft hangs motionless: a 10-meter rotor turning at 250 rpm moves its blade tips past 130 m/s — jet-cruise speed — while the machine itself goes nowhere. Changing the pitch of all blades together changes the lift, the rotary equivalent of a wing\'s angle of attack. In forward flight the advancing blade sees its rotation plus the aircraft\'s speed while the retreating blade sees rotation minus it, and hinged, flapping blades even out that dissymmetry of lift.',
      },
      {
        kind: 'para',
        text: 'Newton\'s third law taxes the spin: the torque that turns the rotor one way tries to yaw the fuselage the other. The classic cure is a tail rotor — a small propeller on the end of the boom thrusting sideways, its pitch controlled by the pedals, doubling as the yaw control. The alternatives are instructive: coaxial designs stack two counter-rotating rotors so the torques cancel (Kamov), the Chinook\'s tandem rotors spin opposite ways for the same reason, and NOTAR replaces the blades with a ducted jet of air.',
      },
      {
        kind: 'para',
        text: 'A helicopter pilot flies with three simultaneous inputs. The collective lever changes all blade pitches together for climb and descent, with a twist-grip throttle keeping rotor speed as the load changes. The cyclic stick tilts the rotor disc — and with it the thrust vector — to move the aircraft in any direction. The pedals manage tail-rotor thrust for heading. Hovering is a continuous, small-corrections negotiation among all three, which is why helicopter ratings are earned slowly.',
      },
      {
        kind: 'para',
        text: 'The swashplate is the mechanical computer that makes the cyclic possible: two stacked rings around the shaft, one stationary and one rotating with the rotor, linked by bearings. Tilting the assembly changes each blade\'s pitch once per revolution — a blade takes a bigger bite on one side of the disc and a smaller bite on the other, generating more lift there — and gyroscopic precession carries the effect around ninety degrees of rotation, which designers simply build in. No electronics: a 1911 idea still flying every day.',
      },
      {
        kind: 'para',
        text: 'A quadcopter swaps all of it for four fixed-pitch propellers and speed control. Two spin clockwise, two counterclockwise, so the torques cancel; to pitch, the flight controller slows the front pair and speeds the rear, tipping the airframe so the fixed thrust vectors point partly forward. Roll works the same laterally, and yaw comes from deliberately unbalancing the clockwise and counterclockwise torques. There is nothing to tilt but the aircraft itself — which demands instant thrust changes, hence electric motors, and constant stabilization by the feedback logic of the control-systems lesson. A human alone cannot fly one: the electronics are not an aid but the pilot.',
      },
      {
        kind: 'para',
        text: 'When the engine quits, a wing glides and a rotor autorotates: the pilot lowers the collective and lets the descent drive air up through the disc, which keeps the blades turning the way a maple seed\'s do. Near the ground, one decisive pull of the collective trades the rotor\'s stored rotational energy for a final cushion of lift. Quadcopters have no such trick — a multicopter\'s motors hold it up every second, which is why battery endurance hovers near half an hour and why eVTOL designs bolt on wings and cruise propellers for efficient forward flight.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: why does a quadcopter move forward by slowing its front motors rather than tilting its propellers?',
          'Recall the governing ideas: the propellers are fixed-pitch with thrust fixed along the frame\'s vertical axis; the only way to point thrust sideways is to tilt the whole aircraft; motor speeds are the sole control variable.',
          'Apply: the flight controller speeds up the rear pair and slows the front pair, keeping total thrust roughly equal to weight. Thrust on the rear grows and on the front shrinks, producing a nose-down pitch moment; the frame tips a few degrees, and the thrust vector — still near the aircraft\'s weight in magnitude — now points partly forward, its horizontal component T·sin(θ) accelerating the drone.',
          'State the result: translation achieved purely by adding and subtracting four thrusts, held steady by gyro feedback — no swashplate, no variable pitch, at the cost of constant electronic supervision.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Camera drones inspect bridges, turbines and flare stacks where scaffolding would cost fortunes.',
          'Medevac helicopters land at hospital rooftops — the entire point of runway independence.',
          'Agricultural drones map and spray field strips with centimeter-positioned differential-thrust flight.',
          'eVTOL air-taxi prototypes combine multicopter hover with wing-borne cruise, betting on both regimes.',
          'Heavy-lift helicopters place power-line towers and fight fires with a hook and a long line.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three confusions recur. Calling the rotor a propeller: a propeller is an airscrew aimed along the flight path, while the rotor is a rotating wing aimed at the sky — though the tail rotor, ironically, is a propeller. Assuming hover is efficient: a multicopter spends its battery fighting gravity directly, which is why wings exist. And trusting the drone to know better: the flight controller holds the angles, but obstacles, wind and the vortex-ring state of descending into its own downwash remain the operator\'s problem.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Rotor', def: 'The powered rotating-wing assembly providing a helicopter\'s lift and propulsion.' },
          { term: 'Collective', def: 'The control changing all blade pitches together for climb and descent.' },
          { term: 'Cyclic', def: 'The control tilting the rotor disc and its thrust vector for translation.' },
          { term: 'Swashplate', def: 'The tilted bearing assembly varying each blade\'s pitch once per revolution.' },
          { term: 'Anti-torque', def: 'Tail rotor, coaxial or tandem schemes canceling the engine\'s torque reaction.' },
          { term: 'Differential thrust', def: 'Quadcopter control by independently varying motor speeds to create moments.' },
          { term: 'Autorotation', def: 'Gliding descent in which upward airflow keeps the rotor turning without engine power.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The tail rotor exists chiefly to:',
            options: [
              'Add forward thrust',
              'Counter the torque reaction trying to spin the fuselage',
              'Cool the engine',
              'Lift the tail in cruise',
            ],
            answer: 1,
            explain: 'Newton\'s third law: torque spinning the rotor one way yaws the airframe the other, so a sideways thruster cancels it.',
          },
          {
            q: 'A quadcopter pitches forward by:',
            options: [
              'Tilting its propellers mechanically',
              'Slowing the front motors and speeding the rear pair',
              'Reversing all motors',
              'Spinning faster overall',
            ],
            answer: 1,
            explain: 'Differential thrust creates a nose-down moment; the tilted thrust vector then pulls the aircraft forward.',
          },
          {
            q: 'The swashplate makes the cyclic possible by:',
            options: [
              'Changing engine rpm',
              'Varying blade pitch once per revolution so the disc tilts',
              'Feathering the tail rotor',
              'Shifting the battery',
            ],
            answer: 1,
            explain: 'Each blade gets more bite on one side of the disc and less on the other — lift asymmetry tilts the rotor.',
          },
          {
            q: 'In autorotation the blades keep turning because:',
            options: [
              'The engine idles',
              'The descent drives air up through the rotor',
              'The tail rotor back-drives them',
              'Stored battery energy spins them',
            ],
            answer: 1,
            explain: 'Upward-flowing air through the disc does the engine\'s job, storing rotational energy for the landing flare.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read after the aerodynamics and feedback-control lessons — both are load-bearing here. Natural next steps: helicopter vibration modes and rotor dynamics, eVTOL transition between hover and cruise, and the aviation lessons on instruments and air traffic for the operating environment.',
        tone: 'path',
      },
    ],
  },
]
