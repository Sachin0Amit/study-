import type { SectionContent } from '../library'

// ============================================================================
// JEE (Main) 2026 Chemistry — master lesson content (high-weightage sections)
// Full SectionContent lessons for the FIRST section of every unit 1–20 of the
// official NTA syllabus (bookId 'chem-complete'): matter & chemical
// combination (1.1), radiation & hydrogen spectrum (2.1), ionic bonding
// (3.1), thermodynamic fundamentals (4.1), concentration terms (5.1),
// dynamic & physical equilibria (6.1), redox concepts & balancing (7.1),
// reaction rates (8.1), the modern periodic table (9.1), p-block
// introduction (10.1), transition elements (11.1), Werner's theory and
// terminology (12.1), purification techniques (13.1), carbon bonding &
// classification (14.1), hydrocarbon classification & preparation (15.1),
// haloalkanes and the C–X bond (16.1), alcohols (17.1), amines (18.1),
// biomolecules and carbohydrates (19.1), detection of elements and
// functional groups (20.1). KaTeX formulas, exam traps and PYQ-pattern
// quizzes follow the advmath-ch01 exemplar style.
// ============================================================================

export const jeemainChemContent: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'chem-ch1-s5',
    readingTime: 9,
    prerequisites: [
      'Atomic masses and symbols of common elements (school chemistry)',
      'Ratios, percentages and unitary method arithmetic',
    ],
    intro: 'Every quantitative chemistry question stands on the **mole** — the chemist\u2019s dozen. Dalton\u2019s atomic theory explains why elements combine in fixed mass ratios, the laws of chemical combination quantify those ratios, and the mole converts between grams, particles and volumes of gas. engineering assessment tests this unit relentlessly through limiting-reagent, per cent-yield and concentration problems.',
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
        detail: 'From per cent data: assume 100 g, convert each per cent to grams, divide by atomic mass, divide all by the smallest to get ratios. A ratio like 1 : 1.33 means multiply by 3 to clear thirds (1 : 1.33 = 3 : 4). engineering assessment traps hide in the rounding — carry one decimal until the end.'
      },
      {
        term: 'Limiting reagent',
        kind: 'method',
        statement: 'The **limiting reagent** is the reactant that runs out first; it alone decides the maximum product: divide each reactant\u2019s moles by its stoichiometric coefficient — the smallest quotient limits.',
        detail: 'The other reactant is in excess; leftover = initial minus consumed. Recognising the limiting reagent by inspection (divide moles by coefficients) is faster than the "extend the chain" method and safer under assessment pressure.'
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
    sectionId: 'chem-ch2-s5',
    readingTime: 10,
    prerequisites: [
      'Mole concept and stoichiometry (Unit 1)',
      'Basic energy ideas: $E = h\\nu$ from physics is reintroduced chemically',
    ],
    intro: 'Light is both wave and particle, and nowhere is the duality sharper than when radiation meets atoms. The **photoelectric effect** proves light arrives in packets (photons) whose energy is set by frequency alone, and the **hydrogen spectrum** shows atoms absorbing and emitting only specific photon energies — the fingerprints of quantised electronic states. engineering assessment loves numericals on photon count, work function and Rydberg lines.',
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
        detail: 'Rearranged: number of photons $N = \\frac{E_{\\text{total}}\\lambda}{hc}$. Doubling wavelength doubles photons per joule. This bridges chemistry to real lamps and lasers, and engineering assessment asks it as a two-step numerical almost every alternate year.'
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
    sectionId: 'chem-ch11-s5',
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
        detail: 'Exceptions matter for engineering assessment: incomplete octets (BeCl$_2$, BF$_3$), expanded octets (PCl$_5$, SF$_6$ — possible from the third period onward via vacant d-orbitals in classical pictures), and odd-electron molecules (NO, NO$_2$). Hydrogen is content with two electrons (duet).'
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
    sectionId: 'chem-ch4-s5',
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
        detail: 'Test: double the system — the property doubles (extensive) or stays put (intensive). Ratio of two extensive properties is intensive: $\\frac{V}{n} = V_m$ (molar volume), $\\frac{U}{n}$, $\\rho = \\frac{m}{V}$. engineering assessment tests the classification directly in assertion–reason format.'
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
    sectionId: 'chem-ch5-s5',
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
    sectionId: 'chem-ch6-s5',
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
        detail: 'Memory hook: OIL RIG. In $\\text{Zn} + \\text{Cu}^{2+} \\to \\text{Zn}^{2+} + \\text{Cu}$, zinc is oxidised (reducing agent) and Cu$^{2+}$ reduced (oxidising agent). The agent is always the opposite of what happens to it — the phrasing engineering assessment tests with relish.'
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
        detail: 'The half-reaction method survives basic media where H$^+$ is illegal: balance as acidic, then add OH$^-$ to both sides to neutralise every H$^+$ into water. Titrations (KMnO$_4$/oxalic acid, K$_2$Cr$_2$O$_7$/Fe$^{2+}$) are nothing but balanced redox plus stoichiometry — a guaranteed engineering assessment numerical pattern.'
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
    sectionId: 'chem-ch7-s5',
    readingTime: 10,
    prerequisites: [
      'Mole concept and concentration terms (Unit 1)',
      'Collision idea of reactions (qualitative picture)',
    ],
    intro: 'Some reactions finish before you can blink (ionic precipitation), others take geological ages (rust in dry air). **Chemical kinetics** is the study of these speeds: what the rate means, how it is measured, and the four levers that move it — concentration, temperature, pressure and catalyst. The rate law is the empirical heart of the chapter, and half-life arithmetic is engineering assessment\u2019s favourite question format.',
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
    sectionId: 'chem-ch11-s10',
    readingTime: 9,
    prerequisites: [
      'Electronic configuration and quantum numbers (Unit 2)',
      'Nuclear charge and shielding (Slater intuition helps but not required)',
    ],
    intro: 'The periodic table is not a list — it is a map of electron configuration. When Moseley ordered elements by atomic number instead of mass, the anomalies vanished and the modern law emerged: properties are a **periodic function of atomic number**. The s, p, d and f blocks are simply where the differentiating electron lands, and from that single fact flow the trends — radius, ionisation energy, electronegativity — that engineering assessment tests every single year.',
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
        detail: 'Every trend question reduces to a tug-of-war between nuclear charge (pulls electrons in) and shielding (pushes them out). Small anomalies (IE of O < N from paired-electron repulsion in O\u2019s 2p$^4$) are the classic engineering assessment twist — half-filled shells have extra stability.'
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
      'Trends are a nuclear-charge vs shielding tug-of-war, with half-filled-shell anomalies as the assessment twist.'
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
    sectionId: 'chem-ch8-s5',
    readingTime: 10,
    prerequisites: [
      'Hybridisation and VSEPR shapes (Unit 3 bonding)',
      'Basics of nomenclature from school chemistry',
    ],
    intro: 'Carbon is tetravalent and small — the two facts that build a chemistry of millions of compounds. Its four bonds point tetrahedrally ($sp^3$), trigonal-planarly ($sp^2$) or linearly ($sp$), giving organic molecules their three-dimensional personalities. organising this zoo are **functional groups** (the reactive sites) and **homologous series** (families differing by CH$_2$), the two classification tools every engineering assessment organic question silently assumes.',
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
        detail: 'Functional group = reactivity + suffix in nomenclature. The same carbon skeleton wearing different groups behaves like different people in different jobs. Recognising the group is step zero of every engineering assessment organic problem — name it, and half the reaction map is already written.'
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
        detail: 'Order of seniority (memorise): carboxylic acid > ester > aldehyde > ketone > alcohol > amine. The senior group takes the suffix and the lowest locant; everything else prefixes alphabetically. Isomer counting (structural: chain, position, functional, tautomer; stereo: geometric, optical) rides on this scaffolding and is a permanent engineering assessment fixture.'
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
    sectionId: 'chem-ch9-s5',
    readingTime: 10,
    prerequisites: [
      'Functional-group classification (Unit 14 section 1)',
      'Basic nomenclature: alkane/alkene/alkyne roots and suffixes',
    ],
    intro: 'Hydrocarbons — just carbon and hydrogen — are organic chemistry\u2019s trunk from which all families branch. Alkanes are the saturated backbone, lazy and substitution-only; alkenes and alkynes carry \u03c0-bond reactivity that makes them addition magnets; arenes add the aromatic stability wildcard. Mastering their **IUPAC names, isomer counts and preparation routes** is the entry ticket to every engineering assessment organic question.',
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
        detail: 'Degree of unsaturation (DoU) from a formula: $\\text{DoU} = \\frac{2C + 2 - H}{2}$ (ignore O; add H for halogens; subtract H for N). C$_4$H$_6$: DoU 2 — one triple or two doubles or a double + a ring. DoU is the fastest formula-to-structure probe in the assessment arsenal.'
      },
      {
        term: 'IUPAC nomenclature workflow',
        kind: 'method',
        statement: 'Find the longest chain carrying the senior feature \u2192 number from the end giving lowest locants (multiple bond wins ties) \u2192 name substituents alphabetically: 4-methylhex-2-ene, not 3-methylhex-4-ene.',
        detail: 'The double/triple bond position must ALWAYS be stated for enes and ynes. Lower-sum rule operates on the set of locants (2,3,5 beats 2,4,5), compared lexicographically, not by sum alone in modern IUPAC — but lowest-set-in-order keeps assessment answers consistent.',
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
        detail: 'Markovnikov: H adds to the hydrogen-richer carbon, carbocation stability dictating (3\u00b0 > 2\u00b0 > 1\u00b0). Peroxide effect (Kharasch) reverses HBr only — not HCl or HI. The stability order and its rearrangements power elimination-versus-addition predictions throughout the assessment.'
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
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'chem-ch27-s5',
    readingTime: 9,
    prerequisites: [
      'Mole concept and stoichiometry (Unit 1)',
      'Mass, volume and density arithmetic',
    ],
    intro: 'Every quantitative statement about a solution — a titration result, a Raoult\u2019s-law plot, a colligative-property sum — opens with a concentration term. engineering assessment asks 25 chemistry questions for 100 marks with +4 for a correct answer and \u22121 for a wrong one, and a good share of them are one-step concentration numericals lifted almost line-by-line from NCERT. That is exactly why chemistry is the fastest-scoring subject on the paper: the formulas are short and the arithmetic honest. This lesson drills the four NCERT terms — molarity, molality, mole fraction and the percentage/`ppm` family — and the density bridge that converts any one of them into another.',
    objectives: [
      'Define molarity, molality, mole fraction and the mass/volume percentage terms and compute each from raw data',
      'Interconvert molarity, molality and mole fraction using the solution\u2019s density',
      'Decide which concentration terms survive a temperature change and justify the choice',
      'Solve dilution and mixing problems with $M_1V_1 = M_2V_2$',
    ],
    concepts: [
      {
        term: 'Why so many concentration terms',
        kind: 'definition',
        statement: 'A **solution** is a homogeneous mixture whose **solute** (lesser component) is dispersed at the molecular level in the **solvent** (greater component); each concentration term is a different bookkeeping choice — per volume of solution (`molarity`), per mass of solvent (`molality`), per moles of all species (`mole fraction`) or per mass/volume of solution (percentages).',
        detail: 'No single term suits every experiment. Volumetric glassware makes molarity the lab workhorse, but volume drifts with temperature, so the physical chemistry ahead (Raoult\u2019s law, colligative properties in the later sections of this unit) demands molality and mole fraction, which are immune to heating. Spotting which term a question silently assumes is half the mark.',
      },
      {
        term: 'Molarity',
        kind: 'notation',
        statement: '**Molarity** $M$ is moles of solute per litre of solution: $M = \\frac{n_{\\text{solute}}}{V_{\\text{solution}}(\\text{L})}$, units mol L$^{-1}$; dilution obeys $M_1V_1 = M_2V_2$.',
        detail: 'Dilution problems assume only solvent is added, so moles of solute are untouched while volume grows. For mixing two solutions of the same solute, total moles over total volume gives the final molarity. Watch the unit: 250 mL must become 0.25 L before dividing — the commonest silly slip on the assessment.',
      },
      {
        term: 'Molality',
        kind: 'definition',
        statement: '**Molality** $m$ is moles of solute per kilogram of **solvent** (not solution!): $m = \\frac{n_{\\text{solute}} \\times 1000}{w_{\\text{solvent}}(\\text{g})}$, units mol kg$^{-1}$.',
        detail: 'Mass neither expands nor contracts, so molality is temperature-independent — the assertion\u2013reason staple of this unit. The solvent-only denominator is the trap: 1 mol of solute in 1 kg of solvent is exactly 1 molal, but that same solution poured into a 1 L flask is not 1 molar.',
      },
      {
        term: 'Mole fraction and percentage terms',
        kind: 'notation',
        statement: '**Mole fraction** $x_A = \\frac{n_A}{n_A + n_B}$ is dimensionless with $x_A + x_B = 1$; **mass %** $= \\frac{w_{\\text{solute}}}{w_{\\text{solution}}} \\times 100$; **volume %** $= \\frac{V_{\\text{solute}}}{V_{\\text{solution}}} \\times 100$; trace levels use ppm $= \\frac{w_{\\text{solute}}}{w_{\\text{solution}}} \\times 10^{6}$.',
        detail: 'Mole fraction and mass % ignore temperature; volume % does not, because liquid volumes are not strictly additive on mixing (ethanol + water contracts). `ppm` is the water-quality unit — hardness ions, fluoride and dissolved pollutants live there.',
      },
      {
        term: 'The density bridge',
        kind: 'method',
        statement: 'Density links mass and volume: $d = \\frac{\\text{mass of solution}}{\\text{volume of solution}}$ in g mL$^{-1}$. On a 1 L basis, $m = \\frac{1000\\ M}{1000\\ d - M M_1}$ and $M = \\frac{10 \\times (\\%\\ w/w) \\times d}{M_1}$, where $M_1$ is the molar mass of the solute.',
        detail: 'The 1-litre basis makes every conversion mechanical: mass of solution $= 1000d$ g, mass of solute $= M \\times M_1$ g, so mass of **solvent** $= (1000d - MM_1)$ g. Divide moles by solvent mass in kg for molality, or convert solvent mass to moles for the mole fraction. Reverse the flow to climb from molality back to molarity.',
      },
    ],
    examples: [
      {
        title: 'Dilution bookkeeping',
        problem: '4.0 g of NaOH ($M = 40$ g/mol) is dissolved and made up to 250 mL. Find the molarity, and the molarity after 500 mL of water is added.',
        steps: [
          { label: 'Step 1', text: 'Moles of NaOH: $n = \\frac{4.0}{40} = 0.10$ mol.' },
          { label: 'Step 2', text: 'Molarity: $M = \\frac{0.10}{0.250} = 0.40$ mol L$^{-1}$.' },
          { label: 'Step 3', text: 'Dilution: $M_2 = \\frac{M_1V_1}{V_2} = \\frac{0.40 \\times 250}{750} = 0.133$ M — the final volume is $250 + 500 = 750$ mL.' },
          { label: 'Step 4', text: 'Check the invariant: moles $= 0.133 \\times 0.75 = 0.10$ mol — unchanged, exactly as dilution demands.' }
        ],
        result: '0.40 M initially; 0.133 M after adding 500 mL of water.'
      },
      {
        title: 'Molarity to molality via density',
        problem: 'A 2.0 M NaOH solution has density 1.10 g/mL. Calculate its molality and the mole fraction of NaOH. ($M_{\\text{NaOH}} = 40$, $M_{\\text{H}_2\\text{O}} = 18$ g/mol)',
        steps: [
          { label: 'Step 1', text: '```text\n1 L of solution:  mass = 1000 x 1.10 = 1100 g\nNaOH in it:        2.0 mol x 40 = 80 g\nwater (solvent):   1100 - 80 = 1020 g = 1.02 kg\n```' },
          { label: 'Step 2', text: 'Molality: $m = \\frac{2.0}{1.02} = 1.96$ mol kg$^{-1}$.' },
          { label: 'Step 3', text: 'Moles of water: $\\frac{1020}{18} = 56.7$ mol, so $x_{\\text{NaOH}} = \\frac{2.0}{2.0 + 56.7} = 0.034$.' },
          { label: 'Step 4', text: 'Note the direction: molality ($1.96 < 2.0$) fell below molarity because part of the solution\u2019s mass is solute, shrinking the solvent base.' }
        ],
        result: '$m = 1.96$ mol kg$^{-1}$; $x_{\\text{NaOH}} \\approx 0.034$.'
      },
      {
        title: 'From mass percent to molarity',
        problem: 'A commercial reagent is 10% glucose by mass with density 1.04 g/mL ($M_{\\text{glucose}} = 180$ g/mol). Find its molarity.',
        steps: [
          { label: 'Step 1', text: 'Take 100 g of solution: 10 g glucose $= \\frac{10}{180} = 0.0556$ mol.' },
          { label: 'Step 2', text: 'Volume of that solution: $\\frac{100}{1.04} = 96.2$ mL $= 0.0962$ L.' },
          { label: 'Step 3', text: 'Molarity: $\\frac{0.0556}{0.0962} = 0.578$ mol L$^{-1}$.' },
          { label: 'Step 4', text: 'Shortcut cross-check: $M = \\frac{10 \\times (\\%\\ w/w) \\times d}{M_1} = \\frac{10 \\times 10 \\times 1.04}{180} = 0.578$ M \u2713 — identical, as it must be.' }
        ],
        result: 'The 10% (w/w) glucose solution is about 0.58 M.'
      }
    ],
    keyTakeaways: [
      'Molarity = mol per litre of solution (temperature-dependent); molality = mol per kg of solvent (temperature-independent).',
      'Mole fractions are dimensionless, temperature-proof and sum to 1 for a binary solution.',
      'Density bridge on a 1 L basis: solvent mass $= 1000d - MM_1$ g — the key to every interconversion.',
      'Dilution never changes moles of solute: $M_1V_1 = M_2V_2$.',
      'ppm scales trace concentrations: $\\frac{w_{\\text{solute}}}{w_{\\text{solution}}} \\times 10^{6}$.'
    ],
    quiz: [
      {
        q: 'Which concentration term changes when a solution is heated from 25 \u00b0C to 35 \u00b0C?',
        options: ['Molality', 'Mole fraction', 'Molarity', 'Mass percentage'],
        answer: 2,
        explanation: 'Step 1: Heating expands the solution\u2019s volume. Step 2: Molarity divides moles by litres of solution, so it falls as volume grows. Step 3: Molality divides by solvent mass, mole fraction by moles, mass % by mass — none involve volume. Step 4: Only molarity among these is temperature-dependent.'
      },
      {
        q: 'Water must be added to 250 mL of 2.0 M NaOH to make it 0.50 M. The volume of water to be added is',
        options: ['500 mL', '750 mL', '1000 mL', '1250 mL'],
        answer: 1,
        explanation: 'Step 1: Moles of NaOH stay fixed at $2.0 \\times 0.250 = 0.5$ mol. Step 2: Final volume for 0.50 M: $V_2 = \\frac{0.5}{0.5} = 1.0$ L. Step 3: Water added $= 1000 - 250 = 750$ mL. Step 4: 1000 mL is the final volume, not the added water — the classic mix-up.'
      },
      {
        q: 'The mole fraction of glucose in a solution of 18 g glucose ($M = 180$) in 178.2 g water ($M = 18$) is',
        options: ['0.1', '0.01', '0.001', '0.5'],
        answer: 1,
        explanation: 'Step 1: $n_{\\text{glucose}} = \\frac{18}{180} = 0.1$ mol. Step 2: $n_{\\text{water}} = \\frac{178.2}{18} = 9.9$ mol. Step 3: $x = \\frac{0.1}{0.1 + 9.9} = \\frac{0.1}{10} = 0.01$. Step 4: 0.1 would forget to include the solute moles in the denominator\u2019s total.'
      },
      {
        q: 'A 10% (w/w) aqueous NaCl solution contains',
        options: ['10 g NaCl in 100 g of water', '10 g NaCl in 100 g of solution', '10 g NaCl in 100 mL of solution', '10 mL NaCl in 100 mL of solution'],
        answer: 1,
        explanation: 'Step 1: w/w means mass of solute divided by mass of the whole solution. Step 2: 10% w/w = 10 g NaCl per 100 g of solution, which contains 90 g of water. Step 3: If it were 10 g per 100 g of water, the solution would mass 110 g and the percentage would fall to about 9.1%. Step 4: The solvent is 90 g, not 100 g — the persistent misconception.'
      }
    ]
  },
  // ---------------------------------------------------------------- 10.1
  {
    sectionId: 'chem-ch13-s5',
    readingTime: 8,
    prerequisites: [
      'Electronic configuration and subshell filling (Unit 2)',
      'The modern periodic table\u2019s blocks (Unit 9 section 1)',
    ],
    intro: 'Six groups, 38 elements, one governing configuration: the **p block** is where the periodic table\u2019s chemistry turns vivid — acids and bases, oxidants and reductants, inert gases and reactive metals all live here. Since the 2024 syllabus rationalisation the testing agency trimmed the group-wise descriptive detail, so the modern engineering assessment paper (25 chemistry questions, 100 marks, +4 for a hit, \u22121 for a miss) tests the **grammar** of the block — configurations, family names, oxidation states — through short NCERT-line questions. Chemistry stays the fastest-scoring subject of the paper when this grammar is automatic. This section fixes the $ns^2np^{1\u20136}$ skeleton and the family map it generates, leaving the detailed trends to the next two sections.',
    objectives: [
      'Write the general p-block configuration $ns^2np^{1\u20136}$ and deduce block, group, period and valence electrons of any element from its $Z$',
      'Name the six families from group 13 to 18 with their valence-electron counts',
      'Predict the common oxidation states of each family, including the group \u2212 2 companion state',
      'Introduce the inert pair effect as the reason heavier p-block elements prefer lower oxidation states',
    ],
    concepts: [
      {
        term: 'What qualifies as p block',
        kind: 'definition',
        statement: 'The **p-block elements** have their differentiating (last) electron entering a p orbital; they occupy **groups 13–18**, where the p subshell fills from $np^1$ to $np^6$, giving the general outer configuration $ns^2np^{1\u20136}$.',
        detail: 'A p subshell holds six electrons, so filling it spawns six columns of the table. Helium sits in group 18 by its inert behaviour but its $1s^2$ configuration is pure s block — the acknowledged misfit the assessment likes to probe. The lightest true p-block element is boron, because period 2 is the first that owns a 2p subshell.',
      },
      {
        term: 'The six families',
        kind: 'notation',
        statement: 'Families to own: **13** boron family (3 valence electrons), **14** carbon family (4), **15** pnictogens (5), **16** chalcogens (6), **17** halogens (7), **18** noble gases (8) — for the p block, valence electrons = group number \u2212 10.',
        detail: 'Group arithmetic: group = 10 + (s electrons) + (p electrons). For $Z = 33$: $[\\text{Ar}]3d^{10}4s^24p^3$ gives $10 + 2 + 3 = 15$ — arsenic, a metalloid of the pnictogens. The metalloids (B, Si, Ge, As, Sb, Te) straddle the staircase inside the block: metals dominate the bottom-left, non-metals the top-right.',
      },
      {
        term: 'Oxidation states from configuration',
        kind: 'law',
        statement: 'The highest positive state equals the **number of valence electrons**; each family also shows a state two lower (group \u2212 2) where the $ns^2$ pair stays unused: $+3/+1$ (13), $+4/+2$ (14), $+5/+3$ (15), $+6/+4/+2$ (16), $+7/+5/+3/+1$ (17), $0$ (18).',
        detail: 'Fluorine breaks the ladder — only \u22121, never positive, because nothing is more electronegative. Oxygen sticks mainly to \u22122. The heavier noble gases do form compounds (Xe reaches $+2$, $+4$, $+6$ and $+8$ as in XeF$_2$ and XeO$_3$), so "inert gas" is a dated label. Negative states appear only on the right side\u2019s non-metals (N$^{3\u2013}$, O$^{2\u2013}$, F$\u2013$).',
      },
      {
        term: 'The inert pair effect',
        kind: 'insight',
        statement: 'Down each group the **$ns^2$ pair participates less and less** in bonding, so the lower oxidation state wins for the heavyweights: Tl$^+$ over Tl$^{3+}$, Pb$^{2+}$ over Pb$^{4+}$, Bi$^{3+}$ over Bi$^{5+}$.',
        detail: 'Cause: poor shielding by the intervening filled $d$ and $f$ subshells raises the effective nuclear pull on the outer $s$ pair, binding it tighter. Within group 13, aluminium is dominantly +3 while thallium is dominantly +1 — the assessment\u2019s favourite one-line illustration. The full map of how these states shift across periods and down groups belongs to section 10.2.',
      },
      {
        term: 'The locate-a-metal drill',
        kind: 'method',
        statement: 'A 20-second loop for any p-block $Z$: configuration \u2192 differentiating electron in p \u2192 **block** \u2192 highest $n$ = **period** \u2192 group = 10 + s + p electrons \u2192 family, valence count and common states.',
        detail: 'Drill example $Z = 52$: $[\\text{Kr}]4d^{10}5s^25p^4$ \u2192 p block, period 5, group 16, six valence electrons, states \u22122, +4, +6 — tellurium. Automating this loop converts at least one guaranteed configuration question into a free mark every year.',
      },
    ],
    examples: [
      {
        title: 'Locating an element from Z',
        problem: 'An element has $Z = 52$. Write its electronic configuration and deduce its block, period, group, family and common oxidation states.',
        steps: [
          { label: 'Step 1', text: '```text\n52 = 36 (Kr core) + 10 (4d) + 2 (5s) + 4 (5p)\nconfig: [Kr] 4d10 5s2 5p4\n```' },
          { label: 'Step 2', text: 'The differentiating electron lands in 5p: p block, and the highest principal quantum number $n = 5$ fixes period 5.' },
          { label: 'Step 3', text: 'Group $= 10 + 2 (5s) + 4 (5p) = 16$ — the chalcogen family with six valence electrons.' },
          { label: 'Step 4', text: 'States: \u22122 (gaining a full octet), +4 and +6 (sharing all or four valence electrons) — the element is tellurium, a metalloid used in alloys and semiconductors.' }
        ],
        result: 'Tellurium: $[\\text{Kr}]4d^{10}5s^25p^4$, p block, period 5, group 16 (chalcogen), states \u22122, +4, +6.'
      },
      {
        title: 'Inert pair in action: the missing PbI$_4$',
        problem: 'PbCl$_4$ can be prepared, but PbI$_4$ does not exist. Explain using oxidation states and the inert pair effect.',
        steps: [
          { label: 'Step 1', text: 'Lead: $[\\text{Xe}]4f^{14}5d^{10}6s^26p^2$ — the $+4$ state must deploy the reluctant $6s^2$ pair, so Pb(IV) is a strong oxidant.' },
          { label: 'Step 2', text: 'I$\u2013$ is a strong reductant; it hands electrons back to Pb(IV), reducing it to the inert-pair-stable Pb$^{2+}$.' },
          { label: 'Step 3', text: 'Any Pb(IV)\u2013iodide bond self-destructs: $\\text{Pb}^{4+} + 2\\text{I}^- \\to \\text{Pb}^{2+} + \\text{I}_2$ — so PbI$_4$ collapses to PbI$_2$ plus iodine.' },
          { label: 'Step 4', text: 'With the less reducing Cl$\u2013$, PbCl$_4$ survives (though it is still unstable and decomposes on warming) — the reductant strength of the halide anion decides.' }
        ],
        result: 'PbI$_4$ cannot exist: the inert-pair-stabilised Pb$^{2+}$ plus oxidising iodide to I$_2$ is the preferred outcome.'
      }
    ],
    keyTakeaways: [
      'p block = groups 13–18, outer configuration $ns^2np^{1\u20136}$; valence electrons = group \u2212 10.',
      'Group = 10 + s + p electrons; period = highest $n$; helium is the s-block resident of group 18.',
      'Highest oxidation state = valence electron count; the group \u2212 2 state rides on the inert pair effect.',
      'Heavier elements prefer lower states: Tl$^+$, Pb$^{2+}$, Bi$^{3+}$ beat Tl$^{3+}$, Pb$^{4+}$, Bi$^{5+}$ in stability.',
    ],
    quiz: [
      {
        q: 'The general outer electronic configuration of group 15 elements is',
        options: ['$ns^2np^1$', '$ns^2np^3$', '$ns^2np^5$', '$ns^2np^4$'],
        answer: 1,
        explanation: 'Step 1: Group 15 = 10 + 2 + p electrons, so p electrons = 3. Step 2: The configuration is $ns^2np^3$ — five valence electrons. Step 3: $ns^2np^1$ is group 13, $ns^2np^5$ is group 17, $ns^2np^4$ is group 16. Step 4: N, P, As, Sb, Bi are the pnictogens with this signature.'
      },
      {
        q: 'The element with $Z = 33$ belongs to',
        options: ['group 13, period 4', 'group 15, period 4', 'group 15, period 3', 'group 16, period 4'],
        answer: 1,
        explanation: 'Step 1: Fill: $[\\text{Ar}]3d^{10}4s^24p^3$ (18 + 10 + 2 + 3 = 33). Step 2: Differentiating electron in 4p \u2192 p block, and $n = 4$ gives period 4. Step 3: Group $= 10 + 2 + 3 = 15$. Step 4: The element is arsenic — a group-15, period-4 metalloid; period 3 would end its p subshell at $Z = 18$.'
      },
      {
        q: 'The most common oxidation state of lead in its stable compounds is',
        options: ['$+4$', '$+2$', '$+6$', '$0$'],
        answer: 1,
        explanation: 'Step 1: Lead is group 14: $6s^26p^2$, so +4 uses all four valence electrons. Step 2: The inert pair effect binds the $6s^2$ pair tightly down the group. Step 3: Pb$^{2+}$ (pair unused) is therefore the stable state; Pb(IV) compounds are oxidising and easily reduced. Step 4: +6 is impossible for group 14; 0 is the free element, not a compound state.'
      },
      {
        q: 'Which element placed in group 18 is NOT a p-block element by electronic configuration?',
        options: ['Ne', 'Ar', 'Kr', 'He'],
        answer: 3,
        explanation: 'Step 1: Group 18 is otherwise the p$^6$ terminus of each period. Step 2: Ne, Ar and Kr are indeed $ns^2np^6$. Step 3: Helium is $1s^2$ — only two electrons in an s subshell, no p electrons at all. Step 4: He sits in group 18 purely for its closed-shell inertness; by configuration it belongs to the s block.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.1
  {
    sectionId: 'chem-ch13-s8',
    readingTime: 9,
    prerequisites: [
      'Electronic configuration of atoms (Unit 2)',
      'Position of the d block in the periodic table (Unit 9)',
    ],
    intro: 'The **d block** occupies the periodic table\u2019s waist and behaves like a bridge — hence "transition": its properties grade smoothly between the fiercely electropositive s-block metals and the p-block\u2019s mixed personalities. One structural fact — a partially filled d subshell — detonates into eight characteristic fingerprints, from the colours of gemstones to the magnets in headphones. engineering assessment\u2019s 25-question, 100-mark chemistry paper (+4 per correct, \u22121 per wrong) reliably parks a question on configurations or the Zn/Cd/Hg exclusion, drawn straight from NCERT lines — quick marks that keep chemistry the fastest-scoring subject of the three.',
    objectives: [
      'Define transition elements through the partially filled d subshell in the atom or its common ions',
      'Write configurations of the 3d series and rationalise the chromium and copper exceptions',
      'Argue why Zn, Cd and Hg are d-block elements but not transition elements',
      'Connect the eight characteristic properties to their d-electron origin and describe typical occurrences',
    ],
    concepts: [
      {
        term: 'Definition and the four series',
        kind: 'definition',
        statement: 'A **transition element** possesses a partially filled d subshell in the elemental atom **or** in at least one common oxidation state: the 3d series Sc\u2013Zn, 4d Y\u2013Cd, 5d La, Hf\u2013Hg (and the incomplete 6d row Ac, Rf\u2013Cn).',
        detail: 'All transition elements are d-block elements, but the converse fails: **Zn, Cd, Hg** carry $d^{10}$ in both the atom and their common +2 ion — nowhere is a d subshell partially filled — so NCERT excludes them from strict transition status. Their tell-tale signs: colourless ions, diamagnetism and a single fixed oxidation state.',
      },
      {
        term: 'Electronic configuration',
        kind: 'notation',
        statement: 'General configuration $(n-1)d^{1\u201310}ns^{1\u20132}$; the two 3d celebrities are **Cr** $= [\\text{Ar}]3d^54s^1$ and **Cu** $= [\\text{Ar}]3d^{10}4s^1$.',
        detail: 'Why the exceptions: exactly half-filled or fully filled d subshells gain exchange-energy stability and symmetric charge distribution that beats the naive aufbau fill. The 4d and 5d rows show many more anomalies (Nb $4d^45s^1$, Pd $4d^{10}5s^0$, Pt $5d^96s^1$) because those subshells are closer in energy. On ionisation, **4s electrons leave first**: Fe$^{2+}$ is $3d^6$, never $3d^44s^2$.',
      },
      {
        term: 'Why the name "transition"',
        kind: 'insight',
        statement: 'The d block sits **between** the s and p blocks, and its chemistry transits between them: s-block-like metallic reactivity softening toward p-block covalency, with the d electrons supplying the gradient.',
        detail: 'Expect intermediate behaviour in practice — moderately reactive metals, several oxidation steps, a strong appetite for complex formation. The literal filling order also transitions: ns fills before (n\u22121)d, which fills before np — the d subshell is the interlude between the two ends of the period.',
      },
      {
        term: 'Occurrence',
        kind: 'definition',
        statement: 'Most d-block metals occur in the combined state as oxides, sulfides, carbonates and silicates: hematite $\\text{Fe}_2\\text{O}_3$, pyrolusite $\\text{MnO}_2$, rutile for Ti, chalcopyrite $\\text{CuFeS}_2$, sphalerite $\\text{ZnS}$; only gold, platinum and some silver/copper occur native.',
        detail: 'The consequence is metallurgical: extraction of this block is reduction-dominated — sulfide ores are roasted to oxides first, then reduced with carbon or aluminium (thermite), and the most reactive members need electrolysis. Occurrence explains why the industry around this block centres on furnaces rather than evaporation ponds.',
      },
      {
        term: 'Eight characteristic fingerprints',
        kind: 'law',
        statement: 'Partially filled d orbitals deliver: **variable oxidation states** (Mn spans +2 to +7), **coloured ions** (d\u2013d transitions, Cu$^{2+}$ blue), **paramagnetism** with $\\mu = \\sqrt{n(n+2)}$ BM for $n$ unpaired electrons, **catalysis** (Fe\u2013Haber, $\\text{V}_2\\text{O}_5$\u2013contact, Ni\u2013hydrogenation), **complex formation**, **interstitial compounds**, **alloys** and **high melting points** — Zn, Cd, Hg being the low-melting exceptions.',
        detail: 'Each property maps to d structure: unpaired electrons feed magnetism and metallic-bond strength; vacant d orbitals plus high charge density invite lone-pair donation (complexes, catalytic surfaces); tiny atoms (H, C, N) slip into lattice voids giving hard, non-stoichiometric interstitial compounds; similar radii let atoms swap lattice sites, hence alloys. Warning: the purple of $\\text{MnO}_4^-$ is a charge-transfer colour, NOT d\u2013d — the standard trap.'
      },
    ],
    examples: [
      {
        title: 'Configuration, ion and magnetism of iron',
        problem: 'Write the configurations of Fe ($Z = 26$) and Fe$^{2+}$, count the unpaired electrons, and compute the magnetic moment.',
        steps: [
          { label: 'Step 1', text: '```text\nFe   : [Ar] 3d6 4s2\nFe2+ : [Ar] 3d6      (4s electrons leave first)\nunpaired d electrons = 4\n```' },
          { label: 'Step 2', text: 'Fe$^{2+}$: $3d^6$ — Hund\u2019s rule places five singly first, the sixth pairs up, leaving 4 unpaired electrons.' },
          { label: 'Step 3', text: 'Magnetic moment: $\\mu = \\sqrt{n(n+2)} = \\sqrt{4 \\times 6} = \\sqrt{24} \\approx 4.9$ BM.' },
          { label: 'Step 4', text: 'Fe$^{3+}$ would be $3d^5$ — all five unpaired — giving $\\mu = \\sqrt{35} \\approx 5.9$ BM; the moment is a direct d-electron census.' }
        ],
        result: 'Fe: $[\\text{Ar}]3d^64s^2$; Fe$^{2+}$: $[\\text{Ar}]3d^6$ with 4 unpaired electrons, $\\mu \\approx 4.9$ BM.'
      },
      {
        title: 'The Zn exclusion argument',
        problem: 'Zinc is a d-block element yet is not counted among transition elements, and Zn$^{2+}$ salts are white. Explain.',
        steps: [
          { label: 'Step 1', text: 'Zn ($Z = 30$): $[\\text{Ar}]3d^{10}4s^2$ — the d subshell is completely filled in the atom.' },
          { label: 'Step 2', text: 'The only common ion, Zn$^{2+}$, is $[\\text{Ar}]3d^{10}$ — still fully filled: no partially filled d subshell anywhere.' },
          { label: 'Step 3', text: 'By the strict definition Zn fails the test; the same argument excludes Cd ($4d^{10}$) and Hg ($5d^{10}$).' },
          { label: 'Step 4', text: 'With no partially filled d, no d\u2013d transition is possible — Zn$^{2+}$ compounds are colourless (white salts) and diamagnetic, and zinc shows only the +2 state.' }
        ],
        result: 'Zn is d-block by position but not transition by definition; its filled $d^{10}$ shells cost it colour, magnetism and variable valence.'
      }
    ],
    keyTakeaways: [
      'Transition = partially filled d in the atom or a common ion; Zn, Cd, Hg are the excluded d$^{10}$ trio.',
      'General configuration $(n-1)d^{1\u201310}ns^{1\u20132}$; Cr and Cu break it for half/fully filled stability; 4s ionises before 3d.',
      'The eight fingerprints (states, colour, magnetism, catalysis, complexes, interstitials, alloys, high mp) all trace to d electrons.',
      'Magnetic census: $\\mu = \\sqrt{n(n+2)}$ BM — count unpaired d electrons first.',
      'Most d-block metals occur as oxides/sulfides; extraction is reduction chemistry.',
    ],
    quiz: [
      {
        q: 'The ground-state electronic configuration of chromium ($Z = 24$) is',
        options: ['$[\\text{Ar}]3d^44s^2$', '$[\\text{Ar}]3d^54s^1$', '$[\\text{Ar}]3d^34s^24p^1$', '$[\\text{Ar}]3d^64s^2$'],
        answer: 1,
        explanation: 'Step 1: Naive aufbau gives $3d^44s^2$ — option one, the trap. Step 2: A half-filled $3d^5$ maximises exchange energy and symmetry. Step 3: One 4s electron is promoted: $[\\text{Ar}]3d^54s^1$ — six singly occupied orbitals. Step 4: $3d^64s^2$ is iron\u2019s configuration (26 electrons), not chromium\u2019s 24.'
      },
      {
        q: 'Which of the following is a d-block element but NOT a transition element?',
        options: ['Fe', 'Cu', 'Zn', 'Ni'],
        answer: 2,
        explanation: 'Step 1: Check the d subshell of the atom and its common ions. Step 2: Fe, Cu and Ni all have partially filled d subshells in some common state (Cu$^{2+}$ is $3d^9$). Step 3: Zn is $3d^{10}$ as atom and Zn$^{2+}$ is $3d^{10}$ — never partially filled. Step 4: Zinc keeps its d-block seat by position but loses transition status by the strict definition.'
      },
      {
        q: 'The number of unpaired electrons in Fe$^{2+}$ ($3d^6$) is',
        options: ['2', '4', '5', '6'],
        answer: 1,
        explanation: 'Step 1: Six d electrons enter five d orbitals by Hund\u2019s rule. Step 2: Five orbitals each take one electron first. Step 3: The sixth must pair, leaving 4 unpaired spins. Step 4: 5 belongs to Fe$^{3+}$ ($3d^5$, all unpaired); 6 would need six orbitals, which d does not have.'
      },
      {
        q: 'Transition metals and their compounds serve as catalysts mainly because they',
        options: ['are always in the gaseous phase', 'have vacant d orbitals and variable oxidation states that adsorb and activate reactants', 'have completely filled d subshells', 'have very low melting points'],
        answer: 1,
        explanation: 'Step 1: A catalyst must bind reactants and offer an easier route. Step 2: Vacant d orbitals accept lone pairs, adsorbing molecules on the metal surface. Step 3: Variable oxidation states shuttle electrons without net consumption (Fe in Haber, $\\text{V}_2\\text{O}_5$ in contact process, Ni in hydrogenation). Step 4: Filled d subshells (Zn, Cd, Hg) make poor catalysts — and low melting points have nothing to do with catalysis.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.1
  {
    sectionId: 'chem-ch12-s5',
    readingTime: 10,
    prerequisites: [
      'Oxidation-number bookkeeping (Unit 7)',
      'Lewis acids and bases, lone pairs (Unit 3)',
    ],
    intro: 'By 1890 chemists could write formulas like CoCl$_3$\u00b76NH$_3$ but not explain them — why did only some of the chloride precipitate with silver nitrate? **Alfred Werner** answered with two kinds of valence, one ionisable and one directional, and single-handedly founded coordination chemistry (the first Nobel Prize in inorganic chemistry, 1913). His vocabulary — ligand, coordination number, denticity, chelation — is the working language of this unit and of the bioinorganic chemistry engineering assessment adores. Across the paper\u2019s 25 chemistry questions (100 marks, +4/\u22121), a definitional or counting question from this vocabulary appears nearly every year as a direct NCERT-line read — cheap marks that keep chemistry the fastest-scoring subject.',
    objectives: [
      'State Werner\u2019s postulates of primary (ionisable, oxidation-state) and secondary (non-ionisable, directional) valence',
      'Dissect any complex into central metal ion, ligands, coordination sphere, counter ions and coordination number',
      'Compute the metal\u2019s oxidation number from charge bookkeeping of the coordination sphere',
      'Classify ligands by denticity, recognise ambidentate cases and explain why chelation stabilises complexes',
    ],
    concepts: [
      {
        term: 'Werner\u2019s postulates',
        kind: 'law',
        statement: 'Metals show **two kinds of valence**: the **primary valence** equals the oxidation state, is ionisable and is satisfied by negative ions; the **secondary valence** equals the coordination number (CN), is non-ionisable, is satisfied by ligands and is **directional** — it fixes the geometry (CN 6 \u2192 octahedral, CN 4 \u2192 tetrahedral or square planar).',
        detail: 'The silver-nitrate evidence: CoCl$_3$\u00b76NH$_3$ releases 3 mol AgCl per mol (so [Co(NH$_3$)$_6$]Cl$_3$), CoCl$_3$\u00b75NH$_3$ releases 2 ([Co(NH$_3$)$_5$Cl]Cl$_2$) and CoCl$_3$\u00b74NH$_3$ only 1 ([Co(NH$_3$)$_4$Cl$_2$]Cl). Only ions outside the coordination sphere precipitate — the counting experiment that made the theory unanswerable.',
      },
      {
        term: 'Anatomy of a complex',
        kind: 'notation',
        statement: 'In $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$: square brackets mark the **coordination sphere** (non-ionisable); Co is the **central metal ion**; NH$_3$ and the inner Cl$\u2013$ are **ligands**; the two outer Cl$\u2013$ are **counter ions**; the CN is 6 and the complex ion carries +1.',
        detail: 'The number of ions a formula releases in solution equals counter ions plus one (the complex ion itself) — three for this salt, measurable by conductivity or colligative methods. Everything inside the brackets survives in water as a unit; everything outside dissociates like any ordinary salt.',
      },
      {
        term: 'Ligands and denticity',
        kind: 'definition',
        statement: 'A **ligand** is a Lewis base donating a lone pair to the metal (a Lewis acid); **denticity** counts the donor atoms it uses: monodentate (H$_2$O, NH$_3$, Cl$\u2013$, CO), bidentate (ethylenediamine `en`, oxalate ox$^{2\u2013}$), polydentate (EDTA$^{4\u2013}$ is hexadentate: 2 N + 4 O).',
        detail: 'Denticity counts donor atoms, not the total atoms of the ligand — that is why $[\\text{Fe}(\\text{C}_2\\text{O}_4)_3]^{3\u2013}$ has CN 6, not 3. Chosen ligands must carry the lone pair at the right spacing: `en` (ethane-1,2-diamine) donates through both nitrogen atoms, wrapping five-membered rings around the metal.',
      },
      {
        term: 'Ambidentate ligands',
        kind: 'insight',
        statement: 'An **ambidentate** ligand owns two different donor atoms but binds through only one at a time: CN$\u2013$ through C (cyano) or N (isocyano), NO$_2^-$ through N (nitro \u2013NO$_2$) or O (nitrito \u2013ONO).',
        detail: 'Binding through the alternative atom generates linkage isomerism — pairs like $[\\text{Co}(\\text{NH}_3)_5\\text{NO}_2]^{2+}$ (yellow, nitro) and $[\\text{Co}(\\text{NH}_3)_5\\text{ONO}]^{2+}$ (red, nitrito). The isomerism itself is treated in section 12.2; here the assessment only wants the donor-atom discrimination.',
      },
      {
        term: 'Chelation and the chelate effect',
        kind: 'insight',
        statement: 'When a polydentate ligand grips the **same metal through two or more donor atoms**, it forms rings called a **chelate** — and chelates are markedly more stable than the equivalent collection of monodentate ligands.',
        detail: 'Thermodynamics favours ring closure largely through entropy: one EDTA molecule replacing six water molecules raises the particle count. $[\\text{Fe}(\\text{C}_2\\text{O}_4)_3]^{3\u2013}$ locks three five-membered rings around iron; EDTA therapy exploits the same claw (Greek ch\u0113l\u0113) to pull toxic lead out of blood. This is why titrations and biological metal sites overwhelmingly use chelating ligands.',
      },
      {
        term: 'Double salts versus complexes',
        kind: 'definition',
        statement: 'A **double salt** (Mohr\u2019s salt $\\text{FeSO}_4\u00b7(\\text{NH}_4)_2\\text{SO}_4\u00b76\\text{H}_2\\text{O}$, potash alum) dissociates completely in water and shows all tests of its constituent ions; a **complex** ($\\text{K}_4[\\text{Fe(CN)}_6]$) retains the complex ion intact — no free Fe$^{2+}$ or CN$\u2013$ tests.',
        detail: 'The distinction is behavioural, not structural: both crystallise as single phases. Add Fe$^{3+}$ to each solution — Mohr\u2019s salt answers with the deep thiocyanate red of free Fe$^{3+}$; ferrocyanide gives Prussian blue only through the intact $[\\text{Fe(CN)}_6]^{4\u2013}$ unit. "Does the identity survive in water?" is the assessment\u2019s one-line discriminator.',
      },
    ],
    examples: [
      {
        title: 'Dissecting [Co(NH$_3$)$_5$Cl]Cl$_2$',
        problem: 'For $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$, identify the coordination sphere, ligands, counter ions, coordination number, the oxidation state of cobalt, and the number of ions furnished in solution.',
        steps: [
          { label: 'Step 1', text: '```text\n[ Co (NH3)5 Cl ] Cl2\n  |    |     |    \\__ 2 counter Cl- (ionisable)\n  |    |     \\__ 1 coordinated Cl- (non-ionisable)\n  |    \\__ 5 ammine ligands (denticity 1 each)\n  \\__ central ion, coordination number 6\n```' },
          { label: 'Step 2', text: 'Ligands: five neutral NH$_3$ plus one coordinated Cl$\u2013$; CN = 5 + 1 = 6 (an octahedral complex).' },
          { label: 'Step 3', text: 'Oxidation state: $x + 5(0) + (-1) = +2$ for the complex ion, so $x = +3$ — Co(III).' },
          { label: 'Step 4', text: 'In water: 1 complex ion + 2 chloride ions = 3 ions per formula unit — matching Werner\u2019s 2 mol AgCl per mol of this, his CoCl$_3$\u00b75NH$_3$.' }
        ],
        result: 'Co(III), CN 6, [Co(NH$_3$)$_5$Cl]$^{2+}$ + 2 Cl$\u2013$: three ions in solution, two of them ionisable chlorides.'
      },
      {
        title: 'Counting the ionisable chlorides',
        problem: '0.1 mol each of CoCl$_3$\u00b76NH$_3$, CoCl$_3$\u00b75NH$_3$ and CoCl$_3$\u00b74NH$_3$ is separately treated with excess AgNO$_3$. Predict the AgCl formed and write the modern formulas.',
        steps: [
          { label: 'Step 1', text: 'Only chlorides outside the coordination sphere precipitate — count the ions Werner could not.' },
          { label: 'Step 2', text: 'CoCl$_3$\u00b76NH$_3$ = $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$: 3 free Cl$\u2013$ \u2192 0.3 mol AgCl.' },
          { label: 'Step 3', text: 'CoCl$_3$\u00b75NH$_3$ = $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$: 2 free Cl$\u2013$ \u2192 0.2 mol AgCl; CoCl$_3$\u00b74NH$_3$ = $[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]\\text{Cl}$: 1 \u2192 0.1 mol AgCl.' },
          { label: 'Step 4', text: 'The one chloride "missing" at each step simply moved inside the sphere — every NH$_3$ that drops out is replaced by an inner chloride, keeping Co(III) and CN 6 constant.' }
        ],
        result: '0.3, 0.2 and 0.1 mol AgCl respectively — the precipitation series that proved the coordination sphere.'
      },
    ],
    keyTakeaways: [
      'Primary valence = oxidation state (ionisable); secondary valence = coordination number (directional, non-ionisable).',
      'Only ions outside the brackets precipitate with AgNO$_3$ — Werner\u2019s counting argument.',
      'Denticity counts donor atoms: en and ox$^{2\u2013}$ are bidentate, EDTA$^{4\u2013}$ hexadentate; CN = ligands \u00d7 denticity.',
      'Oxidation state from charge bookkeeping: $x + \\sum(\\text{ligand charges}) = \\text{sphere charge}$.',
      'Double salts lose their identity in water; complex ions survive it; chelate rings buy entropy-driven stability.',
    ],
    quiz: [
      {
        q: 'In Werner\u2019s theory, the secondary valence of a metal ion corresponds to its',
        options: ['oxidation state', 'coordination number', 'number of counter ions', 'number of unpaired electrons'],
        answer: 1,
        explanation: 'Step 1: Werner split valence into two kinds. Step 2: Primary valence = oxidation state, satisfied by ionisable anions. Step 3: Secondary valence = coordination number, satisfied by ligands and directional (fixes geometry). Step 4: Counter ions and unpaired electrons play no part in his classification.'
      },
      {
        q: '0.1 mol of CoCl$_3$\u00b75NH$_3$, i.e. $[\\text{Co}(\\text{NH}_3)_5\\text{Cl}]\\text{Cl}_2$, is treated with excess AgNO$_3$. The amount of AgCl formed is',
        options: ['0.1 mol', '0.2 mol', '0.3 mol', '0.05 mol'],
        answer: 1,
        explanation: 'Step 1: AgCl precipitates only from ionisable chlorides. Step 2: The two Cl$\u2013$ outside the brackets are ionisable; the one inside is coordinated. Step 3: 0.1 mol of salt gives 2 \u00d7 0.1 = 0.2 mol AgCl. Step 4: 0.3 mol belongs to $[\\text{Co}(\\text{NH}_3)_6]\\text{Cl}_3$, one chloride further out.'
      },
      {
        q: 'The coordination number of Fe in $[\\text{Fe}(\\text{C}_2\\text{O}_4)_3]^{3\u2013}$ is',
        options: ['3', '4', '6', '2'],
        answer: 2,
        explanation: 'Step 1: Identify the ligand: oxalate, C$_2$O$_4^{2\u2013}$. Step 2: Each oxalate binds through two oxygen donor atoms — bidentate. Step 3: CN = 3 ligands \u00d7 2 donor atoms = 6 (octahedral, three chelate rings). Step 4: Answering 3 counts ligands, not donor atoms — the classic denticity trap.'
      },
      {
        q: 'Which of the following is an ambidentate ligand?',
        options: ['ethylenediamine (en)', 'H$_2$O', 'NO$_2^-$', 'EDTA$^{4\u2013}$'],
        answer: 2,
        explanation: 'Step 1: Ambidentate means two different possible donor atoms, one used at a time. Step 2: NO$_2^-$ can bind through N (nitro, \u2013NO$_2$) or O (nitrito, \u2013ONO). Step 3: `en` and EDTA$^{4\u2013}$ are chelating polydentate ligands that always use all their donor atoms; H$_2$O is monodentate. Step 4: NO$_2^-$ binding either way generates linkage isomers.'
      }
    ]
  },
  // ---------------------------------------------------------------- 13.1
  {
    sectionId: 'chem-ch39-s5',
    readingTime: 9,
    prerequisites: [
      'Boiling point, vapour pressure and states of matter (school physics/chemistry)',
      'Intermolecular forces and solubility basics (Unit 5 helps)',
    ],
    intro: 'Organic reactions are messy by nature — they stop short, run sideways and leave by-products, so the product must be **purified** before it can be melted, weighed or characterised. Every technique in this section is one physical property exploited: solubility, volatility, sublimability or adsorption. engineering assessment\u2019s practical-leaning questions — within the paper\u2019s 25 chemistry questions worth 100 marks at +4/\u22121 — usually ask which technique suits which mixture, a direct NCERT-line read that makes this some of the cheapest marks on the paper. Chemistry stays the fastest-scoring subject when you can name the right apparatus in ten seconds.',
    objectives: [
      'Select a purification technique by matching the exploitable physical-property difference of a mixture',
      'Describe crystallization, sublimation and simple, fractional, steam and reduced-pressure distillation with one application each',
      'Explain differential extraction and why several small extractions beat a single large one',
      'State the principle of chromatography and contrast adsorption with partition chromatography',
    ],
    concepts: [
      {
        term: 'Purification is a decision, not a recipe',
        kind: 'insight',
        statement: 'Choose the technique from the **property gap**: solubility difference \u2192 crystallization; boiling-point difference \u2192 distillation; sublimability \u2192 sublimation; distribution between immiscible solvents \u2192 differential extraction; differential adsorption/partition \u2192 chromatography — thermal sensitivity then modifies the choice.',
        detail: 'The assessment almost never says "crystallize this"; it describes a mixture and expects the property gap to trigger the method. Boiling points within a few kelvin demand a fractionating column; a compound that decomposes before boiling forces reduced pressure; a compound immiscible with but volatile in steam invites steam distillation.',
      },
      {
        term: 'Crystallization',
        kind: 'method',
        statement: '**Crystallization** exploits a solubility gap: dissolve the impure solid hot to saturation, cool slowly, and pure crystals grow while the (minor) impurity stays dissolved in the mother liquor.',
        detail: 'A good solvent dissolves the compound well when hot and poorly when cold, does not react with it, and keeps the impurity soluble even cold. The trick is that the impurity is present in small quantity, so it never reaches saturation — the whole method rests on concentration, not just solubility. Decolourising with animal charcoal before filtration handles coloured impurities.',
      },
      {
        term: 'Sublimation',
        kind: 'method',
        statement: '**Sublimation** passes a solid straight to vapour on heating and redeposits it as crystals on a cold surface; it separates sublimable camphor, naphthalene, benzoic acid, anthracene or iodine from non-sublimable residue.',
        detail: 'These solids have appreciable vapour pressure below their melting points, so heating drives the solid \u21cc vapour equilibrium fully to vapour; the cold finger (inverted funnel with wet filter paper) recrystallises it. A camphor\u2013common salt mixture is the standard lab demo — salt stays behind in the dish.',
      },
      {
        term: 'The distillation family',
        kind: 'method',
        statement: '**Simple distillation** for a large boiling-point gap (chloroform 334 K vs aniline 457 K); **fractional distillation** for close-boiling liquids via the repeated condensation cycles of a fractionating column (acetone 329 K vs methanol 338 K); **distillation under reduced pressure** for liquids that decompose below their b.p. (glycerol); **steam distillation** for steam-volatile compounds immiscible with water (aniline\u2013water, o-nitrophenol).',
        detail: 'Steam distillation works because an immiscible mixture boils when the **sum** of the vapour pressures hits 1 atm — so the organic distils well below its normal boiling point, protected from decomposition. Fractionating columns multiply the simple-distillation cycle; each theoretical plate is one vaporisation\u2013condensation round that enriches the vapour in the more volatile component.',
      },
      {
        term: 'Differential extraction',
        kind: 'method',
        statement: '**Differential extraction** moves a solute between immiscible solvents in a separating funnel: the distribution coefficient $K = \\frac{C_{\\text{organic}}}{C_{\\text{water}}}$ decides how much transfers per shake, and the organic layer is dried over anhydrous $\\text{CaCl}_2$ or $\\text{Na}_2\\text{SO}_4$ after separation.',
        detail: 'The counter-intuitive arithmetic: extracting with two half-portions of ether leaves less solute behind than one full portion of the same total volume, because each extraction multiplies the remaining fraction by $\\frac{V_{\\text{water}}}{V_{\\text{water}} + K V_{\\text{org}}}$. "Many small shakes beat one big soak" is the lab and assessment rule.',
      },
      {
        term: 'Chromatography',
        kind: 'method',
        statement: '**Chromatography** separates by differential migration over a stationary phase under a mobile phase: **adsorption chromatography** (column and TLC on silica gel or alumina) and **partition chromatography** (paper, where water held on the paper is the stationary phase); on a plate, $R_f = \\frac{\\text{distance moved by substance}}{\\text{distance moved by solvent front}}$.',
        detail: 'TLC reads a reaction at a glance — spots located under UV or in an iodine chamber; a strongly adsorbed compound crawls (low $R_f$), a weakly adsorbed one runs with the front (high $R_f$). Column chromatography scales the same principle to grams, as in separating plant pigments. Adsorption is a surface competition; partition is a solubility equilibrium between two liquids — know which mechanism your question assumes.',
      },
    ],
    examples: [
      {
        title: 'Choosing the technique',
        problem: 'Suggest the purification method for: (a) camphor contaminated with common salt, (b) chloroform mixed with aniline, (c) acetone mixed with methanol, (d) aniline from an aniline\u2013water mixture.',
        steps: [
          { label: 'Step 1', text: '```text\n(a) camphor + NaCl   -> sublimability gap  -> sublimation\n(b) CHCl3 + aniline   -> b.p. gap 334/457 K -> simple distillation\n(c) acetone/methanol  -> b.p. gap 329/338 K -> fractional distillation\n(d) aniline + water   -> immiscible + steam-volatile -> steam distillation\n```' },
          { label: 'Step 2', text: '(a) Camphor sublimes on gentle heating and re-forms on the cold funnel; non-volatile NaCl stays in the dish.' },
          { label: 'Step 3', text: '(b) The 123 K boiling-point gap lets chloroform distil off cleanly, leaving aniline behind; (c) the 9 K gap is too small for one plate, so the fractionating column supplies many.' },
          { label: 'Step 4', text: '(d) Aniline boils at 457 K but co-distils with steam below 373 K because the vapour pressures add — no decomposition, no high heat.' }
        ],
        result: '(a) sublimation, (b) simple distillation, (c) fractional distillation, (d) steam distillation.'
      },
      {
        title: 'Reading a TLC plate',
        problem: 'On a silica TLC run, the solvent front travelled 7.2 cm; spot A moved 2.9 cm and spot B moved 5.0 cm. Find both $R_f$ values and say which compound is adsorbed more strongly.',
        steps: [
          { label: 'Step 1', text: '$R_f = \\frac{\\text{spot distance}}{\\text{front distance}}$ — always a number between 0 and 1.' },
          { label: 'Step 2', text: 'Spot A: $\\frac{2.9}{7.2} = 0.40$; spot B: $\\frac{5.0}{7.2} = 0.69$.' },
          { label: 'Step 3', text: 'A spends more time stuck on the polar silica, so it travels less — A is the more strongly adsorbed compound.' },
          { label: 'Step 4', text: 'Under identical conditions $R_f$ is a reproducible identity tag for the compound — the basis of purity checks on reaction mixtures.' }
        ],
        result: '$R_f(A) = 0.40$, $R_f(B) = 0.69$; A is adsorbed more strongly on silica.'
      },
      {
        title: 'Extraction arithmetic: two small beats one big',
        problem: '2.0 g of a solute is dissolved in 100 mL water. Its distribution coefficient between ether and water is $K = 4$. Compare one extraction with 100 mL ether against two extractions with 50 mL each.',
        steps: [
          { label: 'Step 1', text: 'Fraction left in water per extraction $= \\frac{V_w}{V_w + K V_{\\text{ether}}}$.' },
          { label: 'Step 2', text: 'One 100 mL extraction: $\\frac{100}{100 + 4 \\times 100} = \\frac{1}{5}$, so $2.0 \\times \\frac{1}{5} = 0.40$ g stays behind — 1.60 g recovered.' },
          { label: 'Step 3', text: 'Each 50 mL extraction: $\\frac{100}{100 + 4 \\times 50} = \\frac{1}{3}$, so after two, $2.0 \\times (\\frac{1}{3})^2 = 0.22$ g stays behind — 1.78 g recovered.' },
          { label: 'Step 4', text: 'Same 100 mL of ether, 0.18 g more solute recovered — the multiplicative logic that makes "many small extractions" the standing lab instruction.' }
        ],
        result: 'One 100 mL extraction leaves 0.40 g; two 50 mL extractions leave 0.22 g — two small extractions win.'
      }
    ],
    keyTakeaways: [
      'Match the property gap to the method: solubility \u2192 crystallization, b.p. \u2192 distillation, sublimability \u2192 sublimation, distribution \u2192 extraction, adsorption \u2192 chromatography.',
      'Close boiling points need a fractionating column; thermal fragility needs reduced pressure; steam volatility + immiscibility need steam.',
      'Steam distillation boils when $p_{\\text{organic}} + p_{\\text{water}} = 1$ atm — always below 373 K.',
      '$R_f = \\frac{\\text{distance by spot}}{\\text{distance by front}}$; strong adsorption \u21d2 low $R_f$.',
      'Extraction: several small portions beat one large portion at equal total solvent.',
    ],
    quiz: [
      {
        q: 'Aniline is separated from an aniline\u2013water mixture by',
        options: ['simple distillation', 'steam distillation', 'fractional distillation', 'sublimation'],
        answer: 1,
        explanation: 'Step 1: Aniline and water are immiscible. Step 2: Aniline is steam-volatile, and the pair boils when the vapour pressures add to 1 atm. Step 3: The mixture distils below 373 K, far under aniline\u2019s 457 K boiling point. Step 4: Simple/fractional distillation would heat aniline to 457 K — unnecessary and risky.'
      },
      {
        q: 'Acetone (b.p. 329 K) and methanol (b.p. 338 K) are best separated by',
        options: ['simple distillation', 'fractional distillation', 'steam distillation', 'crystallization'],
        answer: 1,
        explanation: 'Step 1: The boiling points differ by only 9 K. Step 2: One vaporisation\u2013condensation cycle cannot enrich the vapour enough. Step 3: A fractionating column provides many cycles (theoretical plates), stepwise enriching the more volatile acetone. Step 4: Steam distillation needs immiscibility with water; crystallization applies to solids.'
      },
      {
        q: 'A liquid that decomposes below its normal boiling point is best purified by',
        options: ['distillation under reduced pressure', 'steam distillation', 'sublimation', 'simple distillation'],
        answer: 0,
        explanation: 'Step 1: Lowering the external pressure lowers the boiling point. Step 2: The liquid then boils at a temperature below its decomposition point. Step 3: Glycerol, which decomposes on strong heating, is the textbook case. Step 4: Steam distillation needs steam volatility plus immiscibility; sublimation applies to solids.'
      },
      {
        q: 'In a TLC run the solvent front travels 6.0 cm and a spot travels 3.6 cm. The $R_f$ value is',
        options: ['0.5', '0.6', '1.67', '0.36'],
        answer: 1,
        explanation: 'Step 1: $R_f = \\frac{\\text{distance by spot}}{\\text{distance by front}}$. Step 2: $\\frac{3.6}{6.0} = 0.6$. Step 3: 1.67 inverts the ratio — $R_f$ can never exceed 1. Step 4: 0.36 would use the front distance as numerator.'
      }
    ]
  },
  // ---------------------------------------------------------------- 16.1
  {
    sectionId: 'chem-ch9-s27',
    readingTime: 11,
    prerequisites: [
      'Functional groups and IUPAC nomenclature (Unit 14)',
      'Markovnikov addition to alkenes (Unit 15)',
    ],
    intro: 'Swap an \u2013OH for a halogen and carbon becomes a leaving-group artist: **haloalkanes and haloarenes** are the pivot of synthetic organic chemistry. The C\u2013X bond\u2019s measurable personality — length, enthalpy, dipole moment — predicts everything downstream, and engineering assessment interrogates exactly those orders. Among the paper\u2019s 25 chemistry questions (100 marks, +4/\u22121), halogen-compound items are usually NCERT-line fact checks — reagent choice, bond orders, preparation routes — which is why this unit rewards revision more than genius and keeps chemistry the fastest-scoring subject of the three.',
    objectives: [
      'Classify halogen compounds as haloalkanes or haloarenes, and by carbon class (1\u00b0, 2\u00b0, 3\u00b0) and position (vinylic, allylic, benzylic)',
      'Write the general preparation routes: from alcohols (HX, PX$_3$/PX$_5$, SOCl$_2$), from hydrocarbons (halogenation, HX addition) and by halogen exchange (Finkelstein, Swarts)',
      'Explain the bond-length, bond-enthalpy and dipole-moment trends of the C\u2013X bond and the reactivity order R\u2013I > R\u2013Br > R\u2013Cl > R\u2013F',
      'Contrast the C\u2013X bond of haloarenes with that of haloalkanes using resonance and hybridisation',
    ],
    concepts: [
      {
        term: 'The haloalkane/haloarene family',
        kind: 'definition',
        statement: '**Haloalkanes** carry X on an $sp^3$ carbon (alkyl, allylic, benzylic); **haloarenes** carry X directly on an aromatic $sp^2$ carbon; both classify further by halogen count and by the substitution class (1\u00b0, 2\u00b0, 3\u00b0) of the carbon bearing X.',
        detail: 'Position matters as much as family: CH$_2$=CH\u2013Cl (vinylic) and C$_6$H$_5$\u2013Cl (aryl) resist substitution, while allylic (CH$_2$=CH\u2013CH$_2$Cl) and benzylic (C$_6$H$_5$CH$_2$Cl) halides react briskly — resonance-stabilised intermediates. Physical sheet: boiling points climb R\u2013F < R\u2013Cl < R\u2013Br < R\u2013I with van der Waals bulk, branching lowers them, haloalkanes shun water (no H-bonding) but love organic solvents; CH$_2$Cl$_2$, CHCl$_3$ and CCl$_4$ are all denser than water.',
      },
      {
        term: 'Preparation from alcohols',
        kind: 'method',
        statement: 'Alcohol \u2192 halide via $\\text{R\u2013OH} + \\text{HX} \\to \\text{R\u2013X} + \\text{H}_2\\text{O}$ (reactivity HI > HBr > HCl; HCl needs anhydrous ZnCl$_2$), or via phosphorus halides $3\\text{R\u2013OH} + \\text{PX}_3 \\to 3\\text{R\u2013X} + \\text{H}_3\\text{PO}_3$, or via $\\text{R\u2013OH} + \\text{SOCl}_2 \\to \\text{R\u2013Cl} + \\text{SO}_2 + \\text{HCl}$.',
        detail: 'SOCl$_2$ (thionyl chloride) is the connoisseur\u2019s choice: both by-products are **gases** that bubble out, leaving the alkyl chloride pure — no aqueous workup, no side products. For iodides, red phosphorus with I$_2$ generates PI$_3$ in situ. The Lucas reagent (conc. HCl + anhydrous ZnCl$_2$) doubles as the 1\u00b0/2\u00b0/3\u00b0 diagnostic from Unit 17.',
      },
      {
        term: 'Preparation from hydrocarbons',
        kind: 'method',
        statement: 'Alkanes + X$_2$ under $h\\nu$ give **free-radical substitution** (industrial but unselective); alkenes + HX give Markovnikov **addition** (propene \u2192 2-bromopropane; peroxides flip HBr to anti-Markovnikov); X$_2$ addition gives vicinal dihalides; haloarenes come from benzene + X$_2$/FeX$_3$ or from diazonium salts via Sandmeyer (Cu$_2$X$_2$/HX) or KI.',
        detail: 'Radical halogenation of alkanes is a synthetic mess — every H is a target, so mixtures dominate unless the molecule has one kind of hydrogen (methane \u2192 chloromethane for the chemical industry). The diazonium route is the clean laboratory path to haloarenes, and it is the only easy way to fluoroarenes (Balz\u2013Schiemann-style replacements) — detail reserved for Unit 18\u2019s diazonium section.',
      },
      {
        term: 'Halogen exchange',
        kind: 'method',
        statement: '**Finkelstein**: R\u2013Cl/R\u2013Br + NaI in dry acetone \u2192 R\u2013I (NaCl/NaBr precipitate drives it, Le Chatelier); **Swarts**: R\u2013X + AgF (or Hg$_2$F$_2$, CoF$_2$) heated \u2192 R\u2013F.',
        detail: 'Direct fluorination of hydrocarbons is violent and unselective, so fluoroalkanes are made by swapping the halogen instead — the Swarts route to the freon family. Finkelstein\u2019s precipitation trick only works in dry acetone, where NaI dissolves but NaCl/NaBr do not — a solvent-detail the assessment checks.',
      },
      {
        term: 'Nature of the C\u2013X bond',
        kind: 'law',
        statement: 'Bond enthalpy falls C\u2013F > C\u2013Cl > C\u2013Br > C\u2013I (452 > 351 > 293 > 215 kJ/mol) while length grows (139 < 177 < 193 < 214 pm), so **reactivity rises** R\u2013I > R\u2013Br > R\u2013Cl > R\u2013F; yet dipole moments of the methyl halides order $\\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{F} > \\text{CH}_3\\text{Br} > \\text{CH}_3\\text{I}$.',
        detail: 'The dipole paradox: C\u2013F is the most polar bond, but its short bond length shrinks the charge separation — dipole moment is charge \u00d7 distance, so the longer C\u2013Cl wins. Learn both orders separately: bond enthalpy governs substitution reactivity, dipole moment governs polarity questions. Both are favourite engineering assessment ordering questions.',
      },
      {
        term: 'The haloarene C\u2013X puzzle',
        kind: 'insight',
        statement: 'In haloarenes, the halogen lone pair delocalises into the ring: the C\u2013X bond gains **partial double-bond character** — shorter (169 pm vs 177 pm in chloroethane), stronger, less polar — so haloarenes resist nucleophilic substitution spectacularly.',
        detail: 'Two reinforcing reasons: resonance ties the carbon to the halogen, and the $sp^2$ carbon is more electronegative than $sp^3$, pulling bond electrons toward itself and dulling the carbon\u2019s positive charge. Chlorobenzene laughs at NaOH at room temperature and only reacts under brutal conditions (623 K, ~300 atm) — the punchline of many engineering assessment assertion\u2013reason items.',
      },
    ],
    examples: [
      {
        title: 'Reagent selection for clean conversions',
        problem: 'Choose reagents for the cleanest conversion of: (a) propan-1-ol \u2192 1-chloropropane, (b) 2-methylpropan-2-ol \u2192 2-chloro-2-methylpropane, (c) ethanol \u2192 iodoethane.',
        steps: [
          { label: 'Step 1', text: '```text\n(a) CH3CH2CH2OH + SOCl2  -> CH3CH2CH2Cl + SO2 + HCl (both gases!)\n(b) (CH3)3COH + conc. HCl / anhyd. ZnCl2  -> (CH3)3CCl  (instant, 3\u00b0)\n(c) C2H5OH + red P + I2  -> C2H5I (PI3 generated in situ)\n```' },
          { label: 'Step 2', text: '(a) SOCl$_2$ wins because SO$_2$ and HCl escape as gases, handing over the pure chloride; PCl$_5$ also works but leaves POCl$_3$ to wash out.' },
          { label: 'Step 3', text: '(b) The 3\u00b0 carbocation forms instantly, so plain conc. HCl with ZnCl$_2$ (Lucas conditions) converts it at once — no stronger reagent needed.' },
          { label: 'Step 4', text: '(c) HI alone overalkylates; red P + I$_2$ meter the iodide delivery as PI$_3$, the standard clean route to iodoalkanes.' }
        ],
        result: '(a) SOCl$_2$, (b) conc. HCl + anhydrous ZnCl$_2$, (c) red phosphorus + I$_2$.'
      },
      {
        title: 'The dipole-moment paradox',
        problem: 'The C\u2013F bond is more polar than C\u2013Cl, yet CH$_3$Cl (1.86 D) has a slightly larger dipole moment than CH$_3$F (1.85 D). Explain, and give the full order for methyl halides.',
        steps: [
          { label: 'Step 1', text: 'Dipole moment is a product: $\\mu = q \\times d$ — charge separation times bond length.' },
          { label: 'Step 2', text: 'C\u2013F is short (139 pm): high polarity multiplied by a tiny distance gives a slightly smaller $\\mu$ than C\u2013Cl\u2019s 177 pm distance.' },
          { label: 'Step 3', text: 'Down the group the charge keeps falling while length grows; the length effect caps out, so the net order is $\\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{F} > \\text{CH}_3\\text{Br} > \\text{CH}_3\\text{I}$.' },
          { label: 'Step 4', text: 'Moral: bond polarity and molecular dipole moment are different quantities — the assessment\u2019s favourite bait conflates them.' }
        ],
        result: 'Order: CH$_3$Cl (1.86) > CH$_3$F (1.85) > CH$_3$Br (1.83) > CH$_3$I (1.64 D) — charge \u00d7 distance wins.'
      },
      {
        title: 'Why chlorobenzene resists substitution',
        problem: 'Chloroethane reacts with aqueous NaOH readily at reflux, but chlorobenzene does not react even on prolonged boiling. Explain using resonance and hybridisation.',
        steps: [
          { label: 'Step 1', text: 'In chlorobenzene the chlorine lone pair delocalises into the ring: contributing structures put a C=Cl double bond on the C\u2013Cl linkage.' },
          { label: 'Step 2', text: 'The bond shortens (169 pm vs 177 pm in chloroethane) and strengthens — cleaving it costs much more energy.' },
          { label: 'Step 3', text: 'The $sp^2$ carbon is also more electronegative, so the carbon\u2019s positive charge (the nucleophile\u2019s target) is muted.' },
          { label: 'Step 4', text: 'Net: chlorobenzene needs 623 K and ~300 atm of NaOH to react at all, while chloroethane — a long, weak, polar $sp^3$ C\u2013Cl bond — substitutes easily.' }
        ],
        result: 'Resonance-driven partial double-bond character plus $sp^2$ carbon make aryl C\u2013Cl short, strong and nearly apolar — substitution stalls.'
      }
    ],
    keyTakeaways: [
      'Haloalkanes = X on $sp^3$ carbon; haloarenes = X on aryl $sp^2$ carbon — the hybridisation decides reactivity.',
      'Best lab routes: SOCl$_2$ for R\u2013Cl (gaseous by-products), red P + X$_2$ for R\u2013I, Finkelstein (NaI/acetone) and Swarts (AgF) for exchange.',
      'Reactivity order R\u2013I > R\u2013Br > R\u2013Cl > R\u2013F follows falling bond enthalpy, not dipole moment.',
      'Dipole moments: $\\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{F} > \\text{CH}_3\\text{Br} > \\text{CH}_3\\text{I}$ — charge \u00d7 distance.',
      'Aryl C\u2013X: resonance gives partial double-bond character (169 pm) — chlorobenzene needs 623 K/300 atm to substitute.',
    ],
    quiz: [
      {
        q: 'The order of reactivity of haloalkanes toward nucleophilic substitution is',
        options: ['R\u2013F > R\u2013Cl > R\u2013Br > R\u2013I', 'R\u2013I > R\u2013Br > R\u2013Cl > R\u2013F', 'R\u2013Cl > R\u2013Br > R\u2013I > R\u2013F', 'identical for all four'],
        answer: 1,
        explanation: 'Step 1: In SN reactions the C\u2013X bond must break. Step 2: Bond enthalpy falls C\u2013F (452) > C\u2013Cl (351) > C\u2013Br (293) > C\u2013I (215 kJ/mol). Step 3: The weakest bond, C\u2013I, breaks fastest — R\u2013I is the most reactive. Step 4: Ordering by dipole moment or polarity (option one) is the classic wrong instinct.'
      },
      {
        q: 'The correct order of dipole moments of the methyl halides is',
        options: ['$\\text{CH}_3\\text{F} > \\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{Br} > \\text{CH}_3\\text{I}$', '$\\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{F} > \\text{CH}_3\\text{Br} > \\text{CH}_3\\text{I}$', '$\\text{CH}_3\\text{I} > \\text{CH}_3\\text{Br} > \\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{F}$', '$\\text{CH}_3\\text{Br} > \\text{CH}_3\\text{I} > \\text{CH}_3\\text{Cl} > \\text{CH}_3\\text{F}$'],
        answer: 1,
        explanation: 'Step 1: $\\mu = q \\times d$: charge times bond length. Step 2: C\u2013F is most polar but shortest, so its product is edged out by the longer C\u2013Cl. Step 3: Measured values 1.86, 1.85, 1.83, 1.64 D give CH$_3$Cl > CH$_3$F > CH$_3$Br > CH$_3$I. Step 4: Option one orders by bond polarity alone — the bait.'
      },
      {
        q: 'Thionyl chloride is the preferred reagent for converting propan-1-ol to 1-chloropropane because',
        options: ['the by-products SO$_2$ and HCl are gases that escape, leaving a pure product', 'it simultaneously forms a Grignard reagent', 'it avoids Markovnikov rearrangement', 'it is the cheapest available chlorinating agent'],
        answer: 0,
        explanation: 'Step 1: $\\text{R\u2013OH} + \\text{SOCl}_2 \\to \\text{R\u2013Cl} + \\text{SO}_2\\uparrow + \\text{HCl}\\uparrow$. Step 2: Both by-products leave as gases. Step 3: No liquid or solid impurity remains — the chloride comes out analytically clean. Step 4: Grignard formation needs Mg in ether, Markovnikov concerns alkene addition, and cost is not the NCERT reasoning.'
      },
      {
        q: 'The C\u2013Cl bond in chlorobenzene is shorter and stronger than the C\u2013Cl bond in chloroethane because',
        options: ['chlorine is less electronegative when bonded to an aromatic ring', 'resonance delocalisation gives the C\u2013Cl bond partial double-bond character', 'the benzene ring is planar', 'chlorobenzene has a larger dipole moment'],
        answer: 1,
        explanation: 'Step 1: Chlorine\u2019s lone pair overlaps the ring \u03c0 system. Step 2: Contributing resonance structures carry a C=Cl double bond. Step 3: Bond order rises above one, so the bond contracts (169 pm vs 177 pm) and strengthens. Step 4: Electronegativity, planarity and dipole moment are consequences, not causes.'
      }
    ]
  },
  // ---------------------------------------------------------------- 17.1
  {
    sectionId: 'chem-ch9-s30',
    readingTime: 11,
    prerequisites: [
      'Functional groups and nomenclature (Unit 14)',
      'Markovnikov hydration of alkenes (Unit 15)',
    ],
    intro: 'Ethanol powers the fermentation industry, methanol poisons badly distilled liquor, and both open this unit: **alcohols**, the first oxygen-containing family. One oxygen with two lone pairs hydrogen-bonds everything — boiling points, water solubility, viscosity — and its active hydrogen reacts with sodium, acids and acid chlorides. engineering assessment\u2019s 25-question chemistry paper (100 marks, +4/\u22121) leans on this unit for Lucas-test identification, oxidation products and dehydration mechanisms — all NCERT-line material, which is why the oxygen units together are the fastest-scoring stretch of organic chemistry.',
    objectives: [
      'Classify alcohols as 1\u00b0, 2\u00b0 or 3\u00b0 and predict their preparation from alkenes, haloalkanes, carbonyl compounds and Grignard reagents',
      'Explain hydrogen bonding\u2019s control over boiling points and water solubility of alcohols',
      'Identify primary, secondary and tertiary alcohols with the Lucas test and oxidation behaviour',
      'Write the E1 mechanism of acid-catalysed dehydration with the 3\u00b0 > 2\u00b0 > 1\u00b0 order and Saytzeff products',
    ],
    concepts: [
      {
        term: 'Classification and structure',
        kind: 'definition',
        statement: '**Alcohols** are R\u2013OH compounds classified by the carbon bearing the hydroxyl: **1\u00b0** (methanol, ethanol), **2\u00b0** (propan-2-ol), **3\u00b0** (2-methylpropan-2-ol); allylic and benzylic alcohols sit at unsaturated or aryl-adjacent carbons; the C\u2013O\u2013H chain is bent at the sp\u00b3 oxygen.',
        detail: 'Do not confuse alcohol class with amine class (Unit 18 counts groups on nitrogen, not on carbon). Fermentation of carbohydrates with zymase gives dilute ethanol, distilled to ~95% and dehydrated to absolute alcohol; methanol ("wood spirit", made from water gas) is dangerously toxic — a few millilitres can blind.',
      },
      {
        term: 'Preparation routes',
        kind: 'method',
        statement: 'Alcohols from: **alkenes** (indirect hydration via alkyl hydrogen sulfate, or direct H$_2$O/H$^+$ — both Markovnikov, propene \u2192 propan-2-ol), **haloalkanes** (aqueous KOH, reflux), **carbonyls** (NaBH$_4$/LiAlH$_4$/H$_2$-Ni: aldehyde \u2192 1\u00b0, ketone \u2192 2\u00b0), and **Grignard** reagents (HCHO \u2192 1\u00b0, other aldehydes \u2192 2\u00b0, ketones \u2192 3\u00b0 after acid workup).',
        detail: 'NaBH$_4$ is the selective scalpel (aldehydes/ketones only, works in water); LiAlH$_4$ the sledgehammer (also acids and esters, needs dry ether). Grignard logic: the nucleophilic R of RMgX installs on the carbonyl carbon, and the oxygen becomes \u2013OMgX until protonated — count the carbon substituents on the carbinol carbon to read the class.',
      },
      {
        term: 'Hydrogen-bonded physical behaviour',
        kind: 'law',
        statement: 'Intermolecular **O\u2013H\u00b7\u00b7\u00b7O hydrogen bonding** association makes alcohols boil higher than alkanes, isomeric ethers and haloalkanes of similar molar mass, though still below water; solubility in water falls as the hydrophobic chain grows and rises with branching.',
        detail: 'Ethanol (b.p. 351 K) sits far above its isomer methoxymethane (248 K) — proof the O\u2013H bond, not the oxygen atom, pays for association. Beyond four or five carbons the alkyl tail dominates and solubility collapses; branching packs less hydrophobic surface per molecule, which is why tert-butyl alcohol mixes with water in all proportions.',
      },
      {
        term: 'Reactions of the O\u2013H bond',
        kind: 'law',
        statement: 'Alcohols react with Na/K: $2\\text{R\u2013OH} + 2\\text{Na} \\to 2\\text{R\u2013ONa} + \\text{H}_2$; acid strength runs $\\text{CH}_3\\text{OH} > 1\u00b0 > 2\u00b0 > 3\u00b0$ (electron-releasing alkyls destabilise the alkoxide); esterification with carboxylic acids (H$^+$, reflux) and fast acylation by acid chlorides/anhydrides (often with pyridine) follow the same O\u2013H deprotonation.',
        detail: 'The alkyl +I effect is the acidity story the assessment wants: more alkyl groups push electron density onto O$^-$, blunting the alkoxide\u2019s charge and lowering acidity. The Na reaction is the classic H$_2$-evolution test distinguishing alcohols from ethers and hydrocarbons.',
      },
      {
        term: 'Identification: Lucas test and oxidation',
        kind: 'method',
        statement: '**Lucas reagent** (conc. HCl + anhydrous ZnCl$_2$) reads the class by turbidity timing: 3\u00b0 instant (stable carbocation), 2\u00b0 within \u22485 minutes, 1\u00b0 only on heating; **oxidation** confirms: 1\u00b0 \u2192 aldehyde \u2192 carboxylic acid, 2\u00b0 \u2192 ketone, 3\u00b0 resists (cleaves only under harsh conditions).',
        detail: 'The turbidity is the insoluble alkyl chloride precipitating, so the test runs exactly as fast as the carbocation forms. Distil a 1\u00b0 alcohol gently with acidified dichromate and the aldehyde escapes before further oxidation; reflux and it goes all the way to the acid — apparatus choice controls the product, a neat assessment point.',
      },
      {
        term: 'Dehydration: the E1 route',
        kind: 'method',
        statement: 'Hot acid (conc. H$_2$SO$_4$, 443 K) or heated Al$_2$O$_3$ dehydrates via **E1** for 2\u00b0/3\u00b0: protonate OH \u2192 water leaves \u2192 carbocation \u2192 \u03b2-H loss \u2192 alkene; ease is **3\u00b0 > 2\u00b0 > 1\u00b0** (carbocation stability) and products follow **Saytzeff** (butan-2-ol \u2192 mostly but-2-ene); at 413 K ethanol gives diethyl ether instead.',
        detail: 'The temperature switch is assessment gold: 413 K favours intermolecular substitution to the ether, 443 K intramolecular elimination to the alkene — one reagent, two products, 30 K apart. Carbocation intermediates also license rearrangements (a 1\u00b0 carbocation will hydride-shift toward 2\u00b0 before losing H$^+$), so predict the rearranged alkene when the substrate allows.',
      },
    ],
    examples: [
      {
        title: 'Lucas test triage',
        problem: 'Three unlabelled bottles hold butan-1-ol, butan-2-ol and 2-methylpropan-2-ol. Lucas reagent is added at room temperature: A turns cloudy instantly, B within about 5 minutes, C stays clear for hours. Identify each bottle.',
        steps: [
          { label: 'Step 1', text: '```text\ninstant turbidity  -> 3\u00b0  -> 2-methylpropan-2-ol (A)\n~5 minutes        -> 2\u00b0  -> butan-2-ol (B)\nclear for hours   -> 1\u00b0  -> butan-1-ol (C)\n```' },
          { label: 'Step 2', text: 'Turbidity is insoluble alkyl chloride forming — the test clock is the carbocation-forming step.' },
          { label: 'Step 3', text: 'The 3\u00b0 carbocation of A is stabilised by three methyl groups, forming immediately; the 2\u00b0 of B needs minutes.' },
          { label: 'Step 4', text: 'C\u2019s primary carbocation is too unstable — it must react by the slow SN2 route, so no turbity at room temperature; confirm C later by oxidation to butanal/butanoic acid.' }
        ],
        result: 'A = 2-methylpropan-2-ol (3\u00b0), B = butan-2-ol (2\u00b0), C = butan-1-ol (1\u00b0).'
      },
      {
        title: 'Dehydration of butan-2-ol',
        problem: 'Butan-2-ol is heated with concentrated H$_2$SO$_4$ at 440 K. Give the mechanism and the major product.',
        steps: [
          { label: 'Step 1', text: 'Protonation: the OH accepts H$^+$ and becomes water — a good leaving group.' },
          { label: 'Step 2', text: 'E1 loss of water generates the 2\u00b0 carbocation CH$_3$\u2013C$^+$H\u2013CH$_2$\u2013CH$_3$.' },
          { label: 'Step 3', text: '```text\nbeta-H loss from C3 -> but-2-ene (trisubstituted)  MAJOR\nbeta-H loss from C1 -> but-1-ene (monosubstituted) minor\n```' },
          { label: 'Step 4', text: 'Saytzeff\u2019s rule picks the more substituted, more stable alkene — but-2-ene dominates the mixture; no rearrangement is possible because the 2\u00b0 cation has nowhere better to go.' }
        ],
        result: 'Major product but-2-ene via E1 (protonation \u2192 2\u00b0 carbocation \u2192 \u03b2-H loss); minor but-1-ene.'
      },
      {
        title: 'Grignard route to a 3\u00b0 alcohol',
        problem: 'Synthesise 2-methylpropan-2-ol from propanone using a Grignard reagent, and name the reagent you chose.',
        steps: [
          { label: 'Step 1', text: 'Target analysis: the carbinol carbon of a 3\u00b0 alcohol needs a ketone plus one alkyl addition — propanone already supplies two methyls.' },
          { label: 'Step 2', text: 'Add methylmagnesium bromide: $\\text{CH}_3\\text{MgBr} + (\\text{CH}_3)_2\\text{C=O} \\to (\\text{CH}_3)_3\\text{C\u2013OMgBr}$ in dry ether.' },
          { label: 'Step 3', text: 'Acid workup: $(\\text{CH}_3)_3\\text{C\u2013OMgBr} + \\text{H}_2\\text{O} \\to (\\text{CH}_3)_3\\text{C\u2013OH}$ (2-methylpropan-2-ol) + MgBr(OH).' },
          { label: 'Step 4', text: 'Rule check: HCHO + RMgX \u2192 1\u00b0 alcohol, RCHO \u2192 2\u00b0, ketone \u2192 3\u00b0 — the carbonyl class decides the alcohol class.' }
        ],
        result: 'CH$_3$MgBr + propanone, then H$_3$O$^+$ — 2-methylpropan-2-ol.'
      }
    ],
    keyTakeaways: [
      'Class by the OH-carbon: 1\u00b0/2\u00b0/3\u00b0; Grignard carbonyl logic: HCHO \u2192 1\u00b0, aldehyde \u2192 2\u00b0, ketone \u2192 3\u00b0.',
      'Hydrogen bonding lifts boiling points above ethers/haloalkanes; solubility falls with chain length, rises with branching.',
      'Lucas test: 3\u00b0 instant, 2\u00b0 \u22485 min, 1\u00b0 slow; oxidation: 1\u00b0 \u2192 aldehyde \u2192 acid, 2\u00b0 \u2192 ketone, 3\u00b0 resists.',
      'Acidity of alcohols: CH$_3$OH > 1\u00b0 > 2\u00b0 > 3\u00b0 — alkyl +I destabilises the alkoxide.',
      'Dehydration: E1, 3\u00b0 > 2\u00b0 > 1\u00b0, Saytzeff product; 413 K gives ether, 443 K gives alkene.',
    ],
    quiz: [
      {
        q: 'Lucas reagent is',
        options: ['concentrated HCl with anhydrous ZnCl$_2$', 'dilute HCl', 'Br$_2$ in CCl$_4$', 'NaHCO$_3$ solution'],
        answer: 0,
        explanation: 'Step 1: The test converts alcohols to alkyl chlorides. Step 2: ZnCl$_2$ is a Lewis acid that complexes the OH, making water leave. Step 3: Conc. HCl supplies the chloride and the acidic medium. Step 4: Br$_2$/CCl$_4$ tests unsaturation; NaHCO$_3$ tests carboxyl groups.'
      },
      {
        q: 'Which alcohol gives immediate turbidity with Lucas reagent at room temperature?',
        options: ['butan-1-ol', 'butan-2-ol', '2-methylpropan-2-ol', 'methanol'],
        answer: 2,
        explanation: 'Step 1: Turbidity timing tracks carbocation formation. Step 2: The 3\u00b0 carbocation of 2-methylpropan-2-ol forms instantly. Step 3: Butan-2-ol (2\u00b0) needs about 5 minutes; butan-1-ol and methanol stay clear at room temperature. Step 4: The product cloudiness is insoluble tert-butyl chloride.'
      },
      {
        q: 'Oxidation of butan-2-ol with acidified K$_2$Cr$_2$O$_7$ gives',
        options: ['butanal', 'butanone', 'butanoic acid', 'no reaction at all'],
        answer: 1,
        explanation: 'Step 1: Butan-2-ol is a secondary alcohol. Step 2: Secondary alcohols oxidise to ketones — butanone — by loss of the carbinol H. Step 3: Further oxidation of a ketone needs C\u2013C cleavage, so it stops here. Step 4: Butanal/butanoic acid belong to butan-1-ol (1\u00b0) chemistry.'
      },
      {
        q: 'CH$_3$MgBr reacts with propanal, followed by hydrolysis, to give',
        options: ['butan-2-ol', 'butan-1-ol', '2-methylpropan-2-ol', 'propan-2-ol'],
        answer: 0,
        explanation: 'Step 1: Grignard methyl attacks the carbonyl carbon of propanal. Step 2: The carbinol carbon now carries H (from the aldehyde), CH$_2$CH$_3$ (aldehyde residue) and CH$_3$ (from Grignard) — two carbon groups + H = secondary. Step 3: Hydrolysis of the magnesium alkoxide releases butan-2-ol. Step 4: Ketones would give the 3\u00b0 alcohol; HCHO would give the 1\u00b0.'
      }
    ]
  },
  // ---------------------------------------------------------------- 18.1
  {
    sectionId: 'chem-ch10-s5',
    readingTime: 10,
    prerequisites: [
      'Functional groups and nomenclature (Unit 14)',
      'Ammonia\u2019s pyramidal geometry (Unit 3, VSEPR)',
    ],
    intro: 'Amines are ammonia with alkyl or aryl armour on the nitrogen — and the lone pair that survives that armoury makes them organic chemistry\u2019s bases and nucleophiles. This first section sets the vocabulary (classification, nomenclature, pyramidal structure) and the five preparation routes, including the two synthetic workhorses — Gabriel phthalimide and Hofmann degradation — that engineering assessment tests relentlessly. With 25 chemistry questions (100 marks, +4/\u22121) and most amine items being direct NCERT-line reads, a clean command of this section is among the fastest-scoring plays in the paper.',
    objectives: [
      'Classify amines as 1\u00b0, 2\u00b0 or 3\u00b0 by the number of carbon groups on nitrogen, and name quaternary ammonium salts',
      'Name amines in common and IUPAC systems, including N- prefixes and the amino- prefix',
      'Describe the trigonal-pyramidal sp\u00b3 structure of amines and the role of the nitrogen lone pair',
      'Write the five preparation routes: ammonolysis, nitro reduction, nitrile reduction, Hofmann bromamide degradation and Gabriel phthalimide synthesis',
    ],
    concepts: [
      {
        term: 'Classification on nitrogen',
        kind: 'definition',
        statement: 'Amines are classified by groups attached to **nitrogen**: RNH$_2$ = **1\u00b0**, R$_2$NH = **2\u00b0**, R$_3$N = **3\u00b0**, and R$_4$N$^+$X$\u2013$ = quaternary ammonium salt — a counting rule quite different from the carbon-based classes of alcohols and haloalkanes.',
        detail: 'The classic trap: $(\\text{CH}_3)_3\\text{C\u2013NH}_2$ (tert-butylamine) has a 3\u00b0 carbon but is a **1\u00b0 amine** — only one carbon group touches nitrogen. Similarly N-methylaniline is 2\u00b0 (phenyl + methyl on N) even though no secondary carbon exists. Always ask "how many ropes tie the N down?"',
      },
      {
        term: 'Structure: pyramidal nitrogen',
        kind: 'insight',
        statement: 'The amine nitrogen is **sp\u00b3 hybridised, trigonal pyramidal** (like NH$_3$, angles \u2248107\u2013108\u00b0), with the lone pair occupying the fourth tetrahedral corner — the seat of both basicity and nucleophilicity.',
        detail: 'The lone pair makes amines Br\u00f8nsted bases (proton acceptors) and Lewis bases/nucleophiles (electron-pair donors) — the physical origin of every reaction in this unit. Small amines invert rapidly (umbrella flip), so lone-pair "sides" interconvert; in aryl amines the lone pair delocalises into the ring, flattening the pyramid and dulling the nitrogen — basicity details follow in section 18.2.',
      },
      {
        term: 'Nomenclature',
        kind: 'notation',
        statement: 'Common names string alkyls before "amine" (methylamine, ethylmethylamine, trimethylamine); IUPAC uses the suffix **-amine** on the carbon chain (methanamine, propan-2-amine) with **N-** locants for extra N-substituents (N-methylethanamine, N,N-dimethylmethanamine), or the prefix **amino-** when a senior group owns the suffix; aniline = benzenamine, benzylamine = phenylmethanamine.',
        detail: 'Parsing drill: CH$_3$NHCH$_2$CH$_3$ = N-methylethanamine (2\u00b0); (CH$_3$)$_3$N = N,N-dimethylmethanamine (3\u00b0); H$_2$NCH$_2$CH$_2$OH = 2-aminoethan-1-ol (amino as prefix, OH senior). Aniline\u2019s N is bonded directly to the ring; benzylamine\u2019s N hangs from the CH$_2$ — a distinction the assessment never tires of.',
      },
      {
        term: 'Preparation I: ammonolysis and nitro reduction',
        kind: 'method',
        statement: '**Ammonolysis**: RX + NH$_3$ (excess, alcohol) \u2192 RNH$_2$, but the product alkylates onward: RNH$_2$ + RX \u2192 R$_2$NH \u2192 R$_3$N \u2192 R$_4$N$^+$X$\u2013$ — a mixture of all four, separated by fractional distillation; **nitro reduction**: $\\text{ArNO}_2 + 3\\text{H}_2 \\to \\text{ArNH}_2 + 2\\text{H}_2\\text{O}$ with H$_2$/Pd or (industrially) Fe/HCl or Sn/HCl — the standard route to aniline.',
        detail: 'Ammonolysis is synthetically sloppy: the 1\u00b0 amine is a better nucleophile than ammonia, so over-alkylation is unavoidable; excess ammonia merely tilts the mixture toward 1\u00b0. Nitrobenzene\u2019s reduction is the workhorse of aniline (dyestuff) manufacture — catalytic hydrogenation is the green modern version.',
      },
      {
        term: 'Preparation II: the clean 1\u00b0 routes',
        kind: 'method',
        statement: '**Nitrile reduction**: R\u2013CN + LiAlH$_4$ (or H$_2$/Ni) \u2192 R\u2013CH$_2$NH$_2$, retaining the nitrile carbon (chain grows by one); **Hofmann bromamide degradation**: $\\text{R\u2013CONH}_2 + \\text{Br}_2 + 4\\text{NaOH} \\to \\text{R\u2013NH}_2 + \\text{Na}_2\\text{CO}_3 + 2\\text{NaBr} + 2\\text{H}_2\\text{O}$ — a pure 1\u00b0 amine with **one carbon fewer**, no rearrangement; **Gabriel phthalimide**: phthalimide + KOH \u2192 potassium salt + RX \u2192 N-alkyl phthalimide \u2192 hydrolysis/hydrazinolysis \u2192 pure RNH$_2$.',
        detail: 'Each route has a signature the assessment tests by outcome: nitrile route lengthens the chain, Hofmann shortens it by exactly one carbon with a migration that never rearranges, and Gabriel works only for alkyl halides — aryl halides refuse nucleophilic substitution, so **aniline cannot be made by Gabriel**. Choose the route by counting carbons in the product.',
      },
      {
        term: 'Physical properties quick scan',
        kind: 'notation',
        statement: 'Lower amines (methylamine, ethylamine, trimethylamine) are **gases** with fishy-ammoniacal odour; 1\u00b0/2\u00b0 amines hydrogen-bond, so they boil above isomeric 3\u00b0 amines and ethers but below comparable alcohols (N is less electronegative than O); small amines are water-soluble via N\u2013H\u00b7\u00b7\u00b7O and N\u00b7\u00b7\u00b7H\u2013O bonds.',
        detail: '3\u00b0 amines lack N\u2013H, so they cannot self-associate — among isomeric C$_4$ amines the 3\u00b0 member boils lowest. The fish-rot smell of dead matter is low-molecular amines (putrescine, cadaverine) — the sensory hook that makes this section memorable.',
      },
    ],
    examples: [
      {
        title: 'Hofmann degradation walk-through',
        problem: 'Benzamide is treated with bromine and sodium hydroxide solution. Write the equation, identify the product, and compare carbon counts.',
        steps: [
          { label: 'Step 1', text: 'Starting material: C$_6$H$_5$\u2013CO\u2013NH$_2$ — the amide of benzoic acid (7 carbons including the carbonyl carbon).' },
          { label: 'Step 2', text: 'Hofmann reagent: Br$_2$ + 4NaOH converts the amide to an amine, expelling the carbonyl carbon as carbonate.' },
          { label: 'Step 3', text: '```text\nC6H5-CONH2 + Br2 + 4 NaOH -> C6H5-NH2 + Na2CO3 + 2 NaBr + 2 H2O\n   7 carbons                            6 carbons\n```' },
          { label: 'Step 4', text: 'Product: aniline (C$_6$H$_5$NH$_2$) — a pure 1\u00b0 amine, one carbon shorter, with no rearrangement because the phenyl migrates intact.' }
        ],
        result: 'Benzamide \u2192 aniline + Na$_2$CO$_3$ + 2NaBr + 2H$_2$O — the amine carries one carbon fewer than the amide.'
      },
      {
        title: 'Gabriel synthesis of butan-1-amine',
        problem: 'Outline the Gabriel phthalimide synthesis of butan-1-amine starting from phthalimide and 1-bromobutane, and state why the method fails for aniline.',
        steps: [
          { label: 'Step 1', text: 'Deprotonate: phthalimide + KOH \u2192 potassium phthalimide (the imide N\u2013H is unusually acidic — two flanking carbonyls).' },
          { label: 'Step 2', text: 'Alkylate: potassium phthalimide + CH$_3$CH$_2$CH$_2$CH$_2$Br \u2192 N-butyl phthalimide + KBr — a clean SN2 on the 1\u00b0 halide.' },
          { label: 'Step 3', text: 'Release: alkaline hydrolysis (or hydrazinolysis with N$_2$H$_4$) of N-butyl phthalimide \u2192 butan-1-amine + phthalic acid (or phthalhydrazide).' },
          { label: 'Step 4', text: 'Failure mode: bromobenzene would need the same SN2 displacement, but aryl halides do not undergo it (partial double-bond C\u2013X, Unit 16) — so aniline is unreachable by Gabriel.' }
        ],
        result: 'Phthalimide \u2192 (KOH) \u2192 K-salt \u2192 (1-bromobutane) \u2192 N-butyl phthalimide \u2192 (OH$\u2013$/heat) \u2192 pure butan-1-amine; aryl halides never enter.'
      },
      {
        title: 'Classification audit',
        problem: 'Classify each amine and name it: (a) (CH$_3$)$_3$C\u2013NH$_2$, (b) (CH$_3$)$_3$N, (c) C$_6$H$_5$\u2013NH\u2013CH$_3$, (d) C$_6$H$_5$\u2013CH$_2$\u2013NH$_2$.',
        steps: [
          { label: 'Step 1', text: '```text\n(a) (CH3)3C-NH2      1 group on N -> 1\u00b0  (2-methylpropan-2-amine)\n(b) (CH3)3N          3 groups on N -> 3\u00b0  (N,N-dimethylmethanamine)\n(c) C6H5-NH-CH3      2 groups on N -> 2\u00b0  (N-methylbenzenamine)\n(d) C6H5-CH2-NH2     1 group on N -> 1\u00b0  (phenylmethanamine)\n```' },
          { label: 'Step 2', text: '(a) is the trap: a 3\u00b0 carbon with a 1\u00b0 amine nitrogen — the class counts N-substituents only.' },
          { label: 'Step 3', text: '(c) vs (d): in N-methylaniline the N is bonded to the ring itself; in phenylmethanamine (benzylamine) it hangs from a CH$_2$ — an aryl amine versus an aryl-adjacent aliphatic amine.' },
          { label: 'Step 4', text: 'Quaternary check: none here, since no nitrogen carries four carbon groups.' }
        ],
        result: '(a) 1\u00b0, (b) 3\u00b0, (c) 2\u00b0 aryl amine, (d) 1\u00b0 benzylic (aliphatic) amine.'
      }
    ],
    keyTakeaways: [
      'Amine class counts carbon groups on **nitrogen**: tert-butylamine is 1\u00b0; the alcohol/haloalkane carbon-class rules do not apply.',
      'Nitrogen is sp\u00b3 pyramidal with the lone pair at the apex — base and nucleophile in one.',
      'Ammonolysis gives 1/2/3/quaternary mixtures; nitro reduction is the aniline workhorse.',
      'Hofmann bromamide: one carbon fewer, no rearrangement; nitrile reduction: one carbon more; Gabriel: pure 1\u00b0 alkyl amines only.',
      'Aniline = N directly on the ring; benzylamine = N on the side chain — the pair the assessment loves to swap.',
    ],
    quiz: [
      {
        q: 'Which of the following is a 3\u00b0 amine?',
        options: ['tert-butylamine', 'N-methylethanamine', 'N,N-dimethylmethanamine', 'aniline'],
        answer: 2,
        explanation: 'Step 1: Count carbon groups bonded to nitrogen. Step 2: tert-butylamine has one (the N carries two H) — 1\u00b0. Step 3: N-methylethanamine has two — 2\u00b0; aniline has one — 1\u00b0. Step 4: N,N-dimethylmethanamine, (CH$_3$)$_3$N, has three — 3\u00b0.'
      },
      {
        q: 'Hofmann bromamide degradation of propanamide (CH$_3$CH$_2$CONH$_2$) gives',
        options: ['propan-1-amine', 'ethanamine', 'propan-2-amine', 'butan-1-amine'],
        answer: 1,
        explanation: 'Step 1: Hofmann degradation removes the carbonyl carbon as carbonate. Step 2: Propanamide has 3 carbons; the amine keeps the two of the ethyl group. Step 3: CH$_3$CH$_2$NH$_2$ — ethanamine — a pure 1\u00b0 amine, one carbon shorter. Step 4: Propan-1-amine would be the nitrile-reduction product (chain grows); butan-1-amine grows it further.'
      },
      {
        q: 'Gabriel phthalimide synthesis cannot be used to prepare',
        options: ['methanamine', 'butan-1-amine', 'aniline', 'benzylamine'],
        answer: 2,
        explanation: 'Step 1: The key step is SN2 alkylation of the phthalimide anion. Step 2: Alkyl halides (methyl iodide, 1-bromobutane, benzyl chloride) undergo SN2 readily. Step 3: Aryl halides do not undergo SN2 — the C\u2013X bond has partial double-bond character. Step 4: Aniline would need halobenzene as the alkylating agent, so Gabriel cannot make it.'
      },
      {
        q: 'Reduction of CH$_3$CN with LiAlH$_4$ followed by hydrolysis gives',
        options: ['methanamine', 'ethanamine', 'propan-1-amine', 'ethanamide'],
        answer: 1,
        explanation: 'Step 1: LiAlH$_4$ reduces the nitrile to a primary amine. Step 2: The nitrile carbon becomes the CH$_2$ of the product: CH$_3$\u2013C\u2261N \u2192 CH$_3$\u2013CH$_2$\u2013NH$_2$. Step 3: Two carbons — ethanamine; the chain grows by one because the nitrile carbon is retained. Step 4: Methanamine would need HCN as the nitrile; ethanamide is the hydrolysis (not reduction) product.'
      }
    ]
  },
  // ---------------------------------------------------------------- 19.1
  {
    sectionId: 'chem-ch10-s12',
    readingTime: 12,
    prerequisites: [
      'Functional groups: alcohols, aldehydes, ketones (Units 14, 17)',
      'Cyclic structures and stereochemical prefixes (Unit 15 helps)',
    ],
    intro: 'Biomolecules are the organic compounds of living systems — carbohydrates, proteins, nucleic acids plus the vitamin and hormone regulators — built by photosynthesis and spent by respiration. Carbohydrates open the family: glucose is the most abundant organic molecule on Earth and the fuel every cell recognises. engineering assessment asks factual, NCERT-line questions from this unit that are among the easiest marks among the paper\u2019s 25 chemistry questions (100 marks, +4/\u22121) — classification, constituent monosaccharides, and why sucrose fails the Tollens test. For scoring speed, biomolecules are the paper\u2019s fastest-scoring unit for a prepared aspirant.',
    objectives: [
      'Define carbohydrates as optically active polyhydroxy aldehydes/ketones (or their hydrolysis products) and classify them as mono-, oligo- or polysaccharides',
      'Distinguish aldoses from ketoses and reducing from non-reducing sugars',
      'Describe the open-chain and cyclic (pyranose/furanose) structures of glucose and fructose, including \u03b1/\u03b2 anomers and mutarotation',
      'Name the constituent monosaccharides of sucrose, lactose and maltose and the glycosidic bonds linking them',
    ],
    concepts: [
      {
        term: 'What is a biomolecule',
        kind: 'definition',
        statement: '**Biomolecules** are the organic compounds produced by living systems — the four major classes being **carbohydrates** (energy), **proteins** (structure and machinery), **lipids/fats** (storage) and **nucleic acids** (information), with **vitamins** and **hormones** as small-molecule regulators; photosynthesis builds the carbohydrate pool: $6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{sunlight, chlorophyll}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$.',
        detail: 'Respiration runs the same equation backwards to release energy — the carbon cycle in one line. D-configuration: nearly all natural sugars use the D-series (the asymmetric carbon farthest from the carbonyl mirrors D-glyceraldehyde) — a naming convention, not optical-rotation sign.',
      },
      {
        term: 'Carbohydrate definition and classification',
        kind: 'definition',
        statement: 'Carbohydrates are **optically active polyhydroxy aldehydes or ketones**, or substances that yield them on hydrolysis; classified by size: **monosaccharides** (not hydrolysable: glucose, fructose, ribose), **oligosaccharides** (2\u201310 units: disaccharides sucrose, lactose, maltose), **polysaccharides** (>10, often thousands: starch, cellulose, glycogen); and by carbonyl: **aldoses** versus **ketoses**; and by behaviour: **reducing** versus **non-reducing**.',
        detail: 'The name "carbohydrate" = "hydrates of carbon", from formulas like C$_6$(H$_2$O)$_6$ — a historical mislabel, since the H:O ratio is coincidence, not water of hydration (rhamnose, C$_6$H$_{12}$O$_5$, breaks the pattern). Reducing power needs a free aldehyde or a hemiacetal that can open — the hinge for the sucrose question below.',
      },
      {
        term: 'Glucose: the aldohexose',
        kind: 'method',
        statement: 'Glucose, C$_6$H$_{12}$O$_6$, is an **aldohexose**; its open-chain structure CH$_2$OH\u2013(CHOH)$_4$\u2013CHO follows from evidence: oxime/hydrazone formation (CHO), penta-acetate with retained aldehyde (five OH), HI reduction to n-hexane (6-carbon straight chain), Br$_2$ water \u2192 gluconic acid (aldehyde \u2192 acid, chain intact) and HNO$_3$ \u2192 saccharic acid (both ends oxidised).',
        detail: 'In water \u224899% of glucose is **cyclic**: the C5\u2013OH attacks the aldehyde carbon (C1) to form an intramolecular **hemiacetal**, closing a six-membered **pyranose** ring. The newly created C1 stereocentre gives the **\u03b1/\u03b2 anomers** (OH trans or cis to the CH$_2$OH); freshly dissolved \u03b1-D-glucose ($[\u03b1] = +112\u00b0$) or \u03b2 ($+19\u00b0$) each drift to the equilibrium value $+52.7\u00b0$ — **mutarotation**, impossible without a free hemiacetal OH.',
      },
      {
        term: 'Fructose: the ketohexose',
        kind: 'definition',
        statement: 'Fructose, also C$_6$H$_{12}$O$_6$, is a **ketohexose** (C=O at C2); it cyclises to a five-membered **furanose** ring by the C5\u2013OH attacking C2, and it is the sweetest natural sugar.',
        detail: 'Fructose shares the formula with glucose but not the chemistry: ketone carbonyl, furanose preference, levorotatory ($[\u03b1] \u2248 -92\u00b0$, hence "levulose"). Glucose + fructose is the disaccharide sucrose; glucose alone is the unit of starch, cellulose and glycogen — same monomer, three different polymers.',
      },
      {
        term: 'Disaccharides: sucrose, lactose, maltose',
        kind: 'notation',
        statement: '**Sucrose** = \u03b1-D-glucopyranose + \u03b2-D-fructofuranose joined C1\u2013C2 (both anomeric carbons engaged) \u2014 **non-reducing**; hydrolysis gives glucose + fructose (the "invert sugar", $+66.5\u00b0 \\to -19.7\u00b0$). **Lactose** = \u03b2-D-galactose + \u03b2-D-glucose (1\u21924 link, one anomeric end free) — reducing. **Maltose** = two \u03b1-D-glucose (1\u21924 link, one end free) — reducing.',
        detail: 'The rule hiding here: a disaccharide is reducing only if at least one anomeric carbon retains its hemiacetal OH — free to open to the aldehyde/ketone that reduces Tollens/Fehling. Sucrose spends both anomeric carbons on the glycosidic bond, so it cannot open — non-reducing, and no mutarotation either. Enzymes: invertase/sucrase for sucrose, lactase for lactose, maltase for maltose (lactase deficiency = lactose intolerance).',
      },
      {
        term: 'Reactions of glucose worth knowing',
        kind: 'law',
        statement: 'Glucose (open-chain fraction) reduces Tollens\u2019 and Fehling\u2019s solutions (the aldehyde test), oxidises with Br$_2$ water to gluconic acid and with HNO$_3$ to saccharic acid, ferments with zymase to ethanol + CO$_2$, and forms glycosides (acetals) with alcohols/H$^+$ — the acetal lock that makes disaccharides and polysaccharides.',
        detail: 'Every cyclic monosaccharide reacts through the small open-chain fraction at equilibrium; the ring is a reservoir that refills the aldehyde as it is consumed. Acetal (glycosidic) formation with methanol gives methyl glucoside — no longer reducing, because the acetal cannot open under neutral/basic conditions: the same trick nature uses to string sugars together.',
      },
    ],
    examples: [
      {
        title: 'Classification audit',
        problem: 'Classify each as mono/oligo/poly, aldose or ketose, and reducing or non-reducing: glucose, fructose, sucrose, lactose, maltose, starch, cellulose.',
        steps: [
          { label: 'Step 1', text: '```text\nname      class     carbonyl   reducing?\nglucose   mono      aldose     yes (free hemiacetal)\nfructose  mono      ketose     yes (opens via enediol)\nsucrose   di        glu+keto   no  (both anomeric C tied)\nlactose   di        two aldose yes (one anomeric C free)\nmaltose   di        two aldose yes (one anomeric C free)\nstarch    poly      --         no  (acetal links)\ncellulose poly      --         no\n```' },
          { label: 'Step 2', text: 'Fructose reduces Fehling\u2019s solution too — under the alkaline conditions it isomerises via an enediol to glucose/mannose before reacting.' },
          { label: 'Step 3', text: 'The disaccharide test: count free anomeric carbons — sucrose has zero free (non-reducing), lactose and maltose each keep one.' },
          { label: 'Step 4', text: 'Polysaccharides are all-acetal, so none of their glucose units can open — none reduces.' }
        ],
        result: 'Glucose: mono/aldose/reducing; fructose: mono/ketose/reducing; sucrose: di/non-reducing; lactose, maltose: di/reducing; starch, cellulose: poly/non-reducing.'
      },
      {
        title: 'Why sucrose fails the silver mirror',
        problem: 'Sucrose gives no silver mirror with Tollens\u2019 reagent and shows no mutarotation, while maltose gives both. Explain with the glycosidic linkage.',
        steps: [
          { label: 'Step 1', text: 'Locate the link: sucrose joins \u03b1-D-glucose C1 to \u03b2-D-fructose C2 — the anomeric carbons of both sugars.' },
          { label: 'Step 2', text: 'Both hemiacetal OH groups have been converted to acetal (glycosidic) oxygens — neither ring can reopen to a carbonyl.' },
          { label: 'Step 3', text: 'No open-chain aldehyde or ketone \u21d2 no Tollens/Fehling reduction and no \u03b1\u21d4\u03b2 interconversion (no mutarotation).' },
          { label: 'Step 4', text: 'Maltose\u2019s 1\u21924 link uses only the first glucose\u2019s C1; the second glucose keeps a free hemiacetal at its C1 — it opens, reduces and mutarotates.' }
        ],
        result: 'Sucrose: both anomeric carbons locked in the glycosidic bond \u2192 non-reducing, no mutarotation; maltose: one free anomeric carbon \u2192 reducing and mutarotating.'
      },
      {
        title: 'Mutarotation arithmetic',
        problem: 'Pure \u03b1-D-glucose has specific rotation $+112\u00b0$ and pure \u03b2-D-glucose has $+19\u00b0$. A freshly prepared \u03b1 solution equilibrates at $+52.7\u00b0$. Find the \u03b1 : \u03b2 ratio at equilibrium.',
        steps: [
          { label: 'Step 1', text: 'Let the \u03b1 fraction be $x$; then $112x + 19(1 \u2013 x) = 52.7$.' },
          { label: 'Step 2', text: 'Expand: $19 + 93x = 52.7$, so $x = \\frac{33.7}{93} = 0.362$.' },
          { label: 'Step 3', text: 'Equilibrium mixture: \u224836% \u03b1-pyranose and 64% \u03b2-pyranose (plus a trace of open chain).' },
          { label: 'Step 4', text: 'The \u03b2 anomer dominates because its OH at C1 is equatorial — the more comfortable chair position; the same drift explains why both pure anomers settle at $+52.7\u00b0$.' }
        ],
        result: '\u03b1 : \u03b2 \u2248 36 : 64 at equilibrium — the mutarotation endpoint of $+52.7\u00b0$.'
      }
    ],
    keyTakeaways: [
      'Carbohydrates = optically active polyhydroxy aldehydes/ketones or their hydrolysis products; mono \u2192 oligo (2\u201310) \u2192 poly (>10).',
      'Glucose is an aldohexose: open chain proven by oxime, penta-acetate, n-hexane (HI), gluconic (Br$_2$) and saccharic (HNO$_3$) acids.',
      'Cyclic glucose = C5\u2013OH + C1 hemiacetal = pyranose; \u03b1/\u03b2 anomers; mutarotation to $+52.7\u00b0$ (36% \u03b1, 64% \u03b2).',
      'Sucrose = \u03b1-glucose + \u03b2-fructose, both anomeric carbons engaged \u2192 non-reducing, no mutarotation; lactose = \u03b2-galactose + \u03b2-glucose, reducing; maltose = two \u03b1-glucose, reducing.',
      'A sugar is reducing only if an anomeric carbon stays a hemiacetal — free to open.',
    ],
    quiz: [
      {
        q: 'Which of the following is a ketose?',
        options: ['glucose', 'fructose', 'galactose', 'maltose'],
        answer: 1,
        explanation: 'Step 1: Ketoses carry the carbonyl at C2 as a ketone. Step 2: Fructose is CH$_2$OH\u2013CO\u2013(CHOH)$_3$\u2013CH$_2$OH — the ketohexose. Step 3: Glucose and galactose are aldohexoses; maltose is a disaccharide of two glucose units. Step 4: Fructose\u2019s C2 ketone closes to the furanose ring.'
      },
      {
        q: 'Hydrolysis of sucrose gives',
        options: ['glucose + galactose', 'glucose + fructose', 'two molecules of glucose', 'fructose + galactose'],
        answer: 1,
        explanation: 'Step 1: Sucrose is a disaccharide of two monosaccharides. Step 2: Its units are \u03b1-D-glucose and \u03b2-D-fructose. Step 3: Hydrolysis (invertase or dilute acid) cleaves the C1\u2013C2 glycosidic bond, releasing both. Step 4: Glucose + galactose is lactose\u2019s pair; glucose + glucose is maltose\u2019s.'
      },
      {
        q: 'Which of the following is a non-reducing sugar?',
        options: ['glucose', 'maltose', 'lactose', 'sucrose'],
        answer: 3,
        explanation: 'Step 1: Reducing power requires a free aldehyde/ketone or a hemiacetal that can open. Step 2: Glucose, maltose and lactose all retain a free anomeric OH. Step 3: Sucrose\u2019s glycosidic bond consumes the anomeric carbons of BOTH units — neither ring can open. Step 4: Hence sucrose gives no Tollens/Fehling reaction and shows no mutarotation.'
      },
      {
        q: 'The constituent monosaccharides of lactose are',
        options: ['\u03b1-D-glucose and \u03b2-D-fructose', '\u03b2-D-galactose and \u03b2-D-glucose', 'two \u03b1-D-glucose units', '\u03b1-D-galactose and \u03b1-D-glucose'],
        answer: 1,
        explanation: 'Step 1: Lactose is the milk sugar, a disaccharide. Step 2: Its units are \u03b2-D-galactose and \u03b2-D-glucose joined by a 1\u21924 glycosidic bond. Step 3: The glucose unit\u2019s anomeric carbon remains free — lactose is a reducing sugar. Step 4: Option one describes sucrose; option three describes maltose.'
      }
    ]
  },
  // ---------------------------------------------------------------- 20.1
  {
    sectionId: 'chem-ch39-s9',
    readingTime: 10,
    prerequisites: [
      'Functional-group reactions of Units 17 and 18',
      'Ionic tests and precipitation rules (Unit 12 helps)',
    ],
    intro: 'Practical chemistry is where engineering assessment stops asking "derive" and starts asking "what did you observe?" This section is the detection toolkit: **Lassaigne\u2019s sodium fusion** converts the covalently bound extra elements (N, S, halogens) into ionic salts the beaker can see, and a panel of colour tests reads functional groups off an unknown — Prussian blue, silver mirrors, violet ferric complexes. The testing agency frames direct questions on these laboratory principles every year; with 25 chemistry questions (100 marks, +4/\u22121) and most of this unit being literal NCERT lines, it is the fastest-scoring stretch of the whole paper.',
    objectives: [
      'Explain the purpose and chemistry of the Lassaigne sodium-fusion extract',
      'Detect nitrogen, sulphur, both together, and the individual halogens with confirmatory tests',
      'Detect hydroxyl (alcoholic versus phenolic), carbonyl (aldehyde versus ketone), carboxyl and amino groups with named reagents',
      'Order tests so that interfering species are destroyed before the confirmatory step',
    ],
    concepts: [
      {
        term: 'Lassaigne\u2019s sodium fusion',
        kind: 'method',
        statement: 'Heating the organic compound with molten **sodium** converts covalently bound elements to ionic salts: $\\text{Na} + \\text{C} + \\text{N} \\to \\text{NaCN}$, $\\text{Na} + \\text{S} \\to \\text{Na}_2\\text{S}$, $\\text{Na} + \\text{X} \\to \\text{NaX}$; extracting the cooled mass with water gives the **sodium fusion extract (Lassaigne\u2019s extract)**, in which those ions are now detectable.',
        detail: 'The whole trick is the covalent \u2192 ionic conversion: tests for CN$\u2013$, S$^{2\u2013}$, X$\u2013$ exist in inorganic chemistry, but organic compounds are covalent and insoluble — fusion makes the elements legible to the test tube. Use the fresh extract and filter before testing; carbonate from charred carbon is harmless.',
      },
      {
        term: 'Tests for nitrogen and sulphur',
        kind: 'method',
        statement: '**Nitrogen**: extract + freshly prepared FeSO$_4$ + NaOH (boil), then acidify and add FeCl$_3$ \u2192 **Prussian blue** $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$. **Sulphur**: extract + sodium nitroprusside \u2192 **violet** colour, or acidify + lead acetate \u2192 black PbS. **Both N and S**: the fusion forms NaSCN, which with Fe$^{3+}$ gives a **blood-red** $[\\text{Fe(SCN)}]^{2+}$ instead of Prussian blue.',
        detail: 'The nitrogen sequence is a hidden coordination story: CN$\u2013$ first complexes Fe$^{2+}$ to $[\\text{Fe(CN)}_6]^{4\u2013}$; some Fe$^{2+}$ oxidises to Fe$^{3+}$ on boiling; the Fe$^{3+}$ then builds the Prussian-blue lattice. That is why the FeSO$_4$ must be freshly made — old, fully oxidised iron(II) sulfate wrecks the ferrocyanide step.',
      },
      {
        term: 'Test for halogens',
        kind: 'method',
        statement: 'Acidify the extract with dilute **HNO$_3$** and boil (to expel HCN/H$_2$S that would otherwise precipitate as AgCN/Ag$_2$S), then add AgNO$_3$: a **white ppt soluble in NH$_4$OH** = Cl; **pale yellow, partly soluble** = Br; **yellow, insoluble in ammonia** = I. Fluorine is not caught by this test (AgF is soluble).',
        detail: 'The boiling-with-HNO$_3$ step is the assessment\u2019s favourite "why?" — nitrogen or sulphur in the compound would otherwise fake a halogen positive. Colour deepens with anion polarisability down the group, matching the solubility ladder of the silver halides in ammonia.',
      },
      {
        term: 'Hydroxyl: alcoholic versus phenolic',
        kind: 'method',
        statement: '**Alcoholic OH**: ceric ammonium nitrate (yellow CAN) \u2192 **red colouration**; Lucas reagent grades 1\u00b0/2\u00b0/3\u00b0 by turbidity speed; the iodoform test flags the CH$_3$CH(OH)\u2013 skeleton. **Phenolic OH**: neutral FeCl$_3$ \u2192 **violet** (coloured complexes) and bromine water \u2192 **white ppt** of 2,4,6-tribromophenol.',
        detail: 'CAN\u2019s red is a Ce(IV)\u2013alcohol complex — any alcohol answers; FeCl$_3$\u2019s violet is phenol-specific (enol-type complexation), instantly separating an alcohol from a phenol. Phenol does not liberate CO$_2$ from NaHCO$_3$ while carboxylic acids do — the phenol-vs-acid discrimination the practical paper loves.',
      },
      {
        term: 'Carbonyl, carboxyl and amino groups',
        kind: 'method',
        statement: '**Carbonyl**: 2,4-DNP (Brady\u2019s reagent) \u2192 **orange-yellow ppt** of hydrazone for aldehydes AND ketones; Tollens\u2019 ammoniacal AgNO$_3$ \u2192 **silver mirror** (aldehydes only); Fehling\u2019s \u2192 red Cu$_2$O (aliphatic aldehydes — benzaldehyde stays negative). **Carboxyl**: NaHCO$_3$ \u2192 **brisk effervescence** of CO$_2$ (turns lime water milky). **Amino (1\u00b0)**: carbylamine test — heat with CHCl$_3$ + alcoholic KOH \u2192 **foul-smelling isocyanide**; aryl 1\u00b0 amines diazotise with NaNO$_2$/HCl at 273\u2013278 K.',
        detail: 'Think of 2,4-DNP as the carbonyl detector and Tollens as the aldehyde sorter: DNP-positive plus mirror-negative = ketone. The carbylamine test is negative for 2\u00b0/3\u00b0 amines (no N\u2013H pair to lose the CN footing) — a one-reagent classification that pairs with the Hinsberg approach in section 18.2.',
      },
      {
        term: 'Ordering the tests',
        kind: 'insight',
        statement: 'Sequence logic: run **element detection first** (Lassaigne), then **group tests in order of specificity** — CO$_2$ from NaHCO$_3$ (acid) before FeCl$_3$ (phenol), 2,4-DNP before Tollens, and always destroy CN$\u2013$/S$^{2\u2013}$ with HNO$_3$ before any Ag$^+$ test.',
        detail: 'Interference is the assessor\u2019s weapon: phenols also darken FeCl$_3$-adjacent tests, aldehydes reduce more than just Tollens, and unburned cyanide fakes chloride. A clean unknown protocol is Lassaigne \u2192 NaHCO$_3$ \u2192 FeCl$_3$/bromine water \u2192 2,4-DNP \u2192 Tollens/Fehling \u2192 carbylamine — each step ruling out families for the next.',
      },
    ],
    examples: [
      {
        title: 'Lassaigne walk-through for nitrogen',
        problem: 'An organic compound is suspected to contain nitrogen. Describe the full Lassaigne test sequence with equations and the expected observation.',
        steps: [
          { label: 'Step 1', text: 'Fuse: compound + molten Na \u2192 ionic NaCN ($\\text{Na} + \\text{C} + \\text{N} \\to \\text{NaCN}$); extract the residue with water and filter.' },
          { label: 'Step 2', text: 'Complex: add freshly prepared FeSO$_4$ + a little NaOH and boil: $6\\text{CN}^- + \\text{Fe}^{2+} \\to [\\text{Fe(CN)}_6]^{4\u2013}$ (ferrocyanide); some Fe$^{2+}$ oxidises to Fe$^{3+}$.' },
          { label: 'Step 3', text: 'Confirm: acidify with dilute H$_2$SO$_4$ and add FeCl$_3$: $4\\text{Fe}^{3+} + 3[\\text{Fe(CN)}_6]^{4\u2013} \\to \\text{Fe}_4[\\text{Fe(CN)}_6]_3$ — deep **Prussian blue**.' },
          { label: 'Step 4', text: 'Interpretation: Prussian blue \u21d2 nitrogen present; had the fusion also made NaSCN (N + S), the iron(III) test would instead give a blood-red thiocyanate solution.' }
        ],
        result: 'Prussian blue colouration confirms nitrogen; blood red would indicate N and S together.'
      },
      {
        title: 'Halogen identification matrix',
        problem: 'The Lassaigne extract of an unknown is acidified with dilute HNO$_3$, boiled, and treated with AgNO$_3$. Predict the halogen for each observation: (a) curdy white ppt dissolving in NH$_4$OH, (b) pale yellow ppt partly soluble in concentrated NH$_3$, (c) yellow ppt insoluble in NH$_3$.',
        steps: [
          { label: 'Step 1', text: '```text\n(a) white ppt, soluble in NH4OH      -> AgCl -> chlorine\n(b) pale yellow, partly soluble         -> AgBr -> bromine\n(c) yellow, insoluble in NH3             -> AgI  -> iodine\n```' },
          { label: 'Step 2', text: 'The HNO$_3$ boil first destroys CN$\u2013$ and S$^{2\u2013}$ — otherwise AgCN/Ag$_2$S would masquerade as halide precipitates.' },
          { label: 'Step 3', text: 'Solubility in ammonia falls AgCl \u226b AgBr \u226b AgI (K$_{sp}$ climbs), so the ammonia wash is the sorter.' },
          { label: 'Step 4', text: 'Fluorine cannot be detected this way — AgF is soluble, so no precipitate ever forms.' }
        ],
        result: '(a) chlorine, (b) bromine, (c) iodine — sorted by colour and ammonia solubility of the silver halides.'
      },
      {
        title: 'Unknown triage: aldehyde, ketone or acid?',
        problem: 'Compound X gives an orange precipitate with 2,4-DNP but no silver mirror with Tollens\u2019 reagent. Compound Y gives both a DNP precipitate and a silver mirror. Compound Z gives no DNP reaction but brisk effervescence with NaHCO$_3$. Assign the functional groups.',
        steps: [
          { label: 'Step 1', text: '```text\nX: DNP +  (Tollens \u2013)  -> ketone\nY: DNP +  (Tollens +)  -> aldehyde\nZ: DNP \u2013, NaHCO3 +    -> carboxylic acid\n```' },
          { label: 'Step 2', text: '2,4-DNP\u2019s hydrazone formation needs only a carbonyl — it is the group detector, blind to aldehyde/ketone distinction.' },
          { label: 'Step 3', text: 'Tollens\u2019 Ag$^+$ is reduced only by the easily oxidised aldehyde \u2013CHO \u2192 \u2013COOH, which is why Y mirrors and X does not.' },
          { label: 'Step 4', text: 'Z\u2019s NaHCO$_3$ effervescence (CO$_2$ turning limewater milky) is the carboxyl signature — stronger acid than phenol, which fails this test.' }
        ],
        result: 'X = ketone, Y = aldehyde, Z = carboxylic acid.'
      }
    ],
    keyTakeaways: [
      'Lassaigne fusion converts covalent N, S, X into NaCN, Na$_2$S, NaX — ionic and testable in water.',
      'N \u2192 Prussian blue; S \u2192 violet with sodium nitroprusside (or black PbS); N + S \u2192 blood red (thiocyanate); halogens \u2192 AgX after HNO$_3$ boiling.',
      '2,4-DNP detects carbonyl; Tollens/Fehling sort aldehydes from ketones; NaHCO$_3$ effervescence flags carboxyl.',
      'Alcoholic OH \u2192 red with CAN; phenolic OH \u2192 violet with FeCl$_3$ and white ppt with bromine water; 1\u00b0 amines \u2192 carbylamine\u2019s foul isocyanide.',
      'Always destroy CN$\u2013$/S$^{2\u2013}$ with HNO$_3$ before the silver-nitrate halogen test.',
    ],
    quiz: [
      {
        q: 'A Prussian blue colouration in Lassaigne\u2019s test confirms the presence of',
        options: ['sulphur', 'nitrogen', 'chlorine', 'phosphorus'],
        answer: 1,
        explanation: 'Step 1: Fusion converts nitrogen to NaCN. Step 2: CN$\u2013$ + Fe$^{2+}$ builds $[\\text{Fe(CN)}_6]^{4\u2013}$. Step 3: Fe$^{3+}$ then yields Prussian blue, $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$. Step 4: Sulphur answers to sodium nitroprusside, halogens to AgNO$_3$ — different channels entirely.'
      },
      {
        q: 'Sodium fusion extract treated with sodium nitroprusside gives a violet colouration. The compound contains',
        options: ['nitrogen', 'sulphur', 'iodine', 'both nitrogen and sulphur'],
        answer: 1,
        explanation: 'Step 1: Fusion turns sulphur into Na$_2$S. Step 2: S$^{2\u2013}$ + $[\\text{Fe(CN)}_5\\text{NO}]^{2\u2013}$ forms the violet $[\\text{Fe(CN)}_5\\text{NOS}]^{4\u2013}$ complex. Step 3: Nitrogen alone would need the Prussian-blue route; N + S together gives blood red with Fe$^{3+}$. Step 4: Iodine is detected with AgNO$_3$ after nitric acid.'
      },
      {
        q: 'Lassaigne\u2019s extract is acidified with HNO$_3$, boiled and treated with AgNO$_3$: a white precipitate soluble in ammonium hydroxide appears. The element is',
        options: ['chlorine', 'bromine', 'iodine', 'nitrogen'],
        answer: 0,
        explanation: 'Step 1: Only halides precipitate with Ag$^+$ after the acid boil. Step 2: A white AgCl precipitate forms with chloride. Step 3: Its solubility in NH$_4$OH (diamminesilver complex) is the chlorine signature — AgBr is pale yellow and AgBr/AgI resist ammonia. Step 4: The HNO$_3$ boil had already removed nitrogen\u2019s cyanide as HCN.'
      },
      {
        q: 'A carbonyl compound gives an orange precipitate with 2,4-DNP but no silver mirror with Tollens\u2019 reagent. The compound is',
        options: ['an aliphatic aldehyde', 'a ketone', 'a carboxylic acid', 'an alcohol'],
        answer: 1,
        explanation: 'Step 1: 2,4-DNP condenses with any aldehyde or ketone carbonyl to a hydrazone. Step 2: Tollens\u2019 test is passed only by aldehydes, whose \u2013CHO oxidises easily. Step 3: A negative mirror after a positive DNP means the carbonyl is not an aldehyde — it is a ketone. Step 4: Carboxylic acids and alcohols give no DNP precipitate at all.'
      }
    ]
  },
]
