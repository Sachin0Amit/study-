import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 11: React Fundamentals:
// Components, State & Hooks (Sections 11.1 – 11.5). Master study content.
// ============================================================================

export const webCh11Content: SectionContent[] = [
  // ---------------------------------------------------------------- 11.1
  {
    sectionId: 'web-ch11-s1',
    readingTime: 8,
    intro: 'React renders UI as a function of data: small components receive props and return elements. This section builds the mental model of JSX, function components, one-way props flow, and composition through children. You will structure screens as trees of focused, reusable pieces.',
    objectives: [
      'Write valid JSX with single roots, expressions, and attribute rules',
      'Build function components that receive typed props',
      'Trace one-way props flow from parent to child',
      'Compose layouts with children and slots instead of inheritance'
    ],
    concepts: [
      {
        term: 'JSX rules',
        kind: 'notation',
        statement: 'JSX is **expression syntax** that compiles to `createElement` calls, requiring one **parent root** per component return. Curly braces embed **any expression** while statements stay outside, and attributes use **camelCase names** like `className` and `onClick`. Self-close void elements such as `img` or custom components without children.',
        detail: 'JSX is neither string nor template: it produces element objects React reconciles. Keep expressions small and extract helpers for the rest.'
      },
      {
        term: 'Function components',
        kind: 'definition',
        statement: 'A function component is a **plain function** like `function Card(props)` that takes a props object and returns **renderable output** for React to reconcile. Names must start with a **capital letter** so JSX treats them as components rather than host tags. Each render should stay **pure**, computing output from props and state without surprises.',
        detail: 'Side effects belong in effects and event handlers, never in the render body. Pure renders make previews and tests deterministic.'
      },
      {
        term: 'Props flow down',
        kind: 'law',
        statement: 'Data flows **one way** from parent to child through the `props` object, and children must treat props as **read-only**. To change parent data, the parent passes a **callback prop** the child invokes with new values. Mutating props directly breaks the model and desynchronizes renders.',
        detail: 'Follow the data: state lives where it is edited or shared, and everything below receives copies plus callbacks.'
      },
      {
        term: 'Children and composition',
        kind: 'method',
        statement: 'The special `children` prop carries **nested JSX** so layout components wrap arbitrary content without knowing it. Composition with `children` and named **slot props** replaces inheritance for modals, cards, and pages. Specialize by wrapping, never by extending components.',
        detail: 'Pass headers and footers as explicit slot props when layout needs more than one hole. Composition keeps each piece replaceable.'
      },
      {
        term: 'Conditionals live in expressions',
        kind: 'insight',
        statement: 'Because JSX accepts **expressions only**, conditionals use ternaries and **logical AND** like `{ok && <Row />}` rather than if statements inline. Extract **early returns** or helper functions when branches grow beyond one line. Complex nesting inside JSX signals a **new component** waiting to be born.',
        detail: 'Keep each return readable at a glance. Name extracted branches after the state they represent, such as EmptyCart or LoadingRow.'
      }
    ],
    examples: [
      {
        title: 'Card built from props and children',
        problem: 'Create a reusable card that receives a title prop and arbitrary body content.',
        steps: [
          { label: 'Step 1: Declare props with children', text: 'Type the title and the nested content slot:\n```tsx\ninterface CardProps {\n  title: string;\n  children: import("react").ReactNode;\n}\n```' },
          { label: 'Step 2: Render one root', text: 'Return a single section using expressions only:\n```tsx\nfunction Card(props: CardProps) {\n  return (\n    <section className="card">\n      <h2>{props.title}</h2>\n      <div>{props.children}</div>\n    </section>\n  );\n}\n```' },
          { label: 'Step 3: Compose at the call site', text: 'Nest any body without changing the card:\n```tsx\nfunction Page() {\n  return (\n    <Card title="Profile">\n      <p>Ada builds interfaces.</p>\n    </Card>\n  );\n}\n```' }
        ],
        result: 'Card owns layout once while every page supplies its own title and body through props and children.'
      },
      {
        title: 'Callback prop edits parent state',
        problem: 'Let a stepper child request count changes owned by its parent.',
        steps: [
          { label: 'Step 1: Own state in the parent', text: 'Keep the count where it is shared:\n```tsx\nimport { useState } from "react";\nfunction Cart() {\n  const [count, setCount] = useState(1);\n  return <Stepper value={count} onChange={setCount} />;\n}\n```' },
          { label: 'Step 2: Treat props as read-only', text: 'The child calls back instead of mutating:\n```tsx\ninterface StepperProps { value: number; onChange: (n: number) => void }\nfunction Stepper(props: StepperProps) {\n  return <button onClick={function () { props.onChange(props.value + 1); }}>More</button>;\n}\n```' },
          { label: 'Step 3: Trace the flow', text: 'Clicks travel up as values and render down as props:\n```tsx\n// click -> onChange(count + 1) -> setCount -> rerender with new value\n```\nNo component writes another component state directly.' }
        ],
        result: 'One-way flow stays intact: events bubble as calls and fresh data renders down as props.'
      }
    ],
    keyTakeaways: [
      'JSX compiles to element calls with one root, expressions in braces, and camelCase attributes.',
      'Function components are pure functions of props and state with capital names.',
      'Props flow down read-only; changes travel up through callback props.',
      'Compose with children and slots instead of inheriting components.',
      'Keep JSX branches as expressions and extract components when nesting grows.'
    ],
    quiz: [
      {
        q: 'Why must a component return a single root element?',
        options: ['For styling only', 'JSX compiles each return to one element tree that React reconciles', 'To enable CSS', 'Roots are optional'],
        answer: 1,
        explanation: 'A component describes one tree, so siblings need a shared parent such as a section or fragment.'
      },
      {
        q: 'A child needs to change parent-owned data. What is correct?',
        options: ['Mutate props directly', 'Call a callback prop the parent passed down', 'Edit parent state by reference', 'Reload the page'],
        answer: 1,
        explanation: 'One-way flow keeps props read-only; parents delegate edit rights through explicit callbacks.'
      },
      {
        q: 'What does the children prop carry?',
        options: ['Parent state', 'Nested JSX the caller placed inside the component', 'Router history', 'CSS classes only'],
        answer: 1,
        explanation: 'Children enables layout components to wrap unknown content supplied at the call site.'
      },
      {
        q: 'How do you branch inside JSX for two messages?',
        options: ['With an if statement directly in JSX', 'With a ternary or logical AND expression, or an early return outside', 'Branching is impossible', 'With a for loop'],
        answer: 1,
        explanation: 'JSX accepts expressions only, so conditionals use expression forms or returns before the JSX.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.2
  {
    sectionId: 'web-ch11-s2',
    readingTime: 9,
    intro: 'State makes components remember, and effects connect them to the outside world of timers, subscriptions, and fetches. This section teaches useState for memory, useEffect for synchronization, cleanup discipline, and the rules of hooks. You will stop infinite loops and stale closures on sight.',
    objectives: [
      'Manage local memory with useState including updater forms',
      'Synchronize with externals using useEffect and dependency arrays',
      'Return cleanup for timers, subscriptions, and abortable fetches',
      'Apply the rules of hooks to keep calls stable across renders'
    ],
    concepts: [
      {
        term: 'State with useState',
        kind: 'definition',
        statement: 'The `useState` hook gives each component instance **persistent memory** across renders as a value plus setter pair. Calling the **setter schedules** a rerender rather than mutating immediately, and the **updater form** computes from the latest value safely. Treat state as a snapshot that event handlers and effects read.',
        detail: 'Use the updater form inside intervals and rapid clicks where the plain value would go stale. Never mutate state objects in place.'
      },
      {
        term: 'Effects synchronize externals',
        kind: 'definition',
        statement: 'The `useEffect` hook runs **after paint** to synchronize with systems outside React such as **timers and sockets**. Its **dependency array** lists every reactive value the effect reads, and changing any entry **reruns the effect**. An empty array runs once for mount-time setup only.',
        detail: 'Fetch-on-mount, subscribe, and measure in effects; derive renderable data during render instead. Missing dependencies cause stale reads.'
      },
      {
        term: 'Cleanup law',
        kind: 'law',
        statement: 'Every effect written with `useEffect` that subscribes, polls, or fetches must **return a cleanup** that unsubscribes, clears, or **aborts** the work. Cleanup runs before the **next effect run** and on unmount, preventing leaks and **late setState** after navigation. StrictMode double-invokes effects in development to expose missing cleanup.',
        detail: 'Abort fetches with an AbortController signal created inside the effect. Clear every timer the effect creates in the same cleanup.'
      },
      {
        term: 'Rules of hooks',
        kind: 'law',
        statement: 'Hooks such as `useState` must run in the **same order** every render, so call them at the **top level** and never inside conditions or loops. Custom hooks and components are the only **valid callers**, which keeps the hook list stable. Early returns go **after all hooks** so order never shifts between renders.',
        detail: 'Extract conditional logic into the hook arguments or into components, not around the hook calls. Lint with the hooks plugin to enforce order.'
      },
      {
        term: 'Stale closure defense',
        kind: 'insight',
        statement: 'Effects and callbacks capture the **render snapshot** where they were created, so a `setInterval` timer can see **frozen values** without care. Listing dependencies honestly plus using **updater setters** or refs for latest values defeats staleness. When an effect needs fresh data every time, include it and **clean up** the old run.',
        detail: 'If a value changes but the effect does not rerun, the dependency list lied. Fix the list before adding workarounds.'
      }
    ],
    examples: [
      {
        title: 'Ticking clock with proper cleanup',
        problem: 'Start an interval on mount, update every second, and remove it on unmount.',
        steps: [
          { label: 'Step 1: Hold time in state', text: 'Store the tick in component memory:\n```tsx\nimport { useEffect, useState } from "react";\nfunction Clock() {\n  const [now, setNow] = useState(function () { return new Date(); });\n  return <p>{now.toLocaleTimeString()}</p>;\n}\n```' },
          { label: 'Step 2: Subscribe once with cleanup', text: 'Create and clear the timer in one effect:\n```tsx\nuseEffect(function () {\n  const id = setInterval(function () { setNow(new Date()); }, 1000);\n  return function () { clearInterval(id); };\n}, []);\n```' },
          { label: 'Step 3: Survive StrictMode', text: 'Development mounts, cleans, and remounts to prove cleanup works:\n```tsx\n// mount -> effect -> cleanup -> effect again\n```\nA missing clear would leave two ticking intervals after the check.' }
        ],
        result: 'One interval ticks per mounted clock, unmount clears it, and StrictMode reports no duplicate timers.'
      },
      {
        title: 'Abortable profile fetch on id change',
        problem: 'Refetch when the user id prop changes, aborting the stale request to avoid overwrites.',
        steps: [
          { label: 'Step 1: Effect on the id', text: 'Rerun whenever the reactive id changes:\n```tsx\nimport { useEffect, useState } from "react";\nfunction Profile(props: { id: string }) {\n  const [name, setName] = useState("");\n  useEffect(function () {\n    const ctrl = new AbortController();\n    fetch("/api/users/" + props.id, { signal: ctrl.signal })\n      .then(function (r) { return r.json(); })\n      .then(function (u) { setName(u.name); })\n      .catch(function () {});\n    return function () { ctrl.abort(); };\n  }, [props.id]);\n  return <p>{name}</p>;\n}\n```' },
          { label: 'Step 2: Reason about ordering', text: 'Changing id aborts request one before starting request two, so a slow first response cannot overwrite fresh data. The catch swallows only the intentional abort path.' },
          { label: 'Step 3: Fix hooks order', text: 'Keep every hook above the return and conditions:\n```tsx\n// hooks first, early returns after, effects list honest deps\n```' }
        ],
        result: 'Each id shows its own name, races resolve to the latest request, and unmount cancels in flight.'
      }
    ],
    keyTakeaways: [
      'useState persists per-instance memory; setters schedule renders and updaters read latest.',
      'useEffect syncs after paint with externals; dependency arrays control reruns.',
      'Every subscription, timer, or fetch returns cleanup that reverses it.',
      'Call hooks top-level in stable order from components or custom hooks only.',
      'Defeat stale closures with honest deps, updater setters, and abort signals.'
    ],
    quiz: [
      {
        q: 'An effect creates a timer but returns no cleanup. What happens?',
        options: ['Nothing, timers clean themselves', 'Timers leak and multiply on reruns or remounts', 'The component renders faster', 'State freezes'],
        answer: 1,
        explanation: 'Without cleanup each effect run adds another timer, and StrictMode double-invoke exposes the leak.'
      },
      {
        q: 'When should an effect list a prop in its dependency array?',
        options: ['Never', 'Whenever the effect reads that reactive value', 'Only for strings', 'Only on mount'],
        answer: 1,
        explanation: 'Deps declare what the effect synchronizes with; omitting a read value freezes it at its first snapshot.'
      },
      {
        q: 'Where may hooks be called?',
        options: ['Inside loops and conditions freely', 'Top level of components and custom hooks in stable order', 'Inside plain helpers', 'After early returns only'],
        answer: 1,
        explanation: 'Stable order lets React match hook state across renders; conditions and helpers break that mapping.'
      },
      {
        q: 'Two rapid profile id changes race. What prevents the stale win?',
        options: ['Ignoring the problem', 'Aborting the previous fetch in effect cleanup keyed on id', 'Fetching twice always', 'Caching forever'],
        answer: 1,
        explanation: 'Cleanup aborts the outdated request so only the latest response can set state.'
      },
      // Placement-pattern: effect dependency selection (original)
      {
        q: "A component fetches whenever `userId` changes:\n```jsx\nuseEffect(() => { load(userId); }, ???);\n```\nWhich dependency choice is correct?",
        options: ["`[]`: fetch once, because props never change meaning", "Omit the array: effects should run after every render here", "`[userId, load, theme]`: include everything mentioned anywhere in the file", "`[userId]`: rerun exactly when the value the effect reads changes"],
        answer: 3,
        explanation: "Step 1: The data given is an effect whose body reads one prop to trigger loading. Step 2: The governing rule is dependency honesty: the array must list every reactive value read inside, so the effect reruns exactly when its inputs change. Step 3: Tracing each option, the empty array freezes the first id in a stale closure, the omitted array refetches after every render, unrelated entries add needless runs, and `[userId]` refetches precisely on user change. Step 4: The distractors fail because props do change meaning here, every-render fetching loops wastefully, and unrelated values do not belong in this effect. Step 5: Therefore the single-prop array is the correct choice."
      }
    ]
  },
  // ---------------------------------------------------------------- 11.3
  {
    sectionId: 'web-ch11-s3',
    readingTime: 9,
    intro: 'Lists, events, and forms are where React meets real user data at scale. This section renders collections with stable keys, handles synthetic events, and builds controlled forms with validation feedback. You will keep row state glued to the right item through every reorder.',
    objectives: [
      'Render lists with stable keys that preserve row identity',
      'Handle synthetic events with correct typing and delegation',
      'Build controlled inputs with value plus onChange',
      'Validate forms with inline errors and submit discipline'
    ],
    concepts: [
      {
        term: 'Stable keys rule',
        kind: 'law',
        statement: 'List keys must be **stable identifiers** like `item.id` that survive reorders, never **array indexes** on changing lists. Keys tell the reconciler which **component instance** maps to which row, preserving **focus and state**. Index keys on mutable lists swap state between rows on every insert.',
        detail: 'Use database ids or generated uuids at creation time. Index keys are acceptable only for static never-reordered lists.'
      },
      {
        term: 'Synthetic events',
        kind: 'definition',
        statement: 'React wraps native events in a **synthetic event** with consistent `target` and `currentTarget` behavior across browsers. Handlers receive the event plus **explicit data** through closures or data attributes, not globals. Prefer `currentTarget` for the **attached element** and `target` for the deepest clicked node.',
        detail: 'Type handlers with the element generic so value and checked fields check. Avoid inline arrow-heavy trees for huge lists by extracting rows.'
      },
      {
        term: 'Controlled inputs',
        kind: 'definition',
        statement: 'A **controlled input** binds `value` to state and updates it in `onChange`, making React the **single source** of displayed text. Uncontrolled inputs with `defaultValue` plus `ref` suit **one-shot reads** like file pickers. Control every field the UI validates, formats, or disables live.',
        detail: 'Controlled means every keystroke flows through state, enabling masks and instant errors. Uncontrolled skips rerenders but cannot validate per keystroke.'
      },
      {
        term: 'Form state and validation UX',
        kind: 'method',
        statement: 'Track **values, touched, and errors** together, validating on **blur and submit** via `onBlur` rather than punishing first keystrokes. Prevent the **default submit** reload, disable the button while **async validation** runs, and announce errors near fields. Validation is **feedback design**, not just regex correctness.',
        detail: 'Show errors after touch or submit, keep success quiet, and move focus to the first error on failed submit.'
      },
      {
        term: 'Event delegation sense',
        kind: 'insight',
        statement: 'React attaches **few root listeners** and dispatches to your handlers, so one logical handler can serve **dynamic rows** via data attributes. Read row identity from `currentTarget` dataset or **closure values** instead of querying the DOM. Delegation thinking keeps thousand-row tables fast without thousand listeners.',
        detail: 'Pass ids through props and closures where possible; dataset attributes bridge the gap for generic table cells.'
      }
    ],
    examples: [
      {
        title: 'Todo list that survives reordering',
        problem: 'Render editable todos with per-row draft state that must not jump rows on sort.',
        steps: [
          { label: 'Step 1: Key by id, not index', text: 'Give the reconciler stable identity:\n```tsx\nfunction TodoList(props: { items: { id: string; text: string }[] }) {\n  return (\n    <ul>\n      {props.items.map(function (item) {\n        return <TodoRow key={item.id} item={item} />;\n      })}\n    </ul>\n  );\n}\n```' },
          { label: 'Step 2: Keep draft in the row', text: 'Each row owns its edit buffer safely:\n```tsx\nimport { useState } from "react";\nfunction TodoRow(props: { item: { id: string; text: string } }) {\n  const [draft, setDraft] = useState(props.item.text);\n  return <input value={draft} onChange={function (e) { setDraft(e.target.value); }} />;\n}\n```' },
          { label: 'Step 3: Break it with index keys', text: 'Swapping to key by position detaches drafts on sort:\n```tsx\n// {props.items.map(function (item, i) { return <TodoRow key={i} item={item} />; })}\n```\nSorting then leaves text in the old positions while ids move, proving keys carry identity.' }
        ],
        result: 'Drafts, focus, and validation stick to their todo through sorts, filters, and inserts.'
      },
      {
        title: 'Controlled signup form with errors',
        problem: 'Collect email and password with blur validation and guarded submit.',
        steps: [
          { label: 'Step 1: Model values plus touched', text: 'Track what was visited to time feedback:\n```tsx\nimport { useState } from "react";\nfunction Signup() {\n  const [email, setEmail] = useState("");\n  const [touched, setTouched] = useState(false);\n  const error = touched && !email.includes("@") ? "Enter a valid email" : "";\n  return <form>{error}</form>;\n}\n```' },
          { label: 'Step 2: Wire controlled fields', text: 'Bind value and change for live checks:\n```tsx\n<input\n  value={email}\n  onChange={function (e) { setEmail(e.target.value); }}\n  onBlur={function () { setTouched(true); }}\n/>\n```' },
          { label: 'Step 3: Guard submit', text: 'Stop reloads and block bad posts:\n```tsx\nfunction onSubmit(e: import("react").FormEvent): void {\n  e.preventDefault();\n  if (!email.includes("@")) { setTouched(true); return; }\n  createAccount(email);\n}\n```' }
        ],
        result: 'Errors appear after blur or submit, the button never posts invalid data, and reloads never wipe drafts.'
      }
    ],
    keyTakeaways: [
      'Key dynamic lists by stable ids so row state survives reorder.',
      'Handle synthetic events with typed handlers and explicit row data.',
      'Control inputs bound to state for live validation and formatting.',
      'Validate on blur and submit with values, touched, and errors together.',
      'Think delegation for big tables: few handlers, explicit identity.'
    ],
    quiz: [
      {
        q: 'Why do index keys break on a sortable todo list?',
        options: ['Indexes are slower', 'Indexes describe position, so inserts reassign identity and swap row state', 'Indexes are forbidden syntax', 'Indexes duplicate ids'],
        answer: 1,
        explanation: 'Keys map instances to rows; position keys move identity while stable ids carry it along.'
      },
      {
        q: 'What makes an input controlled?',
        options: ['A placeholder attribute', 'value bound to state plus onChange updating it', 'A ref alone', 'defaultValue alone'],
        answer: 1,
        explanation: 'React owns the displayed text when value comes from state and every change writes back.'
      },
      {
        q: 'When should field errors first appear?',
        options: ['On the very first keystroke always', 'After blur or submit, once the user has had a chance', 'Never', 'Only on server logs'],
        answer: 1,
        explanation: 'Touched-gated feedback validates without punishing exploration.'
      },
      {
        q: 'In a row button handler, what is currentTarget?',
        options: ['The deepest clicked span', 'The element the handler is attached to, such as the row button', 'The window', 'The previous page'],
        answer: 1,
        explanation: 'currentTarget is the attached element while target may be a nested child that was clicked.'
      },
      // Placement-pattern: stable keys for stateful lists (original)
      {
        q: "A todo list renders rows with text inputs. With `key={index}`, inserting a row at the top makes existing inputs appear to jump to the wrong rows. Which fix is correct?",
        options: ["Use the stable todo `id` as `key`, so each row state follows its identity across reorders and inserts", "Remove keys entirely from the list", "Generate a random key on every render for freshness", "Sort the list alphabetically instead of fixing keys"],
        answer: 0,
        explanation: "Step 1: The data given is a stateful list keyed by position where inserts scramble row state. Step 2: The governing rule is identity matching: keys tell the reconciler which new element continues which old one, so state and focus follow the key rather than the position. Step 3: Tracing an insert at the top, index keys shift every row down one slot and drag input state along, while stable id keys keep each row matched to itself regardless of position. Step 4: The distractors fail because missing keys fall back to position matching, random keys destroy all state each render, and sorting never addresses identity. Step 5: Therefore stable id keys are the correct fix."
      }
    ]
  },
  // ---------------------------------------------------------------- 11.4
  {
    sectionId: 'web-ch11-s4',
    readingTime: 9,
    intro: 'Prop drilling carries shared values through layers that do not care about them. This section shares state with context, extracts reusable logic into custom hooks, and uses refs and memoization precisely. You will know when context fits and when props or a store fits better.',
    objectives: [
      'Provide and consume context without prop drilling',
      'Author custom hooks that encapsulate reusable stateful logic',
      'Use refs for DOM handles and mutable latest values',
      'Apply memoization only where measurement justifies it'
    ],
    concepts: [
      {
        term: 'Context shares deeply',
        kind: 'definition',
        statement: 'A **context object** created with `createContext` carries a value from a **provider ancestor** to any descendant consumer. Consumers with `useContext` rerender on **every value change**, so providers should memoize **object identities**. Reserve context for **slow-changing globals** like theme, locale, and auth.',
        detail: 'Split fast and slow values into separate contexts so typing does not rerender themed chrome. Props still win for direct parent-child data.'
      },
      {
        term: 'Custom hooks reuse logic',
        kind: 'method',
        statement: 'A custom hook is a function starting with **use** that calls other hooks to package **stateful behavior** for reuse. Hooks like `useLocalStorage` pair `useState` with `useEffect` behind one **clean return** of value plus setter. Each caller gets **independent state** with shared logic, not shared data.',
        detail: 'Name hooks after the behavior, accept options, and return tuples or objects callers destructure. Test hooks through small harness components.'
      },
      {
        term: 'Refs escape renders',
        kind: 'definition',
        statement: 'A **ref object** from `useRef` holds a mutable `current` box that survives renders without **triggering rerenders**. Refs suit **DOM handles** for focus and measuring plus **latest-value boxes** for intervals. Never read or write refs during render except for **lazy initialization** patterns.',
        detail: 'Focus inputs, scroll lists, and store timer ids in refs. State remains the tool for anything that must paint.'
      },
      {
        term: 'Memoization with useMemo',
        kind: 'method',
        statement: 'The `useMemo` hook caches an **expensive derivation** recomputed only when its **dependency list** changes. Memoizing **cheap values** or unstable closures adds overhead without benefit, so measure with **profiling** first. Pair with `useCallback` only when a **memoized child** actually depends on callback identity.',
        detail: 'Sorts and filters over thousands of rows are candidates; string concatenation is not. Correctness first, memo second.'
      },
      {
        term: 'Context versus props versus store',
        kind: 'insight',
        statement: 'Choose **props** for direct children, **context** for deeply shared slow values, and a **store** like `useCart` for frequently updated global state. Context broadcasts to **all consumers** on change, which thrashes fast counters, while stores offer **selective subscriptions**. Escalate from props to context to store only on measured pain.',
        detail: 'Auth and theme sit well in context; carts and tickers belong in state or a store with selectors.'
      }
    ],
    examples: [
      {
        title: 'Theme context without drilling',
        problem: 'Share a light and dark theme plus a toggle through three layout layers.',
        steps: [
          { label: 'Step 1: Create and provide', text: 'Publish the value once near the root:\n```tsx\nimport { createContext, useMemo, useState } from "react";\nconst ThemeCtx = createContext({ theme: "light", toggle: function () {} });\nfunction ThemeProvider(props: { children: import("react").ReactNode }) {\n  const [theme, setTheme] = useState("light");\n  const value = useMemo(function () {\n    return { theme: theme, toggle: function () { setTheme(function (t) { return t === "light" ? "dark" : "light"; }); } };\n  }, [theme]);\n  return <ThemeCtx.Provider value={value}>{props.children}</ThemeCtx.Provider>;\n}\n```' },
          { label: 'Step 2: Consume deep down', text: 'Read without intermediate props:\n```tsx\nimport { useContext } from "react";\nfunction Toggle() {\n  const ctx = useContext(ThemeCtx);\n  return <button onClick={ctx.toggle}>{ctx.theme}</button>;\n}\n```' },
          { label: 'Step 3: Keep identity stable', text: 'Memoize the provider value so unrelated parent renders do not rebroadcast:\n```tsx\n// value memoized on [theme] above; consumers rerender only on theme change\n```' }
        ],
        result: 'Deep buttons toggle the theme with no intermediate props, and consumers update only when the theme flips.'
      },
      {
        title: 'Custom hook for localStorage state',
        problem: 'Reuse persistent string state across a theme picker and a draft editor.',
        steps: [
          { label: 'Step 1: Encapsulate state plus effect', text: 'Hide the storage ceremony in one hook:\n```tsx\nimport { useEffect, useState } from "react";\nfunction useLocalStorage(key: string, initial: string): [string, (v: string) => void] {\n  const [value, setValue] = useState(function () {\n    try { return localStorage.getItem(key) || initial; } catch (err) { return initial; }\n  });\n  useEffect(function () {\n    try { localStorage.setItem(key, value); } catch (err) {}\n  }, [key, value]);\n  return [value, setValue];\n}\n```' },
          { label: 'Step 2: Reuse in two components', text: 'Each caller owns independent state with shared logic:\n```tsx\nfunction ThemePicker() {\n  const [theme, setTheme] = useLocalStorage("theme", "light");\n  return <button onClick={function () { setTheme(theme === "light" ? "dark" : "light"); }}>{theme}</button>;\n}\n```' },
          { label: 'Step 3: Note the boundary', text: 'Logic is shared while stored values stay per caller:\n```tsx\n// ThemePicker and DraftEditor each call useLocalStorage with own key\n```' }
        ],
        result: 'Both components persist with three lines each, and storage failures degrade to memory silently.'
      }
    ],
    keyTakeaways: [
      'Context broadcasts slow globals from providers to deep consumers.',
      'Memoize provider values so consumers rerender only on real changes.',
      'Custom use hooks package stateful logic with independent state per caller.',
      'Refs hold DOM handles and mutable boxes without rerendering.',
      'Memoize expensive derivations only after profiling proves the cost.'
    ],
    quiz: [
      {
        q: 'When is context the right tool over props?',
        options: ['For direct parent-child data', 'For deeply shared slow values like theme and auth', 'For per-keystroke input state', 'Never'],
        answer: 1,
        explanation: 'Context skips intermediate layers for globals; props stay clearer for direct children.'
      },
      {
        q: 'Why memoize a context provider value?',
        options: ['To change the theme faster', 'To keep object identity stable so consumers skip unrelated rerenders', 'To encrypt values', 'Memoization is required syntax'],
        answer: 1,
        explanation: 'New object identities broadcast every render; memoization limits updates to real changes.'
      },
      {
        q: 'What does each caller of a custom hook receive?',
        options: ['Shared state with all callers', 'Independent state running shared logic', 'No state', 'A copy of the provider'],
        answer: 1,
        explanation: 'Hooks reuse behavior, not data; each call site owns its own state cells.'
      },
      {
        q: 'What belongs in a ref rather than state?',
        options: ['Text that must paint', 'DOM handles and mutable latest values that must not rerender', 'Props', 'Routes'],
        answer: 1,
        explanation: 'Refs persist without scheduling renders, fitting focus targets and timer handles.'
      }
    ]
  },
  // ---------------------------------------------------------------- 11.5
  {
    sectionId: 'web-ch11-s5',
    readingTime: 8,
    intro: 'Professional components handle every case: loading, empty, error, and ready, while staying small enough to reuse. This section renders conditional UI cleanly, lifts shared state to common owners, and splits containers from presentational pieces. You will organize a feature folder that scales past a demo.',
    objectives: [
      'Render loading, empty, error, and data states explicitly',
      'Lift shared state to the lowest common owner',
      'Split container data logic from presentational rendering',
      'Structure feature folders with colocated components and hooks'
    ],
    concepts: [
      {
        term: 'Conditional UI states',
        kind: 'method',
        statement: 'Every data view renders one of **four cases**: loading, empty, error, or **ready content**, chosen with `isLoading` ternaries or **early returns**. Early returns keep each case **flat and named** instead of nesting three levels deep. Missing the empty case turns zero results into a **confusing blank** page.',
        detail: 'Order checks as error, loading, empty, then ready so failures surface first. Name each branch component after its case.'
      },
      {
        term: 'Lifting state up',
        kind: 'method',
        statement: 'When two siblings need the **same value**, move `useState` to their **lowest common parent** and pass value plus callbacks down. The shared owner becomes the **single source** while children stay synchronized automatically. Lift only as high as sharing requires to avoid **distant prop drilling**.',
        detail: 'Search text shared by a field and a list lives in their section parent. Global sharing graduates to context or a store.'
      },
      {
        term: 'Container and presentational split',
        kind: 'definition',
        statement: 'Container components own **data fetching** and callbacks while presentational components render **pure props** with no hooks. Presentational pieces take `items` and `onSelect` so stories and **tests feed props** directly. Containers stay thin, mapping server shapes to **view props** at the boundary.',
        detail: 'Extract the table from the loader: one fetches, one draws rows. Reuse the table across pages with different loaders.'
      },
      {
        term: 'Compound readability patterns',
        kind: 'insight',
        statement: 'Readable components keep one **concept per file**, guard clauses at the top, and **named helpers** for branches. Boolean props like `isLoading` read clearer than **magic strings** scattered through JSX. Small files with **verb-named handlers** make review a scan instead of a dig.',
        detail: 'If a file exceeds a screen of JSX, extract a section. If a handler needs a comment, rename it first.'
      },
      {
        term: 'Feature folder structure',
        kind: 'notation',
        statement: 'Group each feature as a **folder unit** with its components, hooks, and `types` beside an **index barrel** for imports. Shared UI lives in `components` while feature code imports through **explicit paths**. Colocation keeps **edits local** and deletes complete when features retire.',
        detail: 'Example layout: features search with SearchBox, useSearch, types, and index in one folder. Move only proven reuse up to shared.'
      }
    ],
    examples: [
      {
        title: 'Inbox panel covering all four states',
        problem: 'Render a message list that cannot confuse loading with empty or error.',
        steps: [
          { label: 'Step 1: Branch with early returns', text: 'Name each case in order:\n```tsx\nfunction Inbox(props: { status: string; items: string[] }) {\n  if (props.status === "failed") return <p>Failed to load. Retry.</p>;\n  if (props.status === "loading") return <p>Loading messages</p>;\n  if (props.items.length === 0) return <p>No messages yet.</p>;\n  return <ul>{props.items.map(function (m) { return <li key={m}>{m}</li>; })}</ul>;\n}\n```' },
          { label: 'Step 2: Lift the fetch state', text: 'Own status above both the filter and the list:\n```tsx\nimport { useState } from "react";\nfunction InboxPage() {\n  const [query, setQuery] = useState("");\n  return <Inbox status="ready" items={["hello"]} />;\n}\n```' },
          { label: 'Step 3: Review the matrix', text: 'Check all four renders in isolation before wiring data:\n```tsx\n// failed -> error, loading -> spinner, empty list -> empty, items -> list\n```' }
        ],
        result: 'Each state has deliberate copy and layout, and zero messages reads as an invitation rather than a bug.'
      },
      {
        title: 'Split loader from table',
        problem: 'Reuse one sortable table under two different data loaders.',
        steps: [
          { label: 'Step 1: Draw the pure table', text: 'Render only from props with no fetching:\n```tsx\ninterface Row { id: string; name: string }\nfunction UserTable(props: { rows: Row[]; onPick: (id: string) => void }) {\n  return (\n    <table>\n      <tbody>\n        {props.rows.map(function (r) {\n          return <tr key={r.id} onClick={function () { props.onPick(r.id); }}><td>{r.name}</td></tr>;\n        })}\n      </tbody>\n    </table>\n  );\n}\n```' },
          { label: 'Step 2: Fetch in the container', text: 'Map server data to view props at the edge:\n```tsx\nfunction TeamPage() {\n  const rows: Row[] = [{ id: "u1", name: "Ada" }];\n  return <UserTable rows={rows} onPick={showDetail} />;\n  function showDetail(id: string): void { console.log(id); }\n}\n```' },
          { label: 'Step 3: Reuse elsewhere', text: 'A second page reuses the table with its own loader:\n```tsx\n// <UserTable rows={adminRows} onPick={auditPick} />\n```' }
        ],
        result: 'Table tests feed props directly while each page owns its own loading and errors.'
      }
    ],
    keyTakeaways: [
      'Render loading, empty, error, and ready as explicit named branches.',
      'Lift shared state to the lowest common parent, no higher.',
      'Split fetching containers from pure presentational components.',
      'Keep one concept per file with guard clauses and verb handlers.',
      'Colocate feature files and promote only proven reuse to shared.'
    ],
    quiz: [
      {
        q: 'In what order should data branches usually check?',
        options: ['Ready first always', 'Error, then loading, then empty, then ready', 'Empty first always', 'Order does not matter'],
        answer: 1,
        explanation: 'Failures and pending states take precedence so stale content never masquerades as fresh.'
      },
      {
        q: 'Two sibling components need the same filter text. Where does it live?',
        options: ['Duplicated in each sibling', 'In their lowest common parent passed as value plus callback', 'In the URL always', 'Nowhere'],
        answer: 1,
        explanation: 'Lifting to the common owner creates one source while keeping the distance minimal.'
      },
      {
        q: 'What distinguishes a presentational component?',
        options: ['It fetches all data', 'It renders pure props with no data hooks, fed directly by parents or stories', 'It owns the router', 'It cannot receive props'],
        answer: 1,
        explanation: 'Pure props make rendering deterministic and directly testable with sample data.'
      },
      {
        q: 'When should feature code move to shared?',
        options: ['Immediately', 'After a second real use proves the reuse', 'Never', 'Before writing it'],
        answer: 1,
        explanation: 'Premature sharing couples features; proven duplication earns promotion to shared.'
      }
    ]
  }
]
