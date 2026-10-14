'use client'

// Easy explanations everywhere.
// Goal: any hard topic -> 10-year-old can get the idea in 10 seconds.
// No AI needed: rule-based simplifier + analogy picker + jargon dictionary.

/** Hard word -> easy meaning. Used for tooltips + auto-simplify. */
export const EASY_WORDS: Record<string, string> = {
  proposition: 'a sentence that is either true or false',
  predicate: 'a sentence with a blank like "x is big"',
  quantifier: 'words like "all" or "some"',
  tautology: 'always true, no matter what',
  contradiction: 'always false, impossible',
  equivalence: 'same meaning, different words',
  inference: 'a safe step from what you know to something new',
  contrapositive: 'flipped and opposite version that means the same',
  converse: 'flipped version (may NOT mean the same)',
  theorem: 'a big true rule we proved',
  lemma: 'a small helper rule used to prove a big rule',
  corollary: 'an easy bonus result from a big rule',
  proof: 'a step-by-step reason why it is true',
  induction: 'domino trick: first falls, each knocks the next',
  recursion: 'a recipe that calls itself with a smaller piece',
  set: 'a bag of things, no repeats, order does not matter',
  subset: 'everything in small bag is also in big bag',
  'power set': 'bag of all smaller bags you can make',
  function: 'a machine: each input gives exactly one output',
  bijection: 'perfect pairing, no one left out',
  sequence: 'a list in order: first, second, third...',
  summation: 'adding a list up',
  cardinality: 'how many things are inside',
  countable: 'you can count them 1,2,3 even if forever',
  matrix: 'a table of numbers in rows and columns',
  algorithm: 'a clear recipe that always finishes',
  complexity: 'how much time or space a recipe needs',
  'big-o': 'at most this slow (upper limit)',
  omega: 'at least this slow (lower limit)',
  theta: 'exactly this fast (tight)',
  prime: 'a number only divisible by 1 and itself',
  gcd: 'biggest number that divides both',
  congruence: 'same remainder, like same time on a clock',
  cryptography: 'secret writing with math locks',
  rsa: 'a famous lock using two big primes',
  permutation: 'arrangement where order matters',
  combination: 'choice where order does NOT matter',
  binomial: 'numbers from (a+b)^n, the triangle pattern',
  probability: 'how likely, from 0 (never) to 1 (sure)',
  'bayes theorem': 'flip the question: update belief with new clue',
  expectation: 'average if you repeat many times',
  variance: 'how spread out the results are',
  recurrence: 'rule to build next from previous ones',
  'generating function': 'pack a whole list into one formula',
  relation: 'a link between things, like "likes"',
  reflexive: 'everything links to itself',
  symmetric: 'if A links B then B links A',
  transitive: 'if A links B and B links C then A links C',
  'equivalence relation': 'groups things that behave the same',
  poset: 'some things above others, like tasks with order',
  graph: 'dots joined by lines, like a map',
  vertex: 'a dot',
  edge: 'a line joining dots',
  degree: 'how many lines touch a dot',
  path: 'a walk along lines without lifting pen',
  cycle: 'a walk that returns to start',
  bipartite: 'dots split in 2 teams, lines only go across',
  euler: 'walk that uses every line exactly once',
  hamilton: 'walk that visits every dot exactly once',
  dijkstra: 'shortest road finder from start',
  planar: 'can draw flat with no crossing lines',
  tree: 'a graph with no loops, like a family tree',
  traversal: 'visiting every dot in a fixed order',
  'spanning tree': 'smallest roads joining all places',
  boolean: 'only 0 or 1, false or true',
  gate: 'a tiny switch that does AND OR NOT',
  'k-map': 'a picture trick to simplify switches',
  grammar: 'rules to build correct sentences',
  automaton: 'a robot with few memory states that reads letters',
  'turing machine': 'an imaginary computer with infinite paper tape',
  halting: 'will the program ever stop?',
  process: 'a running program',
  thread: 'a small worker inside a program',
  deadlock: 'everyone waits for each other, nothing moves',
  semaphore: 'a counter flag to control who enters',
  mutex: 'a lock: only one worker at a time',
  scheduling: 'deciding who runs next on CPU',
  paging: 'cut memory into same-size pages',
  'virtual memory': 'pretend you have more RAM using disk',
  filesystem: 'how files are stored on disk',
  derivative: 'how fast something changes right now (slope)',
  integral: 'total area under a curve (adding tiny pieces)',
  limit: 'value you get closer and closer to',
  series: 'infinite sum: a1 + a2 + a3 ...',
  vector: 'an arrow with size and direction',
  closure: 'a function that remembers its box',
  promise: 'a box that will hold a future answer',
  'event loop': 'the postman that delivers JS jobs in order',
}

function stripFancy(s: string): string {
  return s
    .replace(/\$\$[^$]*\$\$/g, 'formula')
    .replace(/\$[^$]*\$/g, 'formula')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Replace hard words with easy meanings in one pass. */
export function toSimpleWords(text: string): string {
  let out = stripFancy(text)
  for (const [hard, easy] of Object.entries(EASY_WORDS)) {
    const re = new RegExp(`\\b${hard.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
    if (re.test(out)) {
      // keep original + add easy in brackets first time only
      out = out.replace(re, (m) => `${m} (${easy})`)
      break // only one replacement per call to stay short
    }
  }
  // shorten very long sentences
  const sentences = out.split(/(?<=[.!?])\s+/)
  if (sentences.length > 2) out = sentences.slice(0, 2).join(' ')
  if (out.length > 220) out = out.slice(0, 217) + '...'
  return out
}

function pickAnalogy(text: string): string {
  const t = text.toLowerCase()
  if (/(proposition|logic|¬|∧|∨|truth)/.test(t)) return 'Like a light switch: it is either ON (true) or OFF (false).'
  if (/(set|subset|union|intersection)/.test(t)) return 'Like bags of fruits: union = pour both bags together, intersection = only fruits in BOTH bags.'
  if (/(function|bijection|inverse)/.test(t)) return 'Like a vending machine: same button always gives same snack.'
  if (/(graph|vertex|edge|dijkstra|euler|tree)/.test(t)) return 'Like cities on a map joined by roads.'
  if (/(probability|bayes|dice|coin)/.test(t)) return 'Like tossing a coin many times: heads comes about half.'
  if (/(induction|recursion|hanoi|fibonacci)/.test(t)) return 'Like dominoes: knock first, rest fall one by one.'
  if (/(permutation|combination|counting|pigeonhole)/.test(t)) return 'Like picking team members: order matters or not?'
  if (/(prime|gcd|crypto|rsa|mod)/.test(t)) return 'Like a clock: 13 o’clock is same as 1 o’clock (wrap around).'
  if (/(process|thread|deadlock|mutex|schedul)/.test(t)) return 'Like cooks sharing one kitchen: take turns or clash.'
  if (/(derivative|slope|limit)/.test(t)) return 'Like speedometer: how fast right NOW, not average.'
  if (/(integral|area|riemann)/.test(t)) return 'Like counting squares under a wavy line to get area.'
  if (/(gate|boolean|k-map|circuit)/.test(t)) return 'Like Lego switches: join them to build a calculator.'
  if (/(automaton|grammar|turing|halting)/.test(t)) return 'Like a tiny robot reading letters and changing mood.'
  if (/(derivation|proof|theorem)/.test(t)) return 'Like building with blocks: each step sits on previous.'
  return 'Like everyday example: start small, then grow the idea.'
}

export interface EasyExplain {
  oneLine: string
  analogy: string
  remember: string
}

/** Main helper: term + hard statement -> 3 super-easy lines. */
export function explainEasy(term: string, statement: string, detail?: string): EasyExplain {
  const clean = stripFancy(statement)
  const firstSentence = clean.split(/(?<=[.!?])\s+/)[0] ?? clean
  const short = firstSentence.length > 140 ? firstSentence.slice(0, 137) + '...' : firstSentence

  const lowerTerm = term.toLowerCase()
  // direct dictionary hit for the term itself
  const dictHit = Object.entries(EASY_WORDS).find(([k]) => lowerTerm.includes(k))

  const oneLine = dictHit
    ? `${term}: ${dictHit[1]}. In short: ${toSimpleWords(short)}`
    : `In simple words: ${toSimpleWords(short)}`

  const analogy = pickAnalogy(`${term} ${statement} ${detail ?? ''}`)

  const remember = detail
    ? `Remember this: ${toSimpleWords(detail.split(/(?<=[.!?])\s+/)[0] ?? detail)}`
    : `Remember this: ${term} is one small idea — say it in your own words once.`

  return { oneLine, analogy, remember }
}

/** Easy version for worked examples: problem -> what to do. */
export function easyExample(problem: string): string {
  const clean = toSimpleWords(problem)
  return `What to do here: ${clean} Do it step by step, one small step at a time.`
}

/** Easy version for quiz explanations. */
export function easyQuiz(explanation: string): string {
  return `Why: ${toSimpleWords(explanation)}`
}
