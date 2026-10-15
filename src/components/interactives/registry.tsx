'use client'

import { lazy, Suspense, ComponentType } from 'react'
import { FlaskConical, Loader2 } from 'lucide-react'

// Registry mapping chapter interactiveKey -> lazy component
const registry: Record<string, ComponentType> = {
  'truth-table-lab': lazy(() => import('./truth-table-lab')),
  'venn-explorer': lazy(() => import('./venn-explorer')),
  'sorting-visualizer': lazy(() => import('./sorting-visualizer')),
  'gcd-stepper': lazy(() => import('./gcd-stepper')),
  'hanoi-tower': lazy(() => import('./hanoi-tower')),
  'counting-lab': lazy(() => import('./counting-lab')),
  'probability-lab': lazy(() => import('./probability-lab')),
  'recurrence-explorer': lazy(() => import('./recurrence-explorer')),
  'relation-explorer': lazy(() => import('./relation-explorer')),
  'graph-playground': lazy(() => import('./graph-playground')),
  'tree-traversal': lazy(() => import('./tree-traversal')),
  'logic-gates': lazy(() => import('./logic-gates')),
  'fsm-simulator': lazy(() => import('./fsm-simulator')),
  // ---- Operating System Concepts labs ----
  'os-anatomy': lazy(() => import('./os-anatomy')),
  'process-lifecycle': lazy(() => import('./process-lifecycle')),
  'race-lab': lazy(() => import('./race-lab')),
  'cpu-scheduler': lazy(() => import('./cpu-scheduler')),
  'dining-philosophers': lazy(() => import('./dining-philosophers')),
  'bankers-algorithm': lazy(() => import('./bankers-algorithm')),
  'paging-visualizer': lazy(() => import('./paging-visualizer')),
  'page-replacement': lazy(() => import('./page-replacement')),
  'disk-scheduler': lazy(() => import('./disk-scheduler')),
  'file-allocation': lazy(() => import('./file-allocation')),
  'dc-circuit-lab': lazy(() => import('./dc-circuit-lab')),
  'thevenin-lab': lazy(() => import('./thevenin-lab')),
  'transient-lab': lazy(() => import('./transient-lab')),
  'induction-lab': lazy(() => import('./induction-lab')),
  'phasor-lab': lazy(() => import('./phasor-lab')),
  'fourier-lab': lazy(() => import('./fourier-lab')),
  'diode-lab': lazy(() => import('./diode-lab')),
  'transistor-lab': lazy(() => import('./transistor-lab')),
  'opamp-lab': lazy(() => import('./opamp-lab')),
  'filter-lab': lazy(() => import('./filter-lab')),
  'oscillator-lab': lazy(() => import('./oscillator-lab')),
  'machine-lab': lazy(() => import('./machine-lab')),
  'converter-lab': lazy(() => import('./converter-lab')),
  'projectile-lab': lazy(() => import('./projectile-lab')),
  'orbit-lab': lazy(() => import('./orbit-lab')),
  'gas-lab': lazy(() => import('./gas-lab')),
  'wave-lab': lazy(() => import('./wave-lab')),
  'relativity-lab': lazy(() => import('./relativity-lab')),
  'efield-lab': lazy(() => import('./efield-lab')),
  'em-wave-lab': lazy(() => import('./em-wave-lab')),
  'quantum-lab': lazy(() => import('./quantum-lab')),
  // ---- Calculus (Stewart) labs ----
  'curve-lab': lazy(() => import('./curve-lab')),
  'derivative-lab': lazy(() => import('./derivative-lab')),
  'riemann-lab': lazy(() => import('./riemann-lab')),
  'taylor-lab': lazy(() => import('./taylor-lab')),
  // ---- JavaScript (Flanagan) labs ----
  'js-playground': lazy(() => import('./js-playground')),
  'event-loop-lab': lazy(() => import('./event-loop-lab')),
  // ---- C++ (Stroustrup) and Java (Horstmann) consoles ----
  // Both share the interactive console runner; each carries its own subject
  // title so C++/Java chapters never show a "JavaScript" label.
  'cpp-playground': lazy(() => import('./js-playground')),
  'java-playground': lazy(() => import('./js-playground')),
  // ---- Digital Logic (Mano) labs ----
  'kmap-minimizer': lazy(() => import('./kmap-minimizer')),
  'sequential-lab': lazy(() => import('./sequential-lab')),
  // ---- Chemistry labs ----
  'periodic-table-lab': lazy(() => import('./periodic-table-lab')),
  'equilibrium-lab': lazy(() => import('./equilibrium-lab')),
  'molecular-lab': lazy(() => import('./molecular-lab')),
  'kinetics-lab': lazy(() => import('./kinetics-lab')),
  'crystal-lattice-lab': lazy(() => import('../visual/webgl-crystal-molecule-viewer')),
  'breadboard-oscilloscope-sim': lazy(() => import('./breadboard-oscilloscope-sim')),
}

export interface ToolMeta {
  title: string
  description: string
  chapter: string
}

export const INTERACTIVE_META: Record<string, ToolMeta> = {
  'truth-table-lab': { title: 'Truth Table Lab', description: 'Type any propositional-logic expression and watch its full truth table build itself, row by row.', chapter: 'Ch 1 · Logic & Proofs' },
  'venn-explorer': { title: 'Venn Explorer', description: 'Drag elements between regions and see unions, intersections and differences update live.', chapter: 'Ch 2 · Sets & Functions' },
  'sorting-visualizer': { title: 'Sorting Visualizer', description: 'Race Bubble, Insertion, Merge and Quick sort with animated bars and operation counters.', chapter: 'Ch 3 · Algorithms' },
  'gcd-stepper': { title: 'GCD Stepper', description: 'Step through the Euclidean algorithm with animated divisions, or sieve primes live.', chapter: 'Ch 4 · Number Theory' },
  'hanoi-tower': { title: 'Tower of Hanoi', description: 'Solve the classic recursive puzzle move-by-move with 3D-style pegs and a recursion tree.', chapter: 'Ch 5 · Induction & Recursion' },
  'counting-lab': { title: 'Counting Lab', description: 'Explore permutations vs combinations with animated object arrangements.', chapter: 'Ch 6 · Counting' },
  'probability-lab': { title: 'Probability Lab', description: 'Flip coins and roll dice thousands of times — watch the law of large numbers converge.', chapter: 'Ch 7 · Probability' },
  'recurrence-explorer': { title: 'Recurrence Explorer', description: 'Visualize how recurrence relations grow: Fibonacci, Tribonacci, and your own.', chapter: 'Ch 8 · Advanced Counting' },
  'relation-explorer': { title: 'Relation Explorer', description: 'Toggle relation cells and watch the digraph, matrix and properties update together.', chapter: 'Ch 9 · Relations' },
  'graph-playground': { title: 'Graph Playground', description: 'Drag nodes, add edges, then animate BFS, DFS and Dijkstra across your graph.', chapter: 'Ch 10 · Graphs' },
  'tree-traversal': { title: 'Tree Traversal Animator', description: 'Watch preorder, inorder and postorder traversal light up a binary tree.', chapter: 'Ch 11 · Trees' },
  'logic-gates': { title: 'Logic Gate Circuit Sim', description: 'Wire up gates, flip switches and watch signals propagate through your circuit.', chapter: 'Ch 12 · Boolean Algebra' },
  'fsm-simulator': { title: 'Finite State Machine Sim', description: 'Feed a string into an animated automaton and watch it accept or reject.', chapter: 'Ch 13 · Modeling Computation' },
  // ---- Operating System Concepts labs ----
  'os-anatomy': { title: 'Computer-System Anatomy', description: 'Click through CPU, bus, memory and controllers; animate interrupts, DMA and privileged-instruction traps.', chapter: 'OSC · Ch 1 Introduction' },
  'process-lifecycle': { title: 'Process Lifecycle Simulator', description: 'Fire transitions on the five-state diagram, watch the PCB update and pay the context-switch cost.', chapter: 'OSC · Ch 3 Processes' },
  'race-lab': { title: 'Race Condition Lab', description: 'Two threads, one counter — watch updates vanish, then fix it with a mutex or atomic ops.', chapter: 'OSC · Ch 6 Sync Tools' },
  'cpu-scheduler': { title: 'CPU Scheduling Gantt Lab', description: 'Race FCFS, SJF, SRTF, priority and round robin on editable processes with animated Gantt charts.', chapter: 'OSC · Ch 5 CPU Scheduling' },
  'dining-philosophers': { title: 'Dining Philosophers', description: 'Five philosophers, five forks — deadlock, ordering and waiter solutions side by side.', chapter: 'OSC · Ch 7 Sync Examples' },
  'bankers-algorithm': { title: 'Banker’s Algorithm', description: 'Step the safety algorithm, find safe sequences and test resource requests before granting.', chapter: 'OSC · Ch 8 Deadlocks' },
  'paging-visualizer': { title: 'Paging & Address Translation', description: 'Split a virtual address into page + offset, walk the page table and compute TLB access time.', chapter: 'OSC · Ch 9 Main Memory' },
  'page-replacement': { title: 'Page Replacement Lab', description: 'Replay FIFO, LRU, optimal and clock replacement — and meet Belady’s anomaly in person.', chapter: 'OSC · Ch 10 Virtual Memory' },
  'disk-scheduler': { title: 'Disk Scheduling Lab', description: 'Sweep FCFS, SSTF, SCAN, C-SCAN and C-LOOK across the cylinders and compare total head movement.', chapter: 'OSC · Ch 11 Mass Storage' },
  'file-allocation': { title: 'File Allocation Lab', description: 'Lay files out on disk blocks — contiguous, linked FAT or indexed i-node — and read them back.', chapter: 'OSC · Ch 14 FS Implementation' },
  'dc-circuit-lab': { title: 'DC Circuit Sandbox', description: 'Build series and parallel resistor networks on a battery, watch current dots flow and resistors heat toward their power rating.', chapter: 'Elec · Ch 1–2 Foundations' },
  'thevenin-lab': { title: 'Thévenin & Norton Lab', description: 'Collapse any linear network to its Thévenin and Norton equivalents and watch the load curve prove they are the same circuit.', chapter: 'Elec · Ch 3 Network Theorems' },
  'transient-lab': { title: 'RC/RL/RLC Transient Scope', description: 'Step-response oscilloscope with time-constant markers, damping regimes and energy exchange bars for first and second-order circuits.', chapter: 'Elec · Ch 4–7 Transients' },
  'induction-lab': { title: 'Electromagnetic Induction Lab', description: 'Drag a magnet through a coil and watch the flux, EMF and Lenz-law current respond — then generate your own AC.', chapter: 'Elec · Ch 5 · Phys Ch 12' },
  'phasor-lab': { title: 'Phasor & Impedance Playground', description: 'Rotating phasors draw their sine waves; build impedance triangles and correct the power factor to unity.', chapter: 'Elec · Ch 8–9 AC Circuits' },
  'fourier-lab': { title: 'Fourier Synthesis Lab', description: 'Stack harmonics to build square, sawtooth and pulse waves; epicycles trace the sum and the spectrum fills in.', chapter: 'Elec · Ch 10–11 · Phys Ch 7' },
  'diode-lab': { title: 'Diode & Rectifier Lab', description: 'Bend the Shockley curve, walk the load line to the operating point and rectify mains into smooth DC.', chapter: 'Elec · Ch 12 Semiconductors' },
  'transistor-lab': { title: 'BJT Lab', description: 'Families of I–V curves, draggable Q-point on the load line and the clipping preview of a biased amplifier.', chapter: 'Elec · Ch 13 Bipolar Transistors' },
  'opamp-lab': { title: 'Op-Amp Circuit Sandbox', description: 'The six classic op-amp configurations with live scope, golden-rules visualization and saturation clipping.', chapter: 'Elec · Ch 15 Op-Amps' },
  'filter-lab': { title: 'Bode & Filter Designer', description: 'Drag the corner frequency of RC, RLC, notch and Sallen-Key filters and watch magnitude and phase respond.', chapter: 'Elec · Ch 16 Filters' },
  'oscillator-lab': { title: 'Oscillator & 555 Lab', description: 'Balance the Wien bridge at exactly A = 3, fire the 555 timer and watch LC tanks slosh energy.', chapter: 'Elec · Ch 17 Oscillators' },
  'machine-lab': { title: 'Rotating Machines Lab', description: 'Watch a three-phase stator field rotate, an induction motor slip and a synchronous rotor hold its load angle.', chapter: 'Elec · Ch 19 Machines' },
  'converter-lab': { title: 'Switching Converter Lab', description: 'Buck and boost converters with animated switching, inductor-current triangles and the 7 W vs 0.4 W efficiency story.', chapter: 'Elec · Ch 20 Power' },
  'projectile-lab': { title: 'Projectile Playground', description: 'Launch with and without air drag, scrub the energy bars and hit the target with complementary angles.', chapter: 'Phys · Ch 3–4 Motion' },
  'orbit-lab': { title: 'Kepler Orbit Simulator', description: 'Drag a planet into any orbit; all three Kepler laws verified live with swept areas and T² ∝ a³.', chapter: 'Phys · Ch 4–5 Gravitation' },
  'gas-lab': { title: 'Kinetic Theory Box', description: 'A piston-cylinder of colliding particles building a Maxwell–Boltzmann histogram as you squeeze adiabatically or slowly.', chapter: 'Phys · Ch 1, 10 Kinetic Theory' },
  'wave-lab': { title: 'Waves & Interference Studio', description: 'Beats, standing harmonics, two-source ripples and the double-slit intensity curve — all draggable.', chapter: 'Phys · Ch 6–8 Waves' },
  'relativity-lab': { title: 'Special Relativity Explorer', description: 'A light clock, tilting spacetime diagrams, the energy-momentum triangle and the twin paradox on rails.', chapter: 'Phys · Ch 9 Relativity' },
  'efield-lab': { title: 'Electric Field Explorer', description: 'Place charges, trace field lines and equipotentials, and verify Gauss’s law by tallying flux through your own surface.', chapter: 'Phys · Ch 11 Electrostatics' },
  'em-wave-lab': { title: 'Electromagnetic Wave Lab', description: 'E and B regenerate each other at c, polarizers obey Malus, and a moving source shows the Doppler squeeze.', chapter: 'Phys · Ch 13–14 EM Waves' },
  'quantum-lab': { title: 'Double-Slit Quantum Lab', description: 'Fire electrons one at a time and watch interference fringes emerge from pure probability — until you watch the slits.', chapter: 'Phys · Ch 15 Quantum' },
  // ---- Calculus (Stewart) labs ----
  'curve-lab': { title: 'Curve Lab', description: 'Parametric, polar and 3D surface plots — edit the equations and watch tangent vectors and derivatives trace themselves.', chapter: 'Calc · Ch 14, 23, 25–26, 29' },
  'derivative-lab': { title: 'Derivative Lab', description: 'Slide the secant to the tangent, shrink h toward zero and read the derivative live on the graph.', chapter: 'Calc · Ch 15–17 Differentiation' },
  'riemann-lab': { title: 'Riemann Sum Lab', description: 'Left, right, midpoint and trapezoid sums converge to the true integral as the partitions refine.', chapter: 'Calc · Ch 18–22, 27–28, 30' },
  'taylor-lab': { title: 'Taylor & Maclaurin Lab', description: 'Build polynomials order by order and watch them hug the curve until the remainder melts away.', chapter: 'Calc · Ch 24 Sequences & Series' },
  // ---- JavaScript (Flanagan) labs ----
  'js-playground': { title: 'JavaScript Playground', description: 'Write real code in a sandboxed console with instant evaluation and captured output.', chapter: 'JS · Ch 1–12, 14–17' },
  'event-loop-lab': { title: 'Event Loop Lab', description: 'Queue tasks, microtasks and timers and watch the call stack drain in the exact order JavaScript runs them.', chapter: 'JS · Ch 13 Asynchronous JS' },
  // ---- C++ (Stroustrup) and Java (Horstmann) consoles ----
  'cpp-playground': { title: 'C++ Playground', description: 'Try the chapter’s logic hands-on — control flow, functions, classes and STL ideas — in the interactive console with instant output.', chapter: 'C++ · Stroustrup' },
  'java-playground': { title: 'Java Playground', description: 'Try the chapter’s logic hands-on — objects, lambdas, generics, collections and streams — in the interactive console with instant output.', chapter: 'Java · Horstmann' },
  // ---- Digital Logic (Mano) labs ----
  'kmap-minimizer': { title: 'Karnaugh Map Minimizer', description: 'Drop minterms on the K-map and let the exact cover find your minimal SOP expression.', chapter: 'DLD · Ch 1–5 Combinational' },
  'sequential-lab': { title: 'Sequential Logic Lab', description: 'Clock flip-flops — SR, D, JK, T — and watch state diagrams and excitation tables update together.', chapter: 'DLD · Ch 6–12 Sequential' },
  // ---- Chemistry labs ----
  'periodic-table-lab': { title: 'Periodic Table & Trends Lab', description: 'Explore elements Z = 1–92, electron shell orbits, and periodic periodicity (electronegativity, radius, ionization energy).', chapter: 'Chem · Periodicity & Bonding' },
  'equilibrium-lab': { title: 'Equilibrium & Titration Lab', description: 'Simulate quantitative acid-base titrations, buffer equilibrium curves, and Le Châtelier gas-phase shifts.', chapter: 'Chem · Equilibrium & Stoichiometry' },
  'molecular-lab': { title: 'VSEPR Molecular Geometry 3D', description: 'Rotate molecules in 3D, inspect steric numbers, hybridization, bond angles, lone-pair repulsions and dipole vectors.', chapter: 'Chem · Molecular Shapes & Mechanisms' },
  'kinetics-lab': { title: 'Chemical Kinetics & Arrhenius', description: 'Simulate zero, first and second order rate laws, reaction half-lives, and Arrhenius activation energy barriers.', chapter: 'Chem · Kinetics & Thermodynamics' },
  'crystal-lattice-lab': { title: 'WebGL 3D Molecule & Crystal Lattice Viewer', description: 'Hardware-accelerated WebGL 3D viewer for crystal unit cells (SC, BCC, FCC, NaCl, Diamond), Miller indices slicing planes (100)/(110)/(111), quantum orbitals, and live bond angle measurements.', chapter: 'Chem · Solid State & Bonding' },
  'breadboard-oscilloscope-sim': { title: 'Breadboard & CRT Oscilloscope Sim', description: 'Interactive 30-column solderless breadboard with animated electron currents, function generator, DC power, and dual-channel calibrated phosphor oscilloscope.', chapter: 'Elec · Lab Instruments & Circuits' },
}

export function InteractiveTool({ toolKey }: { toolKey: string }) {
  const Tool = registry[toolKey]
  if (!Tool) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-muted-foreground/30 bg-muted/20 p-8 text-center">
        <FlaskConical className="h-10 w-10 text-emerald-500/60" />
        <p className="text-sm font-medium text-muted-foreground">This lab is not available yet.</p>
      </div>
    )
  }
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-muted-foreground/30 bg-muted/20 p-8">
          <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
          <p className="text-sm font-medium text-muted-foreground">Loading lab…</p>
        </div>
      }
    >
      <Tool />
    </Suspense>
  )
}
