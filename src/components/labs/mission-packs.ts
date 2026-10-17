/**
 * Mission packs (X5 Pro) — guided objectives for the Virtual Laboratory Floor.
 * Pure data: labId → ordered list of missions. Missions unlock sequentially
 * (a mission becomes "active" once every previous one is complete) and every
 * completed mission awards its XP. Objective ids are stable strings that labs
 * fire through `useMissions(labId).fire(objectiveId)` at natural interaction
 * points — see `missions.tsx` for the engine.
 */

export interface LabObjective {
  id: string
  text: string
  hint: string
}

export interface LabMission {
  id: string
  title: string
  brief: string
  xp: number
  objectives: LabObjective[]
}

/* ------------------------------------------------------------------ */
/*  Circuit sandbox                                                    */
/* ------------------------------------------------------------------ */

const CIRCUIT: LabMission[] = [
  {
    id: 'cir-m1',
    title: 'Close the loop',
    brief: 'Build the smallest thing the MNA solver can actually chew on.',
    xp: 60,
    objectives: [
      {
        id: 'cir-add-source',
        text: 'Add a voltage source to the schematic',
        hint: 'Pick "Source" as the type, set a value in volts (e.g. 9), then add it between IN and GND.',
      },
      {
        id: 'cir-add-resistor',
        text: 'Add a resistor between two nodes',
        hint: 'Switch the type back to Resistor — the value is read in ohms (1000 = 1 kΩ).',
      },
      {
        id: 'cir-solve-ok',
        text: 'Run the solver and get a valid DC solution',
        hint: 'Every node needs at least two connections and a DC path to GND — the voltage divider preset shows the pattern.',
      },
    ],
  },
  {
    id: 'cir-m2',
    title: 'Divide and conquer',
    brief: 'Presets + a two-resistor ladder — the bread and butter of nodal analysis.',
    xp: 80,
    objectives: [
      {
        id: 'cir-load-preset',
        text: 'Load any preset circuit',
        hint: 'The preset buttons above the editor build an instant, valid circuit and solve it right away.',
      },
      {
        id: 'cir-solve-two-r',
        text: 'Solve a circuit with two or more resistors',
        hint: 'Load the voltage divider (R1 = 1 kΩ, R2 = 2 kΩ) and press Solve — the mid node lands at exactly ⅔ of the source.',
      },
    ],
  },
  {
    id: 'cir-m3',
    title: 'Dare a short',
    brief: 'Push a resistance toward zero and watch the branch current explode.',
    xp: 100,
    objectives: [
      {
        id: 'cir-add-short',
        text: 'Add a resistor of 1 Ω or less — a practical short',
        hint: 'Add a resistor with value 1 (or 0.5) between two nodes that already have a path to GND.',
      },
      {
        id: 'cir-solve-short',
        text: 'Solve the circuit that contains your short',
        hint: 'Check the branch currents table — the short now hogs almost all of the current (and the power!).',
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Signals workbench                                                  */
/* ------------------------------------------------------------------ */

const SIGNALS: LabMission[] = [
  {
    id: 'sig-m1',
    title: 'Wave rider',
    brief: 'Tour the generators — the pure tone and its sharp-edged cousin.',
    xp: 60,
    objectives: [
      {
        id: 'sig-set-sine',
        text: 'Set any channel to a sine wave',
        hint: 'Open the Waveform dropdown on CH1 and pick "sine" — one clean line in the spectrum.',
      },
      {
        id: 'sig-set-square',
        text: 'Switch a channel to a square wave',
        hint: 'Same dropdown, pick "square" — watch the spectrum suddenly grow harmonic teeth.',
      },
    ],
  },
  {
    id: 'sig-m2',
    title: 'Harmonic hunter',
    brief: 'Read the FFT like an oscilloscope: fundamental, harmonics, bandwidth.',
    xp: 90,
    objectives: [
      {
        id: 'sig-square-harmonics',
        text: 'Park a square wave at ≤ 100 Hz and spot the odd harmonics (3f, 5f …)',
        hint: 'Set a channel to square and drag its frequency to 50 Hz — the spectrum shows peaks at 150, 250, 350 Hz …',
      },
      {
        id: 'sig-high-freq',
        text: 'Tune any channel above 300 Hz',
        hint: 'Drag the frequency slider past 300 — the dominant-bin readout should follow it (until you approach Nyquist at 500 Hz).',
      },
    ],
  },
  {
    id: 'sig-m3',
    title: 'Ring the modulator',
    brief: 'Superposition vs multiplication — two very different kinds of mixing.',
    xp: 80,
    objectives: [
      {
        id: 'sig-mix-two',
        text: 'Enable two channels at once (additive mix)',
        hint: 'Toggle both CH1 and CH2 to "on" — with the + mixer the time domain shows the two waves summed sample by sample.',
      },
      {
        id: 'sig-ring-mod',
        text: 'Flip the mixer to multiply (AM / ring modulation)',
        hint: 'Press the "c₁ × c₂" button — sum and difference sidebands replace the original tones in the spectrum.',
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  OS scheduler & paging                                              */
/* ------------------------------------------------------------------ */

const OS: LabMission[] = [
  {
    id: 'os-m1',
    title: 'Policy tour',
    brief: 'Same processes, three very different Gantt charts.',
    xp: 70,
    objectives: [
      {
        id: 'os-alg-fcfs',
        text: 'Select FCFS and read the completed Gantt chart',
        hint: 'First-come, first-served — long jobs near the front inflate everyone waiting behind them.',
      },
      {
        id: 'os-alg-sjf',
        text: 'Switch to SJF and compare the average wait',
        hint: 'Shortest job first usually wins on average waiting time — check the metrics badges before/after.',
      },
      {
        id: 'os-alg-rr',
        text: 'Select Round-Robin — every quantum expiry is a context switch',
        hint: 'With quantum ≤ 3 and three or more processes, the CPU slices between them; response time drops, waiting climbs.',
      },
    ],
  },
  {
    id: 'os-m2',
    title: 'Page turner',
    brief: 'Walk FIFO and LRU through the same reference string.',
    xp: 80,
    objectives: [
      {
        id: 'os-pages-play',
        text: 'Auto-play a page-replacement run',
        hint: 'Switch to the Page replacement tab and press Auto-play.',
      },
      {
        id: 'os-pages-end',
        text: 'Reach the final reference of a trace',
        hint: 'Keep stepping (or let auto-play finish) until the step counter shows the last step.',
      },
      {
        id: 'os-pages-lru',
        text: 'Switch paging to LRU',
        hint: 'LRU evicts the least recently used page — try the "Belady anomaly" preset and compare with FIFO.',
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Cache visualizer                                                   */
/* ------------------------------------------------------------------ */

const CACHE: LabMission[] = [
  {
    id: 'cache-m1',
    title: 'Warm it up',
    brief: 'A small working set is a happy working set.',
    xp: 60,
    objectives: [
      {
        id: 'cache-pattern-looping',
        text: 'Run the looping trace (small working set → hits)',
        hint: 'Pick the "looping" pattern — the trace circles a few blocks that fit in the cache, so nearly every access hits.',
      },
      {
        id: 'cache-hit-90',
        text: 'Push the hit rate to 90% or higher',
        hint: 'Looping with a decent cache size and 2-way+ associativity gets you there instantly.',
      },
    ],
  },
  {
    id: 'cache-m2',
    title: 'Miss anatomy',
    brief: 'Compulsory, capacity, conflict — learn to tell the three apart.',
    xp: 80,
    objectives: [
      {
        id: 'cache-pattern-strided',
        text: 'Run the strided trace and watch conflict misses appear',
        hint: 'Stride ≡ number of sets (or a multiple) makes every access land in the same set — the per-set heatmap turns hot.',
      },
      {
        id: 'cache-assoc-change',
        text: 'Change the associativity and re-run',
        hint: 'Take the strided trace from 1-way to 4-way (or full) — conflict misses melt away while compulsory ones stay.',
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Compiler pipeline                                                  */
/* ------------------------------------------------------------------ */

const COMPILER: LabMission[] = [
  {
    id: 'comp-m1',
    title: 'Hello, pipeline',
    brief: 'Source → tokens → tree → stack code, one step at a time.',
    xp: 60,
    objectives: [
      {
        id: 'comp-edit',
        text: 'Type your own line of code in the editor',
        hint: 'Try adding `print 2 + 3 * 4` on a new line — the lexer repaints tokens as you type.',
      },
      {
        id: 'comp-step',
        text: 'Single-step the VM and watch the stack',
        hint: 'Press Step repeatedly — literals push, operators pop two and push the result.',
      },
    ],
  },
  {
    id: 'comp-m2',
    title: 'Run it hot',
    brief: 'Full speed through the pipeline, then tour the presets.',
    xp: 80,
    objectives: [
      {
        id: 'comp-run',
        text: 'Use "Run all" to execute a program to halt',
        hint: 'Run all cranks the VM until the HALT instruction — check the output console.',
      },
      {
        id: 'comp-preset',
        text: 'Load a different preset program',
        hint: 'The program buttons above the editor swap the source (and reset the VM).',
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Mechanics sandbox (new)                                            */
/* ------------------------------------------------------------------ */

const MECHANICS: LabMission[] = [
  {
    id: 'mech-m1',
    title: 'First flight',
    brief: 'Vacuum ballistics — the parabola every physics course starts with.',
    xp: 60,
    objectives: [
      {
        id: 'proj-launch',
        text: 'Launch a projectile',
        hint: 'Set v₀ and the angle, then press Launch — the dashed curve is the vacuum prediction.',
      },
      {
        id: 'proj-land',
        text: 'Watch a full flight to the ground',
        hint: 'The flight ends when the ball reaches y = 0 — the readout shows range, apex and flight time.',
      },
    ],
  },
  {
    id: 'mech-m2',
    title: 'Hit the target',
    brief: 'Ballistics with a purpose: put the ball on the flag.',
    xp: 100,
    objectives: [
      {
        id: 'proj-hit',
        text: 'Land within ±2 m of the target flag',
        hint: 'In vacuum, range R = v₀²·sin(2θ)/g — with the target at 35 m and g = 9.81, v₀ = 24 m/s at 43–47° works.',
      },
      {
        id: 'proj-bullseye',
        text: 'Bullseye — land within ±0.5 m',
        hint: 'Fine-tune the angle one degree at a time around your solution; the wind slider (0 by default) adds a constant sideways push when you want a challenge.',
      },
    ],
  },
  {
    id: 'mech-m3',
    title: 'Break the small angle',
    brief: 'sin θ ≈ θ is a lie — prove it on the pendulum bench.',
    xp: 110,
    objectives: [
      {
        id: 'pend-large',
        text: 'Start the pendulum from 60° or more',
        hint: 'Drag the initial angle slider to 60–170° and press Start.',
      },
      {
        id: 'pend-diverge',
        text: 'Push the small-angle error above 5%',
        hint: 'With comparison on, the amber ghost bob is the linear sin θ ≈ θ model. Past ~60° the divergence readout climbs past 5%.',
      },
    ],
  },
  {
    id: 'mech-m4',
    title: 'Overcome friction',
    brief: 'Find the critical angle where static friction loses its grip.',
    xp: 100,
    objectives: [
      {
        id: 'plane-slide',
        text: 'Make the block slide down the incline',
        hint: 'The block stays put while tan θ ≤ μ. Tilt past the critical angle and gravity wins.',
      },
      {
        id: 'plane-critical',
        text: 'Start sliding within ±2° of the critical angle θc = arctan μ',
        hint: 'Read the θc readout, set μ, then bring the angle to just past θc — sliding must START there (reset the block and retry if you overshoot).',
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Chemistry bench (new)                                              */
/* ------------------------------------------------------------------ */

const CHEM: LabMission[] = [
  {
    id: 'chem-m1',
    title: 'First steps at the bench',
    brief: 'Run a reaction, then prove you can count atoms.',
    xp: 60,
    objectives: [
      {
        id: 'chem-run-flask',
        text: 'Run any reaction in the flask',
        hint: 'Pick a reaction, then press "Run reaction" — bubbles, colour and the thermometer all follow the enthalpy sign.',
      },
      {
        id: 'chem-balance-any',
        text: 'Balance any equation (live atom counts must agree)',
        hint: 'Adjust the coefficient inputs until every element shows matching totals on both sides — the gcd must also be 1.',
      },
    ],
  },
  {
    id: 'chem-m2',
    title: 'Balance the Haber process',
    brief: 'N₂ + 3H₂ ⇌ 2NH₃ — the equation that feeds half the planet.',
    xp: 90,
    objectives: [
      {
        id: 'chem-balance-haber',
        text: 'Balance the Haber reaction exactly',
        hint: 'Nitrogen: 2 on the left. Hydrogen wants 6 on the left to give 2×3 on the right.',
      },
    ],
  },
  {
    id: 'chem-m3',
    title: 'Reach equilibrium',
    brief: 'ICE tables + Le Chatelier — real Kc values, solved for real.',
    xp: 110,
    objectives: [
      {
        id: 'chem-ice-solve',
        text: 'Solve an ICE table for x (given Kc) — forward or reverse',
        hint: 'Select an equilibrium reaction (⇌), set initial concentrations, press Solve — the bisection finds the root of Q(x) = Kc.',
      },
      {
        id: 'chem-ice-reshift',
        text: 'Change an initial concentration and re-solve (Le Chatelier)',
        hint: 'After a solve, bump one initial concentration and solve again — the system shifts to oppose the change.',
      },
    ],
  },
  {
    id: 'chem-m4',
    title: 'Feel the heat',
    brief: 'Read an energy diagram like a chemist: where do the reactants and products sit?',
    xp: 90,
    objectives: [
      {
        id: 'chem-heat-correct',
        text: 'Correctly classify a mystery energy diagram as exo- or endothermic',
        hint: 'Products BELOW reactants → exothermic (ΔH < 0). Products ABOVE → endothermic (ΔH > 0).',
      },
      {
        id: 'chem-heat-streak',
        text: 'Get 3 mystery diagrams right in a row',
        hint: 'Ignore the arrows — just compare the two plateau heights on the left (reactants) and right (products).',
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

export const MISSION_PACKS: Record<string, LabMission[]> = {
  circuit: CIRCUIT,
  signals: SIGNALS,
  os: OS,
  cache: CACHE,
  compiler: COMPILER,
  mechanics: MECHANICS,
  chem: CHEM,
}

export function getMissions(labId: string): LabMission[] {
  return MISSION_PACKS[labId] ?? []
}
