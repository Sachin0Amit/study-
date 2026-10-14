import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 35: Nuclear Chemistry
// Sections 35.1 - 35.4. Mahan Chapter 19 plus mass defect and reactor logic.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh35Content: SectionContent[] = [
  // ---------------------------------------------------------------- 35.1
  {
    sectionId: 'chem-ch35-s1',
    readingTime: 10,
    intro: 'Unstable nuclei decay with first order kinetics set by the decay constant $\\lambda$. Half life $t_{half} = 0.693$ over $\\lambda$ ranges from seconds to billions of years enabling clocks. This section derives decay law plus half life ladders plus carbon plus potassium dating arithmetic.',
    objectives: [
      'Apply $N = N_{0}e^{-\\lambda t}$ plus $t_{half} = 0.693$ over $\\lambda$ plus activity $A = \\lambda N$',
      'Date with $t = 1$ over $\\lambda$ $\\ln(1 + D$ over $P)$ for $Rb$-$Sr$ plus $K$-$Ar$ plus $U$-$Pb$ systems',
      'Compute $C$-$14$ age from $5730$ year half life plus $15.3$ decays per min per g modern rate'
    ],
    concepts: [
      {
        term: 'First order decay law',
        kind: 'law',
        statement: 'A **fraction decaying per time stays constant** `decay-law` $N = N_{0}e^{-\\lambda t}$ with $dN$ over $dt = minus$ $\\lambda N$ plus $A = \\lambda N$.',
        detail: 'Mahan $\\ln N$ over $N_{0} = minus$ $\\lambda t$ integrates constant fraction $dN$ over $N$ per $dt$. Curie $3.70$ times $10$ to $10$ decays per sec scales activity while rad plus roentgen track dose in tissue.'
      },
      {
        term: 'Half life ladder',
        kind: 'definition',
        statement: 'A **half stock time inverts decay constant** `half-life` $t_{half} = 0.693$ over $\\lambda$ with $N = N_{0}$ over $2$ to $n$ after $n$ halves.',
        detail: '$C$-$14$ $5730$ years plus $K$-$40$ $1.30$ times $10$ to $9$ years plus $U$-$238$ $4.51$ times $10$ to $9$ years plus $Rb$-$87$ $47.0$ times $10$ to $9$ years span dating windows. After $68$ min to $5$ percent left example gives $\\lambda$ near $0.044$ per min.'
      },
      {
        term: 'Parent daughter clock',
        kind: 'method',
        statement: 'A **trapped daughter over parent gives solidification age** `dating` $t = 1$ over $\\lambda$ $\\ln(1 + D$ over $P)$ with $D + P = P_{0}$ closed system.',
        detail: '$Rb$-$87$ to $Sr$-$87$ with $\\lambda = 1.47$ times $10$ to $minus$ $11$ per year assumes no initial $Sr$-$87$ plus full trap. $U$-$238$ to $Pb$-$206$ plus $U$-$235$ to $Pb$-$207$ agreement tests closed behaviour.'
      },
      {
        term: 'Carbon fourteen recent clock',
        kind: 'theorem',
        statement: 'A **cosmic $N$ to $C$ plus decay balance dates recent organics** `carbon-dating` $^{14}N$ plus neutron to $^{14}C$ plus proton with modern $15.3$ decays per min per g.',
        detail: 'Living exchange holds $15.3$ decays per min per g $C$ while death stops intake so rate falls with $5730$ year half life. Lascaux $2.25$ decays per min per g gives age near $16000$ years by $t = 1$ over $\\lambda$ $\\ln$ ratio.'
      },
      {
        term: 'Potassium argon trap logic',
        kind: 'insight',
        statement: 'A **gas trap versus abundant daughter selects useful pair** `k-ar` $^{40}K$ to $^{40}Ar$ $11$ percent electron capture branch dates retentive minerals.',
        detail: '$K$-$40$ $89$ percent to $Ca$-$40$ unusable from abundant $Ca$ background while $11$ percent to $Ar$-$40$ trapped in lattice works. $K$ widespread abundance makes method valuable despite air $Ar$ contamination care.'
      }
    ],
    figures: [
      {
        caption: 'Decay $N = N_{0}e^{-\\lambda t}$ with $t_{half} = 0.693$ over $\\lambda$ plus $C$-$14$ $5730$ years to $U$ $4.51$ times $10$ to $9$ years.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decay law and dating clocks" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">N falls exponential</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">half 0.693 over L</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">D over P clock</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">ln 1 plus ratio</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">closed trap needed</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">C14 5730 yr</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">15.3 to 2.25 rate</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">K Ar plus U Pb span deep time</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Lascaux carbon age from rate',
        problem: 'Charcoal shows $2.25$ decays per min per g versus modern $15.3$ decays per min per g with $t_{half} = 5730$ years. Find age.',
        steps: [
          { label: 'Step 1', text: 'Get constant:\n```text\nlambda = 0.693 over 5730 yr = 1.21 over 10 to 4 per yr\nratio A over A0 = 2.25 over 15.3 = 0.147\nt = -ln(ratio) over lambda\n```\nActivity $A = \\lambda N$ tracks $N$ directly for $C$-$14$ dating.' },
          { label: 'Step 2', text: 'Take $\\ln 0.147 = minus$ $1.917$ so minus $\\ln$ ratio equals $1.917$.' },
          { label: 'Step 3', text: 'Divide $1.917$ by $1.21$ times $10$ to $minus$ $4$ giving $15840$ years near $16000$ years matching Fig $19.10$ range.' }
        ],
        result: 'Age near $16000$ years from $2.25$ over $15.3$ ratio with $5730$ year half life.'
      },
      {
        title: 'Rubidium strontium mineral age',
        problem: 'Mica shows $D$ over $P = 0.10$ for $Sr$-$87$ over $Rb$-$87$ with $t_{half} = 47.0$ times $10$ to $9$ years. Find $t$.',
        steps: [
          { label: 'Step 1', text: 'Compute $\\lambda = 0.693$ over $47.0$ times $10$ to $9$ giving $1.47$ times $10$ to $minus$ $11$ per year.' },
          { label: 'Step 2', text: 'Use $t = 1$ over $\\lambda$ $\\ln(1 + 0.10)$ with $\\ln 1.10$ near $0.0953$.' },
          { label: 'Step 3', text: 'Divide $0.0953$ by $1.47$ times $10$ to $minus$ $11$ giving $6.48$ times $10$ to $9$ years deep time age.' }
        ],
        result: 'Age near $6.5$ times $10$ to $9$ years from $0.10$ $D$ over $P$ ratio.'
      }
    ],
    keyTakeaways: [
      '$N = N_{0}e^{-\\lambda t}$ with $t_{half} = 0.693$ over $\\lambda$ plus $A = \\lambda N$.',
      '$t = 1$ over $\\lambda$ $\\ln(1 + D$ over $P)$ with $D + P = P_{0}$ closed trap.',
      '$C$-$14$ $5730$ years with $15.3$ to $2.25$ rate gives $16000$ years Lascaux.',
      '$K$-$40$ $1.30$ times $10$ to $9$ plus $U$-$238$ $4.51$ times $10$ to $9$ span deep time.'
    ],
    quiz: [
      {
        q: 'After $2$ half lives left fraction is:',
        options: ['$1$ over $2$', '$1$ over $4$ with $N = N_{0}$ over $2$ to $n$', '$1$ over $8$', 'Zero'],
        answer: 1,
        explanation: 'Step 1: One half leaves $0.50$. Step 2: Second half leaves $0.25$. Step 3: General $1$ over $2$ to $n$ with $n = 2$ giving $0.25$.'
      },
      // PYQ-pattern: carbon dating rate drill
      {
        q: '$2.25$ versus $15.3$ rate age is near:',
        options: ['$573$ years', '$16$ years', '$16000$ years', 'Zero years'],
        answer: 2,
        explanation: 'Step 1: Ratio $2.25$ over $15.3$ equals $0.147$. Step 2: $\\lambda = 1.21$ times $10$ to $minus$ $4$ per year. Step 3: $1.917$ over $1.21$ times $10$ to $minus$ $4$ gives $15840$ years.'
      },
      {
        q: '$D$ over $P = 0.10$ $Rb$-$Sr$ age is near:',
        options: ['$6.48$ times $10$ to $9$ years', '$47$ years', '$0.10$ years', '$10$ years'],
        answer: 0,
        explanation: 'Step 1: $\\lambda = 1.47$ times $10$ to $minus$ $11$. Step 2: $\\ln 1.10$ near $0.0953$. Step 3: Divide to $6.48$ times $10$ to $9$ years.'
      },
      {
        q: 'Useful $K$ branch is:',
        options: ['$89$ percent to $Ca$-$40$', 'Zero branch', 'All to $Pb$', '$11$ percent to $Ar$-$40$ trapped gas'],
        answer: 3,
        explanation: 'Step 1: Note $Ca$-$40$ abundant background masks signal. Step 2: Note $Ar$-$40$ trapped in retentive lattice. Step 3: Select $11$ percent electron capture to $Ar$-$40$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 35.2
  {
    sectionId: 'chem-ch35-s2',
    readingTime: 8,
    intro: 'Emission shifts place on the chart of nuclides while shell closures create extra stability islands. Alpha plus beta plus positron plus capture move $Z$ plus $A$ by fixed steps. This section reads decay series plus magic numbers plus band of stability with Mahan Valley logic.',
    objectives: [
      'Shift $Z$ minus $2$ plus $A$ minus $4$ alpha versus $Z$ plus $1$ beta minus versus $Z$ minus $1$ positron plus capture',
      'Recall magic $2$ plus $8$ plus $20$ plus $28$ plus $50$ plus $82$ plus $126$ for $Z$ plus $N$ closures',
      'Place neutron rich above plus proton rich below band with $N$ over $Z$ near $1$ to $1.5$ trend'
    ],
    concepts: [
      {
        term: 'Alpha shift rule',
        kind: 'definition',
        statement: 'A **helium nucleus loss drops mass by four** `alpha` $Z$ minus $2$ plus $A$ minus $4$ as $^{238}U$ to $^{234}Th$ plus $^{4}He$.',
        detail: 'Mahan $Ra$-$226$ to $Rn$-$222$ plus $He$-$4$ example shows heavy neutron rich recoil. Range short so skin stops outside alpha but $Pu$-$239$ bone seeker deadly inside with $0.7$ microgram limit.'
      },
      {
        term: 'Beta minus versus positron',
        kind: 'theorem',
        statement: 'A **neutron to proton versus proton to neutron flips charge** `beta` beta minus $Z$ plus $1$ $A$ same versus positron $Z$ minus $1$ $A$ same.',
        detail: '$Rb$-$87$ to $Sr$-$87$ beta minus plus $C$-$14$ to $N$-$14$ beta minus contrast $Na$-$22$ to $Ne$-$22$ positron test with mass plus $2$ electron check. Electron capture $Be$-$7$ plus $K$-$40$ to $Ar$-$40$ also $Z$ minus $1$.'
      },
      {
        term: 'Magic closure stability',
        kind: 'law',
        statement: 'A **filled shells resist decay like noble gases** `magic` $2$ plus $8$ plus $20$ plus $28$ plus $50$ plus $82$ plus $126$ for $Z$ plus $N$.',
        detail: '$He$-$4$ doubly magic $2$ plus $2$ plus $O$-$16$ plus $Ca$-$40$ plus $Pb$-$208$ $82$ plus $126$ show peaks in $E_{b}$ over $A$ plus abundance. $He$-$4$ build blocks $C$-$12$ via $3$ alpha plus $O$-$16$ via $C$-$12$ plus alpha in stars.'
      },
      {
        term: 'Band of stability placement',
        kind: 'method',
        statement: 'A **stable $N$ over $Z$ climbs with mass** `band` $N$ over $Z$ near $1$ for light to near $1.5$ for heavy $Pb$ plus $U$.',
        detail: 'Above band neutron rich beta minus down to band while below band proton rich positron or capture up to band. Heavy $Z$ above $82$ alpha chains step down $2$ $Z$ plus $4$ $A$ toward $Pb$-$206$ plus $Pb$-$207$ ends.'
      },
      {
        term: 'Series consistency test',
        kind: 'insight',
        statement: 'A **dual uranium lead clocks must agree** `series` $^{238}U$ to $^{206}Pb$ $8$ alpha plus $6$ beta versus $^{235}U$ to $^{207}Pb$ $7$ alpha plus $4$ beta.',
        detail: '$U$-$238$ $4.51$ times $10$ to $9$ years plus $U$-$235$ $0.713$ times $10$ to $9$ years independent clocks cross check contamination. Concordant $Pb$ ratios prove closed system while discord signals $Pb$ loss or gain.'
      }
    ],
    figures: [
      {
        caption: 'Alpha $Z$ minus $2$ plus beta $Z$ plus $1$ steps to magic $82$ plus $126$ band with dual $U$ to $Pb$ check.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decay shifts magic numbers and stability band" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">alpha Z-2 A-4</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">beta Z plus 1</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">magic 2 8 20 28</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">50 82 126 closed</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">He4 Pb208 peaks</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">band N over Z</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">1 to 1.5 climb</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">U238 to Pb206 vs U235 to Pb207 agree</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Uranium alpha step product',
        problem: '$^{238}U$ with $Z = 92$ emits one alpha to $Th$. Find product $Z$ plus $A$ plus symbol.',
        steps: [
          { label: 'Step 1', text: 'Apply rule:\n```text\nZ -> Z-2 = 90 Th\nA -> A-4 = 234\nplus He-4 with Z=2 A=4\n```\nAlpha $^{4}He$ carries $2$ protons plus $2$ neutrons.' },
          { label: 'Step 2', text: 'Balance $92 = 90 + 2$ for $Z$ plus $238 = 234 + 4$ for $A$.' },
          { label: 'Step 3', text: 'Identify $^{234}Th$ $Z = 90$ first of $8$ alpha plus $6$ beta chain to $^{206}Pb$.' }
        ],
        result: 'Product $^{234}Th$ with $Z = 90$ plus $A = 234$.'
      },
      {
        title: 'Fluorine isotope decay mode call',
        problem: 'Stable $F$-$19$ with neighbours $F$-$17$ plus $F$-$18$ proton rich versus $F$-$20$ plus $F$-$21$ neutron rich. Predict modes.',
        steps: [
          { label: 'Step 1', text: 'Place $F$ $Z = 9$ band $N$ over $Z$ near $1$ so $N = 10$ stable $F$-$19$ centre.' },
          { label: 'Step 2', text: 'Below band proton rich $F$-$17$ plus $F$-$18$ positron or capture $Z$ minus $1$ to $O$.' },
          { label: 'Step 3', text: 'Above band neutron rich $F$-$20$ plus $F$-$21$ beta minus $Z$ plus $1$ to $Ne$.' }
        ],
        result: 'Light $F$ positron to $O$ while heavy $F$ beta minus to $Ne$.'
      }
    ],
    keyTakeaways: [
      'Alpha $Z$ minus $2$ plus $A$ minus $4$ versus beta minus $Z$ plus $1$ $A$ same.',
      'Magic $2$ plus $8$ plus $20$ plus $28$ plus $50$ plus $82$ plus $126$ mark closures.',
      'Band $N$ over $Z$ $1$ to $1.5$ with above beta minus plus below positron.',
      '$^{238}U$ to $^{206}Pb$ versus $^{235}U$ to $^{207}Pb$ agreement tests closure.'
    ],
    quiz: [
      {
        q: '$^{238}U$ alpha gives:',
        options: ['$^{234}Th$ plus $^{4}He$', '$^{238}Pu$', '$^{238}U$ unchanged', '$^{206}Pb$ at once'],
        answer: 0,
        explanation: 'Step 1: Subtract $2$ from $92$ giving $90$. Step 2: Subtract $4$ from $238$ giving $234$. Step 3: Assign $^{234}Th$ plus $^{4}He$.'
      },
      // PYQ-pattern: decay shift direction drill
      {
        q: 'Neutron rich nucleus decays by:',
        options: ['Alpha only', 'Positron $Z$ minus $1$', 'Beta minus $Z$ plus $1$ to band', 'No decay'],
        answer: 2,
        explanation: 'Step 1: Place above band with high $N$ over $Z$. Step 2: Convert neutron to proton. Step 3: Raise $Z$ by $1$ keeping $A$ same as $C$-$14$ to $N$-$14$.'
      },
      {
        q: 'Doubly magic light nucleus is:',
        options: ['$^{14}C$', '$^{4}He$ $2$ plus $2$', '$^{235}U$', '$^{40}K$'],
        answer: 1,
        explanation: 'Step 1: Check $Z = 2$ magic. Step 2: Check $N = 2$ magic. Step 3: Select $^{4}He$ peak binding plus abundance.'
      },
      {
        q: 'Concordant $U$-$Pb$ ages mean:',
        options: ['Contamination certain', 'No decay occurred', 'Only $K$-$Ar$ works', 'Closed system likely with $4.51$ plus $0.713$ times $10$ to $9$ agreement'],
        answer: 3,
        explanation: 'Step 1: Compute $^{238}U$ to $^{206}Pb$ age. Step 2: Compute $^{235}U$ to $^{207}Pb$ age. Step 3: Match with $8$ plus $6$ versus $7$ plus $4$ steps proving closure.'
      }
    ]
  },
  // ---------------------------------------------------------------- 35.3
  {
    sectionId: 'chem-ch35-s3',
    readingTime: 9,
    intro: 'Mass defect times $c^{2}$ is the glue holding nucleons together. Binding per nucleon $E_{b}$ over $A$ peaks near iron revealing fusion plus fission energetics. This section computes $Q$ values plus reads the $8$ $MeV$ plateau with $Fe$-$56$ maximum.',
    objectives: [
      'Compute $\\Delta m$ plus $E_{b} = \\Delta m c^{2}$ with $1$ $amu = 931.5$ $MeV$ plus electron balance',
      'Read $E_{b}$ over $A$ curve $8$ $MeV$ plateau with $Fe$-$56$ near $8.8$ $MeV$ maximum',
      'Get $Q = (m_{react} - m_{prod})c^{2}$ positive exothermic versus negative endoergic'
    ],
    concepts: [
      {
        term: 'Mass defect definition',
        kind: 'definition',
        statement: 'A **constituents minus atom mass is binding store** `mass-defect` $\\Delta m = Zm_{H} + Nm_{n} - M_{atom}$ with $H$ plus neutron masses.',
        detail: '$O$-$16$ $8$ $H$ plus $8$ neutrons sum $16.1319$ $amu$ minus $15.9949$ $amu$ gives $0.137$ $amu$ defect. Use atom masses to cancel electrons with $m_{H} = 1.007825$ $amu$ plus $m_{n} = 1.008665$ $amu$.'
      },
      {
        term: 'Binding energy scale',
        kind: 'law',
        statement: 'A **defect times $c^{2}$ dwarfs chemistry by millionfold** `binding-scale` $E_{b} = \\Delta m c^{2}$ with $1$ $amu = 931.5$ $MeV$.',
        detail: '$O$-$16$ $0.137$ $amu$ times $931.5$ gives $127.6$ $MeV$ versus $5.2$ eV $O$-$O$ bond. Per nucleon $127.6$ over $16$ near $8.0$ $MeV$ typical plateau value.'
      },
      {
        term: 'Per nucleon curve reading',
        kind: 'theorem',
        statement: 'A **rapid rise then flat $8$ $MeV$ plus $Fe$ peak sets fusion fission arrows** `be-curve` $E_{b}$ over $A$ near $8$ $MeV$ with $Fe$-$56$ near $8.8$ $MeV$ top.',
        detail: 'Light $H$-$2$ $1.1$ $MeV$ to $He$-$4$ $7.1$ $MeV$ steep climb then plateau to $Fe$-$56$ maximum. Net $14.1$ $MeV$ nuclear attraction minus Coulomb leaves $8$ $MeV$ net as Mahan $12$ neighbour $2.3$ $MeV$ pair logic shows.'
      },
      {
        term: 'Q value arithmetic',
        kind: 'method',
        statement: 'A **mass loss times $c^{2}$ is released energy** `q-value` $Q = (m_{react} - m_{prod})c^{2}$ with $Q$ above $0$ exothermic.',
        detail: '$D$ plus $T$ to $He$-$4$ plus neutron $Q = 17.6$ $MeV$ from $0.0189$ $amu$ loss. $Na$-$22$ to $Ne$-$22$ positron check needs $2$ electron $1.022$ $MeV$ threshold beyond atom mass difference.'
      },
      {
        term: 'Fusion versus fission arrows',
        kind: 'insight',
        statement: 'A **light fuse up plus heavy split toward iron releases energy** `arrows` $4$ $H$ to $He$-$4$ $26.7$ $MeV$ plus $U$-$235$ split $200$ $MeV$.',
        detail: 'Stellar $4$ $H$ to $He$-$4$ $26.7$ $MeV$ via $D$ plus $He$-$3$ steps powers sun while $C$-$12$ $3$ alpha $7.3$ $MeV$ builds carbon. Heavy $U$ to mid mass near $60$ climbs $E_{b}$ over $A$ releasing $200$ $MeV$ previewing next section.'
      }
    ],
    figures: [
      {
        caption: '$E_{b}$ over $A$ $8$ $MeV$ plateau peaking at $Fe$-$56$ $8.8$ $MeV$ with $Q = 17.6$ $MeV$ $D$-$T$ arrow.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Binding per nucleon curve and Q value" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">light rise steep</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">H2 low He4 7.1</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Fe56 top 8.8</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">plateau 8 MeV</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">fuse up split down</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Q DT 17.6 MeV</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">mass loss to E</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">1 amu is 931.5 MeV scale</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Oxygen binding per nucleon',
        problem: '$O$-$16$ atom $15.994915$ $amu$ from $8$ $H$ $1.007825$ plus $8$ neutrons $1.008665$ $amu$. Find $E_{b}$ plus $E_{b}$ over $A$.',
        steps: [
          { label: 'Step 1', text: 'Sum parts:\n```text\n8 x 1.007825 = 8.0626 amu\n8 x 1.008665 = 8.06932 amu\ntotal = 16.13192 amu\nminus 15.994915 = 0.13701 amu\n```\nAtom mass $15.994915$ $amu$ includes $8$ electrons balanced by $8$ $H$.' },
          { label: 'Step 2', text: 'Multiply $0.13701$ by $931.5$ giving $127.6$ $MeV$ total binding.' },
          { label: 'Step 3', text: 'Divide by $16$ giving $7.98$ $MeV$ per nucleon on $8$ $MeV$ plateau.' }
        ],
        result: 'Total $127.6$ $MeV$ with $8.0$ $MeV$ per nucleon near $Fe$ plateau.'
      },
      {
        title: 'DT fusion Q value check',
        problem: 'Reaction $D$ plus $T$ to $He$-$4$ plus neutron loses $0.0189$ $amu$. Find $Q$ in $MeV$ plus $kJ$ over mol.',
        steps: [
          { label: 'Step 1', text: 'Use $Q = \\Delta m c^{2}$ with $1$ $amu = 931.5$ $MeV$.' },
          { label: 'Step 2', text: 'Multiply $0.0189$ by $931.5$ giving $17.6$ $MeV$ per reaction.' },
          { label: 'Step 3', text: 'Scale by Avogadro to $1.69$ times $10$ to $9$ $kJ$ over mol far above chemistry $400$ $kJ$ over mol scale.' }
        ],
        result: 'Q $17.6$ $MeV$ exothermic driving fusion arrow toward $He$.'
      }
    ],
    keyTakeaways: [
      '$\\Delta m = Zm_{H} + Nm_{n} - M_{atom}$ with $O$-$16$ $0.137$ $amu$ example.',
      '$1$ $amu = 931.5$ $MeV$ giving $127.6$ $MeV$ $O$-$16$ versus $5.2$ eV chemistry.',
      '$E_{b}$ over $A$ $8$ $MeV$ plateau with $Fe$-$56$ $8.8$ $MeV$ maximum.',
      '$Q = (m_{react} - m_{prod})c^{2}$ with $D$-$T$ $17.6$ $MeV$ plus $4H$ to $He$ $26.7$ $MeV$.'
    ],
    quiz: [
      {
        q: '$O$-$16$ defect is near:',
        options: ['$0.137$ $amu$', '$16$ $amu$', 'Zero', 'Minus $16$ $amu$'],
        answer: 0,
        explanation: 'Step 1: Sum $8.0626$ plus $8.06932$ giving $16.13192$. Step 2: Subtract $15.994915$ giving $0.13701$. Step 3: Times $931.5$ giving $127.6$ $MeV$.'
      },
      // PYQ-pattern: binding per nucleon curve drill
      {
        q: 'Most stable per nucleon is near:',
        options: ['$H$-$2$ $1.1$ $MeV$', '$Fe$-$56$ $8.8$ $MeV$ peak', '$U$-$238$ $12$ $MeV$', 'Zero $MeV$'],
        answer: 1,
        explanation: 'Step 1: Rise $H$-$2$ $1.1$ to $He$-$4$ $7.1$. Step 2: Plateau near $8$ $MeV$. Step 3: Peak $Fe$-$56$ $8.8$ $MeV$ maximum.'
      },
      {
        q: '$D$-$T$ $Q$ is:',
        options: ['$0.0$ $MeV$', 'Minus $17.6$ $MeV$', '$17.6$ $MeV$', '$200$ $MeV$'],
        answer: 2,
        explanation: 'Step 1: Loss $0.0189$ $amu$. Step 2: Times $931.5$ giving $17.6$. Step 3: Positive so exothermic to $He$-$4$ plus neutron.'
      },
      {
        q: 'Fission releases because:',
        options: ['Light to heavy always', 'No mass change', 'Electrons only', 'Heavy to light climbs to $Fe$ peak'],
        answer: 3,
        explanation: 'Step 1: Heavy $E_{b}$ over $A$ near $7.6$ $MeV$. Step 2: Mid near $8.5$ $MeV$ higher. Step 3: Difference times $236$ gives $200$ $MeV$ release.'
      }
    ]
  },
  // ---------------------------------------------------------------- 35.4
  {
    sectionId: 'chem-ch35-s4',
    readingTime: 10,
    intro: 'Splitting heavy nuclei plus fusing light nuclei both climb toward iron releasing millions of electron volts. Chain neutrons enable reactors with moderation plus control plus breeding. This section quantifies $200$ $MeV$ fission plus $17.6$ $MeV$ fusion plus criticality plus Lawson preview.',
    objectives: [
      'Balance $^{235}U$ plus neutron to $Sr$-$90$ plus $Xe$-$143$ plus $3$ neutrons with $200$ $MeV$ plus $2.5$ neutrons',
      'Explain thermal versus fast plus moderator plus control plus $3$ percent enrichment logic',
      'State fusion $10$ to $8$ K plus Lawson $n\\tau$ over $10$ to $14$ plus lithium blanket tritium loop'
    ],
    concepts: [
      {
        term: 'Fission split energetics',
        kind: 'definition',
        statement: 'A **heavy split to asymmetric mids releases two hundred $MeV$** `fission` $^{235}U$ plus neutron to $^{90}Sr$ plus $^{143}Xe$ plus $3$ neutrons with $200$ $MeV$.',
        detail: 'Average $2.5$ neutrons plus $200$ $MeV$ per fission gives $5$ times $10$ to $9$ $kcal$ over mol. Yield double hump $70$ to $160$ mass shows asymmetric split dominance as Mahan Fig $19.7$ plots.'
      },
      {
        term: 'Chain criticality control',
        kind: 'law',
        statement: 'A **neutron balance sets subcritical versus critical versus supercritical** `criticality` $k = 1$ steady with moderator slow plus control $B$ plus $Cd$ absorb.',
        detail: 'Natural $0.7$ percent $U$-$235$ enriched to $3$ percent for pressurised water with $150$ atm water moderator plus coolant. Fast $Pu$-$239$ breeder uses $Na$ coolant plus $U$-$238$ to $Pu$-$239$ doubling in $5$ to $20$ years.'
      },
      {
        term: 'Breeder doubling loop',
        kind: 'method',
        statement: 'A **fertile to fissile conversion breeds more fuel** `breeder` $^{238}U$ plus neutron to $^{239}U$ to $^{239}Np$ to $^{239}Pu$ replacing burn.',
        detail: '$Pu$-$239$ fast fission gives $2.5$ fast neutrons with $1$ to sustain plus $1$ to breed $U$-$238$. High $800$ K steam lifts efficiency over $530$ K water reactor $32$ percent toward fossil $800$ K levels.'
      },
      {
        term: 'Fusion Lawson ignition',
        kind: 'theorem',
        statement: 'A **Coulomb barrier needs hundred million kelvin plus confinement product** `lawson` $T$ near $10$ to $8$ K plus $n\\tau$ over $10$ to $14$ ion sec per $cm^{3}$.',
        detail: 'Average $10$ to $minus$ $2$ $MeV$ deuterons tunnel through repulsion while magnetic bottles hold plasma. Achieved $6$ times $10$ to $11$ in $1973$ versus $10$ to $14$ needed with instabilities limiting time plus density.'
      },
      {
        term: 'Blanket and safety edge',
        kind: 'insight',
        statement: 'A **lithium blanket breeds tritium plus carries heat** `blanket` $^{6}Li$ plus neutron to $^{4}He$ plus $T$ plus $4.8$ $MeV$ closing $D$-$T$ loop.',
        detail: 'Fast neutron $Li$-$7$ to $Li$-$6$ plus $2$ neutrons feeds slow $Li$-$6$ reaction heating molten $Li$ for steam. Fusion stops instantly on field loss with no long waste versus fission $1000$ year store plus $10$ to $6$ g $Pu$ inventory care.'
      }
    ],
    figures: [
      {
        caption: '$^{235}U$ $200$ $MeV$ with $k = 1$ control versus $D$-$T$ $17.6$ $MeV$ with $10$ to $8$ K plus $n\\tau$ target.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fission chain and fusion Lawson" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">U235 200 MeV</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">2.5 n per split</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">k 1 steady</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">3 percent enrich</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">B Cd control</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">DT 17.6 MeV</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">1e8 K Lawson</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">Li blanket breeds T, stops fast</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Fission energy per mole',
        problem: 'Each $^{235}U$ fission gives $200$ $MeV$. Find $kJ$ over mol plus $kcal$ over mol and compare to coal $400$ $kJ$ over mol.',
        steps: [
          { label: 'Step 1', text: 'Convert:\n```text\n200 MeV = 200 x 1.602 over 10 to 13 J = 3.20 over 10 to 11 J per nucleus\ntimes Avogadro 6.022 over 10 to 23\n```\n$1$ eV $= 1.602$ times $10$ to $minus$ $19$ J with $MeV$ millionfold.' },
          { label: 'Step 2', text: 'Multiply $3.20$ times $10$ to $minus$ $11$ by $6.022$ times $10$ to $23$ giving $1.93$ times $10$ to $13$ J over mol.' },
          { label: 'Step 3', text: 'Divide to $1.93$ times $10$ to $10$ $kJ$ over mol near $4.6$ times $10$ to $9$ $kcal$ over mol about $10$ million times coal $400$ $kJ$ over mol.' }
        ],
        result: 'Near $1.9$ times $10$ to $13$ J over mol about ten million times chemical burn.'
      },
      {
        title: 'Fusion power from DT rate',
        problem: '$D$-$T$ gives $17.6$ $MeV$ per reaction. How many reactions per sec give $1000$ MW thermal?',
        steps: [
          { label: 'Step 1', text: 'Convert $17.6$ $MeV$ to $2.82$ times $10$ to $minus$ $12$ J per reaction via $1.602$ times $10$ to $minus$ $13$ J per $MeV$.' },
          { label: 'Step 2', text: 'Divide $1000$ MW $= 10$ to $9$ J per sec by $2.82$ times $10$ to $minus$ $12$ giving $3.55$ times $10$ to $20$ per sec.' },
          { label: 'Step 3', text: 'Note $80$ percent as neutron kinetic needing $Li$ blanket capture versus $D$-$D$ proton direct conversion idea.' }
        ],
        result: 'Need $3.6$ times $10$ to $20$ $D$-$T$ per sec for $1000$ MW thermal.'
      }
    ],
    keyTakeaways: [
      '$^{235}U$ split $200$ $MeV$ plus $2.5$ neutrons with $70$ to $160$ asymmetric yield.',
      '$k = 1$ steady with $3$ percent enrichment plus water $150$ atm versus $Na$ fast breeder.',
      '$D$-$T$ $17.6$ $MeV$ needs $10$ to $8$ K plus $n\\tau$ over $10$ to $14$ ion sec per $cm^{3}$.',
      '$Li$ blanket breeds $T$ plus $4.8$ $MeV$ with instant stop plus low waste edge.'
    ],
    quiz: [
      {
        q: 'Fission per $^{235}U$ gives near:',
        options: ['$2$ eV', '$200$ $MeV$ plus $2.5$ neutrons', 'Zero', '$17.6$ $MeV$ only'],
        answer: 1,
        explanation: 'Step 1: Split to $90$ plus $143$ mass mids. Step 2: Emit $3$ neutrons in example averaging $2.5$. Step 3: Release $200$ $MeV$ near $5$ times $10$ to $9$ $kcal$ over mol.'
      },
      // PYQ-pattern: criticality and enrichment drill
      {
        q: 'Power fuel enriched to $3$ percent because:',
        options: ['Natural $0.7$ percent too low for thermal chain', 'Pure $U$-$238$ fissions thermally', 'No moderator needed', 'Control rods fuel'],
        answer: 0,
        explanation: 'Step 1: Note natural $0.7$ percent $U$-$235$. Step 2: Need $3$ percent for $k = 1$ with water moderation. Step 3: Keep $150$ atm water plus $B$ plus $Cd$ control.'
      },
      {
        q: 'Lawson target is:',
        options: ['Zero density', 'Room $T$ only', '$n\\tau$ over $10$ to $14$ ion sec per $cm^{3}$ at $10$ to $8$ K', 'No confinement'],
        answer: 2,
        explanation: 'Step 1: Heat to $10$ to $8$ K for $10$ to $minus$ $2$ $MeV$ tunnelling. Step 2: Hold density times time over $10$ to $14$. Step 3: Contrast $6$ times $10$ to $11$ achieved in $1973$.'
      },
      {
        q: '$Li$ blanket does:',
        options: ['No function', 'Stops all neutrons', 'Creates $U$-$235$', 'Breeds $T$ via $^{6}Li$ plus neutron plus carries heat'],
        answer: 3,
        explanation: 'Step 1: Fast $Li$-$7$ makes $Li$-$6$. Step 2: Slow $Li$-$6$ plus neutron gives $He$-$4$ plus $T$ plus $4.8$ $MeV$. Step 3: Heat molten $Li$ to steam plus feed $D$-$T$.'
      }
    ]
  }
]
