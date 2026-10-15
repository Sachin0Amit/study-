import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE ELECTRONICS MASTER LIBRARY — Chapter 5
// Electromagnetism and Magnetic Circuits
// Hughes, "Electrical & Electronic Technology" 12e, chs 6–7 (pp. 137–163)
// Master study content. All worked-example numbers are the book's own.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh5Content: SectionContent[] = [
  // ------------------------------------------------------------- 5.1 ------
  {
    sectionId: 'ee-e-circuits-s16',
    readingTime: 8,
    intro: 'Every motor, generator, transformer and relay in this library ultimately rests on one experimental fact: an electric current sets up a magnetic field in the space around it. Hughes opens electromagnetism with the ancient compass, shows Faraday\u2019s way of drawing the field as lines of flux, and then lets Oersted\u2019s 1820 discovery carry us from permanent magnets to fields we can switch on and off at will.',
    objectives: [
      'Describe the magnetic field of a permanent magnet and the role of the north- and south-seeking poles',
      'State the five characteristics assumed of lines of magnetic flux and use them to predict attraction and repulsion',
      'Apply the right-hand screw rule and the grip rule to find the field direction around a straight conductor',
      'Determine the polarity of a solenoid from its winding sense and current direction',
      'Use the dot and cross conductor conventions when reading circuit diagrams end-on',
    ],
    concepts: [
      {
        term: 'Magnetic field of a permanent magnet',
        kind: 'definition',
        statement: 'A **magnetic field** is the region of space in which magnetic effects can be detected; a bar magnet suspended in a horizontal plane comes to rest with one end, the **north-seeking pole**, pointing towards the Earth\u2019s North Pole, the other being the **south-seeking pole**.',
        detail: 'The recognition of magnetism is old: Hughes credits the Chinese emperor Hoang-ti (2637 BC) with a chariot whose figurehead pointed south regardless of direction of travel \u2014 the ancestor of the compass, supposedly developed into that instrument under King Solomon. The ore, magnesian stone, gave the magnet its name. Steel filings sprinkled on cardboard over a magnet set themselves in curved chains between the poles, giving a mental picture of the \u2018field\u2019.',
      },
      {
        term: 'Lines of magnetic flux',
        kind: 'notation',
        statement: 'A **line of magnetic flux** is an imagined curve whose direction at any point is that taken by the north-seeking pole of a small compass placed there; flux lines are pure bookkeeping \u2014 they have **no physical existence** and were introduced by Michael Faraday as a way of visualising the distribution and density of a magnetic field.',
        detail: 'What is physically real is the field itself: the flux permeates the whole of the space occupied by it. The filing-chains experiment of Chapter 6 in Hughes (steel filings on cardboard) only makes the imagined lines visible. The lines are assumed to pass through the magnet, emerging from the N pole and returning to the S pole \u2014 compare the electric flux lines of Chapter 4.',
      },
      {
        term: 'Five characteristics of lines of magnetic flux',
        kind: 'law',
        statement: 'Lines of magnetic flux are assumed to have these properties: (1) their direction is that of a compass\u2019s north-seeking pole; (2) **each line forms a closed loop**, passing through the magnet itself; (3) lines **never intersect** \u2014 a compass needle can point in only one direction; (4) lines behave like **stretched elastic cords always trying to shorten themselves**; (5) lines that are **parallel and in the same direction repel one another**.',
        detail: 'Property (4) explains why **unlike poles attract**: the flux lines running between two suspended magnets A and B behave as if in tension, pulling the magnets together. Property (5) explains why **like poles repel**: between two N poles (or two S poles) the lines are practically parallel and in the same direction, exerting lateral pressure that pushes the magnets apart. Keep these two mechanical pictures \u2014 tension along the line, pressure sideways \u2014 and most of machine behaviour follows.',
      },
      {
        term: 'Field due to an electric current (Oersted)',
        kind: 'law',
        statement: '**When a conductor carries an electric current, a magnetic field is produced around that conductor** \u2014 the discovery Hans Christian Oersted made in Copenhagen in 1820; viewed along a conductor carrying current away from us, the field is **clockwise** and the flux lines are concentric circles about the wire.',
        detail: 'Oersted placed a wire above a magnetic needle, in line with the needle\u2019s normal direction: the needle deflected clockwise or anticlockwise depending on the current direction. The field shape is beautifully symmetric \u2014 circles centred on the wire \u2014 and its magnitude grows with current and falls with distance, a fact we make quantitative in Section 5.3 through the field strength $H$.',
      },
      {
        term: 'Dot and cross current conventions',
        kind: 'notation',
        statement: 'A current flowing **towards** the observer is drawn as a **dot** (the approaching point of an arrow); a current flowing **away** is drawn as a **cross** (the departing tail feathers).',
        detail: 'This end-on convention is indispensable for three-dimensional geometry \u2014 conductors entering a page, coils seen along their axis, the rotor conductors of a machine. Combined with the screw rule it fixes the field sense instantly: a cross (departing current) seen from the observer\u2019s side gives a clockwise field.',
      },
      {
        term: 'Right-hand screw rule',
        kind: 'method',
        statement: 'Place a **corkscrew alongside the conductor**: in order that the screw may travel in the same direction as the current, it must be turned clockwise (viewed from behind the direction of travel); the magnetic field then circulates in that same **clockwise sense** around the conductor.',
        detail: 'The rule is a mechanical memory of the cross product hidden in the geometry \u2014 rotate the screw from the current direction into the field circulation. It works for any element of wire, straight or curved, because the local field is always a circle about the local current direction.',
      },
      {
        term: 'Right-hand grip rule',
        kind: 'method',
        statement: '**Grip the conductor with the right hand, thumb outstretched parallel to the conductor and pointing in the direction of the current; the fingers then point in the direction of the magnetic flux** around the conductor.',
        detail: 'The grip rule is the same physics as the screw rule with a hand instead of a tool. Its great value is the dual reading: applied to a coil, the fingers take the role of the current and the thumb that of the field \u2014 which is exactly what we need for the solenoid.',
      },
      {
        term: 'Magnetic field of a solenoid',
        kind: 'definition',
        statement: 'A **solenoid** \u2014 a coil wound on a core \u2014 behaves like a magnet: wound on a steel rod and connected to a battery, the steel becomes magnetised and the assembly is an **electromagnet** whose field, inside the coil, is directed along the axis.',
        detail: 'Direction by screw rule: place the screw along the solenoid axis and turn it in the direction of the current \u2014 it travels in the direction of the field inside the solenoid. Direction by grip rule: grip the solenoid with the right hand, **fingers pointing in the (conventional) current direction; the thumb points along the internal field** \u2014 out of the end that is effectively the N pole. Reversing the winding sense, or the current, reverses the polarity; this is the actuator principle behind relays and contactors.',
      },
    ],
    examples: [
      {
        title: 'Mapping a field with filings and compasses',
        problem: 'A bar magnet rests on a table. Describe how steel filings and four compass needles reveal the shape and the direction of its field, and state what the experiment proves.',
        steps: [
          { label: 'Step 1: Lay out the apparatus', text: 'Cover the magnet with a sheet of smooth cardboard and sprinkle steel filings uniformly over the sheet, then tap it gently. Each filing becomes a tiny induced magnet and turns along the local field.' },
          { label: 'Step 2: Read the chains', text: 'The filings set themselves in curved chains running between the poles \u2014 the classic picture of lines of magnetic flux. The chains are densest where the field is strongest, near the poles, and permeate the whole space above the magnet.' },
          { label: 'Step 3: Place the compasses', text: 'With four compass needles set where the chains run, each needle takes up a position with its axis coinciding with the corresponding chain of filings, N pole pointing along the dotted line from the magnet\u2019s N pole towards its S pole, outside the magnet.' },
          { label: 'Step 4: Close the loop mentally', text: 'The lines are assumed to continue through the body of the magnet from S back to N, so every line forms a closed loop \u2014 characteristic (2) of lines of flux. The needles never point two ways at once, confirming that flux lines never intersect.' },
        ],
        result: 'The experiment yields a mental map \u2014 curved closed chains from N to S outside the magnet \u2014 but the lines themselves are an aid to thought introduced by Faraday, not physical objects.',
      },
      {
        title: 'Polarity of a solenoid',
        problem: 'A coil is wound on a steel rod and connected to a battery so that, viewed from the left-hand end, the current circulates clockwise at the top of each turn. Which end of the solenoid is the north-seeking end, and what happens if the battery connections are reversed?',
        steps: [
          { label: 'Step 1: Choose a rule', text: 'Apply the right-hand grip rule to the coil: the fingers wrap in the direction of the (conventional) current and the outstretched thumb gives the direction of the internal field.' },
          { label: 'Step 2: Wrap the hand', text: 'With the current circulating clockwise as seen from the left, the fingers of the right hand curl clockwise when the thumb points to the right \u2014 so the internal field points to the right, towards the right-hand end.' },
          { label: 'Step 3: Identify the poles', text: 'The end from which the internal field emerges is the effective N pole: the right-hand end is the north-seeking end, the left-hand end the south-seeking end. The steel core, once magnetised by this field, reinforces the pattern \u2014 an electromagnet.' },
          { label: 'Step 4: Reverse the battery', text: 'Reversing the current reverses the internal field direction, so the ends swap polarity. This immediate electrical control of magnetism is precisely what a relay or a contactor exploits, and it distinguishes the electromagnet from the permanent magnet of Example 1 above.' },
        ],
        result: 'Right-hand end = N pole for the stated winding; reversing the battery swaps N and S. The screw rule gives the same verdict: a screw turned with the current travels along the internal field.',
      },
    ],
    keyTakeaways: [
      'A magnetic field surrounds both permanent magnets and current-carrying conductors; the compass needle defines its direction at every point.',
      'Lines of magnetic flux are imaginary (Faraday), form closed loops, never intersect, behave like stretched cords in tension, and repel when parallel and same-directed.',
      'Tension along the lines explains attraction of unlike poles; lateral pressure between same-directed lines explains repulsion of like poles.',
      'A current produces a circulating field (Oersted, 1820): clockwise when viewed along a departing current \u2014 dot means towards you, cross means away.',
      'The right-hand screw rule and the grip rule convert any current direction into a field direction, and vice versa.',
      'A solenoid concentrates its field along the axis; grip it with the right hand, fingers in the current sense, and the thumb points to the effective N pole.',
    ],
    quiz: [
      {
        q: 'Lines of magnetic flux are drawn through the body of a bar magnet. Which characteristic forbids two of these lines from crossing each other?',
        options: ['They are under tension, like stretched elastic cords', 'Each line forms a closed loop', 'A compass needle at any point can point in only one direction', 'Lines only exist in non-magnetic media such as air'],
        answer: 2,
        explanation: 'If two lines intersected, a compass placed at the crossing point would need two directions at once \u2014 impossible, since the needle points along the local flux direction only. The tension and closed-loop properties are real too, but they are not the reason.',
      },
      {
        q: 'Viewed end-on, a conductor shows a cross (the tail feathers of an arrow). Looking along the conductor in the direction of the current, the magnetic field circulates:',
        options: ['Anticlockwise', 'Radially outwards', 'Along the conductor axis', 'Clockwise'],
        answer: 3,
        explanation: 'A cross means the current departs from the observer. Looking along a departing current, the field is clockwise \u2014 exactly what the right-hand screw rule gives when the screw travels away from you.',
      },
      {
        q: 'Two identical suspended magnets are arranged so that their flux lines between them are parallel and point the same way. What happens, and which flux property explains it?',
        options: ['They attract \u2014 the lines are in tension', 'Nothing \u2014 parallel lines do not interact', 'They repel \u2014 same-directed parallel lines exert lateral pressure', 'They first attract, then oscillate'],
        answer: 2,
        explanation: 'Parallel, same-directed lines of flux behave as if they exert lateral pressure on one another, so the magnets are pushed apart. Between like poles this is what we observe; the tension picture belongs to unlike poles, where the lines run from one magnet to the other.',
      },
      {
        q: 'In the grip rule for a single straight conductor, which pairing is correct?',
        options: ['Thumb gives the field; fingers give the current', 'Fingers curl in the field direction; thumb points along the current', 'Thumb and fingers both give the current direction', 'Fingers point along the field lines; thumb gives the force on the wire'],
        answer: 1,
        explanation: 'Grip the conductor with the right hand, thumb along the conventional current; the curled fingers show the direction of the magnetic flux circles. For a solenoid the roles swap: fingers follow the winding current, thumb gives the internal axial field.',
      },
      {
        q: 'A solenoid is gripped with the right hand so the fingers follow the current as seen from one end, and the thumb points away from that end. The end you are looking from is:',
        options: ['The north-seeking end', 'Electrically positive', 'Undefined \u2014 the rule gives no polarity', 'The south-seeking end'],
        answer: 3,
        explanation: 'The thumb points along the internal field, which emerges from the effective N pole at the far end. The end you are looking from is the one the field enters \u2014 the south-seeking end. Reversing the winding or the current would swap the two.',
      },
    ],
  },

  // ------------------------------------------------------------- 5.2 ------
  {
    sectionId: 'ee-e-circuits-s17',
    readingTime: 10,
    intro: 'Put a current-carrying wire into someone else\u2019s magnetic field and Newton\u2019s third law demands a force \u2014 the force every motor exploits. Move the wire instead, and the field fights back with an induced e.m.f. \u2014 the principle of every generator. This section quantifies both effects: $F = BIl$ for the force, Faraday\u2019s law and Lenz\u2019s law for the induced e.m.f., all with Hughes\u2019s own worked numbers.',
    objectives: [
      'Compute the force on a current-carrying conductor with $F = BIl$ and find flux and flux density from $\\Phi = BA$',
      'Determine force directions with Fleming\u2019s left-hand rule',
      'Explain electromagnetic induction qualitatively from Faraday\u2019s 1831 experiments',
      'Derive and apply the flux-cutting e.m.f. $E = Blu$ and the rate-of-change forms $e = d\\Phi/dt$ and $e = -N\\,d\\Phi/dt$',
      'Use Fleming\u2019s right-hand rule and Lenz\u2019s law to fix the direction of an induced e.m.f.',
    ],
    concepts: [
      {
        term: 'Force on a current-carrying conductor',
        kind: 'law',
        statement: 'A conductor carrying a current at right angles to a magnetic field experiences a mechanical force **perpendicular to the plane of the conductor and the field**; by Newton\u2019s third law the magnet feels an equal and opposite force.',
        detail: 'Hughes demonstrates it with a copper wire about 2 mm in diameter bent into a rectangular loop BC, its tapered ends dipping into mercury-filled cups so the loop is free to rotate. Passing about 5 A through the loop and bringing the N pole of a magnet near B makes the loop turn anticlockwise viewed from above; reversing the magnet (or the current) reverses the turn; reversing both leaves it unchanged. The one-piece-of-steel design proves the action belongs to the current, not to two magnets.',
      },
      {
        term: 'Magnetic flux density and the tesla',
        kind: 'definition',
        statement: 'The **magnetic flux density** $B$ is defined through the force law: a field in which a conductor carrying $1\\ \\text{A}$ at right angles experiences $1\\ \\text{N}$ per metre of length has $B = 1$ **tesla** (T). Equivalently, $1\\ \\text{T} = 1\\ \\text{Wb/m}^{2}$.',
        detail: 'With the force found to be proportional to current, flux density and the length at right angles to the field, the unit is fixed by this definition. Nikola Tesla (1857\u20131943), the Yugoslav-born inventor who emigrated to the USA in 1884 and patented two- and three-phase synchronous machines in 1888, gave the unit its name.',
      },
      {
        term: 'Force law F = BIl and flux \u03a6 = BA',
        kind: 'law',
        statement: 'For a conductor of length $l$ at right angles to a uniform field of density $B$, carrying current $I$:',
        detail: 'The full set of book relations is $$F = BIl\\quad\\text{(newtons)},$$ $$\\Phi = BA\\quad\\text{(webers)},$$ $$B = \\frac{\\Phi}{A}\\quad\\text{(teslas)}.$$ The **weber** is the unit of magnetic flux, symbol $\\Phi$ (Greek capital phi); flux permeates area $A$ measured in square metres. If the conductor is not perpendicular to the field, only the perpendicular component counts \u2014 Hughes\u2019s Example 6.2 multiplies $\\Phi$ by $\\sin\\theta$ when the coil plane is tilted. The symbol convention summary: $B$ in teslas, $\\Phi$ in webers, $H$ (field strength, Section 5.3) in amperes per metre.',
      },
      {
        term: 'Fleming\u2019s left-hand rule',
        kind: 'method',
        statement: 'Hold the thumb, first finger and second finger of the **left** hand mutually at right angles: point the **First** finger in the **Field** direction, the **seCond** finger in the **Current** direction, and the **thuMb** gives the direction of the **Mechanical force** on the conductor.',
        detail: 'The capital letters embedded in the words are the mnemonic: Field\u2013First, Current\u2013seCond, Motion\u2013thuMb. Reverse either current or field alone and the force reverses; reverse both together and the force direction is unchanged \u2014 a check the book makes explicitly and one worth performing by hand.',
      },
      {
        term: 'Electromagnetic induction (Faraday, 1831)',
        kind: 'law',
        statement: '**When the magnetic flux linked with a circuit is varied, an e.m.f. is induced in that circuit**; its magnitude is proportional to the rate at which the flux through the circuit changes \u2014 Faraday\u2019s great discovery of 1831.',
        detail: 'Two experiments anchor the idea. First, two coils A and C wound on a steel ring R: closing switch S in coil A\u2019s battery circuit deflects galvanometer G one way, opening it deflects G the other way \u2014 nothing happens while the current is steady. Weeks later, a permanent magnet NS moved towards a coil C deflects G one way and, withdrawn, the other: relative motion of flux and coil is what matters. Either **flux cutting** a conductor or **flux linking** a coil induces an e.m.f. \u2014 the generator principle that supplies most of the electric current used in practice.',
      },
      {
        term: 'Fleming\u2019s right-hand rule',
        kind: 'method',
        statement: 'For the **right** hand, again with thumb and two fingers mutually perpendicular: **First** finger in the direction of the **Flux**, thuMb in the direction of **Motion** of the conductor relative to the field, and the **sEcond** finger gives the direction of the induced **e.m.f.**',
        detail: 'The mnemonic is Field\u2013First, Motion\u2013thuMb, e.m.f.\u2013sEcond. Hughes warns that the manipulation presents difficulty to many students and that fluency comes only with practice; if any two of the three are correctly applied, the third follows automatically. Left hand for motor (force from current), right hand for generator (e.m.f. from motion).',
      },
      {
        term: 'Lenz\u2019s law',
        kind: 'law',
        statement: 'The direction of an induced e.m.f. is always such that it tends to set up a current **opposing the motion or the change of flux** responsible for inducing that e.m.f.',
        detail: 'Enunciated in 1834 by the German physicist Heinrich Lenz, the law is energy conservation in disguise: motion can only be opposed if mechanical work is being done against the opposition, which is exactly the energy the induced current carries away. In Faraday\u2019s ring experiment, when S is closed with the battery polarity shown, the ring flux grows clockwise; the current induced in C must circulate so as to try to produce an anticlockwise flux \u2014 from terminal X to Y through the coil \u2014 and that is also the direction of the induced e.m.f.',
      },
      {
        term: 'Flux-cutting e.m.f. E = Blu',
        kind: 'law',
        statement: 'A conductor of length $l$ moving at velocity $u$ at right angles across a field of density $B$ generates $E = Blu$ volts.',
        detail: 'The derivation is pure energy bookkeeping. Moving a length $l$ of conductor a distance $d$ through the gap requires work $B I l \\cdot d$ joules against the electromagnetic force (from $F = BIl$). If the movement takes $t$ seconds at constant speed, the electrical energy generated is $EIt$ joules, so $EIt = B I l d$ and $$E = \\frac{B l d}{t} = Blu.$$ But $Bld$ is the total flux $\\Phi$ swept, so $E = \\Phi/t$: **the e.m.f. equals the rate (Wb/s) at which the conductor cuts flux**. In differential form $e = d\\Phi/dt$, which defines the weber: the flux which, cut at a uniform rate by a conductor in one second, generates an e.m.f. of one volt.',
      },
      {
        term: 'Flux linkages and the coil e.m.f.',
        kind: 'law',
        statement: 'For a coil of $N$ turns whose flux changes, the average induced e.m.f. is the rate of change of **flux linkages**: $e = N\\,d\\Phi/dt$, with the flux linkage $\\Psi = N\\Phi$ measured in weber-turns.',
        detail: 'Flux linkage $\\Psi = N\\Phi$ is the product of flux (Wb) and linked turns \u2014 Hughes\u2019s example: a coil of 20 turns with 0.1 Wb through it has linkages $0.1 \\times 20 = 2$ weber-turns. Since each turn is cut by the changing flux, the instantaneous e.m.f. is $$e = \\frac{d(N\\Phi)}{dt} = -N\\,\\frac{d\\Phi}{dt}.$$ The minus sign is Lenz\u2019s law made algebraic (Hughes writes magnitudes with the direction rule separate, a convention we honour in worked examples). The weber, again: the flux which, linking a circuit of one turn, induces 1 V when reduced to zero at a uniform rate in 1 s.',
      },
    ],
    examples: [
      {
        title: 'Force per metre on a heavy conductor (Hughes Example 6.1)',
        problem: 'A conductor carries a current of 800 A at right angles to a magnetic field having a density of 0.5 T. Calculate the force on the conductor in newtons per metre length.',
        steps: [
          { label: 'Step 1: Select the law', text: 'The force on a straight conductor perpendicular to a uniform field is $F = BIl$, with $B$ in teslas, $l$ in metres and $I$ in amperes.' },
          { label: 'Step 2: Insert the numbers', text: 'Take $l = 1$ m so the answer is force per metre: $F = 0.5\\ [\\text{T}] \\times 1\\ [\\text{m}] \\times 800\\ [\\text{A}]$.' },
          { label: 'Step 3: Multiply', text: '$F = 400$ N per metre of conductor \u2014 about the weight of 40 kg on every metre, which is why heavy current-carrying busbars must be firmly clamped.' },
          { label: 'Step 4: Sanity-check with the left hand', text: 'Point the first finger of the left hand along the field and the second finger along the (given) current; the thumb confirms the force pushes the conductor sideways, perpendicular to both.' },
        ],
        result: 'The conductor experiences 400 N per metre length \u2014 the book\u2019s exact figure from expression $F = BIl$.',
      },
      {
        title: 'Flux through a tilted coil (Hughes Example 6.2)',
        problem: 'A rectangular coil measuring 200 mm by 100 mm is mounted so it can rotate about the midpoints of its 100 mm sides, the axis of rotation being at right angles to a uniform field of flux density 0.05 T. Find (a) the maximum flux through the coil and its position, and (b) the flux when the 100 mm sides are inclined at 45 degrees to the flux direction.',
        steps: [
          { label: 'Step 1: Maximum-flux position', text: 'Flux passes most copiously when the plane of the coil is perpendicular to the flux \u2014 the coil face fully faces the field.' },
          { label: 'Step 2: Compute the maximum', text: 'With $A = 200 \\times 10^{-3} \\times 100 \\times 10^{-3} = 0.02\\ \\text{m}^{2}$, $\\Phi = BA = 0.05 \\times 0.02 = 1 \\times 10^{-3}\\ \\text{Wb}$ \u2014 one milliveber.' },
          { label: 'Step 3: Tilt to 45 degrees', text: 'Rotating the coil so the 100 mm sides are at $45^{\\circ}$ reduces the effective area by $\\sin 45^{\\circ}$: $\\Phi = BA\\sin\\theta = (1 \\times 10^{-3})(0.7071)$.' },
          { label: 'Step 4: State both answers', text: '(a) $\\Phi_{\\max} = 1$ mWb with the coil plane at right angles to the flux; (b) $\\Phi = 0.71 \\times 10^{-3}$ Wb $= 0.71$ mWb \u2014 Hughes\u2019s rounded value.' },
        ],
        result: 'Maximum flux 1 mWb; at 45 degrees the linkage has fallen to about 0.71 mWb \u2014 the sine factor that makes a rotating machine generate alternating e.m.f.',
      },
      {
        title: 'E.m.f. induced by reversing flux (Hughes Example 6.4)',
        problem: 'A magnetic flux of 400 mWb passing through a coil of 1200 turns is reversed in 0.1 s. Calculate the average value of the e.m.f. induced in the coil.',
        steps: [
          { label: 'Step 1: Find the flux change', text: 'Reversal means the flux must fall from 400 mWb to zero and then grow to 400 mWb the other way: the total change in the original direction is $2 \\times 400 = 800$ mWb.' },
          { label: 'Step 2: Write the average-e.m.f. relation', text: 'From the flux-linkage law, the average e.m.f. is $E = N\\Phi/t$ where $\\Phi$ is the total change of flux \u2014 here 800 mWb in $t = 0.1$ s through $N = 1200$ turns.' },
          { label: 'Step 3: Substitute and compute', text: '$E = \\dfrac{1200 \\times 800 \\times 10^{-6}}{0.1} = \\dfrac{0.96}{0.1}$; the division gives $9.6$ V.' },
          { label: 'Step 4: Check the direction', text: 'While the original flux decays, Lenz\u2019s law makes the induced e.m.f. drive current that would sustain the old flux; through the reversal it then opposes the new direction \u2014 the e.m.f. keeps one sense throughout the 0.1 s.' },
        ],
        result: 'The average induced e.m.f. is 9.6 V \u2014 Hughes\u2019s answer. (For scale: a car axle 2 m long at 80 km/h in the Earth\u2019s 40-microtesla vertical field cuts $40\\times10^{-6} \\times 2 \\times 22.2 \\approx 1776\\times10^{-6}$ Wb per second, generating only about 1.78 mV.)',
      },
    ],
    keyTakeaways: [
      'A current at right angles to a field feels a force $F = BIl$ perpendicular to both; the tesla is defined by this law (1 N per metre on 1 A).',
      'Flux and flux density are related by $\\Phi = BA$; one tesla is one weber per square metre.',
      'Fleming\u2019s left-hand rule (Field\u2013First, Current\u2013seCond, Motion\u2013thuMb) gives the force direction; left hand for motors.',
      'Faraday (1831): varying the flux linked with a circuit induces an e.m.f. proportional to the rate of change \u2014 by flux cutting or flux linking.',
      'Fleming\u2019s right-hand rule gives the induced-e.m.f. direction from flux and motion; right hand for generators.',
      'Lenz\u2019s law: the induced current opposes the change producing it \u2014 the minus sign in $e = -N\\,d\\Phi/dt$.',
      'Flux-cutting gives $E = Blu$; in general $e = d\\Phi/dt$ for one turn and $e = N\\,d\\Phi/dt$ for a coil, with flux linkage $\\Psi = N\\Phi$ in weber-turns.',
    ],
    quiz: [
      {
        q: 'A conductor carries 200 A at right angles to a uniform field of 0.3 T (Hughes Exercise 6.1). The force per metre of conductor is:',
        options: ['6 N', '60 N', '667 N', '600 N'],
        answer: 1,
        explanation: '$F = BIl = 0.3 \\times 1 \\times 200 = 60$ N per metre. The same law gives the 400 N of Example 6.1 (0.5 T, 800 A).',
      },
      {
        q: 'In Fleming\u2019s left-hand rule, the first finger points along which quantity?',
        options: ['The current', 'The mechanical force', 'The magnetic field (flux)', 'The motion of the conductor'],
        answer: 2,
        explanation: 'First finger \u2014 Field; seCond finger \u2014 Current; thuMb \u2014 Mechanical force. The right-hand version replaces the force with the induced e.m.f.: First \u2014 Flux, thuMb \u2014 Motion, sEcond \u2014 e.m.f.',
      },
      {
        q: 'A magnet is pushed towards a coil and the coil\u2019s galvanometer deflects. By Lenz\u2019s law, the current circulates so as to:',
        options: ['Reinforce the increasing flux through the coil', 'Heat the coil uniformly', 'Follow the direction of the magnet\u2019s motion', 'Produce a flux opposing the increase'],
        answer: 3,
        explanation: 'The induced current always sets up a flux opposing the change that caused it \u2014 here opposing the growth of flux through the coil. The reaction pushes the coil away from the approaching magnet, consistent with Newton\u2019s third law, and guarantees the mechanical work done appears as electrical energy.',
      },
      {
        q: 'A conductor of active length 0.5 m moves at 4 m/s perpendicular to a field of 0.25 T. The generated e.m.f. is:',
        options: ['0.5 V', '2 V', '8 V', '0.125 V'],
        answer: 0,
        explanation: '$E = Blu = 0.25 \\times 0.5 \\times 4 = 0.5$ V. The same product $Bld/t$ came from equating mechanical work $BlId$ to electrical energy $EIt$ in Hughes\u2019s derivation.',
      },
      {
        q: 'A coil of 1500 turns carries a flux of 2.5 mWb which is reversed in 0.2 s (Hughes Exercise 6.12). The average induced e.m.f. is:',
        options: ['9.375 V', '18.75 V', '37.5 V', '75 V'],
        answer: 2,
        explanation: 'Reversal changes the flux by $2 \\times 2.5 = 5$ mWb, so $E = N\\,\\Delta\\Phi/t = 1500 \\times 5 \\times 10^{-3}/0.2 = 37.5$ V \u2014 the doubling from reversal is the trap, exactly as in Example 6.4 (800 mWb, 1200 turns, 0.1 s, 9.6 V).',
      },
      // PYQ-pattern: JEE-style — force on a current-carrying conductor (rephrased, values changed)
      {
        q: 'A straight conductor of active length 0.40 m carries 50 A at right angles to a uniform field of density 0.80 T. The mechanical force on the conductor is:',
        options: ['8 N', '16 N', '32 N', '64 N'],
        answer: 1,
        explanation: 'Step 1 — Given: $B = 0.80$ T, $I = 50$ A, active length $l = 0.40$ m, right-angle orientation. Step 2 — Governing law: $F = BIl$ for the perpendicular case, directed normal to both field and current. Step 3 — Algebra: $F = 0.80 \\times 50 \\times 0.40 = 16$ N. Step 4 — Sanity check: force per metre is $40$ N, scaling by $0.40$ m gives newtons, and reversing either field or current reverses the push. Step 5 — Distractor analysis: 8 N halves the length, 32 N doubles the field, and 64 N compounds both errors. Step 6 — Conclude: the conductor feels 16 N.',
      },
    ],
  },

  // ------------------------------------------------------------- 5.3 ------
  {
    sectionId: 'ee-e-circuits-s18',
    readingTime: 11,
    intro: 'Because every flux line closes on itself, a magnetic field can be guided the way an electric circuit guides current: give the flux a steel loop to travel in and you have a magnetic circuit. This section builds the complete analogy \u2014 magnetomotive force drives flux through reluctance, exactly as e.m.f. drives current through resistance \u2014 and then shows where the analogy honestly breaks down. Every number comes from Hughes\u2019s wooden-ring, mild-steel-ring and three-part-series examples.',
    objectives: [
      'Define magnetomotive force $F = IN$ and magnetic field strength $H = IN/l$ with their units',
      'Derive the permeability of free space $\\mu_0$ from the definition of the ampere and use $B = \\mu_0\\mu_r H$',
      'Compute reluctance $S = l/\\mu A$ and combine series reluctances',
      'Apply the magnetic \u2018Ohm\u2019s law\u2019 $\\Phi = F/S = IN/S$ to ring cores with and without airgaps',
      'State the respects in which the magnetic\u2013electric analogy fails',
    ],
    concepts: [
      {
        term: 'Magnetic circuit and the toroid',
        kind: 'definition',
        statement: 'The complete closed path followed by any group of magnetic flux lines is a **magnetic circuit**; the simplest practical form is a steel ring of circular cross-section, called a **toroid**, wound uniformly with $N$ turns.',
        detail: 'Because each flux line forms a closed loop (Section 5.1), a toroid traps nearly all the flux in its steel \u2014 flux that leaves the steel and returns through air is *leakage*, the magnetic analogue of a short-circuited detour and one of the reasons the electric analogy is imperfect.',
      },
      {
        term: 'Magnetomotive force (m.m.f.)',
        kind: 'definition',
        statement: 'The **magnetomotive force** of a coil of $N$ turns carrying current $I$ is the total current linked with the magnetic circuit, $F = IN$, expressed in amperes (descriptively, ampere-turns).',
        detail: '$$F = IN \\quad \\text{(amperes, or ampere-turns)}.$$ The descriptive unit is the ampere-turn (At), and since the turn is dimensionless the SI unit of m.m.f. is simply the ampere. Just as e.m.f. (volts) drives current around an electric circuit, m.m.f. drives flux around a magnetic circuit \u2014 the first pillar of the analogy.',
      },
      {
        term: 'Magnetic field strength H',
        kind: 'definition',
        statement: 'For a homogeneous magnetic circuit of uniform cross-section and mean length $l$, the m.m.f. per metre of path is the **magnetic field strength** $H = IN/l$, measured in amperes per metre.',
        detail: '$$H = \\frac{IN}{l} = \\frac{F}{l} \\quad \\text{(amperes per metre, A/m)}.$$ Field strength is m.m.f. gradient \u2014 the magnetic counterpart of electric field strength $E$ in volts per metre. Note carefully: $H$ measures the *cause* set up by the current; how much flux density $B$ that cause produces depends entirely on the material, through the permeability.',
      },
      {
        term: 'Permeability of free space',
        kind: 'definition',
        statement: 'The ratio $B/H$ in a vacuum (or, to very high accuracy, in air, water, oil, wood, copper or any non-magnetic material) is the **permeability of free space**:',
        detail: '$$\\mu_0 = \\frac{B}{H} = 4\\pi \\times 10^{-7}\\ \\text{H/m}.$$ Hughes derives the value from the definition of the ampere (Chapter 2): a long straight conductor carrying 1 A produces, on a concentric path of radius 1 m (length $2\\pi$ m), $H = 1/(2\\pi)$ A/m, while a parallel conductor there feels $B = 2 \\times 10^{-7}$ T \u2014 hence $\\mu_0 = B/H = 4\\pi\\times10^{-7}$ H/m. The unit (henry per metre) is justified in Chapter 6, where $L = \\mu N^{2}A/l$.',
      },
      {
        term: 'Maxwell\u2019s link to the speed of light',
        kind: 'insight',
        statement: 'Combining the electric and magnetic constants of free space gives',
        detail: '$$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 2.998 \\times 10^{8}\\ \\text{m/s},$$ the measured velocity of light. James Clerk Maxwell found this relation in 1865 and predicted radio waves from it some twenty years before Heinrich Hertz demonstrated them \u2014 the moment electromagnetism and optics merged into one theory. $\\varepsilon_0$, the permittivity of free space, is the electrostatic twin we met in Chapter 4.',
      },
      {
        term: 'Relative and absolute permeability',
        kind: 'definition',
        statement: 'The **relative permeability** $\\mu_r$ of a material is the ratio of the flux density it produces to the flux density a vacuum would produce under the same $H$; the **absolute permeability** is $\\mu = \\mu_0\\mu_r$, so that',
        detail: '$$B = \\mu_0 \\mu_r H = \\mu H.$$ For air $\\mu_r = 1$; inserting a steel core in a coil makes the flux hundreds of times larger. Ferromagnetic materials \u2014 those containing iron, cobalt, nickel or gadolinium \u2014 can reach enormous values: some nickel\u2013iron alloys show relative permeabilities up to about 100,000. Crucially, $\\mu_r$ is **not constant**: it varies with $H$, which is why Section 5.4 needs graphs rather than formulas for real materials.',
      },
      {
        term: 'Reluctance',
        kind: 'definition',
        statement: 'The **reluctance** $S$ of a uniform magnetic circuit of length $l$, cross-section $A$ and permeability $\\mu = \\mu_0\\mu_r$ is $S = l/(\\mu_0\\mu_r A)$, measured in amperes per weber.',
        detail: '$$S = \\frac{F}{\\Phi} = \\frac{l}{\\mu_0 \\mu_r A} \\quad \\text{(amperes per weber, A/Wb)}.$$ Compare Chapter 2\u2019s resistivity law $R = l/\\sigma A$ written with conductivity: length up means more opposition, area up means less, and permeability plays exactly the role of conductivity. Dividing $\\Phi = BA$ by $F = Hl$ produces $S$ in one line \u2014 the derivation Hughes performs on his expressions [7.9] and [7.10].',
      },
      {
        term: '\u2018Ohm\u2019s law for a magnetic circuit\u2019',
        kind: 'law',
        statement: 'Magnetomotive force equals flux times reluctance: $F = \\Phi S$, or equivalently $NI = \\Phi S$.',
        detail: '$$F = \\Phi S \\quad\\text{or}\\quad NI = \\Phi S.$$ The dictionary runs: m.m.f. $F$ (A) \u2194 e.m.f. $E$ (V); flux $\\Phi$ (Wb) \u2194 current $I$ (A); permeability \u2194 conductivity; reluctance $S$ (A/Wb) \u2194 resistance $R$ (\u03a9); field strength $H$ (A/m) \u2194 electric field strength $E$ (V/m); flux density $B$ (T) \u2194 current density $J$. Series and parallel laws of resistors carry over to reluctances \u2014 Hughes\u2019s three-part Example 7.4 simply adds them.',
      },
      {
        term: 'Where the analogy breaks down',
        kind: 'insight',
        statement: 'Three differences spoil the magnetic Ohm\u2019s law: **reluctance dissipates no energy** (whereas resistance loses power at $I^{2}R$), **flux leaks** through air where current normally does not, and **permeability is not constant**.',
        detail: 'Because $\\mu_r$ falls with saturation, doubling the m.m.f. does not double the flux \u2014 in an electric circuit, by contrast, $\\sigma$ stays constant over a wide range of current density until the conductor grows hot. There is a magnetic counterpart of potential difference (the magnetic potential difference across a section, $F = \\Phi S$), which lets Kirchhoff\u2019s laws be applied to magnetic circuits: around a closed loop the sum of m.m.f.s equals the sum of $\\Phi S$ drops, and at a junction flux in equals flux out \u2014 the basis of Example 7.4.',
      },
    ],
    examples: [
      {
        title: 'Wooden ring: H, B and \u03a6 (Hughes Example 7.1)',
        problem: 'A coil of 200 turns is wound uniformly over a wooden ring having a mean circumference of 600 mm and a uniform cross-sectional area of 500 mm squared. If the current through the coil is 4.0 A, calculate (a) the magnetic field strength, (b) the flux density, and (c) the total flux.',
        steps: [
          { label: 'Step 1: Field strength', text: 'The mean circumference is the path length, $l = 0.6$ m: $H = IN/l = (4.0 \\times 200)/0.6 = 1333$ A/m (Hughes rounds to 1330 A/m). Wood is non-magnetic, so this is the whole story for the cause.' },
          { label: 'Step 2: Flux density', text: 'For a non-magnetic circuit $B = \\mu_0 H = 4\\pi \\times 10^{-7} \\times 1333 = 0.001675$ T, i.e. about 1.68 mT \u2014 barely a few times the Earth\u2019s field, despite 800 ampere-turns.' },
          { label: 'Step 3: Total flux', text: 'With $A = 500 \\times 10^{-6}$ m squared, $\\Phi = BA = 0.001675 \\times 500 \\times 10^{-6} = 0.838 \\times 10^{-6}$ Wb, i.e. roughly 0.84 microweber.' },
          { label: 'Step 4: Interpret', text: 'A wooden (or air) core is honest but feeble: $\\mu_r = 1$ caps the flux. The very same 200 turns on a mild-steel ring (Example 7.3 below) multiply the flux density a thousandfold.' },
        ],
        result: '$H \\approx 1330$ A/m, $B \\approx 1.675$ mT, $\\Phi \\approx 0.84\\ \\mu\\text{Wb}$ \u2014 the wooden-ring benchmark against which every steel result is judged.',
      },
      {
        title: 'Mild-steel ring: reluctance and magnetising current (Hughes Example 7.3)',
        problem: 'A mild-steel ring having a cross-sectional area of 500 mm squared and a mean circumference of 400 mm has a coil of 200 turns wound uniformly around it. Calculate (a) the reluctance of the ring and (b) the current required to produce a flux of 800 microwebers in the ring.',
        steps: [
          { label: 'Step 1: Find the working flux density', text: '$B = \\Phi/A = 800 \\times 10^{-6} / 500 \\times 10^{-6} = 1.6$ T \u2014 deep in the region where the steel\u2019s $B$\u2013$H$ curve (Section 5.4) is bending over.' },
          { label: 'Step 2: Read the permeability from the curve', text: 'From the $\\mu_r$-versus-$B$ characteristic for mild steel, $\\mu_r \\approx 380$ at 1.6 T.' },
          { label: 'Step 3: Compute the reluctance', text: '$S = \\dfrac{l}{\\mu_0 \\mu_r A} = \\dfrac{0.4}{(4\\pi\\times10^{-7})(380)(500\\times10^{-6})} \\approx 1.68 \\times 10^{6}$ A/Wb.' },
          { label: 'Step 4: Find the m.m.f. and current', text: '$F = \\Phi S = 800 \\times 10^{-6} \\times 1.68 \\times 10^{6} \\approx 1342$ A, so $I = F/N = 1342/200 \\approx 6.7$ A.' },
          { label: 'Step 5: Cross-check the short way', text: 'Alternatively $H = B/(\\mu_0\\mu_r) = 1.6/(4\\pi \\times 10^{-7} \\times 380) \\approx 3350$ A/m, m.m.f. $= Hl = 3350 \\times 0.4 \\approx 1340$ A \u2014 same current, 6.7 A.' },
        ],
        result: '$S \\approx 1.68 \\times 10^{6}$ A/Wb and the coil needs about 6.7 A. Compare Example 7.1: the same geometry in wood would have needed an astronomical m.m.f. \u2014 steel\u2019s $\\mu_r \\approx 380$ does the work of 380 turns in every one.',
      },
      {
        title: 'Three parts in series, one of them air (Hughes Example 7.4)',
        problem: 'A magnetic circuit comprises three parts in series, each of uniform cross-sectional area: (a) 80 mm long, 50 mm squared; (b) 60 mm long, 90 mm squared; (c) an airgap 0.5 mm long, 150 mm squared. A coil of 4000 turns is wound on part (b), and the flux density in the airgap is 0.30 T. Assuming all the flux passes through the given circuit and $\\mu_r = 1300$, estimate the coil current.',
        steps: [
          { label: 'Step 1: Common flux', text: 'Series means one flux everywhere: $\\Phi = B_c A_c = 0.3 \\times 150 \\times 10^{-6} = 0.45 \\times 10^{-4}$ Wb.' },
          { label: 'Step 2: m.m.f. for part (a)', text: '$F_a = \\Phi S_a = \\Phi \\cdot l_a/(\\mu_0\\mu_r A_a) = \\dfrac{0.45\\times10^{-4} \\times 80\\times10^{-3}}{(4\\pi\\times10^{-7})(1300)(50\\times10^{-6})} \\approx 44.1$ ampere-turns.' },
          { label: 'Step 3: m.m.f. for part (b)', text: 'Same flux through 60 mm of 90 mm squared steel: $F_b = \\dfrac{0.45\\times10^{-4} \\times 60\\times10^{-3}}{(4\\pi\\times10^{-7})(1300)(90\\times10^{-6})} \\approx 18.4$ ampere-turns.' },
          { label: 'Step 4: m.m.f. for the airgap', text: 'Air has $\\mu_r = 1$, so even half a millimetre dominates: $F_c = \\dfrac{0.45\\times10^{-4} \\times 0.5\\times10^{-3}}{(4\\pi\\times10^{-7})(1)(150\\times10^{-6})} \\approx 119.3$ ampere-turns.' },
          { label: 'Step 5: Kirchhoff for magnetic circuits', text: 'The total m.m.f. is the sum of the drops: $F = 44.1 + 18.4 + 119.3 = 181.8$ At, and the current is $I = F/N = 181.8/4000 \\approx 45.4$ mA.' },
        ],
        result: 'Roughly 45.4 mA of coil current \u2014 and nearly two-thirds of every ampere-turn is spent on the 0.5 mm airgap, the design fact that makes airgaps both useful (they linearise a choke) and expensive.',
      },
    ],
    keyTakeaways: [
      'M.m.f. $F = IN$ (amperes, or ampere-turns); field strength $H = IN/l$ is the m.m.f. per metre of path, and the closed flux loop it drives is the magnetic circuit (toroid: the cleanest case).',
      '$\\mu_0 = 4\\pi \\times 10^{-7}$ H/m follows from the definition of the ampere, and $1/\\sqrt{\\mu_0\\varepsilon_0} = c$ (Maxwell, 1865).',
      'Materials enter through $B = \\mu_0 \\mu_r H$; ferromagnetics reach $\\mu_r$ of thousands (up to about 100,000 for some nickel\u2013iron alloys), but $\\mu_r$ varies with $H$.',
      'Reluctance $S = l/(\\mu_0\\mu_r A)$ in A/Wb behaves like resistance $l/\\sigma A$; series and parallel combinations carry over.',
      'Magnetic Ohm\u2019s law $F = \\Phi S$ maps m.m.f.\u2192e.m.f., flux\u2192current, and lets Kirchhoff\u2019s laws analyse multi-part cores.',
      'The analogy fails in three ways: reluctance is lossless, flux leaks, and permeability is not constant \u2014 saturation makes flux grow sub-proportionally with m.m.f.',
      'Airgaps dominate series magnetic circuits: 0.5 mm of air in Example 7.4 demanded 119.3 of the total 181.8 ampere-turns.',
    ],
    quiz: [
      {
        q: 'A coil of 500 turns carries 2 A. The magnetomotive force is:',
        options: ['250 A', '1000 A', '500 A', '2 kA'],
        answer: 1,
        explanation: '$F = IN = 500 \\times 2 = 1000$ A (ampere-turns). The SI unit is the ampere because the turn is dimensionless, but At is a helpful descriptive unit.',
      },
      {
        q: 'Hughes derives $\\mu_0 = 4\\pi \\times 10^{-7}$ H/m from which experimental fact?',
        options: ['The force of $2 \\times 10^{-7}$ N per metre between parallel 1 A conductors 1 m apart', 'Oersted\u2019s deflection of a compass needle', 'Faraday\u2019s ring experiment', 'The speed of light measurement'],
        answer: 0,
        explanation: 'From the definition of the ampere, a 1 A conductor produces $B = 2\\times10^{-7}$ T at 1 m radius, where $H = 1/(2\\pi)$ A/m; the ratio $B/H$ is $4\\pi\\times10^{-7}$ H/m. Maxwell\u2019s speed-of-light relation is a consequence, not the source.',
      },
      {
        q: 'Doubling the mean circumference of a toroidal core, keeping material, area, turns and current the same, does what to the reluctance?',
        options: ['Halves it', 'Leaves it unchanged', 'Quadruples it', 'Doubles it'],
        answer: 3,
        explanation: '$S = l/(\\mu_0\\mu_r A)$ is proportional to path length, so doubling $l$ doubles $S$ \u2014 and halves the flux, since $\\Phi = IN/S$. Area and permeability act in the opposite sense.',
      },
      {
        q: 'In the dictionary between electric and magnetic circuits, reluctance $S$ corresponds to which electrical quantity?',
        options: ['Conductance', 'Capacitance', 'Resistance', 'Electromotive force'],
        answer: 2,
        explanation: 'M.m.f. \u2194 e.m.f., flux \u2194 current, reluctance \u2194 resistance (with $\\mu$ playing conductivity\u2019s role). But remember the honest caveats: reluctance dissipates no power, and it is not constant once the core saturates.',
      },
      {
        q: 'A steel magnetic circuit has 5 cm squared cross-section and 25 cm length, wound with 120 turns (Hughes Exercise 7.2). With 1.5 A the flux is 0.3 mWb. The magnetic field strength is:',
        options: ['720 A/m', '300 A/m', '180 A/m', '1200 A/m'],
        answer: 0,
        explanation: '$H = IN/l = 120 \\times 1.5/0.25 = 720$ A/m. (The same exercise\u2019s 5 A case gives $H = 2400$ A/m with $B = 1.2$ T \u2014 the two points already show $\\mu_r$ falling from about 660 to about 400 as the steel hardens towards saturation.)',
      },
      // PYQ-pattern: GATE 2017 — toroid flux from magnetomotive force (rephrased, values changed)
      {
        q: 'A toroidal core has mean length 0.50 m and cross-section 400 mm squared, wound with 300 turns carrying 2.0 A. The relative permeability is 800. The core flux is closest to:',
        options: ['0.12 mWb', '0.48 mWb', '1.20 mWb', '4.80 mWb'],
        answer: 1,
        explanation: 'Step 1 — Given: $l = 0.50$ m, $A = 400 \\times 10^{-6}$ m squared, $N = 300$, $I = 2.0$ A, $\\mu_{r} = 800$. Step 2 — Governing chain: field strength $H = \\frac{NI}{l}$, density $B = \\mu_{0}\\mu_{r}H$, flux $\\Phi = BA$. Step 3 — Algebra: $H = \\frac{600}{0.50} = 1200$ A per m; $B = 4\\pi \\times 10^{-7} \\times 800 \\times 1200 \\approx 1.206$ T; $\\Phi = 1.206 \\times 400 \\times 10^{-6} \\approx 482 \\times 10^{-6}$ Wb. Step 4 — Sanity check: $1.2$ T sits below deep saturation, steel multiplies the air flux by about $800$, and the microweber scale suits the small area. Step 5 — Distractor analysis: 0.12 mWb drops the permeability, 1.20 mWb mistakes area by a decade, and 4.80 mWb compounds both. Step 6 — Conclude: the flux is about 0.48 mWb.',
      },
    ],
  },

  // ------------------------------------------------------------- 5.4 ------
  {
    sectionId: 'ee-e-circuits-s19',
    readingTime: 8,
    intro: 'Because relative permeability refuses to stay constant, the magnetic-circuit designer lives off graphs: the $B$\u2013$H$ magnetisation curve, its saturation knee, and the loop it traces when magnetisation cycles \u2014 hysteresis. Hughes measures the curve two classical ways (fluxmeter and ballistic galvanometer) and closes the chapter with a dictionary between the electromagnetic and electrostatic quantities you met in Chapter 4.',
    objectives: [
      'Describe the shape of the $B$\u2013$H$ magnetisation curve and the physical meaning of saturation',
      'Explain the fluxmeter and ballistic-galvanometer methods for measuring the $B$\u2013$H$ characteristic of a ring specimen',
      'Define the hysteresis loop, residual flux density and coercive force',
      'Relate the area of the hysteresis loop to the energy dissipated per cycle',
      'Map electromagnetic quantities onto their electrostatic counterparts',
    ],
    concepts: [
      {
        term: 'The B\u2013H magnetisation curve',
        kind: 'definition',
        statement: 'The **magnetisation characteristic** of a material is the graph of flux density $B$ against field strength $H$; for soft magnetic materials it rises steeply at first, then bends over into **saturation** as $H$ grows.',
        detail: 'Hughes\u2019s Fig. 7.3 plots the curves for silicon steel, mild steel, cast iron, Mumetal and ferrite over the range $H \\approx 1000$ to $10{,}000$ A/m: silicon steel reaches about 2.0 T at the top end, mild steel about 1.75 T, cast iron and Mumetal flatten earlier near 0.5\u20130.75 T. The corresponding $\\mu_r$-versus-$H$ and $\\mu_r$-versus-$B$ curves (Figs 7.4 and 7.5) show that permeability peaks at intermediate magnetisation \u2014 Mumetal approaching values near 120,000 at low $B$ \u2014 and falls on both sides.',
      },
      {
        term: 'Saturation',
        kind: 'insight',
        statement: 'Saturation is the flattening of the $B$\u2013$H$ curve at high $H$: beyond the knee, large increases of m.m.f. buy only small increases of flux density, because the material\u2019s domains are already essentially aligned.',
        detail: 'A saturated core is the magnetic equivalent of a used-up amplifier: Hughes\u2019s mild-steel ring of Example 7.3 needed only modest excitation to reach 1.6 T, yet pushing to 1.63 T in his Chapter 8 example required five times the field strength. Saturation is why real machine cores are kept near or below the knee, and why an airgap \u2014 which cannot saturate \u2014 can actually raise a coil\u2019s effective inductance over a wide current swing.',
      },
      {
        term: 'Measuring the curve with a fluxmeter',
        kind: 'method',
        statement: 'A steel ring of uniform cross-section is uniformly wound with a magnetising coil P (eliminating leakage) and a search coil S feeds a **fluxmeter**; reversing the current in P and reading the deflection $\\theta$ gives $B$ at that $H$.',
        detail: 'The fluxmeter is a special permanent-magnet moving-coil instrument whose coil is suspended by ligaments exerting negligible control, so its deflection is proportional to the change of flux-linkages. The magnetising current is set with resistor $R_1$, and the reversing switch RS is thrown several times to bring the steel into a *cyclic* condition before measuring. If the flux reverses from $\\Phi$ to $-\\Phi$, the change of linkages with coil S (turns $N_S$) is $2\\Phi N_S = c\\theta$ with $c$ the fluxmeter constant, so $$B = \\frac{c\\theta}{2 A N_S}.$$ Repeating for a range of currents plots the whole $B$\u2013$H$ curve point by point.',
      },
      {
        term: 'The ballistic galvanometer variant',
        kind: 'method',
        statement: 'A **ballistic galvanometer** has its coil wound on a non-metallic former with a high series resistance, so the first deflection or \u2018throw\u2019 is proportional to the charge passed when the discharge time is short compared with one oscillation.',
        detail: 'With galvanometer constant $k$ (coulombs per division) and total secondary-circuit resistance $R$, the average induced current $2\\Phi N_S/(tR)$ flowing for time $t$ passes charge $2\\Phi N_S/R$, so $k\\theta = 2\\Phi N_S/R$ and $$\\Phi = \\frac{k\\theta R}{2N_S}.$$ The same ring geometry and reversal trick serve; only the detector differs. Exercise 7.15 gives a real calibration: a 2000-turn coil on a non-magnetic toroid, 1 m mean circumference, 500 mm squared area, and a 100-turn search coil in a 5.1 k\u03a9 circuit \u2014 reversing 2.5 A gives 100 divisions.',
      },
      {
        term: 'Hysteresis',
        kind: 'definition',
        statement: '**Hysteresis** \u2014 from the Greek for \u2018lagging\u2019 \u2014 is the property that $B$ does not follow $H$ back down the magnetisation curve: when $H$ is reduced to zero, the specimen retains a **residual (remanent) flux density**, and an m.m.f. of opposite sign \u2014 the **coercive force** \u2014 is needed to bring $B$ to zero.',
        detail: 'Cycling $H$ between equal positive and negative limits traces a closed **hysteresis loop** whose shape is set by the material. Hughes meets the phenomenon through the ferromagnetic-cored inductor: reducing the current from OC to OA (his Fig. 8.7) lets the flux fall only from CD to AE, so the effective inductance is reduced compared with the initial magnetisation curve \u2014 the same lag, seen from the circuit side. Hard magnetic materials (wide loop, large coercivity) make permanent magnets; soft materials (narrow loop) make efficient cores.',
      },
      {
        term: 'Hysteresis loss',
        kind: 'law',
        statement: 'The energy dissipated per unit volume per cycle of magnetisation equals the **area of the hysteresis loop** in a $B$\u2013$H$ plot.',
        detail: 'Work done per unit volume over one excursion is $\\int H\\,dB$ \u2014 geometrically the area swept. Over a complete cycle the two legs do not cancel, and the loop area is left as heat in the iron. A core cycled at frequency $f$ therefore dissipates roughly (loop area) $\\times$ (volume) $\\times$ $f$ of hysteresis power, one reason transformers (Chapter 8\u2019s alternating flux, cycle after cycle) use narrow-loop silicon steel and thin laminations.',
      },
      {
        term: 'Electromagnetic\u2013electrostatic dictionary',
        kind: 'notation',
        statement: 'Hughes\u2019s Table 7.2 pairs the two field theories: electric flux $Q$ \u2194 magnetic flux $\\Phi$; electric flux density $D$ \u2194 magnetic flux density $B$; electric field strength $E$ \u2194 magnetic field strength $H$; e.m.f. \u2194 m.m.f.; $\\varepsilon_0$ \u2194 $\\mu_0$; $\\varepsilon_r$ \u2194 $\\mu_r$.',
        detail: 'The structural relation $\\varepsilon = \\varepsilon_0\\varepsilon_r = D/E$ of Chapter 4 stands exactly beside $\\mu = \\mu_0\\mu_r = B/H$ of this chapter \u2014 two parallel stories about how a medium modifies a field. One asymmetry is worth savouring: free magnetic charge does not exist, so flux lines always close on themselves, whereas electric flux lines begin and end on charges.',
      },
      {
        term: 'Reading permeability off the curves',
        kind: 'method',
        statement: 'Because $\\mu_r$ is field-dependent, engineering calculations read $\\mu_r$ from the $\\mu_r$\u2013$B$ (or $\\mu_r$\u2013$H$) characteristic at the working point, then apply the magnetic-circuit algebra of Section 5.3.',
        detail: 'Hughes\u2019s Example 7.3 reads $\\mu_r \\approx 380$ for mild steel at $B = 1.6$ T; his Chapter 8 examples read $B = 1.13$ T at $H = 1000$ A/m and $B = 1.63$ T at $H = 5000$ A/m from the same Fig. 7.3 \u2014 implying $\\mu_r \u2248 900$ and $\\mu_r \\approx 260$ respectively, a three-and-a-half-fold drop across the knee. Always quote the working point with any value of $\\mu_r$.',
      },
    ],
    examples: [
      {
        title: 'Reading the B\u2013H curve (after Hughes Example 8.3)',
        problem: 'A ring of mild-steel stampings has a mean circumference of 400 mm and a cross-sectional area of 500 mm squared wound with 200 turns. Using Hughes\u2019s Fig. 7.3, find the flux density and the implied relative permeability for magnetising currents of (a) 2 A and (b) 10 A.',
        steps: [
          { label: 'Step 1: Convert current to field strength', text: '(a) $H = IN/l = 200 \\times 2/0.4 = 1000$ A/m. (b) $H = 200 \\times 10/0.4 = 5000$ A/m \u2014 five times the excitation.' },
          { label: 'Step 2: Read B from the mild-steel curve', text: 'From Fig. 7.3: at $H = 1000$ A/m, $B \\approx 1.13$ T; at $H = 5000$ A/m, $B \\approx 1.63$ T. The curve is visibly flattening \u2014 saturation has begun.' },
          { label: 'Step 3: Compute the permeabilities', text: '(a) $\\mu_r = B/(\\mu_0 H) = 1.13/(4\\pi\\times10^{-7} \\times 1000) \\approx 900$. (b) $\\mu_r = 1.63/(4\\pi\\times10^{-7} \\times 5000) \\approx 260$.' },
          { label: 'Step 4: Interpret the fivefold error', text: 'Five times the m.m.f. bought only 1.63/1.13 \u2248 1.44 times the flux density, and $\\mu_r$ fell by a factor of about 3.5. Any $L = \\mu N^2A/l$ computed at low current (Chapter 6) overestimates the inductance at high current.' },
        ],
        result: '1.13 T at 1000 A/m ($\\mu_r \\approx 900$); 1.63 T at 5000 A/m ($\\mu_r \\approx 260$) \u2014 the numbers Hughes himself uses for this same ring in his Chapter 8 inductance example.',
      },
      {
        title: 'A fluxmeter determination (Hughes Exercise 7.12)',
        problem: 'A coil P of 300 turns is uniformly wound on a ferromagnetic ring of cross-sectional area 500 mm squared and mean diameter 400 mm. Another coil S of 30 turns is connected to a fluxmeter of constant 200 microweber-turns per division. When a current of 1.5 A through P is reversed, the fluxmeter deflects 96 divisions. Calculate the flux density in the ring and the magnetic field strength.',
        steps: [
          { label: 'Step 1: Apply the reversal relation', text: 'Reversal swings the flux from $\\Phi$ to $-\\Phi$, so the change of linkages with coil S is $2\\Phi N_S$. The fluxmeter reads the same change as $c\\theta$.' },
          { label: 'Step 2: Solve for the flux', text: '$\\Phi = \\dfrac{c\\theta}{2N_S} = \\dfrac{200 \\times 10^{-6} \\times 96}{2 \\times 30} = 320\\ \\mu\\text{Wb}$.' },
          { label: 'Step 3: Convert to flux density', text: '$B = \\Phi/A = 320 \\times 10^{-6}/500 \\times 10^{-6} = 0.64$ T.' },
          { label: 'Step 4: Compute the field strength', text: 'Mean circumference $l = \\pi \\times 0.4 = 1.257$ m, so $H = IN/l = 300 \\times 1.5/1.257 \\approx 358$ A/m \u2014 one point of the ring\u2019s $B$\u2013$H$ curve, obtained without ever measuring flux directly.' },
        ],
        result: '$B = 0.64$ T at $H \\approx 358$ A/m; repeating the reversal at other currents traces the whole magnetisation curve.',
      },
    ],
    keyTakeaways: [
      'The $B$\u2013$H$ curve of a soft magnetic material rises steeply, bends at the knee, and saturates: past the knee, m.m.f. buys little extra $B$.',
      'Permeability is a working-point property: mild steel shows $\\mu_r \\approx 900$ at 1.13 T but only about 260 at 1.63 T.',
      'The fluxmeter method measures $B$ by reversing the magnetising current: $B = c\\theta/(2AN_S)$; the ballistic galvanometer variant uses the charge throw, $\\Phi = k\\theta R/(2N_S)$.',
      'Specimens are \u2018cycled\u2019 by repeated reversals before measurement so the readings are repeatable.',
      'Hysteresis makes $B$ lag $H$: residual flux density survives zero $H$, and coercive force is needed to erase it; the loop area is the energy dissipated per unit volume per cycle.',
      'Hard materials (wide loops) are permanent magnets; soft materials (narrow loops) are transformer and machine cores.',
      'The electrostatic dictionary of Chapter 4 pairs $Q, D, E, \\varepsilon_0, \\varepsilon_r$ with $\\Phi, B, H, \\mu_0, \\mu_r$ \u2014 but magnetic flux lines always close, having no charge to start from.',
    ],
    quiz: [
      {
        q: 'In the fluxmeter method, why is the magnetising current reversed rather than merely switched off?',
        options: [
          'To protect the fluxmeter from overload',
          'Because the change of linkages $2\\Phi N_S$ gives a readable deflection proportional to the flux',
          'To keep the ring cool during the measurement',
          'Because a unidirectional current cannot produce flux in steel',
        ],
        answer: 1,
        explanation: 'The fluxmeter responds to change of flux-linkages. Swinging the flux from $\\Phi$ to $-\\Phi$ doubles the available signal and, by cycling the specimen first, ensures the reading corresponds to the symmetric (cyclic) magnetisation state.',
      },
      {
        q: 'A specimen retains flux density when the magnetising field is reduced to zero. This flux density is called the:',
        options: ['Residual (remanent) flux density', 'Coercive force', 'Saturation density', 'Incremental permeability'],
        answer: 0,
        explanation: 'Residual flux density is what is left of $B$ at $H = 0$ on the falling branch of the hysteresis loop. The coercive force is the reverse $H$ needed to bring $B$ back to zero.',
      },
      {
        q: 'The energy dissipated per unit volume in cycling a magnetic material once around its hysteresis loop equals:',
        options: ['The slope of the B\u2013H curve at the origin', 'The area enclosed by the loop', 'Half the product $BH$ at the tip', 'The permeability times the loop height'],
        answer: 1,
        explanation: 'Work per unit volume is $\\int H\\,dB$; around a full cycle the rising and falling legs differ by exactly the enclosed area, which is dissipated as heat. Cycling at frequency $f$ multiplies the loss by $f$.',
      },
      {
        q: 'In Hughes\u2019s electromagnetic\u2013electrostatic comparison, the counterpart of the magnetic field strength $H$ is:',
        options: ['Electric flux density $D$', 'Permittivity $\\varepsilon$', 'Electric field strength $E$', 'Electric charge $Q$'],
        answer: 2,
        explanation: 'The pairing is $\\Phi \\leftrightarrow Q$, $B \\leftrightarrow D$, $H \\leftrightarrow E$, m.m.f. \u2194 e.m.f., with $B/H = \\mu_0\\mu_r$ standing beside $D/E = \\varepsilon_0\\varepsilon_r$ from Chapter 4.',
      },
      {
        q: 'A mild-steel core operates at $B = 1.6$ T, where its curve gives $\\mu_r \\approx 380$. If the excitation is increased until $B = 1.75$ T, the relative permeability will most likely:',
        options: ['Stay at 380', 'Rise above 380', 'Fall below 380', 'Become exactly 1'],
        answer: 2,
        explanation: 'Approaching saturation, each extra ampere-turn yields less extra $B$, so $B/H$ \u2014 and hence $\\mu_r$ \u2014 keeps falling. Hughes\u2019s curve family shows mild steel\u2019s permeability well past its peak by 1.6 T (the same behaviour as the 900 \u2192 260 drop computed from Fig. 7.3).',
      },
    ],
  },
]

export const elecCh5Formulas: FormulaEntry[] = [
  {
    chapterId: 'ee-e-circuits',
    section: '2.17',
    name: 'Force on a current-carrying conductor',
    formula: 'F = BIl',
    note: 'newtons; conductor at right angles to the field',
    latex: 'F = BIl',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.17',
    name: 'Magnetic flux and flux density',
    formula: '\u03a6 = BA;  B = \u03a6/A',
    note: 'webers and teslas; 1 T = 1 Wb/m\u00b2',
    latex: '\\Phi = BA, \\quad B = \\frac{\\Phi}{A}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.17',
    name: 'Flux-cutting (motional) e.m.f.',
    formula: 'E = Blu;  e = d\u03a6/dt',
    note: 'conductor moving at velocity u across the field',
    latex: 'E = Blu',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.17',
    name: 'Faraday\u2019s law for a coil',
    formula: 'e = \u2212N\u00b7d\u03a6/dt',
    note: 'minus sign is Lenz\u2019s law; \u03a8 = N\u03a6 in weber-turns',
    latex: 'e = -N\\,\\frac{d\\Phi}{dt}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.18',
    name: 'Magnetomotive force',
    formula: 'F = IN',
    note: 'amperes (ampere-turns); drives flux round the core',
    latex: 'F = IN',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.18',
    name: 'Magnetic field strength',
    formula: 'H = IN/l',
    note: 'amperes per metre; m.m.f. per metre of path',
    latex: 'H = \\frac{IN}{l}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.18',
    name: 'Permeability relation',
    formula: 'B = \u03bc\u2080\u03bc\u1d63H',
    note: '\u03bc\u2080 = 4\u03c0 \u00d7 10\u207b\u2077 H/m; \u03bc\u1d63 varies with H',
    latex: 'B = \\mu_0 \\mu_r H',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.18',
    name: 'Reluctance and magnetic Ohm\u2019s law',
    formula: 'S = l/(\u03bc\u2080\u03bc\u1d63A);  F = \u03a6S',
    note: 'A/Wb; series reluctances add like resistances',
    latex: 'S = \\frac{l}{\\mu_0 \\mu_r A}, \\quad F = \\Phi S',
  },
]
