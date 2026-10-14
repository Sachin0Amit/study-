import type { SectionContent } from '../library'

/* ============================================================================
   Core Java Twelfth Edition master study content — Collections Framework
   Chapter 8: sections 8.1 to 8.4. Based on Horstmann Core Java Volume One,
   Chapter 9: lists, sets, queues, maps, views, algorithms, and selection.
   ============================================================================ */

export const javaCh08Content: SectionContent[] = [
  /* ---------------- 8.1 ---------------- */
  {
    sectionId: 'java-ch8-s1',
    readingTime: 9,
    intro: 'Lists keep insertion order while sets enforce uniqueness, and Horstmann presents both through the interface versus implementation split. This section compares ArrayList with LinkedList and HashSet with TreeSet on ordering and cost. It ends with iteration idioms and the equals hashCode contract that sets depend on.',
    objectives: [
      'Choose between ArrayList and LinkedList from access and insertion costs',
      'Choose between HashSet, LinkedHashSet, and TreeSet from ordering needs',
      'Apply the equals hashCode contract so sets behave correctly',
    ],
    concepts: [
      {
        term: 'ArrayList random access store',
        kind: 'definition',
        statement: 'An **ArrayList** wraps a resizable array behind `List<T>`, giving constant time indexed reads with amortized constant time appends at the end.',
        detail: 'Insertion in the middle shifts a suffix, so it costs linear time. Prefer it when reads dominate and order follows insertion.',
      },
      {
        term: 'LinkedList node chain',
        kind: 'definition',
        statement: 'A **LinkedList** chains doubly linked nodes behind `List<T>` and `Deque<T>`, so insertion beside a known iterator position costs constant time.',
        detail: 'Indexed get walks from the nearer end, so random access costs linear time. Prefer it for queue like workloads with heavy ends activity.',
      },
      {
        term: 'HashSet versus TreeSet ordering',
        kind: 'theorem',
        statement: 'A **HashSet** built as `new HashSet<>()` offers constant time membership with hash scattered order, while a **TreeSet** built as `new TreeSet<>()` keeps elements sorted at logarithmic cost per operation.',
        detail: 'TreeSet needs either natural ordering through Comparable or an explicit Comparator. LinkedHashSet preserves insertion order at a small bookkeeping premium.',
      },
      {
        term: 'Equals hashCode contract',
        kind: 'law',
        statement: 'The **contract** demands that equal objects share `hashCode()` values, because hash containers bucket by hash and compare only within a bucket.',
        detail: 'Mutating a key field after insertion strands the entry in the wrong bucket. Keep key fields final or never mutate them while stored.',
      },
      {
        term: 'Enhanced for and iterator removal',
        kind: 'method',
        statement: 'The **enhanced for loop** hides the `Iterator<T>` cursor, but structural removal during traversal must go through explicit `remove()` on that iterator.',
        detail: 'Removing through the collection inside a for each loop trips fail fast detection. An explicit iterator with remove keeps the cursor consistent.',
      },
    ],
    figures: [
      {
        caption: 'ArrayList stores elements contiguously for fast indexing, LinkedList chains nodes for cheap splicing.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="ArrayList blocks versus LinkedList nodes"><text x="170" y="50" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">ArrayList</text><rect x="50" y="70" width="60" height="44" fill="none" stroke="currentColor" stroke-width="2"/><text x="80" y="97" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Ada</text><rect x="110" y="70" width="60" height="44" fill="none" stroke="currentColor" stroke-width="2"/><text x="140" y="97" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Grace</text><rect x="170" y="70" width="60" height="44" fill="none" stroke="currentColor" stroke-width="2"/><text x="200" y="97" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Linus</text><rect x="230" y="70" width="60" height="44" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><text x="260" y="97" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">free</text><line x1="80" y1="130" x2="200" y2="130" stroke="currentColor" stroke-width="1.6"/><polygon points="200,130 190,124 190,136" fill="currentColor"/><text x="140" y="152" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">index jump</text><text x="540" y="50" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">LinkedList</text><rect x="420" y="70" width="70" height="44" fill="none" stroke="currentColor" stroke-width="2"/><text x="455" y="97" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Ada</text><rect x="515" y="70" width="70" height="44" fill="none" stroke="currentColor" stroke-width="2"/><text x="550" y="97" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Grace</text><rect x="610" y="70" width="70" height="44" fill="none" stroke="currentColor" stroke-width="2"/><text x="645" y="97" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Linus</text><line x1="490" y1="92" x2="511" y2="92" stroke="currentColor" stroke-width="1.6"/><polygon points="511,92 501,86 501,98" fill="currentColor"/><line x1="585" y1="92" x2="606" y2="92" stroke="currentColor" stroke-width="1.6"/><polygon points="606,92 596,86 596,98" fill="currentColor"/><text x="550" y="152" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">node hop</text><rect x="140" y="220" width="440" height="80" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="360" y="250" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Rule of thumb: index often, pick ArrayList.</text><text x="360" y="272" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Splice often at the ends, pick LinkedList or ArrayDeque.</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Roster edits with indexed access',
        problem: 'Maintain a class roster with middle insertions and indexed reads, then print every name in order.',
        steps: [
          { label: 'Step 1: Build the list', text: 'Start from an ArrayList seeded with three names:\n```java\nList<String> names = new ArrayList<>(List.of("Ada", "Grace", "Linus"));\nnames.add(1, "Edsger");\n```\nThe middle insertion shifts the suffix right by one slot.' },
          { label: 'Step 2: Read by index', text: 'Fetch the inserted element directly by position:\n```java\n// indexed-access-pattern: constant time read by position\nString second = names.get(1);\nSystem.out.println(second);\n```\nIt prints Edsger with a single array hop.' },
          { label: 'Step 3: Traverse in order', text: 'Walk the roster with the enhanced for loop for a clean read only pass:\n```java\nfor (String name : names) {\n    System.out.println(name);\n}\n```\nOutput order matches insertion order exactly.' },
        ],
        result: 'The roster reads Ada, Edsger, Grace, Linus with indexed access throughout.',
      },
      {
        title: 'Deduplication plus sorting with sets',
        problem: 'Remove duplicate fruit names from a delivery list, then present the survivors in alphabetical order.',
        steps: [
          { label: 'Step 1: Deduplicate by hash', text: 'Pour the delivery into a HashSet so duplicates collapse in constant time per element:\n```java\nList<String> delivery = List.of("pear", "apple", "pear", "fig");\nSet<String> unique = new HashSet<>(delivery);\n```\nThe set keeps apple, pear, and fig exactly once.' },
          { label: 'Step 2: Sort with a tree', text: 'Transfer the survivors into a TreeSet for natural ordering:\n```java\n// dedupe-then-sort-pattern: hash first for uniqueness, tree second for order\nSet<String> sorted = new TreeSet<>(unique);\nSystem.out.println(sorted);\n```\nIt prints apple, fig, pear in sorted order.' },
          { label: 'Step 3: Check membership fast', text: 'Probe the hash set for a single item in constant time:\n```java\nboolean hasFig = unique.contains("fig");\n```\nThe answer is true without any scan.' },
        ],
        result: 'Duplicates vanish by hashing and the survivors print alphabetically.',
      },
    ],
    keyTakeaways: [
      'ArrayList wins indexed reads while LinkedList wins splices at known positions.',
      'HashSet gives unordered uniqueness fast, TreeSet adds sorting at log cost.',
      'Equal objects must share hash codes or hash containers silently misbehave.',
      'Structural removal during traversal belongs to the iterator, not the for each loop.',
    ],
    quiz: [
      {
        q: 'When should LinkedList be preferred over ArrayList?',
        options: [
          'When indexed gets dominate and memory must stay compact',
          'When frequent splices happen at iterator positions or both ends',
          'When elements must be sorted at all times automatically',
          'When only constant time contains checks are needed',
        ],
        answer: 1,
        explanation: 'Step 1: ArrayList shifts suffixes on middle insertion. Step 2: LinkedList relinks a few pointers at a known node. Step 3: But indexed get walks node by node. Step 4: So splice heavy workloads favor LinkedList.',
      },
      {
        q: 'What breaks if equals is overridden without hashCode?',
        options: [
          'TreeSet ordering becomes case sensitive',
          'ArrayList iteration skips every second element',
          'Sorting throws because Comparator is missing',
          'HashSet may store equal objects twice in different buckets',
        ],
        answer: 3,
        explanation: 'Step 1: Hash containers bucket by hash code first. Step 2: Equal objects with different hashes land apart. Step 3: Within bucket comparison never meets across buckets. Step 4: Duplicates therefore survive, violating set semantics.',
      },
      {
        q: 'Why does removing inside a for each loop usually fail?',
        options: [
          'The loop removes through the collection, tripping fail fast detection',
          'The loop holds a write lock that blocks removal',
          'The loop copies elements so removal affects only the copy',
          'The loop requires a Comparator before any structural change',
        ],
        answer: 0,
        explanation: 'Step 1: For each hides an iterator with an expected change count. Step 2: Direct collection removal bumps the real count. Step 3: The mismatch is detected on the next iterator step. Step 4: Hence ConcurrentModificationException follows.',
      },
      {
        q: 'Which set keeps elements sorted with log time operations?',
        options: [
          'HashSet with default capacity',
          'LinkedHashSet with access order enabled',
          'TreeSet with natural ordering or a Comparator',
          'EnumSet over a large enum with many constants',
        ],
        answer: 2,
        explanation: 'Step 1: HashSet scatters by hash with no order promise. Step 2: LinkedHashSet preserves insertion, not sorted, order. Step 3: TreeSet is a balanced tree keyed by comparison. Step 4: Only TreeSet delivers sorted log time behavior.',
      },
    ],
  },
  /* ---------------- 8.2 ---------------- */
  {
    sectionId: 'java-ch8-s2',
    readingTime: 9,
    intro: 'Queues schedule work, deques serve both ends, and maps index values by keys, completing the concrete collection zoo. This section works through PriorityQueue ordering, ArrayDeque double ended use, and the HashMap TreeMap LinkedHashMap choice. It finishes with EnumSet, EnumMap, and WeakHashMap for their sharp special cases.',
    objectives: [
      'Operate queues, deques, and priority queues with the correct end methods',
      'Select HashMap, LinkedHashMap, or TreeMap from ordering and cost needs',
      'Deploy EnumSet, EnumMap, and WeakHashMap in their special cases',
    ],
    concepts: [
      {
        term: 'Queue head discipline',
        kind: 'definition',
        statement: 'A **Queue** such as `ArrayDeque<T>` or `PriorityQueue<T>` removes from the head with `remove()` and inspects with `peek()`, leaving ordering policy to the implementation.',
        detail: 'ArrayDeque gives first in first out order. PriorityQueue serves the smallest element first according to natural ordering or a Comparator.',
      },
      {
        term: 'Deque double ended operations',
        kind: 'method',
        statement: 'A **Deque** exposes both ends through `addFirst`, `addLast`, `removeFirst`, and `removeLast`, so one `ArrayDeque<T>` serves as stack and queue alike.',
        detail: 'Use it as a stack with push and pop semantics via addFirst and removeFirst. Horstmann recommends ArrayDeque over the legacy Stack class.',
      },
      {
        term: 'Map key value contract',
        kind: 'definition',
        statement: 'A **Map** binds each key to at most one value through `put`, `get`, and `merge`, with `HashMap<K, V>` giving constant time access and `TreeMap<K, V>` adding sorted keys.',
        detail: 'Keys must honor the equals hashCode contract for hashing, or comparability for trees. LinkedHashMap preserves insertion or access order on top of hashing.',
      },
      {
        term: 'Enum specialized containers',
        kind: 'insight',
        statement: '**EnumSet** created by `EnumSet.range(a, b)` and **EnumMap** created by `new EnumMap<>(keyType)` exploit the tiny fixed universe of an enum, beating general containers on both speed and memory through bit vectors and arrays.',
        detail: 'Reach for EnumSet for day flags and EnumMap for per constant tables. No hashing or tree balancing is involved at all.',
      },
      {
        term: 'Weak keys for canonical storage',
        kind: 'notation',
        statement: 'A **WeakHashMap** holds its keys through `WeakReference` entries, so an entry quietly vanishes once the application drops every strong reference to its key.',
        detail: 'Use it for caches keyed by objects with independent lifetimes. Values must never strongly reference their own keys or nothing is ever collected.',
      },
    ],
    figures: [
      {
        caption: 'HashMap scatters entries across buckets while TreeMap threads them in key order.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="HashMap buckets versus TreeMap order"><text x="180" y="50" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">HashMap buckets</text><rect x="60" y="70" width="70" height="34" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="95" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">bin 0</text><rect x="60" y="112" width="70" height="34" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="95" y="134" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">bin 1</text><rect x="60" y="154" width="70" height="34" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="95" y="176" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">bin 2</text><rect x="170" y="70" width="110" height="34" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="225" y="92" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">Ada - 95</text><rect x="170" y="112" width="110" height="34" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="225" y="134" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">Grace - 98</text><line x1="130" y1="87" x2="166" y2="87" stroke="currentColor" stroke-width="1.4"/><line x1="130" y1="129" x2="166" y2="129" stroke="currentColor" stroke-width="1.4"/><text x="540" y="50" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="14" font-weight="700" fill="currentColor">TreeMap chain</text><rect x="430" y="70" width="80" height="40" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="470" y="95" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">Ada</text><rect x="530" y="70" width="80" height="40" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="570" y="95" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">Grace</text><rect x="440" y="130" width="80" height="40" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="480" y="155" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">Linus</text><line x1="510" y1="90" x2="526" y2="90" stroke="currentColor" stroke-width="1.4"/><polygon points="526,90 516,84 516,96" fill="currentColor"/><line x1="540" y1="110" x2="505" y2="128" stroke="currentColor" stroke-width="1.4"/><polygon points="505,128 515,124 511,136" fill="currentColor"/><text x="360" y="250" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Hash for speed, tree for order, linked hash to remember insertion.</text><text x="360" y="274" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Same entries, three different promises about arrangement</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Double ended work with a deque and a heap',
        problem: 'Feed print jobs through both ends of a deque, then serve numeric tasks smallest first with a priority queue.',
        steps: [
          { label: 'Step 1: Work both ends', text: 'Push urgent jobs at the front and ordinary jobs at the back:\n```java\nDeque<String> jobs = new ArrayDeque<>();\njobs.addFirst("urgent-fix");\njobs.addLast("nightly-report");\njobs.addLast("backup");\nString next = jobs.removeFirst();\n```\nUrgent work leaves first while the rest keep arrival order.' },
          { label: 'Step 2: Serve smallest first', text: 'Drain integer tasks through a min heap:\n```java\n// smallest-first-pattern: heap head always holds the minimum\nQueue<Integer> tasks = new PriorityQueue<>(List.of(5, 1, 4));\nint smallest = tasks.remove();\n```\nThe removed value is one, regardless of insertion order.' },
          { label: 'Step 3: Peek without removing', text: 'Inspect the new head before committing to it:\n```java\nInteger head = tasks.peek();\nSystem.out.println(head);\n```\nIt prints four, and the queue keeps all remaining tasks.' },
        ],
        result: 'Deque ends and heap heads each serve their own scheduling policy.',
      },
      {
        title: 'Scoreboard with hash and tree maps',
        problem: 'Keep fast score lookups by name while also publishing an alphabetically ordered leaderboard.',
        steps: [
          { label: 'Step 1: Accumulate by hash', text: 'Store scores in a HashMap and adjust with merge:\n```java\nMap<String, Integer> scores = new HashMap<>();\nscores.put("Ada", 95);\nscores.merge("Ada", 5, Integer::sum);\n```\nThe merge adds five to the existing ninety five, yielding one hundred.' },
          { label: 'Step 2: Publish in key order', text: 'Copy into a TreeMap for the ordered view:\n```java\n// hash-then-tree-pattern: accumulate fast, publish sorted\nMap<String, Integer> ordered = new TreeMap<>(scores);\nSystem.out.println(ordered);\n```\nIteration now follows alphabetical key order.' },
          { label: 'Step 3: Read one entry', text: 'Fetch a single score in constant time from the hash map:\n```java\nint total = scores.get("Ada");\n```\nThe value is one hundred, matching the merged total.' },
        ],
        result: 'Hash map gives speed for updates, tree map gives order for display.',
      },
    ],
    keyTakeaways: [
      'Queues remove from the head while deques additionally serve both ends.',
      'PriorityQueue always serves the smallest element under the active ordering.',
      'HashMap is fastest unordered, TreeMap sorts, LinkedHashMap remembers insertion.',
      'EnumSet, EnumMap, and WeakHashMap each dominate one narrow special case.',
    ],
    quiz: [
      {
        q: 'Which deque call removes from the front?',
        options: [
          'addLast with the element to queue',
          'removeFirst, returning the head element',
          'peekLast, inspecting the tail element',
          'push followed by pop on the same end',
        ],
        answer: 2,
        explanation: 'Step 1: Deque names its ends First and Last explicitly. Step 2: addLast targets the tail, not the head. Step 3: peekLast only inspects without removing. Step 4: Only removeFirst takes from the front.',
      },
      {
        q: 'What order does PriorityQueue guarantee on removal?',
        options: [
          'Insertion order like a plain FIFO queue',
          'Smallest first under natural ordering or the Comparator',
          'Largest first regardless of the Comparator',
          'Random order to balance the heap faster',
        ],
        answer: 0,
        explanation: 'Step 1: A heap organizes by comparison, not arrival. Step 2: The head always holds the minimum. Step 3: Each removal restores that invariant. Step 4: Hence smallest first is the guaranteed policy.',
      },
      {
        q: 'When is LinkedHashMap the right map?',
        options: [
          'When keys must be sorted with log time range views',
          'When insertion or access order iteration matters with near hash speed',
          'When keys are weak and should vanish with their referents',
          'When the key universe is a small fixed enum',
        ],
        answer: 3,
        explanation: 'Step 1: Sorted keys belong to TreeMap. Step 2: Weak keys belong to WeakHashMap. Step 3: Enum keys belong to EnumMap. Step 4: LinkedHashMap alone preserves encounter order at hash speed.',
      },
      {
        q: 'Why prefer ArrayDeque over the legacy Stack class?',
        options: [
          'Because Stack cannot store null elements at all',
          'Because Stack sorts its elements automatically',
          'Because ArrayDeque is faster, cleaner, and not needlessly synchronized',
          'Because ArrayDeque extends Vector for compatibility',
        ],
        answer: 1,
        explanation: 'Step 1: Stack inherits the synchronized Vector machinery. Step 2: That synchronization taxes every single ended use. Step 3: ArrayDeque offers explicit double ended operations instead. Step 4: Therefore ArrayDeque is the recommended replacement.',
      },
    ],
  },
  /* ---------------- 8.3 ---------------- */
  {
    sectionId: 'java-ch8-s3',
    readingTime: 8,
    intro: 'Iterators walk collections, views reshape them without copying, and generic algorithms operate across implementations. This section covers cursor use with fail fast rules, unmodifiable synchronized and checked views, and subranges. It ends with sorting, searching, bulk operations, and array conversions from the Collections utilities.',
    objectives: [
      'Traverse safely with iterators and remove without fail fast errors',
      'Wrap collections in unmodifiable, synchronized, and checked views',
      'Apply sorting, binary search, and bulk operations correctly',
    ],
    concepts: [
      {
        term: 'Iterator cursor protocol',
        kind: 'definition',
        statement: 'An **Iterator** exposes `hasNext()`, `next()`, and `remove()`, advancing a cursor that stays consistent only when structural changes flow through it.',
        detail: 'ListIterator adds bidirectional travel with previous, plus set and add beside the cursor. Fail fast iterators detect foreign modifications and throw.',
      },
      {
        term: 'Unmodifiable views',
        kind: 'method',
        statement: 'Wrappers like `Collections.unmodifiableList(list)` expose a **read only view** that throws on mutation while still reflecting later changes to the backing list.',
        detail: 'They guard API boundaries cheaply. For a frozen snapshot instead, copy with List dot copyOf so later backing changes cannot leak through.',
      },
      {
        term: 'Synchronized and checked views',
        kind: 'notation',
        statement: '`Collections.synchronizedList` adds a **mutex view** for multithreaded access, while `Collections.checkedList` adds a **runtime type guard** that catches heap pollution at insertion.',
        detail: 'Synchronized views still need manual locking across iteration. Checked views pair well with legacy raw code during migration.',
      },
      {
        term: 'Sorting and binary search pair',
        kind: 'theorem',
        statement: '**Binary search** promises logarithmic lookup only on a list sorted by the same ordering, which `Collections.sort` establishes and `Collections.binarySearch` exploits.',
        detail: 'A negative return encodes the insertion point for a miss. Shuffling with an explicit Random keeps randomized algorithms reproducible.',
      },
      {
        term: 'Bulk operations and array bridges',
        kind: 'insight',
        statement: '**Bulk operations** like `removeIf`, `replaceAll`, and `retainAll` rewrite many elements in one pass, while `toArray` and `asList` bridge between collections and arrays.',
        detail: 'Prefer bulk methods over hand loops for clarity and cursor safety. Size the target array or pass a zero length one and let toArray allocate.',
      },
    ],
    figures: [
      {
        caption: 'Iterator cursor walks element by element; only iterator remove keeps the walk consistent.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Iterator cursor with safe remove path"><rect x="90" y="100" width="90" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="135" y="135" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">Ada</text><rect x="190" y="100" width="90" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="235" y="135" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">Grace</text><rect x="290" y="100" width="90" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="335" y="135" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">Linus</text><rect x="390" y="100" width="90" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="435" y="135" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">Edsger</text><line x1="135" y1="180" x2="135" y2="215" stroke="currentColor" stroke-width="1.6"/><polygon points="135,215 129,205 141,205" fill="currentColor"/><circle cx="235" cy="205" r="14" fill="none" stroke="currentColor" stroke-width="2"/><text x="235" y="210" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">it</text><line x1="235" y1="180" x2="235" y2="191" stroke="currentColor" stroke-width="1.6"/><rect x="520" y="100" width="140" height="60" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/><text x="590" y="125" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">removed via</text><text x="590" y="145" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">it dot remove</text><line x1="380" y1="130" x2="516" y2="130" stroke="currentColor" stroke-width="1.4"/><text x="360" y="270" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Direct list remove during the walk breaks the cursor.</text><text x="360" y="292" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Iterator remove is the only consistent structural edit</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Filtering a list mid traversal',
        problem: 'Delete every occurrence of one word from a mutable list while walking it exactly once.',
        steps: [
          { label: 'Step 1: Open an explicit iterator', text: 'Take control of the cursor instead of hiding it in a for each loop:\n```java\nList<String> words = new ArrayList<>(List.of("a", "b", "c", "a"));\nIterator<String> it = words.iterator();\n```\nThe iterator records the expected change count at creation.' },
          { label: 'Step 2: Remove through the cursor', text: 'Delete matches with iterator remove so cursor and list agree:\n```java\n// fail-fast-cursor-pattern: remove only through the iterator\nwhile (it.hasNext()) {\n    if (it.next().equals("a")) { it.remove(); }\n}\n```\nBoth copies of a vanish with no exception.' },
          { label: 'Step 3: Confirm the survivors', text: 'Print what remains after the single pass:\n```java\nSystem.out.println(words);\n```\nThe list now holds b and c in their original order.' },
        ],
        result: 'Iterator remove deletes both matches cleanly in one traversal.',
      },
      {
        title: 'Sort, search, and freeze a dataset',
        problem: 'Order a batch of scores, locate one entry fast, then hand out a read only handle to callers.',
        steps: [
          { label: 'Step 1: Sort the data', text: 'Establish the ordering that binary search requires:\n```java\nList<Integer> data = new ArrayList<>(List.of(3, 1, 2));\nCollections.sort(data);\n```\nThe list becomes one, two, three in natural order.' },
          { label: 'Step 2: Search logarithmically', text: 'Probe for the value two with binary search:\n```java\n// sort-then-search-pattern: binary search needs the same ordering\nint pos = Collections.binarySearch(data, 2);\nSystem.out.println(pos);\n```\nIt prints one, the index of two in the sorted list.' },
          { label: 'Step 3: Publish a safe view', text: 'Wrap the sorted list so recipients can read but never mutate:\n```java\nList<Integer> fixed = Collections.unmodifiableList(data);\nSystem.out.println(fixed);\n```\nAny mutating call on fixed throws UnsupportedOperationException.' },
        ],
        result: 'Sorted data supports fast search and ships behind an unmodifiable view.',
      },
    ],
    keyTakeaways: [
      'Iterators own the cursor, so structural edits must use iterator remove.',
      'Unmodifiable views guard boundaries while copies freeze true snapshots.',
      'Synchronized views need explicit locking across whole iterations.',
      'Binary search is only valid on lists sorted by the identical ordering.',
    ],
    quiz: [
      {
        q: 'What triggers ConcurrentModificationException during traversal?',
        options: [
          'Reading elements with get inside a plain index loop',
          'Modifying the collection directly while its iterator is active',
          'Calling hasNext one extra time after exhaustion',
          'Using ListIterator instead of Iterator for the walk',
        ],
        answer: 3,
        explanation: 'Step 1: Iterators snapshot an expected change count. Step 2: Direct structural edits change the real count. Step 3: The next iterator operation notices the skew. Step 4: The fail fast throw follows immediately.',
      },
      {
        q: 'How does an unmodifiable view relate to its backing list?',
        options: [
          'It copies all elements at wrap time and ignores later changes',
          'It reflects backing changes but rejects mutations through itself',
          'It locks the backing list against every thread permanently',
          'It sorts the backing list on every read automatically',
        ],
        answer: 1,
        explanation: 'Step 1: Views wrap rather than copy the original. Step 2: Reads pass through to current backing state. Step 3: Mutating methods throw instead of delegating. Step 4: Hence it mirrors changes while blocking writes.',
      },
      {
        q: 'What must hold before calling Collections dot binarySearch?',
        options: [
          'The list must be sorted by the same ordering used for searching',
          'The list must be an ArrayList rather than a LinkedList',
          'The list must be wrapped as unmodifiable first',
          'The list must contain no duplicate elements at all',
        ],
        answer: 2,
        explanation: 'Step 1: Binary search halves by comparison each probe. Step 2: Halving is sound only on ordered data. Step 3: A mismatched ordering misdirects every probe. Step 4: Therefore prior sorting by the same ordering is required.',
      },
      {
        q: 'Why add a checked view around legacy code?',
        options: [
          'To make iteration fail fast under concurrent edits',
          'To sort incoming elements before storage',
          'To reject wrong typed insertions at runtime with a clear exception',
          'To freeze the collection against all future change',
        ],
        answer: 0,
        explanation: 'Step 1: Raw legacy code can insert any object. Step 2: The pollution surfaces later at an unrelated cast. Step 3: A checked view validates each insertion immediately. Step 4: The failure then points at the true culprit call.',
      },
    ],
  },
  /* ---------------- 8.4 ---------------- */
  {
    sectionId: 'java-ch8-s4',
    readingTime: 7,
    intro: 'Choosing well matters more than memorizing every class, so Horstmann teaches selection by workload profile. This section maps random access, insertion, ordering, and memory needs to implementations. It ends with legacy replacements and a concurrency preview that points at thread safe collections.',
    objectives: [
      'Match access and mutation profiles to the cheapest implementation',
      'Weigh ordering guarantees against memory and speed costs',
      'Replace legacy containers and anticipate concurrent use',
    ],
    concepts: [
      {
        term: 'Access versus mutation profile',
        kind: 'insight',
        statement: 'The **profile** of a workload, meaning its mix of `get`, `add`, `contains`, insertions, and removals, decides between array, linked, hash, and tree stores.',
        detail: 'Count the dominant operation first. A structure that wins the rare case but loses the common case is the wrong default.',
      },
      {
        term: 'Ordering and uniqueness matrix',
        kind: 'definition',
        statement: 'The **matrix** crosses ordering needs of none, insertion, or sorted with membership needs, mapping each cell to `HashSet`, `LinkedHashSet`, or `TreeSet` and the map analogues.',
        detail: 'Lists preserve insertion order with duplicates. Sets trade duplicates for fast membership. Sorted variants add range operations at log cost.',
      },
      {
        term: 'Memory overhead awareness',
        kind: 'theorem',
        statement: '**Overhead** per element ranges from a bare `Object[]` slot through hash entries to full tree nodes with parent and child links plus color bits.',
        detail: 'Linked structures allocate a node per element. Hash tables reserve spare capacity to keep load low. Tiny enums collapse to bit sets.',
      },
      {
        term: 'Legacy replacement table',
        kind: 'notation',
        statement: 'The **replacements** retire `Vector` for `ArrayList`, `Stack` for `ArrayDeque`, and `Hashtable` for `HashMap` or `ConcurrentHashMap` under concurrency.',
        detail: 'Legacy classes synchronize every method and expose awkward inheritance. Modern choices synchronize only where the workload demands it.',
      },
      {
        term: 'Concurrency preview',
        kind: 'method',
        statement: 'A **concurrency preview** asks whether threads share the container, steering shared maps to `ConcurrentHashMap` and handoffs to `BlockingQueue` instead of synchronized views.',
        detail: 'Synchronized wrappers serialize every method call. Concurrent collections partition or go lock free for far better throughput.',
      },
    ],
    figures: [
      {
        caption: 'Container choice flowchart: order, mutation, and sharing decide the implementation.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Container selection flowchart"><rect x="250" y="24" width="220" height="56" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="48" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">Need key lookup</text><text x="360" y="66" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">yes or no</text><rect x="80" y="130" width="200" height="60" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="180" y="154" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Sequence: indexed</text><text x="180" y="172" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">ArrayList</text><rect x="440" y="130" width="200" height="60" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="540" y="154" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Mapping: ordered</text><text x="540" y="172" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">TreeMap</text><line x1="300" y1="80" x2="180" y2="126" stroke="currentColor" stroke-width="1.6"/><polygon points="180,126 190,120 190,132" fill="currentColor"/><line x1="420" y1="80" x2="540" y2="126" stroke="currentColor" stroke-width="1.6"/><polygon points="540,126 530,120 530,132" fill="currentColor"/><rect x="80" y="230" width="200" height="60" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="180" y="254" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Shared: concurrent</text><text x="180" y="272" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">ConcurrentHashMap</text><rect x="440" y="230" width="200" height="60" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="540" y="254" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Enum keys: tables</text><text x="540" y="272" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">EnumMap or EnumSet</text><text x="360" y="326" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Ask lookup, order, mutation, sharing, then commit</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Weekday rota with enum containers',
        problem: 'Track worked weekdays and one assignee per day with the smallest possible memory footprint.',
        steps: [
          { label: 'Step 1: Flag the days', text: 'Hold Monday to Friday in a bit vector EnumSet:\n```java\nenum Day { MON, TUE, WED, THU, FRI }\nSet<Day> workdays = EnumSet.range(Day.MON, Day.FRI);\n```\nFive constants collapse into a handful of bits.' },
          { label: 'Step 2: Assign by array map', text: 'Index assignees by day in an array backed EnumMap:\n```java\n// enum-table-pattern: fixed key universe stored as bits and arrays\nMap<Day, String> rota = new EnumMap<>(Day.class);\nrota.put(Day.MON, "Ada");\nrota.put(Day.FRI, "Grace");\n```\nNo hashing or tree nodes are allocated.' },
          { label: 'Step 3: Query the rota', text: 'Look up Friday cover directly:\n```java\nString friday = rota.get(Day.FRI);\nSystem.out.println(friday);\n```\nIt prints Grace with array indexing speed.' },
        ],
        result: 'Enum containers cover the rota in bits and one small array.',
      },
      {
        title: 'Migrating legacy containers forward',
        problem: 'Replace Vector and Hashtable uses with modern equivalents while preserving the stored data.',
        steps: [
          { label: 'Step 1: Convert the vector', text: 'Copy legacy Vector contents into an ArrayList:\n```java\nVector<String> legacy = new Vector<>(List.of("a", "b"));\nList<String> modern = new ArrayList<>(legacy);\n```\nThe copy constructor preserves order and drops needless synchronization.' },
          { label: 'Step 2: Convert the table', text: 'Move Hashtable entries into a HashMap:\n```java\n// legacy-swap-pattern: copy out of synchronized relics, then discard them\nMap<String, String> table = new Hashtable<>();\ntable.put("os", "linux");\nMap<String, String> map = new HashMap<>(table);\n```\nSingle threaded code immediately runs faster.' },
          { label: 'Step 3: Plan for sharing', text: 'Choose the concurrent upgrade path when threads are involved:\n```java\nMap<String, String> shared = new ConcurrentHashMap<>(map);\n```\nConcurrentHashMap partitions instead of locking the whole table.' },
        ],
        result: 'Legacy data moves forward and shared uses gain a concurrent home.',
      },
    ],
    keyTakeaways: [
      'Profile the workload first, then pick array, linked, hash, or tree stores.',
      'Pay for ordering only when iteration order is a real requirement.',
      'Retire Vector, Stack, and Hashtable in favor of modern replacements.',
      'Shared containers deserve concurrent implementations, not blanket synchronization.',
    ],
    quiz: [
      {
        q: 'Default choice for a read heavy indexed list?',
        options: [
          'ArrayList for compact storage and constant time get',
          'LinkedList for pointer chasing on every read',
          'TreeSet for sorted uniqueness instead of indexing',
          'PriorityQueue for heap ordered positional access',
        ],
        answer: 0,
        explanation: 'Step 1: Indexed reads favor contiguous storage. Step 2: ArrayList get is a single offset computation. Step 3: LinkedList get walks node by node. Step 4: Therefore ArrayList is the read heavy default.',
      },
      {
        q: 'Which structure preserves insertion order with fast lookup?',
        options: [
          'HashSet with default scattering',
          'TreeSet with a custom Comparator',
          'LinkedHashSet or LinkedHashMap with insertion order',
          'PriorityQueue with natural ordering',
        ],
        answer: 2,
        explanation: 'Step 1: HashSet offers speed without order. Step 2: TreeSet offers sorted order, not insertion order. Step 3: PriorityQueue orders by comparison only. Step 4: Only the linked hash variants remember encounter order.',
      },
      {
        q: 'What is the main cost of TreeSet versus HashSet?',
        options: [
          'TreeSet needs log time per operation plus Comparable or Comparator support',
          'TreeSet needs synchronized blocks around every call',
          'TreeSet forbids null elements in all configurations',
          'TreeSet copies the whole table on every insertion',
        ],
        answer: 1,
        explanation: 'Step 1: Tree operations descend a balanced structure. Step 2: Each level costs one comparison. Step 3: Depth grows with the log of size. Step 4: Comparability is therefore mandatory, unlike hashing.',
      },
      {
        q: 'Shared map under heavy concurrent updates needs what?',
        options: [
          'A synchronized HashMap view for whole table locking',
          'A TreeMap with an external global mutex',
          'A Hashtable for legacy method level locking',
          'A ConcurrentHashMap with partitioned lock free reads',
        ],
        answer: 3,
        explanation: 'Step 1: Whole table locks serialize all writers. Step 2: Partitioning lets disjoint bins proceed together. Step 3: Reads proceed without locking at all. Step 4: ConcurrentHashMap therefore scales far better.',
      },
    ],
  },
]

export const javaCh8Content = javaCh08Content
