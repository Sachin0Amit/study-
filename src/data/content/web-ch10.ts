import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 10: TypeScript for Production
// Web Apps (Sections 10.1 – 10.5). Master study content.
// ============================================================================

export const webCh10Content: SectionContent[] = [
  // ---------------------------------------------------------------- 10.1
  {
    sectionId: 'web-ch10-s1',
    readingTime: 8,
    intro: 'TypeScript adds a checkable layer of types over JavaScript so whole classes of bugs surface in the editor instead of production. This section builds the core vocabulary of primitives, unions, interfaces, and inference. You will learn to say exactly what data looks like and let the compiler prove it.',
    objectives: [
      'Distinguish type aliases from interfaces and choose between them',
      'Model optional and readonly fields plus union and literal types',
      'Rely on inference for locals while annotating public boundaries',
      'Read compiler errors as specifications of the mismatch'
    ],
    concepts: [
      {
        term: 'Static types and inference',
        kind: 'definition',
        statement: 'A **static type** is a compile-time description of a value checked by `tsc` before any code runs. TypeScript **infers** narrow types for initialized locals, so explicit annotations belong on **public boundaries** like function signatures. Inference keeps code brief while boundaries keep contracts explicit.',
        detail: 'Hover in the editor to see inferred types. Annotate exports, props, and API payloads even when locals stay bare.'
      },
      {
        term: 'Primitives, unions, and literals',
        kind: 'definition',
        statement: 'Primitives like `string` and `number` combine with **union bars** into types such as `string | null` that list every allowed shape. Literal types like `"admin"` restrict a string to one **exact value** for roles and modes. Prefer unions of literals over loose strings for anything with a fixed vocabulary.',
        detail: 'Unions force callers to handle each member. Literals turn typos in role names into compile errors instead of silent branches.'
      },
      {
        term: 'Interfaces versus type aliases',
        kind: 'definition',
        statement: 'An **interface** declares an object shape with `interface` and supports **declaration merging** across files, while a `type` alias names any type including unions. Interfaces suit **public object contracts** and libraries, and aliases suit **unions and tuples** that interfaces cannot spell. Teams usually standardize on interfaces for objects and aliases for everything else.',
        detail: 'Both describe the same runtime value, since types erase at compile time. Pick one convention per repo and enforce it with lint.'
      },
      {
        term: 'Optional and readonly members',
        kind: 'notation',
        statement: 'A question mark like `title?` marks an **optional property** that may be absent, and `readonly` marks a field that cannot be **reassigned** after creation. Optional fields model **partial input** such as drafts, while readonly fields guard **identifiers and config**. Combine them to express data that arrives incomplete but must not mutate later.',
        detail: 'Reading an optional field needs a presence check first. Readonly is shallow, so nested objects need their own readonly marks.'
      },
      {
        term: 'Arrays, tuples, and records',
        kind: 'notation',
        statement: 'Use `string[]` for **variable-length lists**, tuples like `[string, number]` for **fixed pairs**, and `Record` for **string-keyed maps** such as lookup tables. Tuples preserve **position meaning** where arrays only preserve element type. Records give dictionary access with full key and value checking.',
        detail: 'Model coordinates and entries as tuples, collections as arrays, and caches as records. Mismatched positions then fail at compile time.'
      }
    ],
    examples: [
      {
        title: 'Model an article with literals and optionals',
        problem: 'Type a blog article whose status is one of three words and whose subtitle may be missing.',
        steps: [
          { label: 'Step 1: Declare the contract', text: 'Restrict status to its vocabulary and mark the subtitle optional:\n```ts\ninterface Article {\n  id: string;\n  title: string;\n  subtitle?: string;\n  status: "draft" | "review" | "published";\n  readonly slug: string;\n}\n```' },
          { label: 'Step 2: Construct a valid value', text: 'Build an object the checker accepts:\n```ts\nconst post: Article = {\n  id: "a1",\n  title: "Async Basics",\n  status: "draft",\n  slug: "async-basics"\n};\n```' },
          { label: 'Step 3: Read the error on a typo', text: 'A wrong status fails before running:\n```ts\npost.status = "publishd";\n```\nThe compiler reports that the string is not assignable to the status union, pointing at the exact line.' }
        ],
        result: 'Only the three documented statuses compile, missing subtitles are legal, and the slug cannot be reassigned.'
      },
      {
        title: 'Infer locals, annotate boundaries',
        problem: 'Write a totaling helper that infers internally but exports a fully typed signature.',
        steps: [
          { label: 'Step 1: Annotate the boundary', text: 'Say what goes in and what comes out:\n```ts\ntype Line = { price: number; qty: number };\nexport function lineTotal(lines: Line[]): number {\n  let sum = 0;\n  for (const line of lines) { sum += line.price * line.qty; }\n  return sum;\n}\n```' },
          { label: 'Step 2: Let inference work inside', text: 'The `sum` variable and `line` binding need no annotations because initializers fix their types. Hovering shows number and Line without any extra writing.' },
          { label: 'Step 3: Call with a bad shape', text: 'Passing a string price fails at the call site:\n```ts\nlineTotal([{ price: "9", qty: 2 }]);\n```\nThe error names the mismatched property so the caller fixes data, not the helper.' }
        ],
        result: 'Public signature documents the contract while inferred locals keep the body concise and still checked.'
      }
    ],
    keyTakeaways: [
      'Static types catch mismatches at compile time; inference types locals automatically.',
      'Unions list allowed shapes and literals restrict strings to exact vocabularies.',
      'Interfaces suit object contracts and merging; aliases suit unions and tuples.',
      'Optional marks may-be-absent fields and readonly guards against reassignment.',
      'Annotate exported boundaries and let locals infer.'
    ],
    quiz: [
      {
        q: 'When should you write an explicit type annotation?',
        options: ['On every single local variable', 'On public boundaries such as function signatures and exports', 'Never, inference covers everything', 'Only in comments'],
        answer: 1,
        explanation: 'Boundaries are contracts other files rely on, while initialized locals infer precisely without annotation.'
      },
      {
        q: 'What does status: draft | review | published express?',
        options: ['Three separate variables', 'A union allowing exactly those three string values', 'An enum at runtime', 'Any string'],
        answer: 1,
        explanation: 'Unions of literals restrict the value to the listed members, so typos fail compilation.'
      },
      {
        q: 'How do interfaces and type aliases differ most usefully?',
        options: ['They are identical in every way', 'Interfaces declare mergeable object shapes; aliases also name unions and tuples', 'Aliases run faster', 'Interfaces exist at runtime'],
        answer: 1,
        explanation: 'Interfaces merge across declarations for public contracts while aliases cover the full type language.'
      },
      {
        q: 'What does readonly on slug: string guarantee?',
        options: ['The string is encrypted', 'The property cannot be reassigned after creation', 'The property may be missing', 'Deep immutability of nested objects'],
        answer: 1,
        explanation: 'Readonly blocks reassignment of that field; it is shallow and presence is governed by the optional mark.'
      }
    ]
  },
  // ---------------------------------------------------------------- 10.2
  {
    sectionId: 'web-ch10-s2',
    readingTime: 9,
    intro: 'Functions are where types pay rent: signatures document inputs, outputs, and the generic patterns that work across many shapes. This section covers parameter and return typing, overloads, generics with constraints, and the utility types that transform shapes. You will write one helper that serves many types safely.',
    objectives: [
      'Type parameters, returns, and optional callbacks precisely',
      'Write generic functions with meaningful constraints',
      'Choose overloads versus unions for call signatures',
      'Apply Partial, Pick, Omit, and ReturnType to reuse shapes'
    ],
    concepts: [
      {
        term: 'Function signature typing',
        kind: 'definition',
        statement: 'A typed signature lists each **parameter type** and one **return type**, with `void` for side-effect functions and `never` for functions that **always throw**. Optional parameters use `opt?` marks and defaulted parameters infer from their **default value**. Precise signatures turn misuse into editor errors at the call site.',
        detail: 'Annotate callbacks too, since untyped callbacks infect the whole chain with any. Keep signatures narrow so valid calls stay easy.'
      },
      {
        term: 'Generic functions',
        kind: 'method',
        statement: 'A **generic parameter** like `T` lets one function accept many types while preserving the **exact input-output link**. Writing `identity` with `T` returns the same type it received instead of widening to **loose any**. Generics capture the pattern once and check every instantiation separately.',
        detail: 'Name parameters by role such as Item or Key rather than single letters in public APIs. Let callers infer arguments instead of writing them explicitly.'
      },
      {
        term: 'Constraints with extends',
        kind: 'method',
        statement: 'A constraint like `T extends HasId` keeps a function **generic but bounded**, requiring an `id` field while preserving the rest. Constraints unlock **property access** inside the body without collapsing to a concrete type. They turn anything-goes generics into documented minimum shapes.',
        detail: 'Constrain to the smallest shape the body actually uses. Over-constraining rejects valid callers for no benefit.'
      },
      {
        term: 'Overloads versus unions',
        kind: 'insight',
        statement: 'Overload signatures describe **distinct call shapes** with different arities or return types, all backed by one **implementation signature** written as `function f(...args: never[])`. Unions suit **same-arity variants** while overloads suit calls whose return type **depends on inputs**. Prefer one union signature unless the mapping truly differs per overload.',
        detail: 'List overloads from most specific to most general so resolution picks correctly. Keep the implementation signature hidden from callers.'
      },
      {
        term: 'Utility types',
        kind: 'notation',
        statement: 'Helpers like `Partial` and `Pick` derive **new shapes** from old ones without rewriting fields. `Partial` makes every property **optional** for updates, while `Pick` and `Omit` select or drop **named keys** for views. `ReturnType` extracts a function result type for **derived contracts** elsewhere.',
        detail: 'Derive update payloads and response views from the base entity so renames propagate. Utilities keep one source of truth instead of parallel interfaces.'
      }
    ],
    examples: [
      {
        title: 'Generic fetch helper with constraint',
        problem: 'Write one typed JSON fetcher that requires an id field on results and preserves item type.',
        steps: [
          { label: 'Step 1: Bound the generic', text: 'Demand the minimum shape the UI needs:\n```ts\ninterface HasId { id: string }\nasync function getJSON<T extends HasId>(url: string): Promise<T> {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error("Fetch failed: " + res.status);\n  return (await res.json()) as T;\n}\n```' },
          { label: 'Step 2: Instantiate with a real entity', text: 'The caller fixes T to its own type:\n```ts\ninterface User extends HasId { name: string }\nconst user = await getJSON<User>("https://api.example.com/users/7");\nconsole.log(user.name);\n```' },
          { label: 'Step 3: See the constraint work', text: 'A type without id fails before running:\n```ts\ninterface NoId { name: string }\n// getJSON<NoId>("https://api.example.com/x");\n```\nThe compiler reports that NoId does not satisfy the extends clause.' }
        ],
        result: 'One helper serves users, posts, and orders while guaranteeing an id for keys and links.'
      },
      {
        title: 'Updates with Partial and Pick',
        problem: 'Derive an update payload and a public card view from a full user entity without duplication.',
        steps: [
          { label: 'Step 1: Start from the entity', text: 'Define the full shape once:\n```ts\ninterface User { id: string; name: string; email: string; role: string }\ntype UserUpdate = Partial<User>;\ntype UserCard = Pick<User, "id" | "name">;\n```' },
          { label: 'Step 2: Accept partial edits', text: 'An update needs only the changed fields:\n```ts\nfunction applyUpdate(id: string, patch: UserUpdate): void {\n  savePatch(id, patch);\n}\napplyUpdate("u7", { name: "Ada" });\n```' },
          { label: 'Step 3: Render the narrow view', text: 'Cards cannot see emails by construction:\n```ts\nfunction renderCard(card: UserCard): void {\n  paintRow(card.id, card.name);\n}\n```' }
        ],
        result: 'Renaming a field updates payloads and views together because both derive from the single entity.'
      }
    ],
    keyTakeaways: [
      'Type every parameter and return; void means side effects and never means throws.',
      'Generics preserve the input-output link across many instantiations.',
      'Constraints require minimum shapes while keeping the rest generic.',
      'Overloads map distinct call shapes; unions cover same-arity variants.',
      'Derive updates and views with Partial, Pick, Omit, and ReturnType.'
    ],
    quiz: [
      {
        q: 'What does T extends HasId add to function getJSON?',
        options: ['It forbids all type arguments', 'It requires the result type to carry an id while staying generic', 'It makes T equal any', 'It runs a runtime check'],
        answer: 1,
        explanation: 'Constraints set a minimum shape so the body can use id while callers keep their exact subtypes.'
      },
      {
        q: 'When are overloads preferable to a union parameter?',
        options: ['Always', 'When return type or arity genuinely differs per call shape', 'Never', 'Only for single-argument functions'],
        answer: 1,
        explanation: 'Overloads express per-shape mappings; unions suffice when one signature covers every variant.'
      },
      {
        q: 'What does Partial<User> mean?',
        options: ['All User fields become optional', 'All User fields become required', 'User becomes readonly', 'User becomes an array'],
        answer: 0,
        explanation: 'Partial maps every property to optional, which models patches carrying only changed fields.'
      },
      {
        q: 'Why annotate callback parameters explicitly?',
        options: ['For style only', 'Untyped callbacks widen to any and weaken the whole chain', 'Callbacks cannot be typed', 'It slows compilation usefully'],
        answer: 1,
        explanation: 'Precise callback types keep inference sharp through maps, filters, and handlers.'
      }
    ]
  },
  // ---------------------------------------------------------------- 10.3
  {
    sectionId: 'web-ch10-s3',
    readingTime: 9,
    intro: 'Real UI work is state modeling: data is loading, ready, or failed, and each case carries different fields. This section teaches classes, type guards, narrowing, and discriminated unions for exactly that. You will model load states so impossible combinations cannot compile.',
    objectives: [
      'Type classes with fields, constructors, and access modifiers',
      'Narrow unions with typeof, in, and instanceof guards',
      'Model load-result states as discriminated unions',
      'Exhaust switches so unhandled cases fail compilation'
    ],
    concepts: [
      {
        term: 'Class types',
        kind: 'definition',
        statement: 'A class declares **fields and methods** together, with `private` and `readonly` modifiers controlling **access and assignment**. Constructor parameters with modifiers like `constructor(private api: Api)` declare and assign **fields at once**. Prefer plain interfaces for data and classes for behavior with invariants.',
        detail: 'Types still erase at runtime, so instanceof checks the constructor chain while field types vanish. Keep classes small and inject dependencies.'
      },
      {
        term: 'Narrowing with guards',
        kind: 'method',
        statement: 'Control-flow analysis **narrows** a union after a check, so `x` typed `string | null` becomes `string` inside an **explicit guard**. Guards include `typeof` for primitives, `instanceof` for classes, and the `in` operator for **object shapes**. Early returns with guards keep the happy path shallow.',
        detail: 'Write custom predicates returning x is Admin to teach the checker new distinctions. Every guard should eliminate one member completely.'
      },
      {
        term: 'Discriminated unions',
        kind: 'definition',
        statement: 'A **discriminant field** like `status` with literal values tags each union member so `switch` can **narrow exactly**. Modeling `{ status: "ok", data }` against `{ status: "err", error }` makes success and failure **mutually exclusive**. Impossible states such as data plus error together become unrepresentable.',
        detail: 'Use one literal field with the same name across members. Branch on it before touching payload fields.'
      },
      {
        term: 'Exhaustiveness checking',
        kind: 'method',
        statement: 'An **exhaustive switch** handles every member and assigns the remainder to `never` in a **default branch**. Adding a union member without a case then fails **compilation** at the never assignment. Exhaustiveness turns forgotten UI states into build errors.',
        detail: 'Pattern: default assigns the value to a never variable and throws. Future members break the build until their UI exists.'
      },
      {
        term: 'Modeling async state',
        kind: 'insight',
        statement: 'Model remote data as a **three-case union** of loading, ready, and failed instead of separate **boolean flags** that drift apart. A single `state` variable of union type guarantees the UI shows **one coherent case** with exactly its fields. Booleans allow loading plus error together, while unions forbid it.',
        detail: 'Render by switching on the discriminant: spinner, content, or retry. Transitions replace the whole union value atomically.'
      }
    ],
    examples: [
      {
        title: 'Load-result union for a profile panel',
        problem: 'Represent loading, success, and failure for one profile request so the panel cannot show stale plus error.',
        steps: [
          { label: 'Step 1: Declare the union', text: 'Tag each case with a literal status:\n```ts\ntype ProfileState =\n  | { status: "loading" }\n  | { status: "ready"; name: string; bio: string }\n  | { status: "failed"; message: string };\n```' },
          { label: 'Step 2: Render by narrowing', text: 'Switch on the discriminant and let each branch narrow:\n```ts\nfunction render(state: ProfileState): string {\n  switch (state.status) {\n    case "loading": return "Spinner";\n    case "ready": return state.name + " " + state.bio;\n    case "failed": return "Retry: " + state.message;\n  }\n}\n```' },
          { label: 'Step 3: Enforce exhaustiveness', text: 'Add a never guard so new states break the build:\n```ts\nfunction assertNever(x: never): never { throw new Error("Unhandled"); }\n```\nCall it in the default branch during refactors to catch missing cases.' }
        ],
        result: 'The panel shows exactly one state, payloads exist only in their case, and new cases demand new UI.'
      },
      {
        title: 'Narrow unknown API payloads safely',
        problem: 'Accept an unknown value from JSON and narrow it to an admin or member before granting access.',
        steps: [
          { label: 'Step 1: Define the members', text: 'Give each role its own shape:\n```ts\ninterface Admin { kind: "admin"; scope: string }\ninterface Member { kind: "member"; team: string }\ntype Actor = Admin | Member;\n```' },
          { label: 'Step 2: Write a predicate', text: 'Teach the checker the distinction:\n```ts\nfunction isAdmin(a: Actor): a is Admin {\n  return a.kind === "admin";\n}\n```' },
          { label: 'Step 3: Branch before access', text: 'Narrow first, then use role fields:\n```ts\nfunction grant(a: Actor): string {\n  if (isAdmin(a)) return "all:" + a.scope;\n  return "team:" + a.team;\n}\n```' }
        ],
        result: 'Role fields are reachable only after the guard proves the member, so cross-role access cannot compile.'
      }
    ],
    keyTakeaways: [
      'Use classes for behavior with invariants and interfaces for plain data.',
      'Guards with typeof, in, and instanceof narrow unions branch by branch.',
      'Discriminated unions tag members with one literal field for exact narrowing.',
      'Exhaustive switches assign leftovers to never so new cases break builds.',
      'Model async UI as loading, ready, or failed in one union, not flag soup.'
    ],
    quiz: [
      {
        q: 'Why use a discriminated union for load state instead of two booleans?',
        options: ['Booleans are slower', 'Unions make impossible combinations unrepresentable with one coherent case', 'Unions avoid all runtime checks', 'Booleans cannot be rendered'],
        answer: 1,
        explanation: 'Separate flags allow loading plus error together, while a three-case union permits exactly one case with its fields.'
      },
      {
        q: 'After if (typeof x === string) with x: string | number, what is x inside?',
        options: ['any', 'string', 'number', 'unknown'],
        answer: 1,
        explanation: 'Control-flow narrowing refines the union to the guarded member within that branch.'
      },
      {
        q: 'What does assigning to never in a switch default achieve?',
        options: ['Faster code', 'Compile-time exhaustiveness: new members break the build', 'Smaller bundles', 'Runtime logging'],
        answer: 1,
        explanation: 'If every case returns, only never remains; a future member makes that assignment fail loudly.'
      },
      {
        q: 'What does a predicate a is Admin give you?',
        options: ['A runtime class', 'A custom guard that narrows Actor to Admin in true branches', 'An automatic cast without checks', 'A new union member'],
        answer: 1,
        explanation: 'Predicates extend narrowing to domain distinctions the built-in operators cannot express.'
      },
      // Placement-pattern: typeof narrowing of unions (original)
      {
        q: "What are the narrowed types in each branch?\n```ts\nfunction label(v: string | number) {\n  if (typeof v === 'string') { /* branch A */ }\n  else { /* branch B */ }\n}\n```",
        options: ["A is `string | number` and B is `never`", "A is `number` and B is `string`", "A is `string` and B is `number`", "Both branches stay `string | number`"],
        answer: 2,
        explanation: "Step 1: The data given is a union-typed parameter tested with a `typeof` guard. Step 2: The governing rule is control-flow narrowing: a passing `typeof` check keeps only the matching union members in the true branch, and the false branch keeps the remainder. Step 3: Tracing the branches, A sees exactly `string` so string methods are safe, while B sees exactly `number` so arithmetic is safe. Step 4: The distractors fail because narrowing genuinely removes members per branch, the two branches hold opposite members rather than swapped ones, and `never` would need an impossible condition. Step 5: Therefore A is `string` and B is `number`."
      },
      // Placement-pattern: discriminated union handling (original)
      {
        q: "Responses share one shape with a tag:\n```ts\ntype R = { kind: 'ok'; value: number } | { kind: 'fail'; reason: string };\n```\nWhich handler uses the tag correctly?",
        options: ["Check `'value' in r` inside every branch and ignore `kind`", "Switch on `r.kind`: in `'ok'` read `r.value`, in `'fail'` read `r.reason`, so each branch sees only its members", "Cast to `any` and read either field freely", "Match `r.kind === 'ok'` but then read `r.reason`"],
        answer: 1,
        explanation: "Step 1: The data given is a two-member union sharing a literal-valued `kind` tag. Step 2: The governing rule is discriminant narrowing: switching on the tag property narrows the whole union per case, so each branch exposes exactly its own members. Step 3: Tracing the switch, the `'ok'` branch sees `{ kind: 'ok'; value: number }` with `value` safe, and the `'fail'` branch sees the reason variant with `reason` safe. Step 4: The distractors fail because ignoring the tag discards the narrowing, casting to `any` silences the very errors the union exists to catch, and reading across variants contradicts the narrowed type. Step 5: Therefore the `kind` switch with per-branch reads is the correct handler."
      }
    ]
  },
  // ---------------------------------------------------------------- 10.4
  {
    sectionId: 'web-ch10-s4',
    readingTime: 8,
    intro: 'A strict compiler plus fast linting turns TypeScript from documentation into enforcement. This section configures tsconfig for safety, resolves modules predictably, and wires ESLint with Prettier. You will fix errors in a repeatable order instead of casting past them.',
    objectives: [
      'Enable strict mode and explain what it catches',
      'Configure module resolution and path aliases cleanly',
      'Lint TypeScript with type-aware rules and format on save',
      'Triage type errors from narrowest to widest fix'
    ],
    concepts: [
      {
        term: 'Strict mode pays off',
        kind: 'law',
        statement: 'Setting **strict to true** enables null checks, no implicit `any`, and **sound method checks** that catch real defects early. Strict code rejects **null dereferences** and untyped parameters at compile time instead of in production. Enable strict on day one because relaxing later costs far more.',
        detail: 'The flagship flags are strictNullChecks and noImplicitAny. Fix new strict errors at their source rather than silencing with casts.'
      },
      {
        term: 'tsconfig structure',
        kind: 'definition',
        statement: 'The `tsconfig` file sets the **target and library** for output, the **module system** for emits, and `include` paths for **checked files**. Modern apps target recent **ECMAScript** with bundler resolution and `skipLibCheck` for faster builds. One strict base config extended per package beats scattered flags.',
        detail: 'Keep source and output directories separate and include only app and test folders. Review the config in pull requests like code.'
      },
      {
        term: 'Module resolution and paths',
        kind: 'method',
        statement: 'Bundler-style **resolution** finds bare imports in `node_modules` while **path aliases** like `@` map to source roots for clean imports. Aliases must be mirrored in the **bundler config** or runtime resolution breaks. Prefer relative paths for siblings and aliases for cross-cutting shared code.',
        detail: 'Declare aliases once in tsconfig paths and once in Vite config. Deep relative chains signal a folder worth promoting to shared.'
      },
      {
        term: 'ESLint plus Prettier for types',
        kind: 'method',
        statement: 'Type-aware **lint rules** ban floating promises, unsafe `any` spreads, and **non-null assertions** while Prettier owns **formatting only**. Lint runs with **type information** so rules see through generics and narrowing. Keep formatting automatic and let lint reviews focus on correctness.',
        detail: 'Start from the recommended TypeScript sets and ratchet stricter over weeks. Any new disable comment needs a linked reason.'
      },
      {
        term: 'Systematic error triage',
        kind: 'insight',
        statement: 'Fix type errors **narrowest first**: wrong literal, then missing guard, then wrong shape, and only lastly **wider signatures**. Prefer **narrowing and predicates** over assertions, and assertions over `any` casts. Each error names the **expected versus actual** pair, so read it as a specification.',
        detail: 'Never silence strictNullChecks with a bang operator to unblock a build. Add the null branch or prove absence with a guard.'
      }
    ],
    examples: [
      {
        title: 'Harden a fresh tsconfig',
        problem: 'Turn a loose starter config into a strict team baseline with aliases.',
        steps: [
          { label: 'Step 1: Enable strict and modern emit', text: 'Set the safety and output baseline:\n```ts\n// tsconfig.json\n{\n  "compilerOptions": {\n    "target": "ES2022",\n    "module": "ESNext",\n    "moduleResolution": "Bundler",\n    "strict": true,\n    "skipLibCheck": true\n  }\n}\n```' },
          { label: 'Step 2: Add a source alias', text: 'Shorten cross-cutting imports consistently:\n```ts\n// tsconfig.json paths\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": { "@shared/*": ["src/shared/*"] }\n  }\n}\n```' },
          { label: 'Step 3: Mirror in the bundler', text: 'Register the same alias where code actually runs:\n```ts\n// vite.config.ts\nimport { defineConfig } from "vite";\nexport default defineConfig({\n  resolve: { alias: { "@shared": "/src/shared" } }\n});\n```' }
        ],
        result: 'Strict checks run on every build and shared imports read cleanly in both editor and bundler.'
      },
      {
        title: 'Fix a strict null error properly',
        problem: 'A strict build rejects a possibly-null profile name; fix it without assertions.',
        steps: [
          { label: 'Step 1: Read the error', text: 'The compiler reports the value as possibly null at the render line:\n```ts\nfunction hello(name: string | null): string {\n  return "Hi " + name;\n}\n```' },
          { label: 'Step 2: Narrow instead of asserting', text: 'Handle the absent case explicitly:\n```ts\nfunction hello(name: string | null): string {\n  if (name === null) return "Hi guest";\n  return "Hi " + name;\n}\n```' },
          { label: 'Step 3: Confirm the lint pass', text: 'Run checks in safety order after the fix:\n```bash\nnpm run typecheck\nnpm run lint\nnpm run test\n```' }
        ],
        result: 'The null path renders a guest greeting, the bang operator stays banned, and all three gates pass.'
      }
    ],
    keyTakeaways: [
      'Strict true enables null checks and bans implicit any from day one.',
      'tsconfig sets target, module, resolution, and included files in one base.',
      'Mirror path aliases in both tsconfig and the bundler config.',
      'Lint with type information for correctness and Prettier for formatting.',
      'Fix errors narrowest first with guards, not assertions or any.'
    ],
    quiz: [
      {
        q: 'What does strict: true primarily buy you?',
        options: ['Faster emits', 'Early errors for null dereferences and implicit any', 'Smaller bundles', 'Automatic tests'],
        answer: 1,
        explanation: 'Strict bundles null checks and soundness flags that convert runtime crashes into compile errors.'
      },
      {
        q: 'A path alias works in the editor but fails at runtime. What is missing?',
        options: ['More types', 'The same alias mirrored in the bundler config', 'A longer file name', 'A different font'],
        answer: 1,
        explanation: 'tsconfig paths guide the checker while the bundler resolves real files, so both must agree.'
      },
      {
        q: 'How should Prettier and ESLint divide work?',
        options: ['Both format everything', 'Prettier formats, ESLint checks correctness with type-aware rules', 'ESLint formats, Prettier lints', 'Neither is needed'],
        answer: 1,
        explanation: 'Formatting stays automatic while lint enforces semantic rules such as no floating promises.'
      },
      {
        q: 'What is the correct first fix for a possibly-null error?',
        options: ['Add a non-null assertion', 'Narrow with an explicit null branch or guard', 'Cast to any', 'Disable strict'],
        answer: 1,
        explanation: 'Guards handle the real absent case; assertions and any hide it until production.'
      }
    ]
  },
  // ---------------------------------------------------------------- 10.5
  {
    sectionId: 'web-ch10-s5',
    readingTime: 8,
    intro: 'TypeScript earns its keep across the stack when React props and server contracts share one vocabulary. This section types components, hooks, and API payloads end to end. You will adopt gradually, sharing DTOs between client and server so drift becomes a type error.',
    objectives: [
      'Type component props, events, and hook state idiomatically',
      'Share DTO types between client fetches and server handlers',
      'Type Express-style handlers with request and response generics',
      'Plan gradual adoption file by file without a rewrite'
    ],
    concepts: [
      {
        term: 'Typed props and events',
        kind: 'definition',
        statement: 'Component props are **plain interfaces** consumed through destructuring, with handlers typed as `onSelect` callbacks carrying **payload types**. Events use `ChangeEvent` and `FormEvent` generics bound to the **element type** for value access. Required props stay required so missing data fails at the call site.',
        detail: 'Type children with ReactNode when composition is intended. Keep prop interfaces colocated with their component.'
      },
      {
        term: 'Typed hooks state',
        kind: 'method',
        statement: 'The `useState` hook infers from its **initial value**, with explicit generics like `useState` of a union for **later shapes** such as loaded data. Refs use `useRef` with **nullable element** types for DOM handles, and reducers type **actions as unions** for exhaustive updates. Precise hook types keep set calls honest.',
        detail: 'Provide the generic only when the initial value under-describes later states, such as starting null before load.'
      },
      {
        term: 'Shared API contracts',
        kind: 'insight',
        statement: 'One **shared types folder** imported by both client and server makes API drift a **compile error** instead of a production surprise. Data transfer objects like `CreatePost` describe **request and response** shapes once for fetchers and handlers. Version the contract explicitly when fields change meaning.',
        detail: 'Publish DTOs from a workspace package or a shared directory both sides import. Never duplicate the same payload interface twice.'
      },
      {
        term: 'Typed server handlers',
        kind: 'method',
        statement: 'Server handlers type **params, query, and body** with generics on `Request` and `Response` so validation output flows into **typed logic**. Parse unknown input with a **schema validator** first, then handle only the proven shape. Typed errors with **status codes** keep client branches aligned with server reality.',
        detail: 'Treat req dot body as unknown until parsed. Return typed DTOs so clients narrow on documented fields.'
      },
      {
        term: 'Gradual adoption path',
        kind: 'insight',
        statement: 'Adopt file by file by renaming to **TS extensions** like `index.ts`, enabling **allowJs plus checkJs** for the old code, and tightening **strictness stepwise**. Type **boundaries first** such as API clients and shared utils for maximum leverage. Each converted file should leave the build greener than before.',
        detail: 'Track remaining any counts and untyped files on a dashboard. Forbid new JavaScript files once the boundary layer is typed.'
      }
    ],
    examples: [
      {
        title: 'Typed search box with hooks',
        problem: 'Build a controlled search input whose change handler and state are fully typed.',
        steps: [
          { label: 'Step 1: Declare props', text: 'Name the callback payload explicitly:\n```tsx\ninterface SearchProps {\n  initial: string;\n  onSearch: (query: string) => void;\n}\n```' },
          { label: 'Step 2: Wire state and events', text: 'Bind the event generic to the input element:\n```tsx\nimport { useState } from "react";\nimport type { ChangeEvent } from "react";\nfunction SearchBox(props: SearchProps) {\n  const [query, setQuery] = useState(props.initial);\n  function onChange(e: ChangeEvent<HTMLInputElement>): void {\n    setQuery(e.target.value);\n  }\n  return <input value={query} onChange={onChange} />;\n}\n```' },
          { label: 'Step 3: Enforce at the call site', text: 'A missing callback fails before running:\n```tsx\n// <SearchBox initial="ts" onSearch={runSearch} />\n```\nOmitting onSearch or passing a number query reports the exact prop mismatch.' }
        ],
        result: 'Value, change events, and callbacks all check, and misuse points at the prop, not the internals.'
      },
      {
        title: 'One DTO for client and server',
        problem: 'Share a create-post contract so client payload and server handler cannot drift.',
        steps: [
          { label: 'Step 1: Publish the DTO once', text: 'Keep the contract in shared code:\n```ts\ninterface CreatePost { title: string; body: string }\ninterface Post extends CreatePost { id: string }\n```' },
          { label: 'Step 2: Use it in the fetcher', text: 'The client sends exactly the contract:\n```ts\nasync function createPost(input: CreatePost): Promise<Post> {\n  const res = await fetch("/api/posts", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify(input)\n  });\n  if (!res.ok) throw new Error("Create failed");\n  return (await res.json()) as Post;\n}\n```' },
          { label: 'Step 3: Use it in the handler', text: 'The server parses unknown input into the same shape:\n```ts\nasync function handleCreate(raw: unknown): Promise<Post> {\n  const input = parseCreatePost(raw);\n  return savePost(input);\n}\n```' }
        ],
        result: 'Renaming a DTO field breaks both sides at compile time, forcing one coordinated update.'
      }
    ],
    keyTakeaways: [
      'Props are interfaces with typed callbacks and element-bound events.',
      'Type hook state generics only when initials under-describe later data.',
      'Share DTOs between client and server to catch drift at compile time.',
      'Parse unknown server input with schemas before typed handling.',
      'Adopt gradually: boundaries first, strictness stepwise, no new untyped files.'
    ],
    quiz: [
      {
        q: 'How should a controlled input change handler be typed?',
        options: ['As an untyped function', 'With the ChangeEvent generic bound to the input element', 'As returning a promise always', 'It cannot be typed'],
        answer: 1,
        explanation: 'Element-bound event generics give checked access to value and related fields.'
      },
      {
        q: 'When does useState need an explicit generic?',
        options: ['Always', 'When the initial value under-describes later states such as null before load', 'Never', 'Only for strings'],
        answer: 1,
        explanation: 'Inference suffices for complete initials; wider future shapes need the explicit parameter.'
      },
      {
        q: 'What is the shared-DTO rule?',
        options: ['Duplicate payload types per layer', 'One shared contract imported by client and server', 'Keep contracts only in docs', 'Infer contracts from network logs'],
        answer: 1,
        explanation: 'A single source of truth converts field renames into coordinated compile errors.'
      },
      {
        q: 'What is the safest first step in gradual adoption?',
        options: ['Rewrite everything at once', 'Convert boundaries such as API clients and shared utils first', 'Disable the checker', 'Convert tests last only'],
        answer: 1,
        explanation: 'Boundary types constrain the most callers per annotation, compounding value file by file.'
      }
    ]
  }
]
