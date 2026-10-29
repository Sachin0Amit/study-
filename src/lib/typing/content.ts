/**
 * X12 — Keyboard Dojo: content banks for the advanced typing trainer.
 *
 * Everything the test generator needs, all local (zero network):
 *  · COMMON_WORDS  — ~330 high-frequency English lemmas (speed practice)
 *  · HARD_WORDS    — spelling traps + academic/technical vocabulary
 *  · QUOTES        — attributed classics in three lengths
 *  · CODE_SNIPPETS — real TypeScript/JavaScript/Python/C for symbol muscle memory
 *  · DRILLS        — a 12-step keyboard curriculum (home row → code symbols)
 *  · generators    — word streams, punctuation/number modifiers, drill payloads
 */

/* ------------------------------------------------------------------ */
/* Word banks                                                          */
/* ------------------------------------------------------------------ */

export const COMMON_WORDS: string[] = [
  'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'it',
  'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this',
  'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or',
  'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so',
  'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when',
  'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people',
  'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than',
  'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back',
  'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even',
  'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us', 'is',
  'are', 'was', 'were', 'been', 'has', 'had', 'may', 'should', 'must', 'very',
  'upon', 'while', 'where', 'why', 'again', 'against', 'between', 'under', 'never', 'always',
  'often', 'once', 'during', 'before', 'through', 'around', 'near', 'far', 'above', 'below',
  'both', 'few', 'many', 'much', 'more', 'less', 'own', 'same', 'such', 'keep',
  'let', 'begin', 'seem', 'help', 'talk', 'turn', 'start', 'show', 'hear', 'play',
  'run', 'move', 'live', 'believe', 'hold', 'bring', 'happen', 'write', 'provide', 'sit',
  'stand', 'lose', 'pay', 'meet', 'include', 'continue', 'set', 'learn', 'change', 'lead',
  'understand', 'watch', 'follow', 'stop', 'create', 'speak', 'read', 'allow', 'add', 'spend',
  'grow', 'open', 'walk', 'win', 'offer', 'remember', 'love', 'consider', 'appear', 'buy',
  'wait', 'serve', 'send', 'expect', 'build', 'stay', 'fall', 'cut', 'reach', 'remain',
  'suggest', 'raise', 'pass', 'sell', 'require', 'report', 'decide', 'pull', 'return', 'explain',
  'hope', 'develop', 'carry', 'break', 'receive', 'agree', 'support', 'hit', 'produce', 'eat',
  'cover', 'catch', 'draw', 'choose', 'cause', 'point', 'listen', 'realize', 'place', 'world',
  'school', 'state', 'family', 'student', 'group', 'country', 'problem', 'hand', 'part', 'case',
  'week', 'company', 'system', 'program', 'question', 'government', 'number', 'night', 'home', 'water',
  'room', 'mother', 'area', 'money', 'story', 'fact', 'month', 'lot', 'right', 'study',
  'book', 'eye', 'job', 'word', 'business', 'issue', 'side', 'kind', 'head', 'house',
  'service', 'friend', 'father', 'power', 'hour', 'game', 'line', 'end', 'member', 'law',
  'car', 'city', 'name', 'team', 'minute', 'idea', 'body', 'parent', 'face', 'level',
  'office', 'door', 'health', 'person', 'art', 'war', 'history', 'party', 'result', 'morning',
  'reason', 'research', 'girl', 'moment', 'air', 'teacher', 'force', 'education', 'foot', 'boy',
  'age', 'policy', 'process', 'music', 'market', 'sense', 'nature', 'light', 'future', 'mind',
  'library', 'chapter', 'lesson', 'practice', 'science', 'physics', 'chemistry', 'biology', 'mathematics', 'language',
  'grammar', 'essay', 'notes', 'focus', 'memory', 'revision', 'degree', 'knowledge', 'wisdom', 'insight',
  'theory', 'formula', 'equation', 'experiment', 'laboratory', 'analysis', 'evidence', 'conclusion', 'concept', 'principle',
  'method', 'pattern', 'structure', 'function', 'variable', 'constant', 'sequence', 'series', 'matrix', 'vector',
  'circle', 'angle', 'radius', 'sample', 'data', 'model', 'index', 'summary', 'outline', 'draft',
  'final', 'grade', 'score', 'class', 'course', 'term', 'semester', 'lecture', 'seminar', 'workshop',
  'project', 'assignment', 'deadline', 'schedule', 'calendar', 'routine', 'habit', 'discipline', 'persistence', 'curiosity',
]

export const HARD_WORDS: string[] = [
  'absence', 'absurd', 'acquaintance', 'algorithm', 'ambiguous', 'analogy', 'anomaly', 'apparatus',
  'approximate', 'arbitrary', 'archipelago', 'asymmetry', 'asymptote', 'atmosphere', 'auxiliary', 'bureaucracy',
  'catastrophe', 'category', 'chaos', 'characteristic', 'chlorophyll', 'colleague', 'commission', 'community',
  'complementary', 'conscience', 'consciousness', 'consensus', 'controversy', 'convection', 'correlation', 'crystallize',
  'curiosity', 'deceive', 'definitely', 'deteriorate', 'deviate', 'dilemma', 'diphthong', 'discipline',
  'dispersion', 'dissipate', 'distillation', 'eccentric', 'embarrass', 'empirical', 'enthusiasm', 'entropy',
  'equilibrium', 'equivalent', 'erroneous', 'evaporate', 'exaggerate', 'exhaustive', 'existence', 'explicit',
  'extraordinary', 'fascinate', 'fluorescent', 'frequency', 'gauge', 'generalization', 'geography', 'gesture',
  'gradually', 'gyroscope', 'hierarchy', 'hypothesis', 'idiosyncrasy', 'independent', 'inevitable', 'infinite',
  'inoculate', 'inquisitive', 'institute', 'interrupt', 'irrelevant', 'irresistible', 'irrigation', 'legitimate',
  'lethargy', 'liaison', 'maintenance', 'manoeuvre', 'medieval', 'metamorphosis', 'milestone', 'mischievous',
  'misspell', 'mitigate', 'momentum', 'monotonous', 'necessary', 'phenomenon', 'photosynthesis', 'playwright',
  'pneumonia', 'possibility', 'prairie', 'precedence', 'precision', 'prejudice', 'prerogative', 'presumptuous',
  'privilege', 'pronunciation', 'psychology', 'questionnaire', 'quiescent', 'reciprocal', 'relevant', 'reservoir',
  'resilience', 'rhythm', 'scissors', 'silhouette', 'sophisticated', 'spontaneous', 'statistics', 'subterranean',
  'sufficient', 'supersede', 'surveillance', 'susceptible', 'syllable', 'synthesis', 'temperature', 'threshold',
  'trajectory', 'tranquility', 'ubiquitous', 'unanimous', 'unforeseen', 'vacuum', 'variable', 'vicissitude',
  'warehouse', 'wavelength', 'wherever', 'wrinkle', 'xylophone', 'yesterday', 'zealous',
]

/* ------------------------------------------------------------------ */
/* Quotes                                                              */
/* ------------------------------------------------------------------ */

export interface Quote {
  text: string
  author: string
}

export const QUOTES_SHORT: Quote[] = [
  { text: 'Know thyself.', author: 'Inscription at Delphi' },
  { text: 'Fortune favors the bold.', author: 'Virgil' },
  { text: 'Well begun is half done.', author: 'Aristotle' },
  { text: 'We are what we repeatedly do.', author: 'Aristotle' },
  { text: 'Practice makes perfect.', author: 'Proverb' },
  { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
  { text: 'The unexamined life is not worth living.', author: 'Socrates' },
  { text: 'What we think, we become.', author: 'Attributed to the Buddha' },
  { text: 'Energy and persistence conquer all things.', author: 'Benjamin Franklin' },
  { text: 'Waste no more time arguing what a good person should be. Be one.', author: 'Marcus Aurelius' },
]

export const QUOTES_MEDIUM: Quote[] = [
  { text: 'An investment in knowledge pays the best interest.', author: 'Benjamin Franklin' },
  { text: 'Learning never exhausts the mind.', author: 'Leonardo da Vinci' },
  { text: 'Study the past if you would define the future.', author: 'Confucius' },
  { text: 'Real knowledge is to know the extent of one\u2019s ignorance.', author: 'Confucius' },
  { text: 'Tell me and I forget. Teach me I remember. Involve me and I learn.', author: 'Benjamin Franklin' },
  { text: 'The mind is not a vessel to be filled but a fire to be kindled.', author: 'Plutarch' },
  { text: 'It is the mark of an educated mind to entertain a thought without accepting it.', author: 'Aristotle' },
  { text: 'Genius is one percent inspiration and ninety-nine percent perspiration.', author: 'Thomas Edison' },
  { text: 'Nothing in life is to be feared, it is only to be understood.', author: 'Marie Curie' },
  { text: 'The expert in anything was once a beginner.', author: 'Helen Hayes' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { text: 'A person who never made a mistake never tried anything new.', author: 'Albert Einstein' },
]

export const QUOTES_LONG: Quote[] = [
  {
    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    text: 'The more that you read, the more things you will know. The more that you learn, the more places you\u2019ll go.',
    author: 'Dr. Seuss',
  },
  {
    text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'The journey of a thousand miles begins with a single step, and the journey of a lifetime of learning begins with a single lesson.',
    author: 'Laozi',
  },
  {
    text: 'I have not failed. I\u2019ve just found ten thousand ways that won\u2019t work. Every wrong attempt discarded is another step forward.',
    author: 'Thomas Edison',
  },
  {
    text: 'The scientist is not a person who gives the right answers, but one who asks the right questions, and then works patiently to test every answer.',
    author: 'Claude L\u00e9vi-Strauss',
  },
  {
    text: 'Believe you can and you\u2019re halfway there. The rest of the way is traveled one honest practice session at a time, one small victory after another.',
    author: 'Theodore Roosevelt',
  },
]

/* ------------------------------------------------------------------ */
/* Code snippets — real code, real symbols, real muscle memory         */
/* ------------------------------------------------------------------ */

export type CodeLang = 'ts' | 'js' | 'py' | 'c'

export interface CodeSnippet {
  lang: CodeLang
  title: string
  code: string
}

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    lang: 'ts',
    title: 'typed arrow sum',
    code: 'const sum = (a: number, b: number): number => a + b;',
  },
  {
    lang: 'ts',
    title: 'fetch with guard',
    code: [
      'async function fetchUser(id: string) {',
      '  const res = await fetch(`/api/users/${id}`);',
      '  if (!res.ok) throw new Error(`HTTP ${res.status}`);',
      '  return res.json();',
      '}',
    ].join('\n'),
  },
  {
    lang: 'ts',
    title: 'pipeline',
    code: 'const top = users.filter(u => u.active).map(u => u.score).sort((a, b) => b - a).slice(0, 10);',
  },
  {
    lang: 'ts',
    title: 'reduce total',
    code: 'const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);',
  },
  {
    lang: 'js',
    title: 'debounce',
    code: [
      'function debounce(fn, ms = 250) {',
      '  let timer;',
      '  return (...args) => {',
      '    clearTimeout(timer);',
      '    timer = setTimeout(() => fn(...args), ms);',
      '  };',
      '}',
    ].join('\n'),
  },
  {
    lang: 'js',
    title: 'effect cleanup',
    code: [
      'useEffect(() => {',
      '  const id = setInterval(tick, 1000);',
      '  return () => clearInterval(id);',
      '}, [tick]);',
    ].join('\n'),
  },
  {
    lang: 'js',
    title: 'binary search',
    code: [
      'function binarySearch(arr, target) {',
      '  let lo = 0, hi = arr.length - 1;',
      '  while (lo <= hi) {',
      '    const mid = (lo + hi) >> 1;',
      '    if (arr[mid] === target) return mid;',
      '    if (arr[mid] < target) lo = mid + 1;',
      '    else hi = mid - 1;',
      '  }',
      '  return -1;',
      '}',
    ].join('\n'),
  },
  {
    lang: 'js',
    title: 'group by',
    code: 'const byDept = staff.reduce((m, p) => ((m[p.dept] ??= []).push(p), m), {});',
  },
  {
    lang: 'py',
    title: 'comprehension',
    code: 'squares = [x ** 2 for x in range(1, 11) if x % 2 == 0]',
  },
  {
    lang: 'py',
    title: 'counter dict',
    code: 'counts = {word: words.count(word) for word in set(words)}',
  },
  {
    lang: 'py',
    title: 'vector class',
    code: [
      'class Vector:',
      '    def __init__(self, x, y):',
      '        self.x = x',
      '        self.y = y',
      '',
      '    def magnitude(self):',
      '        return (self.x ** 2 + self.y ** 2) ** 0.5',
    ].join('\n'),
  },
  {
    lang: 'py',
    title: 'sort by key',
    code: 'people.sort(key=lambda p: (p.age, p.name.lower()), reverse=True)',
  },
  {
    lang: 'py',
    title: 'read lines',
    code: [
      'with open("data.txt", "r") as f:',
      '    lines = [line.strip() for line in f if line.strip()]',
    ].join('\n'),
  },
  {
    lang: 'c',
    title: 'swap pointers',
    code: [
      'void swap(int *a, int *b) {',
      '    int tmp = *a;',
      '    *a = *b;',
      '    *b = tmp;',
      '}',
    ].join('\n'),
  },
  {
    lang: 'c',
    title: 'weighted sum loop',
    code: 'for (int i = 0; i < n; i++) { total += arr[i] * (i + 1); }',
  },
  {
    lang: 'c',
    title: 'point struct',
    code: [
      'struct Point { double x, y; };',
      '',
      'double dist(struct Point p, struct Point q) {',
      '    double dx = p.x - q.x, dy = p.y - q.y;',
      '    return sqrt(dx * dx + dy * dy);',
      '}',
    ].join('\n'),
  },
]

/* ------------------------------------------------------------------ */
/* Drills — the 12-step curriculum                                     */
/* ------------------------------------------------------------------ */

export type DrillLevel = 'foundation' | 'core' | 'advanced'

export interface Drill {
  id: string
  title: string
  desc: string
  level: DrillLevel
  /** keys highlighted on the on-screen keyboard while drilling */
  keys: string
  /** how the drill's token stream is generated */
  gen: 'letters' | 'words' | 'capitals' | 'numberTokens' | 'pairs' | 'codeTokens' | 'bigrams' | 'prose' | 'mix' | 'topWords'
  count?: number
}

export const DRILLS: Drill[] = [
  {
    id: 'home-row-anchor',
    title: 'Home Row Anchor',
    desc: 'asdf jkl; gh — build the resting position every finger returns to.',
    level: 'foundation',
    keys: 'asdfghjkl;',
    gen: 'letters',
    count: 40,
  },
  {
    id: 'home-row-words',
    title: 'Home Row Words',
    desc: 'Real English words typed entirely on the home row.',
    level: 'foundation',
    keys: 'asdfghjkl',
    gen: 'words',
    count: 35,
  },
  {
    id: 'top-row-reach',
    title: 'Top Row Reach',
    desc: 'qwertyuiop — train the upward stretches from the home anchors.',
    level: 'core',
    keys: 'qwertyuiop',
    gen: 'letters',
    count: 40,
  },
  {
    id: 'bottom-row-dip',
    title: 'Bottom Row Dip',
    desc: 'zxcvbnm — the most neglected row; own the downward dips.',
    level: 'core',
    keys: 'zxcvbnm',
    gen: 'letters',
    count: 40,
  },
  {
    id: 'shift-capitals',
    title: 'Shift & Capitals',
    desc: 'Pinky-shift discipline: clean capitalization without losing rhythm.',
    level: 'core',
    keys: 'abcdefghijklmnopqrstuvwxyz',
    gen: 'capitals',
    count: 35,
  },
  {
    id: 'bigram-flow',
    title: 'Bigram Flow',
    desc: 'th he in er an — the two-letter units that carry English speed.',
    level: 'core',
    keys: 'abcdefghijklmnopqrstuvwxyz',
    gen: 'bigrams',
    count: 45,
  },
  {
    id: 'speed-sprint',
    title: 'Speed Sprint',
    desc: 'The 50 most frequent English words. Pure velocity.',
    level: 'core',
    keys: 'abcdefghijklmnopqrstuvwxyz',
    gen: 'topWords',
    count: 50,
  },
  {
    id: 'number-row',
    title: 'Number Row',
    desc: 'Digits, decimals and years without looking down.',
    level: 'core',
    keys: '0123456789',
    gen: 'numberTokens',
    count: 35,
  },
  {
    id: 'symbol-pairs',
    title: 'Symbol Pairs',
    desc: '() {} [] <> — bracket pairs with matching pinky stretches.',
    level: 'advanced',
    keys: "()[]{}<>,.;:'\"",
    gen: 'pairs',
    count: 40,
  },
  {
    id: 'code-symbols',
    title: 'Code Symbols',
    desc: '=> !== && || ?. ... — the operators programmers actually type.',
    level: 'advanced',
    keys: '=-!&|?./<>',
    gen: 'codeTokens',
    count: 40,
  },
  {
    id: 'punctuation-prose',
    title: 'Punctuation Prose',
    desc: 'Commas, apostrophes, quotes and dashes inside real sentences.',
    level: 'advanced',
    keys: ",'\"-;:?!",
    gen: 'prose',
    count: 30,
  },
  {
    id: 'number-mix',
    title: 'Number Mix',
    desc: 'Words, numbers and punctuation interleaved — terminal-grade chaos.',
    level: 'advanced',
    keys: '0123456789,.-',
    gen: 'mix',
    count: 35,
  },
]

/* ------------------------------------------------------------------ */
/* Generators                                                          */
/* ------------------------------------------------------------------ */

const TOP_BIGRAMS_LOCAL = [
  'th', 'he', 'in', 'er', 'an', 're', 'on', 'at', 'en', 'nd',
  'ti', 'es', 'or', 'te', 'of', 'ed', 'is', 'it', 'al', 'ar',
  'st', 'to', 'nt', 'ng', 'se', 'ha', 'as', 'ou', 'io', 'le',
  've', 'co', 'me', 'de', 'hi', 'ri', 'ro', 'ic', 'ne', 'ea',
]
export const TOP_BIGRAMS = TOP_BIGRAMS_LOCAL

const SYMBOL_PAIRS = ['()', '[]', '{}', '<>', '""', "''", ';;', '::', ',,', '..', '??', '!!', '--', '__', '//', '\\\\']

const CODE_TOKENS = [
  '=>', '!==', '===', '&&', '||', '?.', '...', '()', '{}', '[]',
  '/*', '*/', '::', '->', '+=', '-=', '*=', '<<', '??', '>=',
]

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/** random letter groups from a key set — syllable-ish, with occasional doubles */
function letterGroups(keys: string, count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const len = randInt(3, 6)
    let s = ''
    let last = ''
    for (let j = 0; j < len; j++) {
      let k = pick(keys.split(''))
      if (k === last && Math.random() < 0.6) k = pick(keys.split(''))
      s += k
      last = k
    }
    out.push(s)
  }
  return out
}

function wordsFromKeys(keys: string, count: number): string[] {
  const set = new Set(keys.split(''))
  const pool = COMMON_WORDS.filter((w) => w.split('').every((ch) => set.has(ch)))
  if (pool.length >= 24) {
    const out: string[] = []
    for (let i = 0; i < count; i++) out.push(pick(pool))
    return out
  }
  return letterGroups(keys, count)
}

function numberTokens(count: number): string[] {
  const out: string[] = []
  const shapes = [
    () => String(randInt(0, 999)),
    () => String(randInt(0, 99)) + '.' + String(randInt(0, 99)),
    () => String(randInt(1900, 2099)),
    () => '0x' + randInt(0x10, 0xfff).toString(16),
    () => String(randInt(0, 99)) + '%',
  ]
  for (let i = 0; i < count; i++) out.push(pick(shapes)())
  return out
}

function capitalsTokens(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const w = pick(COMMON_WORDS)
    out.push(w[0].toUpperCase() + w.slice(1))
  }
  return out
}

function bigramTokens(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    // occasionally glue two bigrams into a 4-letter run
    out.push(Math.random() < 0.3 ? pick(TOP_BIGRAMS) + pick(TOP_BIGRAMS) : pick(TOP_BIGRAMS))
  }
  return out
}

function pairTokens(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) out.push(pick(SYMBOL_PAIRS))
  return out
}

function codeTokenTokens(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) out.push(pick(CODE_TOKENS))
  return out
}

const PROSE_SUBJECTS = ['the engineer', 'her notebook', 'the student', 'our teacher', 'the theorem', 'a quiet library', 'the experiment', 'my supervisor']
const PROSE_VERBS = ['argued', 'sketched', 'proved', 'measured', 'questioned', 'rewrote', 'underlined', 'double-checked']
const PROSE_OBJECTS = ['the derivation', 'every assumption', 'the dataset', 'its conclusion', 'the margin notes', 'a new hypothesis', 'the final draft', 'the answer']

function proseTokens(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const subj = pick(PROSE_SUBJECTS)
    const verb = pick(PROSE_VERBS)
    const obj = pick(PROSE_OBJECTS)
    const endings = [
      `${subj} ${verb} ${obj}, twice.`,
      `${subj} ${verb} ${obj}!`,
      `didn't ${verb.replace(/ed$/, '')} ${obj}?`,
      `${subj}'s ${verb} ${obj};`,
      `"${subj} ${verb} ${obj}."`,
      `${subj} ${verb} ${obj} -- again.`,
    ]
    const sentence = pick(endings)
    for (const w of sentence.split(' ')) out.push(w)
  }
  return out.slice(0, count * 3)
}

function mixTokens(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const r = Math.random()
    if (r < 0.45) out.push(pick(COMMON_WORDS))
    else if (r < 0.7) out.push(pick(numberTokens(1)))
    else if (r < 0.85) out.push(pick(SYMBOL_PAIRS))
    else out.push(pick(CODE_TOKENS))
  }
  return out
}

function topWordTokens(count: number): string[] {
  const top = COMMON_WORDS.slice(0, 50)
  const out: string[] = []
  for (let i = 0; i < count; i++) out.push(pick(top))
  return out
}

/** Generate the token stream for a drill. */
export function generateDrillTokens(drill: Drill): string[] {
  const count = drill.count ?? 40
  switch (drill.gen) {
    case 'letters':
      return letterGroups(drill.keys, count)
    case 'words':
      return wordsFromKeys(drill.keys, count)
    case 'capitals':
      return capitalsTokens(count)
    case 'numberTokens':
      return numberTokens(count)
    case 'pairs':
      return pairTokens(count)
    case 'codeTokens':
      return codeTokenTokens(count)
    case 'bigrams':
      return bigramTokens(count)
    case 'prose':
      return proseTokens(count)
    case 'mix':
      return mixTokens(count)
    case 'topWords':
      return topWordTokens(count)
  }
}

export function drillById(id: string): Drill | undefined {
  return DRILLS.find((d) => d.id === id)
}

/* ------------------------------------------------------------------ */
/* Word-stream generation + modifiers                                  */
/* ------------------------------------------------------------------ */

export interface GenOptions {
  /** sprinkle punctuation and capitals (time/words modes) */
  punctuation?: boolean
  /** inject number tokens */
  numbers?: boolean
}

/** monkeytype-style punctuation + number modifiers */
export function applyModifiers(words: string[], opts: GenOptions): string[] {
  if (!opts.punctuation && !opts.numbers) return words
  const out: string[] = []
  let capitalizeNext = true
  for (let i = 0; i < words.length; i++) {
    let w = words[i]
    if (capitalizeNext && w.length > 0) {
      w = w[0].toUpperCase() + w.slice(1)
      capitalizeNext = false
    }
    if (opts.numbers && Math.random() < 0.11) {
      out.push(pick(numberTokens(1)))
      continue
    }
    if (opts.punctuation) {
      const r = Math.random()
      if (r < 0.16) {
        w += ','
      } else if (r < 0.28) {
        w += '.'
        capitalizeNext = true
      } else if (r < 0.32) {
        w = `"${w}"`
      } else if (r < 0.35) {
        w = w + "'s"
      } else if (r < 0.38) {
        w += '?'
        capitalizeNext = true
      } else if (r < 0.41) {
        w += '!'
        capitalizeNext = true
      } else if (r < 0.44) {
        w += ';'
      } else if (r < 0.47) {
        w += ':'
      } else if (r < 0.5) {
        // hyphenate with the next word when possible
        if (i + 1 < words.length) {
          w = w + '-' + words[i + 1]
          i++
        }
      }
    }
    out.push(w)
  }
  return out
}

/** Random word stream (draws from common + a hard-word tail). */
export function generateWords(count: number, opts: GenOptions = {}): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    // ~18% hard words keeps vocabulary interesting
    out.push(Math.random() < 0.18 ? pick(HARD_WORDS) : pick(COMMON_WORDS))
  }
  return applyModifiers(out, opts)
}

export function pickQuote(size: 's' | 'm' | 'l'): Quote {
  const pool = size === 's' ? QUOTES_SHORT : size === 'm' ? QUOTES_MEDIUM : QUOTES_LONG
  return pick(pool)
}

export function pickCode(lang: CodeLang | 'all'): CodeSnippet {
  const pool = lang === 'all' ? CODE_SNIPPETS : CODE_SNIPPETS.filter((s) => s.lang === lang)
  return pick(pool.length ? pool : CODE_SNIPPETS)
}
