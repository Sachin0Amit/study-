import type { SectionContent } from '../library'

/* ============================================================================
   Core Java Twelfth Edition master study content — Streams, Functional Pipelines
   Chapter 10: sections 10.1 to 10.4. Based on Horstmann Core Java Volume Two,
   Chapter 1: operations, collectors, optionals, and parallel streams.
   ============================================================================ */

export const javaCh10Content: SectionContent[] = [
  /* ---------------- 10.1 ---------------- */
  {
    sectionId: 'java-ch10-s1',
    readingTime: 8,
    intro: 'Streams process data declaratively, saying what to compute rather than how to loop, which is the shift Horstmann opens Volume Two with. This section builds streams from collections, arrays, and generator methods. It explains lazy intermediate operations, eager terminals, and the flatMap pattern that flattens nested structure.',
    objectives: [
      'Create streams from collections, arrays, and generator methods',
      'Chain filter, map, and flatMap into lazy pipelines',
      'Distinguish intermediate operations from terminal operations',
    ],
    concepts: [
      {
        term: 'Stream creation sources',
        kind: 'definition',
        statement: 'A **stream** springs from `collection.stream()`, `Stream.of(values)`, `Arrays.stream(array)`, or generators like `Stream.iterate(seed, f)` for tasks such as counting long words.',
        detail: 'Collection streams traverse current elements without copying. Infinite generators must meet a short circuiting operation like limit or findFirst.',
      },
      {
        term: 'Filter map flatMap trio',
        kind: 'method',
        statement: 'The **transformation trio** of `filter`, `map`, and `flatMap` selects elements, transforms them with `String::toUpperCase` style functions, and flattens nested streams into one flow.',
        detail: 'Filter keeps the type while map may change it. FlatMap splices each element mini stream into the main pipeline, as with splitting lines into words.',
      },
      {
        term: 'Lazy intermediate operations',
        kind: 'theorem',
        statement: '**Laziness** means intermediate operations record intent without work, so `limit(3)` can stop upstream generation after three elements instead of processing millions.',
        detail: 'Operations fuse into a single pass when the terminal runs. Side effects inside intermediates are discouraged because fusion may skip or reorder calls.',
      },
      {
        term: 'Terminal operations',
        kind: 'notation',
        statement: 'A **terminal** such as `count`, `findFirst`, `anyMatch`, or `toList` launches the pipeline and yields a concrete answer, consuming the stream so it cannot be reused.',
        detail: 'Short circuiting terminals stop early on infinite sources. Reduction terminals fold everything when no early exit applies.',
      },
      {
        term: 'Substream extraction and concat',
        kind: 'insight',
        statement: '**Substreams** from `limit`, `skip`, `takeWhile`, and `dropWhile` carve windows, while `Stream.concat(a, b)` joins two flows, with `distinct` and `sorted` reshaping along the way.',
        detail: 'TakeWhile stops at the first failure on ordered streams. Sorted needs comparability or a Comparator and buffers the whole encounter.',
      },
    ],
    figures: [
      {
        caption: 'A lazy pipeline fuses filter and map into one pass launched by the terminal count.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Stream pipeline from source through filter and map to terminal"><rect x="30" y="130" width="130" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="95" y="160" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Source</text><text x="95" y="182" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">list dot stream</text><rect x="200" y="130" width="130" height="80" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="265" y="160" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">filter</text><text x="265" y="182" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">lazy, keeps some</text><rect x="370" y="130" width="130" height="80" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="435" y="160" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">map</text><text x="435" y="182" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">lazy, reshapes</text><rect x="540" y="130" width="150" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="615" y="160" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">count</text><text x="615" y="182" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">terminal, launches</text><line x1="160" y1="170" x2="196" y2="170" stroke="currentColor" stroke-width="1.8"/><polygon points="196,170 186,164 186,176" fill="currentColor"/><line x1="330" y1="170" x2="366" y2="170" stroke="currentColor" stroke-width="1.8"/><polygon points="366,170 356,164 356,176" fill="currentColor"/><line x1="500" y1="170" x2="536" y2="170" stroke="currentColor" stroke-width="1.8"/><polygon points="536,170 526,164 526,176" fill="currentColor"/><text x="360" y="270" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor">Nothing flows until the terminal pulls; then one fused pass runs.</text><text x="360" y="292" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Reuse after a terminal throws IllegalStateException</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Counting long uppercase words',
        problem: 'Count the words starting with one letter and uppercase them, using a single declarative pipeline.',
        steps: [
          { label: 'Step 1: Open the stream', text: 'Stream the word list without copying it:\n```java\nList<String> words = List.of("apple", "pear", "apricot");\n```\nThe stream views the same three elements in encounter order.' },
          { label: 'Step 2: Filter then map lazily', text: 'Keep a words and uppercase the survivors, launching with count:\n```java\n// filter-map-pattern: select first, transform second, launch last\nlong count = words.stream()\n    .filter(w -> w.startsWith("a"))\n    .map(String::toUpperCase)\n    .peek(System.out::println)\n    .count();\n```\nAPPLE and APRICOT print while the count becomes two.' },
          { label: 'Step 3: Respect single use', text: 'Remember the consumed stream cannot run again:\n```java\nSystem.out.println(count);\n```\nA second terminal on the same stream would throw IllegalStateException.' },
        ],
        result: 'The pipeline prints two uppercased words and counts two.',
      },
      {
        title: 'Flattening nested lists with flatMap',
        problem: 'Merge a list of integer lists into one flat list, keeping only the first three values.',
        steps: [
          { label: 'Step 1: Nest the data', text: 'Build two small inner lists inside one outer list:\n```java\nList<List<Integer>> nested = List.of(List.of(1, 2), List.of(3, 4));\n```\nA plain map would yield a stream of lists, not of integers.' },
          { label: 'Step 2: Flatten and trim', text: 'Splice inner streams together and stop after three elements:\n```java\n// flatten-then-trim-pattern: flatMap splices, limit short circuits\nList<Integer> flat = nested.stream()\n    .flatMap(List::stream)\n    .limit(3)\n    .toList();\nSystem.out.println(flat);\n```\nLaziness means the fourth element is never even pulled.' },
          { label: 'Step 3: Confirm the window', text: 'Check the collected window contents:\n```java\nboolean ok = flat.equals(List.of(1, 2, 3));\nSystem.out.println(ok);\n```\nIt prints true, confirming order survived flattening.' },
        ],
        result: 'FlatMap plus limit yields one, two, three in a single pass.',
      },
    ],
    keyTakeaways: [
      'Streams come from collections, arrays, literals, and generator methods.',
      'Filter selects, map transforms, and flatMap splices nested flows.',
      'Intermediates stay lazy until a terminal launches the fused pass.',
      'Consumed streams cannot be reused, and windows come from limit and skip.',
    ],
    quiz: [
      {
        q: 'What happens before any terminal runs?',
        options: [
          'Each intermediate executes immediately in its own thread',
          'Nothing executes; intermediates only record the pipeline plan',
          'The source collection is sorted as a side effect',
          'Elements are copied into a buffer eagerly',
        ],
        answer: 1,
        explanation: 'Step 1: Intermediate operations return new stream stages. Step 2: No element is pulled without a terminal. Step 3: The terminal fuses stages into one pass. Step 4: Hence nothing runs beforehand.',
      },
      {
        q: 'When is flatMap required instead of map?',
        options: [
          'When each element maps to a stream that must be spliced into one flow',
          'When the mapping function throws a checked exception',
          'When elements must be sorted before transforming',
          'When the stream must run in parallel automatically',
        ],
        answer: 0,
        explanation: 'Step 1: Map wraps each result as one element. Step 2: Stream valued results would nest streams. Step 3: FlatMap concatenates those inner streams. Step 4: Flattening nested structure is its exact job.',
      },
      {
        q: 'Why can limit work on an infinite stream?',
        options: [
          'Infinite streams are secretly bounded by memory size',
          'Limit switches the pipeline to parallel mode first',
          'Laziness pulls only as many elements as the terminal needs',
          'The source generator stops after a fixed default count',
        ],
        answer: 2,
        explanation: 'Step 1: Generators produce on demand per pull. Step 2: Limit cancels after its quota. Step 3: Upstream stages never generate beyond demand. Step 4: Short circuiting thus tames infinity.',
      },
      {
        q: 'What follows a terminal operation on the same stream?',
        options: [
          'The pipeline replays from the cached elements',
          'An IllegalStateException because the stream is consumed',
          'An empty result computed in constant time',
          'Automatic conversion to a parallel stream',
        ],
        answer: 3,
        explanation: 'Step 1: Terminals drain the one shot traversal. Step 2: Internal state marks the stream consumed. Step 3: A second terminal finds no elements to pull. Step 4: The API reports this misuse by throwing.',
      },
    ],
  },
  /* ---------------- 10.2 ---------------- */
  {
    sectionId: 'java-ch10-s2',
    readingTime: 9,
    intro: 'Collectors turn finished pipelines into the containers and summaries programs actually need. This section gathers with toList, toSet, and toMap with merge handling, then groups and partitions with downstream collectors. It ends with joining, summarizing, and custom reduction shapes.',
    objectives: [
      'Collect results into lists, sets, and maps with merge rules',
      'Group and partition elements with downstream collectors',
      'Summarize with joining, statistics, and custom reductions',
    ],
    concepts: [
      {
        term: 'Basic collectors toList toSet',
        kind: 'definition',
        statement: '**Terminal collectors** like `Collectors.toList()` and `Collectors.toSet()` gather surviving elements, with `toList()` preserving encounter order for ordered streams.',
        detail: 'The newer toList stream method returns an unmodifiable list. The collector form historically returns a mutable ArrayList open to later edits.',
      },
      {
        term: 'Collecting into maps with merge',
        kind: 'method',
        statement: 'The `Collectors.toMap(keyMapper, valueMapper, merge)` collector needs a **merge function** such as `(a, b) -> a` whenever two elements map to one key.',
        detail: 'Without a merge rule, duplicate keys throw IllegalStateException. TreeMap variants accept a map supplier for sorted results.',
      },
      {
        term: 'Grouping and partitioning',
        kind: 'notation',
        statement: '**Grouping** with `groupingBy(String::length)` files elements by classifier, while **partitioning** with `partitioningBy(predicate)` splits them into exactly true and false buckets.',
        detail: 'Grouping yields a map from key to list. Partitioning always returns both buckets, empty or not, which simplifies downstream reporting.',
      },
      {
        term: 'Downstream collectors',
        kind: 'theorem',
        statement: 'A **downstream collector** such as `groupingBy(key, counting())` post processes each bucket, turning raw lists into counts, sets, maxima, or joined strings.',
        detail: 'Compose mapping plus counting or filtering plus joining per group. Mapping downstream avoids building intermediate lists entirely.',
      },
      {
        term: 'Joining and summarizing',
        kind: 'insight',
        statement: '**Joining** with `joining(", ")` concatenates with delimiters, while `summarizingInt` and `reducing` fold elements into statistics or single custom values.',
        detail: 'Prefer joining over manual StringBuilder loops in pipelines. Teeing runs two collectors at once and merges their results.',
      },
    ],
    figures: [
      {
        caption: 'groupingBy files words by length, then a downstream counter summarizes each bucket.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Grouping by length with downstream counting"><rect x="40" y="100" width="130" height="120" fill="none" stroke="currentColor" stroke-width="2"/><text x="105" y="130" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Words</text><text x="105" y="152" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">apple pear</text><text x="105" y="170" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">fig apricot</text><text x="105" y="188" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">plum</text><rect x="250" y="60" width="170" height="70" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="335" y="86" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">length 3</text><text x="335" y="108" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">fig : count 1</text><rect x="250" y="150" width="170" height="70" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="335" y="176" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">length 4</text><text x="335" y="198" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">pear plum : 2</text><rect x="250" y="240" width="170" height="70" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="335" y="266" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">length 5 plus</text><text x="335" y="288" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">apple apricot : 2</text><rect x="490" y="130" width="190" height="80" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="160" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">counting</text><text x="585" y="182" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">downstream per key</text><line x1="170" y1="140" x2="246" y2="95" stroke="currentColor" stroke-width="1.4"/><line x1="170" y1="160" x2="246" y2="185" stroke="currentColor" stroke-width="1.4"/><line x1="170" y1="180" x2="246" y2="275" stroke="currentColor" stroke-width="1.4"/><line x1="420" y1="95" x2="486" y2="160" stroke="currentColor" stroke-width="1.4"/><line x1="420" y1="185" x2="486" y2="170" stroke="currentColor" stroke-width="1.4"/><line x1="420" y1="275" x2="486" y2="180" stroke="currentColor" stroke-width="1.4"/><text x="360" y="336" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">Classifier files, downstream collector summarizes</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Indexing names by initial with merges',
        problem: 'Build a map from first letter to names, concatenating entries when two names share an initial.',
        steps: [
          { label: 'Step 1: Stream the names', text: 'Start from three names with a shared initial:\n```java\nList<String> names = List.of("Ada", "Alan", "Grace");\n```\nAda and Alan collide on the letter A.' },
          { label: 'Step 2: Collect with a merge rule', text: 'Map initial to name and join collisions with a comma:\n```java\n// merge-on-collision-pattern: duplicate keys combine instead of throwing\nMap<Character, String> byInitial = names.stream()\n    .collect(Collectors.toMap(\n        s -> s.charAt(0),\n        s -> s,\n        (a, b) -> a + ", " + b));\nSystem.out.println(byInitial);\n```\nA maps to Ada plus Alan while G maps to Grace.' },
          { label: 'Step 3: Read one bucket', text: 'Fetch the merged A entry directly:\n```java\nSystem.out.println(byInitial.get(Character.valueOf("A".charAt(0))));\n```\nIt prints the combined Ada and Alan string.' },
        ],
        result: 'Duplicate initials merge into one comma joined entry each.',
      },
      {
        title: 'Grouping words by length with counts',
        problem: 'Report how many words have each length, and separately split short words from long ones.',
        steps: [
          { label: 'Step 1: Group with counting downstream', text: 'Classify by length and count each bucket:\n```java\nList<String> words = List.of("apple", "pear", "fig", "plum");\nMap<Integer, Long> byLength = words.stream()\n    .collect(Collectors.groupingBy(String::length, Collectors.counting()));\nSystem.out.println(byLength);\n```\nLengths three, four, and five map to one, two, and one.' },
          { label: 'Step 2: Partition short versus long', text: 'Split at length four into true and false lists:\n```java\n// split-report-pattern: partitioning always yields both buckets\nMap<Boolean, List<String>> shortVsLong = words.stream()\n    .collect(Collectors.partitioningBy(w -> w.length() <= 4));\nSystem.out.println(shortVsLong.get(true));\n```\nThe true bucket holds pear, fig, and plum.' },
          { label: 'Step 3: Join one bucket for display', text: 'Render the short bucket as a single line:\n```java\nString line = shortVsLong.get(true).stream().collect(Collectors.joining(", "));\nSystem.out.println(line);\n```\nIt prints pear, fig, plum in encounter order.' },
        ],
        result: 'Length counts and the short long split both derive from one stream shape.',
      },
    ],
    keyTakeaways: [
      'Basic collectors gather into lists, sets, and maps with order promises.',
      'Map collectors need merge functions wherever keys can collide.',
      'Grouping files by key while partitioning always yields both buckets.',
      'Downstream collectors summarize buckets without intermediate lists.',
    ],
    quiz: [
      {
        q: 'What happens on duplicate keys without a merge function?',
        options: [
          'The later value silently overwrites the earlier one',
          'toMap throws IllegalStateException on the collision',
          'Both values are stored in a hidden list automatically',
          'The pipeline switches to parallel mode and retries',
        ],
        answer: 2,
        explanation: 'Step 1: The two argument toMap assumes unique keys. Step 2: A collision has no rule to resolve it. Step 3: The collector reports the ambiguity by throwing. Step 4: A merge function is therefore mandatory for collisions.',
      },
      {
        q: 'How does partitioningBy differ from groupingBy?',
        options: [
          'Partitioning always returns true and false buckets, grouping returns present keys only',
          'Partitioning runs in parallel while grouping stays sequential',
          'Partitioning sorts buckets while grouping preserves insertion',
          'Partitioning counts while grouping lists elements',
        ],
        answer: 0,
        explanation: 'Step 1: Partitioning classifies by a boolean predicate. Step 2: Both outcomes exist as keys regardless. Step 3: Grouping creates one entry per observed key. Step 4: Empty groups therefore appear only under partitioning.',
      },
      {
        q: 'What does groupingBy with counting downstream produce?',
        options: [
          'A map from key to the list of matching elements',
          'A map from key to the number of matching elements',
          'A single total across all groups combined',
          'A sorted list of the distinct classifier keys',
        ],
        answer: 3,
        explanation: 'Step 1: The classifier files elements by key. Step 2: Counting replaces each bucket list with its size. Step 3: Values become Long counts, not lists. Step 4: Hence each key maps to its group size.',
      },
      {
        q: 'Why prefer joining over manual StringBuilder loops?',
        options: [
          'Joining parallelizes string allocation across cores',
          'Joining handles delimiters, prefixes, and empty streams declaratively',
          'Joining avoids all intermediate string objects',
          'Joining sorts elements before concatenating them',
        ],
        answer: 1,
        explanation: 'Step 1: Manual loops manage separators with edge cases. Step 2: Joining declares delimiter and empty behavior once. Step 3: Pipelines stay readable without loop scaffolding. Step 4: Declarative concatenation is therefore cleaner.',
      },
    ],
  },
  /* ---------------- 10.3 ---------------- */
  {
    sectionId: 'java-ch10-s3',
    readingTime: 7,
    intro: 'Null references cause the most dreaded runtime failures, and Optional forces those absence decisions into the open. This section builds optionals safely, consumes them with orElse versus orElseGet, and chains map with flatMap. It ends with the misuse patterns Horstmann warns against, such as optional fields and careless get calls.',
    objectives: [
      'Create Optional values without reintroducing null hazards',
      'Choose orElse versus orElseGet for eager and lazy defaults',
      'Chain map, filter, and flatMap instead of branching on presence',
    ],
    concepts: [
      {
        term: 'Optional as explicit absence',
        kind: 'definition',
        statement: 'An **Optional** such as `Optional.ofNullable(value)` is a container holding either one value or nothing, making absence visible in the type instead of a hidden `null`.',
        detail: 'Never assign null to an Optional variable itself. Empty means no value, present means exactly one value ready for mapping.',
      },
      {
        term: 'Eager orElse versus lazy orElseGet',
        kind: 'method',
        statement: 'Use **orElseGet** with a `Supplier` for expensive defaults so the fallback builds only when needed, reserving `orElse` for cheap constants like `orElse("none")`.',
        detail: 'orElse always constructs its argument first. orElseThrow with a supplier documents the truly impossible absence with a precise exception.',
      },
      {
        term: 'Map filter flatMap chains',
        kind: 'notation',
        statement: '**Chaining** with `map(String::trim)` plus `filter` plus `flatMap` transforms present values and skips every step cleanly when empty, replacing nested presence branches.',
        detail: 'Map applies one level functions. FlatMap splices Optional returning functions without nesting containers. Filter converts unwanted values back to empty.',
      },
      {
        term: 'Optional misuse patterns',
        kind: 'insight',
        statement: '**Misuse** includes `Optional` fields, `Optional` parameters, `get()` without `isPresent()`, and `of(null)`, each reintroducing the hazards the type was built to remove.',
        detail: 'Return Optional from find style methods but store plain nullable free state internally. Serialize plain values, never the container.',
      },
      {
        term: 'Optional to stream bridge',
        kind: 'theorem',
        statement: 'The **stream bridge** via `optional.stream()` yields zero or one element, letting `flatMap(Optional::stream)` filter and unwrap many optionals in one pipeline.',
        detail: 'Collecting after the bridge drops empties automatically. IfPresent with a Consumer handles side effects without unwrapping by hand.',
      },
    ],
    figures: [
      {
        caption: 'Optional branches: present values flow through map, empty skips to the default supplier.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Optional present versus empty flow"><rect x="270" y="30" width="180" height="64" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="56" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Optional value</text><text x="360" y="76" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">present or empty</text><rect x="60" y="150" width="220" height="110" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="170" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Present path</text><text x="170" y="200" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">map, filter, flatMap</text><text x="170" y="220" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">unwrap or keep chaining</text><rect x="440" y="150" width="220" height="110" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="550" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Empty path</text><text x="550" y="200" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">skip transforms</text><text x="550" y="220" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">orElseGet supplies</text><line x1="310" y1="94" x2="170" y2="146" stroke="currentColor" stroke-width="1.6"/><polygon points="170,146 180,142 178,152" fill="currentColor"/><line x1="410" y1="94" x2="550" y2="146" stroke="currentColor" stroke-width="1.6"/><polygon points="550,146 542,152 540,142" fill="currentColor"/><text x="360" y="310" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-style="italic" fill="currentColor" opacity="0.8">No branch throws; absence travels openly to the default</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Directory lookup with a lazy default',
        problem: 'Look up employee three in a small directory, uppercasing hits and manufacturing a ticketed placeholder on misses.',
        steps: [
          { label: 'Step 1: Wrap the nullable hit', text: 'Convert the possibly missing map value into an honest container:\n```java\nMap<Integer, String> directory = Map.of(1, "Ada", 2, "Grace");\nOptional<String> hit = Optional.ofNullable(directory.get(3));\n```\nKey three is absent, so hit is empty rather than null.' },
          { label: 'Step 2: Transform then default lazily', text: 'Uppercase present names and build the placeholder only on absence:\n```java\n// optional-chain-pattern: transform first, supply default last\nString display = hit\n    .map(String::toUpperCase)\n    .orElseGet(() -> "UNKNOWN-3");\nSystem.out.println(display);\n```\nIt prints UNKNOWN-3 without ever touching a null.' },
          { label: 'Step 3: Confirm the present path', text: 'Repeat for a present key to see the transform apply:\n```java\nString ada = Optional.ofNullable(directory.get(1)).map(String::toUpperCase).orElse("none");\nSystem.out.println(ada);\n```\nIt prints ADA, proving the same chain serves both paths.' },
        ],
        result: 'Lookups print UNKNOWN-3 on miss and ADA on hit with no null checks.',
      },
      {
        title: 'Parsing a padded number safely',
        problem: 'Trim a padded numeric string, keep it only when all characters are digits, and parse it with a minus one fallback.',
        steps: [
          { label: 'Step 1: Trim inside the container', text: 'Start from a padded string and normalize without branching:\n```java\nOptional<String> raw = Optional.of(" 42 ");\n```\nThe value stays wrapped through every transformation.' },
          { label: 'Step 2: Validate with flatMap', text: 'Reject non digit content by returning empty from the spliced function:\n```java\n// validate-then-parse-pattern: flatMap empties invalid input early\nint value = raw.map(String::trim)\n    .flatMap(s -> s.chars().allMatch(Character::isDigit) ? Optional.of(s) : Optional.empty())\n    .map(Integer::parseInt)\n    .orElse(-1);\nSystem.out.println(value);\n```\nAll characters pass, so parseInt sees a clean forty two.' },
          { label: 'Step 3: Watch invalid input fall back', text: 'Note the same chain on alphabetic input:\n```java\nint fallback = Optional.of("4x").flatMap(s -> Optional.<String>empty()).map(Integer::parseInt).orElse(-1);\nSystem.out.println(fallback);\n```\nIt prints minus one with no exception thrown.' },
        ],
        result: 'Valid input parses to forty two while invalid input falls back cleanly.',
      },
    ],
    keyTakeaways: [
      'Optional makes absence explicit instead of hiding it in null.',
      'orElseGet builds expensive defaults lazily while orElse stays eager.',
      'Map, filter, and flatMap chains replace manual presence branches.',
      'Optional fields, optional parameters, and blind get calls stay forbidden.',
    ],
    quiz: [
      {
        q: 'Why use ofNullable instead of of for map lookups?',
        options: [
          'ofNullable is faster because it skips the null check',
          'ofNullable tolerates missing keys by yielding empty',
          'ofNullable sorts map keys before wrapping them',
          'ofNullable caches one instance per distinct value',
        ],
        answer: 1,
        explanation: 'Step 1: Map get returns null on a miss. Step 2: Optional dot of rejects null immediately. Step 3: ofNullable converts null to empty instead. Step 4: Lookups therefore need the nullable friendly factory.',
      },
      {
        q: 'When must orElseGet replace orElse?',
        options: [
          'When the default is expensive and should build only on absence',
          'When the default must be computed before the lookup starts',
          'When the Optional holds a primitive wrapper type',
          'When the chain runs inside a parallel stream',
        ],
        answer: 0,
        explanation: 'Step 1: orElse evaluates its argument eagerly. Step 2: Heavy defaults then cost on every call. Step 3: orElseGet defers to a supplier on empty only. Step 4: Expensive fallbacks therefore belong to the lazy form.',
      },
      {
        q: 'What does flatMap add over map for Optional chains?',
        options: [
          'It unwraps Optional returning functions without nesting containers',
          'It runs the mapping on a background thread pool',
          'It converts empty optionals back to null automatically',
          'It memoizes mapping results across repeated calls',
        ],
        answer: 2,
        explanation: 'Step 1: Map wraps every result in a new Optional. Step 2: Optional returning functions would double wrap. Step 3: FlatMap splices the inner container directly. Step 4: Chained validations thus stay flat.',
      },
      {
        q: 'Which practice does Horstmann warn against?',
        options: [
          'Returning Optional from find style lookup methods',
          'Chaining map and filter instead of branching',
          'Calling get without checking presence first',
          'Using orElseThrow with a precise supplier',
        ],
        answer: 3,
        explanation: 'Step 1: Blind get assumes presence without proof. Step 2: An empty value then throws NoSuchElementException. Step 3: The failure mirrors the old null hazard. Step 4: Presence checks or safe consumers are required instead.',
      },
    ],
  },
  /* ---------------- 10.4 ---------------- */
  {
    sectionId: 'java-ch10-s4',
    readingTime: 8,
    intro: 'Parallel streams promise free speedup by splitting work across cores, but the gains arrive only under strict conditions. This section covers spliterators, associativity requirements, ordering effects, and the measurement discipline Horstmann insists on. It ends with primitive streams that dodge boxing overhead in numeric pipelines.',
    objectives: [
      'Convert pipelines to parallel form and judge when it pays',
      'Require associativity and statelessness in parallel reductions',
      'Use primitive streams to avoid boxing in numeric work',
    ],
    concepts: [
      {
        term: 'Parallel stream splitting',
        kind: 'definition',
        statement: 'A **parallel stream** from `parallelStream()` or `.parallel()` divides its source with a `Spliterator` so the common `ForkJoinPool` processes chunks concurrently.',
        detail: 'ArrayList and arrays split evenly and scale well. LinkedList and iterate generators split poorly and often run slower in parallel.',
      },
      {
        term: 'Associative reduction requirement',
        kind: 'theorem',
        statement: '**Associativity** demands that grouping never changes the answer, so `reduce(0, Integer::sum)` parallelizes while subtraction or list appends scramble under regrouping.',
        detail: 'The identity must be a true identity for the combiner. Non associative accumulators yield order dependent garbage in parallel runs.',
      },
      {
        term: 'Ordering and encounter cost',
        kind: 'notation',
        statement: '**Encounter order** preserved by `findFirst` and `limit` forces coordination, while `findAny`, `unordered`, and `forEach` release parallel chunks to finish freely.',
        detail: 'Pay for order only when results must match sequential positions. Otherwise prefer the any and unordered variants for throughput.',
      },
      {
        term: 'Measure before parallelizing',
        kind: 'insight',
        statement: '**Measurement** with `System.nanoTime()` comparisons on realistic data sizes decides, because splitting, thread handoff, and merging can dwarf small or boxing heavy computations that look parallelizable.',
        detail: 'Horstmann advises benchmarking sequential versus parallel on production scale input. Large CPU bound workloads over splittable sources are the reliable winners.',
      },
      {
        term: 'Primitive streams without boxing',
        kind: 'method',
        statement: '**Primitive streams** like `IntStream` carry raw `int` values through `mapToInt`, `sum`, and `summaryStatistics`, skipping the object allocation that boxed pipelines pay per element.',
        detail: 'Convert with mapToInt and return with boxed only at the boundary. Range factories range and rangeClosed generate exact numeric spans without lists.',
      },
    ],
    figures: [
      {
        caption: 'Spliterator divides the source into chunks that combine back after parallel work.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Parallel split and combine flow"><rect x="250" y="30" width="220" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="55" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Source array</text><text x="360" y="75" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">8 elements</text><rect x="60" y="150" width="130" height="70" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="125" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">Chunk A</text><text x="125" y="198" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">core 1</text><rect x="220" y="150" width="130" height="70" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="285" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">Chunk B</text><text x="285" y="198" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">core 2</text><rect x="380" y="150" width="130" height="70" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="445" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">Chunk C</text><text x="445" y="198" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">core 3</text><rect x="540" y="150" width="130" height="70" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="605" y="178" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="12" font-weight="700" fill="currentColor">Chunk D</text><text x="605" y="198" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">core 4</text><rect x="250" y="260" width="220" height="60" fill="none" stroke="currentColor" stroke-width="2"/><text x="360" y="285" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="13" font-weight="700" fill="currentColor">Combine</text><text x="360" y="305" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">associative merge</text><line x1="300" y1="90" x2="125" y2="146" stroke="currentColor" stroke-width="1.4"/><line x1="340" y1="90" x2="285" y2="146" stroke="currentColor" stroke-width="1.4"/><line x1="390" y1="90" x2="445" y2="146" stroke="currentColor" stroke-width="1.4"/><line x1="430" y1="90" x2="605" y2="146" stroke="currentColor" stroke-width="1.4"/><line x1="125" y1="220" x2="300" y2="258" stroke="currentColor" stroke-width="1.4"/><line x1="285" y1="220" x2="330" y2="258" stroke="currentColor" stroke-width="1.4"/><line x1="445" y1="220" x2="390" y2="258" stroke="currentColor" stroke-width="1.4"/><line x1="605" y1="220" x2="420" y2="258" stroke="currentColor" stroke-width="1.4"/></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Order free parallel summation',
        problem: 'Add the numbers one through eight with a parallel reduction that regroups freely across cores.',
        steps: [
          { label: 'Step 1: Build a splittable source', text: 'Use an ArrayList backed list that divides evenly:\n```java\nList<Integer> nums = List.of(1, 2, 3, 4, 5, 6, 7, 8);\n```\nContiguous storage splits into balanced chunks.' },
          { label: 'Step 2: Reduce associatively', text: 'Sum with an associative operator and a true identity:\n```java\n// associative-reduce-pattern: order-free sum scales with cores\nint sum = nums.parallelStream()\n    .reduce(0, Integer::sum);\nSystem.out.println(sum);\n```\nAny regrouping still yields thirty six.' },
          { label: 'Step 3: Note the forbidden shape', text: 'Recognize why subtraction could never parallelize this way:\n```java\nint check = nums.stream().reduce(0, Integer::sum);\nSystem.out.println(check == sum);\n```\nIt prints true only because summation is associative.' },
        ],
        result: 'Parallel and sequential sums agree exactly at thirty six.',
      },
      {
        title: 'Statistics without boxing overhead',
        problem: 'Filter small values out of an integer array and report the average of the survivors with no object allocation.',
        steps: [
          { label: 'Step 1: Open a primitive stream', text: 'Stream raw ints instead of boxed Integers:\n```java\nint[] data = {5, 1, 9, 3};\nIntStream ints = IntStream.of(data);\n```\nNo Integer objects exist anywhere in the flow.' },
          { label: 'Step 2: Filter and summarize', text: 'Keep values above two and gather full statistics:\n```java\n// primitive-flow-pattern: raw ints skip boxing end to end\nIntSummaryStatistics stats = IntStream.of(data)\n    .filter(n -> n > 2)\n    .summaryStatistics();\nSystem.out.println(stats.getCount());\n```\nThree survivors remain after the filter.' },
          { label: 'Step 3: Read the average', text: 'Pull the computed mean from the statistics object:\n```java\ndouble avg = stats.getAverage();\nSystem.out.println(avg);\n```\nFive plus nine plus three over three averages to about five point six seven.' },
        ],
        result: 'Primitive statistics report three survivors averaging about five point six seven.',
      },
    ],
    keyTakeaways: [
      'Parallel streams split splittable sources across the common pool.',
      'Reductions must be associative with a true identity to regroup safely.',
      'Order preserving terminals cost coordination that any variants avoid.',
      'Primitive streams remove boxing from numeric pipelines end to end.',
    ],
    quiz: [
      {
        q: 'Which source parallelizes most reliably?',
        options: [
          'LinkedList traversed through node hops',
          'Stream dot iterate with a sequential seed function',
          'ArrayList or array with even spliterator division',
          'BufferedReader lines with blocking IO stages',
        ],
        answer: 2,
        explanation: 'Step 1: Splitting cost decides parallel payoff. Step 2: Arrays divide evenly in constant time. Step 3: Linked structures and iterate resist division. Step 4: Contiguous sources therefore scale best.',
      },
      {
        q: 'Why must parallel reducers be associative?',
        options: [
          'Workers regroup chunks in unpredictable orders',
          'The pool sorts partial results before combining',
          'Boxing changes grouping across chunk boundaries',
          'Encounter order reverses on more than two cores',
        ],
        answer: 0,
        explanation: 'Step 1: Parallel execution builds a combination tree. Step 2: Chunk groupings vary run to run. Step 3: Only associative ops agree under regrouping. Step 4: Non associative folds thus produce garbage.',
      },
      {
        q: 'How do findAny and unordered help parallelism?',
        options: [
          'They enlarge the common pool with extra threads',
          'They remove ordering coordination between chunks',
          'They switch boxing off for wrapper streams',
          'They memoize intermediate results across runs',
        ],
        answer: 3,
        explanation: 'Step 1: Ordered terminals pin positions across chunks. Step 2: Coordination serializes completion. Step 3: Any variants accept whichever chunk finishes. Step 4: Throughput rises by dropping the order promise.',
      },
      {
        q: 'What is the point of IntStream over Stream of Integer?',
        options: [
          'IntStream supports checked exceptions in lambdas',
          'IntStream carries raw ints with no per element boxing',
          'IntStream parallelizes automatically without request',
          'IntStream sorts numeric data during collection',
        ],
        answer: 1,
        explanation: 'Step 1: Boxed streams allocate one object per value. Step 2: Allocation plus indirection taxes numeric loops. Step 3: Primitive streams keep values in registers and arrays. Step 4: Numeric pipelines therefore run leaner.',
      },
    ],
  },
]
