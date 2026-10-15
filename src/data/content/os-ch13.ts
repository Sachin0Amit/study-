import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 13: File-System Interface (Sections 13.1 – 13.5)
// Master study content.
// ============================================================================

export const osCh13Content: SectionContent[] = [
  // ------------------------------------------------------------- 13.1
  {
    sectionId: "osc-ch13-s1",
    readingTime: 9,
    intro: "To most users the file system is the most visible part of an operating system: the mechanism for on-line storage of and access to both data and programs. This section defines the file — a named collection of related information recorded on secondary storage — surveys its attributes and the seven basic operations every file system must support, and explains the open()/close() protocol that makes all the other operations fast. It closes with file typing, internal structure, and the small tax every block-oriented device levies on every file.",
    objectives: [
      "Define a file and list the attributes an operating system typically records for one",
      "Trace the seven basic file operations and what the OS must do for each",
      "Explain why open() and close() exist and what the open-file table stores",
      "Compare file-type mechanisms: extensions, magic numbers, and the macOS type and creator attributes",
      "Relate logical records to physical blocks and quantify internal fragmentation"
    ],
    concepts: [
      {
        term: "The file",
        kind: "definition",
        statement: "A **file** is a named collection of related information that is recorded on secondary storage. From the user’s perspective, a file is the smallest allotment of logical secondary storage — data cannot be written to secondary storage except within a file. Files represent programs (source and object forms) and data (numeric, alphabetic, alphanumeric or binary), free-form like text or rigidly formatted.",
        detail: "The operating system abstracts away the physical properties of NVM devices, HDDs, tape and optical media to present this one uniform logical storage unit, and because the media are nonvolatile, contents persist across reboots. The abstraction is so general that UNIX exposes kernel state — process details in /proc — through file-system interfaces."
      },
      {
        term: "File attributes",
        kind: "definition",
        statement: "The information about a file, varying by system but typically: **name** (the only item kept in human-readable form), **identifier** (a unique tag, usually a number, that identifies the file within the file system — the non-human-readable name), **type**, **location** (a pointer to the device and to the file’s position on it), **size** (current, and possibly the maximum allowed), **protection** (access-control information), and **timestamps and user identification** (creation, last modification and last use).",
        detail: "A directory entry typically holds just the name and the identifier; the identifier — an inode number in UNIX — locates the rest. Recording all attributes can take over a kilobyte per file, so a large system’s directories themselves grow to megabytes or gigabytes and are brought into memory piecemeal, like the files they describe."
      },
      {
        term: "The seven basic file operations",
        kind: "method",
        statement: "The minimal set every file system must provide: **create** (find space for the file, then make a directory entry), **write** (handle plus data; the system keeps a write pointer for where the next write lands), **read** (handle plus a memory destination; a read pointer advances), **reposition within a file** (reset the current-file-position pointer — a file seek), **delete** (release all file space and erase the directory entry), and **truncate** (erase the contents but keep the attributes, resetting the length to zero).",
        detail: "Reading and writing usually share one per-process current-file-position pointer, saving space and complexity. Everything else composes from these primitives — copying a file is create plus a read-write loop, and renaming is a directory edit."
      },
      {
        term: "open(), close() and the open-file table",
        kind: "method",
        statement: "Rather than resolving a file name, searching the directory and re-checking permissions on every operation, all operations except create and delete require an **open()** first. open() resolves the name once, verifies the requested mode (read-only, read–write, append-only) against the file’s permissions, copies the entry into an **open-file table**, and returns a handle — an index into that table — used by every subsequent call. **close()** removes the entry and releases any locks.",
        detail: "Four things are associated with each open file: the **file pointer** (current position, unique to each process), the **file-open count** (the entry can be reclaimed only when the last close brings it to zero), the **location of the file** (kept in memory so the directory need not be consulted per operation), and the **access rights** of the mode the process opened in. Systems use two levels of tables — a per-process table and a system-wide table — which Chapter 14 traces in detail."
      },
      {
        term: "Overwrite, append and the seek",
        kind: "insight",
        statement: "Writing need not be append-only: a **seek** (reposition) moves the current-file-position pointer anywhere in the file before the next write, so the same write() primitive can overwrite the middle of a file, append at the end, or fill a hole. An append-only open mode simply pins every write to the end of the file.",
        detail: "Because a seek only updates a pointer in memory, it involves no actual I/O — it is free. The single shared offset is also why two processes reading the same open file without coordination interleave unpredictably; file locking adds the missing coordination."
      },
      {
        term: "File types: extensions, magic numbers, type and creator",
        kind: "insight",
        statement: "Operating systems recognize file types in three ways. **Name extensions** (exe, com, bat, sh, c, java, docx, zip, mp3…) split the name at a period; in UNIX they are hints for users and applications — neither enforced nor depended on by the OS. **Magic numbers** — distinctive values stored at the beginning of some files (the format of an image, the shell language of a script) — identify content from the header alone. **macOS** stores a type (.app for application) plus a **creator** attribute naming the program that created the file, set by the OS during create() and enforced: double-clicking a file launches its creator with the file loaded.",
        detail: "Type support is a trade-off: an OS that defines five file structures must carry the code for all five, and a user who needs a structure it does not know — an encrypted file is neither ASCII text nor an executable — is stranded. UNIX and Windows choose the minimal approach: every file is a sequence of 8-bit bytes, interpreted by each application itself — maximum flexibility, minimum support."
      },
      {
        term: "Internal file structure and internal fragmentation",
        kind: "definition",
        statement: "All disk I/O is performed in units of fixed-size **physical blocks** (one or more sectors, typically 512 or 4,096 bytes), while a file is a sequence of **logical records** — bytes, lines, or more complex structured items — that rarely match the block size. The OS or the application **packs** logical records into physical blocks; UNIX defines all files as unstructured byte streams (logical record size 1) and packs bytes into blocks automatically. The slack in each file’s last block is **internal fragmentation**, and every file system suffers it.",
        detail: "Book example: with 512-byte blocks a 1,949-byte file occupies $\\lceil 1949/512 \\rceil = 4$ blocks — $4 \\times 512 = 2048$ bytes of device space — wasting $2048 - 1949 = 99$ bytes. The larger the block (or cluster) size, the greater the internal fragmentation."
      }
    ],
    examples: [
      {
        title: "Packing a file into blocks",
        problem: "A text file holds 1,949 bytes and the device transfers data in 512-byte blocks. How many blocks are allocated, how much space is wasted, and what share of the file’s storage is slack?",
        steps: [
          { label: "Step 1: Count the blocks", text: "Three full blocks hold $3 \\times 512 = 1536$ bytes; the remaining $1949 - 1536 = 413$ bytes require a fourth. Total: $\\lceil 1949/512 \\rceil = 4$ blocks." },
          { label: "Step 2: Space allocated", text: "$4 \\times 512 = 2048$ bytes of device space now back the file." },
          { label: "Step 3: The waste", text: "$2048 - 1949 = 99$ bytes are internal fragmentation — the fourth block is only $413/512 \\approx 81\\%$ full." },
          { label: "Step 4: The general rule", text: "The slack grows with the block size: a 100-byte file wastes 412 bytes inside a 512-byte block but 3,996 bytes inside a 4,096-byte block. Trade block size against this tax — Chapter 14 returns to it as the cluster-size dilemma." }
        ],
        result: "Four blocks, 2,048 bytes allocated, 99 bytes (about 4.8 percent) of internal fragmentation — unavoidable in any block-oriented file system, and the reason administrators do not simply crank the block size to maximum."
      },
      {
        title: "Why open() exists",
        problem: "A process will read the same file 500 times. Contrast what happens on every read with and without an open-file table.",
        steps: [
          { label: "Step 1: Without open()", text: "All 500 reads repeat the full ritual: parse the path name, walk each directory, find the entry, re-check access permissions, and only then locate the data. The directory search dominates every operation." },
          { label: "Step 2: With open()", text: "The ritual happens once: open() resolves the name, checks the requested mode against the file’s permissions, and installs an entry in the open-file table holding the file’s location and access rights." },
          { label: "Step 3: Every read after that", text: "Each of the 500 reads carries only a small integer handle that indexes the table directly — no searching, no repeated permission checks, no directory I/O." },
          { label: "Step 4: close()", text: "The final close() decrements the open count and, at zero, removes the entry and releases any locks — reclaiming the table slot for the next file." }
        ],
        result: "open() amortizes name resolution and permission checking over all of a file’s operations — the same caching-of-context idea behind every handle, descriptor and session abstraction in systems design."
      }
    ],
    keyTakeaways: [
      "A file is a named collection of related information on secondary storage — the smallest unit of logical storage a user can write to.",
      "Attributes: name, identifier, type, location, size, protection, timestamps and user IDs; the directory stores the name plus the identifier that locates the rest.",
      "The seven basic operations — create, write, read, reposition (seek), delete, truncate — compose into every higher-level file operation.",
      "open() moves name resolution and permission checking out of the per-operation path; later calls use a handle into the open-file table, and close() reclaims the slot when the open count hits zero.",
      "File typing is weakest as a name extension (a hint), stronger as a header magic number, strongest as an OS-enforced type and creator pair (macOS).",
      "Logical records are packed into fixed-size physical blocks; the slack in the last block — internal fragmentation — is unavoidable and grows with block size: a 1,949-byte file occupies $4 \\times 512 = 2048$ bytes."
    ],
    quiz: [
      {
        q: "Which file attribute is the only one kept in human-readable form?",
        options: ["The name", "The identifier", "The location", "The size"],
        answer: 0,
        explanation: "The name is the human-readable symbol; the identifier (an inode number in UNIX) is the non-human-readable tag, and location, size and protection are all binary metadata."
      },
      {
        q: "Most systems require open() before read() because:",
        options: [
          "it locks the file against other users",
          "it loads the entire file into memory",
          "it avoids resolving the file name and checking permissions on every operation",
          "it defragments the file’s blocks"
        ],
        answer: 2,
        explanation: "open() resolves the name and verifies permissions once, installing an entry in the open-file table; every later operation uses the returned handle to index that table instead of repeating the directory search."
      },
      {
        q: "Which operation erases a file’s contents but keeps its attributes and directory entry?",
        options: ["delete", "truncate", "reposition", "create"],
        answer: 1,
        explanation: "Truncate resets the file to length zero and releases its space while leaving the attributes — and the directory entry — intact; delete removes the entry as well."
      },
      {
        q: "How does UNIX identify the type of a binary file such as an image?",
        options: [
          "By a magic number stored at the beginning of the file",
          "By the file name extension, which the kernel enforces",
          "By a creator attribute set at create time",
          "By scanning the whole file for patterns"
        ],
        answer: 0,
        explanation: "UNIX stores magic numbers at the start of some binary and text files to indicate content format; extensions exist only as hints for users and applications, neither enforced nor depended on by the operating system."
      },
      {
        q: "With 512-byte blocks, how much device space does a 1,949-byte file occupy, and how much is wasted?",
        options: [
          "1,949 bytes occupied, none wasted",
          "2,560 bytes occupied, 611 bytes wasted",
          "2,048 bytes occupied, 413 bytes wasted",
          "2,048 bytes occupied, 99 bytes wasted"
        ],
        answer: 3,
        explanation: "The file needs four blocks — three full ones plus 413 bytes in a fourth: 4 × 512 = 2,048 bytes allocated, of which 2,048 − 1,949 = 99 bytes are internal fragmentation."
      }
    ]
  },

  // ------------------------------------------------------------- 13.2
  {
    sectionId: "osc-ch13-s2",
    readingTime: 7,
    intro: "Once a file exists, how do programs get at its contents? The three classic answers — sequential, direct (relative) and indexed access — span the gap between the tape-era model of read next and the random reads that databases demand. This section defines each method, derives the arithmetic that turns a record number into a block number, and shows how a small index turns a large random-access file into a couple of direct reads.",
    objectives: [
      "Distinguish sequential, direct and indexed access, and name the device model behind the first two",
      "Compute the block and offset of a fixed-length record using the floor and modulo formulas",
      "Explain how an index over a direct-access file accelerates point lookups, and how ISAM generalizes it",
      "Judge which access method fits a workload: batch reads versus random point queries"
    ],
    concepts: [
      {
        term: "Sequential access",
        kind: "definition",
        statement: "**Sequential access** processes a file’s information in order, one record after another: **read next** reads the next portion and automatically advances the file pointer, and **write next** appends to the end and advances to the new end of file. The file can be reset (rewound) to the beginning, and some systems allow skipping forward or backward n records — perhaps only $n = 1$.",
        detail: "It is based on a **tape model** of a file and works as well on random-access devices as on sequential ones. It is by far the most common access pattern — editors and compilers read files this way — and it suits batch processing that touches every record exactly once."
      },
      {
        term: "Direct (relative) access",
        kind: "definition",
        statement: "**Direct or relative access** views a file as a numbered sequence of fixed-length logical records on a **disk model**: read block 14, then block 53, then write block 7 — any order is allowed. Operations become read(n) and write(n), or equivalently position file(n) followed by read next.",
        detail: "Essential when large amounts of information must be reached immediately — databases are often of this type. An airline-reservation system might store everything about flight 713 in block 713 of the reservation file. The block number supplied is a **relative block number** — an index relative to the beginning of the file (first block 0 or 1, depending on the system) — so the OS is free to place the file anywhere (the allocation problem) and the user cannot reach blocks outside it, even though the absolute disk address of the first block might be 14,703."
      },
      {
        term: "Record-to-block arithmetic",
        kind: "method",
        statement: "For a file of fixed-length logical records, a request for record $r$ (0-based) becomes an I/O request for $L \\cdot r$ bytes into the file, where $L$ is the record length in bytes. With $B$ records packed per block, record $r$ lives in block $k = \\lfloor r / B \\rfloor$ at offset $r \\bmod B$ within that block.",
        detail: "Fixed-length records are what make direct access cheap: the address of record $r$ is computed, never searched for. Variable-length records would force a scan from the start of the file to find where record $r$ begins — sequential access by necessity."
      },
      {
        term: "Indexed access",
        kind: "method",
        statement: "Built on top of direct access: maintain an **index** for the file which, like the index in the back of a book, contains **pointers to the various blocks**. A lookup first searches the index, then uses the pointer to read the one data block that can hold the answer.",
        detail: "Book example: a retail-price file of 16-byte records (a 10-digit UPC plus a 6-digit price) holds 64 records per 1,024-byte block. Keeping the file sorted by UPC and indexing the first UPC in each block yields about 1,875 entries of 10 digits — roughly 20,000 bytes — small enough to live in memory, so a price lookup costs a binary search of the index plus one block read."
      },
      {
        term: "Multilevel indexes and ISAM",
        kind: "method",
        statement: "When the index itself grows too large for memory, **index the index**: a small master index points to disk blocks of a secondary index, which point to the actual data blocks. IBM’s **indexed sequential-access method (ISAM)** works exactly this way — binary-search the master index, read one secondary index block, binary search it, read the data block — locating any record by key in at most two direct-access reads.",
        detail: "The file is kept sorted on a key, with overflow chains absorbing inserts that no longer fit in place. OpenVMS index and relative files build on the same idea, and relational databases inherit it wholesale: a table is a direct-access file of fixed-length records, and the DBMS builds and maintains its own B-tree indexes on top rather than trusting the file system to do it."
      },
      {
        term: "Simulating one method on the other",
        kind: "method",
        statement: "Sequential access simulates trivially on a direct-access file: keep a variable cp as the current position — read next becomes read cp followed by $cp := cp + 1$, and reset is $cp := 0$. The converse — direct access on a purely sequential-access medium — is extremely inefficient and clumsy.",
        detail: "This asymmetry is why direct-access capability is the valuable primitive: it subsumes sequential access, but not the other way around. Systems that support only one method per file (declared at creation) exploit exactly this."
      },
      {
        term: "Choosing an access method",
        kind: "insight",
        statement: "**Read-everything workloads** favor sequential access: the tape model matches, every block is visited once in order, and buffering is trivial (batch jobs, backups, media streaming). **Point queries** — find one record among millions by key — need direct or indexed access; a sequential scan would read the whole file for one answer.",
        detail: "Databases sit on direct access plus their own index trees; compilers and log analyzers sit on sequential streams. Mainframe operating systems historically offered many access methods precisely because choosing one was a major application design decision."
      }
    ],
    examples: [
      {
        title: "Locating a record in a direct-access file",
        problem: "A direct-access file stores fixed 16-byte records, 64 records per 1,024-byte block. Record 5,000 is requested. Which block is read, at what offset, and where does the record sit in the file’s byte stream?",
        steps: [
          { label: "Step 1: Records per block", text: "With record length $L = 16$ bytes and 1,024-byte blocks, $B = 1024/16 = 64$ records are packed per block." },
          { label: "Step 2: The block", text: "$k = \\lfloor 5000/64 \\rfloor = \\lfloor 78.125 \\rfloor = 78$ — the file’s 79th block (block 78, counting from zero) holds the record." },
          { label: "Step 3: The offset", text: "$5000 \\bmod 64 = 8$ — it is the 9th record inside that block, beginning at byte $8 \\times 16 = 128$ within the block." },
          { label: "Step 4: The file byte offset", text: "Equivalently the request is an I/O for $L \\cdot r = 16 \\times 5000 = 80{,}000$ bytes into the file: the OS can translate it either way in constant time." }
        ],
        result: "Record 5,000 → block $\\lfloor 5000/64 \\rfloor = 78$, offset $5000 \\bmod 64 = 8$ (byte 128 within the block, file byte 80,000). Fixed record length turns lookup into address arithmetic — O(1), no searching."
      },
      {
        title: "Indexing a 120,000-record price file",
        problem: "A sorted retail-price file has 120,000 records of 16 bytes each (10-digit UPC, 6-digit price) on 1,024-byte blocks. A lookup for one UPC arrives. Design the index and count the I/O.",
        steps: [
          { label: "Step 1: Size the file", text: "Records per block: $B = 1024/16 = 64$. Total blocks: $\\lceil 120{,}000 / 64 \\rceil = 1875$ — about 2,000 blocks and roughly two million bytes." },
          { label: "Step 2: Build the index", text: "Keep the file sorted by UPC and record the first UPC of every block: 1,875 entries of 10 digits, about $1875 \\times 10 = 18{,}750$ bytes — comfortably resident in memory." },
          { label: "Step 3: Search the index", text: "Binary-search the in-memory index for the greatest first-UPC not exceeding the query — about $\\log_2 1875 \\approx 11$ comparisons — identifying the one block that can contain the item." },
          { label: "Step 4: One direct read", text: "Read that block directly and scan its 64 records for the exact UPC." }
        ],
        result: "One direct block read answers a point query over 1.92 MB of data. The index converts a full-file scan into index arithmetic plus one I/O — precisely why databases build their own indexes atop direct access."
      }
    ],
    keyTakeaways: [
      "Sequential access (read next / write next, rewind) is the tape model — the most common pattern and the right one for batch workloads.",
      "Direct access treats the file as numbered fixed-length records; record $r$ sits in block $\\lfloor r / B \\rfloor$ at offset $r \\bmod B$ — computed, never searched.",
      "Relative block numbers free the OS to place the file anywhere and confine user reads to the file itself.",
      "Indexed access adds a pointer structure over direct access: binary-search a small in-memory index, then read one block; ISAM’s multilevel scheme does it in at most two direct reads.",
      "Sequential access simulates trivially on a direct-access file (a cp counter); the converse is hopeless — direct access is the stronger primitive."
    ],
    quiz: [
      {
        q: "Sequential access is said to be based on which device model?",
        options: ["A disk model", "A tape model", "A drum model", "A network model"],
        answer: 1,
        explanation: "Sequential access was designed for the tape: information flows in order, one record after another, with rewind to restart. It still works perfectly on random-access devices, which are strictly more capable."
      },
      {
        q: "A direct-access file packs 100 fixed-length records per block. Record 4,517 lives in block:",
        options: ["Block 45, offset 17", "Block 46, offset 17", "Block 451, offset 7", "Block 45, offset 7"],
        answer: 0,
        explanation: "k = floor(4517/100) = 45, and the offset within that block is 4517 mod 100 = 17. The floor-and-modulo pair turns a record number into a block and offset in constant time."
      },
      {
        q: "Which workload is the worst fit for pure sequential access?",
        options: [
          "A nightly backup of every file",
          "A compiler reading a source file start to finish",
          "A database looking up one customer by account number",
          "A log analyzer scanning every line"
        ],
        answer: 2,
        explanation: "A point query needs direct or indexed access: reading one record out of millions should cost one block read, not a full-file scan. Backups, compilers and log analysis naturally read everything in order."
      },
      {
        q: "When the index of a large file is itself too large for memory, the classic remedy is:",
        options: [
          "Store the index at the front of the file",
          "Fall back to sequential access",
          "Use longer records",
          "Build a multilevel index — an index of the index, as in ISAM"
        ],
        answer: 3,
        explanation: "A small master index points to secondary index blocks that point to the data, keeping only the top level resident — any record is still found in at most two direct reads."
      }
    ]
  },

  // ------------------------------------------------------------- 13.3
  {
    sectionId: "osc-ch13-s3",
    readingTime: 12,
    intro: "Directories are the symbol table of the file system: they translate the names humans use into the control blocks the machine uses. This section climbs the ladder of directory organizations — single-level, two-level, tree, acyclic graph, general graph — and shows how each fixes the naming problems of the previous rung while creating new ones. It ends with the two mechanisms that make modern name spaces what they are: links and mounting.",
    objectives: [
      "View a directory as a symbol table and list the operations it must support",
      "Explain the naming-collision and sharing problems that drive the evolution from single-level to graph directories",
      "Distinguish absolute and relative paths, the working directory, and the entries . and ..",
      "Contrast hard links and symbolic links, including dangling links and reference counts",
      "Walk a path name through the directory tree, and describe mounting and cycle management"
    ],
    concepts: [
      {
        term: "The directory and its operations",
        kind: "definition",
        statement: "A **directory** can be viewed as a symbol table that translates file names into their **file control blocks** (the inode, in UNIX). It must support inserting entries, deleting entries, searching for a named entry and listing all entries. The standard operation set: **search for a file** (including pattern matching over names), **create a file**, **delete a file** (a delete leaves a hole the file system may later defragment away), **list a directory**, **rename a file** (which may also move its position in the structure), and **traverse the file system** — visiting every directory and file, the basis of backups.",
        detail: "Because the directory must match the volatility of the files, it lives on the same device as they do and is itself brought into memory piecemeal, as needed."
      },
      {
        term: "Single-level directory",
        kind: "definition",
        statement: "All files live in one directory. It is easy to support and understand, but **every file name must be unique across the whole system** — a rule that collapses at scale: in one programming class the book recounts, 23 students called their second assignment prog2.c and another 11 called it assign2.c. Even a single user loses track of hundreds of files in one flat list.",
        detail: "Longer names help — most systems allow up to 255 characters, making unique names possible — but forcing global uniqueness is the wrong invariant once there is more than one user."
      },
      {
        term: "Two-level directory",
        kind: "definition",
        statement: "Each user gets a **user file directory (UFD)** listing only their files; a **master file directory (MFD)**, indexed by user name or account number, points to each UFD. Name collisions between users vanish — different users may own files with the same name as long as each UFD is internally unique. Naming a file uniquely now requires both parts: the path /userb/test.txt.",
        detail: "The cost is isolation: cooperating users cannot easily reach one another’s files, and system files (compilers, libraries) must be found another way — the standard trick is a **search path**, an ordered list of directories consulted when a name is not found locally, as UNIX and Windows both do. A two-level directory is a tree of height 2: the MFD is the root, UFDs its children, files the leaves."
      },
      {
        term: "Tree-structured directories",
        kind: "definition",
        statement: "The natural generalization: a **tree of arbitrary height** with a root directory, so every file has a unique path name. Each process has a **current (working) directory** containing most files of current interest. **Absolute paths** begin at the root (/spell/mail/prt/first); **relative paths** begin at the current directory (prt/first, from /spell/mail). A directory is just a file with a special format — one bit in each entry marks file (0) versus subdirectory (1).",
        detail: "The entries . (the directory itself) and .. (its parent) anchor relative movement upward. Renaming a file inside a tree is nothing more than moving directory pointers. Deleting a non-empty directory is a policy choice: refuse until it is empty, or recursively delete as UNIX rm does — convenient, and dangerous when the command was a mistake. Kernel caches of directory entries (**dentry caches**) make repeated path resolution cheap by remembering components already resolved."
      },
      {
        term: "Acyclic-graph directories and sharing",
        kind: "definition",
        statement: "A tree prohibits sharing: an **acyclic graph** — a graph with no cycles — allows the same file or subdirectory to exist in two (or more) places at once. Sharing is not the same as copying: with two copies, one programmer’s edits never appear in the other’s; with one shared file, changes are immediately visible through every path to it — crucial for teams, and for a file that legitimately belongs in two projects at once.",
        detail: "A shared subdirectory is even more valuable: a file added by one team member appears in the shared directory of every member. The price is multiple absolute path names for one file (the aliasing problem — traversals must not visit shared structures twice) and harder deletion: when may the file’s space be reclaimed?"
      },
      {
        term: "Hard links versus symbolic links",
        kind: "method",
        statement: "Two implementations of sharing. A **hard link** is a duplicate directory entry pointing at the same file control block: every link is an equal citizen, the inode keeps a **reference (link) count**, and the file’s space is released only when the last link is deleted. Hard links cannot span file systems (the identifier is meaningful only within one) and are not permitted to directories — which is exactly what keeps file cycles impossible. A **soft or symbolic link** is an indirect pointer: a small file containing the **path name** of the target, resolved at use. Symbolic links can span file systems (Windows shortcuts work this way) but they can **dangle**: deleting the target leaves the link pointing at nothing.",
        detail: "Deletion under symbolic links is gentler: removing a link never touches the target, and a dangling link simply fails to resolve, treated like any other illegal file name. Hard links demand the reference count; soft links demand tolerance of dangling references — the UNIX approach for files is hard links, with soft links as the flexible cross-filesystem escape hatch."
      },
      {
        term: "General graph directories",
        kind: "definition",
        statement: "If links create cycles — a directory reachable from itself — the structure becomes a **general graph**. Then a **reference count of zero no longer proves a file is unreachable**: a self-referencing directory never drains its count even when nothing outside can reach it. Reclaiming space then needs **garbage collection**: traverse everything reachable, **mark** it, then a second pass collects everything unmarked onto the free list.",
        detail: "Garbage collection of a disk-based file system is so time-consuming it is seldom attempted; the practical alternative is to **bypass links during directory traversal**, which preserves acyclic behavior at zero cost. A related marking procedure also guarantees a search visits every component exactly once."
      },
      {
        term: "Mounting",
        kind: "method",
        statement: "Just as a file must be opened before use, a file system must be **mounted** before its files are available. The operating system is given the name of the device and the **mount point** — the location in the existing file structure where the new file system attaches. Some systems also require a file-system type; others inspect the device’s structures — reading the superblock — to verify that it actually contains a **valid file system** before proceeding. The mount is recorded in the **mount table**, and the files of the newly attached volume appear under the mount point, **hiding whatever directory contents were there before** until it is unmounted.",
        detail: "Windows marks volumes with a drive letter plus colon (C:\\userb\\test), while UNIX and Linux fold the device into the name space — the mount table maps directory positions to devices, which is how the OS knows which device serves a given path."
      }
    ],
    examples: [
      {
        title: "Resolving /home/user/file.txt step by step",
        problem: "A UNIX-like system uses tree-structured directories with a dentry cache that is initially empty. Trace the resolution of the absolute path /home/user/file.txt and count the directory reads.",
        steps: [
          { label: "Step 1: Start at the root", text: "The resolver begins at the root directory — conventionally inode 2, always resident — reading its directory blocks from disk: read 1." },
          { label: "Step 2: Look up home", text: "The entry home yields home’s inode number; the resolver reads home’s directory blocks — read 2 — and checks the process may traverse it (the x permission on directories)." },
          { label: "Step 3: Look up user", text: "The entry user in /home gives user’s inode number; reading /home/user’s directory blocks is read 3." },
          { label: "Step 4: Look up file.txt", text: "The entry file.txt yields its inode (say inode 4711). The full resolution read three directories — root, home, user — and an open() would read inode 4711 itself next." },
          { label: "Step 5: Warm caches", text: "The kernel caches each component (the dentry cache), so a later open of /home/user/other.txt reuses root, home and user and reads only /home/user once — already-resolved prefixes cost nothing." }
        ],
        result: "Path resolution costs about one directory read per component on a cold cache — the deeper the tree, the more expensive absolute paths. The working directory and the dentry cache exist precisely to amortize this cost."
      },
      {
        title: "The life and death of a hard link",
        problem: "A user creates report.tex, makes a hard link notes.tex to it, then deletes report.tex. Repeat the experiment with a symbolic link instead, and compare.",
        steps: [
          { label: "Step 1: Create", text: "report.tex allocates an inode (say 4711) with its data blocks; the directory entry maps report.tex → 4711 and the inode’s link count is set to 1." },
          { label: "Step 2: Hard link", text: "ln report.tex notes.tex adds a second directory entry, notes.tex → 4711, and the link count becomes 2. Both names are now equal citizens — there is no original and no copy." },
          { label: "Step 3: Delete report.tex", text: "The directory entry is removed and the count drops to 1 — the inode and its blocks survive, fully reachable through notes.tex." },
          { label: "Step 4: Delete notes.tex too", text: "Only when the count reaches 0 does the file system actually free the inode and the data blocks." },
          { label: "Step 5: Symbolic contrast", text: "ln -s report.tex pointer.txt stores the string report.tex. Deleting report.tex leaves pointer.txt dangling — resolving it fails like any missing name — and the target’s link count never knew the link existed. The symbolic link could equally have pointed into another mounted file system; the hard link could not." }
        ],
        result: "Hard links: multiple directory entries, one inode, reference-counted lifetime, filesystem-local. Symbolic links: path-name indirection, count-free, cross-filesystem — and prone to dangling."
      },
      {
        title: "Scaling a single-level directory",
        problem: "A shared lab computer keeps every user’s files in one flat directory. What breaks as enrollment grows to 50 students, and what does the two-level structure fix?",
        steps: [
          { label: "Step 1: The collision", text: "23 students submit prog2.c and 11 submit assign2.c; the second arrival of each name either overwrites the first or is rejected — the unique-name rule fails at trivial scale." },
          { label: "Step 2: The workaround", text: "Users start encoding identity into names — prog2-maria.c, prog2-chen.c — a manual, error-prone, single-level directory rebuilt by hand." },
          { label: "Step 3: Two levels", text: "Give each student a UFD: prog2.c can now exist 50 times, once per UFD, with the MFD mapping student → UFD. Deleting a file searches only the local UFD, so no student can accidentally delete another’s same-named file." },
          { label: "Step 4: The new problems", text: "Isolation bites: sharing course materials needs explicit paths like /instructor/handout.pdf, and system binaries need a search path — motivating the tree, the acyclic graph and everything above." }
        ],
        result: "Each rung of the ladder fixes the previous rung’s naming crisis and creates the next one: single-level collides, two-level isolates, trees demand path resolution, graphs demand cycle management."
      }
    ],
    keyTakeaways: [
      "A directory is a symbol table from names to control blocks; it must support search, create, delete, list, rename and traverse.",
      "Single-level directories force globally unique names; two-level (per-user UFDs under an MFD) removes collisions but isolates users; trees add structure, subdirectories and paths.",
      "Relative paths start at the current directory, absolute paths at the root; . and .. anchor upward movement, and dentry caches make repeated resolution cheap.",
      "Acyclic graphs add sharing: one file, many paths — edits are visible everywhere at once, unlike copies.",
      "Hard links duplicate directory entries onto one inode with a reference count — filesystem-local and cycle-free for files; symbolic links store a path, span file systems, and can dangle.",
      "Cycles break reference counting: only garbage collection (mark and sweep) can prove unreachability, and on disk that is too slow — so systems bypass links during traversal instead.",
      "Mounting verifies the device’s structures (the superblock), records the pair in the mount table, and attaches the volume at the mount point — hiding whatever lived beneath it."
    ],
    quiz: [
      {
        q: "In one class, 23 students named their assignment prog2.c. Which directory structure makes this harmless?",
        options: [
          "A single-level directory",
          "A two-level directory with a per-user UFD for each student",
          "A longer maximum file name",
          "A larger block size"
        ],
        answer: 1,
        explanation: "With a separate UFD per user, the same name can exist once in each directory; the MFD maps user to UFD, and prog2.c can legitimately exist 50 times."
      },
      {
        q: "Which statement about hard links is true?",
        options: [
          "A hard link stores the target’s path name",
          "A hard link can dangle if the target is deleted",
          "A hard link is a second directory entry pointing at the same inode and cannot cross file systems",
          "A hard link increments the target file’s byte count"
        ],
        answer: 2,
        explanation: "A hard link duplicates the directory entry onto the same inode, raising its reference count; inode numbers are per-file-system, so hard links cannot span them. Dangling references and path-name storage belong to symbolic links."
      },
      {
        q: "A symbolic link can dangle because:",
        options: [
          "it keeps the inode number of the target",
          "its reference count reached zero",
          "the mount point was hidden",
          "it stores only a path name that may stop resolving"
        ],
        answer: 3,
        explanation: "A symbolic link is just a stored path. If the target is deleted — or replaced — the link still holds the string, and resolution fails at use time like any other illegal file name."
      },
      {
        q: "Why do general graph directories need garbage collection while acyclic graphs do not?",
        options: [
          "Graphs hold more files than trees",
          "In a cyclic graph, a nonzero reference count does not prove the file is reachable",
          "Garbage collection is faster than reference counting",
          "Acyclic graphs never delete files"
        ],
        answer: 1,
        explanation: "A cycle can keep every member’s reference count above zero even after nothing outside the cycle points in. Only mark-and-sweep traversal can prove unreachability — which is why systems prefer to bypass links and stay effectively acyclic."
      },
      {
        q: "Mounting a file system at /mnt:",
        options: [
          "copies the file system into /mnt",
          "verifies the device contains a valid file system and attaches it there, hiding what was beneath",
          "requires /mnt to remain empty forever",
          "renames the root directory"
        ],
        answer: 1,
        explanation: "The OS is given device and mount point, inspects the volume’s structures (the superblock) to confirm a valid file system, records the mount in the mount table, and covers whatever lived at that point until unmount."
      }
    ]
  },

  // ------------------------------------------------------------- 13.4
  {
    sectionId: "osc-ch13-s4",
    readingTime: 10,
    intro: "Protection answers two different questions: keeping data safe from physical damage — reliability, solved with duplicate copies and backups — and keeping it safe from improper access — protection, solved with access control. This section covers the UNIX owner/group/other permission bits and their octal arithmetic, access-control lists and their Windows incarnation, the memory-mapped file as the fourth way to do file I/O, and file locking for processes that share.",
    objectives: [
      "List the types of file access that protection mechanisms control",
      "Encode and decode the nine UNIX permission bits, including octal mode math and umask",
      "Explain ACLs, their evaluation order, and how they extend owner/group/other",
      "Describe memory mapping and contrast MAP_SHARED, MAP_PRIVATE and read()/write()",
      "Distinguish shared and exclusive file locks, and mandatory from advisory locking"
    ],
    concepts: [
      {
        term: "Protection versus reliability",
        kind: "definition",
        statement: "Keeping information safe means two different things: **reliability** — guarding against physical damage from hardware errors, power failures, head crashes, dirt, temperature, vandalism, bugs and accidental deletion — generally provided by duplicate copies and regular backups; and **protection** — guarding against improper **access**, solved with controlled access rather than prohibition (too restrictive) or free access (too dangerous).",
        detail: "The types of access that may be controlled: **read**, **write**, **execute**, **append**, **delete**, **list** (the name and attributes) and **attribute change**. Higher-level operations reduce to these: a user with read access can copy and print a file, because copying is just repeated reads."
      },
      {
        term: "Owner, group, other and the nine permission bits",
        kind: "method",
        statement: "The condensed UNIX scheme classifies users as **owner** (the file’s creator), **group** (a set of users sharing the file, needing similar access) and **other** (everyone else), granting each class the bits **r** (read), **w** (write) and **x** (execute) — nine bits per file. Directory protection uses the same fields with a twist: x on a directory means permission to traverse and search it, r means list its contents.",
        detail: "A listing like drwxr-xr-x decodes as directory, owner rwx, group r-x, other r-x. Nine bits are compact — fixed-size directory entries — but coarse: they cannot express “Jim and Dawn, but not the whole group, may write.”"
      },
      {
        term: "Octal mode arithmetic and umask",
        kind: "notation",
        statement: "Each class’s rwx triple encodes as one octal digit $d = 4r + 2w + 1x$ (each letter 0 or 1), so a whole mode is three digits: rwxr-xr-x is $755$ and rw-rw-r-- is $664$. New files start from the defaults 0666 (files) and 0777 (directories), with the **umask**’s bits removed: with umask 022 a new file receives $0666 \\mathbin{\\&} \\mathord{\\sim} 022 = 0644$ — rw-r--r--.",
        detail: "The umask is a per-process mask of bits to refuse, not a grant: no file gains rights from a umask, it can only lose the defaults it would otherwise have had."
      },
      {
        term: "Access-control lists",
        kind: "method",
        statement: "The most general identity-dependent scheme associates with each file and directory an **access-control list (ACL)** naming users and the access allowed each. Fully expanded ACLs are unwieldy — enumerating every user with read permission is tedious, and the entry becomes variable-length — so systems **combine** the condensed owner/group/other scheme with ACLs for exceptions: Solaris appends a **+** to the mode when an ACL is present, managed with setfacl and getfacl. Windows NTFS is built entirely on ACLs: a list of **ACEs** (access-control entries) attached to files and **inherited** by the children of a directory, evaluated in order with an explicit deny overriding later allows.",
        detail: "When modes and ACLs conflict, the more specific mechanism wins — Solaris gives ACL entries precedence, following the general rule that specificity has priority. In the book’s example, Sara grants her helper group read–write on book.tex and everyone else read; a visitor needing chapter-one-only access gets a single ACL entry on chapter 1, because a file can belong to only one group."
      },
      {
        term: "Passwords on files and capability lists",
        kind: "insight",
        statement: "Two other approaches exist. **Per-file passwords** are rare: the number of passwords grows with the number of files, and one password shared by all files makes protection all-or-none (per-directory passwords are the usual compromise; encrypted volumes are the modern answer). The mirror image of the ACL is the **capability list** — per-user, it names the files that user may access: locating a user’s rights is fast, but answering “who may touch this file?” requires searching every list, and revoking a right is awkward.",
        detail: "The ACL and the capability list are duals: one indexes protection by file, the other by user. Systems choose based on which query dominates — file systems check “may this process touch this file?” on every operation, which favors ACLs."
      },
      {
        term: "Memory-mapped files",
        kind: "method",
        statement: "**Memory mapping** a file logically associates a region of the virtual address space with the file: a disk block is mapped to a page (or pages) of memory. The first access proceeds through ordinary **demand paging** — a page fault pulls a page-sized portion of the file into a physical page (some systems read more than a page at a time) — after which reads and writes to the file are ordinary memory accesses, with no system call per access. When the file is closed, the mapped data is written back to the file on secondary storage and the mapping is removed from the process’s virtual memory.",
        detail: "Solaris maps every file it touches — including files opened with plain open()/read()/write(), which are mapped into kernel address space — so all file I/O in Solaris is memory access through the efficient memory subsystem. Multiple processes may map the same file concurrently: their page tables point at the same physical pages, so writes by any of them are visible to all — which is exactly how shared memory between processes is implemented."
      },
      {
        term: "MAP_SHARED versus MAP_PRIVATE",
        kind: "method",
        statement: "With **MAP_SHARED**, writes modify the shared memory image — visible to every other process mapping the same region, and eventually propagated to the file itself. With **MAP_PRIVATE**, the mapping starts shared read-only and uses **copy-on-write**: a writing process receives its own private copy of the affected pages, insulating its changes from other mappers and from the file.",
        detail: "Shared mappings still need the Chapter 6 synchronization tools to coordinate concurrent writers — mapping makes communication fast, not safe. Memory pressure forces the system to spill modified shared pages to swap space so they are not lost when frames are reclaimed before close."
      },
      {
        term: "Memory mapping versus read() and write()",
        kind: "insight",
        statement: "The read()/write() path costs a system call **plus a copy** of every byte between the kernel’s cache and the user’s buffer (in both directions); mmap removes the copy — the file’s cached pages are mapped directly into the address space, so after the first page fault, reading is a load instruction. But syscalls still handle sparse, tiny or unaligned access patterns more gracefully, and some workloads — notably database engines — prefer to bypass the page cache entirely with direct I/O (O_DIRECT) so they can control their own buffering.",
        detail: "Windows exposes the same trade-off through its mapping API rather than raw mmap flags, but the mechanism is identical underneath: a page-table association instead of a copy path."
      },
      {
        term: "The Windows mapping API and file locking",
        kind: "method",
        statement: "Windows shared memory is built from mapped files. A producer calls **CreateFile** (opens the file, returning a handle), **CreateFileMapping** (creates a mapping object, optionally named — say SharedObject), and **MapViewOfFile** (maps a view — the entire file or a slice — into its address space), finishing with **UnmapViewOfFile**. A consumer reaches the same shared object with **OpenFileMapping** plus its own MapViewOfFile, and reads what the producer wrote. Relatedly, **file locks** coordinate processes sharing an open file: a **shared lock**, akin to a reader lock, can be held by many processes; an **exclusive lock**, like a writer lock, by only one.",
        detail: "Locking comes in two flavors: **mandatory** — once a process holds an exclusive lock, the OS blocks every other process from opening the locked file (Windows) — and **advisory** — the OS enforces nothing, so every accessing program must voluntarily acquire the lock (UNIX). Advisory locking only works if all participants cooperate, and both flavors inherit the deadlock hazards of ordinary locks."
      }
    ],
    examples: [
      {
        title: "Encoding Sara’s protection policy",
        problem: "Sara owns book.tex. Policy: Sara may do everything; her helpers Jim, Dawn and Jill (group text) may read and write but not delete; everyone else may read. Give the UNIX mode with its octal arithmetic, then handle a visitor who needs access to chapter 1 only.",
        steps: [
          { label: "Step 1: The classes", text: "Owner = Sara; group = text (Jim, Dawn, Jill); other = everyone else in the system." },
          { label: "Step 2: The bits", text: "Owner rwx: $4 + 2 + 1 = 7$. Group rw-: $4 + 2 + 0 = 6$. Other r--: $4 + 0 + 0 = 4$. The mode is $764$ — rwxrw-r--." },
          { label: "Step 3: Why the helpers cannot delete", text: "Deletion is controlled by the **containing directory’s** write permission, not the file’s: the group’s rw- on the file grants content edits, but without w on /sara the helpers cannot remove the directory entry. The file bits and the directory bits divide the policy between them." },
          { label: "Step 4: The umask angle", text: "Had the file been created with the default mode and umask 022, it would have started at $0666 \\mathbin{\\&} \\mathord{\\sim} 022 = 0644$ — group read-only — so Sara must set the mode to 764 explicitly (or work under a different umask)." },
          { label: "Step 5: The visitor", text: "A file can be in only one group, so adding the visitor to text would expose every chapter. The fix is an ACL: one entry on chapter 1 granting him read — signaled by the + in a Solaris listing, managed with setfacl, and taking precedence over the group bits because it is more specific." }
        ],
        result: "Nine bits express the core policy as mode $764$; the one-visitor exception needs an ACL — exactly why modern systems bolt ACLs onto the condensed scheme, and why specificity wins when they disagree."
      },
      {
        title: "Two processes through one mapped file",
        problem: "Processes A and B both memory-map the same 4 KB file region. A writes a message through the mapping; B reads it. Contrast MAP_SHARED with MAP_PRIVATE and with read()/write().",
        steps: [
          { label: "Step 1: Map", text: "Each process calls mmap, associating the file’s blocks with pages of its address space. No data moves yet — the mapping is page-table bookkeeping." },
          { label: "Step 2: First touch", text: "B’s read faults; the fault handler pulls the file page into a physical page — the page cache — and maps it into B. That is the only I/O so far." },
          { label: "Step 3: A writes under MAP_SHARED", text: "A store instruction modifies the shared physical page. B reads the same offset and sees A’s bytes immediately — both page tables point at one page — and the dirty page is written back to the file at close (or under memory pressure)." },
          { label: "Step 4: MAP_PRIVATE instead", text: "A’s first write triggers copy-on-write: A receives a private page, and neither B nor the file ever sees the change." },
          { label: "Step 5: read()/write() instead", text: "Every access costs a system call and a copy between the kernel’s cache and the user’s buffer — the mapped version replaces both with one page fault up front and plain loads and stores afterwards." }
        ],
        result: "MAP_SHARED makes the region act as shared memory (that is literally how shared memory is implemented); MAP_PRIVATE isolates via copy-on-write; read()/write() pays syscall-and-copy per access but handles arbitrary offsets and partial pages without page-table tricks."
      }
    ],
    keyTakeaways: [
      "Reliability (physical safety — backups, duplicate copies) and protection (improper access — permissions, ACLs) are separate problems requiring separate mechanisms.",
      "UNIX modes: three classes × three bits, octal digit $d = 4r + 2w + 1x$ per class; rw-rw-r-- is 664; new files get the defaults minus the umask — $0666$ with umask 022 yields 0644.",
      "ACLs add per-user exceptions to the coarse classes; Windows NTFS is ACE lists with inheritance; when modes and ACLs disagree, the more specific — the ACL — wins.",
      "Memory mapping turns file access into memory access: one page fault on first touch, then loads and stores; MAP_SHARED shares pages (writes reach other mappers and eventually the file), MAP_PRIVATE copy-on-writes.",
      "mmap removes the user–kernel copy of read()/write(), but syscalls still suit sparse or small accesses — and database engines often bypass the page cache entirely.",
      "File locks: shared versus exclusive, mandatory on Windows versus advisory on UNIX — advisory locking only protects files whose readers and writers all cooperate."
    ],
    quiz: [
      {
        q: "The octal mode 644 corresponds to which permission string?",
        options: ["rw-rw-rw-", "rwxr--r--", "rw-r--r--", "r--r--r--"],
        answer: 2,
        explanation: "Each digit is 4r + 2w + 1x: 6 = 4 + 2 (rw-), 4 = read only (r--). So owner rw-, group r--, other r--: rw-r--r--."
      },
      {
        q: "With umask 022, what permissions does a newly created file receive by default (files start from 0666)?",
        options: ["rw-r--r-- (0644)", "rw-rw-rw- (0666)", "rwxr-xr-x (0755)", "rw-rw-r-- (0664)"],
        answer: 0,
        explanation: "The umask removes bits from the default: 0666 with the 022 mask cleared leaves 0644 — the owner keeps read-write, group and other are read-only."
      },
      {
        q: "Under MAP_PRIVATE, when a process writes to a mapped page:",
        options: [
          "the write reaches the file and every other mapper immediately",
          "the process receives its own copy-on-write page; other mappers and the file see nothing",
          "the write is silently discarded",
          "the page is flushed synchronously to disk"
        ],
        answer: 1,
        explanation: "MAP_PRIVATE defers the copy until a write: the faulting process gets a private page, so its changes are invisible to other mappings and never reach the file. MAP_SHARED is the mode that publishes writes."
      },
      {
        q: "Windows file locking is mandatory while UNIX locking is advisory. This means:",
        options: [
          "UNIX locks are weaker and cannot be held exclusively",
          "on Windows the OS blocks access by processes that do not hold the lock; on UNIX programs must voluntarily honor the lock",
          "Windows locks cannot be shared",
          "UNIX locks are always exclusive"
        ],
        answer: 1,
        explanation: "Mandatory locking has the OS enforce integrity — a text editor is prevented from opening the locked file; advisory locking leaves enforcement to the software, which must acquire the lock before touching the file."
      },
      {
        q: "Walter is in a file’s group, which has read permission; an ACL entry grants Walter read and write. On Solaris the write is:",
        options: [
          "denied, because group permissions are checked first",
          "denied, because ACLs are read-only hints",
          "allowed, because the more specific ACL entry takes precedence",
          "decided by the file owner at open time"
        ],
        answer: 2,
        explanation: "ACLs are the finer-grained, non-default mechanism, and Solaris gives them precedence — following the general rule that specificity has priority over the coarse owner/group/other classes."
      }
    ,
      // PYQ-pattern — octal permission bits (rephrased)
      {
        q: "Owner gets `rwx`, group gets `r-x`, others get `r--`. What is the octal mode, and what does each digit mean?",
        options: ["$777$, all rights everywhere", "$644$, owner $6$ only", "$754$, owner $7$, group $5$, others $4$", "$421$, reversed order"],
        answer: 2,
        explanation: "**Step 1 — Given data:** three triples `rwx`, `r-x`, `r--`.\n**Step 2 — Rule:** `r = 4`, `w = 2`, `x = 1`; each triple sums to one octal digit in owner-group-other order.\n**Step 3 — Computation:** owner $4+2+1 = 7$; group $4+0+1 = 5$; others $4+0+0 = 4$; mode $754$.\n**Step 4 — Cross-check:** $754$ in binary $111\\,101\\,100$ reproduces the three triples exactly.\n**Step 5 — Distractors:** $777$ is `rwxrwxrwx`; $644$ is `rw-r--r--`; $421$ permutes the digits.\n**Step 6 — Conclude:** $754$."
      },
      // PYQ-pattern — default mode under umask (rephrased)
      {
        q: "Default file mode is $666$ and umask is $022$. What mode does a new file receive, and why?",
        options: ["$644$, bits in umask are cleared", "$666$, umask is ignored", "$600$, group and others lose everything", "$755$, execute is added"],
        answer: 0,
        explanation: "**Step 1 — Given data:** base $666$ (`rw-rw-rw-`), mask $022$ (`----w--w-`).\n**Step 2 — Rule:** mode $=$ base AND (NOT umask); masked bits are removed.\n**Step 3 — Computation:** $666$ AND (NOT $022$) $= 644$ (`rw-r--r--`); group-write and other-write cleared.\n**Step 4 — Cross-check:** directories use base $777$, so the same umask yields $755$; files never gain execute from the mask step.\n**Step 5 — Distractors:** ignoring the mask keeps $666$; $600$ would need mask $066$; $755$ is the directory result.\n**Step 6 — Conclude:** $644$."
      }
    ]
  }
]
