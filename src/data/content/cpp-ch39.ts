import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup — The C++ Programming Language, 4th Edition
// Chapter 39: Locales (Sections 39.1 – 39.6)
// Master study content.
// ============================================================================

export const cppCh39Content: SectionContent[] = [
  // ---------------------------------------------------------------- 39.1
  {
    sectionId: 'cpp-ch39-s1',
    readingTime: 5,
    intro: 'A program that works in Copenhagen must also work in Cairo and Chicago: the same double 1234.56 must print as 1,234.56 or as 1.234,56, names must sort by the local alphabet, and dates, currency and even the question of which characters count as letters all vary. Stroustrup\'s solution is to treat cultural conventions as data rather than logic: each convention is encapsulated in a facet, facets are collected into a locale, and I/O streams are parameterized by the locale they are imbued with. This section frames the problem; the rest of the chapter builds the machinery.',
    objectives: [
      'Explain why culture-dependent behavior must be isolated from program logic',
      'List the kinds of cultural difference a program can meet',
      'Describe the locale/facet division of the standard library',
    ],
    concepts: [
      {
        term: 'The internationalization problem',
        kind: 'insight',
        statement: '**Keep the program logic culture-independent and confine the culture-dependent behavior to the I/O layer.** The core computes with abstract values — the double 1234.56, a timestamp, an amount in cents — while conventions such as decimal points, digit grouping, date layout and currency symbols belong to the input/output code, where the locale machinery can reach them.',
        detail: 'Cultural conventions are *data*, not logic: each is a facet, facets are collected in a locale, and a stream\'s formatting is driven by the locale it is imbued with.',
      },
      {
        term: 'Kinds of cultural difference',
        kind: 'definition',
        statement: 'The differences a program meets: **character classification** (is a character a letter — depends on the alphabet), **numeric punctuation** (decimal point `.` or `,`, thousands separators, digit grouping), **date and time layout** (`Dec 25, 2015` vs `25/12/2015` vs ISO `2015-12-25`), **currency** (symbol, placement, sign conventions), **collation** (the ordering used to sort names) and **messages** (translated user-visible strings).',
        detail: 'The book\'s striking example is Danish: `aa` is alphabetized as the letter they write after `z`, so Aarhus sorts *after* Zurich in a Danish phone book.',
      },
      {
        term: 'Locales and facets',
        kind: 'definition',
        statement: 'A **locale** is an object representing a set of cultural conventions; it is implemented as a container of **facets**, each holding one aspect of that culture (number punctuation, character classification, collation, …). The standard library supplies a set of standard facets, a programmer can add new ones, and I/O streams are imbued with locales so that `<<` and `>>` format according to the imbued conventions.',
        detail: 'The default is the classic locale, named `"C"` after the C language\'s home conventions: period decimal point, no digit grouping, byte-order sorting.',
      },
      {
        term: 'Handling Cultural Differences: the working contract',
        kind: 'definition',
        statement: '**Handling Cultural Differences.** Why locales exist. You can claim this section when you can explain why culture-dependent behavior must be isolated from program logic — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 39 (Locales); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Handling Cultural Differences: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, list the kinds of cultural difference a program can meet. Then, describe the locale/facet division of the standard library. Finally, test the outcome against the section promise: Culture-dependent behavior belongs in the I/O layer; the core computes with invariant values.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Sorting a Danish phone book',
        problem: 'Order the two names "Aarhus" and "Zurich" first under the classic C locale, then under a Danish locale. What differs?',
        steps: [
          { label: 'Step 1: classic locale', text: 'Collation is byte order: the first bytes decide, `A` (65) < `Z` (90), so "Aarhus" sorts before "Zurich".' },
          { label: 'Step 2: Danish locale', text: 'In Danish the digraph "aa" is collated as the letter that follows `z` — the city\'s name is read as "Århus" — so "Zurich" now sorts before "Aarhus".' },
          { label: 'Step 3: What changed', text: 'The strings are untouched; only the collation rule was swapped, by taking the `collate` facet from a different locale. The sort algorithm itself is identical.' },
        ],
        result: 'Same two names, opposite orders: the strings are the data, the ordering rule is a facet (the exact locale name — e.g. `da_DK.UTF-8` — is implementation-defined).',
      },
      {
        title: 'Working through handling cultural differences',
        problem: 'Why locales exist. Your task: explain why culture-dependent behavior must be isolated from program logic.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain why culture-dependent behavior must be isolated from program logic. Write down the guarantee you will rely on — for this chapter it is: Culture-dependent behavior belongs in the I/O layer; the core computes with invariant values.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::locale loc(tag); std::cout.imbue(loc);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — list the kinds of cultural difference a program can meet — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Conventions differ in classification, numeric punctuation, dates, currency, collation and messages. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Culture-dependent behavior belongs in the I/O layer; the core computes with invariant values. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Culture-dependent behavior belongs in the I/O layer; the core computes with invariant values.',
      'Conventions differ in classification, numeric punctuation, dates, currency, collation and messages.',
      'A locale collects facets; each facet owns one cultural aspect; streams consult the imbued locale.',
    ],
    quiz: [
      {
        q: 'In the classic C locale "Aarhus" sorts before "Zurich" (65 < 90). In a Danish locale the order reverses because:',
        options: [
          'In Danish, "aa" is collated as the letter following "z", so "Aarhus" is read last',
          'Danish compares UTF-16 code units rather than bytes',
          'Danish collation is case-insensitive only',
          'The C locale compares string lengths first',
        ],
        answer: 0,
        explanation: 'Danish treats the digraph "aa" as the letter written after "z" — a collation fact, invisible to byte-order comparison.',
      },
      {
        q: 'Which property of a program should be *invariant* across cultures?',
        options: [
          'The decimal-point character',
          'The numeric value parsed into a double',
          'The digit-grouping width',
          'The currency symbol',
        ],
        answer: 1,
        explanation: 'The whole design keeps the computed value culture-independent; only its textual presentation varies, driven by facets.',
      },
      {
        q: 'The mechanism C++ uses to carry a set of cultural conventions is:',
        options: [
          'a set of preprocessor macros per target market',
          'a family of printf flags',
          'a locale object holding facets',
          'a per-country set of compiled string tables',
        ],
        answer: 2,
        explanation: 'A locale is a container of facets; streams are imbued with locales to control formatting and parsing.',
      },
    ],
  },

  // ---------------------------------------------------------------- 39.2
  {
    sectionId: 'cpp-ch39-s2',
    readingTime: 7,
    intro: 'Class locale is the hub of the model — and it is deliberately tiny: a copyable handle to a set of facets, nothing more. All the cultural knowledge lives in the facets; the locale selects, owns and shares them. This section covers the object model: cheap copying, immutability, names and equality, the classic and global locales, and how a stream gets its locale.',
    objectives: [
      'Use named, classic, global and environment locales, and know which names are portable',
      'State the immutability and equality rules of class locale',
      'Tie a stream to a locale with `imbue()` and read it back with `getloc()`',
    ],
    concepts: [
      {
        term: 'The locale object',
        kind: 'definition',
        statement: 'A **locale** is a small object acting as a handle to a set of facets; **copying a locale is cheap** (the facets are shared and reference-counted), so locales are passed by value. All cultural information lives in the facets — the locale itself only selects and owns them. `loc.name()` returns the locale\'s name, or `"*"` if the locale was constructed rather than named.',
        detail: 'This is why `imbue()` takes a locale by value and `getloc()` returns one by value: nobody worries about ownership.',
      },
      {
        term: 'Immutability and identity',
        kind: 'law',
        statement: '**A locale is immutable.** You never modify a locale; you construct new ones from existing ones — installing a facet, combining locales, or taking a category from another locale. Two locales `a` and `b` compare equal iff one is a copy of the other, or both have names and the names are equal; a constructed (unnamed) locale is equal only to its own copies.',
        detail: 'Immutability is what makes sharing safe: a stream, your code and a facet table can all hold the same locale, and nobody can change it under anyone else\'s feet.',
      },
      {
        term: 'The classic, global and environment locales',
        kind: 'definition',
        statement: '`locale::classic()` returns the locale named **"C"** — the neutral default: `.` decimal point, no grouping, byte-order collation. `locale("")` constructs the **user\'s preferred locale** from the environment. `locale::global(loc)` installs `loc` as the **global locale** (the default for newly created streams), returns the previous global, and — if `loc` has a name — also sets the C library\'s locale. Existing streams such as `cin` and `cout` are *not* affected by a global change.',
        detail: 'A stream carries its own locale: set it with `imbue(loc)` and read it with `getloc()` — every subsequent operation uses it.',
      },
      {
        term: 'Class locale: the working contract',
        kind: 'definition',
        statement: '**Class locale.** The locale object model. You can claim this section when you can use named, classic, global and environment locales, and know which names are portable — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 39 (Locales); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Class locale: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, state the immutability and equality rules of class locale. Then, tie a stream to a locale with `imbue()` and read it back with `getloc()`. Finally, test the outcome against the section promise: A locale is a cheap, immutable handle to a shared set of facets; construct new ones, never modify.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    figures: [
      {
        caption: 'A locale is an immutable table from facet **id** (the key) to **facet** (the value). Constructing `locale loc(locale::classic(), new My_punct)` builds a *new* table sharing the untouched facets with `classic()` — their use counts rise to 2 — and installs the new facet under the existing key `numpunct<char>::id`, displacing (but not destroying) the classic `numpunct`, which `classic()` still owns. `use_facet<numpunct<char>>(loc)` is a lookup by that key, returning a `const My_punct&`.',
        svg: `<svg viewBox="0 0 780 484" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two locale objects drawn as tables from facet id to facet, sharing reference-counted facet objects; a constructed locale installs a new facet under the numpunct key"><defs><marker id="cpp39a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="20" y="12" width="740" height="48" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="390" y="31" text-anchor="middle" font-size="13" fill="currentColor">locale loc(locale::classic(), new My_punct);</text><text x="390" y="50" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.85">// My_punct : numpunct&lt;char&gt; — thousands separator ' ' , digit groups of three</text><rect x="20" y="84" width="290" height="120" rx="10" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.8"/><text x="165" y="106" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">locale::classic()</text><text x="165" y="123" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.85">name "C"</text><text x="34" y="147" font-size="12.5" fill="currentColor">ctype&lt;char&gt;::id</text><text x="34" y="173" font-size="12.5" fill="currentColor">collate&lt;char&gt;::id</text><text x="34" y="199" font-size="12.5" fill="currentColor">numpunct&lt;char&gt;::id</text><rect x="20" y="278" width="290" height="120" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/><text x="165" y="300" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">locale loc</text><text x="165" y="317" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.85">name "*" — constructed, unnamed</text><text x="34" y="341" font-size="12.5" fill="currentColor">ctype&lt;char&gt;::id</text><text x="34" y="367" font-size="12.5" fill="currentColor">collate&lt;char&gt;::id</text><text x="34" y="393" font-size="12.5" fill="currentColor">numpunct&lt;char&gt;::id</text><rect x="432" y="84" width="328" height="74" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8"/><text x="596" y="106" text-anchor="middle" font-size="13.5" font-weight="bold" fill="currentColor">ctype&lt;char&gt;</text><text x="596" y="124" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.9">256-entry classification table</text><text x="596" y="143" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.75">use count: 2</text><rect x="432" y="168" width="328" height="74" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8"/><text x="596" y="190" text-anchor="middle" font-size="13.5" font-weight="bold" fill="currentColor">collate&lt;char&gt;</text><text x="596" y="208" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.9">byte-order compare</text><text x="596" y="227" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.75">use count: 2</text><rect x="432" y="252" width="328" height="74" rx="10" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><text x="596" y="274" text-anchor="middle" font-size="13.5" font-weight="bold" fill="currentColor" opacity="0.8">numpunct&lt;char&gt; — classic</text><text x="596" y="292" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.75">decimal point '.' , no grouping</text><text x="596" y="311" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.7">use count: 1 — classic() only</text><rect x="432" y="336" width="328" height="74" rx="10" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2.4"/><text x="596" y="358" text-anchor="middle" font-size="13.5" font-weight="bold" fill="currentColor">My_punct : numpunct&lt;char&gt;</text><text x="596" y="376" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.9">separator ' ' , digit groups of three</text><text x="596" y="395" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.75">use count: 1 — owned by loc</text><line x1="310" y1="143" x2="432" y2="121" stroke="currentColor" stroke-width="1.3" opacity="0.7" marker-end="url(#cpp39a)"/><line x1="310" y1="169" x2="432" y2="205" stroke="currentColor" stroke-width="1.3" opacity="0.7" marker-end="url(#cpp39a)"/><line x1="310" y1="195" x2="432" y2="289" stroke="currentColor" stroke-width="1.3" opacity="0.7" marker-end="url(#cpp39a)"/><line x1="310" y1="337" x2="432" y2="121" stroke="currentColor" stroke-width="1.3" opacity="0.7" marker-end="url(#cpp39a)"/><line x1="310" y1="363" x2="432" y2="205" stroke="currentColor" stroke-width="1.3" opacity="0.7" marker-end="url(#cpp39a)"/><line x1="310" y1="389" x2="432" y2="373" stroke="currentColor" stroke-width="2.4" marker-end="url(#cpp39a)"/><text x="371" y="365" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.85">new facet, same key</text><rect x="20" y="424" width="740" height="52" rx="8" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/><text x="390" y="445" text-anchor="middle" font-size="12" fill="currentColor">use_facet&lt;numpunct&lt;char&gt;&gt;(loc): look up the key numpunct&lt;char&gt;::id in loc's table — returns const My_punct&amp;</text><text x="390" y="464" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.85">immutability: constructing loc never touched classic() — unchanged facets are shared, not copied</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Three prints of one number',
        problem: 'Print `double x = 1234567.89;` with `cout << x` under the default locale, an `en_US.UTF-8` locale, and a `de_DE.UTF-8` locale. What appears on screen?',
        steps: [
          { label: 'Step 1: default', text: 'A fresh `cout` is imbued with the classic locale: no grouping, `.` decimal point — output `1234567.89`.' },
          { label: 'Step 2: US', text: '`cout.imbue(locale("en_US.UTF-8"));` — `numpunct` supplies thousands separator `,` and grouping `\'\\003\'` (groups of three): `1,234,567.89`.' },
          { label: 'Step 3: German', text: '`cout.imbue(locale("de_DE.UTF-8"));` — decimal point `,`, separator `.`: `1.234.567,89`.' },
          { label: 'Step 4: What stayed fixed', text: '`x` is the same double throughout; only the punctuation changed. (Names beyond `"C"` and `""` are implementation-defined; these are the conventional POSIX spellings.)' },
        ],
        result: 'One value, three renderings: `1234567.89`, `1,234,567.89`, `1.234.567,89` — the choice is a facet\'s, not the algorithm\'s.',
      },
      {
        title: 'Working through class locale',
        problem: 'The locale object model. Your task: use named, classic, global and environment locales, and know which names are portable.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: use named, classic, global and environment locales, and know which names are portable. Write down the guarantee you will rely on — for this chapter it is: A locale is a cheap, immutable handle to a shared set of facets; construct new ones, never modify.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::locale loc(tag); std::cout.imbue(loc);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — state the immutability and equality rules of class locale — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: "C" is the neutral default, "" the environment locale; `global()` changes the default for *new* streams only. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A locale is a cheap, immutable handle to a shared set of facets; construct new ones, never modify. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A locale is a cheap, immutable handle to a shared set of facets; construct new ones, never modify.',
      '"C" is the neutral default, "" the environment locale; `global()` changes the default for *new* streams only.',
      '`imbue()`/`getloc()` tie a stream to a locale; equality means copies, or names that match.',
    ],
    quiz: [
      {
        q: '`locale("")` constructs:',
        options: [
          'the classic C locale',
          'a locale with no facets at all',
          'the user\'s preferred locale, taken from the environment',
          'a locale literally named "*"',
        ],
        answer: 2,
        explanation: 'The empty string asks the implementation for the environment\'s preferred locale — the standard\'s only other guaranteed name besides "C".',
      },
      {
        q: 'Right after `locale::global(locale("de_DE.UTF-8"));` executes, `cout << 1234567.89` prints:',
        options: [
          '`1.234.567,89` — cout follows the new global locale',
          '`1234567.89` — existing streams keep their own imbued locale',
          'nothing until cout is re-opened',
          'an implementation-defined string, since the call was illegal',
        ],
        answer: 1,
        explanation: 'The global locale is the default for *newly created* streams; cin, cout and friends keep the locale they were imbued with.',
      },
      {
        q: 'Two locales `a` and `b` compare equal (`a == b`) iff:',
        options: [
          'they hold facet objects at the same addresses',
          'every facet in `a` has a counterpart in `b` with identical behavior',
          'equality is left implementation-defined for unnamed locales',
          'one is a copy of the other, or both have names and the names are equal',
        ],
        answer: 3,
        explanation: 'Copies are always equal; otherwise two *named* locales are equal exactly when their names match. A constructed (unnamed) locale equals only its own copies.',
      },
    ],
  },

  // ---------------------------------------------------------------- 39.3
  {
    sectionId: 'cpp-ch39-s3',
    readingTime: 6,
    intro: 'Facets are where the locale model earns its keep as an extension mechanism. A facet encapsulates one cultural aspect behind a family of virtual functions; the standard defines about a dozen families, and you can add your own by deriving from an existing one. The key questions are how a locale finds a facet (by id), how you install yours (with `new`, into a constructed locale), and how locales are combined.',
    objectives: [
      'Explain what a facet is and how `use_facet`/`has_facet` find it by id',
      'Add a user-defined facet by deriving from a standard facet',
      'Compose locales with the facet constructor, `combine()` and categories',
    ],
    concepts: [
      {
        term: 'class facet',
        kind: 'definition',
        statement: 'A **facet** encapsulates one cultural aspect. Every facet derives from `locale::facet`, and each facet family carries a static member `id` of type `locale::id` identifying it inside a locale. `use_facet<F>(loc)` looks the facet up by `F::id` and returns a `const F&`; `has_facet<F>(loc)` tests presence without throwing — `use_facet` throws `bad_cast` when the family is absent.',
        detail: 'The reference is const because a locale\'s meaning is fixed at construction: facets are never modified in place.',
      },
      {
        term: 'Facets as the extension mechanism',
        kind: 'method',
        statement: 'The set of facets in a locale is **open-ended**: derive your own facet (from an existing facet family, or from `locale::facet` with an `id` member) and install it — `locale loc(l, new My_facet);` constructs an unnamed copy of `l` with your facet in place of the family it implements. No standard class is edited; the locale model extends itself.',
        detail: 'The virtual functions with the `do_` prefix are the customization points: a facet derived from `numpunct<char>` overrides `do_decimal_point()`, `do_thousands_sep()`, `do_grouping()`, and the public non-virtuals forward to them.',
      },
      {
        term: 'Combining locales',
        kind: 'method',
        statement: '`locale(l, new F)` — a copy of `l` with `F` replacing `l`\'s facet of that family. `loc.combine<F>(other)` — a copy of `loc` with the `F` facet taken from `other`. `locale(l1, l2, cat)` — a copy of `l1` with all facets of category `cat` (e.g. `locale::numeric`, `locale::time`) taken from `l2`.',
        detail: 'A typical composition: an otherwise-English locale with German number formatting — `locale(loc_en, loc_de, locale::numeric)`.',
      },
      {
        term: 'Class facet: the working contract',
        kind: 'definition',
        statement: '**Class facet.** Facets as extension points. You can claim this section when you can explain what a facet is and how `use_facet`/`has_facet` find it by id — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 39 (Locales); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Class facet: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, add a user-defined facet by deriving from a standard facet. Then, compose locales with the facet constructor, `combine()` and categories. Finally, test the outcome against the section promise: `use_facet<F>(loc)` is a lookup by `F::id`; `has_facet` tests, `use_facet` throws `bad_cast` when absent.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'A user-defined number format',
        problem: 'Print numbers with a blank as thousands separator — `12345678.9` as `12 345 678.9` — without touching the decimal point or any other convention.',
        steps: [
          { label: 'Step 1: Derive', text: '`class My_punct : public numpunct<char> { public: explicit My_punct(size_t r = 0) : numpunct<char>(r) {} protected: char do_thousands_sep() const override { return \' \'; } string do_grouping() const override { return "\\003"; } };` — only the separator and grouping are overridden; `do_decimal_point()` keeps the classic `.`.' },
          { label: 'Step 2: Install', text: '`cout.imbue(locale(cout.getloc(), new My_punct));` — the locale constructor takes ownership of the new facet and builds a copy of cout\'s locale with it under the key `numpunct<char>::id`.' },
          { label: 'Step 3: Use', text: 'Every later `cout << x` goes through `num_put`, which consults the stream\'s `numpunct`: separator `\' \'`, grouping `\'\\003\'` (groups of three).' },
          { label: 'Step 4: Verify', text: '8 integer digits group as 12 | 345 | 678 with the blank, and the fraction keeps the classic point: `12 345 678.9`.' },
        ],
        result: '`cout << 12345678.9` prints `12 345 678.9` — three lines of code, no standard class modified, and the stream\'s locale did the rest.',
      },
      {
        title: 'Working through class facet',
        problem: 'Facets as extension points. Your task: explain what a facet is and how `use_facet`/`has_facet` find it by id.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: explain what a facet is and how `use_facet`/`has_facet` find it by id. Write down the guarantee you will rely on — for this chapter it is: `use_facet<F>(loc)` is a lookup by `F::id`; `has_facet` tests, `use_facet` throws `bad_cast` when absent.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::locale loc(tag); std::cout.imbue(loc);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — add a user-defined facet by deriving from a standard facet — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Derive from a standard facet, override the `do_` virtuals, install with `locale(l, new F)`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `use_facet<F>(loc)` is a lookup by `F::id`; `has_facet` tests, `use_facet` throws `bad_cast` when absent. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      '`use_facet<F>(loc)` is a lookup by `F::id`; `has_facet` tests, `use_facet` throws `bad_cast` when absent.',
      'Derive from a standard facet, override the `do_` virtuals, install with `locale(l, new F)`.',
      '`locale(l, new F)`, `combine<F>(other)` and category constructors compose locales — always by construction, never by mutation.',
    ],
    quiz: [
      {
        q: '`use_facet<ctype<char>>(loc)` returns:',
        options: [
          'a `const` reference to the locale\'s `ctype<char>` facet, throwing `bad_cast` if there is none',
          'a copy of the facet, safe to modify locally',
          'a facet pointer the caller must eventually delete',
          'an optional-like wrapper that is empty when absent',
        ],
        answer: 0,
        explanation: 'Facets are never copied or owned by users: `use_facet` lends a const reference, and absence is the `bad_cast` it throws.',
      },
      {
        q: 'For a user-defined facet type to be installable in a locale, it must:',
        options: [
          'be copy-assignable and cheaper to copy than a pointer',
          'derive (directly or indirectly) from `locale::facet` and have a static `locale::id` member',
          'be registered at startup with a global facet table',
          'have a public `name()` returning a unique string',
        ],
        answer: 1,
        explanation: 'The `id` is the key the locale uses to store and find the facet; deriving from `locale::facet` gives it the reference-counted base.',
      },
      {
        q: '`locale loc(old_loc, new F);` produces:',
        options: [
          'a modified `old_loc`',
          'a compile error when `old_loc` is unnamed',
          'an unnamed copy of `old_loc` with `F` installed under `F`\'s family key, replacing the old facet',
          'a named locale whose name is "F"',
        ],
        answer: 2,
        explanation: 'Construction, never mutation: the old locale is untouched and the constructed locale is unnamed (its `name()` is "*").',
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Facet mechanics: reference counts and lifetimes',
        blocks: [
          {
            kind: 'para',
            body: "The ownership problem is harder than it looks. A facet must live as long as *any* locale holding it — and locales get copied into every stream they imbue, passed by value through interfaces, and stored in containers — yet the only way a user can create a facet is `new`, and the user must never `delete` it. The standard resolves this with three deliberate restrictions on `locale::facet`: the reference count is **private** (only the locale machinery may touch it), the destructor is **protected** (nobody outside the library can destroy a facet through a pointer), and the locale is the only agent that adds or removes references. A facet is never copied; locales *share* the one object. That is also why `use_facet` hands back a `const` reference and not a value: there is exactly one `My_punct`, and its identity is part of the locale's meaning.",
          },
          {
            kind: 'theorem',
            heading: 'The facet lifetime law',
            body: "Every facet is constructed with a reference argument — `facet(size_t refs = 0)` — that decides who owns the storage. **If `refs == 0` (the default), the library owns the facet:** each locale that comes to hold it — by a constructor that incorporates it, by copy, or by `combine()` — increments its use count; each locale that ceases to hold it decrements it; when the count reaches zero, the facet is destroyed by the locale machinery. **If `refs >= 1`, the library never destroys it:** the count still moves, but deletion becomes the facet author's problem — the idiom for a facet of static storage duration installed into unboundedly many locales. Corollaries: (1) a `refs == 0` facet must reach a locale constructor, or it leaks; (2) nobody can double-delete a facet, because nobody can call its destructor; (3) copying a locale is always cheap — it copies a handle and bumps counts, never the facets themselves.",
          },
          {
            kind: 'example',
            heading: 'Five steps in the life of a My_punct',
            body: "Trace one facet through a plausible program, watching the use count $c$ move $0 \\to 1 \\to 2 \\to 1 \\to 0$. **(1)** `new My_punct` — created, held by no one: $c = 0$. **(2)** `locale loc(locale::classic(), p);` — the constructor installs `p` under the key `numpunct<char>::id`: $c = 1$. **(3)** `cout.imbue(loc);` — the stream stores a *copy* of the locale, so every count in the table bumps: $c = 2$ (the shared `ctype<char>` and `collate<char>` rise too, co-owned with `classic()`). **(4)** the local `loc` dies at the end of its scope: $c = 1$ — still alive through `cout`. **(5)** `cout.imbue(locale::classic());` — the stream drops the whole table: $c = 0$, and `~My_punct()` runs *now*. The trap this sets: `const My_punct& r = use_facet<My_punct>(cout.getloc());` saved across step (5) is a dangling reference — `use_facet` lends you the facet, it does not keep it alive.",
          },
          {
            kind: 'remark',
            heading: 'Why use_facet returns what it returns',
            body: "`use_facet` returns a `const F&` for two reasons. First, a locale's meaning must be fixed at construction: two locales sharing a facet must mean the same thing, so nothing reachable from an existing locale may be modified — hence `const`. Second, the reference does not extend the facet's lifetime: the borrow is valid exactly as long as *some* locale you can reach still holds the facet. For the same reason `use_facet` throws `bad_cast` when the family is absent — it has no null to return — and `has_facet<F>(loc)` exists as the polite, non-throwing query you run first when the facet is genuinely optional.",
          },
          {
            kind: 'application',
            heading: 'Practical rules for facet lifetimes',
            body: "Four habits keep facet lifetimes correct. **(1) Never hold the raw pointer**: write `cout.imbue(locale(cout.getloc(), new My_punct));` — creation and installation in one expression, so the count can never be forgotten. **(2) Hold locales, not facets**: a member `locale loc;` keeps every facet it contains alive, while a cached `const F&` does not; fetch facets lazily through a locale you own — `use_facet` is a table index, not a search, so re-fetching is cheap. **(3) For a facet shared program-wide, pass `refs = 1`** and give it static storage: the pass-through constructor `explicit My_facet(size_t r = 0) : base(r) {}` is the idiom, and the library counts but never deletes. **(4) Standard facets from named locales** — everything inside `locale::classic()` or `locale(\"de_DE\")` — are owned by the implementation and effectively immortal: reuse them freely, but remember that a *user-installed* facet in a constructed locale lives and dies with its last locale.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 39.4
  {
    sectionId: 'cpp-ch39-s4',
    readingTime: 7,
    intro: 'The standard facet catalog is the payload of the whole chapter: character classification, encoding conversion, collation, numeric punctuation, money, dates and times, messages. Each family is a class template parameterized by the character type (and, for input/output facets, by the iterator type), and each exposes its conventions through a small set of virtual functions. This section walks the catalog, with special attention to the two formats you must be able to predict by hand: digit grouping and money.',
    objectives: [
      'Name the standard facet families and the aspect each owns',
      'Read a `grouping()` string and predict the digit grouping of a number',
      'Explain the `moneypunct` fields and the pattern that orders symbol, sign, value and space in money output',
    ],
    concepts: [
      {
        term: 'The standard facet catalog',
        kind: 'definition',
        statement: 'The standard library provides the facets needed for culture-sensitive I/O, each a family parameterized by the character type: `ctype` (character classification), `codecvt` (encoding conversion at the stream-buffer level), `collate` (string ordering and hashing), `messages` (message retrieval), `numpunct`/`num_get`/`num_put` (numbers), `moneypunct`/`money_get`/`money_put` (money), and `time_get`/`time_put` (dates and times).',
        detail: 'The classic `"C"` locale is the neutral baseline: `.` decimal point, no digit grouping, byte-order collation, an empty currency symbol, and `frac_digits() == 0`.',
      },
      {
        term: 'ctype, numpunct, collate',
        kind: 'definition',
        statement: '`ctype<C>` classifies characters (`is(mask, c)`, `scan_is`, `scan_not`), converts case (`tolower`, `toupper`) and widens/narrows; for `char` it is table-driven — a 256-entry table indexed by character value. `numpunct<C>` supplies `decimal_point()`, `thousands_sep()`, `grouping()` and `truename()`/`falsename()`; the grouping string `\'\\003\'` means groups of three digits. `collate<C>` supplies `compare()`, `hash()` and `transform()` — `transform` yields a string whose plain byte comparison reproduces the locale\'s collation, usable as a sort key or map key.',
        detail: 'The `ctype` masks: `space`, `print`, `cntrl`, `upper`, `lower`, `alpha`, `digit`, `punct`, `xdigit`, `alnum`, `blank`.',
      },
      {
        term: 'Money and time facets',
        kind: 'definition',
        statement: '`moneypunct<C, Intl>` describes currency: `curr_symbol()` (the dollar sign for the US locale, the euro sign for the German one), `decimal_point()`, `thousands_sep()`, `grouping()`, `frac_digits()` (typically 2), `positive_sign()`/`negative_sign()`, and a **pattern** — an ordering of four fields chosen from `none`/`space`, `symbol`, `sign`, `value` (the classic pattern is sign, symbol, none, value). `money_get`/`money_put` parse and format money; amounts are held in units of the smallest denomination, so 123456 means 1,234.56 units with two fractional digits. `time_get`/`time_put` parse and format dates and times; `time_get::date_order()` reports `dmy`, `mdy`, `ymd`, `ydm` or `no_order`, and `messages` retrieves localized strings through `open()`/`get()`/`close()`.',
        detail: 'Because money comes in smallest units, no floating-point rounding ever touches a monetary value on its way through the facets.',
      },
      {
        term: 'Standard facets: the working contract',
        kind: 'definition',
        statement: '**Standard facets.** The standard facets catalog. You can claim this section when you can name the standard facet families and the aspect each owns — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 39 (Locales); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Standard facets: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, read a `grouping()` string and predict the digit grouping of a number. Then, explain the `moneypunct` fields and the pattern that orders symbol, sign, value and space in money output. Finally, test the outcome against the section promise: A dozen standard facet families cover classification, conversion, collation, numbers, money, time and messages.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'Formatting a paycheck two ways',
        problem: 'Print an amount of 1,234,567 cents for a US employee and a German one, using `cout << showbase << put_money(1234567);` in each case. What appears?',
        steps: [
          { label: 'Step 1: US locale', text: 'Imbue with `locale("en_US.UTF-8")`. `moneypunct`: two fractional digits, so the value is 12,345.67; grouping of three with separator `,` gives 12,345.67 grouped as `12,345.67`; the pattern places the symbol first — output `USD 12,345.67` with the dollar sign in front.' },
          { label: 'Step 2: German locale', text: 'Imbue with `locale("de_DE.UTF-8")`. Decimal point `,`, separator `.`, two fractional digits, and the pattern places the symbol *after* the value — output `12.345,67` followed by the euro sign.' },
          { label: 'Step 3: What stayed fixed', text: 'The stored amount — the integer 1234567, i.e. cents — is never converted or reformatted; each output is built from the locale\'s `moneypunct` fields plus `money_put`.' },
        ],
        result: 'One amount, two conventions: `12,345.67` with a leading dollar sign vs `12.345,67` with a trailing euro sign — and zero changes to program logic.',
      },
      {
        title: 'Working through standard facets',
        problem: 'The standard facets catalog. Your task: name the standard facet families and the aspect each owns.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: name the standard facet families and the aspect each owns. Write down the guarantee you will rely on — for this chapter it is: A dozen standard facet families cover classification, conversion, collation, numbers, money, time and messages.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::locale loc(tag); std::cout.imbue(loc);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — read a `grouping()` string and predict the digit grouping of a number — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Grouping `"\\003"` means groups of three: with a blank separator, `12345678.9` prints as `12 345 678.9`. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A dozen standard facet families cover classification, conversion, collation, numbers, money, time and messages. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'A dozen standard facet families cover classification, conversion, collation, numbers, money, time and messages.',
      'Grouping `"\\003"` means groups of three: with a blank separator, `12345678.9` prints as `12 345 678.9`.',
      'Money is counted in smallest units; a `moneypunct` pattern fixes the order of symbol, sign, value and space.',
    ],
    quiz: [
      {
        q: 'When `numpunct`\'s `grouping()` returns the one-character string `"\\003"`, the number 12345678.9 is printed with:',
        options: [
          'a separator after every three characters of the whole output',
          'three fractional digits after the decimal point',
          'digits grouped in threes — with a blank as separator: `12 345 678.9`',
          'the integer part truncated to three digits',
        ],
        answer: 2,
        explanation: 'Each byte of the grouping string gives the digit count of one group, innermost first: `\'\\003\'` says groups of three around the decimal point.',
      },
      {
        q: '`collate::transform(s)` exists to:',
        options: [
          'convert every letter to uppercase for comparison',
          'produce a byte-comparable key that reproduces the locale\'s collation — usable as a map key or database index',
          'hash the string for unordered containers',
          'translate the string into another language',
        ],
        answer: 1,
        explanation: 'Sorting by `transform` keys gives the locale\'s order with ordinary `<`, which is exactly what a sorted index needs.',
      },
      {
        q: 'With `frac_digits() == 2` and `showbase` in effect, `put_money(123456)` under an `en_US` locale prints:',
        options: [
          'the raw digits `123456` with the symbol appended',
          '`1234.56` with no grouping at all',
          'an error: `put_money` takes strings only',
          '`12,345.67` — the value divided by 100, then grouped and prefixed with the dollar sign',
        ],
        answer: 3,
        explanation: 'Money amounts are smallest-denomination units: 123456 cents become 1234.56 units, grouped in threes and decorated from `moneypunct`.',
      },
    ],
  },

  // ---------------------------------------------------------------- 39.5
  {
    sectionId: 'cpp-ch39-s5',
    readingTime: 6,
    intro: 'For everyday use you should not have to spell out `use_facet` and virtual calls. The library provides convenience interfaces: the stream operators themselves, the standalone classification functions that take a locale argument, and the `put_money`/`get_money`/`put_time`/`get_time` manipulators. Each is a thin wrapper over a facet lookup — explicit about the locale, cheap to call, and far easier to read.',
    objectives: [
      'Use the convenience interfaces: classification functions with a locale argument, `put_money`, `put_time`',
      'Reason about the sticky imbued locale versus the global locale',
      'Trace a parse of a German-formatted number through `num_get`',
    ],
    concepts: [
      {
        term: 'The convenience pattern',
        kind: 'method',
        statement: 'For the common cases the standard wraps the facet machinery: `<<` and `>>` dispatch through `num_put`/`num_get` (and their money/time kin) in the stream\'s locale; the standalone template functions `isspace(c, loc)`, `isdigit(c, loc)`, `toupper(c, loc)` and friends each fetch `use_facet<ctype<C>>(loc)` and forward; `put_money`/`get_money` and `put_time`/`get_time` are stream manipulators driving the money and time facets.',
        detail: 'Every convenience interface is one lookup plus one virtual call — convenient *and* explicit about which locale is consulted.',
      },
      {
        term: 'Imbue: the sticky locale',
        kind: 'law',
        statement: '`stream.imbue(loc)` installs `loc` as the stream\'s locale, and it is **sticky**: every subsequent operation uses it until the next `imbue`. `stream.getloc()` reads it back. Changing the **global** locale never disturbs existing streams, and a file stream should be imbued before I/O begins — its conversion buffer is set up from the locale.',
        detail: 'This is the whole state model: one locale per stream, set explicitly, holding until replaced.',
      },
      {
        term: 'Reading and writing in different conventions',
        kind: 'insight',
        statement: 'Input and output locales are independent: imbue `cin` with the user\'s convention and `cout` with another. `num_get` parses with `ctype` (which characters are digits) and `numpunct` (separator, decimal point), and the digit **grouping is checked**: a misplaced thousands separator makes `>>` fail. The resulting value is the same double whatever the convention.',
        detail: 'With a classic-imbued stream, the keystrokes `1.234,56` parse as 1.234 and stop at the comma — the same text a German-imbued stream reads as 1234.56.',
      },
      {
        term: 'Convenience Interfaces: the working contract',
        kind: 'definition',
        statement: '**Convenience Interfaces.** The easy interfaces on top. You can claim this section when you can use the convenience interfaces: classification functions with a locale argument, `put_money`, `put_time` — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 39 (Locales); later sections in the chapter use it without restating it, so the contract compounds.',
      },
      {
        term: 'Convenience Interfaces: deliberate practice',
        kind: 'method',
        statement: 'Work in three passes. First, reason about the sticky imbued locale versus the global locale. Then, trace a parse of a German-formatted number through `num_get`. Finally, test the outcome against the section promise: Convenience interfaces wrap `use_facet`: stream operators, `isdigit(c, loc)`-style functions, `put_money`/`put_time`.',
        detail: 'Each pass catches a different class of mistake, and skipping one moves the failure into a larger program where it costs more to diagnose than it would have here.',
      },
    ],
    examples: [
      {
        title: 'A bilingual session',
        problem: 'A German user types a number; the program must accept it in German convention but echo it in US convention. Trace `cin >> x; cout << x;` after `cin.imbue(locale("de_DE.UTF-8")); cout.imbue(locale("en_US.UTF-8"));` when the user types `1.234,56`.',
        steps: [
          { label: 'Step 1: Input classification', text: '`num_get<char>` (from cin\'s locale) uses `ctype<char>` to classify characters and `numpunct<char>` (`de_DE`) for punctuation: `.` is the thousands separator, `,` the decimal point.' },
          { label: 'Step 2: Grouping check', text: 'The integer part groups as 1 | 234 — the rightmost group has exactly three digits, consistent with grouping `\'\\003\'` — so the parse proceeds; the double `x` becomes 1234.56.' },
          { label: 'Step 3: Output', text: '`num_put<char>` from cout\'s locale (`en_US`) prints the same double with `,` separator and `.` point: `1,234.56`.' },
          { label: 'Step 4: The counterfactual', text: 'Had `cin` kept the classic locale, the same keystrokes would yield `x == 1.234` (parsing stops at the comma), leaving `,56` unread in the buffer — and nothing would have failed.' },
        ],
        result: 'In: `1.234,56` → `x == 1234.56` → out: `1,234.56` — the value the German user meant, presented in the US convention.',
      },
      {
        title: 'Working through convenience interfaces',
        problem: 'The easy interfaces on top. Your task: use the convenience interfaces: classification functions with a locale argument, `put_money`, `put_time`.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: use the convenience interfaces: classification functions with a locale argument, `put_money`, `put_time`. Write down the guarantee you will rely on — for this chapter it is: Convenience interfaces wrap `use_facet`: stream operators, `isdigit(c, loc)`-style functions, `put_money`/`put_time`.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `std::locale loc(tag); std::cout.imbue(loc);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — reason about the sticky imbued locale versus the global locale — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: A stream’s locale is sticky until the next `imbue`; the global locale never disturbs existing streams. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Convenience interfaces wrap `use_facet`: stream operators, `isdigit(c, loc)`-style functions, `put_money`/`put_time`. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Convenience interfaces wrap `use_facet`: stream operators, `isdigit(c, loc)`-style functions, `put_money`/`put_time`.',
      'A stream\'s locale is sticky until the next `imbue`; the global locale never disturbs existing streams.',
      'Parsing uses the same machinery: `num_get` validates grouping; input and output locales are independent.',
    ],
    quiz: [
      {
        q: '`isdigit(c, loc)` is equivalent to:',
        options: [
          '`isdigit((unsigned char)c)` from `<cctype>`',
          '`use_facet<ctype<C>>(loc).is(ctype_base::digit, c)`',
          'a lookup in a global table shared by all locales',
          'a virtual call on the locale object itself',
        ],
        answer: 1,
        explanation: 'The standalone classification functions fetch the `ctype` facet from the given locale and forward to it — no globals involved.',
      },
      {
        q: 'A stream was imbued with `loc`; then `locale::global(loc2)` executes. The stream\'s next `<<` uses:',
        options: [
          '`loc` — the global change leaves existing streams alone',
          '`loc2` — global() re-imbues every open stream',
          'the classic locale',
          'whichever locale compares equal to `loc2`',
        ],
        answer: 0,
        explanation: 'The global locale is only the default for streams created afterwards; a stream keeps the locale it was imbued with.',
      },
      {
        q: 'With `cin` imbued with a German locale, `cin >> x` on the keystrokes `1.234,56` yields:',
        options: [
          '`x == 1.234` and `,56` left unread',
          '`failbit` — mixed punctuation is always rejected',
          '`x == 123456` — all punctuation discarded',
          '`x == 1234.56` — separator consumed, point accepted',
        ],
        answer: 3,
        explanation: 'Under German `numpunct`, `.` is the (validated) thousands separator and `,` the decimal point; the parse produces exactly the number the user meant.',
      },
    ],
  },

  // ---------------------------------------------------------------- 39.6
  {
    sectionId: 'cpp-ch39-s6',
    readingTime: 4,
    intro: 'The chapter closes with Stroustrup\'s rules of thumb. Their common thread: keep cultural assumptions out of program logic, prefer the library\'s explicit machinery to hand-rolled formatting, and know the sharp edges — implementation-defined names, possibly-missing facets, and facet lifetimes.',
    objectives: [
      'Apply the central advice: keep culture out of core program logic',
      'Choose named locales and convenience interfaces before hand-rolled code',
      'Recognize the sharp edges: locale names, missing facets, facet lifetimes',
    ],
    concepts: [
      {
        term: 'Isolate the culture-dependent parts',
        kind: 'law',
        statement: '**Do not hardcode cultural conventions into program logic.** Keep the core culture-independent — doubles, timestamps, amounts in cents — and confine formatting and parsing to the I/O layer, where the locale machinery can reach it. A currency symbol glued into a string or a hand-built `25/12/2015` bypasses every facet and defeats the model.',
        detail: 'The chapter\'s first rule: minimize the amount of code that knows about culture at all.',
      },
      {
        term: 'Prefer the standard machinery',
        kind: 'method',
        statement: 'Prefer named locales (`"C"`, `""`, then the system\'s names) to home-grown formatting; prefer the convenience interfaces (`put_money`, `put_time`, `toupper(c, loc)`) to direct `use_facet` calls; prefer deriving from a standard facet such as `numpunct` to writing one from scratch.',
        detail: 'Reach for raw `use_facet` only when you need a facet\'s full power — e.g. `collate::transform` for sort keys.',
      },
      {
        term: 'Handle locales defensively',
        kind: 'insight',
        statement: 'Remember the sharp edges: locales are immutable — construct, never modify; constructed locales are unnamed (`name()` is `"*"`); names other than `"C"` and `""` are implementation-defined, and an unknown name throws `runtime_error`; use `has_facet` before `use_facet` when the facet may be absent; and keep the owning locale alive as long as you hold a facet reference from it.',
        detail: 'The model is deliberately conservative: cultural correctness is bought with explicit plumbing, not magic.',
      },
      {
        term: 'Shipping rule for locales',
        kind: 'law',
        statement: 'Before code that uses this chapter is done, check it against the summary: **Keep cultural assumptions out of program logic; format at the edges.** A second reader should be able to point at each clause of that sentence in the code.',
        detail: 'Advice sections collect the rules whose violation caused real bugs; each rule here is the cheapest known way to avoid its bug class.',
      },
      {
        term: 'Review checklist for locales',
        kind: 'method',
        statement: 'Take the objectives as review questions: apply the central advice: keep culture out of core program logic? Then choose named locales and convenience interfaces before hand-rolled code? Answer each from the code in front of you, not from memory — the gap between the two answers is the review finding.',
        detail: 'A rule you can derive from the chapter you can also correctly suspend; a rule applied without its reason becomes superstition, so cite the reason in the review note.',
      },
    ],
    examples: [
      {
        title: 'Code review: internationalizing an invoice report',
        problem: 'An invoice program contains `cout << "Total: " << s << total_cents/100.0;` (with a currency string `s` built by hand), a date written as `setw(2) << m << \'/\' << d << \'/\' << y`, and customer names sorted with `strcmp`. Find the culture bugs and fix them with the chapter\'s machinery.',
        steps: [
          { label: 'Bug 1: hand-built money', text: 'A hand-concatenated symbol and a division by 100.0 hardcode one convention (and invite rounding). Fix: `cout << showbase << put_money(total_cents);` after imbuing the user\'s locale — symbol, grouping and decimal point all come from `moneypunct` (1234567 cents print as 12,345.67 with the proper sign and symbol).' },
          { label: 'Bug 2: hardcoded date layout', text: 'The m/d/y order is one country\'s habit. Fix: `cout << put_time(&tm, "%x");` — the locale\'s `time_put` renders `%x` in the local date convention.' },
          { label: 'Bug 3: byte-order sorting', text: '`strcmp` sorts by code unit: in a Danish phone book the result is wrong. Fix: compare with `use_facet<collate<char>>(cout.getloc()).compare(a.data(), a.data()+a.size(), b.data(), b.data()+b.size())` — the imbued locale\'s collation decides.' },
          { label: 'What did not change', text: 'The computations — `total_cents`, the `tm` — are untouched; all three fixes live at the output boundary.' },
        ],
        result: 'Three lines of formatting logic replaced by `imbue` plus `put_money`, `put_time` and `collate::compare`; the core stays culture-free and every user sees their own convention.',
      },
      {
        title: 'Reviewing locales code',
        problem: 'You are reviewing a colleague’s change that uses this chapter’s facilities. Your task: apply the central advice: keep culture out of core program logic.',
        steps: [
          { label: 'Step 1: inventory', text: 'List every use of this chapter’s facilities in the change. For each, write the rule it must satisfy — starting with: Keep cultural assumptions out of program logic; format at the edges.' },
          { label: 'Step 2: probe', text: 'Probe the riskiest use with a minimal program built on `std::locale loc(tag); std::cout.imbue(loc);`. If the probe surprises you, the rule behind it is load-bearing.' },
          { label: 'Step 3: question', text: 'Ask the chapter’s questions of the code: choose named locales and convenience interfaces before hand-rolled code. Record where the code answers and where it stays silent.' },
          { label: 'Step 4: rule', text: 'Turn each silence into a review note that cites the reason, not just the rule: Prefer named locales and the convenience interfaces to hand-rolled formatting.' },
        ],
        result: 'The review ends with findings tied to reasons: Keep cultural assumptions out of program logic; format at the edges. Advice applied with its reasons is engineering; without them it is taste.',
      },
    ],
    keyTakeaways: [
      'Keep cultural assumptions out of program logic; format at the edges.',
      'Prefer named locales and the convenience interfaces to hand-rolled formatting.',
      'Only `"C"` and `""` are portable names; query `has_facet` before `use_facet`; keep owning locales alive.',
    ],
    quiz: [
      {
        q: 'Which locale names are portable across C++ implementations?',
        options: [
          'All names of the form `xx_YY.ENCODING`, such as `de_DE.UTF-8`',
          'Only `"C"` and `""`',
          '"C", "" and "POSIX"',
          'None — every name, including "C", is implementation-defined',
        ],
        answer: 1,
        explanation: 'The standard guarantees only the classic locale\'s name and the empty string (the environment\'s preference); everything else is implementation-defined.',
      },
      {
        q: 'The most robust way to print an amount with the user\'s currency conventions is:',
        options: [
          '`sprintf` with the symbol pasted in next to the number',
          'imbue the stream with `locale("")` and output `put_money(amount_in_smallest_units)`',
          'a switch over country codes building the string by hand',
          '`to_string` followed by string surgery on the result',
        ],
        answer: 1,
        explanation: 'The facets encode symbol, grouping, decimal point and sign placement per locale — reimplementing them by hand is exactly what the chapter forbids.',
      },
      {
        q: 'Before calling `use_facet<F>(loc)` for a facet that might be absent, you should:',
        options: [
          'call `has_facet<F>(loc)` — `use_facet` throws `bad_cast` when the family is missing',
          'wrap only in `try`/`catch` — there is no other way',
          'call `loc.name()` and compare against a list of known names',
          'nothing — it returns a null reference',
        ],
        answer: 0,
        explanation: '`has_facet` is the polite non-throwing query; `use_facet` is the throwing fetch you use once you know the facet is there.',
      },
    ],
  },
]
