import type { SectionContent } from '../library'

// ============================================================================
// English Advanced — master lesson content (10 sections, Chapters 6–8)
// Full SectionContent lessons for the advanced layer of the English &
// Comprehension book (bookId 'english-complete'): Advanced Grammar & Usage
// (conditionals and the subjunctive, inversion and emphasis, determiners and
// quantifiers, phrasal verbs and collocations), Vocabulary Architecture
// (Latin and Greek roots, prefixes and suffixes, word families and context
// clues) and Reading & Writing at Length (long-passage strategy, cloze and
// paragraph completion, précis and cohesive writing). Companion to
// english-rw.ts: each lesson teaches the advanced or length-format layer,
// referencing the earlier chapters rather than re-explaining them.
// ============================================================================

export const englishAdvancedContent: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'eng-a1-s1',
    readingTime: 9,
    prerequisites: [
      'Tense forms and agreement discipline (Chapter 3.2, Chapter 5.1)',
      'Clause relationships: subordinator + main clause (Boundaries, 3.1)',
    ],
    intro: 'Chapter 3 polishes tense and agreement inside sentences; the advanced assessment goes further and tests the full **conditional machine**: zero, first, second, third and MIXED conditionals, the were-subjunctive, and the inverted shorthand of formal prose ("Had the vote succeeded..."). Every item is a pattern-recognition test with a time reference hidden inside it. Find the time, and the formula chooses itself.',
    objectives: [
      'Classify any conditional by the TIME reality of each clause, including mixed conditionals',
      'Deploy the were-subjunctive and the mandative subjunctive in formal constructions',
      'Transform conditionals into inverted form (Had I known / Were she to / Should you need)',
      'Distinguish the connector family: unless, provided, so long as, but for, otherwise',
    ],
    concepts: [
      {
        term: 'The four-quadrant frame',
        kind: 'notation',
        statement: '**Zero** — if + present, present, for general truths ("if the pH drops, the shell dissolves"); **first** — if + present, will/may + base, for real futures ("if the grant is renewed, the dig will continue"); **second** — if + past, would + base, for unreal presents ("if the sensor were cheaper, the team would deploy a hundred"); **third** — if + past perfect, would have + past participle, for unreal pasts ("if the manuscript had survived, we would have known the ending").',
        detail: 'The tenses are lies told on purpose: the second conditional uses past forms to talk about NOW, and the third uses past perfect to talk about a past that never happened. Never trust the tense — trust the time reference. "If she owned the building" is about today, whatever "owned" looks like. This deliberate backshift is the system\u2019s engine, and every trap is built on reading the tense literally.'
      },
      {
        term: 'Mixed conditionals',
        kind: 'insight',
        statement: 'The two clauses may sit in different times: a **past–present** mix ("If the council had approved the metro line, the traffic would be tolerable today" — past unreal condition, present unreal result) and a **present–past** mix ("If he were more careful, he would not have deleted the backups" — standing habit, past consequence).',
        detail: 'Diagnosis protocol: find the time word ("today", "now", "last year", "at the time") or infer it from context, assign each clause its own time, and only then select verb forms. Assessments love planting "would have" inside the if-clause ("If they would have asked...") — that form NEVER belongs in a conditional clause; the condition takes the past perfect, full stop.'
      },
      {
        term: 'The subjunctive: were and mandative',
        kind: 'definition',
        statement: 'The **were-subjunctive** uses "were" for all persons in hypotheticals and wishes ("If I were the registrar", "I wish the trail were marked", "she acts as if the deadline were optional"); the **mandative subjunctive** uses the base verb after verbs and nouns of demand, suggestion and necessity — "the board insisted that the audit **be** independent", "her proposal that the gallery **stay** open late".',
        detail: 'The mandative subjunctive is invisible in most verbs ("that he leave" merely looks plural) and shows itself only where the base form differs from the indicative — most famously with be. The classic error item swaps in "is" or "should be": both are wrong in strict formal English once a trigger is present (insist, demand, propose, require, suggest, urge, essential, vital). Fixed relics survive elsewhere: "be that as it may", "suffice it to say", "far be it from me".'
      },
      {
        term: 'Inversion and the connector family',
        kind: 'method',
        statement: 'Formal prose can drop "if" by fronting the auxiliary: **Had** + subject + past participle (= third), **Were** + subject + to + base (= second), **Should** + subject + base (= tentative first). The alternatives to if: **unless** (= except if), **provided (that) / so long as / on condition that** (= only if), **but for** + noun (= if it had not been for), **otherwise** (= if not for what was just said).',
        detail: 'Two cautions the assessment exploits: (1) once "if" is dropped by inversion, "would" must NOT appear in the inverted clause — "Had the vote succeeded, the estate would have been sold", never "Had the vote would succeed"; (2) "unless" resists counterfactuals — "She would have failed unless the teacher had intervened" is substandard, so reach for "if ... not" or "Had the teacher not intervened".'
      }
    ],
    examples: [
      {
        title: 'Error-spotting a mixed conditional',
        problem: 'Text: "If the archivists would have catalogued the fragments in 1998, the auction house would sell them as a single collection now." Where is the error? Choices: (A) would have catalogued (B) would sell (C) as a single collection (D) no error',
        steps: [
          { label: 'Step 1', text: 'Read the times: the condition belongs to 1998 (past); the result clause carries "now" (present). This is a mixed past–present conditional.' },
          { label: 'Step 2', text: 'Fix the condition: past-unreal conditions take the past perfect — "had catalogued". "Would have" is never legal inside an if-clause, so (A) is the error.' },
          { label: 'Step 3', text: 'Check the result clause: a present-unreal result takes "would + base" — "would sell ... now" is exactly right, so (B) is innocent.' },
          { label: 'Step 4', text: 'Meaning check: "(sold) as a single collection" is an idiomatic adverbial — (C) is camouflage, not error. Answer: (A).' }
        ],
        result: '(A) — the if-clause must read "had catalogued"; counterfactual conditions never take "would".'
      },
      {
        title: 'Building the inverted conditional',
        problem: 'Rewrite without "if": "If the regulator were to approve the merger, the two carriers would share terminal space." Choices: (A) Were the regulator to approve the merger, the two carriers would share terminal space. (B) Was the regulator to approve the merger, the two carriers would share terminal space. (C) Were the regulator approve the merger, the two carriers would share terminal space. (D) Had the regulator to approve the merger, the two carriers would share terminal space.',
        steps: [
          { label: 'Step 1', text: 'Classify the original: "were to approve ... would share" = second conditional, unreal or tentative present-future. The inversion for "were to" is Were + subject + to + base.' },
          { label: 'Step 2', text: '(B) fails at once — the subjunctive inversion demands "were", never "was".' },
          { label: 'Step 3', text: '(C) drops the infinitive marker: the "were to" frame needs "to approve". (D) welds the third-conditional auxiliary "Had" onto a present-tense meaning — a time mismatch.' },
          { label: 'Step 4', text: '(A) keeps every piece: Were + regulator + to approve, with the main clause untouched. Answer: (A).' }
        ],
        result: '(A) "Were the regulator to approve the merger, the two carriers would share terminal space."'
      }
    ],
    keyTakeaways: [
      'Read each clause\u2019s TIME, not its tense — backshifted forms are disguises, and mixed conditionals are diagnosed by time words.',
      '"Would" never enters an if-clause; counterfactual conditions take the past perfect.',
      'Hypothetical "were" for all persons; after insist/demand/propose/suggest + that, use the base form.',
      'Inversion (Had/Were/Should) replaces "if" and forbids "would" in the same clause; unless = except if, provided = only if, but for = if it had not been for.',
    ],
    quiz: [
      {
        q: '"If the bridge ___ in the 1960s, the city ___ a toll today." (mixed past–present)',
        options: ['had been built / would collect', 'were built / would have collected', 'was built / will collect', 'had been built / would have collected'],
        answer: 0,
        explanation: 'Step 1: The condition is past ("in the 1960s") → past perfect "had been built". Step 2: The result is present ("today") → "would collect". Step 3: The past–past pairing in (D) ignores "today"; the pairing in (B) crosses the times backwards. Step 4: Answer: had been built / would collect.'
      },
      {
        q: 'Which sentence correctly uses the mandative subjunctive?',
        options: ['The judge ordered that the file was sealed', 'The judge ordered that the file be sealed', 'The judge ordered that the file is sealed', 'The judge ordered the file to being sealed'],
        answer: 1,
        explanation: 'Step 1: "Order" is a mandative trigger → that + base verb. Step 2: The base form supplied by "is" is "be" — hence "be sealed". Step 3: (A) and (C) use indicative tenses where the subjunctive is required; (D) is not a grammatical construction. Step 4: Answer: "that the file be sealed".'
      },
      {
        q: 'Complete with inversion: "___ the pilot not aborted the landing, the aircraft would have overrun the runway."',
        options: ['If', 'Had', 'Were', 'Should'],
        answer: 1,
        explanation: 'Step 1: The clause shows "not aborted" — a past participle with no auxiliary. Step 2: Third-conditional inversion supplies the auxiliary by fronting it: "Had". Step 3: "Were" pairs with "to + base"; "Should" builds a tentative first conditional. Step 4: Answer: Had the pilot not aborted...'
      },
      {
        q: '"But for the registrar\u2019s intervention, the exhibit would have been auctioned." The opening phrase is equivalent to',
        options: ['if the registrar intervenes', 'if the registrar had not intervened', 'unless the registrar intervenes', 'provided the registrar intervenes'],
        answer: 1,
        explanation: 'Step 1: "But for + noun" = "if it had not been for + noun". Step 2: It standardly attaches to counterfactual results like "would have been auctioned". Step 3: (A) and (D) carry "only if" meanings; (C) is except-if. Step 4: Answer: if the registrar had not intervened.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.2
  {
    sectionId: 'eng-a1-s2',
    readingTime: 9,
    prerequisites: [
      'Subject–auxiliary inversion as seen in questions',
      'Clause boundaries and comma logic (Boundaries, 3.1)',
    ],
    intro: 'Standard English word order is subject–verb–object, and ninety-five percent of sentences obey it. The assessment\u2019s hardest structure items live in the other five percent: **negative inversion** ("Never have the findings been replicated"), cleft sentences, emphatic do and fronting. These are not decorations — they are grammar with a meaning contract, and they carry strict rules that wrong answers quietly violate.',
    objectives: [
      'Build negative and restrictive inversions with do-support where no auxiliary exists',
      'Master so/such ... that, its fronted form, and the no sooner ... than pairings',
      'Aim emphasis with it-clefts and wh-clefts to match a stated rhetorical goal',
      'Apply the restrictions: emphatic do never doubles be or another auxiliary; pronoun subjects refuse locative inversion',
    ],
    concepts: [
      {
        term: 'Negative adverbial inversion',
        kind: 'definition',
        statement: 'When a negative or restrictive adverbial is fronted, subject and auxiliary invert exactly as in a question: **Never have I** seen such a specimen; **Rarely does** the committee overrule its chair; **Not once did** she mention the fee; **Under no circumstances may** visitors touch the prints; **No sooner had** the auction closed **than** the forgery emerged; **Hardly/Scarcely ... when**.',
        detail: 'Only auxiliaries invert — if the clause has none, do/does/did must be imported ("Never did the two labs share data"). The most-tested pairings: no sooner ... THAN (never "when"), hardly/scarcely ... WHEN (never "than"). Restrictive adverbials trigger the same flip, with the inversion landing in the MAIN clause: "Only after the audit did the losses surface", "Not until 1994 was the code cracked".'
      },
      {
        term: 'so/such ... that and degree fronting',
        kind: 'notation',
        statement: '**so + adjective/adverb + that** ("The drift was so gradual that no one noticed"); **such (+ a/an) + adjective + noun + that** ("It was such a gradual drift that no one noticed"); quantity forms so many / so much / so few / so little ... that. Fronted for style, the pattern inverts with the copula: "**So gradual was the drift** that no one noticed."',
        detail: 'The exam\u2019s favourite confusion is so versus such before nouns: "so rapid a decline" and "such a rapid decline" are BOTH correct — "so + adjective + a/an + noun" is the formal twin. But "so a rapid decline" and "such rapid a decline" are broken. Count the adjective: adjective alone → so; noun phrase present → such (or the so + adjective + a/an + noun formula).'
      },
      {
        term: 'Cleft sentences',
        kind: 'method',
        statement: 'A **cleft** splits one clause into two to aim the emphasis: the **it-cleft** singles out one element — "It was the 1929 survey (not the 1931 one) that revealed the fault"; the **wh-cleft** (pseudo-cleft) fronts the spotlight — "What the excavation lacked was a control site"; "All she wanted was a retraction."',
        detail: 'Test the focus by exclusion: "It was the intern who spotted the error" is false for every non-intern — that exclusion is the cleft\u2019s meaning. The assessment grades this spotlight logic: a goal like "emphasise the survey, not the data" is satisfied only by putting "the survey" in the cleft slot. In wh-clefts the verb typically agrees with the complement that follows — "What the study lacked WAS a control site", singular complement, singular verb.'
      },
      {
        term: 'Emphatic do and fronting',
        kind: 'insight',
        statement: '**Emphatic do** stresses a positive assertion or answers a doubt: "The data DO support the hypothesis", "She did file the appeal". **Fronting** moves an object, participle or place phrase to the head for emphasis — "This clause I can accept"; "Gone are the subsidies"; "At the end of the corridor stood a bronze door" (locative inversion, full verb before subject).',
        detail: 'Two restrictions generate most wrong answers: emphatic do only appears where do-support could carry a question — never with be as a main verb, never doubling another auxiliary ("It did be cold" is impossible); and locative inversion keeps pronoun subjects in place — "Down came the rain" but "Down it came" (never "Down came it"). Fronting is judged for logic as well as grammar: the fronted element must be the intended spotlight.'
      }
    ],
    examples: [
      {
        title: 'Repairing a negative inversion',
        problem: 'Text: "Not until the letters were published in 1972 the full scale of the correspondence became known." Choices: (A) No change (B) Not until the letters were published in 1972 did the full scale of the correspondence become known (C) Not until the letters were published in 1972 the full scale of the correspondence did become known (D) Not until the letters were published in 1972 became known the full scale of the correspondence',
        steps: [
          { label: 'Step 1', text: 'Spot the trigger: "Not until ..." fronts a restrictive adverbial, so the MAIN clause must invert — auxiliary before subject.' },
          { label: 'Step 2', text: 'The main clause owns no auxiliary, so do-support is imported: "did ... become known".' },
          { label: 'Step 3', text: '(A) leaves declarative order after the trigger — the classic violation. (C) uses emphatic "did", which never follows a fronted negative. (D) inverts the lexical verb itself, which happens only in locative inversion.' },
          { label: 'Step 4', text: 'Answer: (B).' }
        ],
        result: '(B) "Not until the letters were published in 1972 did the full scale of the correspondence become known."'
      },
      {
        title: 'Choosing the cleft that matches the emphasis',
        problem: 'Goal: "stress that the method — not the data — deserves credit for the discovery." (A) The method and the data both contributed to the discovery. (B) It was the method, rather than the data, that made the discovery possible. (C) What made the discovery possible was a fortunate alignment of data. (D) The discovery was made possible by patient work.',
        steps: [
          { label: 'Step 1', text: 'The goal names a contrast: method credited, data denied — the sentence must carry an exclusion spotlight.' },
          { label: 'Step 2', text: '(A) awards credit to both and misses the contrast; (D) is grammatical but spotlightless; (C) attributes everything to the data — the exact reversal.' },
          { label: 'Step 3', text: 'The it-cleft "It was the method ... that ..." puts "the method" in the focus slot, and "rather than the data" performs the denial the goal demands.' },
          { label: 'Step 4', text: 'Answer: (B).' }
        ],
        result: '(B) — the it-cleft aims the emphasis exactly where the goal requires.'
      }
    ],
    keyTakeaways: [
      'Fronted negatives and restrictives force question-style inversion in the main clause; no auxiliary → import do/does/did.',
      'No sooner ... than; hardly/scarcely ... when — the pairings are tested constants.',
      'so + adjective; such + noun phrase; "so rapid a decline" is the formal twin of "such a rapid decline".',
      'Clefts aim emphasis; emphatic do never doubles be or another auxiliary; pronoun subjects refuse locative inversion.',
    ],
    quiz: [
      {
        q: '"No sooner ___ the doors than the crowd surged forward."',
        options: ['the shopkeeper had opened', 'had the shopkeeper opened', 'the shopkeeper opened', 'did the shopkeeper open'],
        answer: 1,
        explanation: 'Step 1: "No sooner" fronts a negative → inversion. Step 2: The clause already owns the auxiliary "had", so it simply fronts: "had the shopkeeper opened". Step 3: No do-support is needed because "had" is available; (A) keeps declarative order; (C) loses the past perfect that "than" requires. Step 4: Answer: had the shopkeeper opened.'
      },
      {
        q: 'Which sentence is CORRECT?',
        options: ['Down came it, all at once', 'Never the team has played better', 'Under no circumstances you should share the code', 'Only after the audit did the losses surface'],
        answer: 3,
        explanation: 'Step 1: Pronoun subjects stay before the verb — "Down it came", so (A) breaks. Step 2: (B) lacks the flip: "Never has the team played better". Step 3: (C) misses its inversion: "should you share". Step 4: (D) inverts correctly after the restrictive "only after" phrase.'
      },
      {
        q: 'To spotlight the surprising finder in "the intern (not the auditors) located the error," write',
        options: ['The intern located the error, not the auditors', 'It was the intern who located the error', 'What the intern located was an error', 'There was an error the intern located'],
        answer: 1,
        explanation: 'Step 1: The spotlight target is a PERSON — it-clefts excel at singling out actors. Step 2: (A) asserts but does not focus; (C) spotlights the THING found, not the finder; (D) buries the intern in an existential. Step 3: "It was the intern who located the error" excludes every other candidate by construction. Step 4: Answer: (B).'
      },
      {
        q: '"So exhaustive ___ that no archive in the region matched it." Complete with inversion.',
        options: ['the catalogue was', 'was the catalogue', 'the catalogue had been', 'did the catalogue seem'],
        answer: 1,
        explanation: 'Step 1: A fronted "so + adjective" triggers copular inversion: verb before subject. Step 2: The main verb is "was": "So exhaustive was the catalogue that...". Step 3: (A) refuses the flip the fronting demands; (C) and (D) import meanings the sentence never licenses. Step 4: Answer: was the catalogue.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.3
  {
    sectionId: 'eng-a1-s3',
    readingTime: 10,
    prerequisites: [
      'Articles and agreement essentials (Chapter 5.1)',
      'Countable vs uncountable nouns (Chapter 3.2)',
    ],
    intro: 'Chapter 5.1 taught where "a" and "the" go; the advanced layer asks what they **mean** — the difference between "The violin is hard to master" (the instrument as a class) and "A violin is hard to master" (any specimen) — and then pushes into quantifier nuance: each versus every, few versus a few, "far fewer" versus "many less". These distinctions are exactly where top-band items draw their wrong answers.',
    objectives: [
      'Distinguish generic, specific and abstract reference when choosing articles',
      'Apply the each/every and all/whole distinctions under two- and three-member sets',
      'Hear the stance flip in a few/few and a little/little, and the meaning of "quite a few"',
      'Grade quantifiers correctly: far fewer delays, much less friction, twice as many sites',
    ],
    concepts: [
      {
        term: 'Generic, specific and abstract reference',
        kind: 'definition',
        statement: 'The articles carry three reading modes: **generic the** classes a kind by its prototype ("The smartphone reshaped journalism"); **generic a** means "any one specimen" ("A smartphone is useless without power"); **plural/zero article** presents the class as individuals ("Smartphones are everywhere"); and a determiner before an abstract noun creates a **specific instance** ("a love of languages" — one person\u2019s particular love, not love in general).',
        detail: 'Switches between these modes are silent error zones: "The honeybee pollinates crops, and keepers who tend them are scarce" breaks because "the honeybee", a singular generic, cannot be retrieved by "them" — the pronoun forces "honeybees" or "it". Likewise "the love of music" (love in general) differs from "her love of music" (one instance): the assessment tests whether you can hear which one the sentence means.'
      },
      {
        term: 'each, every, all and whole',
        kind: 'insight',
        statement: '**each** views members one at a time and works for TWO or more ("each hand", "each of the two routes"); **every** fuses members into a totality and needs three or more ("every seat" in a stadium — never "every" of a pair); **all the + noun** and **the whole + noun** both total a mass, but the whole demands a singular countable ("the whole city", never "the whole districts") while all accepts plurals and masses ("all the districts", "all the water").',
        detail: 'Particles expose the difference: "every" blends with almost and nearly ("almost every entry"), "each" does not; "each" pairs with separately and individually. Two recycled idioms: "every" + time words ("every other week", "every few months") and the whole/all symmetry in time phrases — "all day" = "the whole day". Note the agreement ripple: "every one of the files WAS intact", but "a few of the files WERE missing".'
      },
      {
        term: 'some, any, few and little',
        kind: 'method',
        statement: '**some** lives in affirmatives, offers and expected-yes questions; **any** lives in negatives, open questions and conditionals — and in affirmatives it means "whichever you like" ("take any seat"). **a few / a little** affirm existence ("a few objections" = some exist); **few / little** deny significance ("few objections" = almost none). The article flips the STANCE, not the quantity.',
        detail: 'Intensifiers sharpen the stance: "only a few" approaches "few" (negative), while "quite a few" and "not a few" mean MANY — a top-band trap, since "quite" usually shrinks. Same logic with little: "a little progress" heartens, "little progress" disheartens. On error-spotting items, ask: does the sentence want to concede a quantity (a few) or dismiss one (few)? Then let the surrounding rhetoric decide.'
      },
      {
        term: 'Graded quantifiers',
        kind: 'definition',
        statement: 'Quantifiers grade like adjectives: **far fewer / far more**, **many more**, **much less / much more**, **slightly fewer**; countable heads take **fewer, many, a large number of**; uncountable heads take **less, much, a great deal of**; proportional forms include **half the**, **twice as many ... as**, **three times the rate of**.',
        detail: 'The intensifier must match the quantifier\u2019s countability: "much fewer" is substandard — the standard pairings are far fewer and many fewer for countables, much less and far less for masses. One accepted exception: "less than ten miles", "less than twenty dollars" — a distance or sum behaves as a single measure. A comparative quantifier still agrees with its head: "far fewer reports" (countable) versus "far less reporting" (mass).'
      }
    ],
    examples: [
      {
        title: 'Hearing the reference switch',
        problem: 'Text: "The honeybee is a cornerstone of commercial agriculture, and the keepers who tend ___ are, increasingly, a scarce profession." Choices: (A) it (B) them (C) her (D) its',
        steps: [
          { label: 'Step 1', text: 'Identify the antecedent: "The honeybee" — a singular GENERIC noun standing for its whole species.' },
          { label: 'Step 2', text: 'A singular generic must be retrieved by a singular pronoun: "it". "Them" would require the plural generic: "Honeybees are ..., and keepers who tend them".' },
          { label: 'Step 3', text: '"Her" imports personhood the sentence never claims; "its" is possessive and leaves the verb stranded without an object.' },
          { label: 'Step 4', text: 'Answer: (A) it.' }
        ],
        result: '(A) "the keepers who tend it" — generic the with a singular pronoun throughout.'
      },
      {
        title: 'Grading a quantifier',
        problem: 'Text: "Because the archive holds ___ medieval charters than the national library, visiting scholars routinely underestimate its collection." Choices: (A) far fewer (B) far less (C) many less (D) a great deal fewer',
        steps: [
          { label: 'Step 1', text: 'Classify the noun: "charters" is a countable plural, so the comparative quantifier must be built on fewer.' },
          { label: 'Step 2', text: 'Screen the intensifier: "far fewer" is the standard graded pairing. "Far less" and "many less" point an uncountable form at a countable noun; "a great deal fewer" fuses a mass intensifier (a great deal of) with a countable quantifier.' },
          { label: 'Step 3', text: 'Sense check: the sentence concedes a real deficit, so a graded rather than absolute comparative fits "routinely underestimate".' },
          { label: 'Step 4', text: 'Answer: (A) far fewer.' }
        ],
        result: '(A) "holds far fewer medieval charters than the national library".'
      }
    ],
    keyTakeaways: [
      'Generic the (prototype), generic a (any specimen) and plural (individuals) make three different claims; pronoun chains must match the mode.',
      'each = two-plus, one at a time; every = three-plus, as a totality; the whole needs a singular countable.',
      'The article flips stance: a few / a little concede, few / little dismiss; "quite a few" means many.',
      'Grade quantifiers by countability: far fewer delays, much less friction, twice as many sites.',
    ],
    quiz: [
      {
        q: '"___ of the two candidates was interviewed twice." Which quantifier is INADMISSIBLE?',
        options: ['Each', 'Either', 'Every', 'Neither'],
        answer: 2,
        explanation: 'Step 1: The set has exactly two members. Step 2: Each, either and neither all operate on two-item sets. Step 3: Every requires three or more and resists "of the + small number" constructions. Step 4: Answer: every.'
      },
      {
        q: 'In "The negotiators raised few objections to the final draft," the determiner signals',
        options: ['several objections existed', 'almost no objections of consequence', 'exactly two objections', 'objections were expected'],
        answer: 1,
        explanation: 'Step 1: "Few" without an article is the negative-of-significance quantifier. Step 2: It concedes that objections exist but dismisses their weight. Step 3: "A few objections" would assert a modest but real number — the article carries the stance. Step 4: Answer: almost no objections of consequence.'
      },
      {
        q: 'Which sentence is standard?',
        options: ['There were much fewer delays this quarter', 'There was far less congestion this quarter', 'The queue had much fewer people today', 'We received many less complaints'],
        answer: 1,
        explanation: 'Step 1: Match the quantifier to the noun\u2019s countability. Step 2: "Congestion" is a mass noun → "far less" is the graded form. Step 3: Delays, people and complaints are countable → "far fewer", never "much fewer" or "many less". Step 4: Answer: far less congestion.'
      },
      {
        q: 'Correct: "The trustees liquidated ___ estate in a single year."',
        options: ['the whole', 'the all', 'whole the', 'all whole'],
        answer: 0,
        explanation: 'Step 1: whole follows its determiner: "the whole estate". Step 2: "The all" and "whole the" scramble the required order. Step 3: "All the estate" survives only in older or regional usage; the assessment\u2019s standard modern sequence is determiner + whole + singular noun. Step 4: Answer: the whole.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.4
  {
    sectionId: 'eng-a1-s4',
    readingTime: 10,
    prerequisites: [
      'Idioms as fixed expressions (Chapter 5.4)',
      'Verb + preposition patterns from everyday reading',
    ],
    intro: 'Chapter 5.4 treats idioms as fixed expressions to be recognised; phrasal verbs are the **system** underneath — particles with portable meanings, strict separability rules, and collocation families that explain why English says "conduct research" but never "make research". Master the patterns and unfamiliar combinations become decodable; ignore them, and the vocabulary list never ends.',
    objectives: [
      'Read particles by their meaning cores and decode unfamiliar phrasal verbs',
      'Apply the separability law: pronoun objects force the split; three-word phrasals never split',
      'Recognise the four collocation types and spot a broken partnership inside perfect grammar',
      'Choose delexical make / do / take / have / get by their semantic cores',
    ],
    concepts: [
      {
        term: 'Particle meaning families',
        kind: 'insight',
        statement: 'Particles carry reusable cores: **up** = completion or consumption (finish up, use up, sum up), **out** = visibility, exhaustion, distribution (point out, find out, run out, hand out), **off** = departure, disconnection, postponement (set off, take off, call off, cut off), **on** = continuation or contact (carry on, hold on), **down** = reduction, collapse, record (turn down, break down, note down), **over** = transfer and review (hand over, go over, take over).',
        detail: 'Six particles, six cores — and the payoff is guessability: "The committee put the decision off until March" reads as off = departure in time = postponement. When a phrasal resists the core ("fall through" = fail), treat it as a true idiom, Chapter 5 territory; when it obeys, decode it. Assessments exploit the systematic cases precisely because most candidates memorise lists instead of patterns.'
      },
      {
        term: 'Separability',
        kind: 'definition',
        statement: 'Transitive phrasal verbs split around a full noun ("call the event off" or "call off the event") but MUST split around a pronoun ("call it off" — never "call off it"); **inseparable** phrasals keep noun and pronoun alike behind the particle ("run into a friend" / "run into her"); **three-word phrasal verbs** (put up with, look forward to, catch up with, cut down on) are always inseparable; intransitive phrasals (show up, break down) take no object at all.',
        detail: 'The pronoun test is absolute on error-spotting items: "look it up" survives; "look up it" does not — no exceptions in Standard English. Style effects: with a LONG noun object, separation is clumsy ("look the registrar\u2019s number up" → prefer "look up the registrar\u2019s number"); with short nouns, either order works. Learn the three-word set as vocabulary in its own right — "put up with the noise", never "put the noise up with".'
      },
      {
        term: 'The four collocation types',
        kind: 'definition',
        statement: 'A **collocation** is a conventional partnership between words, stronger than free combination but weaker than an idiom: **verb + noun** (conduct research, commit a crime, pose a threat, reach a verdict), **adjective + noun** (heavy rain, bitter dispute, key role), **adverb + adjective** (deeply concerned, fully aware, bitterly cold), **adverb + verb** (flatly refuse, categorically deny). The grammar of a broken collocation is perfect — only the partnership is wrong.',
        detail: 'That is what makes collocations a distinct test surface: "make research" breaks no rule of syntax, yet no report ever says it. Distractors substitute grammatical neighbours — "strong rain", "do a crime", "highly awake". So learn chunks, not words: not "research" alone but "conduct / carry out / undertake research"; not "rain" alone but "heavy / torrential rain"; not "denial" alone but "categorically deny".'
      },
      {
        term: 'Delexical verbs',
        kind: 'method',
        statement: 'The light verbs **make, do, take, have, get** shed their own meaning and lend grammar to a noun: make = create or produce (make a suggestion, make an attempt, make progress, make amends), do = perform work and activities (do research, do harm, do business, do a favour), take = accept or undertake (take action, take responsibility, take effect, take place), have = experience or hold (have an effect, have a look, have an argument, have difficulty), get = acquire or become (get permission, get a chance).',
        detail: 'Predict instead of memorise: creation outcomes → make; activity nouns → do; transfers and undertakings → take; experiences → have; acquisitions and changes → get. Beware the pairs that split: "make an exception" but "take exception (to)" — same noun, opposite verbs, opposite meanings. And while both "make a decision" and "take a decision" are standard (the second common in official British and Indian English), "do a decision" is wrong everywhere: the partnership, not the verb, is the knowledge.'
      }
    ],
    examples: [
      {
        title: 'Decoding an unfamiliar phrasal',
        problem: 'Text: "Facing supply shortages, the regulator has put ___ its ruling on airline mergers until the spring session." Choices: (A) off (B) out (C) up (D) down',
        steps: [
          { label: 'Step 1', text: 'Read the particle slot semantically: the ruling moves AWAY from today, into the spring session — displacement in time.' },
          { label: 'Step 2', text: 'Check the cores: off = departure or displacement (here in time); out = visibility or issue ("put out the bulletin"); up = appearance or increase ("put up a notice"); down = record or suppression ("put down the revolt").' },
          { label: 'Step 3', text: 'Only "off" carries displacement: its cousin "call off" cancels; "put off" postpones. The phrase "until the spring session" confirms a delay, not a cancellation.' },
          { label: 'Step 4', text: 'Answer: (A) off.' }
        ],
        result: '(A) "has put off its ruling on airline mergers until the spring session."'
      },
      {
        title: 'Spotting the broken partnership',
        problem: 'Text: "The inquiry did several far-reaching recommendations, and the ministry has vowed to take prompt action on them." Which change corrects the sentence? Choices: (A) Replace "did" with "made" (B) Replace "far-reaching" with "far-reached" (C) Replace "take" with "make" (D) Replace "prompt" with "prominent"',
        steps: [
          { label: 'Step 1', text: 'Audit each partnership: recommendations collocate with make, issue or accept — never "do".' },
          { label: 'Step 2', text: '"Did several recommendations" breaks no syntax rule, but do takes activity nouns (do research, do work); recommendations are produced → make.' },
          { label: 'Step 3', text: 'Check the rest: "take prompt action" is a perfect collocation, so (C) would break it; "far-reaching recommendations" and "prompt action" are both standard.' },
          { label: 'Step 4', text: 'Answer: (A) made several far-reaching recommendations.' }
        ],
        result: '(A) — recommendations are made (or issued), never done.'
      }
    ],
    keyTakeaways: [
      'Particles carry portable cores — up = completion, out = visibility/exhaustion, off = departure/postponement, down = reduction/record.',
      'Pronoun objects force separation ("look it up"); three-word phrasals never split ("put up with it").',
      'Collocations are partnerships, not grammar: conduct research, heavy rain, flatly refuse — learn the chunk.',
      'Delexical make / do / take / have / get follow semantic cores: creation → make, activity → do, undertaking → take, experience → have.',
    ],
    quiz: [
      {
        q: 'Which sentence breaks the separability rule?',
        options: ['The board called the meeting off', 'The board called off the meeting', 'The board called it off', 'The board called off it'],
        answer: 3,
        explanation: 'Step 1: "Call off" is a separable phrasal. Step 2: Full-noun objects may sit on either side of the particle. Step 3: Pronoun objects must sit between verb and particle — "called it off". Step 4: "Called off it" violates the pronoun rule; it is the broken one.'
      },
      {
        q: '"The archive ran ___ of climate records during the migration." The particle\u2019s core meaning is',
        options: ['visibility', 'exhaustion', 'departure', 'continuation'],
        answer: 1,
        explanation: 'Step 1: "Run out of" = have no more of. Step 2: The out core here is exhaustion — the supply is used up. Step 3: Visibility belongs to "point out / find out"; departure to "set off / call off"; continuation to "carry on". Step 4: Answer: exhaustion.'
      },
      {
        q: 'Which collocation is standard?',
        options: ['strong rain', 'heavy rain', 'big rain', 'large rain'],
        answer: 1,
        explanation: 'Step 1: Adjective + noun partnerships are fixed by convention. Step 2: English rains are heavy or torrential. Step 3: "Strong" partners with wind, tea and opinions; "big" and "large" with objects and quantities. Step 4: Answer: heavy rain.'
      },
      {
        q: 'Complete with the correct delexical verb: "The commission is expected to ___ a final ruling within weeks."',
        options: ['do', 'make', 'have', 'get'],
        answer: 1,
        explanation: 'Step 1: A ruling is a produced outcome. Step 2: Creation outcomes take make — make a ruling, make a decision. Step 3: Do takes activities (do work); have takes experiences; get takes acquisitions. Step 4: Answer: make a final ruling.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: 'eng-a2-s1',
    readingTime: 9,
    prerequisites: [
      'A working vocabulary bank (Chapter 5.3)',
      'Familiarity with common prefixes (un-, re-, dis-)',
    ],
    intro: 'Vocabulary lists fail because they treat every word as new. But English is a **compounding system**: a large share of academic English descends from Latin and Greek units that repeat endlessly. Learn twenty roots and you hold keys to thousands of words — including the ones the assessment builds unfamiliar contexts around. This is decoding, not memorisation.',
    objectives: [
      'Decompose any Latinate word into prefix + root + suffix and reassemble its literal sense',
      'Command twenty high-frequency roots and their major derivatives',
      'Exploit the Greek layer that dominates scientific and technical vocabulary',
      'Treat every root decode as a hypothesis that context confirms or overrides',
    ],
    concepts: [
      {
        term: 'The root is the load-bearing unit',
        kind: 'definition',
        statement: 'A word is **prefix + root + suffix**: the prefix aims the meaning (direction, negation, time), the **root** carries the core (spect = look, dict = say, fer = carry), and the suffix fixes the part of speech (-ion → noun, -ous → adjective). Strip the known affixes and an unfamiliar word collapses into familiar parts: in·spect·ion = a looking-into.',
        detail: 'Roots survive spelling drift, so learn the family spellings together: ject/jac (throw) powers reject, eject, project and conjecture; cede/ceed/cess (go, yield) powers precede, proceed and excess. Latin roots often double with Greek cousins — Latin vid/vis (see) pairs with Greek -opsy (autopsy = seeing with one\u2019s own eyes), so a single meaning may wear two etymological uniforms in one passage.'
      },
      {
        term: 'The high-frequency bank',
        kind: 'notation',
        statement: 'Twenty roots with the highest dividends: **spect** (look: inspect, prospect, circumspect), **dict** (say: predict, verdict, contradict), **fer** (carry: transfer, defer, infer), **ject** (throw: reject, eject, project), **vert/vers** (turn: convert, revert, aversion), **port** (carry: transport, import, deport), **tract** (pull: attract, contract, distract), **duc/duct** (lead: conduct, induce, reduce), **scrib/script** (write: describe, manuscript, postscript), **mit/miss** (send: transmit, dismiss, emissary), **cred** (believe: credible, credential, incredulous), **cur** (run: current, occur, cursive), **pon/pos** (place: compose, postpone, deposit), **vid/vis** (see: evident, provide, vision), **voc** (call: invoke, advocate, vociferous), **dur** (last: endure, durable, obdurate), **sens/sent** (feel: consent, dissent, sentiment), **tact/tang** (touch: contact, tangible, tactile), **log** (word, reason: dialogue, monologue, analogy), **graph** (write: autograph, biography, seismograph).',
        detail: 'Grow a second tier as confidence builds: aud (hear: audible, auditorium), cap/cept (take: capture, intercept), cid/cis (cut: decide, incision), chron (time: chronology, anachronism), path (feel: empathy, apathy), morph (form: amorphous, metamorphosis), geo (earth), therm (heat), hydro (water), bio (life), phon (sound), psych (mind), auto (self), tele (far). Ten minutes of root drill a day outruns an hour of word lists, because every new word reinforces the system instead of lengthening a list.'
      },
      {
        term: 'The Latin–Greek layering',
        kind: 'insight',
        statement: 'English borrowed the same idea on three shelves: Germanic **see** (everyday), Latin **spect/vid** (formal), Greek **-opsy/-scope** (technical) — "watch", "inspect", "microscope". Greek roots cluster in science and abstraction — bio, geo, chron, therm, psych, phon — so technical passages decode especially well: **photo·synthesis** = light + putting-together; **geo·thermal** = earth-heat.',
        detail: 'The layering explains register: a Latinate choice (commence, purchase) reads more formal than its Germanic twin (start, buy), which makes the register-matching items of Chapter 1.1 downstream of this history. It also explains triplets like kingly (Germanic) / royal (French) / regal (Latin): same meaning, rising formality. When two choices differ mainly in root origin, prefer the Latinate for academic registers and the Germanic for plain narration.'
      },
      {
        term: 'The decoding protocol',
        kind: 'method',
        statement: 'For an unfamiliar word in an exam sentence: (1) strip the suffix and identify the part of speech; (2) strip the prefix and read its direction; (3) isolate the root and its core; (4) reassemble a literal paraphrase; (5) sanity-check the paraphrase against the sentence\u2019s context. In·cred·ulous = not-believing-inclined → unwilling to believe.',
        detail: 'The protocol buys a HYPOTHESIS, not a verdict — step (5) exists because roots occasionally drift: "egregious" literally means standing out from the flock (e + greg) and once meant outstandingly GOOD before its sense inverted. So treat the decode as a strong prior and let the context deliver the verdict; when root-reading and context clash, context wins, and the clash itself is worth remembering.'
      }
    ],
    examples: [
      {
        title: 'Decoding a blank with roots',
        problem: 'Text: "Early biographers credited the admiral with immaculate motives, but the ledgers suggest a strong ___ for personal gain." Choices: (A) an aversion (B) a propensity (C) a deliberate plan (D) a public display',
        steps: [
          { label: 'Step 1', text: 'Strip the candidate "propensity": pro- (forward, toward) + pens (from pendere, to hang or weigh) + -ity (noun).' },
          { label: 'Step 2', text: 'Reassemble literally: a hanging-toward — the direction something leans.' },
          { label: 'Step 3', text: 'A leaning-toward is an inclination, a natural tendency — and "for personal gain" is exactly what a tendency pairs with.' },
          { label: 'Step 4', text: 'Context check: "but" opposes immaculate motives with self-interest, fitting a tendency (not a plan). (A) is the antonym trap; (C) overreaches into deliberateness; (D) belongs to display roots like spect. Answer: (B).' }
        ],
        result: '(B) — pro (toward) + pens (weigh, hang) + ity = an inclination.'
      },
      {
        title: 'Matching roots across words',
        problem: 'Which word contains a root meaning "carry"? Choices: (A) transmit (B) transfer (C) detract (D) conduce',
        steps: [
          { label: 'Step 1', text: 'Separate root from prefix: trans·mit, trans·fer, de·tract, con·duce.' },
          { label: 'Step 2', text: 'Read the roots: mit/miss = send; fer = carry (as in ferry); tract = pull; duc/duct = lead.' },
          { label: 'Step 3', text: 'The question asks for carrying — fer, as in transfer, a carrying-across.' },
          { label: 'Step 4', text: 'Trap check: trans- (across) appears in (A) as well; a prefix cannot answer a root question — always read past it.' }
        ],
        result: '(B) transfer — fer = carry, trans = across.'
      }
    ],
    keyTakeaways: [
      'Words decompose: prefix (aim) + root (core) + suffix (part of speech) — strip what you know and decode the rest.',
      'Twenty roots (spect, dict, fer, ject, vert, port, tract, duct, script, mit, cred, cur, pon, vid, voc, dur, sent, tact, log, graph) unlock thousands of derivatives.',
      'Greek roots dominate technical vocabulary — bio, geo, chron, therm, psych, phon, photo.',
      'A root decode is a hypothesis; context delivers the verdict — when they clash, context wins.',
    ],
    quiz: [
      {
        q: 'The root in "circumspect" means',
        options: ['to speak', 'to look', 'to carry', 'to believe'],
        answer: 1,
        explanation: 'Step 1: Split the word: circum (around) + spect. Step 2: Spect = look, as in inspect and spectator. Step 3: Circumspect = looking around you → cautious. Step 4: Dict (speak), fer (carry) and cred (believe) are the neighbouring traps.'
      },
      {
        q: '"Consent" most literally means',
        options: ['to feel together', 'to send away', 'to look into', 'to write down'],
        answer: 0,
        explanation: 'Step 1: con- (together) + sent/sens (feel). Step 2: Consent = feeling together → agreement. Step 3: Mit = send (as in transmit) would give "send together", which is nonsense here. Step 4: Answer: to feel together.'
      },
      {
        q: 'A word built on voc (call) + fer (carry) — "vociferous" — describes speech that is',
        options: ['barely audible', 'loud and forceful', 'hesitant', 'written, not spoken'],
        answer: 1,
        explanation: 'Step 1: voc = call (voice), fer = carry. Step 2: Carrying the voice → loud enough to carry across a room. Step 3: Hence vociferous = noisy, clamorous. Step 4: Every other option contradicts a root reading of voice-carrying.'
      },
      {
        q: 'The decoding protocol ends by checking the literal paraphrase against the sentence because',
        options: ['roots never repeat their meanings', 'root meanings can drift or invert over time', 'suffixes overwrite root meanings', 'exams forbid literal readings'],
        answer: 1,
        explanation: 'Step 1: Roots are stable but not immortal. Step 2: Words like "egregious" (literally "standing out from the flock") reversed polarity over the centuries. Step 3: So the decode is a prior, not a verdict. Step 4: Context arbitrates whenever root-reading and usage diverge.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.2
  {
    sectionId: 'eng-a2-s2',
    readingTime: 9,
    prerequisites: [
      'Root decoding (7.1)',
      'Parts-of-speech recognition from sentence slots',
    ],
    intro: 'Roots carry the core; **affixes** do the engineering. Prefixes aim the meaning — negation, number, position, degree — while suffixes convert one part of speech into another, which is exactly what "give the correct form of the word in brackets" items test. Master the families and a single known root generates a whole shelf of words.',
    objectives: [
      'Select the right negative prefix (un-, in-/im-/il-/ir-, non-, dis-) by base and nuance',
      'Map suffixes to parts of speech, including meaning-shifting pairs like -ful vs -able',
      'Match register by choosing Latinate or Germanic forms',
      'Solve word-formation items by diagnosing the slot before the word',
    ],
    concepts: [
      {
        term: 'Prefix families',
        kind: 'notation',
        statement: 'Four families cover the examined stock. **Negation**: un- (Germanic bases: unfair, untie), in-/im-/il-/ir- (Latinate, assimilating: intolerable, impatient, illegal, irrational), non- (neutral category exclusion: non-fiction), dis- (reversal or active opposition: disagree, disconnect), a- (amoral, atypical). **Number**: mono-, uni-, bi-/di-, tri-, poly-/multi-, omni-. **Position/direction**: sub-, super-, inter- (between), trans- (across), circum- (around), ante- (before), post- (after), retro- (backward). **Degree/size**: micro-, macro-/mega-, hyper- (over), hypo- (under), ultra-, semi-/hemi-.',
        detail: 'The negation quad has jobs, not vibes: un- attaches to Germanic bases; in- assimilates to the following consonant and attaches to Latinate bases; non- is the neutral classifier (a non-event is simply not an event); dis- adds reversal or opposition. When both attach to the same sphere, meanings DIVERGE: uninterested = bored, disinterested = impartial — a classic top-band discrimination the assessment recycles.'
      },
      {
        term: 'Suffixes by part of speech',
        kind: 'definition',
        statement: 'Noun-making: **-tion/-sion, -ment, -ance/-ence, -ness, -ity, -ism, -ist, -ship, -hood**; adjective-making: **-ous, -ful, -less, -ive, -able/-ible, -al, -ic, -ant/-ent**; verb-making: **-ify, -ise/-ize, -ate, -en** (widen, strengthen); adverb-making: **-ly, -ward(s), -wise** (clockwise).',
        detail: 'Two traps dominate. (1) -able vs -ible has no reliable rule: -able is the default for recognisable verb bases (readable, debatable), -ible survives in Latinate loans (credible, feasible) — memorise the members. (2) A suffix can shift more than the part of speech: respect·ful (showing respect) vs respect·able (deserving it); histor·ic (important in history) vs histor·ical (belonging to the past). Read the whole word, not just its tag.'
      },
      {
        term: 'Latinate vs Germanic register',
        kind: 'insight',
        statement: 'English keeps twin shelves for many ideas: Germanic **ask, buy, freedom, help, deep** beside Latinate **inquire, purchase, liberty, assist, profound**. Latinate choices raise the register — formal, academic, abstract — and assessments test the matching: a policy report wants "purchase equipment", a diary entry wants "buy gear".',
        detail: 'Register errors rarely break grammar; they break tone. A formal report that suddenly says "we bought stuff" fails register exactly as a chat message saying "the committee resolved to procure supplies" fails the other way. When two choices both fit a blank, ask which shelf the surrounding sentence shops on — vocabulary items are really tone items wearing a word list.'
      },
      {
        term: 'Formation chains and slot diagnosis',
        kind: 'method',
        statement: 'Run the suffix conveyor in both directions: decide → decision → decisive → decisively → indecisive → indecision; analyse → analysis → analytic(al) → analytically. For bracketed-word items ("___ (CAUTION)"), read the slot\u2019s grammar FIRST, then select the family member that fills it.',
        detail: 'Slot-diagnosis beats word-memory: in "The report was praised for its ___ (CLEAR)", the possessive "its" demands a NOUN — clarity — while "clearness" is nonstandard for this sense and "clarification" names a different event (the act of clarifying). In "The panel ___ (STRONG) rejected the bid", the slot before a verb demands an ADVERB — strongly. Scan the sentence for its missing part of speech before touching the word family.'
      }
    ],
    examples: [
      {
        title: 'Filling a slot by diagnosis',
        problem: 'Text: "The committee\u2019s ___ (DECIDE) to halt the trial was praised for its swiftness." Choices: (A) decision (B) decisive (C) decisively (D) deciding',
        steps: [
          { label: 'Step 1', text: 'Diagnose the slot: "The committee\u2019s ___ to halt the trial" — a possessive noun phrase needs a NOUN head, and the following infinitive "to halt" suits action nouns.' },
          { label: 'Step 2', text: 'Screen the family: decision (noun), decisive (adjective), decisively (adverb), deciding (participle).' },
          { label: 'Step 3', text: 'Only "decision" can head the possessive and license the infinitive: "the decision to halt".' },
          { label: 'Step 4', text: 'Answer: (A) decision.' }
        ],
        result: '(A) "The committee\u2019s decision to halt the trial was praised for its swiftness."'
      },
      {
        title: 'Prefixes that split meanings',
        problem: 'Text: "An ___ judge is essential: one who already favours either party cannot deliver justice." Choices: (A) uninterested (B) disinterested (C) misinterested (D) ill-interested',
        steps: [
          { label: 'Step 1', text: 'The sentence needs "free of bias" — no stake in the outcome.' },
          { label: 'Step 2', text: 'Screen the prefixes: dis- + interest = without a stake → impartial. The Germanic twin uninterested means lacking curiosity — boredom, not fairness.' },
          { label: 'Step 3', text: '"Misinterested" and "ill-interested" are not standard English; they lean on the wrong families (mis- = wrongly, as in misjudge).' },
          { label: 'Step 4', text: 'Answer: (B) disinterested.' }
        ],
        result: '(B) — disinterested = impartial; uninterested = bored.'
      }
    ],
    keyTakeaways: [
      'Prefixes come in four families — negation, number, position, degree — and the negation prefixes have distinct jobs (un-, in-, non-, dis-).',
      'Suffixes fix the part of speech; some also shift meaning (respectful vs respectable, historic vs historical).',
      'Latinate forms raise the register — match the shelf the sentence shops on.',
      'Solve formation items by diagnosing the slot\u2019s missing part of speech BEFORE choosing a form.',
    ],
    quiz: [
      {
        q: 'The correct negative form of "legal" is',
        options: ['unlegal', 'ilegal', 'illegal', 'dislegal'],
        answer: 2,
        explanation: 'Step 1: "Legal" is a Latinate base → the in- family. Step 2: In- assimilates before l to il-. Step 3: Hence illegal. Step 4: Un- and dis- attach to other bases (unfair, disloyal).'
      },
      {
        q: '"The results were ___ encouraging." The blank demands',
        options: ['a noun', 'an adjective', 'an adverb', 'a verb'],
        answer: 2,
        explanation: 'Step 1: The blank sits before the adjective "encouraging". Step 2: Words that modify adjectives are adverbs — "strongly encouraging". Step 3: Slot diagnosis precedes word-family selection. Step 4: Answer: an adverb.'
      },
      {
        q: 'Which pair differs by register only?',
        options: ['buy / purchase', 'bored / uninterested', 'historical / historic', 'childish / childlike'],
        answer: 0,
        explanation: 'Step 1: Register = formality level at the same meaning. Step 2: Buy (Germanic) and purchase (Latinate) denote the same act on different shelves. Step 3: The other pairs differ in sense or connotation, not just formality. Step 4: Answer: buy / purchase.'
      },
      {
        q: 'In "a ___ moment in the nation\u2019s past," the word meaning "important in history" is',
        options: ['historical', 'historic', 'history', 'historian'],
        answer: 1,
        explanation: 'Step 1: Historic = momentous; historical = belonging to the past. Step 2: A treaty signing is historic; a costume is historical. Step 3: The slot needs an adjective meaning significant. Step 4: Answer: historic.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.3
  {
    sectionId: 'eng-a2-s3',
    readingTime: 9,
    prerequisites: [
      'Root and affix decoding (7.1, 7.2)',
      'Words-in-context item technique (1.1)',
    ],
    intro: 'Chapter 1.1 trains you to answer test items about words; this lesson trains you to **grow the words themselves**. Two engines do the work: families — one root multiplied across parts of speech — and context clues — the four signals by which a passage defines its own vocabulary. Together they turn reading from vocabulary testing into vocabulary acquisition.',
    objectives: [
      'Store word families rather than isolated words, and catch false family members',
      'Identify the four context-clue types by their signal words and extract meanings from them',
      'Register connotation alongside denotation for every new word',
      'Run the acquisition loop: decode, verify, record with collocations, review spaced',
    ],
    concepts: [
      {
        term: 'Word-family building',
        kind: 'method',
        statement: 'From one base, run the conveyor in both directions: act → action, active, actively, activate, inactive, interaction, transaction; spect → inspect, inspector, inspection, introspection, retrospective. Store the FAMILY, not the word — one remembered root plus the affix system of 7.2 is six or eight words for the price of one.',
        detail: 'Families also expose false relatives: "formidable" looks like kin to "form", but it descends from Latin formido (dread) — a false family member wearing the family\u2019s clothes. When a word\u2019s meaning resists its apparent family, suspect an impostor and check its partners instead. And say the chain aloud as you build it: each derived form rehearses the base once more, which is memory work disguised as pronunciation practice.'
      },
      {
        term: 'The four context-clue types',
        kind: 'definition',
        statement: '**Definition clues** define in place ("a peremptory order — one that must be obeyed instantly"); **example clues** instantiate ("arboreal species, such as squirrels and orangutans"); **contrast clues** antonym-signal ("unlike her gregarious twin, Mala was reclusive"); **inference clues** leave the meaning to be assembled from the passage\u2019s logic and mood. Signal words flag the first three: dashes and "that is" (definition), "such as / including / for instance" (example), "unlike / whereas / but / in contrast" (contrast).',
        detail: 'Inference clues hide — which is why the passage, not the word list, is the primary study tool. Discipline: before reaching for a dictionary, spend thirty seconds hunting the clue; the retrieval attempt itself is the learning event. The clue also supplies the usage frame — "arboreal" arrives attached to species and habitats, so it can later be DEPLOYED, not merely recognised.'
      },
      {
        term: 'Connotation registration',
        kind: 'insight',
        statement: 'Every acquired word should carry two tags: its **denotation** (the neutral meaning) and its **connotation** (its charge — resolute, firm, stubborn and obstinate all denote "unyielding" while sliding from praise to insult). Record new words with a charge note — "dogged (+, effort)", "pig-headed (−, insult)" — because blanks near praise or criticism demand the charge, not just the sense.',
        detail: 'Connotation is testable in both directions: choices that are denotationally identical are discriminated by charge (thrifty vs stingy). As you build families, note which partners carry heat: persistence (neutral-to-positive) vs stubbornness (negative); curiosity (positive) vs nosiness (negative). A vocabulary notebook without connotation tags is half a notebook.'
      },
      {
        term: 'The acquisition loop',
        kind: 'method',
        statement: 'Encounter → decode (roots + affixes) → hypothesise → verify against the context clue → record (definition, family, collocations, connotation tag) → review at spaced intervals (a day, a week, a month). Each pass strengthens four memory hooks — structure, sentence, partners, charge — instead of one sound-to-meaning pair.',
        detail: 'Collocations belong in the record because a word without its partners is not yet owned: one mitigates risks, factors and damage — never people. The spaced schedule honours the forgetting curve instead of fighting it. Run honestly, the loop converts ordinary reading time into vocabulary growth — which is why strong candidates stop studying word lists and start studying passages.'
      }
    ],
    examples: [
      {
        title: 'Reading the clue, naming the type',
        problem: 'Text: "Unlike her gregarious co-founder, who hosted weekly salons, Priya ran the lab as a reclusive operation — no seminars, no visitors, no collaborations." Using the contrast clue, "gregarious" most nearly means: (A) domineering (B) sociable (C) secretive (D) meticulous',
        steps: [
          { label: 'Step 1', text: 'Name the clue type: "Unlike" flags a CONTRAST clue — gregarious sits at the opposite pole of Priya\u2019s profile.' },
          { label: 'Step 2', text: 'Gather the co-founder\u2019s evidence: weekly salons — hosting, welcoming, crowd-loving.' },
          { label: 'Step 3', text: 'Oppose the reclusive profile: gregarious = sociable, fond of company — (B).' },
          { label: 'Step 4', text: 'Audit distractors: (A) imports dominance the text never shows; (C) is the antonym trap — that is Priya, not the co-founder; (D) mistakes "ran the lab tightly" for precision. Answer: (B).' }
        ],
        result: '(B) sociable — a contrast clue read in the right direction.'
      },
      {
        title: 'Catching a false family member',
        problem: 'Which word does NOT belong to the family of "form"? Choices: (A) formal (B) formative (C) formidable (D) format',
        steps: [
          { label: 'Step 1', text: 'Test each candidate against the root sense: form = shape, structure.' },
          { label: 'Step 2', text: 'Formal (following the form), formative (shaping) and format (arrangement) all carry shape or structure.' },
          { label: 'Step 3', text: 'Formidable means fearsome or impressive — it descends from formido, dread, and shares only spelling with the family.' },
          { label: 'Step 4', text: 'Answer: (C) formidable.' }
        ],
        result: '(C) — formidable comes from formido (fear), not forma (shape).'
      }
    ],
    keyTakeaways: [
      'Store families, not words: one root plus the affix conveyor multiplies your inventory for free.',
      'Four clue types — definition, example, contrast, inference — let passages teach their own vocabulary; hunt the signal word first.',
      'Tag every new word with its connotation charge; denotation-equal choices are separated by tone.',
      'Run the acquisition loop — decode, verify, record with collocations, review spaced — to convert reading into growth.',
    ],
    quiz: [
      {
        q: '"An oxbow lake — a crescent-shaped lake formed when a river bend is cut off — often marks an old channel." The clause after the dash provides which clue type?',
        options: ['definition', 'example', 'contrast', 'inference'],
        answer: 0,
        explanation: 'Step 1: The dash flags an in-place explanation. Step 2: The explanation fully restates the term\u2019s meaning. Step 3: That is a definition clue. Step 4: Example clues would show instances ("such as"); contrast clues would oppose.'
      },
      {
        q: 'Which trio is ordered from positive to negative connotation?',
        options: ['thrifty / frugal / stingy', 'stingy / thrifty / frugal', 'frugal / stingy / thrifty', 'thrifty / stingy / frugal'],
        answer: 0,
        explanation: 'Step 1: All three denote reluctance to spend. Step 2: Thrifty praises, frugal stays neutral-to-positive, stingy condemns. Step 3: The slide from plus to minus is thrifty / frugal / stingy. Step 4: Connotation tags turn this into a lookup, not a debate.'
      },
      {
        q: 'A word that resists its apparent family\u2019s meaning should make you suspect',
        options: ['a spelling error in the passage', 'a false family member', 'an idiom', 'an obsolete word'],
        answer: 1,
        explanation: 'Step 1: Families predict senses when the kinship is real. Step 2: "Formidable" resists "form" because it descends from formido (fear). Step 3: Such words are false family members. Step 4: Verify with partners and context, then record the true lineage.'
      },
      {
        q: 'The BEST moment to look up an unfamiliar reading word is',
        options: ['immediately, on first meeting it', 'after thirty seconds of hunting the context clue and forming a hypothesis', 'never — dictionaries slow readers down', 'only after the exam'],
        answer: 1,
        explanation: 'Step 1: The retrieval attempt is the learning event. Step 2: A hypothesis from roots and clues gives the dictionary something to confirm or correct. Step 3: Immediate lookup skips that processing entirely. Step 4: Decode, verify, then record.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: 'eng-a3-s1',
    readingTime: 9,
    prerequisites: [
      'Short-passage skills: main idea, evidence, inference (Chapters 1–2)',
      'Comfort with 20-minute continuous reading blocks',
    ],
    intro: 'Chapters 1 and 2 teach the per-question skills on short passages; length-format papers change the GAME. A 700-word passage with eight questions is not four short passages glued together — it is an endurance-and-architecture problem requiring a **map** of the argument, a **budget** for the clock, and a **triage** order for the question set. This lesson supplies all three.',
    objectives: [
      'Map a long passage by tagging each paragraph with its rhetorical function',
      'Choose passage-first vs question-first strategy from a sixty-second skim',
      'Anchor every answer to a specific line, and triage the set by anchor availability',
      'Manage pacing and attention across a full-length reading block',
    ],
    concepts: [
      {
        term: 'Passage mapping',
        kind: 'method',
        statement: 'Read once, actively, tagging each paragraph with a two- to five-word FUNCTION label: "old theory stated", "evidence: 1998 cores", "counterargument", "concession", "rebuttal", "implication". The map is a retrieval structure — structure and purpose questions (Chapter 1.2) answer from the map without re-reading, and detail questions receive a paragraph address for targeted return.',
        detail: 'Tag by paragraph JOB, not topic: "about glaciers" is a topic note; "evidence against the 1998 claim" is a function tag. The first sentence of a paragraph usually announces its job and the last often states its point — when they disagree, the closing sentence wins. A mapped 700-word passage yields a five-line outline, and five lines are all you should ever re-read under time pressure.'
      },
      {
        term: 'Question-first vs passage-first',
        kind: 'insight',
        statement: '**Passage-first** (map, then attack the questions) suits argumentative passages, where every question presupposes global understanding; **question-first** (skim the questions, then hunt) suits fact-dense informational sets where line-referenced details outnumber global items. The hybrid default: a sixty-second skim of opening sentences and the final paragraph classifies the passage and picks the mode.',
        detail: 'The skim answers three questions cheaply: What kind of passage is this (argument, report, memoir)? What is the stakes sentence (usually the final paragraph\u2019s first sentence)? How many questions, and how many are line-referenced? Line-referenced items outnumbering global ones tilts toward question-first; a main-purpose and tone pair up front tilts toward mapping. Decide deliberately — never drift into whichever mode you happened to start.'
      },
      {
        term: 'Anchoring and triage',
        kind: 'method',
        statement: 'Every answer must be anchored to a specific sentence — if you cannot point to the line, you do not have the answer. Triage the set: detail and vocabulary-in-place items first (line-anchored, fast), main-idea and structure items second (the map already holds them), inference and tone items third (they re-read selectively). Any item that resists after forty-five seconds is flagged, not abandoned.',
        detail: 'Anchoring is also an error-detector: wrong choices are usually true-sounding sentences from the WRONG paragraph, or scope distortions of the anchored line ("some scientists" becoming "scientists"). When returning to a flagged item, re-read only its anchor zone — a paragraph, not the passage. The discipline of the anchor is what keeps eight questions from becoming eight full re-reads.'
      },
      {
        term: 'Pacing and stamina',
        kind: 'insight',
        statement: 'Budget by the paper\u2019s own arithmetic — minutes divided by questions, then weighted by passage length: a working norm is six to eight minutes for a 700-word passage carrying seven or eight items. Attention decays measurably after twenty minutes of passive reading, but ACTIVE tagging — predicting, labelling, questioning — holds attention because it converts reading into a task with checkpoints.',
        detail: 'Catch fatigue signals early: re-reading the same sentence twice, eyes sliding ahead of comprehension, answering from the first paragraph\u2019s memory. Countermeasures: re-tag the current paragraph\u2019s job in your head — the tagging restarts engagement — and if decay persists, spend your remaining discipline on ONE carefully anchored question rather than four careless ones. Practise under the clock at full length: pacing skills built on 150-word passages do not transfer to 700-word ones.'
      }
    ],
    examples: [
      {
        title: 'Mapping a four-paragraph passage',
        problem: 'Passage (abridged): "[1] The Moche irrigation canals of northern Peru have long been admired as engineering triumphs. [2] A 2019 sediment study, however, found salt layers indicating periodic collapse. [3] Admittedly, canal rebuilding was itself a civic institution — evidence of organised labour and ritual feasting. [4] The Moche achievement, then, lies not in permanence but in resilience: a system rebuilt more often than it failed." Question: "The passage is primarily concerned with" — (A) celebrating Moche engineering (B) revising a view of what made the canals an achievement (C) explaining how canals were built (D) comparing Moche and modern irrigation',
        steps: [
          { label: 'Step 1', text: 'Tag while reading: [1] "admired view stated" · [2] "counter-evidence: salt layers" · [3] "concession: rebuilding as institution" · [4] "resolution: resilience over permanence".' },
          { label: 'Step 2', text: 'The map reveals a classic arc: claim → complication → concession → reframing.' },
          { label: 'Step 3', text: 'Match choices to the arc: (A) is paragraph 1\u2019s stance, which the passage revises; (C) never happens — no construction detail appears; (D) is absent — "modern" occurs nowhere.' },
          { label: 'Step 4', text: 'Answer: (B) — the map\u2019s resolution line answers a main-purpose item with no re-reading.' }
        ],
        result: '(B) — the map holds the answer to the structure question.'
      },
      {
        title: 'Triaging a question set',
        problem: 'A 700-word passage on deep-sea vents carries eight questions: (i) line-34 vocabulary item, (ii) main purpose, (iii) detail about the 1977 expedition, (iv) function of paragraph 3, (v) inference about tube worms, (vi) tone of the final paragraph, (vii) line-referenced detail, (viii) inference completing a claim. Order them for an eight-minute budget.',
        steps: [
          { label: 'Step 1', text: 'Skim first (sixty seconds): the passage is a report with an argumentative final paragraph — map it.' },
          { label: 'Step 2', text: 'First wave, line-anchored and fast: (i) vocabulary-in-place and (vii) line-referenced detail — both visit known addresses.' },
          { label: 'Step 3', text: 'Second wave, map-held: (ii) main purpose and (iv) paragraph-3 function read from labels, not paragraphs; (iii) gets one targeted paragraph visit.' },
          { label: 'Step 4', text: 'Third wave, selective re-read: (v), (viii) inference and (vi) tone, each anchored to its zone — flagging anything that stalls past forty-five seconds for a final pass.' }
        ],
        result: 'Anchor-first order: (i), (vii) → (ii), (iv), (iii) → (v), (viii), (vi) — with flags, not abandonment.'
      }
    ],
    keyTakeaways: [
      'Tag paragraphs by FUNCTION ("evidence", "concession", "rebuttal") — a five-line map replaces five re-reads.',
      'A sixty-second skim classifies the passage and chooses passage-first vs question-first.',
      'No anchor, no answer: point to the sentence or keep hunting — scope distortions live where anchoring is skipped.',
      'Budget by arithmetic, triage by anchor availability, and practise at full length — pacing is a stamina skill.',
    ],
    quiz: [
      {
        q: 'A paragraph tag should record',
        options: ['the paragraph\u2019s topic noun', 'the paragraph\u2019s rhetorical job', 'its word count', 'every example it lists'],
        answer: 1,
        explanation: 'Step 1: Topics repeat; jobs differ. Step 2: "Evidence against the 1998 claim" tells you where to hunt and how the argument moves. Step 3: Topic nouns ("glaciers") produce maps that cannot answer structure questions. Step 4: Tag the job.'
      },
      {
        q: 'Question-first reading is the better default when',
        options: ['the passage is an argument with a tone question', 'the set is fact-dense and heavily line-referenced', 'the passage is short and lyrical', 'time is unlimited'],
        answer: 1,
        explanation: 'Step 1: Question-first pays when details outnumber arguments. Step 2: Line-referenced items hand you hunting addresses. Step 3: Arguments and tone items presuppose global understanding — map those instead. Step 4: Answer: fact-dense, line-referenced sets.'
      },
      {
        q: 'You cannot point to the line that supports your chosen answer. You should',
        options: ['keep the answer — instinct counts', 'treat the choice as unverified and keep hunting', 'switch to the longest option', 'skip all remaining questions on the passage'],
        answer: 1,
        explanation: 'Step 1: The anchor rule: no line, no answer. Step 2: An unanchored choice is a hypothesis, not an answer. Step 3: Keep hunting in the relevant zone, or flag for the second pass. Step 4: Length and instinct are not evidence.'
      },
      {
        q: 'The primary long-passage difference from short-passage testing is that long passages',
        options: ['test harder vocabulary per question', 'require endurance and active engagement across twenty-plus minutes', 'always have easier questions per word', 'are always fiction'],
        answer: 1,
        explanation: 'Step 1: The per-question skills transfer from short passages. Step 2: What does not transfer is sustained attention. Step 3: Active tagging converts reading into checkpointed tasks and holds engagement. Step 4: Answer: endurance plus active engagement.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.2
  {
    sectionId: 'eng-a3-s2',
    readingTime: 9,
    prerequisites: [
      'Grammar and collocation command (Chapters 5–6)',
      'Para-jumble ordering experience (5.4)',
    ],
    intro: 'Chapter 5.4 hands you jumbled sentences to reorder; the cloze family hands you a **coherent** text with pieces removed and asks you to restore them. The skill is diagnosis: every blank is one of three types — grammar, vocabulary or discourse — and each type has its own solving move. Blank by blank, the passage itself tells you what it is missing.',
    objectives: [
      'Classify each blank as grammar, vocabulary or discourse before choosing a tool',
      'Skim the whole passage first and let topic, register and stance veto choices',
      'Solve sentence-insertion items by matching given information and discourse markers',
      'Apply the given–new contract to paragraph-completion and interlocking blanks',
    ],
    concepts: [
      {
        term: 'The blank taxonomy',
        kind: 'definition',
        statement: 'A **grammar blank** tests a rule — article, preposition, connector, verb form — with exactly one conforming choice. A **vocabulary blank** tests fit — collocation, register, sense — where the best partnership wins. A **discourse blank** tests flow: what the NEXT sentence needs (a contrast, an example, a resumption of the thread), decided by the surrounding sentences. Classify before you solve.',
        detail: 'Classification cues: function-word choices (the/a, in/at, is/are, however/moreover) mark grammar; content-word choices near a specific noun or adjective mark vocabulary; a blank at a sentence or paragraph BOUNDARY with connector or whole-sentence choices marks discourse. Papers mix all three on purpose — the candidate who classifies applies the right tool first and saves seconds on every blank.'
      },
      {
        term: 'Whole-passage first, then elimination',
        kind: 'method',
        statement: 'Skim the FULL passage before touching any blank — one minute for topic, register and the author\u2019s stance — then per blank: classify, predict from the LEFT context, verify against the RIGHT context, and eliminate by category. Never solve blanks in isolation: the stance ("the author admires the reform") vetoes whole columns of choices later on.',
        detail: 'Left context supplies collocation and grammar; right context supplies logic — "The reforms were ___, and yet growth followed" vetoes "disastrous" whatever the left side allows. When two blanks interlock, solve the more constrained one first and let it break the tie on the other. And when stuck, mark and move: later blanks often restate the earlier one\u2019s content, handing you the missing piece for free.'
      },
      {
        term: 'Sentence-insertion logic',
        kind: 'method',
        statement: 'For insertion items, underline the floating sentence\u2019s GIVEN (old information — pronouns, demonstratives, repeated nouns) and its NEW (the fresh claim it advances); the correct slot is the seam where the GIVEN is already established and the NEW is the natural next step. For paragraph-completion items, audit what the FOLLOWING text presupposes: a "this practice" or "such delays" in the next paragraph must already have its referent in the completed one.',
        detail: 'Pronoun chains are the sharpest probe: "Nevertheless, the mechanism remains contested" can only follow a sentence that both mentions a mechanism and claims (or implies) it is settled — the "nevertheless" needs a tension to push against. Discourse markers do the same work: "for instance" demands an available general claim; "in contrast" demands a comparable entity; "as a result" demands a cause. Test each candidate seam by reading the float plus the following sentence as one continuous thought.'
      },
      {
        term: 'The given–new flow',
        kind: 'insight',
        statement: 'Coherent English moves in a chain: each sentence opens with GIVEN (known) information and closes with NEW information, which becomes the next sentence\u2019s given. A blank that opens a sentence typically wants the previous sentence\u2019s new idea; a blank that ends a sentence typically advances it. Completion items ask you to repair exactly these chains.',
        detail: 'The contract explains why "such", "this + noun" and repeated key nouns (the survey → the questionnaire → the instrument) knit paragraphs: each references the just-given and advances. When a completion choice opens with an unheralded entity ("The bondholders, however..."), ask where those bondholders were established; if nowhere, the choice belongs to a different seam. This is the reading-side twin of the writing discipline taught in 8.3.'
      }
    ],
    examples: [
      {
        title: 'Two blanks, two types',
        problem: 'Mini-cloze: "The ombudsman\u2019s report was (1) ___ blunt, describing the procurement process as \u2018systemically compromised\u2019. (2) ___ , no official resigned, and the department referred only to \u2018procedural learning\u2019." Choices for (1): (A) remarkably (B) bitterly (C) severely (D) categorically — Choices for (2): (A) Moreover (B) Nevertheless (C) For instance (D) In other words',
        steps: [
          { label: 'Step 1', text: 'Skim: an ombudsman\u2019s report on procurement failures; stance critical; register formal news analysis.' },
          { label: 'Step 2', text: 'Blank (1) sits before "blunt" — an adverb slot, so classify as vocabulary: "remarkably blunt" is the standard intensifier partnership; bitterly pairs with cold and disappointed, severely with injured and limited, categorically with deny and refuse.' },
          { label: 'Step 3', text: 'Blank (2) opens the second sentence — a discourse blank: harsh findings, then institutional inaction. The gap between expected consequence and actual outcome is a contrast → Nevertheless.' },
          { label: 'Step 4', text: 'Audit: Moreover would continue the criticism (wrong direction); For instance needs an available general claim; In other words needs a paraphrase. Answers: (1)(A), (2)(B).' }
        ],
        result: '(1) remarkably (2) Nevertheless — one vocabulary blank, one discourse blank, two different tools.'
      },
      {
        title: 'Finding the seam',
        problem: 'Insert: "Nevertheless, that dominance now looks less secure." — [1] The tram company moved seventy percent of the city\u2019s commuters in 1970. [2] Its fleet was the largest in the region, and its depots employed half the district. [3] Since 2010, ride-share services have captured a third of its ridership. Where does the sentence belong?',
        steps: [
          { label: 'Step 1', text: 'Mark the float\u2019s GIVEN: "that dominance" — it needs an established dominance. Mark its marker: "Nevertheless" — it needs a tension to acknowledge.' },
          { label: 'Step 2', text: 'Test the seam after [2]: dominance is fully established (seventy percent, largest fleet) so "that dominance" resolves, and [3] then supplies the threat that "less secure" predicts.' },
          { label: 'Step 3', text: 'Test the seam after [3]: "that dominance" would still resolve, but "Nevertheless" would then contradict [3] itself — the float would fight its own evidence.' },
          { label: 'Step 4', text: 'The opening position fails: nothing is yet established for "that". Answer: after [2].' }
        ],
        result: 'Position after [2] — the given resolves, and the new sets up the evidence to come.'
      }
    ],
    keyTakeaways: [
      'Classify every blank — grammar (rules), vocabulary (partnerships), discourse (flow) — before choosing a tool.',
      'Skim the whole passage first: topic, register and stance veto columns of choices before you read them.',
      'For insertions, match the float\u2019s GIVEN to an established referent and its marker to the local tension.',
      'Given–new flow is the deep rule: sentences open on the known and advance the new — repair chains, don\u2019t just fill holes.',
    ],
    quiz: [
      {
        q: 'A blank whose choices are "however / moreover / for instance" is best classified as',
        options: ['grammar', 'vocabulary', 'discourse', 'register'],
        answer: 2,
        explanation: 'Step 1: Connectors at boundaries govern sentence-to-sentence flow. Step 2: That is the discourse level. Step 3: Grammar blanks test rule conformance; vocabulary blanks test partnerships. Step 4: Answer: discourse.'
      },
      {
        q: 'The FIRST action on a cloze passage should be',
        options: ['solve blank 1 immediately', 'skim the whole passage for topic and stance', 'read every answer option', 'count the blanks'],
        answer: 1,
        explanation: 'Step 1: The passage\u2019s stance vetoes choices throughout. Step 2: One minute of skim buys classification power for every blank. Step 3: Solving blank 1 blind risks a stance error propagating. Step 4: Skim first, then solve.'
      },
      {
        q: 'A floating sentence begins "Such measures, however..." The correct insertion point must',
        options: ['mention a measurement', 'have already introduced the measures and a claim for "however" to push against', 'sit at the very end of the passage', 'fall inside a quoted sentence'],
        answer: 1,
        explanation: 'Step 1: "Such measures" is GIVEN — it needs an established referent. Step 2: "However" needs an available claim to contradict. Step 3: Only a seam supplying both can host the sentence. Step 4: Answer: referent plus tension already in place.'
      },
      {
        q: 'Two blanks each resist a final choice between two candidates. The best move is to',
        options: ['guess both and move on', 'solve the more constrained blank first and let it break the tie', 'always choose the earlier blank', 'pick the pair that looks most formal'],
        answer: 1,
        explanation: 'Step 1: Interlocking blanks share information. Step 2: The more constrained blank — more context, fewer survivors — is likelier to be certain. Step 3: Its resolution then disambiguates the partner. Step 4: Constrained-first is the tie-breaking discipline.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.3
  {
    sectionId: 'eng-a3-s3',
    readingTime: 10,
    prerequisites: [
      'Transition-word selection at sentence level (4.1)',
      'Main-idea extraction (2.1)',
    ],
    intro: 'Chapter 4.1 chooses transitions between two given sentences; composition-length papers ask you to **build** the whole flow yourself. A précis compresses a passage into its skeleton; a summary selects its dominant ideas; cohesive writing binds paragraphs through devices far stronger than transition words — the given–new contract, lexical chains, substitution and ellipsis. This is the writing counterpart of everything Chapters 1–2 taught you to read.',
    objectives: [
      'Write a précis that preserves the skeleton and proportions of a passage in one-third the length',
      'Distinguish summary from paraphrase, and grade both on weight as well as content',
      'Bind compositions with given–new chains, lexical chains, substitution and ellipsis',
      'Design paragraph unity and ordering that survive the deletion and swap tests',
    ],
    concepts: [
      {
        term: 'The précis contract',
        kind: 'definition',
        statement: 'A précis is a miniature of the passage in the candidate\u2019s own words, typically one-third the length, preserving the logical skeleton in the original proportions: **third person** throughout, **no opinion** or comment, **no examples or illustrations** (keep the claim, drop the instance), **no direct quotation** (convert to indirect speech), **no new information** — plus a title where the paper demands one.',
        detail: 'Proportion is the tested discipline: if the passage spends half its length on a complication, a précis that allots it one clause has falsified the passage even with true statements. Compress by rank: thesis first, then the argument\u2019s load-bearing moves, then — only if room — the pivotal concession. The audit: read the précis alone; a reader who never saw the original should reconstruct its argument\u2019s shape.'
      },
      {
        term: 'Summary vs paraphrase',
        kind: 'definition',
        statement: 'A **paraphrase** re-expresses the SAME content at the SAME length in different words — a line-level transformation that must keep every element; a **summary** reduces length by keeping only the dominant ideas — a whole-text transformation that must keep RANK. Paraphrase is graded on fidelity (nothing added, nothing lost); summary on selection and weight.',
        detail: 'The classic summary error is the faithful distortion: every sentence represented, none weighted — a 200-word summary of a 900-word passage that gives the final concession equal time with the thesis. The classic paraphrase error is partial substitution: swapping three words and inheriting the original\u2019s structure, which fails any "in your own words" demand. The test in both cases: could the original\u2019s author complain that you emphasised the wrong thing?'
      },
      {
        term: 'Cohesion beyond transitions',
        kind: 'method',
        statement: 'Three devices bind sentences without a single "however": (1) the **given–new contract** — open each sentence on established ground and end on fresh matter the next sentence picks up; (2) **lexical chains** — deliberate partial repetition of key terms (the survey → the questionnaire → the instrument), which outperform thoughtless synonym-swapping; (3) **substitution and ellipsis** — one/so/do that, and omission of the repeated ("She said she would resign, and she did.").',
        detail: 'The chains rule surprises candidates: elegant variation (feline, puss, mouser for one cat) feels literary but fractures reference in expository prose — the reader wonders whether three animals are present. Bind instead by repeating the head noun while varying the modifiers ("the 2019 survey ... the survey of estuary sites ... the questionnaire", when it is truly the same instrument). Substitution works the same magic at clause level: "The northern route was closed; so was the ferry."'
      },
      {
        term: 'Paragraph unity and ordering',
        kind: 'insight',
        statement: 'A paragraph holds ONE controlling idea, announced early, and developed without a competing idea; paragraphs follow an order chosen from the argument\u2019s needs — chronological (narratives, processes), general → particular (claims then cases), problem → solution, or emphatic (least to most important, payload last).',
        detail: 'Unity\u2019s test is deletion: if a sentence could be lifted with no damage to the paragraph\u2019s argument, it never belonged — the summary skill applied one level down. Order\u2019s test is swap: if two paragraphs could exchange positions without loss, the order is arbitrary, and "best organisation" items detect exactly this. Choose the pattern by the argument\u2019s job — emphatic for conclusions, problem–solution for proposals — not by habit.'
      }
    ],
    examples: [
      {
        title: 'Compressing by rank',
        problem: 'Passage (~120 words): "The sabre-toothed cat\u2019s iconic canines have invited a century of debate. Early palaeontologists assumed the teeth were killing weapons, used to stab prey. But biomechanical modelling in the 1980s showed that a stab at that scale would risk fracture, and wear patterns on fossil teeth show no tell-tale chips. A 2007 study of jaw anatomy proposed instead a slicing bite to the throat, combining precision with safety. Critics countered that the models ignored the cat\u2019s extraordinarily powerful neck muscles, which could stabilise a stab. The current consensus treats the canines as precision instruments deployed on restrained prey — dangerous, but only in combination with the cat\u2019s body." Write a one-third précis.',
        steps: [
          { label: 'Step 1', text: 'Extract the skeleton: century-old assumption (stabbing weapons) → 1980s counter-evidence (fracture risk, wear) → 2007 alternative (slicing bite) → counterargument (neck muscles) → consensus (precision instruments on restrained prey).' },
          { label: 'Step 2', text: 'Assign proportions: the passage is a claim-revision arc; the two countermoves and the consensus carry the weight, the "century of debate" is framing.' },
          { label: 'Step 3', text: 'Draft in third person, no examples, no opinion: "Although early palaeontologists took the sabre-tooth\u2019s canines as stabbing weapons, later biomechanics showed that stabbing risked fracture and tooth wear contradicted it. A 2007 study proposed a precision throat bite; after debate over the neck muscles\u2019 role, the consensus treats the canines as precision instruments for restrained prey."' },
          { label: 'Step 4', text: 'Audit: 45 words ≈ one-third of 120; no examples, no quotation; the framing clause compressed to "Although"; a reader reconstructs the arc. Trim "extraordinarily powerful" as decoration and the proportions hold.' }
        ],
        result: 'A 45-word précis keeping the skeleton and the proportions: the claim, both reversals, the consensus.'
      },
      {
        title: 'Repairing a broken paragraph',
        problem: 'Repair the cohesion: "The 2011 audit found serious irregularities in procurement. They demanded a full explanation. Bureaucrats rarely volunteer one. The ministry published a white paper in response. This document ran to 300 pages. It exonerated everyone."',
        steps: [
          { label: 'Step 1', text: 'Trace the pronoun chain: "They" has no antecedent — the audit found, the irregularities were found; no plural actor was ever established. Supply one: "the auditors demanded".' },
          { label: 'Step 2', text: 'Check given–new: sentence 3 opens on "Bureaucrats" — brand-new matter in given position. Rewire it to open on established ground: "Such explanations, however, are rarely volunteered."' },
          { label: 'Step 3', text: 'Bind sentences 4–6, whose choppy "white paper ... This document ... It" pivots too often: fold the modifiers into one clause — "The ministry responded with a 300-page white paper".' },
          { label: 'Step 4', text: 'Verify the contract seam by seam: irregularities → explanation → response; each sentence now opens on given ground and ends on new matter the next sentence picks up.' }
        ],
        result: 'Repaired: "The 2011 audit found serious irregularities in procurement, and the auditors demanded a full explanation. Such explanations, however, are rarely volunteered. The ministry responded with a 300-page white paper — one that exonerated everyone involved."'
      }
    ],
    keyTakeaways: [
      'A précis is a miniature: third person, no opinion, no examples, proportions preserved — compress by rank.',
      'Paraphrase keeps everything at equal length; summary keeps the right things at reduced length — weight, not just content, is graded.',
      'Cohesion beyond transitions: given–new chains, deliberate lexical repetition, substitution and ellipsis.',
      'Paragraphs hold one controlling idea and a non-swappable order — test unity by deletion, order by swap.',
    ],
    quiz: [
      {
        q: 'Which must a précis NEVER contain?',
        options: ['the passage\u2019s central claim', 'the author\u2019s concessions', 'the candidate\u2019s opinion of the argument', 'indirect speech reporting the author\u2019s claims'],
        answer: 2,
        explanation: 'Step 1: The précis is a mirror, not a review. Step 2: Claims and concessions belong, in proportion. Step 3: Indirect speech is required — quotation is banned. Step 4: The candidate\u2019s opinion is the one forbidden element.'
      },
      {
        q: 'A 150-word summary of a 900-word passage gives the final concession as much space as the thesis. It fails mainly as a',
        options: ['paraphrase (too short)', 'summary (distorted weight)', 'précis (too long)', 'quotation (too loose)'],
        answer: 1,
        explanation: 'Step 1: Summaries are graded on selection AND rank. Step 2: Faithful sentences at false weights distort the passage. Step 3: This is the "faithful distortion" failure. Step 4: Answer: summary with distorted weight.'
      },
      {
        q: 'Replace the choppy chain "The white paper was published in May. This document ran to 300 pages." with the most cohesive single sentence.',
        options: ['The white paper was published in May, and it ran to 300 pages.', 'The ministry published a 300-page white paper in May.', 'A document of 300 pages was what appeared in May.', 'The white paper, published in May, this document ran to 300 pages.'],
        answer: 1,
        explanation: 'Step 1: The chain\u2019s problem is a redundant "this document" pivot. Step 2: One clause with the modifier folded in — a 300-page white paper in May — advances the new information cleanly. Step 3: (A) keeps the pronoun pivot; (C) fronts new matter as given; (D) is ungrammatical. Step 4: Answer: (B).'
      },
      {
        q: 'Two adjacent paragraphs could swap positions without any loss of sense. This shows the paragraph order is',
        options: ['emphatic', 'chronological', 'arbitrary', 'problem–solution'],
        answer: 2,
        explanation: 'Step 1: The swap test detects dependence between paragraphs. Step 2: Swappable paragraphs share no given–new obligation. Step 3: Order that could be anything is arbitrary — exactly what "best organisation" items flag. Step 4: Answer: arbitrary.'
      }
    ]
  },
]
