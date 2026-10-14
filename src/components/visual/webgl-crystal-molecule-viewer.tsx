'use client'

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Boxes,
  RotateCcw,
  Sparkles,
  Layers,
  Compass,
  Zap,
  Info,
  Eye,
  Maximize2,
  Minimize2,
  Slice,
  Grid,
  Atom,
  HelpCircle,
  Play,
  Pause,
  Download,
  Crosshair,
  Sliders
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* =====================================================================
   WebGL 3D Interactive Molecule & Crystal Lattice Viewer
   Pure native WebGL 3D engine with Phong specular shading, orbit camera,
   ball-and-stick/space-filling modes, crystallographic Miller slicing planes,
   and quantum atomic orbital isosurfaces.
   ===================================================================== */

// --- 3D Matrix & Vector Mathematics ---
type Vec3 = [number, number, number]
type Mat4 = Float32Array

const vec3 = {
  create: (x = 0, y = 0, z = 0): Vec3 => [x, y, z],
  add: (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
  sub: (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
  scale: (v: Vec3, s: number): Vec3 => [v[0] * s, v[1] * s, v[2] * s],
  dot: (a: Vec3, b: Vec3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
  cross: (a: Vec3, b: Vec3): Vec3 => [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ],
  len: (v: Vec3): number => Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]),
  norm: (v: Vec3): Vec3 => {
    const l = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2])
    return l > 1e-6 ? [v[0] / l, v[1] / l, v[2] / l] : [0, 0, 0]
  },
  dist: (a: Vec3, b: Vec3): number => {
    const dx = a[0] - b[0]
    const dy = a[1] - b[1]
    const dz = a[2] - b[2]
    return Math.sqrt(dx * dx + dy * dy + dz * dz)
  }
}

const mat4 = {
  create: (): Mat4 => new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]),
  perspective: (out: Mat4, fovy: number, aspect: number, near: number, far: number): Mat4 => {
    const f = 1.0 / Math.tan(fovy / 2)
    const nf = 1 / (near - far)
    out[0] = f / aspect
    out[1] = 0
    out[2] = 0
    out[3] = 0
    out[4] = 0
    out[5] = f
    out[6] = 0
    out[7] = 0
    out[8] = 0
    out[9] = 0
    out[10] = (far + near) * nf
    out[11] = -1
    out[12] = 0
    out[13] = 0
    out[14] = 2 * far * near * nf
    out[15] = 0
    return out
  },
  lookAt: (out: Mat4, eye: Vec3, center: Vec3, up: Vec3): Mat4 => {
    const z0 = eye[0] - center[0]
    const z1 = eye[1] - center[1]
    const z2 = eye[2] - center[2]
    let len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2)
    const zx = z0 * len, zy = z1 * len, zz = z2 * len

    const x0 = up[1] * zz - up[2] * zy
    const x1 = up[2] * zx - up[0] * zz
    const x2 = up[0] * zy - up[1] * zx
    len = 1 / Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2)
    const xx = x0 * len, xy = x1 * len, xz = x2 * len

    const yx = zy * xz - zz * xy
    const yy = zz * xx - zx * xz
    const yz = zx * xy - zy * xx

    out[0] = xx; out[1] = yx; out[2] = zx; out[3] = 0
    out[4] = xy; out[5] = yy; out[6] = zy; out[7] = 0
    out[8] = xz; out[9] = yz; out[10] = zz; out[11] = 0
    out[12] = -(xx * eye[0] + xy * eye[1] + xz * eye[2])
    out[13] = -(yx * eye[0] + yy * eye[1] + yz * eye[2])
    out[14] = -(zx * eye[0] + zy * eye[1] + zz * eye[2])
    out[15] = 1
    return out
  },
  multiply: (out: Mat4, a: Mat4, b: Mat4): Mat4 => {
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3]
    const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7]
    const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11]
    const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]

    for (let i = 0; i < 4; i++) {
      const b0 = b[i * 4], b1 = b[i * 4 + 1], b2 = b[i * 4 + 2], b3 = b[i * 4 + 3]
      out[i * 4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30
      out[i * 4 + 1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31
      out[i * 4 + 2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32
      out[i * 4 + 3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33
    }
    return out
  }
}

// --- Data Models ---
export interface Atom3D {
  id: string
  symbol: string
  name: string
  pos: Vec3
  color: [number, number, number] // normalized RGB 0..1
  vdwRadius: number // Angstroms
  covalentRadius: number
  charge?: string
}

export interface Bond3D {
  id: string
  sourceIdx: number
  targetIdx: number
  order: 1 | 2 | 3
}

export interface MoleculeModel {
  id: string
  name: string
  formula: string
  category: 'simple' | 'organic' | 'vsepr' | 'biomolecule'
  geometry: string
  hybridization: string
  dipoleDebye: number
  dipoleVector?: Vec3
  description: string
  atoms: Atom3D[]
  bonds: Bond3D[]
}

export interface CrystalLatticeModel {
  id: string
  name: string
  system: string
  latticeConstantA: number // Angstroms
  coordinationNumber: number
  atomicPackingFactor: number
  atomsPerUnitCell: number
  description: string
  examples: string[]
  // Base atoms in standard unit cell (positions in fraction 0..1)
  atoms: { symbol: string; frac: Vec3; color: [number, number, number]; radius: number }[]
}

export interface OrbitalModel {
  id: string
  name: string
  formula: string
  quantumN: number
  quantumL: number
  quantumM: number
  description: string
  type: 's' | 'p' | 'd' | 'hybrid'
}

// --- Standard CPK Color Palette (normalized 0..1) ---
const CPK_COLORS: Record<string, [number, number, number]> = {
  H: [0.94, 0.94, 0.96],
  C: [0.32, 0.35, 0.40],
  N: [0.20, 0.45, 0.95],
  O: [0.92, 0.22, 0.22],
  F: [0.20, 0.85, 0.65],
  Cl: [0.15, 0.80, 0.30],
  Br: [0.65, 0.20, 0.15],
  I: [0.55, 0.15, 0.60],
  P: [1.0, 0.55, 0.05],
  S: [0.95, 0.85, 0.15],
  B: [0.10, 0.75, 0.55],
  Na: [0.68, 0.36, 0.92],
  K: [0.55, 0.25, 0.85],
  Fe: [0.88, 0.50, 0.20],
  Cu: [0.78, 0.45, 0.20],
  Zn: [0.45, 0.55, 0.65],
  Xe: [0.30, 0.65, 0.80],
  Cs: [0.45, 0.20, 0.70]
}

// --- Curated 3D Molecular Presets ---
export const MOLECULE_PRESETS: MoleculeModel[] = [
  {
    id: 'h2o',
    name: 'Water',
    formula: 'H₂O',
    category: 'vsepr',
    geometry: 'Bent (104.5°)',
    hybridization: 'sp³',
    dipoleDebye: 1.85,
    dipoleVector: [0, 0.85, 0],
    description: 'Two lone pairs compress H-O-H angle from 109.5° to 104.5°. Strong permanent dipole drives hydrogen bonding.',
    atoms: [
      { id: 'O1', symbol: 'O', name: 'Oxygen', pos: [0, 0.12, 0], color: CPK_COLORS.O, vdwRadius: 1.52, covalentRadius: 0.66 },
      { id: 'H1', symbol: 'H', name: 'Hydrogen', pos: [-0.76, -0.47, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H2', symbol: 'H', name: 'Hydrogen', pos: [0.76, -0.47, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 }
    ],
    bonds: [
      { id: 'b1', sourceIdx: 0, targetIdx: 1, order: 1 },
      { id: 'b2', sourceIdx: 0, targetIdx: 2, order: 1 }
    ]
  },
  {
    id: 'ch4',
    name: 'Methane',
    formula: 'CH₄',
    category: 'vsepr',
    geometry: 'Tetrahedral (109.5°)',
    hybridization: 'sp³',
    dipoleDebye: 0.00,
    dipoleVector: [0, 0, 0],
    description: 'Regular tetrahedron with ideal 109.5° bond angles. Bond polarities cancel completely yielding zero net dipole.',
    atoms: [
      { id: 'C1', symbol: 'C', name: 'Carbon', pos: [0, 0, 0], color: CPK_COLORS.C, vdwRadius: 1.70, covalentRadius: 0.76 },
      { id: 'H1', symbol: 'H', name: 'Hydrogen', pos: [0, 1.09, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H2', symbol: 'H', name: 'Hydrogen', pos: [1.03, -0.36, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H3', symbol: 'H', name: 'Hydrogen', pos: [-0.51, -0.36, 0.89], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H4', symbol: 'H', name: 'Hydrogen', pos: [-0.51, -0.36, -0.89], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 }
    ],
    bonds: [
      { id: 'b1', sourceIdx: 0, targetIdx: 1, order: 1 },
      { id: 'b2', sourceIdx: 0, targetIdx: 2, order: 1 },
      { id: 'b3', sourceIdx: 0, targetIdx: 3, order: 1 },
      { id: 'b4', sourceIdx: 0, targetIdx: 4, order: 1 }
    ]
  },
  {
    id: 'nh3',
    name: 'Ammonia',
    formula: 'NH₃',
    category: 'vsepr',
    geometry: 'Trigonal Pyramidal (107.0°)',
    hybridization: 'sp³',
    dipoleDebye: 1.47,
    dipoleVector: [0, 0.7, 0],
    description: 'One lone pair on nitrogen repels bonding pairs more strongly than BP-BP, compressing bond angles to 107.0°.',
    atoms: [
      { id: 'N1', symbol: 'N', name: 'Nitrogen', pos: [0, 0.22, 0], color: CPK_COLORS.N, vdwRadius: 1.55, covalentRadius: 0.71 },
      { id: 'H1', symbol: 'H', name: 'Hydrogen', pos: [0.94, -0.25, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H2', symbol: 'H', name: 'Hydrogen', pos: [-0.47, -0.25, 0.81], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H3', symbol: 'H', name: 'Hydrogen', pos: [-0.47, -0.25, -0.81], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 }
    ],
    bonds: [
      { id: 'b1', sourceIdx: 0, targetIdx: 1, order: 1 },
      { id: 'b2', sourceIdx: 0, targetIdx: 2, order: 1 },
      { id: 'b3', sourceIdx: 0, targetIdx: 3, order: 1 }
    ]
  },
  {
    id: 'co2',
    name: 'Carbon Dioxide',
    formula: 'CO₂',
    category: 'vsepr',
    geometry: 'Linear (180°)',
    hybridization: 'sp',
    dipoleDebye: 0.00,
    dipoleVector: [0, 0, 0],
    description: 'Central carbon forms two double bonds oriented 180° apart. Equal and opposing bond dipoles cancel completely.',
    atoms: [
      { id: 'C1', symbol: 'C', name: 'Carbon', pos: [0, 0, 0], color: CPK_COLORS.C, vdwRadius: 1.70, covalentRadius: 0.76 },
      { id: 'O1', symbol: 'O', name: 'Oxygen', pos: [-1.16, 0, 0], color: CPK_COLORS.O, vdwRadius: 1.52, covalentRadius: 0.66 },
      { id: 'O2', symbol: 'O', name: 'Oxygen', pos: [1.16, 0, 0], color: CPK_COLORS.O, vdwRadius: 1.52, covalentRadius: 0.66 }
    ],
    bonds: [
      { id: 'b1', sourceIdx: 0, targetIdx: 1, order: 2 },
      { id: 'b2', sourceIdx: 0, targetIdx: 2, order: 2 }
    ]
  },
  {
    id: 'c6h6',
    name: 'Benzene',
    formula: 'C₆H₆',
    category: 'organic',
    geometry: 'Planar Hexagonal (120°)',
    hybridization: 'sp²',
    dipoleDebye: 0.00,
    dipoleVector: [0, 0, 0],
    description: 'Aromatic standard: 6 delocalized π-electrons distributed symmetrically over a planar regular hexagon (C-C 1.40 Å).',
    atoms: [
      { id: 'C1', symbol: 'C', name: 'Carbon', pos: [1.39, 0, 0], color: CPK_COLORS.C, vdwRadius: 1.70, covalentRadius: 0.76 },
      { id: 'C2', symbol: 'C', name: 'Carbon', pos: [0.695, 1.204, 0], color: CPK_COLORS.C, vdwRadius: 1.70, covalentRadius: 0.76 },
      { id: 'C3', symbol: 'C', name: 'Carbon', pos: [-0.695, 1.204, 0], color: CPK_COLORS.C, vdwRadius: 1.70, covalentRadius: 0.76 },
      { id: 'C4', symbol: 'C', name: 'Carbon', pos: [-1.39, 0, 0], color: CPK_COLORS.C, vdwRadius: 1.70, covalentRadius: 0.76 },
      { id: 'C5', symbol: 'C', name: 'Carbon', pos: [-0.695, -1.204, 0], color: CPK_COLORS.C, vdwRadius: 1.70, covalentRadius: 0.76 },
      { id: 'C6', symbol: 'C', name: 'Carbon', pos: [0.695, -1.204, 0], color: CPK_COLORS.C, vdwRadius: 1.70, covalentRadius: 0.76 },
      { id: 'H1', symbol: 'H', name: 'Hydrogen', pos: [2.48, 0, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H2', symbol: 'H', name: 'Hydrogen', pos: [1.24, 2.15, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H3', symbol: 'H', name: 'Hydrogen', pos: [-1.24, 2.15, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H4', symbol: 'H', name: 'Hydrogen', pos: [-2.48, 0, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H5', symbol: 'H', name: 'Hydrogen', pos: [-1.24, -2.15, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H6', symbol: 'H', name: 'Hydrogen', pos: [1.24, -2.15, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 }
    ],
    bonds: [
      { id: 'b1', sourceIdx: 0, targetIdx: 1, order: 2 },
      { id: 'b2', sourceIdx: 1, targetIdx: 2, order: 1 },
      { id: 'b3', sourceIdx: 2, targetIdx: 3, order: 2 },
      { id: 'b4', sourceIdx: 3, targetIdx: 4, order: 1 },
      { id: 'b5', sourceIdx: 4, targetIdx: 5, order: 2 },
      { id: 'b6', sourceIdx: 5, targetIdx: 0, order: 1 },
      { id: 'b7', sourceIdx: 0, targetIdx: 6, order: 1 },
      { id: 'b8', sourceIdx: 1, targetIdx: 7, order: 1 },
      { id: 'b9', sourceIdx: 2, targetIdx: 8, order: 1 },
      { id: 'b10', sourceIdx: 3, targetIdx: 9, order: 1 },
      { id: 'b11', sourceIdx: 4, targetIdx: 10, order: 1 },
      { id: 'b12', sourceIdx: 5, targetIdx: 11, order: 1 }
    ]
  },
  {
    id: 'sf6',
    name: 'Sulfur Hexafluoride',
    formula: 'SF₆',
    category: 'vsepr',
    geometry: 'Octahedral (90°)',
    hybridization: 'sp³d²',
    dipoleDebye: 0.00,
    dipoleVector: [0, 0, 0],
    description: 'Steric number 6 with six equivalent sulfur-fluorine bonds arranged at 90° octahedral vertices. Nonpolar and extremely inert.',
    atoms: [
      { id: 'S1', symbol: 'S', name: 'Sulfur', pos: [0, 0, 0], color: CPK_COLORS.S, vdwRadius: 1.80, covalentRadius: 1.02 },
      { id: 'F1', symbol: 'F', name: 'Fluorine', pos: [0, 1.56, 0], color: CPK_COLORS.F, vdwRadius: 1.47, covalentRadius: 0.57 },
      { id: 'F2', symbol: 'F', name: 'Fluorine', pos: [0, -1.56, 0], color: CPK_COLORS.F, vdwRadius: 1.47, covalentRadius: 0.57 },
      { id: 'F3', symbol: 'F', name: 'Fluorine', pos: [1.56, 0, 0], color: CPK_COLORS.F, vdwRadius: 1.47, covalentRadius: 0.57 },
      { id: 'F4', symbol: 'F', name: 'Fluorine', pos: [-1.56, 0, 0], color: CPK_COLORS.F, vdwRadius: 1.47, covalentRadius: 0.57 },
      { id: 'F5', symbol: 'F', name: 'Fluorine', pos: [0, 0, 1.56], color: CPK_COLORS.F, vdwRadius: 1.47, covalentRadius: 0.57 },
      { id: 'F6', symbol: 'F', name: 'Fluorine', pos: [0, 0, -1.56], color: CPK_COLORS.F, vdwRadius: 1.47, covalentRadius: 0.57 }
    ],
    bonds: [
      { id: 'b1', sourceIdx: 0, targetIdx: 1, order: 1 },
      { id: 'b2', sourceIdx: 0, targetIdx: 2, order: 1 },
      { id: 'b3', sourceIdx: 0, targetIdx: 3, order: 1 },
      { id: 'b4', sourceIdx: 0, targetIdx: 4, order: 1 },
      { id: 'b5', sourceIdx: 0, targetIdx: 5, order: 1 },
      { id: 'b6', sourceIdx: 0, targetIdx: 6, order: 1 }
    ]
  },
  {
    id: 'pcl5',
    name: 'Phosphorus Pentachloride',
    formula: 'PCl₅',
    category: 'vsepr',
    geometry: 'Trigonal Bipyramidal',
    hybridization: 'sp³d',
    dipoleDebye: 0.00,
    dipoleVector: [0, 0, 0],
    description: 'Steric number 5: 3 equatorial bonds at 120° (2.02 Å) and 2 axial bonds at 90° (2.14 Å). Axial bonds are longer due to greater repulsion.',
    atoms: [
      { id: 'P1', symbol: 'P', name: 'Phosphorus', pos: [0, 0, 0], color: CPK_COLORS.P, vdwRadius: 1.80, covalentRadius: 1.06 },
      { id: 'Cl1', symbol: 'Cl', name: 'Chlorine', pos: [0, 2.14, 0], color: CPK_COLORS.Cl, vdwRadius: 1.75, covalentRadius: 1.02 },
      { id: 'Cl2', symbol: 'Cl', name: 'Chlorine', pos: [0, -2.14, 0], color: CPK_COLORS.Cl, vdwRadius: 1.75, covalentRadius: 1.02 },
      { id: 'Cl3', symbol: 'Cl', name: 'Chlorine', pos: [2.02, 0, 0], color: CPK_COLORS.Cl, vdwRadius: 1.75, covalentRadius: 1.02 },
      { id: 'Cl4', symbol: 'Cl', name: 'Chlorine', pos: [-1.01, 0, 1.75], color: CPK_COLORS.Cl, vdwRadius: 1.75, covalentRadius: 1.02 },
      { id: 'Cl5', symbol: 'Cl', name: 'Chlorine', pos: [-1.01, 0, -1.75], color: CPK_COLORS.Cl, vdwRadius: 1.75, covalentRadius: 1.02 }
    ],
    bonds: [
      { id: 'b1', sourceIdx: 0, targetIdx: 1, order: 1 },
      { id: 'b2', sourceIdx: 0, targetIdx: 2, order: 1 },
      { id: 'b3', sourceIdx: 0, targetIdx: 3, order: 1 },
      { id: 'b4', sourceIdx: 0, targetIdx: 4, order: 1 },
      { id: 'b5', sourceIdx: 0, targetIdx: 5, order: 1 }
    ]
  },
  {
    id: 'c2h5oh',
    name: 'Ethanol',
    formula: 'C₂H₅OH',
    category: 'organic',
    geometry: 'Tetrahedral / Bent',
    hybridization: 'sp³',
    dipoleDebye: 1.69,
    dipoleVector: [0.6, 0.7, 0.2],
    description: 'Alcohol functional group with bent C-O-H geometry (108.5°). Polar hydroxyl group enables extensive hydrogen bonding.',
    atoms: [
      { id: 'C1', symbol: 'C', name: 'Carbon', pos: [-1.15, 0, 0], color: CPK_COLORS.C, vdwRadius: 1.70, covalentRadius: 0.76 },
      { id: 'C2', symbol: 'C', name: 'Carbon', pos: [0.35, 0, 0], color: CPK_COLORS.C, vdwRadius: 1.70, covalentRadius: 0.76 },
      { id: 'O1', symbol: 'O', name: 'Oxygen', pos: [0.85, 1.25, 0], color: CPK_COLORS.O, vdwRadius: 1.52, covalentRadius: 0.66 },
      { id: 'H_O', symbol: 'H', name: 'Hydrogen', pos: [1.81, 1.25, 0], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H1', symbol: 'H', name: 'Hydrogen', pos: [-1.55, 0.95, 0.35], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H2', symbol: 'H', name: 'Hydrogen', pos: [-1.55, -0.80, 0.55], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H3', symbol: 'H', name: 'Hydrogen', pos: [-1.55, -0.15, -1.02], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H4', symbol: 'H', name: 'Hydrogen', pos: [0.72, -0.55, 0.88], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 },
      { id: 'H5', symbol: 'H', name: 'Hydrogen', pos: [0.72, -0.55, -0.88], color: CPK_COLORS.H, vdwRadius: 1.20, covalentRadius: 0.31 }
    ],
    bonds: [
      { id: 'b1', sourceIdx: 0, targetIdx: 1, order: 1 },
      { id: 'b2', sourceIdx: 1, targetIdx: 2, order: 1 },
      { id: 'b3', sourceIdx: 2, targetIdx: 3, order: 1 },
      { id: 'b4', sourceIdx: 0, targetIdx: 4, order: 1 },
      { id: 'b5', sourceIdx: 0, targetIdx: 5, order: 1 },
      { id: 'b6', sourceIdx: 0, targetIdx: 6, order: 1 },
      { id: 'b7', sourceIdx: 1, targetIdx: 7, order: 1 },
      { id: 'b8', sourceIdx: 1, targetIdx: 8, order: 1 }
    ]
  }
]

// --- Curated Crystal Lattice Presets (Solid State Physics & Chemistry) ---
export const CRYSTAL_PRESETS: CrystalLatticeModel[] = [
  {
    id: 'sc',
    name: 'Simple Cubic (SC)',
    system: 'Cubic Primitive (cP)',
    latticeConstantA: 3.60,
    coordinationNumber: 6,
    atomicPackingFactor: 0.524,
    atomsPerUnitCell: 1,
    description: 'Atoms sit exclusively at the 8 corners of the cube. Each corner contributes 1/8 to the unit cell (8 × 1/8 = 1 atom). Lowest packing density among cubic lattices.',
    examples: ['α-Polonium (Po)'],
    atoms: [
      { symbol: 'Po', frac: [0, 0, 0], color: [0.45, 0.70, 0.90], radius: 0.50 },
      { symbol: 'Po', frac: [1, 0, 0], color: [0.45, 0.70, 0.90], radius: 0.50 },
      { symbol: 'Po', frac: [0, 1, 0], color: [0.45, 0.70, 0.90], radius: 0.50 },
      { symbol: 'Po', frac: [1, 1, 0], color: [0.45, 0.70, 0.90], radius: 0.50 },
      { symbol: 'Po', frac: [0, 0, 1], color: [0.45, 0.70, 0.90], radius: 0.50 },
      { symbol: 'Po', frac: [1, 0, 1], color: [0.45, 0.70, 0.90], radius: 0.50 },
      { symbol: 'Po', frac: [0, 1, 1], color: [0.45, 0.70, 0.90], radius: 0.50 },
      { symbol: 'Po', frac: [1, 1, 1], color: [0.45, 0.70, 0.90], radius: 0.50 }
    ]
  },
  {
    id: 'bcc',
    name: 'Body-Centered Cubic (BCC)',
    system: 'Cubic Body-Centered (cI)',
    latticeConstantA: 2.87,
    coordinationNumber: 8,
    atomicPackingFactor: 0.680,
    atomsPerUnitCell: 2,
    description: '8 corners (8 × 1/8 = 1) plus 1 full atom at the body center (1 × 1 = 1) = 2 atoms per cell. Body diagonal touches: 4r = √3 a.',
    examples: ['α-Iron (Fe)', 'Chromium (Cr)', 'Tungsten (W)', 'Sodium (Na)'],
    atoms: [
      // 8 Corners
      { symbol: 'Fe', frac: [0, 0, 0], color: CPK_COLORS.Fe, radius: 0.433 },
      { symbol: 'Fe', frac: [1, 0, 0], color: CPK_COLORS.Fe, radius: 0.433 },
      { symbol: 'Fe', frac: [0, 1, 0], color: CPK_COLORS.Fe, radius: 0.433 },
      { symbol: 'Fe', frac: [1, 1, 0], color: CPK_COLORS.Fe, radius: 0.433 },
      { symbol: 'Fe', frac: [0, 0, 1], color: CPK_COLORS.Fe, radius: 0.433 },
      { symbol: 'Fe', frac: [1, 0, 1], color: CPK_COLORS.Fe, radius: 0.433 },
      { symbol: 'Fe', frac: [0, 1, 1], color: CPK_COLORS.Fe, radius: 0.433 },
      { symbol: 'Fe', frac: [1, 1, 1], color: CPK_COLORS.Fe, radius: 0.433 },
      // Body Center
      { symbol: 'Fe', frac: [0.5, 0.5, 0.5], color: [0.98, 0.65, 0.25], radius: 0.433 }
    ]
  },
  {
    id: 'fcc',
    name: 'Face-Centered Cubic (FCC)',
    system: 'Cubic Face-Centered (cF)',
    latticeConstantA: 3.61,
    coordinationNumber: 12,
    atomicPackingFactor: 0.740,
    atomsPerUnitCell: 4,
    description: '8 corners (8 × 1/8 = 1) plus 6 face centers (6 × 1/2 = 3) = 4 atoms per cell. Closest cubic packing ABCABC... Face diagonal touches: 4r = √2 a.',
    examples: ['Copper (Cu)', 'Aluminium (Al)', 'Gold (Au)', 'Nickel (Ni)', 'Silver (Ag)'],
    atoms: [
      // 8 Corners
      { symbol: 'Cu', frac: [0, 0, 0], color: CPK_COLORS.Cu, radius: 0.354 },
      { symbol: 'Cu', frac: [1, 0, 0], color: CPK_COLORS.Cu, radius: 0.354 },
      { symbol: 'Cu', frac: [0, 1, 0], color: CPK_COLORS.Cu, radius: 0.354 },
      { symbol: 'Cu', frac: [1, 1, 0], color: CPK_COLORS.Cu, radius: 0.354 },
      { symbol: 'Cu', frac: [0, 0, 1], color: CPK_COLORS.Cu, radius: 0.354 },
      { symbol: 'Cu', frac: [1, 0, 1], color: CPK_COLORS.Cu, radius: 0.354 },
      { symbol: 'Cu', frac: [0, 1, 1], color: CPK_COLORS.Cu, radius: 0.354 },
      { symbol: 'Cu', frac: [1, 1, 1], color: CPK_COLORS.Cu, radius: 0.354 },
      // 6 Face Centers
      { symbol: 'Cu', frac: [0.5, 0.5, 0], color: [0.92, 0.65, 0.35], radius: 0.354 },
      { symbol: 'Cu', frac: [0.5, 0.5, 1], color: [0.92, 0.65, 0.35], radius: 0.354 },
      { symbol: 'Cu', frac: [0.5, 0, 0.5], color: [0.92, 0.65, 0.35], radius: 0.354 },
      { symbol: 'Cu', frac: [0.5, 1, 0.5], color: [0.92, 0.65, 0.35], radius: 0.354 },
      { symbol: 'Cu', frac: [0, 0.5, 0.5], color: [0.92, 0.65, 0.35], radius: 0.354 },
      { symbol: 'Cu', frac: [1, 0.5, 0.5], color: [0.92, 0.65, 0.35], radius: 0.354 }
    ]
  },
  {
    id: 'nacl',
    name: 'Sodium Chloride (Rock Salt NaCl)',
    system: 'FCC Interpenetrating Sublattices',
    latticeConstantA: 5.64,
    coordinationNumber: 6,
    atomicPackingFactor: 0.670,
    atomsPerUnitCell: 8, // 4 Na+ and 4 Cl-
    description: 'Interpenetrating FCC arrays of Cl⁻ anions and Na⁺ cations in octahedral voids. Octahedral coordination (6:6). Radius ratio r+/r- = 0.52 (within 0.414 - 0.732 range).',
    examples: ['NaCl', 'KCl', 'MgO', 'CaO', 'AgCl'],
    atoms: [
      // Cl- on FCC lattice (corners + faces) - Green
      { symbol: 'Cl', frac: [0, 0, 0], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [1, 0, 0], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [0, 1, 0], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [1, 1, 0], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [0, 0, 1], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [1, 0, 1], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [0, 1, 1], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [1, 1, 1], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [0.5, 0.5, 0], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [0.5, 0.5, 1], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [0.5, 0, 0.5], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [0.5, 1, 0.5], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [0, 0.5, 0.5], color: CPK_COLORS.Cl, radius: 0.38 },
      { symbol: 'Cl', frac: [1, 0.5, 0.5], color: CPK_COLORS.Cl, radius: 0.38 },
      // Na+ on octahedral voids (edges + body center) - Purple
      { symbol: 'Na', frac: [0.5, 0.5, 0.5], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [0.5, 0, 0], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [0, 0.5, 0], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [0, 0, 0.5], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [1, 0.5, 0], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [1, 0, 0.5], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [0.5, 1, 0], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [0, 1, 0.5], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [0.5, 0, 1], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [0, 0.5, 1], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [1, 1, 0.5], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [1, 0.5, 1], color: CPK_COLORS.Na, radius: 0.26 },
      { symbol: 'Na', frac: [0.5, 1, 1], color: CPK_COLORS.Na, radius: 0.26 }
    ]
  },
  {
    id: 'diamond',
    name: 'Diamond Cubic / Silicon',
    system: 'FCC with Basis (Tetrahedral Voids)',
    latticeConstantA: 3.57,
    coordinationNumber: 4,
    atomicPackingFactor: 0.340,
    atomsPerUnitCell: 8,
    description: 'FCC framework plus 4 carbon atoms occupying alternate tetrahedral voids. Each carbon covalently bonded to 4 neighbors in tetrahedral sp³ geometry. Highest Mohs hardness.',
    examples: ['Diamond (C)', 'Silicon (Si)', 'Germanium (Ge)', 'α-Tin (Sn)'],
    atoms: [
      // FCC corners + faces
      { symbol: 'C', frac: [0, 0, 0], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [1, 0, 0], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [0, 1, 0], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [1, 1, 0], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [0, 0, 1], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [1, 0, 1], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [0, 1, 1], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [1, 1, 1], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [0.5, 0.5, 0], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [0.5, 0.5, 1], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [0.5, 0, 0.5], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [0.5, 1, 0.5], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [0, 0.5, 0.5], color: [0.65, 0.70, 0.80], radius: 0.28 },
      { symbol: 'C', frac: [1, 0.5, 0.5], color: [0.65, 0.70, 0.80], radius: 0.28 },
      // 4 Tetrahedral Voids
      { symbol: 'C', frac: [0.25, 0.25, 0.25], color: [0.25, 0.85, 0.95], radius: 0.28 },
      { symbol: 'C', frac: [0.75, 0.75, 0.25], color: [0.25, 0.85, 0.95], radius: 0.28 },
      { symbol: 'C', frac: [0.75, 0.25, 0.75], color: [0.25, 0.85, 0.95], radius: 0.28 },
      { symbol: 'C', frac: [0.25, 0.75, 0.75], color: [0.25, 0.85, 0.95], radius: 0.28 }
    ]
  }
]

// --- Curated Atomic Orbitals (Quantum Wavefunctions) ---
export const ORBITAL_PRESETS: OrbitalModel[] = [
  {
    id: '1s',
    name: '1s Orbital',
    formula: 'ψ₁₀₀ = (1/√π)(1/a₀)³/² e^(-r/a₀)',
    quantumN: 1,
    quantumL: 0,
    quantumM: 0,
    type: 's',
    description: 'Spherically symmetric ground state orbital with zero angular nodes. Maximum probability density at nucleus.'
  },
  {
    id: '2pz',
    name: '2p_z Orbital',
    formula: 'ψ₂₁₀ ∝ z e^(-r/2a₀)',
    quantumN: 2,
    quantumL: 1,
    quantumM: 0,
    type: 'p',
    description: 'Two opposing lobes along the z-axis separated by a nodal plane (xy-plane where z=0). Opposite quantum mechanical phase signs (+ / -).'
  },
  {
    id: '3dz2',
    name: '3d_z² Orbital',
    formula: 'ψ₃₂₀ ∝ (3z² - r²) e^(-r/3a₀)',
    quantumN: 3,
    quantumL: 2,
    quantumM: 0,
    type: 'd',
    description: 'Two major lobes along the z-axis with an equatorial toroidal ring (donut) in the xy-plane. Two conical nodal surfaces.'
  },
  {
    id: '3dx2y2',
    name: '3d_x²-y² Orbital',
    formula: 'ψ₃₂₂ ∝ (x² - y²) e^(-r/3a₀)',
    quantumN: 3,
    quantumL: 2,
    quantumM: 2,
    type: 'd',
    description: 'Four lobes pointing directly along the x and y axes with alternating phase signs. Two planar nodes along y = ±x.'
  },
  {
    id: 'sp3',
    name: 'sp³ Hybrid Orbital',
    formula: 'ψ_sp³ = ½(s + p_x + p_y + p_z)',
    quantumN: 2,
    quantumL: 1,
    quantumM: 0,
    type: 'hybrid',
    description: 'Linear combination of one 2s and three 2p orbitals forming an asymmetric large directional bonding lobe toward the vertex of a tetrahedron.'
  }
]

// --- WebGL Mesh Generators ---
function createSphereMesh(radius = 1, latBands = 20, longBands = 20) {
  const positions: number[] = []
  const normals: number[] = []
  const indices: number[] = []

  for (let lat = 0; lat <= latBands; lat++) {
    const theta = (lat * Math.PI) / latBands
    const sinTheta = Math.sin(theta)
    const cosTheta = Math.cos(theta)

    for (let lon = 0; lon <= longBands; lon++) {
      const phi = (lon * 2 * Math.PI) / longBands
      const sinPhi = Math.sin(phi)
      const cosPhi = Math.cos(phi)

      const x = cosPhi * sinTheta
      const y = cosTheta
      const z = sinPhi * sinTheta

      normals.push(x, y, z)
      positions.push(radius * x, radius * y, radius * z)
    }
  }

  for (let lat = 0; lat < latBands; lat++) {
    for (let lon = 0; lon < longBands; lon++) {
      const first = lat * (longBands + 1) + lon
      const second = first + longBands + 1

      indices.push(first, second, first + 1)
      indices.push(second, second + 1, first + 1)
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices)
  }
}

function createCylinderMesh(radius = 0.12, height = 1, segments = 16) {
  const positions: number[] = []
  const normals: number[] = []
  const indices: number[] = []

  const halfH = height / 2

  for (let i = 0; i <= segments; i++) {
    const angle = (i * 2 * Math.PI) / segments
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)

    // Top ring
    positions.push(radius * cos, halfH, radius * sin)
    normals.push(cos, 0, sin)

    // Bottom ring
    positions.push(radius * cos, -halfH, radius * sin)
    normals.push(cos, 0, sin)
  }

  for (let i = 0; i < segments; i++) {
    const top1 = i * 2
    const bot1 = i * 2 + 1
    const top2 = (i + 1) * 2
    const bot2 = (i + 1) * 2 + 1

    indices.push(top1, bot1, top2)
    indices.push(bot1, bot2, top2)
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices)
  }
}

// --- WebGL Shaders ---
const VERTEX_SHADER_SRC = `
  attribute vec3 aPosition;
  attribute vec3 aNormal;

  uniform mat4 uModel;
  uniform mat4 uView;
  uniform mat4 uProj;
  uniform mat3 uNormalMat;

  varying vec3 vNormal;
  varying vec3 vWorldPos;

  void main() {
    vec4 worldPos = uModel * vec4(aPosition, 1.0);
    vWorldPos = worldPos.xyz;
    vNormal = normalize(uNormalMat * aNormal);
    gl_Position = uProj * uView * worldPos;
  }
`

const FRAGMENT_SHADER_SRC = `
  precision mediump float;

  varying vec3 vNormal;
  varying vec3 vWorldPos;

  uniform vec3 uColor;
  uniform vec3 uLightDir;
  uniform vec3 uViewPos;
  uniform vec4 uSlicePlane; // [nx, ny, nz, d]
  uniform bool uEnableSlice;

  void main() {
    // Slicing plane test: if enabled and point is beyond distance d, discard or shade
    if (uEnableSlice) {
      float dist = dot(vWorldPos, uSlicePlane.xyz) + uSlicePlane.w;
      if (dist > 0.05) {
        discard;
      }
    }

    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(uLightDir);
    vec3 viewDir = normalize(uViewPos - vWorldPos);

    // Ambient
    float ambient = 0.35;

    // Diffuse
    float diff = max(dot(normal, lightDir), 0.0) * 0.75;

    // Specular (Blinn-Phong)
    vec3 halfwayDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfwayDir), 0.0), 32.0) * 0.6;

    // Rim lighting
    float rim = 1.0 - max(dot(viewDir, normal), 0.0);
    rim = pow(rim, 3.0) * 0.25;

    vec3 finalColor = uColor * (ambient + diff) + vec3(1.0) * (spec + rim);
    gl_FragColor = vec4(finalColor, 1.0);
  }
`

// --- Main Component ---
export default function WebGLCrystalMoleculeLab() {
  const [activeTab, setActiveTab] = useState<'molecule' | 'crystal' | 'orbital'>('crystal')
  const [selectedMoleculeId, setSelectedMoleculeId] = useState('h2o')
  const [selectedCrystalId, setSelectedCrystalId] = useState('fcc')
  const [selectedOrbitalId, setSelectedOrbitalId] = useState('2pz')

  // Display toggles
  const [renderMode, setRenderMode] = useState<'ball_stick' | 'space_fill' | 'wireframe'>('ball_stick')
  const [showDipole, setShowDipole] = useState(true)
  const [showLabels, setShowLabels] = useState(true)
  const [autoRotate, setAutoRotate] = useState(true)
  const [superCellSize, setSuperCellSize] = useState<1 | 2>(1)
  
  // Crystallographic Slicing Plane (Miller Indices)
  const [enableSlice, setEnableSlice] = useState(false)
  const [millerPlane, setMillerPlane] = useState<'100' | '110' | '111'>('111')
  const [sliceOffset, setSliceOffset] = useState(0.0)

  // Interactive Angle & Distance Measurement state
  const [selectedAtoms, setSelectedAtoms] = useState<number[]>([])

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glRef = useRef<WebGLRenderingContext | null>(null)
  const animFrameRef = useRef<number | null>(null)

  // Camera Orbit State
  const camState = useRef({
    rotX: 25,
    rotY: -35,
    zoom: 8.5,
    panX: 0,
    panY: 0,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0
  })

  const currentMolecule = useMemo(() => {
    return MOLECULE_PRESETS.find(m => m.id === selectedMoleculeId) || MOLECULE_PRESETS[0]
  }, [selectedMoleculeId])

  const currentCrystal = useMemo(() => {
    return CRYSTAL_PRESETS.find(c => c.id === selectedCrystalId) || CRYSTAL_PRESETS[0]
  }, [selectedCrystalId])

  const currentOrbital = useMemo(() => {
    return ORBITAL_PRESETS.find(o => o.id === selectedOrbitalId) || ORBITAL_PRESETS[0]
  }, [selectedOrbitalId])

  // Normal for current Miller plane
  const slicePlaneEq = useMemo(() => {
    let norm: Vec3 = [0, 0, 1]
    if (millerPlane === '100') norm = [1, 0, 0]
    if (millerPlane === '110') norm = vec3.norm([1, 1, 0])
    if (millerPlane === '111') norm = vec3.norm([1, 1, 1])
    return {
      nx: norm[0],
      ny: norm[1],
      nz: norm[2],
      d: -sliceOffset
    }
  }, [millerPlane, sliceOffset])

  // Setup WebGL Pipeline
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { antialias: true, alpha: true })
    if (!gl) {
      console.warn('WebGL not supported on this device')
      return
    }
    glRef.current = gl

    // Compile Shaders
    function createShader(gl: WebGLRenderingContext, type: number, src: string) {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, src)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SRC)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC)
    if (!vs || !fs) return

    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }

    gl.useProgram(program)
    gl.enable(gl.DEPTH_TEST)
    gl.enable(gl.CULL_FACE)
    gl.cullFace(gl.BACK)

    // Meshes
    const sphere = createSphereMesh(1.0, 24, 24)
    const cylinder = createCylinderMesh(1.0, 1.0, 16)

    // Buffers
    const activeGl = gl
    function createVBO(data: Float32Array) {
      const buf = activeGl.createBuffer()
      activeGl.bindBuffer(activeGl.ARRAY_BUFFER, buf)
      activeGl.bufferData(activeGl.ARRAY_BUFFER, data, activeGl.STATIC_DRAW)
      return buf
    }

    function createIBO(data: Uint16Array) {
      const buf = activeGl.createBuffer()
      activeGl.bindBuffer(activeGl.ELEMENT_ARRAY_BUFFER, buf)
      activeGl.bufferData(activeGl.ELEMENT_ARRAY_BUFFER, data, activeGl.STATIC_DRAW)
      return buf
    }

    const sphereVBO = createVBO(sphere.positions)
    const sphereNormVBO = createVBO(sphere.normals)
    const sphereIBO = createIBO(sphere.indices)

    const cylVBO = createVBO(cylinder.positions)
    const cylNormVBO = createVBO(cylinder.normals)
    const cylIBO = createIBO(cylinder.indices)

    const aPosLoc = gl.getAttribLocation(program, 'aPosition')
    const aNormLoc = gl.getAttribLocation(program, 'aNormal')

    const uModelLoc = gl.getUniformLocation(program, 'uModel')
    const uViewLoc = gl.getUniformLocation(program, 'uView')
    const uProjLoc = gl.getUniformLocation(program, 'uProj')
    const uNormMatLoc = gl.getUniformLocation(program, 'uNormalMat')
    const uColorLoc = gl.getUniformLocation(program, 'uColor')
    const uLightDirLoc = gl.getUniformLocation(program, 'uLightDir')
    const uViewPosLoc = gl.getUniformLocation(program, 'uViewPos')
    const uSlicePlaneLoc = gl.getUniformLocation(program, 'uSlicePlane')
    const uEnableSliceLoc = gl.getUniformLocation(program, 'uEnableSlice')

    gl.enableVertexAttribArray(aPosLoc)
    gl.enableVertexAttribArray(aNormLoc)

    // Render loop
    let lastTime = performance.now()

    function render(time: number) {
      if (!canvas || !gl) return

      const dt = (time - lastTime) / 1000
      lastTime = time

      if (autoRotate) {
        camState.current.rotY += dt * 25
      }

      // Handle canvas resize
      const dpr = window.devicePixelRatio || 1
      const width = canvas.clientWidth * dpr
      const height = canvas.clientHeight * dpr
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
      }

      gl.clearColor(0.04, 0.06, 0.09, 1.0)
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

      gl.useProgram(program)

      // Lighting & Slicing uniforms
      gl.uniform3f(uLightDirLoc, 0.6, 0.8, 1.0)
      gl.uniform4f(uSlicePlaneLoc, slicePlaneEq.nx, slicePlaneEq.ny, slicePlaneEq.nz, slicePlaneEq.d)
      gl.uniform1i(uEnableSliceLoc, enableSlice && activeTab === 'crystal' ? 1 : 0)

      // Camera view matrix
      const radX = (camState.current.rotX * Math.PI) / 180
      const radY = (camState.current.rotY * Math.PI) / 180
      const dist = camState.current.zoom

      const eyeX = dist * Math.sin(radY) * Math.cos(radX)
      const eyeY = dist * Math.sin(radX)
      const eyeZ = dist * Math.cos(radY) * Math.cos(radX)

      const viewMat = mat4.create()
      mat4.lookAt(viewMat, [eyeX, eyeY, eyeZ], [camState.current.panX, camState.current.panY, 0], [0, 1, 0])
      gl.uniformMatrix4fv(uViewLoc, false, viewMat)
      gl.uniform3f(uViewPosLoc, eyeX, eyeY, eyeZ)

      const projMat = mat4.create()
      mat4.perspective(projMat, (45 * Math.PI) / 180, canvas.width / canvas.height, 0.1, 100.0)
      gl.uniformMatrix4fv(uProjLoc, false, projMat)

      // Draw sphere helper
      function drawSphere(center: Vec3, radius: number, color: [number, number, number]) {
        if (!gl) return
        gl.bindBuffer(gl.ARRAY_BUFFER, sphereVBO)
        gl.vertexAttribPointer(aPosLoc, 3, gl.FLOAT, false, 0, 0)

        gl.bindBuffer(gl.ARRAY_BUFFER, sphereNormVBO)
        gl.vertexAttribPointer(aNormLoc, 3, gl.FLOAT, false, 0, 0)

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sphereIBO)

        const model = mat4.create()
        // Translate & scale
        model[0] = radius; model[5] = radius; model[10] = radius
        model[12] = center[0]; model[13] = center[1]; model[14] = center[2]

        gl.uniformMatrix4fv(uModelLoc, false, model)
        const normMat = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
        gl.uniformMatrix3fv(uNormMatLoc, false, normMat)
        gl.uniform3fv(uColorLoc, color)

        gl.drawElements(gl.TRIANGLES, sphere.indices.length, gl.UNSIGNED_SHORT, 0)
      }

      // Draw cylinder bond helper
      function drawCylinder(p1: Vec3, p2: Vec3, radius: number, color: [number, number, number]) {
        if (!gl) return
        const dir = vec3.sub(p2, p1)
        const h = vec3.len(dir)
        if (h < 1e-4) return

        const mid = vec3.scale(vec3.add(p1, p2), 0.5)
        const unitDir = vec3.norm(dir)

        // Rotation matrix aligning (0, 1, 0) to unitDir
        const up: Vec3 = [0, 1, 0]
        const axis = vec3.cross(up, unitDir)
        const axisLen = vec3.len(axis)
        const cosA = vec3.dot(up, unitDir)

        const rotMat = mat4.create()
        if (axisLen > 1e-4) {
          const u = vec3.norm(axis)
          const sinA = axisLen
          const oneMinusC = 1 - cosA
          rotMat[0] = cosA + u[0] * u[0] * oneMinusC
          rotMat[1] = u[0] * u[1] * oneMinusC + u[2] * sinA
          rotMat[2] = u[0] * u[2] * oneMinusC - u[1] * sinA

          rotMat[4] = u[1] * u[0] * oneMinusC - u[2] * sinA
          rotMat[5] = cosA + u[1] * u[1] * oneMinusC
          rotMat[6] = u[1] * u[2] * oneMinusC + u[0] * sinA

          rotMat[8] = u[2] * u[0] * oneMinusC + u[1] * sinA
          rotMat[9] = u[2] * u[1] * oneMinusC - u[0] * sinA
          rotMat[10] = cosA + u[2] * u[2] * oneMinusC
        } else if (cosA < -0.999) {
          // Opposite direction: flip 180 on Z
          rotMat[0] = -1; rotMat[5] = -1
        }

        const model = mat4.create()
        // Scale
        const scaleMat = mat4.create()
        scaleMat[0] = radius; scaleMat[5] = h; scaleMat[10] = radius

        // Combined = Translate * Rotate * Scale
        mat4.multiply(model, rotMat, scaleMat)
        model[12] = mid[0]
        model[13] = mid[1]
        model[14] = mid[2]

        gl.bindBuffer(gl.ARRAY_BUFFER, cylVBO)
        gl.vertexAttribPointer(aPosLoc, 3, gl.FLOAT, false, 0, 0)
        gl.bindBuffer(gl.ARRAY_BUFFER, cylNormVBO)
        gl.vertexAttribPointer(aNormLoc, 3, gl.FLOAT, false, 0, 0)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cylIBO)

        gl.uniformMatrix4fv(uModelLoc, false, model)
        const normMat = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
        gl.uniformMatrix3fv(uNormMatLoc, false, normMat)
        gl.uniform3fv(uColorLoc, color)

        gl.drawElements(gl.TRIANGLES, cylinder.indices.length, gl.UNSIGNED_SHORT, 0)
      }

      // Render Scene based on active Tab
      if (activeTab === 'molecule') {
        // Render Molecule Atoms & Bonds
        const atoms = currentMolecule.atoms

        // Draw Bonds
        if (renderMode !== 'space_fill') {
          for (const bond of currentMolecule.bonds) {
            const a1 = atoms[bond.sourceIdx]
            const a2 = atoms[bond.targetIdx]
            if (!a1 || !a2) continue

            const radius = bond.order === 2 ? 0.08 : 0.12
            const mid = vec3.scale(vec3.add(a1.pos, a2.pos), 0.5)

            // Split bond in half with atom colors
            drawCylinder(a1.pos, mid, radius, a1.color)
            drawCylinder(mid, a2.pos, radius, a2.color)
          }
        }

        // Draw Atoms
        for (let idx = 0; idx < atoms.length; idx++) {
          const atom = atoms[idx]
          let r = atom.covalentRadius * 0.75
          if (renderMode === 'space_fill') r = atom.vdwRadius * 0.75
          if (renderMode === 'wireframe') r = 0.2

          // Highlight if selected
          let col = atom.color
          if (selectedAtoms.includes(idx)) {
            col = [1.0, 0.85, 0.1]
          }
          drawSphere(atom.pos, r, col)
        }

        // Net Dipole Moment Vector Arrow
        if (showDipole && currentMolecule.dipoleDebye > 0.01 && currentMolecule.dipoleVector) {
          const arrowStart: Vec3 = [0, 0, 0]
          const arrowEnd = vec3.scale(currentMolecule.dipoleVector, 1.8)
          drawCylinder(arrowStart, arrowEnd, 0.06, [0.2, 0.8, 1.0])
          drawSphere(arrowEnd, 0.18, [0.2, 0.8, 1.0]) // arrowhead
        }
      } else if (activeTab === 'crystal') {
        // Render Crystal Lattice
        const cellA = 3.0 // visualization scale
        const copies = superCellSize === 2 ? 2 : 1
        const offsetOrigin: Vec3 = [-(copies * cellA) / 2, -(copies * cellA) / 2, -(copies * cellA) / 2]

        // Replicate lattice
        for (let cx = 0; cx < copies; cx++) {
          for (let cy = 0; cy < copies; cy++) {
            for (let cz = 0; cz < copies; cz++) {
              const basePos: Vec3 = [
                offsetOrigin[0] + cx * cellA,
                offsetOrigin[1] + cy * cellA,
                offsetOrigin[2] + cz * cellA
              ]

              // Draw Unit Cell Wireframe Edges
              if (renderMode !== 'space_fill') {
                const p000 = basePos
                const p100 = vec3.add(basePos, [cellA, 0, 0])
                const p010 = vec3.add(basePos, [0, cellA, 0])
                const p110 = vec3.add(basePos, [cellA, cellA, 0])
                const p001 = vec3.add(basePos, [0, 0, cellA])
                const p101 = vec3.add(basePos, [cellA, 0, cellA])
                const p011 = vec3.add(basePos, [0, cellA, cellA])
                const p111 = vec3.add(basePos, [cellA, cellA, cellA])

                const wireColor: [number, number, number] = [0.3, 0.35, 0.45]
                const wireR = 0.025

                drawCylinder(p000, p100, wireR, wireColor)
                drawCylinder(p100, p110, wireR, wireColor)
                drawCylinder(p110, p010, wireR, wireColor)
                drawCylinder(p010, p000, wireR, wireColor)

                drawCylinder(p001, p101, wireR, wireColor)
                drawCylinder(p101, p111, wireR, wireColor)
                drawCylinder(p111, p011, wireR, wireColor)
                drawCylinder(p011, p001, wireR, wireColor)

                drawCylinder(p000, p001, wireR, wireColor)
                drawCylinder(p100, p101, wireR, wireColor)
                drawCylinder(p110, p111, wireR, wireColor)
                drawCylinder(p010, p011, wireR, wireColor)
              }

              // Draw Atoms
              for (const atom of currentCrystal.atoms) {
                const worldPos: Vec3 = [
                  basePos[0] + atom.frac[0] * cellA,
                  basePos[1] + atom.frac[1] * cellA,
                  basePos[2] + atom.frac[2] * cellA
                ]

                let r = atom.radius * (cellA / 3.0)
                if (renderMode === 'ball_stick') r *= 0.6
                if (renderMode === 'wireframe') r = 0.15

                drawSphere(worldPos, r, atom.color)
              }
            }
          }
        }
      } else if (activeTab === 'orbital') {
        // Quantum Atomic Orbital Probability Lobes
        const orb = currentOrbital
        const sphereR = 0.35

        if (orb.type === 's') {
          // Concentric spherical electron cloud
          drawSphere([0, 0, 0], 1.8, [0.35, 0.75, 0.95])
          drawSphere([0, 0, 0], 1.0, [0.45, 0.85, 1.0])
        } else if (orb.type === 'p') {
          // 2pz dumbbell lobes with positive (cyan) and negative (orange) phases
          const steps = 14
          for (let i = 1; i <= steps; i++) {
            const z = (i / steps) * 2.2
            const r = Math.sin((i / steps) * Math.PI) * 0.85
            drawSphere([0, z, 0], r, [0.2, 0.8, 1.0]) // positive phase
            drawSphere([0, -z, 0], r, [1.0, 0.55, 0.15]) // negative phase
          }
          // Nodal plane disk
          drawSphere([0, 0, 0], 0.15, [0.8, 0.8, 0.8])
        } else if (orb.type === 'd') {
          if (orb.id === '3dz2') {
            // Polar lobes
            for (let i = 1; i <= 12; i++) {
              const z = (i / 12) * 2.4
              const r = Math.sin((i / 12) * Math.PI) * 0.75
              drawSphere([0, z, 0], r, [0.2, 0.8, 1.0])
              drawSphere([0, -z, 0], r, [0.2, 0.8, 1.0])
            }
            // Equatorial donut ring (negative phase)
            const ringCount = 20
            const ringR = 1.2
            for (let i = 0; i < ringCount; i++) {
              const angle = (i * 2 * Math.PI) / ringCount
              drawSphere([ringR * Math.cos(angle), 0, ringR * Math.sin(angle)], 0.35, [1.0, 0.55, 0.15])
            }
          } else {
            // 3dx2-y2 four-leaf clover
            const clover = 16
            for (let i = 1; i <= clover; i++) {
              const dist = (i / clover) * 1.9
              const r = Math.sin((i / clover) * Math.PI) * 0.65
              drawSphere([dist, 0, 0], r, [0.2, 0.8, 1.0])
              drawSphere([-dist, 0, 0], r, [0.2, 0.8, 1.0])
              drawSphere([0, 0, dist], r, [1.0, 0.55, 0.15])
              drawSphere([0, 0, -dist], r, [1.0, 0.55, 0.15])
            }
          }
        } else if (orb.type === 'hybrid') {
          // sp3 single directional lobe
          for (let i = 1; i <= 14; i++) {
            const z = (i / 14) * 2.5
            const r = Math.sin((i / 14) * Math.PI) * 0.95
            drawSphere([z * 0.577, z * 0.577, z * 0.577], r, [0.25, 0.9, 0.45])
          }
          // small tail lobe
          drawSphere([-0.3, -0.3, -0.3], 0.35, [1.0, 0.6, 0.2])
        }
      }

      animFrameRef.current = requestAnimationFrame(render)
    }

    animFrameRef.current = requestAnimationFrame(render)

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [
    activeTab,
    currentMolecule,
    currentCrystal,
    currentOrbital,
    renderMode,
    showDipole,
    autoRotate,
    superCellSize,
    enableSlice,
    slicePlaneEq,
    selectedAtoms
  ])

  // Mouse & Touch Orbit Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    camState.current.isDragging = true
    camState.current.lastMouseX = e.clientX
    camState.current.lastMouseY = e.clientY
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!camState.current.isDragging) return
    const dx = e.clientX - camState.current.lastMouseX
    const dy = e.clientY - camState.current.lastMouseY
    camState.current.lastMouseX = e.clientX
    camState.current.lastMouseY = e.clientY

    if (e.buttons === 2 || e.shiftKey) {
      // Pan
      camState.current.panX += dx * 0.01
      camState.current.panY -= dy * 0.01
    } else {
      // Rotate
      camState.current.rotY += dx * 0.7
      camState.current.rotX = Math.max(-85, Math.min(85, camState.current.rotX + dy * 0.7))
    }
  }

  const handleMouseUp = () => {
    camState.current.isDragging = false
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    camState.current.zoom = Math.max(2.5, Math.min(25.0, camState.current.zoom + e.deltaY * 0.01))
  }

  // Atom Click measurement logic
  const handleAtomSelect = (idx: number) => {
    setSelectedAtoms(prev => {
      if (prev.includes(idx)) return prev.filter(i => i !== idx)
      if (prev.length >= 3) return [idx]
      return [...prev, idx]
    })
  }

  // Calculate live measurement
  const measurementResult = useMemo(() => {
    if (activeTab !== 'molecule') return null
    const atoms = currentMolecule.atoms
    if (selectedAtoms.length === 2) {
      const a1 = atoms[selectedAtoms[0]]
      const a2 = atoms[selectedAtoms[1]]
      if (a1 && a2) {
        const d = vec3.dist(a1.pos, a2.pos)
        return {
          type: 'distance',
          label: `${a1.symbol}₁–${a2.symbol}₂ Bond Length`,
          value: `${d.toFixed(3)} Å (${(d * 100).toFixed(1)} pm)`
        }
      }
    } else if (selectedAtoms.length === 3) {
      const a1 = atoms[selectedAtoms[0]]
      const vertex = atoms[selectedAtoms[1]]
      const a3 = atoms[selectedAtoms[2]]
      if (a1 && vertex && a3) {
        const v1 = vec3.norm(vec3.sub(a1.pos, vertex.pos))
        const v2 = vec3.norm(vec3.sub(a3.pos, vertex.pos))
        const cosAngle = Math.max(-1, Math.min(1, vec3.dot(v1, v2)))
        const angleDeg = (Math.acos(cosAngle) * 180) / Math.PI
        return {
          type: 'angle',
          label: `∠${a1.symbol}₁–${vertex.symbol}₂–${a3.symbol}₃ Bond Angle`,
          value: `${angleDeg.toFixed(1)}°`
        }
      }
    }
    return null
  }, [selectedAtoms, currentMolecule, activeTab])

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-gradient-to-b from-card/95 via-card/85 to-background/95 p-4 md:p-6 shadow-2xl backdrop-blur-xl">
      {/* Header Bar */}
      <div className="flex flex-col gap-4 border-b border-border/60 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-teal-500/20 border border-indigo-500/30 text-indigo-400 shadow-inner">
            <Boxes className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                WebGL 3D Molecular &amp; Crystal Lattice Studio
              </h2>
              <Badge variant="outline" className="text-[11px] font-semibold border-teal-500/40 text-teal-300 bg-teal-500/10">
                Hardware Accelerated
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Interactive 3D real-time spatial physics: chemical bonding, Solid State crystal unit cells, and quantum orbital isosurfaces.
            </p>
          </div>
        </div>

        {/* Studio Mode Selector */}
        <div className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/80 p-1">
          <button
            onClick={() => { setActiveTab('crystal'); setSelectedAtoms([]) }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeTab === 'crystal'
                ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Grid className="h-3.5 w-3.5" />
            <span>Solid State Crystals</span>
          </button>
          <button
            onClick={() => { setActiveTab('molecule'); setSelectedAtoms([]) }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeTab === 'molecule'
                ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Atom className="h-3.5 w-3.5" />
            <span>3D Molecules</span>
          </button>
          <button
            onClick={() => { setActiveTab('orbital'); setSelectedAtoms([]) }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeTab === 'orbital'
                ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Atomic Orbitals</span>
          </button>
        </div>
      </div>

      {/* Preset Ribbon */}
      <div className="mt-4 flex flex-wrap items-center gap-2 border-b border-border/40 pb-3">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-1">
          {activeTab === 'crystal' ? 'Lattice Type:' : activeTab === 'molecule' ? 'Preset Molecule:' : 'Orbital:'}
        </span>

        {activeTab === 'crystal' && (
          CRYSTAL_PRESETS.map(c => (
            <Button
              key={c.id}
              size="sm"
              variant={selectedCrystalId === c.id ? 'default' : 'outline'}
              onClick={() => setSelectedCrystalId(c.id)}
              className="text-xs h-7"
            >
              {c.name}
            </Button>
          ))
        )}

        {activeTab === 'molecule' && (
          MOLECULE_PRESETS.map(m => (
            <Button
              key={m.id}
              size="sm"
              variant={selectedMoleculeId === m.id ? 'default' : 'outline'}
              onClick={() => { setSelectedMoleculeId(m.id); setSelectedAtoms([]) }}
              className="text-xs h-7 font-mono"
            >
              {m.formula} ({m.name})
            </Button>
          ))
        )}

        {activeTab === 'orbital' && (
          ORBITAL_PRESETS.map(o => (
            <Button
              key={o.id}
              size="sm"
              variant={selectedOrbitalId === o.id ? 'default' : 'outline'}
              onClick={() => setSelectedOrbitalId(o.id)}
              className="text-xs h-7"
            >
              {o.name}
            </Button>
          ))
        )}
      </div>

      {/* Main 3D Canvas & Control Panel */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* 3D WebGL Viewport */}
        <div className="lg:col-span-8 relative rounded-xl border border-border/60 bg-slate-950 overflow-hidden shadow-inner group select-none">
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-[460px] md:h-[540px] block cursor-grab active:cursor-grabbing touch-none"
          />

          {/* Orbit Navigation Overlay Controls */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 bg-background/80 backdrop-blur-md rounded-lg p-1.5 border border-border/60 shadow-lg text-xs">
            <button
              onClick={() => setAutoRotate(r => !r)}
              className={`px-2.5 py-1 rounded font-medium flex items-center gap-1 transition-colors ${
                autoRotate ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'text-muted-foreground hover:text-foreground'
              }`}
              title="Toggle Auto Rotation"
            >
              {autoRotate ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              <span>{autoRotate ? 'Rotating' : 'Paused'}</span>
            </button>

            <button
              onClick={() => {
                camState.current.rotX = 25
                camState.current.rotY = -35
                camState.current.zoom = 8.5
                camState.current.panX = 0
                camState.current.panY = 0
              }}
              className="px-2 py-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-1"
              title="Reset View Angle"
            >
              <RotateCcw className="h-3 w-3" /> Reset
            </button>

            <div className="h-4 w-px bg-border/60 mx-1" />

            {/* Render Styles */}
            <button
              onClick={() => setRenderMode('ball_stick')}
              className={`px-2 py-1 rounded ${renderMode === 'ball_stick' ? 'bg-muted text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Ball &amp; Stick
            </button>
            <button
              onClick={() => setRenderMode('space_fill')}
              className={`px-2 py-1 rounded ${renderMode === 'space_fill' ? 'bg-muted text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Space-Filling
            </button>
            <button
              onClick={() => setRenderMode('wireframe')}
              className={`px-2 py-1 rounded ${renderMode === 'wireframe' ? 'bg-muted text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Wireframe
            </button>
          </div>

          {/* Mouse Gestures Hint */}
          <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-muted-foreground border border-border/40 pointer-events-none">
            🖱️ Left Drag: Rotate · Right Drag/Shift: Pan · Scroll: Zoom
          </div>

          {/* Live Measurement HUD (Molecule Mode) */}
          {activeTab === 'molecule' && measurementResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-3 right-3 bg-background/90 backdrop-blur-md border border-amber-500/40 p-2.5 rounded-xl shadow-xl text-xs max-w-[240px]"
            >
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
                <Crosshair className="h-3.5 w-3.5" />
                <span>3D Measurement</span>
              </div>
              <div className="text-muted-foreground text-[11px]">{measurementResult.label}</div>
              <div className="text-sm font-mono font-bold text-foreground mt-0.5">{measurementResult.value}</div>
              <button
                onClick={() => setSelectedAtoms([])}
                className="mt-1 text-[10px] text-amber-400 hover:underline"
              >
                Clear Selection
              </button>
            </motion.div>
          )}

          {/* Miller Slicing Plane Indicator (Crystal Mode) */}
          {activeTab === 'crystal' && enableSlice && (
            <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-md border border-teal-500/40 p-2 rounded-xl text-xs flex items-center gap-2">
              <Slice className="h-3.5 w-3.5 text-teal-400" />
              <span className="font-mono text-teal-300 font-semibold">Miller Plane ({millerPlane})</span>
              <span className="text-[11px] text-muted-foreground">d = {sliceOffset.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Side Inspector & Interactive Controls */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Crystal Lattice Deep Inspector */}
          {activeTab === 'crystal' && (
            <div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card/60 p-4">
              <div className="flex items-center justify-between border-b border-border/40 pb-2">
                <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                  <Grid className="h-4 w-4 text-indigo-400" />
                  <span>{currentCrystal.name}</span>
                </h4>
                <Badge variant="outline" className="text-[10px] border-indigo-500/30 text-indigo-300 font-mono">
                  {currentCrystal.system}
                </Badge>
              </div>

              {/* Physical Crystallography Parameters Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-background/60 border border-border/40">
                  <div className="text-[11px] text-muted-foreground">Coordination # (Z)</div>
                  <div className="text-base font-bold font-mono text-teal-400">{currentCrystal.coordinationNumber}</div>
                  <div className="text-[10px] text-muted-foreground">Nearest neighbors</div>
                </div>
                <div className="p-2 rounded-lg bg-background/60 border border-border/40">
                  <div className="text-[11px] text-muted-foreground">Packing Factor (APF)</div>
                  <div className="text-base font-bold font-mono text-amber-400">
                    {(currentCrystal.atomicPackingFactor * 100).toFixed(1)}%
                  </div>
                  <div className="text-[10px] text-muted-foreground">Occupied volume ratio</div>
                </div>
                <div className="p-2 rounded-lg bg-background/60 border border-border/40">
                  <div className="text-[11px] text-muted-foreground">Atoms / Unit Cell</div>
                  <div className="text-base font-bold font-mono text-indigo-400">{currentCrystal.atomsPerUnitCell}</div>
                  <div className="text-[10px] text-muted-foreground">Net atomic basis</div>
                </div>
                <div className="p-2 rounded-lg bg-background/60 border border-border/40">
                  <div className="text-[11px] text-muted-foreground">Lattice Constant (a)</div>
                  <div className="text-base font-bold font-mono text-emerald-400">{currentCrystal.latticeConstantA} Å</div>
                  <div className="text-[10px] text-muted-foreground">Unit cube edge</div>
                </div>
              </div>

              {/* Crystallographic Miller Indices Slicer Tool */}
              <div className="mt-1 pt-3 border-t border-border/40">
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground cursor-pointer">
                    <input
                      type="checkbox"
                      checked={enableSlice}
                      onChange={(e) => setEnableSlice(e.target.checked)}
                      className="rounded accent-indigo-500"
                    />
                    <Slice className="h-3.5 w-3.5 text-teal-400" />
                    <span>Miller Slicing Plane</span>
                  </label>
                  <span className="text-[10px] text-muted-foreground">Crystallographic Cross-section</span>
                </div>

                {enableSlice && (
                  <div className="space-y-2.5 p-2.5 rounded-lg bg-background/80 border border-teal-500/30">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-medium">Select Plane (h k l):</span>
                      <div className="flex gap-1">
                        {(['100', '110', '111'] as const).map(plane => (
                          <button
                            key={plane}
                            onClick={() => setMillerPlane(plane)}
                            className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-colors ${
                              millerPlane === plane
                                ? 'bg-teal-500 text-slate-950 shadow-xs'
                                : 'bg-muted text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            ({plane})
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                        <span>Slice Position (d):</span>
                        <span className="font-mono text-teal-400">{sliceOffset.toFixed(2)} Å</span>
                      </div>
                      <input
                        type="range"
                        min="-2.5"
                        max="2.5"
                        step="0.05"
                        value={sliceOffset}
                        onChange={(e) => setSliceOffset(parseFloat(e.target.value))}
                        className="w-full accent-teal-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Supercell Replication Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                <span className="text-muted-foreground">Lattice Size:</span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setSuperCellSize(1)}
                    className={`px-2.5 py-1 rounded text-xs font-mono ${superCellSize === 1 ? 'bg-indigo-600 text-white font-bold' : 'bg-muted text-muted-foreground'}`}
                  >
                    1×1×1 Single Cell
                  </button>
                  <button
                    onClick={() => setSuperCellSize(2)}
                    className={`px-2.5 py-1 rounded text-xs font-mono ${superCellSize === 2 ? 'bg-indigo-600 text-white font-bold' : 'bg-muted text-muted-foreground'}`}
                  >
                    2×2×2 Supercell
                  </button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                {currentCrystal.description}
              </p>
            </div>
          )}

          {/* Molecule Inspector */}
          {activeTab === 'molecule' && (
            <div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card/60 p-4">
              <div className="flex items-center justify-between border-b border-border/40 pb-2">
                <div>
                  <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5 font-mono">
                    {currentMolecule.formula} — {currentMolecule.name}
                  </h4>
                  <div className="text-[11px] text-muted-foreground">{currentMolecule.geometry}</div>
                </div>
                <Badge variant="outline" className="text-xs font-mono border-amber-500/30 text-amber-300">
                  {currentMolecule.hybridization}
                </Badge>
              </div>

              {/* Molecular Physics Properties */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-background/60 border border-border/40">
                  <div className="text-[11px] text-muted-foreground">Dipole Moment (μ)</div>
                  <div className="text-base font-bold font-mono text-cyan-400">
                    {currentMolecule.dipoleDebye.toFixed(2)} D
                  </div>
                  <div className="text-[10px] text-muted-foreground">{currentMolecule.dipoleDebye > 0 ? 'Polar Molecule' : 'Nonpolar (Zero Net)'}</div>
                </div>
                <div className="p-2 rounded-lg bg-background/60 border border-border/40">
                  <div className="text-[11px] text-muted-foreground">Hybridization</div>
                  <div className="text-base font-bold font-mono text-purple-400">{currentMolecule.hybridization}</div>
                  <div className="text-[10px] text-muted-foreground">Central Orbital Hybrid</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-border/40">
                <label className="flex items-center gap-1.5 cursor-pointer text-muted-foreground hover:text-foreground">
                  <input
                    type="checkbox"
                    checked={showDipole}
                    onChange={(e) => setShowDipole(e.target.checked)}
                    className="rounded accent-cyan-500"
                  />
                  <span>Show Dipole Vector Arrow</span>
                </label>
              </div>

              {/* Atom selection helper */}
              <div className="p-2.5 rounded-lg bg-background/60 border border-border/40 text-xs">
                <div className="text-[11px] font-semibold text-muted-foreground mb-1.5 flex items-center gap-1">
                  <Crosshair className="h-3 w-3 text-amber-400" />
                  <span>Select Atoms for Live 3D Measurement:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentMolecule.atoms.map((atom, idx) => (
                    <button
                      key={atom.id}
                      onClick={() => handleAtomSelect(idx)}
                      className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                        selectedAtoms.includes(idx)
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                          : 'bg-muted/80 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {atom.symbol}{idx + 1}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground mt-1.5">
                  • Pick 2 atoms to measure <strong>bond distance</strong> in Å.<br/>
                  • Pick 3 atoms to measure <strong>bond angle</strong> in degrees.
                </p>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {currentMolecule.description}
              </p>
            </div>
          )}

          {/* Atomic Orbital Inspector */}
          {activeTab === 'orbital' && (
            <div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card/60 p-4">
              <div className="flex items-center justify-between border-b border-border/40 pb-2">
                <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <span>{currentOrbital.name}</span>
                </h4>
                <Badge variant="outline" className="text-xs font-mono border-cyan-500/30 text-cyan-300">
                  Quantum Wavefunction
                </Badge>
              </div>

              {/* Quantum Numbers Grid */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-background/60 border border-border/40 text-center">
                  <div className="text-[10px] text-muted-foreground">Principal (n)</div>
                  <div className="text-base font-bold font-mono text-cyan-400">{currentOrbital.quantumN}</div>
                </div>
                <div className="p-2 rounded-lg bg-background/60 border border-border/40 text-center">
                  <div className="text-[10px] text-muted-foreground">Azimuthal (l)</div>
                  <div className="text-base font-bold font-mono text-indigo-400">{currentOrbital.quantumL}</div>
                </div>
                <div className="p-2 rounded-lg bg-background/60 border border-border/40 text-center">
                  <div className="text-[10px] text-muted-foreground">Magnetic (m_l)</div>
                  <div className="text-base font-bold font-mono text-purple-400">{currentOrbital.quantumM}</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-background/80 border border-border/60 font-mono text-xs text-cyan-300 overflow-x-auto">
                {currentOrbital.formula}
              </div>

              <div className="flex items-center gap-3 text-xs pt-1">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-cyan-400" />
                  <span className="text-muted-foreground">Positive Phase (+)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="text-muted-foreground">Negative Phase (-)</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                {currentOrbital.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
