/**
 * X13 — Keyboard Dojo: the Touch Typing Course.
 *
 * A TypingMaster-style guided curriculum that takes a complete beginner from
 * "where do my fingers even go?" to full-keyboard mastery:
 *  · 12 chapters, 50 lessons — home row → top row → bottom row → whole
 *    alphabet → capitals → numbers → symbols → number pad → words →
 *    accuracy → speed → final mastery exams
 *  · every lesson introduces explicit NEW KEYS, names the finger that
 *    presses them, and carries a teaching tip (posture, reach, shift law…)
 *  · pass gates (wpm + accuracy) with 1-3 stars, strictly sequential
 *    unlocking — exactly like a commercial typing tutor
 *  · token generators for each lesson stage (key groups → real words →
 *    curated sentences → prose exams), all zero-network
 *
 * Finger model: standard touch-typing columns —
 *   left  pinky/ring/middle/index  → q a z / w s x / e d c / r f v t g b
 *   right index/middle/ring/pinky  → y h n u j m / i k , / o l . / p ; /
 *   digits follow their column; space is the thumb's.
 */

import { COMMON_WORDS, HARD_WORDS, TOP_BIGRAMS } from './content'

/* ------------------------------------------------------------------ */
/* Finger model                                                        */
/* ------------------------------------------------------------------ */

/** finger codes: l/r + p(inky) r(ing) m(iddle) i(ndex); th = thumb */
export const FINGER_OF: Record<string, string> = {
  '`': 'lp', '1': 'lp', '2': 'lr', '3': 'lm', '4': 'li', '5': 'li',
  '6': 'ri', '7': 'ri', '8': 'rm', '9': 'rr', '0': 'rp', '-': 'rp', '=': 'rp',
  q: 'lp', w: 'lr', e: 'lm', r: 'li', t: 'li', y: 'ri', u: 'ri', i: 'rm', o: 'rr', p: 'rp',
  '[': 'rp', ']': 'rp', '\\': 'rp',
  a: 'lp', s: 'lr', d: 'lm', f: 'li', g: 'li', h: 'ri', j: 'ri', k: 'rm', l: 'rr',
  ';': 'rp', "'": 'rp',
  z: 'lp', x: 'lr', c: 'lm', v: 'li', b: 'li', n: 'ri', m: 'ri', ',': 'rm', '.': 'rr', '/': 'rp',
  ' ': 'th',
}

export const FINGER_LABEL: Record<string, string> = {
  lp: 'left pinky',
  lr: 'left ring',
  lm: 'left middle',
  li: 'left index',
  ri: 'right index',
  rm: 'right middle',
  rr: 'right ring',
  rp: 'right pinky',
  th: 'thumb',
}

/** which hand owns a base key (for picking the opposite Shift) */
export const LEFT_HAND_KEYS = new Set('`12345qwertasdfgzxcvb')

/** shifted char → unshifted base key (for shift highlighting) */
export const SHIFTED_TO_BASE: Record<string, string> = {
  '~': '`', '!': '1', '@': '2', '#': '3', '$': '4', '%': '5', '^': '6',
  '&': '7', '*': '8', '(': '9', ')': '0', '_': '-', '+': '=', '{': '[',
  '}': ']', '|': '\\', ':': ';', '"': "'", '<': ',', '>': '.', '?': '/',
}

/* ------------------------------------------------------------------ */
/* Curriculum                                                          */
/* ------------------------------------------------------------------ */

export interface CourseChapter {
  n: number
  title: string
  blurb: string
}

export const CHAPTERS: CourseChapter[] = [
  { n: 1, title: 'First Steps — The Home Row', blurb: 'Meet the bumps on F and J, and learn where every finger lives.' },
  { n: 2, title: 'Reaching Up — The Top Row', blurb: 'Stretch up from the home anchors to QWERTYUIOP.' },
  { n: 3, title: 'Reaching Down — The Bottom Row', blurb: 'Dip down to ZXCVBNM — the row everyone skips and later regrets.' },
  { n: 4, title: 'The Whole Alphabet', blurb: 'All 26 letters together — words, pangrams, and real sentences.' },
  { n: 5, title: 'Capital Letters', blurb: 'Shift technique: the opposite pinky holds Shift while the finger strikes.' },
  { n: 6, title: 'The Number Row', blurb: 'Digits without looking down — dates, decimals, and quantities.' },
  { n: 7, title: 'Symbols & Punctuation', blurb: 'The marks that make writing readable: . , ! ? ; - ( ) and friends.' },
  { n: 8, title: 'The Number Pad', blurb: 'Ten-key by feel — the accountant’s superpower.' },
  { n: 9, title: 'Words & Phrases', blurb: 'Build real-English speed with common words and flowing phrases.' },
  { n: 10, title: 'Advanced Accuracy', blurb: 'Spelling traps, mixed case, and symbols inside real text.' },
  { n: 11, title: 'Speed Building', blurb: 'Push the tempo — rhythm, consistency, and raw velocity.' },
  { n: 12, title: 'Mastery Test', blurb: 'Final exams across the full keyboard. Graduate with honors.' },
]

export type LessonGen =
  | 'groups' | 'words' | 'leftWords' | 'rightWords' | 'topWords'
  | 'caps' | 'properNouns' | 'homeSentences' | 'sentences' | 'capsSentences'
  | 'numSentences' | 'digitMix' | 'sym1' | 'sym2' | 'sym3' | 'wild'
  | 'numpad1' | 'numpad2' | 'numpad3'
  | 'bigrams' | 'phrases' | 'prose' | 'tricky' | 'longWords' | 'mixedSentences'
  | 'final1' | 'final2'

export interface CourseLesson {
  id: string
  /** global 1-based position (1..50) */
  n: number
  ch: number
  title: string
  /** keys introduced by THIS lesson (drives intro + keyboard glow) */
  newKeys: string
  /** cumulative keys usable in generated text */
  keys: string
  tip: string
  gen: LessonGen
  count: number
  goalWpm: number
  goalAcc: number
}

const K_HOME = 'asdfghjkl;'
const K_TOP = 'qwertyuiop'
const K_BOT = 'zxcvbnm'
const K_ALPHA = 'abcdefghijklmnopqrstuvwxyz'

export const COURSE_LESSONS: CourseLesson[] = [
  /* ---- Chapter 1 · First Steps — The Home Row ---- */
  {
    id: 'c01', n: 1, ch: 1, title: 'The Bumps: F and J',
    newKeys: 'fj', keys: 'fj', gen: 'groups', count: 28, goalWpm: 8, goalAcc: 85,
    tip: 'Place your INDEX fingers on the little bumps you can feel on F and J. Every other key is reached from this resting spot — that’s why it’s called the home row. Eyes on the screen, not on your hands.',
  },
  {
    id: 'c02', n: 2, ch: 1, title: 'Middle Fingers: D and K',
    newKeys: 'dk', keys: 'fjdk', gen: 'groups', count: 30, goalWpm: 8, goalAcc: 85,
    tip: 'D sits directly LEFT of F; K directly RIGHT of J. Your MIDDLE fingers press them — reach down-left and down-right without moving the whole hand.',
  },
  {
    id: 'c03', n: 3, ch: 1, title: 'Ring Fingers: S and L',
    newKeys: 'sl', keys: 'fjdksl', gen: 'groups', count: 30, goalWpm: 8, goalAcc: 85,
    tip: 'S and L belong to the RING fingers — the weakest fingers you own. Train them now and they will carry whole words later. Keep wrists floating, elbows relaxed.',
  },
  {
    id: 'c04', n: 4, ch: 1, title: 'Pinkies: A and ;',
    newKeys: 'a;', keys: 'fjdksla;', gen: 'groups', count: 30, goalWpm: 9, goalAcc: 88,
    tip: 'The PINKIES guard the outside edges: A on the left, ; on the right. Pinkies also press Shift and Enter in real typing — wake them up early.',
  },
  {
    id: 'c05', n: 5, ch: 1, title: 'Center Reach: G and H',
    newKeys: 'gh', keys: K_HOME, gen: 'groups', count: 30, goalWpm: 9, goalAcc: 88,
    tip: 'G and H are the odd ones: your INDEX fingers reach INWARD to the center of the home row. Strike, then snap back to F and J — never linger.',
  },
  {
    id: 'c06', n: 6, ch: 1, title: 'Home Row Words',
    newKeys: '', keys: 'asdfghjkl', gen: 'words', count: 32, goalWpm: 10, goalAcc: 90,
    tip: 'Real English words made only of home-row letters. This is the moment muscle memory starts replacing hunting-and-pecking. Type whole words, not single letters.',
  },
  {
    id: 'c07', n: 7, ch: 1, title: 'Home Row Sentences',
    newKeys: '', keys: K_HOME, gen: 'homeSentences', count: 8, goalWpm: 10, goalAcc: 90,
    tip: 'Full phrases on the home row. Feel the rhythm: strike, return, strike, return. If you feel your hands drifting, pause and reset on the bumps.',
  },

  /* ---- Chapter 2 · Reaching Up — The Top Row ---- */
  {
    id: 'c08', n: 8, ch: 2, title: 'R and U',
    newKeys: 'ru', keys: K_HOME + 'ru', gen: 'groups', count: 32, goalWpm: 10, goalAcc: 88,
    tip: 'First reach UP: the index fingers travel from F/J to R/U. Reach up-and-back in one motion — the other fingers stay anchored on the home row.',
  },
  {
    id: 'c09', n: 9, ch: 2, title: 'E and I',
    newKeys: 'ei', keys: K_HOME + 'ruei', gen: 'groups', count: 32, goalWpm: 10, goalAcc: 88,
    tip: 'E and I are the most common vowels — your MIDDLE fingers reach up for them. E is the most typed letter in English; this reach must become invisible.',
  },
  {
    id: 'c10', n: 10, ch: 2, title: 'W and O',
    newKeys: 'wo', keys: K_HOME + 'rueiwo', gen: 'groups', count: 32, goalWpm: 10, goalAcc: 88,
    tip: 'RING fingers go up for W and O. Reaches get longer as you move outward — move the finger, not the wrist. Return home after every strike.',
  },
  {
    id: 'c11', n: 11, ch: 2, title: 'Q and P',
    newKeys: 'qp', keys: K_HOME + 'rueiwoqp', gen: 'groups', count: 32, goalWpm: 10, goalAcc: 88,
    tip: 'The outermost top keys: Q for the left PINKY, P for the right PINKY. Long reaches — curl the pinky out and up, then home again.',
  },
  {
    id: 'c12', n: 12, ch: 2, title: 'T and Y',
    newKeys: 'ty', keys: K_HOME + K_TOP, gen: 'groups', count: 32, goalWpm: 10, goalAcc: 90,
    tip: 'T and Y sit above G and H — the index fingers cross the center line. T is everywhere in English; own this reach.',
  },
  {
    id: 'c13', n: 13, ch: 2, title: 'Top Row Review',
    newKeys: '', keys: K_HOME + K_TOP, gen: 'words', count: 35, goalWpm: 12, goalAcc: 90,
    tip: 'Words using home + top rows only. Check yourself: are your unused fingers STILL resting on home? They should be — always.',
  },

  /* ---- Chapter 3 · Reaching Down — The Bottom Row ---- */
  {
    id: 'c14', n: 14, ch: 3, title: 'V and M',
    newKeys: 'vm', keys: K_HOME + K_TOP + 'vm', gen: 'groups', count: 32, goalWpm: 10, goalAcc: 88,
    tip: 'First dip DOWN: index fingers travel to V and M, directly below F and J. Down-reaches feel odd for a day, then feel natural forever.',
  },
  {
    id: 'c15', n: 15, ch: 3, title: 'C and Comma',
    newKeys: 'c,', keys: K_HOME + K_TOP + 'vmc,', gen: 'groups', count: 32, goalWpm: 10, goalAcc: 88,
    tip: 'MIDDLE fingers drop to C and the comma. Yes — the comma is a real key with a real finger. It sits exactly where K is, one row down.',
  },
  {
    id: 'c16', n: 16, ch: 3, title: 'X and Period',
    newKeys: 'x.', keys: K_HOME + K_TOP + 'vmc,x.', gen: 'groups', count: 32, goalWpm: 10, goalAcc: 88,
    tip: 'RING fingers find X and the period. The period ends every sentence — make this reach automatic and your prose will never stall.',
  },
  {
    id: 'c17', n: 17, ch: 3, title: 'Z and Slash',
    newKeys: 'z/', keys: K_HOME + K_TOP + 'vmc,x.z/', gen: 'groups', count: 32, goalWpm: 10, goalAcc: 88,
    tip: 'The bottom corners: Z (left pinky) and / (right pinky). The bottom row is the least-practiced row on the keyboard — not for you, after today.',
  },
  {
    id: 'c18', n: 18, ch: 3, title: 'B and N',
    newKeys: 'bn', keys: K_HOME + K_TOP + K_BOT, gen: 'groups', count: 32, goalWpm: 10, goalAcc: 90,
    tip: 'B and N lurk below G and H — the index fingers’ second cross-center reach. Every letter of the alphabet is now yours.',
  },
  {
    id: 'c19', n: 19, ch: 3, title: 'Bottom Row Review',
    newKeys: '', keys: K_HOME + K_TOP + K_BOT + ',./;', gen: 'words', count: 35, goalWpm: 12, goalAcc: 90,
    tip: 'All three letter rows in real words. You have officially learned the entire alphabet by touch — no looking needed.',
  },

  /* ---- Chapter 4 · The Whole Alphabet ---- */
  {
    id: 'c20', n: 20, ch: 4, title: 'Left Hand Workout',
    newKeys: '', keys: 'qwertasdfgzxcvb', gen: 'leftWords', count: 35, goalWpm: 12, goalAcc: 90,
    tip: 'One hand at a time builds clean finger independence. Left-hand-only words: watch how each finger owns its column without the right hand helping.',
  },
  {
    id: 'c21', n: 21, ch: 4, title: 'Right Hand Workout',
    newKeys: '', keys: 'yuiophjkl;nm,.', gen: 'rightWords', count: 35, goalWpm: 12, goalAcc: 90,
    tip: 'Right-hand words now. The right hand carries the vowels I, O, U and the workhorse letters N, H, L — give it a workout of its own.',
  },
  {
    id: 'c22', n: 22, ch: 4, title: 'Pangram Words',
    newKeys: '', keys: K_ALPHA, gen: 'words', count: 35, goalWpm: 14, goalAcc: 90,
    tip: 'Words drawn from the full alphabet. Notice letters that feel slow — those fingers need extra reps. Slow is smooth; smooth becomes fast.',
  },
  {
    id: 'c23', n: 23, ch: 4, title: 'Pangram Sentences',
    newKeys: '', keys: K_ALPHA, gen: 'sentences', count: 6, goalWpm: 14, goalAcc: 90,
    tip: 'Pangrams use every letter of the alphabet at least once. If you can type these smoothly, no letter can surprise you.',
  },
  {
    id: 'c24', n: 24, ch: 4, title: 'The Top 100 Words',
    newKeys: '', keys: K_ALPHA, gen: 'topWords', count: 40, goalWpm: 15, goalAcc: 90,
    tip: 'The 100 most frequent English words cover about half of everything you will ever type. Speed here pays compound interest.',
  },

  /* ---- Chapter 5 · Capital Letters ---- */
  {
    id: 'c25', n: 25, ch: 5, title: 'Your First Capitals',
    newKeys: 'shift', keys: K_ALPHA, gen: 'caps', count: 30, goalWpm: 12, goalAcc: 90,
    tip: 'THE SHIFT LAW: press Shift with the OPPOSITE hand’s pinky. Capital of a LEFT-hand letter → RIGHT Shift; capital of a RIGHT-hand letter → LEFT Shift. Both hands work together — never twist one hand across the keyboard.',
  },
  {
    id: 'c26', n: 26, ch: 5, title: 'Proper Nouns',
    newKeys: '', keys: K_ALPHA, gen: 'properNouns', count: 30, goalWpm: 13, goalAcc: 90,
    tip: 'Names of people and places — real-world capital practice. Keep the Shift tap SHORT: press, strike the letter, release together.',
  },
  {
    id: 'c27', n: 27, ch: 5, title: 'Capital Sentences',
    newKeys: '', keys: K_ALPHA, gen: 'capsSentences', count: 5, goalWpm: 12, goalAcc: 90,
    tip: 'Every sentence starts with a capital. The habit you build here — automatic Shift at sentence starts — is what separates typists from people who type.',
  },

  /* ---- Chapter 6 · The Number Row ---- */
  {
    id: 'c28', n: 28, ch: 6, title: '1, 2, 9, 0',
    newKeys: '1290', keys: K_ALPHA + '1290', gen: 'digitMix', count: 32, goalWpm: 12, goalAcc: 88,
    tip: 'The number row is a LONG reach — same finger columns as the letters below them. 1 sits above Q, 0 above P. Strike with the same finger that owns the column.',
  },
  {
    id: 'c29', n: 29, ch: 6, title: '3, 4, 7, 8',
    newKeys: '3478', keys: K_ALPHA + '01234789', gen: 'digitMix', count: 32, goalWpm: 12, goalAcc: 88,
    tip: 'The inner digits: 3 above E, 4 above R, 7 above U, 8 above I. Middle and index fingers handle these — the column law never changes.',
  },
  {
    id: 'c30', n: 30, ch: 6, title: '5, 6 and All Digits',
    newKeys: '56', keys: K_ALPHA + '0123456789', gen: 'digitMix', count: 32, goalWpm: 12, goalAcc: 88,
    tip: '5 and 6 are the index fingers’ farthest trip. All ten digits are now in play — years, prices, quantities, no peeking.',
  },
  {
    id: 'c31', n: 31, ch: 6, title: 'Numbers in Sentences',
    newKeys: '', keys: K_ALPHA + '0123456789', gen: 'numSentences', count: 5, goalWpm: 13, goalAcc: 90,
    tip: 'Real sentences carry real numbers — times, dates, quantities. The reach from letter to digit and back is the skill; keep it fluid.',
  },

  /* ---- Chapter 7 · Symbols & Punctuation ---- */
  {
    id: 'c32', n: 32, ch: 7, title: 'Period, Comma, Apostrophe',
    newKeys: '', keys: K_ALPHA + ";',.", gen: 'sym1', count: 5, goalWpm: 13, goalAcc: 90,
    tip: 'The big three sentence marks. Period and comma are BOTTOM-row keys (middle and ring fingers); the apostrophe lives on the RIGHT PINKY, right where ; is.',
  },
  {
    id: 'c33', n: 33, ch: 7, title: '?! : and Quotes',
    newKeys: '?!:"', keys: K_ALPHA + '?!:;"\'', gen: 'sym2', count: 5, goalWpm: 13, goalAcc: 88,
    tip: '? and ! are SHIFTED keys — / and 1 with the opposite Shift. Quotes are shifted apostrophes. Two keys at once, two hands sharing the work.',
  },
  {
    id: 'c34', n: 34, ch: 7, title: 'Hyphen and Parentheses',
    newKeys: '-()', keys: K_ALPHA + '-()', gen: 'sym3', count: 5, goalWpm: 13, goalAcc: 88,
    tip: 'The hyphen is right of 0 (right pinky); parentheses are SHIFTED 9 and 0. Paired marks open and close with mirrored pinky reaches.',
  },
  {
    id: 'c35', n: 35, ch: 7, title: 'The Wild Bunch: @ # $ % & *',
    newKeys: '@#$%&*', keys: K_ALPHA + '@#$%&*', gen: 'wild', count: 30, goalWpm: 12, goalAcc: 88,
    tip: 'The shifted number row — emails, code, passwords. Each symbol rides on its digit’s finger with the opposite Shift. Password muscle memory starts here.',
  },

  /* ---- Chapter 8 · The Number Pad ---- */
  {
    id: 'c36', n: 36, ch: 8, title: 'Number Pad Home: 4 5 6',
    newKeys: '456', keys: '456', gen: 'numpad1', count: 26, goalWpm: 10, goalAcc: 88,
    tip: 'Ten-key time: rest the right hand’s INDEX/MIDDLE/RING fingers on 4-5-6. Your thumb rides 0. This mini-keyboard is a calculator — the home keys are one row down.',
  },
  {
    id: 'c37', n: 37, ch: 8, title: '7 8 9 and 1 2 3',
    newKeys: '789123', keys: '123456789', gen: 'numpad2', count: 26, goalWpm: 10, goalAcc: 88,
    tip: 'Up for 7-8-9, down for 1-2-3 — same fingers, same columns, vertical moves only. Stretch up-and-back, dip down-and-back.',
  },
  {
    id: 'c38', n: 38, ch: 8, title: 'Zero, Decimal, Calculations',
    newKeys: '0.', keys: '0123456789.+-*/=', gen: 'numpad3', count: 8, goalWpm: 12, goalAcc: 88,
    tip: 'The thumb owns 0; the ring finger finds the decimal. Full arithmetic: digits, operators, and results flowing without a single glance down.',
  },

  /* ---- Chapter 9 · Words & Phrases ---- */
  {
    id: 'c39', n: 39, ch: 9, title: 'The Top 100, Faster',
    newKeys: '', keys: K_ALPHA, gen: 'topWords', count: 45, goalWpm: 16, goalAcc: 92,
    tip: 'Back to the top 100 — with goals raised. Common words should pour out of your fingers as single gestures, not letter-by-letter constructions.',
  },
  {
    id: 'c40', n: 40, ch: 9, title: 'Bigram Flow',
    newKeys: '', keys: K_ALPHA, gen: 'bigrams', count: 48, goalWpm: 16, goalAcc: 92,
    tip: 'English runs on two-letter units — th, he, in, er. Typing TH as ONE motion rather than T then H is where real speed is born.',
  },
  {
    id: 'c41', n: 41, ch: 9, title: 'Phrases & Clauses',
    newKeys: '', keys: K_ALPHA, gen: 'phrases', count: 8, goalWpm: 18, goalAcc: 92,
    tip: 'Short complete phrases now — punctuation, capitals and rhythm together. Read one phrase AHEAD of your fingers; let your hands chase your eyes.',
  },
  {
    id: 'c42', n: 42, ch: 9, title: 'Full Paragraphs',
    newKeys: '', keys: K_ALPHA, gen: 'prose', count: 3, goalWpm: 18, goalAcc: 92,
    tip: 'Paragraph-length endurance. Steady beats: a metronome of keystrokes. If you surge and stall, deliberately slow to the pace you can HOLD.',
  },

  /* ---- Chapter 10 · Advanced Accuracy ---- */
  {
    id: 'c43', n: 43, ch: 10, title: 'Spelling Traps',
    newKeys: '', keys: K_ALPHA, gen: 'tricky', count: 32, goalWpm: 15, goalAcc: 92,
    tip: 'Rhythm, liaison, bureaucracy… the double-letter minefields. Slow DOWN on words like these — accuracy on traps is worth more than speed on easy words.',
  },
  {
    id: 'c44', n: 44, ch: 10, title: 'Mixed Case & Punctuation',
    newKeys: '', keys: K_ALPHA, gen: 'mixedSentences', count: 5, goalWpm: 15, goalAcc: 92,
    tip: 'Capitals, quotes, digits and marks interleaved — everyday prose at full difficulty. The Shift law must be automatic by now; both hands, always.',
  },
  {
    id: 'c45', n: 45, ch: 10, title: 'Numbers in the Wild',
    newKeys: '', keys: K_ALPHA + '0123456789', gen: 'numSentences', count: 5, goalWpm: 15, goalAcc: 92,
    tip: 'Data lives inside sentences — dates among letters, quantities inside clauses. Transition smoothly between the number row and the letter rows.',
  },

  /* ---- Chapter 11 · Speed Building ---- */
  {
    id: 'c46', n: 46, ch: 11, title: 'Sprint: Short Words',
    newKeys: '', keys: K_ALPHA, gen: 'topWords', count: 55, goalWpm: 22, goalAcc: 92,
    tip: 'Speed work. Short common words at maximum controlled velocity. CONTROLLED is the word — 22 accurate words-per-minute beats 25 sloppy ones, every time.',
  },
  {
    id: 'c47', n: 47, ch: 11, title: 'Sprint: Long Words',
    newKeys: '', keys: K_ALPHA, gen: 'longWords', count: 38, goalWpm: 22, goalAcc: 92,
    tip: 'Long words punish hesitation. See the whole word, type the whole word — your fingers know the letter columns; let them work without supervision.',
  },
  {
    id: 'c48', n: 48, ch: 11, title: 'Rhythm & Consistency',
    newKeys: '', keys: K_ALPHA, gen: 'prose', count: 3, goalWpm: 24, goalAcc: 94,
    tip: 'The final skill: EVENNESS. A 24-wpm typist who never wavers finishes novels while a 40-wpm sprinter who stalls does not. Find your sustainable tempo.',
  },

  /* ---- Chapter 12 · Mastery Test ---- */
  {
    id: 'c49', n: 49, ch: 12, title: 'Final Exam I — Prose Mastery',
    newKeys: '', keys: K_ALPHA, gen: 'final1', count: 3, goalWpm: 28, goalAcc: 94,
    tip: 'Exam one: clean prose, capitals and punctuation, sustained for a full paragraph. Posture check: feet flat, wrists floating, eyes on the text.',
  },
  {
    id: 'c50', n: 50, ch: 12, title: 'Final Exam II — The Full Keyboard',
    newKeys: '', keys: K_ALPHA + '0123456789,.;:?!-()', gen: 'final2', count: 3, goalWpm: 30, goalAcc: 94,
    tip: 'The black-belt test: letters, capitals, digits and symbols woven into one text. Pass this and you have mastered the entire keyboard by touch. Breathe. Begin.',
  },
]

export const TOTAL_LESSONS = COURSE_LESSONS.length

export function courseLessonById(id: string): CourseLesson | undefined {
  return COURSE_LESSONS.find((l) => l.id === id)
}

export function lessonAfter(n: number): CourseLesson | undefined {
  return COURSE_LESSONS.find((l) => l.n === n + 1)
}

/* ------------------------------------------------------------------ */
/* Sentence & prose banks                                              */
/* ------------------------------------------------------------------ */

/** only home-row letters (a s d f g h j k l ;) */
const HOME_SENTENCES = [
  'a lad asks dad; dad adds a salad',
  'all lads fall; alas a sad lass',
  'a flask; a glass; a gala; a lass',
  'half a glass, half a flask',
  'add a dash; all fall sad',
  'glad dad has a flag; a lass asks',
  'a gash, a rash: alas dad falls',
  'a salad: alfalfa and salsa',
]

/** pangrams + classic typing sentences (all letters) */
const FULL_SENTENCES = [
  'the quick brown fox jumps over the lazy dog',
  'pack my box with five dozen liquor jugs',
  'how vexingly quick daft zebras jump',
  'sphinx of black quartz, judge my vow',
  'amazingly few discotheques provide jukeboxes',
  'my girl wove six dozen plaid jackets before she quit',
  'the five boxing wizards jump quickly',
  'a wizard’s job is to vex chumps quickly in fog',
]

const CAP_SENTENCES = [
  'Anna and Otto went to Paris and London.',
  'Maria visited Berlin, Tokyo, and Lima.',
  'Nadia read a book about Newton and Galileo.',
  'Every Monday, Rahul practices typing in Delhi.',
  'Zebras and Quails live in Kenya and Zambia.',
  'Quick brown foxes jump over lazy dogs in Ohio.',
]

const NUM_SENTENCES = [
  'The train leaves at 9:45 and arrives at 12:10.',
  'She bought 3 apples, 12 oranges, and 50 grapes.',
  'Room 214 is on floor 17 of building 8.',
  'In 1969, 3 astronauts walked on the moon.',
  'The recipe needs 250 grams of flour and 2 eggs.',
  'A decade has 10 years; a century has 100.',
]

const SYM1_SENTENCES = [
  "don't stop; keep going, slowly and surely.",
  "it's easy: type, check, correct, and repeat.",
  "life's short; type fast, but type right.",
  "the cat's toy; the dog's ball; the kid's bike.",
  "well, it's dad's flask; ask dad, don't ask lass.",
]

const SYM2_SENTENCES = [
  'Wow! That was fast! Can you believe it?',
  'What is typing? It is rhythm, memory, and flow.',
  'She said: "Practice every day!" He asked: "Why?"',
  'Ready? Set? Go! Type! Win! Repeat! Improve?',
  'Wow: 40 words in 60 seconds; not bad!',
]

const SYM3_SENTENCES = [
  'well-trained fingers (and thumbs) type quickly',
  'back-and-forth, side-to-side (but always home)',
  'salt & pepper, fast & slow (never sloppy)',
  'read-and-type (look ahead) for smooth-and-steady flow',
]

const MIXED_SENTENCES = [
  'The recipe: mix 2 cups of flour, 1 egg (beaten), and 250 ml of milk.',
  'On May 3, 2021, they shipped 14 boxes (9 kg each) to Berlin.',
  '"Chapter 7: The Shift Law" — read it twice, then type it once!',
  'Q1 sales rose 12%; Q2 fell 3% — why? Ask the team in Oslo.',
  'Version 2.1 (build 4512) fixed 17 bugs; 3 remain (open).',
]

const PHRASES = [
  'as a matter of fact',
  'the sooner, the better',
  'practice makes permanent',
  'never look down again',
  'smooth is fast, fast is smooth',
  'one keystroke at a time',
  'your fingers know the way home',
  'accuracy first, speed second',
]

const PROSE_PARAGRAPHS = [
  'Typing is a physical skill, like swimming or playing an instrument. The keys do not move, and your fingers learn where every one of them lives. At first you must think about each reach, but soon the thinking fades and only the rhythm remains. Trust the practice; the speed arrives on its own.',
  'The home row is called home for a reason. Every journey your fingers take begins there and ends there. Reach up for the vowels, dip down for the consonants, and always come back to rest. A typist who returns home after every strike is never lost, no matter how fast the words arrive.',
  'Good typists read ahead of their hands. While your fingers finish one word, your eyes are already on the next. This small habit separates people who type from typists: the hands follow the eyes, and the eyes lead the mind. Look up from the keyboard, soften your gaze, and let the words flow through you.',
]

const FINAL_PROSE = [
  'Touch typing is the craft of writing at the speed of thought. When your fingers no longer need supervision, the keyboard disappears, and only language remains. Every lesson you have completed built this moment: the home row anchors, the reaches up and down, the shift law working silently between your hands. This is your final test of pure prose — type the paragraph below with everything you have learned.',
  'The best typists are not the fastest; they are the most consistent. They strike each key with the same calm force, return to the home row after every word, and breathe evenly from the first letter to the last. Speed is a byproduct of rhythm, and rhythm is a byproduct of relaxation. Type this paragraph as if you had all the time in the world, and watch how fast it goes.',
]

const FINAL_MIXED = [
  'The QWERTY layout (patented in 1878) has survived 145+ years of "better" designs. On May 5, 2021, the fastest typist recorded 216 wpm — that is 18 characters per second! Your goal today: 30 wpm at 94% accuracy; 98% of typists never reach 80 wpm, but 100% of them started exactly where you are now: lesson 1, key F.',
  'Version 4.0 (codename "Dojo") ships 50 lessons, 12 chapters, and 1 rule: eyes up! Studies from the 1900s-2020s agree — posture (feet flat, wrists floating), rhythm (60-90 keystrokes/minute), and anticipation (read 1-2 words ahead) explain 90% of typing skill. The remaining 10%? Showing up tomorrow. Type this final exam with pride; you have earned it.',
]

const PROPER_NOUNS = [
  'Anna', 'Otto', 'Maria', 'Paris', 'London', 'Berlin', 'Tokyo', 'Lima',
  'Oslo', 'Nadia', 'Rahul', 'Delhi', 'Kenya', 'Zambia', 'Ohio', 'Newton',
  'Galileo', 'Nepal', 'Utah', 'Bergen', 'Mario', 'Lucia', 'Hugo', 'Ingrid',
]

/* ------------------------------------------------------------------ */
/* Generators                                                          */
/* ------------------------------------------------------------------ */

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/** key-group tokens, weighted toward the lesson's new keys */
function genGroups(keys: string, newKeys: string, count: number): string[] {
  const all = (keys || newKeys).split('')
  const fresh = (newKeys || keys).split('')
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const len = randInt(2, 5)
    let s = ''
    let last = ''
    for (let j = 0; j < len; j++) {
      const pool = Math.random() < 0.62 && fresh.length ? fresh : all
      let k = pick(pool)
      if (k === last && Math.random() < 0.75) k = pick(pool)
      s += k
      last = k
    }
    out.push(s)
  }
  return out
}

/** real English words whose letters are all inside `keys` */
function wordsFromKeys(keys: string, count: number, minLen = 2): string[] {
  const set = new Set(keys.toLowerCase().split(''))
  const pool = COMMON_WORDS.filter((w) => w.length >= minLen && w.split('').every((c) => set.has(c)))
  if (pool.length < 15) return genGroups(keys, keys, count)
  const out: string[] = []
  for (let i = 0; i < count; i++) out.push(pick(pool))
  return out
}

function sentenceTokens(bank: string[], sentenceCount: number): string[] {
  const out: string[] = []
  const shuffled = [...bank].sort(() => Math.random() - 0.5)
  for (let i = 0; i < Math.min(sentenceCount, shuffled.length); i++) {
    for (const w of shuffled[i].split(' ')) out.push(w)
  }
  return out
}

/** digits mixed with words (number-row lessons) */
function digitMix(newKeys: string, count: number): string[] {
  const out: string[] = []
  const digits = newKeys.split('')
  for (let i = 0; i < count; i++) {
    const r = Math.random()
    if (r < 0.55) {
      let s = ''
      const len = randInt(1, 3)
      for (let j = 0; j < len; j++) s += pick(digits)
      out.push(s)
    } else if (r < 0.85) {
      out.push(pick(COMMON_WORDS))
    } else {
      out.push(randInt(1900, 2099).toString())
    }
  }
  return out
}

/** shifted-number symbols mixed with short words */
function wildTokens(count: number): string[] {
  const wild = ['@', '#', '$', '%', '&', '*']
  const shapes = [
    () => pick(wild),
    () => pick(wild) + pick(wild),
    () => pick(['a', 'b', 'e', 'x']) + pick(wild),
    () => pick(wild) + randInt(10, 99).toString(),
    () => pick(COMMON_WORDS),
  ]
  const out: string[] = []
  for (let i = 0; i < count; i++) out.push(pick(shapes)())
  return out
}

function numpad1(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const len = randInt(1, 3)
    let s = ''
    for (let j = 0; j < len; j++) s += pick(['4', '5', '6'])
    out.push(s)
  }
  return out
}

function numpad2(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const len = randInt(2, 4)
    let s = ''
    for (let j = 0; j < len; j++) s += pick(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
    out.push(s)
  }
  return out
}

function numpad3(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const a = randInt(12, 99)
    const b = randInt(2, 9)
    const op = pick(['+', '-', '*'])
    const res = op === '+' ? a + b : op === '-' ? a - b : a * b
    for (const w of `${a} ${op} ${b} = ${res}`.split(' ')) out.push(w)
  }
  return out
}

function capsTokens(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const w = pick(COMMON_WORDS)
    out.push(w[0].toUpperCase() + w.slice(1))
  }
  return out
}

function properNounTokens(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) out.push(pick(PROPER_NOUNS))
  return out
}

function topWordTokens(count: number): string[] {
  const top = COMMON_WORDS.slice(0, 100)
  const out: string[] = []
  for (let i = 0; i < count; i++) out.push(pick(top))
  return out
}

function bigramTokens(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    out.push(Math.random() < 0.3 ? pick(TOP_BIGRAMS) + pick(TOP_BIGRAMS) : pick(TOP_BIGRAMS))
  }
  return out
}

function trickyTokens(count: number): string[] {
  const out: string[] = []
  for (let i = 0; i < count; i++) out.push(pick(HARD_WORDS))
  return out
}

function longWordTokens(count: number): string[] {
  const pool = COMMON_WORDS.filter((w) => w.length >= 7)
  const out: string[] = []
  for (let i = 0; i < count; i++) out.push(pick(pool.length ? pool : COMMON_WORDS))
  return out
}

/** Generate the token stream for a course lesson. */
export function generateLessonTokens(les: CourseLesson): string[] {
  switch (les.gen) {
    case 'groups':
      return genGroups(les.keys, les.newKeys, les.count)
    case 'words':
      return wordsFromKeys(les.keys, les.count)
    case 'leftWords':
      return wordsFromKeys('qwertasdfgzxcvb', les.count)
    case 'rightWords':
      return wordsFromKeys('yuiophjkl;nm,.', les.count)
    case 'topWords':
      return topWordTokens(les.count)
    case 'caps':
      return capsTokens(les.count)
    case 'properNouns':
      return properNounTokens(les.count)
    case 'homeSentences':
      return sentenceTokens(HOME_SENTENCES, les.count)
    case 'sentences':
      return sentenceTokens(FULL_SENTENCES, les.count)
    case 'capsSentences':
      return sentenceTokens(CAP_SENTENCES, les.count)
    case 'numSentences':
      return sentenceTokens(NUM_SENTENCES, les.count)
    case 'digitMix':
      return digitMix(les.newKeys || '1234567890', les.count)
    case 'sym1':
      return sentenceTokens(SYM1_SENTENCES, les.count)
    case 'sym2':
      return sentenceTokens(SYM2_SENTENCES, les.count)
    case 'sym3':
      return sentenceTokens(SYM3_SENTENCES, les.count)
    case 'wild':
      return wildTokens(les.count)
    case 'numpad1':
      return numpad1(les.count)
    case 'numpad2':
      return numpad2(les.count)
    case 'numpad3':
      return numpad3(les.count)
    case 'bigrams':
      return bigramTokens(les.count)
    case 'phrases':
      return sentenceTokens(PHRASES, les.count)
    case 'prose':
      return sentenceTokens(PROSE_PARAGRAPHS, les.count)
    case 'tricky':
      return trickyTokens(les.count)
    case 'longWords':
      return longWordTokens(les.count)
    case 'mixedSentences':
      return sentenceTokens(MIXED_SENTENCES, les.count)
    case 'final1':
      return sentenceTokens(FINAL_PROSE, les.count)
    case 'final2':
      return sentenceTokens(FINAL_MIXED, les.count)
  }
}

/** finger label for a key ('f' → 'left index'), '' when unknown */
export function fingerOf(key: string): string {
  return FINGER_OF[key] ?? ''
}
