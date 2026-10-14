'use client'

import { useRef, useState, type ReactNode } from 'react'

/**
 * A card that tilts in 3D following the pointer, with a moving specular highlight.
 */
export function TiltCard({
  children,
  className,
  maxTilt = 10,
}: {
  children: ReactNode
  className?: string
  maxTilt?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<{ rx: number; ry: number; mx: number; my: number }>({
    rx: 0,
    ry: 0,
    mx: 50,
    my: 50,
  })
  const [hovering, setHovering] = useState(false)

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setStyle({
      rx: (0.5 - py) * maxTilt,
      ry: (px - 0.5) * maxTilt,
      mx: px * 100,
      my: py * 100,
    })
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => {
        setHovering(false)
        setStyle({ rx: 0, ry: 0, mx: 50, my: 50 })
      }}
      className={`sv-tilt relative ${className ?? ''}`}
      style={{
        transform: `perspective(900px) rotateX(${style.rx}deg) rotateY(${style.ry}deg) ${
          hovering ? 'scale(1.015)' : 'scale(1)'
        }`,
        transition: hovering ? 'transform 0.08s ease-out' : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* specular highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(360px circle at ${style.mx}% ${style.my}%, rgba(52,211,153,0.09), transparent 45%)`,
        }}
      />
      {children}
    </div>
  )
}
