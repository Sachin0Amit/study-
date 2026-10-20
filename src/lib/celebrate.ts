'use client'

/**
 * X11G — Celebration confetti (fully synthesized, zero assets, zero deps).
 *
 * A tiny physical-ish confetti burst rendered with the Web Animations API:
 * ~56 particles (paper strips, squares and dots) launched from an origin
 * point with randomized angles, spin and drag. Everything self-cleans.
 *
 * Respects prefers-reduced-motion (no-op) and never throws — celebration
 * must not break the app it celebrates.
 */

interface BurstOptions {
  /** viewport origin — defaults to center-bottom third of the screen */
  x?: number
  y?: number
  /** particle count — default 56 */
  count?: number
  /** spread angle in degrees around straight-up — default 70 */
  spread?: number
  /** custom palette — defaults to the StudyVerse festive set */
  colors?: string[]
  /** launch power multiplier — default 1 */
  power?: number
}

const DEFAULT_COLORS = [
  '#34d399', // emerald
  '#fbbf24', // amber
  '#fb7185', // rose
  '#38bdf8', // sky
  '#a78bfa', // violet
  '#facc15', // gold
  '#f4f4f5', // paper white
]

let reducedMotion = false
if (typeof window !== 'undefined' && window.matchMedia) {
  try {
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    /* matchMedia unavailable — celebrate anyway */
  }
}

export function burstConfetti(opts: BurstOptions = {}): void {
  if (typeof document === 'undefined' || reducedMotion) return
  try {
    const count = Math.min(140, Math.max(12, opts.count ?? 56))
    const spread = ((opts.spread ?? 70) * Math.PI) / 180
    const power = opts.power ?? 1
    const x = opts.x ?? window.innerWidth / 2
    const y = opts.y ?? window.innerHeight * 0.62
    const colors = opts.colors?.length ? opts.colors : DEFAULT_COLORS

    const layer = document.createElement('div')
    layer.setAttribute('aria-hidden', 'true')
    layer.style.cssText =
      'position:fixed;inset:0;z-index:200;pointer-events:none;overflow:hidden;'
    document.body.appendChild(layer)

    const maxDist = Math.max(window.innerWidth, window.innerHeight)

    for (let i = 0; i < count; i++) {
      // angle: spread around straight-up, mirrored left/right
      const dir = Math.random() < 0.5 ? -1 : 1
      const angle = -Math.PI / 2 + dir * Math.random() * spread * 0.5 - dir * spread * 0.25
      const speed = (0.55 + Math.random() * 0.45) * power
      const dist = maxDist * (0.28 + 0.34 * speed)
      const dx = Math.cos(angle) * dist * (1.4 + Math.random() * 0.5)
      const dy = Math.sin(angle) * dist * (1.1 + Math.random() * 0.45)

      const p = document.createElement('i')
      const kind = Math.random()
      const size = 5 + Math.random() * 6
      if (kind < 0.45) {
        // paper strip
        p.style.cssText = `display:block;width:${Math.round(size * 0.5)}px;height:${Math.round(size * 1.6)}px;border-radius:2px;`
      } else if (kind < 0.8) {
        // square
        p.style.cssText = `display:block;width:${Math.round(size)}px;height:${Math.round(size)}px;border-radius:2px;`
      } else {
        // dot
        p.style.cssText = `display:block;width:${Math.round(size * 0.7)}px;height:${Math.round(size * 0.7)}px;border-radius:9999px;`
      }
      p.style.position = 'absolute'
      p.style.left = `${x}px`
      p.style.top = `${y}px`
      p.style.background = colors[i % colors.length]
      p.style.opacity = '1'
      p.style.willChange = 'transform, opacity'
      layer.appendChild(p)

      const spin = (Math.random() * 2 - 1) * 720
      const duration = 1400 + Math.random() * 1100
      p.animate(
        [
          { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
          {
            transform: `translate(${dx}px, ${dy + 60}px) rotate(${spin}deg)`,
            opacity: 0.9,
            offset: 0.6,
          },
          {
            transform: `translate(${dx * 1.15}px, ${dy + 240}px) rotate(${spin * 1.6}deg)`,
            opacity: 0,
          },
        ],
        { duration, easing: 'cubic-bezier(.16,.6,.4,1)', fill: 'forwards' }
      )
    }

    setTimeout(() => layer.remove(), 2800)
  } catch {
    /* celebration is best-effort */
  }
}

/* ------------------------------------------------------------------ */
/*  Streak milestone ceremony                                          */
/* ------------------------------------------------------------------ */

/** goal-streak milestones that earn confetti, ascending */
export const STREAK_MILESTONES = [3, 7, 14, 30, 60, 100, 200, 365] as const

const MILESTONE_KEY = 'sv-streak-milestones'

function readCelebrated(): number[] {
  try {
    const raw = localStorage.getItem(MILESTONE_KEY)
    const arr = raw ? (JSON.parse(raw) as unknown) : []
    return Array.isArray(arr) ? arr.filter((n) => typeof n === 'number') : []
  } catch {
    return []
  }
}

/**
 * Fire confetti + return the milestone when the CURRENT goal streak just
 * crossed a new milestone (each milestone celebrates exactly once).
 * Returns null when there is nothing to celebrate.
 */
export function celebrateStreakMilestone(currentStreak: number): number | null {
  if (typeof window === 'undefined') return null
  const hit = STREAK_MILESTONES.filter((m) => currentStreak >= m)
  if (hit.length === 0) return null
  const celebrated = readCelebrated()
  const fresh = hit.filter((m) => !celebrated.includes(m))
  if (fresh.length === 0) return null
  try {
    localStorage.setItem(MILESTONE_KEY, JSON.stringify([...celebrated, ...fresh]))
  } catch {
    /* storage full — may re-celebrate after reload; acceptable */
  }
  burstConfetti({ count: 90, power: 1.15 })
  return fresh[fresh.length - 1]
}

/** test/QA hook — forget every celebrated milestone */
export function resetStreakMilestones(): void {
  try {
    localStorage.removeItem(MILESTONE_KEY)
  } catch {
    /* ignore */
  }
}
