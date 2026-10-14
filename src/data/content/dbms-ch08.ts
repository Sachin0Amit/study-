import type { SectionContent } from '../library'

// ============================================================================
// Databases — Chapter 8: Indexing, B and B+ Trees, File Organization
// Sections 8.1 - 8.4. Master study content.
// ============================================================================

export const dbmsCh08Content: SectionContent[] = [
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: 'dbms-ch8-s1',
    readingTime: 7,
    intro: 'Indexes trade extra writes for faster reads by keeping ordered shortcuts into the table. Dense, sparse and clustered designs differ in what they index and how tightly they bind to storage order. Choosing among them is a cost decision driven by lookup patterns and update rates.',
    objectives: [
      'Distinguish dense, sparse and clustered layouts by entry coverage and ordering power',
      'Estimate lookup cost with and without an index from entry counts and levels',
      'Select primary, clustering and secondary indexes for point and range workloads'
    ],
    concepts: [
      {
        term: 'Dense versus sparse indexes',
        kind: 'definition',
        statement: 'A **dense** `dense` index holds one entry per record while a **sparse** `sparse` index holds one entry per block, keyed to the block minimum. Dense indexes find any key directly, sparse ones scan within the block after landing.',
        detail: 'Sparse indexes demand ordered storage to bracket the target block. Dense indexes work on any order at the price of one entry per row.'
      },
      {
        term: 'Clustered layout',
        kind: 'definition',
        statement: 'A **clustered** `clustered` index dictates physical row order so neighbors on the key live together on disk. Only one clustered order exists per table, while the rest are unclustered overlays.',
        detail: 'Range scans shine under clustering since one sequential read fetches many qualifying rows. Random inserts pay to maintain the order, often through overflow chains or page splits.'
      },
      {
        term: 'Primary and secondary indexes',
        kind: 'notation',
        statement: 'The **primary** `primary` index sits on the ordering key of a sorted file, a **clustering** index on a non-key ordering field with duplicates, and a **secondary** index on any other field with buckets of record pointers. Terminology varies, so always check entry shape first.',
        detail: 'Secondary indexes on non-unique fields point each key to a bucket of row locators. Updates touch every secondary entry covering the changed columns plus the base row.'
      },
      {
        term: 'Selectivity and costing',
        kind: 'method',
        statement: 'Index choice follows **selectivity** `selectivity`: highly selective point lookups favor hash or dense tree indexes, while low-selectivity range scans favor clustered orders. Cost adds index levels plus data block reads for qualifying rows.',
        detail: 'Fetching half the table through an unclustered index costs more than a full scan because each row arrives by random hop. Optimizers compare $levels + matching$ $rows$ against $total$ $blocks$ before picking the plan.'
      },
      {
        term: 'Composite and covering indexes',
        kind: 'method',
        statement: 'A **composite** `composite` index on $(A, B)$ serves prefix searches on $A$ and ordered pairs, while a **covering** index answers the query from entries alone with no base-table visit. Column order decides which predicates benefit.',
        detail: 'Equality on $A$ plus range on $B$ fits $(A, B)$ well, but range on $A$ alone leaves $B$ ordering useless inside each $A$ group. Covering plans show up as index-only scans in cost reports.'
      }
    ],
    examples: [
      {
        title: 'Trace: dense against sparse on one file',
        problem: 'A sorted file holds $100000$ records in $1000$ blocks of $100$ rows. Compare a dense and a sparse index lookup for one key.',
        steps: [
          { label: 'Step 1', text: '```text\ndense entries: 100000 (one per record)\nsparse entries: 1000 (one per block)\nindex levels: 2-3 in both cases\n```\nThe sparse directory is two orders of magnitude smaller while still bracketing any key.' },
          { label: 'Step 2', text: 'Dense lookup walks the levels then jumps straight to the row pointer. Sparse lookup walks fewer directory pages, lands on the candidate block, then scans up to $100$ rows inside the block.' },
          { label: 'Step 3', text: 'Sparse wins on space and matches on levels here, at the cost of a small in-block scan. Dense wins when the file cannot stay sorted, since sparse bracketing then breaks.' }
        ],
        result: 'Sorted files favor sparse indexes with tiny directories plus bounded block scans.'
      },
      {
        title: 'Drill: clustered range against secondary hops',
        problem: 'Query selects $40000$ of $100000$ rows by date. Date order is clustered in plan P and unclustered secondary in plan Q. Which reads less?',
        steps: [
          { label: 'Step 1', text: 'Plan P reads the qualifying date range sequentially: roughly four-tenths of the data blocks in order with good prefetching.' },
          { label: 'Step 2', text: 'Plan Q looks up $40000$ scattered row pointers and hops per row, touching many blocks repeatedly with random access.' },
          { label: 'Step 3', text: 'At forty percent selectivity the sequential clustered scan beats scattered hops, so P wins while Q would win for a single-day point lookup.' }
        ],
        result: 'Clustered sequential scans win wide ranges, secondary indexes win selective points.'
      }
    ],
    keyTakeaways: [
      'Dense indexes cover every record while sparse ones cover one entry per ordered block.',
      'Clustering stores rows in key order, so only one clustered layout exists per table.',
      'Secondary indexes overlay arbitrary fields with pointer buckets at extra maintenance cost.',
      'Selectivity plus clustering decides between index hops and sequential scans.'
    ],
    quiz: [
      {
        q: 'A sparse index requires:',
        options: [
          'Ordered storage so each entry brackets a block minimum',
          'One entry per record on any field',
          'A hash bucket per distinct key',
          'Duplicate-free secondary keys'
        ],
        answer: 0,
        explanation: 'Step 1: Sparse entries point at blocks, not rows. Step 2: Landing on the right block needs key-ordered placement. Step 3: Unordered files break the bracketing logic. Step 4: Dense indexes carry the per-record alternative.'
      },
      // PYQ-pattern: dense versus sparse entry counts on a blocked file
      {
        q: '$100000$ records in $1000$ blocks give sparse entries numbering:',
        options: [`$100000$`, `$100$`, `$1000$`, `$1000000$`],
        answer: 2,
        explanation: 'Step 1: Sparse keeps one entry per block. Step 2: The file has $1000$ blocks. Step 3: Hence the directory holds $1000$ entries. Step 4: Dense would instead hold $100000$.'
      },
      {
        q: 'Only one clustered index exists per table because it:',
        options: [
          'Is limited to primary keys by definition',
          'Dictates physical row order, which admits a single arrangement',
          'Cannot support range scans',
          'Is always stored as a hash table'
        ],
        answer: 1,
        explanation: 'Step 1: Clustering fixes on-disk adjacency. Step 2: Rows sit in exactly one physical order. Step 3: Two orders cannot both hold at once. Step 4: Other indexes therefore stay unclustered.'
      },
      {
        q: 'A covering index speeds queries by:',
        options: [
          'Sorting the base table on every query',
          'Removing all write overhead',
          'Merging duplicate keys automatically',
          'Answering from index entries without visiting base rows'
        ],
        answer: 3,
        explanation: 'Step 1: Covering entries carry all queried columns. Step 2: The plan scans entries alone. Step 3: Base-table hops disappear. Step 4: Write maintenance remains, but reads turn index-only.'
      }
    ]
  },

  // ---------------------------------------------------------------- 8.2
  {
    sectionId: 'dbms-ch8-s2',
    readingTime: 9,
    intro: 'B-trees keep huge key sets searchable in a handful of hops by fanning out widely at every node. Occupancy rules guarantee each node stays reasonably full despite inserts and deletes. Splits and merges are the local repairs that preserve balance globally.',
    objectives: [
      'State order, key bounds and minimum occupancy for a $B$-tree of order $m$',
      'Trace search, insert with splits and delete with merge or redistribution',
      'Bound the height from key count and fanout for cost estimates'
    ],
    concepts: [
      {
        term: 'Order and node capacity',
        kind: 'definition',
        statement: 'A **$B$-tree of order $m$** `order-m` stores at most $m-1$ keys per node with up to $m$ children, keeping all leaves at equal depth. The root holds at least one key while every other node stays at least half full.',
        detail: 'Non-root minimum is $\\lceil m/2 \\rceil - 1$ keys with $\\lceil m/2 \\rceil$ children. Wide nodes mean millions of keys fit in three or four levels.'
      },
      {
        term: 'Search by key separators',
        kind: 'method',
        statement: '**Search** `search` compares the key against ordered separators and descends into the bracketing child, costing one page read per level. A miss ends at the leaf where the key would sit.',
        detail: 'Binary search inside the node picks the child interval. Height $h$ bounds the cost to $h$ page reads plus any final record fetch.'
      },
      {
        term: 'Insert with splits',
        kind: 'method',
        statement: '**Insert** `split` drops the key into its leaf and **splits** full nodes by pushing the median key upward. Splits cascade only when every ancestor is also full, growing a new root in the worst case.',
        detail: 'Splitting $(a, b, c, d)$ at order $5$ keeps two keys per side and promotes the median. The promoted key routes future searches between the halves.'
      },
      {
        term: 'Delete with merge or borrow',
        kind: 'method',
        statement: '**Delete** `merge` removes the key then repairs underflow by **borrowing** from a rich sibling or **merging** with one, pulling the separator down. Merges may cascade upward and shrink the root.',
        detail: 'Internal keys are replaced by predecessor or successor before leaf deletion. Borrowing moves one key through the parent, merging concatenates two nodes plus the separator.'
      },
      {
        term: 'Height bounds',
        kind: 'theorem',
        statement: 'With minimum fanout **$t = \\lceil m/2 \\rceil$** `fanout`, a $B$-tree of height $h$ holding $n$ keys satisfies $n \\geq 2t^{h-1} - 1$, so height grows logarithmically as $h \\leq 1 + \\log_{t}((n+1)/2)$ with all divisions inside the logarithm. Doubling keys adds far less than one level.',
        detail: 'For $t = 50$ and $n = 10^6$, the bound gives $h \\leq 4$. Real trees sit near the bound since splits keep nodes well above minimum occupancy.'
      }
    ],
    examples: [
      {
        title: 'Trace: insert that splits a leaf',
        problem: 'Order $m = 5$ node holds keys $(10, 20, 30, 40)$ and key $25$ arrives. Show the split.',
        steps: [
          { label: 'Step  1', text: '```text\nbefore: [10 20 30 40] + insert 25\nsorted: [10 20 25 30 40]  (5 keys, over capacity 4)\nmedian: 25 promoted\n```\nFive keys exceed the four-key limit, so the node must divide.' },
          { label: 'Step 2', text: 'Left node keeps $(10, 20)$, right node keeps $(30, 40)$, and median $25$ moves up to the parent as the new separator between them.' },
          { label: 'Step 3', text: 'If the parent is also full it splits in turn, and a full root split grows the tree by one level with the median as the new root.' }
        ],
        result: 'Leaf divides into $(10, 20)$ and $(30, 40)$ with $25$ promoted to the parent.'
      },
      {
        title: 'Drill: height bound for a million keys',
        problem: 'Estimate the maximum height of a $B$-tree of order $101$ holding $10^6$ keys.',
        steps: [
          { label: 'Step 1', text: 'Minimum fanout is $t = \\lceil 101/2 \\rceil = 51$ children per non-root node, using ceiling division inside the fanout formula.' },
          { label: 'Step 2', text: 'Apply $h \\leq 1 + \\log_{t}((n+1)/2)$ with $n = 10^6$ and $t = 51$. The logarithm argument is near $5 \\times 10^5$.' },
          { label: 'Step 3', text: 'Since $51^3$ already exceeds $10^5$, the logarithm sits below $4$, giving $h \\leq 4$. Three or four page reads find any key.' }
        ],
        result: 'At most four levels deep for one million keys at order $101$.'
      }
    ],
    keyTakeaways: [
      'Order $m$ caps nodes at $m-1$ keys with $m$ children and half-full minimums elsewhere.',
      'Search descends one child per level for $h$ page reads on a balanced tree.',
      'Full inserts split at the median upward, possibly growing a new root.',
      'Deletes borrow from siblings or merge, with height growing logarithmically in key count.'
    ],
    quiz: [
      {
        q: 'A non-root node of a $B$-tree of order $m$ holds at least:',
        options: [
          '$m-1$ keys',
          'One key regardless of $m$',
          '$\\lceil m/2 \\rceil - 1$ keys',
          '$m$ keys with $m+1$ children'
        ],
        answer: 2,
        explanation: 'Step 1: Maximum capacity is $m-1$ keys. Step 2: Minimum occupancy is half-full rounding up, minus one for keys. Step 3: That formula is $\\lceil m/2 \\rceil - 1$ keys. Step 4: The root alone is exempt with a one-key minimum.'
      },
      // PYQ-pattern: node split with median promotion at given order
      {
        q: 'Inserting into a full order-$5$ leaf $(10, 20, 30, 40)$ with key $25$ promotes:',
        options: [`$25$`, `$20$`, `$30$`, 'No key, the leaf simply grows'],
        answer: 0,
        explanation: 'Step 1: Sorted overflow keys are $(10, 20, 25, 30, 40)$. Step 2: The median of five is the third key. Step 3: The third key is $25$. Step 4: Halves $(10, 20)$ and $(30, 40)$ remain below.'
      },
      {
        q: 'Underflow after delete is repaired by:',
        options: [
          'Splitting the node immediately',
          'Rebuilding the whole tree from scratch',
          'Promoting all keys to the root',
          'Borrowing from a sibling or merging with one through the parent separator'
        ],
        answer: 3,
        explanation: 'Step 1: Underflow means below minimum occupancy. Step 2: A rich sibling lends one key via the parent. Step 3: Otherwise siblings merge with the separator. Step 4: Splits handle overflow, not underflow.'
      },
      {
        q: 'Height of a $B$-tree in $n$ keys grows as:',
        options: [
          'Linearly in $n$',
          'Logarithmically in $n$ with base near half the order',
          'Quadratically in $n$',
          'Constant regardless of $n$'
        ],
        answer: 1,
        explanation: 'Step 1: Minimum fanout $t$ multiplies capacity per level. Step 2: Key capacity is exponential in height. Step 3: Inverting gives logarithmic height in $n$. Step 4: Linear and constant growth contradict the fanout math.'
      }
    ]
  },

  // ---------------------------------------------------------------- 8.3
  {
    sectionId: 'dbms-ch8-s3',
    readingTime: 10,
    intro: 'B-plus trees refine the B-tree for database scans by keeping values in linked leaves and using internal nodes purely for routing. Every search ends at a leaf, and ranges walk the leaf chain. Fanout math then predicts height within one level before any system is built.',
    objectives: [
      'Contrast $B$-tree and $B^{+}$-tree placement of keys, pointers and record data',
      'Trace point search and range scans over the linked leaf level',
      'Compute fanout and height from key, pointer and block sizes with ceiling arithmetic'
    ],
    concepts: [
      {
        term: 'Internal versus leaf roles',
        kind: 'definition',
        statement: 'In a **$B^{+}$-tree** `bplus` internal nodes hold only routing separators while leaves hold all keys with record pointers, chained in order. Every key appears in a leaf even when it also routes above.',
        detail: 'Internal copies are separators, not homes: deleting a leaf key may leave its routing copy standing. Leaf capacity counts key-pointer pairs, internal capacity counts key-child pairs.'
      },
      {
        term: 'Point search path',
        kind: 'method',
        statement: '**Search** `search-leaf` descends separators to the target leaf then locates the key within it, always touching exactly $h$ nodes. Duplicates cluster in adjacent leaves for grouped reads.',
        detail: 'No early exit at internal nodes exists, unlike $B$-trees. Uniform depth keeps cost predictable and prefetch-friendly.'
      },
      {
        term: 'Range scans on leaf links',
        kind: 'method',
        statement: '**Range scans** `range` locate the start leaf once then walk **sibling pointers** leaf to leaf, collecting qualifying entries in order. One descent serves ranges of any width.',
        detail: 'Internal nodes stay untouched after the initial descent. Forward and reverse chains support ascending and descending orderings alike.'
      },
      {
        term: 'Fanout from block sizes',
        kind: 'method',
        statement: '**Fanout** `fanout` divides usable block bytes by entry bytes: internal fanout near $B/(key + child)$ and leaf fanout near $B/(key + record)$ with header overhead removed. Larger blocks and smaller keys widen the tree.',
        detail: 'With $4$ KB blocks, $8$-byte keys and $8$-byte pointers, internal fanout approaches $250$ entries per node. Leaves with $20$-byte records hold fewer entries per block.'
      },
      {
        term: 'Height estimation',
        kind: 'theorem',
        statement: 'Height follows **$h = \\lceil \\log_{f}(N) \\rceil$** `height` behavior where $f$ is fanout and $N$ counts leaf entries: capacity multiplies by $f$ per level, so each extra level scales holdings hundredfold at $f = 100$. Bulk loading fills leaves near full to shave a level.',
        detail: 'At $f = 100$, two levels hold $10^4$ entries and three hold $10^6$. Root-to-leaf depth of three or four covers most deployed tables without caching tricks.'
      }
    ],
    examples: [
      {
        title: 'Trace: fanout and height for a student table',
        problem: 'Block $4096$ bytes, key $8$ bytes, child pointer $8$ bytes, record pointer $12$ bytes, $N = 10^6$ rows. Estimate internal fanout and height.',
        steps: [
          { label: 'Step 1', text: '```text\ninternal entry = 8 + 8 = 16 bytes\nfanout ~= 4096 / 16 = 256 children per node\nleaf entry = 8 + 12 = 20 bytes -> ~200 rows per leaf\n```\nAll divisions here size hardware entries and sit inside sizing prose backed by KaTeX $f \\approx 256$.' },
          { label: 'Step 2', text: 'Capacity at height $h$ scales as $f^{h-1}$ times leaf holdings: two levels already route $256$ leaves times $200$ rows, above $5 \\times 10^4$ rows.' },
          { label: 'Step 3', text: 'Three levels route $256^2$ leaves, far above $10^6$ rows, so $h = 3$ suffices with room to spare.' }
        ],
        result: 'Fanout near $256$ gives height $3$ for one million rows.'
      },
      {
        title: 'Drill: range scan over leaf chain',
        problem: 'Find students with marks from $60$ to $69$ in a $B^{+}$-tree keyed by marks. Contrast with a $B$-tree walk.',
        steps: [
          { label: 'Step 1', text: 'Descend once to the first leaf holding $60$ using internal separators, touching exactly $h$ nodes.' },
          { label: 'Step 2', text: 'Walk sibling links collecting $60$ through $69$ in order, reading consecutive leaves with sequential access.' },
          { label: 'Step 3', text: 'A $B$-tree would instead revisit internal nodes per key since values scatter across levels, costing extra random hops for the same range.' }
        ],
        result: 'One descent plus a leaf walk serves the whole range sequentially.'
      }
    ],
    keyTakeaways: [
      'Internal $B^{+}$ nodes route while leaves hold every key with record pointers in a linked chain.',
      'Point search always descends full height $h$ to the owning leaf.',
      'Ranges descend once then walk sibling links sequentially.',
      'Fanout from entry sizes predicts height logarithmically, usually three or four for large tables.'
    ],
    quiz: [
      // PYQ-pattern: fanout and height arithmetic from block and entry sizes
      {
        q: '$4$ KB blocks with $16$-byte internal entries give fanout near:',
        options: [`$16$`, `$64$`, `$256$`, `$4096$`],
        answer: 2,
        explanation: 'Step 1: Fanout divides block bytes by entry bytes. Step 2: The quotient is $4096$ divided by $16$. Step 3: That quotient equals $256$. Step 4: Header overhead trims it slightly in practice.'
      },
      {
        q: 'At fanout $100$, three levels index about:',
        options: ['$300$ rows', '$10^4$ rows', '$10^6$ rows', '$10^8$ rows'],
        answer: 2,
        explanation: 'Step 1: Capacity multiplies by $100$ per level. Step 2: Two levels hold near $10^4$. Step 3: Three levels hold near $10^6$. Step 4: Each level adds two zeroes at this fanout.'
      },
      {
        q: 'A $B^{+}$-tree differs from a $B$-tree in that:',
        options: [
          'Values live only in leaves with internal keys as routing copies',
          'Leaves are unordered heaps',
          'Internal nodes hold all record data',
          'Leaves never link to siblings'
        ],
        answer: 0,
        explanation: 'Step 1: Leaves hold every key plus pointers. Step 2: Internal keys only direct descent. Step 3: Sibling links order the leaf level. Step 4: The alternatives describe $B$-trees or heaps, not $B^{+}$ design.'
      },
      {
        q: 'Range scans favor $B^{+}$-trees because:',
        options: [
          'Each key needs a fresh root descent',
          'One descent plus sibling-leaf walk collects the interval sequentially',
          'Internal nodes store duplicate values',
          'Height grows linearly with range width'
        ],
        answer: 1,
        explanation: 'Step 1: The start key locates its leaf once. Step 2: Sibling pointers chain the interval. Step 3: Access stays sequential across leaves. Step 4: Fresh descents per key would waste the linkage.'
      }
    ]
  },

  // ---------------------------------------------------------------- 8.4
  {
    sectionId: 'dbms-ch8-s4',
    readingTime: 8,
    intro: 'Hashing trades ordering for constant-time point access, while file organization decides how rows physically cluster on disk. Static, dynamic and extendible hashing handle growth differently, and heap, sorted and hashed files serve different scan patterns. The closing choice pairs each workload with its layout.',
    objectives: [
      'Contrast static, dynamic and extendible hashing on growth and directory cost',
      'Trace bucket split and global-depth growth on inserts with overflow',
      'Choose heap, sorted and hashed files for scan, point and range workloads'
    ],
    concepts: [
      {
        term: 'Static hashing',
        kind: 'definition',
        statement: 'A **static hash** `static-hash` maps keys through $h(k)$ into a fixed bucket array with overflow chains for collisions. Point lookups cost near one bucket read until chains grow long.',
        detail: 'Fixed bucket count cannot track growth: doubling the data doubles average chain length. Rehashing everything into a larger array is the only reset.'
      },
      {
        term: 'Extendible hashing',
        kind: 'method',
        statement: '**Extendible hashing** `extendible` keeps a directory of $2^d$ pointers with global depth $d$, splitting only overflowing buckets and doubling the directory when local depth exceeds $d$. Growth stays local to hot buckets.',
        detail: 'Each bucket records local depth $d_b$: pointers sharing the bucket prefix alias it. Splits redistribute by the next hash bit, doubling the directory only when $d_b$ would pass $d$.'
      },
      {
        term: 'Linear hashing preview',
        kind: 'method',
        statement: '**Linear hashing** `linear` splits buckets in round-robin order instead of hottest-first, needing no directory. Overflow levels trigger the next split pointer advance, smoothing growth cost.',
        detail: 'The split pointer cycles through the current level before the level doubles. Point lookups check at most two candidate buckets under the level function.'
      },
      {
        term: 'Heap, sorted and hashed files',
        kind: 'definition',
        statement: '**Heap files** `heap` append inserts anywhere with a page directory, **sorted files** keep key order for ranges, and **hashed files** place rows by $h(k)$ for point access. No layout wins every workload.',
        detail: 'Heaps insert cheaply but scan fully. Sorted files scan ranges beautifully yet pay to maintain order. Hashed files answer points in near-constant hops but scatter ranges.'
      },
      {
        term: 'Collision and clustering costs',
        kind: 'insight',
        statement: '**Overflow chains** `overflow` lengthen point lookups linearly while **clustering** `cluster` groups related rows to shorten scans. Fill-factor targets leave headroom so splits stay rare.',
        detail: 'Load near $70$ to $80$ percent balances space against splits. Skewed hash functions defeat even generous headroom by piling keys into few buckets.'
      }
    ],
    examples: [
      {
        title: 'Trace: bucket split with directory doubling',
        problem: 'Extendible hashing with global depth $d = 1$ holds buckets $0$ and $1$ at local depth $1$. Bucket $0$ overflows with keys hashing $00$ and $10$. Show the repair.',
        steps: [
          { label: 'Step 1', text: '```text\nbefore: dir [p0 -> bucket0(d=1), p1 -> bucket1(d=1)]\nbucket0 overflows on 00 vs 10 collision\nlocal depth must rise 1 -> 2, exceeding global d=1\n```\nOne more bit is needed to separate the colliding keys.' },
          { label: 'Step 2', text: 'Double the directory to $d = 2$ with four pointers, then split bucket $0$ by the second hash bit: $00$ keys stay, $10$ keys move to the new bucket.' },
          { label: 'Step 3', text: 'Bucket $1$ keeps local depth $1$ with two aliasing pointers, while the split pair sits at local depth $2$. Only the hot bucket paid the split cost.' }
        ],
        result: 'Directory doubles to depth $2$ with bucket $0$ divided by hash-bit value.'
      },
      {
        title: 'Drill: pairing layouts with workloads',
        problem: 'Workload A bulk-loads sensor rows then scans date ranges. Workload B probes single keys by id. Assign heap, sorted and hashed files.',
        steps: [
          { label: 'Step 1', text: 'Workload A needs ordered scans after bulk load, so a sorted file on date with bulk-load fill near full minimizes scan passes.' },
          { label: 'Step 2', text: 'Workload B needs point probes, so a hashed file on id answers each probe in near-constant bucket reads.' },
          { label: 'Step 3', text: 'Heap files suit neither directly but stage raw ingestion before either layout is built, since appends never block on order.' }
        ],
        result: 'Ranges use sorted files, points use hashed files, and heaps stage ingestion.'
      }
    ],
    keyTakeaways: [
      'Static hashing fixes bucket count, so overflow chains grow with the data.',
      'Extendible hashing splits hot buckets locally and doubles the directory only when depths demand it.',
      'Heap files append freely, sorted files order ranges, and hashed files target points.',
      'Fill factors and hash uniformity decide whether theory meets practice.'
    ],
    quiz: [
      {
        q: 'Static hashing degrades under growth because:',
        options: [
          'Buckets split automatically',
          'Fixed bucket count forces longer overflow chains',
          'Directories double on every insert',
          'Keys must stay sorted'
        ],
        answer: 1,
        explanation: 'Step 1: Bucket count never changes. Step 2: More rows share the same buckets. Step 3: Chains lengthen and probes slow. Step 4: Only full rehashing resets the layout.'
      },
      // PYQ-pattern: directory doubling on bucket split at depth limits
      {
        q: 'A bucket at local depth $1$ overflows while global depth $d = 1$. Extendible hashing:',
        options: [
          'Splits without directory change',
          'Doubles the directory to $d = 2$ then splits by the next hash bit',
          'Rehashes every key into a heap file',
          'Merges two cold buckets instead'
        ],
        answer: 1,
        explanation: 'Step 1: Local depth would rise to $2$. Step 2: That exceeds global depth $1$. Step 3: The directory doubles to depth $2$. Step 4: The split then separates keys by the new bit.'
      },
      {
        q: 'Hashed files suit point lookups but not ranges since they:',
        options: [
          'Sort rows by hash order unrelated to key order',
          'Store rows in key-sorted pages',
          'Chain leaves in key order',
          'Keep one entry per block minimum'
        ],
        answer: 0,
        explanation: 'Step 1: Placement follows $h(k)$, not key magnitude. Step 2: Neighboring keys scatter across buckets. Step 3: Ranges therefore hop randomly. Step 4: Sorted and linked layouts serve ranges instead.'
      },
      {
        q: 'Heap files are best for:',
        options: [
          'Ordered range scans',
          'Cheap append ingestion before organized layouts are built',
          'Constant-time keyed probes',
          'Duplicate-free secondary search'
        ],
        answer: 1,
        explanation: 'Step 1: Heaps append anywhere via a page directory. Step 2: Inserts never pay ordering costs. Step 3: Scans and probes stay unstructured. Step 4: Hence heaps stage intake, not serving.'
      }
    ]
  }
]
