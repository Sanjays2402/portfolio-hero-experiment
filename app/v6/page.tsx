'use client'
// V6 — ZINE: halftone print, comic panels, hand-drawn, speech bubbles, paper texture
import { profile, experience, projects, skills, education } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

const halftone = `radial-gradient(circle, rgba(0,0,0,0.85) 1px, transparent 1.4px)`
const paper = `
  radial-gradient(circle at 10% 20%, rgba(212,153,0,0.06), transparent 40%),
  radial-gradient(circle at 80% 70%, rgba(180,60,0,0.05), transparent 40%),
  #f5f0e1
`

export default function Zine() {
  return (
    <div className="min-h-screen text-black font-sans selection:bg-pink-400 selection:text-black overflow-x-hidden"
         style={{ background: paper, fontFamily: '"Comic Neue", "Marker Felt", "Chalkboard SE", system-ui' }}>
      {/* Paper grain */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.18] mix-blend-multiply"
           style={{ background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='2'/></filter><rect width='220' height='220' filter='url(%23n)' opacity='0.7'/></svg>")` }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 space-y-6">

        {/* Cover / masthead — issue style */}
        <Panel rotate="-1deg" bg="#fde047">
          <div className="px-6 py-4 flex items-baseline justify-between border-b-4 border-black">
            <span className="font-black uppercase tracking-tighter text-2xl">SANJAYZINE</span>
            <span className="text-xs uppercase tracking-widest">Issue No. 04 · 2026</span>
            <span className="text-xs uppercase tracking-widest">$0.00 · Free</span>
          </div>
          <div className="px-6 py-10 text-center">
            <div className="inline-block bg-black text-yellow-200 px-3 py-1 text-xs uppercase tracking-[0.3em] mb-4 -rotate-2">— Now Showing —</div>
            <h1 className="font-black uppercase leading-[0.85] tracking-tighter"
                style={{ fontSize: 'clamp(72px, 16vw, 220px)', textShadow: '5px 5px 0 #ec4899, 9px 9px 0 #000' }}>
              {profile.first}<br/>
              <span className="inline-block -rotate-2">vs.</span><br/>
              THE BUGS!
            </h1>
            <p className="mt-6 text-lg max-w-xl mx-auto leading-snug">
              Software engineer working on the unglamorous middle layer where healthcare, finance, and the systems behind them quietly hold the line.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Stamp text="OPEN TO HIRE" rotate="-6deg" />
              <Stamp text="BELLEVUE, WA" rotate="4deg" />
              <Stamp text="100% INK" rotate="-2deg" />
            </div>
          </div>
        </Panel>

        {/* Comic strip — projects as panels */}
        <Panel rotate="0.4deg" bg="#fff">
          <PanelHeader>★ EPISODE 1: SELECTED MISSIONS ★</PanelHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {projects.map((p, i) => (
              <ComicPanel key={p.n} idx={i} project={p} />
            ))}
          </div>
        </Panel>

        {/* Origin story — experience */}
        <Panel rotate="-0.6deg" bg="#fda4af">
          <PanelHeader>★ THE ORIGIN STORY ★</PanelHeader>
          <div className="px-6 py-6 space-y-5">
            {experience.map((e, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="shrink-0 size-14 rounded-full bg-black text-pink-200 flex items-center justify-center font-black text-xl border-4 border-white"
                     style={{ boxShadow: '3px 3px 0 #000' }}>
                  {String(experience.length - i).padStart(2, '0')}
                </div>
                <div className="flex-1 relative bg-white border-4 border-black p-4"
                     style={{ boxShadow: '5px 5px 0 #000', transform: i % 2 ? 'rotate(0.5deg)' : 'rotate(-0.3deg)' }}>
                  <div className="absolute -left-3 top-5 w-0 h-0"
                       style={{ borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: '14px solid black' }} />
                  <div className="absolute -left-[10px] top-[22px] w-0 h-0"
                       style={{ borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderRight: '10px solid white' }} />
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-black text-xl uppercase">{e.company}</h3>
                    <span className="text-xs uppercase font-bold opacity-80">{e.period}</span>
                  </div>
                  <div className="text-sm font-bold mt-0.5">{e.role} · {e.location}</div>
                  <p className="mt-2 text-sm leading-snug">{e.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Power inventory — skills */}
        <Panel rotate="0.8deg" bg="#86efac">
          <PanelHeader>★ POWER INVENTORY ★</PanelHeader>
          <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([cat, items], i) => (
              <div key={cat} className="bg-white border-4 border-black p-4 relative"
                   style={{ boxShadow: '4px 4px 0 #000', transform: `rotate(${[-0.6, 0.7, -0.4, 0.5][i]}deg)` }}>
                <div className="absolute -top-3 left-3 bg-black text-green-300 px-2 py-0.5 text-xs font-black uppercase tracking-wider">{cat}</div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {items.map(s => (
                    <span key={s} className="px-2 py-1 text-xs font-bold uppercase border-2 border-black"
                          style={{ background: ['#fde047','#f9a8d4','#a5f3fc','#fed7aa'][Math.floor(Math.random()*4)] }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Back cover — contact */}
        <Panel rotate="-0.5deg" bg="#fde047">
          <div className="relative px-6 py-12 text-center"
               style={{ backgroundImage: halftone, backgroundSize: '8px 8px', backgroundPosition: '0 0' }}>
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
            <div className="mt-6 text-xs uppercase tracking-[0.3em] font-bold">Printed with love & caffeine · {profile.location}</div>
          </div>
        </Panel>
      </div>

      <VariantSwitcher current="v6" dark={false} />
    </div>
  )
}

function Panel({ children, rotate, bg }: { children: React.ReactNode; rotate: string; bg: string }) {
  return (
    <div className="relative border-4 border-black"
         style={{ background: bg, boxShadow: '10px 10px 0 #000', transform: `rotate(${rotate})` }}>
      {children}
    </div>
  )
}

function PanelHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-yellow-300 px-6 py-3 font-black uppercase tracking-widest text-center text-sm">
      {children}
    </div>
  )
}

function ComicPanel({ idx, project }: { idx: number; project: typeof import('@/lib/portfolio-data').projects[number] }) {
  const colors = ['#fde047', '#f9a8d4', '#a5f3fc', '#fed7aa']
  const sfx = ['POW!', 'ZAP!', 'WHAM!', 'BOOM!']
  const cellBg = colors[idx % colors.length]
  return (
    <div className="relative border-r-4 border-b-4 border-black overflow-hidden"
         style={{ background: cellBg, minHeight: 240 }}>
      {/* halftone bg */}
      <div className="absolute inset-0 opacity-30"
           style={{ backgroundImage: halftone, backgroundSize: '6px 6px' }} />
      <div className="relative p-5 h-full flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-0.5">PANEL {project.n}</span>
          <span className="font-black text-2xl -rotate-6 text-rose-600" style={{ WebkitTextStroke: '1.5px black' }}>{sfx[idx % sfx.length]}</span>
        </div>
        <h3 className="font-black uppercase text-2xl leading-tight mt-2 mb-1">{project.title}</h3>
        {/* Speech bubble */}
        <div className="relative bg-white border-[3px] border-black rounded-2xl px-3 py-2 mt-3 max-w-[90%]"
             style={{ boxShadow: '3px 3px 0 #000' }}>
          <p className="text-sm leading-snug">{project.blurb}</p>
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

function Stamp({ text, rotate }: { text: string; rotate: string }) {
  return (
    <span className="inline-block px-3 py-1 border-[3px] border-rose-700 text-rose-700 font-black uppercase tracking-widest text-xs"
          style={{ transform: `rotate(${rotate})`, fontFamily: '"Courier New", monospace', opacity: 0.85 }}>
      {text}
    </span>
  )
}
