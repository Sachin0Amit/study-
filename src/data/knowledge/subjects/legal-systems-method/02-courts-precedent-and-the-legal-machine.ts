/**
 * Knowledge Universe — Legal Systems & Method — Chapter 02: Courts, Precedent & the Legal Machine
 * 1 lesson · ~2,238 words
 * field: Legal Method
 * legacy sources: x34-final-orphan-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Courts, Precedent & Legal News]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 law-reading-judgments-precedent — Reading a Judgment: Precedent, Ratio and the Legal-News Habit
 */
import type { KnowledgeTopic } from '../../types'

export const legalSystemsMethodCh02: KnowledgeTopic[] = [
  {
    id: 'law-reading-judgments-precedent',
    title: 'Reading a Judgment: Precedent, Ratio and the Legal-News Habit',
    domain: 'Law & Governance',
    field: 'Legal Method',
    branch: 'Courts, Precedent & Legal News',
    tier: 'intermediate',
    concepts: [
      'Anatomy of a judgment: headnote, facts, issues, holding, operative order',
      'Ratio decidendi versus obiter dicta',
      'Article 141 and the precedent hierarchy',
      'Constitution benches and bench strength',
      'How judgments meet legislation: the Vishaka two-step',
      'Review and curative petitions in the news cycle',
    ],
    words: 2238,
    readMins: 11,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'Why judgments, not headlines' },
      {
        kind: 'para',
        text:
          "A court speaks only through its written judgments, and every other voice — the press conference, the trending summary, the editorial — is a paraphrase of that document. General-knowledge and legal-reasoning papers have learned to harvest from the originals: passages in these papers are frequently built from a real case's facts and holding, and the questions reward readers who know what a judgment is made of. Reading the document rather than the headline is therefore not a professional affectation; it is the examinable skill. The headline says who won. The judgment says what rule now exists, why, and how far it stretches — and only the second part lets you answer a well-built question.",
      },
      {
        kind: 'para',
        text:
          "There is also a current-affairs reason. Legal news follows a small, learnable vocabulary — bench, ratio, overruled, review, curative — and most reporting assumes it. Once the vocabulary is in place, a month of headlines turns from noise into a running commentary on the legal system: which questions the Supreme Court is being asked, how it answers them, and how parliament responds. This lesson builds that vocabulary and then practices it on six landmark judgments chosen to show the reading method at work.",
      },
      { kind: 'heading', text: 'The anatomy of a judgment' },
      {
        kind: 'para',
        text:
          "A reported judgment has a stable shape. It opens with a cause title — the parties' names — followed by the citation, the library address by which the case is found again, in formats such as AIR 2018 SC 1 or a volume of the Supreme Court Cases, with neutral citations now adding a court-issued number. Then come the bench (the judges deciding, listed by name), a headnote summarising what was decided, the facts, the issues the court frames for decision, the rival arguments, and the analysis — the longest part, where each issue is argued to a conclusion. It closes with the holding and the operative orders: the specific directions, declarations and reliefs. Everything before the operative order is reasoning; the operative order is what the world must obey.",
      },
      {
        kind: 'para',
        text:
          "Judges do not always agree, and the disagreement is part of the document. A concurring opinion reaches the same result by a different route; a dissenting opinion argues for the other side's result and often for the other side's future — dissents are written, their authors say, for the day the law turns. When a question quotes a passage from a case, one skill is to notice whose voice it is: a majority holding, a concurrence refining it, or a dissent that never became law at all. Confusing a strong dissent with the holding is one of the classic errors in legal-reading passages.",
      },
      {
        kind: 'callout',
        title: 'Read like a lawyer',
        tone: 'path',
        text:
          "Professionals read a judgment in this order: citation and bench first (what level of court, how many judges), then the headnote, then the operative order — and only then the reasoning. The habit takes two minutes and prevents the most common misreading: mistaking a paragraph of argument for the decision.",
      },
      { kind: 'heading', text: 'Ratio and obiter: what binds' },
      {
        kind: 'para',
        text:
          "Inside the reasoning, one element does the legal work. The ratio decidendi — the reason for deciding — is the rule the court actually needed to reach its result on the facts before it. Everything else said in passing, on facts not before the court or on questions the case did not require deciding, is obiter dictum: interesting, persuasive, sometimes prophetic, but not the decision. Only the ratio binds later courts. A well-built question often tests exactly this line — it quotes a sweeping remark from a judgment and asks whether a later court had to follow it. The answer turns on whether the remark was the reason for deciding or a rider on the way.",
      },
      {
        kind: 'para',
        text:
          "In India the binding force of a Supreme Court ratio is written into the Constitution itself. Article 141 declares that the law declared by the Supreme Court is binding on all courts within India — note the word declared: it is the rule as articulated by the court, not every sentence it writes. The hierarchy runs downward from there: high court rulings bind the subordinate courts of their own territory, and where two high courts differ, each rule within its own region until the Supreme Court settles the point. The Supreme Court is not rigidly bound by its own past decisions — it may overrule itself when convinced an earlier ruling was wrong — but it does so openly and rarely, and the act of overruling is always news.",
      },
      {
        kind: 'para',
        text:
          "Bench strength matters because it signals authority. Most appeals are heard by division benches of two or three judges. Under Article 145(3), a case involving a substantial question of law as to the interpretation of the Constitution must be heard by a bench of at least five judges — a constitution bench — and larger benches bind smaller ones. When a news report stresses that a case was heard by five, seven or even thirteen judges, that number is doing real work: it tells you the court considered the question fundamental, and it tells you how hard the next court would have to work to unsettle the answer. Thirteen judges decided the most famous of all such cases — the basic-structure judgment, taught as doctrine in the constitutional-structure lesson — and the number is part of the story.",
      },
      { kind: 'heading', text: 'The canon, read as method' },
      {
        kind: 'para',
        text:
          "The landmark cases that appear in passages fall into a handful of recurring patterns, and the fastest way to learn the patterns is to watch them happen. Six judgments below were chosen because each displays one pattern cleanly — a judgment answered by amendment, by legislation, by overruling, by reading-down. (The constitutional-structure lesson in this library already owns the basic-structure line of cases as constitutional doctrine; the cases here are deliberately different ones, read for method.)",
      },
      {
        kind: 'list',
        items: [
          "The judgment answered by amendment — Golak Nath v. State of Punjab (1967): the Supreme Court held that parliament could not amend the fundamental rights at all. Parliament responded with the Twenty-fourth Amendment asserting full amending power, which set the stage for the compromise the basic-structure doctrine later struck. Read it for the pattern: a court's constitutional holding can provoke a constitutional amendment, and the dialogue may take years.",
          "The judgment undone by amendment and overruling — ADM Jabalpur v. Shivkant Shukla (1976): during the Emergency, the majority held that with Article 21 suspended there was no enforceable right to liberty left for courts to protect. The Forty-fourth Amendment later ensured Article 21 could never again be suspended, and in 2017 a larger bench expressly overruled the decision — the rare case of a judgment being repudiated twice, once by the people's representatives and once by the court itself.",
          "The judgment that stood in for a missing law — Vishaka v. State of Rajasthan (1997): with no legislation protecting working women from sexual harassment, the Supreme Court read India's international commitments into fundamental rights and issued binding guidelines for workplaces until parliament legislated. The Protection of Women from Sexual Harassment Act arrived in 2013, largely building on those guidelines — the clearest example of the two-step from judicial guidelines to statute.",
          "The judgment that read a law down — Shreya Singhal v. Union of India (2015): the Court struck down Section 66A of the Information Technology Act, which criminalised offensive online messages, drawing the classic line between discussion and advocacy (protected) and incitement (punishable). Read it for the technique: the court did not rewrite the law; it removed the part the Constitution could not carry.",
          "The judgment followed by a new statute — Shayara Bano v. Union of India (2017): instant triple talaq was held manifestly arbitrary under Article 14 and set aside, and parliament codified the outcome two years later in the Muslim Women (Protection of Rights on Marriage) Act, 2019. The sequence matters in questions: the practice became unlawful by judgment in 2017, an offence by statute in 2019.",
          "The judgment that supplies the vocabulary — Navtej Singh Johar v. Union of India (2018): reading down Section 377 of the Indian Penal Code to decriminalise consensual relations between adults, the majority reasoning leaned on dignity, privacy and constitutional morality — phrases that now anchor passages on equality questions. Read it to collect the interpretive vocabulary, not just the outcome.",
        ],
      },
      {
        kind: 'para',
        text:
          "Notice what the six have in common: none of them is remembered merely for who won. Each is remembered for what it changed — a text of the Constitution, a section of a statute, a workplace norm — and the change is always visible in the operative order or in the law that followed. That is the habit to carry into any passage: find the holding, find the order, and only then decide what the case means. Where an examination passage reprints a judgment's facts and asks for the outcome, the same discipline applies — map the facts onto the issues, identify the rule the court needed, and resist the pull of outside knowledge about what the law became later.",
      },
      { kind: 'heading', text: 'Following legal news' },
      {
        kind: 'para',
        text:
          "A judgment becomes news for a handful of reasons worth listing, because each maps to a question type. Bench size: a five-judge or larger bench signals a constitutional question. Overruling: the report that an earlier decision no longer holds good — check which earlier case and which paragraph said so. Doctrinal shift: a new test or standard replacing an old one. Directions to government: the operative order compelling an authority to act, report or desist. And the not-quite-over vocabulary: a losing party may seek a review within the window Article 137 allows, and, in the narrowest of circumstances, a curative petition thereafter — so a headline that a petition will be filed means the case is not necessarily finished. The professional reflex is the same in every case: read the operative order before believing the summary.",
      },
      {
        kind: 'example',
        title: 'Reading a headnote in four steps',
        steps: [
          'Citation and bench: which court, how many judges, who wrote the leading opinion — the strength of what follows depends on this.',
          'Headnote: one paragraph, someone\'s summary of the whole; read it to form a question, not a conclusion.',
          'Holding: locate the exact point the court decided on the facts — the ratio — and mark any sweeping remarks you cannot trace to the decision as possible obiter.',
          'Operative order: list what the court actually directed or declared; if a headline disagrees with the order, the order wins.',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'ratio decidendi', def: "The rule of law the court needed to decide the case; the element of a judgment that binds later courts." },
          { term: 'obiter dictum', def: "A remark made in passing, on facts not required for the decision; persuasive at most, never binding." },
          { term: 'stare decisis', def: "The policy of standing by decided cases — the practice that makes precedent stable across the court hierarchy." },
          { term: 'constitution bench', def: "A bench of five or more judges, required under Article 145(3) for substantial questions of constitutional interpretation." },
          { term: 'overruled', def: "The status of an earlier decision rejected by a later, competent bench; distinct from reversed, which describes an appellate outcome in the same case." },
          { term: 'curative petition', def: "A petition of last resort, entertained only to cure a gross miscarriage of justice after review has failed." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which part of a judgment states the rule that binds later courts?',
            options: [
              'The headnote',
              'The ratio decidendi',
              'Any sweeping remark in the analysis',
              'The concurring opinion',
            ],
            answer: 1,
            explain:
              'Only the ratio — the rule necessary to the decision — binds; the headnote is a summary, passing remarks are obiter, and concurrences bind only to the extent the result is the same.',
          },
          {
            q: 'Article 141 of the Constitution provides that the law declared by the Supreme Court is binding on:',
            options: [
              'all courts within India',
              'all courts and all citizens directly',
              'only the high courts',
              'courts within the territorial jurisdiction of each high court',
            ],
            answer: 0,
            explain:
              'Article 141 binds all courts within India; it operates on courts, and its effects on citizens arrive through the decisions of those courts or through legislation that follows.',
          },
          {
            q: 'In Vishaka v. State of Rajasthan (1997), the Supreme Court issued binding guidelines principally because:',
            options: [
              'parliament had asked it to legislate',
              'no statute then protected women from workplace harassment, and international commitments read into fundamental rights supplied the standard',
              'the law commission had drafted a bill',
              'an earlier judgment required workplace rules',
            ],
            answer: 1,
            explain:
              'Vishaka filled a legislative vacuum by reading India\'s international commitments into fundamental rights and issuing guidelines to operate until legislation — which arrived in 2013 — could be enacted.',
          },
          {
            q: 'ADM Jabalpur (1976) is remembered as a cautionary precedent chiefly because:',
            options: [
              'it expanded free speech too far',
              'its central holding on suspended liberty was later repudiated by constitutional amendment and expressly overruled',
              'it created the curative petition',
              'it was decided by a two-judge bench',
            ],
            answer: 1,
            explain:
              'The majority held there was no enforceable right to liberty while Article 21 stood suspended; the Forty-fourth Amendment removed that possibility, and a larger bench overruled the decision in 2017.',
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'A judgment is a structured document: citation, bench, headnote, facts, issues, analysis, holding, operative order — read the order before the headline.',
          'Ratio binds, obiter does not; Article 141 makes the law declared by the Supreme Court binding on all courts in India.',
          'Bench strength is signal: five or more judges means a substantial constitutional question, and larger benches bind smaller ones.',
          'Learn the patterns — amendment answers judgment, legislation follows guidelines, larger benches overrule smaller — and the case canon organises itself.',
          'Review and curative petitions are the vocabulary of a case not yet finished; never assume finality from a first-instance report.',
        ],
      },
    ],
  },
]
