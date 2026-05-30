'use client'
// V5 — BLUEPRINT (rebuilt): real schematic linework, sheet border, zone markers,
// title block, dimensioned hero, isometric project diagrams, hatched fills
import { profile, experience, projects, skills } from '@/lib/portfolio-data'
import { VariantSwitcher } from '@/components/variant-switcher'

const INK = '#7dd3fc'
const PAPER = '#0a1f3a'

export default function Blueprint() {
  return (
    <div className="min-h-screen text-cyan-100 font-mono selection:bg-cyan-300 selection:text-[#0a1f3a]"
         style={{
           background: PAPER,
           backgroundImage: `
             linear-gradient(rgba(125,211,252,0.14) 1px, transparent 1px),
             linear-gradient(90deg, rgba(125,211,252,0.14) 1px, transparent 1px),
             linear-gradient(rgba(125,211,252,0.05) 1px, transparent 1px),
             linear-gradient(90deg, rgba(125,211,252,0.05) 1px, transparent 1px)
           `,
           backgroundSize: '120px 120px, 120px 120px, 20px 20px, 20px 20px',
         }}>

      {/* SHEET — wraps everything as a single drawing */}
      <Sheet>

        {/* HERO — section A1 — dimensioned subject */}
        <Cell zone="A1" title="Plan View · Subject">
          <div className="grid grid-cols-12 gap-10 items-start">
            {/* Left: dimensioned headline */}
            <div className="col-span-12 lg:col-span-8">
              <DimensionedBox label="OVERALL · 100%">
                <h1 className="font-bold tracking-[-0.04em] leading-[0.85] text-cyan-50"
                    style={{ fontSize: 'clamp(64px, 11vw, 168px)', fontFamily: 'ui-sans-serif, system-ui' }}>
                  Sanjay<br/>Santhanam
                </h1>
              </DimensionedBox>

              <div className="mt-10 max-w-2xl border-l-2 border-cyan-300/40 pl-5">
                <CalloutLabel n="A1.1" text="Notes / Abstract" />
                <p className="mt-2 text-lg text-cyan-50 leading-relaxed normal-case tracking-normal">{profile.blurb}</p>
              </div>

              <div className="mt-8 flex gap-3 text-[11px] tracking-[0.2em] uppercase">
                <a href="#projects" className="relative px-4 py-3 border border-cyan-300 text-cyan-100 hover:bg-cyan-300 hover:text-[#0a1f3a] transition">
                  <span className="absolute -top-1 -left-1 size-1.5 bg-cyan-300" />
                  <span className="absolute -top-1 -right-1 size-1.5 bg-cyan-300" />
                  ▸ View Sheet B
                </a>
                <a href={`mailto:${profile.email}`} className="px-4 py-3 bg-cyan-300 text-[#0a1f3a] font-bold hover:bg-cyan-200 transition">
                  ▶ Initiate Contact
                </a>
              </div>
            </div>

            {/* Right: schematic figure */}
            <div className="col-span-12 lg:col-span-4 relative">
              <SchematicFigure />
              <div className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cyan-300/70 text-center">FIG. 1 · System Subject</div>
            </div>
          </div>

          {/* Spec strip below hero */}
          <div className="mt-12 grid grid-cols-12 border border-cyan-300/40 text-[11px]">
            <SpecCell label="Discipline" value={profile.title} span={4} />
            <SpecCell label="Locale"     value={profile.location} span={4} />
            <SpecCell label="Status"     value={profile.status} span={4} last />
          </div>
        </Cell>

        {/* PROJECTS — Sheet B */}
        <Cell zone="B1" title="Exploded View · Selected Projects" id="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cyan-300/30 border border-cyan-300/40">
            {projects.map((p, i) => <ProjectPlate key={p.n} project={p} idx={i} />)}
          </div>
        </Cell>

        {/* EXPERIENCE — Sheet C — section A-A */}
        <Cell zone="C1" title="Section A–A · Career Strata">
          <div className="relative pl-10">
            {/* Section line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-cyan-300/60" />
            <div className="absolute left-3 top-0 -translate-x-1/2 text-[10px] tracking-[0.3em] text-cyan-300 bg-[#0a1f3a] px-1">A</div>
            <div className="absolute left-3 bottom-0 -translate-x-1/2 text-[10px] tracking-[0.3em] text-cyan-300 bg-[#0a1f3a] px-1">A</div>
            {experience.map((e, i) => (
              <div key={i} className="relative mb-10">
                <div className="absolute -left-[34px] top-1.5 size-5 border-2 border-cyan-300 bg-[#0a1f3a] flex items-center justify-center">
                  <div className="size-1.5 bg-cyan-300" />
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300/70 mb-1">
                  Stratum {String(experience.length - i).padStart(2, '0')} · {e.period}
                </div>
                <h3 className="text-2xl font-bold text-cyan-50 normal-case tracking-normal" style={{ fontFamily: 'ui-sans-serif' }}>{e.company}</h3>
                <div className="text-sm text-cyan-200/80 normal-case tracking-normal mt-0.5">{e.role} · {e.location}</div>
                <p className="mt-2 text-cyan-100/90 normal-case tracking-normal max-w-2xl leading-relaxed">{e.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] tracking-[0.2em] uppercase">
                  {e.stack.map(s => <span key={s} className="border border-cyan-300/40 px-2 py-0.5 text-cyan-200">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Cell>

        {/* SKILLS — Sheet D — legend */}
        <Cell zone="D1" title="Legend · Materials & Tooling">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cyan-300/30 border border-cyan-300/40">
            {Object.entries(skills).map(([cat, items], i) => (
              <div key={cat} className="bg-[#0a1f3a] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <HatchSwatch variant={i} />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-cyan-300">{cat}</span>
                </div>
                <ul className="space-y-1.5 text-sm normal-case tracking-normal text-cyan-50">
                  {items.map(s => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="text-cyan-300/50">—</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Cell>

        {/* CONTACT — Sheet E */}
        <Cell zone="E1" title="Channels · Initiate Contact" last>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cyan-300/30 border border-cyan-300/40">
            {[
              { k: 'MAIL', v: profile.email,                href: `mailto:${profile.email}` },
              { k: 'REPO', v: '@' + profile.github,         href: `https://github.com/${profile.github}` },
              { k: 'PROF', v: profile.linkedin,             href: `https://linkedin.com/${profile.linkedin}` },
            ].map(c => (
              <a key={c.k} href={c.href} className="bg-[#0a1f3a] p-6 hover:bg-cyan-300 hover:text-[#0a1f3a] transition group block">
                <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">Channel · {c.k}</div>
                <div className="text-xl font-bold normal-case tracking-normal mt-2 break-all" style={{ fontFamily: 'ui-sans-serif' }}>{c.v}</div>
                <div className="mt-3 text-[10px] tracking-[0.3em] uppercase opacity-70">→ Open</div>
              </a>
            ))}
          </div>
        </Cell>

      </Sheet>

      <VariantSwitcher current="v5" dark />
    </div>
  )
}

/* ---------- Sheet chrome ---------- */

function Sheet({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-4 md:p-8">
      {/* Outer double border */}
      <div className="relative border-2 border-cyan-300/70 p-3 md:p-5">
        <div className="border border-cyan-300/40 relative">
          {/* Zone markers — top */}
          <ZoneStrip orientation="top"    items={['A','B','C','D','E']} />
          <ZoneStrip orientation="bottom" items={['A','B','C','D','E']} />
          <ZoneStrip orientation="left"   items={['1','2','3','4','5']} />
          <ZoneStrip orientation="right"  items={['1','2','3','4','5']} />

          {/* Corner crosshairs */}
          {[
            { top: -1, left: -1 },
            { top: -1, right: -1 },
            { bottom: -1, left: -1 },
            { bottom: -1, right: -1 },
          ].map((p, i) => (
            <svg key={i} width="22" height="22" viewBox="0 0 22 22" className="absolute pointer-events-none" style={p as React.CSSProperties}>
              <line x1="0" y1="11" x2="22" y2="11" stroke={INK} strokeWidth="1" />
              <line x1="11" y1="0" x2="11" y2="22" stroke={INK} strokeWidth="1" />
              <circle cx="11" cy="11" r="4" fill="none" stroke={INK} strokeWidth="1" />
            </svg>
          ))}

          {/* Title block — bottom right inside sheet */}
          <TitleBlock />

          {/* Inner padding container */}
          <div className="px-6 md:px-12 py-12 md:py-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function ZoneStrip({ orientation, items }: { orientation: 'top'|'bottom'|'left'|'right'; items: string[] }) {
  const isH = orientation === 'top' || orientation === 'bottom'
  const pos = orientation === 'top'    ? 'top-0 left-0 right-0' :
              orientation === 'bottom' ? 'bottom-0 left-0 right-0' :
              orientation === 'left'   ? 'top-0 bottom-0 left-0' :
                                          'top-0 bottom-0 right-0'
  return (
    <div className={`absolute ${pos} flex ${isH ? 'flex-row' : 'flex-col'} items-center justify-around text-[10px] tracking-[0.3em] text-cyan-300/70 pointer-events-none`}
         style={{ [isH ? 'height' : 'width']: 18 } as React.CSSProperties}>
      {items.map((c, i) => <span key={i}>{c}</span>)}
    </div>
  )
}

function TitleBlock() {
  return (
    <div className="absolute bottom-5 right-5 hidden md:block border border-cyan-300/80 bg-[#0a1f3a]/90 backdrop-blur text-[10px] tracking-[0.25em] uppercase z-10"
         style={{ width: 360 }}>
      <div className="grid grid-cols-3 border-b border-cyan-300/40">
        <div className="col-span-2 px-3 py-2 border-r border-cyan-300/40">
          <div className="opacity-60">Title</div>
          <div className="text-cyan-50 text-sm normal-case tracking-normal font-bold mt-0.5">Sanjay Santhanam · Engineer</div>
        </div>
        <div className="px-3 py-2">
          <div className="opacity-60">Sheet</div>
          <div className="text-cyan-50 text-sm normal-case tracking-normal font-bold mt-0.5">1 of 1</div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="px-3 py-2 border-r border-cyan-300/40">
          <div className="opacity-60">Dwg №</div>
          <div className="text-cyan-50 text-xs normal-case tracking-normal mt-0.5">SS-2026-V5</div>
        </div>
        <div className="px-3 py-2 border-r border-cyan-300/40">
          <div className="opacity-60">Scale</div>
          <div className="text-cyan-50 text-xs normal-case tracking-normal mt-0.5">1:1</div>
        </div>
        <div className="px-3 py-2 border-r border-cyan-300/40">
          <div className="opacity-60">Rev</div>
          <div className="text-cyan-50 text-xs normal-case tracking-normal mt-0.5">R04</div>
        </div>
        <div className="px-3 py-2">
          <div className="opacity-60">Date</div>
          <div className="text-cyan-50 text-xs normal-case tracking-normal mt-0.5">{new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  )
}

function Cell({ zone, title, id, children, last }: {
  zone: string; title: string; id?: string; children: React.ReactNode; last?: boolean
}) {
  return (
    <section id={id} className={`relative ${last ? '' : 'pb-16 mb-16 border-b border-cyan-300/30'}`}>
      <header className="flex items-center gap-3 mb-8">
        <div className="size-10 border-2 border-cyan-300 flex items-center justify-center text-cyan-200 font-bold text-sm tracking-widest">{zone}</div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300/70">Zone {zone}</div>
          <h2 className="text-2xl font-bold text-cyan-50 normal-case tracking-normal" style={{ fontFamily: 'ui-sans-serif' }}>{title}</h2>
        </div>
        <div className="flex-1 border-t border-dashed border-cyan-300/30 ml-3" />
        <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300/70 hidden md:block">Scale 1:1</div>
      </header>
      {children}
    </section>
  )
}

/* ---------- Drawing primitives ---------- */

function DimensionedBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Top dimension */}
      <div className="absolute -top-7 left-0 right-0 flex items-center text-[10px] tracking-[0.3em] uppercase text-cyan-300/80">
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M0 5 L10 0 L10 10 Z" fill={INK} /></svg>
        <span className="flex-1 border-t border-cyan-300/60 mx-1 relative">
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#0a1f3a] px-2">{label}</span>
        </span>
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M10 5 L0 0 L0 10 Z" fill={INK} /></svg>
      </div>
      <div className="pt-1">{children}</div>
      {/* Bottom corner ticks */}
      <div className="absolute -bottom-1 left-0 w-px h-3 bg-cyan-300/60" />
      <div className="absolute -bottom-1 right-0 w-px h-3 bg-cyan-300/60" />
    </div>
  )
}

function CalloutLabel({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-cyan-300/80">
      <span className="size-5 rounded-full border border-cyan-300 flex items-center justify-center text-[9px]">{n.split('.')[1] || n}</span>
      <span>{text}</span>
    </div>
  )
}

function SpecCell({ label, value, span, last }: { label: string; value: string; span: number; last?: boolean }) {
  return (
    <div className={`col-span-${span} px-4 py-3 ${last ? '' : 'border-r border-cyan-300/40'}`}>
      <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300/70">{label}</div>
      <div className="text-cyan-50 text-sm normal-case tracking-normal mt-1" style={{ fontFamily: 'ui-sans-serif' }}>{value}</div>
    </div>
  )
}

function SchematicFigure() {
  return (
    <svg viewBox="0 0 280 320" className="w-full">
      <defs>
        <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke={INK} strokeWidth="0.5" opacity="0.4" />
        </pattern>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill={INK} />
        </marker>
      </defs>

      {/* Frame */}
      <rect x="10" y="10" width="260" height="300" fill="none" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />

      {/* Iso block — engineer */}
      <g transform="translate(140 160)">
        {/* Top */}
        <polygon points="-60,-30 0,-60 60,-30 0,0" fill="url(#hatch)" stroke={INK} strokeWidth="1" />
        {/* Left face */}
        <polygon points="-60,-30 -60,40 0,70 0,0" fill="none" stroke={INK} strokeWidth="1" />
        {/* Right face */}
        <polygon points="60,-30 60,40 0,70 0,0" fill="none" stroke={INK} strokeWidth="1" />
        {/* Internal nodes */}
        <circle cx="0" cy="0" r="3" fill={INK} />
        <circle cx="-30" cy="15" r="2" fill={INK} opacity="0.7" />
        <circle cx="30" cy="15" r="2" fill={INK} opacity="0.7" />
        <line x1="0" y1="0" x2="-30" y2="15" stroke={INK} strokeWidth="0.6" />
        <line x1="0" y1="0" x2="30" y2="15"  stroke={INK} strokeWidth="0.6" />
        <line x1="-30" y1="15" x2="30" y2="15" stroke={INK} strokeWidth="0.6" strokeDasharray="2 2" />
      </g>

      {/* Dimensions */}
      <g>
        <line x1="80" y1="245" x2="200" y2="245" stroke={INK} strokeWidth="0.5" markerStart="url(#arr)" markerEnd="url(#arr)" opacity="0.7" />
        <text x="140" y="240" fill={INK} fontSize="9" textAnchor="middle" letterSpacing="2">W · 120</text>
        <line x1="240" y1="100" x2="240" y2="230" stroke={INK} strokeWidth="0.5" markerStart="url(#arr)" markerEnd="url(#arr)" opacity="0.7" />
        <text x="248" y="170" fill={INK} fontSize="9" letterSpacing="1" transform="rotate(90 248 170)" textAnchor="middle">H 130</text>
      </g>

      {/* Callouts */}
      {[
        { x: 70, y: 90, n: '01', label: 'IDEAS' },
        { x: 215, y: 70, n: '02', label: 'CODE' },
        { x: 200, y: 280, n: '03', label: 'SHIP' },
      ].map((c) => (
        <g key={c.n}>
          <line x1={c.x} y1={c.y} x2={140} y2={160} stroke={INK} strokeWidth="0.5" opacity="0.6" />
          <circle cx={c.x} cy={c.y} r="10" fill={PAPER} stroke={INK} strokeWidth="1" />
          <text x={c.x} y={c.y + 3} fill={INK} fontSize="8" textAnchor="middle">{c.n}</text>
          <text x={c.x} y={c.y + 22} fill={INK} fontSize="7" textAnchor="middle" letterSpacing="2">{c.label}</text>
        </g>
      ))}

      {/* North arrow */}
      <g transform="translate(40 40)">
        <circle cx="0" cy="0" r="14" fill="none" stroke={INK} strokeWidth="0.6" />
        <path d="M0 -10 L4 8 L0 5 L-4 8 z" fill={INK} />
        <text x="0" y="-18" fontSize="8" fill={INK} textAnchor="middle" letterSpacing="3">N</text>
      </g>
    </svg>
  )
}

function ProjectPlate({ project, idx }: { project: typeof projects[number]; idx: number }) {
  return (
    <article className="bg-[#0a1f3a] p-6 relative">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-300/70">Part №</div>
          <div className="text-3xl font-bold text-cyan-50 tracking-tight">{project.n}</div>
        </div>
        <ProjectSchematic kind={idx} />
      </div>
      <h3 className="text-2xl font-bold text-cyan-50 tracking-tight mb-2 normal-case" style={{ fontFamily: 'ui-sans-serif' }}>{project.title}</h3>
      <p className="text-sm text-cyan-100/85 leading-relaxed mb-4 normal-case tracking-normal">{project.blurb}</p>
      <div className="border-t border-cyan-300/30 pt-3 flex flex-wrap gap-1.5 text-[10px] tracking-[0.2em] uppercase">
        {project.stack.map(s => (
          <span key={s} className="border border-cyan-300/40 px-2 py-0.5 text-cyan-200">{s}</span>
        ))}
      </div>
    </article>
  )
}

function ProjectSchematic({ kind }: { kind: number }) {
  const common = { stroke: INK, strokeWidth: 1, fill: 'none' }
  return (
    <svg width="92" height="60" viewBox="0 0 92 60" className="opacity-90">
      {/* Frame */}
      <rect x="1" y="1" width="90" height="58" stroke={INK} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.4" fill="none" />
      {kind === 0 && (
        <>
          {/* db -> service -> client */}
          <ellipse cx="14" cy="30" rx="8" ry="4" {...common} />
          <ellipse cx="14" cy="34" rx="8" ry="4" {...common} />
          <rect x="38" y="22" width="20" height="16" {...common} />
          <circle cx="78" cy="30" r="6" {...common} />
          <line x1="22" y1="32" x2="38" y2="30" stroke={INK} strokeWidth="0.6" />
          <line x1="58" y1="30" x2="72" y2="30" stroke={INK} strokeWidth="0.6" />
        </>
      )}
      {kind === 1 && (
        <>
          {/* pipeline: 4 boxes */}
          {[6, 28, 50, 72].map((x, i) => (
            <g key={i}>
              <rect x={x} y="22" width="14" height="16" {...common} />
              {i < 3 && <line x1={x+14} y1="30" x2={x+22} y2="30" stroke={INK} strokeWidth="0.6" />}
            </g>
          ))}
        </>
      )}
      {kind === 2 && (
        <>
          {/* event bus */}
          <line x1="6" y1="30" x2="86" y2="30" stroke={INK} strokeWidth="1.5" />
          {[14, 36, 58, 80].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="14" r="4" {...common} />
              <line x1={x} y1="18" x2={x} y2="28" stroke={INK} strokeWidth="0.6" />
            </g>
          ))}
        </>
      )}
      {kind === 3 && (
        <>
          {/* layered stack */}
          <rect x="14" y="8"  width="64" height="10" {...common} />
          <rect x="14" y="22" width="64" height="10" {...common} />
          <rect x="14" y="36" width="64" height="10" {...common} />
          <line x1="46" y1="18" x2="46" y2="22" stroke={INK} strokeWidth="0.6" />
          <line x1="46" y1="32" x2="46" y2="36" stroke={INK} strokeWidth="0.6" />
        </>
      )}
    </svg>
  )
}

function HatchSwatch({ variant }: { variant: number }) {
  const id = 'hs' + variant
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="4" height="4" patternTransform={`rotate(${variant * 45})`}>
          <line x1="0" y1="0" x2="0" y2="4" stroke={INK} strokeWidth={variant % 2 ? 0.6 : 1} />
        </pattern>
      </defs>
      <rect width="14" height="14" fill={`url(#${id})`} stroke={INK} strokeWidth="0.6" />
    </svg>
  )
}
