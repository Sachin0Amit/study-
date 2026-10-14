import type { FormulaEntry } from './formulas'

// ============================================================================
// Formula sheet — exam-theory expansion books: Engineering Mathematics,
// JEE Mathematics Companion, JEE Chemistry, Databases, Computer Networks,
// Compiler Design + Computer Organization, Signals/Control/Communications.
// `section` is the section number where the fact appears. `formula` is a
// compact Unicode fallback; `latex` renders with KaTeX when present.
// ============================================================================

export const EXAM_FORMULAS: FormulaEntry[] = [
  // ================== Backfill: chapters without entries ==================
  { chapterId: 'osc-ch2', section: '2.2', name: 'System-Call Cost Rule', formula: 'mode switch (user→kernel→user) per syscall; batch I/O to amortize', note: 'library calls are cheap, syscalls trap' },
  { chapterId: 'osc-ch13', section: '13.4', name: 'Permission Bits', formula: 'rwx × user/group/other; umask subtracts default grants', note: '777 − umask 022 = 755' },
  { chapterId: 'engmath-ch1', section: '1.4', name: 'Consistency Test', formula: 'rank(A) = rank([A|b]) = n ⇒ unique; < n ⇒ infinite; unequal ⇒ none', note: 'Rouche-Capelli in one line' },
  { chapterId: 'engmath-ch1', section: '1.3', name: 'Adjoint Inverse', formula: 'A⁻¹ = adj(A)/|A|, |A| ≠ 0; |AB| = |A||B|', latex: 'A^{-1} = \\frac{\\mathrm{adj}(A)}{|A|}, \\ |A| \\ne 0', note: 'singular iff determinant zero' },
  { chapterId: 'engmath-ch2', section: '2.1', name: 'Trace-Determinant Check', formula: 'Σλᵢ = tr(A); Πλᵢ = |A|', latex: '\\sum \\lambda_i = \\mathrm{tr}(A); \\quad \\prod \\lambda_i = |A|', note: 'verify every spectrum with both' },
  { chapterId: 'engmath-ch2', section: '2.2', name: 'Cayley-Hamilton', formula: 'every square matrix satisfies its own characteristic equation', note: 'gives A⁻¹ and powers from the polynomial' },
  { chapterId: 'engmath-ch3', section: '3.2', name: 'Linear First-Order Solution', formula: 'y·IF = ∫Q·IF dx + C, IF = e^∫P dx', latex: 'y \\cdot e^{\\int P\\,dx} = \\int Q\\,e^{\\int P\\,dx} dx + C', note: 'Bernoulli via v = y^(1−n)' },
  { chapterId: 'engmath-ch4', section: '4.1', name: 'Auxiliary Roots Table', formula: 'real distinct → C₁e+C₂e; repeated → (C₁+C₂x)e; α±iβ → e^αx(C₁cos+C₂sin)', note: 'resonance: multiply trial by x' },
  { chapterId: 'engmath-ch5', section: '5.3', name: 'Separation Ansatz', formula: 'u(x,t) = X(x)T(t) turns PDE into two ODEs joined by −λ', note: 'boundary conditions quantize λ' },
  { chapterId: 'engmath-ch6', section: '6.4', name: 'Stokes & Gauss', formula: '∮F·dr = ∬(∇×F)·n dS; ∯F·n dS = ∭(∇·F) dV', latex: '\\oint_C \\mathbf{F}\\cdot d\\mathbf{r} = \\iint_S (\\nabla\\times\\mathbf{F})\\cdot\\mathbf{n}\\,dS; \\quad \\oiint_S \\mathbf{F}\\cdot\\mathbf{n}\\,dS = \\iiint_V (\\nabla\\cdot\\mathbf{F})\\,dV', note: 'evaluate the cheaper side' },
  { chapterId: 'engmath-ch7', section: '7.2', name: 'Cauchy-Riemann', formula: 'u_x = v_y and u_y = −v_x ⇔ analytic', latex: 'u_x = v_y, \\quad u_y = -v_x', note: 'analytic ⇒ harmonic components' },
  { chapterId: 'engmath-ch8', section: '8.3', name: 'Residue Theorem', formula: '∮f = 2πi × (sum of enclosed residues)', latex: '\\oint_C f(z)\\,dz = 2\\pi i \\sum \\mathrm{Res}', note: 'simple pole: lim (z−z₀)f' },
  { chapterId: 'engmath-ch9', section: '9.4', name: 'Transfer From ODE', formula: 'zero-initial-conditions ODE → H(s) = Y(s)/X(s) by algebra', note: 'poles of H = natural frequencies' },
  { chapterId: 'engmath-ch10', section: '10.4', name: 'Sampling Criterion', formula: 'fs > 2·fmax or aliasing folds spectra', latex: 'f_s > 2 f_{\\max}', note: 'undersampling maps f to |f − nfs|' },

  // ================== JEE Mathematics Companion ==================
  { chapterId: 'jeemaths-ch1', section: '1.2', name: 'De Moivre Rotation', formula: '(cosθ + i sinθ)ⁿ = cos nθ + i sin nθ; ×e^{iθ} rotates by θ', note: 'roots of unity = regular polygons' },
  { chapterId: 'jeemaths-ch1', section: '1.3', name: 'Omega Algebra', formula: '1 + ω + ω² = 0; ω³ = 1, ω ≠ 1', note: 'kill all symmetric sums with this' },
  { chapterId: 'jeemaths-ch2', section: '2.4', name: 'Common-Root Condition', formula: 'shared root ⇒ resultant zero; equal ratios of coefficients', note: 'subtract the equations first' },
  { chapterId: 'jeemaths-ch3', section: '3.1', name: 'Determinant Factor Trick', formula: 'Rᵢ → Rᵢ − Rⱼ exposes (a−b) factors; triangular = product of diagonal', note: 'never expand a factorable determinant' },
  { chapterId: 'jeemaths-ch4', section: '4.2', name: 'General Term', formula: 'T_{r+1} = C(n,r)·x^{n−r}·y^r', latex: 'T_{r+1} = \\binom{n}{r} x^{n-r} y^{r}', note: 'independent term: exponent of x = 0' },
  { chapterId: 'jeemaths-ch5', section: '5.2', name: 'AM ≥ GM ≥ HM', formula: 'equality iff all numbers equal; use for max/min under fixed sum/product', latex: '\\frac{a+b}{2} \\ge \\sqrt{ab} \\ge \\frac{2}{1/a+1/b}', note: 'HP via reciprocals' },
  { chapterId: 'jeemaths-ch6', section: '6.3', name: 'Principal Branches', formula: 'sin⁻¹[−π/2,π/2], cos⁻¹[0,π], tan⁻¹(−π/2,π/2)', note: 'outside branch ⇒ convert first' },
  { chapterId: 'jeemaths-ch7', section: '7.4', name: 'Circle Tangent Toolkit', formula: 'T = 0 tangent; T² = SS₁ pair; C₁−C₂ = 0 radical axis', note: 'director circle: x²+y² = 2r²' },
  { chapterId: 'jeemaths-ch8', section: '8.1', name: 'Parabola Focal Facts', formula: 'y² = 4ax: focus (a,0), latus rectum 4a, param (at²,2at)', note: 'focal chord: t₁t₂ = −1' },
  { chapterId: 'jeemaths-ch9', section: '9.2', name: 'Skew-Line Distance', formula: 'd = |(a₂−a₁)·(b₁×b₂)| / |b₁×b₂|', latex: 'd = \\frac{|(\\mathbf{a}_2-\\mathbf{a}_1)\\cdot(\\mathbf{b}_1\\times\\mathbf{b}_2)|}{|\\mathbf{b}_1\\times\\mathbf{b}_2|}', note: 'parallel lines: drop one cross' },
  { chapterId: 'jeemaths-ch10', section: '10.3', name: 'Bayes Partition', formula: 'P(Fᵢ|E) = P(E|Fᵢ)P(Fᵢ) / ΣⱼP(E|Fⱼ)P(Fⱼ)', latex: 'P(F_i\\mid E) = \\frac{P(E\\mid F_i)P(F_i)}{\\sum_j P(E\\mid F_j)P(F_j)}', note: 'denominator = total probability' },
  { chapterId: 'jeemaths-ch10', section: '10.4', name: 'Binomial Moments', formula: 'mean = np, variance = npq', note: 'most-likely k near (n+1)p' },

  // ================== JEE Chemistry ==================
  { chapterId: 'chem-ch1', section: '1.3', name: 'Molarity–Molality Link', formula: 'm = 1000·M / (1000·d − M·M_solute)', note: 'density bridges the two' },
  { chapterId: 'chem-ch2', section: '2.1', name: 'Rydberg Transition', formula: '1/λ = RZ²(1/n₁² − 1/n₂²)', latex: '\\frac{1}{\\lambda} = RZ^2\\left(\\frac{1}{n_1^2}-\\frac{1}{n_2^2}\\right)', note: 'Lyman n₁=1, Balmer n₁=2' },
  { chapterId: 'chem-ch2', section: '2.3', name: 'Node Counts', formula: 'radial = n−l−1; angular = l; total = n−1', note: 's has 0 angular nodes' },
  { chapterId: 'chem-ch4', section: '4.4', name: 'Spontaneity Crossover', formula: 'ΔG = ΔH − TΔS; T_eq = ΔH/ΔS', latex: '\\Delta G = \\Delta H - T\\Delta S', note: 'sign table by ΔH/ΔS signs' },
  { chapterId: 'chem-ch5', section: '5.3', name: 'Henderson-Hasselbalch', formula: 'pH = pKa + log([salt]/[acid])', latex: '\\mathrm{pH} = \\mathrm{p}K_a + \\log\\frac{[\\text{salt}]}{[\\text{acid}]}', note: 'max buffer at 1:1' },
  { chapterId: 'chem-ch5', section: '5.4', name: 'Solubility From Ksp', formula: 'A_mB_n: Ksp = m^m·n^n·s^{m+n}', latex: 'K_{sp} = m^m n^n s^{m+n}', note: 'compare Qsp vs Ksp, not s directly' },
  { chapterId: 'chem-ch6', section: '6.2', name: 'Nernst at 25°C', formula: 'E = E° − (0.0591/n)·log Q', latex: 'E = E^\\circ - \\frac{0.0591}{n}\\log Q', note: 'ΔG° = −nFE° = −RT ln K' },
  { chapterId: 'chem-ch7', section: '7.1', name: 'First-Order Half-Life', formula: 't½ = 0.693/k; k = (2.303/t)·log(a/(a−x))', latex: 't_{1/2} = \\frac{0.693}{k}', note: 'first order: t½ independent of a' },
  { chapterId: 'chem-ch8', section: '8.4', name: 'SN1/SN2/E1/E2 Tree', formula: '3°/polar-protic → SN1/E1; 1°/strong Nu → SN2; bulky base + heat → E2', note: 'HBr+peroxide flips to anti-Markovnikov' },
  { chapterId: 'chem-ch11', section: '11.4', name: 'MOT Bond Order', formula: 'BO = (Nb − Na)/2; magnetism from unpaired e⁻', latex: 'BO = \\frac{N_b - N_a}{2}', note: 'B₂/C₂ need s-p mixing order' },
  { chapterId: 'chem-ch12', section: '12.3', name: 'Spin-Only Moment', formula: 'μ = √(n(n+2)) BM', latex: '\\mu = \\sqrt{n(n+2)}\\ \\mathrm{BM}', note: 'weak field ⇒ max n' },
  { chapterId: 'chem-ch14', section: '14.4', name: 'Group Separation Logic', formula: 'HCl → Group I (Ag⁺,Pb²⁺,Hg₂²⁺); H₂S/acidic → Group II; then III, IV, V in order', note: 'never skip the group reagent' },

  // ================== Databases ==================
  { chapterId: 'dbms-ch3', section: '3.2', name: 'Division = For-All', formula: 'R ÷ S answers ∀ queries; in SQL use NOT EXISTS…EXCEPT', note: 'suppliers of ALL parts pattern' },
  { chapterId: 'dbms-ch4', section: '4.3', name: 'NOT IN Null Trap', formula: 'NOT IN with a NULL in the list returns no rows — use NOT EXISTS', note: 'three-valued logic strikes' },
  { chapterId: 'dbms-ch5', section: '5.1', name: 'Closure Finds Keys', formula: 'X⁺ via FDs; X is a superkey iff X⁺ = all attributes', note: 'Armstrong: reflexive/augment/transitive' },
  { chapterId: 'dbms-ch5', section: '5.3', name: 'BCNF Test', formula: 'every determinant must be a superkey; else split on the violator', note: 'BCNF can lose dependencies' },
  { chapterId: 'dbms-ch6', section: '6.3', name: 'Precedence-Graph Test', formula: 'edge Tᵢ→Tⱼ on conflicting ops; acyclic ⇔ conflict-serializable', note: 'blind writes separate view notch' },
  { chapterId: 'dbms-ch7', section: '7.1', name: 'Strict 2PL Guarantee', formula: 'strict 2PL ⇒ serializable + strict (no cascading aborts)', note: 'deadlock is the price' },
  { chapterId: 'dbms-ch7', section: '7.2', name: 'Wait-Die vs Wound-Wait', formula: 'older-first: wait-die waits, wound-wait preempts; both deadlock-free', note: 'timestamps decide, not arrival' },
  { chapterId: 'dbms-ch8', section: '8.3', name: 'B+ Height Bound', formula: 'height ≈ log_fanout(N); fanout = block-size / entry-size', note: '3–4 levels for billions of rows' },

  // ================== Computer Networks ==================
  { chapterId: 'cn-ch1', section: '1.4', name: 'End-to-End Delay', formula: 'total = hops × (L/R) + distance/v + queueing', note: 'BDP = R × RTT sizes windows' },
  { chapterId: 'cn-ch2', section: '2.3', name: 'CRC Guarantee', formula: 'degree-r generator detects all bursts ≤ r and all odd counts (with x+1 factor)', note: 'append r zeros, divide, send remainder' },
  { chapterId: 'cn-ch3', section: '3.1', name: 'ALOHA Maxima', formula: 'pure: 1/2e ≈ 18%; slotted: 1/e ≈ 37%', latex: 'S_{\\max}^{\\text{pure}} = \\frac{1}{2e}, \\quad S_{\\max}^{\\text{slotted}} = \\frac{1}{e}', note: 'vulnerable period halves when slotted' },
  { chapterId: 'cn-ch4', section: '4.2', name: 'Count-to-Infinity Cap', formula: 'RIP caps metrics at 16 = infinity; split horizon + poison reverse mitigate', note: 'bad news travels slowly' },
  { chapterId: 'cn-ch5', section: '5.3', name: 'Usable Hosts', formula: 'a /n prefix gives 2^(32−n) − 2 usable hosts', latex: '2^{32-n} - 2 \\text{ usable}', note: 'subtract network + broadcast' },
  { chapterId: 'cn-ch6', section: '6.3', name: 'Traceroute Trick', formula: 'TTL = 1,2,3…; each expiry returns ICMP time-exceeded from that hop', note: 'asymmetric paths can confuse it' },
  { chapterId: 'cn-ch7', section: '7.4', name: 'AIMD Sawtooth', formula: 'additive +1 MSS/RTT; multiplicative halve on loss; fair sharing emerges', note: 'slow start is exponential' },
  { chapterId: 'cn-ch8', section: '8.2', name: 'Status Classes', formula: '2xx ok / 3xx redirect / 4xx client fault / 5xx server fault', note: '304 + 206 are the cache/range pair' },

  // ================== Compiler + COA ==================
  { chapterId: 'compcoa-ch2', section: '2.4', name: 'Execution Time', formula: 'T = IC × CPI × Tc; MIPS = clock-rate / (CPI × 10⁶)', note: 'blended CPI weights instruction mix' },
  { chapterId: 'compcoa-ch3', section: '3.1', name: 'Ideal Pipeline Speedup', formula: '→ number of stages for deep instruction streams', note: 'fill/drain + hazards eat the ideal' },
  { chapterId: 'compcoa-ch4', section: '4.3', name: 'AMAT', formula: 'hit-time + miss-rate × miss-penalty, applied per level', note: 'local vs global miss rates' },
  { chapterId: 'compcoa-ch5', section: '5.3', name: 'DMA Wins When', formula: 'block size large enough that setup < saved interrupt overhead', note: 'cycle-stealing hides transfer' },
  { chapterId: 'compcoa-ch6', section: '6.3', name: 'Subset Construction', formula: 'DFA state = ε-closure set; dead state completes the table', note: 'minimize after (partition refinement)' },
  { chapterId: 'compcoa-ch7', section: '7.3', name: 'LL(1) Table Rule', formula: 'M[A,a] = production iff a ∈ FIRST(α) (or FOLLOW(A) when α ⇒* ε)', note: 'two entries = not LL(1)' },
  { chapterId: 'compcoa-ch8', section: '8.3', name: 'LALR vs CLR', formula: 'same cores, merged lookaheads: smaller tables, rarer conflicts than SLR', note: 'YACC/Bison default' },
  { chapterId: 'compcoa-ch10', section: '10.3', name: 'Liveness Equations', formula: 'IN = USE ∪ (OUT − DEF); OUT = ∪ successor INs', latex: '\\mathrm{IN} = \\mathrm{USE} \\cup (\\mathrm{OUT} - \\mathrm{DEF})', note: 'backward pass to fixed point' },

  // ================== Signals/Control/Comms ==================
  { chapterId: 'sigctrl-ch2', section: '2.1', name: 'Convolution Length', formula: 'length-L ∗ length-M spans L+M−1 samples', note: 'flip-shift-multiply-add' },
  { chapterId: 'sigctrl-ch3', section: '3.4', name: 'Nyquist Rate', formula: 'fs > 2·fmax; undersampled f appears at |f − n·fs|', note: 'anti-alias filter first' },
  { chapterId: 'sigctrl-ch4', section: '4.3', name: 'Causal-Stable ROC', formula: 'causal ⇔ ROC outside outermost pole; stable ⇔ ROC includes unit circle', note: 'both ⇔ all poles inside' },
  { chapterId: 'sigctrl-ch5', section: '5.3', name: 'Mason Gain', formula: 'T = Σ Pk·Δk / Δ over forward paths', latex: 'T = \\frac{\\sum_k P_k \\Delta_k}{\\Delta}', note: 'loops not touching path survive in Δk' },
  { chapterId: 'sigctrl-ch6', section: '6.1', name: 'Routh First-Column Test', formula: 'sign changes in column 1 = RHP poles; zero row ⇒ auxiliary equation', note: 'ε-method for zero first element' },
  { chapterId: 'commem-ch2', section: '2.2', name: 'Carson Bandwidth', formula: 'BT ≈ 2(Δf + fm)', latex: 'B_T \\approx 2(\\Delta f + f_m)', note: 'Bessel null 2.405 kills carrier' },
  { chapterId: 'commem-ch3', section: '3.4', name: 'Matched-Filter SNR', formula: 'max SNR = 2E/N₀; BER ordered QAM > PSK > FSK at fixed Eb', note: 'MAP = ML with unequal priors' },
  { chapterId: 'commem-ch4', section: '4.2', name: 'Shannon Capacity', formula: 'C = B·log₂(1 + S/N)', latex: 'C = B\\log_2\\left(1 + \\frac{S}{N}\\right)', note: 'bandwidth–SNR exchange' },
  { chapterId: 'commem-ch4', section: '4.3', name: 'Hamming Rule', formula: '2^r ≥ m + r + 1; parity covers its bit-set; syndrome = error position', note: '+1 overall parity ⇒ SEC-DED' },
  { chapterId: 'commem-ch5', section: '5.4', name: 'Skin Depth', formula: 'δ = √(2/ωμσ); fields die within a few δ', latex: '\\delta = \\sqrt{\\frac{2}{\\omega\\mu\\sigma}}', note: 'good conductor: displacement current negligible' },
  { chapterId: 'commem-ch6', section: '6.2', name: 'Quarter-Wave Match', formula: 'Z₀_line = √(Zs·ZL) for λ/4 transformer', latex: 'Z_{0} = \\sqrt{Z_S Z_L}', note: 'single frequency by construction' },

  // ================== Microelectronics (Sedra/Smith 8e) ==================
  { chapterId: 'elec-ch21', section: '21.1', name: 'Voltage Gain in dB', formula: 'Av_dB = 20·log|Vₒ/Vᵢ|; power gain uses 10·log', note: 'cascaded gains add in dB' },
  { chapterId: 'elec-ch22', section: '22.1', name: 'Golden Rules', formula: 'V₊ = V₋ (virtual short) and I₊ = I₋ = 0 (virtual open)', note: 'derive every ideal stage from these' },
  { chapterId: 'elec-ch23', section: '23.3', name: 'Capacitor-Filter Ripple', formula: 'Vr ≈ I_DC / (2·f·C) for full-wave', latex: 'V_r \\approx \\frac{I_{DC}}{2fC}', note: 'double f for bridge' },
  { chapterId: 'elec-ch24', section: '24.2', name: 'MOS Square Law', formula: 'I_D = ½·μCₒₓ(W/L)·Vov² in saturation; gm = 2I_D/Vov', latex: 'I_D = \\tfrac{1}{2}\\mu C_{ox}\\tfrac{W}{L}V_{ov}^2', note: 'Vov = Vgs − Vth' },
  { chapterId: 'elec-ch25', section: '25.2', name: 'BJT Collector Law', formula: 'I_C = I_S·e^{Vbe/Vt}; gm = I_C/Vt; rπ = β/gm', latex: 'g_m = \\frac{I_C}{V_T}, \\quad r_\\pi = \\frac{\\beta}{g_m}', note: 'Vt ≈ 25 mV at room' },
  { chapterId: 'elec-ch26', section: '26.4', name: 'CE Stage Gain', formula: 'Av = −gm·(RC‖RL); Rin = R₁‖R₂‖rπ', note: 'bypassed emitter or gain collapses' },
  { chapterId: 'elec-ch27', section: '27.1', name: 'Diff-Pair Tail Rule', formula: 'differential gain Adm = −gm·RD/2 per side; CMRR = |Adm/Acm|', note: 'larger tail R ⇒ better CMRR' },
  { chapterId: 'elec-ch28', section: '28.2', name: 'Miller Multiplication', formula: 'C_M = C(1 + |Av|); f_H set by input pole', note: 'inverting gain magnifies feedback C' },
  { chapterId: 'elec-ch29', section: '29.2', name: 'Desensitivity', formula: 'Af = A/(1 + Aβ); gain error ÷ (1 + loop gain)', latex: 'A_f = \\frac{A}{1 + A\\beta}', note: 'bandwidth ×= same factor' },
  { chapterId: 'elec-ch30', section: '30.2', name: 'Class-B Efficiency', formula: 'η_max = π/4 ≈ 78.5%; class-A cap 25%', note: 'crossover needs AB bias' },

  // ================== Core Java ==================
  { chapterId: 'java-ch2', section: '2.4', name: 'Enhanced For', formula: 'for (T x : array) reads all; never writes by index', note: 'need index ⇒ classic loop' },
  { chapterId: 'java-ch4', section: '4.3', name: 'equals/hashCode Contract', formula: 'equal objects ⇒ equal hash codes; override both or neither', note: 'HashMap breaks otherwise' },
  { chapterId: 'java-ch5', section: '5.2', name: 'Effectively Final Capture', formula: 'lambdas capture values, not variables — locals must be (effectively) final', note: 'use array/atomics for counters' },
  { chapterId: 'java-ch6', section: '6.2', name: 'Try-with-Resources', formula: 'try (R r = open()) — closes in reverse order, exceptions suppressed not lost', note: 'resource must implement AutoCloseable' },
  { chapterId: 'java-ch7', section: '7.1', name: 'PECS Rule', formula: 'Producer extends, Consumer super: List<? extends T> reads, List<? super T> writes', note: 'unbounded <?> reads as Object' },
  { chapterId: 'java-ch7', section: '7.3', name: 'Erasure Consequences', formula: 'no new T(), no instanceof T, no static T fields; bridges preserve override', note: 'casts inserted by compiler' },
  { chapterId: 'java-ch8', section: '8.4', name: 'Container Choice', formula: 'random access → ArrayList; FIFO → ArrayDeque; sorted keys → TreeMap', note: 'LinkedList rarely wins' },
  { chapterId: 'java-ch9', section: '9.3', name: 'Safe Publication', formula: 'final, volatile write-read, synchronized block, or concurrent container', note: 'check-then-act always races' },
  { chapterId: 'java-ch10', section: '10.4', name: 'Parallel Stream Rule', formula: 'associative accumulator + splittable source or slower than sequential', note: 'boxing kills the speedup' },
  { chapterId: 'java-ch12', section: '12.2', name: 'Injection Defence', formula: 'never concat values into SQL — always PreparedStatement bind variables', note: 'batch + transaction for bulk' },

  // ================== Kreyszig Numerics/Probability/Stats ==================
  { chapterId: 'engmath-ch11', section: '11.3', name: 'Simpson Error Order', formula: 'trapezoidal O(h²), Simpson O(h⁴); halve h ⇒ error ÷16', note: 'Richardson extrapolates further' },
  { chapterId: 'engmath-ch12', section: '12.3', name: 'Diagonal Dominance', formula: 'strictly dominant rows ⇒ Jacobi and Gauss-Seidel converge', note: 'pivoting fixes zeros, not divergence' },
  { chapterId: 'engmath-ch13', section: '13.1', name: 'RK4 vs Euler', formula: 'Euler O(h), RK4 O(h⁴); stiff decay forces implicit/small steps', note: 'CFL bounds explicit heat stepping' },
  { chapterId: 'engmath-ch14', section: '14.3', name: 'Max-Flow Min-Cut', formula: 'max flow value = min cut capacity; augment until no path', note: 'matching reduces to flow' },
  { chapterId: 'engmath-ch15', section: '15.2', name: 'Memoryless Law', formula: 'exponential: P(T > s+t | T > s) = P(T > t); Poisson counts per interval', note: 'only exponential is memoryless' },
  { chapterId: 'engmath-ch15', section: '15.3', name: 'Empirical Rule', formula: '≈68/95/99.7% within 1/2/3 σ; standardize z = (x−μ)/σ', latex: 'z = \\frac{x-\\mu}{\\sigma}', note: 'CLT justifies the approximation' },

  // ================== Atkins Depth ==================
  { chapterId: 'chem-ch15', section: '15.2', name: 'Particle-in-a-Box Levels', formula: 'Eₙ = n²h²/8mL²; nodes = n−1; never zero energy', latex: 'E_n = \\frac{n^2h^2}{8mL^2}', note: 'confinement raises spacing' },
  { chapterId: 'chem-ch16', section: '16.2', name: 'Hund Ordering', formula: 'max multiplicity lowest; full/half shells extra stable', note: 'term symbols ²S⁺¹L_J' },
  { chapterId: 'chem-ch18', section: '18.3', name: 'n+1 Splitting Rule', formula: 'n equivalent neighbours ⇒ n+1 lines, Pascal ratios', note: 'exchangeable protons vanish in D₂O' },
  { chapterId: 'chem-ch19', section: '19.1', name: 'Boltzmann Ratio', formula: 'Nᵢ/N = e^{−βεᵢ}/q; populations follow temperature', latex: '\\frac{N_i}{N} = \\frac{e^{-\\beta\\epsilon_i}}{q}', note: 'q sums all states' },

  // ================== Clayden Depth ==================
  { chapterId: 'chem-ch21', section: '21.4', name: 'Aldol vs Claisen', formula: 'enolizable aldehyde + base → aldol; ester + alkoxide → Claisen (Dieckmann if cyclic)', note: 'crossed needs one non-enolizable partner' },
  { chapterId: 'chem-ch22', section: '22.3', name: 'Diels-Alder Endo Rule', formula: 'substituents orient under the diene; HOMO(diene)–LUMO(dienophile) gap controls rate', note: 'concerted ⇒ stereospecific' },
  { chapterId: 'chem-ch24', section: '24.4', name: 'DBE First', formula: 'DBE = C − H/2 + N/2 + 1; rings + pi bonds budget', latex: 'DBE = C - \\frac{H}{2} + \\frac{N}{2} + 1', note: 'halogens count as H' },
  { chapterId: 'chem-ch25', section: '25.3', name: 'Disconnection Priority', formula: 'cut at branches, heteroatoms and symmetry; FG interconvert before disconnecting', note: 'two-group disconnections simplify most' },

  // ================== Classics (Hall & Knight + Loney) ==================
  { chapterId: 'jeemaths-ch11', section: '11.3', name: 'Descartes Sign Rule', formula: 'positive real roots ≤ sign changes; shortfall is even', note: 'negative roots via f(−x)' },
  { chapterId: 'jeemaths-ch12', section: '12.2', name: 'Resultant Elimination', formula: 'common root ⇒ determinant of Sylvester matrix zero', note: 'symmetric elimination avoids fractions' },
  { chapterId: 'jeemaths-ch13', section: '13.1', name: 'General Binomial Term', formula: '(1+x)^n = Σ C(n,r)x^r; converges for |x|<1 when n ∉ ℕ', latex: '(1+x)^n = \\sum_r \\binom{n}{r}x^r, \\quad |x|<1', note: 'greatest term by T_{r+1}/T_r ≥ 1' },
  { chapterId: 'jeemaths-ch14', section: '14.4', name: 'General Solution Forms', formula: 'sinθ=k ⇒ θ=nπ+(−1)ⁿα; cosθ=k ⇒ θ=2nπ±α; tanθ=k ⇒ θ=nπ+α', note: 'principal α in range first' },
  { chapterId: 'jeemaths-ch15', section: '15.2', name: 'Sine Rule + Area', formula: 'a/sinA = 2R; Δ = ½ab·sinC = abc/4R = rs', latex: '\\frac{a}{\\sin A} = 2R; \\quad \\Delta = \\frac{abc}{4R} = rs', note: 'ambiguous case: two triangles or none' },
  { chapterId: 'jeemaths-ch16', section: '16.3', name: 'Ratio Test', formula: 'lim|a_{n+1}/a_n| < 1 converges; > 1 diverges; = 1 try Raabe', note: 'factorials/exponentials ⇒ ratio first' },

  // ================== Second Opinions (Mahan/Solomons/Lee-Guha) ==================
  { chapterId: 'chem-ch27', section: '27.2', name: 'Colligative Toolkit', formula: 'ΔTb = i·Kb·m; ΔTf = i·Kf·m; π = iCRT', latex: '\\Delta T_b = iK_b m; \\quad \\pi = iCRT', note: 'i counts dissociated particles' },
  { chapterId: 'chem-ch27', section: '27.4', name: 'Clausius-Clapeyron', formula: 'ln(P₂/P₁) = −ΔHvap/R · (1/T₂ − 1/T₁)', latex: '\\ln\\frac{P_2}{P_1} = -\\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_2}-\\frac{1}{T_1}\\right)', note: 'two points give ΔHvap' },
  { chapterId: 'chem-ch28', section: '28.2', name: 'E2 Anti Requirement', formula: 'leaving group anti-periplanar to β-H; Hofmann: bulky base takes least hindered H', note: 'syn elimination is slow' },
  { chapterId: 'chem-ch29', section: '29.4', name: 'Elucidation Order', formula: 'DBE → HRMS formula → IR triage → NMR assembly → synthesis proof', note: 'symmetry cross-checks everything' },
  { chapterId: 'chem-ch31', section: '31.3', name: 'Oxoacid Strength Ladder', formula: 'more terminal O ⇒ stronger; same O-count ⇒ more electronegative center wins', note: 'HClO₄ > H₂SO₄ > H₃PO₄ pattern' },
  { chapterId: 'chem-ch32', section: '32.3', name: 'Spin-Only Check', formula: 'μ = √(n(n+2)) BM; orbital contribution flags 4d/5d and Co(II)', latex: '\\mu = \\sqrt{n(n+2)}\\ \\mathrm{BM}', note: 'Gouy balance measures it' },

  // ================== Chemistry Completeness Wave ==================
  { chapterId: 'chem-ch33', section: '33.1', name: 'Packing Fractions', formula: 'SC 0.52, BCC 0.68, FCC/HCP 0.74; CN 6, 8, 12', note: 'FCC = cubic closest packing' },
  { chapterId: 'chem-ch33', section: '33.2', name: 'Bragg Law', formula: 'nλ = 2d·sinθ; density = Z·M/(a³·NA)', latex: 'n\\lambda = 2d\\sin\\theta; \\quad \\rho = \\frac{ZM}{a^3N_A}', note: 'order n usually 1' },
  { chapterId: 'chem-ch34', section: '34.1', name: 'H-Bond Checklist', formula: 'H bonded to N/O/F + lone pair nearby; raises BP, viscosity, surface tension', note: 'ice floats on it' },
  { chapterId: 'chem-ch35', section: '35.1', name: 'Decay-Dating Clock', formula: 't = (1/λ)·ln(N₀/N); C-14 t½ = 5730 yr', latex: 't = \\frac{1}{\\lambda}\\ln\\frac{N_0}{N}', note: 'K-Ar for rocks, C-14 for relics' },
  { chapterId: 'chem-ch35', section: '35.3', name: 'Fusion-Fission Energy', formula: 'D-T fusion 17.6 MeV; U-235 fission ≈200 MeV + neutrons', note: 'BE-per-nucleon peak at Fe-56' },
  { chapterId: 'chem-ch36', section: '36.1', name: 'Wittig E/Z Rule', formula: 'un stabilized ylide → Z; stabilized → E (HWE strongly E)', note: 'oxaphosphetane stereochemistry decides' },
  { chapterId: 'chem-ch37', section: '37.3', name: 'Oxoacid Strength Ladder', formula: 'more terminal O ⇒ stronger acid, same for P/S/Cl series', note: 'electronegativity breaks ties' },
  { chapterId: 'chem-ch38', section: '38.4', name: 'Lanthanoid Contraction Effect', formula: '5d ≈ 4d size; Zr/Hf twins in properties', note: 'poor f-shielding causes it' },

  // ================== Chemistry Exam-Coverage Wave ==================
  { chapterId: 'chem-ch39', section: '39.4', name: 'Kjeldahl Limit + Carius', formula: 'Kjeldahl misses nitro/azo/ring-N; Carius: X → AgX gravimetry', note: 'Lassaigne first, quantity second' },
  { chapterId: 'chem-ch40', section: '40.1', name: 'Half-Reaction Balance', formula: 'atoms then O (H₂O) then H (H⁺) then charge (e⁻); basic: neutralize H⁺ with OH⁻', note: 'ion-electron method never fails' },
  { chapterId: 'chem-ch41', section: '41.1', name: 'Eighteen-Electron Count', formula: 'metal valence e⁻ + 2 per ligand = 18; CO/alkene donate 2', note: '16e squares also live' },
  { chapterId: 'chem-ch41', section: '41.2', name: 'Suzuki Coupling Core', formula: 'Ar-X + Ar-B(OH)₂ + base/Pd → Ar-Ar; transmetalation is the slow step', note: 'Heck/Stille/Negishi same cycle family' },
  { chapterId: 'chem-ch42', section: '42.1', name: 'Norrish Split', formula: 'Type I: α-cleavage radicals; Type II: γ-H abstraction then split', note: 'Barton moves remote C-H to C-OH' },
  { chapterId: 'chem-ch43', section: '43.1', name: 'Oxygen Loading Curve', formula: 'sigmoid Hb vs hyperbolic Mb; Bohr shift unloads in tissues', note: '2,3-BPG right-shifts Hb' },
  { chapterId: 'chem-ch43', section: '43.4', name: 'Base-Pair Rules', formula: 'A=T (2 H-bonds), G≡C (3); antiparallel B-helix ~10 bp/turn', note: 'Tm rises with GC content' },
  { chapterId: 'chem-ch44', section: '44.1', name: 'Micelle Cleaning', formula: 'hydrophobic tails in, heads out; CMC threshold; scum with Ca²⁺/Mg²⁺', note: 'LAS detergents resist hard water' },

  // ================== Schaum Workshops ==================
  { chapterId: 'engmath-ch21', section: '21.3', name: 'Triangular Determinant', formula: 'det of triangular = product of diagonal; det(AB) = det(A)det(B)', note: 'never expand factorable forms' },
  { chapterId: 'engmath-ch22', section: '22.3', name: 'Basis Extension', formula: 'any independent set extends to a basis; dim = size of any basis', note: 'coordinates need a basis first' },
  { chapterId: 'engmath-ch23', section: '23.3', name: 'Diagonalizability Call', formula: 'n independent eigenvectors ⇔ diagonalizable; distinct eigenvalues suffice', note: 'defective ⇒ Jordan blocks' },
  { chapterId: 'engmath-ch24', section: '24.3', name: 'Gram-Schmidt Step', formula: 'subtract projections onto prior orthonormal vectors, then normalize', note: 'QR = orthonormal × upper' },

  // ================== Rheinwerk Web Depth ==================
  { chapterId: 'web-ch21', section: '21.2', name: 'Status Classes', formula: '2xx ok / 3xx redirect / 4xx client fault / 5xx server fault', note: '304 + 206 are the cache/range pair' },
  { chapterId: 'web-ch22', section: '22.4', name: 'Realtime Selection', formula: 'polling: rare updates; SSE: one-way live; sockets: bidirectional low-latency', note: 'scale cost rises left to right' },
  { chapterId: 'web-ch23', section: '23.2', name: 'Image Format Matrix', formula: 'photos → JPG/WebP; graphics+transparency → PNG; animation → GIF; icons/logos → SVG', note: 'serve modern with fallbacks' },
  { chapterId: 'web-ch24', section: '24.2', name: 'Monolith vs Services', formula: 'modular monolith first; extract services at team/scale boundaries', note: 'microfrontends split UI the same way' },
  { chapterId: 'web-ch25', section: '25.3', name: 'React Native Rule', formula: 'learn-once-write-anywhere: shared logic, truly native components', note: 'bridge cost for heavy native calls' },
  { chapterId: 'web-ch26', section: '26.3', name: 'Mixin vs Extend', formula: 'mixins parametrize; extend shares selector chains — prefer mixins with args', note: 'media-query manager pattern' },
]
