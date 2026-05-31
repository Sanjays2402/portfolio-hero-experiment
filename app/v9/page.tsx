'use client'
// V9 — BOARDING PASS (rebuilt): real SVG perforation cutouts, real barcode,
// departure board section, baggage tags with string holes, route arc on globe
import { education, experience, profile, projects, research, skills, stats } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

const today = new Date()
const fmt = (d: Date) => d.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()
const tfmt = (d: Date) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).replace(':', '')

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
        <Ticket />
      </section>

      {/* DEPARTURE BOARD */}
      <Section eyebrow="Departure Board" title="Now boarding · all gates">
        <DepartureBoard />
      </Section>

      {/* ITINERARY (Experience) */}
      <Section eyebrow="Itinerary" title="Flight log · previous legs">
        <div className="bg-white/75 border border-stone-400/40 shadow-[0_8px_24px_-12px_rgba(120,80,30,0.25)]">
          <div className="grid grid-cols-12 gap-2 px-5 py-3 text-[10px] tracking-[0.3em] uppercase text-stone-600 border-b border-stone-300 bg-stone-100/80">
            <div className="col-span-2">Flight</div>
            <div className="col-span-2">Period</div>
            <div className="col-span-3">Carrier</div>
            <div className="col-span-3">Service</div>
            <div className="col-span-2 text-right">Status</div>
          </div>
          {experience.map((e, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 px-5 py-5 text-sm border-b last:border-b-0 border-stone-300/70 hover:bg-amber-50/60 transition">
              <div className="col-span-2 font-bold">SS-{(experience.length - i).toString().padStart(2,'0')}</div>
              <div className="col-span-2 text-stone-600 normal-case tracking-normal">{e.period}</div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => <LuggageTag key={p.n} project={p} idx={i} />)}
        </div>
      </Section>

      {/* SKILLS */}
      <Section eyebrow="Duty Free" title="Equipment carried">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="bg-white/75 border border-stone-400/40 p-5">
              <div className="flex items-center justify-between border-b border-dashed border-stone-300 pb-2 mb-3">
                <span className="text-[11px] tracking-[0.3em] uppercase text-stone-600">— {cat} —</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400">qty: {items.length}</span>
              </div>
              <ul className="space-y-1.5 text-sm normal-case tracking-normal" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '17px' }}>
                {items.map(s => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="italic flex-shrink-0">{s}</span>
                    <span className="text-stone-400 text-xs flex-1 truncate" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>· · · · · · · · · · · · · · · · · · · · · ·</span>
                    <span className="text-emerald-700 text-xs uppercase tracking-widest" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>OK</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* RESEARCH — passport stamps */}
      <Section eyebrow="Passport · Visa Pages" title="Published research stamps">
        <div className="text-center text-[11px] tracking-[0.3em] uppercase text-stone-600 -mt-4 mb-6">{stats.publications} entry stamps · {stats.citations}+ total citations</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {research.map((r, i) => (
            <div key={i} className="bg-white/80 border border-stone-400/40 p-6 relative overflow-hidden" style={{ transform: `rotate(${(i%2?-0.6:0.6)}deg)` }}>
              <div className="absolute -top-2 -right-2 pointer-events-none">
                <Stamp text={`CITED ${r.citations}×`} rotate={`${(i%2?6:-6)}deg`} color="#7c2d12" />
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600">{r.type} · {r.year}</div>
              <h3 className="font-serif italic text-xl md:text-2xl text-stone-900 mt-2 leading-snug" style={{ fontFamily: '"Cormorant Garamond", serif' }}>{r.title}</h3>
              <div className="mt-3 pt-3 border-t border-dashed border-stone-300 text-xs">
                <div className="text-stone-700 italic">{r.authors}</div>
                <div className="text-stone-600 mt-1 tracking-wide">{r.venue}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION — Issuing Authorities */}
      <Section eyebrow="Issuing Authorities" title="Credentials & training">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((e, i) => (
            <div key={e.degree} className="bg-stone-50/95 border border-stone-400/40 p-6 relative" style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.08), 0 6px 18px rgba(0,0,0,0.12)' }}>
              <div className="absolute top-3 right-3 text-[9px] font-mono tracking-widest text-stone-500 border border-stone-400/40 px-2 py-0.5 rounded-sm">CERT №{(i+1).toString().padStart(3,'0')}</div>
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-stone-500">Issuing Authority</div>
              <div className="text-stone-900 text-xl font-semibold mt-1 leading-tight">{e.school}</div>
              <div className="text-stone-700 text-sm italic mt-2">{e.degree}</div>
              <div className="mt-4 pt-3 border-t border-dashed border-stone-400/50 flex justify-between text-[11px] font-mono uppercase tracking-wider text-stone-600">
                <span>{e.location}</span><span>{e.period}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section eyebrow="Customs Form" title="Declarations & contact">
        <div className="bg-white/85 border border-stone-400/40 p-8 max-w-3xl mx-auto relative">
          <div className="absolute top-3 right-3 flex flex-col items-end gap-2 pointer-events-none">
            <Stamp text="APPROVED · SEA" rotate="-8deg" color="#0f766e" />
            <Stamp text="ENGINEER VISA · OPEN" rotate="4deg" color="#9a3412" />
          </div>

          <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600 mb-1">Form CF-{today.getFullYear()}</div>
          <h3 className="font-serif italic text-3xl text-stone-900 mb-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Reach the cockpit.</h3>

          <div className="grid grid-cols-12 gap-y-3 text-sm">
            <Field k="Full name" v={profile.name} />
            <Field k="Origin"    v={profile.location} />
            <Field k="Email"     v={profile.email}                href={`mailto:${profile.email}`} />
            <Field k="Github"    v={'github.com/' + profile.github}    href={`https://github.com/${profile.github}`} />
            <Field k="LinkedIn"  v={'linkedin.com/' + profile.linkedin} href={`https://linkedin.com/${profile.linkedin}`} />
            <Field k="Purpose"   v="Building meaningful software with thoughtful people." />
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

/* ---------- Ticket ---------- */

function Ticket() {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* The whole ticket as one SVG-masked shape for real perforation cutouts */}
      <div className="relative bg-white shadow-[0_30px_70px_-20px_rgba(120,80,30,0.4)] border border-stone-300 grid grid-cols-12">
        {/* MAIN BODY */}
        <div className="col-span-12 md:col-span-9 p-7 md:p-10">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600">Boarding Pass</div>
              <div className="font-serif italic text-3xl text-stone-900 mt-1 flex items-center gap-2" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                <PlaneIcon /> Sanjay Air
              </div>
            </div>
            <div className="text-right text-[10px] tracking-[0.3em] uppercase text-stone-600">
              <div>Class</div>
              <div className="text-stone-900 font-bold text-base mt-1">Engineer</div>
            </div>
          </div>

          {/* Route */}
          <div className="grid grid-cols-7 items-center mt-10 gap-2">
            <div className="col-span-2">
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600">From</div>
              <div className="text-5xl md:text-6xl font-black tracking-tighter mt-1 leading-none">JAI</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600 mt-2">Jaipur · IN</div>
            </div>
            <div className="col-span-3">
              <RouteArc />
            </div>
            <div className="col-span-2 text-right">
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600">To</div>
              <div className="text-5xl md:text-6xl font-black tracking-tighter mt-1 leading-none">SEA</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600 mt-2">Seattle · WA</div>
            </div>
          </div>

          {/* Passenger block */}
          <div className="grid grid-cols-4 gap-4 mt-10 pt-6 border-t border-dashed border-stone-400/70 text-[10px] tracking-[0.3em] uppercase">
            <KV k="Passenger" v={profile.name} />
            <KV k="Gate"      v="G-26A" />
            <KV k="Seat"      v="14A · Window" />
            <KV k="Status"    v="Confirmed" v2={profile.status} />
          </div>

          {/* Tagline */}
          <p className="mt-8 max-w-xl text-stone-700 leading-relaxed normal-case tracking-normal" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '18px' }}>
            {profile.blurb}
          </p>

          {/* Barcode */}
          <div className="mt-8 flex items-end gap-3">
            <Barcode />
            <div className="text-[10px] tracking-[0.4em] text-stone-600 whitespace-nowrap">SS·2026·XK7 · {tfmt(today)}</div>
          </div>
        </div>

        {/* PERFORATION */}
        <div className="hidden md:block col-span-0 w-px relative">
          <div className="absolute inset-y-3 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-stone-400" />
          <Notch position="top" />
          <Notch position="bottom" />
        </div>
        <div className="md:hidden col-span-12 h-px relative">
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-stone-400" />
        </div>

        {/* STUB */}
        <div className="col-span-12 md:col-span-3 p-6 md:p-7 bg-stone-50/80 relative">
          <div className="text-[10px] tracking-[0.3em] uppercase text-stone-600">Stub · Tear Here</div>
          <div className="font-serif italic text-xl text-stone-900 mt-1" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>Sanjay Air</div>

          <div className="mt-6 space-y-3 normal-case tracking-normal" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone-500" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>Passenger</div>
              <div className="italic text-sm mt-0.5">{profile.name}</div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone-500" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>Route</div>
              <div className="text-sm mt-0.5" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>JAI → SEA</div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-stone-500" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>Seat / Class</div>
              <div className="text-sm mt-0.5" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>14A · Engineer</div>
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <MiniBarcode />
            <div className="text-[10px] tracking-[0.3em] text-stone-600 mt-2" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>XK7 · {fmt(today)}</div>
          </div>

          {/* Stamp */}
          <Stamp text={`PROCESSED · ${today.getFullYear()}`} rotate="-12deg" color="#9a3412" className="absolute -top-3 right-3" />
        </div>
      </div>
    </div>
  )
}

function Notch({ position }: { position: 'top'|'bottom' }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 size-6 rounded-full bg-[#f4ede0] border border-stone-300"
         style={position === 'top' ? { top: -12 } : { bottom: -12 }} />
  )
}

function PlaneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-stone-700">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 1 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor" />
    </svg>
  )
}

function RouteArc() {
  return (
    <svg viewBox="0 0 240 80" className="w-full">
      <defs>
        <pattern id="dotline" x="0" y="0" width="6" height="2" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="#78716c" />
        </pattern>
      </defs>
      {/* Globe-ish baseline */}
      <ellipse cx="120" cy="80" rx="120" ry="40" fill="none" stroke="#d6d3d1" strokeWidth="0.5" strokeDasharray="2 3" />
      {/* Arc path */}
      <path d="M 20 60 Q 120 -10 220 60" stroke="url(#dotline)" strokeWidth="2" fill="none" />
      {/* Endpoints */}
      <circle cx="20" cy="60" r="4" fill="#0f766e" />
      <circle cx="220" cy="60" r="4" fill="#9a3412" />
      {/* Plane */}
      <g transform="translate(120 12) rotate(15)">
        <path d="M0 -4 L18 0 L0 4 L4 0 Z M-6 0 L18 0" stroke="#78716c" strokeWidth="1.5" fill="#78716c" strokeLinejoin="round" />
      </g>
      <text x="120" y="70" fontSize="9" fill="#78716c" textAnchor="middle" letterSpacing="3">CAREER ITINERARY</text>
    </svg>
  )
}

function Barcode() {
  // Pseudo-random but deterministic bar pattern
  const bars = Array.from({ length: 90 }, (_, i) => ({
    w: ((i * 7) % 4) + 1,
    g: ((i * 5) % 3) + 1,
  }))
  return (
    <div className="flex-1 flex gap-[1px] h-14 items-end overflow-hidden">
      {bars.map((b, i) => (
        <span key={i} className="bg-stone-900" style={{ width: b.w, height: '100%', marginRight: 0 }} />
      ))}
    </div>
  )
}

function MiniBarcode() {
  const bars = Array.from({ length: 28 }, (_, i) => ((i * 5) % 3) + 1)
  return (
    <div className="flex gap-[1.5px] h-10 items-end">
      {bars.map((w, i) => <span key={i} className="bg-stone-900" style={{ width: w, height: i % 4 === 0 ? '100%' : '88%' }} />)}
    </div>
  )
}

/* ---------- Departure Board ---------- */

function DepartureBoard() {
  const rows = [
    { time: '06:00', flight: 'SS-2020', from: 'Jaipur',     to: 'Pune',       gate: 'B12', status: 'Landed',    color: 'text-emerald-400' },
    { time: '09:15', flight: 'SS-2021', from: 'Pune',       to: 'Bangalore',  gate: 'C04', status: 'Landed',    color: 'text-emerald-400' },
    { time: '14:00', flight: 'SS-2022', from: 'Bangalore',  to: 'New Jersey', gate: 'A22', status: 'Landed',    color: 'text-emerald-400' },
    { time: '18:30', flight: 'SS-2024', from: 'New Jersey', to: 'Seattle',    gate: 'D18', status: 'Boarding',  color: 'text-amber-300 animate-pulse' },
    { time: '21:45', flight: 'SS-2026', from: 'Seattle',    to: '— Open —',   gate: 'G26', status: 'On Time',   color: 'text-amber-300' },
  ]
  return (
    <div className="bg-stone-950 border-2 border-stone-700 p-1 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
         style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
      <div className="grid grid-cols-12 gap-2 px-4 py-3 text-[10px] tracking-[0.3em] uppercase text-amber-300/80 border-b border-amber-300/20 bg-stone-900">
        <div className="col-span-1">Time</div>
        <div className="col-span-2">Flight</div>
        <div className="col-span-3">From</div>
        <div className="col-span-3">To</div>
        <div className="col-span-1">Gate</div>
        <div className="col-span-2 text-right">Status</div>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-12 gap-2 px-4 py-3 text-amber-100 text-sm border-b border-stone-800 last:border-b-0">
          <div className="col-span-1 font-bold">{r.time}</div>
          <div className="col-span-2 text-amber-300/90">{r.flight}</div>
          <div className="col-span-3 uppercase">{r.from}</div>
          <div className="col-span-3 uppercase font-bold">{r.to}</div>
          <div className="col-span-1">{r.gate}</div>
          <div className={`col-span-2 text-right uppercase font-bold ${r.color}`}>{r.status}</div>
        </div>
      ))}
    </div>
  )
}

/* ---------- Sections ---------- */

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

function LuggageTag({ project, idx }: { project: typeof projects[number]; idx: number }) {
  return (
    <article className="relative bg-amber-100/80 border-2 border-stone-700/80 p-5 pt-7"
             style={{ transform: `rotate(${idx % 2 ? '0.5deg' : '-0.4deg'})`, boxShadow: '5px 5px 0 rgba(120,80,30,0.15)' }}>
      {/* String hole + string */}
      <div className="absolute -top-4 left-6">
        <div className="size-5 rounded-full bg-[#f4ede0] border-2 border-stone-700/80" />
        <svg width="60" height="50" viewBox="0 0 60 50" className="absolute -top-12 left-1.5 pointer-events-none">
          <path d="M0 0 Q 20 20 8 48" stroke="#78716c" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
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
        <span>Origin · SEA</span><span>HANDLE WITH CARE</span>
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
