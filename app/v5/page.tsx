'use client'
// V5 — BLUEPRINT: technical drawing, cyan/navy, dimensions, callouts, North arrow
import { profile, experience, projects, skills, education } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

export default function Blueprint() {
  return (
    <div className="min-h-screen text-cyan-100 font-mono selection:bg-cyan-300 selection:text-[#0a1f3a]"
         style={{
           background: '#0a1f3a',
           backgroundImage: `
             linear-gradient(rgba(125,211,252,0.12) 1px, transparent 1px),
             linear-gradient(90deg, rgba(125,211,252,0.12) 1px, transparent 1px),
             linear-gradient(rgba(125,211,252,0.05) 1px, transparent 1px),
             linear-gradient(90deg, rgba(125,211,252,0.05) 1px, transparent 1px)
           `,
           backgroundSize: '80px 80px, 80px 80px, 16px 16px, 16px 16px',
         }}>

      {/* Title block — like architectural drawing legend */}
      <div className="border-b-2 border-cyan-300/70 grid grid-cols-12 text-[10px] uppercase tracking-[0.25em] bg-[#0a1f3a]/80 backdrop-blur">
        <div className="col-span-3 px-4 py-3 border-r border-cyan-300/40">
          <div className="opacity-60">Drawing No.</div>
          <div className="text-cyan-200 text-base normal-case tracking-normal font-bold mt-0.5">SS-2026-V5</div>
        </div>
        <div className="col-span-4 px-4 py-3 border-r border-cyan-300/40">
          <div className="opacity-60">Subject</div>
          <div className="text-cyan-200 text-base normal-case tracking-normal font-bold mt-0.5">Sanjay Santhanam · Engineer</div>
        </div>
        <div className="col-span-2 px-4 py-3 border-r border-cyan-300/40">
          <div className="opacity-60">Scale</div>
          <div className="text-cyan-200 text-base normal-case tracking-normal font-bold mt-0.5">1 : 1</div>
        </div>
        <div className="col-span-3 px-4 py-3">
          <div className="opacity-60">Rev. / Date</div>
          <div className="text-cyan-200 text-base normal-case tracking-normal font-bold mt-0.5">R04 · {new Date().getFullYear()}</div>
        </div>
      </div>

      {/* HERO — schematic figure */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-24">
        {/* North arrow */}
        <div className="absolute top-8 right-8 text-center">
          <div className="text-[10px] tracking-[0.4em] mb-1">N</div>
          <svg width="40" height="50" viewBox="0 0 40 50" className="mx-auto">
            <circle cx="20" cy="25" r="22" fill="none" stroke="#7dd3fc" strokeWidth="1" />
            <path d="M20 5 L26 25 L20 22 L14 25 Z" fill="#7dd3fc" />
          </svg>
        </div>

        <div className="text-[10px] tracking-[0.4em] uppercase text-cyan-300/70 mb-4">A. PLAN VIEW — SUBJECT</div>

        <div className="relative">
          {/* Top dimension */}
          <div className="flex items-center text-[10px] tracking-[0.3em] uppercase text-cyan-300/70 mb-2">
            <span className="opacity-60">←</span>
            <span className="flex-1 border-t border-dashed border-cyan-300/50 mx-2 relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#0a1f3a] px-2">1,640 PX · DISPLAY</span>
            </span>
            <span className="opacity-60">→</span>
          </div>

          <h1 className="text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.85] text-cyan-50"
              style={{ fontFamily: 'ui-sans-serif, system-ui' }}>
            {profile.first}<br/>{profile.last}
          </h1>

          {/* Callouts */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Callout label="01" title="Discipline" value={profile.title} />
            <Callout label="02" title="Locale"     value={profile.location} />
            <Callout label="03" title="Status"     value={profile.status} />
          </div>

          <div className="mt-12 max-w-2xl border-l-2 border-cyan-300/50 pl-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300/70 mb-2">— Abstract</div>
            <p className="text-lg leading-relaxed text-cyan-50">{profile.blurb}</p>
          </div>

          <div className="mt-10 flex gap-3 text-[11px] tracking-[0.2em] uppercase">
            <a href="#sheet-b" className="px-4 py-3 border border-cyan-300 text-cyan-100 hover:bg-cyan-300 hover:text-[#0a1f3a] transition">▸ Sheet B · Projects</a>
            <a href={`mailto:${profile.email}`} className="px-4 py-3 bg-cyan-300 text-[#0a1f3a] font-bold hover:bg-cyan-200 transition">▶ Initiate Contact</a>
          </div>
        </div>
      </section>

      {/* SHEET B — PROJECTS as exploded view */}
      <section id="sheet-b" className="relative px-6 lg:px-12 py-20 border-t border-cyan-300/30">
        <SheetHeader letter="B" title="Selected Projects · Exploded View" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cyan-300/30 border border-cyan-300/30">
          {projects.map(p => (
            <article key={p.n} className="bg-[#0a1f3a] p-6 relative">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300/70">Part No.</div>
                  <div className="text-2xl font-bold text-cyan-50 tracking-tight">{p.n}</div>
                </div>
                <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-40">
                  <rect x="10" y="10" width="40" height="40" fill="none" stroke="#7dd3fc" strokeDasharray="2 3" />
                  <circle cx="30" cy="30" r="3" fill="#7dd3fc" />
                  <line x1="30" y1="0" x2="30" y2="60" stroke="#7dd3fc" strokeWidth="0.5" />
                  <line x1="0" y1="30" x2="60" y2="30" stroke="#7dd3fc" strokeWidth="0.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cyan-50 tracking-tight mb-2" style={{ fontFamily: 'ui-sans-serif' }}>{p.title}</h3>
              <p className="text-sm text-cyan-100/80 leading-relaxed mb-4">{p.blurb}</p>
              <div className="border-t border-cyan-300/30 pt-3 grid grid-cols-3 gap-2 text-[10px] tracking-[0.2em] uppercase">
                {p.stack.map(s => (
                  <div key={s} className="border border-cyan-300/40 px-2 py-1 text-center text-cyan-200">{s}</div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SHEET C — EXPERIENCE as timeline section */}
      <section id="sheet-c" className="relative px-6 lg:px-12 py-20 border-t border-cyan-300/30">
        <SheetHeader letter="C" title="Section Cut · Career Timeline" />
        <div className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-cyan-300/50" />
          {experience.map((e, i) => (
            <div key={i} className="relative mb-10">
              <div className="absolute -left-[22px] top-1 size-4 bg-[#0a1f3a] border-2 border-cyan-300 flex items-center justify-center">
                <div className="size-1.5 bg-cyan-300" />
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300/70 mb-1">Layer {String(experience.length - i).padStart(2, '0')} · {e.period}</div>
              <h3 className="text-2xl font-bold text-cyan-50" style={{ fontFamily: 'ui-sans-serif' }}>{e.company}</h3>
              <div className="text-sm text-cyan-200/80 normal-case tracking-normal mt-0.5">{e.role} — {e.location}</div>
              <p className="mt-3 text-cyan-100/90 max-w-2xl normal-case tracking-normal">{e.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] tracking-[0.2em] uppercase">
                {e.stack.map(s => <span key={s} className="border border-cyan-300/40 px-2 py-0.5 text-cyan-200">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHEET D — Skills as legend */}
      <section className="relative px-6 lg:px-12 py-20 border-t border-cyan-300/30">
        <SheetHeader letter="D" title="Legend · Materials & Tooling" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cyan-300/30 border border-cyan-300/30">
          {Object.entries(skills).map(([cat, items], i) => (
            <div key={cat} className="bg-[#0a1f3a] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="size-3 border border-cyan-300" style={{ background: ['#7dd3fc','transparent','#7dd3fc44','transparent'][i] }} />
                <span className="text-[10px] tracking-[0.3em] uppercase text-cyan-300">{cat}</span>
              </div>
              <ul className="space-y-1.5 text-sm normal-case tracking-normal text-cyan-50">
                {items.map(s => <li key={s} className="flex items-center gap-2"><span className="text-cyan-300/50">—</span>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SHEET E — Contact */}
      <section className="relative px-6 lg:px-12 py-20 border-t border-cyan-300/30">
        <SheetHeader letter="E" title="Channels · Initiate Contact" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cyan-300/30 border border-cyan-300/30">
          {[
            { k: 'MAIL', v: profile.email, href: `mailto:${profile.email}` },
            { k: 'REPO', v: '@' + profile.github, href: `https://github.com/${profile.github}` },
            { k: 'PROF', v: profile.linkedin, href: `https://linkedin.com/${profile.linkedin}` },
          ].map(c => (
            <a key={c.k} href={c.href} className="bg-[#0a1f3a] p-6 hover:bg-cyan-300 hover:text-[#0a1f3a] transition group">
              <div className="text-[10px] tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100">Channel · {c.k}</div>
              <div className="text-xl font-bold normal-case tracking-normal mt-2 break-all" style={{ fontFamily: 'ui-sans-serif' }}>{c.v}</div>
              <div className="mt-3 text-[10px] tracking-[0.3em] uppercase opacity-70">→ Open</div>
            </a>
          ))}
        </div>

        <div className="mt-12 border-t border-cyan-300/30 pt-4 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-cyan-300/70">
          <span>Drawing approved · {profile.name}, Engineer</span>
          <span>Sheet 1 of 1 · Plan No. SS-2026-V5</span>
        </div>
      </section>

      <VariantSwitcher current="v5" dark />
    </div>
  )
}

function SheetHeader({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex items-end justify-between mb-8 pb-3 border-b border-cyan-300/40">
      <div className="flex items-center gap-4">
        <div className="size-12 border-2 border-cyan-300 flex items-center justify-center text-2xl font-bold text-cyan-200">{letter}</div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300/70">Sheet {letter}</div>
          <h2 className="text-2xl font-bold text-cyan-50 normal-case tracking-normal" style={{ fontFamily: 'ui-sans-serif' }}>{title}</h2>
        </div>
      </div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300/70 hidden md:block">Scale 1:1</div>
    </div>
  )
}

function Callout({ label, title, value }: { label: string; title: string; value: string }) {
  return (
    <div className="relative border border-cyan-300/40 p-4 bg-[#0a1f3a]/60">
      <div className="absolute -top-2.5 left-3 bg-[#0a1f3a] px-2 text-[10px] tracking-[0.3em] uppercase text-cyan-300">⟨ {label} ⟩ {title}</div>
      <div className="text-cyan-50 text-base normal-case tracking-normal mt-2" style={{ fontFamily: 'ui-sans-serif' }}>{value}</div>
    </div>
  )
}
