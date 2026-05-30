'use client'

import { useEffect, useRef } from 'react'

/**
 * Animated centerpiece — a layered, morphing orb made of:
 *  - a slow-rotating conic gradient core
 *  - canvas-rendered orbiting particles
 *  - additive glow rings
 *
 * Pure Canvas 2D + CSS. No extra deps.
 */
export function HeroOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    type P = { a: number; r: number; s: number; size: number; hue: number }
    const particles: P[] = Array.from({ length: 70 }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 140 + Math.random() * 120,
      s: 0.0008 + Math.random() * 0.0022,
      size: 0.6 + Math.random() * 2.2,
      hue: 200 + Math.random() * 60,
    }))

    const dust: { x: number; y: number; vx: number; vy: number; a: number }[] =
      Array.from({ length: 40 }, () => ({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00015,
        vy: (Math.random() - 0.5) * 0.00015,
        a: 0.1 + Math.random() * 0.4,
      }))

    let t = 0
    const tick = () => {
      t += 1
      ctx.clearRect(0, 0, w, h)

      // background dust
      ctx.globalCompositeOperation = 'source-over'
      for (const d of dust) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > 1) d.vx *= -1
        if (d.y < 0 || d.y > 1) d.vy *= -1
        ctx.fillStyle = `rgba(180,200,255,${d.a * 0.5})`
        ctx.fillRect(d.x * w, d.y * h, 1.2, 1.2)
      }

      const cx = w / 2
      const cy = h / 2

      // soft outer glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 280)
      grad.addColorStop(0, 'rgba(120,140,255,0.18)')
      grad.addColorStop(0.5, 'rgba(120,140,255,0.05)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      // orbiting particles (additive)
      ctx.globalCompositeOperation = 'lighter'
      for (const p of particles) {
        p.a += p.s
        const wobble = Math.sin(t * 0.01 + p.a * 3) * 8
        const x = cx + Math.cos(p.a) * (p.r + wobble)
        const y = cy + Math.sin(p.a) * (p.r + wobble) * 0.55
        const g = ctx.createRadialGradient(x, y, 0, x, y, p.size * 6)
        g.addColorStop(0, `hsla(${p.hue},90%,75%,0.9)`)
        g.addColorStop(1, `hsla(${p.hue},90%,60%,0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, p.size * 6, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="relative w-full aspect-square max-w-[640px] mx-auto pointer-events-none select-none">
      {/* Canvas: particles + glow */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Layered CSS orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[58%] aspect-square">
          {/* Outer halo */}
          <div
            className="absolute inset-[-25%] rounded-full opacity-60 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(120,140,255,0.55), rgba(200,90,220,0.25) 50%, transparent 70%)',
            }}
          />
          {/* Rotating gradient shell */}
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background:
                'conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #f59e0b, #10b981, #06b6d4, #6366f1)',
              filter: 'blur(2px)',
              opacity: 0.9,
            }}
          />
          {/* Inner glass */}
          <div
            className="absolute inset-[6%] rounded-full"
            style={{
              background:
                'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.85), rgba(255,255,255,0.05) 35%, rgba(0,0,0,0.85) 75%)',
              backdropFilter: 'blur(20px)',
            }}
          />
          {/* Specular highlight */}
          <div
            className="absolute top-[8%] left-[18%] w-[35%] h-[20%] rounded-full opacity-70 blur-md"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(255,255,255,0.9), transparent 70%)',
            }}
          />
          {/* Inner counter-rotating ring */}
          <div
            className="absolute inset-[25%] rounded-full animate-spin-reverse opacity-50"
            style={{
              background:
                'conic-gradient(from 90deg, transparent, rgba(255,255,255,0.6), transparent 40%)',
              filter: 'blur(1px)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
