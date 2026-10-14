import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 12: Advanced React & Next.js:
// Routing, Data & Rendering (Sections 12.1 – 12.5). Master study content.
// ============================================================================

export const webCh12Content: SectionContent[] = [
  // ---------------------------------------------------------------- 12.1
  {
    sectionId: 'web-ch12-s1',
    readingTime: 8,
    intro: 'Routing turns one page load into many navigable screens without full reloads. This section maps nested routes, layouts, parameters, and search state with React Router patterns. You will navigate declaratively while keeping URLs shareable and deep-linkable.',
    objectives: [
      'Declare nested routes with shared layouts and outlets',
      'Read path params and search state for deep links',
      'Navigate with links, redirects, and programmatic calls',
      'Load route data before render with loaders and actions'
    ],
    concepts: [
      {
        term: 'Nested routes and layouts',
        kind: 'definition',
        statement: 'Routes nest so a **layout route** renders shared chrome once while its **outlet** from `Outlet` swaps child screens. Layouts own **navigation and sidebars** and children own page content, avoiding **remount churn** on every tab switch. Nesting mirrors the visual hierarchy users actually see.',
        detail: 'Keep layout routes free of page-specific data. Children declare their own paths relative to the parent.'
      },
      {
        term: 'Params and search state',
        kind: 'notation',
        statement: 'Path segments like `users` with an **id placeholder** name the resource, read with `useParams` in the page. Query strings like `sort` and `page` carry **optional view state**, read with `useSearchParams` for shareable filters. Paths identify what, while search describes **how it shows**.',
        detail: 'Validate params before fetching and default search values explicitly. Shareable URLs must reproduce the exact view.'
      },
      {
        term: 'Declarative navigation',
        kind: 'method',
        statement: 'The **Link component** navigates without reloads and announces correctly to **assistive tech**, unlike bare click handlers. Relative links resolve against the **route hierarchy**, and `NavLink` styles the **active entry** automatically. Reserve programmatic `useNavigate` for **post-submit** jumps and guarded redirects.',
        detail: 'Prefer links for anything the user perceives as going somewhere. Buttons submit or act; links navigate.'
      },
      {
        term: 'Loaders fetch before render',
        kind: 'method',
        statement: 'Route **loaders** like `usersLoader` fetch or derive data before the element paints, so pages render with **ready props** instead of spinner flashes. Actions handle **mutations plus redirects** for forms, keeping POST logic beside its route. Errors bubble to **boundary elements** per branch instead of one global crash.',
        detail: 'Return typed data from loaders and read it with the route data hook. Keep loaders free of component state.'
      },
      {
        term: 'Guards and not-found design',
        kind: 'insight',
        statement: 'Protected routes check **auth state** in `loader` functions or wrappers and redirect to **login with return paths** preserved. Unknown paths render a **helpful not-found** route with search and home links, not a blank screen. Guards decide **access early** so unauthorized data never starts loading.',
        detail: 'Store the intended destination in search so login can return there. Test guards logged in, logged out, and expired.'
      }
    ],
    examples: [
      {
        title: 'Blog layout with nested post route',
        problem: 'Share one blog shell across an index list and per-post pages addressed by slug.',
        steps: [
          { label: 'Step 1: Declare the nest', text: 'Mount children inside the layout outlet:\n```tsx\nimport { Outlet } from "react-router-dom";\nconst routes = [\n  {\n    path: "blog",\n    element: <BlogLayout />,\n    children: [\n      { index: true, element: <PostList /> },\n      { path: ":slug", element: <PostPage /> }\n    ]\n  }\n];\nfunction BlogLayout() {\n  return <main><Outlet /></main>;\n}\n```' },
          { label: 'Step 2: Read the param', text: 'Fetch the addressed post by its slug:\n```tsx\nimport { useParams } from "react-router-dom";\nfunction PostPage() {\n  const params = useParams();\n  return <Article slug={params.slug || ""} />;\n}\n```' },
          { label: 'Step 3: Link relatively', text: 'Point at siblings without hardcoding the base:\n```tsx\nimport { Link } from "react-router-dom";\nfunction PostList() {\n  return <Link to="hello-world">Hello World</Link>;\n}\n```' }
        ],
        result: 'Shell mounts once, list and post swap in the outlet, and slugs deep-link from any fresh load.'
      },
      {
        title: 'Filterable users with search state',
        problem: 'Keep a role filter and page number in the URL so filtered views are shareable.',
        steps: [
          { label: 'Step 1: Read search in the loader', text: 'Parse view state before painting:\n```tsx\nasync function usersLoader(args: { request: Request }) {\n  const url = new URL(args.request.url);\n  const role = url.searchParams.get("role") || "all";\n  return fetchUsers(role);\n}\n```' },
          { label: 'Step 2: Edit search from UI', text: 'Update the query without losing history shape:\n```tsx\nimport { useSearchParams } from "react-router-dom";\nfunction RoleFilter() {\n  const [params, setParams] = useSearchParams();\n  function pick(role: string): void {\n    params.set("role", role);\n    setParams(params);\n  }\n  return <button onClick={function () { pick("admin"); }}>Admins</button>;\n}\n```' },
          { label: 'Step 3: Verify shareability', text: 'Copy the URL with role and page to a new tab and confirm the identical view:\n```tsx\n// /users?role=admin&page=2 renders filtered page two on fresh load\n```' }
        ],
        result: 'Filters live in the address bar, back and forward traverse views, and links reproduce exact states.'
      }
    ],
    keyTakeaways: [
      'Nest routes so layouts persist while outlets swap page content.',
      'Paths name resources via params; search carries optional view state.',
      'Navigate with Link for accessibility and useNavigate after actions.',
      'Loaders fetch before paint and actions mutate beside their route.',
      'Guard early with redirects and design helpful not-found routes.'
    ],
    quiz: [
      {
        q: 'What does an Outlet render?',
        options: ['The whole app', 'The matched child route inside its layout parent', 'A modal always', 'Nothing'],
        answer: 1,
        explanation: 'Layouts render chrome once and outlets swap the active child without remounting shared UI.'
      },
      {
        q: 'Where should a shareable role filter live?',
        options: ['In component state only', 'In the URL search string via useSearchParams', 'In a global variable', 'In localStorage only'],
        answer: 1,
        explanation: 'Search state deep-links: copied URLs reproduce the same filtered view on fresh loads.'
      },
      {
        q: 'When is programmatic useNavigate appropriate?',
        options: ['For every link', 'After mutations and guarded redirects, not for plain navigation', 'Never', 'Only on first load'],
        answer: 1,
        explanation: 'Links handle perceived navigation accessibly; code navigates after submit outcomes.'
      },
      {
        q: 'What do route loaders achieve?',
        options: ['Slower pages', 'Data ready before first paint with per-branch error boundaries', 'No fetching', 'Client-only state'],
        answer: 1,
        explanation: 'Loaders resolve before render so pages paint complete and failures show contextual UI.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.2
  {
    sectionId: 'web-ch12-s2',
    readingTime: 9,
    intro: 'Server state is cached remote truth with loading, freshness, and retry semantics that client state tools were never built for. This section fetches with TanStack Query through query keys, caching, and mutations. You will separate what the server owns from what the UI owns.',
    objectives: [
      'Fetch and cache with query keys and query functions',
      'Tune staleness, retries, and background refetching',
      'Mutate with invalidation and optimistic updates',
      'Keep fetched data out of global client stores'
    ],
    concepts: [
      {
        term: 'Server versus client state',
        kind: 'definition',
        statement: 'Server state is **shared remote data** that can stale, fail, and update elsewhere, managed with `useQuery` caching. Client state like **drafts and toggles** is local, synchronous, and owned by the UI. Mixing them by copying fetches into a **global store** creates stale duplicates that never invalidate.',
        detail: 'Ask who owns truth: server data stays in the query cache, UI data stays in state or a small store.'
      },
      {
        term: 'Query keys and functions',
        kind: 'notation',
        statement: 'A **query key** array like `todos` with filters names one cache entry, and the **query function** fetches it with `fetch` plus strict checks. Identical keys **share results** across components while differing filters get **separate entries**. Keys are the identity scheme, so design them like database keys.',
        detail: 'Include every filter variable in the key. Omit one and two views will poison each other cache entry.'
      },
      {
        term: 'Freshness and retries',
        kind: 'method',
        statement: 'Freshness settings like `staleTime` and `gcTime` decide when data **refetches in background** versus serves instantly from cache. Retries with **backoff** ride out blips while `refetchOnWindowFocus` keeps **visible data** current. Tune per resource: prices refetch fast, while archival text stays cached longer.',
        detail: 'Defaults favor freshness over fewer requests; raise stale times for slow-changing lists. Disable refetch only with reason.'
      },
      {
        term: 'Mutations and invalidation',
        kind: 'method',
        statement: 'The `useMutation` hook posts changes and then **invalidates** affected query keys so lists **refetch clean**. Optimistic updates apply the **expected change** instantly with rollback on **error paths** for snappy likes and toggles. Invalidation, not manual cache surgery, is the default after writes.',
        detail: 'Invalidate the narrowest key set covering the write. Optimism suits reversible toggles, not money moves.'
      },
      {
        term: 'Query versus store decision',
        kind: 'insight',
        statement: 'Reach for **TanStack Query** via `useQuery` when data comes from a server with identity and freshness, and for a **store** when UI alone owns it. Fetched rows flow through **query hooks** at usage sites instead of living in global variables. Stores hold **selection and session** crumbs that reference query data by id.',
        detail: 'If it has a URL, an id, and a staleness question, it is server state. Everything else earns simpler tools.'
      }
    ],
    examples: [
      {
        title: 'Cached post list with keyed filters',
        problem: 'Fetch posts per author with shared caching, background freshness, and error states.',
        steps: [
          { label: 'Step 1: Key by filter', text: 'Name the cache entry with its inputs:\n```tsx\nimport { useQuery } from "@tanstack/react-query";\nfunction usePosts(author: string) {\n  return useQuery({\n    queryKey: ["posts", author],\n    queryFn: async function () {\n      const res = await fetch("/api/posts?author=" + author);\n      if (!res.ok) throw new Error("Posts failed");\n      return res.json();\n    },\n    staleTime: 30 * 1000\n  });\n}\n```' },
          { label: 'Step 2: Render all states', text: 'Branch on the query status flags:\n```tsx\nfunction PostList(props: { author: string }) {\n  const q = usePosts(props.author);\n  if (q.isLoading) return <p>Loading</p>;\n  if (q.isError) return <p>Failed, retry</p>;\n  return <ul>{q.data.map(function (p: { id: string }) { return <li key={p.id}>{p.id}</li>; })}</ul>;\n}\n```' },
          { label: 'Step 3: Share across mounts', text: 'Two components with the same key share one fetch:\n```tsx\n// <PostList author="ada" /> in sidebar and main issues one request\n```' }
        ],
        result: 'First mount fetches, siblings reuse cache, stale data refreshes in background after thirty seconds.'
      },
      {
        title: 'Like button with invalidate and optimism',
        problem: 'Toggle a like instantly with rollback on failure and list refresh on success.',
        steps: [
          { label: 'Step 1: Mutate then invalidate', text: 'Write through the server and refresh readers:\n```tsx\nimport { useMutation, useQueryClient } from "@tanstack/react-query";\nfunction useLike() {\n  const client = useQueryClient();\n  return useMutation({\n    mutationFn: async function (id: string) {\n      const res = await fetch("/api/likes/" + id, { method: "POST" });\n      if (!res.ok) throw new Error("Like failed");\n    },\n    onSuccess: function () { client.invalidateQueries({ queryKey: ["posts"] }); }\n  });\n}\n```' },
          { label: 'Step 2: Apply optimism carefully', text: 'Update the cached list instantly and roll back on error:\n```tsx\n// onMutate snapshots cache, onError restores it, onSettled invalidates\n```' },
          { label: 'Step 3: Keep stores out', text: 'Never copy posts into a global store for this flow:\n```tsx\n// components call usePosts at usage sites; store holds only selectedId\n```' }
        ],
        result: 'Likes feel instant, failures restore honestly, and every list converges on server truth.'
      }
    ],
    keyTakeaways: [
      'Server state is cached remote truth; client state is local UI ownership.',
      'Query keys name cache entries; query functions fetch them with checks.',
      'Tune staleTime, gcTime, retries, and focus refetch per resource.',
      'Mutate then invalidate; use optimism only with rollback.',
      'Never duplicate fetched rows in a global store; reference by id.'
    ],
    quiz: [
      {
        q: 'Two components call useQuery with key posts plus author ada. How many fetches?',
        options: ['Two always', 'One shared fetch with shared cache', 'Zero', 'One per render'],
        answer: 1,
        explanation: 'Identical keys map to one cache entry, so mounts share the in-flight or cached result.'
      },
      {
        q: 'What should follow a successful mutation that changes a list?',
        options: ['Nothing', 'Invalidate the affected query keys so readers refetch', 'Reload the whole app', 'Clear all storage'],
        answer: 1,
        explanation: 'Invalidation marks cached lists stale so they converge on the new server truth.'
      },
      {
        q: 'Why not copy fetched posts into a global store?',
        options: ['Stores are too fast', 'Duplicates stale independently and never invalidate with queries', 'Queries forbid rendering', 'Stores cannot hold arrays'],
        answer: 1,
        explanation: 'Two sources of truth diverge; query cache with keyed identity stays coherent.'
      },
      {
        q: 'What does a thirty-second staleTime mean?',
        options: ['Data deletes after thirty seconds', 'Cached data serves instantly and refreshes in background after thirty seconds', 'Fetches block for thirty seconds', 'Retries stop'],
        answer: 1,
        explanation: 'Fresh windows serve cache immediately; expiry triggers background refetch on next read.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.3
  {
    sectionId: 'web-ch12-s3',
    readingTime: 8,
    intro: 'Client state is what the UI alone owns: selections, drafts, toggles, and session crumbs. This section builds minimal Zustand stores with selective subscriptions and reads legacy Redux without fear. You will escalate from useState to Zustand to Redux literacy only on evidence.',
    objectives: [
      'Hold shared UI state in a minimal Zustand store',
      'Subscribe selectively to avoid wasted rerenders',
      'Read legacy Redux actions, reducers, and selectors',
      'Choose the smallest tool with an escalation ladder'
    ],
    concepts: [
      {
        term: 'Zustand minimal store',
        kind: 'definition',
        statement: 'A **Zustand store** built with `create` is a small hook holding shared UI state with **action functions** beside the data. Components call the **store hook** directly with no providers or boilerplate, and updates replace **immutable snapshots**. It fits selections, wizards, and carts that several components edit.',
        detail: 'Create one store per domain such as cart or session. Actions live in the store so components stay declarative.'
      },
      {
        term: 'Selective subscriptions',
        kind: 'method',
        statement: 'Subscribing to a **narrow slice** like `useCart` selecting items rerenders only when that **slice changes**. Broad subscriptions to the **whole store** rerender on every unrelated tweak. Selectors plus **shallow comparison** keep fast components fast as stores grow.',
        detail: 'Select data and actions separately so action identity never retriggers. Split stores when one slice churns constantly.'
      },
      {
        term: 'Redux literacy',
        kind: 'definition',
        statement: 'Legacy **Redux code** routes updates through dispatched **actions** into pure **reducers** selected by `useSelector` hooks. Modern Redux Toolkit trims **boilerplate** with slices, but the **unidirectional flow** of dispatch to reducer to render remains. Read stores by tracing action names to their single reducer case.',
        detail: 'You will meet Redux in older codebases and interviews. Understand its shape even when new code uses lighter tools.'
      },
      {
        term: 'Actions update immutably',
        kind: 'method',
        statement: 'Store actions using `set` produce **new objects** with spread and map instead of **mutating drafts** in place. Immutable updates let **reference checks** detect change and keep time-travel debugging honest. Reducers and Zustand setters share this **pure update** discipline regardless of library.',
        detail: 'Map over arrays to edit one row, filter to remove, and spread for field patches. Mutation hides changes from subscribers.'
      },
      {
        term: 'Smallest store wins',
        kind: 'insight',
        statement: 'Escalate state tools by **measured need**: local `useState` first, then a **Zustand store** for shared UI, then Redux only for **legacy consistency**. Globalizing **local form state** adds indirection without benefit, while under-sharing forces **prop drilling** marathons. Promote state one level at a time until sharing stops hurting.',
        detail: 'Default to colocated state; graduate when two distant components truly co-edit. Document why each store exists.'
      }
    ],
    examples: [
      {
        title: 'Cart store with slice subscription',
        problem: 'Share a cart count between a header badge and a product button without rerendering everything.',
        steps: [
          { label: 'Step 1: Create the store', text: 'Hold items plus actions in one hook:\n```tsx\nimport { create } from "zustand";\ninterface CartState { items: string[]; add: (id: string) => void }\nconst useCart = create<CartState>(function (set) {\n  return {\n    items: [],\n    add: function (id) { set(function (s) { return { items: s.items.concat([id]) }; }); }\n  };\n});\n```' },
          { label: 'Step 2: Select narrowly', text: 'Each component subscribes to what it paints:\n```tsx\nfunction Badge() {\n  const count = useCart(function (s) { return s.items.length; });\n  return <span>{count}</span>;\n}\nfunction BuyButton(props: { id: string }) {\n  const add = useCart(function (s) { return s.add; });\n  return <button onClick={function () { add(props.id); }}>Add</button>;\n}\n```' },
          { label: 'Step 3: Verify isolation', text: 'Adding an item rerenders the badge count while unrelated panels subscribed to other slices stay quiet. Profile with React DevTools highlights to confirm.' }
        ],
        result: 'Shared cart state updates exactly its readers, and actions stay colocated with the data they change.'
      },
      {
        title: 'Read a legacy Redux slice',
        problem: 'Trace a theme toggle in Redux Toolkit code you inherited without rewriting it.',
        steps: [
          { label: 'Step 1: Find the slice', text: 'Locate state plus reducers in one file:\n```tsx\nimport { createSlice } from "@reduxjs/toolkit";\nconst themeSlice = createSlice({\n  name: "theme",\n  initialState: { mode: "light" },\n  reducers: {\n    toggle: function (state) { state.mode = state.mode === "light" ? "dark" : "light"; }\n  }\n});\nexport const { toggle } = themeSlice.actions;\n```' },
          { label: 'Step 2: Trace dispatch to render', text: 'Follow the action into the subscribed component:\n```tsx\nimport { useDispatch, useSelector } from "react-redux";\nfunction ThemeButton() {\n  const mode = useSelector(function (s: { theme: { mode: string } }) { return s.theme.mode; });\n  const dispatch = useDispatch();\n  return <button onClick={function () { dispatch(toggle()); }}>{mode}</button>;\n}\n```' },
          { label: 'Step 3: Decide whether to migrate', text: 'Leave working Redux alone unless churn or hiring cost demands it:\n```tsx\n// migrate only when slice count, boilerplate, or team consensus justifies it\n```' }
        ],
        result: 'You can debug and extend the inherited slice confidently while new features default to lighter tools.'
      }
    ],
    keyTakeaways: [
      'Zustand holds shared UI state as a hook with colocated actions.',
      'Select narrow slices so components ignore unrelated updates.',
      'Read Redux as dispatch to reducer to selector even when not writing it.',
      'Update stores immutably so reference checks detect change.',
      'Escalate useState to Zustand to Redux only on measured sharing pain.'
    ],
    quiz: [
      {
        q: 'A header badge rerenders on every unrelated store edit. What is wrong?',
        options: ['Zustand is broken', 'It subscribes to the whole store instead of a narrow slice', 'It needs more state', 'Badges always rerender'],
        answer: 1,
        explanation: 'Broad subscriptions fire on any change; slice selectors limit renders to relevant updates.'
      },
      {
        q: 'What is the Redux update flow?',
        options: ['Mutate globals directly', 'Dispatch actions into pure reducers, then select state in components', 'Edit the DOM manually', 'Fetch on every render'],
        answer: 1,
        explanation: 'Unidirectional dispatch to reducer to render keeps legacy updates traceable.'
      },
      {
        q: 'How should store actions change arrays?',
        options: ['Push in place', 'Return new arrays with map, filter, and concat', 'Delete the store', 'Mutate then force update'],
        answer: 1,
        explanation: 'Immutable snapshots let subscribers detect change by reference.'
      },
      {
        q: 'When should local form state become global?',
        options: ['Immediately', 'Only when distant components truly co-edit it', 'Never', 'Always for inputs'],
        answer: 1,
        explanation: 'Globalizing local state adds indirection; promote one level at a time on evidence.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.4
  {
    sectionId: 'web-ch12-s4',
    readingTime: 10,
    intro: 'Next.js App Router blends server and client rendering in one file tree where folders become URLs. This section separates server from client components and maps static, incremental, and dynamic rendering. You will fetch with caching intent and stream slow sections without blocking the page.',
    objectives: [
      'Route with the app directory including layouts and loading states',
      'Separate server components from client components correctly',
      'Choose SSG, ISR, and SSR per page freshness needs',
      'Fetch with cache controls and stream with Suspense'
    ],
    concepts: [
      {
        term: 'App Router file routing',
        kind: 'notation',
        statement: 'Folders under `app` become **URL segments** with `page` files for screens and `layout` files for **shared shells**. Special files like `loading` and `error` render **per-branch states** automatically during waits and failures. Colocated `route` files expose **API endpoints** beside the pages that call them.',
        detail: 'Name files exactly: page, layout, loading, error, and route carry framework meaning. Nest folders to nest URLs and layouts.'
      },
      {
        term: 'Server versus client components',
        kind: 'definition',
        statement: 'Server components render on the **server by default** with direct **data access** and zero client JavaScript, while client components opt in with the **`use client` directive** for interactivity. Server components cannot use **state or effects**, and client boundaries should sit **low in the tree** around interactive leaves. Push data fetching up to servers and events down to clients.',
        detail: 'A page server-fetches then passes props to small client islands for pickers and buttons. Wide client boundaries ship needless JavaScript.'
      },
      {
        term: 'SSG, ISR, and SSR map',
        kind: 'definition',
        statement: 'Static **SSG pages** built with `generateStaticParams` serve once for instant loads, incremental **ISR pages** revalidate on a **timer** for fresh-slow data, and **SSR pages** render per request for **personalized content**. Choose the **cheapest mode** that stays fresh: static first, then revalidated, then dynamic. Dynamic functions like cookies opt pages into **request rendering** automatically.',
        detail: 'Docs and marketing default static, catalogs revalidate by interval, dashboards render per request with auth.'
      },
      {
        term: 'Fetching with cache intent',
        kind: 'method',
        statement: 'Server fetches declare **cache intent** with options like `force-cache` for reuse and `no-store` for **fresh reads**, plus timed `revalidate` for ISR data. Cached fetches **deduplicate** across the tree while tagged entries **revalidate on demand** after writes. Match intent to data: prices revalidate fast, while legal text caches long.',
        detail: 'Default caching favors reuse; mark user-specific reads no-store. Tag collections so one mutation refreshes every reader.'
      },
      {
        term: 'Streaming with Suspense and RSC',
        kind: 'method',
        statement: 'React Server Components stream **slow sections** inside `Suspense` boundaries so fast content **paints first** around loading shells. Each boundary shows its **fallback UI** until its server chunk arrives without **blocking siblings**. Stream below-the-fold reviews and recommendations while headers and heroes render instantly.',
        detail: 'Wrap one slow component per boundary with a skeleton matching final size. Boundaries compose: page, section, and widget levels.'
      }
    ],
    examples: [
      {
        title: 'Author page with static list plus dynamic bio',
        problem: 'Prerender the author catalog statically while rendering the signed-in greeting per request.',
        steps: [
          { label: 'Step 1: Static catalog page', text: 'Generate the list once at build time:\n```tsx\n// app/authors/page.tsx\nasync function AuthorsPage() {\n  const res = await fetch("https://api.example.com/authors", { cache: "force-cache" });\n  const authors: { id: string }[] = await res.json();\n  return <ul>{authors.map(function (a) { return <li key={a.id}>{a.id}</li>; })}</ul>;\n}\nexport default AuthorsPage;\n```' },
          { label: 'Step 2: Dynamic greeting island', text: 'Opt the personalized leaf into request rendering:\n```tsx\n// app/authors/greeting.tsx\nimport { cookies } from "next/headers";\nasync function Greeting() {\n  const jar = await cookies();\n  const name = jar.get("name")?.value || "guest";\n  return <p>Hello {name}</p>;\n}\nexport default Greeting;\n```' },
          { label: 'Step 3: Stream the slow part', text: 'Wrap recommendations so the list paints first:\n```tsx\nimport { Suspense } from "react";\n// <Suspense fallback={<p>Loading picks</p>}><SlowPicks /></Suspense>\n```' }
        ],
        result: 'Catalog serves instantly from cache, greeting reflects the live viewer, and slow picks stream without blocking.'
      },
      {
        title: 'ISR product page with on-demand refresh',
        problem: 'Revalidate a price page every minute and immediately after an admin edit.',
        steps: [
          { label: 'Step 1: Fetch with revalidate', text: 'Declare the freshness contract at the fetch:\n```tsx\n// app/products/[id]/page.tsx\nasync function ProductPage(props: { params: Promise<{ id: string }> }) {\n  const { id } = await props.params;\n  const res = await fetch("https://api.example.com/products/" + id, { next: { revalidate: 60 } });\n  const product = await res.json();\n  return <h1>{product.name}</h1>;\n}\nexport default ProductPage;\n```' },
          { label: 'Step 2: Revalidate on write', text: 'Refresh the tag from the admin action:\n```tsx\n// app/actions.ts\n// revalidateTag("products") after saving the edit\n```' },
          { label: 'Step 3: Choose the mode deliberately', text: 'Document why this page is ISR and not fully static or per-request:\n```tsx\n// prices change minutely and edits must show now: ISR 60 plus tag refresh\n```' }
        ],
        result: 'Shoppers see minute-fresh prices from cache and admin edits appear on demand without a rebuild.'
      }
    ],
    keyTakeaways: [
      'Folders become URLs with page, layout, loading, error, and route files.',
      'Server components fetch by default; client islands opt in low for interactivity.',
      'Choose static first, then timed revalidation, then per-request rendering.',
      'Declare cache intent per fetch and revalidate tags after writes.',
      'Stream slow sections in Suspense so fast content paints first.'
    ],
    quiz: [
      {
        q: 'Where should a use client boundary sit?',
        options: ['At the root layout always', 'Low around interactive leaves, with fetching above in servers', 'Nowhere', 'On every file'],
        answer: 1,
        explanation: 'Low boundaries minimize client JavaScript while servers handle data directly.'
      },
      {
        q: 'A catalog changes minutely plus admin edits must show now. What fits?',
        options: ['Fully static with no refresh', 'ISR with a sixty-second window plus on-demand tag revalidation', 'Per-millisecond SSR for all pages', 'No caching ever'],
        answer: 1,
        explanation: 'Timed revalidation bounds staleness while tags refresh immediately after writes.'
      },
      {
        q: 'What does a loading dot tsx file do in a branch?',
        options: ['Nothing', 'Renders fallback UI automatically while that branch loads', 'Deletes the page', 'Runs the API'],
        answer: 1,
        explanation: 'Route-level loading states stream per branch without manual spinner wiring.'
      },
      {
        q: 'Why wrap slow recommendations in Suspense?',
        options: ['To slow the page', 'To paint fast content first and stream slow chunks as they arrive', 'To disable caching', 'To fetch twice'],
        answer: 1,
        explanation: 'Boundaries isolate waits so one slow section never blocks siblings.'
      },
      // Placement-pattern: server versus client component split (original)
      {
        q: "A Next.js page reads a database and renders rows, with a small interactive filter button. Where should each piece live?",
        options: ["Everything in a client component, including the database password", "Fetch the database directly from the browser", "Keep data access in an async server component and mark only the filter button component with `\"use client\"`, so secrets never ship and interactivity stays local", "Duplicate the query in both halves for redundancy"],
        answer: 2,
        explanation: "Step 1: The data given is a page mixing secret-bearing data access with one interactive island. Step 2: The governing rules are the component split: server components run on the server with direct database access and no secret shipping, while the client boundary is drawn only around code needing browser interactivity, with serializable props crossing it. Step 3: Tracing the design, rows render on the server straight from the query, the button hydrates on the client, and the password never enters the shipped bundle. Step 4: The distractors fail because client bundles are fully readable, browsers must never hold database secrets, and duplication doubles cost without adding safety. Step 5: Therefore server data plus a minimal client island is the correct split."
      },
      // Placement-pattern: fetch caching and route rendering (original)
      {
        q: "A product page uses `fetch(url)` with default caching, while an account page uses `fetch(url, { cache: 'no-store' })`. What follows?",
        options: ["Both pages render identically and cache identically", "The product page can be statically rendered and reused, while the account page renders dynamically per request", "The account page becomes static and the product page becomes dynamic", "Caching flags have no effect on how routes render"],
        answer: 1,
        explanation: "Step 1: The data given is two routes differing only in their fetch caching flag. Step 2: The governing rule is the rendering contract: cacheable data lets a route prerender statically and be reused, while `no-store` opts the route into dynamic per-request rendering. Step 3: Tracing each route, the product fetch result is stored and replayed across visits, whereas the account fetch runs fresh for every request with its personal data. Step 4: The distractors fail because the flags deliberately change rendering, the mapping runs cacheable to static rather than reversed, and the flag is exactly the signal the router reads. Step 5: Therefore the product route goes static while the account route stays dynamic."
      }
    ]
  },
  // ---------------------------------------------------------------- 12.5
  {
    sectionId: 'web-ch12-s5',
    readingTime: 8,
    intro: 'Styling at scale is a system, not a pile of classes: tokens name decisions once and components consume them everywhere. This section combines Tailwind utilities, CSS modules, component libraries, and design tokens. You will run a Figma-to-code handoff where names match on both sides.',
    objectives: [
      'Style with Tailwind utilities including responsive and dark variants',
      'Scope with CSS modules and choose libraries deliberately',
      'Define tokens for color, type, and spacing as variables',
      'Run a matching Figma-to-code handoff'
    ],
    concepts: [
      {
        term: 'Tailwind utility workflow',
        kind: 'method',
        statement: 'Tailwind composes **utility classes** like `flex` and `p-4` directly in markup with **responsive prefixes** such as `md` for breakpoints. Dark variants like `dark` flip **token-driven colors** under a class strategy on the root. Extract repeating sets into **component classes** or React components before utilities sprawl.',
        detail: 'Utilities speed iteration; components lock consistency. Review long class strings as a signal to extract.'
      },
      {
        term: 'CSS modules scoping',
        kind: 'definition',
        statement: 'A **CSS module** file like `Card.module.css` scopes every class to its **importing component** with generated names, ending **global collisions**. Compose modules with **variables and utilities** rather than fighting specificity wars. Modules suit **bespoke sections** where utilities alone read noisily.',
        detail: 'Import styles as an object and apply with explicit keys. Keep module files beside their component.'
      },
      {
        term: 'Component libraries',
        kind: 'definition',
        statement: 'Libraries like **Radix primitives** used as `Dialog.Root` plus **shadcn** styled copies give accessible **behavior plus markup** your team owns. Headless parts own **keyboard and focus** logic while your classes own the look. Adopt primitives for **dialogs, menus, and popovers** where accessibility is hardest.',
        detail: 'Copy styled components into the repo so upgrades stay deliberate. Theme them through tokens, not overrides.'
      },
      {
        term: 'Design tokens spine',
        kind: 'notation',
        statement: 'Tokens are **named decisions** for color, type, spacing, and radius stored as **CSS variables** like `--brand` and `--space`. Themes override **token values** under attributes such as `data-theme` while components reference **token names** only. One rename propagates from **Figma variables** to every screen.',
        detail: 'Define primitive palettes then semantic aliases like surface and text. Components never hardcode hex values.'
      },
      {
        term: 'Figma handoff discipline',
        kind: 'insight',
        statement: 'Healthy handoff matches **token names** like `--brand` between Figma variables and code variables with one **naming spine** across both. Specs ship **spacing and type** as tokens, components map to **code counterparts**, and drift gets caught in **review checklists**. Designers and engineers share vocabulary instead of translating pixels each time.',
        detail: 'Export tokens to code or mirror them manually on a schedule. Reject mock values that invent new colors.'
      }
    ],
    examples: [
      {
        title: 'Themed button from tokens plus utilities',
        problem: 'Build one button that follows light and dark themes through tokens.',
        steps: [
          { label: 'Step 1: Define tokens once', text: 'Name decisions at the root with a dark override:\n```js\n// tokens.css\n// :root { --brand: #2563eb; --on-brand: white; }\n// [data-theme="dark"] { --brand: #60a5fa; --on-brand: #08122b; }\n```' },
          { label: 'Step 2: Consume in a component', text: 'Reference tokens, never raw values:\n```tsx\nfunction BrandButton(props: { label: string }) {\n  return <button className="rounded px-4 py-2" style={{ background: "var(--brand)", color: "var(--on-brand)" }}>{props.label}</button>;\n}\n```' },
          { label: 'Step 3: Flip with one attribute', text: 'Toggle the theme from anywhere:\n```js\ndocument.documentElement.dataset.theme = "dark";\n```\nEvery token consumer updates without prop changes.' }
        ],
        result: 'One attribute repaints every themed control consistently across light and dark modes.'
      },
      {
        title: 'Accessible dialog from primitives',
        problem: 'Ship a settings dialog with focus trapping and escape handling without hand-rolling.',
        steps: [
          { label: 'Step 1: Compose the primitive', text: 'Let the library own behavior while you own style:\n```tsx\nimport * as Dialog from "@radix-ui/react-dialog";\nfunction Settings() {\n  return (\n    <Dialog.Root>\n      <Dialog.Trigger>Settings</Dialog.Trigger>\n      <Dialog.Content><Dialog.Title>Settings</Dialog.Title></Dialog.Content>\n    </Dialog.Root>\n  );\n}\n```' },
          { label: 'Step 2: Theme through tokens', text: 'Style content with token-backed classes:\n```tsx\n// <Dialog.Content className="surface-card"><Dialog.Title>Settings</Dialog.Title></Dialog.Content>\n```' },
          { label: 'Step 3: Verify keyboard flows', text: 'Tab into the trigger, open with Enter, trap focus inside, and close with Escape. Test with a screen reader announcing title and described content.' }
        ],
        result: 'Dialog behavior passes accessibility checks while visuals match the token-driven system.'
      }
    ],
    keyTakeaways: [
      'Compose utilities with responsive and dark variants, then extract components.',
      'Scope bespoke styles with CSS modules colocated per component.',
      'Adopt accessible primitives for dialogs, menus, and popovers.',
      'Store color, type, and spacing as CSS variable tokens with theme overrides.',
      'Match Figma variable names to code tokens on one naming spine.'
    ],
    quiz: [
      {
        q: 'How should dark mode usually switch in a token system?',
        options: ['By rewriting every component', 'By flipping one root attribute so token values swap', 'By loading a second app', 'Dark mode is impossible'],
        answer: 1,
        explanation: 'Components reference token names; themes redefine the values behind those names.'
      },
      {
        q: 'Why prefer Radix-style primitives for a dialog?',
        options: ['They look better by default', 'They own focus, keyboard, and semantics while you own styling', 'They remove all code', 'They avoid tokens'],
        answer: 1,
        explanation: 'Hard accessibility behavior comes built in and themed through your own classes.'
      },
      {
        q: 'What signals it is time to extract a component from utilities?',
        options: ['One use of flex', 'The same long class string repeating across screens', 'Any color', 'Never'],
        answer: 1,
        explanation: 'Repetition marks a pattern that deserves one named home for consistency.'
      },
      {
        q: 'What belongs in tokens versus components?',
        options: ['Everything in components', 'Raw decisions like palette and spacing in tokens; usage in components', 'Tokens hold markup', 'No distinction'],
        answer: 1,
        explanation: 'Tokens name decisions once so every component consumes the same values.'
      }
    ]
  }
]
