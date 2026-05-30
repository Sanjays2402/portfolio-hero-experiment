'use client'

import { useEffect, useRef } from 'react'

/** Animated grid — perspective tunnel of glowing lines, synthwave feel. */
export function HeroGrid() {
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

    let off = 0
    const tick = () => {
      off += 0.6
      ctx.fillStyle = 'rgba(0,0,0,0.18)'
      ctx.fillRect(0, 0, w, h)

      const horizon = h * 0.55
      const cx = w / 2

      // gradient sky behind horizon
      const sky = ctx.createLinearGradient(0, 0, 0, horizon)
      sky.addColorStop(0, 'rgba(40,10,80,0)')
      sky.addColorStop(1, 'rgba(255,80,160,0.18)')
      ctx.fillStyle = sky; ctx.fillRect(0, 0, w, horizon)

      // sun
      const sg = ctx.createRadialGradient(cx, horizon - 30, 0, cx, horizon - 30, 160)
      sg.addColorStop(0, 'rgba(255,120,80,0.7)')
      sg.addColorStop(1, 'rgba(255,120,80,0)')
      ctx.fillStyle = sg; ctx.fillRect(0, 0, w, h)

      ctx.strokeStyle = 'rgba(255,80,200,0.7)'
      ctx.lineWidth = 1.2

      // horizontal grid lines (rolling toward viewer)
      for (let i = 0; i < 30; i++) {
        const z = ((i * 40 + off) % 1200) / 1200
        const y = horizon + Math.pow(z, 2) * (h - horizon) * 2
        if (y > h) continue
        const alpha = Math.min(1, (h - y) / (h - horizon) + 0.3) * 0.7
        ctx.strokeStyle = `rgba(255,80,200,${alpha})`
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
      }
      // vertical converging lines
      for (let i = -10; i <= 10; i++) {
        const xBottom = cx + i * (w * 0.18)
        ctx.strokeStyle = `rgba(120,200,255,${0.3 + Math.abs(i) * 0.04})`
        ctx.beginPath(); ctx.moveTo(xBottom, h); ctx.lineTo(cx, horizon); ctx.stroke()
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}
