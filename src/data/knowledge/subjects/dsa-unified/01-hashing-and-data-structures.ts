/**
 * Knowledge Universe — Data Structures & Algorithms — Chapter 01: Hashing & Data Structures
 * 1 lesson · ~898 words
 * field: Data Structures & Algorithms
 * legacy sources: computing-ai.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Data Structures & Algorithms]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 cs-hash-tables-collision-resolution — Hash Tables and Collision Resolution
 */
import type { KnowledgeTopic } from '../../types'

export const dsaUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'cs-hash-tables-collision-resolution',
    title: 'Hash Tables and Collision Resolution',
    domain: 'Computing & AI',
    field: 'Data Structures & Algorithms',
    branch: 'Hashing',
    tier: 'core',
    concepts: [
      'Hash functions and uniformity',
      'Load factor',
      'Separate chaining',
      'Open addressing and linear probing',
      'Double hashing',
      'Resizing and hash-flooding defense',
    ],
    words: 898,
    readMins: 4,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: "A hash table pushes each key through a hash function to choose an array slot, and that single idea buys average constant-time lookup, insertion and deletion — the reason it powers every language's dictionary type. Collisions are mathematically unavoidable once more keys exist than slots, so the design question is not whether they happen but how to resolve them. Chaining and open addressing are the classic answers, and the load factor controls everything.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: "From Python's dict to caches, database indexes and deduplicating storage, hash tables are the most-used non-trivial structure in software. Knowing their performance envelope — and how it collapses — is basic literacy for fast code.",
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The hash function maps any key — string, integer, tuple — to a slot index, and must be deterministic, fast and uniform. A poor function clusters keys and turns constant time into scanning; runtimes pick speed plus mixing, such as SipHash or xxHash.',
      },
      {
        kind: 'para',
        text: 'The load factor is stored entries divided by slot count. Below about 0.7 for open addressing, probe sequences stay short; near 1, lookups degrade sharply. Chaining tolerates higher loads, since its buckets simply grow.',
      },
      {
        kind: 'para',
        text: 'Separate chaining gives each slot a list, so colliding keys coexist. Deletion is trivial and the table never fills, at the cost of pointer chasing and extra memory. With a decent function, expected search cost stays near 1 + α.',
      },
      {
        kind: 'para',
        text: 'Open addressing stores everything in the table itself: if a slot is taken, scan the next slot, wrapping at the end — linear probing. It is cache-friendly, a real speed multiplier, but suffers primary clustering: occupied runs grow and lengthen every search landing in them.',
      },
      {
        kind: 'para',
        text: 'Double hashing sets the probe stride with a second hash: h1(k), then h1(k) + h2(k), h1(k) + 2·h2(k), and so on. Because strides differ per key, clusters do not compound, giving the best probe statistics of the classic open-addressing schemes.',
      },
      {
        kind: 'para',
        text: 'When the load threshold trips, the table allocates about double the slots and rehashes every entry, since indices depend on array size — one insertion pays O(n), the average stays O(1), the same amortisation as dynamic arrays. Randomised hashing (SipHash) also defeats hash-flooding attacks.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Load factor',
        latex: '\\alpha = \\frac{n}{m}',
        meaning: 'Entries n divided by slots m — the single number that predicts collision frequency and probe cost.',
      },
      {
        kind: 'formula',
        name: 'Linear probing cost',
        latex: 'E \\approx \\tfrac{1}{2}\\left(1 + \\frac{1}{(1-\\alpha)^2}\\right)',
        meaning: 'Expected probes for an unsuccessful search under uniform hashing: about 2.5 at α = 0.5, exploding past 50 at α = 0.9.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: key placement and search cost in an 8-slot table using linear probing, with h(k1) = h(k2) = h(k3) = 5.',
          'Recall the governing idea: linear probing resolves a collision by scanning to the next free slot, wrapping around the end.',
          'Apply it: k1 takes slot 5; k2 probes 5 then takes 6; k3 probes 5, 6 then takes 7. Searching k3 repeats the walk — three probes.',
          'State the result: load factor 3/8 ≈ 0.38, longest chain 3; a fourth colliding key would wrap to slot 0 — clusters forming.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          "Language runtimes — Python's dict, Java's HashMap, JavaScript objects",
          'Database engines hashing join keys and building indexes for point lookups',
          'Caches and memoisation, often paired with a list for least-recently-used eviction',
          'Deduplication in backup systems, where content hashes identify identical blocks',
          'Compiler symbol tables binding names to declarations',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "Mutating a key after insertion orphans the entry forever — searches rehash the new state and miss. Average O(1) is not a guarantee: worst cases are linear, and pathological data will find them. Iteration order is an implementation detail; code that depends on it is already broken.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Hash function', def: 'The deterministic map from key to slot index; fast and uniform.' },
          { term: 'Load factor', def: 'Stored entries divided by slot count; the performance dial.' },
          { term: 'Collision', def: 'Two distinct keys resolving to the same slot.' },
          { term: 'Separate chaining', def: 'Collision resolution via a bucket list per slot.' },
          { term: 'Open addressing', def: 'Collision resolution by probing for another slot in the table.' },
          { term: 'Rehashing', def: 'Rebuilding every entry index after the array is resized.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The load factor of a hash table is defined as:',
            options: ['slots divided by entries', 'stored entries divided by slot count', 'collisions per insertion', 'probes per successful search'],
            answer: 1,
            explain: 'It is n/m — how full the table is, predicting collision frequency and probe length.',
          },
          {
            q: 'With double hashing, the probe sequence for a key is:',
            options: ['the same slot repeatedly', 'h1(k) plus multiples of a second hash h2(k)', 'h1(k) plus 1, 2, 4, 8 and so on', 'a random slot each time'],
            answer: 1,
            explain: 'The second hash sets a per-key stride, so clusters do not compound.',
          },
          {
            q: 'Rehashing costs O(n) once but stays O(1) amortised per insertion because:',
            options: [
              'the old array is reused in place',
              'the cost spreads across all the insertions that grew the table',
              'every key keeps its old index',
              'resizing never actually happens',
            ],
            answer: 1,
            explain: 'Doubling means each entry moves O(1) times over the full insertion sequence — the same amortisation as dynamic arrays.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: "Core-tier material: bring arrays and Big-O basics. It pairs with binary search trees, which trade O(log n) worst cases for ordering; next come Bloom filters and consistent hashing.",
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Hash the key, store at the slot — average O(1) when keys spread well.',
          'Collisions are inevitable; the load factor sets their price.',
          'Chaining lists per slot; open addressing probes; double hashing avoids clusters.',
          'Resize near 0.7 load and amortise the rehash.',
          'Keyed hashing defends against hash-flooding attacks.',
        ],
      },
    ],
  },
]
