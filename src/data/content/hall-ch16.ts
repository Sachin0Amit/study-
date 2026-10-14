import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 16
// Waves—I — sections 16-1 … 16-7 (ids hall-ch16-s1 … hall-ch16-s7)
// Core results: y = A sin(kx − ωt + φ), v = √(τ/μ), P = ½μvω²A²,
// the wave equation, interference 2A cos(φ/2), phasors, harmonics nv/2L.
// ============================================================================

export const hallCh16Content: SectionContent[] = [
  // ------------------------------------------------------------------ 16-1
  {
    sectionId: 'hall-ch16-s1',
    readingTime: 7,
    intro: "An earthquake under the ocean floor can lift a wall of water that races across an entire ocean and shatters a shoreline thousands of kilometers away — yet every water molecule stays near home. That is the double nature of a wave: a disturbance that travels through a medium, carrying energy and momentum while the medium itself merely oscillates about equilibrium. This section distinguishes transverse from longitudinal waves and builds the complete mathematical description of the most important case, the sinusoidal wave on a stretched string.",
    objectives: [
      "Distinguish transverse from longitudinal waves and state what a mechanical wave does and does not transport",
      "Read amplitude, wavelength, period, frequency and travel direction from $y(x,t) = A\\sin(kx - \\omega t + \\phi)$",
      "Separate the speed of the pattern, $v = \\lambda f = \\omega/k$, from the transverse speed of a string element, $u = \\omega A$",
    ],
    concepts: [
      {
        term: 'Mechanical wave',
        kind: 'definition',
        statement: "**A mechanical wave is a traveling disturbance of a material medium.** It transports energy and momentum from place to place with no net transport of matter: each element of the medium oscillates about its own equilibrium position while the disturbance — the pattern — moves on.",
        detail: 'Sound, water waves, seismic waves and waves on strings are mechanical; they need matter to travel in. Light and other electromagnetic waves are not mechanical and need no medium — they arrive from the Sun across empty space.',
      },
      {
        term: 'Transverse versus longitudinal',
        kind: 'definition',
        statement: "**In a transverse wave the medium oscillates perpendicular to the direction of travel; in a longitudinal wave it oscillates along that direction.** A wave on a string is transverse (elements move up and down while the wave runs horizontally); sound in air is longitudinal (air elements surge back and forth along the line of travel).",
        detail: 'Earthquake waves come in both kinds: P (primary) waves are longitudinal and outrun the transverse S (secondary) waves, which is why the ground shakes twice.',
      },
      {
        term: 'The sinusoidal wave function',
        kind: 'law',
        statement: "**A sinusoidal wave traveling in the $+x$ direction is** $$y(x,t) = A\\sin(kx - \\omega t + \\phi),$$ with amplitude $A$, angular wave number $k = 2\\pi/\\lambda$, angular frequency $\\omega = 2\\pi/T = 2\\pi f$, and phase constant $\\phi$. The minus sign on $\\omega t$ means travel toward $+x$; a plus sign means $-x$.",
        detail: "At any fixed $x$ the element undergoes simple harmonic motion with period $T$; at any fixed $t$ the string traces a sinusoid in space whose repeat length is the wavelength $\\lambda$ — the distance over which the phase advances by $2\\pi$.",
      },
      {
        term: 'Wave speed is not particle speed',
        kind: 'insight',
        statement: "**The pattern advances at $v = \\lambda f = \\omega/k$, while a string element moves transversely with speed $u = \\omega A$ — two different quantities pointing in different directions.** A wave can sweep along at 20 m/s while no piece of string ever moves faster than a few centimeters per second.",
        detail: 'The pattern speed is fixed by the medium (Section 16-2); the element speed is set by the amplitude. Conflating the two is the classic exam error.',
      },
      {
        term: "Transverse Waves: solution protocol",
        kind: "method",
        statement: "**Solve Transverse Waves problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling and standing waves on a string; the working equation is $y = y_m\\sin(kx-\\omega t+\\phi)$, $v = \\lambda f = \\sqrt{\\tau/\\mu}$, $f_n = nv/2L$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{Hz}$, $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{string}}\\sim 10$--$100\\ \\text{m/s}$; linear, nondispersive string; superposition for small amplitudes.",
      },
    ],
    figures: [
      {
        caption: "Anatomy of a transverse wave on a stretched string — a snapshot at one instant. The wavelength $\\lambda$ is the trough-to-trough (or crest-to-crest) distance; the amplitude $A$ is the maximum displacement from the equilibrium line. The dashed curve shows the same wave at a later time $t+\\Delta t$: the whole pattern has translated in the $+x$ direction at $v = \\lambda f$, while the marked string element merely oscillates vertically about its equilibrium position.",
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anatomy of a transverse sinusoidal wave showing wavelength, amplitude, crest, trough and direction of travel"><defs><marker id="wv-mk" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="40" y1="160" x2="680" y2="160" stroke="currentColor" stroke-width="1" opacity="0.35"/><polyline points="40.0,223.9 46.0,218.7 52.0,212.0 58.0,204.1 64.0,195.0 70.0,185.1 76.0,174.6 82.0,163.7 88.0,152.7 94.0,141.9 100.0,131.5 106.0,121.9 112.0,113.2 118.0,105.6 124.0,99.4 130.0,94.6 136.0,91.5 142.0,90.1 148.0,90.4 154.0,92.4 160.0,96.1 166.0,101.3 172.0,108.0 178.0,115.9 184.0,125.0 190.0,134.9 196.0,145.4 202.0,156.3 208.0,167.3 214.0,178.1 220.0,188.5 226.0,198.1 232.0,206.8 238.0,214.4 244.0,220.6 250.0,225.4 256.0,228.5 262.0,229.9 268.0,229.6 274.0,227.6 280.0,223.9 286.0,218.7 292.0,212.0 298.0,204.1 304.0,195.0 310.0,185.1 316.0,174.6 322.0,163.7 328.0,152.7 334.0,141.9 340.0,131.5 346.0,121.9 352.0,113.2 358.0,105.6 364.0,99.4 370.0,94.6 376.0,91.5 382.0,90.1 388.0,90.4 394.0,92.4 400.0,96.1 406.0,101.3 412.0,108.0 418.0,115.9 424.0,125.0 430.0,134.9 436.0,145.4 442.0,156.3 448.0,167.3 454.0,178.1 460.0,188.5 466.0,198.1 472.0,206.8 478.0,214.4 484.0,220.6 490.0,225.4 496.0,228.5 502.0,229.9 508.0,229.6 514.0,227.6 520.0,223.9 526.0,218.7 532.0,212.0 538.0,204.1 544.0,195.0 550.0,185.1 556.0,174.6 562.0,163.7 568.0,152.7 574.0,141.9 580.0,131.5 586.0,121.9 592.0,113.2 598.0,105.6 604.0,99.4 610.0,94.6 616.0,91.5 622.0,90.1 628.0,90.4 634.0,92.4 640.0,96.1 646.0,101.3 652.0,108.0 658.0,115.9 664.0,125.0 670.0,134.9 676.0,145.4" fill="none" stroke="currentColor" stroke-width="2" opacity="0.42" stroke-dasharray="7 6"/><polyline points="40.0,160.0 46.0,149.0 52.0,138.4 58.0,128.2 64.0,118.9 70.0,110.5 76.0,103.4 82.0,97.6 88.0,93.4 94.0,90.9 100.0,90.0 106.0,90.9 112.0,93.4 118.0,97.6 124.0,103.4 130.0,110.5 136.0,118.9 142.0,128.2 148.0,138.4 154.0,149.0 160.0,160.0 166.0,171.0 172.0,181.6 178.0,191.8 184.0,201.1 190.0,209.5 196.0,216.6 202.0,222.4 208.0,226.6 214.0,229.1 220.0,230.0 226.0,229.1 232.0,226.6 238.0,222.4 244.0,216.6 250.0,209.5 256.0,201.1 262.0,191.8 268.0,181.6 274.0,171.0 280.0,160.0 286.0,149.0 292.0,138.4 298.0,128.2 304.0,118.9 310.0,110.5 316.0,103.4 322.0,97.6 328.0,93.4 334.0,90.9 340.0,90.0 346.0,90.9 352.0,93.4 358.0,97.6 364.0,103.4 370.0,110.5 376.0,118.9 382.0,128.2 388.0,138.4 394.0,149.0 400.0,160.0 406.0,171.0 412.0,181.6 418.0,191.8 424.0,201.1 430.0,209.5 436.0,216.6 442.0,222.4 448.0,226.6 454.0,229.1 460.0,230.0 466.0,229.1 472.0,226.6 478.0,222.4 484.0,216.6 490.0,209.5 496.0,201.1 502.0,191.8 508.0,181.6 514.0,171.0 520.0,160.0 526.0,149.0 532.0,138.4 538.0,128.2 544.0,118.9 550.0,110.5 556.0,103.4 562.0,97.6 568.0,93.4 574.0,90.9 580.0,90.0 586.0,90.9 592.0,93.4 598.0,97.6 604.0,103.4 610.0,110.5 616.0,118.9 622.0,128.2 628.0,138.4 634.0,149.0 640.0,160.0 646.0,171.0 652.0,181.6 658.0,191.8 664.0,201.1 670.0,209.5 676.0,216.6" fill="none" stroke="currentColor" stroke-width="3"/><line x1="220" y1="232" x2="220" y2="242" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="460" y1="232" x2="460" y2="242" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="220" y1="268" x2="460" y2="268" stroke="currentColor" stroke-width="2" marker-start="url(#wv-mk)" marker-end="url(#wv-mk)"/><text x="340" y="292" text-anchor="middle" font-size="17" fill="currentColor">λ (wavelength)</text><line x1="100" y1="154" x2="100" y2="96" stroke="currentColor" stroke-width="2" marker-start="url(#wv-mk)" marker-end="url(#wv-mk)"/><text x="116" y="128" font-size="18" font-weight="bold" fill="currentColor">A</text><text x="100" y="78" text-anchor="middle" font-size="15" fill="currentColor">crest</text><text x="220" y="258" text-anchor="middle" font-size="15" fill="currentColor">trough</text><line x1="108" y1="60" x2="140" y2="60" stroke="currentColor" stroke-width="2" marker-end="url(#wv-mk)"/><text x="148" y="65" font-size="14" fill="currentColor" opacity="0.85">pattern at t+Δt</text><line x1="560" y1="42" x2="660" y2="42" stroke="currentColor" stroke-width="2.5" marker-end="url(#wv-mk)"/><text x="610" y="30" text-anchor="middle" font-size="15" fill="currentColor">wave travels at v = λf</text><line x1="520" y1="90" x2="520" y2="230" stroke="currentColor" stroke-width="1" stroke-dasharray="4 5" opacity="0.4"/><circle cx="520" cy="160" r="4.5" fill="currentColor"/><text x="520" y="252" text-anchor="middle" font-size="13.5" fill="currentColor">string element oscillates vertically</text><text x="360" y="324" text-anchor="middle" font-size="14.5" fill="currentColor" opacity="0.9">snapshot at fixed t: y(x,t) = A sin(kx − ωt) — the pattern repeats in space with period λ</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Reading a wave function',
        problem: "A transverse wave on a string is $y(x,t) = (3.0\\ \\mathrm{mm})\\sin(1.57x - 31.4t)$, with $x$ in meters and $t$ in seconds. Find the amplitude, wavelength, period, frequency, speed and travel direction, and the maximum transverse speed of a string element.",
        steps: [
          { label: 'Read off A', text: 'The coefficient of the sine is the amplitude: $A = 3.0$ mm.' },
          { label: 'Space and time scales', text: '$k = 1.57\\ \\mathrm{rad/m} = 2\\pi/\\lambda$ gives $\\lambda = 2\\pi/1.57 = 4.0$ m. Likewise $\\omega = 31.4\\ \\mathrm{rad/s} = 2\\pi f$ gives $f = 31.4/2\\pi = 5.0$ Hz, so $T = 1/f = 0.20$ s.' },
          { label: 'Wave speed', text: '$v = \\omega/k = 31.4/1.57 = 20\\ \\mathrm{m/s}$ — the same as $\\lambda f = (4.0)(5.0) = 20$ m/s. The minus sign multiplying $t$ says the wave travels toward $+x$.' },
          { label: 'Particle speed', text: 'An element at fixed $x$ has transverse speed $u = \\partial y/\\partial t = -\\omega A\\cos(kx - \\omega t)$, at most $\\omega A = (31.4)(0.0030) = 0.094$ m/s — tiny compared with 20 m/s.' },
        ],
        result: '$A = 3.0$ mm, $\\lambda = 4.0$ m, $T = 0.20$ s, $f = 5.0$ Hz, $v = 20$ m/s toward $+x$; the fastest string element moves only $0.094$ m/s, vertically.',
      },
      {
        title: "Transverse Waves: $v = \\lambda f$ check",
        problem: "A wave has $\\lambda = 4\\ \\text{m}$ and $f = 400\\ \\text{Hz}$. Find the wave speed and the string tension if $\\mu = 0.010\\ \\text{kg/m}$.",
        steps: [
          { label: "Speed", text: "$v = \\lambda f = 4\\times 400 = 1600\\ \\text{m/s}$." },
          { label: "Tension", text: "$v = \\sqrt{\\tau/\\mu}$ gives $\\tau = \\mu v^2 = 0.010\\times 2560000 = 25600\\ \\text{N}$." },
        ],
        result: "$v = 1600\\ \\text{m/s}$; $\\tau \\approx 25600\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      'A wave transports energy and pattern, not matter: medium elements oscillate about fixed equilibrium positions.',
      '$y(x,t) = A\\sin(kx - \\omega t + \\phi)$ encodes everything: $k = 2\\pi/\\lambda$, $\\omega = 2\\pi f$, and the sign of the $\\omega t$ term fixes the travel direction.',
      'Pattern speed $v = \\lambda f = \\omega/k$; element speed $u \\le \\omega A$ — different physics, different directions.',
    ],
    quiz: [
      {
        q: 'The wave $y = A\\sin(kx + \\omega t)$ travels:',
        options: ['in the −x direction', 'in the +x direction', 'in both directions at once', 'it depends on the phase constant'],
        answer: 0,
        explanation: 'With the plus sign, holding the phase $kx + \\omega t$ constant requires $x$ to decrease as $t$ grows: the pattern runs toward −x.',
      },
      {
        q: "Keeping $\\omega$ fixed, you double the wave number $k$. The wave speed:",
        options: ['doubles', 'halves', 'quadruples', 'is unchanged'],
        answer: 1,
        explanation: '$v = \\omega/k$, so doubling $k$ halves $v$ — and the wavelength halves with it, since $k = 2\\pi/\\lambda$.',
      },
      {
        q: 'In the worked example, the maximum transverse speed of a string element is about:',
        options: ['20 m/s', '3.0 m/s', '0.094 m/s', '0.20 m/s'],
        answer: 2,
        explanation: 'Elements oscillate with $u_{\\max} = \\omega A = (31.4)(0.0030) \\approx 0.094$ m/s; 20 m/s is the speed of the pattern, not the matter.',
      },
      {
        q: 'On a snapshot of a sinusoidal wave, the horizontal distance from a crest to the nearest trough is 2.0 m. The wavelength is:',
        options: ['1.0 m', '2.0 m', 'depends on the amplitude', '4.0 m'],
        answer: 3,
        explanation: 'Crest-to-trough is half a wavelength, so $\\lambda = 2(2.0\\ \\mathrm{m}) = 4.0$ m.',
      },
    ],
  },
  // ------------------------------------------------------------------ 16-2
  {
    sectionId: 'hall-ch16-s2',
    readingTime: 6,
    intro: "Snapping one end of a stretched rope sends a pulse to the other end — but how fast? Everyday experience hints at the answer: a guitar string rings higher when tightened, and a heavy cable carries a visibly slower bulge than a light one. The speed has nothing to do with how large the disturbance is or how often you wiggle the end; it is fixed entirely by the competition between the string's tension, which tries to straighten it, and its inertia, which resists being accelerated.",
    objectives: [
      'Define linear density $\\mu = m/L$ and compute it for a uniform string',
      'Apply $v = \\sqrt{\\tau/\\mu}$ and predict how changes in tension or density change the wave speed',
      "Recognize the square root of elastic over inertial properties — the pattern that recurs for sound",
    ],
    concepts: [
      {
        term: 'Linear density',
        kind: 'notation',
        statement: "**The linear density of a uniform string is its mass per length,** $\\mu = m/L$, in kg/m — the string's inertia per unit length.",
        detail: 'A light cotton string might run $5\\times10^{-3}$ kg/m; a heavy climbing rope ten times more.',
      },
      {
        term: 'Wave speed on a stretched string',
        kind: 'law',
        statement: "**For a string under tension $\\tau$ with linear density $\\mu$, transverse waves travel at** $$v = \\sqrt{\\frac{\\tau}{\\mu}}.$$ The speed is set by the medium alone — it does not depend on the amplitude, shape or frequency of the disturbance.",
        detail: 'Quadruple the tension and $v$ only doubles; quadruple the linear density and $v$ halves. Dimensionally, $[\\tau/\\mu] = (\\mathrm{kg\\cdot m/s^2})/(\\mathrm{kg/m}) = \\mathrm{m^2/s^2}$, and only the square root carries the right units.',
      },
      {
        term: 'Elastic versus inertial',
        kind: 'insight',
        statement: "**A wave speed is always the square root of an elastic (restoring) property divided by an inertial property.** For a string: tension over linear density. For sound in a fluid (next chapter): bulk modulus over volume density. Stronger restoring forces speed a wave up; more inertia slows it down.",
        detail: 'This is why stiff, light media — steel, diamond — carry sound fastest, and why a slack, heavy rope carries it slowly.',
      },
      {
        term: 'A dimensionally forced law',
        kind: 'method',
        statement: "**Dimensional analysis demands the square root form.** From $\\tau$ (N) and $\\mu$ (kg/m) the only speed constructible is $\\sqrt{\\tau/\\mu}$; no amplitude or frequency can enter, because the ideal string's physics supplies no other quantities with the right units.",
        detail: 'The full justification — Newton\u2019s second law applied to a curved string element — is carried out in Section 16-4 and in this lesson\u2019s masters tier.',
      },
      {
        term: "Wave Speed on a Stretched String: solution protocol",
        kind: "method",
        statement: "**Solve Wave Speed on a Stretched String problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling and standing waves on a string; the working equation is $y = y_m\\sin(kx-\\omega t+\\phi)$, $v = \\lambda f = \\sqrt{\\tau/\\mu}$, $f_n = nv/2L$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{Hz}$, $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{string}}\\sim 10$--$100\\ \\text{m/s}$; linear, nondispersive string; superposition for small amplitudes.",
      },
    ],
    examples: [
      {
        title: 'Timing a pulse along a rope',
        problem: 'A uniform rope of length 3.00 m and mass 45.0 g is stretched with a tension of 96.0 N. (a) How fast does a transverse pulse travel? (b) How long does the pulse take to cross the full length?',
        steps: [
          { label: 'Linear density', text: '$\\mu = m/L = 0.0450\\ \\mathrm{kg}/3.00\\ \\mathrm{m} = 0.0150$ kg/m.' },
          { label: 'Speed', text: '$v = \\sqrt{\\tau/\\mu} = \\sqrt{96.0/0.0150} = \\sqrt{6.40\\times10^{3}} = 80.0$ m/s.' },
          { label: 'Travel time', text: '$t = L/v = 3.00/80.0 = 0.0375$ s, about 38 ms.' },
          { label: 'Check', text: 'As a check, $v^2 = 6400\\ \\mathrm{m^2/s^2}$ matches $\\tau/\\mu = 96.0/0.0150$ exactly.' },
        ],
        result: 'The pulse races at 80.0 m/s and needs 37.5 ms to cover 3.00 m — high tension on a light rope makes a fast medium.',
      },
      {
        title: "Wave Speed on a Stretched String: $v = \\lambda f$ check",
        problem: "A wave has $\\lambda = 2\\ \\text{m}$ and $f = 360\\ \\text{Hz}$. Find the wave speed and the string tension if $\\mu = 0.010\\ \\text{kg/m}$.",
        steps: [
          { label: "Speed", text: "$v = \\lambda f = 2\\times 360 = 720\\ \\text{m/s}$." },
          { label: "Tension", text: "$v = \\sqrt{\\tau/\\mu}$ gives $\\tau = \\mu v^2 = 0.010\\times 518400 = 5180\\ \\text{N}$." },
        ],
        result: "$v = 720\\ \\text{m/s}$; $\\tau \\approx 5180\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      '$v = \\sqrt{\\tau/\\mu}$: the medium\u2019s tension and linear density fix the wave speed; amplitude and frequency are irrelevant.',
      '$\\mu = m/L$ is inertia per unit length: quadrupling $\\mu$ or quartering $\\tau$ halves $v$.',
      'The $\\sqrt{\\text{elastic}/\\text{inertial}}$ structure reappears for sound as $\\sqrt{B/\\rho}$.',
    ],
    quiz: [
      {
        q: 'The tension in a string is quadrupled while its linear density is unchanged. The wave speed:',
        options: ['doubles', 'quadruples', 'halves', 'is unchanged'],
        answer: 0,
        explanation: '$v = \\sqrt{\\tau/\\mu}$: four times the tension gives $\\sqrt{4} = 2$ times the speed.',
      },
      {
        q: 'A heavy string and a light string are under the same tension. Compared with the light one, waves on the heavy string travel:',
        options: ['faster', 'slower', 'at the same speed', 'faster only if the amplitude is larger'],
        answer: 1,
        explanation: 'Larger $\\mu$ means more inertia per length, and $v = \\sqrt{\\tau/\\mu}$ falls.',
      },
      {
        q: 'You double the frequency at which you oscillate one end of a string. The wave speed:',
        options: ['doubles', 'halves', 'is unchanged', 'depends on the amplitude'],
        answer: 2,
        explanation: 'The medium sets $v$; raising $f$ merely shortens the wavelength, since $\\lambda = v/f$.',
      },
      {
        q: 'A 100 Hz sinusoidal wave and a single sharp pulse travel on the same ideal string. Which is faster?',
        options: ['The sinusoidal wave', 'The pulse', 'Neither — both move at $\\sqrt{\\tau/\\mu}$', 'It depends on the pulse height'],
        answer: 2,
        explanation: 'Speed is a property of the medium alone: every disturbance on the string moves at $v = \\sqrt{\\tau/\\mu}$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 16-3
  {
    sectionId: 'hall-ch16-s3',
    readingTime: 6,
    intro: "A wave that transported no energy would be a curiosity, not a physics engine. The wave on a string is a conveyor of energy: each element does simple harmonic motion, trading kinetic energy for potential energy exactly like a mass on a spring, and passing the baton to its neighbor. Tracking that hand-off gives one compact formula for the power flowing past any point on the string.",
    objectives: [
      'Explain how a wave transports energy without transporting matter',
      "Compute an element's transverse speed and the average power $P = \\frac{1}{2}\\mu v\\omega^2 A^2$",
      'Predict how the power scales with amplitude, frequency and the properties of the string',
    ],
    concepts: [
      {
        term: 'Energy transport, not matter transport',
        kind: 'insight',
        statement: "**Every string element is a harmonic oscillator.** Its kinetic energy comes from transverse motion; its potential energy from being stretched against the tension whenever the string is locally sloped. The wave\u2019s business is to hand this energy to the next element, so energy flows along the string while the elements themselves stay put on average.",
      },
      {
        term: 'Transverse speed of an element',
        kind: 'law',
        statement: "**An element at position $x$ moves with transverse speed** $$u = \\frac{\\partial y}{\\partial t} = -\\omega A\\cos(kx - \\omega t),$$ which peaks at $\\omega A$ exactly when the element sweeps through equilibrium and vanishes at the extremes of its motion — pure SHM.",
        detail: 'The element\u2019s kinetic energy is $\\frac{1}{2}\\mu\\,dx\\,u^2$; averaged over a cycle it supplies half the transported power, the stretched-string potential energy the other half.',
      },
      {
        term: 'Average power of a wave',
        kind: 'law',
        statement: "**The average power crossing any point of the string is** $$P = \\tfrac{1}{2}\\mu v\\omega^2 A^2.$$ Over a cycle, the kinetic and potential energy rates each supply half, so the total is double the kinetic part alone.",
        detail: 'Power grows linearly with $\\mu$ and $v$, and quadratically with both $\\omega$ and $A$: doubling the frequency or the amplitude quadruples the power.',
      },
      {
        term: 'The fading wave',
        kind: 'insight',
        statement: "**Real waves die out as they travel.** Friction within the string converts wave energy into thermal energy, so the amplitude decreases with distance — a plucked guitar note decays, its $A$ shrinking until $P$ falls to zero.",
      },
      {
        term: "Energy and Power of a Wave Traveling Along a String: solution protocol",
        kind: "method",
        statement: "**Solve Energy and Power of a Wave Traveling Along a String problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling and standing waves on a string; the working equation is $y = y_m\\sin(kx-\\omega t+\\phi)$, $v = \\lambda f = \\sqrt{\\tau/\\mu}$, $f_n = nv/2L$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{Hz}$, $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{string}}\\sim 10$--$100\\ \\text{m/s}$; linear, nondispersive string; superposition for small amplitudes.",
      },
    ],
    examples: [
      {
        title: 'Power carried by a wave on a rope',
        problem: 'A sinusoidal wave with amplitude 0.50 mm and frequency 100 Hz travels at 25.3 m/s along a rope with linear density 0.150 kg/m. (a) What average power does the wave carry? (b) What happens to the power if the amplitude is doubled to 1.00 mm?',
        steps: [
          { label: 'Set up', text: 'With $f = 100$ Hz, $\\omega = 2\\pi f = 628$ rad/s, and $A = 5.0\\times10^{-4}$ m.' },
          { label: 'Power', text: '$P = \\frac{1}{2}\\mu v\\omega^2 A^2 = \\frac{1}{2}(0.150)(25.3)(628)^2(5.0\\times10^{-4})^2 = 0.19$ W.' },
          { label: 'Double the amplitude', text: 'Because $P \\propto A^2$, doubling $A$ multiplies the power by four: $P = 0.75$ W.' },
          { label: 'Interpret', text: 'A fourfold power gain from a twofold amplitude gain is the same quadratic law that makes intense waves dangerous: twice the motion, four times the energy flow.' },
        ],
        result: 'The wave transports about 0.19 W; doubling the amplitude raises this to 0.75 W — the quadratic $A^2$ dependence at work.',
      },
      {
        title: "Energy and Power of a Wave Traveling Along a String: $v = \\lambda f$ check",
        problem: "A wave has $\\lambda = 3\\ \\text{m}$ and $f = 320\\ \\text{Hz}$. Find the wave speed and the string tension if $\\mu = 0.010\\ \\text{kg/m}$.",
        steps: [
          { label: "Speed", text: "$v = \\lambda f = 3\\times 320 = 960\\ \\text{m/s}$." },
          { label: "Tension", text: "$v = \\sqrt{\\tau/\\mu}$ gives $\\tau = \\mu v^2 = 0.010\\times 921600 = 9220\\ \\text{N}$." },
        ],
        result: "$v = 960\\ \\text{m/s}$; $\\tau \\approx 9220\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      'Each string element is an SHM oscillator; the wave hands energy down the line without net matter transport.',
      '$P = \\frac{1}{2}\\mu v\\omega^2 A^2$: linear in $\\mu$ and $v$, quadratic in amplitude and frequency.',
      'Doubling $A$ or doubling $f$ each quadruples the power flowing past a point.',
    ],
    quiz: [
      {
        q: 'Keeping everything else fixed, the wave amplitude is doubled. The average power becomes:',
        options: ['twice as large', 'four times as large', 'half as large', 'unchanged'],
        answer: 1,
        explanation: '$P \\propto A^2$: twice the amplitude means four times the power.',
      },
      {
        q: 'At the instant a string element passes through the equilibrium line, its transverse speed is:',
        options: ['zero', 'maximum', 'half its maximum', 'equal to the wave speed'],
        answer: 1,
        explanation: 'Like every harmonic oscillator, the element moves fastest as it passes through equilibrium, where all its wave energy is kinetic.',
      },
      {
        q: 'The frequency is doubled while the amplitude is unchanged. The average power:',
        options: ['doubles', 'halves', 'quadruples', 'is unchanged'],
        answer: 2,
        explanation: '$P \\propto \\omega^2$: doubling the frequency quadruples the power.',
      },
      {
        q: 'A wave transports which of the following along the string?',
        options: ['String material', 'Both energy and matter', 'Neither energy nor matter', 'Energy only'],
        answer: 3,
        explanation: 'The pattern and its energy travel; the string elements themselves merely oscillate about fixed equilibrium positions.',
      },
    ],
  },
  // ------------------------------------------------------------------ 16-4
  {
    sectionId: 'hall-ch16-s4',
    readingTime: 8,
    intro: "So far the wave machinery has been assembled piecemeal — one formula for the wave function, another for the speed. Section 16-4 of HRW unifies it: a single partial differential equation that every wave on an ideal string must obey, from which the speed law $v = \\sqrt{\\tau/\\mu}$ falls out as a consequence rather than an assumption, and whose linearity is the mathematical root of everything that follows — interference, standing waves, and eventually electromagnetic waves.",
    objectives: [
      'State the wave equation $\\partial^2 y/\\partial x^2 = (\\mu/\\tau)\\,\\partial^2 y/\\partial t^2$ and explain what each side measures',
      'Verify that $y = A\\sin(kx - \\omega t)$ satisfies it and read off the resulting speed',
      "Explain why the equation's linearity guarantees that superpositions of waves are also waves",
    ],
    concepts: [
      {
        term: 'The wave equation',
        kind: 'law',
        statement: "**Every transverse displacement of an ideal stretched string obeys** $$\\frac{\\partial^2 y}{\\partial x^2} = \\frac{\\mu}{\\tau}\\,\\frac{\\partial^2 y}{\\partial t^2}.$$ The left side measures the string\u2019s curvature at a point; the right side is proportional to the element\u2019s acceleration there. Curved string, accelerating string — that is the whole physics.",
        detail: 'HRW derives this by applying Newton\u2019s second law to a string element; the complete derivation, with the small-slope approximation made explicit, is this lesson\u2019s masters tier.',
      },
      {
        term: 'Testing the sinusoidal solution',
        kind: 'method',
        statement: "**Substituting $y = A\\sin(kx - \\omega t)$ gives $-k^2 y = (\\mu/\\tau)(-\\omega^2 y)$**, which holds only if $\\omega/k = \\sqrt{\\tau/\\mu}$. The equation therefore enforces the Section 16-2 speed law: any sinusoid on this string must travel at $v = \\sqrt{\\tau/\\mu}$ — any amplitude, either direction.",
      },
      {
        term: 'Linearity breeds superposition',
        kind: 'insight',
        statement: "**If $y_1$ and $y_2$ are solutions, so is $y_1 + y_2$.** The equation contains $y$ only through first powers — no $y^2$, no $(\\partial y/\\partial x)^2$. This linearity is the mathematics behind overlapping waves passing through one another undisturbed (16-5) and behind standing waves (16-7).",
      },
      {
        term: 'The ideal string is nondispersive',
        kind: 'insight',
        statement: "**On the ideal string, every shape and every frequency travels at the same speed.** A complicated pulse — a superposition of sinusoids — neither spreads nor distorts as it travels. Real strings have slight stiffness, a weak extra restoring force that makes high frequencies travel a little faster: the inharmonicity that piano tuners must hide.",
      },
      {
        term: "The Wave Equation: solution protocol",
        kind: "method",
        statement: "**Solve The Wave Equation problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling and standing waves on a string; the working equation is $y = y_m\\sin(kx-\\omega t+\\phi)$, $v = \\lambda f = \\sqrt{\\tau/\\mu}$, $f_n = nv/2L$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{Hz}$, $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{string}}\\sim 10$--$100\\ \\text{m/s}$; linear, nondispersive string; superposition for small amplitudes.",
      },
    ],
    examples: [
      {
        title: 'Certifying a wave and its tension',
        problem: "A wave $y = (4.0\\ \\mathrm{mm})\\sin(3.0x - 200t)$ (SI units) travels on a string with $\\mu = 0.040$ kg/m. (a) Show that it satisfies the wave equation and find the wave speed. (b) What tension is the string under?",
        steps: [
          { label: 'Second x-derivative', text: '$\\partial^2 y/\\partial x^2 = -(3.0)^2 y = -9.0y$ (in $\\mathrm{s^{-2}}$ units pending the time side).' },
          { label: 'Second t-derivative', text: '$\\partial^2 y/\\partial t^2 = -(200)^2 y = -4.0\\times10^{4}y$.' },
          { label: 'Match the equation', text: 'The wave equation requires $\\partial^2 y/\\partial t^2 = v^2\\,\\partial^2 y/\\partial x^2$, so $v^2 = \\omega^2/k^2 = 4.0\\times10^{4}/9.0$ and $v = 66.7$ m/s — equivalently $\\omega/k = 200/3.0$.' },
          { label: 'Tension', text: 'From $v = \\sqrt{\\tau/\\mu}$: $\\tau = \\mu v^2 = (0.040)(4444) = 178$ N.' },
        ],
        result: 'The wave is a legitimate solution with $v = 66.7$ m/s, requiring a tension of about $1.8\\times10^{2}$ N.',
      },
      {
        title: "The Wave Equation: $v = \\lambda f$ check",
        problem: "A wave has $\\lambda = 4\\ \\text{m}$ and $f = 440\\ \\text{Hz}$. Find the wave speed and the string tension if $\\mu = 0.010\\ \\text{kg/m}$.",
        steps: [
          { label: "Speed", text: "$v = \\lambda f = 4\\times 440 = 1760\\ \\text{m/s}$." },
          { label: "Tension", text: "$v = \\sqrt{\\tau/\\mu}$ gives $\\tau = \\mu v^2 = 0.010\\times 3097600 = 31000\\ \\text{N}$." },
        ],
        result: "$v = 1760\\ \\text{m/s}$; $\\tau \\approx 31000\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      '$\\partial^2 y/\\partial x^2 = (\\mu/\\tau)\\,\\partial^2 y/\\partial t^2$: curvature is proportional to acceleration, with $v^2 = \\tau/\\mu$.',
      'Substituting any sinusoid forces $\\omega/k = v$ — the speed law is a theorem of the equation, not an extra postulate.',
      'Because the equation is linear in $y$, sums of solutions are solutions: superposition is built into the string itself.',
    ],
    quiz: [
      {
        q: 'The wave equation shows that quadrupling the tension (same string) will:',
        options: ['double the wave speed', 'quadruple the wave speed', 'halve the wave speed', 'leave the speed unchanged'],
        answer: 0,
        explanation: 'The constant $\\mu/\\tau$ equals $1/v^2$, so four times the tension means $v \\to v\\sqrt{4} = 2v$.',
      },
      {
        q: 'On a string, $y_1$ and $y_2$ are known solutions of the wave equation. Which is certainly also a solution?',
        options: ['Only $y_1 - y_2$ for equal amplitudes', `$y_1 + y_2$`, 'Only the product $y_1 y_2$', 'Only waves of smaller amplitude'],
        answer: 1,
        explanation: 'The equation is linear: any sum (or difference) of solutions is again a solution — the mathematical seed of interference.',
      },
      {
        q: "A candidate wave $y = A\\sin(5x)\\cos(400t)$ is proposed on a string where $v = 20$ m/s. It:",
        options: ['satisfies the wave equation, since it is a product of sinusoids', 'violates the wave equation, because it would demand $\\omega/k = 80$ m/s', 'satisfies it only at certain instants', 'satisfies it if the amplitude is small enough'],
        answer: 1,
        explanation: 'Here $\\partial^2y/\\partial t^2 = -(400)^2 y$ and $\\partial^2y/\\partial x^2 = -25y$, so the equation would force $v = 400/5 = 80$ m/s, not 20 m/s.',
      },
      {
        q: 'In the wave equation, the constant $\\mu/\\tau$ multiplying $\\partial^2 y/\\partial t^2$ equals:',
        options: [`$v$`, `$v^2$`, `$1/v^2$`, `$1/v$`],
        answer: 2,
        explanation: 'Written as $\\partial^2 y/\\partial x^2 = (1/v^2)\\partial^2 y/\\partial t^2$, the coefficient of the time derivative is $1/v^2 = \\mu/\\tau$.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'The wave equation, derived from string dynamics',
        blocks: [
          {
            kind: 'para',
            heading: 'The physical model',
            body: "Isolate the string element that lies between $x$ and $x+dx$ while the string carries the wave $y(x,t)$. The tension has the same magnitude $\\tau$ at both ends (a flexible string, gravity ignored), and each end is pulled along the local tangent. Assume small slopes, $|\\partial y/\\partial x| \\ll 1$, throughout — exactly the regime in which the sinusoidal solutions of Section 16-1 describe a real string.",
          },
          {
            kind: 'theorem',
            heading: 'Net transverse force on the element',
            body: "**To leading order in $dx$, the transverse (y) force on the element is** $$F_y = \\tau\\,\\frac{\\partial^2 y}{\\partial x^2}\\,dx.$$ **Its horizontal counterpart cancels to the same order, which is also why the tension magnitude stays uniform along the string.**",
          },
          {
            kind: 'proof',
            heading: 'Why only the change in slope matters',
            body: "Write the vertical component at each end as $\\tau\\sin\\theta \\approx \\tau\\tan\\theta = \\tau\\,\\partial y/\\partial x$, using $\\sin\\theta \\approx \\tan\\theta$ for small slopes. The net upward pull is the difference of the two end values, $$\\tau\\left.\\frac{\\partial y}{\\partial x}\\right|_{x+dx} - \\tau\\left.\\frac{\\partial y}{\\partial x}\\right|_{x} = \\tau\\,\\frac{\\partial^2 y}{\\partial x^2}\\,dx + O(dx^2),$$ by the mean value theorem. A straight but tilted segment feels no net transverse force; only curvature — the bending of the string — accelerates an element sideways.",
          },
          {
            kind: 'derivation',
            heading: 'Newton\u2019s second law closes the argument',
            body: "The element\u2019s mass is $\\mu\\,dx$ and its acceleration is $\\partial^2 y/\\partial t^2$, so $\\mu\\,dx\\,\\frac{\\partial^2y}{\\partial t^2} = \\tau\\,\\frac{\\partial^2y}{\\partial x^2}\\,dx$, or $$\\frac{\\partial^2 y}{\\partial x^2} = \\frac{\\mu}{\\tau}\\frac{\\partial^2 y}{\\partial t^2}.$$ Note what did and did not happen: the speed $v = \\sqrt{\\tau/\\mu}$ of Section 16-2 was never inserted — it emerged. Matching this equation against $y = A\\sin(kx-\\omega t)$ forces $\\omega/k = \\sqrt{\\tau/\\mu}$ as a theorem, converting the dimensional-analysis argument into dynamics.",
          },
          {
            kind: 'remark',
            heading: 'Every pulse shape survives — d\u2019Alembert\u2019s solution',
            body: "By direct chain-rule differentiation, any twice-differentiable function $f(x - vt)$ with $v = \\sqrt{\\tau/\\mu}$ satisfies the equation, and so does any $g(x + vt)$, and so does any sum of the two (d\u2019Alembert, 1747). An ideal string is nondispersive: a square pulse, a complicated squiggle, a violin pluck — every shape rigidly translates at exactly $v$, right-movers and left-movers passing through one another. Standing waves (Section 16-7) are precisely such a sum of counter-propagating copies.",
          },
          {
            kind: 'application',
            heading: 'One equation, three theories',
            body: "Replace the tension force with the pressure-gradient force on a fluid element, $-B\\,\\partial^2 s/\\partial x^2$, and the mass with $\\rho\\,dx$: sound obeys $\\partial^2s/\\partial x^2 = (\\rho/B)\\partial^2s/\\partial t^2$, giving $v = \\sqrt{B/\\rho}$ — Chapter 17 opens at exactly this point. Maxwell\u2019s vacuum equations force the same operator on electric and magnetic fields with $1/\\sqrt{\\mu_0\\varepsilon_0} = c$: light is the wave equation\u2019s greatest hit. Elastic over inertial is not a string quirk; it is the universal signature of a linear wave.",
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 16-5
  {
    sectionId: 'hall-ch16-s5',
    readingTime: 6,
    intro: "Two stones dropped in a pond send out rings that glide through each other and emerge unscathed — yet where they overlap, the water can jump twice as high or not at all. Overlapping waves do not collide; they add. For two sinusoidal waves of the same frequency traveling the same direction, the entire story is controlled by one number, the phase difference, and the resulting algebra is the foundation of acoustics, optics and quantum mechanics alike.",
    objectives: [
      'Apply the superposition principle to combine two transverse waves traveling in the same direction',
      'Use the resultant $2A\\cos(\\phi/2)\\sin(kx-\\omega t+\\phi/2)$ to find the combined amplitude and phase',
      'Convert a path-length difference into a phase difference with $\\phi = (2\\pi/\\lambda)\\Delta L$ and classify the outcome',
    ],
    concepts: [
      {
        term: 'Superposition principle',
        kind: 'law',
        statement: "**When waves overlap, the displacement of the medium is the algebraic sum of the displacements each wave would produce alone:** $y_{\\text{res}} = y_1 + y_2$. The waves emerge from the encounter unchanged.",
        detail: 'This follows from the linearity of the wave equation (16-4): sums of solutions are solutions.',
      },
      {
        term: 'Combining two same-frequency waves',
        kind: 'theorem',
        statement: "**A wave $A\\sin(kx - \\omega t)$ plus a wave $A\\sin(kx - \\omega t + \\phi)$ equals** $$2A\\cos\\tfrac{\\phi}{2}\\;\\sin\\!\\left(kx - \\omega t + \\tfrac{\\phi}{2}\\right).$$ The resultant is itself a sinusoid: same $k$ and $\\omega$, amplitude $2A|\\cos(\\phi/2)|$, phase halfway between the two.",
      },
      {
        term: 'Fully constructive and fully destructive',
        kind: 'definition',
        statement: "**Phases aligned, $\\phi = 2m\\pi$ (integer multiple of a full cycle): fully constructive — amplitude $2A$, the maximum possible. Phases opposed, $\\phi = (2m+1)\\pi$ (half-cycle offset): fully destructive — the waves cancel perfectly and the string stays flat.** Every other phase difference yields an amplitude between $0$ and $2A$.",
      },
      {
        term: 'Path difference',
        kind: 'law',
        statement: "**Waves from in-phase sources that reach a point along paths differing by $\\Delta L$ arrive with phase difference** $$\\phi = \\frac{2\\pi}{\\lambda}\\Delta L.$$ $\\Delta L = m\\lambda$ gives constructive interference; $\\Delta L = (m+\\frac{1}{2})\\lambda$ gives destructive.",
        detail: 'The integer $m = 0, 1, 2, \\ldots$ counts whole wavelengths of path mismatch; an extra half-wavelength flips a crest into a trough.',
      },
      {
        term: "Interference of Waves: solution protocol",
        kind: "method",
        statement: "**Solve Interference of Waves problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling and standing waves on a string; the working equation is $y = y_m\\sin(kx-\\omega t+\\phi)$, $v = \\lambda f = \\sqrt{\\tau/\\mu}$, $f_n = nv/2L$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{Hz}$, $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{string}}\\sim 10$--$100\\ \\text{m/s}$; linear, nondispersive string; superposition for small amplitudes.",
      },
    ],
    examples: [
      {
        title: 'Two waves arriving from different paths',
        problem: "Two in-phase sources send identical sinusoidal waves of amplitude 4.0 mm and wavelength 1.6 m toward a distant point along paths that differ by $\\Delta L = 1.2$ m. What is the amplitude of the resultant oscillation there, and what path difference would silence it?",
        steps: [
          { label: 'Phase difference', text: '$\\phi = (2\\pi/\\lambda)\\Delta L = (2\\pi/1.6)(1.2) = 1.5\\pi$ rad $= 270^\\circ$.' },
          { label: 'Resultant amplitude', text: '$2A|\\cos(\\phi/2)| = 2(4.0)|\\cos(0.75\\pi)| = 8.0(0.707) = 5.7$ mm — partially constructive.' },
          { label: 'Phase of the resultant', text: 'The sum oscillates with phase $\\phi/2 = 135^\\circ$ relative to the first wave.' },
          { label: 'Silence', text: 'Destructive interference needs $\\Delta L = (m+\\frac{1}{2})\\lambda$: for example $0.8$ m, $2.4$ m, $4.0$ m, and so on.' },
        ],
        result: 'The 1.2 m mismatch ($\\phi = 1.5\\pi$) gives a 5.7 mm resultant; shifting the path difference to 0.8 m — an odd half-wavelength — cancels the wave entirely.',
      },
      {
        title: "Interference of Waves: $v = \\lambda f$ check",
        problem: "A wave has $\\lambda = 2\\ \\text{m}$ and $f = 400\\ \\text{Hz}$. Find the wave speed and the string tension if $\\mu = 0.010\\ \\text{kg/m}$.",
        steps: [
          { label: "Speed", text: "$v = \\lambda f = 2\\times 400 = 800\\ \\text{m/s}$." },
          { label: "Tension", text: "$v = \\sqrt{\\tau/\\mu}$ gives $\\tau = \\mu v^2 = 0.010\\times 640000 = 6400\\ \\text{N}$." },
        ],
        result: "$v = 800\\ \\text{m/s}$; $\\tau \\approx 6400\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      'Overlapping waves add displacement by displacement and pass through unchanged.',
      'Resultant amplitude $2A|\\cos(\\phi/2)|$: fully constructive at $\\phi = 2m\\pi$ (amplitude $2A$), fully destructive at $\\phi = (2m+1)\\pi$ (zero).',
      'Path difference converts to phase via $\\phi = (2\\pi/\\lambda)\\Delta L$; half a wavelength of mismatch swaps constructive for destructive.',
    ],
    quiz: [
      {
        q: 'Two identical sinusoidal waves arrive exactly out of phase. The resultant amplitude is:',
        options: [`$2A$`, `$A$`, 'zero', 'it depends on the frequency'],
        answer: 2,
        explanation: 'With $\\phi = \\pi$, $2A\\cos(\\pi/2) = 0$: the waves cancel perfectly.',
      },
      {
        q: 'The path difference between two waves from in-phase sources is 2.0 wavelengths. The interference is:',
        options: ['fully destructive', 'fully constructive', 'exactly half-constructive', 'there is no interference'],
        answer: 1,
        explanation: '$\\Delta L = m\\lambda$ with $m = 2$ gives $\\phi = 4\\pi$ — the waves arrive in phase.',
      },
      {
        q: 'Two same-frequency waves of equal amplitude $A$ with phase difference $\\phi = 2\\pi/3$ combine to amplitude:',
        options: [`$2A$`, `$A$`, `$A/2$`, `$\\sqrt{2}A$`],
        answer: 1,
        explanation: '$2A|\\cos(\\phi/2)| = 2A\\cos(\\pi/3) = A$.',
      },
      {
        q: 'If the path difference is exactly half a wavelength, the phase difference is:',
        options: ['$\\pi/2$ rad', '$2\\pi$ rad', '$\\lambda/2$ rad', '$\\pi$ rad'],
        answer: 3,
        explanation: '$\\phi = (2\\pi/\\lambda)(\\lambda/2) = \\pi$: crest meets trough.',
      },
    ],
  },
  // ------------------------------------------------------------------ 16-6
  {
    sectionId: 'hall-ch16-s6',
    readingTime: 5,
    intro: "Adding sines is trigonometry; adding arrows is geometry. The phasor method turns one into the other by representing each sinusoidal wave as a rotating arrow whose projection is the wave\u2019s displacement. Wave addition then becomes arrow addition, and a page of identities collapses into a picture you can check with a ruler — a trick that returns with a vengeance in diffraction and in alternating-current circuits.",
    objectives: [
      'Represent a sinusoidal wave as a phasor of length $A$ rotating at angular speed $\\omega$',
      'Add waves by chaining phasors head-to-tail and reading the resultant amplitude and phase',
      'Reproduce the two-wave interference result $2A\\cos(\\phi/2)$ from the phasor picture',
    ],
    concepts: [
      {
        term: 'Phasor',
        kind: 'definition',
        statement: "**A phasor is an arrow of length $A$ that rotates counterclockwise about the origin at angular speed $\\omega$. At any instant its projection on the vertical axis equals the displacement of the wave it represents, the arrow\u2019s angle from the horizontal being the phase $kx - \\omega t + \\phi$.**",
        detail: 'One phasor per wave; the picture is drawn at one fixed location $x$ and one instant $t$, and simply spins as time advances.',
      },
      {
        term: 'Head-to-tail addition',
        kind: 'method',
        statement: "**To add waves, chain their phasors head-to-tail and draw the resultant from first tail to last head.** Its projection equals the sum of the projections; because all phasors rotate together at the same $\\omega$, the assembly rotates rigidly and the resultant\u2019s length — the combined amplitude — never changes.",
      },
      {
        term: 'Two phasors at angle φ',
        kind: 'theorem',
        statement: "**Two equal phasors of length $A$ separated by angle $\\phi$ sum to a phasor of length $2A\\cos(\\phi/2)$ pointing halfway between.** The rotating picture is exactly the interference formula of Section 16-5 — amplitude and phase fall out of the isosceles triangle.",
        detail: 'For unequal amplitudes, the law of cosines gives $A_{\\text{res}} = \\sqrt{A_1^2 + A_2^2 + 2A_1A_2\\cos\\phi}$.',
      },
      {
        term: 'Why phasors earn their keep',
        kind: 'insight',
        statement: "**Phasor chains handle what a trig table cannot.** Many waves at slightly different phases become a chain of arrows whose closing side is the resultant amplitude — the construction that Chapter 36 uses for diffraction, and the standard language of AC circuit analysis.",
      },
      {
        term: "Phasors: solution protocol",
        kind: "method",
        statement: "**Solve Phasors problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling and standing waves on a string; the working equation is $y = y_m\\sin(kx-\\omega t+\\phi)$, $v = \\lambda f = \\sqrt{\\tau/\\mu}$, $f_n = nv/2L$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{Hz}$, $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{string}}\\sim 10$--$100\\ \\text{m/s}$; linear, nondispersive string; superposition for small amplitudes.",
      },
    ],
    examples: [
      {
        title: 'Three waves on a string',
        problem: "Three waves of the same frequency travel the same direction on a string, with amplitudes 3.0 mm, 4.0 mm and 5.0 mm and phases $0^\\circ$, $90^\\circ$ and $180^\\circ$. Find the amplitude and phase of the resultant.",
        steps: [
          { label: 'Draw the phasors', text: 'Take the first phasor along $+x$: 3.0 mm at $0^\\circ$; the second points along $+y$: 4.0 mm at $90^\\circ$; the third along $-x$: 5.0 mm at $180^\\circ$.' },
          { label: 'Add components', text: 'Horizontal: $3.0 - 5.0 = -2.0$ mm; vertical: $+4.0$ mm.' },
          { label: 'Resultant phasor', text: '$A_{\\text{res}} = \\sqrt{(-2.0)^2 + (4.0)^2} = \\sqrt{20} = 4.5$ mm, at $\\arctan(4.0/\\,-2.0)$ — second quadrant, $117^\\circ$.' },
          { label: 'Read off the wave', text: 'The combined motion is a single sinusoid of amplitude 4.5 mm whose phase leads the first wave by $117^\\circ$.' },
        ],
        result: 'The three waves superpose to one sinusoid of amplitude $\\sqrt{20} \\approx 4.5$ mm at phase $117^\\circ$ — arrow addition replacing a page of trigonometric identities.',
      },
      {
        title: "Phasors: $v = \\lambda f$ check",
        problem: "A wave has $\\lambda = 3\\ \\text{m}$ and $f = 360\\ \\text{Hz}$. Find the wave speed and the string tension if $\\mu = 0.010\\ \\text{kg/m}$.",
        steps: [
          { label: "Speed", text: "$v = \\lambda f = 3\\times 360 = 1080\\ \\text{m/s}$." },
          { label: "Tension", text: "$v = \\sqrt{\\tau/\\mu}$ gives $\\tau = \\mu v^2 = 0.010\\times 1166400 = 11700\\ \\text{N}$." },
        ],
        result: "$v = 1080\\ \\text{m/s}$; $\\tau \\approx 11700\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      'A phasor is the wave in miniature: length $A$, rotation rate $\\omega$, vertical projection equal to the displacement.',
      'Add waves by chaining phasors head-to-tail; the resultant length and angle give the combined amplitude and phase.',
      'Two equal phasors at angle $\\phi$ give $2A\\cos(\\phi/2)$ — the phasor twin of the interference formula.',
    ],
    quiz: [
      {
        q: 'The angular rotation rate of a phasor representing $y = A\\sin(kx - \\omega t)$ is:',
        options: [`$k$`, `$\\omega$`, `$A$`, `$\\omega/k$`],
        answer: 1,
        explanation: 'The phase advances at rate $\\omega$, so the phasor rotates at $\\omega$ radians per second.',
      },
      {
        q: 'Two equal-amplitude waves arrive exactly out of phase. Their phasors form:',
        options: ['a single phasor of length $2A$', 'a closed two-arrow loop of zero resultant', 'a right angle', 'a phasor of length $A\\sqrt{2}$'],
        answer: 1,
        explanation: 'Head-to-tail at $180^\\circ$, the arrows close on themselves: the resultant has zero length.',
      },
      {
        q: 'Two phasors of equal length $A$ separated by $90^\\circ$ have resultant length:',
        options: [`$A\\sqrt{2}$`, `$2A$`, `$A$`, `$A/\\sqrt{2}$`],
        answer: 0,
        explanation: '$2A\\cos(45^\\circ) = 2A(\\sqrt{2}/2) = A\\sqrt{2}$.',
      },
      {
        q: 'The length of a phasor physically represents:',
        options: ['the wave speed', 'the amplitude of the wave', 'the wavelength', 'the phase constant'],
        answer: 1,
        explanation: 'The phasor\u2019s length is the amplitude; its angle is the phase; its rotation rate is $\\omega$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 16-7
  {
    sectionId: 'hall-ch16-s7',
    readingTime: 8,
    intro: "Clamp both ends of a string and pluck it: waves launched toward each end reflect and rebound, and the string becomes an arena where identical waves travel in opposite directions. Their superposition no longer moves sideways at all — the pattern stands still, a standing wave, with points that never move and points that thrash wildly. Confined waves are the physics of every stringed instrument, and when the confinement matches a driving frequency, resonance takes over.",
    objectives: [
      'Superpose two identical counter-propagating waves to get $y = 2A\\sin(kx)\\cos(\\omega t)$ and identify nodes and antinodes',
      'Derive the allowed frequencies $f_n = nv/2L$ of a string fixed at both ends',
      'Explain resonance: what a periodic driving force must match to build a large standing wave',
    ],
    concepts: [
      {
        term: 'Standing wave',
        kind: 'theorem',
        statement: "**Two identical sinusoidal waves traveling in opposite directions, $A\\sin(kx - \\omega t)$ and $A\\sin(kx + \\omega t)$, superpose to** $$y = 2A\\sin(kx)\\cos(\\omega t).$$ Nothing travels: every point oscillates in SHM with position-dependent amplitude $2A|\\sin(kx)|$, and all points between two adjacent nodes move together in phase.",
        detail: 'Energy no longer flows along the string past a node; it sloshes locally between kinetic and potential — hence standing.',
      },
      {
        term: 'Nodes and antinodes',
        kind: 'definition',
        statement: "**Nodes are the points that never move, at $kx = n\\pi$, i.e. $x = n\\lambda/2$; antinodes are the points of maximum oscillation amplitude $2A$, halfway between, at $x = (n+\\frac{1}{2})\\lambda/2$. Adjacent loops — the segments between nodes — oscillate in opposite phase.**",
      },
      {
        term: 'Modes of a string fixed at both ends',
        kind: 'law',
        statement: "**With both ends forced to be nodes, a string of length $L$ fits only waves with $L = n\\lambda/2$:** $$\\lambda_n = \\frac{2L}{n}, \\qquad f_n = \\frac{v}{\\lambda_n} = \\frac{nv}{2L} = n f_1, \\qquad n = 1, 2, 3, \\ldots$$ The frequencies form the harmonic series: $f_1$ is the fundamental, and the $n = 2, 3, \\ldots$ modes are the overtones.",
        detail: 'The same length of string sounds higher when tighter (larger $v = \\sqrt{\\tau/\\mu}$): $f_1 = \\sqrt{\\tau/\\mu}/2L$ is the tuning formula of every string instrument.',
      },
      {
        term: 'Resonance',
        kind: 'definition',
        statement: "**A weak periodic driving force applied at exactly one of the natural frequencies $f = nv/2L$ pumps energy into that mode cycle after cycle, building a large-amplitude standing wave bounded only by damping.** Drive off these frequencies and each push arrives out of step with the motion, gaining nothing.",
        detail: 'Push a playground swing at its natural rhythm and a small push grows the arc every cycle; a driven string responds the same way. This is also how a singer can shatter a wine glass with a sustained note at its resonant frequency.',
      },
      {
        term: "Standing Waves and Resonance: solution protocol",
        kind: "method",
        statement: "**Solve Standing Waves and Resonance problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is traveling and standing waves on a string; the working equation is $y = y_m\\sin(kx-\\omega t+\\phi)$, $v = \\lambda f = \\sqrt{\\tau/\\mu}$, $f_n = nv/2L$; every substitution must carry its units so the final unit ($\\text{m}$, $\\text{Hz}$, $\\text{m/s}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $v_{\\text{string}}\\sim 10$--$100\\ \\text{m/s}$; linear, nondispersive string; superposition for small amplitudes.",
      },
    ],
    figures: [
      {
        caption: "The first three normal modes of a string of length $L$ fixed at both ends (nodes forced at each wall). Solid and dashed curves show the string half a period apart; the dots mark the nodes, which never move. Mode $n$ fits $n$ half-wavelengths between the walls: $\\lambda_n = 2L/n$ and $f_n = nv/2L = nf_1$ — the second harmonic is one octave above the fundamental, the third an octave and a fifth.",
        svg: `<svg viewBox="0 0 720 430" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="First three standing wave harmonics of a string fixed at both ends"><defs><marker id="sw-mk" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="104" y1="12" x2="104" y2="418" stroke="currentColor" stroke-width="6" opacity="0.85"/><line x1="646" y1="12" x2="646" y2="418" stroke="currentColor" stroke-width="6" opacity="0.85"/><line x1="110" y1="75" x2="640" y2="75" stroke="currentColor" stroke-width="1" opacity="0.3"/><line x1="110" y1="210" x2="640" y2="210" stroke="currentColor" stroke-width="1" opacity="0.3"/><line x1="110" y1="345" x2="640" y2="345" stroke="currentColor" stroke-width="1" opacity="0.3"/><polyline points="110.0,75.0 115.0,76.5 120.0,78.0 125.0,79.4 130.0,80.9 135.0,82.4 140.0,83.8 145.0,85.3 150.0,86.7 155.0,88.2 160.0,89.6 165.0,91.0 170.0,92.4 175.0,93.8 180.0,95.2 185.0,96.5 190.0,97.8 195.0,99.1 200.0,100.4 205.0,101.7 210.0,102.9 215.0,104.1 220.0,105.3 225.0,106.5 230.0,107.6 235.0,108.7 240.0,109.8 245.0,110.9 250.0,111.9 255.0,112.9 260.0,113.8 265.0,114.7 270.0,115.6 275.0,116.5 280.0,117.3 285.0,118.1 290.0,118.8 295.0,119.5 300.0,120.1 305.0,120.8 310.0,121.3 315.0,121.9 320.0,122.4 325.0,122.8 330.0,123.2 335.0,123.6 340.0,123.9 345.0,124.2 350.0,124.5 355.0,124.6 360.0,124.8 365.0,124.9 370.0,125.0 375.0,125.0 380.0,125.0 385.0,124.9 390.0,124.8 395.0,124.6 400.0,124.5 405.0,124.2 410.0,123.9 415.0,123.6 420.0,123.2 425.0,122.8 430.0,122.4 435.0,121.9 440.0,121.3 445.0,120.8 450.0,120.1 455.0,119.5 460.0,118.8 465.0,118.1 470.0,117.3 475.0,116.5 480.0,115.6 485.0,114.7 490.0,113.8 495.0,112.9 500.0,111.9 505.0,110.9 510.0,109.8 515.0,108.7 520.0,107.6 525.0,106.5 530.0,105.3 535.0,104.1 540.0,102.9 545.0,101.7 550.0,100.4 555.0,99.1 560.0,97.8 565.0,96.5 570.0,95.2 575.0,93.8 580.0,92.4 585.0,91.0 590.0,89.6 595.0,88.2 600.0,86.7 605.0,85.3 610.0,83.8 615.0,82.4 620.0,80.9 625.0,79.4 630.0,78.0 635.0,76.5 640.0,75.0" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.35" stroke-dasharray="6 6"/><polyline points="110.0,75.0 115.0,73.5 120.0,72.0 125.0,70.6 130.0,69.1 135.0,67.6 140.0,66.2 145.0,64.7 150.0,63.3 155.0,61.8 160.0,60.4 165.0,59.0 170.0,57.6 175.0,56.2 180.0,54.8 185.0,53.5 190.0,52.2 195.0,50.9 200.0,49.6 205.0,48.3 210.0,47.1 215.0,45.9 220.0,44.7 225.0,43.5 230.0,42.4 235.0,41.3 240.0,40.2 245.0,39.1 250.0,38.1 255.0,37.1 260.0,36.2 265.0,35.3 270.0,34.4 275.0,33.5 280.0,32.7 285.0,31.9 290.0,31.2 295.0,30.5 300.0,29.9 305.0,29.2 310.0,28.7 315.0,28.1 320.0,27.6 325.0,27.2 330.0,26.8 335.0,26.4 340.0,26.1 345.0,25.8 350.0,25.5 355.0,25.4 360.0,25.2 365.0,25.1 370.0,25.0 375.0,25.0 380.0,25.0 385.0,25.1 390.0,25.2 395.0,25.4 400.0,25.5 405.0,25.8 410.0,26.1 415.0,26.4 420.0,26.8 425.0,27.2 430.0,27.6 435.0,28.1 440.0,28.7 445.0,29.2 450.0,29.9 455.0,30.5 460.0,31.2 465.0,31.9 470.0,32.7 475.0,33.5 480.0,34.4 485.0,35.3 490.0,36.2 495.0,37.1 500.0,38.1 505.0,39.1 510.0,40.2 515.0,41.3 520.0,42.4 525.0,43.5 530.0,44.7 535.0,45.9 540.0,47.1 545.0,48.3 550.0,49.6 555.0,50.9 560.0,52.2 565.0,53.5 570.0,54.8 575.0,56.2 580.0,57.6 585.0,59.0 590.0,60.4 595.0,61.8 600.0,63.3 605.0,64.7 610.0,66.2 615.0,67.6 620.0,69.1 625.0,70.6 630.0,72.0 635.0,73.5 640.0,75.0" fill="none" stroke="currentColor" stroke-width="3"/><polyline points="110.0,210.0 115.0,212.5 120.0,215.0 125.0,217.4 130.0,219.9 135.0,222.3 140.0,224.6 145.0,226.9 150.0,229.2 155.0,231.4 160.0,233.5 165.0,235.5 170.0,237.4 175.0,239.3 180.0,241.0 185.0,242.6 190.0,244.1 195.0,245.5 200.0,246.8 205.0,247.9 210.0,248.9 215.0,249.8 220.0,250.5 225.0,251.1 230.0,251.5 235.0,251.8 240.0,252.0 245.0,252.0 250.0,251.8 255.0,251.5 260.0,251.1 265.0,250.5 270.0,249.8 275.0,248.9 280.0,247.9 285.0,246.8 290.0,245.5 295.0,244.1 300.0,242.6 305.0,241.0 310.0,239.3 315.0,237.4 320.0,235.5 325.0,233.5 330.0,231.4 335.0,229.2 340.0,226.9 345.0,224.6 350.0,222.3 355.0,219.9 360.0,217.4 365.0,215.0 370.0,212.5 375.0,210.0 380.0,207.5 385.0,205.0 390.0,202.6 395.0,200.1 400.0,197.7 405.0,195.4 410.0,193.1 415.0,190.8 420.0,188.6 425.0,186.5 430.0,184.5 435.0,182.6 440.0,180.7 445.0,179.0 450.0,177.4 455.0,175.9 460.0,174.5 465.0,173.2 470.0,172.1 475.0,171.1 480.0,170.2 485.0,169.5 490.0,168.9 495.0,168.5 500.0,168.2 505.0,168.0 510.0,168.0 515.0,168.2 520.0,168.5 525.0,168.9 530.0,169.5 535.0,170.2 540.0,171.1 545.0,172.1 550.0,173.2 555.0,174.5 560.0,175.9 565.0,177.4 570.0,179.0 575.0,180.7 580.0,182.6 585.0,184.5 590.0,186.5 595.0,188.6 600.0,190.8 605.0,193.1 610.0,195.4 615.0,197.7 620.0,200.1 625.0,202.6 630.0,205.0 635.0,207.5 640.0,210.0" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.35" stroke-dasharray="6 6"/><polyline points="110.0,210.0 115.0,207.5 120.0,205.0 125.0,202.6 130.0,200.1 135.0,197.7 140.0,195.4 145.0,193.1 150.0,190.8 155.0,188.6 160.0,186.5 165.0,184.5 170.0,182.6 175.0,180.7 180.0,179.0 185.0,177.4 190.0,175.9 195.0,174.5 200.0,173.2 205.0,172.1 210.0,171.1 215.0,170.2 220.0,169.5 225.0,168.9 230.0,168.5 235.0,168.2 240.0,168.0 245.0,168.0 250.0,168.2 255.0,168.5 260.0,168.9 265.0,169.5 270.0,170.2 275.0,171.1 280.0,172.1 285.0,173.2 290.0,174.5 295.0,175.9 300.0,177.4 305.0,179.0 310.0,180.7 315.0,182.6 320.0,184.5 325.0,186.5 330.0,188.6 335.0,190.8 340.0,193.1 345.0,195.4 350.0,197.7 355.0,200.1 360.0,202.6 365.0,205.0 370.0,207.5 375.0,210.0 380.0,212.5 385.0,215.0 390.0,217.4 395.0,219.9 400.0,222.3 405.0,224.6 410.0,226.9 415.0,229.2 420.0,231.4 425.0,233.5 430.0,235.5 435.0,237.4 440.0,239.3 445.0,241.0 450.0,242.6 455.0,244.1 460.0,245.5 465.0,246.8 470.0,247.9 475.0,248.9 480.0,249.8 485.0,250.5 490.0,251.1 495.0,251.5 500.0,251.8 505.0,252.0 510.0,252.0 515.0,251.8 520.0,251.5 525.0,251.1 530.0,250.5 535.0,249.8 540.0,248.9 545.0,247.9 550.0,246.8 555.0,245.5 560.0,244.1 565.0,242.6 570.0,241.0 575.0,239.3 580.0,237.4 585.0,235.5 590.0,233.5 595.0,231.4 600.0,229.2 605.0,226.9 610.0,224.6 615.0,222.3 620.0,219.9 625.0,217.4 630.0,215.0 635.0,212.5 640.0,210.0" fill="none" stroke="currentColor" stroke-width="3"/><polyline points="110.0,345.0 115.0,348.0 120.0,351.0 125.0,354.0 130.0,356.8 135.0,359.6 140.0,362.3 145.0,364.8 150.0,367.2 155.0,369.4 160.0,371.4 165.0,373.2 170.0,374.8 175.0,376.1 180.0,377.2 185.0,378.0 190.0,378.6 195.0,378.9 200.0,379.0 205.0,378.8 210.0,378.3 215.0,377.5 220.0,376.5 225.0,375.2 230.0,373.8 235.0,372.0 240.0,370.1 245.0,367.9 250.0,365.6 255.0,363.1 260.0,360.5 265.0,357.8 270.0,354.9 275.0,352.0 280.0,349.0 285.0,346.0 290.0,343.0 295.0,340.0 300.0,337.0 305.0,334.1 310.0,331.3 315.0,328.6 320.0,326.0 325.0,323.6 330.0,321.3 335.0,319.2 340.0,317.4 345.0,315.7 350.0,314.3 355.0,313.1 360.0,312.2 365.0,311.5 370.0,311.1 375.0,311.0 380.0,311.1 385.0,311.5 390.0,312.2 395.0,313.1 400.0,314.3 405.0,315.7 410.0,317.4 415.0,319.2 420.0,321.3 425.0,323.6 430.0,326.0 435.0,328.6 440.0,331.3 445.0,334.1 450.0,337.0 455.0,340.0 460.0,343.0 465.0,346.0 470.0,349.0 475.0,352.0 480.0,354.9 485.0,357.8 490.0,360.5 495.0,363.1 500.0,365.6 505.0,367.9 510.0,370.1 515.0,372.0 520.0,373.8 525.0,375.2 530.0,376.5 535.0,377.5 540.0,378.3 545.0,378.8 550.0,379.0 555.0,378.9 560.0,378.6 565.0,378.0 570.0,377.2 575.0,376.1 580.0,374.8 585.0,373.2 590.0,371.4 595.0,369.4 600.0,367.2 605.0,364.8 610.0,362.3 615.0,359.6 620.0,356.8 625.0,354.0 630.0,351.0 635.0,348.0 640.0,345.0" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.35" stroke-dasharray="6 6"/><polyline points="110.0,345.0 115.0,342.0 120.0,339.0 125.0,336.0 130.0,333.2 135.0,330.4 140.0,327.7 145.0,325.2 150.0,322.8 155.0,320.6 160.0,318.6 165.0,316.8 170.0,315.2 175.0,313.9 180.0,312.8 185.0,312.0 190.0,311.4 195.0,311.1 200.0,311.0 205.0,311.2 210.0,311.7 215.0,312.5 220.0,313.5 225.0,314.8 230.0,316.2 235.0,318.0 240.0,319.9 245.0,322.1 250.0,324.4 255.0,326.9 260.0,329.5 265.0,332.2 270.0,335.1 275.0,338.0 280.0,341.0 285.0,344.0 290.0,347.0 295.0,350.0 300.0,353.0 305.0,355.9 310.0,358.7 315.0,361.4 320.0,364.0 325.0,366.4 330.0,368.7 335.0,370.8 340.0,372.6 345.0,374.3 350.0,375.7 355.0,376.9 360.0,377.8 365.0,378.5 370.0,378.9 375.0,379.0 380.0,378.9 385.0,378.5 390.0,377.8 395.0,376.9 400.0,375.7 405.0,374.3 410.0,372.6 415.0,370.8 420.0,368.7 425.0,366.4 430.0,364.0 435.0,361.4 440.0,358.7 445.0,355.9 450.0,353.0 455.0,350.0 460.0,347.0 465.0,344.0 470.0,341.0 475.0,338.0 480.0,335.1 485.0,332.2 490.0,329.5 495.0,326.9 500.0,324.4 505.0,322.1 510.0,319.9 515.0,318.0 520.0,316.2 525.0,314.8 530.0,313.5 535.0,312.5 540.0,311.7 545.0,311.2 550.0,311.0 555.0,311.1 560.0,311.4 565.0,312.0 570.0,312.8 575.0,313.9 580.0,315.2 585.0,316.8 590.0,318.6 595.0,320.6 600.0,322.8 605.0,325.2 610.0,327.7 615.0,330.4 620.0,333.2 625.0,336.0 630.0,339.0 635.0,342.0 640.0,345.0" fill="none" stroke="currentColor" stroke-width="3"/><line x1="375" y1="71" x2="375" y2="31" stroke="currentColor" stroke-width="2" marker-start="url(#sw-mk)" marker-end="url(#sw-mk)"/><text x="391" y="54" font-size="16" font-weight="bold" fill="currentColor">2A</text><text x="58" y="70" text-anchor="middle" font-size="17" font-weight="bold" fill="currentColor">n = 1</text><text x="58" y="94" text-anchor="middle" font-size="13.5" fill="currentColor">f₁ = v/2L</text><text x="686" y="80" text-anchor="middle" font-size="13.5" fill="currentColor">λ₁ = 2L</text><text x="58" y="205" text-anchor="middle" font-size="17" font-weight="bold" fill="currentColor">n = 2</text><text x="58" y="229" text-anchor="middle" font-size="13.5" fill="currentColor">f₂ = v/L</text><text x="686" y="215" text-anchor="middle" font-size="13.5" fill="currentColor">λ₂ = L</text><text x="58" y="340" text-anchor="middle" font-size="17" font-weight="bold" fill="currentColor">n = 3</text><text x="58" y="364" text-anchor="middle" font-size="13.5" fill="currentColor">f₃ = 3v/2L</text><text x="686" y="350" text-anchor="middle" font-size="13.5" fill="currentColor">λ₃ = 2L/3</text><circle cx="110" cy="75" r="4" fill="currentColor"/><circle cx="640" cy="75" r="4" fill="currentColor"/><circle cx="110" cy="210" r="4" fill="currentColor"/><circle cx="375" cy="210" r="4" fill="currentColor"/><circle cx="640" cy="210" r="4" fill="currentColor"/><circle cx="110" cy="345" r="4" fill="currentColor"/><circle cx="286.7" cy="345" r="4" fill="currentColor"/><circle cx="463.3" cy="345" r="4" fill="currentColor"/><circle cx="640" cy="345" r="4" fill="currentColor"/><text x="375" y="234" text-anchor="middle" font-size="13" fill="currentColor">N</text><text x="242" y="156" text-anchor="middle" font-size="13" fill="currentColor">AN</text><text x="507" y="272" text-anchor="middle" font-size="13" fill="currentColor">AN</text><text x="360" y="426" text-anchor="middle" font-size="14" fill="currentColor">nodes (dots) every λ/2 = L/n; antinodes between them, amplitude 2A</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Tuning a guitar string',
        problem: 'A guitar string is 1.2 m long, has linear density 25 g/m, and sits under 90 N of tension. (a) Find the fundamental frequency and the first two overtones. (b) What tension would raise the fundamental to 60 Hz?',
        steps: [
          { label: 'Wave speed', text: '$v = \\sqrt{\\tau/\\mu} = \\sqrt{90/0.025} = \\sqrt{3600} = 60$ m/s.' },
          { label: 'Fundamental', text: '$f_1 = v/2L = 60/2.4 = 25$ Hz, with $\\lambda_1 = 2L = 2.4$ m.' },
          { label: 'Overtones', text: '$f_2 = 2f_1 = 50$ Hz and $f_3 = 3f_1 = 75$ Hz — the harmonic series is an integer ladder.' },
          { label: 'New tension', text: 'For $f_1 = 60$ Hz the wave speed must be $2Lf_1 = 144$ m/s, so $\\tau = \\mu v^2 = (0.025)(144)^2 = 518$ N — nearly six times tighter.' },
        ],
        result: '$f_1 = 25$ Hz with overtones 50 and 75 Hz; reaching 60 Hz requires $\\tau \\approx 5.2\\times10^{2}$ N — the square-root law again, $f_1 \\propto \\sqrt{\\tau}$.',
      },
      {
        title: "Standing Waves and Resonance: $v = \\lambda f$ check",
        problem: "A wave has $\\lambda = 4\\ \\text{m}$ and $f = 320\\ \\text{Hz}$. Find the wave speed and the string tension if $\\mu = 0.010\\ \\text{kg/m}$.",
        steps: [
          { label: "Speed", text: "$v = \\lambda f = 4\\times 320 = 1280\\ \\text{m/s}$." },
          { label: "Tension", text: "$v = \\sqrt{\\tau/\\mu}$ gives $\\tau = \\mu v^2 = 0.010\\times 1638400 = 16400\\ \\text{N}$." },
        ],
        result: "$v = 1280\\ \\text{m/s}$; $\\tau \\approx 16400\\ \\text{N}$.",
      },
    ],
    keyTakeaways: [
      'Counter-propagating identical waves superpose to $2A\\sin(kx)\\cos(\\omega t)$ — oscillation in place, not travel.',
      'Fixed ends force $L = n\\lambda/2$, so the string\u2019s frequencies are $f_n = nv/2L$, integer multiples of the fundamental.',
      'Driving the string at any $f_n$ produces resonance, growing the standing wave until damping balances the input.',
    ],
    quiz: [
      {
        q: 'On a string fixed at both ends, adjacent nodes are separated by:',
        options: [`$\\lambda/4$`, `$\\lambda/2$`, `$\\lambda$`, `$2\\lambda$`],
        answer: 1,
        explanation: 'Nodes occur where $\\sin(kx) = 0$, every $\\pi$ in phase — a spacing of $\\lambda/2$, equal to $L/n$ for mode $n$.',
      },
      {
        q: 'The third harmonic of a string fixed at both ends has a frequency:',
        options: ['three times the fundamental', 'twice the fundamental', '1.5 times the fundamental', 'nine times the fundamental'],
        answer: 0,
        explanation: '$f_n = nf_1$, so the third harmonic is $3f_1$.',
      },
      {
        q: 'The tension of a fixed-end string is quadrupled. Its fundamental frequency:',
        options: ['doubles', 'quadruples', 'halves', 'is unchanged'],
        answer: 0,
        explanation: '$f_1 = \\sqrt{\\tau/\\mu}/2L$: four times the tension gives twice the speed and twice the fundamental.',
      },
      {
        q: 'The distance from a node to the nearest antinode is:',
        options: [`$\\lambda/2$`, `$\\lambda$`, `$\\lambda/4$`, `$3\\lambda/4$`],
        answer: 2,
        explanation: 'Antinodes sit halfway between nodes, a quarter wavelength from each.',
      },
    ],
  },
]
