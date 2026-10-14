import type { SectionContent } from '../library'

// ============================================================================
// JEE (Main) 2026 Chemistry — master lesson content (high-weightage sections)
// Full SectionContent lessons for ten first sections across Units 1–15 of the
// official NTA syllabus (bookId 'jeemain-chemistry-2026'): matter & chemical
// combination (1.1), radiation & hydrogen spectrum (2.1), ionic bonding
// (3.1), thermodynamic fundamentals (4.1), dynamic & physical equilibria
// (6.1), redox concepts & balancing (7.1), reaction rates (8.1), the modern
// periodic table (9.1), carbon bonding & classification (14.1) and
// hydrocarbon classification & preparation (15.1). KaTeX formulas, exam
// traps and PYQ-pattern quizzes follow the jeemaths-ch01 exemplar style.
// ============================================================================

export const jeemainChemContent: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'jeemain-chem-u1-s1',
    readingTime: 9,
    prerequisites: [
      'Atomic masses and symbols of common elements (school chemistry)',
      'Ratios, percentages and unitary method arithmetic',
    ],
    intro: 'Every quantitative chemistry question stands on the **mole** — the chemist\u2019s dozen. Dalton\u2019s atomic theory explains why elements combine in fixed mass ratios, the laws of chemical combination quantify those ratios, and the mole converts between grams, particles and volumes of gas. JEE Main tests this unit relentlessly through limiting-reagent, per cent-yield and concentration problems.',
    objectives: [
      'State the laws of chemical combination (conservation of mass, definite proportions, multiple proportions, reciprocal proportions) and connect each to Dalton\u2019s theory',
      'Interconvert mass, moles, number of particles and STP gas volume using $n = \\frac{w}{M}$, $n = \\frac{N}{N_A}$ and $n = \\frac{V}{22.4}$',
      'Compute empirical and molecular formulae from per cent composition',
      'Solve limiting-reagent, excess-reagent and per cent-yield problems with balanced equations',
    ],
    concepts: [
      {
        term: 'Laws of chemical combination',
        kind: 'law',
        statement: 'Mass is **conserved** in reactions; a compound contains elements in a **fixed mass ratio** (definite proportions); when two elements form several compounds, the mass ratios of one combine with a fixed mass of the other in **small whole numbers** (multiple proportions).',
        detail: 'Multiple proportions is Dalton\u2019s strongest evidence for atoms: in CO and CO$_2$, oxygen per gram of carbon is in the ratio 1 : 2. Reciprocal (equivalent) proportions links three elements through their combining masses with a third element — the forerunner of equivalent weight.'
      },
      {
        term: 'The mole concept',
        kind: 'definition',
        statement: 'One **mole** is the amount of substance containing as many elementary entities as atoms in 12 g of carbon-12: $N_A = 6.022 \\times 10^{23}$ mol$^{-1}$.',
        detail: 'Three faces of one quantity: $n = \\frac{w}{M}$ (mass), $n = \\frac{N}{N_A}$ (particles), $n = \\frac{V_{\\text{STP}}}{22.4\\ \\text{L}}$ (gas at 1 atm, 273 K). Moles are the only currency that stoichiometry understands — convert everything to moles, use the balanced ratio, convert back.'
      },
      {
        term: 'Empirical and molecular formula',
        kind: 'method',
        statement: 'The **empirical formula** gives the simplest whole-number atom ratio; the **molecular formula** is a whole-number multiple: $\\text{MF} = (\\text{EF})_n$ with $n = \\frac{M_{\\text{molar}}}{M_{\\text{EF}}}$.',
        detail: 'From per cent data: assume 100 g, convert each per cent to grams, divide by atomic mass, divide all by the smallest to get ratios. A ratio like 1 : 1.33 means multiply by 3 to clear thirds (1 : 1.33 = 3 : 4). JEE traps hide in the rounding — carry one decimal until the end.'
      },
      {
        term: 'Limiting reagent',
        kind: 'method',
        statement: 'The **limiting reagent** is the reactant that runs out first; it alone decides the maximum product: divide each reactant\u2019s moles by its stoichiometric coefficient — the smallest quotient limits.',
        detail: 'The other reactant is in excess; leftover = initial minus consumed. Recognising the limiting reagent by inspection (divide moles by coefficients) is faster than the "extend the chain" method and safer under exam pressure.'
      },
      {
        term: 'Concentration terms',
        kind: 'notation',
        statement: '**Molarity** $M = \\frac{n_{\\text{solute}}}{V_{\\text{solution}}(\\text{L})}$; **molality** $m = \\frac{n_{\\text{solute}}}{w_{\\text{solvent}}(\\text{kg})}$; mole fraction $x_i = \\frac{n_i}{\\sum n}$.',
        detail: 'Molarity depends on temperature (volume expands); molality and mole fraction do not — a favourite assertion–reason pairing. Dilution law $M_1V_1 = M_2V_2$ applies when only solvent is added. For mixing problems, total moles over total volume gives the new molarity.'
      }
    ],
    examples: [
      {
        title: 'Empirical to molecular formula',
        problem: 'A compound is 40.0% carbon, 6.67% hydrogen and 53.3% oxygen by mass; its molar mass is 180 g/mol. Find the molecular formula.',
        steps: [
          { label: 'Step 1', text: 'Per 100 g: C 40.0 g, H 6.67 g, O 53.3 g. Divide by atomic masses: $\\frac{40}{12} = 3.33$, $\\frac{6.67}{1} = 6.67$, $\\frac{53.3}{16} = 3.33$.' },
          { label: 'Step 2', text: 'Divide by the smallest (3.33): C : H : O $= 1 : 2 : 1$. Empirical formula $\\text{CH}_2\\text{O}$, mass 30 g/mol.' },
          { label: 'Step 3', text: '$n = \\frac{180}{30} = 6$, so the molecular formula is $(\\text{CH}_2\\text{O})_6 = \\text{C}_6\\text{H}_{12}\\text{O}_6$.' },
          { label: 'Step 4', text: 'Sanity check the mass: $6 \\times 12 + 12 \\times 1 + 6 \\times 16 = 72 + 12 + 96 = 180$ g/mol — glucose.' }
        ],
        result: 'Molecular formula $\\text{C}_6\\text{H}_{12}\\text{O}_6$ (empirical $\\text{CH}_2\\text{O}$).'
      },
      {
        title: 'Limiting reagent and yield',
        problem: '2.0 g of $\\text{H}_2$ reacts with 44.0 g of $\\text{N}_2$ giving $\\text{NH}_3$. Find the limiting reagent, the theoretical maximum of ammonia, and the actual yield if the process is 80% efficient. ($N = 14$, $H = 1$)',
        steps: [
          { label: 'Step 1', text: 'Balanced equation: $\\text{N}_2 + 3\\text{H}_2 \\to 2\\text{NH}_3$. Moles available: $n(\\text{H}_2) = \\frac{2}{2} = 1.0$; $n(\\text{N}_2) = \\frac{44}{28} = 1.571$.' },
          { label: 'Step 2', text: 'Divide by coefficients: $\\frac{1.0}{3} = 0.333$ for hydrogen, $\\frac{1.571}{1} = 1.571$ for nitrogen — hydrogen has the smaller quotient, so $\\text{H}_2$ limits.' },
          { label: 'Step 3', text: 'Ammonia from hydrogen: $\\frac{2}{3} \\times 1.0 = 0.667$ mol $\\times$ 17 g/mol $= 11.33$ g theoretical.' },
          { label: 'Step 4', text: 'At 80%: $0.8 \\times 11.33 \\approx 9.07$ g $\\text{NH}_3$ actually obtained; nitrogen left over $= 1.571 - 0.333 = 1.238$ mol.' }
        ],
        result: 'Limiting reagent $\\text{H}_2$; theoretical yield 11.33 g (0.667 mol); actual yield $\\approx 9.1$ g.'
      }
    ],
    keyTakeaways: [
      'Mole is the central currency: $n = w/M = N/N_A = V_{\\text{STP}}/22.4$ L for gases.',
      'Empirical formula from per cent data; multiply by $n = M_{\\text{molar}}/M_{\\text{EF}}$ for molecular formula.',
      'Limiting reagent: smallest (moles $\\div$ coefficient) wins; it fixes the maximum product.',
      'Molarity is temperature-dependent; molality and mole fraction are not.'
    ],
    quiz: [
      {
        q: 'The number of molecules in 4.4 g of $\\text{CO}_2$ is about',
        options: ['$6.0 \\times 10^{22}$', '$6.0 \\times 10^{23}$', '$1.2 \\times 10^{23}$', '$6.0 \\times 10^{24}$'],
        answer: 0,
        explanation: 'Step 1: $M(\\text{CO}_2) = 44$ g/mol, so $n = \\frac{4.4}{44} = 0.1$ mol. Step 2: Molecules $= 0.1 \\times 6.022 \\times 10^{23} = 6.0 \\times 10^{22}$. Step 3: The 0.1 factor is the trap-avoider — many misread 4.4 g as one mole. Step 4: $6 \\times 10^{23}$ would need 44 g.'
      },
      {
        q: '10 g of CaCO$_3$ is heated until fully decomposed ($\\text{CaCO}_3 \\to \\text{CaO} + \\text{CO}_2$). The volume of CO$_2$ liberated at STP is ($Ca = 40$)',
        options: ['1.12 L', '2.24 L', '22.4 L', '0.56 L'],
        answer: 1,
        explanation: 'Step 1: $M(\\text{CaCO}_3) = 100$ g/mol, so $n = \\frac{10}{100} = 0.1$ mol. Step 2: Stoichiometry 1 : 1 gives 0.1 mol CO$_2$. Step 3: At STP, $V = 0.1 \\times 22.4 = 2.24$ L. Step 4: 1.12 L corresponds to 0.05 mol — half the correct amount.'
      },
      {
        q: 'Which concentration term is independent of temperature?',
        options: ['Molarity', 'Molality', 'Normality', 'Formality'],
        answer: 1,
        explanation: 'Step 1: Temperature changes volume of solutions. Step 2: Molarity, normality and formality all divide by volume of solution. Step 3: Molality divides by mass of solvent in kg — mass is immune to thermal expansion. Step 4: Hence molality (and mole fraction) survive a temperature swing.'
      },
      {
        q: 'Equal masses of methane and oxygen are mixed and ignited. The limiting reagent is',
        options: ['$\\text{CH}_4$', '$\\text{O}_2$', 'both simultaneously', 'cannot be determined'],
        answer: 1,
        explanation: 'Step 1: Reaction: $\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O}$. Step 2: For mass $w$ each: $n(\\text{CH}_4) = \\frac{w}{16}$, $n(\\text{O}_2) = \\frac{w}{32}$. Step 3: Quotients by coefficients: $\\frac{w}{16}$ vs $\\frac{w}{64}$ — methane\u2019s quotient is larger, so oxygen runs out first. Step 4: $\\text{O}_2$ is the limiting reagent for any equal-mass mixture.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'jeemain-chem-u2-s1',
    readingTime: 10,
    prerequisites: [
      'Mole concept and stoichiometry (Unit 1)',
      'Basic energy ideas: $E = h\\nu$ from physics is reintroduced chemically',
    ],
    intro: 'Light is both wave and particle, and nowhere is the duality sharper than when radiation meets atoms. The **photoelectric effect** proves light arrives in packets (photons) whose energy is set by frequency alone, and the **hydrogen spectrum** shows atoms absorbing and emitting only specific photon energies — the fingerprints of quantised electronic states. JEE Main loves numericals on photon count, work function and Rydberg lines.',
    objectives: [
      'Characterise electromagnetic radiation by $c = \\nu\\lambda$ and photon energy $E = h\\nu = \\frac{hc}{\\lambda}$',
      'Explain the photoelectric effect with threshold frequency, work function and Einstein\u2019s equation $KE_{\\max} = h(\\nu - \\nu_0)$',
      'Interpret the hydrogen spectrum regions (Lyman, Balmer, Paschen, Brackett, Pfund) using the Rydberg expression',
      'Count photons delivered by a light source of given power and wavelength',
    ],
    concepts: [
      {
        term: 'Electromagnetic spectrum bookkeeping',
        kind: 'notation',
        statement: 'All EM radiation travels at $c = 3 \\times 10^8$ m/s with $c = \\nu\\lambda$; energy per photon $E = h\\nu$ with $h = 6.626 \\times 10^{-34}$ J·s.',
        detail: 'Order the spectrum by increasing wavelength: cosmic < gamma < X < UV < visible (400–750 nm) < IR < microwave < radio. Chemical action peaks in UV/visible — the regions that excite electrons. Wavenumber $\\bar{\\nu} = 1/\\lambda$ (m$^{-1}$) is the spectroscopist\u2019s preferred unit, linear in energy.'
      },
      {
        term: 'Photoelectric effect',
        kind: 'law',
        statement: 'Electrons eject from a metal surface only when $\\nu > \\nu_0$; the maximum kinetic energy is linear in frequency: $KE_{\\max} = h\\nu - h\\nu_0 = h\\nu - W_0$.',
        detail: 'Intensity sets the number of photons (and ejected electrons), never their energy — the observation classical wave theory could not explain. Stopping potential $V_s$ satisfies $eV_s = KE_{\\max}$. Below threshold, no emission occurs regardless of intensity or exposure time. Metals with low work functions (Cs, K) respond to visible light; most need UV.'
      },
      {
        term: 'Photon counting',
        kind: 'method',
        statement: 'A source of power $P$ at wavelength $\\lambda$ emits $\\frac{P\\lambda}{hc}$ photons per second, each carrying $E = \\frac{hc}{\\lambda}$.',
        detail: 'Rearranged: number of photons $N = \\frac{E_{\\text{total}}\\lambda}{hc}$. Doubling wavelength doubles photons per joule. This bridges chemistry to real lamps and lasers, and JEE asks it as a two-step numerical almost every alternate year.'
      },
      {
        term: 'Hydrogen spectrum and Rydberg',
        kind: 'law',
        statement: 'Spectral lines obey $\\bar{\\nu} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$ with $R_H = 1.09677 \\times 10^7$ m$^{-1}$; series: Lyman ($n_1 = 1$, UV), Balmer ($2$, visible), Paschen ($3$, IR), Brackett ($4$), Pfund ($5$).',
        detail: 'Each line is a downward jump: emitted photon energy equals the energy gap. The series limit ($n_2 \\to \\infty$) gives the largest wavenumber of each series. Only the Balmer series is visible — H$_\\alpha$ 656.3 nm (red), H$_\\beta$ 486.1 nm, H$_\\gamma$ 434.0 nm — converging at 364.6 nm.'
      },
      {
        term: 'Why a line spectrum means quantisation',
        kind: 'insight',
        statement: 'A continuous spectrum would mean electrons can hold any energy; the observed **discrete lines** mean only specific energy differences exist — electronic energy in atoms is quantised.',
        detail: 'This inference, not the arithmetic, is the conceptual heart of the chapter. Emission versus absorption spectra: hot gas emits bright lines; cool gas absorbs exactly the same lines from continuous background — the signature used to identify elements in stars.'
      }
    ],
    examples: [
      {
        title: 'Photoelectric threshold calculation',
        problem: 'A metal has work function 2.0 eV. Light of wavelength 400 nm falls on it. Find the maximum kinetic energy of photoelectrons and their stopping potential. ($h = 6.63 \\times 10^{-34}$ J·s, $c = 3 \\times 10^8$ m/s)',
        steps: [
          { label: 'Step 1', text: 'Photon energy: $E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{400 \\times 10^{-9}} = 4.97 \\times 10^{-19}$ J.' },
          { label: 'Step 2', text: 'Convert to eV: $\\frac{4.97 \\times 10^{-19}}{1.6 \\times 10^{-19}} \\approx 3.11$ eV — well above the 2.0 eV threshold, so emission occurs.' },
          { label: 'Step 3', text: '$KE_{\\max} = 3.11 - 2.0 = 1.11$ eV $\\approx 1.78 \\times 10^{-19}$ J.' },
          { label: 'Step 4', text: 'Stopping potential: $V_s = \\frac{KE_{\\max}}{e} = 1.11$ V — a voltmeter reading independent of the light intensity.' }
        ],
        result: '$KE_{\\max} \\approx 1.11$ eV with stopping potential $V_s \\approx 1.11$ V.'
      },
      {
        title: 'Balmer line by wavenumber',
        problem: 'Calculate the wavelength of the second line of the Balmer series of hydrogen.',
        steps: [
          { label: 'Step 1', text: 'Second Balmer line: transition $n_2 = 4 \\to n_1 = 2$. Rydberg: $\\bar{\\nu} = R_H\\left(\\frac{1}{2^2} - \\frac{1}{4^2}\\right)$.' },
          { label: 'Step 2', text: 'Bracket: $\\frac{1}{4} - \\frac{1}{16} = \\frac{3}{16}$, so $\\bar{\\nu} = 1.097 \\times 10^7 \\times \\frac{3}{16} = 2.057 \\times 10^6$ m$^{-1}$.' },
          { label: 'Step 3', text: 'Invert: $\\lambda = \\frac{1}{2.057 \\times 10^6} = 4.86 \\times 10^{-7}$ m $= 486$ nm.' },
          { label: 'Step 4', text: '486 nm is blue-green — the H$_\\beta$ line, sitting between red H$_\\alpha$ (656 nm) and the 364.6 nm series limit.' }
        ],
        result: '$\\lambda = 486$ nm (H$_\\beta$ of the Balmer series).'
      }
    ],
    keyTakeaways: [
      '$c = \\nu\\lambda$ and $E = h\\nu$: energy depends only on frequency, never intensity.',
      'Photoelectric: no emission below $\\nu_0$; $KE_{\\max} = h(\\nu - \\nu_0)$; intensity controls electron count.',
      'Photons per second from power $P$: $\\frac{P\\lambda}{hc}$.',
      'Hydrogen lines: $\\bar{\\nu} = R_H(1/n_1^2 - 1/n_2^2)$ — Lyman UV, Balmer visible, Paschen IR.'
    ],
    quiz: [
      {
        q: 'If the wavelength of light is halved, the photon energy',
        options: ['halves', 'doubles', 'quadruples', 'stays constant'],
        answer: 1,
        explanation: 'Step 1: $E = \\frac{hc}{\\lambda}$ — energy is inversely proportional to wavelength. Step 2: Halving $\\lambda$ multiplies $E$ by 2. Step 3: Frequency doubles at the same time since $\\nu = c/\\lambda$. Step 4: Quadrupling would require $1/\\lambda^2$ dependence, which photons do not have.'
      },
      {
        q: 'The photoelectric effect supports',
        options: ['wave nature of light', 'particle nature of light', 'interference of light', 'diffraction of light'],
        answer: 1,
        explanation: 'Step 1: Key observation — emission depends on frequency, not intensity. Step 2: Wave theory predicts any frequency eventually ejects electrons given enough intensity. Step 3: Photon packets with $E = h\\nu$ explain the threshold instantly. Step 4: Interference and diffraction are wave-phenomena evidence — the opposite corner of duality.'
      },
      {
        q: 'The ratio of the energies of photons of wavelength 200 nm and 400 nm is',
        options: ['1 : 2', '2 : 1', '1 : 4', '4 : 1'],
        answer: 1,
        explanation: 'Step 1: $E \\propto \\frac{1}{\\lambda}$. Step 2: $\\frac{E_{200}}{E_{400}} = \\frac{400}{200} = 2$. Step 3: The shorter wavelength carries double the energy. Step 4: Ratio 1 : 2 would invert the proportionality.'
      },
      {
        q: 'The series of the hydrogen spectrum lying in the visible region is',
        options: ['Lyman', 'Balmer', 'Paschen', 'Brackett'],
        answer: 1,
        explanation: 'Step 1: Series are named by the lower level $n_1$. Step 2: Lyman ($n_1 = 1$) lies in UV; Paschen and Brackett lie in IR. Step 3: Balmer ($n_1 = 2$) spans 656–365 nm — visible. Step 4: The red H$_\\alpha$ line of Balmer is the most famous visible hydrogen line.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'jeemain-chem-u3-s1',
    readingTime: 9,
    prerequisites: [
      'Electronic configuration of atoms (Unit 2)',
      'Ionisation enthalpy and electron gain trends',
    ],
    intro: 'Why does Na bond with Cl but not with Ne? **Kossel and Lewis** answered with the octet drive: atoms reshuffle electrons to reach noble-gas configurations, either by transfer (ionic bond) or sharing (covalent bond). The ionic route is governed by a thermodynamic tug-of-war — ionisation, electron affinity and the enormous **lattice enthalpy** released when oppositely charged ions pack into a crystal.',
    objectives: [
      'Explain bond formation via the octet rule and Kossel\u2013Lewis electron bookkeeping',
      'Describe the formation of ionic bonds through electron transfer driven by low IE and high EA',
      'Use the Born–Haber cycle to compute lattice enthalpy from formation enthalpy, sublimation, IE and EA',
      'Predict ionic character trends from electronegativity difference',
    ],
    concepts: [
      {
        term: 'Octet rule',
        kind: 'law',
        statement: 'Atoms tend to gain, lose or share electrons until surrounded by **eight valence electrons** (a noble-gas shell) — the driving idea behind Lewis structures and Kossel\u2019s ionic picture.',
        detail: 'Exceptions matter for JEE: incomplete octets (BeCl$_2$, BF$_3$), expanded octets (PCl$_5$, SF$_6$ — possible from the third period onward via vacant d-orbitals in classical pictures), and odd-electron molecules (NO, NO$_2$). Hydrogen is content with two electrons (duet).'
      },
      {
        term: 'Ionic bond formation',
        kind: 'definition',
        statement: 'An **ionic bond** forms by complete electron transfer from a low-ionisation-enthalpy metal to a high-electron-affinity non-metal, producing cations and anions held together by electrostatic attraction.',
        detail: 'Favourable conditions: metal with low IE (alkali, alkaline-earth), non-metal with high EA/negative electron gain enthalpy (halogens, oxygen), and high lattice enthalpy of the product. The transfer itself usually costs energy — the lattice pays the bill.'
      },
      {
        term: 'Lattice enthalpy',
        kind: 'definition',
        statement: '**Lattice enthalpy** is the energy released when one mole of an ionic crystal forms from gaseous ions; it grows with charge magnitude and shrinks with ionic size: $U \\propto \\frac{|z_+ z_-|}{r_+ + r_-}$.',
        detail: 'Order LiF > NaF > KF (cation size grows); MgO ($2+\\times2-$) is far stronger than NaCl ($1+\\times1-$). High lattice enthalpy means high melting point and low solubility unless hydration can compete — the competition deciding whether an ionic solid dissolves.'
      },
      {
        term: 'Born–Haber cycle',
        kind: 'method',
        statement: 'Hess\u2019s law applied to ionic crystal formation: $\\Delta_f H = \\Delta_{\\text{sub}}H + \\frac{1}{2}D(M_2 \\text{ or } X_2) + IE + EA + \\Delta_{\\text{lattice}}H$ — any one unknown can be found from the rest.',
        detail: 'Steps for NaCl: sublime Na, atomise $\\frac{1}{2}$Cl$_2$, ionise Na ($+496$), attach electron to Cl ($-349$), condense ions (lattice, $-787$). Sum $= -411$ kJ/mol, the observed formation enthalpy. Sign discipline — IE always positive, EA of halogens negative, lattice always negative for formation — is where marks leak.'
      },
      {
        term: 'Electronegativity and ionic character',
        kind: 'insight',
        statement: 'The larger the electronegativity difference $\\Delta\\chi$ between bonded atoms, the more polar (ionic) the bond; a rough rule: $\\Delta\\chi > 1.7$ gives predominantly ionic character.',
        detail: 'CsF is the most ionic simple compound; bonds between identical atoms (H$_2$, Cl$_2$) are perfectly covalent. Percent ionic character grows smoothly — bonding is a continuum, and the "ionic versus covalent" label is a convenience, not a cliff.'
      }
    ],
    examples: [
      {
        title: 'Born–Haber lattice enthalpy',
        problem: 'For KCl: $\\Delta_f H = -437$ kJ/mol, $\\Delta_{\\text{sub}}H$(K) $= +89$, $\\frac{1}{2}D(\\text{Cl}_2) = +122$, IE(K) $= +419$, EA(Cl) $= -349$ kJ/mol. Find the lattice enthalpy.',
        steps: [
          { label: 'Step 1', text: 'Write the cycle: $\\Delta_fH = \\Delta_{\\text{sub}}H + \\frac{1}{2}D + IE + EA + \\Delta_{\\text{lat}}H$.' },
          { label: 'Step 2', text: 'Substitute knowns: $-437 = 89 + 122 + 419 - 349 + \\Delta_{\\text{lat}}H$.' },
          { label: 'Step 3', text: 'Sum the knowns: $89 + 122 + 419 - 349 = +281$ kJ/mol, so $-437 = 281 + \\Delta_{\\text{lat}}H$.' },
          { label: 'Step 4', text: 'Solve: $\\Delta_{\\text{lat}}H = -437 - 281 = -718$ kJ/mol — the huge stabilisation that makes KCl exist as a crystal.' }
        ],
        result: 'Lattice enthalpy of KCl $= -718$ kJ/mol (718 kJ/mol released on lattice formation).'
      },
      {
        title: 'Comparing lattice enthalpies',
        problem: 'Arrange LiF, NaCl, KBr, MgO in increasing order of lattice enthalpy and justify.',
        steps: [
          { label: 'Step 1', text: 'Governing factors: product of ionic charges over inter-ionic distance, $U \\propto \\frac{|z_+z_-|}{r_+ + r_-}$.' },
          { label: 'Step 2', text: 'MgO alone has $2+ \\times 2-$ charges — a factor of 4 in the numerator — dwarfing any size effect: it is the largest.' },
          { label: 'Step 3', text: 'Among the 1:1 halides, both cation and anion grow from LiF $\\to$ NaCl $\\to$ KBr, so distance increases and lattice enthalpy falls.' },
          { label: 'Step 4', text: 'Order: KBr < NaCl < LiF < MgO — the standard answer expected without any calculation.' }
        ],
        result: 'Lattice enthalpy: KBr < NaCl < LiF < MgO.'
      }
    ],
    keyTakeaways: [
      'Octet drive explains bonding but has named exceptions: BeCl$_2$/BF$_3$ (incomplete), PCl$_5$/SF$_6$ (expanded), NO (odd).',
      'Ionic bonds favour low IE metals + high EA non-metals + high lattice enthalpy.',
      '$U \\propto |z_+z_-|/(r_+ + r_-)$: MgO \u226b LiF > NaF > KF.',
      'Born–Haber = Hess on the ionic assembly line; watch every sign.'
    ],
    quiz: [
      {
        q: 'The lattice enthalpy of LiF is higher than that of KF because',
        options: ['Li$^+$ has a higher charge than K$^+$', 'Li$^+$ is smaller than K$^+$, shortening the ion–ion distance', 'F$^-$ is smaller in LiF', 'K\u2019s ionisation enthalpy is low'],
        answer: 1,
        explanation: 'Step 1: Both are 1:1 salts, so charge product is identical. Step 2: Lattice enthalpy grows as ionic separation shrinks. Step 3: Li$^+$ (76 pm) is far smaller than K$^+$ (138 pm), pulling ions closer and strengthening the lattice. Step 4: The fluoride ion is the same in both salts.'
      },
      {
        q: 'In the Born–Haber cycle for NaCl, which step is exothermic?',
        options: ['Sublimation of sodium', 'Ionisation of sodium', 'Electron gain by chlorine', 'Atomisation of chlorine'],
        answer: 2,
        explanation: 'Step 1: Sublimation, atomisation and ionisation all break bonds or strip electrons — endothermic. Step 2: Chlorine\u2019s electron gain enthalpy is negative ($-349$ kJ/mol). Step 3: Lattice formation is also exothermic, but it is not listed. Step 4: Hence electron gain by chlorine is the exothermic step among the options.'
      },
      {
        q: 'Which compound has the highest percentage of ionic character?',
        options: ['CsF', 'NaCl', 'LiCl', 'HF'],
        answer: 0,
        explanation: 'Step 1: Ionic character tracks electronegativity difference. Step 2: Cs ($\\chi = 0.79$) and F ($\\chi = 3.98$) give the largest $\\Delta\\chi \\approx 3.2$. Step 3: NaCl and LiCl have smaller differences; HF\u2019s hydrogen is moderately polar. Step 4: CsF — the most electropositive metal with the most electronegative non-metal — wins.'
      },
      {
        q: 'An example of an expanded octet is',
        options: ['BeCl$_2$', 'BF$_3$', 'PCl$_5$', 'NO'],
        answer: 2,
        explanation: 'Step 1: Expanded octet = more than 8 electrons around the central atom. Step 2: PCl$_5$ places 10 electrons around phosphorus. Step 3: BeCl$_2$ and BF$_3$ are electron-deficient (incomplete octets); NO is odd-electron. Step 4: Expansion is available to phosphorus because it lies in period 3.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'jeemain-chem-u4-s1',
    readingTime: 10,
    prerequisites: [
      'First law of thermodynamics from physics (work, heat, internal energy)',
      'Calculus basics: state functions as exact differentials',
    ],
    intro: 'Thermodynamics separates what is possible from what is impossible. Before any equation can be trusted, the vocabulary must be exact: what counts as the **system**, which properties are **state functions** immune to path, and what distinguishes reversible from irreversible **processes**. Entropy — the arrow of disorder — enters quietly here and grows into the second law\u2019s judge of spontaneity.',
    objectives: [
      'Classify systems (open, closed, isolated) and properties (extensive versus intensive) with examples',
      'Explain why internal energy, enthalpy, entropy and Gibbs energy are state functions while heat and work are not',
      'Distinguish isothermal, adiabatic, isobaric, isochoric, cyclic and spontaneous processes',
      'Qualitatively connect entropy to molecular disorder and the number of accessible microstates',
    ],
    concepts: [
      {
        term: 'System and surroundings',
        kind: 'definition',
        statement: 'The **system** is the part of the universe under study; everything else is the **surroundings**; the boundary separates them and may allow matter and/or energy exchange.',
        detail: 'Open system: exchanges both (beaker of hot water). Closed: energy only, matter sealed (sealed flask). Isolated: neither (ideal thermos flask). Choose the system before writing any equation — the most common source of sign errors in thermodynamics numericals.'
      },
      {
        term: 'Extensive and intensive properties',
        kind: 'definition',
        statement: '**Extensive** properties scale with the amount of matter (mass, volume, internal energy, enthalpy, entropy, heat capacity); **intensive** properties do not (temperature, pressure, density, molar heat capacity, refractive index).',
        detail: 'Test: double the system — the property doubles (extensive) or stays put (intensive). Ratio of two extensive properties is intensive: $\\frac{V}{n} = V_m$ (molar volume), $\\frac{U}{n}$, $\\rho = \\frac{m}{V}$. JEE tests the classification directly in assertion–reason format.'
      },
      {
        term: 'State functions and path functions',
        kind: 'law',
        statement: 'A **state function** depends only on the current state, not on how it was reached ($U$, $H$, $S$, $G$, $P$, $V$, $T$); **path functions** depend on the route taken ($q$ and $w$).',
        detail: 'Climb a mountain: altitude is a state function (same regardless of path), distance walked is a path function. Consequence: $\\Delta U$, $\\Delta H$, $\\Delta S$ over a cycle are zero; $q$ and $w$ over a cycle generally are not — their difference, not their values, is path-independent ($\\Delta U = q + w$).'
      },
      {
        term: 'Types of processes',
        kind: 'notation',
        statement: 'Isothermal ($\\Delta T = 0$), adiabatic ($q = 0$), isobaric ($\\Delta P = 0$), isochoric ($\\Delta V = 0$), cyclic (state returns: all state-function changes zero), spontaneous (proceeds by itself in isolation, driven by energy spread).',
        detail: 'Reversible processes run through a continuous ladder of equilibrium states — infinitely slow, maximum work; real processes are irreversible. In an isothermal ideal-gas change $\\Delta U = 0$ so $q = -w$; in an adiabatic one $\\Delta U = w$. Process identification is the first read of every thermodynamics numerical.'
      },
      {
        term: 'Entropy',
        kind: 'definition',
        statement: '**Entropy** $S$ measures molecular disorder — the number of accessible microscopic arrangements; for a reversible heat exchange $dS = \\frac{\\delta q_{\\text{rev}}}{T}$.',
        detail: 'Disorder ladder: solid < liquid < gas; dissolution and mixing raise entropy; crystallisation lowers it. The second law: in any spontaneous process the entropy of the universe increases, $\\Delta S_{\\text{total}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$. Entropy is a state function even though $\\delta q$ is not — dividing by $T$ along the reversible path cures the path dependence.'
      }
    ],
    examples: [
      {
        title: 'Classifying properties',
        problem: 'Classify each as extensive or intensive: (a) internal energy, (b) molar heat capacity, (c) density, (d) entropy, (e) temperature, (f) volume.',
        steps: [
          { label: 'Step 1', text: 'Apply the doubling test — imagine two identical flasks of the same gas combined.' },
          { label: 'Step 2', text: 'Total internal energy doubles: extensive (a). Entropy doubles: extensive (d). Volume doubles: extensive (f).' },
          { label: 'Step 3', text: 'Molar heat capacity is already per mole — intensive (b). Density is mass/volume, both doubling — unchanged: intensive (c). Temperature is unchanged on mixing identical samples: intensive (e).' },
          { label: 'Step 4', text: 'Quick rule: anything quoted "per mole", "per gram", "per unit volume" is intensive; totals are extensive.' }
        ],
        result: 'Extensive: $U$, $S$, $V$. Intensive: $C_m$, $\\rho$, $T$.'
      },
      {
        title: 'Entropy change of a phase change',
        problem: 'Compute $\\Delta S$ when 1 mol of ice melts at 0 \u00b0C ($\\Delta_{\\text{fus}}H = 6.0$ kJ/mol), and explain the sign.',
        steps: [
          { label: 'Step 1', text: 'Melting at constant $T = 273$ K is reversible at the transition point, so $\\Delta S = \\frac{q_{\\text{rev}}}{T}$.' },
          { label: 'Step 2', text: '$q_{\\text{rev}} = \\Delta_{\\text{fus}}H = 6000$ J/mol for the one mole.' },
          { label: 'Step 3', text: '$\\Delta S = \\frac{6000}{273} \\approx 22$ J K$^{-1}$ mol$^{-1}$.' },
          { label: 'Step 4', text: 'Positive — liquid water\u2019s molecules roam more arrangements than ice\u2019s lattice, so disorder rises exactly as the entropy increase demands.' }
        ],
        result: '$\\Delta S_{\\text{fus}} \\approx +22$ J K$^{-1}$ mol$^{-1}$ — melting is entropy-driven.'
      }
    ],
    keyTakeaways: [
      'Open/closed/isolated: matter and energy exchange define the system type.',
      'Extensive scales with amount; intensive does not; extensive/extensive ratios are intensive.',
      '$U$, $H$, $S$, $G$ are state functions; $q$ and $w$ are path functions — cycles return states, not heat.',
      'Entropy measures disorder; spontaneous changes raise the universe\u2019s entropy.'
    ],
    quiz: [
      {
        q: 'Which of the following is NOT a state function?',
        options: ['Enthalpy', 'Entropy', 'Work', 'Gibbs energy'],
        answer: 2,
        explanation: 'Step 1: State functions depend only on endpoints. Step 2: Enthalpy, entropy and Gibbs energy are properties of the state. Step 3: Work depends on the path — a piston stroke can be fast or slow, changing $w$ between the same states. Step 4: Hence work (and heat) are path functions.'
      },
      {
        q: 'A thermos flask containing hot coffee is best approximated as',
        options: ['an open system', 'a closed system', 'an isolated system', 'a homogeneous system'],
        answer: 2,
        explanation: 'Step 1: A perfect thermos allows no matter or energy exchange. Step 2: No matter leaves; heat transfer is (ideally) blocked. Step 3: Neither exchange means isolated. Step 4: Real flasks leak slowly, but the idealisation is the classic isolated-system example.'
      },
      {
        q: 'Which is an intensive property?',
        options: ['Volume', 'Internal energy', 'Molar volume', 'Entropy'],
        answer: 2,
        explanation: 'Step 1: Intensive properties survive doubling unchanged. Step 2: Volume, energy and entropy all double with system size. Step 3: Molar volume = volume/mole — an extensive divided by an extensive quantity. Step 4: The per-mole normalisation makes it intensive.'
      },
      {
        q: 'For an isothermal reversible expansion of an ideal gas, which is true?',
        options: ['$\\Delta U = 0$ and $q = -w$', '$\\Delta U > 0$ and $q = 0$', '$\\Delta H > 0$ and $w = 0$', '$\\Delta U < 0$ and $q < 0$'],
        answer: 0,
        explanation: 'Step 1: Ideal-gas internal energy depends only on temperature. Step 2: Isothermal means $\\Delta T = 0$, hence $\\Delta U = 0$ (and $\\Delta H = 0$). Step 3: First law $\\Delta U = q + w$ forces $q = -w$ — heat absorbed equals work done by the gas. Step 4: The other options break either the isothermal or the first-law constraint.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'jeemain-chem-u6-s1',
    readingTime: 9,
    prerequisites: [
      'States of matter and phase changes (melting, vaporisation)',
      'Basic kinetic picture of gases',
    ],
    intro: 'Equilibrium is not stillness — it is a standoff. In a closed bottle of soda, CO$_2$ molecules leave and enter the headspace at equal rates; nothing changes, yet everything moves. **Dynamic equilibrium** in chemistry, and its quieter physical cousins — melting ice, evaporating water, gas dissolving — all obey one grammar: equality of forward and reverse rates, constancy of macroscopic properties, and Le Chatelier\u2019s push-back against disturbance.',
    objectives: [
      'Define dynamic equilibrium and list its observable characteristics',
      'Describe the four physical equilibria: solid–liquid, liquid–gas, solid–gas and gas dissolution',
      'State and apply Henry\u2019s law $p = K_H x$ to gas-solubility problems',
      'Connect equilibrium constants of physical processes to phase-change temperatures',
    ],
    concepts: [
      {
        term: 'Dynamic equilibrium',
        kind: 'definition',
        statement: 'A system is in **dynamic equilibrium** when opposing processes occur at equal rates, so macroscopic properties (concentration, colour, pressure) remain constant although molecular exchange continues.',
        detail: 'Requirements: closed system, constancy of measurable properties, and equal forward/backward rates. The evidence for the "dynamic" part: radioactive tracer experiments show exchange continues after apparent stillness. Equilibrium is a state of balance, not of equal concentrations — a favourite assertion–reason trap.'
      },
      {
        term: 'Solid–liquid equilibrium',
        kind: 'law',
        statement: 'At the **melting point**, solid and liquid coexist with $\\text{rate}_{\\text{fusion}} = \\text{rate}_{\\text{freezing}}$; below it the solid is the stable phase, above it the liquid.',
        detail: 'Ice + water at 0 \u00b0C and 1 atm: both phases persist indefinitely. The temperature stays pinned at the melting point until all solid converts — the physics of ice-bath constant temperature and the reason melting is isothermal.'
      },
      {
        term: 'Liquid–gas equilibrium and vapour pressure',
        kind: 'definition',
        statement: 'A liquid in a closed vessel equilibrates with its vapour at the **saturated vapour pressure**, which depends only on temperature; the **boiling point** is where vapour pressure equals the external pressure.',
        detail: 'Higher temperature raises vapour pressure exponentially (Clausius–Clapeyron behaviour); at 1 atm the crossing is the normal boiling point. Volatile liquids have high vapour pressures at room temperature — acetone versus water. Evaporative cooling: escaping molecules carry away above-average energy.'
      },
      {
        term: 'Solid–gas and dissolution equilibria',
        kind: 'definition',
        statement: 'Solids with appreciable vapour pressure **sublime** (solid $\\rightleftharpoons$ gas — dry ice, iodine, camphor); gases in liquids equilibrate as $\\text{gas} \\rightleftharpoons \\text{dissolved gas}$, with solubility set by pressure and temperature.',
        detail: 'Dissolution is exothermic for most gases, so heating drives them out — warm soda goes flat faster, boiled water loses dissolved oxygen. Sublimation connects directly to freeze-drying and mothball shrinkage.'
      },
      {
        term: 'Henry\u2019s law',
        kind: 'law',
        statement: 'The solubility of a gas in a liquid is proportional to its partial pressure: $p = K_H x$, where $K_H$ (Henry\u2019s constant) grows with temperature and differs gas-to-gas.',
        detail: 'Applications: carbonated bottling under high CO$_2$ pressure; scuba diving — high-pressure N$_2$ dissolves in blood (nitrogen narcosis / the bends on fast ascent, hence helium-oxygen mixes); altitude sickness and low O$_2$ solubility. Compare $K_H$ values: higher $K_H$ means lower solubility at the same pressure.'
      }
    ],
    examples: [
      {
        title: 'Henry\u2019s law scaling',
        problem: 'The solubility of a gas in water at 2 atm partial pressure is 0.10 mol/L. What is its solubility at 5 atm of the same gas at the same temperature?',
        steps: [
          { label: 'Step 1', text: 'Henry\u2019s law at constant $T$: $x \\propto p$, so solubility is proportional to pressure.' },
          { label: 'Step 2', text: 'Ratio: $\\frac{S_2}{S_1} = \\frac{p_2}{p_1} = \\frac{5}{2} = 2.5$.' },
          { label: 'Step 3', text: '$S_2 = 2.5 \\times 0.10 = 0.25$ mol/L.' },
          { label: 'Step 4', text: 'Temperature held fixed is essential — Henry\u2019s constant itself climbs with temperature, cutting solubility if the water warms.' }
        ],
        result: 'Solubility at 5 atm: 0.25 mol/L — linear in pressure.'
      },
      {
        title: 'Predicting the shift on heating',
        problem: 'Oxygen dissolves in water exothermically. Predict the effect on dissolved O$_2$ of (a) heating a lake in summer, (b) increasing depth (pressure).',
        steps: [
          { label: 'Step 1', text: 'Write the equilibrium: $\\text{O}_2(g) \\rightleftharpoons \\text{O}_2(aq)$, $\\Delta H < 0$.' },
          { label: 'Step 2', text: '(a) Heat is a product in effect; adding heat drives the equilibrium left (Le Chatelier) — dissolved oxygen falls, which is why fish crowd cool, deep water in summer.' },
          { label: 'Step 3', text: '(b) Greater pressure (deeper water) shifts equilibrium toward the smaller-volume dissolved phase — solubility rises with depth.' },
          { label: 'Step 4', text: 'Both effects follow Le Chatelier: temperature moves the constant, pressure moves the position.' }
        ],
        result: '(a) Heating lowers dissolved O$_2$; (b) higher pressure raises it.'
      }
    ],
    keyTakeaways: [
      'Dynamic equilibrium: equal opposing rates in a closed system; properties constant, motion unceasing.',
      'Melting point pins temperature; boiling point = vapour pressure matching external pressure.',
      'Henry\u2019s law $p = K_H x$: solubility linear in partial pressure; $K_H$ rises with temperature.',
      'Gas dissolution is exothermic — warm water holds less gas.'
    ],
    quiz: [
      {
        q: 'At equilibrium, which statement is correct?',
        options: ['Concentrations of reactants and products are equal', 'Reactions have stopped', 'Forward and reverse rates are equal', 'Only products remain'],
        answer: 2,
        explanation: 'Step 1: Equilibrium is dynamic, not dead. Step 2: Molecular interchange continues at equal rates. Step 3: Equal concentrations are coincidental, never required. Step 4: Constant macroscopic properties with equal two-way rates is the definition.'
      },
      {
        q: 'A bottle of soda fizzes open because',
        options: ['CO$_2$ solubility drops when pressure falls', 'temperature drops on opening', 'CO$_2$ solubility rises when pressure falls', 'the liquid evaporates instantly'],
        answer: 0,
        explanation: 'Step 1: Bottling charges the headspace with high CO$_2$ pressure. Step 2: Henry\u2019s law keeps gas dissolved in proportion to that pressure. Step 3: Opening drops the pressure, so solubility collapses and CO$_2$ escapes as bubbles. Step 4: Solubility falling with falling pressure is the correct direction.'
      },
      {
        q: 'Camphor kept in an open dish slowly disappears. This illustrates',
        options: ['melting', 'boiling', 'sublimation', 'dissolution'],
        answer: 2,
        explanation: 'Step 1: The solid never becomes liquid en route. Step 2: Solid $\\to$ vapour directly is sublimation. Step 3: Camphor, iodine, naphthalene and dry ice have appreciable vapour pressure below their melting points. Step 4: The solid–gas equilibrium shifts fully to gas in an open system.'
      },
      {
        q: 'Henry\u2019s constant $K_H$ for a gas in water increases with temperature. This means gas solubility',
        options: ['increases with temperature', 'decreases with temperature', 'is unaffected by temperature', 'depends only on pressure'],
        answer: 1,
        explanation: 'Step 1: Henry\u2019s law: $x = p/K_H$. Step 2: Larger $K_H$ at the same pressure gives smaller mole fraction dissolved. Step 3: Rising temperature therefore expels dissolved gas — the warm-flat-soda effect. Step 4: Pressure still matters at any fixed temperature, but the constant itself moves with $T$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: 'jeemain-chem-u7-s1',
    readingTime: 9,
    prerequisites: [
      'Atomic structure: valence electrons (Unit 2)',
      'Equation balancing from stoichiometry (Unit 1)',
    ],
    intro: 'Oxidation is electron loss, reduction is electron gain — remember OIL RIG — and a **redox reaction** is the two happening in lockstep, electrons passing from reductant to oxidant. The bookkeeping device is the **oxidation number**: a fictitious charge that tracks electrons so precisely that balancing even fearsome permanganate equations becomes routine arithmetic.',
    objectives: [
      'Define oxidation and reduction electronically and identify oxidant/reductant in given reactions',
      'Assign oxidation numbers using the rule set, including peroxide, superoxide and hydride exceptions',
      'Distinguish oxidation number from valency and from actual ionic charge',
      'Balance redox equations by the oxidation-number and ion-electron (half-reaction) methods',
    ],
    concepts: [
      {
        term: 'Electronic definitions',
        kind: 'definition',
        statement: '**Oxidation** is loss of electrons; **reduction** is gain; the species oxidised (electron donor) is the reducing agent, the species reduced (electron acceptor) is the oxidising agent.',
        detail: 'Memory hook: OIL RIG. In $\\text{Zn} + \\text{Cu}^{2+} \\to \\text{Zn}^{2+} + \\text{Cu}$, zinc is oxidised (reducing agent) and Cu$^{2+}$ reduced (oxidising agent). The agent is always the opposite of what happens to it — the phrasing JEE tests with relish.'
      },
      {
        term: 'Oxidation number rules',
        kind: 'method',
        statement: 'Free elements: 0. Monatomic ions: the charge. Group 1 is $+1$, group 2 is $+2$; F is always $-1$; H is $+1$ except $-1$ in hydrides (NaH); O is $-2$ except $-1$ in peroxides (H$_2$O$_2$), $-\\frac{1}{2}$ in superoxides (KO$_2$), $+2$ with F.',
        detail: 'The sum of oxidation numbers equals the charge (0 for molecules). Apply top-to-bottom: in K$_2$Cr$_2$O$_7$, $2(+1) + 2x + 7(-2) = 0$ gives Cr $= +6$. In S$_2$O$_3^{2-}$: average S $= +2$ (the two sulfurs actually differ — a classic subtlety).'
      },
      {
        term: 'Stock notation and types of redox',
        kind: 'notation',
        statement: 'Oxidation states are written as Stock roman numerals: Fe(II), Fe(III), Mn(VII) in KMnO$_4$ — and redox reactions classify as combination, decomposition, displacement, or disproportionation.',
        detail: 'Disproportionation: one element is simultaneously oxidised and reduced ($\\text{Cl}_2 + 2\\text{OH}^- \\to \\text{Cl}^- + \\text{ClO}^- + \\text{H}_2\\text{O}$, Cl$_2$ from 0 to $-1$ and $+1$). The reverse — two states merging to one — is comproportionation (Ag$^+$ + Ag$^{3+}$ \u2192 2 Ag$^{2+}$).'
      },
      {
        term: 'Oxidation-number balancing method',
        kind: 'method',
        statement: 'Balance: (1) atoms other than H/O; (2) electron change — equate total oxidation-number increase to decrease; (3) H with H$_2$O balance; (4) O by adding H$_2$O; (5) charge if ionic.',
        detail: 'Example skeleton $\\text{MnO}_4^- + \\text{Fe}^{2+} \\to \\text{Mn}^{2+} + \\text{Fe}^{3+}$ (acidic): Mn falls $+7 \\to +2$ (5 electrons), Fe rises $+2 \\to +3$ (1 electron); five Fe per Mn; then 8H$^+$ and 4H$_2$O complete it: $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\to \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$.'
      },
      {
        term: 'Ion-electron (half-reaction) method',
        kind: 'method',
        statement: 'Split into oxidation and reduction half-equations; balance atoms, then O with H$_2$O, H with H$^+$ (acidic) or H$_2$O/OH$^-$ (basic); balance charge with electrons; add half-reactions cancelling electrons.',
        detail: 'The half-reaction method survives basic media where H$^+$ is illegal: balance as acidic, then add OH$^-$ to both sides to neutralise every H$^+$ into water. Titrations (KMnO$_4$/oxalic acid, K$_2$Cr$_2$O$_7$/Fe$^{2+}$) are nothing but balanced redox plus stoichiometry — a guaranteed JEE numerical pattern.'
      }
    ],
    examples: [
      {
        title: 'Permanganate\u2013iron(II) titration',
        problem: '24.5 mL of 0.02 M KMnO$_4$ in acidic medium oxidises Fe$^{2+}$ to Fe$^{3+}$. How many grams of iron(II) were in the sample?',
        steps: [
          { label: 'Step 1', text: 'Balanced equation: $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\to \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$.' },
          { label: 'Step 2', text: 'Moles of MnO$_4^-$ used: $0.02 \\times \\frac{24.5}{1000} = 4.9 \\times 10^{-4}$ mol.' },
          { label: 'Step 3', text: 'Moles Fe$^{2+}$ $= 5 \\times 4.9 \\times 10^{-4} = 2.45 \\times 10^{-3}$ mol.' },
          { label: 'Step 4', text: 'Mass $= 2.45 \\times 10^{-3} \\times 56 \\approx 0.137$ g of iron(II).' }
        ],
        result: 'About 0.137 g of Fe$^{2+}$ in the titrated sample.'
      },
      {
        title: 'Disproportionation check',
        problem: 'Show that $\\text{Cl}_2 + \\text{hot concentrated NaOH} \\to \\text{Cl}^{-} + \\text{ClO}_3^{-}$ is a disproportionation and balance it.',
        steps: [
          { label: 'Step 1', text: 'Oxidation numbers: Cl$_2$ starts at 0; it ends at $-1$ (Cl$^-$) and $+5$ (ClO$_3^-$) — both products from the same reactant: disproportionation.' },
          { label: 'Step 2', text: 'Half-reactions: $\\text{Cl}_2 + 2e^- \\to 2\\text{Cl}^-$ (gain); $\\text{Cl}_2 + 12\\text{OH}^- \\to 2\\text{ClO}_3^- + 6\\text{H}_2\\text{O} + 10e^-$ (loss).' },
          { label: 'Step 3', text: 'Multiply the gain by 5 and add: $6\\text{Cl}_2 + 12\\text{OH}^- \\to 10\\text{Cl}^- + 2\\text{ClO}_3^- + 6\\text{H}_2\\text{O}$; simplify by 2.' },
          { label: 'Step 4', text: 'Final: $3\\text{Cl}_2 + 6\\text{OH}^- \\to 5\\text{Cl}^- + \\text{ClO}_3^- + 3\\text{H}_2\\text{O}$ — five chlorines reduced per chlorine oxidised, the 5:1 electron bookkeeping in action.' }
        ],
        result: '$3\\text{Cl}_2 + 6\\text{OH}^- \\to 5\\text{Cl}^- + \\text{ClO}_3^- + 3\\text{H}_2\\text{O}$ — a genuine disproportionation.'
      }
    ],
    keyTakeaways: [
      'OIL RIG: oxidation is loss, reduction is gain of electrons; the agent does the opposite of its name.',
      'Oxidation number is bookkeeping, not real charge — memorise the H/O exceptions.',
      'Electron bookkeeping: equate total rise to total fall, then patch H and O with H$_2$O.',
      'One element going both up and down = disproportionation (Cl$_2$, H$_2$O$_2$, P$_4$ in alkali).'
    ],
    quiz: [
      {
        q: 'The oxidation number of Cr in K$_2$Cr$_2$O$_7$ is',
        options: ['$+3$', '$+6$', '$+7$', '$+12$'],
        answer: 1,
        explanation: 'Step 1: K is $+1$ (group 1), O is $-2$. Step 2: $2(+1) + 2x + 7(-2) = 0$. Step 3: $2x = 14 - 2 = 12$, so $x = +6$. Step 4: $+12$ forgets to divide between the two chromium atoms.'
      },
      {
        q: 'In H$_2$O$_2$, the oxidation number of oxygen is',
        options: ['$-2$', '$-1$', '$-\\frac{1}{2}$', '$+1$'],
        answer: 1,
        explanation: 'Step 1: H is $+1$ (not a hydride here). Step 2: Sum must be 0: $2(+1) + 2x = 0$. Step 3: $x = -1$ — the peroxide exception to oxygen\u2019s usual $-2$. Step 4: $-\\frac{1}{2}$ is the superoxide KO$_2$ value.'
      },
      {
        q: 'In the reaction $\\text{Zn} + \\text{CuSO}_4 \\to \\text{ZnSO}_4 + \\text{Cu}$, the oxidising agent is',
        options: ['Zn', 'Cu$^{2+}$', 'SO$_4^{2-}$', 'Cu'],
        answer: 1,
        explanation: 'Step 1: Zinc goes 0 \u2192 $+2$: oxidised, so it donates electrons. Step 2: Copper(II) goes $+2$ \u2192 0: reduced, so it accepts electrons. Step 3: The electron acceptor is by definition the oxidising agent. Step 4: Sulfate is a spectator — its S stays at $+6$.'
      },
      {
        q: 'Which reaction is a disproportionation?',
        options: ['$2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$', '$\\text{Cl}_2 + 2\\text{OH}^- \\to \\text{Cl}^- + \\text{ClO}^- + \\text{H}_2\\text{O}$', '$\\text{Zn} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2$', '$\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2$'],
        answer: 1,
        explanation: 'Step 1: Disproportionation needs one species splitting into a higher and a lower state. Step 2: Cl$_2$ (0) becomes Cl$^-$ ($-1$) and ClO$^-$ ($+1$) — both directions from one reactant. Step 3: The other options have no element changing both ways. Step 4: The cold-alkali chlorine reaction is the textbook disproportionation.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: 'jeemain-chem-u8-s1',
    readingTime: 10,
    prerequisites: [
      'Mole concept and concentration terms (Unit 1)',
      'Collision idea of reactions (qualitative picture)',
    ],
    intro: 'Some reactions finish before you can blink (ionic precipitation), others take geological ages (rust in dry air). **Chemical kinetics** is the study of these speeds: what the rate means, how it is measured, and the four levers that move it — concentration, temperature, pressure and catalyst. The rate law is the empirical heart of the chapter, and half-life arithmetic is JEE Main\u2019s favourite question format.',
    objectives: [
      'Define average and instantaneous rate, and read rate from concentration–time data or graphs',
      'Relate rates of different species in a reaction via stoichiometric coefficients',
      'State the factors affecting rate and explain each via collision theory',
      'Use zero-order and first-order integrated rate laws with half-life $t_{1/2} = \\frac{0.693}{k}$',
    ],
    concepts: [
      {
        term: 'Rate of reaction',
        kind: 'definition',
        statement: 'Rate is the change of concentration per unit time; for $a\\text{A} + b\\text{B} \\to c\\text{C} + d\\text{D}$, the unique rate is $r = -\\frac{1}{a}\\frac{d[A]}{dt} = \\dots = +\\frac{1}{d}\\frac{d[D]}{dt}$.',
        detail: 'Units: mol L$^{-1}$ s$^{-1}$. Instantaneous rate is the tangent slope of the concentration–time curve; average rate is the chord. Stoichiometric bookkeeping: in N$_2$ + 3H$_2$ \u2192 2NH$_3$, hydrogen disappears three times faster than nitrogen appears as ammonia accumulates — the $1/\\nu$ normalisation keeps one rate for all species.'
      },
      {
        term: 'Factors affecting rate',
        kind: 'law',
        statement: 'Rate rises with **concentration** (more collisions), with **temperature** (harder collisions — more exceed the activation barrier), with **pressure** for gases (same as concentration), and with a **catalyst** (lowers $E_a$, providing a faster route without being consumed).',
        detail: 'A 10 K rise typically doubles or triples rate. Surface area (powdered vs lump) and light (photochemical reactions) are honourable mentions. Collision theory\u2019s two tickets to reaction: collide with energy $\\geq E_a$ AND with the right orientation.'
      },
      {
        term: 'Rate law and order',
        kind: 'definition',
        statement: 'The experimentally determined **rate law** is $r = k[A]^x[B]^y$; the exponents (not necessarily the stoichiometric coefficients) give the order $x + y$.',
        detail: 'Order can be zero, fractional or even negative, and is found only from experiment. For elementary steps alone does the coefficient equal the exponent. The rate constant $k$ carries the temperature dependence (Arrhenius, next section of the unit) and units that advertise the order: mol L$^{-1}$s$^{-1}$ (zero), s$^{-1}$ (first), L mol$^{-1}$s$^{-1}$ (second).'
      },
      {
        term: 'Integrated laws and half-life',
        kind: 'law',
        statement: 'Zero order: $[A]_t = [A]_0 - kt$, $t_{1/2} = \\frac{[A]_0}{2k}$. First order: $\\ln\\frac{[A]_0}{[A]_t} = kt$, $t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$ — concentration-independent.',
        detail: 'First order is ubiquitous: radioactive-style decay logic, ester hydrolysis, H$_2$O$_2$ decomposition. Its half-life staying constant is the fingerprint — after three half-lives, $\\frac{1}{8}$ remains. Zero order (photochemical, enzyme-saturated, metal-surface reactions) decays linearly in concentration. A 75% completion takes two half-lives, 90% takes $\\log$-based $3.32 t_{1/2}$.'
      },
      {
        term: 'Temperature and catalysis qualitatively',
        kind: 'insight',
        statement: 'Raising $T$ multiplies the fraction of molecules above $E_a$ (Boltzmann tail), so $k$ grows roughly two- to three-fold per 10 K; a catalyst provides an alternative mechanism with lower $E_a$, accelerating forward and reverse reactions equally.',
        detail: 'Catalysts change kinetics, never thermodynamics: they cannot shift equilibrium or make an impossible reaction possible — they only get you there faster. The Boltzmann distribution\u2019s exponential tail is why small temperature changes have large kinetic consequences.'
      }
    ],
    examples: [
      {
        title: 'First-order half-life arithmetic',
        problem: 'A first-order reaction is 40% complete in 50 minutes. Find the rate constant and the time for 90% completion.',
        steps: [
          { label: 'Step 1', text: '40% complete means 60% remains: $\\frac{[A]_t}{[A]_0} = 0.6$.' },
          { label: 'Step 2', text: 'First order: $k = \\frac{2.303}{t}\\log\\frac{[A]_0}{[A]_t} = \\frac{2.303}{50}\\log\\frac{1}{0.6} = \\frac{2.303}{50} \\times 0.222 = 0.0102$ min$^{-1}$.' },
          { label: 'Step 3', text: 'Half-life: $t_{1/2} = \\frac{0.693}{0.0102} \\approx 68$ min.' },
          { label: 'Step 4', text: '90% completion: $t = \\frac{2.303}{0.0102}\\log\\frac{1}{0.1} = \\frac{2.303 \\times 1}{0.0102} \\approx 226$ min — about 3.3 half-lives, as expected.' }
        ],
        result: '$k \\approx 0.0102$ min$^{-1}$, $t_{1/2} \\approx 68$ min, 90% completion $\\approx 226$ min.'
      },
      {
        title: 'Rate from stoichiometry',
        problem: 'For $2\\text{N}_2\\text{O}_5 \\to 4\\text{NO}_2 + \\text{O}_2$, the rate of NO$_2$ formation is 0.0072 mol L$^{-1}$s$^{-1}$. Find the rates of N$_2$O$_5$ consumption and O$_2$ formation.',
        steps: [
          { label: 'Step 1', text: 'Write the unique rate $r$: $-\\frac{1}{2}\\frac{d[\\text{N}_2\\text{O}_5]}{dt} = \\frac{1}{4}\\frac{d[\\text{NO}_2]}{dt} = \\frac{d[\\text{O}_2]}{dt}$.' },
          { label: 'Step 2', text: 'From NO$_2$: $r = \\frac{0.0072}{4} = 0.0018$ mol L$^{-1}$s$^{-1}$.' },
          { label: 'Step 3', text: 'N$_2$O$_5$ consumption: $\\frac{d[\\text{N}_2\\text{O}_5]}{dt} = -2r = -0.0036$ mol L$^{-1}$s$^{-1}$ — rate of disappearance 0.0036.' },
          { label: 'Step 4', text: 'O$_2$ formation equals $r$ directly (coefficient 1): 0.0018 mol L$^{-1}$s$^{-1}$.' }
        ],
        result: 'N$_2$O$_5$ disappears at 0.0036, O$_2$ forms at 0.0018 mol L$^{-1}$s$^{-1}$.'
      }
    ],
    keyTakeaways: [
      'Rate $= -\\frac{1}{\\nu}\\frac{d[\\text{reactant}]}{dt}$: stoichiometric coefficients normalise all species to one rate.',
      'Rate law exponents come from experiment; order need not match coefficients.',
      'First order: $t_{1/2} = 0.693/k$ independent of concentration; zero order: linear decay, $t_{1/2} \\propto [A]_0$.',
      'Temperature feeds the Boltzmann tail; catalysts lower $E_a$ without touching equilibrium.'
    ],
    quiz: [
      {
        q: 'For a first-order reaction, the half-life is 20 min. The time for 75% completion is',
        options: ['20 min', '40 min', '60 min', '80 min'],
        answer: 1,
        explanation: 'Step 1: 75% completion leaves 25% = one quarter. Step 2: One quarter is two halvings: $\\frac{1}{2} \\times \\frac{1}{2}$. Step 3: Two half-lives $= 2 \\times 20 = 40$ min. Step 4: Constant half-life makes first-order bookkeeping purely multiplicative.'
      },
      {
        q: 'The units of the rate constant of a zero-order reaction are',
        options: ['s$^{-1}$', 'mol L$^{-1}$ s$^{-1}$', 'L mol$^{-1}$ s$^{-1}$', 'L$^2$ mol$^{-2}$ s$^{-1}$'],
        answer: 1,
        explanation: 'Step 1: Zero-order rate: $r = k$. Step 2: Rate units are mol L$^{-1}$ s$^{-1}$. Step 3: So $k$ inherits exactly those units. Step 4: s$^{-1}$ belongs to first order; L mol$^{-1}$ s$^{-1}$ to second.'
      },
      {
        q: 'Increasing temperature increases reaction rate mainly because',
        options: ['the activation energy decreases', 'the fraction of molecules with energy above $E_a$ increases', 'the order of reaction changes', 'the rate constant\u2019s units change'],
        answer: 1,
        explanation: 'Step 1: Activation energy is a property of the reaction route, not the temperature. Step 2: The Boltzmann distribution\u2019s high-energy tail grows rapidly with $T$. Step 3: More collisions then clear the unchanged barrier. Step 4: Order and units are structural, not thermal, properties.'
      },
      {
        q: 'A catalyst accelerates a reaction by',
        options: ['raising the temperature', 'lowering the activation energy', 'increasing reactant concentrations', 'shifting the equilibrium to the right'],
        answer: 1,
        explanation: 'Step 1: A catalyst is unmoved matter — it cannot add heat. Step 2: It offers an alternative mechanism with a smaller $E_a$. Step 3: Concentrations are untouched, and equilibrium position is unchanged. Step 4: Forward and reverse rates rise equally — equilibrium arrives sooner, not further right.'
      }
    ]
  },
  // ---------------------------------------------------------------- 9.1
  {
    sectionId: 'jeemain-chem-u9-s1',
    readingTime: 9,
    prerequisites: [
      'Electronic configuration and quantum numbers (Unit 2)',
      'Nuclear charge and shielding (Slater intuition helps but not required)',
    ],
    intro: 'The periodic table is not a list — it is a map of electron configuration. When Moseley ordered elements by atomic number instead of mass, the anomalies vanished and the modern law emerged: properties are a **periodic function of atomic number**. The s, p, d and f blocks are simply where the differentiating electron lands, and from that single fact flow the trends — radius, ionisation energy, electronegativity — that JEE Main tests every single year.',
    objectives: [
      'State the modern periodic law and describe the present form of the table (periods, groups, blocks)',
      'Identify the s, p, d and f blocks from electronic configuration and predict period and group',
      'Explain why hydrogen and helium are placement puzzles and where they sit',
      'Predict element type (representative, transition, inner-transition, noble gas) from position',
    ],
    concepts: [
      {
        term: 'Modern periodic law',
        kind: 'law',
        statement: 'The physical and chemical properties of elements are a **periodic function of their atomic number** — the count of protons, which fixes electron count and hence configuration.',
        detail: 'Mendeleev ordered by atomic mass, leaving anomalies (Ar/K, Co/Ni, Te/I) and gaps he bravely predicted (eka-silicon = Ge). Moseley\u2019s X-ray work showed atomic number is the true ordering principle; the anomalies dissolved. Periodicity arises because shells fill in repeating patterns — the outermost configuration repeats every 2, 8, 8, 18, 18, 32 electrons.'
      },
      {
        term: 'Structure of the modern table',
        kind: 'notation',
        statement: 'Seven periods (1–7) and 18 groups (1–18, IUPAC); groups 1–2 + He make the s block, 3–12 the d block, 13–18 the p block, and the lanthanide/actinide rows the f block.',
        detail: 'Period number = highest principal quantum number being filled. First period (2 elements), second and third (8), fourth and fifth (18 — d block begins), sixth and seventh (32 — f block). Group 18 closes every period with a noble gas. The long form\u2019s 18-column shape IS the filling order written sideways.'
      },
      {
        term: 'Blocks from configuration',
        kind: 'method',
        statement: 'The block is decided by where the differentiating (last) electron enters: s block $ns^{1-2}$, p block $ns^2np^{1-6}$, d block $(n-1)d^{1-10}ns^{1-2}$, f block $(n-2)f^{1-14}$.',
        detail: 'Worked pattern: $Z = 26$ (Fe) $= [\\text{Ar}]3d^64s^2$ — differentiating electron in 3d, so d block, period 4, group 8. For d block, group $= (\\text{d electrons}) + (\\text{s electrons})$ when that total is 3\u201312. Exceptions Cr ($3d^54s^1$) and Cu ($3d^{10}4s^1$) still land correctly in groups 6 and 11.'
      },
      {
        term: 'Placement puzzles',
        kind: 'insight',
        statement: 'Hydrogen sits in group 1 though it belongs to no natural family — it can lose one electron (like alkalis), gain one (like halogens), or share; helium\u2019s $1s^2$ places it in the s block but its closed shell earns it a group-18 seat.',
        detail: 'Hydrogen\u2019s ambiguity: placed above Li by electron count, above F by one-electron-short-of-duet, sometimes floated alone. He is the only s-block noble gas. Lanthanides and actinides are pulled out to avoid an unbearable 32-column table — an aesthetic choice, not a chemical one.'
      },
      {
        term: 'Reading trends off the map',
        kind: 'insight',
        statement: 'Across a period, nuclear charge grows with the same shell — radius falls, ionisation energy and electronegativity rise; down a group, new shells dominate — radius rises, ionisation energy falls.',
        detail: 'Every trend question reduces to a tug-of-war between nuclear charge (pulls electrons in) and shielding (pushes them out). Small anomalies (IE of O < N from paired-electron repulsion in O\u2019s 2p$^4$) are the classic JEE twist — half-filled shells have extra stability.'
      }
    ],
    examples: [
      {
        title: 'Locating an element from Z',
        problem: 'An element has $Z = 35$. Find its electronic configuration, block, period and group, and predict its family behaviour.',
        steps: [
          { label: 'Step 1', text: 'Fill orbitals: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10} 4p^5$ — that is $2+2+6+2+6+2+10+5 = 35$.' },
          { label: 'Step 2', text: 'Differentiating electron lands in 4p: p block, period 4 (highest $n = 4$).' },
          { label: 'Step 3', text: 'Group = 12 (filled s + d up to Zn) + 5 p electrons $=$ 17.' },
          { label: 'Step 4', text: 'Group 17 halogen ($p^5$, one short of octet): bromine — a volatile red liquid, strong oxidiser, forms Br$^-$ readily.' }
        ],
        result: 'Bromine: $[\\text{Ar}]3d^{10}4s^24p^5$, p block, period 4, group 17.'
      },
      {
        title: 'Anomaly reasoning: first IE of N vs O',
        problem: 'The first ionisation enthalpy of nitrogen is higher than that of oxygen despite oxygen\u2019s greater nuclear charge. Explain.',
        steps: [
          { label: 'Step 1', text: 'Configurations: N is $2p^3$ (half-filled, one electron per orbital), O is $2p^4$ (one pair + two singles).' },
          { label: 'Step 2', text: 'Half-filled subshells exchange-stabilise and spread electron repulsion minimally.' },
          { label: 'Step 3', text: 'In oxygen, removing one 2p electron un-pairs the doublet — the paired-electron repulsion makes that electron easier to strip.' },
          { label: 'Step 4', text: 'Net: $\\text{IE}_1(\\text{N}) > \\text{IE}_1(\\text{O})$ — the classic exception sitting between the general rise across period 2.' }
        ],
        result: 'Half-filled stability of N and pair-repulsion in O invert the expected order.'
      }
    ],
    keyTakeaways: [
      'Modern law: properties repeat periodically with atomic number (electron configuration), not mass.',
      'Block = where the differentiating electron enters; period = highest $n$; group follows the filling arithmetic.',
      'Period 4/5 have 18 elements, 6/7 have 32; f block lives in the detached lanthanide/actinide rows.',
      'Trends are a nuclear-charge vs shielding tug-of-war, with half-filled-shell anomalies as the exam twist.'
    ],
    quiz: [
      {
        q: 'The element with configuration $[\\text{Ar}]3d^{10}4s^24p^3$ belongs to',
        options: ['group 13, p block', 'group 15, p block', 'group 3, d block', 'group 15, d block'],
        answer: 1,
        explanation: 'Step 1: The differentiating electron enters 4p — p block. Step 2: Period 4 (highest $n = 4$). Step 3: Group $= 10 (3d) + 2 (4s) + 3 (4p) = 15$. Step 4: The element is As (arsenic), a group-15 pnictogen.'
      },
      {
        q: 'Mendeleev\u2019s periodic table improved on earlier attempts mainly by',
        options: ['using atomic number', 'leaving gaps for undiscovered elements and predicting their properties', 'arranging by electron configuration', 'separating lanthanides'],
        answer: 1,
        explanation: 'Step 1: Atomic number came later (Moseley). Step 2: Electron configuration came later still (Bohr). Step 3: Mendeleev\u2019s genius was obeying periodicity even when mass order argued — and leaving gaps (eka-boron, eka-aluminium, eka-silicon) later filled perfectly. Step 4: The f-block separation is a modern long-form refinement.'
      },
      {
        q: 'The number of elements in the fourth period is',
        options: ['8', '18', '32', '2'],
        answer: 1,
        explanation: 'Step 1: Period 4 fills 4s, 3d, 4p. Step 2: That is $2 + 10 + 6 = 18$ orbitals\u2019 worth of electrons. Step 3: Eighteen elements, K through Kr. Step 4: 8 belongs to periods 2 and 3; 32 to periods 6 and 7.'
      },
      {
        q: 'Helium is placed in group 18 because',
        options: ['it is an s-block element by configuration', 'its duplet is a closed, chemically inert shell like other noble gases', 'it is a metal', 'it forms many compounds'],
        answer: 1,
        explanation: 'Step 1: By configuration He is $1s^2$ — technically s block. Step 2: But its filled shell makes it monatomic and inert, the defining noble-gas character. Step 3: Chemical behaviour outweighs the mechanical filling label. Step 4: He is the only s-block resident of group 18 — the table\u2019s acknowledged exception.'
      }
    ]
  },
  // ---------------------------------------------------------------- 14.1
  {
    sectionId: 'jeemain-chem-u14-s1',
    readingTime: 10,
    prerequisites: [
      'Hybridisation and VSEPR shapes (Unit 3 bonding)',
      'Basics of nomenclature from school chemistry',
    ],
    intro: 'Carbon is tetravalent and small — the two facts that build a chemistry of millions of compounds. Its four bonds point tetrahedrally ($sp^3$), trigonal-planarly ($sp^2$) or linearly ($sp$), giving organic molecules their three-dimensional personalities. organising this zoo are **functional groups** (the reactive sites) and **homologous series** (families differing by CH$_2$), the two classification tools every JEE organic question silently assumes.',
    objectives: [
      'Explain tetravalency and the geometry of $sp^3$, $sp^2$ and $sp$ carbon centres',
      'Classify organic compounds by functional group, including halo, oxygen, nitrogen and sulfur families',
      'Use homologous series to generate formulas and predict gradations in properties',
      'Distinguish saturated versus unsaturated, aliphatic versus aromatic, and ring versus chain skeletons',
    ],
    concepts: [
      {
        term: 'Tetravalency and hybridisation',
        kind: 'law',
        statement: 'Carbon forms **four covalent bonds** by promoting a 2s electron to 2p; the resulting orbitals hybridise to $sp^3$ (109.5\u00b0 tetrahedral), $sp^2$ (120\u00b0 trigonal) or $sp$ (180\u00b0 linear).',
        detail: '$sp^3$: methane, diamond\u2019s network. $sp^2$: ethene\u2019s planar double bond, graphite\u2019s sheets, benzene\u2019s ring. $sp$: ethyne\u2019s linear triple bond. Bond strength and shortness rise $sp^3 < sp^2 < sp$, and acidity of attached C\u2013H follows the same order (more s character holds electrons closer) — the isomer-counting and acidity questions both hang off this geometry ladder.'
      },
      {
        term: 'Functional groups',
        kind: 'definition',
        statement: 'A **functional group** is the atom or substructure that dictates a molecule\u2019s characteristic reactions: halo ($-$X), alcohol ($-$OH), ether ($-$O$-$), aldehyde ($-$CHO), ketone ($-$CO$-$), carboxylic acid ($-$COOH), ester ($-$COOR$-$), amine ($-$NH$_2$), nitrile ($-$CN), nitro ($-$NO$_2$), thiol ($-$SH), sulfonic acid ($-$SO$_3$H).',
        detail: 'Functional group = reactivity + suffix in nomenclature. The same carbon skeleton wearing different groups behaves like different people in different jobs. Recognising the group is step zero of every JEE organic problem — name it, and half the reaction map is already written.'
      },
      {
        term: 'Homologous series',
        kind: 'definition',
        statement: 'A **homologous series** is a family of compounds with the same functional group, successive members differing by $-$CH$_2\\ -$; general formula $\\text{C}_n\\text{H}_{2n+2}$ (alkanes), $\\text{C}_n\\text{H}_{2n}$ (alkenes/cycloalkanes), $\\text{C}_n\\text{H}_{2n-2}$ (alkynes), $\\text{C}_n\\text{H}_{2n+2}\\text{O}$ (alcohols/ethers) and so on.',
        detail: 'Members show gradual property trends (boiling point climbs ~20\u201330 K per CH$_2$ as dispersion grows) and identical chemistry. Any two adjacent members differ in molar mass by exactly 14 u — the fingerprint for "which pair is homologous?" questions.'
      },
      {
        term: 'Skeleton classification',
        kind: 'method',
        statement: 'By structure: **chain** (acyclic) versus **ring** (cyclic); **saturated** (single bonds only) versus **unsaturated** (C=C, C\u2261C); **aliphatic** versus **aromatic** (cyclic, planar, fully conjugated, H\u00fcckel $4n+2$ \u03c0 electrons).',
        detail: 'Aromaticity checklist on benzene: ring \u2713, planar \u2713, cyclic conjugation \u2713, 6 \u03c0 electrons $= 4(1)+2$ \u2713 — aromatic and exceptionally stable. Cyclooctatetraene (8 \u03c0, non-planar) and cyclobutadiene (4 \u03c0, antiaromatic) fail. Heterocycles (pyridine, furan) can also qualify — oxygen\u2019s lone pair in furan counts toward the six.'
      },
      {
        term: 'IUPAC roots of classification',
        kind: 'notation',
        statement: 'Names encode structure: root (meth-, eth-, prop- for carbons) + saturation infix (-an-, -en-, -yn-) + suffix for the senior functional group ($-$ol, $-$al, $-$one, $-$oic acid) + prefixes for substituents and juniors groups (bromo-, nitro-, hydroxy-).',
        detail: 'Order of seniority (memorise): carboxylic acid > ester > aldehyde > ketone > alcohol > amine. The senior group takes the suffix and the lowest locant; everything else prefixes alphabetically. Isomer counting (structural: chain, position, functional, tautomer; stereo: geometric, optical) rides on this scaffolding and is a permanent JEE fixture.'
      }
    ],
    examples: [
      {
        title: 'Identifying a homologous pair',
        problem: 'Which pairs are homologous: (a) CH$_3$OH and C$_2$H$_5$OH, (b) C$_2$H$_4$ and C$_3$H$_6$, (c) CH$_3$CHO and CH$_3$COCH$_3$, (d) C$_2$H$_6$ and C$_3$H$_8$?',
        steps: [
          { label: 'Step 1', text: 'Homology = same functional group + mass difference exactly 14 u ($-$CH$_2\\ -$).' },
          { label: 'Step 2', text: '(a) Two alcohols, 32 vs 46 u: differ by CH$_2$ — homologous. (b) Two alkenes, 28 vs 42: homologous. (d) Two alkanes, 30 vs 44: homologous.' },
          { label: 'Step 3', text: '(c) Ethanal (aldehyde, 44 u) versus propanone (ketone, 58 u): mass differs by 14 but the functional groups differ — a functional-isomer trap, NOT homologous.' },
          { label: 'Step 4', text: 'Verdict: (a), (b) and (d) are homologous pairs; (c) is the classic impostor.' }
        ],
        result: 'Homologous: (a), (b), (d). Pair (c) mixes an aldehyde with a ketone.'
      },
      {
        title: 'Writing the general formula member',
        problem: 'Write the molecular formula of the fifth member of the alkyne family and name it.',
        steps: [
          { label: 'Step 1', text: 'Alkynes: $\\text{C}_n\\text{H}_{2n-2}$, with $n = 2$ the first member (ethyne — $n = 1$ would leave 0 H).' },
          { label: 'Step 2', text: 'Fifth member: $n = 6$, so $\\text{C}_6\\text{H}_{2(6)-2} = \\text{C}_6\\text{H}_{10}$.' },
          { label: 'Step 3', text: 'Straight-chain name: hex-1-yne (older: 1-hexyne).' },
          { label: 'Step 4', text: 'Check: two fewer H than hexene ($\\text{C}_6\\text{H}_{12}$) — one triple bond\u2019s worth — exactly as the general formula promises.' }
        ],
        result: 'Fifth alkyne: $\\text{C}_6\\text{H}_{10}$, hex-1-yne.'
      }
    ],
    keyTakeaways: [
      'Tetravalent carbon hybridises $sp^3/sp^2/sp$ \u2192 tetrahedral/planar/linear geometries.',
      'Functional groups define family, suffix and reactivity — identify them first in every problem.',
      'Homologues: same group, $+$CH$_2$, $+$14 u, gradual property trends.',
      'Aromatic = cyclic + planar + conjugated + $4n+2$ \u03c0 electrons; benzene is the 6-\u03c0 prototype.'
    ],
    quiz: [
      {
        q: 'The shape of the carbon skeleton in ethene is governed by',
        options: ['$sp^3$ hybridisation', '$sp^2$ hybridisation', '$sp$ hybridisation', 'no hybridisation'],
        answer: 1,
        explanation: 'Step 1: Ethene, C$_2$H$_4$, has one C=C per carbon. Step 2: Three $sp^2$ orbitals form the \u03c3 framework (two C\u2013H + one C\u2013C) in a plane at 120\u00b0. Step 3: The unhybridised p orbitals overlap sideways for the \u03c0 bond, locking planarity. Step 4: $sp^3$ belongs to methane\u2019s tetrahedron; $sp$ to ethyne\u2019s line.'
      },
      {
        q: 'Which pair represents functional isomers?',
        options: ['ethanol and methanol', 'propanal and propanone', 'propan-1-ol and propan-2-ol', 'butane and 2-methylpropane'],
        answer: 1,
        explanation: 'Step 1: Functional isomers share the same molecular formula but carry different functional groups. Step 2: Propanal (CH$_3$CH$_2$CHO, aldehyde) and propanone (CH$_3$COCH$_3$, ketone) are both C$_3$H$_6$O. Step 3: Propan-1-ol/propan-2-ol are positional isomers (same group, different spot); butane/2-methylpropane are chain isomers. Step 4: Ethanol and methanol differ by CH$_2$ — homologues, not isomers.'
      },
      {
        q: 'The general formula $\\text{C}_n\\text{H}_{2n}\\text{O}_2$ fits',
        options: ['alcohols', 'aldehydes', 'carboxylic acids and esters', 'ethers'],
        answer: 2,
        explanation: 'Step 1: Two oxygens suggest $-$COOH or $-$COOR$-$. Step 2: Acetic acid CH$_3$COOH: C$_2$H$_4$O$_2$ — $n = 2$ gives H$_4$. Step 3: Methyl formate HCOOCH$_3$ is also C$_2$H$_4$O$_2$ — the ester twin. Step 4: Alcohols/ethers are C$_n$H$_{2n+2}$O; aldehydes/ketones C$_n$H$_{2n}$O.'
      },
      {
        q: 'A compound is cyclic, planar, fully conjugated and has 10 \u03c0 electrons. It is',
        options: ['anti-aromatic', 'non-aromatic', 'aromatic', 'aliphatic'],
        answer: 2,
        explanation: 'Step 1: H\u00fcckel rule: aromatic requires $4n + 2$ \u03c0 electrons. Step 2: $10 = 4(2) + 2$ — the magic number for $n = 2$. Step 3: Ring, planarity and conjugation are already satisfied. Step 4: Naphthalene (10 \u03c0) is aromatic; 4 or 8 \u03c0 in a planar ring would be anti-aromatic instead.'
      }
    ]
  },
  // ---------------------------------------------------------------- 15.1
  {
    sectionId: 'jeemain-chem-u15-s1',
    readingTime: 10,
    prerequisites: [
      'Functional-group classification (Unit 14 section 1)',
      'Basic nomenclature: alkane/alkene/alkyne roots and suffixes',
    ],
    intro: 'Hydrocarbons — just carbon and hydrogen — are organic chemistry\u2019s trunk from which all families branch. Alkanes are the saturated backbone, lazy and substitution-only; alkenes and alkynes carry \u03c0-bond reactivity that makes them addition magnets; arenes add the aromatic stability wildcard. Mastering their **IUPAC names, isomer counts and preparation routes** is the entry ticket to every JEE organic question.',
    objectives: [
      'Classify hydrocarbons (alkane, alkene, alkyne, arene; saturated vs unsaturated) and name them by IUPAC rules',
      'Count structural isomers of small alkanes and draw geometric (cis/trans, E/Z) isomers of alkenes',
      'Describe laboratory preparations: alkane (decarboxylation, hydrogenation), alkene (dehydration, dehydrohalogenation), alkyne (dehydrohalogenation of dihalides)',
      'Summarise the characteristic reaction classes: free-radical substitution, electrophilic addition, Markovnikov and anti-Markovnikov routes',
    ],
    concepts: [
      {
        term: 'Families and formulas',
        kind: 'definition',
        statement: '**Alkanes** $\\text{C}_n\\text{H}_{2n+2}$ (saturated, single bonds); **alkenes** $\\text{C}_n\\text{H}_{2n}$ (one C=C); **alkynes** $\\text{C}_n\\text{H}_{2n-2}$ (one C\u2261C); **arenes** contain a benzene ring.',
        detail: 'Degree of unsaturation (DoU) from a formula: $\\text{DoU} = \\frac{2C + 2 - H}{2}$ (ignore O; add H for halogens; subtract H for N). C$_4$H$_6$: DoU 2 — one triple or two doubles or a double + a ring. DoU is the fastest formula-to-structure probe in the exam arsenal.'
      },
      {
        term: 'IUPAC nomenclature workflow',
        kind: 'method',
        statement: 'Find the longest chain carrying the senior feature \u2192 number from the end giving lowest locants (multiple bond wins ties) \u2192 name substituents alphabetically: 4-methylhex-2-ene, not 3-methylhex-4-ene.',
        detail: 'The double/triple bond position must ALWAYS be stated for enes and ynes. Lower-sum rule operates on the set of locants (2,3,5 beats 2,4,5), compared lexicographically, not by sum alone in modern IUPAC — but lowest-set-in-order keeps exam answers consistent.',
      },
      {
        term: 'Isomerism toolkit',
        kind: 'method',
        statement: 'Chain isomers (butane vs 2-methylpropane), position isomers (but-1-ene vs but-2-ene), and for alkenes **geometric isomerism** when each C of the double bond carries two different groups: cis/trans or E/Z by CIP priority.',
        detail: 'Isomer counts to memorise: C$_4$H$_{10}$ \u2192 2, C$_5$H$_{12}$ \u2192 3, C$_6$H$_{14}$ \u2192 5, C$_7$H$_{16}$ \u2192 9. But-2-ene\u2019s cis/trans pair is the smallest geometric pair; but-1-ene cannot show it (one carbon has two H). Restricted rotation of the \u03c0 bond is the physical cause — breaking it costs ~260 kJ/mol.'
      },
      {
        term: 'Preparation routes',
        kind: 'law',
        statement: 'Alkanes: decarboxylation ($\\text{RCOONa} + \\text{NaOH} \\xrightarrow{\\text{soda lime}} \\text{RH}$), hydrogenation of unsaturates, Wurtz coupling ($2\\text{RX} + 2\\text{Na} \\to \\text{R\\!-\\!R}$). Alkenes: acid-catalysed dehydration of alcohols and dehydrohalogenation of haloalkanes (Saytzeff — most substituted alkene wins). Alkynes: double dehydrohalogenation of vicinal/geminal dihalides with strong base.',
        detail: 'Kolbe electrolysis gives alkanes from carboxylates; Lindlar\u2019s poisoned catalyst or Na/NH$_3$ tames the alkyne hydrogenation to cis or trans alkenes respectively. Preparation questions love conditions: concentrated H$_2$SO$_4$ at 443 K dehydrates ethanol; alcoholic KOH eliminates while aqueous KOH substitutes — one word decides the product.'
      },
      {
        term: 'Reaction classes preview',
        kind: 'insight',
        statement: 'Alkanes undergo **free-radical substitution** (halogenation, $h\\nu$); alkenes/alkynes undergo **electrophilic addition** (HX, X$_2$, H$_2$O with Markovnikov orientation; HBr + peroxide gives anti-Markovnikov); benzene undergoes **electrophilic substitution** (nitration, sulfonation, halogenation, Friedel–Crafts).',
        detail: 'Markovnikov: H adds to the hydrogen-richer carbon, carbocation stability dictating (3\u00b0 > 2\u00b0 > 1\u00b0). Peroxide effect (Kharasch) reverses HBr only — not HCl or HI. The stability order and its rearrangements power elimination-versus-addition predictions throughout the exam.'
      }
    ],
    examples: [
      {
        title: 'Naming by the rules',
        problem: 'Provide the IUPAC name of CH$_3$CH(CH$_3$)CH=CHCH$_3$.',
        steps: [
          { label: 'Step 1', text: 'Longest chain containing C=C has five carbons: pent-ene base.' },
          { label: 'Step 2', text: 'Number from the right end (closest to the double bond): bond at C2; methyl then lands at C4.' },
          { label: 'Step 3', text: 'Name: 4-methylpent-2-ene. Numbering the other way would give pent-3-ene — forbidden (lowest double-bond locant dominates).' },
          { label: 'Step 4', text: 'Stereochemistry check: the C2=C3 carbons each carry H plus carbon groups, so (E)-/(Z)-4-methylpent-2-ene are both possible.' }
        ],
        result: '4-methylpent-2-ene (with E/Z stereoisomers possible).'
      },
      {
        title: 'Dehydrohalogenation product',
        problem: '2-bromo-2-methylbutane is heated with alcoholic KOH. Predict the major product and the rule used.',
        steps: [
          { label: 'Step 1', text: 'Alcoholic KOH \u2192 elimination (dehydrohalogenation), not substitution.' },
          { label: 'Step 2', text: '\u03b2-hydrogens exist on two carbons: removal from the ethyl side or from either of two methyl groups.' },
          { label: 'Step 3', text: 'Saytzeff: the more substituted alkene dominates — removing the ethyl-side H gives 2-methylbut-2-ene (trisubstituted), while methyl-side removal gives 2-methylbut-1-ene (disubstituted).' },
          { label: 'Step 4', text: 'Major: 2-methylbut-2-ene; the mechanism is E2, anti-periplanar H and Br.' }
        ],
        result: 'Major product 2-methylbut-2-ene by Saytzeff\u2019s rule.'
      }
    ],
    keyTakeaways: [
      'Formulas: alkane C$_n$H$_{2n+2}$, alkene C$_n$H$_{2n}$, alkyne C$_n$H$_{2n-2}$; DoU = (2C+2\u2212H)/2.',
      'IUPAC: longest senior chain, lowest locants, double bond beats substituents in ties.',
      'Geometric isomerism needs two different groups on EACH doubly bonded carbon.',
      'Alcoholic KOH eliminates (Saytzeff), aqueous KOH substitutes — conditions decide the family.'
    ],
    quiz: [
      {
        q: 'The IUPAC name of $(\\text{CH}_3)_2\\text{CHCH}_2\\text{CH}=$CH$_2$ is',
        options: ['4-methylpent-1-ene', '2-methylpent-4-ene', '4-methylpent-4-ene', '2-methylpent-1-ene'],
        answer: 0,
        explanation: 'Step 1: Five-carbon chain containing the double bond: pent-ene. Step 2: Number from the CH$_2$ end so the bond gets locant 1. Step 3: The branch (CH$_3$)$_2$CH puts a methyl at C4: 4-methylpent-1-ene. Step 4: Numbering from the other end would give the double bond locant 4 — never acceptable when 1 is possible.'
      },
      {
        q: 'Which alkene shows geometrical isomerism?',
        options: ['propene', 'but-1-ene', 'but-2-ene', '2-methylpropene'],
        answer: 2,
        explanation: 'Step 1: Geometric isomerism requires each double-bond carbon to carry two DIFFERENT groups. Step 2: Propene: one carbon has H,H — fails. Step 3: But-1-ene: terminal carbon has H,H — fails; 2-methylpropene: one carbon has CH$_3$,CH$_3$ — fails. Step 4: But-2-ene: each carbon holds H and CH$_3$ — the classic cis/trans pair.'
      },
      {
        q: 'Ethanol heated with concentrated H$_2$SO$_4$ at 443 K gives',
        options: ['ethene', 'ethane', 'ethyne', 'diethyl ether'],
        answer: 0,
        explanation: 'Step 1: Concentrated H$_2$SO$_4$ at high temperature dehydrates alcohols. Step 2: Ethanol loses H and OH from adjacent carbons as water. Step 3: The \u03c0 bond forms: ethene. Step 4: At the LOWER temperature of 413 K the same reagent gives diethyl ether — temperature is the switch.'
      },
      {
        q: 'HBr added to propene in the presence of peroxides gives mainly',
        options: ['2-bromopropane (Markovnikov)', '1-bromopropane (anti-Markovnikov)', 'propane', 'no reaction'],
        answer: 1,
        explanation: 'Step 1: Peroxides switch the mechanism to free-radical addition (Kharasch effect). Step 2: Br\u00b7 adds first, placing the radical on the more substituted carbon. Step 3: H then attaches there overall — Br ends up on the terminal carbon: 1-bromopropane. Step 4: The peroxide effect works for HBr only, never HCl or HI.'
      }
    ]
  },
]
