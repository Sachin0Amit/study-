// ============================================================================
// Signals & Systems + Control Systems (GATE EC/EE/IN/ISRO) — chapter/section
// metadata (bookId 'sigctrl-complete').
// Lab mapping: signals → wave-lab, Fourier/DFT → fourier-lab,
// signal-flow graphs → graph-playground, stability/Bode → filter-lab. No code console.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../library'

export const SIGCTRL_CHAPTERS: ChapterMeta[] = [
  { id: 'sigctrl-ch1', bookId: 'sigctrl-complete', number: 1, title: 'Continuous & Discrete Signals', shortTitle: 'Signals', description: 'CT/DT signal types, shifting and scaling, impulse and step, energy versus power signals.', icon: 'activity', pages: 'Unit 1', interactiveKey: 'wave-lab' },
  { id: 'sigctrl-ch2', bookId: 'sigctrl-complete', number: 2, title: 'LTI Systems: Convolution, Causality & Stability', shortTitle: 'LTI Systems', description: 'Impulse response, convolution sums/integrals, causality, BIBO stability, poles and zeros intuition.', icon: 'boxes', pages: 'Unit 2', interactiveKey: 'wave-lab' },
  { id: 'sigctrl-ch3', bookId: 'sigctrl-complete', number: 3, title: 'Fourier Series, Transform & Sampling', shortTitle: 'Fourier & Sampling', description: 'CTFS/CTFT pairs and properties, frequency response, group/phase delay, Nyquist sampling and aliasing.', icon: 'audio-waveform', pages: 'Unit 3', interactiveKey: 'fourier-lab' },
  { id: 'sigctrl-ch4', bookId: 'sigctrl-complete', number: 4, title: 'DTFT, DFT & Z-Transform', shortTitle: 'Discrete Transforms', description: 'DTFT/DFT properties, FFT idea, z-transform ROC, inverse transforms, solving difference equations.', icon: 'repeat', pages: 'Unit 4', interactiveKey: 'fourier-lab' },
  { id: 'sigctrl-ch5', bookId: 'sigctrl-complete', number: 5, title: 'Transfer Functions, Block Diagrams & Signal-Flow Graphs', shortTitle: 'Models & SFG', description: 'Feedback principle, block reduction, Mason gain formula, transient/steady-state specs, error constants.', icon: 'share', pages: 'Unit 5', interactiveKey: 'graph-playground' },
  { id: 'sigctrl-ch6', bookId: 'sigctrl-complete', number: 6, title: 'Stability, Frequency Response & State Space', shortTitle: 'Stability & State', description: 'Routh-Hurwitz, Nyquist criterion, Bode and root-locus sketches, lag/lead compensation, state models.', icon: 'gauge', pages: 'Unit 6', interactiveKey: 'filter-lab' },
]

export const SIGCTRL_SECTIONS: SectionMeta[] = [
  { id: 'sigctrl-ch1-s1', chapterId: 'sigctrl-ch1', number: 1.1, title: 'CT vs DT Signal Types', description: 'Analog, sampled and digital signals; even/odd, periodic and bounded signals.' },
  { id: 'sigctrl-ch1-s2', chapterId: 'sigctrl-ch1', number: 1.2, title: 'Shifting, Scaling & Reversal', description: 'Time-shift/scale order of operations, transformation puzzles.' },
  { id: 'sigctrl-ch1-s3', chapterId: 'sigctrl-ch1', number: 1.3, title: 'Impulse, Step & Ramp', description: 'Delta/sifting, step-discontinuity relations, singularity-function calculus.' },
  { id: 'sigctrl-ch1-s4', chapterId: 'sigctrl-ch1', number: 1.4, title: 'Energy vs Power Signals', description: 'Finite-energy versus finite-power classification with RMS connections.' },
  { id: 'sigctrl-ch2-s1', chapterId: 'sigctrl-ch2', number: 2.1, title: 'Impulse Response & Convolution', description: 'Why h(t) characterizes LTI systems; flip-shift-multiply-add mechanics.' },
  { id: 'sigctrl-ch2-s2', chapterId: 'sigctrl-ch2', number: 2.2, title: 'Properties: Memory, Invertibility, Causality', description: 'Testing systems from input-output or impulse descriptions.' },
  { id: 'sigctrl-ch2-s3', chapterId: 'sigctrl-ch2', number: 2.3, title: 'BIBO Stability', description: 'Absolutely-summable/integrable impulse responses; pole-location preview.' },
  { id: 'sigctrl-ch2-s4', chapterId: 'sigctrl-ch2', number: 2.4, title: 'Poles, Zeros & Frequency Response', description: 'Reading magnitude/phase behaviour from pole-zero plots.' },
  { id: 'sigctrl-ch3-s1', chapterId: 'sigctrl-ch3', number: 3.1, title: 'Fourier Series of Periodic Signals', description: 'Trigonometric and exponential forms, symmetry shortcuts, Parseval power.' },
  { id: 'sigctrl-ch3-s2', chapterId: 'sigctrl-ch3', number: 3.2, title: 'Fourier Transform Pairs & Properties', description: 'Duality, shifting, scaling, differentiation; standard pairs table.' },
  { id: 'sigctrl-ch3-s3', chapterId: 'sigctrl-ch3', number: 3.3, title: 'LTI Frequency Response & Delay', description: 'Eigenfunction property, magnitude/phase, group versus phase delay.' },
  { id: 'sigctrl-ch3-s4', chapterId: 'sigctrl-ch3', number: 3.4, title: 'Sampling Theorem & Aliasing', description: 'Nyquist rate, reconstruction, undersampling foldovers.' },
  { id: 'sigctrl-ch4-s1', chapterId: 'sigctrl-ch4', number: 4.1, title: 'DTFT & DFT Properties', description: 'Periodicity in frequency, circular convolution, zero padding.' },
  { id: 'sigctrl-ch4-s2', chapterId: 'sigctrl-ch4', number: 4.2, title: 'FFT Idea & Applications', description: 'Divide-and-conquer spectra, fast filtering preview.' },
  { id: 'sigctrl-ch4-s3', chapterId: 'sigctrl-ch4', number: 4.3, title: 'Z-Transform & ROC', description: ' unilateral/bilateral forms, ROC from pole pattern, standard pairs.' },
  { id: 'sigctrl-ch4-s4', chapterId: 'sigctrl-ch4', number: 4.4, title: 'Inverse Z & Difference Equations', description: 'Partial-fraction inversion, solving recursions with initial conditions.' },
  { id: 'sigctrl-ch5-s1', chapterId: 'sigctrl-ch5', number: 5.1, title: 'Feedback Principle & Transfer Functions', description: 'Open versus closed loop, sensitivity reduction by feedback.' },
  { id: 'sigctrl-ch5-s2', chapterId: 'sigctrl-ch5', number: 5.2, title: 'Block Diagram Reduction', description: 'Series/parallel/feedback moves, shifting summing points and takeoffs.' },
  { id: 'sigctrl-ch5-s3', chapterId: 'sigctrl-ch5', number: 5.3, title: 'Mason Gain Formula', description: 'Forward paths, loops, non-touching sets, determinant evaluation.' },
  { id: 'sigctrl-ch5-s4', chapterId: 'sigctrl-ch5', number: 5.4, title: 'Time Response & Steady-State Errors', description: 'First/second-order specs, damping regimes, Kp/Kv/Ka error constants.' },
  { id: 'sigctrl-ch6-s1', chapterId: 'sigctrl-ch6', number: 6.1, title: 'Routh-Hurwitz Criterion', description: 'Array construction, special cases (zero row, zero first element), gain ranges.' },
  { id: 'sigctrl-ch6-s2', chapterId: 'sigctrl-ch6', number: 6.2, title: 'Nyquist & Bode Stability', description: 'Encirclement counting, gain/phase margins from Bode plots.' },
  { id: 'sigctrl-ch6-s3', chapterId: 'sigctrl-ch6', number: 6.3, title: 'Root Locus & Compensation', description: 'Angle/magnitude conditions, asymptote/centroid sketches, lag/lead design.' },
  { id: 'sigctrl-ch6-s4', chapterId: 'sigctrl-ch6', number: 6.4, title: 'State-Space Models', description: 'State equations, solution via matrix exponential, controllability preview.' },
]
