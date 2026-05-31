'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import { profile, experience, projects, skills, education, research, stats } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

function AuroraCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    const resize = () => { c.width = innerWidth*dpr; c.height = innerHeight*dpr; c.style.width=innerWidth+'px'; c.style.height=innerHeight+'px'; ctx.scale(dpr,dpr) }
    resize(); addEventListener('resize', resize)
    let t = 0; let raf = 0
    const blobs = [
      { x: 0.25, y: 0.35, r: 380, hue: 265, dx: 0.0003, dy: 0.0002 },
      { x: 0.75, y: 0.55, r: 420, hue: 195, dx: -0.0002, dy: 0.0003 },
      { x: 0.55, y: 0.85, r: 340, hue: 320, dx: 0.0001, dy: -0.0002 },
    ]
    const draw = () => {
      t++
      ctx.clearRect(0,0,innerWidth,innerHeight)
      ctx.fillStyle = '#05060a'; ctx.fillRect(0,0,innerWidth,innerHeight)
      blobs.forEach(b => {
        const cx = (b.x + Math.sin(t*b.dx)*0.08) * innerWidth
        const cy = (b.y + Math.cos(t*b.dy)*0.08) * innerHeight
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r)
        g.addColorStop(0, `hsla(${b.hue}, 90%, 60%, 0.55)`)
        g.addColorStop(1, `hsla(${b.hue}, 90%, 60%, 0)`)
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, b.r, 0, Math.PI*2); ctx.fill()
      })
      // noise overlay
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="fixed inset-0 -z-10" />
}

export default function GlassVariant() {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      <AuroraCanvas />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
      <div className="fixed inset-0 -z-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence baseFrequency=%220.9%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.18%22/></svg>')] opacity-40 mix-blend-overlay pointer-events-none" />

      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-4 mt-4 px-5 py-3 rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-gradient-to-br from-fuchsia-400 via-violet-400 to-cyan-300" />
            <span className="font-medium text-sm tracking-wide">Sanjay Santhanam</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-xs text-white/70">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#stack" className="hover:text-white">Stack</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href={`mailto:${profile.email}`} className="text-xs px-3 py-1.5 rounded-full bg-white text-black hover:bg-white/80 transition">Get in touch</a>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 lg:px-16 pt-32">
        <div className="max-w-6xl">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-white/70 mb-8">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> {profile.status}
          </motion.div>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.1}} className="text-6xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
            Backends that<br />
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-200 bg-clip-text text-transparent">hold the line.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.2}} className="mt-8 text-xl text-white/65 max-w-2xl leading-relaxed">
            {profile.blurb}
          </motion.p>
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.3}} className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/85 transition">See selected work →</a>
            <a href="#about" className="px-5 py-3 rounded-full bg-white/[0.06] border border-white/15 text-sm hover:bg-white/[0.1] transition">About me</a>
          </motion.div>

          {/* Marquee strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: '1M+', v: 'transactions / hour' },
              { k: '15 hospitals', v: 'on FHIR scheduling' },
              { k: '−35%', v: 'booking time' },
              { k: '−40%', v: 'HR processing' },
            ].map(s => (
              <div key={s.k} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                <div className="text-2xl font-semibold tracking-tight">{s.k}</div>
                <div className="text-xs text-white/55 mt-1 uppercase tracking-wider">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <Section id="work" eyebrow="Selected work">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map(p => (
            <article key={p.n} className="group p-7 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:bg-white/[0.07] transition relative overflow-hidden">
              <div className="absolute -top-20 -right-20 size-64 rounded-full bg-gradient-to-br from-fuchsia-500/15 via-violet-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-white/45 uppercase">N° {p.n}</span>
                  <ArrowUpRight className="size-4 text-white/40 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                </div>
                <h3 className="text-2xl font-semibold mt-3 tracking-tight">{p.title}</h3>
                <p className="text-white/65 mt-2 text-sm leading-relaxed">{p.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map(s => <span key={s} className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase text-white/65 rounded-full border border-white/15 bg-white/[0.04]">{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* About / Experience */}
      <Section id="about" eyebrow="A short history">
        <div className="space-y-3">
          {experience.map((e, i) => (
            <motion.article key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
              className="grid grid-cols-12 gap-4 p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <div className="col-span-12 md:col-span-3 font-mono text-[11px] tracking-wider uppercase text-white/50 pt-1">{e.period}</div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="text-xl font-semibold tracking-tight">{e.company}</h3>
                <div className="text-sm text-white/60 mt-1">{e.role} · {e.location}</div>
              </div>
              <p className="col-span-12 md:col-span-4 text-sm text-white/70 leading-relaxed">{e.blurb}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Stack */}
      <Section id="stack" eyebrow="The toolbox">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/45 mb-4">{cat}</div>
              <div className="flex flex-wrap gap-2">
                {items.map(s => (
                  <span key={s} className="px-3 py-1.5 rounded-full text-xs bg-white/[0.06] border border-white/10">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Research */}
      <Section id="research" eyebrow={`Research · ${stats.publications} pubs · ${stats.citations} citations`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {research.map((r, i) => (
            <article key={i} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-3">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45">{r.type} · {r.year}</div>
                <div className="text-right">
                  <div className="text-xl font-semibold tabular-nums">{r.citations}</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/50">cites</div>
                </div>
              </div>
              <h3 className="text-base font-semibold mt-3 leading-snug">{r.title}</h3>
              <div className="text-xs text-white/55 mt-2 italic">{r.authors}</div>
              <div className="text-xs text-white/65 mt-1">{r.venue}</div>
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="Education">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map(ed => (
            <div key={ed.school} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <div className="text-xs text-white/55 font-mono uppercase tracking-wider">{ed.period}</div>
              <div className="text-xl font-semibold mt-2">{ed.degree}</div>
              <div className="text-sm text-white/65">{ed.school} · {ed.location}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="px-6 lg:px-16 py-32">
        <div className="max-w-4xl">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 mb-6">Let&rsquo;s build</div>
          <h2 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1]">Have an interesting problem?</h2>
          <p className="mt-6 text-white/65 text-lg max-w-2xl">I&rsquo;m especially curious about distributed systems, healthcare infra, and event-driven design. Drop a note.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/85 transition"><Mail className="size-4" />{profile.email}</a>
            <a href={`https://github.com/${profile.github}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.06] border border-white/15 text-sm hover:bg-white/[0.1] transition"><Github className="size-4" />GitHub</a>
            <a href={`https://linkedin.com/${profile.linkedin}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.06] border border-white/15 text-sm hover:bg-white/[0.1] transition"><Linkedin className="size-4" />LinkedIn</a>
          </div>
        </div>
        <div className="mt-24 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
          <span>{profile.location}</span>
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </section>

      <VariantSwitcher current="v1" dark />
    </div>
  )
}

function Section({ id, eyebrow, children }: { id: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6 lg:px-16 py-24">
      <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/45 mb-8">{eyebrow}</div>
      {children}
    </section>
  )
}
