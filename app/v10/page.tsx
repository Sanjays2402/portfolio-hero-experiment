'use client'
import { profile, experience, projects, skills, education } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

/* ───────────────────────────  V10 · NEWSPAPER  ───────────────────────────
   Front-page broadsheet. Masthead, dateline, multi-column body w/ drop caps,
   classifieds rail, weather box, stock ticker. No "newspaper-themed UI" —
   it IS the newspaper.                                                       */

const today = new Date().toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })

export default function V10() {
  return (
    <main className="min-h-screen bg-[#f4ecd8] text-[#1a1a1a] font-['Times_New_Roman',Georgia,serif] selection:bg-[#1a1a1a] selection:text-[#f4ecd8]">
      {/* paper texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.07]" style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, #000 1px, transparent 1px), radial-gradient(circle at 70% 60%, #000 1px, transparent 1px)`,
        backgroundSize: '7px 7px, 11px 11px'
      }}/>

      <div className="relative max-w-[1180px] mx-auto px-8 py-10">
        {/* ═══════ MASTHEAD ═══════ */}
        <div className="flex items-end justify-between text-[11px] uppercase tracking-[0.2em] border-b-2 border-[#1a1a1a] pb-2">
          <span>Vol. XXVI · No. 26</span>
          <span>{today}</span>
          <span>Price: One Smile</span>
        </div>
        <h1 className="text-center text-[88px] leading-[0.9] font-bold tracking-tight mt-3" style={{ fontFamily: 'UnifrakturCook, "Old English Text MT", "Times New Roman", serif' }}>
          The Santhanam Times
        </h1>
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] border-y-[3px] border-double border-[#1a1a1a] py-2 mt-3">
          <span>★ ★ ★ ★ ★</span>
          <span className="italic font-semibold">"All the systems fit to ship"</span>
          <span>Bellevue · Online Edition</span>
        </div>

        {/* ═══════ FRONT-PAGE GRID: lead story (5 cols) + classifieds rail (2 cols) ═══════ */}
        <section className="grid grid-cols-7 gap-x-7 mt-7">

          {/* — Lead story — */}
          <article className="col-span-5 border-r border-[#1a1a1a]/30 pr-7">
            <div className="text-[10px] uppercase tracking-[0.3em] text-red-800 font-bold mb-1">Exclusive · Page 1</div>
            <h2 className="text-[44px] leading-[1.0] font-bold tracking-tight">
              Local Engineer Quietly Holds<br/>the Middle Layer Together
            </h2>
            <p className="text-sm italic text-[#1a1a1a]/70 mt-2 border-b border-[#1a1a1a]/30 pb-3">
              By Our Correspondent · BELLEVUE, WA — At an undisclosed standing desk, {profile.first} {profile.last} ships another microservice while everyone else fights about the front-end.
            </p>

            <div className="columns-2 gap-7 mt-5 text-[14.5px] leading-[1.55] text-justify hyphens-auto" style={{ columnRule: '1px solid rgba(0,0,0,0.2)' }}>
              <p>
                <span className="float-left text-[64px] leading-[0.85] pr-2 pt-1 font-bold">F</span>
                or the better part of four years, {profile.first} {profile.last} has worked on the unglamorous middle layer where healthcare, finance, and the systems behind them quietly hold the line. It is, by his own admission, not the stuff of keynotes.
              </p>
              <p className="mt-3">
                At Johnson &amp; Johnson, Santhanam delivered a FHIR-compliant scheduling microservice now running across fifteen hospitals — a reduction in booking time of <b>35 percent</b>. Earlier, at Citi, his Kafka-streamed fraud detector evaluates <b>one million transactions per hour</b> with a 15-point bump in accuracy.
              </p>
              <p className="mt-3">
                "Distributed systems are mostly bookkeeping," he is reported to have said. "If your bookkeeping is good, everything else is just typing."
              </p>
              <p className="mt-3">
                Colleagues describe the work as "boring in the best possible way." When pressed for a quote, Santhanam declined to elaborate, citing an open pull request. Continued on <i>Page 2</i> →
              </p>
            </div>
          </article>

          {/* — Classifieds rail — */}
          <aside className="col-span-2 space-y-5 text-[12.5px]">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold border-b-2 border-[#1a1a1a] pb-1">Classifieds</div>
              <div className="mt-2 leading-snug">
                <p><b>WANTED:</b> Interesting problems involving distributed systems, healthcare data, or anything with a queue. Inquire via <u>{profile.email}</u>.</p>
                <p className="mt-2"><b>OFFERED:</b> One software engineer, lightly used, Java-shaped, microservices-trained, runs cool. References available on <u>github.com/{profile.github}</u>.</p>
                <p className="mt-2"><b>LOST:</b> 4 hours debugging an off-by-one error. If found, please do not return.</p>
              </div>
            </div>

            <div className="border-y-[3px] border-double border-[#1a1a1a] py-2">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold">Today's Weather</div>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-3xl font-bold">52°</span>
                <span className="text-xs italic">Bellevue, WA</span>
              </div>
              <div className="text-[11px] text-[#1a1a1a]/70">Overcast · Light drizzle · Coffee-grade ☕</div>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold border-b border-[#1a1a1a]/40 pb-1">Stock Watch</div>
              <table className="w-full text-[11px] mt-1 font-mono">
                <tbody>
                  <tr className="border-b border-[#1a1a1a]/15"><td className="py-0.5">JNJ</td><td className="text-right">155.20</td><td className="text-right text-green-800">+0.42%</td></tr>
                  <tr className="border-b border-[#1a1a1a]/15"><td className="py-0.5">C</td>  <td className="text-right">63.14</td> <td className="text-right text-red-800">−0.18%</td></tr>
                  <tr className="border-b border-[#1a1a1a]/15"><td className="py-0.5">SHIP</td><td className="text-right">1.00</td> <td className="text-right text-green-800">+∞%</td></tr>
                  <tr><td className="py-0.5">BUGS</td><td className="text-right">3</td>    <td className="text-right text-green-800">−2</td></tr>
                </tbody>
              </table>
            </div>
          </aside>
        </section>

        {/* ═══════ BUSINESS · PROJECTS as wire-stories ═══════ */}
        <section className="mt-10 border-t-2 border-[#1a1a1a] pt-6">
          <div className="flex items-end justify-between mb-3">
            <h3 className="text-2xl font-bold uppercase tracking-wider">Business &amp; Technology</h3>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#1a1a1a]/60">Section B · Page 1</span>
          </div>
          <div className="grid grid-cols-4 gap-6 border-t border-[#1a1a1a]/30 pt-4">
            {projects.map(p => (
              <article key={p.n} className="border-r last:border-r-0 border-[#1a1a1a]/20 pr-5">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-red-800">Dispatch · {p.n}</div>
                <h4 className="text-[18px] font-bold leading-tight mt-1">{p.title}</h4>
                <p className="text-[13px] leading-snug mt-2">{p.blurb}</p>
                <div className="text-[10px] uppercase tracking-wider mt-2 text-[#1a1a1a]/60 italic">{p.stack.join(' · ')}</div>
              </article>
            ))}
          </div>
        </section>

        {/* ═══════ CAREERS · experience as opinion column ═══════ */}
        <section className="mt-10 grid grid-cols-7 gap-x-7 border-t-2 border-[#1a1a1a] pt-6">
          <div className="col-span-5">
            <div className="flex items-end justify-between mb-2">
              <h3 className="text-2xl font-bold uppercase tracking-wider">Careers</h3>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#1a1a1a]/60">Section C · A Working Life</span>
            </div>
            <div className="space-y-5 text-[14px] leading-[1.55]">
              {experience.map((e, i) => (
                <div key={i} className="grid grid-cols-[160px_1fr] gap-5 border-b border-[#1a1a1a]/20 pb-4 last:border-b-0">
                  <div className="text-[11px] uppercase tracking-[0.2em] font-bold pt-1">
                    {e.period}<br/>
                    <span className="text-[10px] font-normal opacity-70 normal-case tracking-normal">{e.location}</span>
                  </div>
                  <div>
                    <div className="text-[18px] font-bold">{e.company} <span className="font-normal italic opacity-70">— {e.role}</span></div>
                    <p className="mt-1">{e.blurb}</p>
                    <div className="text-[10px] uppercase tracking-wider mt-2 opacity-70 italic">Filed under: {e.stack.join(' · ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="col-span-2 border-l border-[#1a1a1a]/30 pl-6 text-[13px] leading-snug">
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold border-b border-[#1a1a1a] pb-1">Skills · Index</div>
            <dl className="mt-2 space-y-2">
              {Object.entries(skills).map(([k, v]) => (
                <div key={k}>
                  <dt className="font-bold italic">{k}.</dt>
                  <dd className="opacity-85">{(v as string[]).join(' · ')}</dd>
                </div>
              ))}
            </dl>

            <div className="text-[10px] uppercase tracking-[0.25em] font-bold border-b border-[#1a1a1a] pb-1 mt-5">Education</div>
            <ul className="mt-2 space-y-2">
              {education.map(ed => (
                <li key={ed.degree} className="border-b border-dashed border-[#1a1a1a]/30 pb-2">
                  <div className="font-bold">{ed.degree}</div>
                  <div className="italic opacity-75">{ed.school}, {ed.year}</div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 border-[3px] border-double border-[#1a1a1a] text-center">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold">Letter to the Editor</div>
              <div className="text-sm italic mt-1">Hire him before someone else does.</div>
              <div className="text-[11px] mt-1">— a satisfied tech lead</div>
            </div>
          </aside>
        </section>

        {/* ═══════ FOOTER · colophon ═══════ */}
        <footer className="mt-10 border-t-2 border-[#1a1a1a] pt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
          <span>{profile.email}</span>
          <span>github.com/{profile.github}  ·  linkedin.com/{profile.linkedin}</span>
          <span>{profile.location}</span>
        </footer>
        <div className="text-center text-[10px] italic mt-2 opacity-60 pb-20">— end of edition —</div>
      </div>

      <VariantSwitcher current="v10" dark={false} />
    </main>
  )
}
