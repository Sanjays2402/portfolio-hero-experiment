'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { VariantSwitcher } from '@/components/variant-switcher'

const sections = [
  { num: '01', label: 'Index',       id: 'index' },
  { num: '02', label: 'Identity',    id: 'identity' },
  { num: '03', label: 'Ledger',      id: 'ledger' },
  { num: '04', label: 'Artifacts',   id: 'artifacts' },
  { num: '05', label: 'Instruments', id: 'instruments' },
  { num: '06', label: 'Notes',       id: 'notes' },
  { num: '07', label: 'Address',     id: 'address' },
]

const ledger = [
  { yr: '2024—', co: 'Johnson & Johnson', role: 'Software Developer',          loc: 'New Brunswick, NJ',     note: 'FHIR microservice across 15 hospitals; −35% booking time.' },
  { yr: '2023—24', co: 'Citi',            role: 'Software Developer',          loc: 'New York, NY · Remote', note: 'Kafka Streams + Oracle fraud checks at 1M tx/hr.' },
  { yr: '2020—22', co: 'Zentek Infosoft', role: 'SDE',                          loc: 'Jaipur, IN · Remote',   note: 'Role-based HR portal; −40% manual processing.' },
]

const artifacts = [
  { n: '01', title: 'FHIR Patient Scheduling',     stack: 'Java · Spring · FHIR' },
  { n: '02', title: 'Real-time Fraud Detection',   stack: 'Kafka · Spring · Oracle' },
  { n: '03', title: 'Role-based HR Portal',        stack: 'Spring · Angular · MySQL' },
  { n: '04', title: 'Portfolio Hero Experiment',   stack: 'Next.js · Canvas · Tailwind' },
]

const instruments = {
  Languages: ['Java', 'TypeScript', 'Python', 'C++', 'SQL'],
  Frameworks: ['Spring Boot', 'React', 'Next.js', 'Angular'],
  Infra: ['AWS', 'Docker', 'Kafka', 'Oracle', 'PostgreSQL'],
  Practice: ['Microservices', 'Event Streaming', 'API Design', 'Distributed Systems'],
}

function useClock() {
  const [t, setT] = useState('')
  useEffect(() => {
    const fmt = () => new Date().toLocaleTimeString('en-US', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false, timeZone: 'America/Los_Angeles'
    })
    setT(fmt())
    const id = setInterval(() => setT(fmt()), 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

export default function EditorialPage() {
  const clock = useClock()
  const [active, setActive] = useState('index')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div data-hide-chrome className="min-h-screen bg-[#f4f1ea] text-[#111] selection:bg-[#111] selection:text-[#f4f1ea]">
      {/* Top hairline bar */}
      <div className="fixed top-0 inset-x-0 z-30 border-b border-[#111]/15 bg-[#f4f1ea]/85 backdrop-blur">
        <div className="flex items-center justify-between px-6 lg:px-10 py-3 font-mono text-[11px] tracking-[0.18em] uppercase">
          <span>Sanjay Santhanam — Vol. I, No. 04</span>
          <span className="hidden sm:block">Pacific · {clock || '—'}</span>
          <a href="/portfolio-hero-experiment/" className="underline underline-offset-4 hover:no-underline">↩ Back to gallery</a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] pt-14">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:border-r border-[#111]/15 px-6 lg:px-10 py-10 lg:py-16 flex flex-col">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase mb-6 text-[#111]/60">Contents</div>
          <nav className="space-y-3">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className={`block font-mono text-[12px] tracking-wide transition ${active === s.id ? 'text-[#111]' : 'text-[#111]/45 hover:text-[#111]'}`}>
                <span className="inline-block w-8 tabular-nums">{s.num}</span>
                <span className={active === s.id ? 'border-b border-[#111] pb-0.5' : ''}>{s.label}</span>
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-10 font-mono text-[10px] tracking-[0.2em] uppercase text-[#111]/55 leading-relaxed">
            <div>Set in Instrument Serif</div>
            <div>& JetBrains Mono.</div>
            <div className="mt-3">Bellevue, Washington.</div>
          </div>
        </aside>

        {/* Main column */}
        <main className="px-6 lg:px-16 xl:px-24 py-10 lg:py-16 max-w-[1100px]">

          {/* INDEX (hero) */}
          <section id="index" className="min-h-[80vh] flex flex-col justify-center">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#111]/60 mb-8">
              No. 01 · The Index
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}
              className="font-serif text-[15vw] lg:text-[180px] leading-[0.88] tracking-tight"
            >
              Sanjay
              <br />
              <span className="italic text-[#111]/70">Santhanam</span><span className="text-[#111]/40">.</span>
            </motion.h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 max-w-3xl border-t border-[#111]/20 pt-6">
              <p className="font-serif text-xl lg:text-2xl leading-snug">
                Software engineer working on the unglamorous middle layer where
                <em className="text-[#111]/60"> healthcare, finance,</em> and the systems behind them quietly hold the line.
              </p>
              <div className="font-mono text-[11px] tracking-wide leading-relaxed uppercase text-[#111]/70 space-y-2">
                <div><span className="text-[#111]/40">Based —</span> Bellevue, WA</div>
                <div><span className="text-[#111]/40">Working —</span> Distributed systems, FHIR, event streaming</div>
                <div><span className="text-[#111]/40">Status —</span> Open to conversations</div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-6 font-mono text-[11px] tracking-[0.2em] uppercase">
              <a href="#ledger" className="border-b border-[#111] pb-1 hover:bg-[#111] hover:text-[#f4f1ea] px-2 -mx-2 transition">↓ Read the ledger</a>
              <a href="#address" className="text-[#111]/60 hover:text-[#111] transition">Or: write to me →</a>
            </div>
          </section>

          {/* IDENTITY */}
          <Spread num="02" title="Identity">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <p className="md:col-span-7 font-serif text-2xl lg:text-3xl leading-snug">
                I build backends that handle people&rsquo;s <em>appointments</em>, their <em>money</em>, and the small bureaucratic rituals that decide whether a day goes well. I care more about what survives a 3 a.m. page than what looks good in a demo.
              </p>
              <aside className="md:col-span-4 md:col-start-9 border-l border-[#111]/20 pl-6 font-mono text-[11px] leading-relaxed text-[#111]/75 space-y-3">
                <P k="Currently"   v="Software Developer at Johnson & Johnson, building FHIR-compliant services for hospital scheduling." />
                <P k="Previously"  v="Citi (NYC) — Kafka fraud pipelines. Zentek (Jaipur) — HR systems." />
                <P k="Education"   v="MS in Computer Science." />
              </aside>
            </div>
          </Spread>

          {/* LEDGER */}
          <Spread num="03" title="Ledger">
            <div className="border-t border-[#111]/40">
              {ledger.map((row, i) => (
                <article key={i} className="grid grid-cols-12 gap-4 border-b border-[#111]/20 py-8 group hover:bg-[#111]/[0.03] transition">
                  <div className="col-span-12 md:col-span-2 font-mono text-[11px] tracking-wider uppercase pt-2 text-[#111]/60">{row.yr}</div>
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="font-serif text-3xl lg:text-4xl leading-tight">{row.co}</h3>
                    <div className="mt-1 font-mono text-[11px] tracking-wider uppercase text-[#111]/60">{row.role} · {row.loc}</div>
                  </div>
                  <p className="col-span-12 md:col-span-4 font-serif text-lg leading-snug text-[#111]/80 italic">{row.note}</p>
                </article>
              ))}
            </div>
          </Spread>

          {/* ARTIFACTS */}
          <Spread num="04" title="Artifacts">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {artifacts.map((a) => (
                <article key={a.n} className="border-t border-[#111]/40 pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#111]/55 pt-2">№ {a.n}</div>
                    <a href="#" className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#111]/55 hover:text-[#111] pt-2">↗</a>
                  </div>
                  <h3 className="font-serif text-3xl lg:text-4xl leading-tight mt-2">{a.title}</h3>
                  <p className="mt-3 font-mono text-[11px] tracking-wider uppercase text-[#111]/65">{a.stack}</p>
                </article>
              ))}
            </div>
          </Spread>

          {/* INSTRUMENTS */}
          <Spread num="05" title="Instruments">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {Object.entries(instruments).map(([cat, items]) => (
                <div key={cat} className="border-t border-[#111]/40 pt-4">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#111]/55 mb-3">{cat}</div>
                  <p className="font-serif text-2xl leading-snug">
                    {items.map((it, i) => (
                      <span key={it}>
                        {it}{i < items.length - 1 ? <span className="text-[#111]/35"> · </span> : '.'}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </Spread>

          {/* NOTES — marginalia */}
          <Spread num="06" title="Notes">
            <div className="grid grid-cols-12 gap-6">
              <blockquote className="col-span-12 md:col-span-8 font-serif text-3xl lg:text-4xl leading-snug">
                &ldquo;The best systems are the ones nobody talks about, because they never gave anyone a reason to.&rdquo;
              </blockquote>
              <div className="col-span-12 md:col-span-4 font-mono text-[11px] tracking-wider uppercase text-[#111]/60 leading-relaxed border-l border-[#111]/20 pl-6">
                A working principle, scrawled in a notebook somewhere between a hospital deploy at 2 a.m. and a fraud-pipeline post-mortem the next morning.
              </div>
            </div>
          </Spread>

          {/* ADDRESS */}
          <section id="address" className="pt-24 pb-32 border-t border-[#111]/40">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#111]/60 mb-6">No. 07 · Address</div>
            <h2 className="font-serif text-[12vw] lg:text-[140px] leading-[0.88] tracking-tight">
              Write to me<span className="text-[#111]/40">.</span>
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-[11px] tracking-wider uppercase">
              <a href="mailto:hello@sanjay.dev" className="border-t border-[#111] pt-3 hover:bg-[#111] hover:text-[#f4f1ea] -mx-2 px-2 transition">
                <div className="text-[#111]/60">Email</div>
                <div className="mt-1 normal-case tracking-normal text-base font-serif italic">sanjays2402@gmail.com</div>
              </a>
              <a href="https://github.com/Sanjays2402" className="border-t border-[#111] pt-3 hover:bg-[#111] hover:text-[#f4f1ea] -mx-2 px-2 transition">
                <div className="text-[#111]/60">GitHub</div>
                <div className="mt-1 normal-case tracking-normal text-base font-serif italic">@Sanjays2402</div>
              </a>
              <a href="https://linkedin.com/in/sanjays2402" className="border-t border-[#111] pt-3 hover:bg-[#111] hover:text-[#f4f1ea] -mx-2 px-2 transition">
                <div className="text-[#111]/60">LinkedIn</div>
                <div className="mt-1 normal-case tracking-normal text-base font-serif italic">in/sanjays2402</div>
              </a>
            </div>

            <div className="mt-20 flex items-center justify-between border-t border-[#111]/20 pt-4 font-mono text-[10px] tracking-[0.3em] uppercase text-[#111]/55">
              <span>End of issue</span>
              <span>Printed in the browser · {new Date().getFullYear()}</span>
            </div>
          </section>
        </main>
      </div>
      <VariantSwitcher current="editorial" dark={false} />
    </div>
  )
}

function Spread({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section id={title.toLowerCase()} className="pt-28 pb-12">
      <div className="flex items-baseline justify-between mb-10 border-b border-[#111]/20 pb-3">
        <h2 className="font-serif text-5xl lg:text-6xl">{title}<span className="text-[#111]/35">.</span></h2>
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#111]/55">No. {num}</div>
      </div>
      {children}
    </section>
  )
}

function P({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <span className="text-[#111]/45 uppercase">{k}: </span>
      <span className="normal-case tracking-normal">{v}</span>
    </div>
  )
}
