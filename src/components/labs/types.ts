/**
 * Shared types + tiny utilities for the Virtual Laboratory Floor (X5)
 * and the In-Browser Code Judge (X6).
 * Every engine is pure client-side TypeScript — real compute, no fake animations.
 */

export interface LabMeta {
  id: string
  title: string
  /** lucide icon name, resolved by the icon map in labs/index.tsx */
  icon: string
  tagline: string
  subjectHint: string
}

/** Mandatory focus ring across all lab controls (keyboard accessible). */
export const RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60'

/** Compact number formatter for readouts (mono contexts). */
export function fmt(n: number, maxDigits = 3): string {
  if (!Number.isFinite(n)) return '—'
  if (n === 0) return '0'
  const abs = Math.abs(n)
  if (abs >= 1e7 || abs < 1e-3) return n.toExponential(2)
  return String(Number(n.toFixed(maxDigits)))
}

/** Deterministic seeded PRNG (mulberry32) — same trace on every render. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n))
}
