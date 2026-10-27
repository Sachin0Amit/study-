import type { SectionContent } from '../library'

// ============================================================================
// Composite Materials & Structures + Finite Element Method for Solids —
// Chapters 6–7 of the solids-materials master track (chapters 'som-composites'
// and 'som-fem', 3 sections each).
// Syllabus scope follows standard university composites and FEM electives —
// micromechanics and laminate analysis, failure criteria and joint design,
// then the discretization pipeline from bar elements to the full analyst
// workflow. Technical spine follows the standard literature (Jones,
// "Mechanics of Composite Materials"; Tsai & Hahn, "Introduction to Composite
// Materials"; Barbero, "Introduction to Composite Materials and Design";
// Cook, Malkus & Plesha, "Concepts and Applications of Finite Element
// Analysis"; Zienkiewicz & Taylor, "The Finite Element Method"; Bathe,
// "Finite Element Procedures"). All worked-example numbers (rule-of-mixtures
// moduli, Tsai-Hill indices, element stiffnesses, Gauss-point evaluations,
// Jacobian determinants) were re-verified by hand. Math is LaTeX, rendered
// by KaTeX via the RichText $...$ / $$...$$ pipeline. Product rule: no exam
// names in UI copy. Adjacent coverage respected: the Experimental Stress
// Analysis chapter owns strain-gauge and photoelasticity methods for metals
// (referenced by pointer only); the Computational EM chapter owns the FEM
// weak-form treatment for electromagnetics — this file teaches FEM for solids.
// ============================================================================

export const solidsCompositesFemContent: SectionContent[] = [
  // ------------------------------------------------------------- composites §1
  {
    sectionId: 'som-composites-s1',
    readingTime: 9,
    prerequisites: [
      'Uniaxial stress-strain behavior and elastic modulus (Strength of Materials chapter)',
      'Isotropic versus directional material behavior (Materials Science chapter)',
      'Density-based material selection thinking (Functional Materials chapter)',
    ],
    intro: 'No single material can be simultaneously stiff, strong, light and tough in every direction — steel is stiff but heavy, polymers are light but compliant, ceramics are strong but brittle. A **fiber-reinforced composite** escapes the compromise by letting two materials do the two jobs they are best at: thin, strong fibers carry load along their length, while a surrounding matrix binds them, protects them and passes load between them through shear. The price is that the resulting material is deliberately anisotropic — a ply is a different material in every direction — and its failure modes have no metal counterpart.',
    objectives: [
      'Explain the mechanical roles of fiber and matrix and why neither phase works alone',
      'Apply the longitudinal and transverse rule of mixtures with volume fractions',
      'Quantify the anisotropy of a unidirectional ply and its specific stiffness advantage',
      'Contrast progressive composite failure modes with metal yielding',
    ],
    concepts: [
      {
        term: 'Fiber and matrix roles',
        kind: 'definition',
        statement: 'In a structural composite the **fibers** provide stiffness and strength along their axis (E-glass ~72 GPa, carbon 230–600 GPa, aramid 70–120 GPa, at densities of 1.4–2.6 g/cm³), while the **matrix** (epoxy, polyester or thermoplastic, E ~3–4 GPa) binds the fibers into a shape, protects them from environment and abrasion, transfers load between broken and neighboring fibers through shear, and stabilizes them against compression buckling.',
        detail: 'Every property that loads the matrix directly — transverse tension, in-plane shear, compression strength, hot-wet performance — is matrix-limited. This division of labor explains the design rule that sounds strange to metal people: to improve a composite in the fiber direction, change the fiber; to improve it anywhere else, change the matrix or the interface.',
      },
      {
        term: 'Longitudinal rule of mixtures',
        kind: 'method',
        statement: 'Loaded along the fibers, fiber and matrix share the same strain (isostrain, like springs in parallel), so the ply modulus is the volume-weighted average: $$E_1 = V_f E_f + V_m E_m, \\qquad \\rho = V_f\\rho_f + V_m\\rho_m.$$ Strength follows the same form with fiber strength and a strain-limiting matrix term.',
        detail: 'Practical fiber volume fractions are 0.50–0.65 for hand lay-up through prepreg; the theoretical packing ceiling for round fibers is about 0.78, but above roughly 0.70 there is not enough resin to wet every fiber — voids and dry spots appear and matrix-mediated properties (E2, S, compression) collapse. Exam numericals almost always give Ef, Em, Vf and ask for E1 or the load share VfEf/E1.',
      },
      {
        term: 'Transverse (inverse) rule of mixtures',
        kind: 'method',
        statement: 'Loaded across the fibers, fiber and matrix share the same stress (isostress, springs in series): $$\\frac{1}{E_2} = \\frac{V_f}{E_f} + \\frac{V_m}{E_m},$$ so E2 sits close to the matrix modulus no matter how good the fiber is.',
        detail: 'The two rules are the Voigt (upper) and Reuss (lower) elastic bounds; real measured transverse moduli fall between them, and the Halpin–Tsai semi-empirical equations are the standard interpolation. For quick estimates and exams, the inverse rule is accepted and makes the point: with Em ~3.5 GPa, E2 can never be much better than a plain polymer.',
      },
      {
        term: 'Failure modes alien to metals',
        kind: 'insight',
        statement: 'A unidirectional ply has no yield plateau and no single strength: it fails by **fiber breakage** (longitudinal tension), **matrix cracking** (transverse tension), **fiber-matrix debonding**, **fiber microbuckling or kinking** (compression), or **fiber pull-out** (the toughening mechanism in front of a crack) — and laminates add **delamination** between plies.',
        detail: 'Metal fatigue grows a single crack; composite fatigue shows up as progressive stiffness loss as matrix cracks multiply and coalesce. Fiber strength itself is statistical (Weibull-distributed) because flaws along the fiber scatter the breaking stress — which is precisely why short fibers are weaker than continuous ones and why bundle strength falls below single-fiber strength.',
      },
    ],
    examples: [
      {
        title: 'Carbon/epoxy ply at Vf = 0.60 — the full property card',
        problem: 'A unidirectional carbon/epoxy ply uses fibers with Ef = 230 GPa, ρf = 1.80 g/cm³ in an epoxy with Em = 3.5 GPa, ρm = 1.20 g/cm³, at fiber volume fraction Vf = 0.60. Compute E1, E2, density, specific stiffness versus steel, and the share of longitudinal load carried by the fibers.',
        steps: [
          { label: 'Step 1', text: 'Longitudinal modulus (parallel model): $E_1 = 0.60(230) + 0.40(3.5) = 138 + 1.4 = 139.4$ GPa.' },
          { label: 'Step 2', text: 'Transverse modulus (series model): $1/E_2 = 0.60/230 + 0.40/3.5 = 0.00261 + 0.11429 = 0.11690$, so $E_2 = 8.56$ GPa — an anisotropy ratio $E_1/E_2 \\approx 16$.' },
          { label: 'Step 3', text: 'Density: $\\rho = 0.60(1.80) + 0.40(1.20) = 1.56$ g/cm³. Specific longitudinal stiffness $E_1/\\rho = 139.4/1.56 = 89.4$ versus steel $210/7.85 = 26.8$ — a 3.3× advantage per unit weight.' },
          { label: 'Step 4', text: 'At a common strain the load splits as $V_fE_f : V_mE_m$: the fibers carry $V_fE_f/E_1 = 138/139.4 = 0.99$ — 99% of the longitudinal load from only 60% of the volume (69% of the weight).' },
          { label: 'Step 5', text: 'Read the card the way a designer does: superb along the fibers, polymer-like across them ($E_2 = 8.6$ GPa), so any load that turns a corner needs plies in other directions — the next section.' },
        ],
        result: 'E1 = 139.4 GPa, E2 = 8.6 GPa (16× anisotropy), ρ = 1.56 g/cm³, specific stiffness 3.3× steel, and the fibers carry 99% of the longitudinal load.',
      },
      {
        title: 'Glass/epoxy comparison — how fiber choice moves the numbers',
        problem: 'The same epoxy (Em = 3.5 GPa) is reinforced with E-glass fibers (Ef = 72 GPa) at Vf = 0.55. Compute E1 and E2 and compare the anisotropy with the carbon/epoxy ply.',
        steps: [
          { label: 'Step 1', text: 'Longitudinal: $E_1 = 0.55(72) + 0.45(3.5) = 39.6 + 1.6 = 41.2$ GPa.' },
          { label: 'Step 2', text: 'Transverse: $1/E_2 = 0.55/72 + 0.45/3.5 = 0.00764 + 0.12857 = 0.13621$, so $E_2 = 7.34$ GPa.' },
          { label: 'Step 3', text: 'Anisotropy ratio $E_1/E_2 = 41.2/7.34 = 5.6$ — against 16 for carbon. The ratio is governed by $E_f/E_m$: the closer the fiber is to the matrix in stiffness, the more nearly isotropic the ply behaves.' },
          { label: 'Step 4', text: 'Design read-out: glass laminates are gentler to analyze and cheaper, but deliver a third of the longitudinal stiffness at nearly double the density — the classic cost/performance trade.' },
        ],
        result: 'E1 = 41.2 GPa, E2 = 7.3 GPa: a 5.6:1 anisotropy ply — less directional, less stiff, less expensive than carbon.',
      },
    ],
    keyTakeaways: [
      'Longitudinal: $E_1 = V_fE_f + V_mE_m$ (isostrain); transverse: $1/E_2 = V_f/E_f + V_mE_m$ (isostress) — fiber-dominated versus matrix-dominated.',
      'Vf sits between 0.5 and 0.65 in practice; pushing past ~0.7 starves the matrix and destroys the very properties it governs.',
      'The fibers carry nearly all longitudinal load (99% at Vf = 0.6 carbon/epoxy) — the matrix is a load-transfer and protection system, not a structural partner along the fiber axis.',
      'Composite failure is a family of modes (fiber break, matrix crack, debond, microbuckling, pull-out, delamination) with statistical fiber strength — never a single yield number like a metal.',
    ],
    quiz: [
      {
        q: 'A carbon/epoxy ply has Ef = 230 GPa, Em = 3.5 GPa and Vf = 0.50. Its longitudinal modulus is closest to',
        options: ['113.5 GPa', '116.8 GPa', '145.0 GPa', '230.0 GPa'],
        answer: 1,
        explanation: 'Step 1: Parallel (isostrain) rule: $E_1 = V_fE_f + V_mE_m$. Step 2: $E_1 = 0.50(230) + 0.50(3.5) = 115 + 1.75 = 116.75$ GPa. Step 3: 113.5 would drop the matrix term; 230 ignores dilution by matrix; 145 has no physical basis at Vf = 0.5.',
      },
      {
        q: 'Which ply property is most strongly controlled by the matrix?',
        options: ['Longitudinal tensile modulus', 'Longitudinal tensile strength', 'Transverse modulus E2', 'Fiber density'],
        answer: 2,
        explanation: 'Step 1: Across the fibers the load passes through matrix in series, $1/E_2 = V_f/E_f + V_mE_m$. Step 2: The $V_m/E_m$ term dominates, pinning E2 near the polymer modulus. Step 3: Longitudinal stiffness and strength are fiber-dominated; density is a fixed mixture rule with no weak link.',
      },
      {
        q: 'Fiber volume fraction in a real prepreg laminate cannot be pushed to 0.95 mainly because',
        options: ['the rule of mixtures forbids it mathematically', 'fibers begin to yield', 'there is too little matrix to wet fibers, transfer shear load and stabilize them in compression', 'the density would exceed that of steel'],
        answer: 2,
        explanation: 'Step 1: Above roughly Vf = 0.7, resin is insufficient to fill inter-fiber space. Step 2: Dry spots and voids appear; shear load transfer between fibers breaks down and compression strength (fiber microbuckling) collapses. Step 3: The mixture rules themselves have no such limit — physics of processing and matrix duty does.',
      },
      {
        q: 'In the Vf = 0.60 carbon/epoxy ply (E1 = 139.4 GPa), the fraction of longitudinal tensile load carried by the fibers is',
        options: ['60%', '85%', '99%', '50%'],
        answer: 2,
        explanation: 'Step 1: At equal strain, load shares as $V_fE_f : V_mE_m$. Step 2: Fiber share $= V_fE_f/E_1 = 138/139.4 = 0.99$. Step 3: Volume fraction is not load fraction — stiffness weighting makes the fibers carry 99%.',
      },
    ],
  },

  // ------------------------------------------------------------- composites §2
  {
    sectionId: 'som-composites-s2',
    readingTime: 10,
    prerequisites: [
      'Fiber and matrix mechanics: E1, E2 from the rule of mixtures (previous section)',
      'Plane stress and stress transformation (Strength of Materials chapter)',
      'Comfort with 2×2 and 3×3 matrix algebra — laminate theory is bookkeeping',
    ],
    intro: 'A single unidirectional ply is an excellent material in exactly one direction — and real load paths refuse to stay in one direction. The answer is to stack plies at chosen angles into a **laminate**, a plate whose stiffness is the assembled contribution of every ply. Classical laminate theory (CLT) is the bookkeeping machine that does the assembling: rotate each ply stiffness to the load frame, integrate through the thickness, and out come the ABD matrices that map strains and curvatures to forces and moments.',
    objectives: [
      'State the four in-plane engineering constants of a unidirectional ply and their reciprocity',
      'Transform ply stiffness to an arbitrary fiber angle and explain shear-extension coupling',
      'Describe the extensional, coupling and bending matrices A, B, D of CLT',
      'Distinguish symmetric, balanced, cross-ply and angle-ply stacking and their consequences',
    ],
    concepts: [
      {
        term: 'Ply engineering constants',
        kind: 'notation',
        statement: 'A unidirectional ply in plane stress carries four constants: $E_1, E_2, G_{12}, \\nu_{12}$, linked by reciprocity $\\nu_{21} = \\nu_{12}E_2/E_1$ (or $\\nu_{12}E_2 = \\nu_{21}E_1$, the Maxwell–Betti symmetry of the compliance matrix).',
        detail: 'Typical carbon/epoxy: E1 = 139 GPa, E2 = 8.6 GPa, G12 = 4.8 GPa, ν12 = 0.30 — from which ν21 = 0.3(8.6/139) ≈ 0.018. The reduced stiffness matrix Q built from these four constants is what gets rotated and stacked; everything in CLT is Q bookkeeping.',
      },
      {
        term: 'Off-axis transformation',
        kind: 'method',
        statement: 'Rotating a ply by angle θ to the load frame gives transformed stiffness $\\bar{Q}(\\theta)$; the off-axis modulus of a single ply follows from the compliance transform: $$\\frac{1}{E_x(\\theta)} = \\frac{\\cos^4\\theta}{E_1} + \\frac{\\sin^4\\theta}{E_2} + \\left(\\frac{1}{G_{12}} - \\frac{2\\nu_{12}}{E_1}\\right)\\sin^2\\theta\\cos^2\\theta.$$ Off-axis ($\\theta \\ne 0°, 90°$) a ply also develops **shear strain under axial load** ($\\bar{Q}_{16} \\ne 0$): shear-extension coupling.',
        detail: 'This coupling is why an isolated angled ply deforms into a parallelogram under pure tension — and why balanced laminates (equal numbers of +θ and −θ plies) were invented: the +θ and −θ Q̄16 terms cancel in the laminate A matrix. An unbalanced laminate stretches and shears simultaneously.',
      },
      {
        term: 'The ABD matrices of CLT',
        kind: 'insight',
        statement: 'Classical laminate theory collects every rotated ply into three 3×3 matrices: $$\\begin{Bmatrix} N \\\\ M \\end{Bmatrix} = \\begin{bmatrix} A & B \\\\ B & D \\end{bmatrix}\\begin{Bmatrix} \\varepsilon^0 \\\\ \\kappa \\end{Bmatrix}$$ where **A** (extensional) resists in-plane strain, **D** (bending) resists curvature, and **B** couples stretching to bending — mid-plane strain bends the plate and curvature stretches it.',
        detail: 'B is nonzero whenever the stacking sequence is not a mirror image about the mid-plane. An unsymmetric laminate warps as it cures (thermal strains act through B) and cannot be machined flat. Symmetric stacking ([0/90/0], [45/−45/45/−45] as pairs mirrored) is near-mandatory in practice precisely to zero out B.',
      },
      {
        term: 'Stacking families: cross-ply, angle-ply, quasi-isotropic',
        kind: 'definition',
        statement: '**Cross-ply** laminates use only 0° and 90° plies; **angle-ply** use ±θ pairs; **quasi-isotropic** stack [0/±45/90]s to behave nearly the same in all in-plane directions. A laminate is **balanced** if +θ and −θ plies occur equally (kills A16, A26) and **symmetric** if mirrored about mid-plane (kills B).',
        detail: '±45 angle-ply laminates are the in-plane shear workhorse — the shear that ruins a 0° ply loads ±45 plies along their fibers — and they show a spectacular Poisson effect (νxy ≈ 0.75). Quasi-isotropic laminates trade roughly 60% of the axial stiffness of all-0° plies for direction-independent behavior: the standard choice when load paths are unknown.',
      },
    ],
    examples: [
      {
        title: 'A 45° ply alone versus a ±45 pair',
        problem: 'Using the carbon/epoxy ply from the previous section (E1 = 139.4 GPa, E2 = 8.56 GPa, G12 = 4.8 GPa, ν12 = 0.30), find the axial modulus of (a) a single ply loaded at 45° to its fibers and (b) a balanced symmetric [±45]s laminate, plus its effective Poisson ratio.',
        steps: [
          { label: 'Step 1', text: 'Single 45° ply — compliance transform with $\\cos^4 45° = \\sin^4 45° = \\sin^245°\\cos^245° = 0.25$: $1/E_x = 0.25/139.4 + 0.25/8.56 + 0.25(1/4.8 - 0.6/139.4) = 0.00179 + 0.02921 + 0.05101 = 0.08201$, so $E_x = 12.2$ GPa.' },
          { label: 'Step 2', text: 'The same isolated ply under pure axial stress also shears: $\\bar{Q}_{16}(45°) \\ne 0$, so tension turns it into a parallelogram — the shear-extension coupling that balanced stacking exists to cancel.' },
          { label: 'Step 3', text: 'Build the ±45 laminate. From the reduced stiffnesses ($Q_{11} = 140.2$, $Q_{22} = 8.61$, $Q_{12} = 2.58$, $Q_{66} = 4.8$ GPa), the 45° transform gives $\\bar{Q}_{11} = \\bar{Q}_{22} = 43.3$ GPa and $\\bar{Q}_{12} = 32.4$ GPa, identical for +45 and −45, while the $\\bar{Q}_{16}$ terms cancel (balanced).' },
          { label: 'Step 4', text: 'Effective modulus of the balanced pair: $E_x = \\bar{Q}_{11} - \\bar{Q}_{12}^2/\\bar{Q}_{22} = 43.3 - 32.4^2/43.3 = 43.3 - 24.2 = 19.1$ GPa — the pair outperforms either single angled ply.' },
          { label: 'Step 5', text: 'Effective Poisson ratio $\\nu_{xy} = \\bar{Q}_{12}/\\bar{Q}_{22} = 32.4/43.3 = 0.75$ — the hallmark of ±45 laminates: they slim down dramatically when pulled, which is also why they absorb energy.' },
        ],
        result: 'A single 45° ply manages only 12.2 GPa and distorts in shear; the balanced ±45 pair reaches 19.1 GPa with νxy ≈ 0.75 — stacking strategy, not ply chemistry, changed the material.',
      },
      {
        title: '[0/90]s cross-ply quick estimate',
        problem: 'For a symmetric cross-ply laminate with equal numbers of 0° and 90° plies of the same carbon/epoxy, estimate Ex, Ey, νxy, and compare with a quasi-isotropic [0/±45/90]s stacking.',
        steps: [
          { label: 'Step 1', text: 'Equal fractions loaded along x: the 0° plies contribute E1 and the 90° plies E2 at the same strain, so $E_x \\approx (E_1 + E_2)/2 = (139.4 + 8.56)/2 = 74.0$ GPa — and by the same argument $E_y = 74.0$ GPa.' },
          { label: 'Step 2', text: 'The coupling modulus is the same in both orientations, $\\bar{Q}_{12} = Q_{12} = \\nu_{12}Q_{22} \\approx 2.58$ GPa, so $\\nu_{xy} = 2.58/74.0 = 0.035$ — nearly zero in-plane Poisson coupling.' },
          { label: 'Step 3', text: 'Shear is the weak flank: with no angled plies the laminate shear stiffness stays near the ply value, $G_{xy} \\approx G_{12} = 4.8$ GPa — poor for any panel carrying shear or torsion.' },
          { label: 'Step 4', text: 'Adding ±45 plies, [0/±45/90]s quasi-isotropic: typical result $E_x \\approx 0.4E_1 \\approx 55$ GPa but with $G_{xy}$ raised to about 21 GPa and near-direction-independent stiffness — the standard unknown-load-path compromise.' },
        ],
        result: 'Cross-ply: Ex = Ey = 74 GPa, νxy ≈ 0.03, but Gxy ≈ 4.8 GPa; quasi-isotropic trades axial stiffness (≈55 GPa) for shear stiffness (≈21 GPa) and direction independence.',
      },
    ],
    keyTakeaways: [
      'A ply is specified by E1, E2, G12, ν12 with $\\nu_{12}E_2 = \\nu_{21}E_1$; everything CLT does is rotation and thickness-integration of the resulting Q.',
      'Off-axis plies couple extension to shear ($\\bar{Q}_{16} \\ne 0$); balanced ±θ stacking cancels it in A.',
      'Symmetric (mirrored) stacking zeros the B matrix — no stretch-bend coupling and no cure warpage; unsymmetric laminates warp out of the autoclave.',
      '±45 pairs are the shear workhorse with νxy ≈ 0.75; [0/±45/90]s buys direction independence at ~40% of E1.',
    ],
    quiz: [
      {
        q: 'A single unidirectional ply loaded in tension at 30° to the fiber direction will, in addition to extending,',
        options: ['shrink laterally with ν = 0.03', 'develop shear strain (distort into a parallelogram)', 'twist about its thickness axis only', 'remain a rectangle because plane stress applies'],
        answer: 1,
        explanation: 'Step 1: Off-axis ($\\theta \\ne 0°, 90°$) the transformed stiffness contains $\\bar{Q}_{16} \\ne 0$. Step 2: Axial stress then produces shear strain — shear-extension coupling. Step 3: It is eliminated at the laminate level by balancing +θ against −θ plies, not by the single ply itself.',
      },
      {
        q: 'The B matrix of a [0/90/90/0] laminate (plies listed bottom to top) is',
        options: ['zero, because the stacking is symmetric about the mid-plane', 'zero, because 0° and 90° plies balance', 'nonzero, producing extension-bending coupling', 'equal to the A matrix of the same laminate'],
        answer: 0,
        explanation: 'Step 1: B collects $\\int \\bar{Q}\\, z\\, dz$ through the thickness. Step 2: The stacking is a mirror image about the mid-plane, so every +z contribution cancels its −z twin. Step 3: B = 0 — symmetric stacking is the standard defense against cure warpage and stretch-bend coupling. Balance (+θ/−θ) is a separate condition for A16.',
      },
      {
        q: 'For the ±45 carbon/epoxy laminate of the worked example, the effective Poisson ratio is approximately',
        options: ['0.30', '0.03', '0.75', '1.30'],
        answer: 2,
        explanation: 'Step 1: For the balanced laminate $\\nu_{xy} = \\bar{Q}_{12}/\\bar{Q}_{22}$. Step 2: With $\\bar{Q}_{12} = 32.4$ and $\\bar{Q}_{22} = 43.3$ GPa, $\\nu_{xy} = 0.748$. Step 3: Such large Poisson ratios are normal and useful — ±45 laminates waist visibly under tension and excel in shear.',
      },
      {
        q: 'A designer needs a laminate with equal stiffness in all in-plane directions and good shear capability. The standard choice is',
        options: ['all 0° plies', '[0/90]s cross-ply', '[±45]s angle-ply', '[0/±45/90]s quasi-isotropic'],
        answer: 3,
        explanation: 'Step 1: All-0° is maximal in one direction and minimal in others. Step 2: Cross-ply fixes 0/90 but leaves shear at the ply G12. Step 3: ±45 maximizes shear but is soft on-axis. Step 4: The four-direction quasi-isotropic family approximates direction-independent stiffness (Ex ≈ 0.4E1) with Gxy ≈ 21 GPa.',
      },
    ],
  },

  // ------------------------------------------------------------- composites §3
  {
    sectionId: 'som-composites-s3',
    readingTime: 10,
    prerequisites: [
      'Ply stiffness and laminate stacking (previous two sections)',
      'Theories of failure for ductile and brittle metals (Strength of Materials chapter)',
      'Stress concentration at holes and notches (Advanced Strength of Materials chapter)',
    ],
    intro: 'Metals announce distress: they yield, they neck, they give visible warning. Composites whisper — first a matrix crack you cannot see, then a soft progressive softening, and only at the end the loud failure of fibers. Designing against this needs failure criteria written in the ply\'s own axes, respect for the weak interlaminar zone between plies, and a joint philosophy that never interrupts the load path without compensation. **The governing question shifts from "will it yield?" to "which mode wins first?"**',
    objectives: [
      'Distinguish first-ply failure from ultimate laminate failure and say when each governs design',
      'Apply the Tsai-Hill and Tsai-Wu criteria to a ply stress state',
      'Explain delamination, free-edge stresses and notched-strength knockdowns',
      'Apply composite design rules for load paths and bolted versus bonded joints, and name the NDT methods',
    ],
    concepts: [
      {
        term: 'First-ply failure versus ultimate',
        kind: 'definition',
        statement: '**First-ply failure (FPF)** is the first ply to violate a failure criterion — almost always transverse matrix cracking in an off-axis ply — causing stiffness loss, microcracking and (in pressure vessels) leak paths, while other plies still carry load. **Ultimate failure** is the fiber-breakage cascade that ends load capacity; ultimate load may sit 1.5–2× above FPF.',
        detail: 'Stiffness-critical and leak-critical structures design to FPF; weight-critical ones accept local FPF with documented progressive-failure analysis. The examiner\'s trap is quoting "the strength" of a laminate without saying which event it measures.',
      },
      {
        term: 'Tsai-Hill criterion',
        kind: 'method',
        statement: 'For a ply stressed in its material axes, Tsai-Hill generalizes the distortion-energy idea to anisotropic strength: $$\\left(\\frac{\\sigma_1}{X}\\right)^2 - \\frac{\\sigma_1\\sigma_2}{X^2} + \\left(\\frac{\\sigma_2}{Y}\\right)^2 + \\left(\\frac{\\tau_{12}}{S}\\right)^2 = 1$$ with X, Y, S the longitudinal, transverse and shear strengths; failure is predicted when the left side reaches 1.',
        detail: 'X, Y, S come from unidirectional tests: for typical carbon/epoxy, X ≈ 1500 MPa, Y ≈ 50 MPa, S ≈ 70 MPa. The 30:1 ratio of X to Y is the entire story of composite failure — matrix-sized stresses in the transverse or shear terms dominate the index long before fibers are threatened. Tsai-Hill needs equal tension/compression strengths; that assumption is its main limitation.',
      },
      {
        term: 'Tsai-Wu criterion',
        kind: 'method',
        statement: 'Tsai-Wu writes failure as a full quadratic with linear terms, $F_1\\sigma_1 + F_2\\sigma_2 + F_{11}\\sigma_1^2 + F_{22}\\sigma_2^2 + F_{66}\\tau_{12}^2 + 2F_{12}\\sigma_1\\sigma_2 = 1$, where $F_1 = 1/X_t - 1/X_c$, $F_{11} = 1/(X_tX_c)$, similarly for the 2-direction.',
        detail: 'The linear terms let tension and compression strengths differ — real plies are much weaker in transverse tension than compression — at the cost of one more measured constant, the interaction coefficient F12 (commonly taken as $-\\tfrac{1}{2}\\sqrt{F_{11}F_{22}}$). Tsai-Wu fits biaxial test data better; Tsai-Hill is easier to compute by hand, which is why exams love it.',
      },
      {
        term: 'Delamination, free edges and joints',
        kind: 'insight',
        statement: 'Between plies there is no fiber — only matrix — so out-of-plane stresses $\\sigma_z, \\tau_{xz}, \\tau_{yz}$ concentrate at **free edges**, holes, ply drop-offs and tight radii, causing delamination: the composite failure mode with no isotropic analogue. **Bolted joints** are inspectable and reliable but drill away 40–50% of the unnotched net strength; **bonded joints** preserve fiber continuity but resist inspection.',
        detail: 'Design countermeasures: taper ply drops gradually (≤ 1 drop per 8–16 thicknesses), avoid ±θ pairs stacked together at free edges, use toughened (thermoplastic-interleaved) resins, and in critical zones stitch or pin through the thickness. NDT for composites is ultrasonic C-scan (delamination imaging), tap testing (rapid field check), thermography and X-ray CT — strain gauges and photoelasticity, covered in the Experimental Stress Analysis chapter for metallic parts, support but do not replace these.',
      },
    ],
    examples: [
      {
        title: 'Tsai-Hill first-ply-failure check',
        problem: 'A carbon/epoxy ply with X = 1500 MPa, Y = 50 MPa, S = 70 MPa carries a service stress state σ1 = 800 MPa, σ2 = 40 MPa, τ12 = 40 MPa (in the ply material axes). Has first-ply failure occurred? Recheck with σ2 = 25 MPa.',
        steps: [
          { label: 'Step 1', text: 'Longitudinal term: $(800/1500)^2 = 0.284$ — only 28% of the fiber-direction budget used.' },
          { label: 'Step 2', text: 'Interaction and transverse terms: $-\\sigma_1\\sigma_2/X^2 = -(800)(40)/1500^2 = -0.014$; $(40/50)^2 = 0.640$ — the transverse term alone consumes 64% of the budget.' },
          { label: 'Step 3', text: 'Shear term: $(40/70)^2 = 0.327$. Total index $= 0.284 - 0.014 + 0.640 + 0.327 = 1.237 \\ge 1$ — FPF predicted.' },
          { label: 'Step 4', text: 'With σ2 = 25 MPa instead: $(25/50)^2 = 0.25$ and the interaction term shrinks to −0.009, giving $0.284 - 0.009 + 0.25 + 0.327 = 0.85 < 1$ — survival.' },
          { label: 'Step 5', text: 'Read the physics: the ply failed with its fibers at only 53% of X. Matrix-controlled transverse and shear stresses decided the verdict — which is why designers rotate plies away from load directions where they would see transverse tension.' },
        ],
        result: 'Index 1.24 ≥ 1 at σ2 = 40 MPa (FPF, matrix cracking); 0.85 at σ2 = 25 MPa (safe) — transverse stress is the swing variable, not fiber stress.',
      },
      {
        title: 'Sizing a bolted joint in a laminate',
        problem: 'A 4 mm thick carbon/epoxy laminate with pin bearing strength 600 MPa and notched net-section strength 350 MPa must transfer 20 kN through a single bolt in a 36 mm wide strip. Size the bolt (metric) and check the net-section margin; state the edge-distance rule.',
        steps: [
          { label: 'Step 1', text: 'Bearing: $\\sigma_b = P/(dt) \\le 600$ MPa requires $d \\ge P/(600t) = 20000/(600 \\times 4) = 8.3$ mm → select an M10 bolt (d = 10 mm).' },
          { label: 'Step 2', text: 'Bearing check with d = 10: $\\sigma_b = 20000/(10 \\times 4) = 500$ MPa ≤ 600 → bearing margin $600/500 = 1.2$.' },
          { label: 'Step 3', text: 'Net tension across the hole: net area $(w - d)t = (36 - 10)(4) = 104$ mm², so $\\sigma_{net} = 20000/104 = 192$ MPa; margin $350/192 = 1.8$.' },
          { label: 'Step 4', text: 'Edge distance to prevent shear-out: $e \\ge 3d = 30$ mm from hole center to edge, and spacing ≥ 4d between bolts in a row.' },
          { label: 'Step 5', text: 'Note the knockdown honestly: the same laminate unnotched would carry far more — drilling cuts fibers, so joints, not laminates, size most composite structures. Bonded joints avoid the hole but demand surface preparation and ultrasonic inspection instead.' },
        ],
        result: 'M10 bolt, e ≥ 30 mm: bearing-limited design at 500 MPa (margin 1.2) with net-section margin 1.8.',
      },
    ],
    keyTakeaways: [
      'FPF (usually transverse matrix cracking) is a serviceability event; ultimate is the fiber cascade — always name which margin you are quoting.',
      'Tsai-Hill sums squared stress-to-strength ratios in ply axes; Tsai-Wu adds linear terms to distinguish tension from compression — both flag matrix-dominated failure long before fibers are stressed.',
      'Interlaminar stresses at free edges, holes and ply drops cause delamination — the mode with no metal analogue; taper the drops, toughen the resin, mind the stacking at edges.',
      'Bolted joints trade inspectability for a 40–50% notched knockdown (e ≥ 3d, sizing by bearing); bonded joints keep fibers continuous but hide their flaws — ultrasonic C-scan is the delamination detector.',
    ],
    quiz: [
      {
        q: 'A ply with X = 1200 MPa, Y = 50 MPa, S = 60 MPa carries σ1 = 600 MPa, σ2 = 25 MPa, τ12 = 30 MPa. The Tsai-Hill index is closest to',
        options: ['0.74 — no failure', '1.24 — failure', '0.98 — no failure', '0.55 — no failure'],
        answer: 0,
        explanation: 'Step 1: $(600/1200)^2 = 0.250$. Step 2: Interaction $-(600)(25)/1200^2 = -0.010$ and $(25/50)^2 = 0.250$. Step 3: $(30/60)^2 = 0.250$. Step 4: Index $= 0.250 - 0.010 + 0.250 + 0.250 = 0.74 < 1$ — the ply survives with 26% of its combined budget in reserve.',
      },
      {
        q: 'First-ply failure in a multidirectional laminate most often occurs as',
        options: ['fiber tensile rupture in the 0° plies', 'transverse matrix cracking in an off-axis ply', 'fiber microbuckling under compression', 'explosive delamination of the whole laminate'],
        answer: 1,
        explanation: 'Step 1: The ply transverse strength Y (~50 MPa) is roughly 1/30 of X (~1500 MPa). Step 2: Off-axis plies loaded across their fibers reach Y first, cracking the matrix. Step 3: Fiber rupture and gross delamination come later in the progressive sequence toward ultimate load.',
      },
      {
        q: 'The most appropriate NDT technique for imaging an internal delamination in a carbon/epoxy skin is',
        options: ['photoelastic coating', 'ultrasonic C-scan', ' brittle lacquer', 'eddy-current testing'],
        answer: 1,
        explanation: 'Step 1: Delamination is a buried air gap between plies — invisible from outside. Step 2: Ultrasonic C-scan raster-maps through-thickness reflections/attenuation and images internal flaws directly. Step 3: Photoelasticity and brittle coatings read surface strains (and need optical birefringence); eddy currents work only on conductors — carbon laminates are neither transparent nor reliably inspectable that way.',
      },
      {
        q: 'Bolted joints in composite laminates are designed with edge distance e ≥ 3d primarily to prevent',
        options: ['net-section tension failure', 'bearing failure', 'shear-out (cleavage) failure behind the hole', 'excessive weight'],
        answer: 2,
        explanation: 'Step 1: Too small an edge distance lets the material behind the hole shear out on roughly cylindrical surfaces. Step 2: The e ≥ 3d (and pitch ≥ 4d) rules supply enough material to force the intended bearing mode. Step 3: Net tension and bearing are checked separately with their own allowables, as in the worked joint example.',
      },
    ],
  },

  // ------------------------------------------------------------------ fem §1
  {
    sectionId: 'som-fem-s1',
    readingTime: 9,
    prerequisites: [
      'Axial deformation δ = PL/AE and stiffness as force per displacement (Strength of Materials chapter)',
      'Matrix algebra: multiplication and solving linear systems',
      'Beam bending and the stiffness idea of EI (Strength of Materials chapter)',
    ],
    intro: 'Closed-form elasticity lives only for textbook geometry — uniform bars, symmetric plates, smooth holes. Real parts have brackets, bosses and lugs. The finite element method replaces one impossible problem with thousands of easy ones: **discretize** the structure into simple elements joined at nodes, assume a simple displacement field inside each element, and let equilibrium and compatibility assemble a solvable system. The bar element is where the entire machinery — shape functions, stiffness, assembly, boundary conditions — can be watched working in one screen of algebra.',
    objectives: [
      'Explain discretization: elements, nodes and degrees of freedom',
      'Derive the two-node bar element stiffness matrix from shape functions',
      'Assemble element matrices, apply boundary conditions, solve and recover stresses',
      'Describe the beam element and why Hermite cubic interpolation is required',
    ],
    concepts: [
      {
        term: 'Discretization',
        kind: 'definition',
        statement: 'The domain is subdivided into **elements** (bars, triangles, bricks) connected at **nodes**; the unknowns of the whole analysis are the nodal **degrees of freedom** (DOF) — displacements (and rotations where relevant). Within each element the displacement field is interpolated from nodal values by shape functions.',
        detail: 'The discrete solution converges to the exact elasticity solution as the mesh refines, because more nodes allow the piecewise field to hug the true one. The art is spending elements where gradients are steep — a uniform fine mesh mostly buys accuracy in places that never needed it.',
      },
      {
        term: 'Bar element stiffness derivation',
        kind: 'method',
        statement: 'With linear shape functions $N_1 = 1 - x/L$, $N_2 = x/L$, write $u(x) = N_1u_1 + N_2u_2$; then strain $\\varepsilon = du/dx = \\mathbf{B}\\mathbf{u}$ with $\\mathbf{B} = [-1/L \\;\\; 1/L]$, and $$\\mathbf{k} = \\int_0^L \\mathbf{B}^T E \\mathbf{B} A\\, dx = \\frac{EA}{L}\\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix}.$$',
        detail: 'The k = EA/L result is the same stiffness you know from δ = PL/AE — the derivation simply rebuilds it from an assumed field, and that same three-step pattern (shape functions → strain-displacement B → integrate BᵀDB) produces every stiffness matrix in every commercial solver. Note k is symmetric and singular (one rigid-body mode) until boundary conditions remove it.',
      },
      {
        term: 'Assembly, boundary conditions, solve',
        kind: 'method',
        statement: 'Element matrices overlap-add into the global stiffness K: shared nodes accumulate stiffness contributions ($K_{22} = k_1^{(22)} + k_2^{(11)}$ in a two-bar chain). Fixed DOFs are removed by deleting their rows and columns; the reduced system $\\mathbf{KU} = \\mathbf{F}$ solves for unknown displacements; reactions come from the deleted equations; element stress is recovered as $\\sigma = (E/L)(u_j - u_i)$.',
        detail: 'Two habits of careful analysts form here. First, always check $\\sum R = \\sum F$ after solving — equilibrium is a property of the assembled system and must hold to machine precision. Second, recover stresses element-by-element from displacements, never from nodal forces alone; averaging hides the very peaks you are hunting.',
      },
      {
        term: 'Beam element and Hermite interpolation',
        kind: 'insight',
        statement: 'A beam must keep slope continuous across nodes (curvature involves the second derivative of w), so each node carries two DOF — deflection w and slope θ — and the interpolation must be cubic: the **Hermite shape functions**. The resulting 4×4 element (stiffness scaling $EI/L^3$, with entries 12, 6L, 4L², 2L²) is exact for static point-load problems.',
        detail: 'Exact means one beam element reproduces PL³/3EI for a tip-loaded cantilever — the cubic Hermite field coincides with the true cubic deflection curve. In-plane frame elements simply tuck this bending 4×4 into a 6×6 with the bar stiffness; plane-stress triangles and quads (next section) abandon C¹ continuity altogether because their strain needs only first derivatives.',
      },
    ],
    examples: [
      {
        title: 'Two bars in series — the whole method in one page',
        problem: 'A steel bar assembly: element 1 (node 1→2) has A = 200 mm², element 2 (node 2→3) has A = 100 mm²; both L = 1.0 m, E = 200 GPa. Ends 1 and 3 are fixed; a 50 kN load acts at node 2 toward the right. Find the node-2 displacement, both element stresses and the reactions.',
        steps: [
          { label: 'Step 1', text: 'Element stiffnesses: $k_1 = EA/L = (200\\,000)(200)/1000 = 40\\,000$ N/mm; $k_2 = (200\\,000)(100)/1000 = 20\\,000$ N/mm.' },
          { label: 'Step 2', text: 'Assemble: $\\mathbf{K} = \\begin{bmatrix} k_1 & -k_1 & 0 \\\\ -k_1 & k_1+k_2 & -k_2 \\\\ 0 & -k_2 & k_2\\end{bmatrix}$ with DOF ordered $u_1, u_2, u_3$.' },
          { label: 'Step 3', text: 'Boundary conditions $u_1 = u_3 = 0$ delete rows/columns 1 and 3, leaving $(k_1 + k_2)u_2 = P$: $60\\,000\\,u_2 = 50\\,000$, so $u_2 = 0.833$ mm.' },
          { label: 'Step 4', text: 'Stress recovery: $\\sigma = E\\,u_2/L = 200\\,000(0.833)/1000 = 166.7$ MPa — identical in both elements, because series bars of equal E and L share strain regardless of area: the areas share the load (33.3 and 16.7 kN), not the stress.' },
          { label: 'Step 5', text: 'Reactions: $R_1 = k_1u_2 = 33.3$ kN (left, tension), $R_3 = k_2u_2 = 16.7$ kN; sum $= 50$ kN = applied load — equilibrium verified before any stress is believed.' },
        ],
        result: 'u2 = 0.833 mm; both elements at 166.7 MPa; reactions 33.3 kN + 16.7 kN balance the 50 kN load exactly.',
      },
      {
        title: 'One beam element, one exact answer',
        problem: 'A cantilever (L = 2.0 m, E = 200 GPa, I = 2×10⁶ mm⁴) carries a 2 kN tip load. Model it with a single two-node beam element and find tip deflection and slope.',
        steps: [
          { label: 'Step 1', text: 'DOF: $(w_1, \\theta_1)$ clamped at the wall; $(w_2, \\theta_2)$ free at the tip with force 2000 N. The 4×4 Hermite element reduces to a 2×2 for the free DOF.' },
          { label: 'Step 2', text: 'Solving the reduced system gives the beam-theory results $w_2 = PL^3/3EI$ and $\\theta_2 = PL^2/2EI$.' },
          { label: 'Step 3', text: 'Numbers: $w_2 = 2000(2000)^3/[3(200\\,000)(2\\times10^6)] = 13.3$ mm; $\\theta_2 = 2000(2000)^2/[2(200\\,000)(2\\times10^6)] = 0.010$ rad.' },
          { label: 'Step 4', text: 'One element suffices because the true deflection curve of a tip-loaded cantilever is a cubic — exactly the Hermite field. Add intermediate loads or distributed load and refinement becomes necessary again.' },
        ],
        result: 'w = 13.3 mm, θ = 0.010 rad with a single element — exactness by construction, not by luck.',
      },
    ],
    keyTakeaways: [
      'The FEM pipeline in miniature: choose elements, interpolate with shape functions, form $\\mathbf{k} = \\int\\mathbf{B}^T E\\mathbf{B}\\,dV$, assemble, apply BCs, solve, recover stress.',
      'Bar stiffness $EA/L \\begin{bmatrix} 1 & -1 \\\\ -1 & 1\\end{bmatrix}$ is singular by design — boundary conditions must remove rigid-body motion before solving.',
      'Series bars of equal E and L share the same stress; areas distribute load, not strain — assembly respects compatibility automatically.',
      'Beam elements need slope DOF and cubic Hermite functions (C¹ continuity); for static point loads the single-element answer is exact.',
    ],
    quiz: [
      {
        q: 'A steel bar element has E = 200 GPa, A = 300 mm², L = 1.5 m. Its axial stiffness k = EA/L is',
        options: ['4 kN/mm', '40 kN/mm', '400 N/mm', '0.04 kN/mm'],
        answer: 1,
        explanation: 'Step 1: Consistent units N and mm: E = 200 000 MPa, L = 1500 mm. Step 2: $k = EA/L = 200\\,000 \\times 300/1500 = 40\\,000$ N/mm = 40 kN/mm. Step 3: The 4 kN/mm choice forgets the length conversion; stiffness halves when L doubles — track units end to end.',
      },
      {
        q: 'In the two-bar worked example, the assembled global stiffness entry K22 equals',
        options: ['k1 only', 'k2 only', 'k1 + k2', 'k1 − k2'],
        answer: 2,
        explanation: 'Step 1: Node 2 is shared by both elements. Step 2: Assembly is overlap-addition: element 1 contributes its (2,2) entry k1, element 2 contributes its (1,1) entry k2. Step 3: $K_{22} = k_1 + k_2 = 60\\,000$ N/mm — which is precisely the coefficient that solved $u_2 = P/(k_1+k_2)$.',
      },
      {
        q: 'Beam elements use cubic Hermite shape functions rather than linears mainly because',
        options: ['cubic polynomials are always stiffer', 'slope continuity across nodes must be guaranteed for the bending strain to behave', 'linear functions cannot represent large rotations', 'the assembled matrix would otherwise be unsymmetric'],
        answer: 1,
        explanation: 'Step 1: Bending strain involves the second derivative $w\'\'$. Step 2: With only nodal deflections and linear fields, w\'\' vanishes — no bending stiffness at all. Step 3: Carrying w and w′ per node with cubic Hermite interpolation keeps w′ continuous (C¹) across elements, so curvature — and the 12, 6L, 4L², 2L² stiffness entries — is well defined.',
      },
      {
        q: 'After solving a static model, the reaction forces at constrained nodes fail to balance the applied loads. This means',
        options: ['nothing — reactions are approximate in FEM', 'the mesh needs refinement', 'a modeling or units error exists — global equilibrium must hold exactly for the assembled system', 'the solver used reduced integration'],
        answer: 2,
        explanation: 'Step 1: The assembled K is built to satisfy discrete equilibrium identically. Step 2: Whatever the mesh quality, $\\sum R = \\sum F$ must hold to solver precision. Step 3: An imbalance therefore flags a modeling error — missed load, wrong units, or a constraint applied to the wrong nodes — not discretization error.',
      },
    ],
  },

  // ------------------------------------------------------------------ fem §2
  {
    sectionId: 'som-fem-s2',
    readingTime: 10,
    prerequisites: [
      'Bar element stiffness and assembly (previous section)',
      'Plane stress and plane strain idealizations (Strength of Materials chapter)',
      'Partial derivatives and 2×2 determinants',
    ],
    intro: 'Two-dimensional elements are where continuum analysis actually happens: brackets, plates, pressure-vessel details, notches. The menu looks crowded — triangles, quads, linear, quadratic — but everything reduces to three questions. What field does the element assume? How does it map onto real geometry? And how are its integrals evaluated? **Master the constant-strain triangle, the isoparametric quad and Gauss quadrature, and every element in every solver is a variation on the same three answers.**',
    objectives: [
      'Construct CST and bilinear quad interpolation and state their strain fields',
      'Explain isoparametric mapping, compute the Jacobian and recognize invalid elements',
      'Evaluate integrals by Gauss quadrature and distinguish full from reduced integration',
      'Judge element quality via aspect ratio and skew',
    ],
    concepts: [
      {
        term: 'Constant-strain triangle (CST)',
        kind: 'definition',
        statement: 'The 3-node triangle interpolates displacement linearly in x and y, $u = a_1 + a_2x + a_3y$ (likewise v). Its strain-displacement matrix B is constant over the element — hence **constant strain and constant stress per element**, with strains jumping discontinuously between neighbors.',
        detail: 'Constant strain makes the CST mathematically complete but behaviorally stiff in bending: a bending field must be built from many flat strain steps. The cure is refinement (or higher-order triangles), and the standard diagnostic is watching a quantity of interest change as the mesh refines. Never judge stress from a single coarse CST mesh.',
      },
      {
        term: 'Bilinear quadrilateral (Q4)',
        kind: 'method',
        statement: 'The 4-node quad interpolates on the parent square ($-1 \\le \\xi, \\eta \\le 1$) with $N_i = \\tfrac{1}{4}(1 \\pm \\xi)(1 \\pm \\eta)$ — bilinear: linear along each edge, with a quadratic twist in the interior. Strain varies linearly, so one Q4 typically replaces several CSTs at equal accuracy.',
        detail: 'Edge linearity means a curved boundary becomes a polygonal approximation — refine locally or move to 8-node quads with midside nodes where geometry demands. The Q4 is also the cleanest introduction to the next two ideas: its shape functions serve as both geometry map and displacement field.',
      },
      {
        term: 'Isoparametric mapping and the Jacobian',
        kind: 'method',
        statement: 'The same shape functions map both geometry and displacement — the **isoparametric** concept: $x = \\sum N_i(\\xi,\\eta)x_i$, $u = \\sum N_i(\\xi,\\eta)u_i$. The Jacobian matrix $\\mathbf{J} = \\partial(x,y)/\\partial(\\xi,\\eta)$ converts parent-square derivatives to physical ones, and $\\det \\mathbf{J}$ is the local area scale: $$\\iint f\\,dx\\,dy = \\int_{-1}^{1}\\int_{-1}^{1} f\\,\\det\\mathbf{J}\\, d\\xi\\, d\\eta.$$',
        detail: '$\\det\\mathbf{J} > 0$ everywhere is the validity condition: a folded (concave) node or crossed edge makes det J change sign and the element — and the solve — fails. This is why every pre-processor runs a Jacobian check: distorted elements do not merely lose accuracy, they can invalidate the mathematics.',
      },
      {
        term: 'Gauss quadrature and integration order',
        kind: 'method',
        statement: 'Element integrals over the parent square are evaluated at sampling points: $$\\iint f\\,d\\xi\\,d\\eta \\approx \\sum_i \\sum_j w_iw_j f(\\xi_i, \\eta_j)$$ where an n-point Gauss rule in one dimension is exact for polynomials up to degree $2n - 1$. For Q4 stiffness, **2×2 Gauss points** is "full" integration; a single point is "reduced".',
        detail: 'Reduced integration is cheaper but admits hourglass modes — zero-energy deformation patterns (checkerboard) that cost the strain energy nothing and pollute displacements unless the solver controls them. The trade: full integration can lock in bending-dominated problems (shear locking of fully integrated Q4), reduced integration risks hourglassing — which is why 8-node quads with 2×2 or selective-reduced schemes became the practical favorites.',
      },
    ],
    examples: [
      {
        title: 'Gauss quadrature by hand',
        problem: 'Evaluate $I = \\int_{-1}^{1}(\\xi^2 + 2\\xi)\\,d\\xi$ with the 2-point Gauss rule and with the 1-point rule, and compare with the exact value. Then extend the idea to $\\iint(\\xi^2 + \\eta^2 + 1)\\,d\\xi\\,d\\eta$ with a 2×2 rule.',
        steps: [
          { label: 'Step 1', text: 'Exact: $\\int_{-1}^1 \\xi^2 d\\xi = 2/3$ and $\\int_{-1}^1 2\\xi\\, d\\xi = 0$, so $I = 0.6667$.' },
          { label: 'Step 2', text: '2-point rule: points $\\xi = \\pm 1/\\sqrt{3} = \\pm 0.5774$, weights 1. Values: $f(0.5774) = 0.3333 + 1.1547 = 1.4880$; $f(-0.5774) = 0.3333 - 1.1547 = -0.8214$.' },
          { label: 'Step 3', text: 'Sum: $I \\approx 1.4880 - 0.8214 = 0.6667$ — exact, because the rule integrates cubics exactly and the integrand is only quadratic.' },
          { label: 'Step 4', text: '1-point rule: $2 \\times f(0) = 0$ — wildly wrong: the even (ξ²) content is invisible to the center point. Under-integration does not just lose accuracy; it discards entire polynomial terms — the seed of hourglass modes.' },
          { label: 'Step 5', text: 'Two dimensions: $\\iint(\\xi^2+\\eta^2+1) = 4/3 + 4/3 + 4 = 6.667$ exactly; the 2×2 rule samples $\\xi^2 = \\eta^2 = 1/3$ at all four points, giving $4 \\times (1/3 + 1/3 + 1) = 6.667$ — again exact.' },
        ],
        result: '2-point: 0.6667 (exact); 1-point: 0 (structure-blind); 2×2 on the 2D integrand: 6.667 (exact). Quadrature choice = choice of which polynomial content survives.',
      },
      {
        title: 'Jacobian of a parallelogram quad',
        problem: 'A Q4 element has nodes 1(0, 0), 2(4, 0), 3(5, 2), 4(1, 2) (counter-clockwise). Compute the Jacobian at the element center, verify its determinant, and check the element area. Then interpret the check for a concave variant.',
        steps: [
          { label: 'Step 1', text: 'At the parent center ($\\xi = \\eta = 0$) the shape-function derivatives are $\\pm 1/4$, so $\\partial x/\\partial\\xi = \\tfrac{1}{4}(-x_1 + x_2 + x_3 - x_4) = \\tfrac{1}{4}(0 + 4 + 5 - 1) = 2.0$ and $\\partial x/\\partial\\eta = \\tfrac{1}{4}(-x_1 - x_2 + x_3 + x_4) = \\tfrac{1}{4}(0 - 4 + 5 + 1) = 0.5$.' },
          { label: 'Step 2', text: 'Similarly $\\partial y/\\partial\\xi = \\tfrac{1}{4}(0 + 0 + 2 - 2) = 0$ and $\\partial y/\\partial\\eta = \\tfrac{1}{4}(0 - 0 + 2 + 2) = 1.0$, giving $\\mathbf{J} = \\begin{bmatrix} 2.0 & 0.5 \\\\ 0 & 1.0 \\end{bmatrix}$ (columns: ξ- and η-directions).' },
          { label: 'Step 3', text: '$\\det\\mathbf{J} = (2.0)(1.0) - (0.5)(0) = 2.0 > 0$ — valid, and for a parallelogram it is constant across the element.' },
          { label: 'Step 4', text: 'Area check: $A = \\iint \\det\\mathbf{J}\\, d\\xi\\, d\\eta = 2.0 \\times 4 = 8.0$ — equal to base × height = 4 × 2 = 8 ✓. The Jacobian is literally inches of physical area per unit of parent area.' },
          { label: 'Step 5', text: 'If node 3 were dragged inward past the diagonal, making the quad concave, det J would turn negative near that vertex — the pre-processor rejects the element ("negative Jacobian") before any physics runs. Mesh-quality checking is guarding the math, not the aesthetics.' },
        ],
        result: 'J = [[2.0, 0.5], [0, 1.0]], det J = 2.0 > 0; area = 8.0 = geometric value — and a concave node flips the sign of det J, killing the element.',
      },
    ],
    keyTakeaways: [
      'CST: linear fields, constant strain — robust but bending-stiff; Q4: bilinear fields, linear strain — the everyday workhorse when shape stays sane.',
      'Isoparametric = same shape functions map geometry and displacement; det J is the area scale, and det J ≤ 0 (folded element) invalidates the element outright.',
      'Gauss quadrature: n points exact to degree 2n−1; 2×2 fully integrates Q4, 1-point invites hourglass zero-energy modes.',
      'Element quality is Jacobian health: aspect ratios beyond ~5:1 and skewed corners degrade the map long before a solver complains.',
    ],
    quiz: [
      {
        q: 'The strain field inside a 3-node constant-strain triangle is',
        options: ['linear in x and y', 'constant over the element', 'quadratic along edges', 'undefined at the centroid'],
        answer: 1,
        explanation: 'Step 1: The displacement is linear: $u = a_1 + a_2x + a_3y$. Step 2: Strain involves first derivatives, which are the constants $a_2, a_3$. Step 3: Constant strain (and stress) per element forces strain jumps between neighbors and explains the CST\'s stiffness in bending.',
      },
      {
        q: 'In an isoparametric quadrilateral, a negative Jacobian determinant at a Gauss point indicates',
        options: ['poor accuracy but a valid solve', 'the element is folded/inverted and the analysis is invalid', 'reduced integration is needed', 'the element needs midside nodes'],
        answer: 1,
        explanation: 'Step 1: det J is the local area scale factor of the parent-to-physical map. Step 2: A negative value means the mapping has folded on itself — physical area would be counted negative. Step 3: Stiffness integrals become meaningless; quality checkers reject such elements before the solve, which is exactly what the pre-processor "negative Jacobian" error reports.',
      },
      {
        q: 'A 2-point Gauss rule integrates $\\int_{-1}^{1}(3\\xi^3 + \\xi)\\,d\\xi$ exactly because',
        options: ['the integrand is odd, so the answer is always zero', 'a 2-point rule is exact for polynomials up to degree 3', 'Gauss rules are exact for all polynomials', 'the points are symmetric about zero'],
        answer: 1,
        explanation: 'Step 1: An n-point Gauss rule is exact through degree 2n−1. Step 2: With n = 2 the cutoff is degree 3, and the cubic-plus-linear integrand qualifies. Step 3: The integral is indeed 0 (odd integrand), but exactness is a property of the degree bound, not of the answer being zero.',
      },
      {
        q: 'Hourglass (zero-energy) modes are associated with',
        options: ['full 2×2 integration of Q4 elements', 'reduced single-point integration of Q4 elements', 'using CST triangles in bending', 'high aspect ratio elements'],
        answer: 1,
        explanation: 'Step 1: One-point integration samples strain at a single point. Step 2: Checkerboard deformation patterns exist whose strain at that point is zero, so they generate no strain energy and no resisting force. Step 3: The solver must add hourglass control (or you use full/selective integration) — otherwise displacements pollute with patterns the physics never priced.',
      },
    ],
  },

  // ------------------------------------------------------------------ fem §3
  {
    sectionId: 'som-fem-s3',
    readingTime: 10,
    prerequisites: [
      '2D elements, isoparametric mapping and Gauss integration (previous section)',
      'Stress concentration at discontinuities (Advanced Strength of Materials chapter)',
      'Ductile failure assessment by equivalent stress (Strength of Materials chapter)',
    ],
    intro: 'The element mathematics is the easy part. Engineering judgment in finite element analysis lives in **idealization** (what to model at all), **convergence** (when to stop refining) and **error recognition** (what the pretty stress plot is silently lying about). A wrong mesh does not fail to produce an answer — it produces a confident one. This section is the professional layer between knowing FEM and doing FEM.',
    objectives: [
      'Lay out the pre-processing, solution and post-processing workflow with its idealization decisions',
      'Run and interpret h- and p-refinement convergence studies',
      'Recognize stress singularities and handle them without chasing infinity',
      'Distinguish verification from validation and catalog the classic analyst errors',
    ],
    concepts: [
      {
        term: 'The three-stage workflow',
        kind: 'method',
        statement: '**Pre-processing**: idealize (1D beams / 2D shells / 3D solids? symmetry? units — decide before meshing), mesh with quality checks, apply loads and boundary conditions that mimic real load paths. **Solution**: static, modal, buckling or nonlinear solves. **Post-processing**: check reactions and deformed shape for sanity first, stresses only afterward.',
        detail: 'The order matters because equilibrium and deformation checks are nearly free and catch most blunders, while stress fields invite premature staring at color plots. Idealization is the highest-leverage decision: a beam model that captures 95% of the answer in seconds beats a million-node solid that renders for an hour.',
      },
      {
        term: 'h- and p-refinement convergence',
        kind: 'method',
        statement: '**h-refinement** shrinks element size h; **p-refinement** raises the polynomial order of the shape functions (linear → quadratic → cubic). Discretization error in the quantity of interest shrinks roughly as $h^{k}$ (k tied to element order and solution smoothness). A convergence study solves 2–3 meshes and accepts the result when the quantity of interest changes by less than about 5%.',
        detail: 'Refine where gradients are steep — fillets, contact, holes — not uniformly. Always track a *specific* quantity (peak fillet stress, tip deflection, first frequency); global mesh statistics say nothing about local convergence. If the last refinement moved the answer 20%, the model has not converged; no amount of animation changes that.',
      },
      {
        term: 'Stress singularities',
        kind: 'insight',
        statement: 'At **point loads**, **point constraints** and **sharp re-entrant corners** (e.g., a 90° internal corner), the theory of elasticity itself predicts infinite stress: the corner singularity decays like $r^{\\lambda-1}$ with λ < 1. Refining the mesh there raises the computed peak without bound — the number is mesh-dependent and meaningless.',
        detail: 'Three professional responses: (1) make the geometry real — put the actual fillet radius on the corner, since machined parts always have one; (2) smear the load over the small area it physically occupies; (3) sample stress at a defined distance (e.g., half the thickness from the singularity) and compare against nominal-plus-Kt hand calculations. Chasing the converged peak at a singularity is the single most common FEM misread.',
      },
      {
        term: 'Verification, validation and the error catalog',
        kind: 'insight',
        statement: '**Verification** asks "are the equations solved right?" — mesh convergence, patch tests, comparison with beam theory benchmarks. **Validation** asks "are the right equations solved?" — agreement with test data. Classic analyst errors: unit mix-ups, unconstrained rigid-body modes (singular K), over-constraint adding phantom stiffness, shell normal inconsistency, bonded contact where parts really slide, and trusting peak stress at singularities.',
        detail: 'The most instructive error class is unit mix-ups: a model built in N-mm-MPa with E entered as "200" instead of 200 000 runs happily, produces stresses that are accidentally plausible and displacements 1000× wrong. This is why the deformed-shape sanity check (does 0.5 mm look like 0.5 mm?) is mandatory ritual, not optional decoration.',
      },
    ],
    examples: [
      {
        title: 'L-bracket: singular corner versus real fillet',
        problem: 'A steel L-bracket in bending is analyzed twice: once with the sharp internal corner as drawn, once with the manufactured 2 mm fillet. Successive local refinements give peak von Mises stress: sharp corner 120 → 132 → 141 → 148 MPa; filleted 118 → 126 → 129 → 130 MPa. Assess convergence and compute the design factor for Sy = 250 MPa.',
        steps: [
          { label: 'Step 1', text: 'Sharp corner trend: +10.0%, +6.8%, +5.0% per refinement — still climbing with no sign of settling: the 270° re-entrant corner is a singularity and the "peak" grows like a power of element size. Any value quoted from this run is a property of the mesh, not the part.' },
          { label: 'Step 2', text: 'Filleted trend: +6.8%, +2.4%, +0.8% — geometric decay: converged. The two finest meshes differ by 0.8%, far inside the usual 5% acceptance band.' },
          { label: 'Step 3', text: 'A Richardson-style extrapolation from the differences (8, 3, 1 MPa) puts the limit near 130.5 MPa; report ≈ 130 MPa from the finest mesh.' },
          { label: 'Step 4', text: 'Design check on the converged value: ductile steel, von Mises: $n = S_y/\\sigma_{vm} = 250/130 = 1.9$.' },
          { label: 'Step 5', text: 'Judgment: the fillet is not cosmetic — it converts an unanswerable question ("what is the stress at a mathematical corner?") into an answerable one, and it is what the machinist will deliver anyway.' },
        ],
        result: 'Sharp-corner stresses diverge with refinement (singular — not reportable); filleted model converges to ≈130 MPa giving n = 1.9.',
      },
      {
        title: 'The unit disaster and what catches it',
        problem: 'A cantilever is modeled in N-mm-MPa units (steel E = 200 000 MPa expected), but the analyst types E = 200. The beam-theory tip deflection should be 0.5 mm on a 200 mm long beam. What does the model produce, which standard checks catch the error, and which do not?',
        steps: [
          { label: 'Step 1', text: 'Stiffness scales with E: entering 200 instead of 200 000 makes all stiffnesses 1000× too small, hence all displacements 1000× too large.' },
          { label: 'Step 2', text: 'Predicted tip deflection: $0.5 \\times 1000 = 500$ mm — on a 200 mm beam. The deformed-shape check screams instantly: the cantilever appears to fold back on itself.' },
          { label: 'Step 3', text: 'Stress is accidentally plausible: $\\sigma = E\\varepsilon$ with E too small by 10³ but strains too large by 10³ — the errors cancel and stresses come out right. Color plots alone would not flag the mistake.' },
          { label: 'Step 4', text: 'The reaction check also passes: reactions equal applied loads exactly, because discrete equilibrium holds regardless of E. Only the deformation sanity check — and reading the model\'s unit declaration aloud — catches this class of error.' },
        ],
        result: 'Displacements 1000× wrong (500 mm tip), stresses accidentally correct, reactions perfectly balanced — only the deformed-shape sanity check exposes it.',
      },
    ],
    keyTakeaways: [
      'Workflow discipline: idealize before meshing, and earn the right to read stresses by passing reaction and deformed-shape sanity checks first.',
      'Converge on a named quantity of interest: h-refine (smaller elements) or p-refine (higher order) until the answer moves < 5%; a still-drifting answer is not yet an answer.',
      'Point loads, point constraints and sharp re-entrant corners are singular — refinement inflates the peak forever; fillet the geometry, smear the load or sample at a distance.',
      'Verification (solved right) is not validation (right equations); unit errors hide from stress plots and reaction checks — the deformed shape tells the truth.',
    ],
    quiz: [
      {
        q: 'Refining the mesh around a sharp 90° re-entrant corner causes the computed peak stress to',
        options: ['converge to the true finite value', 'decrease steadily', 'increase without bound, because elasticity theory is singular there', 'oscillate around the average'],
        answer: 2,
        explanation: 'Step 1: At a re-entrant corner the elasticity solution behaves like $r^{\\lambda - 1}$ with λ < 1. Step 2: The stress therefore diverges as r → 0 — infinite in theory. Step 3: Each refinement resolves closer to the corner and reports a higher peak; the number is mesh-dependent, which is why real fillets or distance-based sampling replace it.',
      },
      {
        q: 'A convergence study on fillet stress yields 126, 129 and 130 MPa across three refinements. The best-supported conclusion is',
        options: ['the stress is 130 MPa and the model is converged', 'the stress is still diverging', 'the mesh is too coarse to conclude anything', 'the true stress is 126 MPa from the coarsest mesh'],
        answer: 0,
        explanation: 'Step 1: Successive changes are 2.4% and 0.8% — inside the customary 5% acceptance band. Step 2: The trend is decaying geometrically, the signature of convergence, with an extrapolated limit ≈ 130.5 MPa. Step 3: Reporting ≈ 130 MPa with the refinement history attached is the professional answer.',
      },
      {
        q: 'Verification of a finite element model is best described as',
        options: ['proving the model matches physical test data', 'showing the equations are solved correctly via convergence and benchmark problems', 'obtaining a mesh with all elements passing quality checks', 'having a senior engineer review the color plots'],
        answer: 1,
        explanation: 'Step 1: Verification = "solving the equations right": mesh convergence studies, patch tests, closed-form benchmarks like the tip-loaded cantilever. Step 2: Validation = "solving the right equations": comparison with experiment. Step 3: Mesh quality and reviews support both but are neither — the distinction is exactly what examiners and design reviews probe.',
      },
      {
        q: 'Which check most reliably catches a Young\'s modulus entered with the wrong unit prefix?',
        options: ['Summing reaction forces', 'Comparing contour colors between runs', 'Plotting the deformed shape at true scale', 'Checking that stress equals force over area'],
        answer: 2,
        explanation: 'Step 1: A wrong E scales every stiffness identically; equilibrium still holds, so reactions balance perfectly. Step 2: Stresses $E\\varepsilon$ can even come out accidentally correct because the E error and strain error cancel. Step 3: Only displacements carry the full 1000× signature — and the deformed shape at true scale makes it visually undeniable.',
      },
    ],
  },
]
