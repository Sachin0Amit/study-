/**
 * Knowledge Universe — Regulatory & Workplace Law — Chapter 03: IP & Media Law
 * 1 lesson · ~1,422 words
 * field: Intellectual Property & Media Law
 * legacy sources: law-governance.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Intellectual Property & Media Law]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 law-ip-copyright-patent — Copyright, Patents and Trademarks: Who Owns an Idea
 */
import type { KnowledgeTopic } from '../../types'

export const regulatoryWorkplaceLawCh03: KnowledgeTopic[] = [
  {
    id: 'law-ip-copyright-patent',
    title: 'Copyright, Patents and Trademarks: Who Owns an Idea',
    domain: 'Law & Governance',
    field: 'Intellectual Property & Media Law',
    branch: 'IP Fundamentals',
    tier: 'core',
    concepts: [
      'Why law grants monopolies over ideas',
      'Copyright: protecting expression, not ideas',
      'Patents: the inventor\'s twenty-year bargain',
      'Trademarks: protecting source, not creativity',
      'Fair use and the public domain',
      'Why pharma and software play by different rules',
    ],
    words: 1422,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Ideas are slippery property: copy my car and we each have one, but copy my song and we both have it. Intellectual property law exists because copying is cheap and creation is not, and it answers with a deliberate bargain — temporary monopolies in exchange for more creation and disclosure. Three regimes share the work: copyright protects expression, patents protect inventions, trademarks protect source. They are routinely confused, grant different rights for different terms through different processes, and the confusion is expensive — ask anyone who has mixed them up in a licensing negotiation.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every ebook you buy, app you install, vaccine you take and logo you recognise is governed by these regimes. For creators they mark the difference between owning work and giving it away; for pharmaceutical and software companies they shape what gets researched and how; for everyone they set the price of culture, medicine and code after the exclusive rights expire. Knowing which regime applies — and what each actually forbids — is the difference between licensing and infringement.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Information is a public good: using it does not consume it, and excluding others from it is hard. Unregulated, that invites free-riding — let others bear the cost of writing, inventing and branding. Intellectual property\'s fix is time-limited exclusivity, in the United States grounded in the constitutional power “to promote the progress of science and useful arts”. The design is a trade: a monopoly now, public access later — every patent and copyright is scheduled to end in the public domain, where anyone may use it freely.',
      },
      {
        kind: 'para',
        text: 'Copyright attaches automatically the moment an original work is fixed in tangible form — written, recorded, coded. No registration and no notice are required under the Berne Convention\'s hundred-eighty-plus members, though registration unlocks enforcement tools in some systems, including United States federal court. It protects expression, never ideas: your love story is yours, the idea of a love story is not, and independently created identical works infringe nothing. Duration is long — typically the author\'s life plus seventy years — and it covers copying, adaptation and public performance.',
      },
      {
        kind: 'para',
        text: 'A patent is the opposite deal in procedure: nothing is automatic. The inventor files claims — sentences defining the invention\'s boundaries — an examiner searches the prior art, and grants only what is new, useful and non-obvious. In exchange for publishing how it works, the inventor gets twenty years from filing to exclude everyone, including independent re-inventors. You cannot patent laws of nature, mathematical methods or, in most systems, abstract ideas — the recurring battleground for software. When the term ends, the invention belongs to everyone.',
      },
      {
        kind: 'para',
        text: 'A trademark — word, logo, shape, even a colour — identifies source and protects consumers from confusion, not creativity. Rights generally arise from use, registration strengthens them, and they can last indefinitely while the mark stays in use. Protection scales with distinctiveness: fanciful marks like a coined “Kodak” are strongest; descriptive marks need proven secondary meaning; generic terms protect nobody — “aspirin” slipped into the generic and was lost to its maker. Famous marks also gain anti-dilution protection against uses that blur their uniqueness even without confusion.',
      },
      {
        kind: 'para',
        text: 'Copyright without limits would censor its own culture, so two safety valves exist. Fair use (in the United States) weighs four factors — purpose and transformation, the work\'s nature, amount taken, market effect; other systems enumerate “fair dealing” purposes such as criticism, quotation and parody. The public domain is the other valve: expired works (Dickens, Doyle), government works in some systems, and facts always — data is never owned, though a database\'s original selection can be. The first-sale doctrine lets a buyer resell the physical copy. The limits are where most copyright litigation actually lives.',
      },
      {
        kind: 'para',
        text: 'Pharma and software illustrate opposite fits. A molecule is a classic patentable invention, but clinical trials consume much of the twenty years — effective exclusivity is short, generics enter hard at expiry, and prices collapse; hence the running battles over evergreening. Software is the reverse: code is protected by copyright automatically, but its functionality is largely an abstract idea, unpatentable in many systems without careful claiming. So open source runs on copyright licences — the GPL is a copyright instrument — Google v. Oracle (2021) asked whether re-implementing an API was fair use, and trade secrets, like the Coca-Cola formula, protect what neither regime reaches.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a startup builds a music app with a novel recommendation method and a distinctive name — what can it own, and what can competitors lawfully do?',
        'Recall the regimes: copyright = expression; patent = novel, non-obvious, non-abstract inventions; trademark = source identifiers; trade secrets = information kept confidential.',
        'Apply: the code is copyrighted automatically — copying it infringes, but a clean-room reimplementation does not. The algorithm may be patentable if claimed as a concrete technical solution rather than an abstract idea; otherwise the training recipe stays a trade secret. The name and logo earn trademark rights through use. Nobody can stop a competitor\'s similar app — same idea — but they can stop copied code and confusingly similar branding.',
        'State the result: four regimes, four different answers — a competitor with lawyers is confined to the corridor IP deliberately leaves open: same function, different expression, different name.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Software and open source: licences like the GPL and MIT are copyright instruments — permissions granted in advance, with conditions.',
        'Pharmaceuticals: patent expiry dates are business models — generic entry after expiry is why medicines become cheap.',
        'Music and publishing: covers, samples and quotation live inside licensing or fair use and fair dealing; getting it wrong is infringement.',
        'Branding: clearance searches before launch prevent building on someone else\'s mark; distinctiveness is chosen, not found.',
        'Research and teaching: facts and expired works are free for anyone — the public domain is the commons science runs on.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The lethal folk myths: “I changed it thirty per cent, so it is mine” (no such rule exists in any regime); “there is no copyright notice, so it is free” (protection is automatic); “patent pending means protected” (pending grants nothing yet). Deeper confusions: ideas are never ownable — only expression, inventions and identifiers; a logo can be copyrighted as artwork and trademarked as a mark at once; and independent creation defeats copyright but never a patent. Check which regime actually governs before acting on any IP instinct.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'intellectual property', def: 'Umbrella term for legal rights in creations and identifiers: copyright, patents, trademarks, trade secrets.' },
        { term: 'copyright', def: 'Automatic protection of original expression fixed in tangible form, forbidding copying and adaptation.' },
        { term: 'patent', def: 'A twenty-year exclusive right to an invention, granted after examination in exchange for public disclosure.' },
        { term: 'trademark', def: 'A source identifier — word, logo, shape — protected against consumer confusion, maintained by use.' },
        { term: 'fair use', def: 'A defence permitting limited unauthorised use of copyrighted works, weighed by purpose, nature, amount and market effect.' },
        { term: 'public domain', def: 'The pool of works free for all to use — expired, forfeited, governmental, or never protected (facts, ideas).' },
        { term: 'trade secret', def: 'Valuable business information protected by confidentiality for as long as it stays secret.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Copyright protects…',
          options: ['ideas and concepts', 'the specific expression of ideas, automatically on fixation', 'inventions for twenty years', 'brand names against confusion'],
          answer: 1,
          explain: 'The idea-expression dichotomy: expression is protected on creation; the idea itself never is.',
        },
        {
          q: 'The core patent bargain is…',
          options: ['secrecy forever in exchange for fees', 'twenty years of exclusivity in exchange for public disclosure of the invention', 'lifetime protection for the inventor\'s heirs', 'automatic protection upon first sale'],
          answer: 1,
          explain: 'Society buys disclosure with a temporary monopoly; at expiry, the invention becomes public property.',
        },
        {
          q: 'A coined, invented brand name like “Kodak” is strong trademark material because it is…',
          options: ['descriptive of the product', 'fanciful — inherently distinctive', 'in the public domain', 'a functional feature'],
          answer: 1,
          explain: 'Fanciful marks carry no meaning to shed, so they sit at the top of the distinctiveness spectrum.',
        },
        {
          q: 'Open-source licences such as the GPL are legally grounded in…',
          options: ['patent law', 'trade-secret law', 'copyright law — they grant permissions in advance', 'trademark registrations'],
          answer: 2,
          explain: 'The code is copyrighted; the licence is a conditional grant of copying rights the owner could otherwise refuse.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is core-tier IP and runs on examples. Follow with media law and defamation, the other half of this new field, the contracts lesson for the licences that carry IP, and international trade law for cross-border enforcement. Then read one software licence and one patent\'s claims section in full — the fastest way to make these abstractions concrete.',
      },
    ],
  },
]
