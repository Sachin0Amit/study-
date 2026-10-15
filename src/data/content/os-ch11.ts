import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 11: Mass-Storage Structure (Sections 11.1 – 11.8)
// Master study content.
// ============================================================================

export const osCh11Content: SectionContent[] = [
  // ---------------------------------------------------------------- 11.1
  {
    sectionId: "osc-ch11-s1",
    readingTime: 10,
    intro: "Every byte the operating system manages ultimately lands on a physical device, and the two dominant ones — the spinning hard disk drive (HDD) and flash-based nonvolatile memory (NVM) — could hardly be more different under the hood. This section dissects both: platters, tracks, cylinders and the seek/rotational/transfer time model on one side; pages, blocks, the flash translation layer and wear-out on the other. The math of positioning time explains why random I/O is brutally expensive on disks and nearly free on flash.",
    objectives: [
      "Describe the physical structure of an HDD: platters, read-write heads, tracks, cylinders and sectors — and why logical block addresses hide zoned bit recording and spare-sector remapping",
      "Compute access time from seek time, rotational latency and transfer time, and derive IOPS from it",
      "Describe NAND flash organization: pages, blocks, and the erase-before-overwrite rule",
      "Explain the flash translation layer: garbage collection, over-provisioning, wear leveling and write amplification",
      "Compare HDDs and SSDs on price, capacity, random access time, bandwidth and endurance"
    ],
    concepts: [
      {
        term: "HDD physical structure",
        kind: "definition",
        statement: "A **hard disk drive** stores data magnetically on **platters** (1.8 to 3.5 inches in diameter, coated on **both** surfaces) spun by a motor at a constant speed. A read-write head “flies” just above each surface, all heads ride on a single moving **arm assembly**, each surface is divided into concentric **tracks**, each track into fixed-size **sectors**, and the set of tracks reachable at one arm position (one per surface, aligned vertically) is a **cylinder**.",
        detail: "The **sector** is the smallest unit of transfer — 512 bytes until about 2010, when manufacturers began migrating to 4 KB sectors (fewer headers and trailers per track, more space for data). A drive may have tens of thousands of cylinders and hundreds of sectors per track. Because the head floats microns above the surface on a cushion of air (or helium), occasional head–surface contact — a **head crash** — destroys the disk and everything on it."
      },
      {
        term: "The disk controller and logical block addressing",
        kind: "definition",
        statement: "A storage device is attached through a **host controller** (host-bus adapter, HBA) at the computer end and a **device controller** built into the drive; the host sends commands to the device controller, which operates the hardware. The OS sees the device only as a one-dimensional array of **logical blocks**, addressed by **logical block address (LBA)**, which the controller maps onto physical sectors (HDD) or pages (NVM).",
        detail: "Device controllers carry a built-in DRAM cache: transfers to the media happen between media and cache, and transfers to the host happen from cache to host memory via DMA at electronic speeds. Three facts make the LBA-to-physical mapping opaque: manufacturers substitute spare sectors for defective ones, the number of sectors per track is not constant, and modern drives manage the mapping internally — in current drives there is little relationship between LBA and physical location. Algorithms still assume ascending LBAs mean ascending physical addresses, which is only approximately true."
      },
      {
        term: "Zoned bit recording (CLV vs CAV)",
        kind: "insight",
        statement: "On media using **constant linear velocity (CLV)**, bit density is uniform, so longer outer tracks hold more sectors (used by CD-ROM and DVD-ROM). Hard disks instead spin at **constant angular velocity (CAV)**, and manufacturers pack more sectors into outer tracks: tracks in the outermost zone typically hold about **40 percent more sectors** than tracks in the innermost zone — a scheme called **zoned bit recording**.",
        detail: "Consequence: the outer cylinders of a disk are faster — more data passes under the head per rotation. A full-stroke transfer rate spec is therefore an average over zones; the stated (marketing) transfer rate is always higher than the effective rate the operating system actually observes."
      },
      {
        term: "Access time: seek, rotational latency, transfer",
        kind: "method",
        statement: "For an HDD, **positioning (random-access) time** = **seek time** (move the arm to the target cylinder) + **rotational latency** (wait for the target sector to rotate to the head); total access time adds **transfer time**. A common estimate puts the average seek at one-third of the maximum: $\\bar{s} \\approx \\frac{1}{3} s_{max}$, and the average rotational latency at half a rotation: $$t_{rot} = \\frac{1}{2} \\cdot \\frac{60}{\\text{RPM}}.$$ Transfer time is $t_{transfer} = \\frac{\\text{bytes}}{\\text{rate}}$.",
        detail: "Common speeds are 5,400, 7,200, 10,000 and 15,000 RPM (60 to 250 rotations per second), giving average rotational latencies of 5.56 ms, 4.17 ms, 3.0 ms and 2.0 ms respectively. Seek times and rotational latencies run several milliseconds, while drives transfer tens to hundreds of megabytes per second — so for small random accesses, positioning utterly dominates. Random-access throughput is measured in **IOPS** (I/O operations per second): $\\text{IOPS} = 1 / t_{access}$. An HDD delivers hundreds of IOPS; an SSD, hundreds of thousands."
      },
      {
        term: "NAND flash organization",
        kind: "definition",
        statement: "An **NVM device** (most commonly NAND flash, packaged as a **solid-state disk, SSD**) is electrical, not mechanical: a controller plus flash die. Data is read and written in **pages** (typically 2–16 KB, analogous to sectors), but pages must be **erased before they can be overwritten**, and erasure works only on entire **blocks** of 32–128 pages at a time.",
        detail: "Speed ordering: read is fastest, write is slower, and erase is much slower than either. Because pages cannot be overwritten in place, a re-written logical block simply lands in a new page while the old page is marked invalid. Flash die have many independent datapaths, so page operations across die proceed in parallel — this parallelism is where SSD bandwidth comes from. A standard bus (SATA) can bottleneck fast NVM, which is why NVMe devices connect directly to the system’s PCIe bus, sustaining on the order of 2 GB/s or more versus roughly 100–200 MB/s for a 2018-era HDD."
      },
      {
        term: "The flash translation layer (FTL)",
        kind: "definition",
        statement: "The **flash translation layer** is the controller’s mapping table from logical blocks to the physical pages that currently hold valid data, plus the bookkeeping of which blocks contain only invalid pages and can therefore be erased. **Garbage collection** reclaims such blocks by copying the still-valid pages elsewhere and erasing; **over-provisioning** reserves spare capacity (frequently about 20 percent) so writes always have erased pages to land in.",
        detail: "Because the OS just reads and writes logical blocks, all of this happens invisibly inside the device. The OS can still help: when the file system deletes a file it can inform the device (**TRIM**), letting the SSD erase those blocks in the background rather than discovering them via garbage collection later."
      },
      {
        term: "Wear leveling, endurance and write amplification",
        kind: "insight",
        statement: "NAND cells deteriorate with every erase: after roughly 100,000 program-erase (P/E) cycles (varies by medium) they stop retaining data. The controller **wear-levels** — placing data on less-erased blocks so erases spread evenly. NVM lifespan is therefore quoted in **Drive Writes Per Day (DWPD)**: a 1 TB drive rated 5 DWPD should absorb 5 TB of writes per day for the warranty period.",
        detail: "Cell density trades endurance for cost: SLC stores 1 bit per cell (~100,000 cycles), MLC 2 bits (~10,000), TLC 3 bits (~3,000). **Write amplification** arises when a single host write triggers extra internal I/O — garbage-collection reads of live pages plus rewrites of them — so the flash sees several writes for one requested write; it worsens as the drive fills. Repeated reads also slightly disturb neighboring cells (**read disturb**), so the controller occasionally moves cold data. Error-correcting codes are stored with each page to catch and fix bit rot; a page with repeated correctable errors is retired and replaced from over-provisioning space."
      },
      {
        term: "HDD versus SSD at a glance",
        kind: "insight",
        statement: "**HDDs** win on price per gigabyte and maximum capacity and are uniform performers until they die. **SSDs** have no moving parts — no seek or rotational latency — so random access takes microseconds instead of milliseconds, they sustain far more IOPS, consume less power, tolerate shock, and can be more reliable; they cost more per gigabyte and wear out under erase load.",
        detail: "Rule of thumb from the numbers: a 7200 RPM disk spends about 12 ms per random 4 KB access (millisecond-scale positioning, microsecond-scale transfer), capping it around 80–100 random IOPS; an SSD services the same request in tens of microseconds. For large sequential streams the gap narrows to an order of magnitude or less, and SSD write performance degrades as the device fills (garbage collection) and as it ages. RAM drives (a file system carved out of DRAM, like Linux tmpfs) sit above both — fastest of all, but volatile."
      }
    ],
    examples: [
      {
        title: "Anatomy of one random read on a 7200 RPM drive",
        problem: "A 7200 RPM HDD has an average seek time of 8 ms and a sustained transfer rate of 200 MB/s. Compute the total time to read one randomly placed 4 KB sector, and the maximum random-read IOPS the drive can achieve.",
        steps: [
          { label: "Step 1: Seek time", text: "The arm must move to the target cylinder: on average $t_{seek} = 8\\ \\text{ms}$ (about one-third of a full-stroke seek)." },
          { label: "Step 2: Rotational latency", text: "One rotation takes $\\frac{60}{7200} = 8.33\\ \\text{ms}$, and on average the sector is half a rotation away: $$t_{rot} = \\frac{1}{2} \\cdot \\frac{60}{7200} = 4.17\\ \\text{ms}.$$" },
          { label: "Step 3: Transfer time", text: "At 200 MB/s the 4,096-byte sector flows in $t_{transfer} = \\frac{4096}{200 \\times 10^{6}} \\approx 20.5\\ \\mu\\text{s}$ — about 0.02 ms, two orders of magnitude smaller than positioning." },
          { label: "Step 4: Total and IOPS", text: "$t_{access} = 8 + 4.17 + 0.02 \\approx 12.2\\ \\text{ms}$, so random reads are capped at roughly $\\frac{1}{0.0122} \\approx 82$ IOPS per busy head." }
        ],
        result: "12.2 ms per random 4 KB read: positioning is 99.8 percent of the cost. This is why disk scheduling (Section 11.2) obsesses over head movement — and why an SSD, with no head at all, turns the same operation into tens of microseconds and hundreds of thousands of IOPS."
      },
      {
        title: "Write amplification: one write, many internal I/Os",
        problem: "A full SSD receives random writes. Trace what the controller must actually do for a single 4 KB logical write, and count the resulting flash operations.",
        steps: [
          { label: "Step 1: The write lands", text: "The FTL maps the logical block to a fresh, already-erased page in the over-provisioning area (about 20 percent of capacity) and writes the data there; the page that held the old version is marked invalid." },
          { label: "Step 2: Free space must be reclaimed", text: "With every page written, the controller looks for a block whose pages are mostly invalid. Suppose it picks a block with 3 still-valid pages out of 64." },
          { label: "Step 3: Garbage collection", text: "It reads the 3 valid pages, writes them to new locations in the over-provisioning area, then erases the now all-invalid block and returns it to the free pool." },
          { label: "Step 4: Count the damage", text: "One host write became: 1 data page write + 3 page reads + 3 page writes + 1 block erase — write amplification of about 4 (worst cases run higher), plus a slow erase on the critical path." }
        ],
        result: "Write amplification is why a nearly full, well-worn SSD writes slower than a fresh one — and why TRIM matters: telling the device which blocks are free lets it erase them ahead of need instead of discovering them during garbage collection."
      }
    ],
    keyTakeaways: [
      "An HDD is platters, tracks, cylinders and sectors; the smallest transfer unit is the sector (512 B, now 4 KB), and the controller presents the whole device as a flat array of logical blocks (LBA).",
      "Access time = seek + rotational latency + transfer; average latency is half a rotation — 4.17 ms at 7200 RPM — and positioning dwarfs transfer for small random I/O.",
      "Zoned bit recording puts about 40 percent more sectors on outer tracks, so outer zones are faster; the mapping is hidden inside the controller.",
      "NAND flash reads and writes whole pages but can only erase whole blocks — pages must be invalidated, not overwritten — which forces the entire FTL machinery.",
      "The FTL maps logical to physical pages; garbage collection, over-provisioning (~20 percent) and wear leveling keep the device fast and alive.",
      "Endurance is finite (≈100,000 P/E cycles, less for denser MLC/TLC cells) and is spent faster by write amplification; lifespan is quoted as DWPD.",
      "HDDs: cheapest per GB, ~ms random access, hundreds of IOPS, ~100–200 MB/s. SSDs: µs random access, hundreds of thousands of IOPS, 2+ GB/s over NVMe, but they cost more and wear out."
    ],
    quiz: [
      {
        q: "The average rotational latency of a 10,000 RPM disk is:",
        options: ["6.0 ms", "2.0 ms", "3.0 ms", "41.7 ms"],
        answer: 2,
        explanation: "One rotation takes $\\frac{60}{10{,}000} = 6$ ms; on average the desired sector is half a rotation away, so latency is $\\frac{1}{2} \\cdot 6 = 3.0$ ms. The 2.0 ms figure belongs to 15,000 RPM drives."
      },
      {
        q: "Why can’t an SSD simply overwrite a page in place?",
        options: [
          "because pages are too small to address individually",
          "because NAND cells must be erased before they can be rewritten, and erasure works only on whole blocks",
          "because the FTL has no write cache",
          "because overwriting would wear out the read heads"
        ],
        answer: 1,
        explanation: "NAND physics: writes work per page, but a page must be in the erased state to accept a write, and erase granularity is a block of 32–128 pages. Overwriting therefore means: write elsewhere, invalidate the old page, and erase the block later during garbage collection."
      },
      {
        q: "Which component maintains the mapping between logical blocks and the physical pages that currently hold valid data?",
        options: [
          "the flash translation layer in the device controller",
          "the operating system’s page cache",
          "the host-bus adapter firmware",
          "the file system’s inode table"
        ],
        answer: 0,
        explanation: "The FTL is the controller’s map of logical block → physical page, plus per-block state (all-invalid blocks are erasable). The OS is unaware of it — it simply reads and writes logical blocks."
      },
      {
        q: "On a modern HDD, tracks in the outermost zone hold roughly 40 percent more sectors than the innermost zone because:",
        options: [
          "the outer tracks spin faster",
          "inner tracks are reserved for spare sectors",
          "the read-write head is lighter at the edge",
          "outer tracks are longer, and the disk spins at constant angular velocity"
        ],
        answer: 3,
        explanation: "HDDs use constant angular velocity (CAV): every rotation takes the same time, so the longer circumference of an outer track passes more media under the head — room for more sectors (zoned bit recording). CLV drives instead vary rotation speed to keep a constant data rate."
      },
      {
        q: "A 1 TB SSD rated at 5 DWPD is expected to tolerate:",
        options: [
          "5 TB of total writes, ever",
          "5 TB of writes per day over the warranty period",
          "5 drive failures per decade",
          "writes to only 5 percent of its pages"
        ],
        answer: 1,
        explanation: "Drive Writes Per Day measures endurance: how many times the drive’s own capacity can be written daily before erase-cycle wear-out. 5 DWPD on 1 TB means 5 TB written per day for the warranty term."
      }
    ]
  },

  // ---------------------------------------------------------------- 11.2
  {
    sectionId: "osc-ch11-s2",
    readingTime: 12,
    intro: "When many processes queue I/O requests for one disk, the order in which the requests are serviced changes everything: a moving head can waste most of its travel zig-zagging, or it can sweep. This section develops the classic disk-scheduling algorithms — FCFS, SSTF, SCAN, C-SCAN and C-LOOK — works the canonical textbook queue to the cylinder, and then turns to the rest of device management: formatting, boot blocks, bad blocks and swap space.",
    objectives: [
      "Explain why request ordering matters for HDD throughput and compute total head movement for a schedule",
      "Apply FCFS, SSTF, SCAN, C-SCAN and C-LOOK to a request queue and compare their totals",
      "Discuss starvation, wait-time uniformity and how modern OSes schedule disks and NVM devices",
      "Describe the three formatting steps: low-level formatting, partitioning and logical formatting",
      "Explain boot blocks, bad-block handling (sector sparing and slipping) and swap-space design trade-offs"
    ],
    concepts: [
      {
        term: "The scheduling problem",
        kind: "definition",
        statement: "A process requests disk I/O via system call (direction, file handle, memory address, amount); if the drive is busy the request joins the **device queue**. **Disk scheduling** chooses the service order of that queue to minimize access time and maximize bandwidth — for an HDD, essentially to **minimize head movement**. Device bandwidth is total bytes transferred divided by total time from first request to last completion.",
        detail: "Modern drives no longer expose track/head control to the host and map LBA to physical addresses internally, so absolute head knowledge is impossible; schedulers approximate by assuming ascending LBAs mean ascending physical addresses. Current goals are fairness, timeliness, and bunching sequential I/O, since drives perform best on sequential access."
      },
      {
        term: "FCFS scheduling",
        kind: "method",
        statement: "**First-come, first-served** services requests in arrival order. It is intrinsically fair — no starvation — but ignores head position: a queue alternating between distant cylinders makes the arm zig-zag across the disk.",
        detail: "In the classic example (queue 98, 183, 37, 122, 14, 124, 65, 67; head at 53) the wild swing 122 → 14 → 124 alone costs 108 + 110 = 218 cylinders. If the 37 and 14 requests could be grouped with the low-numbered cluster, total movement would drop dramatically — the entire motivation for the algorithms that follow."
      },
      {
        term: "SSTF scheduling",
        kind: "method",
        statement: "**Shortest-seek-time-first** always services the request **nearest** to the current head position. It is greedy and usually much better than FCFS — but a steady stream of nearby requests can **starve** distant ones, and it tends to favor middle cylinders over the innermost and outermost ones.",
        detail: "Middle-cylinder bias: a request near the center of the disk is close to everything, so the head keeps finding nearer middle requests, while edge cylinders wait. SSTF is also not optimal — minimizing each step greedily does not minimize the total path."
      },
      {
        term: "SCAN (elevator) scheduling",
        kind: "method",
        statement: "**SCAN** moves the arm in one direction, servicing requests as it passes their cylinders, until it reaches the **end of the disk**; it then reverses and sweeps back. The arm behaves like an elevator: everyone going up boards, then everyone going down.",
        detail: "A request arriving just ahead of the head is served almost immediately; one arriving just behind waits for a full sweep to the end and back. Under a uniform load, when the head reverses at an end the requests just behind it were recently served, so the heaviest queue — and the longest-waiting requests — sit at the far end: hence C-SCAN."
      },
      {
        term: "C-SCAN and C-LOOK",
        kind: "method",
        statement: "**C-SCAN** treats the cylinders as a circular list: the head services requests in only one direction, and on reaching the end it **jumps back to the beginning** without servicing anything on the return — giving a **more uniform wait time**. **C-LOOK** softens both edges: the head reverses at the **last pending request** rather than at the physical end of the disk, in either direction.",
        detail: "C-LOOK is to C-SCAN as LOOK is to SCAN (LOOK likewise stops at the last request, not the disk edge). These variants avoid traveling over cylinders that hold no requests — on huge multi-terabyte disks, sweeping to a physical end can cost thousands of wasted cylinders."
      },
      {
        term: "Choosing a scheduler in practice",
        kind: "insight",
        statement: "With one outstanding request every algorithm degenerates to FCFS — there is nothing to reorder. Under heavy load, SCAN and C-SCAN win because they avoid starvation. Linux offers several: the **deadline** scheduler (separate read and write queues sorted by LBA, plus FCFS queues; requests older than a configurable age — 500 ms by default — jump the line, and reads get priority since processes block on reads), **NOOP** (FCFS plus merging of adjacent requests — preferred for fast storage like NVM), and **CFQ** (three priority queues — real time, best effort, idle — with per-process anticipation).",
        detail: "For NVM devices there is no head to move: scheduling matters little, and a simple FCFS with adjacent-request merging (NOOP-style) is common. NVM write service time is not uniform though — some SSD schedulers merge only adjacent **writes** (grouping the expensive operation) while servicing reads FCFS, and smarter schedulers avoid triggering garbage collection at bad moments."
      },
      {
        term: "Formatting: low-level, partition, logical",
        kind: "method",
        statement: "**Low-level (physical) formatting** divides the device into sectors/pages, each written with a header, a data area and a trailer (sector number plus error-detection/correction code) — done at the factory, where the manufacturer also tests the media and initializes the LBA-to-defect-free-sector map. The OS then does three steps: **partition** the device into groups of blocks (each treated as a separate device; fdisk in Linux), create and manage **volumes** (possibly spanning devices — lvm2, ZFS), and finally **logical formatting**, i.e. creating the file system with its free-space maps and initial empty directory.",
        detail: "Sector size is chosen at low-level format (512 B or 4 KB); larger sectors mean fewer headers/trailers per track and more usable space. File systems group blocks into larger **clusters** so their I/O is more sequential than random, and try to keep file contents near their metadata to reduce seeks. A **raw** partition — no file-system structures — suits swap space and some databases; Linux approximates raw I/O with the DIRECT flag on open()."
      },
      {
        term: "Boot block and bad blocks",
        kind: "definition",
        statement: "The **bootstrap loader** lives in NVM flash firmware on the motherboard and initializes the system; it loads the **full bootstrap program** from fixed **boot blocks** on a **boot disk** (grub2 is the Linux default). Windows places code in the first logical block — the **master boot record (MBR)** — which also holds the partition table and the flag marking the boot partition; the first sector of that partition (the boot sector) directs the system to the kernel. **Bad blocks** are handled by marking them unusable in the file system’s allocation structures, or by controller **sector sparing/forwarding** (a spare sector, kept per cylinder, silently replaces the bad one) and **sector slipping** (shift subsequent sectors to keep LBAs sequential).",
        detail: "Modern firmware (UEFI) generalizes the scheme and, with the GPT partition format, removes MBR-era size limits. A typical sparing transaction: the OS reads logical block 87; the controller’s ECC shows the sector is bad and reports an I/O error; the controller substitutes a spare, and every later access to block 87 is redirected — which can silently invalidate the OS scheduler’s assumptions, so spares are drawn from the same cylinder when possible. NVM handles bad pages more simply (no seeks to optimize): replacements come from over-provisioning."
      },
      {
        term: "Swap-space management",
        kind: "method",
        statement: "Swap space backs virtual memory, so its only design goal is **throughput**. It can live in a **raw partition** — no file system, allocation by a speed-optimized manager, reinitialized (defragmenting) at every boot, but fixed in size — or in a **swap file** inside the file system — flexible to create, grow and place, but paying file-system overhead on every access. Linux supports both, spread over multiple devices to widen I/O bandwidth.",
        detail: "A Linux swap area (partition or file, enabled with swapon) is a series of **4-KB page slots** described by a **swap map** of counters: 0 means free; $n \\ge 1$ means the slot holds a page mapped by $n$ processes (shared memory). Linux, like Solaris, swaps only **anonymous memory** (heap, stack, uninitialized data) — code pages are simply re-read from their files. With abundant RAM, modern systems need little swap, but underestimating it can abort processes or crash the system, while overestimating merely wastes some disk."
      }
    ],
    examples: [
      {
        title: "The classic queue: five algorithms, five totals",
        problem: "A disk queue holds requests, in arrival order, for cylinders 98, 183, 37, 122, 14, 124, 65 and 67. The head starts at cylinder 53 on a 200-cylinder disk (0–199). Compute total head movement for FCFS, SSTF, SCAN (moving toward 0), C-SCAN (moving toward 199) and C-LOOK.",
        steps: [
          { label: "Step 1: FCFS — arrival order", text: "53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67. The hops: $45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640$ cylinders — the book’s figure. Fair, but the 122 → 14 → 124 detour alone wastes more than 200 cylinders." },
          { label: "Step 2: SSTF — always nearest", text: "From 53 the nearest is 65 (12 away; 37 is 16). Then 67 (2), 37 (30), 14 (23), 98 (84), 122 (24), 124 (2), 183 (59). Total: $12+2+30+23+84+24+2+59 = 236$ cylinders — but note the head hogs the middle while edges wait." },
          { label: "Step 3: SCAN — sweep to the end, reverse", text: "Moving toward 0: service 37, 14, then reach cylinder 0 (53 cylinders). Reverse: service 65, 67, 98, 122, 124, 183 — another 183 cylinders. Total: $53 + 183 = 236$ cylinders, the same total as SSTF here but with guaranteed bounded waiting." },
          { label: "Step 4: C-SCAN — one direction only", text: "Moving up: 65, 67, 98, 122, 124, 183, then to the end 199 — that is $199 - 53 = 146$. Jump to 0 (199 cylinders, no service), then up to 14 and 37 ($37$ more). Total: $146 + 199 + 37 = 382$ cylinders; counting only the servicing sweeps gives $146 + 37 = 183$." },
          { label: "Step 5: C-LOOK — stop at the last request", text: "Up: 65 → 183 is 146 cylinders. Jump 183 → 14 (169), then 14 → 37 (23). Total: $146 + 169 + 23 = 338$ cylinders — C-SCAN’s uniform wait without traveling to the physical ends." }
        ],
        result: "FCFS 640, SSTF 236, SCAN 236, C-SCAN 382, C-LOOK 338 cylinders. SSTF matches SCAN by luck of this queue, but only the SCAN family bounds waiting time — SSTF can starve the disk edges entirely, while C-SCAN buys the most uniform waits for the price of the return sweep."
      },
      {
        title: "Sector sparing versus sector slipping",
        problem: "Logical block 17 becomes defective. The drive has spare sectors, and the first available spare is physically located after sector 202. Show how (a) sector sparing and (b) sector slipping remap the block, and why slipping exists at all.",
        steps: [
          { label: "Step 1: Detect the failure", text: "The OS reads logical block 17; the controller recalculates the sector’s ECC, sees the stored and computed values differ, and reports an I/O error — the classic way bad sectors surface." },
          { label: "Step 2: Sparing (forwarding)", text: "The controller designates the spare as block 17’s replacement and redirects all future accesses to logical block 17 to that spare — ideally one set aside in the same cylinder, so the head doesn’t have to travel for it (the mapping stays seek-friendly)." },
          { label: "Step 3: Slipping — the sequential alternative", text: "Copy sector 202 into the spare; copy 201 into 202; 200 into 201; and so on down until sector 18 is copied into 19. Slot 18 is now free, and logical block 17 is mapped into it — every displaced block keeps its neighbors." },
          { label: "Step 4: Why slip", text: "Sparing puts block 17’s replacement far from blocks 16 and 18, so a sequential read of blocks 15–19 now incurs a long seek mid-stream. After slipping, consecutive LBAs remain physically consecutive (shifted by one), so the scheduler’s sequentiality assumptions survive the repair." }
        ],
        result: "Sparing = constant-time remap but a far-away replacement; slipping = O(number of shifted sectors) repair but perfect sequentiality afterward. Controllers pick per failure; recoverable soft errors may also trigger an immediate copy-and-remap, while an unrecoverable hard error loses the data and needs backup restoration."
      }
    ],
    keyTakeaways: [
      "For HDDs the scheduling objective is minimal head movement; every algorithm is a different guess at ordering the device queue — FCFS is fair but zig-zags (640 cylinders on the classic queue), SSTF is greedy but starves (236), SCAN sweeps to the disk edge and back (236), C-SCAN services one direction only for uniform waits (382), C-LOOK stops at the last request (338).",
      "SSTF favors middle cylinders; SCAN-family algorithms guarantee no request waits longer than about two sweeps.",
      "With one outstanding request every scheduler collapses to FCFS; under heavy load the sweep algorithms win — and since modern drives hide geometry behind LBA, Linux ships deadline (age-based read priority), NOOP (merge-only, for NVM) and CFQ rather than exotic seek optimizers.",
      "NVM devices have no head: FCFS plus adjacent-request merging is typical, with writes (the non-uniform, garbage-collection-prone operation) the ones worth grouping.",
      "A device becomes usable through low-level formatting (factory: sector headers, ECC, defect map), partitioning and volume creation, then logical formatting (file-system data structures).",
      "Boot: firmware bootstrap → boot blocks → full loader (grub2) → kernel; the MBR holds boot code plus the partition table. Bad blocks are masked by file-system marking or controller sparing/slipping.",
      "Swap in a raw partition is faster (no FS overhead, speed-optimized allocator) but fixed in size; a swap file is flexible but slower; Linux uses 4-KB page slots with swap-map counters and swaps only anonymous memory."
    ],
    quiz: [
      {
        q: "For the queue 98, 183, 37, 122, 14, 124, 65, 67 with the head at 53, FCFS produces total head movement of:",
        options: ["640 cylinders", "236 cylinders", "382 cylinders", "599 cylinders"],
        answer: 0,
        explanation: "Service in arrival order: $45+85+146+85+108+110+59+2 = 640$ cylinders — the book’s figure. The same queue under SSTF totals 236, and under C-SCAN (with the return sweep counted) 382."
      },
      {
        q: "The fundamental flaw of SSTF scheduling is:",
        options: [
          "it requires knowing the exact physical sector layout",
          "it services requests strictly in arrival order",
          "it can starve requests at the disk edges — nearby requests always win",
          "it moves the head only to the disk edges"
        ],
        answer: 2,
        explanation: "SSTF always picks the nearest pending request, so a steady stream of middle-cylinder traffic can postpone — forever — requests near the innermost or outermost cylinders. It also biases service toward the middle of the disk in general."
      },
      {
        q: "C-SCAN improves on SCAN mainly by providing:",
        options: [
          "a more uniform wait time — the head never services on the return trip",
          "less total head movement on every queue",
          "fewer disk interrupts",
          "better handling of bad blocks"
        ],
        answer: 0,
        explanation: "SCAN’s reversal points see a lopsided queue: just-serviced cylinders lie behind the head, and the longest-waiting requests sit at the far end. By sweeping in one direction only and jumping back, C-SCAN gives every cylinder the same treatment — at the cost of the non-servicing return sweep."
      },
      {
        q: "Which algorithm reverses direction at the last pending request rather than at the physical end of the disk?",
        options: ["C-SCAN", "C-LOOK", "SSTF", "FCFS"],
        answer: 1,
        explanation: "The LOOK family stops at the last request in the current direction instead of traveling to the disk edge — C-LOOK does this while still servicing only one direction before jumping back."
      },
      {
        q: "Why can a swap space in a raw partition outperform a swap file inside a file system?",
        options: [
          "raw partitions use larger sectors",
          "the file system encrypts swap files",
          "a dedicated swap-space manager allocates blocks for speed, with no file-system metadata or directory overhead",
          "raw partitions cannot fail"
        ],
        answer: 2,
        explanation: "Raw swap uses a purpose-built allocator optimized for speed rather than storage efficiency; internal fragmentation is acceptable because swap is short-lived and reinitialized at boot. The cost: swap size is fixed at partitioning time, while a swap file can grow or be added anywhere."
      }
    ,
      // PYQ-pattern — SSTF head movement (rephrased)
      {
        q: "Queue $98,183,37,122,14,124,65,67$, head at $53$. Under shortest-seek-time-first, what is total head movement?",
        options: ["$640$", "$208$", "$236$", "$299$"],
        answer: 2,
        explanation: "**Step 1 — Given data:** eight requests, start $53$.\n**Step 2 — Rule:** always step to the nearest pending cylinder.\n**Step 3 — Computation:**\n```\n53->65 (12), ->67 (2), ->37 (30), ->14 (23),\n->98 (84), ->122 (24), ->124 (2), ->183 (59)\ntotal = 236\n```\n**Step 4 — Cross-check:** sum of legs $12+2+30+23+84+24+2+59 = 236$; all eight requests served exactly once.\n**Step 5 — Distractors:** $640$ is FCFS order; $208$ is LOOK toward smaller first; $299$ is LOOK toward larger first.\n**Step 6 — Conclude:** $236$ cylinders."
      },
      // PYQ-pattern — LOOK head movement (rephrased)
      {
        q: "Same queue and head ($53$). Under LOOK moving toward smaller cylinders first (no travel to disk ends), what is total movement?",
        options: ["$208$", "$236$", "$640$", "$382$"],
        answer: 0,
        explanation: "**Step 1 — Given data:** same eight requests, LOOK reverses at last pending request, not at ends.\n**Step 2 — Rule:** sweep down to smallest pending, then sweep up.\n**Step 3 — Computation:**\n```\n53->37 (16), ->14 (23) [=39], ->65 (51) [=90], ->67 (2) [=92],\n->98 (31) [=123], ->122 (24) [=147], ->124 (2) [=149], ->183 (59) [=208]\n```\n**Step 4 — Cross-check:** down-leg $39$ plus up-leg $169$ equals $208$; no travel to $0$ or $199$ is charged, unlike SCAN.\n**Step 5 — Distractors:** $236$ is SSTF; $640$ is FCFS; $382$ is C-SCAN with end travel plus jump.\n**Step 6 — Conclude:** $208$ cylinders."
      }
    ]
  },

  // ---------------------------------------------------------------- 11.3
  {
    sectionId: "osc-ch11-s3",
    readingTime: 7,
    intro: "A storage device is useless until it is attached to computers — and there are four big answers to “how”: plug it into the host (direct-attached), serve it over the local network (NAS), put it on its own private storage network (SAN), or rent it in a remote data center (cloud, usually as objects). The choice between file-level and block-level access, and between LAN and WAN latency, drives almost every engineering decision in this space.",
    objectives: [
      "Describe host-attached storage and the buses used to connect devices (SATA, SAS, USB, FC, NVMe)",
      "Distinguish network-attached storage (NAS) from a storage-area network (SAN): file-level versus block-level access",
      "Explain iSCSI and where Fibre Channel and InfiniBand fit",
      "Describe cloud storage and why it is API-based rather than protocol-based",
      "Explain object storage: object IDs, rich metadata, content addressing and horizontal scalability"
    ],
    concepts: [
      {
        term: "Host-attached (direct-attached) storage",
        kind: "definition",
        statement: "**Host-attached storage** is accessed through local I/O ports — most commonly **SATA**; also eSATA, **SAS** (serial attached SCSI), USB, FireWire and Thunderbolt for external chassis, and **Fibre Channel (FC)**, a high-speed serial architecture over optical fiber or copper that lets multiple hosts and devices attach to a switched fabric. Fast NVM devices bypass these buses entirely: **NVMe** connects the device straight to the system’s PCIe bus for higher throughput and lower latency.",
        detail: "Commands to host-attached storage are reads and writes of logical blocks directed at specific units (bus ID or target logical unit). One host, one set of ports: scaling means adding devices to the one computer that owns them."
      },
      {
        term: "Network-attached storage (NAS)",
        kind: "definition",
        statement: "**NAS** is storage delivered across a network by a special-purpose storage system or general computer: clients make **remote-procedure calls** — **NFS** on UNIX/Linux, **CIFS/SMB** on Windows — carried over TCP or UDP via IP, usually over the same LAN as all other traffic. NAS appears to clients as just another file system, complete with locking, so the same home directory can be shared from many clients.",
        detail: "NAS is convenient — the whole LAN shares a pool of storage with local-ease naming — but it tends to be less efficient and slower than direct-attached options, and its traffic competes with client–server communication on the data network. **iSCSI** extends the idea to blocks: it carries the SCSI protocol over IP networks, so networks replace SCSI cables and the host treats the storage as directly attached, receiving raw blocks (or building a file system on them) while NFS/CIFS ship file fragments instead."
      },
      {
        term: "Storage-area networks (SAN) and storage arrays",
        kind: "definition",
        statement: "A **SAN** is a **private network using storage protocols rather than networking protocols** that connects servers and storage units: many hosts and many storage arrays attach to the same fabric, and storage can be **dynamically allocated** to hosts via SAN switches. **FC** is the most common interconnect, **iSCSI** a simpler-growing alternative, and **InfiniBand** a special-purpose high-speed interconnect. A **storage array** is a purpose-built device — its own controllers (CPU, memory, software), SAN and/or network ports, and drives — exporting RAID, snapshots, replication, compression, deduplication and encryption.",
        detail: "Arrays may be all-SSD (fastest, less capacity), all-HDD, or mixed with SSD caching for HDD bulk. The NAS/SAN contrast in one line: **NAS is file-level over the LAN; SAN is block-level over a dedicated fabric** — the host sees raw blocks and runs its own file system. SAN connectivity is short-distance, typically unrouted (fewer attached hosts than a NAS can have) but far more flexible for allocation; unprotected arrays expose JBOD — “just a bunch of disks.”"
      },
      {
        term: "Cloud storage",
        kind: "definition",
        statement: "**Cloud storage** provides storage across the Internet or another WAN for a fee, from a remote data center. Unlike NAS it is **API-based**: programs use the provider’s APIs rather than mounted protocols — Amazon S3 is the archetype, with Dropbox, OneDrive and iCloud as consumer front ends. Because WAN latency and disconnections are expected, applications are written to pause access until connectivity returns, rather than hanging the way an NFS client on a dead LAN would.",
        detail: "The economics are elastic — pay for what is stored — and providers tier objects by access frequency (hot, cool, archive) at different prices and retrieval delays. Durability comes from replication and erasure coding across many independent failure domains, which is also why cloud object stores, not RAID arrays, back most large-scale systems today."
      },
      {
        term: "Object storage",
        kind: "definition",
        statement: "**Object storage** starts from a pool of storage and places **objects** in it — each object is data plus rich, self-describing metadata, identified only by an **object ID** in a flat namespace (no directories to navigate; it is computer-oriented, not user-oriented). The protocol is: create an object and receive its ID; access it by ID; delete it by ID. Because objects can be retrieved based on their contents, object storage is also called **content-addressable storage**.",
        detail: "Management software such as HDFS and Ceph decides placement and protection on commodity hardware — commonly storing $N$ copies of an object on $N$ different computers instead of RAID arrays, with computation moved to the nodes that hold a copy. Object stores scale horizontally (add computers with disks; petabytes are routine) — a storage array has a fixed maximum — which is why Google’s search index, Dropbox, Spotify’s songs and Facebook’s photos live in object stores. The trade-off: best for bulk storage and huge scale, not high-speed random access."
      },
      {
        term: "Choosing an attachment strategy",
        kind: "insight",
        statement: "Direct-attached storage (including NVMe) gives the lowest latency and simplest model but is bound to one host. NAS shares files with the least effort over an existing LAN. SANs share raw blocks with dynamic allocation for many servers. Cloud/object storage trades latency for elasticity, geographic reach and API-driven automation.",
        detail: "Real systems mix all four: an NVMe scratch disk on the compute node, a NAS filer for home directories, a SAN LUN for the database’s raw blocks, and object storage for backup and big data — each chosen by matching access pattern (blocks, files or objects) to the network it must cross (none, LAN, fabric, WAN)."
      }
    ],
    examples: [
      {
        title: "One company, four storage problems",
        problem: "A video-production company needs: (a) scratch space for 4 K video editing on one workstation, (b) shared project files for twenty editors, (c) a block volume for its transactional database on a cluster of servers, and (d) off-site copies of finished projects kept for years but rarely read. Pick an attachment technology for each and justify it.",
        steps: [
          { label: "Step 1: Editing scratch — direct-attached NVMe", text: "Editing streams gigabytes per minute with demands for microsecond responsiveness and no network dependency: an NVMe SSD attached straight to the workstation’s PCIe bus gives 2+ GB/s and the lowest latency of any option." },
          { label: "Step 2: Shared projects — NAS", text: "Twenty editors need the same files with names, permissions and locking: a NAS filer speaking NFS or SMB presents a shared directory tree over the existing LAN — file-level access, human-friendly naming, no fabric to build." },
          { label: "Step 3: Database volume — SAN", text: "The database wants raw blocks, not files (it manages its own layout and caching), and the server cluster wants to share and grow the volume: a SAN (Fibre Channel or iSCSI) LUN delivers block-level access with dynamic reallocation, on a private fabric that keeps storage traffic off the LAN." },
          { label: "Step 4: Finished archives — cloud object storage", text: "Archives are written once, read rarely, and must survive a site disaster: an S3-style object store offers pay-per-GB pricing, an archive tier for pennies, and durability through replication plus erasure coding across independent failure domains." }
        ],
        result: "The mapping is access-pattern-first: latency-critical private data → DAS/NVMe; shared human files → NAS; shared raw blocks for databases → SAN; elastic, durable, rarely-touched bulk → cloud object storage."
      },
      {
        title: "Costing a SAN versus NAS for ten servers",
        problem: "Ten database servers each need 2 TB of shared, growable block storage with multipath failover. Compare (a) a SAN LUN over Fibre Channel with dual fabrics against (b) mounting the same capacity from a NAS filer over the office LAN, on performance isolation, growth and failure behavior.",
        steps: [
          { label: "Step 1: Performance isolation", text: "The SAN runs on its own fabric: storage traffic never touches the office LAN, and raw blocks skip the file layer, so the database keeps its own cache discipline and microsecond-scale latency. The NAS shares the LAN with every backup and video call, and every block passes through the filer’s file system first." },
          { label: "Step 2: Growth", text: "Both grow by adding spindles, but the SAN reallocates raw extents to any server on demand, while the NAS grows files inside fixed exported volumes — the database cannot stripe its own layout across filer files as cleanly." },
          { label: "Step 3: Failover", text: "Dual SAN fabrics give two independent paths to each LUN: one fabric dies and I/O continues. The NAS has one LAN path per server (barring bonded links), and a filer head failure takes all ten servers’ storage with it unless a clustered pair stands by." },
          { label: "Step 4: Verdict", text: "Block-hungry clustered databases justify the SAN’s fabric cost; file-sharing workloads do not. The deciding question is who manages layout: the database (SAN) or the filer (NAS)." }
        ],
        result: "SAN wins on isolation, raw-block control and multipath failover; NAS wins on cost and simplicity. Databases that manage their own blocks belong on the SAN."
      }
    ],
    keyTakeaways: [
      "Host-attached storage hangs off local ports (SATA, SAS, USB, Thunderbolt, Fibre Channel); NVMe attaches NVM devices directly to PCIe for maximum throughput.",
      "NAS serves files (NFS, CIFS/SMB) over RPC on the LAN — convenient and shareable, but slower than direct attachment and competing with data-network traffic.",
      "A SAN is a private network speaking storage protocols: hosts get raw blocks, storage is dynamically allocated to servers, and FC/iSCSI/InfiniBand are the interconnects. NAS = file-level; SAN = block-level.",
      "iSCSI carries the SCSI protocol over IP — block-level access over ordinary networks, making distant storage look directly attached.",
      "Cloud storage is API-based over a WAN (Amazon S3 the archetype); applications must tolerate latency and disconnection by pausing, not hanging.",
      "Object storage addresses self-describing objects by ID in a flat namespace (content-addressable), replicates across commodity computers (HDFS, Ceph), and scales horizontally to petabytes — the substrate for big data and consumer clouds.",
      "Choose by access pattern and network: blocks need a SAN or direct bus, files a NAS, objects a cloud API."
    ],
    quiz: [
      {
        q: "The essential difference between NAS and SAN is:",
        options: [
          "NAS provides file-level access (NFS/CIFS), while a SAN provides block-level access over a private storage network",
          "NAS uses disks, SAN uses flash",
          "NAS is always faster than SAN",
          "SAN works over the LAN, NAS works over a private fabric"
        ],
        answer: 0,
        explanation: "NAS clients do file operations via RPC (NFS or CIFS/SMB) across the data network; SAN-attached hosts receive raw blocks on a dedicated fabric running storage protocols (FC, iSCSI, InfiniBand) and run their own file systems on them."
      },
      {
        q: "iSCSI is best described as:",
        options: [
          "a file-sharing protocol like NFS",
          "a Fibre Channel replacement with lower speed",
          "an object-storage API",
          "the SCSI protocol carried over IP networks, delivering logical blocks to the host"
        ],
        answer: 3,
        explanation: "iSCSI tunnels SCSI commands through IP, so ordinary networks replace SCSI cables: the host treats the storage as directly attached and either uses the blocks directly or puts a file system on them. NFS/CIFS ship parts of files; iSCSI ships blocks."
      },
      {
        q: "Why is cloud storage accessed through APIs rather than network file-system protocols?",
        options: [
          "WAN latency and disconnection are expected — applications are written to pause and retry instead of hanging the way an NFS client on a failed LAN would",
          "because APIs are always faster than protocols",
          "because cloud providers do not support TCP",
          "to prevent cloud storage from being used for backups"
        ],
        answer: 0,
        explanation: "NAS protocols were designed for low-latency, reliable LANs; a lost connection can hang them indefinitely. Cloud providers expect WAN failures, so applications using their APIs (Amazon S3 being the archetype) pause access until connectivity returns."
      },
      {
        q: "Object storage is also known as content-addressable storage because:",
        options: [
          "objects are addressed by cylinder and sector",
          "objects are self-describing and can be retrieved based on their contents, identified by object ID in a flat namespace",
          "each object must be encrypted",
          "objects can only be read sequentially"
        ],
        answer: 1,
        explanation: "There is no navigable directory structure — programs create an object, receive an ID, and later access or delete it by that ID. Objects carry their own metadata, have no fixed content format (unstructured data), and are typically protected by replication across computers (HDFS, Ceph) rather than RAID."
      }
    ]
  },

  // ---------------------------------------------------------------- 11.4
  {
    sectionId: "osc-ch11-s4",
    readingTime: 11,
    intro: "Many disks in one system are an opportunity: access them in parallel and throughput multiplies; copy or encode data across them and a drive failure costs nothing. RAID — redundant arrays of independent disks — is the discipline of combining striping (speed) with redundancy (survival), and its numbered levels are different points on the cost/reliability/performance trade-off curve. This section builds the levels, the capacity formulas and the rebuild mechanics — and shows why RAID is not backup.",
    objectives: [
      "Explain how redundancy improves reliability, including the mirrored-volume MTBF calculation",
      "Describe striping at bit and block level and its two performance goals",
      "Compare RAID levels 0, 1, 4, 5, 6, 0+1 and 1+0 on capacity, fault tolerance and write cost",
      "Walk through a RAID 5 parity reconstruction after a drive failure",
      "Discuss rebuilding, hot spares, and the limits of RAID (why RAID is not backup)"
    ],
    concepts: [
      {
        term: "Redundancy and the MTBF argument",
        kind: "insight",
        statement: "With $N$ drives, the chance that *some* drive fails is $N$ times the single-drive rate: if the mean time between failures of one disk is 100,000 hours, an array of 100 disks fails on average every $100{,}000/100 = 1{,}000$ hours — about 41.7 days. The fix is **redundancy**: store extra information that is normally unneeded but can rebuild lost data after a failure. For a **mirrored volume** (two drives, every write to both), the mean time to *data* loss — requiring a second failure during the repair window — is $$MTBF_{mirror} = \\frac{MTBF^2}{2 \\times MTTR}$$ where MTTR is the mean time to repair.",
        detail: "With MTBF = 100,000 hours and MTTR = 10 hours: $100{,}000^2 / (2 \\times 10) = 5 \\times 10^{8}$ hours ≈ 57,000 years — reliability math rewards redundancy enormously. But independence is optimistic: power failures, fires, floods and manufacturing batches kill drives together, and failure probability grows with age, so the second drive is more likely to die while the first is being rebuilt than the formula admits. Mirrors also risk **torn writes** on power loss (both copies half-written); solutions include ordering the writes or an ECC-protected nonvolatile write-back cache in the array. The “I” in RAID originally meant *inexpensive*; today it means *independent*."
      },
      {
        term: "Mirroring and striping",
        kind: "definition",
        statement: "**Mirroring** duplicates every drive: a logical volume consists of two physical drives, every write goes to both, reads can be served by either (doubling the read request rate), and data is lost only if the second drive fails before the first is replaced. **Striping** spreads data across drives instead: in **bit-level striping**, bit $i$ of each byte goes to drive $i$ (eight drives behave as one drive with 8× sectors and 8× the transfer rate); in **block-level striping**, block $i$ of a file goes to drive $(i \\bmod n) + 1$ — the only commonly available form.",
        detail: "Striping has two goals: (1) increase the throughput of many small accesses (page accesses) by load-balancing them across drives, and (2) reduce the response time of large accesses by reading all drives in parallel. Striping alone adds no reliability, mirroring alone adds no striping for a single logical drive — the RAID levels combine them with parity."
      },
      {
        term: "RAID levels 0 and 1",
        kind: "definition",
        statement: "**RAID 0** = block striping with no redundancy: $N$ drives, full capacity $C = N \\cdot c$, one failure destroys the volume (fine for scratch data that can be reloaded, e.g. scientific data sets loaded from source). **RAID 1** = mirroring: capacity $C = \\frac{N}{2} \\cdot c$, reads parallelize across both copies, rebuild is trivial (copy the survivor), and it is the choice when high reliability with fast recovery matters.",
        detail: "The book’s example figures assume four drives’ worth of data in every level: RAID 0 needs 4 drives, RAID 1 needs 8. RAID 1’s cost — double the drives — is the price of instant, simple recovery; a failed mirror is rebuilt by a straight copy, whereas parity levels must read every surviving drive."
      },
      {
        term: "RAID 4: dedicated parity",
        kind: "definition",
        statement: "**RAID 4** block-stripes data across $N$ drives and keeps the XOR **parity** block of every stripe on one dedicated drive $N+1$: if $P = B_1 \\oplus B_2 \\oplus \\cdots \\oplus B_N$, any single missing block is recoverable — and since drive controllers can detect *which* sector failed, one parity block suffices for correction, not just detection. Large reads and writes run in parallel across all drives; capacity $C = N \\cdot c$ of $N+1$ drives.",
        detail: "The Achilles heel is the **small write**: updating one data block requires updating its parity too, forcing a **read-modify-write** — read the old data block and old parity, write the new data block and new parity. **A single small write costs four drive accesses** (two reads, two writes), and *every* small write touches the one parity drive, which becomes a bottleneck. NVRAM-cached controllers that gather writes into full stripes avoid most read-modify-write cycles; WAFL uses RAID 4 because drives full of zeros can be added without changing parity. RAID 4 has two advantages over RAID 1 anyway: less storage overhead (one parity drive serves several data drives), and N-way striping makes multi-block transfers $N$ times faster."
      },
      {
        term: "RAID 5: distributed parity",
        kind: "definition",
        statement: "**RAID 5 (block-interleaved distributed parity)** spreads both data *and* parity across all drives: for each stripe of $N$ blocks, one drive holds parity and the rest hold data — e.g. with five drives, the parity for block $n$ lives on drive $(n \\bmod 5) + 1$. A parity block never stores the parity of blocks on the same drive (that failure would lose data and parity together). Capacity: $C = (N-1) \\cdot c$. It is the most common parity RAID.",
        detail: "Distribution removes RAID 4’s parity-drive hot spot: small writes still pay the four-access read-modify-write penalty, but now spread across all drives instead of serializing on one. Choose the stripe size so that full-stripe writes are common (no read needed) — a hardware XOR engine plus a write-back cache makes parity RAID nearly as fast as non-parity RAID in practice."
      },
      {
        term: "RAID 6: dual parity (P + Q)",
        kind: "definition",
        statement: "**RAID 6** stores *two* independent redundancy blocks per stripe — **P** is the usual XOR parity, **Q** comes from error-correcting codes over **Galois field** arithmetic (two XOR parities would be identical and add nothing). With 2 redundant blocks per 4 data blocks, the system **tolerates two simultaneous drive failures**: $C = (N-2) \\cdot c$.",
        detail: "Why tolerate two? Large-drive arrays rebuild slowly — RAID 5 rebuilds of big sets take **hours**, and during that window the array is one failure from data loss. RAID 6 (and **multidimensional RAID 6**, which arranges hundreds of drives into rows and columns, each running RAID 6) is the most common format in storage arrays precisely because it survives the second failure that arrives while the first is still rebuilding."
      },
      {
        term: "Nested levels: 0+1 and 1+0",
        kind: "definition",
        statement: "**RAID 0+1** stripes first, then mirrors the stripe (a mirror of stripes); **RAID 1+0** mirrors pairs first, then stripes the mirrors (a stripe of mirrors). Both cost double the drives and usually outperform RAID 5 — common where performance and reliability both matter, e.g. small databases.",
        detail: "The asymmetry shows up under failure: in RAID 0+1, one dead drive makes its *entire* stripe inaccessible, leaving only the mirror stripe — the next failure may be fatal. In RAID 1+0, a dead drive only disables its mirror pair, and the mirror partner (plus every other drive) keeps serving: up to half the drives can fail (one per pair) without data loss. Same price, different fault behavior — 1+0 is preferred."
      },
      {
        term: "Rebuilding, hot spares and selection",
        kind: "method",
        statement: "A **hot spare** is a drive held in reserve, not storing data, that the controller immediately drafts on failure so the RAID level reestablishes itself without human intervention. Rebuild performance varies sharply by level: RAID 1 rebuilds by *copying* the surviving mirror; parity levels must read **every other drive in the array** — RAID 5 rebuild times reach hours on large sets, and rebuild speed influences the effective MTBF.",
        detail: "Selection guidance from the book: RAID 0 for high performance where loss is tolerable (reload from source); RAID 1 where reliability with fast recovery dominates; 0+1/1+0 where performance and reliability both matter (small databases); RAID 5 for moderate data volumes at lower overhead; RAID 6/multidimensional RAID 6 as the array default — good performance, two-failure protection, modest overhead. More drives per set: higher transfer, higher cost, and higher chance of a second failure during rebuild."
      },
      {
        term: "RAID is not backup",
        kind: "insight",
        statement: "RAID protects against **physical media failure** only. It does nothing against wrong pointers, buggy or malicious software overwriting structures, **torn writes** (incomplete writes not properly recovered), or failure of the RAID controller itself — hardware or software RAID code bugs can lose everything on the array.",
        detail: "The ZFS answer is **end-to-end checksums**: every block (data and metadata) carries a checksum stored *with the pointer to it*, so corruption is detected wherever it happens, and mirrored copies self-heal (ZFS also merges volume and file-system management into pooled storage; BTRFS brings similar checksumming to Linux). Beyond one box, replication (synchronous: both sites before completion; asynchronous: batched, faster, distance-unlimited, but lossy on failure) and object stores’ $k$-of-$n$ erasure coding generalize RAID’s idea across failure domains — modern distributed block stores are RAID reborn across computers, not drives."
      }
    ],
    examples: [
      {
        title: "The arithmetic of mirroring",
        problem: "Single drives have MTBF 100,000 hours, and a failed drive is replaced and rebuilt in 10 hours on average (MTTR). Compare the failure profile of 100 independent drives with no redundancy against a two-drive mirrored volume.",
        steps: [
          { label: "Step 1: A hundred bare drives", text: "Any one of them dying loses data, so the array’s mean time to failure is $MTBF/N = 100{,}000/100 = 1{,}000$ hours — roughly 41.7 days between *some* data-losing failure." },
          { label: "Step 2: Set up the mirror formula", text: "A mirrored volume loses data only when the second drive fails while the first is under repair. Under independence, that compound event has mean $$MTBF_{mirror} = \\frac{MTBF^2}{2 \\times MTTR} = \\frac{100{,}000^2}{2 \\times 10} = 5 \\times 10^{8}\\ \\text{hours}.$$" },
          { label: "Step 3: Put it in human units", text: "$5 \\times 10^{8}$ hours is about $5 \\times 10^{8} / 8760 \\approx 57{,}000$ years of mean time to data loss — from 41 days for the raw array." },
          { label: "Step 4: Discount the assumptions", text: "The independence assumption is the weak link: a power outage, a fire, a flood, or a bad manufacturing batch can kill both copies together, and drive failure probability rises with age — making “second failure during repair” likelier than the formula predicts. Torn writes during power loss are handled by ordered writes or a nonvolatile ECC-protected cache in the array." }
        ],
        result: "One redundancy drive per pair converts a 41.7-day hazard into a (nominal) 57,000-year hazard — the entire engineering case for RAID, and the reason the caveats about correlated failures matter so much."
      },
      {
        title: "RAID 5: losing a drive and rebuilding it",
        problem: "A five-drive RAID 5 array holds one stripe whose four data blocks are $B_1 = 0xB2$, $B_2 = 0x1C$, $B_3 = 0x6E$, $B_4 = 0x37$ (drive 3 holds $B_3$). Verify the parity block, then reconstruct the contents of drive 3 after it fails, and compute the array’s usable capacity.",
        steps: [
          { label: "Step 1: Compute parity at write time", text: "The controller stores $P = B_1 \\oplus B_2 \\oplus B_3 \\oplus B_4$: in binary, $1010\\,1110 \\oplus 0110\\,1110 = 1100\\,0000$ and then $1100\\,0000 \\oplus 0011\\,0111 = 1111\\,0111$, so $P = 0xF7$ lands on the fifth drive — for the $n$-th stripe, parity sits on drive $(n \\bmod 5) + 1$." },
          { label: "Step 2: Drive 3 dies", text: "Blocks $B_1, B_2, B_4$ and the parity $P$ survive on the other four drives. The array keeps serving reads: $B_3$ is computed on the fly from the survivors." },
          { label: "Step 3: Reconstruct", text: "XOR the survivors with the parity: $B_3 = B_1 \\oplus B_2 \\oplus B_4 \\oplus P$. Binary: $1010\\,1110 \\oplus 0001\\,1100 = 1011\\,0010$; $\\oplus\\ 0011\\,0111 = 1000\\,0101$; $\\oplus\\ 1111\\,0111 = 0110\\,1110$ — $0x6E$, the original block." },
          { label: "Step 4: Rebuild onto the hot spare", text: "A hot spare takes over: the controller streams *every* surviving stripe of the array (not just this one) through this same XOR and writes the results to the spare — a full-read workload that can take hours on large drives, during which a second failure is fatal." },
          { label: "Step 5: Capacity check", text: "Five drives of capacity $c$ hold $C = (N-1) \\cdot c = 4c$ of user data — one drive’s worth is parity, distributed so no single drive is a hot spot." }
        ],
        result: "Parity $0xF7$ reconstructs the lost block exactly: XOR parity makes any one drive in the stripe redundant. That is the RAID 5 bargain — one drive’s capacity buys survival of any single failure, at the price of four-access small writes and a slow, vulnerable rebuild window (which RAID 6 shortens the risk of by surviving a second failure)."
      }
    ],
    keyTakeaways: [
      "$N$ drives multiply the failure rate: 100 disks with 100,000-hour MTBF fail every 1,000 hours (41.7 days). Redundancy — extra information for rebuilding — is the only structural answer.",
      "Mirrored volumes have mean time to data loss $MTBF^2/(2 \\times MTTR)$ — about 57,000 years on the book’s numbers — provided failures are independent (they often are not: power, fire, batches, aging).",
      "Striping serves throughput and large-access latency (bit-level or block-level; block is what ships); mirroring serves reliability and read parallelism.",
      "RAID 0: full capacity, zero protection. RAID 1: half capacity, trivial rebuild. RAID 4: one dedicated parity drive — cheap but a small-write bottleneck (read-modify-write = 4 drive accesses).",
      "RAID 5 distributes parity over all drives ($C = (N-1) \\cdot c$) — the most common parity RAID. RAID 6 adds Galois-field Q parity ($C = (N-2) \\cdot c$) and survives *two* failures, covering the long rebuild window — the storage-array default.",
      "RAID 1+0 beats 0+1 under failure (a dead drive costs only its mirror pair; in 0+1 an entire stripe goes dark), and hot spares automate recovery — but parity rebuilds read every surviving drive and take hours on large sets.",
      "RAID is not backup: it guards against media failure, not software bugs, torn writes, controller failure or deletion. ZFS-style end-to-end checksums, replication and object-store erasure coding address what RAID cannot."
    ],
    quiz: [
      {
        q: "Five 4 TB drives in a RAID 5 set provide usable capacity of:",
        options: ["20 TB", "16 TB", "8 TB", "12 TB"],
        answer: 1,
        explanation: "RAID 5 sacrifices exactly one drive’s worth of capacity to distributed parity: $C = (N-1) \\cdot c = 4 \\times 4$ TB = 16 TB. RAID 6 on the same drives would give 12 TB ($N-2$); a mirror of the same total drives (10 needed for 5-drive-equivalent capacity) would give half."
      },
      {
        q: "A small (sub-block) write to a RAID 4 or RAID 5 stripe normally costs:",
        options: [
          "four drive accesses: read old data and old parity, then write new data and new parity",
          "one drive access: only the modified block is written",
          "two drive accesses: data and parity written directly",
          "all drives must be read and rewritten"
        ],
        answer: 0,
        explanation: "Updating block $B$ changes the stripe parity $P = B_1 \\oplus \\cdots \\oplus B_N$, so the controller must read the old data block and old parity, then write both new copies — the read-modify-write cycle. Full-stripe writes and NVRAM caching avoid it; RAID 4 suffers more because all this traffic lands on the single parity drive."
      },
      {
        q: "What distinguishes RAID 6 from RAID 5?",
        options: [
          "it mirrors every stripe",
          "it has no parity overhead",
          "it stores two independent redundancy blocks per stripe (XOR parity plus a Galois-field code), so it survives two simultaneous drive failures",
          "it can only be built from SSDs"
        ],
        answer: 2,
        explanation: "Two XOR parities would be identical, so RAID 6’s second block Q is computed with error-correcting codes over Galois field arithmetic. Cost: one more drive of capacity ($C = N-2$). Benefit: the array tolerates a second failure during the long rebuild window — why RAID 6 and multidimensional RAID 6 dominate storage arrays."
      },
      {
        q: "With one drive failure, the key operational advantage of RAID 1+0 over RAID 0+1 is:",
        options: [
          "it needs fewer drives",
          "it rebuilds without reading any drive",
          "it requires no hot spare",
          "only the failed drive’s mirror pair is affected — every other drive keeps serving data"
        ],
        answer: 3,
        explanation: "RAID 0+1 mirrors whole stripes: one dead drive makes its entire stripe inaccessible, leaving a single point of failure. RAID 1+0 stripes mirror pairs: a dead drive only removes its pair from service, its partner carries the data, and the remaining drives — up to one per pair — can be lost before data is gone."
      },
      {
        q: "“RAID is not backup” because:",
        options: [
          "RAID only protects against physical media failure — not software errors, torn writes, controller failure or deletion",
          "RAID arrays cannot be restored from tape",
          "rebuilds always destroy the parity",
          "backups are always faster than RAID"
        ],
        answer: 0,
        explanation: "Wrong pointers, a buggy or malicious overwrite, an incomplete (torn) write, or a failed hardware/software RAID controller can corrupt or destroy the whole array — redundancy never notices. Systems like ZFS add block-level checksums stored with pointers to catch such corruption, and true backups (or replicated, erasure-coded object stores) cover the rest."
      }
    ]
  }
]
