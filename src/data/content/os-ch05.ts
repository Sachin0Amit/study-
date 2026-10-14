import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 5: CPU Scheduling (Sections 5.1 – 5.5 as mapped in library.ts)
// Master study content. All worked-example numbers are the book's own.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const osCh5Content: SectionContent[] = [
  // ------------------------------------------------------------------ 5.1
  {
    sectionId: 'osc-ch5-s1',
    readingTime: 8,
    intro: 'Multiprogramming exists to keep the CPU busy: whenever one process must wait — usually for I/O — the operating system hands the core to another. CPU scheduling is the machinery that makes this decision, and almost everything in this chapter flows from one empirical fact: process execution alternates between CPU bursts and I/O bursts, and the bursts are overwhelmingly short.',
    objectives: [
      'Describe the CPU–I/O burst cycle and the shape of the CPU-burst duration histogram',
      'Identify the four circumstances under which CPU-scheduling decisions occur and classify each as preemptive or nonpreemptive',
      'Explain the roles of the CPU scheduler and the dispatcher, and define dispatch latency',
      'Explain why preemptive scheduling creates race conditions and what it demands of kernel design',
    ],
    concepts: [
      {
        term: 'CPU–I/O burst cycle',
        kind: 'definition',
        statement: 'Process execution consists of a **cycle of CPU execution and I/O wait**: a process begins with a CPU burst, followed by an I/O burst, then another CPU burst, and so on, until a final CPU burst ends with a system request to terminate execution.',
        detail: 'A typical sequence looks like: load, store, add, store, read from file (CPU burst) → wait for I/O (I/O burst) → store, increment, index, write to file (CPU burst) → wait for I/O → and so on. The objective of multiprogramming is to have some process running at all times, so when one process waits, another takes over the CPU — on a multicore system, this idea extends to keeping every core busy.',
      },
      {
        term: 'Histogram of CPU-burst durations',
        kind: 'insight',
        statement: 'Measured CPU-burst durations form a curve generally characterized as **exponential or hyperexponential**: a large number of short CPU bursts and a small number of long ones.',
        detail: 'An I/O-bound program typically has many short CPU bursts; a CPU-bound program has a few long ones. This distribution is the empirical foundation for the algorithms of Section 5.3 — it is why favoring short bursts (SJF) and preempting long ones (RR) is so effective.',
      },
      {
        term: 'CPU scheduler',
        kind: 'definition',
        statement: 'The **CPU scheduler** selects, whenever the CPU becomes idle, one of the processes in the ready queue and allocates the CPU to it.',
        detail: 'The ready queue is not necessarily FIFO: it can be implemented as a FIFO queue, a priority queue, a tree, or simply an unordered linked list. Conceptually all ready processes are lined up waiting for the CPU; the records in the queue are the process control blocks (PCBs) of those processes.',
      },
      {
        term: 'The four scheduling decision circumstances',
        kind: 'method',
        statement: 'CPU-scheduling decisions may take place when a process: (1) switches from **running to waiting** (for example an I/O request or wait() for a child); (2) switches from **running to ready** (for example an interrupt); (3) switches from **waiting to ready** (for example I/O completion); or (4) **terminates**.',
        detail: 'For (1) and (4) there is no choice — a new process must be selected. Circumstances (2) and (3) involve a choice, and it is exactly these two that preemptive policies exploit: if scheduling happens only under (1) and (4), the scheme is **nonpreemptive (cooperative)**; otherwise it is **preemptive**. Under nonpreemptive scheduling a process keeps the CPU until it terminates or blocks.',
      },
      {
        term: 'Preemption, kernel design, and reentrancy',
        kind: 'insight',
        statement: 'Preemptive scheduling can result in **race conditions when data are shared among several processes**, and it forces the kernel itself to be designed carefully: code must be **reentrant** (safe to interrupt and re-execute), and shared kernel data structures must be protected (for example with mutex locks).',
        detail: 'If a process is preempted in the middle of updating kernel data such as I/O queues, chaos ensues. A nonpreemptive kernel waits for system calls to complete or for a process to block before context switching — simple, and essentially free of kernel-data races, but a poor model for real-time computing. A preemptive kernel requires mechanisms such as mutex locks; most modern operating systems are now fully preemptive in kernel mode. Sections of code affected by interrupts disable interrupts at entry and re-enable them at exit; such sections are rare and contain few instructions. Historically, cooperative (nonpreemptive) designs were also attractive for early desktop and mobile systems because avoiding preemptive context switching saves energy — at the cost of one misbehaving process being able to hang the whole machine.',
      },
      {
        term: 'Dispatcher and dispatch latency',
        kind: 'definition',
        statement: 'The **dispatcher** is the module that gives control of the CPU to the process selected by the CPU scheduler: it switches context, switches to user mode, and jumps to the proper location in the user program. The time it takes to stop one process and start another running is the **dispatch latency**.',
        detail: 'The dispatcher runs on every context switch, so it must be as fast as possible. Dispatch latency is one of the two latencies a real-time system must tightly bound (Section 5.5); the other is interrupt latency.',
      },
      {
        term: 'Measuring context switches',
        kind: 'insight',
        statement: 'On Linux, the **vmstat** command reports system-wide context-switch counts, and the file /proc/<pid>/status reports per-process counts, distinguishing **voluntary** switches (the process blocked for a resource) from **nonvoluntary** ones (the CPU was taken away, for example by time-slice expiry or preemption).',
        detail: 'In the book’s example, vmstat 1 3 reports averages of 24 context switches per second since boot, then 225 and 339 in two successive one-second intervals; a process with 150 voluntary and 8 nonvoluntary switches is clearly I/O-bound — it chooses to block often and is rarely preempted.',
      },
    ],
    examples: [
      {
        title: 'Classifying scheduling events',
        problem: 'For each of the following events, state which of the four scheduling circumstances it corresponds to, and whether a scheduling choice is involved.',
        steps: [
          { label: 'Step 1: A blocking I/O request', text: 'The process issues a read() and moves from running to waiting — circumstance 1. A new process must be selected; this decision point exists in every scheduling policy, preemptive or not.' },
          { label: 'Step 2: A timer interrupt expires', text: 'The quantum of the running process ends and it moves from running to ready — circumstance 2. Acting on it (preempting) is optional: only preemptive schedulers do.' },
          { label: 'Step 3: A disk interrupt completes I/O', text: 'A blocked process moves from waiting to ready — circumstance 3. The scheduler may now choose to preempt the running process in favor of the newly ready one; again, only preemptive policies exercise this choice.' },
          { label: 'Step 4: A process terminates', text: 'Circumstance 4. Like circumstance 1, there is no choice: the CPU must be given to some ready process if one exists.' },
        ],
        result: 'Circumstances 1 and 4 force a scheduling decision under every policy; circumstances 2 and 3 are precisely what distinguish preemptive from nonpreemptive (cooperative) scheduling.',
      },
      {
        title: 'Reading context-switch counters on Linux',
        problem: 'How would you measure how often context switches occur, system-wide and for one process?',
        steps: [
          { label: 'Step 1: System-wide counts', text: 'Run vmstat 1 3. The trimmed output in the book shows three numbers of context switches per second: 24, 225, 339.' },
          { label: 'Step 2: Interpret the lines', text: 'The first line (24) is the average since the machine booted; the next two lines (225, 339) are the counts over the two most recent one-second intervals — the instantaneous load is an order of magnitude above the long-run average.' },
          { label: 'Step 3: Per-process counts', text: 'cat /proc/2166/status shows voluntary ctxt switches: 150 and nonvoluntary ctxt switches: 8 for the process with pid 2166.' },
          { label: 'Step 4: Draw the conclusion', text: 'The process voluntarily gives up the CPU often (blocking for I/O) and is almost never preempted — the profile of an I/O-bound process. A CPU-bound process shows the opposite: few voluntary, many nonvoluntary switches.' },
        ],
        result: 'Context-switch behavior is directly observable, and the voluntary/nonvoluntary split reveals whether a process is I/O-bound or CPU-bound.',
      },
    ],
    keyTakeaways: [
      'Process execution is an alternating cycle of CPU bursts and I/O bursts, ending with a termination request.',
      'The CPU-burst duration histogram is exponential or hyperexponential: a large number of short bursts, a small number of long ones.',
      'Scheduling decisions occur on running → waiting and termination (mandatory) and on running → ready and waiting → ready (the preemptive choice points).',
      'Preemptive scheduling can create race conditions on shared data; kernels must be reentrant or nonpreemptive, and preemption makes real-time responsiveness possible.',
      'The dispatcher performs the context switch, mode switch and jump; its cost is the dispatch latency.',
      'Context-switch counts are measurable with vmstat and /proc/<pid>/status, split into voluntary and nonvoluntary switches.',
    ],
    quiz: [
      {
        q: 'A running process issues a blocking I/O request. Which scheduling circumstance is this, and is a scheduling decision mandatory?',
        options: ['Circumstance 1 (running → waiting); a new process must be selected', 'Circumstance 2 (running → ready); selection is optional', 'Circumstance 3 (waiting → ready); selection is optional', 'Circumstance 4 (termination); the CPU simply stays idle'],
        answer: 0,
        explanation: 'Blocking for I/O moves the process from running to waiting — circumstance 1. Like termination, it leaves no choice: the CPU must be handed to another ready process if one exists.',
      },
      {
        q: 'Measured across many processes, the durations of CPU bursts typically form a distribution that is:',
        options: ['Uniform across all durations', 'Mostly short bursts with a long tail, roughly exponential or hyperexponential', 'Mostly long bursts with a few short ones', 'Strictly periodic'],
        answer: 1,
        explanation: 'The classic histogram is exponential or hyperexponential: a large number of short CPU bursts and a small number of long ones. I/O-bound programs contribute many short bursts; CPU-bound programs contribute a few long ones.',
      },
      {
        q: 'Why is a nonpreemptive kernel essentially free of race conditions on kernel data structures?',
        options: ['Because all interrupts are permanently disabled', 'Because kernel data structures can never be left half-updated by a preempted process', 'Because each process gets a private copy of all kernel data', 'Because only one CPU core can exist in such systems'],
        answer: 1,
        explanation: 'A nonpreemptive kernel lets a kernel-mode process run until it exits kernel mode, blocks, or yields — so a kernel update is always completed before another process can touch the same structure. The price is poor real-time responsiveness.',
      },
      {
        q: 'Dispatch latency is defined as:',
        options: ['The time a process spends waiting in the ready queue', 'The length of one time quantum', 'The time for the dispatcher to stop one process and start another running', 'The time needed to service an interrupt'],
        answer: 2,
        explanation: 'The dispatcher stops one process (saving its state) and starts another (restoring state, switching to user mode, jumping into the program). That interval is the dispatch latency; interrupt service time is the separate interrupt latency.',
      },
    ],
  },

  // ------------------------------------------------------------------ 5.2
  {
    sectionId: 'osc-ch5-s2',
    readingTime: 7,
    intro: 'Before comparing algorithms we need a yardstick. The book defines five criteria — CPU utilization, throughput, turnaround time, waiting time and response time — plus one elegant law that ties queue length, arrival rate and waiting time together no matter which scheduler you run.',
    objectives: [
      'Define all five scheduling criteria and the direction in which each should be optimized',
      'Express turnaround, waiting and response time with per-process formulas',
      'Apply Little’s law to compute queue length, arrival rate or waiting time',
      'Explain why optimization targets conflict and why interactive systems care about variance',
    ],
    concepts: [
      {
        term: 'CPU utilization and throughput',
        kind: 'definition',
        statement: '**CPU utilization** is the fraction of time the CPU is busy — conceptually 0 to 100 percent, but in real systems it should range from 40 percent (lightly loaded) to 90 percent (heavily loaded). **Throughput** is the number of processes completed per time unit.',
        detail: 'Both are to be maximized. Throughput scale varies wildly with workload: long processes may complete at one per several seconds, while short transactions can reach tens of processes per second. On Linux, macOS and UNIX systems, CPU utilization can be read with the top command.',
      },
      {
        term: 'Turnaround time',
        kind: 'notation',
        statement: 'The **turnaround time** of process $i$ is the interval from submission to completion, $$T_i = t_{\\text{completion}} - t_{\\text{arrival}}.$$ It is the sum of the periods spent waiting in the ready queue, executing on the CPU, and doing I/O.',
        detail: 'From the point of view of a single process, turnaround is the total time it suffers. It is to be minimized — but note that the scheduler controls only the waiting component of it.',
      },
      {
        term: 'Waiting time',
        kind: 'notation',
        statement: 'The **waiting time** $W_i$ is the sum of the periods a process spends waiting in the ready queue. The scheduling algorithm does not affect execution or I/O time — it affects only ready-queue time. For the single-burst analyses of Section 5.3, $W_i = T_i - b_i$, where $b_i$ is the process’s CPU burst.',
        detail: 'When the book’s examples assume one CPU burst per process, turnaround minus the burst leaves exactly the waiting time. When a process waits several separate times (after preemptions), $W_i$ is the sum of all those periods.',
      },
      {
        term: 'Response time',
        kind: 'notation',
        statement: 'The **response time** is the time from the submission of a request until the first response is produced, $$R_i = t_{\\text{first}} - t_{\\text{arrival}}.$$ It is the time it takes to start responding, not the time it takes to output the response.',
        detail: 'This is the defining metric for interactive systems: a process can produce some output fairly early and keep computing while results are displayed. Turnaround time alone would badly measure that experience.',
      },
      {
        term: 'Little’s law',
        kind: 'law',
        statement: 'If $n$ is the average number of processes in a queue, $\\lambda$ the average arrival rate, and $W$ the average waiting time in the queue, then in steady state $$n = \\lambda \\times W.$$ The law is valid for **any** scheduling algorithm and **any** arrival distribution.',
        detail: 'During the time $W$ that a process waits, $\\lambda \\times W$ new processes arrive; in steady state arrivals equal departures, which forces the identity. For scheduler design this is a powerful tool: measure any two of the quantities and the third is determined — for example, with 7 arrivals per second and an average of 14 processes in the queue, the average wait must be 2 seconds. The law applies to any queueing system (it works for customers in a store, too).',
      },
      {
        term: 'What to optimize — and what conflicts',
        kind: 'insight',
        statement: 'It is desirable to **maximize** CPU utilization and throughput and to **minimize** turnaround time, waiting time and response time. In most cases an average is optimized, but sometimes the minimum or maximum matters more, and for interactive systems, **minimizing the variance** of response time may matter more than minimizing the average.',
        detail: 'A system with reasonable and predictable response time is often considered more desirable than one that is faster on average but highly variable — and little work has been done on variance-minimizing schedulers. The five criteria also trade off against each other: maximizing throughput (favoring long CPU-bound work) fights minimizing response time (favoring short interactive bursts), which is why no single algorithm wins everywhere.',
      },
    ],
    examples: [
      {
        title: 'Applying Little’s law to a ready queue',
        problem: 'Processes arrive at a system at an average rate of 7 per second, and observation shows an average of 14 processes in the ready queue. What is the average waiting time? What if we want to cut it to 1 second?',
        steps: [
          { label: 'Step 1: State the law', text: 'Little’s law relates the three queue quantities: $n = \\lambda \\times W$.' },
          { label: 'Step 2: Solve for the unknown', text: 'Rearranging gives $W = n / \\lambda$.' },
          { label: 'Step 3: Substitute', text: 'With $n = 14$ and $\\lambda = 7$ per second: $W = 14 / 7 = 2$ seconds of average waiting time — regardless of which scheduling algorithm is in use.' },
          { label: 'Step 4: Probe the design lever', text: 'To achieve $W = 1$ second at the same arrival rate, the queue would have to hold $n = \\lambda \\times W = 7$ processes on average. Alternatively, halving the wait without changing $n$ would require the arrival rate to double — impossible — so the scheduler must actually shorten the queue.' },
        ],
        result: 'Average waiting time is 2 seconds. Little’s law holds for any scheduling algorithm and arrival distribution, which is exactly why it is safe to use in queueing-model evaluation (Section 5.5).',
      },
      {
        title: 'Computing the three per-process metrics',
        problem: 'A process arrives at $t = 3$ ms, first receives the CPU at $t = 11$ ms, and completes at $t = 23$ ms after a single (uninterrupted) CPU burst of 12 ms. Compute its turnaround, response and waiting times.',
        steps: [
          { label: 'Step 1: Turnaround time', text: '$T = t_{\\text{completion}} - t_{\\text{arrival}} = 23 - 3 = 20$ ms — the whole interval from submission to completion.' },
          { label: 'Step 2: Response time', text: '$R = t_{\\text{first}} - t_{\\text{arrival}} = 11 - 3 = 8$ ms — how long until the first output, the number an interactive user feels.' },
          { label: 'Step 3: Waiting time', text: 'With a single burst, $W = T - b = 20 - 12 = 8$ ms. Cross-check: the process sat in the ready queue from 3 to 11 ms and never waited again, so $W = 8$ ms.' },
        ],
        result: 'Turnaround 20 ms, response 8 ms, waiting 8 ms. Only the waiting component is attributable to the scheduler; the 12 ms burst belongs to the process itself.',
      },
    ],
    keyTakeaways: [
      'Maximize CPU utilization and throughput; minimize turnaround time, waiting time and response time.',
      'Turnaround is $T_i = t_{\\text{completion}} - t_{\\text{arrival}}$; waiting is ready-queue time only ($W_i = T_i - b_i$ for single-burst examples); response is time to the first response.',
      'The scheduler affects only waiting in the ready queue — never execution time or I/O time.',
      'Little’s law, $n = \\lambda \\times W$, holds for any scheduling algorithm and arrival distribution.',
      'Optimization targets conflict, and for interactive systems, low variance in response time often beats a low average.',
    ],
    quiz: [
      {
        q: 'Which component of a process’s lifetime does the CPU-scheduling algorithm actually affect?',
        options: ['The time spent executing on the CPU', 'The time spent doing I/O', 'The time spent waiting in the ready queue', 'All three equally'],
        answer: 2,
        explanation: 'The scheduler cannot change how long a process executes or does I/O; it only decides the order of service, which changes how long processes sit in the ready queue. That is why waiting time is the comparison metric in Section 5.3’s examples.',
      },
      {
        q: 'A process arrives at 3 ms and completes at 23 ms. Its turnaround time is:',
        options: ['23 ms', '26 ms', '3 ms', '20 ms'],
        answer: 3,
        explanation: 'Turnaround time is completion minus arrival: $23 - 3 = 20$ ms. The other options confuse the completion time itself, an incorrect sum, or the arrival time with the answer.',
      },
      {
        q: 'Processes arrive at an average rate of 5 per second and there are, on average, 10 processes in the queue. By Little’s law the average waiting time is:',
        options: ['50 seconds', '2 seconds', '0.5 seconds', '15 seconds'],
        answer: 1,
        explanation: 'Little’s law gives $W = n / \\lambda = 10 / 5 = 2$ seconds. Multiplying instead of dividing gives the 50-second trap; 0.5 comes from inverting the ratio incorrectly.',
      },
      {
        q: 'For interactive systems such as a PC desktop, investigators have suggested it is often more important to:',
        options: ['Maximize throughput above all else', 'Minimize the average response time only', 'Minimize the variance in response time', 'Maximize CPU utilization above all else'],
        answer: 2,
        explanation: 'A system with reasonable and predictable response time is more desirable than one that is faster on average but highly variable — predictability is what users perceive as smoothness. Throughput and utilization are background goals for such systems.',
      },
    ],
  },

  // ------------------------------------------------------------------ 5.3
  {
    sectionId: 'osc-ch5-s3',
    readingTime: 12,
    intro: 'Here is the heart of the chapter: the classic algorithms — FCFS, SJF/SRTF, priority and round robin — each defined, analyzed and worked through with the book’s own numbers. The pattern to watch is how each attacks the same enemy, long average waiting time, from a different angle, and what new failure mode each introduces.',
    objectives: [
      'Compute average waiting time for FCFS, SJF, SRTF, priority and round-robin schedules on the book’s worked process sets',
      'Explain the convoy effect and why FCFS is troublesome for interactive systems',
      'Prove informally that SJF is optimal and predict the next burst with exponential averaging',
      'Apply the SRTF preemption rule and compute average waiting time with arrival times',
      'Analyze time-quantum trade-offs in round robin, including the 80 percent rule of thumb',
    ],
    concepts: [
      {
        term: 'First-come, first-served scheduling',
        kind: 'method',
        statement: '**FCFS** manages the ready queue as a FIFO queue: arriving PCBs link onto the tail, and the CPU is allocated to the process at the head. It is simple — but the average waiting time is often quite long, and the policy is nonpreemptive.',
        detail: 'With the book’s processes P1 = 24 ms, P2 = 3 ms, P3 = 3 ms arriving in order, the average waiting time is 17 ms; if they arrive in the order P2, P3, P1 it drops to 3 ms — the same processes, merely a luckier order. FCFS is particularly troublesome for interactive systems, where every process needs a share of the CPU at regular intervals.',
      },
      {
        term: 'Convoy effect',
        kind: 'insight',
        statement: 'The **convoy effect** arises in FCFS when one CPU-bound process holds the CPU and all the other (I/O-bound) processes wait in the ready queue: the I/O devices go idle, then the CPU goes idle when the big process finally leaves for I/O — all the other processes wait for the one big process to get off the CPU.',
        detail: 'The result is lower CPU and device utilization than if the shorter processes were allowed to go first. Dynamic-system analysis: while the CPU-bound process runs, everyone finishes I/O and queues up; when it finally blocks, the short processes execute quickly and return to the I/O queues, leaving the CPU idle until the convoy leader reappears.',
      },
      {
        term: 'Shortest-job-first scheduling',
        kind: 'method',
        statement: '**SJF** associates with each process the length of its next CPU burst and gives the CPU to the process with the smallest next burst (ties broken by FCFS). It is **provably optimal**: it gives the minimum average waiting time for a given set of processes.',
        detail: 'Proof idea: moving a short process before a long one decreases the waiting time of the short process more than it increases the waiting time of the long process, so the average decreases. A more accurate name would be shortest-next-CPU-burst. On the book’s set P1 = 6, P2 = 8, P3 = 7, P4 = 3 (all arriving at 0), SJF orders P4, P1, P3, P2 for an average wait of 7 ms versus 10.25 ms under FCFS. The catch: there is no way to know the length of the next CPU burst, so SJF must be approximated by prediction.',
      },
      {
        term: 'Exponential averaging',
        kind: 'law',
        statement: 'Predict the next CPU burst as an exponential average of measured previous bursts. With $t_n$ the length of the $n$-th burst and $\\tau_n$ the predicted value, for $0 \\le \\alpha \\le 1$: $$\\tau_{n+1} = \\alpha t_n + (1 - \\alpha)\\tau_n.$$ $t_n$ carries the most recent information, $\\tau_n$ stores the past history, and $\\alpha$ controls their relative weight.',
        detail: 'If $\\alpha = 0$, recent history has no effect ($\\tau_{n+1} = \\tau_n$); if $\\alpha = 1$, only the last burst matters. More commonly $\\alpha = 1/2$ weights recent and past history equally, and $\\tau_0$ is a constant or an overall system average. Expanding the recurrence, each successively older burst carries a factor $(1 - \\alpha)$ more weight: $\\tau_{n+1} = \\alpha t_n + (1-\\alpha)\\alpha t_{n-1} + \\cdots + (1-\\alpha)^{n+1}\\tau_0$. With $\\alpha = 1/2$ and $\\tau_0 = 10$, bursts 6, 4, 6, 4, 13, 13, 13 produce predictions 8, 6, 6, 5, 9, 11, 12 — each prediction is simply the average of the previous prediction and the newest burst.',
      },
      {
        term: 'Shortest-remaining-time-first',
        kind: 'method',
        statement: '**SRTF** is preemptive SJF: when a new process arrives at the ready queue while another is executing, and the new process’s next CPU burst is **shorter than what remains of the current process’s burst**, the running process is preempted.',
        detail: 'On the book’s set — P1 (arrival 0, burst 8), P2 (1, 4), P3 (2, 9), P4 (3, 5) — SRTF produces the schedule P1, P2, P4, P1, P3 with an average waiting time of 6.5 ms; nonpreemptive SJF on the same arrivals gives 7.75 ms. The price of preemption: the scheduler must maintain the remaining time of the running process, and context-switch overhead grows.',
      },
      {
        term: 'Priority scheduling',
        kind: 'method',
        statement: 'A **priority** is associated with each process, and the CPU is allocated to the highest priority (in this book, the **lowest number**); equal priorities are scheduled FCFS. SJF is simply priority scheduling where the priority is the inverse of the predicted next CPU burst.',
        detail: 'Priorities may be internal (time limits, memory requirements, open files, the ratio of average I/O to average CPU burst) or external (importance, funds paid, politics — often political factors). It can be preemptive or nonpreemptive. Its major problem is **indefinite blocking (starvation)**: a steady stream of higher-priority processes can leave low-priority ones waiting forever — rumor has it that when MIT shut down its IBM 7094 in 1973, they found a low-priority process submitted in 1967 that had never run. The fix is **aging**: gradually increase the priority of long-waiting processes — with priorities from 127 (low) to 0 (high), adding 1 every second promotes even a priority-127 process to highest in a little over 2 minutes. Priority can also be combined with round robin within each priority level (the book’s example with P4 = 7 ms at priority 1 running first, then P2 and P3 round-robining at priority 2 with q = 2, then P1 and P5 at priority 3).',
      },
      {
        term: 'Round-robin scheduling',
        kind: 'method',
        statement: '**RR** is FCFS plus preemption: a small **time quantum (time slice)** of typically 10 to 100 ms is defined; the ready queue is treated as a circular queue, and no process keeps the CPU for more than one quantum in a row. With $n$ ready processes and quantum $q$, each process gets $1/n$ of the CPU time in chunks of at most $q$, and waits no longer than $(n-1) \\times q$ until its next quantum.',
        detail: 'A process whose burst is shorter than the quantum releases the CPU voluntarily; otherwise the timer interrupts and the process goes to the tail of the queue. With five processes and a 20 ms quantum, each gets up to 20 ms every 100 ms. RR is preemptive and gives excellent response time, though average waiting time is often long.',
      },
      {
        term: 'Choosing the time quantum',
        kind: 'insight',
        statement: 'The quantum must be **large with respect to the context-switch time** but not so large that RR degenerates into FCFS. A rule of thumb: **80 percent of CPU bursts should be shorter than the time quantum**.',
        detail: 'A single 10-time-unit process illustrates the extremes: quantum 12 → finishes with 0 context switches; quantum 6 → 1 switch; quantum 1 → 9 switches. If the context-switch time is about 10 percent of the quantum, roughly 10 percent of CPU time is spent switching (in practice switches take under 10 microseconds against 10–100 ms quanta). Turnaround time does not necessarily improve with a larger quantum: three 10-unit processes average turnaround 29 with q = 1 but only 20 with q = 10, and adding context-switch cost makes small quanta strictly worse.',
      },
    ],
    examples: [
      {
        title: 'FCFS and the convoy effect',
        problem: 'Three processes arrive at time 0 with CPU bursts P1 = 24 ms, P2 = 3 ms, P3 = 3 ms. Compute the average waiting time under FCFS for the arrival order P1, P2, P3, then for the order P2, P3, P1.',
        steps: [
          { label: 'Step 1: Gantt chart for P1, P2, P3', text: 'P1 runs 0–24, P2 runs 24–27, P3 runs 27–30. The long process leads, so every later process absorbs its full 24 ms.' },
          { label: 'Step 2: Waiting times', text: 'P1 waits 0 ms, P2 waits 24 ms (it arrived at 0 but started at 24), P3 waits 27 ms.' },
          { label: 'Step 3: Average', text: '$\\bar{W} = (0 + 24 + 27) / 3 = 17$ ms.' },
          { label: 'Step 4: Reorder and compare', text: 'With arrival order P2, P3, P1 the Gantt chart is P2 0–3, P3 3–6, P1 6–30. Waits are P2 = 0, P3 = 3, P1 = 6, giving $\\bar{W} = (6 + 0 + 3) / 3 = 3$ ms — the same three processes, a 5.7× improvement, purely from arrival order.' },
        ],
        result: 'FCFS average waiting time is generally not minimal and may vary substantially when burst times vary greatly; in dynamic systems the convoy effect compounds this — short I/O-bound processes pile up behind each long CPU-bound burst while devices idle.',
      },
      {
        title: 'SJF, SRTF and predicting the next burst',
        problem: 'Part A: schedule P1 = 6, P2 = 8, P3 = 7, P4 = 3 ms (all arriving at time 0) with nonpreemptive SJF. Part B: schedule P1 (arrival 0, burst 8), P2 (1, 4), P3 (2, 9), P4 (3, 5) with preemptive SRTF. Part C: predict bursts by exponential averaging.',
        steps: [
          { label: 'Step 1: SJF ordering', text: 'Shortest burst first: P4 (3), P1 (6), P3 (7), P2 (8). Gantt chart: P4 0–3, P1 3–9, P3 9–16, P2 16–24.' },
          { label: 'Step 2: SJF waiting times', text: 'P1 = 3, P2 = 16, P3 = 9, P4 = 0, so $\\bar{W} = (3 + 16 + 9 + 0) / 4 = 7$ ms — against 10.25 ms for FCFS on the same set in arrival order.' },
          { label: 'Step 3: SRTF preemption decisions', text: 'P1 starts at 0 (only process). At t = 1, P2 arrives with burst 4 < P1’s remaining 7 → preempt. At t = 2 and t = 3 the arrivals P3 (9) and P4 (5) are longer than P2’s remaining time, so P2 finishes at 5. Then P4 (5) runs 5–10, then P1 (7 remaining) runs 10–17, then P3 runs 17–26.' },
          { label: 'Step 4: SRTF waiting times', text: 'Waiting = start of final segment minus arrival minus time already run: P1 waits $10 - 1 = 9$, P2 waits $1 - 1 = 0$, P3 waits $17 - 2 = 15$, P4 waits $5 - 3 = 2$. So $\\bar{W} = (9 + 0 + 15 + 2) / 4 = 26 / 4 = 6.5$ ms; nonpreemptive SJF on the same arrivals would give 7.75 ms.' },
          { label: 'Step 5: Predicting the next burst', text: 'SJF cannot know burst lengths, so predict with $\\tau_{n+1} = \\alpha t_n + (1 - \\alpha)\\tau_n$. With $\\alpha = 1/2$ and $\\tau_0 = 10$: bursts 6, 4, 6, 4, 13, 13, 13 yield predictions $\\tau = 8, 6, 6, 5, 9, 11, 12$.' },
          { label: 'Step 6: Read the trend', text: 'The prediction chases the burst sequence: it rises gradually toward the sustained 13s, and it recovers from the early low bursts within a couple of observations — exactly the behavior an SJF approximation needs.' },
        ],
        result: 'SJF achieves 7 ms versus FCFS’s 10.25 ms; adding arrivals, SRTF achieves 6.5 ms versus 7.75 ms for nonpreemptive SJF. Optimality is bought with knowledge of the future, approximated in practice by exponential averaging.',
      },
      {
        title: 'Round robin with quantum q = 4',
        problem: 'Schedule P1 = 24 ms, P2 = 3 ms, P3 = 3 ms (all arriving at 0) with round robin and a 4 ms time quantum, then examine quantum extremes.',
        steps: [
          { label: 'Step 1: First round', text: 'P1 runs 0–4 and is preempted (20 ms remain) to the tail of the queue. P2 needs only 3 ms and finishes at 7 without using its full quantum. P3 likewise finishes at 10.' },
          { label: 'Step 2: Remaining rounds', text: 'P1 is the only runnable process, so it runs consecutive quanta: 10–14, 14–18, 18–22, 22–26, 26–30, completing at 30.' },
          { label: 'Step 3: Gantt chart', text: 'P1 (0–4), P2 (4–7), P3 (7–10), P1 (10–14), P1 (14–18), P1 (18–22), P1 (22–26), P1 (26–30).' },
          { label: 'Step 4: Waiting times', text: 'P1 waits $30 - 24 = 6$ ms (it ran only the first 4 of its 24), P2 waits 4 ms, P3 waits 7 ms. Average: $\\bar{W} = 17 / 3 \\approx 5.66$ ms — a dramatic improvement over FCFS’s 17 ms for the identical workload.' },
          { label: 'Step 5: Quantum extremes', text: 'For a single 10-time-unit process: quantum 12 → zero context switches, quantum 6 → one, quantum 1 → nine. And three 10-unit processes average turnaround 29 with q = 1 but 20 with q = 10 — a larger quantum is not automatically better or worse for turnaround; what matters is that most bursts finish within a single quantum.' },
        ],
        result: 'RR q = 4 delivers 5.66 ms average waiting versus 17 ms for FCFS, at the cost of five preemptions. The quantum must be large relative to the context-switch time yet small enough that roughly 80 percent of CPU bursts finish inside one quantum.',
      },
    ],
    keyTakeaways: [
      'FCFS is simple and nonpreemptive, but its average waiting time is often long and arrival order can swing it from 17 ms to 3 ms on the same three processes.',
      'The convoy effect lets one CPU-bound process drag every I/O-bound process into the ready queue while devices sit idle.',
      'SJF is provably optimal for average waiting time — swapping a short process ahead of a long one lowers the average — but it requires knowing (predicting) the next burst.',
      'Exponential averaging $\\tau_{n+1} = \\alpha t_n + (1 - \\alpha)\\tau_n$ with $\\alpha = 1/2$ is the standard prediction; each older burst is down-weighted by a factor of $(1 - \\alpha)$.',
      'SRTF adds preemption to SJF and preempts exactly when a new arrival’s burst is shorter than the running process’s remaining time.',
      'Priority scheduling invites starvation (indefinite blocking); aging gradually raises the priority of waiting processes to cure it.',
      'Round robin bounds the wait for the next quantum at $(n-1) \\times q$; too large a quantum degenerates into FCFS, too small drowns the CPU in context switches, and 80 percent of bursts should be shorter than q.',
    ],
    quiz: [
      {
        q: 'Under FCFS with P1 = 24 ms, P2 = 3 ms, P3 = 3 ms arriving in that order at time 0, the average waiting time is:',
        options: ['30 ms', '10 ms', '17 ms', '3 ms'],
        answer: 2,
        explanation: 'Waits are 0, 24 and 27 ms, averaging $(0 + 24 + 27)/3 = 17$ ms. The 3 ms figure is what the same processes achieve when they arrive in the order P2, P3, P1 — the point of the example.',
      },
      {
        q: 'Why is SJF provably optimal for average waiting time?',
        options: ['Because it is preemptive and always interrupts long processes', 'Because moving a short process before a long one decreases the short process’s wait more than it increases the long process’s wait', 'Because it minimizes context switches', 'Because burst lengths are known exactly in advance'],
        answer: 1,
        explanation: 'The exchange argument: pulling a short job ahead saves it the entire long burst, while delaying the long job costs it only the short burst — the sum of waiting times strictly decreases. SJF needs no preemption for this; it just needs the burst lengths.',
      },
      {
        q: 'With exponential averaging, $\\alpha = 1/2$, current prediction $\\tau_n = 8$ and newest burst $t_n = 6$, the next prediction $\\tau_{n+1}$ is:',
        options: ['6', '7', '8', '14'],
        answer: 1,
        explanation: '$\\tau_{n+1} = 0.5 \\times 6 + 0.5 \\times 8 = 7$. With $\\alpha = 1/2$ the prediction is always the midpoint of the last prediction and the newest observation.',
      },
      {
        q: 'Under SRTF, when does the running process get preempted?',
        options: ['Whenever a new process arrives, regardless of burst length', 'When a newly arrived process has a shorter next CPU burst than the running process’s remaining time', 'When the running process’s quantum expires', 'Never — SRTF is nonpreemptive'],
        answer: 1,
        explanation: 'SRTF is preemptive SJF: the only preemption trigger is a new arrival whose next burst is shorter than what remains of the current burst. Quantum expiry is a round-robin concept, and plain SJF is the nonpreemptive variant.',
      },
      {
        q: 'If the round-robin time quantum is made extremely large, the policy behaves like:',
        options: ['SJF', 'Priority scheduling', 'FCFS', 'A multilevel feedback queue'],
        answer: 2,
        explanation: 'With a quantum larger than every burst, no process is ever preempted and each runs to completion (or blocks) in arrival order — exactly FCFS. At the other extreme, a tiny quantum floods the system with context switches.',
      },
      // PYQ-pattern: GATE 2017 — SJF average waiting time (rephrased)
      {
        q: "Four jobs arrive at time $0$ with bursts $5$, $9$, $2$, $7$ ms (P1..P4). Under nonpreemptive shortest-job-first, what is the average waiting time?",
        options: ["$10.25$ ms", "$5.75$ ms", "$7$ ms", "$3$ ms"],
        answer: 1,
        explanation: "**Step 1 — Given data:** bursts P1 $= 5$, P2 $= 9$, P3 $= 2$, P4 $= 7$, all arrival $0$.\n**Step 2 — Rule:** SJF orders by next burst (ties by arrival); waiting is start minus arrival.\n**Step 3 — Computation:** order P3, P1, P4, P2:\n```\nP3 0-2, P1 2-7, P4 7-14, P2 14-23\nwaits: P3 0, P1 2, P4 7, P2 14\navg = $\\frac{(0+2+7+14)}{4} = \\frac{23}{4} = 5.75$ ms\n```\n**Step 4 — Cross-check:** total completion $23$ ms matches sum of bursts $5+9+2+7 = 23$; average turnaround $= 5.75 + \\frac{23}{4} = 11.5$ ms, consistent.\n**Step 5 — Distractors:** $10.25$ is FCFS on the $6,8,7,3$ set; $7$ is SJF on that other set; $3$ is FCFS luckily ordered.\n**Step 6 — Conclude:** $5.75$ ms, optimal for this set."
      },
      // PYQ-pattern: ISRO 2020 — round robin with small quantum (rephrased)
      {
        q: "Three jobs with bursts $5$, $3$, $8$ ms (P1..P3) arrive at $0$ and run under round robin with quantum $2$ ms. What is the average waiting time?",
        options: ["$5.66$ ms", "$17$ ms", "$6.5$ ms", "$7$ ms"],
        answer: 3,
        explanation: "**Step 1 — Given data:** P1 $= 5$, P2 $= 3$, P3 $= 8$, $q = 2$.\n**Step 2 — Rule:** circular queue, preempt after each quantum, waiting $W = T - b$.\n**Step 3 — Computation:**\n```\nP1 0-2, P2 2-4, P3 4-6, P1 6-8, P2 8-9, P3 9-11,\nP1 11-12, P3 12-14, P3 14-16\ncompletions: P1 12, P2 9, P3 16\nwaits: P1 7, P2 6, P3 8; avg = $\\frac{21}{3} = 7$ ms\n```\n**Step 4 — Cross-check:** each process waits at most $(n-1)q = 4$ ms between quanta; total work $16$ ms plus preemptions matches completion $16$.\n**Step 5 — Distractors:** $5.66$ is RR $q = 4$ on the $24,3,3$ set; $17$ is FCFS on that set; $6.5$ is SRTF on the arrival-staggered set.\n**Step 6 — Conclude:** $7$ ms average waiting."
      }
    ],
  },

  // ------------------------------------------------------------------ 5.4
  {
    sectionId: 'osc-ch5-s4',
    readingTime: 11,
    intro: 'Real machines complicate the single-core picture: user-level threads compete within a process, dozens of cores share caches and NUMA memory trees, and phone-class chips mix fast and slow cores. This section extends the algorithms of 5.3 to thread contention scopes, multilevel (feedback) queues, multiprocessor affinity and load balancing, and the production schedulers of Linux and Windows.',
    objectives: [
      'Distinguish process-contention scope from system-contention scope and use the Pthread scope API',
      'Explain multilevel queue and multilevel feedback queue scheduling, including all five defining parameters',
      'Compare asymmetric multiprocessing with SMP, and explain processor affinity and push/pull load balancing',
      'Describe NUMA-aware and heterogeneous (big.LITTLE) scheduling',
      'Summarize how Linux CFS and the Windows dispatcher schedule threads',
    ],
    concepts: [
      {
        term: 'Contention scope: PCS versus SCS',
        kind: 'definition',
        statement: '**Process-contention scope (PCS)** is thread-library scheduling in which user-level threads compete for available LWPs within the same process; **system-contention scope (SCS)** is kernel scheduling in which kernel-level threads compete among all threads in the system.',
        detail: 'PCS typically runs by priority and will preempt for a higher-priority thread, but it does not guarantee time slicing among equal-priority threads. Pthreads exposes the choice at thread creation: PTHREAD_SCOPE_PROCESS selects PCS and PTHREAD_SCOPE SYSTEM selects SCS (set via pthread_attr_setscope, queried via pthread_attr_getscope). On many-to-many systems, SCOPE_PROCESS schedules user threads onto available LWPs while SCOPE SYSTEM creates and binds one LWP per user thread; one-to-one systems such as Windows and Linux use only SCS — Linux and macOS allow only PTHREAD_SCOPE_SYSTEM.',
      },
      {
        term: 'Multilevel queue scheduling',
        kind: 'method',
        statement: '**Multilevel queue scheduling** partitions processes into separate ready queues by type — for example foreground (interactive) processes in an RR queue and background (batch) processes in an FCFS queue — with each queue using its own algorithm. A process is **permanently assigned** to one queue for its entire runtime.',
        detail: 'The queues themselves are scheduled either by fixed-priority preemptive ordering (the book’s four queues, highest first: real-time, system, interactive, batch — a batch process runs only when the other three are empty, and an arriving interactive process preempts a running batch process) or by time-slicing among queues (foreground gets 80 percent of the CPU for RR among its processes, background gets 20 percent for FCFS). Low scheduling overhead, but inflexible — the book notes it also avoids the O(n) scan of one big priority queue by giving each priority its own queue.',
      },
      {
        term: 'Multilevel feedback queue scheduling',
        kind: 'method',
        statement: 'A **multilevel feedback queue** scheduler allows processes to **move between queues**: a process that uses too much CPU time is demoted to a lower-priority queue, and a process that waits too long in a lower-priority queue is promoted (aging), which prevents starvation.',
        detail: 'The book’s three-queue example: queue 0 gives an 8 ms quantum, queue 1 gives 16 ms, and queue 2 is FCFS, run only when queues 0 and 1 are empty; an entering process starts in queue 0. Bursts of 8 ms or less are served immediately; bursts above 8 but below 24 ms are served quickly at the second level; long processes sink to queue 2 and receive leftover cycles. The design space is defined by five parameters: the number of queues; the algorithm of each queue; when to upgrade a process to a higher-priority queue; when to demote; and which queue an entering process joins. It is the most general CPU-scheduling algorithm — and the most complex to configure.',
      },
      {
        term: 'Approaches to multiple-processor scheduling',
        kind: 'definition',
        statement: '**Asymmetric multiprocessing** assigns all scheduling decisions, I/O processing and other system activities to a single master server, with other processors running only user code. **Symmetric multiprocessing (SMP)** makes each processor self-scheduling.',
        detail: 'Asymmetric multiprocessing is simple — only one core touches the system data structures — but the master server becomes a performance bottleneck. In SMP, threads eligible for scheduling are organized either in one common ready queue (a race condition on the shared queue plus heavy lock contention) or in per-processor private run queues (affinity for free, but workloads must be balanced). Chip multithreading adds a second scheduling level underneath: cores with 2+ hardware threads (Intel hyper-threading/SMT runs two threads per core; the Oracle Sparc M7 offers eight per core, 64 logical CPUs total) hide memory stalls — a processor can spend up to 50 percent of its time stalled waiting for memory — with the OS scheduling software threads onto logical CPUs and each core arbitrating its hardware threads.',
      },
      {
        term: 'Processor affinity and load balancing',
        kind: 'method',
        statement: '**Processor affinity** keeps a thread running on the same processor to exploit a warm cache; **load balancing** keeps the workload even across all processors of an SMP system. The two are in natural tension, since balancing migrates threads and destroys warm caches.',
        detail: 'With **soft affinity** the operating system attempts to keep a process on one processor but does not guarantee it; **hard affinity** lets a process pin itself to a subset of processors (Linux sched_setaffinity). Balancing comes in two flavors: **push migration**, where a specific task periodically checks loads and pushes threads from busy to idle processors, and **pull migration**, where an idle processor pulls a waiting task from a busy one — Linux CFS and FreeBSD’s ULE implement both. Load balancing is only necessary when processors have private run queues; a common queue balances itself.',
      },
      {
        term: 'NUMA systems and NUMA-aware scheduling',
        kind: 'insight',
        statement: 'In a **NUMA** (non-uniform memory access) architecture each CPU has local memory accessed quickly, while other processors’ memories are reached slowly over the system interconnect — unlike **UMA**, where memory is uniformly distant from all CPUs. If the CPU scheduler and memory-placement algorithms are NUMA-aware, a thread scheduled onto a CPU can be allocated memory on that CPU’s node, giving the fastest possible access.',
        detail: 'Picture two CPU-plus-memory pairs joined by an interconnect: fast access arrows within each pair, a slow access arrow across the interconnect. Load balancing counteracts both affinity and NUMA placement — migrating a thread may leave it farther from its memory — so scheduling for multicore NUMA systems has become a matter of balancing load against memory latency. Linux CFS encodes the compromise in a hierarchy of scheduling domains: cores sharing an L2 cache form small domains, those share an L3 to form a processor-level (NUMA node) domain, and CFS balances within the lowest levels first, migrating across NUMA nodes only under severe imbalance.',
      },
      {
        term: 'Heterogeneous multiprocessing (big.LITTLE)',
        kind: 'definition',
        statement: '**Heterogeneous multiprocessing (HMP)** builds a system from cores that run the same instruction set but differ in clock speed and power management — ARM’s **big.LITTLE** pairs higher-performance big cores with energy-efficient LITTLE cores, so the scheduler can assign tasks by their performance and energy profile.',
        detail: 'Big cores consume more energy and should run only for short periods; LITTLE cores run longer on less energy. Background tasks needing little performance go to LITTLE cores to preserve battery, interactive applications go to big cores for responsiveness, and in power-saving mode the big cores can be disabled entirely. This is not asymmetric multiprocessing — both system and user tasks may run on any core; Windows 10 supports HMP by letting a thread select a scheduling policy matching its power-management demands.',
      },
      {
        term: 'Linux CFS',
        kind: 'method',
        statement: 'The **Completely Fair Scheduler** allocates each task a proportion of CPU time based on its **nice value** (range $-20$ to $+19$; lower value = higher priority, default 0), tracks each task’s per-task **virtual run time (vruntime)**, and always runs the task with the **smallest vruntime** — the leftmost node of a red-black tree ordered by vruntime.',
        detail: 'At normal priority vruntime equals physical run time; lower-priority tasks decay faster (their vruntime grows ahead of physical time) and higher-priority tasks slower, so priority emerges from the decay rate rather than from fixed slices. Runnable tasks live in a red-black tree keyed by vruntime; navigation to the leftmost node costs $O(\\log N)$, and Linux caches it in rb_leftmost so picking the next task is O(1). CFS defines a targeted latency — an interval in which every runnable task runs at least once — rather than discrete quanta. Real-time tasks (SCHED_FIFO / SCHED_RR, POSIX real-time, Section 5.5) outrank normal tasks: real-time priorities run 0–99, normal tasks 100–139, with nice $-20$ mapping to 100 and $+19$ to 139. CFS load-balancing weights each thread by priority and average CPU utilization and is NUMA-aware via scheduling domains.',
      },
      {
        term: 'Windows scheduling',
        kind: 'method',
        statement: 'Windows schedules threads with a priority-based, preemptive algorithm using **32 priorities**: the variable class occupies 1–15 and the real-time class 16–31 (priority 0 is reserved for memory management). The dispatcher scans per-priority queues from highest to lowest and always runs the highest-priority ready thread.',
        detail: 'The Windows API exposes six priority classes — IDLE, BELOW NORMAL, NORMAL, ABOVE NORMAL, HIGH and REALTIME (base priorities 4, 6, 8, 10, 13, 24) — crossed with seven relative priorities (IDLE, LOWEST, BELOW NORMAL, NORMAL, ABOVE NORMAL, HIGHEST, TIME CRITICAL); a thread in the ABOVE NORMAL class with NORMAL relative priority has numeric priority 10. When a variable-class thread exhausts its quantum its priority is lowered (never below base); when it returns from a wait it is boosted — keyboard waits boost strongly, disk waits moderately — and the foreground window’s process gets its quantum multiplied, typically by 3, for better interactive response. Windows also maintains each thread’s ideal processor (per-process seeds spread successive threads across SMT sets such as {0,1}, {2,3}, ...) to keep related threads on shared caches and to distribute load.',
      },
    ],
    examples: [
      {
        title: 'Demoting a CPU-bound task through a multilevel feedback queue',
        problem: 'A multilevel feedback queue scheduler has three queues: queue 0 (quantum 8 ms), queue 1 (quantum 16 ms) and queue 2 (FCFS, run only when 0 and 1 are empty). An entering process starts in queue 0. Trace a CPU-bound task with a 30 ms burst, and show what happens when a 5 ms interactive task arrives while the long task is in queue 2.',
        steps: [
          { label: 'Step 1: Start at the top', text: 'The 30 ms task enters queue 0 and immediately gets the CPU (queue 0 is served first). It runs 8 ms, does not finish, and is demoted to the tail of queue 1.' },
          { label: 'Step 2: Second level', text: 'Once queue 0 is empty, the task runs in queue 1 with a 16 ms quantum. It runs 16 ms (24 ms total), still does not finish, and is demoted to queue 2.' },
          { label: 'Step 3: Bottom level', text: 'In queue 2 the task runs FCFS with leftover cycles — it needs only 6 ms more, so it completes as soon as queues 0 and 1 stay empty.' },
          { label: 'Step 4: An interactive arrival preempts', text: 'While the long task is executing in queue 2, a 5 ms interactive task enters queue 0. A process arriving for queue 0 preempts a process in queue 2, so the interactive task runs its whole 5 ms immediately, then the long task resumes.' },
          { label: 'Step 5: The aging safeguard', text: 'Had the long task continued to be starved in queue 2, waiting too long would gradually promote it back to a higher-priority queue, preventing starvation of long jobs.' },
        ],
        result: 'Bursts of 8 ms or less are always served at top priority; bursts between 8 and 24 ms finish in queue 1; genuinely long work sinks to FCFS and survives on leftovers — while aging pulls anything that waits too long back up.',
      },
      {
        title: 'Windows priority arithmetic',
        problem: 'Determine the numeric priority of: (a) a thread in the ABOVE NORMAL PRIORITY CLASS with NORMAL relative priority; (b) a thread in the HIGH PRIORITY CLASS with ABOVE NORMAL relative priority; (c) a thread in the REALTIME PRIORITY CLASS with NORMAL relative priority. Then explain the foreground quantum boost.',
        steps: [
          { label: 'Step 1: Read the class base', text: 'The six classes have base (NORMAL-relative) priorities 4, 6, 8, 10, 13 and 24 for IDLE, BELOW NORMAL, NORMAL, ABOVE NORMAL, HIGH and REALTIME respectively.' },
          { label: 'Step 2: Case (a)', text: 'ABOVE NORMAL base is 10, and the relative priority is NORMAL, so the thread’s priority is 10.' },
          { label: 'Step 3: Case (b)', text: 'HIGH base is 13; ABOVE NORMAL adds one, so this thread runs at priority 14 (within the variable class 1–15).' },
          { label: 'Step 4: Case (c)', text: 'REALTIME base is 24, so with NORMAL relative priority the thread runs at 24 — inside the real-time class 16–31, above every variable-class thread (TIME CRITICAL would push it to 31).' },
          { label: 'Step 5: Foreground boost and quantum dynamics', text: 'When a NORMAL-class process moves into the foreground, Windows multiplies its scheduling quantum, typically by 3, letting it run three times longer before preemption. Independently, a variable-class thread that exhausts its quantum has its priority lowered (never below base), and a thread returning from a wait is boosted — strongly for keyboard waits, moderately for disk.' },
        ],
        result: 'Priorities 10, 14 and 24. The class × relative table plus dynamic boosting and the foreground quantum multiplier is how Windows favors interactive work without letting compute-bound threads starve.',
      },
    ],
    keyTakeaways: [
      'PCS schedules user threads onto LWPs within one process; SCS schedules kernel threads system-wide; PTHREAD_SCOPE_SYSTEM binds one LWP per user thread, and one-to-one systems use only SCS.',
      'Multilevel queues assign each process permanently to a type queue (foreground RR, background FCFS), scheduled among themselves by fixed priority or time-slicing (80/20).',
      'Multilevel feedback queues let processes move: CPU hogs demote, long waiters age upward — the most general and most complex scheduler, defined by five parameters.',
      'SMP systems prefer per-core private run queues (processor affinity for free, no shared-queue lock contention) balanced by push/pull migration; NUMA-aware scheduling then allocates a thread’s memory on the node of the CPU it runs on.',
      'big.LITTLE puts background work on energy-efficient LITTLE cores and interactive bursts on big cores; Windows 10 supports HMP policies.',
      'Linux CFS runs the smallest-vruntime task (leftmost red-black tree node, cached in rb_leftmost), derives priority from nice values −20..+19 via vruntime decay, and balances hierarchically over scheduling domains.',
      'Windows uses 32 priorities (variable 1–15, real-time 16–31), boosts threads returning from waits, and multiplies the foreground process’s quantum, typically by 3.',
    ],
    quiz: [
      {
        q: 'What does setting PTHREAD_SCOPE_SYSTEM accomplish on a many-to-many system?',
        options: ['It schedules user threads onto LWPs only within the same process', 'It creates and binds a separate LWP for each user-level thread, effectively mapping threads one-to-one', 'It disables kernel-level scheduling entirely', 'It restricts the thread to real-time scheduling classes'],
        answer: 1,
        explanation: 'PTHREAD_SCOPE_SYSTEM selects system-contention scope: one LWP is created and bound per user thread (one-to-one), so threads compete system-wide. PTHREAD_SCOPE_PROCESS is the within-process (PCS) choice, and Linux/macOS only allow SYSTEM.',
      },
      {
        q: 'In a multilevel feedback queue scheduler, a process that uses too much CPU time is:',
        options: ['Promoted to a higher-priority queue', 'Demoted to a lower-priority queue', 'Terminated by the scheduler', 'Left exactly where it entered'],
        answer: 1,
        explanation: 'The feedback is the whole point: CPU-heavy behavior sinks a process toward lower-priority queues (which often get longer quanta), keeping I/O-bound and interactive processes — with their short bursts — in the high-priority queues. Waiting too long in a low queue promotes a process back (aging).',
      },
      {
        q: 'Why do SMP systems prefer private, per-processor run queues over a single common ready queue?',
        options: ['Private queues make processor affinity unnecessary', 'A common queue creates race conditions and heavy lock contention on every scheduling access', 'Private queues guarantee lower waiting time for every process', 'A common queue cannot implement round robin'],
        answer: 1,
        explanation: 'With one shared queue, processors must lock it to avoid scheduling the same thread twice or losing threads — and that lock becomes a bottleneck. Private queues remove the contention and give affinity for free; the cost is that workloads must be balanced with push/pull migration.',
      },
      {
        q: 'Linux CFS chooses the next task to run by selecting:',
        options: ['The task with the highest nice value', 'The task that has waited longest in the ready queue', 'The leftmost node of the red-black tree — the task with the smallest vruntime', 'The task at the head of a FIFO queue'],
        answer: 2,
        explanation: 'CFS keys a red-black tree by vruntime; the leftmost node has the smallest key — the least-served task — and Linux even caches it (rb_leftmost) so selection is O(1). Nice values enter through the vruntime decay rate rather than through fixed slices.',
      },
      {
        q: 'On Windows, when a NORMAL PRIORITY CLASS process moves into the foreground, its scheduling quantum is typically:',
        options: ['Divided by 3 to improve responsiveness', 'Unchanged — only priority changes', 'Multiplied by 3', 'Reset to the real-time class quantum'],
        answer: 2,
        explanation: 'Windows increases the foreground process’s quantum by a factor of about 3, giving it three times longer to run before time-sharing preemption — a better interactive experience for the window the user is actually using.',
      },
    ],
  },

  // ------------------------------------------------------------------ 5.5
  {
    sectionId: 'osc-ch5-s5',
    readingTime: 11,
    intro: 'Real-time systems change the objective: averages no longer matter — every deadline must be met. This section covers the latency events that threaten deadlines, the two classic real-time algorithms — rate-monotonic and earliest-deadline-first — with the famous utilization bound, and the four ways engineers evaluate any scheduler before shipping it.',
    objectives: [
      'Distinguish soft and hard real-time systems and define event, interrupt and dispatch latency',
      'Model periodic tasks with processing time, deadline and period',
      'Apply rate-monotonic scheduling and its utilization bound, and recognize when the bound is exceeded',
      'Apply earliest-deadline-first and proportional share scheduling with admission control',
      'Compare the four evaluation methods: deterministic modeling, queueing models, simulation and implementation',
    ],
    concepts: [
      {
        term: 'Soft versus hard real-time systems',
        kind: 'definition',
        statement: '**Soft real-time** systems give critical processes preference over noncritical ones but guarantee only that preference — not when the critical process will run. **Hard real-time** systems require that a task be serviced by its deadline: service after the deadline has expired is the same as no service at all.',
        detail: 'Latency requirements span orders of magnitude: an antilock brake controller may need to respond within 3–5 ms of a wheel starting to slide, while an airliner’s radar controller can tolerate several seconds. A preemptive, priority-based scheduler gives only soft real-time functionality; hard real-time requires additional machinery.',
      },
      {
        term: 'Event latency and its two components',
        kind: 'definition',
        statement: '**Event latency** is the time from when an event occurs to when it is serviced. It decomposes into **interrupt latency** (from arrival of an interrupt to the start of the routine that services it — finish the current instruction, determine the interrupt type, save state) and **dispatch latency** (for the scheduler to stop one process and start another).',
        detail: 'A major contributor to interrupt latency is time spent with interrupts disabled while kernel structures are updated — real-time systems must keep those windows very short. Dispatch latency contains a conflict phase with two components: preempting any process running in the kernel, and low-priority processes releasing resources the high-priority process needs; the most effective way to keep dispatch latency low is a preemptive kernel. For hard real-time systems, dispatch latency is typically measured in several microseconds.',
      },
      {
        term: 'Periodic tasks and admission control',
        kind: 'notation',
        statement: 'Real-time processes are modeled as **periodic**: once a periodic process acquires the CPU it has a fixed processing time $t$, a deadline $d$, and a period $p$, with $$0 \\le t \\le d \\le p.$$ The rate of a periodic task is $1/p$.',
        detail: 'The process requires the CPU at constant intervals of length $p$, and typically must complete each burst by the start of the next period. Because the system must know these parameters, a process announces its deadline requirements to the scheduler, and an **admission-control algorithm** either admits the process — guaranteeing it completes on time — or rejects the request as impossible.',
      },
      {
        term: 'Rate-monotonic scheduling',
        kind: 'method',
        statement: '**RMS** schedules periodic tasks with a static, preemptive priority policy in which priority is assigned **inversely to the period**: the shorter the period (the higher the rate $1/p$), the higher the priority. It assumes each process’s processing time is the same for every CPU burst, with deadlines at the start of the next period.',
        detail: 'RMS is optimal among static-priority schedulers — if a process set cannot be scheduled by RMS, no other static-priority algorithm can schedule it. For the book’s pair P1 ($p_1 = 50$, $t_1 = 20$) and P2 ($p_2 = 100$, $t_2 = 35$), utilization is $20/50 + 35/100 = 0.75$ and RMS meets both deadlines. But assigning P2 the higher priority instead makes P1 miss its deadline at time 50 (it finishes at 55) — priority by rate, not by intuition.',
      },
      {
        term: 'RMS utilization bound',
        kind: 'theorem',
        statement: 'A set of $n$ periodic tasks, each with processing time $C_i$ and period $T_i$, is guaranteed schedulable under rate-monotonic scheduling if $$\\sum_{i=1}^{n} \\frac{C_i}{T_i} \\le n(2^{1/n} - 1).$$ The bound falls from 1.0 for one task to $\\ln 2 \\approx 0.693$ as $n \\to \\infty$: $n = 1$ gives 1.000, $n = 2$ gives 0.828, $n = 3$ gives 0.780.',
        detail: 'This is a sufficient (worst-case) condition, not a necessary one — the book’s failing example, P1 ($p_1 = 50$, $t_1 = 25$) and P2 ($p_2 = 80$, $t_2 = 35$), has utilization $25/50 + 35/80 \\approx 0.94$ and indeed RMS misses P2’s deadline (finishing at 85 against a deadline of 80); the same set is easily schedulable by EDF despite exceeding the static-priority bound.',
      },
      {
        term: 'Earliest-deadline-first scheduling',
        kind: 'method',
        statement: '**EDF** assigns priorities **dynamically** according to deadline: the earlier the deadline, the higher the priority. When a process becomes runnable it must announce its deadline to the scheduler, and priorities adjust to reflect the newcomer.',
        detail: 'Unlike RMS, EDF does not require processes to be periodic nor to need a constant amount of CPU time per burst — only that each process announce its deadline when runnable. EDF is theoretically optimal: it can schedule processes so that every deadline is met at 100 percent CPU utilization. In practice that level is unreachable because of context-switching and interrupt-handling costs. Applied to the 0.94-utilization set that defeated RMS, EDF meets every deadline by letting P2 run past time 50 (its deadline of 80 is earlier than P1’s next deadline of 100).',
      },
      {
        term: 'Proportional share scheduling',
        kind: 'method',
        statement: 'Proportional share schedulers allocate $T$ shares among all applications; an application holding $N$ shares is ensured $N/T$ of the total processor time. They work with an **admission-control policy**: a client is admitted only if enough shares remain.',
        detail: 'The book’s arithmetic: with $T = 100$ shares and allocations A = 50, B = 15, C = 20 (85 shares used), A is guaranteed 50 percent, B 15 percent and C 20 percent of processor time; a new process D requesting 30 shares is denied, because only 15 remain.',
      },
      {
        term: 'POSIX real-time scheduling',
        kind: 'notation',
        statement: 'POSIX.1b defines two real-time scheduling classes: **SCHED_FIFO** schedules threads first-come, first-served with **no time slicing** among equal priorities — the highest-priority real-time thread runs until it terminates or blocks — while **SCHED_RR** is round-robin **with** time slicing among threads of equal priority. A third class, SCHED_OTHER, is implementation-defined.',
        detail: 'The policy is managed with pthread_attr_getschedpolicy() and pthread_attr_setschedpolicy() for threads (and sched_setscheduler() at the process level). On Linux, any task running SCHED_FIFO or SCHED_RR outranks all normal tasks: real-time priorities occupy 0–99 and normal tasks 100–139 in the global scheme, where numerically lower means higher priority.',
      },
      {
        term: 'Evaluating scheduling algorithms',
        kind: 'method',
        statement: 'Four methods: **deterministic modeling** (a predetermined workload evaluated by hand — simple, fast, exact, but only for that workload); **queueing models** (measured distributions of CPU and I/O bursts plus Little’s law $n = \\lambda \\times W$ to compute utilization, queue length and wait); **simulations** (programmed system models driven by random distributions or by **trace files** of real recorded events); and **implementation** (code the algorithm into the real operating system).',
        detail: 'Deterministic modeling on the book’s five-process workload (P1 = 10, P2 = 29, P3 = 3, P4 = 7, P5 = 12, all at time 0) yields average waiting times of 28 ms for FCFS, 13 ms for SJF and 23 ms for RR with q = 10. Queueing analysis is limited to tractable algorithm and distribution classes, so results are approximations. Simulations trade cost for accuracy — trace files replay exactly the same real inputs for fair algorithm comparisons but need large storage. Implementation is the only completely accurate evaluation, and it reveals human behavior: users split large processes into small ones to exploit short-process preference, and one programmer whose system classified interactivity by terminal output simply wrote a meaningless character to the terminal every second — and got the high-priority treatment.',
      },
    ],
    examples: [
      {
        title: 'Rate-monotonic scheduling: the 75 percent set and the 94 percent set',
        problem: 'Schedule two pairs of periodic tasks with RMS. Pair 1: P1 with $p_1 = 50$, $t_1 = 20$; P2 with $p_2 = 100$, $t_2 = 35$ (deadlines at the start of the next period). Pair 2: P1 with $p_1 = 50$, $t_1 = 25$; P2 with $p_2 = 80$, $t_2 = 35$.',
        steps: [
          { label: 'Step 1: Compute utilization for pair 1', text: 'Each process contributes $t_i / p_i$: $20/50 + 35/100 = 0.40 + 0.35 = 0.75$, i.e. 75 percent total CPU utilization.' },
          { label: 'Step 2: Check the bound', text: 'For $n = 2$ the RMS bound is $2(2^{1/2} - 1) \\approx 0.828$. Since $0.75 \\le 0.828$, RMS is guaranteed to schedule this set.' },
          { label: 'Step 3: Trace pair 1 under RMS', text: 'P1 (shorter period) has higher priority: P1 runs 0–20 and meets its first deadline (50). P2 runs 20–50, is preempted by P1’s second period with 5 ms left, P1 runs 50–70, and P2 finishes at 75 — before its deadline of 100.' },
          { label: 'Step 4: The wrong priorities miss immediately', text: 'If P2 is (incorrectly) given higher priority, it runs 0–35, then P1 runs 35–55 — P1’s first deadline was at 50, so it is missed. Rate, not intuition, sets priority.' },
          { label: 'Step 5: Compute utilization for pair 2', text: '$25/50 + 35/80 = 0.50 + 0.4375 \\approx 0.94$, which exceeds the 0.828 bound for two tasks.' },
          { label: 'Step 6: Confirm the failure', text: 'Under RMS, P1 runs 0–25; P2 runs 25–50, is preempted with 10 ms left; P1 runs 50–75; P2 resumes and finishes at 85 — after its deadline of 80. The bound correctly refused to guarantee this set (EDF will rescue it in the next example).', },
        ],
        result: '75 percent utilization is safely schedulable under RMS (bound 0.828 for two tasks); 94 percent is not — P2 misses its deadline at time 80. RMS is optimal only among static-priority schedulers.',
      },
      {
        title: 'EDF rescues the 94 percent set',
        problem: 'Schedule P1 ($p_1 = 50$, $t_1 = 25$) and P2 ($p_2 = 80$, $t_2 = 35$) with earliest-deadline-first scheduling.',
        steps: [
          { label: 'Step 1: Initial priorities', text: 'At time 0, P1’s first deadline (50) is earlier than P2’s (80), so P1 starts with higher priority and runs 0–25.' },
          { label: 'Step 2: P2 runs', text: 'P2 runs from 25. At time 50, P1’s next period begins — but P1’s new deadline is 100, while P2’s deadline is 80. EDF lets P2 continue, and P2 completes at 60, meeting its deadline of 80.' },
          { label: 'Step 3: P1’s second burst', text: 'P1 runs 60–85, meeting its second deadline (100). P2’s second period began at 80, so P2 starts at 85.' },
          { label: 'Step 4: The reversal at time 100', text: 'At time 100 P1’s third period starts (deadline 150) while P2 still needs 20 of its 35 ms (deadline 160). P1 now has the earlier deadline, so P2 is preempted; P1 runs 100–125 and meets its deadline.' },
          { label: 'Step 5: Finish and idle', text: 'P2 resumes at 125 and completes at 145, meeting its deadline of 160. The system idles 145–150 until P1’s next period. Every deadline is met at 94 percent utilization — above RMS’s 0.828 static bound but far below EDF’s theoretical 100 percent ceiling.' },
        ],
        result: 'EDF schedules the set RMS could not: dynamic deadline-based priorities meet all deadlines at 94 percent CPU utilization, at the cost of the scheduler tracking (and processes announcing) deadlines.',
      },
      {
        title: 'Deterministic modeling: FCFS versus SJF versus RR',
        problem: 'Five processes arrive at time 0 in the order P1 = 10, P2 = 29, P3 = 3, P4 = 7, P5 = 12 ms. Compare average waiting time under FCFS, nonpreemptive SJF, and RR with quantum q = 10 ms.',
        steps: [
          { label: 'Step 1: FCFS schedule', text: 'Arrival order is service order: P1 0–10, P2 10–39, P3 39–42, P4 42–49, P5 49–61. Waits: P1 = 0, P2 = 10, P3 = 39, P4 = 42, P5 = 49.' },
          { label: 'Step 2: FCFS average', text: '$\\bar{W} = (0 + 10 + 39 + 42 + 49) / 5 = 28$ ms.' },
          { label: 'Step 3: SJF schedule', text: 'Shortest burst first: P3 0–3, P4 3–10, P1 10–20, P5 20–32, P2 32–61. Waits: P1 = 10, P2 = 32, P3 = 0, P4 = 3, P5 = 20.' },
          { label: 'Step 4: SJF average', text: '$\\bar{W} = (10 + 32 + 0 + 3 + 20) / 5 = 13$ ms — less than half of FCFS on the identical workload.' },
          { label: 'Step 5: RR schedule', text: 'With q = 10: P1 0–10, P2 10–20, P3 20–23, P4 23–30, P5 30–40, P2 40–50, P5 50–52, P2 52–61. Waits: P1 = 0, P2 = 32, P3 = 20, P4 = 23, P5 = 40.' },
          { label: 'Step 6: Compare', text: '$\\bar{W}_{\\text{RR}} = (0 + 32 + 20 + 23 + 40) / 5 = 23$ ms — intermediate between SJF and FCFS, with far better early response for the processes that finish quickly.' },
        ],
        result: 'FCFS 28 ms, RR 23 ms, SJF 13 ms. Deterministic modeling gives exact, simple, fast comparisons — valid only for this exact workload, but it generalizes to the theorem that SJF is minimal whenever all processes are available at time 0.',
      },
    ],
    keyTakeaways: [
      'Soft real-time gives critical processes preference; hard real-time requires service by the deadline — late equals useless.',
      'Event latency = interrupt latency + dispatch latency; the conflict phase of dispatch latency covers preemption of kernel-mode processes and resource release by low-priority processes.',
      'Periodic tasks satisfy $0 \\le t \\le d \\le p$ with rate $1/p$, and admission control admits a task only when its deadline can be guaranteed.',
      'RMS assigns static priorities inversely to period and is optimal among static-priority schedulers, but its utilization bound $n(2^{1/n} - 1)$ drops from 1.0 to $\\ln 2 \\approx 0.693$.',
      'EDF assigns dynamic priorities by deadline, needs only announced deadlines, and is theoretically optimal up to 100 percent utilization.',
      'Proportional share allocates $T$ shares ($N$ shares guarantee $N/T$ of processor time) and admits clients only while shares remain.',
      'Scheduler evaluation escalates through deterministic modeling (exact but narrow), queueing models (approximate, Little’s law), trace-driven simulation, and full implementation — where users game the rules.',
    ],
    quiz: [
      {
        q: 'Under rate-monotonic scheduling, which periodic task receives the highest priority?',
        options: ['The one with the longest processing time', 'The one with the shortest period (highest rate)', 'The one with the latest deadline', 'The one that arrived first'],
        answer: 1,
        explanation: 'RMS assigns static priority inversely based on the period: shorter period → higher priority, because a shorter-period task needs the CPU more often. Deadline order at a given instant is EDF’s rule, not RMS’s.',
      },
      {
        q: 'For $n = 2$ periodic tasks, the rate-monotonic schedulability bound is approximately:',
        options: ['1.000', '0.828', '0.780', '0.693'],
        answer: 1,
        explanation: 'The bound $n(2^{1/n} - 1)$ evaluates to $2(\\sqrt{2} - 1) \\approx 0.828$ for two tasks. One task allows 1.0; three tasks give about 0.780; the limit as $n \\to \\infty$ is $\\ln 2 \\approx 0.693$.',
      },
      {
        q: 'What makes earliest-deadline-first scheduling theoretically optimal?',
        options: ['It uses static priorities, avoiding overhead', 'It requires all tasks to be periodic with constant bursts', 'It can schedule task sets up to 100 percent CPU utilization while meeting deadlines', 'It disables interrupts during scheduling decisions'],
        answer: 2,
        explanation: 'EDF dynamically orders by deadline and — in theory — meets every deadline at full utilization. In practice, context-switch and interrupt-handling costs keep real systems below 100 percent, and unlike RMS, EDF does not even require periodic tasks.',
      },
      {
        q: 'A proportional share system has T = 100 shares, with 50, 15 and 20 already allocated to three applications. A new process requests 30 shares. The admission controller:',
        options: ['Admits it, since 50 shares remain unallocated in total', 'Rejects it, because only 15 shares remain', 'Admits it at reduced priority', 'Suspends the largest existing allocation to make room'],
        answer: 1,
        explanation: 'Allocated shares total 85, leaving only 15 of the 100 — fewer than the 30 requested — so admission control denies the request. The guarantee to existing applications is preserved at the cost of rejecting the newcomer.',
      },
      {
        q: 'Which evaluation technique drives a scheduler simulation with a recorded sequence of actual events from a real system?',
        options: ['Deterministic modeling', 'Queueing-network analysis', 'Trace files', 'Little’s law'],
        answer: 2,
        explanation: 'Trace files capture real event sequences and replay them identically for every candidate algorithm — an exact comparison on the same inputs, at the cost of large storage. Deterministic modeling is the by-hand version for one fixed workload; queueing models and Little’s law are analytic.',
      },
    ],
  },
]
