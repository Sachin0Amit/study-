import type { SectionContent } from '../library'

// ============================================================================
// Computer Networks — Chapter 2: Data Link Framing and Error Detection
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const cnCh02Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'cn-ch2-s1',
    readingTime: 7,
    intro: 'A raw bit stream has no marks for where one frame ends and the next begins so the link must impose boundaries that survive errors. Byte counts, sentinel bytes with stuffing, and bit patterns with stuffing each solve the problem with different robustness. This section compares those methods and shows how receivers resynchronize after damage.',
    objectives: [
      'Compare byte count, character stuffing and bit stuffing on robustness',
      'Apply stuffing and destuffing rules to arbitrary payloads',
      'Explain how coding violations mark frames at the physical layer'
    ],
    concepts: [
      {
        term: 'Byte count framing',
        kind: 'definition',
        statement: 'A **count** field `CNT` states how many bytes follow, so the receiver slices exactly that many as one frame. The method is **fragile** because one damaged `CNT` desynchronizes the `stream`.',
        detail: 'If count 40 corrupts to 20, the next frame starts 20 bytes early and all boundaries shift. Recovery needs an external resynchronization signal.'
      },
      {
        term: 'Character stuffing with sentinels',
        kind: 'method',
        statement: 'Special bytes **FLAG** `FLG` and escape `ESC` delimit frames while payload copies of those bytes get an extra `ESC` prefix. Destuffing removes one `ESC` before each **stored** sentinel.',
        detail: 'Payload byte FLAG becomes ESC plus FLAG on the wire. Receiver drops the ESC and keeps FLAG as data, restoring the original sequence.'
      },
      {
        term: 'Bit stuffing after five ones',
        kind: 'method',
        statement: 'The flag **01111110** stored as `FLAG` marks edges while the sender inserts a **zero** `ZERO` after every five data ones. The receiver drops that `ZERO` after five ones to recover `DATA`.',
        detail: 'Data run 01111110 would mimic FLAG, so it travels as 011111010 on wire. Six ones in a row therefore always signal a real flag or an abort.'
      },
      {
        term: 'Flag overhead arithmetic',
        kind: 'theorem',
        statement: 'Worst-case stuffed size grows with sentinel density, bounded by **overhead** `OVH` that scales with payload pattern. Average cost follows $$\\text{wire} = L + F + S$$ where `L` is payload, `F` is flag bytes and `S` is stuffed extras.',
        detail: 'Random data rarely triggers stuffing while long one runs trigger often. Designers size buffers for the worst pattern, not the average.'
      },
      {
        term: 'Physical coding violations',
        kind: 'insight',
        statement: 'Some line codes have **invalid patterns** `BAD` that never carry data, so the sender uses one as a frame edge. Because `BAD` cannot appear in payload, no **stuffing** is needed.',
        detail: 'Manchester variants and return-to-zero codes reserve high-low or low-high violations for boundaries. The physical layer thus marks frames without extra bytes.'
      }
    ],
    examples: [
      {
        title: 'Byte-stuff a payload with FLAG and ESC',
        problem: 'Payload bytes in order: A, FLAG, B, ESC, C. FLAG is F and ESC is E. Show wire bytes with start and end flags.',
        steps: [
          { label: 'Step 1', text: 'Copy A unchanged as `A`. It matches neither `FLG` nor `ESC`, so no prefix.\n```text\nwire: START F | A | E+F | B | E+E | C | END F\n```' },
          { label: 'Step 2', text: 'Payload FLAG becomes `ESC` plus `FLAG`. Payload ESC becomes `ESC` plus `ESC`. Other bytes pass through.' },
          { label: 'Step 3', text: 'Wrap with start `FLG` and end `FLG`. Receiver strips edge flags then removes one `ESC` before every sentinel.' }
        ],
        result: 'Wire holds 9 bytes including edges for 5 payload bytes with correct destuffing.'
      },
      {
        title: 'Bit-stuff five ones followed by flag-like run',
        problem: 'Data bits 01111110 must travel between flags 01111110. Show stuffed wire and destuffing.',
        steps: [
          { label: 'Step 1', text: 'Scan data and insert `ZERO` after five consecutive ones. Data 01111110 becomes 011111010 on wire.' },
          { label: 'Step 2', text: 'Full wire is flag `01111110` plus stuffed data plus flag. Six ones appear only in true flags.' },
          { label: 'Step 3', text: 'Receiver drops `ZERO` following five ones, restoring 01111110 as `DATA` while keeping edge flags as control.' }
        ],
        result: 'One zero added prevents false flag and receiver removes it exactly.'
      }
    ],
    keyTakeaways: [
      'Byte counts are simple but one error shifts all later boundaries.',
      'Character stuffing escapes sentinels with an extra escape prefix.',
      'Bit stuffing inserts zero after five ones to protect the flag.',
      'Invalid physical patterns mark frames without any stuffing.'
    ],
    quiz: [
      {
        q: 'Why is byte-count framing fragile?',
        options: ['counts waste bandwidth', 'counts forbid binary data', 'a damaged count shifts all later boundaries', 'flags are longer'],
        answer: 2,
        explanation: 'Step 1: Receiver trusts CNT to find the next start. Step 2: Suppose 40 flips to 20, a shift of 20 bytes. Step 3: Next header is read mid-payload. Step 4: Errors cascade until external resync, so this choice is correct.'
      },
      // PYQ-pattern: character and bit stuffing transformation
      {
        q: 'Payload FLAG with ESC stuffing travels as:',
        options: ['ESC plus FLAG', 'ESC plus ESC', 'FLAG alone', 'dropped'],
        answer: 0,
        explanation: 'Step 1: FLAG equals the edge sentinel. Step 2: Sender prefixes one ESC before it. Step 3: Wire shows 2 bytes ESC and FLAG. Step 4: Receiver strips ESC and keeps FLAG as data.'
      },
      {
        q: 'Data 01111110 under bit stuffing travels as:',
        options: ['01111110', 'deleted', '011111110', '011111010'],
        answer: 3,
        explanation: 'Step 1: Count five consecutive ones in the run. Step 2: Insert one ZERO after them. Step 3: Bits become 011111010 with 9 bits. Step 4: Receiver removes that ZERO after five ones.'
      },
      {
        q: 'Coding-violation framing works because:',
        options: ['flags are longer', 'violations never occur in data encodings', 'counts are included', 'headers are encrypted'],
        answer: 1,
        explanation: 'Step 1: Line code reserves BAD patterns. Step 2: Data encoder never emits them. Step 3: Receiver treats BAD as control only. Step 4: No stuffing is needed since confusion is impossible.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'cn-ch2-s2',
    readingTime: 8,
    intro: 'Single parity catches any odd number of flips while two-dimensional parity also corrects isolated singles through row and column clues. The Internet checksum adds words in ones complement and complements the sum to expose any imbalance. This section practices the arithmetic until each code limit feels mechanical.',
    objectives: [
      'Predict detection limits of single and two-dimensional parity',
      'Compute Internet checksum with ones-complement wrap and complement',
      'Verify received blocks by recomputing sums including the checksum'
    ],
    concepts: [
      {
        term: 'Single-bit parity limits',
        kind: 'law',
        statement: 'Even parity appends a **parity** bit `P` making total ones even, so any **odd** count of flips fails the check. Any **even** count passes silently through `P`.',
        detail: 'One or three flips are always caught while two or four flips cancel out. Burst damage of even length therefore escapes single parity.'
      },
      {
        term: 'Two-dimensional parity',
        kind: 'method',
        statement: 'Rows and columns each carry parity bits in `RPAR` and `CPAR`, so a single flip fails exactly one of each. The crossing pinpoints the **location** `LOC` for correction.',
        detail: 'An 8 by 8 block adds 8 row bits plus 8 column bits plus one corner, 17 bits total. Two flips create two candidate rows and columns, leaving ambiguity.'
      },
      {
        term: 'Ones-complement addition',
        kind: 'definition',
        statement: 'End-around carry makes addition **circular** via `WRAP`, where overflow beyond sixteen bits returns to the low end. Sum follows $$S = (A + B) \\bmod (2^{16}-1)$$ with `A` and `B` as words.',
        detail: 'Adding $0xFFFF$ plus $0x0001$ gives $0x0001$ after wrap, not zero. All-ones and all-zeros both behave as zero in this arithmetic.'
      },
      {
        term: 'Internet checksum send and check',
        kind: 'method',
        statement: 'Sender sums words with **wrap** `WRAP` then stores the **complement** `CHK` alongside data. Receiver including `CHK` must yield $$\\text{sum} = 0xFFFF$$ for acceptance.',
        detail: 'With words $0x4500$ and $0x0073$, partial sum and wrap proceed in sixteen-bit registers. Complement flips every bit so errors that change the total are exposed.'
      },
      {
        term: 'Checksum blind spots',
        kind: 'insight',
        statement: 'Swapping whole words or inserting **zero words** `ZERO` leaves the sum unchanged, so the checksum **misses** those reorderings. Complemented sums still catch all **single-word** corruptions.',
        detail: 'A zero word adds nothing, so loss plus insertion can cancel. Stronger polynomial codes are needed where reordering matters.'
      }
    ],
    examples: [
      {
        title: 'Checksum over four words',
        problem: 'Words in hex: 4500, 0073, 0000, 4000. Compute checksum with wrap and verify.',
        steps: [
          { label: 'Step 1', text: 'Add first two $0x4500 + 0x0073 = 0x4573$. Add third keeps $0x4573$.\n```text\n4573 + 0000 = 4573; 4573 + 4000 = 8573; CHK = ~8573 = 7A8C\n```' },
          { label: 'Step 2', text: 'Add fourth $0x4573 + 0x4000 = 0x8573$ with `SUM`. Complement gives `CHK` equal to $0x7A8C$.' },
          { label: 'Step 3', text: 'Verify by summing all plus `CHK`: $0x8573 + 0x7A8C = 0xFFFF$ after wrap. Receiver accepts only all-ones result.' }
        ],
        result: 'Checksum 7A8C makes the full sum FFFF and any single-word change breaks it.'
      },
      {
        title: 'Locate a single flip with 2D parity',
        problem: 'Four by four data block gains row and column parity. Bit at row 2 column 3 flips. Show detection and correction.',
        steps: [
          { label: 'Step 1', text: 'Recompute row parity with `RPAR`. Only row $2$ fails because one bit changed there.' },
          { label: 'Step 2', text: 'Recompute column parity with `CPAR`. Only column $3$ fails for the same reason.' },
          { label: 'Step 3', text: 'Crossing `LOC` at row 2 column 3 is flipped back. Two flips would give two rows and two columns with four suspects.' }
        ],
        result: 'Single error is located at the unique failing row and column crossing.'
      }
    ],
    keyTakeaways: [
      'Single parity catches odd flips and misses every even count.',
      'Two-dimensional parity locates singles but only detects doubles.',
      'Checksum uses ones-complement wrap plus final complement.',
      'Receiver accepts only when the full sum including checksum is all ones.'
    ],
    quiz: [
      // PYQ-pattern: Internet checksum ones-complement arithmetic
      {
        q: 'Even parity over 1011 stores parity bit:',
        options: ['1 to make odd total', '0 to keep even total with three ones', 'always 0', '1 to make three ones even'],
        answer: 3,
        explanation: 'Step 1: Count ones in 1011 giving 3. Step 2: Even needs total 4. Step 3: Stored bit must be 1. Step 4: Zero would leave 3 which is odd.'
      },
      {
        q: 'Words 0x4500 and 0x0073 sum in ones complement to:',
        options: ['0x4500', '0x4573', '0x0073', '0xFFFF'],
        answer: 1,
        explanation: 'Step 1: Add 0x4500 plus 0x0073. Step 2: Low byte 0x00 plus 0x73 is 0x73. Step 3: High byte 0x45 stays. Step 4: Total 0x4573 with no carry to wrap.'
      },
      {
        q: 'Receiver including correct checksum must see:',
        options: ['0xFFFF', '0x0000', '0x7A8C', 'any value'],
        answer: 0,
        explanation: 'Step 1: Sender stored complement of sum. Step 2: Receiver adds data plus checksum. Step 3: Complement cancels leaving all ones. Step 4: Value is 65535, written FFFF in hex.'
      },
      {
        q: 'Which damage escapes the Internet checksum?',
        options: ['single-bit flip in one word', 'incrementing one word by one', 'swapping two data words', 'complementing the checksum'],
        answer: 2,
        explanation: 'Step 1: Addition commutes across words. Step 2: Swapped order gives same total 0x4573. Step 3: Complement still matches. Step 4: Other changes alter the total and fail.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.3
  {
    sectionId: 'cn-ch2-s3',
    readingTime: 10,
    intro: 'Cyclic redundancy checks treat bits as polynomial coefficients and divide by a short generator to leave a remainder that travels with the data. Any burst no longer than the generator degree changes the remainder and is therefore caught. This section performs binary division by hand and links generator choice to guarantees.',
    objectives: [
      'Perform modulo-two division to obtain transmitted codeword',
      'Verify received words by recomputing remainders',
      'State burst and odd-count guarantees from generator properties'
    ],
    concepts: [
      {
        term: 'Modulo-two division without carries',
        kind: 'definition',
        statement: 'CRC arithmetic uses **XOR** division `DIV` where addition and subtraction are both exclusive-or. Long division proceeds with `XOR` at each **one** leading bit.',
        detail: 'Binary 1011 divided by 101 under XOR gives quotient and remainder unlike normal arithmetic. No borrows ever propagate beyond the window.'
      },
      {
        term: 'Generator degree and width',
        kind: 'definition',
        statement: 'A degree **r** generator `GEN` has $r+1$ bits and produces an **r-bit** remainder `REM`. Transmitted size follows $$\\text{wire} = k + r$$ for $k$ data bits.',
        detail: 'Generator $x^{3} + x + 1$ has degree $3$ and bits 1011, adding 3 remainder bits. Longer generators catch longer bursts at the cost of overhead.'
      },
      {
        term: 'Encoding by appended remainder',
        kind: 'method',
        statement: 'Sender appends **r zeros** `PAD` to data, divides by `GEN`, and replaces the pad with the **remainder** `REM`. The wire word satisfies $$\\text{received} \\bmod G = 0$$ when clean.',
        detail: 'Data 1001 with generator 1011 gives remainder 110 after division, so wire is 1001110. Receiver dividing wire by same generator must see zero remainder.'
      },
      {
        term: 'Burst-error guarantees',
        kind: 'theorem',
        statement: 'All bursts of length up to **r** are caught by `GEN`, as are all **odd-count** errors when `GEN` has an even number of terms. Longer bursts escape with probability $$P_{miss} = \\frac{1}{2^{r}}.$$',
        detail: 'With $r = 3$, every burst to 3 bits is caught and longer bursts miss only 1 in 8 cases. Factor with $x+1$ term guarantees odd-count detection.'
      },
      {
        term: 'Choosing standard generators',
        kind: 'insight',
        statement: 'Short **CRC-8** `C8` suits small frames while **CRC-16** `C16` and 32-bit forms protect longer links. Choice balances `overhead` against $P_{miss}$ via degree `r`.',
        detail: 'Degree 8 misses long bursts 1 in 256 times while degree 16 misses 1 in 65536 times. Hardware shift registers implement division at wire speed.'
      }
    ],
    derivations: [
      {
        title: 'CRC Remainder Encoding and Zero Verification',
        statement: 'Appending the degree $r$ remainder makes the wire word divisible by the generator: $$T(x) = D(x) \\cdot x^{r} + R(x), \\quad T(x) \\bmod G(x) = 0$$',
        prerequisites: [
          'Modulo-two arithmetic where addition and subtraction are both $\\mathrm{XOR}$',
          'Generator $G(x)$ of degree $r$ with $r+1$ binary coefficients',
          'Polynomial view of bit strings with $x^{r}$ as appending $r$ zeros',
        ],
        steps: [
          {
            label: 'Step 1: Append zeros as polynomial scaling',
            formula: `$$D_{pad}(x) = D(x) \\cdot x^{r}$$`,
            explanation: 'Appending $r$ zeros shifts every data coefficient up by $r$ positions, which is multiplication by $x^{r}$ in polynomial form. This reserves the low $r$ coefficients as blank space for the remainder. The operation is exact because shifts never interact with $\\mathrm{XOR}$ carries.',
          },
          {
            label: 'Step 2: Divide to expose the remainder',
            formula: `$$D_{pad}(x) = Q(x) G(x) + R(x)$$`,
            explanation: 'Long division under $\\mathrm{XOR}$ peels off multiples of $G(x)$ until fewer than $r+1$ dividend bits remain. The leftover $R(x)$ has degree below $r$ so it fits the reserved space. Uniqueness of the remainder is why both sender and receiver agree on its value.',
          },
          {
            label: 'Step 3: Replace the pad with the remainder',
            formula: `$$T(x) = D(x) \\cdot x^{r} + R(x)$$`,
            explanation: 'Adding $R(x)$ into the zeroed low positions writes bits where zeros stood, which coincides with $\\mathrm{XOR}$ addition. Since $D(x) \\cdot x^{r}$ already equals $Q(x) G(x) + R(x)$, adding $R(x)$ again cancels the remainder term. Hence $T(x)$ is an exact multiple of $G(x)$ by construction.',
          },
          {
            label: 'Step 4: Verify by zero remainder and catch bursts',
            formula: `$$T(x) + E(x) \\bmod G(x) = E(x) \\bmod G(x)$$`,
            explanation: 'A clean arrival divides evenly so the receiver sees remainder zero and accepts the frame. Any error pattern $E(x)$ adds to the wire word, and linearity of the remainder carries $E(x)$ straight through to the check. Bursts shorter than $r$ cannot be multiples of the degree $r$ generator, so their remainders are nonzero and the damage is always exposed.',
          },
        ],
        result: 'The sender transmits $T(x) = D(x) \\cdot x^{r} + R(x)$ with $R(x)$ from $\\mathrm{XOR}$ division, and the receiver accepts exactly when division leaves remainder zero. Every burst of length at most $r$ is caught, while longer bursts escape only with probability $2^{-r}$.',
      },
    ],
    examples: [
      {
        title: 'Encode 1001 with generator 1011',
        problem: 'Data 1001, generator 1011 of degree 3. Find remainder and transmitted word by XOR division.',
        steps: [
          { label: 'Step 1', text: 'Append three zeros to get $1001000$ as `DIV` input. Align generator under first one.\n```text\n1001000 div 1011 -> steps XOR -> remainder 110\n1001 + pad 000 -> wire 1001 + rem 110 = 1001110\n```' },
          { label: 'Step 2', text: 'Divide: 1001 XOR 1011 gives 0010, bring down 0 to get 0100, XOR only when leading one appears. Continue across all seven positions with `XOR`.' },
          { label: 'Step 3', text: 'Final remainder `REM` is 110. Wire word is data plus remainder 1001110. Receiver dividing 1001110 by 1011 sees zero remainder.' }
        ],
        result: 'Remainder 110 gives codeword 1001110 which verifies cleanly.'
      },
      {
        title: 'Detect a three-bit burst',
        problem: 'Codeword 1001110 suffers burst flipping positions 3 through 5. Show detection by remainder.',
        steps: [
          { label: 'Step 1', text: 'Burst length $3$ equals degree $r = 3$. Corrupted word becomes 1010110 after flipping three bits.' },
          { label: 'Step 2', text: 'Divide by `GEN` 1011 using `DIV`. Leading alignment now leaves nonzero tail.' },
          { label: 'Step 3', text: 'Remainder is nonzero such as 011, proving damage. Guarantee holds because burst length is within degree bound.' }
        ],
        result: 'Nonzero remainder exposes the burst as theory promises.'
      }
    ],
    keyTakeaways: [
      'CRC division uses XOR without carries under the generator window.',
      'Appended remainder makes the clean wire word divisible by the generator.',
      'Bursts within degree length are always caught and odd counts caught with even-term generators.',
      'Longer generators trade overhead bits for smaller miss probability.'
    ],
    quiz: [
      // PYQ-pattern: CRC remainder computation by binary division
      {
        q: 'Data 1001 with generator 1011 transmits:',
        options: ['1001110', '1001000', '1001011', '1011100'],
        answer: 0,
        explanation: 'Step 1: Append 3 zeros giving 1001000. Step 2: XOR-divide by 1011 across 7 positions. Step 3: Remainder is 110. Step 4: Append remainder giving 1001110.'
      },
      {
        q: 'Clean CRC wire word divided by generator gives:',
        options: ['quotient zero', 'remainder all ones', 'remainder zero', 'generator again'],
        answer: 2,
        explanation: 'Step 1: Sender built wire as multiple of generator. Step 2: Division reverses the construction. Step 3: Zero remainder means no detected damage. Step 4: Nonzero means corruption within coverage.'
      },
      {
        q: 'Generator degree 4 guarantees detection of bursts to length:',
        options: ['3', '4', '8', '16'],
        answer: 1,
        explanation: 'Step 1: Degree equals remainder width. Step 2: Guarantee covers lengths through degree. Step 3: Length 4 is the boundary. Step 4: Longer bursts miss with probability 1 in 16.'
      },
      {
        q: 'Long burst miss probability with degree 16 is about:',
        options: ['1 in 16', '1 in 256', 'zero', '1 in 65536'],
        answer: 3,
        explanation: 'Step 1: Miss rate is 1 over 2 raised to r. Step 2: 2 raised to 16 is 65536. Step 3: Shorter degree 8 gives 256. Step 4: Zero miss never holds for longer-than-degree bursts.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.4
  {
    sectionId: 'cn-ch2-s4',
    readingTime: 8,
    intro: 'Hamming distance counts the positions where two codewords differ and sets how many errors a code can expose or repair. Adding parity bits at power-of-two positions creates syndromes that point directly at single flips. This section links distance numbers to detection and correction power with small worked codes.',
    objectives: [
      'Compute distance between codewords and infer limits',
      'Place Hamming parity bits and form syndrome for correction',
      'Distinguish detection-only, correction-only and extended modes'
    ],
    concepts: [
      {
        term: 'Hamming distance definition',
        kind: 'definition',
        statement: 'Distance is the **count of differing positions** `DIST` between two words. Minimum over all pairs is $$d_{min} = \\min DIST$$ for the `code`.',
        detail: 'Words 1011 and 1001 differ in one position so distance is 1. Words 0000 and 1111 differ in four positions so distance is 4.'
      },
      {
        term: 'Detection versus correction limits',
        kind: 'theorem',
        statement: 'A code with minimum **distance** `d` detects up to **d minus one** errors and corrects up to **floor of d minus one over two** errors. Limits are $$\\text{detect} \\leq d-1 \\qquad \\text{correct} \\leq \\left\\lfloor \\frac{d-1}{2} \\right\\rfloor.$$',
        detail: 'Distance 3 detects 2 and corrects 1. Distance 4 detects 3 and corrects 1, leaving one extra detection beyond correction.'
      },
      {
        term: 'Hamming parity placement',
        kind: 'method',
        statement: 'Parity bits sit at **power-of-two** positions `P1`, `P2`, `P4` covering data bits whose index has that bit set. Each `P` enforces **even parity** over its cover set.',
        detail: 'Seven-bit code uses positions 1, 2, 4 for parity and 3, 5, 6, 7 for data. Parity 1 covers 1, 3, 5, 7 while parity 2 covers 2, 3, 6, 7.'
      },
      {
        term: 'Syndrome decoding',
        kind: 'method',
        statement: 'Recomputed checks form a **syndrome** `SYN` whose binary value equals the **error index** `ERR`. Zero `SYN` means **clean** and nonzero points at the flip.',
        detail: 'Syndrome 101 in binary equals 5, so position 5 is complemented. Three checks give values 0 through 7 covering the whole 7-bit word.'
      },
      {
        term: 'Extended SECDED code',
        kind: 'insight',
        statement: 'One extra **overall parity** `OP` raises distance from three to **four** for single correction plus double detection. Overall mismatch with nonzero syndrome signals **one** error while match with nonzero signals **two**.',
        detail: 'Seven-bit Hamming plus one overall bit makes 8-bit SECDED. Two flips are flagged but not located, preventing miscorrection.'
      }
    ],
    examples: [
      {
        title: 'Build Hamming 7-bit code for 1011',
        problem: 'Data bits 1,0,1,1 placed at positions 3,5,6,7. Compute parity at 1,2,4 for even parity.',
        steps: [
          { label: 'Step 1', text: 'Parity 1 covers 1,3,5,7 with data 1,0,1. Need `P1` equal 0 to make two ones even.\n```text\npositions: 1:P1 2:P2 3:1 4:P4 5:0 6:1 7:1\nP1 covers 3,5,7 -> 1,0,1 -> P1=0\n```' },
          { label: 'Step 2', text: 'Parity 2 covers 2,3,6,7 with data 1,1,1. Need `P2` equal 1 to make four ones even. Parity 4 covers 4,5,6,7 with data 0,1,1, needing `P4` equal 0.' },
          { label: 'Step 3', text: 'Full word is 0,1,1,0,0,1,1 reading positions 1 through 7. Any single flip yields its index as `SYN`.' }
        ],
        result: 'Codeword 0110011 protects data 1011 with distance 3.'
      },
      {
        title: 'Correct a single flip via syndrome',
        problem: 'Received 0110011 with position 5 flipped to 1, giving 0110111. Locate and fix.',
        steps: [
          { label: 'Step 1', text: 'Check parity 1 over 1,3,5,7: values 0,1,1,1 give three ones, odd, so check fails with `SYN` bit 1.' },
          { label: 'Step 2', text: 'Check parity 2 over 2,3,6,7 passes while parity 4 over 4,5,6,7 fails. Syndrome bits read 101 with `SYN` equal 5.' },
          { label: 'Step 3', text: 'Complement position `ERR` 5 from 1 back to 0. Word returns to 0110011 and all checks pass.' }
        ],
        result: 'Syndrome 5 pinpoints the flip for exact correction.'
      }
    ],
    keyTakeaways: [
      'Distance counts differing positions and sets all limits.',
      'Detect reach is d minus one while correct reach is half that floored.',
      'Parity at powers of two creates syndromes equal to error index.',
      'Extra overall parity adds double detection to single correction.'
    ],
    quiz: [
      {
        q: 'Codewords 0000 and 1111 have distance:',
        options: ['1', '4', '2', '0'],
        answer: 1,
        explanation: 'Step 1: Compare position 1: 0 versus 1 differs. Step 2: Positions 2, 3, 4 also differ. Step 3: Count gives 4 differences. Step 4: Minimum 4 allows triple detection.'
      },
      // PYQ-pattern: distance to detection and correction limits
      {
        q: 'Minimum distance 3 corrects and detects:',
        options: ['corrects 2 detects 2', 'corrects 0 detects 1', 'corrects 3 detects 3', 'corrects 1 detects 2'],
        answer: 3,
        explanation: 'Step 1: Detect budget is 3 minus 1 which is 2. Step 2: Correct budget is floor of 2 divided by 2 which is 1. Step 3: Values 2 and 1 match this choice. Step 4: Other options exceed the bounds.'
      },
      {
        q: 'Hamming parity bits live at positions:',
        options: ['1,2,3', '2,4,6', '1,2,4', '3,5,7'],
        answer: 2,
        explanation: 'Step 1: Positions are powers of two. Step 2: Values 1, 2, 4, 8 qualify. Step 3: Data fills the gaps 3, 5, 6, 7. Step 4: Only this choice lists powers of two.'
      },
      {
        q: 'Syndrome 101 in a 7-bit Hamming word means:',
        options: ['error at position 5', 'no error', 'double error located', 'parity 4 alone failed'],
        answer: 0,
        explanation: 'Step 1: Read syndrome as binary 101. Step 2: Convert to decimal giving 5. Step 3: Complement position 5. Step 4: Zero would mean clean and double errors need extended code.'
      }
    ]
  }
]
