'use client'
// V9 — BOARDING PASS: travel ticket, perforations, stamps, mono + serif
import { profile, experience, projects, skills, education } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

const today = new Date()
const fmt = (d: Date) => d.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()
const seatChar = (i: number) => String.fromCharCode(65 + i) + (i + 12)

export default function BoardingPass() {
  return (
    <div className="min-h-screen text-stone-900 selection:bg-amber-200 selection:text-stone-900"
         style={{
           background: `
             radial-gradient(circle at 20% 20%, rgba(180,140,60,0.07), transparent 50%),
             radial-gradient(circle at 80% 80%, rgba(120,80,40,0.05), transparent 50%),
             #f4ede0
           `,
           fontFamily: '"IBM Plex Mono", "Courier New", monospace',
         }}>

      {/* Paper grain */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.12] mix-blend-multiply"
           style={{ background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence baseFrequency='0.92' numOctaves='2'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.7'/></svg>")` }} />

      {/* Tray-table strip header */}
      <header className="relative z-10 px-4 py-2 border-b border-stone-400/60 bg-stone-100/70 backdrop-blur flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-stone-700">
        <span>Sanjay Air · Flight Operations</span>
        <span className="hidden md:block">Booking Ref: SS{today.getFullYear()}-XK7</span>
        <span>{fmt(today)}</span>
      </header>

      {/* PRIMARY TICKET */}
      <section className="relative z-10 px-4 md:px-8 py-12">
        <Ticket
          left={
            <div className="flex flex-col h-full">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600">Boarding Pass</div>
                  <div className="font-serif italic text-3xl text-stone-900 mt-1" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>Sanjay Air</div>
                </div>
                <div className="text-right text-[10px] tracking-[0.3em] uppercase text-stone-600">
                  <div>Class</div>
                  <div className="text-stone-900 font-bold text-base mt-1">Engineer</div>
                </div>
              </div>

              <div className="grid grid-cols-3 items-end mt-10">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600">From</div>
                  <div className="text-5xl md:text-6xl font-black tracking-tighter mt-1">JAI</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600 mt-1">Jaipur · IN</div>
                </div>
                <div className="text-center text-stone-500 -mb-1">
                  <div className="border-t border-dashed border-stone-400 relative mx-3">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl">✈</div>
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase mt-3 text-stone-600">Career Itinerary</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600">To</div>
                  <div className="text-5xl md:text-6xl font-black tracking-tighter mt-1">SEA</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600 mt-1">{profile.location.split(',')[0]} · WA</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-10 pt-6 border-t border-dashed border-stone-400/70 text-[10px] tracking-[0.3em] uppercase">
                <KV k="Passenger" v={profile.name} />
                <KV k="Gate"      v="G-26A" />
                <KV k="Seat"      v="14A" />
                <KV k="Status"    v={profile.status} v2="(confirmed)" />
              </div>

              <p className="mt-8 text-sm text-stone-700 leading-relaxed max-w-xl" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '17px' }}>
                {profile.blurb}
              </p>

              <div className="mt-auto pt-8 flex items-end gap-2">
                {/* Barcode */}
                <div className="flex-1 flex gap-[2px] h-12 items-end">
                  {Array.from({ length: 70 }).map((_, i) => {
                    const h = 50 + (Math.sin(i * 1.7) * 25)
                    const w = i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1
                    return <span key={i} className="bg-stone-900" style={{ width: w, height: `${h}%` }} />
                  })}
                </div>
                <div className="text-[10px] tracking-[0.4em] text-stone-600 -rotate-90 origin-bottom-right whitespace-nowrap pl-2">SS-2026-XK7</div>
              </div>
            </div>
          }
          right={
            <div className="flex flex-col h-full justify-between text-[10px] tracking-[0.3em] uppercase text-stone-700">
              <div>
                <div className="text-stone-600">Stub</div>
                <div className="font-serif italic text-xl text-stone-900 mt-1" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>Sanjay Air</div>
              </div>
              <div className="space-y-2 text-stone-900 normal-case tracking-normal text-sm" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                <div className="italic">{profile.name}</div>
                <div className="text-stone-600 text-xs uppercase tracking-widest" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>JAI → SEA</div>
                <div className="text-stone-600 text-xs uppercase tracking-widest" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>Seat 14A · Eng-Class</div>
              </div>
              <div>
                {/* mini barcode */}
                <div className="flex gap-[1.5px] h-10 items-end mb-2">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span key={i} className="bg-stone-900" style={{ width: i % 4 === 0 ? 2 : 1, height: `${60 + Math.sin(i)*30}%` }} />
                  ))}
                </div>
                <div className="text-stone-600">XK7 · {fmt(today)}</div>
              </div>
            </div>
          }
        />
      </section>

      {/* ITINERARY (Experience) */}
      <Section eyebrow="Itinerary" title="Flight log · previous legs">
        <div className="bg-white/70 border border-stone-400/40 shadow-[0_8px_24px_-12px_rgba(120,80,30,0.25)]">
          {/* header */}
          <div className="grid grid-cols-12 gap-2 px-5 py-3 text-[10px] tracking-[0.3em] uppercase text-stone-600 border-b border-stone-300 bg-stone-100/80">
            <div className="col-span-2">Flight</div>
            <div className="col-span-2">Period</div>
            <div className="col-span-3">Origin</div>
            <div className="col-span-3">Destination</div>
            <div className="col-span-2 text-right">Status</div>
          </div>
          {experience.map((e, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 px-5 py-5 text-sm border-b last:border-b-0 border-stone-300/70 hover:bg-amber-50/60 transition">
              <div className="col-span-2 font-bold">SS-{(experience.length - i).toString().padStart(2,'0')}</div>
              <div className="col-span-2 text-stone-600">{e.period}</div>
              <div className="col-span-3">
                <div className="font-bold normal-case tracking-normal" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '17px', fontStyle: 'italic' }}>{e.company}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-stone-500 mt-0.5">{e.location}</div>
              </div>
              <div className="col-span-3 normal-case tracking-normal text-stone-700" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '15px' }}>
                {e.role} — {e.blurb}
              </div>
              <div className="col-span-2 text-right">
                <span className="inline-block px-2 py-0.5 border border-emerald-700 text-emerald-800 text-[10px] tracking-[0.3em] uppercase">Landed</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS — luggage tags */}
      <Section eyebrow="Cargo Manifest" title="Selected luggage">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => <LuggageTag key={p.n} project={p} idx={i} />)}
        </div>
      </Section>

      {/* SKILLS — duty-free style */}
      <Section eyebrow="Duty Free" title="Equipment carried">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="bg-white/70 border border-stone-400/40 p-5">
              <div className="flex items-center justify-between border-b border-dashed border-stone-300 pb-2 mb-3">
                <span className="text-[11px] tracking-[0.3em] uppercase text-stone-600">— {cat} —</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400">qty: {items.length}</span>
              </div>
              <ul className="space-y-1.5 text-sm normal-case tracking-normal" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '17px' }}>
                {items.map(s => (
                  <li key={s} className="flex items-center justify-between">
                    <span className="italic">{s}</span>
                    <span className="text-stone-400 text-xs" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>· · · · · · · · · · · ·</span>
                    <span className="text-stone-700 text-xs uppercase tracking-widest" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>OK</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section eyebrow="Customs Form" title="Declarations & contact">
        <div className="bg-white/80 border border-stone-400/40 p-8 max-w-3xl mx-auto relative">
          {/* Stamps overlay */}
          <div className="absolute top-3 right-3 flex flex-col items-end gap-2 pointer-events-none">
            <Stamp text="APPROVED · SEA" rotate="-8deg" color="#0f766e" />
            <Stamp text="ENGINEER VISA · OPEN" rotate="4deg" color="#9a3412" />
          </div>

          <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600 mb-1">Form CF-{today.getFullYear()}</div>
          <h3 className="font-serif italic text-3xl text-stone-900 mb-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Reach the cockpit.</h3>

          <div className="grid grid-cols-12 gap-y-3 text-sm">
            <Field k="Full name"  v={profile.name} />
            <Field k="Origin"     v={profile.location} />
            <Field k="Email"      v={profile.email}            href={`mailto:${profile.email}`} />
            <Field k="Github"     v={'github.com/' + profile.github}    href={`https://github.com/${profile.github}`} />
            <Field k="LinkedIn"   v={'linkedin.com/' + profile.linkedin} href={`https://linkedin.com/${profile.linkedin}`} />
            <Field k="Purpose"    v="Building meaningful software with thoughtful people." />
          </div>

          <div className="mt-8 pt-4 border-t border-dashed border-stone-300 flex items-end justify-between">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone-500">Signature</div>
              <div className="font-serif italic text-2xl mt-1" style={{ fontFamily: '"Allura", "Brush Script MT", cursive' }}>Sanjay</div>
            </div>
            <div className="text-right text-[10px] tracking-[0.3em] uppercase text-stone-500">
              <div>Issued</div>
              <div className="text-stone-900 text-sm mt-1">{fmt(today)}</div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-[10px] tracking-[0.3em] uppercase text-stone-500">Thank you for flying Sanjay Air · Have a pleasant onsite</div>
      </Section>

      <VariantSwitcher current="v9" dark={false} />
    </div>
  )
}

function Ticket({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row bg-white shadow-[0_30px_60px_-20px_rgba(120,80,30,0.35)] border border-stone-300">
        <div className="flex-1 p-7 md:p-10 min-h-[420px]">{left}</div>
        {/* Perforation */}
        <div className="relative w-full md:w-px border-t md:border-t-0 md:border-l border-dashed border-stone-400"
             style={{ background: 'transparent' }}>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 md:top-auto md:-left-3 md:translate-x-0 md:-translate-y-1/2 md:top-0 size-6 rounded-full bg-[#f4ede0]" />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:bottom-auto md:-left-3 md:translate-x-0 md:translate-y-1/2 md:bottom-0 size-6 rounded-full bg-[#f4ede0]" />
        </div>
        <div className="md:w-64 p-7 md:p-7 bg-stone-50/80">{right}</div>
      </div>
      {/* Side stamps */}
      <Stamp text={`PROCESSED · ${today.getFullYear()}`} rotate="-12deg" color="#9a3412" className="absolute -top-4 -right-3 md:right-10 hidden md:block" />
    </div>
  )
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="relative z-10 px-4 md:px-8 py-16 max-w-6xl mx-auto">
      <header className="mb-8">
        <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600">— {eyebrow}</div>
        <h2 className="font-serif italic text-4xl md:text-5xl text-stone-900 mt-1" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>{title}.</h2>
      </header>
      {children}
    </section>
  )
}

function KV({ k, v, v2 }: { k: string; v: string; v2?: string }) {
  return (
    <div>
      <div className="text-stone-600">{k}</div>
      <div className="font-bold text-stone-900 normal-case tracking-normal mt-1 text-sm" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>{v}</div>
      {v2 && <div className="text-[10px] text-stone-500 normal-case tracking-normal mt-0.5">{v2}</div>}
    </div>
  )
}

function LuggageTag({ project, idx }: { project: typeof import('@/lib/portfolio-data').projects[number]; idx: number }) {
  return (
    <article className="relative bg-amber-100/70 border-2 border-stone-700/80 p-5"
             style={{ transform: `rotate(${idx % 2 ? '0.4deg' : '-0.5deg'})`, boxShadow: '4px 4px 0 rgba(120,80,30,0.15)' }}>
      {/* String hole */}
      <div className="absolute -top-3 left-6 size-4 rounded-full bg-[#f4ede0] border-2 border-stone-700/80" />
      <div className="flex items-baseline justify-between border-b border-dashed border-stone-500 pb-2 mb-3 text-[10px] tracking-[0.3em] uppercase text-stone-700">
        <span>Tag № {project.n}</span>
        <span>Heavy ★★★★</span>
      </div>
      <h3 className="text-2xl font-bold text-stone-900 mb-2" style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic' }}>{project.title}</h3>
      <p className="text-sm text-stone-700 normal-case tracking-normal leading-relaxed" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '16px' }}>{project.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map(s => (
          <span key={s} className="px-2 py-0.5 text-[10px] tracking-widest uppercase border border-stone-700 text-stone-800 bg-amber-50">{s}</span>
        ))}
      </div>
      <div className="mt-3 text-[10px] tracking-[0.3em] uppercase text-stone-500 flex justify-between">
        <span>Origin · SEA</span><span>FRAGILE · HANDLE WITH CARE</span>
      </div>
    </article>
  )
}

function Field({ k, v, href }: { k: string; v: string; href?: string }) {
  return (
    <>
      <div className="col-span-12 md:col-span-3 text-[10px] tracking-[0.3em] uppercase text-stone-600 pt-1.5">{k}</div>
      <div className="col-span-12 md:col-span-9 border-b border-dashed border-stone-400 pb-1 normal-case tracking-normal" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '18px', fontStyle: 'italic' }}>
        {href ? <a className="hover:text-amber-800 underline-offset-2 hover:underline" href={href}>{v}</a> : v}
      </div>
    </>
  )
}

function Stamp({ text, rotate, color, className = '' }: { text: string; rotate: string; color: string; className?: string }) {
  return (
    <span className={`inline-block px-3 py-1 border-[3px] font-bold uppercase tracking-[0.25em] text-xs ${className}`}
          style={{ transform: `rotate(${rotate})`, borderColor: color, color, fontFamily: '"IBM Plex Mono", monospace', opacity: 0.85, background: 'rgba(255,255,255,0.3)' }}>
      {text}
    </span>
  )
}
