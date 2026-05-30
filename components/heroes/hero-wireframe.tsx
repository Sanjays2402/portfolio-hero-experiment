'use client'

import { useEffect, useRef } from 'react'

/** Wireframe globe — rotating lat/lng grid, isometric projection. */
export function HeroWireframe() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current
    if (!c) return
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

    let t = 0
    const tick = () => {
      t += 0.004
      ctx.clearRect(0, 0, w, h)
      const cx = w / 2, cy = h / 2
      const R = Math.min(w, h) * 0.32

      // halo
      const g = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, R * 1.8)
      g.addColorStop(0, 'rgba(100,130,255,0.15)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h)

      const sinT = Math.sin(t), cosT = Math.cos(t)
      const project = (x: number, y: number, z: number) => {
        // rotate Y
        const x1 = x * cosT + z * sinT
        const z1 = -x * sinT + z * cosT
        // rotate X slightly
        const tilt = 0.35
        const y2 = y * Math.cos(tilt) - z1 * Math.sin(tilt)
        const z2 = y * Math.sin(tilt) + z1 * Math.cos(tilt)
        const scale = 1 / (1.4 - z2 * 0.4)
        return { sx: cx + x1 * R * scale, sy: cy + y2 * R * scale, depth: z2 }
      }

      // latitudes
      ctx.lineWidth = 1.4
      for (let lat = -80; lat <= 80; lat += 15) {
        const phi = (lat * Math.PI) / 180
        ctx.beginPath()
        for (let lng = 0; lng <= 360; lng += 4) {
          const th = (lng * Math.PI) / 180
          const x = Math.cos(phi) * Math.cos(th)
          const y = Math.sin(phi)
          const z = Math.cos(phi) * Math.sin(th)
          const p = project(x, y, z)
          ctx.strokeStyle = `rgba(160,200,255,${0.5 + (p.depth + 1) * 0.4})`
          if (lng === 0) ctx.moveTo(p.sx, p.sy); else ctx.lineTo(p.sx, p.sy)
        }
        ctx.stroke()
      }
      // longitudes
      for (let lng = 0; lng < 360; lng += 15) {
        const th = (lng * Math.PI) / 180
        ctx.beginPath()
        for (let lat = -90; lat <= 90; lat += 4) {
          const phi = (lat * Math.PI) / 180
          const x = Math.cos(phi) * Math.cos(th)
          const y = Math.sin(phi)
          const z = Math.cos(phi) * Math.sin(th)
          const p = project(x, y, z)
          ctx.strokeStyle = `rgba(160,200,255,${0.4 + (p.depth + 1) * 0.4})`
          if (lat === -90) ctx.moveTo(p.sx, p.sy); else ctx.lineTo(p.sx, p.sy)
        }
        ctx.stroke()
      }

      // bright nodes at intersections
      for (let lat = -60; lat <= 60; lat += 30) {
        for (let lng = 0; lng < 360; lng += 30) {
          const phi = (lat * Math.PI) / 180
          const th = (lng * Math.PI) / 180
          const x = Math.cos(phi) * Math.cos(th)
          const y = Math.sin(phi)
          const z = Math.cos(phi) * Math.sin(th)
          const p = project(x, y, z)
          if (p.depth > -0.3) {
            const a = 0.6 + (p.depth + 1) * 0.4
            // glow
            const g2 = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, 8)
            g2.addColorStop(0, `rgba(180,220,255,${a})`)
            g2.addColorStop(1, 'rgba(180,220,255,0)')
            ctx.fillStyle = g2
            ctx.beginPath(); ctx.arc(p.sx, p.sy, 8, 0, Math.PI * 2); ctx.fill()
            ctx.fillStyle = `rgba(230,240,255,${a})`
            ctx.beginPath(); ctx.arc(p.sx, p.sy, 2, 0, Math.PI * 2); ctx.fill()
          }
        }
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}
