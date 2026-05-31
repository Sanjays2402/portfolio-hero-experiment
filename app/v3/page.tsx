'use client'

import { education, experience, profile, projects, research, skills, stats } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

export default function BrutalistVariant() {
  return (
    <div className="min-h-screen bg-[#ffea00] text-black font-sans selection:bg-black selection:text-[#ffea00]">
      {/* Top hairline grid */}
      <div className="border-b-[3px] border-black grid grid-cols-12 text-[10px] font-mono uppercase tracking-[0.25em]">
        <div className="col-span-3 px-4 py-2 border-r-[3px] border-black">{profile.name}</div>
        <div className="col-span-2 px-4 py-2 border-r-[3px] border-black hidden md:block">{profile.title}</div>
        <div className="col-span-3 px-4 py-2 border-r-[3px] border-black hidden md:block">{profile.location}</div>
        <div className="col-span-4 px-4 py-2 text-right md:text-right">© {new Date().getFullYear()} — All rights inverted.</div>
      </div>

      {/* HERO — colossus type */}
      <section className="border-b-[3px] border-black">
        <div className="px-4 md:px-8 pt-6">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase">§01 / Identity</div>
        </div>
        <h1 className="font-black uppercase leading-[0.82] tracking-[-0.03em] px-2 md:px-4 py-4 break-all"
            style={{ fontSize: 'clamp(64px, 18vw, 280px)' }}>
          {profile.first}<br/>{profile.last}.
        </h1>
        <div className="grid grid-cols-12 border-t-[3px] border-black">
          <div className="col-span-12 md:col-span-7 px-4 md:px-8 py-6 border-r-0 md:border-r-[3px] border-black">
            <p className="text-2xl md:text-4xl font-bold leading-tight">{profile.blurb}</p>
          </div>
          <div className="col-span-12 md:col-span-5 px-4 md:px-8 py-6 font-mono text-xs leading-relaxed uppercase tracking-wider">
            <KV k="Based"   v={profile.location} />
            <KV k="Status"  v={profile.status} />
            <KV k="Mail"    v={profile.email} />
            <KV k="GitHub"  v={'@' + profile.github} />
            <KV k="LinkedIn" v={profile.linkedin} />
            <div className="mt-6 flex gap-3">
              <a href={`mailto:${profile.email}`} className="px-4 py-2 bg-black text-[#ffea00] uppercase tracking-wider hover:bg-[#ff2222] hover:text-white transition">Email →</a>
              <a href="#work" className="px-4 py-2 border-[3px] border-black uppercase tracking-wider hover:bg-black hover:text-[#ffea00] transition">Work ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-b-[3px] border-black">
        <Heading num="02" title="Work" right={projects.length + ' projects'} />
        <div>
          {projects.map((p, i) => (
            <article key={p.n} className="grid grid-cols-12 border-t-[3px] border-black hover:bg-black hover:text-[#ffea00] group transition">
              <div className="col-span-2 md:col-span-1 px-4 py-6 border-r-[3px] border-black font-mono text-xs">{p.n}</div>
              <div className="col-span-10 md:col-span-5 px-4 py-6 border-r-0 md:border-r-[3px] border-black">
                <h3 className="text-2xl md:text-4xl font-black uppercase leading-tight tracking-tight">{p.title}</h3>
              </div>
              <div className="col-span-12 md:col-span-4 px-4 py-6 border-t-[3px] md:border-t-0 border-r-0 md:border-r-[3px] border-black text-sm md:text-base font-medium">
                {p.blurb}
              </div>
              <div className="col-span-12 md:col-span-2 px-4 py-6 border-t-[3px] md:border-t-0 border-black font-mono text-[10px] tracking-wider uppercase flex flex-wrap gap-2 content-start">
                {p.stack.map(s => <span key={s} className="border border-current px-1.5 py-0.5">{s}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-b-[3px] border-black">
        <Heading num="03" title="History" right={experience[experience.length-1].period.split(' — ')[0] + ' → now'} />
        <div>
          {experience.map((e, i) => (
            <article key={i} className="grid grid-cols-12 border-t-[3px] border-black">
              <div className="col-span-12 md:col-span-3 px-4 py-6 border-r-0 md:border-r-[3px] border-black font-mono text-xs uppercase tracking-wider">
                {e.period}
              </div>
              <div className="col-span-12 md:col-span-5 px-4 py-6 border-t-[3px] md:border-t-0 border-r-0 md:border-r-[3px] border-black">
                <h3 className="text-3xl font-black uppercase leading-none">{e.company}</h3>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider">{e.role} · {e.location}</div>
              </div>
              <div className="col-span-12 md:col-span-4 px-4 py-6 border-t-[3px] md:border-t-0 border-black font-medium">
                {e.blurb}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-b-[3px] border-black">
        <Heading num="04" title="Stack" right="" />
        <div className="grid grid-cols-1 md:grid-cols-2">
          {Object.entries(skills).map(([cat, items], i) => (
            <div key={cat} className={`px-4 md:px-6 py-6 border-t-[3px] border-black ${i % 2 === 0 ? 'md:border-r-[3px]' : ''}`}>
              <div className="font-mono text-xs uppercase tracking-[0.3em] mb-3">[{cat}]</div>
              <div className="text-2xl md:text-3xl font-black uppercase leading-tight">
                {items.join(' / ')}.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-b-[3px] border-black">
        <Heading num="05" title="Research" right={`${stats.publications} papers · ${stats.citations} citations`} />
        {research.map((r, i) => (
          <div key={i} className="grid grid-cols-12 border-t-[3px] border-black">
            <div className="col-span-2 px-4 py-5 border-r-[3px] border-black font-mono text-sm">
              <div className="font-black text-3xl leading-none">{r.citations}</div>
              <div className="uppercase tracking-wider opacity-70 mt-1">cites · {r.year}</div>
            </div>
            <div className="col-span-10 px-4 py-5">
              <div className="text-xl md:text-2xl font-black uppercase leading-tight">{r.title}</div>
              <div className="font-mono text-xs uppercase tracking-wider mt-2 opacity-80">{r.venue} — {r.type}</div>
              <div className="font-mono text-xs mt-1 opacity-60">{r.authors}</div>
            </div>
          </div>
        ))}
      </section>

      {/* EDUCATION */}
      <section className="border-b-[3px] border-black">
        <Heading num="06" title="Schooling" right="" />
        {education.map((e, i) => (
          <div key={i} className="grid grid-cols-12 border-t-[3px] border-black">
            <div className="col-span-2 px-4 py-5 border-r-[3px] border-black font-mono text-sm">{e.year}</div>
            <div className="col-span-10 px-4 py-5">
              <div className="text-2xl font-black uppercase">{e.degree}</div>
              <div className="font-mono text-xs uppercase tracking-wider mt-1">{e.school}</div>
            </div>
          </div>
        ))}
      </section>

      {/* CONTACT — INVERTED */}
      <section className="bg-black text-[#ffea00] border-b-[3px] border-black">
        <div className="px-4 py-4 border-b-[3px] border-[#ffea00] font-mono text-xs uppercase tracking-[0.3em]">§06 / Contact — Loud and clear.</div>
        <h2 className="px-2 md:px-4 py-8 font-black uppercase leading-[0.82] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(56px, 14vw, 220px)' }}>
          Email me.
        </h2>
        <div className="border-t-[3px] border-[#ffea00] grid grid-cols-1 md:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="px-4 py-6 border-r-0 md:border-r-[3px] border-[#ffea00] hover:bg-[#ffea00] hover:text-black transition">
            <div className="font-mono text-xs uppercase tracking-[0.3em] opacity-70">→ Mail</div>
            <div className="text-xl md:text-2xl font-black uppercase mt-2 break-all">{profile.email}</div>
          </a>
          <a href={`https://github.com/${profile.github}`} className="px-4 py-6 border-t-[3px] md:border-t-0 border-r-0 md:border-r-[3px] border-[#ffea00] hover:bg-[#ffea00] hover:text-black transition">
            <div className="font-mono text-xs uppercase tracking-[0.3em] opacity-70">→ Code</div>
            <div className="text-xl md:text-2xl font-black uppercase mt-2">@{profile.github}</div>
          </a>
          <a href={`https://linkedin.com/${profile.linkedin}`} className="px-4 py-6 border-t-[3px] md:border-t-0 border-[#ffea00] hover:bg-[#ffea00] hover:text-black transition">
            <div className="font-mono text-xs uppercase tracking-[0.3em] opacity-70">→ Pro</div>
            <div className="text-xl md:text-2xl font-black uppercase mt-2">{profile.linkedin}</div>
          </a>
        </div>
      </section>

      {/* Footer ticker */}
      <div className="overflow-hidden whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] py-3 bg-[#ffea00]">
        <div className="inline-block animate-[marquee_30s_linear_infinite]">
          {Array(6).fill(0).map((_,i)=>(<span key={i}> ★ Building loud. Shipping louder. ★ {profile.name} ★ {profile.location} ★ {profile.title} ★ Available for hire ★</span>))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>

      <VariantSwitcher current="v3" dark={false} />
    </div>
  )
}

function Heading({ num, title, right }: { num: string; title: string; right: string }) {
  return (
    <div className="grid grid-cols-12 border-b-0">
      <div className="col-span-12 md:col-span-2 px-4 py-3 border-r-0 md:border-r-[3px] border-black font-mono text-xs uppercase tracking-[0.3em]">§{num}</div>
      <h2 className="col-span-8 md:col-span-7 px-4 py-3 font-black uppercase tracking-tight border-r-0 md:border-r-[3px] border-black text-3xl md:text-5xl leading-none">{title}.</h2>
      <div className="col-span-4 md:col-span-3 px-4 py-3 font-mono text-xs uppercase tracking-wider text-right md:text-right">{right}</div>
    </div>
  )
}

function KV({ k, v }: { k: string; v: string }) {
  return <div className="flex"><span className="w-20 opacity-60">{k}</span><span className="font-bold normal-case tracking-normal">{v}</span></div>
}
