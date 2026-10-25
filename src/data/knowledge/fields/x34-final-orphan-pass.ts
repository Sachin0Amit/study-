import type { KnowledgeTopic } from '../types'

/** Expansion pass X34 (2026-10-25): the final-orphan closure pass. After X32
 *  and X33 closed every UGC NET unit, the audit stood at 2526/2530 (100%)
 *  with exactly four orphan topics: CLAT "Books and Authors" and "Recent
 *  Judgments and Legal News", JEE-Advanced Chemistry "Concepts", and the
 *  Gaokao "Set-text recitation" unit. This pass closes three of the four
 *  with new lessons; the fourth was resolved WITHOUT new content — see the
 *  curator note below.
 *
 *  Carving decisions (each verified by grep across the whole library):
 *  1. lang-books-authors-prizes — the literary prize economy and the
 *     author-work mapping craft. Zero overlap: library greps for
 *     'Booker Prize', 'Nobel Prize in Literature', 'Jnanpith' and 'Pulitzer'
 *     returned only incidental science-prize mentions (Ostrom 2009, Libby
 *     1960, exoplanet 2019/2020 physics prizes). lang-epic-tradition owns
 *     the birth-of-literature genre story (Gilgamesh-to-Odyssey); this
 *     lesson owns the modern prize map and GK mapping craft — one
 *     cross-reference line, no re-telling.
 *  2. law-reading-judgments-precedent — the judgment as a document:
 *     anatomy, ratio/obiter, precedent hierarchy, and the legal-news habit.
 *     Zero overlap: the constitutional-structure lesson in social-sciences
 *     owns Kesavananda/Maneka/Puttaswamy/Minerva as constitutional FACTS;
 *     the existing 'Legal Reasoning: Applying Principles to Facts' lesson
 *     (Legal Method field) owns principle-application. This lesson uses a
 *     deliberately different case set (Golak Nath, ADM Jabalpur, Vishaka,
 *     Shreya Singhal, Shayara Bano, Navtej Singh Johar) to teach the
 *     reading METHOD — greps for all six returned zero library hits.
 *  3. lang-classical-chinese-canon — the classical Chinese set-text canon
 *     and exact-recall craft. Zero overlap: lang-mandarin-foundations owns
 *     tones/pinyin/first phrases (spoken Mandarin); the humanities
 *     philosophy lessons own Confucian IDEAS, not the texts as a
 *     recitation canon; greps for 'Tang poetry', 'Du Fu', 'Li Bai' returned
 *     nothing. Famous lines are quoted from the canonical public-domain
 *     texts; the 受业 (not 授业) reading of the Shishuo opening was verified
 *     character-by-character against zh.wikisource during this pass.
 *  4. CURATOR NOTE (no new content): the JEE-Advanced Chemistry topic
 *     curated as "Concepts" was checked line-by-line against the official
 *     JEE (Advanced) 2026 syllabus PDF (jeeadv.ac.in), whose heading for
 *     the same five subtopics is "Basic Principles of Organic Chemistry".
 *     Every subtopic — hybridisation, sigma/pi bonds and shapes,
 *     isomerism, IUPAC nomenclature, Newman conformations of ethane and
 *     butane, empirical/molecular formulae by combustion — is already
 *     taught by the masters Chemistry library (ch8 s6 and s12, ch9 s6 and
 *     s11, ch11). Authoring a Knowledge-University lesson would duplicate
 *     it; an alias to one would be false coverage. The curated topic name
 *     was therefore corrected to the official heading so the existing
 *     masters chapters can match it — a content decision, not new content.
 *
 *  Sources read while writing (legally open):
 *  - nobelprize.org (Nobel Prize Outreach) — the Literature prize pages,
 *    read this pass: the 2024 announcement (Han Kang, first South Korean
 *    laureate), the 2025 announcement (Laszlo Krasznahorkai), the current
 *    literature landing page naming Anne Carson as the 2026 laureate, and
 *    the featured-laureate summaries (Garcia Marquez 1982, Transtromer
 *    2011).
 *  - thebookerprizes.com (Booker Prize Foundation) — the Booker Prize 2025
 *    prize-year page (David Szalay, Flesh, announced 10 November 2025 by
 *    a panel chaired by Roddy Doyle; Samantha Harvey presented as the
 *    previous year's winner) and the International Booker 2025 page
 *    (Banu Mushtaq, Heart Lamp, translated from Kannada by Deepa Bhasthi;
 *    first short-story collection to win; second Indian author after
 *    Geetanjali Shree 2022). The full-winners list page confirmed 2024
 *    Orbital (Samantha Harvey) and the 2026 shortlist timing.
 *  - pulitzer.org (The Pulitzer Prizes) — the fiction-by-category page:
 *    2025 James (Percival Everett), 2024 Night Watch (Jayne Anne
 *    Phillips); the category rule ("distinguished fiction by an American
 *    author, preferably dealing with American life") and the four
 *    two-time fiction winners are stated on the prize's own pages.
 *  - The Hindu / Times of India / Scroll (Feb 2024 and May 2025 reports) —
 *    the 58th Jnanpith (2023) to Gulzar and Jagadguru Rambhadracharya and
 *    the 59th (2024) to Vinod Kumar Shukla.
 *  - zh.wikisource.org — Han Yu, "Shishuo" (师说), read in full: the
 *    canonical opening 師者，所以傳道受業解惑也 (simplified: 师者，所以传
 *    道受业解惑也 — note 受业) and 聖人無常師 (圣人无常师) verified
 *    character-by-character. ctext.org refused automated fetches during
 *    this pass; the remaining quoted lines rest on the canonical
 *    public-domain texts (Xunzi, Qu Yuan, Bai Juyi, Du Fu, Su Shi, Li Yu,
 *    Li Shangyin, Li Qingzhao) as printed in the standard curriculum
 *    editions.
 *  - Supreme Court of India judgments (public record; indiankanoon.org
 *    mirrors the full texts) — Golak Nath v. State of Punjab (1967), ADM
 *    Jabalpur v. Shivkant Shukla (1976), Vishaka v. State of Rajasthan
 *    (1997), Shreya Singhal v. Union of India (2015), Shayara Bano v.
 *    Union of India (2017), Navtej Singh Johar v. Union of India (2018);
 *    Article 141 and Article 145(3) of the Constitution of India.
 *  - Official JEE (Advanced) 2026 syllabus PDF (jeeadv.ac.in/documents/
 *    jee-advanced-2026-syllabus.pdf) — heading "Basic Principles of
 *    Organic Chemistry" verified against the curated topic, this pass.
 */

export const x34FinalOrphanPassTopics: KnowledgeTopic[] = [
  {
    id: 'lang-books-authors-prizes',
    title: 'Books and Authors: The Prize Map from Stockholm to Delhi',
    domain: 'Languages & World Literature',
    field: 'World Literature',
    branch: 'Literary Awards & Author-Work Mapping',
    tier: 'core',
    concepts: [
      'The Nobel Prize in Literature and the Swedish Academy',
      'The Booker Prize and the International Booker',
      'The Pulitzer Prize for Fiction and its American-author rule',
      "India's Jnanpith and Sahitya Akademi awards",
      'The author-work-prize-language mapping table',
      'Translators, shared awards and half-title traps',
    ],
    words: 2045,
    readMins: 10,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'Why books-and-authors questions exist' },
      {
        kind: 'para',
        text:
          "General-knowledge papers love books-and-authors questions for a simple reason: literary prizes are curated lists. A prize jury reads hundreds of books and hands the public a shortlist of a handful, each stamped with a year, a language and a judging rationale. That makes the prize economy the most efficient map of what a well-read person should recognise that exists anywhere in culture. The questions are not really about trivia for its own sake — they test whether you carry a structured map of modern writing: who wrote what, which honour marked it, which language it reached English through. The name of the game is organised recall, not scattered memorisation.",
      },
      {
        kind: 'para',
        text:
          "The map has four axes that every question draws on: author, work, prize and language, with year as the fifth, loosest axis. A question can start from any axis and ask for any other: a title and you supply the writer, a writer and you supply their most famous book, a prize and you supply this year's winner, a foreign title and you supply the translator who carried it over. Everything in this lesson is arranged so that you can build that map axis by axis — first the big international prizes, then India's own honours, then the shelf of public-affairs books that rounds out the picture.",
      },
      { kind: 'heading', text: 'The Nobel Prize in Literature' },
      {
        kind: 'para',
        text:
          "The oldest and most famous of them all: Alfred Nobel's will of 1895 set aside a prize for the person who produces in the field of literature the most outstanding work in an idealistic direction, and the Swedish Academy in Stockholm has awarded it annually since 1901. The Academy announces its decision each October, and the citation — the brief official reason read out with the name — is itself worth knowing, because questions often quote it. The prize goes for a body of work as often as for a single title, which is why the safest answer to the question of what a writer won for is their most famous book, not necessarily the one the Academy cited.",
      },
      {
        kind: 'para',
        text:
          "A spine of laureates anchors the map. Rabindranath Tagore won in 1913 — the first non-European laureate — for Gitanjali, his own English versions of his Bengali poems. Gabriel Garcia Marquez won in 1982 for novels and short stories in which, in the Academy's words, the fantastic and the realistic are combined in a richly composed world of imagination — One Hundred Years of Solitude is the book behind that citation. Toni Morrison won in 1993, bringing Beloved into the canon. Each of these is one author paired with one emblematic work; a dozen such pairs cover most of what is ever asked.",
      },
      {
        kind: 'para',
        text:
          "Keep the recent laureates current, because current-affairs papers skew recent. In 2024 the prize went to the South Korean writer Han Kang — the first laureate from her country — whose breakthrough novel The Vegetarian had already won the International Booker in 2016, a neat two-prize link to hold in memory. In 2025 the Academy honoured the Hungarian author Laszlo Krasznahorkai, celebrated for novels of long, slow, single-sentence vision. In 2026 the laureate is the Canadian poet and essayist Anne Carson. The habit that keeps this current: each October, read one laureate citation and file it under author, country, language.",
      },
      { kind: 'heading', text: 'The Booker Prize and its international twin' },
      {
        kind: 'para',
        text:
          "The Booker Prize, awarded since 1969, goes to the best work of long-form fiction written in English and published in the United Kingdom or Ireland; the winner takes fifty thousand pounds. Its roll of honour doubles as a map of the modern novel: Salman Rushdie's Midnight's Children (1981) was later named the Booker of Bookers; Arundhati Roy won in 1997 with The God of Small Things; Kiran Desai followed in 2006 with The Inheritance of Loss and Aravind Adiga in 2008 with The White Tiger; Hilary Mantel won twice, for Wolf Hall (2009) and Bring Up the Bodies (2012); Bernardine Evaristo's Girl, Woman, Other took the 2019 prize.",
      },
      {
        kind: 'para',
        text:
          "The recent file: in 2024 the prize went to Samantha Harvey's Orbital, a short novel following six astronauts around the Earth; in 2025 to David Szalay's Flesh, announced in London on 10 November by a panel chaired by Roddy Doyle, the first former winner to chair a Booker jury. The prize year runs ahead of the calendar: the longlist appears in summer, the shortlist in autumn (the 2026 shortlist was announced in October, with the winner due in November), and the ceremony lands in November. Scanning each shortlist once a year is the single cheapest way to stay current.",
      },
      {
        kind: 'para',
        text:
          "Since 2016 the foundation has also awarded the International Booker for a single book of fiction translated into English, splitting the fifty thousand pounds equally between the author and the translator — a structural fact that itself becomes a question. Two Indian-linked results stand out: Geetanjali Shree's Tomb of Sand became the first Hindi-language winner in 2022, and in 2025 Banu Mushtaq's Heart Lamp, translated from Kannada by Deepa Bhasthi, became the first short-story collection to win, making Mushtaq the second Indian author of the prize's modern era. Note how the axes interlock: author, language, translator, year — four cells filled by one headline.",
      },
      { kind: 'heading', text: 'The Pulitzer Prize for Fiction' },
      {
        kind: 'para',
        text:
          "The Pulitzers are administered by Columbia University in New York and are really a family of twenty-three awards across journalism, letters, drama and music. The fiction prize carries a precise, quotable rule: it recognises distinguished fiction by an American author, preferably dealing with American life — the word preferably has been argued about for a century. Four writers have won it twice: Booth Tarkington, William Faulkner, John Updike and Colson Whitehead. Recent winners for the map: Jayne Anne Phillips's Night Watch (2024) and Percival Everett's James (2025), a novel that retells Adventures of Huckleberry Finn from the escaped man's own point of view.",
      },
      { kind: 'heading', text: "India's literary honours" },
      {
        kind: 'para',
        text:
          "The Jnanpith Award, given by the Bharatiya Jnanpith trust since 1965, is India's highest literary honour. It may be awarded to an Indian writer working in any of the languages listed in the Eighth Schedule of the Constitution, and the first laureate was the Malayalam poet G. Sankara Kurup. The recent holders: the 58th Jnanpith, for the year 2023, went jointly to the Urdu poet and filmmaker Gulzar and to the Sanskrit scholar Jagadguru Rambhadracharya, and the 59th, for 2024, to the Hindi novelist Vinod Kumar Shukla. Note the two habits worth copying: the award is sometimes shared, and it is announced for one year and conferred in the next.",
      },
      {
        kind: 'para',
        text:
          "The Sahitya Akademi — India's National Academy of Letters, founded in 1954 — runs the widest prize system: annual awards in each of the twenty-four languages it recognises, plus prizes for translation and special honours for languages outside the main list. Where the Jnanpith crowns one career a year, the Akademi awards honour the whole spread of Indian writing, which makes the Sahitya Akademi Award the right answer whenever a question names a book in an Indian language without an international connection. The two institutions are distinct; confusing them is the classic error.",
      },
      { kind: 'heading', text: 'The public-affairs shelf' },
      {
        kind: 'para',
        text:
          "Books-and-authors questions draw heavily on non-fiction about law, politics and public life, so keep a small shelf of pairs whose attributions are permanent public record. Granville Austin wrote The Indian Constitution: Cornerstone of a Nation (1966), still the standard account of how the document was made. M.C. Chagla, judge and later foreign minister, wrote the memoir Roses in December; Fali S. Nariman's Before Memory Fades is the other great advocate's autobiography. Amartya Sen's The Argumentative Indian collects his essays on Indian public reasoning, and Ramachandra Guha's India After Gandhi is the standard single-volume history of the republic since 1947. Five pairs, all stable for decades — safe marks.",
      },
      {
        kind: 'callout',
        title: 'The mapping-table method',
        tone: 'insight',
        text:
          "Keep one table with five columns — author, work, prize, language, year — and add a row whenever a headline mentions a book. Any question that starts from one column becomes answerable from another. Ten minutes a month maintaining the table beats an hour of random quizzing before the paper.",
      },
      { kind: 'heading', text: 'The craft: building the map' },
      {
        kind: 'example',
        title: 'Three axes, one week of headlines',
        steps: [
          'Pick one prize family (say the Bookers) and fill rows for the last two years: Orbital (Harvey, 2024, English), Flesh (Szalay, 2025, English).',
          'Add the international twin for the same year: Heart Lamp (Mushtaq, translated by Bhasthi, Kannada, 2025) — give the translator her own column.',
          'Link across families: The Vegetarian appears twice (International Booker 2016, Nobel 2024 to Han Kang) — cross-family links are the strongest memory anchors.',
          'Finish with India: Gulzar and Rambhadracharya (Jnanpith for 2023), Vinod Kumar Shukla (Jnanpith for 2024).',
        ],
      },
      {
        kind: 'para',
        text:
          "Watch the classic traps. Half-titles: questions exploit near-misses, so learn the exact shape of a title — Tomb of Sand, not any plausible variant. Shared awards: the Jnanpith for 2023 had two recipients, and a question asking who won needs both names. Retronyms: Booker of Bookers is a later honorary label for Midnight's Children, not a separate prize year. Translator credit: since 2016 the International Booker belongs half to the translator, so an answer that names only the author is half wrong. And conferral drift: prizes announced for one year are often handed over the next, so record the announcement year and note the ceremony separately.",
      },
      {
        kind: 'terms',
        items: [
          { term: 'laureate', def: "A person formally honoured with a prize, from the laurel wreath of ancient custom; Nobel laureate is the standard phrasing." },
          { term: 'citation', def: "The official one-sentence reason a jury reads out with a prize; quoting it is the strongest form of an answer." },
          { term: 'shortlist', def: "The final candidate list from which a winner is chosen; the Booker announces one each autumn, the longlist earlier in the year." },
          { term: 'Eighth Schedule', def: "The constitutional list of India's recognised languages; the Jnanpith is open to writers in any of them." },
          { term: 'translation credit', def: "The named translator of a work; for translated-fiction prizes the translator is part of the winning entry, not an afterthought." },
          { term: 'retronym', def: "A later label applied backwards, such as Booker of Bookers for the best novel of the prize's early decades." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The 2024 Nobel Prize in Literature made Han Kang the first laureate from which country, and which of her novels had earlier won the International Booker?',
            options: [
              'Japan; The White Book',
              'South Korea; The Vegetarian',
              'China; Human Acts',
              'South Korea; Greek Lessons',
            ],
            answer: 1,
            explain:
              'Han Kang is the first South Korean Nobel laureate in literature, and The Vegetarian (translated by Deborah Smith) won the International Booker in 2016 — the two-prize link this lesson anchors.',
          },
          {
            q: 'Who won the International Booker Prize 2025, and what was historic about the winning book?',
            options: [
              'Geetanjali Shree; first Hindi winner',
              'Banu Mushtaq and Deepa Bhasthi; first short-story collection to win',
              'Samantha Harvey; first space novel to win',
              'David Szalay; first Hungarian-British winner',
            ],
            answer: 1,
            explain:
              'Heart Lamp by Banu Mushtaq, translated from Kannada by Deepa Bhasthi, was the first short-story collection to win the International Booker (2025); the prize money was split author-translator.',
          },
          {
            q: 'The 58th Jnanpith Award (for 2023) was shared between which two writers?',
            options: [
              'Vinod Kumar Shukla and Gulzar',
              'Gulzar and Jagadguru Rambhadracharya',
              'Amartya Sen and Ramachandra Guha',
              'G. Sankara Kurup and M.C. Chagla',
            ],
            answer: 1,
            explain:
              'The 58th Jnanpith went jointly to the Urdu poet Gulzar and the Sanskrit scholar Jagadguru Rambhadracharya; Vinod Kumar Shukla received the 59th (2024), and G. Sankara Kurup was the first (1965).',
          },
          {
            q: 'Which pair of book and author is correct on the public-affairs shelf?',
            options: [
              'India After Gandhi — Amartya Sen',
              'Roses in December — Granville Austin',
              'The Indian Constitution: Cornerstone of a Nation — Granville Austin',
              'The Argumentative Indian — M.C. Chagla',
            ],
            answer: 2,
            explain:
              "Austin wrote the 1966 standard on the constitution's making; Guha wrote India After Gandhi, Chagla wrote Roses in December, and Sen wrote The Argumentative Indian — the other three options swap the pairs.",
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'Build one five-column map — author, work, prize, language, year — and feed it with headlines rather than flash-card lists.',
          'Nobel: Swedish Academy, since 1901; know the Tagore 1913 anchor and keep the latest October citation current.',
          'Booker: English fiction published in the UK or Ireland since 1969; International Booker since 2016 splits the purse with the translator.',
          "Pulitzer fiction: American author, American life; Jnanpith: India's highest literary honour under the Eighth Schedule; Sahitya Akademi: the academy of twenty-four languages.",
          'Beware half-titles, shared awards, retronyms and conferral-year drift — the traps are structural, not random.',
        ],
      },
    ],
  },
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
  {
    id: 'lang-classical-chinese-canon',
    title: 'The Classical Chinese Canon: Famous Lines and Exact Recall',
    domain: 'Languages & World Literature',
    field: 'Mandarin Chinese',
    branch: 'Classical Canon & Recitation',
    tier: 'intermediate',
    concepts: [
      'Set-text recitation: accurate written production, not recognition',
      'The prose canon: Xunzi, Han Yu, Su Shi',
      'The verse canon: Qu Yuan to Li Qingzhao',
      'Character-level traps: homophones, look-alikes, dropped particles',
      'Bidirectional context-chain recall',
      'The read-copy-recite-write practice cycle',
    ],
    words: 1612,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'What recitation papers actually ask' },
      {
        kind: 'para',
        text:
          "The set-text recitation paper tests one skill with total strictness: producing a famous line from a canonical text, character-perfect, in written Chinese. The grading rule is unforgiving — a line with one wrong character, one added character or one dropped character scores nothing, however well the rest is written. This is why recitation rewards a different kind of study from reading comprehension. Comprehension forgives approximation; production punishes it. The paper's questions usually supply one half of a couplet or passage and ask for the other, so the unit of memory is not the text but the line-to-line join: given the previous line, produce the next, and sometimes the reverse.",
      },
      {
        kind: 'para',
        text:
          "Why these texts, and why by heart? The canon — Xunzi's essay on learning, Han Yu's defence of teachers, Su Shi's red-cliff rhapsody, the great Tang and Song poems — is the shared cultural memory that educated Chinese speakers quote to each other. A well-placed 名句 lands like a proverb: it compresses an argument into a line everyone recognises. Memorising the canon is therefore not an arbitrary hurdle; it is how a reader joins the conversation that has been running for two thousand years. And because the lines are fixed, the paper can test them with absolute objectivity — which is exactly what makes the character-level craft below worth mastering.",
      },
      { kind: 'heading', text: 'The prose canon' },
      {
        kind: 'para',
        text:
          "Start with Xunzi's 劝学 (Encouraging Learning), the classic argument that learning remakes people the way craft remakes material. Its most-quoted lines are the dye-vat image — 青，取之于蓝，而青于蓝；冰，水为之，而寒于水 (blue is drawn from the indigo plant yet bluer than the plant; ice is made of water yet colder than water) — the steps argument, 故不积跬步，无以至千里；不积小流，无以成江海 (without piling up half-steps you cannot reach a thousand li; without gathering small streams you cannot form river and sea) — and the carving couplet, 锲而舍之，朽木不折；锲而不舍，金石可镂 (carve and give up, rotten wood will not cut; carve and persist, metal and stone can be engraved). Note the trap in the last pair: 舍 (give up) and 镂 (engrave) are the two characters papers love to swap.",
      },
      {
        kind: 'para',
        text:
          "Han Yu's 师说 (On Teachers) opens with the definition every student eventually writes: 师者，所以传道受业解惑也 — a teacher is one who transmits the Way, passes on learning and untangles confusion. The character trap is built into the canonical text itself: it is 受业 with 受 (receive), not the modern-looking 授业 with 授 (bestow) — the received text uses 受, and this was verified character-by-character against the Wikisource edition during the writing of this lesson. Two more joins from the same essay recur constantly: 是故无贵无贱，无长无少，道之所存，师之所存也 (where the Way is, there the teacher is) and the compact 圣人无常师 (sages have no constant teacher).",
      },
      {
        kind: 'para',
        text:
          "Su Shi's 赤壁赋 (Rhapsody on the Red Cliff) owns the riverbank imagery: 清风徐来，水波不兴 (a clear breeze comes gently; the water barely ripples), 白露横江，水光接天 (white dew spans the river; water-light meets sky), and the great reflection on time, 逝者如斯，而未尝往也 (it flows away like this, yet has never gone). Close with the consolation passage, 惟江上之清风，与山间之明月 (only the clear breeze on the river and the bright moon between the hills), which the essay then spends lines claiming for anyone willing to receive them. The recitation traps here are the quiet particles — 之，而，也 — which are short, unstressed, and exactly what an unpracticed hand drops.",
      },
      { kind: 'heading', text: 'The verse canon' },
      {
        kind: 'para',
        text:
          "Qu Yuan's 离骚 (Li Sao) contributes the line that heads every anthology of perseverance: 路漫漫其修远兮，吾将上下而求索 (the road is long and far; I will search high and low) — the particle 兮 marks it as Chu-style verse and is the character most often dropped. Li Bai's 蜀道难 gives the refrain 蜀道之难，难于上青天 (hard is the road to Shu — harder than climbing the blue sky), and his 行路难 turns the same despair into resolve: 长风破浪会有时，直挂云帆济沧海 (a time will come to ride the long wind and break the waves; I will hoist straight sail and cross the vast sea — mind the 沧 in 济沧海, the dark-blue sea, not its homophone). Du Fu's 登高, the model seven-character regulated poem, supplies 无边落木萧萧下，不尽长江滚滚来 (boundless falling leaves rustle down; the endless Yangtze rolls on) — 萧萧 is the sound of leaves, not the river character 潇.",
      },
      {
        kind: 'para',
        text:
          "Bai Juyi's 琵琶行 owns the empathy line of the whole tradition: 同是天涯沦落人，相逢何必曾相识 (both of us drifters at the sky's edge; meeting, why need we have known each other before?), with the earlier portrait 千呼万唤始出来，犹抱琵琶半遮面 (a thousand calls, ten thousand summons, before she comes out, still holding the pipa half across her face). Li Shangyin's 锦瑟 opens with its riddle — 锦瑟无端五十弦，一弦一柱思华年 — and closes in the word papers adore: 只是当时已惘然 (only that then it was already 惘然, lost in bewilderment) — 惘, with the heart radical, not the look-alike. Li Yu's 虞美人 asks the question every paper asks: 问君能有几多愁？恰似一江春水向东流 (how much sorrow? just one river of spring water flowing east). Su Shi's 念奴娇·赤壁怀古 opens with 大江东去，浪淘尽，千古风流人物 (the great river runs east; its waves have washed away the heroes of a thousand ages), and Li Qingzhao's 声声慢 begins in the fourteen characters no one forgets once written correctly: 寻寻觅觅，冷冷清清，凄凄惨惨戚戚 (searching, seeking; cold, clear; grief upon grief upon sorrow).",
      },
      {
        kind: 'callout',
        title: 'The five traps that cost marks',
        tone: 'warn',
        text:
          "Homophone swaps: 沧海 not 仓海; 萧萧 not 潇潇 for falling leaves. Near-miss pairs: 受业 in 师说, not 授业. Dropped particles: 兮 in Li Sao, 也 and 而 in prose. Look-alikes: 惘然 with the heart radical. And character components: 镂 in 金石可镂 carries the metal radical. Every one of these is a full line lost to a single stroke.",
      },
      { kind: 'heading', text: 'The craft of exact recall' },
      {
        kind: 'para',
        text:
          "Exact recall is trainable, and the method is older than the papers: understand, then bind, then write. Understand first — a line memorised as sound is fragile, but a line memorised as an image (blue dye bluer than the plant; a river of sorrow flowing east) survives years. Bind next: practise the join in both directions, given the previous line produce the next, and given the next reproduce what came before, because papers set both forms. Then write: recognition is not production, and only handwriting from memory exposes the strokes your eye forgives. Finish each session by writing the full line unprompted and checking character by character against the text — the check is where the traps above get caught.",
      },
      {
        kind: 'para',
        text:
          "Space the practice. The forgetting curve is steepest in the first days, so a line learned on Monday must be rewritten Wednesday, next Monday, and a month out — four short sessions beat one long one. Group lines by trap type in review: one round of homophones (沧/仓，萧/潇，青/清), one of particles (兮，也，而，其), one of look-alikes (惘，镂，戚). And rehearse aloud with the meaning in mind: the fourteen characters of 声声慢's opening are almost impossible to mis-order once the triple rhythm of the reduplication is in the ear — 寻寻觅觅 (two), 冷冷清清 (two), 凄凄惨惨戚戚 (three) — sound, then silence, then sorrow.",
      },
      {
        kind: 'example',
        title: 'A recall card for the Encouraging Learning set',
        steps: [
          'Image: a vat of indigo — write 青，取之于蓝，而青于蓝 and underline the two 蓝 characters, one plant and one colour.',
          'Join: from dye to steps — 故不积跬步，无以至千里；不积小流，无以成江海; check the pair 跬/流 and the parallel 无以 twice.',
          'Join: from steps to carving — 锲而舍之，朽木不折；锲而不舍，金石可镂; circle 舍 and 镂 and note the metal radical.',
          'Cover the card, write all three lines from the images alone, then verify character by character — any wrong stroke sends the line back to the next session.',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: '名篇名句', def: "Famous passages and lines — the fixed canon from which recitation questions are drawn." },
          { term: '上句 / 下句', def: "The previous and following line of a couplet or passage; papers prompt one and ask for the other, in both directions." },
          { term: '兮', def: "The Chu-verse particle in Li Sao's lines; short, unstressed, and the character most often dropped in writing." },
          { term: '律诗', def: "The regulated verse form of eight lines; Du Fu's Climbing High is its model, and its parallel couplets are recitation favourites." },
          { term: '通假字', def: "A borrowed character in the received classical text — the reason Shishuo's 受业 keeps 受 where modern usage expects 授." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Complete the join from Xunzi: 故不积跬步，无以至千里；不积小流，＿＿＿',
            options: [
              '无以成江海',
              '无以至江海',
              '无以到江海',
              '不成江海',
            ],
            answer: 0,
            explain:
              'The parallel repeats 无以 in both halves — 无以至千里，无以成江海 — and the verb is 成 (form), matching the small streams that form river and sea.',
          },
          {
            q: 'In the canonical text of 师说, the opening definition 师者，所以传道＿＿解惑也 contains which characters?',
            options: [
              '授业 — the modern form with the bestow radical',
              '受业 — the received text uses 受',
              '授業 — the traditional-script form',
              '受業 in simplified script',
            ],
            answer: 1,
            explain:
              'The received text reads 传道受业解惑也 with 受 (receive); verified against the Wikisource edition, and it is the classic character trap of this passage.',
          },
          {
            q: '大江东去，浪淘尽，千古风流人物 opens which work, and who wrote it?',
            options: [
              '赤壁赋 — Su Shi',
              '念奴娇·赤壁怀古 — Su Shi',
              '虞美人 — Li Yu',
              '蜀道难 — Li Bai',
            ],
            answer: 1,
            explain:
              'The line opens Su Shi\'s ci poem Nian Nu Jiao: Meditation on the Past at Red Cliff; the rhapsody Fu on the Red Cliff begins instead with 清风徐来，水波不兴.',
          },
          {
            q: 'Which line is written with the correct characters?',
            options: [
              '无边落木潇潇下，不尽长江滚滚来',
              '长风破浪会有时，直挂云帆济仓海',
              '无边落木萧萧下，不尽长江滚滚来',
              '路曼曼其修远兮，吾将上下而求索',
            ],
            answer: 2,
            explain:
              'Falling leaves rustle 萧萧 (the plant-sound character), the sea of 济沧海 is 沧, and the standard curriculum form of Li Sao is 路漫漫其修远兮 — the other three each hide one wrong character.',
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'Recitation is production: one wrong, added or dropped character fails the line, so train the hand, not just the eye.',
          'Learn the joins both ways — previous line to next and next back to previous — because papers set both directions.',
          'Anchor every line to an image and a rhythm before memorising the characters; sound alone fades, meaning does not.',
          'Drill the five trap types separately: homophones, near-misses, dropped particles, look-alikes, and radical components.',
          'Space the practice across days and rewrite each line unprompted at every session — the character-by-character check is where marks are saved.',
        ],
      },
    ],
  },
]
