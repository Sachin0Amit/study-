import type { SectionContent } from "../library";

export const solidsMfgTopupContent: SectionContent[] = [
  {
    sectionId: "me-e-strength-s2",
    readingTime: 10,
    intro: "Real components rarely carry simple uniaxial stress: a shaft surface feels bending and torsion at the same time. A theory of failure converts that combined state into a single equivalent stress that can be compared against data from a simple tension test. This section builds the three classical theories and applies them numerically to a loaded shaft.",
    objectives: [
      "Explain why uniaxial test data cannot be applied directly to combined stress states",
      "State the Rankine, Tresca and von Mises criteria with their stress formulas",
      "Compute principal stresses and equivalent stresses for combined bending and torsion",
      "Select the appropriate theory for ductile and brittle materials and justify the choice",
    ],
    concepts: [
      {
        term: "Maximum principal stress theory",
        kind: "law",
        statement: "Failure is predicted when the numerically largest principal stress reaches the uniaxial limit: $\\max(|\\sigma_1|, |\\sigma_2|, |\\sigma_3|) \\ge S$.",
        detail: "Proposed by Rankine, this theory treats the tensile and compressive limits as symmetrical. It matches the brittle fracture behaviour of grey cast iron and glass, where yielding never appears; for ductile metals in shear-heavy states it badly misjudges the onset of yielding.",
      },
      {
        term: "Maximum shear stress theory (Tresca)",
        kind: "law",
        statement: "Yielding starts when $\\tau_{max} = (\\sigma_1 - \\sigma_3)/2$ reaches $S_y/2$, the shear stress at yield in a tension test.",
        detail: "Also called Guest's theory, it produces a hexagonal yield locus on the stress plane. It is slightly conservative for ductile steel: experimental yield points fall between the Tresca hexagon and the von Mises ellipse.",
      },
      {
        term: "Distortion energy theory (von Mises)",
        kind: "law",
        statement: "Yielding starts when $\\sigma_{vm} = \\sqrt{\\sigma_1^2 - \\sigma_1\\sigma_2 + \\sigma_2^2}$ (plane stress) reaches $S_y$.",
        detail: "The hydrostatic part of the stress state does no damage; only the distorting part drives plastic flow. Torsion tests on ductile metals agree with this theory within a few percent, which is why steel design codes adopt it.",
      },
      {
        term: "Principal stresses at a shaft surface",
        kind: "method",
        statement: "For a surface point carrying $\\sigma_x$ and $\\tau_{xy}$: $\\sigma_{1,2} = \\sigma_x/2 \\pm \\sqrt{(\\sigma_x/2)^2 + \\tau_{xy}^2}$.",
        detail: "Bending produces $\\sigma_x$ and torsion produces $\\tau_{xy}$ at the same surface fibre, so this conversion is the routine first step in a shaft check. The principal planes sit at $\\theta_p = \\frac{1}{2}\\arctan(2\\tau_{xy}/\\sigma_x)$ from the shaft axis.",
      },
      {
        term: "Choosing a theory",
        kind: "insight",
        statement: "Ductile metals: design with von Mises and bound with Tresca. Brittle materials: use Rankine.",
        detail: "In pure shear Tresca predicts yield at $0.5 S_y$ while von Mises predicts $0.577 S_y$ — a 15.5 percent spread that neatly brackets the experimental scatter of ductile metals.",
      },
      {
        term: "Factor of safety on equivalent stress",
        kind: "notation",
        statement: "$n = S_y/\\sigma_{eq}$, with $\\sigma_{eq}$ computed by whichever theory the designer selects.",
        detail: "Because each theory produces a different equivalent stress, a reported factor of safety must always name its basis. Mixing theories between the calculation and the conclusion is a classic design-review finding.",
      },
    ],
    examples: [
      {
        title: "Rankine vs Tresca vs von Mises on a 60 mm shaft",
        problem: "A solid shaft of 60 mm diameter carries a bending moment of 3 kN·m and a torque of 5 kN·m at its critical section. The steel yields at 300 MPa. Compare the factors of safety predicted by the three classical theories at the shaft surface.",
        steps: [
          {
            label: "Surface stresses",
            text: "$\\sigma = 32M/(\\pi d^3) = 32(3\\times10^6)/(\\pi (60)^3) = 141.5$ MPa, and $\\tau = 16T/(\\pi d^3) = 16(5\\times10^6)/(\\pi (60)^3) = 117.9$ MPa.",
          },
          {
            label: "Principal stresses",
            text: "$\\sigma_{1,2} = 70.7 \\pm \\sqrt{70.7^2 + 117.9^2} = 70.7 \\pm 137.5$, so $\\sigma_1 = 208.2$ MPa and $\\sigma_2 = -66.8$ MPa.",
          },
          {
            label: "Rankine check",
            text: "The largest principal stress is 208.2 MPa, giving $n = 300/208.2 = 1.44$.",
          },
          {
            label: "Tresca check",
            text: "$\\sigma_1 - \\sigma_2 = 275.0$ MPa, giving $n = 300/275.0 = 1.09$.",
          },
          {
            label: "von Mises check",
            text: "$\\sigma_{vm} = \\sqrt{(208.2)^2 - (208.2)(-66.8) + (66.8)^2} = 248.4$ MPa, giving $n = 300/248.4 = 1.21$.",
          },
        ],
        result: "Tresca governs with n = 1.09, von Mises gives 1.21 and Rankine 1.44; the ductile-material design is judged on von Mises with Tresca as the conservative bound.",
      },
    ],
    keyTakeaways: [
      "For ductile shafts under combined bending and torsion, Tresca and von Mises are the working criteria; Rankine is reserved for brittle materials.",
      "Convert the surface stress state to principal stresses first: $\\sigma_{1,2} = \\sigma/2 \\pm \\sqrt{(\\sigma/2)^2 + \\tau^2}$.",
      "Tresca runs up to 15.5 percent more conservative than von Mises in shear-dominated loading.",
    ],
    quiz: [
      {
        q: "A shaft surface carries $\\sigma_x = 120$ MPa and $\\tau_{xy} = 50$ MPa. What are the principal stresses?",
        options: [
          "120.0 and 50.0 MPa",
          "78.1 and -18.1 MPa",
          "138.1 and -18.1 MPa",
          "110.0 and 10.0 MPa",
        ],
        answer: 2,
        explanation: "$\\sigma_{1,2} = 60 \\pm \\sqrt{60^2 + 50^2} = 60 \\pm 78.1$, giving 138.1 MPa and -18.1 MPa.",
      },
      {
        q: "For ductile steel under pure shear, the von Mises criterion predicts yielding when the shear stress reaches:",
        options: ["0.5 Sy", "0.866 Sy", "2 Sy", "0.577 Sy"],
        answer: 3,
        explanation: "In pure shear $\\sigma_{vm} = \\sqrt{3}\\tau$, so yield occurs at $\\tau = S_y/\\sqrt{3} = 0.577 S_y$; Tresca gives the lower 0.5 Sy.",
      },
      {
        q: "In the worked shaft example ($\\sigma = 141.5$ MPa, $\\tau = 117.9$ MPa, Sy = 300 MPa), which theory gives the smallest factor of safety?",
        options: ["Rankine", "Tresca", "von Mises", "All three give the same value"],
        answer: 1,
        explanation: "Tresca gives 300/275 = 1.09, below von Mises at 1.21 and Rankine at 1.44, so Tresca is the most conservative here.",
      },
      {
        q: "A grey cast iron bracket is loaded in combined stress. Which failure theory is most appropriate?",
        options: ["von Mises", "Tresca", "Rankine maximum principal stress", "Distortion energy"],
        answer: 2,
        explanation: "Cast iron is brittle and fails by rupture without yielding, so the maximum principal stress theory is the accepted choice.",
      },
      {
        q: "With $\\sigma_1 = 208.2$ MPa and $\\sigma_2 = -66.8$ MPa in plane stress, the maximum shear stress is:",
        options: ["275.0 MPa", "70.7 MPa", "117.9 MPa", "137.5 MPa"],
        answer: 3,
        explanation: "$\\tau_{max} = (\\sigma_1 - \\sigma_3)/2$ with $\\sigma_3 = 0$, so $(208.2 - (-66.8))/2 = 137.5$ MPa.",
      },
    ],
  },
  {
    sectionId: "me-e-strength-s3",
    readingTime: 10,
    intro: "Beams resist transverse loads through a linear distribution of bending stress over the depth and a parabolic distribution of shear stress. The flexure formula turns the bending check into a one-line computation once the second moment of area is known, while the shear formula flags where the web of a thin section is in danger. This section works both distributions on a real timber joist.",
    objectives: [
      "Compute bending stress with $\\sigma = My/I$ for a rectangular section",
      "Determine the second moment of area and section modulus of standard shapes",
      "Trace the parabolic shear distribution $\\tau = VQ/(Ib)$ across a rectangle",
      "Judge whether bending or shear governs a given beam design",
    ],
    concepts: [
      {
        term: "Flexure formula",
        kind: "law",
        statement: "$\\sigma = My/I$ — bending stress grows linearly from zero at the neutral axis to a maximum at the extreme fibres.",
        detail: "It assumes a prismatic, homogeneous, linear-elastic beam bent about a centroidal principal axis, with plane sections remaining plane and deflections small. It is the single most used equation in structural design.",
      },
      {
        term: "Second moment of area",
        kind: "notation",
        statement: "$I = \\int y^2 dA$; for a rectangle $bh^3/12$, and the parallel-axis theorem gives $I = I_c + Ad^2$.",
        detail: "I measures how far the area sits from the neutral axis. Because depth enters as a cube, one extra millimetre of depth buys far more stiffness than an extra millimetre of width.",
      },
      {
        term: "Section modulus",
        kind: "definition",
        statement: "$Z = I/y_{max}$, so the design check collapses to $\\sigma_{max} = M/Z$.",
        detail: "Steel tables list Z so a designer can size a beam in one division. A rectangle of width b and depth h has $Z = bh^2/6$.",
      },
      {
        term: "Shear stress distribution",
        kind: "law",
        statement: "$\\tau = VQ/(Ib)$ — parabolic over the depth of a rectangular section, peaking at the neutral axis.",
        detail: "Q is the first moment of the area above the level considered. In I-beams the web carries nearly all the shear while the flanges carry the bending, which is why web checks matter in short, heavily loaded spans.",
      },
      {
        term: "Maximum shear in a rectangle",
        kind: "insight",
        statement: "$\\tau_{max} = 1.5 V/A$ — fifty percent above the average shear stress.",
        detail: "For a solid circle the corresponding factor is 4/3, and for a thin-walled I-section the web average is close to the peak. This is why short deep beams and thin webs are checked for shear before anything else.",
      },
      {
        term: "Bending or shear?",
        kind: "insight",
        statement: "Long slender beams are governed by bending; short deep beams and thin webs are governed by shear.",
        detail: "Bending stress scales with moment, which grows with span squared under distributed load, while shear stays tied to the magnitude of the load itself.",
      },
    ],
    examples: [
      {
        title: "Bending and shear stresses in a 60 x 120 mm joist",
        problem: "A simply supported timber joist of rectangular cross-section 60 mm wide and 120 mm deep carries a bending moment of 8 kN·m and a transverse shear force of 20 kN at the critical section. Compute the maximum bending stress and the maximum shear stress, and sketch the two distributions.",
        steps: [
          {
            label: "Section inertia",
            text: "$I = bh^3/12 = 60(120)^3/12 = 8.64\\times10^6$ mm⁴.",
          },
          {
            label: "Extreme-fibre bending stress",
            text: "$\\sigma = My/I = (8\\times10^6)(60)/(8.64\\times10^6) = 55.6$ MPa at the top and bottom faces, zero at mid-depth.",
          },
          {
            label: "Peak shear at the neutral axis",
            text: "$\\tau_{max} = 1.5V/A = 1.5(20000)/(60 \\times 120) = 4.17$ MPa.",
          },
          {
            label: "Shape of the distributions",
            text: "Bending stress is linear from -55.6 MPa at the top through zero at the neutral axis to +55.6 MPa at the bottom, while shear is 4.17 MPa at the neutral axis and falls parabolically to zero at both faces.",
          },
        ],
        result: "Bending governs visibly: $\\sigma_{max} = 55.6$ MPa at the extreme fibres, while $\\tau_{max} = 4.17$ MPa sits at the neutral axis.",
      },
    ],
    keyTakeaways: [
      "Depth enters I as a cube: lying the 60 x 120 joist flat divides I by four and doubles the bending stress.",
      "Shear peaks at the neutral axis at 1.5 V/A in a rectangle and falls parabolically to zero at the faces.",
      "The flexure formula is only as good as its assumptions: linear-elastic material, plane sections and small deflections.",
    ],
    quiz: [
      {
        q: "For the worked joist (V = 20 kN, peak shear 4.17 MPa), the shear stress 30 mm above the neutral axis is closest to:",
        options: ["4.17 MPa", "2.08 MPa", "3.13 MPa", "0 MPa"],
        answer: 2,
        explanation: "The parabola gives $\\tau = \\tau_{max}[1 - (2y/h)^2] = 4.17(1 - 0.25) = 3.13$ MPa.",
      },
      {
        q: "If the same joist is turned flat (120 mm wide, 60 mm deep) but carries the same 8 kN·m moment, the maximum bending stress becomes:",
        options: ["55.6 MPa", "111.1 MPa", "27.8 MPa", "Unchanged"],
        answer: 1,
        explanation: "Flat orientation: $I = 120(60)^3/12 = 2.16\\times10^6$ mm⁴, so $\\sigma = (8\\times10^6)(30)/(2.16\\times10^6) = 111.1$ MPa — double.",
      },
      {
        q: "Doubling only the depth of a rectangular beam changes the maximum bending stress by a factor of:",
        options: ["1/2", "1/4", "1/8", "2"],
        answer: 1,
        explanation: "$\\sigma_{max} = 6M/(bh^2)$ is proportional to $1/h^2$, so doubling h divides the stress by four.",
      },
      {
        q: "The flexure formula $\\sigma = My/I$ requires which of the following?",
        options: [
          "Plane sections remain plane and the material is linear elastic",
          "Large deflections are present",
          "A plastic hinge has formed",
          "Shear deformation dominates",
        ],
        answer: 0,
        explanation: "The derivation needs the linear strain distribution that follows from plane sections remaining plane, plus linear-elastic material response and small deflections.",
      },
      {
        q: "For a solid rectangular section, the maximum shear stress exceeds the average V/A by a factor of:",
        options: ["1.2", "1.33", "1.5", "2.0"],
        answer: 2,
        explanation: "Integrating the parabolic distribution gives $\\tau_{max} = 1.5 V/A$; the 1.33 factor belongs to solid circles.",
      },
    ],
  },
  {
    sectionId: "me-e-strength-s4",
    readingTime: 10,
    intro: "Torsion loads the outer fibres of a shaft in pure shear, and most real shafts also carry bending. This section applies the torsion formula, links torque to transmitted power, and builds the equivalent-moment and equivalent-torque shortcuts that routine shaft design relies on.",
    objectives: [
      "Compute shear stress and angle of twist with $\\tau = Tr/J$ and $\\theta = TL/(GJ)$",
      "Convert motor power and speed into shaft torque",
      "Combine bending and torque using $T_e$ and $M_e$",
      "Explain why hollow shafts use material more efficiently",
    ],
    concepts: [
      {
        term: "Torsion formula",
        kind: "law",
        statement: "$\\tau = Tr/J$ — shear stress grows linearly from zero at the centre to a peak at the outer surface.",
        detail: "Valid for circular shafts of elastic material at small twist angles. Non-circular sections warp and develop corner stresses that this formula cannot see.",
      },
      {
        term: "Polar second moment of area",
        kind: "notation",
        statement: "Solid shaft: $J = \\pi d^4/32$. Hollow shaft: $J = \\pi (D^4 - d^4)/32$.",
        detail: "Because J scales with the fourth power of diameter, doubling d cuts the shear stress by a factor of eight — shaft sizing is very sensitive to diameter.",
      },
      {
        term: "Power, speed and torque",
        kind: "method",
        statement: "$T = 60P/(2\\pi N)$ with P in watts and N in rpm.",
        detail: "This relation supplies the torque for any driven machine, from a gearbox input shaft to a mixer, straight from the nameplate power and speed.",
      },
      {
        term: "Angle of twist",
        kind: "method",
        statement: "$\\theta = TL/(GJ)$ in radians over length L.",
        detail: "Stiffness, not strength, often sizes long shafts: a line shaft can be stress-safe yet twist enough to upset gear timing and coupling alignment.",
      },
      {
        term: "Equivalent moment and torque",
        kind: "method",
        statement: "$T_e = \\sqrt{M^2 + T^2}$ and $M_e = (M + \\sqrt{M^2 + T^2})/2$.",
        detail: "These lump combined loading into single pseudo-loads: $\\tau_{max} = 16T_e/(\\pi d^3)$ and $\\sigma_{max} = 32M_e/(\\pi d^3)$. They embed the maximum-shear theory, so they are inherently a ductile-design tool.",
      },
      {
        term: "Hollow shaft advantage",
        kind: "insight",
        statement: "Moving material away from the axis raises torque capacity per unit mass, so a tube beats a solid bar of equal weight.",
        detail: "A bore of half the outside diameter keeps 93.75 percent of the capacity while shedding 25 percent of the weight — the classic argument for propeller shafts and driveshaft tubes.",
      },
    ],
    examples: [
      {
        title: "Torque plus bending on a 60 mm line shaft",
        problem: "A solid 60 mm shaft transmits a steady torque of 1.5 kN·m while a bending moment of 2 kN·m acts at the same section. Compute the torsional shear alone, then the equivalent torque and equivalent moment for the combined state.",
        steps: [
          {
            label: "Torsional shear",
            text: "$J = \\pi (60)^4/32 = 1.272\\times10^6$ mm⁴, so $\\tau = Tr/J = (1.5\\times10^6)(30)/(1.272\\times10^6) = 35.4$ MPa.",
          },
          {
            label: "Bending stress",
            text: "$\\sigma = 32M/(\\pi d^3) = 32(2\\times10^6)/(\\pi (60)^3) = 94.3$ MPa at the surface fibre.",
          },
          {
            label: "Equivalent torque",
            text: "$T_e = \\sqrt{2^2 + 1.5^2} = 2.5$ kN·m, giving $\\tau_e = 16T_e/(\\pi d^3) = 16(2.5\\times10^6)/(\\pi (60)^3) = 58.9$ MPa.",
          },
          {
            label: "Equivalent moment",
            text: "$M_e = (2 + 2.5)/2 = 2.25$ kN·m, giving $\\sigma_e = 32M_e/(\\pi d^3) = 32(2.25\\times10^6)/(\\pi (60)^3) = 106.1$ MPa.",
          },
        ],
        result: "Combined loading raises peak shear from 35.4 to 58.9 MPa and peak normal stress to 106.1 MPa via $T_e = 2.5$ kN·m and $M_e = 2.25$ kN·m.",
      },
    ],
    keyTakeaways: [
      "$\\tau = Tr/J$ with $J = \\pi d^4/32$ for solid circular shafts; the fourth power makes diameter the dominant design variable.",
      "$T_e = \\sqrt{M^2 + T^2}$ and $M_e = (M + \\sqrt{M^2 + T^2})/2$ collapse combined loading into single design quantities.",
      "Hollow shafts deliver similar torque capacity at markedly lower weight because material near the axis is barely stressed.",
    ],
    quiz: [
      {
        q: "A solid shaft of 50 mm diameter carries a torque of 2 kN·m. The maximum shear stress is nearest to:",
        options: ["40.8 MPa", "163.0 MPa", "32.6 MPa", "81.5 MPa"],
        answer: 3,
        explanation: "$J = \\pi (50)^4/32 = 6.14\\times10^5$ mm⁴ and $\\tau = (2\\times10^6)(25)/(6.14\\times10^5) = 81.5$ MPa.",
      },
      {
        q: "A shaft transmitting 1.5 kN·m of torque at 300 rpm carries approximately how much power?",
        options: ["15.7 kW", "94.2 kW", "47.1 kW", "157 kW"],
        answer: 2,
        explanation: "$P = 2\\pi NT/60 = 2\\pi (300)(1500)/60 = 47\\,124$ W, about 47.1 kW.",
      },
      {
        q: "For M = 2 kN·m and T = 1.5 kN·m, the equivalent torque $T_e$ is:",
        options: ["2.5 kN·m", "3.5 kN·m", "1.75 kN·m", "2.25 kN·m"],
        answer: 0,
        explanation: "$T_e = \\sqrt{2^2 + 1.5^2} = \\sqrt{6.25} = 2.5$ kN·m; 2.25 kN·m is the equivalent moment.",
      },
      {
        q: "Replacing a solid shaft by a hollow one of the same material and mass typically:",
        options: ["Decreases torque capacity", "Increases torque capacity", "Leaves capacity unchanged", "Halves capacity"],
        answer: 1,
        explanation: "Removing lightly stressed material near the axis and redistributing it outward raises J for the same area, so capacity increases.",
      },
      {
        q: "The angle of twist of a circular shaft over length L is:",
        options: [
          "$\\theta = TL/(GJ)$",
          "$\\theta = TLJ/G$",
          "$\\theta = GJ/(TL)$",
          "$\\theta = TJ/(GL)$",
        ],
        answer: 0,
        explanation: "Integrating the shear strain along the shaft gives $\\theta = TL/(GJ)$, in radians.",
      },
    ],
  },
  {
    sectionId: "me-e-strength-s5",
    readingTime: 10,
    intro: "Strength checks say nothing about whether a floor feels springy or a gear misaligns under load. Deflection analysis starts from the moment-curvature equation and follows it through the double-integration method, the Macaulay bracket trick for discontinuous loads, and superposition of standard cases — with a fully worked cantilever.",
    objectives: [
      "Set up and integrate $EI\\, d^2y/dx^2 = M(x)$ with correct boundary conditions",
      "Use Macaulay brackets to handle offset point loads in a single expression",
      "Combine standard deflection cases by superposition",
      "Compare stiffness-limited and strength-limited designs",
    ],
    concepts: [
      {
        term: "Moment-curvature equation",
        kind: "law",
        statement: "$EI\\, d^2y/dx^2 = M(x)$: curvature at a section equals the bending moment divided by the flexural rigidity EI.",
        detail: "The product EI is the flexural rigidity; for a given moment, doubling I halves the curvature. Slope and deflection follow from two successive integrations.",
      },
      {
        term: "Double integration method",
        kind: "method",
        statement: "Integrate $M(x)$ twice and evaluate the two constants from boundary conditions such as zero deflection at a support or zero slope at a wall.",
        detail: "For simply supported beams, y = 0 at both ends; for cantilevers, both y and the slope vanish at the fixed end. Mis-applied constants are the most common source of wrong deflection answers.",
      },
      {
        term: "Macaulay brackets",
        kind: "notation",
        statement: "The term $\\langle x - a \\rangle^n$ is zero when $x < a$ and $(x-a)^n$ when $x \ge a$.",
        detail: "Brackets let one continuous expression for M(x) absorb the discontinuity of an offset load, so a single double integration serves the whole span. Integrate each bracket as a whole power, never expanding it.",
      },
      {
        term: "Superposition",
        kind: "method",
        statement: "For linear-elastic, small-deflection beams, the deflection under several loads equals the sum of the deflections from each load acting alone.",
        detail: "It converts an awkward combined load into table lookups of standard cases: end-loaded cantilever $PL^3/(3EI)$, uniformly loaded cantilever $wL^4/(8EI)$, midspan-loaded simply supported beam $PL^3/(48EI)$.",
      },
      {
        term: "Stiffness versus strength",
        kind: "insight",
        statement: "Stress depends on the section modulus Z; deflection depends on I — and deflection is often the binding constraint.",
        detail: "Machine elements are commonly limited to a few tenths of a millimetre of deflection long before the material approaches yield, which is why depth and support spacing dominate layout decisions.",
      },
      {
        term: "Standard case library",
        kind: "definition",
        statement: "Cantilever, end load: $PL^3/(3EI)$; cantilever, uniform load: $wL^4/(8EI)$; simply supported, midspan load: $PL^3/(48EI)$.",
        detail: "Memorising three or four cases plus superposition covers most hand checks; nearly every other configuration is a combination of these building blocks.",
      },
    ],
    examples: [
      {
        title: "Tip deflection of a cantilever with an offset load",
        problem: "A 2 m long cantilever of rectangular section 60 mm wide by 120 mm deep (E = 200 GPa) carries a 2 kN point load applied 1.5 m from the wall. Use Macaulay brackets to find the tip deflection and verify the result against the standard-case formula.",
        steps: [
          {
            label: "Wall reactions",
            text: "$R_A = 2$ kN upward and $M_A = 2(1.5) = 3$ kN·m at the fixed end.",
          },
          {
            label: "Bracketed moment",
            text: "With x measured from the wall in mm: $M(x) = 3\\times10^6 - 2000x + 2000\\langle x - 1500\\rangle$ N·mm.",
          },
          {
            label: "Two integrations",
            text: "$EIy' = 3\\times10^6 x - 1000x^2 + 1000\\langle x - 1500\\rangle^2$ and $EIy = 1.5\\times10^6 x^2 - 333.3x^3 + 333.3\\langle x - 1500\\rangle^3$, with both constants zero because slope and deflection vanish at the wall.",
          },
          {
            label: "Evaluate at the tip",
            text: "At x = 2000: $EIy = 6.0\\times10^{12} - 2.667\\times10^{12} + 0.0417\\times10^{12} = 3.375\\times10^{12}$ N·mm³.",
          },
          {
            label: "Divide by EI",
            text: "$EI = 200000 \\times 8.64\\times10^6 = 1.728\\times10^{12}$ N·mm², so $y = 3.375\\times10^{12}/1.728\\times10^{12} = 1.95$ mm downward.",
          },
          {
            label: "Superposition check",
            text: "The standard case gives $y = Pa^2(3L - a)/(6EI) = 2000(1500)^2(4500)/(6 \\times 1.728\\times10^{12}) = 1.95$ mm — identical.",
          },
        ],
        result: "Tip deflection = 1.95 mm downward, confirmed by both the Macaulay integration and the standard-case formula.",
      },
    ],
    keyTakeaways: [
      "$EI\\, d^2y/dx^2 = M(x)$: two integrations plus boundary conditions deliver slope and deflection.",
      "Macaulay brackets $\\langle x - a \\rangle$ switch on at the load position, keeping one expression for the whole span.",
      "Superposition of standard cases turns complex loading into table lookups, valid only while behaviour stays linear and deflections stay small.",
    ],
    quiz: [
      {
        q: "In Macaulay notation, the term $\\langle x - a \\rangle^3$ is treated as zero when:",
        options: ["x > a", "x = a only", "x < a", "It is always zero"],
        answer: 2,
        explanation: "A bracket term activates only once the section passes the load position, that is when x reaches or exceeds a.",
      },
      {
        q: "A simply supported beam of 3 m span carries a 10 kN central load. With $I = 8.64\\times10^6$ mm⁴ and E = 200 GPa, the midspan deflection is about:",
        options: ["1.63 mm", "3.26 mm", "6.51 mm", "13.0 mm"],
        answer: 1,
        explanation: "$\delta = PL^3/(48EI) = (10^4)(3000)^3/(48 \\times 1.728\\times10^{12}) = 3.26$ mm.",
      },
      {
        q: "Superposition of beam deflections is valid only when:",
        options: [
          "Deflections stay small and the material is linear elastic",
          "The loads are applied simultaneously",
          "The beam is statically determinate",
          "Shear deformation is included",
        ],
        answer: 0,
        explanation: "The method relies on the linear relationship between load and deflection, which requires small deflections and linear-elastic material behaviour.",
      },
      {
        q: "In the worked cantilever, moving the 2 kN load from 1.5 m to the 2 m tip increases the tip deflection to:",
        options: ["1.95 mm", "2.60 mm", "3.09 mm", "4.11 mm"],
        answer: 2,
        explanation: "$\delta = PL^3/(3EI) = 2000(2000)^3/(3 \\times 1.728\\times10^{12}) = 3.09$ mm.",
      },
      {
        q: "In the equation $EI\\, d^2y/dx^2 = M(x)$, the quantity $M(x)$ is:",
        options: ["The shear force", "The bending moment at section x", "The load intensity", "The slope of the elastic curve"],
        answer: 1,
        explanation: "The second derivative of the deflection curve equals the bending moment divided by the flexural rigidity — the moment-curvature relation.",
      },
    ],
  },
  {
    sectionId: "me-e-strength-s6",
    readingTime: 10,
    intro: "Struts and springs pack subtle mechanics into small components. Columns fail by sideways buckling governed as much by end fixity as by slenderness, while close-coiled springs concentrate stress through curvature at the inner coil surface. This section quantifies both with formulas a designer can apply in one line each.",
    objectives: [
      "Compute Euler buckling loads with effective-length factors K",
      "Rank end conditions by their effect on column capacity",
      "Compute close-coiled spring stress including the Wahl factor",
      "Predict spring deflection and spring rate",
    ],
    concepts: [
      {
        term: "Euler buckling load",
        kind: "law",
        statement: "$P_{cr} = \\pi^2 E I / L_e^2$, with effective length $L_e = KL$.",
        detail: "The column pops sideways when the load reaches this value — a stability failure, not a material one. The formula is exact for a perfectly straight, pin-ended, concentrically loaded column and optimistic for real imperfect members.",
      },
      {
        term: "Effective length factor",
        kind: "notation",
        statement: "K = 1 pinned-pinned, 0.5 fixed-fixed, 2 fixed-free, about 0.7 fixed-pinned.",
        detail: "Because $L_e$ is squared, fixity is dramatically valuable: halving the effective length quadruples the buckling load. Design codes tabulate K values for partially restrained ends.",
      },
      {
        term: "Slenderness ratio",
        kind: "definition",
        statement: "$\\lambda = L_e/k$ with $k = \\sqrt{I/A}$; Euler theory suits long columns with high $\\lambda$.",
        detail: "The Euler critical stress $\\pi^2 E/\\lambda^2$ falls below yield only past a limiting slenderness. Stockier columns fail by yielding or crushing and need empirical or code formulas.",
      },
      {
        term: "Close-coiled spring stress",
        kind: "law",
        statement: "$\\tau = K_w \\cdot 8FD/(\\pi d^3)$ for axial load F, mean coil diameter D and wire diameter d.",
        detail: "The bare expression $8FD/(\\pi d^3)$ ignores direct shear across the wire and the stress concentration where curvature strains the inner fibres hardest. Both effects are folded into the Wahl factor.",
      },
      {
        term: "Wahl correction factor",
        kind: "notation",
        statement: "$K_w = (4C - 1)/(4C - 4) + 0.615/C$ where $C = D/d$ is the spring index.",
        detail: "Small indices (C below about 4) push $K_w$ above 1.4 and punish the inner coil surface; C between 6 and 10 is the comfortable design zone.",
      },
      {
        term: "Spring rate",
        kind: "method",
        statement: "$\\delta = 8FD^3 n/(Gd^4)$ and $k = Gd^4/(8D^3 n)$ for n active coils.",
        detail: "The fourth power of wire diameter makes spring rate exquisitely sensitive to tolerance — one wire gauge up can change stiffness by tens of percent.",
      },
    ],
    examples: [
      {
        title: "End fixity on a 50 x 50 mm strut",
        problem: "A 2 m long column of 50 mm square mild-steel section (E = 200 GPa) is loaded concentrically. Compare the Euler buckling load for pinned ends, fixed ends, and one end fixed with the other free.",
        steps: [
          {
            label: "Section inertia",
            text: "$I = b^4/12 = 50^4/12 = 5.21\\times10^5$ mm⁴ about either centroidal axis.",
          },
          {
            label: "Pinned-pinned (K = 1)",
            text: "$L_e = 2000$ mm, so $P_{cr} = \\pi^2 (200000)(5.21\\times10^5)/(2000)^2 = 257$ kN.",
          },
          {
            label: "Fixed-fixed (K = 0.5)",
            text: "$L_e = 1000$ mm, so the load quadruples to $P_{cr} = 1028$ kN.",
          },
          {
            label: "Fixed-free (K = 2)",
            text: "$L_e = 4000$ mm, so the load drops to $P_{cr} = 64$ kN.",
          },
        ],
        result: "Pcr = 257 kN pinned, 1028 kN fixed-fixed and 64 kN fixed-free — a sixteen-fold swing from end fixity alone.",
      },
      {
        title: "Wahl stress and deflection of a helical spring",
        problem: "A close-coiled spring is wound from 8 mm wire on a 48 mm mean coil diameter with 10 active coils (G = 80 GPa). At a maximum axial load of 1.5 kN, compute the peak shear stress, the deflection and the spring rate.",
        steps: [
          {
            label: "Index and Wahl factor",
            text: "$C = 48/8 = 6$, so $K_w = 23/20 + 0.615/6 = 1.15 + 0.103 = 1.25$.",
          },
          {
            label: "Peak shear stress",
            text: "$\\tau = 1.25(8)(1500)(48)/(\\pi (8)^3) \\approx 448$ MPa at the inner coil surface.",
          },
          {
            label: "Deflection",
            text: "$\\delta = 8(1500)(48)^3(10)/(80000(8)^4) = 40.5$ mm.",
          },
          {
            label: "Spring rate",
            text: "$k = F/\\delta = 1500/40.5 = 37$ N/mm, matching $Gd^4/(8D^3 n)$.",
          },
        ],
        result: "Peak stress about 448 MPa, deflection 40.5 mm and spring rate 37 N/mm.",
      },
    ],
    keyTakeaways: [
      "$P_{cr} = \\pi^2 EI/(KL)^2$: because effective length is squared, end fixity is worth quadruple per halving of $L_e$.",
      "The Wahl factor $K_w = (4C-1)/(4C-4) + 0.615/C$ corrects spring shear stress for curvature and direct shear.",
      "Spring stiffness scales with $d^4$, so wire-diameter tolerance dominates rate control.",
    ],
    quiz: [
      {
        q: "Doubling the effective length of a long column changes the Euler load by a factor of:",
        options: ["1/2", "1/4", "1/8", "2"],
        answer: 1,
        explanation: "$P_{cr} \\propto 1/L_e^2$, so doubling $L_e$ quarters the buckling load.",
      },
      {
        q: "For a spring index C = 6, the Wahl correction factor is closest to:",
        options: ["1.05", "1.45", "1.15", "1.25"],
        answer: 3,
        explanation: "$K_w = (24-1)/(24-4) + 0.615/6 = 1.15 + 0.1025 \\approx 1.25$.",
      },
      {
        q: "In the worked example, fixing both ends of the 2 m column raises Pcr from 257 kN to:",
        options: ["514 kN", "128 kN", "1028 kN", "64 kN"],
        answer: 2,
        explanation: "K drops from 1 to 0.5, halving $L_e$ and quadrupling the load: 4 x 257 = 1028 kN.",
      },
      {
        q: "The stiffness of a close-coiled spring varies with wire diameter d as:",
        options: ["d", "d²", "d³", "d⁴"],
        answer: 3,
        explanation: "$k = Gd^4/(8D^3 n)$, so stiffness is proportional to the fourth power of wire diameter.",
      },
      {
        q: "A column with one end fixed and the other free has an effective length of:",
        options: ["2 L", "L/2", "0.7 L", "L"],
        answer: 0,
        explanation: "The fixed-free condition has K = 2, the worst case, giving $L_e = 2L$.",
      },
    ],
  },
  {
    sectionId: "me-e-strength-s7",
    readingTime: 10,
    intro: "When a beam mixes materials or its section lacks symmetry, the plain flexure formula needs upgrading. This section converts composite sections using the modular ratio, locates the shear centre that keeps channels from twisting, and practises choosing sections that buy the most bending capacity per kilogram.",
    objectives: [
      "Analyse composite beams by the transformed-section method",
      "Compute the modular ratio and rescale stresses back to each material",
      "Locate the shear centre of a thin-walled channel",
      "Select sections on the basis of Z per unit area",
    ],
    concepts: [
      {
        term: "Transformed section",
        kind: "method",
        statement: "Replace material 2 by an equivalent strip $n$ times wider, with $n = E_2/E_1$, analyse as one material, then scale stresses back.",
        detail: "Strain compatibility demands equal strain at each fibre, and $\\sigma = E\\epsilon$ rescales stress across the bond line. The transformed section shares its neutral axis and inertia with the real composite.",
      },
      {
        term: "Modular ratio",
        kind: "notation",
        statement: "$n = E_{steel}/E_{wood} \\approx 20$ for a steel plate on timber.",
        detail: "The stiffer material is widened when transformed to the weaker one. Stresses read off the transformed section must be multiplied by n for the material that was replaced.",
      },
      {
        term: "Shear centre",
        kind: "definition",
        statement: "The point through which the resultant shear force must pass so the section bends without twisting.",
        detail: "For doubly symmetric sections it coincides with the centroid. For a thin-walled channel with uniform wall t, flange width b and depth h it sits $e = 3b^2/(6b + h)$ behind the web centre line, outside the metal.",
      },
      {
        term: "Unsymmetric bending",
        kind: "method",
        statement: "Resolve the moment onto the principal axes and superpose: $\\sigma = M_z y/I_z + M_y z/I_y$.",
        detail: "Angle sections loaded through the centroid still deflect sideways and twist because the load line misses both principal axes; only a load through the shear centre removes the twist.",
      },
      {
        term: "Section selection",
        kind: "method",
        statement: "For bending, maximise Z per unit area by placing material far from the neutral axis.",
        detail: "An I-section beats a square of the same area by a wide margin because the flanges sit where y is largest, and a hollow box adds torsional efficiency on top.",
      },
      {
        term: "Shape efficiency metric",
        kind: "insight",
        statement: "The ratio Z/A compares how much bending capacity a shape buys per unit of material.",
        detail: "A 60 x 120 rectangle gives Z = 144 cm³ from 72 cm², while a square of equal area gives only about 102 cm³ — a 41 percent gain from shape alone.",
      },
    ],
    examples: [
      {
        title: "Transformed section of a plated timber beam",
        problem: "An 80 mm x 160 mm timber beam (E = 10 GPa) has an 80 mm x 10 mm steel plate (E = 200 GPa) bonded to its tension face. For a bending moment of 6 kN·m, find the maximum timber stress and the steel stress at the plate surface.",
        steps: [
          {
            label: "Transform the plate",
            text: "$n = 200/10 = 20$, so the plate becomes a 1600 mm wide wood strip and the whole section is analysed as timber.",
          },
          {
            label: "Neutral axis",
            text: "Measuring from the plate bottom: $\\bar{y} = [16000(5) + 12800(90)]/28800 = 42.8$ mm.",
          },
          {
            label: "Transformed inertia",
            text: "$I = 1600(10)^3/12 + 16000(37.8)^2 + 80(160)^3/12 + 12800(47.2)^2 = 78.8\\times10^6$ mm⁴.",
          },
          {
            label: "Timber stress at the top fibre",
            text: "$\\sigma_w = My/I = (6\\times10^6)(127.2)/(78.8\\times10^6) = 9.7$ MPa.",
          },
          {
            label: "Steel stress",
            text: "$\\sigma_s = nMy/I = 20(6\\times10^6)(42.8)/(78.8\\times10^6) = 65$ MPa at the plate surface.",
          },
        ],
        result: "Timber 9.7 MPa, steel 65 MPa, and the neutral axis has moved from 90 mm to 42.8 mm toward the plate.",
      },
      {
        title: "Shear centre of a channel",
        problem: "A rolled channel has centerline flange width b = 50 mm, centerline depth h = 100 mm and uniform thickness t = 5 mm. Locate its shear centre.",
        steps: [
          {
            label: "Section inertia",
            text: "$I_x = th^3/12 + 2bt(h/2)^2 = 5(100)^3/12 + 2(50)(5)(50)^2 = 1.67\\times10^6$ mm⁴.",
          },
          {
            label: "Flange shear force",
            text: "Integrating shear flow from the flange tip: $F_f = Vtb^2h/(4I_x) = 0.1875V$ per newton of applied shear.",
          },
          {
            label: "Torque balance",
            text: "The flange pair applies torque $2F_f(h/2) = 18.75V$ N·mm per newton of V about the web centre, so the load line must pass 18.75 mm behind it.",
          },
          {
            label: "Closed form",
            text: "$e = 3b^2/(6b + h) = 3(50)^2/(300 + 100) = 18.75$ mm behind the web centre line, outside the metal.",
          },
        ],
        result: "The shear centre lies 18.75 mm behind the web; loading along the web itself would twist the channel.",
      },
    ],
    keyTakeaways: [
      "Transform with $n = E_2/E_1$, then multiply stresses of the replaced material by n.",
      "A channel shear centre sits outside the web at $e = 3b^2/(6b+h)$ — loads off this line twist the section.",
      "Shape buys bending capacity: for equal area, deep rectangles and I-sections dominate squares on Z/A.",
    ],
    quiz: [
      {
        q: "For the same cross-sectional area, which shape maximises bending efficiency Z/A?",
        options: ["Solid square", "Solid circle", "Wide-flange I-section", "Solid triangle"],
        answer: 2,
        explanation: "I-sections concentrate area in flanges far from the neutral axis, giving the highest Z per unit area of the four.",
      },
      {
        q: "In the worked composite beam, doubling the modular ratio while keeping the geometry would:",
        options: [
          "Shift the neutral axis toward the plate",
          "Shift the neutral axis toward the timber",
          "Leave the neutral axis unchanged",
          "Reduce the transformed inertia to zero",
        ],
        answer: 0,
        explanation: "A larger transformed plate area pulls the centroid, which is the neutral axis, closer to the plate.",
      },
      {
        q: "A transverse load applied along the web of a channel (not through the shear centre) produces:",
        options: ["Pure bending only", "Bending plus twisting of the section", "Pure torsion only", "No stress at all"],
        answer: 1,
        explanation: "The offset between the load line and the shear centre creates a torque, so the channel bends and twists together.",
      },
      {
        q: "In transformed-section analysis, the actual stress in the replaced material equals:",
        options: [
          "The transformed stress itself",
          "n times the transformed stress",
          "The transformed stress divided by n",
          "n squared times the transformed stress",
        ],
        answer: 1,
        explanation: "The weaker reference material was stretched to stand in for the stiffer one, so the true stress is n times the transformed value.",
      },
      {
        q: "If the channel flange width doubles to 100 mm (h = 100 mm unchanged), the shear-centre distance becomes:",
        options: ["9.4 mm", "18.75 mm", "37.5 mm", "42.9 mm"],
        answer: 3,
        explanation: "$e = 3(100)^2/(600 + 100) = 30000/700 = 42.9$ mm — shear centre distance grows with the square of flange width.",
      },
    ],
  },
  {
    sectionId: "me-e-strength-s8",
    readingTime: 10,
    intro: "Pressure vessels show stress analysis at its most elegant and its most dangerous. Thin-wall theory gives two one-line formulas that cover most drums and pipes, while thick cylinders need the Lame equations because hoop stress is far from uniform through the wall. This section works both regimes with numbers and explains why compound cylinders exist.",
    objectives: [
      "Compute hoop and longitudinal stresses in thin cylinders and spheres",
      "Judge when thin-wall assumptions break down",
      "Apply the Lame equations to thick cylinders under internal pressure",
      "Explain the strategy behind compound and wire-wound cylinders",
    ],
    concepts: [
      {
        term: "Thin-vessel assumption",
        kind: "definition",
        statement: "A cylinder is thin when $d/t \\ge 20$: wall stress is nearly uniform and radial stress is negligible.",
        detail: "The membrane picture treats the wall like a balloon skin, keeping errors within a few percent. Below the threshold the bore-to-surface gradient matters and Lame theory takes over.",
      },
      {
        term: "Hoop and longitudinal stress",
        kind: "law",
        statement: "Cylinder: $\\sigma_h = pd/(2t)$ and $\\sigma_l = pd/(4t)$ — the hoop stress is twice the longitudinal.",
        detail: "Circumferential slices need twice the membrane force per unit length of longitudinal slices, which is why circumferential seams and riveted joints were the weak link of early boilers.",
      },
      {
        term: "Lame equations",
        kind: "theorem",
        statement: "$\\sigma_r = A - B/r^2$ and $\\sigma_t = A + B/r^2$, with constants set by the bore and outside pressures.",
        detail: "Derived from thick-cylinder equilibrium with plane transverse sections remaining plane. Both stresses vary with $1/r^2$, so for internal pressure alone the peak always sits at the bore.",
      },
      {
        term: "Bore stress concentration",
        kind: "insight",
        statement: "For internal pressure only, hoop stress is maximum at the bore and decays toward the outer surface.",
        detail: "In the worked example the bore sees 78 MPa while the outside sees 48 MPa, and the thin-wall value of 60 MPa undershoots the true peak by 23 percent — simply adding wall thickness at the outside buys little.",
      },
      {
        term: "Compound cylinders",
        kind: "method",
        statement: "Shrink-fitting an outer cylinder pre-compresses the bore so applied pressure first cancels the residual stress.",
        detail: "The classic gun-barrel construction spreads peak hoop stress more evenly through the combined wall; wire winding achieves the same effect continuously for chemical plant vessels.",
      },
      {
        term: "Spherical vessel",
        kind: "law",
        statement: "$\\sigma = pd/(4t)$ in every direction of the shell.",
        detail: "The sphere is the most efficient pressure shape: no seam direction is weaker, and for the same d, t and p it halves the peak membrane stress of a cylinder.",
      },
    ],
    examples: [
      {
        title: "Thin-drum check",
        problem: "A compressed-air drum has a 1.0 m inner diameter and a 10 mm wall and holds 2 MPa gauge pressure. Compute the membrane stresses and confirm the thin-wall assumption.",
        steps: [
          {
            label: "Ratio check",
            text: "$d/t = 1000/10 = 100$, far above 20, so membrane theory applies.",
          },
          {
            label: "Hoop stress",
            text: "$\\sigma_h = pd/(2t) = 2(1000)/(2 \\times 10) = 100$ MPa.",
          },
          {
            label: "Longitudinal stress",
            text: "$\\sigma_l = pd/(4t) = 50$ MPa, exactly half the hoop value.",
          },
          {
            label: "Margin",
            text: "With the third principal stress near zero, maximum shear is about 50 MPa, so a boiler steel yielding at 250 MPa retains a factor of safety above two.",
          },
        ],
        result: "Hoop 100 MPa, longitudinal 50 MPa, with d/t = 100 confirming thin-wall theory.",
      },
      {
        title: "Lame stresses in a thick cylinder",
        problem: "A hydraulic cylinder has a 100 mm inner radius, a 150 mm outer radius and carries 30 MPa internal gauge pressure with atmospheric pressure outside. Find the hoop stress at the bore and at the outer surface.",
        steps: [
          {
            label: "Boundary conditions",
            text: "$\\sigma_r(100) = -30$ MPa and $\\sigma_r(150) = 0$ MPa.",
          },
          {
            label: "Solve for A and B",
            text: "Evaluating $A - B/r^2$ at both radii and subtracting gives $B = 5.4\\times10^5$ MPa·mm² and $A = 24$ MPa.",
          },
          {
            label: "Bore hoop stress",
            text: "$\\sigma_t = A + B/r^2 = 24 + 5.4\\times10^5/(100)^2 = 78$ MPa, sitting alongside $\\sigma_r = -30$ MPa.",
          },
          {
            label: "Outer surface",
            text: "$\\sigma_t = 24 + 5.4\\times10^5/(150)^2 = 48$ MPa.",
          },
          {
            label: "Thin-wall comparison",
            text: "The mean formula $pd/(2t) = 30(200)/(2 \\times 50) = 60$ MPa sits 23 percent below the true bore peak.",
          },
        ],
        result: "Hoop stress falls from 78 MPa at the bore to 48 MPa outside; the bore shear stress is (78 + 30)/2 = 54 MPa.",
      },
    ],
    keyTakeaways: [
      "Thin cylinder: $\\sigma_h = pd/2t$, $\\sigma_l = pd/4t$ — hoop is always twice longitudinal.",
      "Lame theory: $\\sigma_r = A - B/r^2$ and $\\sigma_t = A + B/r^2$ place the peak hoop stress at the bore.",
      "Compound cylinders pre-compress the bore with residual stress so applied pressure does less damage.",
    ],
    quiz: [
      {
        q: "A thin cylinder with d = 800 mm and t = 8 mm holds p = 1.5 MPa. The hoop stress is:",
        options: ["37.5 MPa", "150 MPa", "75 MPa", "300 MPa"],
        answer: 2,
        explanation: "$\\sigma_h = pd/(2t) = 1.5(800)/(2 \\times 8) = 75$ MPa; the longitudinal stress would be 37.5 MPa.",
      },
      {
        q: "For the worked thick cylinder (A = 24 MPa, B = 5.4 x 10⁵ MPa·mm²), the hoop stress at r = 125 mm is:",
        options: ["78 MPa", "58.6 MPa", "48 MPa", "30 MPa"],
        answer: 1,
        explanation: "$\\sigma_t = 24 + 5.4\\times10^5/(125)^2 = 24 + 34.6 = 58.6$ MPa, between the bore and surface values.",
      },
      {
        q: "The longitudinal stress in a closed thin cylinder equals:",
        options: ["Twice the hoop stress", "The hoop stress", "Half the hoop stress", "Zero"],
        answer: 2,
        explanation: "Pressure acting on the end caps spreads over twice the wall area per unit length compared with the circumferential direction, halving the stress.",
      },
      {
        q: "With internal pressure only and atmospheric pressure outside, the radial stress at the outer surface is:",
        options: ["Equal to the internal pressure", "Zero", "Equal to minus the internal pressure", "Half the internal pressure"],
        answer: 1,
        explanation: "The outside boundary is loaded only by the atmosphere, taken as zero gauge, so $\\sigma_r(r_o) = 0$.",
      },
      {
        q: "Compound cylinders carry more pressure mainly because:",
        options: [
          "Shrink-fit residual compression at the bore cancels part of the pressure hoop stress",
          "They double the wall thickness",
          "They remove the need for end closures",
          "They make the material brittle",
        ],
        answer: 0,
        explanation: "Assembly pre-stress compresses the bore, so the operating hoop peak is spread more uniformly through the wall.",
      },
    ],
  },
  {
    sectionId: "me-e-mfg2-s1",
    readingTime: 10,
    intro: "Metal cutting is controlled plastic failure: the tool pushes a thin layer of work material until it slides off as a chip along a shear plane. This section sets up the orthogonal cutting model, links the shear angle to friction through the Merchant analysis, and maps the chip types a machinist actually sees.",
    objectives: [
      "Define orthogonal cutting geometry: rake angle, clearance angle, shear angle",
      "Relate chip thickness ratio, shear angle and rake angle",
      "Apply the Merchant equation to predict the shear angle",
      "Match chip types to material behaviour and cutting conditions",
    ],
    concepts: [
      {
        term: "Orthogonal cutting model",
        kind: "definition",
        statement: "A two-dimensional idealisation: a straight cutting edge perpendicular to the cutting velocity and wider than the uncut chip.",
        detail: "Only the rake angle $\\alpha$, clearance angle, cutting speed and uncut thickness $t$ remain, which is why orthogonal tube-turning and planning experiments isolate fundamentals from tool-nose geometry.",
      },
      {
        term: "Chip thickness ratio",
        kind: "notation",
        statement: "$r = t/t_c \\le 1$: the chip leaves thicker and shorter than the layer removed.",
        detail: "Plastic flow along the shear plane thickens the chip. Geometry ties the ratio to the shear plane through $r = \\sin\\phi/\\cos(\\phi - \\alpha)$, so measuring the chip reveals the shear angle.",
      },
      {
        term: "Merchant equation",
        kind: "theorem",
        statement: "$2\\phi + \\beta - \\alpha = 90°$, equivalently $\\phi = 45° + \\alpha/2 - \\beta/2$.",
        detail: "Merchant assumed the shear plane orients itself to minimise shearing work under Coulomb friction on the rake face, with $\\beta = \\arctan\\mu$. Larger rake or lower friction opens the shear angle, thins the chip and cuts power.",
      },
      {
        term: "Chip types",
        kind: "insight",
        statement: "Continuous, continuous-with-built-up-edge, discontinuous and serrated chips signal different material and speed regimes.",
        detail: "Ductile metals cut at speed give clean continuous ribbons; slow sticky cuts weld fragments onto the rake face as built-up edge; brittle castings snap off segments; aerospace alloys tear into saw-toothed serrated chips.",
      },
      {
        term: "Cutting force components",
        kind: "method",
        statement: "A dynamometer reads the cutting force $F_c$ and thrust force $F_t$; rake-face friction follows from the force circle.",
        detail: "The forces feed power checks ($P = F_c v$), deflection estimates and fixture design. Thrust removes no material but still loads the machine and workholding.",
      },
      {
        term: "Specific cutting energy",
        kind: "definition",
        statement: "$u = F_c/(tw)$ — energy per unit volume removed, typically 1 to 10 J/mm³.",
        detail: "It is remarkably insensitive to speed and strongly dependent on material and feed, which makes it the natural currency for comparing processes from turning to grinding.",
      },
    ],
    examples: [
      {
        title: "Merchant analysis of a low-speed cut",
        problem: "An orthogonal cut has a 10 degree rake angle and a tool-chip friction coefficient of 0.84. The uncut chip thickness is 0.5 mm. Predict the shear angle, the chip thickness ratio and the chip thickness.",
        steps: [
          {
            label: "Friction angle",
            text: "$\\beta = \\arctan(0.84) = 40°$.",
          },
          {
            label: "Merchant shear angle",
            text: "$\\phi = 45° + \\alpha/2 - \\beta/2 = 45 + 5 - 20 = 30°$.",
          },
          {
            label: "Chip thickness ratio",
            text: "$r = \\sin\\phi/\\cos(\\phi - \\alpha) = \\sin 30°/\\cos 20° = 0.5/0.940 = 0.53$.",
          },
          {
            label: "Chip thickness",
            text: "$t_c = t/r = 0.5/0.53 = 0.94$ mm.",
          },
        ],
        result: "The shear plane sits at 30 degrees and the 0.5 mm layer thickens into a 0.94 mm chip with r = 0.53.",
      },
    ],
    keyTakeaways: [
      "Chip thickening is geometric: $r = \\sin\\phi/\\cos(\\phi-\\alpha) \\le 1$.",
      "Merchant: $\\phi = 45° + \\alpha/2 - \\beta/2$ — high rake and low friction open the shear angle.",
      "Chip form diagnoses the process: built-up edge means slow and sticky, serration means a hard-to-cut alloy.",
    ],
    quiz: [
      {
        q: "With a 10 degree rake and a 30 degree friction angle, the Merchant shear angle is:",
        options: ["25 degrees", "45 degrees", "35 degrees", "55 degrees"],
        answer: 2,
        explanation: "$\\phi = 45 + 10/2 - 30/2 = 45 + 5 - 15 = 35$ degrees.",
      },
      {
        q: "Built-up edge formation is favoured by:",
        options: [
          "High cutting speed with flood coolant",
          "Low cutting speed with a ductile work and high rake-face friction",
          "A brittle workpiece at any speed",
          "A sharp positive rake at high speed",
        ],
        answer: 1,
        explanation: "Slow, high-friction cuts on ductile material weld chip fragments to the rake face; speed and lubrication sweep the edge clean.",
      },
      {
        q: "The chip thickness ratio r in metal cutting is:",
        options: ["Equal to 1", "Greater than 1", "Negative", "Between 0 and 1"],
        answer: 3,
        explanation: "The chip is always thicker and shorter than the uncut layer, so $r = t/t_c < 1$.",
      },
      {
        q: "In orthogonal cutting, the cutting edge is oriented relative to the cutting velocity as:",
        options: ["Parallel", "Inclined at 45 degrees", "Perpendicular", "Along the feed direction"],
        answer: 2,
        explanation: "Orthogonal means the edge is perpendicular to the velocity, making the deformation two-dimensional.",
      },
      {
        q: "Increasing the rake angle generally:",
        options: [
          "Increases cutting force and strengthens the edge",
          "Reduces cutting force but weakens the tool edge",
          "Has no effect on forces",
          "Increases power consumption",
        ],
        answer: 1,
        explanation: "A larger rake eases chip flow and lowers forces, but the wedge becomes thinner and more prone to chipping.",
      },
    ],
  },
  {
    sectionId: "me-e-mfg2-s2",
    readingTime: 10,
    intro: "Cutting tools die by wear, and wear follows a law steep enough that a small speed change doubles or halves tool life. This section covers the wear mechanisms a worn tool displays, the Taylor relation that quantifies them, and the economics that turn tool life into a cutting-speed decision.",
    objectives: [
      "Identify flank, crater and secondary wear on worn tools",
      "Fit and apply the Taylor relation $VT^n = C$",
      "Compute tool life or cutting speed from fitted constants",
      "Reason about minimum-cost versus maximum-production speed",
    ],
    concepts: [
      {
        term: "Tool wear mechanisms",
        kind: "definition",
        statement: "Flank wear against the machined surface, crater wear on the rake face, nose wear, chipping and thermal cracking.",
        detail: "At low and moderate speeds abrasion and adhesion dominate; at high speeds diffusion and oxidation take over, which is why coated carbides and ceramics push the usable envelope. Overloaded tools end in fracture rather than gradual wear.",
      },
      {
        term: "Tool-life criterion",
        kind: "definition",
        statement: "Life ends at an average flank wear land of VB = 0.3 mm (ISO 3685), or earlier when surface finish or dimensional drift governs.",
        detail: "Fixing a measurable endpoint is what makes tool-life data comparable between laboratories. Crater depth serves the same role for high-speed continuous cuts.",
      },
      {
        term: "Taylor tool life equation",
        kind: "law",
        statement: "$VT^n = C$: cutting speed times tool life raised to the power n is constant.",
        detail: "Typical n values: 0.1 to 0.15 for high-speed steel, 0.2 to 0.3 for carbide, 0.4 to 0.6 for ceramics. Because life scales as $V^{-1/n}$, small speed increases are punished steeply.",
      },
      {
        term: "Economic cutting speed",
        kind: "method",
        statement: "Cost per part = machining time cost + tool cost share + tool-change downtime; the optimum speed minimises the sum.",
        detail: "Racing the machine raises tool consumption and change frequency; crawling wastes spindle hours. The minimum-cost speed sits below the maximum-production speed, and the window between them is where shops actually cut.",
      },
      {
        term: "Machinability",
        kind: "insight",
        statement: "A relative rating of how easily a material machines, normalised to free-cutting steel at 100 percent.",
        detail: "It bundles tool life, power demand, finish and chip form. Lead and sulphur additives buy machinability at some cost to toughness — the classic free-machining trade.",
      },
      {
        term: "Wear and surface finish",
        kind: "insight",
        statement: "Feed per revolution and corner radius set the geometric finish; wear and built-up edge degrade it.",
        detail: "The theoretical $Ra \\approx f^2/(32r_\\epsilon)$ from feed f and corner radius $r_\\epsilon$ is only a floor — dull tools, deflection and vibration push real readings above it.",
      },
    ],
    examples: [
      {
        title: "Fitting Taylor and pricing speed",
        problem: "A carbide tool lasts 16 min at 75 m/min and 39 min at 60 m/min. Determine n and C, the tool life at 50 m/min, and the cutting speed needed for a 60-minute tool life.",
        steps: [
          {
            label: "Fit n",
            text: "$(75)(16)^n = (60)(39)^n$ gives $(39/16)^n = 1.25$, so $n = \\ln 1.25/\\ln 2.44 = 0.223/0.891 = 0.25$.",
          },
          {
            label: "Fit C",
            text: "$C = 75(16)^{0.25} = 75 \\times 2 = 150$.",
          },
          {
            label: "Life at 50 m/min",
            text: "$T = (150/50)^{1/0.25} = 3^4 = 81$ min.",
          },
          {
            label: "Speed for 60 minutes",
            text: "$V = 150/(60)^{0.25} = 150/2.78 = 53.9$ m/min.",
          },
          {
            label: "Price of speed",
            text: "Pushing from 53.9 to 75 m/min (39 percent faster) collapses life from 60 min to 16 min, a 73 percent fall.",
          },
        ],
        result: "n = 0.25 and C = 150; life at 50 m/min is 81 min and a 60-minute life demands 53.9 m/min.",
      },
    ],
    keyTakeaways: [
      "Taylor: $VT^n = C$, with n around 0.25 for carbide — life falls as roughly the fourth power of speed.",
      "Flank wear VB = 0.3 mm is the standard endpoint for comparing tool-life data.",
      "Minimum-cost speed lies below maximum-production speed; cutting between them is the practical compromise.",
    ],
    quiz: [
      {
        q: "Using n = 0.25 and C = 150, the tool life at 100 m/min is closest to:",
        options: ["1.5 min", "5.1 min", "12.7 min", "25.0 min"],
        answer: 1,
        explanation: "$T = (150/100)^{1/0.25} = 1.5^4 = 5.06$ min.",
      },
      {
        q: "Which tool material shows the highest exponent n in the Taylor relation?",
        options: ["High-speed steel", "Carbide", "Ceramic", "Identical for all materials"],
        answer: 2,
        explanation: "n rises from 0.1-0.15 for HSS through 0.2-0.3 for carbide to 0.4-0.6 for ceramics.",
      },
      {
        q: "The ISO flank wear criterion for average wear land VB is:",
        options: ["0.3 mm", "0.03 mm", "3.0 mm", "0.003 mm"],
        answer: 0,
        explanation: "ISO 3685 defines the end of tool life at an average flank wear land of 0.3 mm.",
      },
      {
        q: "With n = 0.25, raising cutting speed by 20 percent reduces tool life by roughly:",
        options: ["10 percent", "25 percent", "50 percent", "80 percent"],
        answer: 2,
        explanation: "Life scales as $V^{-1/n} = V^{-4}$, so $1.2^4 = 2.07$ — the new life is about 48 percent of the old, a 50 percent drop.",
      },
      {
        q: "The minimum-cost cutting speed sits below the maximum-production speed because:",
        options: [
          "Machine hourly rate always dominates",
          "Tool cost and tool-change downtime grow steeply with speed",
          "Operators prefer slower cuts",
          "Fixtures fail at high speed",
        ],
        answer: 1,
        explanation: "As speed rises, tools die faster and change-outs multiply; minimising total cost therefore calls for a lower speed than minimising cycle time alone.",
      },
    ],
  },
  {
    sectionId: "me-e-mfg2-s3",
    readingTime: 10,
    intro: "The lathe remains the reference machine tool: round parts, tapers, threads and faced shoulders all come off it. This section tours the operations, writes the speed arithmetic that sets the spindle, and works taper-turning geometry including the tailstock offset and compound-rest settings a turner actually dials in.",
    objectives: [
      "Name and sequence the common lathe operations",
      "Compute spindle speed from cutting speed and diameter",
      "Calculate taper angles, tailstock offset and compound-rest settings",
      "Choose workholding for concentricity requirements",
    ],
    concepts: [
      {
        term: "Lathe operations",
        kind: "definition",
        statement: "Turning, facing, taper turning, contouring, grooving, parting, knurling, drilling, boring, reaming and thread cutting.",
        detail: "Each is a distinct tool-path family: external diameters turn, end faces are faced, existing holes are bored true, and parting blades slice off the finished work.",
      },
      {
        term: "Cutting speed on a lathe",
        kind: "method",
        statement: "$v = \\pi DN/1000$ m/min with D in mm and N in rpm; solve for N given the tool material speed.",
        detail: "Because D shrinks as the tool moves inward, facing ideally uses constant surface speed control; on a manual lathe the operator accepts one setting per pass.",
      },
      {
        term: "Taper geometry",
        kind: "law",
        statement: "$\\tan\\alpha = (D - d)/(2L)$, with included taper angle $2\\alpha$.",
        detail: "The half-angle is the machining angle: the compound rest swivels by $\\alpha$ for short tapers, while a taper attachment or tailstock offset handles long ones.",
      },
      {
        term: "Tailstock offset method",
        kind: "method",
        statement: "For work between centres, offsetting the tailstock by $(D - d)/2$ tilts the work axis by the half-angle $\\alpha$.",
        detail: "It cuts accurate gentle tapers over long lengths. Steep offsets spoil the centre-hole bearing and mark the centres, so the method is reserved for small angles.",
      },
      {
        term: "Workholding",
        kind: "insight",
        statement: "Three-jaw chucks self-centre round and hexagonal stock; four-jaw chucks dial in anything; between-centres work keeps reversal concentric.",
        detail: "Choice sets achievable runout: a well-set four-jaw beats a worn three-jaw, and parts machined between centres return to the same axis when refitted — which is why precision shaft work gravitates there.",
      },
      {
        term: "Milling kinematics",
        kind: "insight",
        statement: "Up (conventional) milling engages the chip thin-to-thick against the feed; down (climb) milling engages thick-to-thin with the feed.",
        detail: "Climb milling finishes better and saves power on rigid CNC machines; conventional milling protects backlash-laden manual mills from snatching into the cut.",
      },
    ],
    examples: [
      {
        title: "Taper turning between centres",
        problem: "A 200 mm long shaft must be taper-turned from 60 mm diameter at one end to 40 mm at the other, machined between centres. Find the half-angle, the included angle and the required tailstock offset.",
        steps: [
          {
            label: "Half angle",
            text: "$\\tan\\alpha = (60 - 40)/(2 \\times 200) = 0.05$, so $\\alpha = 2.86$ degrees.",
          },
          {
            label: "Included angle",
            text: "$2\\alpha = 5.72$ degrees — the angle a sine bar or angle plate would verify.",
          },
          {
            label: "Tailstock offset",
            text: "Offset $= (D - d)/2 = (60 - 40)/2 = 10$ mm toward the small end.",
          },
          {
            label: "Compound rest alternative",
            text: "For a short taper a turner would instead swivel the compound rest by 2.86 degrees and feed by hand.",
          },
        ],
        result: "Half-angle 2.86 degrees, included angle 5.72 degrees, tailstock offset 10 mm.",
      },
    ],
    keyTakeaways: [
      "Taper geometry: $\\tan\\alpha = (D-d)/(2L)$; the compound rest swivels by the half-angle.",
      "Tailstock offset equals $(D - d)/2$ and suits long, gentle tapers between centres.",
      "Spindle speed follows $v = \\pi DN/1000$; facing wants constant surface speed as D shrinks.",
    ],
    quiz: [
      {
        q: "Facing a 100 mm bar at 100 rpm gives a cutting speed at the outer edge of about:",
        options: ["15.7 m/min", "62.8 m/min", "31.4 m/min", "100 m/min"],
        answer: 2,
        explanation: "$v = \\pi DN/1000 = \\pi (100)(100)/1000 = 31.4$ m/min.",
      },
      {
        q: "A taper from 50 mm to 30 mm over a 100 mm length has a half-angle of:",
        options: ["2.86 degrees", "5.71 degrees", "11.3 degrees", "45 degrees"],
        answer: 1,
        explanation: "$\\tan\\alpha = (50-30)/(2 \\times 100) = 0.1$, so $\\alpha = 5.71$ degrees.",
      },
      {
        q: "The tailstock setover for that 50-to-30 mm taper, cut between centres, is:",
        options: ["5 mm", "20 mm", "30 mm", "10 mm"],
        answer: 3,
        explanation: "Offset $= (D - d)/2 = 20/2 = 10$ mm.",
      },
      {
        q: "In up (conventional) milling, the cutter tooth:",
        options: [
          "Meets the chip thick with rotation in the same sense as feed",
          "Meets the chip thin with rotation opposing the feed",
          "Has constant chip thickness",
          "Cuts only along the tool axis",
        ],
        answer: 1,
        explanation: "The tooth enters at zero chip thickness and exits thick, with cutter rotation opposing the feed direction — the definition of conventional milling.",
      },
      {
        q: "Which setup keeps a part truly concentric when it must be removed and refitted?",
        options: [
          "Three-jaw self-centring chuck",
          "Collet chuck",
          "Faceplate with clamps",
          "Between centres using a driver plate",
        ],
        answer: 3,
        explanation: "Machining between centres locates on the centre holes, so the same axis is recovered every time the part is remounted.",
      },
    ],
  },
  {
    sectionId: "me-e-mfg2-s4",
    readingTime: 10,
    intro: "CNC replaces the handwheel with coordinated motion control. This section separates open from closed loop control, explains how interpolators choreograph the axes, and walks through a short G-code program line by line until the tool path is visible on paper.",
    objectives: [
      "Distinguish open-loop and closed-loop motion control and their error sources",
      "Explain linear and circular interpolation at programmed feed",
      "Read a basic G-code program block by block",
      "Use work offsets and tool compensation correctly",
    ],
    concepts: [
      {
        term: "Open versus closed loop",
        kind: "definition",
        statement: "Open loop commands stepper motors blind; closed loop measures position with encoders or scales and corrects continuously.",
        detail: "Steppers are cheap and adequate for light loads, but lost steps go unnoticed. Servos with glass scales and backlash compensation deliver micrometre-class repeatability at real cost.",
      },
      {
        term: "Interpolation",
        kind: "definition",
        statement: "The controller streams coordinated axis velocities along the programmed path: G01 for straight lines, G02 and G03 for clockwise and counter-clockwise arcs.",
        detail: "Every arc needs an end point plus a radius or a centre vector (I and J in the XY plane). The interpolator holds the tool on the geometric path at the commanded feed regardless of the axis mix.",
      },
      {
        term: "Absolute and incremental programming",
        kind: "notation",
        statement: "G90 targets coordinates measured from part zero; G91 targets moves relative to the current position.",
        detail: "Absolute is safer to edit because one typo affects a single block rather than every downstream coordinate. Incremental shines for repeated patterns and subprograms.",
      },
      {
        term: "G-codes and M-codes",
        kind: "definition",
        statement: "G-words command geometry and motion modes (G00 rapid, G01 feed, G02/G03 arcs, G41/G42 cutter compensation); M-words command machine hardware (M03 spindle on, M08 coolant, M30 end of program).",
        detail: "The letter is the address and the number the function. Modal codes persist until replaced, which is why a forgotten G00 turns a feed move into a rapid — a classic crash source.",
      },
      {
        term: "Part zero and offsets",
        kind: "method",
        statement: "Work offsets (G54 to G59) shift machine coordinates to the part datum; tool length and radius compensation adjust for each tool.",
        detail: "Programming in part coordinates keeps drawings and programs aligned, and the controller absorbs setup variation: re-fixture the part and re-touch one offset instead of editing the program.",
      },
      {
        term: "Sources of positioning error",
        kind: "insight",
        statement: "Accuracy is set by feedback resolution, ballscrew mapping, backlash and thermal drift — not by the motor alone.",
        detail: "A glass-scale closed loop reports true table position, immune to ballscrew wind-up. On long jobs, thermal growth of a warm spindle can outrun every other error source.",
      },
    ],
    examples: [
      {
        title: "Reading a two-axis milling program",
        problem: "A CNC mill cuts the following program on a flat plate:\nN10 G21 G90 G54\nN20 M03 S1500\nN30 G00 X0 Y0\nN40 G00 Z2.0\nN50 G01 Z-1.5 F120\nN60 G01 X40 Y0 F250\nN70 G03 X80 Y40 I0 J40\nN80 G01 Y80\nN90 G00 Z10\nN100 M05 M30\nState the path the cutter follows and the radius of the arc.",
        steps: [
          {
            label: "Setup words",
            text: "G21 selects millimetres, G90 absolute mode and G54 the work offset; M03 S1500 starts the spindle clockwise at 1500 rpm.",
          },
          {
            label: "Approach",
            text: "G00 rapids to (0, 0) and then to 2 mm above the surface; G01 Z-1.5 plunges 1.5 mm deep at 120 mm/min.",
          },
          {
            label: "Straight cut",
            text: "G01 X40 Y0 F250 feeds 40 mm to the right along X at 250 mm/min.",
          },
          {
            label: "Arc cut",
            text: "G03 X80 Y40 I0 J40 sweeps counter-clockwise from (40, 0) to (80, 40); I0 J40 places the centre 40 mm directly above the start, so the arc radius is 40 mm.",
          },
          {
            label: "Exit",
            text: "G01 Y80 climbs vertically to (80, 80), then G00 Z10 retracts and M05 M30 stops the spindle and ends the program.",
          },
        ],
        result: "Path: (0,0) to (40,0), a counter-clockwise quarter arc of radius 40 mm up to (80,40), then straight to (80,80).",
      },
    ],
    keyTakeaways: [
      "Closed loops measure and correct; open loops trust the command — accuracy demands feedback.",
      "G01 cuts lines, G02/G03 cut arcs with I/J centre vectors or a radius word.",
      "Work offsets and cutter compensation separate the program from the setup.",
    ],
    quiz: [
      {
        q: "Which code commands a clockwise circular interpolation?",
        options: ["G01", "G03", "G04", "G02"],
        answer: 3,
        explanation: "G02 is clockwise and G03 counter-clockwise, both viewed looking down the positive Z axis toward the table.",
      },
      {
        q: "The arc G03 X80 Y40 I0 J40, starting at (40, 0), has its centre at:",
        options: ["(40, 40)", "(80, 0)", "(40, 0)", "(0, 40)"],
        answer: 0,
        explanation: "I and J are the offsets from the start point to the centre: (40, 0) + (0, 40) = (40, 40), giving a 40 mm radius.",
      },
      {
        q: "Open-loop CNC is unsuitable for precision machining mainly because:",
        options: [
          "There is no feedback to detect and correct position error",
          "Stepper motors cannot generate torque",
          "They are faster than servos",
          "They require glass scales",
        ],
        answer: 0,
        explanation: "Lost steps and load-induced errors are never reported back, so the controller cannot compensate — only closed loops correct themselves.",
      },
      {
        q: "In G90 mode, the block G01 X40 Y0 commands:",
        options: [
          "A 40 mm move in the positive X direction from the current point",
          "A move to absolute coordinate (40, 0) measured from part zero",
          "A return to machine home",
          "A rapid move at 40 percent of maximum speed",
        ],
        answer: 1,
        explanation: "G90 makes coordinate words absolute targets measured from the active work offset datum.",
      },
      {
        q: "In the block G01 X40 Y0 F250, the F250 word sets:",
        options: ["Spindle speed of 250 rpm", "Feed rate of 250 mm/min", "Tool number 250", "Depth of cut of 2.50 mm"],
        answer: 1,
        explanation: "F is the feed address; with G21 active the value is read directly in millimetres per minute.",
      },
    ],
  },
  {
    sectionId: "me-e-mfg2-s5",
    readingTime: 10,
    intro: "When work is too hard, too brittle or too intricately shaped for a cutting edge, non-traditional processes take over: sparks, photons, ultrasound and abrasive jets remove material without contact. This section explains EDM physics in depth and positions laser, ultrasonic and abrasive-jet machining against it.",
    objectives: [
      "Explain the spark-erosion mechanism of EDM and its material limits",
      "Compute EDM removal time and electrode wear allowance",
      "Compare laser, USM and AJM on energy source, accuracy and work materials",
      "Select a non-traditional process for a given difficult feature",
    ],
    concepts: [
      {
        term: "Why non-traditional",
        kind: "insight",
        statement: "Contact-free processes machine any hardness, brittle ceramics, delicate shapes and deep small holes that cutting tools cannot reach.",
        detail: "The common thread is energy rather than force: thermal, electrical or mechanical energy applied at micro scale. The price is usually lower removal rate and often a thermally affected surface layer.",
      },
      {
        term: "EDM mechanism",
        kind: "definition",
        statement: "Pulsed electrical discharges of tens of amperes at 40 to 400 V in a dielectric fluid vaporise microscopic craters from the work, one spark at a time.",
        detail: "Each pulse melts or vaporises a tiny pool that the dielectric flushes away, and thousands of sparks per second sum into measurable removal. A spark gap of a few hundredths of a millimetre separates electrode and work, so the electrode shape mirrors into the cavity with a small offset.",
      },
      {
        term: "EDM process traits",
        kind: "method",
        statement: "Only electrically conductive materials machine; cutting force is zero, electrode wear is finite, and a recast layer remains.",
        detail: "Zero force lets slender electrodes sink deep precise cavities in hardened steel — the die and mould workhorse. Wear demands compensation or multiple electrodes, and the recast layer may need polishing or stress relief.",
      },
      {
        term: "Laser beam machining",
        kind: "definition",
        statement: "A focused coherent beam vaporises material at a spot measured in micrometres, with no tool contact and a shallow heat-affected zone.",
        detail: "It drills cooling holes in turbine blades, cuts thin sheet quickly and marks parts. Reflectivity and thickness limit it, and the thermal nature leaves a small recast layer and heat tint.",
      },
      {
        term: "Ultrasonic machining",
        kind: "definition",
        statement: "A tool horn vibrating near 20 kHz drives abrasive slurry against the work, chipping brittle material away particle by particle.",
        detail: "The tool never touches the work — the abrasives do — so non-conductive ceramics and glass that EDM cannot touch machine without cracking. The trade is a low removal rate and wear of the tool itself.",
      },
      {
        term: "Abrasive jet machining",
        kind: "definition",
        statement: "A fine abrasive stream in a gas jet erodes material for light cutting, cleaning, deburring and frosting.",
        detail: "AJM is the gentlest and cheapest of the family: almost no heat and no burrs, but shallow penetration and dusty operation. It excels at brittle thin sections, masked etching and delicate cleaning.",
      },
    ],
    examples: [
      {
        title: "Sinking a die cavity by EDM",
        problem: "A hardened tool-steel die needs a cavity 60 mm x 40 mm x 10 mm deep. The chosen spark settings remove 400 mm³/min with an electrode wear ratio of 3 percent. Estimate the burning time and the electrode wear allowance.",
        steps: [
          {
            label: "Cavity volume",
            text: "$V = 60 \\times 40 \\times 10 = 24\\,000$ mm³.",
          },
          {
            label: "Burning time",
            text: "$t = 24\\,000/400 = 60$ minutes of spark time.",
          },
          {
            label: "Electrode wear",
            text: "$0.03 \\times 24\\,000 = 720$ mm³ of electrode consumed, so plan one roughing and one finishing electrode.",
          },
          {
            label: "Physics behind the clock",
            text: "Sixty minutes is the sum of hundreds of thousands of craters, each a few micrometres across, flushed away by the dielectric between pulses.",
          },
        ],
        result: "Burning time about 60 min with a 720 mm³ electrode wear allowance.",
      },
    ],
    keyTakeaways: [
      "EDM removes metal by controlled sparks in a dielectric — conductivity is the only material gate.",
      "Zero cutting force makes EDM ideal for hardened dies and delicate features; the recast layer is its tax.",
      "USM handles non-conductive brittle materials; lasers handle micro-holes and thin sheet; AJM handles light erosion work.",
    ],
    quiz: [
      {
        q: "Which process can machine electrically non-conductive ceramics such as glass?",
        options: ["Sinking EDM", "Wire EDM", "ECM", "USM"],
        answer: 3,
        explanation: "USM removes material mechanically through abrasive grains driven by ultrasonic vibration, so conductivity is irrelevant.",
      },
      {
        q: "In EDM, the dielectric fluid mainly serves to:",
        options: [
          "Cool only the electrode tip",
          "Flush debris and confine each spark channel",
          "Lubricate the machine slideways",
          "Prevent all electrical arcing",
        ],
        answer: 1,
        explanation: "The dielectric deionises between pulses, flushes the eroded particles out of the gap, and concentrates each discharge into a small channel.",
      },
      {
        q: "Wire EDM typically uses:",
        options: [
          "A 0.05 to 0.30 mm brass wire with deionised water",
          "A graphite electrode sunk into oil",
          "A 5 mm copper tube fed with acid",
          "A laser guided by rotating mirrors",
        ],
        answer: 0,
        explanation: "A thin travelling brass or coated wire in deionised water spark-erodes a narrow kerf through any conductive material.",
      },
      {
        q: "Laser beam machining excels at:",
        options: [
          "Large shallow pockets in soft aluminium",
          "Micro-holes in hard materials with no tool force",
          "Deep crude cavities in tool steel",
          "Thread cutting on shafts",
        ],
        answer: 1,
        explanation: "The focused spot vaporises material without contact, ideal for small precise holes in hard or delicate parts, such as turbine blade cooling holes.",
      },
      {
        q: "A recast layer is a quality concern mainly in:",
        options: ["USM", "AJM", "EDM", "Abrasive flow machining"],
        answer: 2,
        explanation: "EDM melts and resolidifies a thin surface layer, leaving altered microstructure and possible micro-cracks that sometimes need polishing or stress relief.",
      },
    ],
  },
  {
    sectionId: "me-e-mfg2-s6",
    readingTime: 10,
    intro: "Welding is metallurgy at speed: a moving furnace sweeps along the joint, melting, refreezing and transforming the surrounding metal. This section covers the arc itself, the heat-input formula that predicts the damage zone, the defects inspectors hunt, and the three oxy-acetylene flames.",
    objectives: [
      "Explain arc formation, polarity choices and their effect on penetration",
      "Compute heat input $H = \\eta VI/v$ and predict its consequences",
      "Map the HAZ sub-zones of a steel weld",
      "Recognise the main weld defects and the three oxy-acetylene flames",
    ],
    concepts: [
      {
        term: "Arc physics",
        kind: "definition",
        statement: "A sustained plasma discharge between electrode and work reaches 6000 to 8000 K and delivers concentrated heat across a 2 to 4 mm arc length.",
        detail: "Polarity splits the heat: with electrode negative (straight polarity) most heat lands on the work for deep GTAW penetration, while electrode positive (reverse) heats the electrode and provides the cathodic cleaning that aluminium needs — AC alternates both benefits.",
      },
      {
        term: "Heat input",
        kind: "law",
        statement: "$H = \\eta VI/v$ in joules per millimetre, with arc efficiency $\\eta$ of 0.7 to 0.9 for arc processes.",
        detail: "Heat input sets cooling rate, HAZ width and distortion together. High inputs relieve residual stress but coarsen grains and widen the softened band; low inputs limit distortion but can quench hardenable steel into martensite.",
      },
      {
        term: "Heat-affected zone",
        kind: "definition",
        statement: "The HAZ is the unmelted parent metal whose microstructure the weld thermal cycle has altered.",
        detail: "In steel it grades from coarse grains at the fusion boundary, through a fine recrystallised band and a partially transformed zone, to a tempered outer region. Hardness peaks in the coarse zone, and fast cooling there can form brittle martensite in hardenable steels.",
      },
      {
        term: "Weld defects",
        kind: "definition",
        statement: "Porosity, slag inclusion, lack of fusion, lack of penetration, undercut, spatter, hot cracks and hydrogen cold cracks.",
        detail: "Hot tears form in the mushy weld pool; hydrogen cold cracking strikes hours after welding where moisture-derived hydrogen meets a hard HAZ and high restraint. Low-hydrogen consumables, preheat and post-weld heat treatment are the countermeasures, policed by radiography, ultrasonics and dye penetrant.",
      },
      {
        term: "Arc welding families",
        kind: "insight",
        statement: "SMAW (stick), GMAW (wire plus shielding gas), GTAW (tungsten plus filler), FCAW (flux-cored wire) and SAW (submerged arc).",
        detail: "Stick is portable and forgiving; MIG is fast and operator-friendly; TIG gives the cleanest, highest-integrity fusion on thin and exotic metal; submerged arc deposits metal at enormous rates in flat automated work.",
      },
      {
        term: "Oxy-acetylene flames",
        kind: "method",
        statement: "Neutral (equal oxygen and acetylene) for general steel work; carburising (excess acetylene, feathered cone) for hardfacing and high-carbon steel; oxidising (excess oxygen, short pointed cone) for brass and braze welding.",
        detail: "The inner cone shape tells the mixture at a glance. A carburising flame welds extra carbon into steel, and an oxidising flame would burn mild steel weld metal, so matching flame to job is not optional.",
      },
    ],
    examples: [
      {
        title: "Heat input for two travel speeds",
        problem: "An SMAW pass runs at 25 V and 180 A with 80 percent arc efficiency. Compare the arc heat input at travel speeds of 300 mm/min and 150 mm/min.",
        steps: [
          {
            label: "Formula",
            text: "$H = \\eta VI/v$ with the travel speed v in mm per second.",
          },
          {
            label: "Fast pass",
            text: "$v = 5$ mm/s, so $H = 0.8(25)(180)/5 = 720$ J/mm = 0.72 kJ/mm.",
          },
          {
            label: "Slow pass",
            text: "$v = 2.5$ mm/s, so $H = 1.44$ kJ/mm — double the input.",
          },
          {
            label: "Consequences",
            text: "The slow pass widens the HAZ and slows cooling, helping avoid martensite in hardenable steel but doubling distortion and grain coarsening.",
          },
        ],
        result: "0.72 kJ/mm versus 1.44 kJ/mm: doubling travel speed halves the arc heat input.",
      },
    ],
    keyTakeaways: [
      "Heat input $H = \\eta VI/v$ links the machine settings to HAZ width, cooling rate and distortion.",
      "The HAZ grades from coarse grains at the fusion line to tempered parent metal; hardness peaks in the coarse zone.",
      "Match flame to job: neutral for steel, carburising for hardfacing, oxidising for brass.",
    ],
    quiz: [
      {
        q: "Which polarity gives the deepest penetration in GTAW?",
        options: ["DCEP (electrode positive)", "AC", "DCEN (electrode negative)", "Polarity makes no difference"],
        answer: 2,
        explanation: "With the electrode negative, about 70 percent of the arc heat lands on the workpiece, driving penetration while keeping the tungsten cool.",
      },
      {
        q: "For V = 30 V, I = 200 A, v = 6 mm/s and $\\eta = 0.75$, the heat input is:",
        options: ["0.45 kJ/mm", "1.50 kJ/mm", "4.50 kJ/mm", "0.75 kJ/mm"],
        answer: 3,
        explanation: "$H = 0.75(30)(200)/6 = 750$ J/mm = 0.75 kJ/mm.",
      },
      {
        q: "A carburising oxy-acetylene flame is recognised by:",
        options: [
          "A short pointed cone with excess oxygen",
          "A feathered second cone with excess acetylene",
          "A perfectly neutral single cone",
          "No visible cone at all",
        ],
        answer: 1,
        explanation: "Excess acetylene produces a second feather-like cone around the inner cone, adding carbon to the weld pool.",
      },
      {
        q: "Hydrogen cold cracking in steel welds is most associated with:",
        options: [
          "Slow cooling and soft weld metal",
          "Moisture-derived hydrogen meeting a hard HAZ and fast cooling",
          "Welds made only with AC power",
          "Oxide films on the parent metal",
        ],
        answer: 1,
        explanation: "Hydrogen from damp consumables diffuses into the hard, quickly cooled HAZ and cracks it under restraint — hence low-hydrogen rods and preheat.",
      },
      {
        q: "The hottest region of a steel weldment outside the fusion zone is the:",
        options: ["Tempered zone", "Partially transformed zone", "Coarse-grained HAZ", "Untouched parent metal"],
        answer: 2,
        explanation: "Grains just outside the fusion line are heated nearly to melting and grow coarse, and this zone carries the hardness peak.",
      },
    ],
  },
  {
    sectionId: "me-e-mfg2-s7",
    readingTime: 10,
    intro: "Choosing how to make a part is an engineering decision with consequences for cost, tolerance and delivery. This section assembles the selection logic — material condition, geometry, tolerance ladder, batch size — applies it end-to-end to a hardened guide block, and drills the reasoning with decision questions.",
    objectives: [
      "Route a part from stock to finish through roughing, heat treatment and finishing",
      "Match part features to machine tools and processes",
      "Apply the tolerance ladder from drilling to grinding",
      "Weigh batch size and cost in process selection",
    ],
    concepts: [
      {
        term: "Selection logic",
        kind: "method",
        statement: "Choose processes by material condition, geometry, tolerance, surface finish, quantity and cost — in that order of constraint.",
        detail: "The universal skeleton is stock selection, primary shaping or machining, heat treatment, then finishing. Every added operation must pay for itself in function; tolerance and finish requirements, not ambition, decide the last step.",
      },
      {
        term: "Geometry-driven routing",
        kind: "insight",
        statement: "Flats and pockets mill, rounds turn, holes drill then bore, profiles wire-cut, and hard cavities sink by EDM.",
        detail: "Feature shape maps almost one-to-one onto a machine family. The interesting decisions come where several routes can make the same feature, and cost or tolerance must break the tie.",
      },
      {
        term: "Tolerance ladder",
        kind: "insight",
        statement: "Drilling reaches about IT10 to IT12, reaming IT7 to IT8, boring IT6 to IT7, grinding IT5 to IT6, lapping better still.",
        detail: "Each rung costs more time and better machines. Specifying tighter than the function demands is the most common way drawings quietly multiply part cost.",
      },
      {
        term: "Heat treatment placement",
        kind: "method",
        statement: "Machine in the soft condition, harden, then grind — never attempt heavy cutting after final hardness.",
        detail: "Hardening distorts, so leave grinding stock of 0.2 to 0.5 mm before treatment. Features that cannot be ground afterwards are candidates for hard turning with CBN or for EDM.",
      },
      {
        term: "Batch economics",
        kind: "insight",
        statement: "One-offs suit universal machines, small and medium batches suit CNC, and very large batches justify dedicated automation.",
        detail: "Setup time amortises over quantity: a fixture or special tool that is absurd for ten parts is mandatory for a million. CNC quick-change workholding widens the economic middle enormously.",
      },
      {
        term: "Datum discipline",
        kind: "method",
        statement: "Carry datums across operations and finish critical features in one setup where possible.",
        detail: "Every re-fixture stacks location error onto the tolerance budget. A route that machines a bore and its reference faces without re-clamping buys tolerance headroom for free.",
      },
    ],
    examples: [
      {
        title: "Routing a hardened guide block",
        problem: "A 150 x 100 x 40 mm guide block in D2 tool steel must finish at 60 HRC with a 25 mm bore held to ±0.005 mm parallel to the ground faces, plus a profiled through-slot. Design the manufacturing route.",
        steps: [
          {
            label: "Soft-stage machining",
            text: "Rough and semi-finish mill all faces, drill and bore the 25 mm hole, and rough the slot in the annealed blank, leaving 0.3 mm grinding stock on faces and bore.",
          },
          {
            label: "Heat treatment",
            text: "Austenitise, quench and temper to 60 HRC; expect 0.1 to 0.2 mm of distortion, which the stock absorbs.",
          },
          {
            label: "Finish the faces",
            text: "Surface grind the six faces square and to dimension on a magnetic chuck.",
          },
          {
            label: "Finish the bore and slot",
            text: "Internal grind the bore to ±0.005 mm parallel to the ground faces; wire-EDM the profiled slot, since it needs no fixture force on the hardened block.",
          },
          {
            label: "Verify",
            text: "Air-gauge or CMM-check bore size, parallelism and slot profile before release.",
          },
        ],
        result: "Annealed mill and bore, harden to 60 HRC, surface grind faces, internal grind bore, wire-EDM slot, then inspect.",
      },
    ],
    keyTakeaways: [
      "Route around the heat treatment: machine soft, harden, then finish by grinding or EDM.",
      "The tolerance ladder prices accuracy: drilling, reaming, boring, grinding, lapping — each rung costs more.",
      "Batch size decides the machine economics: universal, CNC, or dedicated automation.",
    ],
    quiz: [
      {
        q: "A 0.01 mm-tolerance bore in a 58 HRC hardened bushing should be finished by:",
        options: ["Twist drilling", "Reaming", "Internal grinding", "Knurling"],
        answer: 2,
        explanation: "Cutting tools cannot touch the hardness; internal grinding holds IT5-IT6 class tolerances in hardened steel.",
      },
      {
        q: "The best process for a sharp-cornered profile through a 50 mm thick carbide plate is:",
        options: ["Wire EDM", "End milling", "Shaping", "Broaching"],
        answer: 0,
        explanation: "Wire EDM cuts any conductive hardness with fine, sharp corners and no tool force — exactly what milling cannot do in carbide.",
      },
      {
        q: "Grinding allowance left on faces before hardening is typically:",
        options: ["0.01 to 0.02 mm", "2 to 3 mm", "0.2 to 0.5 mm", "None at all"],
        answer: 2,
        explanation: "The stock must absorb heat-treat distortion and still leave metal for the grinding pass, which lands in the 0.2 to 0.5 mm band.",
      },
      {
        q: "For 100,000 identical simple parts a year, the most economical equipment is usually:",
        options: [
          "A manual universal lathe",
          "A dedicated automatic machine",
          "A 5-axis machining centre",
          "A jobbing workshop",
        ],
        answer: 1,
        explanation: "At very large quantities, dedicated automation amortises its cost and beats CNC or manual flexibility on cycle time.",
      },
      {
        q: "The correct operation sequence for a precision hardened shaft is:",
        options: ["Harden, turn, grind", "Turn, harden, grind", "Grind, turn, harden", "Turn, grind, harden"],
        answer: 1,
        explanation: "Heavy cutting happens soft, heat treatment follows, and grinding restores size and finish after the distortion of hardening.",
      },
    ],
  },
];
