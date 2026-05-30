import Link from 'next/link'

const variants = [
  { slug: 'v1', label: 'Variant 01 — Gradient Orb', desc: 'Layered conic-gradient sphere with orbiting particles. The original.' },
  { slug: 'v2', label: 'Variant 02 — Wireframe Globe', desc: 'Rotating lat/lng grid, isometric projection, glowing nodes.' },
  { slug: 'v3', label: 'Variant 03 — Particle Field', desc: '1,500 points flowing through a noise vector field. Aurora vibes.' },
  { slug: 'v4', label: 'Variant 04 — Synthwave Grid', desc: 'Perspective tunnel + sun. Outrun aesthetic.' },
]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-32 px-6">
      <div className="max-w-3xl w-full">
        <p className="text-xs font-medium tracking-[0.35em] uppercase text-muted-foreground mb-4 text-center">
          Portfolio Hero Experiments
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-center mb-4">
          Pick a centerpiece.
        </h1>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-14">
          Four animated heroes wrapped around the same editorial shell.
          Same nav, same typography, same CTAs — only the canvas behind changes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {variants.map((v) => (
            <Link
              key={v.slug}
              href={`/${v.slug}`}
              className="group p-6 rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md hover:border-foreground/40 hover:bg-background/70 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  /{v.slug}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-foreground">{v.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </Link>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground/70 mt-14">
          Built with Next.js 14 + Tailwind + Framer Motion + Canvas 2D. No 3D libs.
        </p>
      </div>
    </main>
  )
}
