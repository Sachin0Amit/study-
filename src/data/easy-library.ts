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
  'cs-operating-systems':
    'Operating System = the manager of the computer. It shares CPU time, memory rooms and files between many programs without fights. Think hotel manager for programs.',
  'cs-javascript':
    'JavaScript = language that makes websites alive. Buttons, lists, fetching data, waiting without freezing. Like giving instructions to a fast but literal helper.',
  'ece-digital-systems':
    'Digital Logic = building computers from tiny ON/OFF switches. First binary numbers, then gates, then adders, then full small computer. Like Lego from switch to CPU.',
  'ece-electronics':
    'Electronics = controlling electricity to do work. First wires and resistors, then capacitors/coils, then diodes/transistors, then op-amps, then motors and power. Like water pipes for current.',
  'cs-algorithms':
    'Algorithms = best recipes to solve problems fast. Sorting, searching, shortest road, saving steps with memory. We also prove why recipe is correct and how fast.',
  'cs-cpp':
    'C++ = powerful language to talk close to the machine. Types, pointers, classes, templates. Like driving manual car: more control, more care needed.',
  'web-development':
    'Web Dev = from blank page to live site. HTML makes bones, CSS makes clothes, JS makes movement, React/Next makes big app, Node + DB saves data, then put online.',
  chemistry:
    'Chemistry = what things are made of and how they change. Moles count particles, equilibrium balances reactions, organic maps trace carbon paths. Start Mole Ch 1, go in order.',
  'cs-core-systems':
    'Core Systems = what happens under your apps. Databases save data safely, networks move it, compilers translate code, hardware runs it. Think post office + library + factory.',
  java:
    'Java = strict but safe language for big apps. Write class, make objects, handle errors, use collections and streams. Compiler catches mistakes early, like a strict teacher.',
}

export function easySubjectLine(s: Subject): string {
  const hit = SUBJECT_EASY[s.id]
  if (hit) return `Easy idea: ${hit}`
  return `Easy idea: ${s.name} is one track. Open it, read yellow boxes first, then lessons in order 1, 2, 3.`
}

/* ---------------- books: curated ---------------- */

const BOOK_EASY: Record<string, string> = {
  'math-master':
    'This book joins 2 maths books: Rosen (thinking + counting + graphs) Ch 1-13, then Stewart (calculus) Ch 14-30. Do Rosen Ch 1 first, it teaches how to read proofs.',
  'phys-master':
    'This book joins 5 physics books into 159 chapters. Feynman = story, Halliday/Young = big sums, Ewen = machines, Coletta = revision. Start Ch 1 motion, go slow.',
  'silberschatz-osc10':
    'The Dinosaur book. 15 chapters: what OS is, then processes, threads, CPU sharing, locks, deadlocks, memory, disk, files. Read Ch 1-3 in order, rest builds on it.',
  'flanagan-js7':
    'The Rhino book. Starts types and variables, then objects, functions, classes, then browser + Node + async. Type code in the playground after every lesson.',
  'mano-dld':
    'Mano builds a computer step by step: binary, Boolean maths, gates, adders, flip-flops, registers, then full CPU. Draw gates on paper while reading.',
  'elec-master':
    'Joins Hughes + Nilsson + Art of Electronics + Sedra/Smith into 30 chapters. DC first, then AC, then chips, then amplifiers and power. Always link formula to the lab toy on same page.',
  'clrs-alg3':
    'CLRS is the algorithms bible. Sorting first, then data structures, then smart tricks (dynamic, greedy), then graphs, then hard problems. Trace small examples by hand.',
  'stroustrup-cpp4':
    'By the man who made C++. Tour first, then basics, then classes/templates, then full library. Compile tiny programs, break them, fix them.',
  'webdev-complete':
    'Zero to job-ready: internet, HTML, CSS, JS, TypeScript, React/Next, Node API, DB, auth, testing, speed, SEO, Docker/cloud, final shop project. Build along.',
  'engmath-complete':
    'Engineering maths beyond calculus: matrices, ODEs, vector theorems, complex numbers, Laplace and Fourier. One tool per chapter, practice with numbers.',
  'jeemaths-complete':
    'Tricks-first maths: complex numbers, quadratics, matrices, counting, geometry, vectors. Learn one method, then solve 5 sums same way.',
  'chem-complete':
    'Full chemistry in 26 units: moles to equilibrium to organic maps to salt tests. Physical first, then organic, then inorganic. Write reactions by hand.',
  'dbms-complete':
    'Databases: draw ER boxes, write SQL, fix tables to BCNF, then locking and recovery. Think library records that many people borrow safely.',
  'cn-complete':
    'Networks layer by layer: wires to framing to routing to TCP to DNS. Each layer fixes one problem. Draw the packet journey for every sum.',
  'compcoa-complete':
    'Machines plus translators: CPU parts and pipelining first, then lexing, parsing, code making. Hardware runs what compiler writes.',
  'sigctrl-complete':
    'Signals plus control: waves, convolution, transforms, then feedback and stability. Every formula is a picture of movement.',
  'commem-complete':
    'Messages plus waves: noise, modulation, codes, Maxwell waves, antennas. Sender to receiver path is the one story.',
  'horstmann-java12':
    'Java from zero to job: platform, basics, objects, inheritance, lambdas, errors, generics, collections, threads, streams, files, DB. Code every lesson.',
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
