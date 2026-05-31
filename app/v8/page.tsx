'use client'
// V8 — Y2K AERO (rebuilt): real SVG glass orbs with specular highlights,
// XP-style window chrome with title bars + min/max/close,
// Bliss-like sky+hill background, glassy buddy list
import { education, experience, profile, projects, research, skills, stats } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

export default function Y2K() {
  return (
    <div className="min-h-screen text-slate-900 selection:bg-cyan-300 selection:text-slate-900 relative overflow-x-hidden"
         style={{
           background: `
             linear-gradient(180deg, #6ec5ff 0%, #aed8ff 35%, #d8edff 70%, #a8d870 100%)
           `,
           fontFamily: '"Segoe UI", "Frutiger", -apple-system, Tahoma, sans-serif',
         }}>

      {/* Bliss hill silhouette */}
      <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="absolute bottom-0 left-0 right-0 w-full h-[40vh] pointer-events-none z-0">
        <defs>
          <linearGradient id="hill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#9fd066" />
            <stop offset="100%" stopColor="#5e9930" />
          </linearGradient>
        </defs>
        <path d="M0 280 Q 360 140 720 220 T 1440 200 L 1440 400 L 0 400 Z" fill="url(#hill)" />
        <path d="M0 320 Q 480 240 960 300 T 1440 280 L 1440 400 L 0 400 Z" fill="#4d8225" opacity="0.55" />
      </svg>

      {/* Sun + clouds */}
      <div className="absolute top-12 right-20 size-32 rounded-full pointer-events-none z-0"
           style={{ background: 'radial-gradient(circle, rgba(255,255,200,0.95), rgba(255,200,100,0.3) 60%, transparent 80%)', filter: 'blur(6px)' }} />

      {/* Floating glass orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Orb top="14%" left="6%"  size={170} hue={205} delay={0} />
        <Orb top="62%" left="84%" size={210} hue={325} delay={1.2} />
        <Orb top="22%" left="76%" size={130} hue={50}  delay={0.6} />
        <Orb top="74%" left="10%" size={160} hue={140} delay={2.0} />
        <Orb top="40%" left="48%" size={80}  hue={280} delay={1.6} />
      </div>

      {/* Top OS title bar */}
      <header className="relative z-30 mx-3 mt-3 rounded-2xl flex items-center justify-between px-4 py-2.5 backdrop-blur-xl"
              style={{
                background: 'linear-gradient(180deg, rgba(59,130,246,0.95) 0%, rgba(37,99,235,0.95) 50%, rgba(29,78,216,0.95) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.2), 0 4px 14px rgba(37,99,235,0.4)',
              }}>
        <div className="flex items-center gap-2 text-white">
          <StartLogo />
          <span className="font-bold text-sm tracking-tight" style={{ textShadow: '0 1px 0 rgba(0,0,0,0.3)' }}>SanjayOS · 2003 SP2</span>
        </div>
        <nav className="hidden md:flex items-center gap-1 text-xs text-white/95">
          {['Home', 'Projects', 'About', 'Skills', 'Contact'].map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} className="px-3 py-1 rounded-md hover:bg-white/20 transition" style={{ textShadow: '0 1px 0 rgba(0,0,0,0.3)' }}>{n}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-xs text-white/95">
          <WinControls />
        </div>
      </header>

      {/* HERO WINDOW */}
      <section className="relative z-10 px-4 md:px-6 py-8 max-w-6xl mx-auto">
        <Window title="welcome.html — SanjayOS" subtitle="Internet Explorer 6">
          <div className="grid grid-cols-12 gap-6 p-6 md:p-10">
            <div className="col-span-12 md:col-span-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(180deg, #fb7185, #be123c)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(190,18,60,0.4)', textShadow: '0 1px 0 rgba(0,0,0,0.25)' }}>
                ● NEW · Available for hire
              </span>
              <h1 className="mt-5 font-extrabold leading-[0.95] tracking-tight"
                  style={{ fontSize: 'clamp(56px, 11vw, 132px)' }}>
                <span style={{ background: 'linear-gradient(180deg, #1e40af 0%, #0ea5e9 55%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 2px 0 rgba(255,255,255,0.8))' }}>
                  Sanjay
                </span>
                <span className="block text-slate-900" style={{ textShadow: '0 1px 0 rgba(255,255,255,0.7)' }}>Santhanam.</span>
              </h1>
              <p className="mt-5 text-lg text-slate-700 max-w-xl font-medium leading-relaxed">{profile.blurb}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <AeroButton primary href="#projects">▶ See my work</AeroButton>
                <AeroButton href={`mailto:${profile.email}`}>✉ Send an email</AeroButton>
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { k: '1M+',  v: 'tx / hour',     h: '#3b82f6' },
                  { k: '15',   v: 'hospitals',     h: '#ec4899' },
                  { k: '−35%', v: 'booking time',  h: '#10b981' },
                  { k: '−40%', v: 'HR processing', h: '#f59e0b' },
                ].map(s => <AeroChip key={s.k} stat={s.k} label={s.v} hue={s.h} />)}
              </div>
            </div>

            {/* Sidebar with desktop icons */}
            <aside className="col-span-12 md:col-span-4">
              <GlassPanel title="My Computer">
                <div className="grid grid-cols-3 gap-3 p-4">
                  {[
                    { icon: '💻', label: 'About' },
                    { icon: '🚀', label: 'Projects' },
                    { icon: '🧰', label: 'Skills' },
                    { icon: '🏢', label: 'Career' },
                    { icon: '✉️', label: 'Contact' },
                    { icon: '★',  label: 'Hire me' },
                  ].map(i => (
                    <a key={i.label} href={`#${i.label.toLowerCase()}`} className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-blue-100/60 transition group">
                      <div className="size-12 rounded-xl flex items-center justify-center text-2xl"
                           style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(186,230,253,0.7))', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 2px 6px rgba(37,99,235,0.25)' }}>
                        {i.icon}
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 group-hover:text-blue-700">{i.label}</span>
                    </a>
                  ))}
                </div>
              </GlassPanel>
            </aside>
          </div>
        </Window>
      </section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" sub="Featured downloads">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <GlassCard key={p.n} index={i} title={p.title} badge={`№ ${p.n}`}>
              <p className="text-slate-700 text-sm leading-relaxed">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map(s => (
                  <span key={s} className="px-2 py-1 rounded-full text-[10px] font-bold uppercase text-blue-900"
                        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(186,230,253,0.85))', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 2px rgba(0,0,0,0.1)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="about" title="Career timeline" sub="Where I've been">
        <GlassPanel>
          <div className="divide-y divide-blue-200/40">
            {experience.map((e, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 items-center p-5 hover:bg-blue-50/40 transition">
                <div className="col-span-12 md:col-span-3 text-xs font-bold uppercase tracking-widest text-blue-700">{e.period}</div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-xl font-bold text-slate-900">{e.company}</h3>
                  <div className="text-sm text-slate-600">{e.role} · {e.location}</div>
                </div>
                <p className="col-span-12 md:col-span-5 text-sm text-slate-700">{e.blurb}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="My toolbox" sub="Drag & drop, basically">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.entries(skills).map(([cat, items], idx) => (
            <GlassPanel key={cat} title={cat}>
              <div className="p-5 flex flex-wrap gap-2">
                {items.map(s => (
                  <span key={s} className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                        style={{ background: `linear-gradient(180deg, hsl(${(idx*60 + s.length*15)%360}, 85%, 65%), hsl(${(idx*60 + s.length*15)%360}, 85%, 45%))`, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.15)', textShadow: '0 1px 0 rgba(0,0,0,0.25)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </GlassPanel>
          ))}
        </div>
      </Section>

      {/* RESEARCH — published papers as CDs */}
      <Section id="research" title="My research papers" sub={`Burned to disc · ${stats.publications} CDs · ${stats.citations}+ citations`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {research.map((r, i) => (
            <GlassPanel key={i} title={`Track ${String(i+1).padStart(2,'0')} · ${r.year}`}>
              <div className="p-5 flex gap-4 items-start">
                <div className="shrink-0 size-20 rounded-full relative grid place-items-center"
                     style={{ background: `conic-gradient(from 0deg, hsl(${i*70},85%,75%), hsl(${i*70+90},85%,70%), hsl(${i*70+180},85%,75%), hsl(${i*70+270},85%,70%), hsl(${i*70},85%,75%))`, boxShadow: 'inset 0 0 0 4px rgba(255,255,255,0.6), 0 4px 12px rgba(0,0,0,0.15)' }}>
                  <div className="size-7 rounded-full bg-white border-2 border-slate-200" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{r.type} · cited {r.citations}×</div>
                  <div className="font-bold text-slate-900 leading-snug mt-1">{r.title}</div>
                  <div className="text-xs text-slate-600 italic mt-1">{r.authors}</div>
                  <div className="text-xs text-blue-700 mt-1">{r.venue}</div>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </Section>

      {/* CONTACT — Buddy List */}
      <Section id="contact" title="Add me!" sub="Online · Status: looking for cool stuff to build">
        <Window title="Sanjay's Buddy List — MSN Messenger" subtitle="Online">
          <div className="p-6">
            <div className="flex items-center gap-4 pb-5 border-b border-blue-200/60">
              <div className="size-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold relative"
                   style={{ background: 'linear-gradient(180deg, #0ea5e9, #1e40af)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 12px rgba(30,64,175,0.4)' }}>
                S
                <span className="absolute -bottom-1 -right-1 size-4 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">Sanjay Santhanam</div>
                <div className="text-sm text-emerald-600 flex items-center gap-1.5"><span className="size-2 rounded-full bg-emerald-500 animate-pulse" />Online · {profile.location}</div>
              </div>
            </div>
            <div className="mt-5 space-y-1.5 text-sm">
              <ContactRow icon="✉" k="Email"    v={profile.email}                href={`mailto:${profile.email}`} />
              <ContactRow icon="◆" k="GitHub"   v={'github.com/' + profile.github}   href={`https://github.com/${profile.github}`} />
              <ContactRow icon="►" k="LinkedIn" v={'linkedin.com/' + profile.linkedin} href={`https://linkedin.com/${profile.linkedin}`} />
            </div>
          </div>
        </Window>
        <div className="mt-10 text-center text-xs font-medium tracking-widest uppercase text-blue-900/60">© {new Date().getFullYear()} · SanjayOS · Best viewed at 1024×768</div>
      </Section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-22px); }
        }
      `}</style>

      <VariantSwitcher current="v8" dark={false} />
    </div>
  )
}

/* ---------- Window chrome ---------- */

function Window({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl overflow-hidden"
         style={{
           background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))',
           backdropFilter: 'blur(20px)',
           boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.95), 0 20px 60px -10px rgba(37,99,235,0.45), 0 0 0 1px rgba(255,255,255,0.7)',
         }}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2"
           style={{
             background: 'linear-gradient(180deg, #4b9cf5 0%, #2563eb 60%, #1e40af 100%)',
             boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.25)',
           }}>
        <div className="flex items-center gap-2 text-white text-sm font-bold" style={{ textShadow: '0 1px 0 rgba(0,0,0,0.4)' }}>
          <span>{title}</span>
          {subtitle && <span className="opacity-70 text-xs">— {subtitle}</span>}
        </div>
        <WinControls />
      </div>
      {children}
    </div>
  )
}

function WinControls() {
  return (
    <div className="flex items-center gap-1">
      {[
        { ch: '_', bg: 'linear-gradient(180deg, #9ec5fc, #4b9cf5)' },
        { ch: '☐', bg: 'linear-gradient(180deg, #9ec5fc, #4b9cf5)' },
        { ch: '✕', bg: 'linear-gradient(180deg, #ff8a8a, #d62b2b)' },
      ].map((c, i) => (
        <button key={i} className="size-5 rounded-md text-white text-[11px] font-bold flex items-center justify-center hover:brightness-110 transition"
                style={{ background: c.bg, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.2)', textShadow: '0 1px 0 rgba(0,0,0,0.3)' }}>
          {c.ch}
        </button>
      ))}
    </div>
  )
}

function StartLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22">
      <defs>
        <linearGradient id="sl-r" x1="0" x2="1"><stop offset="0%" stopColor="#ff5a5a"/><stop offset="100%" stopColor="#c41e1e"/></linearGradient>
        <linearGradient id="sl-g" x1="0" x2="1"><stop offset="0%" stopColor="#7cd86b"/><stop offset="100%" stopColor="#2e9b1f"/></linearGradient>
        <linearGradient id="sl-b" x1="0" x2="1"><stop offset="0%" stopColor="#5bb0ff"/><stop offset="100%" stopColor="#1e6cd6"/></linearGradient>
        <linearGradient id="sl-y" x1="0" x2="1"><stop offset="0%" stopColor="#ffe066"/><stop offset="100%" stopColor="#d4a000"/></linearGradient>
      </defs>
      <path d="M2 4 L10 3 L10 10 L2 10 Z" fill="url(#sl-r)" />
      <path d="M12 3 L20 2 L20 10 L12 10 Z" fill="url(#sl-g)" />
      <path d="M2 12 L10 12 L10 19 L2 18 Z" fill="url(#sl-b)" />
      <path d="M12 12 L20 12 L20 20 L12 19 Z" fill="url(#sl-y)" />
    </svg>
  )
}

function Orb({ top, left, size, hue, delay }: { top: string; left: string; size: number; hue: number; delay: number }) {
  return (
    <svg className="absolute"
         style={{ top, left, width: size, height: size, animation: `float 8s ease-in-out ${delay}s infinite` }}
         viewBox="0 0 100 100">
      <defs>
        <radialGradient id={`orb-${hue}`} cx="35%" cy="30%" r="65%">
          <stop offset="0%"  stopColor="rgba(255,255,255,0.95)" />
          <stop offset="40%" stopColor={`hsla(${hue}, 90%, 75%, 0.7)`} />
          <stop offset="80%" stopColor={`hsla(${hue}, 90%, 55%, 0.5)`} />
          <stop offset="100%" stopColor={`hsla(${hue}, 90%, 40%, 0.25)`} />
        </radialGradient>
        <radialGradient id={`orb-hl-${hue}`} cx="32%" cy="26%" r="22%">
          <stop offset="0%"  stopColor="rgba(255,255,255,1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <radialGradient id={`orb-rim-${hue}`} cx="50%" cy="50%" r="50%">
          <stop offset="85%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor={`hsla(${hue}, 90%, 90%, 0.5)`} />
        </radialGradient>
      </defs>
      {/* Drop shadow blob */}
      <ellipse cx="50" cy="92" rx="28" ry="3" fill={`hsla(${hue}, 60%, 30%, 0.25)`} />
      {/* Main orb */}
      <circle cx="50" cy="50" r="44" fill={`url(#orb-${hue})`} />
      {/* Rim glow */}
      <circle cx="50" cy="50" r="44" fill={`url(#orb-rim-${hue})`} />
      {/* Bottom reflection */}
      <ellipse cx="50" cy="78" rx="22" ry="6" fill="rgba(255,255,255,0.25)" />
      {/* Specular highlight */}
      <ellipse cx="35" cy="32" rx="14" ry="9" fill={`url(#orb-hl-${hue})`} transform="rotate(-25 35 32)" />
    </svg>
  )
}

function GlassPanel({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden"
         style={{
           background: 'linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,255,255,0.5))',
           boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 24px rgba(37,99,235,0.22), 0 0 0 1px rgba(255,255,255,0.7)',
         }}>
      {title && (
        <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-900"
             style={{ background: 'linear-gradient(180deg, rgba(186,230,253,0.7), rgba(125,211,252,0.4))', borderBottom: '1px solid rgba(255,255,255,0.7)' }}>
          ★ {title}
        </div>
      )}
      {children}
    </div>
  )
}

function GlassCard({ title, badge, children, index }: { title: string; badge: string; children: React.ReactNode; index: number }) {
  return (
    <div className="relative rounded-3xl p-6 overflow-hidden"
         style={{
           background: 'linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.55) 100%)',
           boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.95), 0 10px 30px -8px rgba(37,99,235,0.3), 0 0 0 1px rgba(255,255,255,0.7)',
         }}>
      {/* Sheen */}
      <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none rounded-t-3xl opacity-70"
           style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.55), transparent)' }} />
      <div className="relative flex items-start justify-between mb-2">
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-blue-700/80">{badge}</span>
        <div className="size-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl"
             style={{ background: `linear-gradient(180deg, hsl(${index*70}, 85%, 65%), hsl(${index*70}, 85%, 45%))`, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.15)' }}>
          {title[0]}
        </div>
      </div>
      <h3 className="relative text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
      <div className="relative mt-2">{children}</div>
    </div>
  )
}

function Section({ id, title, sub, children }: { id: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 px-4 md:px-6 py-16 max-w-6xl mx-auto">
      <div className="mb-8">
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
           background: 'linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,0.5))',
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
