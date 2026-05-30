'use client'

import { useEffect, useRef } from 'react'

/** Particle field — 1500 points flowing through a curl-noise vector field. */
export function HeroParticles() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d')!
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0, h = 0
    const resize = () => {
      const r = c.getBoundingClientRect()
      w = r.width; h = r.height
      c.width = w * dpr; c.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize(); window.addEventListener('resize', resize)

    type P = { x: number; y: number; vx: number; vy: number; life: number; hue: number }
    const N = 1500
    const ps: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * 1, y: Math.random() * 1,
      vx: 0, vy: 0, life: Math.random() * 200,
      hue: Math.random() * 360,
    }))

    let t = 0
    const noise = (x: number, y: number) =>
      Math.sin(x * 3.1 + t * 0.6) * Math.cos(y * 2.7 - t * 0.4) +
      0.5 * Math.sin((x + y) * 5.2 + t * 0.9)

    const tick = () => {
      t += 0.005
      ctx.fillStyle = 'rgba(0,0,0,0.08)'
      ctx.fillRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      for (const p of ps) {
        const angle = noise(p.x, p.y) * Math.PI * 2
        p.vx = p.vx * 0.92 + Math.cos(angle) * 0.001
        p.vy = p.vy * 0.92 + Math.sin(angle) * 0.001
        p.x += p.vx; p.y += p.vy; p.life -= 1
        if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1 || p.life < 0) {
          p.x = Math.random(); p.y = Math.random()
          p.vx = 0; p.vy = 0; p.life = 200 + Math.random() * 200
        }
        const sx = p.x * w, sy = p.y * h
        ctx.fillStyle = `hsla(${p.hue},90%,68%,0.85)`
        ctx.fillRect(sx, sy, 1.6, 1.6)
      }
      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}
