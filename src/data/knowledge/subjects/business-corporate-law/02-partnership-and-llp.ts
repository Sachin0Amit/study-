/**
 * Knowledge Universe — Business & Corporate Law — Chapter 02: Partnership & LLP
 * 2 lessons · ~4,797 words
 * field: Business Law
 * legacy sources: x15-business-law.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Partnership Act 1932, LLP Act 2008]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 law-partnership-act — The Partnership Act: Nature, Relations and Dissolution
 *   02.2 law-llp-act — The LLP Act: Limited Liability Partnerships
 */
import type { KnowledgeTopic } from '../../types'

export const businessCorporateLawCh02: KnowledgeTopic[] = [
  {
    id: 'law-partnership-act',
    title: 'The Partnership Act: Nature, Relations and Dissolution',
    domain: 'Law & Governance',
    field: 'Business Law',
    branch: 'Partnership Act 1932',
    tier: 'intermediate',
    concepts: [
      'Definition: agreement, business, profits, mutual agency',
      'Partnership versus co-ownership, HUF and company',
      'Partner as agent: implied authority and holding out',
      'The minor admitted to benefits',
      'Registration and section 69 consequences',
      'Dissolution modes: agreement, contingency, notice, court',
      'Winding up and the order of payment',
    ],
    words: 0,
    readMins: 0,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Two friends open a hardware shop, share the takings, and sign every cheque either of them writes — until the shop sinks in debt and a supplier asks which of them must pay, and how much. The Partnership Act 1932 answers with one idea: a partnership is a relationship, not a thing, and its defining feature is that each partner acts for all. That single idea — mutual agency — explains why one partner can bind the firm, why every partner is liable for the others’ dealings in the business, and why the death, insolvency or exit of a partner reshapes or ends the relationship. This lesson works through the definition, the relations of partners, registration and dissolution.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The Act is the default constitution of every firm that has not drafted one — clinics, law offices, family trading houses, countless informal ventures. It decides who can sign for the firm, whether a lender taking a cut of profits has become a partner, what a minor inherits from an old firm, and what happens when one partner walks out. Because the Act is largely default law, partners can contract around it — but only if they know what the defaults say.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Section 4 defines partnership as “the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all.” There must be an agreement — a contract, oral or written, so the general law of agreement supplies the foundation: no free consent, no partnership. There must be a business — an active trade, profession or vocation, not passive co-ownership of a house. There must be sharing of profits — but profit-sharing alone is only evidence, not the test, because profits can be shared as interest on a loan, as rent, or as a caretaker’s wage. The true test is the final element: the business is carried on by all or any of them acting for all — mutual agency. Cox v. Hickman (1860) settled it: trustees for creditors who applied a firm’s profits to repay its debts were not partners, because they were not agents of the trading persons. Sharing profits points to partnership; agency proves it.',
      },
      {
        kind: 'para',
        text: 'The same logic separates partnership from its neighbours. A co-ownership is ownership of property in common: co-owners may share rent from a building without any of them being able to bind the others, ownership usually arrives by chance (inheritance, joint purchase) rather than agreement, and a co-owner may freely transfer or mortgage his undivided share — a partner may not. A Hindu undivided family is the opposite in its source: membership arrives by birth; the Karta manages with powers no managing partner has by default; and no coparcener is an agent of another. A company, as the companies lesson in this chapter explains, is a separate legal person: its shareholders are not its agents, their liability is capped at their shares, and it survives its members. Partners, by contrast, are personally and jointly liable, and the firm dissolves when the mutual agency dissolves. Size also matters: an association exceeding fifty persons must register as a company, which is why large firms convert.',
      },
      {
        kind: 'para',
        text: 'What the firm owns, the Act calls the property of the firm — section 14 sweeps in property originally brought into the common stock, acquired by or for the firm, and property acquired with money belonging to the firm, all held by the partners for the firm. The distinction between firm property and a partner’s private property matters most on insolvency, because section 48 sets the order of application — firm property pays firm debts first, and only the residue reaches partners as individuals; the reverse for private property. Firm property is also the working capital of mutual agency: implied authority to sell extends to the firm’s goods, not to a partner’s personal car.',
      },
      { kind: 'heading', text: 'Relations of Partners' },
      {
        kind: 'para',
        text: 'Externally, section 18 states the keystone: every partner is an agent of the firm and of the other partners for the purposes of the business. Section 19 defines the implied authority that rides on this agency: an act binds the firm if it is done in the firm’s name, is of a kind commonly done in that business, and is done in the usual way — buying stock, selling goods, borrowing money, engaging staff, receiving payments, settling accounts. Section 19(2) lists what implied authority never covers: submitting a dispute to arbitration, opening a bank account other than in the firm’s name, admitting a new partner, acquiring or transferring immovable property, entering into a partnership on behalf of the firm, or renouncing a claim — each needs the other partners’ consent. Internally, the Act polices fiduciary loyalty. Section 16 makes every partner accountable: he must render true accounts, and must account for and indemnify the firm for any personal profit made from the partnership business or any use of the firm’s property, name or business connection. Section 20 extends the duty to competition: a partner who, without consent, carries on a competing business must account to the firm for its profits.',
      },
      {
        kind: 'para',
        text: 'Liability follows agency. Section 25 makes every partner liable jointly with the others, and severally for acts for which he is responsible, for all debts and obligations of the firm incurred while he is a partner. Section 26 fixes the firm with liability for a partner’s wrongs — fraud, conversion, negligence — committed in the ordinary course of the firm’s business or with the authority of co-partners; in Hamlyn v. Houston & Co. (1903) a partner who took a commission for placing orders bound his firm to compensate the supplier. Section 27 similarly makes the firm answer where a partner misapplies money or property received by the firm. And section 28 states holding out: anyone who by words, writing or conduct represents himself as a partner — or knowingly suffers himself to be so represented — is liable as a partner to anyone who gave credit on the faith of the representation. A retired partner who lets the old firm letterhead keep circulating can be held out; a landlord whose tenant’s sign says “and Sons” cannot.',
      },
      {
        kind: 'para',
        text: 'A person who cannot contract cannot be a partner — but the Act makes one deliberate exception. Section 30 lets a minor be admitted to the benefits of a partnership with the consent of all the partners for the time being. The minor is entitled to the agreed share of profits and of property, may inspect the accounts, but is not personally liable for the firm’s acts: his share alone is answerable. The Act then builds an exit ramp around majority: within six months of attaining majority — or of first learning of his admission, whichever is later — the minor must give public notice whether he elects to become a partner; if he does, his liability dates from when he actually became a partner; if he does not, his share is not liable for any act of the firm after the notice.',
      },
      { kind: 'heading', text: 'Registration and Dissolution' },
      {
        kind: 'para',
        text: 'Registration is optional and can happen at any time — not only at formation — by delivering to the Registrar of Firms a statement in the prescribed form, signed by the partners, with the fee. The price of staying unregistered is section 69: an unregistered firm cannot sue to enforce rights arising from a contract in any court, and a partner cannot sue the firm or his co-partners to enforce rights under the agreement — but third parties are entirely unaffected and can sue the unregistered firm. In practice, non-registration is a litigation trap: the firm that waits until it needs to sue discovers it cannot.',
      },
      {
        kind: 'para',
        text: 'Dissolution comes in two flavours, and section 39 separates them: dissolution of partnership is any change in the relations of the partners; dissolution of the firm is the termination of partnership among all the partners. The modes travel from consensual to judicial. By agreement, section 40 — all partners may dissolve whenever they consent. Compulsorily, section 41 — if all the partners or all but one are adjudicated insolvent, or the business becomes unlawful. By contingency, section 42 — where constituted for a fixed term, on its expiry; for a single adventure, on its completion; at will, on a partner’s death or insolvency. By notice, section 43 — a partnership at will may be dissolved by any partner giving notice, effective from the date it names or, if none, the date of communication. By court, section 44 — on a partner’s insanity or permanent incapacity, misconduct affecting the business, wilful or persistent breach of the agreement, transfer of his whole interest, business that can only continue at a loss, or any other just and equitable ground. After dissolution, section 47 continues each partner’s authority so far as necessary to wind up, and section 48 orders the proceeds: firm property pays firm debts first, then rateably what is due to the partners, the residue dividing in profit-sharing proportions; each partner’s separate property pays his separate debts first, and only its surplus goes to firm debts.',
      },
      {
        kind: 'example',
        title: 'Worked Case: The Garage That Was a Partnership',
        steps: [
          'Facts: two men owned a garage in shares; one let the upper floor as a flat, the other repaired cars, and the proceeds of parts and repairs were pooled and split. Sued for the parts bill, the repairer argued no partnership existed.',
          'Apply the definition: a business — car repairs — carried on in common with a view of profit, the takings pooled and shared whatever each believed.',
          'Apply the test: mutual agency on the facts — each had acted in the repair business as the business of both.',
          'Conclude: a partnership existed, so both were liable for the parts bought in the ordinary course — the result in Mercantile Credit Co. v. Garrod (1962), where intention not to be partners was irrelevant.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Case: The Profit-Sharing Lender',
        steps: [
          'Facts: a struggling firm promises a moneylender a quarter of its profits until his debt is paid; a firm creditor now sues the lender as a “partner.”',
          'Identify the trap: he shares profits — evidence of partnership, and nothing more.',
          'Apply Cox v. Hickman (1860) and Walker v. Hirsch (1884): profits can be received as interest, so profit-sharing alone creates no relation.',
          'Ask the real question: was the lender ever an agent of the firm, able to bind it? On the facts, no.',
          'Conclude: he is a creditor — neither sharing losses nor answerable for debts, and with no right to manage.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Partnership', def: 'The relation between persons agreeing to share the profits of a business carried on by all or any of them acting for all.' },
          { term: 'Mutual agency', def: 'Each partner is both principal and agent of the others in the business — the true test of partnership.' },
          { term: 'Co-ownership', def: 'Common ownership of property without a common business; owners are not agents for one another.' },
          { term: 'Implied authority', def: 'An act done in the firm’s name, of a kind usual for that business, binds the firm without express mandate.' },
          { term: 'Holding out', def: 'Liability as a partner fastened on one who represented himself as such and let credit be given on that faith.' },
          { term: 'Minor admitted to benefits', def: 'Section 30 arrangement: the minor shares profits without personal liability, and elects within six months of majority.' },
          { term: 'Dissolution of the firm', def: 'Termination of the partnership among all the partners, as against a mere change in relations.' },
          { term: 'Section 69 bar', def: 'An unregistered firm’s inability to sue on contracts, while third parties remain free to sue it.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A moneylender receives 20 percent of a firm’s profits as interest on a loan. Regarding the firm’s trade debts, he is:',
            options: [
              'liable as a partner, since he shares profits',
              'a creditor, since profit-sharing without mutual agency does not make a partner',
              'liable only up to his share of the profits received',
              'jointly liable with the Karta',
            ],
            answer: 1,
            explain: 'Profits can be payment for capital, labour or debt; only mutual agency creates the relation — Cox v. Hickman, Walker v. Hirsch.',
          },
          {
            q: 'Which act falls OUTSIDE a partner’s implied authority under section 19?',
            options: [
              'buying stock in the firm’s name for its trade',
              'selling the firm’s goods at market',
              'buying an office building for the firm',
              'receiving payment of a debt due to the firm',
            ],
            answer: 2,
            explain: 'Immovable property, like admitting a partner or opening a foreign bank account, is outside the usual-trade rule and needs the others’ consent.',
          },
          {
            q: 'A minor admitted to the benefits of a partnership attains majority. He:',
            options: [
              'automatically becomes a partner with full liability for past acts',
              'must give public notice within six months whether he elects to become a partner',
              'must repay all profits he received',
              'inherits the Karta’s management powers',
            ],
            answer: 1,
            explain: 'Section 30 gives a six-month election window from majority or from learning of the admission, whichever is later; refusal ends liability for later acts.',
          },
          {
            q: 'A partnership at will with four partners: one partner gives written notice of dissolution. The firm is dissolved:',
            options: [
              'only if all partners consent',
              'only by court order',
              'from the date stated in the notice, or the date it is communicated',
              'at the end of the accounting year',
            ],
            answer: 2,
            explain: 'Section 43: a partnership at will is dissolved by any partner’s notice, from the date it names or its communication.',
          },
          {
            q: 'Which statement about an UNREGISTERED firm is correct?',
            options: [
              'It cannot be sued by third parties',
              'It cannot enforce its contracts in court, but third parties can still sue it',
              'Its partners cannot be made personally liable',
              'It must be wound up immediately',
            ],
            answer: 1,
            explain: 'Section 69 handicaps the firm as plaintiff, not as defendant — the asymmetry that makes registration the norm in practice.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: The Indian Contract Act: Formation, Breach and Remedies and When Consent Fails: Void and Voidable Agreements, since a partnership is born from an agreement and dies from a defective one. Follow-ons: the limited liability partnership lesson next in this chapter relaxes the personal-liability price of mutual agency, and the companies lesson completes the spectrum of firm organisation. The accounting chapters’ partnership-accounts lessons take over the numbers — appropriation of profits, guarantee of profit, goodwill and reconstitution on admission, retirement or death — which this lesson deliberately leaves untouched.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Partnership is an agreement to share profits of a business carried on by all or any acting for all — mutual agency is the test, not profit-sharing.',
          'Co-owners, Hindu undivided families and companies are the neighbours: no agency, membership by birth, and separate personality respectively.',
          'Firm property is held for the firm; on insolvency it answers firm debts first, and section 48 orders the winding-up queue.',
          'Every partner is an agent: usual-trade acts bind the firm; arbitration, foreign accounts, new partners and immovable property need consent.',
          'The firm answers for wrongs in the ordinary course of business, and holding out fixes liability on those who let themselves be represented as partners.',
          'A minor may share benefits without personal liability, and must elect by public notice within six months of majority.',
          'Dissolution runs from consent through contingency, notice and court; authority survives only to wind up, and firm property pays firm debts first.',
        ],
      },
    ],
  },
  {
    id: 'law-llp-act',
    title: 'The LLP Act: Limited Liability Partnerships',
    domain: 'Law & Governance',
    field: 'Business Law',
    branch: 'LLP Act 2008',
    tier: 'intermediate',
    concepts: [
      'A hybrid form: partnership flexibility, company shield',
      'Body corporate with perpetual succession',
      'Incorporation: name, partners and the incorporation document',
      'Designated partners and the LLP agreement',
      'The liability shield and its fraud exception',
      'Statement of account and solvency',
      'Conversion from firm or company',
    ],
    words: 0,
    readMins: 0,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'A four-partner audit practice loses a negligence claim worth forty times its assets. As a partnership, the shortfall follows every partner home — houses, savings, everything. The same practice organised as a limited liability partnership loses only the firm’s assets and, absent personal wrongdoing, each partner sleeps soundly. The Limited Liability Partnership Act 2008 created this middle form for exactly such firms: professionals and small enterprises who want the internal informality of a partnership — no board, no prospectus, management by mutual agreement — combined with the external personality and liability shield of a company. India followed the United Kingdom’s Limited Liability Partnerships Act 2000, itself a response to fears that catastrophic professional-liability claims would otherwise drive firms out of the company-style structures altogether. This lesson covers what the form is, how it is made, how it is run and how it ends.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The LLP is now the default choice for consulting outfits, chartered-accountancy and legal practices converting from firms, small startups that want structure without shareholder formality, and family enterprises seeking succession planning with limited liability. Choosing between firm, LLP and company is one of the first structural decisions any enterprise makes — and this lesson supplies the comparison table that decision runs on.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Section 3 declares the essentials: an LLP is a body corporate, formed and registered under the Act, with a legal entity separate from that of its partners, and — the phrase that carries the whole design — perpetual succession. A partner’s death, insolvency or retirement changes the LLP’s membership but not its existence; the entity continues as the same person in law until it is wound up and dissolved. Like any body corporate it can own property in its own name, sue and be sued in its own name, enter contracts, and have a common seal if it wants one; unlike a partnership, whose property is held by partners as firm property, the LLP’s assets belong to the LLP itself. The first Indian LLPs were incorporated in 2009, when the Act came into force. For tax, an LLP is treated like a firm — a flat rate on total income, with partners’ profit shares exempt in their hands — which, together with the absence of dividend distribution tax on drawings, long made the form fiscally attractive relative to small companies; the taxation lesson in this chapter picks that thread up.',
      },
      {
        kind: 'para',
        text: 'Set the three forms side by side and the hybrid stands out. A partnership is not a separate person: partners are agents of the firm, personally and jointly liable to the last rupee, governed by the Partnership Act 1932, and dissolved by death or exit unless the partners regroup. A company is a separate person with limited liability, but pays for the shield with formality — memorandum and articles, a board of directors, general meetings, statutory registers, dividend rules, and the Companies Act 2013’s full apparatus. The LLP takes the shield without most of the apparatus.',
      },
      {
        kind: 'list',
        items: [
          'Legal status — firm: no separate personality; LLP: body corporate with perpetual succession; company: body corporate with perpetual succession.',
          'Liability — firm: every partner personally, jointly liable; LLP: each partner’s liability limited to agreed contribution, except for personal wrongdoing; company: shareholder liability limited to unpaid share value.',
          'Governing instrument — firm: the partnership agreement; LLP: the LLP agreement, with the Act’s First Schedule filling gaps where none exists; company: memorandum and articles.',
          'Management — firm: every partner (or managing partners) with implied authority; LLP: as the LLP agreement provides, with designated partners answerable for compliance; company: the board of directors.',
          'Membership — firm: minimum 2, maximum 50 before company registration is required; LLP: minimum 2 partners, no maximum; company: private minimum 2 and maximum 200 members, public minimum 7, no maximum.',
          'Key compliance — firm: optional registration, no annual filing; LLP: annual return plus statement of account and solvency, audit above thresholds; company: annual return, audited financial statements, board and general meetings.',
        ],
      },
      { kind: 'heading', text: 'Incorporation and Management' },
      {
        kind: 'para',
        text: 'Incorporation needs at least two partners — individuals or bodies corporate — and a name. The name must not be identical or too similar to an existing company or LLP, must not be offensive, and must end with “LLP”, with names of for-profit entities also carrying a suffix denoting limited liability; availability is checked and reserved with the Registrar before filing. The substantive filing is the incorporation document under section 7: the proposed name, the nature of the business, the address of the registered office, the particulars of partners, and their consent to act. Two features distinguish it from a plain partnership deed. First, the requirement of designated partners: at least two, each an individual, one of whom must be resident in India; they hold a Director Identification Number-like allotment and carry personal responsibility for the LLP’s statutory compliance, including filings. Second, certification: where the rules require, an advocate, company secretary, chartered accountant or cost accountant in whole-time practice must verify that all incorporation requirements have been met. On satisfaction, the Registrar registers the document and issues the certificate of incorporation under section 11 — conclusive evidence that the Act’s requirements were met. The LLP agreement under section 23 governs the mutual rights and duties of partners, and of the LLP and its partners; where the parties never execute one, the First Schedule to the Act supplies default rules on capital, profits, duties, expulsion and retirement, so the entity can function from day one.',
      },
      {
        kind: 'para',
        text: 'Management is deliberately contractual. There is no board and no articles: the LLP agreement decides who does what, how decisions are made, how profits divide, and how partners join and leave. Any partner can bind the LLP to third parties by acts done in the ordinary course of business, unless the LLP agreement restricts his authority and the third party knows of the restriction — the partnership’s section 19 logic, ported across with a contractual override. The Act polices the boundary of the shield in three moves. Section 25 preserves holding out: one who represents himself as a partner of the LLP, and lets credit be given on that faith, is liable accordingly. Section 26 makes the LLP liable, and the partner liable to the LLP, where a partner is apparently carrying on business in the LLP’s name with the authority of the other partners and causes loss by misapplication of money or property. And section 27 contains the fraud carve-out: where a partner is guilty of fraud in the course of the LLP’s business, the liability of that partner — that partner alone — becomes unlimited. The shield protects partners from each other’s ordinary negligence and commercial error; it never protects the wrongdoer from his own fraud.',
      },
      {
        kind: 'para',
        text: 'Ongoing compliance is a sketch rather than a portrait. The LLP must maintain a registered office and notify changes. Each financial year it files with the Registrar an annual return under section 34, giving the partners’ particulars and the state of the LLP’s affairs; and a statement of account and solvency under section 35 — a prescribed statement, signed by designated partners, that the LLP is solvent or, if not, the particulars of insolvency, filed within the time the rules prescribe. Audit is compulsory only for larger LLPs — above modest thresholds of turnover and partner contribution (roughly ₹40 lakh turnover or ₹25 lakh contribution under the rules) — though many LLPs audit anyway for credit and compliance. For winding up, the Act provides both voluntary winding up and winding up by the Tribunal on specified grounds — inability to pay debts among them — with insolvency resolution of LLPs now run through the same Insolvency and Bankruptcy Code machinery as companies, and dissolution following the winding up. Conversion is expressly provided for by schedule: the Second Schedule converts a partnership firm into an LLP, carrying the firm’s property, liabilities and partners across, and the Third Schedule converts a private company, its shareholders becoming partners; in each case the converted entity succeeds to rights and obligations by law.',
      },
      {
        kind: 'example',
        title: 'Worked Case: The Claim Against the Consulting LLP',
        steps: [
          'Facts: three consultants run practice as an LLP with combined contribution of ₹15 lakh. A court awards a client ₹60 lakh for work the LLP botched; the client seeks recovery from each partner’s home and savings.',
          'Identify the form: the obligation is an obligation of the LLP, incurred in its own name — under the Act it is the LLP’s debt, not the partners’.',
          'Apply the shield: the client reaches the LLP’s assets, and the partners’ exposure is capped at their agreed contribution; a partner is not personally liable for the LLP’s obligations merely by being a partner.',
          'Test the carve-outs: the loss arose from negligent work, not fraud — so section 27 unlimited liability does not attach; had one partner forged the client’s documents, that partner alone would answer personally.',
          'Conclude: the client ranks as an unsecured creditor of the LLP for the shortfall; the partners keep their personal assets — the outcome that would have destroyed them under a partnership.',
        ],
      },
      {
        kind: 'example',
        title: 'Walkthrough: From Deed to Certificate',
        steps: [
          'Two chartered accountants decide to convert their registered firm into an LLP: they first check and reserve the name, ending in LLP, with the Registrar.',
          'They file the incorporation document — business particulars, registered office, both partners named as designated partners, one being resident in India, with consents.',
          'The Registrar finds compliance and issues the certificate of incorporation: the LLP exists as a body corporate from the date stated in it.',
          'They execute the LLP agreement defining capital, profit shares, decision rights and exit; had they not, the First Schedule defaults would govern.',
          'Their recurring calendar: annual return, statement of account and solvency signed by both designated partners, and audit once turnover crosses the threshold.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Limited liability partnership', def: 'A body corporate, separate from its partners, with perpetual succession and partner liability capped at contribution.' },
          { term: 'Perpetual succession', def: 'The entity continues to exist regardless of changes in its partners until wound up and dissolved.' },
          { term: 'Designated partner', def: 'A partner individually answerable for the LLP’s statutory compliance; at least two, one resident in India.' },
          { term: 'LLP agreement', def: 'The contract governing mutual rights and duties of the partners; the First Schedule fills its absence.' },
          { term: 'Holding out (LLP)', def: 'Section 25 liability fastened on one who represents himself as a partner of the LLP and induces credit.' },
          { term: 'Fraud carve-out', def: 'Section 27: a partner guilty of fraud in the course of business has unlimited personal liability.' },
          { term: 'Statement of account and solvency', def: 'The prescribed annual statement, signed by designated partners, declaring the LLP’s solvency.' },
          { term: 'Second Schedule', def: 'The conversion route by which a partnership firm becomes an LLP.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'One of the seven partners of an LLP dies. The LLP:',
            options: [
              'is dissolved automatically',
              'continues to exist because of perpetual succession, though the agreement governs the deceased’s share',
              'becomes a partnership at will',
              'must convert to a private company',
            ],
            answer: 1,
            explain: 'Section 3: an LLP’s existence is independent of its partners’; only winding up and dissolution end it.',
          },
          {
            q: 'A partner of an LLP commits fraud in the course of its business. Liability for that fraud falls on:',
            options: [
              'all partners jointly, like a partnership',
              'the LLP only',
              'that partner personally, without limit',
              'the designated partners only',
            ],
            answer: 2,
            explain: 'Section 27 makes the guilty partner’s liability unlimited; the shield never covers the wrongdoer’s own fraud.',
          },
          {
            q: 'The minimum number of partners an LLP must have, and its governing instrument, are:',
            options: [
              'two and the LLP agreement',
              'seven and articles of association',
              'one and the memorandum',
              'two and a certificate of incorporation',
            ],
            answer: 0,
            explain: 'At least two partners are required, and section 23 makes the LLP agreement the governing instrument, with the First Schedule as fallback.',
          },
          {
            q: 'A firm of five partners converts to an LLP under the Second Schedule. The firm’s property and liabilities:',
            options: [
              'are divided equally among the partners personally',
              'vest in the LLP by operation of law, and the partners become partners of the LLP',
              'must be liquidated before conversion',
              'remain with the old firm for five years',
            ],
            answer: 1,
            explain: 'The conversion schedules carry the entity’s rights and obligations across to the LLP by law — no conveyancing relay is needed.',
          },
          {
            q: 'The statement of account and solvency required of an LLP is:',
            options: [
              'an audited balance sheet in every case',
              'a prescribed annual statement, signed by designated partners, declaring whether the LLP is solvent',
              'filed only when the LLP is wound up',
              'a public offering document',
            ],
            answer: 1,
            explain: 'Section 35: the solvency declaration is the LLP’s signature annual compliance, alongside the section 34 annual return.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the partnership lesson earlier in this chapter, whose mutual-agency logic the LLP inherits and softens. Follow-ons: the companies lesson completes the organisational spectrum — the LLP skips the board, the memorandum and the prospectus machinery described there. The taxation lesson in this chapter explains the firm-style tax treatment mentioned above, and the accounting chapters’ lessons on financial statements cover the books the statement of account and solvency summarises.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'An LLP is a body corporate: separate legal personality and perpetual succession, registered under the LLP Act 2008.',
          'It is a hybrid — partnership-style management by agreement inside, company-style shield outside — as the comparison table shows.',
          'Incorporation needs two partners, a reserved name, and the section 7 incorporation document; the certificate under section 11 is conclusive evidence.',
          'At least two designated partners, one resident in India, carry compliance responsibility; the LLP agreement under section 23 governs, with the First Schedule as default.',
          'The shield: obligations are the LLP’s own; but holding out bites under section 25 and a partner’s own fraud brings unlimited liability under section 27.',
          'Annual compliance is an annual return plus the statement of account and solvency; audit applies above modest thresholds.',
          'Winding up may be voluntary or by the Tribunal; the Second and Third Schedules convert firms and private companies into LLPs.',
        ],
      },
    ],
  },
]
