import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// Feynman Lectures on Physics (New Millennium Edition), Volume I
// Master Physics Library — Chapter 2: Probability and Fluctuations
// Source: Lecture I-6, with the exponential atmosphere from I-40-1/40-2.
// Master study content. All numbers and stories are Feynman's own.
// Math is LaTeX, rendered by KaTeX via the RichText pipeline.
// ============================================================================

export const physCh2Content: SectionContent[] = [
  // ------------------------------------------------------------------ 2.1
  {
    sectionId: 'phys-ch2-s1',
    readingTime: 8,
    intro: '“The true logic of this world is in the calculus of probabilities,” Maxwell said, and Feynman opens his probability lecture with everyday guessing — a sixty percent chance of rain, a seismologist’s earthquake odds, a geiger counter’s counts — before making the idea precise. The centerpiece is a real experiment: one hundred games of thirty coin tosses, whose scatter around fifteen heads teaches the square-root-of-N law that governs every counted quantity in physics.',
    objectives: [
      'Define probability as $P(A) = N_A/N$ and state the conditions under which probability may be spoken of',
      'Derive equal-likelihood probabilities — $1/m$ for dice, cards and colored balls — by symmetry arguments',
      'Read Feynman’s hundred-game coin data and separate fluctuation from bias',
      'Apply the square-root-of-N law: the count deviates from $N/2$ by about $\\sqrt{N}/2$, the fraction by $1/(2\\sqrt{N})$',
      'Connect probability to cross-sections: $P_C = n\\sigma/A$ as the shadowed fraction of a target',
    ],
    concepts: [
      {
        term: 'Probability as disciplined guessing',
        kind: 'definition',
        statement: 'We make guesses whenever we must judge with incomplete information — the raincoat decision, the earthquake design load, the geiger count, even foreign policy. **The theory of probability is a system for making better guesses**: a quantitative language for situations that are highly variable but have some consistent average behavior.',
        detail: '“Any physical theory is a kind of guesswork. There are good guesses and there are bad guesses.” The theory does not remove the uncertainty; it makes the uncertainty itself measurable, so that a sixty-percent chance of rain means exactly what it says.',
      },
      {
        term: 'The definition of probability',
        kind: 'notation',
        statement: 'The probability of a result $A$ is our estimate of the most likely fraction of repeated observations that will yield $A$: $$P(A) = \\frac{N_A}{N},$$ where $N_A$ is the most likely number of $A$ outcomes among $N$ imagined observations.',
        detail: 'For an honest coin we say $P(\\text{heads}) = 0.5$ — but this does not mean thirty tosses give exactly fifteen heads, only some number near fifteen, with fifteen more likely than any other single number. The numbers in the definition are estimates of what would occur in imagined observations, not tallies of data already collected.',
      },
      {
        term: 'Conditions for speaking of probability',
        kind: 'method',
        statement: 'Probability attaches only to outcomes of a **repeatable observation** — each repetition prepared equivalently, and especially with the same degree of ignorance at the start. “What is the probability that there is a ghost in that house?” is not clearly a probability question at all.',
        detail: 'No situation is exactly repeatable — every observation at least happens at a different time or place; all we require is that the repetitions appear equivalent for our purposes. If we sneak a look at an opponent’s hand in a card game, our estimate of the chances changes: the probability changed because the knowledge changed.',
      },
      {
        term: 'Probabilities are knowledge-relative',
        kind: 'insight',
        statement: 'Probabilities depend on our knowledge and our ability to make estimates — “in effect, on our common sense” — so they are **not absolute numbers**, and they change when the knowledge changes.',
        detail: 'The experimental physicist writes $P(H) = N_H/N \\pm 1/(2\\sqrt{N})$ and speaks of an “error,” implying a hidden true probability that better knowledge would reveal. Feynman’s judgment: there is no way to make that thinking logically consistent — better to accept that the probability concept is in a sense subjective and always based on uncertain knowledge.',
      },
      {
        term: 'Symmetry and equal likelihood',
        kind: 'law',
        statement: 'If an observation has $m$ different but equally likely results, the probability of a particular one is $P(A) = 1/m$: one ball of a given color among seven in a box gives $1/7$; the ten of hearts on a blind draw from 52 cards gives $1/52$; double-one with dice gives $1/36$. For an honest coin the symmetry $N_T = N_H$ forces $P(H) = P(T) = 0.5$.',
        detail: 'The coin argument in full: with $N$ tosses, $N_H + N_T = N$, and with no reason to prefer heads, the most likely values must be equal — so each is $N/2$. The reasoning extends to any set of equivalent outcomes, which is why “at random” and “without looking” do all the work in the colored-balls and card-drawing examples.',
      },
      {
        term: 'Fluctuations',
        kind: 'definition',
        statement: 'Feynman’s class ran one hundred games of thirty coin tosses (after the first three games, thirty pennies shaken violently in a box). The first three games gave **11, 11 and 16 heads** — not once 15. Across all hundred games, scores of 15 and of 14 each occurred 13 times, while 16 and 17 occurred more often; yet the total came to 1493 heads in 3000 tosses.',
        detail: 'The surplus of sixteen-head games is a fluctuation, not evidence of bias: three thousand tosses swamp one hundred games of thirty. “We should certainly not assume that the probability of throwing heads is greater than 0.5.” The most likely single score remains fifteen.',
      },
      {
        term: 'The square-root-of-N law',
        kind: 'law',
        statement: 'The expected deviation of the head count from its most likely value is about $$\\left(N_H - \\frac{N}{2}\\right)_{\\text{rms}} = \\frac{\\sqrt{N}}{2},$$ so the **fraction** of heads deviates from one-half by about $1/(2\\sqrt{N})$: the larger $N$, the closer the fraction sits to 0.5 — but without any guarantee for a particular run.',
        detail: 'This is the master law of fluctuations, and it scales every counted quantity in physics. For $N = 30$ the expected spread is $\\sqrt{30}/2 \\approx 2.7$ heads — the observed histogram had a width of about 3. There is always a finite chance of an arbitrarily large deviation — a long string of heads or tails — so a deviation within a factor of two or three of $\\sqrt{N}/2$ gives no reason to suspect the coin; a much larger one suggests, but never proves, loading.',
      },
      {
        term: 'Probability as area: cross-sections',
        kind: 'method',
        statement: 'When a high-energy particle crosses a slab with $n$ atoms spread over area $A$, each nucleus shadowing cross-section $\\sigma$, the probability of a collision is $$P_C = \\frac{n\\sigma}{A}$$ — the ratio of shadowed area to total area. The cross-section of Chapter 1 is literally a probability.',
        detail: 'The nucleus is too small to see, so we cannot aim at one: we “shoot blind,” and the expected hit count shadows the area ratio, $N_C/N = n\\sigma/A$. This is the template for how probability enters measurement itself — and the same geometry reappears whenever chance is spread over an area.',
      },
    ],
    examples: [
      {
        title: 'Reading the hundred-game experiment',
        problem: 'One hundred games of thirty coin tosses gave 13 games with exactly 15 heads — and more games with 16 or 17. Is the coin (or the tosser) suspect?',
        steps: [
          { label: 'Step 1: The binomial expectation', text: 'For an honest coin, the probability of exactly $k$ heads in $n$ tosses is $P(k,n) = \\binom{n}{k}/2^{n}$. In 100 games of 30 tosses we expect a score of exactly 15 heads in about 14 or 15 games ($100\\cdot P(15,30)$) — we observed 13. We expect 16 heads in about 13 or 14 games — we observed 16.' },
          { label: 'Step 2: Pool the data', text: 'In all the games together there were 3000 tosses, and the total number of heads was 1493. The fraction of tosses giving heads is $1493/3000 = 0.498$ — very nearly, but slightly less than, half.' },
          { label: 'Step 3: Compare with the expected scatter', text: 'The expected rms deviation of the total is $\\sqrt{N}/2 = \\sqrt{3000}/2 \\approx 27$ heads. The observed deviation from 1500 is only 7 heads — well within one rms.' },
          { label: 'Step 4: Verdict', text: 'The odd-looking game-by-game counts are exactly what fluctuations look like: “such fluctuations are part of the game.” The best estimate of the probability of heads remains 0.5, and the coin stands acquitted.' },
        ],
        result: '1493 heads in 3000 tosses is a fraction 0.498 — within a quarter of the expected rms deviation of about 27 heads. No bias is indicated.',
      },
      {
        title: 'How much deviation should an honest coin show?',
        problem: 'You toss a coin $N$ times. How far from $N/2$ heads may the count reasonably wander before you suspect the coin?',
        steps: [
          { label: 'Step 1: The rms expectation', text: 'The head count should deviate from $N/2$ by about $\\sqrt{N}/2$ heads; the fraction of heads deviates from 0.5 by about $1/(2\\sqrt{N})$.' },
          { label: 'Step 2: Small N', text: 'For $N = 30$: expected deviation $\\sqrt{30}/2 \\approx 2.7$ heads, and a fractional deviation of $1/(2\\sqrt{30}) \\approx 9$ percent. The hundred-game histogram indeed spread over roughly 12 to 18 heads — a width of about 3 from the center.' },
          { label: 'Step 3: Large N', text: 'For $N = 3000$: expected deviation $\\sqrt{3000}/2 \\approx 27$ heads, a fractional deviation of about 1 percent. The fraction of heads hugs 0.5 ever more tightly as $N$ grows.' },
          { label: 'Step 4: The rule', text: 'A deviation within a factor of two or three of the expected $\\sqrt{N}/2$ gives no reason to suspect the honesty of the coin. A much larger deviation suggests — but cannot prove — that the coin is loaded or the tosser clever, because a large fluctuation is always finitely possible.' },
        ],
        result: 'Expect the fraction of heads to differ from one-half by about $1/(2\\sqrt{N})$: roughly 9 percent for 30 tosses, 1 percent for 3000 — tighter and tighter, but never certain.',
      },
    ],
    keyTakeaways: [
      'Probability is a system for making better guesses — the quantitative language of situations that vary but have consistent average behavior.',
      '$P(A) = N_A/N$ estimates the most likely fraction of future, equivalently prepared observations; it is not a tally of past data.',
      'Probability requires repeatability, equivalent preparation and equal starting ignorance — knowledge changes probabilities.',
      'Symmetry fixes the honest coin at one-half, double-one at $1/36$, the ten of hearts at $1/52$, one ball of seven at $1/7$.',
      'Counted quantities fluctuate: the rms deviation of a count from its expectation is of order $\\sqrt{N}$ — the fraction deviates by $1/(2\\sqrt{N})$.',
      'A deviation within a factor of two or three of $\\sqrt{N}/2$ is ordinary; much larger suggests loading but proves nothing.',
      'Cross-sections are probabilities: $P_C = n\\sigma/A$ is the shadowed fraction of the target area.',
    ],
    quiz: [
      {
        q: 'By probability $P(A)$, Feynman means:',
        options: [
          'the fraction of observations already made that gave result $A$',
          'our estimate of the most likely fraction of $N$ imagined, equivalently prepared observations that will yield $A$',
          'a physical property of the object observed, independent of the observer',
          'the guaranteed frequency of $A$ in the long run',
        ],
        answer: 1,
        explanation: '$P(A) = N_A/N$ where $N_A$ is our best estimate of what would occur in $N$ imagined observations. The numbers are not actual observations — probability depends on knowledge and on the ability to make estimates.',
      },
      {
        q: 'In one hundred games of thirty tosses, a score of 16 heads occurred more often than a score of 15. The correct conclusion is:',
        options: [
          'the most likely score for thirty tosses is really 16',
          'the coin is probably loaded toward heads',
          'it is a fluctuation: over all 3000 tosses the fraction of heads was 0.498, and the most likely score remains 15',
          'the experiment was not repeated enough times to define probability',
        ],
        answer: 2,
        explanation: 'Feynman’s class found 1493 heads in 3000 tosses — 0.498 — slightly below half. The game-level surplus of 16s is precisely the kind of scatter the square-root-of-N law predicts, and gives no grounds for revising $P(H) = 0.5$.',
      },
      {
        q: 'Which of the following would change your estimate of a probability, according to Feynman?',
        options: [
          'Repeating the calculation with more decimal places',
          'Sneaking a look at your opponent’s hand in a card game',
          'Measuring the mass of the coin',
          'Nothing — probabilities are absolute numbers',
        ],
        answer: 1,
        explanation: 'Probability depends on the degree of ignorance at the start: each observation should be made “with the same degree of ignorance at the start,” and extra knowledge — like seeing the opponent’s cards — legitimately changes the estimate.',
      },
      {
        q: 'A coin is tossed 3000 times. About how far from 1500 heads should the count typically fall?',
        options: [
          'about $\\sqrt{3000}/2 \\approx 27$ heads',
          'about $\\sqrt{3000} \\approx 55$ heads',
          'about 5 heads',
          'exactly zero — the law of averages guarantees 1500',
        ],
        answer: 0,
        explanation: 'The rms deviation of the head count from $N/2$ is $\\sqrt{N}/2$: with $N = 3000$ that is about 27 heads, or about 1 percent in fraction. There is no guarantee — a particular run may land anywhere, but typically it stays within this scale.',
      },
      {
        q: 'A particle beam crosses a slab containing $n$ nuclei per unit area, each with cross-section $\\sigma$. The probability of a collision is:',
        options: [
          '$n\\sigma A$, with $A$ the slab area',
          '$n\\sigma/A$ — the shadowed fraction of the total area',
          `$\\sigma/nA$`,
          'exactly one, since the slab is solid matter',
        ],
        answer: 1,
        explanation: 'The nuclei shadow a total area $n\\sigma$ out of the slab area $A$; since we cannot aim at a nucleus, the chance of a hit is the ratio $n\\sigma/A$ — the cross-section concept of Chapter 1 is a probability in disguise.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.2
  {
    sectionId: 'phys-ch2-s2',
    readingTime: 10,
    intro: 'A drunken sailor reeling between lampposts, one random step at a time, is the vehicle Feynman uses to build the mathematics of fluctuations. The same algebra counts coin tosses, describes how a molecule wanders through still air by Brownian motion, and — with continuously varying steps — produces the Gaussian curve that reappears throughout physics. The section closes with the exponential atmosphere: equilibrium statistics in a gravitational field.',
    objectives: [
      'Derive $D_{\\text{rms}} = \\sqrt{N}$ for the random walk by the inductive mean-square argument',
      'Map the random walk onto coin tossing through $D = 2N_H - N$',
      'State and apply the binomial distribution and its Pascal-triangle structure',
      'Explain probability density, the Gaussian limit, and the normalization $\\int p(x)\\,dx = 1$',
      'Derive the exponential atmosphere $n = n_0e^{-mgh/kT}$ and its Boltzmann-law generalization',
    ],
    concepts: [
      {
        term: 'The random walk',
        kind: 'definition',
        statement: 'A walker starts at $x = 0$ and at each move takes one step forward or backward, chosen randomly — for example by a coin toss; the net distance after $N$ steps is $D_N$. In its general form the problem describes **Brownian motion** — atoms and particles in a gas — and the combination of errors in measurements.',
        detail: 'The average progress is exactly zero, since either direction is equally likely; yet the walker strays farther from the start as $N$ grows. The convenient measure of progress is not the average of $|D|$ but of $D^2$, which grows for either sign of wandering — a measure that treats left and right fairly.',
      },
      {
        term: 'Mean square distance',
        kind: 'theorem',
        statement: 'After one step $D_1 = \\pm 1$ always, so $\\langle D_1^2\\rangle = 1$. Since the $N$-th step gives $D_N = D_{N-1} \\pm 1$, the two possible squared outcomes are $D_{N-1}^2 + 2D_{N-1} + 1$ and $D_{N-1}^2 - 2D_{N-1} + 1$; each occurs half the time, so $$\\langle D_N^2\\rangle = \\langle D_{N-1}^2\\rangle + 1,$$ and therefore $\\langle D_N^2\\rangle = N$.',
        detail: 'The induction survives random step lengths: if each step has mean-square length $\\langle S^2\\rangle = 1$ (that is, $S_{\\text{rms}} = 1$), the same argument gives $\\langle D_N^2\\rangle = N$ — which is exactly the situation of a molecule jolted by collisions in a gas, the step lengths fluctuating with each impact.',
      },
      {
        term: 'Root-mean-square distance',
        kind: 'law',
        statement: 'The typical distance from the origin after $N$ unit steps is $$D_{\\text{rms}} = \\sqrt{\\langle D^2\\rangle} = \\sqrt{N}.$$ Distance grows only as the square root of the number of steps — random travel is slow travel.',
        detail: 'For $N = 30$ steps the typical displacement is $\\sqrt{30} \\approx 5.5$ steps. This square-root slowness is why a diffusing molecule takes ages to cross a room, why a walker lost in fog circles near the start, and why fluctuations of a count grow only as $\\sqrt{N}$.',
      },
      {
        term: 'The coin-toss correspondence',
        kind: 'notation',
        statement: 'Identify forward steps with heads: the net distance is $D = N_H - N_T = 2N_H - N$, so the excess of heads over half the tosses is $$N_H - \\frac{N}{2} = \\frac{D}{2},$$ with rms deviation $\\sqrt{N}/2$. The coin-tossing and random-walk problems are one problem.',
        detail: 'The hundred-game histogram of Section 2.1 is therefore also a distribution of walk distances: $k = 15$ reads $D = 0$, $k = 16$ reads $D = 2$, and the observed width of about 3 in $k$ matches $D_{\\text{rms}}/2 \\approx 2.8$ for thirty steps.',
      },
      {
        term: 'Pascal’s triangle and the binomial coefficients',
        kind: 'method',
        statement: 'The number of equally likely sequences giving $k$ heads in $n$ tosses is the **binomial coefficient** $$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!},$$ tabulated by Pascal’s triangle: $1, 3, 3, 1$ for three tosses and $1, 6, 15, 20, 15, 6, 1$ for six.',
        detail: 'Each entry counts the paths through the tree of tosses that arrive at a given score, and each entry is the sum of the two above it. The same numbers appear in the expansion of $(a+b)^{n}$ — hence the name binomial coefficients.',
      },
      {
        term: 'The binomial distribution',
        kind: 'law',
        statement: 'With $2^n$ equally likely sequences, the probability of $k$ heads in $n$ tosses is $$P(k,n) = \\binom{n}{k}\\frac{1}{2^{n}}.$$ With unequal chances — probability $p$ of “win” and $q = 1 - p$ of “lose” — the general result is the **Bernoulli, or binomial, probability**: $P(k,n) = \\binom{n}{k}p^{k}q^{n-k}$.',
        detail: 'For three tosses the scores 3, 2, 1, 0 heads carry probabilities $1/8$, $3/8$, $3/8$, $1/8$: there are three ways to obtain one head but only one way to obtain three. For two tosses the four equally likely sequences HH, HT, TH, TT give $1/4$, $2/4$, $1/4$.',
      },
      {
        term: 'Probability density',
        kind: 'definition',
        statement: 'With continuously varying step lengths, the probability of landing exactly on any specified $x$ is zero; instead $P(x,\\Delta x) = p(x)\\,\\Delta x$ defines the **probability density**, and the probability of landing between $x_1$ and $x_2$ is the area $$P(x_1 < D < x_2) = \\int_{x_1}^{x_2} p(x)\\,dx,$$ with the whole curve normalized to $\\int_{-\\infty}^{+\\infty}p(x)\\,dx = 1$.',
        detail: 'The walk densities widen in proportion to $\\sqrt{N}$ and shrink in height as $1/\\sqrt{N}$, keeping the area at one: 10,000 steps spread the walker about $\\pm100$ steps, 160,000 steps about $\\pm400$. The same language describes molecular speeds: $p(v)\\Delta v$ is the probability a molecule’s speed falls in $dv$, and the expected number in a liter of gas ($N \\approx 10^{22}$ molecules) between $v_1$ and $v_2$ is the area under $N\\,p(v)$.',
      },
      {
        term: 'The Gaussian limit',
        kind: 'law',
        statement: 'For large $N$ the random-walk density approaches the **normal, or gaussian, curve** $$p(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-x^{2}/2\\sigma^{2}},$$ with standard deviation $\\sigma = \\sqrt{N}$ (or $\\sqrt{N}\\,S_{\\text{rms}}$ when the rms step differs from one) — and the same limit is reached for every reasonable distribution of individual step lengths.',
        detail: 'This universality is why the Gaussian reappears everywhere in physics. Maxwell’s velocity distribution for gas molecules has the related form $p(v) = Cv^{2}e^{-av^{2}}$: any speed is possible, but speeds cluster near the most probable value $v_p$, and the expected count in an interval is the area under $N\\,p(v)$.',
      },
      {
        term: 'The exponential atmosphere',
        kind: 'law',
        statement: 'In an isothermal atmosphere at temperature $T$, the density at height $h$ satisfies $$n = n_0\\,e^{-mgh/kT},$$ from $dn/dh = -(mg/kT)n$; the general **Boltzmann law** $n = (\\text{constant})\\,e^{-\\text{P.E.}/kT}$ holds for any potential energy — the probability of a spatial arrangement varies exponentially with minus its potential energy over $kT$.',
        detail: 'The derivation balances the weight of gas against the pressure gradient: $P = nkT$ at uniform temperature, and $dP = -mgn\\,dh$ since the pressure at $h$ must hold up the gas above. Heavier molecules die out faster with altitude — oxygen falls away while hydrogen persists to great heights. The same statistical machinery, run forward in time, describes a vapor spreading from an opened bottle: each molecule wanders by Brownian motion, a three-dimensional random walk whose rms displacement grows as $\\sqrt{N}$ accumulated steps.',
      },
    ],
    figures: [
      {
        caption: 'Top: one 60-step random walk. The coin is honest and fully deterministic — bit 16 of the minimal-standard Lehmer generator $x \\to 48271x \\bmod (2^{31} - 1)$, started at $x_0 = 1$ — and this particular walker ends at $D_{60} = +2$ after wandering between $-4$ and $+5$ steps from the lamppost, comfortably inside the dashed guides at $\\pm\\sqrt{N} \\approx \\pm 7.75$ that mark the rms distance after $N = 60$ steps. Bottom: the exact binomial distribution for $n = 16$ tosses of a fair coin, $P(k) = \\binom{16}{k}/2^{16}$ — true bar heights, from the single all-tails sequence at $k = 0$ up through the $\\binom{16}{8} = 12870$ sequences that pile onto the peak at $k = 8$, where $P \\approx 0.196$ out of the $65536$ equally likely sequences. Walk and histogram are one subject: the walker’s net distance reads off the same count as $D = 2k - 16$.',
        svg: '<svg viewBox="0 0 720 440" width="100%" role="img" aria-label="Top: a sixty-step one-dimensional random walk polyline against step number, with dashed guides at plus and minus the square root of N. Bottom: bar chart of the exact binomial distribution for sixteen fair coin tosses."><rect x="20" y="16" width="680" height="200" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.35"/><text x="36" y="38" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-weight="700">a 1-D random walk — 60 honest ±1 steps</text><line x1="476" y1="34" x2="508" y2="34" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><text x="514" y="38" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor">±√N ≈ ±7.75</text><line x1="169" y1="48" x2="169" y2="198" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="268" y1="48" x2="268" y2="198" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="367" y1="48" x2="367" y2="198" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="466" y1="48" x2="466" y2="198" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="565" y1="48" x2="565" y2="198" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="70" y1="56.6" x2="664" y2="56.6" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="70" y1="189.4" x2="664" y2="189.4" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="70" y1="123" x2="678" y2="123" stroke="currentColor" stroke-width="1.5"/><polygon points="688,123 676,118.5 676,127.5" fill="currentColor"/><line x1="70" y1="198" x2="70" y2="52" stroke="currentColor" stroke-width="1.5"/><polygon points="70,44 65.5,56 74.5,56" fill="currentColor"/><line x1="70" y1="118.5" x2="70" y2="127.5" stroke="currentColor" stroke-width="1.5"/><line x1="169" y1="118.5" x2="169" y2="127.5" stroke="currentColor" stroke-width="1.5"/><line x1="268" y1="118.5" x2="268" y2="127.5" stroke="currentColor" stroke-width="1.5"/><line x1="367" y1="118.5" x2="367" y2="127.5" stroke="currentColor" stroke-width="1.5"/><line x1="466" y1="118.5" x2="466" y2="127.5" stroke="currentColor" stroke-width="1.5"/><line x1="565" y1="118.5" x2="565" y2="127.5" stroke="currentColor" stroke-width="1.5"/><line x1="664" y1="118.5" x2="664" y2="127.5" stroke="currentColor" stroke-width="1.5"/><text x="70" y="212" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">0</text><text x="169" y="212" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">10</text><text x="268" y="212" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">20</text><text x="367" y="212" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">30</text><text x="466" y="212" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">40</text><text x="565" y="212" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">50</text><text x="664" y="212" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">60</text><text x="690" y="116" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">n</text><text x="80" y="58" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-style="italic">D</text><circle cx="70" cy="123" r="2.5" fill="currentColor"/><polyline points="70,123 79.9,131.6 89.8,140.1 99.7,131.6 109.6,140.1 119.5,131.6 129.4,123 139.3,131.6 149.2,123 159.1,131.6 169,123 178.9,131.6 188.8,140.1 198.7,148.7 208.6,140.1 218.5,131.6 228.4,123 238.3,114.4 248.2,123 258.1,131.6 268,123 277.9,114.4 287.8,123 297.7,131.6 307.6,123 317.5,114.4 327.4,105.9 337.3,97.3 347.2,105.9 357.1,97.3 367,105.9 376.9,114.4 386.8,105.9 396.7,97.3 406.6,105.9 416.5,97.3 426.4,88.7 436.3,80.1 446.2,88.7 456.1,97.3 466,105.9 475.9,97.3 485.8,105.9 495.7,114.4 505.6,123 515.5,131.6 525.4,140.1 535.3,148.7 545.2,157.3 555.1,148.7 565,140.1 574.9,131.6 584.8,140.1 594.7,131.6 604.6,123 614.5,114.4 624.4,105.9 634.3,114.4 644.2,105.9 654.1,114.4 664,105.9" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="664" cy="105.9" r="3.5" fill="#10b981"/><text x="660" y="96" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end" font-style="italic">D₆₀ = +2</text><rect x="20" y="236" width="680" height="188" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.35"/><text x="36" y="258" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-weight="700">the binomial distribution — n = 16 fair tosses</text><line x1="80" y1="369" x2="686" y2="369" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="80" y1="336" x2="686" y2="336" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="80" y1="303" x2="686" y2="303" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="80" y1="270" x2="686" y2="270" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5"/><line x1="80" y1="402" x2="690" y2="402" stroke="currentColor" stroke-width="1.5"/><polygon points="698,402 686,397.5 686,406.5" fill="currentColor"/><line x1="80" y1="402" x2="80" y2="262" stroke="currentColor" stroke-width="1.5"/><polygon points="80,252 75.5,264 84.5,264" fill="currentColor"/><text x="74" y="406" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">0</text><text x="74" y="373" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">0.05</text><text x="74" y="340" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">0.10</text><text x="74" y="307" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">0.15</text><text x="74" y="274" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="end">0.20</text><text x="88" y="292" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" font-style="italic">P(k)</text><rect x="85.82" y="401.99" width="24" height="0.01" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="121.47" y="401.84" width="24" height="0.16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="157.12" y="400.79" width="24" height="1.21" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="192.76" y="396.36" width="24" height="5.64" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="228.41" y="383.67" width="24" height="18.33" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="264.06" y="358.01" width="24" height="43.99" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="299.71" y="321.35" width="24" height="80.65" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="335.35" y="286.79" width="24" height="115.21" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="371" y="272.39" width="24" height="129.61" fill="#10b981" fill-opacity="0.25" stroke="#10b981" stroke-width="1.5"/><rect x="406.65" y="286.79" width="24" height="115.21" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="442.29" y="321.35" width="24" height="80.65" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="477.94" y="358.01" width="24" height="43.99" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="513.59" y="383.67" width="24" height="18.33" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="549.24" y="396.36" width="24" height="5.64" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="584.88" y="400.79" width="24" height="1.21" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="620.53" y="401.84" width="24" height="0.16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><rect x="656.18" y="401.99" width="24" height="0.01" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="97.8" y="418" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">0</text><text x="169.1" y="418" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">2</text><text x="240.4" y="418" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">4</text><text x="311.7" y="418" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">6</text><text x="383" y="418" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">8</text><text x="454.3" y="418" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">10</text><text x="525.6" y="418" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">12</text><text x="596.9" y="418" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">14</text><text x="668.2" y="418" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">16</text><text x="694" y="418" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle" font-style="italic">k</text><text x="383" y="264" font-family="ui-sans-serif, system-ui" font-size="12.5" fill="currentColor" text-anchor="middle">P(8) ≈ 0.196</text></svg>',
        afterConcept: 6,
      },
    ],
    examples: [
      {
        title: 'Why the mean square distance is N',
        problem: 'Prove that a walker taking $N$ unit random steps strays, on the average, to a distance whose square is exactly $N$.',
        steps: [
          { label: 'Step 1: The first step', text: 'After one step the walker is at $D_1 = +1$ or $D_1 = -1$; either way $D_1^2 = 1$, so certainly $\\langle D_1^2\\rangle = 1$. All distances are measured in units of one step.' },
          { label: 'Step 2: Relate step N to step N−1', text: 'If after $N-1$ steps the walker stands at $D_{N-1}$, the next step puts him at $D_N = D_{N-1}+1$ or $D_N = D_{N-1}-1$. The two possible squared positions are $D_{N-1}^2 + 2D_{N-1} + 1$ and $D_{N-1}^2 - 2D_{N-1} + 1$.' },
          { label: 'Step 3: Average over the two cases', text: 'The two cases occur half the time each, so the expected value of $D_N^2$ is their average: $\\langle D_N^2\\rangle = \\langle D_{N-1}^2\\rangle + 1$ — the middle terms cancel because the last step is as often forward as backward.' },
          { label: 'Step 4: Induct', text: 'Starting from $\\langle D_1^2\\rangle = 1$, each added step contributes exactly one unit to the mean square distance, whatever went before: $\\langle D_N^2\\rangle = N$.' },
        ],
        result: 'Every step adds exactly 1 to $\\langle D^2\\rangle$, so after $N$ steps the walker is typically $\\sqrt{N}$ steps from the origin — 30 steps, about 5.5 steps away.',
      },
      {
        title: 'Thirty steps of a drunken sailor',
        problem: 'A sailor takes thirty random unit steps away from a lamppost. How far does he typically end up, and how should that compare with the coin-tossing histogram of Section 2.1?',
        steps: [
          { label: 'Step 1: Typical distance', text: 'The rms distance is $D_{\\text{rms}} = \\sqrt{30} \\approx 5.5$ steps from the lamppost — randomness gets him barely a sixth of the thirty-step distance a determined walker would cover.' },
          { label: 'Step 2: Translate into coin language', text: 'With forward steps identified with heads, $D = 2N_H - N$; a displacement $D$ corresponds to a head count $N_H = N/2 + D/2$. The rms deviation of the head count from 15 is therefore $5.5/2 \\approx 2.8$.' },
          { label: 'Step 3: Compare with the data', text: 'The hundred-game histogram of Section 2.1 spread over scores of roughly 12 to 18 — a width of about 3 heads from the center of 15, in agreement with the 2.8 predicted.' },
          { label: 'Step 4: What it means', text: 'The drunkard’s walk and the coin tosser’s score are the same mathematics: the scatter of counted outcomes is the accumulated trace of independent randomness.' },
        ],
        result: 'Thirty random steps end typically $5.5$ steps away; the matching head-count deviation is about $2.8$ — exactly the width the coin data showed.',
      },
      {
        title: 'The exponential atmosphere',
        problem: 'Why does the air get thinner as you climb, and by what law does it fall off?',
        steps: [
          { label: 'Step 1: Insist on equilibrium', text: 'Consider a column of gas at thermal equilibrium in gravity. If the temperature differed from height to height, a rod connecting balls at the bottom to balls at the top would carry the jiggling upward until the temperatures equalized — so at equilibrium $T$ is uniform.' },
          { label: 'Step 2: Pressure holds the weight', text: 'With $n$ molecules per unit volume, $P = nkT$. The pressure at height $h$ must exceed the pressure at $h + dh$ by the weight of the intervening gas: $dP = -mgn\\,dh$, where $mg$ is the weight of one molecule.' },
          { label: 'Step 3: Eliminate the pressure', text: 'With $P = nkT$ and $T$ constant, the balance becomes $dn/dh = -(mg/kT)\\,n$ — the derivative of the density is proportional to the density itself.' },
          { label: 'Step 4: Integrate', text: 'A function whose derivative is proportional to itself is an exponential: $n = n_0e^{-mgh/kT}$, with $n_0$ the density at $h = 0$ (wherever we choose that to be).' },
          { label: 'Step 5: Read the physics', text: 'Heavier species fall off faster — in an atmosphere of nitrogen and oxygen at uniform temperature, the oxygen proportion would dwindle with altitude while hydrogen would persist to the greatest heights, the lowest mass outlasting the other exponentials.' },
        ],
        result: '$n = n_0e^{-mgh/kT}$: the atmosphere thins exponentially, each species with its own scale set by the molecular mass — and by the Boltzmann law the same form governs any potential energy, electrical included.',
      },
    ],
    keyTakeaways: [
      'A random walk of $N$ unit steps ends typically $\\sqrt{N}$ steps away: $\\langle D_N^2\\rangle = N$ by a one-line induction that adds exactly 1 per step.',
      'Random walks, coin tosses, Brownian motion and the combination of measurement errors are one mathematical subject, linked by $D = 2N_H - N$.',
      'The binomial distribution $P(k,n) = \\binom{n}{k}p^{k}q^{n-k}$ counts the paths to $k$ wins in $n$ trials; Pascal’s triangle tabulates them.',
      'For continuous outcomes, probability attaches to intervals: $P(x,\\Delta x) = p(x)\\Delta x$, areas carry the probability, and the total area is 1.',
      'For large $N$ the walk density is universally Gaussian, $p(x) = e^{-x^2/2\\sigma^2}/(\\sigma\\sqrt{2\\pi})$ with $\\sigma = \\sqrt{N}$ — regardless of the step-length details.',
      'The exponential atmosphere $n = n_0e^{-mgh/kT}$ — and its generalization, Boltzmann’s $e^{-\\text{P.E.}/kT}$ — is equilibrium statistics in a potential.',
      'Diffusion is a three-dimensional random walk: an opened bottle spreads through still air only as fast as $\\sqrt{N}$ accumulates steps.',
    ],
    quiz: [
      {
        q: 'A walker takes $N$ random steps of unit length. The typical (rms) distance from the starting point after $N$ steps is:',
        options: [
          '$N$ steps',
          '$\\sqrt{N}$ steps',
          '$N/2$ steps',
          'zero — he returns to the start',
        ],
        answer: 1,
        explanation: 'The mean square distance is exactly $N$ (each step adds 1 to $\\langle D^2\\rangle$), so $D_{\\text{rms}} = \\sqrt{N}$: thirty steps leave the walker about 5.5 steps from the origin on average.',
      },
      {
        q: 'A fair coin is tossed three times. What is the probability of getting exactly two heads?',
        options: [
          `$1/8$`,
          `$1/4$`,
          `$3/8$`,
          `$1/2$`,
        ],
        answer: 2,
        explanation: 'Of the eight equally likely sequences, three contain exactly two heads (HHT, HTH, THH), so $P(2,3) = \\binom{3}{2}/2^{3} = 3/8$ — the middle entry of Pascal’s row $1, 3, 3, 1$ over 8.',
      },
      {
        q: 'What is special about the Gaussian limit of the random walk?',
        options: [
          'It holds only when every step has exactly unit length',
          'It holds only for walks in one dimension',
          'For large $N$ the same gaussian curve emerges for all reasonable step-length distributions — with $\\sigma = \\sqrt{N}$',
          'It applies only to coin tossing, not to molecular motion',
        ],
        answer: 2,
        explanation: 'The universality is the point: for large $N$ the density $p(x) = e^{-x^2/2\\sigma^2}/(\\sigma\\sqrt{2\\pi})$ is the same for all reasonable distributions of individual step lengths, depending only on $N$ (times $S_{\\text{rms}}$).',
      },
      {
        q: 'In the exponential atmosphere $n = n_0e^{-mgh/kT}$, what happens to the heavier molecules as the altitude increases?',
        options: [
          'They decrease with altitude faster than the light ones',
          'They decrease more slowly, dominating at altitude',
          'They are unaffected by gravity because of buoyancy',
          'They convert into lighter molecules',
        ],
        answer: 0,
        explanation: 'The exponent contains the molecular mass: heavier species fall off faster with height. In a uniform-temperature nitrogen–oxygen atmosphere the oxygen would dwindle first, and at the greatest heights the lightest, hydrogen, would dominate — the lowest mass outlasting the other exponentials.',
      },
      {
        q: 'Maxwell’s velocity distribution for the molecules of a gas at equilibrium has the form:',
        options: [
          '$p(v) = Cv^{2}e^{-av^{2}}$ — any speed possible, speeds clustering near the most probable value',
          'a gaussian in $v$, the same as the walk density',
          'a delta function — all molecules move at exactly the same speed',
          'uniform over all speeds from zero to infinity',
        ],
        answer: 0,
        explanation: 'Maxwell found $p(v) = Cv^{2}e^{-av^{2}}$ from common sense and the ideas of probability, with $a$ related to the temperature. Velocities may have any value, but are most likely near $v_p$; the expected number between $v_1$ and $v_2$ is the area under $N\\,p(v)$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 2.3
  {
    sectionId: 'phys-ch2-s3',
    readingTime: 8,
    intro: 'Probability seemed a convenience when the subject was the $10^{22}$ molecules of a gas — nobody could write down each one’s position anyway. Quantum mechanics changed that: the uncertainty principle is not about clumsy apparatus but about nature itself. This section presents Feynman’s early statement of the principle, his demolition of the “hidden wheels” interpretation, and the picture of the hydrogen atom that replaces orbits with a cloud of probability.',
    objectives: [
      'State the uncertainty principle in both forms: $[\\Delta x][\\Delta v] \\ge \\hbar/2m$ and $\\Delta x\\,\\Delta p \\ge \\hbar/2$',
      'Explain why quantum mechanics makes probability fundamental rather than a convenience',
      'Reconstruct Feynman’s argument that no “internal wheels” can restore determinism',
      'Describe the hydrogen atom through its probability density $p(r) = Ae^{-2r/a}$ and the electron-cloud picture',
      'Connect the energy–time uncertainty $\\Delta t \\ge \\hbar/2\\Delta E$ to knowing when versus knowing what',
    ],
    concepts: [
      {
        term: 'From convenience to necessity',
        kind: 'insight',
        statement: 'When probability was first applied to the $10^{22}$ or so molecules of a gas sample, it was considered a convenience — a way of dealing with hopeless complexity. **Quantum mechanics makes probability essential**: there is always some uncertainty in the specification of positions and velocities, and at best we can say there is a certain probability that a particle is near a coordinate $x$.',
        detail: 'It is fundamentally impossible to predict exactly what will happen in any circumstance. We can arrange an atom ready to emit light and detect the photon when it comes, but we cannot predict when it will emit — or, with several atoms, which one will. “This is a horrible thing”; philosophers had said that identical conditions producing identical results was a fundamental requisite of science, and it is simply not true.',
      },
      {
        term: 'Probability densities for position and velocity',
        kind: 'notation',
        statement: 'Position is specified by a density $p_1(x)$ — $p_1(x)\\Delta x$ is the probability of finding the particle between $x$ and $x + \\Delta x$ — and velocity by $p_2(v)$. If the particle is well localized, $p_1(x)$ is a narrow hump centered on $x_0$; a narrow $p_2(v)$ similarly indicates a well-defined velocity.',
        detail: 'These are not independent ignorance-lists: it is a fundamental result of quantum mechanics that $p_1(x)$ and $p_2(v)$ **cannot be chosen independently and cannot both be made arbitrarily narrow**. Nature demands a minimum joint fuzziness.',
      },
      {
        term: 'The uncertainty principle',
        kind: 'law',
        statement: 'If $[\\Delta x]$ and $[\\Delta v]$ are the typical widths of the two densities, $$[\\Delta x]\\cdot[\\Delta v] \\ge \\frac{\\hbar}{2m},$$ or, in terms of momentum, $\\Delta x\\,\\Delta p \\ge \\hbar/2$, where $\\hbar$ is the reduced Planck constant and $m$ the particle’s mass.',
        detail: 'The right-hand side is a constant of nature. If we try to “pin down” a particle by forcing it to be at a particular place, it ends up having a high speed; if we try to force it to go very slowly, or at a precise velocity, it “spreads out” so that we do not know very well where it is. “Particles behave in a funny way!”',
      },
      {
        term: 'The measurement-disturbance logic',
        kind: 'insight',
        statement: 'The principle describes an **inherent fuzziness in any attempt to describe nature**: to localize is to disturb. Forcing a particle to a particular place necessarily leaves it with a large and uncertain momentum; granting it a precise velocity necessarily delocalizes it — the uncertainty is produced by the very act of definition, not by clumsy tools.',
        detail: 'The same logic sized the atom in Chapter 1: electrons confined to the nucleus would have well-known positions and therefore huge uncertain momenta — kinetic energies that would break them away. They compromise instead: they leave room for the uncertainty and jiggle with a minimum motion, which is also why atoms in a crystal keep moving at absolute zero, and why helium never freezes at ordinary pressure.',
      },
      {
        term: 'No internal wheels',
        kind: 'insight',
        statement: 'It is tempting to believe the randomness is mere ignorance — that with better knowledge, speed and position could be known simultaneously. **There are no internal wheels.** Einstein “used to shake his head and say, ‘But, surely God does not throw dice in determining how electrons should go!’” — and he probably never reconciled himself to the answer.',
        detail: 'A few physicists still worked, with intuitive conviction, toward a description that would remove the uncertainty; no one has succeeded. The philosophers’ requirement — same conditions, same results — fails in fact: a pendulum on a universal joint precesses in Stockholm but not in Quito, and even sealed in a box with the blinds down the experiments differ. Science takes what it sees and formulates the rest of its ideas in terms of actual experience.',
      },
      {
        term: 'The hydrogen atom as a probability cloud',
        kind: 'definition',
        statement: 'In hydrogen, the uncertainty in the electron’s position is as large as the atom itself, so one cannot properly speak of the electron moving in an “orbit” around the proton. The most that can be said is that there is a chance $p(r)\\Delta V$ of observing the electron in a volume element $\\Delta V$ at distance $r$, with $$p(r) = Ae^{-2r/a},$$ where $a \\approx 10^{-10}$ meter is the “typical radius” beyond which the density falls off rapidly.',
        detail: 'The best picture of a hydrogen atom is a nucleus surrounded by an “electron cloud” — really a probability cloud — whose density (the whiteness in Feynman’s figure) represents the probability density. There is a small probability of finding the electron at distances much greater than $a$, so $a$ is a typical radius, not a wall.',
      },
      {
        term: 'The energy–time uncertainty',
        kind: 'law',
        statement: 'The relativity of space and time implies that time measurements too have a minimum error: $$\\Delta t \\ge \\frac{\\hbar}{2\\,\\Delta E},$$ where $\\Delta E$ is the error in our knowledge of the energy of the process whose period is being measured.',
        detail: 'If we wish to know more precisely when something happened, we must know less about what happened, because our knowledge of the energy involved will be less. Like the position–momentum uncertainty, this is related to the wave nature of particles — the same duality that made high-frequency light behave like particles in Chapter 1.',
      },
    ],
    examples: [
      {
        title: 'Why the electron cannot sit on the nucleus',
        problem: 'The electrical attraction between electron and proton is enormous — why is the hydrogen atom about $10^{-10}$ meter across instead of collapsed to nuclear size?',
        steps: [
          { label: 'Step 1: Suppose it collapsed', text: 'If the electron were sitting in the nucleus, we would know its position with the precision of the nuclear size — a diameter of about $10^{-13}$ centimeter, a hundred thousand times smaller than the atom.' },
          { label: 'Step 2: The principle objects', text: 'By $[\\Delta x][\\Delta v] \\ge \\hbar/2m$, confining the electron to that tiny region demands a very large — and very uncertain — velocity: the smaller the $\\Delta x$, the larger the $\\Delta v$.' },
          { label: 'Step 3: Energy follows', text: 'A large uncertain velocity means a very large kinetic energy. With this energy the electron would break away from the nucleus — the attraction cannot hold it there.' },
          { label: 'Step 4: The compromise', text: 'The electron leaves itself a little room for the uncertainty and jiggles with a certain amount of minimum motion, in accordance with the rule. The result is an atom whose diameter is about $10^{-8}$ centimeter, with nearly all the weight in the central speck.' },
        ],
        result: 'The atom’s size is set by the uncertainty principle: confinement to the nucleus would cost a kinetic energy that no attraction could hold — the compromise is an angstrom-sized probability cloud.',
      },
      {
        title: 'Reading the hydrogen cloud',
        problem: 'How literally should we take the picture of an electron “orbiting” the proton in hydrogen, and what is the honest alternative?',
        steps: [
          { label: 'Step 1: What the theory actually gives', text: 'For an undisturbed hydrogen atom, quantum mechanics gives the probability density $p(r) = Ae^{-2r/a}$: the chance of observing the electron in a volume element $\\Delta V$ at distance $r$ from the proton is $p(r)\\Delta V$.' },
          { label: 'Step 2: The scale', text: 'The number $a \\approx 10^{-10}$ meter is the typical radius — the function decreases rapidly beyond it. There remains a small probability of finding the electron at much greater distances, so $a$ is not a boundary but a scale of falloff.' },
          { label: 'Step 3: The honest picture', text: 'The uncertainty in the electron’s position is as large as the atom itself. The word “orbit” is therefore not just inaccurate — it has no referent. The best image is a nucleus wrapped in a cloud whose density (whiteness) is the probability density of observing the electron.' },
          { label: 'Step 4: What we may know', text: 'The electron is there somewhere; nature permits us to know only the chance of finding it at any particular place. The most precise description of nature must be in terms of probabilities.' },
        ],
        result: 'Hydrogen is a proton in an electron-probability cloud of radius about $10^{-10}$ m — not a tiny solar system but a fuzz of likelihood.',
      },
    ],
    keyTakeaways: [
      'Quantum mechanics promotes probability from a convenience for complexity to the fundamental description of nature: exact prediction is impossible even in principle.',
      '$[\\Delta x][\\Delta v] \\ge \\hbar/2m$ — equivalently $\\Delta x\\,\\Delta p \\ge \\hbar/2$: position and velocity cannot both be sharp.',
      'The principle is not ignorance in disguise: there are no internal wheels, and no experiment restores determinism — Einstein’s objection notwithstanding.',
      'Localization is disturbance: pinning a particle down leaves it fast; slowing it down leaves it spread out.',
      'Hydrogen’s electron has no orbit, only the density $p(r) = Ae^{-2r/a}$ — an electron cloud of typical radius about $10^{-10}$ m.',
      'Time and energy trade off too: $\\Delta t \\ge \\hbar/2\\Delta E$ — knowing when costs knowledge of what happened.',
    ],
    quiz: [
      {
        q: 'Writing $[\\Delta x]$ and $[\\Delta v]$ for the typical widths of the position and velocity probability densities, the Heisenberg uncertainty principle states:',
        options: [
          `$[\\Delta x] + [\\Delta v] \\ge \\hbar/2m$`,
          `$[\\Delta x]\\cdot[\\Delta v] \\ge \\hbar/2m$`,
          `$[\\Delta x]\\cdot[\\Delta v] \\le \\hbar/2m$`,
          '$[\\Delta x] = [\\Delta v]$ always',
        ],
        answer: 1,
        explanation: 'The product of the widths must be at least $\\hbar/2m$ — in momentum form, $\\Delta x\\,\\Delta p \\ge \\hbar/2$. Narrow one density and the other is forced wide.',
      },
      {
        q: 'If you try to force a particle to be at a particular place, what happens?',
        options: [
          'Its velocity becomes precisely known as well',
          'It ends up with a high speed — the confinement leaves a large, uncertain momentum',
          'It stops moving entirely',
          'It turns into a photon',
        ],
        answer: 1,
        explanation: 'The constant on the right of $[\\Delta x][\\Delta v] \\ge \\hbar/2m$ forces the trade: shrinking $\\Delta x$ grows $\\Delta v$ — and with it a kinetic energy that can break the particle away from whatever held it.',
      },
      {
        q: 'What did Einstein dislike about quantum mechanics’ probabilistic description?',
        options: [
          'That it used too much mathematics',
          'That it contradicted Newton’s laws for planets',
          'That it seemed nature could not be described without probability — “surely God does not throw dice”',
          'That it could not explain the hydrogen atom',
        ],
        answer: 2,
        explanation: 'Einstein worried that a deeper, deterministic description ought to exist beneath the probabilities, and probably never reconciled himself to the fact that probability is the best description nature permits. Some physicists kept searching for such a description; no one has succeeded.',
      },
      {
        q: 'In the hydrogen atom, the electron is best described as:',
        options: [
          'a point particle moving in a definite orbit of radius $a$',
          'a probability cloud with density $p(r) = Ae^{-2r/a}$, typically of radius about $10^{-10}$ m',
          'a small hard sphere resting on the nucleus',
          'a standing wave exactly one wavelength around',
        ],
        answer: 1,
        explanation: 'The uncertainty in the electron’s position is as large as the atom itself — “orbit” has no meaning. The most we can say is the chance of finding the electron in a volume element: $p(r)\\Delta V$, with the density $Ae^{-2r/a}$ falling off rapidly beyond the typical radius $a \\approx 10^{-10}$ m.',
      },
      {
        q: 'The energy–time uncertainty relation $\\Delta t \\ge \\hbar/2\\Delta E$ says that:',
        options: [
          'energy conservation fails over short times',
          'energy and time can both be known exactly with good apparatus',
          'to know more precisely when something happened, we must know less about the energy involved — about what happened',
          'time flows at different rates for different observers',
        ],
        answer: 2,
        explanation: 'The time uncertainty is tied to the wave nature of matter: sharpening the “when” blurs the “what,” because the knowledge of the energy of the process becomes correspondingly less precise.',
      },
    ],
  },
]

// ============================================================================
// Chapter 2 formula sheet — the most useful relations and facts.
// `formula` is the Unicode fallback (search/export); `latex` is KaTeX.
// ============================================================================

export const physCh2Formulas: FormulaEntry[] = [
  {
    chapterId: 'phys-ch2',
    section: '2.1',
    name: 'Definition of probability',
    formula: 'P(A) = Nₐ/N',
    latex: 'P(A) = \\frac{N_A}{N}',
    note: 'most likely fraction of repeated, equally prepared observations',
  },
  {
    chapterId: 'phys-ch2',
    section: '2.1',
    name: 'Equal-likelihood rule',
    formula: 'P(A) = 1/m',
    latex: 'P(A) = \\frac{1}{m}',
    note: 'm equivalent outcomes: dice double-one 1/36, ten of hearts 1/52',
  },
  {
    chapterId: 'phys-ch2',
    section: '2.1',
    name: 'Experimental probability with its scatter',
    formula: 'P(H) = Nₕ/N ± 1/(2√N)',
    latex: 'P(H) = \\frac{N_H}{N} \\pm \\frac{1}{2\\sqrt{N}}',
    note: 'the square-root-of-N law: counts deviate by √N, fractions by 1/√N',
  },
  {
    chapterId: 'phys-ch2',
    section: '2.2',
    name: 'Binomial (Bernoulli) probability',
    formula: 'P(k,n) = C(n,k)·pᵏqⁿ⁻ᵏ',
    latex: 'P(k,n) = \\binom{n}{k}p^{k}q^{n-k}',
    note: 'k wins in n trials; q = 1 − p; honest coin: p = q = 1/2',
  },
  {
    chapterId: 'phys-ch2',
    section: '2.2',
    name: 'Random-walk distance',
    formula: 'Dᵣₘₛ = √⟨D²⟩ = √N',
    latex: 'D_{\\text{rms}} = \\sqrt{\\langle D^{2}\\rangle} = \\sqrt{N}',
    note: 'each unit step adds exactly 1 to the mean square distance',
  },
  {
    chapterId: 'phys-ch2',
    section: '2.2',
    name: 'Gaussian (normal) density',
    formula: 'p(x) = exp(−x²/2σ²)/(σ√2π)',
    latex: 'p(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-x^{2}/2\\sigma^{2}}',
    note: 'universal large-N limit; σ = √N for unit-rms steps',
  },
  {
    chapterId: 'phys-ch2',
    section: '2.2',
    name: 'The exponential atmosphere',
    formula: 'n = n₀·exp(−mgh/kT)',
    latex: 'n = n_0\\,e^{-mgh/kT}',
    note: 'Boltzmann law: n ∝ exp(−P.E./kT) for any potential energy',
  },
  {
    chapterId: 'phys-ch2',
    section: '2.3',
    name: 'Heisenberg uncertainty principle',
    formula: 'Δx·Δp ≥ ℏ/2',
    latex: '\\Delta x\\,\\Delta p \\ge \\frac{\\hbar}{2}',
    note: 'equivalently [Δx]·[Δv] ≥ ℏ/2m; also Δt ≥ ℏ/2ΔE',
  },
]
