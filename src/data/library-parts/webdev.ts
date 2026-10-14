// ============================================================================
// The Complete Web Development Library — chapter/section metadata
// (bookId 'webdev-complete'). Covers the full 2026 full-stack path with no
// gaps: how the web works, HTML5, CSS3, JS-for-web, TypeScript, React 19 /
// Next.js 15, Node/Express, REST/GraphQL/Realtime, PostgreSQL, Mongo/Prisma/
// Redis, auth & security, testing, performance/a11y/SEO, DevOps & capstone.
// Lab mapping: every chapter → 'js-playground' EXCEPT ch9 → 'event-loop-lab'.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../library'

export const WEBDEV_CHAPTERS: ChapterMeta[] = [
  { id: 'web-ch1', bookId: 'webdev-complete', number: 1, title: 'How the Web Works & Developer Setup', shortTitle: 'Web Foundations', description: 'Internet, DNS, HTTP/HTTPS, URLs, browsers and rendering, DevTools, editors, terminal, npm, Git and GitHub — plus your first deployed static page.', icon: 'globe', pages: 'MDN 1 · Roadmap 0–4w', interactiveKey: 'js-playground' },
  { id: 'web-ch2', bookId: 'webdev-complete', number: 2, title: 'HTML5: Document Structure & Semantics', shortTitle: 'HTML Semantics', description: 'Doctype, head, meta, semantic landmarks, text, lists, links, images, tables — the content layer every accessible, SEO-friendly page stands on.', icon: 'code', pages: 'MDN 2', interactiveKey: 'js-playground' },
  { id: 'web-ch3', bookId: 'webdev-complete', number: 3, title: 'HTML5: Forms, Media & the DOM', shortTitle: 'Forms & Media', description: 'Forms and validation, audio/video/embeds, SVG and canvas, the DOM tree, debugging HTML, and HTML-side accessibility.', icon: 'list', pages: 'MDN 2', interactiveKey: 'js-playground' },
  { id: 'web-ch4', bookId: 'webdev-complete', number: 4, title: 'CSS Fundamentals: Selectors, Cascade & Box Model', shortTitle: 'CSS Fundamentals', description: 'Syntax, selectors and combinators, cascade/specificity/inheritance, box model, values/units, backgrounds, borders and debugging CSS.', icon: 'type', pages: 'MDN 3', interactiveKey: 'js-playground' },
  { id: 'web-ch5', bookId: 'webdev-complete', number: 5, title: 'CSS Text, Color & Theming', shortTitle: 'Text & Theming', description: 'Fonts and text styling, list/link styling, custom properties, web fonts, and styling form controls — the theming layer.', icon: 'pen-tool', pages: 'MDN 4', interactiveKey: 'js-playground' },
  { id: 'web-ch6', bookId: 'webdev-complete', number: 6, title: 'CSS Layout & Responsive Design', shortTitle: 'Layout & Responsive', description: 'Flow, float, positioning, Flexbox and Grid in full, responsive and mobile-first design, media and container queries, geometry and scrolling.', icon: 'layout-grid', pages: 'MDN 5', interactiveKey: 'js-playground' },
  { id: 'web-ch7', bookId: 'webdev-complete', number: 7, title: 'CSS Motion & Tooling: Animations, Sass, Tailwind', shortTitle: 'Motion & Tooling', description: 'Transitions, transforms, animations, Sass preprocessing, and utility-first styling with Tailwind plus Bootstrap literacy.', icon: 'wind', pages: 'MDN Ext 1 · Tooling', interactiveKey: 'js-playground' },
  { id: 'web-ch8', bookId: 'webdev-complete', number: 8, title: 'JavaScript for the Web: Language, DOM & Events', shortTitle: 'JS for the Web', description: 'Web-focused JS: variables to closures, ES6+, selecting/traversing/modifying the DOM, events and delegation, errors and debugging.', icon: 'tag', pages: 'MDN 6', interactiveKey: 'js-playground' },
  { id: 'web-ch9', bookId: 'webdev-complete', number: 9, title: 'Async JavaScript, Network & Browser Storage', shortTitle: 'Async & Storage', description: 'Callbacks to async/await, fetch and JSON, localStorage/sessionStorage/IndexedDB/cookies, workers, modules, npm and bundlers.', icon: 'clock', pages: 'MDN 6 · Ext 3', interactiveKey: 'event-loop-lab' },
  { id: 'web-ch10', bookId: 'webdev-complete', number: 10, title: 'TypeScript for Production Web Apps', shortTitle: 'TypeScript', description: 'Types and interfaces, functions and generics, classes and narrowing, tsconfig tooling, and TypeScript across React and Node.', icon: 'cpu', pages: 'TS Docs', interactiveKey: 'js-playground' },
  { id: 'web-ch11', bookId: 'webdev-complete', number: 11, title: 'React Fundamentals: Components, State & Hooks', shortTitle: 'React Basics', description: 'JSX, components and props, state with hooks, lists/keys, forms, context and custom hooks — the React mental model.', icon: 'component', pages: 'React Docs', interactiveKey: 'js-playground' },
  { id: 'web-ch12', bookId: 'webdev-complete', number: 12, title: 'Advanced React & Next.js: Routing, Data & Rendering', shortTitle: 'React Pro & Next', description: 'React Router, TanStack Query server state, Zustand/Redux, Next.js App Router, server components, SSR/SSG/ISR and design systems.', icon: 'layers', pages: 'React + Next Docs', interactiveKey: 'js-playground' },
  { id: 'web-ch13', bookId: 'webdev-complete', number: 13, title: 'Node.js & Express: Servers, Routing & Middleware', shortTitle: 'Node & Express', description: 'Runtime and npm, Express routing and middleware, REST conventions, Zod validation, errors, CORS, env config and logging.', icon: 'hexagon', pages: 'Node + Express Docs', interactiveKey: 'js-playground' },
  { id: 'web-ch14', bookId: 'webdev-complete', number: 14, title: 'APIs in Practice: REST, GraphQL, Realtime & Jobs', shortTitle: 'APIs & Realtime', description: 'CRUD with pagination and rate limits, GraphQL basics, WebSockets/SSE, uploads, email/payments, and background jobs and queues.', icon: 'route', pages: 'REST + GraphQL Docs', interactiveKey: 'js-playground' },
  { id: 'web-ch15', bookId: 'webdev-complete', number: 15, title: 'SQL & PostgreSQL: Modeling to Production', shortTitle: 'SQL & Postgres', description: 'SELECT to JOINs and aggregates, keys/constraints/normalization, indexes and transactions, JSONB/FTS/CTEs, migrations and backups.', icon: 'database', pages: 'Postgres Docs', interactiveKey: 'js-playground' },
  { id: 'web-ch16', bookId: 'webdev-complete', number: 16, title: 'Documents & Speed: MongoDB, Prisma, Drizzle & Redis', shortTitle: 'NoSQL & ORM', description: 'Mongo CRUD with Mongoose, Prisma schema and client, Drizzle SQL-first access, Redis caching/sessions, and search basics.', icon: 'boxes', pages: 'Mongo + Prisma Docs', interactiveKey: 'js-playground' },
  { id: 'web-ch17', bookId: 'webdev-complete', number: 17, title: 'Authentication, Authorization & Web Security', shortTitle: 'Auth & Security', description: 'Sessions, JWT and OAuth, password hashing and RBAC, XSS/CSRF/SQL injection, secrets/audit, and validation/error contracts.', icon: 'lock', pages: 'Auth.js + OWASP', interactiveKey: 'js-playground' },
  { id: 'web-ch18', bookId: 'webdev-complete', number: 18, title: 'Testing & Quality: Unit, Integration & E2E', shortTitle: 'Testing', description: 'Unit tests with Jest/Vitest, React Testing Library, API integration tests, Playwright E2E, lint/format, review and CI gates.', icon: 'siren', pages: 'Jest + Playwright Docs', interactiveKey: 'js-playground' },
  { id: 'web-ch19', bookId: 'webdev-complete', number: 19, title: 'Performance, Accessibility, SEO & Web APIs', shortTitle: 'Perf · A11y · SEO', description: 'Core Web Vitals and Lighthouse, budgets/code-splitting/images/CDN, ARIA and keyboard testing, SEO meta/OG, media/graphics/storage APIs and privacy.', icon: 'gauge', pages: 'web.dev + MDN', interactiveKey: 'js-playground' },
  { id: 'web-ch20', bookId: 'webdev-complete', number: 20, title: 'Shipping It: Docker, CI/CD, Cloud & Capstone', shortTitle: 'DevOps & Capstone', description: 'Docker, GitHub Actions, Vercel/Railway/Neon deploys with DNS/SSL, observability and rollback — then a SaaS capstone with AI features and system design.', icon: 'rocket', pages: 'Docker + GH Actions', interactiveKey: 'js-playground' },
  // ---- Full-Stack Web Development (Rheinwerk Guide) — chapters 21–26 ----
  { id: 'web-ch21', bookId: 'webdev-complete', number: 21, title: 'HTTP In Depth', shortTitle: 'HTTP Deep Dive', description: 'Requests, responses, status codes, MIME types, cookies and command-line HTTP craftsmanship.', icon: 'globe', pages: 'Guide Ch 5', interactiveKey: 'js-playground' },
  { id: 'web-ch22', bookId: 'webdev-complete', number: 22, title: 'Realtime Web: Polling, SSE & WebSockets', shortTitle: 'Realtime Web', description: 'Live-update strategies from polling to sockets, with selection rules by latency and scale.', icon: 'activity', pages: 'Guide Ch 5', interactiveKey: 'js-playground' },
  { id: 'web-ch23', bookId: 'webdev-complete', number: 23, title: 'Data & Media Formats', shortTitle: 'Formats', description: 'CSV, XML and JSON; JPG/PNG/GIF/SVG/WebP image choices; video and audio formats.', icon: 'package', pages: 'Guide Ch 6', interactiveKey: 'js-playground' },
  { id: 'web-ch24', bookId: 'webdev-complete', number: 24, title: 'Web Architectures', shortTitle: 'Architectures', description: 'Layered, monolith, services, microfrontends and MV* patterns with decision records.', icon: 'layers', pages: 'Guide Ch 12', interactiveKey: 'js-playground' },
  { id: 'web-ch25', bookId: 'webdev-complete', number: 25, title: 'Mobile Web & React Native', shortTitle: 'Mobile', description: 'Native versus web versus hybrid, responsive mastery, React Native principles and publishing.', icon: 'smartphone', pages: 'Guide Ch 11', interactiveKey: 'js-playground' },
  { id: 'web-ch26', bookId: 'webdev-complete', number: 26, title: 'Sass Mastery', shortTitle: 'Sass', description: 'Variables to functions to mixins to at-scale architecture and modern-CSS migration.', icon: 'hammer', pages: 'Guide Ch 9', interactiveKey: 'js-playground' },
]

export const WEBDEV_SECTIONS: SectionMeta[] = [
  // ---- Chapter 1: How the Web Works & Developer Setup ----
  { id: 'web-ch1-s1', chapterId: 'web-ch1', number: 1.1, title: 'Internet, DNS, HTTP & URLs', description: 'Clients and servers, what the internet is, DNS resolution, HTTP/HTTPS requests and responses, and the anatomy of a URL.' },
  { id: 'web-ch1-s2', chapterId: 'web-ch1', number: 1.2, title: 'Browsers, Rendering & DevTools', description: 'How browsers load and render pages step by step, the critical rendering path, and inspecting everything with DevTools.' },
  { id: 'web-ch1-s3', chapterId: 'web-ch1', number: 1.3, title: 'Editors, Terminal & npm', description: 'VS Code setup, command-line basics, Node/npm/npx, package.json scripts, and the files of a web project.' },
  { id: 'web-ch1-s4', chapterId: 'web-ch1', number: 1.4, title: 'Git & GitHub Workflows', description: 'Repositories, commits, branches, merging, pull requests, and the GitHub Flow teams actually use.' },
  { id: 'web-ch1-s5', chapterId: 'web-ch1', number: 1.5, title: 'Static vs Dynamic Sites & First Deploy', description: 'Roles of frontend/backend, static versus dynamic rendering, hosting, and shipping your first page.' },
  // ---- Chapter 2: HTML Semantics ----
  { id: 'web-ch2-s1', chapterId: 'web-ch2', number: 2.1, title: 'HTML Syntax, Doctype & Document Structure', description: 'Tags, attributes, nesting, doctype, head versus body, and meta tags that control rendering and sharing.' },
  { id: 'web-ch2-s2', chapterId: 'web-ch2', number: 2.2, title: 'Text, Lists & Links', description: 'Headings hierarchy, paragraphs, inline semantics, ordered/unordered/definition lists, and links done right.' },
  { id: 'web-ch2-s3', chapterId: 'web-ch2', number: 2.3, title: 'Images & Responsive Pictures', description: 'img, alt text, figure, srcset/sizes and modern formats so images stay fast on every screen.' },
  { id: 'web-ch2-s4', chapterId: 'web-ch2', number: 2.4, title: 'Tables for Tabular Data', description: 'table, thead/tbody/tfoot, th scope, captions, and when a table is (and is not) the right tool.' },
  { id: 'web-ch2-s5', chapterId: 'web-ch2', number: 2.5, title: 'Semantic Landmarks & SEO Basics', description: 'header/nav/main/article/section/aside/footer, landmark roles, heading order, and how semantics feeds SEO.' },
  // ---- Chapter 3: Forms, Media & DOM ----
  { id: 'web-ch3-s1', chapterId: 'web-ch3', number: 3.1, title: 'Form Elements & Input Types', description: 'form, label, input types, select, textarea, buttons, fieldset/legend, and naming data for submission.' },
  { id: 'web-ch3-s2', chapterId: 'web-ch3', number: 3.2, title: 'Built-in Validation & Custom Errors', description: 'required, pattern, min/max, inputmode, constraint validation API, and friendly custom messages.' },
  { id: 'web-ch3-s3', chapterId: 'web-ch3', number: 3.3, title: 'Audio, Video & Embeds', description: 'audio/video with tracks and fallbacks, iframes, and performant third-party embeds.' },
  { id: 'web-ch3-s4', chapterId: 'web-ch3', number: 3.4, title: 'SVG, Canvas & the DOM Tree', description: 'Inline SVG versus canvas pixels, the DOM as a live tree, nodes versus elements, and traversing it.' },
  { id: 'web-ch3-s5', chapterId: 'web-ch3', number: 3.5, title: 'Debugging HTML & HTML Accessibility', description: 'Validator workflows, common nesting mistakes, alt/labels/keyboard order, and skip links.' },
  // ---- Chapter 4: CSS Fundamentals ----
  { id: 'web-ch4-s1', chapterId: 'web-ch4', number: 4.1, title: 'Syntax, Selectors & Combinators', description: 'Rulesets, class/ID/attribute selectors, pseudo-classes/elements, combinators, and selector intent.' },
  { id: 'web-ch4-s2', chapterId: 'web-ch4', number: 4.2, title: 'Cascade, Specificity & Inheritance', description: 'Which rule wins: origin, specificity scoring, order, !important, and what inherits by default.' },
  { id: 'web-ch4-s3', chapterId: 'web-ch4', number: 4.3, title: 'Box Model, Sizing & Overflow', description: 'Content/padding/border/margin, box-sizing, width/height/min/max, and handling overflow.' },
  { id: 'web-ch4-s4', chapterId: 'web-ch4', number: 4.4, title: 'Values, Units & Color', description: 'Lengths, percentages, em/rem/vw/vh, color formats, opacity, and choosing units that scale.' },
  { id: 'web-ch4-s5', chapterId: 'web-ch4', number: 4.5, title: 'Backgrounds, Borders & Debugging CSS', description: 'Background layers, borders and radius, shadows, outlines, and DevTools CSS debugging.' },
  // ---- Chapter 5: Text & Theming ----
  { id: 'web-ch5-s1', chapterId: 'web-ch5', number: 5.1, title: 'Font & Text Styling', description: 'font families, sizes, weights, line/letter spacing, alignment, decoration, and readable type.' },
  { id: 'web-ch5-s2', chapterId: 'web-ch5', number: 5.2, title: 'Styling Lists & Links', description: 'List markers and counters, link states LVHA, underlines, and navigation patterns.' },
  { id: 'web-ch5-s3', chapterId: 'web-ch5', number: 5.3, title: 'Custom Properties (CSS Variables)', description: 'Defining --tokens, scoping, fallbacks, theming with dark mode, and runtime updates from JS.' },
  { id: 'web-ch5-s4', chapterId: 'web-ch5', number: 5.4, title: 'Web Fonts in Practice', description: '@font-face, display strategies, preloading, variable fonts, and avoiding layout shift.' },
  { id: 'web-ch5-s5', chapterId: 'web-ch5', number: 5.5, title: 'Styling Form Controls', description: 'Inheriting fonts into controls, focus-visible rings, placeholders, and consistent buttons/inputs.' },
  // ---- Chapter 6: Layout & Responsive ----
  { id: 'web-ch6-s1', chapterId: 'web-ch6', number: 6.1, title: 'Flow, Float & Positioning', description: 'Normal flow, display types, floats and clearing, static/relative/absolute/fixed/sticky positioning.' },
  { id: 'web-ch6-s2', chapterId: 'web-ch6', number: 6.2, title: 'Flexbox in Full', description: 'Container versus item properties, main/cross axes, wrapping, alignment, ordering, and real patterns.' },
  { id: 'web-ch6-s3', chapterId: 'web-ch6', number: 6.3, title: 'Grid in Full', description: 'Tracks, lines, areas, explicit/implicit grids, placement, and choosing Grid versus Flexbox.' },
  { id: 'web-ch6-s4', chapterId: 'web-ch6', number: 6.4, title: 'Responsive & Mobile-First Design', description: 'Fluid layouts, media queries, breakpoints, container queries, and responsive images.' },
  { id: 'web-ch6-s5', chapterId: 'web-ch6', number: 6.5, title: 'Geometry, Viewport & Scrolling', description: 'Viewport meta, getBoundingClientRect, coordinates, sticky/scroll behaviors, and overflow patterns.' },
  // ---- Chapter 7: Motion & Tooling ----
  { id: 'web-ch7-s1', chapterId: 'web-ch7', number: 7.1, title: 'Transitions', description: 'Which properties animate cheaply, duration/easing/delay, and UI feedback patterns.' },
  { id: 'web-ch7-s2', chapterId: 'web-ch7', number: 7.2, title: 'Transforms', description: 'translate/scale/rotate/skew, transform-origin, 2D versus 3D, and compositing performance.' },
  { id: 'web-ch7-s3', chapterId: 'web-ch7', number: 7.3, title: 'Keyframe Animations', description: '@keyframes, fill modes, iteration, direction, timelines, and prefers-reduced-motion.' },
  { id: 'web-ch7-s4', chapterId: 'web-ch7', number: 7.4, title: 'Sass & Preprocessing', description: 'Variables, nesting, partials, mixins, functions, and when Sass still earns its place.' },
  { id: 'web-ch7-s5', chapterId: 'web-ch7', number: 7.5, title: 'Tailwind & Bootstrap in Practice', description: 'Utility-first workflow, responsive/dark variants, component extraction, and Bootstrap literacy.' },
  // ---- Chapter 8: JS for the Web ----
  { id: 'web-ch8-s1', chapterId: 'web-ch8', number: 8.1, title: 'Variables, Types, Functions & Scope', description: 'let/const, primitives versus objects, functions, scope and closures as used on real pages.' },
  { id: 'web-ch8-s2', chapterId: 'web-ch8', number: 8.2, title: 'Arrays, Objects & Modern Syntax', description: 'Array/object methods, destructuring, spread, template literals, optional chaining and modules.' },
  { id: 'web-ch8-s3', chapterId: 'web-ch8', number: 8.3, title: 'Selecting & Changing the DOM', description: 'querySelector, traversing, textContent versus innerHTML, classList, styles, and building nodes.' },
  { id: 'web-ch8-s4', chapterId: 'web-ch8', number: 8.4, title: 'Events & Delegation', description: 'Listeners, event objects, propagation and bubbling, delegation with closest(), and form events.' },
  { id: 'web-ch8-s5', chapterId: 'web-ch8', number: 8.5, title: 'Errors & Debugging in DevTools', description: 'try/catch, error types, breakpoints, console, network tab, and systematic debugging.' },
  // ---- Chapter 9: Async, Network & Storage ----
  { id: 'web-ch9-s1', chapterId: 'web-ch9', number: 9.1, title: 'Callbacks, Promises & async/await', description: 'The async ladder, sequencing versus parallelism, Promise.all, and event-loop ordering.' },
  { id: 'web-ch9-s2', chapterId: 'web-ch9', number: 9.2, title: 'fetch, JSON & Consuming REST', description: 'GET/POST with fetch, headers, ok checks, timeouts with AbortController, and JSON round-trips.' },
  { id: 'web-ch9-s3', chapterId: 'web-ch9', number: 9.3, title: 'Browser Storage: Cookies to IndexedDB', description: 'localStorage/sessionStorage limits, cookies, and IndexedDB for real offline data.' },
  { id: 'web-ch9-s4', chapterId: 'web-ch9', number: 9.4, title: 'Workers & Messaging', description: 'Dedicated/shared workers, postMessage with transferables, and keeping the main thread free.' },
  { id: 'web-ch9-s5', chapterId: 'web-ch9', number: 9.5, title: 'Modules, npm & Bundlers', description: 'ES modules, package.json, Vite builds, code-splitting, and importing for the browser.' },
  // ---- Chapter 10: TypeScript ----
  { id: 'web-ch10-s1', chapterId: 'web-ch10', number: 10.1, title: 'Types, Interfaces & Inference', description: 'Primitives, unions, literal types, interfaces versus type aliases, and letting inference work.' },
  { id: 'web-ch10-s2', chapterId: 'web-ch10', number: 10.2, title: 'Functions & Generics', description: 'Parameter/return typing, overloads, generic functions and constraints, and utility types.' },
  { id: 'web-ch10-s3', chapterId: 'web-ch10', number: 10.3, title: 'Classes, Narrowing & Modeling State', description: 'Class types, discriminated unions, narrowing with guards, and modeling load-result states.' },
  { id: 'web-ch10-s4', chapterId: 'web-ch10', number: 10.4, title: 'tsconfig, Lint & Tooling', description: 'strict mode, module resolution, ESLint/Prettier for TS, and fixing errors systematically.' },
  { id: 'web-ch10-s5', chapterId: 'web-ch10', number: 10.5, title: 'TypeScript in React & Node', description: 'Typing props/hooks, API contracts shared across the stack, and gradual adoption.' },
  // ---- Chapter 11: React Fundamentals ----
  { id: 'web-ch11-s1', chapterId: 'web-ch11', number: 11.1, title: 'JSX, Components & Props', description: 'JSX rules, function components, props flow, children, and composition over inheritance.' },
  { id: 'web-ch11-s2', chapterId: 'web-ch11', number: 11.2, title: 'State & Effects', description: 'useState, controlled inputs, useEffect lifecycles, cleanup, and the rules of hooks.' },
  { id: 'web-ch11-s3', chapterId: 'web-ch11', number: 11.3, title: 'Lists, Keys, Events & Forms', description: 'Rendering lists with stable keys, synthetic events, controlled forms, and validation UX.' },
  { id: 'web-ch11-s4', chapterId: 'web-ch11', number: 11.4, title: 'Context & Custom Hooks', description: 'Sharing state without prop drilling, writing reusable hooks, useRef and useMemo patterns.' },
  { id: 'web-ch11-s5', chapterId: 'web-ch11', number: 11.5, title: 'Conditional UI & Component Patterns', description: 'Conditional rendering, lifting state, container/presentational splits, and project structure.' },
  // ---- Chapter 12: Advanced React & Next.js ----
  { id: 'web-ch12-s1', chapterId: 'web-ch12', number: 12.1, title: 'Routing & Navigation', description: 'React Router v7, nested routes, params/search state, and navigation without reloads.' },
  { id: 'web-ch12-s2', chapterId: 'web-ch12', number: 12.2, title: 'Server State with TanStack Query', description: 'Queries, mutations, caching, retries, and separating server state from client state.' },
  { id: 'web-ch12-s3', chapterId: 'web-ch12', number: 12.3, title: 'Client State: Zustand & Redux Literacy', description: 'Zustand stores, when Redux appears in legacy code, and choosing the smallest tool.' },
  { id: 'web-ch12-s4', chapterId: 'web-ch12', number: 12.4, title: 'Next.js App Router & Rendering', description: 'File routing, server versus client components, SSR/SSG/ISR, data fetching and caching.' },
  { id: 'web-ch12-s5', chapterId: 'web-ch12', number: 12.5, title: 'Styling Systems & Design Systems', description: 'Tailwind in React, CSS modules, component libraries, tokens, and Figma handoff.' },
  // ---- Chapter 13: Node & Express ----
  { id: 'web-ch13-s1', chapterId: 'web-ch13', number: 13.1, title: 'Node Runtime, npm & Scripts', description: 'Event loop recap, modules, package.json, argv/env, and the scripts that run a backend.' },
  { id: 'web-ch13-s2', chapterId: 'web-ch13', number: 13.2, title: 'Express Routing & Middleware', description: 'App/router setup, route params, middleware chains, static files, and request/response flow.' },
  { id: 'web-ch13-s3', chapterId: 'web-ch13', number: 13.3, title: 'REST Conventions & Status Codes', description: 'Verbs, resource naming, correct status codes, headers, and consistent response shapes.' },
  { id: 'web-ch13-s4', chapterId: 'web-ch13', number: 13.4, title: 'Validation, Errors & CORS', description: 'Zod schemas, centralized error middleware, CORS policies, and safe error messages.' },
  { id: 'web-ch13-s5', chapterId: 'web-ch13', number: 13.5, title: 'Config, Logging & File Basics', description: 'Env per environment, structured logging, and reading/writing files safely.' },
  // ---- Chapter 14: APIs in Practice ----
  { id: 'web-ch14-s1', chapterId: 'web-ch14', number: 14.1, title: 'CRUD, Pagination & Rate Limits', description: 'Collection/item routes, cursor versus offset paging, filtering/sorting, and throttling APIs.' },
  { id: 'web-ch14-s2', chapterId: 'web-ch14', number: 14.2, title: 'GraphQL Basics', description: 'Schema, queries, mutations, resolvers, and when GraphQL beats REST.' },
  { id: 'web-ch14-s3', chapterId: 'web-ch14', number: 14.3, title: 'WebSockets & Server-Sent Events', description: 'Persistent sockets versus event streams, rooms, reconnects, and choosing correctly.' },
  { id: 'web-ch14-s4', chapterId: 'web-ch14', number: 14.4, title: 'Uploads, Email & Payments', description: 'Multipart uploads with limits, transactional email, and Stripe-style payment intents/webhooks.' },
  { id: 'web-ch14-s5', chapterId: 'web-ch14', number: 14.5, title: 'Background Jobs & Queues', description: 'Deferring slow work, retries/idempotency, schedulers, and Redis-backed queues.' },
  // ---- Chapter 15: SQL & PostgreSQL ----
  { id: 'web-ch15-s1', chapterId: 'web-ch15', number: 15.1, title: 'SELECT, Filtering & Aggregates', description: 'SELECT/WHERE/ORDER/LIMIT, GROUP BY/HAVING, and the aggregate functions behind dashboards.' },
  { id: 'web-ch15-s2', chapterId: 'web-ch15', number: 15.2, title: 'JOINs, Keys & Data Modeling', description: 'Inner/left joins, primary/foreign keys, one-to-many/many-to-many, and normalization.' },
  { id: 'web-ch15-s3', chapterId: 'web-ch15', number: 15.3, title: 'Indexes & Transactions', description: 'B-tree indexes, EXPLAIN plans, ACID, isolation pitfalls, and safe money-move transactions.' },
  { id: 'web-ch15-s4', chapterId: 'web-ch15', number: 15.4, title: 'JSONB, Full-Text Search & CTEs', description: 'Semi-structured JSONB, tsvector search, CTEs and window functions for real features.' },
  { id: 'web-ch15-s5', chapterId: 'web-ch15', number: 15.5, title: 'Migrations, Seeds & Backups', description: 'Versioned migrations, seed data, connection pooling, and backup/restore discipline.' },
  // ---- Chapter 16: NoSQL, ORM & Cache ----
  { id: 'web-ch16-s1', chapterId: 'web-ch16', number: 16.1, title: 'MongoDB & Mongoose', description: 'Documents, CRUD, schemas, validation, indexes, and when documents beat tables.' },
  { id: 'web-ch16-s2', chapterId: 'web-ch16', number: 16.2, title: 'Prisma Schema & Client', description: 'Modeling relations in Prisma, migrations, typed queries, and N+1 avoidance.' },
  { id: 'web-ch16-s3', chapterId: 'web-ch16', number: 16.3, title: 'Drizzle & SQL-First Access', description: 'Drizzle tables, relational queries, transactions, and choosing Prisma versus Drizzle.' },
  { id: 'web-ch16-s4', chapterId: 'web-ch16', number: 16.4, title: 'Redis: Cache & Sessions', description: 'Strings/hashes, TTLs, cache-aside, session stores, and rate-limit counters.' },
  { id: 'web-ch16-s5', chapterId: 'web-ch16', number: 16.5, title: 'Choosing SQL vs NoSQL & Search Basics', description: 'Decision rules, polyglot persistence, and search with Postgres versus dedicated engines.' },
  // ---- Chapter 17: Auth & Security ----
  { id: 'web-ch17-s1', chapterId: 'web-ch17', number: 17.1, title: 'Sessions, JWT & OAuth', description: 'Stateful sessions versus stateless JWT, refresh rotation, and OAuth/OIDC login flows.' },
  { id: 'web-ch17-s2', chapterId: 'web-ch17', number: 17.2, title: 'Passwords, RBAC & Protecting Routes', description: 'bcrypt/argon2 hashing, roles and permissions, middleware guards, and secure cookies.' },
  { id: 'web-ch17-s3', chapterId: 'web-ch17', number: 17.3, title: 'XSS, CSRF & SQL Injection', description: 'The big three web attacks, how each payload works, and the defense that kills it.' },
  { id: 'web-ch17-s4', chapterId: 'web-ch17', number: 17.4, title: 'Secrets, Headers & Dependency Safety', description: 'Env secrets, security headers/CSP, HTTPS everywhere, audits, and least privilege.' },
  { id: 'web-ch17-s5', chapterId: 'web-ch17', number: 17.5, title: 'Input Contracts & Safe Errors', description: 'Validate-then-handle, sanitization, error envelopes, logging PII safely, and audit trails.' },
  // ---- Chapter 18: Testing ----
  { id: 'web-ch18-s1', chapterId: 'web-ch18', number: 18.1, title: 'Unit Tests with Jest & Vitest', description: 'Test structure, matchers, mocks, fixtures, and what deserves a unit test.' },
  { id: 'web-ch18-s2', chapterId: 'web-ch18', number: 18.2, title: 'Testing React with Testing Library', description: 'Querying by role, user events, async UI, and testing behavior not implementation.' },
  { id: 'web-ch18-s3', chapterId: 'web-ch18', number: 18.3, title: 'API & Integration Tests', description: 'Supertest-style route tests, test databases, factories, and contract checks.' },
  { id: 'web-ch18-s4', chapterId: 'web-ch18', number: 18.4, title: 'E2E with Playwright', description: 'Locators, fixtures, auth setup, visual checks, and flake-resistant selectors.' },
  { id: 'web-ch18-s5', chapterId: 'web-ch18', number: 18.5, title: 'Lint, Format, Review & CI Gates', description: 'ESLint/Prettier, code review checklists, coverage that matters, and blocking merges on red.' },
  // ---- Chapter 19: Perf, A11y, SEO ----
  { id: 'web-ch19-s1', chapterId: 'web-ch19', number: 19.1, title: 'Core Web Vitals & Lighthouse', description: 'LCP/INP/CLS budgets, lab versus field data, and reading a Lighthouse report correctly.' },
  { id: 'web-ch19-s2', chapterId: 'web-ch19', number: 19.2, title: 'Loading Fast: Bundles, Images & CDN', description: 'Code-splitting, tree-shaking, image formats, fonts, caching headers, and CDN edges.' },
  { id: 'web-ch19-s3', chapterId: 'web-ch19', number: 19.3, title: 'Accessible Interfaces (ARIA)', description: 'Names/roles/values, keyboard flows, focus management, live regions, and testing with AT.' },
  { id: 'web-ch19-s4', chapterId: 'web-ch19', number: 19.4, title: 'SEO: Meta, Structured Data & Sitemaps', description: 'Titles/descriptions, Open Graph, canonical, robots/sitemaps, and measuring search health.' },
  { id: 'web-ch19-s5', chapterId: 'web-ch19', number: 19.5, title: 'Web APIs: Media, Graphics & Privacy', description: 'Canvas/SVG, audio/video, geolocation, notifications, permissions, and privacy-respecting defaults.' },
  // ---- Chapter 20: DevOps & Capstone ----
  { id: 'web-ch20-s1', chapterId: 'web-ch20', number: 20.1, title: 'Docker for Web Apps', description: 'Images versus containers, Dockerfiles that cache well, compose for app+db+cache.' },
  { id: 'web-ch20-s2', chapterId: 'web-ch20', number: 20.2, title: 'CI/CD with GitHub Actions', description: 'Pipelines that lint/typecheck/test on push, preview deploys, and protected main.' },
  { id: 'web-ch20-s3', chapterId: 'web-ch20', number: 20.3, title: 'Deploying: Vercel, Railway, Neon + DNS/SSL', description: 'Frontend/backend/database hosting, env per environment, domains, DNS and certificates.' },
  { id: 'web-ch20-s4', chapterId: 'web-ch20', number: 20.4, title: 'Observability, Rollback & Runbooks', description: 'Logs/metrics/traces, error tracking, health checks, rollbacks, and incident notes.' },
  { id: 'web-ch20-s5', chapterId: 'web-ch20', number: 20.5, title: 'Capstone: SaaS with AI & System Design', description: 'Scope a SaaS, design auth/data/API/cache/jobs, add one guarded AI feature, and tell the tradeoff story.' },
  // ---- Full-Stack Web Development (Rheinwerk Guide) — chapters 21–26 ----
  { id: 'web-ch21-s1', chapterId: 'web-ch21', number: 21.1, title: 'HTTP Requests In Depth', description: 'Request line, headers, methods and MIME types; reading raw requests.' },
  { id: 'web-ch21-s2', chapterId: 'web-ch21', number: 21.2, title: 'HTTP Responses & Status Codes', description: 'Status classes, response headers, caching headers and cookies.' },
  { id: 'web-ch21-s3', chapterId: 'web-ch21', number: 21.3, title: 'Executing HTTP from the Command Line', description: 'curl craftsmanship, inspecting traffic, replaying requests.' },
  { id: 'web-ch21-s4', chapterId: 'web-ch21', number: 21.4, title: 'Cookies, Sessions & State on the Web', description: 'Cookie attributes, session tracking, consent-aware defaults.' },
  { id: 'web-ch22-s1', chapterId: 'web-ch22', number: 22.1, title: 'Polling & Long Polling', description: 'Refresh strategies, latency/battery costs, when polling suffices.' },
  { id: 'web-ch22-s2', chapterId: 'web-ch22', number: 22.2, title: 'Server-Sent Events', description: 'Event streams, reconnection, one-way live feeds.' },
  { id: 'web-ch22-s3', chapterId: 'web-ch22', number: 22.3, title: 'WebSockets', description: 'Handshake, frames, bidirectional messaging patterns.' },
  { id: 'web-ch22-s4', chapterId: 'web-ch22', number: 22.4, title: 'Choosing a Realtime Strategy', description: 'Polling versus SSE versus sockets by latency and scale needs.' },
  { id: 'web-ch23-s1', chapterId: 'web-ch23', number: 23.1, title: 'Data Formats: CSV, XML & JSON', description: 'Delimited, markup and object notations; parsing safely.' },
  { id: 'web-ch23-s2', chapterId: 'web-ch23', number: 23.2, title: 'Image Formats: JPG, PNG, GIF, SVG & WebP', description: 'Photographic versus graphic formats, transparency, animation, vector versus raster.' },
  { id: 'web-ch23-s3', chapterId: 'web-ch23', number: 23.3, title: 'Choosing Image Formats', description: 'Quality/size matrices, responsive images, modern-format fallbacks.' },
  { id: 'web-ch23-s4', chapterId: 'web-ch23', number: 23.4, title: 'Video & Audio Formats', description: 'Containers versus codecs, streaming basics, accessibility tracks.' },
  { id: 'web-ch24-s1', chapterId: 'web-ch24', number: 24.1, title: 'Layered & Client-Server Architectures', description: 'Two-tier and multi-tier designs, separation-of-concerns layering.' },
  { id: 'web-ch24-s2', chapterId: 'web-ch24', number: 24.2, title: 'Monoliths, Services & Microfrontends', description: 'Modular monoliths, service boundaries, messaging, frontend decomposition.' },
  { id: 'web-ch24-s3', chapterId: 'web-ch24', number: 24.3, title: 'MVC, MVP & MVVM', description: 'Model-view separations, presenter/viewmodel mediation, framework mapping.' },
  { id: 'web-ch24-s4', chapterId: 'web-ch24', number: 24.4, title: 'Architecture Decision Records', description: 'Documenting trade-offs, reversibility, fitness functions preview.' },
  { id: 'web-ch25-s1', chapterId: 'web-ch25', number: 25.1, title: 'Native vs Web vs Hybrid Apps', description: 'Capability/reach/cost triangle, app-store versus URL distribution.' },
  { id: 'web-ch25-s2', chapterId: 'web-ch25', number: 25.2, title: 'Responsive Design Mastery', description: 'Viewports, media queries, flexible layouts that survive real devices.' },
  { id: 'web-ch25-s3', chapterId: 'web-ch25', number: 25.3, title: 'React Native Principles', description: 'Learn-once-write-anywhere, native components, bridge intuition.' },
  { id: 'web-ch25-s4', chapterId: 'web-ch25', number: 25.4, title: 'Building & Publishing Mobile Apps', description: 'Project init, device testing, build and store pipelines.' },
  { id: 'web-ch26-s1', chapterId: 'web-ch26', number: 26.1, title: 'Sass: Variables, Nesting & Partials', description: 'Preprocessor workflow, compilation, variables and nesting discipline.' },
  { id: 'web-ch26-s2', chapterId: 'web-ch26', number: 26.2, title: 'Sass Logic: Branches, Loops & Functions', description: 'Conditionals, iteration, custom functions for design tokens.' },
  { id: 'web-ch26-s3', chapterId: 'web-ch26', number: 26.3, title: 'Mixins & Inheritance', description: 'Reusable patterns, extend versus mixin, media-query managers.' },
  { id: 'web-ch26-s4', chapterId: 'web-ch26', number: 26.4, title: 'Sass at Scale', description: 'Architecture (7-1 pattern), build integration, migrating to modern CSS.' },
]
