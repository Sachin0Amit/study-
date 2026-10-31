/**
 * Knowledge Universe — Operating Systems — Chapter 01: Operating Systems in Practice
 * 1 lesson · ~1,141 words
 * field: Systems & Infrastructure
 * legacy sources: computing-ai.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Systems & Infrastructure]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 cs-operating-systems-processes — Operating Systems: The Illusion of Many Machines
 */
import type { KnowledgeTopic } from '../../types'

export const osUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'cs-operating-systems-processes',
    title: 'Operating Systems: The Illusion of Many Machines',
    domain: 'Computing & AI',
    field: 'Systems & Infrastructure',
    branch: 'Operating Systems',
    tier: 'intermediate',
    concepts: [
      'Processes: programs in motion',
      'Virtual memory and address spaces',
      'Dual mode and system calls',
      'Time-sharing and context switching',
      'Scheduling policies and the quantum',
      'Threads and synchronization',
    ],
    words: 1141,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: "A laptop juggling a browser, a video call and a music player seems to run them all at once — on a handful of cores, in memory none of them owns, touching devices none of them may address directly. That simultaneity is the operating system's master illusion, assembled from time-sharing, hardware privilege levels and address translation. Peel back the magic and you find one of the most elegant pieces of engineering in daily life: a machine that multiplies itself by dividing itself.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: "Every application you trust with passwords, photos and documents depends on this machinery. Process isolation is what makes a crashed tab a nuisance rather than a wiped disk — and understanding it turns 'the computer is slow' from a mystery into a diagnosis.",
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A program lying on disk is a passive recipe; a process is that recipe in execution — its registers, its stack, its open files, its current instruction. The kernel keeps a process control block for each one: the record it consults to freeze a program mid-thought and resume it later as if nothing happened. Multitasking is rapid, disciplined switching among these records.',
      },
      {
        kind: 'para',
        text: "Every process believes it owns the machine's memory from address zero upward. That fiction is virtual memory: the processor's memory-management unit translates each virtual address through per-process page tables to physical RAM, and the kernel moves, shares or evicts pages behind the scenes. Two programs can load the same library at the same address — isolation survives because translation is per process.",
      },
      {
        kind: 'para',
        text: 'The CPU runs in at least two privilege modes: user mode, where ordinary code cannot touch devices or page tables, and kernel mode, where anything goes. A process requests service — read a file, send a packet — with a system call: a controlled jump that switches mode, does the work with full privilege and returns. User bugs crash the program; only the kernel may crash the machine.',
      },
      {
        kind: 'para',
        text: "When the scheduler moves the CPU from one process to another it performs a context switch, saving every register — program counter, stack pointer, condition codes — into the departing process's control block and loading the arriving one's. The switch costs microseconds of pure overhead, invisible at human timescales but decisive at machine ones. Everything the process was doing rides in that saved state; nothing else survives the transfer.",
      },
      {
        kind: 'para',
        text: 'A good scheduler juggles competing definitions of good: interactive programs want instant response, batch jobs want throughput, and nothing wants starvation. Round-robin rotates fairly, priority scheduling serves the urgent first, fair-share schedulers guarantee each group its slice. The quantum — how long a process runs before preemption — is the tuning knob: too long and responsiveness dies, too short and the machine spends its life context-switching.',
      },
      {
        kind: 'para',
        text: 'A process may split into threads that share its memory while keeping private registers and stacks — cheaper than processes and more dangerous, since any thread can scribble on any data. Correct programs coordinate with mutexes and condition variables; the classic failures, races and deadlocks, appear when locking discipline slips. Threads make sharing fast by making waiting cheap to arrange but hard to reason about.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: "Little's law",
        latex: 'L = \\lambda \\times W',
        meaning: 'Average number of processes in the system equals arrival rate times average time spent in it — a queueing identity no scheduler can dodge.',
      },
      {
        kind: 'formula',
        name: 'Context-switch overhead',
        latex: '\\text{overhead} = \\frac{T_{cs}}{T_q + T_{cs}}',
        meaning: 'Share of CPU time lost to switching, for quantum T_q and switch cost T_cs — the price of responsiveness.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how much CPU time is lost to context switching with a 10 ms quantum and a 0.1 ms switch, and how that changes with a 1 ms quantum.',
          'Recall the governing idea: overhead fraction = T_cs / (T_q + T_cs) — the switch cost measured against each full slice-plus-switch cycle.',
          'Apply: with T_q = 10 ms the overhead is 0.1/10.1 ≈ 0.99%, about one percent. Shrinking the quantum to 1 ms gives 0.1/1.1 ≈ 9.1% — nearly a tenth of the machine gone to bookkeeping.',
          'State the result: the 10 ms quantum loses about 1% to switching while the 1 ms quantum loses about 9% — responsiveness was bought at nine times the price.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Desktop and mobile systems running hundreds of processes behind one responsive screen',
          "Cloud platforms packing many customers' virtual machines onto shared physical servers",
          'Real-time systems in cars and medical devices, where the scheduler must guarantee deadlines',
          'Containers and sandboxes that reuse the same isolation primitives to fence off untrusted code',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "More processes is not more speed — on a saturated machine, adding work only lengthens queues, because Little's law is not a suggestion. A generous quantum makes interfaces feel dead; a tight one burns the CPU on switching. And threads share memory: the program that crashes 'randomly' under load usually has a race, not bad luck.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Process', def: 'A program in execution, with its own address space, registers and open resources.' },
          { term: 'Process control block', def: 'The kernel record holding everything needed to suspend and resume a process.' },
          { term: 'Context switch', def: "Saving one process's state and loading another's so the CPU can change hands." },
          { term: 'System call', def: 'The controlled doorway from user code into privileged kernel services.' },
          { term: 'Virtual memory', def: 'Per-process address translation giving each program the illusion of private memory.' },
          { term: 'Quantum', def: 'The maximum uninterrupted slice of CPU time granted before preemption.' },
          { term: 'Thread', def: "A unit of execution that shares its process's memory with its siblings." },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'During a context switch, the operating system must:',
            options: [
              'copy the entire address space of the process',
              'save the CPU register state of the outgoing process',
              'flush all open files to disk',
              'restart the process from its first instruction',
            ],
            answer: 1,
            explain: 'Registers, program counter and stack pointer go to the process control block; the address space stays put.',
          },
          {
            q: 'User programs cannot directly access devices because:',
            options: [
              'devices are too slow for user code',
              'the CPU enforces privilege modes and traps unauthorized operations',
              'the scheduler forbids it during a quantum',
              'device drivers are written in a different language',
            ],
            answer: 1,
            explain: 'User mode simply lacks the privilege; attempts trap to the kernel, which decides whether to help.',
          },
          {
            q: 'A scheduler quantum that is too short mainly causes:',
            options: [
              'starvation of low-priority processes',
              'excessive context-switching overhead',
              'larger page tables',
              'disk fragmentation',
            ],
            answer: 1,
            explain: 'Switch cost divided by slice length grows as the quantum shrinks — bookkeeping eats the machine.',
          },
          {
            q: 'Threads within one process differ from separate processes because threads:',
            options: [
              'have their own address spaces',
              'cannot be preempted by the scheduler',
              'share memory and resources while keeping private stacks and registers',
              'run only on separate cores',
            ],
            answer: 2,
            explain: 'Shared memory is the point — and the hazard — of threads.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Comfort with what a program is — code, data, stack — is enough to start here. Natural companions: page tables and virtual memory in depth, concurrency with its locks and deadlocks, and file systems, the other half of what a kernel does.',
        tone: 'path',
      },
    ],
  },
]
