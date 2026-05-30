'use client'
// V7 — MUSEUM: dark gallery, spotlit artifacts, slow elegant scroll, serif
import { useEffect, useState } from 'react'
import { profile, experience, projects, skills, education } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

export default function Museum() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const p = h.scrollTop / Math.max(1, (h.scrollHeight - h.clientHeight))
      setProgress(p)
    }
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen text-stone-200 selection:bg-amber-200 selection:text-stone-950 overflow-x-hidden"
         style={{ background: '#0c0a09', fontFamily: '"Cormorant Garamond", "EB Garamond", Georgia, serif' }}>

      {/* Top brass plaque */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 py-3 flex items-center justify-between border-b border-amber-200/15 backdrop-blur-md bg-stone-950/80">
        <div className="flex items-center gap-3">
          <div className="size-6 rounded-full bg-gradient-to-br from-amber-200 to-amber-500" />
          <span className="text-xs uppercase tracking-[0.4em] text-amber-200/80">The Santhanam Collection</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-stone-400 hidden md:block">Gallery № VII · Permanent Exhibition</div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-stone-400">Open · No flash</div>
      </header>

      {/* Progress bar — subtle gold thread */}
      <div className="fixed top-[49px] left-0 right-0 h-px bg-stone-800 z-40">
        <div className="h-full bg-amber-300 transition-[width] duration-150" style={{ width: `${progress*100}%` }} />
      </div>

      {/* HERO — sole portrait under spotlight */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Spotlight */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(252,211,77,0.13), transparent 60%)' }} />
        {/* Light ray */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[120vh] pointer-events-none opacity-50"
             style={{ background: 'linear-gradient(180deg, rgba(252,211,77,0.18), transparent 70%)', clipPath: 'polygon(45% 0, 55% 0, 80% 100%, 20% 100%)' }} />

        <div className="relative text-center max-w-3xl">
          <div className="text-[10px] tracking-[0.5em] uppercase text-amber-200/70 mb-8">Exhibit I · Portrait of the Subject</div>
          <div className="mb-12 text-stone-500 italic text-sm">— a working engineer, oil on careers, est. 2020 —</div>
          <h1 className="leading-none italic" style={{ fontSize: 'clamp(80px, 13vw, 200px)', fontWeight: 400 }}>
            <span className="block text-stone-50">{profile.first}</span>
            <span className="block text-amber-100/90 -mt-3" style={{ fontSize: '0.78em' }}>Santhanam</span>
          </h1>

          {/* Caption plaque */}
          <div className="mt-16 inline-block text-left bg-stone-900/60 border border-amber-200/15 px-6 py-4 backdrop-blur"
               style={{ boxShadow: 'inset 0 1px 0 rgba(252,211,77,0.1)' }}>
            <div className="text-[10px] uppercase tracking-[0.4em] text-amber-200/70 mb-2">Wall Text</div>
            <p className="text-stone-200 text-lg leading-relaxed max-w-xl italic font-light">&ldquo;{profile.blurb}&rdquo;</p>
            <div className="mt-3 text-xs tracking-widest uppercase text-stone-400">— Sanjay Santhanam, b. {profile.location.split(',')[0]}</div>
          </div>

          <div className="mt-12 text-[10px] tracking-[0.5em] uppercase text-stone-500 animate-pulse">↓ Continue tour</div>
        </div>
      </section>

      {/* GALLERY ROOMS */}
      <Room number="II" title="Cabinet of Works" subtitle="Selected projects, with provenance">
        <div className="space-y-24">
          {projects.map((p, i) => (
            <article key={p.n} className={`grid grid-cols-12 gap-6 items-center ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`col-span-12 md:col-span-7 ${i % 2 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-[5/3] bg-gradient-to-br from-stone-800 to-stone-950 border border-amber-200/20 overflow-hidden group"
                     style={{ boxShadow: '0 30px 80px -20px rgba(252,211,77,0.15), inset 0 0 80px rgba(252,211,77,0.05)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[280px] font-light italic text-amber-100/10 leading-none">{p.n}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  {/* Spotlight per piece */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                       style={{ background: 'radial-gradient(ellipse at center, rgba(252,211,77,0.15), transparent 70%)' }} />
                  {/* Frame */}
                  <div className="absolute inset-2 border border-amber-200/15 pointer-events-none" />
                </div>
              </div>
              <div className={`col-span-12 md:col-span-5 ${i % 2 ? 'md:order-1 md:pr-8' : 'md:pl-4'}`}>
                <div className="text-[10px] tracking-[0.4em] uppercase text-amber-200/70 mb-3">Catalogue Entry № {p.n}</div>
                <h3 className="text-4xl italic font-light text-stone-50 leading-tight mb-3">{p.title}</h3>
                <p className="text-stone-300 leading-relaxed text-lg font-light">{p.blurb}</p>
                <div className="mt-6 pt-4 border-t border-amber-200/15 grid grid-cols-2 gap-2 text-xs">
                  <div className="text-stone-500 uppercase tracking-widest">Medium</div>
                  <div className="text-stone-200 font-light">{p.stack.join(' · ')}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Room>

      <Room number="III" title="Hall of Tenure" subtitle="Career, in chronological strata">
        <div className="border-y border-amber-200/15">
          {experience.map((e, i) => (
            <div key={i} className="grid grid-cols-12 gap-6 py-10 border-b last:border-b-0 border-amber-200/10">
              <div className="col-span-12 md:col-span-2 text-[11px] tracking-[0.3em] uppercase text-amber-200/70">{e.period}</div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-3xl italic font-light text-stone-50 leading-none">{e.company}</h3>
                <div className="text-sm text-stone-400 italic mt-2">{e.role} · {e.location}</div>
              </div>
              <p className="col-span-12 md:col-span-6 text-stone-300 leading-relaxed font-light text-lg">{e.blurb}</p>
            </div>
          ))}
        </div>
      </Room>

      <Room number="IV" title="The Toolbox, Catalogued" subtitle="Materials & instruments employed">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat}>
              <div className="text-[10px] tracking-[0.4em] uppercase text-amber-200/70 mb-3">— {cat}</div>
              <div className="text-2xl md:text-3xl font-light italic text-stone-100 leading-tight">
                {items.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </Room>

      <Room number="V" title="Correspondence" subtitle="Inquiries welcomed by post, by wire, or by network">
        <div className="text-center max-w-2xl mx-auto">
          <p className="italic font-light text-2xl text-stone-200 leading-relaxed">&ldquo;The artist receives visitors and is available for commissions of distributed systems, healthcare infrastructure, and event-driven design.&rdquo;</p>
          <div className="mt-12 space-y-3">
            <a href={`mailto:${profile.email}`} className="block text-xl text-amber-200 hover:text-amber-100 italic transition border-b border-amber-200/30 hover:border-amber-100 pb-1 w-fit mx-auto">{profile.email}</a>
            <div className="flex justify-center gap-6 text-sm tracking-widest uppercase text-stone-400">
              <a href={`https://github.com/${profile.github}`} className="hover:text-amber-200">GitHub</a>
              <span className="opacity-30">·</span>
              <a href={`https://linkedin.com/${profile.linkedin}`} className="hover:text-amber-200">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-32 pt-6 border-t border-amber-200/15 text-center text-[10px] tracking-[0.4em] uppercase text-stone-500">
          The Santhanam Collection · {new Date().getFullYear()} · All rights reserved by the artist
        </div>
      </Room>

      <VariantSwitcher current="v7" dark />
    </div>
  )
}

function Room({ number, title, subtitle, children }: { number: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section className="relative px-6 lg:px-16 py-32 border-t border-amber-200/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />
      <header className="max-w-5xl mx-auto mb-20 text-center">
        <div className="text-[10px] tracking-[0.5em] uppercase text-amber-200/70 mb-3">Gallery № {number}</div>
        <h2 className="text-5xl md:text-6xl italic font-light text-stone-50 leading-tight">{title}</h2>
        <div className="mt-3 text-stone-400 italic text-lg font-light">{subtitle}</div>
      </header>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  )
}
