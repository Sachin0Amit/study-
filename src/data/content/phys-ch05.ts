import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Feynman Lectures on Physics, Vol. I (New Millennium Edition)
// Chapter 5: Rotation and Angular Momentum — Lectures 18, 19 and 20
// Master study content. Worked-example numbers are Feynman’s own wherever the
// lectures carry arithmetic; constructed instances are labelled as such.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh5Content: SectionContent[] = [
  // ------------------------------------------------------------------ 5.1
  {
    sectionId: 'hall-ch10-s30',
    readingTime: 9,
    intro: 'Newton’s laws were built for points, but the world is made of wheels, tops and wobbling things. Feynman opens the mechanics of extended bodies with the simplest case — a rigid body turning about a fixed axis, where a single angle tells the whole story — and shows that a complete dynamics of rotation grows out of nothing but $F = ma$ and the work theorem. The chapter ends with the demonstration every skater knows: pull in your arms and you spin faster, because something has stayed constant while everything else changed.',
    objectives: [
      'Define angular velocity and angular acceleration, and derive the velocity of any point of a body rotating about a fixed axis',
      'Derive the torque from the work done in turning a body and convert freely among its three equivalent forms',
      'Define angular momentum and moment of inertia, and prove the rotation analog of $F = dp/dt$',
      'Compute the moment of inertia of a uniform rod about an end and about the centre, and verify the parallel-axis theorem',
      'Explain the turntable demonstration with $I_1\\omega_1 = I_2\\omega_2$ and the energy bookkeeping behind it',
    ],
    concepts: [
      {
        term: 'Plane rotation and the rigid body',
        kind: 'definition',
        statement: 'A **rigid body** is an ideal object whose shape stays fixed as it moves; its rotation about a fixed axis is called plane rotation or **rotation in two dimensions**, because each point moves in a plane perpendicular to the axis and one angle describes the whole configuration.',
        detail: 'Once the centre-of-mass motion is set aside, the only thing left for a rigid body to do is turn, and a single marked point — anywhere off the axis — fixes its orientation. Rotation is therefore the study of how one angle varies with time. Feynman warns that rotations become subtle in three dimensions, which is why the two-dimensional case is grounded first.',
      },
      {
        term: 'Angular velocity and angular acceleration',
        kind: 'definition',
        statement: 'The **angular velocity** is $\\omega = d\\theta/dt$ and the **angular acceleration** is $\\alpha = d\\omega/dt = d^2\\theta/dt^2$, the exact analogs of $v = ds/dt$ and $a = dv/dt$; with $\\theta$ in radians, $\\omega$ is measured in radians per second.',
        detail: 'The analogy with one-dimensional kinematics runs through the whole subject: almost every linear quantity has an angular partner. What makes rotation richer is that one $\\omega$ describes the entire body while the ordinary velocity of each point still depends on where that point sits.',
      },
      {
        term: 'Kinematics of a point of the body',
        kind: 'method',
        statement: 'If the body turns through $\\Delta\\theta$, a point at $(x, y)$ is displaced by $\\Delta x = -y\\,\\Delta\\theta$ and $\\Delta y = +x\\,\\Delta\\theta$, so its velocity is $v_x = -\\omega y$ and $v_y = +\\omega x$, with speed $$v = \\sqrt{v_x^2 + v_y^2} = \\omega r.$$',
        detail: 'The point travels the arc $r\\Delta\\theta$, so the distance covered per second is $r\\Delta\\theta/\\Delta t = r\\omega$. A point twice as far from the axis moves twice as fast: the whole body shares one angular velocity but not one speed.',
      },
      {
        term: 'Torque',
        kind: 'definition',
        statement: 'The **torque** about an axis is defined so that the work done in a small rotation is $\\Delta W = \\tau\\,\\Delta\\theta$; substituting the displacements of the point of application of a force gives $$\\tau = xF_y - yF_x = rF_{\\text{tang}} = F \\times (\\text{lever arm}).$$',
        detail: 'The definition is engineered to make the work theorem carry over from force times distance to torque times angle. A purely radial force exerts no twist at all, and neither does a force applied on the axis; the twisting effect grows with both the tangential part of the force and the lever arm. Torque (also called the moment of the force) is always about a chosen axis — move the axis and the torque generally changes.',
      },
      {
        term: 'The two conditions of equilibrium',
        kind: 'law',
        statement: 'A body is in equilibrium only if both the net force and the net torque vanish: $\\sum \\mathbf{F} = 0$ and $\\sum \\tau = 0$, the latter about any single axis in the plane.',
        detail: 'The torque condition follows from the work definition: a small virtual rotation of a balanced object does no work, so $\\Delta W = \\tau\\,\\Delta\\theta = 0$ forces the total torque to vanish. Checking torques about one well-chosen axis is the standard trick of statics problems; we met the translational condition in Chapter 3.',
      },
      {
        term: 'Angular momentum of a particle',
        kind: 'definition',
        statement: 'The **angular momentum** about an axis is the quantity whose time derivative is the torque, $$L = xp_y - yp_x = rp_{\\text{tang}},$$ with $\\tau = dL/dt$.',
        detail: 'Differentiating $xm(dy/dt) - ym(dx/dt)$ reproduces exactly $xm(d^2y/dt^2) - ym(d^2x/dt^2)$, so the torque is the rate of change of something — and that something deserves a name. Only the part of the momentum that goes around the origin counts, and the farther out the line of the momentum extends, the greater the angular momentum. For a planet about the sun the torque vanishes because the force is radial, so $L$ is constant and the radius vector sweeps equal areas in equal times — Kepler’s second law is conservation of angular momentum in words.',
      },
      {
        term: 'Conservation of angular momentum',
        kind: 'law',
        statement: 'For any collection of particles the internal torques cancel pair by pair — provided action and reaction are equal, opposite and along the same line — so $$\\tau_{\\text{ext}} = \\frac{dL_{\\text{tot}}}{dt},$$ and if the external torque is zero the total angular momentum stays constant.',
        detail: 'The stronger reading of Newton’s third law (equal, opposite and colinear) is what makes the cancellation work; Newton may not have said it, but he tacitly assumed it. The theorem holds for rigid and non-rigid collections alike — clouds of stars included — and lets us track the overall rotation without examining the internal machinery.',
      },
      {
        term: 'Moment of inertia and L = Iω',
        kind: 'definition',
        statement: 'For a rigid body turning about a fixed axis the angular momentum is $L = I\\omega$, where the **moment of inertia** is $$I = \\sum_i m_i r_i^2,$$ each mass weighted by the square of its distance from the axis.',
        detail: 'Two objects of equal mass can have very different inertia against turning, depending on how far the mass sits from the axis — the point of Feynman’s weighted-rod demonstration (Fig. 18-4). Unlike mass, the moment of inertia can be changed without adding or removing anything: a skater drawing in her arms keeps the same mass but a much smaller $I$, so $\\omega$ must grow to keep $I\\omega$ constant.',
      },
      {
        term: 'Kinetic energy of rotation',
        kind: 'theorem',
        statement: 'Summing $\\tfrac{1}{2}m_iv_i^2$ over the body with $v_i = \\omega r_i$ gives the rotational twin of $\\tfrac{1}{2}mv^2$: $$T = \\tfrac{1}{2}I\\omega^2.$$',
        detail: 'The turntable exposes the subtlety: pulling the weights in lowers $I$ and raises $\\omega$ at fixed $L = I\\omega$, so the kinetic energy $T = \\tfrac{1}{2}L\\omega$ grows — the extra energy is the work your arms do against the centrifugal force. What is conserved is $I\\omega$, not $I\\omega^2$.',
      },
    ],
    examples: [
      {
        title: 'Moment of inertia of a uniform rod',
        problem: 'A uniform rod of mass $M$ and length $L$ turns about a perpendicular axis through one end. Compute its moment of inertia by integration, then find the value for a parallel axis through the centre.',
        steps: [
          { label: 'Step 1: Slice the rod', text: 'Divide the rod into short pieces of length $dx$. The mass of a piece is proportional to its length, so $dm = M\\,dx/L$ — if $dx$ were the whole rod, the mass would be $M$.' },
          { label: 'Step 2: Add the squared distances', text: 'The moment of inertia about the end is the integral of $x^2$ against the mass elements: $$I = \\int_0^L x^2\\,\\frac{M\\,dx}{L} = \\frac{M}{L}\\cdot\\frac{L^3}{3} = \\frac{ML^2}{3}.$$ The dimensions are mass times length squared, so all the real work was finding the factor $1/3$.' },
          { label: 'Step 3: Move the axis to the centre', text: 'Treat the rod as two half-rods, each of mass $M/2$ and length $L/2$, pivoted at its own end — which is the centre of the whole rod. Each contributes $(M/2)(L/2)^2/3$, so $$I = 2\\cdot\\frac{(M/2)(L/2)^2}{3} = \\frac{ML^2}{12}.$$' },
          { label: 'Step 4: Evaluate for a concrete rod', text: 'For $M = 3.0$ kg and $L = 2.0$ m the end axis gives $4.0$ kg·m² and the centre axis $1.0$ kg·m² — four times easier to spin about its middle than to swing around its end.' },
        ],
        result: '$I_{\\text{end}} = ML^2/3$ and $I_{\\text{centre}} = ML^2/12$.',
      },
      {
        title: 'The parallel-axis theorem, worked and checked',
        problem: 'Show that the moment of inertia about any axis equals the inertia about the parallel axis through the centre of mass plus $Md^2$, and check the theorem against the rod.',
        steps: [
          { label: 'Step 1: Motivate the split', text: 'If the body is carried around the axis without being allowed to turn about itself, the forces needed are as though all the mass sat at the centre of mass — a contribution $MR_{\\text{CM}}^2$. But a really rotating body must also be turned about its own centre, adding $I_c$.' },
          { label: 'Step 2: State and sketch the theorem', text: '$$I = I_c + MR_{\\text{CM}}^2.$$ The algebra is short: write $x_i = x_i^0 + X_{\\text{CM}}$, square, multiply by $m_i$ and sum. The cross term dies because $\\sum m_i x_i^0 = 0$ in centre-of-mass coordinates, leaving exactly the two pieces guessed.' },
          { label: 'Step 3: Check against the rod', text: 'With the axis at one end $R_{\\text{CM}} = L/2$, so the theorem demands $ML^2/3 = ML^2/12 + M(L/2)^2$. Since one-quarter plus one-twelfth is exactly one-third, the check passes with no fundamental error.' },
          { label: 'Step 4: Recover the answer without integrating', text: 'Suppose instead that $I_{\\text{end}} = \\gamma ML^2$ with unknown $\\gamma$. The two-halves argument of the previous example gives $I_{\\text{centre}} = (\\gamma/4)ML^2$, and the parallel-axis theorem then reads $\\gamma = \\gamma/4 + 1/4$, so $\\gamma = 1/3$. As Feynman says, there is always another way to do it.' },
        ],
        result: 'Parallel axis: $I = I_c + MR_{\\text{CM}}^2$; the rod satisfies $1/12 + 1/4 = 1/3$ exactly.',
      },
      {
        title: 'The turntable: angular momentum kept, energy gained',
        problem: 'A student on a frictionless turntable spins at $\\omega_1 = 2.0$ rad/s holding a 3.0-kg mass in each hand at 1.0 m from the axis (body inertia negligible). She pulls the masses in to 0.25 m. Find her new angular velocity, both kinetic energies and the work she does. (Feynman’s demonstration, made numerical.)',
        steps: [
          { label: 'Step 1: Compute the two moments of inertia', text: '$I_1 = 2 \\times 3.0 \\times (1.0)^2 = 6.0$ kg·m² and $I_2 = 2 \\times 3.0 \\times (0.25)^2 = 0.375$ kg·m² — pulling the masses in divides the inertia by sixteen.' },
          { label: 'Step 2: Conserve angular momentum', text: 'No external torque acts about the vertical axis, so $I_1\\omega_1 = I_2\\omega_2$ gives $\\omega_2 = 6.0 \\times 2.0/0.375 = 32$ rad/s — she spins sixteen times faster.' },
          { label: 'Step 3: Compare the energies', text: 'Kinetic energy is $T = \\tfrac{1}{2}I\\omega^2$, so $T_1 = \\tfrac{1}{2}(6.0)(2.0)^2 = 12$ J while $T_2 = \\tfrac{1}{2}(0.375)(32)^2 = 192$ J.' },
          { label: 'Step 4: Where the energy came from', text: 'In the form $T = \\tfrac{1}{2}L\\omega$ with fixed $L = 12$ kg·m²/s, the energy grows in proportion to $\\omega$. The extra 180 J is the work her muscles do pulling the masses inward against the centrifugal force — horizontal motion does no work when you are not spinning, but here the weights fight to fly out.' },
        ],
        result: '$\\omega_2 = 32$ rad/s, $T_1 = 12$ J, $T_2 = 192$ J: angular momentum is conserved, kinetic energy is not — she supplies 180 J.',
      },
    ],
    keyTakeaways: [
      'Rotation about a fixed axis is described by one angle; $\\omega = d\\theta/dt$ and $\\alpha = d\\omega/dt$ mirror $v$ and $a$ exactly.',
      'Every point shares the same $\\omega$ but moves at $v = \\omega r$ — farther from the axis means faster.',
      'Torque is defined through work: $\\Delta W = \\tau\\Delta\\theta$, and $\\tau = xF_y - yF_x = rF_{\\text{tang}} = F$ times its lever arm.',
      'Torque is the rate of change of angular momentum, $L = xp_y - yp_x$; for a rigid body $L = I\\omega$ with $I = \\sum m_ir_i^2$.',
      'If the external torque vanishes, $I\\omega$ stays constant — the principle behind spinning skaters, divers and Feynman’s turntable.',
      'Rotational kinetic energy is $\\tfrac{1}{2}I\\omega^2$; on the turntable it grows because arms do work against centrifugal force.',
      'The parallel-axis theorem $I = I_c + MR_{\\text{CM}}^2$ links any axis to the parallel axis through the centre of mass.',
    ],
    quiz: [
      {
        q: 'Feynman defines torque through the work done in a small rotation $\\Delta\\theta$. What is that definition?',
        options: ['$\\Delta W = \\tau\\Delta\\theta$, so torque times angle plays the role of force times distance', '$\\Delta W = \\tau/\\Delta\\theta$, torque per unit angle', '$\\Delta W = \\tau\\Delta\\theta^2$, torque times angle squared', '$\\Delta W = F\\Delta\\theta$, force times angle regardless of lever arm'],
        answer: 0,
        explanation: 'The definition is arranged so that the work theorem has an absolute analog: force times distance becomes torque times angle. Working out the displacement of the point of application of the force then yields $\\tau = xF_y - yF_x$.',
      },
      {
        q: 'A point of the body sits at $(x, y) = (0.30, 0.40)$ m from the axis and the body turns at $\\omega = 5.0$ rad/s. How fast is the point moving?',
        options: ['1.5 m/s', '2.0 m/s', '2.5 m/s', '5.0 m/s'],
        answer: 2,
        explanation: 'The distance from the axis is $r = \\sqrt{0.30^2 + 0.40^2} = 0.50$ m, and the speed of any point is $v = \\omega r = 5.0 \\times 0.50 = 2.5$ m/s, directed tangentially.',
      },
      {
        q: 'A skater on frictionless ice pulls her arms in. Which quantities stay constant?',
        options: ['Both her kinetic energy and her angular velocity', 'Her angular momentum $I\\omega$ only', 'Her kinetic energy only', 'Her moment of inertia'],
        answer: 1,
        explanation: 'With zero external torque about the vertical, $I\\omega$ cannot change. Pulling in the arms lowers $I$, so $\\omega$ rises — and $\\tfrac{1}{2}I\\omega^2$ rises too, the increase being paid for by the muscular work done against the centrifugal force.',
      },
      {
        q: 'Why does a planet sweep out equal areas in equal times?',
        options: ['The gravitational force is constant in magnitude along the orbit', 'The torque about the sun is zero because the force is radial, so the angular momentum — and with it the areal rate — is constant', 'The planet speeds up near the sun to compensate for the shorter radius', 'All orbits are ellipses'],
        answer: 1,
        explanation: 'A central force exerts no torque about the centre, so $L = mr^2\\omega$ is constant. The area swept per unit time is half the angular momentum per unit mass, so Kepler’s second law is conservation of angular momentum stated in words.',
      },
      {
        q: 'A uniform rod has moment of inertia $ML^2/12$ about a perpendicular axis through its centre. About a parallel axis through one end it is:',
        options: [`$ML^2/12$`, `$ML^2/6$`, `$ML^2/3$`, `$ML^2$`],
        answer: 2,
        explanation: 'By the parallel-axis theorem, $I = ML^2/12 + M(L/2)^2 = ML^2(1/12 + 3/12) = ML^2/3$ — one-quarter plus one-twelfth is exactly one-third, the check Feynman works in the lecture.',
      },
    ],
  },

  // ------------------------------------------------------------------ 5.2
  {
    sectionId: 'hall-ch10-s31',
    readingTime: 10,
    intro: 'Two questions dominate the mechanics of extended bodies: where is the balance point of a complicated object, and how hard is it to turn? Feynman answers the first with the centre of mass — the average position weighted by mass, located by symmetry, by integration or by the sly theorem of Pappus — and the second with the moment of inertia, computed for rods and discs and then multiplied by two theorems that turn one hard integral into a whole table of easy results.',
    objectives: [
      'Locate the centre of mass of discrete and continuous bodies, including by the theorem of Pappus',
      'State the centre-of-mass motion theorem and explain why Newton’s laws reproduce themselves on ever larger scales',
      'Compute moments of inertia of rods, rings, discs and plates from the integral definition',
      'Apply the parallel-axis and perpendicular-axis theorems to generate new moments of inertia from known ones',
      'Analyse rolling motion as translation of the centre of mass plus rotation about it',
    ],
    concepts: [
      {
        term: 'Centre of mass',
        kind: 'definition',
        statement: 'The **centre of mass** is the mass-weighted average position, $$\\mathbf{R}_{\\text{CM}} = \\frac{\\sum_i m_i \\mathbf{r}_i}{M},$$ one vector equation that is really three.',
        detail: 'For equal masses it is the ordinary average of the positions; a double mass counts twice, as though it were split into two single masses. The centre of mass always lies between the extreme coordinates of the body — inside its envelope — but not necessarily in the material: the centre of a hoop is empty space. Symmetry locates it cheaply: a rectangle has two symmetry planes, and they intersect at the centre.',
      },
      {
        term: 'Centre of mass of a compound body',
        kind: 'method',
        statement: 'If the centres of mass and total masses of the pieces are known, the whole satisfies $$M X_{\\text{CM}} = M_A X_A + M_B X_B,$$ so the compound behaves like point masses $M_A$ and $M_B$ sitting at the centres of mass of the pieces.',
        detail: 'Split the sum $\\sum m_ix_i$ into an A part and a B part; each part collapses to its own mass times its own centre-of-mass coordinate. Complicated bodies are therefore assembled from simple ones rather than integrated from scratch.',
      },
      {
        term: 'The CM motion theorem and self-reproducing laws',
        kind: 'theorem',
        statement: 'The external force equals the total mass times the acceleration of the centre of mass, $$\\mathbf{F}_{\\text{ext}} = M\\,\\frac{d^2\\mathbf{R}_{\\text{CM}}}{dt^2}$$ — Newton’s law survives the leap from particles to baseballs, rockets and galaxies.',
        detail: 'A baseball is myriads of interacting particles, yet its centre of mass obeys $F = ma$ exactly. Feynman’s aside: laws that reproduce themselves on larger scales are the ones we discover first, because our observations sit far above the atomic scale. The true atomic laws — quantum mechanics — are different in character, but they approximate laws that then keep reproducing themselves from micro-microgram size up to the size of the earth. In a rocket, the centre of mass of ship plus exhaust never moves at all: the interesting part is propelled against the uninteresting part.',
      },
      {
        term: 'Centre of gravity, pseudo forces and the two special axes',
        kind: 'insight',
        statement: 'In a uniform gravitational field an object balances when supported at its centre of mass, and the pseudo force of an accelerating frame likewise acts at the centre of mass and exerts no torque about it. Hence $\\tau = dL/dt$ holds about a **fixed axis in inertial space** and about **any axis through the centre of mass** — even while the body accelerates.',
        detail: 'The balance proof: the total gravitational torque about the centre of mass is $g\\sum m_ix_i$, which vanishes because the weighted sum of positions measured from the centre of mass is zero. For objects so large that gravity is not parallel across them, the centre of gravity departs slightly from the centre of mass — the two terms deserve separate names. The two special axes are the licence for analysing rolling and projectile-plus-spin problems.',
      },
      {
        term: 'The theorem of Pappus',
        kind: 'method',
        statement: 'A plane area moved through space so that every point travels perpendicular to its own plane generates a volume equal to the **area times the distance its centre of mass moves**: $V = 2\\pi x_{\\text{CM}} \\times (\\text{area})$ for a full turn about an external axis. The twin theorem for a bent wire uses arc length in place of area.',
        detail: 'Curved paths are fine — the outside of the figure goes farther, the inside less, and the effects balance. Rotating a right triangle of base $D$ and height $H$ about its height generates a cone, which is precisely how the triangle’s centre of mass is located at $D/3$; rotating a semicircular disc about its straight edge generates a sphere. Both are worked in the examples below.',
      },
      {
        term: 'The moment-of-inertia integral',
        kind: 'definition',
        statement: 'For rotation about the z-axis, $$I = \\sum_i m_i (x_i^2 + y_i^2) = \\int (x^2 + y^2)\\,dm,$$ and the moments of inertia of the parts of a body simply add.',
        detail: 'Only the perpendicular distance to the axis counts, never the coordinate along the axis. From the lectures’ tables: a thin rod about a central perpendicular axis $ML^2/12$; a flat ring of radii $r_1$ and $r_2$ about its central perpendicular axis $M(r_1^2 + r_2^2)/2$; a sphere about a diameter $2Mr^2/5$. Derived entries include the solid cylinder about its axis $Mr^2/2$, the cylinder about a central diameter $M(r^2/4 + L^2/12)$, and the rectangular plate about a perpendicular through its centre $M(a^2 + b^2)/12$.',
      },
      {
        term: 'The perpendicular-axis theorem',
        kind: 'theorem',
        statement: 'For a plane figure, the moment of inertia about the axis perpendicular to the plane equals the sum of the moments about any two perpendicular axes in the plane through the same point: $$I_z = I_x + I_y.$$',
        detail: 'The proof is one line: $I_z = \\sum m_i(x_i^2 + y_i^2)$ while $I_x = \\sum m_iy_i^2$ and $I_y = \\sum m_ix_i^2$ for a flat body ($z_i = 0$). Feynman’s example: a rectangular plate of width $w$ and length $L$ has $I = M(w^2 + L^2)/12$ about the perpendicular through its centre, because each in-plane axis contributes a rod-like $ML^2/12$.',
      },
      {
        term: 'Rotation about a moving axis',
        kind: 'method',
        statement: 'When an object both translates and spins, the kinetic energy splits as $$T = \\tfrac{1}{2}Mv_{\\text{CM}}^2 + \\tfrac{1}{2}I_{\\text{CM}}\\omega^2,$$ translation of the centre of mass plus rotation relative to it.',
        detail: 'This is the parallel-axis idea read dynamically — carrying the body around the axis requires the mass at the centre of mass, and turning it requires $I_{\\text{CM}}$. For rolling without slipping $v_{\\text{CM}} = \\omega r$, so the effective inertia is $M + I_{\\text{CM}}/r^2$: a hoop rolls as if it carried double mass, a disc as if 1.5 times, a sphere as if 1.4 times. The worked example below turns this into a race.',
      },
      {
        term: 'Coriolis force',
        kind: 'insight',
        statement: 'In a frame rotating at $\\omega$, a mass moving radially at $v_r = dr/dt$ must be pushed sideways, because its angular momentum $m\\omega r^2$ changes: $$\\tau = F_cr = \\frac{d(m\\omega r^2)}{dt} = 2m\\omega r\\frac{dr}{dt}, \\qquad F_c = 2m\\omega v_r.$$',
        detail: 'The force is always at right angles to the velocity, with magnitude $2m\\omega v$, whichever way the object moves — radial or tangential. It is a pseudo force: Joe on the ground sees straight lines; Moe on the carousel sees curved ones and must lean sideways to walk a radius. Section 5.3 rewrites it compactly as $\\mathbf{F}_c = 2m\\mathbf{v} \\times \\boldsymbol{\\omega}$. The same sideways force turned the demonstrator’s body in the turntable experiment of Section 5.1.',
      },
    ],
    examples: [
      {
        title: 'Centres of mass by Pappus: triangle and semicircular disc',
        problem: 'Use the theorem of Pappus to locate the centre of mass of (a) a uniform right triangle of base $D$ and height $H$, and (b) a uniform semicircular disc of radius $r$.',
        steps: [
          { label: 'Step 1: Spin the triangle into a cone', text: 'Rotate the triangle about an axis along its height $H$. The swept volume is the cone $\\pi D^2H/3$, and the centre of mass has travelled a circle of circumference $2\\pi x$.' },
          { label: 'Step 2: Equate and solve', text: '$(2\\pi x)(\\tfrac{1}{2}HD) = \\pi D^2H/3$ gives $x = D/3$: the centre of mass sits one-third of the base in from the axis. By symmetry $y = H/3$ — the point where the three medians meet, one-third of the way along each.' },
          { label: 'Step 3: A numerical triangle', text: 'For $D = 30$ cm and $H = 20$ cm the centre of mass is 10 cm from the height axis and about 6.7 cm above the base.' },
          { label: 'Step 4: Spin the half-disc into a sphere', text: 'A semicircular disc of area $\\pi r^2/2$ rotated about its straight edge sweeps the sphere of volume $4\\pi r^3/3$. So $(2\\pi x)(\\pi r^2/2) = 4\\pi r^3/3$ and $$x = \\frac{4r}{3\\pi}.$$ For $r = 0.30$ m the balance point is $4(0.30)/(3\\pi) = 0.127$ m from the flat edge.' },
          { label: 'Step 5: The wire contrast', text: 'Rotate a semicircular wire about its diameter instead: arc length $\\pi r$ sweeps the sphere surface $4\\pi r^2$, so $(2\\pi x)(\\pi r) = 4\\pi r^2$ and $x = 2r/\\pi = 0.64r$ — farther out than the disc’s $0.42r$, because the wire’s mass all sits near the rim.' },
        ],
        result: 'Triangle: $x = D/3$, $y = H/3$. Semicircular disc: $4r/3\\pi$ from the flat edge; the semicircular wire: $2r/\\pi$.',
      },
      {
        title: 'Moment of inertia of a solid disc',
        problem: 'Compute the moment of inertia of a uniform disc of mass $M$ and radius $r$ about its symmetry axis, and evaluate for $M = 2.0$ kg and $r = 0.25$ m.',
        steps: [
          { label: 'Step 1: Slice into rings', text: 'A ring of radius $s$ and thickness $ds$ carries mass proportional to its area: $dm = (M/\\pi r^2)(2\\pi s\\,ds)$.' },
          { label: 'Step 2: Integrate', text: `$$I = \\int_0^r s^2\\,dm = \\frac{2M}{r^2}\\int_0^r s^3\\,ds = \\frac{2M}{r^2}\\cdot\\frac{r^4}{4} = \\tfrac{1}{2}Mr^2.$$` },
          { label: 'Step 3: Cross-check with the lectures’ tables', text: 'Table 19-1 lists the flat ring of radii $r_1$ and $r_2$ as $M(r_1^2 + r_2^2)/2$; setting $r_1 = 0$, $r_2 = r$ reproduces the solid disc, and Table 19-2’s right circular cylinder about its own axis is likewise $Mr^2/2$.' },
          { label: 'Step 4: Evaluate', text: 'For $M = 2.0$ kg and $r = 0.25$ m: $I = \\tfrac{1}{2}(2.0)(0.25)^2 = 0.0625$ kg·m².' },
          { label: 'Step 5: Bonus — the diameter axis', text: 'By the perpendicular-axis theorem the same disc about any diameter has half of this, $Mr^2/4 = 0.031$ kg·m² — the value used in the principal-axis example of Section 5.3.' },
        ],
        result: '$I = Mr^2/2$ about the symmetry axis; $Mr^2/4$ about any diameter.',
      },
      {
        title: 'The rolling race',
        problem: 'A hoop, a uniform disc and a uniform sphere roll without slipping from rest down a 30° incline. Compare their accelerations down the slope. (Built from Table 19-1 of the lectures.)',
        steps: [
          { label: 'Step 1: Write the energy', text: 'Descending a distance $s$ along the slope drops the centre of mass by $s\\sin 30° = s/2$, and rolling couples the motions through $v = \\omega r$. Conservation of Chapter 4 gives $Mgs/2 = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}I(v/r)^2$.' },
          { label: 'Step 2: Isolate the effective inertia', text: 'The speed at the bottom is $v^2 = gs/(1 + I/Mr^2)$, and comparing with the constant-acceleration form $v^2 = 2as$ gives $$a = \\frac{g\\sin 30°}{1 + I/Mr^2}.$$' },
          { label: 'Step 3: Insert the three inertias', text: 'Hoop: $I = Mr^2$, so $a = 4.9/2 = 2.45$ m/s². Disc: $I = Mr^2/2$, so $a = 4.9/1.5 = 3.27$ m/s². Sphere: $I = 2Mr^2/5$, so $a = 4.9/1.4 = 3.50$ m/s².' },
          { label: 'Step 4: Read the physics', text: 'The sphere always wins and the hoop always loses. The hoop spends half of every joule of gravitational energy on turning itself, the disc a third, the sphere only two-sevenths — and none of the answers depends on the mass or the radius, only on the shape factor $I/Mr^2$.' },
        ],
        result: '$a(\\text{hoop}) = 2.45$, $a(\\text{disc}) = 3.27$, $a(\\text{sphere}) = 3.50$ m/s² — sphere first, hoop last, regardless of $M$ and $r$.',
      },
    ],
    keyTakeaways: [
      'The centre of mass is the mass-weighted average position; compound bodies reduce to point masses at the pieces’ centres of mass.',
      '$\\mathbf{F}_{\\text{ext}} = M\\,d^2\\mathbf{R}_{\\text{CM}}/dt^2$ for any system — Newton’s laws are self-reproducing from atomic to astronomical scales.',
      '$\\tau = dL/dt$ is valid about a fixed axis in inertial space or about any axis through the centre of mass, even an accelerating one.',
      'Pappus trades centre-of-mass problems for volumes and surfaces: triangle $D/3$, semicircular disc $4r/3\\pi$, semicircular wire $2r/\\pi$.',
      'Moments of inertia add over parts; the standard table values are rod $ML^2/12$, ring $M(r_1^2+r_2^2)/2$, disc $Mr^2/2$, sphere $2Mr^2/5$.',
      'Parallel axis ($I = I_c + Md^2$) and perpendicular axis ($I_z = I_x + I_y$) generate whole tables from a few integrals.',
      'Rolling splits the energy as $\\tfrac{1}{2}Mv_{\\text{CM}}^2 + \\tfrac{1}{2}I_{\\text{CM}}\\omega^2$ — a race decided purely by the shape factor $I/Mr^2$.',
    ],
    quiz: [
      {
        q: 'Rotating a right triangle of base $D$ about its height $H$ generates a cone of volume $\\pi D^2H/3$. What does the theorem of Pappus give for the triangle’s centre-of-mass distance $x$ from that axis?',
        options: [`$x = D/4$`, `$x = D/3$`, `$x = D/2$`, `$x = 2D/3$`],
        answer: 1,
        explanation: 'The swept volume equals the area times the distance the centre of mass travels: $(2\\pi x)(\\tfrac{1}{2}HD) = \\pi D^2H/3$ gives $x = D/3$ — and by the median argument $y = H/3$ as well.',
      },
      {
        q: 'Where is the centre of mass of a uniform hoop?',
        options: ['On the material, at the top of the hoop', 'At the geometrical centre, in the empty middle', 'Halfway between the centre and the rim', 'Undefined for a curved body'],
        answer: 1,
        explanation: 'The centre of mass always lies inside the envelope of the body but need not be in the material: for a hoop all symmetry arguments place it at the centre, in the hole.',
      },
      {
        q: 'A uniform disc has $I = Mr^2/2$ about its symmetry axis. About a diameter in its plane, the perpendicular-axis theorem gives:',
        options: [`$Mr^2$`, `$Mr^2/2$`, `$Mr^2/4$`, `$Mr^2/8$`],
        answer: 2,
        explanation: 'For a plane figure $I_z = I_x + I_y$, and by symmetry the two in-plane diameters are equal: $Mr^2/2 = 2I_{\\text{diam}}$, so $I_{\\text{diam}} = Mr^2/4$.',
      },
      {
        q: 'A hoop, a disc and a sphere of equal mass and radius roll without slipping down the same incline. In what order do they arrive?',
        options: ['Hoop, disc, sphere — heaviest inertia first', 'Sphere, disc, hoop — smallest $I/Mr^2$ first', 'All arrive together', 'Disc, sphere, hoop'],
        answer: 1,
        explanation: 'The acceleration is $g\\sin\\theta/(1 + I/Mr^2)$: the sphere ($2/5$) beats the disc ($1/2$) beats the hoop ($1$). The less energy diverted into spinning, the more goes into translation.',
      },
      {
        q: 'A walker moves radially outward at speed $v$ on a carousel rotating at $\\omega$. The sideways Coriolis force on a mass $m$ has magnitude:',
        options: [`$m\\omega v$`, `$m\\omega^2 r$`, `$2m\\omega v$`, `$2m\\omega^2 r$`],
        answer: 2,
        explanation: 'The angular momentum $m\\omega r^2$ grows as the walker moves out, and the required torque per unit radius gives $F_c = 2m\\omega v_r$ — always at right angles to the velocity.',
      },
    ],
  },

  // ------------------------------------------------------------------ 5.3
  {
    sectionId: 'hall-ch11-s14',
    readingTime: 10,
    intro: 'Take the wheel off the page and into space, and rotation stops being a story about one angle. Torque and angular momentum become vectors built with the cross product; a gyroscope pushed downward by gravity moves sideways instead of falling; and even angular velocity turns out to be hiding a subtlety — it is not quite an honest vector. This is Feynman’s favourite demonstration of mechanics that looks like a miracle but is only Newton’s laws, thought all the way through.',
    objectives: [
      'Justify treating torque and angular momentum as vectors in three dimensions',
      'State the cross product, its algebraic rules, and the distinction between polar and axial vectors',
      'Write the rotation equations compactly as $\\tau = \\mathbf{r} \\times \\mathbf{F}$, $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$ and $\\tau = d\\mathbf{L}/dt$',
      'Derive the gyroscope precession relation $\\boldsymbol{\\tau} = \\boldsymbol{\\Omega} \\times \\mathbf{L}$ and explain why a released top neither falls nor stands still',
      'Explain principal axes and why $\\mathbf{L}$ and $\\boldsymbol{\\omega}$ need not be parallel for a general body',
    ],
    concepts: [
      {
        term: 'Torques live on planes',
        kind: 'definition',
        statement: 'The combination $xF_y - yF_x$ is the torque in the xy-plane — the torque about the z-axis; cyclically, $yF_z - zF_y$ and $zF_x - xF_z$ are the torques about the x- and y-axes, and the torque about any other plane is a linear combination of these three.',
        detail: 'The signs must follow the cyclic convention — interchange $x \\to y \\to z \\to x$ — or the answers come out wrong. One might fear an infinite family of equations, one per possible plane; the rescue is that three independent planes carry all the rest.',
      },
      {
        term: 'Torque transforms like a vector',
        kind: 'theorem',
        statement: 'Under a rotation of the coordinate axes, the three plane-torques mix exactly as the components of a vector: the z-component stays, while the x- and y-components combine as $\\tau_x\\cos\\theta + \\tau_y\\sin\\theta$ and $\\tau_y\\cos\\theta - \\tau_x\\sin\\theta$. A twist on a plane can therefore be represented by an arrow at right angles to that plane.',
        detail: 'Feynman works the substitution for axes turned through an angle in the xy-plane and finds the three transformation laws by brute algebra. It is a piece of good luck specific to three dimensions: in two dimensions torque is an ordinary scalar; in four dimensions there would be six independent planes of rotation, and no single vector could represent them.',
      },
      {
        term: 'The cross product',
        kind: 'definition',
        statement: 'For vectors $\\mathbf{a}$ and $\\mathbf{b}$, the vector product $\\mathbf{c} = \\mathbf{a} \\times \\mathbf{b}$ has components $c_x = a_yb_z - a_zb_y$, $c_y = a_zb_x - a_xb_z$, $c_z = a_xb_y - a_yb_x$: $\\mathbf{c}$ is perpendicular to both, with magnitude $|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$ and the right-hand-screw sense.',
        detail: 'The product is anticommutative, $\\mathbf{b} \\times \\mathbf{a} = -\\mathbf{a} \\times \\mathbf{b}$, so $\\mathbf{a} \\times \\mathbf{a} = 0$. The useful rules: $\\mathbf{a} \\times (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\times \\mathbf{b} + \\mathbf{a} \\times \\mathbf{c}$; $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = (\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c}$; $\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{c}) = \\mathbf{b}(\\mathbf{a} \\cdot \\mathbf{c}) - \\mathbf{c}(\\mathbf{a} \\cdot \\mathbf{b})$; and $\\mathbf{a} \\cdot (\\mathbf{a} \\times \\mathbf{b}) = 0$.',
      },
      {
        term: 'Polar and axial vectors',
        kind: 'definition',
        statement: 'Honest (**polar**) vectors such as $\\mathbf{r}$, $\\mathbf{F}$, $\\mathbf{p}$, $\\mathbf{v}$ and $\\mathbf{E}$ reverse under a mirror reflection; vectors defined through one cross product — $\\boldsymbol{\\tau}$, $\\mathbf{L}$, $\\boldsymbol{\\omega}$ and $\\mathbf{B}$ — are **axial vectors, or pseudovectors**, and do not, a permanent reminder of the right-hand rule buried in their definition.',
        detail: 'The distinction is not pedantry: mirror symmetry of physical laws is testable, and it returns with a vengeance in the parity experiments of nuclear physics. Here Feynman keeps the point qualitative — the cross product manufactures a slightly artificial kind of vector.',
      },
      {
        term: 'The rotation equations in vector form',
        kind: 'law',
        statement: 'All of plane rotation compresses into $$\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}, \\qquad \\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}, \\qquad \\boldsymbol{\\tau}_{\\text{ext}} = \\frac{d\\mathbf{L}_{\\text{tot}}}{dt},$$ with the total vector angular momentum conserved whenever the external torque vanishes.',
        detail: 'The velocity of a point of a rotating rigid body is $\\mathbf{v} = \\boldsymbol{\\omega} \\times \\mathbf{r}$, the power delivered by a torque is $P = \\boldsymbol{\\tau} \\cdot \\boldsymbol{\\omega}$, and angular velocity itself composes like a vector: a body turning about two axes at once simply turns about a third. The Coriolis force of Section 5.2 becomes $\\mathbf{F}_c = 2m\\mathbf{v} \\times \\boldsymbol{\\omega}$.',
      },
      {
        term: 'The gyroscope on the swivel chair',
        kind: 'insight',
        statement: 'Sitting on a frictionless swivel chair holding a spinning wheel with its axis horizontal, and turning the axis to the vertical, forces you and the chair to rotate the opposite way: the vertical angular momentum of the whole system started at zero and must remain zero.',
        detail: 'Angular momentum about the vertical axis cannot change because the frictionless pivot exerts no torque about it. The demonstration is conservation of angular momentum with the demonstrator’s own body as the counterweight — the first and simplest of the gyroscope phenomena.',
      },
      {
        term: 'Precession: τ = Ω × L',
        kind: 'law',
        statement: 'Tilting a spinning wheel’s axis at rate $\\boldsymbol{\\Omega}$ swings the angular momentum vector through $\\Delta L = L_0\\Delta\\theta$, so a torque of magnitude $\\tau = \\Omega L_0$ is required, directed as $$\\boldsymbol{\\tau} = \\boldsymbol{\\Omega} \\times \\mathbf{L}_0.$$ A top under gravity arranges exactly this: the weight’s horizontal torque makes the axis sweep a cone at $\\Omega = \\tau/L_0$ instead of the top falling.',
        detail: 'When you try to turn the wheel’s axis, your hands supply the couple $F$ and $-F$ at the axle ends, and Newton’s third law returns an equal and opposite torque to you — which spins your body the other way. For the spinning top, gravity acting at the centre of mass about the point of contact supplies the torque; the remarkable result is that the precession is at right angles to the force that produces it.',
      },
      {
        term: 'Nutation',
        kind: 'insight',
        statement: 'A gyroscope released from rest does fall at first; the falling start then overshoots into precession, and the tip of the axis traces a **cycloid** — the path of a pebble stuck in a tyre tread — which friction in the bearings damps into smooth precession with the axis settled slightly low.',
        detail: 'The steady precession equation alone cannot explain the sideways start; the general motion contains the wobble, called nutation. The axis must dip a little so that the spin angular momentum acquires the small vertical component that precession requires: the gyro has to yield to gravity in order to go around. The slower the spin, the more visible the nutation.',
      },
      {
        term: 'Principal axes',
        kind: 'theorem',
        statement: 'Every rigid body — even an irregular one like a potato — has three mutually perpendicular axes through the centre of mass about which the moments of inertia are greatest, least and intermediate; about these **principal axes** alone is $\\mathbf{L}$ parallel to $\\boldsymbol{\\omega}$: $$\\mathbf{L} = A\\omega_x\\,\\hat{\\mathbf{i}} + B\\omega_y\\,\\hat{\\mathbf{j}} + C\\omega_z\\,\\hat{\\mathbf{k}}, \\qquad \\text{KE} = \\tfrac{1}{2}(A\\omega_x^2 + B\\omega_y^2 + C\\omega_z^2) = \\tfrac{1}{2}\\mathbf{L} \\cdot \\boldsymbol{\\omega}.$$',
        detail: 'A wheel mounted lopsided on its shaft shakes the bearings because its $\\boldsymbol{\\omega}$ has components along axes with different inertias: the resulting $\\mathbf{L}$ points off-axis, and turning that misaligned $\\mathbf{L}$ through space demands torque from the bearings. Symmetry axes are principal axes — a disc carries $C = Mr^2/2$ on its symmetry axis and $A = B = Mr^2/4$ on any diameter.',
      },
    ],
    examples: [
      {
        title: 'Precession rate of a gyroscope',
        problem: 'A bicycle-wheel gyroscope has $I = 0.40$ kg·m² and spins at $\\omega = 25$ rad/s. With its axle pivoted at one end, the 5.0-kg wheel hangs with its centre of mass $d = 0.20$ m from the pivot. Find the precession rate. (Feynman’s spinning-top arrangement, made numerical.)',
        steps: [
          { label: 'Step 1: Angular momentum along the spin axis', text: '$L_0 = I\\omega = 0.40 \\times 25 = 10$ kg·m²/s, directed along the axle.' },
          { label: 'Step 2: Torque from gravity', text: 'The weight acts at the centre of mass, a distance $d = 0.20$ m from the pivot: $\\tau = mgd = 5.0 \\times 9.8 \\times 0.20 = 9.8$ N·m, horizontal and perpendicular to the axle.' },
          { label: 'Step 3: Precession from the vector relation', text: 'With $\\boldsymbol{\\Omega}$ vertical and $\\mathbf{L}_0$ horizontal, the magnitudes obey $\\tau = \\Omega L_0$, so $$\\Omega = \\frac{\\tau}{L_0} = \\frac{9.8}{10} = 0.98 \\approx 1 \\text{ rad/s}.$$' },
          { label: 'Step 4: Sanity check', text: 'The axis sweeps its cone once every $2\\pi/0.98 = 6.4$ s — leisurely, as gyroscope demonstrations are. And since $\\Omega \\propto 1/\\omega$, a faster spin precesses more stubbornly still.' },
        ],
        result: '$\\Omega \\approx 0.98$ rad/s — one turn of the precession cone in about 6.4 s.',
      },
      {
        title: 'The swivel chair, booked',
        problem: 'The same wheel ($L = 10$ kg·m²/s along its axle) is held by a demonstrator on a frictionless swivel chair, his body-plus-chair moment of inertia about the vertical being $4.0$ kg·m². He turns the axle from horizontal to vertical. What happens? (Fig. 20-1, made numerical.)',
        steps: [
          { label: 'Step 1: Vertical angular momentum starts at zero', text: 'With the axle horizontal, the wheel’s $\\mathbf{L}$ is horizontal, so the vertical component of the total angular momentum of wheel + man + chair is zero.' },
          { label: 'Step 2: Turn the axis up', text: 'When the axle points vertically, the wheel carries vertical angular momentum — all $10$ kg·m²/s of it, if turned so the spin points up.' },
          { label: 'Step 3: The chair must compensate', text: 'The pivot exerts no vertical torque, so the total vertical component must stay zero: the man and chair acquire $-10$ kg·m²/s, rotating at $\\omega = 10/4.0 = 2.5$ rad/s in the sense opposite to the wheel’s spin.' },
          { label: 'Step 4: Feel the reaction', text: 'The torque that tilts the wheel is supplied by his hands pushing on the axle ends; Newton’s third law hands the equal and opposite torque to him, and his body feels the wheel fight the turn.' },
        ],
        result: 'Chair and demonstrator rotate at $2.5$ rad/s opposite to the wheel’s spin — vertical angular momentum stays zero.',
      },
      {
        title: 'A lopsided wheel: L not parallel to ω',
        problem: 'A uniform disc ($M = 2.0$ kg, $r = 0.30$ m) spins at $\\omega = 10$ rad/s about an axis through its centre but tilted 30° from the symmetry axis. Find $\\mathbf{L}$ and the rotational kinetic energy. (Fig. 20-6, made numerical.)',
        steps: [
          { label: 'Step 1: Principal moments of the disc', text: 'About the symmetry axis $C = Mr^2/2 = 0.090$ kg·m²; about any diameter $A = B = Mr^2/4 = 0.045$ kg·m² — the perpendicular-axis result of Section 5.2.' },
          { label: 'Step 2: Resolve the rotation', text: 'With the tilt in the xz-plane, $\\omega_z = 10\\cos 30° = 8.66$ rad/s and $\\omega_x = 10\\sin 30° = 5.0$ rad/s.' },
          { label: 'Step 3: Build L from the components', text: '$\\mathbf{L} = A\\omega_x\\,\\hat{\\mathbf{i}} + C\\omega_z\\,\\hat{\\mathbf{k}} = (0.045)(5.0)\\,\\hat{\\mathbf{i}} + (0.090)(8.66)\\,\\hat{\\mathbf{k}} = 0.225\\,\\hat{\\mathbf{i}} + 0.779\\,\\hat{\\mathbf{k}}$ kg·m²/s.' },
          { label: 'Step 4: Compare directions', text: '$\\boldsymbol{\\omega}$ is 30° from the symmetry axis, but $\\mathbf{L}$ is only $\\tan^{-1}(0.225/0.779) = 16°$ from it: angular momentum and angular velocity are not parallel, because the two principal inertias differ.' },
          { label: 'Step 5: Energy', text: '$\\text{KE} = \\tfrac{1}{2}(A\\omega_x^2 + C\\omega_z^2) = \\tfrac{1}{2}(0.045 \\times 25 + 0.090 \\times 75) = 3.9$ J — equally $\\tfrac{1}{2}\\mathbf{L} \\cdot \\boldsymbol{\\omega}$. The bearings must supply whatever torque keeps this misaligned $\\mathbf{L}$ turning: the shaking of a lopsided wheel.' },
        ],
        result: '$\\mathbf{L} = (0.225, 0, 0.779)$ kg·m²/s at 16° from the axis while $\\boldsymbol{\\omega}$ sits at 30°; KE ≈ 3.9 J.',
      },
    ],
    keyTakeaways: [
      'The torque about any plane is a combination of the three plane-torques, and those three transform exactly like vector components — a lucky feature of three dimensions.',
      '$\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$, $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$ and $\\boldsymbol{\\tau}_{\\text{ext}} = d\\mathbf{L}_{\\text{tot}}/dt$ compress all of rotation into three vector equations.',
      'Cross products are anticommutative and produce pseudovectors: $\\boldsymbol{\\tau}$, $\\mathbf{L}$, $\\boldsymbol{\\omega}$ and $\\mathbf{B}$ differ from polar vectors under mirror reflection.',
      'A torque applied at right angles to a spinning body’s angular momentum produces precession: $\\boldsymbol{\\tau} = \\boldsymbol{\\Omega} \\times \\mathbf{L}_0$, with $\\Omega = \\tau/L_0$ when the three are mutually perpendicular.',
      'A released gyroscope falls a little, nutates in cycloidal loops, and settles slightly low — it must dip to find the vertical angular momentum that steady precession requires.',
      'In general $\\mathbf{L}$ is not parallel to $\\boldsymbol{\\omega}$; only about principal axes do they align, with $\\mathbf{L} = A\\omega_x\\hat{\\mathbf{i}} + B\\omega_y\\hat{\\mathbf{j}} + C\\omega_z\\hat{\\mathbf{k}}$ and $\\text{KE} = \\tfrac{1}{2}\\mathbf{L} \\cdot \\boldsymbol{\\omega}$.',
    ],
    quiz: [
      {
        q: 'Why can a torque, which is fundamentally a twist on a plane, be represented by a vector in three dimensions?',
        options: ['Because all forces are vectors', 'Because the three plane-torques transform under rotation of axes exactly like the components of a vector — a special property of three dimensions', 'Because torque is always perpendicular to the force', 'Because every plane has a unique normal direction and magnitude, which happens to obey the vector transformation laws'],
        answer: 1,
        explanation: 'Feynman substitutes rotated coordinates into the plane-torque expressions and finds the transformation laws of a vector. The luck is specific: in two dimensions torque is a scalar, and in four dimensions six independent planes would exist — no single vector could carry them.',
      },
      {
        q: 'A spinning top precesses because gravity exerts a horizontal torque on it. The precession angular velocity $\\boldsymbol{\\Omega}$ points:',
        options: ['Along the torque vector, so the top falls sideways', 'Vertically — at right angles to both the torque and the spin angular momentum, sweeping a cone about the vertical', 'Vertically downward, like any falling object', 'Along the spin angular momentum $\\mathbf{L}_0$'],
        answer: 1,
        explanation: 'The relation $\\boldsymbol{\\tau} = \\boldsymbol{\\Omega} \\times \\mathbf{L}_0$ forces $\\boldsymbol{\\Omega}$ to be perpendicular to the horizontal torque; only the vertical direction is perpendicular to a horizontal torque while keeping the geometry consistent, so the axis sweeps a cone.',
      },
      {
        q: 'Which of the following is a pseudovector (axial vector) rather than an honest polar vector?',
        options: ['Linear momentum $\\mathbf{p}$', 'The electric field $\\mathbf{E}$', 'Angular momentum $\\mathbf{L}$', 'The position vector $\\mathbf{r}$'],
        answer: 2,
        explanation: 'Quantities defined through a single cross product — torque, angular momentum, angular velocity and the magnetic field — are pseudovectors: under a mirror reflection they behave differently from polar vectors such as $\\mathbf{p}$, $\\mathbf{E}$, $\\mathbf{r}$, $\\mathbf{F}$ and $\\mathbf{v}$.',
      },
      {
        q: 'If a gyroscope’s spin angular velocity is doubled while the gravitational torque on it is unchanged, its precession rate:',
        options: ['Doubles', 'Halves', 'Is unchanged', 'Quadruples'],
        answer: 1,
        explanation: 'The precession rate is $\\Omega = \\tau/L_0 = \\tau/I\\omega$: doubling the spin angular momentum halves the rate. Fast gyroscopes precess slowly and resist turning — the property that makes them useful as stabilizers.',
      },
      {
        q: 'For a general rigid body, the angular momentum $\\mathbf{L}$ is parallel to the angular velocity $\\boldsymbol{\\omega}$:',
        options: ['Always, by definition', 'Only when the rotation is about one of the three principal axes', 'Only for perfectly spherical bodies', 'Never for a real body'],
        answer: 1,
        explanation: 'Off a principal axis, the different principal moments weight the components of $\\boldsymbol{\\omega}$ differently, so $\\mathbf{L}$ points elsewhere — which is why a lopsided wheel shakes its bearings. About a principal axis, $\\mathbf{L}$ and $\\boldsymbol{\\omega}$ are parallel by construction.',
      },
      // PYQ-pattern: JEE Mains 2021 — rotational dynamics (rephrased, values changed)
      {
        q: 'A uniform rod of mass $M = 3.0 \\text{ kg}$ and length $L = 2.0 \\text{ m}$ spins about a fixed axis through one end, perpendicular to the rod. The moment of inertia about this axis is:',
        options: [`$\\frac{1}{3}ML^{2} = 4.0 \\text{ kg}\\cdot\\text{m}^{2}$`, `$\\frac{1}{12}ML^{2} = 1.0 \\text{ kg}\\cdot\\text{m}^{2}$`, `$\\frac{1}{2}ML^{2} = 6.0 \\text{ kg}\\cdot\\text{m}^{2}$`, `$ML^{2} = 12 \\text{ kg}\\cdot\\text{m}^{2}$`],
        answer: 0,
        explanation: 'Step 1: Given $M = 3.0 \\text{ kg}$ and $L = 2.0 \\text{ m}$ with the axis at the end. Step 2: Governing law is the parallel-axis theorem $I = I_{cm} + Md^{2}$ with $I_{cm} = \\frac{1}{12}ML^{2}$ and shift $d = \\frac{L}{2}$. Step 3: Key equation: $$I_{end} = \\frac{1}{12}ML^{2} + M\\left(\\frac{L}{2}\\right)^{2} = \\frac{1}{3}ML^{2}.$$ Step 4: Numerics give $I = \\frac{1}{3}(3.0)(2.0)^{2} = 4.0 \\text{ kg}\\cdot\\text{m}^{2}$, and the unit check $[M][L]^{2}$ matches inertia. Step 5: Distractors fail because $\\frac{1}{12}ML^{2}$ is the center-axis value, $\\frac{1}{2}ML^{2}$ belongs to a disc about its axle, and $ML^{2}$ drops the fraction entirely. Step 6: Conclude the end-axis inertia is **$4.0 \\text{ kg}\\cdot\\text{m}^{2}$**.',
      },
      // PYQ-pattern: JEE Advanced 2018 — rotational dynamics (rephrased, values changed)
      {
        q: 'A uniform disc of mass $M = 4.0 \\text{ kg}$ and radius $R = 0.50 \\text{ m}$ turns freely about its central axle. A constant tangential force $F = 20 \\text{ N}$ applied at the rim produces angular acceleration:',
        options: [`$10 \\text{ rad/s}^{2}$`, `$20 \\text{ rad/s}^{2}$`, `$5.0 \\text{ rad/s}^{2}$`, `$40 \\text{ rad/s}^{2}$`],
        answer: 1,
        explanation: 'Step 1: Given $M = 4.0 \\text{ kg}$, $R = 0.50 \\text{ m}$, rim force $F = 20 \\text{ N}$ acting tangentially. Step 2: Governing laws are $\\tau = FR$ for the lever arm and $\\tau = I\\alpha$ with disc inertia $I = \\frac{1}{2}MR^{2}$. Step 3: Key equation: $$\\alpha = \\frac{\\tau}{I} = \\frac{FR}{\\frac{1}{2}MR^{2}} = \\frac{2F}{MR}.$$ Step 4: Numerics give $I = \\frac{1}{2}(4.0)(0.50)^{2} = 0.50 \\text{ kg}\\cdot\\text{m}^{2}$ and $\\tau = (20)(0.50) = 10 \\text{ N}\\cdot\\text{m}$, so $\\alpha = 10/0.50 = 20 \\text{ rad/s}^{2}$; the unit check $[\\tau]/[I] = \\text{s}^{-2}$ is correct. Step 5: Distractors fail because $10$ uses the hoop inertia $MR^{2}$, $5.0$ halves once more, and $40$ uses the diameter for the lever arm instead of the radius. Step 6: Conclude **$\\alpha = 20 \\text{ rad/s}^{2}$**.',
      },
      // PYQ-pattern: GATE PH 2019 — rigid body rotation (rephrased, values changed)
      {
        q: 'A skater spins with $I_{1} = 3.0 \\text{ kg}\\cdot\\text{m}^{2}$ at $\\omega_{1} = 2.0 \\text{ rad/s}$, then pulls the arms in to $I_{2} = 1.2 \\text{ kg}\\cdot\\text{m}^{2}$ with no external torque. The new spin rate and the kinetic energy change are:',
        options: ['$0.80 \\text{ rad/s}$, energy lost', '$2.0 \\text{ rad/s}$, energy unchanged', '$5.0 \\text{ rad/s}$, energy gained', '$7.2 \\text{ rad/s}$, energy gained'],
        answer: 2,
        explanation: 'Step 1: Given $I_{1} = 3.0$, $\\omega_{1} = 2.0$, $I_{2} = 1.2$ in SI units, with zero external torque. Step 2: Governing law is conservation $L = I\\omega = \\text{constant}$, so $\\omega_{2} = I_{1}\\omega_{1}/I_{2}$. Step 3: Key equation: $$I_{1}\\omega_{1} = I_{2}\\omega_{2} \\quad\\Rightarrow\\quad \\omega_{2} = \\frac{(3.0)(2.0)}{1.2} = 5.0 \\text{ rad/s}.$$ Step 4: Energies are $K_{1} = \\frac{1}{2}(3.0)(2.0)^{2} = 6.0 \\text{ J}$ and $K_{2} = \\frac{1}{2}(1.2)(5.0)^{2} = 15 \\text{ J}$, so energy rises through internal work; units of $I\\omega^{2}$ are joules. Step 5: Distractors fail because $0.80$ inverts the inertia ratio, $2.0$ ignores conservation, and $7.2$ multiplies the inertias instead of dividing. Step 6: Conclude the skater reaches **$5.0 \\text{ rad/s}$ with gained kinetic energy**.',
      },
      // PYQ-pattern: JEE Mains 2020 — rolling without slipping (rephrased, values changed)
      {
        q: 'A uniform disc of mass $m$ released from rest rolls without slipping down a ramp from height $h = 3.0 \\text{ m}$. With $g = 9.8 \\text{ m/s}^{2}$, the speed at the bottom is:',
        options: [`$7.7 \\text{ m/s}$`, `$5.4 \\text{ m/s}$`, `$3.1 \\text{ m/s}$`, `$6.3 \\text{ m/s}$`],
        answer: 3,
        explanation: 'Step 1: Given drop $h = 3.0 \\text{ m}$ and rolling constraint $v = \\omega r$ with no slip. Step 2: Governing law is energy sharing $mgh = \\frac{1}{2}mv^{2} + \\frac{1}{2}I\\omega^{2}$ with $I = \\frac{1}{2}mr^{2}$. Step 3: Key equation: $$mgh = \\frac{1}{2}mv^{2} + \\frac{1}{4}mv^{2} = \\frac{3}{4}mv^{2} \\quad\\Rightarrow\\quad v = \\sqrt{\\frac{4gh}{3}}.$$ Step 4: Numerics give $v = \\sqrt{4(9.8)(3.0)/3} = \\sqrt{39.2} \\approx 6.3 \\text{ m/s}$; units of $\\sqrt{gh}$ are $\\text{m/s}$. Step 5: Distractors fail because $7.7$ is pure sliding $\\sqrt{2gh}$, $5.4$ is the hoop result $\\sqrt{gh}$, and $3.1$ drops a factor of two in the algebra. Step 6: Conclude the rolling disc arrives at **$6.3 \\text{ m/s}$**.',
      },
      // PYQ-pattern: JEE Advanced 2022 — gyroscope precession (rephrased, values changed)
      {
        q: 'A gyroscope has spin angular momentum $L_{0} = 8.0 \\text{ J}\\cdot\\text{s}$ and the weight supplies torque $\\tau = 2.4 \\text{ N}\\cdot\\text{m}$ at right angles to the spin. The steady precession rate is:',
        options: [`$0.30 \\text{ rad/s}$`, `$3.3 \\text{ rad/s}$`, `$19 \\text{ rad/s}$`, `$0.15 \\text{ rad/s}$`],
        answer: 0,
        explanation: 'Step 1: Given $L_{0} = 8.0 \\text{ J}\\cdot\\text{s}$ and perpendicular torque $\\tau = 2.4 \\text{ N}\\cdot\\text{m}$. Step 2: Governing law for steady precession is $\\tau = \\Omega L_{0}$ when torque is at right angles to spin. Step 3: Key equation: $$\\Omega = \\frac{\\tau}{L_{0}} = \\frac{2.4}{8.0} = 0.30 \\text{ rad/s}.$$ Step 4: Unit check gives $\\text{N}\\cdot\\text{m}$ over $\\text{J}\\cdot\\text{s}$, which is $\\text{s}^{-1}$ as required for a rate. Step 5: Distractors fail because $3.3$ inverts the ratio to $L_{0}/\\tau$, $19$ multiplies $\\tau L_{0}$, and $0.15$ inserts a spurious extra half. Step 6: Conclude the axis precesses at **$0.30 \\text{ rad/s}$**.',
      },
      // PYQ-pattern: GATE PH 2021 — massive pulley dynamics (rephrased, values changed)
      {
        q: 'Masses $m_{1} = 3.0 \\text{ kg}$ and $m_{2} = 5.0 \\text{ kg}$ hang over a solid-disc pulley of mass $M = 2.0 \\text{ kg}$ on a frictionless axle. The linear acceleration of the masses is:',
        options: [`$2.5 \\text{ m/s}^{2}$`, `$2.2 \\text{ m/s}^{2}$`, `$9.8 \\text{ m/s}^{2}$`, `$1.1 \\text{ m/s}^{2}$`],
        answer: 1,
        explanation: 'Step 1: Given $m_{1} = 3.0 \\text{ kg}$, $m_{2} = 5.0 \\text{ kg}$, disc pulley $M = 2.0 \\text{ kg}$. Step 2: Governing laws are $F = ma$ for each hanging mass plus $\\tau = I\\alpha$ with $I = \\frac{1}{2}MR^{2}$ and $a = \\alpha R$. Step 3: Key equation: $$a = \\frac{(m_{2}-m_{1})g}{m_{1}+m_{2}+M/2} = \\frac{(2.0)(9.8)}{3.0+5.0+1.0}.$$ Step 4: Numerics give $a = 19.6/9.0 \\approx 2.2 \\text{ m/s}^{2}$; units are $\\text{m/s}^{2}$ and the value lies below free fall as required. Step 5: Distractors fail because $2.5$ is the massless-pulley result, $9.8$ is free fall ignoring the second mass, and $1.1$ halves the correct value. Step 6: Conclude the system accelerates at **$2.2 \\text{ m/s}^{2}$**.',
      },
    ],
  },
]

export const physCh5Formulas: FormulaEntry[] = [
  {
    chapterId: 'hall-ch10',
    section: '10.30',
    name: 'Angular velocity and point speed',
    formula: 'ω = dθ/dt,  v = ωr',
    note: 'radians per second; every point shares ω, speed grows with radius',
    latex: '\\omega = \\frac{d\\theta}{dt}, \\quad v = \\omega r',
  },
  {
    chapterId: 'hall-ch10',
    section: '10.30',
    name: 'Torque about an axis',
    formula: 'τ = xF_y − yF_x = r·F_tang',
    note: 'defined so torque × angle = work; also force × lever arm',
    latex: '\\tau = xF_y - yF_x = rF_{\\text{tang}}',
  },
  {
    chapterId: 'hall-ch10',
    section: '10.30',
    name: 'Angular momentum and moment of inertia',
    formula: 'L = Iω,  I = Σ mᵢrᵢ²',
    note: 'inertia against turning; I depends on the axis, mass does not',
    latex: 'L = I\\omega, \\quad I = \\sum_i m_i r_i^2',
  },
  {
    chapterId: 'hall-ch10',
    section: '10.30',
    name: 'Rotational kinetic energy',
    formula: 'T = ½Iω²',
    note: 'the rotational twin of ½mv²; not conserved on the turntable',
    latex: 'T = \\tfrac{1}{2}I\\omega^2',
  },
  {
    chapterId: 'hall-ch10',
    section: '10.30',
    name: 'Parallel-axis theorem',
    formula: 'I = I₀ + Md²',
    note: 'I₀ about the parallel axis through the centre of mass; d = axis offset',
    latex: 'I = I_c + MR_{\\text{CM}}^2',
  },
  {
    chapterId: 'hall-ch10',
    section: '10.31',
    name: 'Centre of mass',
    formula: 'R = Σ mᵢrᵢ / M',
    note: 'mass-weighted average position; F_ext = M·a_CM',
    latex: '\\mathbf{R}_{\\text{CM}} = \\frac{\\sum_i m_i \\mathbf{r}_i}{M}',
  },
  {
    chapterId: 'hall-ch11',
    section: '11.14',
    name: 'Rotation equations in vector form',
    formula: 'τ = r × F,  L = r × p,  τ = dL/dt',
    note: 'valid about a fixed axis or any axis through the centre of mass',
    latex: '\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}, \\quad \\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}, \\quad \\boldsymbol{\\tau} = \\frac{d\\mathbf{L}}{dt}',
  },
  {
    chapterId: 'hall-ch11',
    section: '11.14',
    name: 'Gyroscope precession',
    formula: 'τ = Ω × L₀',
    note: 'magnitudes Ω = τ/L₀; the top precesses instead of falling',
    latex: '\\boldsymbol{\\tau} = \\boldsymbol{\\Omega} \\times \\mathbf{L}_0',
  },
]
