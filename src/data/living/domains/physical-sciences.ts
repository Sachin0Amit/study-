/**
 * Living Library — domain file: Physical Sciences
 *
 * Physics and chemistry from rotating bodies to reacting molecules.
 * Complete lessons; future expansion passes append new topics below.
 */

import type { LivingDomainFile } from '../types'

export const physicalSciences: LivingDomainFile = {
  domain: 'Physical Sciences',
  blurb:
    'Physics and chemistry from rotating bodies to reacting molecules — the quantitative rules of matter and energy.',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'phys-angular-momentum',
      title: 'Angular Momentum and Rotational Dynamics',
      domain: 'Physical Sciences',
      field: 'Physics',
      branch: 'Classical Mechanics',
      tier: 'intermediate',
      concepts: [
        'Moment of inertia',
        'Torque as the rotational analogue of force',
        'Angular momentum L = Iω',
        'Conservation of angular momentum',
        'Rotational kinetic energy',
        'Precession and gyroscopes',
      ],
      words: 840,
      readMins: 5,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'Rotating bodies obey a mechanics built from angular analogues of force, mass, and momentum. In Classical Mechanics, torque plays force, moment of inertia plays mass, and angular momentum plays linear momentum — conserved whenever no external torque acts, connecting skaters, gyroscopes, and planets.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Every machine with a spinning part — turbines, hard drives, drone rotors — is engineered with these equations. The same conservation lets spacecraft turn by spinning internal wheels and explains why planets sweep their orbits at varying speeds.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Moment of inertia measures how mass is distributed about the rotation axis, not merely how much there is. A point mass m at radius r contributes mr², so moving mass outward raises the total quadratically — a rim-weighted wheel is far harder to spin up than an equal-mass disk.',
        },
        {
          kind: 'para',
          text: 'Torque is the turning effectiveness of a force: r times F times the sine of the angle between them. A long wrench frees a stubborn bolt with less force because its lever arm is larger.',
        },
        {
          kind: 'para',
          text: 'Angular momentum L = Iω couples rotational inertia with spin rate; for a point mass it can be written mvr. Rotational dynamics compresses into one sentence: net torque equals the rate of change of L — torques, not forces, change rotational motion.',
        },
        {
          kind: 'para',
          text: 'With zero net external torque, L stays constant, so a shrinking moment of inertia forces angular velocity to grow. A skater pulling her arms in roughly halves her moment of inertia and nearly doubles her spin rate — no push needed.',
        },
        {
          kind: 'para',
          text: 'A rotating body carries kinetic energy, half of I times ω squared, alongside any translational half-mv-squared. Flywheels store grid energy this way, and rolling objects split energy between the two forms — why a hoop and a disk race down a ramp differently.',
        },
        {
          kind: 'para',
          text: 'A spinning gyroscope pushed at one end does not fall but slowly circles: the torque changes the direction of the angular-momentum vector, not its magnitude. Earth\u2019s 26,000-year axial wobble follows the same logic.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Angular momentum',
          latex: 'L = I\\omega',
          meaning: 'Moment of inertia times angular velocity — the rotational counterpart of p = mv.',
        },
        {
          kind: 'formula',
          name: 'Rotational second law',
          latex: '\\tau = I\\alpha = \\frac{dL}{dt}',
          meaning: 'Net torque equals the rate of change of angular momentum.',
        },
        {
          kind: 'formula',
          name: 'Rotational kinetic energy',
          latex: 'K_{\\text{rot}} = \\tfrac{1}{2}I\\omega^2',
          meaning: 'Energy stored in rotation, additive with translational energy.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how a skater\u2019s spin rate changes when she pulls her mass in, given angular speed 2.0 rad/s and a moment of inertia falling from 4.6 to 1.8 kg·m².',
            'Recall the governing idea: with negligible external torque, angular momentum L = Iω is conserved.',
            'Apply: I₁ω₁ = I₂ω₂ gives ω₂ = (4.6 × 2.0) / 1.8 ≈ 5.1 rad/s; her rotational energy rises from 9.2 J to about 23.5 J.',
            'State the result: the spin rate grows roughly 2.6-fold, the extra kinetic energy paid for by muscular work.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Figure skaters and divers compact or extend their bodies to control spin rate mid-air.',
            'Spacecraft reorient using reaction wheels, expending no propellant.',
            'Kepler\u2019s equal-areas law is this conservation applied to orbits.',
            'Grid-scale flywheel plants bank energy as rotation for later discharge.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Students often treat moment of inertia like ordinary mass, forgetting it depends on the chosen axis and on how far mass sits from it. Another slip is invoking conservation while friction or other external torque is present — the law needs net external torque to vanish.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Moment of inertia', def: 'Resistance to angular acceleration, summing mass elements times distance-from-axis squared.' },
            { term: 'Torque', def: 'The turning effect of a force, rF sinθ about the chosen axis.' },
            { term: 'Angular momentum', def: 'Rotational momentum L = Iω, conserved when net external torque is zero.' },
            { term: 'Angular velocity', def: 'Rate of rotation in radians per second.' },
            { term: 'Precession', def: 'Slow rotation of a spinning body\u2019s axis under an applied torque.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A skater pulls her arms in, halving her moment of inertia. Her angular velocity:',
              options: ['Halves', 'Stays the same', 'Doubles', 'Drops to zero'],
              answer: 2,
              explain: 'With L = Iω conserved, halving I forces ω to double.',
            },
            {
              q: 'Two equal-mass wheels: one a solid disk, one a hoop with all mass at the rim. Which has the larger moment of inertia?',
              options: ['The disk', 'The hoop', 'They are equal', 'It depends only on the radius'],
              answer: 1,
              explain: 'Rim mass sits at the full radius, maximizing the sum of mr².',
            },
            {
              q: 'A gyroscope supported at one end drifts in a circle instead of falling because:',
              options: ['Gravity is balanced by air resistance', 'The torque changes the direction of L, producing precession', 'Angular momentum is not conserved', 'Its center of mass slowly rises'],
              answer: 1,
              explain: 'The torque rotates the angular-momentum vector sideways, so the axis traces a cone.',
            },
            {
              q: 'For a body with no net external torque:',
              options: ['Angular velocity is constant', 'Angular momentum is constant', 'Rotational kinetic energy is constant', 'Moment of inertia is constant'],
              answer: 1,
              explain: 'The conserved quantity is L = Iω; ω can still change if I does.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: Newton\u2019s laws, linear momentum, and circular motion. Next come rigid-body dynamics, orbital mechanics, and angular momentum in quantum mechanics; pair it with energy methods for a full toolkit.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Torque is the rotational analogue of force, with τ = dL/dt.',
            'Moment of inertia depends on mass distribution about the axis.',
            'L = Iω is conserved when torque vanishes; skaters spin faster when compact.',
            'Rotational kinetic energy ½Iω² rides alongside translational ½mv².',
            'Gyroscopic precession is a torque rotating the angular-momentum vector.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'phys-entropy-second-law',
      title: 'Entropy and the Second Law',
      domain: 'Physical Sciences',
      field: 'Physics',
      branch: 'Thermodynamics',
      tier: 'intermediate',
      concepts: [
        'Clausius and Kelvin statements of the second law',
        'Entropy change and reversible heat flow',
        'Boltzmann\u2019s microstate picture',
        'Irreversibility and the arrow of time',
        'Heat engines and the Carnot limit',
        'Gibbs free energy and spontaneity',
      ],
      words: 860,
      readMins: 5,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'The second law singles out which processes happen on their own: those that increase the total entropy of the universe. In Thermodynamics, entropy wears two faces — a macroscopic bookkeeping of heat flow through ΔS = Q/T, and Boltzmann\u2019s microscopic count of arrangements — together explaining irreversibility, the engine-efficiency ceiling, and the arrow of time.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Every engine, refrigerator, and power plant is bounded by second-law limits no engineering can beat. The same law explains why heat flows hot to cold, why perpetual motion fails, and why time has a direction.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Two classic statements anchor the law. Clausius: heat never flows spontaneously from cold to hot. Kelvin: no engine converts heat entirely into work with no other effect. Violate one and you can build a device that violates the other.',
        },
        {
          kind: 'para',
          text: 'For reversible heat Q at temperature T, entropy changes by Q divided by T. Dump 1000 J into a 100 K reservoir and you add 10 J/K; the same joules into a 1000 K reservoir add only 1 J/K — the arithmetic behind hot-to-cold flow.',
        },
        {
          kind: 'para',
          text: 'Boltzmann\u2019s S = k ln W counts microstates, the arrangements consistent with the macroscopic description. A gas spread evenly through a box has astronomically more arrangements than one crowded into a corner — why you never observe spontaneous crowding.',
        },
        {
          kind: 'para',
          text: 'Macroscopic irreversibility is statistics, not decree: nothing forbids every air molecule gathering in one corner — it is just so improbable the universe never waits to see it.',
        },
        {
          kind: 'para',
          text: 'An engine takes heat from a hot reservoir each cycle, converts part to work, and dumps the rest into a cold reservoir. The Carnot bound, one minus T_c over T_h, is the best any engine between those temperatures can do; real machines fall short.',
        },
        {
          kind: 'para',
          text: 'At constant temperature and pressure, ΔG = ΔH − TΔS bundles energy and entropy; spontaneity requires negative ΔG. An endothermic process can still proceed if it creates enough entropy to pay the bill.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Entropy change (reversible)',
          latex: '\\Delta S = \\frac{Q_{\\text{rev}}}{T}',
          meaning: 'Entropy transferred per unit of heat at temperature T.',
        },
        {
          kind: 'formula',
          name: 'Boltzmann entropy',
          latex: 'S = k\\ln W',
          meaning: 'Entropy counts microstates W; k is Boltzmann\u2019s constant.',
        },
        {
          kind: 'formula',
          name: 'Carnot efficiency',
          latex: '\\eta_{\\max} = 1 - \\frac{T_c}{T_h}',
          meaning: 'The maximum fraction of heat convertible to work between reservoirs at T_h and T_c.',
        },
        {
          kind: 'formula',
          name: 'Entropy of the universe',
          latex: '\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} \\ge 0',
          meaning: 'Total entropy never decreases — the compact statement of the second law.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the maximum efficiency and waste heat of a plant with a boiler at 800 K and condenser at 300 K, taking in 1000 J per cycle.',
            'Recall the governing idea: no engine beats the Carnot limit η = 1 − T_c/T_h.',
            'Apply: η_max = 1 − 300/800 = 0.625, so at most 625 J becomes work and at least 375 J is rejected.',
            'State the result: even a perfect engine discards 37.5 percent of the heat; a realistic 40-percent plant rejects 600 J per 1000 J — hence cooling towers.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Power-station design fights for every kelvin of cold-end temperature — the condenser sets the ceiling.',
            'Refrigerators run the engine backward, spending work to push entropy from cold interior to warm room.',
            'Metallurgy sets process temperatures where ΔG changes sign, flipping reactions on or off.',
            'Data centers budget for the thermodynamic cost of erasing information — Landauer\u2019s principle.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'A system\u2019s entropy can decrease — a freezer makes ice — as long as the surroundings gain more; only the total is forbidden to fall. The law forbids heat-to-work conversion in a cycle, not work into heat — friction does that happily.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Entropy', def: 'A state function measuring energy dispersal among microscopic arrangements.' },
            { term: 'Microstate', def: 'One microscopic configuration consistent with the macroscopic conditions.' },
            { term: 'Carnot efficiency', def: 'The maximum efficiency of any heat engine between two fixed temperatures.' },
            { term: 'Irreversibility', def: 'The one-way character of macroscopic processes, rooted in statistics.' },
            { term: 'Gibbs free energy', def: 'G = H − TS; its decrease marks spontaneity at constant T and P.' },
            { term: 'Reservoir', def: 'A body so large its temperature barely changes while exchanging heat.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A refrigerator freezes water, lowering the entropy of the water. Does this violate the second law?',
              options: ['Yes, because entropy decreased', 'No — the room gains more entropy than the water loses', 'Only if the door is open', 'Yes, unless the process is reversible'],
              answer: 1,
              explain: 'The law constrains the total: the room\u2019s entropy rises by more than the ice loses.',
            },
            {
              q: 'An engine takes heat from a 900 K source and rejects to a 300 K sink. Its maximum possible efficiency is:',
              options: ['33 percent', '50 percent', '67 percent', '100 percent'],
              answer: 2,
              explain: 'The Carnot limit is 1 − 300/900 = 2/3, about 67 percent.',
            },
            {
              q: 'Which of these is forbidden by the second law?',
              options: ['Converting work entirely into heat', 'Heat flowing from cold to hot when work is supplied', 'A cyclic engine converting heat entirely into work', 'Entropy of an expanding gas increasing'],
              answer: 2,
              explain: 'The Kelvin statement rules out the perfect heat engine; refrigerators are legal because they consume work.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: temperature, heat, and the first law. After this, study free energy in chemistry, statistical mechanics, and information theory, where entropy reappears in a surprising costume.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'The second law: total entropy never decreases.',
            'ΔS = Q_rev/T — the same heat adds more entropy to a colder body.',
            'S = k ln W grounds entropy in counting arrangements.',
            'No engine between T_h and T_c beats 1 − T_c/T_h.',
            'ΔG < 0 decides spontaneity; local order can be bought by exporting entropy.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'phys-chemical-equilibrium',
      title: 'Chemical Equilibrium and Le Chatelier\u2019s Principle',
      domain: 'Physical Sciences',
      field: 'Chemistry',
      branch: 'Physical Chemistry',
      tier: 'intermediate',
      concepts: [
        'Dynamic equilibrium',
        'The equilibrium constant K',
        'Reaction quotient Q',
        'Le Chatelier\u2019s principle',
        'Concentration and pressure shifts',
        'Temperature — the shift that changes K',
        'Catalysts and equilibrium position',
      ],
      words: 850,
      readMins: 5,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'Most chemical reactions run both ways, and when forward and reverse rates equalize, concentrations settle into dynamic equilibrium. Physical Chemistry describes the balance with the equilibrium constant K and predicts its response to disturbance with Le Chatelier\u2019s principle: a system at equilibrium shifts to partially oppose any imposed change. Industrial yield, blood chemistry, and fizzy drinks run on these ideas.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'The Haber process that feeds half the world\u2019s crops, the oxygen chemistry of blood, and the shelf life of soda are all equilibrium problems. Choosing the right temperature and pressure is choosing where an equilibrium sits.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'At equilibrium nothing appears to change, yet both reactions continue at matched rates. A sealed bottle of soda keeps a steady fizz because carbon dioxide dissolves and escapes equally fast.',
        },
        {
          kind: 'para',
          text: 'For aA + bB ⇌ cC + dD, the ratio of product to reactant concentrations, each raised to its stoichiometric power, equals a constant K_c at fixed temperature. Pure solids and liquids are omitted because their concentrations do not move.',
        },
        {
          kind: 'para',
          text: 'The same expression evaluated away from equilibrium is the reaction quotient Q. Q below K means net forward reaction until Q climbs to K; Q above K means the reverse.',
        },
        {
          kind: 'para',
          text: 'Disturb the system and it leans back: adding reactant shifts the mixture toward products, removing product drags the reaction forward, and compressing a gaseous equilibrium favors the side with fewer moles of gas. Le Chatelier\u2019s principle is the rule-of-thumb version of what Q-versus-K computes exactly.',
        },
        {
          kind: 'para',
          text: 'Heating an equilibrium shifts it in the endothermic direction — heat behaves like a reactant there — and cooling does the reverse. Temperature is the one disturbance that changes K itself.',
        },
        {
          kind: 'para',
          text: 'A catalyst accelerates forward and reverse rates by the same factor, so it changes how fast equilibrium is reached but never where it sits. Catalysts buy time and money, not yield.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Equilibrium constant',
          latex: 'K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}',
          meaning: 'Products of concentrations over reactants, each to its stoichiometric power; fixed at a given temperature.',
        },
        {
          kind: 'formula',
          name: 'Reaction quotient',
          latex: 'Q = \\frac{[C]^c[D]^d}{[A]^a[B]^b}\\ \\text{at any moment}',
          meaning: 'Q below K drives the forward reaction; Q above K drives the reverse toward K.',
        },
        {
          kind: 'formula',
          name: 'Temperature dependence of K',
          latex: '\\ln\\frac{K_2}{K_1} = -\\frac{\\Delta H^{\\circ}}{R}\\!\\left(\\frac{1}{T_2}-\\frac{1}{T_1}\\right)',
          meaning: 'How K moves with temperature: endothermic reactions gain K as temperature rises.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: for N₂(g) + 3H₂(g) ⇌ 2NH₃(g) with ΔH = −92 kJ per reaction, predict the effect of (a) higher pressure, (b) ammonia removal, and (c) higher temperature.',
            'Recall the governing idea: Le Chatelier\u2019s principle — the equilibrium shifts to oppose the disturbance.',
            'Apply: (a) compression favors fewer gas moles, four left versus two right, so ammonia yield rises; (b) removing NH₃ drops Q below K, so more forms; (c) heat is a product here, so heating pushes it backward.',
            'State the result: industry runs the Haber process at high pressure, continuous ammonia removal, and a moderate 400–500 °C that trades some equilibrium yield for acceptable rate.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Haber–Bosch synthesis supplies most of the nitrogen in the world\u2019s fertilizer.',
            'Hemoglobin loads oxygen in the lungs and releases it in tissues as pH and CO₂ shift.',
            'Carbonated drinks hold dissolved CO₂ under high pressure and go flat once the bottle is opened.',
            'Reactors for methanol and sulfuric acid tune temperature, pressure, and catalysts with the same playbook.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The commonest misconception is that a catalyst increases yield — it speeds arrival at the same equilibrium. Another is confusing rate with extent: a reaction can be complete yet slow, or fast yet product-poor; only K tells you which.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Dynamic equilibrium', def: 'Forward and reverse reactions at equal rates with constant concentrations.' },
            { term: 'Equilibrium constant', def: 'The fixed ratio of product to reactant concentration terms at a given temperature.' },
            { term: 'Reaction quotient', def: 'That ratio measured before equilibrium; comparing with K predicts direction.' },
            { term: 'Le Chatelier\u2019s principle', def: 'A disturbed equilibrium shifts to oppose the change.' },
            { term: 'Exothermic', def: 'Releasing heat; for such reactions, heating lowers K.' },
            { term: 'Catalyst', def: 'A substance that speeds both directions equally, altering kinetics but not K.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'For N₂ + 3H₂ ⇌ 2NH₃, increasing the total pressure shifts the equilibrium:',
              options: ['Toward the reactants', 'Toward ammonia', 'Not at all', 'It depends on the catalyst'],
              answer: 1,
              explain: 'Compression favors the side with fewer gas moles — two against four.',
            },
            {
              q: 'Adding a catalyst to a system already at equilibrium:',
              options: ['Shifts it toward products', 'Shifts it toward reactants', 'Leaves the position unchanged while speeding both directions', 'Increases the value of K'],
              answer: 2,
              explain: 'Catalysts multiply forward and reverse rates equally, so the composition does not move.',
            },
            {
              q: 'An exothermic reaction is heated. Its equilibrium constant K:',
              options: ['Increases', 'Decreases', 'Stays unchanged', 'Becomes equal to Q'],
              answer: 1,
              explain: 'Heat acts as a product, so raising temperature drives it backward, lowering K.',
            },
            {
              q: 'At equilibrium, the reaction quotient Q is:',
              options: ['Zero', 'Exactly equal to K', 'Greater than K', 'Less than K'],
              answer: 1,
              explain: 'Q is the same expression as K; at equilibrium the two coincide by definition.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: reaction rates, stoichiometry, and gas behavior. This sets up acid–base equilibria, solubility products, and electrochemistry, all reusing the Q-versus-K machinery.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Equilibrium is dynamic — both reactions continue at equal rates.',
            'K is fixed by temperature alone; Q compared with K predicts the direction of shift.',
            'Concentration and pressure changes move the position; temperature changes K itself.',
            'Catalysts change speed, never position.',
            'Le Chatelier in one line: the system leans against whatever you push.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'phys-electrostatics-gauss-law',
      title: 'Electrostatics and Gauss\u2019s Law',
      domain: 'Physical Sciences',
      field: 'Physics',
      branch: 'Electrostatics',
      tier: 'core',
      concepts: [
        'Coulomb\u2019s law and superposition',
        'The electric field concept',
        'Electric flux through a surface',
        'Gauss\u2019s law',
        'Choosing Gaussian surfaces by symmetry',
        'Conductors in electrostatic equilibrium',
      ],
      words: 1330,
      readMins: 7,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Electrostatics is the physics of charges at rest, and its central objects are the electric field and electric flux. Coulomb\u2019s law gives the force between two point charges directly, but adding such forces over trillions of particles is hopeless; the field concept dissolves the problem by letting each charge fill space with influence, and Gauss\u2019s law compresses that influence into one elegant bookkeeping rule. This topic builds those ideas in order and applies them to spheres, wires, sheets, and conductors.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Photocopiers, ink-jet printers, lightning rods, precipitators that scrub smokestacks, and the shielding that keeps sensitive electronics quiet all run on electrostatics. Gauss\u2019s law is also the first of the four Maxwell equations — the backbone of classical electromagnetism.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Coulomb\u2019s law says the force between point charges has magnitude F = k|q\u2081q\u2082|/r\u00b2, with k = 8.99 \u00d7 10\u2079 N\u00b7m\u00b2/C\u00b2, directed along the line joining them: like charges repel, opposites attract. For a proton pulling an electron, electricity outruns gravity by a factor near 10\u00b3\u2079 — matter is electric almost beyond comprehension, and only charge neutrality keeps the universe calm. When several charges act, their forces add as vectors, the principle of superposition, and no amount of geometry rescues you from messy sums.',
        },
        {
          kind: 'para',
          text: 'The electric field reframes the problem: define E = F/q at every point, the force a unit positive test charge would feel, measured in newtons per coulomb (equivalently volts per metre). A point charge Q fills space with a radial field of magnitude kQ/r\u00b2. Field lines make the invisible visible — they leave positive charges, enter negative ones, never cross, and crowd together where the field is strong. Once the field is known, the force on any charge placed in it is just qE: the geometry is done once, for all future charges.',
        },
        {
          kind: 'para',
          text: 'Electric flux counts field lines through a surface. For a uniform field and a flat patch it is EA cos \u03b8 — the field strength times the projected area — positive or negative depending on which way the lines cross. For a closed surface, a balloon around some charge, the net flux counts lines leaving minus lines entering. Because field lines start only on positive charge and end only on negative, the net count through any closed surface depends on one thing alone: the net charge enclosed.',
        },
        {
          kind: 'para',
          text: 'That statement, made exact, is Gauss\u2019s law: the closed-surface integral of E\u00b7dA equals the enclosed charge divided by \u03b5\u2080 = 8.85 \u00d7 10\u207b\u00b9\u00b2 C\u00b2/N\u00b7m\u00b2. The law is always true, but it is only useful when symmetry pins down the field\u2019s direction and variation: a sphere around a point charge yields E = kQ/r\u00b2 instantly, a cylinder around a charged wire yields \u03bb/(2\u03c0\u03b5\u2080r), and a pillbox through a charged sheet yields \u03c3/(2\u03b5\u2080) — the field of an infinite plane never weakens with distance at all.',
        },
        {
          kind: 'para',
          text: 'Conductors seal the theory. In a conductor at equilibrium the interior field is exactly zero — any leftover field would drive the free electrons, contradicting equilibrium. Excess charge therefore resides on the surface, the field just outside meets the surface at right angles with magnitude \u03c3/\u03b5\u2080, and any hollow cavity stays field-free whatever surrounds it: the Faraday-cage principle that shields electronics, cable assemblies, and aircraft cabins from outside static fields.',
        },
        {
          kind: 'para',
          text: 'Gauss\u2019s law also proves two classics. Outside any spherically symmetric charge distribution the field is exactly as if all the charge sat at the centre — an electrostatic twin of Newton\u2019s shell theorem — while inside a uniformly charged ball the field grows linearly with radius, peaking at the surface. These results power the design of coaxial cables, capacitor banks, and Van de Graaff generators, and they preview how the same law generalizes to magnetism and induction in the full Maxwell set.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Coulomb\u2019s law',
          latex: 'F = k\\frac{|q_1 q_2|}{r^2}',
          meaning: 'Force between point charges; k = 8.99 \u00d7 10\u2079 N\u00b7m\u00b2/C\u00b2. Like charges repel, opposites attract, and multiple forces superpose as vectors.',
        },
        {
          kind: 'formula',
          name: 'Electric field of a point charge',
          latex: 'E = \\frac{kQ}{r^2}',
          meaning: 'Force per unit positive test charge; the vector field points radially away from positive sources.',
        },
        {
          kind: 'formula',
          name: 'Gauss\u2019s law',
          latex: '\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}',
          meaning: 'Net electric flux through any closed surface equals enclosed charge over \u03b5\u2080 = 8.85 \u00d7 10\u207b\u00b9\u00b2 C\u00b2/N\u00b7m\u00b2 — geometry-proof bookkeeping of field lines.',
        },
        {
          kind: 'formula',
          name: 'Fields from symmetry',
          latex: 'E_{\\text{sphere}} = \\frac{kQ}{r^2}, \\quad E_{\\text{line}} = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}, \\quad E_{\\text{plane}} = \\frac{\\sigma}{2\\varepsilon_0}',
          meaning: 'The three symmetric answers: outside a sphere, around an infinite line of charge density \u03bb, and beside an infinite plane of surface density \u03c3.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the electric field 25 cm from the centre of a uniformly charged insulating sphere of radius 10 cm carrying +2.0 \u03bcC, and the field 5 cm from the centre.',
            'Recall the governing idea: spherical symmetry invites a concentric Gaussian sphere; outside, all charge acts as if at the centre, and inside only the charge within radius r counts, in proportion to volume.',
            'Apply outside: E = kQ/r\u00b2 = (8.99 \u00d7 10\u2079)(2.0 \u00d7 10\u207b\u2076)/(0.25)\u00b2 \u2248 2.9 \u00d7 10\u2075 N/C, pointing radially outward.',
            'Apply inside: the enclosed fraction is (r/R)\u00b3 = (0.05/0.10)\u00b3 = 0.125, so Q_enc = 0.25 \u03bcC and E = kQ_enc/r\u00b2 = (8.99 \u00d7 10\u2079)(2.5 \u00d7 10\u207b\u2077)/(0.05)\u00b2 \u2248 9.0 \u00d7 10\u2075 N/C.',
            'State the result: the field grows linearly with radius inside (9.0 \u00d7 10\u2075 at r = 5 cm), peaks at 1.8 \u00d7 10\u2076 N/C at the surface, then falls as 1/r\u00b2 outside — a complete profile from one law, without a single force summation.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Two errors recur. Students imagine Gauss\u2019s law fails without symmetry — the law always holds; only the easy solving breaks down. And they conclude the field is zero wherever flux is zero — a surface enclosing no net charge can still have lines streaming through, entering and leaving in equal number; external charges never change the net flux, though they do change the local field.',
          tone: 'warn',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Electric field', def: 'Force per unit positive test charge at a point; units N/C, equal to V/m.' },
            { term: 'Electric flux', def: 'Field lines through a surface: EA cos \u03b8 for a flat patch, or the surface integral in general.' },
            { term: 'Gaussian surface', def: 'Any imaginary closed surface chosen to exploit symmetry when applying Gauss\u2019s law.' },
            { term: 'Permittivity of free space', def: '\u03b5\u2080 = 8.85 \u00d7 10\u207b\u00b9\u00b2 C\u00b2/N\u00b7m\u00b2, linking enclosed charge to net flux.' },
            { term: 'Superposition', def: 'Fields and forces from multiple charges add as vectors.' },
            { term: 'Electrostatic equilibrium', def: 'A conductor\u2019s quiet state: zero internal field, all excess charge on the surface.' },
            { term: 'Faraday cage', def: 'A conductive enclosure whose interior stays field-free regardless of external charges.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The net electric flux through a closed surface depends on:',
              options: ['All charges in the universe', 'Only the net charge enclosed by the surface', 'The surface\u2019s shape', 'The material of the surface'],
              answer: 1,
              explain: 'External charges send equal flux in and out, contributing nothing net; only enclosed charge counts.',
            },
            {
              q: 'A hollow conductor sits in a strong external field. The field inside its empty cavity is:',
              options: ['Equal to the external field', 'Half the external field', 'Exactly zero', 'Strongest near the surface'],
              answer: 2,
              explain: 'Electrostatic equilibrium forces the interior field of a conductor to vanish — the Faraday-cage effect.',
            },
            {
              q: 'Doubling your distance from a point charge changes the field magnitude to:',
              options: ['Half', 'One quarter', 'Double', 'Unchanged'],
              answer: 1,
              explain: 'The field falls as 1/r\u00b2, so doubling r divides E by four.',
            },
            {
              q: 'Just outside the surface of a charged conductor in equilibrium, the field is:',
              options: ['Parallel to the surface', 'Zero, like the interior', 'Perpendicular to the surface with magnitude \u03c3/\u03b5\u2080', 'Directed into the interior'],
              answer: 2,
              explain: 'Any parallel component would move the free charges; equilibrium demands perpendicular exit at strength \u03c3/\u03b5\u2080.',
            },
            {
              q: 'A Gaussian sphere encloses charge +q while a charge \u2212q sits outside it. The net flux through the sphere is:',
              options: ['Zero, because the charges cancel', 'q/\u03b5\u2080, set by the enclosed charge only', 'Zero, because the outside charge sends lines inward', '2q/\u03b5\u2080'],
              answer: 1,
              explain: 'Only enclosed charge sets net flux; the external charge\u2019s contributions enter and leave in equal measure.',
            },
          ],
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Coulomb: F = kq\u2081q\u2082/r\u00b2; fields and forces superpose as vectors.',
            'E = F/q; a point charge gives E = kQ/r\u00b2 radially.',
            'Flux counts field lines; Gauss: the closed-surface integral equals Q_enc/\u03b5\u2080.',
            'Symmetry yields instant answers for spheres, lines, and planes.',
            'Conductors: interior field zero, charge on the surface, cavities shielded.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'phys-wave-optics-interference',
      title: 'Wave Optics: Interference and Diffraction',
      domain: 'Physical Sciences',
      field: 'Physics',
      branch: 'Wave Optics',
      tier: 'intermediate',
      concepts: [
        'Huygens\u2019 principle',
        'Coherence and path difference',
        'Young\u2019s double-slit experiment',
        'Fringe spacing',
        'Thin-film interference',
        'Single-slit diffraction',
        'Diffraction gratings',
      ],
      words: 1380,
      readMins: 7,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Light often behaves like a ray, but wherever it meets slits, edges, or thin films its wave nature takes over and paints stripes of brightness and darkness. Wave Optics explains those patterns with one idea — superposition: overlapping waves reinforce where crest meets crest and cancel where crest meets trough. From that single principle flow double-slit fringes, soap-bubble colors, the resolution limit of every lens, and the gratings that read the chemistry of starlight.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Every telescope, microscope, camera lens, and spectrometer is designed around interference and diffraction. The same physics sets the absolute limit on how much detail any optical instrument can resolve — and enables interferometers that compare kilometre-long light paths to a fraction of a wavelength to detect passing gravitational waves.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Huygens\u2019 principle treats every point on a wavefront as a source of tiny secondary wavelets whose envelope is the wavefront a moment later. It reproduces straight-line propagation in open space and, at an aperture, predicts that wavelets curl around the edges — diffraction. When light passes through two narrow slits, the wavelets from each overlap downstream, and their phase relationship — agree or disagree — decides brightness point by point.',
        },
        {
          kind: 'para',
          text: 'Steady fringes demand coherent sources: waves with a fixed phase relationship, usually obtained by splitting one beam into two, as Thomas Young did in 1801 with sunlight through a pinhole. Where the two paths differ by a whole number m of wavelengths, crests arrive with crests — constructive interference, a bright fringe. At odd half wavelengths they arrive opposed and cancel into darkness. Half a micrometre of path difference, about one wavelength of visible light, is all it takes to flip bright to dark.',
        },
        {
          kind: 'para',
          text: 'On a distant screen the bright fringes of a double slit of separation d sit where d sin \u03b8 = m\u03bb, and for small angles their spacing is \u0394y = \u03bbL/d. The formula is a laboratory in itself: measure a few millimetres and you have measured the wavelength of light. Red light spreads its fringes wider than blue, so white light smears into overlapping colored spectra — a fringe pattern is a wavelength meter you can build with a razor blade and a screen.',
        },
        {
          kind: 'para',
          text: 'A soap film or oil slick splits light at its two surfaces, and the two reflected beams superpose after a round trip of optical path 2nt through the film of refractive index n. One extra rule matters: reflection off a higher-index boundary adds a half-wavelength phase shift. Combine both effects and a film shines in colors determined by its thickness — bright where 2nt matches an odd half-multiple of one wavelength while suiting a whole multiple of another. Anti-reflective coatings use the same arithmetic in reverse: a quarter-wave layer, t = \u03bb/4n, makes the two reflections cancel, buying lenses darker, sharper images.',
        },
        {
          kind: 'para',
          text: 'Even a single slit makes fringes. Light from the slit\u2019s edges interferes with light from its middle, producing a broad central band flanked by darkness wherever a sin \u03b8 = m\u03bb; the narrower the slit, the wider the spread. Two point objects are just resolvable when one\u2019s central maximum lands on the other\u2019s first dark fringe — the Rayleigh criterion, \u03b8 \u2248 1.22\u03bb/D for a circular aperture of diameter D. That is why telescopes want giant mirrors and microscopes want blue-shifted, short-wavelength light.',
        },
        {
          kind: 'para',
          text: 'Replace two slits with thousands and the bright orders sharpen into hairlines, because many beams must now agree in phase at once. A grating of line spacing d sends wavelength \u03bb into angles given by the same d sin \u03b8 = m\u03bb, fanning a beam into a precise spectrum — the working heart of spectrometers that identify elements in distant stars. The microscopic pits of a CD act as a grating, which is why its surface shimmers in rainbow colors.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Two-source interference',
          latex: 'd\\sin\\theta = m\\lambda',
          meaning: 'Bright fringes where the path difference is an integer number of wavelengths (m = 0, 1, 2, \u2026); destructive at half-integer multiples.',
        },
        {
          kind: 'formula',
          name: 'Double-slit fringe spacing',
          latex: '\\Delta y = \\frac{\\lambda L}{d}',
          meaning: 'Separation of adjacent bright fringes on a screen at distance L (small angles); larger d squeezes the pattern, longer \u03bb spreads it.',
        },
        {
          kind: 'formula',
          name: 'Thin-film interference',
          latex: '2nt = \\left(m + \\tfrac{1}{2}\\right)\\lambda \\quad \\text{(bright, one reflecting shift)}',
          meaning: 'Reflected beams reinforce when the round-trip optical path matches an odd half-multiple of the wavelength — valid when exactly one reflection hits a higher-index boundary.',
        },
        {
          kind: 'formula',
          name: 'Single-slit minima and resolution',
          latex: 'a\\sin\\theta = m\\lambda, \\qquad \\theta_{\\min} \\approx \\frac{1.22\\lambda}{D}',
          meaning: 'Diffraction minima of a slit of width a; Rayleigh\u2019s criterion for just resolving two points through a circular aperture of diameter D.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the fringe spacing and the position of the third bright fringe when 550-nm light passes slits 0.20 mm apart onto a screen 1.5 m away.',
            'Recall the governing idea: double-slit fringes follow \u0394y = \u03bbL/d, with the m-th bright fringe at m\u0394y from the centre.',
            'Apply: convert units — \u03bb = 5.50 \u00d7 10\u207b\u2077 m and d = 2.0 \u00d7 10\u207b\u2074 m — so \u0394y = (5.50 \u00d7 10\u207b\u2077 \u00d7 1.5)/(2.0 \u00d7 10\u207b\u2074) \u2248 4.1 \u00d7 10\u207b\u00b3 m.',
            'Extend: the third bright fringe (m = 3) sits about 3 \u00d7 4.1 mm \u2248 12.4 mm from the centre; submerging the apparatus in water (n = 1.33) shortens the wavelength and pulls the spacing down to about 3.1 mm.',
            'State the result: fringes roughly 4 mm apart — wide enough to measure with a ruler on paper, which is exactly how the wavelengths of light were first counted.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Fringes need coherence — two independent lamps will never paint a steady pattern. In thin films, forgetting the half-wavelength reflection shift flips every answer. Diffraction is not refraction: it bends light around edges by interference, not by changing its speed in a medium. And the small-angle formula \u0394y = \u03bbL/d quietly fails at wide angles, where sin \u03b8 must replace tan \u03b8.',
          tone: 'warn',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Wavefront', def: 'A surface of equal phase; Huygens\u2019 principle builds its next position from secondary wavelets.' },
            { term: 'Coherence', def: 'A fixed phase relationship between waves, required for stable interference fringes.' },
            { term: 'Path difference', def: 'The distance gap between two overlapping beams; integer wavelengths reinforce, half-integers cancel.' },
            { term: 'Order (m)', def: 'The integer counting how many wavelengths of path difference a given fringe represents.' },
            { term: 'Diffraction', def: 'The bending and spreading of waves around edges and through apertures.' },
            { term: 'Rayleigh criterion', def: 'The minimum resolvable angular separation, about 1.22\u03bb/D for a circular aperture.' },
            { term: 'Diffraction grating', def: 'Many evenly spaced slits that sharpen interference into narrow, wavelength-separated lines.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A double slit is lit by coherent green light. Making the slit separation smaller will:',
              options: ['Widen the fringe spacing', 'Narrow the fringe spacing', 'Remove the pattern entirely', 'Change the color of the fringes'],
              answer: 0,
              explain: '\u0394y = \u03bbL/d — halving d doubles the spacing between fringes.',
            },
            {
              q: 'A soap spot reflects no light where the film satisfies 2nt = m\u03bb (with one reflection shifted). At that spot the two reflected beams are:',
              options: ['In phase — constructive', 'Out of phase — destructive', 'Unchanged by thickness', 'Absorbed by the film'],
              answer: 1,
              explain: 'With the half-wavelength shift added to an integer-wavelength round trip, the beams leave opposite in phase and cancel.',
            },
            {
              q: 'The first dark fringe of a single slit of width a appears at:',
              options: ['a sin \u03b8 = 0', 'a sin \u03b8 = \u03bb', 'd sin \u03b8 = m\u03bb', '2nt = \u03bb'],
              answer: 1,
              explain: 'Light from the slit\u2019s two halves cancels pairwise when the edge-to-centre path difference reaches \u03bb/2, i.e. a sin \u03b8 = \u03bb.',
            },
            {
              q: 'Diffraction gratings produce sharper spectral lines than a double slit because:',
              options: ['More slits mean more beams that must agree in phase, narrowing each maximum', 'Gratings reflect light more efficiently', 'Grating slits are much wider', 'Gratings use incoherent light'],
              answer: 0,
              explain: 'With thousands of contributing beams, even a tiny phase mismatch cancels, squeezing the bright orders into hairlines.',
            },
            {
              q: 'The Rayleigh criterion tells us:',
              options: ['How bright an image must be to be seen', 'The smallest angular separation two point sources can have and still be distinguished', 'The maximum magnification of any lens', 'How fast light travels in glass'],
              answer: 1,
              explain: 'Resolution ends when one source\u2019s diffraction maximum lands on the other\u2019s first dark fringe — about 1.22\u03bb/D.',
            },
          ],
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Huygens: every wavefront point emits wavelets; at edges they curl — diffraction.',
            'Coherent beams: integer-wavelength path differences brighten, half-integer darken.',
            'Double slit: d sin \u03b8 = m\u03bb and \u0394y = \u03bbL/d — measuring light with a ruler.',
            'Thin films: 2nt plus the reflection shift paints colors in soap and coatings.',
            'Resolution floor: \u03b8 \u2248 1.22\u03bb/D — bigger apertures and shorter wavelengths see finer detail.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'phys-organic-substitution-elimination',
      title: 'Nucleophilic Substitution and Elimination Mechanisms',
      domain: 'Physical Sciences',
      field: 'Chemistry',
      branch: 'Organic Chemistry',
      tier: 'advanced',
      concepts: [
        'Curly arrows and electron flow',
        'Nucleophiles, electrophiles, and leaving groups',
        'SN2 backside attack and inversion',
        'SN1 carbocations and racemization',
        'E2 anti-periplanar geometry',
        'Rate laws as mechanism evidence',
        'Choosing between substitution and elimination',
      ],
      words: 1390,
      readMins: 7,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Organic chemistry is electron accounting. Every mechanism is a story of where electrons start, where they end, and how they travel — told with curly arrows running from electron-rich nucleophiles toward electron-poor electrophiles. This topic follows the two most important plot lines of haloalkane chemistry: substitution, where a nucleophile takes the leaving group\u2019s place, and elimination, where a base strips a proton and the molecule forges a double bond. Four mechanisms — SN1, SN2, E1, E2 — compete for the same substrate, and learning to predict the winner is the discipline.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Pharmaceutical synthesis, agrochemical design, and the liver enzymes that detoxify drugs all run substitution and elimination steps. The rate laws that first separated them created modern physical-organic chemistry: measure how fast a reaction goes, and you learn how it happens.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Three characters drive the drama. The nucleophile — nucleus-loving — carries a lone pair or a \u03c0 bond (hydroxide, cyanide, iodide, water) and attacks atoms short of electrons. The electrophile is that electron-poor atom, usually the carbon bonded to a good leaving group such as iodide, bromide, or a sulfonate. Curly arrows always start at electrons — a lone pair or a bond — and end where they are heading; recounting formal charges at every step is how a mechanism stays honest.',
        },
        {
          kind: 'para',
          text: 'The SN2 mechanism is one concerted motion: the nucleophile attacks the carbon from the side opposite the leaving group while the old bond breaks, passing through a planar transition state like an umbrella in a storm. The geometry has a visible consequence — the three surviving groups flip configuration, so an (R)-substrate yields an (S)-product, the Walden inversion. The rate law is second order, rate = k[RX][Nu], because both species must meet in the single, rate-determining step. SN2 thrives on unhindered carbons (methyl fastest, primary fine, secondary slower), strong nucleophiles, and polar aprotic solvents such as acetone or DMSO that leave the nucleophile naked and hungry.',
        },
        {
          kind: 'para',
          text: 'Give the carbon a stable carbocation — tertiary beats secondary, secondary beats primary, methyl has none — and the mechanism changes character. Step one: the leaving group departs alone, leaving a planar, sp\u00b2 carbocation. Step two: the nucleophile attacks from either face, so an optically active substrate racemizes. The rate law drops to first order, rate = k[RX], because only the slow C\u2013X cleavage matters; the nucleophile waits unemployed. Polar protic solvents (water, ethanol) help by stabilizing both ions, and the intermediate can even rearrange — a hydride or methyl shift — into a more stable carbocation before anything else happens.',
        },
        {
          kind: 'para',
          text: 'Elimination has its concerted workhorse too. In E2, a strong base grabs a \u03b2-hydrogen while the C\u2013H and C\u2013X bonds break and the \u03c0 bond forms — one transition state, four events, rate = k[RX][base]. The strict geometric demand is anti-periplanar arrangement: the breaking C\u2013H and C\u2013X bonds must lie in one plane, pointing opposite ways, so the emerging p orbitals overlap cleanly. Open-chain substrates rotate to find it; cyclohexanes must put the leaving group axial, trans-diaxial to the departing hydrogen — which decides which alkene a ring can give.',
        },
        {
          kind: 'para',
          text: 'E1 shares SN1\u2019s carbocation and its first-order rate law, so the two compete wherever carbocations form; elevated temperature tips the balance toward elimination because it creates an extra molecule and favorable entropy (\u0394G = \u0394H \u2212 T\u0394S). Among the possible alkenes, the Zaitsev product — the more substituted double bond — usually dominates with small bases, since substituted alkenes are marginally more stable. Bulky bases such as tert-butoxide cannot reach crowded \u03b2-hydrogens and settle for the less substituted Hofmann alkene instead.',
        },
        {
          kind: 'para',
          text: 'Facing a substrate and reagents, ask in order: what is the carbon? (methyl and primary rule out SN1/E1; tertiary rules out SN2). How strong and how bulky is the base or nucleophile? (strong and bulky points E2; strong and small points SN2 on primary carbons). What solvent and temperature? (protic and warm favor the unimolecular paths and elimination). Thus sodium iodide in acetone converts 1-bromobutane to 1-iodobutane by SN2 — the Finkelstein reaction — while potassium tert-butoxide on the same substrate gives 1-butene by E2.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Second-order rate law (SN2, E2)',
          latex: '\\text{rate} = k[\\text{R--X}][\\text{Nu or B}]',
          meaning: 'Both species collide in the single, rate-determining step; doubling either concentration doubles the rate.',
        },
        {
          kind: 'formula',
          name: 'First-order rate law (SN1, E1)',
          latex: '\\text{rate} = k[\\text{R--X}]',
          meaning: 'Only the substrate participates in the slow step — ionization to a carbocation; the nucleophile or base is absent from the rate law.',
        },
        {
          kind: 'formula',
          name: 'Arrhenius equation',
          latex: 'k = A e^{-E_a/(RT)}',
          meaning: 'Rate constants climb steeply with temperature; substitution barriers of 50\u2013100 kJ/mol mean a modest warm-up can double the pace.',
        },
        {
          kind: 'formula',
          name: 'Thermodynamics of elimination',
          latex: '\\Delta G = \\Delta H - T\\Delta S',
          meaning: 'Elimination adds molecules and entropy, so the \u2212T\u0394S term makes high temperature favor E2 and E1 over substitution.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the major products when 2-bromobutane meets (a) sodium methoxide in methanol and (b) potassium tert-butoxide.',
            'Classify the substrate: secondary — SN2 and E2 are both available, so the reagent decides the outcome.',
            'Case (a): methoxide is small, strong, and only moderately basic; at ordinary temperature on a secondary substrate, substitution edges out elimination, giving 2-methoxybutane with inverted configuration at C-2, plus some butenes.',
            'Case (b): tert-butoxide is bulky — a poor nucleophile but a strong base — so E2 dominates, attacking whatever \u03b2-hydrogen it can reach in the anti-periplanar geometry that rotation supplies.',
            'Predict the alkene spread: with the bulky base the Hofmann product 1-butene takes an unusually large share, often the majority, while smaller bases like ethoxide would favor the Zaitsev product trans-2-butene.',
            'State the result: (a) mainly 2-methoxybutane; (b) mainly butenes with 1-butene enriched — reagent sterics steering selectivity, the decision framework in action.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The classic slips: reading a rate law as overall stoichiometry rather than a fingerprint of the slow step; assuming tertiary substrates manage SN2 (backside attack is walled off); forgetting that E2 demands anti-periplanar geometry — axial, in cyclohexanes; and treating Zaitsev\u2019s rule as law rather than the default that bulky bases and high temperatures override.',
          tone: 'warn',
        },
        {
          kind: 'terms',
          items: [
            { term: 'Nucleophile', def: 'An electron-pair donor that attacks electron-poor centers; stronger when charged, polarizable, and unsolvated.' },
            { term: 'Leaving group', def: 'The fragment that departs with the bonding pair; halides and sulfonates are good, hydroxide is poor.' },
            { term: 'Carbocation', def: 'A planar, sp\u00b2 carbon bearing positive charge; stability rises from primary to secondary to tertiary.' },
            { term: 'Anti-periplanar', def: 'The coplanar, oppositely directed arrangement of the breaking C\u2013H and C\u2013X bonds required for E2.' },
            { term: 'Walden inversion', def: 'The configuration flip at the attacked carbon caused by SN2 backside attack.' },
            { term: 'Racemization', def: 'Loss of optical purity when a planar intermediate is attacked from either face, as in SN1.' },
            { term: 'Zaitsev rule', def: 'The tendency of eliminations to give the more substituted, more stable alkene.' },
            { term: 'Polar aprotic solvent', def: 'A solvent such as acetone, DMSO, or acetonitrile with no O\u2013H or N\u2013H bonds; it leaves anions naked and fast.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Doubling the nucleophile concentration doubles the rate of a substitution. The mechanism is:',
              options: ['SN1', 'SN2', 'Both equally', 'Neither'],
              answer: 1,
              explain: 'A second-order rate law — rate = k[RX][Nu] — is the fingerprint of the concerted SN2 path.',
            },
            {
              q: 'Tertiary haloalkanes essentially never react by SN2 because:',
              options: ['They are insoluble in every solvent', 'Backside attack on the crowded tertiary carbon is blocked', 'Tertiary carbocations are unstable', 'The C\u2013X bond is too strong'],
              answer: 1,
              explain: 'Three alkyl groups wall off the rear face of the carbon; the nucleophile cannot reach the transition-state geometry.',
            },
            {
              q: 'An SN1 reaction of an optically active tertiary bromide with water gives:',
              options: ['The pure inverted product', 'A racemic mixture, often with a slight inversion bias', 'Retention of configuration', 'No reaction at all'],
              answer: 1,
              explain: 'The planar carbocation is attacked from both faces; fleeting ion pairs often shield one side, biasing slight net inversion.',
            },
            {
              q: 'For E2, the \u03b2-hydrogen and the leaving group must be:',
              options: ['Syn-periplanar', 'Anti-periplanar', 'In different molecules', 'Separated by at least four bonds'],
              answer: 1,
              explain: 'Anti-periplanar alignment lets the forming \u03c0 bond\u2019s p orbitals overlap as the two \u03c3 bonds break.',
            },
            {
              q: 'Heating a mixture where substitution and elimination compete mainly:',
              options: ['Speeds substitution only', 'Favors elimination through the entropy term in \u0394G = \u0394H \u2212 T\u0394S', 'Changes the rate law\u2019s order', 'Destroys the nucleophile'],
              answer: 1,
              explain: 'Elimination makes an extra molecule, so higher temperature strengthens the \u2212T\u0394S push toward alkene.',
            },
          ],
        },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Curly arrows move electron pairs from rich to poor; recount charges at every step.',
            'SN2: concerted backside attack, inversion, rate = k[RX][Nu]; wants unhindered carbons and polar aprotic solvents.',
            'SN1: carbocation then attack, racemization, rate = k[RX]; wants tertiary substrates and protic solvents.',
            'E2: anti-periplanar concert, rate = k[RX][base]; bulky bases give Hofmann alkenes.',
            'Decide by substrate, base strength, solvent, and temperature — the four-way contest.',
          ],
        },
      ],
    },
  ],
}
