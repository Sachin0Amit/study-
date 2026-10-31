/**
 * Knowledge Universe — Business & Corporate Law — Chapter 03: Company Law
 * 2 lessons · ~4,340 words
 * fields: Business Law, Private Law
 * legacy sources: law-governance.ts, x15-business-law.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Companies Act 2013, Corporate Law]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 law-companies-act — The Companies Act and the Regulators: Incorporation to Capital
 *   03.2 law-corporate-governance — Corporate Law: Entities, Fiduciary Duties and Boards
 */
import type { KnowledgeTopic } from '../../types'

export const businessCorporateLawCh03: KnowledgeTopic[] = [
  {
    id: 'law-companies-act',
    title: 'The Companies Act and the Regulators: Incorporation to Capital',
    domain: 'Law & Governance',
    field: 'Business Law',
    branch: 'Companies Act 2013',
    tier: 'intermediate',
    concepts: [
      'Separate legal personality: the Salomon principle',
      'Incorporation: name, memorandum, articles, certificate',
      'Private, public and one-person companies',
      'Lifting the corporate veil',
      'Share capital and debentures: ownership versus debt',
      'Directors’ duties and company meetings',
      'The regulator map: MCA, SEBI, RBI, IRDAI, CCI, NCLT',
    ],
    words: 0,
    readMins: 0,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'In 1892 Aron Salomon, a boot manufacturer, turned his sole business into a limited company, sold himself debentures secured over its assets, and when the company collapsed, its unsecured creditors demanded that he stand behind its debts personally — because, they said, the company was merely Salomon wearing a legal costume. The House of Lords disagreed, and that refusal is the foundation of company law: a duly incorporated company is a person in its own right, distinct from the people behind it. The Companies Act 2013, which replaced the 1956 Act, administers everything that flows from that idea — how the artificial person is born, what organs it has, what its ownership instruments are, and which authorities police it. This lesson travels from the certificate of incorporation to the boardroom and closes with the map of Indian corporate regulators.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The company is the workhorse of modern business — from one-person startups to listed giants — and every promoter, investor, lender and manager deals with its consequences daily: limited liability, transferable shares, perpetual succession, and a compliance perimeter enforced by a half-dozen regulators. Understanding what the corporate person is (and when courts look through it) is the difference between structuring a business and being structured by it.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Separate personality carries five practical consequences. The company owns its property, sues and is sued in its own name, and has perpetual succession — shareholders die, sell or vanish, and the company continues until wound up. Shareholders’ liability is limited to the amount unpaid on their shares: the creditor’s debtor is the company, not the people behind it, exactly as Salomon v. Salomon & Co. (1897) held when it let Salomon rank as a secured creditor of his own failed company. A company can contract with its own members, and in Lee v. Lee’s Air Farming (1961) a man who owned all but one share of his company was nevertheless its employee, so his widow could claim workers’ compensation from it. In exchange for the shield, the law demands incorporation, disclosure and governance — the machinery this lesson sketches. The shield is a privilege of form, and form is what the Act polices.',
      },
      {
        kind: 'para',
        text: 'Birth runs through a defined sequence. First the name: reserved with the Registrar to ensure it is not identical with or too like an existing company’s, is not offensive, and — with limited exceptions — ends with “Limited” or “Private Limited”. Then the two constitutional documents. The memorandum of association is the charter: its clauses state the name, the state of the registered office, the objects for which the company is formed, the liability of members (limited by shares, by guarantee, or unlimited), and the share capital. Acts beyond the objects clause were historically void — Ashbury Railway Carriage & Iron Co. v. Riche (1875) refused to ratify a railway company’s contract to finance a Belgian railway — and though modern law allows objects to be altered and protects outsiders dealing in good faith, the memorandum still defines what the company is. The articles of association are the internal constitution: how directors are appointed and removed, how meetings are called, how shares are transferred, how dividends are declared. Where the articles are silent on internal management, the Act’s model articles in its tables fill the gap. The modern filing is electronic and consolidated: a single integrated form carries the application for the name, the memorandum and articles, the first directors’ particulars and consents, the registered office and the declaration of compliance, supported by professionals. Once the Registrar is satisfied, the certificate of incorporation issues — conclusive evidence that the company exists and has been registered from the date on it, a date no challenge to the antecedent paperwork can erase.',
      },
      {
        kind: 'para',
        text: 'The Act then sorts companies by their accessibility to the public. A private company — section 2(68) — restricts the right to transfer its shares, limits membership to two hundred (excluding employee-members), prohibits any invitation to the public to subscribe, and needs at least two members and two directors; since the minimum-capital rules were removed, two people and a modest filing can create one. A public company — section 2(71) — needs at least seven members and three directors, may invite the public through a prospectus, and faces heavier governance: independent directors, stricter audit and, when listed, the market regulator’s continuous obligations. The one-person company — section 2(62) — folds sole proprietorship into corporate form: a single natural-person member who names a nominee in the memorandum to take over on death, and who is relieved of several formalities, including general meetings. Since the 2020 rule changes, an Indian citizen resident for the statutory period can form one, and it can convert to a private or public company at will.',
      },
      {
        kind: 'para',
        text: 'Separate personality is respected, not worshipped: courts lift the corporate veil when the form is abused. The recognised grounds cluster around wrongdoing and public policy — fraud or improper conduct, where the company is a facade for concealing the true actors; revenue evasion; using the form to evade obligations or circumvent statutes; and national emergency, as in Daimler Co. v. Continental Tyre & Rubber Co. (1916), where an English company whose shareholders were German enemies could not be paid during the war because the court looked past the English incorporation to the enemy character of its ownership. In the other direction, Vodafone International Holdings v. Union of India (2012) shows the principle’s strength: the Supreme Court respected the separate existence of an overseas holding company in a chain of share transfers, declining to tax an indirect transfer of Indian assets under the law as it then stood — Parliament’s answer was a retrospective amendment, which itself shows how much the personality principle protects. The routine cases, however, are not constitutional dramas but puppets: where a subsidiary is a mere agent or the alter ego of its parent, or where companies are created to defeat creditors, the veil parts.',
      },
      { kind: 'heading', text: 'Capital, Governance and the Regulators' },
      {
        kind: 'para',
        text: 'Ownership of the artificial person is sliced into shares, and the slice one buys determines one’s rights. Equity shares — section 43 — carry the voting rights and the residual claims: dividends only after everyone else is satisfied, and repayment in winding up last. Preference shares carry preferential rights — a fixed-rate dividend paid before equity holders get anything, and priority on return of capital — usually without votes, and if redeemable they must be redeemed within the twenty years that section 55 allows. The capital architecture runs from authorised capital (the ceiling in the memorandum) through issued, subscribed and paid-up capital — the accounting chapters’ lessons on shares and debentures work through these mechanics and their balance-sheet presentation, and this lesson leaves that machinery to them. Debt enters as debentures: instruments acknowledging a loan. A debenture holder is a creditor, not an owner — paid interest before any dividend, ranking ahead of shareholders in winding up, usually without a vote — and debentures may be secured on the company’s assets, convertible into shares at the holder’s option, or plain paper. The choice between equity and debentures is the choice between sharing control and parting with it, priced by the market.',
      },
      {
        kind: 'para',
        text: 'Governance is the story of two organs. The board of directors manages — the Act vests the company’s powers in the board, exercisable at meetings, at least four a year with no gap beyond the statutory limit. Directors are fiduciaries, and section 166 codifies the core duties: to act in accordance with the articles, in good faith to promote the objects of the company for the benefit of its members as a whole; to exercise due and reasonable care, skill and diligence and independent judgment; to avoid conflicts of interest and situations of undue gain; and to refrain from assignments of office. Breach attracts fines and, for an outright undue gain, disgorgement. The shareholders in general meeting supervise: the annual general meeting must be held within six months of the financial year’s end, and not more than fifteen months may pass between two of them. Resolutions come in two grades — ordinary, carried by a simple majority, and special under section 114, carried by a majority of at least three times the votes cast against — reserved for weightier decisions like altering the articles or varying shareholders’ rights. The default is majority rule: as Foss v. Harbottle (1843) held in the ancestor of the doctrine, a wrong done to the company is the company’s to pursue, and the majority decides whether to pursue it — subject to the Act’s statutory exceptions, chief among them the oppression-and-mismanagement jurisdiction.',
      },
      {
        kind: 'para',
        text: 'No company is an island; a constellation of regulators surrounds it. The Ministry of Corporate Affairs administers the Act and runs the electronic registry through which every filing passes. Under it work the Registrars of Companies, one to a region: the registry that registers companies and LLPs, examines filings, maintains the public record and strikes off defunct companies. The Securities and Exchange Board of India — statutory since the SEBI Act 1992 — polices the securities markets: disclosure conditions for public issues under its issue regulations, listing obligations of listed companies, insider trading, takeover bids and investor protection. The Reserve Bank of India governs banking companies, non-banking finance and payments, and runs monetary policy — the inflation lesson in the economics chapters covers that mandate. The Insurance Regulatory and Development Authority licenses and supervises insurers in the policyholders’ interest. The Competition Commission of India, under the Competition Act 2002, strikes anti-competitive agreements, punishes abuse of dominance and clears combinations — mergers above the thresholds. And adjudication is concentrated in the National Company Law Tribunal and its appellate tribunal: they hear oppression and mismanagement petitions, class actions, schemes of compromise, and — through the Insolvency and Bankruptcy Code 2016 — corporate insolvency resolution and winding up, with appeals lying upward to the Supreme Court.',
      },
      {
        kind: 'example',
        title: 'Worked Case: Salomon v. Salomon & Co.',
        steps: [
          'Facts: Aron Salomon incorporated his boot business as a company; he, his wife and five children held the seven shares, and the company issued him debentures secured over its assets in exchange for the purchase price of the business.',
          'The company failed within a year; the liquidator, acting for unsecured creditors, argued the company was a mere alias for Salomon and that his debentures were a fraud on creditors.',
          'Held: the company was validly incorporated under the statute; once registered, it is a separate legal person, and the motives of those who formed it are irrelevant.',
          'Consequence: Salomon was entitled to be repaid as a secured creditor in priority to the unsecured creditors — limited liability worked exactly as the statute promised.',
          'Legacy: the case is the root of every later rule — including the veil-lifting doctrines that confine it, since the separation it declared was never meant as a licence for fraud.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Case: The Enemy Behind the English Company',
        steps: [
          'Facts: an English-registered company asked a court to restrain a debtor from paying money owed to it; nearly all its shares were held by Germans during the First World War.',
          'The question: could payment be made to an English company whose beneficial owners were enemy aliens, when trading with the enemy was prohibited?',
          'Applied: the court looked behind the incorporation to the persons in control, and held the company effectively of enemy character.',
          'Result: Daimler Co. v. Continental Tyre & Rubber Co. (1916) — the corporate veil lifted for national security, one of the narrow, classic grounds.',
          'Contrast: Vodafone v. Union of India (2012), where a chain of foreign companies was respected as real persons despite the tax consequences — separation is the rule, piercing the exception.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Salomon principle', def: 'A duly incorporated company is a legal person separate from its members — from Salomon v. Salomon (1897).' },
          { term: 'Memorandum of association', def: 'The charter stating name, objects, liability and capital — the document that defines the company.' },
          { term: 'Articles of association', def: 'The internal constitution governing meetings, directors, transfers and dividends.' },
          { term: 'Certificate of incorporation', def: 'The Registrar’s conclusive evidence that the company exists from the date it names.' },
          { term: 'Corporate veil', def: 'The separation between company and members; lifted for fraud, facade, revenue evasion or enemy character.' },
          { term: 'Preference share', def: 'A share with a preferential right to dividend and capital repayment, typically without a vote.' },
          { term: 'Debenture', def: 'An instrument acknowledging a corporate loan; the holder is a creditor, not an owner.' },
          { term: 'Special resolution', def: 'A resolution carried by at least three times the votes cast against it, for weighty matters.' },
          { term: 'National Company Law Tribunal', def: 'The adjudicating body for oppression, class actions, schemes and insolvency resolution.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A one-person company differs from a sole proprietorship because:',
            options: [
              'it needs no registration',
              'the member’s liability is limited and the company has separate personality, with a nominee named for succession',
              'it pays no income tax',
              'it cannot employ workers',
            ],
            answer: 1,
            explain: 'Section 2(62): the OPC wraps the single member in the corporate shield — the proprietorship offers no such separation.',
          },
          {
            q: 'Which instrument creates the debt relationship with a company and priority over shareholders on winding up?',
            options: [
              'equity share',
              'preference share',
              'debenture',
              'certificate of incorporation',
            ],
            answer: 2,
            explain: 'A debenture acknowledges a loan; the holder is a creditor with priority over all shareholders on distribution.',
          },
          {
            q: 'A company altering its articles and varying shareholders’ rights generally needs:',
            options: [
              'an ordinary resolution',
              'a special resolution — three times the votes cast against',
              'only a board resolution',
              'the Registrar’s approval alone',
            ],
            answer: 1,
            explain: 'Section 114 reserves weighty matters to the special resolution, the higher grade of shareholder consent.',
          },
          {
            q: 'A listed company making its first public issue of shares is governed, in its disclosure requirements, mainly by:',
            options: [
              'the Registrar of Companies',
              'the Securities and Exchange Board of India through its issue regulations',
              'the National Company Law Tribunal',
              'the Insurance Regulatory and Development Authority',
            ],
            answer: 1,
            explain: 'Public-issue disclosure, listing obligations and investor protection are SEBI territory under the SEBI Act 1992; the registry and the tribunal play other roles.',
          },
          {
            q: 'In Daimler Co. v. Continental Tyre, the court lifted the veil because:',
            options: [
              'the company had one shareholder',
              'the shareholders were enemy aliens in wartime, making the company effectively of enemy character',
              'the company was in arrears of tax',
              'its objects clause was ultra vires',
            ],
            answer: 1,
            explain: 'National security is a classic, narrow ground for looking past incorporation to the persons in control.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the partnership and LLP lessons earlier in this chapter, which supply the two forms the company is contrasted against. Follow-ons: the taxation lesson in this chapter covers corporate tax and MAT, and the accounting chapters’ lessons on shares and debentures take over issue mechanics — prospectus, rights issues, private placement and the entries they generate — which this lesson deliberately only sketches. For how the securities market prices these instruments, pair with the lessons on supply and demand in the economics chapters.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Salomon v. Salomon: a registered company is a separate person — separate property, perpetual succession, limited liability.',
          'Birth is procedural: reserved name, memorandum of objects and capital, articles of internal governance, integrated filing, conclusive certificate.',
          'Private companies cap members at two hundred and restrict transfers; public ones need seven members and face heavier governance; one-person companies wrap sole traders in the shield.',
          'The veil lifts for fraud, facades, revenue evasion and enemy character — Daimler — but held firm in Vodafone.',
          'Equity shares vote and come last; preference shares take dividends first; debenture holders are creditors, not owners.',
          'Directors manage under section 166 fiduciary duties; shareholders meet at AGMs; special resolutions need three-to-one support.',
          'The regulator map: corporate registry under the Ministry, SEBI over markets, RBI over banking, IRDAI over insurance, the Competition Commission over combinations, and the company tribunals for adjudication.',
        ],
      },
    ],
  },
  {
    id: "law-corporate-governance",
    title: "Corporate Law: Entities, Fiduciary Duties and Boards",
    domain: "Law & Governance",
    field: "Private Law",
    branch: "Corporate Law",
    tier: "intermediate",
    concepts: [
      "Separate legal personality",
      "Limited liability and its price",
      "Choosing an entity",
      "Piercing the corporate veil",
      "Duty of care and the business judgment rule",
      "Duty of loyalty and self-dealing",
      "Boards, committees and shareholder suits",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "In 1897 the House of Lords decided a case about a small boot manufacturer. Aron Salomon had incorporated his own leather business and sold the shares mostly to himself and his family; when it collapsed, his creditors argued the “company” was a sham — just Salomon in a hat. The Lords disagreed, and Salomon v Salomon became the load-bearing precedent of commercial life: once properly formed, a company is a legal person distinct from its shareholders, however few and however closely related. Everything distinctive about modern capitalism — limited liability, tradeable shares, the separation of ownership from control, and the scandals that punctuate it — grows from that single doctrine.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Founders make an entity choice in an afternoon whose consequences run for decades — tax, personal exposure, the ability to raise capital and sell the company. Investors price governance the way lenders price collateral: the machinery of boards and fiduciary duties is what stands between their money and a manager's worst weekend. And every corporate collapse from Enron onward is a case study in a duty that failed — which is why the accounting lessons in Business & Economics and this one are companion pieces: one reads the statements, the other reads the legal machine that produces them.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Separate legal personality means the company owns its own assets, sues and is sued in its own name, and survives its shareholders' deaths — the business can be immortal. Its flip side is limited liability: a shareholder's maximum loss is the investment, full stop. Creditors price this bargain (higher interest, covenants, personal guarantees from small owners), and tort victims historically bear the residue — the doctrine's persistent moral complaint. The innovation is older than it feels: general incorporation statutes spread through the mid-nineteenth century (Britain's Acts of 1855–62, the American railroad boom), replacing case-by-case charters granted by legislatures.",
      },
      {
        kind: "para",
        text: "The entity menu trades five axes: liability, tax, formality, financing and exit. A sole proprietorship has no separation at all — unlimited personal liability, minimal ceremony, no shares to sell. A general partnership adds joint and several liability: each partner can bind all, and all answer for each — which the limited variants (LP, LLP) trim for passive or professional partners. The limited liability company gives liability protection with pass-through tax and contractual flexibility. The corporation is the financing machine: entity-level taxation (for C-corporations) in exchange for freely tradeable shares, preferred by venture capital precisely because stock options and preferred equity slot into its structure — S-corporations and LLCs pass income through to owners' returns instead.",
      },
      {
        kind: "para",
        text: "Limited liability is a bargain, not a right. Courts will pierce the corporate veil — disregard the entity and reach the owner personally — where the company is a mere alter ego: fraud, gross undercapitalisation, commingling of personal and corporate funds, absent formalities. It is rare but concentrated exactly where small businesses live, which is why the boring habits (separate accounts, real minutes, adequate capitalisation) are the actual liability shield. A bank that demands the founder's personal guarantee has simply contracted around the doctrine — the private ordering that keeps the doctrine honest.",
      },
      {
        kind: "para",
        text: "Governance is a chain of delegation. Shareholders — the residual owners — elect the board and vote on fundamental changes (mergers, charter amendments, major asset sales); the board sets strategy, hires and fires the chief executive, and monitors risk; officers execute. The default is one share, one vote; dual-class structures (founder shares with supervoting rights, as at Google since 2004 and Meta) trade democratic tidiness for founder control, and index funds' concentration — three managers holding a fifth of the S&P 500 — has made institutional stewardship and say-on-pay votes (a 2010 Dodd-Frank requirement) the field's live frontier. Since Sarbanes-Oxley (2002, after Enron and WorldCom), audit committees of independent directors and CEO/CFO certification of the accounts are structural, not optional.",
      },
      {
        kind: "para",
        text: "Directors owe fiduciary duties — the highest standard of care the law imposes on a relationship. The duty of care demands informed, good-faith decision-making, and its shield is the business judgment rule: courts will not second-guess an informed, disinterested decision, even a disastrous one — the doctrine that keeps risk-taking lawful. Smith v. Van Gorkom (Delaware, 1985) marked the boundary: a two-hour hasty sale with inadequate process was a breach. The duty of loyalty is stricter: no self-dealing, no usurping a corporate opportunity, no trading on inside information. A conflicted transaction survives only by passing entire-fairness review — fair process and fair price — or the safe harbours of disinterested-director approval or informed shareholder ratification.",
      },
      {
        kind: "para",
        text: "Enforcement runs on three tracks. Regulators police disclosure — the SEC's reporting regime is the public-market spine. Shareholders bring derivative suits: suing on behalf of the corporation itself (any recovery flows to the company, not the plaintiff) after demanding that the board act, or showing why demand would be futile. And Delaware — home to a majority of Fortune 500 incorporations — supplies the market's dispute resolution: a specialised Court of Chancery, no juries, judges who do nothing else, and precedent that everyone else reads. The state's franchise-fee business model is the open secret: competition for incorporations turned Delaware law into a product.",
      },
      { kind: "heading", text: "Key Relationships" },
      { kind: "formula", name: "Balance-sheet constraint on the shield", latex: "\\text{Assets} = \\text{Liabilities} + \\text{Equity} \\; \\Rightarrow \\; \\text{equity ratio} = \\frac{\\text{Equity}}{\\text{Assets}}", meaning: "Thin equity against business risk is the classic undercapitalisation signal courts weigh when asked to pierce the veil." },
      { kind: "formula", name: "Shareholder voting power", latex: "w_{i} = \\frac{s_{i}}{\\sum_{j} s_{j}}", meaning: "One share, one vote makes control proportional to shares outstanding — which dual-class structures deliberately break." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: two founder-owned companies face trouble — compare their legal exposure. Company A: an LLC with 2,000 of equity carrying 500,000 of operating risk, whose owner pays personal expenses from the company account and holds no meetings. Company B: a corporation whose independent board, after three months of diligence, two fairness opinions and a special committee, approved an acquisition that destroyed 20 per cent of value.",
        "Company A: a customer wins a 300,000 judgment against the LLC, which cannot pay. The creditor moves to pierce — and finds the alter-ego checklist satisfied: commingled funds, no formalities, capitalisation of 0.4 per cent of the risk undertaken. Personal liability attaches; the shield failed at its joints.",
        "Company B: shareholders sue the directors for the overpayment. The business judgment rule answers: the decision was informed, disinterested and in good faith; bad outcomes are not breaches, or no one would ever take a rational risk. The suit fails — unless the plaintiffs can show process failures, which the record contradicts.",
        "Contrast the disloyalty counterfactual: had the CEO steered the same acquisition to his brother-in-law's company at an inflated price, entire-fairness review would apply — the burden shifts to the conflicted fiduciary to prove both fair process and fair price, and disgorgement of the overpayment is the standard remedy.",
        "State the result: A's owner loses his house to formalities he skipped; B's directors walk away from a 20 per cent value loss they honestly made. Corporate law prices process — and forgiveness flows to those who documented theirs.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Startup formation: the entity choice (usually a corporation for venture money) and the first board seat are decided in a week and lived with for a decade.",
        "Investor due diligence: governance red flags — related-party transactions, no independent directors, super-voting founders — reprice the term sheet.",
        "M&A practice: deal protections and the board's Revlon duty to maximise value when selling control are where fiduciary litigation concentrates.",
        "Family businesses: succession and share-transfer restrictions decide whether the entity survives its founders.",
        "Nonprofits: the same duty of care and board machinery, with regulators and donors standing where shareholders would be.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The lethal myths: that an LLC is an impenetrable shield (formalities and capitalisation keep it intact); that shareholders own the company's assets (they own shares; the company owns the assets — a distinction that decides who may sell what); that fiduciary duty means never losing money (the business judgment rule protects honest losses — process is the standard, not outcome); that a derivative suit is a plaintiff's jackpot (recoveries go to the corporation, which is why demand-futility and fee arrangements shape the real cases); and that an officer's signature is always the company's — apparent authority binds corporations through the conduct of the very people who presume it never could.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "separate legal personality", def: "Salomon's rule: a properly formed company is a legal person distinct from its shareholders." },
        { term: "limited liability", def: "Shareholders' losses capped at their investment — a bargain creditors and counterparties price." },
        { term: "piercing the veil", def: "Disregarding the entity for fraud, commingling or undercapitalisation, imposing owner liability." },
        { term: "business judgment rule", def: "Courts defer to informed, disinterested, good-faith board decisions — even loss-making ones." },
        { term: "duty of loyalty", def: "The fiduciary's obligation to avoid self-dealing and usurped opportunities; conflicts face entire-fairness review." },
        { term: "derivative suit", def: "A shareholder's suit on the corporation's behalf, with recovery paid to the company." },
        { term: "dual-class shares", def: "Supervoting stock that decouples economic ownership from voting control." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "Salomon v Salomon (1897) is cited for…",
          options: ["directors' duty of care", "a duly formed company being a legal person separate from its shareholders", "the one-share-one-vote rule", "mandatory independent directors"],
          answer: 1,
          explain: "The House of Lords refused to collapse the company into its founder — the foundation of limited liability.",
        },
        {
          q: "Which pattern most invites veil piercing?",
          options: ["audited accounts and annual meetings", "personal expenses paid from the company account with 2,000 of equity carrying 500,000 of risk", "issuing new shares to investors", "appointing outside directors"],
          answer: 1,
          explain: "Commingling plus gross undercapitalisation plus absent formalities is the alter-ego trifecta.",
        },
        {
          q: "The business judgment rule protects directors who…",
          options: ["achieve good outcomes", "made informed, disinterested, good-faith decisions, even disastrous ones", "own a majority of the shares", "follow the CEO's recommendations"],
          answer: 1,
          explain: "Process, not outcome: the rule exists so that honest risk-taking is not litigation lottery.",
        },
        {
          q: "In a shareholder derivative suit, any monetary recovery is paid to…",
          options: ["the suing shareholder personally", "the corporation on whose behalf the suit was brought", "the directors' D&O insurer", "the regulator"],
          answer: 1,
          explain: "The corporation is the injured party — which is why standing rules (demand futility) dominate the doctrine.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none, though the accounting lessons on statements make the oversight machinery concrete. Follow with the contract lesson for the agreements this law wraps around, the tax lesson for the entity-choice arithmetic, and the employment lesson for the executives boards hire and fire. Exercise: look up any public company's proxy statement and find three facts — who owns 5 per cent or more, how many directors are independent, and what the say-on-pay vote was last year.",
      },
    ],
  },
]
