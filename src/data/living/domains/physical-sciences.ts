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
  ],
}
