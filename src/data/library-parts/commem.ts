// ============================================================================
// Communications + Electromagnetics extras (GATE EC/ISRO) — chapter/section
// metadata (bookId 'commem-complete'). Random processes through antennas.
// Lab mapping: noise/detection → probability-lab, modulation → wave-lab,
// codes → tree-traversal (prefix trees), waves/antennas → em-wave/efield labs.
// No code console.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../library'

export const COMMEM_CHAPTERS: ChapterMeta[] = [
  { id: 'commem-ch1', bookId: 'commem-complete', number: 1, title: 'Random Processes & White Noise', shortTitle: 'Random Processes', description: 'Autocorrelation, power spectral density, white noise through LTI filters, narrowband preview.', icon: 'dices', pages: 'Unit 1', interactiveKey: 'probability-lab' },
  { id: 'commem-ch2', bookId: 'commem-complete', number: 2, title: 'Analog Modulation: AM & FM', shortTitle: 'AM & FM', description: 'Amplitude and angle modulation/demodulation, spectra, bandwidth rules, superheterodyne receivers.', icon: 'radio', pages: 'Unit 2', interactiveKey: 'wave-lab' },
  { id: 'commem-ch3', bookId: 'commem-complete', number: 3, title: 'Digital Modulation & Detection', shortTitle: 'Digital Modulation', description: 'PCM/DPCM, ASK/PSK/FSK/QAM constellations, ISI, matched filters, SNR and BER.', icon: 'signal', pages: 'Unit 3', interactiveKey: 'probability-lab' },
  { id: 'commem-ch4', bookId: 'commem-complete', number: 4, title: 'Information Theory & Error Control', shortTitle: 'Info Theory & Codes', description: 'Entropy, mutual information, channel capacity, Hamming codes, CRC.', icon: 'lock', pages: 'Unit 4', interactiveKey: 'tree-traversal' },
  { id: 'commem-ch5', bookId: 'commem-complete', number: 5, title: 'Maxwell Equations, Waves & Poynting', shortTitle: 'Maxwell & Waves', description: 'Differential/integral Maxwell forms, boundary conditions, wave equation, polarization, skin depth.', icon: 'zap', pages: 'Unit 5', interactiveKey: 'em-wave-lab' },
  { id: 'commem-ch6', bookId: 'commem-complete', number: 6, title: 'Transmission Lines, Waveguides & Antennas', shortTitle: 'Lines & Antennas', description: 'Line equations, impedance matching, Smith chart, rectangular/circular waveguides, dipoles and arrays.', icon: 'radio', pages: 'Unit 6', interactiveKey: 'efield-lab' },
]

export const COMMEM_SECTIONS: SectionMeta[] = [
  { id: 'commem-ch1-s1', chapterId: 'commem-ch1', number: 1.1, title: 'Autocorrelation & PSD', description: 'Wide-sense stationarity, Wiener-Khintchin pair, power from PSD.' },
  { id: 'commem-ch1-s2', chapterId: 'commem-ch1', number: 1.2, title: 'White Noise Properties', description: 'Flat PSD, delta autocorrelation, thermal-noise floor kTB.' },
  { id: 'commem-ch1-s3', chapterId: 'commem-ch1', number: 1.3, title: 'Filtering Random Signals through LTI', description: 'Output PSD shaping, noise equivalent bandwidth.' },
  { id: 'commem-ch1-s4', chapterId: 'commem-ch1', number: 1.4, title: 'Narrowband Noise Preview', description: 'In-phase/quadrature decomposition intuition for bandpass systems.' },
  { id: 'commem-ch2-s1', chapterId: 'commem-ch2', number: 2.1, title: 'AM: Spectra & Demodulation', description: 'DSB/SC, conventional AM, envelope detection, modulation index.' },
  { id: 'commem-ch2-s2', chapterId: 'commem-ch2', number: 2.2, title: 'FM/PM: Spectra & Bandwidth', description: 'Carson rule, Bessel sidebands, discriminator detection.' },
  { id: 'commem-ch2-s3', chapterId: 'commem-ch2', number: 2.3, title: 'Superheterodyne Receivers', description: 'Image frequency, IF selection, tracking and tuning.' },
  { id: 'commem-ch2-s4', chapterId: 'commem-ch2', number: 2.4, title: 'AM vs FM Trade-offs', description: 'Power efficiency, noise immunity, broadcast band choices.' },
  { id: 'commem-ch3-s1', chapterId: 'commem-ch3', number: 3.1, title: 'PCM & DPCM', description: 'Sampling, quantization noise, compression laws, delta modulation.' },
  { id: 'commem-ch3-s2', chapterId: 'commem-ch3', number: 3.2, title: 'ASK, PSK, FSK & QAM', description: 'Constellation geometry, bandwidth, coherent versus non-coherent.' },
  { id: 'commem-ch3-s3', chapterId: 'commem-ch3', number: 3.3, title: 'ISI, Nyquist Pulses & Equalization Preview', description: 'Zero-ISI criterion, raised-cosine idea, MMSE equalizer mention.' },
  { id: 'commem-ch3-s4', chapterId: 'commem-ch3', number: 3.4, title: 'Matched Filter, SNR & BER', description: 'MAP/ML detection, error-probability ordering across schemes.' },
  { id: 'commem-ch4-s1', chapterId: 'commem-ch4', number: 4.1, title: 'Entropy & Mutual Information', description: 'Source uncertainty, joint/conditional forms, binary entropy curve.' },
  { id: 'commem-ch4-s2', chapterId: 'commem-ch4', number: 4.2, title: 'Channel Capacity Theorem', description: 'BSC/AWGN capacities, bandwidth-SNR exchange.' },
  { id: 'commem-ch4-s3', chapterId: 'commem-ch4', number: 4.3, title: 'Hamming Codes', description: 'Parity placement, syndrome decoding, SEC/DED extension.' },
  { id: 'commem-ch4-s4', chapterId: 'commem-ch4', number: 4.4, title: 'CRC & Burst Detection', description: 'Generator polynomials, shift-register division, standard choices.' },
  { id: 'commem-ch5-s1', chapterId: 'commem-ch5', number: 5.1, title: 'Maxwell Equations & Boundary Conditions', description: 'Differential and integral forms, interface conditions, continuity.' },
  { id: 'commem-ch5-s2', chapterId: 'commem-ch5', number: 5.2, title: 'Wave Equation & Poynting Vector', description: 'Derivation in lossless media, power flow and time-average.' },
  { id: 'commem-ch5-s3', chapterId: 'commem-ch5', number: 5.3, title: 'Reflection, Refraction & Polarization', description: 'Normal/oblique incidence, Brewster and critical angles, polarization states.' },
  { id: 'commem-ch5-s4', chapterId: 'commem-ch5', number: 5.4, title: 'Propagation, Phase/Group Velocity & Skin Depth', description: 'Dispersive media, good conductors, depth-of-penetration math.' },
  { id: 'commem-ch6-s1', chapterId: 'commem-ch6', number: 6.1, title: 'Line Equations & Characteristic Impedance', description: 'Telegrapher equations, lossless propagation, reflection coefficient.' },
  { id: 'commem-ch6-s2', chapterId: 'commem-ch6', number: 6.2, title: 'Matching & Smith Chart', description: 'Quarter-wave and stub matching, chart navigation for Z/Y.' },
  { id: 'commem-ch6-s3', chapterId: 'commem-ch6', number: 6.3, title: 'Waveguides & Optical Fibres', description: 'Cutoff modes in rectangular guides, TIR guiding in fibres.' },
  { id: 'commem-ch6-s4', chapterId: 'commem-ch6', number: 6.4, title: 'Dipoles, Monopoles & Arrays', description: 'Radiation patterns, gain/directivity, two-element array factor.' },
]
