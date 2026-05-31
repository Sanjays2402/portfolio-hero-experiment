'use client'
import { profile, experience, projects, skills, education } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

/* ─────────────  V14 · POLAROID CORKBOARD  ─────────────
   Scattered Polaroid instants pinned + washi-taped to a cork wall.
   Each Polaroid is a tactile artifact with caption, rotation, push-pin.    */

type Card = {
  id: string
  kind: 'intro'|'exp'|'project'|'skill'|'edu'|'note'
  header: string
  body: React.ReactNode
  caption?: string
  rotate: number
  x: string; y: string
  z?: number
  tone?: 'photo'|'note'|'card'
  color?: string
}

const cards: Card[] = [
  {
    id: 'intro', kind: 'intro', tone: 'photo',
    header: profile.name, caption: `"${profile.status}" · ${profile.location}`,
    body: <div className="h-full grid place-items-center bg-gradient-to-br from-amber-200 to-orange-300 text-stone-800"><div className="text-center"><div className="text-4xl">👋</div><div className="font-bold mt-2">Hi, I'm Sanjay</div><div className="text-xs mt-1 opacity-70">Backend · Distributed Systems</div></div></div>,
    rotate: -4, x: '4%',  y: '6%',  z: 12,
  },
  ...experience.map((e, i): Card => ({
    id: 'exp-'+i, kind: 'exp', tone: 'photo',
    header: e.company, caption: `${e.role} · ${e.period}`,
    body: <div className="h-full p-3 bg-gradient-to-br from-stone-100 to-stone-300 text-stone-800 flex flex-col"><div className="text-[10px] uppercase tracking-wider opacity-60">{e.location}</div><p className="text-[13px] leading-snug mt-1 flex-1">{e.blurb}</p><div className="text-[10px] uppercase tracking-wider opacity-60 mt-2">{e.stack.join(' · ')}</div></div>,
    rotate: [2, -3, 1.5][i] ?? 0,
    x: ['28%','50%','72%'][i] ?? '40%',
    y: ['4%','8%','3%'][i] ?? '10%',
    z: 8 + i,
  })),
  ...projects.map((p, i): Card => ({
    id: 'proj-'+i, kind: 'project', tone: 'photo',
    header: p.title, caption: p.stack.join(' · '),
    body: <div className="h-full p-3 flex flex-col" style={{ background: ['linear-gradient(135deg,#fde68a,#fbbf24)','linear-gradient(135deg,#bbf7d0,#4ade80)','linear-gradient(135deg,#bfdbfe,#60a5fa)','linear-gradient(135deg,#fecaca,#f87171)'][i] }}>
      <div className="text-[10px] uppercase tracking-wider opacity-70 font-bold">Project · {p.n}</div>
      <p className="text-[13px] leading-snug mt-2 flex-1 text-stone-800">{p.blurb}</p>
    </div>,
    rotate: [-2, 4, -3, 2][i] ?? 0,
    x: ['8%','30%','55%','78%'][i] ?? '50%',
    y: ['36%','42%','38%','44%'][i] ?? '40%',
    z: 6 + i,
  })),
  {
    id: 'skills', kind: 'skill', tone: 'note',
    header: 'Toolbox',
    body: <div className="p-3 text-[12px] leading-relaxed text-stone-800">
      {Object.entries(skills).map(([k, v]) => (
        <div key={k} className="mb-1.5"><b className="text-stone-900">{k}:</b> {(v as string[]).join(', ')}</div>
      ))}
    </div>,
    rotate: -2.5, x: '4%',  y: '70%', z: 5, color: '#fde68a',
  },
  {
    id: 'edu', kind: 'edu', tone: 'note',
    header: 'Education',
    body: <div className="p-3 text-[12px] text-stone-800">
      {education.map(e => (
        <div key={e.degree} className="mb-2 border-b border-dashed border-stone-400/50 pb-2 last:border-0">
          <div className="font-bold">{e.degree}</div>
          <div className="opacity-75 italic">{e.school} · {e.year}</div>
        </div>
      ))}
    </div>,
    rotate: 3, x: '26%', y: '74%', z: 4, color: '#bbf7d0',
  },
  {
    id: 'contact', kind: 'note', tone: 'card',
    header: 'How to reach me',
    body: <div className="p-3 text-[12px] leading-relaxed text-stone-100">
      <div className="space-y-1.5 font-mono text-[11px]">
        <div>✉  {profile.email}</div>
        <div>◎  github.com/{profile.github}</div>
        <div>♺  linkedin.com/{profile.linkedin}</div>
        <div>◐  {profile.location}</div>
      </div>
      <div className="text-[11px] italic opacity-80 mt-3 not-italic font-bold">→ {profile.status.toLowerCase()}.</div>
    </div>,
    rotate: -1.5, x: '49%', y: '72%', z: 6, color: '#1c1917',
  },
  {
    id: 'note1', kind: 'note', tone: 'note',
    header: 'Reminder', body: <div className="p-3 text-[14px] italic text-stone-800 font-handwriting leading-snug">"Distributed systems are mostly bookkeeping. If your bookkeeping is good, everything else is just typing."</div>,
    rotate: 5, x: '72%', y: '70%', z: 3, color: '#fecaca',
  },
]

export default function V14() {
  return (
    <main className="min-h-screen relative overflow-hidden text-stone-900 font-['Inter',sans-serif]" style={{
      background: `
        radial-gradient(ellipse at top, #d6a87a 0%, #b07d4a 60%, #7a4f29 100%),
        url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.4'/></svg>")
      `,
      backgroundBlendMode: 'multiply',
    }}>
      {/* cork-grain noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{
        background: `repeating-radial-gradient(circle at 25% 25%, rgba(94,52,16,0.25) 0px, transparent 2px, transparent 6px),
                     repeating-radial-gradient(circle at 75% 75%, rgba(60,32,8,0.2) 0px, transparent 2px, transparent 7px)`,
      }}/>

      {/* HEADER */}
      <header className="relative px-10 pt-8 pb-6 max-w-6xl">
        <div className="inline-block bg-yellow-100/95 -rotate-1 px-4 py-2 shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900" style={{ fontFamily: '"Patrick Hand","Comic Sans MS","Caveat",cursive' }}>The Sanjay Wall — pinned things I've shipped & people I've worked with</h1>
        </div>
      </header>

      {/* CORKBOARD */}
      <section className="relative h-[1500px] md:h-[1180px] mx-3 md:mx-8 mb-10 rounded-md ring-2 ring-amber-900/40 shadow-[inset_0_0_120px_rgba(0,0,0,0.45)] overflow-hidden">
        {cards.map(c => (
          <Polaroid key={c.id} card={c} />
        ))}
      </section>

      {/* FOOTER */}
      <footer className="relative px-10 pb-24 max-w-6xl text-stone-100/95 text-sm flex justify-between">
        <span style={{ fontFamily: '"Patrick Hand","Comic Sans MS","Caveat",cursive' }} className="text-lg">— scribbled on the bottom of the corkboard</span>
        <span className="font-mono text-[11px] opacity-80">{profile.email} · github.com/{profile.github}</span>
      </footer>

      <VariantSwitcher current="v14" dark />
    </main>
  )
}

function Polaroid({ card }: { card: Card }) {
  const isPhoto = card.tone !== 'note' && card.tone !== 'card'
  const isCard  = card.tone === 'card'
  const w = card.kind === 'intro' ? 240 : card.kind === 'exp' || card.kind === 'project' ? 280 : 270
  const photoH = card.kind === 'intro' ? 200 : 170
  return (
    <div
      className="absolute group"
      style={{ left: card.x, top: card.y, transform: `rotate(${card.rotate}deg)`, zIndex: card.z ?? 1, width: w }}
    >
      <div
        className="relative shadow-2xl transition-transform duration-300 group-hover:scale-[1.04] group-hover:rotate-0"
        style={{
          background: isPhoto ? '#fefce8' : isCard ? (card.color ?? '#1c1917') : (card.color ?? '#fde68a'),
          padding: isPhoto ? '14px 14px 56px' : 0,
          color: isCard ? '#f5f5f4' : '#1c1c1c',
          boxShadow: '0 18px 40px -10px rgba(0,0,0,0.55), 0 4px 12px rgba(0,0,0,0.35)',
        }}
      >
        {/* washi tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 opacity-85 rotate-[-3deg]" style={{
          background: 'repeating-linear-gradient(45deg, rgba(244,114,182,0.55) 0 8px, rgba(244,114,182,0.35) 8px 16px)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
        }}/>
        {/* push pin */}
        <div className="absolute top-2 right-3 size-3 rounded-full bg-red-600 shadow-[0_2px_4px_rgba(0,0,0,0.6)] ring-2 ring-red-300/60"/>

        {isPhoto && (
          <>
            <div className="overflow-hidden" style={{ height: photoH, background: '#222' }}>{card.body}</div>
            <div className="absolute bottom-2 left-0 right-0 px-3 text-center" style={{ fontFamily: '"Patrick Hand","Caveat","Comic Sans MS",cursive' }}>
              <div className="text-[15px] font-bold text-stone-800 leading-tight">{card.header}</div>
              {card.caption && <div className="text-[11px] text-stone-600 mt-0.5">{card.caption}</div>}
            </div>
          </>
        )}

        {!isPhoto && (
          <>
            <div className="px-3 pt-3 pb-1 text-[11px] uppercase tracking-[0.2em] font-bold opacity-70">{card.header}</div>
            {card.body}
          </>
        )}
      </div>
    </div>
  )
}
