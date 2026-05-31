'use client'
import { useEffect, useState } from 'react'
import { profile, experience, projects, skills, education } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

/* ─────────────  V13 · BLOOMBERG TERMINAL  ─────────────
   Trading-floor multi-panel terminal. Amber/green/red palette, monospace
   everywhere, live ticker bar, P/L cells, function-key bar. The CV as a
   market data product.                                                     */

const ticker = [
  ['JNJ',   '155.20', '+0.42%'],
  ['CITI',  ' 63.14', '-0.18%'],
  ['MSFT',  '418.34', '+0.91%'],
  ['ZTKI',  '  4.20', '+2.14%'],
  ['SHIP',  '999.99', '+∞.∞%'],
  ['BUGS',  '  0.03', '-66.6%'],
  ['JAVA',  ' 17.00', '+1.20%'],
  ['KAFKA', '  3.71', '+0.45%'],
  ['FHIR',  '  9.10', '+0.30%'],
  ['SS',    'EX1.0K', '+99.9%'],
]

function useNow() {
  const [t, setT] = useState<string>('--:--:--')
  useEffect(() => {
    const fmt = () => new Date().toLocaleTimeString('en-US', { hour12: false })
    setT(fmt()); const id = setInterval(() => setT(fmt()), 1000); return () => clearInterval(id)
  }, [])
  return t
}

export default function V13() {
  const now = useNow()
  return (
    <main className="min-h-screen bg-black text-amber-200 font-mono text-[13px] leading-[1.4] flex flex-col">
      {/* CRT scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50" style={{
        background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)',
        mixBlendMode: 'multiply',
      }}/>
      <div className="fixed inset-0 pointer-events-none z-50" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)'
      }}/>

      {/* TOP BAR */}
      <header className="flex items-center justify-between px-4 py-1 border-b border-amber-200/30 text-[11px]">
        <span>SS &lt;EQUITY&gt; · Santhanam Career Securities · BLOOMBERG STYLE TERMINAL</span>
        <span>USER: VISITOR · SESSION 0001 · {now}</span>
      </header>

      {/* LIVE TICKER */}
      <div className="border-b border-amber-200/30 bg-amber-200/[0.04] overflow-hidden">
        <div className="whitespace-nowrap py-1 px-2 ticker-scroll text-[12px]">
          {[...ticker, ...ticker].map((row, i) => (
            <span key={i} className="mx-6">
              <b className="text-amber-100">{row[0]}</b>
              <span className="ml-2 text-amber-300/90">{row[1]}</span>
              <span className={`ml-2 ${row[2].startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>{row[2]}</span>
              <span className="ml-3 text-amber-200/40">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* MAIN GRID */}
      <section className="flex-1 grid grid-cols-12 gap-px bg-amber-200/30 p-px">

        {/* TOP-LEFT · MAIN QUOTE */}
        <Panel className="col-span-6 row-span-1" title="SS.US  ·  SANTHANAM, SANJAY  ·  COMMON STOCK">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-1">
            <KV k="Name"      v={profile.name} />
            <KV k="Sector"    v="Software / Backend" />
            <KV k="Domicile"  v={profile.location} />
            <KV k="Exchange"  v="NASDAQ: HIRING" />
            <KV k="Mandate"   v="Distributed Systems" />
            <KV k="Status"    v={<span className="text-green-400">{profile.status.toUpperCase()}</span>} />
            <KV k="Email"     v={profile.email} />
            <KV k="GitHub"    v={'github.com/'+profile.github} />
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2 text-[11px]">
            <Stat label="Last"    value="999.99"  color="text-amber-100" />
            <Stat label="Chg"     value="+199.99" color="text-green-400" />
            <Stat label="Chg %"   value="+24.96%" color="text-green-400" />
            <Stat label="Volume"  value="1.0M shp" color="text-amber-100" />
            <Stat label="Hi 52w"  value="1099.99" color="text-amber-100" />
            <Stat label="Lo 52w"  value="49.50"   color="text-amber-100" />
            <Stat label="P/E"     value="∞ (no E)" color="text-amber-300/80" />
            <Stat label="Beta"    value="0.31 (calm)" color="text-amber-300/80" />
          </div>

          <div className="mt-4 text-amber-100 leading-snug max-w-prose">
            &gt; {profile.blurb}
          </div>
        </Panel>

        {/* TOP-RIGHT · CHART */}
        <Panel className="col-span-6 row-span-1" title="CAREER CHART · 5Y · DAILY">
          <Chart />
          <div className="mt-2 text-[11px] text-amber-200/60 flex justify-between">
            <span>● close  ─── 200-day MA  ◇ ship event</span>
            <span>scale: log · timezone: UTC-8</span>
          </div>
        </Panel>

        {/* MID-LEFT · EXPERIENCE BOOK */}
        <Panel className="col-span-7" title="ORDER BOOK · EXPERIENCE (TIME &amp; SALES)">
          <table className="w-full text-[12px] border-collapse">
            <thead className="text-amber-200/60 border-b border-amber-200/20">
              <tr><th className="text-left py-1">SIDE</th><th className="text-left">PERIOD</th><th className="text-left">COUNTERPARTY</th><th className="text-left">ROLE</th><th className="text-left">FILL</th></tr>
            </thead>
            <tbody>
              {experience.map((e, i) => (
                <tr key={i} className="border-b border-amber-200/10 align-top">
                  <td className="py-2 text-green-400 font-bold">BUY</td>
                  <td className="py-2 whitespace-nowrap">{e.period}</td>
                  <td className="py-2 text-amber-100 font-bold">{e.company}</td>
                  <td className="py-2">{e.role}<br/><span className="text-amber-200/60 text-[11px]">{e.location}</span></td>
                  <td className="py-2 max-w-[280px]">{e.blurb}<br/><span className="text-amber-200/50 text-[11px]">stack: {e.stack.join(' · ')}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>

        {/* MID-RIGHT · WATCHLIST · SKILLS */}
        <Panel className="col-span-5" title="WATCHLIST · SKILLS COVERAGE">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="mb-3">
              <div className="text-amber-200/60 uppercase text-[10px] tracking-wider mb-1">{cat}</div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[12px]">
                {(items as string[]).map(s => (
                  <div key={s} className="flex justify-between">
                    <span>{s}</span>
                    <span className="text-green-400">{Math.floor(70 + Math.random()*25)}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Panel>

        {/* BOTTOM-LEFT · PROJECTS PORTFOLIO */}
        <Panel className="col-span-7" title="PORTFOLIO HOLDINGS · PROJECTS SHIPPED">
          <table className="w-full text-[12px] border-collapse">
            <thead className="text-amber-200/60 border-b border-amber-200/20">
              <tr><th className="text-left py-1">ID</th><th className="text-left">POSITION</th><th className="text-left">DESCRIPTION</th><th className="text-left">P/L</th></tr>
            </thead>
            <tbody>
              {projects.map((p,i) => (
                <tr key={p.n} className="border-b border-amber-200/10 align-top">
                  <td className="py-2 text-amber-200/70">{p.n}</td>
                  <td className="py-2 text-amber-100 font-bold whitespace-nowrap">{p.title}<br/><span className="text-amber-200/50 text-[11px] font-normal">{p.stack.join(' · ')}</span></td>
                  <td className="py-2 max-w-[280px]">{p.blurb}</td>
                  <td className={`py-2 text-right font-bold ${i%3===0?'text-green-400':i%3===1?'text-amber-100':'text-green-400'}`}>+{(Math.random()*99+1).toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>

        {/* BOTTOM-RIGHT · EDUCATION + NEWS */}
        <Panel className="col-span-5" title="ANALYST NOTES &amp; PROVENANCE">
          <div className="text-amber-200/60 uppercase text-[10px] tracking-wider mb-1">EDUCATION</div>
          {education.map(e => (
            <div key={e.degree} className="mb-2 text-[12px]">
              <div className="text-amber-100 font-bold">{e.degree}</div>
              <div className="text-amber-200/70">{e.school} · {e.year}</div>
            </div>
          ))}
          <div className="text-amber-200/60 uppercase text-[10px] tracking-wider mt-4 mb-1">WIRE</div>
          <div className="text-[12px] space-y-1">
            <Wire t="07:12" h="UPGRADE" s="green-400" body={`Analyst note: "${profile.name} is currently shipping faster than 92% of comp set."`}/>
            <Wire t="08:04" h="MAINTAIN" s="amber-100" body="Buyback rumor: candidate considering own equity. Position: long."/>
            <Wire t="09:30" h="OPEN"     s="green-400" body="US Hiring Season opened. Volume picking up across all sectors."/>
            <Wire t="10:46" h="NOTE"     s="amber-100" body="Sleep deficit slightly elevated. Coffee position: max long."/>
          </div>
        </Panel>
      </section>

      {/* COMMAND LINE */}
      <div className="border-t border-amber-200/30 bg-black px-3 py-1 flex items-center gap-2 text-[12px]">
        <span className="text-amber-200/60">CMD&gt;</span>
        <span className="text-amber-100">SS</span>
        <span className="text-amber-200/60">&lt;EQUITY&gt;</span>
        <span className="text-amber-100">DES</span>
        <span className="text-amber-100">GO</span>
        <span className="inline-block w-2 h-3.5 bg-amber-200 ml-1 animate-pulse"/>
        <span className="ml-auto text-amber-200/50 text-[10px]">HELP for assist · TYPE &lt;HELP&gt; KEY for additional info</span>
      </div>
      {/* BOTTOM FUNCTION-KEY BAR */}
      <footer className="border-t border-amber-200/30 bg-amber-200/[0.04] text-[10px] tracking-wider grid grid-cols-12 mb-12">
        {['F1 HELP','F2 EMAIL','F3 CALL','F4 RESUME','F5 GITHUB','F6 LINKEDIN','F7 BLOG','F8 PROJECTS','F9 NEWS','F10 PRINT','F11 EXEC','F12 HIRE'].map((k,i)=>(
          <div key={i} className={`px-2 py-1 border-r border-amber-200/20 last:border-r-0 hover:bg-amber-200/10 cursor-pointer ${i===11 ? 'bg-amber-200 text-black font-bold' : ''}`}>{k}</div>
        ))}
      </footer>

      <style jsx>{`
        .ticker-scroll { animation: tk 60s linear infinite; }
        @keyframes tk { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      <VariantSwitcher current="v13" dark />
    </main>
  )
}

function Panel({ title, children, className='' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-black p-3 ${className}`}>
      <div className="text-[10px] uppercase tracking-[0.2em] text-amber-200/60 border-b border-amber-200/20 pb-1 mb-2 flex justify-between">
        <span>{title}</span><span className="text-amber-200/40">[--]</span>
      </div>
      {children}
    </div>
  )
}
function KV({ k, v }: { k: string; v: React.ReactNode }) {
  return <div className="flex justify-between border-b border-amber-200/10 py-0.5 text-[12px]"><span className="text-amber-200/60 uppercase text-[10px] tracking-wider">{k}</span><span className="text-amber-100 truncate ml-3 text-right">{v}</span></div>
}
function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return <div className="bg-amber-200/[0.04] border border-amber-200/20 px-2 py-1"><div className="text-amber-200/60 text-[9px] uppercase tracking-wider">{label}</div><div className={`text-base font-bold ${color}`}>{value}</div></div>
}
function Wire({ t, h, s, body }: { t: string; h: string; s: string; body: string }) {
  return (
    <div className="border-l-2 border-amber-200/30 pl-2 py-0.5">
      <div className="text-[10px] uppercase tracking-wider"><span className="text-amber-200/60">{t}</span> <span className={`text-${s} font-bold`}>{h}</span></div>
      <div>{body}</div>
    </div>
  )
}

/* Tiny inline SVG chart — generated stair-stepping career */
function Chart() {
  const pts = [10,12,14,18,19,23,28,30,32,38,42,45,46,52,58,62,66,74,80,88,96,108,118,128,140,155,168,180,190,205]
  const W = 580, H = 200, P = 24
  const max = Math.max(...pts), min = Math.min(...pts)
  const path = pts.map((y, i) => {
    const X = P + (i/(pts.length-1))*(W-P*2)
    const Y = H-P - ((y-min)/(max-min))*(H-P*2)
    return `${i?'L':'M'}${X.toFixed(1)},${Y.toFixed(1)}`
  }).join(' ')
  const area = path + ` L${W-P},${H-P} L${P},${H-P} Z`
  // ship events
  const events = [4, 12, 22, 28]
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-44">
      {/* grid */}
      {[0,1,2,3,4].map(i => <line key={i} x1={P} x2={W-P} y1={P+i*((H-P*2)/4)} y2={P+i*((H-P*2)/4)} stroke="rgba(252,211,77,0.12)" strokeDasharray="2 4"/>)}
      <path d={area} fill="rgba(74,222,128,0.10)"/>
      <path d={path} stroke="#86efac" strokeWidth="2" fill="none"/>
      {/* MA */}
      <path d={pts.map((_,i) => {
        const window = pts.slice(Math.max(0,i-4), i+1); const avg = window.reduce((a,b)=>a+b,0)/window.length
        const X = P + (i/(pts.length-1))*(W-P*2); const Y = H-P - ((avg-min)/(max-min))*(H-P*2)
        return `${i?'L':'M'}${X.toFixed(1)},${Y.toFixed(1)}`
      }).join(' ')} stroke="#fcd34d" strokeWidth="1" strokeDasharray="3 3" fill="none"/>
      {/* ship events */}
      {events.map(i => {
        const X = P + (i/(pts.length-1))*(W-P*2); const Y = H-P - ((pts[i]-min)/(max-min))*(H-P*2)
        return <g key={i}><circle cx={X} cy={Y} r="4" fill="#fcd34d"/><text x={X+6} y={Y-4} fontSize="9" fill="#fcd34d">SHIP</text></g>
      })}
    </svg>
  )
}
