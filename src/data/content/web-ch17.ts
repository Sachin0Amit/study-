import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 17
// Authentication, Authorization and Web Security (Sections 17.1 – 17.5)
// Master study content.
// ============================================================================

export const webCh17Content: SectionContent[] = [
  // ---------------------------------------------------------------- 17.1
  {
    sectionId: 'web-ch17-s1',
    readingTime: 9,
    intro: 'Most web apps must remember who is signed in across many stateless HTTP requests, and the two mainstream answers are server sessions and signed tokens. This section compares stateful sessions against stateless JWTs, introduces the access plus refresh split, and shows how OAuth with OpenID Connect outsources login to a trusted provider. You will learn when each approach fits and how refresh rotation keeps long lived sessions safe.',
    objectives: [
      'Explain stateful sessions versus stateless JWTs and choose between them',
      'Validate a JWT signature plus expiry plus audience correctly',
      'Implement the access plus refresh split with rotation and reuse detection',
      'Trace the authorization code flow with PKCE and the OpenID Connect identity layer'
    ],
    concepts: [
      {
        term: 'Server-side sessions',
        kind: 'definition',
        statement: 'A **server session** keeps the truth on the server: the browser holds only an opaque `sid` inside a signed cookie while a store maps that id to the user record. Every request looks the id up, which makes instant revocation trivial because deleting the row signs the user out everywhere. The price is **statefulness**, since every app instance must reach the same store or pin the user to one server.',
        detail: 'Redis is the classic session store because lookups are sub millisecond and keys can expire automatically. Scale by pointing every app instance at the same store rather than keeping sessions in process memory.'
      },
      {
        term: 'JWT anatomy and verification',
        kind: 'definition',
        statement: 'A **JSON Web Token** is three base64url parts joined by dots, namely a `header` plus a `payload` plus a `signature` that anyone can read but only the issuer can mint. Verification must check the **signature first**, then the `exp` expiry, then the `iss` issuer and the `aud` audience, because skipping any check admits forged or replayed tokens. Tokens are **self contained**, so services can authorize without a database round trip, but they cannot be individually revoked before expiry.',
        detail: 'Never put secrets or personal data in the payload because the payload is only encoded and not encrypted. Prefer short expiries measured in minutes and keep a revocation path through refresh tokens.'
      },
      {
        term: 'Access plus refresh split',
        kind: 'method',
        statement: 'The **access plus refresh split** gives the browser two tokens with opposite jobs: a short lived `accessToken` sent to APIs and a long lived `refreshToken` kept in a hardened cookie. The access token carries **least privilege** for minutes while the refresh token mints replacements for days, so a stolen access token expires before it can do much harm. Revocation targets the refresh token in the database, which ends the session without tracking every short lived access token.',
        detail: 'Send the access token in the Authorization header and never in a URL, since URLs leak into logs and history. Store the refresh token in an HttpOnly cookie so page scripts cannot read it.'
      },
      {
        term: 'Refresh rotation with reuse detection',
        kind: 'method',
        statement: '**Rotation** issues a brand new `refreshToken` on every use and invalidates the previous one, so each refresh token is strictly single use. If an old token ever reappears, the server treats that **reuse event** as probable theft and revokes the whole token family at once. This pattern bounds the damage of a stolen cookie to one refresh window and gives the backend a **theft signal** instead of silent acceptance.',
        detail: 'Model each refresh token as a database row with a family id, a used flag, and an expiry. On reuse, delete the family and force a fresh login so the legitimate user recovers control.'
      },
      {
        term: 'OAuth authorization code flow with PKCE and OIDC',
        kind: 'method',
        statement: 'In the **authorization code flow** the app never touches the password: it redirects to the provider, the user consents there, and the provider returns a one time `code` that the backend exchanges for tokens. The `PKCE` extension binds that exchange to the browser that started it, which keeps mobile and single page apps safe without a client secret. **OpenID Connect** adds an `id_token` on top of OAuth, which is a signed statement of who signed in that the app verifies before creating its own session.',
        detail: 'Always generate a random state value per login attempt and check it on return to block login CSRF. Request only the scopes the app needs and verify the issuer and audience on every token the provider returns.'
      }
    ],
    examples: [
      {
        title: 'Issue and verify a short lived access token',
        problem: 'An Express API must hand out fifteen minute access tokens at login and reject forged or expired tokens on a protected route.',
        steps: [
          { label: 'Step 1: Sign at login', text: '```ts\nimport jwt from "jsonwebtoken"\nconst accessToken = jwt.sign(\n  { sub: user.id, role: user.role },\n  process.env.JWT_SECRET as string,\n  { expiresIn: "15m", issuer: "studyverse", audience: "api" }\n)\n```\nThe payload carries only the subject and the role, while the short expiry bounds the damage if the token leaks.' },
          { label: 'Step 2: Verify on each request', text: '```ts\nconst payload = jwt.verify(token, process.env.JWT_SECRET as string, {\n  issuer: "studyverse",\n  audience: "api"\n})\n```\nVerification checks the signature, then the expiry, then the issuer and audience in one call.' },
          { label: 'Step 3: Enforce in middleware', text: '```ts\nfunction requireAuth(req, res, next) {\n  const header = req.headers.authorization ?? ""\n  const token = header.replace("Bearer ", "")\n  if (!token) return res.status(401).json({ code: "UNAUTHENTICATED" })\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET as string, {\n      issuer: "studyverse",\n      audience: "api"\n    })\n    next()\n  } catch {\n    return res.status(401).json({ code: "TOKEN_INVALID" })\n  }\n}\n```\nMissing tokens get a clear unauthenticated code and bad tokens get a token invalid code, with no stack details leaked.' }
        ],
        result: 'Login mints a fifteen minute token, the middleware verifies signature plus expiry plus issuer plus audience, and protected routes see a trusted user object.'
      },
      {
        title: 'Trace the authorization code flow with PKCE',
        problem: 'A Next.js app must add Sign in with Google without ever handling the Google password, and must resist code interception.',
        steps: [
          { label: 'Step 1: Start with state and challenge', text: '```ts\nconst state = crypto.randomUUID()\nconst verifier = crypto.randomUUID() + crypto.randomUUID()\ncookies().set("oauth_state", state, { httpOnly: true, sameSite: "lax" })\ncookies().set("pkce_verifier", verifier, { httpOnly: true, sameSite: "lax" })\nredirect(provider.buildAuthUrl({ state, verifier, scope: "openid email profile" }))\n```\nThe random state blocks login CSRF and the verifier binds the flow to this browser.' },
          { label: 'Step 2: Exchange the code server side', text: '```ts\nif (returnedState !== storedState) throw new Error("State mismatch")\nconst tokens = await provider.exchangeCode({ code, verifier })\nconst identity = await provider.verifyIdToken(tokens.id_token)\n```\nThe exchange happens with the app secret on the server, and the identity token is signature checked before use.' },
          { label: 'Step 3: Create the app session', text: '```ts\nconst user = await db.upsertUserFromProvider(identity)\nawait createSession(user.id, { provider: "google" })\nredirect("/dashboard")\n```\nGoogle proves identity, then the app creates its own session with its own access plus refresh split.' }
        ],
        result: 'The password never touches the app, PKCE stops code interception, and the verified identity token becomes a first class app session.'
      }
    ],
    keyTakeaways: [
      'Server sessions store truth in a shared store and revoke instantly; JWTs are self contained and scale without lookups but cannot be revoked early.',
      'Split tokens by lifetime: a minutes lived access token for APIs plus a days lived refresh token in a hardened cookie.',
      'Rotate every refresh token on use and revoke the whole family when an old token reappears.',
      'Verify JWTs fully every time: signature, then expiry, then issuer and audience.',
      'Use the authorization code flow with PKCE and OpenID Connect for third party login, and always check the state value.'
    ],
    quiz: [
      {
        q: 'Why is a stolen short lived access token less dangerous than a stolen long lived token?',
        options: [
          'Access tokens are encrypted while refresh tokens are not',
          'It expires within minutes and revocation targets the refresh token that minted it',
          'Access tokens cannot be read by attackers',
          'Short tokens bypass signature checks'
        ],
        answer: 1,
        explanation: 'The split bounds exposure: the access token dies within minutes on its own, and the server revokes the long lived refresh token to end the session without tracking every access token.'
      },
      {
        q: 'What must JWT verification check?',
        options: [
          'Only that the payload parses as JSON',
          'Signature, then expiry, then issuer and audience',
          'Only the expiry timestamp',
          'Only that the token has three parts'
        ],
        answer: 1,
        explanation: 'Structure alone proves nothing. The signature proves the issuer minted it, the expiry bounds replay, and issuer plus audience prove it was meant for this API.'
      },
      {
        q: 'What does refresh token reuse indicate, and what should the server do?',
        options: [
          'Normal parallel use; issue another token silently',
          'Probable theft; revoke the whole token family and force fresh login',
          'Clock skew; extend the expiry automatically',
          'A database outage; retry the same token'
        ],
        answer: 1,
        explanation: 'Rotation makes each refresh token single use, so a replayed token means a copy exists outside the legitimate browser. Revoking the family locks the attacker out.'
      },
      {
        q: 'What do PKCE and the state value each defend against in the authorization code flow?',
        options: [
          'PKCE stops code interception and state stops login CSRF',
          'PKCE encrypts the password and state encrypts the token',
          'PKCE replaces HTTPS and state replaces cookies',
          'Both rotate refresh tokens automatically'
        ],
        answer: 0,
        explanation: 'The verifier binds the code exchange to the browser that started the flow, while the random state value proves the callback belongs to the same login attempt.'
      },
      // Placement-pattern: session versus token storage choice (original)
      {
        q: "An app must revoke logins instantly on password change and keep auth artifacts out of JavaScript reach. Which design fits?",
        options: ["Long-lived tokens in `localStorage`, because scripts need direct access", "Passwords stored reversibly for quick comparison at login", "Opaque server sessions in `httpOnly` cookies with server-side revocation, because the theft surface shrinks and logout is a server delete", "No auth state at all: trust a username header from the client"],
        answer: 2,
        explanation: "Step 1: The data given is a revocation requirement plus a script-theft constraint on stored credentials. Step 2: The governing rules are session properties: opaque references validated server-side revoke with one delete, `httpOnly` cookies hide them from scripts, stateless tokens cannot be centrally revoked, and script-readable stores fall to cross-site scripting. Step 3: Tracing a password change, the server drops the session rows so every device logs out at once, while `httpOnly` transport keeps the cookie out of script hands throughout. Step 4: The distractors fail because script-readable tokens maximize theft, reversible passwords endanger the whole user base, and client-supplied identity headers are trivially forged. Step 5: Therefore revocable server sessions in `httpOnly` cookies are the fitting design."
      }
    ]
  },

  // ---------------------------------------------------------------- 17.2
  {
    sectionId: 'web-ch17-s2',
    readingTime: 8,
    intro: 'Passwords and permissions are where authentication theory meets the daily attack surface of a real app. This section shows how modern password hashing survives database theft, how roles and permissions keep authorization data driven, and how middleware guards plus hardened cookies protect every route. You will leave able to draw the line between who someone is and what they may do.',
    objectives: [
      'Hash passwords with bcrypt or argon2 and verify them safely',
      'Model authorization as roles carrying permissions, not scattered checks',
      'Write middleware guards that authenticate first and authorize second',
      'Configure session cookies with HttpOnly, Secure, and SameSite flags'
    ],
    concepts: [
      {
        term: 'Adaptive password hashing',
        kind: 'method',
        statement: 'Modern apps **hash, never encrypt** passwords with `bcrypt` or `argon2`, which are deliberately slow and embed a unique **salt** per password. The slowness is tunable through a **cost factor**, so verification stays a fraction of a second while bulk guessing stays ruinously expensive. Comparison runs in **constant time** through the library verifier, which defeats timing probes that guess passwords character by character.',
        detail: 'Choose argon2id for new systems and bcrypt with cost twelve or higher where argon2 is unavailable. Cap password length before hashing to avoid denial of service from megabyte inputs.'
      },
      {
        term: 'Salt, pepper, and work factor',
        kind: 'definition',
        statement: 'A **salt** is a random value mixed into each password before hashing so identical passwords produce different `hash` outputs and rainbow tables fail. A **pepper** is an extra secret kept outside the database and mixed in at verify time, so a bare database dump alone is not enough to start guessing. The **work factor** sets how expensive each guess is, and raising it over the years keeps Moore era hardware from eroding the margin.',
        detail: 'Libraries generate and store the salt inside the hash string automatically, so there is no separate salt column to manage. Rotate peppers by versioning them rather than invalidating every password at once.'
      },
      {
        term: 'RBAC: roles carry permissions',
        kind: 'definition',
        statement: '**Role based access control** assigns each user a `role` such as reader or editor or admin, and each role carries a set of **permissions** such as billing read or posts write. Route code then checks a permission like `posts:write` instead of hard coding role names, so new roles compose from existing permissions. This turns authorization into **data**, because changing who may do what becomes a database edit rather than a code deploy.',
        detail: 'Keep a central permission catalog checked into the codebase and assign roles in the database. Prefer deny by default so a missing grant fails closed instead of open.'
      },
      {
        term: 'Authenticate first, authorize second',
        kind: 'method',
        statement: 'Route **guards** run as ordered `middleware` that first proves identity and only then checks permission for the specific action. Authentication answers **who is knocking** by verifying the session or token, while authorization answers **whether they may enter** by testing the required permission. Splitting the two keeps error codes honest: missing identity yields unauthenticated while present but insufficient identity yields forbidden.',
        detail: 'Mount the authentication guard before any authorization guard so anonymous traffic never reaches permission logic. Unit test the guard matrix with one anonymous, one unauthorized, and one authorized case per route.'
      },
      {
        term: 'Hardened session cookies',
        kind: 'method',
        statement: 'Session cookies must be **HttpOnly** so page scripts cannot read them, `Secure` so they travel only over HTTPS, and `SameSite` set to Lax or Strict so cross site requests omit them. The `__Host` prefix goes further by locking the cookie to a secure origin with no domain override, which blocks subdomain writers. Together these flags keep the **session id** out of script reach and out of plain text transit.',
        detail: 'Set the path to root and keep the cookie value opaque, with all meaning stored server side. Renew the session id after login to stop fixation attacks that plant a known id.'
      }
    ],
    examples: [
      {
        title: 'Hash and verify a password correctly',
        problem: 'A signup route must store a password so that a full database leak still does not reveal it, and login must verify without timing leaks.',
        steps: [
          { label: 'Step 1: Hash at signup', text: '```ts\nimport bcrypt from "bcrypt"\nconst hash = await bcrypt.hash(password, 12)\nawait db.users.insert({ email, hash, role: "reader" })\n```\nCost twelve keeps verification fast for one user and brutally slow for a billion guesses.' },
          { label: 'Step 2: Verify at login', text: '```ts\nconst user = await db.users.findByEmail(email)\nconst ok = user ? await bcrypt.compare(password, user.hash) : false\nif (!ok) return res.status(401).json({ code: "INVALID_CREDENTIALS" })\n```\nThe library compare runs in constant time and the same generic error covers missing users, which avoids user enumeration.' },
          { label: 'Step 3: Upgrade hashes over time', text: '```ts\nif (user && hashNeedsRehash(user.hash)) {\n  user.hash = await bcrypt.hash(password, 13)\n  await db.users.save(user)\n}\n```\nSuccessful logins transparently lift old hashes to the current cost without forcing password resets.' }
        ],
        result: 'The database holds only salted hashes, login leaks neither timing nor existence, and rising hardware is answered by raising the cost.'
      },
      {
        title: 'Guard an admin route with RBAC middleware',
        problem: 'Only users holding the billing write permission may reach the refund endpoint, and anonymous users must get a different error than signed in users without the grant.',
        steps: [
          { label: 'Step 1: Authenticate', text: '```ts\nfunction authenticate(req, res, next) {\n  const user = verifySession(req.cookies.sid)\n  if (!user) return res.status(401).json({ code: "UNAUTHENTICATED" })\n  req.user = user\n  next()\n}\n```\nIdentity comes first, and failure stops the chain with an unauthenticated code.' },
          { label: 'Step 2: Authorize by permission', text: '```ts\nfunction requirePermission(perm) {\n  return (req, res, next) => {\n    if (!req.user.permissions.includes(perm)) {\n      return res.status(403).json({ code: "FORBIDDEN" })\n    }\n    next()\n  }\n}\napp.post("/refunds", authenticate, requirePermission("billing:write"), issueRefund)\n```\nThe route names the permission it needs, so new roles gain access by data change alone.' },
          { label: 'Step 3: Harden the cookie', text: '```ts\nres.cookie("sid", sessionId, {\n  httpOnly: true,\n  secure: true,\n  sameSite: "lax",\n  path: "/"\n})\n```\nScripts cannot read the id, plain HTTP cannot carry it, and cross site posts omit it.' }
        ],
        result: 'Anonymous callers get an unauthenticated response, signed in users without the grant get a forbidden response, and only permission holders reach the handler.'
      }
    ],
    keyTakeaways: [
      'Hash with bcrypt or argon2, verify in constant time, and raise the cost factor as hardware improves.',
      'Salt per password defeats rainbow tables; a pepper stored outside the database defeats bare dumps.',
      'Model authorization as roles carrying permissions and check permissions at the route, never role names in scattered conditionals.',
      'Order guards as authenticate then authorize so error codes distinguish anonymous from forbidden.',
      'Serve session ids only in HttpOnly plus Secure plus SameSite cookies and renew the id at login.'
    ],
    quiz: [
      {
        q: 'Why must passwords be hashed with bcrypt or argon2 rather than a fast hash?',
        options: [
          'Fast hashes are too long to store',
          'Slow adaptive hashes with per password salts make bulk guessing expensive and rainbow tables useless',
          'Fast hashes cannot handle unicode',
          'Adaptive hashes encrypt so the password can be recovered'
        ],
        answer: 1,
        explanation: 'Speed is the enemy: one verification must be fast while a billion guesses must be unaffordable, and unique salts stop precomputed tables. Hashing is one way, so nothing recoverable is stored.'
      },
      {
        q: 'A route checks `role === "admin"` in twelve places. What is the RBAC fix?',
        options: [
          'Rename the role to superadmin',
          'Check a permission such as billing write so roles compose from data',
          'Delete all checks for speed',
          'Move the checks into the frontend'
        ],
        answer: 1,
        explanation: 'Permission checks decouple routes from role names, so granting a new role is a data edit. Scattered role comparisons require a deploy for every policy change.'
      },
      {
        q: 'What is the correct guard order and error mapping?',
        options: [
          'Authorize then authenticate; both failures return forbidden',
          'Authenticate then authorize; anonymous returns unauthenticated and unpermitted returns forbidden',
          'Skip authentication for speed; return forbidden always',
          'Authenticate twice and never authorize'
        ],
        answer: 1,
        explanation: 'Identity must be established before permission can be tested, and the two failures mean different things to clients and to audit logs.'
      },
      {
        q: 'Which cookie flags protect a session id, and what does each do?',
        options: [
          'HttpOnly blocks script reads, Secure forces HTTPS transit, SameSite limits cross site sending',
          'All flags only affect cookie size',
          'Only the expiry matters for security',
          'Flags matter only in development'
        ],
        answer: 0,
        explanation: 'HttpOnly defeats script theft, Secure defeats network sniffing, and SameSite defeats most cross site request forgery by withholding the cookie.'
      }
    ]
  },

  // ---------------------------------------------------------------- 17.3
  {
    sectionId: 'web-ch17-s3',
    readingTime: 10,
    intro: 'Three attacks cause a disproportionate share of web breaches: cross site scripting, cross site request forgery, and SQL injection. This section shows how each payload works in plain terms and pairs it with the defense that kills it. You will practice safe rendering, token backed mutations, and parameterized queries until they become reflexes.',
    objectives: [
      'Explain how stored, reflected, and DOM based XSS payloads execute',
      'Render untrusted data with textContent plus escaping plus CSP',
      'Stop CSRF with SameSite cookies plus per action tokens',
      'Replace string built SQL with parameterized queries everywhere'
    ],
    concepts: [
      {
        term: 'How XSS payloads execute',
        kind: 'definition',
        statement: '**Cross site scripting** happens when attacker text is executed as page `script` in another user browser, which hands the attacker that user session. **Stored** XSS persists the payload in the database so every viewer runs it, **reflected** XSS bounces it off a URL or error page, and **DOM based** XSS assembles it in client code. All three share one root cause: **untrusted data crossed from data context into code context** without escaping.',
        detail: 'A classic probe is a script tag inside a comment field that pops an alert on every profile view. Treat every string from users, URLs, and APIs as untrusted until it is rendered through a safe sink.'
      },
      {
        term: 'XSS defense in depth',
        kind: 'method',
        statement: 'The first defense is **contextual escaping**: frameworks escape interpolated `text` by default, and manual DOM code must assign through `textContent` instead of `innerHTML`. The second defense is a strict **Content Security Policy** delivered as a `CSP` header that blocks inline scripts even if an injection slips through. Together they form **defense in depth**, because the policy contains the breach that escaping was supposed to prevent.',
        detail: 'Reserve innerHTML for trusted static templates and sanitize any rich HTML through an allowlist sanitizer. Set script sources to self plus explicit hashes and never allow unsafe inline in production.'
      },
      {
        term: 'How CSRF rides the cookie',
        kind: 'definition',
        statement: '**Cross site request forgery** tricks a signed in browser into sending a `POST` the user never intended, and the ambient `cookie` goes along automatically. The attacker needs no script access and no password, only a hidden form or fetch on a malicious page visited while the victim is logged in. The request looks **authenticated** because cookies attach by origin of the target, not by origin of the click.',
        detail: 'Changing email or transferring funds through plain cookie auth without extra checks is the textbook target. Read only GET routes are far less exposed because they should never mutate state.'
      },
      {
        term: 'CSRF tokens plus SameSite',
        kind: 'method',
        statement: 'A **CSRF token** is an unguessable `csrfToken` tied to the session that every mutation must present in a header or hidden field. Attacker pages cannot read the token because the **same origin policy** hides page contents across origins, so forged requests fail closed. Setting cookies `SameSite` to Lax or Strict adds a second wall by withholding cookies from most cross site requests in the first place.',
        detail: 'Rotate the token per session and compare in constant time on every state changing route. Prefer the double submit or synchronizer pattern through a helper rather than hand rolled token logic.'
      },
      {
        term: 'SQL injection and parameterization',
        kind: 'law',
        statement: '**SQL injection** smuggles attacker syntax into database `query` text built by string concatenation, turning data into commands. The fix is absolute: every query must be **parameterized**, with values sent as bound `params` the driver never parses as SQL. No escaping helper or denylist survives contact with a clever payload, so **never interpolate** user input into statement text for any reason.',
        detail: 'Object relational mappers parameterize automatically until raw SQL is used, so audit every raw call site. Give the app database role only the privileges it needs so an escaped payload still cannot drop tables.'
      }
    ],
    examples: [
      {
        title: 'Render comments without opening XSS',
        problem: 'A comment feed echoes user text into the page, and a probe containing markup currently executes.',
        steps: [
          { label: 'Step 1: Reproduce the sink', text: '```js\n// Vulnerable: attacker string becomes live markup\nlist.innerHTML = comments.map((c) => `<li>${c.text}</li>`).join("")\n```\nTemplate interpolation into innerHTML moves untrusted text straight into code context.' },
          { label: 'Step 2: Fix with textContent', text: '```js\nfor (const c of comments) {\n  const li = document.createElement("li")\n  li.textContent = c.text\n  list.appendChild(li)\n}\n```\nThe textContent sink treats every character as data, so markup displays literally instead of running.' },
          { label: 'Step 3: Add the CSP safety net', text: '```ts\nres.setHeader(\n  "Content-Security-Policy",\n  "default-src \'self\'; script-src \'self\'; object-src \'none\'"\n)\n```\nEven if a sink regresses later, the policy blocks inline scripts from executing.' }
        ],
        result: 'Comments render as inert text, the dangerous sink is gone, and the policy header contains any future slip.'
      },
      {
        title: 'Protect a mutation and a query together',
        problem: 'An email change endpoint accepts cross site posts, and a login query concatenates the username into SQL text.',
        steps: [
          { label: 'Step 1: See the vulnerable pair', text: '```ts\n// CSRF: no token check, cookie alone authenticates\napp.post("/email", setEmail)\n// Injection: input becomes SQL syntax\nconst rows = await db.query("SELECT * FROM users WHERE name = \'" + name + "\'")\n```\nEither line alone is a breach: one forges requests and the other forges queries.' },
          { label: 'Step 2: Require the CSRF token', text: '```ts\napp.post("/email", (req, res, next) => {\n  const sent = req.headers["x-csrf-token"]\n  const expected = req.session.csrfToken\n  if (!sent || !timingSafeEqual(sent, expected)) {\n    return res.status(403).json({ code: "CSRF_INVALID" })\n  }\n  next()\n}, setEmail)\n```\nOnly pages that can read the token, meaning same origin pages, can mutate.' },
          { label: 'Step 3: Parameterize the query', text: '```ts\nconst rows = await db.query("SELECT id, name FROM users WHERE name = $1", [name])\n```\nThe driver sends the name as a bound value that is never parsed, so quote tricks die in the data channel.' }
        ],
        result: 'Forged cross site posts fail the token check and hostile usernames become harmless bound values.'
      }
    ],
    keyTakeaways: [
      'XSS executes attacker text as script in a victim browser; stored, reflected, and DOM variants share the data into code root cause.',
      'Escape by default, assign untrusted text through textContent, and back it with a strict Content Security Policy.',
      'CSRF forges authenticated requests with ambient cookies; SameSite plus per mutation tokens stop it.',
      'Parameterize every database query and never concatenate input into statement text.',
      'Treat all input as hostile and verify each defense with a live probe before shipping.'
    ],
    quiz: [
      {
        q: 'Why does `textContent` stop XSS where `innerHTML` enables it?',
        options: [
          'textContent is faster to render',
          'textContent treats input as inert data while innerHTML parses it as markup and script',
          'innerHTML escapes automatically',
          'Both are equally safe with untrusted input'
        ],
        answer: 1,
        explanation: 'The sink decides the context: textContent never creates elements or scripts, while innerHTML parses attacker text into live DOM including script.'
      },
      {
        q: 'What does a strict Content Security Policy add on top of escaping?',
        options: [
          'It replaces the need for escaping entirely',
          'A second wall that blocks inline scripts even if an injection slips through',
          'It encrypts the database',
          'It rotates refresh tokens'
        ],
        answer: 1,
        explanation: 'Escaping prevents injection and the policy contains execution, so one layer failing does not equal a breach. Defense in depth is the point.'
      },
      {
        q: 'Why can an attacker forge a cookie authenticated POST without knowing the password?',
        options: [
          'Cookies attach automatically to requests aimed at the target origin',
          'Passwords are stored in cookies',
          'HTTPS decrypts itself for attackers',
          'POST bodies bypass authentication'
        ],
        answer: 0,
        explanation: 'The browser attaches ambient cookies by destination, so a hidden form on a malicious page arrives looking signed in. The CSRF token proves the request came from a page that could read it.'
      },
      {
        q: 'Why is parameterization the only acceptable SQL defense?',
        options: [
          'It makes queries faster in every case',
          'Bound values travel in a separate channel the database never parses as syntax',
          'It removes the need for database passwords',
          'Escaping with a denylist is equally safe'
        ],
        answer: 1,
        explanation: 'Separation beats filtering: parameters are data by construction, while escaping tries to enumerate every hostile spelling and always misses one.'
      }
    ]
  },

  // ---------------------------------------------------------------- 17.4
  {
    sectionId: 'web-ch17-s4',
    readingTime: 7,
    intro: 'Security is not one clever trick but a set of boring habits applied everywhere secrets, headers, and dependencies appear. This section turns environment secrets, HTTP security headers, enforced HTTPS, and dependency audits into a repeatable checklist. You will learn the least privilege mindset that shrinks every breach that still gets through.',
    objectives: [
      'Keep secrets in env and secret managers, never in code or logs',
      'Send HSTS, CSP, and framing plus MIME headers on every response',
      'Enforce HTTPS everywhere with redirects and secure cookies',
      'Audit dependencies with lockfiles and automated advisories'
    ],
    concepts: [
      {
        term: 'Secrets live outside code',
        kind: 'method',
        statement: 'A **secret** such as an API `key` or signing key must live in environment config or a managed vault, never in source or screenshots or chat logs. Each environment gets **its own values**, so development keys cannot spend production money or read production data. Loading fails **closed** at boot when a required secret is missing, because running half configured is how defaults leak.',
        detail: 'Keep a checked in example file with placeholder values and keep real values in the hosting provider vault. Rotate any secret that ever appears in a log or a diff, since history never forgets.'
      },
      {
        term: 'Security response headers',
        kind: 'method',
        statement: '**Security headers** are response directives like `HSTS` and `CSP` that harden every page without touching application logic. A tight Content Security Policy names exactly which **script sources** may run, while frame and MIME options block clickjacking and sniffing respectively. Because headers ship on **every response** through shared middleware, one configuration protects routes added months later.',
        detail: 'Start from a strict baseline and widen only with a documented reason per directive. Test header changes in report only mode first so legitimate embeds do not break silently.'
      },
      {
        term: 'HTTPS everywhere',
        kind: 'law',
        statement: '**HTTPS everywhere** means all traffic arrives over `TLS` with a valid certificate, and plain `HTTP` only exists to redirect upward. HSTS tells browsers to **refuse downgrades** for a long max age, which kills ssl stripping on hostile networks. Mixed content must be **eliminated**, because one plain script or frame poisons an otherwise encrypted page.',
        detail: 'Redirect at the edge so no application route is reachable over plain text. Renew certificates automatically and alert on expiry with weeks of lead time.'
      },
      {
        term: 'Dependency safety and lockfiles',
        kind: 'method',
        statement: '**Dependency safety** starts with a committed `lockfile` so every install resolves byte identical packages on every machine. Automated auditing with `npm audit` plus advisory scanners flags known vulnerable versions before they reach production. Updates follow a **patch first** rhythm: security patches ship immediately while major upgrades wait for a test window.',
        detail: 'Pin exact versions in the lockfile and review dependency diffs like code diffs. Remove abandoned packages promptly because unmaintained code accumulates unpatched flaws.'
      },
      {
        term: 'Least privilege everywhere',
        kind: 'insight',
        statement: '**Least privilege** grants every key, role, and token only the `scope` it needs and nothing more, so each credential is a small blast radius. Short expiries plus narrow scopes turn a leaked token from a catastrophe into an **incident**, because there is little it can touch and little time to touch it. Regular **access reviews** prune grants that outlived their reason, which keeps privilege from ratcheting upward forever.',
        detail: 'Issue separate keys per integration and per environment with per key rate limits. Prefer managed identities over long lived secrets wherever the platform offers them.'
      }
    ],
    examples: [
      {
        title: 'Move secrets out of code into env',
        problem: 'A repo contains a hardcoded payment key and one shared key across development and production.',
        steps: [
          { label: 'Step 1: Extract to env', text: '```ts\nconst stripeKey = process.env.STRIPE_SECRET_KEY\nif (!stripeKey) throw new Error("Missing STRIPE_SECRET_KEY")\nconst stripe = new Stripe(stripeKey)\n```\nBoot fails loudly instead of running with an empty key or a fallback default.' },
          { label: 'Step 2: Separate per environment', text: '```bash\nvercel env add STRIPE_SECRET_KEY production\nvercel env add STRIPE_SECRET_KEY preview\nvercel env add STRIPE_SECRET_KEY development\n```\nEach environment holds its own value, so a leaked preview key cannot charge real customers.' },
          { label: 'Step 3: Rotate the exposed key', text: '```bash\nnpm audit fix\nstripe keys:roll --revoke-exposed\n```\nTreat exposure as compromise: revoke first, then deploy the replacement through the vault.' }
        ],
        result: 'No secret remains in git history going forward, environments are isolated, and the exposed key is dead.'
      },
      {
        title: 'Ship a baseline security header set',
        problem: 'An Express app sends no security headers, so clickjacking, MIME sniffing, and downgrade attacks are all open.',
        steps: [
          { label: 'Step 1: Add the middleware', text: '```ts\nimport helmet from "helmet"\napp.use(helmet({\n  contentSecurityPolicy: { directives: { defaultSrc: ["\'self\'"] } },\n  hsts: { maxAge: 63072000, includeSubDomains: true, preload: true }\n}))\n```\nOne middleware attaches the whole baseline to every response.' },
          { label: 'Step 2: Lock framing and MIME', text: '```ts\napp.use((req, res, next) => {\n  res.setHeader("X-Frame-Options", "DENY")\n  res.setHeader("X-Content-Type-Options", "nosniff")\n  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin")\n  next()\n})\n```\nFraming is denied, sniffing is off, and referrers leak the minimum.' },
          { label: 'Step 3: Verify like an auditor', text: '```bash\nnpm audit --audit-level=moderate\ncurl -sI https://example.com | grep -i -E "strict|csp|frame|content-type"\n```\nDependencies scan clean and the headers are visible on the wire, not just in config.' }
        ],
        result: 'Every response carries HSTS plus CSP plus framing and MIME guards, and audits run on a schedule rather than after incidents.'
      }
    ],
    keyTakeaways: [
      'Secrets belong in env and vaults with per environment values, and boot must fail closed without them.',
      'Send HSTS, a tight CSP, and framing plus MIME headers on every response through shared middleware.',
      'Redirect all plain HTTP to HTTPS and eliminate mixed content so one weak asset cannot poison the page.',
      'Commit the lockfile, scan with audits and advisories, and ship security patches immediately.',
      'Apply least privilege to every credential so leaks become small incidents instead of catastrophes.'
    ],
    quiz: [
      {
        q: 'A payment key appears in a committed diff. What is the correct response?',
        options: [
          'Delete the line in the next commit and move on',
          'Revoke and rotate the key, then move it into env and vault config',
          'Share it with the team so everyone can use it',
          'Comment it out but keep it for reference'
        ],
        answer: 1,
        explanation: 'History never forgets: the key is compromised the moment it is pushed. Revocation kills the exposure and env storage prevents recurrence.'
      },
      {
        q: 'What does HSTS add beyond serving pages over HTTPS?',
        options: [
          'It encrypts the database at rest',
          'It instructs browsers to refuse plain HTTP downgrades for the whole max age',
          'It replaces the need for certificates',
          'It hashes passwords automatically'
        ],
        answer: 1,
        explanation: 'Without HSTS an attacker can strip the upgrade on a hostile network. The header pins HTTPS in the browser so downgrades fail closed.'
      },
      {
        q: 'Why must the lockfile be committed?',
        options: [
          'It makes installs slower and safer',
          'It freezes byte identical versions so audits and deploys reason about the same tree',
          'It removes the need for package.json',
          'It automatically fixes all vulnerabilities'
        ],
        answer: 1,
        explanation: 'Without a lockfile each install can resolve differently, so a scan that passed locally may not describe production. The lockfile makes the tree reproducible.'
      },
      {
        q: 'How does least privilege shrink a token leak?',
        options: [
          'Narrow scope plus short expiry limits what the token can touch and for how long',
          'It makes tokens unreadable to attackers',
          'It prevents tokens from ever expiring',
          'It shares one token across all services'
        ],
        answer: 0,
        explanation: 'Small scopes bound the damage sideways and short expiries bound it in time. Reviews then prune grants before they accumulate.'
      }
    ]
  },

  // ---------------------------------------------------------------- 17.5
  {
    sectionId: 'web-ch17-s5',
    readingTime: 8,
    intro: 'The last line of defense is the contract every request crosses: validate input, sanitize output, and never leak internals through errors or logs. This section teaches validate then handle ordering, safe error envelopes, PII aware logging, and audit trails. You will make the unhappy path as carefully designed as the happy path.',
    objectives: [
      'Enforce validate then handle ordering with shared schemas',
      'Separate sanitization of output from validation of input',
      'Return safe error envelopes that hide internals',
      'Log without PII and keep audit trails for security events'
    ],
    concepts: [
      {
        term: 'Validate then handle',
        kind: 'method',
        statement: '**Validate then handle** means no handler logic runs before a shared `schema` proves the request shape, types, and ranges. Schemas live **once per contract** beside the route and reject unknown fields, because silent extra fields become mass assignment holes. Early rejection keeps handlers **simple**, since downstream code can trust that business rules see only well formed data.',
        detail: 'Use a schema library with coercion off so the string twelve never becomes the number twelve by accident. Return one consistent validation error shape so clients can highlight fields programmatically.'
      },
      {
        term: 'Validation versus sanitization',
        kind: 'definition',
        statement: '**Validation** rejects input that breaks the `contract`, while **sanitization** cleans output so it is safe to render or store. Validation asks **may this proceed** and drops the request on failure, whereas sanitization asks **how do we make this safe** and transforms the value. Confusing the two is dangerous, because scrubbing a malformed request can launder it past checks that should have refused it.',
        detail: 'Validate emails, ranges, and enums at the boundary, then sanitize rich text through an allowlist on the way out. Never mutate input to force it valid and proceed as if the user sent clean data.'
      },
      {
        term: 'Safe error envelopes',
        kind: 'method',
        statement: 'A **safe envelope** returns a stable `code` plus a generic message while full stacks and query text stay in server `logs`. Clients branch on the code rather than parsing sentences, which keeps error contracts **versionable** across releases. Production responses carry **no trace**, because stack frames and SQL fragments are reconnaissance for attackers.',
        detail: 'Map known domain errors to codes and collapse everything else into an internal code with a correlation id. Include the correlation id so support can join the client report to the full server log.'
      },
      {
        term: 'PII aware logging',
        kind: 'method',
        statement: '**PII aware logging** records what happened without recording passwords, tokens, or full `card` numbers that turn logs into treasure chests. Fields are **redacted** at the logger boundary through allowlists, so a secret added to a request object cannot flow into storage by accident. Retention is **bounded**, because logs nobody may read forever are liability without value.',
        detail: 'Hash or truncate identifiers where analytics needs joins without raw values. Alert on any log line matching secret patterns so leaks are caught within minutes.'
      },
      {
        term: 'Audit trails for security events',
        kind: 'definition',
        statement: 'An **audit trail** is an append only `ledger` of who did what and when, covering logins, permission changes, and sensitive reads. Entries record the **actor**, the action, the target, and the timestamp in UTC, which makes incident reconstruction possible months later. Audit storage is **tamper evident**, because a trail the attacker can rewrite is decoration rather than evidence.',
        detail: 'Write audit events even for denied attempts, since probes precede breaches. Keep audit retention far longer than debug logs and restrict read access to responders.'
      }
    ],
    examples: [
      {
        title: 'Gate a route with a shared schema',
        problem: 'A profile update accepts any JSON, so extra fields overwrite roles and wrong types crash the handler.',
        steps: [
          { label: 'Step 1: Declare the contract once', text: '```ts\nimport { z } from "zod"\nconst profileSchema = z.object({\n  displayName: z.string().min(1).max(60),\n  bio: z.string().max(280).optional()\n}).strict()\n```\nStrict mode rejects unknown fields, which closes mass assignment through extra keys.' },
          { label: 'Step 2: Validate before handling', text: '```ts\napp.patch("/profile", async (req, res) => {\n  const parsed = profileSchema.safeParse(req.body)\n  if (!parsed.success) {\n    return res.status(400).json({ code: "VALIDATION_ERROR", fields: parsed.error.flatten() })\n  }\n  await saveProfile(req.user.id, parsed.data)\n  res.json({ code: "OK" })\n})\n```\nThe handler only ever sees proven data, so business logic stays free of type guards.' },
          { label: 'Step 3: Confirm the rejection', text: '```bash\ncurl -X PATCH http://localhost:3000/profile \\\n  -H "Content-Type: application/json" \\\n  -d \'{"displayName":"Ada","role":"admin"}\'\n```\nThe unknown role key triggers a validation error instead of a privilege escalation.' }
        ],
        result: 'Malformed and overprivileged payloads die at the boundary with a machine readable code, and the handler trusts its input.'
      },
      {
        title: 'Return safe errors and keep an audit trail',
        problem: 'A transfer endpoint leaks SQL text on failure, logs full card numbers, and records nothing about who attempted what.',
        steps: [
          { label: 'Step 1: Envelope the error', text: '```ts\napp.use((err, req, res, next) => {\n  const id = crypto.randomUUID()\n  logger.error({ id, err, user: req.user?.id })\n  res.status(500).json({ code: "INTERNAL", message: "Something went wrong", id })\n})\n```\nThe client gets a code plus a correlation id while the full error stays server side.' },
          { label: 'Step 2: Redact PII at the logger', text: '```ts\nlogger.addRedaction(["password", "card", "token", "authorization"])\nlogger.info({ user: user.id, last4: card.slice(-4) })\n```\nAllowlisted fields flow through while secrets are masked before storage.' },
          { label: 'Step 3: Append the audit event', text: '```ts\nawait audit.append({\n  actor: req.user.id,\n  action: "transfer.initiate",\n  target: accountId,\n  at: new Date().toISOString(),\n  outcome: "denied"\n})\n```\nDenied attempts join the ledger, so brute force campaigns leave footprints.' }
        ],
        result: 'Clients see stable codes, logs hold no secrets, and responders can reconstruct the whole incident from the ledger.'
      }
    ],
    keyTakeaways: [
      'Run schema validation first and let handlers trust proven data with unknown fields rejected.',
      'Validate to reject bad input and sanitize to clean output; never launder input past validation.',
      'Return stable error codes with generic messages and keep stacks plus queries in server logs.',
      'Redact secrets at the logger boundary and bound retention so logs are not treasure chests.',
      'Append actor plus action plus target plus timestamp to a tamper evident audit ledger, including denials.'
    ],
    quiz: [
      {
        q: 'Why must unknown fields be rejected by strict schemas?',
        options: [
          'They make payloads too small',
          'Extra keys enable mass assignment such as smuggling a role field',
          'Strict mode makes responses faster',
          'Unknown fields break HTTPS'
        ],
        answer: 1,
        explanation: 'Handlers that spread request bodies into models will persist any extra key. Strict rejection turns a privilege escalation into a validation error.'
      },
      {
        q: 'What is the difference between validation and sanitization?',
        options: [
          'They are synonyms for the same step',
          'Validation rejects contract breaking input while sanitization cleans output for safe use',
          'Sanitization rejects and validation cleans',
          'Only sanitization belongs at the boundary'
        ],
        answer: 1,
        explanation: 'Validation gates whether to proceed and sanitization shapes how to render or store. Scrubbing input to force it valid launders attacks past the gate.'
      },
      {
        q: 'What belongs in a production error response?',
        options: [
          'Full stack trace and SQL text for debugging',
          'A stable code, a generic message, and a correlation id',
          'Database credentials for support',
          'The raw exception object'
        ],
        answer: 1,
        explanation: 'Codes let clients branch, generic messages avoid reconnaissance, and the id joins the report to the full server side log.'
      },
      {
        q: 'Which events belong in the audit trail?',
        options: [
          'Only successful logins',
          'Logins, permission changes, sensitive reads, and denied attempts with actor plus action plus target plus time',
          'Only frontend clicks',
          'Nothing, to save disk space'
        ],
        answer: 1,
        explanation: 'Reconstruction needs the full story including probes that failed. Denied attempts are often the earliest signal of an unfolding attack.'
      }
    ]
  }
]
