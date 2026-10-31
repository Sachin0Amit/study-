/**
 * Knowledge Universe — Physics — Chapter 03: Physics of Everyday Phenomena
 * 1 lesson · ~1,204 words
 * field: Physics of Everyday Phenomena
 * legacy sources: physical-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Physics of Everyday Phenomena]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 phys-acoustics-sound-spaces — Room Acoustics: Why Spaces Sound the Way They Do
 */
import type { KnowledgeTopic } from '../../types'

export const physicsUnifiedCh03: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'phys-acoustics-sound-spaces',
    title: 'Room Acoustics: Why Spaces Sound the Way They Do',
    domain: 'Physical Sciences',
    field: 'Physics of Everyday Phenomena',
    branch: 'Waves & Sound',
    tier: 'intermediate',
    concepts: [
      'Rooms as resonators with their own modes',
      'Room modes and boomy bass',
      'Reverberation time and Sabine\'s law',
      'Designing speech clarity versus concert warmth',
      'Diffusion, bass traps and studio geometry',
      'Isolation through mass, seals and decoupling',
      'Noise control along the path',
    ],
    words: 1204,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Clap once in an empty room and listen to the tail of sound that follows. That afterglow — and everything about why a concert hall wraps you in music while a gymnasium smears it into mud — is physics: sound waves obeying geometry, interference and decay. Acoustics treats rooms and instruments as resonating systems with measurable numbers. This intermediate lesson follows sound from a vibrating surface to your ear: pressure waves, standing waves and resonance, the modes and reverberation that shape every enclosed space, the harmonics that give each instrument its voice, and the decibel scale used to police noise.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Room acoustics decide whether a classroom is intelligible and a concert thrilling — and they are quantified engineering. Sabine\'s one-line formula turns absorption area into reverberation time, the number that building codes and hall designers actually target.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Sound is a longitudinal wave: a traveling pattern of compressions and rarefactions in air. Its speed depends on the medium — about 343 meters per second in warm room air, 1,480 in water and over 5,000 in steel — while its frequency sets pitch and its pressure amplitude sets loudness. Human hearing spans roughly 20 hertz to 20 kilohertz. Loudness is measured logarithmically in decibels (60 dB marks a conversation, 120 the threshold of pain) — the intensity scale itself is derived in the Physics subject\u2019s waves chapters; here we spend it, not re-derive it, because rooms and noise laws are where decibels get used.',
      },
      {
        kind: 'para',
        text: 'Confine a wave and reflections interfere with it: at special frequencies the reflected and forward waves lock into standing waves with nodes and antinodes, and air columns and strings resonate accordingly — the Physics subject\u2019s waves chapters derive that machinery for strings and pipes in full, so this lesson takes it as given and asks a different question: what happens when the resonator is the room itself.',
      },
      {
        kind: 'para',
        text: 'That harmonic recipe is the timbre of an instrument — the same 440-hertz A differs on violin, flute and clarinet because their bodies reinforce different harmonics (again, the waves chapters own the physics). What matters here is that every instrument playing into a room hands that recipe to the space, and the space answers with a filter of its own.',
      },
      {
        kind: 'para',
        text: 'Rooms are resonators too. Between parallel hard walls, frequencies that fit a whole number of half-wavelengths — such as 343 divided by twice the room dimension — are reinforced while others are starved; a 4-meter wall span boosts near 43 hertz. These room modes make bass boom at some spots and vanish at others, which is why a speaker sounds different moved a meter and why small, near-cubic rooms are notorious. Studios fight back with non-parallel walls, bass traps and generous absorption.',
      },
      {
        kind: 'para',
        text: 'In 1895 Wallace Clement Sabine, a young Harvard physicist, was handed a lecture hall with hopeless speech and found that sound in a room decays exponentially as reflections lose energy at each surface. He defined reverberation time RT60 — the seconds for sound to fall 60 decibels — and measured that it scales with volume divided by absorption. Speech wants about 0.5 to 1 second; a symphony hall sings at 1.8 to 2.2. Designers shape reflections deliberately: a reflective canopy over a stage returns early sound for loudness, while diffusers scatter late sound so no echo draws attention to itself.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Speed of sound in air',
        latex: 'v \\approx 331 + 0.6\\,T \\ \\text{m/s}',
        meaning: 'Speed at Celsius temperature T; warm air carries sound faster — about 343 m/s at 20 degrees.',
      },
      {
        kind: 'formula',
        name: 'Sabine reverberation formula',
        latex: 'RT_{60} = \\frac{0.161\\,V}{A}',
        meaning: 'Reverberation time in seconds for room volume V in cubic meters and total absorption A in sabins — each surface area times its absorption coefficient.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the reverberation time of a 1,000-cubic-meter lecture auditorium (20 m by 10 m by 5 m), before and after treatment.',
          'Tally the bare room: 200 m² of plaster ceiling and 300 m² of plaster walls at absorption coefficient 0.03 contribute 15 sabins; a 200 m² wood floor at 0.15 adds 30 — total A = 45 sabins.',
          'Apply Sabine: RT60 = 0.161 × 1000 / 45 ≈ 3.6 seconds — every syllable hangs in the air long enough to smear the next.',
          'Treat the room: 60 m² of absorbing panels at coefficient 0.90 add 54 sabins, and 50 m² of fabric seating at 0.70 adds 35, raising A to 134 sabins.',
          'Recompute and conclude: RT60 = 0.161 × 1000 / 134 ≈ 1.2 seconds — inside the 0.8-to-1.5-second band recommended for speech, achieved without rebuilding the hall.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Concert-hall design tunes reverberation and reflection geometry — narrow shoebox halls like Vienna\'s Musikverein remain benchmarks',
          'Recording studios deploy bass traps, angled walls and diffusers so room modes never color a recording',
          'Classroom and open-plan office standards cap reverberation to protect speech intelligibility and learning',
          'Highway barriers, mufflers and machinery mounts attack noise along the source-path-receiver chain',
          'Active noise cancellation synthesizes antiphase sound to cancel low-frequency drone in headphones and aircraft cabins',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Decibels are logarithmic: two 70 dB sources combine to 73 dB, not 140. Absorption inside a room does not stop sound reaching the neighbors — isolation takes mass, airtight seals and decoupled structure. RT60 is a single number averaging all frequencies, while real absorbers work unevenly across the spectrum. And longer reverberation is not automatically worse — what ruins speech can be exactly what makes a symphony ring.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Longitudinal wave', def: 'A wave whose medium oscillates along the direction of travel, as air does for sound.' },
          { term: 'Standing wave', def: 'A fixed pattern of nodes and antinodes formed by interfering reflections, storing energy at resonant frequencies.' },
          { term: 'Room mode', def: 'A standing wave between parallel room surfaces that boosts or starves particular bass frequencies.' },
          { term: 'Reverberation time (RT60)', def: 'Seconds for sound in a room to decay 60 decibels after the source stops.' },
          { term: 'Sabin', def: 'The unit of sound absorption: one square meter of perfectly absorbing surface.' },
          { term: 'Timbre', def: 'The tonal character of a sound, set by the relative strengths of its harmonics.' },
          { term: 'Decibel (dB)', def: 'A logarithmic loudness measure; a tenfold pressure rise adds 20 dB.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Sound travels through air as:',
            options: ['A transverse wave of electric field', 'A longitudinal wave of compressions and rarefactions', 'A stream of particles from the source', 'A change in air temperature'],
            answer: 1,
            explain: 'Air molecules oscillate back and forth along the propagation direction, forming pressure peaks and troughs.',
          },
          {
            q: 'Sabine\'s formula RT60 = 0.161 V/A says reverberation:',
            options: ['Grows with added absorption', 'Falls as absorption rises and grows with room volume', 'Depends only on ceiling height', 'Is the same for every room shape'],
            answer: 1,
            explain: 'Absorption A sits in the denominator, volume in the numerator — the two levers a designer can pull.',
          },
          {
            q: 'A violin and a flute playing the same note sound different because:',
            options: ['They play slightly different fundamentals', 'Their harmonic amplitude recipes differ', 'Flutes produce no harmonics', 'Violins play louder by physics'],
            answer: 1,
            explain: 'Both share a fundamental, but their bodies reinforce different overtones — the recipe the ear hears as timbre.',
          },
          {
            q: 'A small room booms at certain bass notes because:',
            options: ['The speakers are defective', 'Room modes — standing waves between parallel walls reinforce fitting frequencies', 'Bass travels slower than treble', 'High frequencies are absorbed by air'],
            answer: 1,
            explain: 'Only frequencies fitting whole half-wavelengths between surfaces resonate, making some notes thunder and neighbors vanish.',
          },
        ],
      },
    ],
  },
]
