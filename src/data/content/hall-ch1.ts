import type { SectionContent } from '../library'

// ============================================================================
// Halliday, Resnick & Walker — Fundamentals of Physics, 11e Extended
// Chapter 1: Measurement (sections 1.1–1.3, ids hall-ch1-s1..s3)
// ============================================================================

export const hallCh1Content: SectionContent[] = [
  // ------------------------------------------------------------- 1.1
  {
    sectionId: 'hall-ch1-s1',
    readingTime: 6,
    intro: "What is physics? One honest answer: the craft of making carefully reasoned guesses about the world and testing them against careful measurements. Everything in this book — a sprinter's split times, the wavelength of light, the mass of a galaxy — begins here, with the discipline of measuring a quantity by comparing it to an agreed standard. This section installs the SI system, the chain-link method for changing units, and the significant-figure rules that keep computed results honest.",
    objectives: [
      "Explain what it means to measure a quantity against a standard, and name the seven SI base units",
      "Convert measurements between units by the chain-link method, treating each conversion factor as a form of 1",
      "Apply significant-figure rules to products and sums, and state the current definition of the meter",
    ],
    concepts: [
      {
        term: 'What is physics?',
        kind: 'insight',
        statement: "**Physics is a quantitative science: its claims are anchored in measurements.** To measure a quantity is to compare it with a reference standard — a unit — and report how many of those units it contains. The patterns physics finds in nature are patterns among measured numbers.",
        detail: "A measurement without a unit is meaningless: to say a rope is 12 tells you nothing, while 12 meters lets anyone, anywhere, reproduce the measurement.",
      },
      {
        term: 'The SI system',
        kind: 'definition',
        statement: "**SI (Système International) units are the measurement language of physics.** Seven base units exist: the meter (m) for length, kilogram (kg) for mass, second (s) for time, ampere (A) for electric current, kelvin (K) for temperature, mole (mol) for amount of substance, and candela (cd) for luminous intensity. Every other unit is built from these.",
        detail: "Speed is measured in m/s and acceleration in m/s² — derived units assembled from base units by multiplication and division. Decimal multiples use standard prefixes: nano (n, 10⁻⁹), micro (µ, 10⁻⁶), milli (m, 10⁻³), centi (c, 10⁻²), kilo (k, 10³), mega (M, 10⁶), giga (G, 10⁹).",
      },
      {
        term: 'The meter',
        kind: 'definition',
        statement: "**The meter is defined through the speed of light.** Since 1983 the meter is the length of the path traveled by light in vacuum during a time interval of $1/299\\,792\\,458$ of a second — a definition that fixes $c = 299\\,792\\,458$ m/s exactly.",
        detail: "Measured lengths span some forty-two powers of ten: a proton radius is about $10^{-15}$ m, an atom about $10^{-10}$ m, a person $10^0$ m, Earth's radius $6.37 \\times 10^6$ m, the Earth–Sun distance $1.50 \\times 10^{11}$ m, a light-year $9.46 \\times 10^{15}$ m, and the edge of the observable universe roughly $10^{26}$ m.",
      },
      {
        term: 'Changing units',
        kind: 'method',
        statement: "**Multiply by a conversion factor — a fraction equal to 1.** Write the factor so the unwanted unit cancels diagonally, exactly as algebraic factors cancel. A chain of such factors converts anything into anything: $$(2.0\\ \\text{h})\\left(\\frac{60\\ \\text{min}}{1\\ \\text{h}}\\right)\\left(\\frac{60\\ \\text{s}}{1\\ \\text{min}}\\right) = 7.2 \\times 10^{3}\\ \\text{s}.$$",
        detail: "Because each factor equals 1, the physical quantity never changes; only its units are re-expressed. Some conversions are exact by definition — 1 in = 2.54 cm — while others, such as 1 ly = $9.46 \\times 10^{15}$ m, carry experimental uncertainty.",
      },
      {
        term: 'Significant figures',
        kind: 'method',
        statement: "**In multiplication and division, the result carries as many significant figures as the least precise factor; in addition and subtraction, the result is rounded at the last decimal place significant in every term.** A result is never more precise than its weakest input.",
        detail: "Thus $3.1416 \\times 2.34 = 7.35$ (three significant figures, set by 2.34), and $123 + 5.35$ rounds to 128 at the ones place. Trailing zeros after a decimal point (as in 4.50) count as significant; leading zeros (as in 0.0045) never do.",
      },
    ],
    figures: [
      {
        caption: "The chain-link method: each conversion factor equals 1, so multiplying by one changes the units but not the physical quantity. Diagonal slashes cancel units that appear in both a numerator and a denominator, leaving only seconds.",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain-link unit conversion"><rect x="25" y="70" width="95" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="72" y="107" font-size="18" text-anchor="middle" fill="currentColor">2 h</text><text x="72" y="155" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">given quantity</text><text x="137" y="107" font-size="20" text-anchor="middle" fill="currentColor">×</text><text x="200" y="72" font-size="16" text-anchor="middle" fill="currentColor">60 min</text><line x1="150" y1="80" x2="250" y2="80" stroke="currentColor" stroke-width="2"/><text x="200" y="104" font-size="16" text-anchor="middle" fill="currentColor">1 h</text><text x="200" y="150" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">conversion factor = 1</text><text x="277" y="107" font-size="20" text-anchor="middle" fill="currentColor">×</text><text x="355" y="72" font-size="16" text-anchor="middle" fill="currentColor">60 s</text><line x1="305" y1="80" x2="405" y2="80" stroke="currentColor" stroke-width="2"/><text x="355" y="104" font-size="16" text-anchor="middle" fill="currentColor">1 min</text><text x="355" y="150" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">conversion factor = 1</text><text x="432" y="107" font-size="20" text-anchor="middle" fill="currentColor">=</text><rect x="460" y="70" width="170" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="545" y="107" font-size="18" text-anchor="middle" fill="currentColor">7200 s</text><text x="545" y="155" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">reported as 7.2 × 10³ s</text><line x1="78" y1="113" x2="88" y2="93" stroke="currentColor" stroke-width="2" opacity="0.5"/><line x1="206" y1="110" x2="216" y2="90" stroke="currentColor" stroke-width="2" opacity="0.5"/><line x1="192" y1="76" x2="212" y2="54" stroke="currentColor" stroke-width="2" opacity="0.5"/><line x1="349" y1="110" x2="371" y2="90" stroke="currentColor" stroke-width="2" opacity="0.5"/></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'The chain-link conversion, end to end',
        problem: "The Concorde could cross the Atlantic in 2.0 h. Express this time interval in seconds.",
        steps: [
          { label: 'Reasoning', text: "Seconds and hours are related through a factor of 3600, but the bookkeeping is safest with explicit conversion factors, each exactly equal to 1." },
          { label: 'Set up the chain', text: "$(2.0\\ \\text{h})\\left(\\dfrac{60\\ \\text{min}}{1\\ \\text{h}}\\right)\\left(\\dfrac{60\\ \\text{s}}{1\\ \\text{min}}\\right)$ — hours cancel against hours, minutes against minutes." },
          { label: 'Compute', text: "$2.0 \\times 60 \\times 60 = 7200$; since the datum 2.0 h carries two significant figures, the answer is reported with two." },
        ],
        result: "$2.0\\ \\text{h} = 7.2 \\times 10^{3}\\ \\text{s}$",
      },
      {
        title: 'How far a cubic conversion can go',
        problem: "A laboratory tank holds 1.5 m³ of water. Express this volume in cubic centimeters.",
        steps: [
          { label: 'Reasoning', text: "Length, area and volume conversions are where careless factors of ten go to die: 1 m³ is not 100 cm³ but $(100\\ \\text{cm})^3 = 10^{6}\\ \\text{cm}^3$." },
          { label: 'Set up', text: "$(1.5\\ \\text{m}^3)\\left(\\dfrac{100\\ \\text{cm}}{1\\ \\text{m}}\\right)^3$ — the linear factor is cubed along with its units." },
          { label: 'Compute', text: "$1.5 \\times 10^{6}\\ \\text{cm}^3$, with two significant figures matching the data." },
        ],
        result: "$1.5\\ \\text{m}^3 = 1.5 \\times 10^{6}\\ \\text{cm}^3$",
      },
    ],
    keyTakeaways: [
      "Physics progresses by measuring: every quantity is a number times an agreed SI unit, and derived units are built from seven base units.",
      "Change units by multiplying with conversion factors equal to 1, canceling unwanted units diagonally — and cube the factor when converting volumes.",
      "Keep results honest with significant figures: the least precise factor limits products; the coarsest decimal place limits sums.",
    ],
    quiz: [
      {
        q: "Which statement about the conversion factor (60 min)/(1 h) is correct?",
        options: [
          "It equals 1, so multiplying by it cannot change a physical quantity",
          "It equals 60, which is why an hour is 60 minutes",
          "It is an approximation good to about one part in a thousand",
          "It changes the measured quantity by a factor of 60",
        ],
        answer: 0,
        explanation: "Numerator and denominator denote the same duration, so the fraction is exactly 1; only the units in which the quantity is expressed change.",
      },
      {
        q: "How many significant figures are in the measurement 0.00450 m?",
        options: [
          "3, because leading zeros never count but the trailing zero does",
          "5, because all digits shown are significant",
          "6, counting the zeros before the 4 as placeholders",
          "2, because zeros at both ends never count",
        ],
        answer: 0,
        explanation: "Significant figures run from the first nonzero digit (the 4) to the last written digit (a trailing zero after a decimal is significant): 4, 5, 0.",
      },
      {
        q: "A room measures 3.5 m by 2.4 m. Properly reported, its area is",
        options: ["8.40 m²", "8 m²", "8.4 m²", "8.400 m²"],
        answer: 2,
        explanation: "Each factor has two significant figures, so the product 8.4 m² is reported to two — the extra zeros would claim precision the inputs do not have.",
      },
      {
        q: "The meter is presently defined as",
        options: [
          "the length of a platinum–iridium bar kept near Paris",
          "one ten-millionth of the equator-to-pole distance",
          "1 650 763.73 wavelengths of a krypton-86 emission",
          "the distance light travels in vacuum in 1/299 792 458 s",
        ],
        answer: 3,
        explanation: "Since 1983 the definition fixes the speed of light exactly and defines the meter from it. The Paris bar defined the kilogram, and the krypton and meridian definitions are historical.",
      },
    ],
  },
  // ------------------------------------------------------------- 1.2
  {
    sectionId: 'hall-ch1-s2',
    readingTime: 5,
    intro: "What is physics? Time is the raw material of every motion law in this book, yet what time is and how long it takes are different questions. Physics needs the second kind — time intervals — and it gets them from clocks. This section asks what makes a good clock, how the SI second is defined, and how science reaches from the 10⁻¹⁵ s flashes of lasers to the 4 × 10¹⁷ s age of the universe.",
    objectives: [
      "Distinguish time of day from time interval, and explain the operational meaning of time as what a clock reads",
      "State the cesium-133 definition of the second and the accuracy of modern atomic clocks",
      "Locate physics' shortest and longest measured times on a powers-of-ten scale",
    ],
    concepts: [
      {
        term: 'Time as a measured quantity',
        kind: 'definition',
        statement: "**Time is what a clock reads.** Physics never defines time abstractly; it defines it operationally — by pointing to a device that repeats a process uniformly and letting the count of repetitions measure duration.",
        detail: "Any repetitive phenomenon can serve: the swinging pendulum, the beating heart (Galileo timed motion with his own pulse), the vibrating quartz crystal, the cesium atom. The art is choosing a repeater that does not slow down, speed up or tire.",
      },
      {
        term: 'The second',
        kind: 'definition',
        statement: "**One second is the duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium-133 atom.** The definition turns a universal atomic property into a standard any laboratory can reproduce.",
        detail: "The count 9 192 631 770 was chosen so the atomic second would match the astronomical second it replaced — 1/86 400 of a mean solar day.",
      },
      {
        term: 'Atomic clocks and time standards',
        kind: 'insight',
        statement: "**Cesium fountain clocks keep time to about one part in 10¹⁶** — they would neither gain nor lose a second in some 300 million years. The second is by far the most precisely realized of all SI units.",
        detail: "Every GPS satellite carries atomic clocks, and the system's meter-level positioning works only because those clocks agree with the ground network to about a billionth of a second.",
      },
      {
        term: 'The range of measured times',
        kind: 'insight',
        statement: "**Measured time intervals span about forty powers of ten, from the $10^{-23}$ s lifetimes of the most unstable subnuclear particles to the $4.35 \\times 10^{17}$ s age of the universe.** Physics keeps them straight with powers-of-ten notation, never with adjectives like instant or eternal.",
        detail: "In between sit the femtosecond ($10^{-15}$ s) pulses of ultrafast lasers, the millisecond rotation periods of pulsars, the roughly 1 s human heartbeat, and the $10^{5}$ s of a day.",
      },
      {
        term: "Time: solution protocol",
        kind: "method",
        statement: "**Solve Time problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is measuring against SI standards with the chain-link method; the working equation is $\\rho = m/V$, $1\\ \\text{g/cm}^3 = 1000\\ \\text{kg/m}^3$, and each conversion factor equals $1$; every substitution must carry its units so the final unit (SI units and significant figures) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against lengths $10^{-15}\\ \\text{m}$ (proton) to $10^{26}\\ \\text{m}$ (observable universe); times $10^{-23}$ to $10^{17}\\ \\text{s}$; significant-figure and unit-cancellation rules always apply.",
      },
    ],
    examples: [
      {
        title: 'The universe, in seconds',
        problem: "The universe is about 13.8 billion years old. Express this age in seconds.",
        steps: [
          { label: 'Reasoning', text: "A year is not an SI unit, so this is a unit-conversion problem wearing cosmology's clothes. Use 1 y = $3.156 \\times 10^{7}$ s (365.25 days of 86 400 s)." },
          { label: 'Set up', text: "$(13.8 \\times 10^{9}\\ \\text{y})\\left(\\dfrac{3.156 \\times 10^{7}\\ \\text{s}}{1\\ \\text{y}}\\right)$." },
          { label: 'Compute', text: "$13.8 \\times 3.156 = 43.6$, giving $43.6 \\times 10^{16}$ s; with two significant figures in the input age, round to $4.4 \\times 10^{17}$ s." },
        ],
        result: "Age $\\approx 4.4 \\times 10^{17}$ s — the longest time interval in physics.",
      },
      {
        title: "Time: a second look at time scales",
        problem: "Atomic clocks resolve about $10^{-15}\\ \\text{s}$ while the universe is $13.8$ billion years old. How many femtosecond intervals fit in one second, and what is the universe age in seconds?",
        steps: [
          { label: "Count per second", text: "One femtosecond is $1.0\\times 10^{-15}\\ \\text{s}$, so one second holds $1/(1.0\\times 10^{-15}) = 1.0\\times 10^{15}$ intervals." },
          { label: "Universe in seconds", text: "$(13.8\\times 10^{9}\\ \\text{y})(3.156\\times 10^{7}\\ \\text{s/y}) = 4.36\\times 10^{17}\\ \\text{s} \\approx 4.4\\times 10^{17}\\ \\text{s}$." },
          { label: "Compare", text: "The ratio $(4.4\\times 10^{17})/(1.0\\times 10^{-15}) \\approx 4\\times 10^{32}$: the same forty-seven decades separate the shortest clock ticks from the longest time." },
        ],
        result: "$10^{15}$ fs per s; universe $\\approx 4.4\\times 10^{17}\\ \\text{s}$.",
      },
    ],
    keyTakeaways: [
      "Time intervals — not times of day — are what kinematics measures, and a clock is any uniformly repeating process used to count them.",
      "The second equals 9 192 631 770 cesium-133 periods; realized to one part in 10¹⁶, it is the most accurate SI unit.",
      "Powers of ten organize the roughly forty decades of measured time, from 10⁻²³ s particle decays to the 4.4 × 10¹⁷ s age of the universe.",
    ],
    quiz: [
      {
        q: "The SI second is defined by",
        options: [
          "9 192 631 770 oscillation periods of cesium-133 radiation",
          "1/86 400 of the mean solar day",
          "the swing of a one-meter pendulum",
          "the half-life of a radium sample",
        ],
        answer: 0,
        explanation: "The 1967 definition anchors the second to a cesium-133 hyperfine transition; the solar-day and pendulum definitions are its historical predecessors.",
      },
      {
        q: "Which list is ordered from shortest to longest?",
        options: [
          "Laser pulse, heartbeat, pulsar period, age of universe",
          "Heartbeat, laser pulse, pulsar period, age of universe",
          "Pulsar period, laser pulse, heartbeat, age of universe",
          "Laser pulse, pulsar period, heartbeat, age of universe",
        ],
        answer: 3,
        explanation: "A femtosecond laser pulse is 10⁻¹⁵ s, a millisecond pulsar period is 10⁻³ s, a heartbeat about 1 s, and the universe 4.4 × 10¹⁷ s.",
      },
      {
        q: "A friend says: time is what a clock reads. As an operational definition this is",
        options: [
          "valid only for atomic clocks",
          "exactly how physics defines measurable time — it names the procedure that produces the number",
          "a circularity that makes timing impossible",
          "wrong unless the clock is cesium-based",
        ],
        answer: 1,
        explanation: "Operational definitions tie a concept to a measurement procedure, and that is precisely what makes time measurable rather than merely discussable.",
      },
      {
        q: "A modern cesium fountain clock is accurate to about one part in 10¹⁶. This means it can be trusted to",
        options: [
          "replace all other SI base units at once",
          "settle disputes about leap years",
          "keep time for some 300 million years before drifting by a second",
          "measure any interval with zero uncertainty",
        ],
        answer: 2,
        explanation: "One part in 10¹⁶ is about one second per 3 × 10¹⁶ seconds, and a 300-million-year interval is of that order.",
      },
    ],
  },
  // ------------------------------------------------------------- 1.3
  {
    sectionId: 'hall-ch1-s3',
    readingTime: 5,
    intro: "What is physics? Mass is the third pillar of measurement. Length locates events, time orders them, and mass tells how much matter is there to move. A balance compares an unknown mass against known ones — a procedure so robust it works identically in Tokyo, Toronto or the Moon's Sea of Tranquility. This section defines the kilogram, separates mass from weight, and introduces density — mass per volume — as the comparison tool for matter.",
    objectives: [
      "Define mass operationally as the quantity measured by comparison with standard masses on a balance",
      "Describe the 2019 redefinition of the kilogram through the fixed Planck constant",
      "Compute and compare densities, converting freely between g/cm³ and kg/m³",
    ],
    concepts: [
      {
        term: 'Mass',
        kind: 'definition',
        statement: "**Mass measures how much matter an object contains — an intrinsic property, independent of location, temperature or shape.** Operationally, mass is measured by comparison: place the object on one side of a balance and standard masses on the other until they balance.",
        detail: "A balance works in any gravitational field — however weak — because gravity acts on both pans alike; what a balance compares is mass, not weight. Weight, the gravitational force on the object, varies from place to place; mass never does. Weight takes the stage in Chapter 5.",
      },
      {
        term: 'The kilogram',
        kind: 'definition',
        statement: "**The kilogram is the SI unit of mass.** From 1889 to 2019 it was defined as the mass of a single platinum–iridium cylinder — the International Prototype Kilogram — kept at Sèvres, France. Since May 2019 it is defined by fixing the Planck constant at exactly $h = 6.62607015 \\times 10^{-34}\\ \\text{J}{\\cdot}\\text{s}$.",
        detail: "A Kibble balance realizes the new definition by balancing the object's weight against an electromagnetic force measured through quantum-electrical standards tied to $h$ — an artifact-free kilogram available to every laboratory on Earth, and eventually off it.",
      },
      {
        term: 'Measuring mass',
        kind: 'method',
        statement: "**Compare with known masses.** For laboratory objects, the balance and a box of standard masses; for atoms and molecules, the mass spectrometer, which compares them against the carbon-12 standard through the atomic mass unit, $1\\ \\text{u} = 1.6605 \\times 10^{-27}\\ \\text{kg}$.",
        detail: "Atomic masses come quoted in u: a hydrogen atom is 1.008 u, a carbon-12 atom exactly 12 u by definition of the unit.",
      },
      {
        term: 'Density',
        kind: 'definition',
        statement: "**Density is mass per unit volume, $\\rho = m/V$**, measured in $\\text{kg/m}^3$ or, conveniently for laboratory samples, $\\text{g/cm}^3$, with $1\\ \\text{g/cm}^3 = 1000\\ \\text{kg/m}^3$.",
        detail: "Water anchors the scale: $\\rho = 1000$ kg/m³ = 1.00 g/cm³. Gold packs 19.3 g/cm³; sea-level air about 1.2 kg/m³, nearly a thousand times less than water; interstellar gas is of order $10^{-20}$ kg/m³.",
      },
      {
        term: "Mass: solution protocol",
        kind: "method",
        statement: "**Solve Mass problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is measuring against SI standards with the chain-link method; the working equation is $\\rho = m/V$, $1\\ \\text{g/cm}^3 = 1000\\ \\text{kg/m}^3$, and each conversion factor equals $1$; every substitution must carry its units so the final unit (SI units and significant figures) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against lengths $10^{-15}\\ \\text{m}$ (proton) to $10^{26}\\ \\text{m}$ (observable universe); times $10^{-23}$ to $10^{17}\\ \\text{s}$; significant-figure and unit-cancellation rules always apply.",
      },
    ],
    examples: [
      {
        title: 'Nuclear matter, the density champion',
        problem: "A proton has mass $1.67 \\times 10^{-27}$ kg and a radius of about $1.2 \\times 10^{-15}$ m. Model it as a sphere and estimate the density of nuclear matter. Compare with water.",
        steps: [
          { label: 'Reasoning', text: "Density needs a volume: for a sphere $V = \\frac{4}{3}\\pi r^3$, and then $\\rho = m/V$." },
          { label: 'Compute the volume', text: "$r^3 = (1.2 \\times 10^{-15}\\ \\text{m})^3 = 1.73 \\times 10^{-45}\\ \\text{m}^3$, so $V = \\frac{4}{3}\\pi(1.73 \\times 10^{-45}) = 7.2 \\times 10^{-45}\\ \\text{m}^3$." },
          { label: 'Divide', text: "$\\rho = (1.67 \\times 10^{-27})/(7.2 \\times 10^{-45}) = 2.3 \\times 10^{17}\\ \\text{kg/m}^3$ — about $2 \\times 10^{14}$ times the density of water." },
        ],
        result: "$\\rho \\approx 2 \\times 10^{17}\\ \\text{kg/m}^3$: a single teaspoon of nuclear matter would weigh about a billion tonnes.",
      },
      {
        title: "Mass: density check",
        problem: "A rock sample of mass $14\\ \\text{kg}$ displaces $3.5\\ \\text{m}^3$ of water. Compute its density and state whether it is denser than water ($1000\\ \\text{kg/m}^3$).",
        steps: [
          { label: "Write $\\rho = m/V$", text: "Density is mass over volume in $\\text{kg/m}^3$." },
          { label: "Substitute", text: "$\\rho = 14/3.5 = 4\\ \\text{kg/m}^3$." },
          { label: "Compare", text: "$4 < 1000$: it would float; granite at $2700$ would sink." },
        ],
        result: "$\\rho \\approx 4\\ \\text{kg/m}^3$.",
      },
    ],
    keyTakeaways: [
      "Mass is intrinsic and location-independent; balances measure it by comparison, in any gravitational field.",
      "The kilogram, once a platinum artifact in Sèvres, is now defined through the fixed Planck constant.",
      "Density ρ = m/V spans some twenty-one decades — from 10⁻²⁰ kg/m³ interstellar gas to 2 × 10¹⁷ kg/m³ nuclear matter — with water at 1000 kg/m³ as the anchor.",
    ],
    quiz: [
      {
        q: "On the Moon, an astronaut uses a beam balance and standard masses to measure a rock. Compared with the same measurement on Earth, the result is",
        options: [
          "the same, because the Moon's gravity acts on both pans and cancels from the comparison",
          "smaller, because the Moon's gravity is weaker",
          "larger, because the balance amplifies the Moon's gravity",
          "undefined, because balances do not work on the Moon",
        ],
        answer: 0,
        explanation: "The gravitational acceleration multiplies the torques on both sides of a balanced comparison and cancels — only its being nonzero matters.",
      },
      {
        q: "The density of gold is 19.3 g/cm³. In SI units this is",
        options: ["$1.93 \\times 10^{3}$ kg/m³", "$1.93 \\times 10^{4}$ kg/m³", "$1.93 \\times 10^{5}$ kg/m³", "$1.93 \\times 10^{6}$ kg/m³"],
        answer: 1,
        explanation: "1 g/cm³ = 1000 kg/m³, so 19.3 g/cm³ = 1.93 × 10⁴ kg/m³ — gold is 19.3 times denser than water.",
      },
      {
        q: "Since May 2019, the kilogram is defined by",
        options: [
          "the mass of a specific platinum cylinder in Sèvres",
          "one liter of water at 4 °C",
          "fixing the Planck constant h = 6.62607015 × 10⁻³⁴ J·s",
          "the mass of a silicon-28 sphere alone",
        ],
        answer: 2,
        explanation: "The 2019 SI revision replaced the artifact cylinder with a definition anchored to the fixed Planck constant, realized by Kibble balances and silicon spheres.",
      },
      {
        q: "A mass of 2.0 u corresponds to",
        options: ["$2.0 \\times 10^{-27}$ kg", "$3.3 \\times 10^{-27}$ kg", "$1.7 \\times 10^{-27}$ kg", "$1.2 \\times 10^{-26}$ kg"],
        answer: 1,
        explanation: "Multiply by 1 u = 1.6605 × 10⁻²⁷ kg: $2.0 \\times 1.66 \\times 10^{-27} \\approx 3.3 \\times 10^{-27}$ kg.",
      },
    ],
  },
]
