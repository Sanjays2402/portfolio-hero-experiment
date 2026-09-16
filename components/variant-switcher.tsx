'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const variants = [
  { slug: '',          label: 'Gallery' },
  { slug: 'v1',        label: 'Glass' },
  { slug: 'v2',        label: 'Terminal' },
  { slug: 'v3',        label: 'Brutalist' },
  { slug: 'v4',        label: 'Synthwave' },
  { slug: 'v5',        label: 'Blueprint' },
  { slug: 'v6',        label: 'Zine' },
  { slug: 'v7',        label: 'Museum' },
  { slug: 'v8',        label: 'Y2K' },
  { slug: 'v9',        label: 'Boarding' },
  { slug: 'v10',       label: 'News' },
  { slug: 'v11',       label: 'Receipt' },
  { slug: 'v12',       label: 'Subway' },
  { slug: 'v13',       label: 'Bloomberg' },
  { slug: 'v14',       label: 'Polaroid' },
  { slug: 'editorial', label: 'Editorial' },
]

export function VariantSwitcher({ current, dark = true }: { current: string; dark?: boolean }) {
  const router = useRouter()

  // Arrow-key navigation: ← / → flips to the previous / next variant.
  // Ignores keystrokes in text fields and any modifier-key combos.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      const target = e.target as HTMLElement | null
      const tag = target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable) return
      const idx = variants.findIndex(v => v.slug === current)
      const next = idx + (e.key === 'ArrowRight' ? 1 : -1)
      if (idx === -1 || next < 0 || next >= variants.length) return
      e.preventDefault()
      const slug = variants[next].slug
      router.push(slug ? `/${slug}` : '/')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, router])

  const base = dark
    ? 'bg-black/70 border-white/15 text-white/60 backdrop-blur-xl'
    : 'bg-white/85 border-black/15 text-black/60 backdrop-blur-xl'
  const active = dark ? 'bg-white text-black' : 'bg-black text-white'
  const hover  = dark ? 'hover:text-white hover:bg-white/10' : 'hover:text-black hover:bg-black/10'
  return (
    <div className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border shadow-2xl ${base} max-w-[95vw] overflow-x-auto`}>
      <span className="px-2 text-[10px] uppercase tracking-[0.2em] font-mono opacity-60 whitespace-nowrap">Variant</span>
      {variants.map(v => (
        <Link
          key={v.slug || 'home'}
          href={v.slug ? `/${v.slug}` : '/'}
          className={`px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide transition whitespace-nowrap ${current === v.slug ? active : hover}`}
        >
          {v.label}
        </Link>
      ))}
      <span className="pl-2 pr-1 text-[10px] font-mono opacity-40 whitespace-nowrap" title="Use ← → arrow keys to flip between variants">←→</span>
    </div>
  )
}
