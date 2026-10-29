import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X76 pass (2026-10-30): LIBRARY-ORG-20261030-1 — International Law  */
/*  deepening. The Library structure audit found ZERO minimum          */
/*  violations across 101 books (all ≥2ch/≥3ls) and no multi-          */
/*  discipline volumes left to split, so this run deepened the         */
/*  thinnest non-language book: International Law (3ch/3ls, ~4,250w).  */
/*                                                                     */
/*  NEW CHAPTER "States, Territory & Jurisdiction" (branch-routed),    */
/*  two lessons, both carved against verified zero-coverage territory: */
/*                                                                     */
/*  1. law-states-statehood-territory — Montevideo criteria (1933,     */
/*     signed by 19, ratified by 16, US June 29 1934 with reservation),*/
/*     declaratory vs constitutive recognition (Korea/China puzzles,   */
/*     Stimson Jan 1932, UNSC 541 Nov 1983, UNSC 662 Aug 1990),       */
/*     territory acquisition (Western Sahara AO 1975; conquest         */
/*     abolished via Kellogg-Briand 1928 + Charter 2(4)), uti          */
/*     possidetis (Cairo 1964, Burkina Faso v Mali 1986),              */
/*     self-determination (GA 1514/1541, Quebec Reference 1998,        */
/*     Kosovo AO 2010, South Sudan 2011), extinction & succession.     */
/*     Carve evidence: 'Montevideo', 'uti possidetis', 'jus cogens',   */
/*     'sovereign immunity', 'recognition of states' = ZERO live hits. */
/*     ('statehood' hits are history/civics passages, not doctrine.)   */
/*     Cross-references, never re-teaches: the treaty lesson owns      */
/*     VCLT mechanics; the courts lesson owns ICJ/ICC/UNCLOS.          */
/*                                                                     */
/*  2. law-jurisdiction-immunity — the three jurisdictions             */
/*     (prescribe/adjudicate/enforce; Lotus 1927; Alvarez-Machain      */
/*     1992), five prescriptive bases (effects/Alcoa 1945, Nottebohm   */
/*     1955, Joyce 1946, passive personality revival, universality     */
/*     from piracy to Eichmann 1961), sovereign immunity absolute→     */
/*     restrictive (Schooner Exchange 1812, FSIA 1976, UN 2004         */
/*     Convention 25/30 not in force), diplomatic immunity (VCDR       */
/*     1961: 193 parties; Arts 9/22/29/31/32/39; Yvonne Fletcher      */
/*     1984; Tehran 1979 + ICJ 1980), Pinochet (No 3) 1999, act of     */
/*     state + comity. Carve evidence: 'universal jurisdiction',       */
/*     'diplomatic immunity', 'passive personality', 'act of state     */
/*     doctrine' = ZERO live hits. The courts lesson's single IHL      */
/*     concept slot is cross-referenced, not duplicated.               */
/*                                                                     */
/*  Sources: treaty texts (Montevideo 1933, VCDR 1961, Torture         */
/*  Convention 1984, Rome Statute 1998), ICJ/PCIJ reports (Lotus,      */
/*  Nottebohm, Western Sahara, Burkina/Mali, Tehran Hostages, Kosovo   */
/*  AO), House of Lords Pinochet (No 3), US Supreme Court reports      */
/*  (Schooner Exchange, Alcoa via 2d Cir., Alvarez-Machain, Altmann),  */
/*  and the standard treatises' case lines (Shaw, Janis, Oppenheim).   */
/* ------------------------------------------------------------------ */

export const x76LibraryOrgPassTopics: KnowledgeTopic[] = [
  {
    id: 'law-states-statehood-territory',
    title: 'What Makes a State? Statehood, Recognition and Territory',
    domain: 'Law & Governance',
    field: 'International Law',
    branch: 'States & Jurisdiction',
    tier: 'core',
    concepts: [
      'The Montevideo criteria: the four-part test',
      'Declaratory versus constitutive recognition',
      'Non-recognition as sanction: ex injuria jus non oritur',
      'Continuity: states survive governments',
      'How territory is acquired — and what no longer counts',
      'Uti possidetis: the decolonization boundary rule',
      'Self-determination and its tension with borders',
      'Extinction and succession: how states end',
    ],
    words: 2125,
    readMins: 11,
    addedOn: '2026-10-30',
    blocks: [
      {
        kind: 'para',
        text: 'International law still runs on states. They sign the treaties, sue each other at the International Court of Justice, sit in the General Assembly and own the continental shelves. So the discipline\'s first question is a sorting question: which entities count as states in the first place? The answer decides who may invoke the law\'s protections, who bears its obligations, and who is merely a population inside someone else\'s borders. This lesson builds the sorting machinery — the criteria, the recognition debate, the rules for acquiring territory, the boundary principle that decolonization froze into place, and the succession rules for states that end.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every geopolitical argument you will ever read — new countries, annexations, secessions, disputed borders — is secretly an argument about this lesson. Whether an entity can join the United Nations, borrow money, sign an aviation treaty or prosecute ships in its waters all turns on statehood criteria and recognition practice. The vocabulary here is the vocabulary of the daily news, used precisely.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The canonical test is the Montevideo Convention of 1933, signed at Montevideo, Uruguay on December 26 at the Seventh International Conference of American States — the conference where President Franklin D. Roosevelt and Secretary of State Cordell Hull announced the Good Neighbor policy. Article 1 states the four criteria: a permanent population; a defined territory; a government; and a capacity to enter into relations with the other states. Nineteen states signed; sixteen ratified (the United States ratified on June 29, 1934, with a reservation). The criteria are deliberately minimal, which is why microstates qualify: Nauru governs roughly twelve thousand people, Tuvalu a similar number — small is not disqualifying. The strange case is Vatican City, a tiny state created by the 1929 Lateran Treaty whose real weight in international law is carried by the Holy See, a separate subject that predates the state by centuries. Note what the test does NOT include: legitimacy, democracy, or a minimum size. A brutal dictatorship with a functioning administration satisfies Article 1; a collapsed one strains it.',
      },
      {
        kind: 'para',
        text: 'Recognition is where theory splits. The declaratory theory — the one Montevideo itself adopts in Article 3 ("the political existence of the state is independent of recognition") — says recognition merely acknowledges a legal fact: the entity either meets the criteria or it does not. The constitutive theory says recognition creates the state, which produces absurd arithmetic: if fifty states recognize and fifty do not, what is it? Practice is declaratory in law but political in life. The two-Koreas problem showed why: each Korea claimed the whole peninsula, so full recognition of both was logically impossible — states recognized one, both, or neither, and both joined the UN only in 1991 when the claims had softened. The One-China policy is the living version: most states recognize the People\'s Republic and maintain only unofficial ties with Taiwan, not because Taiwan fails the Montevideo test but because recognition is entangled with the stakes.',
      },
      {
        kind: 'para',
        text: 'Recognition can also be withheld as a sanction — lawfulness-based non-recognition. The Stimson Doctrine (named for US Secretary of State Henry Stimson, January 1932) refused to recognize Japan\'s puppet state of Manchukuo, asserting that no right arises from conquest: the Latin maxim is ex injuria jus non oritur. The modern version is the Security Council resolution declaring a proclamation "legally invalid" and calling on states not to recognize it — the treatment of Northern Cyprus after 1983, which to this day only Türkiye recognizes. The mirror-image rule: annexation by force is null and void, and the annexed state does not cease to exist. When Iraq annexed Kuwait in August 1990, Security Council Resolution 662 decided the annexation had no legal effect; Kuwait survived as a state despite seven months of occupation. This is the presumption of continuity: once a state, the burden of proof sits heavily on anyone claiming it has died.',
      },
      {
        kind: 'para',
        text: 'Territory has a classical acquisition menu, most of it now closed. OCCUPATION of terra nullius — land belonging to no one — was the colonial-era mode, but the International Court of Justice\'s Western Sahara Advisory Opinion (October 16, 1975) gutted it: lands whose peoples were socially and politically organized were not nullius, which was most of the colonized world. CESSION transfers territory by treaty (the Alaska purchase of 1867); ACCRETION adds land gradually by nature — river deltas shifting, volcanic islands rising — while avulsion changes a boundary river\'s course suddenly (a flood may move the line, a slow meander may not). PRESCRIPTION let long, peaceful possession ripen into title. What is genuinely dead is CONQUEST: the Kellogg-Briand Pact of 1928 renounced war as an instrument of national policy, and Article 2(4) of the UN Charter bans the threat or use of force against territorial integrity — which is why the Security Council annuls annexations rather than ratifying them. Boundaries settled by treaty are themselves nearly sacred: pacta sunt servanda keeps a treaty map valid even when the territory behind it changes hands by force.',
      },
      {
        kind: 'para',
        text: 'Decolonization\'s boundary rule is uti possidetis juris — from the Roman private-law formula uti possidetis, ita possideatis, "as you possess, so shall you possess." When the Spanish American colonies broke free in the 1810s and 1820s, the new republics adopted the old colonial administrative lines as international frontiers, precisely to avoid a continent of border wars. The Organization of African Unity did the same at its Cairo summit of July 1964, declaring member states to respect the borders inherited at independence — which is why Africa\'s borders so often slice through communities: the alternative was worse. The International Court of Justice generalized the principle in the Burkina Faso v. Mali Frontier Dispute (December 22, 1986), calling uti possidetis "a firmly established principle of international law" applicable wherever colonial administrative boundaries harden into national ones. It freezes injustice into lines, critics say; its defenders answer that the frozen lines are why there are not fifty more Irredentas. Both are right; the principle chooses predictability.',
      },
      {
        kind: 'para',
        text: 'Self-determination cuts across all of it. Woodrow Wilson\'s Fourteen Points (January 1918) made it a peace principle; the UN Charter (Articles 1(2) and 55) made it an obligation; the 1960 Declaration on the Granting of Independence (Resolution 1514) and Resolution 1541 turned it into decolonization machinery — the famous "salt water" test limiting external self-determination to geographically separate colonies. For peoples inside established states, the law offers internal self-determination (participation, autonomy) but not generally a right to secede. The Supreme Court of Canada said exactly this in the Quebec Secession Reference (August 20, 1998): under international law, a people adequately represented in a functioning democracy has no right to unilateral secession — though a clear majority on a clear question would trigger a duty to negotiate. Kosovo\'s 2008 declaration produced the narrowest of holdings — the International Court of Justice\'s Advisory Opinion of July 22, 2010 said the declaration itself did not violate international law, without saying Kosovo was a state. The exceptions that did become states were made by extraordinary politics: Bangladesh in 1971, and South Sudan, independent July 9, 2011 and admitted days later as the UN\'s 193rd member.',
      },
      {
        kind: 'para',
        text: 'States also end, and the ending has rules. Germany unified on October 3, 1990 by accession — the German Democratic Republic joined the Federal Republic under the Basic Law\'s Article 23, so the FRG continued while the GDR vanished. Czechoslovakia dissolved cleanly into the Czech Republic and Slovakia on January 1, 1993 — the "velvet divorce," with treaties, property and archives apportioned by agreement. The Soviet Union\'s December 1991 dissolution produced a continuator (Russia, which took the USSR\'s seat, treaties and nuclear obligations) and fourteen new states; Yugoslavia, by contrast, was held by the Badinter Commission to be "in the process of dissolution" — no continuator, all successors. Succession law (the 1978 Vienna Convention has few parties; much is custom) sorts who inherits debts, nationality, archives and treaty obligations. The test\'s practicality is the point: an entity meeting Montevideo with wide recognition is a state; recognition, once given, is rarely withdrawn; and the machine keeps the world\'s ledgers balanced.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: apply the Montevideo criteria and recognition practice to the Turkish Republic of Northern Cyprus, proclaimed November 15, 1983.',
          'Run the criteria: permanent population (yes — Turkish Cypriots and settlers), defined territory (yes — the north of the island), government (an administration exercises effective control there), capacity for relations (nominally yes, but in practice only one state recognizes it). On paper, the four boxes tick.',
          'Run the lawfulness layer: the entity was created in the aftermath of Turkey\'s 1974 military intervention, and Security Council Resolution 541 (November 15, 1983) declared the proclamation legally invalid and called on all states not to recognize it.',
          'Conclude: declaratory theory alone would call it a state; state practice adds the ex injuria jus non oritur filter, and the filter decides — no recognition means no UN membership, no treaty network, no ICJ standing. Criteria are necessary; a lawful birth and community acceptance are what make statehood stick.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'UN admission under Article 4: a Security Council recommendation plus a two-thirds General Assembly vote — the veto gate that kept membership applications of disputed entities frozen for decades',
          'Observer statuses short of membership: Palestine\'s 2012 upgrade to non-member observer state (Resolution 67/19) unlocked treaty-accession and ICC routes without a membership vote',
          'Succession machinery in action: Russia\'s assumption of the USSR\'s Security Council seat and treaty portfolio, and the Czech-Slovak apportionment agreements of 1992',
          'Boundary-settlement practice: most African and Latin American frontiers are uti possidetis lines later confirmed by bilateral treaties and ICJ chamber judgments',
          'Recognition politics: states weigh criteria against alliances — recognition decisions follow embargoes, sanctions packages and seat contests more closely than textbook logic',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three confusions cause most errors. First, state, nation and government are different things: states are legal persons, nations are communities, governments are administrations that come and go — a state outlives its government (Kuwait 1990) and a nation may lack a state (the Kurds). Second, the United Nations does not "recognize" states — it admits members; recognition is an act of individual states. Third, effective control is a criterion, not a moral verdict: the law asks whether an administration exists, not whether it is just, which is why criteria-based analysis must always be paired with the lawful-birth and recognition layers.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Montevideo criteria', def: 'The 1933 four-part statehood test: permanent population, defined territory, government, capacity for relations.' },
          { term: 'Declaratory theory', def: 'Recognition acknowledges statehood that already exists in law — the Montevideo Article 3 position.' },
          { term: 'Constitutive theory', def: 'Recognition creates statehood — rejected in scholarship for its impossible arithmetic, alive in politics.' },
          { term: 'Ex injuria jus non oritur', def: 'No legal right arises from an unlawful act — the basis for non-recognition of conquests and proxy entities.' },
          { term: 'Presumption of continuity', def: 'An existing state survives occupation, collapse of government or attempted annexation unless the contrary is clear.' },
          { term: 'Terra nullius', def: 'Land belonging to no one; largely emptied as an acquisition mode by the Western Sahara Advisory Opinion (1975).' },
          { term: 'Uti possidetis juris', def: 'Colonial or administrative boundaries harden into international frontiers at independence — Cairo 1964, Burkina Faso v Mali 1986.' },
          { term: 'Salt-water thesis', def: 'Resolution 1541\'s limit: external self-determination belonged to geographically separate overseas colonies.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which set correctly lists the four Montevideo criteria?',
            options: [
              'population, democracy, GDP, UN membership',
              'permanent population, defined territory, government, capacity to enter into relations with other states',
              'territory, recognition by two great powers, army, capital city',
              'nation, language, borders, currency',
            ],
            answer: 1,
            explain: 'Article 1 of the 1933 Convention is deliberately minimal — no size, wealth or legitimacy requirement, which is why microstates qualify.',
          },
          {
            q: 'The Stimson Doctrine and the Security Council\'s treatment of Northern Cyprus both rest on which maxim?',
            options: [
              'pacta sunt servanda',
              'ex injuria jus non oritur — no right arises from unlawful conduct',
              'par in parem non habet imperium',
              'res judicata pro veritate habetur',
            ],
            answer: 1,
            explain: 'Entities born of unlawful force are denied recognition as a sanction: Manchukuo in 1932, Northern Cyprus from 1983.',
          },
          {
            q: 'After Iraq annexed Kuwait in August 1990, Kuwait\'s statehood survived chiefly because of:',
            options: [
              'the presumption of continuity plus the Council\'s decision that the annexation was null',
              'a territorial cession treaty',
              'uti possidetis juris',
              'the salt-water thesis',
            ],
            answer: 0,
            explain: 'Resolution 662 (Aug 2, 1990) gave the annexation no legal effect — an existing state does not die by conquest.',
          },
          {
            q: 'In the Quebec Secession Reference (1998), the Supreme Court of Canada held that under international law:',
            options: [
              'any province may secede by simple referendum',
              'a people represented in a functioning democracy has no unilateral right to secede, though a clear win on a clear question creates a duty to negotiate',
              'secession is always illegal everywhere',
              'only the Security Council can approve secessions',
            ],
            answer: 1,
            explain: 'External self-determination outside the colonial "salt water" context is exceptional; the judgment built the negotiation pathway instead.',
          },
        ],
      },
    ],
  },
  {
    id: 'law-jurisdiction-immunity',
    title: 'Jurisdiction, Immunity and the Reach of National Courts',
    domain: 'Law & Governance',
    field: 'International Law',
    branch: 'States & Jurisdiction',
    tier: 'intermediate',
    concepts: [
      'Three jurisdictions: to prescribe, to adjudicate, to enforce',
      'The Lotus presumption and its retreat',
      'Five bases of prescriptive jurisdiction',
      'Sovereign immunity: from absolute to restrictive',
      'Diplomatic immunity: the Vienna machinery',
      'Universal jurisdiction: no safe haven',
      'Act of state and comity: the restraint doctrines',
    ],
    words: 2388,
    readMins: 12,
    addedOn: '2026-10-30',
    blocks: [
      {
        kind: 'para',
        text: 'A scammer in Lagos targets a widow in Toronto using servers in Frankfurt; a minister flees Caracas with the treasury; a factory in Bavaria pollutes a river that flows into Austria. Which country\'s law applies, which country\'s court may hear the case, and whose police may actually do anything? International law answers with a three-part distinction every cross-border case runs through: jurisdiction to PRESCRIBE (the power to make law reach the conduct), jurisdiction to ADJUDICATE (the power to put it before a court), and jurisdiction to ENFORCE (the power to arrest, seize and compel). The first is generous, the second procedural, and the third is ferociously territorial — no state may send its agents to investigate or arrest on another\'s soil without consent, ever. What consented abduction does to a later trial is its own puzzle: United States v. Alvarez-Machain (1992) let a trial stand after the defendant was forcibly brought from Mexico, on the old Ker-Frisbie doctrine that the manner of arrival does not defeat jurisdiction — a rule human-rights bodies condemn and domestic courts still apply.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The reach-of-law questions of the century — data held abroad, sanctions on foreign companies, bribery prosecutions, cyber intrusions, war-crimes trials in third countries — are all this lesson. Whether a government can force a platform to hand over messages stored on another continent, or try a dictator who never set foot on its soil, turns on the five bases, the immunity doctrines and the restraint principles built here.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The permanent Court\'s first great case set the default. The S.S. Lotus (France v. Turkey, judgment September 7, 1927): a French steamer collided with a Turkish collier on the high seas; Turkey prosecuted the French watch officer when the ship reached Istanbul. France objected; the PCIJ answered that states may exercise jurisdiction unless a rule of international law forbids it — the "Lotus presumption" of permissive jurisdiction, with leftovers provenance: the effects of the collision were felt on a Turkish hull, so Turkish law reached it. The presumption has since retreated — modern courts and treaties presume restraint, and human-rights treaties now limit "jurisdiction" itself — but its offspring, the EFFECTS doctrine, is alive in antitrust: Judge Learned Hand\'s Alcoa decision (Second Circuit, 1945) applied the Sherman Act to a foreign cartel whose agreements were made abroad but whose effects were aimed at United States markets, and every competition authority since has followed the logic.',
      },
      {
        kind: 'para',
        text: 'Five bases let a state prescribe. TERRITORIALITY — conduct on its soil (subjective) or with effects there (objective, per Lotus/Alcoa). NATIONALITY — states may bind their citizens everywhere (active personality); corporations count by incorporation or control, and Nottebohm (ICJ, April 6, 1955) warned that for international claims a nationality must be a genuine, effective link, not a paper flag. PROTECTIVE — conduct abroad that threatens the state\'s security or core governmental functions: counterfeiting its currency, forging its passports; the classic case Joyce v. Director of Public Prosecutions (1946) let Britain try "Lord Haw-Haw," an American-born broadcaster who had falsely held a British passport, for treason committed from Berlin. PASSIVE PERSONALITY — jurisdiction over acts harming the state\'s nationals wherever done; ridiculed in Lotus\'s era but revived by terrorism: after the Beirut embassy and marine-barracks bombings of 1983, the United States\' 1984 statute claimed jurisdiction over terrorist attacks on its nationals abroad. UNIVERSALITY — certain offenses are hostis humani generis, enemies of all: piracy (now UNCLOS Article 105 — every state may seize a pirate ship on the high seas), the slave trade, and later hijacking, hostage-taking, genocide, torture and war crimes by treaty.',
      },
      {
        kind: 'para',
        text: 'The treaty network multiplies bases into obligations. Hijacking conventions from The Hague (1970) and Montreal (1971) built in aut dedere aut judicare — extradite or prosecute: a state in whose territory an alleged offender finds itself must submit the case to prosecution if it does not extradite, closing the safe-haven gap. The Torture Convention (1984) carries the same engine in Article 7, and the OECD Anti-Bribery Convention (signed November 21, 1997) obliged its parties to reach their companies\' bribery of foreign officials — nationality and territorial jurisdiction paired with the prosecute-or-extradite duty. This is how jurisdiction without custody becomes custody eventually: the net is woven from these treaties, and Interpol red notices — requests, not warrants, barred by the constitution from political, military or religious cases — keep the targets visible at borders.',
      },
      {
        kind: 'para',
        text: 'Sovereign immunity is the counterweight: par in parem non habet imperium — an equal has no power over an equal. The Supreme Court of Chief Justice John Marshall began the American line in The Schooner Exchange v. McFaddon (1812), immune-treating a French warship in a Philadelphia port: a sovereign allowing foreign warships into its harbors impliedly consents to their immunity. For a century the rule was ABSOLUTE — a foreign state could not be sued, full stop. The twentieth century\'s commercial states changed that: governments now ran airlines, traded oil, issued contracts, and the shift to RESTRICTIVE immunity separates acta jure imperii (sovereign acts — warships, diplomacy, legislation) from acta jure gestionis (commercial acts — suable). The United States codified it in the Foreign Sovereign Immunities Act of 1976, with a commercial-activity exception and later a terrorism exception; the United Kingdom\'s State Immunity Act followed in 1978; Europe\'s 1972 Convention led the way. The UN Convention on Jurisdictional Immunities of States and Their Property (adopted December 2, 2004) would consolidate the restrictive consensus but is still short of its 30 ratifications (25 parties as of 2026) — not yet in force, though its text already shapes national statutes. Two refinements matter: execution immunity (seizing a foreign state\'s property) is far stricter than adjudicative immunity, and courts routinely defer to the executive\'s "suggestion of immunity" — foreign policy speaks first.',
      },
      {
        kind: 'para',
        text: 'Diplomatic immunity is the oldest working piece of the system, codified by the Vienna Convention on Diplomatic Relations (signed April 18, 1961, in force April 24, 1964, 193 parties). Three rationales justify it: the personified-sovereign fiction, the receiving state\'s consent doctrine, and — the modern core — functional necessity: an ambassador who could be arrested is an ambassador who can be silenced. The machinery: Article 29 makes the diplomat\'s person inviolable; Article 31 grants absolute criminal immunity (civil suits too, with commercial and tort exceptions); Article 32 lets only the SENDING state waive; Article 9 lets the receiving state declare any diplomat persona non grata at any time, without giving reasons — the standard response to misbehavior, ending with the diplomat\'s recall; Article 22 makes mission premises inviolable — local forces may not enter even to extinguish a fire, which is what made the 1984 Libyan People\'s Bureau siege in London (after WPC Yvonne Fletcher was shot from inside) end with the diplomats walking out untouched. The system\'s cost case is Tehran: the seizure of the United States embassy in November 1979 and the holding of its staff for 444 days produced the ICJ\'s Tehran Hostages judgment (May 24, 1980) — Iran had breached its obligations but the breach was not undone; immunity is the price of embassies that work almost everywhere else. Consular officers (Vienna Convention 1963) get only functional immunity for official acts — a narrower shield most consulates see daily.',
      },
      {
        kind: 'para',
        text: 'Universal jurisdiction is the doctrine that turned "no safe haven" from slogan to statute. Its modern proof is Eichmann, tried in Jerusalem in 1961 for organizing the deportation of Europe\'s Jews — a state that did not exist during the crimes, over a defendant found by covert operation, arguing only that these crimes injured all of humanity and any court may judge them. The principle\'s sharpest limit case is Pinochet (No 3) (House of Lords, March 24, 1999): a former head of state retains immunity for official acts, but torture after the Torture Convention entered into force is not an official act — the Convention assumes a duty to prosecute or extradite that immunity would nullify. The ratio is narrow (torture, convention parties, post-1988 conduct for the extraterritorial limb) but the signal was global: Belgium\'s 1993 universal-jurisdiction law (narrowed in 2003 after political blowback), and national war-crimes units from The Hague to Toronto. Note carefully what universal jurisdiction is NOT: the International Criminal Court sits on CONSENT — its jurisdiction rests on the territorial state or nationality being a party, a Security Council referral, or an accepted declaration under the Rome Statute, which entered into force July 1, 2002.',
      },
      {
        kind: 'para',
        text: 'Two doctrines of restraint close the system. The act of state doctrine (Underhill v. Hernandez, 1897: "every sovereign state must respect the independence of every other") makes national courts decline to judge the validity of a foreign state\'s official acts within its own territory — even where international law was violated, the door stays shut unless exceptions (commercial activity, treaty commands) open it. And comity — Hilton v. Guyot (1895)\'s "recognition which one nation allows within its territory to the legislative, executive or judicial acts of another, having due regard both to international duty and convenience" — is the courtesy layer that lets judgments travel, forum non conveniens dismissals route cases to better courts, and blocking statutes (the United Kingdom\'s 1980 Protection of Trading Interests Act, answering Alcoa-style reach) push back. Jurisdiction\'s map is drawn in authority; restraint\'s map is drawn in wisdom, and practitioners need both.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: map jurisdiction over an engineer who is a citizen of State A, works for a company incorporated in State B, bribes an official of State C, and routes the payment through a bank in State D.',
          'Prescription: State C has territorial jurisdiction (the bribe\'s effects and the corrupt act on its soil); States A and B have nationality jurisdiction over the engineer and the company — both are parties to the OECD Anti-Bribery Convention, which obliges them to assert it; no state has a protective or passive-personality claim; universality does not attach to ordinary corruption.',
          'Adjudication and enforcement: any claiming state can try him if he is present — but only the state with custody can arrest; others depend on extradition (aut dedere aut judicare for treaty crimes) or red notices. Evidence must come from MLAT requests to States B and D.',
          'Immunity: the company has none — a commercial actor is acta jure gestionis under any restrictive-immunity statute; the official\'s immunity belongs to State C\'s system, not to the bribe-payer\'s defense. Conclusion: three overlapping prescriptive claims, one enforcement bottleneck, zero immunity shields — the standard modern anti-bribery case map.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Foreign-bribery enforcement: the Foreign Corrupt Practices Act of 1977 (born of the mid-1970s Lockheed disclosures) and its OECD descendants prosecuting corporations on nationality and effects theories',
          'Cross-border evidence: mutual legal assistance treaties and the 2001 Budapest Convention on cybercrime keeping enforcement inside the territorial rule',
          'Sanctions and blocking statutes: states reach conduct by prescription while competitors legislate against the reach itself',
          'Persona non grata practice: reciprocal expulsions of diplomats remain the everyday currency of political disputes, precisely because Article 9 needs no stated reason',
          'War-crimes accountability: national universal-jurisdiction trials (from Eichmann to the Pinochet extradition litigation) running parallel to the consent-based International Criminal Court',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Four traps. Do not conflate the three jurisdictions: a state may prescribe broadly (five bases) yet enforce only on its own territory or by consent — the prescription-enforcement gap is where most exam arguments live. Do not say diplomats are "above the law": immunity bars prosecution, but the sending state can waive, and the persona non grata declaration ends the posting without reasons — accountability travels by other rails. Do not call the International Criminal Court "universal jurisdiction" — the Court sits on consent and complementarity, a different architecture. And do not cite the Lotus presumption as today\'s law: the permissive default has been narrowed by treaties, by human-rights limits on extraterritorial jurisdiction, and by a general turn to restraint.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Prescriptive jurisdiction', def: 'A state\'s power to make its law reach conduct — the broadest of the three jurisdictions.' },
          { term: 'Lotus presumption', def: 'The 1927 PCIJ default that jurisdiction is permitted unless forbidden — since narrowed by treaties and restraint doctrine.' },
          { term: 'Effects doctrine', def: 'Territorial reach over foreign conduct whose intended effects land at home — Alcoa (1945) and modern antitrust.' },
          { term: 'Passive personality', def: 'Jurisdiction based on the victim\'s nationality — dormant after Lotus, revived against terrorism in the 1980s.' },
          { term: 'Aut dedere aut judicare', def: 'Treaty duty to extradite or prosecute an offender found in the territory — the no-safe-haven engine.' },
          { term: 'Restrictive immunity', def: 'Foreign states immune for sovereign acts (acta jure imperii) but suable for commercial acts (acta jure gestionis).' },
          { term: 'Persona non grata', def: 'The Article 9 declaration ending a diplomat\'s posting, without stated reasons — immunity\'s everyday counterweight.' },
          { term: 'Act of state doctrine', def: 'Courts decline to judge the validity of foreign states\' official acts within their own territory (Underhill v. Hernandez).' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In The Schooner Exchange v. McFaddon (1812), Chief Justice Marshall\'s holding founded:',
            options: [
              'universal jurisdiction over piracy',
              'sovereign immunity for foreign warships in port — the seed of the absolute era',
              'the effects doctrine in antitrust',
              'the act of state doctrine',
            ],
            answer: 1,
            explain: 'A French warship in Philadelphia was immune: entry into port implied consent to immunity — absolute immunity\'s American starting point.',
          },
          {
            q: 'The "Lord Haw-Haw" case (Joyce, 1946) is the leading illustration of which prescriptive basis?',
            options: [
              'passive personality',
              'protective jurisdiction',
              'universality',
              'objective territoriality',
            ],
            answer: 1,
            explain: 'Broadcasting for the enemy from Berlin while holding a British passport threatened the state\'s security — the protective principle.',
          },
          {
            q: 'A London police constable is shot from inside the Libyan People\'s Bureau in 1984. Under the Vienna Convention on Diplomatic Relations, the police could:',
            options: [
              'enter the premises immediately to arrest the suspect',
              'not enter — Article 22 inviolability — but could declare the responsible diplomats persona non grata',
              'try the diplomats in absentia',
              'seize the premises as evidence',
            ],
            answer: 1,
            explain: 'Premises are inviolable even to stop a fire; the lawful responses were the siege, negotiated exit, and PNG declarations.',
          },
          {
            q: 'The House of Lords in Pinochet (No 3) (1999) allowed the extradition process to continue because:',
            options: [
              'former heads of state enjoy no immunity at all',
              'torture under the Torture Convention is not an official act, so head-of-state immunity could not bar the convention-based process',
              'Spain had universal jurisdiction over all crimes',
              'the ICC had issued a warrant',
            ],
            answer: 1,
            explain: 'The narrow ratio: convention torture cannot be an official function — immunity yields to the prosecute-or-extradite duty, on the facts, post-1988.',
          },
        ],
      },
    ],
  },
]
