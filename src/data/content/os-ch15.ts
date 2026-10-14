import type { SectionContent } from '../library'

// ============================================================================
// Silberschatz, Galvin, Gagne — Operating System Concepts, 10th Edition
// Chapter 15: File-System Internals (Sections 15.1 – 15.4)
// Master study content. Math is set in KaTeX: $...$ inline, $$...$$ display.
// ============================================================================

export const osCh15Content: SectionContent[] = [
  // ---------------------------------------------------------------- 15.1
  {
    sectionId: "osc-ch15-s1",
    readingTime: 8,
    intro: "A file system is not born into the name space — it must be mounted, splicing one of many storage devices into the single directory tree that processes navigate. This section follows the machinery below the path name: file-system types, partitions and volumes, the boot partition that starts everything, and the mount protocol that records which file system lives where.",
    objectives: [
      "Explain why a general-purpose system runs many file-system types at once, and how the type is chosen",
      "Distinguish raw and cooked partitions and give uses for raw disk",
      "Describe MBR primary and extended partitions and the GPT alternative",
      "Trace booting from firmware through the bootstrap loader to the mounted root file system",
      "Walk through the mount() system call, the kernel’s verification steps, and the mount table"
    ],
    concepts: [
      {
        term: "File systems, partitions and volumes",
        kind: "definition",
        statement: "Storage devices are sliced into **partitions**; partitions (or a volume manager’s combination of them across disks) form **volumes**; each volume may hold one **file system**. A general-purpose system runs many file systems of many **types** at once — the type is chosen at mount time, either supplied explicitly or probed from the device’s on-disk structures.",
        detail: "A typical Solaris system mounts dozens of types: **tmpfs** (volatile, in memory), **procfs** (processes exposed as files), **lofs** (loopback), **objfs**, **ctfs** and **mntfs** (kernel interfaces dressed as file systems), and general-purpose **ufs** and **zfs**. Special-purpose types like procfs have no disk blocks at all — their “files” are generated from kernel data on demand."
      },
      {
        term: "Raw versus cooked partitions",
        kind: "definition",
        statement: "Each partition is either **raw**, containing no file system, or **cooked** — formatted with a file system. Raw disk is used where a file system is inappropriate: **swap space** (the kernel manages its own on-disk format), some **databases** (they format and manage raw disk themselves, gaining speed and control by skipping file-system overhead), and **RAID** housekeeping (bitmaps of mirrored and dirty blocks, small databases of RAID-set configuration).",
        detail: "Everything else — user data, binaries, logs — lives in cooked partitions. The same vocabulary covers the boot flow: the boot blocks must be readable before any file-system code exists, so they too live outside ordinary file contents."
      },
      {
        term: "MBR and GPT partition layouts",
        kind: "definition",
        statement: "The classic **MBR** (master boot record) scheme allows only **four primary partitions**; to exceed the limit, one primary partition is declared an **extended partition** whose interior is divided into **logical volumes**. The modern **GPT** (GUID Partition Table, part of UEFI) supports many more and far larger partitions, with redundant table copies and CRC protection.",
        detail: "Boot loaders and operating systems both consult the table: a single drive can carry several partitions, each with a different file-system type and even a different operating system. Only file systems the boot loader understands can host a bootable OS — which is why each OS restricts which file systems may serve as the root."
      },
      {
        term: "The boot partition and bootstrap loader",
        kind: "method",
        statement: "A bootable partition carries **boot information in its own format**, because at boot time no file-system code is loaded yet. The information is a **sequential series of blocks** loaded as an image into memory and executed from a predefined spot; that image — the **bootstrap loader** — understands just enough of the file-system structure to find the kernel, load it and start it executing.",
        detail: "Loaders such as GRUB understand many file systems and operating systems, enabling **dual-boot** machines: the drive holds several partitions with different file systems and OSes, and the loader chooses among them. If the loader cannot read a given file-system format, an operating system stored on that file system is simply not bootable. The root partition containing the kernel is mounted first, at boot time."
      },
      {
        term: "The mount() system call",
        kind: "method",
        statement: "A file system must be **mounted** before its files are available. The call names the **device** and the **mount point** — the location in the file structure where it is attached — plus, on many systems, the file-system **type** and options. The kernel then verifies the device and that it holds a **valid file system**: the device driver reads the superblock and device directory and checks the expected format. On success the kernel records the file system, its type and its mount point in the in-memory **mount table**.",
        detail: "If the format check fails, the partition must first have its consistency checked and possibly corrected (fsck), with or without user intervention. On unmount, the mount-table entry is removed and whatever the mounted file system was hiding becomes visible again."
      },
      {
        term: "Mounting over a directory that has files",
        kind: "insight",
        statement: "Systems choose different semantics for a mount point that is not empty: some **disallow** it; others allow it and **hide the directory’s existing files** until the file system is unmounted. Similarly, a system may allow the same file system to be mounted repeatedly at different mount points, or only once per file system.",
        detail: "Hiding is the common UNIX behavior — the mounted file system shadows whatever sits underneath. It is also why a mount point is conventionally an empty directory: nothing you care about is obscured."
      },
      {
        term: "Mount tables: UNIX inode flags and Windows drive letters",
        kind: "method",
        statement: "On UNIX, mounting sets a flag in the **in-memory copy of the mount-point directory’s inode**; a field points to an entry in the **mount table**, which in turn points to the **superblock** of the mounted file system. Directory traversal can then switch seamlessly among file systems of varying types. Windows instead assigns each volume a **drive letter** — a separate name space per volume — with the file-system pointer stored in a field of the device structure for that letter; recent Windows versions can also mount within the directory tree, UNIX-style.",
        detail: "macOS automatically mounts any file system it discovers (at boot or when media appear) under /Volumes, labeling the folder with the name stored in the device directory. Windows discovers and mounts all located file systems at boot; UNIX systems mount a list from a configuration table (/etc/fstab) and leave other mounts to explicit commands or automounting daemons."
      },
      {
        term: "Automounting and /etc/fstab",
        kind: "method",
        statement: "UNIX systems keep a static table of file systems to mount at boot — **/etc/fstab** — with one line per file system: **device, mount point, type, options, dump frequency, fsck pass**. **Automounting** goes further: a daemon mounts a file system on first access and unmounts it after inactivity — the right model for removable media and network shares that may vanish.",
        detail: "The automount daemon intercepts a path such as /mnt/usb, mounts the device behind the scenes, and hands the caller a seamlessly populated directory — sparing interactive users the mount command entirely."
      }
    ],
    examples: [
      {
        title: "An /etc/fstab line, field by field",
        problem: "Decode the Linux fstab entry: /dev/sdb1 /data ext4 defaults 0 2 — and then the network entry: fserv:/export/home /home nfs4 defaults,_netdev 0 0.",
        steps: [
          { label: "Step 1: Field 1 — the device", text: "What is being mounted: the partition /dev/sdb1 (a UUID=… form is also common). For a network file system the field is host:/path — here the exported directory fserv:/export/home." },
          { label: "Step 2: Field 2 — the mount point", text: "Where it is attached in the directory tree; the directory should exist. Once mounted, the file system’s root is reached through /data — or through /home, making remote home directories appear local." },
          { label: "Step 3: Field 3 — the file-system type", text: "ext4 tells the kernel which driver must parse the superblock; nfs4 selects the remote-protocol client instead of a local driver. This is the field that supplies the file-system type at mount time." },
          { label: "Step 4: Field 4 — the options", text: "defaults expands to the standard set (read-write, exec, auto-mount at boot, suid, dev, nouser). The comma-separated _netdev marks a network dependency, so boot waits for the network before mounting this entry." },
          { label: "Step 5: Fields 5 and 6 — dump and pass", text: "The dump field says how often the backup utility archives the file system (0 = skip). The final field is the fsck pass: 1 for the root file system, 2 for others checked after it (in parallel across different devices), 0 for never — an nfs4 volume is never locally checked." }
        ],
        result: "One line fully programs boot-time mounting: source → attachment point → driver → options → backup and repair policy. Changing behavior is a file edit, not a code change."
      },
      {
        title: "From power-on to a mounted root",
        problem: "Trace the boot path across the boot partition and into the mounted root file system.",
        steps: [
          { label: "Step 1: Firmware", text: "The CPU starts firmware (BIOS or UEFI), which initializes hardware, consults the partition table and selects a boot device." },
          { label: "Step 2: The bootstrap image", text: "Firmware loads the boot blocks — a plain sequential image in the boot partition’s own format, because no file-system code exists in memory yet — and jumps to a predefined entry point." },
          { label: "Step 3: The loader navigates a file system", text: "The bootstrap loader (GRUB, for example) understands several file-system types, reads its configuration from one of them, and offers the installed kernels — this is where dual-boot selection happens." },
          { label: "Step 4: Kernel load and root mount", text: "The loader finds the kernel in the root partition, loads it and transfers control. The kernel mounts the root file system, verifying its superblock and entering it in the mount table." },
          { label: "Step 5: The full name space appears", text: "The kernel reads /etc/fstab and mounts the remaining volumes — local ones first, network ones when their dependencies are up — assembling the directory tree users actually see." }
        ],
        result: "Boot order is forced by dependency: firmware → raw-format loader → kernel → mounted root → everything else. Each stage knows just enough structure to find the next."
      }
    ],
    keyTakeaways: [
      "A file system must be mounted before it can be used: the mount names device and mount point (plus type), the kernel validates the superblock, then records the result in the mount table.",
      "Raw partitions carry no file system — swap, self-managing databases and RAID metadata live there; everything else is cooked.",
      "Boot information has its own format because no file-system code is running yet; the bootstrap loader knows just enough to find and start the kernel.",
      "MBR allows four primary partitions, one of which may be an extended partition holding logical volumes; GPT removes both ceilings.",
      "UNIX hides subtrees under mount points via inode flags and mount-table entries, giving one seamless tree; Windows maps volumes to drive letters, with tree mounting added later.",
      "/etc/fstab is the static boot-time mount table — device, mount point, type, options, dump frequency, fsck pass — and automounting daemons add on-demand mounts for removable media."
    ],
    quiz: [
      {
        q: "Which of the following is a typical use of a raw (unformatted) partition?",
        options: ["Swap space managed directly by the kernel", "A user’s home directory tree", "An ext4 volume of documents", "The /tmp directory on a tmpfs volume"],
        answer: 0,
        explanation: "Raw partitions carry no file system. Swap uses the disk with the kernel’s own format, some databases manage raw disk themselves to avoid file-system overhead, and RAID stores its mirror bitmaps and set configuration there. Home directories and documents need a real file system."
      },
      {
        q: "Why must the boot partition store boot information in its own format rather than as ordinary files?",
        options: ["To save disk space", "Because no file-system code is loaded when the boot blocks are read", "To keep the kernel encrypted at rest", "Because file systems cannot be marked bootable"],
        answer: 1,
        explanation: "When firmware loads the boot blocks, the operating system — including its file-system drivers — is not running. The loader is a sequential block image; it must contain just enough file-system knowledge to locate and load the kernel."
      },
      {
        q: "Under the classic MBR scheme, how can a disk hold more than four partition-like areas?",
        options: ["It cannot, ever", "One primary partition becomes an extended partition containing logical volumes", "GPT mode switches on automatically", "Partitions nest arbitrarily deeply"],
        answer: 1,
        explanation: "MBR permits four primary partitions; one may be declared an extended partition whose interior is subdivided into logical volumes. The modern alternative, GPT, simply allows many more partitions directly."
      },
      {
        q: "During a successful mount() call, the kernel verifies the file system by:",
        options: ["reading the device’s superblock and checking its expected format", "scanning every file on the volume", "asking the file system to defragment itself", "comparing the volume against /etc/passwd"],
        answer: 0,
        explanation: "The device driver reads the target’s identifying structures — the superblock and device directory — and the kernel checks them against the format expected for the claimed type. Only then is the file system, with its type, recorded in the mount table; failure triggers a consistency check."
      },
      {
        q: "On a UNIX system, mounting a file system over a directory that already contains files typically:",
        options: ["deletes the old files permanently", "is impossible on every UNIX system", "hides the old subtree until the file system is unmounted", "moves the old files into the new file system"],
        answer: 2,
        explanation: "The usual semantics obscure the mount-point directory’s contents for as long as the file system is mounted; unmounting restores access to the originals. Some systems instead disallow the mount outright — which is why mount points are conventionally empty directories."
      }
    ]
  },

  // ---------------------------------------------------------------- 15.2
  {
    sectionId: "osc-ch15-s2",
    readingTime: 8,
    intro: "Once multiple users — and multiple machines — can share files, a second problem appears: the files may live in half a dozen different file systems. The virtual file system (VFS) is the layer that lets one set of system calls — open(), read(), write(), close() — behave identically whether the bytes come from an ext4 volume, an NFS server, or the kernel itself.",
    objectives: [
      "Describe local file sharing through owner, group and IDs — and what breaks when media move between machines",
      "Contrast local, remote (client–server) and distributed file sharing",
      "State the two functions of the VFS layer and its three-layer architecture",
      "Identify the four Linux VFS object types and what each represents",
      "Trace a read() from the system-call interface through the VFS to the page cache"
    ],
    concepts: [
      {
        term: "Sharing among local users",
        kind: "definition",
        statement: "Sharing forces the system to maintain more file and directory attributes than a single-user machine needs. Most systems evolved the **owner** (user) and **group** model: the owner has the most control — changing attributes and granting access — the group names a subset of users who share a defined set of operations, and everyone else gets “other.” Owner and group IDs are stored with the file’s attributes and compared against the requester at every operation, selecting which permissions apply.",
        detail: "Whether sharing happens by default or only when the owner grants it is the domain of access control and protection — the permission machinery of Section 13.4."
      },
      {
        term: "Portable media and mismatched IDs",
        kind: "insight",
        statement: "An external disk moved between systems carries its stored owner and group IDs — but ID 1000 may name a different human on the next machine. Administrators must ensure that IDs match across machines that share media, or reset ownership on the media (for example, assign every file a fresh user ID) so nothing is accidentally exposed to existing users.",
        detail: "The same trust problem returns with remote file systems: an NFS server applies access checks to whatever user ID the client presents, so the client’s IDs and the server’s must agree — or the server checks the wrong person."
      },
      {
        term: "Remote sharing: the client–server model",
        kind: "definition",
        statement: "Remote file systems let a computer mount one or more file systems from other machines: the machine containing the files is the **server**, and the machine seeking access is the **client**. The server declares exactly which resources it exports — at the volume or directory level — and to which clients; a server can serve many clients, a client can use many servers, and one machine can be both.",
        detail: "Client identity is the weak point: network names and IP addresses can be spoofed, so secure deployments authenticate clients with encrypted keys — which brings its own challenges of key exchange and algorithm compatibility. Looser alternatives — ftp-style manual transfer, and the web’s anonymous file exchange — share files without this tight integration."
      },
      {
        term: "The virtual file system (VFS) layer",
        kind: "definition",
        statement: "Instead of writing separate directory and file routines for every file-system type, modern operating systems insert a **VFS layer** between the system-call interface (open, read, write, close and file descriptors) and the implementations. It serves two functions: it separates file-system-generic operations from their implementation by defining a clean **VFS interface** that many implementations satisfy at once, and it provides a file-representation structure — the **vnode** — with a designator that is unique **throughout a network**, because UNIX inode numbers are unique only within a single file system.",
        detail: "Three layers result: the file-system interface on top, the VFS in the middle, and the file-system implementations at the bottom — local file systems of each type plus remote protocols such as the NFS client. The VFS distinguishes local from remote files, and local files further by type."
      },
      {
        term: "The four Linux VFS objects",
        kind: "definition",
        statement: "The Linux VFS defines four main object types: the **superblock object**, representing an entire mounted file system; the **inode object**, representing an individual file; the **dentry object**, representing an individual directory entry (path component), cached in the directory-entry cache; and the **file object**, representing an open file — it holds the current file-position offset.",
        detail: "Two opens of the same file share the inode but each creates its own file object with its own offset. The dentry cache is what makes path resolution fast: /usr/local/dir1 is resolved component by component, but each component’s dentry — and the inode it references — is remembered."
      },
      {
        term: "Function tables: dispatch without knowing the type",
        kind: "method",
        statement: "Every VFS object contains a pointer to a **function table** — the addresses of the routines implementing that object’s operations for its concrete type (for the file object: open, close, read, write, mmap, defined in the kernel’s fs.h). The VFS invokes a fixed slot in the table without knowing or caring whether the file is a disk file, a directory or a remote file: the right implementation is always in the same place.",
        detail: "This is object orientation in the kernel: the interface is fixed, the implementation is chosen per object. A read() flows system-call layer → VFS → the type-specific read routine → (for disk file systems) the page cache, with missing blocks fetched by the file-system driver."
      },
      {
        term: "Pseudo file systems: /proc and sysfs",
        kind: "insight",
        statement: "Because the VFS only requires objects with function tables, a file system need not have a disk at all. **procfs** (/proc) exposes process and kernel information as files; **sysfs** (/sys) exposes device and driver state. A read() of such a file calls a kernel routine that generates the contents on demand.",
        detail: "This generalizes the Solaris menagerie — tmpfs, objfs, ctfs, mntfs are all interfaces to kernel state dressed as file systems. The VFS is what makes them indistinguishable from real storage at the system-call level; a mount -t ext4 and a mount of procfs differ only in the driver behind the objects."
      }
    ],
    examples: [
      {
        title: "mount -t ext4: what the kernel actually does",
        problem: "The administrator runs: mount -t ext4 /dev/sdb1 /data. Walk through the kernel-side steps.",
        steps: [
          { label: "Step 1: Identify the type and driver", text: "The -t ext4 argument names the file-system type; the kernel checks that the ext4 implementation is available, loading the module if necessary." },
          { label: "Step 2: Read and validate the superblock", text: "The block device is opened and the ext4 driver reads the superblock from /dev/sdb1, checking its magic numbers and expected format. An invalid structure means refusal — and that a consistency check is needed before mounting can succeed." },
          { label: "Step 3: Build the VFS objects", text: "The driver fills in a superblock object and reads the root inode; a dentry for the root of the mounted tree is created and attached at the mount point /data." },
          { label: "Step 4: Record and publish", text: "The mount table gains an entry — device, type, superblock, options — and the in-memory inode of /data is flagged as a mount point. From now on, any lookup reaching /data descends into the ext4 tree." }
        ],
        result: "One command turns a block device into a navigable subtree — validated, typed and recorded, so that directory traversal crosses file-system boundaries invisibly."
      },
      {
        title: "A read() through the VFS — disk file versus /proc file",
        problem: "Compare what happens inside read(fd, buf, 4096) when fd refers to /data/report.tex on ext4 versus /proc/cpuinfo on procfs.",
        steps: [
          { label: "Step 1: The common path", text: "Both start identically: the system-call layer uses the descriptor to find the file object, whose state includes the current offset." },
          { label: "Step 2: Dispatch through the function table", text: "The VFS calls the read slot of the file object’s function table. For the ext4 file, that slot points at the ext4 driver’s read routine; for /proc/cpuinfo, at a procfs routine." },
          { label: "Step 3: The ext4 side", text: "The driver checks the page cache; on a hit, bytes are copied straight from memory. On a miss, the file system computes the needed block(s), asks the block layer to fetch them, and caches the result for next time." },
          { label: "Step 4: The procfs side", text: "The procfs routine runs kernel code that formats the processor’s live state into text on demand. No disk block is ever read, and nothing persistent is cached." },
          { label: "Step 5: The offset advances", text: "In both cases the file object’s offset advances by the count and the result returns to the application — which never learns which machinery answered." }
        ],
        result: "Identical application code, completely different implementations: that substitution is the entire point of the VFS."
      }
    ],
    keyTakeaways: [
      "Local sharing is mediated by owner/group/other attributes checked on every operation; media that move between machines can silently re-map who the owner is.",
      "Remote sharing follows the client–server model: servers export volumes or directories, clients mount them — and authenticating the client is the hard part.",
      "The VFS separates generic file operations from their implementations, letting dissimilar file systems — local and remote — coexist behind one interface.",
      "vnodes give files network-wide unique identities; raw inode numbers are unique only within a single file system.",
      "Linux’s four VFS objects: superblock (per mounted file system), inode (per file), dentry (per path component, cached), file (per open — it holds the offset).",
      "Function tables dispatch VFS calls to type-specific code, which is why /proc and sysfs can be pure kernel state — file systems without disks."
    ],
    quiz: [
      {
        q: "A process opens the same file twice. Which VFS object is duplicated?",
        options: ["The inode object", "The file object — one per open, each with its own offset", "The superblock object", "The dentry object"],
        answer: 1,
        explanation: "The inode (one per file) and the dentry (one per path component) are shared; each open() creates a new file object carrying its own current-position offset. Two descriptors into one file therefore read independently."
      },
      {
        q: "The two functions of the VFS layer are:",
        options: ["compression and encryption", "defining a clean interface for multiple file-system implementations, and representing files uniquely across a network", "caching and journaling", "mounting and formatting"],
        answer: 1,
        explanation: "The VFS separates file-system-generic operations from implementation details — so many types can coexist — and introduces vnodes so a file has a single network-wide identity, which raw inode numbers cannot provide."
      },
      {
        q: "In Linux’s VFS, the object representing an entire mounted file system is the:",
        options: ["inode object", "file object", "superblock object", "dentry object"],
        answer: 2,
        explanation: "One superblock object per mounted file system; one inode per file; one dentry per directory entry (path component); one file object per open descriptor."
      },
      {
        q: "How does the VFS layer execute a read() without knowing the file’s concrete type?",
        options: ["It funnels all data through one fixed kernel buffer", "It calls the read function in the object’s function table — the right implementation sits in the same slot for every type", "It asks the hardware to route the request", "It converts every file to a character stream first"],
        answer: 1,
        explanation: "Each VFS object carries a pointer to a function table listing its type’s implementations. The VFS invokes a fixed slot; whether ext4, NFS or procfs code answers is invisible to the layer above."
      },
      {
        q: "File systems such as procfs and sysfs demonstrate that:",
        options: ["all file systems require journaling", "the VFS interface can back “files” with kernel-generated data instead of disk blocks", "dentry objects are optional in Linux", "mount points must always be empty"],
        answer: 1,
        explanation: "A file system in the VFS world is whatever supplies the right objects and function tables. procfs and sysfs generate their contents on demand from live kernel state — no storage device involved."
      }
    ]
  },

  // ---------------------------------------------------------------- 15.3
  {
    sectionId: "osc-ch15-s3",
    readingTime: 9,
    intro: "Remote file systems carry the familiar open/read/write interface across the network. NFS is the canonical example: servers export directories, clients mount them, and remote files become indistinguishable from local ones — a transparency purchased with RPCs, statelessness, idempotent operations and carefully tuned caches.",
    objectives: [
      "Describe the NFS architecture: exports, remote mounts, cascading mounts and transparency",
      "Explain the mount protocol, file handles, and the stateless protocol’s idempotent operations",
      "Detail the client’s attribute and block caches, close-to-open consistency, and the synchronous-write penalty",
      "Summarize how NFS version 4 departs from version 3",
      "Distinguish location transparency from location independence, and describe the GFS and HDFS architectures"
    ],
    concepts: [
      {
        term: "NFS architecture",
        kind: "definition",
        statement: "NFS views interconnected machines as independent systems with independent file systems, joined on explicit request. The **server exports** chosen directories (listed with allowed machines and access rights in its export table); a **client mounts** a remote directory over one of its own local directories, after which the remote subtree looks like an integral part of the client’s name space — **transparency**. Only the mount operation itself names the server; every later access is ordinary path resolution.",
        detail: "Machines are typically both client and server. **Cascading mounts** — mounting a file system on top of an already remotely mounted one — are permitted in some implementations, but mounts are not transitive: a client is affected only by mounts it invoked, and mounting a remote file system does not expose other file systems the server happens to have mounted."
      },
      {
        term: "The mount protocol and file handles",
        kind: "method",
        statement: "The **mount protocol** establishes the initial logical connection: a mount request names the remote directory and the server machine; the request becomes an RPC to that server’s mount process, which checks it against the **export list**. If the request conforms, the server returns a **file handle** — in UNIX terms a file-system identifier plus an inode number, plus a generation counter that defeats stale reuse — which is the key for all further accesses to files under the mounted directory.",
        detail: "The server also keeps a list of client machines and their current mounts, but only as an administrative hint — it is not essential for correct operation and is discarded on a crash. The mount protocol also provides unmount and return-export-list procedures; systems usually pre-configure static mounts at boot (such as /etc/vfstab on Solaris)."
      },
      {
        term: "The stateless NFS protocol",
        kind: "definition",
        statement: "The NFS protocol is a set of RPCs supporting: searching for a file within a directory, reading a set of directory entries, manipulating links and directories, accessing file attributes, and reading and writing files. There are deliberately **no open and close operations**: the server is **stateless**, keeping no information about clients from one access to the next. Each request must therefore carry its full arguments — a unique file identifier and an absolute offset inside the file.",
        detail: "Statelessness makes the design robust — a restarted server simply answers the next request — but also unsecure, since forged requests are hard to detect. The specification is media-independent via RPC and an external data representation (XDR), so heterogeneous machines and file systems interoperate. A single write RPC is atomic and not intermixed with other writes to the same file, but one write() call may decompose into several RPCs — each carries at most $8\\,\\text{KB}$, and UDP packets are limited to about 1,500 bytes — so two users writing the same remote file may see their data intermixed."
      },
      {
        term: "Idempotent operations",
        kind: "definition",
        statement: "An operation is **idempotent** when performing it multiple times has the same effect as performing it once. NFS requires this of its file operations so that a request lost to a crash or a timeout can simply be re-executed — retransmission is the recovery story, and no special server-side measures are needed after a crash.",
        detail: "For durability, modified data (including indirection and status blocks) must be committed to the server’s disk before results return to the client: clients may cache write blocks, but once flushed, they assume the data has reached the server’s stable storage. The performance penalty is large because the caching advantage is lost; battery-backed controller caches are the classic mitigation — the controller acknowledges from nonvolatile memory, and the blocks reach disk later."
      },
      {
        term: "Client caches: attributes, blocks and close-to-open consistency",
        kind: "method",
        statement: "NFS clients keep two caches: the **file-attribute cache** (inode information) and the **file-blocks cache**. When a file is opened, the kernel checks with the server to fetch or revalidate the cached attributes; cached blocks are used only while the corresponding cached attributes are current (by default they are discarded after $60\\,\\text{s}$). Read-ahead and delayed-write are both used between client and server, producing **close-to-open consistency**: changes are flushed when the file is closed and validated when it is opened — a newly opening session sees the flushed state, while readers who keep the file open may not.",
        detail: "Delayed writes are retained even when the file is concurrently open in conflicting modes, so strict UNIX semantics do not hold; newly created files may not be visible elsewhere for about $30\\,\\text{s}$. The book’s verdict: NFS provides neither strict UNIX semantics nor Andrew’s session semantics — a practical middle with good performance that made it the most widely used multi-vendor distributed system."
      },
      {
        term: "NFS version 4",
        kind: "insight",
        statement: "NFSv4 turns the protocol **stateful** to improve security, performance and functionality: opens and locks are tracked with **stateids**; multiple operations travel as one **compound** request (a single round trip); authentication moves to **Kerberos**, fixing the trust-the-client-UID weakness of earlier versions; **delegations** let the server hand a client temporary control so it can cache aggressively; and **referrals** let one server point clients to another, building a federated name space.",
        detail: "Statefulness is what makes locks and delegations possible — the server now remembers who holds what, at the cost of a recovery story (lease expiration) instead of v3’s crash-and-carry-on simplicity."
      },
      {
        term: "DFS naming: location transparency versus independence",
        kind: "definition",
        statement: "A distributed file system hides where files live, with two escalating guarantees. **Location transparency**: the name reveals nothing about the file’s physical storage — the name-to-location mapping is hidden from users. **Location independence**: the name **survives migration** — the file can move to another server without changing its name, so the mapping is dynamic.",
        detail: "Static remote mounts (classic NFS) achieve transparency but not independence: the mount itself names the server, so moving the data rewrites the mount. Fully distributed systems maintain a name service that resolves each name to a current location."
      },
      {
        term: "Cluster-scale file systems: GFS and HDFS",
        kind: "insight",
        statement: "At data-center scale, general-purpose network file systems give way to dedicated designs. The **Google File System (GFS)** runs one **metadata server** (the master) plus many **chunk servers**, stores files in large $64\\,\\text{MB}$ chunks with replication, and favors huge streaming reads and appends — the access pattern of **MapReduce**. **Hadoop HDFS** follows the same shape: a **NameNode** holds the metadata, **DataNodes** store replicated blocks, files are written once and read many times, and replica placement is rack-aware. **GPFS** and **Lustre** serve the same role in high-performance computing.",
        detail: "The remote-access strategy differs too: **AFS-style whole-file caching** fetches the entire file once and works locally for the session, while **NFS-style block caching** fetches and caches individual blocks on demand. Consistency enforcement differs as well: **validation** has clients re-check with the server (NFS attribute checks), while **callbacks** let the server notify clients when cached data is invalidated (AFS)."
      }
    ],
    examples: [
      {
        title: "Life of a remote READ",
        problem: "Machine U has mounted S1:/usr/shared at its local /usr/local. Trace what happens when a program on U opens and reads /usr/local/dir1/notes.txt.",
        steps: [
          { label: "Step 1: The path meets the mount point", text: "open() resolves /usr/local in the local name space; the mount flag on that directory hands resolution to the NFS client, and the remaining components — dir1 and notes.txt — must be resolved on S1." },
          { label: "Step 2: A LOOKUP for every component", text: "Path-name translation breaks the remaining path into components and performs a separate NFS lookup for each component-name plus directory-file-handle pair. The server checks access and returns the next file handle; a directory-name-lookup cache on the client (vnodes keyed by path prefix) spares repeated RPCs, and its entries are discarded when server attributes stop matching." },
          { label: "Step 3: The open revalidates attributes", text: "With the final file handle in hand, the client kernel checks the file’s cached attributes against the server — fetching or revalidating them — and then creates the local file object with offset 0. Close-to-open consistency starts here." },
          { label: "Step 4: The READ RPCs", text: "read(fd, buf, n) becomes one or more NFS READ requests carrying the file handle, the absolute offset and the count; each returns at most $8\\,\\text{KB}$ of data. The returned blocks are cached in the file-blocks cache for future reads." },
          { label: "Step 5: The server side", text: "Each RPC lands in S1’s NFS service layer, is reinjected into S1’s VFS — which sees an ordinary local file — and executes the local file-system read. The result retraces the path back to U." },
          { label: "Step 6: The application never knew", text: "The file object’s offset advances and read() returns exactly as it would for a local file. Only the RPCs, the caches and the per-component lookups reveal the distance." }
        ],
        result: "A remote read is a chain of mount protocol, per-component LOOKUPs, attribute validation and READ RPCs — orchestrated so the system-call interface stays identical to local I/O."
      },
      {
        title: "Crash in the middle: stateless recovery",
        problem: "A client holds an open NFS file with cached dirty blocks when the server crashes and reboots in 30 seconds. No open state existed on the server. Walk through what the client does and what, if anything, is lost.",
        steps: [
          { label: "Step 1: Nothing to rebuild", text: "Because the protocol is stateless, the rebooted server holds no per-client open tables to reconstruct — there is simply nothing to lose on the server side. The client’s file handle (file-system id, inode, generation) is still valid." },
          { label: "Step 2: Retransmit", text: "The client’s RPC layer times out and retransmits the pending requests. Idempotency guarantees the retry is safe: a READ repeated returns the same bytes, and a re-issued WRITE with the same offset overwrites identically." },
          { label: "Step 3: Revalidate", text: "Cached attributes may have expired during the outage, so the client revalidates them against the server before serving further reads — close-to-open consistency re-establishes itself automatically." },
          { label: "Step 4: What can be lost", text: "Only data the client had not yet flushed: dirty blocks still in the client cache at crash time were never acknowledged. Applications that need durability must commit (fsync) before proceeding — the price of the simple recovery story." }
        ],
        result: "Statelessness makes the crash a non-event for open files: retransmit, revalidate, continue. Only unflushed client-side writes are at risk — durability still requires an explicit commit."
      }
    ],
    keyTakeaways: [
      "Servers export directories; clients mount them; after the mount, remote files are addressed exactly like local ones — transparency.",
      "The mount protocol hands back a file handle — file-system identifier plus inode number plus generation — that keys every later operation.",
      "Statelessness (no open or close on the wire) plus idempotent requests makes crash recovery trivial and security harder; v4 adds stateids, compound operations, Kerberos and delegations.",
      "Clients cache attributes ($60\\,\\text{s}$ default) and blocks: close-to-open means new opens see flushed changes, while long-open readers may not.",
      "Server writes are synchronous before acknowledgment; battery-backed caches claw back the performance cost.",
      "Location transparency hides where a file is; location independence lets it move without changing its name.",
      "GFS and HDFS — metadata server plus chunk/DataNodes, $64\\,\\text{MB}$-class chunks or blocks, write-once workloads — trade generality for cluster throughput."
    ],
    quiz: [
      {
        q: "NFS version 3 servers keep no per-client state. What does every request therefore carry?",
        options: ["Only the file name", "Its complete arguments: file handle, offset and count", "The client’s open-file table", "A session ticket"],
        answer: 1,
        explanation: "Statelessness means the server remembers nothing between requests, so each RPC is self-contained: the file handle identifies the file and the absolute offset locates the data. The protocol has no open or close at all."
      },
      {
        q: "An idempotent operation is one that:",
        options: ["must be executed exactly once", "has the same effect whether executed once or many times", "cannot be cached by the client", "requires an open() before it"],
        answer: 1,
        explanation: "Re-execution safety is what lets an NFS client retry a request after a timeout or a server restart without corrupting anything — the effect is the same as if the operation had happened once."
      },
      {
        q: "Under close-to-open consistency:",
        options: ["all readers see writes immediately", "changes are flushed at close and validated at open — a reader that stays open may keep stale data", "files become immutable after the first write", "the server pushes updates to clients eagerly"],
        answer: 1,
        explanation: "The writer flushes its changes when it closes the file; a reader that opens afterward revalidates its cache and sees them. A reader that stays open across the write is not notified and may continue with old contents."
      },
      {
        q: "Location independence differs from location transparency because it:",
        options: ["encrypts the file’s physical location", "allows a file to move without changing its name", "means the client always knows the server’s address", "requires a stateless server"],
        answer: 1,
        explanation: "Transparency hides the location behind the name. Independence goes further — the name-to-location mapping is dynamic, so the file can be migrated and the same name keeps resolving correctly."
      },
      {
        q: "In GFS and HDFS, the metadata/master node:",
        options: ["stores all file data itself", "stores metadata only — the data lives in large chunks or blocks on chunk/DataNodes", "runs on every client machine", "is optional"],
        answer: 1,
        explanation: "A single metadata authority — the GFS master or the HDFS NameNode — maps files to their $64\\,\\text{MB}$-class chunks or blocks spread across many storage nodes, streamlining the huge sequential reads and appends that MapReduce-style workloads issue."
      }
    ,
      // PYQ-pattern: GATE 2021 — NFS stateless recovery (rephrased)
      {
        q: "Why can an NFS server crash and reboot without losing client file-system state, and what must its operations satisfy?",
        options: ["It keeps all state on clients; operations are idempotent so replays are safe", "It logs every block to tape", "Clients poll until the server returns", "It uses strict locking for all writes"],
        answer: 0,
        explanation: "**Step 1 — Given data:** NFS server exports directories; clients mount them; operations travel as RPCs.\n**Step 2 — Rule:** stateless design keeps no per-client open state on the server; every operation carries full arguments and is idempotent (repeatable with the same effect).\n**Step 3 — Apply:** after a crash the server restarts empty; a client simply replays the last RPC and gets the same result; no recovery protocol is needed.\n**Step 4 — Cross-check:** caching (attribute and data caches with close-to-open flushing) preserves performance without breaking the stateless contract.\n**Step 5 — Distractors:** tape logging is recovery, not statelessness; polling does not make replays safe; strict locking is stateful.\n**Step 6 — Conclude:** stateless plus idempotent gives crash transparency."
      },
      // PYQ-pattern: ISRO 2016 — close-to-open consistency (rephrased)
      {
        q: "Two clients share one file. Client A writes and closes; client B then opens and reads. What does B see under close-to-open, and how does it differ from session semantics?",
        options: ["B may see stale data; session would show the write", "B sees A’s changes because close flushes and open refreshes; session publishes whole images only at close", "Both see nothing until reboot", "B always sees strict single-image order"],
        answer: 1,
        explanation: "**Step 1 — Given data:** write-then-close followed by open-then-read.\n**Step 2 — Rule:** close-to-open flushes dirty data on close and revalidates on open; session semantics publishes each session’s whole image at close with last-close-wins.\n**Step 3 — Apply:** A’s close pushes changes; B’s open fetches them, so B reads fresh data. Under pure session rules concurrent images would clash with a lost update.\n**Step 4 — Cross-check:** neither equals strict single-image order; NFS sits between local discipline and whole-file sessions.\n**Step 5 — Distractors:** stale-read contradicts the flush; reboot is irrelevant; strict order needs one kernel image.\n**Step 6 — Conclude:** close-to-open makes this pattern fresh; sessions resolve by last close."
      }
    ]
  },

  // ---------------------------------------------------------------- 15.4
  {
    sectionId: "osc-ch15-s4",
    readingTime: 7,
    intro: "Consistency semantics answer a deceptively simple question: when two users have the same file open, when does one see the other’s writes? The answer defines the file system’s character — from the strict single-image model of UNIX, through the relaxed session semantics of Andrew, to immutable files that refuse the question entirely.",
    objectives: [
      "Define consistency semantics and the file session",
      "State UNIX semantics and their implementation consequences",
      "State session semantics and the last-close-wins conflict rule",
      "Explain immutable shared files and why they eliminate sharing races",
      "Map these models onto local UNIX file systems, NFS and AFS"
    ],
    concepts: [
      {
        term: "Consistency semantics and file sessions",
        kind: "definition",
        statement: "**Consistency semantics** specify how multiple users simultaneously accessing a shared file observe one another’s modifications — in particular, when a write by one user becomes observable by another. The unit of discussion is a **file session**: the series of accesses (reads and writes) between one open() and the matching close().",
        detail: "The topic is Chapter 6 synchronization reborn at file scale, but the tools differ. Performing an atomic transaction against a remote disk can involve several network communications, several disk reads and writes, or both — systems that insist on a full set of fine-grained sharing semantics tend to perform poorly. The Andrew file system is the classic successful middle ground."
      },
      {
        term: "UNIX semantics",
        kind: "definition",
        statement: "Writes to an open file by a user are visible **immediately** to other users who have that file open. One mode of sharing even shares the pointer of the current location into the file, so one user’s advancing the pointer affects everyone. A file is associated with a **single physical image** that interleaves all accesses into one total order, and it is accessed as an exclusive resource — contention for the single image causes delays in user processes.",
        detail: "This is the strongest common model: a read after a write returns the written value, because there is only one copy and one order of operations on it. The price is serialization — every access contends for the same image."
      },
      {
        term: "Session semantics",
        kind: "definition",
        statement: "Writes to an open file by a user are **not** immediately visible to other users who have the same file open. Once the file is closed, the changes become visible — but only in sessions starting later; already-open instances of the file never reflect them. A file may therefore be associated temporarily with **several images at once**, and users perform reads and writes concurrently on their own images, almost without scheduling constraints.",
        detail: "This is the Andrew file system (OpenAFS) model. It pairs naturally with whole-file caching: each session works on a private image and publishes it at close."
      },
      {
        term: "Concurrent writers: last close wins",
        kind: "insight",
        statement: "Under session semantics, two writers each acquire a private image at open — a **fork** of the file’s state — and each publishes their image at close, where the **join** rule is simply that the **last close wins**. Whoever closes later replaces the published state with their image, and the earlier writer’s changes are a lost update unless applications layer their own coordination.",
        detail: "The merge is cheap — replace, not reconcile — which is exactly why races are prevented only by convention (or by application protocols that take turns)."
      },
      {
        term: "Immutable shared files",
        kind: "definition",
        statement: "Once a file is declared shared by its creator, it **cannot be modified**: an immutable file’s name may not be reused, and its contents may not be altered. The name therefore certifies fixed contents. New versions are new files — typically created under a temporary name and published with an atomic rename.",
        detail: "Because sharing is disciplined read-only access, the distributed implementation is simple and all the write-race questions vanish: consistency is trivially achieved. Versioned data sets and published artifacts are natural fits."
      },
      {
        term: "Which semantics does my system have?",
        kind: "insight",
        statement: "A local UNIX file system provides UNIX semantics — one kernel, one image, one order of accesses. NFS v3 approximates but guarantees neither model: close-to-open flushing plus delayed writes mean new opens see recent changes while long-open readers may not. AFS implements session semantics, and immutable-content stores sit at the strict end.",
        detail: "The book’s caution: NFS’s tunable caches make its effective semantics hard to characterize — visibility delays of tens of seconds are normal and acceptable for most workloads."
      }
    ],
    examples: [
      {
        title: "UNIX semantics: one image, immediate visibility",
        problem: "Users A and B both have a shared file open. A writes the characters “OS” at offset 0, and B reads two bytes at offset 0 immediately afterward. What does B get?",
        steps: [
          { label: "Step 1: One image", text: "Both descriptors refer to the same physical file — the kernel serializes all accesses into a single interleaving, giving one total order." },
          { label: "Step 2: A’s write", text: "“OS” lands in the single image; any kernel buffering is transparent because reads consult the same image." },
          { label: "Step 3: B’s read", text: "B’s read is ordered after A’s write in the total order, so it returns “OS” — the most recent write." },
          { label: "Step 4: The cost", text: "Because the image is an exclusive resource, A’s and B’s operations contend: a writer can delay readers and vice versa." }
        ],
        result: "B reads exactly what A wrote. Correctness is absolute — every read sees the most recent write — but concurrency is throttled by the single image."
      },
      {
        title: "Session semantics: private images, last close wins",
        problem: "Same starting point, but now each user opens the file as a private session image (as in AFS). A appends “A” and closes; B, unaware, appends “B” to its own image and closes later. What ends up in the file?",
        steps: [
          { label: "Step 1: Each session forks an image", text: "At open, A and B each acquire a private copy of the file (for AFS, a whole-file cache) to work on for the session." },
          { label: "Step 2: A’s session", text: "A appends “A” to its image. B, in a separate session, still sees the original contents — writes are invisible to other open sessions." },
          { label: "Step 3: A closes first", text: "A’s image is written back and published; the file now holds the original contents plus “A”." },
          { label: "Step 4: B closes last", text: "B’s image — built from the original, plus “B” but not “A” — is written back after A’s and replaces the published state." },
          { label: "Step 5: The join", text: "Last close wins: A’s append is a lost update. Any session that opens the file now sees the original contents plus “B” only." }
        ],
        result: "Final contents: original + “B”. Session semantics bought concurrent access without delay, at the price of silently dropping the earlier writer’s changes."
      }
    ],
    keyTakeaways: [
      "Consistency semantics define when one user’s writes become visible to another’s reads; the unit is the file session — open() to close().",
      "UNIX semantics: a single physical image, one total order, immediate visibility — reads always see the most recent write, and contention delays processes.",
      "Session semantics (Andrew/AFS): private images per session; changes publish at close, and only to sessions starting later.",
      "Under session semantics, concurrent writers resolve by last close wins — the earlier writer’s updates can be lost.",
      "Immutable shared files remove modification entirely — new versions are new files, published by atomic rename.",
      "Real systems: a local file system gives UNIX semantics, AFS gives session semantics, and NFS’s close-to-open approximation guarantees neither.",
      "Fine-grained locking across disk and network latencies performs poorly — every practical model relaxes Chapter 6 rigor somewhere."
    ],
    quiz: [
      {
        q: "Under UNIX semantics, a user who reads a shared file immediately after another user’s write to it:",
        options: ["sees the old contents until the file is closed", "is returned the newly written value", "receives an error", "sees whichever copy their session cached"],
        answer: 1,
        explanation: "The file is a single physical image whose accesses are interleaved into one total order; a read ordered after a write returns the written value. Visibility is immediate — at the price of exclusive-resource contention."
      },
      {
        q: "Under session semantics, changes made to an open file become visible to other users:",
        options: ["immediately", "only after the writer closes the file, and only to sessions that open it afterward", "never", "when the server pushes an update"],
        answer: 1,
        explanation: "Sessions work on private images; at close the changes are published, and only newly starting sessions observe them. Instances already open keep the old contents — the Andrew file system model."
      },
      {
        q: "Two writers work on the same file under session semantics; B closes after A. The final file reflects:",
        options: ["both A’s and B’s changes merged", "only B’s image — the last close wins", "only A’s changes", "whichever writer was first to open the file"],
        answer: 1,
        explanation: "Each session publishes its whole image at close, and publication order follows close order. B’s close is last, so B’s image replaces A’s — A’s changes are a lost update."
      },
      {
        q: "An immutable shared file:",
        options: ["can be modified only by its owner", "can never have its contents altered or its name reused — new versions are new files", "is cached permanently on all clients", "may be written once per session"],
        answer: 1,
        explanation: "Immutability forbids both modification and name reuse. Updates become new files, typically installed with an atomic rename — so sharing is disciplined read-only access and consistency races cannot arise."
      },
      {
        q: "Which pairing is correct?",
        options: ["NFS implements strict UNIX semantics", "AFS implements session semantics; a local UNIX file system implements UNIX semantics", "Local file systems implement session semantics", "Immutable semantics require a stateful server"],
        answer: 1,
        explanation: "A single-kernel local file system maintains one image and one order — UNIX semantics. AFS works per session on whole-file caches — session semantics. NFS sits between: close-to-open flushing means new opens see recent changes, but neither guarantee strictly holds."
      }
    ]
  }
]
