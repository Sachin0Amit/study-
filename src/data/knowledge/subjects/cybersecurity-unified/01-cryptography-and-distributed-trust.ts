/**
 * Knowledge Universe — Cybersecurity — Chapter 01: Cryptography & Distributed Trust
 * 2 lessons · ~2,052 words
 * fields: Cybersecurity, Distributed Systems
 * legacy sources: computing-ai.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Cybersecurity, Distributed Systems]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 cs-public-key-cryptography-rsa — Public-Key Cryptography and RSA
 *   01.2 cs-blockchain-consensus — Blockchains and Consensus Without a Boss
 */
import type { KnowledgeTopic } from '../../types'

export const cybersecurityUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'cs-public-key-cryptography-rsa',
    title: 'Public-Key Cryptography and RSA',
    domain: 'Computing & AI',
    field: 'Cybersecurity',
    branch: 'Cryptography',
    tier: 'intermediate',
    concepts: [
      'Asymmetric key pairs',
      'Factoring hardness',
      'Modular arithmetic and Euler theorem',
      'Key generation',
      'Encryption, decryption and signatures',
      'Hybrid encryption and the quantum horizon',
    ],
    words: 896,
    readMins: 4,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: "Symmetric ciphers need a shared secret, which fails between strangers. Public-key cryptography breaks the deadlock with a key pair: a public key anyone may use to encrypt or verify, and a private key only the holder uses to decrypt or sign. RSA, published by Rivest, Shamir and Adleman in 1978, builds that pair from two large primes whose product is easy to compute but infeasible to factor, and still underpins web key exchange, signing and certificates.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every browser padlock, signed update and SSH login rests on this asymmetry. Knowing how the mathematics works — and where it is brittle — separates using cryptography from invoking it.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A key pair is mathematically linked: what one key locks only the other unlocks. Publishing the public key lets anyone send secrets or check signatures — no shared secret needed, only an authentic way to find the right public key.',
      },
      {
        kind: 'para',
        text: 'Multiplying two thousand-bit primes takes microseconds; recovering them from the product is beyond feasible classical computation. RSA security is exactly this asymmetry: an assumption, not a theorem.',
      },
      {
        kind: 'para',
        text: 'RSA lives in arithmetic modulo n, where numbers wrap like a clock. Euler\u2019s theorem says that for any a coprime to n, a^φ(n) ≡ 1 (mod n) — and that identity is what makes encryption and decryption mutual inverses.',
      },
      {
        kind: 'para',
        text: 'Key generation: choose random primes p and q, publish n = pq, compute φ(n) = (p−1)(q−1), pick a public exponent e (65537 by convention) and solve for the private exponent d with e·d ≡ 1 (mod φ(n)). The pair (n, e) is public; d stays secret.',
      },
      {
        kind: 'para',
        text: 'Encryption raises the padded message to e modulo n; decryption raises the result to d. Signatures run the machinery over a hash: the signer applies d, anyone verifies with e. Randomised padding such as OAEP is mandatory — textbook RSA is malleable.',
      },
      {
        kind: 'para',
        text: 'RSA is thousands of times slower than AES, so protocols use it to transport a session key and encrypt bulk data symmetrically. Shor\u2019s algorithm factors integers in polynomial time on a quantum computer, which is why lattice-based replacements such as ML-KEM are standardised.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Modulus and totient',
        latex: 'n = p \\cdot q, \\quad \\varphi(n) = (p-1)(q-1)',
        meaning: 'The public modulus is two secret primes multiplied; Euler\u2019s totient of it is the hidden quantity the private key derives from.',
      },
      {
        kind: 'formula',
        name: 'Encryption and decryption',
        latex: 'c = m^e \\bmod n, \\quad m = c^d \\bmod n',
        meaning: "Raise to e to encrypt; raise to d to decrypt — Euler's theorem makes them inverses.",
      },
      {
        kind: 'formula',
        name: 'Key relation',
        latex: 'e \\cdot d \\equiv 1 \\pmod{\\varphi(n)}',
        meaning: 'The exponents are multiplicative inverses modulo the totient; d exists exactly when e shares no factor with φ(n).',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: the private exponent for p = 61, q = 53, e = 17, and the ciphertext of m = 65.',
          'Recall the governing relations: e·d ≡ 1 (mod φ(n)) with φ(n) = (p−1)(q−1), and c = m^e mod n.',
          'Apply them: n = 3233, φ(n) = 60 × 52 = 3120; the extended Euclidean algorithm gives d = 2753, since 17 × 2753 = 15 × 3120 + 1; then c = 65^17 mod 3233 = 2790.',
          'State the result: the private key is (3233, 2753) and 2790^2753 mod 3233 recovers the message 65.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'TLS handshakes that authenticate servers and establish session keys for HTTPS',
          'Code signing and update systems that refuse unauthorised binaries',
          'SSH authentication, where a signature proves possession of a private key',
          'Certificate authorities chaining website identities to root keys in your browser',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "Encrypting with the private key is not 'more secure' — that operation is signing, reversed by the public key. Textbook RSA without padding is malleable, and rolling your own padding is how systems break. Keys below 2048 bits are deprecated, and quantum-era secrets must already plan for migration.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Public key', def: 'The publishable half of the pair, used to encrypt and verify.' },
          { term: 'Private key', def: 'The secret half, used to decrypt and sign.' },
          { term: 'Modulus n', def: 'The published product of two secret primes.' },
          { term: 'Euler totient φ(n)', def: 'The count of integers below n sharing no factor with n.' },
          { term: 'OAEP', def: 'Randomised padding that makes RSA encryption semantically secure.' },
          { term: 'Hybrid encryption', def: 'Public-key transport of a symmetric session key.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'With p = 3 and q = 11, the value of φ(n) is:',
            options: ['14', '20', '30', '33'],
            answer: 1,
            explain: 'φ(33) = (3−1)(11−1) = 20.',
          },
          {
            q: 'In RSA, decryption recovers the message because:',
            options: [
              'the private key is longer than the public key',
              "Euler's theorem makes exponentiation by d invert exponentiation by e modulo n",
              'modulus arithmetic always returns the input',
              'both keys are stored on the server',
            ],
            answer: 1,
            explain: 'Since e·d ≡ 1 (mod φ(n)), raising to d undoes raising to e.',
          },
          {
            q: 'Real systems use RSA only to transport an AES session key because:',
            options: [
              'AES keys cannot be transmitted any other way',
              'RSA is thousands of times slower than symmetric ciphers',
              'RSA ciphertexts are always shorter',
              'AES needs two prime numbers',
            ],
            answer: 1,
            explain: 'Public-key operations are computationally expensive, so hybrid designs reserve them for short values.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: "Comfort with modular arithmetic and Euclid's algorithm is the entry ticket. Follow with elliptic-curve cryptography, the TLS protocol end to end, and the lattice schemes replacing them.",
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Public key encrypts and verifies; private key decrypts and signs.',
          'n = pq is public while φ(n) = (p−1)(q−1) stays secret and defines d.',
          'c = m^e mod n and m = c^d mod n are inverse operations by Euler\u2019s theorem.',
          'Always pad with OAEP or sign hashes — textbook RSA is malleable.',
          "Shor's algorithm drives the migration to post-quantum schemes.",
        ],
      },
    ],
  },
  {
    id: 'cs-blockchain-consensus',
    title: 'Blockchains and Consensus Without a Boss',
    domain: 'Computing & AI',
    field: 'Distributed Systems',
    branch: 'Cryptographic Systems',
    tier: 'intermediate',
    concepts: [
      'The double-spend problem',
      'Hash-chained blocks',
      'Proof of work',
      'The longest-chain rule',
      'Confirmations and the 51% threshold',
      'Proof of stake and slashing',
    ],
    words: 1156,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: "Hand a stranger cash and the deal is done — the bill is in only one pair of hands. Digital money breaks that logic: a file can be copied endlessly, so spending it twice is trivial unless a central ledger-keeper watches everyone. The blockchain's audacious claim, staked by Bitcoin in 2009, is that thousands of mutually distrustful computers can agree on a single transaction history with no boss at all — by making rewriting the past cost more than any prize it could win.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Beyond currencies, the same machinery timestamps documents, tracks supply chains and runs self-executing contracts. Whatever becomes of any particular coin, consensus without central authority is a genuine computer-science landmark — and knowing where its guarantees end is what separates users from victims.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "The core problem is not counterfeiting but ordering: if Alice sends the same coin to Bob and Carol, whoever hears the transaction second must reject it. With no trusted referee, both payments look equally valid. Any solution needs all honest participants to agree on one canonical sequence of events — a shared history in which Alice's coin went to exactly one recipient.",
      },
      {
        kind: 'para',
        text: "Transactions are bundled into blocks, and each block's header contains the cryptographic hash of its predecessor. Hashes are fingerprints: change one character anywhere in a block and its hash changes completely, which breaks the next header's reference, and the next, and the next. Tampering with history means redoing every block after the edit, in public, faster than everyone else is extending the chain.",
      },
      {
        kind: 'para',
        text: 'Consensus needs a scarce resource that anyone can verify but no one can fake. Proof of work uses computation: miners hash the block header billions of times, hunting for a result below a difficulty target, and the first to find one broadcasts the block. Mining a block costs real electricity everywhere; verifying it costs a single hash. That asymmetry is the security.',
      },
      {
        kind: 'para',
        text: 'When two miners find blocks at nearly the same moment, the chain forks. The tie-breaker is simple: the chain with the most accumulated work wins, and miners always extend the heaviest tip they can see. The losing branch is abandoned and its transactions return to the pool. In practice forks resolve within a few blocks, as honest hash power concentrates on one side.',
      },
      {
        kind: 'para',
        text: "A transaction counts as confirmed once enough blocks bury it, because catching up from behind is exponentially unlikely. An attacker holding a fraction q of the network's hash power and falling z blocks behind has a probability of roughly (q/p)^z of ever overtaking — negligible at six confirmations unless q nears one half. Hence the term 51% attack: with the majority of hash power, the longest chain becomes whatever you say it is.",
      },
      {
        kind: 'para',
        text: "Proof of work's cost is both its security and its scandal — country-scale electricity spent on bookkeeping. Proof of stake replaces energy with capital: validators lock coins and take turns proposing blocks, with random selection weighted by stake. Cheating is punished by destroying the deposit — slashing — so the economics invert: to rewrite history, you must burn your own collateral.",
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Difficulty retarget',
        latex: 'D_{new} = D_{old} \\times \\frac{2016 \\times 10\\ \\text{min}}{T_{actual}}',
        meaning: 'Every 2016 blocks the target adjusts so blocks keep arriving about every ten minutes, however much hash power joins or leaves.',
      },
      {
        kind: 'formula',
        name: 'Catch-up probability',
        latex: 'P_{catchup} = \\left(\\frac{q}{p}\\right)^{z} \\quad (q < p)',
        meaning: 'Chance that an attacker with hash share q overtakes a chain z blocks ahead — the reason confirmation depth is safety, not ceremony.',
      },
      {
        kind: 'formula',
        name: 'Security budget',
        latex: 'R = (\\text{subsidy} + \\text{fees}) \\times 144 \\times 365',
        meaning: 'Annual miner revenue at 144 blocks a day — the income an attacker must out-earn to out-hash the honest network.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the probability that an attacker holding 30% of network hash power overtakes a transaction buried under six confirmations, and how it changes at 40%.',
          'Recall the governing idea: the catch-up probability is (q/p)^z, with p the honest share and z the confirmation depth, valid while q < p.',
          'Apply: at q = 0.3 and p = 0.7, (0.3/0.7)^6 = (0.429)^6 ≈ 0.006, about 0.6%. At q = 0.4 and p = 0.6, (0.4/0.6)^6 = (0.667)^6 ≈ 0.088, about 8.8%.',
          'State the result: six confirmations leave a 30% attacker odds of roughly 1 in 160, but a 40% attacker wins almost one time in eleven — security erodes sharply as the majority threshold approaches.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Cryptocurrencies settling value across borders with no central ledger-keeper',
          'Supply-chain provenance, where each change of custody is a signed transaction',
          'Smart contracts that escrow and release funds according to code rather than courts',
          'Timestamping and notarisation — proving a document existed before a given block',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "'On the blockchain' is not 'true': oracles feed outside facts in, and garbage fed in is garbage chained forever. Immutability cuts both ways — a buggy smart contract cannot be quietly patched. Confirmations are risk management, not magic, and 51% attacks on smaller chains have genuinely happened. And a lost private key means lost funds, with no manager to call.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Double spend', def: 'Sending the same funds twice — the fraud that consensus exists to prevent.' },
          { term: 'Block', def: 'A batch of transactions sealed by a header that references the previous block.' },
          { term: 'Nonce', def: 'The throwaway value miners vary while searching for a hash below the difficulty target.' },
          { term: 'Difficulty', def: 'How low a block hash must go; retargeted to hold block spacing steady.' },
          { term: 'Confirmation', def: 'Each additional block stacked above the one carrying your transaction.' },
          { term: 'Slashing', def: 'Proof-of-stake punishment that destroys a cheating validator deposit.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Each block header stores the hash of the previous block so that:',
            options: [
              'miners can find the nonce faster',
              'altering any old block invalidates every block after it',
              'the network can compress old data',
              'wallets can verify balances offline',
            ],
            answer: 1,
            explain: 'Hashes chain the blocks together: one edited character changes that hash and breaks every later reference.',
          },
          {
            q: 'Proof of work secures the chain because:',
            options: [
              'producing a valid block costs real computation everywhere, while verifying it costs one hash',
              'it encrypts every transaction end to end',
              'it prevents forks from ever forming',
              'miners are licensed by governments',
            ],
            answer: 0,
            explain: 'Expensive to produce, cheap to verify — rewriting history means out-computing the entire honest network.',
          },
          {
            q: 'An attacker with 51% of the hash power can:',
            options: [
              'create coins from nothing',
              'reorganise recent blocks, double-spending their own coins',
              "spend other people's funds",
              'forge valid signatures on arbitrary transactions',
            ],
            answer: 1,
            explain: 'They win the longest-chain race, but signatures still bind every transaction — only their own spends can be replayed.',
          },
          {
            q: 'Waiting for six confirmations is really:',
            options: [
              'a legal requirement in most countries',
              'an exponential collapse of the probability that an attacker catches up from behind',
              'a polite custom among miners',
              'the time to clear a payment through banks',
            ],
            answer: 1,
            explain: 'Catch-up odds fall as (q/p)^z with depth z — confirmation depth is probability management.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Hash functions and public-key signatures are the toolkit; this topic is where they meet consensus. Follow with the distributed-systems classics — Byzantine agreement and its impossibility results — then the economics of security budgets, and the layer-two systems built to make blockchains scale.',
        tone: 'path',
      },
    ],
  },
]
