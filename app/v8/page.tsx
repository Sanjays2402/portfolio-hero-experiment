'use client'
// V8 — Y2K AERO: glossy Frutiger Metro, sky bg, glass bubbles, 2003 vibes
import { profile, experience, projects, skills, education } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

const glossy = `linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 51%, rgba(255,255,255,0.18) 100%)`

export default function Y2K() {
  return (
    <div className="min-h-screen text-slate-900 selection:bg-cyan-300 selection:text-slate-900 relative overflow-x-hidden"
         style={{
           background: `
             radial-gradient(ellipse at 20% 10%, #fef3c7 0%, transparent 40%),
             radial-gradient(ellipse at 80% 90%, #fbcfe8 0%, transparent 45%),
             linear-gradient(180deg, #93c5fd 0%, #7dd3fc 35%, #bae6fd 65%, #fef3c7 100%)
           `,
           fontFamily: '"Segoe UI", "Frutiger", -apple-system, Tahoma, sans-serif',
         }}>

      {/* Floating bubbles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[
          { l: '8%',  t: '60%', s: 200, h: 200 },
          { l: '70%', t: '15%', s: 160, h: 320 },
          { l: '85%', t: '70%', s: 240, h: 280 },
          { l: '40%', t: '85%', s: 120, h: 50 },
          { l: '55%', t: '30%', s: 80,  h: 180 },
        ].map((b, i) => (
          <div key={i} className="absolute rounded-full animate-[float_8s_ease-in-out_infinite]"
               style={{
                 left: b.l, top: b.t,
                 width: b.s, height: b.s,
                 background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.85), hsla(${b.h},90%,75%,0.7) 50%, hsla(${b.h},90%,60%,0.4))`,
                 boxShadow: `inset 0 0 40px rgba(255,255,255,0.6), 0 0 60px hsla(${b.h},90%,70%,0.3)`,
                 animationDelay: `${i * 1.2}s`,
               }} />
        ))}
      </div>

      {/* Top OS bar */}
      <header className="relative z-30 mx-3 mt-3 rounded-2xl flex items-center justify-between px-4 py-2.5 backdrop-blur-xl"
              style={{
                background: 'linear-gradient(180deg, rgba(59,130,246,0.95) 0%, rgba(37,99,235,0.95) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.2), 0 4px 14px rgba(37,99,235,0.4)',
              }}>
        <div className="flex items-center gap-2 text-white">
          <div className="size-5 rounded-md" style={{ background: 'radial-gradient(circle at 35% 30%, #fde047, #ea580c)', boxShadow: 'inset 0 0 4px rgba(255,255,255,0.7)' }} />
          <span className="font-bold text-sm tracking-tight" style={{ textShadow: '0 1px 0 rgba(0,0,0,0.3)' }}>SanjayOS · 2003 SP2</span>
        </div>
        <nav className="hidden md:flex items-center gap-1 text-xs text-white/95">
          {['Home', 'Projects', 'About', 'Skills', 'Contact'].map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} className="px-3 py-1 rounded-md hover:bg-white/20 transition" style={{ textShadow: '0 1px 0 rgba(0,0,0,0.3)' }}>{n}</a>
          ))}
        </nav>
        <div className="text-xs text-white/95 font-mono" style={{ textShadow: '0 1px 0 rgba(0,0,0,0.3)' }}>
          {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </div>
      </header>

      {/* HERO bubble */}
      <section className="relative z-10 px-6 py-16 lg:py-24 max-w-6xl mx-auto">
        <div className="relative rounded-[40px] p-10 lg:p-16 overflow-hidden"
             style={{
               background: 'linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.65) 100%)',
               boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -3px 0 rgba(255,255,255,0.4), 0 20px 60px -10px rgba(37,99,235,0.4), 0 0 0 1px rgba(255,255,255,0.6)',
               backdropFilter: 'blur(20px)',
             }}>
          {/* Top sheen */}
          <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none rounded-t-[40px]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.5), transparent)' }} />

          <div className="relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(180deg, #fb7185, #be123c)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(190,18,60,0.4)', textShadow: '0 1px 0 rgba(0,0,0,0.25)' }}>
              ● NEW · Available for hire
            </span>
            <h1 className="mt-6 font-extrabold leading-[0.95] tracking-tight"
                style={{ fontSize: 'clamp(56px, 11vw, 150px)' }}>
              <span style={{ background: 'linear-gradient(180deg, #1e40af 0%, #0ea5e9 50%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 2px 0 rgba(255,255,255,0.8))' }}>
                Sanjay
              </span>
              <span className="block text-slate-900" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.7)' }}>Santhanam.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-700 max-w-2xl font-medium leading-relaxed">{profile.blurb}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AeroButton primary href="#projects">▶ See my work</AeroButton>
              <AeroButton href={`mailto:${profile.email}`}>✉ Send an email</AeroButton>
            </div>

            {/* Status widgets */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { k: '1M+',  v: 'tx / hour',     h: '#3b82f6' },
                { k: '15',   v: 'hospitals',     h: '#ec4899' },
                { k: '−35%', v: 'booking time',  h: '#10b981' },
                { k: '−40%', v: 'HR processing', h: '#f59e0b' },
              ].map(s => (
                <AeroChip key={s.k} stat={s.k} label={s.v} hue={s.h} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS — sticker cards */}
      <Section id="projects" title="Projects" sub="Featured downloads">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div key={p.n} className="relative rounded-3xl p-6 overflow-hidden group"
                 style={{
                   background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 100%)',
                   boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -2px 0 rgba(255,255,255,0.4), 0 10px 30px -8px rgba(37,99,235,0.3), 0 0 0 1px rgba(255,255,255,0.7)',
                 }}>
              <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none rounded-t-3xl opacity-70" style={{ background: glossy }} />
              <div className="relative flex items-start justify-between mb-2">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-blue-700/80">N° {p.n}</span>
                <div className="size-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl"
                     style={{ background: `linear-gradient(180deg, hsl(${i*70}, 85%, 65%), hsl(${i*70}, 85%, 45%))`, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.15)' }}>
                  {p.title[0]}
                </div>
              </div>
              <h3 className="relative text-2xl font-bold tracking-tight text-slate-900">{p.title}</h3>
              <p className="relative mt-2 text-slate-700 text-sm leading-relaxed">{p.blurb}</p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {p.stack.map(s => (
                  <span key={s} className="px-2 py-1 rounded-full text-[10px] font-bold uppercase text-blue-900"
                        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(186,230,253,0.85))', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 2px rgba(0,0,0,0.1)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE — timeline */}
      <Section id="about" title="Career timeline" sub="Where I&rsquo;ve been">
        <div className="space-y-4">
          {experience.map((e, i) => (
            <div key={i} className="relative rounded-2xl p-5 grid grid-cols-12 gap-4 items-center"
                 style={{
                   background: 'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.55))',
                   boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 4px 12px rgba(37,99,235,0.18)',
                 }}>
              <div className="col-span-12 md:col-span-3 text-xs font-bold uppercase tracking-widest text-blue-700">{e.period}</div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-xl font-bold text-slate-900">{e.company}</h3>
                <div className="text-sm text-slate-600">{e.role} · {e.location}</div>
              </div>
              <p className="col-span-12 md:col-span-5 text-sm text-slate-700">{e.blurb}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SKILLS — chip clouds */}
      <Section id="skills" title="My toolbox" sub="Drag &amp; drop, basically">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.entries(skills).map(([cat, items], idx) => (
            <div key={cat} className="rounded-2xl p-5"
                 style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 20px rgba(37,99,235,0.2)' }}>
              <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">★ {cat}</div>
              <div className="flex flex-wrap gap-2">
                {items.map(s => (
                  <span key={s} className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                        style={{ background: `linear-gradient(180deg, hsl(${(idx*60 + s.length*15)%360}, 85%, 65%), hsl(${(idx*60 + s.length*15)%360}, 85%, 45%))`, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.15)', textShadow: '0 1px 0 rgba(0,0,0,0.25)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT — Buddy List card */}
      <Section id="contact" title="Add me!" sub="Online · Status: looking for cool stuff to build">
        <div className="rounded-3xl p-8 max-w-2xl mx-auto"
             style={{
               background: 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.6))',
               boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.95), 0 20px 50px -10px rgba(37,99,235,0.35)',
             }}>
          <div className="flex items-center gap-4 pb-5 border-b border-blue-200/60">
            <div className="size-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
                 style={{ background: 'linear-gradient(180deg, #0ea5e9, #1e40af)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 12px rgba(30,64,175,0.4)' }}>S</div>
            <div>
              <div className="text-xl font-bold text-slate-900">Sanjay Santhanam</div>
              <div className="text-sm text-emerald-600 flex items-center gap-1.5"><span className="size-2 rounded-full bg-emerald-500 animate-pulse" />Online · {profile.location}</div>
            </div>
          </div>
          <div className="mt-5 space-y-2 text-sm">
            <ContactRow icon="✉" k="Email"    v={profile.email}      href={`mailto:${profile.email}`} />
            <ContactRow icon="◆" k="GitHub"   v={'github.com/' + profile.github} href={`https://github.com/${profile.github}`} />
            <ContactRow icon="►" k="LinkedIn" v={'linkedin.com/' + profile.linkedin} href={`https://linkedin.com/${profile.linkedin}`} />
          </div>
        </div>
        <div className="mt-12 text-center text-xs font-medium tracking-widest uppercase text-blue-900/60">© {new Date().getFullYear()} · SanjayOS · Best viewed at 1024×768</div>
      </Section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-22px) scale(1.04); }
        }
      `}</style>

      <VariantSwitcher current="v8" dark={false} />
    </div>
  )
}

function Section({ id, title, sub, children }: { id: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-blue-700/80 mb-2">{sub}</div>
        <h2 className="text-5xl font-extrabold tracking-tight text-slate-900" style={{ textShadow: '0 2px 0 rgba(255,255,255,0.7)' }}>{title}</h2>
      </div>
      {children}
    </section>
  )
}

function AeroButton({ children, href, primary }: { children: React.ReactNode; href: string; primary?: boolean }) {
  return (
    <a href={href} className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold transition active:translate-y-0.5"
       style={primary ? {
         background: 'linear-gradient(180deg, #38bdf8 0%, #0284c7 100%)',
         color: 'white',
         boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(0,0,0,0.15), 0 6px 18px rgba(2,132,199,0.45)',
         textShadow: '0 1px 0 rgba(0,0,0,0.3)',
       } : {
         background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.55))',
         color: '#0c4a6e',
         boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 4px 12px rgba(37,99,235,0.25)',
       }}>{children}</a>
  )
}

function AeroChip({ stat, label, hue }: { stat: string; label: string; hue: string }) {
  return (
    <div className="relative rounded-2xl p-3 overflow-hidden"
         style={{
           background: `linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.5))`,
           boxShadow: `inset 0 1px 0 rgba(255,255,255,0.95), 0 4px 14px ${hue}40`,
         }}>
      <div className="text-2xl font-extrabold tracking-tight" style={{ color: hue, textShadow: '0 1px 0 rgba(255,255,255,0.7)' }}>{stat}</div>
      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mt-0.5">{label}</div>
    </div>
  )
}

function ContactRow({ icon, k, v, href }: { icon: string; k: string; v: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/80 transition group">
      <span className="size-9 rounded-xl flex items-center justify-center text-white text-base font-bold"
            style={{ background: 'linear-gradient(180deg, #38bdf8, #0284c7)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(2,132,199,0.4)' }}>{icon}</span>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-blue-700/70">{k}</div>
        <div className="text-sm font-bold text-slate-900 group-hover:underline">{v}</div>
      </div>
      <span className="ml-auto text-blue-400 group-hover:translate-x-1 transition">→</span>
    </a>
  )
}
