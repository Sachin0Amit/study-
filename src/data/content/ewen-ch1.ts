import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 1: The Physics Tool Kit (pp 27-64)
// ============================================================================

export const ewenCh1Content: SectionContent[] = [
  {
    sectionId: 'young-ch1-s18',
    readingTime: 5,
    intro: "Every measurement compares an unknown against an agreed standard, and the whole of physics depends on those standards being stable. This section introduces the SI and U.S. customary standards and the base quantities length, mass, and time.",
    objectives: [
      "Name the standard unit for length, mass, and time in SI and U.S. systems",
      "Explain what makes a good physical standard",
      "Convert simple lengths between inches, feet, and meters",
    ],
    concepts: [
      {
        term: "Standard of measure",
        kind: "definition",
        statement: "A **standard** is an agreed, reproducible reference — the meter, kilogram, and second in SI — against which all measurements of that kind are compared.",
        detail: "Modern standards rest on unchanging physics: the meter is defined from the speed of light and the second from atomic transitions.",
      },
      {
        term: "SI base units",
        kind: "notation",
        statement: "SI base units used in this book are the **meter ($\\mathrm{m}$) for length, kilogram ($\\mathrm{kg}$) for mass, and second ($\\mathrm{s}$) for time**, with derived units like the newton built from them.",
        detail: "SI is decimal throughout, so conversions are powers of ten handled by prefixes.",
      },
      {
        term: "U.S. customary units",
        kind: "notation",
        statement: "Shop work in the U.S. still uses the **inch, foot, yard, mile, pound, and second**, related by $12\\ \\mathrm{in} = 1\\ \\mathrm{ft}$ and $5280\\ \\mathrm{ft} = 1\\ \\mathrm{mi}$.",
        detail: "Technicians must convert both ways because drawings, nameplates, and suppliers mix systems.",
      },
      {
        term: "Fundamental versus derived",
        kind: "definition",
        statement: "Length, mass, and time are **fundamental**; area ($\\mathrm{m^2}$), volume ($\\mathrm{m^3}$), speed ($\\mathrm{m/s}$), and force ($\\mathrm{N} = \\mathrm{kg \\cdot m/s^2}$) are **derived** from them.",
        detail: "Unit algebra on derived units is the error filter of Chapter 2.",
      },
      {
        term: "Qualities of a standard",
        kind: "insight",
        statement: "A good standard is **accessible, invariable, and reproducible** so any equipped lab gets the same value.",
        detail: "That is why artifact bars gave way to atomic and light-based definitions.",
      },
    ],
    figures: [
      {
        caption: "Standards ladder: comparing a shop part against the inch, foot, and meter references",
        svg: '<svg role="img" aria-label="Standards ladder: comparing a shop part against the inch, foot, and meter references" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="30" y1="120" x2="370" y2="120"/><line x1="30" y1="110" x2="30" y2="120"/><line x1="150" y1="105" x2="150" y2="120"/><line x1="370" y1="110" x2="370" y2="120"/><rect x="60" y="80" width="120" height="30" rx="2"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="30" y="140">0</text><text x="140" y="140">12 in = 1 ft</text><text x="300" y="140">1 m = 39.37 in</text><text x="70" y="100">shop part</text></g></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Feet and inches to meters",
        problem: "A shaft is $6\\ \\mathrm{ft}\\ 2\\ \\mathrm{in}$ long. Express it in meters using $1\\ \\mathrm{in} = 2.54\\ \\mathrm{cm}$.",
        steps: [
          { label: "Total inches", text: "$6 \\times 12 + 2 = 74\\ \\mathrm{in}$." },
          { label: "To centimeters", text: "$74 \\times 2.54 = 187.96\\ \\mathrm{cm} = 1.8796\\ \\mathrm{m}$." },
          { label: "Round", text: "Given data to the inch justifies $1.88\\ \\mathrm{m}$." },
        ],
        result: "About $1.88\\ \\mathrm{m}$ long.",
      },
      {
        title: "Miles to kilometers",
        problem: "A truck route is $85\\ \\mathrm{mi}$. How many kilometers is that with $1\\ \\mathrm{mi} = 1.609\\ \\mathrm{km}$?",
        steps: [
          { label: "Set up", text: "$85\\ \\mathrm{mi} \\times 1.609\\ \\mathrm{km/mi}$ so miles cancel." },
          { label: "Multiply", text: "$85 \\times 1.609 = 136.765\\ \\mathrm{km}$." },
          { label: "Report", text: "About $137\\ \\mathrm{km}$ at two-significant-digit input." },
        ],
        result: "About $137\\ \\mathrm{km}$.",
      },
    ],
    keyTakeaways: [
      "SI measures length, mass, time in meters, kilograms, seconds; U.S. shops add inches, feet, pounds.",
      "Derived units like $\\mathrm{N}$ and $\\mathrm{m/s}$ are products of base units.",
      "Convert by unity fractions so unwanted units cancel.",
    ],
    quiz: [
      {
        q: "The SI base units for length, mass, and time are",
        options: ["Foot, pound, second", "Meter, kilogram, second", "Inch, slug, hour", "Mile, ounce, minute"],
        answer: 1,
        explanation: "SI uses $\\mathrm{m}$, $\\mathrm{kg}$, $\\mathrm{s}$; the rest are derived.",
      },
      {
        q: "$6\\ \\mathrm{ft}\\ 2\\ \\mathrm{in}$ is about",
        options: ["$1.88\\ \\mathrm{m}$", "$6.20\\ \\mathrm{m}$", "$0.74\\ \\mathrm{m}$", "$18.8\\ \\mathrm{m}$"],
        answer: 0,
        explanation: "$74\\ \\mathrm{in} \\times 2.54\\ \\mathrm{cm/in} = 188\\ \\mathrm{cm}$.",
      },
      {
        q: "A good measurement standard must be",
        options: ["Secret and unique", "Accessible, invariable, and reproducible", "Made of wood", "Changed yearly"],
        answer: 1,
        explanation: "Reproducibility across labs is the whole point of a standard.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s19',
    readingTime: 6,
    intro: "The metric system replaces dozens of conversion factors with one idea: prefixes that are powers of ten. Mastering milli, centi, kilo, and mega turns most conversions into decimal-point moves.",
    objectives: [
      "Use the common metric prefixes from milli to mega correctly",
      "Convert within the metric system by powers of ten",
      "Convert between metric and U.S. units for shop quantities",
    ],
    concepts: [
      {
        term: "Metric prefixes",
        kind: "notation",
        statement: "Prefixes scale the base unit by tens: **milli ($10^{-3}$), centi ($10^{-2}$), kilo ($10^{3}$), mega ($10^{6}$)**, with micro ($10^{-6}$) and nano ($10^{-9}$) for electronics.",
        detail: "So $1\\ \\mathrm{km} = 1000\\ \\mathrm{m}$ and $1\\ \\mathrm{mm} = 0.001\\ \\mathrm{m}$ by definition.",
      },
      {
        term: "Decimal conversion rule",
        kind: "method",
        statement: "Within SI, **move the decimal point** by the prefix difference: $2.5\\ \\mathrm{m} = 250\\ \\mathrm{cm} = 2500\\ \\mathrm{mm}$.",
        detail: "Count steps on the prefix ladder rather than memorizing separate factors.",
      },
      {
        term: "Metric-U.S. bridges",
        kind: "notation",
        statement: "Key bridges are **$1\\ \\mathrm{in} = 2.54\\ \\mathrm{cm}$**, $1\\ \\mathrm{kg} = 2.205\\ \\mathrm{lb}$, and $1\\ \\mathrm{L} = 1.057\\ \\mathrm{qt}$.",
        detail: "Ewen tabulates these; memorizing the three above handles most shop problems.",
      },
      {
        term: "Mass versus weight",
        kind: "definition",
        statement: "SI **mass** in kilograms is invariant; **weight** $W = mg$ is a force in newtons that changes with $g$.",
        detail: "A $10\\ \\mathrm{kg}$ mass weighs $98.0\\ \\mathrm{N}$ on earth but far less on the moon.",
      },
      {
        term: "Choosing the right prefix",
        kind: "insight",
        statement: "Pick the prefix that keeps numbers **between 0.1 and 1000**: $0.0025\\ \\mathrm{m}$ reads better as $2.5\\ \\mathrm{mm}$.",
        detail: "Drawings and meters follow this convention to prevent misread digits.",
      },
    ],
    examples: [
      {
        title: "Millimeters to meters on a drawing",
        problem: "A print calls out $850\\ \\mathrm{mm}$ and $0.045\\ \\mathrm{Mm}$. Express each in meters.",
        steps: [
          { label: "Millimeters", text: "$850\\ \\mathrm{mm} = 850 \\times 10^{-3}\\ \\mathrm{m} = 0.850\\ \\mathrm{m}$." },
          { label: "Megameters", text: "$0.045\\ \\mathrm{Mm} = 0.045 \\times 10^{6}\\ \\mathrm{m} = 45{,}000\\ \\mathrm{m}$." },
          { label: "Sense", text: "One is a bench dimension, the other a pipeline distance — prefixes keep both readable." },
        ],
        result: "$0.850\\ \\mathrm{m}$ and $45{,}000\\ \\mathrm{m}$ ($45.0\\ \\mathrm{km}$).",
      },
      {
        title: "Pounds to kilograms",
        problem: "A motor nameplate reads $88\\ \\mathrm{lb}$. What is its mass in kilograms?",
        steps: [
          { label: "Factor", text: "$1\\ \\mathrm{kg} = 2.205\\ \\mathrm{lb}$, so divide: $88/2.205$." },
          { label: "Compute", text: "$88/2.205 \\approx 39.9\\ \\mathrm{kg}$." },
          { label: "Weight check", text: "$W = mg = 39.9 \\times 9.80 \\approx 391\\ \\mathrm{N}$." },
        ],
        result: "About $39.9\\ \\mathrm{kg}$ of mass, weighing $391\\ \\mathrm{N}$.",
      },
    ],
    keyTakeaways: [
      "Metric prefixes are powers of ten; convert by moving the decimal point.",
      "Remember $1\\ \\mathrm{in} = 2.54\\ \\mathrm{cm}$ and $1\\ \\mathrm{kg} = 2.205\\ \\mathrm{lb}$.",
      "Mass ($\\mathrm{kg}$) is invariant; weight ($\\mathrm{N}$) depends on $g$.",
    ],
    quiz: [
      {
        q: "$2.5\\ \\mathrm{m}$ equals",
        options: ["$25\\ \\mathrm{cm}$", "$250\\ \\mathrm{cm}$", "$0.025\\ \\mathrm{km}$ only", "$2500\\ \\mathrm{km}$"],
        answer: 1,
        explanation: "$1\\ \\mathrm{m} = 100\\ \\mathrm{cm}$, so $2.5 \\times 100 = 250\\ \\mathrm{cm}$.",
      },
      {
        q: "An $88\\ \\mathrm{lb}$ motor has mass about",
        options: ["$194\\ \\mathrm{kg}$", "$39.9\\ \\mathrm{kg}$", "$8.8\\ \\mathrm{kg}$", "$88\\ \\mathrm{kg}$"],
        answer: 1,
        explanation: "$88/2.205 \\approx 39.9\\ \\mathrm{kg}$.",
      },
      {
        q: "Which prefix choice is best for $0.0025\\ \\mathrm{m}$ on a drawing?",
        options: ["$0.0025\\ \\mathrm{m}$", "$2.5\\ \\mathrm{mm}$", "$0.0000025\\ \\mathrm{km}$", "$2500000\\ \\mathrm{nm}$ only"],
        answer: 1,
        explanation: "$2.5\\ \\mathrm{mm}$ keeps the number in the readable 0.1-1000 range.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s20',
    readingTime: 6,
    intro: "Technicians constantly meet numbers too large or small for plain decimals, from microamperes to megohms. Scientific notation writes every value as a digit factor times a power of ten so arithmetic stays exact and compact.",
    objectives: [
      "Write any number in normalized scientific notation",
      "Multiply, divide, and power numbers in scientific notation",
      "Use the calculator EE key and read its output correctly",
    ],
    concepts: [
      {
        term: "Normalized scientific notation",
        kind: "notation",
        statement: "Every value is written **$N \\times 10^{n}$ with $1 \\le N < 10$**, e.g. $0.000472 = 4.72 \\times 10^{-4}$ and $6{,}430{,}000 = 6.43 \\times 10^{6}$.",
        detail: "One nonzero digit before the point is the normalization rule examiners check.",
      },
      {
        term: "Multiplying and dividing powers",
        kind: "method",
        statement: "Multiply digit factors and **add exponents**; divide digit factors and **subtract exponents**: $(2.0 \\times 10^{5})(3.0 \\times 10^{-2}) = 6.0 \\times 10^{3}$.",
        detail: "Renormalize afterward if the digit factor leaves the 1-10 range.",
      },
      {
        term: "Powers and roots",
        kind: "method",
        statement: "Raise the digit factor and **multiply the exponent**: $(2.0 \\times 10^{3})^2 = 4.0 \\times 10^{6}$; for roots divide it.",
        detail: "Squaring doubles the exponent, which is why areas and $I^2R$ heating jump orders of magnitude.",
      },
      {
        term: "Calculator EE form",
        kind: "notation",
        statement: "The **EE or EXP key** enters powers of ten: $4.72\\mathrm{E}{-4}$ means $4.72 \\times 10^{-4}$, never $4.72$ times $e$.",
        detail: "A display of $6.00\\mathrm{E}3$ reads $6000$, with the exponent carrying the size.",
      },
      {
        term: "Addition needs common exponents",
        kind: "method",
        statement: "To add, first **match exponents**, then add digit factors: $4.0 \\times 10^{5} + 3.0 \\times 10^{4} = 4.3 \\times 10^{5}$.",
        detail: "Adding raw digit factors at different exponents is the classic notation error.",
      },
    ],
    figures: [
      {
        caption: "Powers-of-ten ladder: each step multiplies by 10, digit factor $N$ rides along",
        svg: '<svg role="img" aria-label="Powers-of-ten ladder: each step multiplies by 10, digit factor N rides along" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="40" y1="75" x2="360" y2="75"/><polygon points="360,75 348,69 348,81" fill="currentColor"/></g><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="80" y1="65" x2="80" y2="85"/><line x1="160" y1="65" x2="160" y2="85"/><line x1="240" y1="65" x2="240" y2="85"/><line x1="320" y1="65" x2="320" y2="85"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="60" y="60">10⁻³</text><text x="145" y="60">10⁰</text><text x="225" y="60">10³</text><text x="305" y="60">10⁶</text><text x="150" y="110">milli — unit — kilo — mega</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Ohm law with prefixes",
        problem: "Current $I = 4.72 \\times 10^{-4}\\ \\mathrm{A}$ flows through $R = 2.20 \\times 10^{3}\\ \\Omega$. Find $V = IR$.",
        steps: [
          { label: "Multiply factors", text: "$4.72 \\times 2.20 = 10.384$." },
          { label: "Add exponents", text: "$10^{-4} \\times 10^{3} = 10^{-1}$, so $V = 10.384 \\times 10^{-1}$." },
          { label: "Renormalize", text: "$V = 1.0384\\ \\mathrm{V} \\approx 1.04\\ \\mathrm{V}$." },
        ],
        result: "About $1.04\\ \\mathrm{V}$ across the resistor.",
      },
      {
        title: "Power in a heating element",
        problem: "A $15.0\\ \\mathrm{A}$ current flows in a $9.60\\ \\Omega$ element. Compute $P = I^2 R$.",
        steps: [
          { label: "Square current", text: "$I^2 = 225\\ \\mathrm{A^2}$." },
          { label: "Multiply", text: "$P = 225 \\times 9.60 = 2160\\ \\mathrm{W}$." },
          { label: "Notation", text: "$P = 2.16 \\times 10^{3}\\ \\mathrm{W} = 2.16\\ \\mathrm{kW}$." },
        ],
        result: "$2.16 \\times 10^{3}\\ \\mathrm{W}$ of heating power.",
      },
    ],
    keyTakeaways: [
      "Normalize to one digit before the point: $N \\times 10^{n}$, $1 \\le N < 10$.",
      "Multiply factors and add exponents; divide factors and subtract.",
      "Match exponents before adding; read EE displays as powers of ten.",
    ],
    quiz: [
      {
        q: "$(2.0 \\times 10^{5})(3.0 \\times 10^{-2})$ equals",
        options: ["$6.0 \\times 10^{3}$", "$5.0 \\times 10^{3}$", "$6.0 \\times 10^{7}$", "$6.0 \\times 10^{-7}$"],
        answer: 0,
        explanation: "Multiply $2.0 \\times 3.0 = 6.0$ and add $5 + (-2) = 3$.",
      },
      {
        q: "The normalized form of 0.000472 is",
        options: ["$47.2 \\times 10^{-5}$", "$0.472 \\times 10^{-3}$", "$4.72 \\times 10^{-4}$", "$472 \\times 10^{-6}$ only"],
        answer: 2,
        explanation: "One nonzero digit before the point gives $4.72 \\times 10^{-4}$.",
      },
      {
        q: "To add $4.0 \\times 10^{5} + 3.0 \\times 10^{4}$ you must",
        options: ["Add 4.0 + 3.0 directly", "Convert to a common exponent first", "Multiply the exponents", "Drop the smaller term"],
        answer: 1,
        explanation: "$3.0 \\times 10^{4} = 0.30 \\times 10^{5}$, so the sum is $4.30 \\times 10^{5}$.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s21',
    readingTime: 5,
    intro: "Length is the most-measured quantity in the shop, and its conversions seed every area, volume, and speed calculation later. This section locks in inch-foot-yard-mile and millimeter-centimeter-meter bridges with worked conversions.",
    objectives: [
      "Convert lengths within and between English and metric systems",
      "Select sensible length units for a given job",
      "Solve applied length problems with unit cancellation",
    ],
    concepts: [
      {
        term: "English length ladder",
        kind: "notation",
        statement: "**$12\\ \\mathrm{in} = 1\\ \\mathrm{ft}$**, $3\\ \\mathrm{ft} = 1\\ \\mathrm{yd}$, $5280\\ \\mathrm{ft} = 1\\ \\mathrm{mi}$ — the exact rungs for shop conversion.",
        detail: "Chain unity fractions so each unwanted unit cancels in turn.",
      },
      {
        term: "Metric length ladder",
        kind: "notation",
        statement: "**$10\\ \\mathrm{mm} = 1\\ \\mathrm{cm}$**, $100\\ \\mathrm{cm} = 1\\ \\mathrm{m}$, $1000\\ \\mathrm{m} = 1\\ \\mathrm{km}$ — decimal steps only.",
        detail: "A tape reading $2.435\\ \\mathrm{m}$ is $243.5\\ \\mathrm{cm}$ or $2435\\ \\mathrm{mm}$ without any new factor.",
      },
      {
        term: "Bridge factor",
        kind: "method",
        statement: "The exact bridge **$1\\ \\mathrm{in} = 2.54\\ \\mathrm{cm}$** connects the systems; everything else follows by chaining.",
        detail: "From it: $1\\ \\mathrm{m} = 39.37\\ \\mathrm{in}$ and $1\\ \\mathrm{mi} = 1.609\\ \\mathrm{km}$.",
      },
      {
        term: "Unity-fraction method",
        kind: "method",
        statement: "Multiply by **fractions equal to one**, e.g. $\\dfrac{2.54\\ \\mathrm{cm}}{1\\ \\mathrm{in}}$, arranged so unwanted units cancel.",
        detail: "The surviving unit is the answer unit — a built-in check on the setup.",
      },
      {
        term: "Precision of length tools",
        kind: "insight",
        statement: "A **rule reads to $\\pm 0.5\\ \\mathrm{mm}$**, calipers to $0.02\\ \\mathrm{mm}$, micrometers to $0.01\\ \\mathrm{mm}$ — never report more digits than the tool earns.",
        detail: "Conversion cannot manufacture precision the measurement never had.",
      },
    ],
    examples: [
      {
        title: "Blueprint dimension to millimeters",
        problem: "A detail measures $7.25\\ \\mathrm{in}$ on a scaled print. How wide is it in millimeters?",
        steps: [
          { label: "Bridge", text: "$7.25\\ \\mathrm{in} \\times 25.4\\ \\mathrm{mm/in}$." },
          { label: "Compute", text: "$7.25 \\times 25.4 = 184.15\\ \\mathrm{mm}$." },
          { label: "Report", text: "Input to three digits gives $184\\ \\mathrm{mm}$." },
        ],
        result: "About $184\\ \\mathrm{mm}$ wide.",
      },
      {
        title: "Marathon distance check",
        problem: "A race is $26.2\\ \\mathrm{mi}$. Confirm it is about $42.2\\ \\mathrm{km}$.",
        steps: [
          { label: "Convert", text: "$26.2 \\times 1.609 = 42.156\\ \\mathrm{km}$." },
          { label: "Cross-check", text: "Via feet: $26.2 \\times 5280 = 138{,}336\\ \\mathrm{ft} = 42{,}169\\ \\mathrm{m}$." },
          { label: "Agree", text: "Both routes give $42.2\\ \\mathrm{km}$ — setup verified." },
        ],
        result: "$42.2\\ \\mathrm{km}$, confirmed two ways.",
      },
    ],
    keyTakeaways: [
      "Chain unity fractions; the surviving unit checks your setup.",
      "The $2.54\\ \\mathrm{cm/in}$ bridge links every length system.",
      "Round converted values to the precision of the original measurement.",
    ],
    quiz: [
      {
        q: "$7.25\\ \\mathrm{in}$ in millimeters is about",
        options: ["$18.4\\ \\mathrm{mm}$", "$184\\ \\mathrm{mm}$", "$1840\\ \\mathrm{mm}$", "$2.85\\ \\mathrm{mm}$"],
        answer: 1,
        explanation: "$7.25 \\times 25.4 = 184.15\\ \\mathrm{mm}$.",
      },
      {
        q: "Which equals $1\\ \\mathrm{mi}$?",
        options: ["$5280\\ \\mathrm{ft}$", "$1000\\ \\mathrm{ft}$", "$12\\ \\mathrm{ft}$", "$3600\\ \\mathrm{ft}$"],
        answer: 0,
        explanation: "The definition is $5280\\ \\mathrm{ft} = 1\\ \\mathrm{mi}$.",
      },
      {
        q: "A micrometer reading $12.34\\ \\mathrm{mm}$ converted to meters should be reported as",
        options: ["$0.01234\\ \\mathrm{m}$", "$0.01\\ \\mathrm{m}$", "$12.34\\ \\mathrm{m}$", "$1.234\\ \\mathrm{m}$"],
        answer: 0,
        explanation: "Conversion moves the decimal only; it never adds or drops justified digits.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s22',
    readingTime: 6,
    intro: "Area and volume conversions trap students because the linear factor must be squared or cubed. This section derives those factors once and applies them to flooring, tanks, and material estimates.",
    objectives: [
      "Explain why area factors are squared and volume factors cubed",
      "Convert areas and volumes within and across systems",
      "Compute material quantities from area and volume",
    ],
    concepts: [
      {
        term: "Area units square",
        kind: "theorem",
        statement: "If $1\\ \\mathrm{ft} = 12\\ \\mathrm{in}$ then **$1\\ \\mathrm{ft^2} = 144\\ \\mathrm{in^2}$**; linear factors must be squared for area.",
        detail: "Likewise $1\\ \\mathrm{m^2} = 10{,}000\\ \\mathrm{cm^2}$ since $100^2 = 10{,}000$.",
      },
      {
        term: "Volume units cube",
        kind: "theorem",
        statement: "If $1\\ \\mathrm{m} = 100\\ \\mathrm{cm}$ then **$1\\ \\mathrm{m^3} = 10^{6}\\ \\mathrm{cm^3}$**; linear factors must be cubed for volume.",
        detail: "And $1\\ \\mathrm{ft^3} = 1728\\ \\mathrm{in^3}$ from $12^3$.",
      },
      {
        term: "Liter bridge",
        kind: "notation",
        statement: "**$1\\ \\mathrm{L} = 1000\\ \\mathrm{cm^3} = 1.057\\ \\mathrm{qt}$** connects metric volume to shop liquid measure.",
        detail: "A gallon is $3.785\\ \\mathrm{L}$ — the tank-sizing bridge.",
      },
      {
        term: "Rectangle, box, cylinder volumes",
        kind: "method",
        statement: "Box $V = lwh$, cylinder **$V = \\pi r^2 h$** — the two volume formulas that size nearly every tank and bin.",
        detail: "Keep radius versus diameter straight: $r = d/2$ before squaring.",
      },
      {
        term: "Area-volume costing",
        kind: "insight",
        statement: "Multiply computed area or volume by a **unit rate** ($\\$/\\mathrm{ft^2}$, $\\$/\\mathrm{gal}$) to estimate material cost.",
        detail: "Waste factors of 5-10 percent are added after the exact geometry.",
      },
    ],
    figures: [
      {
        caption: "Why $1\\ \\mathrm{ft^2} = 144\\ \\mathrm{in^2}$: a 12-by-12 grid of square inches",
        svg: '<svg role="img" aria-label="Why 1\\ mathrmft^2 = 144\\ mathrmin^2: a 12-by-12 grid of square inches" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="140" y="15" width="120" height="120"/></g><g stroke="currentColor" stroke-width="0.7" fill="none"><line x1="170" y1="15" x2="170" y2="135"/><line x1="200" y1="15" x2="200" y2="135"/><line x1="230" y1="15" x2="230" y2="135"/><line x1="140" y1="45" x2="260" y2="45"/><line x1="140" y1="75" x2="260" y2="75"/><line x1="140" y1="105" x2="260" y2="105"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="145" y="152">12 in × 12 in = 144 in² = 1 ft²</text></g></svg>',
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Flooring estimate",
        problem: "A shop floor is $24\\ \\mathrm{ft}$ by $36\\ \\mathrm{ft}$. How many square meters of coating are needed?",
        steps: [
          { label: "Area", text: "$A = 24 \\times 36 = 864\\ \\mathrm{ft^2}$." },
          { label: "Convert", text: "$1\\ \\mathrm{ft^2} = 0.092903\\ \\mathrm{m^2}$, so $864 \\times 0.092903 \\approx 80.27\\ \\mathrm{m^2}$." },
          { label: "Order", text: "Add 5 percent waste: about $84\\ \\mathrm{m^2}$ to order." },
        ],
        result: "About $80.3\\ \\mathrm{m^2}$ net; order roughly $84\\ \\mathrm{m^2}$.",
      },
      {
        title: "Cylindrical tank gallons",
        problem: "A cylindrical tank has diameter $1.20\\ \\mathrm{m}$ and height $2.00\\ \\mathrm{m}$. What is its capacity in gallons?",
        steps: [
          { label: "Volume", text: "$r = 0.60\\ \\mathrm{m}$; $V = \\pi r^2 h = \\pi(0.36)(2.00) \\approx 2.262\\ \\mathrm{m^3}$." },
          { label: "To liters", text: "$2.262 \\times 1000 = 2262\\ \\mathrm{L}$." },
          { label: "To gallons", text: "$2262/3.785 \\approx 597.6\\ \\mathrm{gal}$." },
        ],
        result: "About $598\\ \\mathrm{gal}$ capacity.",
      },
    ],
    keyTakeaways: [
      "Square the linear factor for area, cube it for volume.",
      "$1\\ \\mathrm{ft^2} = 144\\ \\mathrm{in^2}$; $1\\ \\mathrm{m^3} = 10^{6}\\ \\mathrm{cm^3}$.",
      "Size boxes with $lwh$ and tanks with $\\pi r^2 h$, then convert to sale units.",
    ],
    quiz: [
      {
        q: "$1\\ \\mathrm{ft^2}$ equals",
        options: ["$12\\ \\mathrm{in^2}$", "$144\\ \\mathrm{in^2}$", "$1728\\ \\mathrm{in^2}$", "$1\\ \\mathrm{in^2}$"],
        answer: 1,
        explanation: "Area squares the linear factor: $12^2 = 144$.",
      },
      {
        q: "A $24 \\times 36\\ \\mathrm{ft}$ floor is about",
        options: ["$8.0\\ \\mathrm{m^2}$", "$80.3\\ \\mathrm{m^2}$", "$864\\ \\mathrm{m^2}$", "$0.80\\ \\mathrm{m^2}$"],
        answer: 1,
        explanation: "$864 \\times 0.092903 \\approx 80.3\\ \\mathrm{m^2}$.",
      },
      {
        q: "A cylinder of $r = 0.60\\ \\mathrm{m}$, $h = 2.00\\ \\mathrm{m}$ holds about",
        options: ["$60\\ \\mathrm{gal}$", "$226\\ \\mathrm{gal}$", "$598\\ \\mathrm{gal}$", "$2262\\ \\mathrm{gal}$"],
        answer: 2,
        explanation: "$V \\approx 2.262\\ \\mathrm{m^3} = 2262\\ \\mathrm{L} \\approx 598\\ \\mathrm{gal}$.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s23',
    readingTime: 5,
    intro: "Beyond length, the shop measures time, mass, force, pressure, temperature, and angles. This section collects those secondary units and the exact bridges between English and metric forms.",
    objectives: [
      "Convert mass, time, force, and pressure units across systems",
      "Distinguish mass, force, and weight units correctly",
      "Handle temperature and angle units in applied problems",
    ],
    concepts: [
      {
        term: "Time units",
        kind: "notation",
        statement: "**$60\\ \\mathrm{s} = 1\\ \\mathrm{min}$**, $3600\\ \\mathrm{s} = 1\\ \\mathrm{h}$ — the same in both systems, the base of speed and power units.",
        detail: "Miles per hour to feet per second uses $1\\ \\mathrm{mi/h} = 1.467\\ \\mathrm{ft/s}$.",
      },
      {
        term: "Force units",
        kind: "notation",
        statement: "SI force is the **newton ($1\\ \\mathrm{N} = 1\\ \\mathrm{kg \\cdot m/s^2}$)**; English force is the **pound ($1\\ \\mathrm{lb} = 4.448\\ \\mathrm{N}$)**.",
        detail: "Never state a force in kilograms — kilograms are mass.",
      },
      {
        term: "Pressure units",
        kind: "notation",
        statement: "Pressure is force per area: **$1\\ \\mathrm{Pa} = 1\\ \\mathrm{N/m^2}$**, with $1\\ \\mathrm{psi} = 6.895\\ \\mathrm{kPa}$ and $1\\ \\mathrm{atm} = 101.3\\ \\mathrm{kPa}$.",
        detail: "Gauges in psi convert to SI through kilopascals for $F = PA$ work.",
      },
      {
        term: "Temperature offsets",
        kind: "method",
        statement: "Intervals convert by factors but readings need offsets: **$T_F = \\frac{9}{5}T_C + 32$** and $T_K = T_C + 273.15$.",
        detail: "A $10\\ \\mathrm{C^\\circ}$ rise is an $18\\ \\mathrm{F^\\circ}$ rise, but $10\\ \\mathrm{^{\\circ}C}$ is $50\\ \\mathrm{^{\\circ}F}$.",
      },
      {
        term: "Angle measure",
        kind: "notation",
        statement: "**$360^{\\circ} = 2\\pi\\ \\mathrm{rad}$**, so $1\\ \\mathrm{rad} \\approx 57.3^{\\circ}$; rotation chapters use both.",
        detail: "Revolutions per minute convert via $1\\ \\mathrm{rev} = 2\\pi\\ \\mathrm{rad}$.",
      },
    ],
    examples: [
      {
        title: "Tire pressure to kilopascals",
        problem: "A tire gauge reads $32\\ \\mathrm{psi}$. Express it in kilopascals.",
        steps: [
          { label: "Factor", text: "$1\\ \\mathrm{psi} = 6.895\\ \\mathrm{kPa}$." },
          { label: "Multiply", text: "$32 \\times 6.895 = 220.64\\ \\mathrm{kPa}$." },
          { label: "Report", text: "About $221\\ \\mathrm{kPa}$ gauge." },
        ],
        result: "About $221\\ \\mathrm{kPa}$.",
      },
      {
        title: "Celsius to Fahrenheit",
        problem: "A curing oven runs at $175\\ \\mathrm{^{\\circ}C}$. What is that in Fahrenheit?",
        steps: [
          { label: "Formula", text: "$T_F = (9/5)T_C + 32$." },
          { label: "Compute", text: "$(9/5)(175) + 32 = 315 + 32 = 347$." },
          { label: "Report", text: "About $347\\ \\mathrm{^{\\circ}F}$." },
        ],
        result: "$347\\ \\mathrm{^{\\circ}F}$.",
      },
    ],
    keyTakeaways: [
      "Forces convert by $1\\ \\mathrm{lb} = 4.448\\ \\mathrm{N}$; pressures by $1\\ \\mathrm{psi} = 6.895\\ \\mathrm{kPa}$.",
      "Temperature readings need the $+32$ offset; intervals do not.",
      "Keep mass ($\\mathrm{kg}$) and force ($\\mathrm{N}$, $\\mathrm{lb}$) units strictly apart.",
    ],
    quiz: [
      {
        q: "$32\\ \\mathrm{psi}$ is about",
        options: ["$4.6\\ \\mathrm{kPa}$", "$221\\ \\mathrm{kPa}$", "$32\\ \\mathrm{kPa}$", "$101\\ \\mathrm{kPa}$"],
        answer: 1,
        explanation: "$32 \\times 6.895 = 220.6\\ \\mathrm{kPa}$.",
      },
      {
        q: "$175\\ \\mathrm{^{\\circ}C}$ equals",
        options: ["$207\\ \\mathrm{^{\\circ}F}$", "$347\\ \\mathrm{^{\\circ}F}$", "$175\\ \\mathrm{^{\\circ}F}$", "$75\\ \\mathrm{^{\\circ}F}$"],
        answer: 1,
        explanation: "$(9/5)(175) + 32 = 347$.",
      },
      {
        q: "Which unit correctly states a force?",
        options: ["Kilogram", "Newton or pound", "Meter", "Second"],
        answer: 1,
        explanation: "Force is $\\mathrm{N}$ (SI) or $\\mathrm{lb}$ (English); $\\mathrm{kg}$ is mass.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s24',
    readingTime: 6,
    intro: "No measurement is exact, and honest physics reports only the digits the instrument earns. This section defines significant digits and accuracy, then shows how to round without corrupting results.",
    objectives: [
      "Count significant digits under the standard rules",
      "Distinguish accuracy from instrument resolution",
      "Round converted and computed values correctly",
    ],
    concepts: [
      {
        term: "Significant digits",
        kind: "definition",
        statement: "Significant digits are the **reliably known digits plus one estimated digit**; $12.34\\ \\mathrm{mm}$ from a caliper carries four.",
        detail: "Leading zeros never count ($0.00472$ has three); trapped and trailing-with-point zeros do ($40.70$ has four).",
      },
      {
        term: "Counting rules",
        kind: "method",
        statement: "Nonzero digits always count; **zeros between digits count; leading zeros do not; trailing zeros count only with a shown point**.",
        detail: "So $1005$ has four, $0.0100$ has three, and $500$ is ambiguous without notation.",
      },
      {
        term: "Accuracy",
        kind: "definition",
        statement: "**Accuracy** is closeness to the true value, limited by calibration and technique — distinct from how many digits you write.",
        detail: "An accurate $10.0\\ \\mathrm{V}$ reading sits near $10.0\\ \\mathrm{V}$ true; a $10.0000\\ \\mathrm{V}$ display can still be wrong if uncalibrated.",
      },
      {
        term: "Rounding rule",
        kind: "method",
        statement: "Round half up at the cut digit and **round only once, at the end**: $184.15\\ \\mathrm{mm}$ to three digits is $184\\ \\mathrm{mm}$.",
        detail: "Repeated rounding during a chain drifts the answer; carry a guard digit until the end.",
      },
      {
        term: "Exact counts",
        kind: "insight",
        statement: "Defined conversions ($12\\ \\mathrm{in/ft}$) and counted objects have **unlimited digits** and never limit significance.",
        detail: "Only measured inputs cap the reported digits of a result.",
      },
    ],
    figures: [
      {
        caption: "Reading the estimated digit: the pointer falls between marks, so the last digit is judged",
        svg: '<svg role="img" aria-label="Reading the estimated digit: the pointer falls between marks, so the last digit is judged" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="40" y1="100" x2="360" y2="100"/></g><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="60" y1="85" x2="60" y2="100"/><line x1="120" y1="85" x2="120" y2="100"/><line x1="180" y1="85" x2="180" y2="100"/><line x1="240" y1="85" x2="240" y2="100"/><line x1="300" y1="85" x2="300" y2="100"/></g><g stroke="currentColor" stroke-width="2.5"><line x1="205" y1="40" x2="205" y2="100"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="55" y="120">10</text><text x="115" y="120">11</text><text x="175" y="120">12</text><text x="235" y="120">13</text><text x="200" y="30">reads 12.4 (4 estimated)</text></g></svg>',
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Counting digits",
        problem: "How many significant digits do $0.00472$, $40.70$, and $1005$ carry?",
        steps: [
          { label: "$0.00472$", text: "Leading zeros do not count; 4, 7, 2 count: three digits." },
          { label: "$40.70$", text: "Trapped zero plus trailing zero with point count: four digits." },
          { label: "$1005$", text: "Zeros between nonzeros count: four digits." },
        ],
        result: "Three, four, and four significant digits respectively.",
      },
      {
        title: "Rounding a conversion",
        problem: "Convert $7.25\\ \\mathrm{in}$ ($184.15\\ \\mathrm{mm}$ raw) to proper digits.",
        steps: [
          { label: "Input digits", text: "$7.25$ carries three significant digits." },
          { label: "Cut", text: "Keep three: $184.15 \\to 184$ since the next digit 1 rounds down." },
          { label: "Report", text: "$184\\ \\mathrm{mm}$ — writing $184.15$ would claim five-digit precision never measured." },
        ],
        result: "$184\\ \\mathrm{mm}$ at honest precision.",
      },
    ],
    keyTakeaways: [
      "Count sig digits: nonzeros, trapped zeros, and pointed trailing zeros.",
      "Accuracy is closeness to truth; digits alone do not guarantee it.",
      "Round once at the end; defined factors never limit digits.",
    ],
    quiz: [
      {
        q: "How many significant digits does 40.70 carry?",
        options: ["Two", "Three", "Four", "Five"],
        answer: 2,
        explanation: "4, 0 (trapped), 7, and the pointed trailing 0 all count.",
      },
      {
        q: "$184.15\\ \\mathrm{mm}$ from three-digit input should be reported as",
        options: ["$184.15\\ \\mathrm{mm}$", "$184\\ \\mathrm{mm}$", "$180\\ \\mathrm{mm}$", "$200\\ \\mathrm{mm}$"],
        answer: 1,
        explanation: "Three-digit input justifies three digits: 184.",
      },
      {
        q: "Accuracy means",
        options: ["Many displayed digits", "Closeness to the true value", "A large measured value", "Fast measurement"],
        answer: 1,
        explanation: "Accuracy is truth-closeness; resolution is a separate property.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s25',
    readingTime: 5,
    intro: "A reading can be repeatable yet wrong: that is the gap between precision and accuracy. This section teaches you to diagnose both from repeated measurements and instrument limits.",
    objectives: [
      "Distinguish precision from accuracy with examples",
      "Estimate precision from repeated readings",
      "State how instrument resolution limits reported digits",
    ],
    concepts: [
      {
        term: "Precision",
        kind: "definition",
        statement: "**Precision** is repeatability — the tightness of repeated readings — while accuracy is closeness to the true value.",
        detail: "Four readings $10.31, 10.33, 10.32, 10.32\\ \\mathrm{V}$ are precise; whether they are accurate depends on calibration.",
      },
      {
        term: "Four combinations",
        kind: "insight",
        statement: "Measurements can be **accurate and precise, precise but biased, accurate-on-average but scattered, or neither** — each pattern points to a different fix.",
        detail: "Tight-but-off means recalibrate; centered-but-scattered means improve technique or resolution.",
      },
      {
        term: "Range as precision estimate",
        kind: "method",
        statement: "The **spread (max minus min)** of repeats estimates precision: readings spanning $0.05\\ \\mathrm{mm}$ are precise to about that band.",
        detail: "Report the mean with uncertainty near half the spread for shop purposes.",
      },
      {
        term: "Resolution limit",
        kind: "definition",
        statement: "No reading can honestly carry digits **finer than the instrument resolution** — a $1\\ \\mathrm{mm}$ rule cannot give $0.1\\ \\mathrm{mm}$ digits.",
        detail: "The last reported digit is the estimated fraction of the smallest division.",
      },
      {
        term: "Calibration against standards",
        kind: "method",
        statement: "**Calibration** compares the instrument against a higher standard and corrects systematic bias, restoring accuracy.",
        detail: "Precision without calibration is precisely wrong — the most expensive kind of error.",
      },
    ],
    examples: [
      {
        title: "Diagnosing a caliper set",
        problem: "Four length readings: $25.31, 25.33, 25.32, 25.34\\ \\mathrm{mm}$. A gauge block says the true length is $25.80\\ \\mathrm{mm}$. Diagnose.",
        steps: [
          { label: "Precision", text: "Spread is $0.03\\ \\mathrm{mm}$ — highly repeatable, precise to about $\\pm 0.02\\ \\mathrm{mm}$." },
          { label: "Accuracy", text: "Mean $25.325$ versus true $25.80$: bias of about $-0.48\\ \\mathrm{mm}$ — inaccurate." },
          { label: "Fix", text: "Precise but biased: recalibrate or apply a $+0.48\\ \\mathrm{mm}$ correction, not more repeats." },
        ],
        result: "Precise but inaccurate — a calibration problem, not a steadiness problem.",
      },
      {
        title: "Resolution honesty",
        problem: "A rule with $1\\ \\mathrm{mm}$ divisions reads a part near $143\\ \\mathrm{mm}$. How should it be reported?",
        steps: [
          { label: "Estimate", text: "Judge tenths of the division: e.g. $143.4\\ \\mathrm{mm}$ with the 4 estimated." },
          { label: "Limit", text: "Four digits total is the maximum; $143.42\\ \\mathrm{mm}$ claims resolution never owned." },
          { label: "Report", text: "$143.4\\ \\mathrm{mm}$ with uncertainty about $\\pm 0.5\\ \\mathrm{mm}$." },
        ],
        result: "$143.4\\ \\mathrm{mm}$ is honest; more digits would be fiction.",
      },
    ],
    keyTakeaways: [
      "Precision is repeatability; accuracy is truth-closeness; you need both.",
      "Tight-but-off readings need calibration; scattered readings need technique.",
      "Never report digits finer than the instrument resolution earns.",
    ],
    quiz: [
      {
        q: "Readings 25.31-25.34 mm against a 25.80 mm true value are",
        options: ["Accurate and precise", "Precise but inaccurate", "Accurate but imprecise", "Neither, randomly"],
        answer: 1,
        explanation: "Spread $0.03\\ \\mathrm{mm}$ is tight but the mean sits $0.48\\ \\mathrm{mm}$ low.",
      },
      {
        q: "A $1\\ \\mathrm{mm}$ rule reading should be reported as",
        options: ["$143.42\\ \\mathrm{mm}$", "$143.4\\ \\mathrm{mm}$", "$143\\ \\mathrm{m}$", "$0.1434\\ \\mathrm{mm}$"],
        answer: 1,
        explanation: "One estimated digit beyond the division: tenths of a millimeter.",
      },
      {
        q: "The cure for precise-but-biased readings is",
        options: ["More repeats alone", "Calibration against a higher standard", "Smaller digits", "A different operator only"],
        answer: 1,
        explanation: "Systematic bias is removed by calibration, not by repetition.",
      },
    ],
  },
  {
    sectionId: 'young-ch1-s26',
    readingTime: 6,
    intro: "Measured data combine through multiplication, division, addition, and powers, and each operation has a digit rule. This section gives those rules and works full technician calculations with honest rounding.",
    objectives: [
      "Apply the product/quotient digit rule correctly",
      "Apply the sum/difference place rule correctly",
      "Complete multi-step shop calculations with end-only rounding",
    ],
    concepts: [
      {
        term: "Product and quotient rule",
        kind: "method",
        statement: "For $\\times$ and $\\div$, the result carries **no more significant digits than the weakest input**: $8.45 \\times 2.4 = 20$ (two digits).",
        detail: "Raw $20.28$ must be cut to $20.$ or $2.0 \\times 10^{1}$ to show two digits honestly.",
      },
      {
        term: "Sum and difference rule",
        kind: "method",
        statement: "For $+$ and $-$, the result keeps **no place finer than the coarsest input place**: $12.4 + 3.75 = 16.2$ (tenths rule).",
        detail: "Digits count differently here — decimal place, not digit count, governs.",
      },
      {
        term: "Powers and roots",
        kind: "method",
        statement: "Powers and roots **keep the input digit count**: $(2.50)^2 = 6.25$ keeps three digits.",
        detail: "Squaring does not manufacture certainty; it inherits it.",
      },
      {
        term: "End-only rounding",
        kind: "method",
        statement: "Carry **one guard digit through chains** and round only the final answer to its justified digits.",
        detail: "Early rounding injects up to half a unit of error at every step.",
      },
      {
        term: "Unit-checked arithmetic",
        kind: "method",
        statement: "Every calculation line must **carry and cancel units** alongside digits: $(2.00\\ \\mathrm{m})(3.0\\ \\mathrm{m}) = 6.0\\ \\mathrm{m^2}$.",
        detail: "Units verify the operation while digits verify the honesty.",
      },
    ],
    figures: [
      {
        caption: "Digit rules at a glance: weakest count governs $\\times/\\div$, coarsest place governs $+/-$",
        svg: '<svg role="img" aria-label="Digit rules at a glance: weakest count governs times/div, coarsest place governs +/-" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="30" y="30" width="160" height="90" rx="6"/><rect x="210" y="30" width="160" height="90" rx="6"/></g><g fill="currentColor" font-size="12" font-family="sans-serif"><text x="45" y="60">8.45 × 2.4 = 20</text><text x="45" y="85">weakest count wins</text><text x="225" y="60">12.4 + 3.75 = 16.2</text><text x="225" y="85">coarsest place wins</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Plate area with honest digits",
        problem: "A plate measures $8.45\\ \\mathrm{cm}$ by $2.4\\ \\mathrm{cm}$. What is its area?",
        steps: [
          { label: "Multiply", text: "$8.45 \\times 2.4 = 20.28\\ \\mathrm{cm^2}$ raw." },
          { label: "Rule", text: "Weakest input has two digits ($2.4$), so keep two: $20.\\ \\mathrm{cm^2}$." },
          { label: "Report", text: "Write $2.0 \\times 10^{1}\\ \\mathrm{cm^2}$ to show two digits unambiguously." },
        ],
        result: "$2.0 \\times 10^{1}\\ \\mathrm{cm^2}$ ($20.\\ \\mathrm{cm^2}$).",
      },
      {
        title: "Density from three measurements",
        problem: "A block mass $m = 452.0\\ \\mathrm{g}$ has volume $V = 58.0\\ \\mathrm{cm^3}$ from three-digit dimensions. Find density.",
        steps: [
          { label: "Divide", text: "$\\rho = 452.0/58.0 = 7.7931\\ \\mathrm{g/cm^3}$ raw." },
          { label: "Rule", text: "Three-digit inputs justify three digits: $7.79\\ \\mathrm{g/cm^3}$." },
          { label: "Identify", text: "Near iron at $7.87\\ \\mathrm{g/cm^3}$ — plausibly steel within error." },
        ],
        result: "$7.79\\ \\mathrm{g/cm^3}$ — consistent with steel.",
      },
    ],
    keyTakeaways: [
      "Multiply/divide: weakest digit count wins; add/subtract: coarsest place wins.",
      "Round once at the end with a guard digit through the chain.",
      "Carry units on every line and let them verify the operation.",
    ],
    quiz: [
      {
        q: "$8.45 \\times 2.4$ should be reported as",
        options: ["$20.28$", "$20.$ (two digits)", "$20.3$", "$21$ exactly"],
        answer: 1,
        explanation: "Two-digit input caps the product at two digits.",
      },
      {
        q: "$12.4 + 3.75$ should be reported as",
        options: ["$16.15$", "$16.2$", "$16$", "$16.150$"],
        answer: 1,
        explanation: "Coarsest input place is tenths, so keep tenths.",
      },
      {
        q: "In a chained calculation you should",
        options: ["Round after every step", "Carry a guard digit and round only at the end", "Drop all decimals early", "Ignore units until the end"],
        answer: 1,
        explanation: "End-only rounding prevents accumulated rounding drift.",
      },
    ],
  },
]
