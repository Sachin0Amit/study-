/**
 * Simverse pairing — maps Knowledge-Universe lesson sections (ids prefixed
 * `ku-`) to the interactive lab that lets learners *play* the lesson's ideas.
 *
 * Master-subject chapters carry their own `interactiveKey`; knowledge-topic
 * chapters don't, so LessonView resolves a paired sim through this map.
 * Keyed by topic id WITHOUT the `ku-` prefix for readability.
 */

const PAIRS: Record<string, string> = {
  // Physical Sciences — chaos & fractals lessons meet their engines
  'phys-chaos-nonlinear-dynamics': 'chaos-lab',
  'phys-fractals-geometry-nature': 'fractal-lab',
  // Life Sciences — evolution, population genetics, immunity
  'bio-evolution-natural-selection': 'evolution-lab',
  'bio-population-genetics': 'evolution-lab',
  'bio-immune-system': 'epidemic-lab',
  // Business & Economics — markets and their failures
  'bus-supply-demand-elasticity': 'econ-lab',
  'econ-market-failures': 'econ-lab',
  // Environment — the carbon cycle and planetary limits
  'env-carbon-sinks-global-carbon-budget': 'climate-lab',
  'env-planetary-boundaries-safe-operating-space': 'climate-lab',
}

/** The Simverse wing — labs paired with Knowledge-Universe lessons. */
export const SIMVERSE_TOOL_KEYS: string[] = [...new Set(Object.values(PAIRS))]

/** Resolve the interactive lab key for a lesson section id (with or without the ku- prefix). */
export function pairedSimForSection(sectionId: string): string | undefined {
  if (PAIRS[sectionId]) return PAIRS[sectionId]
  if (sectionId.startsWith('ku-')) return PAIRS[sectionId.slice(3)]
  return PAIRS[`ku-${sectionId}`]
}
