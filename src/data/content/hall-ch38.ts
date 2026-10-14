import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 38
// Photons and Matter Waves — sections 38-1 … 38-9 (ids hall-ch38-s1 … s9)
// Core: E = hf, the photoelectric effect, photon momentum and Compton
// scattering, the birth of quantum physics, de Broglie matter waves,
// Schrödinger's equation, the uncertainty principle, the potential step,
// and tunneling (with the masters-tier transmission derivation).
// ============================================================================

export const hallCh38Content: SectionContent[] = [
  // ------------------------------------------------------------------ 38-1
  {
    sectionId: 'hall-ch38-s1',
    readingTime: 5,
    intro: 'Classical electromagnetic theory calls light a continuous wave, but experiment keeps score in lumps: light of frequency $f$ is emitted and absorbed only in whole quanta of energy $hf$ — photons. This section installs the photon energy bookkeeping that the rest of the chapter spends: the photoelectric effect, Compton scattering, and finally matter waves all trade in this currency.',
    objectives: [
      'Compute photon energy from $E = hf = hc/\\lambda$ in joules and electron-volts',
      'Relate light power to photon rate, $\\dot N = P/(hc/\\lambda)$',
      'Explain why photon lumps went unnoticed until the 20th century',
    ],
    concepts: [
      {
        term: 'Photon energy',
        kind: 'law',
        statement: '**Light of frequency $f$ delivers its energy in quanta — photons — of energy** $$E = hf = \\frac{hc}{\\lambda}, \\qquad h = 6.626\\times10^{-34}\\ \\mathrm{J\\,s}.$$ A handy shortcut: $hc = 1240\\ \\mathrm{eV\\cdot nm}$, so a 620 nm red photon carries exactly 2.0 eV.',
        detail: 'Intensity controls how many photons arrive per second, never the energy per photon: dimming green light changes the counting rate, not the coinage.',
      },
      {
        term: 'Photons are absorbed whole',
        kind: 'insight',
        statement: '**An atom or electron absorbs a photon entirely or not at all — there are no fractional events.** Emission is equally discrete: an atom sheds energy $hf$ by creating one photon. Energy bookkeeping in light–matter interaction is digital, not analog.',
      },
      {
        term: 'Power as photon rate',
        kind: 'method',
        statement: '**A beam of power $P$ at wavelength $\\lambda$ delivers photons at the rate** $$\\dot N = \\frac{P}{E_{\\text{photon}}} = \\frac{P\\lambda}{hc}.$$ Divide power by per-photon energy — the same bookkeeping as crates per truck.',
      },
      {
        term: 'Why photons escaped notice',
        kind: 'insight',
        statement: '**Even a feeble beam is an avalanche of quanta.** A milliwatt laser emits $10^{15}$ photons each second; a candle seen across a dark room still delivers thousands per second to your pupil. Only experiments precise enough to see single quantum events — the photoelectric effect below — could catch light counting itself out in lumps.',
      },
      {
        term: "The Photon, the Quantum of Light: solution protocol",
        kind: "method",
        statement: "**Solve The Photon, the Quantum of Light problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quanta with $E = hf$ and matter waves with $\\lambda = h/p$; the working equation is $E = hf$, $hf = \\Phi+K_{\\max}$, $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$, $\\lambda = h/p$, $\\Delta x\\,\\Delta p \\ge \\hbar/2$; every substitution must carry its units so the final unit ($\\text{eV}$ and $\\text{nm/pm}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$; $hf > \\Phi$ for emission; uncertainty is statistical over ensembles.",
      },
    ],
    examples: [
      {
        title: 'Counting photons from a laser pointer',
        problem: 'A helium–neon laser emits 1.0 mW at 633 nm. How much energy does each photon carry, and how many leave the laser per second?',
        steps: [
          { label: 'Photon energy', text: '$E = hc/\\lambda = 1240/633 = 1.96$ eV $= 3.14\\times10^{-19}$ J.' },
          { label: 'Rate', text: '$\\dot N = P/E = (1.0\\times10^{-3})/(3.14\\times10^{-19}) = 3.2\\times10^{15}$ photons/s.' },
          { label: 'Perspective', text: 'At that rate, a single photon departs every 3 femtoseconds — light\'s graininess is far below human perception, which needs thousands of photons to register a flash.' },
        ],
        result: 'Each photon: 1.96 eV; the beam carries $3.2\\times10^{15}$ photons per second.',
      },
      {
        title: "The Photon, the Quantum of Light: photon-energy check",
        problem: "Find the photon energy $E = hc/\\lambda$ for $\\lambda = 500\\ \\text{nm}$ in eV ($hc = 1240\\ \\text{eV}\\cdot\\text{nm}$).",
        steps: [
          { label: "Shortcut", text: "$E = 1240/500 = 2.48\\ \\text{eV}$." },
          { label: "Joules", text: "$2.48\\ \\text{eV}\\times 1.60\\times 10^{-19} = 3.97\\times 10^{-19}\\ \\text{J}$." },
        ],
        result: "$E \\approx 2.48\\ \\text{eV}$.",
      },
    ],
    keyTakeaways: [
      'Photon energy: $E = hf = hc/\\lambda$, with $hc = 1240$ eV·nm making eV–nm conversions one step.',
      'Intensity sets photon rate $\\dot N = P\\lambda/hc$; each photon\'s energy is fixed by frequency.',
      'Absorption and emission are whole-photon events — light–matter energy exchange is discrete.',
    ],
    quiz: [
      {
        q: 'A photon of wavelength 620 nm carries energy:',
        options: ['2.0 eV', '2.0 keV', '0.5 eV', '1.2 eV'],
        answer: 0,
        explanation: '$E = 1240/620$ eV = 2.0 eV — the whole point of the $hc = 1240$ eV·nm shortcut.',
      },
      {
        q: 'The light from a source is dimmed at fixed wavelength. What changes?',
        options: ['the photon arrival rate only', 'the energy per photon', 'both rate and per-photon energy', 'the wavelength'],
        answer: 0,
        explanation: '$E = hc/\\lambda$ depends only on wavelength; power divides among fewer photons of the same energy.',
      },
      {
        q: 'A 3.0 mW beam at 500 nm emits approximately how many photons per second?',
        options: [`$7.5\\times10^{15}$`, `$7.5\\times10^{12}$`, `$1.9\\times10^{15}$`, `$3.0\\times10^{18}$`],
        answer: 0,
        explanation: '$\\dot N = P\\lambda/hc = (3.0\\times10^{-3})(500\\times10^{-9})/(1.986\\times10^{-25}) \\approx 7.5\\times10^{15}$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 38-2
  {
    sectionId: 'hall-ch38-s2',
    readingTime: 6,
    intro: "Shine light on metal and electrons pop out — but the details refuse every classical prediction. Electrons emerge with a maximum kinetic energy set by the light's frequency, not its intensity; below a cutoff frequency nothing comes out at all, however bright the lamp; and emission starts instantly. Einstein\'s 1905 explanation — light comes in photons, each electron swallows one — earned the Nobel Prize and made the photon real.",
    objectives: [
      'Define stopping potential and work function and relate them to electron kinetic energy',
      "Apply Einstein's photoelectric equation $K_{\\max} = hf - \\Phi$ and find the cutoff wavelength",
      'List the classical predictions that experiment contradicts',
    ],
    concepts: [
      {
        term: 'The photoelectric effect',
        kind: 'definition',
        statement: '**Light striking a metal surface ejects electrons — photoelectrons.** The most energetic ones can be turned back by a stopping potential $V_0$ satisfying $$K_{\\max} = eV_0.$$ Measuring $V_0$ against frequency maps the photon\'s energy budget directly.',
      },
      {
        term: "Einstein's photon account",
        kind: 'law',
        statement: '**One photon, one electron:** $$K_{\\max} = hf - \\Phi.$$ The photon delivers $hf$; the electron pays the escape fee $\\Phi$ (the work function) and keeps the change. Nothing left over — no electron can absorb two photons, so $K_{\\max}$ depends on frequency alone, never on intensity.',
      },
      {
        term: 'Work function and cutoff',
        kind: 'definition',
        statement: '**The work function $\\Phi$ is the minimum energy needed to free an electron from the metal surface** — about 2.1 eV for cesium, 4.5–5.0 eV for most metals. The threshold follows: no emission for $f < f_0 = \\Phi/h$, or $\\lambda > \\lambda_{\\max} = hc/\\Phi$.',
      },
      {
        term: 'Where classical waves fail',
        kind: 'insight',
        statement: '**The wave theory predicted (1) energy growing with intensity, (2) no frequency cutoff, (3) a time lag while electrons soaked up wave energy.** Experiments refuted all three: dim blue light ejects fast electrons at once, while bright red light ejects none — ever. Millikan\'s decade of precision checks (1916) confirmed Einstein\'s slope $h$ and won him the Nobel too.',
      },
      {
        term: "The Photoelectric Effect: solution protocol",
        kind: "method",
        statement: "**Solve The Photoelectric Effect problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quanta with $E = hf$ and matter waves with $\\lambda = h/p$; the working equation is $E = hf$, $hf = \\Phi+K_{\\max}$, $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$, $\\lambda = h/p$, $\\Delta x\\,\\Delta p \\ge \\hbar/2$; every substitution must carry its units so the final unit ($\\text{eV}$ and $\\text{nm/pm}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$; $hf > \\Phi$ for emission; uncertainty is statistical over ensembles.",
      },
    ],
    examples: [
      {
        title: 'Ultraviolet on cesium',
        problem: 'Light of wavelength 200 nm strikes a cesium surface with work function $\\Phi = 2.1$ eV. Find the maximum photoelectron energy, the stopping potential, and the cutoff wavelength.',
        steps: [
          { label: 'Photon energy', text: '$E = hc/\\lambda = 1240/200 = 6.2$ eV.' },
          { label: 'Maximum kinetic energy', text: '$K_{\\max} = hf - \\Phi = 6.2 - 2.1 = 4.1$ eV.' },
          { label: 'Stopping potential', text: '$eV_0 = K_{\\max}$, so $V_0 = 4.1$ V.' },
          { label: 'Cutoff', text: '$\\lambda_{\\max} = hc/\\Phi = 1240/2.1 = 590$ nm — yellow-green light is the longest wavelength that frees electrons from cesium.' },
        ],
        result: 'K_max = 4.1 eV, V₀ = 4.1 V, cutoff at 590 nm. Doubling the intensity would double the current but leave every one of these numbers fixed.',
      },
      {
        title: "The Photoelectric Effect: photon-energy check",
        problem: "Find the photon energy $E = hc/\\lambda$ for $\\lambda = 400\\ \\text{nm}$ in eV ($hc = 1240\\ \\text{eV}\\cdot\\text{nm}$).",
        steps: [
          { label: "Shortcut", text: "$E = 1240/400 = 3.1\\ \\text{eV}$." },
          { label: "Joules", text: "$3.1\\ \\text{eV}\\times 1.60\\times 10^{-19} = 4.97\\times 10^{-19}\\ \\text{J}$." },
        ],
        result: "$E \\approx 3.1\\ \\text{eV}$.",
      },
    ],
    keyTakeaways: [
      "$K_{\\max} = hf - \\Phi$: frequency sets electron energy; intensity sets only the count.",
      'The stopping potential measures $K_{\\max}$ directly: $eV_0 = hf - \\Phi$.',
      'The cutoff wavelength $hc/\\Phi$ and the instant, intensity-independent emission killed the classical wave account.',
    ],
    quiz: [
      {
        q: 'In the photoelectric effect, increasing the light intensity at fixed wavelength increases:',
        options: ['the number of ejected electrons per second', 'the maximum kinetic energy of the electrons', 'the work function', 'the cutoff frequency'],
        answer: 0,
        explanation: 'More photons per second means more one-photon ejections; each electron still gets the same $hf$.',
      },
      {
        q: 'A metal with $\\Phi = 4.0$ eV is lit with 400 nm light. What is the maximum kinetic energy of the photoelectrons?',
        options: ['3.1 eV', 'there is no emission at all', '0.9 eV', '7.1 eV'],
        answer: 1,
        explanation: 'The photon energy is $E = 1240/400 = 3.1$ eV, which is below the work function $\\Phi = 4.0$ eV — each photon is individually too weak to free an electron, so nothing is emitted at any intensity.',
      },
      {
        q: 'The stopping potential $V_0$ is defined by:',
        options: [`$eV_0 = K_{\\max}$`, `$eV_0 = hf$`, `$V_0 = \\Phi/e$`, `$eV_0 = hc$`],
        answer: 0,
        explanation: 'It is the reverse voltage that just stops the fastest photoelectrons.',
      },
      {
        q: 'Light below the cutoff frequency shines on a metal. After a very long time:',
        options: ['still no electrons are emitted', 'electrons slowly accumulate energy and escape', 'only the fastest electrons escape', 'the metal heats up and emits thermally'],
        answer: 0,
        explanation: 'One-photon absorption is all-or-nothing: a sub-threshold photon is simply not absorbed for escape, no matter how long the lamp shines. (Thermal emission would require enormous heating.)',
      },
    ],
  },
  // ------------------------------------------------------------------ 38-3
  {
    sectionId: 'hall-ch38-s3',
    readingTime: 7,
    intro: "A photon carries momentum as well as energy, and Compton proved it by billiards: X-ray photons bouncing off electrons emerge with lower energy and measurably longer wavelength, exactly as a collision between two particles demands. The same experiments show the other face: photons sent one at a time through a double slit still assemble an interference pattern. Particle and wave stop being rivals and become two readings of one thing.",
    objectives: [
      'Compute photon momentum from $p = E/c = h/\\lambda$',
      'Apply the Compton shift $\\Delta\\lambda = (h/mc)(1 - \\cos\\phi)$ and the Compton wavelength',
      'Describe single-photon interference and what it implies about the photon',
    ],
    concepts: [
      {
        term: 'Photon momentum',
        kind: 'law',
        statement: '**From the relativistic identity with zero rest mass, a photon of energy $E$ carries momentum** $$p = \\frac{E}{c} = \\frac{hf}{c} = \\frac{h}{\\lambda}.$$ Direction is the direction of travel; a light beam reverses something\'s momentum whenever it is absorbed or reflected.',
      },
      {
        term: 'Compton scattering',
        kind: 'law',
        statement: '**A photon scattering from a free electron (mass $m$) at photon angle $\\phi$ emerges with a longer wavelength:** $$\\Delta\\lambda = \\lambda\' - \\lambda = \\frac{h}{mc}(1 - \\cos\\phi).$$ The **Compton wavelength** $h/mc = 2.43$ pm for the electron — the shift at $\\phi = 90^\\circ$, and the natural length scale of electron-photon collisions.',
        detail: 'The shift depends only on the scattering angle — not on the incident wavelength or the intensity. It is a property of the collision, not of the beam.',
      },
      {
        term: 'A collision between particles',
        kind: 'insight',
        statement: '**Compton\'s formula follows from conserving relativistic energy and momentum in a two-body collision** — photon in, photon out, electron recoiling. Nothing about it can be derived from a classical wave, which would scatter without changing frequency. The electron leaves with the difference: $K_e = hc/\\lambda - hc/\\lambda\'$.',
      },
      {
        term: 'One photon at a time',
        kind: 'insight',
        statement: '**Send photons through a double slit so weakly that only one is in the apparatus at a time, and each arrives as a single dot — but the dots accumulate into interference fringes.** Each photon interferes with itself (its probability wave through both slits), and the pattern builds exactly where the wave calculation says. Try to learn which slit it took, and the pattern dissolves.',
      },
      {
        term: "Photons, Momentum, Compton Scattering, Light Interference: solution protocol",
        kind: "method",
        statement: "**Solve Photons, Momentum, Compton Scattering, Light Interference problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quanta with $E = hf$ and matter waves with $\\lambda = h/p$; the working equation is $E = hf$, $hf = \\Phi+K_{\\max}$, $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$, $\\lambda = h/p$, $\\Delta x\\,\\Delta p \\ge \\hbar/2$; every substitution must carry its units so the final unit ($\\text{eV}$ and $\\text{nm/pm}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$; $hf > \\Phi$ for emission; uncertainty is statistical over ensembles.",
      },
    ],
    figures: [
      {
        caption: 'Compton geometry. An incident photon of wavelength $\\lambda$ scatters from an electron at angle $\\phi$, leaving with $\\lambda\' = \\lambda + (h/mc)(1-\\cos\\phi)$; the electron recoils with the energy and momentum the photon lost. Conservation of $E$ and $p$ in this two-particle collision is the whole derivation.',
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compton scattering geometry with incident photon, scattered photon at angle phi, and recoiling electron"><defs><marker id="cmpA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><path d="M40,180 q10,-13 20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0" fill="none" stroke="currentColor" stroke-width="2.4" marker-end="url(#cmpA)"/><text x="105" y="150" font-size="15" fill="currentColor">incident photon</text><text x="105" y="170" font-size="14" fill="currentColor" opacity="0.85">λ, momentum h/λ</text><circle cx="300" cy="180" r="26" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2.4"/><text x="300" y="187" text-anchor="middle" font-size="17" fill="currentColor">e⁻</text><line x1="328" y1="180" x2="430" y2="180" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 5" opacity="0.6"/><path d="M330,180 q12,-15 24,0 t24,0 t24,0 t24,0 t24,0 t24,0 t24,0 t24,0 t24,0" fill="none" stroke="currentColor" stroke-width="2.4" marker-end="url(#cmpA)" transform="rotate(-40 330 180)"/><text x="530" y="82" font-size="15" fill="currentColor">scattered photon</text><text x="530" y="102" font-size="14" fill="currentColor" opacity="0.85">λ′ = λ + Δλ</text><path d="M366,180 A 66 66 0 0 0 350.6,137.6" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="368" y="150" font-size="16" fill="currentColor">φ</text><line x1="322" y1="198" x2="620" y2="296" stroke="currentColor" stroke-width="2.4" marker-end="url(#cmpA)"/><text x="516" y="288" font-size="15" fill="currentColor">recoil electron</text><text x="516" y="308" font-size="14" fill="currentColor" opacity="0.85">gains kinetic energy and momentum</text><path d="M360,180 A 60 60 0 0 1 355.9,201.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 4" opacity="0.75"/><text x="336" y="222" font-size="16" fill="currentColor">θ</text><text x="440" y="240" text-anchor="middle" font-size="16" fill="currentColor">Δλ = (h/mc)(1 − cos φ)</text><text x="440" y="262" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.8">h/mc = 2.43 pm for the electron</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'A 90° Compton bounce',
        problem: 'An X-ray photon of wavelength 100 pm scatters from a stationary free electron at $\\phi = 90^\\circ$. Find the scattered wavelength and the electron\'s recoil kinetic energy.',
        steps: [
          { label: 'Shift', text: '$\\Delta\\lambda = (h/mc)(1 - \\cos 90^\\circ) = 2.43$ pm (the Compton wavelength itself).' },
          { label: 'Scattered photon', text: '$\\lambda\' = 100 + 2.43 = 102.43$ pm.' },
          { label: 'Energy lost by photon', text: "$K_e = hc(1/\\lambda - 1/\\lambda') = 1240(1/0.100 - 1/0.10243)\\ \\mathrm{eV} = 1240(0.2373) = 294$ eV." },
          { label: 'Where it went', text: 'The electron carries off 294 eV — a substantial kick from a single photon, and exactly what particle-collision bookkeeping predicts.' },
        ],
        result: "λ′ = 102.43 pm and the electron recoils with K ≈ 294 eV — the photon paid for it by reddening.",
      },
      {
        title: "Photons, Momentum, Compton Scattering, Light Interference: photon-energy check",
        problem: "Find the photon energy $E = hc/\\lambda$ for $\\lambda = 300\\ \\text{nm}$ in eV ($hc = 1240\\ \\text{eV}\\cdot\\text{nm}$).",
        steps: [
          { label: "Shortcut", text: "$E = 1240/300 = 4.13\\ \\text{eV}$." },
          { label: "Joules", text: "$4.13\\ \\text{eV}\\times 1.60\\times 10^{-19} = 6.62\\times 10^{-19}\\ \\text{J}$." },
        ],
        result: "$E \\approx 4.13\\ \\text{eV}$.",
      },
    ],
    keyTakeaways: [
      'Photons carry momentum $p = h/\\lambda$; scattering exchanges momentum with electrons like a particle collision.',
      'The Compton shift $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$ depends only on angle, with $h/mc = 2.43$ pm for electrons.',
      'Single photons build interference patterns one dot at a time — probability waves, not little bullets.',
    ],
    quiz: [
      {
        q: 'A photon scatters straight back ($\\phi = 180^\\circ$). The wavelength shift is:',
        options: ['twice the Compton wavelength, 4.86 pm', 'the Compton wavelength, 2.43 pm', 'zero', 'half the Compton wavelength'],
        answer: 0,
        explanation: '$1 - \\cos 180^\\circ = 2$, the maximum shift.',
      },
      {
        q: 'The Compton shift is independent of the incident wavelength because:',
        options: ['it is set by the electron\'s Compton wavelength and the geometry alone', 'photons have no rest mass', 'X-rays are always the same color', 'the electron absorbs the difference'],
        answer: 0,
        explanation: 'The shift $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$ contains only $h$, $m$, $c$ and the angle — two-body collision bookkeeping.',
      },
      {
        q: 'In single-photon double-slit experiments, each photon:',
        options: ['lands at one point but the ensemble forms fringes', 'splits and lands in two places', 'always lands where classical particles would', 'destroys the pattern when the beam is dim'],
        answer: 0,
        explanation: 'Individual detections are dots; the wave sets the probability of where each dot appears.',
      },
    ],
  },
  // ------------------------------------------------------------------ 38-4
  {
    sectionId: 'hall-ch38-s4',
    readingTime: 5,
    intro: 'Quantum physics did not arrive as one theory: it accreted, crisis by crisis, between 1900 and 1927. Planck patched blackbody radiation with a desperate guess, Einstein promoted the guess to a real particle of light, Compton caught those particles colliding, and de Broglie turned the wave-particle duality back onto matter itself. This section is the story of that chain — the "old quantum theory" that the new mechanics of Schrödinger and Heisenberg would eventually absorb.',
    objectives: [
      'Describe Planck\'s blackbody hypothesis and why it was needed',
      'Order the milestones: Planck 1900, Einstein 1905, Compton 1923, de Broglie 1924, Schrödinger 1926',
      'Explain what the old quantum theory could and could not do',
    ],
    concepts: [
      {
        term: "Planck's desperate act",
        kind: 'law',
        statement: '**To derive the blackbody spectrum, Planck postulated that the walls\' oscillators exchange energy with radiation only in quanta $E = nhf$** — introducing the constant $h$ on 14 December 1900. The formula fit every wavelength, and the ultraviolet catastrophe (classical theory\'s infinite energy at short wavelengths) vanished.',
        detail: 'Planck believed the quantization was an accounting trick of the oscillators, not of the light itself — it took Einstein to make that leap.',
      },
      {
        term: 'The chain of evidence',
        kind: 'insight',
        statement: '**Einstein (1905): light itself is quantized — explains the photoelectric effect. Compton (1923): photons scatter off electrons like particles — wavelength shift measured. De Broglie (1924): if waves are particles, particles are waves, $\\lambda = h/p$.** Each step turned a mathematical device into physical reality, and each won a Nobel Prize.',
      },
      {
        term: 'Old versus new quantum theory',
        kind: 'insight',
        statement: '**The old theory answered special questions — spectra, scattering, diffraction of electrons — without a coherent dynamics.** The new mechanics (Schrödinger\'s equation 1926, Heisenberg\'s matrices 1925) provided it: wave functions evolving by a wave equation, predictions by probability. Everything in the old theory reappears inside the new.',
      },
      {
        term: "The Birth of Quantum Physics: solution protocol",
        kind: "method",
        statement: "**Solve The Birth of Quantum Physics problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quanta with $E = hf$ and matter waves with $\\lambda = h/p$; the working equation is $E = hf$, $hf = \\Phi+K_{\\max}$, $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$, $\\lambda = h/p$, $\\Delta x\\,\\Delta p \\ge \\hbar/2$; every substitution must carry its units so the final unit ($\\text{eV}$ and $\\text{nm/pm}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$; $hf > \\Phi$ for emission; uncertainty is statistical over ensembles.",
      },
      {
        term: "The Birth of Quantum Physics: scales and validity",
        kind: "insight",
        statement: "**The Birth of Quantum Physics lives at visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$ and the textbook model holds while $hf > \\Phi$ for emission; uncertainty is statistical over ensembles.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a The Birth of Quantum Physics calculation gives seconds when $\\text{eV}$ and $\\text{nm/pm}$ demands meters, or a value orders of magnitude beyond visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Reading the Sun from its color',
        problem: 'The Sun\'s spectrum peaks near 500 nm. Using Wien\'s law, $\\lambda_{\\max}T = 2.898\\times10^{-3}\\ \\mathrm{m\\cdot K}$ (a Planck-spectrum result), find its surface temperature and the energy of its peak photons.',
        steps: [
          { label: 'Temperature', text: '$T = (2.898\\times10^{-3})/(500\\times10^{-9}) = 5.8\\times10^{3}$ K — a white-hot star.' },
          { label: 'Peak photon energy', text: '$E = hc/\\lambda = 1240/500 = 2.5$ eV.' },
          { label: 'Connection', text: 'Sunlight\'s peak photon energy sits exactly where the human eye\'s evolution-tuned sensitivity peak lies — a Planck-spectrum fact written into our biology.' },
        ],
        result: 'T ≈ 5800 K and peak photons carry 2.5 eV.',
      },
      {
        title: "The Birth of Quantum Physics: photon-energy check",
        problem: "Find the photon energy $E = hc/\\lambda$ for $\\lambda = 500\\ \\text{nm}$ in eV ($hc = 1240\\ \\text{eV}\\cdot\\text{nm}$).",
        steps: [
          { label: "Shortcut", text: "$E = 1240/500 = 2.48\\ \\text{eV}$." },
          { label: "Joules", text: "$2.48\\ \\text{eV}\\times 1.60\\times 10^{-19} = 3.97\\times 10^{-19}\\ \\text{J}$." },
        ],
        result: "$E \\approx 2.48\\ \\text{eV}$.",
      },
    ],
    keyTakeaways: [
      'Planck\'s $E = nhf$ rescued the blackbody spectrum and introduced $h$.',
      'Einstein, Compton and de Broglie successively made quanta, photon collisions and matter waves physically real.',
      'The old quantum theory was a patchwork; Schrödinger\'s 1926 equation gave it a dynamics.',
    ],
    quiz: [
      {
        q: 'Planck introduced $h$ in 1900 to explain:',
        options: ['the blackbody spectrum', 'the photoelectric effect', 'electron diffraction', 'radioactivity'],
        answer: 0,
        explanation: 'Quantized oscillator energies fixed the ultraviolet catastrophe.',
      },
      {
        q: 'Which came LAST?',
        options: ["de Broglie's matter-wave hypothesis", "Einstein's photon", "Compton's scattering experiment", "Planck\'s blackbody formula"],
        answer: 0,
        explanation: 'Order: Planck 1900, Einstein 1905, Compton 1923, de Broglie 1924.',
      },
      {
        q: 'The old quantum theory was "old" because:',
        options: ['it solved special problems without a coherent dynamics for wave functions', 'it used classical mechanics', 'it was disproved', 'it lacked conservation laws'],
        answer: 0,
        explanation: 'It patched spectra and collisions; the Schrödinger equation provided the underlying law.',
      },
    ],
  },
  // ------------------------------------------------------------------ 38-5
  {
    sectionId: 'hall-ch38-s5',
    readingTime: 6,
    intro: "De Broglie's leap: if a light wave of wavelength $\\lambda$ carries momentum $h/\\lambda$, then a particle of momentum $p$ should be accompanied by a wave of wavelength $h/p$. An electron accelerated through 54 volts has a wavelength of 0.167 nm — right at atomic spacing — and Davisson and Germer's nickel crystal duly diffracted it. Matter waves went from conjecture to laboratory fact in 1927, and the electron microscope followed.",
    objectives: [
      'Compute the de Broglie wavelength $\\lambda = h/p$ for electrons and other particles',
      'Describe the Davisson–Germer experiment and why it confirmed matter waves',
      'Explain why everyday objects show no observable wave behavior',
    ],
    concepts: [
      {
        term: 'De Broglie wavelength',
        kind: 'law',
        statement: '**Every particle of momentum $p$ has an associated matter wave of wavelength** $$\\lambda = \\frac{h}{p} = \\frac{h}{mv}.$$ The relation is the same one photons obey — de Broglie\'s point was precisely that photons and matter share it.',
      },
      {
        term: 'Davisson–Germer',
        kind: 'method',
        statement: '**Electrons accelerated through 54 V strike a nickel crystal and scatter strongly at the angle a Bragg-type reflection of $\\lambda = 0.167$ nm predicts.** An accident (their vacuum tube broke, the nickel oxidized, and re-annealing it recrystallized the surface into large grains) turned a failed scattering run into the first diffraction of matter — and a Nobel Prize.',
        detail: 'For electrons the convenient shortcut: $\\lambda = 1.226/\\sqrt{V}$ nm with $V$ the accelerating voltage in volts.',
      },
      {
        term: 'The same equation both ways',
        kind: 'insight',
        statement: '**$E = hf$ and $\\lambda = h/p$ are universal — photons and electrons both obey both.** What differs is the dispersion: for light $E = pc$, while for nonrelativistic matter $E = p^2/2m$; matter waves and light waves with equal wavelengths carry different energies.',
      },
      {
        term: 'Why baseballs do not diffract',
        kind: 'insight',
        statement: '**A 0.145 kg ball at 40 m/s has $\\lambda = 6.6\\times10^{-34}/5.8 = 1.1\\times10^{-34}$ m — twenty orders of magnitude below a nucleus.** Matter waves matter exactly where $h$ is comparable to the momenta in play: electrons in atoms, neutrons in crystals, atoms in traps. Bigger things do not lack the wave; they lack any aperture that could notice it.',
      },
      {
        term: "Electrons and Matter Waves: solution protocol",
        kind: "method",
        statement: "**Solve Electrons and Matter Waves problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quanta with $E = hf$ and matter waves with $\\lambda = h/p$; the working equation is $E = hf$, $hf = \\Phi+K_{\\max}$, $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$, $\\lambda = h/p$, $\\Delta x\\,\\Delta p \\ge \\hbar/2$; every substitution must carry its units so the final unit ($\\text{eV}$ and $\\text{nm/pm}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$; $hf > \\Phi$ for emission; uncertainty is statistical over ensembles.",
      },
    ],
    examples: [
      {
        title: 'The 54-volt electron',
        problem: 'Find the de Broglie wavelength of an electron accelerated from rest through 54 V, and compare it with atomic spacings.',
        steps: [
          { label: 'Kinetic energy', text: '$K = eV = 54$ eV $= 8.65\\times10^{-18}$ J.' },
          { label: 'Momentum', text: '$p = \\sqrt{2mK} = \\sqrt{2(9.11\\times10^{-31})(8.65\\times10^{-18})} = 5.40\\times10^{-24}\\ \\mathrm{kg\\,m/s}$.' },
          { label: 'Wavelength', text: '$\\lambda = h/p = (6.626\\times10^{-34})/(5.40\\times10^{-24}) = 1.67\\times10^{-10}$ m $= 0.167$ nm — or directly $\\lambda = 1.226/\\sqrt{54}$ nm.' },
          { label: 'Comparison', text: 'Nickel\'s atomic plane spacing is 0.091 nm: the crystal is a perfect grating for these electrons, which is exactly what Davisson and Germer saw.' },
        ],
        result: 'λ = 0.167 nm — comparable to atomic spacings, so crystals diffract electron beams the way they diffract X-rays.',
      },
      {
        title: "Electrons and Matter Waves: de Broglie check",
        problem: "An electron is accelerated through $100\\ \\text{V}$ ($p \\approx 5.40\\times 10^{-24}\\ \\text{kg}\\cdot\\text{m/s}$). Estimate $\\lambda = h/p$.",
        steps: [
          { label: "Divide", text: "$\\lambda = 6.63\\times 10^{-34}/5.40\\times 10^{-24} = 1.23\\times 10^{-10}\\ \\text{m}$." },
          { label: "Angstroms", text: "$\\approx 0.123\\ \\text{nm}$ — atomic scale, hence electron diffraction." },
        ],
        result: "$\\lambda \\approx 0.12\\ \\text{nm}$.",
      },
    ],
    keyTakeaways: [
      'Matter waves: $\\lambda = h/mv$ — the same relation photons follow, now for every particle.',
      'Davisson–Germer: 54 eV electrons (λ = 0.167 nm) diffracted by nickel — matter waves confirmed.',
      'Macroscopic objects have unobservably tiny $\\lambda$; quantum wavelengths matter only at atomic scales.',
    ],
    quiz: [
      {
        q: 'The shortcut for nonrelativistic electrons accelerated through potential $V$ is:',
        options: ['$\\lambda = 1.226/\\sqrt{V}$ nm', '$\\lambda = V/1.226$ nm', '$\\lambda = 1240/V$ nm', `$\\lambda = hV$`],
        answer: 0,
        explanation: 'From $p = \\sqrt{2meV}$ and $\\lambda = h/p$.',
      },
      {
        q: 'An electron and a proton move at the same speed. The longer de Broglie wavelength belongs to:',
        options: ['the electron', 'the proton', 'equal', 'neither has a wavelength'],
        answer: 0,
        explanation: 'Smaller momentum ($p = mv$ with smaller $m$) means larger $h/p$.',
      },
      {
        q: 'Davisson and Germer\'s experiment is the matter-wave analogue of:',
        options: ['X-ray diffraction from a crystal', 'the photoelectric effect', 'Compton scattering', 'Young\'s two-slit experiment with sound'],
        answer: 0,
        explanation: 'A crystal grating scattering a wave of comparable wavelength — Bragg-style.',
      },
    ],
  },
  // ------------------------------------------------------------------ 38-6
  {
    sectionId: 'hall-ch38-s6',
    readingTime: 7,
    intro: "A wave needs a wave equation, and in 1926 Schrödinger wrote the one that matter obeys. Its solutions — wave functions $\\psi(x)$ — are not themselves observable; their squared magnitude is the probability density for finding the particle. From the equation plus boundary conditions, energy quantization stops being a postulate and becomes an output: only certain energies admit well-behaved solutions.",
    objectives: [
      'Write the time-independent Schrödinger equation and identify each term',
      'Interpret $|\\psi|^2$ as a probability density and normalize wave functions',
      'Explain why boundary conditions quantize the allowed energies',
    ],
    concepts: [
      {
        term: "Schrödinger's equation",
        kind: 'law',
        statement: '**For a particle of mass $m$ in potential energy $U(x)$, the stationary states satisfy** $$-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} + U(x)\\psi = E\\psi, \\qquad \\hbar = \\frac{h}{2\\pi}.$$ The first term is kinetic energy operating on $\\psi$; the equation is the quantum statement that $K + U = E$.',
      },
      {
        term: 'The Born interpretation',
        kind: 'definition',
        statement: '**$|\\psi(x)|^2$ is the probability density for finding the particle at $x$: the chance of finding it in $[x, x+dx]$ is $|\\psi|^2\\,dx$.** Normalization demands the total probability be one, $\\int |\\psi|^2 dx = 1$, which fixes the overall scale of every wave function.',
        detail: 'The wave function itself is complex — only its magnitude squared is physical, and phase differences show up in interference.',
      },
      {
        term: 'Why complex',
        kind: 'insight',
        statement: '**Only a complex exponential $e^{ikx}$ can be a wave of definite momentum that keeps $p = h/\\lambda$; real sines and cosines mix $+p$ and $-p$ equally.** The $i$ in the time-dependent equation is what lets waves oscillate through zero without the probability density vanishing forever.',
      },
      {
        term: 'Quantization from boundaries',
        kind: 'method',
        statement: '**Solving the equation is only half the job: the solutions must be normalizable and smooth ($\\psi$ and $d\\psi/dx$ continuous).** Imposing these conditions at the edges of the allowed region leaves standing waves of only certain wavelengths — and therefore only certain energies. Quantization is boundary-condition bookkeeping, exactly as for waves on a string.',
      },
      {
        term: "Schrödinger's Equation: solution protocol",
        kind: "method",
        statement: "**Solve Schrödinger's Equation problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quanta with $E = hf$ and matter waves with $\\lambda = h/p$; the working equation is $E = hf$, $hf = \\Phi+K_{\\max}$, $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$, $\\lambda = h/p$, $\\Delta x\\,\\Delta p \\ge \\hbar/2$; every substitution must carry its units so the final unit ($\\text{eV}$ and $\\text{nm/pm}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$; $hf > \\Phi$ for emission; uncertainty is statistical over ensembles.",
      },
    ],
    examples: [
      {
        title: 'A free de Broglie wave checks the energy',
        problem: 'Show that $\psi = A\\sin(kx)$ solves the free-particle ($U = 0$) Schrödinger equation, find $E$ in terms of $k$, and verify with the 54 eV electron of the previous section ($\\lambda = 0.167$ nm).',
        steps: [
          { label: 'Substitute', text: '$d^2\\psi/dx^2 = -k^2 A\\sin(kx) = -k^2\\psi$, so $+\\hbar^2k^2/2m\\,\\psi = E\\psi$.' },
          { label: 'Dispersion', text: '$E = \\hbar^2k^2/2m$; with $p = \\hbar k$ this is exactly $E = p^2/2m$ — the de Broglie relations are built in.' },
          { label: 'Numbers', text: 'For $\\lambda = 0.167$ nm: $k = 2\\pi/\\lambda = 3.76\\times10^{10}\\ \\mathrm{m^{-1}}$, so $E = \\hbar^2k^2/2m = 8.6\\times10^{-18}$ J $= 54$ eV.' },
          { label: 'Moral', text: 'The equation reproduces the matter-wave relations by construction — its value shows up when boundaries force $k$ to be discrete.' },
        ],
        result: '$E = \\hbar^2k^2/2m = 54$ eV for the Davisson–Germer electron — the free-particle limit works perfectly.',
      },
      {
        title: "Schrödinger's Equation: de Broglie check",
        problem: "An electron is accelerated through $100\\ \\text{V}$ ($p \\approx 5.40\\times 10^{-24}\\ \\text{kg}\\cdot\\text{m/s}$). Estimate $\\lambda = h/p$.",
        steps: [
          { label: "Divide", text: "$\\lambda = 6.63\\times 10^{-34}/5.40\\times 10^{-24} = 1.23\\times 10^{-10}\\ \\text{m}$." },
          { label: "Angstroms", text: "$\\approx 0.123\\ \\text{nm}$ — atomic scale, hence electron diffraction." },
        ],
        result: "$\\lambda \\approx 0.12\\ \\text{nm}$.",
      },
    ],
    keyTakeaways: [
      '$-(\\hbar^2/2m)\\psi\'\' + U\\psi = E\\psi$ is the energy statement of quantum mechanics.',
      '$|\\psi|^2$ is probability density; $\\int|\\psi|^2dx = 1$ fixes normalization.',
      'Boundary conditions — not extra postulates — quantize energy.',
    ],
    quiz: [
      {
        q: 'In the Schrödinger equation, the quantity $\\hbar$ equals:',
        options: [`$h/2\\pi$`, `$2h$`, `$h/4$`, `$2\\pi h$`],
        answer: 0,
        explanation: 'Natural for wave number $k$: $p = \\hbar k$.',
      },
      {
        q: 'The physical content of a wave function is carried by:',
        options: ['$|\\psi|^2$, its squared magnitude', '$\\psi$ itself', 'its phase alone', 'its time derivative'],
        answer: 0,
        explanation: 'Born\'s rule: $|\\psi|^2$ is the probability density; $\\psi$ can be complex and even negative.',
      },
      {
        q: 'Energy quantization in a bound system arises from:',
        options: ['normalizability and smoothness conditions on $\\psi$', 'the mass of the particle only', 'Planck\'s blackbody postulate', 'time dilation'],
        answer: 0,
        explanation: 'Only discrete standing-wave patterns satisfy the boundary conditions.',
      },
    ],
  },
  // ------------------------------------------------------------------ 38-7
  {
    sectionId: 'hall-ch38-s7',
    readingTime: 6,
    intro: "Squeeze a wave into a short box and you force it to contain many wavelengths — which means many momenta. This is Heisenberg's uncertainty principle: a particle cannot have both a sharply defined position and a sharply defined momentum. It is not a statement about clumsy instruments; it is wave mathematics, and it is the reason atoms have size and electrons cannot sit still.",
    objectives: [
      'State and apply $\\Delta x\\,\\Delta p \\geq \\hbar$',
      'Derive the momentum spread from single-slit diffraction as a prototype',
      'Use uncertainty reasoning to estimate ground-state energies',
    ],
    concepts: [
      {
        term: 'The uncertainty principle',
        kind: 'law',
        statement: '**A particle confined to a spatial spread $\\Delta x$ must carry momentum of spread at least** $$\\Delta x\\,\\Delta p \\geq \\hbar.$$ The spreads are standard deviations of a statistical spread of outcomes — intrinsic to the wave function, not to any instrument.',
      },
      {
        term: 'The slit as uncertainty engine',
        kind: 'method',
        statement: '**Pass an electron beam through a slit of width $a$ and it diffracts: confinement to $\\Delta x = a$ creates a transverse momentum spread $\\Delta p \\approx \\hbar/a$** — just enough to spread the beam by the diffraction angle $\\lambda/a$. The narrower the slit, the wilder the outgoing directions: the principle in action.',
      },
      {
        term: 'Waves, not clumsiness',
        kind: 'insight',
        statement: '**A wave of exact wavelength occupies all space; a compact packet must superpose many wavelengths, hence many momenta.** The principle is a Fourier theorem about waves wearing a particle costume. It is not that measuring $x$ disturbs $p$ (that story happens to be true here, but the principle holds even when nothing is measured).',
      },
      {
        term: 'Energy–time form',
        kind: 'insight',
        statement: '**The companion relation $\\Delta E\\,\\Delta t \\gtrsim \\hbar$ sets how sharply a short-lived state can define its energy** — the natural linewidth of spectral lines, and the reason unstable particles have fuzzy masses. The shorter the lifetime, the wider the line.',
      },
      {
        term: "Heisenberg's Uncertainty Principle: solution protocol",
        kind: "method",
        statement: "**Solve Heisenberg's Uncertainty Principle problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quanta with $E = hf$ and matter waves with $\\lambda = h/p$; the working equation is $E = hf$, $hf = \\Phi+K_{\\max}$, $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$, $\\lambda = h/p$, $\\Delta x\\,\\Delta p \\ge \\hbar/2$; every substitution must carry its units so the final unit ($\\text{eV}$ and $\\text{nm/pm}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$; $hf > \\Phi$ for emission; uncertainty is statistical over ensembles.",
      },
    ],
    examples: [
      {
        title: 'Why atoms do not collapse',
        problem: 'An electron is confined to an atom-sized region $\\Delta x = 0.10$ nm. Estimate the minimum momentum and kinetic energy the confinement forces upon it.',
        steps: [
          { label: 'Momentum spread', text: '$\\Delta p \\approx \\hbar/\\Delta x = (1.055\\times10^{-34})/(1.0\\times10^{-10}) = 1.1\\times10^{-24}\\ \\mathrm{kg\\,m/s}$.' },
          { label: 'Kinetic energy', text: '$K \\approx (\\Delta p)^2/2m = (1.055\\times10^{-24})^2/[2(9.11\\times10^{-31})] = 6.1\\times10^{-19}$ J $= 3.8$ eV.' },
          { label: 'Interpretation', text: 'Confinement alone forces the electron to carry electron-volts of kinetic energy — the same scale as actual atomic binding energies.' },
          { label: 'The collapse argument', text: 'Squeeze the electron closer to the nucleus and $\\Delta p$ grows as $1/\\Delta x$, so $K$ grows as $1/\\Delta x^2$ faster than the potential $-e^2/4\\pi\\epsilon_0 r$ falls: a stable minimum size results — the atom.' },
        ],
        result: 'Δp ≈ 1.1×10⁻²⁴ kg·m/s and K ≈ 3.8 eV: confinement energy sets the atomic scale and forbids collapse.',
      },
      {
        title: "Heisenberg's Uncertainty Principle: de Broglie check",
        problem: "An electron is accelerated through $100\\ \\text{V}$ ($p \\approx 5.40\\times 10^{-24}\\ \\text{kg}\\cdot\\text{m/s}$). Estimate $\\lambda = h/p$.",
        steps: [
          { label: "Divide", text: "$\\lambda = 6.63\\times 10^{-34}/5.40\\times 10^{-24} = 1.23\\times 10^{-10}\\ \\text{m}$." },
          { label: "Angstroms", text: "$\\approx 0.123\\ \\text{nm}$ — atomic scale, hence electron diffraction." },
        ],
        result: "$\\lambda \\approx 0.12\\ \\text{nm}$.",
      },
    ],
    keyTakeaways: [
      '$\\Delta x\\,\\Delta p \\geq \\hbar$: confinement and momentum sharpness trade off exactly.',
      'Single-slit diffraction of electrons is the principle displayed on a screen.',
      'Uncertainty explains atomic size (confinement energy) and natural linewidths ($\\Delta E\\Delta t \\gtrsim \\hbar$).',
    ],
    quiz: [
      {
        q: 'Narrowing the slit through which electrons pass:',
        options: ['increases the spread of their transverse momentum', 'decreases their momentum uncertainty', 'leaves the diffraction pattern unchanged', 'increases their de Broglie wavelength'],
        answer: 0,
        explanation: '$\\Delta p \\approx \\hbar/\\Delta x$: tighter position, wilder momentum.',
      },
      {
        q: 'The uncertainty principle is best described as:',
        options: ['a property of waves that matter also obeys', 'a limitation of current instruments', 'an effect of measurement recoil only', 'a postulate about point particles'],
        answer: 0,
        explanation: 'Localized wave packets necessarily superpose many wavelengths — Fourier mathematics, not engineering.',
      },
      {
        q: 'An electron is confined to $\\Delta x = 1.0$ nm instead of 0.10 nm. The minimum kinetic energy forced by confinement:',
        options: ['drops by a factor of 100', 'drops by a factor of 10', 'rises by a factor of 10', 'is unchanged'],
        answer: 0,
        explanation: '$K \\propto (\\Delta p)^2 \\propto 1/\\Delta x^2$: ten times the width, one-hundredth the energy.',
      },
    ],
  },
  // ------------------------------------------------------------------ 38-8
  {
    sectionId: 'hall-ch38-s8',
    readingTime: 6,
    intro: "A classical particle with more energy than a gentle upward step in potential energy sails over it every time. A quantum particle does something stranger: even with $E > U_0$ there is a chance it reflects, because its matter wave partially reflects at any abrupt change — exactly as light partly reflects off glass. This section builds the machinery of wave-number matching that tunneling will inherit.",
    objectives: [
      'Analyze a step potential with $E > U_0$: changed wavelength, partial reflection',
      'Compute the reflection and transmission coefficients from wave-number matching',
      'Explain why partial reflection has no classical counterpart for $E > U_0$',
    ],
    concepts: [
      {
        term: 'The potential step',
        kind: 'definition',
        statement: '**A step: $U = 0$ for $x < 0$ and $U = U_0 > 0$ for $x \\geq 0$.** For $E > U_0$ the classical particle always passes; the quantum wave splits — part transmits with longer wavelength, part reflects.',
      },
      {
        term: 'Wavelength change at the step',
        kind: 'law',
        statement: '**Kinetic energy drops from $E$ to $E - U_0$, so the matter wavelength stretches:** $$\\lambda_2 = \\lambda_1\\sqrt{\\frac{E}{E-U_0}}.$$ The wave slows in the higher-potential region exactly as light slows in glass — same relation, same cause (speed $v \\propto 1/k$ here as $1/n$ there).',
      },
      {
        term: 'Reflection and transmission',
        kind: 'law',
        statement: '**Matching $\\psi$ and $d\\psi/dx$ at $x = 0$ for incident $e^{ik_1x}$, reflected $r e^{-ik_1x}$ and transmitted $t e^{ik_2x}$ gives** $$R = \\left(\\frac{k_1-k_2}{k_1+k_2}\\right)^2, \\qquad T = \\frac{4k_1k_2}{(k_1+k_2)^2}, \\qquad R + T = 1,$$ with $k = \\sqrt{2mK}/\\hbar$ in each region.',
      },
      {
        term: 'Why waves reflect',
        kind: 'insight',
        statement: '**Any abrupt change in a wave\'s medium reflects part of it.** For light, glass; for matter, a sudden jump in potential energy. Smooth the step over many wavelengths and the reflection fades away — abruptness is what scatters.',
      },
      {
        term: "Reflection from a Potential Step: solution protocol",
        kind: "method",
        statement: "**Solve Reflection from a Potential Step problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quanta with $E = hf$ and matter waves with $\\lambda = h/p$; the working equation is $E = hf$, $hf = \\Phi+K_{\\max}$, $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$, $\\lambda = h/p$, $\\Delta x\\,\\Delta p \\ge \\hbar/2$; every substitution must carry its units so the final unit ($\\text{eV}$ and $\\text{nm/pm}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$; $hf > \\Phi$ for emission; uncertainty is statistical over ensembles.",
      },
    ],
    examples: [
      {
        title: 'An electron meets a soft barrier edge',
        problem: 'An electron with $E = 1.00$ eV meets a step up to $U_0 = 0.75$ eV. Find the reflection and transmission coefficients and the wavelength on each side.',
        steps: [
          { label: 'Wave-number ratio', text: 'The transmitted kinetic energy is $E - U_0 = 0.25$ eV, so $k_2/k_1 = \\sqrt{0.25/1.00} = 0.50$.' },
          { label: 'Reflection', text: '$R = [(1-0.5)/(1+0.5)]^2 = (1/3)^2 = 0.111$ — 11% of the incident electrons bounce back despite having enough energy.' },
          { label: 'Transmission', text: '$T = 4(1)(0.5)/(1.5)^2 = 2/2.25 = 0.889$ (and indeed $R + T = 1$).' },
          { label: 'Wavelengths', text: '$\\lambda_1 = 1.226/\\sqrt{1.00} = 1.23$ nm and $\\lambda_2 = \\lambda_1\\sqrt{1/0.25} = 2.45$ nm — the wave visibly stretches as it climbs.' },
        ],
        result: 'R = 11%, T = 89%; the wavelength doubles from 1.23 nm to 2.45 nm in crossing.',
      },
      {
        title: "Reflection from a Potential Step: de Broglie check",
        problem: "An electron is accelerated through $100\\ \\text{V}$ ($p \\approx 5.40\\times 10^{-24}\\ \\text{kg}\\cdot\\text{m/s}$). Estimate $\\lambda = h/p$.",
        steps: [
          { label: "Divide", text: "$\\lambda = 6.63\\times 10^{-34}/5.40\\times 10^{-24} = 1.23\\times 10^{-10}\\ \\text{m}$." },
          { label: "Angstroms", text: "$\\approx 0.123\\ \\text{nm}$ — atomic scale, hence electron diffraction." },
        ],
        result: "$\\lambda \\approx 0.12\\ \\text{nm}$.",
      },
    ],
    keyTakeaways: [
      'At a step with $E > U_0$ the wavelength stretches by $\\sqrt{E/(E-U_0)}$ and part of the wave reflects.',
      '$R = [(k_1-k_2)/(k_1+k_2)]^2$, $T = 4k_1k_2/(k_1+k_2)^2$, with $R + T = 1$.',
      'Partial reflection at abrupt changes is generic wave physics — classical particles have no such option.',
    ],
    quiz: [
      {
        q: 'The step-reflection coefficient equals $[(k_1-k_2)/(k_1+k_2)]^2$. If $k_2 = k_1$, it means:',
        options: ['there is no step at all (no reflection)', 'total reflection', 'the particle is trapped', 'R = 1/2'],
        answer: 0,
        explanation: 'Identical wave numbers mean identical regions — nothing to scatter from.',
      },
      {
        q: 'Classically, a particle with $E > U_0$ at a step:',
        options: ['always passes', 'sometimes reflects', 'always reflects', 'stops at the boundary'],
        answer: 0,
        explanation: 'Partial reflection is a wave phenomenon with no classical-mechanical counterpart for $E > U_0$.',
      },
      {
        q: 'In the example with $E = 1.00$ eV and $U_0 = 0.75$ eV, the ratio $\\lambda_2/\\lambda_1$ equals:',
        options: ['2', '1/2', '4', '1'],
        answer: 0,
        explanation: '$\\sqrt{E/(E-U_0)} = \\sqrt{1/0.25} = 2$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 38-9
  {
    sectionId: 'hall-ch38-s9',
    readingTime: 8,
    intro: "Now lower the particle's energy below the barrier: $E < U_0$, so the classically forbidden region. Classical physics is unambiguous — total reflection. Quantum physics is unambiguous too, but different: the wave function does not crash to zero at the barrier edge; it decays exponentially inside and, if the barrier is thin, something survives on the far side. Matter leaks through walls, and this leaking — tunneling — powers nuclear decay, the scanning tunneling microscope, and half of modern electronics.",
    objectives: [
      'Describe the exponential decay of $\\psi$ in a classically forbidden region, with $\\kappa = \\sqrt{2m(U_0-E)}/\\hbar$',
      'Apply the tunneling transmission $T \\approx e^{-2\\kappa L}$ and its sensitivity to barrier width and height',
      'Survey the applications: alpha decay, STM, tunnel diodes',
    ],
    concepts: [
      {
        term: 'The forbidden region',
        kind: 'law',
        statement: '**Where $E < U(x)$, the Schrödinger equation flips: solutions grow or decay exponentially, $$\\psi \\propto e^{-\\kappa x}, \\qquad \\kappa = \\frac{\\sqrt{2m(U_0-E)}}{\\hbar}.$$** Only the decaying solution is physical: the probability of finding the particle inside the barrier dies away over a length $1/\\kappa$ — small, but not zero.',
      },
      {
        term: 'Tunneling transmission',
        kind: 'law',
        statement: '**For a barrier of height $U_0 > E$ and width $L$, the fraction transmitted is, to high accuracy,** $$T \\approx e^{-2\\kappa L}, \\qquad \\kappa = \\sqrt{2m(U_0-E)}/\\hbar.$$ Double the barrier\'s width and the exponent doubles — the leak dies exponentially. The full coefficient (see the masters tier) is this exponential times a prefactor of order 1.',
      },
      {
        term: 'The scanning tunneling microscope',
        kind: 'insight',
        statement: '**A voltage-biased tip held a fraction of a nanometer from a surface reads the tunneling current $I \\propto e^{-2\\kappa d}$: a 0.01 nm change in gap $d$ swings the current by about 10%.** Since single atoms are 0.2–0.3 nm tall, the microscope maps them one by one — Binnig and Rohrer\'s 1981 invention, Nobel 1986.',
      },
      {
        term: 'Tunneling in nature',
        kind: 'insight',
        statement: '**Alpha decay is an alpha particle tunneling out of the nucleus** (Gamow, 1928): tiny changes in nuclear barrier energy swing half-lives from microseconds to billions of years. **Tunnel diodes and Josephson junctions** exploit barrier leakage as a circuit element; **proton tunneling** even contributes to DNA mutation. Flash memory writes bits by tunneling electrons through oxide.',
      },
      {
        term: "Tunneling Through a Potential Barrier: solution protocol",
        kind: "method",
        statement: "**Solve Tunneling Through a Potential Barrier problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is quanta with $E = hf$ and matter waves with $\\lambda = h/p$; the working equation is $E = hf$, $hf = \\Phi+K_{\\max}$, $\\Delta\\lambda = (h/mc)(1-\\cos\\phi)$, $\\lambda = h/p$, $\\Delta x\\,\\Delta p \\ge \\hbar/2$; every substitution must carry its units so the final unit ($\\text{eV}$ and $\\text{nm/pm}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against visible $\\sim 2\\ \\text{eV}$ to X-ray $\\text{keV}$; $\\lambda_c = 2.43\\ \\text{pm}$; $hf > \\Phi$ for emission; uncertainty is statistical over ensembles.",
      },
    ],
    figures: [
      {
        caption: 'Tunneling through a barrier of height $U_0$ and width $L$ for energy $E < U_0$. The wave function oscillates before the barrier, decays exponentially inside as $e^{-\\kappa x}$, and emerges with reduced amplitude — a nonzero probability of finding the particle beyond a region classical physics forbids it to enter. $T \\approx e^{-2\\kappa L}$.',
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A matter wave incident from the left on a potential barrier taller than its energy, decaying inside the barrier and emerging with smaller amplitude on the right"><defs><marker id="tunA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="60" y1="34" x2="60" y2="330" stroke="currentColor" stroke-width="1.6" marker-end="url(#tunA)"/><line x1="60" y1="330" x2="700" y2="330" stroke="currentColor" stroke-width="1.6" marker-end="url(#tunA)"/><text x="40" y="40" font-size="15" fill="currentColor">U</text><text x="700" y="322" text-anchor="end" font-size="15" fill="currentColor">x</text><rect x="300" y="80" width="120" height="250" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/><line x1="60" y1="80" x2="300" y2="80" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 6" opacity="0.7"/><text x="96" y="72" font-size="15" fill="currentColor">U<tspan dy="3" font-size="11">0</tspan></text><line x1="60" y1="150" x2="700" y2="150" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 6" opacity="0.7"/><text x="88" y="142" font-size="15" fill="currentColor">E &lt; U<tspan dy="3" font-size="11">0</tspan></text><polyline points="40,150.0 42,140.6 44,131.5 46,122.8 48,114.7 50,107.6 52,101.5 54,96.5 56,92.9 58,90.7 60,90.0 62,90.7 64,92.9 66,96.5 68,101.5 70,107.6 72,114.7 74,122.8 76,131.5 78,140.6 80,150.0 82,159.4 84,168.5 86,177.2 88,185.3 90,192.4 92,198.5 94,203.5 96,207.1 98,209.3 100,210.0 102,209.3 104,207.1 106,203.5 108,198.5 110,192.4 112,185.3 114,177.2 116,168.5 118,159.4 120,150.0 122,140.6 124,131.5 126,122.8 128,114.7 130,107.6 132,101.5 134,96.5 136,92.9 138,90.7 140,90.0 142,90.7 144,92.9 146,96.5 148,101.5 150,107.6 152,114.7 154,122.8 156,131.5 158,140.6 160,150.0 162,159.4 164,168.5 166,177.2 168,185.3 170,192.4 172,198.5 174,203.5 176,207.1 178,209.3 180,210.0 182,209.3 184,207.1 186,203.5 188,198.5 190,192.4 192,185.3 194,177.2 196,168.5 198,159.4 200,150.0 202,140.6 204,131.5 206,122.8 208,114.7 210,107.6 212,101.5 214,96.5 216,92.9 218,90.7 220,90.0 222,90.7 224,92.9 226,96.5 228,101.5 230,107.6 232,114.7 234,122.8 236,131.5 238,140.6 240,150.0 242,159.4 244,168.5 246,177.2 248,185.3 250,192.4 252,198.5 254,203.5 256,207.1 258,209.3 260,210.0 262,209.3 264,207.1 266,203.5 268,198.5 270,192.4 272,185.3 274,177.2 276,168.5 278,159.4 280,150.0 282,140.6 284,131.5 286,122.8 288,114.7 290,107.6 292,101.5 294,96.5 296,92.9 298,90.7 300,90.0 302,91.4 304,92.8 306,94.2 308,95.5 310,96.9 312,98.1 314,99.4 316,100.6 318,101.8 320,102.9 322,104.1 324,105.2 326,106.2 328,107.3 330,108.3 332,109.3 334,110.3 336,111.2 338,112.2 340,113.1 342,113.9 344,114.8 346,115.7 348,116.5 350,117.3 352,118.1 354,118.8 356,119.6 358,120.3 360,121.0 362,121.7 364,122.4 366,123.1 368,123.7 370,124.3 372,124.9 374,125.5 376,126.1 378,126.7 380,127.3 382,127.8 384,128.3 386,128.9 388,129.4 390,129.9 392,130.3 394,130.8 396,131.3 398,131.7 400,132.2 402,132.6 404,133.0 406,133.4 408,133.8 410,134.2 412,134.6 414,134.9 416,135.3 418,135.7 420,136.0 422,136.2 424,136.7 426,137.5 428,138.7 430,140.1 432,141.8 434,143.6 436,145.7 438,147.8 440,150.0 442,152.2 444,154.3 446,156.4 448,158.2 450,159.9 452,161.3 454,162.5 456,163.3 458,163.8 460,164.0 462,163.8 464,163.3 466,162.5 468,161.3 470,159.9 472,158.2 474,156.4 476,154.3 478,152.2 480,150.0 482,147.8 484,145.7 486,143.6 488,141.8 490,140.1 492,138.7 494,137.5 496,136.7 498,136.2 500,136.0 502,136.2 504,136.7 506,137.5 508,138.7 510,140.1 512,141.8 514,143.6 516,145.7 518,147.8 520,150.0 522,152.2 524,154.3 526,156.4 528,158.2 530,159.9 532,161.3 534,162.5 536,163.3 538,163.8 540,164.0 542,163.8 544,163.3 546,162.5 548,161.3 550,159.9 552,158.2 554,156.4 556,154.3 558,152.2 560,150.0 562,147.8 564,145.7 566,143.6 568,141.8 570,140.1 572,138.7 574,137.5 576,136.7 578,136.2 580,136.0 582,136.2 584,136.7 586,137.5 588,138.7 590,140.1 592,141.8 594,143.6 596,145.7 598,147.8 600,150.0 602,152.2 604,154.3 606,156.4 608,158.2 610,159.9 612,161.3 614,162.5 616,163.3 618,163.8 620,164.0 622,163.8 624,163.3 626,162.5 628,161.3 630,159.9 632,158.2 634,156.4 636,154.3 638,152.2 640,150.0 642,147.8 644,145.7 646,143.6 648,141.8 650,140.1 652,138.7 654,137.5 656,136.7 658,136.2 660,136.0 662,136.2 664,136.7 666,137.5 668,138.7 670,140.1 672,141.8 674,143.6 676,145.7 678,147.8 680,150.0 682,152.2 684,154.3 686,156.4 688,158.2 690,159.9" fill="none" stroke="currentColor" stroke-width="2.4"/><line x1="300" y1="306" x2="420" y2="306" stroke="currentColor" stroke-width="1.6" marker-start="url(#tunA)" marker-end="url(#tunA)"/><text x="360" y="296" text-anchor="middle" font-size="15" fill="currentColor">L</text><text x="150" y="60" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.9">incident + reflected</text><text x="360" y="200" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.9">exponential decay</text><text x="555" y="196" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.9">transmitted: T ≈ e<tspan dy="-6" font-size="11">−2kL</tspan></text><text x="150" y="316" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.8">λ = h/√(2mE)</text><text x="555" y="316" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.8">same E, smaller amplitude</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Leakage through a thin barrier',
        problem: 'An electron with $E = 2.00$ eV faces a barrier of height $U_0 = 5.00$ eV and width $L = 0.70$ nm. Estimate the transmission, and compare with a barrier twice as wide.',
        steps: [
          { label: 'Decay constant', text: '$\\kappa = \\sqrt{2m(U_0-E)}/\\hbar = \\sqrt{2(9.11\\times10^{-31})(3.00)(1.602\\times10^{-19})}/(1.055\\times10^{-34}) = 8.9\\times10^{9}\\ \\mathrm{m^{-1}}$.' },
          { label: 'Exponent', text: '$2\\kappa L = 2(8.9\\times10^{9})(0.70\\times10^{-9}) = 12.4$.' },
          { label: 'Transmission', text: '$T \\approx e^{-12.4} = 4\\times10^{-6}$ — one electron in a quarter-million gets through.' },
          { label: 'Doubling the width', text: 'For $L = 1.40$ nm, $2\\kappa L = 24.9$ and $T \\approx 1.5\\times10^{-11}$: a 26 000-fold collapse from merely doubling $L$.' },
        ],
        result: 'T ≈ 4×10⁻⁶; doubling the width suppresses the leak by four and a half orders of magnitude.',
      },
      {
        title: "Tunneling Through a Potential Barrier: de Broglie check",
        problem: "An electron is accelerated through $100\\ \\text{V}$ ($p \\approx 5.40\\times 10^{-24}\\ \\text{kg}\\cdot\\text{m/s}$). Estimate $\\lambda = h/p$.",
        steps: [
          { label: "Divide", text: "$\\lambda = 6.63\\times 10^{-34}/5.40\\times 10^{-24} = 1.23\\times 10^{-10}\\ \\text{m}$." },
          { label: "Angstroms", text: "$\\approx 0.123\\ \\text{nm}$ — atomic scale, hence electron diffraction." },
        ],
        result: "$\\lambda \\approx 0.12\\ \\text{nm}$.",
      },
    ],
    keyTakeaways: [
      'In forbidden regions $\\psi$ decays as $e^{-\\kappa x}$ with $\\kappa = \\sqrt{2m(U_0-E)}/\\hbar$.',
      '$T \\approx e^{-2\\kappa L}$: transmission is exponentially sensitive to width, height, and particle mass.',
      'Tunneling runs alpha decay, STM imaging, flash memory and Josephson devices.',
    ],
    quiz: [
      {
        q: 'Inside the barrier ($E < U_0$), the wave function:',
        options: ['decays exponentially with distance', 'oscillates faster', 'is exactly zero', 'grows exponentially'],
        answer: 0,
        explanation: 'Only the decaying solution stays normalizable.',
      },
      {
        q: 'Doubling the barrier width (same $U_0 - E$) changes $T$ by:',
        options: ['squaring it', 'halving it', 'doubling it', 'no change'],
        answer: 0,
        explanation: '$T \\propto e^{-2\\kappa L}$: twice the width squares the already tiny factor.',
      },
      {
        q: 'Which change does NOT increase tunneling transmission?',
        options: ['increasing the barrier height', 'increasing the particle energy', 'decreasing the barrier width', 'using a lighter particle'],
        answer: 0,
        explanation: 'Raising $U_0 - E$ raises $\\kappa$ and throttles the leak; the other three all help.',
      },
      {
        q: 'The STM achieves atomic resolution chiefly because:',
        options: ['the tunneling current varies by ~10% per 0.01 nm of tip–surface gap', 'the tip is atomically sharp only', 'it uses very high voltages', 'electrons are visible to it'],
        answer: 0,
        explanation: 'The exponential $e^{-2\\kappa d}$ sensitivity makes the current a ruler for sub-atomic height changes.',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'The transmission coefficient, derived honestly',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Exact transmission for a rectangular barrier',
            body: 'For a particle of energy $E < U_0$ incident on a barrier occupying $0 < x < L$, write $k = \\sqrt{2mE}/\\hbar$ outside and $\\kappa = \\sqrt{2m(U_0-E)}/\\hbar$ inside. Requiring $\\psi$ and $d\\psi/dx$ continuous at both edges — four conditions — and eliminating the interior amplitudes gives the exact result $$T = \\left[1 + \\frac{U_0^2\\sinh^2(\\kappa L)}{4E(U_0-E)}\\right]^{-1}.$$ Because the wave number $k$ is the same on both sides of the barrier, the flux ratio equals the amplitude-squared ratio $|t|^2$. The textbook $e^{-2\\kappa L}$ is the opaque-barrier limit of this expression.',
          },
          {
            kind: 'derivation',
            heading: 'Setting up the four boundary conditions',
            body: 'Take incident amplitude 1: $\\psi_I = e^{ikx} + r e^{-ikx}$ for $x<0$; $\\psi_{II} = A\\cosh(\\kappa x) + B\\sinh(\\kappa x)$ inside (real combination of $e^{\\pm\\kappa x}$); $\\psi_{III} = t\\,e^{ikx}$ for $x > L$ — no source on the right, so no incoming wave there. Continuity of $\\psi$ and $\\psi\'$ at $x=0$ and $x=L$ yields four linear equations in $r$, $A$, $B$, $t$. Eliminating $A$ and $B$ (two subtractions) leaves $t$ in terms of hyperbolic functions of $\\kappa L$; the algebra is exactly the impedance-matching calculation familiar from transmission lines and coated optics.',
          },
          {
            kind: 'derivation',
            heading: 'Recovering the exponential law',
            body: 'In the opaque regime $\\kappa L \\gg 1$, use $\\sinh(\\kappa L) \\approx \\tfrac{1}{2}e^{\\kappa L}$: $$T \\approx \\frac{4E(U_0-E)}{U_0^2}\\,e^{-2\\kappa L} = \\frac{16E(U_0-E)}{U_0^2}\\cdot\\frac{e^{-2\\kappa L}}{4}.$$ The prefactor $16E(U_0-E)/U_0^2$ is between 0 and 4 and equals 4 at $E = U_0/2$ — so the honest $T$ can be a small multiple of $e^{-2\\kappa L}$, but only in the regime where $e^{-2\\kappa L}$ is already minuscule. That is why the exponential alone is an excellent everyday estimate.',
          },
          {
            kind: 'example',
            heading: 'How far off is $e^{-2\\kappa L}$?',
            body: 'For the worked numbers above ($E = 2.00$ eV, $U_0 = 5.00$ eV, $L = 0.70$ nm): $\\kappa L = 6.21$, so $\\sinh(6.21) = 249$ and $\\sinh^2 = 6.2\\times10^{4}$. Then $$T = \\left[1 + \\frac{25 \\times 6.2\\times10^{4}}{4(2)(3)}\\right]^{-1} = \\frac{1}{6.5\\times10^{4}} = 1.5\\times10^{-5}.$$ The crude law gave $4\\times10^{-6}$; the prefactor $16(2)(3)/25 = 3.8$ explains the difference exactly. For most estimates the exponential alone is fine; for STM calibration the prefactor matters.',
          },
          {
            kind: 'application',
            heading: "Gamow's alpha-decay theory",
            body: 'An alpha particle rattling inside a nucleus sees a Coulomb barrier of a few tenths of the nuclear radius. Its escape rate is the attempt frequency (about $10^{21}\\ \\mathrm{s^{-1}}$) times the transmission through the barrier — obtained by joining exponentials through the sloping Coulomb edge (a WKB integral). The result is the Geiger–Nuttall law: $\\log t_{1/2}$ is linear in $1/\\sqrt{E}$, spanning half-lives from $10^{-7}$ s (polonium-212) to $10^{17}$ s (uranium-238) — twenty-four orders of magnitude from a few MeV of energy change. Nothing in classical physics can produce such a lever arm; the exponential does.',
          },
          {
            kind: 'remark',
            heading: 'Above the barrier, resonances',
            body: 'For $E > U_0$ the same four boundary conditions give $R > 0$ again (above-barrier reflection — the step effect twice), and the transmission oscillates with $L$: full transmission whenever the barrier holds a whole number of half-wavelengths, exactly like a Fabry–Pérot etalon. Quantum-well lasers and resonant tunneling diodes are engineered to sit on these resonances. The tunneling and resonance pictures are the two halves of one scattering theory.',
          },
        ],
      },
    ],
  },
]
