import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e — Chapter 35
// Interference — sections 35-1 … 35-5 (ids hall-ch35-s1 … hall-ch35-s5)
// Reference: HRW 11e pp. 1047–1080. Constants: c = 2.998×10⁸ m/s.
// ============================================================================

export const hallCh35Content: SectionContent[] = [
  // ------------------------------------------------------------------ 35-1
  {
    sectionId: 'hall-ch35-s1',
    readingTime: 6,
    intro: "What is physics of interference? Rays and shadows were the language of the last chapter, and they hide the most important fact about light: it is a wave. When light passes through narrow openings or across sharp edges it bends and spreads — it diffracts — and when two portions of the same wave overlap they add or cancel to produce patterns of light and dark called interference. This section builds the wave picture the whole chapter runs on: Huygens' principle for propagation, the law of refraction as a wave consequence, what happens to wavelength inside a medium, and the coherence condition that makes interference visible at all.",
    objectives: [
      "State Huygens' principle and use it to derive the law of refraction, $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$",
      "Compute the speed, wavelength and frequency of light inside a medium of index of refraction $n$",
      "Define coherence and explain why ordinary light sources produce interference only in special arrangements",
    ],
    concepts: [
      {
        term: "Huygens' principle",
        kind: 'definition',
        statement: "**Every point of an advancing wavefront acts as a source of spherical secondary wavelets that spread out at the wave speed; the wavefront a time $t$ later is the envelope — the surface tangent to — all these wavelets.** The construction predicts where the wave goes next, and it works for any wave, water or light.",
        detail: "Proposed in 1678, it is a geometric recipe rather than a theory: give me a wavefront now and I will draw the wavefront later. It becomes quantitative when each wavelet is drawn with radius $vt$.",
      },
      {
        term: 'Law of refraction from wavelets',
        kind: 'theorem',
        statement: "**When a wavefront crosses a boundary between media, the travel times of its two ends fix the bend:** with speeds $v_1 = c/n_1$ and $v_2 = c/n_2$, $$n_1\\sin\\theta_1 = n_2\\sin\\theta_2,$$ where $n = c/v$ is the index of refraction.",
        detail: "Sketch: a plane wavefront of width $w$ meets the surface at angle $\\theta_1$. While one end travels a distance $v_1 t$ along the front in medium 1, the other end crosses and travels $v_2 t$ in medium 2; the two right triangles share a hypotenuse, giving $\\sin\\theta_1/\\sin\\theta_2 = v_1/v_2 = n_2/n_1$. Dispersion — the slow drift of $n$ with wavelength that prisms exploit — enters simply because $n(\\lambda)$ is not constant: each color bends by its own amount.",
      },
      {
        term: 'Frequency fixed, wavelength changes',
        kind: 'law',
        statement: "**Crossing a boundary cannot change the wave's frequency** — the oscillation handed from medium to medium must stay in step at the interface — so with $v = f\\lambda$ in each medium, $$v = \\frac{c}{n},\\qquad \\lambda_n = \\frac{\\lambda}{n}.$$ The wavelength shrinks in the denser medium; the frequency (and the color you perceive) does not change.",
        detail: "This $\\lambda_n$ is the wavelength that must appear in every film and slit formula when the light travels inside a medium of index $n$.",
      },
      {
        term: 'Coherence',
        kind: 'definition',
        statement: "**Two waves are coherent if they have the same frequency and a phase difference that stays constant in time.** Only coherent overlapping waves produce a stable interference pattern — fringes that hold still long enough to see.",
        detail: "Ordinary (thermal) light is emitted in random bursts of about $10^{-8}$ s, so two independent bulbs are coherent only for that flickering instant: their pattern jitters too fast to see. The fix is to derive both interfering waves from the SAME wavefront, as Young did — or to use a laser, whose stimulated emission holds phase over meters.",
      },
      {
        term: 'When waves win over rays',
        kind: 'insight',
        statement: "**Diffraction — the spreading of a wave around edges and through openings — becomes significant when the opening is comparable in size to the wavelength.** For a window (meters) versus visible light ($\\lambda \\sim 5\\times 10^{-7}$ m), the spreading angle is microscopic and ray optics works; for a 0.1 mm slit it is a few tenths of a degree and the wave cannot be ignored.",
        detail: "Ray optics is the $\\lambda \\to 0$ limit of wave optics. This chapter (interference) and the next (diffraction) are the wave-optics chapters; the distinction between them is bookkeeping, not physics.",
      },
    ],
    examples: [
      {
        title: 'Red light entering water',
        problem: 'A laser emits vacuum wavelength $\\lambda = 700$ nm. The beam enters water, whose index of refraction is $n = 1.33$. Find the speed, wavelength and frequency of the light in the water.',
        steps: [
          { label: 'Speed', text: 'Inside the water the speed is $v = c/n = (2.998\\times 10^{8})/1.33 = 2.26\\times 10^{8}$ m/s.' },
          { label: 'Wavelength', text: 'The frequency is fixed at the source, so the wavelength must shrink: $\\lambda_n = \\lambda/n = (700\\ \\mathrm{nm})/1.33 = 526$ nm.' },
          { label: 'Frequency', text: 'In vacuum, $f = c/\\lambda = (2.998\\times 10^{8})/(700\\times 10^{-9}) = 4.28\\times 10^{14}$ Hz — unchanged in the water, as the check $v/\\lambda_n = (2.26\\times 10^{8})/(526\\times 10^{-9}) = 4.28\\times 10^{14}$ Hz confirms.' },
          { label: 'Period', text: 'One oscillation takes $T = 1/f = 2.3\\times 10^{-15}$ s — a couple of femtoseconds, which is why the wave nature only shows at small scales.' },
        ],
        result: 'In water: $v = 2.26\\times 10^{8}$ m/s, $\\lambda_n = 526$ nm, $f = 4.28\\times 10^{14}$ Hz (unchanged) — the light is still red.',
      },
      {
        title: "Light as a Wave: fringe-spacing check",
        problem: "In Young's setup $\\lambda = 550\\ \\text{nm}$, $d = 0.1\\ \\text{mm}$, $L = 1.00\\ \\text{m}$. Find the $m = 1$ fringe position $y = m\\lambda L/d$.",
        steps: [
          { label: "SI", text: "$\\lambda = 5.50\\times 10^{-7}\\ \\text{m}$, $d = 0.1\\times 10^{-3}\\ \\text{m}$." },
          { label: "Divide", text: "$y = 5.50\\times 10^{-7}\\times 1.00/(0.1\\times 10^{-3}) = 5.50\\times 10^{-3}\\ \\text{m}$." },
          { label: "Millimeters", text: "$y \\approx 5.5\\ \\text{mm}$." },
        ],
        result: "$y_1 \\approx 5.5\\ \\text{mm}$ from center.",
      },
    ],
    keyTakeaways: [
      'Huygens: a wavefront is the envelope of secondary wavelets of radius $vt$; refraction follows from the changed wave speed, $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$ with $n = c/v$.',
      'Frequency survives every boundary; speed and wavelength do not: $v = c/n$ and $\\lambda_n = \\lambda/n$.',
      'Stable interference demands coherent sources — same frequency, fixed phase difference — which is why both slits must be lit by the same incident wave.',
    ],
    quiz: [
      {
        q: 'Light of vacuum wavelength 600 nm enters glass with index of refraction 1.5. Which quantity stays unchanged?',
        options: ['Its speed', 'Its wavelength', 'Its frequency', 'Both its wavelength and speed'],
        answer: 2,
        explanation: 'The frequency is fixed by the source; crossing the boundary changes the speed to $c/n$ and the wavelength to $\\lambda/n$.',
      },
      {
        q: 'Two light waves can produce a stable interference pattern only if they are coherent, meaning they have:',
        options: ['the same amplitude', 'the same frequency and a phase difference that stays constant in time', 'equal wavelengths and perpendicular directions', 'phases that are both exactly zero'],
        answer: 1,
        explanation: 'Coherence = same frequency + fixed phase difference. Anything else makes the pattern average away.',
      },
      {
        q: "In Huygens' construction, the wavefront a short time later is:",
        options: ['the line through the centers of the wavelets', 'the envelope — the tangent surface — of the secondary wavelets', 'any one of the secondary wavelets', 'the perpendicular bisector of the wavelets'],
        answer: 1,
        explanation: "Each point emits a wavelet of radius $vt$; the new wavefront is the surface tangent to them all — Huygens' principle.",
      },
      {
        q: 'Wave optics (interference, diffraction) must be used rather than ray optics when:',
        options: ['the openings or obstacles are comparable in size to the wavelength', 'the light is very intense', 'the light is monochromatic', 'the index of refraction exceeds one'],
        answer: 0,
        explanation: 'Spreading and interference are strongest when the geometry is measured in wavelengths; ray optics is the short-wavelength limit.',
      },
    ],
  },
  // ------------------------------------------------------------------ 35-2
  {
    sectionId: 'hall-ch35-s2',
    readingTime: 7,
    intro: "In 1801 Thomas Young let sunlight fall on a single pinhole and then on two more pinholes close together, and on a distant screen he saw something Newton's particle picture of light could not explain: alternating bright and dark bands — interference fringes — exactly like overlapping water ripples. Because the two slits are lit by the same wavefront, they act as coherent, in-phase sources, and the waves they send to any point on the screen arrive with a path difference that varies from point to point: bright where the difference is a whole number of wavelengths, dark where it is a half-odd number. This section sets up the geometry and the fringe formulas.",
    objectives: [
      "Describe Young's arrangement and explain why deriving both slits from one wavefront guarantees coherence",
      "Apply the conditions $d\\sin\\theta = m\\lambda$ for maxima and $d\\sin\\theta = (m+\\tfrac12)\\lambda$ for minima",
      "Compute fringe positions and the fringe spacing $\\Delta y = \\lambda D/d$ on a screen at distance $D$",
    ],
    concepts: [
      {
        term: "Young's arrangement",
        kind: 'method',
        statement: "**Monochromatic light first passes a single slit $S$ (the source) and then a double slit $S_1, S_2$ of separation $d$; a viewing screen sits a distance $D$ away, with $D \\gg d$.** Both slits sit on the same wavefront, so they are forced into coherence and radiate in phase — the single first slit is what makes the whole experiment work.",
        detail: "With slits wide compared to $\\lambda$ each would diffract too little; with them far apart and independently lit the pattern would jitter away. The geometry — narrow slits, close together, far screen — is the whole trick.",
      },
      {
        term: 'Path difference',
        kind: 'definition',
        statement: "**Because $D \\gg d$, the two rays reaching a point $P$ at angle $\\theta$ are effectively parallel, and the lower ray travels farther by** $$\\Delta L = d\\sin\\theta.$$ The construction: drop a perpendicular from one slit onto the other ray; the extra segment between that foot and the second slit is $d\\sin\\theta$.",
        detail: "This is the number to watch: everything the two waves do at $P$ — reinforce or cancel — depends only on how many wavelengths fit into $\\Delta L$.",
      },
      {
        term: 'Fringe conditions',
        kind: 'law',
        statement: "**Constructive interference (bright fringes, maxima):** $$d\\sin\\theta = m\\lambda,\\qquad m = 0, \\pm 1, \\pm 2, \\ldots$$ **Destructive interference (dark fringes, minima):** $$d\\sin\\theta = (m + \\tfrac12)\\lambda,\\qquad m = 0, \\pm 1, \\pm 2, \\ldots$$",
        detail: "$m$ is the order number: the central maximum has $m = 0$ (zero path difference — the waves always arrive in phase there, whatever the wavelength). The first minimum flanking it corresponds to $m = 0$ in the destructive rule, i.e. $d\\sin\\theta = \\lambda/2$.",
      },
      {
        term: 'Fringe spacing',
        kind: 'theorem',
        statement: "**For small angles ($y \\ll D$), the $m$-th bright fringe sits at $y_m = m\\lambda D/d$, and adjacent bright fringes are separated by** $$\\Delta y = \\frac{\\lambda D}{d},$$ independent of $m$ — evenly spaced teeth.",
        detail: "Doubling the screen distance doubles the spacing; doubling the slit separation halves it; longer wavelengths spread more than shorter ones. Measuring $\\Delta y$, $D$ and $d$ is a classic way to determine $\\lambda$ — how Young measured wavelengths a generation before anyone believed the answer.",
      },
      {
        term: "Young's Interference Experiment: solution protocol",
        kind: "method",
        statement: "**Solve Young's Interference Experiment problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is two-beam interference with coherence; the working equation is $\\Delta L = d\\sin\\theta = m\\lambda$, $I = 4I_0\\cos^2(\\beta/2)$, $2L = m\\lambda$ or $(m+\\tfrac12)\\lambda$ (film), $2d = m\\lambda$ (Michelson); every substitution must carry its units so the final unit (meters and nanometers) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $y\\sim \\text{mm}$ for $\\lambda\\sim 550\\ \\text{nm}$, $d\\sim 0.1\\ \\text{mm}$, $L\\sim 1\\ \\text{m}$; coherent, monochromatic source with $L\\gg d$; count phase flips on reflection.",
      },
    ],
    figures: [
      {
        caption: "Young's double-slit geometry. Monochromatic light of wavelength $\\lambda$ reaches the slits $S_1$ and $S_2$, separated by $d$; the viewing screen is a distance $D$ away (drawing not to scale — in practice $D \\gg d$). The two rays to the point $P$ at height $y$ are effectively parallel at angle $\\theta$, so the extra distance is the segment $\\Delta L = d\\sin\\theta$, found by the perpendicular construction from $S_1$ onto the lower ray. Here $P$ sits on the $m = 1$ bright fringe, where $d\\sin\\theta = \\lambda$; the curve along the screen sketches the resulting intensity.",
        svg: `<svg viewBox="0 0 760 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Young double-slit geometry with path difference construction"><defs><marker id="a35" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><text x="34" y="66" font-size="15" fill="currentColor" opacity="0.8">monochromatic light, wavelength λ</text><line x1="50" y1="100" x2="146" y2="100" stroke="currentColor" stroke-width="2" marker-end="url(#a35)" opacity="0.8"/><line x1="50" y1="190" x2="146" y2="190" stroke="currentColor" stroke-width="2" marker-end="url(#a35)" opacity="0.8"/><line x1="50" y1="280" x2="146" y2="280" stroke="currentColor" stroke-width="2" marker-end="url(#a35)" opacity="0.8"/><line x1="170" y1="30" x2="170" y2="142" stroke="currentColor" stroke-width="7"/><line x1="170" y1="158" x2="170" y2="222" stroke="currentColor" stroke-width="7"/><line x1="170" y1="238" x2="170" y2="370" stroke="currentColor" stroke-width="7"/><text x="154" y="146" text-anchor="end" font-size="18" fill="currentColor">S₁</text><text x="154" y="236" text-anchor="end" font-size="18" fill="currentColor">S₂</text><line x1="136" y1="154" x2="136" y2="226" stroke="currentColor" stroke-width="1.8" marker-start="url(#a35)" marker-end="url(#a35)"/><text x="122" y="195" text-anchor="middle" font-size="18" fill="currentColor">d</text><line x1="170" y1="190" x2="640" y2="190" stroke="currentColor" stroke-width="1.3" stroke-dasharray="7 6" opacity="0.55"/><line x1="170" y1="190" x2="261.6" y2="164.7" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.6"/><path d="M 210,190 A 40,40 0 0 0 208.6,179.3" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="220" y="182" font-size="17" fill="currentColor">θ</text><line x1="170" y1="150" x2="640" y2="60" stroke="currentColor" stroke-width="2" marker-end="url(#a35)"/><line x1="170" y1="230" x2="640" y2="60" stroke="currentColor" stroke-width="2" marker-end="url(#a35)"/><line x1="170" y1="150" x2="195.6" y2="220.7" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 4" opacity="0.8"/><line x1="170" y1="230" x2="195.6" y2="220.7" stroke="currentColor" stroke-width="5"/><line x1="203" y1="254" x2="185" y2="238" stroke="currentColor" stroke-width="1.2" opacity="0.5"/><text x="206" y="264" font-size="16" fill="currentColor">ΔL = d sin θ</text><line x1="300" y1="215" x2="570" y2="215" stroke="currentColor" stroke-width="1.6" marker-start="url(#a35)" marker-end="url(#a35)"/><text x="435" y="207" text-anchor="middle" font-size="17" fill="currentColor">D</text><text x="640" y="20" text-anchor="middle" font-size="15" fill="currentColor">viewing screen</text><line x1="640" y1="30" x2="640" y2="370" stroke="currentColor" stroke-width="4"/><polygon points="606.4,30 599.4,35 593.0,40 587.5,45 583.4,50 580.9,55 580.0,60 580.9,65 583.4,70 587.5,75 593.0,80 599.4,85 606.4,90 613.6,95 620.6,100 627.0,105 632.5,110 636.6,115 639.1,120 640.0,125 639.1,130 636.6,135 632.5,140 627.0,145 620.6,150 613.6,155 606.4,160 599.4,165 593.0,170 587.5,175 583.4,180 580.9,185 580.0,190 580.9,195 583.4,200 587.5,205 593.0,210 599.4,215 606.4,220 613.6,225 620.6,230 627.0,235 632.5,240 636.6,245 639.1,250 640.0,255 639.1,260 636.6,265 632.5,270 627.0,275 620.6,280 613.6,285 606.4,290 599.4,295 593.0,300 587.5,305 583.4,310 580.9,315 580.0,320 580.9,325 583.4,330 587.5,335 593.0,340 599.4,345 606.4,350 613.6,355 620.6,360 627.0,365 632.5,370 640,370 640,30" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><text x="566" y="52" text-anchor="end" font-size="14" fill="currentColor" opacity="0.8">m = 1</text><text x="566" y="182" text-anchor="end" font-size="14" fill="currentColor" opacity="0.8">m = 0</text><text x="566" y="312" text-anchor="end" font-size="14" fill="currentColor" opacity="0.8">m = −1</text><circle cx="640" cy="60" r="4" fill="currentColor"/><text x="628" y="48" text-anchor="end" font-size="18" fill="currentColor">P</text><line x1="668" y1="64" x2="668" y2="186" stroke="currentColor" stroke-width="1.6" marker-start="url(#a35)" marker-end="url(#a35)"/><text x="683" y="128" font-size="17" fill="currentColor">y</text><text x="170" y="390" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.7">barrier with two slits</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Fringe spacing and the fifth maximum',
        problem: "Mercury's green line, $\\lambda = 546$ nm, illuminates two slits separated by $d = 0.20$ mm, and the screen is $D = 1.30$ m away. Find the fringe spacing and the position of the fifth bright fringe above the center.",
        steps: [
          { label: 'Spacing', text: '$\\Delta y = \\lambda D/d = (546\\times 10^{-9})(1.30)/(2.0\\times 10^{-4}) = 3.5\\times 10^{-3}$ m $\\approx 3.5$ mm.' },
          { label: 'Fifth fringe', text: '$y_5 = 5\\Delta y = 5(3.55\\ \\mathrm{mm}) = 17.7$ mm above the central maximum.' },
          { label: 'Angle check', text: 'The small-angle assumption holds: $\\theta_5 \\approx \\sin\\theta_5 = 5\\lambda/d = 5(546\\times 10^{-9})/(2.0\\times 10^{-4}) = 0.0137$ rad $\\approx 0.78^\\circ$, so $y = D\\tan\\theta$ and $D\\sin\\theta$ agree to four digits.' },
          { label: 'Scale', text: 'A 3.5 mm spacing over a 1.3 m throw is easily measured with a traveling microscope on the eyepiece — which is exactly how wavelengths were first counted out.' },
        ],
        result: 'Fringes every 3.5 mm; the $m = 5$ maximum sits 17.7 mm from the center line.',
      },
      {
        title: 'What changes when the whole apparatus is under water?',
        problem: 'The same double-slit setup is submerged in water ($n = 1.33$), with $\\lambda = 546$ nm still measured in vacuum. What is the new fringe spacing?',
        steps: [
          { label: 'Wavelength in water', text: 'The frequency is fixed, so the wavelength in the water is $\\lambda_n = \\lambda/n = (546\\ \\mathrm{nm})/1.33 = 411$ nm.' },
          { label: 'Use the water wavelength', text: 'The fringe condition counts wavelengths of the light actually in the medium, so $\\Delta y = \\lambda_n D/d = (411\\times 10^{-9})(1.30)/(2.0\\times 10^{-4}) = 2.7$ mm.' },
          { label: 'Interpretation', text: 'Equivalently $\\Delta y = \\lambda D/(nd)$: immersing the experiment crowds the fringes by the factor $1/n$. Fringe patterns underwater are compressed — a direct measurement of the wavelength in the medium.' },
        ],
        result: 'The spacing shrinks from 3.5 mm to 2.7 mm — the water-shortened wavelength leaves its fingerprint on the pattern.',
      },
    ],
    keyTakeaways: [
      'The two rays reaching a distant screen point at angle $\\theta$ differ in path by $\\Delta L = d\\sin\\theta$ — bright when this is $m\\lambda$, dark when it is $(m+\\tfrac12)\\lambda$.',
      'Fringe spacing on a far screen: $\\Delta y = \\lambda D/d$ — proportional to $\\lambda$ and $D$, inversely proportional to the slit separation.',
      'The central maximum ($m = 0$) is always bright; measuring $\\Delta y$, $d$ and $D$ yields the wavelength.',
    ],
    quiz: [
      {
        q: 'In a double-slit experiment the slit separation is doubled while $\\lambda$ and $D$ stay fixed. The fringe spacing:',
        options: ['doubles', 'halves', 'quadruples', 'is unchanged'],
        answer: 1,
        explanation: '$\\Delta y = \\lambda D/d$ is inversely proportional to $d$.',
      },
      {
        q: 'The central maximum ($m = 0$) is always bright, whatever the wavelength, because:',
        options: ['both rays travel equal distances and arrive in phase', 'the center of the screen is closest to both slits', 'the amplitude doubles exactly at the center', 'the angle θ is zero so d sin θ = λ'],
        answer: 0,
        explanation: 'At the center the path difference is zero, and the coherent in-phase sources stay in phase there for every wavelength.',
      },
      {
        q: 'The second dark fringe above the central maximum satisfies:',
        options: [`$d\\sin\\theta = \\lambda/2$`, `$d\\sin\\theta = \\lambda$`, `$d\\sin\\theta = 3\\lambda/2$`, `$d\\sin\\theta = 2\\lambda$`],
        answer: 2,
        explanation: 'Minima occur at $(m+\\tfrac12)\\lambda$ with $m = 0, 1, \\ldots$; the second dark fringe has $m = 1$, giving $3\\lambda/2$.',
      },
      {
        q: 'If the screen is moved closer to the slits, the fringes:',
        options: ['spread farther apart', 'crowd closer together — the spacing is proportional to D', 'keep their spacing but grow dimmer', 'disappear entirely'],
        answer: 1,
        explanation: '$\\Delta y = \\lambda D/d$ shrinks linearly with the screen distance $D$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 35-3
  {
    sectionId: 'hall-ch35-s3',
    readingTime: 9,
    intro: "Bright and dark fringes are only half the story: the screen shows a smoothly varying intensity, and its shape — not just the fringe positions — is what a detector actually records. To compute intensity we must add the two electric fields, not the intensities: each wave contributes a sinusoid that we can picture as a rotating phasor, and the intensity is the time average of the squared resultant field. For two slits of equal strength the answer is one cosine-squared: $I = 4I_0\\cos^2(\\phi/2)$, where $\\phi$ is the phase difference the path difference produces. This section builds the phasor tool and the intensity law, and then derives it honestly.",
    objectives: [
      'Represent sinusoidal waves by phasors and add phasors geometrically',
      'Apply $I = 4I_0\\cos^2(\\phi/2)$ with $\\phi = 2\\pi d\\sin\\theta/\\lambda$ to find the intensity at any angle',
      'Explain why intensities alone do not add, and predict fringe contrast for unequal slits',
    ],
    concepts: [
      {
        term: 'Phasor',
        kind: 'notation',
        statement: "**A phasor is a vector of length equal to a wave's amplitude, rotating counterclockwise at angular frequency $\\omega$; its projection on the vertical axis at any instant is the wave's field, $E = E_0\\sin(\\omega t)$.** Adding waves at a point = placing their phasors tail-to-head and taking the vector sum: the resultant's length is the resultant amplitude, its rotation the common frequency.",
        detail: 'A phase lead $\\phi$ is simply the angle between the two phasors. The picture turns the algebra of sinusoids into geometry that can be drawn.',
      },
      {
        term: 'Phase difference from path difference',
        kind: 'law',
        statement: "**A path difference $\\Delta L$ corresponds to a phase difference** $$\\phi = \\frac{2\\pi}{\\lambda}\\,\\Delta L = \\frac{2\\pi d\\sin\\theta}{\\lambda},$$ because one full wavelength of path is $2\\pi$ of phase.",
        detail: "This is the bridge between the geometry of the last section ($d\\sin\\theta$) and the intensity of this one ($\\phi$). Inside a medium, use the wavelength $\\lambda_n$ in the medium.",
      },
      {
        term: 'Two-slit intensity',
        kind: 'theorem',
        statement: "**Two coherent waves of equal amplitude give an intensity** $$I = 4I_0\\cos^2\\!\\frac{\\phi}{2},$$ where $I_0$ is the intensity either slit alone would produce. Maxima $I = 4I_0$ at $\\phi = 2\\pi m$; minima $I = 0$ at $\\phi = (2m+1)\\pi$.",
        detail: 'Not $2I_0$ but $4I_0$ at the peaks, and zero at the troughs: the average over the pattern is $2I_0$, exactly what two independent slits would deliver — interference does not create or destroy light, it redistributes it.',
      },
      {
        term: 'The interference term',
        kind: 'insight',
        statement: "**For any two overlapping waves, $I = I_1 + I_2 + 2\\sqrt{I_1I_2}\\cos\\phi$ — the cross term is the whole story of interference.** For incoherent sources $\\phi$ wanders randomly, $\\langle\\cos\\phi\\rangle = 0$, and the term dies: intensities simply add.",
        detail: "That is why two flashlights aimed at the same wall give a smoothly doubled brightness and no fringes: their phase difference jitters within nanoseconds, faster than any detector can follow. Coherence is the license to keep the cross term.",
      },
      {
        term: "Interference and Double-Slit Intensity: solution protocol",
        kind: "method",
        statement: "**Solve Interference and Double-Slit Intensity problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is two-beam interference with coherence; the working equation is $\\Delta L = d\\sin\\theta = m\\lambda$, $I = 4I_0\\cos^2(\\beta/2)$, $2L = m\\lambda$ or $(m+\\tfrac12)\\lambda$ (film), $2d = m\\lambda$ (Michelson); every substitution must carry its units so the final unit (meters and nanometers) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $y\\sim \\text{mm}$ for $\\lambda\\sim 550\\ \\text{nm}$, $d\\sim 0.1\\ \\text{mm}$, $L\\sim 1\\ \\text{m}$; coherent, monochromatic source with $L\\gg d$; count phase flips on reflection.",
      },
    ],
    examples: [
      {
        title: 'Half-maximum intensity: where is it?',
        problem: "For $d = 0.20$ mm, $\\lambda = 546$ nm and $D = 1.30$ m, find the intensity at the point on the screen halfway (in position) between the central maximum and the first minimum.",
        steps: [
          { label: 'Position', text: 'The first minimum sits at $d\\sin\\theta = \\lambda/2$, i.e. $y = \\lambda D/2d = 17.7$ mm; halfway out is $y = \\lambda D/4d = 8.9$ mm.' },
          { label: 'Phase there', text: 'At that point $\\Delta L = d\\sin\\theta = \\lambda/4$, so $\\phi = 2\\pi(\\lambda/4)/\\lambda = \\pi/2$ — a quarter turn between the two phasors.' },
          { label: 'Intensity', text: '$I = 4I_0\\cos^2(\\pi/4) = 4I_0(1/2) = 2I_0$ — exactly half the maximum $4I_0$.' },
          { label: 'Geometry check', text: 'Two equal phasors $90^\\circ$ apart form the sides of a square; their diagonal has length $\\sqrt{2}E_0$, and squaring gives $2E_0^2 = 2I_0$ in intensity units — the picture and the formula agree.' },
        ],
        result: 'At 8.9 mm from the center the intensity is $2I_0$ — half the peak — because the cos² profile falls to half exactly one quarter-wavelength of path from a maximum.',
      },
      {
        title: "Interference and Double-Slit Intensity: fringe-spacing check",
        problem: "In Young's setup $\\lambda = 550\\ \\text{nm}$, $d = 0.2\\ \\text{mm}$, $L = 1.00\\ \\text{m}$. Find the $m = 1$ fringe position $y = m\\lambda L/d$.",
        steps: [
          { label: "SI", text: "$\\lambda = 5.50\\times 10^{-7}\\ \\text{m}$, $d = 0.2\\times 10^{-3}\\ \\text{m}$." },
          { label: "Divide", text: "$y = 5.50\\times 10^{-7}\\times 1.00/(0.2\\times 10^{-3}) = 2.75\\times 10^{-3}\\ \\text{m}$." },
          { label: "Millimeters", text: "$y \\approx 2.75\\ \\text{mm}$." },
        ],
        result: "$y_1 \\approx 2.75\\ \\text{mm}$ from center.",
      },
    ],
    keyTakeaways: [
      'Phase difference from path difference: $\\phi = 2\\pi\\Delta L/\\lambda$; then $I = 4I_0\\cos^2(\\phi/2)$ for two equal coherent slits.',
      'Maxima reach $4I_0$ (amplitudes add before squaring); minima reach zero; the pattern averages $2I_0$.',
      'For incoherent sources the interference term averages away and only $I_1 + I_2$ remains.',
    ],
    quiz: [
      {
        q: 'At a point where the phase difference between the two waves is $\\phi = \\pi/2$, the intensity is:',
        options: ['zero', '$I_0$ (one slit alone)', '$2I_0$ — half the maximum', `$4I_0$`],
        answer: 2,
        explanation: '$I = 4I_0\\cos^2(\\pi/4) = 4I_0 \\cdot (1/2) = 2I_0$.',
      },
      {
        q: 'The maxima of the two-slit pattern have intensity $4I_0$ rather than $2I_0$ because:',
        options: ['energy is created at the bright fringes', 'the field amplitudes add before squaring, and $(2E_0)^2$ is four times $E_0^2$', 'no light at all reaches the dark fringes', 'each slit’s intensity doubles at a maximum'],
        answer: 1,
        explanation: 'Intensity goes as amplitude squared: two equal amplitudes in phase give double the amplitude and four times the single-slit intensity.',
      },
      {
        q: 'Two phasors of equal length $E_0$ make an angle $\\phi = 2\\pi/3$ with each other. The amplitude of their sum is:',
        options: [`$2E_0$`, `$E_0$`, `$E_0/2$`, 'zero'],
        answer: 1,
        explanation: 'The isosceles phasor triangle has resultant $2E_0\\cos(\\phi/2) = 2E_0\\cos(\\pi/3) = E_0$.',
      },
      {
        q: 'Two flashlights aimed at the same wall produce no visible fringes because:',
        options: ['their intensities add instead of their fields', 'the interference term averages to zero when the phase difference wanders randomly — incoherence', 'visible light cannot interfere', 'their frequencies always differ too much'],
        answer: 1,
        explanation: 'Independent thermal sources hold a fixed phase only for ~$10^{-8}$ s; the cross term $2\\sqrt{I_1I_2}\\cos\\phi$ averages to zero over any measurement.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'The double-slit intensity, derived honestly',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Superposition of two coherent waves',
            body: "At a point $P$ the two slits deliver two sinusoidal fields of the same frequency and — this is the hypothesis that carries everything — a phase difference $\\phi$ fixed in time: $E_1 = E_0\\sin\\omega t$ and $E_2 = E_0\\sin(\\omega t + \\phi)$. Because the wave equation in vacuum-like media is linear, the total field is the algebraic sum of the fields, never the sum of the intensities. Define intensity as proportional to the time average of the field squared; one slit alone then contributes $I_0 = k\\langle E_1^2\\rangle = \\tfrac12 kE_0^2$ for the constant $k$ (in full electromagnetism $k = c\\varepsilon_0$). The theorem to prove: the pair delivers $I = 4I_0\\cos^2(\\phi/2)$. Every hypothesis is visible: equal amplitudes, single frequency, and a phase difference that holds still while we average — coherence, again.",
          },
          {
            kind: 'derivation',
            heading: 'Adding the sinusoids',
            body: "Use the sum-to-product identity $\\sin A + \\sin B = 2\\sin\\tfrac{A+B}{2}\\cos\\tfrac{A-B}{2}$ with $A = \\omega t + \\phi$, $B = \\omega t$: $$E = E_1 + E_2 = 2E_0\\cos\\!\\frac{\\phi}{2}\\;\\sin\\!\\left(\\omega t + \\frac{\\phi}{2}\\right).$$ The sum is itself a pure sinusoid — amplitude $2E_0\\cos(\\phi/2)$, phase $\\phi/2$ halfway between its parents. That is the phasor diagram in one line: two arrows of length $E_0$ at angle $\\phi$ form an isosceles triangle whose resultant bisects them, with length $2E_0\\cos(\\phi/2)$. When the phasors oppose ($\\phi = \\pi$) the triangle closes and the resultant vanishes.",
          },
          {
            kind: 'derivation',
            heading: 'Averaging to intensity',
            body: "Square and average over a period of the motion; the identity $\\langle\\sin^2\\rangle = \\tfrac12$ kills all time dependence: $$I = k\\langle E^2\\rangle = k\\left(2E_0\\cos\\frac{\\phi}{2}\\right)^{\\!2}\\cdot\\frac12 = 4\\left(\\tfrac12 kE_0^2\\right)\\cos^2\\frac{\\phi}{2} = 4I_0\\cos^2\\frac{\\phi}{2}.$$ The endpoints behave: $\\phi = 2\\pi m$ (path difference $m\\lambda$) gives $4I_0$ — four times one slit, not two, because amplitudes add before squaring — and $\\phi = (2m+1)\\pi$ gives exact darkness. Energy is conserved globally: the $\\cos^2$ fringes merely redistribute what two independent slits would spread uniformly at $2I_0$ per point on average.",
          },
          {
            kind: 'derivation',
            heading: 'Unequal slits and fringe visibility',
            body: "Drop the equal-amplitude assumption: phasors $E_1$ and $E_2$ still at fixed angle $\\phi$. The law of cosines on the phasor triangle gives the resultant amplitude squared directly, $E^2 = E_1^2 + E_2^2 + 2E_1E_2\\cos\\phi$, and after the same $\\tfrac12$ averaging per component: $$I = I_1 + I_2 + 2\\sqrt{I_1I_2}\\,\\cos\\phi,$$ the interference term exposed. So $I_{\\max} = (\\sqrt{I_1}+\\sqrt{I_2})^2$ when the phasors align, $I_{\\min} = (\\sqrt{I_1}-\\sqrt{I_2})^2$ when they oppose — darkness only for matched beams. The Michelson **visibility** of the fringes, $$V = \\frac{I_{\\max}-I_{\\min}}{I_{\\max}+I_{\\min}} = \\frac{2\\sqrt{I_1I_2}}{I_1+I_2},$$ is 1 for equal beams and slides to 0 as one fades: fringe contrast measures beam balance — and, in stellar interferometry, the angular structure of the source itself.",
          },
          {
            kind: 'example',
            heading: 'Numbers: a dim second slit, and fringe widths',
            body: "Let the second slit pass one quarter the intensity of the first, $I_2 = 0.25I_1$, so $\\sqrt{I_1I_2} = 0.5I_1$. Then $I_{\\max} = (1+0.5)^2I_1 = 2.25I_1$, $I_{\\min} = (1-0.5)^2I_1 = 0.25I_1$ — the dark fringes lift to one-ninth of the bright ones — and $V = 2(0.5)/1.25 = 0.8$. Now return to equal slits with the geometry of this section ($d = 0.20$ mm, $\\lambda = 546$ nm, $D = 1.30$ m). Half-maximum intensity demands $\\cos^2(\\phi/2) = \\tfrac12$, i.e. $\\phi = \\pm\\pi/2$: a quarter-wavelength path difference, $y = \\pm\\lambda D/4d = \\pm 8.9$ mm. Each bright fringe is therefore $17.7$ mm wide at half height — exactly half the fringe spacing $\\Delta y = \\lambda D/d = 35.5$ mm. The cos² profile has equally spaced, equally wide teeth: maxima sit one spacing apart, each half-spacing wide at half height.",
          },
          {
            kind: 'remark',
            heading: 'What this derivation did not do',
            body: "It treated each slit as a point source of uniform strength — no single-slit diffraction envelope. Real slits of finite width $a$ multiply this whole pattern by a broad diffraction factor that dips to zero near $\\sin\\theta = \\lambda/a$, the business of Chapter 36; the $\\cos^2$ law is the two-ray interference kernel that survives underneath. It also assumed $\\phi$ fixed — over times long compared with the detector's averaging time, and across path differences shorter than the coherence length. Let the source go thermal — phase bursting and re-forming every $10^{-8}$ s — and the cross term averages to zero before any instrument can follow it: the wall glows evenly, and the world mercifully does not look striped.",
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------ 35-4
  {
    sectionId: 'hall-ch35-s4',
    readingTime: 8,
    intro: "Shine white light on a soap bubble and colors swim across it; look at a coated camera lens edge-on and a faint purple tint remains. Both are interference from thin films: light reflected from the front and back surfaces of a transparent film recombines, and the film's thickness decides which wavelengths reinforce and which cancel. The new ingredient is a subtle one — a reflection can flip the wave, a phase change of $\\pi$ — and it flips only when light bounces off a medium of higher index of refraction. Counting those flips correctly is the entire skill of this section.",
    objectives: [
      'Determine when a reflection flips the wave by half a wavelength (the $\\pi$ phase change)',
      'Write the constructive and destructive conditions for a film of thickness $L$ and index $n$ with zero, one or two phase inversions',
      'Apply the results to nonreflecting coatings, soap films and wedge films',
    ],
    concepts: [
      {
        term: 'Reflection phase shift',
        kind: 'law',
        statement: "**A wave reflected at the boundary onto a medium of higher index of refraction undergoes a phase change of $\\pi$ — equivalent to half a wavelength.** Reflection onto a lower-index medium changes nothing, and the transmitted wave never flips.",
        detail: "Compare strings: a pulse on a light rope tied to a heavy wall comes back inverted; a pulse meeting a free end reflects upright. Light does the same — the optically 'heavier' (higher-$n$) medium inverts.",
      },
      {
        term: 'The film round trip',
        kind: 'definition',
        statement: "**Near perpendicular incidence the two reflected rays differ by one round trip through the film — a path difference of $2L$ — traveled where the wavelength is $\\lambda_n = \\lambda/n$.** The total phase difference is $2\\pi(2L/\\lambda_n)$ plus $\\pi$ for each reflection that flipped the wave.",
        detail: "HRW develops the formulas for near-perpendicular incidence; at oblique incidence the round trip shortens to $2L\\cos\\theta_2$ measured inside the film, and the same bookkeeping applies.",
      },
      {
        term: 'The film rules',
        kind: 'theorem',
        statement: "**Exactly one flipped reflection (air–film–air, like a soap bubble):** constructive in reflected light when $2L = (m+\\tfrac12)\\lambda_n$; destructive when $2L = m\\lambda_n$. **Zero or two flipped reflections (like a coating on glass, where both reflections hit higher index):** the rules swap — constructive when $2L = m\\lambda_n$, destructive when $2L = (m+\\tfrac12)\\lambda_n$, with $m = 0, 1, 2, \\ldots$",
        detail: "The mnemonic that never fails: count the flips. An odd number of $\\pi$ shifts makes half-wavelength thicknesses bright and whole-wavelength thicknesses dark; an even number restores the naive rules. Always reason from the phase sum, never from memorized formulas alone.",
      },
      {
        term: 'Nonreflecting coatings',
        kind: 'insight',
        statement: "**A film with index between air and lens glass makes BOTH reflections flip, so they cancel when the film is a quarter wavelength thick:** $$L = \\frac{\\lambda}{4n}.$$ With magnesium fluoride ($n = 1.38$) and $\\lambda = 550$ nm, the minimum thickness is about $99.6$ nm — roughly 100 nm, a hundred atoms.",
        detail: "The cancellation is exact for one wavelength only; across the visible spectrum it is partial, which is why coated lenses reflect a faint purple sheen — red and blue leak back while green dies.",
      },
      {
        term: 'Film colors and the black film',
        kind: 'insight',
        statement: "**In white light each wavelength has its own constructive thickness, so a wedge-shaped film paints bands of color — a contour map of its own thickness.** And a soap film drained to nearly zero thickness looks black: with one $\\pi$ shift and no path difference, reflection is destructive for every visible wavelength at once.",
        detail: "Drain a large soap film and the top turns black just before it bursts: $2L \\to 0$ with one flip cancels everything reflected. Newton's rings — the same physics in an air wedge between a lens and a plate — appear as a problem set classic.",
      },
    ],
    examples: [
      {
        title: 'Designing a nonreflecting coating',
        problem: "A lens of index 1.5 is coated with magnesium fluoride of index $n = 1.38$ to minimize reflection of $\\lambda = 550$ nm light (roughly the brightest part of the visual response). Find the minimum coating thickness.",
        steps: [
          { label: 'Count the flips', text: 'Air (1.00) → MgF₂ (1.38): reflecting onto higher index — a $\\pi$ flip. MgF₂ (1.38) → glass (1.50): again onto higher index — another $\\pi$ flip. Two inversions, an even number.' },
          { label: 'Pick the rule', text: 'With two flips, the reflected rays cancel (destructive in reflection) when $2L = (m+\\tfrac12)\\lambda_n$. The thinnest choice is $m = 0$: $2L = \\lambda_n/2$, i.e. $L = \\lambda_n/4$.' },
          { label: 'Wavelength in the film', text: 'Inside the coating the wavelength is $\\lambda_n = \\lambda/n = (550\\ \\mathrm{nm})/1.38 = 399$ nm.' },
          { label: 'Thickness', text: '$L = \\lambda_n/4 = \\lambda/(4n) = 550/(4 \\times 1.38) = 99.6$ nm $\\approx 100$ nm — about 500 atoms of MgF₂ stacked.' },
          { label: 'Check the other side', text: 'Light not reflected is transmitted: at this wavelength the coated lens gains transmission — the point of the exercise for camera and binocular objectives with many glass surfaces.' },
        ],
        result: 'A 99.6 nm MgF₂ layer cancels the 550 nm reflection; neighboring wavelengths are only partly canceled, giving the coating its purple tint.',
      },
      {
        title: 'Why the soap film glows red (at the right thickness)',
        problem: "A soap-water film ($n = 1.33$) hangs vertically in air. At a spot where the thickness is just right, the reflected white light is strongly red ($\\lambda = 600$ nm). Find the thickness, and decide what that thickness does to reflected blue light.",
        steps: [
          { label: 'Count the flips', text: 'Air → film: onto higher index — flip. Film → air: onto lower index — no flip. One inversion, odd.' },
          { label: 'Pick the rule', text: 'One flip: constructive reflection requires $2L = (m+\\tfrac12)\\lambda_n$. The thinnest strong-red spot is $m = 0$: $2L = \\lambda_n/2$, so $L = \\lambda/4n$.' },
          { label: 'Thickness', text: '$L = 600/(4\\times 1.33) = 113$ nm.' },
          { label: 'Same thickness, other colors', text: 'Destructive reflection at this $L$ needs $2L = m\\lambda_n$, so $\\lambda = 2Ln = 2(113)(1.33) = 300$ nm — ultraviolet, outside the visible. Within the visible, blue and green are partially suppressed but not extinguished; as gravity drains the film, each thickness sweeps through its own colors until the black of near-zero thickness takes over at the top.' },
        ],
        result: 'A 113 nm film reflects red strongly; the wavelength it would extinguish at that thickness is 300 nm, invisible — so red dominates by default.',
      },
    ],
    keyTakeaways: [
      'Reflection onto a higher-index medium flips the wave by $\\pi$; onto lower index it does not — count the flips before anything else.',
      'Film conditions use the in-film wavelength $\\lambda_n = \\lambda/n$ and the round trip $2L$: one flip swaps the constructive and destructive conditions.',
      'A quarter-wave film, $L = \\lambda/4n \\approx 100$ nm of MgF₂, cancels reflected green light from a lens; a near-zero soap film looks black.',
    ],
    quiz: [
      {
        q: 'A light wave reflecting from a boundary onto a medium of HIGHER index of refraction undergoes a phase change of:',
        options: ['$\\pi$ — equivalently half a wavelength', 'zero', `$\\pi/2$`, '$2\\pi$, but only at normal incidence'],
        answer: 0,
        explanation: 'The optically denser medium plays the heavy wall: the reflected wave flips by half a wavelength.',
      },
      {
        q: 'A soap film in air (one phase inversion) shows strong reflection of vacuum wavelength $\\lambda$ when its thickness $L$ satisfies, with $m = 0, 1, 2, \\ldots$:',
        options: [`$2L = m\\lambda_n$`, `$2L = (m+\\tfrac12)\\lambda_n$`, `$2L = (m+\\tfrac14)\\lambda_n$`, `$L = m\\lambda_n$`],
        answer: 1,
        explanation: 'With one $\\pi$ shift, reflection is constructive when the round trip contributes another half wavelength: $2L = (m+\\tfrac12)\\lambda_n$.',
      },
      {
        q: 'A very thin soap film ($L \\approx 0$) viewed in reflected white light looks black because:',
        options: ['the film absorbs all colors at that thickness', 'with one $\\pi$ reflection shift and essentially no path difference, reflection is destructive for every wavelength', 'thin films transmit only ultraviolet light', 'the front reflection cancels the transmitted light'],
        answer: 1,
        explanation: 'Zero round trip plus one flip: the two reflected rays differ by $\\pi$ for all colors at once, so nothing is reflected.',
      },
      {
        q: 'For a nonreflecting MgF₂ coating ($n = 1.38$) on glass, the minimum thickness that cancels 550 nm reflected light is about:',
        options: ['25 nm', '100 nm', '200 nm', '550 nm'],
        answer: 1,
        explanation: 'Both reflections flip (even count), so cancellation needs $2L = \\lambda_n/2$: $L = \\lambda/4n = 550/(4\\times1.38) \\approx 99.6$ nm.',
      },
    ],
  },
  // ------------------------------------------------------------------ 35-5
  {
    sectionId: 'hall-ch35-s5',
    readingTime: 6,
    intro: "In 1881 Albert Michelson built the most elegant interferometer of them all: a half-silvered mirror, one movable mirror, and two arms. Light is split into two beams that travel out and back along perpendicular paths and are recombined; if the arms differ by half a wavelength the fields cancel, and moving the mirror by that half wavelength sweeps every point of the pattern from bright to dark and back — one fringe. Count fringes while you turn a calibrated screw and you have measured a wavelength in terms of displacement, or a displacement in terms of wavelength: the instrument became the metrologist's ruler, and a century later, the gravitational-wave detector.",
    objectives: [
      'Trace the beams through the beam splitter, compensator plate and two mirrors, and say why the fringes appear',
      "Relate mirror motion to fringe shifts: $\\Delta N = 2\\Delta d/\\lambda$ — one fringe per half wavelength",
      'Describe how interferometry once defined the meter and how LIGO detects gravitational waves',
    ],
    concepts: [
      {
        term: 'The design',
        kind: 'method',
        statement: "**Light from a broad source hits a half-silvered glass plate at $45^\\circ$ — the beam splitter — which passes half its amplitude to the movable mirror $M_1$ and reflects half to the fixed mirror $M_2$.** The reflected beams return through the splitter and are recombined toward the viewer, where each point of the extended source corresponds to a particular pair of path lengths.",
        detail: "An identical glass compensator plate sits in one arm so both beams cross the same thickness of glass — without it, the arm through the splitter's backing glass would lag, and white-light fringes (which need every wavelength matched) would be impossible.",
      },
      {
        term: 'Fringe counting',
        kind: 'law',
        statement: "**The two beams recombine with a path difference equal to twice the arm-length difference, $2d$. Moving the mirror by $\\Delta d$ changes this by $2\\Delta d$, so the pattern shifts by** $$\\Delta N = \\frac{2\\,\\Delta d}{\\lambda}$$ fringes: every half wavelength of mirror travel sweeps one bright-dark-bright cycle past the crosshairs.",
        detail: 'A tilted, nearly matched mirror pair acts like a thin air wedge (straight fringes); a perfectly matched, perpendicular pair gives concentric rings that collapse or bloom as the mirror moves. Either way, count fringes and you have measured $\\lambda$ or $d$ to a fraction of a wavelength.',
      },
      {
        term: 'The meter by light',
        kind: 'insight',
        statement: "**From 1960 to 1983 the meter was defined as exactly 1,650,763.73 wavelengths of the orange radiation of krypton-86** ($\\lambda \\approx 606$ nm) — a Michelson-type interferometer comparison, pursued by Michelson himself with cadmium light decades earlier.",
        detail: "The interferometric meter made length metrology a counting experiment, reproducible in any lab; in 1983 the meter was redefined instead by fixing the speed of light, $c = 299{,}792{,}458$ m/s exactly.",
      },
      {
        term: 'LIGO: the interferometer as telescope',
        kind: 'insight',
        statement: "**LIGO's 4 km Michelson arms (with resonant cavities folding the path to over a thousand km) detected in 2015 a gravitational-wave strain of order $10^{-21}$** — a length change of about $10^{-18}$ m, a few thousandths of a proton diameter.",
        detail: "A passing gravitational wave stretches one arm while squeezing the other; the tiny fringe shift is rescued by laser power, mirror isolation beyond anything in the 1880 design — and by the fact that the Michelson geometry converts length into light intensity, exactly as this section describes.",
      },
      {
        term: "Michelson's Interferometer: solution protocol",
        kind: "method",
        statement: "**Solve Michelson's Interferometer problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is two-beam interference with coherence; the working equation is $\\Delta L = d\\sin\\theta = m\\lambda$, $I = 4I_0\\cos^2(\\beta/2)$, $2L = m\\lambda$ or $(m+\\tfrac12)\\lambda$ (film), $2d = m\\lambda$ (Michelson); every substitution must carry its units so the final unit (meters and nanometers) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $y\\sim \\text{mm}$ for $\\lambda\\sim 550\\ \\text{nm}$, $d\\sim 0.1\\ \\text{mm}$, $L\\sim 1\\ \\text{m}$; coherent, monochromatic source with $L\\gg d$; count phase flips on reflection.",
      },
    ],
    examples: [
      {
        title: 'Measuring a wavelength by counting fringes',
        problem: 'A Michelson interferometer is lit by an unknown monochromatic source. The movable mirror is displaced $\\Delta d = 0.158$ mm (read off a calibrated micrometer screw), and exactly $N = 500$ fringe shifts are counted at the crosshairs. What is the wavelength?',
        steps: [
          { label: 'The counting law', text: 'Each fringe corresponds to a mirror motion of $\\lambda/2$: the round-trip path difference must change by a full $\\lambda$ to bring the pattern back to the same brightness.' },
          { label: 'Per-fringe motion', text: 'One fringe per $\\Delta d/N = 0.158\\ \\mathrm{mm}/500 = 316$ nm of mirror travel — so $\\lambda/2 = 316$ nm.' },
          { label: 'Wavelength', text: '$\\lambda = 2\\Delta d/N = 2(1.58\\times 10^{-4}\\ \\mathrm{m})/500 = 6.32\\times 10^{-7}$ m $= 632$ nm.' },
          { label: 'Sanity check', text: 'That is essentially the red helium–neon laser line at 632.8 nm — and counting fringes this way is accurate to a small fraction of a fringe, far better than any ruler could hope to be.' },
        ],
        result: '$\\lambda = 632$ nm: half a micron of light measured with a screw, by counting 500 bright-dark cycles.',
      },
      {
        title: "Michelson's Interferometer: fringe-spacing check",
        problem: "In Young's setup $\\lambda = 550\\ \\text{nm}$, $d = 0.15\\ \\text{mm}$, $L = 1.00\\ \\text{m}$. Find the $m = 1$ fringe position $y = m\\lambda L/d$.",
        steps: [
          { label: "SI", text: "$\\lambda = 5.50\\times 10^{-7}\\ \\text{m}$, $d = 0.15\\times 10^{-3}\\ \\text{m}$." },
          { label: "Divide", text: "$y = 5.50\\times 10^{-7}\\times 1.00/(0.15\\times 10^{-3}) = 3.67\\times 10^{-3}\\ \\text{m}$." },
          { label: "Millimeters", text: "$y \\approx 3.67\\ \\text{mm}$." },
        ],
        result: "$y_1 \\approx 3.67\\ \\text{mm}$ from center.",
      },
    ],
    keyTakeaways: [
      'A beam splitter divides amplitude into two arms; recombining them turns any arm-length difference into a fringe pattern.',
      'One fringe per half wavelength of mirror motion: $\\Delta N = 2\\Delta d/\\lambda$ — the basis of precision length measurement and the former definition of the meter.',
      'The same geometry, scaled to 4 km and $10^{-18}$ m sensitivity, is LIGO — interference is still doing the measuring.',
    ],
    quiz: [
      {
        q: 'In a Michelson interferometer, moving the movable mirror by one full wavelength $\\lambda$ shifts the pattern by:',
        options: ['one fringe', 'two fringes', 'half a fringe', 'no shift at all'],
        answer: 1,
        explanation: 'Moving the mirror $\\lambda$ changes the round-trip difference by $2\\lambda$ — two full fringe cycles.',
      },
      {
        q: 'The compensator plate in one arm exists so that:',
        options: ['both beams cross the same thickness of glass, keeping the optical paths matched for white light', 'the mirror can be tilted accurately', 'the fringes appear brighter', 'the beam splitter does not absorb light'],
        answer: 0,
        explanation: 'One beam would otherwise cross the splitter twice and the other not at all; the compensator equalizes glass paths so all wavelengths stay in step.',
      },
      {
        q: 'A mirror moves 0.100 mm and 400 fringes are counted. The wavelength is:',
        options: ['250 nm', '400 nm', '500 nm', '633 nm'],
        answer: 2,
        explanation: '$\\lambda = 2\\Delta d/N = 2(1.00\\times 10^{-4})/400 = 5.00\\times 10^{-7}$ m $= 500$ nm.',
      },
    ],
  },
]
