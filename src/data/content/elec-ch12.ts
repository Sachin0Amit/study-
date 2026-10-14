import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE ELECTRONICS MASTER LIBRARY — Chapter 12: Semiconductor Devices and Diodes
// Hughes, "Electrical & Electronic Technology" 12e — ch 19 (semiconductor
// materials, junction diode), 20.1–20.6 (rectifiers, smoothing, Zener), plus
// practical device lore from Horowitz & Hill, "The Art of Electronics" 3e ch 1.
// All worked-example numbers are traced from the books and recomputed; where
// the 12th edition prints a slip, the corrected arithmetic is carried and the
// printed value noted. Math renders through KaTeX ($...$ / $$...$$).
// ============================================================================

export const elecCh12Content: SectionContent[] = [
  // ------------------------------------------------------------------ 12.1
  {
    sectionId: 'elec-ch12-s1',
    readingTime: 8,
    intro:
      'Every device in the second half of this book grows from a sliver of purified sand. Hughes begins with the atom itself — the nucleus with its protons and neutrons, and the orbiting electrons — and shows why silicon and germanium, each with exactly four valence electrons, bind into crystals that are perfect insulators at absolute zero and feeble conductors at room temperature. The engineering starts with controlled poisoning: one dopant atom in a hundred million turns the crystal into n-type or p-type material, and the diode, transistor and integrated circuit all grow from that single trick.',
    objectives: [
      'Describe the atomic structure of silicon and germanium, their shells and their diamond lattice',
      'Explain covalent bonding in the crystal and why pure semiconductor is a perfect insulator at absolute zero',
      'Explain intrinsic semiconduction: thermal pair generation, recombination and the mass-action relation',
      'Explain how pentavalent donors and trivalent acceptors create n-type and p-type material',
      'Identify majority and minority carriers in doped material and quantify their enormous ratio',
    ],
    concepts: [
      {
        term: 'Atomic structure and free electrons',
        kind: 'definition',
        statement:
          'Every atom consists of a relatively massive positive **nucleus** (protons and, except in hydrogen, neutrons) surrounded by orbiting electrons: each electron has a mass of $9.11 \\times 10^{-31}$ kg and a charge of $-1.602 \\times 10^{-19}$ C, and each proton carries an equal positive charge $e$ at 1836 times the mass.',
        detail:
          'Electrons occupy shells — helium’s two sit in the K-shell, carbon’s six arrange as two in K and four in L — and the outermost electrons, feeling the weakest pull from the nucleus, are the ones that can be detached. In a metal the outer electrons feel neighbouring nuclei almost equally and wander free: these **free (conduction) electrons** need only a slight external influence to drift as a current. An atom that has lost or gained electrons is an **ion** — positive if electrons were lost.',
      },
      {
        term: 'Silicon, germanium and the tetravalent crystal',
        kind: 'definition',
        statement:
          'Silicon and germanium are **tetravalent**: each atom has four valence electrons (silicon: 14 protons and 14 neutrons in the nucleus, 14 electrons around it, four of them valence) and crystallizes in the cubic **diamond lattice**, with a repeating cube side of about $2.7 \\times 10^{-10}$ m for silicon and $2.8 \\times 10^{-10}$ m for germanium.',
        detail:
          'An isolated tetravalent atom is drawn as a circle — the ion carrying a net positive charge of $4e$ — with four valence electrons attached. In the lattice, one atom sits at the centre of an imaginary cube and four more at diagonally opposite corners of its faces. "Pure" here is an extreme demand: material counts as an intrinsic semiconductor only while impurities remain below about one part in $10^{10}$.',
      },
      {
        term: 'Covalent bonds',
        kind: 'definition',
        statement:
          'In the crystal each tetravalent ion shares its four valence electrons with its four neighbours, so every ion is surrounded by **eight electrons in four electron-pairs** — the **covalent bonds** that hold the crystal together; at absolute zero (−273 °C) there are no free electrons at all, and pure silicon or germanium behaves as a perfect insulator.',
        detail:
          'Each bond is a pair of electrons, one from each of the two linked atoms, circulating around both. The bonds are so strong that thermal energy at ordinary temperatures breaks only a fraction of them — which is why the first approximation treats pure silicon and germanium as insulators, with all the useful properties supplied by the controlled impurities introduced next.',
      },
      {
        term: 'Intrinsic semiconduction and mass action',
        kind: 'law',
        statement:
          'At ordinary temperatures thermal agitation breaks some covalent bonds, generating **electron–hole pairs** that continuously generate and recombine; in pure (intrinsic) material the two carrier densities are equal, $n = p = n_i$, and in any equilibrium material their product is fixed: $$np = n_i^{2}.$$ For silicon at 300 K, $n_i \\approx 1.5 \\times 10^{16}$ per cubic metre.',
        detail:
          'Each broken bond contributes two carriers: the freed electron and the vacancy it leaves, which conducts as a mobile positive charge. Hughes quotes pair lifetimes of about 50 ms in silicon and 100 ms in germanium — recombination is a continuous, temperature-dependent process, so the higher the temperature the more pairs and the lower the intrinsic resistance: semiconductors behave oppositely to metals here. The mass-action law is the accounting identity that makes doping predictable.',
      },
      {
        term: 'n-type: donors',
        kind: 'definition',
        statement:
          'Doping silicon with a minute trace — of order **one part in 10⁸** — of a pentavalent element (phosphorus, arsenic, antimony) puts one such atom into the lattice for each free electron released: four of its five valence electrons form covalent bonds and the fifth wanders free, leaving a **fixed positive ion**; the crystal stays neutral, and the impurity atoms are termed **donors**.',
        detail:
          'The free electron’s motion is random — accelerated between collisions with atoms — but a density gradient never builds up, and with no applied field there is no net drift. Apply a p.d. across electrodes S and T on the crystal, S positive: a drift toward S is superimposed on the random walk, and electrons enter the semiconductor from T at exactly the rate they leave at S. The more impurity, the more free electrons per unit volume and the greater the conductivity.',
      },
      {
        term: 'p-type: acceptors and holes',
        kind: 'definition',
        statement:
          'Doping with a trivalent element (indium, gallium, boron, aluminium) leaves one covalent bond incomplete — a vacancy called a **hole**; the hole can attract a covalent electron from a neighbouring silicon atom, filling itself and creating a new hole there, so the hole moves through the crystal as a mobile positive charge $+e$ while each completed trivalent atom remains a **fixed negative ion**; such impurities are **acceptors**.',
        detail:
          'The atom associated with a hole is an ion of net charge $+e$ (nucleus $4e$, only three valence electrons remaining with it), so hole motion is genuinely the motion of positive charge. Left alone, holes wander randomly about half as fast as free electrons, which move with comparative ease. With S positive and T negative across a p-type bar, holes drift through the crystal in the conventional current direction — from the positive electrode toward the negative — being created at S (as electrons leave into S) at exactly the rate they are neutralized at T.',
      },
      {
        term: 'Majority and minority carriers',
        kind: 'notation',
        statement:
          'The carriers supplied by doping vastly outnumber those generated thermally: in **n-type** material electrons are the **majority carriers** and holes the **minority carriers**; in **p-type** material the roles reverse — holes majority, electrons minority.',
        detail:
          'The thermally liberated pairs exist in both materials regardless of doping, but at room temperature their numbers are minute beside the doping density. Minority carriers are not a curiosity: they carry the whole reverse current of a diode (next section) and set the leakage that doubles with every few degrees of temperature rise.',
      },
      {
        term: 'Diffusion versus drift',
        kind: 'insight',
        statement:
          'Carriers move by **diffusion** whenever there is a difference in concentration between adjacent regions, and by **drift** whenever there is a difference of potential between two regions — the distinction that governs everything the p–n junction does next.',
        detail:
          'Hughes’s sentence is worth memorizing because the junction diode is built on it: diffusion is driven by concentration gradients, drift by electric fields. In the doped crystal under bias, both majority-carrier flows are drift; at the junction of the next section, diffusion initiates the barrier that drift then balances.',
      },
    ],
    examples: [
      {
        title: 'How many majority carriers per minority carrier?',
        problem:
          'Silicon has about $5 \\times 10^{28}$ atoms per cubic metre. Hughes’s typical doping is one donor atom in $10^8$. With $n_i \\approx 1.5 \\times 10^{16}$ per cubic metre at 300 K, compare the electron and hole densities in the doped n-type crystal.',
        steps: [
          { label: 'Step 1: Donor density', text: 'One donor per $10^8$ silicon atoms gives $n \\approx 5 \\times 10^{28}/10^8 = 5 \\times 10^{20}$ free electrons per cubic metre.' },
          { label: 'Step 2: Apply mass action', text: 'The hole density follows from $np = n_i^{2}$: $p = n_i^{2}/n = (1.5 \\times 10^{16})^{2}/(5 \\times 10^{20})$.' },
          { label: 'Step 3: Evaluate', text: '$p = 2.25 \\times 10^{32}/5 \\times 10^{20} = 4.5 \\times 10^{11}$ holes per cubic metre.' },
          { label: 'Step 4: The ratio', text: 'Majority to minority: $n/p = 5 \\times 10^{20}/4.5 \\times 10^{11} \\approx 1.1 \\times 10^{9}$ — electrons outnumber holes by more than a billion to one.' },
        ],
        result:
          'A doping of one part in $10^8$ leaves holes at only $4.5 \\times 10^{11}$ per cubic metre against $5 \\times 10^{20}$ electrons: the minority population is about one in a billion, yet those few holes will carry the entire reverse current of the junction diode.',
      },
      {
        title: 'Thermal doubling of minority-carrier current',
        problem:
          'Hughes notes that the reverse current of a silicon junction practically doubles for every 8 °C rise in temperature. A diode’s reverse current is 10 nA at 25 °C. Estimate its value at 85 °C.',
        steps: [
          { label: 'Step 1: Count the doublings', text: 'The temperature rise is $85 - 25 = 60$ °C, which is $60/8 = 7.5$ doubling intervals.' },
          { label: 'Step 2: Scale the current', text: 'Each doubling multiplies the current by two, so $I(85\\,^\\circ\\mathrm{C}) = 10\\ \\mathrm{nA} \\times 2^{7.5}$.' },
          { label: 'Step 3: Evaluate', text: '$2^{7.5} = 2^7 \\times \\sqrt{2} = 128 \\times 1.41 \\approx 181$, so the reverse current grows to about $1.8\\ \\mu\\mathrm{A}$.' },
        ],
        result:
          'A mere 60 °C of warming multiplies leakage by a factor of about 180 — from 10 nA to 1.8 μA. This is why silicon devices are specified to only 150–200 °C, and why the reverse current of the germanium diode, already a hundred times larger, doubles every 10 °C.',
      },
    ],
    keyTakeaways: [
      'Silicon and germanium are tetravalent: four valence electrons per atom, crystallizing in the diamond lattice with cube sides near $2.7 \\times 10^{-10}$ m (Si) and $2.8 \\times 10^{-10}$ m (Ge).',
      'Covalent bonds share electron pairs — eight electrons around each ion — and at absolute zero pure silicon or germanium is a perfect insulator; "pure" means impurities below one part in $10^{10}$.',
      'Thermal agitation generates electron–hole pairs continuously, and mass action fixes their product: $np = n_i^{2}$, with $n_i \\approx 1.5 \\times 10^{16}\\ \\mathrm{m^{-3}}$ for silicon at 300 K.',
      'Pentavalent donors (P, As, Sb) at one part in $10^8$ give n-type material — fixed positive ions plus free electrons; trivalent acceptors (In, Ga, B, Al) give p-type material — fixed negative ions plus mobile holes.',
      'Majority carriers come from doping; minority carriers from thermal pair generation — outnumbered a billion to one in typical n-type silicon, yet responsible for all reverse conduction.',
      'Diffusion is driven by concentration differences, drift by potential differences — the two mechanisms that will build the p–n junction’s barrier.',
    ],
    quiz: [
      {
        q: 'Silicon is doped with a trace of antimony. The majority carriers are:',
        options: ['Holes supplied by the antimony', 'Electrons supplied by the silicon', 'Electrons donated by the antimony’s fifth valence electron', 'Holes created by thermal agitation'],
        answer: 2,
        explanation:
          'Antimony is pentavalent: four of its five valence electrons complete the covalent bonds and the fifth is donated as a free electron, leaving a fixed positive ion — an n-type (negative-type) semiconductor.',
      },
      {
        q: 'A trivalent acceptor atom embedded in the silicon lattice carries, once its bonds are completed, a net charge of:',
        options: [`$+e$`, `$-e$`, `$+3e$`, 'Zero'],
        answer: 1,
        explanation:
          'With all four covalent bonds completed the trivalent atom holds four valence electrons against its $3e$ nuclear charge of valence — a fixed negative ion of $-e$, balanced by the mobile positive hole it released into the crystal.',
      },
      {
        q: 'At absolute zero (−273 °C), pure silicon is:',
        options: ['A good conductor', 'A perfect insulator — no covalent bonds are broken', 'A superconductor', 'A semiconductor with resistance depending on doping'],
        answer: 1,
        explanation:
          'All valence electrons remain locked in covalent bonds at absolute zero, so there are no free carriers of either sign: perfect insulation. Conduction appears only as thermal energy begins breaking bonds.',
      },
      {
        q: 'In p-type silicon, the minority carriers are:',
        options: ['Holes', 'Electrons', 'Negative ions', 'Donor ions'],
        answer: 1,
        explanation:
          'Doping with acceptors makes holes the majority carriers; the thermally generated electron–hole pairs still exist, so electrons remain as a small minority population — the carriers that will conduct under reverse bias.',
      },
      {
        q: 'An n-type crystal has electron density $n = 5 \\times 10^{20}\\ \\mathrm{m^{-3}}$. With $n_i = 1.5 \\times 10^{16}\\ \\mathrm{m^{-3}}$, the hole density is:',
        options: [`$5 \\times 10^{20}\\ \\mathrm{m^{-3}}$`, `$4.5 \\times 10^{11}\\ \\mathrm{m^{-3}}$`, `$1.5 \\times 10^{16}\\ \\mathrm{m^{-3}}$`, `$2.25 \\times 10^{32}\\ \\mathrm{m^{-3}}$`],
        answer: 1,
        explanation:
          'Mass action: $p = n_i^{2}/n = (1.5 \\times 10^{16})^{2}/(5 \\times 10^{20}) = 4.5 \\times 10^{11}\\ \\mathrm{m^{-3}}$ — a billion times fewer holes than electrons.',
      },
    ],
  },

  // ------------------------------------------------------------------ 12.2
  {
    sectionId: 'elec-ch12-s2',
    readingTime: 9,
    intro:
      'Join a p-type crystal to an n-type crystal and something remarkable happens at the seam: carriers diffuse across, uncover fixed ions, and the junction charges itself into a barrier that current can pass in only one direction. Hughes builds the depletion layer and its barrier potential first with pictures, then with the Shockley equation — the exponential diode law that everything from rectifiers to transistor biasing rests on. This section adds the practical models that The Art of Electronics recommends for everyday design.',
    objectives: [
      'Explain how diffusion and drift create the depletion layer and the potential barrier at a p–n junction',
      'Describe forward and reverse bias in terms of carrier motion, and define the saturation current',
      'Apply the Shockley diode equation, including its 38.6 per volt exponent at room temperature',
      'Use ideal, offset and piecewise-linear diode models for circuit work',
      'Compare silicon and germanium static characteristics and their temperature behaviour',
    ],
    concepts: [
      {
        term: 'The junction: diffusion meets drift',
        kind: 'definition',
        statement:
          'When p-type and n-type regions share one crystal, holes **diffuse** from p into n and electrons from n into p — diffusion being the response to a concentration difference — leaving behind a thin region stripped of mobile carriers: the **depletion layer**, whose uncovered fixed ions (negative on the p side, positive on the n side) form a **potential barrier** that halts further migration.',
        detail:
          'Both regions start neutral: mobile holes balanced by fixed negative ions on the p side, mobile electrons balanced by fixed positive ions on the n side. As carriers cross, region A (n-side edge of the junction) acquires excess negative charge and region B (p-side edge) excess positive charge; these repel further crossing. Hughes’s dictum from the previous section does the work: diffusion responds to concentration differences, drift to potential differences — at equilibrium the barrier’s drift exactly cancels the diffusion.',
      },
      {
        term: 'The barrier potential',
        kind: 'insight',
        statement:
          'The depletion layer’s barrier must be overcome before meaningful forward current flows: a silicon junction conducts appreciably at about **0.7 V** of forward bias — roughly **double** the corresponding germanium value, per Hughes’s comparison of the two static characteristics.',
        detail:
          'This 0.6–0.7 V knee is visible in Hughes’s silicon characteristic curves as the voltage at which current turns steeply upward; germanium turns on near 0.3 V. The offset model of a diode — a 0.7 V battery in series with a small resistance — is the everyday engineering shorthand that this physics justifies.',
      },
      {
        term: 'Forward bias',
        kind: 'method',
        statement:
          'With the p side made positive (S positive relative to T), the field drives **holes toward the junction in the p-region and electrons toward the junction in the n-region**; the carriers combine at the junction while the external circuit supplies an electron at T and accepts one at S, sustaining hole flow on one side and electron flow on the other.',
        detail:
          'For each recombination, an electron is liberated from a covalent bond near the positive plate S and enters that plate, creating a new hole that travels through the p-material to the junction; simultaneously an electron from the negative plate T enters the n-region and moves to the junction. The diode current is thus hole flow in the p-region, electron flow in the n-region, and a combination of both in the vicinity of the junction — the barrier is flattened, not removed.',
      },
      {
        term: 'Reverse bias and the saturation current',
        kind: 'definition',
        statement:
          'With the polarity reversed, holes are drawn to the negative electrode and electrons to the positive one, widening the **depletion layer** until it contains virtually no carriers: the junction behaves as an insulator, and only the thermally generated **minority carriers** sustain a small, nearly bias-independent **saturation current** $I_s$.',
        detail:
          'Between about 0.1 V of reverse bias and the breakdown voltage, the reverse current of a silicon diode stays close to $I_s$ — a few microamperes at most. In practice the current rises somewhat with bias, mostly through surface leakage; in a diode with negligible leakage it follows the ideal equation below. Raise the reverse voltage far enough and breakdown arrives — constructively, in the Zener diode of Section 12.4.',
      },
      {
        term: 'The Shockley diode equation',
        kind: 'law',
        statement:
          'The static characteristic of a junction diode with negligible surface leakage is $$i = I_s\\left(e^{qv/kT} - 1\\right),$$ where $q = 1.6 \\times 10^{-19}$ C is the electronic charge, $k = 1.38 \\times 10^{-23}$ J/K is Boltzmann’s constant and $T$ is the absolute temperature; at 300 K the exponent is $38.6v$, so $$i \\approx 10\\left(e^{38.6v} - 1\\right)\\ \\mathrm{nA}$$ for $I_s = 10$ nA.',
        detail:
          'The numbers are worth feeling in the fingers: at $v = +0.3$ V the current is about 1.1 mA; at +0.4 V, about 51 mA; and at $-0.1$ V, $e^{-3.86} \\approx 0.021$, so $i \\approx -9.8$ nA — within 2 per cent of $-I_s$: saturation is essentially complete at a tenth of a volt of reverse bias. Because the exponent is 38.6 per volt, every 60 mV of extra forward bias multiplies the current by ten ($38.6 \\times 0.06 \\times \\log_{10} e \\approx 1$). At 0.7 V the equation alone predicts absurd currents — real devices there are limited by bulk series resistance, which is why the practical knee sits near 0.7 V rather than anywhere the pure exponential would suggest.',
      },
      {
        term: 'Practical diode models',
        kind: 'method',
        statement:
          'For circuit work the diode is layered into models: the **ideal switch** (zero forward drop, infinite reverse resistance); the **offset model** — a 0.7 V source in series with a small forward resistance; and the **piecewise-linear model**, such as Hughes’s exercise diode that conducts nothing below 600 mV and then behaves as a constant 20 Ω.',
        detail:
          'The Art of Electronics counsels exactly this hierarchy: use the ideal switch for rough reasoning, the 0.6–0.7 V offset for most hand analysis, and refine with resistance when currents are large. For small-signal work the diode’s incremental (dynamic) resistance follows from differentiating the Shockley equation: $r_d = kT/qI \\approx 26\\ \\Omega$ at 1 mA — halving with every doubling of current, a fact the tuned amplifiers of Chapter 13 exploit.',
      },
      {
        term: 'Silicon versus germanium characteristics',
        kind: 'insight',
        statement:
          'Comparing the static characteristics: the silicon diode’s **forward voltage drop is roughly double** germanium’s; its reverse current is about **a hundredth** of germanium’s at the same temperature and voltage — and shows little saturation, growing roughly as the square root of reverse voltage until breakdown; silicon withstands higher reverse voltages and junction temperatures of 150–200 °C against germanium’s 75–90 °C.',
        detail:
          'Hughes’s germanium rectifier withstood a peak inverse voltage of about 100 V at 20 °C ambient, and its reverse current roughly doubles every 10 °C rise — silicon’s doubles every 8 °C but from a far smaller base. These comparisons are why silicon conquered the industry: less leakage, more voltage, more heat tolerance.',
      },
      {
        term: 'Construction of a junction diode',
        kind: 'method',
        statement:
          'One classic construction: a thin **n-type wafer** — its area proportional to the current rating — soldered to a copper plate, with an **indium bead** alloyed onto its upper face by heat treatment to form the p-region; a copper electrode is soldered to the bead during the same treatment, and the element is hermetically sealed in an opaque container against light and moisture.',
        detail:
          'The opaque canister matters doubly: light generates electron–hole pairs exactly as heat does (the photodiode of Section 12.4 makes a virtue of this), and moisture corrodes the junction. Modern silicon diodes use planar diffusion for the same geometry, but the alloy-junction picture explains the diode symbol’s arrow-and-bar: easy flow toward the bar, blocked flow away from it.',
      },
    ],
    examples: [
      {
        title: 'Working the diode equation — Hughes’s $I_s = 10$ nA silicon junction',
        problem:
          'A silicon junction diode with negligible surface leakage has a saturation current of 10 nA. Using the Shockley equation at 300 K, evaluate the current at forward biases of 0.3 V and 0.4 V, and at a reverse bias of 0.1 V.',
        steps: [
          { label: 'Step 1: Assemble the exponent', text: 'At $T = 300$ K, $q/kT = 1.6 \\times 10^{-19}/(1.38 \\times 10^{-23} \\times 300) = 38.6$ per volt — Hughes’s relation [19.2], $i = 10(e^{38.6v} - 1)$ nA.' },
          { label: 'Step 2: Forward 0.3 V', text: 'The exponent is $38.6 \\times 0.3 = 11.58$, and $e^{11.58} \\approx 1.07 \\times 10^{5}$, so $i \\approx 10\\ \\mathrm{nA} \\times 1.07 \\times 10^{5} \\approx 1.1\\ \\mathrm{mA}$.' },
          { label: 'Step 3: Forward 0.4 V', text: 'Now the exponent is 15.44, $e^{15.44} \\approx 5.1 \\times 10^{6}$, so $i \\approx 51\\ \\mathrm{mA}$ — ten times more current for 100 mV more bias: the 60 mV per decade rule in action (and 0.3 V plus two of those decades is 0.42 V).' },
          { label: 'Step 4: Reverse 0.1 V', text: 'The exponent is $-3.86$, $e^{-3.86} \\approx 0.021$, so $i = 10\\,(0.021 - 1) = -9.8$ nA — within 2 per cent of $-I_s$: reverse saturation is effectively reached at just a tenth of a volt.' },
        ],
        result:
          'About 1.1 mA at 0.3 V, 51 mA at 0.4 V and $-9.8$ nA at $-0.1$ V: a billion-fold change of current over seven tenths of a volt — the exponential that makes the diode both a rectifier and (differentially) a 26 Ω-at-1 mA resistor.',
      },
      {
        title: 'A piecewise-linear diode — Hughes’s Exercise 19.10 device',
        problem:
          'A silicon diode has effectively infinite reverse resistance. In the forward direction no current flows until the voltage exceeds 600 mV, whereupon the junction behaves as a constant resistance of 20 Ω. Determine the current and the dissipation at a forward voltage of 0.72 V, and at 1.0 V.',
        steps: [
          { label: 'Step 1: State the model', text: 'Below 0.6 V: open circuit. Above 0.6 V: the terminal voltage is the 0.6 V knee plus the drop on 20 Ω, so $i = (v - 0.6)/20$ in amperes when $v$ is in volts.' },
          { label: 'Step 2: Current at 0.72 V', text: '$i = (0.72 - 0.60)/20 = 0.12/20 = 6\\ \\mathrm{mA}$.' },
          { label: 'Step 3: Dissipation at 0.72 V', text: '$P = vi = 0.72 \\times 6 \\times 10^{-3} = 4.3\\ \\mathrm{mW}$ — of which $i^{2} \\times 20 = 0.72$ mW is in the resistance and 3.6 mW at the knee.' },
          { label: 'Step 4: Current at 1.0 V', text: '$i = (1.0 - 0.6)/20 = 0.4/20 = 20\\ \\mathrm{mA}$, with $P = 20\\ \\mathrm{mW}$ — the piecewise model’s knee plus slope is doing the work the full exponential did in the previous example, at a fraction of the effort.' },
        ],
        result:
          '6 mA at 0.72 V (4.3 mW) and 20 mA at 1.0 V (20 mW). The piecewise-linear model is the engineer’s daily tool: it captures the 0.6 V threshold and the internal resistance without exponentials.',
      },
    ],
    keyTakeaways: [
      'Diffusion across the junction uncovers fixed ions and creates the depletion layer — a potential barrier that equilibrates the tendency of carriers to diffuse.',
      'Forward bias flattens the barrier: holes flow in the p-region, electrons in the n-region, recombining at the junction; reverse bias widens the depletion layer until only minority carriers remain, giving the tiny saturation current $I_s$.',
      'The Shockley equation $i = I_s(e^{qv/kT} - 1)$ governs the static characteristic; at 300 K the exponent is $38.6v$, so current scales tenfold per 60 mV and saturates within 2 per cent of $-I_s$ by $-0.1$ V.',
      'Practical models ladder from ideal switch to 0.7 V offset to piecewise knee-plus-resistance; the small-signal resistance is $r_d \\approx 26$ mV divided by the current.',
      'Silicon beats germanium on every axis that matters: half the forward drop next door, one-hundredth the reverse current, higher reverse voltage ratings and 150–200 °C against 75–90 °C of temperature tolerance.',
      'Reverse current roughly doubles every 8 °C for silicon (every 10 °C for germanium) — leakage is a thermal design constraint, not a footnote.',
    ],
    quiz: [
      {
        q: 'The forward "knee" voltage of a silicon junction diode is approximately:',
        options: ['0.2 V', '0.3 V', '0.7 V', '1.5 V'],
        answer: 2,
        explanation:
          'Silicon turns on near 0.7 V — roughly double germanium’s 0.3 V, which is Hughes’s own way of stating the comparison between the two static characteristics.',
      },
      {
        q: 'In the Shockley equation at room temperature, each additional 60 mV of forward bias multiplies the current by about:',
        options: ['2', 'e (2.72)', '10', '100'],
        answer: 2,
        explanation:
          'The exponent $qv/kT = 38.6v$ grows by $38.6 \\times 0.06 \\approx 2.3 = \\ln 10$ for every 60 mV, so the current climbs one decade per 60 mV — the steepest fact of diode life.',
      },
      {
        q: 'Under reverse bias, the current that flows through a p–n junction is carried by:',
        options: ['The majority carriers, driven harder', 'The few thermally generated minority carriers on each side', 'Ions migrating through the crystal', 'Holes tunnelling from the metal contact'],
        answer: 1,
        explanation:
          'Reverse bias widens the depletion layer until it is empty of majority carriers; only the thermally generated minority carriers — electrons in p-material, holes in n-material — drift across, giving the small saturation current $I_s$.',
      },
      {
        q: 'Compared with a germanium diode at the same temperature and voltage, a silicon diode’s reverse current is approximately:',
        options: ['A hundred times larger', 'About the same', 'A hundredth', 'Ten times larger'],
        answer: 2,
        explanation:
          'Hughes’s comparison: silicon’s reverse current is roughly one-hundredth of germanium’s — though it shows less saturation, growing about as the square root of reverse voltage until breakdown approaches.',
      },
      {
        q: 'A diode’s incremental (dynamic) resistance at 1 mA forward current, near room temperature, is about:',
        options: ['26 Ω', '260 Ω', '0.026 Ω', '600 Ω'],
        answer: 0,
        explanation:
          'Differentiating the Shockley equation gives $r_d = kT/qI \\approx 26\\ \\mathrm{mV}/I$: at 1 mA that is 26 Ω, halving for every doubling of current.',
      },
      // PYQ-pattern: GATE 2016 — diode equation forward current (rephrased, values changed)
      {
        q: 'A silicon junction at room temperature has reverse saturation current 10 pA and thermal voltage 25.85 mV. With 0.60 V forward bias and ideality factor unity, the forward current is closest to:',
        options: ['1.2 mA', '12 mA', '120 mA', '1.2 A'],
        answer: 2,
        explanation: 'Step 1 — Given: $I_{s} = 10$ pA, $V_{D} = 0.60$ V, $V_{T} = 25.85$ mV, $η = 1$. Step 2 — Governing law: $I_{D} = I_{s}(e^{\\frac{V_{D}}{η V_{T}}} - 1)$, exponential because the barrier falls linearly with applied volts. Step 3 — Algebra: exponent $\\frac{0.60}{0.02585} \\approx 23.21$; $e^{23.21} \\approx 1.20 \\times 10^{10}$; $I_{D} \\approx 10^{-11} \\times 1.20 \\times 10^{10} = 0.12$ A, that is $120$ mA. Step 4 — Sanity check: hundreds of millivolts giving hundreds of milliamperes matches power-junction scales, a $60$ mV rise would decade the current, and reverse bias would collapse it to $-I_{s}$. Step 5 — Distractor analysis: 12 mA and 1.2 mA each miss a decade of the exponent, while 1.2 A adds one decade too many. Step 6 — Conclude: about 120 mA flows.',
      },
    ],
  },

  // ------------------------------------------------------------------ 12.3
  {
    sectionId: 'elec-ch12-s3',
    readingTime: 10,
    intro:
      'A diode passes current in one direction only, so an alternating voltage forces it to conduct on just one half-cycle — or, with more diodes, on both. Hughes’s rectifier chapter turns that single fact into d.c. supplies: half-wave and full-wave circuits with their average and r.m.s. values, the bridge that gets the transformer working full time, and the smoothing capacitor that converts pulsating d.c. into something usable. The Art of Electronics then adds the supply-builder’s reality checks — ripple arithmetic, peak currents and worst-case design — that turn textbook rectifiers into working power supplies.',
    objectives: [
      'Derive the mean and r.m.s. load current and voltage for half-wave and full-wave rectifiers',
      'Explain the bridge rectifier’s advantages over the centre-tapped full-wave circuit, and compare their peak inverse voltages',
      'Analyse the capacitor-input smoothing filter: conduction angle, exponential discharge and the CR criterion',
      'Compute ripple factors and size a smoothing capacitor for a specified ripple',
      'Apply worst-case supply design wisdom from The Art of Electronics',
    ],
    concepts: [
      {
        term: 'Rectification and the ideal diode',
        kind: 'definition',
        statement:
          '**Rectification** is the process of obtaining unidirectional current or voltage from an alternating supply; the ideal diode has zero forward voltage drop and infinite reverse resistance, so the loop equation of the half-wave circuit is $v = v_d + iR$, with the whole supply voltage appearing across the load while conducting and across the diode while blocked.',
        detail:
          'A single diode in series with the load passes current on alternate half-cycles only: half-wave rectification. The load current and load voltage are unidirectional — "direct", though the term is usually reserved for steady quantities. Real diode characteristics (Section 12.2) add a small forward drop during conduction; the idealized characteristic sets the analysis pattern that all the averages below build on.',
      },
      {
        term: 'Half-wave rectifier averages',
        kind: 'law',
        statement:
          'For a half-wave rectifier supplying $v = V_m \\sin\\omega t$ to a resistive load, $$I_{\\mathrm{dc}} = \\frac{I_m}{\\pi} = 0.318\\,I_m, \\qquad I_{\\mathrm{rms}} = \\frac{I_m}{2},$$ with matching voltage relations $V_{\\mathrm{dc}} = V_m/\\pi$ and $V_{\\mathrm{rms}} = V_m/2$; the maximum efficiency is $4/\\pi^{2} = 0.405$.',
        detail:
          'The mean is taken over the full period (the diode conducts only from 0 to $\\pi$); the efficiency compares the d.c. power in the load with the total power $I_{\\mathrm{rms}}^{2}(r_d + R)$, so any forward diode resistance drags 40.5 per cent downward. The **peak inverse voltage (PIV)** — the largest reverse voltage across the diode, which must stay below breakdown — equals approximately the peak supply voltage $V_m$, since the reverse resistance is much greater than the load resistance.',
      },
      {
        term: 'Full-wave rectifier network',
        kind: 'method',
        statement:
          'A transformer with a **centre tap** feeds two diodes that conduct on alternate half-cycles, delivering both halves of the wave to the load: $$I_{\\mathrm{dc}} = \\frac{2I_m}{\\pi} = 0.637\\,I_m, \\qquad I_{\\mathrm{rms}} = \\frac{I_m}{\\sqrt{2}},$$ with efficiency $8/\\pi^{2} = 0.81$ — but each diode must withstand a **PIV of $2V_m$**.',
        detail:
          'When A is positive with respect to the centre tap C, so is C positive with respect to B: diode $D_1$ conducts while $D_2$ blocks, and the roles reverse on the next half-cycle, the load current keeping one direction throughout. The ripple now repeats at twice the supply frequency — a fact the smoothing capacitor will exploit. The cost: the centre-tapped secondary uses each half of its winding only half of the time.',
      },
      {
        term: 'Bridge rectifier network',
        kind: 'method',
        statement:
          'Four diodes in a bridge conduct in diagonal pairs — $D_1$ and $D_3$ on one half-cycle, $D_2$ and $D_4$ on the other — giving full-wave output with the same averages and 81 per cent efficiency, but with **PIV of only $V_m$**, and either half the secondary turns for a given output or twice the output for a given diode rating.',
        detail:
          'At any instant two diodes conduct, so two forward drops appear in the path — the bridge’s only tax. The current drawn from the supply is purely alternating while the load current is unidirectional: the bridge separates the two halves of the transformer winding’s duty, using the winding all of the time and dispensing with the centre tap altogether.',
      },
      {
        term: 'Smoothing: the capacitor-input filter',
        kind: 'method',
        statement:
          'A capacitor across the load charges to nearly the supply peak and then discharges exponentially through the load, $$v_R = V\\,e^{-(t - t_2)/CR},$$ with the diode conducting only in a short interval around each voltage peak — requiring a time constant $CR$ much longer than the supply period to keep the ripple small.',
        detail:
          'The diode conducts while the supply voltage exceeds the load voltage; its current must supply both the load and the capacitor ($i_C = C\\,dv/dt$), and analysis of the cut-off gives $\\omega t_2 = \\pi - \\phi$ with $\\tan\\phi = \\omega CR$ — so for $\\omega CR \\gg 1$ the diode stops conducting almost exactly at the peak. The warning that travels with the formula: the peak diode current increases with $C$, and the maximum allowable diode peak current must not be exceeded. Full-wave circuits halve the discharge interval, roughly halving the ripple for the same capacitor.',
      },
      {
        term: 'Ripple factor',
        kind: 'law',
        statement:
          'The ripple factor measures the a.c. content of the rectified output, $$\\gamma = \\sqrt{\\left(\\frac{I_{\\mathrm{rms}}}{I_{\\mathrm{dc}}}\\right)^{2} - 1},$$ giving $\\gamma = 1.21$ for half-wave and $\\gamma = 0.482$ for full-wave rectification of a sine wave; with a smoothing capacitor the peak-to-peak ripple is estimated as $\\Delta V \\approx I_{\\mathrm{dc}}/f_r C$, with $f_r$ the ripple frequency (once the supply frequency for half-wave, twice for full-wave).',
        detail:
          'Half-wave: $\\sqrt{(0.5/0.318)^2 - 1} = \\sqrt{1.467} = 1.21$ — more a.c. than d.c. Full-wave: $\\sqrt{(0.707/0.637)^2 - 1} = 0.482$. The capacitor estimate follows from charge conservation: the capacitor loses $I_{\\mathrm{dc}}$ amps for about $1/f_r$ seconds between charging pulses, so $C\\,\\Delta V \\approx I_{\\mathrm{dc}}/f_r$. It is the formula The Art of Electronics wants you to carry in your head.',
      },
      {
        term: 'Other smoothing networks',
        kind: 'method',
        statement:
          'Beyond the single shunt capacitor, practical smoothing uses a **series inductor** (high impedance at ripple frequency, low resistance to d.c.), an **LC filter**, the **$\\pi$ filter** (capacitor–inductor–capacitor), and the **resistive filter** where a resistor replaces the inductor in low-current applications.',
        detail:
          'The design principle Hughes states: put a low impedance at the ripple frequency that presents high resistance to direct current (a capacitor) in parallel with the load, and a high impedance at the ripple frequency with low d.c. resistance (an inductor) in series with the load. The resistive filter trades some d.c. voltage for economy — the resistor drops direct voltage too — but a resistor is far cheaper than a ferromagnetic-cored inductor when currents are small.',
      },
      {
        term: 'Real-world supply wisdom',
        kind: 'insight',
        statement:
          'The Art of Electronics’ supply-building lore: size the ripple for the **worst case** — lowest a.c. line, maximum load — and verify that the trough of the ripple still leaves headroom for any regulator; expect the transformer secondary to read well above its rated voltage when lightly loaded; and remember that the rectifier current flows in short, tall pulses near the peaks.',
        detail:
          'The peak charging current is far larger than the d.c. output — the capacitor’s entire lost charge must be replaced in the brief conduction interval (Hughes’s $i_C = Cv$ observation in disguise) — so diodes are chosen by surge rating as well as average current, and transformer heating follows the r.m.s. of the spiky current, not its average. Mains tolerance of ±10 per cent on both sides of the line compounds with load variation: a supply that works only at nominal line and half load is not a supply, it is a demo.',
      },
    ],
    examples: [
      {
        title: 'Bridge rectifier from the mains — Hughes’s Example 20.1',
        problem:
          'The four diodes in a bridge rectifier have negligible forward resistances and infinite reverse resistances. The alternating supply is 230 V r.m.s. and the resistive load is 46.0 Ω. Calculate (a) the mean load current, (b) the rectifier efficiency.',
        steps: [
          { label: 'Step 1: Peak current', text: 'The peak supply voltage is $\\sqrt{2} \\times 230$ V, so $I_m = \\sqrt{2} \\times 230/46.0 = 7.07\\ \\mathrm{A}$.' },
          { label: 'Step 2: Mean load current', text: 'Full-wave averaging: $I_{\\mathrm{dc}} = 2I_m/\\pi = 2 \\times 7.07/\\pi = 4.5\\ \\mathrm{A}$.' },
          { label: 'Step 3: R.m.s. load current', text: '$I_{\\mathrm{rms}} = I_m/\\sqrt{2} = 7.07/1.414 = 5.0\\ \\mathrm{A}$.' },
          { label: 'Step 4: Efficiency', text: '$\\eta = I_{\\mathrm{dc}}^{2}R/I_{\\mathrm{rms}}^{2}R = 4.5^{2}/5.0^{2} = 20.25/25 = 0.81$ — the full-wave maximum, 81 per cent, because the diode forward resistances are nil.' },
        ],
        result:
          'A mean load current of 4.5 A at 81 per cent efficiency from a 230 V, 46 Ω bridge. Each diode needs a PIV rating of at least the peak supply, $\\sqrt{2} \\times 230 \\approx 325$ V.',
      },
      {
        title: 'Battery-charging rectifier — Hughes’s Example 20.2',
        problem:
          'In a battery-charging circuit, a diode with negligible forward resistance and infinite reverse resistance feeds a 100 V battery in series with a variable resistance R from a supply $v = 200\\sin\\omega t$ V. Find the value of R that gives a mean charging current of 1.0 A.',
        steps: [
          { label: 'Step 1: Find the conduction interval', text: 'The diode conducts only while the supply exceeds the battery: $200\\sin\\omega t > 100$, i.e. $\\sin\\omega t > 0.5$, so conduction runs from $\\omega t = \\pi/6$ to $5\\pi/6$.' },
          { label: 'Step 2: Instantaneous current during conduction', text: '$i = (200\\sin\\omega t - 100)/R$, and zero outside the interval.' },
          { label: 'Step 3: Set up the mean', text: 'Averaging over the full period: $1.0 = \\frac{1}{2\\pi R}\\int_{\\pi/6}^{5\\pi/6}(200\\sin\\omega t - 100)\\,d(\\omega t)$.' },
          { label: 'Step 4: Evaluate the integral', text: 'The sine term contributes $200[\\,-\\cos\\omega t\\,]$ between the limits $= 200\\sqrt{3}$; the constant term removes $100 \\times 2\\pi/3$. So the numerator is $200\\sqrt{3} - 200\\pi/3 \\approx 346.4 - 209.4 = 137.0$.' },
          { label: 'Step 5: Solve for R', text: '$R = 137.0/(2\\pi \\times 1.0) = 21.8\\ \\Omega$ — Hughes’s own $55.1 - 33.3 = 21.8\\ \\Omega$, where $200\\sqrt{3}/2\\pi = 55.1$ and $(200\\pi/3)/(2\\pi) = 33.3$.' },
        ],
        result:
          '$R = 21.8$ Ω. The diode conducts for only a third of each cycle, so the peak charging current is far above the 1 A mean — exactly the pulse-shaped rectifier current that diode surge ratings exist for.',
      },
      {
        title: 'Sizing the smoothing capacitor',
        problem:
          'A full-wave bridge runs from 50 Hz mains and must deliver about 12 V d.c. at 100 mA with no more than 1.2 V of peak-to-peak ripple. Size the smoothing capacitor, and check Hughes’s time-constant criterion.',
        steps: [
          { label: 'Step 1: Ripple frequency', text: 'Full-wave rectification doubles the ripple frequency: $f_r = 2 \\times 50 = 100$ Hz, so the capacitor is recharged every 10 ms.' },
          { label: 'Step 2: Apply the ripple estimate', text: '$\\Delta V \\approx I_{\\mathrm{dc}}/f_r C$, so the required capacitance is $C \\ge I_{\\mathrm{dc}}/(f_r\\,\\Delta V) = 0.1/(100 \\times 1.2) = 833\\ \\mu\\mathrm{F}$.' },
          { label: 'Step 3: Choose the standard value', text: 'The next standard value up is 1000 μF, which yields $\\Delta V = 0.1/(100 \\times 1000 \\times 10^{-6}) = 1.0\\ \\mathrm{V}$ of ripple — inside the specification.' },
          { label: 'Step 4: Check the time constant', text: 'The load resistance is $R = 12/0.1 = 120\\ \\Omega$, so $CR = 1000 \\times 10^{-6} \\times 120 = 0.12$ s — twelve times the 10 ms between charging pulses, comfortably satisfying Hughes’s $CR \\gg$ period criterion.' },
          { label: 'Step 5: Mind the peak current', text: 'The 100 mA removed between peaks is restored in a short pulse near each voltage maximum — the peak diode current is several times the mean, so the diodes’ surge rating, not their average rating, chooses the parts.' },
        ],
        result:
          'A 1000 μF capacitor holds the ripple to about 1 V peak-to-peak at full load — with the discharge so nearly linear that the exponential sag differs from the estimate by only a few per cent. Design at worst case: minimum line, maximum load.',
      },
    ],
    keyTakeaways: [
      'Half-wave rectification delivers $I_{\\mathrm{dc}} = I_m/\\pi = 0.318\\,I_m$ at up to 40.5 per cent efficiency, with the diode seeing a PIV of about $V_m$.',
      'Full-wave rectification doubles the harvest: $I_{\\mathrm{dc}} = 2I_m/\\pi = 0.637\\,I_m$ at up to 81 per cent efficiency — but the centre-tapped circuit demands a PIV of $2V_m$ from each diode.',
      'The bridge gets the same averages with PIV of only $V_m$, half the secondary turns and no centre tap — at the price of two forward drops in series with the load.',
      'Ripple factors are 1.21 (half-wave) and 0.482 (full-wave) before smoothing; the capacitor-input filter then obeys $\\Delta V \\approx I_{\\mathrm{dc}}/f_r C$ with $f_r$ at twice line frequency for full-wave circuits.',
      'The smoothing capacitor needs $CR$ far longer than the period, and its charging current flows in short tall pulses — the peak diode current grows with $C$.',
      'Worst-case supply design: lowest line, heaviest load sets the ripple trough; highest line, lightest load sets the peak voltage the filter and any regulator must survive.',
      'Series inductors, LC, $\\pi$ and RC sections extend smoothing when one capacitor is not enough — low impedance across the load, high impedance in series with it.',
    ],
    quiz: [
      {
        q: 'A half-wave rectifier delivers a peak load current $I_m$. Its mean load current is:',
        options: [`$0.5 I_m$`, `$I_m/\\pi = 0.318 I_m$`, `$2I_m/\\pi = 0.637 I_m$`, `$I_m/\\sqrt{2}$`],
        answer: 1,
        explanation:
          'Averaging the sine over the full period while the diode conducts only half of it: $I_{\\mathrm{dc}} = I_m/\\pi = 0.318\\,I_m$. The doubled value belongs to full-wave circuits, and $I_m/2$ is the half-wave r.m.s.',
      },
      {
        q: 'For the same transformer secondary voltage, compare the peak inverse voltage faced by the diodes of the centre-tapped full-wave circuit and the bridge:',
        options: [
          'Both circuits impose $2V_m$',
          'Both circuits impose $V_m$',
          'Centre-tap $2V_m$, bridge $V_m$',
          'Centre-tap $V_m$, bridge $2V_m$',
        ],
        answer: 2,
        explanation:
          'In the centre-tapped circuit the non-conducting diode sees the whole secondary — both halves — so $2V_m$; in the bridge each blocking diode sees only the supply peak $V_m$, one of several reasons bridges won.',
      },
      {
        q: 'The maximum theoretical rectification efficiency of a full-wave rectifier with ideal diodes is:',
        options: ['40.5 per cent', '50 per cent', '81 per cent', '100 per cent'],
        answer: 2,
        explanation:
          '$\\eta = (2/\\pi)^{2} \\times 2 = 8/\\pi^{2} = 0.81$: the d.c. power $I_{\\mathrm{dc}}^{2}R$ divided by the total $I_{\\mathrm{rms}}^{2}R$. Any diode forward resistance reduces it, which is why the half-wave ceiling is only $4/\\pi^{2} = 0.405$.',
      },
      {
        q: 'Increasing the smoothing capacitance in a capacitor-input filter:',
        options: [
          'Reduces the ripple but increases the peak diode current',
          'Reduces both ripple and peak diode current',
          'Increases ripple while protecting the diode',
          'Has no effect until the load changes',
        ],
        answer: 0,
        explanation:
          'More capacitance holds the load voltage up longer — less ripple — but the charge lost between peaks must be replaced in an even shorter conduction interval near the peak, so the diode current pulses grow taller and narrower. Hughes’s warning: the maximum allowable diode peak current must not be exceeded.',
      },
      {
        q: 'A full-wave supply delivers 0.5 A at 100 Hz ripple with a 2200 μF capacitor. The approximate peak-to-peak ripple is:',
        options: ['About 2.3 V', 'About 0.11 V', 'About 11 V', 'About 1.2 V'],
        answer: 0,
        explanation:
          '$\\Delta V \\approx I/(f_r C) = 0.5/(100 \\times 2200 \\times 10^{-6}) = 0.5/0.22 = 2.3$ V — charge divided by capacitance, per ripple period.',
      },
      // PYQ-pattern: DRDO 2019 — full-wave smoothing ripple (rephrased, values changed)
      {
        q: 'A full-wave bridge fed from a 12 V RMS 50 Hz secondary drives a 100 Ω load through a 2200 μF reservoir capacitor. Allowing about 0.7 V per diode, the peak-to-peak ripple is closest to:',
        options: ['0.18 V', '0.36 V', '0.71 V', '1.42 V'],
        answer: 2,
        explanation: 'Step 1 — Given: secondary $12$ V RMS, $f = 50$ Hz full-wave so $100$ Hz ripple rate, $R = 100$ Ω, $C = 2200$ μF. Step 2 — Governing estimate: peak output $V_{p} \\approx \\sqrt{2}V_{rms} - 2V_{D}$ and ripple $V_{r} \\approx \\frac{I_{dc}}{2fC}$ with $I_{dc} \\approx \\frac{V_{p}}{R}$. Step 3 — Algebra: $V_{p} \\approx 16.97 - 1.4 = 15.57$ V; $I_{dc} \\approx 0.156$ A; $V_{r} \\approx \\frac{0.156}{100 \\times 2200 \\times 10^{-6}} \\approx 0.709$ V. Step 4 — Sanity check: ripple is a few per cent of the rail, doubling $C$ would halve it, and half-wave would double it. Step 5 — Distractor analysis: 1.42 V is the half-wave value, 0.36 V doubles the capacitance, and 0.18 V quadruples it. Step 6 — Conclude: ripple is about 0.71 V peak-to-peak.',
      },
    ],
  },

  // ------------------------------------------------------------------ 12.4
  {
    sectionId: 'elec-ch12-s4',
    readingTime: 9,
    intro:
      'Breakdown in a diode is normally a failure — unless you design for it. Run a junction into reverse avalanche at a controlled voltage and it becomes a voltage reference; forward-bias a compound semiconductor and it emits light; reverse-bias it in the dark and it measures light instead. Hughes closes his diode chapter with the Zener voltage stabilizer, and The Art of Electronics supplies the catalogue of special-purpose devices — varactors, Schottkys, fast-recovery rectifiers — that fill a practising engineer’s drawer.',
    objectives: [
      'Explain avalanche breakdown and why a Zener diode holds a nearly constant reference voltage',
      'Design a Zener shunt regulator, including its worst-case current and power checks',
      'Describe LED emission and photodiode detection, and size an LED’s current-limiting resistor',
      'Explain the varactor’s voltage-controlled capacitance and its tuning role',
      'State the advantages of Schottky and fast-recovery diodes for high-frequency and switching service',
    ],
    concepts: [
      {
        term: 'Avalanche breakdown and the Zener diode',
        kind: 'definition',
        statement:
          'Raise the reverse voltage across a p–n junction far enough and the accelerating carriers dislodge further carriers, which dislodge more in turn — **avalanche breakdown**, a rapid increase of current at a sharply defined voltage; **Zener (voltage regulator) diodes** are built to break down reversely at a chosen voltage between about 4 V and 75 V and to hold that **reference voltage** practically constant over a wide current range.',
        detail:
          'The power of a large reverse current, sustained, would ruin an ordinary diode — the regulator diode instead dissipates it steadily, provided the maximum permissible junction temperature is respected. Forward biased, the Zener diode behaves as an ordinary diode; with small reverse bias it shows only the usual microampere leakage until, at the breakdown voltage, ionization by collision multiplies the carriers and the current rises abruptly.',
      },
      {
        term: 'The Zener shunt regulator',
        kind: 'method',
        statement:
          'A Zener diode in parallel with the load, fed through a series resistor R from a variable source, holds the output at $V_z$: the resistor is sized so that at the **worst-case low input and full load** the Zener still draws its knee current, $$R = \\frac{V_{\\mathrm{in(min)}} - V_z}{I_{z(\\mathrm{min})} + I_{L(\\mathrm{max})}},$$ and the Zener must survive the opposite extreme of **high input and no load**, when it carries $$I_z = \\frac{V_{\\mathrm{in}} - V_z}{R}$$ alone.',
        detail:
          'This is Hughes’s stabilizer of Fig. 20.12 — variable voltage in, constant voltage out — with the two worst cases made explicit. The Zener absorbs whatever current the load does not: load current up, Zener current down, and the resistor’s drop stays fixed so the output stays put. The price is standing dissipation in R and in the diode, which is why shunt regulation suits references and light loads rather than power supplies.',
      },
      {
        term: 'Zener practice',
        kind: 'insight',
        statement:
          'The Art of Electronics’ Zener lore: the temperature coefficient of the breakdown voltage crosses zero near **5.6 V** — below that, true Zener (tunnelling) breakdown has a negative coefficient, above it, avalanche breakdown a positive one — so 5.6 V parts make the best references; and the diode’s **dynamic resistance** (a few ohms to tens of ohms) sets how stiff the regulation really is.',
        detail:
          'A high-voltage Zener can be temperature-compensated by stacking a forward diode in series with it. For precision work the Zener has been superseded by band-gap references, but for a quick, robust, one-component reference it remains unbeatable — provided you respect the dissipation limits computed in the worst-case design.',
      },
      {
        term: 'Light-emitting diodes',
        kind: 'definition',
        statement:
          'An **LED** is a forward-biased junction of a III–V compound semiconductor (GaAs, GaAsP, GaN families) in which recombination across the band gap releases energy as photons: the forward voltage is set by the material — roughly 1.6–2 V for red, up to 3–4 V for blue and white — and the light output follows the forward current, set by a **series resistor** $R = (V_s - V_f)/I_f$.',
        detail:
          'A 5 V supply driving a red LED of 1.8 V at 10 mA needs $R = 3.2/0.01 = 320$ Ω — choose the standard 330 Ω, which gives 9.7 mA. Hughes’s fibre chapter meets LEDs again as light sources: cheaper and longer-lived than diode lasers, able to feed larger cores, but unable to operate as quickly, and coupling about two orders of magnitude less power into a single-mode fibre with two orders wider spectral width.',
      },
      {
        term: 'Photodiodes',
        kind: 'definition',
        statement:
          'A **photodiode** is a junction operated in **reverse bias**: photons with enough energy generate electron–hole pairs in and near the depletion layer, and the resulting photocurrent — proportional to the incident light over a wide range — flows as increased reverse current.',
        detail:
          'The material fixes the spectral window: silicon responds near 0.8 μm, germanium near 1.2 μm — Hughes’s fibre-receiver pairing. Run the diode into a high impedance and it acts photovoltaically; the reverse-biased photoconductive mode is faster and linear. The complete optical receiver is a photodetector plus amplifier: the photodetector’s electrical output is weak, so the amplifier (and, for digital signals, signal clean-up) completes the receiver of Fig. 27.10.',
      },
      {
        term: 'Varactor diodes',
        kind: 'definition',
        statement:
          'A **varactor** uses the depletion layer of a reverse-biased junction as a capacitor whose plate separation — the layer width — grows with reverse voltage: the junction capacitance falls as the bias rises, giving a voltage-controlled capacitance for electronic tuning.',
        detail:
          'Because the reverse current is negligible, the varactor wastes no power and adds no noise worth mentioning — virtues that make it the tuning element of radio and television receivers, where a tuning voltage sweeps the resonant frequency of the LC circuits of Chapter 9. It also serves as a signal multiplier and in parametric amplification.',
      },
      {
        term: 'Schottky and fast-recovery diodes',
        kind: 'definition',
        statement:
          'A **Schottky diode** is a metal–semiconductor junction: conduction is by majority carriers alone, so there is no minority-carrier storage to discharge — it switches essentially instantly, with a forward drop of only about 0.3–0.4 V; **fast-recovery** junction diodes trade lifetime control (gold doping) for shortened recovery at the cost of higher leakage.',
        detail:
          'The Schottky’s speed and low drop make it the rectifier of switching supplies and high-frequency detectors, and it powered Schottky TTL logic; its taxes are higher reverse leakage and lower reverse-voltage ratings. Where a p–n structure must be kept (for voltage rating), fast- and ultrafast-recovery parts with recovery times from hundreds of nanoseconds down to tens of nanoseconds do the switching-supply work.',
      },
    ],
    examples: [
      {
        title: 'Designing a Zener shunt regulator',
        problem:
          'A rectified and smoothed source varies between 12 V and 15 V. Design a shunt regulator using a 9 V Zener to supply a load that draws up to 10 mA, assuming the Zener needs at least 5 mA to stay past its knee.',
        steps: [
          { label: 'Step 1: Size the resistor at the low-line, full-load extreme', text: 'The resistor must pass the load plus the knee current when the input is at its minimum: $R = (V_{\\mathrm{in(min)}} - V_z)/(I_{z(\\mathrm{min})} + I_{L(\\mathrm{max})}) = (12 - 9)/(5 + 10)\\ \\mathrm{mA} = 3/0.015 = 200\\ \\Omega$.' },
          { label: 'Step 2: Check the Zener at the opposite extreme', text: 'At 15 V input with the load disconnected, the Zener carries everything: $I_z = (15 - 9)/200 = 30\\ \\mathrm{mA}$, dissipating $P_z = 9 \\times 0.03 = 270$ mW — a 0.5 W device is comfortable.' },
          { label: 'Step 3: Check the series resistor', text: 'Worst case for R is also 15 V at no load: $P_R = (15 - 9)^{2}/200 = 36/200 = 0.18$ W — again comfortably inside a 0.5 W rating.' },
          { label: 'Step 4: Verify regulation at the design point', text: 'At 12 V input and full 10 mA load the resistor passes $(12-9)/200 = 15$ mA: exactly 10 mA to the load and 5 mA to the Zener — the knee condition, just met.' },
        ],
        result:
          'A 200 Ω series resistor with a 9 V, 0.5 W Zener regulates 12–15 V down to a steady 9 V for loads up to 10 mA. Remove the load at 15 V input and the Zener alone absorbs 30 mA — precisely the case that destroys undersized regulators.',
      },
      {
        title: 'Choosing an LED series resistor',
        problem:
          'A red LED with a forward voltage of about 1.8 V is to run at 10 mA from a 5 V logic supply. Choose the series resistor and verify its dissipation.',
        steps: [
          { label: 'Step 1: Apply the resistor formula', text: '$R = (V_s - V_f)/I_f = (5 - 1.8)/0.01 = 320\\ \\Omega$.' },
          { label: 'Step 2: Choose the standard value', text: 'The nearest E12 value above 320 Ω is 330 Ω, giving $I = (5 - 1.8)/330 = 9.7\\ \\mathrm{mA}$ — within 3 per cent of target.' },
          { label: 'Step 3: Dissipation', text: 'The resistor drops 3.2 V at 9.7 mA: $P_R = 3.2 \\times 9.7\\ \\mathrm{mA} \\approx 31$ mW, and the LED dissipates $1.8 \\times 9.7\\ \\mathrm{mA} \\approx 17$ mW — both trivial for standard parts.' },
          { label: 'Step 4: Sanity check the margin', text: 'If the supply rises to 5.2 V, the current grows only to $(5.2 - 1.8)/330 = 10.3$ mA: the LED’s steep exponential is isolated from the supply by the resistor, which is exactly its job.' },
        ],
        result: 'A 330 Ω resistor runs the red LED at about 9.7 mA from 5 V — bright, safe and self-stabilizing, since the resistor absorbs all supply variation.',
      },
    ],
    keyTakeaways: [
      'Avalanche breakdown multiplies carriers by collision; Zener (voltage regulator) diodes exploit it, holding a reference voltage of 4–75 V essentially constant over a wide current range below the maximum junction temperature.',
      'Shunt regulation trades power for simplicity: $R = (V_{\\mathrm{in(min)}} - V_z)/(I_{z(\\mathrm{min})} + I_{L(\\mathrm{max})})$, then verify the Zener at maximum input with no load.',
      'The Zener temperature coefficient crosses zero near 5.6 V — tunnelling below, avalanche above — making 5.6 V the classic reference choice.',
      'LEDs emit on forward recombination with material-set voltages (1.6–2 V red, 3–4 V blue and white); always feed them through a series resistor.',
      'Photodiodes detect in reverse bias with photocurrent proportional to illumination — silicon for 0.8 μm, germanium for 1.2 μm — and form the front end of every optical receiver.',
      'Varactors turn the depletion layer into a voltage-controlled capacitance for tuning; Schottky diodes add majority-carrier speed and a 0.3–0.4 V drop for high-frequency service, with fast-recovery p–n parts covering the high-voltage switching needs.',
    ],
    quiz: [
      {
        q: 'In normal operation, a Zener voltage regulator diode spends its working life:',
        options: [
          'Forward biased like any diode',
          'Reverse biased, in controlled breakdown at its reference voltage',
          'Alternating between forward and reverse bias each cycle',
          'Unbiased, drawing only leakage current',
        ],
        answer: 1,
        explanation:
          'The regulator diode is deliberately run into reverse breakdown, where ionization by collision makes the current rise steeply while the voltage barely moves — a constant reference. Forward biased, it is just an ordinary diode.',
      },
      {
        q: 'The worst case for Zener dissipation in a shunt regulator is:',
        options: [
          'Minimum input voltage with maximum load',
          'Maximum input voltage with no load',
          'Nominal input with nominal load',
          'Any input, since dissipation is constant',
        ],
        answer: 1,
        explanation:
          'With the load removed, the current the load would have taken all diverts into the Zener, while a high input pushes the resistor current to its maximum: $I_z = (V_{\\mathrm{in}} - V_z)/R$ then flows entirely through the diode. Size the Zener for this corner, and the resistor for its own worst case.',
      },
      {
        q: 'A 12 V supply is to feed a 2 V, 20 mA LED. The series resistor should be approximately:',
        options: ['100 Ω', '330 Ω', '500 Ω', '1 kΩ'],
        answer: 2,
        explanation: '$R = (12 - 2)/0.02 = 500\\ \\Omega$: the resistor takes the 10 V the LED cannot, setting the current and absorbing all the supply variation.',
      },
      {
        q: 'A photodiode used as a light detector is normally operated:',
        options: ['Forward biased at 20 mA', 'Reverse biased, its photocurrent proportional to illumination', 'At zero bias with maximum current drawn', 'In avalanche breakdown'],
        answer: 1,
        explanation:
          'Reverse bias sweeps photogenerated pairs out of the depletion layer as a photocurrent that tracks light intensity — fast and linear. (Avalanche operation exists, as the APD, but as a deliberately multiplied special case.)',
      },
      {
        q: 'The chief advantage of a Schottky diode over a p–n junction diode is:',
        options: [
          'Higher reverse voltage rating',
          'Lower reverse leakage',
          'No stored minority charge — essentially instant turn-off and a 0.3–0.4 V forward drop',
          'A larger junction capacitance',
        ],
        answer: 2,
        explanation:
          'The metal–semiconductor barrier conducts with majority carriers only, so there is no minority-carrier storage to sweep out at turn-off, and the barrier height is low — fast and efficient, at the cost of higher leakage and lower voltage ratings.',
      },
    ],
  },
]

export const elecCh12Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch12',
    section: '12.1',
    name: 'Mass-action law',
    formula: 'np = nᵢ²',
    note: 'carrier product fixed; n = p = nᵢ when the material is intrinsic',
    latex: 'n\\,p = n_i^{2}',
  },
  {
    chapterId: 'elec-ch12',
    section: '12.2',
    name: 'Shockley diode equation',
    formula: 'I = Is·(exp(qV/kT) − 1)',
    note: 'q/kT ≈ 38.6 per volt at 300 K; current scales tenfold per 60 mV',
    latex: 'I = I_s\\left(e^{qV/kT} - 1\\right)',
  },
  {
    chapterId: 'elec-ch12',
    section: '12.3',
    name: 'Half-wave rectifier averages',
    formula: 'Idc = Im/π = 0.318·Im; Irms = Im/2',
    note: 'peak inverse voltage ≈ Vm; max efficiency 4/π² ≈ 0.405',
    latex: 'I_{\\mathrm{dc}} = \\frac{I_m}{\\pi} = 0.318\\,I_m, \\qquad I_{\\mathrm{rms}} = \\frac{I_m}{2}',
  },
  {
    chapterId: 'elec-ch12',
    section: '12.3',
    name: 'Full-wave rectifier averages',
    formula: 'Idc = 2Im/π = 0.637·Im; Irms = Im/√2',
    note: 'same for the bridge; max efficiency 8/π² ≈ 0.81',
    latex: 'I_{\\mathrm{dc}} = \\frac{2I_m}{\\pi} = 0.637\\,I_m, \\qquad I_{\\mathrm{rms}} = \\frac{I_m}{\\sqrt{2}}',
  },
  {
    chapterId: 'elec-ch12',
    section: '12.3',
    name: 'Ripple factor',
    formula: 'γ = √((Irms/Idc)² − 1)',
    note: '1.21 half-wave, 0.482 full-wave; with a reservoir capacitor ΔV ≈ Idc/(fr·C)',
    latex: '\\gamma = \\sqrt{\\left(\\frac{I_{\\mathrm{rms}}}{I_{\\mathrm{dc}}}\\right)^{2} - 1}',
  },
  {
    chapterId: 'elec-ch12',
    section: '12.3',
    name: 'Peak inverse voltage by circuit',
    formula: 'PIV = Vm (half-wave, bridge); PIV = 2Vm (centre-tap)',
    note: 'the reverse stress each blocking diode must withstand below breakdown',
    latex: 'V_{\\mathrm{PIV}} = V_m \\ \\text{(half-wave, bridge)}, \\quad 2V_m \\ \\text{(centre-tapped)}',
  },
  {
    chapterId: 'elec-ch12',
    section: '12.4',
    name: 'Zener series resistor',
    formula: 'R = (Vin(min) − Vz)/(Iz(min) + IL(max))',
    note: 'sized at the low-line, full-load corner of the design',
    latex: 'R = \\frac{V_{\\mathrm{in(min)}} - V_z}{I_{z(\\mathrm{min})} + I_{L(\\mathrm{max})}}',
  },
  {
    chapterId: 'elec-ch12',
    section: '12.4',
    name: 'Zener current balance',
    formula: 'Iz = (Vin − Vz)/R − IL',
    note: 'the diode absorbs whatever current the load does not take',
    latex: 'I_z = \\frac{V_{\\mathrm{in}} - V_z}{R} - I_L',
  },
]
