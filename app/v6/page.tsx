'use client'
// V6 — ZINE (rebuilt): real halftone, CMYK misregistration, comic panels in hero,
// staples, paper texture, hand-drawn marks
import { education, experience, profile, projects, research, skills, stats } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

const PAPER = `
  radial-gradient(circle at 10% 20%, rgba(212,153,0,0.08), transparent 40%),
  radial-gradient(circle at 80% 70%, rgba(180,60,0,0.07), transparent 40%),
  #f4ecda
`
const HALFTONE = `radial-gradient(circle, rgba(0,0,0,0.85) 1.2px, transparent 1.6px)`

export default function Zine() {
  return (
    <div className="min-h-screen text-black overflow-x-hidden selection:bg-pink-400 selection:text-black"
         style={{ background: PAPER, fontFamily: '"Comic Neue", "Marker Felt", "Chalkboard SE", system-ui' }}>
      {/* Photocopy grain */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.22] mix-blend-multiply"
           style={{ background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>")` }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-8 pb-12 space-y-8">

        {/* Issue strip */}
        <div className="flex items-center justify-between text-[10px] tracking-[0.4em] uppercase border-b-2 border-black pb-2 font-bold">
          <span>★ Sanjayzine ★ Issue No. 04</span>
          <span className="hidden md:inline">Printed by hand · Stapled with care</span>
          <span>Free / Pay what you want</span>
        </div>

        {/* COVER PANEL — staples + title with CMYK misregistration */}
        <Panel rotate="-0.8deg" bg="#fde047">
          {/* Staples */}
          <Staple style={{ top: -4, left: '12%' }} />
          <Staple style={{ top: -4, right: '12%' }} />
          {/* Halftone overlay */}
          <div className="absolute inset-0 opacity-25 pointer-events-none"
               style={{ background: HALFTONE, backgroundSize: '7px 7px' }} />

          <div className="relative px-6 py-10 text-center">
            <div className="inline-block bg-black text-yellow-200 px-3 py-1 text-xs uppercase tracking-[0.3em] mb-4 -rotate-2">— Now Showing —</div>

            {/* Misregistered title: cyan + magenta + black */}
            <h1 className="relative font-black uppercase leading-[0.85] tracking-tighter text-black inline-block"
                style={{ fontSize: 'clamp(64px, 14vw, 192px)' }}>
              <span aria-hidden className="absolute inset-0 text-cyan-400" style={{ transform: 'translate(-3px, 2px)', mixBlendMode: 'multiply', opacity: 0.85 }}>
                {profile.first}<br/>vs.<br/>THE BUGS!
              </span>
              <span aria-hidden className="absolute inset-0 text-pink-500" style={{ transform: 'translate(3px, -2px)', mixBlendMode: 'multiply', opacity: 0.85 }}>
                {profile.first}<br/>vs.<br/>THE BUGS!
              </span>
              <span className="relative">{profile.first}<br/>vs.<br/>THE BUGS!</span>
            </h1>

            <p className="mt-6 text-base md:text-lg max-w-xl mx-auto leading-snug font-bold">{profile.blurb}</p>

            <div className="mt-6 flex justify-center gap-2 flex-wrap">
              <Stamp text="OPEN TO HIRE" rotate="-6deg" />
              <Stamp text={profile.location.toUpperCase()} rotate="4deg" />
              <Stamp text="100% INK" rotate="-2deg" />
            </div>

            {/* Hand-drawn arrows */}
            <svg width="60" height="60" viewBox="0 0 60 60" className="absolute bottom-2 right-4 rotate-12 opacity-70">
              <path d="M5 5 Q 30 20 50 50" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M45 42 L 52 50 L 42 50" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <div className="absolute bottom-4 right-16 text-xs font-black uppercase -rotate-6">turn the page!</div>
          </div>

          {/* Page number */}
          <PageNumber n="01" />
        </Panel>

        {/* COMIC PANELS — projects */}
        <Panel rotate="0.5deg" bg="#fff">
          <PanelHeader>★ Episode 1: Selected Missions ★</PanelHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {projects.map((p, i) => <ComicPanel key={p.n} idx={i} project={p} />)}
          </div>
          <PageNumber n="02" />
        </Panel>

        {/* ORIGIN STORY — experience as speech bubbles */}
        <Panel rotate="-0.5deg" bg="#fda4af">
          <PanelHeader>★ The Origin Story ★</PanelHeader>
          {/* Halftone on the pink */}
          <div className="absolute inset-0 opacity-20 pointer-events-none"
               style={{ background: HALFTONE, backgroundSize: '8px 8px' }} />
          <div className="relative px-6 py-7 space-y-5">
            {experience.map((e, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="shrink-0 size-14 rounded-full bg-black text-pink-200 flex items-center justify-center font-black text-xl border-4 border-white"
                     style={{ boxShadow: '3px 3px 0 #000' }}>
                  {String(experience.length - i).padStart(2, '0')}
                </div>
                <div className="flex-1 relative bg-white border-4 border-black p-4"
                     style={{ boxShadow: '5px 5px 0 #000', transform: i % 2 ? 'rotate(0.4deg)' : 'rotate(-0.3deg)' }}>
                  {/* Tail */}
                  <div className="absolute -left-3 top-5 w-0 h-0"
                       style={{ borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: '14px solid black' }} />
                  <div className="absolute -left-[10px] top-[22px] w-0 h-0"
                       style={{ borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderRight: '10px solid white' }} />
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-black text-xl uppercase">{e.company}</h3>
                    <span className="text-xs uppercase font-bold opacity-80">{e.period}</span>
                  </div>
                  <div className="text-sm font-bold mt-0.5">{e.role} · {e.location}</div>
                  <p className="mt-2 text-sm leading-snug font-medium">{e.blurb}</p>
                </div>
              </div>
            ))}
          </div>
          <PageNumber n="03" />
        </Panel>

        {/* POWER INVENTORY — skills as stickers */}
        <Panel rotate="0.6deg" bg="#86efac">
          <PanelHeader>★ Power Inventory ★</PanelHeader>
          <div className="absolute inset-0 opacity-15 pointer-events-none"
               style={{ background: HALFTONE, backgroundSize: '7px 7px' }} />
          <div className="relative px-6 py-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([cat, items], i) => (
              <div key={cat} className="relative bg-white border-4 border-black p-4"
                   style={{ boxShadow: '4px 4px 0 #000', transform: `rotate(${[-0.6, 0.5, -0.3, 0.4][i]}deg)` }}>
                <div className="absolute -top-3 left-3 bg-black text-green-300 px-2 py-0.5 text-xs font-black uppercase tracking-wider">{cat}</div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {items.map((s, idx) => (
                    <span key={s} className="px-2 py-1 text-xs font-black uppercase border-2 border-black"
                          style={{ background: ['#fde047','#f9a8d4','#a5f3fc','#fed7aa','#bef264'][(idx + i) % 5] }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <PageNumber n="04" />
        </Panel>

        {/* RESEARCH — letters page */}
        <Panel rotate="0.6deg" bg="#fee2e2">
          <Staple style={{ top: -4, left: '20%' }} />
          <Staple style={{ top: -4, right: '20%' }} />
          <div className="relative px-6 md:px-10 py-10" style={{ backgroundImage: HALFTONE, backgroundSize: '6px 6px' }}>
            <div className="border-4 border-black bg-yellow-200 inline-block px-4 py-2 mb-4 -rotate-2" style={{ boxShadow: '4px 4px 0 #000' }}>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold">★ Letters Page ★</div>
              <h2 className="font-black uppercase text-3xl md:text-4xl leading-none">PUBLISHED!</h2>
            </div>
            <div className="text-xs uppercase tracking-wider font-bold mb-4">{stats.publications} papers · {stats.citations}+ citations</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {research.map((r, i) => (
                <div key={i} className="border-[3px] border-black bg-white p-4 relative" style={{ boxShadow: '4px 4px 0 #000', transform: `rotate(${(i % 2 ? 0.5 : -0.5)}deg)` }}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider bg-black text-white px-2 py-0.5">{r.year}</div>
                    <div className="text-right">
                      <div className="text-2xl font-black leading-none">{r.citations}★</div>
                      <div className="text-[8px] uppercase tracking-wider">cites</div>
                    </div>
                  </div>
                  <div className="font-black text-base leading-tight">{r.title}</div>
                  <div className="text-[10px] italic mt-2 opacity-70">{r.authors}</div>
                  <div className="text-[10px] font-bold mt-1">{r.venue}</div>
                </div>
              ))}
            </div>
          </div>
          <PageNumber n="05" />
        </Panel>

        {/* SCHOOLING PAGE — education zine */}
        <Panel rotate="-0.5deg" bg="#fef3c7">
          <Staple style={{ top: -4, left: '15%' }} />
          <div className="relative px-6 py-10">
            <div className="text-[10px] uppercase tracking-[0.4em] mb-1 opacity-70">Chapter 06</div>
            <h2 className="font-black uppercase text-4xl md:text-5xl leading-none mb-6">Schooling.</h2>
            <div className="space-y-5">
              {education.map((e, i) => (
                <div key={e.degree} className="border-l-4 border-black pl-4 bg-white/60 py-3 pr-3" style={{ boxShadow: '4px 4px 0 #000' }}>
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em]">№ {i+1}</div>
                    <div className="text-[10px] font-bold uppercase">{e.period}</div>
                  </div>
                  <div className="font-black uppercase text-lg leading-tight mt-1">{e.school}</div>
                  <div className="text-sm italic mt-1">{e.degree}</div>
                  <div className="text-[10px] uppercase tracking-wider mt-1 opacity-70">{e.location}</div>
                </div>
              ))}
            </div>
          </div>
          <PageNumber n="06" />
        </Panel>

        {/* BACK COVER — contact */}
        <Panel rotate="-0.4deg" bg="#fde047">
          <Staple style={{ top: -4, left: '12%' }} />
          <Staple style={{ top: -4, right: '12%' }} />
          <div className="relative px-6 py-12 text-center"
               style={{ backgroundImage: HALFTONE, backgroundSize: '7px 7px' }}>
            <div className="relative bg-yellow-300 inline-block px-6 py-8 border-4 border-black"
                 style={{ boxShadow: '8px 8px 0 #000' }}>
              <div className="text-xs uppercase tracking-[0.3em] mb-2">★ TO BE CONTINUED... ★</div>
              <h2 className="font-black uppercase text-4xl md:text-6xl leading-none mb-4">SAY HI!</h2>
              <div className="space-y-2 text-left text-sm font-bold">
                <a href={`mailto:${profile.email}`} className="block hover:bg-black hover:text-yellow-300 px-2 py-1 transition">→ {profile.email}</a>
                <a href={`https://github.com/${profile.github}`} className="block hover:bg-black hover:text-yellow-300 px-2 py-1 transition">→ github.com/{profile.github}</a>
                <a href={`https://linkedin.com/${profile.linkedin}`} className="block hover:bg-black hover:text-yellow-300 px-2 py-1 transition">→ linkedin.com/{profile.linkedin}</a>
              </div>
            </div>
            <div className="mt-6 text-[10px] uppercase tracking-[0.3em] font-bold">Printed with love & caffeine · {profile.location}</div>
          </div>
          <PageNumber n="05" />
        </Panel>
      </div>

      <VariantSwitcher current="v6" dark={false} />
    </div>
  )
}

function Panel({ children, rotate, bg }: { children: React.ReactNode; rotate: string; bg: string }) {
  return (
    <div className="relative border-4 border-black overflow-hidden"
         style={{ background: bg, boxShadow: '10px 10px 0 #000', transform: `rotate(${rotate})` }}>
      {children}
    </div>
  )
}

function PanelHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-black text-yellow-300 px-6 py-3 font-black uppercase tracking-widest text-center text-sm">
      {children}
    </div>
  )
}

function Staple({ style }: { style: React.CSSProperties }) {
  return (
    <div className="absolute z-20" style={style}>
      <svg width="28" height="14" viewBox="0 0 28 14">
        <rect x="0" y="3" width="28" height="3" fill="#404040" />
        <rect x="0" y="3" width="3" height="11" fill="#404040" />
        <rect x="25" y="3" width="3" height="11" fill="#404040" />
        <rect x="0" y="3" width="28" height="1" fill="#a0a0a0" />
      </svg>
    </div>
  )
}

function PageNumber({ n }: { n: string }) {
  return (
    <div className="absolute bottom-2 right-3 text-[10px] font-black tracking-widest opacity-70">PG. {n}</div>
  )
}

function ComicPanel({ idx, project }: { idx: number; project: typeof projects[number] }) {
  const colors = ['#fde047', '#f9a8d4', '#a5f3fc', '#fed7aa']
  const sfx = ['POW!', 'ZAP!', 'WHAM!', 'BOOM!']
  const cellBg = colors[idx % colors.length]
  return (
    <div className="relative border-r-4 border-b-4 border-black overflow-hidden min-h-[260px]"
         style={{ background: cellBg }}>
      {/* halftone bg */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{ backgroundImage: HALFTONE, backgroundSize: '6px 6px' }} />
      {/* radial burst */}
      <div className="absolute -top-10 -right-10 size-40 rounded-full opacity-40 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #fff, transparent 65%)' }} />

      <div className="relative p-5 h-full flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-0.5">PANEL {project.n}</span>
          <SfxStar text={sfx[idx % sfx.length]} />
        </div>
        <h3 className="font-black uppercase text-2xl leading-tight mt-2 mb-1">{project.title}</h3>
        {/* Speech bubble */}
        <div className="relative bg-white border-[3px] border-black rounded-2xl px-3 py-2 mt-3 max-w-[92%]"
             style={{ boxShadow: '3px 3px 0 #000' }}>
          <p className="text-sm leading-snug font-medium">{project.blurb}</p>
          <div className="absolute -bottom-3 left-6 w-0 h-0"
               style={{ borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '12px solid black' }} />
          <div className="absolute -bottom-[9px] left-[26px] w-0 h-0"
               style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '9px solid white' }} />
        </div>
        <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
          {project.stack.map(s => (
            <span key={s} className="px-1.5 py-0.5 text-[10px] font-black uppercase bg-black text-white">{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SfxStar({ text }: { text: string }) {
  return (
    <div className="relative" style={{ transform: 'rotate(-8deg)' }}>
      <svg width="84" height="84" viewBox="0 0 84 84" className="absolute -top-6 -right-2 -z-0">
        <polygon points="42,2 50,28 78,28 56,44 64,72 42,56 20,72 28,44 6,28 34,28"
                 fill="#fff" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <span className="relative font-black text-2xl tracking-tighter text-rose-600" style={{ WebkitTextStroke: '1.5px black' }}>{text}</span>
    </div>
  )
}

function Stamp({ text, rotate }: { text: string; rotate: string }) {
  return (
    <span className="inline-block px-3 py-1 border-[3px] border-rose-700 text-rose-700 font-black uppercase tracking-widest text-xs"
          style={{ transform: `rotate(${rotate})`, fontFamily: '"Courier New", monospace', opacity: 0.88 }}>
      {text}
    </span>
  )
}
