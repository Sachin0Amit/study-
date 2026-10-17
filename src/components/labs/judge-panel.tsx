'use client'

/**
 * In-Browser Code Judge Pro — runs real JS against real tests, no server judge.
 * User code executes through `new Function` with a local console collector and
 * a best-effort tick guard injected into every loop body (50M tick limit →
 * "Time limit exceeded"). Completions persist to localStorage and stream
 * evidence into the cognitive twin via /api/twin.
 *
 * Pro layer:
 *  - 25 challenges across 5 tracks with difficulty tiers + unlock progression
 *  - hidden tests (inputs withheld, still count for scoring)
 *  - XP / level / streak profile in localStorage (first solve ×2 bonus)
 *  - AI code review via /api/judge/review rendered in a dialog
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Markdown from 'react-markdown'
import {
  CheckCircle2,
  Circle,
  Eraser,
  EyeOff,
  Flame,
  Loader2,
  Lock,
  MoreHorizontal,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  Terminal,
  Trophy,
  XCircle,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { RING } from './types'
import { useStudy } from '@/store/useStudy'

/* ------------------------------------------------------------------ */
/*  Challenges                                                         */
/* ------------------------------------------------------------------ */

type Difficulty = 'easy' | 'medium' | 'hard'

type Track = 'warmups' | 'arrays' | 'strings' | 'recmath' | 'structures'

const TRACKS: { id: Track; label: string }[] = [
  { id: 'warmups', label: 'Warm-ups' },
  { id: 'arrays', label: 'Arrays' },
  { id: 'strings', label: 'Strings' },
  { id: 'recmath', label: 'Recursion & Math' },
  { id: 'structures', label: 'Structures' },
]

interface TestCase {
  desc: string
  args: unknown[]
  expected: unknown
  /** hidden tests count for scoring but never show inputs/expected */
  hidden?: boolean
}

interface Challenge {
  id: string
  title: string
  difficulty: Difficulty
  track: Track
  prompt: string
  fn: string
  starter: string
  tests: TestCase[]
}

const CHALLENGES: Challenge[] = [
  /* ------------------------- Warm-ups ------------------------- */
  {
    id: 'reverse-string',
    title: 'Reverse string',
    difficulty: 'easy',
    track: 'warmups',
    fn: 'reverseString',
    prompt:
      'Given a string `s`, return it reversed character by character. "hello" → "olleh". Built-ins are allowed — this one is about getting comfortable with the judge.',
    starter: `// "hello" -> "olleh"
function reverseString(s) {
  // your solution
}`,
    tests: [
      { desc: '"hello"', args: ['hello'], expected: 'olleh' },
      { desc: 'empty string', args: [''], expected: '' },
      { desc: 'single char "x"', args: ['x'], expected: 'x' },
      { desc: 'keeps spaces "ab cd"', args: ['ab cd'], expected: 'dc ba' },
      { desc: 'punctuation', args: ['12345!'], expected: '!54321', hidden: true },
    ],
  },
  {
    id: 'fizzbuzz',
    title: 'FizzBuzz',
    difficulty: 'easy',
    track: 'warmups',
    fn: 'fizzBuzz',
    prompt:
      'Return an array of strings for the numbers 1..n (inclusive): "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for both, and the number as a string otherwise. n = 0 yields an empty array.',
    starter: `// fizzBuzz(5) -> ["1","2","Fizz","4","Buzz"]
function fizzBuzz(n) {
  // your solution
}`,
    tests: [
      { desc: 'n = 5', args: [5], expected: ['1', '2', 'Fizz', '4', 'Buzz'] },
      {
        desc: 'n = 15 full table',
        args: [15],
        expected: [
          '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz',
          '11', 'Fizz', '13', '14', 'FizzBuzz',
        ],
      },
      { desc: 'n = 1', args: [1], expected: ['1'] },
      { desc: 'n = 3', args: [3], expected: ['1', '2', 'Fizz'] },
      { desc: 'n = 0', args: [0], expected: [], hidden: true },
    ],
  },
  {
    id: 'palindrome',
    title: 'Palindrome check',
    difficulty: 'easy',
    track: 'warmups',
    fn: 'isPalindrome',
    prompt:
      'A phrase is a palindrome if, after lowercasing and removing every non-alphanumeric character, it reads the same forwards and backwards. Return true or false. Empty strings count as palindromes.',
    starter: `// "A man, a plan, a canal: Panama" -> true
function isPalindrome(s) {
  // your solution
}`,
    tests: [
      { desc: 'classic phrase', args: ['A man, a plan, a canal: Panama'], expected: true },
      { desc: 'not a palindrome', args: ['race a car'], expected: false },
      { desc: 'empty string', args: [''], expected: true },
      { desc: 'punctuation ignored', args: ["No 'x' in Nixon"], expected: true },
      { desc: 'digit vs letter', args: ['0P'], expected: false, hidden: true },
      { desc: 'numeric string', args: ['12321'], expected: true, hidden: true },
    ],
  },
  {
    id: 'vowel-count',
    title: 'Vowel count',
    difficulty: 'easy',
    track: 'warmups',
    fn: 'countVowels',
    prompt:
      'Count the vowels in a string. Vowels are a, e, i, o, u — case-insensitive; y does not count.',
    starter: `// "hello" -> 2
function countVowels(s) {
  // your solution
}`,
    tests: [
      { desc: '"hello"', args: ['hello'], expected: 2 },
      { desc: 'empty string', args: [''], expected: 0 },
      { desc: 'case-insensitive', args: ['AEIOU aeiou'], expected: 10 },
      { desc: 'no vowels at all', args: ['xyz crwth'], expected: 0 },
      { desc: 'a whole sentence', args: ['Programming is fun'], expected: 5, hidden: true },
    ],
  },
  {
    id: 'reverse-words',
    title: 'Reverse words',
    difficulty: 'easy',
    track: 'warmups',
    fn: 'reverseWords',
    prompt:
      'Reverse the order of words in a string. Words are separated by one or more spaces; the result must be trimmed and joined with single spaces.',
    starter: `// "the sky is blue" -> "blue is sky the"
function reverseWords(s) {
  // your solution
}`,
    tests: [
      { desc: '"the sky is blue"', args: ['the sky is blue'], expected: 'blue is sky the' },
      { desc: 'extra spaces: "  hello   world  "', args: ['  hello   world  '], expected: 'world hello' },
      { desc: 'single word "a"', args: ['a'], expected: 'a' },
      { desc: 'empty string', args: [''], expected: '' },
    ],
  },

  /* ------------------------- Arrays ------------------------- */
  {
    id: 'binary-search',
    title: 'Binary search',
    difficulty: 'easy',
    track: 'arrays',
    fn: 'bsearch',
    prompt:
      'Given a sorted (ascending) array and a value, return the index of the value, or -1 if it is absent. Aim for O(log n) — that is the entire point.',
    starter: `// sorted arr, return index of x or -1
function bsearch(arr, x) {
  // your solution
}`,
    tests: [
      { desc: 'middle hit', args: [[1, 3, 5, 7, 9, 11], 7], expected: 3 },
      { desc: 'first element', args: [[1, 3, 5, 7, 9, 11], 1], expected: 0 },
      { desc: 'last element', args: [[1, 3, 5, 7, 9, 11], 11], expected: 5 },
      { desc: 'absent value', args: [[1, 3, 5, 7, 9, 11], 8], expected: -1 },
      { desc: 'empty array', args: [[], 5], expected: -1 },
      { desc: 'singleton hit', args: [[42], 42], expected: 0 },
    ],
  },
  {
    id: 'two-sum',
    title: 'Two sum',
    difficulty: 'medium',
    track: 'arrays',
    fn: 'twoSum',
    prompt:
      'Given an array of integers `nums` and an integer `target`, return the indices [i, j] with i < j such that nums[i] + nums[j] === target. Exactly one solution exists. A hash map does it in one pass.',
    starter: `// Return [i, j] with i < j such that nums[i] + nums[j] === target
function twoSum(nums, target) {
  // your solution
}`,
    tests: [
      { desc: '[2,7,11,15], target 9', args: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { desc: '[3,2,4], target 6', args: [[3, 2, 4], 6], expected: [1, 2] },
      { desc: '[3,3], target 6', args: [[3, 3], 6], expected: [0, 1] },
      { desc: 'negatives: [-1,-2,-3,-4,-5], target -8', args: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
    ],
  },
  {
    id: 'max-subarray',
    title: 'Max subarray (Kadane)',
    difficulty: 'medium',
    track: 'arrays',
    fn: 'maxSubarray',
    prompt:
      'Given an array of integers (positives and negatives), return the largest sum obtainable from a contiguous subarray. Kadane dynamic programming does it in one pass — a single element counts as a subarray, so an all-negative array returns its largest element.',
    starter: `// [-2,1,-3,4,-1,2,1,-5,4] -> 6
function maxSubarray(nums) {
  // your solution
}`,
    tests: [
      { desc: 'classic Kadane input', args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
      { desc: 'single element', args: [[1]], expected: 1 },
      { desc: 'mostly positive', args: [[5, 4, -1, 7, 8]], expected: 23 },
      { desc: 'all negative', args: [[-3, -1, -2]], expected: -1 },
      { desc: 'deep dip recovery', args: [[8, -19, 5, -4, 11, -2, 3]], expected: 13, hidden: true },
      { desc: 'alternating', args: [[2, -1, 2, -1, 2]], expected: 4, hidden: true },
    ],
  },
  {
    id: 'rotate-array',
    title: 'Rotate array',
    difficulty: 'medium',
    track: 'arrays',
    fn: 'rotateArray',
    prompt:
      'Rotate an array to the right by `k` steps and return it. k can be zero or larger than the length — wrap around with modulo. Do not mutate the input.',
    starter: `// [1,2,3,4,5,6,7], k=3 -> [5,6,7,1,2,3,4]
function rotateArray(nums, k) {
  // your solution
}`,
    tests: [
      { desc: '[1..7], k = 3', args: [[1, 2, 3, 4, 5, 6, 7], 3], expected: [5, 6, 7, 1, 2, 3, 4] },
      { desc: 'k = 0 is a no-op', args: [[1, 2, 3], 0], expected: [1, 2, 3] },
      { desc: 'negatives, k = 2', args: [[-1, -100, 3, 99], 2], expected: [3, 99, -1, -100] },
      { desc: 'single element, huge k', args: [[1], 99], expected: [1] },
      { desc: 'k wraps the length', args: [[1, 2], 3], expected: [2, 1], hidden: true },
      { desc: 'k wraps twice', args: [[7, 8, 9, 10], 6], expected: [9, 10, 7, 8], hidden: true },
    ],
  },
  {
    id: 'merge-intervals',
    title: 'Merge intervals',
    difficulty: 'medium',
    track: 'arrays',
    fn: 'mergeIntervals',
    prompt:
      'Given an array of closed intervals [start, end] in any order, merge all overlapping intervals and return them sorted by start. Touching intervals ([1,4] and [4,5]) merge; adjacent-but-disjoint ones ([1,4] and [5,6]) do not.',
    starter: `// [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]
function mergeIntervals(intervals) {
  // your solution
}`,
    tests: [
      { desc: 'overlapping chain', args: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
      { desc: 'touching intervals merge', args: [[[1, 4], [4, 5]]], expected: [[1, 5]] },
      { desc: 'unsorted input must be sorted', args: [[[5, 6], [1, 3]]], expected: [[1, 3], [5, 6]] },
      { desc: 'single point interval', args: [[[2, 2]]], expected: [[2, 2]] },
      { desc: 'adjacent but disjoint', args: [[[1, 4], [5, 6]]], expected: [[1, 4], [5, 6]], hidden: true },
      { desc: 'nested intervals', args: [[[1, 10], [2, 3], [4, 5]]], expected: [[1, 10]], hidden: true },
    ],
  },
  {
    id: 'matrix-transpose',
    title: 'Matrix transpose',
    difficulty: 'easy',
    track: 'arrays',
    fn: 'transpose',
    prompt:
      'Given a rectangular matrix as an array of rows, return its transpose (rows become columns). Do not mutate the input.',
    starter: `// [[1,2,3],[4,5,6]] -> [[1,4],[2,5],[3,6]]
function transpose(matrix) {
  // your solution
}`,
    tests: [
      { desc: '2×3', args: [[[1, 2, 3], [4, 5, 6]]], expected: [[1, 4], [2, 5], [3, 6]] },
      { desc: '3×1 column', args: [[[1], [2], [3]]], expected: [[1, 2, 3]] },
      { desc: '2×2', args: [[[1, 2], [3, 4]]], expected: [[1, 3], [2, 4]] },
      { desc: '1×1', args: [[[5]]], expected: [[5]] },
    ],
  },

  /* ------------------------- Strings ------------------------- */
  {
    id: 'run-length',
    title: 'Run-length encoding',
    difficulty: 'easy',
    track: 'strings',
    fn: 'runLengthEncode',
    prompt:
      'Run-length encode a string: collapse each run of equal characters into its count followed by the character. "aaabbc" → "3a2b1c". The empty string encodes to the empty string.',
    starter: `// "aaabbc" -> "3a2b1c"
function runLengthEncode(s) {
  // your solution
}`,
    tests: [
      { desc: '"aaabbc"', args: ['aaabbc'], expected: '3a2b1c' },
      { desc: 'empty string', args: [''], expected: '' },
      { desc: 'no repeats "abc"', args: ['abc'], expected: '1a1b1c' },
      { desc: 'all the same "aaaa"', args: ['aaaa'], expected: '4a' },
      { desc: 'runs may repeat', args: ['aabcccbb'], expected: '2a1b3c2b', hidden: true },
    ],
  },
  {
    id: 'longest-substring',
    title: 'Longest substring, no repeats',
    difficulty: 'medium',
    track: 'strings',
    fn: 'lengthOfLongestSubstring',
    prompt:
      'Given a string, return the length of the longest substring without repeating characters. A sliding window with a last-seen-index map solves it in O(n) — make sure the window shrinks correctly on repeats.',
    starter: `// "abcabcbb" -> 3 ("abc")
function lengthOfLongestSubstring(s) {
  // your solution
}`,
    tests: [
      { desc: '"abcabcbb"', args: ['abcabcbb'], expected: 3 },
      { desc: '"bbbbb"', args: ['bbbbb'], expected: 1 },
      { desc: '"pwwkew"', args: ['pwwkew'], expected: 3 },
      { desc: 'empty string', args: [''], expected: 0 },
      { desc: 'restart after repeat "dvdf"', args: ['dvdf'], expected: 3, hidden: true },
      { desc: 'window must shrink fully "abba"', args: ['abba'], expected: 2, hidden: true },
    ],
  },
  {
    id: 'anagram-groups',
    title: 'Anagram groups',
    difficulty: 'medium',
    track: 'strings',
    fn: 'groupAnagrams',
    prompt:
      'Group the words that are anagrams of each other. Return an array of groups where each group is sorted A→Z and the groups themselves are ordered by their first word. Every input word is lowercase.',
    starter: `// ["eat","tea","tan","ate","nat","bat"] ->
// [["ate","eat","tea"],["bat"],["nat","tan"]]
function groupAnagrams(words) {
  // your solution
}`,
    tests: [
      { desc: 'classic set', args: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']], expected: [['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']] },
      { desc: 'empty list', args: [[]], expected: [] },
      { desc: 'single word', args: [['a']], expected: [['a']] },
      {
        desc: 'six-letter anagrams',
        args: [['listen', 'silent', 'enlist', 'google', 'inlets']],
        expected: [['enlist', 'inlets', 'listen', 'silent'], ['google']],
        hidden: true,
      },
    ],
  },

  /* ------------------------- Recursion & Math ------------------------- */
  {
    id: 'gcd',
    title: 'Euclidean GCD',
    difficulty: 'easy',
    track: 'recmath',
    fn: 'gcd',
    prompt:
      'Return the greatest common divisor of two non-negative integers using the Euclidean algorithm: gcd(a, b) = gcd(b, a mod b), and gcd(x, 0) = x.',
    starter: `// gcd(12, 18) -> 6
function gcd(a, b) {
  // your solution
}`,
    tests: [
      { desc: 'gcd(12, 18)', args: [12, 18], expected: 6 },
      { desc: 'gcd(0, 5)', args: [0, 5], expected: 5 },
      { desc: 'gcd(5, 0)', args: [5, 0], expected: 5 },
      { desc: 'coprime gcd(17, 13)', args: [17, 13], expected: 1 },
      { desc: 'gcd(1071, 462)', args: [1071, 462], expected: 21, hidden: true },
    ],
  },
  {
    id: 'fib-memo',
    title: 'Fibonacci, fast',
    difficulty: 'easy',
    track: 'recmath',
    fn: 'fib',
    prompt:
      'fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2). Return fib(n) for n up to 40 — naive recursion recomputes exponentially; iterate or memoize.',
    starter: `// fib(0)=0, fib(1)=1 — make it fast for n=40
function fib(n) {
  // your solution
}`,
    tests: [
      { desc: 'fib(0)', args: [0], expected: 0 },
      { desc: 'fib(1)', args: [1], expected: 1 },
      { desc: 'fib(10)', args: [10], expected: 55 },
      { desc: 'fib(25)', args: [25], expected: 75025 },
      { desc: 'fib(40) — needs speed', args: [40], expected: 102334155 },
    ],
  },
  {
    id: 'fast-power',
    title: 'Fast exponentiation',
    difficulty: 'medium',
    track: 'recmath',
    fn: 'fastPower',
    prompt:
      'Compute base raised to a non-negative integer exponent `exp` using fast exponentiation (square-and-multiply) so it finishes in O(log exp) multiplications. Results can exceed 2^31 — plain JS numbers handle that. The base may be negative.',
    starter: `// fastPower(2, 10) -> 1024
function fastPower(base, exp) {
  // your solution
}`,
    tests: [
      { desc: '2^10', args: [2, 10], expected: 1024 },
      { desc: '3^0', args: [3, 0], expected: 1 },
      { desc: '5^3', args: [5, 3], expected: 125 },
      { desc: '2^31 exceeds int32', args: [2, 31], expected: 2147483648 },
      { desc: 'negative base (-2)^5', args: [-2, 5], expected: -32 },
      { desc: '7^13', args: [7, 13], expected: 96889010407, hidden: true },
      { desc: '(-3)^4', args: [-3, 4], expected: 81, hidden: true },
    ],
  },
  {
    id: 'count-primes',
    title: 'Prime count (sieve)',
    difficulty: 'medium',
    track: 'recmath',
    fn: 'countPrimes',
    prompt:
      'Count the prime numbers strictly less than `n`. Build a boolean sieve of Eratosthenes: cross out multiples of every prime p with p·p < n, then count what survives. n can reach 10^6 — per-number trial division is too slow.',
    starter: `// countPrimes(10) -> 4  (2, 3, 5, 7)
function countPrimes(n) {
  // your solution
}`,
    tests: [
      { desc: 'primes below 10', args: [10], expected: 4 },
      { desc: 'primes below 2', args: [2], expected: 0 },
      { desc: 'primes below 3', args: [3], expected: 1 },
      { desc: 'n = 0', args: [0], expected: 0 },
      { desc: 'primes below 100', args: [100], expected: 25, hidden: true },
      { desc: 'primes below 1000', args: [1000], expected: 168, hidden: true },
    ],
  },
  {
    id: 'hanoi-moves',
    title: 'Tower of Hanoi moves',
    difficulty: 'medium',
    track: 'recmath',
    fn: 'hanoiMoves',
    prompt:
      'Return the minimum number of moves needed to solve the Tower of Hanoi with `n` disks (a bigger disk may never rest on a smaller one). The recurrence t(n) = 2·t(n−1) + 1 unwraps to 2^n − 1. n can be up to 30, so return the count, not a move list.',
    starter: `// hanoiMoves(3) -> 7
function hanoiMoves(n) {
  // your solution
}`,
    tests: [
      { desc: 'n = 1', args: [1], expected: 1 },
      { desc: 'n = 3', args: [3], expected: 7 },
      { desc: 'n = 0', args: [0], expected: 0 },
      { desc: 'n = 10', args: [10], expected: 1023 },
      { desc: 'n = 20', args: [20], expected: 1048575, hidden: true },
      { desc: 'n = 16', args: [16], expected: 65535, hidden: true },
    ],
  },

  /* ------------------------- Structures ------------------------- */
  {
    id: 'valid-brackets',
    title: 'Valid brackets',
    difficulty: 'easy',
    track: 'structures',
    fn: 'isValid',
    prompt:
      'Given a string containing the characters ( ) [ ] { } and possibly spaces, return true if every bracket is matched and correctly nested, false otherwise.',
    starter: `// "([)]" -> false, "{[()]}" -> true
function isValid(s) {
  // your solution
}`,
    tests: [
      { desc: '"()"', args: ['()'], expected: true },
      { desc: '"()[]{}"', args: ['()[]{}'], expected: true },
      { desc: '"(]" mismatch', args: ['(]'], expected: false },
      { desc: '"([)]" interleaved', args: ['([)]'], expected: false },
      { desc: '"{[]}" nested', args: ['{[]}'], expected: true },
      { desc: 'empty string', args: [''], expected: true },
    ],
  },
  {
    id: 'stack-with-max',
    title: 'Stack with max',
    difficulty: 'medium',
    track: 'structures',
    fn: 'maxStack',
    prompt:
      'Simulate a stack that also reports its maximum. `ops` is a list of operations:\n`[\'push\', x]` pushes x, `[\'pop\']` removes and returns the top (null when empty), `[\'max\']` returns the current maximum (null when empty), `[\'top\']` returns the top without removing (null when empty).\nReturn an array with the result of every pop / max / top, in order — in O(1) per op if you can.',
    starter: `// ops: ['push', x] | ['pop'] | ['max'] | ['top']
// return the results of every pop / max / top, in order
function maxStack(ops) {
  // your solution
}`,
    tests: [
      {
        desc: 'push 2,1,5 then max, pop, max',
        args: [[['push', 2], ['push', 1], ['push', 5], ['max'], ['pop'], ['max']]],
        expected: [5, 5, 2],
      },
      {
        desc: 'max tracks new peaks',
        args: [[['push', 1], ['max'], ['push', 3], ['max'], ['pop'], ['max']]],
        expected: [1, 3, 3, 1],
      },
      { desc: 'empty stack returns null', args: [[['pop'], ['max'], ['top']]], expected: [null, null, null] },
      {
        desc: 'top peeks without popping',
        args: [[['push', 7], ['top'], ['push', 9], ['top'], ['max']]],
        expected: [7, 9, 9],
      },
    ],
  },
  {
    id: 'search-rotated',
    title: 'Search rotated array',
    difficulty: 'hard',
    track: 'structures',
    fn: 'searchRotated',
    prompt:
      'A sorted array of distinct integers has been rotated at an unknown pivot, e.g. [4,5,6,7,0,1,2]. Return the index of `target`, or -1 if it is absent — in O(log n). At each step decide which half of the window is fully sorted, then discard the other half.',
    starter: `// [4,5,6,7,0,1,2], target 0 -> 4
function searchRotated(nums, target) {
  // your solution
}`,
    tests: [
      { desc: 'target in rotated part', args: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
      { desc: 'absent target', args: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
      { desc: 'not rotated', args: [[0, 1, 2], 0], expected: 0 },
      { desc: 'two elements', args: [[3, 1], 1], expected: 1 },
      { desc: 'single hit', args: [[1], 1], expected: 0 },
      { desc: 'single miss', args: [[1], 0], expected: -1 },
      { desc: 'longer rotation', args: [[5, 6, 7, 8, 9, 1, 2, 3], 3], expected: 7, hidden: true },
      { desc: 'target in sorted half', args: [[4, 5, 6, 7, 0, 1, 2], 6], expected: 2, hidden: true },
    ],
  },
  {
    id: 'lru-cache',
    title: 'LRU cache',
    difficulty: 'hard',
    track: 'structures',
    fn: 'lruCache',
    prompt:
      'Simulate an LRU (least-recently-used) cache of the given `capacity`. `ops` is a list of operations:\n`[\'put\', key, value]` inserts or refreshes a key (evicting the least recently used key when over capacity), `[\'get\', key]` returns the value or -1 and marks the key as recently used.\nReturn the results of every get, in order. A JS Map iterates in insertion order — exactly the recency order you need.',
    starter: `// ops: ['put', key, value] | ['get', key] — return every get result
function lruCache(ops, capacity) {
  // your solution
}`,
    tests: [
      {
        desc: 'classic capacity 2',
        args: [
          [
            ['put', 1, 1], ['put', 2, 2], ['get', 1], ['put', 3, 3], ['get', 2],
            ['put', 4, 4], ['get', 1], ['get', 3], ['get', 4],
          ],
          2,
        ],
        expected: [1, -1, -1, 3, 4],
      },
      {
        desc: 'capacity 1 thrash',
        args: [[['put', 1, 1], ['get', 1], ['put', 2, 2], ['get', 1], ['get', 2]], 1],
        expected: [1, -1, 2],
      },
      { desc: 'get on empty cache', args: [[['get', 9]], 2], expected: [-1] },
      {
        desc: 'put refreshes recency',
        args: [[['put', 1, 1], ['put', 2, 2], ['put', 1, 10], ['get', 1], ['put', 3, 3], ['get', 2]], 2],
        expected: [10, -1],
      },
      {
        desc: 'capacity 3 longer trace',
        args: [
          [
            ['put', 1, 1], ['put', 2, 2], ['put', 3, 3], ['get', 1], ['put', 4, 4],
            ['get', 2], ['get', 3], ['put', 5, 5], ['get', 1], ['get', 4], ['get', 5],
          ],
          3,
        ],
        expected: [1, -1, 3, -1, 4, 5],
        hidden: true,
      },
      {
        desc: 'get protects from eviction',
        args: [[['put', 1, 1], ['put', 2, 2], ['get', 2], ['put', 3, 3], ['get', 1], ['get', 2], ['get', 3]], 2],
        expected: [2, -1, 2, 3],
        hidden: true,
      },
    ],
  },
  {
    id: 'interval-intersect',
    title: 'Interval intersection',
    difficulty: 'medium',
    track: 'structures',
    fn: 'intersectIntervals',
    prompt:
      'Given two lists of closed, disjoint, sorted intervals A and B, return their intersection as a list of closed intervals. Two pointers: the overlap is [max(starts), min(ends)] whenever that is a valid interval; advance the pointer whose interval ends first.',
    starter: `// A=[[0,2],[5,10]], B=[[1,5]] -> [[1,2],[5,5]]
function intersectIntervals(A, B) {
  // your solution
}`,
    tests: [
      {
        desc: 'interleaved lists',
        args: [
          [[[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]],
        ],
        expected: [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]],
      },
      { desc: 'empty first list', args: [[], [[1, 5]]], expected: [] },
      { desc: 'no overlap', args: [[[1, 2]], [[3, 4]]], expected: [] },
      { desc: 'identical lists', args: [[[[1, 3], [5, 7]], [[1, 3], [5, 7]]]], expected: [[1, 3], [5, 7]], hidden: true },
      { desc: 'nested interval', args: [[[[0, 10]], [[3, 4]]]], expected: [[3, 4]], hidden: true },
    ],
  },
  {
    id: 'debounce-sim',
    title: 'Debounce simulation',
    difficulty: 'hard',
    track: 'structures',
    fn: 'debounceSim',
    prompt:
      'Simulate a debounced function without timers. `calls` is an array of { t, arg } events sorted by time t; `wait` is the debounce window in ms. A call at time T fires at T + wait iff no other call occurs in the window (T, T + wait]. Return the args of the calls that fire, in firing order.',
    starter: `// calls: [{t: 0, arg: 'a'}, {t: 100, arg: 'b'}], wait: 100
// 'a' is cancelled by 'b' (window (0, 100] contains 100)
function debounceSim(calls, wait) {
  // your solution — pure logic, no setTimeout
}`,
    tests: [
      {
        desc: 'a@0,b@100,c@250 / wait 100',
        args: [[{ t: 0, arg: 'a' }, { t: 100, arg: 'b' }, { t: 250, arg: 'c' }], 100],
        expected: ['b', 'c'],
      },
      {
        desc: 'tight cluster x@0,y@50,z@90 / wait 40',
        args: [[{ t: 0, arg: 'x' }, { t: 50, arg: 'y' }, { t: 90, arg: 'z' }], 40],
        expected: ['x', 'z'],
      },
      { desc: 'single call always fires', args: [[{ t: 0, arg: 'only' }], 100], expected: ['only'] },
      {
        desc: 'cascade a@0,b@99,c@198 / wait 100',
        args: [[{ t: 0, arg: 'a' }, { t: 99, arg: 'b' }, { t: 198, arg: 'c' }], 100],
        expected: ['c'],
      },
    ],
  },
]

const BY_TRACK: Record<Track, Challenge[]> = {
  warmups: CHALLENGES.filter((c) => c.track === 'warmups'),
  arrays: CHALLENGES.filter((c) => c.track === 'arrays'),
  strings: CHALLENGES.filter((c) => c.track === 'strings'),
  recmath: CHALLENGES.filter((c) => c.track === 'recmath'),
  structures: CHALLENGES.filter((c) => c.track === 'structures'),
}

const DIFF_STYLE: Record<Difficulty, string> = {
  easy: 'border-emerald-400/35 bg-emerald-400/10 text-emerald-300',
  medium: 'border-amber-400/35 bg-amber-400/10 text-amber-300',
  hard: 'border-rose-400/35 bg-rose-400/10 text-rose-300',
}

/* ------------------------------------------------------------------ */
/*  Sandbox: tick-guard injection + guarded Function runner            */
/* ------------------------------------------------------------------ */

const TICK_LIMIT = 50_000_000

/**
 * Best-effort rewrite: injects `__sv_tick();` as the first statement of every
 * loop body (for / while / do), skipping string & comment spans so literals
 * like "for(" are never mangled.
 */
function injectTicks(code: string): string {
  let out = ''
  let i = 0
  const n = code.length
  const isWord = (c: string) => /[A-Za-z0-9_$]/.test(c)
  while (i < n) {
    const c = code[i]
    // comments
    if (c === '/' && code[i + 1] === '/') {
      while (i < n && code[i] !== '\n') out += code[i++]
      continue
    }
    if (c === '/' && code[i + 1] === '*') {
      out += '/*'
      i += 2
      while (i < n && !(code[i] === '*' && code[i + 1] === '/')) out += code[i++]
      out += '*/'
      i += 2
      continue
    }
    // strings + template literals (no escape-aware handling of ${} — best effort)
    if (c === '"' || c === "'" || c === '`') {
      const quote = c
      out += c
      i++
      while (i < n && code[i] !== quote) {
        if (code[i] === '\\') {
          out += code[i++]
          if (i < n) out += code[i++]
          continue
        }
        out += code[i++]
      }
      if (i < n) out += code[i++]
      continue
    }
    // loop keywords
    if ((c === 'f' || c === 'w' || c === 'd') && !isWord(code[i - 1] ?? ' ')) {
      const rest = code.slice(i)
      const kw = rest.match(/^(for|while|do)\b/)
      if (kw) {
        const word = kw[1]
        out += word
        i += word.length
        if (word === 'do') {
          const mm = code.slice(i).match(/^\s*\{/)
          if (mm) {
            out += mm[0] + '__sv_tick();'
            i += mm[0].length
          }
          continue
        }
        const open = code.slice(i).match(/^\s*\(/)
        if (open) {
          out += open[0]
          i += open[0].length
          let depth = 1
          while (i < n && depth > 0) {
            const cc = code[i]
            if (cc === '(') depth++
            else if (cc === ')') depth--
            out += cc
            i++
          }
          const brace = code.slice(i).match(/^\s*\{/)
          if (brace) {
            out += brace[0] + '__sv_tick();'
            i += brace[0].length
          }
          continue
        }
        continue
      }
    }
    out += c
    i++
  }
  return out
}

function fmtVal(v: unknown): string {
  if (v === undefined) return 'undefined'
  if (v === null) return 'null'
  if (typeof v === 'function') return 'ƒ'
  if (typeof v === 'number') return String(v)
  if (typeof v === 'string') return JSON.stringify(v)
  if (typeof v === 'boolean') return String(v)
  try {
    return JSON.stringify(v)
  } catch {
    return String(v)
  }
}

function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true
  if (typeof a !== typeof b || a === null || b === null || a === undefined || b === undefined) {
    return false
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((v, i) => deepEqual(v, b[i]))
  }
  if (typeof a === 'object' && typeof b === 'object') {
    const ka = Object.keys(a as object)
    const kb = Object.keys(b as object)
    return (
      ka.length === kb.length &&
      ka.every((k) =>
        deepEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k]),
      )
    )
  }
  return false
}

interface TestResult {
  desc: string
  pass: boolean
  hidden: boolean
  expected: string
  got: string
  ms: number
}

interface RunOutcome {
  results: TestResult[]
  logs: string[]
  error: string | null
  allPass: boolean
}

function runChallenge(ch: Challenge, code: string): RunOutcome {
  const logs: string[] = []
  let factory: (tick: () => void, consoleObj: { log: (...a: unknown[]) => void }) => unknown
  try {
    const transformed = injectTicks(code)
    factory = new Function(
      '__sv_tick',
      'console',
      `"use strict";\n${transformed}\n;return typeof ${ch.fn} === 'function' ? ${ch.fn} : undefined;`,
    ) as typeof factory
  } catch (e) {
    return {
      results: [],
      logs,
      error: `Syntax error — ${(e as Error).message}`,
      allPass: false,
    }
  }

  const results: TestResult[] = []
  let fn: unknown
  try {
    let ticks = 0
    const tick = () => {
      if (++ticks > TICK_LIMIT) {
        throw new Error('Time limit exceeded (possible infinite loop)')
      }
    }
    const collector = {
      log: (...a: unknown[]) => {
        if (logs.length < 200) logs.push(a.map(fmtVal).join(' '))
      },
    }
    fn = factory(tick, collector)
  } catch (e) {
    return { results, logs, error: (e as Error).message, allPass: false }
  }
  if (typeof fn !== 'function') {
    return {
      results,
      logs,
      error: `Define a function named "${ch.fn}" for this challenge.`,
      allPass: false,
    }
  }

  let hiddenSeen = 0
  for (const t of ch.tests) {
    const t0 = performance.now()
    let got: unknown
    let err: string | null = null
    try {
      let ticks = 0
      const tick = () => {
        if (++ticks > TICK_LIMIT) {
          throw new Error('Time limit exceeded (possible infinite loop)')
        }
      }
      const collector = {
        log: (...a: unknown[]) => {
          if (logs.length < 200) logs.push(a.map(fmtVal).join(' '))
        },
      }
      // re-enter scope per test so closures/state reset
      const testFn = (factory as (t2: () => void, c2: { log: (...a: unknown[]) => void }) => unknown)(
        tick,
        collector,
      ) as (...a: unknown[]) => unknown
      got = (testFn ?? fn)(...(t.args as unknown[]))
    } catch (e) {
      err = (e as Error).message
    }
    const ms = performance.now() - t0
    const isHidden = t.hidden === true
    if (isHidden) hiddenSeen++
    results.push({
      desc: isHidden ? `Hidden test ${hiddenSeen}` : t.desc,
      pass: err === null && deepEqual(got, t.expected),
      hidden: isHidden,
      expected: fmtVal(t.expected),
      got: err !== null ? `threw: ${err}` : fmtVal(got),
      ms,
    })
  }
  return {
    results,
    logs,
    error: null,
    allPass: results.length > 0 && results.every((r) => r.pass),
  }
}

/* ------------------------------------------------------------------ */
/*  XP / level / profile persistence                                   */
/* ------------------------------------------------------------------ */

const DONE_KEY = 'sv-judge-done' // legacy badge list, kept in sync

const XP_BY_DIFFICULTY: Record<Difficulty, number> = { easy: 10, medium: 25, hard: 50 }
const FIRST_SOLVE_MULTIPLIER = 2
/** level L needs 25·L² XP; reaching this level unlocks every challenge */
const UNLOCK_LEVEL = 2

interface JudgeProfile {
  xp: number
  level: number
  solved: string[]
  streak: number
  lastSolvedAt: string | null
}

const FRESH_PROFILE: JudgeProfile = {
  xp: 0,
  level: 0,
  solved: [],
  streak: 0,
  lastSolvedAt: null,
}

const profileKey = (deviceId: string) => `sv-judge-profile-${deviceId}`

function levelFromXp(xp: number): number {
  return Math.floor(Math.sqrt(Math.max(0, xp) / 25))
}

function levelBounds(level: number): { floor: number; ceil: number } {
  return { floor: 25 * level * level, ceil: 25 * (level + 1) * (level + 1) }
}

function challengeById(id: string): Challenge | undefined {
  return CHALLENGES.find((c) => c.id === id)
}

function readProfile(deviceId: string): JudgeProfile {
  const profile: JudgeProfile = { ...FRESH_PROFILE, solved: [] }
  try {
    const raw = localStorage.getItem(profileKey(deviceId))
    const parsed = raw ? (JSON.parse(raw) as Partial<JudgeProfile>) : null
    if (typeof parsed?.xp === 'number' && parsed.xp >= 0) profile.xp = Math.floor(parsed.xp)
    if (Array.isArray(parsed?.solved)) {
      profile.solved = parsed.solved.filter(
        (s): s is string => typeof s === 'string' && challengeById(s) !== undefined,
      )
    }
    if (typeof parsed?.streak === 'number' && parsed.streak >= 0) {
      profile.streak = Math.floor(parsed.streak)
    }
    if (typeof parsed?.lastSolvedAt === 'string') profile.lastSolvedAt = parsed.lastSolvedAt
  } catch {
    /* storage unavailable — fresh profile */
  }
  // migrate legacy 'sv-judge-done' badges (pre-XP solves earn base XP once)
  try {
    const legacy = localStorage.getItem(DONE_KEY)
    const ids = legacy ? (JSON.parse(legacy) as unknown) : null
    if (Array.isArray(ids)) {
      const have = new Set(profile.solved)
      for (const id of ids) {
        if (typeof id !== 'string' || have.has(id)) continue
        const ch = challengeById(id)
        if (!ch) continue
        profile.solved.push(id)
        profile.xp += XP_BY_DIFFICULTY[ch.difficulty]
        have.add(id)
      }
    }
  } catch {
    /* legacy unreadable */
  }
  profile.level = levelFromXp(profile.xp)
  return profile
}

function writeProfile(deviceId: string, p: JudgeProfile) {
  try {
    localStorage.setItem(profileKey(deviceId), JSON.stringify(p))
    localStorage.setItem(DONE_KEY, JSON.stringify(p.solved))
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new CustomEvent('sv-judge-done'))
}

/** streak: same day = unchanged, yesterday = +1, older gap = restart at 1 */
function updatedStreak(p: JudgeProfile): number {
  const base = Math.max(1, p.streak)
  if (!p.lastSolvedAt) return base
  const last = new Date(p.lastSolvedAt)
  if (Number.isNaN(last.getTime())) return base
  const now = new Date()
  const lastDay = Date.UTC(last.getUTCFullYear(), last.getUTCMonth(), last.getUTCDate())
  const nowDay = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  const days = Math.round((nowDay - lastDay) / 86_400_000)
  if (days <= 0) return base
  if (days === 1) return p.streak + 1
  return 1
}

function isUnlocked(c: Challenge, solved: Set<string>, level: number): boolean {
  if (solved.has(c.id)) return true
  const list = BY_TRACK[c.track]
  const idx = list.findIndex((x) => x.id === c.id)
  if (idx <= 0) return true
  return solved.has(list[idx - 1].id) || level >= UNLOCK_LEVEL
}

function previousInTrack(c: Challenge): Challenge | null {
  const list = BY_TRACK[c.track]
  const idx = list.findIndex((x) => x.id === c.id)
  return idx > 0 ? list[idx - 1] : null
}

/* ------------------------------------------------------------------ */
/*  Editor                                                             */
/* ------------------------------------------------------------------ */

function CodeEditor({
  value,
  onChange,
  errorLine,
}: {
  value: string
  onChange: (v: string) => void
  errorLine?: number | null
}) {
  const taRef = useRef<HTMLTextAreaElement>(null)
  const gutterRef = useRef<HTMLDivElement>(null)
  const lines = useMemo(() => value.split('\n'), [value])

  const syncScroll = () => {
    if (gutterRef.current && taRef.current) {
      gutterRef.current.scrollTop = taRef.current.scrollTop
    }
  }

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const ta = e.currentTarget
      const { selectionStart: s, selectionEnd: en } = ta
      const next = value.slice(0, s) + '  ' + value.slice(en)
      onChange(next)
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = s + 2
      })
    }
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background font-mono text-[13px] leading-[22px]">
      <div
        ref={gutterRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-11 select-none overflow-hidden border-r border-border/70 bg-card/60 text-right"
      >
        {lines.map((_, i) => (
          <div
            key={i}
            className={`h-[22px] pr-2 text-[11px] leading-[22px] tabular-nums ${
              errorLine === i + 1 ? 'bg-rose-400/20 font-bold text-rose-300' : 'text-muted-foreground/60'
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <textarea
        ref={taRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={syncScroll}
        onKeyDown={onKeyDown}
        spellCheck={false}
        aria-label="Solution code editor"
        rows={14}
        className="block w-full resize-y bg-transparent py-2 pl-14 pr-3 font-mono text-[13px] leading-[22px] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400/60"
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Confetti (pure CSS keyframes)                                      */
/* ------------------------------------------------------------------ */

const CONFETTI_CSS = `
@keyframes sv-judge-confetti-fall {
  0% { transform: translate3d(0, -14px, 0) rotate(0deg); opacity: 1; }
  100% { transform: translate3d(var(--sv-drift, 0px), 78vh, 0) rotate(660deg); opacity: 0; }
}
.sv-judge-confetti {
  animation-name: sv-judge-confetti-fall;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}
`

const CONFETTI_COLORS = ['#34d399', '#fbbf24', '#38bdf8', '#fb7185', '#2dd4bf', '#c084fc']

function ConfettiBurst() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
        duration: 1.15 + Math.random() * 0.75,
        w: 6 + Math.random() * 6,
        h: 4 + Math.random() * 4,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        drift: Math.round((Math.random() - 0.5) * 220),
      })),
    // fresh pieces on every mount (parent keys this by timestamp)
    [],
  )
  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden="true">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="sv-judge-confetti absolute top-[-14px] rounded-[2px]"
          style={
            {
              left: `${p.left}%`,
              width: p.w,
              height: p.h,
              backgroundColor: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--sv-drift': `${p.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  AI review dialog                                                   */
/* ------------------------------------------------------------------ */

function ReviewMarkdown({ text }: { text: string }) {
  return (
    <div className="text-sm">
      <Markdown
        components={{
          h1: ({ children }) => (
            <h3 className="mb-1 mt-4 text-[12px] font-black uppercase tracking-wider text-emerald-300">
              {children}
            </h3>
          ),
          h2: ({ children }) => (
            <h3 className="mb-1 mt-4 text-[12px] font-black uppercase tracking-wider text-emerald-300">
              {children}
            </h3>
          ),
          h3: ({ children }) => (
            <h3 className="mb-1 mt-4 text-[12px] font-black uppercase tracking-wider text-emerald-300">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="mt-2 text-[13px] leading-relaxed text-foreground/85">{children}</p>,
          strong: ({ children }) => <strong className="font-bold text-emerald-300">{children}</strong>,
          ul: ({ children }) => (
            <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-foreground/85">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-1.5 list-decimal space-y-1 pl-5 text-[13px] leading-relaxed text-foreground/85">
              {children}
            </ol>
          ),
          code: ({ children }) => (
            <code className="rounded bg-emerald-400/10 px-1.5 py-0.5 font-mono text-[11.5px] text-emerald-200">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="mt-2 overflow-x-auto rounded-lg border border-border/70 bg-background/70 p-3 font-mono text-[11.5px] leading-relaxed">
              {children}
            </pre>
          ),
        }}
      >
        {text}
      </Markdown>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type TrackTab = Track | 'all'

export function JudgePanel() {
  const ensureDevice = useStudy((s) => s.ensureDevice)
  const [activeId, setActiveId] = useState(CHALLENGES[0].id)
  const [code, setCode] = useState<Record<string, string>>(
    () => Object.fromEntries(CHALLENGES.map((c) => [c.id, c.starter])),
  )
  const [running, setRunning] = useState(false)
  const [profile, setProfile] = useState<JudgeProfile>(() => ({ ...FRESH_PROFILE, solved: [] }))
  const [tab, setTab] = useState<TrackTab>('all')
  const [query, setQuery] = useState('')
  const [celebrate, setCelebrate] = useState<number | null>(null)
  const [lastGain, setLastGain] = useState<{
    challengeId: string
    xp: number
    level: number
    leveledUp: boolean
  } | null>(null)
  const [resetArmed, setResetArmed] = useState(false)
  const resetTimer = useRef<number | null>(null)

  // AI review state
  const [reviewOpen, setReviewOpen] = useState(false)
  const [reviewLoading, setReviewLoading] = useState(false)
  const [reviewText, setReviewText] = useState<string | null>(null)
  const [reviewError, setReviewError] = useState<string | null>(null)

  const challenge = CHALLENGES.find((c) => c.id === activeId) as Challenge

  const solvedSet = useMemo(() => new Set(profile.solved), [profile.solved])
  const level = levelFromXp(profile.xp)
  const bounds = levelBounds(level)
  const lvlInto = profile.xp - bounds.floor
  const lvlSpan = bounds.ceil - bounds.floor
  const lvlPct = Math.min(100, Math.round((lvlInto / lvlSpan) * 100))
  const solvedCount = profile.solved.length

  useEffect(() => {
    let deviceId = ''
    try {
      deviceId = ensureDevice()
    } catch {
      return
    }
    const refresh = () => setProfile(readProfile(deviceId))
    refresh()
    window.addEventListener('sv-judge-done', refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener('sv-judge-done', refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [ensureDevice])

  useEffect(() => {
    if (celebrate === null) return
    const t = window.setTimeout(() => setCelebrate(null), 2200)
    return () => window.clearTimeout(t)
  }, [celebrate])

  useEffect(
    () => () => {
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current)
    },
    [],
  )

  // clear stale results when switching challenges — derived via key reset
  const [outcome, setOutcome] = useState<RunOutcome | null>(null)
  const [lastActiveId, setLastActiveId] = useState(activeId)
  if (lastActiveId !== activeId) {
    setLastActiveId(activeId)
    setOutcome(null)
    setLastGain(null)
  }

  const report = useCallback(
    (correct: boolean, weight: number, challengeId: string) => {
      try {
        const deviceId = ensureDevice()
        void fetch('/api/twin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            deviceId,
            skillKey: 'clrs-ch3-s1',
            kind: 'judge',
            correct,
            weight,
            meta: { challenge: challengeId },
          }),
        }).catch(() => {
          /* twin offline-tolerant */
        })
      } catch {
        /* ensureDevice unavailable */
      }
    },
    [ensureDevice],
  )

  const awardSolve = (ch: Challenge) => {
    let deviceId = ''
    try {
      deviceId = ensureDevice()
    } catch {
      return
    }
    const current = readProfile(deviceId)
    if (current.solved.includes(ch.id)) {
      setProfile(current)
      return
    }
    const gained = XP_BY_DIFFICULTY[ch.difficulty] * FIRST_SOLVE_MULTIPLIER
    const next: JudgeProfile = {
      xp: current.xp + gained,
      level: 0,
      solved: [...current.solved, ch.id],
      streak: updatedStreak(current),
      lastSolvedAt: new Date().toISOString(),
    }
    next.level = levelFromXp(next.xp)
    writeProfile(deviceId, next)
    setProfile(next)
    setCelebrate(Date.now())
    setLastGain({
      challengeId: ch.id,
      xp: gained,
      level: next.level,
      leveledUp: next.level > current.level,
    })
  }

  const run = () => {
    setRunning(true)
    // let the spinner paint before the synchronous run
    setTimeout(() => {
      const result = runChallenge(challenge, code[challenge.id] ?? '')
      setOutcome(result)
      setRunning(false)
      if (result.allPass) {
        if (!solvedSet.has(challenge.id)) awardSolve(challenge)
        report(true, 2, challenge.id)
      } else if (result.results.length > 0) {
        report(false, 1, challenge.id)
      }
    }, 30)
  }

  const openReview = async () => {
    setReviewOpen(true)
    setReviewLoading(true)
    setReviewError(null)
    setReviewText(null)
    try {
      const res = await fetch('/api/judge/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          challengeId: challenge.id,
          challengeTitle: challenge.title,
          code: code[challenge.id] ?? '',
          passed: outcome?.results.filter((r) => r.pass).length ?? 0,
          failed: outcome?.results.filter((r) => !r.pass).length ?? 0,
        }),
      })
      const data = (await res.json().catch(() => null)) as { review?: string; error?: string } | null
      if (!res.ok || !data?.review) throw new Error(data?.error ?? `review failed (HTTP ${res.status})`)
      setReviewText(data.review)
    } catch (e) {
      setReviewError(
        e instanceof Error ? e.message : 'The reviewer is unreachable — try again in a moment.',
      )
    } finally {
      setReviewLoading(false)
    }
  }

  const onResetProgress = () => {
    if (!resetArmed) {
      setResetArmed(true)
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current)
      resetTimer.current = window.setTimeout(() => setResetArmed(false), 3500)
      return
    }
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current)
    setResetArmed(false)
    try {
      const deviceId = ensureDevice()
      localStorage.removeItem(profileKey(deviceId))
      localStorage.removeItem(DONE_KEY)
    } catch {
      /* storage unavailable */
    }
    window.dispatchEvent(new CustomEvent('sv-judge-done'))
    setProfile({ ...FRESH_PROFILE, solved: [] })
    setActiveId(CHALLENGES[0].id)
    setOutcome(null)
    setLastGain(null)
  }

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matches = (c: Challenge) => !q || c.title.toLowerCase().includes(q) || c.id.includes(q)
    const source =
      tab === 'all'
        ? TRACKS.map((t) => ({ id: t.id as string, label: t.label, list: BY_TRACK[t.id] }))
        : [{ id: tab as string, label: TRACKS.find((t) => t.id === tab)?.label ?? '', list: BY_TRACK[tab] }]
    return source
      .map((g) => ({ ...g, list: g.list.filter(matches) }))
      .filter((g) => g.list.length > 0)
  }, [tab, query])

  const visibleTests = challenge.tests.filter((t) => !t.hidden).length
  const hiddenTests = challenge.tests.length - visibleTests
  const justGained = lastGain !== null && lastGain.challengeId === challenge.id ? lastGain : null

  const tabChip = (active: boolean) =>
    `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-colors ${RING} ${
      active
        ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-200'
        : 'border-border/70 bg-background/40 text-muted-foreground hover:text-foreground'
    }`

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="grid gap-5 lg:grid-cols-[290px_minmax(0,1fr)]"
    >
      <style dangerouslySetInnerHTML={{ __html: CONFETTI_CSS }} />
      {celebrate !== null && <ConfettiBurst key={celebrate} />}

      {/* profile + challenge browser */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-border/80 bg-card p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Trophy className="h-4 w-4 text-amber-300" aria-hidden="true" /> Judge profile
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  aria-label="Profile options"
                  className={`rounded-lg border border-border/70 p-1.5 text-muted-foreground transition-colors hover:text-foreground ${RING}`}
                >
                  <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={onResetProgress}
                  className={resetArmed ? 'font-semibold text-rose-300' : 'text-muted-foreground'}
                >
                  {resetArmed ? 'Tap again to confirm reset' : 'Reset progress'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-lg border border-emerald-400/35 bg-emerald-400/10 px-2 py-0.5 text-xs font-black text-emerald-300">
              Lv {level}
            </span>
            <span className="font-mono text-sm font-bold text-foreground/90">{profile.xp} XP</span>
            <span
              className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground"
              title="Consecutive days with a solve"
            >
              <Flame
                className={`h-3.5 w-3.5 ${profile.streak > 0 ? 'text-orange-400' : 'text-muted-foreground/40'}`}
                aria-hidden="true"
              />
              {profile.streak}d
            </span>
          </div>

          <div
            className="mt-2.5 h-2 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={lvlInto}
            aria-valuemin={0}
            aria-valuemax={lvlSpan}
            aria-label="XP progress to the next level"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-500"
              style={{ width: `${lvlPct}%` }}
            />
          </div>
          <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>
              {solvedCount}/{CHALLENGES.length} solved
            </span>
            <span className="font-mono tabular-nums">
              {lvlInto}/{lvlSpan} XP → Lv {level + 1}
            </span>
          </div>
          <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground/70">
            Easy 10 · Medium 25 · Hard 50 XP — first solve of a challenge pays double.
          </p>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card p-3">
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Challenge tracks">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'all'}
              onClick={() => setTab('all')}
              className={tabChip(tab === 'all')}
            >
              All
              <span className="font-mono text-[10px] tabular-nums opacity-70">{CHALLENGES.length}</span>
            </button>
            {TRACKS.map((t) => {
              const list = BY_TRACK[t.id]
              const solvedN = list.filter((c) => solvedSet.has(c.id)).length
              const pct = Math.round((solvedN / list.length) * 100)
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={tabChip(tab === t.id)}
                >
                  {t.label}
                  <span className="font-mono text-[10px] tabular-nums opacity-70">{pct}%</span>
                </button>
              )
            })}
          </div>

          <div className="relative mt-2.5">
            <Search
              className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/50"
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search challenges…"
              aria-label="Search challenges by name"
              className={`w-full rounded-lg border border-border/70 bg-background/60 py-1.5 pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 ${RING}`}
            />
          </div>

          <div
            className="mt-2.5 max-h-[460px] space-y-3 overflow-y-auto pr-0.5"
            role="list"
            aria-label="Challenges"
          >
            {groups.map((g) => (
              <div key={g.id}>
                <div className="flex items-center justify-between px-1 pb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">
                  <span>{g.label}</span>
                  <span className="font-mono tabular-nums">
                    {g.list.filter((c) => solvedSet.has(c.id)).length}/{g.list.length}
                  </span>
                </div>
                {g.list.map((c) => {
                  const solved = solvedSet.has(c.id)
                  const active = c.id === activeId
                  const unlocked = isUnlocked(c, solvedSet, level)
                  const prev = previousInTrack(c)
                  return (
                    <button
                      key={c.id}
                      type="button"
                      role="listitem"
                      onClick={() => setActiveId(c.id)}
                      disabled={!unlocked}
                      title={
                        unlocked
                          ? undefined
                          : `Locked — solve ${JSON.stringify(prev?.title ?? '')} or reach level ${UNLOCK_LEVEL}`
                      }
                      className={`mb-1 flex w-full items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all ${RING} ${
                        active
                          ? 'border-emerald-400/50 bg-emerald-400/10'
                          : unlocked
                            ? 'border-transparent hover:border-border/70 hover:bg-emerald-400/[0.05]'
                            : 'cursor-not-allowed border-transparent opacity-55'
                      }`}
                    >
                      {solved ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                      ) : unlocked ? (
                        <Circle className="h-4 w-4 shrink-0 text-muted-foreground/40" aria-hidden="true" />
                      ) : (
                        <Lock className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" aria-hidden="true" />
                      )}
                      <span className="min-w-0 flex-1">
                        <span className={`block truncate text-sm font-semibold ${active ? 'text-emerald-100' : ''}`}>
                          {c.title}
                        </span>
                        <span
                          className={`mt-0.5 inline-block rounded border px-1.5 py-px text-[9px] font-bold uppercase tracking-wider ${DIFF_STYLE[c.difficulty]}`}
                        >
                          {c.difficulty}
                        </span>
                      </span>
                      {c.tests.some((t) => t.hidden) && (
                        <EyeOff
                          className="h-3.5 w-3.5 shrink-0 text-teal-300/70"
                          aria-label="Includes hidden tests"
                        />
                      )}
                    </button>
                  )
                })}
              </div>
            ))}
            {groups.length === 0 && (
              <p className="px-1 py-3 text-center text-xs text-muted-foreground">
                No challenges match that search.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* workspace */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">
                {TRACKS.find((t) => t.id === challenge.track)?.label}
              </div>
              <h3 className="text-lg font-bold leading-tight">{challenge.title}</h3>
            </div>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${DIFF_STYLE[challenge.difficulty]}`}
            >
              {challenge.difficulty}
            </span>
          </div>
          <p className="mt-2 whitespace-pre-wrap text-[13px] leading-relaxed text-muted-foreground">
            {challenge.prompt}
          </p>
          {hiddenTests > 0 && (
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-teal-400/25 bg-teal-400/[0.07] px-2.5 py-1 text-[11px] font-semibold text-teal-300">
              <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
              {hiddenTests} hidden test{hiddenTests === 1 ? '' : 's'} — inputs withheld, they count for
              scoring
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-sm font-bold">
              <Terminal className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Solution —{' '}
              <span className="font-mono text-xs text-emerald-300">{challenge.fn}()</span>
            </span>
            <span className="hidden text-[10px] text-muted-foreground sm:inline">
              Tab inserts 2 spaces · runs locally in a guarded sandbox
            </span>
          </div>
          <CodeEditor
            value={code[challenge.id] ?? ''}
            onChange={(v) => setCode((c) => ({ ...c, [challenge.id]: v }))}
          />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              onClick={run}
              disabled={running}
              className={`inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-bold text-emerald-950 transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50 ${RING}`}
            >
              {running ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Running…
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" aria-hidden="true" /> Run tests
                </>
              )}
            </button>
            <button
              onClick={() => setCode((c) => ({ ...c, [challenge.id]: challenge.starter }))}
              className={`inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/60 px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground ${RING}`}
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Reset starter
            </button>
            {solvedSet.has(challenge.id) && (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/35 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-300">
                <Trophy className="h-3.5 w-3.5" aria-hidden="true" /> solved
              </span>
            )}
          </div>
        </div>

        {/* results */}
        <AnimatePresence mode="wait">
          {outcome && (
            <motion.div
              key={activeId + (outcome ? 'r' : '')}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="space-y-4"
            >
              {outcome.error && (
                <div
                  role="alert"
                  className="rounded-2xl border border-rose-400/30 bg-rose-400/[0.07] px-4 py-3 font-mono text-xs leading-relaxed text-rose-200"
                >
                  {outcome.error}
                </div>
              )}

              {outcome.results.length > 0 && (
                <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold">Test results</span>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          outcome.allPass
                            ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                            : 'border-amber-400/40 bg-amber-400/10 text-amber-300'
                        }`}
                      >
                        {outcome.results.filter((r) => r.pass).length}/{outcome.results.length} passing
                      </span>
                      <button
                        onClick={openReview}
                        disabled={reviewLoading}
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${RING} ${
                          outcome.allPass
                            ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/20'
                            : 'border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400/20'
                        }`}
                      >
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> AI Review
                      </button>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {outcome.results.map((r, i) => (
                      <li
                        key={i}
                        className={`rounded-xl border px-3.5 py-2.5 ${
                          r.pass
                            ? 'border-emerald-400/25 bg-emerald-400/[0.05]'
                            : 'border-amber-400/25 bg-amber-400/[0.05]'
                        }`}
                      >
                        <div className="flex items-center gap-2 text-sm">
                          {r.pass ? (
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                          ) : (
                            <XCircle className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                          )}
                          <span className="font-semibold">{r.desc}</span>
                          {r.hidden && (
                            <EyeOff
                              className="h-3.5 w-3.5 shrink-0 text-teal-300/70"
                              aria-label="Hidden test — inputs withheld"
                            />
                          )}
                          <span className="ml-auto font-mono text-[10px] tabular-nums text-muted-foreground">
                            {r.ms < 1 ? '<1' : r.ms.toFixed(0)} ms
                            {r.ms > 1500 && (
                              <span className="ml-1 text-amber-400" title="Slow — consider a faster algorithm">
                                slow
                              </span>
                            )}
                          </span>
                        </div>
                        {!r.pass && !r.hidden && (
                          <div className="mt-1.5 grid gap-1 font-mono text-[11px] sm:grid-cols-2">
                            <span className="truncate text-muted-foreground">
                              expected <span className="text-emerald-300">{r.expected}</span>
                            </span>
                            <span className="truncate text-muted-foreground">
                              got <span className="text-amber-300">{r.got}</span>
                            </span>
                          </div>
                        )}
                        {!r.pass && r.hidden && (
                          <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                            Inputs and expected output withheld — reason it out from the visible cases
                            above.
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  {outcome.allPass && (
                    <p className="mt-3 rounded-lg border border-emerald-400/25 bg-emerald-400/[0.08] px-3.5 py-2.5 text-xs leading-relaxed text-emerald-200">
                      {justGained
                        ? `All tests green — first solve! +${justGained.xp} XP banked${
                            justGained.leveledUp ? ` and you reached level ${justGained.level}` : ''
                          }. Evidence (weight 2) sent to your mastery twin.`
                        : 'All tests green — this one was already solved, so no XP this time. Evidence (weight 2) sent to your mastery twin.'}
                    </p>
                  )}
                </div>
              )}

              {outcome.logs.length > 0 && (
                <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-bold">
                      <Eraser className="h-4 w-4 text-teal-300" aria-hidden="true" /> console.log
                    </span>
                    <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                      {outcome.logs.length} lines
                    </span>
                  </div>
                  <div className="max-h-40 overflow-y-auto rounded-lg border border-border/70 bg-background/60 p-2.5 font-mono text-[11px] leading-5">
                    {outcome.logs.map((l, i) => (
                      <div key={i} className="text-foreground/80">
                        <span className="mr-2 text-muted-foreground/50">›</span>
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!outcome && (
          <p className="rounded-2xl border border-dashed border-border/70 bg-background/40 px-4 py-5 text-center text-sm text-muted-foreground">
            Write your solution above and press{' '}
            <span className="font-semibold text-foreground/80">Run tests</span> — the judge executes
            it right here in your browser against {visibleTests} test
            {visibleTests === 1 ? '' : 's'}
            {hiddenTests > 0
              ? ` plus ${hiddenTests} hidden check${hiddenTests === 1 ? '' : 's'} (inputs withheld, they count for scoring)`
              : ''}
            .
          </p>
        )}
      </div>

      {/* AI review dialog */}
      <Dialog open={reviewOpen} onOpenChange={setReviewOpen}>
        <DialogContent className="max-h-[82vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              AI code review — {challenge.title}
            </DialogTitle>
            <DialogDescription>
              A senior engineer reads your solution against the test outcome. Only the code in the
              editor is sent for review.
            </DialogDescription>
          </DialogHeader>
          {reviewLoading ? (
            <div className="flex items-center gap-2 py-8 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Reading your solution…
            </div>
          ) : reviewError ? (
            <p
              role="alert"
              className="rounded-lg border border-rose-400/30 bg-rose-400/[0.07] px-3.5 py-3 text-sm leading-relaxed text-rose-200"
            >
              {reviewError}
            </p>
          ) : (
            reviewText !== null && <ReviewMarkdown text={reviewText} />
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

export default JudgePanel
