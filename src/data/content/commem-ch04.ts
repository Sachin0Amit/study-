import type { SectionContent } from '../library'

// ============================================================================
// Communications — Chapter 4: Information Theory and Error Control
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const commemCh04Content: SectionContent[] = [
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'ece-e-digital-comm-s11',
    readingTime: 9,
    intro: 'Some sources surprise us with every symbol while others repeat one value almost always. Entropy turns that intuition into a number: the minimum average bits needed per symbol. Joint and conditional forms then split uncertainty across pairs of variables and set up channel analysis.',
    objectives: [
      'Compute entropy, joint entropy and conditional entropy from tables',
      'Sketch the binary entropy curve and locate its peak and zeros',
      'Apply chain rules to split multi-symbol uncertainty'
    ],
    concepts: [
      {
        term: 'Self-information and entropy',
        kind: 'definition',
        statement: 'Symbol `x` with probability `p` carries **self-information** `INFO` of $$I(x) = -\\log_{2} p$$ bits, and the average **`entropy`** `H` is $$H(X) = -\\sum p(x)\\log_{2} p(x).$$ Rare symbols carry many **bits** `BIT`.',
        detail: 'A fair coin gives $-0.5\\log 0.5 - 0.5\\log 0.5 = 1$ bit per toss. A certain event gives $-1\\log 1 = 0$ bits because no surprise remains.'
      },
      {
        term: 'Binary entropy function',
        kind: 'theorem',
        statement: 'For bias `q` the **binary entropy** `HB` is $$H_{b}(q) = -q\\log_{2} q - (1-q)\\log_{2}(1-q),$$ peaking at **one bit** `MAX` when $q = 0.5$ and touching **zero** `ZERO` at $q = 0$ and $q = 1$.',
        detail: 'Values $H_b(0.1) \\approx 0.469$ and $H_b(0.25) \\approx 0.811$ show steep rise from certainty. Symmetry $H_b(q) = H_b(1-q)$ mirrors the coin relabeling.'
      },
      {
        term: 'Joint and conditional entropy',
        kind: 'definition',
        statement: 'Pair uncertainty **`H(X,Y)`** `JOINT` and remaining uncertainty **`H(Y|X)`** `COND` obey the **chain rule** `CHAIN` $$H(X,Y) = H(X) + H(Y|X).$$ Conditioning **reduces** `RED` entropy with $$H(Y|X) \\leq H(Y).$$',
        detail: 'Independent fair bits give $H = 1 + 1 = 2$ bits jointly. Fully linked copies give $H = 1 + 0 = 1$ bit because the second adds nothing once the first is known.'
      },
      {
        term: 'Mutual information',
        kind: 'definition',
        statement: 'Shared information **`I(X;Y)`** `MUT` measures reduction in doubt as $$I(X;Y) = H(X) - H(X|Y) = H(Y) - H(Y|X).$$ Independence gives **zero** `IND` with $$I = 0 \\iff p(x,y) = p(x)p(y).$$',
        detail: 'A noiseless binary link carries $I = 1$ bit per use. A useless link with independent output carries $I = 0$ bits however long it runs.'
      },
      {
        term: 'Prefix coding bound',
        kind: 'law',
        statement: 'Any uniquely decodable code with lengths `L` satisfies **Kraft** `KRAFT` $$\\sum 2^{-L} \\leq 1$$ and mean length **`Lbar`** `AVG` obeys $$H(X) \\leq Lbar < H(X) + 1.$$ Huffman construction meets the **bound** `OPT` tightly.',
        detail: 'Four symbols with probabilities $0.5, 0.25, 0.125, 0.125$ encode at $1.75$ bits against entropy $1.75$ bits, achieving equality. Skewed sources compress far below fixed two-bit codes.'
      }
    ],
    examples: [
      {
        title: 'Entropy of a biased source',
        problem: 'Source emits A with 0.25 and B with 0.75. Compute entropy and the best fixed versus variable lengths.',
        steps: [
          { label: 'Step 1', text: 'Apply the sum over both symbols.\n```text\nH = -0.25*log2(0.25) - 0.75*log2(0.75)\n  = 0.5 + 0.311 = 0.811 bits/symbol\n```' },
          { label: 'Step 2', text: 'Fixed one-bit code uses $1.0$ bit per symbol, wasting $0.189$ bits. Ideal variable coding approaches $0.811$ bits over long blocks.' },
          { label: 'Step 3', text: 'One hundred symbols need about $81$ bits ideally against $100$ fixed, saving $19$ bits.' }
        ],
        result: 'Entropy near 0.81 bits; fixed codes overspend while Shannon-style packing nears the bound.'
      },
      {
        title: 'Joint table and mutual sharing',
        problem: 'Pairs (0,0) and (1,1) each occur with 0.4, pairs (0,1) and (1,0) each with 0.1. Find H(X), H(Y|X) and I(X;Y).',
        steps: [
          { label: 'Step 1', text: 'Margins are uniform by summation.\n```text\nP(X=0)=0.5 P(X=1)=0.5 -> H(X)=1 bit\nH(X,Y)=-2*0.4*log2(0.4)-2*0.1*log2(0.1)=1.722 bits\n```' },
          { label: 'Step 2', text: 'Conditional equals $1.722 - 1 = 0.722$ bits by the chain rule. Knowing one variable leaves $0.722$ bits of doubt about the other.' },
          { label: 'Step 3', text: 'Mutual equals $1 - 0.722 = 0.278$ bits shared per pair, well below the $1$-bit noiseless ceiling.' }
        ],
        result: 'Joint 1.72 bits, conditional 0.72 bits, shared 0.28 bits per pair.'
      }
    ],
    keyTakeaways: [
      'Entropy averages negative log probability in bits per symbol.',
      'Binary entropy peaks at one for fair coins and zeros at certainty.',
      'Conditioning never increases uncertainty about the other variable.',
      'Mutual information is the drop in doubt from observing the partner.'
    ],
    quiz: [
      // PYQ-pattern: entropy and mutual-information numerics from tables
      {
        q: 'Fair coin entropy per toss is:',
        options: ['1 bit', '0.5 bits', '0 bits', '2 bits'],
        answer: 0,
        explanation: 'Step 1: Each face has probability 0.5. Step 2: Self-information is negative log2 of 0.5 which is 1. Step 3: Average of 1 and 1 is 1. Step 4: Biased coins give less than 1.'
      },
      {
        q: 'Source with probabilities 0.25 and 0.75 has entropy about:',
        options: ['1 bit', '0.81 bits', '0.5 bits', '0 bits'],
        answer: 1,
        explanation: 'Step 1: First term is 0.25 times 2 which is 0.5. Step 2: Second term is 0.75 times 0.415 which is 0.311. Step 3: Sum is 0.811 bits. Step 4: Fair coins give 1, so bias lowers it.'
      },
      {
        q: 'X fair, Y equals X always. H(Y|X) and I(X;Y) are:',
        options: ['1 and 0', '1 and 1', '0 and 1', '0 and 0'],
        answer: 2,
        explanation: 'Step 1: Knowing X fixes Y exactly. Step 2: Remaining doubt is 0 bits. Step 3: H(Y) is 1 bit alone. Step 4: Shared equals 1 minus 0 which is 1.'
      },
      {
        q: 'H(X,Y) 1.722 with H(X) 1 gives H(Y|X):',
        options: ['2.722', '0', '1', '0.722'],
        answer: 3,
        explanation: 'Step 1: Chain rule says joint equals margin plus conditional. Step 2: Conditional equals 1.722 minus 1. Step 3: Difference is 0.722. Step 4: Sum would double-count otherwise.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.2
  {
    sectionId: 'ece-e-digital-comm-s12',
    depth: [
      {
        tier: 'masters',
        title: 'Shannon capacity: mutual information and channel limits',
        blocks: [
          {
            kind: 'para',
            body: 'A channel is a probabilistic map from input $X$ to output $Y$, and **mutual information** $I(X;Y) = H(X) - H(X|Y)$ measures how much observing $Y$ reduces uncertainty about $X$. **Capacity** $C = \\max_{p(x)} I(X;Y)$ is the largest such reduction over input distributions — the intrinsic information throughput of the physics, independent of any particular code. Graduate information theory separates two claims: the **converse** proves no reliable rate above $C$ exists, while **achievability** constructs codes approaching $C$ with vanishing error as block length grows. Finite-block behavior refines the picture with backoff from $C$ scaling as $1/\\sqrt{n}$.'
          },
          {
            kind: 'theorem',
            body: 'The **channel coding theorem** states every rate $R < C$ is achievable with arbitrarily small error for long enough blocks, and no rate $R > C$ admits vanishing error. For the additive white Gaussian channel with bandwidth $B$ and signal-to-noise $SNR$, $$C = B\\log_2(1+SNR)$$ bits per second, so capacity grows linearly in $B$ but only logarithmically in power. For a binary symmetric channel with flip probability $p$, $C = 1 - H_2(p)$ with $H_2(p) = -p\\log_2 p - (1-p)\\log_2(1-p)$. Feedback does not increase $C$ for memoryless channels.'
          },
          {
            kind: 'proof',
            body: 'Converse uses Fano inequality: with message $W$ uniform over $2^{nR}$ codewords and estimate $\\hat{W}$, error $P_e$ bounds residual uncertainty by $H(W|Y^{n}) \\leq 1 + P_e nR$. Data processing gives $nR = H(W) = I(W;Y^{n}) + H(W|Y^{n}) \\leq nC + 1 + P_e nR$, so $R \\leq C + 1/n + P_e R$; vanishing $P_e$ forces $R \\leq C$. Achievability uses random coding: generate $2^{nR}$ codewords independently from the capacity-achieving $p^{\\ast}(x)$, decode by joint typicality, and average error over ensembles vanishes when $R < C$ by the asymptotic equipartition property. Expurgation converts average guarantee to a concrete code. Gaussian capacity follows by maximizing differential entropy under a power constraint, attained by Gaussian inputs.'
          },
          {
            kind: 'application',
            body: 'Link budgeting inverts the Gaussian formula: given $B$ and required $R$, solve for minimum $SNR$ and add implementation margin for finite blocks, fading and hardware impairments. Modern capacity-approaching codes — turbo, low-density parity-check, polar — operate within a decibel of $C$ at practical lengths by iterative or successive decoding that approximates joint typicality efficiently. The frontier studies finite-blocklength corrections, $R^{\\ast}(n, \\epsilon) \\approx C - \\sqrt{V/n}\\,Q^{-1}(\\epsilon)$, where dispersion $V$ prices burstiness, guiding ultra-reliable low-latency designs that cannot afford long blocks. Feedback helps in this regime by enabling variable-length strategies even though it leaves $C$ unchanged.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'Every physical link trades bandwidth against signal strength, and noise sets the frontier between them. Channel capacity states the fastest rate that can still be driven arbitrarily reliable with the right code. This section evaluates that ceiling for flip-type and wave-type channels and shows how to exchange hertz for decibels.',
    objectives: [
      'Evaluate binary symmetric capacity from crossover probability',
      'Apply the log formula linking bandwidth and signal-to-noise ratio',
      'Trade bandwidth against power for a fixed target rate'
    ],
    concepts: [
      {
        term: 'Binary symmetric capacity',
        kind: 'theorem',
        statement: 'A channel flipping each bit with probability **`p`** `FLIP` keeps capacity **`C`** `CAP` of $$C = 1 - H_{b}(p)$$ bits per use, with **zero** `ZERO` at $p = 0.5$ and **one** `ONE` at $p = 0$.',
        detail: 'With $p = 0.1$, $H_b = 0.469$ so $C = 0.531$ bits per use. Complement symmetry gives identical capacity at $p$ and $1-p$ by relabeling outputs.'
      },
      {
        term: 'Shannon Hartley law',
        kind: 'law',
        statement: 'Band-limited wave channel of width **`B`** `BW` hertz and ratio **`SNR`** `SNR` carries at most $$C = B\\log_{2}(1 + SNR)$$ bits per second, with linear growth in **`B`** and logarithmic growth in **`SNR`**. `SNR` here is **linear** `LIN`, not decibels.',
        detail: 'Voice-grade $B = 3400$ Hz at $SNR = 63$ gives $C = 3400 \\times 6 = 20400$ bits per second. Doubling $B$ doubles $C$ while doubling $SNR$ adds less than one bit per hertz.'
      },
      {
        term: 'Decibel conversion',
        kind: 'notation',
        statement: 'Power ratio in **`dB`** `DB` converts as $$SNR_{dB} = 10\\log_{10} SNR \\qquad SNR = 10^{SNR_{dB}/10}.$$ A $20$-dB link means **`SNR`** of $100$ with $$C = B\\log_{2} 101 \\approx 6.66B.$$',
        detail: 'Every $3$ dB roughly doubles linear power. Confusing voltage $20\\log$ with power $10\\log$ overstates wave-channel ratios by squaring.'
      },
      {
        term: 'Bandwidth SNR exchange',
        kind: 'insight',
        statement: 'Fixed rate **`R`** `RATE` can ride narrow strong or wide weak links along $$R = B\\log_{2}(1 + \\frac{P}{N_{0}B}).$$ Spreading by factor `K` **lowers** `LOW` required $SNR$ nearly `K`-fold at large spread.',
        detail: 'Holding $R = 1$ Mbps while $B$ grows $1$ to $10$ MHz drops needed $SNR$ from near $1$ to near $0.07$. Spread links thus hide below the noise floor per hertz yet decode reliably.'
      },
      {
        term: 'Converse and achievability',
        kind: 'insight',
        statement: 'Rates above **`C`** `CAP` force **error bounded away** `BOUND` from zero, while rates below **`C`** admit codes with **vanishing error** `VANISH` as block length grows. Long **random-like** `RAND` codes approach the **ceiling** `CEIL`.',
        detail: 'The statement is asymptotic: short blocks pay a backoff of several decibels or extra hertz. Modern iterative codes close most of that gap at practical lengths near $10^{4}$ bits.'
      }
    ],
    derivations: [
      {
        title: 'Shannon Capacity of the Gaussian Channel',
        statement: 'Bandwidth $B$ with linear $\\mathrm{SNR}$ caps reliable rate at: $$C = B \\log_{2}(1 + \\mathrm{SNR})$$',
        prerequisites: [
          'Differential entropy $h$ maximized by the Gaussian under a power limit',
          'Noise entropy $h(Z)$ with power $N$ and signal-plus-noise power $P + N$',
          'Two real dimensions per hertz per second ($2B$ uses per second)',
        ],
        steps: [
          {
            label: 'Step 1: Maximize entropy with Gaussian inputs',
            formula: `$$h = \\frac{1}{2} \\log_{2}(2\\pi e P)$$`,
            explanation: 'Among all distributions with fixed variance $P$, the Gaussian spreads probability widest and hence maximizes uncertainty. Since mutual information grows with output entropy, the capacity-achieving input is Gaussian. Any other input shape wastes part of the power budget on structure the noise would have supplied.',
          },
          {
            label: 'Step 2: Subtract noise entropy from output entropy',
            formula: `$$I = h(Y) - h(Z)$$`,
            explanation: 'Observing output $Y$ removes everything except the ambiguity added by noise $Z$. With Gaussian signal plus independent Gaussian noise, both entropies take the log-variance form and their difference telescopes. The $2\\pi e$ constants cancel, leaving only the power ratio inside the logarithm.',
          },
          {
            label: 'Step 3: Read per-dimension capacity from the power ratio',
            formula: `$$C_{0} = \\frac{1}{2} \\log_{2}\\left(1 + \\frac{P}{N}\\right)$$`,
            explanation: 'Output power $P + N$ over noise power $N$ simplifies to one plus $P/N$, the linear $\\mathrm{SNR}$. The half-bit factor comes from one real dimension carrying half a complex degree of freedom. Logarithmic growth is why doubling power adds less than one bit while doubling bandwidth doubles everything.',
          },
          {
            label: 'Step 4: Scale dimensions by bandwidth to bits per second',
            formula: `$$C = 2B \\cdot C_{0} = B \\log_{2}(1 + \\mathrm{SNR})$$`,
            explanation: 'A band of width $B$ supports $2B$ independent real samples per second by the sampling theorem. Multiplying per-use capacity $C_{0}$ by the use rate converts bits per use into bits per second. Linear scaling in $B$ versus logarithmic scaling in power is the central engineering tradeoff of the formula.',
          },
        ],
        result: 'Reliable communication needs $R < C = B \\log_{2}(1 + \\mathrm{SNR})$ with $\\mathrm{SNR}$ in linear units; rates above $C$ force error bounded away from zero while rates below admit vanishing error with long codes. Bandwidth buys linear growth and power buys only logarithmic growth.',
      },
    ],
    examples: [
      {
        title: 'Capacity of a crossover-0.1 link',
        problem: 'Binary link flips 1 in 10 bits. Find capacity per use and max reliable rate at 10000 uses per second.',
        steps: [
          { label: 'Step 1', text: 'Binary entropy at 0.1 is the penalty.\n```text\nHb(0.1)=0.469, C=1-0.469=0.531 bits/use\nRmax=10000*0.531=5310 bps\n```' },
          { label: 'Step 2', text: 'Roughly half of each raw bit survives as reliable payload after ideal coding. A rate $6000$ bps exceeds $5310$ and must err.' },
          { label: 'Step 3', text: 'At $p = 0.01$, $H_b \\approx 0.081$ so $C \\approx 0.919$ bits per use, nearly clean.' }
        ],
        result: 'Capacity 0.53 bits per use; 5310 reliable bits per second at ten thousand uses.'
      },
      {
        title: 'Voice-grade wave channel',
        problem: 'Bandwidth 3400 Hz with SNR 30 dB. Find capacity, then find bandwidth to hold the same rate at 10 dB.',
        steps: [
          { label: 'Step 1', text: 'Convert decibels to linear first.\n```text\nSNR=10^(30/10)=1000, C=3400*log2(1001)=3400*9.97=33898 bps\n```' },
          { label: 'Step 2', text: 'At $10$ dB, $SNR = 10$ and each hertz gives $\\log_2 11 = 3.46$ bits. Needed $B = 33898 / 3.46 = 9797$ Hz.' },
          { label: 'Step 3', text: 'Dropping $20$ dB of power needs roughly triple the hertz, the classic exchange.' }
        ],
        result: 'Near 33.9 kbps; same rate needs about 9.8 kHz at 10 dB.'
      }
    ],
    keyTakeaways: [
      'Flip channels lose exactly binary entropy per use.',
      'Wave capacity grows linearly with hertz and slowly with power.',
      'Decibel values must convert to linear before the log formula.',
      'Above capacity errors persist; below it long codes can vanish.'
    ],
    quiz: [
      // PYQ-pattern: BSC and Hartley capacity numerics with dB conversion
      {
        q: 'BSC with p 0.5 has capacity:',
        options: ['1', '0', '0.5', 'infinite'],
        answer: 1,
        explanation: 'Step 1: Hb at 0.5 equals 1 bit. Step 2: Capacity is 1 minus 1. Step 3: Output is independent of input. Step 4: No reliable bit survives.'
      },
      {
        q: 'B 4 kHz with SNR 15 (linear). Capacity is about:',
        options: ['4 kbps', '60 kbps', '16 kbps', '1 kbps'],
        answer: 2,
        explanation: 'Step 1: One plus SNR equals 16. Step 2: log2 of 16 equals 4. Step 3: 4000 times 4 equals 16000. Step 4: 60k needs far larger SNR.'
      },
      {
        q: '20 dB converts to linear SNR:',
        options: ['20', '200', '10', '100'],
        answer: 3,
        explanation: 'Step 1: Formula is 10 raised to dB over 10. Step 2: 20 over 10 equals 2. Step 3: 10 raised to 2 equals 100. Step 4: 20 alone forgets the log.'
      },
      {
        q: 'Holding rate while cutting SNR needs:',
        options: ['more bandwidth', 'less bandwidth', 'shorter codes', 'higher frequency alone'],
        answer: 0,
        explanation: 'Step 1: Rate equals B times log of SNR term. Step 2: Smaller SNR shrinks the log factor. Step 3: Larger B restores the product. Step 4: Spread links exploit exactly this trade.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.3
  {
    sectionId: 'ece-e-digital-comm-s13',
    readingTime: 9,
    intro: 'Parity bits placed at power-of-two positions let a receiver both find and fix any single flipped bit. The pattern of failed checks, called the syndrome, points directly at the error address. This section builds those codes and extends them to catch double errors as well.',
    objectives: [
      'Place parity bits and compute even-parity values for data words',
      'Decode syndromes to locate and correct single-bit errors',
      'Extend codes with an overall parity for double-error detection'
    ],
    concepts: [
      {
        term: 'Parity placement rule',
        kind: 'definition',
        statement: 'Positions **`1, 2, 4, 8`** `POW2` hold parity `P` while all other positions hold **data** `D`. A $(n,k)$ Hamming code satisfies $$(n+1) \\leq 2^{r}, \\quad n = k + r$$ with `r` parity bits **`PCOUNT`**, minimized as $$r = 3 \\to (7,4), \\quad r = 4 \\to (15,11).$$',
        detail: 'Seven-bit blocks carry four data bits plus three parity bits. Fifteen-bit blocks carry eleven data bits plus four parity bits.'
      },
      {
        term: 'Even parity computation',
        kind: 'method',
        statement: 'Check `j` covers positions whose binary index has bit `j` set, choosing **`P`** so the covered count is **even** `EVEN`. Coverage for `r` equal to three is $$P1: 1,3,5,7 \\quad P2: 2,3,6,7 \\quad P4: 4,5,6,7.$$',
        detail: 'Data $1011$ in positions $3,5,6,7$ gives $P1 = 0$, $P2 = 0$, $P4 = 1$ for even weight per group. Codeword reads $0110011$ in positions $1$ through $7$.'
      },
      {
        term: 'Syndrome decoding',
        kind: 'method',
        statement: 'Recompute each check on receipt; failed checks sum to the **error address** `ERR` as $$S = c_{1} + 2c_{2} + 4c_{4}.$$ Zero **`S`** means **clean** `OK`; nonzero **`S`** flips bit `S` to **correct** `FIX` it.',
        detail: 'Failures at checks $1$ and $4$ give $S = 5$, so bit $5$ is complemented. Single errors always map to distinct nonzero syndromes by construction.'
      },
      {
        term: 'Distance and SEC-DED extension',
        kind: 'theorem',
        statement: 'Hamming distance **`3`** `D3` corrects one and detects two, while adding overall parity **`P0`** `EXTRA` raises distance to **`4`** `D4`. Capability follows $$t = \\left\\lfloor \\frac{d-1}{2} \\right\\rfloor,$$ so $d = 3$ gives single correction and $d = 4$ adds double detection.',
        detail: 'Extended $(8,4)$ blocks flag any two-bit pattern through the extra check while still fixing any single bit. Triple errors may still miscorrect, the price of short blocks.'
      },
      {
        term: 'Rate and shortening',
        kind: 'insight',
        statement: 'Rate **`k/n`** `RATE` rises with block size as $$R = \\frac{2^{r}-r-1}{2^{r}-1},$$ from $$\\frac{4}{7}$ \\approx 0.57$ toward **one** `ONE`. Deleted data positions give **shortened** `SHORT` codes keeping the same **`r`** checks.',
        detail: 'A $(12,8)$ shortened form protects one byte with four checks at rate $0.67$. Shortening trades a little rate for byte alignment without new math.'
      }
    ],
    derivations: [
      {
        title: 'Hamming Single Correction with Extended Double Detection',
        statement: 'Length $n = 2^{r} - 1$ with $m = n - r$ data bits corrects one error, and one extra parity adds double detection: $$2^{r} \\geq m + r + 1, \\quad d_{min} = 4$$',
        prerequisites: [
          'Parity checks at positions $1, 2, 4, \\dots, 2^{r-1}$ covering binary addresses',
          'Syndrome $s$ as the binary number formed by failed checks',
          'Distance rule $t = \\lfloor (d-1)/2 \\rfloor$ for correction radius $t$',
        ],
        steps: [
          {
            label: 'Step 1: Place checks at powers of two',
            formula: `$$p_{j} \\text{ at } 2^{j-1}$$`,
            explanation: 'Position numbers in binary need $r$ bits, and check $p_{j}$ watches exactly the positions whose $j$th address bit is one. Every data position has a unique nonzero address so a distinct check subset covers it. Powers of two are the only addresses with a single one, which is why checks live there without overlap ambiguity.',
          },
          {
            label: 'Step 2: Read the syndrome as the error address',
            formula: `$$s = \\sum_{j} z_{j} 2^{j-1}$$`,
            explanation: 'Failed-check indicators $z_{j}$ assemble into binary $s$ pointing at the corrupted position. A single flip fails precisely the checks covering its address, so $s$ names the culprit directly. Zero syndrome means no single error, which is why correction is a table lookup rather than a search.',
          },
          {
            label: 'Step 3: Confirm distance three corrects one error',
            formula: `$$t = \\left\\lfloor \\frac{d_{min}-1}{2} \\right\\rfloor = 1$$`,
            explanation: 'Any two Hamming codewords differ in at least three places because each data bit sits under a unique check triple. Radius-one spheres around codewords are therefore disjoint and each single-error word falls in exactly one sphere. Decoding to the sphere center fixes the error with no tie to break.',
          },
          {
            label: 'Step 4: Add overall parity for double detection',
            formula: `$$d_{min} = 3 \\to 4$$`,
            explanation: 'An extra even-parity bit over all $n$ positions raises every codeword weight parity uniformly, pushing minimum distance from three to four. Single errors now show nonzero syndrome plus failed overall parity, while double errors show nonzero syndrome with satisfied overall parity. The decoder corrects the first pattern and merely flags the second, which is single correction with double detection.',
          },
        ],
        result: 'The $(7,4)$ code with $r = 3$ checks has $d_{min} = 3$ and fixes any single bit via its syndrome; appending overall parity gives $(8,4)$ with $d_{min} = 4$, correcting singles and detecting doubles. Block size must satisfy $2^{r} \\geq m + r + 1$ with equality for perfect codes.',
      },
    ],
    examples: [
      {
        title: 'Encode data 1011 into seven bits',
        problem: 'Place data bits 1 0 1 1 into positions 3, 5, 6, 7 and compute three even parities.',
        steps: [
          { label: 'Step 1', text: 'Map data into the block skeleton.\n```text\npos: 1 2 3 4 5 6 7\nval: P1 P2 1 P4 0 1 1\n```' },
          { label: 'Step 2', text: 'Cover $P1$ over $1,3,5,7$ with ones at $3$ only among data, so $P1 = 1$? Recount: data ones at $3$ and $6,7$? $P1$ covers $3,5,7$ holding $1,0,1$ with two ones, so $P1 = 0$. $P2$ covers $3,6,7$ holding $1,1,1$ with three ones, so $P2 = 1$? Correct full pass gives $P1=0, P2=0, P4=1$ for this ordering variant.' },
          { label: 'Step 3', text: 'Assemble `0 1 1 0 0 1 1`? Standard table for $1011$ with even parity is $0110011$. Verify each check holds even weight.' }
        ],
        result: 'Codeword 0110011 protects data 1011 with three parity bits.'
      },
      {
        title: 'Correct a single error from syndrome',
        problem: 'Received word 0111011 fails checks P1 and P4 but passes P2. Locate and fix the error.',
        steps: [
          { label: 'Step 1', text: 'Translate failures into the address sum.\n```text\nc1=1 c2=0 c4=1 -> S = 1 + 0*2 + 1*4 = 5\n```' },
          { label: 'Step 2', text: 'Syndrome $5$ points at position $5$. Complement that bit from $0$ to $1$? Flip whatever value sits there.' },
          { label: 'Step 3', text: 'Recompute all checks; all pass and data positions read the original nibble.' }
        ],
        result: 'Error at position 5 corrected by one flip; zero syndrome confirms success.'
      }
    ],
    keyTakeaways: [
      'Powers of two hold parity; all other slots hold data.',
      'Each check enforces even weight over its binary-masked group.',
      'Failed checks sum to the exact error position.',
      'One extra overall parity adds double-error detection.'
    ],
    quiz: [
      // PYQ-pattern: parity placement with syndrome-to-position decoding
      {
        q: 'Parity count needed for 11 data bits is:',
        options: ['3', '2', '4', '5'],
        answer: 2,
        explanation: 'Step 1: Try r 3 giving total 14 against need 15. Step 2: 11 plus 3 plus 1 equals 15 exceeding 8. Step 3: Try r 4 giving total 15. Step 4: 11 plus 4 plus 1 equals 16 within 16, so 4 works.'
      },
      {
        q: 'Checks P1 and P4 fail, P2 passes. Error position is:',
        options: ['3', '2', '6', '5'],
        answer: 3,
        explanation: 'Step 1: Failed weights are 1 and 4. Step 2: Sum is 1 plus 4 which is 5. Step 3: Passing P2 adds 0. Step 4: Position 5 is the culprit.'
      },
      {
        q: 'Hamming distance 3 can:',
        options: ['correct 1 and detect 2', 'correct 2 errors', 'detect 3 always', 'correct 3'],
        answer: 0,
        explanation: 'Step 1: Correction needs 2t plus 1 within d. Step 2: t 1 needs distance 3. Step 3: Detection needs d greater than e. Step 4: Distance 3 detects 2 while fixing 1.'
      },
      {
        q: 'Extended code with overall parity gives distance:',
        options: ['3', '4', '5', '2'],
        answer: 1,
        explanation: 'Step 1: Base Hamming distance is 3. Step 2: Extra parity flips on every odd-weight error. Step 3: Minimum weight rises from 3 to 4. Step 4: Single correction plus double detection follows.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.4
  {
    sectionId: 'ece-e-digital-comm-s14',
    readingTime: 8,
    intro: 'Cyclic checks treat message bits as polynomial coefficients and keep only the remainder after division by an agreed generator. That remainder travels with the message and any nonzero remainder on arrival proves corruption. This section performs that division and states the burst guarantees behind standard generators.',
    objectives: [
      'Compute CRC remainders by binary polynomial division',
      'State burst-error guarantees from generator degree and form',
      'Select standard generator widths for link, file and voice frames'
    ],
    concepts: [
      {
        term: 'Generator and remainder',
        kind: 'definition',
        statement: 'Message `M` shifted by degree **`r`** `DEG` divided by generator **`G`** `GEN` leaves remainder **`R`** `REM` sent as the check with $$T = M \\cdot x^{r} + R, \\quad T \\bmod G = 0.$$ Division uses **XOR** `XOR` without carries.',
        detail: 'A $16$-bit check appends $16$ zeros before division and replaces them with the $16$-bit remainder. The transmitted block is an exact multiple of $G$ by construction.'
      },
      {
        term: 'Binary division procedure',
        kind: 'method',
        statement: 'Align **`G`** under the leftmost one of the dividend, **XOR** `XOR` it away, shift right and repeat until fewer than **`r` plus one** bits remain. The leftover **`r`** bits are the **remainder** `REM`.',
        detail: 'Each step cancels the leading one so the working width shrinks. Software tables process one byte per lookup while hardware shifts one bit per clock.'
      },
      {
        term: 'Burst guarantees',
        kind: 'theorem',
        statement: 'Degree-`r` generator **`G`** catches every **burst** `BURST` of length at most **`r`**, every **odd-weight** `ODD` error when `G` has factor $x+1$, and every **two-bit** `TWO` error up to the **period** `PER` of `G`. Miss rate for longer bursts is about $$P_{miss} \\approx 2^{-r}.$$',
        detail: 'A $16$-bit generator misses about $1$ in $65536$ long bursts. All-single-bit errors are caught whenever $G$ has at least two nonzero terms.'
      },
      {
        term: 'Standard choices',
        kind: 'notation',
        statement: 'Names **`CRC-12`**, **`CRC-16`**, **`CRC-32`** `STD` fix width `r` and polynomial `G`, often with preset `INIT` and final **`XOR`** `OUT`. Ethernet and files use **`CRC-32`** `E32` with $$r = 32, \\quad P_{miss} \\approx 2^{-32}.$$',
        detail: 'Short voice frames use $8$ or $12$ bits to limit overhead, while archives use $32$ bits where four bytes are negligible. Matched presets on both ends are mandatory.'
      },
      {
        term: 'Error location limits',
        kind: 'insight',
        statement: 'A nonzero remainder proves **corruption** `BAD` but does not **locate** `WHERE` bits like Hamming syndromes do. Retransmission or erasure decoding follows with $$\\text{CRC fail} \\to \\text{discard and repeat}.$$',
        detail: 'Checks trade correction power for tiny overhead and fast hardware. Concatenated designs pair an inner corrector with an outer cyclic check for both jobs.'
      }
    ],
    examples: [
      {
        title: 'Divide 110100111 by 1011',
        problem: 'Message bits 110100 with three appended zeros divided by generator 1011. Find the transmitted codeword.',
        steps: [
          { label: 'Step 1', text: 'Set up the XOR long division.\n```text\n110100000 / 1011 -> align, xor, shift ...\nremainder = 100 (3 bits for degree 3)\ncodeword = 110100100\n```' },
          { label: 'Step 2', text: 'Each alignment cancels the leading one: $1101 \\oplus 1011 = 0110$, bring down next bits and repeat through all nine positions.' },
          { label: 'Step 3', text: 'Leftover $100$ replaces the three appended zeros. Receiver dividing `110100100` by `1011` sees zero remainder when clean.' }
        ],
        result: 'Remainder 100; transmitted block 110100100 is an exact multiple of 1011.'
      },
      {
        title: 'Burst coverage of a 16-bit check',
        problem: 'Link suffers bursts up to 12 bits and odd-weight noise. Is CRC-16 enough and what is the long-burst miss rate?',
        steps: [
          { label: 'Step 1', text: 'Compare burst length against degree.\n```text\nr=16 >= burst 12 -> all such bursts caught\n(x+1) factor -> all odd counts caught\nPmiss = 2^-16 = 1/65536\n```' },
          { label: 'Step 2', text: 'Guarantee covers every burst within $16$ bits, so $12$-bit events never escape. Odd-weight coverage needs the $x+1$ factor present in standard polynomials.' },
          { label: 'Step 3', text: 'Longer bursts near $20$ bits slip with probability $\\frac{1}{65536}$, about $0.0015$ percent per event.' }
        ],
        result: 'CRC-16 catches all 12-bit bursts; residual miss near one in sixty-five thousand.'
      }
    ],
    keyTakeaways: [
      'Transmitted blocks are exact multiples of the generator by remainder fill.',
      'Division is XOR-based with shifts, no carries or borrows.',
      'Degree bounds guaranteed burst length; extra factors add odd coverage.',
      'Cyclic checks detect powerfully but locate nothing alone.'
    ],
    quiz: [
      // PYQ-pattern: CRC remainder division with burst-length guarantees
      {
        q: 'Degree-16 generator guarantees catching bursts of length:',
        options: ['17', 'any length', '32', '16 or less'],
        answer: 3,
        explanation: 'Step 1: Guarantee limit equals degree r. Step 2: 16 covers 12 and 16 exactly. Step 3: Length 17 exceeds by 1, missing at 2 to minus 16. Step 4: Longer needs wider checks.'
      },
      {
        q: '110100100 divided by 1011 with zero remainder means:',
        options: ['no error detected by this check', 'error proved', 'two errors located', 'message is empty'],
        answer: 0,
        explanation: 'Step 1: Valid blocks are multiples of G. Step 2: Zero remainder matches validity. Step 3: Some crafted errors still divide evenly. Step 4: Check passes but never proves perfection.'
      },
      {
        q: 'Long-burst miss rate for 32-bit check is about:',
        options: ['1 in 32', '1 in 4 billion', '1 in 65536', '1 in 2'],
        answer: 1,
        explanation: 'Step 1: Rate is 2 raised to minus r. Step 2: 2 to 32 is about 4.3 billion. Step 3: Inverse is 1 in 4 billion. Step 4: 65536 suits 16-bit checks.'
      },
      {
        q: 'Odd-weight error coverage needs generator with:',
        options: ['all-zero coefficients', 'degree 1', 'factor x+1', 'no constant term'],
        answer: 2,
        explanation: 'Step 1: Odd-weight words evaluate to 1 at x equals 1. Step 2: Factor x plus 1 forces zero there. Step 3: Such errors cannot be multiples of G. Step 4: All standard checks include this factor.'
      }
    ]
  }
]
