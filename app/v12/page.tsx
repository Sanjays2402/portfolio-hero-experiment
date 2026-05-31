'use client'
import { education, experience, profile, projects, research, skills, stats } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

/* ─────────────  V12 · SUBWAY MAP  ─────────────
   MTA/TfL-style line diagram. Stations = roles/projects. Real geometry,
   not "subway-themed cards". Transfer dots, line names, terminus markers.   */

const LINES = {
  career: { name: 'CAREER LINE',   color: '#ee352e', stops: experience.map(e => ({ id: e.company, label: e.company, sub: `${e.role} · ${e.period}`, body: e.blurb })) },
  ship:   { name: 'SHIP LINE',     color: '#0039a6', stops: projects.map(p => ({ id: p.title, label: p.title, sub: p.stack.join(' · '), body: p.blurb })) },
  craft:  { name: 'CRAFT LINE',    color: '#00933c', stops: Object.entries(skills).map(([k,v]) => ({ id: k, label: k, sub: `${(v as string[]).length} tools`, body: (v as string[]).join(' · ') })) },
  paper:  { name: 'RESEARCH LINE', color: '#b933ad', stops: research.map(r => ({ id: r.title, label: r.title.length > 28 ? r.title.slice(0,26) + '…' : r.title, sub: `${r.venue} · ${r.year}`, body: `${r.authors} — cited ${r.citations}×` })) },
  learn:  { name: 'LEARNING LINE', color: '#ff6319', stops: education.map(e => ({ id: e.degree, label: e.degree, sub: e.school, body: `Graduated ${e.year}` })) },
} as const

type LineKey = keyof typeof LINES
const LINE_ORDER: LineKey[] = ['career', 'ship', 'craft', 'paper', 'learn']

const STATION_GAP = 240
const LINE_GAP = 130
const MARGIN_X = 130
const MARGIN_Y = 110

function stationXY(lineIdx: number, stopIdx: number) {
  return { x: MARGIN_X + stopIdx * STATION_GAP, y: MARGIN_Y + lineIdx * LINE_GAP }
}

export default function V12() {
  const maxStops = Math.max(...LINE_ORDER.map(k => LINES[k].stops.length))
  const width = MARGIN_X * 2 + (maxStops - 1) * STATION_GAP
  const height = MARGIN_Y * 2 + (LINE_ORDER.length - 1) * LINE_GAP

  // Hub station: connects Career[0] (J&J) with Ship[0] (FHIR) and Craft[0] (Languages) — a transfer
  const transfers: [LineKey, number, LineKey, number][] = [
    ['career', 0, 'ship', 0],   // J&J ↔ FHIR
    ['career', 1, 'ship', 1],   // Citi ↔ Fraud
    ['career', 2, 'ship', 2],   // Zentek ↔ HR Portal
    ['ship', 3, 'craft', 1],    // Portfolio ↔ Frameworks
    ['craft', 0, 'learn', 0],   // Languages ↔ MSCS
  ]

  return (
    <main className="min-h-screen bg-[#f4f0e6] text-stone-900 font-['Helvetica_Neue','Helvetica',Arial,sans-serif] overflow-x-auto">
      {/* TOP BANNER · MTA STYLE */}
      <header className="bg-stone-900 text-white px-8 py-4 flex items-baseline justify-between">
        <div className="flex items-baseline gap-3">
          <span className="inline-flex items-center justify-center size-9 rounded-full bg-white text-stone-900 font-black text-lg">S</span>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] opacity-70">Metropolitan Career Transit Authority</div>
            <div className="text-xl font-bold tracking-tight">Santhanam System · Route Map</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-[0.2em] opacity-70">Service Status</div>
          <div className="text-sm font-bold flex items-center gap-2"><span className="size-2 rounded-full bg-green-400 animate-pulse"/>Good Service · All Lines</div>
        </div>
      </header>

      {/* LINE LEGEND BAR */}
      <div className="bg-stone-800 text-white px-8 py-3 flex items-center gap-6 text-[12px] uppercase tracking-wider overflow-x-auto">
        {LINE_ORDER.map(k => (
          <div key={k} className="flex items-center gap-2 whitespace-nowrap">
            <span className="size-4 rounded-full" style={{ background: LINES[k].color }}/>
            <span className="font-bold">{LINES[k].name}</span>
            <span className="opacity-60">· {LINES[k].stops.length} stops</span>
          </div>
        ))}
        <div className="ml-auto opacity-60">⊕ Transfer · ◉ Terminus · → Northbound</div>
      </div>

      {/* MAP */}
      <section className="px-8 py-12">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block">
          {/* paper grain */}
          <defs>
            <pattern id="grain" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.3" fill="rgba(0,0,0,0.05)"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width={width} height={height} fill="url(#grain)"/>

          {/* TRANSFER tubes (white halo connectors) */}
          {transfers.map(([a, ai, b, bi], i) => {
            const A = stationXY(LINE_ORDER.indexOf(a), ai)
            const B = stationXY(LINE_ORDER.indexOf(b), bi)
            return (
              <g key={i}>
                <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#fff" strokeWidth={18} strokeLinecap="round"/>
                <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="rgba(0,0,0,0.55)" strokeWidth={2} strokeDasharray="4 4" strokeLinecap="round"/>
              </g>
            )
          })}

          {/* LINES */}
          {LINE_ORDER.map((k, li) => {
            const line = LINES[k]
            const y = MARGIN_Y + li * LINE_GAP
            const x1 = MARGIN_X
            const x2 = MARGIN_X + (line.stops.length - 1) * STATION_GAP
            return (
              <g key={k}>
                <line x1={x1} y1={y} x2={x2} y2={y} stroke={line.color} strokeWidth={12} strokeLinecap="round"/>
                {/* Line label at terminus right */}
                <g transform={`translate(${x2 + 18}, ${y})`}>
                  <rect x="0" y="-12" rx="3" width={line.name.length * 7.2 + 16} height="24" fill={line.color}/>
                  <text x="8" y="5" fill="#fff" fontWeight="bold" fontSize="12" letterSpacing="1">{line.name}</text>
                </g>
                {/* terminus dots */}
                <circle cx={x1} cy={y} r={9} fill={line.color} stroke="#fff" strokeWidth="3"/>
                <circle cx={x2} cy={y} r={9} fill={line.color} stroke="#fff" strokeWidth="3"/>
              </g>
            )
          })}

          {/* STATIONS */}
          {LINE_ORDER.map((k, li) => {
            const line = LINES[k]
            return line.stops.map((stop, si) => {
              const { x, y } = stationXY(li, si)
              const isTerminus = si === 0 || si === line.stops.length - 1
              return (
                <g key={`${k}-${si}`}>
                  <circle cx={x} cy={y} r={isTerminus ? 11 : 8} fill="#fff" stroke="#0f172a" strokeWidth="3"/>
                  {/* label below */}
                  <g transform={`translate(${x}, ${y + 22})`}>
                    <text textAnchor="middle" fontWeight="bold" fontSize="13" fill="#0f172a" style={{ paintOrder: 'stroke', stroke: '#f4f0e6', strokeWidth: 4 }}>{stop.label}</text>
                    <text textAnchor="middle" fontSize="10" y="14" fill="rgba(0,0,0,0.65)" style={{ paintOrder: 'stroke', stroke: '#f4f0e6', strokeWidth: 3 }}>{stop.sub}</text>
                  </g>
                </g>
              )
            })
          })}
        </svg>
      </section>

      {/* STATION DETAIL CARDS · "Now Arriving" board */}
      <section className="px-8 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {LINE_ORDER.map(k => (
          <article key={k} className="bg-white border-2 border-stone-900/15 rounded-md overflow-hidden shadow-sm">
            <header className="px-4 py-2 flex items-center gap-3 text-white text-sm font-bold uppercase tracking-wider" style={{ background: LINES[k].color }}>
              <span className="size-6 rounded-full bg-white text-stone-900 grid place-items-center text-xs">{LINES[k].name[0]}</span>
              {LINES[k].name}
              <span className="ml-auto opacity-80 text-xs font-normal">Now Arriving · Live</span>
            </header>
            <div className="divide-y divide-stone-900/10">
              {LINES[k].stops.map((s, i) => (
                <div key={s.id} className="p-4 hover:bg-stone-50 transition">
                  <div className="flex items-baseline gap-3">
                    <span className="size-6 rounded-full grid place-items-center text-white text-xs font-bold" style={{ background: LINES[k].color }}>{i+1}</span>
                    <h4 className="text-base font-bold flex-1">{s.label}</h4>
                    <span className="text-[10px] uppercase tracking-wider text-stone-500">{s.sub}</span>
                  </div>
                  <p className="text-sm text-stone-700 mt-2 pl-9 leading-snug">{s.body}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* TICKET STUB CONTACT */}
      <footer className="mx-8 mb-10 p-6 bg-stone-900 text-stone-100 rounded-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-60">Day Pass · Unlimited Conversations</div>
          <div className="text-2xl font-bold tracking-tight">{profile.name}</div>
          <div className="text-sm opacity-80">{profile.location} · {profile.status}</div>
        </div>
        <div className="text-right text-sm font-mono">
          <div>{profile.email}</div>
          <div className="opacity-70">github.com/{profile.github}</div>
          <div className="opacity-70">linkedin.com/{profile.linkedin}</div>
        </div>
        <div className="w-full border-t border-dashed border-stone-700 pt-3 text-[10px] uppercase tracking-[0.25em] opacity-60 flex justify-between">
          <span>Valid · 2026 Hiring Season</span>
          <span>Not Transferable</span>
          <span>Punch Here ●</span>
        </div>
      </footer>

      <VariantSwitcher current="v12" dark={false} />
    </main>
  )
}
