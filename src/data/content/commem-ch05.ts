import type { SectionContent } from '../library'

// ============================================================================
// Communications Electromagnetics — Chapter 5: Maxwell Waves and Poynting
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const commemCh05Content: SectionContent[] = [
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'ece-e-emft-s4',
    readingTime: 10,
    intro: 'Four field laws link charges, currents and the time variation of the fields themselves into one closed system. Their integral forms count flux through surfaces while differential forms test each point. Boundary rules then state exactly which components survive contact between two materials.',
    objectives: [
      'State differential and integral Maxwell forms with source terms',
      'Apply interface conditions for tangential and normal components',
      'Use continuity and static limits to check candidate fields'
    ],
    concepts: [
      {
        term: 'Gauss laws for E and B',
        kind: 'law',
        statement: 'Electric flux obeys **`div D`** equals charge `RHO` and magnetic flux obeys **`div B`** equals zero `ZERO`, with $$\\nabla\\cdot\\mathbf{D} = \\rho_{v}, \\qquad \\nabla\\cdot\\mathbf{B} = 0.$$ Integral counters read **`Q`** enclosed `QENC` through $$\\oint \\mathbf{D}\\cdot d\\mathbf{S} = Q_{enc}, \\quad \\oint \\mathbf{B}\\cdot d\\mathbf{S} = 0.$$',
        detail: 'Field `D` starts on free charge while `B` lines always close on themselves. A point charge $Q$ gives $D = Q / 4\\pi r^{2}$ radially by symmetry.'
      },
      {
        term: 'Faraday and Ampere-Maxwell laws',
        kind: 'law',
        statement: 'Changing **`B`** drives curl of **`E`** and changing **`D`** plus current **`J`** drive curl of **`H`**, with $$\\nabla\\times\\mathbf{E} = -\\frac{\\partial\\mathbf{B}}{\\partial t}, \\qquad \\nabla\\times\\mathbf{H} = \\mathbf{J} + \\frac{\\partial\\mathbf{D}}{\\partial t}.$$ The added **`displacement`** `DISP` term completes wave propagation.',
        detail: 'Static limits drop time derivatives, decoupling into electrostatics and magnetostatics. Sinusoidal phasors replace $\\partial / \\partial t$ by $j\\omega$ throughput.'
      },
      {
        term: 'Tangential boundary rule',
        kind: 'theorem',
        statement: 'Tangential **`E`** is **continuous** `CONT` across any interface while tangential **`H`** jumps by surface current **`K`** `SURF`, with $$\\hat{n}\\times(\\mathbf{E}_1 - \\mathbf{E}_2) = 0, \\quad \\hat{n}\\times(\\mathbf{H}_1 - \\mathbf{H}_2) = \\mathbf{K}.$$ Perfect conductors force **`E`** tangent to **zero** `PEC`.',
        detail: 'No magnetic surface current exists in classical models, so the electric rule has zero right side. A sheet of $K = 2$ A per m supports a $2$ A per m step in tangential $H$.'
      },
      {
        term: 'Normal boundary rule',
        kind: 'theorem',
        statement: 'Normal **`D`** jumps by surface charge **`RHO_S`** `SIGMA` and normal **`B`** stays **continuous** `NORM`, with $$\\hat{n}\\cdot(\\mathbf{D}_1 - \\mathbf{D}_2) = \\rho_s, \\quad \\hat{n}\\cdot(\\mathbf{B}_1 - \\mathbf{B}_2) = 0.$$ Charge-free interfaces keep **`D`** normal **equal** `EQ`.',
        detail: 'A sheet $\\rho_s = 5$ microC per sq m raises normal $D$ by $5$ across the boundary. Normal $B$ never jumps because isolated magnetic charge is absent.'
      },
      {
        term: 'Continuity and consistency check',
        kind: 'method',
        statement: 'Charge conservation **`div J`** plus rate of **`RHO`** obeys $$\\nabla\\cdot\\mathbf{J} = -\\frac{\\partial\\rho_v}{\\partial t}.$$ Any proposed **`E`**, **`H`** pair must satisfy all four **`laws`** plus this balance at once.',
        detail: 'Taking divergence of the Ampere-Maxwell law yields continuity directly, so the system is self-consistent. Steady currents with $\\partial\\rho/\\partial t = 0$ have divergence-free $J$.'
      }
    ],
    examples: [
      {
        title: 'Test a candidate plane field',
        problem: 'Proposed E is x-directed 100 cos(wt - bz) and H is y-directed ($\\frac{100}{377}$) cos(wt - bz) in free space. Verify Maxwell fit and find b.',
        steps: [
          { label: 'Step 1', text: 'Check divergence and curl structure.\n```text\ndiv E = dEx/dx = 0 ok (no charge)\ndiv B = 0 ok\ncurl E = y*(-dEx/dz) = y*(-100 b sin)\n```' },
          { label: 'Step 2', text: 'Faraday needs $\\nabla\\times E = -\\mu_0 \\partial H/\\partial t$. Time derivative gives $\\omega ($\\frac{100}{377}$)\\sin$, so $100 b = \\mu_0 \\omega ($\\frac{100}{377}$)$, yielding $b = \\omega/3\\times10^{8}$.' },
          { label: 'Step 3', text: 'Ratio $E/H = 377$ ohms matches free-space impedance, and $b = \\omega\\sqrt{\\mu_0\\epsilon_0}$ confirms a valid wave.' }
        ],
        result: 'Fields satisfy all four laws with propagation constant omega over c and impedance 377 ohms.'
      },
      {
        title: 'Apply boundary at a conductor',
        problem: 'Incident E has tangential 50 V per m at a perfect conductor surface. Find reflected tangential E and surface current for H jump 0.2 A per m.',
        steps: [
          { label: 'Step 1', text: 'Perfect conductor forces total tangential to zero.\n```text\nE_total_tan = E_inc_tan + E_ref_tan = 0\nE_ref_tan = -50 V/m\n```' },
          { label: 'Step 2', text: 'Reflected tangential cancels incident exactly with a $180$-degree phase flip. Normal $D$ holds the induced charge.' },
          { label: 'Step 3', text: 'Surface current equals the $H$ jump: $K = 0.2$ A per m flowing orthogonal to the $H$ step direction.' }
        ],
        result: 'Reflected minus 50 V per m; sheet current 0.2 A per m supports the H discontinuity.'
      }
    ],
    keyTakeaways: [
      'Gauss laws source D on charge and close B on itself.',
      'Time derivatives couple E and H into propagating waves.',
      'Tangential E is continuous; tangential H jumps by sheet current.',
      'Normal D jumps by sheet charge; normal B never jumps.'
    ],
    quiz: [
      // PYQ-pattern: differential forms with tangential and normal jumps
      {
        q: 'Differential form with magnetic sources absent gives div B:',
        options: ['0', 'rho', 'J', 'dD/dt'],
        answer: 0,
        explanation: 'Step 1: Electric Gauss sources D on charge density. Step 2: No magnetic charge exists. Step 3: Magnetic Gauss is therefore zero. Step 4: J and dD/dt belong to curl H.'
      },
      {
        q: 'Tangential E across a charge-free interface is:',
        options: ['jumping by rho_s', 'continuous', 'zero always', 'doubled'],
        answer: 1,
        explanation: 'Step 1: Faraday loop with vanishing height encloses no flux. Step 2: Line integral reduces to tangential difference. Step 3: Result is zero jump. Step 4: Only perfect conductors force stronger zero conditions.'
      },
      {
        q: 'Sheet current K 3 A per m supports tangential H jump of:',
        options: ['0', '6 A per m', '3 A per m', '1.5 A per m'],
        answer: 2,
        explanation: 'Step 1: Boundary law equates cross jump to K. Step 2: Magnitude match gives 3. Step 3: 6 doubles incorrectly. Step 4: 1.5 halves without basis.'
      },
      {
        q: 'Normal D jumps by 4 microC per sq m. Sheet charge is:',
        options: ['0', '2 microC per sq m', '8 microC per sq m', '4 microC per sq m'],
        answer: 3,
        explanation: 'Step 1: Normal rule is D1n minus D2n equals rho_s. Step 2: Jump of 4 means rho_s 4. Step 3: Normal B stays continuous instead. Step 4: No doubling applies here.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.2
  {
    sectionId: 'ece-e-emft-s17',
    depth: [
      {
        tier: 'masters',
        title: 'Plane waves from Maxwell: speed, impedance and power',
        blocks: [
          {
            kind: 'para',
            body: 'In a source-free homogeneous medium with permittivity $\\epsilon$ and permeability $\\mu$, Maxwell curl equations combine to the **wave equation** $$\\nabla^{2}E = \\mu\\epsilon\\,\\partial^{2}E/\\partial t^{2}$$ for each field component. Time-harmonic solutions $e^{j(\\omega t - kz)}$ propagate with speed $v = 1/\\sqrt{\\mu\\epsilon}$ and spatial rate $k = \\omega\\sqrt{\\mu\\epsilon}$. Graduate electromagnetics reads the rest as consequences: intrinsic impedance $\\eta = \\sqrt{\\mu/\\epsilon}$ fixes the ratio of electric to magnetic amplitudes, and the Poynting vector carries power along the propagation direction. Loss and dispersion enter when $\\epsilon$ and $\\mu$ become complex or frequency dependent.'
          },
          {
            kind: 'derivation',
            heading: 'Curl laws to Helmholtz to plane wave',
            body: 'Take curl of Faraday law $\\nabla\\times E = -j\\omega\\mu H$ and substitute Ampere law $\\nabla\\times H = j\\omega\\epsilon E$: $$\\nabla\\times\\nabla\\times E = \\omega^{2}\\mu\\epsilon\\,E.$$ Using $\\nabla\\times\\nabla\\times E = \\nabla(\\nabla\\cdot E) - \\nabla^{2}E$ with $\\nabla\\cdot E = 0$ in chargeless regions gives $\\nabla^{2}E + k^{2}E = 0$ with $k^{2} = \\omega^{2}\\mu\\epsilon$. Plane-wave trial $E = E_0 e^{-jkz}$ satisfies the Helmholtz form with $k = \\omega\\sqrt{\\mu\\epsilon}$, and $H = E/\\eta$ follows from Faraday with $\\eta = \\sqrt{\\mu/\\epsilon}$. Time-average Poynting magnitude is $|E_0|^{2}/(2\\eta)$, flowing along $z$.'
          },
          {
            kind: 'theorem',
            body: 'For a uniform plane wave in lossless media, time-average electric and magnetic stored energies are equal, total flow is purely real along propagation, and reflection at a boundary conserves power: incident equals reflected plus transmitted. **Skin depth** $\\delta = \\sqrt{2/(\\omega\\mu\\sigma)}$ in good conductors marks $1/e$ decay, with fields confined within a few $\\delta$ of the surface. No solution carries net power opposite its phase velocity in passive lossless media.'
          },
          {
            kind: 'application',
            body: 'Link and exposure analysis applies the trio $(v, \\eta, S)$ directly: free-space $v = c$ and $\\eta_0 \\approx 377$ ohms set antenna sizing and aperture gain, dielectric loading shrinks wavelength by $1/\\sqrt{\\epsilon_r}$ for miniaturization, and shielding effectiveness follows from $e^{-t/\\delta}$ through conductive sheets. Optical extensions replace $\\epsilon$ by frequency-dependent models (Drude, Lorentz) to capture plasmonic confinement below the diffraction scale. Research frontiers engineer $\\mu$ and $\\epsilon$ jointly in metamaterials to shape $v$ and $\\eta$ independently, enabling lenses and cloaks that natural media cannot provide.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'Combining the curl laws in a chargeless region eliminates one field and leaves a wave equation for the other. Its sinusoidal solutions define speed, impedance and power flow in one stroke. This section derives that equation and accounts the energy it carries.',
    objectives: [
      'Derive the wave equation in lossless charge-free media',
      'Compute speed, impedance and wavelength from material constants',
      'Evaluate time-average power with the Poynting vector'
    ],
    concepts: [
      {
        term: 'Wave equation lossless',
        kind: 'theorem',
        statement: 'Chargeless currentless media give **`wave`** `WAVE` equations $$\\nabla^{2}\\mathbf{E} = \\mu\\epsilon\\frac{\\partial^{2}\\mathbf{E}}{\\partial t^{2}}, \\quad \\nabla^{2}\\mathbf{H} = \\mu\\epsilon\\frac{\\partial^{2}\\mathbf{H}}{\\partial t^{2}}.$$ Speed follows **`c`** `SPD` as $$v = \\frac{1}{\\sqrt{\\mu\\epsilon}}.$$',
        detail: 'Curl of Faraday with Ampere-Maxwell substituted and vector identity $\\nabla\\times\\nabla\\times = \\nabla(\\nabla\\cdot) - \\nabla^{2}$ produce the result. Free space gives $v = 3\\times10^{8}$ m per s.'
      },
      {
        term: 'Plane-wave parameters',
        kind: 'definition',
        statement: 'Forward wave **`E`** `FW` reads $$\\mathbf{E} = \\hat{x}E_{0}\\cos(\\omega t - \\beta z), \\quad \\beta = \\omega\\sqrt{\\mu\\epsilon}, \\quad \\lambda = \\frac{2\\pi}{\\beta}.$$ Impedance **`ETA`** `IMP` links amplitudes as $$\\eta = \\frac{E_{0}}{H_{0}} = \\sqrt{\\frac{\\mu}{\\epsilon}}.$$',
        detail: 'Free-space $\\eta_0 = 377$ ohms. At $300$ MHz wavelength is $1$ m; at $3$ GHz it is $0.1$ m.'
      },
      {
        term: 'Poynting vector',
        kind: 'definition',
        statement: 'Instantaneous flow **`S`** `FLOW` is $$\\mathbf{S} = \\mathbf{E}\\times\\mathbf{H}$$ watts per sq m, and sinusoidal average is **half real cross** `AVG` with $$\\langle\\mathbf{S}\\rangle = \\frac{1}{2}\\Re\\{\\mathbf{E}\\times\\mathbf{H}^{*}\\}.$$ Peak $E_0$ gives $$\\langle S\\rangle = \\frac{E_{0}^{2}}{2\\eta}.$$',
        detail: 'A $10$ V per m peak in free space averages $$\\frac{100}{754}$ = 0.133$ W per sq m. Direction $E$ cross $H$ is the propagation axis for transverse waves.'
      },
      {
        term: 'Lossless versus lossy propagation',
        kind: 'law',
        statement: 'Lossless constant **`beta`** `BETA` is purely real while conducting media add **attenuation** `ALPHA` with $$\\gamma = \\alpha + j\\beta, \\quad \\langle S(z)\\rangle = \\langle S(0)\\rangle e^{-2\\alpha z}.$$ Power halves every **skin-like** `SKIN` distance $\\ln 2 / 2\\alpha$.',
        detail: 'Seawater at megahertz shows $\\alpha$ near $\\beta$, killing waves within meters. Good dielectrics keep $\\alpha \\ll \\beta$ over kilometers.'
      },
      {
        term: 'Energy density balance',
        kind: 'insight',
        statement: 'Electric and magnetic densities **`we`**, **`wm`** `DENS` share energy equally in transit with $$w_{e} = \\tfrac{1}{2}\\epsilon E^{2}, \\quad w_{m} = \\tfrac{1}{2}\\mu H^{2}, \\quad \\langle w_{e}\\rangle = \\langle w_{m}\\rangle.$$ Their sum streams at **`v`** `VEL` since $$\\langle S\\rangle = v\\langle w\\rangle.$$',
        detail: 'A $1$ microJ per cubic m store moving at $2\\times10^{8}$ m per s carries $200$ W per sq m. Standing waves instead shuttle between pure electric and pure magnetic instants.'
      }
    ],
    examples: [
      {
        title: 'Wave in a dielectric with er 4',
        problem: 'Lossless medium has relative permittivity 4 and unity permeability at 150 MHz. Find speed, wavelength and impedance.',
        steps: [
          { label: 'Step 1', text: 'Scale free-space values by the index.\n```text\nv = c/sqrt(4) = 1.5e8 m/s\neta = 377/sqrt(4) = 188.5 ohm\nlambda = v/f = 1.5e8/1.5e8 = 1.0 m\n```' },
          { label: 'Step 2', text: 'Speed halves because $\\sqrt{\\mu\\epsilon}$ doubles. Impedance halves as $\\sqrt{\\mu/\\epsilon}$ with $\\epsilon$ fourfold.' },
          { label: 'Step 3', text: 'Propagation constant $\\beta = 2\\pi/1 = 6.28$ rad per m. Fields stay in ratio $188.5$ everywhere.' }
        ],
        result: 'Speed 150 Mm per s, wavelength 1 m, impedance near 189 ohms.'
      },
      {
        title: 'Power of a 20 V per m peak wave',
        problem: 'Plane wave in free space has peak E 20 V per m. Find average density flow and total through 2 sq m.',
        steps: [
          { label: 'Step 1', text: 'Apply the peak-to-average rule.\n```text\n<S> = E0^2/(2*eta) = 400/754 = 0.531 W/m^2\nP = 0.531*2 = 1.062 W\n```' },
          { label: 'Step 2', text: 'Numerator $400$ divided by $754$ gives $0.531$. RMS form $E_{rms}^{2}/\\eta$ with $E_{rms} = 20/\\sqrt{2}$ agrees.' },
          { label: 'Step 3', text: 'Doubling the aperture to $2$ sq m doubles power to $1.06$ W for uniform illumination.' }
        ],
        result: 'Average near 0.53 W per sq m; about 1.06 W through two square meters.'
      }
    ],
    keyTakeaways: [
      'Curl laws combine into wave equations with speed one over root mu epsilon.',
      'Beta sets wavelength; eta sets the E to H ratio.',
      'Poynting cross product tracks power; half real cross averages it.',
      'Loss adds exponential decay with power falling twice as fast as field.'
    ],
    quiz: [
      // PYQ-pattern: wavelength impedance and Poynting-average numerics
      {
        q: 'er 9, mur 1 lossless. Speed and impedance are:',
        options: ['c and 377', 'c/3 and $\\frac{377}{3}$', '3c and 3*377', 'c/9 and $\\frac{377}{9}$'],
        answer: 1,
        explanation: 'Step 1: Speed divides by sqrt of 9 which is 3. Step 2: Impedance divides by sqrt of 9 which is 3. Step 3: Values are c over 3 and 377 over 3. Step 4: Squaring to 9 confuses root with linear.'
      },
      {
        q: 'Peak E 10 in free space gives average S:',
        options: ['13.3 W per sq m', '1.33 W per sq m', '0.133 W per sq m', '0.013 W per sq m'],
        answer: 2,
        explanation: 'Step 1: Square gives 100. Step 2: Denominator 2 times 377 is 754. Step 3: 100 divided by 754 is 0.133. Step 4: Ten times larger needs 100 times power.'
      },
      {
        q: 'Frequency 300 MHz in free space. Wavelength is:',
        options: ['0.1 m', '10 m', '100 m', '1 m'],
        answer: 3,
        explanation: 'Step 1: Lambda equals c over f. Step 2: 3e8 divided by 3e8 equals 1. Step 3: 0.1 suits 3 GHz instead. Step 4: 10 suits 30 MHz instead.'
      },
      {
        q: 'Field decays as exp(-alpha z). Power decays as:',
        options: ['exp(-2 alpha z)', 'exp(-alpha z)', 'exp(-alpha z squared)', 'constant'],
        answer: 0,
        explanation: 'Step 1: Power goes as field squared. Step 2: Square of exp is exp of twice. Step 3: Factor 2 doubles the decay rate. Step 4: Constant ignores loss.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.3
  {
    sectionId: 'ece-e-emft-s18',
    readingTime: 10,
    intro: 'Waves meeting a boundary split into reflected and transmitted parts whose amplitudes follow the Fresnel rules. At special angles reflection vanishes or transmission turns evanescent. Polarization then describes the shape traced by the tip of the electric vector in time.',
    objectives: [
      'Apply normal-incidence reflection and transmission coefficients',
      'Locate Brewster zero-reflection and critical total-reflection angles',
      'Classify linear, circular and elliptical polarization from components'
    ],
    concepts: [
      {
        term: 'Normal-incidence coefficients',
        kind: 'theorem',
        statement: 'Impedances **`eta1`**, **`eta2`** `IMP` give amplitude **reflection** `GAMMA` and **transmission** `TAU` as $$\\Gamma = \\frac{\\eta_2 - \\eta_1}{\\eta_2 + \\eta_1}, \\qquad \\tau = \\frac{2\\eta_2}{\\eta_2 + \\eta_1}.$$ Power fractions are **`R`** and **`T`** with $$R = |\\Gamma|^{2}, \\quad T = 1 - R.$$',
        detail: 'Free space $377$ to dielectric $189$ gives $\\Gamma = -\\frac{1}{3}$ and $R = $\\frac{1}{9}$$. Sign flips the phase by $180$ degrees while power ignores it.'
      },
      {
        term: 'Brewster angle',
        kind: 'law',
        statement: 'Parallel polarization reflects **zero** `ZERO` when incidence **`thetaB`** `BREW` satisfies $$\\tan\\theta_{B} = \\sqrt{\\frac{\\epsilon_2}{\\epsilon_1}}.$$ Nonmagnetic air to glass with index **`1.5`** `GLASS` gives $$\\theta_B = \\tan^{-1} 1.5 \\approx 56.3^{\\circ}.$$',
        detail: 'Only the parallel component nulls; perpendicular still reflects. Reflected and transmitted rays stand orthogonal at this tuning.'
      },
      {
        term: 'Total internal reflection',
        kind: 'law',
        statement: 'Dense-to-rare incidence beyond **critical** `CRIT` angle $$\\theta_c = \\sin^{-1}\\!\\left(\\frac{n_2}{n_1}\\right)$$ transmits **nothing** `NONE` on average and reflects **all** `ALL` power. Fields past the wall are **evanescent** `EVAN` decaying as $$E \\propto e^{-\\alpha x}.$$',
        detail: 'Glass $n = 1.5$ to air gives $\\theta_c = \\sin^{-1}($\\frac{1}{1}$.5) = 41.8$ degrees. Prisms and fibres guide on this all-mirror effect.'
      },
      {
        term: 'Oblique Fresnel split',
        kind: 'method',
        statement: 'Perpendicular **`s`** `PERP` and parallel **`p`** `PARA` coefficients differ by cosine-weighted impedances **`Zs`**, **`Zp`** `COS` with $$\\Gamma_s = \\frac{Z_2 - Z_1}{Z_2 + Z_1}, \\quad \\Gamma_p = \\frac{Z_1 - Z_2}{Z_1 + Z_2}.$$ Each obeys its own **phase** `PHASE`.',
        detail: 'Grazing incidence drives both toward minus one, a hard mirror. Normal incidence reunites the two formulas into the single impedance ratio.'
      },
      {
        term: 'Polarization states',
        kind: 'definition',
        statement: 'Equal in-phase components give **linear** `LIN` tilt, equal quadrature components give **circular** `CIRC`, unequal quadrature give **elliptical** `ELL` shape. Axial ratio **`AR`** `RATIO` reads $$AR = \\frac{E_{major}}{E_{minor}}, \\quad AR = 1 \\to circular.$$',
        detail: 'Components $E_x = 3\\cos$ and $E_y = 3\\sin$ trace a circle of radius $3$. Amplitudes $4$ and $2$ in quadrature trace an ellipse of ratio $2$.'
      }
    ],
    examples: [
      {
        title: 'Air to dielectric at normal incidence',
        problem: 'Wave in free space strikes dielectric with eta 188.5 ohms head-on. E incident peak 10 V per m. Find reflected, transmitted and power split.',
        steps: [
          { label: 'Step 1', text: 'Insert impedances into the ratio.\n```text\nGamma=(188.5-377)/(188.5+377)=-188.5/565.5=-1/3\ntau=2*188.5/565.5=2/3\n```' },
          { label: 'Step 2', text: 'Amplitudes are $E_r = -3.33$ V per m and $E_t = 6.67$ V per m. Negative sign is a half-cycle phase flip.' },
          { label: 'Step 3', text: 'Power reflects $R = $\\frac{1}{9}$ = 11.1$ percent and transmits $88.9$ percent; check $0.111 + 0.889 = 1$.' }
        ],
        result: 'Reflection minus one third, transmission two thirds, power 11 and 89 percent.'
      },
      {
        title: 'Brewster and critical for glass',
        problem: 'Glass index 1.5 against air index 1. Compute Brewster from air side and critical from glass side.',
        steps: [
          { label: 'Step 1', text: 'Use tangent for zero and arcsine for trapping.\n```text\nthetaB = arctan(1.5/1) = 56.3 deg\nthetac = arcsin(1/1.5) = 41.8 deg\n```' },
          { label: 'Step 2', text: 'Parallel light at $56.3$ degrees from air leaves no reflection. Any ray inside glass past $41.8$ degrees cannot escape.' },
          { label: 'Step 3', text: 'Between $41.8$ and $90$ degrees internally the wall is a perfect mirror with evanescent tail outside.' }
        ],
        result: 'Brewster near 56.3 degrees; critical near 41.8 degrees.'
      }
    ],
    keyTakeaways: [
      'Impedance contrast fixes normal reflection and transmission.',
      'Brewster nulls parallel reflection at the tangent angle.',
      'Beyond critical all power reflects with evanescent exterior.',
      'Component balance and phase set linear, circular or elliptical trace.'
    ],
    quiz: [
      // PYQ-pattern: Fresnel power split with Brewster and critical angles
      {
        q: 'eta1 377, eta2 189. Power reflected is:',
        options: [`$\\frac{1}{4}$`, `$\\frac{1}{2}$`, `$\\frac{1}{9}$`, `$\\frac{8}{9}$`],
        answer: 2,
        explanation: 'Step 1: Gamma is (189 minus 377) over 566 which is minus $\\frac{1}{3}$. Step 2: Power squares amplitude. Step 3: Square of $\\frac{1}{3}$ is $\\frac{1}{9}$. Step 4: $\\frac{8}{9}$ is transmitted, not reflected.'
      },
      {
        q: 'Brewster angle air to index 1.5 satisfies:',
        options: ['sin = 1.5', 'tan = 1 over 1.5', 'cos = 1.5', 'tan = 1.5'],
        answer: 3,
        explanation: 'Step 1: Parallel null needs tangent of epsilon ratio. Step 2: Ratio is 1.5 over 1. Step 3: Arctan gives 56.3 degrees. Step 4: Sine form suits critical, not Brewster.'
      },
      {
        q: 'Critical angle glass 1.5 to air is about:',
        options: ['41.8 deg', '90 deg', '56.3 deg', '30 deg'],
        answer: 0,
        explanation: 'Step 1: Formula is arcsin of 1 over 1.5. Step 2: Ratio is 0.667. Step 3: Arcsin gives 41.8 degrees. Step 4: 56.3 is Brewster from air.'
      },
      {
        q: 'Ex 3 cos, Ey 3 sin traces:',
        options: ['linear tilt', 'circle radius 3', 'ellipse ratio 2', 'standing null'],
        answer: 1,
        explanation: 'Step 1: Amplitudes equal at 3 and 3. Step 2: Phase differs by 90 degrees. Step 3: Tip obeys x squared plus y squared equals 9. Step 4: Equal quadrature is circular.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.4
  {
    sectionId: 'ece-e-emft-s19',
    readingTime: 9,
    intro: 'Real media bend different frequencies by different amounts, so phase fronts and energy packets travel at different speeds. Conductors add strong decay that confines fields to a thin skin. This section quantifies both velocities and that penetration depth.',
    objectives: [
      'Distinguish phase velocity from group velocity in dispersive media',
      'Derive skin depth and apply exponential decay inside conductors',
      'Classify good dielectrics versus good conductors by loss tangent'
    ],
    concepts: [
      {
        term: 'Phase versus group velocity',
        kind: 'definition',
        statement: 'Constant-phase fronts move at **`vp`** `PHASE` while envelopes move at **`vg`** `GROUP` with $$v_p = \\frac{\\omega}{\\beta}, \\qquad v_g = \\frac{d\\omega}{d\\beta}.$$ Nondispersive lines keep **`vp`** equal to **`vg`** `EQUAL`.',
        detail: 'Waveguides slow envelopes below $c$ while fronts exceed $c$, with product $v_p v_g = c^{2}$ in hollow guides. Information rides the envelope, preserving causality.'
      },
      {
        term: 'Skin depth formula',
        kind: 'law',
        statement: 'Good conductors decay with **`delta`** `SKIN` penetration $$\\delta = \\sqrt{\\frac{2}{\\omega\\mu\\sigma}}$$ and field falls as **one over e** `EDECAY` per depth with $$E(z) = E_0 e^{-z/\\delta}.$$ Power falls **twice as fast** `PDECAY`.',
        detail: 'Copper at $1$ MHz gives $\\delta \\approx 66$ micro-m. At $1$ GHz it shrinks near $2$ micro-m, forcing hollow or plated conductors.'
      },
      {
        term: 'Loss tangent classification',
        kind: 'method',
        statement: 'Ratio **`tanD`** `LOSS` decides regime as $$\\tan\\delta_L = \\frac{\\sigma}{\\omega\\epsilon}.$$ Values far below **one** `SMALL` mark dielectrics and far above **one** `LARGE` mark conductors, with $$\\tan\\delta_L \\ll 1 \\to dielectric, \\quad \\gg 1 \\to conductor.$$',
        detail: 'Seawater $\\sigma = 4$, $\\epsilon_r = 81$ at $1$ MHz gives $\\tan \\approx 890$, firmly conducting. Mica near $10^{-4}$ is firmly insulating.'
      },
      {
        term: 'Conductor wave impedance',
        kind: 'theorem',
        statement: 'Inside good conductors impedance **`etaC`** `CIMP` has equal **45-degree** `DEG45` parts with $$\\eta_c = (1+j)\\sqrt{\\frac{\\omega\\mu}{2\\sigma}} = (1+j)\\frac{1}{\\sigma\\delta}.$$ Magnetic field **lags** `LAG` electric by $45$ degrees.',
        detail: 'Copper at $1$ MHz gives $|\\eta_c| \\approx 0.012$ ohms, a near short that reflects almost everything. Surface resistance $1/\\sigma\\delta$ sets wall loss.'
      },
      {
        term: 'Dispersion broadening',
        kind: 'insight',
        statement: 'Frequency-dependent **`beta`** `BETA` spreads pulses because components arrive at different **`vg`** speeds, widening width by $$\\Delta T \\approx L\\left|\\frac{d}{d\\omega}\\frac{1}{v_g}\\right|\\Delta\\omega.$$ Narrow **spectra** `SPEC` and equalized paths **limit** `LIM` the spread.',
        detail: 'A $10$-ns pulse over $10$ km of fibre with $17$ ps per nm-km and $1$ nm width spreads $170$ ps. Single-mode lasers and compensation fibres contain the effect.'
      }
    ],
    examples: [
      {
        title: 'Skin depth of copper at two frequencies',
        problem: 'Copper sigma 5.8e7 S per m. Compute delta at 60 Hz and 1 MHz and the field after three depths.',
        steps: [
          { label: 'Step 1', text: 'Insert mu0 and each omega.\n```text\ndelta=sqrt(2/(w*mu0*sigma))\n60 Hz: 8.5 mm | 1 MHz: 66 um\nE(3d)=E0*e^-3=0.05 E0\n```' },
          { label: 'Step 2', text: 'At $60$ Hz $\\omega = 377$ rad per s gives $\\delta = 8.5$ mm. At $10^{6}$ Hz $\\omega = 6.28\\times10^{6}$ gives $66$ micro-m.' },
          { label: 'Step 3', text: 'Three depths leave $e^{-3} = 0.05$, so $95$ percent of field is gone within $25.5$ mm at mains and $198$ micro-m at radio.' }
        ],
        result: 'Power mains penetrate millimeters; radio stays within tens of microns.'
      },
      {
        title: 'Phase and group in a waveguide-like law',
        problem: 'Medium obeys beta squared equals (w squared minus wc squared) over c squared with cutoff wc. Find vp and vg above cutoff.',
        steps: [
          { label: 'Step 1', text: 'Solve for the two velocities symbolically.\n```text\nvp = w/beta = c / sqrt(1-(wc/w)^2) > c\nvg = dW/dB = c*sqrt(1-(wc/w)^2) < c\nvp*vg = c^2\n```' },
          { label: 'Step 2', text: 'At $\\omega = 2\\omega_c$, $v_p = 1.155c$ and $v_g = 0.866c$. Fronts outrun light while energy stays below it.' },
          { label: 'Step 3', text: 'Near cutoff $v_g$ approaches zero and pulses stall; far above, both approach $c$.' }
        ],
        result: 'Product locked at c squared; information respects vg below c.'
      }
    ],
    keyTakeaways: [
      'Phase tracks crests; group tracks energy and information.',
      'Skin depth shrinks with root frequency, permeability and conductivity.',
      'Loss tangent sorts dielectrics from conductors at unity.',
      'Conductor impedance is tiny with 45-degree lag.'
    ],
    quiz: [
      // PYQ-pattern: skin-depth scaling with phase and group relations
      {
        q: 'Skin depth scales with frequency as:',
        options: ['proportional to f', 'independent of f', 'proportional to f squared', 'proportional to 1/sqrt(f)'],
        answer: 3,
        explanation: 'Step 1: Delta has omega in denominator under root. Step 2: 100 times frequency divides depth by 10. Step 3: 60 Hz mm versus 1 MHz microns confirms it. Step 4: Linear or square laws mismatch the root.'
      },
      {
        q: 'Copper at 1 MHz, delta 66 um. Field at 132 um depth is:',
        options: ['0.135 of surface', '0.37 of surface', '0.05 of surface', 'zero'],
        answer: 0,
        explanation: 'Step 1: 132 is 2 depths. Step 2: Factor is e to minus 2. Step 3: e squared is 7.39, inverse 0.135. Step 4: 0.37 suits one depth, 0.05 three.'
      },
      {
        q: 'Waveguide-like law gives vp and vg product:',
        options: ['zero', 'c squared', 'c', 'infinity'],
        answer: 1,
        explanation: 'Step 1: vp exceeds c above cutoff. Step 2: vg stays below c. Step 3: Derivatives give product c squared. Step 4: Information still rides vg safely.'
      },
      {
        q: 'tan 890 marks the medium as:',
        options: ['good dielectric', 'lossless', 'good conductor', 'magnetic wall'],
        answer: 2,
        explanation: 'Step 1: Compare against unity threshold. Step 2: 890 far exceeds 1. Step 3: Conduction current dominates displacement. Step 4: Dielectrics sit far below 1.'
      }
    ]
  }
]
