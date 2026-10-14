import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 44: Particles and Cosmology.

export const youngCh44Content: SectionContent[] = [
  {
    sectionId: "young-ch44-s1",
    readingTime: 6,
    intro: "From cathode rays to quarks the particle roster exploded then unified: electron, nucleus, antimatter, mesons, strange particles, quarks, force carriers. Each surprise arrived as an unexpected track, peak, or symmetry. Young traces the zoo-to-quark arc that motivates the Standard Model.",
    objectives: [
      "Order electron, proton, neutron, positron, muon, pion discoveries",
      "Explain strangeness and the Eightfold Way pattern",
      "State the quark proposal that tamed the zoo"
    ],
    concepts: [
      {
        term: "First particles",
        kind: "definition",
        statement: "**Electron (1897), proton (1919), neutron (1932), positron (1932)** built atoms plus antimatter.",
        detail: "Thomson, Rutherford, Chadwick, Anderson: rays, scattering, beryllium gammas, cloud-chamber curls."
      },
      {
        term: "Yukawa meson",
        kind: "theorem",
        statement: "**Pion ($140$ MeV) mediates nuclear force** with range $\\hbar/mc \\approx 1.4$ fm, found $1947$ in cosmic rays.",
        detail: "Muon ($105$ MeV) fooled everyone first: who ordered that?"
      },
      {
        term: "Strange particles",
        kind: "law",
        statement: "**Kaons/Lambdas pair-produce fast, decay slow**: associated production preserves strangeness, weak decay violates it.",
        detail: "Rochester-Butler V-tracks (1947) forced a new quantum number."
      },
      {
        term: "Eightfold Way",
        kind: "method",
        statement: "**SU(3) flavor patterns** (octets, decuplet) organized hadrons; $\\Omega^{-}$ was predicted then found $1964$.",
        detail: "Mendeleev moment for particles: pattern demanded constituents."
      },
      {
        term: "Quark proposal",
        kind: "insight",
        statement: "**u, d, s quarks** (Gell-Mann, Zweig $1964$) build mesons ($q\\bar{q}$) and baryons ($qqq$); SLAC scattering proved points inside.",
        detail: "Charges $+2/3$, $-1/3$ summed to observed integer hadron charges."
      }
    ],
    examples: [
      {
        title: "Pion range",
        problem: "Estimate nuclear-force range from $m_{\\pi} = 140$ MeV/c-squared.",
        steps: [
          { label: "Step 1: Compton", text: "$R = \\hbar c/mc^{2} = 197.3/140 = 1.41$ fm." },
          { label: "Step 2: Check", text: "Matches $1$-$2$ fm nuclear attraction span." },
          { label: "Step 3: Massless limit", text: "$m \\to 0$ gives infinite range: photon versus pion contrast." }
        ],
        result: "$1.4$ fm Yukawa range."
      },
      {
        title: "Omega prediction",
        problem: "Decuplet $sss$ state: predict charge and strangeness.",
        steps: [
          { label: "Step 1: Charge", text: "$3(-1/3) = -1$." },
          { label: "Step 2: Strangeness", text: "$3(-1) = -3$." },
          { label: "Step 3: Found", text: "$\\Omega^{-}$ $1672$ MeV $1964$: pattern vindicated." }
        ],
        result: "$\\Omega^{-}$ charge $-1$, strangeness $-3$."
      }
    ],
    keyTakeaways: [
      "Beams plus cosmic rays grew electron-nucleus into a zoo.",
      "Strangeness plus SU(3) patterns demanded constituents.",
      "Quarks $u,d,s$ organized mesons and baryons."
    ],
    quiz: [
      {
        q: "Positron discovery proved:",
        options: ["Quarks", "Antimatter exists", "Neutrinos", "Gluons"],
        answer: 1,
        explanation: "Anderson's 1932 curl matched electron mass, opposite charge."
      },
      {
        q: "Pion range follows from its:",
        options: ["Charge", "Mass via hbar/mc", "Spin", "Color"],
        answer: 1,
        explanation: "Yukawa range is the Compton wavelength."
      },
      {
        q: "Omega-minus validated:",
        options: ["QED", "SU(3) decuplet prediction", "Relativity", "String theory"],
        answer: 1,
        explanation: "Missing apex particle appeared at predicted mass."
      }
    ]
  },
  {
    sectionId: "young-ch44-s2",
    readingTime: 6,
    intro: "Cyclotrons spiral, synchrotrons ramp, colliders smash: $E = pc$ plus magnets sort momentum as $p = qBR$. Calorimeters stop and weigh energy; trackers curve and time identity. Luminosity, not just energy, discovers rare processes.",
    objectives: [
      "State cyclotron $f = qB/2\\pi m$ and synchrotron radiation scaling",
      "Apply $p(\\mathrm{GeV/c}) = 0.3\\,B(\\mathrm{T})\\,R(\\mathrm{m})$",
      "Distinguish tracker, calorimeter, muon-system roles"
    ],
    concepts: [
      {
        term: "Cyclotron frequency",
        kind: "theorem",
        statement: "**$f = qB/2\\pi m$** independent of $v$ nonrelativistically; relativity detunes, synchrotrons ramp $f$ and $B$.",
        detail: "Lawrence $27$-inch reached $4.8$ MeV protons on this constancy."
      },
      {
        term: "Magnetic rigidity",
        kind: "method",
        statement: "**$p = qBR$** ($0.3$ rule in GeV/T-m) reads momentum from curvature.",
        detail: "LHC $8.3$ T over $4.3$ km bends $7$ TeV protons around."
      },
      {
        term: "Synchrotron loss",
        kind: "law",
        statement: "**$P \\propto E^{4}/(m^{4}R)$**: electrons radiate $10^{13}$ times protons at equal $E$, forcing linear e-colliders.",
        detail: "LEP lost GeV per turn; LHC protons lose keV."
      },
      {
        term: "Detector stack",
        kind: "definition",
        statement: "**Tracker (curves) then ECAL/HCAL (stop) then muon iron**: each layer spends a particle type fully.",
        detail: "Missing transverse energy flags neutrinos."
      },
      {
        term: "Luminosity",
        kind: "notation",
        statement: "**Events $= \\sigma \\times \\int L\\,dt$**; Higgs needed $10^{34}$/cm-squared-s for femtobarn cross sections.",
        detail: "Brightness rivals energy in discovery reach."
      }
    ],
    figures: [
      {
        caption: "Cyclotron spiral: $f = qB/2\pi m$ gaps accelerate each half turn to $p = qBR$",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="Cyclotron spiral: f = qB/2\pi m gaps accelerate each half turn to p = qBR"><rect x="0" y="0" width="400" height="190" fill="none"/><path d="M 200 95 C 200 80, 230 80, 230 95 C 230 115, 190 115, 185 95 C 180 65, 235 60, 245 95 C 255 135, 175 145, 160 100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="195" y1="20" x2="195" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/><text x="240" y="50" font-size="12" fill="currentColor">growing spiral r = mv/qB</text><text x="120" y="170" font-size="12" fill="currentColor">RF gap kicks each crossing</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "LHC rigidity",
        problem: "LHC $p = 7000$ GeV/c, bend $R = 4300$ m. Find $B$.",
        steps: [
          { label: "Step 1: Rule", text: "$B = p/(0.3R) = 7000/(0.3 \\times 4300) = 5.43$ T average." },
          { label: "Step 2: Dipoles", text: "Dipoles fill $2/3$: $8.3$ T operating with margin." },
          { label: "Step 3: Tevatron check", text: "$1000$ GeV over $1$ km: $3.3$ T average, $4.2$ T dipoles." }
        ],
        result: "$5.4$ T average, $8.3$ T dipole design."
      },
      {
        title: "Higgs event count",
        problem: "$\\sigma = 50$ fb at $L = 10^{34}$/cm-squared-s. Events per $100$ days?",
        steps: [
          { label: "Step 1: Rate", text: "$50 \\times 10^{-39} \\times 10^{34} = 5 \\times 10^{-4}$ per s." },
          { label: "Step 2: Time", text: "$8.64 \\times 10^{6}$ s per $100$ d." },
          { label: "Step 3: Count", text: "$4320$ produced; branching and efficiency keep dozens." }
        ],
        result: "$\\sim 4000$ Higgs made per $100$ days."
      }
    ],
    keyTakeaways: [
      "$p = qBR$ plus $f = qB/2\\pi m$ design every accelerator.",
      "Electron circles bleed $E^{4}/m^{4}$; protons circle farther.",
      "Luminosity times cross section is discovery rate."
    ],
    quiz: [
      {
        q: "Cyclotron frequency depends on:",
        options: ["Velocity", "qB/m only (nonrelativistic)", "Radius only", "Temperature"],
        answer: 1,
        explanation: "Uniform-B period is speed independent until relativity."
      },
      {
        q: "p = 3 GeV/c in B = 2 T. Bending radius is:",
        options: ["$5$ m", "$0.2$ m", "$18$ m", "$0.02$ m"],
        answer: 0,
        explanation: "$R = 3/(0.3\\times 2) = 5$ m."
      },
      {
        q: "Muons are caught:",
        options: ["In the tracker only", "Beyond calorimeters in muon chambers", "Never", "By stopping in beam pipe"],
        answer: 1,
        explanation: "Penetrating muons outlive all absorbers."
      }
    ]
  },
  {
    sectionId: "young-ch44-s3",
    readingTime: 6,
    intro: "Four interactions with four mediators sort every process: gravity ($G$), weak ($W/Z$), electromagnetic ($\\gamma$), strong ($g$). Charge, baryon, and lepton numbers gate decays absolutely. Feynman vertices turn conservation into pictures.",
    objectives: [
      "Rank interactions by strength and range with mediators",
      "Apply charge, $B$, $L_{e}$, $L_{\\mu}$, $L_{\\tau}$ conservation",
      "Read basic Feynman vertices (QED, weak, QCD)"
    ],
    concepts: [
      {
        term: "Four forces",
        kind: "definition",
        statement: "**Strong ($1$, fm, gluons), EM ($1/137$, infinite, photon), weak ($10^{-6}$, $10^{-18}$ m, W/Z), gravity ($10^{-39}$, infinite, graviton?)**.",
        detail: "Strengths quoted at GeV scale; running reshapes far ends."
      },
      {
        term: "Absolute conservations",
        kind: "law",
        statement: "**Energy, momentum, angular momentum, charge, $B$, each $L$** hold in every reaction, no exceptions observed.",
        detail: "Proton decay ($B$ violation) unseen past $10^{34}$ yr."
      },
      {
        term: "Partial conservations",
        kind: "theorem",
        statement: "**Strangeness, charm, parity hold for strong/EM but fall to weak**: kaons pair-make, singly decay.",
        detail: "Weak alone changes flavor and handedness."
      },
      {
        term: "Mediators carry force",
        kind: "insight",
        statement: "**Mass sets range** ($\\hbar/mc$): massless $\\gamma$, $g$ reach far/confined; $80$-$90$ GeV W/Z reach $10^{-18}$ m.",
        detail: "Yukawa's rule from Section 44.1 generalizes."
      },
      {
        term: "Feynman vertices",
        kind: "method",
        statement: "**Lines meet three-at-once** (fermion-fermion-boson); diagrams expand amplitudes, not trajectories.",
        detail: "Beta decay: $d \\to u + W^{-}$, $W^{-} \\to e^{-}\\bar{\\nu}$."
      }
    ],
    figures: [
      {
        caption: "Feynman vertices: fermion lines meet bosons; charge, $B$, $L$ conserved at each vertex",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="Feynman vertices: fermion lines meet bosons; charge, B, L conserved at each vertex"><rect x="0" y="0" width="400" height="190" fill="none"/><line x1="60" y1="140" x2="140" y2="95" stroke="currentColor" stroke-width="2"/><line x1="60" y1="50" x2="140" y2="95" stroke="currentColor" stroke-width="2"/><line x1="140" y1="95" x2="220" y2="95" stroke="currentColor" stroke-width="2.5"/><line x1="260" y1="140" x2="330" y2="95" stroke="currentColor" stroke-width="2"/><line x1="260" y1="50" x2="330" y2="95" stroke="currentColor" stroke-width="2"/><line x1="220" y1="95" x2="260" y2="95" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><text x="150" y="80" font-size="12" fill="currentColor">W / gamma / g</text><text x="60" y="170" font-size="12" fill="currentColor">fermion in, fermion out + boson</text></svg>',
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "Allowed or not?",
        problem: "$p \\to e^{+} + \\pi^{0}$? $n \\to p + e^{-} + \\bar{\\nu}_{e}$?",
        steps: [
          { label: "Step 1: Proton", text: "$B$: $1 \\to 0$ violated, $L$: $0 \\to -1$ violated: forbidden (searched, unseen)." },
          { label: "Step 2: Neutron", text: "$B$: $1 \\to 1$; $L_{e}$: $0 \\to 1 - 1 = 0$; charge $0 \\to +1 - 1 = 0$: allowed, $880$ s lifetime." },
          { label: "Step 3: Moral", text: "Bookkeeping decides before dynamics computes." }
        ],
        result: "Proton decay forbidden; neutron beta allowed."
      },
      {
        title: "Range from mass",
        problem: "W mass $80.4$ GeV. Estimate weak range.",
        steps: [
          { label: "Step 1: Compton", text: "$\\hbar c/mc^{2} = 197.3$ MeV-fm $/ 80400$ MeV $= 0.00245$ fm." },
          { label: "Step 2: Meters", text: "$2.5 \\times 10^{-18}$ m: contact at nuclear scales." },
          { label: "Step 3: Photon", text: "Massless gives infinite Coulomb range instead." }
        ],
        result: "$10^{-18}$ m weak range."
      }
    ],
    keyTakeaways: [
      "Mediators plus ranges plus strengths sort the four forces.",
      "$Q$, $B$, $L$ never break; flavor and parity break weakly.",
      "Vertices make conservation visual and computable."
    ],
    quiz: [
      {
        q: "Weak mediator masses give range about:",
        options: ["Infinite", "$1e-18$ m", "$1$ m", "$1$ fm exactly"],
        answer: 1,
        explanation: "80 GeV Compton wavelength is attometers."
      },
      {
        q: "Which is absolutely conserved?",
        options: ["Strangeness", "Baryon number", "Parity", "Charm"],
        answer: 1,
        explanation: "No confirmed violation; proton stability tests it."
      },
      {
        q: "Beta decay mediator is:",
        options: ["Photon", "W boson", "Gluon", "Graviton"],
        answer: 1,
        explanation: "Flavor-changing charged weak vertex."
      }
    ]
  },
  {
    sectionId: "young-ch44-s4",
    readingTime: 7,
    intro: "Hadrons are quark composites bound by color: baryons $qqq$, mesons $q\\bar{q}$, each white. Gluons carry color themselves, so the force strengthens with distance (confinement) and weakens up close (asymptotic freedom). Jets, not free quarks, reach detectors.",
    objectives: [
      "Build hadron charges from $u (+2/3)$, $d,s (-1/3)$",
      "State color singlets, gluon octet, confinement",
      "Explain asymptotic freedom and jets qualitatively"
    ],
    concepts: [
      {
        term: "Quark charges",
        kind: "definition",
        statement: "**$u,c,t$: $+2/3$; $d,s,b$: $-1/3$** in units of $e$; antiquarks negate.",
        detail: "Proton $uud = +1$; neutron $udd = 0$; pion $u\\bar{d} = +1$."
      },
      {
        term: "Color singlets",
        kind: "law",
        statement: "**Observed hadrons are colorless**: $r+g+b$ baryons, color-anticolor mesons; free color never appears.",
        detail: "Deep-inelastic plus $e^{+}e^{-}$ ratios fix $3$ colors."
      },
      {
        term: "Gluon octet",
        kind: "theorem",
        statement: "**$8$ bicolored gluons** self-couple, squeezing flux into tubes of tension $\\sim 1$ GeV/fm.",
        detail: "Self-interaction separates QCD from QED fundamentally."
      },
      {
        term: "Confinement",
        kind: "law",
        statement: "**Stretching stores $\\sim 1$ GeV/fm** until fresh $q\\bar{q}$ snaps out: quarks dress into jets, never isolate.",
        detail: "Top quark decays ($10^{-25}$ s) before dressing: bare-quark window."
      },
      {
        term: "Asymptotic freedom",
        kind: "theorem",
        statement: "**Close probes see weak coupling** ($\\alpha_{s}$ falls); Nobel 2004. Bjorken scaling plus logarithmic corrections confirm.",
        detail: "Partons look free in hard collisions, bound in spectra."
      }
    ],
    examples: [
      {
        title: "Delta++ quark content",
        problem: "$\\Delta^{++}$ charge $+2$, baryon. Give quarks.",
        steps: [
          { label: "Step 1: Options", text: "$uuu$: $3(2/3) = +2$, $B = 1$." },
          { label: "Step 2: Color", text: "Antisymmetric $rgb$ wave function saves Pauli for identical $u$ trio." },
          { label: "Step 3: Mass", text: "$1232$ MeV versus proton $938$: spin-spin excitation energy." }
        ],
        result: "$uuu$ decuplet state."
      },
      {
        title: "String breaking energy",
        problem: "Flux tube tension $1.0$ GeV/fm. How far to make a pion pair ($280$ MeV)?",
        steps: [
          { label: "Step 1: Length", text: "$0.280/1.0 = 0.28$ fm." },
          { label: "Step 2: Hadronization", text: "Femtometer stretch spawns fresh hadrons: jets of $\\sim$ GeV width." },
          { label: "Step 3: Detector", text: "Calorimeters see collimated hadron sprays, not partons." }
        ],
        result: "$0.3$ fm stretch hadronizes."
      }
    ],
    keyTakeaways: [
      "Fractional quarks sum to integer hadron charges.",
      "Color singlets only; gluons self-bind into tubes.",
      "Freedom up close, slavery at distance: jets are the evidence."
    ],
    quiz: [
      {
        q: "Neutron quark content is:",
        options: ["$uuu$", "$udd$", "$ddd$", "$uubar$"],
        answer: 1,
        explanation: "$2/3-1/3-1/3 = 0$."
      },
      {
        q: "Free quarks are unseen because of:",
        options: ["Low mass", "Confinement flux tubes", "No charge", "Fast decay only"],
        answer: 1,
        explanation: "Stretch energy pair-creates before isolation."
      },
      {
        q: "Asymptotic freedom means coupling:",
        options: ["Grows at short distance", "Falls at short distance", "Is constant", "Vanishes everywhere"],
        answer: 1,
        explanation: "Anti-screening by gluons reverses QED intuition."
      },
      {
        q: "Gluons number:",
        options: ["$1$", "$3$", "$8$", "$12$"],
        answer: 2,
        explanation: "Color octet minus singlet."
      }
    ]
  },
  {
    sectionId: "young-ch44-s5",
    readingTime: 7,
    intro: "Three generations of quarks and leptons plus $12$ force carriers plus the Higgs fit on one page: the Standard Model. It predicts $g-2$, $W/Z$, and Higgs rates to per-mille. Neutrino mass, dark matter, and hierarchy gaps point beyond.",
    objectives: [
      "List three generations with charges and the Higgs role",
      "State electroweak unification and Higgs mass generation",
      "Name beyond-Standard evidence (nu mass, dark matter, hierarchy)"
    ],
    concepts: [
      {
        term: "Fermion generations",
        kind: "definition",
        statement: "**(u,d,e,nu-e), (c,s,mu,nu-mu), (t,b,tau,nu-tau)**: increasing mass, identical charges and couplings.",
        detail: "Why three? Unknown; CP violation needs at least three."
      },
      {
        term: "Gauge bosons",
        kind: "definition",
        statement: "**$\\gamma$, $g(8)$, $W^{\\pm}$, $Z$** mediate EM, strong, weak; **Higgs ($125$ GeV)** breaks symmetry giving mass.",
        detail: "2012 LHC diphoton plus four-lepton peaks closed the roster."
      },
      {
        term: "Higgs mechanism",
        kind: "theorem",
        statement: "**Vacuum expectation $246$ GeV couples $m = yv/\\sqrt{2}$**; $W/Z$ eat Goldstones to gain $80$/$91$ GeV.",
        detail: "Yukawas span $10^{-6}$ (electron) to $1$ (top): flavor puzzle."
      },
      {
        term: "Precision triumphs",
        kind: "law",
        statement: "**$M_{W}$, $\\sin^{2}\\theta_{W}$, $g-2_{e}$ agree to $10^{-3}$-$10^{-9}$** after loops; theory errors beat experiments in places.",
        detail: "Top/Higgs masses were predicted before discovery from loop fits."
      },
      {
        term: "Beyond gaps",
        kind: "insight",
        statement: "**Massive neutrinos, dark matter/energy, matter asymmetry, hierarchy** need extensions (SUSY, extra dims, axions).",
        detail: "Null superpartner searches push scales past TeV."
      }
    ],
    examples: [
      {
        title: "Top Yukawa",
        problem: "Top $m = 173$ GeV from $v = 246$ GeV. Find $y_{t}$.",
        steps: [
          { label: "Step 1: Formula", text: "$y = \\sqrt{2}m/v = 1.414 \\times 173/246 = 0.995$." },
          { label: "Step 2: Meaning", text: "Order unity: top talks strongly to the Higgs." },
          { label: "Step 3: Electron", text: "$y_{e} = 1.414 \\times 0.000511/246 = 2.9 \\times 10^{-6}$: six orders weaker." }
        ],
        result: "$y_{t} \\approx 1$, $y_{e} \\approx 3 \\times 10^{-6}$."
      },
      {
        title: "Higgs to gammas",
        problem: "Why did $H \\to \\gamma\\gamma$ convince despite $0.2$ percent branching?",
        steps: [
          { label: "Step 1: Sharp", text: "Narrow $125$ GeV bump over smooth background: loops via top/$W$." },
          { label: "Step 2: Resolution", text: "Photons measure best: $1$ GeV bins resolve the peak." },
          { label: "Step 3: Spin", text: "Two-photon decay bans spin $1$ (Landau-Yang): scalar fingerprint." }
        ],
        result: "Clean narrow scalar peak at $125$ GeV."
      }
    ],
    keyTakeaways: [
      "Three generations plus bosons plus Higgs explain collider data.",
      "Higgs vacuum value prices every mass.",
      "Neutrinos, darkness, hierarchy demand more."
    ],
    quiz: [
      {
        q: "Higgs vacuum value is about:",
        options: ["$0.5$ MeV", "$246$ GeV", "$1$ eV", "$1$ TeV exactly"],
        answer: 1,
        explanation: "Fermi constant sets the electroweak scale."
      },
      {
        q: "Higgs mass is:",
        options: ["$0.511$ MeV", "$125$ GeV", "$80$ GeV", "$173$ GeV"],
        answer: 1,
        explanation: "2012 diphoton and four-lepton discovery."
      },
      {
        q: "Evidence beyond Standard Model includes:",
        options: ["Neutrino mass and dark matter", "Electron charge", "Photon mass", "Proton stability proof"],
        answer: 0,
        explanation: "Oscillations plus cosmology exceed the minimal model."
      }
    ]
  },
  {
    sectionId: "young-ch44-s6",
    readingTime: 7,
    intro: "Galaxies recede as $v = H_{0}d$ with $H_{0} \\approx 70$ km/s/Mpc: space itself expands. Standard candles (Cepheids, Type Ia) plus redshift ladder distances; $\\Lambda$CDM splits energy into $5$ percent atoms, $27$ percent dark matter, $68$ percent dark energy. Acceleration came from supernova dimming in 1998.",
    objectives: [
      "State Hubble's law and compute $H_{0}$-based ages and distances",
      "Explain distance ladder rungs to megaparsecs",
      "Give $\\Lambda$CDM budget and acceleration evidence"
    ],
    concepts: [
      {
        term: "Hubble's law",
        kind: "law",
        statement: "**$v = H_{0}d$**, $H_{0} = 70$ km/s/Mpc; $1/H_{0} \\approx 14$ Gyr sets the expansion age scale.",
        detail: "Local flows muddy nearby; law sharpens past $50$ Mpc."
      },
      {
        term: "Distance ladder",
        kind: "method",
        statement: "**Parallax to Cepheids ($L \\propto P$) to Type Ia (standardizable) to Hubble flow** bootstraps outward.",
        detail: "SH0ES versus CMB tension ($73$ vs $67$) is the Hubble tension."
      },
      {
        term: "Dark matter",
        kind: "law",
        statement: "**Rotation curves flat, lensing heavy, CMB needs $27$ percent**: halos outweigh stars $5$-to-$1$ in galaxies.",
        detail: "Vera Rubin's curves plus Bullet Cluster lensing force nonbaryonic mass."
      },
      {
        term: "Dark energy",
        kind: "law",
        statement: "**$1998$ supernovae dim $10$-$15$ percent far away**: expansion accelerates under $w \\approx -1$ vacuum energy ($68$ percent).",
        detail: "Riess/Perlmutter/Schmidt Nobel 2011."
      },
      {
        term: "Homogeneity",
        kind: "insight",
        statement: "**Cosmological principle**: $100+$ Mpc averages smooth and isotropic; CMB $10^{-5}$ wrinkles seed structure.",
        detail: "Expansion has no center; every observer sees Hubble flow."
      }
    ],
    figures: [
      {
        caption: "Hubble law $v = H_{0}d$: recession speed grows linearly with distance at $70$ km/s/Mpc",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Hubble law v = H_0d: recession speed grows linearly with distance at 70 km/s/Mpc"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="50" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="350" y2="40" stroke="currentColor" stroke-width="2.5"/><circle cx="120" cy="142" r="3" fill="currentColor"/><circle cx="180" cy="118" r="3" fill="currentColor"/><circle cx="250" cy="88" r="3" fill="currentColor"/><circle cx="310" cy="60" r="3" fill="currentColor"/><text x="200" y="190" font-size="12" fill="currentColor">distance d</text><text x="10" y="100" font-size="12" fill="currentColor">v</text><text x="250" y="50" font-size="12" fill="currentColor">slope = H0</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Hubble time",
        problem: "Estimate expansion age from $H_{0} = 70$ km/s/Mpc.",
        steps: [
          { label: "Step 1: Convert", text: "$70$ km/s per $3.086 \\times 10^{19}$ km $= 2.27 \\times 10^{-18}$ per s." },
          { label: "Step 2: Invert", text: "$1/H_{0} = 4.41 \\times 10^{17}$ s $= 14.0$ Gyr." },
          { label: "Step 3: True age", text: "$13.8$ Gyr with matter-plus-Lambda history: close to naive." }
        ],
        result: "$14$ Gyr Hubble time."
      },
      {
        title: "Galaxy at 100 Mpc",
        problem: "Find recession speed and redshift (nearby approx).",
        steps: [
          { label: "Step 1: Speed", text: "$v = 70 \\times 100 = 7000$ km/s." },
          { label: "Step 2: z", text: "$z \\approx v/c = 0.0234$." },
          { label: "Step 3: Light time", text: "$326$ Mly distance, $326$ Myr lookback to first order." }
        ],
        result: "$7000$ km/s, $z = 0.023$."
      }
    ],
    keyTakeaways: [
      "$v = H_{0}d$ with $H_{0} \\approx 70$: $14$ Gyr scale.",
      "Ladder bootstraps parallax to supernovae to flow.",
      "$5$/$27$/$68$ budget with accelerating expansion."
    ],
    quiz: [
      {
        q: "$H_{0}$ = 70 km/s/Mpc gives Hubble time about:",
        options: ["$1.4$ Gyr", "$14$ Gyr", "$140$ Gyr", "$14$ Myr"],
        answer: 1,
        explanation: "Inverse converts Mpc/km/s to gigayears."
      },
      {
        q: "Acceleration evidence came from:",
        options: ["Nearby parallax", "Distant supernova dimming", "Solar neutrinos", "Lab lasers"],
        answer: 1,
        explanation: "Far candles fainter than matter-only prediction."
      },
      {
        q: "Dark matter fraction is about:",
        options: ["$1$ percent", "$27$ percent", "$68$ percent", "$100$ percent"],
        answer: 1,
        explanation: "CMB plus structure fits need cold dark matter near one quarter."
      }
    ]
  },
  {
    sectionId: "young-ch44-s7",
    readingTime: 7,
    intro: "Run expansion backward: a hot dense start $13.8$ Gyr ago. Inflation flattens and smooths in $10^{-32}$ s; nucleosynthesis cooks H/He in minutes; recombination frees the $2.725$ K microwave afterglow at $380$ kyr. Acoustic peaks in that afterglow weigh the cosmos.",
    objectives: [
      "Order inflation, nucleosynthesis, recombination, first stars",
      "Explain CMB origin at $z = 1100$, $T = 2.725$ K",
      "State helium $25$ percent and acoustic-peak cosmology"
    ],
    concepts: [
      {
        term: "Big Bang timeline",
        kind: "definition",
        statement: "**Inflation ($10^{-36}$-$10^{-32}$ s), quark-hadron ($10^{-5}$ s), BBN ($1$-$200$ s), CMB ($380$ kyr), stars ($200$ Myr)**.",
        detail: "Each transition freezes relics: asymmetry, nuclei, light, structure."
      },
      {
        term: "Inflation",
        kind: "theorem",
        statement: "**$e^{60}$-fold stretch** flattens curvature and plants quantum wrinkles as galaxy seeds.",
        detail: "Predicts near-scale-invariant Gaussian $10^{-5}$ fluctuations: observed."
      },
      {
        term: "Big Bang nucleosynthesis",
        kind: "law",
        statement: "**$75$ percent H, $25$ percent He-4, traces D/Li** from minute-$3$ fusion with $\\eta = 6 \\times 10^{-10}$ baryons per photon.",
        detail: "Deuterium bottles the baryon density precisely."
      },
      {
        term: "Recombination and CMB",
        kind: "theorem",
        statement: "**$z = 1100$, $T = 3000$ K ionizes-to-neutral**; photons free-stream, redshifting to **$2.725$ K blackbody** today.",
        detail: "Penzias-Wilson $1965$ hiss plus COBE/FIRAS perfect Planck spectrum."
      },
      {
        term: "Acoustic peaks",
        kind: "method",
        statement: "**Degree-scale first peak fixes flat geometry**; ratios weigh baryons, dark matter, dark energy.",
        detail: "Planck $2018$ reads $H_{0}$, $\\Omega_{b}$, $\\Omega_{c}$, $\\tau$ off peak heights and damping."
      }
    ],
    examples: [
      {
        title: "CMB temperature then",
        problem: "CMB now $2.725$ K from $z = 1100$. What was $T$ at release?",
        steps: [
          { label: "Step 1: Scale", text: "$T = T_{0}(1+z) = 2.725 \\times 1101 = 3000$ K." },
          { label: "Step 2: Color", text: "Orange stellar-surface temperature: opaque plasma glowed like a star." },
          { label: "Step 3: Stretch", text: "Expansion reddened $1$-microM light to $1$-mm microwaves." }
        ],
        result: "$3000$ K decoupling fireball."
      },
      {
        title: "Helium mass fraction",
        problem: "Neutron-proton ratio $1/7$ at freeze-out (all neutrons into He-4). Find $Y$.",
        steps: [
          { label: "Step 1: Count", text: "Per $8$ nucleons ($1n+7p$): $1n$ pairs with $1p$ into He-4 mass $4$." },
          { label: "Step 2: Fraction", text: "$Y = 4/8 = 0.25$: $25$ percent helium." },
          { label: "Step 3: Observed", text: "$24$-$25$ percent everywhere: BBN triumph." }
        ],
        result: "$25$ percent He-4 by mass."
      }
    ],
    keyTakeaways: [
      "Hot start $13.8$ Gyr: inflate, cook nuclei, release light, ignite stars.",
      "BBN gives $25$ percent helium; CMB gives $2.725$ K snapshot.",
      "Microwave peaks weigh geometry and cosmic ingredients."
    ],
    quiz: [
      {
        q: "Recombination occurred at about:",
        options: ["$3$ min", "$380{,}000$ yr", "$1$ Gyr", "Today"],
        answer: 1,
        explanation: "Cooling to 3000 K freed photons at z = 1100."
      },
      {
        q: "Helium mass fraction from BBN is about:",
        options: ["$1$ percent", "$25$ percent", "$50$ percent", "$75$ percent"],
        answer: 1,
        explanation: "Neutron supply caps He-4 near one quarter."
      },
      {
        q: "First acoustic peak measures:",
        options: ["Stellar ages", "Spatial flatness", "Lab masses", "Ocean depth"],
        answer: 1,
        explanation: "Sound-horizon angle pins geometry."
      },
      {
        q: "CMB present temperature is:",
        options: ["$3000$ K", "$2.725$ K", "$5800$ K", "$0$ K"],
        answer: 1,
        explanation: "Redshifted fireball blackbody."
      }
    ]
  }
];
