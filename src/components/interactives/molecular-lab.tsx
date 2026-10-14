'use client'

import React, { useState, useMemo, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Boxes,
  RotateCcw,
  Sparkles,
  Layers,
  Compass,
  Zap,
  Info,
  HelpCircle,
  Eye,
  Grid,
  Atom
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import WebGLCrystalMoleculeLab from '@/components/visual/webgl-crystal-molecule-viewer'

interface MoleculePreset {
  id: string
  name: string
  formula: string
  stericNumber: number
  bonds: number
  lonePairs: number
  electronGeometry: string
  molecularGeometry: string
  hybridization: string
  idealAngle: string
  actualAngle: string
  dipole: string
  isPolar: boolean
  centralAtom: { symbol: string; color: string; radius: number }
  ligandAtom: { symbol: string; color: string; radius: number }
  description: string
  // 3D coordinates for bonds (relative unit vectors)
  bondVectors: [number, number, number][]
  lonePairVectors: [number, number, number][]
}

const PRESETS: MoleculePreset[] = [
  {
    id: 'ch4',
    name: 'Methane',
    formula: 'CH₄',
    stericNumber: 4,
    bonds: 4,
    lonePairs: 0,
    electronGeometry: 'Tetrahedral',
    molecularGeometry: 'Tetrahedral',
    hybridization: 'sp³',
    idealAngle: '109.5°',
    actualAngle: '109.5°',
    dipole: '0.00 D',
    isPolar: false,
    centralAtom: { symbol: 'C', color: '#64748b', radius: 22 },
    ligandAtom: { symbol: 'H', color: '#38bdf8', radius: 14 },
    description: 'Perfect tetrahedral symmetry; bond dipoles cancel completely (nonpolar).',
    bondVectors: [
      [0, 1, 0],
      [0.943, -0.333, 0],
      [-0.471, -0.333, 0.816],
      [-0.471, -0.333, -0.816]
    ],
    lonePairVectors: []
  },
  {
    id: 'nh3',
    name: 'Ammonia',
    formula: 'NH₃',
    stericNumber: 4,
    bonds: 3,
    lonePairs: 1,
    electronGeometry: 'Tetrahedral',
    molecularGeometry: 'Trigonal Pyramidal',
    hybridization: 'sp³',
    idealAngle: '109.5°',
    actualAngle: '107.0°',
    dipole: '1.47 D',
    isPolar: true,
    centralAtom: { symbol: 'N', color: '#3b82f6', radius: 22 },
    ligandAtom: { symbol: 'H', color: '#38bdf8', radius: 14 },
    description: 'Lone pair on nitrogen exerts strong LP-BP repulsion, compressing H-N-H angle to 107°.',
    bondVectors: [
      [0.943, -0.333, 0],
      [-0.471, -0.333, 0.816],
      [-0.471, -0.333, -0.816]
    ],
    lonePairVectors: [
      [0, 1, 0]
    ]
  },
  {
    id: 'h2o',
    name: 'Water',
    formula: 'H₂O',
    stericNumber: 4,
    bonds: 2,
    lonePairs: 2,
    electronGeometry: 'Tetrahedral',
    molecularGeometry: 'Bent (V-shaped)',
    hybridization: 'sp³',
    idealAngle: '109.5°',
    actualAngle: '104.5°',
    dipole: '1.85 D',
    isPolar: true,
    centralAtom: { symbol: 'O', color: '#ef4444', radius: 22 },
    ligandAtom: { symbol: 'H', color: '#38bdf8', radius: 14 },
    description: 'Two lone pairs compress H-O-H angle down to 104.5°; high permanent dipole moment.',
    bondVectors: [
      [-0.471, -0.333, 0.816],
      [-0.471, -0.333, -0.816]
    ],
    lonePairVectors: [
      [0, 1, 0],
      [0.943, -0.333, 0]
    ]
  },
  {
    id: 'co2',
    name: 'Carbon Dioxide',
    formula: 'CO₂',
    stericNumber: 2,
    bonds: 2,
    lonePairs: 0,
    electronGeometry: 'Linear',
    molecularGeometry: 'Linear',
    hybridization: 'sp',
    idealAngle: '180°',
    actualAngle: '180°',
    dipole: '0.00 D',
    isPolar: false,
    centralAtom: { symbol: 'C', color: '#64748b', radius: 22 },
    ligandAtom: { symbol: 'O', color: '#ef4444', radius: 18 },
    description: 'Two double bonds point opposite; symmetric linear cancellation yields zero net dipole.',
    bondVectors: [
      [-1, 0, 0],
      [1, 0, 0]
    ],
    lonePairVectors: []
  },
  {
    id: 'bf3',
    name: 'Boron Trifluoride',
    formula: 'BF₃',
    stericNumber: 3,
    bonds: 3,
    lonePairs: 0,
    electronGeometry: 'Trigonal Planar',
    molecularGeometry: 'Trigonal Planar',
    hybridization: 'sp²',
    idealAngle: '120°',
    actualAngle: '120°',
    dipole: '0.00 D',
    isPolar: false,
    centralAtom: { symbol: 'B', color: '#10b981', radius: 22 },
    ligandAtom: { symbol: 'F', color: '#14b8a6', radius: 16 },
    description: 'Electron-deficient Lewis acid with 120° coplanar bond angles.',
    bondVectors: [
      [0, 1, 0],
      [0.866, -0.5, 0],
      [-0.866, -0.5, 0]
    ],
    lonePairVectors: []
  },
  {
    id: 'pcl5',
    name: 'Phosphorus Pentachloride',
    formula: 'PCl₅',
    stericNumber: 5,
    bonds: 5,
    lonePairs: 0,
    electronGeometry: 'Trigonal Bipyramidal',
    molecularGeometry: 'Trigonal Bipyramidal',
    hybridization: 'sp³d',
    idealAngle: '90° & 120°',
    actualAngle: '90° (axial) / 120° (eq)',
    dipole: '0.00 D',
    isPolar: false,
    centralAtom: { symbol: 'P', color: '#f59e0b', radius: 24 },
    ligandAtom: { symbol: 'Cl', color: '#84cc16', radius: 17 },
    description: 'Axial bonds are longer and weaker than equatorial bonds due to greater repulsions.',
    bondVectors: [
      [0, 1, 0], // axial top
      [0, -1, 0], // axial bottom
      [1, 0, 0], // eq 1
      [-0.5, 0, 0.866], // eq 2
      [-0.5, 0, -0.866] // eq 3
    ],
    lonePairVectors: []
  },
  {
    id: 'sf6',
    name: 'Sulfur Hexafluoride',
    formula: 'SF₆',
    stericNumber: 6,
    bonds: 6,
    lonePairs: 0,
    electronGeometry: 'Octahedral',
    molecularGeometry: 'Octahedral',
    hybridization: 'sp³d²',
    idealAngle: '90°',
    actualAngle: '90°',
    dipole: '0.00 D',
    isPolar: false,
    centralAtom: { symbol: 'S', color: '#eab308', radius: 24 },
    ligandAtom: { symbol: 'F', color: '#14b8a6', radius: 16 },
    description: 'Hypervalent octahedral geometry; exceptional kinetic stability and dielectric insulation.',
    bondVectors: [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ],
    lonePairVectors: []
  },
  {
    id: 'xe_f4',
    name: 'Xenon Tetrafluoride',
    formula: 'XeF₄',
    stericNumber: 6,
    bonds: 4,
    lonePairs: 2,
    electronGeometry: 'Octahedral',
    molecularGeometry: 'Square Planar',
    hybridization: 'sp³d²',
    idealAngle: '90°',
    actualAngle: '90°',
    dipole: '0.00 D',
    isPolar: false,
    centralAtom: { symbol: 'Xe', color: '#8b5cf6', radius: 25 },
    ligandAtom: { symbol: 'F', color: '#14b8a6', radius: 16 },
    description: 'The two lone pairs occupy opposite trans-axial positions (180°), creating a flat square.',
    bondVectors: [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ],
    lonePairVectors: [
      [0, 1, 0],
      [0, -1, 0]
    ]
  }
]

export default function MolecularLab() {
  const [mode, setMode] = useState<'webgl_3d' | 'classic_vsepr'>('webgl_3d')
  const [selectedId, setSelectedId] = useState<string>('ch4')
  const [rotX, setRotX] = useState<number>(20)
  const [rotY, setRotY] = useState<number>(35)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const dragStartRef = useRef<{ x: number; y: number; rx: number; ry: number }>({ x: 0, y: 0, rx: 0, ry: 0 })

  const currentMolecule = useMemo(() => {
    return PRESETS.find(m => m.id === selectedId) || PRESETS[0]
  }, [selectedId])

  // Canvas size
  const cw = 440
  const ch = 340
  const bondLength = 100 // px

  // Rotate a 3D point [x, y, z] by rotX and rotY
  const project3D = (vec: [number, number, number]) => {
    const radX = (rotX * Math.PI) / 180
    const radY = (rotY * Math.PI) / 180

    // Rotate around Y
    const x1 = vec[0] * Math.cos(radY) + vec[2] * Math.sin(radY)
    const y1 = vec[1]
    const z1 = -vec[0] * Math.sin(radY) + vec[2] * Math.cos(radY)

    // Rotate around X
    const x2 = x1
    const y2 = y1 * Math.cos(radX) - z1 * Math.sin(radX)
    const z2 = y1 * Math.sin(radX) + z1 * Math.cos(radX)

    // Perspective projection
    const d = 400
    const scale = d / (d + z2 * bondLength)
    const projX = cw / 2 + x2 * bondLength * scale
    const projY = ch / 2 - y2 * bondLength * scale // invert Y for screen coords

    return { x: projX, y: projY, z: z2, scale }
  }

  // Projected bonds and atoms
  const projectedBonds = (() => {
    return currentMolecule.bondVectors.map((vec, i) => {
      const proj = project3D(vec)
      return { id: `bond-${i}`, proj, vec }
    }).sort((a, b) => a.proj.z - b.proj.z) // sort back-to-front
  })()
  // Projected lone pair lobes
  const projectedLonePairs = (() => {
    return currentMolecule.lonePairVectors.map((vec, i) => {
      const proj = project3D(vec)
      return { id: `lp-${i}`, proj, vec }
    })
  })()

  if (mode === 'webgl_3d') {
    return (
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Engine:</span>
            <div className="flex rounded-lg border border-border bg-background/80 p-0.5">
              <button
                onClick={() => setMode('webgl_3d')}
                className="px-2.5 py-1 rounded text-xs font-semibold bg-indigo-600 text-white shadow-xs"
              >
                🧊 WebGL 3D Studio &amp; Crystals
              </button>
              <button
                onClick={() => setMode('classic_vsepr')}
                className="px-2.5 py-1 rounded text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                📐 VSEPR 2D Geometry Chart
              </button>
            </div>
          </div>
        </div>
        <WebGLCrystalMoleculeLab />
      </div>
    )
  }


  // Handle drag rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStartRef.current = { x: e.clientX, y: e.clientY, rx: rotX, ry: rotY }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const dx = e.clientX - dragStartRef.current.x
    const dy = e.clientY - dragStartRef.current.y
    setRotY(dragStartRef.current.ry + dx * 0.7)
    setRotX(dragStartRef.current.rx - dy * 0.7)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Project central atom
  const centerProj = { x: cw / 2, y: ch / 2, z: 0, scale: 1.0 }



  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/80 to-background/95 p-4 md:p-6 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Boxes className="h-5 w-5 animate-pulse" />
          </span>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              VSEPR & Molecular Geometry Explorer
              <Badge variant="outline" className="text-xs border-indigo-500/30 text-indigo-400 bg-indigo-500/10">
                Inorganic & Organic
              </Badge>
            </h3>
            <p className="text-xs text-muted-foreground">
              Interact with 3D molecular geometries, steric numbers, hybridization, and dipole moments.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="default"
            onClick={() => setMode('webgl_3d')}
            className="text-xs h-8 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
          >
            🧊 WebGL 3D Studio
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => { setRotX(20); setRotY(35) }}
            className="text-xs h-8"
          >
            <RotateCcw className="h-3.5 w-3.5 mr-1" /> Reset 3D Angle
          </Button>
        </div>
      </div>

      {/* Preset selector bar */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground mr-1">Select Molecule:</span>
        {PRESETS.map(preset => (
          <Button
            key={preset.id}
            size="sm"
            variant={selectedId === preset.id ? 'default' : 'outline'}
            onClick={() => setSelectedId(preset.id)}
            className="text-xs h-8 font-mono"
          >
            {preset.formula} ({preset.name})
          </Button>
        ))}
      </div>

      {/* Main workspace */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive 3D Canvas (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-border/60 bg-muted/10 p-4">
          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <Compass className="h-4 w-4 text-indigo-400" />
                3D Interactive Space (Click & Drag to Rotate)
              </span>
              <span className="text-[10px] text-muted-foreground font-mono">
                X: {Math.round(rotX)}° · Y: {Math.round(rotY)}°
              </span>
            </div>

            {/* SVG 3D Molecule Viewport */}
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className={`relative rounded-xl border border-border/50 bg-slate-950/70 p-2 overflow-hidden shadow-inner cursor-grab select-none ${
                isDragging ? 'cursor-grabbing' : ''
              }`}
            >
              <svg viewBox={`0 0 ${cw} ${ch}`} className="w-full h-auto">
                {/* Background radial gradient */}
                <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
                <rect x="0" y="0" width={cw} height={ch} fill="url(#bgGlow)" />

                {/* Lone pair lobes (drawn behind central atom) */}
                {projectedLonePairs.map(lp => (
                  <g key={lp.id}>
                    {/* Translucent electron lobe ellipse */}
                    <ellipse
                      cx={lp.proj.x}
                      cy={lp.proj.y}
                      rx={24 * lp.proj.scale}
                      ry={16 * lp.proj.scale}
                      fill="#818cf8"
                      fillOpacity="0.25"
                      stroke="#a5b4fc"
                      strokeWidth="1.5"
                      strokeDasharray="3 2"
                    />
                    {/* Pair of electron dots */}
                    <circle cx={lp.proj.x - 5} cy={lp.proj.y} r="2.5" fill="#c7d2fe" />
                    <circle cx={lp.proj.x + 5} cy={lp.proj.y} r="2.5" fill="#c7d2fe" />
                    <text
                      x={lp.proj.x}
                      y={lp.proj.y - 12}
                      fill="#a5b4fc"
                      fontSize="9"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      : Lone Pair
                    </text>
                  </g>
                ))}

                {/* Back Bonds (z < 0) */}
                {projectedBonds
                  .filter(b => b.proj.z < 0)
                  .map(b => (
                    <line
                      key={b.id}
                      x1={centerProj.x}
                      y1={centerProj.y}
                      x2={b.proj.x}
                      y2={b.proj.y}
                      stroke="#94a3b8"
                      strokeWidth={4 * b.proj.scale}
                      strokeLinecap="round"
                      strokeOpacity="0.7"
                    />
                  ))}

                {/* Central Atom */}
                <circle
                  cx={centerProj.x}
                  cy={centerProj.y}
                  r={currentMolecule.centralAtom.radius}
                  fill={currentMolecule.centralAtom.color}
                  stroke="#ffffff"
                  strokeWidth="2"
                  filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"
                />
                <text
                  x={centerProj.x}
                  y={centerProj.y + 5}
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {currentMolecule.centralAtom.symbol}
                </text>

                {/* Front Bonds (z >= 0) */}
                {projectedBonds
                  .filter(b => b.proj.z >= 0)
                  .map(b => (
                    <line
                      key={b.id}
                      x1={centerProj.x}
                      y1={centerProj.y}
                      x2={b.proj.x}
                      y2={b.proj.y}
                      stroke="#cbd5e1"
                      strokeWidth={5 * b.proj.scale}
                      strokeLinecap="round"
                    />
                  ))}

                {/* Ligand Atoms */}
                {projectedBonds.map(b => (
                  <g key={`ligand-${b.id}`}>
                    <circle
                      cx={b.proj.x}
                      cy={b.proj.y}
                      r={currentMolecule.ligandAtom.radius * b.proj.scale}
                      fill={currentMolecule.ligandAtom.color}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
                    />
                    <text
                      x={b.proj.x}
                      y={b.proj.y + 4 * b.proj.scale}
                      fill="#ffffff"
                      fontSize={10 * b.proj.scale}
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {currentMolecule.ligandAtom.symbol}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Quick tips */}
          <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground bg-muted/20 p-2.5 rounded-lg border border-border/40">
            <span className="flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5 text-indigo-400" />
              Blue dashed lobes represent valence lone pairs of electrons.
            </span>
            <span className="font-mono text-[10px]">VSEPR Theory</span>
          </div>
        </div>

        {/* Right Column: VSEPR Properties & Geometric Data (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-indigo-500/30 bg-card p-5 shadow-lg relative overflow-hidden">
            <div className="flex items-start justify-between border-b border-border/60 pb-3">
              <div>
                <span className="text-2xl font-black text-foreground">{currentMolecule.formula}</span>
                <span className="text-sm font-semibold text-indigo-400 ml-2">({currentMolecule.name})</span>
                <div className="mt-1 flex items-center gap-1.5">
                  <Badge variant="secondary" className="text-[10px] font-mono">
                    SN = {currentMolecule.stericNumber}
                  </Badge>
                  <Badge className="text-[10px] bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    {currentMolecule.hybridization}
                  </Badge>
                </div>
              </div>

              {/* Polarity Badge */}
              <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold border ${
                currentMolecule.isPolar
                  ? 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                  : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
              }`}>
                {currentMolecule.isPolar ? 'Polar (μ > 0)' : 'Non-Polar (μ = 0)'}
              </span>
            </div>

            {/* Geometric Details Table */}
            <div className="mt-4 space-y-2.5 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-border/30">
                <span className="text-muted-foreground">Electron Geometry:</span>
                <span className="font-semibold text-foreground">{currentMolecule.electronGeometry}</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-border/30">
                <span className="text-muted-foreground">Molecular Shape:</span>
                <span className="font-bold text-indigo-400">{currentMolecule.molecularGeometry}</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-border/30">
                <span className="text-muted-foreground">Bonding Pairs / Lone Pairs:</span>
                <span className="font-mono text-foreground font-semibold">
                  {currentMolecule.bonds} BP / {currentMolecule.lonePairs} LP
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-border/30">
                <span className="text-muted-foreground">Ideal Bond Angle:</span>
                <span className="font-mono text-muted-foreground">{currentMolecule.idealAngle}</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-border/30">
                <span className="text-muted-foreground">Actual Observed Angle:</span>
                <span className="font-mono font-bold text-teal-300">{currentMolecule.actualAngle}</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-muted-foreground">Dipole Moment (μ):</span>
                <span className="font-mono font-bold text-foreground">{currentMolecule.dipole}</span>
              </div>
            </div>

            {/* Explanation box */}
            <div className="mt-4 rounded-lg bg-muted/40 p-3 border border-border/40 text-xs">
              <span className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                <HelpCircle className="h-3.5 w-3.5 text-indigo-400" /> VSEPR Mechanism:
              </span>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                {currentMolecule.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
