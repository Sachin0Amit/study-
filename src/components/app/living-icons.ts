'use client'

/**
 * Shared icon registry for the Knowledge Universe domains.
 * Kept in its own module (no data imports) so the lightweight icon map can be
 * shared between the lazy universe catalog and the living domain/topic pages
 * without pulling the topic dataset into every chunk that needs an icon.
 */

import {
  Atom,
  BookOpen,
  Coffee,
  Cog,
  Cpu,
  Dna,
  HeartPulse,
  Landmark,
  Languages,
  Leaf,
  Palette,
  Rocket,
  Scale,
  Sigma,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'

export const LIVING_DOMAIN_ICONS: Record<string, typeof Atom> = {
  'Foundation Learning': BookOpen,
  'Physical Sciences': Atom,
  'Life Sciences': Dna,
  Mathematics: Sigma,
  'Environment & Sustainability': Leaf,
  'Computing & AI': Cpu,
  Engineering: Cog,
  'Technology & Applied Science': Rocket,
  'Social Sciences': Users,
  Humanities: Landmark,
  'Languages & World Literature': Languages,
  'Law & Governance': Scale,
  'Business & Economics': TrendingUp,
  'Health & Wellness': HeartPulse,
  'Arts & Culture': Palette,
  'Everyday Knowledge': Coffee,
  'Emerging & Interdisciplinary': Sparkles,
}
