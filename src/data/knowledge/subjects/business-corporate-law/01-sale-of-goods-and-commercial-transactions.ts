/**
 * Knowledge Universe — Business & Corporate Law — Chapter 01: Sale of Goods & Commercial Transactions
 * 1 lesson · ~2,421 words
 * field: Business Law
 * legacy sources: x15-business-law.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Sale of Goods Act 1930]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 law-sale-of-goods — The Sale of Goods Act: Conditions, Warranties and the Unpaid Seller
 */
import type { KnowledgeTopic } from '../../types'

export const businessCorporateLawCh01: KnowledgeTopic[] = [
  {
    id: 'law-sale-of-goods',
    title: 'The Sale of Goods Act: Conditions, Warranties and the Unpaid Seller',
    domain: 'Law & Governance',
    field: 'Business Law',
    branch: 'Sale of Goods Act 1930',
    tier: 'intermediate',
    concepts: [
      'Sale versus agreement to sell: when property passes',
      'Existing, future and contingent goods',
      'Conditions versus warranties and their consequences',
      'Implied conditions: title, description, sample, quality, fitness',
      'Caveat emptor and its statutory exceptions',
      'Transfer of property, risk and the nemo dat rule',
      'The unpaid seller: lien, stoppage in transit, resale',
    ],
    words: 0,
    readMins: 0,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'A warehouse burns the night after the buyer has paid but before the truck is loaded; a man who bought a car in perfect good faith must hand it back because it was stolen. Neither dispute turns on offer or acceptance — the machinery of general contract law — but on a second layer of rules for one thing: the transfer of ownership in movable goods. India carved that layer out of the Indian Contract Act 1872 into the Sale of Goods Act 1930, covering when ownership passes, what the seller silently promises, who bears loss, and what an unpaid seller can still do.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Almost every commercial dispute about physical goods runs through this Act: the rejected consignment, the buyer who went insolvent while the goods were on the train, the purchaser who discovers the seller never owned what he sold. It decides whether the buyer may reject outright or only claim damages, whether the seller can stop a shipment in transit, and who bears the loss when goods perish.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Section 4 defines a contract of sale: the seller transfers or agrees to transfer the property in goods to the buyer for a price. Goods — section 2(7) — means every kind of movable property other than actionable claims and money, including stock and shares, growing crops and things attached to land agreed to be severed. The price is the money consideration; a part-exchange plus cash is still a sale if money forms part of it. Section 9 lets it be fixed by the contract, in an agreed manner or by the course of dealing; section 10 adds that where a third party is to value it and cannot or will not, the agreement is avoided.',
      },
      {
        kind: 'para',
        text: 'Timing of ownership separates the two halves of section 4. Where property passes immediately, the transaction is a sale; where it is to pass later or subject to a condition, it is an agreement to sell, ripening into a sale when the time arrives or the condition is fulfilled — the distinction decides who can sue for the goods and who only for damages. Section 6 sorts the goods by existence: existing goods are either specific — identified and agreed at contracting — or unascertained, defined only by description; future goods are to be manufactured or acquired by the seller afterwards, so a deal for them is only an agreement to sell; contingent goods are future goods whose acquisition depends on an uncertain event. And existence matters: under sections 7 and 8, goods perished before the contract make it void, and goods perishing after an agreement to sell but before it ripens avoid the agreement — nobody pays for what no longer exists.',
      },
      { kind: 'heading', text: 'Conditions and Warranties' },
      {
        kind: 'para',
        text: 'Stipulations about the goods come in two grades. Section 12 defines a condition as a stipulation essential to the main purpose, so fundamental that its breach entitles the injured party to repudiate: refuse the goods, treat himself as discharged and claim damages. A warranty is collateral; its breach gives damages only, and the contract survives. Which is which is a question of construction, not labels. Section 13 supplies the safety valves: a buyer may waive a condition, or treat a breached one as a warranty where the breach is so slight that rejection would be unreasonable; and where the contract is not severable and the buyer has accepted the goods, a breach of condition is pursued only as a breach of warranty. Section 11 adds that time of payment is not, merely by agreement, of the essence.',
      },
      {
        kind: 'para',
        text: 'Most sale disputes are about the promises the Act reads in. Section 14 implies a condition that the seller has a right to sell — in an agreement to sell, that he will have one when the time comes; a buyer who receives no title has been cheated of the whole bargain, which is why the owner of a stolen car recovers it even from an innocent purchaser. Section 15 governs sale by description: in Andrews Bros v. Singer (1934) a “new” machine that had been used failed the description, and in Moore & Co. v. Landauer (1921) fruit packed twenty-four tins to a case against a contract saying thirty was rejected outright though sound. Section 17 governs sale by sample: the bulk must correspond with the sample, the buyer must get a fair chance to compare, and the goods must be free from latent defects making them unmerchantable — Drummond & Sons v. Van Ingen (1887) remains the classic. A sale by sample and description must satisfy both tests at once.',
      },
      {
        kind: 'para',
        text: 'Sections 14 to 17 are the statutory exceptions to caveat emptor — let the buyer beware — which otherwise leaves the buyer to examine and judge for himself. Fitness for purpose, section 16(1): where the buyer makes known, expressly or by implication, the particular purpose required, showing reliance on the seller’s skill and judgment, and the goods are of a description the seller supplies in his business, reasonable fitness is implied — the burst hot-water bottle in Priest v. Last (1903) is the textbook case. Merchantable quality, section 16(2): goods bought by description from a dealer in such goods must be reasonably fit for their ordinary purposes, as the dermatitis-causing wool in Grant v. Australian Knitting Mills (1936) was not. Two provisos bite back: an examination excludes conditions as to defects it ought to have revealed, and no fitness condition arises where the buyer specifies a patent or trade name without relying on the seller. Section 62 lets the parties exclude or vary the implied terms by express agreement, course of dealing or usage — subject to overriding law such as the Consumer Protection Act 2019.',
      },
      { kind: 'heading', text: 'Property, Risk and Title' },
      {
        kind: 'para',
        text: 'Every dispute converges on one question: had property — legal ownership — passed? Section 18: property cannot pass in unascertained goods until ascertained. Section 19 makes intention the master; the rules that follow apply unless a different intention appears. For specific goods in a deliverable state, section 20 passes property the moment the contract is made — the identified bales in the godown are the buyer’s before delivery or payment. Section 21 postpones passage where the seller must first do something to the goods, and section 24 where something remains to fix the price, such as weighing; in both, property passes when the act is done and the buyer notified. Section 22 covers sales on approval — “on sale or return” — passing property on approval signified, on an act adopting the transaction, or on retention beyond a reasonable time; section 23 reserves disposal to the seller until his conditions are met. Then section 26: unless otherwise agreed, the goods are at the seller’s risk until property passes and the buyer’s thereafter — res perit domino, the loss follows the owner — regardless of who holds them or whether the price has been paid.',
      },
      {
        kind: 'para',
        text: 'The common law’s nemo dat quod non habet — no one gives what he does not have — is codified in section 27: a buyer acquires no better title than the seller had, unless the owner’s own conduct precludes him from denying the seller’s authority to sell. The Act carves out the pockets commerce demands. Section 28 protects a buyer under a voidable title: where the seller’s title is avoidable for coercion, fraud or the like but unrescinded at the time of sale, a good-faith buyer without notice takes clean title — the principle that saved the innocent purchasers in Phillips v. Brooks (1919) and Lewis v. Averay (1972). Section 29 protects the second buyer from a seller who has sold the goods but remains in possession and resells in the ordinary course; section 30 mirrors it for a buyer in possession with the seller’s consent before property passed. A joint owner’s sale with the others’ consent, and the unpaid seller’s resale under section 54, complete the exceptions.',
      },
      { kind: 'heading', text: 'The Unpaid Seller' },
      {
        kind: 'para',
        text: 'Section 45 defines the unpaid seller: one to whom the whole price is unpaid or untendered, or whose negotiable conditional payment was dishonoured. Section 47 splits the remedies into rights against the goods and rights of action. First, the lien of section 48: while in possession, the unpaid seller may retain the goods until payment where they were sold without credit, where credit has expired, or where the buyer is insolvent; the lien is lost on delivery to a carrier without reserving disposal, when the buyer or his agent lawfully regains possession, or on waiver. Second, stoppage in transit, sections 50 to 53: where the buyer is insolvent and the goods are still with a carrier, the seller may stop them by taking possession or giving notice, before delivery. Third, resale, section 54: perishable goods at once, others after notice, the seller recovering any shortfall and accounting for surplus. Alongside run suits for the price (section 55), damages (section 56), repudiation (section 60) and interest (section 61); the buyer holds damages for non-delivery, specific performance for specific or ascertained goods (section 58) and set-off for breach of warranty (section 59).',
      },
      {
        kind: 'para',
        text: 'Section 64 compresses auction law into a handful of rules. Where goods are put up in lots, each lot is prima facie a separate contract. The sale is complete on the fall of the hammer or another customary announcement, and until then any bidder may retract. Where the sale is notified as subject to a reserve price, the lot may be withdrawn if bidding never reaches it. And where no right to bid on the seller’s behalf is expressly reserved, secret bidding by or for the seller is unlawful, and the buyer may treat the sale as fraudulent.',
      },
      {
        kind: 'example',
        title: 'Worked Case: The Twice-Sold Car',
        steps: [
          'Facts: a fraudster pays for a car with a cheque destined to bounce and drives off; within days he resells it at market price to an honest buyer, whom the owner sues for return.',
          'Characterise the first sale: consent obtained by fraud made the owner’s title voidable, not void.',
          'Apply section 28: at resale the title was unrescinded, and the second buyer acted in good faith without notice.',
          'Conclude: the innocent buyer keeps the car — the mirror of Lewis v. Averay (1972); had the car been stolen, nemo dat returns it to the owner.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Case: Stopping the Consignment',
        steps: [
          'Facts: a cloth merchant ships 200 bales on seven days’ credit; while they are still with the railways, the buyer is declared insolvent.',
          'Check possession: parted with, so the section 48 lien is gone — but the goods are still with a carrier, undelivered.',
          'Apply sections 50 to 53: buyer’s insolvency plus goods in transit and no delivery — stoppage in transit arises.',
          'Effect and finish: the merchant notifies the railway, which holds the bales for the seller, then resells after notice under section 54, recovering any shortfall and accounting for surplus.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Sale', def: 'A contract in which property in the goods passes to the buyer immediately, for a price.' },
          { term: 'Agreement to sell', def: 'A contract to pass property later or on a condition; it becomes a sale when that happens.' },
          { term: 'Condition', def: 'A stipulation essential to the main purpose; breach permits repudiation plus damages.' },
          { term: 'Warranty', def: 'A stipulation collateral to the main purpose; breach gives damages only.' },
          { term: 'Caveat emptor', def: 'Let the buyer beware — the baseline rule, subject to the statutory implied conditions.' },
          { term: 'Nemo dat quod non habet', def: 'No one can transfer a better title than he has; section 27 and its exceptions.' },
          { term: 'Res perit domino', def: 'The loss follows the owner — risk passes with property, not possession or payment.' },
          { term: 'Unpaid seller', def: 'A seller unpaid or untendered, or whose negotiable conditional payment was dishonoured.' },
          { term: 'Stoppage in transit', def: 'The unpaid seller’s right to retake goods from a carrier on the buyer’s insolvency, before delivery.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A buyer orders 100 boxes of a stated tea grade, packed 25 bags to the box; the boxes arrive holding only 20. The buyer may:',
            options: [
              'only claim damages, the quality being right',
              'reject the goods and claim damages — breach of a condition',
              'reject only if the seller was fraudulent',
              'not complain, having bought by sample',
            ],
            answer: 1,
            explain: 'Bought by description, and the packing count is part of it: section 15 makes it a condition — Moore & Co. v. Landauer.',
          },
          {
            q: 'Goods in the seller’s godown are destroyed the night after full payment but before delivery. The buyer bears the loss if:',
            options: [
              'the contract was an agreement to sell',
              'property had already passed to him',
              'the seller still had physical possession',
              'payment was made by cheque',
            ],
            answer: 1,
            explain: 'Section 26: risk follows property, not possession or payment; once ownership passes, res perit domino — the unpaid price is only a debt.',
          },
          {
            q: 'The unpaid seller’s lien over goods in his possession is LOST when:',
            options: [
              'the buyer becomes insolvent',
              'the credit period expires without payment',
              'he delivers to a carrier without reserving disposal',
              'the buyer delays payment briefly',
            ],
            answer: 2,
            explain: 'Unreserved carrier delivery ends the possession the lien depends on; insolvency and expired credit are grounds for exercising it, not losing it.',
          },
          {
            q: 'Which purchase carries NO implied condition of fitness for purpose?',
            options: [
              'A customer asks a chemist for something for a cold and takes what is offered',
              'A buyer asks a dealer for a drill suitable for marble, relying on the dealer’s advice',
              'A buyer insists on one patented model, refusing the seller’s alternatives',
              'A farmer buys seed after telling the merchant the crop he intends',
            ],
            answer: 2,
            explain: 'The proviso to section 16(1) excludes fitness where a patent or trade name is specified without reliance on the seller’s skill.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: The Indian Contract Act: Formation, Breach and Remedies, for the general law this Act builds on, and When Consent Fails: Void and Voidable Agreements, which explains the voidable titles section 28 protects. Follow-ons: the partnership and companies lessons in this chapter, and the accounting chapters’ financial-statements lessons on how sales and returns surface in the books.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A sale passes property at once; an agreement to sell passes it later — the divide governs remedies and risk.',
          'Goods are existing (specific or unascertained), future or contingent; perished goods void or avoid the bargain.',
          'A condition permits repudiation on breach; a warranty gives damages only; section 13 lets the buyer downgrade.',
          'Implied conditions — title, description, sample, merchantable quality, fitness — are caveat emptor’s exceptions.',
          'Property passes by intention; risk follows property, not delivery or payment — res perit domino.',
          'Nemo dat yields to voidable titles, possession-based resales and the unpaid seller’s resale.',
          'The unpaid seller’s armoury: lien, stoppage in transit, resale — beside suits for price, damages and interest.',
        ],
      },
    ],
  },
]
