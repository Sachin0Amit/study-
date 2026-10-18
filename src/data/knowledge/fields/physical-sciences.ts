/**
 * Knowledge Universe — domain file: Physical Sciences
 *
 * Physics and chemistry from rotating bodies to reacting molecules.
 * Complete lessons; future expansion passes append new topics below.
 */

import type { KnowledgeDomainFile } from '../types'

export const physicalSciences: KnowledgeDomainFile = {
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
      id: 'phys-special-relativity',
      title: 'Special Relativity: Time, Length and the Speed Limit',
      domain: 'Physical Sciences',
      field: 'Physics',
      branch: 'Modern Physics',
      tier: 'intermediate',
      concepts: [
        'Two postulates and one stubborn constant',
        'Time dilation: moving clocks run slow',
        'Length contraction along the motion',
        'The relativity of simultaneity',
        'The Lorentz factor γ',
        'Mass–energy equivalence',
      ],
      words: 880,
      readMins: 4,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'In 1905 a twenty-six-year-old patent clerk asked a disarmingly simple question: what does a beam of light look like if you race alongside it? Albert Einstein\u2019s answer — the same speed for every observer, however they move — quietly retired two centuries of absolute space and time. Special Relativity rebuilds physics around that fixed cosmic speed limit: moving clocks tick slow, moving rulers shrink, and simultaneity itself becomes a matter of viewpoint, all the way down to the energy sleeping inside matter.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Satellite navigation would drift kilometers off course within a day without relativistic clock corrections, particle accelerators stretch unstable lifetimes a thousandfold as routine engineering, and the Sun shines by E = mc². Relativity is not exotic garnish on physics — it is load-bearing infrastructure of the modern world.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Special relativity stands on just two postulates. First, the laws of physics are identical in every inertial frame — no experiment inside a smoothly cruising laboratory can reveal its speed. Second, light in vacuum travels at the same speed c, about 300,000 kilometers per second, for every inertial observer, regardless of how its source moves. The second postulate is the rebel: it refuses common-sense velocity addition, and every strange consequence that follows flows from it.',
        },
        {
          kind: 'para',
          text: 'Picture a clock that ticks by bouncing light between two mirrors. On a spaceship sailing past Earth, that bounce traces a longer zigzag as seen from the ground — and a longer path at one fixed speed takes more time per tick. Earth therefore judges the ship\u2019s clock slow: one hour of ship time can measure ten on the ground. This is time dilation, and it is no illusion; reunited clocks genuinely show different elapsed times.',
        },
        {
          kind: 'para',
          text: 'Motion also compresses distance. A spaceship passing Earth is measured by Earth as shortened along its direction of travel — exactly a factor γ shorter — while its height and width are untouched. The crew sees the reverse: their ship feels normal, but the distance to their destination has shrunk. Length contraction and time dilation are one bookkeeping seen from two chairs, each frame measuring the other\u2019s rulers as short and clocks as slow.',
        },
        {
          kind: 'para',
          text: 'The subtlest consequence concerns the meaning of now. Two lightning strikes that a platform observer sees as simultaneous happen at different moments for an observer on a passing train, whose motion changes how the light from each strike meets them — and neither verdict is more correct. Simultaneity is not a property of distant events alone; it belongs to the frame that measures them. Most relativity paradoxes dissolve once this is respected.',
        },
        {
          kind: 'para',
          text: 'Everything is priced by a single dial, the Lorentz factor γ = 1/√(1 − v²/c²). At everyday speeds γ is indistinguishable from 1, which is why Newton never noticed any of this. At 87 percent of light speed γ reaches 2 — clocks halve their rate, lengths halve — it passes 5 by 98 percent, and it grows without bound as v approaches c: the mathematics that keeps massive matter below the speed limit.',
        },
        {
          kind: 'para',
          text: 'The capstone is E₀ = mc²: rest mass itself is energy, priced at the staggering exchange rate of the speed of light squared. A one-gram paperclip, fully converted, would release about 90 terajoules — a large power plant\u2019s daily output. Nuclear fission and fusion tap a fraction of a percent; matter–antimatter annihilation taps all of it. Mass is not conserved separately from energy — mass-energy is.',
        },
        { kind: 'heading', text: 'The Mathematics' },
        {
          kind: 'formula',
          name: 'Lorentz factor',
          latex: '\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}',
          meaning: 'The single stretch factor of relativity: γ = 1 at rest, near 2 at 0.87c, and unbounded as v → c.',
        },
        {
          kind: 'formula',
          name: 'Time dilation',
          latex: '\\Delta t = \\gamma\\, \\Delta t_0',
          meaning: 'A moving clock\u2019s proper interval Δt₀ is measured from outside as longer by the factor γ.',
        },
        {
          kind: 'formula',
          name: 'Rest energy',
          latex: 'E_0 = mc^2',
          meaning: 'Energy locked in rest mass; the c² factor turns grams into city-scale energies.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how muons born 10 kilometers overhead manage to reach sea level when their own clocks allow only 2.2 microseconds of life.',
            'Recall the governing idea: time dilation — a clock moving at speed v runs slow, as seen from outside, by the factor γ = 1/√(1 − v²/c²).',
            'Apply: at v = 0.995c, γ ≈ 10, so the 2.2-microsecond lifetime dilates to about 22 microseconds; the muon can then cover roughly 0.995 × 3.0×10⁸ m/s × 22 microseconds ≈ 6.6 kilometers, versus only 0.66 kilometers without dilation.',
            'State the result: a substantial fraction of the muons survive the full descent — the same story told in their own frame as an atmosphere contracted to a tenth — so relativity is verified continuously by cosmic rays raining on every square meter.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Satellite navigation systems correct their onboard clocks by about 38 microseconds per day for relativistic effects, or positions would drift by kilometers.',
            'Particle accelerators treat γ factors in the thousands as routine input — at the Large Hadron Collider, protons journey as if the ring were far shorter.',
            'Relativistic inner electrons make gold golden and mercury liquid — chemistry visibly bent by electrons moving at appreciable fractions of c.',
            'Positron-emission tomography turns E = mc² directly into medical images, reading the annihilation photons of electron–positron meeting.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The deepest error is treating relativity as the doctrine that everything is relative — the speed of light, the spacetime interval, and rest mass are absolute, and invariant quantities are the theory\u2019s real anchors. Second, time dilation is not an optical trick or a measurement artifact: reunited clocks disagree permanently, and the twin paradox is resolved by noticing which twin changed frames to turn around.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Inertial frame', def: 'A reference frame in uniform, unaccelerated motion, where physics takes its simplest form.' },
            { term: 'Proper time', def: 'Time measured by a clock traveling with the object — the interval every observer agrees is shortest.' },
            { term: 'Time dilation', def: 'A moving clock observed from outside to run slow by the factor γ.' },
            { term: 'Length contraction', def: 'A moving object measured shorter along its motion by the factor 1/γ.' },
            { term: 'Lorentz factor', def: 'γ = 1/√(1 − v²/c²), the single dial setting all relativistic stretching.' },
            { term: 'Rest energy', def: 'The energy E₀ = mc² carried by mass at rest, released in nuclear and annihilation processes.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A spaceship flashes its headlight while passing you at half the speed of light. You measure the beam at:',
              options: ['Half of c', 'Exactly c', 'One and a half times c', 'Zero'],
              answer: 1,
              explain: 'The second postulate fixes light\u2019s vacuum speed at c for every inertial observer; the source\u2019s motion never adds or subtracts.',
            },
            {
              q: 'A clock crosses your laboratory at 0.87c, where γ ≈ 2. For each second it registers, your clocks record:',
              options: ['0.5 seconds', '1 second', '2 seconds', '4 seconds'],
              answer: 2,
              explain: 'Your frame sees the moving clock slow: Δt = γΔt₀ = 2 × 1 s.',
            },
            {
              q: 'Two supernovae flare simultaneously in Earth\u2019s reference frame. A spacecraft cruising past Earth at half light speed judges them:',
              options: ['Also simultaneous', 'To have occurred at different moments', 'Not to have occurred', 'To have occurred in the same place'],
              answer: 1,
              explain: 'Simultaneity is frame-dependent: the ship\u2019s tilted slice through spacetime cuts the two events at different times, and neither frame is privileged.',
            },
            {
              q: 'The equation E₀ = mc² expresses that:',
              options: ['Energy always moves at light speed', 'Rest mass is a form of energy, with c² as the exchange rate', 'Mass grows without bound as speed rises', 'Light carries the only energy'],
              answer: 1,
              explain: 'Mass and energy are one currency; the huge c² factor is why grams of matter correspond to astronomical energies.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Prerequisites: Newtonian mechanics and wave basics — the Doppler effect especially, which relativity reshapes. Continue with spacetime diagrams and the invariant interval, then general relativity, where gravity becomes geometry; particle physics uses γ as a household number, and the muon calculation above is worth re-deriving by hand.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'chem-periodic-trends',
      title: 'The Periodic Table\u2019s Hidden Architecture',
      domain: 'Physical Sciences',
      field: 'Chemistry',
      branch: 'Inorganic Chemistry',
      tier: 'core',
      concepts: [
        'Electron configuration draws the map',
        'Effective nuclear charge',
        'Atomic radius',
        'Ionization energy',
        'Electronegativity',
        'Metallic character and the staircase',
      ],
      words: 870,
      readMins: 4,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'The periodic table looks like wall decoration; it is closer to a map of the atom. When Dmitri Mendeleev arranged the elements by mass and behavior in 1869, he left deliberate gaps and predicted the properties of the missing ones — gallium and germanium arrived on schedule and vindicated the pattern. The deeper logic arrived with quantum mechanics: position encodes electron configuration, and configuration drives every trend that follows — size, the price of ionization, appetite for electrons, and the metal–nonmetal divide.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Most of chemistry is prediction from position: whether an element will donate, accept, or share its electrons. Doping a semiconductor, choosing a battery electrode, and explaining why fluoride hardens enamel are all periodic-trend calls. The table compresses tens of thousands of observations into a geometry anyone can read in an afternoon.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'An element\u2019s address is its electron arrangement. The row, or period, tells which shell is being filled; the column, or group, tells how many electrons occupy the outermost shell — one for the alkali metals, seven for the halogens, eight for the noble gases. Because valence electrons do nearly all the bonding, a column behaves like a family of chemical siblings: lithium, sodium, and potassium each carry one loosely held electron.',
        },
        {
          kind: 'para',
          text: 'A valence electron feels not the full pull of the nucleus but a discounted version — the effective nuclear charge, the proton count minus the shielding of inner electrons. Moving right along a period adds protons and valence electrons together, but the newcomers shield each other poorly, so the net pull climbs from about +1 at sodium to about +7 at chlorine. That strengthening grip, not memorized arrows, is the engine behind every trend in a row.',
        },
        {
          kind: 'para',
          text: 'Atoms shrink from left to right across a period — sodium\u2019s roughly 190-picometer girth contracts to chlorine\u2019s 100 — as stronger effective charge reels in a shell that adds no new distance. Down a group the opposite wins: each step adds a full shell whose outward sprawl beats the extra protons, so potassium dwarfs sodium. Radius is a permanent tug-of-war between shells pushing out and charge pulling in.',
        },
        {
          kind: 'para',
          text: 'Tearing away an electron costs energy, and the price tracks effective charge and radius together: first ionization energy climbs left to right — 496 kilojoules per mole for sodium, 1,251 for chlorine — and falls down a group as distance dilutes attraction. The jagged exceptions teach the most: oxygen costs less than nitrogen because its fourth 2p electron is the first forced to share an orbital, and the pairing repulsion eases removal.',
        },
        {
          kind: 'para',
          text: 'Electronegativity measures an atom\u2019s pull on shared bonding electrons, and it echoes ionization energy: highest at fluorine, 4.0 on the Pauling scale, lowest toward francium, rising across a period and up a group. The consequences are directional. Elements far apart in the table form ionic bonds — the hungrier side takes the electrons outright — while close neighbors share. A glance at position predicts whether a bond transfers, shares evenly, or splits the difference.',
        },
        {
          kind: 'para',
          text: 'Metallic character — the willingness to release electrons — grows down and to the left, tracing the familiar staircase across the table. Metals below and left hold their electrons loosely, pooling them into a delocalized sea: conductive, malleable, lustrous. Nonmetals above right grip tightly and either seize electrons or share them in discrete molecules. The metalloids straddling the border inherit switchable, semiconductor personalities — silicon\u2019s entire career is built on that ambiguity.',
        },
        { kind: 'heading', text: 'The Mathematics' },
        {
          kind: 'formula',
          name: 'Effective nuclear charge',
          latex: 'Z_{\\text{eff}} = Z - S',
          meaning: 'Protons minus shielding: a sodium valence electron feels about +1, a chlorine\u2019s about +7 on the same shell.',
        },
        {
          kind: 'formula',
          name: 'Coulomb attraction',
          latex: 'F = \\frac{k\\, q_1 q_2}{r^2}',
          meaning: 'The attraction binding electrons scales with effective charge and weakens with distance squared — why grip and radius jointly set every trend.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: rank sodium, magnesium, and chlorine by atomic radius and first ionization energy, with reasons.',
            'Recall the governing idea: across a period, effective nuclear charge rises while the valence shell stays the same size, so atoms contract and their electrons cost more to remove.',
            'Apply: on the third period the effective charges run about +1 (Na), +2 (Mg), and +7 (Cl); radii fall from roughly 190 pm through 160 pm to about 100 pm, while first ionization energies climb 496, 738, then 1,251 kJ/mol.',
            'State the result: radius orders Na > Mg > Cl and ionization energy Na < Mg < Cl — one mechanism read twice, a tighter grip meaning both a smaller atom and a dearer electron.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Doping silicon with phosphorus donates a spare electron and with boron accepts one — the periodic staircase is the electronics industry.',
            'Battery electrodes lean on lithium\u2019s small radius and low ionization energy for light, energetic cells — and on sodium one row down for cheaper ones.',
            'Fluoride toothpaste hardens enamel because the smallest, greediest halogen swaps into hydroxyapatite, resisting acid attack.',
            'Bond-type prediction from position alone: sodium chloride transfers electrons outright, hydrogen chloride shares them unevenly — reactivity forecast from geometry.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The classic slip is memorizing trend arrows without the mechanism — every trend in this topic is one story, effective charge pulling on a shell. Others: forgetting that radius grows down a group despite added protons, because new shells win; treating trends as laws, when oxygen\u2019s dip below nitrogen breaks the smooth climb; and comparing noble gases as if they bonded like their neighbors.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Valence electrons', def: 'Outermost-shell electrons that do nearly all bonding; equal to the main-group number.' },
            { term: 'Effective nuclear charge', def: 'The net positive pull a valence electron feels after inner-electron shielding, Z − S.' },
            { term: 'Atomic radius', def: 'An atom\u2019s effective size — shrinking across a period, growing down a group.' },
            { term: 'Ionization energy', def: 'Energy needed to remove the outermost electron from a gaseous atom.' },
            { term: 'Electronegativity', def: 'An atom\u2019s pull on shared bonding electrons, peaking at fluorine.' },
            { term: 'Shielding', def: 'Reduction of nuclear attraction by electrons lying closer to the nucleus.' },
            { term: 'Metalloid', def: 'An element straddling the metal–nonmetal staircase with intermediate, switchable behavior.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Which third-period atom is the largest?',
              options: ['Sodium', 'Magnesium', 'Sulfur', 'Chlorine'],
              answer: 0,
              explain: 'Same shell, smallest effective charge: sodium\u2019s weak +1 grip leaves it widest.',
            },
            {
              q: 'First ionization energy rises across a period mainly because:',
              options: ['Atoms gain neutrons', 'Effective nuclear charge grows while the valence shell stays put', 'The atoms become heavier', 'Electrons pair up evenly'],
              answer: 1,
              explain: 'More pull on a same-sized shell means a firmer grip and a higher price per electron.',
            },
            {
              q: 'Oxygen\u2019s first ionization energy is lower than nitrogen\u2019s because:',
              options: ['Oxygen is the larger atom', 'The fourth 2p electron is paired, and pairing repulsion loosens it', 'Oxygen is less electronegative', 'Nitrogen has a closed shell'],
              answer: 1,
              explain: 'The first shared orbital adds electron–electron repulsion, so oxygen\u2019s outermost electron departs more cheaply.',
            },
            {
              q: 'Down a group, atomic radius increases because:',
              options: ['Nuclear charge vanishes', 'Each step adds a new shell that outweighs the added protons', 'Ionization energy rises', 'Electronegativity climbs'],
              answer: 1,
              explain: 'Distance from the nucleus grows by a whole shell each row, beating the modestly stronger pull.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Prerequisites: atomic structure — shells, subshells, and electron configuration — which this topic repays by explaining the table\u2019s very shape. Continue to ionic and covalent bonding, then the transition metals, where the tidy patterns flex; quantum chemistry eventually derives the whole map from first principles.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'phys-astronomy-stellar-lifecycle',
      title: 'How Stars Are Born, Live and Die',
      domain: 'Physical Sciences',
      field: 'Astronomy & Space Science',
      branch: 'Astrophysics',
      tier: 'intermediate',
      concepts: [
        'Molecular clouds and protostars',
        'Hydrostatic equilibrium',
        'The main sequence',
        'Red giants and the dead end of iron',
        'White dwarfs and the Chandrasekhar limit',
        'Core collapse: neutron stars and black holes',
        'Stellar recycling',
      ],
      words: 940,
      readMins: 5,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Stars are not permanent ornaments; they are machines with fuel gauges, and a single number set at birth — mass — writes nearly the whole biography. Inside cold molecular clouds, gravity and pressure negotiate for hundreds of thousands of years until fusion ignites; then follows a long main-sequence adulthood, an inflated old age, and an ending that ranges from a slow fade as a white dwarf to a supernova brighter than a galaxy. Every heavy atom in your body was minted inside one of them.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'The stardust claim is literal chemistry: the carbon in your cells and the iron in your blood were assembled in stellar interiors and scattered by dying stars. Stellar lifetimes also date the universe — the oldest clusters push thirteen billion years — and the hunt for exoplanets leans on stellar models to weigh, age, and place every world it finds.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Stars are born in the cold, dense pockets of giant molecular clouds, where temperatures near ten kelvin let gravity get a grip. A clump that gathers past a critical mass collapses under its own weight, spinning faster and flattening as it shrinks. The glowing heart of this collapse, a protostar, shines on gravitational contraction alone, still swaddled in dust, typically taking a few hundred thousand years to reach the temperature where fusion can begin.',
        },
        {
          kind: 'para',
          text: 'A settled star is a truce. Gravity pulls every layer inward; the pressure of hot gas and radiation pushes outward; and at each depth the two balance exactly — hydrostatic equilibrium. It is a dynamic, self-correcting truce: compress the core slightly and it heats and pushes back harder, like a thermostat. This self-regulation, more than any other single principle, dictates how a star responds as its fuel chemistry shifts deep inside.',
        },
        {
          kind: 'para',
          text: 'Ignition of hydrogen fusion opens the longest chapter: the main sequence, the stable, ten-billion-year adulthood of a Sun-like star, converting core hydrogen into helium. Mass sets the pace brutally — luminosity scales roughly as mass to the third-and-a-half power — so the brightest stars are also the most short-lived. A ten-solar-mass star burns through its fuel about three thousand times faster than the Sun and exits after tens of millions of years.',
        },
        {
          kind: 'para',
          text: 'When core hydrogen runs out, the core contracts while the envelope swells — the star becomes a red giant, hundreds of times wider, cooler at its surface, hotter at its center. Helium ignites, fusing to carbon and oxygen; in stars above roughly eight solar masses the ashes keep burning in onion-like shells until an iron core accumulates. Iron is fusion\u2019s dead end: every step beyond it absorbs energy rather than releasing any, so the pressure bill comes due.',
        },
        {
          kind: 'para',
          text: 'A Sun-like star sheds its outer layers as a shimmering planetary nebula and leaves its carbon-oxygen core bare — a white dwarf, an Earth-sized ember of degenerate matter that fuses nothing ever again. Electron pressure alone holds it up, and that support has a ceiling near 1.4 solar masses, the Chandrasekhar limit. A white dwarf pushed past the ceiling — by stealing mass from a companion — collapses and detonates as a Type Ia supernova of dependable brightness.',
        },
        {
          kind: 'para',
          text: 'A massive star\u2019s iron core, unable to pay its gravitational bill, collapses in under a second; the rebound and a burst of neutrinos blast the star apart as a core-collapse supernova, briefly rivaling a galaxy in light. The remnant depends on mass: a core below a few solar masses halts as a neutron star — city-sized, with a sugar cube of it outweighing a mountain range — while anything heavier collapses into a black hole, detectable by gravity\u2019s signature alone.',
        },
        {
          kind: 'para',
          text: 'Supernovae and the gentler winds of aging stars seed the galaxy with carbon, oxygen, silicon, and iron — planetary raw material. Neutron-star mergers, heard in gravitational waves since 2017, forge much of the gold and platinum. The next molecular cloud inherits the enrichment, so each stellar generation forms with more heavy ingredients than the last: the galaxy compounds its own chemistry, and planets are the dividend.',
        },
        { kind: 'heading', text: 'The Mathematics' },
        {
          kind: 'formula',
          name: 'Mass–luminosity relation',
          latex: 'L \\propto M^{3.5}',
          meaning: 'On the main sequence, ten times the mass means roughly three thousand times the luminosity.',
        },
        {
          kind: 'formula',
          name: 'Main-sequence lifetime',
          latex: 't_{\\text{MS}} \\propto \\frac{M}{L} \\propto M^{-2.5}',
          meaning: 'Fuel over burn rate: a ten-solar-mass star lives about one three-hundredth of the Sun\u2019s ten billion years.',
        },
        {
          kind: 'formula',
          name: 'Chandrasekhar limit',
          latex: 'M_{\\text{Ch}} \\approx 1.4\\, M_{\\odot}',
          meaning: 'The maximum mass electron degeneracy can support in a white dwarf; beyond it lies collapse or detonation.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how long a ten-solar-mass main-sequence star shines, compared with the Sun\u2019s ten-billion-year career.',
            'Recall the governing idea: lifetime scales as fuel over burn rate, t ∝ M/L, and the main sequence sets L ∝ M^3.5.',
            'Apply: t ∝ 10 / 10^3.5 ≈ 1/316 of the solar span; multiplying by ten billion years gives about 3 × 10⁷ years — some thirty million.',
            'State the result: the heavyweight burns out in thirty million years, a cosmic blink, which is why the most massive stars are rare, young, and found only in star-forming regions — and why their ashes mark where new stars are being made.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'The carbon, oxygen, and iron in your body were fused in stellar interiors; supernova remnants are the delivery mechanism.',
            'Dating star clusters by where their brightest survivors leave the main sequence anchors cosmic chronology near 13.8 billion years.',
            'Type Ia supernovae, standardized by the Chandrasekhar limit, revealed the universe\u2019s accelerating expansion.',
            'Exoplanet science begins with the star: planet radii, ages, and habitable-zone bounds are all stellar-physics outputs.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The most common myth is that the Sun will explode — at one solar mass it is fated for a quiet white-dwarf retirement via red giant and planetary nebula. Burning misleads: stars fuse nuclei, they do not combust. And fate tracks birth mass, not age — a red giant is elderly but will never detonate unless it gains mass from a companion; the dramatic endings belong exclusively to the massive.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Protostar', def: 'A collapsing cloud fragment glowing from gravitational contraction, before fusion ignites.' },
            { term: 'Hydrostatic equilibrium', def: 'The exact balance of inward gravity and outward pressure that structures a star.' },
            { term: 'Main sequence', def: 'The long, stable hydrogen-burning phase of stellar life on the Hertzsprung–Russell diagram.' },
            { term: 'Red giant', def: 'A swollen late-stage star with a compact core and a vast, cool envelope.' },
            { term: 'Supernova', def: 'The explosive death of a massive star, forging and scattering heavy elements.' },
            { term: 'Neutron star', def: 'A city-sized remnant held up by neutron degeneracy pressure, denser than an atomic nucleus.' },
            { term: 'Chandrasekhar limit', def: 'The 1.4-solar-mass ceiling beyond which a white dwarf cannot hold itself up.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The single property that most determines a star\u2019s entire life story is its:',
              options: ['Surface color', 'Mass at birth', 'Distance from Earth', 'Apparent brightness'],
              answer: 1,
              explain: 'Mass sets luminosity, lifetime, and ending — the biography is written at birth.',
            },
            {
              q: 'The Sun will end its life as:',
              options: ['A supernova', 'A neutron star', 'A white dwarf, after a red-giant phase', 'A black hole'],
              answer: 2,
              explain: 'One solar mass is far too light for core collapse; it will shed its envelope and retire as a white dwarf.',
            },
            {
              q: 'A ten-solar-mass star, compared with the Sun:',
              options: ['Lives about 30 million years — roughly one three-hundredth as long', 'Lives ten times longer', 'Lives the same span', 'Never fuses hydrogen'],
              answer: 0,
              explain: 'With L ∝ M^3.5, its fuel is spent thousands of times faster than the Sun burns its own.',
            },
            {
              q: 'An iron core collapses because:',
              options: ['Fusing iron absorbs energy rather than releasing it, so pressure support vanishes', 'Iron blocks radiation', 'Iron converts to antimatter', 'The core spins too fast'],
              answer: 0,
              explain: 'Fusion beyond iron is endothermic — it drains the energy whose pressure was holding gravity back.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Prerequisites: gravity, energy conservation, and the nuclear binding-energy curve. Continue with nucleosynthesis in detail, the Hertzsprung–Russell diagram, and compact-object physics — or pivot to cosmology, where stellar clocks and standard candles anchor the timeline of the universe.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'geo-plate-tectonics',
      title: 'Plate Tectonics: The Engine Beneath Your Feet',
      domain: 'Physical Sciences',
      field: 'Geology & Earth Science',
      branch: 'Dynamic Earth',
      tier: 'core',
      concepts: [
        'Continental drift and the evidence for Pangaea',
        'Seafloor spreading and magnetic stripes',
        'Three kinds of plate boundary',
        'What drives plates: convection and slab pull',
        'Rates of plate motion',
        'Subduction zones and the Ring of Fire',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'The ground under your feet is not fixed. Earth\'s outer shell is cracked into more than a dozen rigid plates that crawl over the hotter rock below, and almost everything dramatic about our planet — mountain ranges, ocean basins, earthquakes, volcanoes — happens where those plates meet. The idea was ridiculed when Alfred Wegener proposed continental drift in 1912 because he could not explain how continents could move. Sixty years later, evidence from the ocean floor converted the skeptics, and plate tectonics became the organizing theory of geology — the frame every other Earth science hangs from.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Almost every natural hazard — earthquakes, tsunamis, volcanic eruptions — and every mountain range, ocean basin and ore deposit traces back to plate boundaries. Knowing the theory is knowing where and why the ground does what it does.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Wegener\'s case rested on fit and fossils. The coastlines of South America and Africa match like torn paper; the freshwater reptile Mesosaurus appears in both and nowhere else; Glossopteris plants and 300-million-year-old glacial scratches line up across five southern continents once they are reassembled into the supercontinent Pangaea.',
        },
        {
          kind: 'para',
          text: 'In the early 1960s Harry Hess proposed that new ocean crust forms at mid-ocean ridges and sinks back into trenches. Vine and Matthews clinched it in 1963: magnetic stripes on the seafloor record reversals of Earth\'s magnetic field, arranged symmetrically on either side of the ridge like a tape recording of spreading. No Atlantic seafloor is older than about 200 million years.',
        },
        {
          kind: 'para',
          text: 'The working parts are the boundaries. At divergent boundaries plates pull apart — Iceland straddles the Mid-Atlantic Ridge, and the East African Rift may be splitting a continent in real time. At convergent boundaries plates collide: India ramming Eurasia built the Himalayas, and ocean floor diving into trenches feeds the Andean volcanoes. Transform boundaries such as the San Andreas Fault slide past each other, building no mountains but plenty of earthquakes.',
        },
        {
          kind: 'para',
          text: 'What moves the plates is still debated in detail, but the leading candidates are slow convection in the mantle and slab pull — the cold, dense sinking edge of a plate dragging the rest along. GPS now measures the motion directly: roughly 1 to 10 centimeters per year, about the speed your fingernails grow.',
        },
        {
          kind: 'para',
          text: 'Subduction announces itself as inclined curtains of earthquakes descending from the trenches — Wadati-Benioff zones — tracing plates sinking as deep as 700 kilometers. Those zones girdle the Pacific as the Ring of Fire, where about 90 percent of the world\'s largest earthquakes occur.',
        },
        {
          kind: 'para',
          text: 'Plate tectonics may be rare among planets. Venus, nearly Earth\'s twin in size, shows no active plate boundaries, and its surface is a uniform few hundred million years old. Recycling the crust also regulates atmospheric carbon dioxide over geological time — one reason Earth stayed habitable while Venus became an oven.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how long the Atlantic Ocean, now roughly 5,000 kilometers wide, took to open at its observed spreading rate of 2.5 centimeters per year.',
            'Recall: plate rates stay near-constant over millions of years, so width equals rate multiplied by time.',
            'Apply: convert 5,000 km to 500 million centimeters, then divide by 2.5 cm per year to get 200 million years.',
            'State the result: the Atlantic began opening near the start of the Jurassic — matching the oldest Atlantic seafloor ages and the breakup of Pangaea.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'GPS arrays track plate motion in real time, confirming rates once inferred from magnetic stripes',
            'Seismic hazard maps keep nuclear plants and skylines away from known fault traces',
            'Oil and mineral exploration follows plate settings, which control where basins and ore bodies form',
            'Paleogeographers rebuild ancient supercontinents to explain matching fossils on distant coasts',
            'Volcano monitoring concentrates on subduction arcs such as the Cascades, Japan and the Andes',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Wegener\'s critics were partly right: continents do not plow through solid ocean floor. Plates — crust plus rigid upper mantle — move as units, and continents merely ride them. The Ring of Fire is not one giant crack but many separate subduction zones. And 2.5 centimeters a year feels trivial until you multiply by 200 million years.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Plate tectonics', def: 'The theory that Earth\'s lithosphere is divided into moving plates whose interactions build mountains, basins and hazards.' },
            { term: 'Pangaea', def: 'The supercontinent assembled from earlier landmasses, mostly assembled by 300 million years ago and breaking up from about 200.' },
            { term: 'Lithosphere', def: 'The rigid outer shell — crust plus uppermost mantle — broken into plates.' },
            { term: 'Mid-ocean ridge', def: 'A submarine mountain chain where new oceanic crust forms as plates diverge.' },
            { term: 'Subduction', def: 'The sinking of an oceanic plate into the mantle at a trench, recycling crust.' },
            { term: 'Slab pull', def: 'The force exerted by a cold, dense subducting plate dragging the rest of the plate behind it.' },
            { term: 'Ring of Fire', def: 'The chain of subduction zones ringing the Pacific where most large earthquakes and major eruptions occur.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Magnetic stripes arranged symmetrically on either side of a mid-ocean ridge record:',
              options: ['Reversals of Earth\'s magnetic field frozen into cooling basalt', 'Variations in ocean depth', 'Ancient shorelines', 'Deposits of iron ore'],
              answer: 0,
              explain: 'As new crust cools at the ridge it locks in the field direction at that moment, producing mirror-image stripes of normal and reversed polarity.',
            },
            {
              q: 'The Himalayas formed at a:',
              options: ['Divergent boundary', 'Transform boundary', 'Convergent continent-continent boundary', 'Mid-ocean ridge'],
              answer: 2,
              explain: 'India collided with Eurasia, and the crumpled boundary thickened the crust into the highest range on Earth.',
            },
            {
              q: 'The Atlantic widens about 2.5 cm per year. A 5,000-km-wide ocean implies opening began roughly:',
              options: ['2 million years ago', '20 million years ago', '200 million years ago', '2 billion years ago'],
              answer: 2,
              explain: '500 million cm divided by 2.5 cm/yr gives 200 million years — early Jurassic, when Pangaea rifted apart.',
            },
            {
              q: 'Which force is thought to contribute most to pulling a plate into a subduction zone?',
              options: ['Tidal friction from the Moon', 'Slab pull from the cold, dense sinking plate', 'Wind drag on the ocean surface', 'Earth\'s magnetic field'],
              answer: 1,
              explain: 'Plates with long subducting edges tend to move fastest, which is the fingerprint of slab pull.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'geo-minerals-rocks',
      title: 'Minerals, Rocks and the Rock Cycle',
      domain: 'Physical Sciences',
      field: 'Geology & Earth Science',
      branch: 'Dynamic Earth',
      tier: 'core',
      concepts: [
        'The five tests of a mineral',
        'Identifying minerals: hardness, streak, cleavage',
        'Igneous rocks and cooling rate',
        'Sedimentary rocks and the environments they record',
        'Metamorphic rocks changed in the solid state',
        'The rock cycle conveyor',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Every landscape is built from a surprisingly short ingredient list. A few dozen minerals — feldspar and quartz above all — make up about 95 percent of Earth\'s crust, and those minerals combine into three great rock families: igneous (solidified from melt), sedimentary (pressed from debris) and metamorphic (recooked by heat and pressure). Reading rocks is reading history: granite speaks of slow cooling kilometers underground, sandstone of a vanished river or beach, banded gneiss of mountains once buried 20 kilometers deep. This core Geology & Earth Science lesson covers how minerals are identified and how the rock cycle connects all three families.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Rocks are the raw material of every building, the storage rock of every oil field and aquifer, and the archive of nearly the entire fossil record. Identify a hand specimen and you can read the scene where it formed.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'A mineral is a naturally occurring, inorganic solid with an orderly crystalline structure and a composition that varies only within fixed limits. Ice qualifies; glass, which lacks crystal structure, and coal, which is organic, do not. About 6,000 mineral species are known, but a mere dozen rock-formers dominate — feldspar alone makes up roughly half the crust.',
        },
        {
          kind: 'para',
          text: 'Identification is a process of elimination. Hardness is graded on the Mohs scale from talc at 1 to diamond at 10 — quartz, at 7, scratches glass. Streak (the powder left on a porcelain plate), luster, and cleavage — the tendency to break along flat atomic planes — narrow the options fast: mica peels in sheets, halite breaks into cubes, quartz fractures like glass.',
        },
        {
          kind: 'para',
          text: 'Igneous rocks freeze from magma, and cooling rate writes their texture. Magma that cools slowly underground grows interlocking crystals big enough to see: granite. Lava quenched at the surface is fine-grained basalt or, chilled almost instantly, glassy obsidian — the same chemistry, radically different looks.',
        },
        {
          kind: 'para',
          text: 'Sedimentary rocks form from weathered debris or dissolved material deposited in layers, compacted and cemented: sandstone from beaches and dunes, shale from quiet mud, limestone from shell debris in warm seas. They cover about three-quarters of the continents and hold nearly the whole fossil record plus most oil, gas and groundwater.',
        },
        {
          kind: 'para',
          text: 'Metamorphism transforms rock without melting it. Buried shale is squeezed and baked into slate, then schist, then gneiss; limestone becomes marble; quartz sandstone becomes quartzite. Diamond and graphite are both pure carbon — pressure and temperature, not chemistry, make one a gem and the other pencil lead.',
        },
        {
          kind: 'para',
          text: 'The rock cycle closes the loop. Mountains weather into sediment, sediment buries and cements into rock, deep burial metamorphoses it, and subduction or melting restarts the flow. No rock is permanent; each is a stage, driven by plate tectonics below and sun-powered weathering above.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: name a hand specimen that scratches glass, breaks in smooth conchoidal curves with no flat cleavage planes, and is glassy gray.',
            'Recall: hardness above glass implies Mohs 7 or more; conchoidal fracture with no cleavage is quartz\'s signature.',
            'Apply: confirm with a streak plate — colorless powder — and note the interlocking feldspar crystals around it, pointing to a coarse igneous host.',
            'State the result: the mineral is quartz, sitting in a granite that cooled slowly at depth before erosion exposed it.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Field geologists identify hand specimens with a streak plate, pocket knife and hand lens',
            'Construction picks rock by family: granite countertops, sandstone and limestone buildings, slate roofs',
            'Prospectors use indicator minerals — garnets in kimberlite point toward diamond pipes',
            'Well loggers name sedimentary layers to predict aquifers, salt domes and petroleum traps',
            'Gem labs separate natural stones from synthetics using inclusions and hardness behavior',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Confusing rocks with minerals is the classic slip: granite is a rock made of several minerals, quartz is one mineral. And cooling rate, not chemistry, separates granite from basalt — they are near-chemical twins. Remembering that coal and glass fail the mineral tests also disarms a favorite trick question.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Mineral', def: 'A naturally occurring, inorganic, crystalline solid with a definite chemical composition.' },
            { term: 'Mohs scale', def: 'Hardness ranking from 1 (talc) to 10 (diamond), tested by scratching.' },
            { term: 'Cleavage', def: 'A mineral\'s tendency to break along flat planes of weak atomic bonding.' },
            { term: 'Igneous rock', def: 'Rock solidified from magma or lava; slow cooling makes coarse crystals, fast cooling fine.' },
            { term: 'Sedimentary rock', def: 'Rock formed when deposited sediment is compacted and cemented.' },
            { term: 'Metamorphic rock', def: 'Rock recrystallized in the solid state by heat and pressure.' },
            { term: 'Lithification', def: 'The compaction and cementation that turns loose sediment into rock.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Which of these is NOT a mineral by definition?',
              options: ['Quartz', 'Halite', 'Obsidian', 'Diamond'],
              answer: 2,
              explain: 'Obsidian is a glass — it cooled too fast for atoms to arrange into a crystal structure.',
            },
            {
              q: 'A coarse-grained granite and a fine-grained basalt differ mainly because of:',
              options: ['Chemical composition', 'Cooling rate', 'Their ages', 'The minerals they contain'],
              answer: 1,
              explain: 'Slow underground cooling lets large crystals grow in granite; quick surface quenching leaves basalt fine-grained.',
            },
            {
              q: 'Most oil, gas and groundwater are stored in:',
              options: ['Granite bodies', 'Metamorphic gneiss', 'Porous sedimentary rocks', 'Lava flows'],
              answer: 2,
              explain: 'Sandstone and limestone layers hold the porosity that traps fluids and seals them into reservoirs.',
            },
            {
              q: 'The usual metamorphic progression for buried mudstone (shale) is:',
              options: ['Shale → slate → schist → gneiss', 'Shale → marble → quartzite', 'Shale → basalt → granite', 'Shale → sandstone → limestone'],
              answer: 0,
              explain: 'Rising temperature and pressure first make slate\'s flat cleavage, then coarser mica in schist, then banded gneiss.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'geo-earthquakes-volcanoes',
      title: 'Earthquakes and Volcanoes: When the Crust Moves',
      domain: 'Physical Sciences',
      field: 'Geology & Earth Science',
      branch: 'Dynamic Earth',
      tier: 'intermediate',
      concepts: [
        'Elastic rebound: strain, rupture, release',
        'P-waves and S-waves',
        'Triangulating an epicenter',
        'Magnitude scales and energy',
        'Eruption styles and volcano types',
        'Secondary hazards and preparedness',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Every year the world\'s seismometers record hundreds of thousands of earthquakes, and 50 to 80 volcanoes erupt. Both are surface signs of plate tectonics at work — strain building on a fault, magma forcing a path upward — and both rank among the deadliest natural hazards. Yet they are also statistically the best-behaved: we know almost exactly where they will strike, only not when. This intermediate lesson covers the waves earthquakes radiate, how magnitude is measured and compared, why some volcanoes ooze gently while others detonate catastrophically, and how modern societies monitor both hazards, warn for them, and live alongside them.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Earthquakes kill mainly through building failure, and volcanic disasters through fast-moving flows — both are survivable with engineering, monitoring and drills. Japan\'s and Chile\'s magnitude-9 quakes killed hundreds; unprepared regions lose hundreds of thousands from similar shaking.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Faults lock while plate motion stretches the surrounding rock like a spring. When friction lets go, the rock snaps back toward shape — elastic rebound — radiating energy as seismic waves. Harry Fielding Reid deduced this from fences and roads offset by San Francisco\'s 1906 earthquake; GPS now watches the strain accumulate in real time.',
        },
        {
          kind: 'para',
          text: 'Two body waves carry the shaking. Compressional P-waves travel fastest, about 6 kilometers per second in crust, arriving first. Shear S-waves follow at roughly two-thirds that speed and cannot pass through liquid — their refusal to cross the outer core is how we first learned it is molten.',
        },
        {
          kind: 'para',
          text: 'Each station\'s S-minus-P arrival time gives its distance to the quake but no direction; circles drawn around three stations intersect at the epicenter. The same triangulation, scaled to global networks, now locates events within minutes — the first step of every tsunami warning.',
        },
        {
          kind: 'para',
          text: 'Magnitude measures the energy released at the source. The 1935 Richter scale is logarithmic: each whole unit means ten times the ground motion and about 32 times the energy. Modern moment magnitude keeps the numbers comparable — the largest quake ever recorded was Chile\'s 1960 Valdivia event at magnitude 9.5.',
        },
        {
          kind: 'para',
          text: 'Eruption style follows magma chemistry. Runny basaltic magma escapes easily: Hawaii\'s shield volcanoes ooze rivers of lava. Sticky, gas-rich magma clogs the vent: stratovolcanoes such as Vesuvius and Mount St. Helens explode, and giant caldera systems like Tambora — whose 1815 eruption caused 1816\'s "year without a summer" — can chill the whole planet.',
        },
        {
          kind: 'para',
          text: 'Most casualties are secondary. Shaking topples buildings, liquefies saturated soil and sparks fires; undersea quakes launch tsunamis. Volcanoes kill with pyroclastic flows — searing avalanches near 700 kilometers per hour that buried Pompeii in AD 79 — and lahars, the volcanic mudflows that killed about 23,000 people at Colombia\'s Nevado del Ruiz in 1985.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: how far away an earthquake is when a station records S-waves arriving 30 seconds after the P-waves.',
            'Recall: with P at 6.0 and S at 4.0 kilometers per second, the lag equals distance divided by 12 (d/4 − d/6 = d/12).',
            'Apply: distance = 30 seconds × 12 = 360 kilometers; draw a circle of that radius around the station.',
            'State the result: the epicenter lies on that circle; two more stations fix it at the single point where all three circles intersect.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Early-warning systems race radio alerts ahead of seismic waves to stop trains and open elevator doors',
            'Building codes require ductile steel and base isolators in seismic zones such as Japan, Chile and Turkey',
            'Volcano observatories forecast eruptions from earthquake swarms, gas emissions and ground swelling',
            'Tsunami warning centers locate undersea quakes and run inundation models within minutes',
            'Paleoseismologists trench faults to date prehistoric ruptures and estimate recurrence intervals',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Magnitude is not intensity: magnitude is the energy at the source, intensity (the Mercalli scale) is the shaking at a given place, and one quake has many intensities. "Richter" survives in headlines but moment magnitude replaced it for big quakes. And earthquakes do not cause volcanic eruptions — both usually trace to the same tectonic setting.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Elastic rebound', def: 'The sudden snap of strained rock back to shape along a fault, releasing seismic energy.' },
            { term: 'Epicenter', def: 'The point on the surface directly above the quake\'s underground origin.' },
            { term: 'P-wave', def: 'Fast compressional seismic body wave; first to arrive, travels through solids and liquids.' },
            { term: 'S-wave', def: 'Slower shear body wave; arrives second and cannot travel through liquid.' },
            { term: 'Moment magnitude', def: 'The modern energy scale; each unit up is about 32 times more energy.' },
            { term: 'Pyroclastic flow', def: 'A fast, searing avalanche of hot gas, ash and rock down a volcano\'s flank.' },
            { term: 'Lahar', def: 'A destructive volcanic mudflow formed when ash mixes with meltwater or rain.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'S-waves refuse to cross Earth\'s outer core because:',
              options: ['The core is too hot', 'Shear waves cannot travel through liquid', 'The core absorbs all seismic energy', 'S-waves only travel along the surface'],
              answer: 1,
              explain: 'Liquids have no shear strength, so the S in S-wave (shear) is impossible — which proved the outer core is molten.',
            },
            {
              q: 'A magnitude 7 earthquake releases roughly how much more energy than a magnitude 6?',
              options: ['Twice as much', 'Ten times', 'About 32 times', 'One thousand times'],
              answer: 2,
              explain: 'One magnitude unit is about 10 times the motion but roughly 32 times the energy.',
            },
            {
              q: 'Which volcano most likely produces explosive eruptions?',
              options: ['A shield volcano with runny basaltic magma', 'A stratovolcano with viscous, gas-rich magma', 'A mid-ocean ridge fissure', 'A dormant hot spring'],
              answer: 1,
              explain: 'Trapped gas in sticky magma builds pressure until the volcano blows — the Vesuvius and St. Helens pattern.',
            },
            {
              q: 'The 1985 disaster at Nevado del Ruiz killed ~23,000 people mostly through:',
              options: ['Lava flows', 'Lightning from the ash cloud', 'Lahars (volcanic mudflows)', 'Falling ash'],
              answer: 2,
              explain: 'Melted glacier ice mixed with ash into mudflows that buried the town of Armero within hours.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'geo-deep-time-fossils',
      title: 'Deep Time: Fossils and Dating the Earth',
      domain: 'Physical Sciences',
      field: 'Geology & Earth Science',
      branch: 'Dynamic Earth',
      tier: 'intermediate',
      concepts: [
        'Superposition, horizontality and cross-cutting',
        'Unconformities: the missing pages',
        'How fossils form — and rarely',
        'Radiometric clocks and half-lives',
        'The geologic time scale',
        'Mass extinctions as chapter breaks',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'At a sea cliff in Scotland in 1788, James Hutton saw "no vestige of a beginning, no prospect of an end" in the rocks — the first scientific glimpse of deep time. Earth is 4.54 billion years old, old enough that all of recorded human history is a rounding error. Geologists read that vastness with two complementary tools: relative dating, which sequences events by geometry and fossils, and radiometric dating, which puts actual numbers on the sequence. This intermediate lesson covers both, plus the fossil record and the time scale that names the chapters of Earth\'s story.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Deep time is the frame for evolution, climate history, oil exploration and hazard forecasting alike. Radiometric dating — the same physics used in medical scans — is also the evidence that settles the age of the Earth against every historical guess.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Relative dating rests on plain logic. Sediments settle in horizontal layers, so in an undisturbed stack each layer is younger than the one beneath it (superposition); a fault or an intruding dike must be younger than whatever it cuts (cross-cutting). Niccolò Steno stated these rules in 1669, and they still sequence any outcrop at a glance.',
        },
        {
          kind: 'para',
          text: 'The record has gaps. Where erosion stripped layers away or deposition simply paused, an unconformity hides missing time. At Siccar Point — Hutton\'s own site — gently tilted gray seafloor sediments are truncated and overlaid by flat red sandstone, with tens of millions of years missing between the two.',
        },
        {
          kind: 'para',
          text: 'Fossilization is a lottery with terrible odds. Most organisms decay without trace; hard parts help. The classic modes are permineralization (petrified wood, dinosaur bone), molds and casts, and entrapment in amber. Rare lagerstatte sites such as the 508-million-year-old Burgess Shale preserved even soft tissue, revealing otherwise invisible Cambrian animals.',
        },
        {
          kind: 'para',
          text: 'Radiometric dating turns radioactive decay into a clock. Uranium-238 decays to lead-206 with a half-life of 4.47 billion years, ideal for ancient rocks; potassium-40 to argon-40 (1.25 billion years) dates volcanic ash; carbon-14, with a half-life of 5,730 years, works only on once-living material younger than about 50,000 years. The oldest surviving crystals — zircons from Jack Hills, Australia — are 4.4 billion years old.',
        },
        {
          kind: 'para',
          text: 'Absolute dates stitched the geologic time scale together: eons, eras, periods, epochs. The Precambrian eons swallow about 88 percent of all time; the Cambrian explosion of animal life opens the fossil-rich Phanerozoic 541 million years ago; dinosaurs rule the Mesozoic until the Chicxulub impact 66 million years ago; the Cenozoic is our own age of mammals and ice.',
        },
        {
          kind: 'para',
          text: 'Extinctions punctuate the scale. Of the Big Five, the end-Permian catastrophe 252 million years ago erased roughly 90 percent of marine species — life\'s nearest miss with total defeat — and cleared the stage for dinosaur dominance. Reading time in the record means reading these resets as well as the slow accumulation.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the age of a campfire charcoal sample that retains 25 percent of its original carbon-14.',
            'Recall: each half-life halves the remaining carbon-14, so 25 percent means two half-lives have passed.',
            'Apply: 2 × 5,730 years = 11,460 years before present.',
            'State the result: the charcoal is about 11,500 years old — late Ice Age, consistent with the stone tools found beside it.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Museums sequence exhibits by period, from Cambrian trilobites to Cretaceous Tyrannosaurus',
            'Oil geologists correlate drill cores hundreds of kilometers apart using index fossils',
            'Archaeologists date hearths, bones and cloth with carbon-14 to build human timelines',
            'Potassium-argon dates on volcanic ash anchor the ages of fossil hominins like Lucy',
            'Zircon grains date the oldest rocks to test when continents and oceans first formed',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Carbon-14 cannot date dinosaurs — at 66+ million years old their bones hold essentially none, a fact abused in every "carbon-dated T. rex" headline. Half-life decay is exponential, not linear. And superposition only holds for undisturbed layers: folding or faulting can flip a stack upside down, so geologists always check for overturned sequences.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Superposition', def: 'The rule that in an undisturbed sequence, each layer is younger than the one below it.' },
            { term: 'Cross-cutting', def: 'Principle that a fault or intrusion is younger than the rock it cuts through.' },
            { term: 'Unconformity', def: 'A buried erosion surface representing a gap of missing time in the rock record.' },
            { term: 'Permineralization', def: 'Fossilization in which minerals precipitate into the pores of buried hard parts.' },
            { term: 'Half-life', def: 'The time for half of a radioactive isotope\'s atoms to decay — the tick of the radiometric clock.' },
            { term: 'Index fossil', def: 'A widespread, short-lived species used to correlate the ages of rock layers.' },
            { term: 'Geologic time scale', def: 'The nested eon-era-period-epoch calendar of Earth\'s 4.54-billion-year history.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A bone retains 25 percent of its carbon-14. Its age is about:',
              options: ['5,730 years', '11,460 years', '22,920 years', '57,300 years'],
              answer: 1,
              explain: 'Two half-lives (100 → 50 → 25 percent) at 5,730 years each gives 11,460 years.',
            },
            {
              q: 'Which clock would best date a 100-million-year-old layer of volcanic ash?',
              options: ['Carbon-14', 'Potassium-40 to argon-40', 'A sundial', 'Tree-ring counting'],
              answer: 1,
              explain: 'K-40\'s 1.25-billion-year half-life fits that range; carbon-14 dies out after ~50,000 years.',
            },
            {
              q: 'The Burgess Shale is famous because it preserved:',
              options: ['Only large dinosaur bones', 'Soft-bodied animals from the Cambrian', 'Human artifacts', 'Coal seams'],
              answer: 1,
              explain: 'Rapid burial in low-oxygen mud kept soft tissues intact, giving a rare window on Cambrian life.',
            },
            {
              q: 'Roughly what share of Earth\'s history is Precambrian?',
              options: ['About 12 percent', 'About half', 'About 88 percent', 'About 99 percent'],
              answer: 2,
              explain: 'The Phanerozoic — everything from the Cambrian explosion onward — is only about 541 million of 4.54 billion years.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'met-atmosphere-weather',
      title: 'Why Weather Happens: The Atmosphere at Work',
      domain: 'Physical Sciences',
      field: 'Meteorology',
      branch: 'Weather and Atmosphere',
      tier: 'core',
      concepts: [
        'The layered atmosphere and where weather lives',
        'Pressure differences make wind',
        'Convection and rising air',
        'Humidity and the dew point',
        'Condensation, clouds and fog',
        'Global circulation and the desert belts',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Weather is the atmosphere rearranging heat. Sunlight lands unevenly — tropics versus poles, land versus sea — and the working fluid of air responds: it expands, rises, slides sideways, and dumps its water on the way. Every gust, cloud and downpour you will ever experience traces back to a few governing ideas: pressure, density, convection and the stubborn physics of water vapor. This core Meteorology lesson assembles those ideas into a working picture of why the sky behaves as it does, with one useful number — the lapse rate — doing most of the math.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Weather drives decisions from aviation to agriculture, and its basic vocabulary — pressure, fronts, dew point — is what every forecast assumes you know. The same ideas also explain why storms intensify and why deserts sit where they do.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Nearly all weather lives in the troposphere, the lowest layer, holding about 80 percent of the air and nearly all its water vapor. It is roughly 8 kilometers deep at the poles and 17 at the equator, and it cools with height at about 6.5 degrees Celsius per kilometer — climb a mountain and you walk into the freezer.',
        },
        {
          kind: 'para',
          text: 'Air pressure — about 1,013 hectopascals at sea level, and anything from ~870 in a super-typhoon to ~1,084 in a Siberian high — falls and rises with heating and density. Nature flattens the differences: the pressure-gradient force pushes air from high toward low pressure, and once Earth\'s rotation bends the flow through the Coriolis effect, winds blow along the isobars of a weather map rather than straight across them.',
        },
        {
          kind: 'para',
          text: 'Sunlight warms the ground, the ground warms the air, and warm air — being less dense — rises. Convection is the atmosphere\'s elevator. A rising parcel expands into lower pressure and cools about 10 degrees Celsius per kilometer; sink it back down and it warms the same way. A layer of warm air aloft that blocks this elevator makes a stable, hazy day; release it and afternoon cumulus boil up.',
        },
        {
          kind: 'para',
          text: 'Water vapor is weather\'s fuel. Warm air carries more of it — roughly 7 percent more per degree Celsius of warming, a fact with consequences for downpours in a warmer world. Relative humidity compares what air holds with what it could hold; the dew point — the temperature at which it saturates — measures the moisture itself. A dew point of 20 degrees Celsius feels muggy anywhere on Earth.',
        },
        {
          kind: 'para',
          text: 'Cool air to its dew point and water condenses onto microscopic nuclei — dust, salt, smoke. Clouds are that process made visible, and fog is a cloud with its base on the ground. Crucially, condensation releases latent heat, warming the parcel and boosting its buoyancy — the feedback that lets a small cloud grow into a thunderhead.',
        },
        {
          kind: 'para',
          text: 'Scale the same physics planet-wide and you get the general circulation. Overheated equatorial air rises, rains itself out, dries, and sinks near 30 degrees latitude — the belt where the Sahara, Arabian and Australian deserts cluster. The trade winds, the mid-latitude westerlies and the high-altitude jet streams are all cogs in the same heat engine.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the base height of a cumulus cloud when the surface air is 30 degrees Celsius with a dew point of 18.',
            'Recall: rising unsaturated air cools about 10 degrees per kilometer, and condensation begins when temperature meets the dew point.',
            'Apply: the gap is 30 − 18 = 12 degrees, and at 10 degrees per kilometer that requires 1.2 kilometers of ascent.',
            'State the result: expect flat-bottomed cumulus with bases near 1,200 meters — the altitude where gliders circle and fair-weather clouds live.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Pilots compute cloud base from temperature and dew point before every flight',
            'Meteorologists read isobar spacing on surface maps to gauge wind strength',
            'Building engineers manage indoor dew point to prevent condensation and mold',
            'Farmers watch dew point and pressure trends to time planting, spraying and harvest',
            'City heat planners map afternoon convection to design parks and cooling corridors',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Wind is named for where it comes FROM — a west wind blows from the west toward you. High relative humidity at cold temperatures is not "humid" air: 90 percent humidity at 5 degrees carries less water than 40 percent at 30. And clouds are liquid droplets or ice, not visible vapor — the vapor itself is always invisible.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Troposphere', def: 'The lowest atmospheric layer, holding most air and water vapor, where weather happens.' },
            { term: 'Lapse rate', def: 'How fast temperature falls with height — about 6.5 degrees Celsius per km on average.' },
            { term: 'Pressure-gradient force', def: 'The push from high toward low pressure that starts the wind.' },
            { term: 'Coriolis effect', def: 'The apparent deflection of moving air caused by Earth\'s rotation — right in the Northern Hemisphere.' },
            { term: 'Dew point', def: 'The temperature at which air becomes saturated — an absolute measure of moisture.' },
            { term: 'Condensation nuclei', def: 'Tiny particles on which water vapor condenses to form droplets.' },
            { term: 'General circulation', def: 'The planet-wide pattern of cells and winds that moves heat from tropics toward poles.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Deserts cluster near 30 degrees latitude because:',
              options: ['The ocean there is too cold for rain', 'Dry air sunk from the equatorial circulation returns to the surface there', 'Mountains block every storm track', 'The Coriolis effect cancels rainfall'],
              answer: 1,
              explain: 'Air that rose and rained out at the equator descends, warms and dries near 30 degrees — the subtropical highs.',
            },
            {
              q: 'Surface air is 30 degrees with a dew point of 18. Cumulus bases form near:',
              options: ['180 meters', '1,200 meters', '3,000 meters', '5,500 meters'],
              answer: 1,
              explain: 'The 12-degree spread at 10 degrees per kilometer of dry cooling puts the lifting condensation level at 1.2 km.',
            },
            {
              q: 'Rising air cools primarily because:',
              options: ['It moves away from the Sun', 'It expands as pressure falls with altitude', 'Clouds shade it', 'It mixes with cold air above'],
              answer: 1,
              explain: 'Expansion against lower pressure does the work — the adiabatic cooling that sets the ~10 degrees/km rate.',
            },
            {
              q: 'Which measurement best tells you how muggy the air feels?',
              options: ['Relative humidity', 'Barometric pressure', 'Dew point', 'Wind chill'],
              answer: 2,
              explain: 'Dew point tracks actual moisture; relative humidity swings with temperature even when moisture is unchanged.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'met-storms-forecasting',
      title: 'Storms, Fronts and How Forecasts Are Made',
      domain: 'Physical Sciences',
      field: 'Meteorology',
      branch: 'Weather and Atmosphere',
      tier: 'intermediate',
      concepts: [
        'Air masses and fronts',
        'The mid-latitude cyclone life cycle',
        'Thunderstorms and supercells',
        'Hurricanes: heat engines of the tropics',
        'From observation to forecast model',
        'Chaos and the limits of prediction',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'In 1918 the Norwegian school of meteorologists — Vilhelm Bjerknes and his son Jacob — gave weather its first genuinely scientific working model: battles of air masses along fronts. A century later those same fronts still decorate every weather map, but the forecast itself comes from another world: satellites, radar and supercomputer models that digest millions of observations to simulate the atmosphere days ahead. This intermediate lesson connects the classic picture of storms — fronts, cyclones, supercells, hurricanes — with the modern machinery of numerical weather forecasting and the chaos that sets its limits.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Weather forecasts are among the most valuable public services ever built: agriculture, aviation, energy trading and emergency response all run on them. Knowing how a forecast is made — and why it comes with a probability — turns it from folklore into a decision tool.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'An air mass takes the character of its birthplace: continental polar air is cold and dry, maritime tropical air warm and humid. Where they meet, the boundary — a front — organizes the weather. A cold front, steep and fast, forces moist air up violently: a line of heavy squalls, then clearing. A warm front, sloping roughly 1 in 200, lifts air gently: broad sheets of steady rain for hours.',
        },
        {
          kind: 'para',
          text: 'The mid-latitude cyclone is a wave on the polar front. Over two to five days it deepens, wraps its warm and cold fronts around a falling central pressure, then occludes and dies as it drifts northeast. It is the everyday storm of Europe and North America — the comma shape on every satellite loop.',
        },
        {
          kind: 'para',
          text: 'A thunderstorm needs moisture, instability and a lifting trigger. Ordinary cells die within an hour on their own cool outflow; add wind shear — wind changing speed or direction with height — and the storm tilts, separating updraft from rain, becoming a supercell. Its rotating updraft can then spin up tornadoes, rated EF0 to EF5 on the Enhanced Fujita scale.',
        },
        {
          kind: 'para',
          text: 'A hurricane is not a front but an engine. Over sea water warmer than about 26.5 degrees Celsius, clusters of thunderstorms organize around a calm eye, releasing latent heat that drops the pressure and tightens the winds — categories 1 to 5 on the Saffir-Simpson scale. Cut off the warm water and the engine dies within days over land, which is why water — surge, rain, flooding — usually does the killing, not wind alone.',
        },
        {
          kind: 'para',
          text: 'A forecast starts from a snapshot: tens of thousands of surface stations, ships and aircraft, radiosonde balloons launched twice daily worldwide, radar, and satellites watching the whole planet. Data assimilation folds those millions of numbers into a simulated atmosphere, and the model — fluid dynamics plus radiation and cloud physics — marches it forward in steps of minutes.',
        },
        {
          kind: 'para',
          text: 'Edward Lorenz discovered in 1963 that tiny differences in starting conditions grow exponentially — the butterfly effect — so no single run can be trusted far out. Forecast centers therefore run ensembles of 20 to 50 perturbed runs; the spread between them measures confidence. Skill keeps climbing — today\'s 5-day hurricane track error is about a third of its 1990s value — but roughly two weeks remains the ceiling for any specific forecast.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the Saffir-Simpson category of a tropical cyclone with sustained winds of 145 miles per hour, and its fate at landfall.',
            'Recall: the scale runs Cat 1 (74-95 mph), 2 (96-110), 3 (111-129), 4 (130-156), 5 (157+); hurricanes feed on warm ocean water.',
            'Apply: 145 mph falls inside the 130-156 band — category 4. Crossing the coast cuts the fuel supply and adds friction.',
            'State the result: winds decay quickly after landfall, but category-4 storm surge and inland rainfall remain the deadliest hazards — evacuation decisions are made for water, not wind.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Phone-app rain percentages are read straight off ensemble model output and its spread',
            'Airlines reroute around forecast cyclones and jet-stream headwinds to save fuel',
            'Emergency managers order evacuations days ahead using cone-of-uncertainty graphics',
            'Doppler radar detects rotation inside supercells, sounding tornado sirens with minutes of lead time',
            'Energy traders price electricity and natural gas from ensemble temperature forecasts',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Do not confuse weather prediction with climate projection: weather is an initial-value problem valid for days, climate a boundary-value question of decades and averages — a separate StudyVerse lesson covers climate models. Also, the forecast cone shows where the storm center may go, not the storm\'s width; and "30 percent chance of rain" means three in ten equivalent forecasts produce rain at your spot.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Front', def: 'The boundary between two air masses — cold fronts bring violent short weather, warm fronts long gentle rain.' },
            { term: 'Occlusion', def: 'The late stage of a cyclone where the cold front catches the warm front.' },
            { term: 'Supercell', def: 'A long-lived thunderstorm with a rotating updraft, the parent of most strong tornadoes.' },
            { term: 'Storm surge', def: 'Seawater piled ashore by a hurricane\'s winds and low pressure — often the deadliest hazard.' },
            { term: 'Ensemble forecast', def: 'Many parallel model runs with perturbed starting conditions; spread indicates uncertainty.' },
            { term: 'Data assimilation', def: 'Blending millions of observations into the model\'s starting state.' },
            { term: 'Butterfly effect', def: 'Lorenz\'s finding that tiny initial differences grow exponentially, limiting deterministic prediction.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A fast-moving cold front typically brings:',
              options: ['Hours of gentle drizzle', 'A brief line of violent storms, then clearing', 'Clear skies and light winds', 'Fog'],
              answer: 1,
              explain: 'The steep frontal surface slams moist air upward in a narrow band — squalls first, cool clear air behind.',
            },
            {
              q: 'Hurricanes weaken over land mainly because:',
              options: ['Friction from forests', 'The warm-ocean energy source is cut off', 'They run out of air', 'Mountain ranges reflect them'],
              answer: 1,
              explain: 'The engine runs on latent heat from warm seawater; without it, the storm spins down within days.',
            },
            {
              q: 'Forecast centers run ensemble models mainly to:',
              options: ['Make the forecast run faster', 'Quantify uncertainty from chaotic sensitivity to starting conditions', 'Average out instrument errors only', 'Satisfy television graphics'],
              answer: 1,
              explain: 'Since Lorenz, we know small starting errors grow — the ensemble spread is the honesty in the forecast.',
            },
            {
              q: 'Since the 1990s, 5-day hurricane track forecasts have become roughly:',
              options: ['Three times more accurate', 'Unchanged', 'Twice as uncertain', 'Only possible for category 5 storms'],
              answer: 0,
              explain: 'Better models, satellites and assimilation cut the 5-day track error to about a third of its 1990s value.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'astro-solar-system-tour',
      title: 'Touring the Solar System: Planets, Moons and Small Worlds',
      domain: 'Physical Sciences',
      field: 'Astronomy & Space Science',
      branch: 'Exploring the Cosmos',
      tier: 'core',
      concepts: [
        'Born from a collapsing cloud',
        'The terrestrial planets',
        'Giants of gas and ice',
        'Moons that matter',
        'Asteroids: leftovers that never grew',
        'Comets and the distant reservoirs',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'The solar system is one star, eight planets, hundreds of moons and countless smaller bodies — everything gravitationally bound to the Sun. It condensed from a cloud of gas and dust 4.6 billion years ago, and its architecture still tells that story: rocky survivors of the inner heat close in, gas and ice giants beyond the frost line where ices could persist, and frozen leftovers scattered in belts beyond Neptune. This core lesson tours the major stops — from Mercury\'s airless furnace to the Kuiper Belt — and the small worlds that still deliver surprises (and occasional impacts) today.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'The planets are the only worlds humanity can visit with spacecraft, so they are the laboratory where we test every general idea about planets — formation, atmospheres, oceans and habitability — before aiming telescopes at other stars.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'A fragment of a molecular cloud collapsed and flattened into a spinning disk; the Sun ignited at the center while dust collided and stuck into planetesimals, then planets. Near the young Sun it was too hot for ice, so the inner planets stayed small and dense. Beyond the frost line ices joined the recipe and worlds grew huge — Jupiter ended up two and a half times more massive than all the other planets combined.',
        },
        {
          kind: 'para',
          text: 'The four terrestrial planets are variations on one theme. Mercury swings from furnace to deep freeze with no atmosphere worth the name. Venus hides a runaway greenhouse under sulfuric-acid clouds — 465 degrees Celsius at the surface, hot enough to melt lead. Earth keeps liquid water and life. Mars preserves the record of a wetter youth: Olympus Mons rises 22 kilometers, and dry riverbeds lace its ancient crust.',
        },
        {
          kind: 'para',
          text: 'The giants split into gas (Jupiter, Saturn) and ice (Uranus, Neptune). Jupiter\'s Great Red Spot is a storm wider than Earth that has raged for centuries. Saturn\'s rings are almost pure water ice — hundreds of thousands of kilometers across yet in places just tens of meters thick. Uranus rolls on its side, tilted 98 degrees; Neptune hosts the fastest winds measured on any planet, above 2,000 kilometers per hour.',
        },
        {
          kind: 'para',
          text: 'Moons steal the show. Among Jupiter\'s four Galileans sit volcanic Io, the most active body in the solar system, and ice-crusted Europa, hiding a saltwater ocean holding perhaps twice Earth\'s water. Saturn\'s Titan has rain, rivers and seas — of liquid methane — beneath a thick nitrogen sky. Our own Moon likely formed from the debris of a Mars-sized body striking the young Earth.',
        },
        {
          kind: 'para',
          text: 'Between Mars and Jupiter, millions of asteroids circle in the belt — leftovers that Jupiter\'s gravity never let assemble into a planet. Their combined mass is less than the Moon\'s; dwarf planet Ceres is the largest. Most meteorites are belt fragments delivered to Earth: free samples of the solar system\'s earliest chemistry.',
        },
        {
          kind: 'para',
          text: 'Beyond Neptune, the Kuiper Belt holds icy worlds including dwarf planet Pluto, and the far spherical Oort Cloud supplies long-period comets. Warmed by the Sun, a comet grows a coma and tails that always point away from it, pushed by radiation pressure and the solar wind. Halley\'s Comet returns about every 76 years; its next visit is 2061.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a mental scale model with the Sun as a 24-centimeter basketball (scale: 1 cm ≈ 58,000 km).',
            'Recall: Earth is 12,742 km across and orbits 149.6 million km out; Jupiter is 142,000 km across; Neptune orbits at 4.5 billion km.',
            'Apply: Earth shrinks to a 2.2-millimeter grain orbiting 26 meters away; Jupiter becomes a 2.4-cm marble at 135 meters; Neptune a 0.9-cm bead at about 780 meters.',
            'State the result: across a walk of nearly a kilometer, the only basketball-sized object is the Sun and the planets are dust — the solar system is overwhelmingly empty space.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Mission designers use gravity assists past Venus or Jupiter to fling probes to the outer planets',
            'Planetary defense teams catalogue near-Earth asteroids and test deflection, as DART did in 2022',
            'Sample-return missions like OSIRIS-REx hand laboratories pristine asteroid gravel',
            'Amateur astronomers track the Galilean moons and Saturn\'s rings with small telescopes',
            'Meteor-shower calendars are built from Earth\'s crossings of old comet debris streams',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The asteroid belt is not a crowded hazard zone — spacecraft pass through it without evasive action; average separations are millions of kilometers. Comet tails point away from the Sun regardless of the comet\'s direction of travel. And the "frost line" explains planet size with temperature, not the Sun\'s gravity somehow running out.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Solar nebula', def: 'The rotating disk of gas and dust from which the Sun and planets condensed 4.6 billion years ago.' },
            { term: 'Frost line', def: 'The distance from the young Sun beyond which ices could survive, letting planets grow giant.' },
            { term: 'Terrestrial planet', def: 'A small, dense, rocky world — Mercury, Venus, Earth or Mars.' },
            { term: 'Galilean moons', def: 'Jupiter\'s four large moons, spotted by Galileo in 1610: Io, Europa, Ganymede, Callisto.' },
            { term: 'Asteroid belt', def: 'The ring of rocky leftovers between Mars and Jupiter that never formed a planet.' },
            { term: 'Kuiper Belt', def: 'The disk of icy bodies beyond Neptune, home of Pluto and most short-period comets.' },
            { term: 'Oort Cloud', def: 'The distant spherical shell of icy bodies supplying long-period comets.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The giant planets grew so large mainly because:',
              options: ['They are closer to the Sun', 'Beyond the frost line, ices and gas were available for building', 'They are the oldest planets', 'The Sun pushed rock inward to them'],
              answer: 1,
              explain: 'Cold conditions let ices condense, giving the young giants solid cores massive enough to capture gas directly.',
            },
            {
              q: 'Europa is a prime astrobiology target because:',
              options: ['It has oxygen-rich air', 'A salty ocean likely lies beneath its ice shell', 'Its surface is warm', 'It orbits inside the Sun\'s habitable zone for planets'],
              answer: 1,
              explain: 'Tidal heating keeps a global liquid ocean active under the ice — more liquid water than all Earth\'s oceans.',
            },
            {
              q: 'The asteroid belt never formed a planet largely because:',
              options: ['The asteroids are too light', 'Jupiter\'s gravity stirred the region, keeping collision speeds destructive', 'The Sun evaporated it', 'A planet formed there and exploded'],
              answer: 1,
              explain: 'Resonances with Jupiter pump up relative velocities, so accretion never outpaced fragmentation.',
            },
            {
              q: 'A comet\'s tail always points:',
              options: ['Behind the comet, like an exhaust trail', 'Toward the Sun', 'Away from the Sun', 'Along the comet\'s orbit'],
              answer: 2,
              explain: 'Radiation pressure and solar wind push the tail outward — it can even lead the comet when outbound.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'astro-exoplanets',
      title: 'Exoplanets: Finding Worlds Around Other Stars',
      domain: 'Physical Sciences',
      field: 'Astronomy & Space Science',
      branch: 'Exploring the Cosmos',
      tier: 'intermediate',
      concepts: [
        'Why planets vanish in the glare',
        'The radial-velocity wobble',
        'The transit method and its light dips',
        'Kepler, TESS and the harvest',
        'Weighing planets and sniffing atmospheres',
        'The habitable zone',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'For most of history, every planet anyone knew was one of five wandering lights in our own sky. Then in 1995 Michel Mayor and Didier Queloz found 51 Pegasi b — a Jupiter-mass world skimming its star every four days — and astronomy changed overnight; the pair shared the 2019 Nobel Prize in Physics. Thousands of confirmed exoplanets later, we know the solar system is one design among many: super-Earths, hot Jupiters, lava worlds, planets orbiting two suns. This intermediate lesson covers how these invisible worlds are detected, what can be measured from hundreds of light-years away, and where the search for another Earth now stands.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Counting planets answers questions humans have asked since antiquity — are planets common? Is our system typical? So far the answer is that small planets vastly outnumber giants, and systems unlike ours are everywhere.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Seeing a planet beside its star is like spotting a firefly beside a stadium floodlight: in visible light a Sun-like star outshines an Earth twin by about ten billion to one. So nearly every detection is indirect — astronomers watch what the planet does to its star, not the planet itself.',
        },
        {
          kind: 'para',
          text: 'Gravity is mutual. A planet swings its star in a small circle, and the star\'s to-and-fro shows as a rhythmic Doppler shift of its spectral lines — blueshifted approaching, redshifted receding. The amplitudes are tiny: the Sun wobbles at about 12 meters per second under Jupiter\'s pull, walking pace. Radial velocity yields a planet\'s minimum mass, because the orbit\'s tilt is usually unknown.',
        },
        {
          kind: 'para',
          text: 'If the orbit is aligned edge-on, the planet crosses the star\'s face and blocks a thin slice of light. An Earth-sized planet dims a Sun-like star by about 0.008 percent — a Jupiter-sized one by about 1 percent — which a modest telescope can catch. Transits deliver the planet\'s radius from the dip\'s depth and its orbital period from the clockwork repeats.',
        },
        {
          kind: 'para',
          text: 'Space telescopes industrialized the hunt. Kepler stared at one patch of 150,000 stars for four years and confirmed over 2,500 planets, revealing that small worlds dominate. TESS now scans the entire sky for bright, nearby transiting systems, while the record-holder TRAPPIST-1 — seven Earth-sized planets around one red dwarf 40 light-years away — was found from the ground and beckons for follow-up.',
        },
        {
          kind: 'para',
          text: 'Combining radial velocity (mass) with transit (radius) gives density — rock, water world or gas. Starlight filtering through a transiting planet\'s atmosphere imprints molecular fingerprints: the James Webb Space Telescope has read carbon dioxide and water vapor this way. The prize target is oxygen plus methane together, a disequilibrium that on Earth only life maintains — after every non-living false positive is ruled out.',
        },
        {
          kind: 'para',
          text: 'The habitable zone is the orbital band where a planet\'s surface temperature allows liquid water — closer in around cool red dwarfs, farther out around hot stars. It is a first filter, not a verdict: Mars sits at our Sun\'s outer edge and Venus just inside it, and their atmospheres decided everything.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the size of a planet that dims its star by exactly 1 percent.',
            'Recall: transit depth equals the squared ratio of areas — (Rp/Rstar)^2.',
            'Apply: 0.01 means Rp/Rstar = 0.1, so around a star with the Sun\'s 696,000-km radius the planet is about 69,600 km in radius.',
            'State the result: that is essentially Jupiter\'s radius (71,500 km) — a 1 percent dip around a Sun-like star means a Jupiter-class world.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Kepler\'s statistics now anchor estimates that most stars host at least one small planet',
            'Extreme-precision spectrographs such as ESPRESSO chase Earth-mass wobbles of nearby stars',
            'JWST transmission spectra sample exoplanet air for water, CO2 and methane',
            'Microlensing surveys tally cold, far-flung planets that transits and wobbles miss',
            'Coronagraph-equipped future telescopes aim to image Earth twins directly',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Radial velocity gives only a MINIMUM mass — a face-on orbit hides the true wobble, so reported "Jupiter-mass" planets may be heavier. Most planets never transit their star from our viewpoint, so surveys are biased toward lucky alignments. And "Earth-sized" in a headline means radius only; "Earth-like" claims need atmosphere and temperature evidence that may never come.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Exoplanet', def: 'A planet orbiting a star other than the Sun; over 5,000 are now confirmed.' },
            { term: 'Radial velocity', def: 'Detecting a planet by the periodic Doppler wobble it induces in its star\'s light.' },
            { term: 'Transit', def: 'A planet crossing its star\'s face, briefly dimming the starlight by a measurable fraction.' },
            { term: 'Light curve', def: 'A plot of brightness over time; transits appear as periodic shallow dips.' },
            { term: 'Transmission spectroscopy', def: 'Reading the gases in a transiting planet\'s atmosphere from starlight filtered through it.' },
            { term: 'Habitable zone', def: 'The orbital range around a star where surface liquid water is possible.' },
            { term: 'Hot Jupiter', def: 'A giant planet orbiting scorchingly close to its star, like 51 Pegasi b with its four-day year.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Exoplanet detections are mostly indirect because:',
              options: ['Planets emit no radio waves', 'A star outshines an Earth-like planet by about ten billion to one in visible light', 'Planets move too fast', 'Stars block the view'],
              answer: 1,
              explain: 'The glare problem makes direct imaging of mature Earth twins beyond current telescopes, so we watch the star instead.',
            },
            {
              q: 'The depth of a transit dip mainly reveals the planet\'s:',
              options: ['Mass', 'Radius', 'Temperature', 'Age'],
              answer: 1,
              explain: 'Depth is the area ratio (Rp/Rstar) squared — a geometry problem, independent of the planet\'s mass.',
            },
            {
              q: 'Combining radial-velocity mass with transit radius yields:',
              options: ['The planet\'s density', 'Its magnetic field', 'Its moons', 'Its surface gravity exactly'],
              answer: 0,
              explain: 'Mass over volume tells rock from water world from puffy gas — the single most diagnostic number.',
            },
            {
              q: 'The habitable zone is best described as:',
              options: ['The region where planets definitely have life', 'The orbital band where liquid water could persist on a surface', 'The zone free of asteroids', 'The region where planets keep atmospheres'],
              answer: 1,
              explain: 'It is a temperature filter set by the star\'s brightness and the orbit — Venus and Mars bracket our own.',
            },
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'astro-astrobiology',
      title: 'Are We Alone? The New Science of Astrobiology',
      domain: 'Physical Sciences',
      field: 'Astronomy & Space Science',
      branch: 'Exploring the Cosmos',
      tier: 'advanced',
      concepts: [
        'The recipe: water, energy and CHNOPS',
        'Extremophiles move the goalposts',
        'Where to look in the solar system',
        'Biosignatures and their traps',
        'The Drake equation',
        'SETI and technosignatures',
      ],
      words: 0,
      readMins: 2,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Astrobiology is the only science whose central question is asked by everyone: are we alone? It borrows from geology, chemistry, biology and astronomy to ask where life could exist, how to recognize it, and how common it might be. The field has matured from philosophical speculation into laboratory and mission work — microbes thriving in acid and boiling water, oceans under ice confirmed by spacecraft, and telescopes beginning to sniff the air of distant planets. This advanced lesson tours the requirements for life, the promising real estate, the evidence scientists would accept, and the famous equation that organizes the odds.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'The answer recalibrates our place in the universe: a galaxy teeming with life and a galaxy with none are both profound. Missions already funded — Mars sample return, Europa Clipper, JWST — will sharpen the question within this generation.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Life as we know it needs three things: liquid water as a solvent, an energy source — sunlight or chemical — and the CHNOPS elements (carbon, hydrogen, nitrogen, oxygen, phosphorus, sulfur). Carbon\'s talent for building chains and rings makes it the backbone of every known biochemistry. Wherever all three requirements appear, astrobiologists look twice.',
        },
        {
          kind: 'para',
          text: 'Extremophiles keep lowering the floor. Bacteria thrive in Yellowstone\'s near-boiling springs — one, Thermus aquaticus, donated the heat-proof enzyme that makes PCR testing possible. Deinococcus radiodurans shrugs off radiation thousands of times a lethal human dose, and microbes live kilometers down in rock, eating hydrogen. If life endures boiling acid and darkness, then underground oceans need no sunny surface at all.',
        },
        {
          kind: 'para',
          text: 'Four solar-system addresses lead the list. Mars had rivers and lakes 3.5 billion years ago, and Perseverance is caching samples from Jezero Crater\'s ancient delta. Europa\'s cracked ice shell covers a salty ocean with more water than all Earth\'s seas. Tiny Enceladus fires geysers of its ocean into space, where the Cassini probe tasted salts and organic molecules. Titan, with methane rain and rivers, hosts carbon chemistry that may echo the young Earth.',
        },
        {
          kind: 'para',
          text: 'On a living planet, metabolism maintains chemical disequilibrium: Earth\'s air holds both oxygen and methane, which should destroy each other — something keeps refilling them. Oxygen alone is a trap, because starlight can build it abiotically. That burden of proof is why no claim, including the contested 2020 phosphine detection on Venus, has yet survived as confirmed life.',
        },
        {
          kind: 'para',
          text: 'In 1961 Frank Drake wrote an equation to organize one meeting agenda: multiply the galaxy\'s star-formation rate by the fractions of stars with planets, planets that are habitable, habitable planets where life arises, life that turns intelligent, intelligence that broadcasts, and the lifetime of communicating civilizations. Its first factors are now measured; the rest remain honest guesses, so the answer spans from "we are alone" to "the galaxy is busy."',
        },
        {
          kind: 'para',
          text: 'SETI searches that equation\'s last factors directly, hunting technosignatures — narrowband radio or laser pulses that nature cannot make. Since Drake\'s first scan in 1960 the standouts include the 72-second "Wow!" signal of 1977, never repeated; today the Breakthrough Listen program surveys a million nearby stars. Sixty years of near-silence is itself data, sharpening Enrico Fermi\'s famous paradox: where is everybody?',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a plausible Drake-equation estimate of broadcasting civilizations in the Milky Way.',
            'Recall: N = R* × fp × ne × fl × fi × fc × L — star birth rate, times the fractions producing planets, habitable worlds, life, intelligence and radio, times the broadcast lifetime in years.',
            'Apply: try R* = 2 stars per year, fp = 1, ne = 0.4, fl = 0.1, fi = 0.1, fc = 0.1, L = 10,000: N = 2 × 0.4 × 0.1 × 0.1 × 0.1 × 10,000 = 8.',
            'State the result: about eight civilizations transmitting now — but raise fl to 1 and L to a million years and N approaches 100,000; the equation\'s real power is exposing what we do not yet know.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Europa Clipper and proposed Enceladus missions will fly through ocean-world plumes for organics',
            'JWST observes temperate planets around red dwarfs, hunting oxygen-methane disequilibrium',
            'Planetary protection rules sterilize spacecraft so Earth microbes cannot contaminate the search',
            'Deep-biosphere drilling on Earth sets the energy floor below which we stop calling things alive',
            'Citizen-science projects such as SETI@home sifted radio data for candidate technosignatures',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: '"Follow the water" is a heuristic, not a law — Titan\'s methane chemistry is taken seriously precisely because it might be different. A single "biosignature" gas is never enough; abiotic photochemistry forges false positives on exoplanets. The Drake equation is a framework for our ignorance, not a calculator, and 60 years of SETI silence rules out almost nothing — the searched fraction of parameter space is minuscule.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Astrobiology', def: 'The study of the origin, evolution, distribution and future of life in the universe.' },
            { term: 'CHNOPS', def: 'Carbon, hydrogen, nitrogen, oxygen, phosphorus, sulfur — the bulk elements of known life.' },
            { term: 'Extremophile', def: 'An organism thriving in conditions lethal to most life: boiling acid, radiation, deep rock.' },
            { term: 'Biosignature', def: 'A substance or pattern — like oxygen with methane — that living processes best explain.' },
            { term: 'Technosignature', def: 'Evidence of technology, such as narrowband radio signals, rather than biology.' },
            { term: 'Drake equation', def: 'The factor chain estimating the number of communicating civilizations in the galaxy.' },
            { term: 'Fermi paradox', def: 'The tension between the galaxy\'s age and the absence of any detected visitors or signals.' },
          ],
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Why is oxygen alone a weak biosignature on an exoplanet?',
              options: ['Oxygen is too rare to detect', 'Starlight-driven photochemistry can produce it without life', 'Only animals make oxygen', 'Oxygen escapes to space instantly'],
              answer: 1,
              explain: 'Known abiotic routes — UV splitting of CO2, for example — can oxygenate an atmosphere, so context is required.',
            },
            {
              q: 'Cassini\'s flythroughs of Enceladus plumes found:',
              options: ['Only water vapor', 'Salts and organic molecules from a subsurface ocean', 'Confirmed bacteria', 'Magnetic anomalies only'],
              answer: 1,
              explain: 'The geysers carry ocean chemistry into space — salts, silica, organics — making Enceladus a prime habitability target.',
            },
            {
              q: 'The Drake equation is best used as:',
              options: ['A precise predictor of alien counts', 'A framework organizing what we know and do not know', 'A telescope scheduling tool', 'Proof that civilizations are rare'],
              answer: 1,
              explain: 'Its early factors are measured, its later ones guessed — it structures the debate rather than settling it.',
            },
            {
              q: 'The "Wow!" signal of 1977 is famous for being:',
              options: ['The first confirmed alien broadcast', 'A 72-second strong, narrowband radio burst never detected again', 'A message decoded in 1990', 'A hoax admitted by its discoverer'],
              answer: 1,
              explain: 'Strong, narrow and never repeated — tantalizing but unconfirmed, the canonical SETI near-miss.',
            },
          ],
        },
      ],
    },
  ],
}
