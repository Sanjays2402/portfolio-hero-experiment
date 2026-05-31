'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { VariantSwitcher } from '@/components/variant-switcher'

const variants = [
  { slug: 'v1',        name: 'Glass',      sub: 'Aurora & frosted depth',     accent: 'from-fuchsia-400 via-violet-400 to-cyan-300' },
  { slug: 'v2',        name: 'Terminal',   sub: 'CRT, command-line, history', accent: 'from-emerald-300 via-emerald-400 to-emerald-300' },
  { slug: 'v3',        name: 'Brutalist',  sub: 'Yellow, black, no mercy',    accent: 'from-yellow-400 via-yellow-300 to-yellow-400' },
  { slug: 'v4',        name: 'Synthwave',  sub: 'Outrun grid, neon glow',     accent: 'from-pink-400 via-purple-400 to-cyan-300' },
  { slug: 'v5',        name: 'Blueprint',  sub: 'Drawing No. SS-2026',        accent: 'from-cyan-300 via-sky-400 to-blue-500' },
  { slug: 'v6',        name: 'Zine',       sub: 'Halftone comic, hand-stapled', accent: 'from-yellow-300 via-pink-400 to-rose-500' },
  { slug: 'v7',        name: 'Museum',     sub: 'Spotlit, serif, hushed',     accent: 'from-amber-200 via-amber-300 to-stone-500' },
  { slug: 'v8',        name: 'Y2K Aero',   sub: 'Frutiger Metro · 2003',      accent: 'from-sky-300 via-blue-400 to-pink-300' },
  { slug: 'v9',        name: 'Boarding',   sub: 'Sanjay Air · JAI → SEA',     accent: 'from-amber-100 via-stone-300 to-amber-200' },
  { slug: 'v10',       name: 'Newspaper',  sub: 'Broadsheet, drop caps, wire',accent: 'from-stone-300 via-amber-200 to-stone-400' },
  { slug: 'v11',       name: 'Receipt',    sub: 'Thermal, dot-matrix, barcode', accent: 'from-stone-100 via-stone-300 to-stone-500' },
  { slug: 'v12',       name: 'Subway',     sub: 'MTA line map of a career',   accent: 'from-red-400 via-blue-400 to-green-400' },
  { slug: 'v13',       name: 'Bloomberg',  sub: 'Career as a market product', accent: 'from-amber-300 via-amber-400 to-amber-200' },
  { slug: 'v14',       name: 'Polaroid',   sub: 'Corkboard, washi, push-pins',accent: 'from-amber-300 via-orange-400 to-rose-300' },
  { slug: 'editorial', name: 'Editorial',  sub: 'Magazine spread, serif',     accent: 'from-stone-200 via-stone-100 to-amber-100' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 lg:px-16 py-16 lg:py-24">
      <header className="max-w-6xl">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4">Portfolio Hero Experiment</div>
        <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-none">
          Fifteen complete portfolios.<br/>
          <span className="text-white/40">One person.</span>
        </h1>
        <p className="mt-6 text-lg text-white/65 max-w-2xl">
          Same data, fifteen totally different design languages. Each route is a self-contained site — no shared shell, no shared components. Pick one.
        </p>
      </header>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {variants.map((v, i) => (
          <motion.div key={v.slug}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Link href={`/${v.slug}`} className="group relative block p-7 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/[0.03] transition overflow-hidden">
              <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${v.accent}`} style={{ filter: 'blur(60px)', transform: 'scale(0.6)' }} />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/45">/{v.slug.toUpperCase()}</span>
                <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition">→</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">{v.name}</h2>
              <p className="mt-2 text-white/55 text-sm">{v.sub}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      <footer className="mt-24 max-w-6xl pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40 font-mono">
        <span>Built with Next.js 14 · Tailwind · Canvas 2D · zero UI libraries</span>
        <a href="https://github.com/Sanjays2402/portfolio-hero-experiment" className="hover:text-white">github.com/Sanjays2402/portfolio-hero-experiment ↗</a>
      </footer>

      <VariantSwitcher current="" dark />
    </div>
  )
}
