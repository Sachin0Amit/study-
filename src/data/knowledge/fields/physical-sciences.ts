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
  ],
}
