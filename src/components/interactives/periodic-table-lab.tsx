'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Search,
  Filter,
  Info,
  Layers,
  Zap,
  Maximize2,
  Atom,
  Flame,
  ArrowRight,
  RotateCcw
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'

export interface ElementData {
  z: number
  symbol: string
  name: string
  weight: number
  period: number
  group: number
  category: 'alkali' | 'alkaline-earth' | 'transition' | 'post-transition' | 'metalloid' | 'nonmetal' | 'halogen' | 'noble-gas' | 'lanthanide' | 'actinide'
  block: 's' | 'p' | 'd' | 'f'
  en?: number // Electronegativity
  radius?: number // Atomic radius (pm)
  ie?: number // 1st Ionization energy (kJ/mol)
  config: string
  shells: number[] // electrons in n=1, 2, 3, 4, 5, 6, 7
  state: 'gas' | 'liquid' | 'solid'
  summary: string
}

// Curated comprehensive periodic dataset
export const ELEMENTS: ElementData[] = [
  { z: 1, symbol: 'H', name: 'Hydrogen', weight: 1.008, period: 1, group: 1, category: 'nonmetal', block: 's', en: 2.20, radius: 53, ie: 1312, config: '1s¹', shells: [1], state: 'gas', summary: 'Lightest, most abundant element in the universe; foundational to acid-base chemistry.' },
  { z: 2, symbol: 'He', name: 'Helium', weight: 4.0026, period: 1, group: 18, category: 'noble-gas', block: 's', en: undefined, radius: 31, ie: 2372, config: '1s²', shells: [2], state: 'gas', summary: 'Completely filled 1s shell yields the highest first ionization energy and inertness.' },
  
  { z: 3, symbol: 'Li', name: 'Lithium', weight: 6.94, period: 2, group: 1, category: 'alkali', block: 's', en: 0.98, radius: 167, ie: 520, config: '[He] 2s¹', shells: [2, 1], state: 'solid', summary: 'Lightest alkali metal; standard electrode potential E° = -3.04 V is the most negative.' },
  { z: 4, symbol: 'Be', name: 'Beryllium', weight: 9.0122, period: 2, group: 2, category: 'alkaline-earth', block: 's', en: 1.57, radius: 112, ie: 899, config: '[He] 2s²', shells: [2, 2], state: 'solid', summary: 'High charge density leads to predominantly covalent compounds (e.g. BeCl₂ polymer).' },
  { z: 5, symbol: 'B', name: 'Boron', weight: 10.81, period: 2, group: 13, category: 'metalloid', block: 'p', en: 2.04, radius: 87, ie: 801, config: '[He] 2s² 2p¹', shells: [2, 3], state: 'solid', summary: 'Forms electron-deficient multicenter bonds (3c-2e B-H-B banana bonds in diborane).' },
  { z: 6, symbol: 'C', name: 'Carbon', weight: 12.011, period: 2, group: 14, category: 'nonmetal', block: 'p', en: 2.55, radius: 67, ie: 1086, config: '[He] 2s² 2p²', shells: [2, 4], state: 'solid', summary: 'King of catenation and hybridization (sp³, sp², sp); backbone of all organic molecules.' },
  { z: 7, symbol: 'N', name: 'Nitrogen', weight: 14.007, period: 2, group: 15, category: 'nonmetal', block: 'p', en: 3.04, radius: 56, ie: 1402, config: '[He] 2s² 2p³', shells: [2, 5], state: 'gas', summary: 'Half-filled 2p³ subshell gives extra exchange stabilization and high bond energy in N≡N.' },
  { z: 8, symbol: 'O', name: 'Oxygen', weight: 15.999, period: 2, group: 16, category: 'nonmetal', block: 'p', en: 3.44, radius: 48, ie: 1314, config: '[He] 2s² 2p⁴', shells: [2, 6], state: 'gas', summary: 'Second most electronegative element; forms essential hydrogen bonds and oxides.' },
  { z: 9, symbol: 'F', name: 'Fluorine', weight: 18.998, period: 2, group: 17, category: 'halogen', block: 'p', en: 3.98, radius: 42, ie: 1681, config: '[He] 2s² 2p⁵', shells: [2, 7], state: 'gas', summary: 'Highest electronegativity on Pauling scale (3.98); strongest oxidizing halogen.' },
  { z: 10, symbol: 'Ne', name: 'Neon', weight: 20.180, period: 2, group: 18, category: 'noble-gas', block: 'p', en: undefined, radius: 38, ie: 2081, config: '[He] 2s² 2p⁶', shells: [2, 8], state: 'gas', summary: 'Complete octet; unreactive under ambient conditions, characteristic red-orange emission.' },

  { z: 11, symbol: 'Na', name: 'Sodium', weight: 22.990, period: 3, group: 1, category: 'alkali', block: 's', en: 0.93, radius: 190, ie: 496, config: '[Ne] 3s¹', shells: [2, 8, 1], state: 'solid', summary: 'Easily loses single 3s electron; vigorous reaction with water yielding H₂ gas.' },
  { z: 12, symbol: 'Mg', name: 'Magnesium', weight: 24.305, period: 3, group: 2, category: 'alkaline-earth', block: 's', en: 1.31, radius: 145, ie: 738, config: '[Ne] 3s²', shells: [2, 8, 2], state: 'solid', summary: 'Essential chlorophyll coordinator; central to Grignard organometallic reagents (R-Mg-X).' },
  { z: 13, symbol: 'Al', name: 'Aluminium', weight: 26.982, period: 3, group: 13, category: 'post-transition', block: 'p', en: 1.61, radius: 118, ie: 578, config: '[Ne] 3s² 3p¹', shells: [2, 8, 3], state: 'solid', summary: 'Passivates via resilient Al₂O₃ oxide coat; amphoteric nature in acid and base.' },
  { z: 14, symbol: 'Si', name: 'Silicon', weight: 28.085, period: 3, group: 14, category: 'metalloid', block: 'p', en: 1.90, radius: 111, ie: 786, config: '[Ne] 3s² 3p²', shells: [2, 8, 4], state: 'solid', summary: 'Diamond-cubic semiconductor; foundation of modern microelectronics and silicates.' },
  { z: 15, symbol: 'P', name: 'Phosphorus', weight: 30.974, period: 3, group: 15, category: 'nonmetal', block: 'p', en: 2.19, radius: 98, ie: 1012, config: '[Ne] 3s² 3p³', shells: [2, 8, 5], state: 'solid', summary: 'Multiple allotropes (white P₄, red, black); hypervalent PCl₅ utilizes d-orbitals.' },
  { z: 16, symbol: 'S', name: 'Sulfur', weight: 32.06, period: 3, group: 16, category: 'nonmetal', block: 'p', en: 2.58, radius: 88, ie: 1000, config: '[Ne] 3s² 3p⁴', shells: [2, 8, 6], state: 'solid', summary: 'Forms puckered S₈ rings; variable oxidation numbers -2, +4, +6 (H₂SO₄).' },
  { z: 17, symbol: 'Cl', name: 'Chlorine', weight: 35.45, period: 3, group: 17, category: 'halogen', block: 'p', en: 3.16, radius: 79, ie: 1251, config: '[Ne] 3s² 3p⁵', shells: [2, 8, 7], state: 'gas', summary: 'Highest electron affinity among all elements (-349 kJ/mol), exceeding Fluorine.' },
  { z: 18, symbol: 'Ar', name: 'Argon', weight: 39.948, period: 3, group: 18, category: 'noble-gas', block: 'p', en: undefined, radius: 71, ie: 1521, config: '[Ne] 3s² 3p⁶', shells: [2, 8, 8], state: 'gas', summary: 'Third most abundant atmospheric gas (0.93%); inert shielding gas for chemistry.' },

  { z: 19, symbol: 'K', name: 'Potassium', weight: 39.098, period: 4, group: 1, category: 'alkali', block: 's', en: 0.82, radius: 243, ie: 419, config: '[Ar] 4s¹', shells: [2, 8, 8, 1], state: 'solid', summary: 'Low ionization energy and large cation radius; imparts violet/lilac flame test.' },
  { z: 20, symbol: 'Ca', name: 'Calcium', weight: 40.078, period: 4, group: 2, category: 'alkaline-earth', block: 's', en: 1.00, radius: 194, ie: 590, config: '[Ar] 4s²', shells: [2, 8, 8, 2], state: 'solid', summary: 'Brick-red flame color; forms insoluble carbonates and sulfates (gypsum, CaCO₃).' },
  { z: 21, symbol: 'Sc', name: 'Scandium', weight: 44.956, period: 4, group: 3, category: 'transition', block: 'd', en: 1.36, radius: 184, ie: 633, config: '[Ar] 3d¹ 4s²', shells: [2, 8, 9, 2], state: 'solid', summary: 'First 3d transition metal; exclusively exhibits +3 oxidation state (Sc³⁺ is 3d⁰, colorless).' },
  { z: 22, symbol: 'Ti', name: 'Titanium', weight: 47.867, period: 4, group: 4, category: 'transition', block: 'd', en: 1.54, radius: 176, ie: 659, config: '[Ar] 3d² 4s²', shells: [2, 8, 10, 2], state: 'solid', summary: 'High strength-to-density ratio; TiO₂ used as white pigment; Ziegler-Natta catalysts.' },
  { z: 23, symbol: 'V', name: 'Vanadium', weight: 50.942, period: 4, group: 5, category: 'transition', block: 'd', en: 1.63, radius: 171, ie: 651, config: '[Ar] 3d³ 4s²', shells: [2, 8, 11, 2], state: 'solid', summary: 'Famous four colorful oxidation states in aqueous solution: +2 (purple), +3 (green), +4 (blue), +5 (yellow).' },
  { z: 24, symbol: 'Cr', name: 'Chromium', weight: 51.996, period: 4, group: 6, category: 'transition', block: 'd', en: 1.66, radius: 166, ie: 653, config: '[Ar] 3d⁵ 4s¹', shells: [2, 8, 13, 1], state: 'solid', summary: 'Anomalous electronic configuration 3d⁵ 4s¹ due to half-filled subshell exchange energy.' },
  { z: 25, symbol: 'Mn', name: 'Manganese', weight: 54.938, period: 4, group: 7, category: 'transition', block: 'd', en: 1.55, radius: 161, ie: 717, config: '[Ar] 3d⁵ 4s²', shells: [2, 8, 13, 2], state: 'solid', summary: 'Broadest range of oxidation states from +2 to +7 (KMnO₄, powerful oxidant).' },
  { z: 26, symbol: 'Fe', name: 'Iron', weight: 55.845, period: 4, group: 8, category: 'transition', block: 'd', en: 1.83, radius: 156, ie: 763, config: '[Ar] 3d⁶ 4s²', shells: [2, 8, 14, 2], state: 'solid', summary: 'Ferromagnetic; readily alternates between Fe²⁺ (d⁶) and Fe³⁺ (d⁵); hemoglobin core.' },
  { z: 27, symbol: 'Co', name: 'Cobalt', weight: 58.933, period: 4, group: 9, category: 'transition', block: 'd', en: 1.88, radius: 152, ie: 760, config: '[Ar] 3d⁷ 4s²', shells: [2, 8, 15, 2], state: 'solid', summary: 'Key to Werner coordination chemistry (Co³⁺ ammine complexes) and Vitamin B12.' },
  { z: 28, symbol: 'Ni', name: 'Nickel', weight: 58.693, period: 4, group: 10, category: 'transition', block: 'd', en: 1.91, radius: 149, ie: 737, config: '[Ar] 3d⁸ 4s²', shells: [2, 8, 16, 2], state: 'solid', summary: 'Square planar d⁸ complexes with strong field ligands (e.g. [Ni(CN)₄]²⁻, diamagnetic).' },
  { z: 29, symbol: 'Cu', name: 'Copper', weight: 63.546, period: 4, group: 11, category: 'transition', block: 'd', en: 1.90, radius: 145, ie: 746, config: '[Ar] 3d¹⁰ 4s¹', shells: [2, 8, 18, 1], state: 'solid', summary: 'Full 3d¹⁰ configuration stability; Jahn-Teller distortion prominent in Cu²⁺ (d⁹).' },
  { z: 30, symbol: 'Zn', name: 'Zinc', weight: 65.38, period: 4, group: 12, category: 'transition', block: 'd', en: 1.65, radius: 142, ie: 906, config: '[Ar] 3d¹⁰ 4s²', shells: [2, 8, 18, 2], state: 'solid', summary: 'Filled 3d subshell in neutral atom and ion (Zn²⁺ = 3d¹⁰); non-typical transition element.' },
  { z: 31, symbol: 'Ga', name: 'Gallium', weight: 69.723, period: 4, group: 13, category: 'post-transition', block: 'p', en: 1.81, radius: 136, ie: 579, config: '[Ar] 3d¹⁰ 4s² 4p¹', shells: [2, 8, 18, 3], state: 'solid', summary: 'Melts at 29.8 °C in hand; smaller radius than Al due to poor d-electron shielding.' },
  { z: 32, symbol: 'Ge', name: 'Germanium', weight: 72.630, period: 4, group: 14, category: 'metalloid', block: 'p', en: 2.01, radius: 125, ie: 762, config: '[Ar] 3d¹⁰ 4s² 4p²', shells: [2, 8, 18, 4], state: 'solid', summary: 'Predicted by Mendeleev as "eka-silicon"; essential infrared optical element.' },
  { z: 33, symbol: 'As', name: 'Arsenic', weight: 74.922, period: 4, group: 15, category: 'metalloid', block: 'p', en: 2.18, radius: 114, ie: 947, config: '[Ar] 3d¹⁰ 4s² 4p³', shells: [2, 8, 18, 5], state: 'solid', summary: 'Sublimes at 615 °C; marsh test used for forensic detection; toxic oxoacids.' },
  { z: 34, symbol: 'Se', name: 'Selenium', weight: 78.971, period: 4, group: 16, category: 'nonmetal', block: 'p', en: 2.55, radius: 103, ie: 941, config: '[Ar] 3d¹⁰ 4s² 4p⁴', shells: [2, 8, 18, 6], state: 'solid', summary: 'Photoconductive; incorporated into selenocysteine, the 21st amino acid.' },
  { z: 35, symbol: 'Br', name: 'Bromine', weight: 79.904, period: 4, group: 17, category: 'halogen', block: 'p', en: 2.96, radius: 94, ie: 1140, config: '[Ar] 3d¹⁰ 4s² 4p⁵', shells: [2, 8, 18, 7], state: 'liquid', summary: 'Only liquid nonmetallic element at room temp; dense reddish-brown choking fumes.' },
  { z: 36, symbol: 'Kr', name: 'Krypton', weight: 83.798, period: 4, group: 18, category: 'noble-gas', block: 'p', en: 3.00, radius: 88, ie: 1351, config: '[Ar] 3d¹⁰ 4s² 4p⁶', shells: [2, 8, 18, 8], state: 'gas', summary: 'Capable of forming fluorides like KrF₂ under photochemical stimulation.' },

  { z: 37, symbol: 'Rb', name: 'Rubidium', weight: 85.468, period: 5, group: 1, category: 'alkali', block: 's', en: 0.82, radius: 265, ie: 403, config: '[Kr] 5s¹', shells: [2, 8, 18, 8, 1], state: 'solid', summary: 'Spontaneously ignites in air; used in atomic clocks and laser cooling.' },
  { z: 38, symbol: 'Sr', name: 'Strontium', weight: 87.62, period: 5, group: 2, category: 'alkaline-earth', block: 's', en: 0.95, radius: 219, ie: 550, config: '[Kr] 5s²', shells: [2, 8, 18, 8, 2], state: 'solid', summary: 'Produces brilliant crimson-red fireworks flame; chemical analogue of calcium.' },
  { z: 47, symbol: 'Ag', name: 'Silver', weight: 107.87, period: 5, group: 11, category: 'transition', block: 'd', en: 1.93, radius: 165, ie: 731, config: '[Kr] 4d¹⁰ 5s¹', shells: [2, 8, 18, 18, 1], state: 'solid', summary: 'Highest electrical and thermal conductivity of any metal; halides used in photography.' },
  { z: 53, symbol: 'I', name: 'Iodine', weight: 126.90, period: 5, group: 17, category: 'halogen', block: 'p', en: 2.66, radius: 115, ie: 1008, config: '[Kr] 4d¹⁰ 5s² 5p⁵', shells: [2, 8, 18, 18, 7], state: 'solid', summary: 'Deep purple-black lustrous crystals; sublimes readily into vibrant violet gas.' },
  { z: 54, symbol: 'Xe', name: 'Xenon', weight: 131.29, period: 5, group: 18, category: 'noble-gas', block: 'p', en: 2.60, radius: 108, ie: 1170, config: '[Kr] 4d¹⁰ 5s² 5p⁶', shells: [2, 8, 18, 18, 8], state: 'gas', summary: 'Bartlett synthesized Xe[PtF₆] in 1962, disproving total inertness of noble gases.' },
  { z: 56, symbol: 'Ba', name: 'Barium', weight: 137.33, period: 6, group: 2, category: 'alkaline-earth', block: 's', en: 0.89, radius: 253, ie: 503, config: '[Xe] 6s²', shells: [2, 8, 18, 18, 8, 2], state: 'solid', summary: 'Apple-green flame test; insoluble BaSO₄ used safely as radio-opaque meal.' },
  { z: 78, symbol: 'Pt', name: 'Platinum', weight: 195.08, period: 6, group: 10, category: 'transition', block: 'd', en: 2.28, radius: 177, ie: 870, config: '[Xe] 4f¹⁴ 5d⁹ 6s¹', shells: [2, 8, 18, 32, 17, 1], state: 'solid', summary: 'Noble catalytic metal; cis-platin [Pt(NH₃)₂Cl₂] is a vital chemotherapeutic agent.' },
  { z: 79, symbol: 'Au', name: 'Gold', weight: 196.97, period: 6, group: 11, category: 'transition', block: 'd', en: 2.54, radius: 174, ie: 890, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', shells: [2, 8, 18, 32, 18, 1], state: 'solid', summary: 'Relativistic contraction of 6s orbital yields distinctive golden hue and inertness.' },
  { z: 80, symbol: 'Hg', name: 'Mercury', weight: 200.59, period: 6, group: 12, category: 'transition', block: 'd', en: 2.00, radius: 171, ie: 1007, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', shells: [2, 8, 18, 32, 18, 2], state: 'liquid', summary: 'Only liquid metal at STP; forms amalgams and diatomic Hg₂²⁺ mercurous ions.' },
  { z: 82, symbol: 'Pb', name: 'Lead', weight: 207.2, period: 6, group: 14, category: 'post-transition', block: 'p', en: 2.33, radius: 154, ie: 716, config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', shells: [2, 8, 18, 32, 18, 4], state: 'solid', summary: 'Inert pair effect makes Pb(II) vastly more stable than Pb(IV) (e.g. PbO₂ is oxidant).' },
  { z: 92, symbol: 'U', name: 'Uranium', weight: 238.03, period: 7, group: 3, category: 'actinide', block: 'f', en: 1.38, radius: 196, ie: 598, config: '[Rn] 5f³ 6d¹ 7s²', shells: [2, 8, 18, 32, 21, 9, 2], state: 'solid', summary: 'Fissile heavy actinide; forms stable linear uranyl ions [O=U=O]²⁺ in aqueous media.' }
]

const CATEGORY_COLORS: Record<string, { bg: string, text: string, border: string }> = {
  'alkali': { bg: 'bg-rose-500/15', text: 'text-rose-400', border: 'border-rose-500/40' },
  'alkaline-earth': { bg: 'bg-orange-500/15', text: 'text-orange-400', border: 'border-orange-500/40' },
  'transition': { bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/40' },
  'post-transition': { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/40' },
  'metalloid': { bg: 'bg-teal-500/15', text: 'text-teal-400', border: 'border-teal-500/40' },
  'nonmetal': { bg: 'bg-sky-500/15', text: 'text-sky-400', border: 'border-sky-500/40' },
  'halogen': { bg: 'bg-indigo-500/15', text: 'text-indigo-400', border: 'border-indigo-500/40' },
  'noble-gas': { bg: 'bg-purple-500/15', text: 'text-purple-400', border: 'border-purple-500/40' },
  'lanthanide': { bg: 'bg-pink-500/15', text: 'text-pink-400', border: 'border-pink-500/40' },
  'actinide': { bg: 'bg-red-500/15', text: 'text-red-400', border: 'border-red-500/40' }
}

export default function PeriodicTableLab() {
  const [selectedZ, setSelectedZ] = useState<number>(6) // default Carbon
  const [trendMode, setTrendMode] = useState<'category' | 'en' | 'radius' | 'ie'>('category')
  const [filterBlock, setFilterBlock] = useState<'all' | 's' | 'p' | 'd' | 'f'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const activeElement = useMemo(() => {
    return ELEMENTS.find(e => e.z === selectedZ) || ELEMENTS[0]
  }, [selectedZ])

  // Trend color calculations
  const getTrendStyle = (elem: ElementData) => {
    if (trendMode === 'category') {
      const cat = CATEGORY_COLORS[elem.category] || { bg: 'bg-slate-500/15', text: 'text-slate-300', border: 'border-slate-500/30' }
      return `${cat.bg} ${cat.text} ${cat.border}`
    }
    if (trendMode === 'en') {
      if (!elem.en) return 'bg-slate-800/40 text-slate-500 border-slate-700/30'
      // scale 0.7 to 4.0
      const ratio = Math.min(1, Math.max(0, (elem.en - 0.7) / 3.3))
      if (ratio > 0.75) return 'bg-rose-500/30 text-rose-300 border-rose-500/60 font-bold'
      if (ratio > 0.5) return 'bg-amber-500/25 text-amber-300 border-amber-500/50'
      if (ratio > 0.25) return 'bg-teal-500/20 text-teal-300 border-teal-500/40'
      return 'bg-sky-500/15 text-sky-300 border-sky-500/30'
    }
    if (trendMode === 'radius') {
      if (!elem.radius) return 'bg-slate-800/40 text-slate-500 border-slate-700/30'
      // scale 30 to 270 pm
      const ratio = Math.min(1, Math.max(0, (elem.radius - 30) / 240))
      if (ratio > 0.7) return 'bg-purple-500/30 text-purple-300 border-purple-500/60 font-bold'
      if (ratio > 0.45) return 'bg-indigo-500/25 text-indigo-300 border-indigo-500/50'
      if (ratio > 0.2) return 'bg-blue-500/20 text-blue-300 border-blue-500/40'
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
    }
    if (trendMode === 'ie') {
      if (!elem.ie) return 'bg-slate-800/40 text-slate-500 border-slate-700/30'
      // scale 400 to 2400 kJ/mol
      const ratio = Math.min(1, Math.max(0, (elem.ie - 400) / 2000))
      if (ratio > 0.7) return 'bg-fuchsia-500/30 text-fuchsia-300 border-fuchsia-500/60 font-bold'
      if (ratio > 0.45) return 'bg-cyan-500/25 text-cyan-300 border-cyan-500/50'
      if (ratio > 0.2) return 'bg-teal-500/20 text-teal-300 border-teal-500/40'
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30'
    }
    return 'bg-slate-800/40 text-slate-300 border-slate-700/30'
  }

  // Filtered elements for search/list
  const displayedElements = useMemo(() => {
    return ELEMENTS.filter(e => {
      const matchBlock = filterBlock === 'all' || e.block === filterBlock
      const matchSearch = searchTerm === '' ||
        e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(e.z) === searchTerm
      return matchBlock && matchSearch
    })
  }, [filterBlock, searchTerm])

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/80 to-background/95 p-4 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header bar */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Atom className="h-5 w-5 animate-pulse" />
            </span>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                Periodic Table & Trends Lab
                <Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                  Chemistry Lab
                </Badge>
              </h3>
              <p className="text-xs text-muted-foreground">
                Explore atomic structure, electronic configurations, and periodic periodicity (Z = 1 to 92).
              </p>
            </div>
          </div>
        </div>

        {/* Trend switcher buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground mr-1">Trend Heatmap:</span>
          <Button
            size="sm"
            variant={trendMode === 'category' ? 'default' : 'outline'}
            onClick={() => setTrendMode('category')}
            className="text-xs h-8"
          >
            Categories
          </Button>
          <Button
            size="sm"
            variant={trendMode === 'en' ? 'default' : 'outline'}
            onClick={() => setTrendMode('en')}
            className="text-xs h-8"
          >
            Electronegativity (χ)
          </Button>
          <Button
            size="sm"
            variant={trendMode === 'radius' ? 'default' : 'outline'}
            onClick={() => setTrendMode('radius')}
            className="text-xs h-8"
          >
            Atomic Radius (r)
          </Button>
          <Button
            size="sm"
            variant={trendMode === 'ie' ? 'default' : 'outline'}
            onClick={() => setTrendMode('ie')}
            className="text-xs h-8"
          >
            Ionization Energy (IE)
          </Button>
        </div>
      </div>

      {/* Main interactive grid and inspector */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Periodic Table Grid (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Controls bar: search & block filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-muted/30 p-2.5 rounded-xl border border-border/50 text-xs">
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search symbol, element or Z…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-transparent outline-none placeholder:text-muted-foreground/60 text-xs text-foreground"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="text-muted-foreground hover:text-foreground">
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground text-[11px]">Block:</span>
              {(['all', 's', 'p', 'd', 'f'] as const).map(b => (
                <button
                  key={b}
                  onClick={() => setFilterBlock(b)}
                  className={`px-2 py-0.5 rounded-md uppercase font-semibold text-[10px] transition-all ${
                    filterBlock === b
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Table display */}
          <div className="rounded-xl border border-border/60 bg-muted/10 p-3 overflow-x-auto">
            <div className="min-w-[620px] space-y-2">
              <div className="flex justify-between items-center text-[10px] text-muted-foreground font-mono px-1">
                <span>Group 1 (Alkalis)</span>
                <span>Periodic Blocks: [s-block] · [d-block] · [p-block]</span>
                <span>Group 18 (Noble)</span>
              </div>

              {/* Elements grid */}
              <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
                {displayedElements.map(el => {
                  const isSelected = el.z === selectedZ
                  const styleClass = getTrendStyle(el)
                  return (
                    <motion.button
                      key={el.z}
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setSelectedZ(el.z)}
                      className={`relative flex flex-col items-center justify-center p-2 rounded-lg border text-center transition-all cursor-pointer ${styleClass} ${
                        isSelected
                          ? 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-background shadow-lg scale-105 z-10'
                          : 'opacity-90 hover:opacity-100 hover:shadow-md'
                      }`}
                    >
                      <span className="text-[9px] opacity-70 absolute top-1 left-1.5 font-mono">{el.z}</span>
                      <span className="text-sm font-extrabold tracking-tight mt-1">{el.symbol}</span>
                      <span className="text-[10px] truncate max-w-full font-medium">{el.name}</span>
                      <span className="text-[8px] opacity-60 font-mono mt-0.5">
                        {trendMode === 'en'
                          ? el.en ? `χ ${el.en}` : '—'
                          : trendMode === 'radius'
                          ? el.radius ? `${el.radius} pm` : '—'
                          : trendMode === 'ie'
                          ? el.ie ? `${el.ie} kJ` : '—'
                          : `${el.weight.toFixed(1)}`}
                      </span>
                    </motion.button>
                  )
                })}
              </div>

              {displayedElements.length === 0 && (
                <div className="py-12 text-center text-muted-foreground text-sm">
                  No elements found matching your search.
                </div>
              )}
            </div>
          </div>

          {/* Trend Legend */}
          <div className="flex flex-wrap items-center justify-between text-[11px] text-muted-foreground bg-muted/20 p-2.5 rounded-xl border border-border/40">
            <div className="flex items-center gap-2">
              <Info className="h-3.5 w-3.5 text-emerald-400" />
              <span>
                {trendMode === 'category' && 'Colors indicate chemical families and elemental series.'}
                {trendMode === 'en' && 'Pauling Electronegativity increases up and right across the periodic table.'}
                {trendMode === 'radius' && 'Atomic radius decreases across a period (effective nuclear charge Z_eff increases) and grows down a group.'}
                {trendMode === 'ie' && 'First ionization energy peaks at noble gases with stable octets; lowest at alkali metals.'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px]">
              <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">Low</span>
              <span>→</span>
              <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300">High</span>
            </div>
          </div>
        </div>

        {/* Right Column: Element Inspector Card & Live Bohr Shell Animator (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="rounded-xl border border-emerald-500/30 bg-card p-5 shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

            {/* Element Big Badge */}
            <div className="flex items-start justify-between border-b border-border/60 pb-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black tracking-tight text-foreground">{activeElement.symbol}</span>
                  <span className="text-sm font-semibold text-emerald-400">{activeElement.name}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-[10px] uppercase font-mono">
                    Z = {activeElement.z}
                  </Badge>
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {activeElement.weight} u
                  </Badge>
                  <Badge className="text-[10px] capitalize bg-muted text-muted-foreground">
                    {activeElement.category.replace('-', ' ')}
                  </Badge>
                </div>
              </div>

              {/* State pill */}
              <span className="px-2 py-1 rounded-md text-[10px] uppercase font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {activeElement.state}
              </span>
            </div>

            {/* Interactive Bohr Orbital Shell Diagram */}
            <div className="py-4 flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center h-48 w-48">
                {/* Nucleus */}
                <div className="z-10 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-lg text-[10px] font-bold">
                  <span>+{activeElement.z}</span>
                </div>

                {/* Animated Bohr electron shells */}
                {activeElement.shells.map((count, idx) => {
                  const radius = 28 + (idx + 1) * 16 // shell radius
                  const duration = 4 + idx * 2
                  return (
                    <div
                      key={idx}
                      className="absolute rounded-full border border-dashed border-emerald-500/25 pointer-events-none"
                      style={{
                        width: radius * 2,
                        height: radius * 2,
                      }}
                    >
                      {/* Orbiting electrons */}
                      {Array.from({ length: Math.min(count, 8) }).map((_, eIdx) => {
                        const angle = (eIdx / Math.min(count, 8)) * 2 * Math.PI
                        const x = Math.cos(angle) * radius
                        const y = Math.sin(angle) * radius
                        return (
                          <motion.div
                            key={eIdx}
                            animate={{ rotate: 360 }}
                            transition={{
                              duration,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="absolute top-1/2 left-1/2 h-2 w-2 -mt-1 -ml-1 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/80"
                            style={{
                              transformOrigin: '0 0',
                              transform: `translate(${x}px, ${y}px)`,
                            }}
                          />
                        )
                      })}
                    </div>
                  )
                })}
              </div>

              <div className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1.5 font-mono">
                <span>Shells (n=1..{activeElement.shells.length}):</span>
                <span className="font-semibold text-emerald-400">
                  {activeElement.shells.join(', ')}
                </span>
                <span className="text-[10px] opacity-70">({activeElement.shells.reduce((a, b) => a + b, 0)} e⁻)</span>
              </div>
            </div>

            {/* Electronic configuration */}
            <div className="rounded-lg bg-muted/40 p-3 border border-border/50 space-y-1.5 text-xs">
              <div className="flex justify-between items-center text-muted-foreground">
                <span className="font-medium">Electron Configuration:</span>
                <span className="font-mono font-bold text-foreground">{activeElement.config}</span>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span className="font-medium">Block & Group:</span>
                <span className="font-mono">{activeElement.block.toUpperCase()}-block · Grp {activeElement.group} · Prd {activeElement.period}</span>
              </div>
            </div>

            {/* Properties breakdown */}
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Electronegativity:</span>
                <span className="font-semibold font-mono text-foreground">
                  {activeElement.en !== undefined ? `${activeElement.en} (Pauling)` : 'Not determined'}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                  style={{ width: `${activeElement.en ? (activeElement.en / 4.0) * 100 : 0}%` }}
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-muted-foreground">Atomic Radius:</span>
                <span className="font-semibold font-mono text-foreground">
                  {activeElement.radius ? `${activeElement.radius} pm` : '—'}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
                  style={{ width: `${activeElement.radius ? (activeElement.radius / 265) * 100 : 0}%` }}
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-muted-foreground">1st Ionization Energy:</span>
                <span className="font-semibold font-mono text-foreground">
                  {activeElement.ie ? `${activeElement.ie} kJ/mol` : '—'}
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-rose-400 rounded-full"
                  style={{ width: `${activeElement.ie ? (activeElement.ie / 2400) * 100 : 0}%` }}
                />
              </div>
            </div>

            {/* Summary note */}
            <p className="mt-4 text-xs text-muted-foreground italic border-t border-border/40 pt-3 leading-relaxed">
              "{activeElement.summary}"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
