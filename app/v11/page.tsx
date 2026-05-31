'use client'
import { education, experience, profile, projects, research, skills, stats } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

/* ─────────────  V11 · THERMAL RECEIPT  ─────────────
   Long, narrow thermal receipt. Dot-matrix font. Barcode at bottom.
   Projects + experience are real line items with subtotals.       */

const now = new Date()
const stamp = now.toISOString().replace('T',' ').slice(0,19)

const SEP = '------------------------------------'
const sub = (label: string) => label

function Row({ l, r, big=false, bold=false }: { l: string; r?: string; big?: boolean; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${big ? 'text-base' : 'text-[13px]'} ${bold ? 'font-bold' : ''} leading-tight`}>
      <span className="whitespace-pre">{l}</span>
      {r && <span className="whitespace-pre">{r}</span>}
    </div>
  )
}

export default function V11() {
  const expHours = experience.reduce((s) => s + 1, 0) * 8760  // playful "hours"
  const projCount = projects.length
  const skillCount = Object.values(skills).flat().length

  return (
    <main className="min-h-screen bg-stone-900 text-stone-300 py-12 px-4 flex items-start justify-center" style={{ fontFamily: '"VT323","Courier New",monospace' }}>
      {/* paper-texture backdrop */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4]" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)',
      }}/>

      <article className="relative w-[440px] bg-[#fafafa] mb-20 text-stone-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]" style={{ fontFamily: '"VT323","Courier New",monospace' }}>
        {/* zigzag top edge */}
        <div className="h-3 bg-[#fafafa]" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 50%, 95% 100%, 90% 50%, 85% 100%, 80% 50%, 75% 100%, 70% 50%, 65% 100%, 60% 50%, 55% 100%, 50% 50%, 45% 100%, 40% 50%, 35% 100%, 30% 50%, 25% 100%, 20% 50%, 15% 100%, 10% 50%, 5% 100%, 0 50%)'
        }} />

        <div className="px-6 pt-4 pb-6 text-[15px] leading-[1.35]">
          {/* HEADER */}
          <div className="text-center">
            <div className="text-3xl font-bold tracking-widest">SANTHANAM &amp; CO.</div>
            <div className="text-[12px] uppercase tracking-[0.25em] mt-1">SHIPPED SOFTWARE · EST. 2020</div>
            <div className="text-[12px] mt-2 leading-tight">
              {profile.location}<br/>
              {profile.email}<br/>
              github.com/{profile.github}
            </div>
          </div>

          <div className="my-3 text-center text-[12px]">================ RECEIPT ================</div>

          <Row l={`ORDER #  SS-${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`} />
          <Row l={`DATE     ${stamp}`} />
          <Row l={`CASHIER  ${profile.first.toUpperCase()}`} />
          <Row l={`TERMINAL HIRE-1`} />

          <div className="my-2 text-[12px]">{SEP}</div>

          {/* PROJECTS LINE ITEMS */}
          <div className="text-[12px] font-bold uppercase">— LINE ITEMS · PROJECTS —</div>
          <div className="mt-1 space-y-1">
            {projects.map(p => (
              <div key={p.n}>
                <Row l={`${p.n} ${p.title}`.toUpperCase().slice(0, 30).padEnd(30)} r={`$${(Math.random()*900 + 100).toFixed(2)}`} />
                <div className="text-[11px] opacity-70 pl-4">{p.stack.join(' / ')}</div>
              </div>
            ))}
          </div>

          <div className="my-2 text-[12px]">{SEP}</div>

          {/* EXPERIENCE LINE ITEMS */}
          <div className="text-[12px] font-bold uppercase">— LINE ITEMS · EXPERIENCE —</div>
          <div className="mt-1 space-y-1">
            {experience.map((e, i) => (
              <div key={i}>
                <Row l={`${(i+1).toString().padStart(2,'0')} ${e.company}`.toUpperCase().slice(0,30).padEnd(30)} r={`$${(Math.random()*3000 + 1000).toFixed(2)}`} />
                <div className="text-[11px] opacity-70 pl-4">{e.role} · {e.period}</div>
                <div className="text-[11px] opacity-60 pl-4">→ {e.blurb}</div>
              </div>
            ))}
          </div>

          <div className="my-2 text-[12px]">{SEP}</div>

          {/* SKILLS LINE ITEMS */}
          <div className="text-[12px] font-bold uppercase">— LINE ITEMS · SKILLS —</div>
          <div className="mt-1 space-y-0.5">
            {Object.entries(skills).map(([cat, items]) => (
              <Row key={cat} l={cat.toUpperCase().padEnd(14) + (items as string[]).length.toString().padStart(2)+' ITEMS'} r={`$${((items as string[]).length * 49).toFixed(2)}`} />
            ))}
          </div>

          <div className="my-2 text-[12px]">{SEP}</div>

          {/* RESEARCH LINE ITEMS */}
          <div className="text-[12px] font-bold uppercase">— LINE ITEMS · RESEARCH —</div>
          <div className="mt-1 space-y-0.5">
            {research.map((r, i) => (
              <div key={i}>
                <Row l={`${(i+1).toString().padStart(2,'0')} ${r.title.slice(0,28).toUpperCase()}`} r={`${r.citations} CITE`} />
                <div className="text-[11px] pl-3 opacity-80">{r.venue.slice(0,32)} · {r.year}</div>
              </div>
            ))}
          </div>
          <div className="my-1 text-[12px]">{SEP}</div>
          <Row l={`PUBLICATIONS         ${stats.publications}`} r={`${stats.citations}+ CITES`} bold />

          <div className="my-2 text-[12px]">{SEP}</div>

          <div className="my-2 text-[12px]">{SEP}</div>

          {/* EDUCATION LINE ITEMS */}
          <div className="text-[12px] font-bold uppercase">— SCHOOLS · CERTIFIED —</div>
          <div className="mt-1 space-y-0.5">
            {education.map((e, i) => (
              <div key={e.degree}>
                <Row l={`${(i+1).toString().padStart(2,'0')} ${e.school.toUpperCase().slice(0,28)}`} r={e.year.toString()} />
                <div className="text-[11px] pl-3 opacity-80">{e.degree.slice(0,38)}</div>
                <div className="text-[11px] pl-3 opacity-60">{e.location} · {e.period}</div>
              </div>
            ))}
          </div>

          <div className="my-2 text-[12px]">{SEP}</div>

          {/* TOTALS */}
          <Row l={`SUBTOTAL`}              r={`$${(7842.50).toFixed(2)}`} />
          <Row l={`COFFEE SURCHARGE (15%)`} r={`$  1176.38`} />
          <Row l={`LATE-NIGHT BONUS`}      r={`$   420.00`} />
          <Row l={`DISCOUNT  (REFERRAL)`}  r={`-$   200.00`} />
          <div className="my-2 text-[12px]">{SEP}</div>
          <Row l={`TOTAL DUE`} r={`$  9238.88`} big bold />
          <Row l={`PAYMENT   INTERESTING PROBLEMS`} />
          <Row l={`CHANGE`}   r={`$     0.00`} />

          <div className="my-2 text-[12px]">{SEP}</div>

          {/* STATS */}
          <Row l={`ITEMS SOLD`}           r={`${projCount + experience.length + skillCount}`} />
          <Row l={`PROJECTS SHIPPED`}     r={`${projCount}`} />
          <Row l={`HOURS LOGGED (EST.)`}  r={`${expHours.toLocaleString()}`} />
          <Row l={`AVG REVIEW SCORE`}     r={`5.0 / 5.0`} />

          <div className="my-3 text-[12px] text-center">{SEP}</div>

          <div className="text-center text-[13px]">
            ★  THANK YOU FOR YOUR ATTENTION  ★<br/>
            <span className="text-[12px]">PLEASE COME AGAIN</span>
          </div>

          <div className="my-3 text-[12px] text-center">{SEP}</div>

          {/* BARCODE */}
          <div className="flex justify-center">
            <Barcode />
          </div>
          <div className="text-center text-[11px] mt-1 tracking-[0.3em]">SS · 2402 · 0001 · 0026</div>

          <div className="my-3 text-[12px] text-center">{SEP}</div>

          {/* FOOTER FINE PRINT */}
          <div className="text-[11px] leading-snug opacity-80">
            Returns accepted within 30 days of onboarding. Engineer is sold as-is. Side effects may include: shipped software, fewer 3AM pages, and the occasional unsolicited opinion about microservices. Not legal tender. Keep receipt for warranty claims.
          </div>

          <div className="text-center text-[11px] mt-3 opacity-70">
            * * * END OF RECEIPT * * *
          </div>
        </div>

        {/* zigzag bottom edge */}
        <div className="h-3 bg-[#fafafa]" style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 50%, 95% 0, 90% 50%, 85% 0, 80% 50%, 75% 0, 70% 50%, 65% 0, 60% 50%, 55% 0, 50% 50%, 45% 0, 40% 50%, 35% 0, 30% 50%, 25% 0, 20% 50%, 15% 0, 10% 50%, 5% 0, 0 50%)'
        }} />
      </article>

      <VariantSwitcher current="v11" dark />
    </main>
  )
}

function Barcode() {
  // deterministic bar pattern
  const bars = '101101001110100101110010010111010011010110110100111010110010'
  return (
    <svg width="280" height="64" viewBox="0 0 280 64">
      {bars.split('').map((b, i) => (
        <rect key={i} x={i*4.5} y={0} width={b==='1' ? 2.5 : 1.2} height={64} fill="#111" />
      ))}
    </svg>
  )
}
