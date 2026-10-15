import type { SectionContent } from '../library'

// ============================================================================
// Engineering Semester Exams — ECE / EE / ME branch content (books
// 'ece-complete', 'ee-complete', 'me-complete'). Full SectionContent for the FIRST
// section of 12 core chapters: ECE — Network Analysis & Synthesis (10.1),
// Signals & Systems (14.1), Analog Communication (16.1), EM Field Theory
// (19.1); EE — Circuit Theory & Network Analysis (9.1), Electrical Machines I
// (14.1), Power Systems I (19.1), Power Electronics (21.1); ME — Applied
// Thermodynamics (9.1), Strength of Materials (11.1), Fluid Mechanics (10.1),
// IC Engines (22.1). University-exam oriented (standard paper pattern).
// All backslashes doubled in TS strings for KaTeX.
// ============================================================================

export const enggBranchContent: SectionContent[] = [
  // ------------------------------------------------- ECE 10.1 — Networks
  {
    sectionId: 'ece-e-networks-s1',
    readingTime: 9,
    prerequisites: [
      'KCL and KVL for simple resistive circuits',
      'Matrix multiplication and transpose',
      'Two-terminal elements: resistors and ideal sources as branches'
    ],
    intro: 'Every Network Analysis paper (the state technical university KEC303 / the state technical university Semester 3) begins with the graph: strip the elements away and keep only the connection pattern. Topology decides how many independent KCL and KVL equations you must write before any numbers appear. Mastering tree, incidence, tie-set and cut-set matrices turns messy mesh and nodal analysis into a mechanical procedure worth easy marks.',
    objectives: [
      'Draw the graph of a network and count tree branches, links and independent loops for any connected graph',
      'Write the reduced incidence matrix $A$ and use the formulations $A i_b = 0$ (KCL) and $v_b = A^T v_n$ (KVL)',
      'Construct fundamental tie-set and cut-set matrices from a chosen tree and state their sizes',
      'Solve the nodal equations of a resistive network straight from the incidence formulation'
    ],
    concepts: [
      {
        term: 'Graph, tree and co-tree',
        kind: 'definition',
        statement: 'A **directed graph** replaces every two-terminal element by a **branch** joining two **nodes**; a **tree** is any connected subgraph containing all $n$ nodes but no closed path, and it always has **$n - 1$ twigs** with the remaining **$b - n + 1$ links** forming the co-tree.',
        detail: 'Every link added to the tree closes exactly one loop, so a connected graph has exactly $b - n + 1$ independent loops and $n - 1$ independent node equations. Assessments love the counting question "how many links / twigs / loops" — draw the graph, never guess from the circuit diagram. Sources stay in as branches here; killing sources is the Thevenin exercise of Section 10.2, a completely different operation.'
      },
      {
        term: 'Incidence matrix',
        kind: 'notation',
        statement: 'The **reduced incidence matrix** $A$ is $(n-1) \\times b$ with $a_{kj} = +1$ if branch $j$ leaves node $k$, $-1$ if it enters and $0$ otherwise; KCL becomes $A i_b = 0$ and branch voltages follow node voltages as $v_b = A^T v_n$.',
        detail: 'The rank of $A$ is $n - 1$ for a connected graph because the reference-node row is dropped. Sign conventions must stay consistent — one flipped arrow and the matrix system turns singular. Choosing the reference at the node with the most branches shortens the algebra, a trick worth marks in long problems.'
      },
      {
        term: 'Tie-set (fundamental loop) matrix',
        kind: 'law',
        statement: 'Each **link** of the co-tree closes exactly one **fundamental loop** through the tree; collecting orientations row-wise gives the $(b-n+1) \\times b$ **tie-set matrix** $B$, and KVL reads $B v_b = 0$ with loop currents entering as $i_b = B^T i_L$.',
        detail: 'The f-loop direction is fixed by its own link. Substituting Ohm law and $i_b = B^T i_L$ produces the familiar mesh-resistance equations — mesh analysis is just tie-set analysis on the natural tree of a planar graph. The orthogonality $B A^T = 0$ is a favourite two-mark proof.'
      },
      {
        term: 'Cut-set (fundamental cut-set) matrix',
        kind: 'law',
        statement: 'A **cut-set** is a minimal set of branches whose removal splits the graph into two parts; each **twig** defines one fundamental cut-set, giving the $(n-1) \\times b$ **cut-set matrix** $Q$ with KCL as $Q i_b = 0$ and $v_b = Q^T v_t$.',
        detail: 'The f-cut-set direction is set by its twig, and $Q$ is the machine form of "total current leaving a supernode is zero". Numericals ask sizes: $Q$ is $(n-1) \\times b$ and $B$ is $(b-n+1) \\times b$, with $Q B^T = 0$ linking them. Twig voltages as variables generalise node analysis.'
      },
      {
        term: 'Counting trees and MNA preview',
        kind: 'insight',
        statement: 'The number of possible trees of a **complete graph** on $n$ nodes is $n^{n-2}$ (Cayley), e.g. $4^2 = 16$ trees for four nodes; when voltage sources or floating elements break the pure admittance pattern, nodal analysis upgrades to **modified nodal analysis (MNA)**.',
        detail: 'MNA appends extra rows for the branch currents that cannot be eliminated (voltage-source currents), keeping the incidence-based structure intact — SPICE works this way. The counting question "trees of a complete graph with 4 nodes" (answer 16) appears verbatim in the state technical university papers; remember each such tree has $n - 1 = 3$ twigs.'
      }
    ],
    examples: [
      {
        title: 'Topology bookkeeping of a five-node graph',
        problem: 'A connected network graph has $n = 5$ nodes and $b = 8$ branches. Find the number of twigs, links, independent loops, the rank of the incidence matrix, and the sizes of the fundamental tie-set and cut-set matrices.',
        steps: [
          { label: 'Step 1', text: '```text\ntwigs = n - 1 = 4 ; links = b - n + 1 = 8 - 5 + 1 = 4\n```\nA tree on 5 nodes always uses $n - 1 = 4$ twigs; the remaining $8 - 4 = 4$ branches are the links of the co-tree.' },
          { label: 'Step 2', text: 'Each link closes exactly one independent loop, so the graph has $b - n + 1 = 4$ fundamental loops — exactly the number of independent KVL equations mesh analysis will need.' },
          { label: 'Step 3', text: 'KCL supplies $n - 1 = 4$ independent node equations, and the reduced incidence matrix $A$ is $(n-1) \\times b = 4 \\times 8$ with rank $4$.' },
          { label: 'Step 4', text: 'Hence $B$ is $4 \\times 8$ (one row per link) and $Q$ is $4 \\times 8$ (one row per twig); the check $BA^T = 0$ must hold identically, a 30-second self-verification in the assessment.' }
        ],
        result: '4 twigs, 4 links, 4 independent loops, rank $A = 4$; $B$ is $4\\times8$ and $Q$ is $4\\times8$.'
      },
      {
        title: 'Nodal analysis from the incidence formulation',
        problem: 'A 5 A current source feeds node 1 of a network whose conductances are $G_{10} = 1\\ \\text{S}$ (node 1 to ground), $G_{12} = 2\\ \\text{S}$ (between nodes 1 and 2) and $G_{20} = 2\\ \\text{S}$ (node 2 to ground). Find both node voltages.',
        steps: [
          { label: 'Step 1', text: '```text\nnode 1: (1+2)V1 - 2V2 = 5 ; node 2: -2V1 + (2+2)V2 = 0\n```\nPick node 0 as reference. The node-admittance form $A Y_b A^T v_n = i_s$ gives $3V_1 - 2V_2 = 5$ and $-2V_1 + 4V_2 = 0$.' },
          { label: 'Step 2', text: 'The second equation gives $V_1 = 2V_2$; substitute into the first: $3(2V_2) - 2V_2 = 4V_2 = 5$.' },
          { label: 'Step 3', text: 'Hence $V_2 = 1.25$ V and $V_1 = 2.5$ V.' },
          { label: 'Step 4', text: 'KCL check at node 1: current down $G_{10}$ is $2.5 \\times 1 = 2.5$ A and current towards node 2 is $2(2.5 - 1.25) = 2.5$ A — exactly the injected 5 A.' }
        ],
        result: '$V_1 = 2.5$ V and $V_2 = 1.25$ V, with the source current fully accounted for by KCL.'
      }
    ],
    keyTakeaways: [
      'A tree on $n$ nodes has $n-1$ twigs; the co-tree holds the $b-n+1$ links, and each link defines one independent loop.',
      'The incidence matrix encodes both laws: $Ai_b = 0$ for KCL and $v_b = A^Tv_n$ for KVL, with rank $n-1$.',
      'Tie-set matrix $B$ ($(b-n+1)\\times b$) carries KVL $Bv_b = 0$; cut-set matrix $Q$ ($(n-1)\\times b$) carries KCL $Qi_b = 0$; always $BA^T = 0$.',
      'A complete graph $K_n$ has $n^{n-2}$ spanning trees — 16 for four nodes, 125 for five.'
    ],
    quiz: [
      {
        q: 'A connected graph has 15 branches and 9 nodes. The number of links is',
        options: ['7', '8', '6', '15'],
        answer: 0,
        explanation: 'Step 1: Links are the co-tree branches, $b - n + 1$. Step 2: Substitute: $15 - 9 + 1 = 7$. Step 3: The twigs number $n - 1 = 8$, which is the planted distractor. Step 4: Links plus twigs must total 15 branches, confirming $7 + 8 = 15$.'
      },
      {
        q: 'The rank of the reduced incidence matrix of a connected graph with 6 nodes is',
        options: ['6', '5', '1', '0'],
        answer: 1,
        explanation: 'Step 1: Dropping the reference node leaves $n - 1$ independent rows. Step 2: Those rows are independent KCL equations at the remaining nodes. Step 3: Hence rank $= 6 - 1 = 5$. Step 4: Rank 6 is impossible because all six node rows sum to zero.'
      },
      // PYQ-pattern: Cayley tree count for complete graphs
      {
        q: 'The number of possible trees of a complete graph with four nodes is',
        options: ['8', '12', '16', '64'],
        answer: 2,
        explanation: 'Step 1: Cayley formula: spanning trees of $K_n$ equal $n^{n-2}$. Step 2: With $n = 4$: $4^2 = 16$. Step 3: Each tree has 3 twigs, so twig-counting alone undercounts. Step 4: 64 is the $4^3$ exponent trap.'
      },
      {
        q: 'Which matrix equation is the node form of Kirchhoff current law?',
        options: ['$B v_b = 0$', '$A i_b = 0$', '$v_b = A^T v_n$', '$A v_b = 0$'],
        answer: 1,
        explanation: 'Step 1: KCL is a statement about currents meeting at nodes. Step 2: Each row of the incidence matrix sums branch currents at one node, giving $Ai_b = 0$. Step 3: $Bv_b = 0$ is KVL and $v_b = A^Tv_n$ maps node voltages to branch voltages. Step 4: $Q i_b = 0$ is the cut-set version of KCL, but the canonical node form is $Ai_b = 0$.'
      }
    ]
  },
  // ------------------------------------------------- ECE 14.1 — Signals
  {
    sectionId: 'ece-e-sigsys-s1',
    readingTime: 10,
    prerequisites: [
      'Elementary calculus: integrating decaying exponentials',
      'Complex exponentials $e^{j\\omega t}$ and the Euler formula',
      'Unit step $u(t)$ and unit impulse basics'
    ],
    intro: 'Signals & Systems (KEC403 / the state technical university Semester 4) opens by sorting every signal into classes: continuous or discrete, periodic or not, energy or power. University papers test exactly these classification drills — periodicity of a sum, energy of a decaying exponential, stability of a system — because a wrong class means every later formula (Fourier, Laplace, z) is misapplied. This section builds the sorting machinery the whole semester reuses.',
    objectives: [
      'Classify signals as continuous/discrete, periodic/aperiodic, energy/power and deterministic/random',
      'Compute signal energy $E = \\int |x(t)|^2 dt$ and test periodicity for both CT sums and discrete sinusoids',
      'Test systems for linearity, time-invariance, causality and BIBO stability',
      'Explain why $e^{j2n}$ is not periodic although $e^{j2t}$ is — the classic assessment trap'
    ],
    concepts: [
      {
        term: 'Signal families',
        kind: 'definition',
        statement: 'A **continuous-time signal** $x(t)$ is defined for every $t$; a **discrete-time signal** $x[n]$ exists only at integer indices $n$, and when amplitudes are also quantised the signal is fully **digital**.',
        detail: 'Deterministic signals are given by formula; random signals (noise) only by statistics. Sampling turns CT into DT while quantisation discretises amplitude — two different operations that students constantly swap in viva questions. Chapters 14.4 and 16 chain them: sample first, quantise second.'
      },
      {
        term: 'Periodicity rules',
        kind: 'theorem',
        statement: '$x(t)$ is **periodic** if $x(t + T) = x(t)$ for some $T > 0$; a sum of sinusoids is periodic iff the ratio of any two periods is **rational**, with $T_0$ the LCM. For $x[n] = \\cos(\\Omega_0 n)$ periodicity needs $\\frac{\\Omega_0}{2\\pi} = \\frac{p}{q}$ rational, giving $N = q$ samples.',
        detail: 'The killer trap: $e^{j2t}$ is periodic with $T = \\pi$, but $e^{j2n}$ is NOT periodic because $\\frac{2}{2\\pi} = \\frac{1}{\\pi}$ is irrational — no integer N reproduces the sample sequence. Assessment favourite: $\\cos(0.3\\pi n)$ has $\\frac{0.3\\pi}{2\\pi} = \\frac{3}{20}$, so $N = 20$.'
      },
      {
        term: 'Energy and power signals',
        kind: 'definition',
        statement: '**Energy** $E = \\lim_{T \\to \\infty} \\int_{-T/2}^{T/2} |x(t)|^2 dt$ and **power** $P = \\lim_{T \\to \\infty} \\frac{1}{T} \\int_{-T/2}^{T/2} |x(t)|^2 dt$; an energy signal has finite $E$ (then $P = 0$), while a periodic signal has finite $P$ with $E \\to \\infty$.',
        detail: '$tu(t)$ is neither — its energy and power both blow up. For $x(t) = Ae^{-at}u(t)$ with $a > 0$: $E = \\frac{A^2}{2a}$; for $A\\cos\\omega_0 t$: $P = \\frac{A^2}{2}$. Papers ask "classify the signal" — compute $E$ first, then $P$, and quote both numbers.'
      },
      {
        term: 'Linearity and time-invariance',
        kind: 'method',
        statement: 'A system is **linear** iff homogeneity and additivity both hold; it is **time-invariant** iff $x(t) \\to y(t)$ implies $x(t - t_0) \\to y(t - t_0)$ for every shift $t_0$.',
        detail: '$y(t) = x(2t)$ is linear but time-varying (a shift before compression becomes a doubled shift after it). The amplitude modulator $y(t) = x(t)\\cos\\omega_c t$ is also linear but time-VARYING: the carrier samples a different value at the shifted instant. The integrator $y(t) = \\int_{-\\infty}^{t} x(\\tau) d\\tau$ is linear, time-invariant and causal — the standard all-true example.'
      },
      {
        term: 'Causality and BIBO stability',
        kind: 'theorem',
        statement: 'A system is **causal** when the output never anticipates the input ($h(t) = 0$ for $t < 0$ for LTI systems) and **BIBO stable** iff $\\int_{-\\infty}^{\\infty} |h(\\tau)| d\\tau < \\infty$ (CT) or $\\sum_k |h[k]| < \\infty$ (DT).',
        detail: '$h(t) = e^{-2t}u(t)$ is stable since $\\int_0^{\\infty} e^{-2t} dt = \\frac{1}{2}$; $u(t)$ is NOT BIBO stable even though a step input gives a bounded-looking output — the definition demands a bounded output for EVERY bounded input, and any bounded non-decaying input accumulates without limit. Test the impulse response, never one lucky input.'
      }
    ],
    examples: [
      {
        title: 'Energy of a one-sided exponential',
        problem: 'Classify $x(t) = 3e^{-2t}u(t)$ as an energy or power signal and compute its energy.',
        steps: [
          { label: 'Step 1', text: '```text\nE = integral of 9 e^{-4t} dt from 0 to infinity = 9/4\n```\nSquare the signal: $|x(t)|^2 = 9e^{-4t}$ for $t \\ge 0$ and zero elsewhere, so $E = \\int_0^{\\infty} 9e^{-4t} dt$.' },
          { label: 'Step 2', text: 'Evaluate: $E = 9 \\left[ \\frac{e^{-4t}}{-4} \\right]_0^{\\infty} = 9 \\times \\frac{1}{4} = 2.25$ J (normalised to 1 $\\Omega$).' },
          { label: 'Step 3', text: 'Because $E$ is finite, $P = 0$ and $x(t)$ is an energy signal; in general $Ae^{-at}u(t)$ stores $E = \\frac{A^2}{2a}$.' },
          { label: 'Step 4', text: 'Scaling check: amplitude 1 would give $E = \\frac{1}{4}$, and tripling amplitude multiplies energy by 9 — the square law assessors exploit to build distractors.' }
        ],
        result: '$E = 2.25$ J and $P = 0$: an energy signal.'
      },
      {
        title: 'Periodicity of CT sums and DT sinusoids',
        problem: 'Find the fundamental period of $x(t) = 2\\cos(\\frac{\\pi t}{4}) + 3\\sin(\\frac{\\pi t}{8})$ and of $x[n] = \\cos(0.3\\pi n)$; is $e^{j2n}$ periodic?',
        steps: [
          { label: 'Step 1', text: 'Continuous-time terms: $T_1 = \\frac{2\\pi}{\\pi/4} = 8$ s and $T_2 = \\frac{2\\pi}{\\pi/8} = 16$ s.' },
          { label: 'Step 2', text: 'The ratio $\\frac{T_1}{T_2} = \\frac{1}{2}$ is rational, so the sum is periodic with $T_0 = \\mathrm{lcm}(8, 16) = 16$ s.' },
          { label: 'Step 3', text: 'Discrete case: $\\frac{\\Omega_0}{2\\pi} = \\frac{0.3\\pi}{2\\pi} = \\frac{3}{20}$ is rational, so $x[n]$ is periodic with $N = 20$ samples — the digital frequency must be a rational multiple of $2\\pi$.' },
          { label: 'Step 4', text: 'For $e^{j2n}$: $\\frac{2}{2\\pi} = \\frac{1}{\\pi}$ is irrational, so no integer $N$ satisfies $e^{j2(n+N)} = e^{j2n}$; it is aperiodic even though its continuous twin $e^{j2t}$ has period $\\pi$.' }
        ],
        result: '$T_0 = 16$ s; $N = 20$ samples; $e^{j2n}$ is not periodic.'
      }
    ],
    keyTakeaways: [
      'A CT sum is periodic only for rational period ratios, with $T_0$ the LCM; a DT sinusoid is periodic only when $\\frac{\\Omega_0}{2\\pi}$ is rational.',
      'Energy signals have finite $E$ and zero $P$; periodic signals are power signals with infinite energy.',
      '$y(t) = x(2t)$ and $y(t) = x(t)\\cos\\omega_c t$ are linear but time-varying — the two most-tested time-invariance failures.',
      'BIBO stability means $\\int |h| < \\infty$ (or $\\sum |h[k]| < \\infty$), verified on the impulse response itself.'
    ],
    quiz: [
      {
        q: 'The energy of $x(t) = e^{-3t}u(t)$ is',
        options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{9}$', '$3$'],
        answer: 0,
        explanation: 'Step 1: Square first: $|x(t)|^2 = e^{-6t}$. Step 2: Integrate: $E = \\int_0^{\\infty} e^{-6t} dt = \\frac{1}{6}$. Step 3: The shortcut $E = \\frac{1}{2a}$ with $a = 3$ gives the same $\\frac{1}{6}$. Step 4: $\\frac{1}{3}$ is the trap of integrating $e^{-3t}$ before squaring.'
      },
      {
        q: 'The fundamental period of $x[n] = \\cos(0.25\\pi n)$ is',
        options: ['4', '8', '16', 'not periodic'],
        answer: 1,
        explanation: 'Step 1: For DT sinusoids compute $\\frac{\\Omega_0}{2\\pi}$. Step 2: $\\frac{0.25\\pi}{2\\pi} = \\frac{1}{8}$ is rational with denominator 8. Step 3: Hence $N = 8$ samples. Step 4: Had the ratio been irrational, "not periodic" would be the answer — as with $e^{j2n}$.'
      },
      // PYQ-pattern: DT periodicity drill
      {
        q: 'Which of these discrete-time signals is NOT periodic?',
        options: ['$\\cos(\\frac{\\pi n}{3})$', '$\\sin(0.2\\pi n)$', '$e^{j2n}$', '$\\cos(0.5\\pi n + 1)$'],
        answer: 2,
        explanation: 'Step 1: Periodicity needs $\\frac{\\Omega_0}{2\\pi}$ rational. Step 2: $\\frac{\\pi/3}{2\\pi} = \\frac{1}{6}$ gives $N = 6$; $\\frac{0.2\\pi}{2\\pi} = \\frac{1}{10}$ gives $N = 10$; $\\frac{0.5\\pi}{2\\pi} = \\frac{1}{4}$ gives $N = 4$. Step 3: $\\frac{2}{2\\pi} = \\frac{1}{\\pi}$ is irrational, so $e^{j2n}$ never repeats. Step 4: A constant phase offset never affects periodicity.'
      },
      {
        q: 'The system $y(t) = x(t)\\cos(\\omega_0 t)$ is',
        options: ['linear and time-invariant', 'linear but time-varying', 'nonlinear and time-invariant', 'nonlinear and time-varying'],
        answer: 1,
        explanation: 'Step 1: Scaling and additivity pass, so the system is linear. Step 2: A shifted input gives $x(t-\\tau)\\cos\\omega_0 t$. Step 3: The shifted output is $x(t-\\tau)\\cos\\omega_0(t-\\tau)$, which differs because the carrier samples a different value. Step 4: This is the AM modulator — linear but time-varying.'
      }
    ]
  },
  // --------------------------------------------- ECE 16.1 — Analog Comm
  {
    sectionId: 'ece-e-analog-comm-s1',
    readingTime: 11,
    prerequisites: [
      'Fourier series of periodic signals (preview of ECE Section 14.3)',
      'Trigonometric integrals and the Parseval idea',
      'Logarithm and decibel arithmetic'
    ],
    intro: 'Analog Communication (KEC401 / the state technical university Semester 4) starts where signals end: every message must be measured in watts and spectra before any modulation is designed. Papers open with a Fourier-series numerical — harmonic amplitudes of a square wave — then a power or noise computation in dB and dBm. These marks come quickly once the three tools (series, Parseval and $N = kTB$) are automatic.',
    objectives: [
      'Expand a periodic waveform into trigonometric or exponential Fourier series and sketch its line spectrum',
      'Apply the Parseval power theorem to split total power among harmonics',
      'Convert powers between watts, dB and dBm without sign or factor errors',
      'Compute thermal noise $N = kTB$ and signal-to-noise ratio in dB'
    ],
    concepts: [
      {
        term: 'Fourier series and the line spectrum',
        kind: 'theorem',
        statement: 'A periodic $x(t)$ of period $T$ expands as $x(t) = a_0 + \\sum_{n=1}^{\\infty} (a_n \\cos n\\omega_0 t + b_n \\sin n\\omega_0 t)$ with $\\omega_0 = \\frac{2\\pi}{T}$; the **line spectrum** plots harmonic amplitude against $n f_0$, lines spaced $\\frac{1}{T}$ apart.',
        detail: 'Symmetry halves the work: even $x$ keeps only $a_n$, odd $x$ only $b_n$, and half-wave symmetry kills the even harmonics. The bipolar square wave of levels $\\pm A$ carries harmonics $\\frac{4A}{n\\pi}$ on odd $n$ only — the $\\frac{4}{\\pi}$ factor and odd-only pattern are the most quoted results in communication assessments.'
      },
      {
        term: 'Exponential form and negative frequencies',
        kind: 'notation',
        statement: 'The compact form $x(t) = \\sum_{n=-\\infty}^{\\infty} c_n e^{jn\\omega_0 t}$ with $c_n = \\frac{1}{T} \\int_T x(t) e^{-jn\\omega_0 t} dt$ gives **two-sided spectra**, $c_{-n} = c_n^{*}$ for real signals and $|c_n| = \\frac{1}{2}\\sqrt{a_n^2 + b_n^2}$.',
        detail: 'Each trigonometric harmonic splits into $\\pm n f_0$ lines of half amplitude. The standing trap: quoting $a_n$ where $|c_n|$ was asked (or vice versa) loses a factor of two — check whether the question says one-sided or two-sided spectrum before writing numbers.'
      },
      {
        term: 'Parseval power theorem',
        kind: 'theorem',
        statement: 'Total normalised power $P = \\sum_{n=-\\infty}^{\\infty} |c_n|^2 = a_0^2 + \\frac{1}{2} \\sum_{n=1}^{\\infty} (a_n^2 + b_n^2)$ — **power splits additively over harmonics**.',
        detail: 'For the $\\pm A$ square wave, $P = A^2$ with about 81% in the fundamental and 90% once the third harmonic is added — the Parseval answer to "what fraction of power survives a band-limiting filter". Channel truncation causes distortion exactly computable this way.'
      },
      {
        term: 'Decibel arithmetic',
        kind: 'method',
        statement: 'Power ratios use $\\text{dB} = 10 \\log_{10} \\frac{P_2}{P_1}$ and absolute power uses **dBm**, $\\text{dBm} = 10\\log_{10} \\frac{P}{1\\ \\text{mW}}$; halving power is $-3$ dB and a decade is 10 dB.',
        detail: 'Voltage ratios across equal impedances use $20\\log$. Traps that cost marks: adding dB means multiplying powers; dBm + dB stays dBm; doubling voltage is $+6$ dB. Anchor values to memorise: 1 mW is 0 dBm, 1 W is $+30$ dBm and 1 $\\mu$W is $-30$ dBm.'
      },
      {
        term: 'Thermal noise, SNR and noise figure',
        kind: 'law',
        statement: 'Available **thermal noise** power is $N = kTB$ with $k = 1.38\\times10^{-23}$ J/K, giving the anchor $-174$ dBm/Hz at $T_0 = 290$ K; the **noise figure** $F = \\frac{SNR_{in}}{SNR_{out}} \\ge 1$ means, in dB, $SNR_{out} = SNR_{in} - NF$.',
        detail: 'Every doubling of bandwidth adds 3 dB of noise — the shortcut $-174 + 10\\log B$ is expected in assessments. The Friis cascade $F = F_1 + \\frac{F_2 - 1}{G_1} + \\cdots$ shows stage one dominating, which is why the low-noise amplifier sits first in every receiver chain.'
      }
    ],
    examples: [
      {
        title: 'Harmonics and power of a square wave',
        problem: 'A square wave switching between $\\pm 5$ V has a period of 1 ms. Compute the amplitudes of the first three odd harmonics, the total normalised power, and the percentage of power carried by the fundamental.',
        steps: [
          { label: 'Step 1', text: '```text\nodd harmonics only : a_n = 4A / (n pi) , A = 5 V\n```\nHalf-wave symmetry keeps only odd harmonics with $a_n = \\frac{4A}{n\\pi}$: $a_1 = \\frac{20}{\\pi} = 6.37$ V, $a_3 = \\frac{20}{3\\pi} = 2.12$ V and $a_5 = \\frac{20}{5\\pi} = 1.27$ V.' },
          { label: 'Step 2', text: 'Normalised power of the wave itself: mean-square of $\\pm 5$ V is $P = A^2 = 25$ W.' },
          { label: 'Step 3', text: 'Fundamental power by Parseval: $P_1 = \\frac{a_1^2}{2} = \\frac{(6.37)^2}{2} = 20.3$ W, i.e. $\\frac{20.3}{25} \\approx 81\\%$ of the total.' },
          { label: 'Step 4', text: 'Adding the third harmonic: $P_{1+3} = \\frac{8A^2}{\\pi^2}(1 + \\frac{1}{9}) = 22.5$ W, so 90% of the power sits below $3f_0 = 3$ kHz — the Parseval justification for band-limiting channels.' }
        ],
        result: '$a_1 = 6.37$ V, $a_3 = 2.12$ V, $a_5 = 1.27$ V; total power 25 W with about 81% in the fundamental.'
      },
      {
        title: 'Thermal noise floor and SNR',
        problem: 'A receiver of 200 kHz bandwidth operates at 290 K. If the delivered signal power is $-91$ dBm, find the thermal noise power in dBm and the SNR.',
        steps: [
          { label: 'Step 1', text: 'In watts: $N = kTB = 1.38\\times10^{-23} \\times 290 \\times 2\\times10^5 = 8.0\\times10^{-16}$ W.' },
          { label: 'Step 2', text: 'Convert: $N_{\\text{dBm}} = 10\\log_{10} \\frac{8.0\\times10^{-16}}{10^{-3}} = 10\\log_{10}(8.0\\times10^{-13}) \\approx -121$ dBm.' },
          { label: 'Step 3', text: 'Shortcut check: $-174 + 10\\log_{10}(2\\times10^5) = -174 + 53 = -121$ dBm — identical.' },
          { label: 'Step 4', text: 'Hence $SNR = S - N = -91 - (-121) = 30$ dB, a 1000:1 power ratio; any front-end noise figure subtracts directly from this figure.' }
        ],
        result: '$N \\approx -121$ dBm and $SNR = 30$ dB.'
      }
    ],
    keyTakeaways: [
      'A $\\pm A$ square wave carries odd harmonics $\\frac{4A}{n\\pi}$ with total power $A^2$ and roughly 81% in the fundamental.',
      'Parseval turns spectra into power budgets: $P = \\sum |c_n|^2$ with $|c_n| = \\frac{1}{2}\\sqrt{a_n^2 + b_n^2}$.',
      'dB compares, dBm anchors: $N = kTB$ gives $-174$ dBm/Hz at 290 K plus $10\\log B$.',
      'Noise figure subtracts in dB — $SNR_{out} = SNR_{in} - NF$ — and Friis crowns the first stage.'
    ],
    quiz: [
      {
        q: 'The third-harmonic amplitude of a $\\pm 2$ V square wave is',
        options: ['$\\frac{8}{3\\pi}$ V', '$\\frac{8}{\\pi}$ V', '$\\frac{4}{3\\pi}$ V', '$\\frac{2}{3\\pi}$ V'],
        answer: 0,
        explanation: 'Step 1: Odd harmonics only, amplitude $\\frac{4A}{n\\pi}$. Step 2: With $A = 2$ and $n = 3$: $\\frac{8}{3\\pi}$. Step 3: $\\frac{8}{\\pi}$ forgets the division by $n$. Step 4: Even harmonics vanish by half-wave symmetry.'
      },
      {
        q: 'Thermal noise available from a resistor at 290 K over a 1 MHz bandwidth is about',
        options: ['$-174$ dBm', '$-114$ dBm', '$-164$ dBm', '$-104$ dBm'],
        answer: 1,
        explanation: 'Step 1: Anchor: $-174$ dBm per Hz at 290 K. Step 2: Bandwidth factor: $10\\log_{10} 10^6 = 60$ dB. Step 3: Total: $-174 + 60 = -114$ dBm. Step 4: $-174$ dBm alone is the per-hertz figure, not the integrated power.'
      },
      // PYQ-pattern: dBm conversion drill
      {
        q: 'A power level of 0.5 W expressed in dBm is',
        options: ['$+27$ dBm', '$-3$ dBm', '$+30$ dBm', '$+3$ dBm'],
        answer: 0,
        explanation: 'Step 1: 0.5 W is 500 mW. Step 2: $10\\log_{10} 500 = 10 \\times 2.699 = 26.99$. Step 3: Hence $+27$ dBm (approximately). Step 4: $+30$ dBm is 1 W and $-3$ dBm would be half a milliwatt — both classic slips.'
      },
      {
        q: 'Doubling the receiver bandwidth at constant temperature changes the thermal noise power by',
        options: ['+6 dB', '+3 dB', '-3 dB', '+10 dB'],
        answer: 1,
        explanation: 'Step 1: Noise power is $N = kTB$, linear in bandwidth. Step 2: Doubling $B$ doubles $N$. Step 3: A factor of two in power is $10\\log 2 \\approx 3$ dB. Step 4: +6 dB would be a fourfold increase — that is the voltage-doubling rule.'
      }
    ]
  },
  // ------------------------------------------------- ECE 19.1 — EMFT
  {
    sectionId: 'ece-e-emft-s1',
    readingTime: 10,
    prerequisites: [
      'Dot and cross products of vectors',
      'Partial derivatives of functions of several variables',
      'Line, surface and volume integrals at physics level'
    ],
    intro: 'Electromagnetic Field Theory (the state technical university KEC501 / the state technical university Semester 5) is written in the language of vector calculus: gradient, divergence and curl. Every later unit — electrostatics, magnetostatics, Maxwell equations, plane waves — is one of these operators applied to a field. Papers test the machinery directly: compute $\\nabla V$, verify a field is conservative, or push a flux through a cube with the divergence theorem.',
    objectives: [
      'Compute gradient, divergence, curl and Laplacian of given fields in Cartesian coordinates',
      'Interpret $\\nabla V$ as the direction of steepest increase and use $\\vec E = -\\nabla V$',
      'Apply the divergence and Stokes theorems to swap volume/surface and surface/line integrals',
      'Use vector identities to test conservative fields and classify sources'
    ],
    concepts: [
      {
        term: 'Gradient',
        kind: 'definition',
        statement: 'The **gradient** $\\nabla V = \\frac{\\partial V}{\\partial x}\\hat a_x + \\frac{\\partial V}{\\partial y}\\hat a_y + \\frac{\\partial V}{\\partial z}\\hat a_z$ points along maximum increase of $V$, with directional derivative $\\frac{dV}{dl} = \\nabla V \\cdot \\hat a_l$.',
        detail: 'Electrostatics uses $\\vec E = -\\nabla V$: the field points downhill on the potential surface. Numericals ask for $\\nabla V$ at a point followed by $|\\vec E|$. Trap: equipotential surfaces are perpendicular to $\\nabla V$, so any claim that $\\vec E$ is tangent to an equipotential is always false.'
      },
      {
        term: 'Divergence and the divergence theorem',
        kind: 'theorem',
        statement: 'The **divergence** $\\nabla \\cdot \\vec D = \\frac{\\partial D_x}{\\partial x} + \\frac{\\partial D_y}{\\partial y} + \\frac{\\partial D_z}{\\partial z}$ measures outward flux per unit volume, and the theorem $\\oint_S \\vec D \\cdot d\\vec S = \\int_v (\\nabla \\cdot \\vec D)\\, dv$ trades a closed-surface flux for one volume integral.',
        detail: 'Positive divergence marks a source (charge), negative a sink; zero divergence everywhere means the field is solenoidal. In cylindrical and spherical coordinates the operators carry $\\frac{1}{\\rho}$ and $\\frac{1}{r}$ prefactors — omitting them is the single most common error in university papers.'
      },
      {
        term: 'Curl and the Stokes theorem',
        kind: 'theorem',
        statement: 'The **curl** $\\nabla \\times \\vec F$ measures circulation density per unit area, with $\\oint_L \\vec F \\cdot d\\vec L = \\int_S (\\nabla \\times \\vec F) \\cdot d\\vec S$; a field with $\\nabla \\times \\vec F = 0$ everywhere is **conservative**.',
        detail: 'Conservative means zero work around every closed path and existence of a scalar potential. Electrostatic $\\vec E$ is curl-free while magnetostatic $\\vec B$ is divergence-free — the pair of facts Maxwell later breaks with time-varying terms. Compute the curl from the determinant recipe; visual guessing is where marks die.'
      },
      {
        term: 'Laplacian and curvilinear coordinates',
        kind: 'notation',
        statement: 'The **Laplacian** is $\\nabla^2 V = \\nabla \\cdot \\nabla V$; the charge-free electrostatic region obeys the Laplace equation $\\nabla^2 V = 0$, with charge present the Poisson equation $\\nabla^2 V = -\\frac{\\rho_v}{\\epsilon}$.',
        detail: 'Cylindrical length elements are $d\\rho, \\rho\\, d\\phi, dz$ and spherical $dr, r\\, d\\theta, r \\sin\\theta\\, d\\phi$; unit vectors $\\hat a_\\phi$ and $\\hat a_\\theta$ change direction from point to point. Carrying Cartesian unit vectors into curvilinear integrals silently produces wrong answers — always convert first.'
      },
      {
        term: 'Vector identities as free marks',
        kind: 'insight',
        statement: 'Two identities always hold: $\\nabla \\times (\\nabla V) = 0$ — **gradient fields are curl-free** — and $\\nabla \\cdot (\\nabla \\times \\vec A) = 0$ — **curl fields are solenoidal**.',
        detail: 'These two statements underwrite the potential definitions $\\vec E = -\\nabla V$ and $\\vec B = \\nabla \\times \\vec A$. One-mark regulars: state the divergence of a curl, the curl of a gradient, and that $\\nabla^2 (\\frac{1}{r}) = 0$ for $r \\ne 0$ — memorise all three as true.'
      }
    ],
    examples: [
      {
        title: 'Field and work from a potential',
        problem: 'Given the potential $V = 5x^2y$ volts, find $\\vec E$ at $P(1, 2, 0)$, its magnitude, and the work done in moving a 2 $\\mu$C charge from P to the origin.',
        steps: [
          { label: 'Step 1', text: '```text\ndV/dx = 10xy ; dV/dy = 5x^2 ; E = - grad V\n```\nCompute $\\nabla V = 10xy\\hat a_x + 5x^2\\hat a_y$; at P this is $20\\hat a_x + 5\\hat a_y$.' },
          { label: 'Step 2', text: '$\\vec E = -\\nabla V = -20\\hat a_x - 5\\hat a_y$ V/m, so $|\\vec E| = \\sqrt{400 + 25} = 20.6$ V/m directed towards decreasing potential.' },
          { label: 'Step 3', text: 'Potentials: $V_P = 5(1)^2(2) = 10$ V and $V_O = 0$. Since the curl of a gradient vanishes, the field is conservative and the path taken does not matter.' },
          { label: 'Step 4', text: 'Work by the external agent: $W = -q(V_O - V_P) = -2\\times10^{-6}(0 - 10) = +20\\ \\mu$J.' }
        ],
        result: '$\\vec E = -20\\hat a_x - 5\\hat a_y$ V/m with $|\\vec E| = 20.6$ V/m; the work done is $20\\ \\mu$J.'
      },
      {
        title: 'Flux through a cube by the divergence theorem',
        problem: 'The field $\\vec D = 2xy\\hat a_x + x^2\\hat a_y$ C/m$^2$ fills the unit cube $0 \\le x, y, z \\le 1$. Find the total flux leaving the cube.',
        steps: [
          { label: 'Step 1', text: 'Divergence: $\\nabla \\cdot \\vec D = \\frac{\\partial (2xy)}{\\partial x} + \\frac{\\partial (x^2)}{\\partial y} = 2y + 0 = 2y$ C/m$^3$.' },
          { label: 'Step 2', text: 'The divergence theorem converts the six-face surface integral into one volume integral: $\\Psi = \\int_0^1 \\int_0^1 \\int_0^1 2y \\, dv$.' },
          { label: 'Step 3', text: 'Evaluate: $\\int_0^1 2y\\, dy = 1$ while the $x$ and $z$ integrations each contribute a factor of 1, so $\\Psi = 1$ C.' },
          { label: 'Step 4', text: 'Sanity check: positive net outward flux means the cube encloses $+1$ C of charge by Gauss law, $Q = \\oint \\vec D \\cdot d\\vec S$.' }
        ],
        result: 'Total flux $\\Psi = 1$ C, i.e. an enclosed charge of $+1$ C.'
      }
    ],
    keyTakeaways: [
      '$\\nabla V$ points along steepest potential increase; $\\vec E = -\\nabla V$ points downhill with that magnitude of slope.',
      'Divergence converts to total flux via $\\oint \\vec D \\cdot d\\vec S = \\int (\\nabla \\cdot \\vec D) dv$; positive divergence marks a source.',
      'Conservative field: $\\nabla \\times \\vec F = 0$, closed-path work zero, potential exists — electrostatic $\\vec E$ qualifies, magnetostatic $\\vec B$ is solenoidal instead.',
      'The identities $\\nabla \\times \\nabla V = 0$ and $\\nabla \\cdot \\nabla \\times \\vec A = 0$ are free marks; curvilinear operators carry $\\frac{1}{\\rho}$ and $\\frac{1}{r}$ prefactors.'
    ],
    quiz: [
      {
        q: 'If $V = xy$, the magnitude of $\\nabla V$ at the point $(2, 3)$ is',
        options: ['$\\sqrt{13}$', '$5$', '$6$', '$1$'],
        answer: 0,
        explanation: 'Step 1: $\\nabla V = y\\hat a_x + x\\hat a_y$. Step 2: At $(2, 3)$: $3\\hat a_x + 2\\hat a_y$. Step 3: Magnitude $= \\sqrt{9 + 4} = \\sqrt{13}$. Step 4: 5 is the sum of the components, not the norm.'
      },
      {
        q: '$\\nabla \\cdot (\\nabla \\times \\vec A)$ equals',
        options: ['$\\nabla^2 \\vec A$', '$0$', '$|\\vec A|^2$', '$1$'],
        answer: 1,
        explanation: 'Step 1: The divergence of any curl is an identity result. Step 2: Mixed partial derivatives commute, so the trace of the antisymmetric curl matrix vanishes. Step 3: Hence $\\nabla \\cdot (\\nabla \\times \\vec A) = 0$ always. Step 4: This is why $\\vec B = \\nabla \\times \\vec A$ automatically satisfies $\\nabla \\cdot \\vec B = 0$.'
      },
      {
        q: 'The work done by a conservative field around a closed path is',
        options: ['zero', 'equal to the enclosed flux', 'path dependent', 'always negative'],
        answer: 0,
        explanation: 'Step 1: Conservative means $\\vec F = -\\nabla V$ with single-valued $V$. Step 2: Around a closed path the potential returns to its start, so $\\oint \\vec F \\cdot d\\vec L = -\\oint dV = 0$. Step 3: Path dependence is the signature of NON-conservative fields. Step 4: Flux is a surface integral of the field, a different quantity altogether.'
      },
      {
        q: 'In cylindrical coordinates the correct differential length elements are',
        options: ['$d\\rho, d\\phi, dz$', '$d\\rho, \\rho\\, d\\phi, dz$', '$d\\rho, \\frac{d\\phi}{\\rho}, dz$', '$\\rho\\, d\\rho, d\\phi, dz$'],
        answer: 1,
        explanation: 'Step 1: An arc of radius $\\rho$ subtending $d\\phi$ has length $\\rho\\, d\\phi$, not $d\\phi$. Step 2: The radial and axial elements are simply $d\\rho$ and $dz$. Step 3: Hence $(d\\rho, \\rho\\, d\\phi, dz)$. Step 4: Forgetting the metric factor is exactly why curvilinear integrals come out wrong.'
      }
    ]
  },

  // ---------------------------------------------------------------- EE: circuits 9.1
  {
    sectionId: 'ee-e-circuits-s1',
    readingTime: 10,
    prerequisites: [
      'Ohm’s law, KCL and KVL from basic electrical engineering',
      'Matrix algebra (for incidence-matrix formulation)',
    ],
    intro: 'Network topology turns a tangled circuit into clean graph theory: nodes, branches and loops become matrices, and the messy business of writing equations becomes systematic linear algebra. **Graph theory and network topology** is the gateway to mesh and nodal analysis in any university circuit-theory paper — and a favourite 10-mark question.',
    objectives: [
      'Model a network as a directed graph: nodes, branches, tree, co-tree, links and twigs',
      'Build the incidence, reduced incidence, fundamental-loop and fundamental-cut-set matrices',
      'Write mesh and node equations directly from the matrices',
      'Relate the number of independent loops and cut-sets to branches and nodes',
    ],
    concepts: [
      {
        term: 'Graph, tree and co-tree',
        kind: 'definition',
        statement: 'A **graph** is the circuit’s skeleton (nodes + branches, no elements). A **tree** is any set of branches connecting all nodes without closing a loop; the remaining branches form the **co-tree** (links). For $b$ branches and $n$ nodes: twigs $= n - 1$, links $l = b - n + 1$.',
        detail: 'The count is worth memorising: independent loop equations $= l = b - n + 1$ (equal to fundamental loops, one per link), and independent node equations $= n - 1$ (one per twig cut-set). Choosing the tree decides which variables you solve for — voltage-source branches belong in the tree for node analysis.'
      },
      {
        term: 'Incidence matrix',
        kind: 'notation',
        statement: 'The **reduced incidence matrix** $A$ is $(n-1) \times b$: $a_{ij} = +1$ if branch $j$ leaves node $i$, $-1$ if it enters, 0 otherwise; KCL collapses to $AI_b = 0$.',
        detail: 'Any $(n-1)$ rows of the full incidence matrix are independent; deleting the reference node’s row gives $A$. The KVL constraint comes as $V_b = A^T V_n$ — branch voltages from node voltages. Together the two matrix identities generate node analysis mechanically, which is exactly how circuit simulators do it.'
      },
      {
        term: 'Fundamental loop and cut-set matrices',
        kind: 'definition',
        statement: 'Adding one link to the tree closes exactly one **fundamental loop**; cutting the twigs that separate a graph into two parts defines a **fundamental cut-set**. The loop matrix $B$ encodes KVL ($BV_b = 0$); the cut-set matrix $Q$ encodes KCL ($QI_b = 0$).',
        detail: 'Orientations: a fundamental loop takes its link’s direction; a cut-set takes its twig’s. For the same tree, $B$ has dimensions $l \times b$ and $Q$ has $(n-1) \times b$, and they partition the branches as twigs-then-links in compatible order — assessment numericals ask exactly for these matrices from a small graph.'
      },
      {
        term: 'Orthogonality of loop and cut-set spaces',
        kind: 'theorem',
        statement: 'For the same tree, the cut-set and loop matrices satisfy $QB^T = 0$: every loop current is invisible to every cut-set — the algebraic signature of the two conservation laws living in orthogonal subspaces.',
        detail: 'This is why mesh currents and node voltages are fully decoupled descriptions: $b = l + (n-1)$ branch variables split cleanly into loop variables and cut-set variables. Tellegen’s theorem ($\sum v_k i_k = 0$ over all branches) follows from the same orthogonality, and it holds for any two networks sharing a graph — the assessment’s favourite "prove Tellegen in 3 lines" route.'
      },
      {
        term: 'Choosing formulations wisely',
        kind: 'method',
        statement: 'Use node analysis when the graph has fewer independent nodes than loops (voltage sources help); use mesh/loop analysis when loops are fewer (current sources help); the counts come straight from $n - 1$ versus $b - n + 1$.',
        detail: 'Planar circuits: meshes = windows of the drawing, and mesh analysis is the familiar special case of the fundamental-loop method with the mesh currents as variables. Non-planar circuits force the general loop method. In assessments, count before you commit — the 2-minute count saves 15 minutes of algebra.'
      }
    ],
    examples: [
      {
        title: 'Counting trees, links and loops',
        problem: 'A network has 8 branches and 5 nodes. Find the number of twigs, links and independent loop equations.',
        steps: [
          { label: 'Step 1', text: 'Twigs: $n - 1 = 5 - 1 = 4$.' },
          { label: 'Step 2', text: 'Links: $b - n + 1 = 8 - 5 + 1 = 4$.' },
          { label: 'Step 3', text: 'Independent loops = links = 4; independent node equations = twigs = 4.' },
          { label: 'Step 4', text: 'With ties broken by source placement, either formulation costs the same here — but the counts guide the choice.' }
        ],
        result: '4 twigs, 4 links, 4 independent loops.'
      },
      {
        title: 'Reduced incidence matrix of a small graph',
        problem: 'A graph has nodes 1, 2, 3 (node 3 as reference) and branches: a directed 1→2, b directed 1→3, c directed 2→3. Write the reduced incidence matrix.',
        steps: [
          { label: 'Step 1', text: 'Rows = retained nodes 1, 2; columns = branches a, b, c in order.' },
          { label: 'Step 2', text: 'Branch a leaves node 1 (+1 in row 1) and enters node 2 (−1 in row 2).' },
          { label: 'Step 3', text: 'Branch b leaves node 1 and enters the reference (−1 nowhere) → row 1: +1, row 2: 0. Branch c: row 1: 0, row 2: +1.' },
          { label: 'Step 4', text: 'Assemble: $A = \begin{bmatrix} 1 & 1 & 0 \\ -1 & 0 & 1 \end{bmatrix}$; check: every column sums (with the deleted row) to zero.' }
        ],
        result: '$A = \begin{bmatrix} 1 & 1 & 0 \\ -1 & 0 & 1 \end{bmatrix}$.'
      }
    ],
    keyTakeaways: [
      'Tree: $n-1$ twigs; co-tree: $b-n+1$ links; that count IS the choice of analysis.',
      'KCL becomes $AI_b = 0$; KVL becomes $BV_b = 0$ for the fundamental-loop matrix.',
      'Cut-set and loop subspaces are orthogonal — the seed of Tellegen’s theorem.',
      'Count nodes versus loops before writing a single equation.'
    ],
    quiz: [
      {
        q: 'A graph has 10 branches and 6 nodes. The number of independent loops is',
        options: ['4', '5', '6', '9'],
        answer: 1,
        explanation: 'Step 1: Links $l = b - n + 1$. Step 2: $l = 10 - 6 + 1 = 5$. Step 3: Each link defines one fundamental loop. Step 4: Twigs would be $n - 1 = 5$ here too — the coincidence of the counts.'
      },
      {
        q: 'In an incidence matrix entry, a branch entering the row-node contributes',
        options: ['+1', '−1', '0', 'its conductance'],
        answer: 1,
        explanation: 'Step 1: Convention: leaving = +1. Step 2: Entering is the opposite direction: −1. Step 3: No connection: 0. Step 4: Element values never appear in the incidence matrix — topology only.'
      },
      {
        q: 'The number of twigs in any tree of an $n$-node graph is',
        options: ['$n$', '$n - 1$', '$b - n + 1$', '$b$'],
        answer: 1,
        explanation: 'Step 1: A tree connects all nodes with the minimum branch count. Step 2: Connecting $n$ nodes needs exactly $n - 1$ branches. Step 3: Hence twigs $= n - 1$ for every tree. Step 4: $b - n + 1$ is the link count of the co-tree.'
      },
      {
        q: 'Tellegen’s theorem states that for any network, $\sum_{k=1}^{b} v_k i_k$ equals',
        options: ['the total power generated', 'zero', 'the losses', '$b$'],
        answer: 1,
        explanation: 'Step 1: It is the power balance of topology: branch voltages satisfy KVL, branch currents satisfy KCL. Step 2: The inner product of the two orthogonal-subspace vectors vanishes. Step 3: Hence the sum of $v_k i_k$ over ALL branches is zero. Step 4: It even holds between different networks sharing one graph.'
      }
    ]
  },
  // ---------------------------------------------------------------- EE: machines1 14.1
  {
    sectionId: 'ee-e-machines1-s1',
    readingTime: 10,
    prerequisites: [
      'Magnetic circuits, MMF and flux (basic electrical)',
      'Energy and co-energy ideas from field theory',
    ],
    intro: 'Every motor and generator is an energy broker: electrical in, magnetic middleman, mechanical out. **Electromechanical energy conversion** quantifies the broker’s fee — stored field energy — and yields the torque expressions every machine chapter later reuses. University papers open Machines I with the co-energy derivation and a singly-excited numerical almost every year.',
    objectives: [
      'Trace the energy flow: electrical input = field storage + mechanical output + losses',
      'Distinguish energy $W_f$ from co-energy $W_f^{\prime}$ on the λ–i plane geometrically',
      'Derive torque/force for linear and rotational singly-excited systems',
      'Explain why real machines operate on the linear (unsaturated) region’s edge',
    ],
    concepts: [
      {
        term: 'The energy balance',
        kind: 'law',
        statement: 'For a lossless electromechanical system: $dW_e = dW_f + dW_m$ — differential electrical input splits into field-energy storage plus mechanical work; with losses, they are subtracted first.',
        detail: 'The field is the flywheel of the exchange: during motoring the store discharges into the shaft; during generation the shaft refills it. Coupling happens only through flux-linkage changes — a constant, unchanging field converts nothing, which is why every machine runs on changing flux (rotation or switching).'
      },
      {
        term: 'Energy and co-energy',
        kind: 'definition',
        statement: 'Field **energy** $W_f(\lambda, x) = \int_0^{\lambda} i\,d\lambda$ (area left of the λ–i curve); **co-energy** $W_f^{\prime}(i, x) = \int_0^{i} \lambda\,di$ (area below). Together: $W_f + W_f^{\prime} = \lambda i$.',
        detail: 'For linear systems ($\lambda = L(x)i$): $W_f = W_f^{\prime} = \frac{1}{2}L(x)i^2$ — the areas coincide, and torque follows either way. Non-linear (saturated) systems: the two areas differ, and co-energy is the convenient one because current is the controllable variable in real machines.'
      },
      {
        term: 'Torque from co-energy',
        kind: 'law',
        statement: 'The electromagnetic torque of a singly-excited system is $T_e = \left.\frac{\partial W_f^{\prime}(i, \theta)}{\partial \theta}\right|_{i \text{ const}}$; for the linear case with position-dependent inductance, $T_e = \frac{1}{2}i^2\frac{dL}{d\theta}$.',
        detail: 'The force version for translation: $F_e = \frac{1}{2}i^2\frac{dL}{dx}$. Sign reading: if inductance rises with position, torque pulls that way — reluctance torque, the working principle of switched-reluctance and sy-f/reluctance motors. With constant current, torque exists ONLY if $L$ varies with position.'
      },
      {
        term: 'Doubly-excited preview',
        kind: 'insight',
        statement: 'With two windings (stator + rotor), co-energy adds a mutual term: $T_e = \frac{1}{2}i_1^2\frac{dL_1}{d\theta} + \frac{1}{2}i_2^2\frac{dL_2}{d\theta} + i_1i_2\frac{dM}{d\theta}$ — the mutual-inuctance product is the dominant term in synchronous and DC machines.',
        detail: 'The $i_1 i_2$ cross term is why machines excite both sides: field and armature currents multiply into torque. This is the formula to cite when a 10-mark derivation asks for "torque in a doubly-excited system" — state assumptions (linear, no saturation), then present the three terms.'
      },
      {
        term: 'Why machines avoid deep saturation',
        kind: 'insight',
        statement: 'Deep in saturation, incremental inductance collapses and $\frac{dL}{d\theta}$-type torque terms shrink — the machine converts less energy per ampere and runs hotter; designers therefore operate near the knee of the B–H curve.',
        detail: 'Linear analysis (constant L) is also only valid below saturation, which is why assessment derivations always state "neglect saturation" as assumption #1. The energy–co-energy picture makes the cost of saturation visible: the co-energy area grows sub-linearly with current once the λ–i curve bends over.'
      }
    ],
    examples: [
      {
        title: 'Reluctance-type actuator force',
        problem: 'A singly-excited translational actuator has inductance $L(x) = \frac{0.05}{1 + 2x}$ H (x in metres) and carries a constant 10 A. Find the force at $x = 0$.',
        steps: [
          { label: 'Step 1', text: 'Force for constant current: $F_e = \frac{1}{2}i^2\frac{dL}{dx}$.' },
          { label: 'Step 2', text: 'Differentiate: $\frac{dL}{dx} = -\frac{0.05 \times 2}{(1+2x)^2} = -\frac{0.1}{(1+2x)^2}$ H/m.' },
          { label: 'Step 3', text: 'At $x = 0$: $\frac{dL}{dx} = -0.1$ H/m, so $F_e = \frac{1}{2}(100)(-0.1) = -5$ N.' },
          { label: 'Step 4', text: 'Negative sign: force acts to decrease $x$ — toward larger inductance, the classic reluctance pull-in.' }
        ],
        result: '$F_e = -5$ N (pulls toward increasing L).'
      },
      {
        title: 'Torque of a rotating singly-excited system',
        problem: 'The inductance of a rotatable coil varies as $L(\theta) = 0.02 + 0.01\cos 2\theta$ H. With 5 A constant, find the torque at $\theta = 45^\circ$ and state its direction.',
        steps: [
          { label: 'Step 1', text: 'Torque: $T_e = \frac{1}{2}i^2\frac{dL}{d\theta}$.' },
          { label: 'Step 2', text: '$\frac{dL}{d\theta} = -0.02\sin 2\theta$ H/rad.' },
          { label: 'Step 3', text: 'At $45^\circ$: $\sin 90^\circ = 1$, so $\frac{dL}{d\theta} = -0.02$; $T_e = \frac{1}{2}(25)(-0.02) = -0.25$ N·m.' },
          { label: 'Step 4', text: 'The rotor is pulled toward $\theta = 0$ or $180^\circ$ (the L maxima) — two stable detents per revolution, exactly the physics of a stepper motor’s detent torque.' }
        ],
        result: '$T_e = -0.25$ N·m toward the nearest inductance maximum.'
      }
    ],
    keyTakeaways: [
      'Energy balance: $dW_e = dW_f + dW_m$ after losses; conversion requires flux change.',
      '$W_f = \int i\,d\lambda$, $W_f^{\prime} = \int \lambda\,di$; linear case: both $\frac{1}{2}Li^2$.',
      'Torque from co-energy at constant current: $T_e = \frac{1}{2}i^2 \frac{dL}{d\theta}$; force analogue for translation.',
      'Doubly-excited torque is dominated by the $i_1 i_2 \frac{dM}{d\theta}$ mutual term.'
    ],
    quiz: [
      {
        q: 'For a linear magnetic system, energy and co-energy are',
        options: ['equal', 'reciprocals', 'complementary to $\lambda i$', 'both zero'],
        answer: 0,
        explanation: 'Step 1: Linear means $\lambda = Li$, a straight line through the origin. Step 2: The area left of the line (energy) equals the area below it (co-energy). Step 3: Each is $\frac{1}{2}\lambda i = \frac{1}{2}Li^2$. Step 4: Their sum is $\lambda i$ in every case — equality is the linear special case.'
      },
      {
        q: 'A singly-excited system with inductance independent of rotor position produces (at constant current)',
        options: ['maximum torque', 'zero torque', 'negative torque', 'oscillating torque'],
        answer: 1,
        explanation: 'Step 1: Torque $= \frac{1}{2}i^2\frac{dL}{d\theta}$. Step 2: Position-independent L makes the derivative zero. Step 3: No torque — conversion needs geometry-dependent inductance. Step 4: This is why machines shape their air-gaps and saliency.'
      },
      {
        q: 'Co-energy is the preferred energy function in machine analysis because',
        options: ['it is always larger', 'current is the controllable variable in practice', 'it has no units', 'voltage sources dominate machines'],
        answer: 1,
        explanation: 'Step 1: Real machines are driven by controlled currents (converters regulate current). Step 2: Co-energy is a natural function of $i$ and position. Step 3: Differentiating at constant current is then physically meaningful. Step 4: Energy (a $\lambda$-function) differentiates at constant flux — less convenient.'
      },
      {
        q: 'In a doubly-excited machine, the dominant torque term usually involves',
        options: ['$i_1^2$ alone', '$i_2^2$ alone', 'the product $i_1 i_2 \frac{dM}{d\theta}$', 'the sum of the self-inductances'],
        answer: 2,
        explanation: 'Step 1: Write co-energy with the mutual term: $\frac{1}{2}L_1i_1^2 + \frac{1}{2}L_2i_2^2 + Mi_1i_2$. Step 2: In rotating machines, $M(\theta)$ varies strongly with rotor angle. Step 3: The mutual product therefore dominates $\partial W^{\prime}/\partial\theta$. Step 4: Self terms matter mainly in reluctance machines.'
      }
    ]
  },
  // ---------------------------------------------------------------- EE: ps1 19.1
  {
    sectionId: 'ee-e-ps1-s1',
    readingTime: 9,
    prerequisites: [
      'Per-unit basics and three-phase power (basic electrical)',
      'Transmission-line intuition from field theory',
    ],
    intro: 'A power system is a continent-scale circuit, and like any circuit it needs a schematic language. The **single-line diagram** is that language, condensing three phases into one symbol line. This section assembles the vocabulary — supply schemes, voltage levels, and the economics of conductor choice via **Kelvin’s law** — that every later transmission analysis presumes.',
    objectives: [
      'Read and draw single-line diagrams with standard symbols for lines, transformers, breakers and buses',
      'Compare DC two-wire, AC single-phase and three-phase three-/four-wire supply systems',
      'Choose transmission voltage levels from standardisation practice (11/33/66/132/220/400/765 kV in India)',
      'Apply Kelvin’s law to find the most economical conductor cross-section and explain its limitations',
    ],
    concepts: [
      {
        term: 'Single-line diagram',
        kind: 'notation',
        statement: 'A **single-line diagram** (SLD) represents all three phases with one line and one set of symbols — generator circles, transformer double-circles, breaker squares, bus bars — balanced operation assumed.',
        detail: 'The SLD is the power engineer’s map: it drops per-phase symmetry for clarity but must retain every switching element, earthing point and rating that matters for operation. Per-phase (per-unit) analysis then solves the entire balanced system from this one-line sketch — the reason three-phase economics and notation dominate the chapter set.'
      },
      {
        term: 'Supply system families',
        kind: 'definition',
        statement: 'DC systems: two-wire (with/without earthed midpoint), three-wire. AC systems: single-phase two-wire, single-phase three-wire (midpoint), three-phase three-wire (delta), three-phase four-wire (star, neutral return).',
        detail: 'Three-phase four-wire star is the universal distribution choice: two voltage levels (400 V line / 230 V phase in India), unbalanced loads ride the neutral, and motors get a rotating field. DC transmission survives at the highest bulk levels (HVDC) because of line-cost and stability advantages — covered in the final-year HVDC elective.'
      },
      {
        term: 'Voltage-level economics',
        kind: 'law',
        statement: 'For a fixed power over a fixed distance, higher transmission voltage cuts current, hence $I^2R$ loss and conductor area; standard Indian levels climb 11 → 33 → 66 → 132 → 220 → 400 → 765 kV, roughly a factor near 3 per step.',
        detail: 'Loss $\propto \frac{P^2}{V^2}R$: doubling voltage quarters loss for the same conductor. The counter-pressure: insulation cost, transformer cost and clearance requirements climb with voltage, so each corridor picks its level from the economics of the specific power–distance product — plus interconnection standardisation.'
      },
      {
        term: 'Kelvin’s law',
        kind: 'law',
        statement: 'The most economical conductor cross-section minimises annual capital-plus-energy cost: $C = aA + \frac{b}{A}$ (annual investment $\propto$ area $A$; annual energy-loss cost $\propto 1/A$); optimum at $A = \sqrt{b/a}$, where the two components are equal.',
        detail: 'Differentiate: $\frac{dC}{dA} = a - \frac{b}{A^2} = 0$. Limitations assessment-tested: it ignores interest/depreciation refinements, load growth, voltage regulation, corona and mechanical strength — so practical design picks the nearest standard conductor ABOVE the Kelvin area. State the law, derive the optimum, then list at least three limitations for full marks.'
      },
      {
        term: 'Choice of frequency and its system consequences',
        kind: 'insight',
        statement: 'India standardised 50 Hz, the US 60 Hz: frequency trades lighting flicker and machine size (higher = smaller iron) against line reactance and transmission reach (lower = longer lines).',
        detail: 'Same power at higher frequency needs fewer turns/smaller core but raises $X = 2\pi fL$ and voltage-drop penalties on long lines — one reason geographically vast systems historically leaned low. The choice is fixed nationally; the engineer’s freedom is voltage level and conductor economics, not frequency.'
      }
    ],
    examples: [
      {
        title: 'Kelvin’s law optimum',
        problem: 'The annual cost of a line is $C = 8000A + \frac{2 \times 10^7}{A}$ (rupees, $A$ in mm²). Find the most economical cross-section and the cost split there.',
        steps: [
          { label: 'Step 1', text: 'Kelvin form: investment term $8000A$, loss term $\frac{2\times10^7}{A}$.' },
          { label: 'Step 2', text: 'Optimum: $8000 = \frac{2 \times 10^7}{A^2}$, so $A^2 = 2500$ mm⁴.' },
          { label: 'Step 3', text: '$A = 50$ mm².' },
          { label: 'Step 4', text: 'Cost split: investment $= 8000 \times 50 = 4 \times 10^5$; loss $= \frac{2\times10^7}{50} = 4 \times 10^5$ — equal, as Kelvin’s law predicts. Total $= 8 \times 10^5$ rupees/year.' }
        ],
        result: 'Most economical area: 50 mm², with equal annual investment and loss costs.'
      },
      {
        title: 'Voltage upgrade loss saving',
        problem: 'A 33 kV line transmits 10 MW with 8% loss. If the same power is transmitted at 132 kV on the same conductors, estimate the new percentage loss.',
        steps: [
          { label: 'Step 1', text: 'Loss $\propto I^2$ at fixed resistance, and $I \propto \frac{P}{\sqrt{3}V\cos\phi}$.' },
          { label: 'Step 2', text: 'Voltage ratio $= \frac{132}{33} = 4$, so the current falls to $\frac{1}{4}$.' },
          { label: 'Step 3', text: 'Loss scales by $(1/4)^2 = 1/16$: new loss $= \frac{8\%}{16} = 0.5\%$.' },
          { label: 'Step 4', text: 'The 7.5-point saving is the economic engine behind voltage upgrades — offset by new transformers and insulation.' }
        ],
        result: 'New loss $\approx 0.5\%$ — one sixteenth of the original.'
      }
    ],
    keyTakeaways: [
      'SLD: one line for three phases, balanced assumption, all switching elements retained.',
      'Three-phase four-wire star is the distribution standard (dual voltage, neutral return).',
      'Loss $\propto P^2/V^2$ drives the 11→765 kV voltage ladder.',
      'Kelvin’s optimum equalises annual investment and loss costs; real designs round up to standard conductors.'
    ],
    quiz: [
      {
        q: 'At the Kelvin’s-law optimum cross-section, the annual investment cost and the annual cost of energy lost are',
        options: ['inversely proportional', 'equal', 'in the ratio 2:1', 'both minimised independently'],
        answer: 1,
        explanation: 'Step 1: Total $C = aA + b/A$. Step 2: Setting $dC/dA = 0$ gives $aA = b/A$. Step 3: The two components are therefore equal at the optimum. Step 4: This equality is the quick way assessment numericals hide the answer.'
      },
      {
        q: 'Doubling the transmission voltage at constant power and power factor changes the line current by a factor of',
        options: ['2', '\frac{1}{2}', '4', '\frac{1}{4}'],
        answer: 1,
        explanation: 'Step 1: $P = \sqrt{3}VI\cos\phi$. Step 2: At fixed $P$ and $\cos\phi$, $I \propto 1/V$. Step 3: Doubling V halves I. Step 4: The loss then falls by four — the quarter comes from squaring the current ratio.'
      },
      {
        q: 'A three-phase four-wire system provides',
        options: ['one voltage level only', 'two voltage levels (line and phase)', 'DC distribution', 'no neutral'],
        answer: 1,
        explanation: 'Step 1: Star connection exposes line-to-line and line-to-neutral voltages. Step 2: In India: 400 V line, 230 V phase — $\sqrt{3}$ apart. Step 3: Single-phase loads hang phase-to-neutral; three-phase loads use all lines. Step 4: The delta system, three-wire, offers only line voltage.'
      },
      {
        q: 'Which factor does Kelvin’s law NOT account for?',
        options: ['conductor investment cost', 'energy-loss cost', 'voltage regulation limits', 'cross-sectional area choice'],
        answer: 2,
        explanation: 'Step 1: Kelvin’s law is a pure annual-cost balance in area A. Step 2: Regulation (voltage drop), corona, mechanical strength and load growth are outside it. Step 3: Practical design therefore rounds up from the Kelvin area. Step 4: Listing these limitations is part of the standard answer.'
      }
    ]
  },
  // ---------------------------------------------------------------- EE: power-electronics 21.1
  {
    sectionId: 'ee-e-power-electronics-s1',
    readingTime: 10,
    prerequisites: [
      'PN-junction diode behaviour (basic electronics)',
      'Circuit theorems for load-line analysis',
    ],
    intro: 'Power electronics begins with devices that act as fast switches handling hundreds of amperes and thousands of volts. The **SCR** — a diode with a gate and a latch — anchors the family, flanked by TRIACs, GTOs, power MOSFETs and IGBTs. Ratings, protection and safe operating areas are the assessment’s hunting ground, along with the physics that separates a 5 A signal SCR from a 2000 A HVDC valve.',
    objectives: [
      'Explain SCR construction, latching and the $v$–$i$ characteristic regions including breakover',
      'Compare device families: SCR, TRIAC, GTO, power MOSFET, IGBT — and where each dominates',
      'Read and apply device ratings: VBO, ITSM, dv/dt, di/dt, and thermal resistance',
      'Design over-voltage (snubber), over-current (fusing) and gate-protection circuits',
    ],
    concepts: [
      {
        term: 'The SCR and its latch',
        kind: 'definition',
        statement: 'A **silicon-controlled rectifier** is a four-layer PNPN device with three junctions and a gate terminal: it blocks forward voltage until breakover or a gate pulse turns it on, and then **latches** — conduction continues after the gate signal is removed until the current falls below the holding level.',
        detail: 'The two-transistor analogy explains the latch: the intercoupled NPN/PNP pair feeds itself once loop gain exceeds unity, gate current merely triggers it. Turn-OFF therefore requires forced commutation in DC circuits (auxiliary capacitors/SCRs) — the classic assessment derivation — while AC circuits commutate naturally at current zero. TRIAC = two SCRs back-to-back sharing one gate, the dimmer-switch device.'
      },
      {
        term: 'Device families and their territories',
        kind: 'insight',
        statement: '**SCR**: highest power, slow-ish, line-frequency rectifiers and HVDC. **GTO/IGCT**: gate-turn-off SCRs for high-power drives. **Power MOSFET**: fastest, low-voltage (<~600 V) SMPS and automotive. **IGBT**: the workhorse 600 V–6.5 kV, 100 kHz workhorse of motor drives.',
        detail: 'MOSFET conduction loss rises with voltage rating ($R_{DS(on)}$); IGBT has a near-constant saturation voltage — the crossover sits near 600–100 V. Choice logic for a 10-mark design question: switching frequency, voltage class, and loss budget decide the family in that order.'
      },
      {
        term: 'Ratings and the SOA',
        kind: 'notation',
        statement: 'Key ratings: repetitive peak voltage $V_{DRM}/V_{RRM}$, breakover $V_{BO}$, average/rms current $I_{T(AV)}/I_{T(RMS)}$, surge $I_{TSM}$ (one-cycle), $di/dt$ limit (hot-spot formation) and $dv/dt$ limit (spurious turn-on through internal capacitance); the **safe operating area** bounds simultaneous voltage-current during switching.',
        detail: 'Exceeding $dv/dt$ turns the SCR on WITHOUT a gate pulse — cured by an RC snubber across the device. Exceeding $di/dt$ during turn-on melts local junction area before conduction spreads — cured by inductance in series or gate-pulse shaping. Thermal design: $T_j = T_a + P(R_{\theta JC} + R_{\theta CS} + R_{\theta SA})$ decides the heatsink, and assessment numericals usually ask exactly this.'
      },
      {
        term: 'Protection toolkit',
        kind: 'method',
        statement: 'Over-voltage: RC snubbers and voltage clamps (MOV). Over-current: fast semiconductor fuses rated to clear within $I^2t$ of the device. Gate: series resistance and anti-noise filtering; $dv/dt$ filtering; series-parallel device matching with sharing resistors/reactors.',
        detail: 'Series strings (for high voltage) share static voltage via equal resistors and dynamic voltage via RCD balancing networks; parallel devices (for high current) share via small series inductors/resistors and matched characteristics. The derating factor (use 80–90% of rated capability) is standard assessment arithmetic: $N$ devices in series rated for $(1-\text{derating})NV$ total.'
      },
      {
        term: 'Switching losses and frequency ceilings',
        kind: 'insight',
        statement: 'Each transition dissipates $\int vi\,dt$; total switching loss $\propto$ frequency — which is why slow families (SCR, GTO) stop at a few kHz while MOSFETs/IGBTs reach hundreds of kHz, and why soft-switching (resonant) converters exist.',
        detail: 'Conduction loss $\propto$ duty; switching loss $\propto f_{sw}$. The frequency ceiling is where the two sum to the thermal budget — a 5-mark justification question. Resonant/zero-voltage switching moves the $vi$ overlap off the device, buying frequency at the cost of control simplicity.'
      }
    ],
    examples: [
      {
        title: 'Heatsink sizing from thermal resistance',
        problem: 'An IGBT dissipates 60 W with $R_{\theta JC} = 0.5$ °C/W and case-to-sink $R_{\theta CS} = 0.3$ °C/W. Junction limit 150 °C, ambient 50 °C. Find the maximum allowable sink-to-air resistance.',
        steps: [
          { label: 'Step 1', text: 'Junction rise budget: $150 - 50 = 100$ °C.' },
          { label: 'Step 2', text: 'Total resistance budget: $\frac{100}{60} = 1.667$ °C/W.' },
          { label: 'Step 3', text: 'Subtract known layers: $1.667 - 0.5 - 0.3 = 0.867$ °C/W for the heatsink.' },
          { label: 'Step 4', text: 'Any sink with $R_{\theta SA} \leq 0.87$ °C/W (with derating margin, choose ~0.7) keeps the junction legal.' }
        ],
        result: 'Heatsink $R_{\theta SA} \leq 0.87$ °C/W.'
      },
      {
        title: 'Series-string derating',
        problem: 'Four SCRs, each rated 1200 V, operate in series with a 10% derating factor. What is the maximum string voltage?',
        steps: [
          { label: 'Step 1', text: 'Nominal string: $4 \times 1200 = 4800$ V.' },
          { label: 'Step 2', text: 'Derate by 10%: usable $= 4800 \times 0.9 = 4320$ V.' },
          { label: 'Step 3', text: 'The margin absorbs unequal sharing during transients despite the equalising network.' },
          { label: 'Step 4', text: 'String design answer: 4.32 kV maximum.' }
        ],
        result: 'Maximum string voltage $= 4320$ V with 10% derating.'
      }
    ],
    keyTakeaways: [
      'SCR latches once on; DC circuits need forced commutation, AC commutates naturally at current zero.',
      'Family map: MOSFET (fast, low-V), IGBT (mid, dominant in drives), GTO/IGCT and SCR (highest power).',
      '$dv/dt$ false-triggers (snubber cures); $di/dt$ destroys (inductance cures); thermal chain decides the heatsink.',
      'Series/parallel strings derate 10–20% and need sharing networks.'
    ],
    quiz: [
      {
        q: 'An SCR can be turned OFF by',
        options: ['removing the gate signal', 'reducing anode current below the holding current', 'reversing the gate voltage', 'raising the anode voltage'],
        answer: 1,
        explanation: 'Step 1: Once latched, the gate loses control. Step 2: The regenerative pair sustains until loop current collapses. Step 3: Dropping anode current below $I_H$ breaks regeneration — natural at AC zero-crossings, forced in DC. Step 4: Reverse gate drive cannot extract the latched charge.'
      },
      {
        q: 'The device best suited for a 5 kW, 100 kHz power supply at 400 V DC bus is',
        options: ['SCR', 'TRIAC', 'power MOSFET', 'GTO'],
        answer: 2,
        explanation: 'Step 1: 100 kHz demands very fast switching. Step 2: SCRs/GTOs are line-frequency-class devices. Step 3: MOSFETs excel below ~600 V at high frequency; IGBTs take over above that and below ~20 kHz. Step 4: At 400 V and 100 kHz, the power MOSFET is the textbook choice.'
      },
      {
        q: 'Excessive $dv/dt$ across an SCR causes',
        options: ['gate burnout', 'spurious turn-on without gate pulse', 'permanent short immediately', 'thermal runaway at steady state'],
        answer: 1,
        explanation: 'Step 1: Internal junction capacitance passes displacement current under fast voltage ramps. Step 2: That current plays the role of a gate trigger. Step 3: The device turns on spuriously — cured by an RC snubber slowing the ramp. Step 4: It is a control failure, not an immediate physical burnout.'
      },
      {
        q: 'In a heatsink calculation, the case-to-sink resistance is 0.2 °C/W with 80 W dissipation. The temperature step across that interface is',
        options: ['16 °C', '4 °C', '0.2 °C', '400 °C'],
        answer: 0,
        explanation: 'Step 1: $\Delta T = P \times R_{\theta}$. Step 2: $80 \times 0.2 = 16$ °C. Step 3: Thermal grease exists to shrink exactly this layer’s resistance. Step 4: Each interface in the chain contributes its own $P R_{\theta}$ step to the budget.'
      }
    ]
  },
  // ---------------------------------------------------------------- ME: thermo 9.1
  {
    sectionId: 'me-e-thermo-s1',
    readingTime: 10,
    prerequisites: [
      'First and second laws of thermodynamics',
      'Partial derivatives of multivariable functions',
    ],
    intro: 'When a property can’t be measured directly, thermodynamics derives it. The **thermodynamic relations** — Maxwell’s four equations and their relatives — connect measurable quantities ($P, v, T, c_p, c_v$) to the abstract ones ($H, G, A, S$ changes). Availability then asks the engineer’s question: of the energy in a system, how much is actually extractable as work?',
    objectives: [
      'Define Helmholtz ($A = U - TS$) and Gibbs ($G = H - TS$) functions and their natural variables',
      'Derive and apply the four Maxwell relations from exact differentials',
      'Use the Clapeyron equation and Joule–Thomson coefficient for phase and throttling analysis',
      'Compute availability, irreversibility and second-law efficiency for processes',
    ],
    concepts: [
      {
        term: 'The four potentials',
        kind: 'definition',
        statement: 'Beyond internal energy, thermodynamics defines **enthalpy** $H = U + PV$, **Helmholtz** $A = U - TS$ (constant-$T,V$ work potential) and **Gibbs** $G = H - TS$ (constant-$T,P$ work potential); each is a Legendre transform swapping a variable for its conjugate.',
        detail: 'Natural-variable pairs: $U(S,V)$, $H(S,P)$, $A(T,V)$, $G(T,P)$. Gibbs governs chemical and phase equilibrium because real reactions run at fixed $T, P$ — minimisation of $G$ IS the equilibrium condition. Assessment favourite: state the four differentials ($dH = TdS + VdP$, etc.) before any Maxwell derivation.'
      },
      {
        term: 'Maxwell relations',
        kind: 'theorem',
        statement: 'Because each potential is a state function, its mixed second derivatives are equal, yielding: $\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V$, $\left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P$, $\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V$, $\left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P$.',
        detail: 'The last two are the workhorses: they replace unmeasurable entropy changes with $PVT$ data. Example deployment: $ds$ in terms of $dT$ and $dP$ becomes $ds = \frac{c_p}{T}dT - \left(\frac{\partial v}{\partial T}\right)_P dP$ — the formula behind every entropy-change numerical for gases, liquids and solids alike.'
      },
      {
        term: 'Clapeyron and Joule–Thomson',
        kind: 'law',
        statement: '**Clapeyron**: along a phase line, $\frac{dP}{dT} = \frac{h_{fg}}{T v_{fg}}$ — exact for any phase change. **Joule–Thomson coefficient**: $\mu_{JT} = \left(\frac{\partial T}{\partial P}\right)_H = \frac{1}{c_p}\left(T\left(\frac{\partial v}{\partial T}\right)_P - v\right)$ — the throttling temperature slope.',
        detail: 'Ideal gas: $\mu_{JT} = 0$ (throttling is isothermal). Real gases: positive below the inversion temperature — they cool on throttling — the entire basis of the Linde liquefaction cycle. Clapeyron numericals: steam-table $h_{fg}$, $v_{fg}$ at 100 °C predict the 1 °C-per-3.6-kPa slope near atmospheric pressure.'
      },
      {
        term: 'Availability (exergy)',
        kind: 'definition',
        statement: 'The **availability** of a closed system in environment $(P_0, T_0)$ is the maximum useful work extractable: $\phi = (u - u_0) + P_0(v - v_0) - T_0(s - s_0)$; for steady flow, $\psi = (h - h_0) - T_0(s - s_0) + \frac{V^2}{2} + gz$.',
        detail: 'Key readings: dead state (equilibrium with environment) has zero availability — energy without gradient is worthless for work. Availability is destroyed by irreversibility: $I = T_0 S_{gen}$ (Gouy–Stodola theorem), the single most quotable result of second-law analysis.'
      },
      {
        term: 'Second-law efficiency',
        kind: 'method',
        statement: 'The **second-law efficiency** $\eta_{II} = \frac{\text{useful exergy output}}{\text{exergy input}}$ complements the first-law efficiency by charging the analysis for destroyed work potential, not just energy.',
        detail: 'A heater can be 100% first-law efficient while being exergy-catastrophic (high-grade electricity burned for low-grade warmth). Assessment pattern: compute $W_{\text{rev}}$ from availability balance, compare with actual $W$, then $\eta_{II} = W_{actual}/W_{rev}$ and $I = W_{rev} - W_{actual} = T_0 S_{gen}$.'
      }
    ],
    examples: [
      {
        title: 'Entropy change from PVT data',
        problem: 'An ideal gas is compressed isothermally from 1 bar to 5 bar at 300 K. Find the entropy change per kmol (R = 8.314 kJ/kmol·K).',
        steps: [
          { label: 'Step 1', text: 'Use the Maxwell-derived form: $ds = \frac{c_p}{T}dT - \left(\frac{\partial v}{\partial T}\right)_P dP$.' },
          { label: 'Step 2', text: 'Isothermal: $dT = 0$. Ideal gas: $\left(\frac{\partial v}{\partial T}\right)_P = \frac{R}{P}$.' },
          { label: 'Step 3', text: '$\Delta s = -R\ln\frac{P_2}{P_1} = -8.314 \ln 5 = -13.38$ kJ/kmol·K.' },
          { label: 'Step 4', text: 'Negative: compression at constant T expels entropy — heat must leave to hold temperature.' }
        ],
        result: '$\Delta s = -13.38$ kJ/kmol·K.'
      },
      {
        title: 'Irreversibility of a throttling valve',
        problem: 'Steam throttles adiabatically from 10 bar, 300 °C to 1 bar at 5 kg/s. Environment 25 °C. Steam tables give $h_1 \approx 3052$ kJ/kg, $s_1 \approx 7.12$ kJ/kg·K; after throttling $h_2 = h_1$, $s_2 \approx 7.90$ kJ/kg·K. Find the rate of exergy destruction.',
        steps: [
          { label: 'Step 1', text: 'Throttling: $h$ constant, so $T$ drops but entropy rises — the irreversibility marker.' },
          { label: 'Step 2', text: 'Entropy generation rate: $\dot S_{gen} = \dot m(s_2 - s_1) = 5 \times (7.90 - 7.12) = 3.9$ kW/K.' },
          { label: 'Step 3', text: 'Gouy–Stodola: $\dot I = T_0 \dot S_{gen} = 298 \times 3.9 \approx 1162$ kW.' },
          { label: 'Step 4', text: 'Over a kilowatt of work potential is annihilated every second — why process plants recover throttling with turbines whenever feasible.' }
        ],
        result: 'Exergy destruction $\dot I \approx 1.16$ MW.'
      }
    ],
    keyTakeaways: [
      'Four potentials, four natural-variable pairs; Gibbs rules phase/chemical equilibrium.',
      'Maxwell relations convert entropy changes into measurable PVT derivatives.',
      'Clapeyron maps phase lines exactly; $\mu_{JT}$ positive = throttle-cooling (Linde).',
      'Availability is maximum useful work; $I = T_0 S_{gen}$ prices every irreversibility.'
    ],
    quiz: [
      {
        q: 'The Gibbs function is defined as',
        options: ['$U + PV$', '$U - TS$', '$H - TS$', '$H + TS$'],
        answer: 2,
        explanation: 'Step 1: Legendre transform of enthalpy swapping $S$ for its conjugate $T$. Step 2: $G = H - TS = U + PV - TS$. Step 3: Helmholtz is $A = U - TS$ — the constant-volume sibling. Step 4: Natural variables of $G$ are $(T, P)$.'
      },
      {
        q: 'The Joule–Thomson coefficient of an ideal gas is',
        options: ['positive', 'negative', 'zero', 'infinite'],
        answer: 2,
        explanation: 'Step 1: $\mu_{JT} = \frac{1}{c_p}(T(\partial v/\partial T)_P - v)$. Step 2: Ideal gas: $v = RT/P$, so $T \cdot \frac{R}{P} = v$. Step 3: The bracket vanishes: $\mu_{JT} = 0$. Step 4: Throttling an ideal gas changes nothing — cooling needs real-gas behaviour.'
      },
      {
        q: 'Irreversibility (exergy destruction) equals',
        options: ['$T S_{system}$', '$T_0 S_{gen}$', '$P_0 \Delta V$', '$\Delta G$'],
        answer: 1,
        explanation: 'Step 1: Gouy–Stodola theorem. Step 2: $I = T_0 \times$ (total entropy generated). Step 3: Only GENERATED entropy (system + surroundings) destroys work potential. Step 4: Environmental temperature $T_0$ sets the exchange rate.'
      },
      {
        q: 'At the dead state, a system’s availability is',
        options: ['maximum', 'zero', 'equal to its internal energy', 'negative'],
        answer: 1,
        explanation: 'Step 1: Dead state = full equilibrium with the environment. Step 2: No gradient remains to drive any process. Step 3: Maximum useful work relative to the environment is therefore zero. Step 4: Energy may remain — but exergy is spent.'
      }
    ]
  },
  // ---------------------------------------------------------------- ME: som 11.1
  {
    sectionId: 'me-e-strength-s1',
    readingTime: 10,
    prerequisites: [
      'Normal and shear stress definitions',
      'Trigonometry for plane transformations',
    ],
    intro: 'A single load creates a whole hidden family of stresses — pull a bar and somewhere inside it there are shear stresses too. **Stress transformation** and the **Mohr circle** make the hidden family visible: one graphical construction converts any known stress state into the stresses on ANY plane, and hands over the principal stresses and maximum shear that actually decide failure.',
    objectives: [
      'Transform plane stresses with the equations for $\sigma_n$ and $\tau$ on an inclined plane',
      'Construct and interpret the Mohr circle: centre, radius, principal points, $\tau_{max}$',
      'Relate elastic constants: $E$, $G$, $K$, $\mu$ and the coupling equations',
      'Distinguish ductile (shear-driven) from brittle (normal-stress-driven) failure candidates',
    ],
    concepts: [
      {
        term: 'Plane stress transformation',
        kind: 'law',
        statement: 'For a state $(\sigma_x, \sigma_y, \tau_{xy})$, stresses on a plane rotated by $\theta$ are $\sigma_\theta = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2}\cos 2\theta + \tau_{xy}\sin 2\theta$ and $\tau_\theta = -\frac{\sigma_x - \sigma_y}{2}\sin 2\theta + \tau_{xy}\cos 2\theta$.',
        detail: 'Uniaxial pull ($\sigma_x = \sigma$, rest zero): the 45° plane carries $\sigma/2$ normal and $\sigma/2$ shear — which is exactly why ductile specimens neck on 45° shear lips. Every transformation formula is just this rotation machinery with different inputs.'
      },
      {
        term: 'Principal stresses',
        kind: 'definition',
        statement: 'The **principal stresses** are the extreme normal stresses (shear zero): $\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$, acting on planes at $\tan 2\theta_p = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}$.',
        detail: 'Maximum in-plane shear is the radius: $\tau_{max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2} = \frac{\sigma_1 - \sigma_2}{2}$, at 45° from the principal planes. For 3D, absolute max shear is $\frac{\sigma_{max} - \sigma_{min}}{2}$ over ALL three principals — the assessment’s favourite trap when $\sigma_2 = 0$ quietly participates.'
      },
      {
        term: 'Mohr circle',
        kind: 'method',
        statement: 'Plot $(\sigma, \tau)$ points; the circle has centre $\left(\frac{\sigma_x + \sigma_y}{2}, 0\right)$ and radius $\tau_{max}$; rotations on the circle are DOUBLE physical rotations, shear plotted downward-positive by convention.',
        detail: 'Construction drill for assessments: plot $X(\sigma_x, \tau_{xy})$ and $Y(\sigma_y, -\tau_{xy})$, join XY — the diameter; read $\sigma_{1,2}$ off the $\sigma$-axis intersections; the top point gives $(\sigma_{avg}, \tau_{max})$. The pole (origin-of-planes) method then reads stresses on ANY plane with a single straight line — faster than the formulas once drawn.'
      },
      {
        term: 'Elastic constants quartet',
        kind: 'law',
        statement: '$E$ (Young’s), $G$ (shear), $K$ (bulk) and $\mu$ (Poisson’s) are linked: $E = 2G(1 + \mu)$, $E = 3K(1 - 2\mu)$, hence $\frac{9}{E} = \frac{1}{G} + \frac{3}{K}$ — only two are independent.',
        detail: 'Bounds: $0 \leq \mu \leq 0.5$; $\mu = 0.5$ → incompressible (rubber; K → ∞); typical metals $\mu \approx 0.3$, so $G \approx 0.385E$ and $K \approx 1.67E$. Two constants given → all four computable — a guaranteed numerical in every paper, usually disguised as "find $K$ given $E$ and $G$".'
      },
      {
        term: 'Failure’s two accents',
        kind: 'insight',
        statement: 'Ductile materials yield when shear peaks (use $\tau_{max}$); brittle materials crack when tensile normal stress peaks (use $\sigma_1$) — so the SAME stress state demands different design checks for different materials.',
        detail: 'Torsion of chalk (brittle) breaks it on 45° helices (principal tension), while mild steel twists flat — pure shear $\tau$ hides a principal pair $\pm\tau$ at 45°, visible instantly on Mohr’s circle. Theories of failure (Rankine, Tresca, von Mises) formalise this in later sections; the intuition starts here.'
      }
    ],
    examples: [
      {
        title: 'Principal stresses from a combined state',
        problem: 'At a point, $\sigma_x = 80$ MPa (tension), $\sigma_y = 20$ MPa (tension), $\tau_{xy} = 30$ MPa. Find the principal stresses and maximum in-plane shear.',
        steps: [
          { label: 'Step 1', text: 'Centre: $\frac{\sigma_x + \sigma_y}{2} = \frac{80 + 20}{2} = 50$ MPa.' },
          { label: 'Step 2', text: 'Radius: $\sqrt{\left(\frac{80-20}{2}\right)^2 + 30^2} = \sqrt{30^2 + 30^2} = \sqrt{1800} \approx 42.4$ MPa.' },
          { label: 'Step 3', text: 'Principals: $\sigma_1 = 50 + 42.4 = 92.4$ MPa, $\sigma_2 = 50 - 42.4 = 7.6$ MPa.' },
          { label: 'Step 4', text: '$\tau_{max} = 42.4$ MPa at 45° to the principal planes; check 3D: with $\sigma_3 = 0$, the absolute max shear is $\frac{92.4 - 0}{2} = 46.2$ MPa — the plane-stress trap.' }
        ],
        result: '$\sigma_1 = 92.4$ MPa, $\sigma_2 = 7.6$ MPa, in-plane $\tau_{max} = 42.4$ MPa (absolute 46.2 MPa).'
      },
      {
        title: 'Elastic constant completion',
        problem: 'A steel has $E = 200$ GPa and $G = 80$ GPa. Determine Poisson’s ratio and the bulk modulus.',
        steps: [
          { label: 'Step 1', text: 'From $E = 2G(1 + \mu)$: $1 + \mu = \frac{200}{160} = 1.25$, so $\mu = 0.25$.' },
          { label: 'Step 2', text: 'From $E = 3K(1 - 2\mu)$: $1 - 2\mu = 0.5$.' },
          { label: 'Step 3', text: '$K = \frac{200}{3 \times 0.5} = 133.3$ GPa.' },
          { label: 'Step 4', text: 'Cross-check with $\frac{9}{E} = \frac{1}{G} + \frac{3}{K}$: $\frac{9}{200} = 0.045$; $\frac{1}{80} + \frac{3}{133.3} = 0.0125 + 0.0225 = 0.045$ ✓.' }
        ],
        result: '$\mu = 0.25$, $K = 133.3$ GPa.'
      }
    ],
    keyTakeaways: [
      'Rotation formulas: normal stress averages plus a cosine term; shear is a sine-cosine mix.',
      'Principal stresses: centre $\pm$ radius; $\tau_{max}$ = radius = half the principal gap.',
      'Mohr circle doubles angles; 3D absolute max shear may exceed the in-plane value.',
      'Only two of $E, G, K, \mu$ are independent — complete the quartet, then verify with $9/E = 1/G + 3/K$.'
    ],
    quiz: [
      {
        q: 'In uniaxial tension $\sigma$, the maximum shear stress and its plane are',
        options: ['$\sigma$ at 0°', '$\sigma/2$ at 45°', '$\sigma/2$ at 90°', '$\sigma\sqrt{2}$ at 60°'],
        answer: 1,
        explanation: 'Step 1: State: $(\sigma, 0, 0)$ — circle centred at $\sigma/2$ with radius $\sigma/2$. Step 2: Top of circle: shear $= \sigma/2$. Step 3: Shear peaks at half the angle between $\sigma$-axis points: 45° physically. Step 4: This 45° shear is why ductile bars form shear-lip fractures.'
      },
      {
        q: 'For $\mu = 0.5$, the bulk modulus $K$ becomes',
        options: ['zero', '$E/3$', 'infinite', 'negative'],
        answer: 2,
        explanation: 'Step 1: $K = \frac{E}{3(1 - 2\mu)}$. Step 2: $1 - 2(0.5) = 0$. Step 3: Division by zero → $K \to \infty$: incompressible. Step 4: Rubber approaches this ideal — it shears easily but resists volume change.'
      },
      {
        q: 'On a Mohr circle, a physical 15° plane rotation corresponds to rotating on the circle by',
        options: ['15°', '30°', '45°', '7.5°'],
        answer: 1,
        explanation: 'Step 1: The transformation equations contain $2\theta$. Step 2: Circle angle = twice the physical angle. Step 3: $2 \times 15 = 30$ ° on the circle. Step 4: Forgetting the doubling is the most common Mohr-circle error.'
      },
      {
        q: 'Pure shear $\tau$ on the element corresponds to principal stresses',
        options: ['$\tau$ and $\tau$', '$\tau$ and $-\tau$ at 45°', 'zero everywhere', '$2\tau$ and 0'],
        answer: 1,
        explanation: 'Step 1: State: $(0, 0, \tau)$ — centre at origin, radius $\tau$. Step 2: σ-axis intersections: $+\tau$ and $-\tau$. Step 3: Principal planes sit 45° from the shear faces. Step 4: Brittle shafts in torsion crack along these 45° principal-tension helices.'
      }
    ]
  },
  // ---------------------------------------------------------------- ME: fluids 10.1
  {
    sectionId: 'me-e-fluids-s1',
    readingTime: 10,
    prerequisites: [
      'Newton’s law applied to fluids (shear = viscosity × rate)',
      'Hydrostatic pressure variation $dp = \rho g dh$',
    ],
    intro: 'Before fluids move, they press. **Fluid statics** weighs columns of liquid, reads manometers, computes hydrostatic forces on gates, and exposes the invisible engines of capillarity and surface tension. Every university paper opens Fluid Mechanics with a manometer numerical and a curved-surface force — both are routine once pressure is treated as the scalar field it is.',
    objectives: [
      'Classify fluids by rheology: Newtonian, pseudoplastic, dilatant, Bingham',
      'Solve manometer problems by the pressure-step method (up = $-\rho g h$)',
      'Compute hydrostatic force and centre of pressure on plane and curved surfaces',
      'Apply surface tension relations: capillary rise $h = \frac{4\sigma\cos\theta}{\rho g d}$, droplet/bubble pressure excess',
    ],
    concepts: [
      {
        term: 'Rheological classes',
        kind: 'definition',
        statement: 'A **Newtonian fluid** obeys $\tau = \mu\frac{du}{dy}$ with constant $\mu$ (water, air, thin oils); **pseudoplastic** (shear-thinning: blood, ketchup) and **dilatant** (shear-thickening: starch suspension) have $\mu$ falling/rising with shear; **Bingham plastics** (toothpaste, slurry) need a yield stress before flowing.',
        detail: 'The $\tau$–$du/dy$ plot identifies the family instantly: straight line through origin = Newtonian; through a $\tau_0$ intercept = Bingham; concave = pseudoplastic; convex = dilatant. Ideal fluids ($\mu = 0$) and solids (infinite $\mu$) bracket the picture — a standard 2-mark identification item.'
      },
      {
        term: 'Manometer bookkeeping',
        kind: 'method',
        statement: 'Walk the manometer from one end to the other: moving DOWN a column of density $\rho$ adds $\rho g h$; moving UP subtracts; equate the total to the known end pressures.',
        detail: 'Differential manometers measure $\Delta P = (\rho_{man} - \rho_f)g h$ for a single gauge fluid; micromanometers magnify resolution with two fluids and inclined limbs. Assessment discipline: tabulate each step ($z$ change, fluid, $\rho g \Delta h$ contribution) and the algebra cannot go wrong.'
      },
      {
        term: 'Forces on surfaces',
        kind: 'law',
        statement: 'Hydrostatic force on a plane area: $F = \rho g \bar h A$ acting through the **centre of pressure** below the centroid: $h_{cp} = \bar h + \frac{I_G \sin^2\theta}{A \bar h}$; for curved surfaces, resolve into horizontal ($F_H$ = force on vertical projection) and vertical ($F_V$ = weight of fluid above, real or imaginary) components.',
        detail: 'Centre of pressure sits BELOW the centroid because pressure grows with depth. For the classic vertical rectangular gate ($b$ wide, top at surface, depth $d$): $F = \frac{1}{2}\rho g b d^2$ at $\frac{2d}{3}$ down. Curved-dam questions: $F_H$ from the projection formula, $F_V$ from the fluid volume above the curve, resultant direction from their ratio — then a moment balance about a hinge completes the 10-mark set.'
      },
      {
        term: 'Buoyancy and stability',
        kind: 'law',
        statement: 'Archimedes: buoyant force = weight of displaced fluid, acting through the centre of buoyancy; floating equilibrium requires B = W; stability depends on the metacentre lying above the centre of gravity.',
        detail: 'Metacentric height $GM = \frac{I}{V} - BG$ ($I$ = waterplane second moment, $V$ displaced volume): $GM > 0$ stable, with roll period $T = 2\pi\sqrt{\frac{k^2}{g \cdot GM}}$ — the standard ship-stability numerical. Submerged bodies compare B and G directly (B above G = stable).'
      },
      {
        term: 'Surface tension and capillarity',
        kind: 'definition',
        statement: 'Pressure excess: droplet $\Delta p = \frac{2\sigma}{r}$, soap bubble $\frac{4\sigma}{r}$ (two surfaces); capillary rise in a tube of diameter $d$: $h = \frac{4\sigma\cos\theta}{\rho g d}$ — mercury ($\theta > 90^\circ$) depresses.',
        detail: 'Water in clean glass: $\theta \approx 0$, so with $\sigma = 0.073$ N/m a 1 mm tube lifts ~30 mm — why small tubes need correction. Jet breakup, droplet formation and welded-joint integrity all trace to $\sigma$; assessment favourites pair the bubble formula with a soap-film numerical or ask which meniscus shape matches which contact angle.'
      }
    ],
    examples: [
      {
        title: 'Differential manometer',
        problem: 'A U-tube mercury manometer ($\rho_m = 13600$) connects two water pipes ($\rho_w = 1000$) at the same elevation; the mercury difference is 200 mm with the higher mercury level on side A. Find $P_A - P_B$.',
        steps: [
          { label: 'Step 1', text: 'Start at A, walk to B: down $h_m = 0.2$ m through mercury (+), across the bottom, up $0.2$ m through mercury (−), then the water legs cancel since pipes are level.' },
          { label: 'Step 2', text: 'Net mercury column contribution: $(\rho_m - \rho_w) g h$ acting from A to B when referenced through water.' },
          { label: 'Step 3', text: '$\Delta P = (13600 - 1000) \times 9.81 \times 0.2 = 24719$ Pa $\approx 24.7$ kPa.' },
          { label: 'Step 4', text: 'Sign check: mercury pushed toward B means A is the higher pressure — consistent with the positive $\Delta P$.' }
        ],
        result: '$P_A - P_B \approx 24.7$ kPa.'
      },
      {
        title: 'Capillary rise calculation',
        problem: 'A 2 mm clean glass tube is dipped in water ($\sigma = 0.0728$ N/m, $\rho = 1000$ kg/m³, $\theta \approx 0^\circ$). Find the capillary rise.',
        steps: [
          { label: 'Step 1', text: 'Formula: $h = \frac{4\sigma\cos\theta}{\rho g d}$ with $\cos 0^\circ = 1$.' },
          { label: 'Step 2', text: 'Numerator: $4 \times 0.0728 = 0.2912$ N/m.' },
          { label: 'Step 3', text: 'Denominator: $1000 \times 9.81 \times 0.002 = 19.62$ N/m³.' },
          { label: 'Step 4', text: '$h = \frac{0.2912}{19.62} \approx 0.0148$ m $\approx 14.8$ mm rise.' }
        ],
        result: 'Capillary rise $\approx 14.8$ mm.'
      }
    ],
    keyTakeaways: [
      'Newtonian = straight $\tau$–rate line through origin; Bingham adds a yield intercept.',
      'Manometers: walk end to end, $\pm\rho g h$ per step; differential reading uses $\rho_{man} - \rho_f$.',
      'Plane force $= \rho g \bar h A$ through a centre of pressure below the centroid; curved surfaces split into $F_H$ and $F_V$.',
      'Capillary $h = \frac{4\sigma\cos\theta}{\rho g d}$; droplets $\frac{2\sigma}{r}$, bubbles $\frac{4\sigma}{r}$.'
    ],
    quiz: [
      {
        q: 'A shear-thinning fluid is one whose apparent viscosity',
        options: ['is constant', 'decreases with shear rate', 'increases with shear rate', 'is infinite'],
        answer: 1,
        explanation: 'Step 1: Pseudoplastic = shear-thinning. Step 2: Ketchup and blood flow more easily as shear rises. Step 3: Dilatant is the opposite (starch in water). Step 4: Constant $\mu$ defines the Newtonian family.'
      },
      {
        q: 'The centre of pressure of a submerged vertical plane gate lies',
        options: ['above the centroid', 'at the centroid', 'below the centroid', 'at the water surface'],
        answer: 2,
        explanation: 'Step 1: Pressure grows with depth. Step 2: The deeper half of the gate is pushed harder than the upper half. Step 3: The resultant therefore shifts below the geometric centre. Step 4: Offset $= \frac{I_G}{A\bar h}$ (vertical), always downward.'
      },
      {
        q: 'The pressure difference across a soap bubble of radius r is',
        options: ['$\frac{\sigma}{r}$', '$\frac{2\sigma}{r}$', '$\frac{4\sigma}{r}$', '$\frac{8\sigma}{r}$'],
        answer: 2,
        explanation: 'Step 1: A droplet has one surface: $\Delta p = \frac{2\sigma}{r}$. Step 2: A soap bubble has TWO surfaces (inside + outside films). Step 3: The contributions add: $\frac{4\sigma}{r}$. Step 4: This doubling is the assessor’s favourite bubble-versus-droplet discriminator.'
      },
      {
        q: 'A floating body is in stable equilibrium when the metacentre M is',
        options: ['below G', 'at G', 'above G', 'irrelevant'],
        answer: 2,
        explanation: 'Step 1: Tilt the body: buoyancy shifts, creating a righting couple. Step 2: The couple restores only if B’s line of action passes above G. Step 3: The intersection point of that line with the axis is the metacentre M — restoring requires M above G ($GM > 0$). Step 4: $GM = \frac{I}{V} - BG$ quantifies the margin.'
      }
    ]
  },
  // ---------------------------------------------------------------- ME: mfg1 16.1
  {
    sectionId: 'me-e-mfg1-s1',
    readingTime: 9,
    prerequisites: [
      'Phase-change intuition (solidification)',
      'Basic heat transfer and fluid flow',
    ],
    intro: 'Casting is metalworking’s oldest trick and still its most versatile: pour liquid into a cavity, wait, break the mould. Between those steps lives an engineering curriculum — pattern allowances that compensate for shrinkage, sand tests that decide mould quality, and gating systems that deliver metal quietly, quickly and without drowning the casting’s details in defects.',
    objectives: [
      'List and justify the standard pattern allowances (shrinkage, machining, draft, distortion, shake)',
      'Explain moulding-sand properties and the tests that measure them (permeability, strength, grain fineness)',
      'Design gating systems: sprue, runners, gates, risers — and their functions',
      'Predict the shrinkage cavity and place risers using Chvorinov’s rule',
    ],
    concepts: [
      {
        term: 'Pattern allowances',
        kind: 'definition',
        statement: 'Patterns are deliberately LARGER than the casting: **shrinkage allowance** compensates volumetric contraction (iron ~1%, steel ~2%, aluminium ~1.3% linear), **machining allowance** adds metal for finishing, **draft** (1–3°) eases withdrawal, **distortion** pre-bends warping shapes, **shake** gives removal clearance.',
        detail: 'Shrinkage happens in three stages — liquid contraction (riser absorbs it), solidification contraction (the cavity-forming culprit), and solid contraction (pattern allowance covers it). Assessment pattern: "why is a pattern bigger?" — answer with the five allowances and one line of purpose each for full marks.'
      },
      {
        term: 'Moulding sand properties',
        kind: 'definition',
        statement: 'Green sand (silica + clay + water + additives) needs: **permeability** (gas escape), **green/dry strength**, **cohesiveness** (bond), **refractoriness** (heat survival), **collapsibility** (shakeout), and flowability (detail reproduction).',
        detail: 'Tests: permeability number (gas through a standard specimen), compression tests for green/dry strength, AFS grain-fineness number (sieve stack, higher = finer finish but poorer permeability), clay and moisture content. The perpetual trade-off: fineness improves surface but chokes gases — the balancing act every sand question probes.'
      },
      {
        term: 'Gating system anatomy',
        kind: 'notation',
        statement: 'The **gating system**: pouring basin (slows and skims) → sprue (often tapered to avoid aspiration) → sprue well (absorbs kinetic energy) → runners (carry metal) → gates (enter the cavity, ideally at the bottom for laminar filling) → risers (feed shrinkage after filling).',
        detail: 'Bottom gating fills quiescently (less turbulence, less dross); top gating fills hotter metal into the top — better feeding direction but more oxidation. Choke (the smallest cross-section) placement controls the flow rate everywhere; designing the choke at the sprue base is the standard assessment numerical via $Q = A_c\sqrt{2gH}$ continuity reasoning.'
      },
      {
        term: 'Chvorinov’s rule and riser sizing',
        kind: 'law',
        statement: 'Solidification time $t = C\left(\frac{V}{A}\right)^2$ — set by the volume-to-surface-area ratio; risers must solidify AFTER the casting, so $\left(\frac{V}{A}\right)_{riser} > \left(\frac{V}{A}\right)_{casting}$.',
        detail: 'Design consequence: spheres/cylinders make efficient risers (high V/A); casting sections are thin (low V/A). Blind risers (exothermic sleeves) hold heat longer; the classic numerical computes the minimum riser diameter for a plate casting — solve the V/A inequality with the shape formulas and round UP. Riser necks freeze deliberately (Chaplet/neck design) so the riser can be cut off cleanly.'
      },
      {
        term: 'Defect lexicon',
        kind: 'insight',
        statement: 'Casting defects map to their causes: **shrinkage cavity** (insufficient feeding), **blowholes** (gas entrapment, wet sand), **cold shuts** (streams meeting without fusing — metal too cold), **misrun** (incomplete fill), **hot tears** (restrained contraction), **sand wash** (mould erosion).',
        detail: 'Diagnosis questions rule the theory paper: given a defect, name the remedy — cavity → bigger/better-placed riser; blowholes → drier sand, better venting; cold shut → hotter pour or redesigned gating. Each defect is a failure of one principle from this section, which is exactly how full-mark answers are structured.'
      }
    ],
    examples: [
      {
        title: 'Riser sizing by Chvorinov',
        problem: 'A plate casting is $200 \times 100 \times 20$ mm. Size a cylindrical riser (H = D) that stays molten at least 25% longer (same mould constant).',
        steps: [
          { label: 'Step 1', text: 'Casting: $V = 200 \times 100 \times 20 = 4 \times 10^5$ mm³; $A = 2(200\times100 + 200\times20 + 100\times20) = 2(20000+4000+2000) = 5.2 \times 10^4$ mm². $V/A \approx 7.69$ mm.' },
          { label: 'Step 2', text: 'Requirement: $\left(\frac{V}{A}\right)_{riser} \geq 1.25 \times 7.69 = 9.6$ mm (time ratio 1.25 needs modulus ratio $\sqrt{1.25}$? Careful: $t \propto (V/A)^2$, so times 1.25 longer needs $V/A$ bigger by $\sqrt{1.25} = 1.118$: $8.6$ mm — but a safety margin to 9.6 is also defensible; use $\geq 8.6$).' },
          { label: 'Step 3', text: 'Cylinder $H = D$: $V = \frac{\pi D^2}{4} \cdot D = \frac{\pi D^3}{4}$; $A = 2\frac{\pi D^2}{4} + \pi D \cdot D = \frac{\pi D^2}{2} + \pi D^2 = \frac{3\pi D^2}{2}$ (ignore the connection face). $\frac{V}{A} = \frac{D}{6}$.' },
          { label: 'Step 4', text: 'Set $\frac{D}{6} \geq 8.6$ mm → $D \geq 51.6$ mm; choose D = H ≈ 55–60 mm riser. Round UP — an undersized riser is worthless.' }
        ],
        result: 'A 60 mm diameter, 60 mm tall cylindrical riser safely outruns the casting.'
      },
      {
        title: 'Sprue taper check',
        problem: 'Metal falls 250 mm down a sprue whose top diameter is 20 mm. Find the stream velocity at the base and explain why sprues taper.',
        steps: [
          { label: 'Step 1', text: 'Torricelli: $v = \sqrt{2gH} = \sqrt{2 \times 9.81 \times 0.25} = 2.21$ m/s.' },
          { label: 'Step 2', text: 'Continuity: $A v$ constant — as $v$ grows downward, area must shrink or the stream breaks free of the walls.' },
          { label: 'Step 3', text: 'A detached stream aspirates air through the gap — gases and dross get sucked into the metal (aspiration effect).' },
          { label: 'Step 4', text: 'Tapering the sprue to follow $A(z) = \frac{Q}{\sqrt{2g(H - z)}}$ keeps the metal wall-hugging: area at base for the same 20 mm top $= A_t\sqrt{\frac{h_t}{h_t + H}}$ pattern — the design rule every assessment quotes.' }
        ],
        result: 'Base velocity 2.21 m/s; tapering prevents air aspiration by matching area to the accelerating stream.'
      }
    ],
    keyTakeaways: [
      'Five pattern allowances; shrinkage allowance covers only the SOLID stage of contraction.',
      'Sand trade-off: fineness (finish) versus permeability (gas escape) — measured by AFS number and permeability tests.',
      'Gating hierarchy: basin → sprue → well → runner → gate, choke controlling flow; risers feed, not fill.',
      'Chvorinov $t = C(V/A)^2$: risers win by modulus; size with the shape formulas and round up.'
    ],
    quiz: [
      {
        q: 'Shrinkage allowance on a pattern compensates for',
        options: ['liquid contraction', 'solidification + solid contraction in linear terms', 'machining cuts', 'shake removal'],
        answer: 1,
        explanation: 'Step 1: Liquid contraction is absorbed by the riser. Step 2: The pattern is oversized for the contraction that happens during and after solidification. Step 3: Machining and shake are separate allowances. Step 4: Steel’s ~2% linear allowance is the assessment’s standard number.'
      },
      {
        q: 'Permeability of moulding sand primarily controls',
        options: ['surface finish', 'escape of mould gases', 'hot strength', 'flowability'],
        answer: 1,
        explanation: 'Step 1: Pouring generates steam and gases. Step 2: They must vent through the sand. Step 3: Low permeability traps them as blowholes. Step 4: Finish tracks grain fineness instead.'
      },
      {
        q: 'By Chvorinov’s rule, doubling the V/A ratio of a casting multiplies its solidification time by',
        options: ['2', '4', '8', '$\sqrt{2}$'],
        answer: 1,
        explanation: 'Step 1: $t = C(V/A)^2$. Step 2: Time scales with the SQUARE of the modulus. Step 3: Doubling V/A quadruples t. Step 4: This quadratic is why thin sections freeze fast and why risers are fat.'
      },
      {
        q: 'A cold shut defect indicates',
        options: ['insufficient risering', 'two metal streams meeting without fusing', 'sand erosion', 'gas entrapment'],
        answer: 1,
        explanation: 'Step 1: Cold shut = a seam where fronts met cold. Step 2: The metal lost too much heat in transit. Step 3: Remedies: hotter pour, shorter gating, larger choke. Step 4: Cavity/blowhole/wash map to the other three causes.'
      }
    ]
  },
]
