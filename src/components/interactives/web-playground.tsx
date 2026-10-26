'use client'

/**
 * WebPlayground — live-preview playground for the web platform.
 *
 * HTML runs as a real document inside a sandboxed iframe (scripts included);
 * CSS styles a real markup document. No server, no fake console — what you
 * see in the preview pane is what a browser actually renders.
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Eye,
  Loader2,
  Monitor,
  Play,
  RotateCcw,
  Smartphone,
  Tablet,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Types & presets                                                    */
/* ------------------------------------------------------------------ */

export type WebVariant = 'html' | 'css'

interface Preset {
  id: string
  label: string
  html: string
  css?: string
}

const HTML_PRESETS: Preset[] = [
  {
    id: 'html-semantic',
    label: 'Semantic page',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Semantic landmarks</title>
</head>
<body>
  <header>
    <h1>The Semantic Herald</h1>
    <nav aria-label="main">
      <a href="#news">News</a> ·
      <a href="#sports">Sports</a> ·
      <a href="#weather">Weather</a>
    </nav>
  </header>

  <main>
    <article id="news">
      <h2>Landmarks beat div soup</h3>
      <p>Screen readers jump straight to <code>&lt;main&gt;</code>,
      <code>&lt;nav&gt;</code> and <code>&lt;article&gt;</code> —
      no <code>class="wrapper-inner-2"</code> required.</p>
    </article>

    <aside id="weather">
      <h3>Aside — the sidebar</h3>
      <p>Related, but not the main story.</p>
    </aside>
  </main>

  <footer>
    <small>&copy; semantic examples — no divs were harmed</small>
  </footer>
</body>
</html>`,
  },
  {
    id: 'html-form',
    label: 'Forms & validation',
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Form validation</title></head>
<body>
  <h2>Join the guild</h2>
  <form>
    <label for="name">Adventurer name</label>
    <input id="name" name="name" required minlength="3"
           placeholder="e.g. Ada of Alexandria">

    <label for="level">Starting level (1–20)</label>
    <input id="level" name="level" type="number"
           min="1" max="20" value="1">

    <label for="class">Class</label>
    <select id="class" name="class">
      <option>Engineer</option>
      <option>Wizard</option>
      <option>Bard</option>
    </select>

    <fieldset>
      <legend>Pact</legend>
      <input type="checkbox" id="tos" required>
      <label for="tos">I solemnly swear I am up to no good</label>
    </fieldset>

    <button type="submit">Roll for initiative</button>
  </form>

  <p id="out" role="status"></p>

  <script>
    const form = document.querySelector('form')
    const out = document.querySelector('#out')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const name = form.name.value || 'nameless one'
      out.textContent = 'Welcome, ' + name +
        ' the level ' + form.level.value + ' ' + form.class.value + '!'
    })
  </script>
</body>
</html>`,
  },
  {
    id: 'html-table',
    label: 'Tables & media',
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Tables</title></head>
<body>
  <h2>Periodic royalty</h2>
  <table>
    <caption>Elements everyone can name</caption>
    <thead>
      <tr><th scope="col">Symbol</th><th scope="col">Element</th><th scope="col">Z</th></tr>
    </thead>
    <tbody>
      <tr><td>Fe</td><td>Iron</td><td>26</td></tr>
      <tr><td>Au</td><td>Gold</td><td>79</td></tr>
      <tr><td>Ag</td><td>Silver</td><td>47</td></tr>
    </tbody>
  </table>

  <h2>Pictures</h2>
  <figure>
    <svg viewBox="0 0 120 60" width="240" height="120" role="img" aria-label="Inline SVG sun">
      <circle cx="60" cy="30" r="18" fill="#f59e0b"/>
      <g stroke="#f59e0b" stroke-width="3">
        <line x1="60" y1="2" x2="60" y2="12"/>
        <line x1="60" y1="48" x2="60" y2="58"/>
        <line x1="32" y1="30" x2="42" y2="30"/>
        <line x1="78" y1="30" x2="88" y2="30"/>
      </g>
    </svg>
    <figcaption>Inline SVG — an &lt;img&gt; with no network needed</figcaption>
  </figure>
</body>
</html>`,
  },
  {
    id: 'html-canvas',
    label: 'Canvas & script',
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Canvas</title></head>
<body>
  <h2>&lt;canvas&gt; — pixels from JavaScript</h2>
  <canvas id="c" width="280" height="160"></canvas>

  <script>
    const ctx = document.querySelector('#c').getContext('2d')

    // sky
    const grad = ctx.createLinearGradient(0, 0, 0, 160)
    grad.addColorStop(0, '#0f172a')
    grad.addColorStop(1, '#334155')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 280, 160)

    // moon
    ctx.fillStyle = '#e2e8f0'
    ctx.beginPath()
    ctx.arc(210, 45, 22, 0, Math.PI * 2)
    ctx.fill()

    // hills
    ctx.fillStyle = '#14532d'
    ctx.beginPath()
    ctx.moveTo(0, 160)
    ctx.quadraticCurveTo(70, 80, 140, 160)
    ctx.moveTo(100, 160)
    ctx.quadraticCurveTo(190, 60, 280, 160)
    ctx.fill()

    // caption
    ctx.fillStyle = '#94a3b8'
    ctx.font = '12px monospace'
    ctx.fillText('drawn by script, not by markup', 30, 150)
  </script>
</body>
</html>`,
  },
]

const CSS_PRESETS: Preset[] = [
  {
    id: 'css-flexbox',
    label: 'Flexbox',
    html: `<div class="card">
  <header class="bar">flex container</header>
  <div class="row">
    <div class="box">1<br>flex: 1</div>
    <div class="box grow2">2<br>flex: 2</div>
    <div class="box">3<br>flex: 1</div>
  </div>
  <div class="row wrap">
    <div class="pill">wrap</div>
    <div class="pill">gap: 8px</div>
    <div class="pill">centered</div>
    <div class="pill">row → column on small screens</div>
  </div>
</div>`,
    css: `.card {
  font-family: system-ui, sans-serif;
  color: #e2e8f0;
  background: #0f172a;
  border-radius: 12px;
  padding: 16px;
}
.bar {
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 12px;
  color: #34d399;
  margin-bottom: 12px;
}
.row {
  display: flex;
  gap: 8px;
}
.box {
  flex: 1;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 14px 8px;
  text-align: center;
  font-size: 13px;
}
.grow2 { flex: 2; background: #134e4a; }
.wrap {
  margin-top: 12px;
  flex-wrap: wrap;
  justify-content: center;
}
.pill {
  background: #1e293b;
  border: 1px dashed #475569;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
}
@media (max-width: 480px) {
  .row { flex-direction: column; }
}`,
  },
  {
    id: 'css-grid',
    label: 'Grid gallery',
    html: `<div class="gallery">
  <div class="tile a">header — spans all columns</div>
  <div class="tile">1</div>
  <div class="tile wide">2 — spans two</div>
  <div class="tile">3</div>
  <div class="tile tall">4<br>spans two rows</div>
  <div class="tile">5</div>
  <div class="tile">6</div>
  <div class="tile">7</div>
</div>`,
    css: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  font-family: system-ui, sans-serif;
}
.tile {
  background: #1e293b;
  color: #e2e8f0;
  border: 1px solid #334155;
  border-radius: 10px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  padding: 8px;
}
.a {
  grid-column: 1 / -1;
  background: #134e4a;
  min-height: 48px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 12px;
}
.wide { grid-column: span 2; background: #312e81; }
.tall { grid-row: span 2; background: #7c2d12; }`,
  },
  {
    id: 'css-custom-props',
    label: 'Custom properties',
    html: `<div class="theme light">
  <p class="msg">--accent drives everything below</p>
  <button class="btn">primary</button>
  <button class="btn ghost">ghost</button>
</div>
<div class="theme dark">
  <p class="msg">same markup, different --accent</p>
  <button class="btn">primary</button>
  <button class="btn ghost">ghost</button>
</div>`,
    css: `:root {
  --radius: 10px;
  --speed: 0.25s;
}
.theme {
  --accent: #0d9488;
  font-family: system-ui, sans-serif;
  padding: 14px;
  border-radius: var(--radius);
  margin-bottom: 10px;
}
.theme.dark { --accent: #d97706; background: #0f172a; }
.theme.light { background: #f1f5f9; }

.msg {
  margin: 0 0 10px;
  font-size: 13px;
  color: #475569;
}
.theme.dark .msg { color: #94a3b8; }

.btn {
  background: var(--accent);
  color: white;
  border: none;
  border-radius: var(--radius);
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  margin-right: 8px;
  cursor: pointer;
  transition: filter var(--speed), transform var(--speed);
}
.btn:hover { filter: brightness(1.15); transform: translateY(-1px); }
.btn.ghost {
  background: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
}`,
  },
  {
    id: 'css-animation',
    label: 'Animation',
    html: `<div class="stage">
  <div class="orbit">
    <div class="planet"></div>
    <div class="moon"></div>
  </div>
  <p class="caption">@keyframes — one orbit, 6s, infinite</p>
</div>`,
    css: `.stage {
  font-family: system-ui, sans-serif;
  text-align: center;
  padding: 20px 0;
}
.orbit {
  position: relative;
  width: 140px;
  height: 140px;
  margin: 0 auto 14px;
  border: 1px dashed #475569;
  border-radius: 50%;
  animation: spin 6s linear infinite;
}
.planet {
  position: absolute;
  inset: 42px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fbbf24, #b45309);
}
.moon {
  position: absolute;
  top: -9px;
  left: 61px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #e2e8f0, #64748b);
}
.caption { font-size: 12px; color: #64748b; }
@keyframes spin { to { transform: rotate(360deg); } }`,
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const VARIANT_META: Record<
  WebVariant,
  { title: string; subtitle: string; accentText: string; accentBg: string; accentSolid: string; presets: Preset[] }
> = {
  html: {
    title: 'HTML Playground',
    subtitle:
      'Real markup in, real rendering out — the preview is a live sandboxed document with scripts enabled. Edit and watch it re-render.',
    accentText: 'text-orange-400',
    accentBg: 'bg-orange-500/10 ring-orange-500/20',
    accentSolid: 'bg-orange-600 hover:bg-orange-500',
    presets: HTML_PRESETS,
  },
  css: {
    title: 'CSS Playground',
    subtitle:
      'Style a real document and watch it live — selectors, cascade, flex, grid, custom properties and animations, no refresh needed.',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10 ring-cyan-500/20',
    accentSolid: 'bg-cyan-600 hover:bg-cyan-500',
    presets: CSS_PRESETS,
  },
}

type Device = 'desktop' | 'tablet' | 'phone'
const DEVICE_W: Record<Device, string> = {
  desktop: 'w-full',
  tablet: 'w-[560px] max-w-full',
  phone: 'w-[375px] max-w-full',
}

/** Wrap CSS-variant markup into a full document for the preview iframe. */
function buildDoc(variant: WebVariant, htmlCode: string, cssCode: string): string {
  if (variant === 'html') return htmlCode
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
${cssCode}
</style>
</head>
<body>
${htmlCode}
</body>
</html>`
}

export function WebPlayground({ variant }: { variant: WebVariant }) {
  const meta = VARIANT_META[variant]
  const reduced = useReducedMotion()

  const [presetId, setPresetId] = useState(meta.presets[0].id)
  const [html, setHtml] = useState(meta.presets[0].html)
  const [css, setCss] = useState(meta.presets[0].css ?? '')
  const [dirty, setDirty] = useState(false)
  const [device, setDevice] = useState<Device>('desktop')
  const [live, setLive] = useState(true)
  const [renderDoc, setRenderDoc] = useState(() =>
    buildDoc(variant, meta.presets[0].html, meta.presets[0].css ?? ''),
  )
  const [flash, setFlash] = useState(false)

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const preset = useMemo(() => meta.presets.find((p) => p.id === presetId) ?? meta.presets[0], [meta, presetId])
  const lineCountHtml = useMemo(() => html.split('\n').length, [html])
  const lineCountCss = useMemo(() => css.split('\n').length, [css])

  // debounced live preview — keeps the sandboxed iframe in sync with edits
  useEffect(() => {
    if (!live) return
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setRenderDoc(buildDoc(variant, html, css))
    }, 450)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [html, css, live, variant])

  const manualRun = () => {
    setRenderDoc(buildDoc(variant, html, css))
    setFlash(true)
    setTimeout(() => setFlash(false), 500)
  }

  const loadPreset = (p: Preset) => {
    setPresetId(p.id)
    setHtml(p.html)
    setCss(p.css ?? '')
    setDirty(false)
    setRenderDoc(buildDoc(variant, p.html, p.css ?? ''))
  }

  const makeKeyDown =
    (setter: (v: string) => void) =>
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      const ta = e.currentTarget
      if (e.key === 'Tab') {
        e.preventDefault()
        const s = ta.selectionStart
        const en = ta.selectionEnd
        if (e.shiftKey) {
          const lineStart = ta.value.lastIndexOf('\n', s - 1) + 1
          const indent = ta.value.slice(lineStart, s)
          const spaces = indent.length - indent.trimStart().length
          if (spaces > 0) {
            const cut = Math.min(2, spaces)
            ta.setSelectionRange(lineStart, lineStart + cut)
            ta.setRangeText('', lineStart, lineStart + cut, 'end')
            setter(ta.value)
          }
        } else {
          ta.setRangeText('  ', s, en, 'end')
          setter(ta.value)
        }
      } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        manualRun()
      }
    }

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
      {/* header */}
      <div className="flex items-start gap-3">
        <div
          className={cn('mt-0.5 rounded-xl p-2.5 ring-1', meta.accentBg, meta.accentText)}
          aria-hidden="true"
        >
          <Eye className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">{meta.title}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{meta.subtitle}</p>
        </div>
      </div>

      {/* presets */}
      <div role="group" aria-label={`${meta.title} examples`} className="mt-4 flex flex-wrap gap-1.5">
        {meta.presets.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => loadPreset(p)}
            aria-pressed={presetId === p.id}
            className={cn(
              'rounded-lg border px-2.5 py-1.5 text-xs font-medium transition',
              presetId === p.id
                ? cn('text-white', meta.accentSolid, 'border-transparent')
                : 'border-border bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground',
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* editors + preview */}
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {/* editors */}
        <div className="flex flex-col gap-3">
          {variant === 'css' && (
            <section
              aria-label="CSS editor"
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-background/60"
            >
              <header className="flex items-center gap-2 border-b border-border px-3 py-2">
                <span className="font-mono text-xs text-cyan-500">styles.css</span>
                <span className="text-[10px] text-muted-foreground">{lineCountCss} lines</span>
              </header>
              <textarea
                value={css}
                onChange={(e) => {
                  setCss(e.target.value)
                  setDirty(true)
                }}
                onKeyDown={makeKeyDown(setCss)}
                spellCheck={false}
                aria-label="CSS code editor. Tab inserts two spaces."
                className="h-[190px] resize-none bg-transparent px-3 py-2 font-mono text-[12.5px] leading-5 text-foreground caret-cyan-400 outline-none"
              />
            </section>
          )}
          <section
            aria-label="HTML editor"
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-background/60"
          >
            <header className="flex items-center gap-2 border-b border-border px-3 py-2">
              <span className="font-mono text-xs text-orange-500">
                {variant === 'css' ? 'index.html' : 'index.html'}
              </span>
              <span className="text-[10px] text-muted-foreground">{lineCountHtml} lines</span>
              <Button
                size="sm"
                onClick={manualRun}
                aria-label="Re-render the preview"
                className="ml-auto gap-1.5"
              >
                <Play className="h-3.5 w-3.5" /> Render
              </Button>
            </header>
            <textarea
              value={html}
              onChange={(e) => {
                setHtml(e.target.value)
                setDirty(true)
              }}
              onKeyDown={makeKeyDown(setHtml)}
              spellCheck={false}
              wrap="off"
              aria-label="HTML code editor. Tab inserts two spaces. Press Control or Command plus Enter to render."
              className={cn(
                'resize-none bg-transparent px-3 py-2 font-mono text-[12.5px] leading-5 text-foreground caret-orange-400 outline-none',
                variant === 'css' ? 'h-[190px]' : 'h-[360px]',
              )}
            />
            <footer className="flex items-center gap-2 border-t border-border px-3 py-1.5 text-[10px] text-muted-foreground">
              <label className="flex cursor-pointer items-center gap-1.5 select-none">
                <input
                  type="checkbox"
                  checked={live}
                  onChange={(e) => setLive(e.target.checked)}
                  className="h-3 w-3 accent-emerald-500"
                />
                live preview (450 ms)
              </label>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => loadPreset(preset)}
                disabled={!dirty}
                className="ml-auto h-6 gap-1 px-2 text-[10px]"
                aria-label="Restore the preset markup"
              >
                <RotateCcw className="h-3 w-3" /> Reset preset
              </Button>
            </footer>
          </section>
        </div>

        {/* preview */}
        <section
          aria-label="Live preview"
          className="flex flex-col overflow-hidden rounded-xl border border-border bg-background/70"
        >
          <header className="flex items-center gap-2 border-b border-border px-3 py-2">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              preview
            </span>
            <span className="ml-auto flex items-center gap-0.5" role="group" aria-label="Preview device width">
              {(
                [
                  ['desktop', Monitor],
                  ['tablet', Tablet],
                  ['phone', Smartphone],
                ] as const
              ).map(([d, Icon]) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDevice(d)}
                  aria-pressed={device === d}
                  aria-label={`${d} width`}
                  className={cn(
                    'rounded-md p-1.5 transition',
                    device === d
                      ? 'bg-muted text-foreground'
                      : 'text-muted-foreground/60 hover:text-foreground',
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </button>
              ))}
            </span>
          </header>
          <div className="flex min-h-[360px] flex-1 justify-center overflow-auto bg-[repeating-conic-gradient(hsl(var(--muted)/0.25)_0%_25%,transparent_0%_50%)] bg-[length:16px_16px] p-3">
            <div
              className={cn(
                'h-full min-h-[336px] overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-[width] duration-300',
                DEVICE_W[device],
                flash && !reduced && 'ring-2 ring-emerald-400/60',
              )}
            >
              <iframe
                title={`${meta.title} live preview`}
                srcDoc={renderDoc}
                sandbox="allow-scripts allow-modals"
                className="h-full min-h-[336px] w-full border-0 bg-white"
              />
            </div>
          </div>
          {flash && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              className="pointer-events-none flex items-center justify-center gap-1.5 border-t border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-300"
            >
              <Loader2 className="h-3 w-3" aria-hidden="true" /> rendered
            </motion.div>
          )}
        </section>
      </div>
    </div>
  )
}
