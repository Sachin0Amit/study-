/* StudyVerse service worker — offline-first study companion.
 * Registered ONLY when the learner enables Offline Mode in the UI
 * (dev-server friendly: no aggressive precache of the app shell HTML).
 *
 * Strategy:
 *  - /api/progress, /api/flashcards, /api/notes  → network-first, cache fallback
 *  - lesson API GETs (/api/section/...)          → stale-while-revalidate
 *  - static assets (/_next, /diagrams, /palace)  → cache-first
 *  - navigation                                  → network-first, cached shell fallback
 *  - POST queue                                  → replayed on reconnect (best-effort)
 */

const VERSION = 'sv-v1'
const SHELL_CACHE = `${VERSION}-shell`
const DATA_CACHE = `${VERSION}-data`
const ASSET_CACHE = `${VERSION}-assets`
const QUEUE_DB = `${VERSION}-queue`

const QUEUEABLE_POSTS = ['/api/progress', '/api/quiz', '/api/activity', '/api/notes', '/api/twin']

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(['/logo.svg', '/manifest.webmanifest']))
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(
        keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))
      )
      await self.clients.claim()
    })()
  )
})

function isQueueable(url, method) {
  if (method !== 'POST') return false
  return QUEUEABLE_POSTS.some((p) => url.pathname === p || url.pathname.startsWith(p + '/'))
}

/** open (or create) the IndexedDB queue store */
async function getQueueDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(QUEUE_DB, 1)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains('mutations')) {
        db.createObjectStore('mutations', { autoIncrement: true })
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function enqueue(request) {
  try {
    const db = await getQueueDb()
    const body = await request.clone().text()
    await new Promise((resolve, reject) => {
      const tx = db.transaction('mutations', 'readwrite')
      tx.objectStore('mutations').add({
        url: request.url,
        headers: { 'Content-Type': request.headers.get('Content-Type') ?? 'application/json' },
        body,
        at: Date.now(),
      })
      tx.oncomplete = () => resolve()
      tx.onerror = () => reject(tx.error)
    })
    return new Response(
      JSON.stringify({ queued: true, offline: true }),
      { status: 202, headers: { 'Content-Type': 'application/json' } }
    )
  } catch {
    return new Response(
      JSON.stringify({ queued: false, offline: true }),
      { status: 202, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

async function flushQueue() {
  try {
    const db = await getQueueDb()
    await new Promise((resolve) => {
      const tx = db.transaction('mutations', 'readwrite')
      const store = tx.objectStore('mutations')
      const cursorReq = store.openCursor()
      cursorReq.onsuccess = async () => {
        const cursor = cursorReq.result
        if (!cursor) {
          resolve()
          return
        }
        const { url, headers, body } = cursor.value
        try {
          await fetch(url, { method: 'POST', headers, body })
          cursor.delete()
        } catch {
          // still offline — keep the mutation, stop here
          resolve()
          return
        }
        cursor.continue()
      }
      cursorReq.onerror = () => resolve()
      tx.oncomplete = () => resolve()
    })
  } catch {
    /* queue unavailable */
  }
}

self.addEventListener('sync', (event) => {
  if (event.tag === 'sv-flush-queue') event.waitUntil(flushQueue())
})

self.addEventListener('message', (event) => {
  if (event.data === 'sv-flush-queue') event.waitUntil(flushQueue())
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // only same-origin
  if (url.origin !== self.location.origin) return

  // queue eligible POSTs when offline
  if (isQueueable(url, request.method)) {
    event.respondWith(
      fetch(request).catch(() => enqueue(request))
    )
    return
  }

  if (request.method !== 'GET') return

  // fresh-data endpoints → network-first
  if (url.pathname.startsWith('/api/progress') || url.pathname.startsWith('/api/flashcards') || url.pathname.startsWith('/api/notes')) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone()
          caches.open(DATA_CACHE).then((c) => c.put(request, copy))
          return res
        })
        .catch(() => caches.match(request).then((hit) => hit ?? new Response('{}', { headers: { 'Content-Type': 'application/json' } })))
    )
    return
  }

  // lesson content APIs → stale-while-revalidate
  if (url.pathname.startsWith('/api/section') || url.pathname.startsWith('/api/library')) {
    event.respondWith(
      caches.open(DATA_CACHE).then(async (cache) => {
        const cached = await cache.match(request)
        const network = fetch(request)
          .then((res) => {
            if (res.ok) cache.put(request, res.clone())
            return res
          })
          .catch(() => cached)
        return cached ?? network
      })
    )
    return
  }

  // static assets → cache-first
  if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/diagrams/') || url.pathname.startsWith('/palace/') || url.pathname === '/logo.svg') {
    event.respondWith(
      caches.open(ASSET_CACHE).then(async (cache) => {
        const hit = await cache.match(request)
        if (hit) return hit
        const res = await fetch(request)
        if (res.ok) cache.put(request, res.clone())
        return res
      })
    )
    return
  }

  // navigations → network-first with offline fallback to the cached shell
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(async () => {
        const cache = await caches.open(SHELL_CACHE)
        const shell = await cache.match('/')
        return shell ?? new Response('Offline — enable Offline Mode while connected to cache lessons.', { status: 503, headers: { 'Content-Type': 'text/plain' } })
      })
    )
    return
  }
})
