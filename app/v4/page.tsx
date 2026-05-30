'use client'

import { useEffect, useRef } from 'react'
import { profile, experience, projects, skills, education } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

function GridCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext('2d')!
    const dpr = devicePixelRatio || 1
    const W = () => innerWidth, H = () => innerHeight
    const resize = () => { c.width = W()*dpr; c.height = H()*dpr; c.style.width = W()+'px'; c.style.height = H()+'px'; ctx.setTransform(dpr,0,0,dpr,0,0) }
    resize(); addEventListener('resize', resize)
    let t = 0, raf = 0
    const draw = () => {
      t += 1
      const w = W(), h = H()
      // sky
      const sky = ctx.createLinearGradient(0,0,0,h*0.6)
      sky.addColorStop(0, '#0a0014')
      sky.addColorStop(0.5, '#1a0033')
      sky.addColorStop(1, '#ff006e')
      ctx.fillStyle = sky; ctx.fillRect(0,0,w,h)
      // sun
      const cx = w/2, cy = h*0.5
      const sg = ctx.createLinearGradient(cx, cy-200, cx, cy+50)
      sg.addColorStop(0, '#fde047')
      sg.addColorStop(0.5, '#fb7185')
      sg.addColorStop(1, '#9333ea')
      ctx.fillStyle = sg
      ctx.beginPath(); ctx.arc(cx, cy, 180, 0, Math.PI*2); ctx.fill()
      // sun stripes
      ctx.fillStyle = '#0a0014'
      for (let i = 0; i < 6; i++) {
        const y = cy + 30 + i*16 + i*i*2
        ctx.fillRect(cx-180, y, 360, 6 + i*1.5)
      }
      // ground gradient
      const ground = ctx.createLinearGradient(0, h*0.6, 0, h)
      ground.addColorStop(0, '#0a0014')
      ground.addColorStop(0.5, '#1a0033')
      ground.addColorStop(1, '#3b0764')
      ctx.fillStyle = ground; ctx.fillRect(0, h*0.6, w, h*0.4)
      // grid perspective
      ctx.strokeStyle = '#ff2bd6'
      ctx.lineWidth = 1.4
      ctx.shadowColor = '#ff2bd6'; ctx.shadowBlur = 12
      const horizon = h*0.6
      // horizontal lines, scroll inward
      const scroll = (t * 0.012) % 1
      for (let i = 0; i <= 18; i++) {
        const k = (i + scroll) / 18
        const y = horizon + Math.pow(k, 2.5) * (h - horizon)
        ctx.globalAlpha = 1 - Math.pow(k, 1.4) * 0.4
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
      }
      ctx.globalAlpha = 1
      // vertical lines fanning from vanishing point
      const vx = w/2
      for (let i = -20; i <= 20; i++) {
        const offset = i * (w/16)
        ctx.beginPath(); ctx.moveTo(vx, horizon); ctx.lineTo(vx + offset, h); ctx.stroke()
      }
      ctx.shadowBlur = 0
      // stars
      ctx.fillStyle = '#fff'
      for (let i = 0; i < 60; i++) {
        const sx = (i * 137.5) % w
        const sy = (Math.sin(i*0.7) * 0.4 + 0.4) * horizon * 0.7
        const tw = 0.4 + 0.6 * Math.abs(Math.sin(t*0.02 + i))
        ctx.globalAlpha = tw
        ctx.fillRect(sx, sy, 1.5, 1.5)
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="fixed inset-0 -z-10" />
}

export default function SynthwaveVariant() {
  return (
    <div className="min-h-screen text-cyan-100 font-mono selection:bg-pink-500 selection:text-black">
      <GridCanvas />
      <div className="fixed inset-0 -z-10 pointer-events-none mix-blend-overlay opacity-30"
           style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 3px)' }} />

      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-40 px-5 py-3 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase border-b border-pink-500/40 bg-black/40 backdrop-blur">
        <span className="text-pink-400">◆ Sanjay.exe</span>
        <span className="hidden md:block text-cyan-300/70">{'// Outrun build · v1986'}</span>
        <a href={`mailto:${profile.email}`} className="text-pink-400 hover:text-yellow-300">[ Press Start ▶ ]</a>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="text-pink-400 tracking-[0.5em] text-xs mb-4 animate-pulse">— GREETINGS, OPERATOR —</div>
        <h1 className="font-black uppercase tracking-tight leading-none"
            style={{
              fontSize: 'clamp(60px, 12vw, 180px)',
              background: 'linear-gradient(180deg, #fde047 0%, #f472b6 45%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 24px rgba(244,114,182,0.55)) drop-shadow(0 0 4px rgba(253,224,71,0.6))',
              fontFamily: '"Press Start 2P", monospace, system-ui'
            }}>
          {profile.first}<br/>{profile.last}
        </h1>
        <div className="mt-8 text-pink-300 text-xs tracking-[0.4em] uppercase">{'> '} {profile.title}</div>
        <p className="mt-8 max-w-2xl text-cyan-100/85 leading-relaxed">{profile.blurb}</p>
        <div className="mt-10 flex gap-4 text-xs uppercase tracking-[0.3em]">
          <a href="#missions" className="px-5 py-3 bg-pink-500 text-black font-bold shadow-[0_0_24px_rgba(236,72,153,0.7)] hover:bg-yellow-300 transition">▶ Missions</a>
          <a href="#archives" className="px-5 py-3 border border-cyan-300 text-cyan-200 hover:bg-cyan-300 hover:text-black transition">◆ Archives</a>
        </div>
        <div className="mt-16 text-pink-400/70 text-xs tracking-[0.4em] animate-bounce">▼ SCROLL ▼</div>
      </section>

      {/* MISSIONS (Projects) — arcade cards */}
      <section id="missions" className="relative px-6 py-24 bg-black/65 backdrop-blur-sm border-y border-pink-500/40">
        <SectionHeader sub="LEVEL 02" title="Missions" tone="pink" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map(p => (
            <article key={p.n} className="border-2 border-pink-500 bg-black/70 p-6 relative shadow-[6px_6px_0_0_#22d3ee] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#22d3ee] transition">
              <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase mb-3">
                <span className="text-yellow-300">▶ MISSION {p.n}</span>
                <span className="text-cyan-300">SCORE: ★★★★☆</span>
              </div>
              <h3 className="text-2xl font-bold text-pink-300 uppercase">{p.title}</h3>
              <p className="mt-3 text-cyan-100/80 text-sm">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map(s => <span key={s} className="px-2 py-0.5 text-[10px] uppercase tracking-wider border border-cyan-400 text-cyan-300">{s}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HIGH SCORES (Experience) */}
      <section id="archives" className="relative px-6 py-24 bg-black/70 backdrop-blur-sm border-b border-cyan-500/40">
        <SectionHeader sub="HALL OF FAME" title="High Scores" tone="cyan" />
        <div className="max-w-4xl mx-auto border border-cyan-300/50 bg-black/80">
          <div className="grid grid-cols-12 px-4 py-3 text-[10px] tracking-[0.3em] uppercase text-pink-300 border-b border-cyan-300/30">
            <div className="col-span-3">PERIOD</div>
            <div className="col-span-4">COMPANY</div>
            <div className="col-span-5">RECORD</div>
          </div>
          {experience.map((e, i) => (
            <div key={i} className="grid grid-cols-12 px-4 py-5 text-sm border-b border-cyan-500/15 hover:bg-pink-500/10 transition">
              <div className="col-span-12 md:col-span-3 text-yellow-300">{e.period}</div>
              <div className="col-span-12 md:col-span-4">
                <div className="text-cyan-200 font-bold uppercase">{e.company}</div>
                <div className="text-cyan-400/70 text-[11px]">{e.role}</div>
              </div>
              <div className="col-span-12 md:col-span-5 text-cyan-100/80 mt-1 md:mt-0">{e.blurb}</div>
            </div>
          ))}
        </div>
      </section>

      {/* POWER-UPS (Skills) */}
      <section className="relative px-6 py-24 bg-black/65 backdrop-blur-sm border-b border-pink-500/40">
        <SectionHeader sub="INVENTORY" title="Power-ups" tone="yellow" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="border border-cyan-400/50 p-5 bg-black/70">
              <div className="text-pink-400 text-[10px] tracking-[0.3em] uppercase mb-3">★ {cat}</div>
              <div className="flex flex-wrap gap-2">
                {items.map(s => <span key={s} className="px-2 py-1 text-xs border border-pink-500/60 text-pink-200 bg-pink-500/10">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTINUE? */}
      <section id="contact" className="relative px-6 py-32 bg-black/80 text-center">
        <div className="text-yellow-300 tracking-[0.4em] text-xs mb-6 animate-pulse">— GAME OVER —</div>
        <h2 className="text-5xl md:text-7xl font-black uppercase text-pink-300" style={{ textShadow: '0 0 24px #ec4899' }}>
          Continue?
        </h2>
        <p className="mt-6 text-cyan-200/80 max-w-xl mx-auto text-sm">Insert coin to start a conversation about your next mission.</p>
        <div className="mt-10 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.3em]">
          <a href={`mailto:${profile.email}`} className="px-6 py-3 bg-pink-500 text-black font-bold shadow-[0_0_30px_rgba(236,72,153,0.8)] hover:bg-yellow-300">▶ {profile.email}</a>
          <div className="flex gap-4 mt-4">
            <a href={`https://github.com/${profile.github}`} className="text-cyan-300 hover:text-yellow-300">[GitHub]</a>
            <a href={`https://linkedin.com/${profile.linkedin}`} className="text-cyan-300 hover:text-yellow-300">[LinkedIn]</a>
          </div>
        </div>
        <div className="mt-16 text-[10px] tracking-[0.3em] text-pink-400/60 uppercase">© {new Date().getFullYear()} {profile.name} · {profile.location} · 1 Player Mode</div>
      </section>

      <VariantSwitcher current="v4" dark />
    </div>
  )
}

function SectionHeader({ sub, title, tone }: { sub: string; title: string; tone: 'pink' | 'cyan' | 'yellow' }) {
  const map = { pink: 'text-pink-400', cyan: 'text-cyan-300', yellow: 'text-yellow-300' }
  return (
    <div className="text-center mb-12">
      <div className={`${map[tone]} text-[10px] tracking-[0.5em] uppercase mb-2`}>— {sub} —</div>
      <h2 className="text-4xl md:text-6xl font-black uppercase text-pink-300" style={{ textShadow: '0 0 18px #ec4899' }}>{title}</h2>
    </div>
  )
}
