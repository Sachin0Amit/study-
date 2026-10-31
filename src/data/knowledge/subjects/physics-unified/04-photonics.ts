/**
 * Knowledge Universe — Physics — Chapter 04: Photonics
 * 1 lesson · ~1,167 words
 * field: Photonics
 * legacy sources: technology-applied.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Photonics]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 tech-fiber-optics — Fiber Optics: Light in a Pipe
 */
import type { KnowledgeTopic } from '../../types'

export const physicsUnifiedCh04: KnowledgeTopic[] = [
  {
    id: 'tech-fiber-optics',
    title: 'Fiber Optics: Light in a Pipe',
    domain: 'Technology & Applied Science',
    field: 'Photonics',
    branch: 'Optical Engineering',
    tier: 'intermediate',
    concepts: [
      'Total internal reflection',
      'Core, cladding and numerical aperture',
      'Single-mode versus multimode fibre',
      'Dispersion: the pulse-stretcher',
      'Attenuation and the 1550 nm window',
      'Amplifiers and undersea systems',
    ],
    words: 1167,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'A single optical fibre thinner than a human hair carries more information than a copper cable as thick as your arm, using pulses of light that bounce their way along a thread of glass for kilometres without escaping. The trick is not exotic: it is the same total internal reflection that makes a swimming pool\u2019s surface look like a mirror from below. Refined glass, precise geometry and a few decades of engineering turned that curiosity into the backbone of the internet — nearly every byte you fetch crosses glass somewhere.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Video calls, cloud computing, the modern financial system — all ride fibres. The physics here decides the internet\u2019s reach: how far light survives, how fast pulses can follow one another, and why particular wavelengths became real estate more valuable than any city block.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Light crossing from glass toward air bends away from the perpendicular; steepen the angle and eventually refraction fails entirely — beyond the critical angle, every photon reflects back into the glass, losing almost nothing. A fibre exploits this forever: a core of ultrapure glass sheathed in cladding of slightly lower refractive index, so light launched within the acceptance cone ricochets along at glancing angles on total, essentially lossless reflection.',
      },
      {
        kind: 'para',
        text: 'The cladding is not packaging — it is half the physics. Its lower index makes reflection possible, and the size of the index step sets the critical angle and thus the cone of rays the fibre accepts, quantified as the numerical aperture. Counter-intuitively, a fatter core is not a better fibre: it admits more ray paths, and rays travelling different path lengths arrive at different times.',
      },
      {
        kind: 'para',
        text: 'Multimode fibre, its core about 50 micrometres across, accepts many ray paths — easy to feed with cheap transmitters, but the modes arrive at slightly different times and smear sharp pulses into mush within a few hundred metres. Single-mode fibre narrows the core to roughly 9 micrometres, comparable to the wavelength itself, so only one propagation mode survives. Harder to launch light into, but pulses keep their shape for hundreds of kilometres — the long-haul standard.',
      },
      {
        kind: 'para',
        text: 'Two clocks conspire to stretch every pulse. Modal dispersion — different path lengths — rules multimode until single-mode removes it. Chromatic dispersion remains: blue-leaning photons travel marginally slower than red-leaning ones in the same glass, so any pulse built from a spread of wavelengths spreads as it goes. Operators buy lasers with hairline spectral purity and splice in compensating fibre to cancel the residue.',
      },
      {
        kind: 'para',
        text: 'Glass absorbs and scatters, but astonishingly little: scattering falls steeply with wavelength, and decades of purifying away water ions opened clean windows. The best sits near 1550 nanometres, where premium fibre loses only about 0.2 decibels per kilometre — half the light still arriving after fifteen. That window is the reason the entire amplification chain was engineered to match it.',
      },
      {
        kind: 'para',
        text: 'Every 60 to 100 kilometres, an erbium-doped fibre amplifier re-boosts the light — every wavelength-division channel at once — without ever converting to electricity. Undersea cables chain these across oceans, drawing power from a constant current on a conductor inside the cable and moving terabits per fibre between continents. Even light has limits with consequences: crossing the Atlantic takes the signal nearly thirty milliseconds, a latency floor no protocol can beat.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Critical angle',
        latex: '\\sin\\theta_c = \\frac{n_2}{n_1}',
        meaning: 'Total internal reflection begins at the critical angle, set by the ratio of cladding index to core index.',
      },
      {
        kind: 'formula',
        name: 'Attenuation in decibels',
        latex: 'A_{dB} = 10\\log_{10}\\left(\\frac{P_{in}}{P_{out}}\\right) = \\alpha L',
        meaning: 'Loss adds linearly with length: 3 dB is half the power, 10 dB is one-tenth, 20 dB is one percent.',
      },
      {
        kind: 'formula',
        name: 'Channel capacity',
        latex: 'C = B\\,\\log_{2}(1 + \\mathrm{SNR})',
        meaning: 'The Shannon ceiling on a channel of bandwidth B — one reason narrowband lasers and clean amplifiers pay off.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the received power after 80 km of fibre at 0.2 dB/km with two splices of 0.3 dB each, given 1 mW launched, and the amplifier gain needed to restore it.',
          'Recall the governing idea: decibel losses add — total loss equals αL plus splice losses — and each 10 dB divides power by ten.',
          'Apply: fibre loss is 0.2 × 80 = 16 dB, and the splices add 0.6 dB, for 16.6 dB total. P_out = 1 mW × 10^(−16.6/10) ≈ 0.022 mW, about 22 microwatts.',
          'State the result: roughly 2 percent of the launch power arrives — and an erbium amplifier with 20 dB of gain (×100) would lift the signal back above 2 mW for the next span.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Transoceanic cables carrying the internet between continents',
          'Fibre-to-the-home networks delivering gigabit access over the last kilometre',
          'Data-centre fabrics linking thousands of servers with parallel optical lanes',
          'Endoscopes and fibre sensors that measure strain and temperature by reflected light',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "Decibels add when instinct multiplies — a 3 dB loss is not 'a bit' but half the photons. Multimode and single-mode are not interchangeable: connectors and transceivers are colour-coded because mixing them wrecks power budgets. And connector hygiene rules the craft — a single fingerprint on a ferrule end can dwarf an entire span's attenuation.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Total internal reflection', def: 'Complete reflection at a boundary when light in the denser medium strikes beyond the critical angle.' },
          { term: 'Cladding', def: 'The lower-index glass wrapped around the core that makes reflection possible.' },
          { term: 'Numerical aperture', def: 'The size of the cone of rays a fibre can accept, set by the index difference.' },
          { term: 'Modal dispersion', def: 'Pulse spreading from ray paths of different lengths in multimode fibre.' },
          { term: 'Chromatic dispersion', def: 'Pulse spreading because different wavelengths travel at different speeds in glass.' },
          { term: 'Attenuation', def: 'Loss of light power with distance, measured in decibels per kilometre.' },
          { term: 'EDFA', def: 'Erbium-doped fibre amplifier — boosts light directly, without electronics.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Total internal reflection at the core-cladding boundary requires that:',
            options: [
              'light travel from lower to higher index',
              'the core index exceed the cladding index and the ray angle exceed critical',
              'the fibre be perfectly straight',
              'the cladding be metallic',
            ],
            answer: 1,
            explain: 'The index step sets the critical angle; only rays steeper than it stay trapped and guided.',
          },
          {
            q: 'Single-mode fibre beats multimode for long hauls mainly because:',
            options: [
              'it is cheaper per metre',
              'only one propagation mode exists, so there is no modal dispersion',
              'it carries visible light',
              'it needs no cladding',
            ],
            answer: 1,
            explain: 'A 9-micrometre core admits a single mode, so pulses keep their shape for hundreds of kilometres.',
          },
          {
            q: 'A 0.2 dB/km fibre run of 50 km attenuates the signal by:',
            options: ['0.2 dB', '5 dB', '10 dB', '100 dB'],
            answer: 2,
            explain: '0.2 × 50 = 10 dB — one-tenth of the launched power arriving.',
          },
          {
            q: 'The 1550 nm window is prized because:',
            options: [
              'glass is close to its most transparent there',
              'it is visible to the eye',
              'copper conductors pair naturally with it',
              'lasers do not exist at other wavelengths',
            ],
            answer: 0,
            explain: 'Scattering falls with wavelength and the water-absorption peaks sit elsewhere — 0.2 dB/km is the practical floor.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: "Snell's law and geometric optics carry you through the ray picture; the wave picture needs Fourier thinking. Follow with wavelength-division multiplexing, coherent detection that revived capacity growth, and the semiconductor lasers that make the light in the first place.",
        tone: 'path',
      },
    ],
  },
]
