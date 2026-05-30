'use client'
// V7 — MUSEUM (rebuilt): real spotlight gradient, gilded painting frames,
// caption plaques, audio-guide tracks, marble feel
import { useEffect, useState } from 'react'
import { profile, experience, projects, skills } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

export default function Museum() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight))
    }
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen text-stone-200 selection:bg-amber-200 selection:text-stone-950 overflow-x-hidden"
         style={{
           background: 'radial-gradient(ellipse at 50% 0%, #1c1714 0%, #0a0807 50%, #0a0807 100%)',
           fontFamily: '"Cormorant Garamond", "EB Garamond", Georgia, serif',
         }}>

      {/* Brass plaque header */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 py-3 flex items-center justify-between border-b border-amber-200/15 backdrop-blur-md bg-stone-950/80">
        <div className="flex items-center gap-3">
          <div className="size-6 rounded-full bg-gradient-to-br from-amber-200 to-amber-600 shadow-[0_0_10px_rgba(252,211,77,0.4)]" />
          <span className="text-xs uppercase tracking-[0.4em] text-amber-200/90 font-medium">The Santhanam Collection</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-stone-400 hidden md:block">Gallery № VII · Permanent Exhibition</div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-stone-400">Open · No flash</div>
      </header>
      <div className="fixed top-[49px] left-0 right-0 h-px bg-stone-800 z-40">
        <div className="h-full bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.6)] transition-[width] duration-150" style={{ width: `${progress*100}%` }} />
      </div>

      {/* HERO — spotlit centerpiece */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Spotlight cone — top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[110vh] pointer-events-none opacity-70"
             style={{
               background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(252,211,77,0.22), transparent 70%)',
               clipPath: 'polygon(42% 0, 58% 0, 88% 100%, 12% 100%)',
               mixBlendMode: 'screen',
             }} />
        {/* Floor pool */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 pointer-events-none opacity-50"
             style={{ background: 'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(252,211,77,0.2), transparent 70%)' }} />

        <div className="relative text-center max-w-3xl px-4">
          <div className="text-[10px] tracking-[0.5em] uppercase text-amber-200/80 mb-6">Exhibit I · Portrait of the Subject</div>

          {/* Frame around the title */}
          <PaintingFrame>
            <div className="px-8 py-12 text-center">
              <h1 className="leading-[0.95] italic font-light"
                  style={{ fontSize: 'clamp(56px, 9.5vw, 132px)' }}>
                <span className="block text-stone-50 drop-shadow-[0_0_30px_rgba(252,211,77,0.15)]">{profile.first}</span>
                <span className="block text-amber-100/90 -mt-2" style={{ fontSize: '0.78em' }}>{profile.last}</span>
              </h1>
              <div className="mt-3 text-stone-400 italic text-sm">— a working engineer, oil on careers, est. 2020 —</div>
            </div>
          </PaintingFrame>

          {/* Caption plaque */}
          <CaptionPlaque
            title="Self-portrait of a software engineer"
            artist={profile.name}
            year={`b. ${profile.location.split(',')[0]} · est. 2020`}
            medium="Oil on careers, mixed-stack on canvas"
            note={profile.blurb}
          />

          <div className="mt-12 text-[10px] tracking-[0.5em] uppercase text-stone-500 animate-pulse">↓ Continue tour</div>
        </div>
      </section>

      {/* II — CABINET OF WORKS */}
      <Room number="II" title="Cabinet of Works" subtitle="Selected projects, with provenance">
        <div className="space-y-28">
          {projects.map((p, i) => (
            <article key={p.n} className="grid grid-cols-12 gap-8 items-center">
              <div className={`col-span-12 md:col-span-7 ${i % 2 ? 'md:order-2' : ''}`}>
                <PaintingFrame variant={i % 2 ? 'tall' : 'wide'}>
                  <PaintingCanvas n={p.n} idx={i} />
                </PaintingFrame>
              </div>
              <div className={`col-span-12 md:col-span-5 ${i % 2 ? 'md:order-1 md:pr-6' : 'md:pl-2'}`}>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-amber-200/80 mb-3">
                  <span className="size-5 rounded-full border border-amber-200/60 flex items-center justify-center text-[8px] text-amber-100">{p.n.padStart(2,'0')}</span>
                  <span>Audio Guide · Track {p.n.padStart(2,'0')}</span>
                </div>
                <h3 className="text-4xl italic font-light text-stone-50 leading-tight mb-3">{p.title}</h3>
                <p className="text-stone-300 leading-relaxed text-lg font-light">{p.blurb}</p>
                <div className="mt-6 pt-4 border-t border-amber-200/15 grid grid-cols-3 gap-2 text-xs">
                  <div className="text-stone-500 uppercase tracking-widest">Medium</div>
                  <div className="col-span-2 text-stone-200 font-light italic">{p.stack.join(' · ')}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Room>

      {/* III — HALL OF TENURE */}
      <Room number="III" title="Hall of Tenure" subtitle="Career, in chronological strata">
        <div className="border-y border-amber-200/15">
          {experience.map((e, i) => (
            <div key={i} className="grid grid-cols-12 gap-6 py-10 border-b last:border-b-0 border-amber-200/10 hover:bg-amber-200/[0.03] transition">
              <div className="col-span-12 md:col-span-2 text-[11px] tracking-[0.3em] uppercase text-amber-200/80">{e.period}</div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-3xl italic font-light text-stone-50 leading-none">{e.company}</h3>
                <div className="text-sm text-stone-400 italic mt-2">{e.role} · {e.location}</div>
              </div>
              <p className="col-span-12 md:col-span-6 text-stone-300 leading-relaxed font-light text-lg">{e.blurb}</p>
            </div>
          ))}
        </div>
      </Room>

      {/* IV — TOOLBOX */}
      <Room number="IV" title="The Toolbox, Catalogued" subtitle="Materials & instruments employed">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat}>
              <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-amber-200/80 mb-3">
                <div className="h-px w-8 bg-amber-200/60" />
                <span>{cat}</span>
              </div>
              <div className="text-2xl md:text-3xl font-light italic text-stone-100 leading-snug">
                {items.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </Room>

      {/* V — CORRESPONDENCE */}
      <Room number="V" title="Correspondence" subtitle="Inquiries welcomed by post, by wire, or by network" last>
        <div className="text-center max-w-2xl mx-auto">
          <Ornament />
          <p className="italic font-light text-2xl text-stone-200 leading-relaxed mt-6">
            &ldquo;The artist receives visitors and is available for commissions of distributed systems, healthcare infrastructure, and event-driven design.&rdquo;
          </p>
          <div className="mt-12 space-y-3">
            <a href={`mailto:${profile.email}`} className="block text-xl text-amber-200 hover:text-amber-100 italic transition border-b border-amber-200/30 hover:border-amber-100 pb-1 w-fit mx-auto">{profile.email}</a>
            <div className="flex justify-center gap-6 text-sm tracking-widest uppercase text-stone-400">
              <a href={`https://github.com/${profile.github}`} className="hover:text-amber-200">GitHub</a>
              <span className="opacity-30">·</span>
              <a href={`https://linkedin.com/${profile.linkedin}`} className="hover:text-amber-200">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-6 border-t border-amber-200/15 text-center text-[10px] tracking-[0.4em] uppercase text-stone-500">
          The Santhanam Collection · {new Date().getFullYear()} · All rights reserved by the artist
        </div>
      </Room>

      <VariantSwitcher current="v7" dark />
    </div>
  )
}

/* ---------- Components ---------- */

function Room({ number, title, subtitle, children, last }: { number: string; title: string; subtitle: string; children: React.ReactNode; last?: boolean }) {
  return (
    <section className={`relative px-6 lg:px-16 py-32 ${last ? '' : 'border-t border-amber-200/10'}`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />
      <header className="max-w-5xl mx-auto mb-20 text-center">
        <Ornament small />
        <div className="text-[10px] tracking-[0.5em] uppercase text-amber-200/80 mt-4 mb-3">Gallery № {number}</div>
        <h2 className="text-5xl md:text-6xl italic font-light text-stone-50 leading-tight">{title}</h2>
        <div className="mt-3 text-stone-400 italic text-lg font-light">{subtitle}</div>
      </header>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  )
}

function PaintingFrame({ children, variant }: { children: React.ReactNode; variant?: 'wide'|'tall' }) {
  const aspect = variant === 'wide' ? 'aspect-[5/3]' : variant === 'tall' ? 'aspect-[4/5]' : ''
  return (
    <div className="relative p-3 md:p-4"
         style={{
           background: 'linear-gradient(135deg, #92722a 0%, #d4a64e 25%, #6b5119 50%, #c4923a 75%, #8a6822 100%)',
           boxShadow: '0 30px 80px -20px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(252,211,77,0.4)',
         }}>
      <div className="absolute inset-2 md:inset-3 pointer-events-none"
           style={{ boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.4), inset 0 0 0 5px rgba(252,211,77,0.3), inset 0 0 30px rgba(0,0,0,0.6)' }} />
      <div className={`relative bg-stone-950 ${aspect} overflow-hidden`}>
        {children}
      </div>
    </div>
  )
}

function PaintingCanvas({ n, idx }: { n: string; idx: number }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Spotlight inside frame */}
      <div className="absolute inset-0 opacity-80"
           style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(252,211,77,0.12), transparent 70%)' }} />
      {/* Brushwork numeral */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-light italic text-amber-100/15 leading-none select-none"
              style={{ fontSize: 'clamp(140px, 22vw, 320px)' }}>{n.padStart(2,'0')}</span>
      </div>
      {/* Subtle brush strokes */}
      <svg viewBox="0 0 400 240" className="absolute inset-0 w-full h-full opacity-20 mix-blend-screen">
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={i}
                d={`M${20 + i * 50} ${40 + (i%3)*30} Q ${100 + i*40} ${120 + (i%2)*40} ${200 + i*30} ${160 - (i%4)*20}`}
                stroke="#fde68a" strokeWidth="0.6" fill="none" opacity={0.5 - i*0.04} />
        ))}
      </svg>
      {/* Frame inner edge highlight */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(252,211,77,0.05), transparent 50%)' }} />
    </div>
  )
}

function CaptionPlaque({ title, artist, year, medium, note }: { title: string; artist: string; year: string; medium: string; note: string }) {
  return (
    <div className="mt-12 inline-block text-left max-w-xl"
         style={{
           background: 'linear-gradient(135deg, #b8923a 0%, #d4a64e 50%, #8a6822 100%)',
           padding: 2,
           boxShadow: '0 14px 40px -10px rgba(252,211,77,0.25)',
         }}>
      <div className="bg-stone-950/95 px-6 py-5">
        <div className="text-[9px] tracking-[0.5em] uppercase text-amber-200/80 mb-2">Wall Text</div>
        <div className="text-stone-50 text-lg italic font-light leading-snug">&ldquo;{title}&rdquo;</div>
        <div className="text-stone-400 italic text-sm mt-1">{artist} · {year}</div>
        <div className="text-stone-500 text-xs italic mt-0.5">{medium}</div>
        <div className="mt-4 pt-3 border-t border-amber-200/15 text-stone-200 italic font-light leading-relaxed">{note}</div>
      </div>
    </div>
  )
}

function Ornament({ small }: { small?: boolean }) {
  const size = small ? 60 : 100
  return (
    <svg width={size} height={size/4} viewBox="0 0 120 30" className="mx-auto text-amber-200/60">
      <line x1="10" y1="15" x2="46" y2="15" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="60" cy="15" r="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="60" cy="15" r="1" fill="currentColor" />
      <line x1="74" y1="15" x2="110" y2="15" stroke="currentColor" strokeWidth="0.7" />
      <path d="M46 15 Q 53 8 60 15 Q 67 22 74 15" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  )
}
