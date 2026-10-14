import type { SectionContent } from '../library'

// ============================================================
// Halliday, Resnick & Walker — Fundamentals of Physics 11e
// Extended, Chapter 10: Rotation (HRW pp. 257–293). Rotational
// kinematics, linear-angular links, rotational kinetic energy
// and inertia, parallel-axis theorem, torque, Newton's second
// law for rotation, and rotational work-energy.
// ============================================================

export const hallCh10Content: SectionContent[] = [
  // ------------------------------------------------------ 10.1
  {
    sectionId: 'hall-ch10-s1',
    readingTime: 6,
    intro: "A spinning rigid body cannot be tracked by following every point — but it does not need to be. One number, the angular position, tells you where every point is; its derivatives describe every point's motion. This section defines the angular variables θ, ω and α that describe rotation, and fixes the sign conventions and the radian conversions that everything later depends on.",
    objectives: [
      "Define angular position in radians and angular displacement with its sign convention",
      "Define angular velocity and angular acceleration as time derivatives, and convert between rad/s, rev and degrees",
      "Explain why every point of a rigid body shares the same ω and α but not the same linear speed",
    ],
    concepts: [
      {
        term: 'Angular position',
        kind: 'definition',
        statement: "For a body rotating about a fixed axis, pick a reference line fixed in the body and a fixed reference direction. The **angular position** $\\theta$ is the angle between them: $$\\theta = \\frac{s}{r}$$ where $s$ is the arc length traced by a point at radius $r$. The radian is the natural unit: $1\\ \\text{rev} = 2\\pi\\ \\text{rad} = 360^\\circ$, and radians are dimensionless.",
        detail: "Convention: looking along the axis toward the body, counterclockwise rotation corresponds to increasing $\\theta$. Because it is a ratio of lengths, the radian carries no units — which is exactly why it slips silently through the linear-angular relations of Section 10.3.",
      },
      {
        term: 'Angular velocity',
        kind: 'definition',
        statement: "The **angular velocity** is the rate of change of angular position: $$\\omega = \\frac{d\\theta}{dt},$$ in rad/s (positive for counterclockwise). Practical rotations are quoted in rev/min: $1\\ \\text{rev/min} = \\frac{2\\pi}{60}\\ \\text{rad/s} \\approx 0.1047\\ \\text{rad/s}$.",
        detail: "A ceiling fan at 300 rev/min spins at $31.4$ rad/s; the minute hand of a clock at $-1.05\\times10^{-3}$ rad/s (negative: clockwise). Every point of the body shares the same $\\omega$, whatever its distance from the axis — the defining feature of rigid rotation.",
      },
      {
        term: 'Angular acceleration',
        kind: 'definition',
        statement: "The **angular acceleration** is $$\\alpha = \\frac{d\\omega}{dt},$$ in rad/s². A rigid body speeding up from rest to $\\omega = 12$ rad/s in 4.0 s has $\\alpha = 3.0\\ \\text{rad/s}^2$ — every point, rim or hub, shares this value.",
        detail: "The vector character of $\\vec\\omega$ and $\\vec\\alpha$ (directions along the axis by the right-hand rule) becomes essential in Chapter 11; for a fixed axis, signs carry all the needed information, with counterclockwise positive.",
      },
      {
        term: 'One body, one set of angular variables',
        kind: 'insight',
        statement: "For a rigid body rotating about a fixed axis, $\\theta$, $\\omega$ and $\\alpha$ describe the **whole body**: a point 5 cm from the axis and a point 50 cm from it have identical angular variables — but linear speeds and accelerations that differ, in proportion to radius.",
        detail: "This division of labor is why rotation is worth its own calculus: three numbers $\\theta(t), \\omega(t), \\alpha(t)$ encode the trajectories of every point of an arbitrarily complicated object.",
      },
      {
        term: "Rotational Variables: solution protocol",
        kind: "method",
        statement: "**Solve Rotational Variables problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rotation about a fixed axis; the working equation is $\\omega = d\\theta/dt$, $v = \\omega r$, $a_c = \\omega^2r$, $K_{\\text{rot}} = \\tfrac12I\\omega^2$, $\\tau = rF\\sin\\phi = I\\alpha$; every substitution must carry its units so the final unit ($\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere); rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.",
      },
    ],
    examples: [
      {
        title: "From revolutions to radians to arc length",
        problem: "A wheel of radius 0.30 m rotates through 2.5 revolutions. Through what angle does it turn, and how far does a point on the rim travel?",
        steps: [
          { label: 'Convert the angle', text: "$\\theta = 2.5\\ \\text{rev} \\times 2\\pi\\ \\text{rad/rev} = 5\\pi = 15.7$ rad." },
          { label: 'Arc length', text: "$s = \\theta r = (15.7)(0.30) = 4.7$ m along the rim." },
          { label: 'Note the structure', text: "A point at half the radius traces half the arc, but the same 15.7 rad — angle belongs to the body, arc length to the point." },
        ],
        result: "$\\theta = 15.7$ rad; rim point travels 4.7 m.",
      },
      {
        title: "Converting a spin rate",
        problem: "A laboratory centrifuge specification reads 1200 rev/min. Express the angular velocity in rad/s, and find the period of one rotation.",
        steps: [
          { label: 'Convert', text: "$\\omega = 1200\\ \\frac{\\text{rev}}{\\text{min}} \\times \\frac{2\\pi\\ \\text{rad}}{1\\ \\text{rev}} \\times \\frac{1\\ \\text{min}}{60\\ \\text{s}} = 125.7\\ \\text{rad/s}$." },
          { label: 'Period', text: "$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{125.7} = 0.050$ s — twenty revolutions per second." },
          { label: 'Check by counting', text: "$1200\\ \\text{rev}/60\\ \\text{s} = 20$ rev/s and $20 \\times 2\\pi = 125.7$ rad/s. Consistent." },
        ],
        result: "$\\omega = 1.26\\times10^{2}$ rad/s, $T = 50$ ms.",
      },
    ],
    keyTakeaways: [
      "Angular position $\\theta = s/r$ in radians; counterclockwise is positive when viewed along the axis toward the body.",
      "Angular velocity $\\omega = d\\theta/dt$ and angular acceleration $\\alpha = d\\omega/dt$; convert rev/min to rad/s with $2\\pi/60$.",
      "All points of a rigid body share the same $\\theta$, $\\omega$ and $\\alpha$; their linear speeds and accelerations differ in proportion to radius.",
    ],
    quiz: [
      {
        q: "A wheel turns through 3.0 revolutions. In radians this is:",
        options: ['3.0 rad', '6π rad ≈ 18.8 rad', '360 rad', '540° expressed as π rad'],
        answer: 1,
        explanation: "Each revolution is $2\\pi$ radians, so $3.0 \\times 2\\pi = 6\\pi \\approx 18.8$ rad. (Option 4 is nonsense phrasing — 540 degrees equals $3\\pi$ rad, not the required 3 revolutions.)",
      },
      {
        q: "Which quantity is NOT shared by all points of a rigid body rotating about a fixed axis?",
        options: ['angular position θ', 'angular velocity ω', 'angular acceleration α', 'linear speed v'],
        answer: 3,
        explanation: "Linear speed grows with radius ($v = \\omega r$), so a rim point outruns a hub point even though both sweep the same angle per second.",
      },
      {
        q: "A wheel spins clockwise (as viewed by you) and is slowing down. Taking counterclockwise as positive, its angular acceleration is:",
        options: [
          'negative, because the rotation is clockwise',
          'positive, because the wheel is slowing',
          'zero, since it is still spinning',
          'impossible to sign without knowing the radius',
        ],
        answer: 1,
        explanation: "Clockwise means $\\omega < 0$; slowing down means $\\omega$ is becoming less negative, so $\\alpha = d\\omega/dt > 0$. Angular acceleration points opposite to angular velocity whenever a spin is dying.",
      },
      {
        q: "A DVD spins at 7.5 rad/s. Its period of rotation is about:",
        options: ['0.12 s', '0.84 s', '1.2 s', '7.5 s'],
        answer: 1,
        explanation: "$T = 2\\pi/\\omega = 6.28/7.5 = 0.84$ s — about 1.2 revolutions per second, a slow-motion DVD but a fine quiz question.",
      },
    ],
  },

  // ------------------------------------------------------ 10.2
  {
    sectionId: 'hall-ch10-s2',
    readingTime: 6,
    intro: "Constant angular acceleration is the rotational twin of Chapter 2's constant-acceleration kinematics — the same four equations, every symbol translated. Learn the dictionary once (x → θ, v → ω, a → α) and every straight-line kinematic technique you own transfers to spinning machinery.",
    objectives: [
      "Write the four constant-angular-acceleration equations and the condition for their validity",
      "Solve spin-up and spin-down problems with consistent units of radians and seconds",
      "Convert angular results into revolutions for practical reporting",
    ],
    concepts: [
      {
        term: 'The four rotational equations',
        kind: 'theorem',
        statement: "For constant angular acceleration $\\alpha$ (and only then), $$\\omega = \\omega_0 + \\alpha t, \\qquad \\theta = \\omega_0 t + \\tfrac12 \\alpha t^2,$$ $$\\omega^2 = \\omega_0^2 + 2\\alpha\\theta, \\qquad \\theta = \\tfrac12(\\omega_0 + \\omega)t.$$ Each is the term-by-term translation of its linear counterpart.",
        detail: "Derivation is identical to Chapter 2: integrate $d\\omega = \\alpha\\,dt$ and $d\\theta = \\omega\\,dt$ with $\\alpha$ constant. Units discipline: $\\omega$ in rad/s, $\\alpha$ in rad/s², $t$ in s — radians cancel, so $\\theta$ may be reported in rev only after the calculation is done.",
      },
      {
        term: 'The linear-rotational dictionary',
        kind: 'method',
        statement: "| linear | rotational | | --- | --- | | $x$ | $\\theta$ | | $v$ | $\\omega$ | | $a$ | $\\alpha$ | | $v = v_0 + at$ | $\\omega = \\omega_0 + \\alpha t$ | Every kinematics trick — stacking equations, eliminating variables, graph reading — translates.",
        detail: "The dictionary is safe because the angular variables obey the same calculus. It will grow through the whole chapter: force → torque, mass → rotational inertia, momentum → angular momentum. Physics repeats its structure at each level.",
      },
      {
        term: 'Spin-down arithmetic',
        kind: 'insight',
        statement: "In a uniform spin-down to rest, $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$ links the stopping angle to the initial spin — doubling the initial speed **quadruples** the rotations needed to stop, exactly as stopping distance quadruples with speed on a highway.",
        detail: "This is why flywheels and grindstones are treated with respect: a wheel twice as fast carries four times the angle (and four times the kinetic energy, Section 10.4) before friction can still it.",
      },
      {
        term: "Rotation with Constant Angular Acceleration: solution protocol",
        kind: "method",
        statement: "**Solve Rotation with Constant Angular Acceleration problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rotation about a fixed axis; the working equation is $\\omega = d\\theta/dt$, $v = \\omega r$, $a_c = \\omega^2r$, $K_{\\text{rot}} = \\tfrac12I\\omega^2$, $\\tau = rF\\sin\\phi = I\\alpha$; every substitution must carry its units so the final unit ($\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere); rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.",
      },
      {
        term: "Rotation with Constant Angular Acceleration: scales and validity",
        kind: "insight",
        statement: "**Rotation with Constant Angular Acceleration lives at $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere) and the textbook model holds while rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Rotation with Constant Angular Acceleration calculation gives seconds when $\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$ demands meters, or a value orders of magnitude beyond $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "A fan spins down",
        problem: "An electric fan blade spinning at 22.0 rad/s is switched off and coasts uniformly to rest in 6.0 s. Find the angular acceleration, the angle turned, and the number of revolutions.",
        steps: [
          { label: 'Acceleration', text: "$\\alpha = \\frac{\\omega - \\omega_0}{t} = \\frac{0 - 22.0}{6.0} = -3.67\\ \\text{rad/s}^2$ — negative: it opposes the spin." },
          { label: 'Angle — time form', text: "$\\theta = \\tfrac12(\\omega_0 + \\omega)t = \\tfrac12(22.0 + 0)(6.0) = 66$ rad." },
          { label: 'Angle — cross-check', text: "$\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$: $0 = 484 + 2(-3.67)\\theta$ gives $\\theta = 484/7.33 = 66$ rad. Same answer, independent route." },
          { label: 'Report in revolutions', text: "$66\\ \\text{rad} \\div 2\\pi = 10.5$ revolutions during the coast." },
        ],
        result: "$\\alpha = -3.67\\ \\text{rad/s}^2$, $\\theta = 66$ rad $= 10.5$ rev. The average spin during the coast was half the initial, which is what the third equation says.",
      },
      {
        title: "Spin-up of a grinding wheel",
        problem: "A grinding wheel accelerates uniformly from rest at $\\alpha = 3.0\\ \\text{rad/s}^2$ for 4.0 s. Find the final angular velocity and the total angle.",
        steps: [
          { label: 'Velocity', text: "$\\omega = \\omega_0 + \\alpha t = 0 + (3.0)(4.0) = 12\\ \\text{rad/s}$." },
          { label: 'Angle', text: "$\\theta = \\omega_0 t + \\tfrac12\\alpha t^2 = 0 + \\tfrac12(3.0)(16) = 24$ rad." },
          { label: 'Consistency check', text: "$\\omega^2 = 2\\alpha\\theta$: $144 = (2)(3.0)(24) = 144$. The three equations agree — a quick way to catch arithmetic slips." },
        ],
        result: "$\\omega = 12$ rad/s, $\\theta = 24$ rad $= 3.8$ rev.",
      },
    ],
    keyTakeaways: [
      "For constant α only: $\\omega = \\omega_0 + \\alpha t$, $\\theta = \\omega_0 t + \\tfrac12\\alpha t^2$, $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$, $\\theta = \\tfrac12(\\omega_0+\\omega)t$.",
      "Work in rad and s throughout; convert to revolutions only at the end ($1\\ \\text{rev} = 2\\pi$ rad).",
      "The equations are exact translations of Chapter 2 — any linear-kinematics strategy is a valid rotational strategy.",
    ],
    quiz: [
      {
        q: "A wheel starts at 8.0 rad/s and accelerates uniformly at 2.0 rad/s² for 3.0 s. Its final angular velocity is:",
        options: ['12 rad/s', '14 rad/s', '48 rad/s', '16 rad/s'],
        answer: 1,
        explanation: "$\\omega = \\omega_0 + \\alpha t = 8.0 + (2.0)(3.0) = 14$ rad/s. The angle would be $\\theta = \\omega_0 t + \\frac12\\alpha t^2 = 24 + 9 = 33$ rad.",
      },
      {
        q: "A rotor decelerates uniformly from 60 rad/s to rest, turning 120 rad in the process. Its angular acceleration was:",
        options: [`$-15\\ \\text{rad/s}^2$`, `$-30\\ \\text{rad/s}^2$`, `$-7.5\\ \\text{rad/s}^2$`, `$-0.5\\ \\text{rad/s}^2$`],
        answer: 0,
        explanation: "$\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$: $0 = 3600 + 2\\alpha(120)$, so $\\alpha = -3600/240 = -15\\ \\text{rad/s}^2$. The stopping time is $60/15 = 4.0$ s.",
      },
      {
        q: "Doubling a wheel's initial angular speed (same constant braking α) multiplies the number of revolutions needed to stop by:",
        options: ['2', '4', '8', '1.41'],
        answer: 1,
        explanation: "From $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$ with final zero: $\\theta \\propto \\omega_0^2$. Double the speed, quadruple the angle — the rotational twin of highway braking distances.",
      },
    ],
  },

  // ------------------------------------------------------ 10.3
  {
    sectionId: 'hall-ch10-s3',
    readingTime: 6,
    intro: "A point on a spinning body moves in a circle, so its linear motion — speed, tangential acceleration, centripetal acceleration — is completely determined by the angular variables of the body and its distance from the axis. This section builds the three bridge equations s = θr, v = ωr, a = αr (plus the centripetal term ω²r) that let you translate freely between the two descriptions.",
    objectives: [
      "Use s = θr, v = ωr and the two acceleration relations to convert between angular and linear quantities",
      "Compute the tangential and radial (centripetal) components of a point's acceleration and combine them",
      "Explain why these relations demand radians and why the radial component never vanishes at constant ω",
    ],
    concepts: [
      {
        term: 'Position and speed on a rotating body',
        kind: 'theorem',
        statement: "For a point at distance $r$ from a fixed rotation axis, $$s = \\theta r \\quad \\text{and} \\quad v = \\omega r$$ with $\\theta$ in **radians** and $\\omega$ in rad/s. All points share $\\theta$ and $\\omega$; the linear quantities scale linearly with $r$.",
        detail: "The derivation is one differentiation: $s = \\theta r$ with fixed $r$ gives $ds/dt = r\\,d\\theta/dt$. The rim of a 0.30 m wheel at 125.7 rad/s moves at $v = 37.7$ m/s while a point halfway in moves at 18.8 m/s.",
      },
      {
        term: 'Tangential and radial acceleration',
        kind: 'theorem',
        statement: "The acceleration of a point on a rotating body splits into a **tangential** component (changing the speed) and a **radial** (centripetal) component (changing the direction): $$a_t = \\alpha r, \\qquad a_r = \\omega^2 r,$$ with total magnitude $a = \\sqrt{a_t^2 + a_r^2}$, directed at angle $\\arctan(a_t/a_r)$ from the radius toward the direction of motion.",
        detail: "At constant $\\omega$ the tangential part vanishes but $a_r = \\omega^2 r$ never does — uniform circular motion is still acceleration. These are the same components met in uniform circular motion (Chapter 4), now generated by the body's angular variables.",
      },
      {
        term: 'Why radians are mandatory',
        kind: 'insight',
        statement: "The bridge equations hold **only** when angles are measured in radians. With $\\omega$ in rad/s, $v = \\omega r$ is dimensionally clean (rad cancels); plug in rev/s and you must insert $2\\pi$ by hand — a classic exam error.",
        detail: "The radian is defined as the ratio $s/r$ precisely so that the calculus of circular motion works without conversion constants. Every derived formula of this chapter silently assumes it.",
      },
      {
        term: "Relating the Linear and Angular Variables: solution protocol",
        kind: "method",
        statement: "**Solve Relating the Linear and Angular Variables problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rotation about a fixed axis; the working equation is $\\omega = d\\theta/dt$, $v = \\omega r$, $a_c = \\omega^2r$, $K_{\\text{rot}} = \\tfrac12I\\omega^2$, $\\tau = rF\\sin\\phi = I\\alpha$; every substitution must carry its units so the final unit ($\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere); rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.",
      },
      {
        term: "Relating the Linear and Angular Variables: scales and validity",
        kind: "insight",
        statement: "**Relating the Linear and Angular Variables lives at $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere) and the textbook model holds while rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Relating the Linear and Angular Variables calculation gives seconds when $\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$ demands meters, or a value orders of magnitude beyond $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "A laboratory centrifuge",
        problem: "A centrifuge rotor of radius 0.20 m spins at 1200 rev/min. Find the linear speed of the rim and the centripetal acceleration, in units of g.",
        steps: [
          { label: 'Angular velocity in rad/s', text: "$\\omega = 1200(2\\pi/60) = 125.7\\ \\text{rad/s}$ (Section 10.1's conversion)." },
          { label: 'Rim speed', text: "$v = \\omega r = (125.7)(0.20) = 25$ m/s — freeway speed, in a circle, 20 times a second." },
          { label: 'Centripetal acceleration', text: "$a_r = \\omega^2 r = (125.7)^2(0.20) = 3.16\\times10^{3}\\ \\text{m/s}^2$." },
          { label: 'In g units', text: "$a_r/g = 3160/9.8 = 322$ — a sample in this rotor weighs 322 times its normal weight, which is how centrifuges separate cells and sediment." },
        ],
        result: "$v = 25$ m/s and $a_r = 3.2\\times10^{3}\\ \\text{m/s}^2 \\approx 320g$ at the rim.",
      },
      {
        title: "Both acceleration components",
        problem: "A disk starts from rest with angular acceleration 2.5 rad/s². At t = 4.0 s, find the acceleration components of a point at r = 0.20 m, and the total acceleration.",
        steps: [
          { label: 'Angular velocity by then', text: "$\\omega = \\alpha t = (2.5)(4.0) = 10\\ \\text{rad/s}$." },
          { label: 'Tangential component', text: "$a_t = \\alpha r = (2.5)(0.20) = 0.50\\ \\text{m/s}^2$ — the part that is speeding the point up." },
          { label: 'Radial component', text: "$a_r = \\omega^2 r = (100)(0.20) = 20\\ \\text{m/s}^2$ — already 40 times the tangential part." },
          { label: 'Total', text: "$a = \\sqrt{0.50^2 + 20^2} \\approx 20.0\\ \\text{m/s}^2$, tilted only $1.4^\\circ$ ahead of the radius. In spinning machinery the centripetal term quickly dominates." },
        ],
        result: "$a_t = 0.50\\ \\text{m/s}^2$, $a_r = 20\\ \\text{m/s}^2$, total $\\approx 20\\ \\text{m/s}^2$ nearly radial.",
      },
    ],
    keyTakeaways: [
      "Bridge equations (radians mandatory): $s = \\theta r$, $v = \\omega r$, $a_t = \\alpha r$, $a_r = \\omega^2 r$.",
      "Tangential acceleration changes a point's speed; radial acceleration $\\omega^2 r$ changes its direction and persists even at constant ω.",
      "The radial term grows as $\\omega^2 r$ and dominates machine-scale rotation: 1200 rpm at 20 cm radius already means ~320g at the rim.",
    ],
    quiz: [
      {
        q: "Two points sit on the same rotating disk, one at 5.0 cm and one at 15.0 cm from the axis. At any instant their linear speeds are in the ratio:",
        options: ['1:1', '1:3', '1:9', 'depends on the angular velocity'],
        answer: 1,
        explanation: "Both share the same $\\omega$, and $v = \\omega r$, so speed scales with radius: 1:3. The ratio is set by geometry, not by how fast the disk spins.",
      },
      {
        q: "A point on a wheel rotating at constant ω has:",
        options: [
          'zero acceleration',
          'only tangential acceleration',
          'only centripetal acceleration, magnitude ω²r',
          'both tangential and centripetal acceleration',
        ],
        answer: 2,
        explanation: "Constant $\\omega$ means $\\alpha = 0$, killing the tangential part. But the direction of motion still changes, so the centripetal $a_r = \\omega^2 r$ persists — uniform circular motion is accelerated motion.",
      },
      {
        q: "At 1200 rev/min, a point 0.20 m from the axis has centripetal acceleration of about 3.2×10³ m/s². Doubling the spin rate to 2400 rev/min makes it about:",
        options: ['$6.4\\times10^{3}$ m/s²', '$1.3\\times10^{4}$ m/s²', '$3.2\\times10^{3}$ m/s²', '$2.6\\times10^{5}$ m/s²'],
        answer: 1,
        explanation: "$a_r = \\omega^2 r$ grows with the square of the angular velocity: doubling $\\omega$ quadruples $a_r$ to $\\approx 1.28\\times10^{4}$ m/s², roughly 1300g — why rotor bursts are catastrophic.",
      },
      {
        q: "The relation v = ωr gives the speed in m/s only if ω is expressed in:",
        options: ['rev/s', 'rev/min', 'degrees per second', 'rad/s'],
        answer: 3,
        explanation: "Only radians — defined as arc over radius — make $\\omega r$ dimensionally and numerically correct without a $2\\pi$ or $\\pi/180$ correction factor.",
      },
    ],
  },

  // ------------------------------------------------------ 10.4
  {
    sectionId: 'hall-ch10-s4',
    readingTime: 6,
    intro: "Rotating bodies store energy — sometimes enormously. The kinetic energy of rotation is ½Iω², where the rotational inertia I measures how the body's mass is distributed about the axis. Mass far from the axis is expensive, squared; this single fact explains flywheels, engine balance, and why a rolling hoop loses races to a rolling sphere in Chapter 11.",
    objectives: [
      "Define rotational inertia I = Σmᵢrᵢ² about an axis and explain its dependence on axis choice",
      "Compute rotational kinetic energy K = ½Iω² and solve flywheel energy problems",
      "Compare rotational and translational kinetic energy for the same body",
    ],
    concepts: [
      {
        term: 'Rotational inertia',
        kind: 'definition',
        statement: "The **rotational inertia** (moment of inertia) of a system of particles about a fixed axis is $$I = \\sum_i m_i r_i^2,$$ where $r_i$ is each particle's perpendicular distance from the axis. Units: kg·m². It depends on the mass, the axis, and — crucially — how far the mass sits from the axis.",
        detail: "Distance enters squared: 1 kg at 2 m from the axis costs as much inertia as 4 kg at 1 m. This is why a barbell spun about its grip is sluggish, and why moving mass to the center is the universal strategy for spinning things up quickly — the figure skater of Section 11.8.",
      },
      {
        term: 'Kinetic energy of rotation',
        kind: 'theorem',
        statement: "A rigid body rotating about a fixed axis at angular speed $\\omega$ has $$K = \\tfrac12 I\\omega^2.$$ The derivation is term-by-term: each particle moves at $v_i = \\omega r_i$, so $\\sum \\frac12 m_i v_i^2 = \\frac12(\\sum m_i r_i^2)\\omega^2 = \\frac12 I\\omega^2$.",
        detail: "The formula is the rotational twin of $\\frac12 mv^2$ with $I$ playing the role of mass and $\\omega$ the role of speed. Combined with translation it gives the rolling energy of Section 11.1: $K = \\frac12 Mv_{com}^2 + \\frac12 I\\omega^2$.",
      },
      {
        term: 'Flywheels as energy stores',
        kind: 'insight',
        statement: "Because $K \\propto \\omega^2$, a flywheel stores four times the energy when it spins twice as fast — and delivers it back as mechanical work when the load demands. Engine flywheels smooth the pulses between combustion events; regenerative braking systems store braking energy as spin.",
        detail: "The same $\\omega^2$ law is a safety liability: the stress in a spinning rim also grows as $\\omega^2$, so burst speed, not energy capacity, sets the engineering limit. Energy per kilogram of advanced flywheels rivals batteries.",
      },
      {
        term: "Kinetic Energy of Rotation: solution protocol",
        kind: "method",
        statement: "**Solve Kinetic Energy of Rotation problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rotation about a fixed axis; the working equation is $\\omega = d\\theta/dt$, $v = \\omega r$, $a_c = \\omega^2r$, $K_{\\text{rot}} = \\tfrac12I\\omega^2$, $\\tau = rF\\sin\\phi = I\\alpha$; every substitution must carry its units so the final unit ($\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere); rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.",
      },
      {
        term: "Kinetic Energy of Rotation: scales and validity",
        kind: "insight",
        statement: "**Kinetic Energy of Rotation lives at $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere) and the textbook model holds while rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Kinetic Energy of Rotation calculation gives seconds when $\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$ demands meters, or a value orders of magnitude beyond $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Energy in a flywheel",
        problem: "A solid uniform disk flywheel of mass 24 kg and radius 0.30 m spins at 900 rev/min. Find its rotational inertia and kinetic energy.",
        steps: [
          { label: 'Rotational inertia of a disk', text: "For a solid disk about its central axis, $I = \\frac12 MR^2 = \\frac12(24)(0.30)^2 = 1.08\\ \\text{kg}\\cdot\\text{m}^2$ (from the table of Section 10.5)." },
          { label: 'Angular velocity', text: "$\\omega = 900(2\\pi/60) = 94.2\\ \\text{rad/s}$." },
          { label: 'Energy', text: "$K = \\frac12 I\\omega^2 = \\frac12(1.08)(94.2)^2 = 4.8\\times10^{3}$ J." },
          { label: 'Compare with translation', text: "The rim moves at $v = \\omega R = 28.3$ m/s; translating the same 24 kg at rim speed would carry $\\frac12(24)(28.3)^2 = 9.6$ kJ — twice as much. The factor 2 is the disk's inertia being $\\frac12 MR^2$: its mass sits, on average, at less than the rim radius." },
        ],
        result: "$I = 1.08\\ \\text{kg}\\cdot\\text{m}^2$ and $K = 4.8$ kJ — enough to lift the flywheel itself 20 m.",
      },
      {
        title: "A dumbbell's rotation",
        problem: "Two 3.0 kg masses are welded to the ends of a light rod and rotate about the rod's midpoint, each 0.50 m from the axis, at ω = 8.0 rad/s. Find I and K.",
        steps: [
          { label: 'Inertia', text: "$I = \\sum m r^2 = (3.0)(0.50)^2 + (3.0)(0.50)^2 = 1.5\\ \\text{kg}\\cdot\\text{m}^2$." },
          { label: 'Energy', text: "$K = \\frac12 I\\omega^2 = \\frac12(1.5)(64) = 48$ J." },
          { label: 'Role of the rod', text: "A light rod contributes almost nothing — its mass sits near the axis where $r^2$ is small. Sliding the same masses out to 0.80 m would raise $I$ to $3.8\\ \\text{kg}\\cdot\\text{m}^2$, more than doubling it." },
        ],
        result: "$I = 1.5\\ \\text{kg}\\cdot\\text{m}^2$, $K = 48$ J. Rotational inertia is bought with radius squared.",
      },
    ],
    keyTakeaways: [
      "Rotational inertia $I = \\sum m_i r_i^2$ (kg·m²) depends on the mass distribution and on which axis you choose — always name the axis.",
      "Rotational kinetic energy is $K = \\frac12 I\\omega^2$; since $K \\propto \\omega^2$, energy and rim stress both quadruple when spin doubles.",
      "Mass far from the axis is penalized as $r^2$ — hence light rims, hollow-frame bicycles, and tucked-in skaters.",
    ],
    quiz: [
      {
        q: "Two wheels have the same mass and radius; one is a hoop with all mass at the rim, the other a uniform disk. About their central axes:",
        options: [
          'they have the same rotational inertia',
          'the hoop has twice the inertia of the disk',
          'the disk has twice the inertia of the hoop',
          'the disk has four times the inertia of the hoop',
        ],
        answer: 1,
        explanation: "Hoop: $I = MR^2$. Disk: $I = \\frac12 MR^2$, because the disk's mass sits on average at only $R/\\sqrt{2}$ from the axis. The factor of 2 decides rolling races.",
      },
      {
        q: "If a flywheel's angular speed doubles, its rotational kinetic energy:",
        options: ['doubles', 'quadruples', 'stays the same', 'halves'],
        answer: 1,
        explanation: "$K = \\frac12 I\\omega^2$ with $I$ fixed — $K$ scales as $\\omega^2$. This is also why flywheel stresses, which scale with rim speed squared, set the burst limit.",
      },
      {
        q: "The SI units of rotational inertia are:",
        options: ['kg·m', 'kg·m²', 'N·m', 'kg·m²/s²'],
        answer: 1,
        explanation: "$I = \\sum m r^2$ sums mass times distance squared: kg·m². (N·m is torque; kg·m²/s² is energy — all three appear in this chapter; do not mix them.)",
      },
      {
        q: "A 2.0 kg hoop and a 2.0 kg disk, each of radius 0.10 m, spin at 10 rad/s. The ratio of kinetic energies (hoop:disk) is:",
        options: ['1:1', '2:1', '4:1', '1:2'],
        answer: 1,
        explanation: "$K_{hoop} = \\frac12(MR^2)\\omega^2$ versus $K_{disk} = \\frac12(\\frac12 MR^2)\\omega^2$ — the hoop stores exactly twice the energy, here 0.10 J versus 0.050 J.",
      },
    ],
  },

  // ------------------------------------------------------ 10.5
  {
    sectionId: 'hall-ch10-s5',
    readingTime: 8,
    intro: "Rotational inertia is not a single number per body — it is a function of the axis. This section shows how to compute it: directly by integration for simple shapes, by look-up for standard ones, and — the professional's move — by the parallel-axis theorem, which converts any known inertia about the center of mass into the inertia about any parallel axis in one line.",
    objectives: [
      "Compute rotational inertia by integrating $I = \\int r^2\\,dm$ for a rod and other simple bodies",
      "Use the table of standard inertias (rod, hoop, disk, sphere, shell)",
      "Apply the parallel-axis theorem $I = I_{com} + Mh^2$ and verify it numerically",
    ],
    concepts: [
      {
        term: 'Rotational inertia by integration',
        kind: 'method',
        statement: "For a continuous body, replace the sum by an integral over mass elements: $$I = \\int r^2\\,dm.$$ For a uniform rod of mass $M$ and length $L$ about a perpendicular axis through one end, write $dm = (M/L)\\,dx$ and integrate $x$ from 0 to $L$: $$I = \\frac{M}{L}\\int_0^L x^2 dx = \\frac{1}{3}ML^2.$$",
        detail: "About the rod's center the same integral, from $-L/2$ to $+L/2$, gives $\\frac{1}{12}ML^2$ — four times less, because the mass sits closer to the axis. The distance-squared penalty is why axis placement matters so much.",
      },
      {
        term: 'Standard inertias',
        kind: 'notation',
        statement: "About the symmetry axis through the center of mass: hoop $I = MR^2$; **disk** $I = \\frac12 MR^2$; **rod** (perpendicular, at center) $\\frac{1}{12}ML^2$; **solid sphere** $\\frac{2}{5}MR^2$; **spherical shell** $\\frac{2}{3}MR^2$; **slab** (through center, in-plane) $\\frac{1}{12}M(a^2+b^2)$.",
        detail: "Two patterns are worth noticing: only the hoop puts all its mass at one radius, so it is the maximum $MR^2$ for a given $M$ and outer radius; and pushing mass into shells away from the axis (shell vs solid sphere, 2/3 vs 2/5) always raises $I$.",
      },
      {
        term: 'Parallel-axis theorem',
        kind: 'theorem',
        statement: "If $I_{com}$ is the rotational inertia about an axis through the center of mass, then about any **parallel** axis a perpendicular distance $h$ away, $$I = I_{com} + Mh^2.$$ The shift always **adds** $Mh^2 \\ge 0$: the com axis is the cheapest parallel axis.",
        detail: "Proof idea: write each point's position as com-plus-offset. The cross terms vanish exactly because the origin sits at the center of mass — $\\sum m_i \\vec r'_i = 0$ — leaving $\\sum m_i r_i'^2 + Mh^2$. This theorem turns one table entry into every off-center axis you will ever need.",
      },
      {
        term: 'Composite bodies',
        kind: 'method',
        statement: "For a composite body, inertias about a **common axis** simply add: $I_{total} = I_1 + I_2 + \\cdots$. Holes are negative mass. The trick is choosing the common axis so that each part's inertia is easy (often via the parallel-axis theorem).",
        detail: "Example: a hoop of mass $M_h$ welded to a disk of mass $M_d$, same radius $R$, spins about their common central axis: $I = M_hR^2 + \\frac12 M_dR^2$ — a bicycle wheel with a heavy rim and a light hub, close to $MR^2$ overall.",
      },
      {
        term: "Calculating the Rotational Inertia: solution protocol",
        kind: "method",
        statement: "**Solve Calculating the Rotational Inertia problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rotation about a fixed axis; the working equation is $\\omega = d\\theta/dt$, $v = \\omega r$, $a_c = \\omega^2r$, $K_{\\text{rot}} = \\tfrac12I\\omega^2$, $\\tau = rF\\sin\\phi = I\\alpha$; every substitution must carry its units so the final unit ($\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere); rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.",
      },
    ],
    figures: [
      {
        caption: "The parallel-axis theorem. A uniform rod ($M = 2.4$ kg, $L = 1.0$ m) has $I_{com} = \\frac{1}{12}ML^2 = 0.20\\ \\text{kg}\\cdot\\text{m}^2$ about the central axis. About the parallel axis at its end, $h = L/2 = 0.50$ m away, $$I_{end} = I_{com} + Mh^2 = 0.20 + (2.4)(0.25) = 0.80\\ \\text{kg}\\cdot\\text{m}^2 = \\tfrac13 ML^2$$ — exactly what the direct integration gives. Moving the axis away from the center of mass is always expensive.",
        svg: `<svg viewBox="0 0 460 220" width="100%" role="img" aria-label="Parallel-axis theorem for a uniform rod" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><rect x="70" y="90" width="320" height="30" rx="4" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><g stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.7"><line x1="230" y1="40" x2="230" y2="150"/><line x1="390" y1="40" x2="390" y2="150"/></g><polygon points="222,52 238,52 230,66" fill="currentColor"/><polygon points="382,52 398,52 390,66" fill="currentColor"/><g font-size="10.5" fill="currentColor" text-anchor="middle"><text x="230" y="36">axis through com (I = I com)</text><text x="390" y="36">parallel axis, distance h</text><text x="230" y="140" opacity="0.8">com</text></g><line x1="230" y1="160" x2="390" y2="160" stroke="currentColor" stroke-width="1.2"/><polygon points="230,160 242,156 242,164" fill="currentColor"/><polygon points="390,160 378,156 378,164" fill="currentColor"/><text x="310" y="178" font-size="10.5" fill="currentColor" text-anchor="middle">h = L/2 = 0.50 m</text><text x="230" y="14" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">uniform rod: M = 2.4 kg, L = 1.0 m</text><text x="230" y="205" font-size="11" fill="currentColor" text-anchor="middle">I end = I com + M h² = 0.20 + (2.4)(0.25) = 0.80 kg·m²</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "A rod about its end, two ways",
        problem: "A uniform rod of mass 2.4 kg and length 1.0 m. Find its rotational inertia about a perpendicular axis through one end, (a) by integration, (b) by the parallel-axis theorem.",
        steps: [
          { label: 'Integration', text: "With $dm = (M/L)dx$ measured from the end: $I = \\frac{M}{L}\\int_0^L x^2\\,dx = \\frac{M}{L}\\cdot\\frac{L^3}{3} = \\frac13 ML^2 = (2.4)(1.0)/3 = 0.80\\ \\text{kg}\\cdot\\text{m}^2$." },
          { label: 'Start from the center', text: "The table gives $I_{com} = \\frac{1}{12}ML^2 = 0.20\\ \\text{kg}\\cdot\\text{m}^2$ about the midpoint axis." },
          { label: 'Shift the axis', text: "The end axis is $h = L/2 = 0.50$ m from the com: $I = I_{com} + Mh^2 = 0.20 + (2.4)(0.50)^2 = 0.20 + 0.60 = 0.80\\ \\text{kg}\\cdot\\text{m}^2$." },
          { label: 'Agreement', text: "Both routes agree exactly — the theorem is an identity, not an approximation. Note the shift term $Mh^2 = 0.60$ dwarfed the original 0.20: end-mounted rods are expensive to spin." },
        ],
        result: "$I = 0.80\\ \\text{kg}\\cdot\\text{m}^2 = \\frac13 ML^2$ about the end, confirmed by two independent methods.",
      },
      {
        title: "Checking the theorem's direction",
        problem: "For the same rod, is there any parallel axis about which the inertia is smaller than 0.20 kg·m²?",
        steps: [
          { label: 'Write the general shift', text: "$I = I_{com} + Mh^2$ with $Mh^2 = 2.4h^2 \\ge 0$ for every $h$." },
          { label: 'Conclude', text: "No: the minimum over all parallel axes occurs at $h = 0$ — the com axis. Any other placement, by any distance, adds a non-negative $Mh^2$." },
          { label: 'A quick number', text: "Shifting to $h = 0.30$ m: $I = 0.20 + (2.4)(0.09) = 0.42\\ \\text{kg}\\cdot\\text{m}^2$ — more than double, from a modest offset." },
        ],
        result: "The center-of-mass axis is always the minimum-inertia axis in its direction. Machinery that must spin up fast is designed so the axis passes through the com.",
      },
    ],
    keyTakeaways: [
      "Compute $I = \\int r^2 dm$ for simple bodies; a uniform rod gives $\\frac13 ML^2$ about its end but only $\\frac{1}{12}ML^2$ about its center.",
      "Parallel-axis theorem: $I = I_{com} + Mh^2$ — the com axis is always the cheapest parallel axis, and inertias about a common axis add for composite bodies.",
      "Standard results to memorize: hoop $MR^2$, disk $\\frac12 MR^2$, solid sphere $\\frac25 MR^2$, spherical shell $\\frac23 MR^2$.",
    ],
    quiz: [
      {
        q: "A uniform rod (M = 1.2 kg, L = 0.80 m) rotates about a perpendicular axis through one end. Its rotational inertia is:",
        options: ['0.077 kg·m²', '0.26 kg·m²', '0.38 kg·m²', '0.77 kg·m²'],
        answer: 1,
        explanation: "$I = \\frac13 ML^2 = (1.2)(0.64)/3 = 0.256$ kg·m². Via the theorem: $\\frac{1}{12}ML^2 + M(L/2)^2 = 0.064 + 0.192 = 0.256$ — same answer.",
      },
      {
        q: "A disk has rotational inertia 0.090 kg·m² about its central axis. Shifted to a parallel axis 0.30 m from the center, with the disk's mass 2.0 kg, the new inertia is:",
        options: ['0.09 kg·m²', '0.18 kg·m²', '0.27 kg·m²', '0.45 kg·m²'],
        answer: 2,
        explanation: "$I = I_{com} + Mh^2 = 0.090 + (2.0)(0.30)^2 = 0.090 + 0.18 = 0.27\\ \\text{kg}\\cdot\\text{m}^2$. The offset often contributes more than the body itself.",
      },
      {
        q: "Of two bodies with equal mass and equal outer radius, the one with the LARGEST rotational inertia about its central axis is:",
        options: ['a solid sphere', 'a spherical shell', 'a solid disk', 'a solid cube'],
        answer: 1,
        explanation: "The shell keeps all its mass at radius $R$ ($\\frac23 MR^2$), beating the solid sphere ($\\frac25 MR^2$) whose mass crowds the center. Only the hoop among planar shapes does better relative to its radius.",
      },
      {
        q: "The parallel-axis theorem $I = I_{com} + Mh^2$ requires that the two axes be:",
        options: [
          'any two axes through the body',
          'parallel, with one through the center of mass',
          'both through the center of mass',
          'perpendicular to each other',
        ],
        answer: 1,
        explanation: "The derivation splits each particle's position into com-plus-offset, which only works for parallel axes, and uses $\\sum m_i \\vec r_i' = 0$, which is the definition of the com axis. Drop either hypothesis and the theorem fails.",
      },
    ],
  },

  // ------------------------------------------------------ 10.6
  {
    sectionId: 'hall-ch10-s6',
    readingTime: 7,
    intro: "Torque is the turning effectiveness of a force — and effectiveness, not effort, is what matters: the same push can be useless at a hinge and decisive at a handle. This section defines torque about an axis, introduces the lever arm picture that makes computations visual, and fixes the sign convention (counterclockwise positive) that the next section's law of motion will inherit.",
    objectives: [
      "Compute torque about an axis from $\\tau = rF\\sin\\phi$ and from the lever arm $\\tau = Fr_\\perp$",
      "Determine the sign of a torque about a chosen axis",
      "Explain why torque depends on the choice of axis and differs from work despite sharing units of N·m",
    ],
    concepts: [
      {
        term: 'Torque',
        kind: 'definition',
        statement: "The **torque** of a force $\\vec F$ applied at point $P$ about a fixed axis through origin $O$ is $$\\tau = r F \\sin\\phi,$$ where $\\vec r$ points from $O$ to $P$ and $\\phi$ is the angle between $\\vec r$ and $\\vec F$. Unit: N·m, positive for counterclockwise turning about the axis.",
        detail: "Torque depends on three things: the force, where it is applied, and the axis you chose — change the axis and every torque changes. A force applied along a line through the axis ($\\phi = 0$) produces zero torque however large it is: you cannot turn a door by pushing on its hinges.",
      },
      {
        term: 'Lever arm',
        kind: 'definition',
        statement: "The **lever arm** (moment arm) $r_\\perp$ is the perpendicular distance from the axis to the line of action of the force: $$r_\\perp = r\\sin\\phi, \\qquad \\tau = F r_\\perp.$$ The line of action is the infinite line along $\\vec F$ through the application point.",
        detail: "The lever arm picture is the fast way to compute torques in equilibrium problems: drop a perpendicular from the pivot to each force's line of action, measure, multiply. It also makes the geometry memorable — a force is most effective when its line of action passes far from the axis and perpendicular to the radius.",
      },
      {
        term: 'Torque is not work',
        kind: 'insight',
        statement: "Torque and work share the unit N·m but describe different things: work $W = Fd\\cos\\theta$ is energy transferred along a displacement; torque depends on force and lever arm with **no** displacement required. A stalled motor delivering 50 N·m at a standstill does no work while exerting full torque.",
        detail: "The distinction sharpens in Section 10.8, where a torque acting through an angular displacement $d\\theta$ does work $dW = \\tau\\,d\\theta$ — there the joule really appears. For now, treat N·m of torque as a static measure of turning push.",
      },
      {
        term: "Torque: solution protocol",
        kind: "method",
        statement: "**Solve Torque problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rotation about a fixed axis; the working equation is $\\omega = d\\theta/dt$, $v = \\omega r$, $a_c = \\omega^2r$, $K_{\\text{rot}} = \\tfrac12I\\omega^2$, $\\tau = rF\\sin\\phi = I\\alpha$; every substitution must carry its units so the final unit ($\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere); rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.",
      },
      {
        term: "Torque: scales and validity",
        kind: "insight",
        statement: "**Torque lives at $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere) and the textbook model holds while rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Torque calculation gives seconds when $\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$ demands meters, or a value orders of magnitude beyond $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere), recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: "Torque and the lever arm. A force $F = 80$ N applied at the end of a 2.40 m rod, at angle $\\phi = 37^\\circ$ to the rod, about a pivot at the left end. The lever arm is the perpendicular distance from the pivot to the line of action: $r_\\perp = r\\sin\\phi = (2.40)(0.60) = 1.44$ m, giving $\\tau = Fr_\\perp = (80)(1.44) \\approx 115$ N·m, clockwise (negative). Had the force acted at 90° to the rod, the lever arm would be the full 2.40 m and the torque 192 N·m — geometry, not muscle, sets the turning power.",
        svg: `<svg viewBox="0 0 460 300" width="100%" role="img" aria-label="Torque as force times lever arm" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif, system-ui, sans-serif"><line x1="146" y1="22" x2="410" y2="220" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.55"/><line x1="90" y1="160" x2="330" y2="160" stroke="currentColor" stroke-width="4"/><circle cx="90" cy="160" r="7" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><line x1="90" y1="160" x2="176.4" y2="44.8" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3" opacity="0.85"/><polyline points="186,52 193.2,42.4 183.6,35.2" fill="none" stroke="currentColor" stroke-width="1.3" opacity="0.85"/><line x1="330" y1="160" x2="410" y2="220" stroke="currentColor" stroke-width="3"/><polygon points="414,223 396.8,216.6 403.6,206.4" fill="currentColor"/><path d="M370,160 A40 40 0 0 1 362,184" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="330" cy="160" r="3.5" fill="currentColor"/><g font-size="10.5" fill="currentColor"><text x="210" y="150" text-anchor="middle">r = 2.40 m</text><text x="410" y="248" text-anchor="end">F = 80 N</text><text x="374" y="182" text-anchor="start">φ = 37°</text><text x="108" y="92" text-anchor="start">r⊥ = r sin φ = 1.44 m</text><text x="84" y="184" text-anchor="end">pivot</text></g><text x="230" y="282" font-size="11" fill="currentColor" text-anchor="middle">τ = r F sin φ = F r⊥ = (80 N)(1.44 m) ≈ 115 N·m, clockwise</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Wrench mathematics",
        problem: "A mechanic pulls on a 0.30 m wrench with 80 N. (a) Perpendicular to the handle; (b) at 37° to it; (c) along the handle. Find the torque about the bolt in each case.",
        steps: [
          { label: 'Perpendicular', text: "$\\phi = 90^\\circ$: $\\tau = rF = (0.30)(80) = 24$ N·m — the maximum this force can deliver at this radius." },
          { label: 'At 37°', text: "$\\tau = rF\\sin 37^\\circ = (0.30)(80)(0.60) = 14$ N·m — the lever arm has shrunk to $0.30\\sin 37^\\circ = 0.18$ m." },
          { label: 'Along the handle', text: "$\\phi = 0$: $\\tau = 0$. Pulling along the wrench's own axis turns nothing — the line of action passes through the bolt." },
          { label: 'The lesson', text: "The mechanic's instinct — pull at right angles to the tool, and use a longer tool — is exactly $\\tau = Fr_\\perp$." },
        ],
        result: "24 N·m, 14 N·m, 0 — same 80 N pull, three different turning powers, set entirely by geometry.",
      },
      {
        title: "Why you push a door at the far edge",
        problem: "A door is 0.90 m wide, hinged on the left. You push with 20 N at the handle, (a) perpendicular to the door face; (b) perpendicular but at 0.10 m from the hinge. Compare torques about the hinge.",
        steps: [
          { label: 'At the handle', text: "$\\tau = (0.90)(20) = 18$ N·m (counterclockwise if you push the door's opening direction — sign aside, magnitude 18)." },
          { label: 'Near the hinge', text: "$\\tau = (0.10)(20) = 2.0$ N·m — one-ninth of the turning power for the same push." },
          { label: 'Recovering it', text: "To get 18 N·m from near the hinge you would need 180 N. Physics formalizes the everyday rule: push the door where the lever arm is largest." },
        ],
        result: "18 N·m versus 2.0 N·m. Torque, not force, opens doors.",
      },
    ],
    keyTakeaways: [
      "Torque about an axis: $\\tau = rF\\sin\\phi = F r_\\perp$, in N·m, with counterclockwise positive; it depends on the axis chosen.",
      "The lever arm $r_\\perp$ is the perpendicular distance from the axis to the force's line of action — the fastest route to torques in statics problems.",
      "Torque is not work: no displacement is needed for torque, and a force whose line passes through the axis contributes zero.",
    ],
    quiz: [
      {
        q: "A 100 N force is applied to a door 1.2 m from the hinge, at 30° to the door's surface (i.e., 60° to the plane of the door's swing, so the angle between r and F is 60°). The torque about the hinge is:",
        options: ['120 N·m', '104 N·m', '60 N·m', '0 N·m'],
        answer: 1,
        explanation: "$\\tau = rF\\sin\\phi = (1.2)(100)\\sin 60^\\circ = 120(0.866) \\approx 104$ N·m. Only the component perpendicular to the radius, times the radius, turns the door.",
      },
      {
        q: "A force produces zero torque about an axis whenever:",
        options: [
          'it is small in magnitude',
          'its line of action passes through the axis',
          'it is applied at a large radius',
          'it points downward',
        ],
        answer: 1,
        explanation: "If the line of action crosses the axis, $r_\\perp = 0$ and $\\tau = Fr_\\perp = 0$ however large $F$ is. Magnitude and direction both matter only through the lever arm.",
      },
      {
        q: "A stalled motor holds its shaft at rest while exerting 50 N·m. The work it does on the shaft is:",
        options: ['50 J', '50 N·m of work per second', 'zero, because there is no angular displacement', 'undefined'],
        answer: 2,
        explanation: "Torque does work $W = \\int \\tau\\,d\\theta$; with $d\\theta = 0$ nothing is transferred. Torque's N·m only become joules after rotation — Section 10.8 makes this precise.",
      },
      {
        q: "The same force is applied to the same point of a body, but you recompute the torque about a different axis. The torque:",
        options: [
          'stays the same; torque is a property of the force alone',
          'generally changes, because r and the lever arm change',
          'always doubles',
          'becomes zero for any axis not through the application point',
        ],
        answer: 1,
        explanation: "Torque is defined relative to an axis: the vector $\\vec r$ from axis to application point, and hence $\\tau = rF\\sin\\phi$, changes when the axis moves. Always state what you are taking torques about.",
      },
    ],
  },

  // ------------------------------------------------------ 10.7
  {
    sectionId: 'hall-ch10-s7',
    readingTime: 7,
    intro: "Net torque causes angular acceleration, and the constant of proportionality is the rotational inertia: τ_net = Iα, the exact rotational twin of F = ma. The law closes the loop this chapter opened — kinematics, energy and now dynamics all hang off the same three quantities θ, ω, α and their inertial partner I. Pulleys stop being decoration and start having mass that matters.",
    objectives: [
      "State Newton's second law for rotation and the conditions on the axis for its validity",
      "Solve single-torque and Atwood-machine problems with massive pulleys",
      "Use the linear-rotational dictionary to translate between the two second laws",
    ],
    concepts: [
      {
        term: "Newton's second law for rotation",
        kind: 'law',
        statement: "For a rigid body rotating about a fixed axis, $$\\tau_{net} = I\\alpha,$$ where $\\tau_{net}$ is the sum of all **external** torques about that axis and $I$ is the rotational inertia about the **same** axis. Internal torques cancel in pairs, exactly as internal forces did in Chapter 9.",
        detail: "Requirements: the axis must be fixed in an inertial frame (the shortcuts for accelerating axes come with Chapter 11's full vector treatment). Note the honesty of the formula: a light pulley ($I \\approx 0$) needs $\\tau_{net} \\approx 0$, which is why string tensions on either side of an ideal pulley are equal — and unequal the moment the pulley has mass.",
      },
      {
        term: 'The extended analogy table',
        kind: 'method',
        statement: "| translation | rotation | | --- | --- | | $\\sum F = ma$ | $\\sum \\tau = I\\alpha$ | | $m$ | $I$ | | $F$ | $\\tau$ | | $a$ | $\\alpha$ | | $p = mv$ | $L = I\\omega$ (Ch. 11) | | $\\frac12 mv^2$ | $\\frac12 I\\omega^2$ |",
        detail: "The analogy is structural, not accidental — both columns are the same mechanics written about different variables. It extends to work ($Fs \\to \\tau\\theta$) and to momentum conservation in the next chapter. But do not push it blindly: $I$ depends on the axis while $m$ never does.",
      },
      {
        term: 'Massive pulleys change everything',
        kind: 'insight',
        statement: "When a pulley has rotational inertia $I$, the tensions on its two sides **differ**: the difference supplies the torque $\\tau = (T_2 - T_1)R = I\\alpha$. An ideal (massless, frictionless) pulley has $I \\to 0$, forcing $T_1 = T_2$.",
        detail: "In a belt or chain drive, unequal tension is the whole point — the tension difference times the pulley radius is what spins up the machinery. Watch for it also in yo-yos (Section 11.3), where the string tension both accelerates the center of mass and torques the spin.",
      },
      {
        term: "Newton's Second Law for Rotation: solution protocol",
        kind: "method",
        statement: "**Solve Newton's Second Law for Rotation problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rotation about a fixed axis; the working equation is $\\omega = d\\theta/dt$, $v = \\omega r$, $a_c = \\omega^2r$, $K_{\\text{rot}} = \\tfrac12I\\omega^2$, $\\tau = rF\\sin\\phi = I\\alpha$; every substitution must carry its units so the final unit ($\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere); rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.",
      },
      {
        term: "Newton's Second Law for Rotation: scales and validity",
        kind: "insight",
        statement: "**Newton's Second Law for Rotation lives at $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere) and the textbook model holds while rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Newton's Second Law for Rotation calculation gives seconds when $\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$ demands meters, or a value orders of magnitude beyond $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Spin-up of a heavy disk",
        problem: "A uniform disk (M = 3.0 kg, R = 0.10 m) on a frictionless bearing has a string wrapped around its rim. Pulling the string with a constant tangential 24 N, find the angular acceleration and the state after 2.0 s.",
        steps: [
          { label: 'Inertia', text: "$I = \\frac12 MR^2 = \\frac12(3.0)(0.010) = 0.015\\ \\text{kg}\\cdot\\text{m}^2$." },
          { label: 'Torque', text: "The pull is tangential, so $\\tau = TR = (24)(0.10) = 2.4$ N·m." },
          { label: "Newton's law for rotation", text: "$\\alpha = \\tau/I = 2.4/0.015 = 160\\ \\text{rad/s}^2$." },
          { label: 'After 2.0 s from rest', text: "$\\omega = \\alpha t = 320$ rad/s and $\\theta = \\frac12\\alpha t^2 = 320$ rad. The energy check comes in Section 10.8: the string's work $T(R\\theta) = 768$ J should equal $\\frac12 I\\omega^2 = \\frac12(0.015)(320)^2 = 768$ J. It does." },
        ],
        result: "$\\alpha = 160\\ \\text{rad/s}^2$; after 2.0 s, $\\omega = 320$ rad/s. A modest 2.4 N·m on a small inertia gives ferocious spin-up.",
      },
      {
        title: "Atwood machine with a massive pulley",
        problem: "A 2.0 kg and a 3.0 kg mass hang from a string over a solid disk pulley (M = 2.0 kg, R = 0.10 m, $I = \\frac12 MR^2 = 0.010$). Find the acceleration and both tensions.",
        steps: [
          { label: 'Three unknowns, three laws', text: "Newton for each hanging mass (down positive for the 3.0 kg side): $3.0g - T_2 = 3.0a$ and $T_1 - 2.0g = 2.0a$; rotation for the pulley: $(T_2 - T_1)R = I\\alpha = I a/R$." },
          { label: 'Solve', text: "Eliminating tensions: $(T_2 - T_1) = Ia/R^2 = 1.0a$; substituting, $3.0g - 2.0g - 1.0a = 5.0a$, so $a = g/6 = 1.63\\ \\text{m/s}^2$." },
          { label: 'Tensions', text: "$T_2 = 3.0(g - a) = 24.5$ N and $T_1 = 2.0(g + a) = 22.9$ N — differing by $(24.5 - 22.9) = 1.6$ N $= Ia/R$ as required." },
          { label: 'Ideal-pulley check', text: "With $I = 0$ the formula gives $a = g/5 = 1.96$ m/s² and $T_1 = T_2$ — the Chapter 5 result. The pulley's inertia brakes the system." },
        ],
        result: "$a = 1.63\\ \\text{m/s}^2$, $T_1 = 22.9$ N, $T_2 = 24.5$ N. Unequal tensions are the signature of a pulley that really spins.",
      },
    ],
    keyTakeaways: [
      "$\\tau_{net} = I\\alpha$ about a fixed axis: external torques only, with $I$ computed about that same axis.",
      "A massive pulley forces unequal string tensions — the difference $(T_2 - T_1)R$ is exactly the torque spinning it up.",
      "The translation ↔ rotation dictionary ($F \\to \\tau$, $m \\to I$, $a \\to \\alpha$) organizes the whole chapter and extends into Chapter 11.",
    ],
    quiz: [
      {
        q: "A disk with I = 0.020 kg·m² experiences a net torque of 3.0 N·m about its fixed central axis. Its angular acceleration is:",
        options: ['0.0067 rad/s²', '60 rad/s²', '150 rad/s²', '1.5 rad/s²'],
        answer: 2,
        explanation: "$\\alpha = \\tau/I = 3.0/0.020 = 150\\ \\text{rad/s}^2$. Small inertias spin up hard — the lever-and-flywheel world in one division.",
      },
      {
        q: "The string tensions on the two sides of an ideal (massless) pulley must be equal because:",
        options: [
          'strings cannot support different tensions',
          'with $I \\to 0$, $\\tau_{net} = I\\alpha$ forces the net torque, hence the tension difference, to zero',
          'the pulley is frictionless',
          'Newton\'s third law requires it',
        ],
        answer: 1,
        explanation: "$(T_2 - T_1)R = I\\alpha$ with $I = 0$: any tension difference would demand infinite $\\alpha$. Masslessness is exactly the license to treat both sides as having one tension.",
      },
      {
        q: "In an Atwood machine, replacing the light pulley with a heavy one (same radii, string does not slip):",
        options: [
          'the acceleration increases',
          'the acceleration decreases',
          'the acceleration is unchanged; only the tensions change',
          'the system stops moving',
        ],
        answer: 1,
        explanation: "The pulley's inertia joins the resistance to motion: $a = (m_2 - m_1)g/(m_1 + m_2 + I/R^2)$. Extra denominator, smaller acceleration — and the tensions now differ.",
      },
      {
        q: "Which torque must be summed in $\\tau_{net} = I\\alpha$?",
        options: [
          'all torques, internal and external',
          'only external torques about the chosen fixed axis',
          'only gravitational torques',
          'only torques perpendicular to the axis of rotation of the body itself',
        ],
        answer: 1,
        explanation: "Internal torques cancel in pairs (Newton's third law along joining lines), so only external ones survive the sum — the rotational rerun of the Chapter 9 argument for $\\vec F_{net,ext}$.",
      },
    ],
  },

  // ------------------------------------------------------ 10.8
  {
    sectionId: 'hall-ch10-s8',
    readingTime: 6,
    intro: "A torque acting while a body rotates does work — the rotational work-energy theorem completes the chapter's dynamics. The work is τ dθ per small turn, the kinetic energy is ½Iω², and their bookkeeping closes exactly as F ds did for ½mv². Power, the rate of delivering work, becomes the product τω — the equation printed on every motor's nameplate.",
    objectives: [
      "Compute rotational work $W = \\int \\tau\\,d\\theta$ (and $W = \\tau\\theta$ for constant torque) and rotational power $P = \\tau\\omega$",
      "Apply the rotational work-energy theorem $W_{net} = \\Delta(\\frac12 I\\omega^2)$",
      "Solve combined problems where a torque spins a body up from rest and verify the energy ledger",
    ],
    concepts: [
      {
        term: 'Work done by a torque',
        kind: 'theorem',
        statement: "A torque $\\tau$ acting while a body turns through $d\\theta$ does $$dW = \\tau\\,d\\theta, \\qquad W = \\int_{\\theta_i}^{\\theta_f} \\tau\\,d\\theta,$$ which reduces to $W = \\tau\\theta$ for constant torque. The formula is $W = F\\,ds$ in rotational dress: the 'displacement' is angular.",
        detail: "Check the units: N·m times rad = J, with radians canceling silently. Only the component of any force along the motion works, and only torque about the actual rotation axis does rotational work.",
      },
      {
        term: 'Rotational work-energy theorem',
        kind: 'theorem',
        statement: "$$W_{net} = \\int \\tau_{net}\\,d\\theta = \\tfrac12 I\\omega_f^2 - \\tfrac12 I\\omega_i^2.$$ The net work done by torques about the fixed axis equals the change in rotational kinetic energy — with variable inertia, sum the changes interval by interval.",
        detail: "Proof for constant $I$: $\\tau = I\\alpha = I\\frac{d\\omega}{dt} = I\\omega\\frac{d\\omega}{d\\theta}$ (chain rule with $\\omega = d\\theta/dt$), so $\\tau\\,d\\theta = I\\omega\\,d\\omega = d(\\frac12 I\\omega^2)$. One integration gives the theorem — the same trick that proved the linear version.",
      },
      {
        term: 'Power delivered by a torque',
        kind: 'theorem',
        statement: "$$P = \\frac{dW}{dt} = \\tau\\omega.$$ An engine delivering 200 N·m at 3000 rpm ($\\omega = 314$ rad/s) outputs $P = 6.3\\times10^{4}$ W — about 84 hp. Motor nameplates quote torque and speed; their product is the power.",
        detail: "This is why the same engine feels strong at low rpm (high torque available) yet delivers its peak power higher in the rev range, and why gears trade torque for speed at constant power: $\\tau\\omega$ is what the engine can supply, and the gearbox only repackages it.",
      },
      {
        term: "Work and Rotational Kinetic Energy: solution protocol",
        kind: "method",
        statement: "**Solve Work and Rotational Kinetic Energy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is rotation about a fixed axis; the working equation is $\\omega = d\\theta/dt$, $v = \\omega r$, $a_c = \\omega^2r$, $K_{\\text{rot}} = \\tfrac12I\\omega^2$, $\\tau = rF\\sin\\phi = I\\alpha$; every substitution must carry its units so the final unit ($\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere); rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.",
      },
      {
        term: "Work and Rotational Kinetic Energy: scales and validity",
        kind: "insight",
        statement: "**Work and Rotational Kinetic Energy lives at $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere) and the textbook model holds while rigid body with fixed axis for $\\tau = I\\alpha$; $\\theta$ in radians.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Work and Rotational Kinetic Energy calculation gives seconds when $\\text{rad}$, $\\text{rad/s}$, $\\text{kg}\\cdot\\text{m}^2$ demands meters, or a value orders of magnitude beyond $I\\sim \\tfrac12MR^2$ (disk) to $\\tfrac25MR^2$ (sphere), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: "Energy audit of the spun-up disk",
        problem: "Section 10.7's disk ($I = 0.015\\ \\text{kg}\\cdot\\text{m}^2$) was pulled by a tangential 24 N at radius 0.10 m (torque 2.4 N·m) through θ = 320 rad from rest. Verify the work-energy ledger.",
        steps: [
          { label: 'Work by the torque', text: "$W = \\tau\\theta = (2.4)(320) = 768$ J." },
          { label: 'Kinetic energy gained', text: "From rest to $\\omega = 320$ rad/s: $K_f = \\frac12 I\\omega^2 = \\frac12(0.015)(320)^2 = 768$ J." },
          { label: 'Ledger closes', text: "Work in, energy stored: $768 = 768$. Every joule the string delivered — equivalently $T \\times (R\\theta) = 24 \\times 32$ m of string pull — sits in the disk's rotation." },
        ],
        result: "Work 768 J = energy stored 768 J. The work-energy theorem is an audit tool: compute both sides when a dynamics problem looks tangled.",
      },
      {
        title: "Motor power and torque",
        problem: "A motor turns a shaft at 1000 rev/min while delivering a constant 25 N·m. Find the power in watts and horsepower.",
        steps: [
          { label: 'Convert the speed', text: "$\\omega = 1000(2\\pi/60) = 104.7\\ \\text{rad/s}$." },
          { label: 'Power', text: "$P = \\tau\\omega = (25)(104.7) = 2618\\ \\text{W} \\approx 2.6$ kW." },
          { label: 'Horsepower', text: "Dividing by 746 W/hp: about 3.5 hp — a serious shop motor." },
          { label: 'Torque-speed trade', text: "Geared down to 100 rev/min with the same power available, the shaft could deliver $\\tau = P/\\omega = 2618/10.5 = 250$ N·m — ten times the torque. Gears buy torque with speed." },
        ],
        result: "$P \\approx 2.6$ kW $\\approx 3.5$ hp, and $P = \\tau\\omega$ shows how a gearbox converts speed into torque at fixed power.",
      },
    ],
    keyTakeaways: [
      "Rotational work: $dW = \\tau\\,d\\theta$; constant torque does $W = \\tau\\theta$ (joules, with radians canceling).",
      "Work-energy theorem: $W_{net} = \\frac12 I\\omega_f^2 - \\frac12 I\\omega_i^2$ — the rotational twin of $\\frac12 mv^2$ bookkeeping.",
      "Power is $P = \\tau\\omega$: motor nameplate torque times speed, and the reason gearboxes trade torque for angular speed at constant power.",
    ],
    quiz: [
      {
        q: "A constant 5.0 N·m torque turns a flywheel through 12 revolutions. The work done is about:",
        options: ['60 J', '94 J', '377 J', '720 J'],
        answer: 2,
        explanation: "Convert first: $12\\ \\text{rev} = 24\\pi = 75.4$ rad, so $W = \\tau\\theta = (5.0)(75.4) = 377$ J. Skipping the radian conversion is the classic error (option A).",
      },
      {
        q: "A wheel with I = 2.0 kg·m² spins at 15 rad/s. The net work needed to bring it to rest is:",
        options: ['15 J', '30 J', '225 J', '450 J'],
        answer: 2,
        explanation: "$W_{net} = \\Delta K = 0 - \\frac12(2.0)(15)^2 = -225$ J: the friction torque must remove 225 J, doing negative work.",
      },
      {
        q: "An engine delivers 150 N·m at 2000 rpm. Its output power is closest to:",
        options: ['31 kW', '300 kW', '3.1 kW', '150 kW'],
        answer: 0,
        explanation: "$\\omega = 2000(2\\pi/60) = 209$ rad/s, so $P = \\tau\\omega = (150)(209) \\approx 3.1\\times10^{4}$ W — about 42 hp.",
      },
      {
        q: "The rotational work-energy theorem is derived from $\\tau = I\\alpha$ by:",
        options: [
          'integrating both sides over time only',
          'using the chain rule to write $\\alpha = \\omega\\,d\\omega/d\\theta$ so that $\\tau\\,d\\theta = I\\omega\\,d\\omega$',
          'assuming the torque is always constant',
          'multiplying both sides by r',
        ],
        answer: 1,
        explanation: "With $\\omega = d\\theta/dt$, one has $\\alpha = d\\omega/dt = (d\\omega/d\\theta)(d\\theta/dt) = \\omega\\,d\\omega/d\\theta$; then $\\tau\\,d\\theta = I\\omega\\,d\\omega = d(\\frac12 I\\omega^2)$ — integrate to finish, no constancy of $\\tau$ required.",
      },
    ],
  },
]
