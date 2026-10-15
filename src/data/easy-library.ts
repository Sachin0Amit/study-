// Easy lines for ALL subjects, books, chapters, labs.
// One file, super-simple words, covers 200+ chapters via keyword fallback
// so EVERY page gets easy help without manual entries.

import type { BookMeta, ChapterMeta, Subject } from './library'

/* ---------------- subjects: curated, one per subject ---------------- */

const SUBJECT_EASY: Record<string, string> = {
  mathematics:
    'Maths is two big games: proving what is true (Rosen logic, sets, graphs) and measuring change (Stewart calculus). Start with Logic Ch 1, it is the ABC for all other chapters.',
  physics:
    'Physics asks: why do things move, heat, shine and stick? Feynman gives the story, Halliday/Young give practice sums, Ewen/Coletta give daily-life machines. Start with motion, then forces.',
  chemistry:
    'Chemistry = what things are made of and how they change. Moles count particles, equilibrium balances reactions, organic maps trace carbon paths. Start Mole Ch 1, go in order.',
  english:
    'English = read carefully + write clearly. First find what the passage says, then how it says it, then fix grammar bits. Practice one small passage daily.',
  aptitude:
    'Aptitude = fast thinking games: patterns, puzzles, quick maths, and knowing the world. Learn one trick, solve 10 sums with it the same way.',
  'programming-c-cpp':
    'C & C++ = talk close to the machine. C first: types, loops, pointers. Then C++ adds classes and templates. Like driving manual car: more control, more care needed.',
  'programming-java':
    'Java = strict but safe language for big apps. Write class, make objects, handle errors, use collections and streams. Compiler catches mistakes early, like a strict teacher.',
  'web-development':
    'Web Dev = from blank page to live site. HTML makes bones, CSS makes clothes, JS makes movement, React/Next makes big app, Node + DB saves data, then put online.',
  'ai-data-science':
    'AI = make computer think. Python is your pen. Search and logic first, then learning from data, then neural nets. Train tiny models by hand first.',
  dsa:
    'Algorithms = best recipes to solve problems fast. Sorting, searching, shortest road, saving steps with memory. We also prove why recipe is correct and how fast.',
  toc:
    'Theory of Computation = what can machines even solve? Small machines (automata) read patterns, bigger ones read grammar, biggest (Turing) compute anything computable.',
  coa:
    'COA = how a computer is built inside. Registers hold numbers, datapath moves them, control says when, pipeline overlaps steps, memory keeps them close. One Lego level at a time.',
  'compiler-design':
    'Compiler = translator from your code to machine code. Cut words (lexing), build sentence tree (parsing), give meaning (translation), then make it fast (optimization).',
  'operating-systems':
    'Operating System = the manager of the computer. It shares CPU time, memory rooms and files between many programs without fights. Think hotel manager for programs.',
  dbms:
    'Databases = a very tidy cupboard for facts. Draw ER boxes, write SQL questions, arrange tables so no fact repeats, then many people can read/write safely.',
  'computer-networks':
    'Networks = post office for data. Each layer adds an address or a promise: frame, route, deliver, verify. Trace one packet end to end and layers click.',
  'microprocessors-embedded':
    'Micro & embedded = tiny computers inside gadgets. Learn the chip, then its timers and pins, then the buses it talks on, then the mini OS that runs many jobs on time.',
  'software-emerging':
    'Software practice = build big things without chaos: plan, design, test. Then the new stack: cloud rents computers, IoT connects objects, blockchain keeps shared notes.',
  cybersecurity:
    'Security = locks and trust for the digital world. Old ciphers to modern math locks, then who are you (auth), is line private, and how attacks try to sneak past.',
  'visual-computing':
    'Visual computing = pictures by numbers. Graphics draws scenes from geometry; image processing cleans and understands photos. Both speak in pixels and transforms.',
  'digital-electronics':
    'Digital Logic = building computers from tiny ON/OFF switches. First binary numbers, then gates, then adders, then full small computer. Like Lego from switch to CPU.',
  'electronic-devices-circuits':
    'Electronics = controlling electricity to do work. First wires and resistors, then capacitors/coils, then diodes/transistors, then op-amps. Like water pipes for current.',
  'signals-systems':
    'Signals = any changing number (sound, sensor, image). Systems change signals. Transforms are just smarter glasses to view them. Filters then clean them.',
  'communication-systems':
    'Communication = carry a message on a wave across space. Modulation rides the wave, noise fights it, coding protects it, antennas and fibres are the roads.',
  electromagnetics:
    'EM = invisible fields that push and carry. Charges make E, currents make B, changing them makes waves. Lines, guides and antennas steer the wave where you want.',
  'vlsi-design':
    'VLSI = draw the city plan of a chip. Transistors are houses, wires are roads, clock is traffic light. Fabrication then builds it layer by layer like 3D printing in silicon.',
  'electric-circuits':
    'Circuits = the grammar of every electrical thing. Ohm and Kirchhoff are the spelling; theorems are shortcuts; transients and resonance are the drama.',
  'electrical-machines':
    'Machines = electricity ↔ rotation. Motors spin from current, generators do the reverse, transformers pass AC between voltages. Drives then control the spin.',
  'power-systems':
    'Power = the journey of electricity: generated, stepped up, sent far, stepped down, protected all the way. One-line diagrams tell the whole story.',
  'control-instrumentation':
    'Control = teach machines to hold a value: measure, compare, correct. Instrumentation = the measuring half: bridges, scopes, sensors that turn world into numbers.',
  'energy-automotive':
    'Energy track = engines and wheels and sun and wind. Burn or flow to make motion or power, then move it: plants, cars, panels, turbines — one energy story.',
  'mechanics-graphics':
    'Mechanics = why things stand or fall (forces), graphics = how to draw them so others can build them (projections). Think with vectors, speak with drawings.',
  'solids-materials':
    'Solids = how much load a shape can carry (stress, bending). Materials = what the stuff itself is (crystals, heat treatment). Shape meets substance here.',
  'machines-design':
    'Theory of Machines = the moving skeleton: links, cams, gears. Design = sizing every bone so it never breaks: shafts, springs, bearings. Motion made safe.',
  'thermal-fluids':
    'Thermal & fluids = heat and flow, the two invisible movers. Thermodynamics is the money of energy, fluids is the travel, heat transfer is the exchange rate.',
  'manufacturing-industrial':
    'Manufacturing = shape metal: cast, weld, cut. Metrology = measure honestly. Industrial = plan so everything arrives on time and cheap. Make, measure, manage.',
  'mechatronics-robotics':
    'Mechatronics = mechanics + electronics + code in one machine. Robots are its stars: arm moves (kinematics), balance (control), senses (sensors). Build one small system first.',
}

export function easySubjectLine(s: Subject): string {
  const hit = SUBJECT_EASY[s.id]
  if (hit) return `Easy idea: ${hit}`
  return `Easy idea: ${s.name} is one track. Open it, read yellow boxes first, then lessons in order 1, 2, 3.`
}

/* ---------------- books: curated ---------------- */

const BOOK_EASY: Record<string, string> = {
  'math-master':
    'This book joins 2 maths books: Rosen (thinking + counting + graphs) Ch 1-13, then Stewart (calculus) Ch 14-30, then algebra, applied skills and engineering maths. Do Rosen Ch 1 first, it teaches how to read proofs.',
  'phys-master':
    'This book joins 5 physics books into 47 topic chapters. Feynman = story, Halliday/Young = big sums, Ewen = machines, Coletta = revision. Start Ch 1 motion, go slow.',
  'chem-complete':
    'Full chemistry: moles to equilibrium to organic maps to salt tests, plus engineering chemistry. Physical first, then organic, then inorganic. Write reactions by hand.',
  'english-complete':
    'Reading + writing in one small book: comprehension passages, grammar rules, expression. Do one section a day, always with a pencil in hand.',
  'aptitude-complete':
    'Four kinds of thinking: reasoning puzzles, quick maths, world facts, science facts. Learn one trick, then drill 10 questions the same way.',
  'c-cpp-complete':
    'C first (small, close to metal), then the full C++ tour by Stroustrup. Type every example, break it, fix it. Pointers click only when you draw memory boxes.',
  'java-complete':
    'Java from zero to job: platform, basics, objects, inheritance, lambdas, errors, generics, collections, threads, streams, files, DB. Code every lesson.',
  'web-complete':
    'Zero to job-ready web: internet, HTML, CSS, JS, TypeScript, React/Next, Node API, DB, auth, testing, speed, SEO, Docker/cloud, capstone — then the deep JavaScript bible. Build along.',
  'ai-complete':
    'Python first (your pen), then AI thinking (search, logic), then learning from data, then neural nets, then big data. Train tiny models by hand before using libraries.',
  'dsa-complete':
    'CLRS is the algorithms bible. Sorting first, then data structures, then smart tricks (dynamic, greedy), then graphs, then hard problems. Trace small examples by hand.',
  'toc-complete':
    'One chapter, nine ideas: machines that read patterns (automata), grammars that build strings, Turing machines that compute. Draw state circles for everything.',
  'coa-complete':
    'Build a computer step by step: register moves, then processor, then control, then the classic basic computer — then modern ISA, pipelines and caches. Draw the datapath.',
  'compiler-complete':
    'Five chapters, one pipeline: words → tree → meaning → memory plan → faster code. Write a tiny compiler for arithmetic and the whole course clicks.',
  'os-complete':
    'The Dinosaur book. 15 chapters: what OS is, then processes, threads, CPU sharing, locks, deadlocks, memory, disk, files. Read Ch 1-3 in order, rest builds on it.',
  'dbms-complete':
    'Databases: draw ER boxes, write SQL, fix tables to BCNF, then locking and recovery. Think library records that many people borrow safely.',
  'networks-complete':
    'Networks layer by layer: wires to framing to routing to TCP to DNS, plus the telecom view of switching. Each layer fixes one problem. Draw the packet journey for every sum.',
  'microembedded-complete':
    'Chips in gadgets: first the classic microprocessor and its timing, then microcontroller pins and buses, then the tiny RTOS. Blink an LED mentally after every section.',
  'software-complete':
    'How big software ships: plan, design, build, test — then rent computers (cloud), connect objects (IoT), share ledgers (blockchain). One course, four superpowers.',
  'cybersecurity-complete':
    'Locks of the digital world: old ciphers, modern math locks, signatures, then network defenses and attack stories. Encrypt a message by hand once — never forget it.',
  'visual-complete':
    'Pictures by numbers: draw scenes (graphics) and understand photos (image processing). Both use transforms — matrices are your brushes.',
  'digital-complete':
    'Mano builds logic step by step: binary, Boolean maths, gates, adders, flip-flops, registers — plus the full digital course view. Draw gates on paper while reading.',
  'edc-complete':
    'Electrons under control: diode, transistor, amplifier, op-amp, timer chip. Always link the formula to the lab breadboard on the same page.',
  'signals-complete':
    'One signal story: classify, convolve, transform (Fourier/Laplace/z), sample, then filter digitally. Ends with speech and heartbeat signals.',
  'communication-complete':
    'Messages plus waves: noise, modulation, codes, wireless, satellites, optical fibres. Sender-to-receiver path is the one story.',
  'em-complete':
    'Fields first (Maxwell), then waves on lines (Smith chart), then antennas that launch them, then microwave pipes and radar that steer them.',
  'vlsi-complete':
    'Chips: first how silicon is built (fab), then how logic is drawn (design). One subject, both halves — the factory and the architect.',
  'circuits-complete':
    'The circuit bible: DC and AC basics, then the deep analysis (theorems, transients, resonance), then network theory and synthesis, then the materials inside.',
  'machines-complete':
    'Everything that spins: DC, induction, synchronous, special machines — plus the drives that control them and the EVs they power.',
  'power-complete':
    'The grid: make power, ship power, protect power. Per-unit maths first, then faults, then relays and breakers, then HVDC superhighways.',
  'control-complete':
    'Measure and regulate: modelling, stability, root locus and Bode design — then the instruments (bridges, scopes, sensors) that feed the controller.',
  'energy-complete':
    'Energy and motion: power plants, engines, cars, and the sun-and-wind future. One heat-and-work story from boiler to wheel to solar panel.',
  'mechanics-complete':
    'Forces and drawings: free-body diagrams first, then friction, trusses, dynamics — then the projection rules that let engineers share designs on paper.',
  'solids-complete':
    'Load meets material: stress, bending, torsion, deflection — then what materials ARE (crystals, heat treatment). Shape and substance, one book.',
  'design-complete':
    'Machines that move: links and cams, then velocity and force analysis, then balancing and vibration — then design every part to survive fatigue.',
  'thermal-complete':
    'Heat and flow: energy money (thermo), moving fluids, heat exchange, turbomachinery, and the cold side (refrigeration and AC).',
  'manufacturing-complete':
    'Make, measure, manage: casting to CNC, then honest measurement (metrology), then CAD/CAM robots, then the planning maths of industry.',
  'mechatronics-complete':
    'Machines that think: sensors in, actuators out, microcontroller brain — then robots that move, sense and plan. Build one small system first.',
}

export function easyBookLine(b: BookMeta): string {
  const hit = BOOK_EASY[b.id]
  if (hit) return `Easy idea: ${hit}`
  return `Easy idea: read this book chapter 1 to last in order. Each chapter needs the previous one.`
}

/* ---------------- chapters: curated Rosen + OSC, smart fallback for rest ---------------- */

const CHAPTER_EASY: Record<string, string> = {
  // Rosen
  'rosen-ch1': 'Logic = true/false sentences + AND OR NOT + if-then + proofs. Like rules of a debate game. Master this, all maths becomes readable.',
  'rosen-ch2': 'Sets = bags of things. Functions = machines with one output per input. Sequences = ordered lists. Like sorting fruits, vending machine, queue.',
  'rosen-ch3': 'Algorithms = fixed recipes. Big-O = how slow when big. Like comparing 2 delivery routes for 10 vs 10 lakh orders.',
  'rosen-ch4': 'Number theory = remainders, primes, secret codes. RSA lock uses two big primes. Like clock maths + secret letter game.',
  'rosen-ch5': 'Induction = domino proof. Recursion = recipe calling smaller self. Hanoi disks = classic recursive game. Push one domino, all fall.',
  'rosen-ch6': 'Counting = how many ways? Permutation = order matters (race places), Combination = order not (team pick). Like menu choices.',
  'rosen-ch7': 'Probability = chance 0 to 1. Bayes = update guess with new clue. Expected value = long-run average. Like coin toss + disease test puzzle.',
  'rosen-ch8': 'Advanced counting = Fibonacci rabbits, divide-and-conquer, generating packs, inclusion-exclusion (add back overlap). Like smart counting shortcuts.',
  'rosen-ch9': 'Relations = links like friend-of. Reflexive/symmetric/transitive = self/mutual/chain rules. Like family and road links.',
  'rosen-ch10': 'Graphs = dots + lines = maps, friends, internet. Euler = cover all roads once, Dijkstra = shortest road. Draw dots while reading.',
  'rosen-ch11': 'Trees = graphs with no loops, like family tree. Traversal = visit order. MST = cheapest roads joining all cities.',
  'rosen-ch12': 'Boolean = only 0/1. Gates = AND OR NOT switches. K-map = picture to simplify switches. Like building calculator from Lego switches.',
  'rosen-ch13': 'Computation = grammars make sentences, automata read them, Turing machine = imaginary full computer. Halting = will program stop? Big limit idea.',
  // OSC
  'osc-ch1': 'OS intro: what OS does, CPU + memory + disk parts, interrupts, dual-mode. Like tour of hotel before meeting manager.',
  'osc-ch2': 'OS structure: services, system calls (ask OS for help), monolithic vs microkernel, booting. Like hotel desk + building plan.',
  'osc-ch3': 'Processes: running program, PCB ID card, fork children, IPC talk. Like persons with ID cards sharing rooms.',
  'osc-ch4': 'Threads: small workers in one program + Amdahl speed limit. Like many cooks in one kitchen.',
  'osc-ch5': 'CPU scheduling: who runs next? FCFS first-come, SJF shortest, Round-robin turns. Like token queue at clinic.',
  'osc-ch6': 'Locks: race when two write same time. Mutex = one key room, semaphore = counted passes. Like one toilet key.',
  'osc-ch7': 'Famous sync stories: buffer producer-consumer, readers-writers, 5 dining men with 5 spoons. Same lock ideas in stories.',
  'osc-ch8': 'Deadlock = all wait each other. Banker checks safe to lend. Like 4 cars stuck at crossing.',
  'osc-ch9': 'Memory: addresses, paging into same-size pages, TLB fast diary. Like library shelves with page numbers.',
  'osc-ch10': 'Virtual memory: pretend more RAM using disk, FIFO/LRU throw-out rules. Like small desk + big cupboard.',
  'osc-ch11': 'Disks: spinning plates, SSTF/SCAN arm moves, RAID copies for safety. Like record player arm finding songs.',
  'osc-ch12': 'I/O: keyboard/disk talk via polling, interrupts, DMA helper. Like doorbell vs knocking again and again.',
  'osc-ch13': 'Files: names, folders, rights. Like office almari with labels and locks.',
  'osc-ch14': 'Inside files: how bytes sit on disk blocks, linked vs indexed, journal diary for crash safety.',
  'osc-ch15': 'Sharing files: mount, network NFS, same file on many computers. Like shared drive with rules.',
}

export function easyChapterLine(ch: ChapterMeta): string {
  const hit = CHAPTER_EASY[ch.id]
  if (hit) return `Easy idea: ${hit}`
  // smart fallback: use number + short title + first sentence of description
  const t = `${ch.shortTitle} ${ch.title} ${ch.description}`.toLowerCase()
  let hint = 'Read lessons 1,2,3 in order. Each needs the previous.'
  if (/(limit|deriv|integr|series|vector|calculus|differenti)/.test(t))
    hint = 'Calculus part: one small idea (slope or area) then many sums. Draw graph while reading.'
  else if (/(force|motion|energy|wave|quantum|relativ|electric|magnet|orbit|projectile)/.test(t))
    hint = 'Physics part: first picture the scene, then formula. Play with the lab toy on same page.'
  else if (/(sort|graph|tree|hash|dynamic|greedy|complexity|proof)/.test(t))
    hint = 'Algorithms part: trace tiny example by hand (n=3), then big idea clicks.'
  else if (/(thread|process|schedul|deadlock|memory|paging|file|disk)/.test(t))
    hint = 'OS part: think hotel/kitchen sharing story, then technical word becomes easy.'
  else if (/(gate|boolean|circuit|flip|register|k-map)/.test(t))
    hint = 'Digital part: draw switches 0/1 on paper. 0=OFF, 1=ON fixes half confusion.'
  else if (/(diode|transistor|op-amp|filter|phasor|fourier|motor|power)/.test(t))
    hint = 'Electronics part: link every formula to current flow in the lab. Current = water in pipe.'
  else if (/(closure|promise|async|object|function|event|dom|react|node)/.test(t))
    hint = 'Coding part: type the 5-line example yourself, break it, fix it. Reading only is not enough.'
  else if (/(pointer|class|template|inherit|exception)/.test(t))
    hint = 'C++ part: write tiny program per lesson. Compiler errors are your teacher.'
  else if (/(html|css|http|auth|sql|docker|test|seo)/.test(t))
    hint = 'Web part: build along. One page, then style, then click, then save to DB, then deploy.'
  const first = ch.description.split('.')[0]
  return `Easy idea: Ch ${ch.number} ${ch.shortTitle} — ${first}. ${hint}`
}

/* ---------------- labs: one easy line per lab group ---------------- */

const LAB_EASY: Record<string, string> = {
  'truth-table-lab': 'Type AND OR NOT sentence, see full true/false table grow. Green TAUTOLOGY = always true.',
  'venn-explorer': 'Drag balls between bags. Union = both together, intersection = only common.',
  'sorting-visualizer': 'Watch bars jump as Bubble/Quick sort runs. Count steps to feel Big-O.',
  'gcd-stepper': 'See Euclid divide again and again till remainder 0. Last non-zero = GCD.',
  'hanoi-tower': 'Move disks with no big on small. Solver shows recursion: move n-1, move big, move n-1.',
  'counting-lab': 'Pick balls: order matters = permutation, not = combination. Numbers grow fast.',
  'probability-lab': 'Toss 1000 coins virtually. Heads settles near half. That is law of large numbers.',
  'recurrence-explorer': 'Fibonacci rabbits grow from last two. Change rule, see curve explode or calm.',
  'relation-explorer': 'Click matrix cells, see arrows + properties tick together.',
  'graph-playground': 'Drag dots, join lines, press BFS/DFS/Dijkstra and watch walk light up.',
  'tree-traversal': 'Press pre/in/post and watch visit order glow on tree.',
  'logic-gates': 'Join switches, flip input, see light travel through gates.',
  'fsm-simulator': 'Feed letters like 1011, watch robot jump states and accept or reject.',
  'cpu-scheduler': 'Same jobs, different queue rules. See Gantt bars + waiting time change.',
  'race-lab': 'Two workers add counter together, counts vanish. Add lock, counts stay correct.',
  'dining-philosophers': '5 men, 5 spoons. All pick left = stuck. Order rule or waiter fixes.',
  'bankers-algorithm': 'Bank checks if lending keeps a safe order to finish all. Safe = yes, unsafe = wait.',
  'paging-visualizer': 'Split address into page + offset, walk table, add TLB hit maths.',
  'page-replacement': 'Same page requests, FIFO vs LRU throw-out. See faults count + Belady surprise.',
  'disk-scheduler': 'Disk arm sweeps. See total movement for FCFS vs SCAN.',
  'file-allocation': 'Same file on blocks: together vs linked chain vs index diary. Read back cost differs.',
  'derivative-lab': 'Drag secant, shrink to tangent. Slope now = derivative.',
  'riemann-lab': 'Add more thin rectangles, total nears true area = integral.',
  'taylor-lab': 'Add polynomial pieces 1,2,3... curve hugs real graph tighter.',
  'curve-lab': 'Change equation, curve and arrows redraw at once.',
  'js-playground': 'Type real JS, press run, see output. Break it safely here.',
  'event-loop-lab': 'Push tasks/timers, watch stack empty then queue jobs run in exact order.',
  'kmap-minimizer': 'Click 1s on map, big rectangles give smallest formula.',
  'sequential-lab': 'Clock ticks flip-flop. See state jump + table together.',
  'periodic-table-lab': 'Click any element, watch electron shells orbit. Switch trends to see electronegativity & radius shrink across rows.',
  'equilibrium-lab': 'Add drops from buret, watch beaker color flip at equivalence pH. Heat or squeeze gas to see Le Chatelier shift.',
  'molecular-lab': 'Drag to spin molecule in 3D. See how lone-pair electrons squash bond angles (VSEPR).',
  'crystal-lattice-lab': 'Spin unit cells (SC, BCC, FCC, NaCl, Diamond) in WebGL 3D, slice with Miller planes (111), and measure bond angles.',
  'breadboard-oscilloscope-sim': 'Wire real circuits on a solderless breadboard with animated electrons and probe dual channels on a calibrated CRT scope.',
  'kinetics-lab': 'Slide temperature or turn on catalyst to see activation energy wall drop and reaction speed up.',
  'cpp-playground': 'Type small C++ logic, press run, see output. Break it safely here, fix errors one by one.',
  'java-playground': 'Type small Java logic, press run, see output. Break it safely here, fix errors one by one.',
}

export function easyLabLine(toolKey: string, fallbackTitle: string, fallbackDesc: string): string {
  const hit = LAB_EASY[toolKey]
  if (hit) return `Easy play: ${hit}`
  const clean = fallbackDesc.split('.')[0]
  return `Easy play: ${fallbackTitle} — ${clean}. Press buttons, watch what moves.`
}

/* ---------------- sections: smart fallback from section number + title ---------------- */

export function easySectionLine(sectionNumber: number, title: string, description: string): string {
  const first = description.split('.')[0]
  return `Easy: §${sectionNumber} ${title} — ${first}. Read yellow boxes first, then try one small example yourself.`
}
