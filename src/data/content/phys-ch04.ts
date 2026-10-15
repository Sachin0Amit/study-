import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Feynman Lectures on Physics, Vol. I (New Millennium Edition)
// Chapter 4: Energy and Gravitation — Lectures 4, 7, 13 and 14
// Master study content. Worked-example numbers are Feynman's own (the blocks
// parable, the reversible machines, the screw jack, the falling Moon, the
// escape velocity, and the orbit tables of Chapter 3).
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh4Content: SectionContent[] = [
  // ------------------------------------------------------------------ 4.1
  {
    sectionId: 'hall-ch7-s17',
    readingTime: 10,
    intro: 'Before computing a single joule, Feynman tells a story about a mother counting a child\u2019s indestructible blocks — a count that survives only by adding terms for blocks under the rug, out the window, at Bruce\u2019s house, locked in the toy box and sunk in the dirty bathwater. That is energy: an abstract number, with a formula for every hiding place, whose total never changes. The most remarkable part of the analogy is that there are no blocks.',
    objectives: [
      'Recount the blocks parable and map each correction term to an energy form',
      'Derive gravitational potential energy from reversible weight-lifting machines',
      'Solve statics problems — inclined plane, screw jack, weighted rod — by energy conservation alone',
      'List the forms of energy and the symmetry behind each conservation law',
    ],
    concepts: [
      {
        term: 'The law of conservation of energy',
        kind: 'law',
        statement: 'There is a numerical quantity — energy — that does not change in the manifold changes nature undergoes; it is **exact so far as we know**, and it is a mathematical principle, not a description of a mechanism.',
        detail: 'Feynman\u2019s image: the bishop on a red square, which after any number of moves — details unknown — is still on some red square. "In physics today, we have no knowledge of what energy is": no blobs, no picture — only formulas whose sum always returns the same number. The count must be closed: energy entering or leaving the system has to be tracked, like Bruce\u2019s blocks.',
      },
      {
        term: 'The parable of the blocks',
        kind: 'insight',
        statement: 'Dennis the Menace owns 28 absolutely indestructible, identical blocks; his mother\u2019s daily count is conserved — but only after adding correction terms for blocks under the rug, outside the window, at Bruce\u2019s house, locked in the toy box (inferred from weight) and sunk in the bathtub (inferred from the water level).',
        detail: 'The toy-box term: a block weighs three ounces and the box weighs 16 ounces when all 28 are visible, so the hidden blocks number (weight \u2212 16)/3. The bathtub term: water originally 6 inches deep rises a quarter inch per block. Her running formula — blocks seen, plus (weight \u2212 16)/3, plus (height \u2212 6)/(1/4) — is exactly the shape of energy bookkeeping. And the punchline of the analogy: **there are no blocks**.',
      },
      {
        term: 'Reversible machines and the best lift',
        kind: 'theorem',
        statement: 'A weight-lifting machine that lowers one weight to lift another cannot lift it higher than a **reversible machine** does; all reversible machines lift to exactly the same height — so the height is computable without ever looking inside the machinery.',
        detail: 'If machine B (lowering one unit by one unit of distance lifts three units by $Y$) out-lifted the reversible machine A (same job, height $X$, with $Y > X$), then running B forward and A backward would restore both machines to start with a weight left raised — perpetual motion, excluded by hypothesis. The reasoning is patterned on Carnot\u2019s analysis of steam engines: results from principles, not from parts.',
      },
      {
        term: 'Gravitational potential energy',
        kind: 'definition',
        statement: 'The sum of weights times heights is the conserved quantity of weight-lifting machines; near the earth, the potential energy of one object is $$\\text{P.E.} = (\\text{weight})\\times(\\text{height}).$$',
        detail: 'A reversible machine that drops one pound by one foot lifts $p$ pounds by $1/p$ foot — three pounds rise $\\frac{1}{3}$ ft. The general principle underneath: the change in energy equals the force times the distance the force acts through. Energy of location relative to something else is called potential energy — gravitational here, electrical when charges are "lifted" apart.',
      },
      {
        term: 'The inclined plane: Stevinus\u2019s epitaph',
        kind: 'insight',
        statement: 'A 1-pound weight on a frictionless 3-4-5 inclined plane is balanced by a hanging weight of **exactly three-fifths of a pound** — deducible from energy conservation alone, without ever resolving a force into components.',
        detail: 'In the balanced (reversible) state the 1-pound weight rises 3 feet while $W$ falls the 5-foot slant, so $3 \\times 1 = 5 \\times W$ gives $W = \\frac{3}{5}$ lb. "Cleverness, however, is relative": Stevinus deduced the same result even more brilliantly — imagine a chain of 14 equal beads looped over the triangle; since it will not perpetual-motion itself around, the lower, symmetrical part must balance by itself, leaving five beads on the long leg balancing three on the short — whatever the ratio of the legs. He was so proud that he had the diagram carved on his tombstone. As Feynman says: if you get an epitaph like that, you are doing fine.',
      },
      {
        term: 'Kinetic energy',
        kind: 'definition',
        statement: 'The energy of motion is fixed by the height a moving body could reach: $$K.E. = \\frac{WV^2}{2g},$$ with $W$ the weight and $g$ the acceleration of gravity — that is, $\\frac{1}{2}mV^2$ in mass language.',
        detail: 'The pendulum argument: gravitational energy disappears at the bottom of the swing yet the bob climbs again, so the motion itself must carry the account. The formula is general — the energy of motion has nothing to do with gravity, which merely measures it. It is approximate in both directions: at great heights gravity weakens, and at high speeds relativity modifies it.',
      },
      {
        term: 'The forms of energy',
        kind: 'insight',
        statement: 'Energy has many forms, each with its own formula: gravitational, kinetic, heat (internal jiggling), elastic, electrical, radiant (light as wigglings of the electromagnetic field), chemical, nuclear, and mass energy $E = mc^2$.',
        detail: 'Heat is not really a new form — it is kinetic and potential energy of invisible atomic motion, revealed by thermometers. Elastic energy is chemical-like, being the attraction of atoms. Nuclear energy has formulas but no fundamental laws behind them yet. A positron and an electron, standing still doing nothing, can annihilate into radiant energy of a definite, calculable amount: an object has energy from its sheer existence.',
      },
      {
        term: 'Conservation laws and symmetries',
        kind: 'insight',
        statement: 'Quantum mechanics ties each subtle conservation law to a symmetry of the world: independence of **when** an experiment is done pairs with energy; independence of **where** with momentum; independence of **orientation** with angular momentum.',
        detail: 'Three further laws are simpler — counting laws like Dennis\u2019s blocks: conservation of charge, of baryons (neutrons and protons, with antibaryons counted as \u22121), and of leptons (electron, mu meson, neutrino; the positron counts as \u22121). Six conservation laws in all — three subtle, tied to space and time, and three mere arithmetic.',
      },
      {
        term: 'Conserved is not available',
        kind: 'insight',
        statement: 'The jiggling of the sea\u2019s atoms is conserved energy that cannot be herded into useful motion without paying elsewhere; the laws governing **available** energy are the laws of thermodynamics and entropy.',
        detail: 'The sun liberates energy in all directions and only one part in two billion falls on the earth — nature "does not really care" about economy. Present supplies — sun, rain, coal, uranium, hydrogen — all trace to the sun. Feynman\u2019s kicker: the hydrogen in 10 quarts of water per second, fused in controlled thermonuclear reactions, would equal all the electrical power generated in the United States; 150 gallons a minute of running water as fuel.',
      },
    ],
    examples: [
      {
        title: 'The reversible machine: why X = 1/3 foot',
        problem: 'A reversible weight-lifting machine lowers a 1-pound weight by 1 foot and thereby lifts a 3-pound weight a distance $X$. Show that $X$ must equal exactly $\\frac{1}{3}$ foot.',
        steps: [
          { label: 'Step 1: No free lifts', text: 'If $X$ exceeded $\\frac{1}{3}$ ft, three pounds would have been raised higher than one pound-foot of work allows; run the reversible machine backward to restore the 1-pound weight and pocket the difference — perpetual motion, which the hypothesis forbids. So the lift cannot exceed $\\frac{1}{3}$ ft.' },
          { label: 'Step 2: Set up the rack of balls', text: 'Arrange a rack with three balls on shelves spaced $X$, plus one ball on a stage 1 foot above the floor. The machine lowers the single ball to the floor, lifting the rack by $X$; the balls end level with the shelves, so rolling them horizontally (no height change, no work) loads three balls onto the raised shelves.' },
          { label: 'Step 3: Read the ledger', text: 'Two of the three lifted balls merely replaced balls that already sat on shelves 2 and 3 — only one ball has effectively risen, by a distance $3X$.' },
          { label: 'Step 4: Close the argument both ways', text: 'If $3X$ exceeded 1 ft, the raised ball could drop back through that foot, restoring the machine and starting the cycle again — perpetual motion. So $3X \\le 1$ ft. Run the whole apparatus backward (it is reversible) to prove $1 \\le 3X$. Hence $3X = 1$ ft.' },
          { label: 'Step 5: Generalize', text: 'One pound falling a distance $d$ through a reversible machine lifts $p$ pounds by $d/p$: the sum of weights times heights never changes.' },
        ],
        result: '$X = \\frac{1}{3}$ foot exactly — derived by reasoning alone, no machinery inspected. This is the content of "gravitational potential energy = weight \u00d7 height".',
      },
      {
        title: 'The screw jack',
        problem: 'A screw jack with 10 threads to the inch is turned by a 20-inch handle. What force at the handle lifts one ton (2000 pounds) through one inch?',
        steps: [
          { label: 'Step 1: One turn of the handle', text: 'The handle sweeps a circle of radius 20 inches: circumference $2\\pi \\times 20 \\approx 126$ inches per turn.' },
          { label: 'Step 2: Turns per inch of lift', text: 'At 10 threads per inch the screw advances one-tenth of an inch per turn, so lifting the ton one inch takes 10 turns.' },
          { label: 'Step 3: Total travel of the force', text: 'The handle end travels $10 \\times 126 = 1260$ inches while the load rises 1 inch.' },
          { label: 'Step 4: Equalize the ledger', text: 'A small force $W$ acting over 1260 inches must supply what 2000 pounds gains over 1 inch: $W \\times 1260 = 2000 \\times 1$, so $W \\approx 1.6$ pounds.' },
        ],
        result: 'About 1.6 pounds at the handle lifts a ton — from conservation of energy alone, no force components needed. (Compare the 3-4-5 inclined plane, which balances 1 pound with $W = \\frac{3}{5}$ lb: lift 3 feet as the load falls 5.)',
      },
      {
        title: 'Balancing a weighted rod (virtual work)',
        problem: 'An 8-foot bar is supported at one end. A 60-pound weight hangs at the middle; a 100-pound weight at 2 feet from the support. What weight $W$ at the free end balances the bar?',
        steps: [
          { label: 'Step 1: Imagine a small virtual motion', text: 'Let the end weight $W$ sink 4 inches; the bar rotates slightly about its support.' },
          { label: 'Step 2: Track the rises', text: 'The middle of the bar (4 ft from the support) rises half as much as the end: 2 inches. The point 2 ft from the support — one quarter of the way out — rises 1 inch.' },
          { label: 'Step 3: Write the energy ledger', text: 'Weights times height changes must sum to zero: $-4W + 2\\times60 + 1\\times100 = 0$.' },
          { label: 'Step 4: Solve', text: '$4W = 120 + 100 = 220$, so $W = 55$ pounds.' },
        ],
        result: '$W = 55$ lb balances the bar. Imagining a tiny motion of a static structure and bookkeeping heights — the principle of virtual work — scales up to the statics of whole bridges.',
      },
    ],
    keyTakeaways: [
      'Energy is an abstract conserved number, not a substance: we own formulas for its forms and no picture of what it is.',
      'The blocks parable: the count survives only by adding a term for every hiding place — and there are no blocks.',
      'Reversible machines all lift equally well, which forces "weight \u00d7 height" to be the conserved bookkeeping near the earth.',
      'Kinetic energy is $\\frac{1}{2}mV^2 = WV^2/2g$; heat is internal jiggling, not a new form; mass itself is energy, $E = mc^2$.',
      'Conservation pairs with symmetry: time \u2194 energy, space \u2194 momentum, rotation \u2194 angular momentum; charge, baryon and lepton conservation is literal counting.',
      'Conserved energy is not necessarily available energy — availability is the business of thermodynamics and entropy (Chapter 10).',
    ],
    quiz: [
      {
        q: 'One day the mother counts 30 blocks. The explanation consistent with the parable is:',
        options: ['The law of conservation of blocks failed', 'Bruce brought extra blocks into the system — energy (or blocks) crossing the boundary must be tracked', 'Two blocks were created from nothing', 'She miscounted, since blocks are only conserved on average'],
        answer: 1,
        explanation: 'The count is exact once the system is closed. Bruce is the analogue of energy entering from outside; the rug, window, toy box and bathtub are the hidden internal forms.',
      },
      {
        q: 'A reversible machine lowers 1 pound by 1 foot and lifts 4 pounds. The lift must be:',
        options: ['$\\frac{1}{4}$ foot', '1 foot', '4 feet', 'It depends on the design of the machine'],
        answer: 0,
        explanation: 'Weights times heights cannot increase: $1 \\times 1 = 4 \\times X$ gives $X = \\frac{1}{4}$ ft. Every reversible machine gives exactly this height, and no real machine beats it.',
      },
      {
        q: 'Kinetic energy written in terms of the weight $W$ is:',
        options: [`$WV^2/2g$`, `$WV/2$`, `$WV^2/2$`, `$mgV/2$`],
        answer: 0,
        explanation: '$K.E. = \\frac{1}{2}mV^2$ with $m = W/g$: $\\frac{1}{2}(W/g)V^2 = WV^2/2g$. The pendulum and the reversible-machine logic fix this form.',
      },
      {
        q: 'Which symmetry is the quantum-mechanical partner of energy conservation?',
        options: ['Independence of position', 'Independence of the absolute time of an experiment', 'Independence of orientation', 'Independence of charge'],
        answer: 1,
        explanation: 'Time-translation invariance pairs with energy; position with momentum; orientation with angular momentum. Charge, baryons and leptons are conserved by simple counting, like the blocks.',
      },
      {
        q: 'By the screw-jack calculation, the force needed at a 20-inch handle (10 threads per inch) to lift one ton is about:',
        options: ['1.6 pounds', '16 pounds', '160 pounds', '0.16 pounds'],
        answer: 0,
        explanation: 'Ten turns of 126 inches each = 1260 inches of handle travel per inch of lift; $W \\times 1260 = 2000 \\times 1$ gives $W \\approx 1.6$ lb — conservation of energy in hardware.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.2
  {
    sectionId: 'hall-ch13-s22',
    readingTime: 11,
    intro: 'The law of gravitation — every object in the universe attracts every other with a force proportional to both masses and inversely as the square of their separation — is, Feynman says, one of the most far-reaching generalizations of the human mind. This lecture is its biography: Tycho\u2019s data, Kepler\u2019s regularities, Newton\u2019s synthesis, the Cavendish balance, tides, Neptune, double stars — and an honest admission of what we still do not know.',
    objectives: [
      'State Kepler\u2019s three laws and explain how Newton extracted the inverse-square law from them',
      'Verify the falling-Moon calculation and the five-mile-per-second orbit',
      'Describe the Cavendish experiment and the meaning of "weighing the earth"',
      'Summarize the evidence for gravity\u2019s reach and the honest status of "what gravity is"',
    ],
    concepts: [
      {
        term: 'The law of universal gravitation',
        kind: 'law',
        statement: 'Every object in the universe attracts every other with a force $$F = \\frac{Gmm\u2032}{r^2}$$ along the line joining them; together with "acceleration = force divided by mass", this contains the whole of celestial mechanics.',
        detail: 'The constant is $G = 6.670\\times10^{-11}$ N\u00b7m\u00b2/kg\u00b2. The inverse-square form is what makes the ellipse, the equal-area law and the three-halves-power period law all fall out of two short principles — a sufficiently talented mathematician could deduce every consequence from the pair of statements alone.',
      },
      {
        term: 'Kepler\u2019s three laws',
        kind: 'law',
        statement: 'I. Each planet moves in an **ellipse with the sun at one focus**; II. the radius vector from the sun sweeps out **equal areas in equal times**; III. the squares of the periods are proportional to the cubes of the semimajor axes: $T \\propto a^{3/2}$.',
        detail: 'The ellipse is the locus of points whose distances from the two foci sum to a constant ($r_1 + r_2 = 2a$) — a foreshortened circle. The laws came from Tycho Brahe\u2019s decades of position measurements on the island of Hven (his idea: settle the debates by measuring carefully rather than arguing), analyzed by Kepler after Tycho\u2019s death — the mother of all data-driven discoveries.',
      },
      {
        term: 'From Kepler to Newton',
        kind: 'method',
        statement: 'The area law is a precise signpost that **all forces are directed exactly toward the sun**; the three-halves-power law forces the magnitude to fall as the **inverse square** of the distance.',
        detail: 'Galileo\u2019s inertia (an undisturbed body keeps constant velocity in a straight line) plus Newton\u2019s insight (force is needed to change speed or direction) means the planets\u2019 deviation from their tangents — which is at right angles to the motion — requires a force toward the sun, not along the orbit. The angels, if any, fly radially inward, and they have no wings.',
      },
      {
        term: 'The falling Moon',
        kind: 'theorem',
        statement: 'An object at the earth\u2019s surface falls 16 feet in the first second; the moon, 60 times farther from the earth\u2019s center (240,000 miles against 4,000), should fall $1/3600$ of that — roughly **1/20 of an inch per second** — and it does.',
        detail: 'The moon does not crash because it also moves along; "falling" means departing from the straight tangent it would follow force-free. Newton\u2019s first careful calculation found a discrepancy so large he shelved the theory — the astronomers\u2019 distance to the moon was wrong; with the corrected figures the agreement was beautiful. The horizontal ball-drop apparatus of the same lecture shows that a bullet fired 2000 feet still drops the same 16 feet in the first second.',
      },
      {
        term: 'The orbiting bullet',
        kind: 'insight',
        statement: 'A bullet at 5 miles per second falls 16 feet per second while the earth\u2019s surface curves away 16 feet every 5 miles — so it never lands: that is an orbit, and that is how Mr. Gagarin stayed up.',
        detail: 'The tangent is the mean proportional between the two parts of the diameter cut by the chord: $x = \\sqrt{(16/5280)\\times8000} \\approx 5$ miles. Gagarin\u2019s 25,000-mile circuit at approximately 5 mi/s took a little longer only because he flew a little higher. This arithmetic is the seed of every satellite calculation since.',
      },
      {
        term: 'Tides',
        kind: 'insight',
        statement: 'The tides run **twice** a day because the moon pulls the near-side water more than the earth\u2019s center and the far-side water less: both sides bulge away from the center of the earth.',
        detail: 'Both ancient one-tide theories — water pulled up under the moon; the earth pulled away from the water — are half right, and the true picture is the combination. The earth and moon each circle their common center of gravity (a point inside the earth, but not at its center); the water can flow while the rigid earth cannot, and the two imbalances raise two tidal bulges.',
      },
      {
        term: 'The reach of gravity',
        kind: 'insight',
        statement: 'Newton\u2019s law governs Jupiter\u2019s moons, the wobbles of planets, double stars, globular clusters, whole galaxies and clusters of galaxies — apparently out to tens of millions of light years.',
        detail: 'Why is the earth round? Because everything attracts everything else, the earth "has attracted itself together as far as it can" — and the law even gets the slightly squashed shape right once rotation is included. Roemer\u2019s timing of Jupiter\u2019s moons (ahead of schedule when Jupiter is near, behind when far — 1656) showed that light travels at finite speed: the first estimate of $c$. Uranus misbehaving beyond all computed perturbations led Adams and Le Verrier to calculate where a new planet must be — "Gentlemen, point your telescope to such-and-such a place" — and Neptune was there. Sirius B traces a perfect ellipse about Sirius A (measured from 1862 to 1904) whose focus is displaced only because we view the orbit at a tilt. A galaxy spans 50,000\u2013100,000 light years against the earth\u2013sun distance of 8\u2153 light minutes; galaxies themselves cluster. And from dust clouds whose pieces attract one another into lumps, stars may be born: a 1947 photograph of one gas region, compared with another taken seven years later, shows two new bright spots — though it seems too lucky to catch one star forming in seven years, and two is luckier still.',
      },
      {
        term: 'The Cavendish experiment',
        kind: 'method',
        statement: 'Two small lead balls on an arm hung by a very fine torsion fiber are attracted by two large fixed balls; the twist of the fiber measures the force and yields $$G = 6.670\\times10^{-11}\\ \\text{N\u00b7m}^2/\\text{kg}^2.$$',
        detail: 'The apparatus must be sealed against air currents and shielded from electrical charging — the force between laboratory objects is almost unimaginably weak. Knowing $G$ and how hard the earth pulls, the earth\u2019s mass follows: the experiment has been called "weighing the earth", and it is the only road to that number.',
      },
      {
        term: 'What is gravity?',
        kind: 'insight',
        statement: 'Newton made no hypotheses about the machinery, and no one since has supplied one that works: every proposed mechanism — the 1750 absorbed-particles picture, for instance — predicts phenomena that do not exist.',
        detail: 'The particle-absorption mechanism gets the inverse-square law right but predicts a drag that would long ago have slowed the earth out of its orbit. Gravity is not explained by the other forces. Its proportional-to-mass character is exact to one part in a billion (E\u00f6tv\u00f6s 1909, refined by Dicke) — which is why astronauts float weightless alongside a released piece of chalk. Einstein\u2019s relativity modifies Newton (nothing signals faster than light; light itself is gravitationally deflected — observed at eclipses); the quantum version has not yet been built.',
      },
    ],
    examples: [
      {
        title: 'Does the moon fall?',
        problem: 'Verify the inverse-square law by checking how far the moon "falls" in one second, given that a surface object falls 16 feet in the first second, the earth\u2019s radius is 4000 miles, and the moon orbits at 240,000 miles.',
        steps: [
          { label: 'Step 1: State what falling means', text: 'Without force the moon would glide along the tangent of its orbit; falling is the gap between the tangent and the actual circular path after one second.' },
          { label: 'Step 2: Apply the inverse square', text: 'The moon is $240{,}000/4{,}000 = 60$ earth-radii from the center, so gravity there is weaker by $60^2 = 3600$.' },
          { label: 'Step 3: Scale the fall', text: 'Sixteen feet per second at the surface becomes $16/3600$ ft at the moon\u2019s distance: $16 \\times 12/3600 = 0.053$ inch — roughly 1/20 of an inch per second.' },
          { label: 'Step 4: Compare', text: 'Computing the moon\u2019s actual departure from its tangent (from the orbit radius and the roughly 29-day period) gives just about 1/20 inch per second — the check succeeds, as it did for Newton once the moon\u2019s distance had been corrected.' },
        ],
        result: 'The moon falls about 1/20 inch per second — precisely what $1/r^2$ predicts at 60 earth-radii. The apple and the Moon obey one law.',
      },
      {
        title: 'The five-mile-per-second satellite',
        problem: 'How fast must a horizontal bullet travel so that its 16-foot-per-second fall just matches the earth\u2019s curvature — that is, to orbit just above the surface?',
        steps: [
          { label: 'Step 1: The geometry', text: 'Over a distance $x$ along the tangent the earth (radius $R = 4000$ miles) drops away by $S = 16$ ft. The tangent-secant theorem — the tangent is the mean proportional between the two parts of the diameter — gives $x^2 = 2RS$.' },
          { label: 'Step 2: Insert the numbers', text: '$x = \\sqrt{(16/5280)\\times8000} = \\sqrt{24.24} \\approx 4.9$ miles — "very close to 5 miles".' },
          { label: 'Step 3: Read off the speed', text: 'The bullet must cover those 5 miles during the one second in which it falls 16 feet: about 5 miles per second.' },
          { label: 'Step 4: Connect to history', text: 'Mr. Gagarin went 25,000 miles around the earth at approximately 5 mi/s, taking a little longer because he was a little higher. Every low-orbit satellite since repeats this arithmetic.' },
        ],
        result: 'About 5 miles per second: falling 16 ft per second while the ground curves away 16 ft every 5 miles — a permanent fall that never lands.',
      },
      {
        title: 'Gravity versus electricity: the 10\u2074\u00b2 hierarchy',
        problem: 'Compare the electrical repulsion and the gravitational attraction between two electrons, using $1/4\\pi\\epsilon_0 = 8.99\\times10^9$ N\u00b7m\u00b2/C\u00b2, $e = 1.60\\times10^{-19}$ C, $G = 6.67\\times10^{-11}$ N\u00b7m\u00b2/kg\u00b2 and $m_e = 9.11\\times10^{-31}$ kg.',
        steps: [
          { label: 'Step 1: The electrical constant', text: '$(1/4\\pi\\epsilon_0)e^2 = (8.99\\times10^9)(1.60\\times10^{-19})^2 = 2.30\\times10^{-28}$ N\u00b7m\u00b2.' },
          { label: 'Step 2: The gravitational constant', text: '$Gm_e^2 = (6.67\\times10^{-11})(9.11\\times10^{-31})^2 = 5.54\\times10^{-71}$ N\u00b7m\u00b2.' },
          { label: 'Step 3: The ratio', text: '$F_e/F_g = 2.30\\times10^{-28}/5.54\\times10^{-71} = 4.15\\times10^{42}$; Feynman quotes $4.17\\times10^{42}$, the difference being rounding. Both forces share the same $1/r^2$, so the ratio is distance-independent — a pure constant of nature.' },
          { label: 'Step 4: Ponder it', text: 'Such a number cannot be accidental, like the ratio of the volume of the earth to that of a flea. Feynman notes the curious coincidence that the age of the universe ($2\\times10^{10}$ yr) divided by the time for light to cross a proton ($10^{-24}$ s) is also about $10^{42}$ — a numerological hint that has not yet become physics.' },
        ],
        result: 'Electricity beats gravity by about $4.2\\times10^{42}$ for two electrons, at every distance alike. Gravity rules the heavens only because bulk matter is electrically neutral.',
      },
    ],
    keyTakeaways: [
      '$F = Gmm\u2032/r^2$: every object attracts every other; with $F = ma$, these two lines generate all of celestial mechanics.',
      'Kepler: ellipses with the sun at a focus; equal areas in equal times; $T \\propto a^{3/2}$.',
      'The area law means the force is central; the three-halves-power law means it is inverse-square.',
      'The moon falls about 1/20 inch per second — exactly $1/3600$ of the surface 16 feet, at 60 earth-radii.',
      'Five miles per second orbits the earth: perpetual falling with the ground curving away.',
      'Cavendish\u2019s torsion balance gives $G = 6.670\\times10^{-11}$ N\u00b7m\u00b2/kg\u00b2 — "weighing the earth".',
      'Gravity has no known machinery; it is proportional to mass to one part in a billion (E\u00f6tv\u00f6s, Dicke), and Einstein\u2019s relativity — not yet quantum — is the current best word.',
    ],
    quiz: [
      {
        q: 'Kepler\u2019s third law states that the periods of the planets are proportional to:',
        options: ['The orbital radii', 'The $3/2$ power of the semimajor axis — equivalently $T^2 \\propto a^3$', 'The square of the semimajor axis', 'The inverse of the semimajor axis'],
        answer: 1,
        explanation: '$T \\propto a^{3/2}$, that is, $T^2 \\propto a^3$. Newton read the inverse-square law directly out of this regularity.',
      },
      {
        q: 'Kepler\u2019s equal-area law is a direct consequence of (and signpost for):',
        options: ['The constancy of each planet\u2019s speed', 'All forces being directed exactly toward the sun', 'The inverse-square dependence', 'The smallness of the planets'],
        answer: 1,
        explanation: 'Central forces produce equal areas in equal times — and, conversely, the observed equal areas told Newton that the force on each planet points precisely sunward.',
      },
      {
        q: 'An object at the earth\u2019s surface falls 16 ft in the first second. At the moon\u2019s distance (60 earth-radii) the corresponding fall in one second is:',
        options: ['$16/60$ ft', '$16/3600$ ft — about 1/20 of an inch', '16 ft — gravity reaches that far unchanged', 'Zero — the moon does not fall'],
        answer: 1,
        explanation: 'The inverse-square law weakens gravity by $60^2 = 3600$: $16/3600$ ft $= 0.053$ inch $\\approx 1/20$ inch, matching the moon\u2019s computed departure from its tangent.',
      },
      {
        q: 'The Cavendish experiment is called "weighing the earth" because:',
        options: ['It places the earth on a balance', 'Measuring $G$ between laboratory masses, together with the earth\u2019s known pull, yields the earth\u2019s mass', 'It measures the weight of the lead balls', 'It determines the earth\u2019s radius'],
        answer: 1,
        explanation: 'Lead balls twist a torsion fiber; from that force and the known masses and separations, $G$ follows ($6.670\\times10^{-11}$ N\u00b7m\u00b2/kg\u00b2). The earth\u2019s pull is measurable, so its mass — obtainable no other way — follows.',
      },
      {
        q: 'The 1750 "absorbed particles" mechanism for gravity failed because it predicted:',
        options: ['The wrong exponent in the force law', 'A drag that would have slowed the earth out of its orbit long ago — a moving earth would meet more particles head-on', 'That gravity should repel', 'That gravity should vary with the seasons'],
        answer: 1,
        explanation: 'Running in the rain wets your face more than the back of your head; likewise the orbiting earth would feel a net backward impulse and spiral in. The earth is still in its orbit, so the mechanism — whatever its inverse-square virtues — is wrong.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.3
  {
    sectionId: 'hall-ch8-s11',
    readingTime: 10,
    intro: 'The study of energy now meets Newton\u2019s laws head on. The bridge is work — the integral of force along the path. Feynman proves that kinetic energy changes by exactly the work done, builds potential energies for gravity near and far and for springs, and closes with two classic computations: the field of an infinite sheet and of a spherical shell, the latter explaining why the earth pulls as if all its mass sat at its center.',
    objectives: [
      'Prove the power theorem $dT/dt = \\mathbf{F}\\cdot\\mathbf{v}$ and define work as a line integral',
      'Derive the potential energies of gravity (near and far) and of springs',
      'Prove zero closed-path work for gravity and extend conservation to many-particle systems',
      'Compute the gravitational fields of an infinite sheet and a spherical shell',
    ],
    concepts: [
      {
        term: 'The power theorem',
        kind: 'theorem',
        statement: 'Differentiating $T = \\frac{1}{2}mv^2$ gives $$\\frac{dT}{dt} = m\\frac{d\\mathbf{v}}{dt}\\cdot\\mathbf{v} = \\mathbf{F}\\cdot\\mathbf{v}$$ — the rate of change of kinetic energy equals the power delivered by the forces.',
        detail: 'For the falling body the force is the constant $-mg$ and the velocity is $dh/dt$, so $dT/dt = -mg(dh/dt)$ — "miracle of miracles", minus the rate of change of $mgh$: the two changes cancel and $T + U$ stays constant. The same cancellation survives a frictionless curved track, where only the tangential component $F_t = -mg(dh/ds)$ does any work.',
      },
      {
        term: 'Work as a line integral',
        kind: 'definition',
        statement: 'The change in kinetic energy between two points on any path is $$\\Delta T = \\int_1^2 \\mathbf{F}\\cdot d\\mathbf{s},$$ the **work** done by the force — only the force component along the motion contributes.',
        detail: 'Units: newton-meters, called joules; power is joules per second, or watts; the electricity company\u2019s kilowatt-hour is $1000 \\times 3600 = 3.6\\times10^6$ joules. Holding a hundred-pound weight does no physical work — the sweat is a peculiarity of muscle design (Section 4.4 takes that up).',
      },
      {
        term: 'Work by gravity near the earth',
        kind: 'theorem',
        statement: 'With $F_z = -mg$ the only force, $\\int_1^2 \\mathbf{F}\\cdot d\\mathbf{s} = -mg(z_2 - z_1)$ on **any path** — only the change in height counts.',
        detail: 'A mass swinging on a pivot takes $\\mathbf{F}\\cdot d\\mathbf{s}$ with one sign going up and the opposite sign coming down, so the round-trip work is zero and it returns to the bottom at full speed. Friction breaks this: its force always opposes the motion, so mechanical energy steadily leaves the account — and reappears as heat.',
      },
      {
        term: 'Potential energy at large distances',
        kind: 'theorem',
        statement: 'For radial fall toward a mass $M$, integrating $-GMm/r^2$ gives $$T_2 - T_1 = GMm\\left(\\frac{1}{r_2} - \\frac{1}{r_1}\\right),$$ so $\\frac{1}{2}mv^2 - GMm/r$ is constant on the motion.',
        detail: 'The old $mgh$ is the small-distance limit of the new $-GMm/r$ bookkeeping. A planet on any frictionless path arrives at a given radius with the same speed it would have had falling straight to that radius — the conservation law ignores the itinerary.',
      },
      {
        term: 'Closed paths and the sawtooth proof',
        kind: 'theorem',
        statement: 'The work of gravity around **any closed path is zero**: radial segments contribute $GMm(1/r)$-differences that cancel in pairs, circular segments contribute nothing (force perpendicular to motion), and any curve can be imitated by fine radial-circular sawteeth.',
        detail: 'Why it matters: if the closed-path work were positive, looping it would manufacture energy — perpetual motion; if negative, loop it backward. A tiny triangle on the path does the same work as cutting across its hypotenuse because $s\\cos\\theta = x$ — so the notches can be smoothed without changing the answer.',
      },
      {
        term: 'Spring potential energy',
        kind: 'theorem',
        statement: 'For the restoring force $F = -kx$, $$W = \\int_0^x(-kx)\\,dx = -\\frac{1}{2}kx^2,$$ so $\\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$ is constant: a running balance of $x^2$ against $v^2$.',
        detail: 'Pull the mass down and hold it: all the energy is potential. Release: at the equilibrium point $x = 0$ the speed is maximal; at the other extreme $v = 0$ again. The ledger balances at every instant, in exact analogy with the falling body — the theorem behind the oscillator chapters to come (Chapter 6).',
      },
      {
        term: 'Energy of a system of particles',
        kind: 'theorem',
        statement: 'For any number of mutually gravitating bodies, $$\\sum_i \\frac{1}{2}m_iv_i^2 \\; - \\!\\!\\sum_{\\text{pairs }ij}\\frac{Gm_im_j}{r_{ij}} = \\text{const},$$ kinetic energies adding per particle and potential energies per pair.',
        detail: 'The pairwise structure comes from superposition of forces: bring the bodies in from infinity one by one, and the work of each assembly step adds because forces — hence works — add. The sum-over-pairs is exact for Newtonian gravitation and a good approximation for molecular forces, whose potential is sometimes a more complicated function of all the positions. The same formula audits a numerical orbit: the energy per unit mass $\\frac{1}{2}(v_x^2 + v_y^2) - 1/r$ should not drift; in the coarse Table 9-2 calculation of Chapter 3 it changed by some 1.5 percent, flagging the finite intervals.',
      },
      {
        term: 'The field of an infinite sheet',
        kind: 'theorem',
        statement: 'A uniform, infinite sheet with surface mass density $\\mu$ pulls a unit mass with $$C = 2\\pi G\\mu$$ — **independent of the distance** from the sheet.',
        detail: 'The ring-by-ring integral gives $C_x = -2\\pi G\\mu a\\int_a^\\infty dr/r^2 = -2\\pi G\\mu$: up close, most matter pulls at a bad angle; far away, more matter pulls well — the two effects cancel. The electrical twin: one charged plate gives $\\sigma/2\\epsilon_0$ on each side, and two oppositely charged plates give zero outside and $\\sigma/\\epsilon_0$ between — the capacitor result used in Section 4.4.',
      },
      {
        term: 'The spherical shell',
        kind: 'theorem',
        statement: 'Outside a thin uniform shell, the potential and force are exactly as if all the mass sat at the center: $W = -Gm_0m/R$; **inside**, the potential is the constant $-Gm_0m/a$ and the force is zero.',
        detail: 'Slice the shell into rings, each carrying $dm = 2\\pi a\\mu\\,dx$ with $\\mu = m/4\\pi a^2$, all at one distance $r$ with $r^2 = a^2 + R^2 - 2Rx$; the substitution $dx/r = -dr/R$ collapses the integral. The earth is a nest of such shells — hence "the earth pulls as if concentrated at its center" is a theorem, not a miracle.',
      },
    ],
    examples: [
      {
        title: 'Auditing a falling ball',
        problem: 'A ball is released from a height of 400 feet. Using $s = 16t^2$, $v = 32t$ and $g = 32$ ft/s\u00b2, verify that $T + U$ (with $U$ = weight \u00d7 height) stays at 400\u00b7W throughout the fall.',
        steps: [
          { label: 'Step 1: Set the zero', text: 'Measure fallen distance downward as $s$, so the remaining height is $400 - s$ and $U = W(400 - s)$, where $W$ is the weight.' },
          { label: 'Step 2: Kinetic energy in weight units', text: '$T = \\frac{1}{2}mv^2 = \\frac{W}{2g}v^2 = Wv^2/64$.' },
          { label: 'Step 3: Check at t = 3 s', text: 'Fallen $s = 144$ ft with speed $v = 96$ ft/s: $T = W(96^2/64) = 144W$ and $U = W(400 - 144) = 256W$; the sum is $400W$.' },
          { label: 'Step 4: Check at t = 5 s', text: 'Fallen $s = 400$ ft (arrival) with speed $v = 160$ ft/s: $T = W(160^2/64) = 400W$ and $U = 0$ — the same $400W$ total.' },
          { label: 'Step 5: See the identity', text: '$T = Wv^2/64 = W(32t)^2/64 = W(16t^2) = Ws$ exactly: the kinetic energy at any moment equals the weight times the distance already fallen — precisely the potential energy given up.' },
        ],
        result: 'The sum $T + U = 400W$ at every instant — a numerical audit of the power theorem $dT/dt = \\mathbf{F}\\cdot\\mathbf{v}$.',
      },
      {
        title: 'The spring: x\u00b2 traded against v\u00b2',
        problem: 'In units with $k = m = 1$, a mass is pulled to $x = 1$ and released from rest. Confirm from Table 9-1 (the numerical solution of Chapter 3) that $\\frac{1}{2}v^2 + \\frac{1}{2}x^2$ stays at $\\frac{1}{2}$.',
        steps: [
          { label: 'Step 1: Initial energy', text: 'At release, $v = 0$ and $x = 1$: $E = \\frac{1}{2}(0) + \\frac{1}{2}(1)^2 = 0.500$.' },
          { label: 'Step 2: Read the table at t = 1.0 s', text: 'Table 9-1 gives $x = 0.540$; the midpoint velocities bracketing that instant are $-0.814$ and $-0.868$, so $v \\approx -0.84$.' },
          { label: 'Step 3: Compute the energy', text: '$E = \\frac{1}{2}(0.84^2) + \\frac{1}{2}(0.540^2) = \\frac{1}{2}(0.706 + 0.292) = 0.499$ — the initial $0.500$ to within a part in five hundred.' },
          { label: 'Step 4: Interpret the residue', text: 'The tiny deficit is the numerical error of the coarse $\\epsilon = 0.1$ s interval, not physics: shrinking $\\epsilon$ closes it, the error falling as the square of the interval.' },
          { label: 'Step 5: The exact statement', text: 'For the true motion $x = \\cos t$ and $v = -\\sin t$, so $\\frac{1}{2}(\\cos^2 t + \\sin^2 t) = \\frac{1}{2}$ identically.' },
        ],
        result: 'The energy holds at $\\approx 0.50$ throughout — $\\frac{1}{2}kx^2$ and $\\frac{1}{2}mv^2$ trade places exactly, as the conservation theorem demands.',
      },
      {
        title: 'The spherical shell: potential outside and inside',
        problem: 'Show that a thin uniform shell of mass $m$ and radius $a$ gives a particle of mass $m_0$ (outside, at distance $R$ from the center) the potential energy $W = -Gm_0m/R$.',
        steps: [
          { label: 'Step 1: Ring mass', text: 'A slice of axial width $dx$ carries $dm = 2\\pi a\\mu\\,dx$, where the surface density is $\\mu = m/4\\pi a^2$ (a zone\u2019s area is proportional to its axial width).' },
          { label: 'Step 2: One distance per ring', text: 'Every point of the ring lies at $r = \\sqrt{a^2 + R^2 - 2Rx}$ from the particle, so its contribution is $dW = -Gm_0\\,dm/r$.' },
          { label: 'Step 3: The magic substitution', text: 'From $r^2 = a^2 + R^2 - 2Rx$ comes $dx = -(r/R)dr$; sweeping the shell from the far side ($x = -a$, $r = R + a$) to the near side ($x = a$, $r = R - a$).' },
          { label: 'Step 4: Integrate', text: '$W = \\frac{Gm_0 2\\pi a\\mu}{R}\\int_{R+a}^{R-a}dr = -\\frac{Gm_0 2\\pi a\\mu}{R}(2a) = -\\frac{Gm_0(4\\pi a^2\\mu)}{R} = -\\frac{Gm_0m}{R}$.' },
          { label: 'Step 5: The inside', text: 'For an interior point the same integral instead spans $a - R$ to $a + R$ and yields the constant $-Gm_0m/a$: a constant potential means zero force anywhere inside.' },
        ],
        result: 'Outside: $-Gm_0m/R$, exactly a point mass at the center. Inside: the constant $-Gm_0m/a$ and no force at all. The layered earth inherits the outside result.',
      },
    ],
    keyTakeaways: [
      'The power theorem: $dT/dt = \\mathbf{F}\\cdot\\mathbf{v}$; multiplying by $dt$ and integrating gives work $\\Delta T = \\int_1^2\\mathbf{F}\\cdot d\\mathbf{s}$.',
      'Only the force component along the motion works; perpendicular forces (constraints, magnetism) never change kinetic energy.',
      'Near-earth gravity does work $-mg\\Delta z$ on any path; at large distances the conserved combination is $\\frac{1}{2}mv^2 - GMm/r$.',
      'Gravity does zero work around any closed path — the sawtooth proof — which is what licenses a potential energy.',
      'Springs: $U = \\frac{1}{2}kx^2$, trading exactly against $\\frac{1}{2}mv^2$.',
      'Many bodies: kinetic energies add per particle, potential energies per pair — superposition at work.',
      'Infinite sheet: field $2\\pi G\\mu$ independent of distance; spherical shell: point-mass outside, zero force inside — so the earth pulls as if concentrated at its center.',
    ],
    quiz: [
      {
        q: 'The rate of change of the kinetic energy of a particle equals:',
        options: ['The force', 'The power $\\mathbf{F}\\cdot\\mathbf{v}$ of the forces acting', 'The momentum', 'The work done divided by the distance'],
        answer: 1,
        explanation: '$dT/dt = m(d\\mathbf{v}/dt)\\cdot\\mathbf{v} = \\mathbf{F}\\cdot\\mathbf{v}$ — the power theorem. Multiplying by $dt$ gives $dT = \\mathbf{F}\\cdot d\\mathbf{s}$, and integrating gives the work.',
      },
      {
        q: 'A force always perpendicular to the velocity (a constraint force, or magnetism) changes:',
        options: ['The kinetic energy but not the direction', 'Neither the kinetic energy nor the speed — it does no work', 'Both the kinetic energy and the speed', 'The total energy only'],
        answer: 1,
        explanation: 'Work counts only the force component along the displacement; a transverse force contributes $\\mathbf{F}\\cdot d\\mathbf{s} = 0$, leaving the kinetic energy untouched while bending the path.',
      },
      {
        q: 'For radial fall toward a mass $M$, the conserved energy combination is:',
        options: [`$\\frac{1}{2}mv^2 + mgh$`, `$\\frac{1}{2}mv^2 - GMm/r$`, `$\\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$`, `$mv$`],
        answer: 1,
        explanation: 'Integrating $-GMm/r^2$ gives $T_2 - T_1 = GMm(1/r_2 - 1/r_1)$, so $\\frac{1}{2}mv^2 - GMm/r$ is the constant; $mgh$ is its near-earth limit.',
      },
      {
        q: 'The work done by gravity around any closed path is:',
        options: ['Positive', 'Zero', 'Negative', 'Equal to the area enclosed'],
        answer: 1,
        explanation: 'Radial segments cancel pairwise and circular segments contribute nothing; if it were not zero, looping the path would manufacture or destroy energy — perpetual motion, one way or the other.',
      },
      {
        q: 'Inside a thin uniform spherical shell of mass $m$, the gravitational force on a particle is:',
        options: ['$Gm_0m/a^2$ toward the center', 'Zero — the potential is the constant $-Gm_0m/a$', 'Half the surface value', 'Inversely proportional to the distance from the center'],
        answer: 1,
        explanation: 'The shell integral gives the same potential at every interior point; a constant potential means no force. Outside, the shell acts exactly like a point mass at the center.',
      },
    ],
  },

  // ------------------------------------------------------------------ 4.4
  {
    sectionId: 'hall-ch8-s12',
    readingTime: 10,
    intro: 'The final energy lecture is a meditation with formulas: what work really is (and why holding a hundred-pound weight is not work), why friction\u2019s apparent wastefulness is a failure of bookkeeping rather than of nature, how potential energy is defined for conservative forces, and the two showpiece results — the escape velocity of seven miles per second and the field-potential calculus $\\mathbf{F} = -\\nabla U$ that turns one scalar function into the whole force.',
    objectives: [
      'Distinguish physical from physiological work and handle constrained motion',
      'Define conservative forces and construct potential energies from path-independent work',
      'Compute the escape velocity and the energy audit of a numerical orbit',
      'Recover forces from potentials via $\\mathbf{F} = -\\nabla U$',
    ],
    concepts: [
      {
        term: 'What to remember, and what to let go',
        kind: 'insight',
        statement: 'The thing to learn from a proof is the **relationship it establishes**, not the proof itself: anyone who has really learned a subject can reconstruct a demonstration on the spot.',
        detail: 'Feynman\u2019s confession: of all the demonstrations in his freshman course, not one is remembered from when he studied freshman physics — he remembers that such-and-such is true and invents the argument when needed. This chapter therefore re-derives nothing and concentrates on the meaning of work, potential energy and the conservation principle.',
      },
      {
        term: 'Physical versus physiological work',
        kind: 'insight',
        statement: 'By the physical definition, holding a 100-pound weight off the ground does **no work** — yet the holder sweats, trembles and burns food. The paradox is in the muscle, not the definition.',
        detail: 'A table holds the same weight forever without supplies. Striated (skeletal) muscle cannot lock: nerve impulses make fibers twitch and relax in volleys, so holding a weight is thousands of repetitions of small internal movements — hence the shaking when tired. Smooth muscle (the clam\u2019s adductor) does lock, holding a set position for hours like a table, but it operates too slowly for fast animals to have evolved around it.',
      },
      {
        term: 'Constrained motion',
        kind: 'theorem',
        statement: 'Fixed, frictionless constraints — a track, a pendulum string, a peg — supply forces always perpendicular to the allowed motion, so they do **no work**: the motion follows from gravity alone, correctly.',
        detail: 'The resultant-force program would require knowing the constraint forces; the energy program does not. More generally, when a force is the vector sum of pieces, the work of the sum is the sum of the works — analyze the forces any way you like, and the ledger still adds up.',
      },
      {
        term: 'Conservative forces and potential energy',
        kind: 'definition',
        statement: 'A force is **conservative** when the work between two points is the same on every path; then a function $U$ exists with $$\\int_1^2 \\mathbf{F}\\cdot d\\mathbf{s} = U(1) - U(2),$$ and $T + U$ is constant. The zero of $U$ is arbitrary.',
        detail: 'Construction: fix a standard point $P$ and define $U(\\text{point}) = -\\int_P^{\\text{point}}\\mathbf{F}\\cdot d\\mathbf{s}$. Choosing a different standard point adds only a constant — and since only changes ever matter, physics never notices. That is why "potential energy = 0 at infinity" is a convenience, not a fact. If several conservative forces act at once, their potential energies simply add — because the work of a sum of forces is the sum of the works.',
      },
      {
        term: 'The standard potentials',
        kind: 'notation',
        statement: 'Uniform gravity: $U(z) = mgz$. Spring: $U(x) = \\frac{1}{2}kx^2$. Point masses: $$U(r) = -\\frac{GMm}{r}$$ with zero at infinity. Point charges: $U = q_1q_2/4\\pi\\epsilon_0 r$.',
        detail: 'For two atoms (two oxygens, say) the long-range attraction $\\propto 1/r^7$ integrates to a potential $U \\propto 1/r^6$ at large separation, deepening to a minimum at the equilibrium separation $d$; push closer and the energy climbs steeply. It takes work to break the pair — the dissociation energy, the molecular counterpart of an escape velocity.',
      },
      {
        term: 'Escape velocity',
        kind: 'theorem',
        statement: 'To leave the earth (radius $a$, mass $M$) with nothing to spare, $\\frac{1}{2}mv^2 = GMm/a$, so $$v^2 = 2ga$$ — $\\sqrt{2}$ times the circular-orbit speed and twice its energy.',
        detail: 'The arithmetic: 5 miles per second orbits; $\\sqrt{2} \\times 5 \\approx 7$ miles per second escapes. The first satellites therefore had first to orbit (5 mi/s) and then needed twice the energy to leave (about 7 mi/s) — a clean illustration that energy, not speed, is the additive currency of spaceflight.',
      },
      {
        term: 'Nonconservative forces do not exist',
        kind: 'insight',
        statement: 'All the fundamental forces of nature appear to be conservative; friction looks nonconservative only because the "lost" energy has gone into invisible internal motions — **heat is jiggling**, and the total of kinetic plus potential, internal and external, still never changes.',
        detail: 'A sliding object stops, but its atoms jiggle harder — measurable as temperature. A globular cluster seen from afar seems to lose energy when forces "waste" themselves on the internal motions of its stars; look closely and the books balance. Burning gasoline releases the difference between the atomic potential energies of the new arrangement and the old. Conservation "fails" only when part of the system is left out of the account — forgetting light, which can be regarded as the kinetic energy of photons, keeps even that case inside the scheme.',
      },
      {
        term: 'Potential and field',
        kind: 'method',
        statement: 'Because $U = m\\Psi$ with the **potential** $\\Psi(x,y,z)$ a scalar, a field can be specified by one number per point, and the force and field follow by differentiation: $$\\mathbf{F} = -\\nabla U, \\qquad \\mathbf{C} = -\\nabla\\Psi, \\qquad \\Psi(p) = -\\sum_i \\frac{Gm_i}{r_{ip}}.$$',
        detail: 'Component-wise, $F_x = -\\partial U/\\partial x$, $F_y = -\\partial U/\\partial y$, $F_z = -\\partial U/\\partial z$: partial derivatives hold the other variables fixed, the backwards-six $\\partial$ guarding against illegal cancellation. The gradient $\\nabla$ is the operator that turns a scalar into a vector. Scalars add without directions, so computing $\\Psi$ for many masses is far easier than summing vector fields — and differentiating recovers the field at once. The electrical twin uses the potential $\\varphi$ with $U = q\\varphi$: for parallel plates carrying $\\pm\\sigma$ a distance $d$ apart, the field between is $\\sigma/\\epsilon_0$, the work to carry a charge across is $q\\sigma d/\\epsilon_0$, and the potential difference — the voltage — is $\\sigma d/\\epsilon_0$ volts.',
      },
      {
        term: 'Energy, not force, is the deep currency',
        kind: 'insight',
        statement: 'In quantum mechanics the concept of force dissolves, but curves of **potential energy** remain: energy survives where forces and velocities do not.',
        detail: 'Quantum texts draw $U(r)$ for molecules and almost never $F(r)$. The minimum of $U$ is the equilibrium; the curvature near the minimum is the spring constant of Chapter 6; the depth is the binding energy. Even the potential well of the spherical shell — $-Gm/r$ outside, flat inside — is the natural language for what Chapter 15 will need.',
      },
    ],
    examples: [
      {
        title: 'Escape from the earth',
        problem: 'With $g = 32$ ft/s\u00b2 at the surface and the earth\u2019s radius $a = 4000$ miles, compute the escape velocity and compare it with the circular-orbit speed of about 5 mi/s.',
        steps: [
          { label: 'Step 1: Write the energy at launch', text: 'At the surface, $T + U = \\frac{1}{2}mv^2 - GmM/a$, with the zero of $U$ chosen at infinity.' },
          { label: 'Step 2: Write the final condition', text: '"Just barely escaping" means arriving at infinity ($U = 0$) with zero speed ($T = 0$): the total must be zero, so $\\frac{1}{2}mv^2 = GMm/a$.' },
          { label: 'Step 3: Replace GM with g', text: 'Since $g = GM/a^2$, we have $GM/a = ga$, giving $$v^2 = 2ga.$$' },
          { label: 'Step 4: Insert the numbers', text: '$a = 4000$ miles $= 2.11\\times10^7$ ft, so $v^2 = 2 \\times 32 \\times 2.11\\times10^7 = 1.35\\times10^9$ ft\u00b2/s\u00b2 and $v = 3.7\\times10^4$ ft/s.' },
          { label: 'Step 5: Convert and compare', text: '$v = 3.7\\times10^4/5280 \\approx 7.0$ miles per second. The circular speed is $\\sqrt{GM/a} = \\sqrt{ga} \\approx 5$ mi/s, so escaping needs $\\sqrt{2}$ times the speed and twice the energy.' },
        ],
        result: '$v \\approx 7$ mi/s — the historical ladder: first orbit at 5 mi/s, then double the energy to leave.',
      },
      {
        title: 'Auditing the numerical orbit',
        problem: 'The hand-computed planetary orbit of Chapter 3 (Table 9-2) should conserve $E/m = \\frac{1}{2}(v_x^2 + v_y^2) - 1/r$ in units with $GM = 1$. Audit it.',
        steps: [
          { label: 'Step 1: Energy at launch', text: 'At $t = 0$: $v_x = 0$, $v_y = 1.630$, $r = 0.500$, so $E/m = \\frac{1}{2}(1.630)^2 - 1/0.500 = 1.328 - 2.000 = -0.672$.' },
          { label: 'Step 2: Energy at the far crossing', text: 'The planet crosses the $x$-axis at $t = 2.101$ s at $x = -1.022$ with $v_y = 0.797$ and $v_x \\approx 0$: $E/m = \\frac{1}{2}(0.797)^2 - 1/1.022 = 0.318 - 0.978 = -0.661$.' },
          { label: 'Step 3: The drift', text: 'The energy has changed by $0.011$ on a base of $0.672$ — about 1.6 percent. Feynman reports "some 1.5 percent" for the run.' },
          { label: 'Step 4: Diagnose', text: 'Either the finite interval ($\\epsilon = 0.1$) or an arithmetic slip — the energy check cannot tell which, and that is exactly its diagnostic power: it flags that something is wrong before anyone knows what.' },
        ],
        result: 'The audit finds $E/m$ drifting from $-0.672$ to $-0.661$ (about 1.5 percent) — a built-in error monitor for numerical mechanics, free of charge.',
      },
      {
        title: 'From potential to force: the gradient at work',
        problem: 'Recover the force from each of the three standard potentials: $U = mgz$, $U = \\frac{1}{2}kx^2$ and $U = -GMm/r$.',
        steps: [
          { label: 'Step 1: Uniform gravity', text: '$F_z = -\\partial(mgz)/\\partial z = -mg$: the familiar downward pull; and $F_x = F_y = 0$, since $U$ contains no $x$ or $y$.' },
          { label: 'Step 2: The spring', text: '$F_x = -\\partial(\\frac{1}{2}kx^2)/\\partial x = -kx$: Hooke\u2019s law is nothing but the derivative of a parabola.' },
          { label: 'Step 3: The inverse-square field', text: 'Radially, $F_r = -d(-GMm/r)/dr = -GMm/r^2$ — the derivative of $1/r$ is $-1/r^2$, and the signs combine into attraction: the full Newtonian force from one line of calculus.' },
          { label: 'Step 4: The moral', text: 'One scalar function $U$ contains the whole force: three components, one derivative each, no vector triangles. This is why physics prefers computing $\\Psi$ and differentiating to summing vector fields.' },
        ],
        result: '$-mg$, $-kx$, $-GMm/r^2$ — all three forces recovered from their potentials by differentiation. $\\mathbf{F} = -\\nabla U$ is the bridge from the energy bookkeeping back to dynamics.',
      },
    ],
    keyTakeaways: [
      'Physical work is $\\int\\mathbf{F}\\cdot d\\mathbf{s}$; holding a weight does none — the sweat is striated-muscle physiology, not physics.',
      'Frictionless constraints do no work; energy methods solve constrained problems without ever knowing the constraint forces.',
      'Conservative force: path-independent work; $\\int_1^2\\mathbf{F}\\cdot d\\mathbf{s} = U(1) - U(2)$; the zero of $U$ is a free choice.',
      'Escape velocity $v = \\sqrt{2ga} \\approx 7$ mi/s for the earth — $\\sqrt{2}$ times (and twice the energy of) the 5 mi/s circular orbit.',
      'There are no nonconservative fundamental forces: heat is internal jiggling, and the total energy of the world, internal plus external, is constant.',
      'One scalar potential $\\Psi$ (or $U$) generates the whole vector force through $\\mathbf{F} = -\\nabla U$ — the pattern quantum mechanics inherits when force itself dissolves.',
    ],
    quiz: [
      {
        q: 'By the physical definition of work, a man holding a 100-pound weight motionless for a minute does:',
        options: ['100 pound-minutes of work', 'No work — however much he sweats', 'Work proportional to his effort', 'Negative work'],
        answer: 1,
        explanation: 'Work requires displacement: $\\int\\mathbf{F}\\cdot d\\mathbf{s} = 0$ when nothing moves. The sweating comes from striated muscle twitching in volleys to maintain tension — a table does the same job for free.',
      },
      {
        q: 'The potential energy of two point masses a distance $r$ apart, with zero chosen at infinity, is:',
        options: [`$+GMm/r$`, `$-GMm/r$`, `$-\\frac{1}{2}GMm/r^2$`, `$mgh$`],
        answer: 1,
        explanation: 'Negative because gravity attracts: work is released as bodies fall together, so the bound configuration sits below the zero at infinite separation. The same form with $q_1q_2/4\\pi\\epsilon_0$ serves charges.',
      },
      {
        q: 'A satellite needs speed $v$ for a circular orbit just above the earth. To escape the earth entirely it needs:',
        options: ['The same speed', '$\\sqrt{2}$ times the speed — twice the energy', 'Twice the speed — four times the energy', 'Four times the speed'],
        answer: 1,
        explanation: 'Escape requires $\\frac{1}{2}mv^2 = GMm/a = ga$, while the circular orbit has $\\frac{1}{2}mv^2 = \\frac{1}{2}GMm/a$: the same $GMm/a$ total means twice the energy and hence $\\sqrt{2}$ times the speed — 5 \u2192 about 7 miles per second.',
      },
      {
        q: 'Friction appears to destroy kinetic energy. The modern verdict is:',
        options: ['Energy conservation has exceptions', 'The energy became heat — random kinetic and potential energy of internal atomic motions; the total is still conserved', 'The energy became negative', 'Friction stores the energy for later release'],
        answer: 1,
        explanation: 'All fundamental forces are conservative; the "lost" mechanical energy shows up as temperature — jiggling atoms — measurable with a thermometer. Conservation fails only for partial views of a system.',
      },
      {
        q: 'Given the potential energy $U(x,y,z)$, the force components are:',
        options: ['$F_x = +\\partial U/\\partial x$ and so on', `$F_x = -\\partial U/\\partial x$, $F_y = -\\partial U/\\partial y$, $F_z = -\\partial U/\\partial z$`, '$F_x = -\\partial^2U/\\partial x^2$ and so on', 'Forces cannot be recovered from a potential'],
        answer: 1,
        explanation: 'Over a tiny step, $\\Delta W = -\\Delta U = F_x\\Delta x$; dividing by $\\Delta x$ and taking the limit gives $F_x = -\\partial U/\\partial x$ — compactly, $\\mathbf{F} = -\\nabla U$. The partial derivative $\\partial$ holds the other coordinates fixed.',
      },
    ],
  },
]

export const physCh4Formulas: FormulaEntry[] = [
  {
    chapterId: 'hall-ch7',
    section: '7.17',
    name: 'Gravitational potential energy (near earth)',
    formula: 'U = mgz = (weight)\u00d7(height)',
    latex: 'U = mgz',
    note: 'from reversible machines; heights small vs the earth\u2019s radius',
  },
  {
    chapterId: 'hall-ch13',
    section: '13.22',
    name: 'Law of universal gravitation',
    formula: 'F = Gmm\u2032/r\u00b2',
    latex: 'F = \\frac{Gmm^{\\prime}}{r^{2}}',
    note: 'G = 6.670\u00d710\u207b\u00b9\u00b9 N\u00b7m\u00b2/kg\u00b2 (Cavendish)',
  },
  {
    chapterId: 'hall-ch13',
    section: '13.22',
    name: 'Kepler\u2019s third law',
    formula: 'T\u00b2 \u221d a\u00b3',
    latex: 'T^{2} \\propto a^{3}',
    note: 'the squares of the periods \u221d the cubes of the semimajor axes',
  },
  {
    chapterId: 'hall-ch8',
    section: '8.11',
    name: 'Work (line integral)',
    formula: 'W = \u222bF\u00b7ds',
    latex: 'W = \\int_1^2 \\mathbf{F}\\cdot d\\mathbf{s}',
    note: 'equals the change of kinetic energy along the path',
  },
  {
    chapterId: 'hall-ch8',
    section: '8.11',
    name: 'Spring potential energy',
    formula: 'U = \u00bdkx\u00b2',
    latex: 'U = \\frac{1}{2}kx^{2}',
    note: 'force \u2212kx integrated from the equilibrium point',
  },
  {
    chapterId: 'hall-ch8',
    section: '8.12',
    name: 'Gravitational potential energy (large r)',
    formula: 'U = \u2212GMm/r',
    latex: 'U = -\\frac{GMm}{r}',
    note: 'zero chosen at infinite separation',
  },
  {
    chapterId: 'hall-ch8',
    section: '8.12',
    name: 'Escape velocity',
    formula: 'v = \u221a(2GM/a) = \u221a(2ga)',
    latex: 'v = \\sqrt{2GM/a} = \\sqrt{2ga}',
    note: '\u221a2 times the circular-orbit speed; about 7 mi/s for earth',
  },
  {
    chapterId: 'hall-ch8',
    section: '8.12',
    name: 'Force from potential',
    formula: 'F = \u2212\u2207U',
    latex: '\\mathbf{F} = -\\nabla U',
    note: 'component-wise F\u2093 = \u2212\u2202U/\u2202x, etc.',
  },
]
