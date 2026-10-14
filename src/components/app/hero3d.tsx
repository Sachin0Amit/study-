'use client'

import { useEffect, useRef } from 'react'

/**
 * Canvas-based 3D wireframe scene:
 * rotating icosahedron + dodecahedron with glow, perspective projection,
 * floating particles and subtle mouse parallax. No external deps.
 */

type V3 = [number, number, number]

const T = (1 + Math.sqrt(5)) / 2

function icosaVertices(): V3[] {
  const v: V3[] = []
  for (const a of [-1, 1]) {
    for (const b of [-T, T]) {
      v.push([a, b, 0])
      v.push([b, 0, a])
      v.push([0, a, b])
    }
  }
  return v
}

function dodeVertices(): V3[] {
  const v: V3[] = []
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) v.push([x, y, z])
  for (const a of [-1, 1]) {
    for (const b of [-1 / T, 1 / T]) {
      v.push([0, a * T, b])
      v.push([b, 0, a * T])
      v.push([a * T, b, 0])
    }
  }
  return v
}

function edgesOf(verts: V3[], threshold: number): [number, number][] {
  const e: [number, number][] = []
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      const d = Math.sqrt(
        (verts[i][0] - verts[j][0]) ** 2 +
          (verts[i][1] - verts[j][1]) ** 2 +
          (verts[i][2] - verts[j][2]) ** 2
      )
      if (d < threshold + 0.001) e.push([i, j])
    }
  }
  return e
}

function rotate(v: V3, rx: number, ry: number): V3 {
  const [x, y, z] = v
  // rotate X
  const cy = Math.cos(rx), sy = Math.sin(rx)
  const y1 = y * cy - z * sy
  const z1 = y * sy + z * cy
  // rotate Y
  const cx = Math.cos(ry), sx = Math.sin(ry)
  const x2 = x * cx + z1 * sx
  const z2 = -x * sx + z1 * cx
  return [x2, y1, z2]
}

export default function Hero3D({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const ico = icosaVertices()
    const icoEdges = edgesOf(ico, 2)
    const dod = dodeVertices()
    const dodEdges = edgesOf(dod, 2.1)

    let raf = 0
    let rx1 = 0.4, ry1 = 0
    let rx2 = 0.9, ry2 = 2.1
    let mouseX = 0, mouseY = 0
    let mouseTgtX = 0, mouseTgtY = 0

    const particles = Array.from({ length: 46 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.8,
      s: 0.02 + Math.random() * 0.05,
      a: 0.15 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
    }))

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseTgtX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6
      mouseTgtY = ((e.clientY - rect.top) / rect.height - 0.5) * -0.6
    }
    window.addEventListener('pointermove', onMove)

    let t0 = performance.now()
    const draw = (t: number) => {
      const dt = Math.min(64, t - t0)
      t0 = t
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      ctx.clearRect(0, 0, w, h)

      mouseX += (mouseTgtX - mouseX) * 0.05
      mouseY += (mouseTgtY - mouseY) * 0.05

      // particles (floating emerald dust)
      for (const p of particles) {
        p.y -= (p.s * dt) / 1000
        if (p.y < -0.05) p.y = 1.05
        const px = p.x * w
        const py = p.y * h + Math.sin(t / 900 + p.phase) * 6
        ctx.beginPath()
        ctx.arc(px, py, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(52, 211, 153, ${p.a * 0.5})`
        ctx.fill()
      }

      const drawPoly = (
        verts: V3[],
        edges: [number, number][],
        rx: number,
        ry: number,
        cx: number,
        cy: number,
        scale: number,
        depth: number,
        hue: string,
        nodeR: number,
        lineWidth: number
      ) => {
        const projected = verts.map((v) => {
          const [x, y, z] = rotate(v, rx, ry)
          const persp = depth / (depth - z)
          return { x: cx + x * persp * scale, y: cy + y * persp * scale, z }
        })
        // edges with depth-faded stroke
        for (const [i, j] of edges) {
          const a = projected[i]
          const b = projected[j]
          const zAvg = (a.z + b.z) / 2
          const norm = (zAvg + 1.9) / 3.8 // 0 back → 1 front
          const alpha = 0.14 + norm * 0.65
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = hue.replace('ALPHA', alpha.toFixed(3))
          ctx.lineWidth = lineWidth * (0.5 + norm * 0.9)
          ctx.stroke()
        }
        // glowing nodes
        for (const p of projected) {
          const norm = (p.z + 1.9) / 3.8
          ctx.beginPath()
          ctx.arc(p.x, p.y, nodeR * (0.55 + norm * 0.8), 0, Math.PI * 2)
          ctx.fillStyle = hue.replace('ALPHA', (0.25 + norm * 0.7).toFixed(3))
          ctx.fill()
        }
      }

      // back dodecahedron (slow, dimmer amber)
      drawPoly(
        dod,
        dodEdges,
        rx2 + mouseY * 0.3,
        ry2 + mouseX * 0.5,
        w * 0.62,
        h * 0.52,
        Math.min(w, h) * 0.17,
        6,
        'rgba(251, 191, 36, ALPHA)',
        1.4,
        1
      )
      // front icosahedron (emerald, larger)
      drawPoly(
        ico,
        icoEdges,
        rx1 + mouseY * 0.4,
        ry1 + mouseX * 0.6,
        w * 0.38,
        h * 0.5,
        Math.min(w, h) * 0.26,
        5,
        'rgba(52, 211, 153, ALPHA)',
        2,
        1.3
      )

      rx1 += dt * 0.00016
      ry1 += dt * 0.00042
      rx2 += dt * 0.0001
      ry2 += dt * 0.00024

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
