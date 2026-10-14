import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 14: File-System Implementation (Sections 14.1 – 14.9)
// Master study content.
// ============================================================================

export const osCh14Content: SectionContent[] = [
  // ------------------------------------------------------------- 14.1–14.3
  {
    sectionId: "osc-ch14-s1",
    readingTime: 10,
    intro: "A file system is a stack of problems: talking to devices, turning logical blocks into physical ones, and managing metadata such as directories and control blocks. This section lays out the layered design, the on-storage and in-memory structures (from boot blocks and superblocks to the three open-file tables), the full journey of an open() and read(), and the two classic ways to implement a directory itself.",
    objectives: [
      "Name the four layers of a file system and what each contributes",
      "List the on-storage and in-memory file-system structures and their roles",
      "Describe the mount protocol and what it verifies before attaching a volume",
      "Trace open(), read() and close() through the per-process and system-wide tables",
      "Explain why fork() shares a file offset while two separate opens do not"
    ],
    concepts: [
      {
        term: "The layered design",
        kind: "definition",
        statement: "A file system is built in layers, each using the features of lower layers to create new features for higher ones. **I/O control** — device drivers and interrupt handlers — transfers information between main memory and the storage device, translating “retrieve block 123” into hardware-specific instructions. The **basic file system** (the “block I/O subsystem” in Linux) issues generic commands to the appropriate driver by logical block address, schedules I/O requests, and manages the memory buffers and caches holding file-system, directory and data blocks. The **file-organization module** knows about files and their logical blocks (numbered 0 through N), translates logical to physical block addresses, and contains the **free-space manager**. The **logical file system** manages metadata — the directory structure and file control blocks (**FCBs**, inodes in UNIX), plus protection.",
        detail: "Layering minimizes duplicated code — the I/O control and basic file-system layers are shared by multiple file systems, each of which supplies its own logical and file-organization modules — at the price of overhead. How many layers to use, and what each should do, is a major design decision."
      },
      {
        term: "On-storage structures",
        kind: "definition",
        statement: "Each volume carries four kinds of structures. A **boot control block** (per volume — the boot block in UFS, the partition boot sector in NTFS) holds the information needed to boot an operating system from that volume; it is typically the first block and is empty if no OS lives there. A **volume control block** (per volume — the **superblock** in UFS) stores the number of blocks, the block size, a free-block count and pointers, and a free-FCB count and pointers. The **directory structure** (per file system) organizes the files — file names and their associated inode numbers in UFS. One **per-file FCB** holds permissions, dates, owner, group, ACL, size and pointers to the file’s data blocks.",
        detail: "NTFS is the relational outlier: directory structure and per-file records both live inside a **master file table** with one row per file."
      },
      {
        term: "In-memory structures",
        kind: "definition",
        statement: "Loaded at mount time, updated during operations, discarded at dismount: an in-memory **mount table** with an entry per mounted volume; a **directory-structure cache** of recently accessed directories (with pointers to volume tables at mount points); the **system-wide open-file table**, holding a copy of each open file’s FCB plus a count of processes using it; the **per-process open-file table**, pointing at the appropriate system-wide entries; and **buffers** holding file-system blocks being read or written.",
        detail: "The caching pays for itself many times over — the BSD UNIX system, famous for caching wherever disk I/O can be saved, reported an average cache hit rate of 85 percent."
      },
      {
        term: "The mount protocol",
        kind: "method",
        statement: "Just as a file must be opened before use, a file system must be **mounted** before it is available to processes. The operating system is given the name of the device and the **mount point** — the location within the file structure where the new file system attaches. Some operating systems also require a file-system type; others **inspect the device’s structures** — reading the superblock — to verify that the volume actually contains a **valid file system**. The verified volume is recorded in the mount table and attached at the mount point; the files that lived under that point are hidden until the volume is unmounted.",
        detail: "Mounting is why the OS always knows which device serves a given path: the directory cache entries at mount points hold pointers into the volume table, so name resolution crosses into the right volume’s structures transparently."
      },
      {
        term: "open() through the tables",
        kind: "method",
        statement: "The open() call passes a file name to the logical file system, which first searches the **system-wide open-file table** — if another process already has the file open, a per-process entry is simply added pointing at the existing entry, saving the whole directory search. Otherwise the directory structure (parts of which are cached) is searched for the name; the FCB is copied into the system-wide table with an open count of 1; a per-process entry pointing at it is created; and a pointer to that entry is returned — the **file descriptor** (UNIX) or **file handle** (Windows).",
        detail: "Creating a new file works the same machinery in reverse: allocate an FCB (from the free-FCB pool if FCBs are preallocated), read the parent directory into memory, add the name and FCB number, and write the directory back. After a successful open, the file name is useless to the system — operations identify files by descriptor."
      },
      {
        term: "read(fd) through the layers",
        kind: "method",
        statement: "A read(descriptor, n) walks the stack: the descriptor indexes the **per-process table** → the **system-wide entry** supplies the FCB and the current **offset** → the file-organization module converts the logical block at that offset into a **physical block number** (via the inode’s pointers) → the basic file system issues the command through the **driver** → I/O control performs the transfer into a **buffer** → the data is copied to the caller’s memory → the offset advances by n.",
        detail: "Every step of the walk is a table lookup except the logical-to-physical translation — which is exactly what Chapter 14’s allocation methods determine."
      },
      {
        term: "close() and open counts",
        kind: "method",
        statement: "close() removes the per-process entry and decrements the system-wide entry’s **open count**. When the count reaches zero — the last holder has closed — any updated metadata are copied back to the on-disk directory structure, the system-wide entry is removed, and any locks are released, freeing the slot for reuse.",
        detail: "Without the count, the first close would evict an entry still in use by other processes; the count defers reclamation until the file is truly unused."
      },
      {
        term: "The three descriptor layers and fork()",
        kind: "insight",
        statement: "A file descriptor indexes the **per-process table**, whose entry points at a **system-wide open-file entry** — which owns the current offset and the access mode — which in turn points at the **inode/FCB**. Consequence: after fork(), parent and child hold copies of the same descriptor, both referring to one system-wide entry, so they **share the offset** — their reads interleave sequentially through the file. Two independent open() calls create two system-wide entries — **separate offsets**, each reader starting at byte 0.",
        detail: "The offset is deliberately process-independent state: it belongs to the open instance, not to the file on disk (where all openers would collide) nor to the process (where inherited and duplicated descriptors would diverge)."
      },
      {
        term: "Directory implementation: linear list vs hash table",
        kind: "method",
        statement: "A **linear list** of entries with file names and pointers to the data blocks is simplest to program but every lookup is a **linear search** — O(n) in the number of entries — and creation must also search to guarantee uniqueness. Deletion marks an entry unused (a blank name or an invalid inode number such as 0), links it onto a free list, or copies the last entry into the hole; a sorted list allows binary search but makes create and delete shuffle entries. A **hash table** keeps the linear list underneath but adds a hash structure: the hash of the name returns a pointer to the entry in the list — near-constant search time, at the cost of handling **collisions** (chained overflow, where each slot becomes a short linked list) and the **fixed-size problem**: a 64-entry table needs a new hash function and a full reorganization when the 65th file appears (say, rehashing to 128 entries).",
        detail: "Hash directories trade constant-time lookup against collision handling and an eventual disruptive rehash; the underlying linear list remains the on-disk truth, which keeps recovery simple."
      }
    ],
    examples: [
      {
        title: "open() and read() through the three tables",
        problem: "A cold system. A process calls open(\"/home/user/file\", READ), reads 100 bytes, forks, and the child reads 100 more bytes. The parent then closes and reopens the file. Trace every table involved.",
        steps: [
          { label: "Step 1: open()", text: "The file is in no system-wide entry, so the logical file system resolves /home/user/file — reading the directory blocks of root, home and user — and loads file’s **inode**." },
          { label: "Step 2: The tables fill", text: "The inode is copied into the **system-wide open-file table** (open count = 1, offset = 0, mode = READ), and a new **per-process table** slot — slot 3 — is created pointing at it. open() returns 3, the file descriptor." },
          { label: "Step 3: read(3, buf, 100)", text: "Slot 3 → the system-wide entry → offset 0 → the file-organization module maps logical block 0 through the inode’s pointers to a physical block → the driver transfers it into a buffer → 100 bytes are copied to buf → the offset becomes 100." },
          { label: "Step 4: fork()", text: "The child inherits a copy of the parent’s per-process table, so the child’s slot 3 points at the **same system-wide entry** — its open count rises to 2, and parent and child now share one offset." },
          { label: "Step 5: The child reads", text: "The child’s read(3, buf, 100) starts at offset 100, not 0 — the two processes interleave sequentially through one open instance — and leaves the offset at 200." },
          { label: "Step 6: close() and reopen", text: "The parent’s close(3) removes its per-process entry and drops the count to 1 (the child still holds the file). Only when the child also closes does the count reach zero — updated metadata is flushed and the system-wide entry removed. A fresh open() by the parent creates a **new** system-wide entry with its own offset, starting again at 0." }
        ],
        result: "Three layers, one offset: descriptors index per-process entries that share system-wide state. fork() shares the offset because it shares the entry; independent opens create independent entries — and independent offsets."
      },
      {
        title: "A hash directory outgrows itself",
        problem: "A directory uses a 64-slot hash table keyed by file name (hash = value mod 64), with the entries themselves in a linear list. Files mydata and weights both hash to 11. What happens — and what happens when a 65th file is created?",
        steps: [
          { label: "Step 1: Insert mydata", text: "h(mydata) = 11 and slot 11 is empty, so the entry is stored — one probe, effectively constant time." },
          { label: "Step 2: Insert weights", text: "h(weights) = 11 as well — a **collision**. With chained overflow, slot 11 becomes a short linked list holding both entries; lookups for either name now walk that chain (a few steps, still far cheaper than searching the whole directory)." },
          { label: "Step 3: The 65th file", text: "No slot remains. The table must grow — to 128 entries, say — which changes the hash function to mod 128 and forces **rehashing every name** into its new slot before the directory is usable again." },
          { label: "Step 4: The linear list survives", text: "The hash structure is only an accelerator over the linear list: the on-disk entries, deletion, and recovery from damage all operate on the list, untouched by the reorganization." }
        ],
        result: "Hash directories buy near-constant lookup at the price of collision chains and a fixed capacity that eventually demands a disruptive rehash — the book’s own 64-to-128 example."
      }
    ],
    keyTakeaways: [
      "Four layers: I/O control (drivers, interrupts), basic file system (block commands, buffers, scheduling), file-organization module (logical-to-physical mapping, free space), logical file system (metadata, directories, FCBs).",
      "On storage: boot block, superblock (volume control block), directory entries, one FCB per file; in memory: mount table, directory cache, the two open-file tables and buffers.",
      "Mounting verifies the device’s structures — the superblock — records the pair in the mount table, and attaches the volume at the mount point, hiding what was beneath it.",
      "open() returns a descriptor indexing per-process state that points at the system-wide entry (offset, mode, open count) that points at the inode.",
      "fork() shares the offset because parent and child share one system-wide entry; two separate opens create two entries — the offset belongs to the open instance, not the file.",
      "Linear-list directories cost O(n) per lookup; hash tables make lookup near O(1) but must handle collisions and an eventual fixed-size rehash."
    ],
    quiz: [
      {
        q: "Which layer contains the code that understands directory structure and file control blocks?",
        options: ["I/O control", "Basic file system", "File-organization module", "Logical file system"],
        answer: 3,
        explanation: "The logical file system manages metadata — directory structure and file control blocks (inodes) — plus protection; the layers beneath it translate and move blocks without knowing what a file is."
      },
      {
        q: "The volume control block of a UFS volume — block count, block size, free-block count and pointers — is the:",
        options: ["boot block", "superblock", "master file table", "inode"],
        answer: 1,
        explanation: "UFS calls its volume control block the superblock; NTFS instead keeps this information in the master file table."
      },
      {
        q: "In the classic UNIX design, the current file offset lives in:",
        options: [
          "the on-disk inode",
          "the per-process descriptor entry",
          "the system-wide open-file table entry for that open instance",
          "the directory entry"
        ],
        answer: 2,
        explanation: "The offset is state of the open instance: it lives in the system-wide open-file entry that all processes sharing that instance point to — which is why fork() children share it while independent opens do not."
      },
      {
        q: "After fork(), the child’s inherited file descriptors and the parent’s:",
        options: [
          "point to separate system-wide entries, so their offsets are independent",
          "point to the same system-wide entry, so they share one offset",
          "must be closed before the child can use them",
          "receive fresh copies of the inode"
        ],
        answer: 1,
        explanation: "fork() duplicates the per-process table, but both copies point at one system-wide entry — one offset, sequentially shared. Two separate open() calls are what produce independent offsets."
      },
      {
        q: "A 64-entry hash-table directory gains a 65th file. The standard remedy is:",
        options: [
          "the file is rejected",
          "the last collision chain grows by one",
          "the table is enlarged (say to 128), every name is rehashed and entries move to new slots",
          "the system falls back to linear search"
        ],
        answer: 2,
        explanation: "The hash function depends on the table size, so growth means a new function and a full rehash of the existing entries — the fixed-size weakness of hash directories."
      }
    ]
  },

  // ------------------------------------------------------------- 14.4–14.5
  {
    sectionId: "osc-ch14-s2",
    readingTime: 12,
    intro: "Given a device of numbered blocks, where do a file’s blocks go? The three classic answers — contiguous, linked and indexed allocation — trade random-access speed against growth flexibility and fragmentation. This section works through each method, the FAT and UNIX inode refinements, and the bookkeeping of free space: bitmaps, linked lists, grouping and counting — ending with the pointer-size arithmetic that bounds how big a file can be.",
    objectives: [
      "Compute block addresses under contiguous, linked and indexed allocation",
      "Explain the failure modes: external fragmentation, growth limits, pointer overhead, corruption",
      "Derive the capacity of a UNIX inode with direct, single-, double- and triple-indirect pointers",
      "Read and compute free-space bitmaps, and compare bitmap, linked-list, grouping and counting approaches",
      "Justify clusters, extents and the FAT as engineering compromises"
    ],
    concepts: [
      {
        term: "Contiguous allocation",
        kind: "definition",
        statement: "Each file occupies a set of **contiguous** device blocks: an n-block file starting at location b occupies blocks b through $b + n - 1$, and the directory records the pair (start, length). Logical block $i$ of the file sits at physical block $s + i$ — computable in constant time — so **both sequential and direct access are fast**, with minimal head movement on an HDD because adjacent logical blocks are physically adjacent.",
        detail: "Three problems. **Finding space** is the dynamic storage-allocation problem of Chapter 9 — first fit and best fit both leave **external fragmentation** as files come and go, and compaction can restore one large hole but may take hours, often offline. **Growth**: if the file outgrows its run it must be moved or the program re-run; users overestimate to compensate, wasting space as internal fragmentation. The standard compromise is the **extent**: an initial contiguous chunk, extended by further chunks chained in the file’s metadata — the approach of Symantec’s Veritas file system."
      },
      {
        term: "Linked allocation",
        kind: "definition",
        statement: "Each file is a **linked list of storage blocks**: the directory holds a pointer to the first (and last) block, and each block stores the pointer to the next. No external fragmentation — any free block satisfies a request — and no size declaration: the file grows as long as blocks remain. But **direct access is hopeless**: finding the $i$-th block requires starting at the beginning and following the pointers, one device read each — about $i$ block reads. Pointers also cost space (a 4-byte pointer in a 512-byte block leaves $512 - 4 = 508$ user bytes — $4/512 \\approx 0.78\\%$ overhead), and a lost or corrupted pointer can leak the chain into another file or the free list (doubly linked lists, or storing the file name and relative block number in each block, are partial and pricier fixes).",
        detail: "Allocation itself is trivial: find a free block, write it, link it at the end, update the directory’s end pointer and the size field."
      },
      {
        term: "Clusters",
        kind: "method",
        statement: "The usual fix for pointer overhead: collect blocks into multiples called **clusters** and allocate clusters rather than blocks. One pointer then serves more data (four 512-byte blocks per cluster cut the overhead fourfold), HDD throughput improves — fewer seeks — and allocation and free-list management shrink. The costs: **more internal fragmentation** (a partially used cluster wastes more than a partially used block) and worse random-I/O performance, since a small request drags a whole cluster along.",
        detail: "Clusters are used in most file systems precisely because sequential throughput and metadata economy dominate the average workload."
      },
      {
        term: "The file-allocation table (FAT)",
        kind: "method",
        statement: "The MS-DOS variation that rescues linked allocation: put **all the links in one table** at the beginning of the volume — one entry per block, indexed by block number. The directory entry stores the file’s first block; the table entry indexed by that number contains the next block; the chain continues to a special **end-of-file** value; **a table value of 0 marks a free block**. Allocating a block is finding a 0 entry and replacing the previous end-of-file with its address.",
        detail: "Book example: a file of blocks 217 → 618 → 339 stores directory start 217, FAT[217] = 618, FAT[618] = 339, FAT[339] = EOF. A table walk in (cached) memory replaces the on-disk chain walk, so random-access time improves — but unless the FAT is cached, each block lookup costs a seek to the start of the volume."
      },
      {
        term: "Indexed allocation",
        kind: "definition",
        statement: "Bring all the pointers together into one place per file: the **index block**, an array of storage-block addresses whose $i$-th entry points to the file’s $i$-th block, with the directory storing the index block’s address — the same idea as paging in Chapter 9. It supports **direct access without external fragmentation**, since any free block satisfies growth. The cost is pointer overhead: a one-block file must still allocate a full index block, worse than linked allocation’s single pointer.",
        detail: "When the index block is too small for the file, three mechanisms extend it: the **linked scheme** (chain index blocks of, say, 100 addresses each); the **multilevel index** (a first-level index pointing to second-level indexes — with 4,096-byte blocks and 4-byte pointers, one index block holds 1,024 pointers, and two levels address $1024^{2} = 1{,}048{,}576$ data blocks, files up to 4 GB); and the **combined scheme** — the UNIX inode."
      },
      {
        term: "The UNIX inode: direct plus indirect pointers",
        kind: "method",
        statement: "The combined scheme keeps 15 pointers in the file’s inode: **12 direct** pointers to data blocks — so a small file needs no separate index block, and with 4 KB blocks, $12 \\cdot 4\\,\\text{KB} = 48\\,\\text{KB}$ is reachable directly — then a **single indirect** pointer to an index block of data-block addresses, a **double indirect** pointer to an index of index blocks, and a **triple indirect** pointer one level higher. With 4 KB blocks and 4-byte pointers, the four tiers reach $48\\,\\text{KB} + 4\\,\\text{MB} + 4\\,\\text{GB} + 4\\,\\text{TB}$.",
        detail: "A null pointer (0) makes a **sparse file**: the hole reads as zeros and consumes no space until written. Note that a 32-bit file pointer reaches only $2^{32}$ bytes — 4 GB — so modern systems use 64-bit pointers (exbibyte-scale), and ZFS uses 128-bit: a device storing $2^{128}$ bytes at atomic density would weigh about 272 trillion kilograms."
      },
      {
        term: "Free-space management: the bit vector",
        kind: "method",
        statement: "Track free blocks in a **bitmap or bit vector**: one bit per block — in the book’s convention, 1 if free, 0 if allocated. Bit-manipulation instructions make it efficient to find the first free block or $n$ consecutive free blocks: scan each word for a non-zero value (a zero word is all allocated blocks), then locate the first 1 bit — the block number is (bits per word) × (number of zero-valued words) + offset of the 1 bit.",
        detail: "The catch is size: the bitmap must sit in main memory to be worth its speed. A 1-TB disk with 4-KB blocks needs $2^{40}/2^{12} = 2^{28}$ bits $= 2^{25}$ bytes — about 32 MB — and the tax grows with the disk. (A 1.3-GB disk with 512-byte blocks needed over 332 KB; clustering by four cut that to about 83 KB.)"
      },
      {
        term: "Linked, grouped and counted free lists",
        kind: "method",
        statement: "The alternative links the free blocks themselves: a pointer to the first free block lives in the file system (and cached in memory), and each free block points to the next. Traversal costs one read per block — slow, but usually the OS just needs one block from the head. **Grouping** speeds collection: the first free block stores the addresses of the next $n$ free blocks (the first $n - 1$ genuinely free, the last holding the next batch of addresses). **Counting** exploits runs: each entry becomes a pair (address, count) of contiguous free blocks — bigger entries, far shorter list, storable in a balanced tree for efficient lookup, insertion and deletion.",
        detail: "ZFS scales these ideas with **space maps**: each **metaslab** (a chunk of a much larger space) keeps a log, in counting format, of all allocation and freeing activity in time order — replayed into an in-memory balanced tree on demand and condensed by merging contiguous runs. The log plus the tree is the free list."
      },
      {
        term: "Choosing by access pattern",
        kind: "insight",
        statement: "Performance settles the choice. **Contiguous** needs only one access per block, for any access pattern, if the size is known. **Linked** is fine for sequential access (the next pointer is read with the previous block) but direct access to block $i$ costs about $i$ reads — never use it for random workloads. **Indexed** gives direct access once the index block is cached, though a deep double- or triple-indirect tail may cost extra index-block reads. Some systems mix: contiguous for small files with automatic conversion to indexed when they grow (or require the access type at creation — linked for sequential, contiguous for direct).",
        detail: "The trade-offs also move with hardware: on NVM devices there are no heads to move, so spending thousands of CPU cycles avoiding a seek is waste — the algorithms of the HDD era are being reshaped for constant-time access media."
      }
    ],
    examples: [
      {
        title: "How big can a UNIX inode’s file be?",
        problem: "Blocks are 4 KB and pointers are 4 bytes. A UNIX inode has 12 direct pointers plus single-, double- and triple-indirect pointers. Compute the maximum file size.",
        steps: [
          { label: "Step 1: Pointers per index block", text: "One 4 KB index block holds $\\frac{4\\,\\text{KB}}{4\\,\\text{B}} = \\frac{4096}{4} = 1024$ pointers." },
          { label: "Step 2: The direct tier", text: "The 12 in-inode pointers address $12 \\times 4\\,\\text{KB} = 48\\,\\text{KB}$ with no index block at all — small files never touch an index." },
          { label: "Step 3: Single indirect", text: "One index block of 1,024 pointers to data blocks: $1024 \\times 4\\,\\text{KB} = 4\\,\\text{MB}$." },
          { label: "Step 4: Double and triple indirect", text: "Double: an index of 1,024 pointers to index blocks — $1024^{2} \\times 4\\,\\text{KB} = 4\\,\\text{GB}$. Triple: $1024^{3} \\times 4\\,\\text{KB} = 4\\,\\text{TB}$." },
          { label: "Step 5: Total capacity", text: "$$12 \\cdot 4\\,\\text{KB} \\;+\\; \\frac{4\\,\\text{KB}}{4\\,\\text{B}} \\cdot 4\\,\\text{KB} \\;+\\; \\left(\\frac{4\\,\\text{KB}}{4\\,\\text{B}}\\right)^{2} \\cdot 4\\,\\text{KB} \\;+\\; \\left(\\frac{4\\,\\text{KB}}{4\\,\\text{B}}\\right)^{3} \\cdot 4\\,\\text{KB} \\;=\\; 48\\,\\text{KB} + 4\\,\\text{MB} + 4\\,\\text{GB} + 4\\,\\text{TB}$$ Each level of indirection multiplies the reach by 1,024." }
        ],
        result: "About 4 TB, from just 15 pointers in one inode: 12 direct for speed, three levels of indirection for scale. (The book’s Exercise 14.15 runs the same structure with 8 KB blocks: $96\\,\\text{KB} + 16\\,\\text{MB} + 32\\,\\text{GB} + 64\\,\\text{TB}$ — roughly 64 TB.)"
      },
      {
        title: "Decoding a free-space bitmap",
        problem: "A disk’s free-space bitmap (1 = free, 0 = allocated) begins 001111001111110001100000011100000. Which blocks are free, where does the word-scanning method find the first free block using 8-bit words, and can a 4-block file be placed?",
        steps: [
          { label: "Step 1: Read off the 1 bits", text: "Positions 2–5, 8–13, 17–18 and 25–27 are free; every other block up to 31 is allocated." },
          { label: "Step 2: Word scan", text: "Word 0 = 00111100 is non-zero, so the first free block lies inside it — no zero-valued words precede it, and there is no need to test individual bits." },
          { label: "Step 3: The formula", text: "First free block = (bits per word) × (zero-valued words) + offset of first 1 bit $= 8 \\times 0 + 2 = 2$." },
          { label: "Step 4: First fit for 4 blocks", text: "The run 2–5 provides four consecutive free blocks immediately — a scan for a run of 1s, cheap with word-parallel instructions (the same instructions that made the first-free search fast)." }
        ],
        result: "Free blocks: 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 17, 18, 25, 26, 27 — with the first free block (2) located by arithmetic rather than bit-by-bit inspection, and the 2–5 run satisfying the request in one step."
      },
      {
        title: "One file, three allocation methods",
        problem: "A 5-block file (logical blocks 0–4) is stored with (a) contiguous allocation starting at physical block 9, (b) linked allocation with the chain 9 → 16 → 1 → 10 → 25, and (c) indexed allocation with the index block in memory. How many device reads does it take to read logical block 4 in each case?",
        steps: [
          { label: "Step 1: Contiguous", text: "The directory gives start = 9, so logical block 4 is physical block $s + i = 9 + 4 = 13$ — **one read**." },
          { label: "Step 2: Linked", text: "Follow the chain from the directory’s first-block pointer: read block 9 (pointer to 16), 16 (pointer to 1), 1 (pointer to 10), 10 (pointer to 25), then block 25 itself — **five reads**, the book’s i-blocks-cost-i-reads rule in action." },
          { label: "Step 3: Indexed", text: "Look up entry 4 of the index block (in memory) → block 25 — **one read**. If the index block were not cached, add one read to fetch it first." },
          { label: "Step 4: Sequential comparison", text: "Reading the whole file: contiguous reads blocks 9–13 with minimal head movement; linked reads the same five blocks in chain order; indexed reads them in whatever order the index entries are consulted." }
        ],
        result: "Random access to one block: contiguous 1 read, indexed 1 read (cached index), linked 5 reads. Sequential access: essentially a tie — the rankings that decided which method belonged on which device."
      }
    ],
    keyTakeaways: [
      "Contiguous allocation computes block $i$ as $s + i$ — constant-time random access — but suffers external fragmentation, size prediction and growth problems; extents are the compromise.",
      "Linked allocation grows freely with no external fragmentation, but random access to block $i$ costs about $i$ reads, and pointers waste $4/512 \\approx 0.78\\%$ of each 512-byte block.",
      "The FAT gathers all links into one table at the volume start: allocation scans for 0 entries, chains are walked in cached memory, and random access improves — MS-DOS’s engine.",
      "Indexed allocation gives per-file direct access with no external fragmentation; its costs are index-block overhead for small files and limited capacity per index block — fixed by linked, multilevel or combined schemes.",
      "The UNIX inode: 12 direct ($48\\,\\text{KB}$) plus single ($4\\,\\text{MB}$), double ($4\\,\\text{GB}$) and triple indirect ($4\\,\\text{TB}$) tiers with 4 KB blocks and 4-byte pointers; each level of indirection multiplies reach by 1,024, and null pointers make sparse files free.",
      "Free space: bitmaps find runs with bit-parallel word operations but must live in memory ($2^{25}$ bytes — about 32 MB — for a 1-TB disk with 4-KB blocks); linked free lists waste nothing but traverse slowly; grouping and counting batch addresses into compact runs.",
      "Clusters cut pointer overhead and seeks at the price of internal fragmentation and worse small random I/O — the trade most file systems accept."
    ],
    quiz: [
      {
        q: "A file allocated contiguously starting at block 40 occupies 7 blocks. Logical block 3 of the file is at physical block:",
        options: ["43", "44", "40", "47"],
        answer: 0,
        explanation: "Physical = start + logical: 40 + 3 = 43. The first block of the file is 40 itself, and the run ends at 46."
      },
      {
        q: "The defining weakness of pure linked allocation is:",
        options: [
          "external fragmentation",
          "no direct access — reaching block i costs about i reads",
          "files cannot grow after creation",
          "the directory must store the file’s size"
        ],
        answer: 1,
        explanation: "The pointers live inside the data blocks scattered across the disk, so the chain must be walked from the start. Growth is actually linked allocation’s strength — any free block extends the file."
      },
      {
        q: "In an MS-DOS FAT, a table entry of 0 means:",
        options: ["end of file", "the block is free", "the block is corrupted", "the next block is block 0"],
        answer: 1,
        explanation: "The end-of-file chain uses a special EOF value; a 0 entry marks a block available for allocation, which is why allocation scans the table for zeros."
      },
      {
        q: "With 4 KB blocks and 4-byte pointers, one single-indirect index block addresses how much data?",
        options: ["4 KB", "1 MB", "4 GB", "4 MB"],
        answer: 3,
        explanation: "The index block holds 1024 pointers, each to a 4 KB data block: 1024 × 4 KB = 4 MB. Each further level of indirection multiplies the reach by 1024 again."
      },
      {
        q: "In the book’s bitmap convention, the sequence 1100111000… means blocks:",
        options: [
          "0 and 1 free, 2 and 3 allocated, 4–6 free, 7 onward allocated",
          "0 and 1 allocated, 2 and 3 free",
          "all blocks free",
          "all blocks allocated"
        ],
        answer: 0,
        explanation: "1 marks a free block: the leading 11 frees blocks 0 and 1, the 00 allocates 2 and 3, the 111 frees 4–6, and the trailing 000s allocate the rest."
      }
    ,
      // PYQ-pattern: GATE 2019 — single-indirect maximum (rephrased)
      {
        q: "Block size $4$ KB, pointer size $4$ bytes, single-indirect index. How many data blocks can one file address through that index, and how large is the file?",
        options: ["$256$ blocks, $1$ MB", "$1024$ blocks, $4$ MB", "$512$ blocks, $2$ MB", "$4096$ blocks, $16$ MB"],
        answer: 1,
        explanation: "**Step 1 — Given data:** $4096$-byte blocks, $4$-byte pointers.\n**Step 2 — Rule:** pointers per index block $= \\frac{4096}{4} = 1024$; file bytes $=$ pointers $\\times$ block size.\n**Step 3 — Computation:** $1024$ blocks; $1024 \\times 4096 = 4194304$ bytes $= 4$ MB.\n**Step 4 — Cross-check:** double-indirect would square to $1024^2$ blocks ($4$ GB); the units track: pointers times bytes-per-block.\n**Step 5 — Distractors:** $256$ assumes $16$-byte pointers; $512$ halves the block; $4096$ confuses blocks with bytes.\n**Step 6 — Conclude:** $1024$ blocks, $4$ MB."
      },
      // PYQ-pattern: DRDO 2017 — bitmap size (rephrased)
      {
        q: "A $16$-GB disk uses $4$-KB blocks with one bitmap bit per block. How large is the bitmap?",
        options: ["$128$ KB", "$4$ MB", "$16$ MB", "$512$ KB"],
        answer: 3,
        explanation: "**Step 1 — Given data:** disk $16$ GB $= 2^{34}$ bytes, block $4096 = 2^{12}$ bytes.\n**Step 2 — Rule:** blocks $=$ disk/block; bitmap bits $=$ blocks; bytes $=$ bits$/8$.\n**Step 3 — Computation:** blocks $= \\frac{2^{34}}{2^{12}} = 2^{22} = 4194304$; bits $4194304$; bytes $524288 = 512$ KB.\n**Step 4 — Cross-check:** $512$ KB is $\\frac{1}{32768}$ of the disk, the expected bitmap overhead for $4$-KB blocks.\n**Step 5 — Distractors:** $128$ KB suits $16$-KB blocks; $4$ MB counts bytes not bits; $16$ MB is far too large.\n**Step 6 — Conclude:** $512$ KB."
      }
    ]
  },

  // ------------------------------------------------------------- 14.6–14.9
  {
    sectionId: "osc-ch14-s3",
    readingTime: 11,
    intro: "A file system can be correct and still be slow; it can be fast and still lose data on a power cut. This section covers the efficiency levers (block and cluster sizes, preallocated inodes, pointer widths), the performance machinery (the unified page cache, read-ahead, write-behind, synchronous writes), and the recovery machinery: fsck, journaling with its three Linux modes, never-overwrite designs such as WAFL and ZFS snapshots, and the TRIM command that keeps NVM devices fast.",
    objectives: [
      "Weigh the efficiency costs of block size, cluster size, per-file metadata and pointer width",
      "Explain the unified page cache, read-ahead, free-behind and write-behind",
      "State the crash-consistency problem: why one file creation is several structural writes",
      "Trace write-ahead logging: journal, commit, checkpoint, replay",
      "Compare recovery strategies: fsck, journaling modes, snapshots and copy-on-write, and TRIM"
    ],
    concepts: [
      {
        term: "Efficiency levers",
        kind: "insight",
        statement: "Storage efficiency turns on small design choices. **Inodes are preallocated** across the volume — even an empty disk loses a percentage of its space to them — but spreading them near the data they describe lets the allocator keep a file’s blocks near its inode, cutting seek time. **Cluster size** trades seek-count and metadata economy against internal fragmentation; BSD varies cluster size as a file grows to blunt the waste. **Per-file metadata has a price**: a last-access date means every read dirties the FCB, forcing a read-modify-write of its block — which is why heavily shared file servers such as NFS servers often decline to maintain it. And **pointer width** caps the addressable size: 32-bit pointers stop at $2^{32}$ bytes — 4 GB — while 64-bit pointers open exabyte scale and ZFS’s 128-bit pointers ($2^{128}$ bytes) should never need extending.",
        detail: "History punishes narrow pointers: the IBM PC XT’s 10-MB drive ran an MS-DOS FAT with 12-bit entries over 8-KB clusters, capping file systems at 32 MB — larger disks had to be split into 32-MB partitions until the FAT entries grew to 16 and then 32 bits, inconveniencing millions of users."
      },
      {
        term: "Buffer cache, page cache and the unified buffer cache",
        kind: "definition",
        statement: "A **buffer cache** is a section of main memory holding file-system blocks on the assumption they will be reused; a **page cache** uses virtual-memory techniques to cache file data as **pages** rather than file-system-oriented blocks — interfacing with virtual addresses, which is more efficient. Without unification, memory mapping goes through the page cache while read() and write() go through the buffer cache, so the same file is cached twice — **double caching** — wasting memory, burning CPU and I/O on the extra copies, and risking inconsistencies between the two caches. A **unified buffer cache** (Solaris, Linux, Windows) routes both paths through the same page cache, letting the virtual-memory system manage file data.",
        detail: "LRU is the reasonable default replacement policy for both caches, but choosing well is genuinely hard: Solaris spent several releases retuning the balance between process pages and the page cache — its page scanner once reclaimed pages from processes rather than the cache under heavy I/O until priority paging and then fixed limits corrected it."
      },
      {
        term: "Read-ahead and free-behind",
        kind: "method",
        statement: "For a file being read or written sequentially, LRU is exactly wrong — the most recently used page is the one least likely to be touched again. **Read-ahead** fetches the requested page **and several subsequent pages** in one transfer, caching data that sequential access will need next anyway. **Free-behind** removes a page from the buffer as soon as the next page is requested, reclaiming space the stream will never revisit.",
        detail: "Read-ahead survives even though drive controllers cache whole tracks, because the per-request latency of moving many small transfers from track cache to memory is high — one large prefetch is still cheaper."
      },
      {
        term: "Write-behind and synchronous writes",
        kind: "method",
        statement: "Most writes are **asynchronous**: data land in the page cache and control returns to the caller immediately; a flusher later writes pages back — in device-address order, letting the driver sort requests and minimize seeks — when thresholds are met. This is **write-behind / delayed writing**, and its risk is the **window** between the user’s return and the flush: cached data dies with a crash. **Synchronous writes** close the window: they occur in the order the storage subsystem receives them, unbuffered, and the caller waits for the data to reach the device — databases request them (an open flag) so atomic transactions reach stable storage in the required order, and metadata writes are often synchronous for the same reason.",
        detail: "A counterintuitive consequence: for small transfers, writes are often faster than reads — a read must fetch the block before returning, while a write only touches the cache. For large continuous I/O that overruns the cache, everything bottlenecks at device speed, where HDDs read faster than they write — the small-I/O ranking reversed."
      },
      {
        term: "The crash-consistency problem",
        kind: "insight",
        statement: "One logical operation is many structural writes: creating a file allocates an FCB, allocates data blocks, decrements free counts and adds a directory entry. A crash between these writes leaves the structures disagreeing — the free-FCB count says allocated while no directory points at the inode (an orphan), or blocks are marked free that a half-written directory still references. Caching makes it worse: some changes reach the device while others are still in memory and simply vanish.",
        detail: "A file system must first detect corruption, then correct it — and correction must fit the allocation scheme: with linked allocation a surviving chain can rebuild a directory entry, but with indexed allocation the loss of a directory entry is disastrous, because the data blocks know nothing of one another."
      },
      {
        term: "Journaling: the write-ahead log",
        kind: "method",
        statement: "Borrowed from database log-based recovery: before touching the real structures, **all metadata changes are written sequentially to a log** — the set of operations for one task is a **transaction**. Once the changes are in the log, the transaction is **committed** and the system call can return. Meanwhile the changes are **replayed (checkpointed)** across the actual file-system structures, with a pointer marking what has completed; a completed transaction is noted in the log. The log is a circular buffer, stored in a separate section of the file system or even a separate device, and it never overwrites entries that have not been saved. After a crash, recovery **replays every committed but incomplete transaction** from the pointer and discards any uncommitted one — consistency restored without scanning the disk.",
        detail: "A side benefit makes journaling a performance feature, not just a safety feature: the costly synchronous random metadata writes become much cheaper synchronous sequential writes to the log area, with the random writes replayed asynchronously later — file creation and deletion get significantly faster on HDDs. NTFS, Veritas, Solaris UFS, ext3, ext4 and ZFS all journal or log their metadata updates."
      },
      {
        term: "The three journal modes of Linux ext3/ext4",
        kind: "method",
        statement: "**journal** — data and metadata are both journaled: the safest (nothing that reported success is lost) and the slowest, since every block is written twice. **ordered** — the default: metadata is journaled, but data blocks are forced out to the device **before** the metadata referencing them is committed, so a crash never leaves metadata pointing at stale or garbage data. **writeback** — metadata only, with data written whenever: fastest, but a crash can expose old contents inside a structurally consistent file.",
        detail: "The mode is a knob on the safety-versus-speed dial — and a reminder that journaling is really write-ahead logging, with data placement as an extra degree of freedom the database world resolved the same way."
      },
      {
        term: "Never-overwrite file systems and snapshots",
        kind: "method",
        statement: "The WAFL and ZFS alternative to repair: **never overwrite blocks**. A transaction writes all data and metadata changes to **new blocks**, and when it completes, the metadata that pointed at the old versions is atomically repointed at the new ones; only then are the old blocks and pointers reclaimed. Keeping the old pointers instead of reclaiming them creates a **snapshot** — a point-in-time image of the entire file system at (nearly) the cost of the blocks changed since. Read-write snapshots are **clones**. ZFS adds checksums of all metadata and data blocks, which combined with RAID means the data are always verifiably correct — ZFS has no consistency checker at all.",
        detail: "Snapshots power backups, versioning, testing and disaster recovery; replication is just shipping the blocks that a new snapshot reveals to a remote system that already holds the previous one."
      },
      {
        term: "fsck, backups, WAFL and TRIM",
        kind: "insight",
        statement: "The classic detector is the **consistency checker** (fsck): scan all metadata, comparing the directory structure and other metadata with the state on storage — superblock counters, free-block lists, inode link counts — and repair what disagrees. The scan takes minutes to hours and is often offline; systems shorten it with a status bit set while metadata is in flux (run the checker only if the bit survives a crash), and BSD’s soft updates order metadata writes instead so partial updates leave a consistent structure. Backups — a full copy on day 1, then incrementals — guard against what repair cannot. **WAFL** (write-anywhere file layout) is the NetApp appliance file system built on never-overwrite: 16 pointers per inode, all metadata living in files (the inode file, free-block map, free-inode map) under a root inode, an NVRAM cache for writes, cheap snapshots and clones, and replication. On NVM devices, **TRIM** (ATA) or the analogous NVMe deallocate command tells the storage controller which pages the file system has freed, so its garbage collection and block erasure can run before the device fills — avoiding the **write cliff**, the collapse of write performance on a nearly full flash device.",
        detail: "Why NVM needs TRIM: flash cannot be overwritten in place and must be erased in large chunks before reuse. Without the hint, the device sees every page as live and must shuffle data to reclaim blocks exactly when capacity is scarcest — so the hint keeps steady-state performance."
      }
    ],
    examples: [
      {
        title: "A crash in the middle of a file creation",
        problem: "A process creates notes.txt in /home, writes one data block, and the system then crashes. Trace ext4-style ordered-mode journaling through the operation, the crash, and the recovery.",
        steps: [
          { label: "Step 1: The operation", text: "Creating /home/notes.txt is four structural changes: (i) allocate inode 42 in the inode bitmap, (ii) initialize inode 42 to point at data block B, (iii) add the entry notes.txt → 42 to /home’s directory block, (iv) decrement the free counts. All four must happen, or none — that is the transaction." },
          { label: "Step 2: Journal writes", text: "Before touching the real structures, the kernel writes the intended changes sequentially to the journal — the inode bitmap update, the new inode 42 contents, the modified directory block — followed by a **commit record**. Once the commit record is durable, the transaction is committed and create() may return." },
          { label: "Step 3: Checkpoint", text: "In the background the kernel replays the journaled changes into the real structures — the bitmap bit, the inode, the directory block — and marks the transaction complete in the log (a circular buffer, since freed)." },
          { label: "Step 4: The crash", text: "Power fails after the commit record but before the checkpoint finishes: the on-disk directory block is stale and the inode bitmap still says inode 42 is free. In ordered mode the data block B was forced to the device **before** the metadata commit, so B is already there." },
          { label: "Step 5: Recovery", text: "On boot, the file system scans the journal from its pointer, finds a committed transaction whose checkpoint never completed, and **replays** it — rewriting the bitmap bit, the inode and the directory entry exactly as journaled. The file system is consistent in seconds, with no full-disk scan." },
          { label: "Step 6: The earlier crash", text: "Had the crash struck a moment earlier — after some journal records but before the commit record — the incomplete transaction would simply be discarded: half-described changes never reached the structures and never will." }
        ],
        result: "One committed transaction, one replay: the journal converts crash recovery from fsck’s scan-and-repair into replay-the-log — bounded, fast, and independent of disk size."
      },
      {
        title: "Snapshots and clones in WAFL",
        problem: "A WAFL file system takes a snapshot; then block D of a file changes. Describe what the root inode, the snapshot and the free-block map do — then explain clones and replication.",
        steps: [
          { label: "Step 1: Taking the snapshot", text: "WAFL copies the **root inode**. The active root still describes the file system as it is; the snapshot — the old root inode — describes it as it was. No data is copied: the image costs roughly one inode." },
          { label: "Step 2: Writing block D", text: "Never overwrite: the change goes to a **new block D′**, and the active root’s pointers are updated to reference D′. The snapshot’s pointers still reference D, so D must be preserved." },
          { label: "Step 3: The free-block map", text: "It carries **more than one bit per block** — one bit per snapshot using the block. D’s map has a bit set for the snapshot; only when every snapshot referencing D is deleted does the map reach all zeros and the block become reusable." },
          { label: "Step 4: Clones", text: "A read-write snapshot referring back to a read-only snapshot: writes land in new blocks and the clone’s pointers update, leaving the original pristine — ideal for testing an upgrade and deleting the result (or promoting the clone)." },
          { label: "Step 5: Replication", text: "Duplicate a snapshot to another system, then ship only the blocks each **new** snapshot adds — the delta — keeping the remote copy nearly current. Disaster recovery from the same primitive." }
        ],
        result: "A snapshot is one root-inode copy plus the discipline of never overwriting: divergence costs only the changed blocks (D survives, D′ is born), yielding cheap point-in-time images that also power backups, versioning, testing and replication."
      }
    ],
    keyTakeaways: [
      "Efficiency is set by cluster size (seeks vs fragmentation), preallocated inodes placed near data, metadata frequency (a last-access date dirties the FCB on every read) and pointer width ($2^{32}$ bytes is a 32-bit ceiling; ZFS’s 128-bit is effectively forever).",
      "A unified page cache serves both mmap and read()/write(), avoiding the memory waste, extra copies and inconsistencies of double caching.",
      "Read-ahead and free-behind fix LRU’s blindness to sequential streams; write-behind makes small writes faster than reads, at the cost of a crash window that synchronous writes (fsync, database logs) close.",
      "A file creation is several structural writes — inode, bitmap, directory entry, free counts — and a crash between them is the crash-consistency problem.",
      "Journaling writes intended changes to a circular write-ahead log, commits, then checkpoints; recovery replays committed transactions and discards uncommitted ones. ext4’s modes trade safety for speed: journal, ordered (default: data before metadata), writeback.",
      "Never-overwrite designs (WAFL, ZFS) write to new blocks and repoint: atomic updates, near-free snapshots (an old root inode), clones — and in ZFS, checksums with no fsck at all.",
      "TRIM (and NVMe’s deallocate) tells an NVM device which pages are free so erase-and-collect can run early, avoiding the write cliff."
    ],
    quiz: [
      {
        q: "Without a unified buffer cache, memory-mapped I/O and read()/write() I/O on the same file:",
        options: [
          "share one page cache",
          "cause double caching — the file is cached in both the page cache and the buffer cache",
          "bypass all caches",
          "deadlock against each other"
        ],
        answer: 1,
        explanation: "The two paths use two different caches, so the data are cached twice — wasting memory and CPU on the extra copy and risking inconsistencies between the two copies."
      },
      {
        q: "Read-ahead improves performance because:",
        options: [
          "LRU is the optimal replacement policy for files",
          "the successors of a sequentially read page are likely to be requested next",
          "devices cannot read single blocks",
          "it defragments the file"
        ],
        answer: 1,
        explanation: "Sequential access is predictable: fetching the requested page and several following pages in one transfer costs little extra and eliminates the next several faults. LRU is in fact exactly wrong for sequential streams — hence free-behind."
      },
      {
        q: "In Linux’s default ordered journal mode:",
        options: [
          "data and metadata are both journaled",
          "metadata is written before the data it references",
          "nothing is journaled",
          "data blocks are written before the metadata referencing them is committed"
        ],
        answer: 3,
        explanation: "Ordered mode journals only metadata but forces the data blocks to the device first, so committed metadata never points at stale or unwritten data — the default compromise between the slow-but-safest journal mode and the fast-but-looser writeback mode."
      },
      {
        q: "A WAFL snapshot costs almost nothing because:",
        options: [
          "it copies only the root inode, and old blocks are preserved rather than overwritten",
          "it compresses the file system",
          "it writes to a second disk",
          "snapshots are stored in NVRAM"
        ],
        answer: 0,
        explanation: "The snapshot is just a preserved old root inode; because WAFL never overwrites blocks, subsequent changes flow to new blocks and the snapshot keeps pointing at the old ones — divergence costs only the changed blocks."
      },
      {
        q: "TRIM exists so that:",
        options: [
          "HDDs can defragment faster",
          "the kernel can free inodes",
          "an NVM device can erase and garbage-collect freed pages before it fills, avoiding the write cliff",
          "the file system can place files contiguously"
        ],
        answer: 2,
        explanation: "Flash cannot be overwritten in place and must be erased in large chunks. Knowing which pages are free lets the device reclaim them early, before capacity runs short and write performance collapses."
      }
    ]
  }
]
