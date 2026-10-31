/**
 * Knowledge Universe — Music — Chapter 03: Music Production
 * 1 lesson · ~1,214 words
 * field: Music Production
 * legacy sources: arts-culture.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Music Production]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 prod-daw-recording-mixing — Music Production: DAWs, Recording and the Basics of Mixing
 */
import type { KnowledgeTopic } from '../../types'

export const musicCh03: KnowledgeTopic[] = [
  {
    id: 'prod-daw-recording-mixing',
    title: 'Music Production: DAWs, Recording and the Basics of Mixing',
    domain: 'Arts & Culture',
    field: 'Music Production',
    branch: 'The Home Studio',
    tier: 'intermediate',
    concepts: [
      'The DAW: tape machine, console and rack in one',
      'The signal chain and its three levels',
      'Gain staging: headroom before everything',
      'Recording: capture discipline over repair',
      'The mix: balance before treatment',
      'EQ, panning and reverb: placing each sound',
    ],
    words: 1214,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Fifty years ago a studio was a building with a two-inch tape machine, a console the size of a pool table and an hourly rate to match. Today the same multitrack recorder, mixing desk and effects rack live inside a laptop as a digital audio workstation, and a microphone plus an audio interface completes a home studio. This intermediate Music Production topic walks the modern signal chain from vibrating string to finished mix: gain staging, overdubbing, and the EQ, panning and reverb decisions that turn raw tracks into a record.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The tools that cost studios millions now cost less than a guitar, and the workflow is identical at every scale — a podcast, a demo, a film score. What separates a finished-sounding record from a rough one is not gear: it is the order of decisions covered here.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A DAW — Pro Tools, Logic Pro, Ableton Live, REAPER, FL Studio — records audio onto tracks on a timeline, edits non-destructively, and hosts software instruments and processors. Sessions run at 24-bit depth and a 44.1 or 48 kHz sample rate, which is ample dynamic range and bandwidth for any delivery format. Tracks mix through virtual faders, and plugins have replaced the racks of outboard gear. The skill is not the software; it is the order of decisions.',
      },
      {
        kind: 'para',
        text: 'Follow the signal. A vibrating source meets a microphone — or a guitar plugs in direct — and the faint output rides a cable to a preamplifier that raises it to line level; the interface\'s converters then sample it into numbers the DAW stores. Each hop has a level convention: mic level is millivolts, instrument level a little more, line level around a volt. Feeding one into the wrong jack yields either hiss or distortion, so get the chain right once and record for years.',
      },
      {
        kind: 'para',
        text: 'Gain staging is the discipline of leaving headroom at every stage. Set the preamp so a loud passage peaks near -12 to -6 dBFS — near, never touching, the top of the digital meter — because digital clipping flattens the waveform into something no plugin repairs. A steady average around -18 dBFS matches what analog-style gear expects. Record slightly quiet rather than hot: modern noise floors are inaudibly low, and boosting later is free.',
      },
      {
        kind: 'para',
        text: 'Capture discipline outperforms repair. Choose the mic for the job — a dynamic like an SM57 for a loud guitar cabinet, a condenser for a controlled vocal in a treated room — and place it before reaching for anything else: an inch of position change does more than an hour of EQ. Record to a click, keep the takes, and overdub layer by layer while monitoring on headphones. Then comp the best phrases into one performance.',
      },
      {
        kind: 'para',
        text: 'Mixing starts embarrassingly low-tech: pull every fader down and rebalance by ear, in mono, until the song reads — the way a live engineer sets a stage. Fader moves and simple volume automation solve most of a mix; no chain of plugins rescues a balance that never worked. Only when the balance breathes do you reach for processors, one problem at a time, checking against a commercial reference track at matched loudness.',
      },
      {
        kind: 'para',
        text: 'Then the three placement tools. EQ is mostly subtractive: high-pass every track except kick and bass to shed rumble below 80-100 Hz, and notch the 200-400 Hz mud that stacks when tracks double. Panning spreads the field — guitars hard-ish left and right, while kick, bass and lead vocal anchor the center. Reverb and delay ride sends rather than inserts, so several tracks share one coherent space and the wet level stays adjustable. Compressors even out performances and glue buses — after balance, and sparingly.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a fourteen-track demo — drums, bass, two guitars, keys, lead and backing vocals — sounds muddy, and the lead vocal will not sit on top.',
          'Recall the governing ideas: fix balance first, then subtractive EQ, then panning, then shared reverb on a send.',
          'Apply: rebalance faders in mono until the vocal reads. High-pass both guitars at 110 Hz and the vocal at 90 Hz; cut 3 dB at 300 Hz on the vocal to clear a pocket; pan the guitars about 40 percent left and right with keys opposite; create one plate-reverb send at roughly 15 percent wet, feeding snare and vocal only.',
          'State the result: the vocal rides audibly even on a phone speaker, the guitars stop fighting the bass, and the whole record shares one believable room.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Singer-songwriters demo complete arrangements in bedroom studios and release them unchanged.',
          'Podcasters run the identical chain — dynamic mic, preamp, interface — under the same gain-staging rules.',
          'Mixing engineers reference a commercial track at matched loudness throughout to keep perspective honest.',
          'Beatmakers chop samples and program drums on the same 16-step grids covered in the rhythm lesson.',
          'Streamers process their microphones with these exact EQ and compressor moves to sit above game audio.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The classics: recording too hot and clipping the one take that had magic; boosting EQ where cutting would solve the problem; drowning every track in its own inserted reverb instead of one shared send; and mastering loudly while mixing, which hides the balance you are trying to hear. Never call a mix done on one system — check earbuds, laptop speakers and a car first.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'DAW', def: 'Digital audio workstation — the software recorder, editor, mixer and effects host.' },
          { term: 'Gain staging', def: 'Setting healthy levels at every stage of the chain so nothing clips and headroom survives.' },
          { term: 'Headroom', def: 'The margin between normal signal level and the ceiling where distortion begins.' },
          { term: 'dBFS', def: 'Decibels relative to full scale — digital\'s absolute ceiling at 0; healthy peaks sit near -12 to -6.' },
          { term: 'Overdub', def: 'Recording a new part onto the session while listening to the existing tracks.' },
          { term: 'High-pass filter', def: 'An EQ curve removing energy below its cutoff, clearing rumble from non-bass tracks.' },
          { term: 'Send', def: 'A route feeding a track to a shared effect so several tracks share one reverb at one wet level.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Healthy recording peaks in a 24-bit session sit around:',
            options: ['0 dBFS', '-12 to -6 dBFS', '-60 dBFS', '+4 dBu'],
            answer: 1,
            explain: 'Leaving 6-12 dB of headroom below full scale keeps transients from clipping — digital\'s only unforgivable sin.',
          },
          {
            q: 'The first move when opening a raw multitrack mix should be:',
            options: ['Add reverb', 'Master it loudly', 'Balance the faders', 'Boost 10 kHz everywhere'],
            answer: 2,
            explain: 'Balance is the mix; treatments polish a balance that already works, never replace one.',
          },
          {
            q: 'Reverb is usually placed on a send rather than an insert so that:',
            options: [
              'It sounds more vintage',
              'Multiple tracks can share one space and the wet level stays adjustable',
              'The CPU works harder',
              'The DAW allows no other routing',
            ],
            answer: 1,
            explain: 'One shared reverb glues the record into a single room; inserted reverbs smear every track separately.',
          },
          {
            q: 'High-passing an acoustic guitar at 100 Hz primarily removes:',
            options: [
              'String brightness',
              'Rumble and low-frequency mud that steal headroom',
              'Fret noise',
              'Room reflections entirely',
            ],
            answer: 1,
            explain: 'A guitar\'s lowest fundamental sits near 82 Hz; everything below is rumble competing with the bass.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Comfort with the harmony and rhythm lessons helps you speak to musicians. Natural next steps: microphone types and stereo techniques, compression in depth, and acoustics — the one processor you cannot remove from your studio.',
        tone: 'path',
      },
    ],
  },
]
